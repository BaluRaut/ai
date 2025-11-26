const machineLearning = {
  id: 'machine-learning',
  title: 'Machine Learning',
  titleMr: 'मशीन लर्निंग',
  description: 'Master classical machine learning algorithms, from linear regression to ensemble methods. Learn when and how to use each algorithm effectively.',
  descriptionMr: 'रेखीय प्रतिगमन ते ensemble methods पर्यंत शास्त्रीय मशीन लर्निंग algorithms मध्ये प्रभुत्व मिळवा.',
  icon: '📊',
  topics: [
    // Topic 1: Linear Regression
    {
      id: 'linear-regression',
      title: 'Linear Regression: Predicting Numbers',
      difficulty: 'Intermediate',
      estimatedTime: '45 minutes',
      prerequisites: ['first-ml-model', 'classification-vs-regression'],
      content: {
        overview: `
**Linear Regression** is the simplest and most widely used algorithm for predicting continuous values. It finds a straight line (or plane) that best fits your data.

**How It Works**: 
Imagine plotting house prices vs size on a graph. Linear regression draws the best-fitting line through these points. The line equation is: **y = mx + b** (remember from school math?). The algorithm finds the best values for **m** (slope) and **b** (intercept).

**Real Example**: 
- Input: House size (2000 sq ft)
- Algorithm finds: Price = 150 × Size + 50,000
- Prediction: 150 × 2000 + 50,000 = **$350,000**

**When to Use**:
- Predicting continuous numbers (prices, temperature, sales)
- Understanding relationships (does study time affect grades?)
- When you need interpretable results (see exact impact of each feature)

**Key Concept**: The "line of best fit" minimizes the distance between predictions and actual values. This distance is called **error** or **residual**.
        `,

        keyPoints: [
          'Predicts continuous values by fitting a straight line to data',
          'Equation: y = mx + b (for one feature) or y = w1×x1 + w2×x2 + ... + b (multiple features)',
          'Finds the best line by minimizing prediction errors (squared distances)',
          'Easy to interpret: each coefficient shows feature impact',
          'Assumptions: linear relationship, no extreme outliers, features not too correlated'
        ],

        useCases: [
          {
            title: 'House Price Prediction',
            description: 'Predict house price based on size, bedrooms, location score. Most common use of linear regression.',
            example: 'Price = 150×Size + 50000×Bedrooms + 30000×Location - 100000'
          },
          {
            title: 'Sales Forecasting',
            description: 'Predict next month sales based on advertising spend, season, previous sales.',
            example: 'Sales = 5×AdSpend + 2000×Season + 0.8×PrevSales'
          },
          {
            title: 'Student Grade Prediction',
            description: 'Predict final exam score based on study hours, attendance, previous test scores.',
            example: 'Grade = 3×StudyHours + 0.5×Attendance + 0.4×PrevTest'
          }
        ],

        codeExamples: [
          {
            title: 'Simple Linear Regression - One Feature',
            code: `from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np
import matplotlib.pyplot as plt

# Sample data: Study hours vs Exam scores
study_hours = np.array([1, 2, 3, 4, 5, 6, 7, 8]).reshape(-1, 1)
exam_scores = np.array([50, 55, 60, 65, 70, 75, 80, 85])

# Create and train model
model = LinearRegression()
model.fit(study_hours, exam_scores)

# Get the line equation
slope = model.coef_[0]
intercept = model.intercept_
print(f"Line equation: Score = {slope:.2f} × Hours + {intercept:.2f}")

# Make predictions
predictions = model.predict(study_hours)

# Evaluate
r2 = r2_score(exam_scores, predictions)
print(f"\\nR² Score: {r2:.3f} (explains {r2:.1%} of variance)")

# Predict for new student
new_hours = np.array([[5.5]])
predicted_score = model.predict(new_hours)
print(f"\\nStudent studying 5.5 hours will likely score: {predicted_score[0]:.1f}")

# Visualize
plt.scatter(study_hours, exam_scores, color='blue', label='Actual')
plt.plot(study_hours, predictions, color='red', label='Prediction Line')
plt.xlabel('Study Hours')
plt.ylabel('Exam Score')
plt.legend()
plt.title('Linear Regression: Study Hours vs Scores')
plt.show()`,
            jsCode: `// Linear Regression with TensorFlow.js
const tf = require('@tensorflow/tfjs');

// Sample data: Study hours vs Exam scores
const study_hours = [1, 2, 3, 4, 5, 6, 7, 8];
const exam_scores = [50, 55, 60, 65, 70, 75, 80, 85];

// Convert to tensors
const X = tf.tensor2d(study_hours, [8, 1]);
const y = tf.tensor2d(exam_scores, [8, 1]);

// Build linear regression model
const model = tf.sequential({
  layers: [
    tf.layers.dense({inputShape: [1], units: 1}) // No activation = linear
  ]
});

model.compile({
  optimizer: tf.train.sgd(0.01),
  loss: 'meanSquaredError'
});

// Train model
console.log("Training model...");
await model.fit(X, y, {
  epochs: 100,
  verbose: 0
});

// Get weights (slope and intercept)
const weights = model.getWeights();
const slope = weights[0].dataSync()[0];
const intercept = weights[1].dataSync()[0];

console.log("Line equation: Score = " + slope.toFixed(2) + " × Hours + " + intercept.toFixed(2));

// Predict for new student
const new_hours = tf.tensor2d([[5.5]]);
const prediction = model.predict(new_hours);
console.log("\\nStudent studying 5.5 hours will score:", prediction.dataSync()[0].toFixed(1));`
          },
          {
            title: 'Multiple Linear Regression - Many Features',
            code: `from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import numpy as np
import pandas as pd

# House data: [Size(sqft), Bedrooms, Age(years)]
X = np.array([
    [1500, 3, 10],
    [2000, 4, 5],
    [1200, 2, 15],
    [2500, 4, 2],
    [1800, 3, 8],
    [2200, 4, 3],
    [1600, 3, 12],
    [1900, 3, 6]
])

# Prices (in thousands)
y = np.array([300, 400, 250, 500, 350, 450, 320, 380])

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Equation coefficients
feature_names = ['Size', 'Bedrooms', 'Age']
print("Price Equation:")
equation = f"Price = $\{model.intercept_:.0f}"
for i, name in enumerate(feature_names):
    equation += f" + ($\{model.coef_[i]:.2f} × $\{name})"
print(equation)

# Feature importance
print("\\nFeature Impact:")
for i, name in enumerate(feature_names):
    print(f"  $\{name}: $\{model.coef_[i]:.2f} (per unit increase)")

# Predictions
y_pred = model.predict(X_test)
print("\\nPredictions vs Actual:")
for i in range(len(X_test)):
    print(f"  Predicted: \\$\{y_pred[i]:.0f}K, Actual: \\$\{y_test[i]:.0f}K")

# Evaluate
r2 = model.score(X_test, y_test)
print(f"\\nModel R² Score: $\{r2:.3f}")

# Predict new house
new_house = np.array([[2100, 4, 7]])  # 2100sqft, 4bed, 7yrs old
price = model.predict(new_house)
print(f"\\nNew house predicted price: \\$\{price[0]:.0f}K")`
          }
        ],

        dos: [
          'Use when relationship between features and target is roughly linear',
          'Check for and remove outliers - they heavily affect the line',
          'Scale/normalize features if they have very different ranges',
          'Visualize data first to check if linear model makes sense'
        ],

        donts: [
          'Don\'t use if relationship is clearly non-linear (use polynomial or other models)',
          'Don\'t ignore multicollinearity (highly correlated features)',
          'Don\'t extrapolate too far beyond training data range',
          'Don\'t expect high accuracy with too few data points'
        ],

        bestPractices: [
          'Start with simple linear regression before complex models',
          'Check R² score: >0.7 is good, <0.5 means poor fit',
          'Plot residuals (errors) to check if model assumptions hold',
          'Use regularization (Ridge, Lasso) if you have many features'
        ]
      },

      quiz: [
        {
          question: 'What does linear regression predict?',
          options: [
            'Categories (yes/no)',
            'Continuous numerical values',
            'Clusters of data',
            'Feature importance only'
          ],
          correctAnswer: 1,
          explanation: 'Linear regression predicts continuous numerical values (prices, scores, temperatures) by fitting a line to the data.'
        },
        {
          question: 'In y = mx + b, what does "m" represent?',
          options: [
            'The starting point',
            'The slope - how much y changes when x increases',
            'The error',
            'The prediction'
          ],
          correctAnswer: 1,
          explanation: 'm is the slope - it shows how much the output (y) changes for each unit increase in input (x). For example, if m=5, then y increases by 5 when x increases by 1.'
        },
        {
          question: 'What does R² score of 0.85 mean?',
          options: [
            '85% accuracy',
            'Model explains 85% of variance in data',
            '15% error rate',
            'Model is 85% certain'
          ],
          correctAnswer: 1,
          explanation: 'R² of 0.85 means the model explains 85% of the variance in the target variable. Closer to 1.0 is better. It measures how well the line fits the data.'
        }
      ]
    },

    {
      id: 2,
      title: 'Logistic Regression',
      description: 'Binary classification - predicting yes/no outcomes',
      
      overview: `Logistic Regression is for classification despite its name. It predicts probabilities between 0 and 1, then converts to yes/no decisions. Think of it as a smart decision-maker: "Is this email spam? 85% probability → Yes, it's spam."

The key is the sigmoid function - it squashes any number into 0-1 range. If you get 0.85, that means 85% confident it's a "yes". You typically use 0.5 as the threshold: above 0.5 = yes, below = no. But you can adjust this threshold based on your needs.

Logistic regression is simple, fast, and interpretable. It's perfect for binary decisions: spam or not spam, disease or healthy, will buy or won't buy. Despite its simplicity, it's used in production systems handling millions of predictions daily.`,

      keyPoints: [
        'For binary classification: yes/no, true/false, 1/0',
        'Outputs probability (0 to 1), then converts to class',
        'Uses sigmoid function to convert scores to probabilities',
        'Fast to train and predict - scales to large datasets',
        'Interpretable: can see feature importance'
      ],

      useCases: [
        {
          title: 'Email Spam Detection',
          description: 'Classify emails as spam or not spam',
          example: 'Gmail filtering billions of emails daily with 99%+ accuracy'
        },
        {
          title: 'Medical Diagnosis',
          description: 'Predict disease presence from symptoms',
          example: 'Detecting diabetes risk from patient data'
        },
        {
          title: 'Customer Churn',
          description: 'Predict if customer will leave',
          example: 'Telecom identifying customers likely to cancel subscription'
        },
        {
          title: 'Credit Approval',
          description: 'Decide loan approval based on applicant data',
          example: 'Banks automating loan decisions in seconds'
        }
      ],

      codeExamples: [
        {
          title: 'Spam Detection with Logistic Regression',
          language: 'python',
          code: `from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
import numpy as np

# Sample email data
emails = [
    "Win free money now!",
    "Meeting at 3pm tomorrow",
    "Claim your prize!!!",
    "Project update attached",
    "You won the lottery!",
    "Lunch with team on Friday",
    "Limited time offer!!!",
    "Code review needed"
]

# Labels: 1 = spam, 0 = not spam
labels = np.array([1, 0, 1, 0, 1, 0, 1, 0])

# Convert text to numbers (word counts)
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(emails)

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, labels, test_size=0.25, random_state=42
)

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Test predictions
test_emails = [
    "Free gift inside!",
    "Status report ready"
]
test_X = vectorizer.transform(test_emails)
predictions = model.predict(test_X)
probabilities = model.predict_proba(test_X)

print("Predictions:")
for i, email in enumerate(test_emails):
    spam_prob = probabilities[i][1]
    label = "SPAM" if predictions[i] == 1 else "NOT SPAM"
    print(f"  '{email}'")
    print(f"  → $\\{label} (spam probability: $\\{spam_prob:.2f})")

# Accuracy
accuracy = model.score(X_test, y_test)
print(f"\\nAccuracy: $\\{accuracy:.2f}")`
        }
      ],

      dos: [
        'Scale/normalize features for better convergence',
        'Check class balance - adjust threshold if imbalanced',
        'Use regularization (C parameter) to prevent overfitting',
        'Examine coefficients to understand feature importance'
      ],

      donts: [
        'Don\'t use for multi-class without one-vs-rest strategy',
        'Don\'t ignore class imbalance - it affects predictions',
        'Don\'t forget to encode categorical variables',
        'Don\'t expect high accuracy with non-linear patterns'
      ],

      bestPractices: [
        'Start with C=1.0 (regularization), adjust if overfitting',
        'Use cross-validation to select optimal threshold',
        'Monitor both precision and recall, not just accuracy',
        'For imbalanced data, use class_weight="balanced"'
      ],

      quiz: [
        {
          question: 'What does logistic regression output?',
          options: [
            'A continuous number',
            'A probability between 0 and 1',
            'A category directly',
            'The slope and intercept'
          ],
          correctAnswer: 1,
          explanation: 'Logistic regression outputs a probability (0-1) which is then converted to a class using a threshold (typically 0.5).'
        },
        {
          question: 'What is the typical decision threshold?',
          options: [
            '0.0',
            '0.5',
            '1.0',
            'It varies by dataset'
          ],
          correctAnswer: 1,
          explanation: 'The default threshold is 0.5: if probability > 0.5, predict class 1 (positive), otherwise class 0 (negative). But this can be adjusted based on your needs.'
        }
      ]
    },

    {
      id: 3,
      title: 'Decision Trees',
      description: 'Visual flowchart-like model for decisions',
      
      overview: `Decision Trees work like a flowchart of yes/no questions. "Is age > 30? Yes → Is income > 50K? Yes → Approved!" Each branch represents a decision based on a feature, making them incredibly easy to understand and explain.

The tree learns which questions to ask and in what order. It splits data to make each group as "pure" as possible - meaning samples in each group are similar. For loan approval, it might first split on credit score, then income, then employment length.

The beauty is interpretability - you can literally draw it and show non-technical people. However, decision trees easily overfit (memorize training data). That's why we limit their depth or use ensembles like Random Forests.`,

      keyPoints: [
        'Tree of if-then-else decisions based on features',
        'Each node asks a yes/no question about a feature',
        'Leaves contain the final prediction',
        'Extremely interpretable - can visualize the entire logic',
        'Prone to overfitting without depth limits'
      ],

      useCases: [
        {
          title: 'Loan Approval',
          description: 'Decide loan eligibility with clear rules',
          example: 'Banks explaining rejection: "Credit score < 650 and income < $40K"'
        },
        {
          title: 'Medical Diagnosis',
          description: 'Diagnose based on symptoms and test results',
          example: 'If fever > 102°F AND cough present → Check for flu'
        },
        {
          title: 'Customer Segmentation',
          description: 'Categorize customers by behavior',
          example: 'High spender vs low spender based on age, income, purchase history'
        }
      ],

      dos: [
        'Limit tree depth (max_depth=5-10) to prevent overfitting',
        'Visualize the tree to understand and validate logic',
        'Use min_samples_split to require minimum samples per split',
        'Consider Random Forest if single tree overfits'
      ],

      donts: [
        'Don\'t allow unlimited depth - tree will memorize training data',
        'Don\'t use for datasets with too many features (use Random Forest)',
        'Don\'t ignore feature importance - helps understand model',
        'Don\'t expect smooth decision boundaries'
      ],

      bestPractices: [
        'Start with max_depth=5, increase only if needed',
        'Plot feature importance to identify key predictors',
        'Use cross-validation to find optimal depth',
        'For production, prefer Random Forest over single tree'
      ],

      quiz: [
        {
          question: 'How does a decision tree make predictions?',
          options: [
            'By calculating probabilities',
            'By following a series of if-then rules',
            'By finding nearest neighbors',
            'By drawing a line through data'
          ],
          correctAnswer: 1,
          explanation: 'Decision trees follow a flowchart of if-then rules, asking yes/no questions about features until reaching a leaf node with the prediction.'
        }
      ]
    },

    {
      id: 4,
      title: 'Random Forests',
      description: 'Ensemble of decision trees for robust predictions',
      
      overview: `Random Forest is like asking 100 experts instead of 1. It creates hundreds of decision trees, each trained on a random subset of data and features. Then all trees vote, and majority wins. This "wisdom of crowds" cancels out individual tree mistakes.

Each tree sees only 60-80% of data and a random subset of features. This diversity makes them disagree on wrong answers but agree on correct ones. It's why Random Forests are so accurate and robust - one tree might overfit, but 500 trees won't all overfit the same way.

Random Forests are the go-to algorithm for many ML competitions. They work out-of-the-box with minimal tuning, handle non-linear patterns well, and provide feature importance. The main downside is they're slower and less interpretable than a single tree.`,

      keyPoints: [
        'Ensemble of 100-500 decision trees voting together',
        'Each tree trained on random data subset (bootstrap)',
        'Each split considers random feature subset',
        'More accurate and robust than single tree',
        'Built-in feature importance and overfitting resistance'
      ],

      useCases: [
        {
          title: 'Credit Card Fraud',
          description: 'Detecting fraudulent transactions in real-time',
          example: 'Banks blocking suspicious charges with 98% accuracy'
        },
        {
          title: 'Customer Churn Prediction',
          description: 'Identifying customers likely to leave',
          example: 'Telecom targeting retention offers to at-risk customers'
        },
        {
          title: 'Disease Prediction',
          description: 'Medical diagnosis from patient records',
          example: 'Predicting diabetes risk from health metrics'
        }
      ],

      dos: [
        'Use 100-500 trees (n_estimators) for good performance',
        'Let max_depth=None for full trees (overfitting handled by ensemble)',
        'Check feature_importances_ to understand key predictors',
        'Use out-of-bag score for validation without separate test set'
      ],

      donts: [
        'Don\'t use too few trees (<50) - won\'t get ensemble benefit',
        'Don\'t limit depth too much - defeats purpose of ensemble',
        'Don\'t ignore computation time - 500 trees slower than 1',
        'Don\'t expect perfect interpretability like single tree'
      ],

      bestPractices: [
        'Start with n_estimators=100, increase if time permits',
        'Use n_jobs=-1 to parallelize across all CPU cores',
        'For imbalanced data, set class_weight="balanced"',
        'Plot feature importance to identify top predictors'
      ],

      quiz: [
        {
          question: 'Why is Random Forest more accurate than a single tree?',
          options: [
            'It uses more data',
            'Multiple trees vote, canceling individual mistakes',
            'It trains faster',
            'It uses deeper trees'
          ],
          correctAnswer: 1,
          explanation: 'Random Forest combines predictions from many trees. Individual trees make different mistakes, but they agree on correct answers, making the ensemble more accurate.'
        }
      ]
    },

    {
      id: 5,
      title: 'Support Vector Machines (SVM)',
      description: 'Finding the optimal decision boundary',
      
      overview: `SVM finds the widest possible "road" between classes. Imagine separating red and blue dots - SVM draws a line (or curve) with maximum margin to both sides. The closest points to this boundary are "support vectors" - they define where the boundary goes.

The magic is the kernel trick. For data that's not linearly separable, SVM can use kernels (RBF, polynomial) to implicitly work in higher dimensions. It's like viewing 2D data from 3D - suddenly a line can separate them. This makes SVM powerful for complex patterns.

SVM is great for small-to-medium datasets with clear margins. It's widely used for text classification (spam, sentiment) because high-dimensional text data often has good separation. However, it's slow on large datasets and sensitive to scaling.`,

      keyPoints: [
        'Finds decision boundary with maximum margin to both classes',
        'Support vectors are the closest points defining boundary',
        'Kernel trick handles non-linear patterns (RBF, polynomial)',
        'Works well with high-dimensional data (text, images)',
        'Requires feature scaling and sensitive to parameters'
      ],

      useCases: [
        {
          title: 'Text Classification',
          description: 'Categorizing documents or sentiment analysis',
          example: 'Classifying news articles into topics with high accuracy'
        },
        {
          title: 'Image Recognition',
          description: 'Face detection and object recognition',
          example: 'Detecting faces in photos with high precision'
        },
        {
          title: 'Bioinformatics',
          description: 'Protein classification and gene expression',
          example: 'Identifying cancer types from gene data'
        }
      ],

      dos: [
        'Always scale features (StandardScaler) before training',
        'Use RBF kernel for most cases, linear for text/sparse data',
        'Tune C (regularization) and gamma (kernel width) via grid search',
        'Start with C=1.0, gamma="scale" as defaults'
      ],

      donts: [
        'Don\'t use on very large datasets (>100K samples) - too slow',
        'Don\'t forget feature scaling - SVM is very sensitive',
        'Don\'t use with very imbalanced data without adjustments',
        'Don\'t expect interpretability like linear models'
      ],

      bestPractices: [
        'For binary classification, SVM often outperforms other algorithms',
        'Use GridSearchCV to find optimal C and gamma',
        'For large data, use LinearSVC (faster variant)',
        'Combine with PCA for very high-dimensional data'
      ],

      quiz: [
        {
          question: 'What is the main goal of SVM?',
          options: [
            'Minimize error',
            'Maximize margin between classes',
            'Create deep trees',
            'Find nearest neighbors'
          ],
          correctAnswer: 1,
          explanation: 'SVM finds the decision boundary with the maximum margin (distance) to the nearest points of both classes, making it robust to noise.'
        }
      ]
    },

    {
      id: 6,
      title: 'K-Nearest Neighbors (KNN)',
      description: 'Classification by similarity to neighbors',
      
      overview: `KNN is beautifully simple: "You are the average of your friends." To classify a new point, find the K closest training samples (neighbors) and let them vote. If 4 out of 5 nearest neighbors are spam, predict spam.

There's no "training" in the traditional sense - KNN just memorizes all data points. When predicting, it searches for similar examples. This makes it easy to understand but slow at prediction time, especially with large datasets. It's like searching your entire photo library every time instead of organizing by albums.

KNN works great when similar things are actually close together in feature space. The challenge is choosing K (too small = noisy, too large = overly smooth) and defining "distance" properly. Always scale features, or one feature will dominate.`,

      keyPoints: [
        'Classifies based on K nearest training samples',
        'No training phase - stores all data',
        'Prediction requires searching all samples (slow for large data)',
        'Sensitive to feature scaling and choice of K',
        'Works for both classification and regression'
      ],

      useCases: [
        {
          title: 'Recommendation Systems',
          description: 'Recommend items based on similar users',
          example: 'Netflix suggesting movies based on similar viewers'
        },
        {
          title: 'Image Recognition',
          description: 'Classify images by similarity to known images',
          example: 'Handwritten digit recognition'
        },
        {
          title: 'Anomaly Detection',
          description: 'Find unusual samples far from neighbors',
          example: 'Detecting fraudulent transactions'
        }
      ],

      dos: [
        'Always scale features (StandardScaler) - critical for KNN',
        'Try K=5 as default, then test odd numbers (3, 7, 9, 11)',
        'Use distance-weighted voting for better results',
        'Consider dimensionality reduction (PCA) for many features'
      ],

      donts: [
        'Don\'t use on large datasets (>100K) - prediction too slow',
        'Don\'t forget feature scaling - ruins distance calculations',
        'Don\'t use K=1 - too sensitive to noise',
        'Don\'t expect it to work with many irrelevant features'
      ],

      bestPractices: [
        'Use cross-validation to find optimal K',
        'For large data, use approximate nearest neighbor algorithms',
        'Remove irrelevant features - they add noise to distance',
        'Visualize decision boundaries in 2D to understand behavior'
      ],

      quiz: [
        {
          question: 'What does K in KNN represent?',
          options: [
            'Number of features',
            'Number of neighbors to consider',
            'Number of trees',
            'Learning rate'
          ],
          correctAnswer: 1,
          explanation: 'K is the number of nearest neighbors used for voting. For example, K=5 means the 5 closest training samples vote on the prediction.'
        }
      ]
    },

    {
      id: 7,
      title: 'Naive Bayes',
      description: 'Probabilistic classification based on Bayes theorem',
      
      overview: `Naive Bayes applies Bayes' theorem with a "naive" assumption: all features are independent. It calculates the probability of each class given the features, then picks the most likely. For spam detection: P(spam | words) = P(words | spam) × P(spam) / P(words).

The "naive" assumption is often wrong (words in emails aren't independent), but surprisingly, Naive Bayes still works well! It's extremely fast, requires little training data, and handles high-dimensional data naturally. This makes it perfect for text classification.

Naive Bayes is the classic spam filter algorithm. It learns probabilities like "the word 'free' appears in 60% of spam but only 5% of normal emails." Then for new emails, it multiplies these probabilities to classify. Despite its simplicity, it powered early spam filters effectively.`,

      keyPoints: [
        'Based on Bayes theorem with independence assumption',
        'Calculates probability of each class given features',
        'Very fast training and prediction',
        'Works well with high-dimensional sparse data (text)',
        'Requires less training data than discriminative models'
      ],

      useCases: [
        {
          title: 'Spam Filtering',
          description: 'Classic application of Naive Bayes',
          example: 'Email spam detection with word probabilities'
        },
        {
          title: 'Sentiment Analysis',
          description: 'Classify text as positive/negative',
          example: 'Product review sentiment classification'
        },
        {
          title: 'Document Classification',
          description: 'Categorize articles by topic',
          example: 'News article categorization (sports, politics, tech)'
        }
      ],

      dos: [
        'Use for text classification - it shines here',
        'Try MultinomialNB for word counts, GaussianNB for continuous features',
        'Add smoothing (alpha parameter) to handle unseen features',
        'Use as baseline - it\'s fast and often competitive'
      ],

      donts: [
        'Don\'t expect high accuracy if features are strongly correlated',
        'Don\'t use when feature interactions are important',
        'Don\'t forget to handle zero probabilities with smoothing',
        'Don\'t expect probability estimates to be well-calibrated'
      ],

      bestPractices: [
        'For text: use CountVectorizer or TfidfVectorizer with MultinomialNB',
        'Start with alpha=1.0 (Laplace smoothing), tune if needed',
        'Train multiple variants (Multinomial, Gaussian, Bernoulli) and compare',
        'Use as fast baseline before trying complex models'
      ],

      quiz: [
        {
          question: 'Why is Naive Bayes called "naive"?',
          options: [
            'It\'s simple to implement',
            'It assumes features are independent',
            'It makes random guesses',
            'It only works on small data'
          ],
          correctAnswer: 1,
          explanation: 'The "naive" assumption is that all features are independent of each other, which is rarely true but often works well in practice anyway.'
        }
      ]
    },

    {
      id: 8,
      title: 'K-Means Clustering',
      description: 'Unsupervised learning - finding groups in data',
      
      overview: `K-Means finds natural groups in unlabeled data. You specify K (number of clusters), and it automatically groups similar items together. Think customer segmentation: "Find 5 types of customers based on their behavior" - no labels needed!

The algorithm iteratively assigns points to nearest cluster center, then moves centers to the mean of their assigned points. After several iterations, it stabilizes. It's beautifully simple but requires you to specify K beforehand. Use the elbow method to find optimal K.

K-Means is fast and scales to large datasets, making it popular for exploratory analysis. However, it assumes spherical clusters of similar size, struggles with outliers, and must be rerun multiple times (different random initializations) to avoid local minima.`,

      keyPoints: [
        'Unsupervised: finds K clusters without labels',
        'Iteratively assigns points to nearest center, updates centers',
        'Fast and scalable to millions of samples',
        'Requires specifying K (number of clusters) beforehand',
        'Use elbow method or silhouette score to find optimal K'
      ],

      useCases: [
        {
          title: 'Customer Segmentation',
          description: 'Group customers by purchase behavior',
          example: 'Retail identifying high-value, occasional, and budget shoppers'
        },
        {
          title: 'Image Compression',
          description: 'Reduce colors by clustering similar pixels',
          example: 'Compress image from 16M colors to 16 dominant colors'
        },
        {
          title: 'Anomaly Detection',
          description: 'Find outliers far from any cluster',
          example: 'Detecting unusual network traffic patterns'
        }
      ],

      dos: [
        'Try multiple K values and plot elbow curve',
        'Run with different random initializations (n_init=10)',
        'Scale features before clustering (critical!)',
        'Visualize clusters in 2D with PCA if many features'
      ],

      donts: [
        'Don\'t use if you know the true number of clusters - use supervised learning',
        'Don\'t forget to scale - one feature will dominate distance',
        'Don\'t expect it to find non-spherical clusters',
        'Don\'t use with categorical features without encoding'
      ],

      bestPractices: [
        'Use elbow method: plot inertia vs K, look for "elbow"',
        'Try K=3-10, evaluate with silhouette score',
        'Use K-Means++ initialization (default in sklearn)',
        'For large data, use MiniBatchKMeans for speed'
      ],

      quiz: [
        {
          question: 'What type of learning is K-Means?',
          options: [
            'Supervised',
            'Unsupervised',
            'Reinforcement',
            'Semi-supervised'
          ],
          correctAnswer: 1,
          explanation: 'K-Means is unsupervised - it finds patterns in unlabeled data without being told what groups exist.'
        }
      ]
    },

    {
      id: 9,
      title: 'Principal Component Analysis (PCA)',
      description: 'Dimensionality reduction - compress features',
      
      overview: `PCA reduces 100 features to 10 while keeping 95% of information. It finds new features (principal components) that capture the most variance. First component captures the most variance, second captures second-most (and is orthogonal to first), and so on.

Think of it as smart summarization. If you have height, weight, and BMI, they're correlated - PCA might compress them into one "body size" component. This reduces redundancy, speeds up training, helps visualization, and sometimes improves accuracy by removing noise.

PCA is unsupervised and linear. It works by finding directions of maximum variance in your data. It's fast and widely used for preprocessing, especially before visualizing high-dimensional data in 2D/3D. However, transformed features lose interpretability.`,

      keyPoints: [
        'Reduces features while preserving variance (information)',
        'Creates new uncorrelated features (principal components)',
        'First components capture most variance',
        'Useful for visualization, speed, and noise reduction',
        'Transformed features are not interpretable'
      ],

      useCases: [
        {
          title: 'Data Visualization',
          description: 'Plot high-dimensional data in 2D/3D',
          example: 'Visualizing 50-feature dataset as 2D scatter plot'
        },
        {
          title: 'Feature Preprocessing',
          description: 'Speed up training by reducing features',
          example: 'Reduce 10,000 image pixels to 100 components'
        },
        {
          title: 'Noise Reduction',
          description: 'Remove less important components',
          example: 'Image denoising by keeping top components'
        }
      ],

      dos: [
        'Scale features (StandardScaler) before PCA',
        'Choose n_components to keep 95% variance',
        'Use explained_variance_ratio_ to see information retention',
        'Visualize data with 2-3 components for insights'
      ],

      donts: [
        'Don\'t use on categorical features directly',
        'Don\'t forget to scale - PCA is sensitive to feature magnitude',
        'Don\'t expect components to be interpretable',
        'Don\'t use for feature selection - use other methods'
      ],

      bestPractices: [
        'Plot cumulative explained variance to choose n_components',
        'Keep 95-99% variance for most applications',
        'Apply PCA only to training data, transform test data',
        'Combine with classification algorithms for speed boost'
      ],

      quiz: [
        {
          question: 'What is the main goal of PCA?',
          options: [
            'Increase number of features',
            'Reduce dimensions while preserving variance',
            'Classify data',
            'Find clusters'
          ],
          correctAnswer: 1,
          explanation: 'PCA reduces the number of features (dimensionality) while retaining as much variance (information) as possible from the original data.'
        }
      ]
    },

    {
      id: 10,
      title: 'Gradient Boosting',
      description: 'Sequential ensemble - trees fixing each other\'s mistakes',
      
      overview: `Gradient Boosting builds trees sequentially, where each new tree corrects errors of previous trees. First tree makes predictions, second tree learns to predict the errors (residuals) of first tree, third tree fixes errors of first two, and so on. Final prediction is the sum of all trees.

Unlike Random Forest (parallel trees), Gradient Boosting is sequential and adaptive. Each tree focuses on the hardest samples - those previous trees got wrong. This makes it very powerful but also prone to overfitting if not carefully tuned. It's consistently winning Kaggle competitions.

Popular implementations: XGBoost, LightGBM, CatBoost. They add regularization, better handling of missing values, and optimizations. Gradient Boosting typically outperforms Random Forest but requires more tuning and is slower to train.`,

      keyPoints: [
        'Sequential ensemble: each tree fixes previous trees\' errors',
        'Combines weak learners into strong predictor',
        'More powerful than Random Forest but needs tuning',
        'Prone to overfitting - use learning_rate and max_depth carefully',
        'XGBoost, LightGBM, CatBoost are optimized implementations'
      ],

      useCases: [
        {
          title: 'Kaggle Competitions',
          description: 'Winning algorithm for structured data',
          example: 'XGBoost winning majority of tabular data competitions'
        },
        {
          title: 'Credit Scoring',
          description: 'Precise credit risk assessment',
          example: 'Banks predicting loan default probability'
        },
        {
          title: 'Click Prediction',
          description: 'Predict if user will click ad',
          example: 'Ad platforms optimizing ad targeting'
        }
      ],

      dos: [
        'Start with learning_rate=0.1, n_estimators=100',
        'Limit tree depth (max_depth=3-5) to prevent overfitting',
        'Use early_stopping_rounds with validation set',
        'Try XGBoost or LightGBM for better performance'
      ],

      donts: [
        'Don\'t use high learning_rate (>0.3) - too aggressive',
        'Don\'t allow deep trees - defeats boosting purpose',
        'Don\'t forget early stopping - prevents overfitting',
        'Don\'t ignore feature importance - reveals key predictors'
      ],

      bestPractices: [
        'Use learning_rate=0.01-0.1 with more trees for better accuracy',
        'Cross-validate to find optimal number of trees',
        'Monitor training and validation scores to detect overfitting',
        'For large datasets, use LightGBM (faster than XGBoost)'
      ],

      quiz: [
        {
          question: 'How does Gradient Boosting differ from Random Forest?',
          options: [
            'It uses deeper trees',
            'Trees are built sequentially, each fixing previous errors',
            'It uses fewer trees',
            'Trees are independent'
          ],
          correctAnswer: 1,
          explanation: 'Gradient Boosting builds trees sequentially, where each tree learns to correct the mistakes of previous trees, unlike Random Forest where trees are independent.'
        }
      ]
    },

    {
      id: 11,
      title: 'Feature Engineering',
      description: 'Creating better features from raw data',
      
      overview: `Feature Engineering is the art of creating new features from raw data to help models learn better. A date might become "day_of_week", "is_weekend", "month", "is_holiday". Good features often matter more than choosing the right algorithm.

You might combine features: "price_per_square_foot" from price and area. Or transform them: log of income for skewed distributions. Or encode categories: one-hot encoding for colors. Domain knowledge is key - a data scientist knowing the business creates better features.

Feature engineering is often the difference between mediocre and excellent models. In Kaggle competitions, winners spend 80% of time on feature engineering, 20% on model tuning. It's creative, requires domain expertise, and directly impacts model performance.`,

      keyPoints: [
        'Creating new features from existing data',
        'Often more impactful than choosing algorithm',
        'Includes transformations, combinations, encodings',
        'Requires domain knowledge and creativity',
        'Can dramatically improve model performance'
      ],

      useCases: [
        {
          title: 'Time Series Features',
          description: 'Extract features from dates/times',
          example: 'Hour, day, week, month, is_weekend, is_holiday from timestamp'
        },
        {
          title: 'Text Features',
          description: 'Create features from text data',
          example: 'Word counts, TF-IDF, sentiment scores, text length'
        },
        {
          title: 'Interaction Features',
          description: 'Combine existing features',
          example: 'price_per_sqft from house_price and square_footage'
        }
      ],

      dos: [
        'Start with domain knowledge - what matters for this problem?',
        'Create ratios and combinations of existing features',
        'Handle dates: extract day, week, month, year, is_weekend',
        'Use polynomial features for non-linear relationships'
      ],

      donts: [
        'Don\'t create too many features - causes overfitting',
        'Don\'t include target information (data leakage!)',
        'Don\'t forget to apply same transformations to test data',
        'Don\'t ignore feature importance - remove useless features'
      ],

      bestPractices: [
        'Use domain expertise to create meaningful features',
        'Try transformations: log, sqrt, polynomial for skewed data',
        'Encode categorical variables properly (one-hot, target encoding)',
        'Use feature selection to remove redundant features'
      ],

      quiz: [
        {
          question: 'Why is feature engineering important?',
          options: [
            'It speeds up training',
            'Good features often matter more than the algorithm',
            'It reduces data size',
            'It\'s required by law'
          ],
          correctAnswer: 1,
          explanation: 'Feature engineering can dramatically improve model performance - good features often matter more than choosing between algorithms.'
        }
      ]
    },

    {
      id: 12,
      title: 'Hyperparameter Tuning',
      description: 'Finding the best model settings',
      
      overview: `Hyperparameters are settings you choose before training - learning rate, tree depth, number of neighbors. Unlike parameters (learned from data), hyperparameters must be tuned. Good hyperparameters can make a 10% accuracy difference.

Two main approaches: Grid Search tries all combinations (thorough but slow), Random Search tries random combinations (faster, often good enough). For example, trying learning_rate=[0.01, 0.1, 1.0] and max_depth=[3, 5, 7] - Grid Search tests all 9 combinations.

Always use cross-validation when tuning to avoid overfitting to test set. The goal is finding settings that generalize well, not just perform well on training data. Start with default values, then tune the most important hyperparameters first.`,

      keyPoints: [
        'Settings chosen before training (not learned from data)',
        'Grid Search: try all combinations (slow but thorough)',
        'Random Search: try random combinations (faster)',
        'Always use cross-validation to avoid overfitting',
        'Can significantly improve model performance'
      ],

      useCases: [
        {
          title: 'Model Optimization',
          description: 'Finding best hyperparameters for any algorithm',
          example: 'Tuning Random Forest n_estimators and max_depth'
        },
        {
          title: 'Neural Network Tuning',
          description: 'Optimizing learning rate and architecture',
          example: 'Finding optimal learning rate and batch size'
        },
        {
          title: 'Competition Performance',
          description: 'Squeezing last few % accuracy',
          example: 'Kaggle competitors tuning hundreds of parameters'
        }
      ],

      dos: [
        'Use cross-validation (GridSearchCV, RandomizedSearchCV)',
        'Start with Random Search for rough tuning',
        'Focus on most important hyperparameters first',
        'Use early stopping for iterative algorithms'
      ],

      donts: [
        'Don\'t tune on test set - creates overfitting',
        'Don\'t try too many combinations without cross-validation',
        'Don\'t ignore default values - often good starting point',
        'Don\'t forget computational cost - Grid Search expensive'
      ],

      bestPractices: [
        'Random Search first (50-100 iterations), then Grid Search refined',
        'Use cross-validation with 5-10 folds',
        'Keep track of all experiments (use MLflow or similar)',
        'For deep learning, use learning rate finder'
      ],

      quiz: [
        {
          question: 'What is the difference between parameters and hyperparameters?',
          options: [
            'There is no difference',
            'Parameters are learned from data, hyperparameters are set before training',
            'Hyperparameters are always better',
            'Parameters are for neural networks only'
          ],
          correctAnswer: 1,
          explanation: 'Parameters (like weights) are learned during training from data. Hyperparameters (like learning rate) are settings you choose before training starts.'
        }
      ]
    },

    {
      id: 13,
      title: 'Cross-Validation',
      description: 'Reliable model evaluation technique',
      
      overview: `Cross-Validation splits data into K folds, trains on K-1 folds, tests on remaining fold, and repeats K times. Each sample gets to be in the test set exactly once. Average performance across folds gives reliable estimate of model quality.

Regular train/test split is like taking one exam. Cross-validation is like taking 5 exams and averaging the grade - much more reliable! It uses all data for both training and testing (at different times), reducing variance in performance estimates.

K-Fold CV with K=5 or K=10 is standard. For small datasets, use Leave-One-Out. For classification with imbalanced classes, use Stratified K-Fold to maintain class ratios. For time series, use TimeSeriesSplit to respect temporal order. Cross-validation is essential for reliable model evaluation.`,

      keyPoints: [
        'Split data into K folds, test on each fold once',
        'More reliable than single train/test split',
        'Uses all data for both training and testing',
        'K=5 or K=10 is standard choice',
        'Essential for hyperparameter tuning'
      ],

      useCases: [
        {
          title: 'Model Selection',
          description: 'Choosing best algorithm reliably',
          example: 'Comparing Random Forest vs Gradient Boosting with CV'
        },
        {
          title: 'Hyperparameter Tuning',
          description: 'Finding optimal settings without overfitting',
          example: 'GridSearchCV using 5-fold cross-validation'
        },
        {
          title: 'Performance Estimation',
          description: 'Getting reliable accuracy estimates',
          example: 'Reporting model accuracy as mean ± std across folds'
        }
      ],

      dos: [
        'Use K=5 or K=10 for most cases',
        'Use Stratified K-Fold for classification (maintains class ratios)',
        'Use TimeSeriesSplit for time-ordered data',
        'Report mean and standard deviation across folds'
      ],

      donts: [
        'Don\'t use regular K-Fold for imbalanced classes',
        'Don\'t use regular K-Fold for time series',
        'Don\'t forget to set random_state for reproducibility',
        'Don\'t use Leave-One-Out for large datasets (too slow)'
      ],

      bestPractices: [
        'Use cross_val_score for quick evaluation',
        'Use cross_validate for multiple metrics',
        'Stratified K-Fold for classification (maintains class ratios)',
        'Always use CV for hyperparameter tuning'
      ],

      quiz: [
        {
          question: 'Why is cross-validation better than a single train/test split?',
          options: [
            'It\'s faster',
            'It provides more reliable performance estimates',
            'It uses less data',
            'It always gives higher accuracy'
          ],
          correctAnswer: 1,
          explanation: 'Cross-validation tests the model multiple times on different data splits, providing more reliable and robust performance estimates than a single train/test split.'
        }
      ]
    }
  ]
};

export { machineLearning };
