import { numpy } from './datascience/numpy.js';
import { pandas } from './datascience/pandas.js';
import { visualization } from './datascience/visualization.js';

export const dataScience = {
    title: 'Data Science & AI',
    description: 'Master the tools for data analysis, visualization, and machine learning.',
    topics: [
      numpy,
      pandas,
      visualization,
      {
        id: 'machine-learning-basics',
        title: 'Machine Learning Basics',
        description: 'Introduction to Scikit-Learn and core ML concepts.',
        difficulty: 'advanced',
        content: {
          overview: `Machine Learning (ML) is a subset of AI that enables systems to learn from data. Scikit-Learn (sklearn) is the most popular library for traditional ML in Python.

**Key Types of ML:**
• **Supervised Learning:** Training on labeled data (e.g., Classification, Regression).
• **Unsupervised Learning:** Finding patterns in unlabeled data (e.g., Clustering).

**Scikit-Learn Workflow:**
1. Prepare data (Features X, Target y)
2. Split into training and testing sets
3. Choose and instantiate a model
4. Fit the model to training data
5. Predict and evaluate`,
          keyPoints: [
            'Scikit-Learn provides a consistent interface (fit, predict) for many algorithms',
            'Always split your data into training and testing sets to avoid overfitting',
            'Supervised learning requires labeled data (input-output pairs)',
            'Unsupervised learning finds hidden structures in data'
          ],
          codeExamples: [
            {
              title: '1. Supervised Learning: Classification',
              explanation: `Scikit-Learn (sklearn) is the industry standard for traditional machine learning in Python.

**Workflow:**
1. **Data Prep**: Features (X) and Target (y).
2. **Split**: Train/Test split.
3. **Model**: Choose and instantiate a model.
4. **Fit**: Train the model on training data.
5. **Predict**: Use the model on new data.
6. **Evaluate**: Check accuracy.`,
              code: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# 1. Load Data
data = load_iris()
X = data.data
y = data.target

print(f"Features: {data.feature_names}")
print(f"Classes: {data.target_names}")

# 2. Split Data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 3. Create Model
model = RandomForestClassifier(n_estimators=100)

# 4. Train
model.fit(X_train, y_train)

# 5. Predict
predictions = model.predict(X_test)

# 6. Evaluate
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.2f}")`
            },
            {
              title: '2. Unsupervised Learning: Clustering',
              explanation: `Unsupervised learning finds patterns in data without labeled outcomes. K-Means is a popular clustering algorithm.

**Goal:** Group similar data points together.`,
              code: `from sklearn.cluster import KMeans
import numpy as np

# Generate synthetic data
X = np.array([
    [1, 2], [1.5, 1.8], [5, 8], 
    [8, 8], [1, 0.6], [9, 11]
])

# Create K-Means model (k=2 clusters)
kmeans = KMeans(n_clusters=2, random_state=0, n_init=10)

# Fit model
kmeans.fit(X)

# Get cluster centers and labels
centroids = kmeans.cluster_centers_
labels = kmeans.labels_

print("Cluster Centers:")
print(centroids)
print("\\nLabels (0 or 1):")
print(labels)

# Predict new point
new_point = [[0, 0]]
print(f"\\nPrediction for {new_point}: Cluster {kmeans.predict(new_point)[0]}")`
            }
          ]
        },
        quiz: [
          {
            question: 'What is the purpose of train_test_split?',
            options: [
              'To make the data smaller',
              'To separate data for training and evaluation to prevent overfitting',
              'To speed up training',
              'To remove errors from data'
            ],
            correctAnswer: 1,
            explanation: 'Splitting data ensures we have a separate "unseen" dataset to test how well the model generalizes. Testing on the same data used for training leads to overfitting.'
          }
        ]
      }
    ]
  };
