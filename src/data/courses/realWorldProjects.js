// Real-World AI Projects

export const realWorldProjects = {
  id: 'real-world-projects',
  title: 'Real-World AI Projects',
  description: 'Hands-on projects to build practical AI skills',
  icon: '🛠️',
  projects: [
    // ==================== RAG CHATBOT ====================
    {
      id: 'rag-chatbot',
      title: 'AI Chatbot with RAG',
      difficulty: 'Advanced',
      duration: '4-6 hours',
      skills: ['LangChain', 'Embeddings', 'Vector Database', 'LLM Integration'],
      description: 'Build a chatbot that answers questions about your documents using Retrieval Augmented Generation.',
      content: `
# Project: AI Chatbot with RAG

Build an intelligent chatbot that can answer questions about any document collection.

## Project Overview

**What you'll build:**
- Document ingestion pipeline
- Vector database for semantic search
- Context-aware response generation
- Simple chat interface

## Architecture

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    RAG Chatbot                          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Documents ──► Chunk ──► Embed ──► Vector DB           │
│                                        ↓                │
│  User Query ──► Embed ──► Search ──► Context           │
│                                        ↓                │
│                      Query + Context ──► LLM ──► Answer │
│                                                         │
└─────────────────────────────────────────────────────────┘
\`\`\`

## Step 1: Document Loader

\`\`\`python
import os

class DocumentLoader:
    """Load and process documents."""
    
    def __init__(self, chunk_size=500, chunk_overlap=50):
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap
    
    def load_text(self, text, source="unknown"):
        """Load text and split into chunks."""
        chunks = []
        start = 0
        
        while start < len(text):
            end = min(start + self.chunk_size, len(text))
            
            # Try to break at sentence boundary
            if end < len(text):
                last_period = text[start:end].rfind('.')
                if last_period > self.chunk_size * 0.5:
                    end = start + last_period + 1
            
            chunk_text = text[start:end].strip()
            if chunk_text:
                chunks.append({
                    'text': chunk_text,
                    'source': source,
                    'start': start,
                    'end': end
                })
            
            start = end - self.chunk_overlap
        
        return chunks
    
    def load_file(self, filepath):
        """Load a text file."""
        with open(filepath, 'r', encoding='utf-8') as f:
            text = f.read()
        return self.load_text(text, source=filepath)

# Example usage
loader = DocumentLoader(chunk_size=200, chunk_overlap=30)

sample_doc = '''
Artificial Intelligence (AI) is revolutionizing every industry.
Machine learning, a subset of AI, enables computers to learn from data.
Deep learning uses neural networks with multiple layers to learn 
complex patterns. Natural Language Processing (NLP) allows machines 
to understand human language. Computer vision enables machines to 
interpret visual information from the world.
'''

chunks = loader.load_text(sample_doc, source="ai_intro.txt")
print(f"Created {len(chunks)} chunks")
for i, chunk in enumerate(chunks):
    print(f"\\nChunk {i+1}: {chunk['text'][:60]}...")
\`\`\`

## Step 2: Embedding & Vector Store

\`\`\`python
import numpy as np

class VectorStore:
    """Simple in-memory vector store."""
    
    def __init__(self, embedding_dim=384):
        self.embedding_dim = embedding_dim
        self.documents = []
        self.embeddings = []
    
    def _get_embedding(self, text):
        """Generate embedding (mock - use real model in production)."""
        np.random.seed(hash(text) % 2**32)
        embedding = np.random.randn(self.embedding_dim)
        return embedding / np.linalg.norm(embedding)
    
    def add_documents(self, chunks):
        """Add document chunks to the store."""
        for chunk in chunks:
            embedding = self._get_embedding(chunk['text'])
            self.documents.append(chunk)
            self.embeddings.append(embedding)
        
        print(f"Added {len(chunks)} documents. Total: {len(self.documents)}")
    
    def similarity_search(self, query, top_k=3):
        """Find most similar documents to query."""
        query_embedding = self._get_embedding(query)
        
        scores = []
        for i, emb in enumerate(self.embeddings):
            score = np.dot(query_embedding, emb)
            scores.append((score, i))
        
        scores.sort(reverse=True)
        
        results = []
        for score, idx in scores[:top_k]:
            results.append({
                'document': self.documents[idx],
                'score': score
            })
        
        return results

# Example
vector_store = VectorStore()
vector_store.add_documents(chunks)

results = vector_store.similarity_search("What is deep learning?")
print("\\nSearch results for 'What is deep learning?':")
for r in results:
    print(f"  Score: {r['score']:.3f} - {r['document']['text'][:50]}...")
\`\`\`

## Step 3: RAG Chain

\`\`\`python
class RAGChain:
    """Complete RAG pipeline."""
    
    def __init__(self, vector_store):
        self.vector_store = vector_store
    
    def _format_context(self, documents):
        """Format retrieved documents as context."""
        context_parts = []
        for i, doc in enumerate(documents):
            context_parts.append(f"[{i+1}] {doc['document']['text']}")
        return "\\n\\n".join(context_parts)
    
    def _generate_prompt(self, query, context):
        """Create the prompt for the LLM."""
        return f'''Answer the question based on the following context.
If the context doesn't contain enough information, say "I don't have enough information to answer that."
Always cite which context section(s) you used by number.

Context:
{context}

Question: {query}

Answer:'''
    
    def _mock_llm(self, prompt):
        """Mock LLM response (replace with real LLM in production)."""
        # In production, call OpenAI, Anthropic, or local model
        if "deep learning" in prompt.lower():
            return "Based on [1], deep learning uses neural networks with multiple layers to learn complex patterns."
        elif "nlp" in prompt.lower() or "language" in prompt.lower():
            return "According to [1], Natural Language Processing (NLP) allows machines to understand human language."
        else:
            return "Based on the context provided, AI is revolutionizing every industry through technologies like machine learning and deep learning."
    
    def query(self, user_query, top_k=3):
        """Process a user query through the RAG pipeline."""
        # 1. Retrieve relevant documents
        results = self.vector_store.similarity_search(user_query, top_k)
        
        # 2. Format context
        context = self._format_context(results)
        
        # 3. Generate prompt
        prompt = self._generate_prompt(user_query, context)
        
        # 4. Get LLM response
        answer = self._mock_llm(prompt)
        
        return {
            'answer': answer,
            'sources': [r['document']['source'] for r in results],
            'context_used': context
        }

# Example
rag = RAGChain(vector_store)

queries = [
    "What is deep learning?",
    "How do machines understand language?",
    "What industries are affected by AI?"
]

for query in queries:
    print(f"\\n{'='*50}")
    print(f"Q: {query}")
    result = rag.query(query)
    print(f"A: {result['answer']}")
\`\`\`

## Step 4: Chat Interface

\`\`\`python
class ChatBot:
    """Interactive chatbot with RAG."""
    
    def __init__(self, rag_chain):
        self.rag = rag_chain
        self.history = []
    
    def chat(self, message):
        """Process a chat message."""
        # Add to history
        self.history.append({'role': 'user', 'content': message})
        
        # Get RAG response
        result = self.rag.query(message)
        
        # Add response to history
        self.history.append({
            'role': 'assistant', 
            'content': result['answer']
        })
        
        return result['answer']
    
    def get_history(self):
        """Get conversation history."""
        return self.history

# Demo conversation
chatbot = ChatBot(rag)

print("\\n🤖 RAG Chatbot Demo")
print("=" * 50)

messages = [
    "What can you tell me about AI?",
    "How does deep learning work?",
    "What about NLP?"
]

for msg in messages:
    print(f"\\nYou: {msg}")
    response = chatbot.chat(msg)
    print(f"Bot: {response}")
\`\`\`

## Production Considerations

\`\`\`python
production_checklist = {
    'Embeddings': [
        'Use OpenAI text-embedding-3-small or sentence-transformers',
        'Cache embeddings to reduce API calls',
        'Batch embedding requests'
    ],
    'Vector Store': [
        'Use Pinecone, Chroma, or Weaviate for production',
        'Index metadata for filtering',
        'Implement hybrid search (vector + keyword)'
    ],
    'LLM': [
        'Use GPT-4, Claude, or open-source models',
        'Implement streaming for better UX',
        'Add rate limiting and error handling'
    ],
    'Security': [
        'Sanitize user inputs',
        'Implement content filtering',
        'Audit log all queries'
    ]
}

print("\\n📋 Production Checklist:")
for category, items in production_checklist.items():
    print(f"\\n{category}:")
    for item in items:
        print(f"  ☐ {item}")
\`\`\`
      `,
      exercises: [
        {
          title: 'Extend the RAG Chatbot',
          tasks: [
            'Add support for PDF documents',
            'Implement conversation memory',
            'Add source citations in responses',
            'Create a simple web interface'
          ]
        }
      ]
    },
    // ==================== IMAGE CLASSIFIER ====================
    {
      id: 'image-classifier',
      title: 'Image Classifier App',
      difficulty: 'Intermediate',
      duration: '3-4 hours',
      skills: ['CNN', 'Transfer Learning', 'Streamlit', 'Model Deployment'],
      description: 'Build an image classification app using transfer learning and deploy it with Streamlit.',
      content: `
# Project: Image Classifier App

Create a web app that classifies images using a pre-trained neural network.

## Project Overview

**What you'll build:**
- Image preprocessing pipeline
- Transfer learning classifier
- Streamlit web interface
- Real-time predictions

## Step 1: Image Processing

\`\`\`python
import numpy as np

class ImageProcessor:
    """Process images for neural network input."""
    
    def __init__(self, target_size=(224, 224)):
        self.target_size = target_size
    
    def preprocess(self, image):
        """
        Preprocess image for model input.
        In production: use PIL or cv2 for real image handling.
        """
        # Simulate preprocessing
        # 1. Resize to target size
        # 2. Normalize pixel values to [0, 1]
        # 3. Apply ImageNet normalization
        
        mean = np.array([0.485, 0.456, 0.406])
        std = np.array([0.229, 0.224, 0.225])
        
        # Simulate normalized image
        processed = (image - mean) / std
        
        return processed
    
    def batch_preprocess(self, images):
        """Process multiple images."""
        return np.array([self.preprocess(img) for img in images])

# Example
processor = ImageProcessor()
fake_image = np.random.rand(224, 224, 3)
processed = processor.preprocess(fake_image)

print(f"Input shape: {fake_image.shape}")
print(f"Output shape: {processed.shape}")
print(f"Output range: [{processed.min():.2f}, {processed.max():.2f}]")
\`\`\`

## Step 2: Pre-trained Model Wrapper

\`\`\`python
class ImageClassifier:
    """Wrapper for pre-trained image classifier."""
    
    def __init__(self):
        self.classes = self._load_classes()
        self.model = self._load_model()
    
    def _load_classes(self):
        """Load ImageNet class labels (simplified)."""
        return [
            'cat', 'dog', 'bird', 'fish', 'horse',
            'elephant', 'bear', 'zebra', 'giraffe', 'car',
            'truck', 'boat', 'plane', 'bicycle', 'motorcycle'
        ]
    
    def _load_model(self):
        """Load pre-trained model (mock for demo)."""
        # In production: 
        # from torchvision.models import resnet50, ResNet50_Weights
        # model = resnet50(weights=ResNet50_Weights.IMAGENET1K_V2)
        return "MockResNet50"
    
    def predict(self, image):
        """Make prediction on image."""
        # Mock prediction - returns random probabilities
        np.random.seed(42)
        probs = np.random.rand(len(self.classes))
        probs = probs / probs.sum()  # Normalize
        
        # Get top-5 predictions
        top_indices = np.argsort(probs)[-5:][::-1]
        
        predictions = []
        for idx in top_indices:
            predictions.append({
                'class': self.classes[idx],
                'confidence': float(probs[idx])
            })
        
        return predictions
    
    def predict_batch(self, images):
        """Predict on batch of images."""
        return [self.predict(img) for img in images]

# Example
classifier = ImageClassifier()
fake_image = np.random.rand(224, 224, 3)

predictions = classifier.predict(fake_image)
print("Top-5 Predictions:")
for pred in predictions:
    print(f"  {pred['class']}: {pred['confidence']:.2%}")
\`\`\`

## Step 3: Streamlit App

\`\`\`python
# app.py - Streamlit application

streamlit_code = '''
import streamlit as st
import numpy as np
from PIL import Image

# Page config
st.set_page_config(
    page_title="Image Classifier",
    page_icon="🖼️",
    layout="centered"
)

st.title("🖼️ AI Image Classifier")
st.write("Upload an image to classify it using AI!")

# File uploader
uploaded_file = st.file_uploader(
    "Choose an image...", 
    type=["jpg", "jpeg", "png"]
)

if uploaded_file is not None:
    # Display uploaded image
    image = Image.open(uploaded_file)
    st.image(image, caption="Uploaded Image", use_column_width=True)
    
    # Classify button
    if st.button("🔍 Classify"):
        with st.spinner("Analyzing image..."):
            # In production: run actual model
            # predictions = classifier.predict(image)
            
            # Mock predictions
            predictions = [
                {"class": "cat", "confidence": 0.85},
                {"class": "dog", "confidence": 0.10},
                {"class": "bird", "confidence": 0.03},
            ]
            
            st.success("Classification complete!")
            
            # Display results
            st.subheader("Results:")
            for pred in predictions:
                st.progress(pred["confidence"])
                st.write(f"**{pred['class'].title()}**: {pred['confidence']:.1%}")

# Sidebar
st.sidebar.header("About")
st.sidebar.write("""
This app uses a pre-trained ResNet50 model to classify images.
- Trained on ImageNet (1000 classes)
- Uses transfer learning
- Real-time predictions
""")
'''

print("📝 Streamlit App Code:")
print(streamlit_code)
print("\\n▶️ Run with: streamlit run app.py")
\`\`\`

## Step 4: Custom Training

\`\`\`python
class TransferLearningTrainer:
    """Train custom classifier using transfer learning."""
    
    def __init__(self, num_classes, freeze_base=True):
        self.num_classes = num_classes
        self.freeze_base = freeze_base
        self.base_model = self._load_base_model()
        self.classifier = self._create_classifier()
    
    def _load_base_model(self):
        """Load pre-trained base model."""
        # Mock - use actual pre-trained model in production
        np.random.seed(42)
        return {
            'features': np.random.randn(2048, 512)
        }
    
    def _create_classifier(self):
        """Create classification head."""
        np.random.seed(42)
        return {
            'weights': np.random.randn(512, self.num_classes) * 0.01,
            'bias': np.zeros(self.num_classes)
        }
    
    def extract_features(self, image):
        """Extract features from base model."""
        # Flatten image and project to feature space
        flat = image.flatten()[:2048]
        if len(flat) < 2048:
            flat = np.pad(flat, (0, 2048 - len(flat)))
        return flat @ self.base_model['features']
    
    def forward(self, image):
        """Forward pass."""
        features = self.extract_features(image)
        logits = features @ self.classifier['weights'] + self.classifier['bias']
        probs = self._softmax(logits)
        return probs
    
    def _softmax(self, x):
        exp_x = np.exp(x - np.max(x))
        return exp_x / exp_x.sum()
    
    def train_step(self, images, labels, lr=0.001):
        """Single training step."""
        # Simplified training loop
        total_loss = 0
        for image, label in zip(images, labels):
            probs = self.forward(image)
            # Cross-entropy loss (simplified)
            loss = -np.log(probs[label] + 1e-8)
            total_loss += loss
        
        return total_loss / len(images)

# Example
trainer = TransferLearningTrainer(num_classes=5)

# Mock training data
images = [np.random.rand(224, 224, 3) for _ in range(10)]
labels = [np.random.randint(0, 5) for _ in range(10)]

loss = trainer.train_step(images, labels)
print(f"Training loss: {loss:.4f}")

# Predict
probs = trainer.forward(images[0])
print(f"Predictions: {probs.round(3)}")
\`\`\`

## Deployment

\`\`\`python
deployment_guide = '''
# Deployment Options

## 1. Streamlit Cloud (Easiest)
   - Push code to GitHub
   - Connect to streamlit.io
   - Auto-deploy on push

## 2. Hugging Face Spaces
   - Great for ML demos
   - Free GPU for inference
   - Simple deployment

## 3. Docker
   dockerfile = """
   FROM python:3.10-slim
   WORKDIR /app
   COPY requirements.txt .
   RUN pip install -r requirements.txt
   COPY . .
   EXPOSE 8501
   CMD ["streamlit", "run", "app.py"]
   """

## 4. Cloud Platforms
   - AWS: EC2, Lambda, SageMaker
   - GCP: Cloud Run, Vertex AI
   - Azure: Container Apps, ML Studio
'''

print(deployment_guide)
\`\`\`
      `
    },
    // ==================== SENTIMENT ANALYZER ====================
    {
      id: 'sentiment-analyzer',
      title: 'Sentiment Analyzer',
      difficulty: 'Intermediate',
      duration: '2-3 hours',
      skills: ['NLP', 'Text Classification', 'NLTK/spaCy', 'API Development'],
      description: 'Build a sentiment analysis system that classifies text as positive, negative, or neutral.',
      content: `
# Project: Sentiment Analyzer

Build a complete sentiment analysis pipeline for text classification.

## Step 1: Text Preprocessing

\`\`\`python
import re
import numpy as np

class TextPreprocessor:
    """Preprocess text for sentiment analysis."""
    
    def __init__(self):
        self.stopwords = {
            'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been',
            'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will',
            'would', 'could', 'should', 'may', 'might', 'must', 'shall',
            'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by', 'from',
            'as', 'into', 'through', 'during', 'before', 'after',
            'and', 'but', 'or', 'nor', 'so', 'yet', 'both', 'either'
        }
    
    def clean(self, text):
        """Clean and normalize text."""
        # Lowercase
        text = text.lower()
        
        # Remove URLs
        text = re.sub(r'http\\S+|www\\S+', '', text)
        
        # Remove mentions and hashtags
        text = re.sub(r'@\\w+|#\\w+', '', text)
        
        # Remove special characters but keep emoticons
        text = re.sub(r'[^a-z\\s:;()\\-]', '', text)
        
        # Normalize whitespace
        text = ' '.join(text.split())
        
        return text
    
    def tokenize(self, text):
        """Simple word tokenization."""
        return text.split()
    
    def remove_stopwords(self, tokens):
        """Remove common stopwords."""
        return [t for t in tokens if t not in self.stopwords]
    
    def preprocess(self, text):
        """Full preprocessing pipeline."""
        cleaned = self.clean(text)
        tokens = self.tokenize(cleaned)
        tokens = self.remove_stopwords(tokens)
        return tokens

# Example
preprocessor = TextPreprocessor()

texts = [
    "I absolutely LOVE this product! Best purchase ever! 😊",
    "Terrible experience. Never buying again. @company #disappointed",
    "It's okay, nothing special. www.example.com"
]

for text in texts:
    tokens = preprocessor.preprocess(text)
    print(f"Original: {text}")
    print(f"Processed: {tokens}\\n")
\`\`\`

## Step 2: Feature Extraction

\`\`\`python
class SentimentFeatures:
    """Extract features for sentiment classification."""
    
    def __init__(self):
        # Sentiment lexicons (simplified)
        self.positive_words = {
            'love', 'great', 'amazing', 'excellent', 'wonderful', 'fantastic',
            'awesome', 'best', 'happy', 'good', 'nice', 'perfect', 'beautiful',
            'recommend', 'enjoy', 'like', 'brilliant', 'outstanding'
        }
        
        self.negative_words = {
            'hate', 'terrible', 'awful', 'horrible', 'bad', 'worst', 'poor',
            'disappointing', 'disappointed', 'waste', 'boring', 'useless',
            'never', 'wrong', 'annoying', 'frustrated', 'angry', 'sad'
        }
        
        self.negation_words = {'not', 'no', "n't", 'never', 'neither', 'nobody'}
        self.intensifiers = {'very', 'really', 'extremely', 'absolutely', 'totally'}
    
    def extract(self, tokens):
        """Extract sentiment features from tokens."""
        features = {
            'positive_count': 0,
            'negative_count': 0,
            'negation_count': 0,
            'intensifier_count': 0,
            'word_count': len(tokens),
            'exclamation': 0,
            'question': 0
        }
        
        # Check for negation context
        negated = False
        
        for i, token in enumerate(tokens):
            if token in self.negation_words:
                negated = True
                features['negation_count'] += 1
            elif token in self.positive_words:
                if negated:
                    features['negative_count'] += 1
                else:
                    features['positive_count'] += 1
                negated = False
            elif token in self.negative_words:
                if negated:
                    features['positive_count'] += 1
                else:
                    features['negative_count'] += 1
                negated = False
            elif token in self.intensifiers:
                features['intensifier_count'] += 1
        
        # Derived features
        features['sentiment_ratio'] = (
            (features['positive_count'] - features['negative_count']) /
            max(features['word_count'], 1)
        )
        
        return features
    
    def to_vector(self, features):
        """Convert features to numpy array."""
        return np.array([
            features['positive_count'],
            features['negative_count'],
            features['negation_count'],
            features['intensifier_count'],
            features['word_count'],
            features['sentiment_ratio']
        ])

# Example
extractor = SentimentFeatures()

test_texts = [
    ['love', 'amazing', 'product', 'best'],
    ['not', 'good', 'terrible', 'waste'],
    ['okay', 'average', 'nothing', 'special']
]

for tokens in test_texts:
    features = extractor.extract(tokens)
    print(f"Tokens: {tokens}")
    print(f"Positive: {features['positive_count']}, Negative: {features['negative_count']}")
    print(f"Sentiment ratio: {features['sentiment_ratio']:.2f}\\n")
\`\`\`

## Step 3: Classifier

\`\`\`python
class SentimentClassifier:
    """Simple sentiment classifier."""
    
    def __init__(self):
        self.preprocessor = TextPreprocessor()
        self.feature_extractor = SentimentFeatures()
        self.thresholds = {
            'positive': 0.1,
            'negative': -0.1
        }
    
    def predict(self, text):
        """Predict sentiment of text."""
        # Preprocess
        tokens = self.preprocessor.preprocess(text)
        
        # Extract features
        features = self.feature_extractor.extract(tokens)
        
        # Classify based on sentiment ratio
        ratio = features['sentiment_ratio']
        
        if ratio > self.thresholds['positive']:
            label = 'POSITIVE'
            confidence = min(0.5 + ratio, 1.0)
        elif ratio < self.thresholds['negative']:
            label = 'NEGATIVE'
            confidence = min(0.5 - ratio, 1.0)
        else:
            label = 'NEUTRAL'
            confidence = 0.5 + abs(ratio)
        
        return {
            'text': text,
            'label': label,
            'confidence': confidence,
            'features': features
        }
    
    def predict_batch(self, texts):
        """Predict sentiment for multiple texts."""
        return [self.predict(text) for text in texts]
    
    def analyze(self, texts):
        """Analyze sentiment distribution."""
        results = self.predict_batch(texts)
        
        distribution = {'POSITIVE': 0, 'NEGATIVE': 0, 'NEUTRAL': 0}
        for r in results:
            distribution[r['label']] += 1
        
        total = len(texts)
        return {
            'total': total,
            'distribution': distribution,
            'percentages': {
                k: v/total*100 for k, v in distribution.items()
            }
        }

# Example
classifier = SentimentClassifier()

reviews = [
    "This is the best product I've ever bought! Absolutely love it!",
    "Terrible quality. Complete waste of money. Very disappointed.",
    "It's okay. Does what it's supposed to do.",
    "Not bad, but not great either. Average performance.",
    "Amazing experience! Highly recommend to everyone!",
    "Horrible customer service. Never buying again."
]

print("Individual Predictions:")
print("=" * 60)
for review in reviews:
    result = classifier.predict(review)
    print(f"Text: {review[:50]}...")
    print(f"Sentiment: {result['label']} ({result['confidence']:.1%})\\n")

print("\\nOverall Analysis:")
print("=" * 60)
analysis = classifier.analyze(reviews)
for label, pct in analysis['percentages'].items():
    print(f"{label}: {pct:.1f}%")
\`\`\`

## Step 4: API Endpoint

\`\`\`python
# FastAPI endpoint for sentiment analysis

api_code = '''
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Sentiment Analysis API")

class TextInput(BaseModel):
    text: str

class BatchInput(BaseModel):
    texts: List[str]

class SentimentResponse(BaseModel):
    text: str
    label: str
    confidence: float

# Initialize classifier
classifier = SentimentClassifier()

@app.post("/analyze", response_model=SentimentResponse)
def analyze_sentiment(input: TextInput):
    result = classifier.predict(input.text)
    return SentimentResponse(
        text=result["text"],
        label=result["label"],
        confidence=result["confidence"]
    )

@app.post("/analyze/batch")
def analyze_batch(input: BatchInput):
    results = classifier.predict_batch(input.texts)
    return {"results": results}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
'''

print("📝 FastAPI Code:")
print(api_code)
\`\`\`
      `
    },
    // ==================== STOCK PREDICTOR ====================
    {
      id: 'stock-predictor',
      title: 'Stock Price Predictor',
      difficulty: 'Advanced',
      duration: '5-6 hours',
      skills: ['Time Series', 'LSTM', 'Data Visualization', 'Feature Engineering'],
      description: 'Build a stock price prediction model using LSTM neural networks.',
      content: `
# Project: Stock Price Predictor

Build a time series forecasting model for stock prices using LSTM.

## Step 1: Data Preparation

\`\`\`python
import numpy as np

class StockDataPreparer:
    """Prepare stock data for LSTM model."""
    
    def __init__(self, sequence_length=60):
        self.sequence_length = sequence_length
        self.scaler_params = {}
    
    def generate_sample_data(self, days=500):
        """Generate synthetic stock data for demo."""
        np.random.seed(42)
        
        # Start price
        price = 100.0
        prices = [price]
        
        # Generate random walk with trend
        for _ in range(days - 1):
            change = np.random.randn() * 2 + 0.05  # Slight upward trend
            price = max(price + change, 1)  # Price can't go below 1
            prices.append(price)
        
        return np.array(prices)
    
    def normalize(self, data):
        """Min-max normalization."""
        self.scaler_params['min'] = data.min()
        self.scaler_params['max'] = data.max()
        
        return (data - self.scaler_params['min']) / (
            self.scaler_params['max'] - self.scaler_params['min']
        )
    
    def denormalize(self, data):
        """Reverse normalization."""
        return data * (self.scaler_params['max'] - self.scaler_params['min']) + \\
               self.scaler_params['min']
    
    def create_sequences(self, data):
        """Create input sequences and targets."""
        X, y = [], []
        
        for i in range(self.sequence_length, len(data)):
            X.append(data[i - self.sequence_length:i])
            y.append(data[i])
        
        return np.array(X), np.array(y)
    
    def prepare(self, prices, train_split=0.8):
        """Full data preparation pipeline."""
        # Normalize
        normalized = self.normalize(prices)
        
        # Create sequences
        X, y = self.create_sequences(normalized)
        
        # Reshape for LSTM: (samples, timesteps, features)
        X = X.reshape((X.shape[0], X.shape[1], 1))
        
        # Split
        split_idx = int(len(X) * train_split)
        
        return {
            'X_train': X[:split_idx],
            'y_train': y[:split_idx],
            'X_test': X[split_idx:],
            'y_test': y[split_idx:],
            'prices': prices
        }

# Example
preparer = StockDataPreparer(sequence_length=30)
prices = preparer.generate_sample_data(days=300)
data = preparer.prepare(prices)

print(f"Total days: {len(prices)}")
print(f"Training samples: {len(data['X_train'])}")
print(f"Test samples: {len(data['X_test'])}")
print(f"Input shape: {data['X_train'].shape}")
\`\`\`

## Step 2: LSTM Model (Simplified)

\`\`\`python
class SimpleLSTM:
    """Simplified LSTM for demonstration."""
    
    def __init__(self, input_size=1, hidden_size=50, output_size=1):
        self.hidden_size = hidden_size
        np.random.seed(42)
        
        # LSTM weights (simplified)
        self.Wf = np.random.randn(hidden_size, input_size + hidden_size) * 0.1
        self.Wi = np.random.randn(hidden_size, input_size + hidden_size) * 0.1
        self.Wc = np.random.randn(hidden_size, input_size + hidden_size) * 0.1
        self.Wo = np.random.randn(hidden_size, input_size + hidden_size) * 0.1
        
        # Output layer
        self.Wy = np.random.randn(output_size, hidden_size) * 0.1
        self.by = np.zeros((output_size, 1))
    
    def sigmoid(self, x):
        return 1 / (1 + np.exp(-np.clip(x, -500, 500)))
    
    def forward(self, X):
        """Forward pass through LSTM."""
        batch_size, seq_len, _ = X.shape
        predictions = []
        
        for b in range(batch_size):
            h = np.zeros((self.hidden_size, 1))
            c = np.zeros((self.hidden_size, 1))
            
            for t in range(seq_len):
                x_t = X[b, t].reshape(-1, 1)
                
                # Concatenate input and hidden state
                concat = np.vstack([x_t, h])
                
                # Gates
                f = self.sigmoid(self.Wf @ concat)
                i = self.sigmoid(self.Wi @ concat)
                c_tilde = np.tanh(self.Wc @ concat)
                o = self.sigmoid(self.Wo @ concat)
                
                # Update cell state and hidden state
                c = f * c + i * c_tilde
                h = o * np.tanh(c)
            
            # Output prediction
            y = self.Wy @ h + self.by
            predictions.append(y.flatten()[0])
        
        return np.array(predictions)
    
    def train(self, X, y, epochs=10, lr=0.001):
        """Simplified training (gradient descent on output layer only)."""
        losses = []
        
        for epoch in range(epochs):
            predictions = self.forward(X)
            loss = np.mean((predictions - y) ** 2)
            losses.append(loss)
            
            # Simplified gradient update (only output layer)
            error = predictions - y
            # In practice: use backpropagation through time
            
            if epoch % 2 == 0:
                print(f"Epoch {epoch+1}/{epochs}, Loss: {loss:.6f}")
        
        return losses

# Example
model = SimpleLSTM(hidden_size=32)

# Use prepared data
X_train = data['X_train'][:100]  # Use subset for demo
y_train = data['y_train'][:100]

print("Training LSTM...")
losses = model.train(X_train, y_train, epochs=10)

# Predict
predictions = model.forward(data['X_test'][:10])
print(f"\\nSample predictions: {predictions[:5].round(3)}")
print(f"Actual values: {data['y_test'][:5].round(3)}")
\`\`\`

## Step 3: Evaluation & Visualization

\`\`\`python
class StockPredictor:
    """Complete stock prediction system."""
    
    def __init__(self):
        self.preparer = StockDataPreparer(sequence_length=30)
        self.model = SimpleLSTM(hidden_size=32)
        self.trained = False
    
    def train(self, prices, epochs=10):
        """Train the prediction model."""
        data = self.preparer.prepare(prices)
        self.model.train(data['X_train'], data['y_train'], epochs=epochs)
        self.trained = True
        self.data = data
    
    def predict(self, X=None):
        """Make predictions."""
        if X is None:
            X = self.data['X_test']
        predictions = self.model.forward(X)
        return self.preparer.denormalize(predictions)
    
    def evaluate(self):
        """Evaluate model performance."""
        predictions = self.model.forward(self.data['X_test'])
        actual = self.data['y_test']
        
        # Denormalize for real values
        pred_prices = self.preparer.denormalize(predictions)
        actual_prices = self.preparer.denormalize(actual)
        
        # Metrics
        mse = np.mean((pred_prices - actual_prices) ** 2)
        rmse = np.sqrt(mse)
        mae = np.mean(np.abs(pred_prices - actual_prices))
        mape = np.mean(np.abs((actual_prices - pred_prices) / actual_prices)) * 100
        
        return {
            'MSE': mse,
            'RMSE': rmse,
            'MAE': mae,
            'MAPE': mape
        }
    
    def predict_next(self, last_sequence):
        """Predict next day's price."""
        X = last_sequence.reshape(1, -1, 1)
        X_normalized = (X - self.preparer.scaler_params['min']) / \\
                       (self.preparer.scaler_params['max'] - self.preparer.scaler_params['min'])
        pred = self.model.forward(X_normalized)
        return self.preparer.denormalize(pred)[0]

# Demo
predictor = StockPredictor()

# Generate and train
prices = preparer.generate_sample_data(days=300)
predictor.train(prices, epochs=6)

# Evaluate
metrics = predictor.evaluate()
print("\\n📊 Model Evaluation:")
print(f"  RMSE: \${metrics['RMSE']:.2f}")
print(f"  MAE: \${metrics['MAE']:.2f}")
print(f"  MAPE: {metrics['MAPE']:.2f}%")

# Predict next day
last_30_days = prices[-30:]
next_price = predictor.predict_next(last_30_days)
print(f"\\n📈 Next day prediction: \${next_price:.2f}")
print(f"   Current price: \${prices[-1]:.2f}")
\`\`\`

## Production Considerations

\`\`\`python
production_notes = '''
⚠️ Important Disclaimers:

1. **Not Financial Advice**
   - Stock prediction is inherently uncertain
   - Past performance doesn't guarantee future results
   - Use for educational purposes only

2. **Model Improvements**
   - Use PyTorch/TensorFlow for real LSTM
   - Add more features (volume, technical indicators)
   - Implement attention mechanisms
   - Use ensemble methods

3. **Data Sources**
   - Yahoo Finance API (yfinance)
   - Alpha Vantage
   - Polygon.io
   - IEX Cloud

4. **Additional Features to Consider**
   - Moving averages (SMA, EMA)
   - RSI, MACD, Bollinger Bands
   - Volume data
   - Sentiment from news
   - Market indices correlation
'''

print(production_notes)
\`\`\`
      `
    },
    // ==================== RECOMMENDATION ENGINE ====================
    {
      id: 'recommendation-engine',
      title: 'Recommendation Engine',
      difficulty: 'Advanced',
      duration: '4-5 hours',
      skills: ['Collaborative Filtering', 'Matrix Factorization', 'Similarity Metrics'],
      description: 'Build a movie recommendation system using collaborative filtering.',
      content: `
# Project: Recommendation Engine

Build a recommendation system using collaborative filtering techniques.

## Overview

\`\`\`
┌─────────────────────────────────────────────────────────┐
│              Recommendation Approaches                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Content-Based                 Collaborative            │
│  ────────────                 ─────────────            │
│  Item features                User-Item interactions    │
│  "Similar items"              "Users like you liked..." │
│                                                         │
│  Hybrid: Combine both approaches                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
\`\`\`

## Step 1: Data Preparation

\`\`\`python
import numpy as np

class MovieDataset:
    """Synthetic movie rating dataset."""
    
    def __init__(self, n_users=100, n_movies=50, sparsity=0.3):
        self.n_users = n_users
        self.n_movies = n_movies
        
        # Generate synthetic ratings (1-5, 0 = not rated)
        np.random.seed(42)
        
        # Create rating matrix
        self.ratings = np.zeros((n_users, n_movies))
        
        # Fill with random ratings
        for u in range(n_users):
            # Each user rates some movies
            n_rated = int(n_movies * sparsity)
            rated_movies = np.random.choice(n_movies, n_rated, replace=False)
            
            for m in rated_movies:
                # Generate rating based on user/movie "preferences"
                base_rating = 3 + np.random.randn()
                self.ratings[u, m] = np.clip(round(base_rating), 1, 5)
        
        # Movie names
        self.movie_names = [f"Movie_{i}" for i in range(n_movies)]
        self.user_names = [f"User_{i}" for i in range(n_users)]
    
    def get_user_ratings(self, user_id):
        """Get all ratings for a user."""
        ratings = self.ratings[user_id]
        return {
            self.movie_names[i]: int(r) 
            for i, r in enumerate(ratings) if r > 0
        }
    
    def get_movie_ratings(self, movie_id):
        """Get all ratings for a movie."""
        ratings = self.ratings[:, movie_id]
        return {
            self.user_names[i]: int(r) 
            for i, r in enumerate(ratings) if r > 0
        }
    
    def stats(self):
        """Dataset statistics."""
        rated = self.ratings > 0
        return {
            'users': self.n_users,
            'movies': self.n_movies,
            'total_ratings': int(rated.sum()),
            'sparsity': f"{(1 - rated.mean()) * 100:.1f}%",
            'avg_rating': f"{self.ratings[rated].mean():.2f}"
        }

# Create dataset
dataset = MovieDataset(n_users=50, n_movies=20, sparsity=0.4)

print("📊 Dataset Stats:")
for k, v in dataset.stats().items():
    print(f"  {k}: {v}")

print("\\n👤 Sample User Ratings (User_0):")
for movie, rating in list(dataset.get_user_ratings(0).items())[:5]:
    print(f"  {movie}: {'⭐' * rating}")
\`\`\`

## Step 2: User-Based Collaborative Filtering

\`\`\`python
class UserBasedCF:
    """User-based collaborative filtering."""
    
    def __init__(self, ratings_matrix):
        self.ratings = ratings_matrix
        self.n_users, self.n_movies = ratings_matrix.shape
        self.similarity_matrix = self._compute_similarities()
    
    def _compute_similarities(self):
        """Compute user-user similarity matrix."""
        similarities = np.zeros((self.n_users, self.n_users))
        
        for i in range(self.n_users):
            for j in range(i, self.n_users):
                sim = self._cosine_similarity(
                    self.ratings[i], self.ratings[j]
                )
                similarities[i, j] = sim
                similarities[j, i] = sim
        
        return similarities
    
    def _cosine_similarity(self, a, b):
        """Cosine similarity between two users."""
        # Only consider movies both users rated
        mask = (a > 0) & (b > 0)
        if mask.sum() == 0:
            return 0
        
        a_masked = a[mask]
        b_masked = b[mask]
        
        dot = np.dot(a_masked, b_masked)
        norm = np.linalg.norm(a_masked) * np.linalg.norm(b_masked)
        
        return dot / norm if norm > 0 else 0
    
    def get_similar_users(self, user_id, n=5):
        """Get most similar users."""
        similarities = self.similarity_matrix[user_id]
        # Exclude self
        similarities[user_id] = -1
        
        similar_indices = np.argsort(similarities)[-n:][::-1]
        
        return [(idx, similarities[idx]) for idx in similar_indices]
    
    def predict_rating(self, user_id, movie_id, n_neighbors=5):
        """Predict rating for a user-movie pair."""
        if self.ratings[user_id, movie_id] > 0:
            return self.ratings[user_id, movie_id]  # Already rated
        
        # Get similar users who rated this movie
        similar_users = self.get_similar_users(user_id, n=n_neighbors)
        
        weighted_sum = 0
        similarity_sum = 0
        
        for neighbor_id, similarity in similar_users:
            neighbor_rating = self.ratings[neighbor_id, movie_id]
            if neighbor_rating > 0 and similarity > 0:
                weighted_sum += similarity * neighbor_rating
                similarity_sum += similarity
        
        if similarity_sum == 0:
            # Fallback to movie average
            movie_ratings = self.ratings[:, movie_id]
            return movie_ratings[movie_ratings > 0].mean() if movie_ratings.any() else 3.0
        
        return weighted_sum / similarity_sum
    
    def recommend(self, user_id, n=5):
        """Get top-n recommendations for a user."""
        predictions = []
        
        for movie_id in range(self.n_movies):
            if self.ratings[user_id, movie_id] == 0:  # Not rated
                pred = self.predict_rating(user_id, movie_id)
                predictions.append((movie_id, pred))
        
        predictions.sort(key=lambda x: x[1], reverse=True)
        return predictions[:n]

# Example
cf = UserBasedCF(dataset.ratings)

print("👥 Similar Users to User_0:")
for user_id, similarity in cf.get_similar_users(0, n=5):
    print(f"  User_{user_id}: similarity = {similarity:.3f}")

print("\\n🎬 Top 5 Recommendations for User_0:")
for movie_id, pred_rating in cf.recommend(0, n=5):
    print(f"  Movie_{movie_id}: predicted rating = {pred_rating:.2f}")
\`\`\`

## Step 3: Matrix Factorization

\`\`\`python
class MatrixFactorization:
    """Matrix factorization for recommendations."""
    
    def __init__(self, n_factors=10, learning_rate=0.01, reg=0.1):
        self.n_factors = n_factors
        self.lr = learning_rate
        self.reg = reg
    
    def fit(self, ratings, n_epochs=20):
        """Train the model."""
        self.n_users, self.n_movies = ratings.shape
        
        # Initialize latent factors
        np.random.seed(42)
        self.user_factors = np.random.randn(self.n_users, self.n_factors) * 0.1
        self.movie_factors = np.random.randn(self.n_movies, self.n_factors) * 0.1
        
        # Training
        for epoch in range(n_epochs):
            total_error = 0
            n_ratings = 0
            
            for u in range(self.n_users):
                for m in range(self.n_movies):
                    if ratings[u, m] > 0:
                        # Prediction
                        pred = self.user_factors[u] @ self.movie_factors[m]
                        error = ratings[u, m] - pred
                        
                        # Update factors
                        user_update = self.lr * (error * self.movie_factors[m] - 
                                                  self.reg * self.user_factors[u])
                        movie_update = self.lr * (error * self.user_factors[u] - 
                                                   self.reg * self.movie_factors[m])
                        
                        self.user_factors[u] += user_update
                        self.movie_factors[m] += movie_update
                        
                        total_error += error ** 2
                        n_ratings += 1
            
            rmse = np.sqrt(total_error / n_ratings)
            if epoch % 5 == 0:
                print(f"Epoch {epoch+1}/{n_epochs}, RMSE: {rmse:.4f}")
    
    def predict(self, user_id, movie_id):
        """Predict rating."""
        pred = self.user_factors[user_id] @ self.movie_factors[movie_id]
        return np.clip(pred, 1, 5)
    
    def recommend(self, user_id, n=5, exclude_rated=True):
        """Get recommendations for user."""
        # Compute all predictions for user
        predictions = self.user_factors[user_id] @ self.movie_factors.T
        
        if exclude_rated:
            # Mask already rated movies
            rated_mask = dataset.ratings[user_id] > 0
            predictions[rated_mask] = -np.inf
        
        # Get top-n
        top_indices = np.argsort(predictions)[-n:][::-1]
        
        return [(idx, np.clip(predictions[idx], 1, 5)) for idx in top_indices]

# Train
mf = MatrixFactorization(n_factors=5, learning_rate=0.01)
mf.fit(dataset.ratings, n_epochs=20)

print("\\n🎬 Matrix Factorization Recommendations for User_0:")
for movie_id, pred_rating in mf.recommend(0, n=5):
    print(f"  Movie_{movie_id}: predicted rating = {pred_rating:.2f}")
\`\`\`

## Step 4: Evaluation

\`\`\`python
class RecommenderEvaluator:
    """Evaluate recommendation quality."""
    
    @staticmethod
    def split_data(ratings, test_ratio=0.2):
        """Split ratings into train/test."""
        train = ratings.copy()
        test = np.zeros_like(ratings)
        
        for u in range(ratings.shape[0]):
            rated = np.where(ratings[u] > 0)[0]
            if len(rated) > 2:
                n_test = max(1, int(len(rated) * test_ratio))
                test_items = np.random.choice(rated, n_test, replace=False)
                
                for m in test_items:
                    test[u, m] = train[u, m]
                    train[u, m] = 0
        
        return train, test
    
    @staticmethod
    def rmse(predictions, actual):
        """Root Mean Squared Error."""
        mask = actual > 0
        if mask.sum() == 0:
            return 0
        return np.sqrt(np.mean((predictions[mask] - actual[mask]) ** 2))
    
    @staticmethod
    def precision_at_k(recommended, relevant, k=5):
        """Precision@K metric."""
        recommended_k = recommended[:k]
        hits = len(set(recommended_k) & set(relevant))
        return hits / k

# Evaluate
train, test = RecommenderEvaluator.split_data(dataset.ratings)

# Train on train set
mf_eval = MatrixFactorization(n_factors=5)
mf_eval.fit(train, n_epochs=10)

# Predict on test set
predictions = np.zeros_like(test)
for u in range(dataset.n_users):
    for m in range(dataset.n_movies):
        if test[u, m] > 0:
            predictions[u, m] = mf_eval.predict(u, m)

rmse = RecommenderEvaluator.rmse(predictions, test)
print(f"\\n📊 Evaluation Results:")
print(f"  Test RMSE: {rmse:.4f}")
\`\`\`
      `
    }
  ]
};
