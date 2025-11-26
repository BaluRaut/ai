// Professional ML Practices - Project Structure, Deployment, AutoML, Industry Applications

const professionalPractices = {
  id: 'professional-practices',
  title: 'Professional ML Practices',
  description: 'Industry-ready skills: Project structure, deployment, AutoML, and real-world applications',
  level: 'Professional',
  estimatedHours: 20,
  topics: [
    {
      id: 1,
      title: 'Structuring ML Projects',
      description: 'Best practices for organizing and managing ML projects',
      
      overview: `A well-structured ML project is the difference between a successful production system and a maintenance nightmare. This covers error analysis, bias-variance tradeoffs, and end-to-end project workflow.

Key principles: Start simple (baseline first), iterate quickly, measure everything, and automate repetitive tasks. The ML workflow is cyclical: data → train → evaluate → analyze errors → improve → repeat.

Common mistakes: spending too long on modeling before understanding data, not having clear success metrics, ignoring edge cases, and poor experiment tracking. Following a structured approach saves weeks of debugging later.`,

      keyPoints: [
        'Start with a simple baseline before complex models',
        'Define clear success metrics upfront',
        'Error analysis reveals where to focus improvement efforts',
        'Bias-variance tradeoff guides model complexity decisions',
        'Version everything: data, code, models, experiments'
      ],

      useCases: [
        { title: 'Error Analysis', description: 'Systematically analyze model mistakes', example: 'Find that model fails on blurry images → add data augmentation' },
        { title: 'Experiment Tracking', description: 'Log all experiments systematically', example: 'MLflow tracks params, metrics, artifacts for every run' },
        { title: 'A/B Testing', description: 'Compare model versions in production', example: 'Roll out new model to 10% users, compare metrics' },
        { title: 'Project Templates', description: 'Standardized project structure', example: 'Cookiecutter Data Science template for consistency' }
      ],

      codeExamples: [
        {
          title: 'ML Project Structure Template',
          code: `# Recommended ML Project Structure
"""
my_ml_project/
├── README.md                 # Project overview, setup instructions
├── requirements.txt          # Python dependencies
├── setup.py                  # Package installation
├── .gitignore               # Git ignore patterns
│
├── config/
│   ├── config.yaml          # Hyperparameters, paths
│   └── logging.yaml         # Logging configuration
│
├── data/
│   ├── raw/                 # Original, immutable data
│   ├── processed/           # Cleaned, transformed data
│   ├── external/            # Third-party data
│   └── interim/             # Intermediate transformations
│
├── notebooks/
│   ├── 01_eda.ipynb         # Exploratory data analysis
│   ├── 02_baseline.ipynb    # Simple baseline model
│   └── 03_experiments.ipynb # Model experiments
│
├── src/
│   ├── __init__.py
│   ├── data/
│   │   ├── load_data.py     # Data loading utilities
│   │   └── preprocess.py    # Data preprocessing
│   ├── features/
│   │   └── build_features.py # Feature engineering
│   ├── models/
│   │   ├── train.py         # Training scripts
│   │   ├── predict.py       # Inference scripts
│   │   └── evaluate.py      # Evaluation metrics
│   └── utils/
│       └── helpers.py       # Utility functions
│
├── models/                   # Saved model artifacts
│   └── model_v1.pkl
│
├── reports/
│   ├── figures/             # Generated graphics
│   └── metrics/             # Evaluation results
│
└── tests/
    ├── test_data.py         # Data tests
    └── test_model.py        # Model tests
"""

# Example: config.yaml
config_example = """
# config/config.yaml
data:
  raw_path: data/raw/dataset.csv
  processed_path: data/processed/clean_dataset.csv
  test_size: 0.2
  random_state: 42

model:
  name: random_forest
  params:
    n_estimators: 100
    max_depth: 10
    min_samples_split: 5

training:
  epochs: 100
  batch_size: 32
  learning_rate: 0.001

experiment:
  name: baseline_rf
  tags:
    - baseline
    - random_forest
"""

print("📁 ML Project Structure Best Practices:")
print("1. Keep raw data immutable")
print("2. Separate config from code")
print("3. Use notebooks for exploration, .py for production")
print("4. Version control everything (Git)")
print("5. Write tests for data and models")`,
          language: 'python'
        },
        {
          title: 'Error Analysis Framework',
          code: `import pandas as pd
import numpy as np
from sklearn.metrics import classification_report, confusion_matrix

def error_analysis(y_true, y_pred, X, feature_names=None):
    """
    Systematic error analysis for classification models.
    
    Returns insights on where the model fails.
    """
    # Basic metrics
    print("=" * 50)
    print("CLASSIFICATION REPORT")
    print("=" * 50)
    print(classification_report(y_true, y_pred))
    
    # Find misclassified samples
    errors = y_true != y_pred
    error_indices = np.where(errors)[0]
    
    print(f"\\n📊 Error Summary:")
    print(f"Total samples: {len(y_true)}")
    print(f"Correct: {sum(~errors)} ({sum(~errors)/len(y_true):.1%})")
    print(f"Errors: {sum(errors)} ({sum(errors)/len(y_true):.1%})")
    
    # Analyze error patterns
    print(f"\\n🔍 Error Pattern Analysis:")
    
    # Create error dataframe
    if feature_names is None:
        feature_names = [f'feature_{i}' for i in range(X.shape[1])]
    
    error_df = pd.DataFrame(X[error_indices], columns=feature_names)
    error_df['true_label'] = y_true[error_indices]
    error_df['pred_label'] = y_pred[error_indices]
    
    # Confusion matrix for errors
    print("\\nConfusion Matrix (errors only):")
    unique_labels = np.unique(np.concatenate([y_true, y_pred]))
    for true_label in unique_labels:
        for pred_label in unique_labels:
            if true_label != pred_label:
                count = sum((y_true[error_indices] == true_label) & 
                           (y_pred[error_indices] == pred_label))
                if count > 0:
                    print(f"  True={true_label} → Pred={pred_label}: {count} errors")
    
    # Feature statistics for errors vs correct
    print("\\n📈 Feature Statistics (Errors vs Correct):")
    correct_df = pd.DataFrame(X[~errors], columns=feature_names)
    
    for feature in feature_names[:5]:  # Top 5 features
        error_mean = error_df[feature].mean()
        correct_mean = correct_df[feature].mean()
        diff = error_mean - correct_mean
        if abs(diff) > 0.1 * correct_mean:  # Significant difference
            print(f"  {feature}: Error mean={error_mean:.2f}, Correct mean={correct_mean:.2f} (diff={diff:+.2f})")
    
    return error_df

# Example usage
np.random.seed(42)
X = np.random.randn(1000, 5)
y_true = (X[:, 0] + X[:, 1] > 0).astype(int)
y_pred = y_true.copy()
# Introduce some errors
y_pred[np.random.choice(1000, 100, replace=False)] = 1 - y_pred[np.random.choice(1000, 100, replace=False)]

error_df = error_analysis(y_true, y_pred, X, 
                          feature_names=['age', 'income', 'score', 'tenure', 'balance'])

print("\\n💡 Next Steps:")
print("1. Examine error samples manually")
print("2. Look for patterns in features")
print("3. Add more training data for error cases")
print("4. Engineer features to capture error patterns")`,
          language: 'python'
        }
      ],

      dos: [
        'Start with a simple baseline (logistic regression, mean prediction)',
        'Track all experiments with MLflow or Weights & Biases',
        'Perform error analysis after each major iteration',
        'Use configuration files instead of hardcoded values'
      ],

      donts: [
        'Don\'t skip the EDA phase - understand your data first',
        'Don\'t optimize too early - get the pipeline working first',
        'Don\'t ignore test set until the end - validate regularly',
        'Don\'t forget to version your data alongside code'
      ],

      quiz: [
        {
          question: 'What should be your first step when starting an ML project?',
          options: ['Train a complex neural network', 'Build a simple baseline model', 'Hyperparameter tuning', 'Deploy to production'],
          correctAnswer: 1,
          explanation: 'A simple baseline model (like logistic regression or mean prediction) gives you a reference point and helps you understand if more complex models are worth the effort.'
        },
        {
          question: 'What does error analysis help you understand?',
          options: ['How fast the model trains', 'Where to focus improvement efforts', 'How much memory the model uses', 'The model\'s carbon footprint'],
          correctAnswer: 1,
          explanation: 'Error analysis systematically examines model mistakes to identify patterns, revealing which types of samples the model struggles with and guiding targeted improvements.'
        }
      ]
    },

    {
      id: 2,
      title: 'Model Deployment & Serving',
      description: 'Deploy ML models as APIs and web services',
      
      overview: `Deployment bridges the gap between Jupyter notebooks and production systems. A trained model is useless until it can serve predictions to real users. This covers containerization with Docker, REST APIs with FastAPI, and deployment strategies.

Key concepts: Model serialization (saving models to disk), API endpoints for predictions, containerization for portability, and deployment platforms. The goal is to make your model accessible, scalable, and maintainable.

Production considerations: latency requirements, throughput needs, model versioning, monitoring, and graceful updates. A well-deployed model includes health checks, logging, and the ability to rollback to previous versions.`,

      keyPoints: [
        'Serialize models with joblib, pickle, or ONNX',
        'FastAPI creates high-performance REST APIs',
        'Docker containers ensure consistent deployment',
        'Model versioning allows rollback and A/B testing',
        'Monitoring tracks prediction quality over time'
      ],

      useCases: [
        { title: 'REST API', description: 'Serve predictions via HTTP', example: 'POST /predict with JSON → get prediction response' },
        { title: 'Batch Inference', description: 'Process large datasets', example: 'Nightly job scoring millions of customers' },
        { title: 'Edge Deployment', description: 'Run models on devices', example: 'TensorFlow Lite on mobile phones' },
        { title: 'Streaming', description: 'Real-time predictions', example: 'Fraud detection on transaction stream' }
      ],

      codeExamples: [
        {
          title: 'FastAPI ML Model Server',
          code: `# Save as app.py
# Run: uvicorn app:app --reload

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np
from typing import List

# Initialize FastAPI app
app = FastAPI(
    title="ML Model API",
    description="Production-ready ML model serving",
    version="1.0.0"
)

# Load model at startup
# model = joblib.load("model.pkl")

# For demo, create a simple model
class SimpleModel:
    def predict(self, X):
        return (np.array(X).sum(axis=1) > 0).astype(int).tolist()
    def predict_proba(self, X):
        probs = 1 / (1 + np.exp(-np.array(X).sum(axis=1)))
        return [[1-p, p] for p in probs]

model = SimpleModel()

# Request/Response schemas
class PredictionRequest(BaseModel):
    features: List[List[float]]
    
    class Config:
        json_schema_extra = {
            "example": {
                "features": [[1.0, 2.0, 3.0], [-1.0, -2.0, -3.0]]
            }
        }

class PredictionResponse(BaseModel):
    predictions: List[int]
    probabilities: List[List[float]]
    model_version: str

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy", "model_loaded": True}

# Prediction endpoint
@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    try:
        features = request.features
        
        # Validate input
        if not features:
            raise HTTPException(status_code=400, detail="No features provided")
        
        # Make predictions
        predictions = model.predict(features)
        probabilities = model.predict_proba(features)
        
        return PredictionResponse(
            predictions=predictions,
            probabilities=probabilities,
            model_version="1.0.0"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Model info endpoint
@app.get("/model/info")
async def model_info():
    return {
        "model_type": "SimpleClassifier",
        "version": "1.0.0",
        "features_expected": 3,
        "classes": [0, 1]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

# Test with: curl -X POST "http://localhost:8000/predict" \\
#   -H "Content-Type: application/json" \\
#   -d '{"features": [[1, 2, 3], [-1, -2, -3]]}'`,
          language: 'python'
        },
        {
          title: 'Dockerfile for ML Model',
          code: `# Dockerfile for ML Model Deployment

# Use official Python image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    build-essential \\
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first (for caching)
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY app.py .
COPY model.pkl .

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \\
    CMD curl -f http://localhost:8000/health || exit 1

# Run the application
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]

# Build: docker build -t ml-model-api .
# Run: docker run -p 8000:8000 ml-model-api

# requirements.txt should contain:
# fastapi==0.104.0
# uvicorn==0.24.0
# pydantic==2.5.0
# joblib==1.3.2
# numpy==1.24.0
# scikit-learn==1.3.0`,
          language: 'dockerfile'
        }
      ],

      dos: [
        'Use Docker for reproducible deployments',
        'Add health check endpoints for load balancers',
        'Version your models and APIs together',
        'Log predictions for monitoring and debugging'
      ],

      donts: [
        'Don\'t load models on every request - load at startup',
        'Don\'t expose internal errors to users - use proper error handling',
        'Don\'t skip input validation - sanitize all inputs',
        'Don\'t deploy without monitoring and alerting'
      ],

      quiz: [
        {
          question: 'Why should ML models be loaded at application startup, not per request?',
          options: ['It\'s more secure', 'Loading models is slow and would cause high latency', 'It uses less disk space', 'It\'s required by FastAPI'],
          correctAnswer: 1,
          explanation: 'Loading ML models from disk is slow (can take seconds). Loading once at startup means requests only perform fast inference, achieving low latency.'
        },
        {
          question: 'What is the purpose of a health check endpoint?',
          options: ['To train the model', 'To allow load balancers to verify the service is running', 'To store user data', 'To encrypt predictions'],
          correctAnswer: 1,
          explanation: 'Health check endpoints allow load balancers and orchestration systems (like Kubernetes) to verify the service is running correctly and route traffic appropriately.'
        }
      ]
    },

    {
      id: 3,
      title: 'AutoML & No-Code AI',
      description: 'Automated machine learning for rapid prototyping',
      
      overview: `AutoML automates the tedious parts of ML: feature engineering, model selection, and hyperparameter tuning. It's not about replacing ML engineers, but about accelerating prototyping and providing strong baselines.

Major platforms: Google AutoML (Vertex AI), Azure ML, Amazon SageMaker Autopilot, H2O AutoML, and auto-sklearn. These tools can build competitive models in hours instead of weeks, democratizing ML for domain experts who aren't ML specialists.

Use cases: rapid prototyping, establishing baselines, empowering domain experts, and handling repetitive ML tasks. AutoML results often serve as benchmarks that custom models should beat to justify additional complexity.`,

      keyPoints: [
        'Automates model selection and hyperparameter tuning',
        'Provides strong baselines for comparison',
        'Democratizes ML for non-specialists',
        'Major platforms: Google, Azure, AWS, H2O',
        'Not a replacement for ML expertise, but an accelerator'
      ],

      useCases: [
        { title: 'Rapid Prototyping', description: 'Quick proof-of-concept models', example: 'Test if ML can solve the problem before investing in custom development' },
        { title: 'Baseline Models', description: 'Benchmark for custom solutions', example: 'AutoML achieves 85% accuracy - can you beat it?' },
        { title: 'Domain Expert Empowerment', description: 'Enable non-ML users', example: 'Marketing team builds churn prediction model' },
        { title: 'Feature Engineering', description: 'Automatic feature discovery', example: 'AutoML finds useful feature combinations' }
      ],

      codeExamples: [
        {
          title: 'H2O AutoML Example',
          code: `# H2O AutoML - Open Source AutoML
# Install: pip install h2o

import h2o
from h2o.automl import H2OAutoML
import pandas as pd
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split

# Initialize H2O
h2o.init()

# Load sample data
data = load_breast_cancer()
df = pd.DataFrame(data.data, columns=data.feature_names)
df['target'] = data.target

# Convert to H2O Frame
hf = h2o.H2OFrame(df)

# Specify target and features
target = 'target'
features = [col for col in hf.columns if col != target]

# Convert target to factor (for classification)
hf[target] = hf[target].asfactor()

# Split data
train, test = hf.split_frame(ratios=[0.8], seed=42)

# Run AutoML
aml = H2OAutoML(
    max_models=10,           # Try 10 different models
    max_runtime_secs=300,    # 5 minutes max
    seed=42,
    sort_metric='AUC'        # Optimize for AUC
)

# Train
print("🚀 Starting AutoML training...")
aml.train(x=features, y=target, training_frame=train)

# View leaderboard
print("\\n📊 Model Leaderboard:")
lb = aml.leaderboard
print(lb.head(10))

# Best model performance
best_model = aml.leader
print(f"\\n🏆 Best Model: {best_model.model_id}")

# Evaluate on test set
perf = best_model.model_performance(test)
print(f"\\n📈 Test Set Performance:")
print(f"AUC: {perf.auc():.4f}")
print(f"Accuracy: {perf.accuracy()[0][1]:.4f}")

# Make predictions
predictions = best_model.predict(test)
print(f"\\n🔮 Sample Predictions:")
print(predictions.head())

# Save best model
model_path = h2o.save_model(best_model, path="./models", force=True)
print(f"\\n💾 Model saved to: {model_path}")

# Shutdown H2O
# h2o.shutdown()

print("\\n✅ AutoML Complete!")
print("Next steps:")
print("1. Analyze feature importance")
print("2. Examine confusion matrix")  
print("3. Try longer runtime for potentially better models")
print("4. Use best model as baseline for custom development")`,
          language: 'python'
        },
        {
          title: 'Auto-sklearn Example',
          code: `# Auto-sklearn - Automated Machine Learning
# Install: pip install auto-sklearn

import autosklearn.classification
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Load data
X, y = load_digits(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(f"Training samples: {len(X_train)}")
print(f"Test samples: {len(X_test)}")
print(f"Features: {X_train.shape[1]}")
print(f"Classes: {len(set(y))}")

# Configure AutoML
automl = autosklearn.classification.AutoSklearnClassifier(
    time_left_for_this_task=300,  # 5 minutes total
    per_run_time_limit=30,        # 30 seconds per model
    n_jobs=-1,                    # Use all cores
    memory_limit=4096,            # 4GB memory limit
    seed=42
)

# Train
print("\\n🚀 Starting Auto-sklearn training...")
automl.fit(X_train, y_train)

# Results
print("\\n📊 Training Complete!")
print("\\n🏆 Best Model(s):")
print(automl.show_models())

# Get statistics
print("\\n📈 AutoML Statistics:")
print(f"Models evaluated: {len(automl.get_models_with_weights())}")
print(automl.sprint_statistics())

# Evaluate
y_pred = automl.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print(f"\\n🎯 Test Accuracy: {accuracy:.4f}")
print("\\nClassification Report:")
print(classification_report(y_test, y_pred))

# Feature importance (if available)
# Some models provide feature importance
print("\\n💡 Pro Tips:")
print("1. Increase time_left_for_this_task for potentially better models")
print("2. Use refit() with more ensemble size for production")
print("3. Export final model with pickle for deployment")`,
          language: 'python'
        }
      ],

      dos: [
        'Use AutoML for rapid baseline establishment',
        'Allocate enough time (1-24 hours) for thorough search',
        'Compare AutoML results to custom models',
        'Use AutoML for feature engineering insights'
      ],

      donts: [
        'Don\'t blindly trust AutoML - validate on holdout data',
        'Don\'t skip understanding what model was selected',
        'Don\'t use AutoML when you need model interpretability',
        'Don\'t forget that AutoML models can be large and slow'
      ],

      quiz: [
        {
          question: 'What is the main benefit of AutoML?',
          options: ['Always produces the best model', 'Automates model selection and hyperparameter tuning', 'Eliminates the need for data scientists', 'Makes models fully interpretable'],
          correctAnswer: 1,
          explanation: 'AutoML automates the tedious process of trying different models and hyperparameters, saving time and often producing strong baselines, but it doesn\'t replace the need for ML expertise.'
        },
        {
          question: 'When should AutoML results be used?',
          options: ['Never - custom models are always better', 'As baselines and for rapid prototyping', 'Only for production deployments', 'Only when you have limited data'],
          correctAnswer: 1,
          explanation: 'AutoML excels at rapid prototyping and establishing baselines. The results help you understand if a problem is solvable with ML and set a benchmark for custom model development.'
        }
      ]
    },

    {
      id: 4,
      title: 'AI in Healthcare',
      description: 'Medical imaging, drug discovery, and clinical applications',
      
      overview: `Healthcare AI is transforming diagnosis, treatment, and drug discovery. From detecting cancer in medical images to predicting patient outcomes, AI augments healthcare professionals' capabilities and improves patient care.

Key applications: Medical imaging (X-rays, CT, MRI analysis), electronic health records analysis, drug discovery, clinical trial optimization, and personalized treatment recommendations. Regulatory considerations (FDA, HIPAA) are critical in healthcare AI.

Challenges include data privacy, model interpretability (doctors need to understand predictions), regulatory approval, and integration with existing healthcare systems. Success requires collaboration between AI engineers, clinicians, and regulatory experts.`,

      keyPoints: [
        'Medical imaging: detect diseases in X-rays, CT, MRI scans',
        'Drug discovery: predict molecule properties, accelerate R&D',
        'Clinical predictions: readmission risk, treatment outcomes',
        'Regulatory compliance: FDA approval, HIPAA for data privacy',
        'Interpretability is crucial - doctors must understand predictions'
      ],

      useCases: [
        { title: 'Radiology AI', description: 'Detect tumors in medical images', example: 'AI flags suspicious areas in mammograms for radiologist review' },
        { title: 'Drug Discovery', description: 'Predict drug-target interactions', example: 'AI screens millions of compounds in days vs years' },
        { title: 'Clinical Decision Support', description: 'Risk prediction for patients', example: 'Predict 30-day readmission risk to prioritize follow-ups' },
        { title: 'Medical Chatbots', description: 'Symptom checking and triage', example: 'Patients describe symptoms, AI suggests urgency level' }
      ],

      codeExamples: [
        {
          title: 'Medical Image Classification (Pneumonia Detection)',
          code: `# Medical Image Classification Example
# Detecting pneumonia from chest X-rays

import numpy as np
# import tensorflow as tf
# from tensorflow.keras import layers, models
# from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Note: This is a simplified example. Real medical AI requires:
# 1. Large labeled datasets (thousands of images)
# 2. Expert radiologist annotations
# 3. Rigorous validation protocols
# 4. Regulatory approval

# Simulated example structure
print("🏥 Medical Image Classification Pipeline")
print("=" * 50)

# 1. Data Preparation
print("\\n📁 Step 1: Data Preparation")
print("- Load chest X-ray images (CheXpert, NIH ChestX-ray)")
print("- Split: 70% train, 15% validation, 15% test")
print("- Apply data augmentation (rotation, flip, zoom)")

# 2. Model Architecture
print("\\n🧠 Step 2: Model Architecture")
print("- Use pretrained model (EfficientNet, DenseNet)")
print("- Add classification head for pneumonia detection")
print("- Binary classification: Normal vs Pneumonia")

model_architecture = """
# Example using TensorFlow/Keras
base_model = tf.keras.applications.EfficientNetB0(
    weights='imagenet',
    include_top=False,
    input_shape=(224, 224, 3)
)

model = models.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dropout(0.3),
    layers.Dense(256, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(1, activation='sigmoid')  # Binary classification
])
"""
print(model_architecture)

# 3. Training Considerations
print("\\n🎯 Step 3: Training Considerations")
print("- Class imbalance: Use weighted loss or oversampling")
print("- Medical sensitivity: Optimize for recall (minimize false negatives)")
print("- Learning rate: Use warm-up and cosine decay")

# 4. Evaluation Metrics
print("\\n📊 Step 4: Evaluation Metrics (Medical-specific)")
metrics = {
    'Sensitivity (Recall)': 'Catch all pneumonia cases (minimize false negatives)',
    'Specificity': 'Correctly identify healthy cases',
    'AUC-ROC': 'Overall discriminative ability',
    'PPV (Precision)': 'When AI says pneumonia, how often correct?',
    'NPV': 'When AI says normal, how often correct?'
}
for metric, description in metrics.items():
    print(f"  - {metric}: {description}")

# 5. Deployment Considerations
print("\\n🚀 Step 5: Deployment Considerations")
print("- FDA approval required for diagnostic use")
print("- HIPAA compliance for patient data")
print("- Integration with PACS (radiology systems)")
print("- Explain predictions to radiologists (GradCAM)")
print("- Human-in-the-loop: AI assists, doctor decides")

print("\\n⚠️ Important Disclaimer:")
print("Medical AI should ASSIST, not replace, healthcare professionals.")
print("All predictions require clinical validation.")`,
          language: 'python'
        }
      ],

      dos: [
        'Work closely with clinical domain experts',
        'Prioritize model interpretability for clinician trust',
        'Use established medical datasets (CheXpert, MIMIC)',
        'Design for human-AI collaboration, not replacement'
      ],

      donts: [
        'Don\'t deploy without proper regulatory approval',
        'Don\'t train on biased datasets (demographic imbalance)',
        'Don\'t ignore edge cases - they matter in healthcare',
        'Don\'t skip clinical validation with real patients'
      ],

      quiz: [
        {
          question: 'Why is interpretability especially important in healthcare AI?',
          options: ['It makes models faster', 'Doctors need to understand and trust AI recommendations', 'It reduces model size', 'It\'s not important in healthcare'],
          correctAnswer: 1,
          explanation: 'Healthcare decisions are life-critical. Doctors need to understand why an AI makes a recommendation to trust it, validate it against their clinical judgment, and explain it to patients.'
        },
        {
          question: 'What metric is most critical for disease detection AI?',
          options: ['Accuracy', 'Sensitivity (Recall)', 'Inference speed', 'Model size'],
          correctAnswer: 1,
          explanation: 'Sensitivity (recall) measures how many actual disease cases are correctly detected. Missing a disease (false negative) can be life-threatening, so high sensitivity is critical even if it means more false positives that doctors can rule out.'
        }
      ]
    },

    {
      id: 5,
      title: 'AI in Finance',
      description: 'Fraud detection, algorithmic trading, and risk assessment',
      
      overview: `Financial AI powers fraud detection, algorithmic trading, credit scoring, and risk management. The finance industry was an early adopter of ML due to the quantitative nature of financial data and the high value of accurate predictions.

Key applications: Transaction fraud detection (real-time), credit risk modeling, algorithmic trading, portfolio optimization, and regulatory compliance (AML). Challenges include extreme class imbalance (fraud is rare), adversarial attacks (fraudsters adapt), and regulatory requirements for explainability.

Success factors: Real-time inference (milliseconds for trading), interpretable models for regulatory compliance, handling concept drift (markets change), and robust backtesting. Financial AI systems must be highly reliable and auditable.`,

      keyPoints: [
        'Fraud detection: Real-time transaction scoring',
        'Credit scoring: Predict default probability',
        'Algorithmic trading: Automated buy/sell decisions',
        'Risk management: Portfolio and market risk assessment',
        'Explainability required for regulatory compliance'
      ],

      useCases: [
        { title: 'Fraud Detection', description: 'Score transactions in real-time', example: 'Block suspicious card transactions instantly' },
        { title: 'Credit Scoring', description: 'Predict loan default risk', example: 'Approve/deny loans with risk-based pricing' },
        { title: 'Algorithmic Trading', description: 'Automated trading strategies', example: 'Execute trades based on market signals' },
        { title: 'AML Compliance', description: 'Detect money laundering', example: 'Flag suspicious transaction patterns' }
      ],

      codeExamples: [
        {
          title: 'Credit Card Fraud Detection',
          code: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, precision_recall_curve
from imblearn.over_sampling import SMOTE  # For class imbalance

# Simulated credit card transaction data
np.random.seed(42)
n_normal = 10000
n_fraud = 100  # 1% fraud rate (realistic)

# Generate normal transactions
normal_data = {
    'amount': np.random.exponential(50, n_normal),
    'hour': np.random.randint(0, 24, n_normal),
    'distance_from_home': np.random.exponential(10, n_normal),
    'transaction_count_24h': np.random.poisson(3, n_normal),
    'is_fraud': np.zeros(n_normal)
}

# Generate fraudulent transactions (different patterns)
fraud_data = {
    'amount': np.random.exponential(200, n_fraud),  # Higher amounts
    'hour': np.random.choice([2, 3, 4, 5], n_fraud),  # Odd hours
    'distance_from_home': np.random.exponential(100, n_fraud),  # Far from home
    'transaction_count_24h': np.random.poisson(8, n_fraud),  # More transactions
    'is_fraud': np.ones(n_fraud)
}

# Combine
df = pd.concat([pd.DataFrame(normal_data), pd.DataFrame(fraud_data)]).sample(frac=1)
print(f"Dataset: {len(df)} transactions, {df['is_fraud'].sum():.0f} fraudulent ({df['is_fraud'].mean():.1%})")

# Prepare features
X = df.drop('is_fraud', axis=1)
y = df['is_fraud']

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y)

# Handle class imbalance with SMOTE
print("\\n⚖️ Handling class imbalance with SMOTE...")
smote = SMOTE(random_state=42)
X_train_balanced, y_train_balanced = smote.fit_resample(X_train, y_train)
print(f"After SMOTE: {len(y_train_balanced)} samples, {y_train_balanced.sum():.0f} fraud ({y_train_balanced.mean():.1%})")

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train_balanced)
X_test_scaled = scaler.transform(X_test)

# Train model
print("\\n🎯 Training Random Forest classifier...")
model = RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42)
model.fit(X_train_scaled, y_train_balanced)

# Predictions with probability threshold tuning
y_prob = model.predict_proba(X_test_scaled)[:, 1]

# Find optimal threshold for fraud detection (prioritize recall)
precisions, recalls, thresholds = precision_recall_curve(y_test, y_prob)

# Choose threshold for 90% recall
target_recall = 0.90
idx = np.argmin(np.abs(recalls - target_recall))
optimal_threshold = thresholds[idx] if idx < len(thresholds) else 0.5
print(f"\\nOptimal threshold for {target_recall:.0%} recall: {optimal_threshold:.3f}")

# Apply optimal threshold
y_pred = (y_prob >= optimal_threshold).astype(int)

# Evaluation
print("\\n📊 Performance Report:")
print(classification_report(y_test, y_pred, target_names=['Normal', 'Fraud']))

# Feature importance
print("\\n🔍 Feature Importance:")
for feature, importance in sorted(zip(X.columns, model.feature_importances_), 
                                   key=lambda x: x[1], reverse=True):
    print(f"  {feature}: {importance:.3f}")

# Business metrics
fraud_caught = y_pred[y_test == 1].sum()
total_fraud = y_test.sum()
false_alarms = y_pred[(y_test == 0) & (y_pred == 1)].sum()

print(f"\\n💰 Business Metrics:")
print(f"  Fraud caught: {fraud_caught}/{total_fraud:.0f} ({fraud_caught/total_fraud:.1%})")
print(f"  False alarms: {false_alarms} (customers incorrectly flagged)")`,
          language: 'python'
        }
      ],

      dos: [
        'Use SMOTE or class weights for imbalanced fraud data',
        'Optimize for recall (catch fraud) over precision',
        'Implement real-time scoring for transaction decisions',
        'Build interpretable models for regulatory audits'
      ],

      donts: [
        'Don\'t use accuracy as your metric (misleading with imbalance)',
        'Don\'t ignore concept drift (fraud patterns evolve)',
        'Don\'t deploy without backtesting on historical data',
        'Don\'t forget to log all predictions for auditing'
      ],

      quiz: [
        {
          question: 'Why is accuracy a misleading metric for fraud detection?',
          options: ['It\'s too slow to compute', 'Fraud is rare, so predicting "no fraud" achieves high accuracy', 'It requires too much data', 'Fraud is too common'],
          correctAnswer: 1,
          explanation: 'With 1% fraud rate, a model that always predicts "no fraud" achieves 99% accuracy but catches zero fraud. Precision, recall, and AUC-PR are more meaningful metrics for imbalanced problems.'
        },
        {
          question: 'What is concept drift in fraud detection?',
          options: ['When the model drifts to a different server', 'When fraud patterns change over time, reducing model effectiveness', 'When data is lost', 'When training takes too long'],
          correctAnswer: 1,
          explanation: 'Fraudsters constantly adapt their techniques. A model trained on past fraud patterns may become less effective as new fraud methods emerge, requiring regular retraining and monitoring.'
        }
      ]
    }
  ]
};

export { professionalPractices };
export default professionalPractices;
