export const scikitLearnAdvanced = {
  id: 'scikit-learn-advanced',
  title: 'Scikit-learn Advanced',
  category: 'Data Science & AI',
  difficulty: 'advanced',
  description: 'Advanced ML techniques: ensemble methods, feature engineering, and production workflows',
  
  content: {
    overview: `Master advanced machine learning techniques used in production systems. Learn ensemble methods that win Kaggle competitions, feature engineering that makes or breaks models, and real-world workflows from data to deployment.

**What You'll Learn:**

- Ensemble methods (Bagging, Boosting, Stacking)
- Advanced cross-validation strategies
- Feature engineering and transformation pipelines
- Handling real-world data challenges (missing values, outliers, imbalance)
- End-to-end production ML workflows

**Why These Skills Matter:**

Ensemble methods consistently outperform single models. Feature engineering often improves accuracy more than algorithm choice. Production ML requires handling messy real-world data and building robust, maintainable pipelines.`,

    keyPoints: [
      'Ensemble methods combine multiple models for better performance',
      'Feature engineering creates informative features from raw data',
      'Different CV strategies for different data types (time series, groups)',
      'Real-world data has missing values, outliers, and class imbalance',
      'Production ML requires robust pipelines and monitoring',
      'Gradient Boosting usually wins on structured data',
      'Polynomial features capture non-linear relationships',
      'SMOTE and class_weight handle imbalanced datasets',
      'End-to-end workflows combine all ML best practices',
      'Model deployment includes preprocessing, prediction, and monitoring'
    ],

    useCases: [
      {
        title: 'Kaggle Competitions',
        description: 'Ensemble methods and feature engineering win competitions.',
        example: 'Gradient Boosting + feature engineering achieves top 1% in house price prediction'
      },
      {
        title: 'Production ML Systems',
        description: 'Complete workflows from raw data to deployed models.',
        example: 'Churn prediction system processes 1M customers daily with 85% accuracy'
      },
      {
        title: 'Financial Forecasting',
        description: 'Time series CV and robust preprocessing for stock/sales prediction.',
        example: 'Retail chain forecasts sales 3 months ahead within 5% error'
      }
    ],

    dos: [
      'Use ensemble methods for maximum performance',
      'Engineer features based on domain knowledge',
      'Use time series CV for temporal data',
      'Handle missing values and outliers systematically',
      'Build end-to-end pipelines for production',
      'Monitor model performance in production',
      'Version models and track experiments',
      'Document feature engineering decisions'
    ],

    donts: [
      "Don't skip feature engineering - it's often more important than algorithms",
      "Don't use regular CV for time series data",
      "Don't ignore data leakage in feature engineering",
      "Don't deploy models without monitoring",
      "Don't overfit by creating too many features",
      "Don't forget to handle edge cases in production",
      "Don't use test data for any preprocessing decisions",
      "Don't deploy without proper error handling"
    ],

    bestPractices: [
      'Start with Gradient Boosting for structured data',
      'Create domain-specific features before trying complex algorithms',
      'Use StratifiedKFold for classification, TimeSeriesSplit for temporal data',
      'Build ColumnTransformer pipelines for mixed data types',
      'Use SMOTE or class_weight for imbalanced data',
      'Save preprocessing + model as single pipeline',
      'Track experiments with version control and metadata',
      'Deploy with proper monitoring and alerting'
    ],

    codeExamples: [
      // Examples 11-15 from original scikit-learn.js
      // Will be added in update
    ],

    quiz: [
      {
        question: 'Why does Gradient Boosting often outperform Random Forest?',
        options: [
          'It trains faster',
          'It builds trees sequentially, each correcting previous errors',
          'It uses more trees',
          'It requires less memory'
        ],
        correctAnswer: 1,
        explanation: 'Gradient Boosting builds trees sequentially where each new tree focuses on correcting errors made by previous trees (boosting). Random Forest builds trees independently (bagging). This sequential error correction often leads to better performance.'
      },
      {
        question: 'What is feature engineering?',
        options: [
          'Removing unimportant features',
          'Creating new informative features from existing data',
          'Scaling features to similar ranges',
          'Encoding categorical variables'
        ],
        correctAnswer: 1,
        explanation: 'Feature engineering creates new features from raw data using domain knowledge (e.g., extracting day-of-week from dates, creating ratios, polynomial features). It often improves model performance more than algorithm choice.'
      },
      {
        question: 'When should you use TimeSeriesSplit instead of KFold?',
        options: [
          'When you have categorical features',
          'When data has temporal order and future should not leak into past',
          'When you have imbalanced classes',
          'When dataset is very large'
        ],
        correctAnswer: 1,
        explanation: 'TimeSeriesSplit respects temporal order: each fold uses only past data for training and future data for testing, preventing data leakage. Regular KFold randomly splits, which would use future data to predict past in time series.'
      },
      {
        question: 'What does SMOTE do for imbalanced datasets?',
        options: [
          'Removes samples from majority class',
          'Creates synthetic samples of minority class',
          'Changes class weights in the model',
          'Balances features instead of classes'
        ],
        correctAnswer: 1,
        explanation: 'SMOTE (Synthetic Minority Over-sampling Technique) creates synthetic examples of the minority class by interpolating between existing minority samples, balancing the dataset without losing majority class information.'
      },
      {
        question: 'What is the main advantage of Polynomial Features?',
        options: [
          'Makes training faster',
          'Reduces model complexity',
          'Captures non-linear relationships between features',
          'Handles missing values automatically'
        ],
        correctAnswer: 2,
        explanation: 'PolynomialFeatures creates interaction terms (x1*x2) and polynomial terms (x1², x2³) allowing linear models to capture non-linear relationships. Transforms [x1, x2] into [1, x1, x2, x1², x1*x2, x2²] for degree=2.'
      }
    ],

    cheatsheet: `
# SCIKIT-LEARN ADVANCED CHEAT SHEET

## Ensemble Methods
from sklearn.ensemble import (
    VotingClassifier, BaggingClassifier,
    AdaBoostClassifier, GradientBoostingClassifier,
    StackingClassifier
)

# Voting: Combine different algorithms
voting = VotingClassifier([
    ('lr', LogisticRegression()),
    ('rf', RandomForestClassifier()),
    ('svm', SVC(probability=True))
], voting='soft')

# Bagging: Bootstrap aggregating
bagging = BaggingClassifier(
    DecisionTreeClassifier(),
    n_estimators=50,
    max_samples=0.8
)

# Gradient Boosting: Sequential error correction
gb = GradientBoostingClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=3
)

## Advanced Cross-Validation
from sklearn.model_selection import (
    StratifiedKFold, TimeSeriesSplit,
    GroupKFold, LeaveOneOut
)

# Stratified (maintains class proportions)
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

# Time Series (respects temporal order)
ts_cv = TimeSeriesSplit(n_splits=5)

# Group K-Fold (keeps groups together)
group_cv = GroupKFold(n_splits=5)

## Feature Engineering
from sklearn.preprocessing import PolynomialFeatures

# Create polynomial features
poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)  # [x1, x2] → [x1, x2, x1², x1*x2, x2²]

## Handling Imbalanced Data
from imblearn.over_sampling import SMOTE
from imblearn.under_sampling import RandomUnderSampler

# SMOTE: Create synthetic minority samples
smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)

# Or use class_weight
model = RandomForestClassifier(class_weight='balanced')

## Column Transformer (Mixed Data Types)
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder

numeric_features = ['age', 'income']
categorical_features = ['city', 'gender']

preprocessor = ColumnTransformer([
    ('num', StandardScaler(), numeric_features),
    ('cat', OneHotEncoder(), categorical_features)
])

## Complete Production Pipeline
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer

pipeline = Pipeline([
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler()),
    ('classifier', GradientBoostingClassifier())
])

# Grid search on pipeline
param_grid = {
    'classifier__n_estimators': [50, 100, 200],
    'classifier__learning_rate': [0.01, 0.1, 0.2]
}
grid = GridSearchCV(pipeline, param_grid, cv=5)
grid.fit(X_train, y_train)

# Save entire pipeline
joblib.dump(grid.best_estimator_, 'production_model.pkl')

## Model Monitoring
# Track predictions in production
import pandas as pd
from datetime import datetime

predictions_log = []
for data in production_stream:
    pred = model.predict(data)
    predictions_log.append({
        'timestamp': datetime.now(),
        'prediction': pred,
        'probability': model.predict_proba(data),
        'input_features': data
    })
    
# Monitor for drift
df_log = pd.DataFrame(predictions_log)
prediction_distribution = df_log['prediction'].value_counts()
# Alert if distribution changes significantly
    `
  }
};
