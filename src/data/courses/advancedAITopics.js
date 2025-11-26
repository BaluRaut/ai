// Advanced AI Topics: Prompt Engineering, RAG, MLOps, Transfer Learning, NLP

export const advancedAITopicsContent = {
  id: 'advanced-ai-topics',
  title: 'Advanced AI Topics',
  description: 'Master cutting-edge AI techniques: Prompt Engineering, RAG, MLOps, and more',
  icon: '🚀',
  topics: [
    // ==================== PROMPT ENGINEERING ====================
    {
      id: 'prompt-engineering-fundamentals',
      title: 'Prompt Engineering Fundamentals',
      description: 'Master the art of crafting effective prompts for LLMs',
      content: `
# Prompt Engineering Fundamentals

Prompt engineering is the skill of crafting inputs that guide LLMs to produce desired outputs.

## Why Prompt Engineering Matters

- LLMs are powerful but need proper guidance
- Good prompts = better, more accurate responses
- Can replace fine-tuning for many tasks
- Essential skill for AI application development

## Basic Prompt Patterns

### 1. Direct Instruction
\`\`\`python
# Simple, clear instruction
prompt = """
Summarize the following text in 3 bullet points:

Text: Machine learning is a subset of artificial intelligence that 
enables systems to learn and improve from experience without being 
explicitly programmed. It focuses on developing algorithms that can 
access data and use it to learn for themselves.
"""
\`\`\`

### 2. Role-Based Prompting
\`\`\`python
# Assign a persona/role
prompt = """
You are an expert Python developer with 10 years of experience.
Review the following code and suggest improvements:

def calculate_average(numbers):
    total = 0
    for n in numbers:
        total = total + n
    average = total / len(numbers)
    return average
"""
\`\`\`

### 3. Few-Shot Learning
\`\`\`python
# Provide examples before the task
prompt = """
Classify the sentiment of movie reviews.

Review: "This movie was absolutely fantastic! Best I've seen all year."
Sentiment: Positive

Review: "Terrible acting, boring plot. Waste of time."
Sentiment: Negative

Review: "It was okay, nothing special but not bad either."
Sentiment: Neutral

Review: "Mind-blowing visual effects and gripping storyline!"
Sentiment:
"""
\`\`\`

### 4. Chain of Thought (CoT)
\`\`\`python
# Guide step-by-step reasoning
prompt = """
Solve this problem step by step:

Problem: If a train travels at 60 mph for 2.5 hours, then at 80 mph 
for 1.5 hours, what is the total distance traveled?

Let's think step by step:
1. First, calculate distance at 60 mph...
2. Then, calculate distance at 80 mph...
3. Finally, add both distances...
"""
\`\`\`

## Advanced Techniques

### 5. Output Format Specification
\`\`\`python
prompt = """
Extract information from this text and return as JSON:

Text: "John Smith, age 35, works as a Software Engineer at Google 
in Mountain View, California."

Return format:
{
    "name": "",
    "age": 0,
    "job_title": "",
    "company": "",
    "location": ""
}
"""
\`\`\`

### 6. Constraint-Based Prompting
\`\`\`python
prompt = """
Write a product description with these constraints:
- Maximum 50 words
- Include exactly 3 key features
- Use active voice
- End with a call-to-action

Product: Wireless Bluetooth Headphones
"""
\`\`\`

### 7. Self-Consistency
\`\`\`python
# Ask for multiple approaches, then synthesize
prompt = """
I need to decide whether to invest in Company X.

First, analyze from a BULL perspective (reasons to invest).
Then, analyze from a BEAR perspective (reasons not to invest).
Finally, give a balanced recommendation.

Company X Info: [details here]
"""
\`\`\`

## Prompt Engineering Best Practices

\`\`\`python
# ✅ Good Prompt Structure
good_prompt = """
CONTEXT: You are a medical information assistant (not a doctor).

TASK: Explain the following medical term in simple language that 
a patient could understand.

CONSTRAINTS:
- Use analogies where helpful
- Avoid technical jargon
- Include when to see a doctor
- Maximum 100 words

TERM: Hypertension

OUTPUT FORMAT:
- Simple explanation
- Common causes
- Warning signs
"""

# ❌ Bad Prompt
bad_prompt = "What is hypertension?"
\`\`\`

## Common Prompt Patterns Summary

| Pattern | Use Case | Example Start |
|---------|----------|---------------|
| Direct | Simple tasks | "Translate to French:" |
| Role | Expert knowledge | "As a lawyer, explain..." |
| Few-shot | Classification | "Example 1... Example 2..." |
| CoT | Complex reasoning | "Let's think step by step" |
| Format | Structured output | "Return as JSON:" |
      `,
      codeExamples: [
        {
          title: 'Prompt Templates in Python',
          code: `# Prompt Engineering Templates

class PromptTemplate:
    """Reusable prompt templates."""
    
    @staticmethod
    def classification(examples, text):
        prompt = "Classify the following text.\\n\\n"
        for ex_text, ex_label in examples:
            prompt += f"Text: {ex_text}\\nLabel: {ex_label}\\n\\n"
        prompt += f"Text: {text}\\nLabel:"
        return prompt
    
    @staticmethod
    def chain_of_thought(problem):
        return f"""Solve this problem step by step:

Problem: {problem}

Let's approach this systematically:
Step 1:"""
    
    @staticmethod
    def json_extraction(text, schema):
        return f"""Extract information from this text as JSON.

Text: {text}

Schema: {schema}

JSON Output:"""

# Example usage
examples = [
    ("I love this product!", "Positive"),
    ("Terrible experience", "Negative"),
]

prompt = PromptTemplate.classification(
    examples, 
    "Pretty good overall"
)
print("=== Classification Prompt ===")
print(prompt)

print("\\n=== CoT Prompt ===")
print(PromptTemplate.chain_of_thought(
    "Calculate 15% tip on $47.50"
))`
        }
      ]
    },
    {
      id: 'prompt-engineering-advanced',
      title: 'Advanced Prompt Techniques',
      description: 'System prompts, temperature, and production patterns',
      content: `
# Advanced Prompt Engineering

## System Prompts

System prompts set the overall behavior and constraints for the model.

\`\`\`python
# OpenAI API style
messages = [
    {
        "role": "system",
        "content": """You are a helpful coding assistant specialized in Python.
        
Rules:
- Always include error handling in code examples
- Explain your code with comments
- Suggest best practices when relevant
- If unsure, say so rather than guessing
- Keep responses concise but complete"""
    },
    {
        "role": "user", 
        "content": "How do I read a JSON file?"
    }
]
\`\`\`

## Temperature & Parameters

\`\`\`python
# Temperature controls randomness
# Low (0.0-0.3): Deterministic, factual
# Medium (0.4-0.7): Balanced
# High (0.8-1.0): Creative, varied

parameters = {
    "temperature": 0.2,      # Low for code/facts
    "max_tokens": 1000,      # Output length limit
    "top_p": 0.9,            # Nucleus sampling
    "frequency_penalty": 0,   # Reduce repetition
    "presence_penalty": 0     # Encourage new topics
}

# Use cases:
# Code generation: temperature=0.1-0.2
# Creative writing: temperature=0.7-0.9
# Factual Q&A: temperature=0.0-0.2
# Brainstorming: temperature=0.8-1.0
\`\`\`

## Prompt Chaining

\`\`\`python
# Break complex tasks into steps
def analyze_code_quality(code):
    # Step 1: Identify issues
    prompt1 = f"""
    Analyze this code and list potential issues:
    {code}
    
    List issues as bullet points:
    """
    issues = call_llm(prompt1)
    
    # Step 2: Prioritize issues
    prompt2 = f"""
    Given these code issues:
    {issues}
    
    Rank them by severity (Critical/Medium/Low):
    """
    prioritized = call_llm(prompt2)
    
    # Step 3: Generate fixes
    prompt3 = f"""
    For these prioritized issues:
    {prioritized}
    
    Provide code fixes for the Critical issues:
    """
    fixes = call_llm(prompt3)
    
    return fixes
\`\`\`

## Handling Edge Cases

\`\`\`python
# Defensive prompting
prompt = """
Analyze the sentiment of the following text.

Rules:
- If the text is empty, respond with "ERROR: Empty input"
- If the text is not in English, respond with "ERROR: Non-English text"
- If sentiment is unclear, respond with "UNCERTAIN" and explain why
- For clear sentiment, respond with: POSITIVE, NEGATIVE, or NEUTRAL

Text: {user_input}
Sentiment:
"""

# Input validation prompt
validation_prompt = """
Validate the following user input for a registration form.

Input: {user_input}
Field: {field_name}
Expected format: {expected_format}

Respond with JSON:
{
    "is_valid": true/false,
    "error_message": "..." or null,
    "sanitized_value": "..." or null
}
"""
\`\`\`

## Production Prompt Patterns

### 1. Guardrails
\`\`\`python
system_prompt = """
You are a customer service bot for TechCorp.

ALLOWED TOPICS:
- Product information
- Order status
- Returns and refunds
- Technical support

NOT ALLOWED:
- Competitor comparisons
- Price negotiations
- Legal advice
- Personal opinions

If user asks about disallowed topics, politely redirect:
"I can help you with product questions, orders, returns, or 
technical support. How can I assist with those?"
"""
\`\`\`

### 2. Output Validation
\`\`\`python
import json

def get_structured_response(prompt, max_retries=3):
    for attempt in range(max_retries):
        response = call_llm(prompt + "\\nRespond in valid JSON only.")
        try:
            return json.loads(response)
        except json.JSONDecodeError:
            if attempt < max_retries - 1:
                prompt += "\\n\\nPrevious response was invalid JSON. Try again."
    raise ValueError("Failed to get valid JSON response")
\`\`\`

### 3. Context Window Management
\`\`\`python
def summarize_for_context(long_text, max_tokens=1000):
    """Compress long context to fit in prompt."""
    prompt = f"""
    Summarize the following text, preserving key facts and details.
    Maximum length: {max_tokens} tokens.
    
    Text:
    {long_text}
    
    Summary:
    """
    return call_llm(prompt)

def build_conversation_prompt(history, new_message, max_history=5):
    """Keep recent conversation context."""
    recent = history[-max_history:]
    prompt = "Previous conversation:\\n"
    for msg in recent:
        prompt += f"{msg['role']}: {msg['content']}\\n"
    prompt += f"User: {new_message}\\nAssistant:"
    return prompt
\`\`\`

## Prompt Testing Framework

\`\`\`python
class PromptTester:
    def __init__(self, prompt_template):
        self.template = prompt_template
        self.test_cases = []
    
    def add_test(self, input_data, expected_contains=None, 
                 expected_not_contains=None):
        self.test_cases.append({
            'input': input_data,
            'contains': expected_contains or [],
            'not_contains': expected_not_contains or []
        })
    
    def run_tests(self):
        results = []
        for test in self.test_cases:
            prompt = self.template.format(**test['input'])
            response = call_llm(prompt)
            
            passed = True
            for expected in test['contains']:
                if expected.lower() not in response.lower():
                    passed = False
            for forbidden in test['not_contains']:
                if forbidden.lower() in response.lower():
                    passed = False
            
            results.append({
                'input': test['input'],
                'response': response,
                'passed': passed
            })
        return results
\`\`\`
      `,
      codeExamples: [
        {
          title: 'Production Prompt System',
          code: `# Production-Ready Prompt System

class ProductionPrompt:
    """Robust prompt handling for production."""
    
    def __init__(self):
        self.system_prompt = """You are a helpful assistant.
Be concise, accurate, and helpful.
If uncertain, acknowledge it.
Never make up facts."""
    
    def build_prompt(self, user_message, context=None):
        prompt = f"System: {self.system_prompt}\\n\\n"
        if context:
            prompt += f"Context: {context}\\n\\n"
        prompt += f"User: {user_message}\\n\\nAssistant:"
        return prompt
    
    def validate_response(self, response):
        """Basic response validation."""
        checks = {
            'not_empty': len(response.strip()) > 0,
            'reasonable_length': 10 < len(response) < 10000,
            'no_hallucination_markers': not any(
                phrase in response.lower() 
                for phrase in ['as an ai', 'i cannot', 'i do not have']
            )
        }
        return all(checks.values()), checks

# Demo
pp = ProductionPrompt()

test_cases = [
    "What is Python?",
    "Explain machine learning briefly",
]

print("=== Production Prompt Demo ===\\n")
for msg in test_cases:
    prompt = pp.build_prompt(msg)
    print(f"User: {msg}")
    print(f"Prompt length: {len(prompt)} chars")
    print(f"---")`
        }
      ]
    },
    // ==================== RAG ====================
    {
      id: 'rag-fundamentals',
      title: 'RAG: Retrieval Augmented Generation',
      description: 'Build AI apps with external knowledge using RAG',
      content: `
# RAG: Retrieval Augmented Generation

RAG combines LLMs with external knowledge bases to provide accurate, up-to-date responses.

## Why RAG?

| Problem with Pure LLMs | RAG Solution |
|----------------------|--------------|
| Knowledge cutoff date | Access current data |
| Hallucinations | Ground in real sources |
| No private data | Connect internal docs |
| Can't cite sources | Provide references |

## RAG Architecture

\`\`\`
┌──────────────────────────────────────────────────────────┐
│                      RAG Pipeline                         │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   User Query ──► Embedding ──► Vector Search            │
│                                    │                     │
│                                    ▼                     │
│                           Relevant Documents             │
│                                    │                     │
│                                    ▼                     │
│                    Query + Context ──► LLM ──► Answer   │
│                                                          │
└──────────────────────────────────────────────────────────┘
\`\`\`

## Step 1: Document Processing

\`\`\`python
# Chunking documents for embedding
def chunk_document(text, chunk_size=500, overlap=50):
    """Split document into overlapping chunks."""
    chunks = []
    start = 0
    
    while start < len(text):
        end = start + chunk_size
        chunk = text[start:end]
        
        # Try to break at sentence boundary
        if end < len(text):
            last_period = chunk.rfind('.')
            if last_period > chunk_size * 0.5:
                end = start + last_period + 1
                chunk = text[start:end]
        
        chunks.append({
            'text': chunk.strip(),
            'start': start,
            'end': end
        })
        start = end - overlap
    
    return chunks

# Example
document = """
Machine learning is a subset of AI that enables systems to learn 
from data. It includes supervised learning, unsupervised learning, 
and reinforcement learning. Supervised learning uses labeled data 
to train models for classification and regression tasks.
"""

chunks = chunk_document(document, chunk_size=100, overlap=20)
for i, chunk in enumerate(chunks):
    print(f"Chunk {i+1}: {chunk['text'][:50]}...")
\`\`\`

## Step 2: Creating Embeddings

\`\`\`python
import numpy as np

# Simulated embedding function
# In production: use OpenAI, Sentence-Transformers, etc.
def get_embedding(text):
    """Generate embedding vector for text."""
    # This is a placeholder - use real embeddings!
    np.random.seed(hash(text) % 2**32)
    return np.random.randn(384)  # Common embedding size

# Create embeddings for all chunks
def create_embeddings(chunks):
    embeddings = []
    for chunk in chunks:
        embedding = get_embedding(chunk['text'])
        embeddings.append({
            'text': chunk['text'],
            'embedding': embedding
        })
    return embeddings

# Store in vector database
embeddings = create_embeddings(chunks)
print(f"Created {len(embeddings)} embeddings")
print(f"Embedding dimension: {len(embeddings[0]['embedding'])}")
\`\`\`

## Step 3: Vector Search

\`\`\`python
def cosine_similarity(a, b):
    """Calculate cosine similarity between vectors."""
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

def search(query, embeddings, top_k=3):
    """Find most similar chunks to query."""
    query_embedding = get_embedding(query)
    
    scores = []
    for item in embeddings:
        score = cosine_similarity(query_embedding, item['embedding'])
        scores.append((score, item['text']))
    
    # Sort by similarity (highest first)
    scores.sort(reverse=True)
    return scores[:top_k]

# Example search
query = "What is supervised learning?"
results = search(query, embeddings)

print(f"Query: {query}\\n")
for score, text in results:
    print(f"Score: {score:.4f}")
    print(f"Text: {text[:100]}...\\n")
\`\`\`

## Step 4: Generate Response

\`\`\`python
def rag_query(query, embeddings, llm_fn):
    """Complete RAG pipeline."""
    # 1. Retrieve relevant context
    results = search(query, embeddings, top_k=3)
    context = "\\n".join([text for _, text in results])
    
    # 2. Build prompt with context
    prompt = f"""Answer the question based on the provided context.
If the context doesn't contain the answer, say "I don't have 
information about that."

Context:
{context}

Question: {query}

Answer:"""
    
    # 3. Generate response
    response = llm_fn(prompt)
    
    return {
        'answer': response,
        'sources': [text for _, text in results]
    }

# Example usage (with mock LLM)
def mock_llm(prompt):
    return "Based on the context, supervised learning uses labeled data..."

result = rag_query("What is supervised learning?", embeddings, mock_llm)
print(f"Answer: {result['answer']}")
print(f"\\nSources used: {len(result['sources'])}")
\`\`\`

## Production RAG Components

\`\`\`python
# Vector Databases for Production
vector_dbs = {
    'Pinecone': 'Managed, scalable, easy to use',
    'Chroma': 'Open source, embedded, great for dev',
    'Weaviate': 'Open source, GraphQL API',
    'Milvus': 'Open source, high performance',
    'FAISS': 'Facebook AI, local, very fast'
}

# Embedding Models
embedding_models = {
    'OpenAI': 'text-embedding-3-small/large',
    'Cohere': 'embed-english-v3.0',
    'Sentence-Transformers': 'all-MiniLM-L6-v2',
    'Voyage AI': 'voyage-large-2'
}

print("Popular Vector DBs:")
for db, desc in vector_dbs.items():
    print(f"  {db}: {desc}")
\`\`\`

## RAG Optimization Techniques

| Technique | Description |
|-----------|-------------|
| Hybrid Search | Combine vector + keyword search |
| Re-ranking | Use cross-encoder to re-rank results |
| Query Expansion | Rephrase query for better retrieval |
| Chunk Optimization | Tune chunk size/overlap |
| Metadata Filtering | Filter by date, source, category |
      `,
      codeExamples: [
        {
          title: 'Simple RAG Implementation',
          code: `import numpy as np

class SimpleRAG:
    """Basic RAG implementation for learning."""
    
    def __init__(self):
        self.documents = []
        self.embeddings = []
    
    def add_document(self, text, metadata=None):
        """Add document to knowledge base."""
        # Simple chunking
        chunks = [text[i:i+200] for i in range(0, len(text), 180)]
        
        for chunk in chunks:
            # Simulate embedding
            np.random.seed(hash(chunk) % 2**32)
            embedding = np.random.randn(128)
            
            self.documents.append({
                'text': chunk,
                'metadata': metadata
            })
            self.embeddings.append(embedding)
        
        print(f"Added {len(chunks)} chunks")
    
    def search(self, query, top_k=2):
        """Search for relevant documents."""
        np.random.seed(hash(query) % 2**32)
        query_emb = np.random.randn(128)
        
        scores = []
        for i, emb in enumerate(self.embeddings):
            score = np.dot(query_emb, emb) / (
                np.linalg.norm(query_emb) * np.linalg.norm(emb)
            )
            scores.append((score, i))
        
        scores.sort(reverse=True)
        return [(self.documents[i], s) for s, i in scores[:top_k]]

# Demo
rag = SimpleRAG()
rag.add_document(
    "Python is a programming language. It is easy to learn.",
    {"source": "intro.txt"}
)
rag.add_document(
    "Machine learning uses algorithms to learn from data.",
    {"source": "ml.txt"}
)

print("\\nSearch Results for 'What is Python?':")
for doc, score in rag.search("What is Python?"):
    print(f"  Score: {score:.3f} - {doc['text'][:50]}...")`
        }
      ]
    },
    // ==================== MLOPS ====================
    {
      id: 'mlops-fundamentals',
      title: 'MLOps: Model Deployment',
      description: 'Deploy and manage ML models in production',
      content: `
# MLOps: Model Deployment & Operations

MLOps is the practice of deploying and maintaining ML models in production reliably and efficiently.

## MLOps Lifecycle

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    MLOps Lifecycle                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   Data ──► Train ──► Evaluate ──► Deploy ──► Monitor   │
│     ▲                                            │      │
│     └────────────── Retrain ◄───────────────────┘      │
│                                                         │
└─────────────────────────────────────────────────────────┘
\`\`\`

## Model Serialization

\`\`\`python
import pickle
import json

# Save model with pickle
def save_model(model, filepath):
    with open(filepath, 'wb') as f:
        pickle.dump(model, f)
    print(f"Model saved to {filepath}")

def load_model(filepath):
    with open(filepath, 'rb') as f:
        return pickle.load(f)

# Save model metadata
def save_model_metadata(model_path, metrics, params):
    metadata = {
        'model_path': model_path,
        'metrics': metrics,
        'parameters': params,
        'version': '1.0.0',
        'created_at': '2024-01-15'
    }
    
    with open(model_path + '.meta.json', 'w') as f:
        json.dump(metadata, f, indent=2)
    
    return metadata

# Example
metadata = save_model_metadata(
    'model.pkl',
    {'accuracy': 0.95, 'f1': 0.93},
    {'n_estimators': 100, 'max_depth': 10}
)
print(f"Metadata: {json.dumps(metadata, indent=2)}")
\`\`\`

## REST API for Model Serving

\`\`\`python
# FastAPI model serving
from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np

app = FastAPI(title="ML Model API")

# Request/Response schemas
class PredictionRequest(BaseModel):
    features: list[float]

class PredictionResponse(BaseModel):
    prediction: int
    confidence: float
    model_version: str

# Mock model
class MockModel:
    def predict(self, X):
        return [1 if sum(x) > 0 else 0 for x in X]
    
    def predict_proba(self, X):
        return [[0.3, 0.7] if sum(x) > 0 else [0.8, 0.2] for x in X]

model = MockModel()
MODEL_VERSION = "1.0.0"

@app.post("/predict", response_model=PredictionResponse)
def predict(request: PredictionRequest):
    features = np.array([request.features])
    prediction = model.predict(features)[0]
    proba = model.predict_proba(features)[0]
    
    return PredictionResponse(
        prediction=prediction,
        confidence=max(proba),
        model_version=MODEL_VERSION
    )

@app.get("/health")
def health():
    return {"status": "healthy", "model_version": MODEL_VERSION}
\`\`\`

## Docker Containerization

\`\`\`dockerfile
# Dockerfile for ML model
FROM python:3.10-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy model and code
COPY model.pkl .
COPY app.py .

# Expose port
EXPOSE 8000

# Run the app
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

\`\`\`python
# requirements.txt
requirements = """
fastapi==0.104.1
uvicorn==0.24.0
numpy==1.24.0
scikit-learn==1.3.0
pydantic==2.5.0
"""
print(requirements)
\`\`\`

## Model Monitoring

\`\`\`python
import time
from collections import deque

class ModelMonitor:
    """Monitor model performance in production."""
    
    def __init__(self, window_size=1000):
        self.predictions = deque(maxlen=window_size)
        self.latencies = deque(maxlen=window_size)
        self.errors = deque(maxlen=window_size)
    
    def log_prediction(self, input_data, prediction, latency):
        self.predictions.append({
            'input': input_data,
            'prediction': prediction,
            'timestamp': time.time()
        })
        self.latencies.append(latency)
    
    def log_error(self, error):
        self.errors.append({
            'error': str(error),
            'timestamp': time.time()
        })
    
    def get_metrics(self):
        return {
            'total_predictions': len(self.predictions),
            'avg_latency_ms': np.mean(self.latencies) * 1000,
            'p99_latency_ms': np.percentile(self.latencies, 99) * 1000,
            'error_rate': len(self.errors) / max(len(self.predictions), 1),
            'predictions_per_minute': self._calc_rate()
        }
    
    def _calc_rate(self):
        if len(self.predictions) < 2:
            return 0
        time_span = self.predictions[-1]['timestamp'] - self.predictions[0]['timestamp']
        return len(self.predictions) / (time_span / 60) if time_span > 0 else 0

# Usage
monitor = ModelMonitor()
monitor.log_prediction([1, 2, 3], 1, 0.015)
monitor.log_prediction([4, 5, 6], 0, 0.012)
print(f"Metrics: {monitor.get_metrics()}")
\`\`\`

## Data Drift Detection

\`\`\`python
def detect_drift(reference_data, production_data, threshold=0.1):
    """Detect if production data has drifted from training data."""
    
    drift_scores = {}
    
    for feature_idx in range(reference_data.shape[1]):
        ref_mean = np.mean(reference_data[:, feature_idx])
        ref_std = np.std(reference_data[:, feature_idx])
        prod_mean = np.mean(production_data[:, feature_idx])
        
        # Z-score of production mean relative to reference
        z_score = abs(prod_mean - ref_mean) / (ref_std + 1e-8)
        drift_scores[f'feature_{feature_idx}'] = z_score
    
    drifted_features = [f for f, s in drift_scores.items() if s > threshold]
    
    return {
        'drift_detected': len(drifted_features) > 0,
        'drifted_features': drifted_features,
        'drift_scores': drift_scores
    }

# Example
np.random.seed(42)
reference = np.random.randn(1000, 3)
production = np.random.randn(100, 3) + 0.5  # Shifted

result = detect_drift(reference, production)
print(f"Drift detected: {result['drift_detected']}")
print(f"Drifted features: {result['drifted_features']}")
\`\`\`

## MLOps Tools Ecosystem

| Category | Tools |
|----------|-------|
| Experiment Tracking | MLflow, W&B, Neptune |
| Model Registry | MLflow, SageMaker, Vertex AI |
| Feature Store | Feast, Tecton, SageMaker |
| Deployment | Docker, K8s, SageMaker, Vertex |
| Monitoring | Evidently, WhyLabs, Arize |
      `,
      codeExamples: [
        {
          title: 'Complete Model Deployment Pipeline',
          code: `import numpy as np
import json

class MLPipeline:
    """End-to-end ML deployment pipeline."""
    
    def __init__(self, model_name):
        self.model_name = model_name
        self.model = None
        self.version = "0.0.0"
        self.metrics = {}
    
    def train(self, X, y):
        """Train and version the model."""
        # Simple mock training
        self.model = {'weights': np.mean(X, axis=0)}
        self.metrics = {
            'samples': len(X),
            'features': X.shape[1]
        }
        self.version = "1.0.0"
        print(f"Trained {self.model_name} v{self.version}")
    
    def predict(self, X):
        """Make predictions."""
        if self.model is None:
            raise ValueError("Model not trained")
        return [1 if np.dot(x, self.model['weights']) > 0 else 0 for x in X]
    
    def save(self, path):
        """Save model artifact."""
        artifact = {
            'model': {k: v.tolist() for k, v in self.model.items()},
            'version': self.version,
            'metrics': self.metrics
        }
        print(f"Saved to {path}")
        return artifact
    
    def health_check(self):
        """API health check."""
        return {
            'status': 'healthy' if self.model else 'not_ready',
            'model': self.model_name,
            'version': self.version
        }

# Demo
np.random.seed(42)
X = np.random.randn(100, 4)
y = (X.sum(axis=1) > 0).astype(int)

pipeline = MLPipeline("classifier")
pipeline.train(X, y)

predictions = pipeline.predict(X[:5])
print(f"Predictions: {predictions}")
print(f"Health: {pipeline.health_check()}")`
        }
      ]
    },
    // ==================== TRANSFER LEARNING ====================
    {
      id: 'transfer-learning',
      title: 'Transfer Learning',
      description: 'Leverage pre-trained models for your tasks',
      content: `
# Transfer Learning

Transfer learning uses knowledge from pre-trained models to solve new problems with less data and training time.

## Why Transfer Learning?

| Without Transfer Learning | With Transfer Learning |
|--------------------------|----------------------|
| Need millions of images | Need hundreds/thousands |
| Days/weeks of training | Hours of training |
| Expensive GPU resources | Can use modest hardware |
| Risk of overfitting | Better generalization |

## Transfer Learning Strategies

\`\`\`
Strategy 1: Feature Extraction
┌─────────────────────────────────────────────┐
│   Pre-trained Model (Frozen)                │
│   ┌─────────────────────────────────────┐   │
│   │ Conv1 → Conv2 → Conv3 → Features   │   │
│   └─────────────────────────────────────┘   │
│                    ↓                        │
│   ┌─────────────────────────────────────┐   │
│   │ New Classifier (Trainable)          │   │
│   └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘

Strategy 2: Fine-tuning
┌─────────────────────────────────────────────┐
│   Pre-trained Model                         │
│   ┌─────────────────────────────────────┐   │
│   │ Conv1 (Frozen) → Conv2 → Conv3      │   │ ← Unfreeze later layers
│   └─────────────────────────────────────┘   │
│                    ↓                        │
│   ┌─────────────────────────────────────┐   │
│   │ New Classifier (Trainable)          │   │
│   └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
\`\`\`

## Image Classification with Transfer Learning

\`\`\`python
# Using pre-trained model (conceptual code)
import numpy as np

class PretrainedCNN:
    """Simulated pre-trained CNN for demonstration."""
    
    def __init__(self, pretrained=True):
        self.pretrained = pretrained
        # Simulated pre-trained weights
        np.random.seed(42 if pretrained else None)
        self.features_weights = np.random.randn(2048, 512)
    
    def extract_features(self, image):
        """Extract features from image."""
        # Simulate feature extraction
        flat = image.flatten()[:2048]
        if len(flat) < 2048:
            flat = np.pad(flat, (0, 2048 - len(flat)))
        features = flat @ self.features_weights
        return features

class TransferLearningClassifier:
    """Transfer learning classifier."""
    
    def __init__(self, num_classes, pretrained_model):
        self.feature_extractor = pretrained_model
        self.classifier_weights = np.random.randn(512, num_classes) * 0.01
        
    def forward(self, image):
        # Extract features (frozen)
        features = self.feature_extractor.extract_features(image)
        # Classify (trainable)
        logits = features @ self.classifier_weights
        return self._softmax(logits)
    
    def _softmax(self, x):
        exp_x = np.exp(x - np.max(x))
        return exp_x / exp_x.sum()

# Example
pretrained = PretrainedCNN(pretrained=True)
classifier = TransferLearningClassifier(num_classes=10, pretrained_model=pretrained)

# Fake image
image = np.random.randn(224, 224, 3)
predictions = classifier.forward(image)
print(f"Predictions shape: {predictions.shape}")
print(f"Top class: {np.argmax(predictions)}")
print(f"Confidence: {np.max(predictions):.4f}")
\`\`\`

## Fine-Tuning Strategy

\`\`\`python
class FineTuner:
    """Fine-tuning strategies for transfer learning."""
    
    @staticmethod
    def get_strategy(dataset_size, similarity):
        """
        Choose fine-tuning strategy based on:
        - dataset_size: 'small' (<1000), 'medium' (1000-10000), 'large' (>10000)
        - similarity: 'similar' or 'different' to pre-training data
        """
        strategies = {
            ('small', 'similar'): {
                'approach': 'Feature extraction only',
                'freeze_layers': 'all',
                'learning_rate': 0.001,
                'epochs': 10
            },
            ('small', 'different'): {
                'approach': 'Feature extraction + regularization',
                'freeze_layers': 'all',
                'learning_rate': 0.0001,
                'epochs': 20,
                'dropout': 0.5
            },
            ('medium', 'similar'): {
                'approach': 'Fine-tune top layers',
                'freeze_layers': 'bottom_half',
                'learning_rate': 0.0001,
                'epochs': 15
            },
            ('medium', 'different'): {
                'approach': 'Fine-tune most layers',
                'freeze_layers': 'first_few',
                'learning_rate': 0.00005,
                'epochs': 25
            },
            ('large', 'similar'): {
                'approach': 'Fine-tune all layers',
                'freeze_layers': 'none',
                'learning_rate': 0.0001,
                'epochs': 10
            },
            ('large', 'different'): {
                'approach': 'Train from scratch or fine-tune all',
                'freeze_layers': 'none',
                'learning_rate': 0.001,
                'epochs': 50
            }
        }
        return strategies.get((dataset_size, similarity))

# Example
for size in ['small', 'medium', 'large']:
    for sim in ['similar', 'different']:
        strategy = FineTuner.get_strategy(size, sim)
        print(f"{size.upper()} + {sim}: {strategy['approach']}")
\`\`\`

## Popular Pre-trained Models

\`\`\`python
pretrained_models = {
    'Vision': {
        'ResNet': 'General image classification',
        'VGG': 'Simple architecture, good features',
        'EfficientNet': 'Best accuracy/efficiency trade-off',
        'ViT': 'Vision Transformer, state-of-art',
        'CLIP': 'Text-image understanding'
    },
    'NLP': {
        'BERT': 'Bidirectional understanding',
        'GPT': 'Text generation',
        'RoBERTa': 'Optimized BERT',
        'T5': 'Text-to-text framework',
        'LLaMA': 'Open-source LLM'
    },
    'Audio': {
        'Whisper': 'Speech recognition',
        'Wav2Vec': 'Audio representations'
    }
}

print("Pre-trained Models for Transfer Learning:")
for domain, models in pretrained_models.items():
    print(f"\\n{domain}:")
    for model, desc in models.items():
        print(f"  {model}: {desc}")
\`\`\`

## Best Practices

| Practice | Description |
|----------|-------------|
| Start frozen | Begin with feature extraction |
| Gradual unfreezing | Unfreeze layers progressively |
| Lower learning rate | Use 10-100x smaller LR for pre-trained |
| Data augmentation | Especially for small datasets |
| Early stopping | Prevent overfitting |
      `,
      codeExamples: [
        {
          title: 'Transfer Learning Workflow',
          code: `import numpy as np

class TransferLearningWorkflow:
    """Complete transfer learning example."""
    
    def __init__(self):
        # Simulate pre-trained features
        np.random.seed(42)
        self.pretrained_features = np.random.randn(100, 512)
        self.classifier = None
    
    def prepare_data(self, num_samples=50, num_classes=5):
        """Prepare small dataset."""
        X = np.random.randn(num_samples, 512)
        y = np.random.randint(0, num_classes, num_samples)
        return X, y
    
    def train_classifier(self, X, y, epochs=10):
        """Train only the classifier head."""
        num_classes = len(np.unique(y))
        self.classifier = np.zeros((512, num_classes))
        
        lr = 0.01
        for epoch in range(epochs):
            # Simple gradient descent
            for i in range(len(X)):
                pred = self._softmax(X[i] @ self.classifier)
                target = np.zeros(num_classes)
                target[y[i]] = 1
                
                # Gradient update
                error = pred - target
                self.classifier -= lr * np.outer(X[i], error)
        
        print(f"Trained for {epochs} epochs")
    
    def _softmax(self, x):
        exp_x = np.exp(x - np.max(x))
        return exp_x / exp_x.sum()
    
    def predict(self, X):
        probs = np.array([self._softmax(x @ self.classifier) for x in X])
        return np.argmax(probs, axis=1)
    
    def evaluate(self, X, y):
        preds = self.predict(X)
        accuracy = np.mean(preds == y)
        return accuracy

# Demo
workflow = TransferLearningWorkflow()
X, y = workflow.prepare_data(num_samples=100, num_classes=5)

# Split
X_train, X_test = X[:80], X[80:]
y_train, y_test = y[:80], y[80:]

workflow.train_classifier(X_train, y_train, epochs=20)
accuracy = workflow.evaluate(X_test, y_test)
print(f"Test Accuracy: {accuracy:.2%}")`
        }
      ]
    },
    // ==================== NLP FUNDAMENTALS ====================
    {
      id: 'nlp-fundamentals',
      title: 'NLP Fundamentals',
      description: 'Core concepts: tokenization, embeddings, and transformers',
      content: `
# NLP Fundamentals

Natural Language Processing enables machines to understand and generate human language.

## Text Preprocessing Pipeline

\`\`\`python
import re

def preprocess_text(text):
    """Basic text preprocessing pipeline."""
    # Lowercase
    text = text.lower()
    
    # Remove special characters
    text = re.sub(r'[^a-zA-Z\\s]', '', text)
    
    # Remove extra whitespace
    text = ' '.join(text.split())
    
    return text

# Example
raw_text = "Hello, World! This is NLP 101... Amazing, isn't it?"
clean_text = preprocess_text(raw_text)
print(f"Original: {raw_text}")
print(f"Cleaned: {clean_text}")
\`\`\`

## Tokenization

\`\`\`python
# Word tokenization
def word_tokenize(text):
    return text.split()

# Character tokenization
def char_tokenize(text):
    return list(text)

# Subword tokenization (BPE-style simplified)
class SimpleTokenizer:
    def __init__(self):
        self.vocab = {}
        self.special_tokens = ['[PAD]', '[UNK]', '[CLS]', '[SEP]']
        
    def build_vocab(self, texts, min_freq=2):
        word_counts = {}
        for text in texts:
            for word in text.lower().split():
                word_counts[word] = word_counts.get(word, 0) + 1
        
        # Add special tokens
        for token in self.special_tokens:
            self.vocab[token] = len(self.vocab)
        
        # Add words meeting frequency threshold
        for word, count in sorted(word_counts.items()):
            if count >= min_freq:
                self.vocab[word] = len(self.vocab)
        
        return self.vocab
    
    def encode(self, text):
        tokens = []
        for word in text.lower().split():
            if word in self.vocab:
                tokens.append(self.vocab[word])
            else:
                tokens.append(self.vocab['[UNK]'])
        return tokens
    
    def decode(self, token_ids):
        id_to_word = {v: k for k, v in self.vocab.items()}
        return ' '.join(id_to_word.get(id, '[UNK]') for id in token_ids)

# Example
texts = ["I love machine learning", "Machine learning is great", 
         "I love deep learning too"]
tokenizer = SimpleTokenizer()
vocab = tokenizer.build_vocab(texts)

print(f"Vocabulary size: {len(vocab)}")
print(f"Vocab: {vocab}")

encoded = tokenizer.encode("I love machine learning")
print(f"\\nEncoded: {encoded}")
print(f"Decoded: {tokenizer.decode(encoded)}")
\`\`\`

## Word Embeddings

\`\`\`python
import numpy as np

class SimpleEmbedding:
    """Simple word embedding layer."""
    
    def __init__(self, vocab_size, embedding_dim):
        # Random initialization (in practice, use pre-trained)
        self.embeddings = np.random.randn(vocab_size, embedding_dim) * 0.1
    
    def __call__(self, token_ids):
        return self.embeddings[token_ids]
    
    def similarity(self, id1, id2):
        vec1 = self.embeddings[id1]
        vec2 = self.embeddings[id2]
        return np.dot(vec1, vec2) / (np.linalg.norm(vec1) * np.linalg.norm(vec2))

# Example
vocab_size = 10
embedding_dim = 64
embedding = SimpleEmbedding(vocab_size, embedding_dim)

# Get embeddings for tokens
token_ids = np.array([1, 2, 3])
embedded = embedding(token_ids)

print(f"Token IDs: {token_ids}")
print(f"Embedded shape: {embedded.shape}")  # (3, 64)
print(f"Similarity(1,2): {embedding.similarity(1, 2):.4f}")
\`\`\`

## Attention Mechanism

\`\`\`python
def scaled_dot_product_attention(Q, K, V):
    """
    Scaled dot-product attention.
    Q, K, V: (seq_len, d_k)
    """
    d_k = Q.shape[-1]
    
    # Attention scores
    scores = Q @ K.T / np.sqrt(d_k)
    
    # Softmax
    attention_weights = np.exp(scores - np.max(scores, axis=-1, keepdims=True))
    attention_weights /= attention_weights.sum(axis=-1, keepdims=True)
    
    # Weighted sum
    output = attention_weights @ V
    
    return output, attention_weights

# Example
np.random.seed(42)
seq_len, d_k = 4, 8

Q = np.random.randn(seq_len, d_k)
K = np.random.randn(seq_len, d_k)
V = np.random.randn(seq_len, d_k)

output, weights = scaled_dot_product_attention(Q, K, V)

print(f"Input shape: ({seq_len}, {d_k})")
print(f"Output shape: {output.shape}")
print(f"\\nAttention weights (which tokens attend to which):")
print(np.round(weights, 3))
\`\`\`

## Transformer Block (Simplified)

\`\`\`python
class SimpleTransformerBlock:
    """Simplified transformer block."""
    
    def __init__(self, d_model, n_heads):
        self.d_model = d_model
        self.n_heads = n_heads
        self.d_k = d_model // n_heads
        
        # Weights (simplified - no bias)
        np.random.seed(42)
        self.W_q = np.random.randn(d_model, d_model) * 0.1
        self.W_k = np.random.randn(d_model, d_model) * 0.1
        self.W_v = np.random.randn(d_model, d_model) * 0.1
        self.W_o = np.random.randn(d_model, d_model) * 0.1
        
        # FFN weights
        self.W1 = np.random.randn(d_model, d_model * 4) * 0.1
        self.W2 = np.random.randn(d_model * 4, d_model) * 0.1
    
    def forward(self, x):
        # Multi-head attention
        Q = x @ self.W_q
        K = x @ self.W_k
        V = x @ self.W_v
        
        attn_output, _ = scaled_dot_product_attention(Q, K, V)
        attn_output = attn_output @ self.W_o
        
        # Add & Norm (simplified)
        x = x + attn_output
        x = self._layer_norm(x)
        
        # FFN
        ffn_output = np.maximum(0, x @ self.W1) @ self.W2  # ReLU activation
        
        # Add & Norm
        x = x + ffn_output
        x = self._layer_norm(x)
        
        return x
    
    def _layer_norm(self, x, eps=1e-6):
        mean = x.mean(axis=-1, keepdims=True)
        std = x.std(axis=-1, keepdims=True)
        return (x - mean) / (std + eps)

# Example
block = SimpleTransformerBlock(d_model=64, n_heads=4)
x = np.random.randn(4, 64)  # 4 tokens, 64 dimensions
output = block.forward(x)

print(f"Input shape: {x.shape}")
print(f"Output shape: {output.shape}")
\`\`\`

## Common NLP Tasks

| Task | Description | Models |
|------|-------------|--------|
| Classification | Sentiment, topic | BERT, RoBERTa |
| NER | Named entity recognition | BERT, spaCy |
| QA | Question answering | BERT, T5 |
| Summarization | Text compression | T5, BART |
| Translation | Language conversion | T5, mBART |
| Generation | Text creation | GPT, LLaMA |
      `,
      codeExamples: [
        {
          title: 'NLP Pipeline Demo',
          code: `import numpy as np
import re

class NLPPipeline:
    """End-to-end NLP processing pipeline."""
    
    def __init__(self, vocab_size=1000, embed_dim=64):
        self.vocab = {'[PAD]': 0, '[UNK]': 1}
        self.embed_dim = embed_dim
        self.embeddings = None
    
    def preprocess(self, text):
        """Clean and normalize text."""
        text = text.lower()
        text = re.sub(r'[^a-z\\s]', '', text)
        return ' '.join(text.split())
    
    def build_vocab(self, texts):
        """Build vocabulary from texts."""
        for text in texts:
            for word in self.preprocess(text).split():
                if word not in self.vocab:
                    self.vocab[word] = len(self.vocab)
        
        # Initialize embeddings
        self.embeddings = np.random.randn(
            len(self.vocab), self.embed_dim
        ) * 0.1
    
    def encode(self, text, max_len=10):
        """Convert text to token IDs."""
        tokens = self.preprocess(text).split()[:max_len]
        ids = [self.vocab.get(t, 1) for t in tokens]
        # Pad
        ids += [0] * (max_len - len(ids))
        return np.array(ids)
    
    def get_embeddings(self, text, max_len=10):
        """Get embeddings for text."""
        ids = self.encode(text, max_len)
        return self.embeddings[ids]

# Demo
texts = [
    "Machine learning is amazing",
    "Deep learning uses neural networks",
    "NLP processes natural language"
]

pipeline = NLPPipeline()
pipeline.build_vocab(texts)

print(f"Vocabulary size: {len(pipeline.vocab)}")
print(f"\\nSample vocab items:")
for word, idx in list(pipeline.vocab.items())[:5]:
    print(f"  '{word}': {idx}")

# Process a sentence
test = "Machine learning is great"
encoded = pipeline.encode(test)
embedded = pipeline.get_embeddings(test)

print(f"\\nText: '{test}'")
print(f"Encoded: {encoded}")
print(f"Embedded shape: {embedded.shape}")`
        }
      ]
    }
  ]
};
