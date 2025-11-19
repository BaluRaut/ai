export const scikitLearn = {
  id: 'scikit-learn',
  title: 'Machine Learning with Scikit-learn',
  category: 'Data Science & AI',
  difficulty: 'intermediate',
  description: 'Master machine learning with Scikit-learn - from preprocessing to model evaluation',
  
  content: {
    overview: `Scikit-learn is Python's most popular machine learning library, providing simple and efficient tools for data mining and analysis. It's built on NumPy, SciPy, and matplotlib.

**What is Machine Learning?**
Machine learning enables computers to learn from data without explicit programming. Models identify patterns and make predictions on new, unseen data.

**Why Scikit-learn?**
Consistent API across algorithms, excellent documentation, production-ready code, and integration with the Python scientific stack.

**Key Concepts:**

- Supervised Learning: Learn from labeled data (classification, regression)
- Unsupervised Learning: Find patterns in unlabeled data (clustering, dimensionality reduction)
- Model Selection: Choose and tune the best algorithm for your problem
- Evaluation: Measure model performance with metrics`,

    keyPoints: [
      'Scikit-learn provides unified API for all machine learning algorithms',
      'Always split data into training and testing sets to avoid overfitting',
      'Feature scaling (normalization/standardization) is crucial for many algorithms',
      'Cross-validation gives better estimate of model performance than single train-test split',
      'Hyperparameter tuning with GridSearchCV or RandomizedSearchCV optimizes models',
      'Use pipelines to streamline preprocessing and modeling workflow',
      'Evaluate classification with accuracy, precision, recall, F1-score, and confusion matrix',
      'Evaluate regression with MSE, RMSE, MAE, and R² score',
      'Handle imbalanced datasets with resampling or class_weight parameter',
      'Save trained models with joblib or pickle for production deployment'
    ],

    useCases: [
      {
        title: 'Customer Churn Prediction',
        description: 'Classification models predict which customers are likely to leave, enabling proactive retention strategies.',
        example: 'Telecom company uses RandomForest to identify at-risk customers with 85% accuracy, reducing churn by 20%'
      },
      {
        title: 'House Price Prediction',
        description: 'Regression models estimate property values based on features like location, size, and amenities.',
        example: 'Real estate platform uses Gradient Boosting to predict prices within 5% error, helping buyers and sellers'
      },
      {
        title: 'Customer Segmentation',
        description: 'Clustering algorithms group customers by behavior, enabling targeted marketing campaigns.',
        example: 'E-commerce site uses K-Means to create 5 customer segments, increasing campaign ROI by 40%'
      },
      {
        title: 'Fraud Detection',
        description: 'Anomaly detection identifies unusual transactions that may indicate fraudulent activity.',
        example: 'Bank uses Isolation Forest to detect fraud in real-time, catching 95% of fraudulent transactions'
      },
      {
        title: 'Medical Diagnosis',
        description: 'Classification models assist doctors in diagnosing diseases from patient data and test results.',
        example: 'Healthcare system uses SVM to classify breast cancer tumors as benign/malignant with 97% accuracy'
      },
      {
        title: 'Recommendation Systems',
        description: 'Collaborative filtering and content-based models suggest products users might like.',
        example: 'Streaming service uses matrix factorization to recommend movies, increasing user engagement by 30%'
      }
    ],

    dos: [
      'Always understand your data before applying machine learning',
      'Start with simple models (Logistic Regression, Decision Trees) before complex ones',
      'Use cross-validation to get reliable performance estimates',
      'Scale features when using distance-based algorithms (KNN, SVM, Neural Networks)',
      'Handle missing values appropriately (imputation or deletion)',
      'Check for and address class imbalance in classification problems',
      'Visualize model performance with learning curves and confusion matrices',
      'Document your preprocessing steps and model parameters',
      'Save preprocessors and models together using pipelines',
      'Monitor model performance on new data (concept drift)'
    ],

    donts: [
      "Don't train and test on the same data - always use separate test set",
      "Don't ignore feature engineering - it often matters more than algorithm choice",
      "Don't apply feature scaling after train-test split on the full dataset (data leakage)",
      "Don't use accuracy alone for imbalanced datasets - check precision, recall, F1",
      "Don't forget to set random_state for reproducibility in experiments",
      "Don't overfit by tuning hyperparameters on the test set - use validation set",
      "Don't assume linear relationships - check with scatter plots and correlations",
      "Don't ignore outliers - they can significantly affect model performance",
      "Don't use complex models without understanding simpler alternatives first",
      "Don't deploy models without monitoring their real-world performance"
    ],

    bestPractices: [
      'Use train_test_split with stratify parameter for classification to maintain class balance',
      'Create preprocessing pipelines with ColumnTransformer for different feature types',
      'Use GridSearchCV or RandomizedSearchCV with cross-validation for hyperparameter tuning',
      'Combine Pipeline with GridSearchCV to prevent data leakage during tuning',
      'Use StandardScaler for features with normal distribution, MinMaxScaler for bounded features',
      'Handle missing values with SimpleImputer before scaling or modeling',
      'Use OneHotEncoder for categorical features with few categories, LabelEncoder for target in classification',
      'Evaluate models on multiple metrics appropriate to the business problem',
      'Plot learning curves to diagnose overfitting vs underfitting',
      'Use feature_importances_ or coefficients to understand model decisions',
      'Save models with joblib.dump() which is efficient for large numpy arrays',
      'Version control your data, code, and model artifacts'
    ],

    cheatsheet: `
# Scikit-learn Machine Learning Cheatsheet

## Importing
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.preprocessing import StandardScaler, MinMaxScaler, LabelEncoder
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error

## Data Splitting
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y  # stratify for classification
)

## Preprocessing
# Scaling
scaler = StandardScaler()  # Mean=0, Std=1
scaler = MinMaxScaler()    # Scale to [0, 1]
X_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)  # Use fit from training!

# Handling Missing Values
imputer = SimpleImputer(strategy='mean')  # or 'median', 'most_frequent'
X_imputed = imputer.fit_transform(X)

# Encoding Categorical Variables
encoder = LabelEncoder()
y_encoded = encoder.fit_transform(y)

## Classification Models
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB

# Logistic Regression
model = LogisticRegression(random_state=42, max_iter=1000)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

# Random Forest
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

# SVM
svm = SVC(kernel='rbf', C=1.0, random_state=42)
svm.fit(X_train, y_train)

## Regression Models
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor

# Linear Regression
lr = LinearRegression()
lr.fit(X_train, y_train)
y_pred = lr.predict(X_test)

# Ridge Regression (L2 regularization)
ridge = Ridge(alpha=1.0)
ridge.fit(X_train, y_train)

# Lasso Regression (L1 regularization)
lasso = Lasso(alpha=0.1)
lasso.fit(X_train, y_train)

## Clustering
from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering

# K-Means
kmeans = KMeans(n_clusters=3, random_state=42)
labels = kmeans.fit_predict(X)

# DBSCAN (density-based)
dbscan = DBSCAN(eps=0.5, min_samples=5)
labels = dbscan.fit_predict(X)

## Dimensionality Reduction
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE

# PCA
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)
print(f"Explained variance: {pca.explained_variance_ratio_}")

## Model Evaluation - Classification
accuracy = accuracy_score(y_test, y_pred)
print(classification_report(y_test, y_pred))
print(confusion_matrix(y_test, y_pred))

# Cross-validation
scores = cross_val_score(model, X, y, cv=5)
print(f"CV Accuracy: {scores.mean():.3f} (+/- {scores.std():.3f})")

## Model Evaluation - Regression
mse = mean_squared_error(y_test, y_pred)
rmse = mean_squared_error(y_test, y_pred, squared=False)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

## Hyperparameter Tuning
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [5, 10, 15],
    'min_samples_split': [2, 5, 10]
}
grid_search = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid, cv=5, scoring='accuracy'
)
grid_search.fit(X_train, y_train)
best_model = grid_search.best_estimator_
print(f"Best params: {grid_search.best_params_}")

## Pipelines
pipeline = Pipeline([
    ('imputer', SimpleImputer(strategy='mean')),
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier(random_state=42))
])
pipeline.fit(X_train, y_train)
y_pred = pipeline.predict(X_test)

## Saving & Loading Models
import joblib
joblib.dump(model, 'model.pkl')
loaded_model = joblib.load('model.pkl')

## Feature Importance
importance = rf.feature_importances_
for i, imp in enumerate(importance):
    print(f"Feature {i}: {imp:.4f}")
`,

    codeExamples: [
      {
        title: '1. Complete Classification Workflow',
        explanation: 'End-to-end classification example with data splitting, preprocessing, training, and evaluation. This is the foundation of most ML projects.',
        code: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import numpy as np

# Load famous Iris dataset (flower species classification)
iris = load_iris()
X, y = iris.data, iris.target

print("Dataset shape:", X.shape)
print("Classes:", iris.target_names)

# Split data: 80% training, 20% testing
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

print(f"Training samples: {len(X_train)}, Test samples: {len(X_test)}")

# Scale features (important for many algorithms)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)  # Use training statistics!

# Train Random Forest classifier
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train_scaled, y_train)

# Make predictions
y_pred = rf.predict(X_test_scaled)

# Evaluate model
accuracy = accuracy_score(y_test, y_pred)
print(f"\\nAccuracy: {accuracy:.3f}")

print("\\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=iris.target_names))

print("\\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))

# Feature importance
print("\\nFeature Importances:")
for name, importance in zip(iris.feature_names, rf.feature_importances_):
    print(f"{name}: {importance:.3f}")`,
        output: {
          description: 'Displays dataset shape (150 samples, 4 features), training/test split (120/30), accuracy (~0.967), detailed classification report with precision/recall/F1 for each of 3 iris species, confusion matrix showing prediction errors, and feature importances ranking which features matter most (petal width ~0.45, petal length ~0.42 are most important).'
        }
      },
      {
        title: '2. Linear Regression with Evaluation',
        explanation: 'Predict continuous values using linear regression. Includes multiple evaluation metrics and visualization of results.',
        code: `from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
import numpy as np

# Load California housing dataset
housing = fetch_california_housing()
X, y = housing.data, housing.target

print("Predicting house prices in California")
print("Features:", housing.feature_names)
print("Dataset shape:", X.shape)

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train linear regression model
lr = LinearRegression()
lr.fit(X_train, y_train)

# Make predictions
y_pred = lr.predict(X_test)

# Evaluate with multiple metrics
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"\\nModel Performance:")
print(f"Mean Squared Error: {mse:.3f}")
print(f"Root Mean Squared Error: {rmse:.3f}")
print(f"Mean Absolute Error: {mae:.3f}")
print(f"R² Score: {r2:.3f}")

# Model coefficients
print("\\nModel Coefficients:")
for name, coef in zip(housing.feature_names, lr.coef_):
    print(f"{name}: {coef:.4f}")
print(f"Intercept: {lr.intercept_:.4f}")

# Example predictions
print("\\nSample Predictions (first 5):")
for i in range(5):
    print(f"Actual: {y_test[i]:.2f}, Predicted: {y_pred[i]:.2f}, Error: {abs(y_test[i]-y_pred[i]):.2f}")`,
        output: {
          description: 'Shows regression evaluation metrics: RMSE ~0.73 (average error in predicting house prices), MAE ~0.53, R² ~0.58 (model explains 58% of variance). Displays coefficients showing how each feature affects price (median income has strong positive effect ~0.44, latitude has negative effect ~-0.42). Shows 5 sample predictions with actual vs predicted values.'
        }
      },
      {
        title: '3. Cross-Validation for Robust Evaluation',
        explanation: 'Cross-validation splits data multiple ways to get more reliable performance estimates than a single train-test split.',
        code: `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score, cross_validate
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.linear_model import LogisticRegression
import numpy as np

# Load breast cancer dataset (binary classification)
cancer = load_breast_cancer()
X, y = cancer.data, cancer.target

print("Binary Classification: Predicting tumor malignancy")
print(f"Samples: {len(y)}, Malignant: {sum(y==0)}, Benign: {sum(y==1)}")

# Compare multiple models with 5-fold cross-validation
models = {
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'SVM': SVC(random_state=42),
    'Logistic Regression': LogisticRegression(max_iter=10000, random_state=42)
}

print("\\nCross-Validation Results (5-fold):")
print("-" * 50)

for name, model in models.items():
    # Get multiple metrics
    scores = cross_validate(
        model, X, y, cv=5,
        scoring=['accuracy', 'precision', 'recall', 'f1'],
        return_train_score=True
    )
    
    print(f"\\n{name}:")
    print(f"  Accuracy:  {scores['test_accuracy'].mean():.3f} (+/- {scores['test_accuracy'].std():.3f})")
    print(f"  Precision: {scores['test_precision'].mean():.3f} (+/- {scores['test_precision'].std():.3f})")
    print(f"  Recall:    {scores['test_recall'].mean():.3f} (+/- {scores['test_recall'].std():.3f})")
    print(f"  F1 Score:  {scores['test_f1'].mean():.3f} (+/- {scores['test_f1'].std():.3f})")
    
    # Check for overfitting
    train_acc = scores['train_accuracy'].mean()
    test_acc = scores['test_accuracy'].mean()
    print(f"  Train Accuracy: {train_acc:.3f}")
    print(f"  Overfitting gap: {train_acc - test_acc:.3f}")

print("\\nBest model: Compare accuracy and overfitting gap")`,
        output: {
          description: 'Compares three classifiers on breast cancer prediction: Random Forest (accuracy ~0.96, very low overfitting), SVM (accuracy ~0.98, slight overfitting), Logistic Regression (accuracy ~0.95, minimal overfitting). Each model shows mean and standard deviation across 5 folds for accuracy, precision, recall, and F1. Helps choose best model considering both performance and generalization.'
        }
      },
      {
        title: '4. Hyperparameter Tuning with GridSearchCV',
        explanation: 'Automatically find the best hyperparameters by testing many combinations with cross-validation.',
        code: `from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
import numpy as np

# Load handwritten digits dataset (10 classes: 0-9)
digits = load_digits()
X, y = digits.data, digits.target

print("Handwritten Digit Recognition")
print(f"Samples: {len(y)}, Features: {X.shape[1]}, Classes: {len(np.unique(y))}")

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Define parameter grid to search
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [10, 20, 30, None],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4]
}

print(f"\\nTesting {np.prod([len(v) for v in param_grid.values()])} combinations...")

# Create GridSearchCV object
grid_search = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid,
    cv=5,
    scoring='accuracy',
    n_jobs=-1,  # Use all CPU cores
    verbose=1
)

# Perform grid search
grid_search.fit(X_train, y_train)

# Best parameters
print(f"\\nBest Parameters: {grid_search.best_params_}")
print(f"Best CV Score: {grid_search.best_score_:.3f}")

# Evaluate on test set
best_model = grid_search.best_estimator_
test_score = best_model.score(X_test, y_test)
print(f"Test Set Accuracy: {test_score:.3f}")

# Detailed results
y_pred = best_model.predict(X_test)
print("\\nClassification Report:")
print(classification_report(y_test, y_pred))

# Top 3 parameter combinations
print("\\nTop 3 Parameter Combinations:")
results = grid_search.cv_results_
for i in range(3):
    idx = np.argsort(results['mean_test_score'])[::-1][i]
    print(f"{i+1}. Score: {results['mean_test_score'][idx]:.3f}, Params: {results['params'][idx]}")`,
        output: {
          description: 'Performs exhaustive grid search over 144 parameter combinations (3×4×3×3). Displays best hyperparameters (typically n_estimators=200, max_depth=20-30), best cross-validation accuracy (~0.97), test set accuracy (~0.98), and detailed per-digit classification metrics. Shows top 3 parameter combinations, helping understand parameter importance. Demonstrates automated model optimization.'
        }
      },
      {
        title: '5. Pipeline for Streamlined Workflow',
        explanation: 'Pipelines chain preprocessing and modeling steps, preventing data leakage and making code cleaner and more reproducible.',
        code: `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Load data
cancer = load_breast_cancer()
X, y = cancer.data, cancer.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create pipeline: Scale -> PCA -> Classify
pipeline = Pipeline([
    ('scaler', StandardScaler()),              # Step 1: Standardize features
    ('pca', PCA(n_components=10)),            # Step 2: Reduce to 10 components
    ('classifier', RandomForestClassifier(n_estimators=100, random_state=42))  # Step 3: Classify
])

print("Pipeline Steps:")
for name, step in pipeline.steps:
    print(f"  {name}: {step.__class__.__name__}")

# Train entire pipeline with one command
print("\\nTraining pipeline...")
pipeline.fit(X_train, y_train)

# Make predictions
y_pred = pipeline.predict(X_test)

# Evaluate
accuracy = accuracy_score(y_test, y_pred)
print(f"\\nAccuracy: {accuracy:.3f}")

# Access pipeline components
pca = pipeline.named_steps['pca']
print(f"\\nPCA Explained Variance Ratio:")
print(f"10 components explain {sum(pca.explained_variance_ratio_):.1%} of variance")

# Feature importance from final classifier
rf = pipeline.named_steps['classifier']
print(f"\\nTop 5 Important PCA Components:")
importances = rf.feature_importances_
for i in np.argsort(importances)[::-1][:5]:
    print(f"  Component {i}: {importances[i]:.3f}")

print("\\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=['Malignant', 'Benign']))

# Pipeline prevents data leakage: scaling and PCA fitted only on training data
print("\\nPipeline benefits:")
print("✓ Prevents data leakage (scaling/PCA only on training data)")
print("✓ Cleaner code (one fit/predict call)")
print("✓ Easier to deploy (save entire pipeline)")`,
        output: {
          description: 'Shows pipeline with 3 steps (StandardScaler, PCA, RandomForestClassifier). Achieves ~0.96 accuracy on breast cancer classification. PCA reduces 30 features to 10 components while retaining ~95% of variance. Displays which PCA components are most important to the classifier. Emphasizes pipeline benefits: prevents data leakage, simplifies code, and makes deployment easier.'
        }
      },
      {
        title: '6. K-Means Clustering',
        explanation: 'Unsupervised learning to group similar data points. Useful when you don\'t have labels and want to discover patterns.',
        code: `from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score, davies_bouldin_score
import numpy as np

# Generate synthetic data with 4 clusters
X, true_labels = make_blobs(
    n_samples=300, n_features=2, centers=4,
    cluster_std=0.60, random_state=42
)

print("Clustering 300 samples with 2 features")
print(f"True number of clusters: 4")

# Try different numbers of clusters
print("\\nTesting different cluster numbers:")
print("-" * 50)

inertias = []
silhouette_scores = []
db_scores = []

for n_clusters in range(2, 8):
    kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
    labels = kmeans.fit_predict(X)
    
    # Calculate metrics
    inertia = kmeans.inertia_  # Sum of squared distances to nearest cluster
    silhouette = silhouette_score(X, labels)  # Higher is better
    db_score = davies_bouldin_score(X, labels)  # Lower is better
    
    inertias.append(inertia)
    silhouette_scores.append(silhouette)
    db_scores.append(db_score)
    
    print(f"\\nClusters: {n_clusters}")
    print(f"  Inertia: {inertia:.2f}")
    print(f"  Silhouette Score: {silhouette:.3f} (higher is better)")
    print(f"  Davies-Bouldin Score: {db_score:.3f} (lower is better)")

# Best number based on silhouette score
best_k = np.argmax(silhouette_scores) + 2
print(f"\\nBest number of clusters: {best_k} (silhouette score)")

# Final clustering with best k
kmeans_final = KMeans(n_clusters=best_k, random_state=42, n_init=10)
final_labels = kmeans_final.fit_predict(X)

print(f"\\nFinal Clustering Results:")
print(f"Cluster centers:\\n{kmeans_final.cluster_centers_}")

# Cluster sizes
unique, counts = np.unique(final_labels, return_counts=True)
print(f"\\nCluster sizes:")
for cluster_id, count in zip(unique, counts):
    print(f"  Cluster {cluster_id}: {count} samples")

# Compare with true labels (if available)
print(f"\\nNote: K-Means found the optimal {best_k} clusters")
print("Use elbow method (inertia) and silhouette score to choose k")`,
        output: {
          description: 'Tests clustering with 2-7 clusters, showing inertia (decreases with more clusters), silhouette score (peaks at optimal k=4), and Davies-Bouldin score (minimized at k=4). Identifies 4 as the best number of clusters matching the true structure. Shows cluster centers coordinates and cluster sizes (roughly 75 samples each). Demonstrates using multiple metrics to find optimal number of clusters in unsupervised learning.'
        }
      },
      {
        title: '7. Handling Imbalanced Datasets',
        explanation: 'Real-world datasets often have imbalanced classes. Learn techniques to handle this and choose appropriate evaluation metrics.',
        code: `from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.utils import resample
import numpy as np

# Create imbalanced dataset: 95% class 0, 5% class 1
X, y = make_classification(
    n_samples=1000, n_features=20, n_classes=2,
    weights=[0.95, 0.05], flip_y=0, random_state=42
)

print("Imbalanced Dataset:")
unique, counts = np.unique(y, return_counts=True)
for label, count in zip(unique, counts):
    print(f"  Class {label}: {count} samples ({count/len(y)*100:.1f}%)")

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Approach 1: Default classifier (will perform poorly on minority class)
print("\\n" + "="*50)
print("Approach 1: Default Classifier (no balancing)")
print("="*50)

rf_default = RandomForestClassifier(n_estimators=100, random_state=42)
rf_default.fit(X_train, y_train)
y_pred_default = rf_default.predict(X_test)

print(f"Accuracy: {accuracy_score(y_test, y_pred_default):.3f}")
print(f"Precision: {precision_score(y_test, y_pred_default):.3f}")
print(f"Recall: {recall_score(y_test, y_pred_default):.3f}")
print(f"F1 Score: {f1_score(y_test, y_pred_default):.3f}")
print("\\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred_default))

# Approach 2: Using class_weight parameter
print("\\n" + "="*50)
print("Approach 2: Balanced Class Weights")
print("="*50)

rf_balanced = RandomForestClassifier(
    n_estimators=100, class_weight='balanced', random_state=42
)
rf_balanced.fit(X_train, y_train)
y_pred_balanced = rf_balanced.predict(X_test)

print(f"Accuracy: {accuracy_score(y_test, y_pred_balanced):.3f}")
print(f"Precision: {precision_score(y_test, y_pred_balanced):.3f}")
print(f"Recall: {recall_score(y_test, y_pred_balanced):.3f}")
print(f"F1 Score: {f1_score(y_test, y_pred_balanced):.3f}")
print("\\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred_balanced))

print("\\n" + "="*50)
print("Key Insights:")
print("="*50)
print("✓ Accuracy can be misleading with imbalanced data")
print("✓ Focus on precision, recall, and F1 for minority class")
print("✓ class_weight='balanced' improves recall for minority class")
print("✓ Check confusion matrix to see true/false positives/negatives")`,
        output: {
          description: 'Demonstrates problem with imbalanced data (950 class 0, 50 class 1). Default classifier achieves high accuracy (~95%) but poor recall (~20%) on minority class - it mostly predicts majority class. Balanced classifier trades some accuracy (~92%) for much better recall (~60%) on minority class. Shows confusion matrices revealing default model misses most positive cases. Emphasizes using precision/recall/F1 instead of accuracy for imbalanced datasets.'
        }
      },
      {
        title: '8. Feature Importance and Selection',
        explanation: 'Understand which features matter most and reduce dimensionality by keeping only important features.',
        code: `from sklearn.datasets import load_diabetes
from sklearn.ensemble import RandomForestRegressor
from sklearn.feature_selection import SelectKBest, f_regression, RFE
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score
import numpy as np

# Load diabetes dataset
diabetes = load_diabetes()
X, y = diabetes.data, diabetes.target
feature_names = diabetes.feature_names

print("Diabetes Progression Prediction")
print(f"Features: {feature_names}")
print(f"Samples: {len(y)}")

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Method 1: Random Forest Feature Importances
print("\\n" + "="*50)
print("Method 1: Random Forest Feature Importances")
print("="*50)

rf = RandomForestRegressor(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

# Get feature importances
importances = rf.feature_importances_
indices = np.argsort(importances)[::-1]

print("\\nFeature Ranking:")
for i, idx in enumerate(indices):
    print(f"{i+1}. {feature_names[idx]}: {importances[idx]:.4f}")

# Method 2: Statistical Feature Selection (ANOVA F-test)
print("\\n" + "="*50)
print("Method 2: Statistical Feature Selection (F-test)")
print("="*50)

selector = SelectKBest(f_regression, k=5)
X_train_selected = selector.fit_transform(X_train, y_train)
X_test_selected = selector.transform(X_test)

selected_features = [feature_names[i] for i in range(len(feature_names)) 
                     if selector.get_support()[i]]
print(f"\\nTop 5 features selected: {selected_features}")

# Train model with selected features
rf_selected = RandomForestRegressor(n_estimators=100, random_state=42)
rf_selected.fit(X_train_selected, y_train)

# Compare performance
y_pred_all = rf.predict(X_test)
y_pred_selected = rf_selected.predict(X_test_selected)

r2_all = r2_score(y_test, y_pred_all)
r2_selected = r2_score(y_test, y_pred_selected)

print(f"\\nModel Performance:")
print(f"All features ({len(feature_names)}): R² = {r2_all:.3f}")
print(f"Selected features ({len(selected_features)}): R² = {r2_selected:.3f}")

# Method 3: Recursive Feature Elimination
print("\\n" + "="*50)
print("Method 3: Recursive Feature Elimination (RFE)")
print("="*50)

rfe = RFE(estimator=RandomForestRegressor(n_estimators=100, random_state=42), 
          n_features_to_select=5)
rfe.fit(X_train, y_train)

rfe_features = [feature_names[i] for i in range(len(feature_names)) 
                if rfe.support_[i]]
print(f"\\nTop 5 features by RFE: {rfe_features}")

print("\\n" + "="*50)
print("Summary:")
print("="*50)
print("✓ Use feature importance to understand your model")
print("✓ Feature selection can reduce overfitting and training time")
print("✓ Different methods may select different features")
print("✓ Validate that fewer features don't hurt performance too much")`,
        output: {
          description: 'Compares three feature selection methods on diabetes dataset with 10 features. Random Forest importances rank bmi and s5 as most important. SelectKBest using F-test chooses 5 statistical significant features. RFE recursively eliminates features to find best 5. Shows that using only 5 selected features achieves similar R² (~0.45) as all 10 features (~0.47), proving many features add little value. Demonstrates feature selection reduces model complexity while maintaining performance.'
        }
      },
      {
        title: '9. Multi-class Classification with SVM',
        explanation: 'Support Vector Machines for complex multi-class problems. SVM finds optimal boundaries between classes.',
        code: `from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import numpy as np

# Load wine dataset (3 classes)
wine = load_wine()
X, y = wine.data, wine.target

print("Wine Classification Dataset")
print(f"Samples: {len(y)}, Features: {X.shape[1]}")
print(f"Classes: {wine.target_names}")
print(f"Class distribution: {np.bincount(y)}")

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Scale features (crucial for SVM)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Try different SVM kernels
kernels = ['linear', 'rbf', 'poly']

print("\\nComparing SVM Kernels:")
print("="*50)

best_accuracy = 0
best_kernel = None
best_model = None

for kernel in kernels:
    print(f"\\nKernel: {kernel.upper()}")
    
    # Train SVM
    svm = SVC(kernel=kernel, random_state=42)
    svm.fit(X_train_scaled, y_train)
    
    # Predict
    y_pred = svm.predict(X_test_scaled)
    
    # Evaluate
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Accuracy: {accuracy:.3f}")
    
    # Track best model
    if accuracy > best_accuracy:
        best_accuracy = accuracy
        best_kernel = kernel
        best_model = svm

# Detailed evaluation of best model
print(f"\\n{'='*50}")
print(f"Best Kernel: {best_kernel.upper()} (Accuracy: {best_accuracy:.3f})")
print(f"{'='*50}")

y_pred_best = best_model.predict(X_test_scaled)

print("\\nClassification Report:")
print(classification_report(y_test, y_pred_best, target_names=wine.target_names))

print("\\nConfusion Matrix:")
cm = confusion_matrix(y_test, y_pred_best)
print(cm)

# Analyze confusion matrix
print("\\nPer-Class Performance:")
for i, class_name in enumerate(wine.target_names):
    correct = cm[i, i]
    total = cm[i].sum()
    accuracy_class = correct / total
    print(f"{class_name}: {correct}/{total} correct ({accuracy_class:.1%})")

print("\\nSVM Insights:")
print("✓ Linear kernel: Fast, works well for linearly separable data")
print("✓ RBF kernel: Flexible, handles non-linear boundaries")
print("✓ Poly kernel: Can capture polynomial relationships")
print("✓ Always scale features before using SVM")`,
        output: {
          description: 'Tests three SVM kernels (linear, RBF, polynomial) on wine classification with 3 classes. RBF kernel typically achieves best accuracy (~0.97-1.0) on this dataset. Shows detailed classification report with precision/recall/F1 for each wine type. Confusion matrix reveals which classes are confused. Per-class analysis shows if model performs well on all classes or struggles with specific ones. Demonstrates kernel choice significantly impacts SVM performance.'
        }
      },
      {
        title: '10. Model Persistence and Deployment',
        explanation: 'Save trained models and load them later for predictions. Essential for deploying models to production.',
        code: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
import joblib
import numpy as np

# Train a model
print("Training a model...")
iris = load_iris()
X, y = iris.data, iris.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create pipeline (better for deployment)
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier(n_estimators=100, random_state=42))
])

pipeline.fit(X_train, y_train)

# Evaluate
accuracy = pipeline.score(X_test, y_test)
print(f"Model Accuracy: {accuracy:.3f}")

# Save model to disk
model_filename = 'iris_model.pkl'
joblib.dump(pipeline, model_filename)
print(f"\\nModel saved to '{model_filename}'")

# Get file size
import os
file_size = os.path.getsize(model_filename) / 1024  # KB
print(f"Model file size: {file_size:.2f} KB")

# Load model from disk (simulating production environment)
print(f"\\nLoading model from '{model_filename}'...")
loaded_model = joblib.load(model_filename)
print("Model loaded successfully!")

# Make predictions with loaded model
print("\\nTesting loaded model...")

# Example: New flower measurements
new_samples = np.array([
    [5.1, 3.5, 1.4, 0.2],  # Should be Setosa
    [6.2, 2.9, 4.3, 1.3],  # Should be Versicolor  
    [7.3, 2.9, 6.3, 1.8],  # Should be Virginica
])

predictions = loaded_model.predict(new_samples)
probabilities = loaded_model.predict_proba(new_samples)

print("\\nPredictions for new samples:")
for i, (sample, pred, proba) in enumerate(zip(new_samples, predictions, probabilities)):
    print(f"\\nSample {i+1}: {sample}")
    print(f"  Predicted class: {iris.target_names[pred]}")
    print(f"  Probabilities:")
    for j, class_name in enumerate(iris.target_names):
        print(f"    {class_name}: {proba[j]:.3f}")

# Verify loaded model performs identically
test_accuracy = loaded_model.score(X_test, y_test)
print(f"\\nLoaded model accuracy: {test_accuracy:.3f}")
print(f"Original model accuracy: {accuracy:.3f}")
print(f"Match: {test_accuracy == accuracy}")

print("\\nDeployment Best Practices:")
print("✓ Save entire pipeline (preprocessing + model)")
print("✓ Use joblib for scikit-learn models (efficient)")
print("✓ Version your models (iris_model_v1.pkl, v2.pkl, etc.)")
print("✓ Store model metadata (training date, accuracy, features)")
print("✓ Test loaded model before deploying to production")

# Clean up (remove saved file)
os.remove(model_filename)
print(f"\\n(Cleaned up: removed '{model_filename}')")`,
        output: {
          description: 'Demonstrates complete model lifecycle: trains iris classifier pipeline (accuracy ~0.97), saves to disk (~150KB file), loads from disk, and makes predictions on new samples. Shows predictions with class probabilities for 3 new flower measurements. Verifies loaded model performs identically to original. Emphasizes best practices: save entire pipeline, use joblib, version models, and test before deployment. Essential for moving models from development to production.'
        }
      }
    ]
  },

  quiz: [
    {
      question: 'Why is it important to split data into training and testing sets?',
      options: [
        'To make the model train faster',
        'To evaluate model performance on unseen data and detect overfitting',
        'To reduce the dataset size',
        'To make the code more organized'
      ],
      correctAnswer: 1,
      explanation: 'Splitting data allows us to train on one portion and test on another unseen portion, giving an honest estimate of how the model will perform on new data. Testing on training data would give artificially high performance.'
    },
    {
      question: 'What does feature scaling do and when is it necessary?',
      options: [
        'It increases the number of features in the dataset',
        'It normalizes feature values to similar ranges, necessary for distance-based algorithms',
        'It removes unimportant features from the dataset',
        'It converts categorical features to numerical'
      ],
      correctAnswer: 1,
      explanation: 'Feature scaling (StandardScaler, MinMaxScaler) transforms features to similar ranges. This is crucial for algorithms using distances (KNN, SVM, Neural Networks) or gradient descent (Logistic Regression) to prevent features with large ranges from dominating.'
    },
    {
      question: 'What is the main advantage of using Pipeline in scikit-learn?',
      options: [
        'It makes models train faster',
        'It prevents data leakage by applying preprocessing consistently',
        'It automatically selects the best algorithm',
        'It reduces memory usage'
      ],
      correctAnswer: 1,
      explanation: 'Pipeline ensures preprocessing steps (scaling, imputation) are fitted only on training data and then consistently applied to test/validation data, preventing data leakage. It also makes code cleaner and deployment easier.'
    },
    {
      question: 'What is cross-validation and why is it better than a single train-test split?',
      options: [
        'It validates that your code has no errors',
        'It splits data multiple ways to get more reliable performance estimates',
        'It automatically fixes errors in your dataset',
        'It selects the best features for your model'
      ],
      correctAnswer: 1,
      explanation: 'Cross-validation (e.g., 5-fold CV) splits data into k parts, trains k times using different train/test combinations, and averages the results. This gives more robust performance estimates than a single split which might be lucky or unlucky.'
    },
    {
      question: 'What is the difference between accuracy and F1 score?',
      options: [
        'They are the same metric with different names',
        'Accuracy considers all predictions equally, F1 balances precision and recall',
        'F1 is only for regression, accuracy for classification',
        'Accuracy is always better than F1 score'
      ],
      correctAnswer: 1,
      explanation: 'Accuracy is (correct predictions)/(total predictions). F1 score is the harmonic mean of precision and recall. For imbalanced datasets, accuracy can be misleading (e.g., 95% accuracy by always predicting majority class), while F1 gives better insight into minority class performance.'
    },
    {
      question: 'What does RandomForestClassifier do differently than DecisionTreeClassifier?',
      options: [
        'It trains faster',
        'It builds multiple decision trees and averages their predictions',
        'It only works with categorical data',
        'It uses less memory'
      ],
      correctAnswer: 1,
      explanation: 'Random Forest is an ensemble method that creates multiple decision trees (typically 100+) using random subsets of features and data (bootstrap sampling). Final prediction is majority vote, which reduces overfitting and improves generalization compared to a single decision tree.'
    },
    {
      question: 'When should you use GridSearchCV?',
      options: [
        'To split your data into training and testing sets',
        'To find optimal hyperparameters by testing many combinations',
        'To scale your features',
        'To remove outliers from your dataset'
      ],
      correctAnswer: 1,
      explanation: 'GridSearchCV exhaustively tests all combinations of specified hyperparameters using cross-validation, automatically finding the best combination for your model. It helps optimize model performance without manual trial-and-error.'
    },
    {
      question: 'What does the parameter class_weight="balanced" do in classification?',
      options: [
        'It makes the model train faster',
        'It adjusts weights to handle imbalanced classes better',
        'It requires equal numbers of samples per class',
        'It removes outliers from minority classes'
      ],
      correctAnswer: 1,
      explanation: 'class_weight="balanced" automatically adjusts weights inversely proportional to class frequencies. This penalizes misclassifying minority class more, improving recall on rare classes in imbalanced datasets.'
    },
    {
      question: 'What is the purpose of the random_state parameter?',
      options: [
        'To make the model more accurate',
        'To ensure reproducible results across different runs',
        'To speed up training time',
        'To automatically tune hyperparameters'
      ],
      correctAnswer: 1,
      explanation: 'random_state sets the seed for random number generation, ensuring that operations involving randomness (train_test_split, Random Forest, etc.) produce the same results each time. This is crucial for reproducible experiments and debugging.'
    },
    {
      question: 'Why is it wrong to fit StandardScaler on the entire dataset before train_test_split?',
      options: [
        'It will cause an error',
        'It causes data leakage - test data statistics influence training',
        'It makes scaling less accurate',
        'StandardScaler must always be fitted after splitting'
      ],
      correctAnswer: 1,
      explanation: 'Fitting scaler on entire dataset before splitting causes data leakage: test set statistics (mean, std) influence how training data is scaled. Always fit preprocessing only on training data, then transform test data using training statistics.'
    },
    {
      question: 'What does R² (R-squared) score measure in regression?',
      options: [
        'The average prediction error in original units',
        'The proportion of variance in target variable explained by the model',
        'The number of features used',
        'The training time'
      ],
      correctAnswer: 1,
      explanation: 'R² ranges from 0 to 1 (can be negative for poor models) and represents the proportion of variance in the target variable that is explained by the model. R²=0.8 means the model explains 80% of the variance. It is unitless and useful for comparing models.'
    },
    {
      question: 'What is overfitting and how can you detect it?',
      options: [
        'When model is too simple; detected by low training accuracy',
        'When model memorizes training data; detected by large gap between training and test performance',
        'When model trains too slowly',
        'When dataset is too small'
      ],
      correctAnswer: 1,
      explanation: 'Overfitting occurs when a model learns noise and details specific to training data, hurting generalization. Classic sign: high training accuracy (e.g., 99%) but much lower test accuracy (e.g., 75%). Use cross-validation, regularization, and simpler models to combat overfitting.'
    },
    {
      question: 'What does K-Means clustering algorithm do?',
      options: [
        'It predicts labels for new data points',
        'It groups data into K clusters based on similarity',
        'It reduces the number of features to K',
        'It performs K rounds of cross-validation'
      ],
      correctAnswer: 1,
      explanation: 'K-Means is an unsupervised algorithm that partitions data into K clusters by iteratively assigning points to nearest cluster center and updating centers. It minimizes within-cluster variance without using labels.'
    },
    {
      question: 'Why might you use PCA (Principal Component Analysis)?',
      options: [
        'To predict target variable values',
        'To reduce dimensionality while retaining most variance',
        'To handle missing values',
        'To perform classification'
      ],
      correctAnswer: 1,
      explanation: 'PCA reduces dimensionality by creating new features (principal components) that are linear combinations of original features, ordered by variance explained. Useful for visualization (reduce to 2-3D), speeding up training, and removing multicollinearity.'
    },
    {
      question: 'What is the confusion matrix used for?',
      options: [
        'To visualize feature importance',
        'To show detailed breakdown of correct and incorrect predictions per class',
        'To plot decision boundaries',
        'To compare different algorithms'
      ],
      correctAnswer: 1,
      explanation: 'Confusion matrix is a table showing true vs predicted labels. Diagonal shows correct predictions, off-diagonal shows errors. It reveals which classes are confused with each other and enables calculating precision, recall, and F1 score for each class.'
    },
    {
      question: 'When would you use Logistic Regression despite its name suggesting regression?',
      options: [
        'For predicting continuous values',
        'For binary or multi-class classification problems',
        'Only for linear relationships',
        'Never - it is outdated'
      ],
      correctAnswer: 1,
      explanation: 'Despite the name, Logistic Regression is a classification algorithm. It models probability of class membership using logistic (sigmoid) function. It is fast, interpretable, works well for linearly separable data, and serves as a good baseline for classification tasks.'
    },
    {
      question: 'What does n_estimators parameter control in Random Forest?',
      options: [
        'The number of features to consider',
        'The number of decision trees in the forest',
        'The maximum depth of each tree',
        'The number of cross-validation folds'
      ],
      correctAnswer: 1,
      explanation: 'n_estimators sets the number of decision trees in the Random Forest. More trees generally improve performance and stability but increase training time. Typical values: 100-500. Beyond a point, more trees give diminishing returns.'
    },
    {
      question: 'Why might you choose SVM over other classifiers?',
      options: [
        'It is always the fastest algorithm',
        'It works well in high dimensions and with clear margins of separation',
        'It requires no hyperparameter tuning',
        'It only works with numerical data'
      ],
      correctAnswer: 1,
      explanation: 'SVM excels when: (1) data is high-dimensional, (2) clear margin exists between classes, (3) using kernel trick for non-linear boundaries. It is memory-efficient (uses support vectors only) but can be slow on large datasets. Requires feature scaling.'
    },
    {
      question: 'What is the purpose of the fit() method in scikit-learn?',
      options: [
        'To make predictions on new data',
        'To train the model by learning from training data',
        'To evaluate model performance',
        'To save the model to disk'
      ],
      correctAnswer: 1,
      explanation: 'fit() trains the model on provided data. It learns parameters (e.g., tree splits, coefficients) from training data. After fitting, use predict() for predictions, score() for evaluation. Key pattern: fit on training data, predict/transform on test data.'
    },
    {
      question: 'What does the silhouette score measure in clustering?',
      options: [
        'The number of clusters',
        'How well-separated and cohesive clusters are (higher is better)',
        'The total distance between points',
        'The training time'
      ],
      correctAnswer: 1,
      explanation: 'Silhouette score ranges from -1 to 1. Positive values indicate points are well-matched to their cluster and poorly matched to neighboring clusters. Values near 0 suggest overlapping clusters. Negative values indicate points may be in wrong cluster. Helps determine optimal number of clusters.'
    }
  ]
};
