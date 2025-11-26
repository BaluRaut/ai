// Capstone Projects - 10 End-to-End ML/AI Projects
// Each project includes detailed steps, datasets, and implementation guides

export const capstoneProjects = [
  {
    id: 'capstone-01',
    title: 'Customer Churn Prediction System',
    difficulty: 'intermediate',
    duration: '2-3 weeks',
    category: 'classification',
    industry: 'telecom',
    description: 'Build a complete ML system to predict which customers are likely to cancel their subscription. Learn feature engineering, class imbalance handling, and model interpretation.',
    skills: ['Classification', 'Feature Engineering', 'SMOTE', 'SHAP', 'Deployment'],
    dataset: {
      name: 'Telco Customer Churn',
      source: 'Kaggle',
      url: 'https://www.kaggle.com/datasets/blastchar/telco-customer-churn',
      size: '7043 rows, 21 columns',
      features: ['tenure', 'MonthlyCharges', 'TotalCharges', 'Contract', 'PaymentMethod', 'InternetService']
    },
    learningOutcomes: [
      'Handle imbalanced classification problems',
      'Perform comprehensive EDA for business insights',
      'Engineer features from raw customer data',
      'Build and compare multiple ML models',
      'Interpret model predictions with SHAP',
      'Deploy model as REST API'
    ],
    steps: [
      {
        phase: 'Phase 1: Data Understanding',
        duration: '2-3 days',
        tasks: [
          'Download and explore the dataset',
          'Understand business context and churn definition',
          'Identify data types and missing values',
          'Calculate churn rate and class distribution'
        ],
        code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
df = pd.read_csv('telco_churn.csv')

# Basic exploration
print(f"Dataset Shape: {df.shape}")
print(f"Churn Rate: {df['Churn'].value_counts(normalize=True)}")

# Check missing values
print(f"\\nMissing Values:\\n{df.isnull().sum()}")

# Data types
print(f"\\nData Types:\\n{df.dtypes}")`
      },
      {
        phase: 'Phase 2: Exploratory Data Analysis',
        duration: '3-4 days',
        tasks: [
          'Analyze churn by customer segments',
          'Visualize feature distributions',
          'Identify correlations between features',
          'Discover patterns in churned vs retained customers'
        ],
        code: `# Churn by contract type
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Contract type vs Churn
sns.countplot(data=df, x='Contract', hue='Churn', ax=axes[0,0])
axes[0,0].set_title('Churn by Contract Type')

# Tenure distribution
sns.histplot(data=df, x='tenure', hue='Churn', kde=True, ax=axes[0,1])
axes[0,1].set_title('Tenure Distribution by Churn')

# Monthly charges
sns.boxplot(data=df, x='Churn', y='MonthlyCharges', ax=axes[1,0])
axes[1,0].set_title('Monthly Charges by Churn')

# Correlation heatmap
numeric_df = df.select_dtypes(include=[np.number])
sns.heatmap(numeric_df.corr(), annot=True, cmap='coolwarm', ax=axes[1,1])
axes[1,1].set_title('Feature Correlations')

plt.tight_layout()
plt.savefig('eda_analysis.png', dpi=300)
plt.show()`
      },
      {
        phase: 'Phase 3: Feature Engineering',
        duration: '2-3 days',
        tasks: [
          'Create tenure groups (new, mid, loyal)',
          'Calculate average monthly spend',
          'Create service bundle features',
          'Encode categorical variables'
        ],
        code: `from sklearn.preprocessing import LabelEncoder, StandardScaler

# Create tenure groups
df['TenureGroup'] = pd.cut(df['tenure'], 
                           bins=[0, 12, 24, 48, 72], 
                           labels=['New', 'Growing', 'Mature', 'Loyal'])

# Service count
service_cols = ['PhoneService', 'InternetService', 'OnlineSecurity', 
                'OnlineBackup', 'DeviceProtection', 'TechSupport', 
                'StreamingTV', 'StreamingMovies']
df['ServiceCount'] = df[service_cols].apply(
    lambda x: sum(x != 'No' for x in x), axis=1
)

# Average charge per month of tenure
df['AvgChargePerTenure'] = df['TotalCharges'] / (df['tenure'] + 1)

# Encode categorical variables
le = LabelEncoder()
categorical_cols = df.select_dtypes(include=['object']).columns
for col in categorical_cols:
    if col != 'customerID':
        df[col + '_encoded'] = le.fit_transform(df[col])

print("Feature Engineering Complete!")
print(f"New columns: {df.columns.tolist()}")`
      },
      {
        phase: 'Phase 4: Model Building',
        duration: '4-5 days',
        tasks: [
          'Split data into train/test sets',
          'Handle class imbalance with SMOTE',
          'Train multiple models (RF, XGBoost, LightGBM)',
          'Perform hyperparameter tuning',
          'Compare model performance'
        ],
        code: `from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from xgboost import XGBClassifier
from imblearn.over_sampling import SMOTE
from sklearn.metrics import classification_report, roc_auc_score, confusion_matrix

# Prepare features and target
feature_cols = [col for col in df.columns if col.endswith('_encoded') or 
                col in ['tenure', 'MonthlyCharges', 'ServiceCount', 'AvgChargePerTenure']]
X = df[feature_cols]
y = df['Churn_encoded']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Apply SMOTE
smote = SMOTE(random_state=42)
X_train_balanced, y_train_balanced = smote.fit_resample(X_train, y_train)

print(f"Before SMOTE: {y_train.value_counts().to_dict()}")
print(f"After SMOTE: {pd.Series(y_train_balanced).value_counts().to_dict()}")

# Train models
models = {
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'Gradient Boosting': GradientBoostingClassifier(n_estimators=100, random_state=42),
    'XGBoost': XGBClassifier(n_estimators=100, random_state=42, eval_metric='logloss')
}

results = {}
for name, model in models.items():
    model.fit(X_train_balanced, y_train_balanced)
    y_pred = model.predict(X_test)
    y_proba = model.predict_proba(X_test)[:, 1]
    
    results[name] = {
        'accuracy': (y_pred == y_test).mean(),
        'auc_roc': roc_auc_score(y_test, y_proba)
    }
    print(f"\\n{name}:")
    print(classification_report(y_test, y_pred))`
      },
      {
        phase: 'Phase 5: Model Interpretation',
        duration: '2-3 days',
        tasks: [
          'Calculate feature importance',
          'Apply SHAP for interpretability',
          'Identify key churn drivers',
          'Create actionable insights'
        ],
        code: `import shap

# Select best model (XGBoost)
best_model = models['XGBoost']

# SHAP values
explainer = shap.TreeExplainer(best_model)
shap_values = explainer.shap_values(X_test)

# Summary plot
plt.figure(figsize=(10, 8))
shap.summary_plot(shap_values, X_test, feature_names=feature_cols, show=False)
plt.title('Feature Impact on Churn Prediction')
plt.tight_layout()
plt.savefig('shap_summary.png', dpi=300)
plt.show()

# Top features
feature_importance = pd.DataFrame({
    'feature': feature_cols,
    'importance': best_model.feature_importances_
}).sort_values('importance', ascending=False)

print("\\nTop Churn Drivers:")
print(feature_importance.head(10))`
      },
      {
        phase: 'Phase 6: Deployment',
        duration: '3-4 days',
        tasks: [
          'Save trained model',
          'Create FastAPI endpoint',
          'Build Docker container',
          'Deploy to cloud (optional)'
        ],
        code: `# Save model
import joblib
joblib.dump(best_model, 'churn_model.pkl')
joblib.dump(feature_cols, 'feature_cols.pkl')

# FastAPI endpoint (app.py)
'''
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()
model = joblib.load('churn_model.pkl')
feature_cols = joblib.load('feature_cols.pkl')

class CustomerData(BaseModel):
    tenure: int
    MonthlyCharges: float
    # ... other features

@app.post('/predict')
def predict_churn(data: CustomerData):
    features = np.array([[data.tenure, data.MonthlyCharges, ...]])
    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0][1]
    return {
        'churn_prediction': int(prediction),
        'churn_probability': float(probability),
        'risk_level': 'High' if probability > 0.7 else 'Medium' if probability > 0.4 else 'Low'
    }
'''`
      }
    ],
    deliverables: [
      'Jupyter notebook with complete analysis',
      'EDA report with visualizations',
      'Trained model file (.pkl)',
      'FastAPI deployment code',
      'README with setup instructions',
      'Business presentation with insights'
    ],
    resources: [
      { title: 'Kaggle Dataset', url: 'https://www.kaggle.com/datasets/blastchar/telco-customer-churn' },
      { title: 'SHAP Documentation', url: 'https://shap.readthedocs.io/' },
      { title: 'FastAPI Tutorial', url: 'https://fastapi.tiangolo.com/tutorial/' }
    ]
  },

  {
    id: 'capstone-02',
    title: 'Real-Time Object Detection System',
    difficulty: 'advanced',
    duration: '3-4 weeks',
    category: 'computer-vision',
    industry: 'retail/security',
    description: 'Build a real-time object detection system using YOLOv8. Learn to fine-tune pre-trained models, optimize for inference, and deploy for live video processing.',
    skills: ['Computer Vision', 'Deep Learning', 'Transfer Learning', 'YOLO', 'OpenCV'],
    dataset: {
      name: 'Custom Dataset or COCO',
      source: 'Roboflow / COCO',
      url: 'https://cocodataset.org/',
      size: 'Variable',
      features: ['Images', 'Bounding Boxes', 'Class Labels']
    },
    learningOutcomes: [
      'Understand object detection architectures',
      'Prepare and annotate custom datasets',
      'Fine-tune YOLOv8 for custom classes',
      'Optimize model for real-time inference',
      'Deploy detection system with OpenCV'
    ],
    steps: [
      {
        phase: 'Phase 1: Environment Setup',
        duration: '1-2 days',
        tasks: [
          'Install Ultralytics YOLOv8',
          'Set up GPU environment (CUDA)',
          'Prepare dataset structure',
          'Configure training parameters'
        ],
        code: `# Install dependencies
# pip install ultralytics opencv-python

from ultralytics import YOLO
import cv2
import torch

# Check GPU availability
print(f"CUDA Available: {torch.cuda.is_available()}")
print(f"GPU: {torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'CPU'}")

# Load pre-trained model
model = YOLO('yolov8n.pt')  # nano model for speed
print("Model loaded successfully!")`
      },
      {
        phase: 'Phase 2: Dataset Preparation',
        duration: '3-5 days',
        tasks: [
          'Collect or download images',
          'Annotate using Roboflow or LabelImg',
          'Split into train/val/test sets',
          'Create YOLO format annotations'
        ],
        code: `# Dataset structure
'''
dataset/
├── train/
│   ├── images/
│   └── labels/
├── val/
│   ├── images/
│   └── labels/
└── data.yaml
'''

# data.yaml content
'''
train: ./train/images
val: ./val/images

nc: 3  # number of classes
names: ['person', 'car', 'dog']
'''

# Verify dataset
import os
train_images = len(os.listdir('dataset/train/images'))
train_labels = len(os.listdir('dataset/train/labels'))
print(f"Training: {train_images} images, {train_labels} labels")`
      },
      {
        phase: 'Phase 3: Model Training',
        duration: '3-5 days',
        tasks: [
          'Configure training hyperparameters',
          'Train YOLOv8 on custom dataset',
          'Monitor training metrics',
          'Evaluate on validation set'
        ],
        code: `from ultralytics import YOLO

# Load pre-trained model
model = YOLO('yolov8n.pt')

# Train on custom dataset
results = model.train(
    data='dataset/data.yaml',
    epochs=100,
    imgsz=640,
    batch=16,
    patience=20,
    save=True,
    project='runs/detect',
    name='custom_detector'
)

# Evaluate
metrics = model.val()
print(f"mAP50: {metrics.box.map50:.4f}")
print(f"mAP50-95: {metrics.box.map:.4f}")`
      },
      {
        phase: 'Phase 4: Real-Time Detection',
        duration: '3-4 days',
        tasks: [
          'Load trained model',
          'Set up webcam capture',
          'Implement detection loop',
          'Add tracking (optional)'
        ],
        code: `import cv2
from ultralytics import YOLO

# Load trained model
model = YOLO('runs/detect/custom_detector/weights/best.pt')

# Open webcam
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Run detection
    results = model(frame, conf=0.5)
    
    # Draw results
    annotated_frame = results[0].plot()
    
    # Display FPS
    fps = 1000 / results[0].speed['inference']
    cv2.putText(annotated_frame, f'FPS: {fps:.1f}', (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    
    cv2.imshow('Object Detection', annotated_frame)
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()`
      },
      {
        phase: 'Phase 5: Optimization & Deployment',
        duration: '3-4 days',
        tasks: [
          'Export to ONNX/TensorRT',
          'Benchmark inference speed',
          'Create deployment package',
          'Document usage instructions'
        ],
        code: `# Export to ONNX
model.export(format='onnx', dynamic=True)

# Export to TensorRT (NVIDIA GPUs)
model.export(format='engine', device=0)

# Benchmark
import time

# Test inference speed
times = []
for _ in range(100):
    start = time.time()
    results = model(frame)
    times.append(time.time() - start)

print(f"Average inference time: {np.mean(times)*1000:.2f}ms")
print(f"FPS: {1/np.mean(times):.1f}")`
      }
    ],
    deliverables: [
      'Trained YOLO model weights',
      'Real-time detection script',
      'Performance benchmarks',
      'Docker container for deployment',
      'Demo video showing detection'
    ],
    resources: [
      { title: 'Ultralytics YOLOv8 Docs', url: 'https://docs.ultralytics.com/' },
      { title: 'Roboflow Annotator', url: 'https://roboflow.com/' },
      { title: 'COCO Dataset', url: 'https://cocodataset.org/' }
    ]
  },

  {
    id: 'capstone-03',
    title: 'Sentiment Analysis API with Transformers',
    difficulty: 'intermediate',
    duration: '2-3 weeks',
    category: 'nlp',
    industry: 'social-media/marketing',
    description: 'Build a production-ready sentiment analysis API using Hugging Face Transformers. Support multiple languages and deploy with FastAPI and Docker.',
    skills: ['NLP', 'Transformers', 'BERT', 'FastAPI', 'Docker'],
    dataset: {
      name: 'Amazon Reviews / Twitter Sentiment',
      source: 'Kaggle / Hugging Face',
      url: 'https://huggingface.co/datasets/amazon_reviews_multi',
      size: 'Variable',
      features: ['text', 'sentiment', 'language']
    },
    learningOutcomes: [
      'Fine-tune transformer models for classification',
      'Handle multilingual text data',
      'Build production-ready APIs',
      'Containerize and deploy ML services'
    ],
    steps: [
      {
        phase: 'Phase 1: Data Preparation',
        duration: '2-3 days',
        tasks: [
          'Load and explore dataset',
          'Clean and preprocess text',
          'Handle class imbalance',
          'Create train/val/test splits'
        ],
        code: `from datasets import load_dataset
import pandas as pd

# Load dataset
dataset = load_dataset('amazon_reviews_multi', 'en')

# Convert to pandas
train_df = pd.DataFrame(dataset['train'])
test_df = pd.DataFrame(dataset['test'])

# Map stars to sentiment
def map_sentiment(stars):
    if stars <= 2:
        return 0  # Negative
    elif stars == 3:
        return 1  # Neutral
    else:
        return 2  # Positive

train_df['sentiment'] = train_df['stars'].apply(map_sentiment)

# Check distribution
print(train_df['sentiment'].value_counts())`
      },
      {
        phase: 'Phase 2: Model Fine-tuning',
        duration: '4-5 days',
        tasks: [
          'Load pre-trained BERT model',
          'Tokenize text data',
          'Fine-tune for sentiment classification',
          'Evaluate on test set'
        ],
        code: `from transformers import (
    AutoTokenizer, 
    AutoModelForSequenceClassification,
    TrainingArguments,
    Trainer
)
from datasets import Dataset
import torch

# Load tokenizer and model
model_name = 'distilbert-base-uncased'
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(
    model_name, num_labels=3
)

# Tokenize function
def tokenize_function(examples):
    return tokenizer(
        examples['review_body'],
        padding='max_length',
        truncation=True,
        max_length=256
    )

# Prepare datasets
train_dataset = Dataset.from_pandas(train_df[['review_body', 'sentiment']])
train_dataset = train_dataset.map(tokenize_function, batched=True)

# Training arguments
training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=32,
    warmup_steps=500,
    weight_decay=0.01,
    logging_dir='./logs',
    evaluation_strategy='epoch'
)

# Trainer
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset
)

# Train
trainer.train()`
      },
      {
        phase: 'Phase 3: API Development',
        duration: '3-4 days',
        tasks: [
          'Create FastAPI application',
          'Load fine-tuned model',
          'Implement prediction endpoint',
          'Add batch processing support'
        ],
        code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import pipeline
import torch

app = FastAPI(title='Sentiment Analysis API')

# Load model
classifier = pipeline(
    'sentiment-analysis',
    model='./results/checkpoint-final',
    tokenizer='distilbert-base-uncased'
)

class TextInput(BaseModel):
    text: str
    
class BatchInput(BaseModel):
    texts: list[str]

class SentimentResult(BaseModel):
    text: str
    sentiment: str
    confidence: float

@app.post('/analyze', response_model=SentimentResult)
async def analyze_sentiment(input: TextInput):
    result = classifier(input.text)[0]
    return SentimentResult(
        text=input.text,
        sentiment=result['label'],
        confidence=result['score']
    )

@app.post('/analyze/batch')
async def analyze_batch(input: BatchInput):
    results = classifier(input.texts)
    return [
        SentimentResult(
            text=text,
            sentiment=r['label'],
            confidence=r['score']
        )
        for text, r in zip(input.texts, results)
    ]`
      },
      {
        phase: 'Phase 4: Containerization',
        duration: '2-3 days',
        tasks: [
          'Create Dockerfile',
          'Build and test container',
          'Set up docker-compose',
          'Deploy to cloud'
        ],
        code: `# Dockerfile
'''
FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
'''

# docker-compose.yml
'''
version: "3.8"
services:
  sentiment-api:
    build: .
    ports:
      - "8000:8000"
    volumes:
      - ./models:/app/models
    environment:
      - MODEL_PATH=/app/models
    deploy:
      resources:
        limits:
          memory: 4G
'''`
      }
    ],
    deliverables: [
      'Fine-tuned sentiment model',
      'FastAPI application code',
      'Docker deployment files',
      'API documentation (Swagger)',
      'Performance benchmarks'
    ],
    resources: [
      { title: 'Hugging Face Transformers', url: 'https://huggingface.co/docs/transformers/' },
      { title: 'FastAPI Documentation', url: 'https://fastapi.tiangolo.com/' },
      { title: 'Docker Tutorial', url: 'https://docs.docker.com/get-started/' }
    ]
  },

  {
    id: 'capstone-04',
    title: 'Recommendation Engine',
    difficulty: 'intermediate',
    duration: '3-4 weeks',
    category: 'recommendation',
    industry: 'e-commerce/streaming',
    description: 'Build a hybrid recommendation system combining collaborative filtering and content-based approaches. Implement for movies or products with real-time updates.',
    skills: ['Collaborative Filtering', 'Matrix Factorization', 'Content-Based', 'A/B Testing'],
    dataset: {
      name: 'MovieLens 100K',
      source: 'GroupLens',
      url: 'https://grouplens.org/datasets/movielens/',
      size: '100,000 ratings, 9,000 movies',
      features: ['userId', 'movieId', 'rating', 'timestamp', 'genres']
    },
    learningOutcomes: [
      'Implement collaborative filtering from scratch',
      'Build content-based recommender',
      'Create hybrid recommendation system',
      'Evaluate recommendation quality'
    ],
    steps: [
      {
        phase: 'Phase 1: Data Analysis',
        duration: '2-3 days',
        tasks: [
          'Load MovieLens dataset',
          'Analyze rating distributions',
          'Explore user and item statistics',
          'Identify cold-start scenarios'
        ],
        code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Load data
ratings = pd.read_csv('ml-100k/ratings.csv')
movies = pd.read_csv('ml-100k/movies.csv')

# Merge
df = ratings.merge(movies, on='movieId')

# Statistics
print(f"Total ratings: {len(ratings):,}")
print(f"Unique users: {ratings['userId'].nunique()}")
print(f"Unique movies: {ratings['movieId'].nunique()}")
print(f"Sparsity: {1 - len(ratings) / (ratings['userId'].nunique() * ratings['movieId'].nunique()):.2%}")

# Rating distribution
ratings['rating'].hist(bins=10)
plt.title('Rating Distribution')
plt.xlabel('Rating')
plt.ylabel('Count')
plt.show()`
      },
      {
        phase: 'Phase 2: Collaborative Filtering',
        duration: '5-6 days',
        tasks: [
          'Create user-item matrix',
          'Implement user-based CF',
          'Implement item-based CF',
          'Apply matrix factorization (SVD)'
        ],
        code: `from scipy.sparse import csr_matrix
from sklearn.decomposition import TruncatedSVD
from sklearn.metrics.pairwise import cosine_similarity

# Create user-item matrix
user_item_matrix = ratings.pivot(
    index='userId', 
    columns='movieId', 
    values='rating'
).fillna(0)

# Matrix factorization with SVD
svd = TruncatedSVD(n_components=50, random_state=42)
user_factors = svd.fit_transform(user_item_matrix)
item_factors = svd.components_.T

# Reconstruct ratings
predicted_ratings = np.dot(user_factors, item_factors.T)

# Get recommendations for user
def get_recommendations(user_id, n=10):
    user_idx = user_id - 1
    user_ratings = predicted_ratings[user_idx]
    
    # Get movies not yet rated
    already_rated = ratings[ratings['userId'] == user_id]['movieId'].values
    
    # Sort by predicted rating
    movie_scores = list(enumerate(user_ratings, 1))
    movie_scores = [(m, s) for m, s in movie_scores if m not in already_rated]
    movie_scores.sort(key=lambda x: x[1], reverse=True)
    
    return movie_scores[:n]

# Example
recs = get_recommendations(user_id=1)
print("Recommendations for User 1:")
for movie_id, score in recs:
    title = movies[movies['movieId'] == movie_id]['title'].values[0]
    print(f"  {title}: {score:.2f}")`
      },
      {
        phase: 'Phase 3: Content-Based Filtering',
        duration: '3-4 days',
        tasks: [
          'Extract movie features (genres)',
          'Calculate content similarity',
          'Build content-based recommender',
          'Handle cold-start problem'
        ],
        code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

# Create genre features
movies['genres_str'] = movies['genres'].str.replace('|', ' ')

# TF-IDF on genres
tfidf = TfidfVectorizer(stop_words='english')
genre_matrix = tfidf.fit_transform(movies['genres_str'])

# Calculate similarity
cosine_sim = linear_kernel(genre_matrix, genre_matrix)

# Content-based recommendations
def content_based_recommend(movie_title, n=10):
    idx = movies[movies['title'] == movie_title].index[0]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores.sort(key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:n+1]
    
    movie_indices = [i[0] for i in sim_scores]
    return movies['title'].iloc[movie_indices].tolist()

# Example
print("Similar to 'Toy Story (1995)':")
print(content_based_recommend('Toy Story (1995)'))`
      },
      {
        phase: 'Phase 4: Hybrid System',
        duration: '3-4 days',
        tasks: [
          'Combine CF and content-based scores',
          'Implement weighted hybrid',
          'Add diversity to recommendations',
          'Build recommendation API'
        ],
        code: `def hybrid_recommend(user_id, n=10, cf_weight=0.7):
    # Get collaborative filtering scores
    cf_recs = get_recommendations(user_id, n=50)
    
    # Get user's favorite genres from history
    user_movies = ratings[ratings['userId'] == user_id]['movieId'].values
    user_genres = movies[movies['movieId'].isin(user_movies)]['genres_str']
    
    # Score and combine
    final_scores = {}
    for movie_id, cf_score in cf_recs:
        # Content similarity to user profile
        movie_genres = movies[movies['movieId'] == movie_id]['genres_str'].values
        if len(movie_genres) > 0:
            # Simple genre overlap score
            content_score = len(set(movie_genres[0].split()) & 
                               set(' '.join(user_genres).split())) / 10
        else:
            content_score = 0
        
        # Weighted combination
        final_scores[movie_id] = cf_weight * cf_score + (1 - cf_weight) * content_score
    
    # Sort and return top n
    sorted_recs = sorted(final_scores.items(), key=lambda x: x[1], reverse=True)
    return sorted_recs[:n]

# Test hybrid
print("Hybrid Recommendations for User 1:")
for movie_id, score in hybrid_recommend(1):
    title = movies[movies['movieId'] == movie_id]['title'].values[0]
    print(f"  {title}: {score:.2f}")`
      }
    ],
    deliverables: [
      'Collaborative filtering implementation',
      'Content-based recommender',
      'Hybrid recommendation system',
      'Streamlit demo application',
      'Evaluation metrics report'
    ],
    resources: [
      { title: 'MovieLens Dataset', url: 'https://grouplens.org/datasets/movielens/' },
      { title: 'Surprise Library', url: 'https://surpriselib.com/' },
      { title: 'Recommendation Systems Book', url: 'http://www.recommenderbook.net/' }
    ]
  },

  {
    id: 'capstone-05',
    title: 'Time Series Forecasting Dashboard',
    difficulty: 'intermediate',
    duration: '2-3 weeks',
    category: 'forecasting',
    industry: 'retail/finance',
    description: 'Build a comprehensive time series forecasting system comparing multiple approaches: ARIMA, Prophet, and LSTM. Create an interactive dashboard for visualization.',
    skills: ['Time Series', 'ARIMA', 'Prophet', 'LSTM', 'Streamlit'],
    dataset: {
      name: 'Store Sales - Kaggle',
      source: 'Kaggle Competition',
      url: 'https://www.kaggle.com/c/store-sales-time-series-forecasting',
      size: '3M+ rows',
      features: ['date', 'store', 'sales', 'promotions', 'holidays']
    },
    learningOutcomes: [
      'Understand time series decomposition',
      'Implement multiple forecasting methods',
      'Compare and ensemble models',
      'Build interactive dashboards'
    ],
    steps: [
      {
        phase: 'Phase 1: Time Series Analysis',
        duration: '3-4 days',
        tasks: [
          'Load and preprocess data',
          'Perform decomposition',
          'Check stationarity',
          'Analyze seasonality patterns'
        ],
        code: `import pandas as pd
import numpy as np
from statsmodels.tsa.seasonal import seasonal_decompose
from statsmodels.tsa.stattools import adfuller

# Load data
df = pd.read_csv('train.csv', parse_dates=['date'])
df = df.groupby('date')['sales'].sum().reset_index()
df.set_index('date', inplace=True)

# Decomposition
decomposition = seasonal_decompose(df['sales'], period=365)

fig, axes = plt.subplots(4, 1, figsize=(12, 10))
decomposition.observed.plot(ax=axes[0], title='Observed')
decomposition.trend.plot(ax=axes[1], title='Trend')
decomposition.seasonal.plot(ax=axes[2], title='Seasonal')
decomposition.resid.plot(ax=axes[3], title='Residual')
plt.tight_layout()
plt.show()

# Stationarity test
result = adfuller(df['sales'].dropna())
print(f'ADF Statistic: {result[0]:.4f}')
print(f'p-value: {result[1]:.4f}')`
      },
      {
        phase: 'Phase 2: Classical Models (ARIMA)',
        duration: '3-4 days',
        tasks: [
          'Determine ARIMA parameters',
          'Train ARIMA model',
          'Validate forecasts',
          'Calculate error metrics'
        ],
        code: `from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_absolute_error, mean_squared_error

# Split data
train = df['sales'][:-30]
test = df['sales'][-30:]

# Fit ARIMA
model = ARIMA(train, order=(7, 1, 7))
arima_model = model.fit()

# Forecast
forecast = arima_model.forecast(steps=30)

# Evaluate
mae = mean_absolute_error(test, forecast)
rmse = np.sqrt(mean_squared_error(test, forecast))
print(f'ARIMA MAE: {mae:.2f}')
print(f'ARIMA RMSE: {rmse:.2f}')

# Plot
plt.figure(figsize=(12, 6))
plt.plot(train[-60:], label='Training')
plt.plot(test, label='Actual')
plt.plot(test.index, forecast, label='ARIMA Forecast')
plt.legend()
plt.title('ARIMA Forecast')
plt.show()`
      },
      {
        phase: 'Phase 3: Prophet Model',
        duration: '2-3 days',
        tasks: [
          'Prepare data for Prophet',
          'Add holidays and seasonality',
          'Train and tune Prophet',
          'Compare with ARIMA'
        ],
        code: `from prophet import Prophet

# Prepare data for Prophet
prophet_df = df.reset_index()
prophet_df.columns = ['ds', 'y']

# Create and fit model
model = Prophet(
    yearly_seasonality=True,
    weekly_seasonality=True,
    daily_seasonality=False
)
model.fit(prophet_df[:-30])

# Make predictions
future = model.make_future_dataframe(periods=30)
forecast = model.predict(future)

# Evaluate
prophet_pred = forecast['yhat'][-30:].values
mae = mean_absolute_error(test, prophet_pred)
print(f'Prophet MAE: {mae:.2f}')

# Plot components
model.plot_components(forecast)
plt.show()`
      },
      {
        phase: 'Phase 4: LSTM Model',
        duration: '4-5 days',
        tasks: [
          'Prepare sequences for LSTM',
          'Build and train LSTM model',
          'Generate forecasts',
          'Compare all models'
        ],
        code: `import tensorflow as tf
from sklearn.preprocessing import MinMaxScaler

# Prepare data
scaler = MinMaxScaler()
scaled_data = scaler.fit_transform(df['sales'].values.reshape(-1, 1))

# Create sequences
def create_sequences(data, seq_length):
    X, y = [], []
    for i in range(len(data) - seq_length):
        X.append(data[i:i+seq_length])
        y.append(data[i+seq_length])
    return np.array(X), np.array(y)

seq_length = 30
X, y = create_sequences(scaled_data, seq_length)

# Split
X_train, X_test = X[:-30], X[-30:]
y_train, y_test = y[:-30], y[-30:]

# Build LSTM
model = tf.keras.Sequential([
    tf.keras.layers.LSTM(50, return_sequences=True, input_shape=(seq_length, 1)),
    tf.keras.layers.LSTM(50),
    tf.keras.layers.Dense(1)
])

model.compile(optimizer='adam', loss='mse')
model.fit(X_train, y_train, epochs=50, batch_size=32, validation_split=0.1, verbose=1)

# Predict
predictions = model.predict(X_test)
predictions = scaler.inverse_transform(predictions)
actual = scaler.inverse_transform(y_test)

mae = mean_absolute_error(actual, predictions)
print(f'LSTM MAE: {mae:.2f}')`
      },
      {
        phase: 'Phase 5: Dashboard',
        duration: '3-4 days',
        tasks: [
          'Build Streamlit dashboard',
          'Add model selection',
          'Implement forecast controls',
          'Visualize comparisons'
        ],
        code: `# streamlit_app.py
import streamlit as st
import pandas as pd
import plotly.express as px

st.title('📈 Time Series Forecasting Dashboard')

# Sidebar
model_choice = st.sidebar.selectbox(
    'Select Model',
    ['ARIMA', 'Prophet', 'LSTM', 'Ensemble']
)

forecast_days = st.sidebar.slider('Forecast Days', 7, 90, 30)

# Load data and model
# ... (load based on selection)

# Display metrics
col1, col2, col3 = st.columns(3)
col1.metric('MAE', f'{mae:.2f}')
col2.metric('RMSE', f'{rmse:.2f}')
col3.metric('MAPE', f'{mape:.2f}%')

# Forecast chart
fig = px.line(forecast_df, x='date', y=['actual', 'predicted'])
st.plotly_chart(fig, use_container_width=True)

# Run: streamlit run streamlit_app.py`
      }
    ],
    deliverables: [
      'Time series analysis notebook',
      'ARIMA, Prophet, LSTM models',
      'Model comparison report',
      'Streamlit dashboard',
      'Deployment instructions'
    ],
    resources: [
      { title: 'Kaggle Competition', url: 'https://www.kaggle.com/c/store-sales-time-series-forecasting' },
      { title: 'Prophet Documentation', url: 'https://facebook.github.io/prophet/' },
      { title: 'Time Series with TensorFlow', url: 'https://www.tensorflow.org/tutorials/structured_data/time_series' }
    ]
  }
];

