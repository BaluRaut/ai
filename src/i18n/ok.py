#!/usr/bin/env python3
"""
Translate an uploaded JSON course file to Marathi, Tamil, Kannada using IndicTrans2 pipeline.

- Input file hardcoded to the uploaded path /mnt/data/course-content-en.json
- Uses ai4bharat/indictrans2-en-indic-1B if available (best), otherwise you can set --model to a fallback.
- Requires: transformers, torch, IndicTransToolkit, mosestokenizer, indic-nlp-library, tqdm
- If models are gated, login with `huggingface-cli login` before running.

Usage:
  python translate_course_content_indictrans2.py --input "/mnt/data/course-content-en.json" --output_dir "./translations_out" --model "ai4bharat/indictrans2-en-indic-1B"
"""
import argparse, json, os, sys, time
import logging
from pathlib import Path
from tqdm import tqdm
import ctypes

import torch
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from IndicTransToolkit.processor import IndicProcessor

# Windows sleep prevention
ES_CONTINUOUS = 0x80000000
ES_SYSTEM_REQUIRED = 0x00000001

def prevent_sleep():
    """Prevent Windows from going to sleep."""
    if sys.platform == 'win32':
        try:
            ctypes.windll.kernel32.SetThreadExecutionState(
                ES_CONTINUOUS | ES_SYSTEM_REQUIRED
            )
            logger.info("Sleep prevention activated (system will stay awake)")
        except Exception as e:
            logger.warning(f"Could not prevent sleep: {e}")

def allow_sleep():
    """Allow Windows to sleep again."""
    if sys.platform == 'win32':
        try:
            ctypes.windll.kernel32.SetThreadExecutionState(ES_CONTINUOUS)
            logger.info("Sleep prevention deactivated")
        except Exception as e:
            logger.warning(f"Could not restore sleep: {e}")

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler('translation_debug.log')
    ]
)
logger = logging.getLogger(__name__)

# -----------------------
# Helpers for nested JSON
# -----------------------
# Fields to skip translation (IDs, technical identifiers, etc.)
SKIP_TRANSLATION_KEYS = {
    "id", "name", "language", "version", "createdAt", "updatedAt",
    "key", "slug", "code", "type", "status", "url", "path"
}

def should_translate_field(path):
    """Check if a field should be translated based on its path."""
    # Extract the last key from the path
    parts = path.replace(']', '').replace('[', '.').split('.')
    last_key = parts[-1] if parts else ""
    
    # Skip if the key is in our exclusion list
    if last_key in SKIP_TRANSLATION_KEYS:
        logger.debug(f"Skipping translation for field: {last_key} (path: {path})")
        return False
    
    return True

def collect_paths(obj, prefix=""):
    logger.debug(f"collect_paths called with prefix='{prefix}', type={type(obj).__name__}")
    items=[]
    if isinstance(obj, dict):
        logger.debug(f"Processing dict with {len(obj)} keys")
        for k,v in obj.items():
            new = f"{prefix}.{k}" if prefix else k
            items.extend(collect_paths(v, new))
    elif isinstance(obj, list):
        logger.debug(f"Processing list with {len(obj)} items")
        for i,v in enumerate(obj):
            new = f"{prefix}[{i}]" if prefix else f"[{i}]"
            items.extend(collect_paths(v, new))
    elif isinstance(obj, str):
        # Only add to translation list if should be translated
        if should_translate_field(prefix):
            items.append((prefix, obj))
        else:
            logger.debug(f"Excluded from translation: {prefix}")
    logger.debug(f"collect_paths returning {len(items)} items")
    return items

def set_by_path(obj, path, value):
    logger.debug(f"set_by_path: path='{path}'")
    # parse path like a.b[0].c
    parts=[]; buf=""; i=0
    while i < len(path):
        if path[i] == "[":
            if buf:
                parts.append(buf); buf=""
            j = path.index("]", i)
            parts.append(int(path[i+1:j])); i = j+1
        elif path[i] == ".":
            if buf:
                parts.append(buf); buf=""
            i += 1
        else:
            buf += path[i]; i += 1
    if buf: parts.append(buf)
    logger.debug(f"Parsed path into parts: {parts}")
    cur = obj
    for idx, p in enumerate(parts):
        last = (idx == len(parts)-1)
        if isinstance(p, int):
            if last:
                cur[p] = value
            else:
                cur = cur[p]
        else:
            if last:
                cur[p] = value
            else:
                if p not in cur: cur[p] = {}
                cur = cur[p]

