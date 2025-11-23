// This file will be created with examples 1-10 from the original scikit-learn.js
// I'll continue building this in the next step
export const scikitLearnIntermediate = {
  id: 'scikit-learn-intermediate',
  title: 'Scikit-learn Intermediate',
  category: 'Data Science & AI',
  difficulty: 'intermediate',
  description: 'Master essential ML techniques: cross-validation, pipelines, and model optimization',
  
  content: {
    overview: `Build on your ML fundamentals with intermediate techniques. Learn to create robust models using cross-validation, automate workflows with pipelines, and optimize performance with hyperparameter tuning.

What You'll Learn:

- Cross-validation for reliable model evaluation  
- Hyperparameter tuning with GridSearchCV
- Building ML pipelines to prevent data leakage
- Clustering for unsupervised learning
- Handling imbalanced datasets
- Feature importance and selection
- Model persistence and deployment

Why These Skills Matter:

Cross-validation gives more reliable performance estimates than simple train-test splits. Pipelines prevent data leakage and make code production-ready. Hyperparameter tuning squeezes out maximum performance from your models.`,

    keyPoints: [
      'Cross-validation provides more reliable performance estimates',
      'Pipelines prevent data leakage and make code reproducible',
      'GridSearchCV automates hyperparameter tuning',
      'Feature selection improves model performance and interpretability',
      'Clustering finds patterns without labeled data',
      'Handle imbalanced data with class_weight or resampling',
      'Save models with joblib for production deployment',
      'Combine preprocessing and modeling in pipelines',
      'Use multiple metrics to evaluate model quality',
      'Feature importance helps understand model decisions'
    ],

    useCases: [
      {
        title: 'Customer Churn Prediction',
        description: 'Use cross-validation and pipelines to build robust churn prediction models.',
        example: 'Telecom company achieves 85% accuracy with RandomForest and proper validation'
      },
      {
        title: 'Product Recommendation',
        description: 'Clustering groups similar products for better recommendations.',
        example: 'E-commerce site increases sales by 25% with K-Means product segmentation'
      },
      {
        title: 'Credit Risk Assessment',
        description: 'Handle imbalanced data (few defaults, many good loans) properly.',
        example: 'Bank improves fraud detection recall from 60% to 85% with SMOTE'
      }
    ],

    dos: [
      'Always use cross-validation for model selection',
      'Build pipelines to automate preprocessing and prevent leakage',
      'Tune hyperparameters systematically with GridSearchCV',
      'Save entire pipelines, not just models',
      'Use stratified cross-validation for classification',
      'Check feature importance to understand models',
      'Handle imbalanced data with appropriate techniques',
      'Validate on multiple metrics, not just accuracy'
    ],

    donts: [
      "Don't tune hyperparameters on test data",
      "Don't forget to include preprocessing in pipelines",
      "Don't use default hyperparameters without tuning",
      "Don't ignore class imbalance in classification",
      "Don't save scalers and models separately",
      "Don't skip cross-validation for final model selection",
      "Don't use too many cross-validation folds on small datasets",
      "Don't forget to set random_state for reproducibility"
    ],

    bestPractices: [
      'Use 5-10 folds for cross-validation (5 for small datasets, 10 for larger)',
      'Combine Pipeline with GridSearchCV for proper hyperparameter tuning',
      'Use StratifiedKFold for classification to maintain class proportions',
      'For imbalanced data, use stratified splits and appropriate metrics (F1, ROC-AUC)',
      'Save models with joblib.dump() including versioning information',
      'Use RandomizedSearchCV for large hyperparameter spaces',
      'Always inspect feature_importances_ to understand model decisions',
      'Use cross_validate() to evaluate multiple metrics simultaneously'
    ],

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
import numpy as np

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
    ],

    quiz: [
      {
        question: "Why is it important to use scaler.transform(X_test) instead of scaler.fit_transform(X_test)?",
        options: [
          "It's faster",
          "To prevent data leakage by using only training data statistics",
          "To make the code shorter",
          "There's no difference"
        ],
        correctAnswer: 1,
        explanation: "Using transform() applies the scaling parameters learned from the training data to the test data. Using fit_transform() on test data would leak information and give unrealistic performance estimates."
      },
      {
        question: "What is the main advantage of cross-validation over a single train-test split?",
        options: [
          "It's faster to compute",
          "It requires less data",
          "It provides more reliable performance estimates by testing on multiple data splits",
          "It always produces higher accuracy"
        ],
        correctAnswer: 2,
        explanation: "Cross-validation splits the data k different ways, training and testing k times. This gives a more robust estimate of model performance and reduces the chance that results are due to a lucky split."
      },
      {
        question: "In GridSearchCV, what does the cv parameter control?",
        options: [
          "The number of CPU cores to use",
          "The number of cross-validation folds",
          "The number of parameters to try",
          "The convergence criteria"
        ],
        correctAnswer: 1,
        explanation: "The cv parameter specifies the number of cross-validation folds. For example, cv=5 means the data is split into 5 parts, and each parameter combination is evaluated 5 times using different training/validation splits."
      },
      {
        question: "What is the primary benefit of using a Pipeline?",
        options: [
          "It makes code run faster",
          "It prevents data leakage by ensuring preprocessing steps are fit only on training data",
          "It reduces memory usage",
          "It automatically selects the best algorithm"
        ],
        correctAnswer: 1,
        explanation: "Pipelines ensure that preprocessing steps (like scaling or PCA) are fit only on the training data and then applied to test data. This prevents data leakage and makes it easy to save/deploy the entire workflow as a single object."
      },
      {
        question: "Which metric is best for evaluating clustering quality when you know the true labels?",
        options: [
          "Accuracy",
          "Inertia only",
          "Silhouette score or adjusted Rand index",
          "Mean squared error"
        ],
        correctAnswer: 2,
        explanation: "Silhouette score measures how similar points are to their own cluster vs other clusters. Adjusted Rand index compares predicted clusters to true labels. Inertia alone can decrease indefinitely as k increases, making it less useful for choosing k."
      },
      {
        question: "For an imbalanced dataset with 95% negative and 5% positive class, which metric is most misleading?",
        options: [
          "Accuracy",
          "Precision",
          "Recall",
          "F1-score"
        ],
        correctAnswer: 0,
        explanation: "Accuracy can be very misleading for imbalanced data. A model that always predicts the majority class would achieve 95% accuracy but be useless. Precision, recall, and F1-score specifically focus on the minority class performance."
      },
      {
        question: "What does class_weight='balanced' do in RandomForestClassifier?",
        options: [
          "Ensures all features have equal weight",
          "Automatically adjusts class weights inversely proportional to class frequencies",
          "Balances the tree structure",
          "Equalizes training and test set sizes"
        ],
        correctAnswer: 1,
        explanation: "class_weight='balanced' automatically calculates weights inversely proportional to class frequencies. This penalizes mistakes on minority classes more heavily, helping the model pay more attention to rare classes in imbalanced datasets."
      },
      {
        question: "When using SelectKBest for feature selection, what happens to the test data?",
        options: [
          "It's used to determine which features to keep",
          "It's transformed using features selected from training data only",
          "It's discarded",
          "It's combined with training data first"
        ],
        correctAnswer: 1,
        explanation: "Feature selection should be done on training data only using fit_transform(). Then the same selected features are applied to test data using transform(). Using test data for feature selection would cause data leakage."
      },
      {
        question: "Which SVM kernel is best when you suspect non-linear decision boundaries?",
        options: [
          "Linear kernel",
          "RBF (Radial Basis Function) kernel",
          "No kernel",
          "Polynomial kernel of degree 1"
        ],
        correctAnswer: 1,
        explanation: "RBF kernel can handle non-linear decision boundaries by mapping data to a higher-dimensional space. Linear kernels only work well when classes are linearly separable. Polynomial kernels can also handle non-linearity but RBF is often more flexible and easier to tune."
      },
      {
        question: "Why save the entire Pipeline instead of just the trained model?",
        options: [
          "Pipelines are smaller files",
          "To ensure preprocessing steps (scaling, PCA, etc.) are applied correctly to new data",
          "Pipelines are faster to load",
          "It's required by joblib"
        ],
        correctAnswer: 1,
        explanation: "Saving the pipeline preserves all preprocessing steps (StandardScaler, PCA, etc.) with their fitted parameters. This ensures new data is transformed exactly the same way as training data. Saving only the model would lose the preprocessing, causing errors or poor predictions."
      }
    ],

    cheatsheet: `
# SCIKIT-LEARN INTERMEDIATE CHEAT SHEET

## Cross-Validation
from sklearn.model_selection import cross_val_score, StratifiedKFold

# Simple cross-validation
scores = cross_val_score(model, X, y, cv=5)
print(f"Accuracy: {scores.mean():.3f} (+/- {scores.std():.3f})")

# Stratified K-Fold (maintains class proportions)
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X, y, cv=skf)

## Pipelines
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier(random_state=42))
])
pipeline.fit(X_train, y_train)
y_pred = pipeline.predict(X_test)

## GridSearchCV
from sklearn.model_selection import GridSearchCV

param_grid = {
    'classifier__n_estimators': [50, 100, 200],
    'classifier__max_depth': [5, 10, 15]
}
grid = GridSearchCV(pipeline, param_grid, cv=5)
grid.fit(X_train, y_train)
print(f"Best params: {grid.best_params_}")
print(f"Best score: {grid.best_score_:.3f}")

## Handling Imbalanced Data
from sklearn.utils.class_weight import compute_class_weight
import numpy as np

# Option 1: class_weight parameter
model = RandomForestClassifier(class_weight='balanced')

# Option 2: SMOTE (requires imbalanced-learn)
# from imblearn.over_sampling import SMOTE
# smote = SMOTE(random_state=42)
# X_resampled, y_resampled = smote.fit_resample(X_train, y_train)

## Feature Importance
rf = RandomForestClassifier(n_estimators=100)
rf.fit(X_train, y_train)

# Get importance scores
importances = rf.feature_importances_
indices = np.argsort(importances)[::-1]

print("Feature ranking:")
for i in range(X.shape[1]):
    print(f"{i+1}. Feature {indices[i]}: {importances[indices[i]]:.4f}")

## Model Persistence
import joblib

# Save pipeline (includes preprocessing and model)
joblib.dump(pipeline, 'model_pipeline.pkl')

# Load
loaded_pipeline = joblib.load('model_pipeline.pkl')
predictions = loaded_pipeline.predict(X_new)
    `
  }
};