// Additional quick project ideas
export const quickProjects = [
  {
    id: 'quick-01',
    title: 'Credit Card Fraud Detection',
    difficulty: 'intermediate',
    duration: '1 week',
    skills: ['Anomaly Detection', 'Imbalanced Learning'],
    dataset: 'Kaggle Credit Card Fraud'
  },
  {
    id: 'quick-02',
    title: 'Image Classification with CNN',
    difficulty: 'beginner',
    duration: '1 week',
    skills: ['CNN', 'Transfer Learning'],
    dataset: 'CIFAR-10 or Custom'
  },
  {
    id: 'quick-03',
    title: 'Chatbot with Rasa',
    difficulty: 'intermediate',
    duration: '2 weeks',
    skills: ['NLU', 'Dialog Management'],
    dataset: 'Custom intents'
  },
  {
    id: 'quick-04',
    title: 'Stock Price Prediction',
    difficulty: 'intermediate',
    duration: '1-2 weeks',
    skills: ['Time Series', 'LSTM'],
    dataset: 'Yahoo Finance API'
  },
  {
    id: 'quick-05',
    title: 'Face Recognition System',
    difficulty: 'advanced',
    duration: '2-3 weeks',
    skills: ['Face Detection', 'Embeddings'],
    dataset: 'LFW or Custom'
  }
];

export default capstoneProjects;