def load_json(p):
    logger.info(f"Loading JSON from: {p}")
    with open(p, "r", encoding="utf-8") as f:
        data = json.load(f)
    logger.info(f"JSON loaded successfully, type={type(data).__name__}")
    return data

def save_json(obj, p):
    logger.info(f"Saving JSON to: {p}")
    d = os.path.dirname(p)
    if d:
        os.makedirs(d, exist_ok=True)
    with open(p, "w", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False, indent=2)
    logger.info(f"JSON saved successfully to: {p}")

# -----------------------
# Translation utilities
# -----------------------
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
BATCH_SIZE = 16  # Increased from 8 - faster processing (adjust based on RAM/GPU memory)
SRC_LANG = "eng_Latn"
# map short code -> flores code used by IndicProcessor
LANG_MAP = {
    "mr": "mar_Deva"
}

def load_model_tokenizer(model_name):
    logger.info(f"Loading model/tokenizer: {model_name}")
    logger.info("Loading tokenizer...")
    tokenizer = AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)
    logger.info("Tokenizer loaded successfully")
    logger.info("Loading model...")
    model = AutoModelForSeq2SeqLM.from_pretrained(model_name, trust_remote_code=True)
    logger.info(f"Model loaded successfully, moving to device: {DEVICE}")
    model.to(DEVICE); model.eval()
    logger.info("Model ready for inference")
    return tokenizer, model

def translate_batch(sentences, tgt_flores, tokenizer, model, ip):
    logger.info(f"translate_batch: Processing {len(sentences)} sentences to {tgt_flores}")
    out=[]
    for i in range(0, len(sentences), BATCH_SIZE):
        batch = sentences[i:i+BATCH_SIZE]
        logger.debug(f"Processing batch {i//BATCH_SIZE + 1}, size={len(batch)}")
        
        # preprocess replaces named entities and normalizes sentence as toolkit expects
        logger.debug("Preprocessing batch...")
        batch_proc = ip.preprocess_batch(batch, src_lang=SRC_LANG, tgt_lang=tgt_flores)
        logger.debug("Batch preprocessed")
        
        logger.debug("Tokenizing...")
        tokens = tokenizer(batch_proc, return_tensors="pt", padding=True, truncation=True).to(DEVICE)
        logger.debug(f"Tokenized, input shape: {tokens['input_ids'].shape}")
        
        logger.debug("Generating translations...")
        with torch.no_grad():
            # Using num_beams=5 for best quality, early_stopping for efficiency
            gen = model.generate(**tokens, num_beams=5, max_length=256, early_stopping=True)
        logger.debug(f"Generation complete, output shape: {gen.shape}")
        
        logger.debug("Decoding...")
        decoded = tokenizer.batch_decode(gen, skip_special_tokens=True, clean_up_tokenization_spaces=True)
        logger.debug("Decoded")
        
        logger.debug("Postprocessing...")
        post = ip.postprocess_batch(decoded, lang=tgt_flores)
        logger.debug(f"Postprocessed {len(post)} translations")
        
        out.extend(post)
        # free up cuda memory if available
        if DEVICE.startswith("cuda"):
            del tokens; del gen
            torch.cuda.empty_cache()
            logger.debug("CUDA cache cleared")
    
    logger.info(f"translate_batch: Completed {len(out)} translations")
    return out

