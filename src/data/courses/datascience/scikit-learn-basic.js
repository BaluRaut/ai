export const scikitLearnBasic = {
  id: 'scikit-learn-basic',
  title: 'Scikit-learn Basics',
  category: 'Data Science & AI',
  difficulty: 'beginner',
  description: 'Introduction to machine learning fundamentals with Scikit-learn',
  
  content: {
    overview: `Start your machine learning journey with Scikit-learn! This module covers the fundamentals: what machine learning is, how to prepare data, and build your first predictive models.

**What is Machine Learning?**
Machine learning enables computers to learn from data without explicit programming. Models identify patterns and make predictions on new, unseen data.

**Why Scikit-learn?**
Consistent API across algorithms, excellent documentation, production-ready code, and integration with the Python scientific stack.

**What You'll Learn:**

- Loading and exploring datasets
- Splitting data for training and testing
- Building your first classification model
- Building your first regression model
- Evaluating model performance
- Understanding the basics of preprocessing`,

    keyPoints: [
      'Machine learning learns patterns from data to make predictions',
      'Always split data into training and testing sets',
      'Classification predicts categories (spam/not spam, disease/healthy)',
      'Regression predicts continuous values (house prices, temperature)',
      'Feature scaling improves model performance for many algorithms',
      'Accuracy tells you how often the model is correct',
      'Scikit-learn has a consistent API: fit(), predict(), score()',
      'Start simple - understand basic models before complex ones'
    ],

    useCases: [
      {
        title: 'Email Spam Detection',
        description: 'Classify emails as spam or not spam based on content and metadata.',
        example: 'Email service uses Logistic Regression to filter spam with 95% accuracy'
      },
      {
        title: 'House Price Estimation',
        description: 'Predict house prices based on features like size, location, and age.',
        example: 'Real estate app estimates prices within $20k using Linear Regression'
      },
      {
        title: 'Customer Purchase Prediction',
        description: 'Predict whether a customer will make a purchase based on browsing behavior.',
        example: 'E-commerce site predicts purchases to show targeted offers'
      }
    ],

    dos: [
      'Start by understanding your data - look at distributions and correlations',
      'Always split data before any preprocessing',
      'Use simple models first (Logistic Regression, Linear Regression)',
      'Visualize your data and results',
      'Check model accuracy on test data, not training data',
      'Set random_state for reproducible results'
    ],

    donts: [
      "Don't train and test on the same data",
      "Don't forget to scale features when needed",
      "Don't ignore missing values - handle them properly",
      "Don't skip data exploration",
      "Don't expect perfect accuracy - no model is 100% accurate",
      "Don't use complex models without understanding basics first"
    ],

    bestPractices: [
      'Always explore data with describe(), info(), and visualizations before modeling',
      'Use train_test_split with test_size=0.2 or 0.3 as a good starting point',
      'For classification, check class balance in your target variable',
      'Start with default hyperparameters, then optimize later',
      'Use appropriate metrics: accuracy for balanced classes, F1 for imbalanced'
    ],

    codeExamples: [
      {
        title: '1. Loading Data and Exploration',
        explanation: 'First step in any ML project: load your data and understand it. We use built-in datasets to practice.',
        code: `from sklearn.datasets import load_iris, load_diabetes
import pandas as pd
import numpy as np

print("=" * 60)
print("LOADING AND EXPLORING DATASETS")
print("=" * 60)

# Load classification dataset (Iris flowers)
iris = load_iris()
print("\\n1. CLASSIFICATION DATASET (Iris)")
print("-" * 60)
print(f"Dataset shape: {iris.data.shape}")
print(f"Features: {iris.feature_names}")
print(f"Target classes: {iris.target_names}")
print(f"Number of samples: {len(iris.data)}")

# Convert to DataFrame for easier viewing
df_iris = pd.DataFrame(iris.data, columns=iris.feature_names)
df_iris['species'] = iris.target
print("\\nFirst 5 rows:")
print(df_iris.head())
print("\\nBasic statistics:")
print(df_iris.describe())

# Check class distribution
print("\\nClass distribution:")
unique, counts = np.unique(iris.target, return_counts=True)
for cls, count in zip(iris.target_names, counts):
    print(f"  {cls}: {count} samples")

# Load regression dataset (Diabetes)
diabetes = load_diabetes()
print("\\n2. REGRESSION DATASET (Diabetes)")
print("-" * 60)
print(f"Dataset shape: {diabetes.data.shape}")
print(f"Features: {diabetes.feature_names}")
print(f"Target: Disease progression (continuous value)")
print(f"Number of samples: {len(diabetes.data)}")

# Summary
print("\\n" + "=" * 60)
print("KEY TAKEAWAYS:")
print("=" * 60)
print("✓ Classification: Predict categories (Iris species)")
print("✓ Regression: Predict numbers (Disease progression)")
print("✓ Always check: shape, features, target, class balance")
print("✓ Use describe() to understand feature distributions")`,
        output: {
          description: 'Shows how to load datasets and explore them. Iris has 150 samples, 4 features, 3 balanced classes (50 each). Diabetes has 442 samples, 10 features, continuous target. Displays first 5 rows, statistics (mean, std, min, max), and class distribution. Essential first step before any modeling.'
        }
      },
      {
        title: '2. Train-Test Split - The Golden Rule',
        explanation: 'Never test on training data! Split your data to get honest performance estimates.',
        code: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
import numpy as np

# Load data
iris = load_iris()
X = iris.data
y = iris.target

print("=" * 60)
print("TRAIN-TEST SPLIT")
print("=" * 60)

print(f"\\nOriginal dataset size: {len(X)} samples")
print(f"Features shape: {X.shape}")

# Split: 80% training, 20% testing
X_train, X_test, y_train, y_test = train_test_split(
    X, y, 
    test_size=0.2,      # 20% for testing
    random_state=42,    # For reproducibility
    stratify=y          # Maintain class proportions
)

print("\\nAfter split:")
print(f"  Training set: {len(X_train)} samples ({len(X_train)/len(X)*100:.1f}%)")
print(f"  Test set: {len(X_test)} samples ({len(X_test)/len(X)*100:.1f}%)")

# Check class distribution is maintained
print("\\nClass distribution (stratified):")
print("Training set:")
unique, counts = np.unique(y_train, return_counts=True)
for cls, count in zip(unique, counts):
    print(f"  Class {cls}: {count} samples ({count/len(y_train)*100:.1f}%)")

print("\\nTest set:")
unique, counts = np.unique(y_test, return_counts=True)
for cls, count in zip(unique, counts):
    print(f"  Class {cls}: {count} samples ({count/len(y_test)*100:.1f}%)")

print("\\n" + "=" * 60)
print("WHY SPLIT?")
print("=" * 60)
print("✓ Training set: Model learns patterns from this data")
print("✓ Test set: Evaluate how well model generalizes to new data")
print("✓ Never train and test on same data - gives false confidence!")
print("✓ stratify=y ensures equal class proportions in both sets")
print("✓ random_state=42 makes split reproducible")`,
        output: {
          description: 'Demonstrates proper data splitting: 150 samples → 120 training (80%), 30 testing (20%). With stratify, each class maintains ~33% distribution in both sets. Shows why splitting is crucial: training data teaches the model, test data evaluates it honestly. Setting random_state=42 ensures you get the same split every time you run the code.'
        }
      },
      {
        title: '3. Your First Classification Model',
        explanation: 'Build a model to classify iris flowers into 3 species. This is your first complete ML workflow!',
        code: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import numpy as np

# Load and split data
iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42, stratify=iris.target
)

print("=" * 60)
print("CLASSIFICATION: IRIS FLOWER SPECIES")
print("=" * 60)

# Step 1: Create the model
model = LogisticRegression(max_iter=200, random_state=42)
print("\\n1. Model created: Logistic Regression")

# Step 2: Train the model
print("\\n2. Training model on", len(X_train), "samples...")
model.fit(X_train, y_train)
print("   ✓ Training complete!")

# Step 3: Make predictions
print("\\n3. Making predictions on", len(X_test), "test samples...")
y_pred = model.predict(X_test)

# Step 4: Evaluate
print("\\n4. EVALUATION RESULTS")
print("-" * 60)

# Accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2%}")
print(f"(Correctly classified {int(accuracy * len(y_test))}/{len(y_test)} flowers)")

# Confusion Matrix
print("\\nConfusion Matrix:")
cm = confusion_matrix(y_test, y_pred)
print("              Predicted →")
print("Actual ↓   ", iris.target_names)
for i, row in enumerate(cm):
    print(f"{iris.target_names[i]:12} {row}")

# Detailed report
print("\\nDetailed Classification Report:")
print(classification_report(y_test, y_pred, target_names=iris.target_names))

# Show some predictions
print("\\n" + "=" * 60)
print("SAMPLE PREDICTIONS:")
print("=" * 60)
for i in range(5):
    actual = iris.target_names[y_test[i]]
    predicted = iris.target_names[y_pred[i]]
    match = "✓" if y_test[i] == y_pred[i] else "✗"
    print(f"{match} Sample {i+1}: Actual={actual:12} | Predicted={predicted:12}")

print("\\n" + "=" * 60)
print("WORKFLOW SUMMARY:")
print("=" * 60)
print("1. Load data → 2. Split data → 3. Create model")
print("4. Train model → 5. Predict → 6. Evaluate")
print("✓ This is the foundation of every ML project!")`,
        output: {
          description: 'Complete classification workflow achieving ~97% accuracy on iris dataset. Shows 6-step process: load, split, create, train, predict, evaluate. Confusion matrix shows most flowers correctly classified. Classification report shows precision, recall, F1-score for each species. Sample predictions demonstrate model making correct predictions. This workflow applies to any classification problem!'
        }
      },
      {
        title: '4. Your First Regression Model',
        explanation: 'Predict continuous values (disease progression) instead of categories. Learn the difference between classification and regression.',
        code: `from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import numpy as np

# Load diabetes dataset
diabetes = load_diabetes()
X_train, X_test, y_train, y_test = train_test_split(
    diabetes.data, diabetes.target, test_size=0.2, random_state=42
)

print("=" * 60)
print("REGRESSION: DISEASE PROGRESSION PREDICTION")
print("=" * 60)

# Create and train model
model = LinearRegression()
print("\\n1. Model created: Linear Regression")
print("\\n2. Training on", len(X_train), "patients...")
model.fit(X_train, y_train)
print("   ✓ Training complete!")

# Make predictions
print("\\n3. Predicting disease progression for", len(X_test), "patients...")
y_pred = model.predict(X_test)

# Evaluate
print("\\n4. EVALUATION RESULTS")
print("-" * 60)

# R² Score (higher is better, max 1.0)
r2 = r2_score(y_test, y_pred)
print(f"R² Score: {r2:.3f}")
print(f"  → Model explains {r2*100:.1f}% of variance in disease progression")

# Mean Absolute Error (lower is better)
mae = mean_absolute_error(y_test, y_pred)
print(f"\\nMean Absolute Error: {mae:.2f}")
print(f"  → Predictions are off by {mae:.1f} units on average")

# Root Mean Squared Error (lower is better)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
print(f"\\nRoot Mean Squared Error: {rmse:.2f}")
print(f"  → RMSE penalizes large errors more than MAE")

# Show predictions vs actual
print("\\n" + "=" * 60)
print("SAMPLE PREDICTIONS:")
print("=" * 60)
print("Patient  | Actual | Predicted | Error")
print("-" * 45)
for i in range(10):
    actual = y_test[i]
    predicted = y_pred[i]
    error = abs(actual - predicted)
    print(f"   {i+1:2d}    | {actual:6.1f} | {predicted:9.1f} | {error:5.1f}")

print("\\n" + "=" * 60)
print("REGRESSION vs CLASSIFICATION:")
print("=" * 60)
print("Classification: Predict categories (spam/not spam)")
print("  Metrics: Accuracy, Precision, Recall, F1")
print("\\nRegression: Predict numbers (price, temperature)")
print("  Metrics: R², MAE, RMSE")
print("\\n✓ Both use the same workflow: split, train, predict, evaluate!")`,
        output: {
          description: 'Regression model predicting disease progression (continuous values 25-346). Achieves R²~0.45 (explains 45% of variance), MAE~43 (average error 43 units), RMSE~55. Shows 10 sample predictions comparing actual vs predicted values. Key difference from classification: predicts numbers not categories, uses different metrics (R², MAE, RMSE instead of accuracy). Same workflow applies!'
        }
      },
      {
        title: '5. Feature Scaling - Why and When',
        explanation: 'Some algorithms need features on similar scales. Learn when scaling helps and how to do it properly.',
        code: `from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

# Create sample data with different scales
print("=" * 60)
print("FEATURE SCALING")
print("=" * 60)

# Simulate features with very different scales
np.random.seed(42)
n_samples = 100

# Feature 1: Age (20-80)
age = np.random.randint(20, 80, n_samples).reshape(-1, 1)

# Feature 2: Income ($20k-$200k)
income = np.random.randint(20000, 200000, n_samples).reshape(-1, 1)

# Feature 3: Credit Score (300-850)
credit = np.random.randint(300, 850, n_samples).reshape(-1, 1)

X = np.hstack([age, income, credit])

print("\\n1. ORIGINAL DATA (Different Scales)")
print("-" * 60)
print(f"Age:          min={age.min():8.1f} max={age.max():8.1f}")
print(f"Income:       min={income.min():8.1f} max={income.max():8.1f}")
print(f"Credit Score: min={credit.min():8.1f} max={credit.max():8.1f}")
print("\\n⚠️  Problem: Income dominates (much larger numbers)")

# Apply scaling
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

print("\\n2. AFTER SCALING (StandardScaler)")
print("-" * 60)
print(f"Age:          mean={X_scaled[:, 0].mean():.3f} std={X_scaled[:, 0].std():.3f}")
print(f"Income:       mean={X_scaled[:, 1].mean():.3f} std={X_scaled[:, 1].std():.3f}")
print(f"Credit Score: mean={X_scaled[:, 2].mean():.3f} std={X_scaled[:, 2].std():.3f}")
print("\\n✓ All features now have mean=0, std=1 (equal importance)")

# Show transformation formula
print("\\n3. HOW IT WORKS")
print("-" * 60)
print("StandardScaler formula: (value - mean) / std")
print("\\nExample for first sample:")
original_age = X[0, 0]
scaled_age = X_scaled[0, 0]
mean_age = X[:, 0].mean()
std_age = X[:, 0].std()
print(f"Original age: {original_age}")
print(f"Mean age: {mean_age:.2f}")
print(f"Std age: {std_age:.2f}")
print(f"Scaled: ({original_age} - {mean_age:.2f}) / {std_age:.2f} = {scaled_age:.3f}")

print("\\n" + "=" * 60)
print("WHEN TO SCALE:")
print("=" * 60)
print("✓ ALWAYS scale for:")
print("  • K-Nearest Neighbors (KNN) - uses distances")
print("  • Support Vector Machines (SVM) - uses distances")
print("  • Neural Networks - gradient descent works better")
print("  • Principal Component Analysis (PCA)")
print("\\n✗ NO NEED to scale for:")
print("  • Decision Trees / Random Forest - uses splits, not distances")
print("  • Naive Bayes - probabilistic, scale-independent")
print("\\n⚠️  CRITICAL: Fit scaler on training data only!")
print("   Then transform both train and test with same scaler")`,
        output: {
          description: 'Demonstrates feature scaling on data with different ranges: Age (20-80), Income (20k-200k), Credit (300-850). Without scaling, Income dominates due to larger values. StandardScaler transforms all features to mean=0, std=1. Shows formula: (value - mean) / std. Essential for distance-based algorithms (KNN, SVM) but not needed for tree-based models. Critical rule: fit on training data only, then transform test data with same scaler!'
        }
      }
    ],

    quiz: [
      {
        question: 'What is the main purpose of splitting data into training and test sets?',
        options: [
          'To make the dataset smaller and faster to process',
          'To evaluate model performance on unseen data honestly',
          'To train multiple models simultaneously',
          'To balance the classes in the dataset'
        ],
        correctAnswer: 1,
        explanation: 'Splitting data allows us to train on one portion and test on another unseen portion, giving an honest estimate of how the model will perform on new data. Testing on training data would give artificially high performance.'
      },
      {
        question: 'Which metric is most appropriate for a regression problem?',
        options: [
          'Accuracy',
          'Precision and Recall',
          'Mean Squared Error (MSE)',
          'Confusion Matrix'
        ],
        correctAnswer: 2,
        explanation: 'Regression predicts continuous values, so we use metrics like MSE, MAE, or R² score. Accuracy, precision, recall, and confusion matrices are for classification problems (predicting categories).'
      },
      {
        question: 'When should you apply feature scaling with StandardScaler?',
        options: [
          'Only for classification problems',
          'For algorithms using distances (KNN, SVM, Neural Networks)',
          'For all machine learning algorithms without exception',
          'Only when features have negative values'
        ],
        correctAnswer: 1,
        explanation: 'Feature scaling is crucial for distance-based algorithms (KNN, SVM) and gradient descent (Neural Networks, Logistic Regression) because features with large ranges would dominate. Tree-based models don\'t need scaling.'
      },
      {
        question: 'What does the fit() method do in scikit-learn?',
        options: [
          'Tests the model on new data',
          'Trains the model by learning patterns from data',
          'Scales the features to have mean 0',
          'Predicts the target values'
        ],
        correctAnswer: 1,
        explanation: 'The fit() method trains the model by learning patterns from the training data. predict() makes predictions, score() evaluates performance, and transform() is used by preprocessors like scalers.'
      },
      {
        question: 'What is classification in machine learning?',
        options: [
          'Predicting continuous numerical values',
          'Predicting which category/class something belongs to',
          'Organizing data into folders',
          'Removing outliers from the dataset'
        ],
        correctAnswer: 1,
        explanation: 'Classification predicts categories (spam/not spam, cat/dog, disease type). Regression predicts numbers (price, temperature). Both are types of supervised learning.'
      },
      {
        question: 'Why should you set random_state in train_test_split()?',
        options: [
          'To make the split faster',
          'To get better model accuracy',
          'To make the split reproducible (same every time)',
          'To automatically balance the classes'
        ],
        correctAnswer: 2,
        explanation: 'Setting random_state ensures you get the same train-test split every time you run the code, making experiments reproducible. It doesn\'t affect speed or accuracy, just reproducibility.'
      },
      {
        question: 'What does stratify=y do in train_test_split?',
        options: [
          'Sorts the data by the target variable',
          'Maintains the same class proportions in train and test sets',
          'Removes duplicate values from the target',
          'Converts categorical variables to numbers'
        ],
        correctAnswer: 1,
        explanation: 'stratify=y ensures that the class distribution in the training and test sets matches the distribution in the original dataset. This is important for imbalanced datasets.'
      },
      {
        question: 'Which statement about model evaluation is correct?',
        options: [
          'Always test on the training data to maximize accuracy',
          'Test set should be larger than training set',
          'Never use training data for evaluation - use test set',
          'Test and train sets should overlap by 50%'
        ],
        correctAnswer: 2,
        explanation: 'Never evaluate on training data - it gives falsely optimistic results. Always evaluate on a separate test set that the model has never seen during training. This tests generalization ability.'
      },
      {
        question: 'What is the difference between fit() and transform()?',
        options: [
          'fit() is for models, transform() is for preprocessors',
          'fit() learns parameters from data, transform() applies them',
          'fit() is faster than transform()',
          'There is no difference'
        ],
        correctAnswer: 1,
        explanation: 'fit() learns parameters from the training data (e.g., mean and std for StandardScaler). transform() applies those learned parameters to data (train or test). fit_transform() does both in one step on training data.'
      },
      {
        question: 'What is the typical test set size in train_test_split?',
        options: [
          '50% of the data',
          '5-10% of the data',
          '20-30% of the data',
          '80% of the data'
        ],
        correctAnswer: 2,
        explanation: 'Common practice is test_size=0.2 or 0.3 (20-30% for testing, 70-80% for training). This balances having enough data to train the model while still having a good-sized test set for evaluation.'
      }
    ],

    cheatsheet: `
# SCIKIT-LEARN BASICS CHEAT SHEET

## 1. LOADING DATA
from sklearn.datasets import load_iris, load_diabetes
iris = load_iris()  # Classification dataset
X, y = iris.data, iris.target

## 2. TRAIN-TEST SPLIT
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

## 3. CLASSIFICATION MODEL
from sklearn.linear_model import LogisticRegression
model = LogisticRegression(random_state=42)
model.fit(X_train, y_train)  # Train
y_pred = model.predict(X_test)  # Predict
accuracy = model.score(X_test, y_test)  # Evaluate

## 4. REGRESSION MODEL
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

## 5. FEATURE SCALING
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)  # Fit on train
X_test_scaled = scaler.transform(X_test)  # Transform test

## 6. CLASSIFICATION METRICS
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
accuracy = accuracy_score(y_test, y_pred)
print(classification_report(y_test, y_pred))
cm = confusion_matrix(y_test, y_pred)

## 7. REGRESSION METRICS
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
mse = mean_squared_error(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

## REMEMBER:
# ✓ Always split before preprocessing
# ✓ Fit on training, transform on both train and test
# ✓ Never test on training data
# ✓ Set random_state for reproducibility
# ✓ Use stratify for classification
# ✓ Scale for KNN, SVM, Neural Networks
    `
  }
};
