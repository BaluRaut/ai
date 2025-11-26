// Practice Assignments - Machine Learning (Intermediate Level)

export const machineLearningAssignments = {
  // Linear Regression
  'linear-regression': [
    {
      id: 1,
      title: 'Predict Student Scores',
      difficulty: 'Easy',
      description: 'Create a linear regression model to predict exam scores based on study hours.',
      hints: [
        'Import LinearRegression from sklearn.linear_model',
        'Use fit() to train and predict() to make predictions',
        'Calculate R² score to evaluate'
      ],
      starterCode: `from sklearn.linear_model import LinearRegression
import numpy as np

# Data: study hours
X = np.array([1, 2, 3, 4, 5, 6, 7, 8]).reshape(-1, 1)
y = np.array([45, 55, 60, 65, 72, 78, 85, 90])

# TODO: Create and train model
model = None

# TODO: Predict score for 5.5 hours
prediction = None

print(f"Predicted score for 5.5 hours: {prediction}")`,
      solution: `from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([1, 2, 3, 4, 5, 6, 7, 8]).reshape(-1, 1)
y = np.array([45, 55, 60, 65, 72, 78, 85, 90])

# Create and train model
model = LinearRegression()
model.fit(X, y)

# Predict for 5.5 hours
prediction = model.predict([[5.5]])[0]
print(f"Predicted score for 5.5 hours: {prediction:.1f}")
print(f"Equation: score = {model.coef_[0]:.2f} * hours + {model.intercept_:.2f}")`
    },
    {
      id: 2,
      title: 'Multiple Linear Regression',
      difficulty: 'Medium',
      description: 'Build multiple linear regression for house prices.',
      hints: [
        'Multiple features: size, bedrooms, age',
        'Split data into train/test sets',
        'Evaluate with R² score'
      ],
      starterCode: `from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score
import numpy as np

# Features: [size_sqft, bedrooms, age_years]
X = np.array([
    [1500, 3, 10], [2000, 4, 5], [1200, 2, 15],
    [2500, 4, 2], [1800, 3, 8], [2200, 4, 3],
    [1600, 3, 12], [1900, 3, 6]
])
y = np.array([300, 400, 250, 500, 350, 450, 320, 380])

# TODO: Split data 80/20
# TODO: Train model and evaluate

print(f"R-squared: ___")`,
      solution: `from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score
import numpy as np

X = np.array([
    [1500, 3, 10], [2000, 4, 5], [1200, 2, 15],
    [2500, 4, 2], [1800, 3, 8], [2200, 4, 3],
    [1600, 3, 12], [1900, 3, 6]
])
y = np.array([300, 400, 250, 500, 350, 450, 320, 380])

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate
r2 = r2_score(y_test, model.predict(X_test))
print(f"R-squared: {r2:.3f}")

# Feature importance
for name, coef in zip(['Size', 'Bedrooms', 'Age'], model.coef_):
    print(f"  {name}: {coef:.2f}")`
    }
  ],

  // Logistic Regression (ID: 2)
  '2': [
    {
      id: 1,
      title: 'Binary Classification',
      difficulty: 'Easy',
      description: 'Build a spam email classifier.',
      hints: [
        'LogisticRegression for binary classification',
        'Use CountVectorizer for text',
        'predict_proba gives probabilities'
      ],
      starterCode: `from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import CountVectorizer

emails = ["Win free money!", "Meeting tomorrow", "Claim prize now!", 
          "Project update", "You won lottery!", "Lunch at noon?"]
labels = [1, 0, 1, 0, 1, 0]  # 1=spam

# TODO: Convert text to numbers
vectorizer = CountVectorizer()
X = None

# TODO: Train model

# TODO: Predict "Free gift for you!"
print(f"Is spam: ___")`,
      solution: `from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import CountVectorizer

emails = ["Win free money!", "Meeting tomorrow", "Claim prize now!", 
          "Project update", "You won lottery!", "Lunch at noon?"]
labels = [1, 0, 1, 0, 1, 0]

# Convert text
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(emails)

# Train
model = LogisticRegression()
model.fit(X, labels)

# Test
test = vectorizer.transform(["Free gift for you!"])
pred = model.predict(test)[0]
prob = model.predict_proba(test)[0][1]

print(f"Is spam: {'Yes' if pred == 1 else 'No'}")
print(f"Spam probability: {prob:.1%}")`
    }
  ],

  // Decision Trees (ID: 3)
  '3': [
    {
      id: 1,
      title: 'Decision Tree Classifier',
      difficulty: 'Easy',
      description: 'Build an interpretable decision tree.',
      hints: [
        'DecisionTreeClassifier from sklearn.tree',
        'max_depth controls complexity',
        'Use export_text to see rules'
      ],
      starterCode: `from sklearn.tree import DecisionTreeClassifier, export_text
import numpy as np

# Weather data: [sunny, warm, windy] -> play
X = np.array([
    [1, 1, 0], [1, 1, 1], [0, 1, 0],
    [0, 0, 0], [0, 0, 1], [1, 0, 0]
])
y = np.array([1, 1, 1, 0, 0, 1])

# TODO: Train decision tree
model = None

# TODO: Print decision rules
print("Decision Rules:")`,
      solution: `from sklearn.tree import DecisionTreeClassifier, export_text
import numpy as np

X = np.array([
    [1, 1, 0], [1, 1, 1], [0, 1, 0],
    [0, 0, 0], [0, 0, 1], [1, 0, 0]
])
y = np.array([1, 1, 1, 0, 0, 1])

# Train
model = DecisionTreeClassifier(max_depth=3)
model.fit(X, y)

# Print rules
features = ['sunny', 'warm', 'windy']
print("Decision Rules:")
print(export_text(model, feature_names=features))

# Feature importance
print("\\nFeature Importance:")
for name, imp in zip(features, model.feature_importances_):
    print(f"  {name}: {imp:.1%}")`
    }
  ],

  // Random Forest (ID: 4)
  '4': [
    {
      id: 1,
      title: 'Random Forest Classifier',
      difficulty: 'Medium',
      description: 'Use ensemble of trees for better accuracy.',
      hints: [
        'RandomForestClassifier with n_estimators',
        'More trees = more stable',
        'feature_importances_ shows key features'
      ],
      starterCode: `from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

iris = load_iris()
X, y = iris.data, iris.target

# TODO: Split 80/20
# TODO: Train RandomForest with 100 trees
# TODO: Get accuracy

print(f"Random Forest Accuracy: ___%")`,
      solution: `from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

iris = load_iris()
X, y = iris.data, iris.target

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate
accuracy = model.score(X_test, y_test)
print(f"Random Forest Accuracy: {accuracy:.1%}")

print("\\nFeature Importance:")
for name, imp in zip(iris.feature_names, model.feature_importances_):
    print(f"  {name}: {imp:.1%}")`
    }
  ],

  // SVM (ID: 5)
  '5': [
    {
      id: 1,
      title: 'SVM Classification',
      difficulty: 'Medium',
      description: 'Use Support Vector Machine for classification.',
      hints: [
        'SVC from sklearn.svm',
        'Always scale features for SVM',
        'Try different kernels: linear, rbf, poly'
      ],
      starterCode: `from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

iris = load_iris()
X, y = iris.data, iris.target

# TODO: Scale features
# TODO: Split and train SVC
# TODO: Compare linear vs rbf kernel

print(f"SVM Accuracy: ___%")`,
      solution: `from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

iris = load_iris()
X, y = iris.data, iris.target

# Scale
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Compare kernels
for kernel in ['linear', 'rbf']:
    model = SVC(kernel=kernel)
    model.fit(X_train, y_train)
    acc = model.score(X_test, y_test)
    print(f"SVM ({kernel}): {acc:.1%}")`
    }
  ],

  // KNN (ID: 6)
  '6': [
    {
      id: 1,
      title: 'K-Nearest Neighbors',
      difficulty: 'Easy',
      description: 'Classify using nearest neighbors.',
      hints: [
        'KNeighborsClassifier with n_neighbors=K',
        'Always scale features',
        'Try different K values'
      ],
      starterCode: `from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

iris = load_iris()
X, y = iris.data, iris.target

# TODO: Scale, split, train KNN
# TODO: Try K=3, 5, 7

print("KNN Performance:")`,
      solution: `from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

iris = load_iris()
X, y = iris.data, iris.target

# Scale
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

print("KNN Performance:")
for k in [3, 5, 7]:
    model = KNeighborsClassifier(n_neighbors=k)
    model.fit(X_train, y_train)
    acc = model.score(X_test, y_test)
    print(f"  K={k}: {acc:.1%}")`
    }
  ],

  // K-Means (ID: 8)
  '8': [
    {
      id: 1,
      title: 'Customer Segmentation',
      difficulty: 'Medium',
      description: 'Use K-Means for clustering.',
      hints: [
        'KMeans with n_clusters=K',
        'Use inertia_ to evaluate',
        'Elbow method for optimal K'
      ],
      starterCode: `from sklearn.cluster import KMeans
import numpy as np

# Customer data: [income, spending]
customers = np.array([
    [15, 39], [16, 81], [17, 6],
    [70, 40], [71, 70], [72, 5],
    [40, 50], [42, 52], [44, 54]
])

# TODO: Create KMeans with 3 clusters
# TODO: Fit and get labels

print("Customer Segments:")`,
      solution: `from sklearn.cluster import KMeans
import numpy as np

customers = np.array([
    [15, 39], [16, 81], [17, 6],
    [70, 40], [71, 70], [72, 5],
    [40, 50], [42, 52], [44, 54]
])

# K-Means
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
labels = kmeans.fit_predict(customers)

print("Customer Segments:")
for i, (cust, label) in enumerate(zip(customers, labels)):
    print(f"  Customer {i+1}: Segment {label+1}")

print(f"\\nCluster Centers:")
for i, center in enumerate(kmeans.cluster_centers_):
    print(f"  Segment {i+1}: Income={center[0]:.0f}, Spending={center[1]:.0f}")`
    }
  ],

  // PCA (ID: 9)
  '9': [
    {
      id: 1,
      title: 'Dimensionality Reduction',
      difficulty: 'Medium',
      description: 'Reduce dimensions with PCA.',
      hints: [
        'PCA from sklearn.decomposition',
        'n_components = target dimensions',
        'explained_variance_ratio_ shows info kept'
      ],
      starterCode: `from sklearn.decomposition import PCA
from sklearn.datasets import load_iris

iris = load_iris()
X = iris.data  # 4 dimensions

print(f"Original: {X.shape[1]} dimensions")

# TODO: Reduce to 2 dimensions
# TODO: Check variance explained

print(f"Reduced: ___ dimensions")`,
      solution: `from sklearn.decomposition import PCA
from sklearn.datasets import load_iris

iris = load_iris()
X = iris.data

print(f"Original: {X.shape[1]} dimensions")

# PCA
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)

print(f"Reduced: {X_reduced.shape[1]} dimensions")

print(f"\\nVariance explained:")
for i, var in enumerate(pca.explained_variance_ratio_):
    print(f"  PC{i+1}: {var:.1%}")
print(f"Total: {sum(pca.explained_variance_ratio_):.1%}")`
    }
  ],

  // Cross-Validation (ID: 13)
  '13': [
    {
      id: 1,
      title: 'K-Fold Cross Validation',
      difficulty: 'Medium',
      description: 'Evaluate model reliably with CV.',
      hints: [
        'cross_val_score for quick CV',
        'K=5 or 10 is standard',
        'Reports mean and std'
      ],
      starterCode: `from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

iris = load_iris()
X, y = iris.data, iris.target

model = RandomForestClassifier(n_estimators=100, random_state=42)

# TODO: Use cross_val_score with cv=5
scores = None

print(f"CV Accuracy: ___ (+/- ___)")`,
      solution: `from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

iris = load_iris()
X, y = iris.data, iris.target

model = RandomForestClassifier(n_estimators=100, random_state=42)

# 5-fold CV
scores = cross_val_score(model, X, y, cv=5)

print(f"5-Fold CV Scores: {scores.round(3)}")
print(f"CV Accuracy: {scores.mean():.1%} (+/- {scores.std()*2:.1%})")`
    }
  ]
};