# -----------------------
# Main pipeline
# -----------------------
def main():
    logger.info("=" * 60)
    logger.info("Starting translation pipeline")
    logger.info("=" * 60)
    
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", required=True, help="Full path to source English JSON")
    parser.add_argument("--output_dir", "-o", default="./translations_out")
    parser.add_argument("--model", "-m", default="ai4bharat/indictrans2-en-indic-1B", help="HF model (1B or dist) - must have access for gated models")
    parser.add_argument("--fallback_model", default="ai4bharat/indictrans2-en-indic-dist-200M", help="Fallback if primary gated/not accessible")
    args = parser.parse_args()
    
    logger.info(f"Arguments parsed:")
    logger.info(f"  Input: {args.input}")
    logger.info(f"  Output dir: {args.output_dir}")
    logger.info(f"  Model: {args.model}")
    logger.info(f"  Fallback model: {args.fallback_model}")
    logger.info(f"  Device: {DEVICE}")

    input_path = Path(args.input)
    logger.info(f"Loading input JSON from: {input_path}")
    data_en = load_json(str(input_path))
    
    logger.info("Collecting string paths from JSON...")
    pairs = collect_paths(data_en)
    logger.info(f"Total string entries: {len(pairs)}")
    
    logger.info("Extracting unique strings...")
    unique = list({t for _,t in pairs})
    logger.info(f"Unique strings: {len(unique)}")

    logger.info("Initializing IndicProcessor...")
    ip = IndicProcessor(inference=True)
    logger.info("IndicProcessor initialized")

    # Try load primary model, else fallback
    try:
        logger.info("Attempting to load primary model...")
        tokenizer, model = load_model_tokenizer(args.model)
        logger.info("Primary model loaded successfully")
    except Exception as e:
        logger.error(f"Primary model failed: {e}")
        logger.info(f"Trying fallback model: {args.fallback_model}")
        tokenizer, model = load_model_tokenizer(args.fallback_model)
        logger.info("Fallback model loaded successfully")

    logger.info(f"Creating output directory: {args.output_dir}")
    os.makedirs(args.output_dir, exist_ok=True)

    merged = {"en": data_en}
    logger.info(f"Processing {len(LANG_MAP)} target languages...")
    
    for lang_idx, (short_lang, flores_code) in enumerate(LANG_MAP.items(), 1):
        logger.info("=" * 60)
        logger.info(f"Language {lang_idx}/{len(LANG_MAP)}: Translating to {short_lang} ({flores_code})")
        logger.info("=" * 60)
        
        translated_map = {}
        # translate unique strings in batches
        num_batches = (len(unique) + BATCH_SIZE - 1) // BATCH_SIZE
        logger.info(f"Processing {len(unique)} unique strings in {num_batches} batches...")
        
        for i in range(0, len(unique), BATCH_SIZE):
            batch_num = i // BATCH_SIZE + 1
            batch = unique[i:i+BATCH_SIZE]
            logger.info(f"Batch {batch_num}/{num_batches}: Processing {len(batch)} strings...")
            
            try:
                out_batch = translate_batch(batch, flores_code, tokenizer, model, ip)
                logger.info(f"Batch {batch_num}/{num_batches}: Translated successfully")
            except Exception as e:
                logger.error(f"Batch {batch_num} translate failed: {e}", exc_info=True)
                # fallback: copy originals
                out_batch = batch
                logger.warning(f"Using original text as fallback for batch {batch_num}")
            
            for s, t in zip(batch, out_batch):
                translated_map[s] = t
            logger.debug(f"Batch {batch_num}: Mapped {len(batch)} translations")
        
        logger.info(f"All batches complete for {short_lang}. Building output JSON...")
        # map back to nested JSON
        out_json = json.loads(json.dumps(data_en))
        logger.info(f"Applying {len(pairs)} translations to output structure...")
        
        for idx, (path, orig) in enumerate(pairs):
            if idx % 1000 == 0 and idx > 0:
                logger.debug(f"Applied {idx}/{len(pairs)} translations...")
            set_by_path(out_json, path, translated_map.get(orig, orig))
        
        logger.info(f"All translations applied for {short_lang}")
        
        out_file = Path(args.output_dir) / f"{input_path.stem}_{short_lang}.json"
        save_json(out_json, str(out_file))
        logger.info(f"Saved {short_lang} translation to: {out_file}")
        
        merged[short_lang] = out_json
    
    # save merged
    logger.info("=" * 60)
    logger.info("Saving merged file with all languages...")
    merged_path = Path(args.output_dir) / "course-content-all-langs.json"
    save_json(merged, str(merged_path))
    logger.info(f"Merged file saved: {merged_path}")
    logger.info("=" * 60)
    logger.info("Translation pipeline completed successfully!")
    logger.info("=" * 60)

if __name__ == "__main__":
    logger.info("Script started")
    prevent_sleep()  # Keep system awake during translation
    try:
        main()
    except Exception as e:
        logger.error(f"Fatal error in main: {e}", exc_info=True)
        sys.exit(1)
    finally:
        allow_sleep()  # Restore normal sleep behavior
    logger.info("Script finished successfully")
