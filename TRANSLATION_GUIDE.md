# Translation Workflow with IndicTrans2

## Overview
This guide explains how to translate course content from English to Marathi using IndicTrans2.

## Files Generated

### 1. Extraction Phase (Already Done ✅)
```
translation-input/
  ├── beginner-en.json      (586 text items)
  ├── intermediate-en.json  (484 text items)
  ├── advanced-en.json      (429 text items)
  └── professional-en.json  (467 text items)

translation-batch/
  ├── beginner-en.txt          (Line-by-line English text)
  ├── beginner-mapping.json    (Mapping for reconstruction)
  ├── intermediate-en.txt
  ├── intermediate-mapping.json
  ├── advanced-en.txt
  ├── advanced-mapping.json
  ├── professional-en.txt
  └── professional-mapping.json
```

## Translation Steps

### Step 1: Translate with IndicTrans2

For each course, translate the `*-en.txt` file to Marathi:

```bash
# Example for beginner course
# Input:  translation-batch/beginner-en.txt
# Output: translation-batch/beginner-mr.txt

# Make sure output has SAME number of lines as input!
```

**Important:** 
- Each line in `*-en.txt` must have a corresponding line in `*-mr.txt`
- Lines must be in the same order
- Empty lines should remain empty

### Step 2: Verify Line Counts

```bash
# Check line counts match
wc -l translation-batch/beginner-en.txt
wc -l translation-batch/beginner-mr.txt

# Should be:
# 586 beginner-en.txt
# 586 beginner-mr.txt
```

### Step 3: Reconstruct JSON Files

Once you have translated all `*-mr.txt` files:

```bash
cd /d/2026/python/ai
node scripts/reconstruct-translations.js
```

This will create:
```
src/i18n/courseTranslations/
  ├── beginner-mr.json
  ├── intermediate-mr.json
  ├── advanced-mr.json
  └── professional-mr.json
```

### Step 4: Test Translations

1. Start dev server: `npm run dev`
2. Switch language to Marathi (मराठी) in the UI
3. Navigate to topics and verify translations appear correctly

## Translation Priority

Recommend translating in this order:
1. ✅ **beginner-en.txt** (586 lines) - Most important for new users
2. intermediate-en.txt (484 lines)
3. advanced-en.txt (429 lines)
4. professional-en.txt (467 lines)

Total: **1,966 lines** to translate

## IndicTrans2 Setup (Sample)

```python
# Example IndicTrans2 usage (adjust based on your setup)
from indictrans2 import Translator

translator = Translator(source='en', target='mr')

# Translate file line by line
with open('translation-batch/beginner-en.txt', 'r', encoding='utf-8') as f_in:
    with open('translation-batch/beginner-mr.txt', 'w', encoding='utf-8') as f_out:
        for line in f_in:
            if line.strip():
                translated = translator.translate(line.strip())
                f_out.write(translated + '\n')
            else:
                f_out.write('\n')
```

## Quality Checks

After reconstruction, verify:
- [ ] All topic titles translated
- [ ] Technical terms preserved (Python, Django, Flask, etc.)
- [ ] Code stays in English
- [ ] Grammar and context maintained
- [ ] No missing translations (check for English fallbacks)

## Troubleshooting

**Q: Line count mismatch?**
A: Check for extra newlines in translated file. Each line in input must match output.

**Q: Missing translations after reconstruction?**
A: Verify `*-mr.txt` file has same number of lines as `*-en.txt`

**Q: Technical terms translated incorrectly?**
A: This is expected with auto-translation. You can manually edit the `*-mr.json` files after reconstruction.

## Manual Edits

After auto-translation, you can manually improve:
```bash
# Edit reconstructed files directly
src/i18n/courseTranslations/beginner-mr.json
```

Changes will be reflected immediately when you refresh the app.

## Summary

```
1. Extract: ✅ DONE (ran extract-english-content.js and create-batch-files.js)
2. Translate: 🔄 YOUR TASK (use IndicTrans2 on *-en.txt files)
3. Reconstruct: ⏳ READY (run reconstruct-translations.js after step 2)
4. Test: ⏳ READY (switch to Marathi in app)
```

Current status: **Ready for IndicTrans2 translation!**
