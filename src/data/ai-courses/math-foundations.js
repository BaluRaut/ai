// Math Foundations for AI/ML - Comprehensive Course
// Linear Algebra, Calculus, Probability, Statistics, Optimization

export const mathFoundations = {
  topics: [
    {
      id: '1',
      title: 'Linear Algebra - Vectors & Matrices',
      description: 'Foundation of machine learning: vectors, matrices, and linear transformations',
      estimatedTime: '90 minutes',
      difficulty: 'Beginner',
      content: {
        overview: `Linear algebra is the backbone of machine learning. Understanding vectors and matrices is crucial for working with data, neural networks, and optimization algorithms.

**Why It Matters:**
• Neural networks are matrix multiplications
• Data is represented as vectors and matrices
• Principal Component Analysis (PCA) uses eigenvalues
• Image processing relies on matrix operations`,

        keyPoints: [
          'Vectors represent data points in n-dimensional space',
          'Matrices transform and manipulate data',
          'Dot product measures similarity between vectors',
          'Matrix multiplication combines transformations',
          'Eigenvalues reveal important data patterns',
          'Inverse matrices help solve linear systems'
        ],

        realWorldUseCases: {
          recommendation: {
            title: 'Netflix Recommendation System',
            description: 'User-movie matrix factorization to predict ratings',
            input: 'User preferences matrix (users × movies)',
            output: 'Predicted ratings for unwatched movies',
            math: 'Matrix factorization: R ≈ U × V^T',
            impact: 'Personalized recommendations for millions of users'
          },
          imageCompression: {
            title: 'Image Compression (JPEG)',
            description: 'Singular Value Decomposition to reduce image size',
            input: '1920×1080 image matrix (2M pixels)',
            output: 'Compressed image with 10% size',
            math: 'SVD: A = U × Σ × V^T, keep top k singular values',
            impact: 'Faster image loading, less storage'
          },
          faceRecognition: {
            title: 'Face Recognition (Eigenfaces)',
            description: 'PCA to extract facial features from images',
            input: 'Face images as high-dimensional vectors',
            output: 'Low-dimensional feature vectors',
            math: 'Eigenvalue decomposition of covariance matrix',
            impact: 'Fast face matching in security systems'
          },
          pageRank: {
            title: 'Google PageRank Algorithm',
            description: 'Eigenvector of web link matrix determines page importance',
            input: 'Web graph adjacency matrix',
            output: 'Importance score for each webpage',
            math: 'Find dominant eigenvector of transition matrix',
            impact: 'Ranks billions of webpages for search results'
          }
        },

        mathematicalFoundations: [
          {
            concept: 'Vector Operations',
            formula: 'v⃗ · w⃗ = v₁w₁ + v₂w₂ + ... + vₙwₙ',
            explanation: 'Dot product: sum of element-wise multiplication',
            application: 'Cosine similarity for document comparison'
          },
          {
            concept: 'Matrix Multiplication',
            formula: '(AB)ᵢⱼ = Σₖ AᵢₖBₖⱼ',
            explanation: 'Combine transformations by multiplying matrices',
            application: 'Neural network forward propagation'
          },
          {
            concept: 'Eigenvalues & Eigenvectors',
            formula: 'Av⃗ = λv⃗',
            explanation: 'Special vectors that only scale under transformation',
            application: 'PCA finds directions of maximum variance'
          },
          {
            concept: 'Matrix Inverse',
            formula: 'AA⁻¹ = I',
            explanation: 'Inverse matrix undoes the transformation',
            application: 'Solving linear regression: θ = (X^T X)⁻¹ X^T y'
          }
        ],

        codeExamples: [
          {
            title: 'Vector Operations - Cosine Similarity',
            language: 'python',
            explanation: 'Calculate similarity between two documents using vectors',
            code: `import numpy as np

# Document vectors (word frequencies)
doc1 = np.array([2, 3, 1, 0, 5])  # "AI is amazing"
doc2 = np.array([1, 2, 1, 1, 4])  # "ML is great"

# Cosine similarity: cos(θ) = (v·w) / (|v||w|)
dot_product = np.dot(doc1, doc2)
magnitude1 = np.linalg.norm(doc1)
magnitude2 = np.linalg.norm(doc2)

similarity = dot_product / (magnitude1 * magnitude2)
print(f"Document Similarity: {similarity:.3f}")
# Output: 0.982 (very similar)

# Real-world: Google Search uses this to rank pages`,
            realWorldExample: 'Search engines use cosine similarity to find relevant documents'
          },
          {
            title: 'Matrix Multiplication - Image Transformation',
            language: 'python',
            explanation: 'Rotate an image using matrix multiplication',
            code: `import numpy as np

# 2x2 image patch
image = np.array([[100, 200],
                  [150, 250]])

# Rotation matrix (90° clockwise)
theta = -np.pi/2
rotation_matrix = np.array([
    [np.cos(theta), -np.sin(theta)],
    [np.sin(theta), np.cos(theta)]
])

# Apply transformation (simplified)
# In practice, apply to pixel coordinates
rotated = rotation_matrix @ image  # @ is matrix multiplication
print(rotated)

# Real-world: Data augmentation in image training`,
            realWorldExample: 'CNNs use matrix ops for image augmentation'
          },
          {
            title: 'Eigenvalues - Principal Component Analysis',
            language: 'python',
            explanation: 'Reduce dimensions while preserving variance',
            code: `import numpy as np
from sklearn.decomposition import PCA

# High-dimensional data (100 samples, 50 features)
X = np.random.randn(100, 50)

# PCA: find top 2 principal components
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)

print(f"Original shape: {X.shape}")
print(f"Reduced shape: {X_reduced.shape}")
print(f"Variance explained: {pca.explained_variance_ratio_}")

# Mathematics behind PCA:
# 1. Center data: X_centered = X - mean(X)
# 2. Covariance matrix: C = X^T X / n
# 3. Eigendecomposition: C v = λ v
# 4. Project onto top k eigenvectors

# Real-world: Visualize high-dim data, remove noise`,
            realWorldExample: 'Used in face recognition, data visualization, feature extraction'
          }
        ],

        practicalAssignments: [
          {
            title: 'Build a Mini Recommendation System',
            difficulty: 'Medium',
            estimatedTime: '45 minutes',
            description: 'Create movie recommendations using matrix factorization',
            tasks: [
              'Create user-movie rating matrix (5 users × 8 movies)',
              'Implement collaborative filtering using SVD',
              'Predict ratings for unwatched movies',
              'Recommend top 3 movies per user',
              'Calculate prediction accuracy (RMSE)'
            ],
            starterCode: `import numpy as np

# User-movie ratings (0 = not watched)
ratings = np.array([
    [5, 3, 0, 1, 4, 0, 0, 2],  # User 1
    [4, 0, 0, 1, 0, 3, 0, 1],  # User 2
    [1, 1, 0, 5, 0, 0, 4, 0],  # User 3
    [0, 0, 4, 0, 0, 5, 3, 0],  # User 4
    [0, 3, 5, 0, 1, 0, 0, 4],  # User 5
])

# TODO: Implement matrix factorization
# TODO: Predict missing ratings
# TODO: Generate recommendations`,
            expectedOutput: 'User 1 recommendations: [Movie 3, Movie 6, Movie 7]'
          },
          {
            title: 'Image Compression with SVD',
            difficulty: 'Medium',
            estimatedTime: '30 minutes',
            description: 'Compress images using Singular Value Decomposition',
            tasks: [
              'Load a grayscale image as a matrix',
              'Apply SVD: A = U × Σ × V^T',
              'Keep top k singular values (k=10, 50, 100)',
              'Reconstruct image from compressed representation',
              'Compare file sizes and visual quality'
            ],
            starterCode: `import numpy as np
from PIL import Image

# Load image
img = Image.open('photo.jpg').convert('L')
img_matrix = np.array(img)

# TODO: Apply SVD
# TODO: Reconstruct with different k values
# TODO: Calculate compression ratio`,
            expectedOutput: 'k=50: 90% compression, 95% quality retained'
          }
        ],

        interactiveExercises: [
          {
            question: 'Calculate the dot product of v⃗ = [2, 3, 1] and w⃗ = [1, 4, 2]',
            type: 'calculation',
            hint: 'v⃗ · w⃗ = (2×1) + (3×4) + (1×2)',
            answer: '16',
            explanation: '2×1 + 3×4 + 1×2 = 2 + 12 + 2 = 16'
          },
          {
            question: 'What is the rank of a 100×50 matrix with full column rank?',
            type: 'multiple-choice',
            options: ['100', '50', '150', '5000'],
            answer: '50',
            explanation: 'Rank = min(rows, cols) with full column rank = 50'
          }
        ],

        quiz: [
          {
            question: 'In neural networks, what does matrix multiplication represent?',
            options: [
              'Weighted sum of inputs',
              'Element-wise product',
              'Activation function',
              'Loss calculation'
            ],
            correctAnswer: 0,
            explanation: 'Matrix multiplication computes weighted sums: y = Wx + b'
          },
          {
            question: 'What does PCA use to find principal components?',
            options: [
              'Matrix inversion',
              'Eigenvalue decomposition',
              'Gradient descent',
              'Cross product'
            ],
            correctAnswer: 1,
            explanation: 'PCA finds eigenvectors of covariance matrix (directions of max variance)'
          },
          {
            question: 'Cosine similarity ranges from:',
            options: [
              '0 to 1',
              '-1 to 1',
              '0 to ∞',
              '-∞ to ∞'
            ],
            correctAnswer: 1,
            explanation: 'Cosine similarity = cos(angle) ranges from -1 (opposite) to 1 (identical)'
          }
        ]
      }
    },
    
    {
      id: '2',
      title: 'Calculus - Derivatives & Gradients',
      description: 'Understanding how neural networks learn through derivatives and backpropagation',
      estimatedTime: '75 minutes',
      difficulty: 'Intermediate',
      content: {
        overview: `Calculus is the mathematics of change. In machine learning, we use derivatives to optimize models by finding how to adjust parameters to minimize error.

**Why It Matters:**
• Gradient descent uses derivatives to minimize loss
• Backpropagation computes gradients through chain rule
• Optimization algorithms rely on calculus
• Understanding learning rates requires derivatives`,

        keyPoints: [
          'Derivative measures rate of change',
          'Gradient points in direction of steepest increase',
          'Chain rule enables backpropagation',
          'Partial derivatives handle multi-variable functions',
          'Second derivatives show curvature (Hessian)',
          'Taylor series approximate complex functions'
        ],

        realWorldUseCases: {
          neuralNetworkTraining: {
            title: 'Training Deep Neural Networks',
            description: 'Backpropagation uses chain rule to compute gradients',
            input: 'Network weights, training data batch',
            output: 'Updated weights via gradient descent',
            math: '∂Loss/∂w = ∂Loss/∂output × ∂output/∂w',
            impact: 'Trains models with billions of parameters (GPT, BERT)'
          },
          selfDrivingCars: {
            title: 'Self-Driving Car Optimization',
            description: 'Minimize trajectory cost function using calculus',
            input: 'Current position, destination, obstacles',
            output: 'Optimal steering/acceleration commands',
            math: 'Minimize: C(x) = safety_cost + efficiency_cost + comfort_cost',
            impact: 'Safe, smooth autonomous driving'
          },
          stockTrading: {
            title: 'Algorithmic Trading',
            description: 'Optimize portfolio using derivatives of risk/return',
            input: 'Stock prices, risk tolerance',
            output: 'Optimal asset allocation',
            math: 'Maximize: E[return] - λ × Var[return]',
            impact: 'Billions in automated trading daily'
          },
          imageUpscaling: {
            title: 'AI Image Super-Resolution',
            description: 'Generate high-res images by minimizing perceptual loss',
            input: 'Low-resolution image',
            output: 'High-resolution image',
            math: 'Minimize perceptual loss using gradient descent',
            impact: 'Enhance old photos, improve video quality'
          }
        },

        mathematicalFoundations: [
          {
            concept: 'Derivative',
            formula: "f'(x) = lim(h→0) [f(x+h) - f(x)] / h",
            explanation: 'Instantaneous rate of change',
            application: 'How much does loss change with weight adjustment?'
          },
          {
            concept: 'Chain Rule',
            formula: '∂f/∂x = (∂f/∂u) × (∂u/∂x)',
            explanation: 'Derivative of composite functions',
            application: 'Backpropagation through neural network layers'
          },
          {
            concept: 'Gradient',
            formula: '∇f = [∂f/∂x₁, ∂f/∂x₂, ..., ∂f/∂xₙ]',
            explanation: 'Vector of all partial derivatives',
            application: 'Direction to move in parameter space'
          },
          {
            concept: 'Taylor Series',
            formula: 'f(x) ≈ f(a) + f\'(a)(x-a) + f\'\'(a)(x-a)²/2! + ...',
            explanation: 'Approximate functions with polynomials',
            application: 'Second-order optimization methods (Newton\'s method)'
          }
        ],

        codeExamples: [
          {
            title: 'Gradient Descent - Linear Regression',
            language: 'python',
            explanation: 'Use derivatives to find best-fit line',
            code: `import numpy as np
import matplotlib.pyplot as plt

# Generate data: y = 3x + 2 + noise
np.random.seed(42)
X = np.linspace(0, 10, 100)
y = 3 * X + 2 + np.random.randn(100) * 2

# Initialize parameters
w = 0.0  # slope
b = 0.0  # intercept
learning_rate = 0.01
epochs = 100

# Gradient descent
for epoch in range(epochs):
    # Predictions
    y_pred = w * X + b
    
    # Loss: Mean Squared Error
    loss = np.mean((y_pred - y) ** 2)
    
    # Gradients (derivatives of loss)
    dw = 2 * np.mean((y_pred - y) * X)
    db = 2 * np.mean(y_pred - y)
    
    # Update parameters
    w -= learning_rate * dw
    b -= learning_rate * db
    
    if epoch % 20 == 0:
        print(f"Epoch {epoch}: Loss={loss:.3f}, w={w:.3f}, b={b:.3f}")

print(f"\\nFinal: w={w:.3f} (true=3), b={b:.3f} (true=2)")`,
            realWorldExample: 'Predicting house prices, stock trends, sales forecasts'
          },
          {
            title: 'Backpropagation - Simple Neural Network',
            language: 'python',
            explanation: 'Chain rule to compute gradients through layers',
            code: `import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    return x * (1 - x)

# Input and output
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([[0], [1], [1], [0]])  # XOR problem

# Initialize weights
np.random.seed(1)
w1 = np.random.randn(2, 2)  # Input to hidden
w2 = np.random.randn(2, 1)  # Hidden to output

learning_rate = 1.0

# Training
for epoch in range(10000):
    # Forward pass
    layer1 = sigmoid(X @ w1)
    output = sigmoid(layer1 @ w2)
    
    # Backward pass (chain rule!)
    error = y - output
    d_output = error * sigmoid_derivative(output)
    
    # Chain rule: ∂L/∂w2 = ∂L/∂output × ∂output/∂w2
    error_layer1 = d_output @ w2.T
    d_layer1 = error_layer1 * sigmoid_derivative(layer1)
    
    # Update weights
    w2 += layer1.T @ d_output * learning_rate
    w1 += X.T @ d_layer1 * learning_rate

print("Predictions (should be near [0, 1, 1, 0]):")
print(output.round(2))`,
            realWorldExample: 'Training deep networks for image recognition, language models'
          }
        ],

        practicalAssignments: [
          {
            title: 'Implement Mini-Batch Gradient Descent',
            difficulty: 'Medium',
            estimatedTime: '40 minutes',
            description: 'Train logistic regression with mini-batch updates',
            tasks: [
              'Generate binary classification dataset',
              'Implement sigmoid activation',
              'Compute cross-entropy loss',
              'Calculate gradients for mini-batches',
              'Update weights and track convergence'
            ],
            starterCode: `import numpy as np

# TODO: Generate dataset (sklearn.make_classification)
# TODO: Implement sigmoid(z) = 1 / (1 + e^-z)
# TODO: Loss = -mean(y*log(pred) + (1-y)*log(1-pred))
# TODO: Gradient = X^T (pred - y) / batch_size
# TODO: Train with batch_size=32, learning_rate=0.01`,
            expectedOutput: 'Accuracy: 95%+, Loss converges smoothly'
          }
        ],

        quiz: [
          {
            question: 'What does the gradient vector point towards?',
            options: [
              'Direction of steepest decrease',
              'Direction of steepest increase',
              'Minimum of function',
              'Random direction'
            ],
            correctAnswer: 1,
            explanation: 'Gradient points uphill (increase). We move in -gradient direction to minimize.'
          },
          {
            question: 'In backpropagation, what mathematical rule enables computing gradients?',
            options: [
              'Product rule',
              'Chain rule',
              'Quotient rule',
              'Power rule'
            ],
            correctAnswer: 1,
            explanation: 'Chain rule: ∂f/∂x = (∂f/∂u)(∂u/∂x) propagates gradients backward through layers'
          }
        ]
      }
    },

    // ==================== TOPIC 3: PROBABILITY THEORY ====================
    {
      id: '3',
      title: 'Probability Theory - Foundations of ML',
      description: 'Understand probability distributions, Bayes theorem, and uncertainty quantification',
      estimatedTime: '80 minutes',
      difficulty: 'Intermediate',
      content: {
        overview: `Probability is fundamental to machine learning. Classification outputs probabilities, generative models sample from distributions, and Bayesian methods quantify uncertainty.

**Why It Matters:**
• Softmax converts scores to probabilities
• Naive Bayes classifier uses conditional probability
• Generative models (GANs, VAEs) learn distributions
• Uncertainty estimation in predictions`,

        keyPoints: [
          'Probability measures likelihood of events (0 to 1)',
          'Conditional probability: P(A|B) = P(A∩B) / P(B)',
          'Bayes theorem updates beliefs with evidence',
          'Distributions model random variables',
          'Expected value is weighted average',
          'Independence simplifies calculations'
        ],

        realWorldUseCases: {
          spamFilter: {
            title: 'Email Spam Detection (Naive Bayes)',
            description: 'Calculate probability email is spam given words',
            input: 'Email text: "FREE winner! Click now!"',
            output: 'P(Spam|words) = 0.95 → Spam',
            math: 'P(Spam|words) = P(words|Spam) × P(Spam) / P(words)',
            impact: 'Filters billions of spam emails daily'
          },
          medicalDiagnosis: {
            title: 'Disease Diagnosis with Bayes Theorem',
            description: 'Update disease probability after positive test',
            input: 'Positive test result, disease prevalence 1%',
            output: 'True probability of having disease',
            math: 'P(Disease|+) = P(+|Disease) × P(Disease) / P(+)',
            impact: 'Accurate medical decisions despite false positives'
          },
          weatherForecasting: {
            title: 'Weather Prediction Probabilities',
            description: 'Ensemble models output probability distributions',
            input: 'Temperature, pressure, humidity data',
            output: 'P(Rain tomorrow) = 0.73',
            math: 'Combine multiple model predictions with weights',
            impact: 'Reliable forecasts for agriculture, aviation'
          },
          recommendationSystems: {
            title: 'Netflix Content Recommendations',
            description: 'Probability user will like item based on history',
            input: 'User watch history, item features',
            output: 'P(User likes Movie | features) = 0.88',
            math: 'Collaborative filtering with probabilistic matrix factorization',
            impact: 'Personalized content for 200M+ subscribers'
          }
        },

        mathematicalFoundations: [
          {
            concept: 'Basic Probability',
            formula: 'P(A) = favorable outcomes / total outcomes',
            explanation: 'Ratio of desired events to all possible events',
            application: 'Coin flip: P(Heads) = 1/2, Dice: P(6) = 1/6'
          },
          {
            concept: 'Conditional Probability',
            formula: 'P(A|B) = P(A ∩ B) / P(B)',
            explanation: 'Probability of A given B has occurred',
            application: 'P(Spam | contains "free") in email filtering'
          },
          {
            concept: 'Bayes Theorem',
            formula: 'P(A|B) = P(B|A) × P(A) / P(B)',
            explanation: 'Update prior belief P(A) with evidence B',
            application: 'Medical diagnosis, spam classification, A/B testing'
          },
          {
            concept: 'Expected Value',
            formula: 'E[X] = Σ x × P(X=x)',
            explanation: 'Weighted average of all possible values',
            application: 'Expected return in finance, average prediction error'
          },
          {
            concept: 'Independence',
            formula: 'P(A ∩ B) = P(A) × P(B)',
            explanation: 'Events don\'t affect each other',
            application: 'Naive Bayes assumes feature independence'
          },
          {
            concept: 'Law of Total Probability',
            formula: 'P(A) = Σ P(A|Bᵢ) × P(Bᵢ)',
            explanation: 'Sum over all possible conditions',
            application: 'Marginalizing out variables in probabilistic models'
          }
        ],

        distributions: {
          discrete: [
            {
              name: 'Bernoulli',
              formula: 'P(X=1) = p, P(X=0) = 1-p',
              description: 'Single trial with two outcomes (success/failure)',
              example: 'Coin flip, binary classification',
              parameters: 'p (probability of success)'
            },
            {
              name: 'Binomial',
              formula: 'P(X=k) = C(n,k) × p^k × (1-p)^(n-k)',
              description: 'Number of successes in n independent trials',
              example: 'Number of heads in 10 coin flips',
              parameters: 'n (trials), p (success probability)'
            },
            {
              name: 'Poisson',
              formula: 'P(X=k) = (λ^k × e^(-λ)) / k!',
              description: 'Number of events in fixed interval',
              example: 'Website visits per hour, customer arrivals',
              parameters: 'λ (average rate)'
            }
          ],
          continuous: [
            {
              name: 'Normal (Gaussian)',
              formula: 'f(x) = (1/√(2πσ²)) × e^(-(x-μ)²/(2σ²))',
              description: 'Bell curve - most common distribution',
              example: 'Heights, IQ scores, measurement errors',
              parameters: 'μ (mean), σ (std deviation)',
              properties: '68-95-99.7 rule: 68% within 1σ, 95% within 2σ, 99.7% within 3σ'
            },
            {
              name: 'Uniform',
              formula: 'f(x) = 1/(b-a) for x ∈ [a,b]',
              description: 'All outcomes equally likely',
              example: 'Random number generation, dice roll',
              parameters: 'a (min), b (max)'
            },
            {
              name: 'Exponential',
              formula: 'f(x) = λe^(-λx) for x ≥ 0',
              description: 'Time until event occurs',
              example: 'Time between customer arrivals, radioactive decay',
              parameters: 'λ (rate)'
            }
          ]
        },

        codeExamples: [
          {
            title: 'Bayes Theorem - Spam Filter',
            language: 'python',
            explanation: 'Use Bayes to classify emails as spam or not',
            code: `import numpy as np

# Spam filter example
print("=== Email Spam Classification ===\\n")

# Prior probabilities
P_spam = 0.3  # 30% of emails are spam
P_ham = 0.7   # 70% are legitimate

# Likelihood: P(word | class)
# Word "free" appears in:
P_free_given_spam = 0.8  # 80% of spam
P_free_given_ham = 0.1   # 10% of legitimate

# Email contains "free" - what's P(Spam | "free")?

# Law of total probability: P("free")
P_free = P_free_given_spam * P_spam + P_free_given_ham * P_ham
print(f'P("free") = {P_free:.3f}')

# Bayes Theorem
P_spam_given_free = (P_free_given_spam * P_spam) / P_free
print(f'P(Spam | "free") = {P_spam_given_free:.3f}')
print(f'P(Ham | "free") = {1 - P_spam_given_free:.3f}')

print(f'\\n→ Email with "free" is {P_spam_given_free:.1%} likely spam')`,
            realWorldExample: 'Gmail filters 100B+ spam emails yearly'
          },
          {
            title: 'Probability Distributions',
            language: 'python',
            explanation: 'Work with common probability distributions',
            code: `import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

# 1. Binomial: Coin flips
n, p = 10, 0.5  # 10 flips, fair coin
binomial = stats.binom(n, p)
print("Binomial(n=10, p=0.5):")
print(f"  P(X=5) = {binomial.pmf(5):.4f}")
print(f"  P(X≤7) = {binomial.cdf(7):.4f}")
print(f"  Mean = {binomial.mean():.1f}")
print(f"  Std = {binomial.std():.2f}")

# 2. Normal: IQ scores
mu, sigma = 100, 15  # IQ distribution
normal = stats.norm(mu, sigma)
print(f"\\nNormal(μ={mu}, σ={sigma}):")
print(f"  P(X < 115) = {normal.cdf(115):.4f}")
print(f"  P(85 < X < 115) = {normal.cdf(115) - normal.cdf(85):.4f}")
print(f"  95th percentile = {normal.ppf(0.95):.1f}")

# 3. Poisson: Website visits
lambda_rate = 5  # 5 visits per hour
poisson = stats.poisson(lambda_rate)
print(f"\\nPoisson(λ={lambda_rate}):")
print(f"  P(X=5) = {poisson.pmf(5):.4f}")
print(f"  P(X≥3) = {1 - poisson.cdf(2):.4f}")`,
            realWorldExample: 'A/B testing, quality control, risk assessment'
          },
          {
            title: 'Naive Bayes Classifier from Scratch',
            language: 'python',
            explanation: 'Build spam classifier using probability',
            code: `import numpy as np

class NaiveBayes:
    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.classes = np.unique(y)
        
        # Prior: P(class)
        self.priors = {}
        # Likelihood: P(feature | class)
        self.mean = {}
        self.var = {}
        
        for c in self.classes:
            X_c = X[y == c]
            self.priors[c] = len(X_c) / n_samples
            self.mean[c] = X_c.mean(axis=0)
            self.var[c] = X_c.var(axis=0)
    
    def _pdf(self, x, mean, var):
        # Gaussian probability density
        return np.exp(-((x - mean)**2) / (2*var)) / np.sqrt(2*np.pi*var)
    
    def predict(self, X):
        predictions = []
        for x in X:
            posteriors = {}
            for c in self.classes:
                # Prior
                prior = np.log(self.priors[c])
                # Likelihood (assuming independence)
                likelihood = np.sum(np.log(self._pdf(x, self.mean[c], self.var[c])))
                # Posterior ∝ Prior × Likelihood
                posteriors[c] = prior + likelihood
            predictions.append(max(posteriors, key=posteriors.get))
        return np.array(predictions)

# Test on iris dataset
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.3, random_state=42
)

nb = NaiveBayes()
nb.fit(X_train, y_train)
predictions = nb.predict(X_test)
accuracy = np.mean(predictions == y_test)
print(f"Accuracy: {accuracy:.1%}")`,
            realWorldExample: 'Text classification, sentiment analysis, medical diagnosis'
          }
        ],

        practicalAssignments: [
          {
            title: 'Build Medical Diagnosis System',
            difficulty: 'Medium',
            estimatedTime: '50 minutes',
            description: 'Use Bayes theorem to calculate disease probability',
            tasks: [
              'Implement Bayes theorem function',
              'Calculate P(Disease|+Test) with given prevalence and test accuracy',
              'Handle multiple test results (update probability iteratively)',
              'Visualize how posterior changes with evidence',
              'Test with different prior probabilities'
            ],
            starterCode: `import numpy as np

def bayes_update(prior, likelihood_true, likelihood_false, evidence=True):
    """
    Update probability using Bayes theorem.
    
    Args:
        prior: P(Disease)
        likelihood_true: P(+Test | Disease)
        likelihood_false: P(+Test | No Disease)
        evidence: True if test positive
    
    Returns:
        Posterior probability P(Disease | Test)
    """
    # TODO: Implement Bayes theorem
    # P(Disease | +) = P(+ | Disease) * P(Disease) / P(+)
    # where P(+) = P(+ | Disease)*P(Disease) + P(+ | No Disease)*P(No Disease)
    pass

# Example: Rare disease (1% prevalence), test 99% accurate
# TODO: Calculate probability after positive test
# TODO: What if test negative?
# TODO: What about two positive tests in a row?`,
            expectedOutput: 'P(Disease|+Test) ≈ 0.50 (not 0.99!), demonstrates base rate fallacy'
          },
          {
            title: 'Monte Carlo Simulation',
            difficulty: 'Easy',
            estimatedTime: '30 minutes',
            description: 'Estimate probabilities through random sampling',
            tasks: [
              'Simulate 10,000 dice rolls',
              'Estimate probability of sum=7 with two dice',
              'Calculate empirical vs theoretical probability',
              'Visualize distribution of outcomes',
              'Compute confidence interval for estimate'
            ],
            starterCode: `import numpy as np

# TODO: Simulate rolling two dice 10,000 times
# TODO: Count how often sum equals 7
# TODO: Compare to theoretical P(sum=7) = 6/36
# Theoretical: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)`,
            expectedOutput: 'Empirical probability ≈ 0.167, close to theoretical 6/36 ≈ 0.167'
          }
        ],

        videoResources: [
          {
            title: '3Blue1Brown - Bayes Theorem Visualized',
            url: 'https://www.youtube.com/watch?v=HZGCoVF3YvM',
            duration: '15 min',
            description: 'Beautiful visual explanation of Bayes theorem'
          },
          {
            title: 'StatQuest - Probability Distributions',
            url: 'https://www.youtube.com/watch?v=rzFX5NWojp0',
            duration: '10 min',
            description: 'Clear introduction to common distributions'
          },
          {
            title: 'Khan Academy - Conditional Probability',
            url: 'https://www.khanacademy.org/math/statistics-probability/probability-library',
            duration: '30 min',
            description: 'Complete probability fundamentals course'
          }
        ],

        cheatSheet: {
          formulas: [
            'P(A|B) = P(A∩B) / P(B) - Conditional probability',
            'P(A|B) = P(B|A)P(A) / P(B) - Bayes theorem',
            'P(A∪B) = P(A) + P(B) - P(A∩B) - Union',
            'P(A∩B) = P(A)P(B) if independent',
            'E[X] = Σ x·P(x) - Expected value',
            'Var(X) = E[X²] - E[X]² - Variance'
          ],
          distributions: [
            'Bernoulli(p): Binary outcome',
            'Binomial(n,p): n trials, count successes',
            'Poisson(λ): Events in interval',
            'Normal(μ,σ): Bell curve, 68-95-99.7 rule',
            'Uniform(a,b): Equal probability',
            'Exponential(λ): Time until event'
          ]
        },

        commonPitfalls: [
          {
            mistake: 'Confusing P(A|B) with P(B|A)',
            example: 'P(Positive Test | Disease) ≠ P(Disease | Positive Test)',
            fix: 'Always use Bayes theorem to flip conditional probabilities'
          },
          {
            mistake: 'Assuming independence when features are correlated',
            example: 'Naive Bayes assumes all features independent',
            fix: 'Check correlation matrix, consider dependencies'
          },
          {
            mistake: 'Ignoring base rates (prior probabilities)',
            example: 'Rare disease: even accurate test → low P(Disease|+)',
            fix: 'Always incorporate P(Disease) in calculations'
          },
          {
            mistake: 'Adding probabilities incorrectly',
            example: 'P(A∪B) = P(A) + P(B) only if mutually exclusive',
            fix: 'Use P(A∪B) = P(A) + P(B) - P(A∩B)'
          }
        ],

        tipsAndTricks: [
          'Draw probability trees for complex problems',
          'Use simulation (Monte Carlo) when formulas are hard',
          'Check if P(total) = 1 (probabilities must sum to 1)',
          'Log probabilities prevent numerical underflow',
          'Normalize at the end: P(A|B) ∝ P(B|A)P(A)',
          'Memorize 68-95-99.7 rule for normal distribution'
        ],

        interactiveExercises: [
          {
            type: 'calculation',
            question: 'A bag has 3 red, 2 blue balls. Pick 2 without replacement. P(both red)?',
            hint: 'P(R₁ ∩ R₂) = P(R₁) × P(R₂|R₁)',
            solution: '(3/5) × (2/4) = 6/20 = 0.3',
            steps: ['P(R₁) = 3/5', 'After taking 1 red, 2 red out of 4 remain', 'P(R₂|R₁) = 2/4', 'Multiply: (3/5)(2/4) = 0.3']
          },
          {
            type: 'calculation',
            question: 'Disease affects 2% of population. Test: 95% sensitive, 90% specific. You test positive. P(Disease)?',
            hint: 'Use Bayes: P(D|+) = P(+|D)P(D) / P(+)',
            solution: 'P(D|+) ≈ 0.161 or 16.1%',
            steps: [
              'P(D) = 0.02, P(no D) = 0.98',
              'P(+|D) = 0.95, P(+|no D) = 0.10',
              'P(+) = 0.95×0.02 + 0.10×0.98 = 0.117',
              'P(D|+) = 0.95×0.02 / 0.117 ≈ 0.162'
            ]
          }
        ],

        quiz: [
          {
            question: 'What is P(A|B) if A and B are independent?',
            options: [
              'P(A)',
              'P(B)',
              'P(A) × P(B)',
              '0'
            ],
            correctAnswer: 0,
            explanation: 'If independent, knowing B doesn\'t change probability of A: P(A|B) = P(A)'
          },
          {
            question: 'Bayes theorem is used to calculate:',
            options: [
              'P(A) from P(B)',
              'P(A|B) from P(B|A)',
              'P(A∩B) from P(A∪B)',
              'E[X] from Var(X)'
            ],
            correctAnswer: 1,
            explanation: 'Bayes theorem: P(A|B) = P(B|A)P(A)/P(B) - flips conditionals'
          },
          {
            question: 'Which distribution models time between events?',
            options: [
              'Binomial',
              'Poisson',
              'Exponential',
              'Normal'
            ],
            correctAnswer: 2,
            explanation: 'Exponential distribution models continuous time until next event'
          },
          {
            question: 'In a normal distribution, what % of data is within 2 standard deviations?',
            options: [
              '68%',
              '95%',
              '99.7%',
              '90%'
            ],
            correctAnswer: 1,
            explanation: '68-95-99.7 rule: 95% within 2σ of mean'
          }
        ]
      }
    },

    // ==================== TOPIC 4: STATISTICS & HYPOTHESIS TESTING ====================
    {
      id: '4',
      title: 'Statistics - Data Analysis & Hypothesis Testing',
      description: 'Master statistical inference, confidence intervals, and A/B testing',
      estimatedTime: '85 minutes',
      difficulty: 'Intermediate',
      content: {
        overview: `Statistics transforms raw data into insights. In ML, we use statistics for feature engineering, model evaluation, and making data-driven decisions.

**Why It Matters:**
• Evaluate model performance with statistical tests
• A/B testing determines if changes are significant
• Confidence intervals quantify uncertainty
• Feature selection uses correlation analysis`,

        keyPoints: [
          'Mean, median, mode describe central tendency',
          'Variance and standard deviation measure spread',
          'Correlation shows relationship between variables',
          'Hypothesis testing determines statistical significance',
          'p-value < 0.05 typically means significant result',
          'Confidence intervals provide range of plausible values'
        ],

        realWorldUseCases: {
          abTesting: {
            title: 'A/B Testing for Website Optimization',
            description: 'Determine if new design increases conversion rate',
            input: 'Version A: 1000 visits, 50 conversions | Version B: 1000 visits, 65 conversions',
            output: 'p-value = 0.03 → Significant improvement',
            math: 'Two-sample proportion test: z = (p₁ - p₂) / SE',
            impact: 'Billion-dollar decisions at Google, Amazon, Meta'
          },
          qualityControl: {
            title: 'Manufacturing Quality Control',
            description: 'Detect if production process has shifted',
            input: 'Sample mean = 100.5, historical mean = 100',
            output: 'Within control limits → Process OK',
            math: 'Control chart: μ ± 3σ boundaries',
            impact: 'Prevent defective products, reduce waste'
          },
          clinicalTrials: {
            title: 'Drug Efficacy Testing',
            description: 'Prove new drug better than placebo',
            input: 'Treatment group vs control group outcomes',
            output: 'p < 0.001 → Drug is effective',
            math: 't-test: t = (x̄₁ - x̄₂) / SE',
            impact: 'FDA approval requires statistical significance'
          },
          featureSelection: {
            title: 'ML Feature Importance Analysis',
            description: 'Identify which features predict target',
            input: '100 features, 10,000 samples',
            output: 'Top 10 features with p < 0.01',
            math: 'Correlation coefficient: r = cov(X,Y) / (σₓσᵧ)',
            impact: 'Reduce model complexity, improve interpretability'
          }
        },

        mathematicalFoundations: [
          {
            concept: 'Mean (Average)',
            formula: 'μ = (1/n) Σ xᵢ',
            explanation: 'Sum all values and divide by count',
            application: 'Average prediction error, mean response time'
          },
          {
            concept: 'Variance',
            formula: 'σ² = (1/n) Σ (xᵢ - μ)²',
            explanation: 'Average squared deviation from mean',
            application: 'Measure prediction variability, data spread'
          },
          {
            concept: 'Standard Deviation',
            formula: 'σ = √Variance',
            explanation: 'Square root of variance (same units as data)',
            application: 'Typical distance from mean, outlier detection'
          },
          {
            concept: 'Correlation',
            formula: 'r = cov(X,Y) / (σₓ × σᵧ)',
            explanation: 'Measures linear relationship (-1 to +1)',
            application: 'Feature correlation, multicollinearity detection'
          },
          {
            concept: 't-statistic',
            formula: 't = (x̄ - μ₀) / (s/√n)',
            explanation: 'How many standard errors is sample mean from hypothesized value',
            application: 'Compare two groups, hypothesis testing'
          },
          {
            concept: 'Confidence Interval',
            formula: 'CI = x̄ ± t* × (s/√n)',
            explanation: 'Range containing true parameter with X% confidence',
            application: '95% CI: if repeat experiment 100 times, 95 CIs contain true mean'
          },
          {
            concept: 'p-value',
            formula: 'P(observe data | H₀ is true)',
            explanation: 'Probability of seeing result if null hypothesis true',
            application: 'p < 0.05: reject null hypothesis (5% significance level)'
          }
        ],

        statisticalTests: [
          {
            name: 't-test',
            purpose: 'Compare means of two groups',
            assumptions: 'Normal distribution, equal variances',
            example: 'Does caffeine improve test scores?',
            hypotheses: 'H₀: μ₁ = μ₂ vs H₁: μ₁ ≠ μ₂'
          },
          {
            name: 'Chi-Square Test',
            purpose: 'Test independence of categorical variables',
            assumptions: 'Expected frequency ≥ 5 in each cell',
            example: 'Is gender related to product preference?',
            hypotheses: 'H₀: Variables independent vs H₁: Associated'
          },
          {
            name: 'ANOVA',
            purpose: 'Compare means of 3+ groups',
            assumptions: 'Normal, equal variances across groups',
            example: 'Do 3 teaching methods produce different scores?',
            hypotheses: 'H₀: μ₁ = μ₂ = μ₃ vs H₁: At least one differs'
          },
          {
            name: 'Correlation Test',
            purpose: 'Test if correlation is significant',
            assumptions: 'Linear relationship, bivariate normal',
            example: 'Is study time correlated with grades?',
            hypotheses: 'H₀: ρ = 0 vs H₁: ρ ≠ 0'
          }
        ],

        codeExamples: [
          {
            title: 'Descriptive Statistics',
            language: 'python',
            explanation: 'Calculate central tendency and spread',
            code: `import numpy as np
from scipy import stats

# Sample data: exam scores
scores = np.array([85, 92, 78, 95, 88, 76, 91, 84, 89, 93])

print("=== Descriptive Statistics ===\\n")

# Central Tendency
print(f"Mean: {np.mean(scores):.2f}")
print(f"Median: {np.median(scores):.2f}")
print(f"Mode: {stats.mode(scores, keepdims=True).mode[0]}")

# Spread
print(f"\\nVariance: {np.var(scores, ddof=1):.2f}")
print(f"Std Dev: {np.std(scores, ddof=1):.2f}")
print(f"Range: {np.ptp(scores)}")

# Percentiles
print(f"\\n25th percentile: {np.percentile(scores, 25):.1f}")
print(f"75th percentile: {np.percentile(scores, 75):.1f}")
print(f"IQR: {stats.iqr(scores):.1f}")`,
            realWorldExample: 'Analyze customer spending, response times, model accuracy'
          },
          {
            title: 'Hypothesis Testing - t-test',
            language: 'python',
            explanation: 'Compare two groups statistically',
            code: `import numpy as np
from scipy import stats

# A/B test: old vs new website design
# Metric: time on site (seconds)
old_design = np.array([120, 135, 118, 142, 128, 131, 125, 138])
new_design = np.array([145, 152, 148, 160, 143, 155, 149, 158])

print("=== A/B Test: Two-Sample t-test ===\\n")

# Descriptive
print(f"Old design: mean={old_design.mean():.1f}, std={old_design.std():.1f}")
print(f"New design: mean={new_design.mean():.1f}, std={new_design.std():.1f}")
print(f"Difference: {new_design.mean() - old_design.mean():.1f} seconds")

# t-test
t_stat, p_value = stats.ttest_ind(new_design, old_design)

print(f"\\nt-statistic: {t_stat:.4f}")
print(f"p-value: {p_value:.4f}")

alpha = 0.05
if p_value < alpha:
    print(f"\\n✓ Result: SIGNIFICANT (p < {alpha})")
    print("  Reject null hypothesis: new design performs better")
else:
    print(f"\\n✗ Result: NOT significant (p ≥ {alpha})")
    print("  Cannot conclude new design is better")`,
            realWorldExample: 'Google runs thousands of A/B tests yearly'
          },
          {
            title: 'Confidence Intervals',
            language: 'python',
            explanation: 'Quantify uncertainty in estimates',
            code: `import numpy as np
from scipy import stats

# Customer satisfaction survey scores
survey = np.array([7.2, 8.1, 6.9, 7.8, 8.5, 7.3, 8.0, 7.6, 8.2, 7.9])

print("=== 95% Confidence Interval ===\\n")

mean = np.mean(survey)
std_err = stats.sem(survey)  # Standard error
confidence = 0.95

# t-distribution (unknown population std)
df = len(survey) - 1  # degrees of freedom
t_crit = stats.t.ppf((1 + confidence) / 2, df)

margin_error = t_crit * std_err
ci_lower = mean - margin_error
ci_upper = mean + margin_error

print(f"Sample mean: {mean:.2f}")
print(f"Standard error: {std_err:.3f}")
print(f"\\n95% CI: [{ci_lower:.2f}, {ci_upper:.2f}]")
print(f"\\nInterpretation: We are 95% confident the true")
print(f"population mean is between {ci_lower:.2f} and {ci_upper:.2f}")`,
            realWorldExample: 'Political polls, quality metrics, financial forecasting'
          },
          {
            title: 'Correlation Analysis',
            language: 'python',
            explanation: 'Measure relationships between variables',
            code: `import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

# Study hours vs exam score
study_hours = np.array([2, 3, 5, 7, 8, 10, 12, 15, 18, 20])
exam_score = np.array([55, 62, 70, 78, 82, 88, 91, 95, 97, 99])

print("=== Correlation Analysis ===\\n")

# Pearson correlation
r, p_value = stats.pearsonr(study_hours, exam_score)

print(f"Pearson correlation: r = {r:.4f}")
print(f"p-value: {p_value:.6f}")

# Interpret strength
if abs(r) < 0.3:
    strength = "weak"
elif abs(r) < 0.7:
    strength = "moderate"
else:
    strength = "strong"

print(f"\\nInterpretation: {strength} {'positive' if r > 0 else 'negative'} correlation")

if p_value < 0.05:
    print("Correlation is statistically significant")
else:
    print("Correlation is NOT significant")

# Coefficient of determination
r_squared = r ** 2
print(f"\\nR² = {r_squared:.4f}")
print(f"{r_squared*100:.1f}% of variance in score explained by study hours")`,
            realWorldExample: 'Feature selection, multicollinearity detection, EDA'
          }
        ],

        practicalAssignments: [
          {
            title: 'Build A/B Test Calculator',
            difficulty: 'Medium',
            estimatedTime: '45 minutes',
            description: 'Create tool to analyze A/B test results with statistical rigor',
            tasks: [
              'Input: visitors and conversions for A and B',
              'Calculate conversion rates and difference',
              'Perform two-proportion z-test',
              'Compute p-value and confidence interval',
              'Visualize results with error bars',
              'Determine sample size needed for 80% power'
            ],
            starterCode: `import numpy as np
from scipy import stats

def ab_test(visitors_a, conversions_a, visitors_b, conversions_b, alpha=0.05):
    """
    Perform A/B test on conversion rates.
    
    Returns:
        dict with conversion rates, p-value, CI, conclusion
    """
    # TODO: Calculate conversion rates
    # TODO: Pooled proportion for z-test
    # TODO: Standard error
    # TODO: z-statistic and p-value
    # TODO: Confidence interval for difference
    # TODO: Return structured results
    pass

# Example: Website redesign
# A: 10000 visitors, 500 conversions (5.0%)
# B: 10000 visitors, 580 conversions (5.8%)
# Is B significantly better?`,
            expectedOutput: 'p-value < 0.05 → Yes, B is significantly better at 95% confidence'
          },
          {
            title: 'Feature Correlation Analysis',
            difficulty: 'Easy',
            estimatedTime: '35 minutes',
            description: 'Analyze correlations in dataset to identify important features',
            tasks: [
              'Load dataset (e.g., iris, housing)',
              'Calculate correlation matrix',
              'Create heatmap visualization',
              'Identify highly correlated pairs (|r| > 0.7)',
              'Test significance of each correlation',
              'Report top 5 features correlated with target'
            ],
            starterCode: `import numpy as np
import pandas as pd
from scipy import stats
import seaborn as sns

# TODO: Load dataset
# TODO: Compute correlation matrix
# TODO: Create heatmap with seaborn
# TODO: Find correlations with p-value < 0.05
# TODO: Identify multicollinearity issues`,
            expectedOutput: 'Correlation matrix heatmap + list of significant correlations'
          }
        ],

        videoResources: [
          {
            title: 'StatQuest - Hypothesis Testing',
            url: 'https://www.youtube.com/watch?v=0oc49DyA3hU',
            duration: '12 min',
            description: 'Clear explanation of p-values and significance'
          },
          {
            title: 'Khan Academy - Confidence Intervals',
            url: 'https://www.khanacademy.org/math/statistics-probability/confidence-intervals-one-sample',
            duration: '25 min',
            description: 'Complete guide to interpreting CIs'
          },
          {
            title: '3Blue1Brown - Bayes Theorem',
            url: 'https://www.youtube.com/watch?v=HZGCoVF3YvM',
            duration: '15 min',
            description: 'Visual explanation of statistical inference'
          }
        ],

        cheatSheet: {
          descriptive: [
            'Mean: μ = Σx/n - Average',
            'Median: Middle value when sorted',
            'Mode: Most frequent value',
            'Variance: σ² = Σ(x-μ)²/n - Spread',
            'Std Dev: σ = √Variance',
            'IQR: Q3 - Q1 - Robust spread measure'
          ],
          inferential: [
            't-test: Compare two means',
            'ANOVA: Compare 3+ means',
            'Chi-square: Categorical associations',
            'Correlation: Linear relationship strength',
            'p-value < 0.05: Statistically significant',
            '95% CI: x̄ ± 1.96×SE (large n)'
          ]
        },

        commonPitfalls: [
          {
            mistake: 'Confusing correlation with causation',
            example: 'Ice cream sales correlate with drowning deaths',
            fix: 'Correlation doesn\'t imply causation (confounding: summer heat)'
          },
          {
            mistake: 'p-hacking: Testing until p < 0.05',
            example: 'Try 20 different metrics, one will be significant by chance',
            fix: 'Pre-register hypotheses, correct for multiple comparisons'
          },
          {
            mistake: 'Ignoring sample size',
            example: 'Tiny sample can show "significant" result that\'s not meaningful',
            fix: 'Also check effect size and confidence intervals'
          },
          {
            mistake: 'Using mean for skewed data',
            example: 'Income, housing prices have extreme outliers',
            fix: 'Use median for skewed distributions'
          }
        ],

        tipsAndTricks: [
          'Always visualize data before statistical tests',
          'Check assumptions (normality, equal variance) before t-test',
          'Use median/IQR for skewed data, mean/std for normal',
          'Report confidence intervals, not just p-values',
          'Effect size matters: statistically significant ≠ practically important',
          'Power analysis: calculate required sample size before experiment'
        ],

        interactiveExercises: [
          {
            type: 'calculation',
            question: 'Data: [10, 12, 15, 18, 20]. Calculate mean and standard deviation.',
            hint: 'Mean = sum/n, StdDev = √(Σ(x-μ)²/n)',
            solution: 'Mean = 15, StdDev = 3.74',
            steps: ['Mean = (10+12+15+18+20)/5 = 75/5 = 15', 'Deviations: -5, -3, 0, 3, 5', 'Squared: 25, 9, 0, 9, 25', 'Variance = 68/5 = 13.6', 'StdDev = √13.6 = 3.69']
          },
          {
            type: 'interpretation',
            question: 'A/B test: p-value = 0.08. Significant at α=0.05?',
            hint: 'Compare p-value to significance level',
            solution: 'No, not significant (0.08 > 0.05)',
            steps: ['α = 0.05 (5% significance level)', 'p = 0.08 > 0.05', 'Cannot reject null hypothesis', 'Difference not statistically significant']
          }
        ],

        quiz: [
          {
            question: 'Which measure is most affected by outliers?',
            options: [
              'Median',
              'Mean',
              'Mode',
              'IQR'
            ],
            correctAnswer: 1,
            explanation: 'Mean uses all values, so outliers shift it significantly. Median is robust.'
          },
          {
            question: 'What does p-value = 0.03 mean?',
            options: [
              '3% chance hypothesis is true',
              '3% chance of seeing data if null hypothesis true',
              '97% confidence in result',
              '3% error rate'
            ],
            correctAnswer: 1,
            explanation: 'p-value is probability of observing data (or more extreme) if H₀ is true'
          },
          {
            question: 'A 95% confidence interval [2.1, 3.8] means:',
            options: [
              '95% of data is in this range',
              'True parameter is definitely in this range',
              'If we repeat sampling, 95% of CIs will contain true parameter',
              'There is 5% error in our estimate'
            ],
            correctAnswer: 2,
            explanation: 'CI is about the procedure: 95% of intervals from repeated samples contain true value'
          },
          {
            question: 'Correlation r = -0.85 indicates:',
            options: [
              'Weak negative relationship',
              'Strong negative relationship',
              'No relationship',
              'Moderate positive relationship'
            ],
            correctAnswer: 1,
            explanation: '|r| > 0.7 is strong correlation, negative sign shows inverse relationship'
          }
        ]
      }
    }
  ]
};
