// Mathematical Foundations for AI/ML

export const mathFoundationsContent = {
  id: 'math-foundations',
  title: 'Mathematical Foundations for AI',
  description: 'Essential mathematics for understanding AI and Machine Learning',
  icon: '📐',
  topics: [
    // ==================== LINEAR ALGEBRA ====================
    {
      id: 'linear-algebra-vectors',
      title: 'Linear Algebra: Vectors',
      description: 'Understanding vectors - the building blocks of ML',
      content: `
# Linear Algebra: Vectors

Vectors are fundamental to machine learning. Every data point, image pixel, or word embedding is represented as a vector.

## What is a Vector?

A vector is an ordered list of numbers representing magnitude and direction in n-dimensional space.

\`\`\`python
import numpy as np

# Creating vectors
v1 = np.array([1, 2, 3])        # 3D vector
v2 = np.array([4, 5, 6])

print(f"Vector v1: {v1}")
print(f"Shape: {v1.shape}")      # (3,)
print(f"Dimension: {v1.ndim}")   # 1
\`\`\`

## Vector Operations in ML

### 1. Addition & Subtraction
\`\`\`python
# Used in: Gradient updates, feature combination
v_sum = v1 + v2      # [5, 7, 9]
v_diff = v2 - v1     # [3, 3, 3]

print(f"v1 + v2 = {v_sum}")
print(f"v2 - v1 = {v_diff}")
\`\`\`

### 2. Scalar Multiplication
\`\`\`python
# Used in: Learning rate scaling, normalization
learning_rate = 0.01
gradient = np.array([0.5, -0.3, 0.8])
update = learning_rate * gradient

print(f"Scaled gradient: {update}")
\`\`\`

### 3. Dot Product (Inner Product)
\`\`\`python
# Used in: Neural networks, similarity, projections
# Formula: a·b = Σ(ai × bi)

dot_product = np.dot(v1, v2)
# or: dot_product = v1 @ v2
# or: dot_product = sum(v1 * v2)

print(f"v1 · v2 = {dot_product}")  # 1*4 + 2*5 + 3*6 = 32

# Real ML use: Computing neuron output
weights = np.array([0.5, 0.3, 0.2])
inputs = np.array([1.0, 2.0, 3.0])
output = np.dot(weights, inputs)  # Weighted sum
print(f"Neuron output: {output}")
\`\`\`

### 4. Vector Magnitude (Norm)
\`\`\`python
# Used in: Normalization, regularization, distance

# L2 Norm (Euclidean length)
magnitude = np.linalg.norm(v1)
# = sqrt(1² + 2² + 3²) = sqrt(14)

print(f"||v1|| = {magnitude:.4f}")

# Unit vector (normalized)
unit_v1 = v1 / np.linalg.norm(v1)
print(f"Unit vector: {unit_v1}")
print(f"Magnitude of unit: {np.linalg.norm(unit_v1):.4f}")  # 1.0
\`\`\`

### 5. Cosine Similarity
\`\`\`python
# Used in: Text similarity, recommendation systems, embeddings

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Example: Word embeddings
king = np.array([0.8, 0.2, 0.9, 0.1])
queen = np.array([0.75, 0.25, 0.85, 0.15])
apple = np.array([0.1, 0.9, 0.2, 0.8])

print(f"Similarity(king, queen): {cosine_similarity(king, queen):.4f}")
print(f"Similarity(king, apple): {cosine_similarity(king, apple):.4f}")
\`\`\`

## ML Applications of Vectors

### Feature Vectors
\`\`\`python
# Each data sample is a vector of features
# House: [sqft, bedrooms, bathrooms, age, price]
house1 = np.array([1500, 3, 2, 10, 250000])
house2 = np.array([2000, 4, 3, 5, 350000])

# Euclidean distance between houses
distance = np.linalg.norm(house1 - house2)
print(f"Distance: {distance:.2f}")
\`\`\`

### Word Embeddings
\`\`\`python
# Words represented as dense vectors
embeddings = {
    'cat': np.array([0.2, 0.8, 0.1, 0.3]),
    'dog': np.array([0.25, 0.75, 0.15, 0.35]),
    'car': np.array([0.9, 0.1, 0.8, 0.2])
}

# Find most similar word to 'cat'
target = embeddings['cat']
for word, vec in embeddings.items():
    sim = cosine_similarity(target, vec)
    print(f"Similarity(cat, {word}): {sim:.4f}")
\`\`\`

## Key Formulas Summary

| Operation | Formula | NumPy |
|-----------|---------|-------|
| Addition | **a** + **b** | \`a + b\` |
| Dot Product | Σaᵢbᵢ | \`np.dot(a, b)\` |
| Magnitude | √(Σaᵢ²) | \`np.linalg.norm(a)\` |
| Cosine Sim | (a·b)/(‖a‖‖b‖) | \`np.dot(a,b)/(norm(a)*norm(b))\` |
| Unit Vector | **a**/‖**a**‖ | \`a / np.linalg.norm(a)\` |
      `,
      codeExamples: [
        {
          title: 'Vector Operations for ML',
          code: `import numpy as np

# Create sample vectors (like word embeddings)
word1 = np.array([0.5, 0.3, 0.8, 0.2])
word2 = np.array([0.4, 0.35, 0.75, 0.25])
word3 = np.array([0.1, 0.9, 0.2, 0.8])

# Cosine similarity function
def cosine_sim(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

print("Word Embedding Similarities:")
print(f"word1 vs word2: {cosine_sim(word1, word2):.4f} (similar)")
print(f"word1 vs word3: {cosine_sim(word1, word3):.4f} (different)")

# Euclidean distance
print(f"\\nEuclidean distances:")
print(f"word1 to word2: {np.linalg.norm(word1 - word2):.4f}")
print(f"word1 to word3: {np.linalg.norm(word1 - word3):.4f}")`
        }
      ]
    },
    {
      id: 'linear-algebra-matrices',
      title: 'Linear Algebra: Matrices',
      description: 'Matrix operations essential for neural networks',
      content: `
# Linear Algebra: Matrices

Matrices are 2D arrays that represent transformations, weights in neural networks, and datasets.

## Creating Matrices

\`\`\`python
import numpy as np

# Create matrix (2D array)
A = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

print(f"Matrix A:\\n{A}")
print(f"Shape: {A.shape}")  # (2, 3) = 2 rows, 3 columns
\`\`\`

## Matrix Operations

### 1. Matrix Addition
\`\`\`python
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

C = A + B
print(f"A + B =\\n{C}")
# [[6, 8], [10, 12]]
\`\`\`

### 2. Matrix Multiplication
\`\`\`python
# Rule: (m×n) @ (n×p) = (m×p)
A = np.array([[1, 2, 3],    # 2×3
              [4, 5, 6]])
              
B = np.array([[7, 8],       # 3×2
              [9, 10],
              [11, 12]])

C = A @ B  # or np.matmul(A, B)
print(f"A @ B =\\n{C}")  # 2×2 result

# Neural network layer: output = input @ weights
inputs = np.array([[1.0, 2.0, 3.0]])  # 1×3 (one sample, 3 features)
weights = np.array([[0.1, 0.2],       # 3×2 (3 inputs, 2 outputs)
                    [0.3, 0.4],
                    [0.5, 0.6]])
output = inputs @ weights              # 1×2
print(f"Neural layer output: {output}")
\`\`\`

### 3. Transpose
\`\`\`python
A = np.array([[1, 2, 3],
              [4, 5, 6]])

A_T = A.T  # Transpose
print(f"Original shape: {A.shape}")      # (2, 3)
print(f"Transposed shape: {A_T.shape}")  # (3, 2)
print(f"A^T =\\n{A_T}")
\`\`\`

### 4. Identity Matrix
\`\`\`python
# Identity matrix: A @ I = A
I = np.eye(3)
print(f"Identity matrix:\\n{I}")

A = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])
              
result = A @ I
print(f"A @ I = A? {np.allclose(result, A)}")
\`\`\`

### 5. Matrix Inverse
\`\`\`python
# A @ A^(-1) = I (only for square, invertible matrices)
A = np.array([[4, 7],
              [2, 6]])

A_inv = np.linalg.inv(A)
print(f"A inverse:\\n{A_inv}")

# Verify: A @ A^(-1) = I
result = A @ A_inv
print(f"A @ A^(-1) =\\n{np.round(result, 4)}")
\`\`\`

### 6. Determinant
\`\`\`python
# Determinant indicates if matrix is invertible (det ≠ 0)
A = np.array([[4, 7],
              [2, 6]])

det = np.linalg.det(A)
print(f"det(A) = {det}")  # 24 - 14 = 10

# Singular matrix (not invertible)
B = np.array([[1, 2],
              [2, 4]])  # Row 2 = 2 × Row 1
print(f"det(B) = {np.linalg.det(B)}")  # ~0
\`\`\`

## Eigenvalues & Eigenvectors

\`\`\`python
# For square matrix A: A·v = λ·v
# v is eigenvector, λ is eigenvalue

A = np.array([[4, 2],
              [1, 3]])

eigenvalues, eigenvectors = np.linalg.eig(A)

print(f"Eigenvalues: {eigenvalues}")
print(f"Eigenvectors:\\n{eigenvectors}")

# Verify: A @ v = λ * v
v = eigenvectors[:, 0]  # First eigenvector
λ = eigenvalues[0]      # First eigenvalue

Av = A @ v
λv = λ * v
print(f"\\nA @ v = {Av}")
print(f"λ * v = {λv}")
print(f"Equal? {np.allclose(Av, λv)}")
\`\`\`

## ML Applications

### Neural Network Forward Pass
\`\`\`python
# Batch of inputs through a layer
np.random.seed(42)

# 4 samples, 3 features each
X = np.random.randn(4, 3)

# Layer: 3 inputs → 2 outputs
W = np.random.randn(3, 2)
b = np.random.randn(1, 2)

# Forward pass: Y = X @ W + b
Y = X @ W + b

print(f"Input shape: {X.shape}")    # (4, 3)
print(f"Weight shape: {W.shape}")   # (3, 2)
print(f"Output shape: {Y.shape}")   # (4, 2)
\`\`\`

### PCA (Principal Component Analysis)
\`\`\`python
# PCA uses eigendecomposition to find principal components
from sklearn.decomposition import PCA

# High-dimensional data
X = np.random.randn(100, 10)  # 100 samples, 10 features

# Reduce to 2 dimensions
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)

print(f"Original shape: {X.shape}")
print(f"Reduced shape: {X_reduced.shape}")
print(f"Explained variance: {pca.explained_variance_ratio_}")
\`\`\`

## Key Matrix Operations Summary

| Operation | NumPy | Shape Result |
|-----------|-------|--------------|
| Multiply | \`A @ B\` | (m,n)@(n,p)→(m,p) |
| Transpose | \`A.T\` | (m,n)→(n,m) |
| Inverse | \`np.linalg.inv(A)\` | Same as A |
| Determinant | \`np.linalg.det(A)\` | Scalar |
| Eigenvalues | \`np.linalg.eig(A)\` | (values, vectors) |
      `,
      codeExamples: [
        {
          title: 'Neural Network Matrix Operations',
          code: `import numpy as np
np.random.seed(42)

# Simple 2-layer neural network
# Input: 3 features, Hidden: 4 neurons, Output: 2 classes

X = np.array([[1.0, 2.0, 3.0],   # Sample 1
              [4.0, 5.0, 6.0]])   # Sample 2

W1 = np.random.randn(3, 4) * 0.1  # Input → Hidden
b1 = np.zeros((1, 4))
W2 = np.random.randn(4, 2) * 0.1  # Hidden → Output
b2 = np.zeros((1, 2))

# Forward pass
hidden = np.maximum(0, X @ W1 + b1)  # ReLU activation
output = hidden @ W2 + b2

print("Neural Network Forward Pass:")
print(f"Input shape: {X.shape}")
print(f"Hidden shape: {hidden.shape}")
print(f"Output shape: {output.shape}")
print(f"\\nOutput:\\n{output}")`
        }
      ]
    },
    // ==================== CALCULUS ====================
    {
      id: 'calculus-derivatives',
      title: 'Calculus: Derivatives & Gradients',
      description: 'Understanding derivatives for optimization in ML',
      content: `
# Calculus: Derivatives & Gradients

Derivatives tell us the rate of change. In ML, they're essential for training models through gradient descent.

## What is a Derivative?

The derivative measures how a function's output changes as its input changes.

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

\`\`\`python
import numpy as np

# Numerical derivative approximation
def numerical_derivative(f, x, h=1e-7):
    return (f(x + h) - f(x - h)) / (2 * h)

# Example: f(x) = x²
f = lambda x: x**2
x = 3

derivative = numerical_derivative(f, x)
print(f"f(x) = x² at x=3")
print(f"Numerical derivative: {derivative:.4f}")
print(f"Analytical derivative (2x): {2*x}")
\`\`\`

## Common Derivatives for ML

| Function | Derivative | Used In |
|----------|------------|---------|
| x² | 2x | Quadratic loss |
| eˣ | eˣ | Softmax |
| ln(x) | 1/x | Cross-entropy |
| 1/(1+e⁻ˣ) | σ(x)(1-σ(x)) | Sigmoid |
| max(0,x) | 1 if x>0 else 0 | ReLU |

\`\`\`python
# Activation functions and their derivatives
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    s = sigmoid(x)
    return s * (1 - s)

def relu(x):
    return np.maximum(0, x)

def relu_derivative(x):
    return (x > 0).astype(float)

# Visualize
x = np.linspace(-5, 5, 100)

print("Sigmoid derivatives at different points:")
for val in [-2, 0, 2]:
    print(f"  x={val}: sigmoid={sigmoid(val):.4f}, derivative={sigmoid_derivative(val):.4f}")

print("\\nReLU derivatives:")
for val in [-2, 0, 2]:
    print(f"  x={val}: relu={relu(val):.4f}, derivative={relu_derivative(val):.4f}")
\`\`\`

## Partial Derivatives (Gradients)

For functions with multiple inputs, partial derivatives measure change with respect to each input.

\`\`\`python
# f(x, y) = x² + 2xy + y²
# ∂f/∂x = 2x + 2y
# ∂f/∂y = 2x + 2y

def f(x, y):
    return x**2 + 2*x*y + y**2

def gradient(x, y):
    df_dx = 2*x + 2*y  # Partial with respect to x
    df_dy = 2*x + 2*y  # Partial with respect to y
    return np.array([df_dx, df_dy])

x, y = 1.0, 2.0
print(f"f({x}, {y}) = {f(x, y)}")
print(f"Gradient: {gradient(x, y)}")
\`\`\`

## Chain Rule (Backpropagation Foundation)

The chain rule lets us compute derivatives of composite functions:

$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$

\`\`\`python
# Neural network: y = sigmoid(wx + b)
# Loss: L = (y - target)²
# We need dL/dw

def forward_and_backward(x, w, b, target):
    # Forward pass
    z = w * x + b           # Linear
    y = sigmoid(z)          # Activation
    loss = (y - target)**2  # Loss
    
    # Backward pass (chain rule)
    dL_dy = 2 * (y - target)              # dLoss/dy
    dy_dz = sigmoid_derivative(z)          # dsigmoid/dz
    dz_dw = x                              # d(wx+b)/dw
    
    # Chain rule: dL/dw = dL/dy * dy/dz * dz/dw
    dL_dw = dL_dy * dy_dz * dz_dw
    dL_db = dL_dy * dy_dz * 1  # dz/db = 1
    
    return loss, dL_dw, dL_db

# Example
x, w, b, target = 2.0, 0.5, 0.1, 1.0
loss, dw, db = forward_and_backward(x, w, b, target)

print(f"Forward: x={x}, w={w}, b={b}")
print(f"Loss: {loss:.6f}")
print(f"dL/dw: {dw:.6f}")
print(f"dL/db: {db:.6f}")
\`\`\`

## Gradient Descent

Use gradients to minimize loss:

$$w_{new} = w_{old} - \\alpha \\cdot \\frac{\\partial L}{\\partial w}$$

\`\`\`python
# Simple gradient descent example
def gradient_descent_demo():
    # Minimize f(x) = (x - 3)²
    # Derivative: f'(x) = 2(x - 3)
    
    x = 0.0  # Starting point
    learning_rate = 0.1
    
    print("Gradient Descent: minimize f(x) = (x-3)²")
    print(f"Starting at x = {x}")
    
    for i in range(10):
        gradient = 2 * (x - 3)  # f'(x)
        x = x - learning_rate * gradient
        loss = (x - 3)**2
        print(f"Step {i+1}: x = {x:.4f}, loss = {loss:.6f}")
    
    print(f"\\nOptimum at x = 3, found x = {x:.4f}")

gradient_descent_demo()
\`\`\`

## Key Takeaways

1. **Derivative** = Rate of change (slope)
2. **Gradient** = Vector of partial derivatives
3. **Chain Rule** = Backpropagation through layers
4. **Gradient Descent** = Move opposite to gradient to minimize loss
      `,
      codeExamples: [
        {
          title: 'Gradient Descent Visualization',
          code: `import numpy as np

# Gradient descent to find minimum of f(x) = x² - 4x + 4
# Derivative: f'(x) = 2x - 4
# Minimum at x = 2

def f(x):
    return x**2 - 4*x + 4

def df(x):
    return 2*x - 4

x = 0.0  # Start far from minimum
lr = 0.1  # Learning rate
history = [x]

print("Finding minimum of f(x) = x² - 4x + 4")
print(f"{'Step':<6} {'x':<10} {'f(x)':<10} {'gradient':<10}")
print("-" * 40)

for i in range(15):
    gradient = df(x)
    x = x - lr * gradient
    history.append(x)
    print(f"{i+1:<6} {x:<10.4f} {f(x):<10.4f} {gradient:<10.4f}")

print(f"\\n✓ Converged to x ≈ {x:.4f} (true minimum: x = 2)")`
        }
      ]
    },
    // ==================== PROBABILITY ====================
    {
      id: 'probability-basics',
      title: 'Probability for ML',
      description: 'Probability theory essential for machine learning',
      content: `
# Probability for Machine Learning

Probability is the foundation of many ML concepts: classification confidence, generative models, and Bayesian methods.

## Basic Probability

\`\`\`python
import numpy as np

# Probability of event A: P(A) = favorable outcomes / total outcomes

# Example: Rolling a die
outcomes = [1, 2, 3, 4, 5, 6]
total = len(outcomes)

# P(even number)
favorable = [2, 4, 6]
p_even = len(favorable) / total
print(f"P(even) = {p_even:.4f}")

# P(greater than 4)
favorable = [5, 6]
p_gt4 = len(favorable) / total
print(f"P(>4) = {p_gt4:.4f}")
\`\`\`

## Conditional Probability

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$

\`\`\`python
# Email classification example
# P(Spam | contains "free") = ?

# Given data:
total_emails = 1000
spam_emails = 200
emails_with_free = 150
spam_with_free = 120

# P(Spam)
p_spam = spam_emails / total_emails
print(f"P(Spam) = {p_spam:.3f}")

# P(contains 'free')
p_free = emails_with_free / total_emails
print(f"P(free) = {p_free:.3f}")

# P(Spam AND free)
p_spam_and_free = spam_with_free / total_emails
print(f"P(Spam AND free) = {p_spam_and_free:.3f}")

# P(Spam | free) = P(Spam AND free) / P(free)
p_spam_given_free = p_spam_and_free / p_free
print(f"P(Spam | free) = {p_spam_given_free:.3f}")
\`\`\`

## Bayes' Theorem

$$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$$

\`\`\`python
# Medical test example
# Disease prevalence: 1%
# Test accuracy: 
#   - P(Positive | Disease) = 0.99 (sensitivity)
#   - P(Negative | No Disease) = 0.95 (specificity)
# Question: P(Disease | Positive test)?

p_disease = 0.01
p_no_disease = 0.99
p_positive_given_disease = 0.99
p_positive_given_no_disease = 0.05  # False positive rate

# P(Positive) = P(Pos|Disease)*P(Disease) + P(Pos|NoDisease)*P(NoDisease)
p_positive = (p_positive_given_disease * p_disease + 
              p_positive_given_no_disease * p_no_disease)

# Bayes' Theorem
p_disease_given_positive = (p_positive_given_disease * p_disease) / p_positive

print("Medical Test Analysis (Bayes' Theorem):")
print(f"P(Disease) = {p_disease:.2%}")
print(f"P(Positive) = {p_positive:.4f}")
print(f"P(Disease | Positive) = {p_disease_given_positive:.2%}")
print(f"\\nEven with positive test, only {p_disease_given_positive:.1%} chance of disease!")
\`\`\`

## Probability Distributions

### Discrete: Bernoulli & Binomial
\`\`\`python
from scipy import stats

# Bernoulli: Single trial (coin flip)
p = 0.6  # P(success)
bernoulli = stats.bernoulli(p)
print(f"Bernoulli(p={p}):")
print(f"  P(X=0) = {bernoulli.pmf(0):.2f}")
print(f"  P(X=1) = {bernoulli.pmf(1):.2f}")

# Binomial: n trials
n, p = 10, 0.6
binomial = stats.binom(n, p)
print(f"\\nBinomial(n={n}, p={p}):")
print(f"  P(X=6) = {binomial.pmf(6):.4f}")
print(f"  P(X≤6) = {binomial.cdf(6):.4f}")
print(f"  Mean = {binomial.mean():.1f}")
\`\`\`

### Continuous: Normal (Gaussian)
\`\`\`python
# Normal distribution - most important in ML!
mu, sigma = 0, 1  # Standard normal
normal = stats.norm(mu, sigma)

print(f"Normal(μ={mu}, σ={sigma}):")
print(f"  P(X < 0) = {normal.cdf(0):.4f}")
print(f"  P(-1 < X < 1) = {normal.cdf(1) - normal.cdf(-1):.4f}")
print(f"  P(-2 < X < 2) = {normal.cdf(2) - normal.cdf(-2):.4f}")

# 68-95-99.7 rule
print(f"\\n68-95-99.7 Rule:")
print(f"  Within 1σ: {normal.cdf(1) - normal.cdf(-1):.1%}")
print(f"  Within 2σ: {normal.cdf(2) - normal.cdf(-2):.1%}")
print(f"  Within 3σ: {normal.cdf(3) - normal.cdf(-3):.1%}")
\`\`\`

## ML Applications

### Naive Bayes Classifier
\`\`\`python
# Simple Naive Bayes example
class SimpleNaiveBayes:
    def __init__(self):
        self.class_probs = {}
        self.feature_probs = {}
    
    def fit(self, X, y):
        classes = np.unique(y)
        n_samples = len(y)
        
        for c in classes:
            # P(class)
            self.class_probs[c] = np.sum(y == c) / n_samples
            # P(feature | class) - simplified
            self.feature_probs[c] = np.mean(X[y == c], axis=0)
    
    def predict_proba(self, x):
        probs = {}
        for c in self.class_probs:
            # P(class) * P(features | class)
            prob = self.class_probs[c]
            probs[c] = prob
        return probs

# Example usage
X = np.array([[1, 1], [1, 0], [0, 1], [0, 0], [1, 1], [0, 0]])
y = np.array([1, 1, 1, 0, 1, 0])

nb = SimpleNaiveBayes()
nb.fit(X, y)
print(f"Class probabilities: {nb.class_probs}")
\`\`\`

### Softmax (Probability from Scores)
\`\`\`python
def softmax(x):
    exp_x = np.exp(x - np.max(x))  # Subtract max for numerical stability
    return exp_x / exp_x.sum()

# Neural network output → probabilities
logits = np.array([2.0, 1.0, 0.1])
probs = softmax(logits)

print("Softmax: Converting scores to probabilities")
print(f"Logits: {logits}")
print(f"Probabilities: {probs}")
print(f"Sum: {probs.sum():.4f}")
\`\`\`
      `,
      codeExamples: [
        {
          title: 'Bayes Theorem in Practice',
          code: `import numpy as np

# Spam filter using Bayes' Theorem
print("=== Spam Filter (Bayes' Theorem) ===\\n")

# Prior probabilities
p_spam = 0.3
p_ham = 0.7

# Word likelihoods
# P(word | spam) and P(word | ham)
words = {
    'free': (0.8, 0.1),      # Very spammy
    'meeting': (0.1, 0.5),   # Not spammy
    'winner': (0.7, 0.05),   # Spammy
    'hello': (0.3, 0.4)      # Neutral
}

def classify_email(email_words):
    # Calculate P(spam | words) using Bayes
    p_words_given_spam = 1.0
    p_words_given_ham = 1.0
    
    for word in email_words:
        if word in words:
            p_words_given_spam *= words[word][0]
            p_words_given_ham *= words[word][1]
    
    # Bayes' Theorem
    p_spam_given_words = p_words_given_spam * p_spam
    p_ham_given_words = p_words_given_ham * p_ham
    
    # Normalize
    total = p_spam_given_words + p_ham_given_words
    return p_spam_given_words / total

# Test emails
emails = [
    ['free', 'winner'],
    ['hello', 'meeting'],
    ['free', 'meeting', 'winner']
]

for email in emails:
    prob = classify_email(email)
    label = "SPAM" if prob > 0.5 else "HAM"
    print(f"Email: {email}")
    print(f"  P(Spam) = {prob:.2%} → {label}\\n")`
        }
      ]
    },
    // ==================== STATISTICS ====================
    {
      id: 'statistics-fundamentals',
      title: 'Statistics for ML',
      description: 'Statistical concepts for data analysis and ML',
      content: `
# Statistics for Machine Learning

Statistics helps us understand data, validate models, and make inferences.

## Descriptive Statistics

\`\`\`python
import numpy as np
from scipy import stats

# Sample data
data = np.array([23, 25, 27, 29, 30, 31, 31, 32, 35, 42])

# Central Tendency
mean = np.mean(data)
median = np.median(data)
mode = stats.mode(data, keepdims=True).mode[0]

print("Central Tendency:")
print(f"  Mean: {mean:.2f}")
print(f"  Median: {median:.2f}")
print(f"  Mode: {mode}")

# Dispersion
variance = np.var(data)
std = np.std(data)
range_val = np.max(data) - np.min(data)

print(f"\\nDispersion:")
print(f"  Variance: {variance:.2f}")
print(f"  Std Dev: {std:.2f}")
print(f"  Range: {range_val}")

# Quartiles
q1, q2, q3 = np.percentile(data, [25, 50, 75])
iqr = q3 - q1

print(f"\\nQuartiles:")
print(f"  Q1 (25%): {q1}")
print(f"  Q2 (50%): {q2}")
print(f"  Q3 (75%): {q3}")
print(f"  IQR: {iqr}")
\`\`\`

## Correlation

\`\`\`python
# Measuring relationship between variables
x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
y = np.array([2.1, 4.2, 5.8, 8.1, 9.9, 12.2, 14.1, 16.0, 17.8, 20.1])

# Pearson correlation
correlation = np.corrcoef(x, y)[0, 1]
print(f"Pearson correlation: {correlation:.4f}")

# Interpretation
if correlation > 0.7:
    print("Strong positive correlation")
elif correlation > 0.3:
    print("Moderate positive correlation")
elif correlation > -0.3:
    print("Weak/no correlation")
elif correlation > -0.7:
    print("Moderate negative correlation")
else:
    print("Strong negative correlation")
\`\`\`

## Hypothesis Testing

\`\`\`python
from scipy import stats

# t-test: Compare means of two groups
group_a = np.array([85, 90, 88, 92, 87, 91, 89, 86])  # Control
group_b = np.array([92, 95, 91, 96, 94, 97, 93, 95])  # Treatment

# Two-sample t-test
t_stat, p_value = stats.ttest_ind(group_a, group_b)

print("Hypothesis Testing: t-test")
print(f"  Group A mean: {group_a.mean():.2f}")
print(f"  Group B mean: {group_b.mean():.2f}")
print(f"  t-statistic: {t_stat:.4f}")
print(f"  p-value: {p_value:.4f}")

alpha = 0.05
if p_value < alpha:
    print(f"  Result: Significant difference (p < {alpha})")
else:
    print(f"  Result: No significant difference (p >= {alpha})")
\`\`\`

## Confidence Intervals

\`\`\`python
# 95% Confidence Interval for the mean
data = np.array([23, 25, 27, 29, 30, 31, 31, 32, 35, 42])

mean = np.mean(data)
std_err = stats.sem(data)  # Standard error of mean
ci = stats.t.interval(0.95, len(data)-1, loc=mean, scale=std_err)

print(f"Sample mean: {mean:.2f}")
print(f"95% Confidence Interval: ({ci[0]:.2f}, {ci[1]:.2f})")
print(f"\\nInterpretation: We're 95% confident the true mean")
print(f"lies between {ci[0]:.2f} and {ci[1]:.2f}")
\`\`\`

## Feature Selection with Statistics

\`\`\`python
# Using correlation for feature selection
np.random.seed(42)

# Simulated features and target
n_samples = 100
feature1 = np.random.randn(n_samples)
feature2 = np.random.randn(n_samples)
feature3 = np.random.randn(n_samples)
target = 2*feature1 + 0.5*feature2 + 0.1*feature3 + np.random.randn(n_samples)*0.5

features = {'feature1': feature1, 'feature2': feature2, 'feature3': feature3}

print("Feature Correlations with Target:")
for name, feat in features.items():
    corr = np.corrcoef(feat, target)[0, 1]
    print(f"  {name}: {corr:.4f}")

print("\\n→ feature1 has strongest correlation (most predictive)")
\`\`\`

## Model Evaluation Statistics

\`\`\`python
# Classification metrics
y_true = np.array([1, 1, 0, 1, 0, 0, 1, 0, 1, 1])
y_pred = np.array([1, 0, 0, 1, 0, 1, 1, 0, 1, 0])

# Confusion matrix components
TP = np.sum((y_true == 1) & (y_pred == 1))
TN = np.sum((y_true == 0) & (y_pred == 0))
FP = np.sum((y_true == 0) & (y_pred == 1))
FN = np.sum((y_true == 1) & (y_pred == 0))

accuracy = (TP + TN) / len(y_true)
precision = TP / (TP + FP) if (TP + FP) > 0 else 0
recall = TP / (TP + FN) if (TP + FN) > 0 else 0
f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0

print("Classification Metrics:")
print(f"  Confusion Matrix:")
print(f"    TP={TP}, FP={FP}")
print(f"    FN={FN}, TN={TN}")
print(f"  Accuracy: {accuracy:.2%}")
print(f"  Precision: {precision:.2%}")
print(f"  Recall: {recall:.2%}")
print(f"  F1-Score: {f1:.2%}")
\`\`\`

## Key Statistical Concepts for ML

| Concept | Use in ML |
|---------|-----------|
| Mean, Std | Feature normalization |
| Correlation | Feature selection |
| p-value | Feature significance |
| Confidence Interval | Model uncertainty |
| Hypothesis Testing | A/B testing models |
      `,
      codeExamples: [
        {
          title: 'Statistical Analysis Pipeline',
          code: `import numpy as np
from scipy import stats

np.random.seed(42)

# Generate sample dataset
n = 100
X = np.random.randn(n, 3)  # 3 features
y = 2*X[:, 0] + 0.5*X[:, 1] + np.random.randn(n)*0.3

print("=== Statistical Analysis Pipeline ===\\n")

# 1. Descriptive Statistics
print("1. Descriptive Statistics:")
for i in range(3):
    print(f"   Feature {i+1}: mean={X[:,i].mean():.3f}, std={X[:,i].std():.3f}")

# 2. Correlation Analysis
print("\\n2. Correlation with Target:")
for i in range(3):
    corr = np.corrcoef(X[:,i], y)[0,1]
    print(f"   Feature {i+1}: r = {corr:.3f}")

# 3. Statistical Significance (t-test on high vs low target)
print("\\n3. Feature Significance Test:")
median_y = np.median(y)
high_group = X[y > median_y]
low_group = X[y <= median_y]

for i in range(3):
    t_stat, p_val = stats.ttest_ind(high_group[:,i], low_group[:,i])
    sig = "***" if p_val < 0.001 else "**" if p_val < 0.01 else "*" if p_val < 0.05 else ""
    print(f"   Feature {i+1}: p={p_val:.4f} {sig}")

print("\\n→ Feature 1 most significant for predicting target")`
        }
      ]
    },
    // ==================== OPTIMIZATION ====================
    {
      id: 'optimization-gradient-descent',
      title: 'Optimization: Gradient Descent',
      description: 'Core optimization algorithms for training ML models',
      content: `
# Optimization: Gradient Descent

Gradient descent is THE algorithm for training neural networks and most ML models.

## Basic Gradient Descent

$$w_{t+1} = w_t - \\alpha \\cdot \\nabla L(w_t)$$

Where:
- $w$ = parameters (weights)
- $\\alpha$ = learning rate
- $\\nabla L$ = gradient of loss function

\`\`\`python
import numpy as np

def gradient_descent(gradient_fn, x_init, learning_rate=0.1, n_iterations=100):
    """Basic gradient descent implementation."""
    x = x_init
    history = [x]
    
    for _ in range(n_iterations):
        grad = gradient_fn(x)
        x = x - learning_rate * grad
        history.append(x)
    
    return x, history

# Example: Minimize f(x) = x² - 4x + 4
# Minimum at x = 2
gradient_fn = lambda x: 2*x - 4  # f'(x)

x_final, history = gradient_descent(gradient_fn, x_init=0.0, learning_rate=0.1, n_iterations=20)
print(f"Found minimum at x = {x_final:.4f}")
print(f"True minimum: x = 2")
\`\`\`

## Learning Rate Effects

\`\`\`python
# Too small: Slow convergence
# Too large: Overshooting/divergence
# Just right: Fast, stable convergence

def test_learning_rates():
    gradient_fn = lambda x: 2*x - 4
    
    learning_rates = [0.01, 0.1, 0.5, 1.0]
    
    for lr in learning_rates:
        x = 0.0
        for i in range(10):
            x = x - lr * gradient_fn(x)
        print(f"LR={lr}: x={x:.4f} after 10 steps")

test_learning_rates()
\`\`\`

## Stochastic Gradient Descent (SGD)

Uses random samples instead of full dataset - faster for large datasets.

\`\`\`python
def sgd_linear_regression(X, y, learning_rate=0.01, epochs=100, batch_size=1):
    """SGD for linear regression."""
    n_samples, n_features = X.shape
    weights = np.zeros(n_features)
    bias = 0
    
    for epoch in range(epochs):
        # Shuffle data
        indices = np.random.permutation(n_samples)
        
        for i in range(0, n_samples, batch_size):
            batch_idx = indices[i:i+batch_size]
            X_batch = X[batch_idx]
            y_batch = y[batch_idx]
            
            # Predictions
            y_pred = X_batch @ weights + bias
            
            # Gradients
            error = y_pred - y_batch
            dw = (X_batch.T @ error) / batch_size
            db = np.mean(error)
            
            # Update
            weights -= learning_rate * dw
            bias -= learning_rate * db
    
    return weights, bias

# Example
np.random.seed(42)
X = np.random.randn(100, 2)
y = 3*X[:, 0] + 2*X[:, 1] + 1 + np.random.randn(100)*0.1

weights, bias = sgd_linear_regression(X, y, learning_rate=0.1, epochs=100)
print(f"Learned weights: {weights}")
print(f"Learned bias: {bias:.4f}")
print(f"True values: [3, 2], bias=1")
\`\`\`

## Momentum

Accelerates SGD by accumulating velocity in consistent directions.

$$v_t = \\beta v_{t-1} + \\nabla L(w_t)$$
$$w_{t+1} = w_t - \\alpha v_t$$

\`\`\`python
def sgd_with_momentum(gradient_fn, x_init, learning_rate=0.1, momentum=0.9, n_iterations=50):
    x = x_init
    velocity = 0
    history = [x]
    
    for _ in range(n_iterations):
        grad = gradient_fn(x)
        velocity = momentum * velocity + grad
        x = x - learning_rate * velocity
        history.append(x)
    
    return x, history

# Compare with and without momentum
gradient_fn = lambda x: 2*x - 4

x_no_momentum, _ = gradient_descent(gradient_fn, 0.0, 0.1, 20)
x_momentum, _ = sgd_with_momentum(gradient_fn, 0.0, 0.1, 0.9, 20)

print(f"Without momentum: {x_no_momentum:.4f}")
print(f"With momentum: {x_momentum:.4f}")
\`\`\`

## Adam Optimizer

Combines momentum with adaptive learning rates - most popular optimizer.

\`\`\`python
def adam_optimizer(gradient_fn, x_init, learning_rate=0.001, 
                   beta1=0.9, beta2=0.999, epsilon=1e-8, n_iterations=100):
    x = x_init
    m = 0  # First moment (mean)
    v = 0  # Second moment (variance)
    history = [x]
    
    for t in range(1, n_iterations + 1):
        grad = gradient_fn(x)
        
        # Update moments
        m = beta1 * m + (1 - beta1) * grad
        v = beta2 * v + (1 - beta2) * grad**2
        
        # Bias correction
        m_hat = m / (1 - beta1**t)
        v_hat = v / (1 - beta2**t)
        
        # Update parameters
        x = x - learning_rate * m_hat / (np.sqrt(v_hat) + epsilon)
        history.append(x)
    
    return x, history

# Compare optimizers
gradient_fn = lambda x: 2*x - 4

x_sgd, _ = gradient_descent(gradient_fn, 0.0, 0.1, 50)
x_adam, _ = adam_optimizer(gradient_fn, 0.0, 0.1, n_iterations=50)

print(f"SGD result: {x_sgd:.6f}")
print(f"Adam result: {x_adam:.6f}")
print(f"True minimum: 2.000000")
\`\`\`

## Optimizer Comparison

| Optimizer | Pros | Cons |
|-----------|------|------|
| SGD | Simple, generalizes well | Slow, sensitive to LR |
| Momentum | Faster, smooths updates | Extra hyperparameter |
| Adam | Adaptive, works well | Can overfit, memory |
| AdamW | Better regularization | Slightly complex |

\`\`\`python
# Modern PyTorch-style usage
print("Common Optimizer Configurations:")
print("  SGD: lr=0.01, momentum=0.9")
print("  Adam: lr=0.001, betas=(0.9, 0.999)")
print("  AdamW: lr=0.001, weight_decay=0.01")
\`\`\`
      `,
      codeExamples: [
        {
          title: 'Complete Optimization Demo',
          code: `import numpy as np

# Minimize Rosenbrock function (classic optimization test)
# f(x, y) = (1-x)² + 100(y-x²)²
# Minimum at (1, 1)

def rosenbrock(params):
    x, y = params
    return (1 - x)**2 + 100*(y - x**2)**2

def rosenbrock_grad(params):
    x, y = params
    dx = -2*(1 - x) - 400*x*(y - x**2)
    dy = 200*(y - x**2)
    return np.array([dx, dy])

def optimize(name, optimizer_fn, init, **kwargs):
    params = np.array(init, dtype=float)
    for i in range(1000):
        params = optimizer_fn(params, rosenbrock_grad(params), i+1, **kwargs)
    return params

# SGD
def sgd_step(params, grad, t, lr=0.001):
    return params - lr * grad

# Adam
m, v = np.zeros(2), np.zeros(2)
def adam_step(params, grad, t, lr=0.001, b1=0.9, b2=0.999):
    global m, v
    m = b1*m + (1-b1)*grad
    v = b2*v + (1-b2)*grad**2
    m_hat = m / (1 - b1**t)
    v_hat = v / (1 - b2**t)
    return params - lr * m_hat / (np.sqrt(v_hat) + 1e-8)

print("Optimizing Rosenbrock Function")
print("Minimum at (1, 1)\\n")

init = [-1.0, 1.0]
print(f"Start: {init}")

result_sgd = optimize("SGD", sgd_step, init)
print(f"SGD:  ({result_sgd[0]:.4f}, {result_sgd[1]:.4f})")

m, v = np.zeros(2), np.zeros(2)  # Reset
result_adam = optimize("Adam", adam_step, init)
print(f"Adam: ({result_adam[0]:.4f}, {result_adam[1]:.4f})")`
        }
      ]
    }
  ]
};
