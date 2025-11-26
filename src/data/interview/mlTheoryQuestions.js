// Interview Preparation - ML Theory Questions

export const mlTheoryQuestions = {
  // ==================== FUNDAMENTALS ====================
  fundamentals: [
    {
      id: 'bias-variance',
      topic: 'Bias-Variance Tradeoff',
      question: 'Explain the bias-variance tradeoff. How does model complexity affect each?',
      difficulty: 'Medium',
      frequency: 'Very Common',
      answer: `
## Bias-Variance Tradeoff

**Bias** measures how far off predictions are from true values on average.
- High bias = underfitting (model too simple)
- Model makes strong assumptions about data

**Variance** measures how much predictions vary for different training sets.
- High variance = overfitting (model too complex)
- Model is too sensitive to training data

### The Tradeoff

\`\`\`
Total Error = Bias² + Variance + Irreducible Error

High Bias ←————————————→ High Variance
Simple Model                Complex Model
Underfitting                  Overfitting
\`\`\`

### Model Complexity Effects

| Complexity | Bias | Variance | Training Error | Test Error |
|------------|------|----------|----------------|------------|
| Low | High | Low | High | High |
| Optimal | Medium | Medium | Medium | Lowest |
| High | Low | High | Low | High |

### Solutions

**Reduce Bias:**
- Use more complex model
- Add more features
- Reduce regularization

**Reduce Variance:**
- Get more training data
- Use regularization (L1, L2)
- Use ensemble methods (bagging)
- Feature selection
      `,
      followUp: [
        'How would you diagnose if your model has high bias or high variance?',
        'How does regularization help with overfitting?',
        'What is the double descent phenomenon?'
      ],
      codeExample: `import numpy as np

# Demonstrating bias-variance with polynomial regression
np.random.seed(42)

# True function: y = sin(x)
X = np.linspace(0, 2*np.pi, 20)
y = np.sin(X) + np.random.randn(20) * 0.2

# Underfitting (high bias): degree 1
# Just right: degree 3-4
# Overfitting (high variance): degree 15

from numpy.polynomial import polynomial as P

for degree in [1, 4, 15]:
    coeffs = np.polyfit(X, y, degree)
    y_pred = np.polyval(coeffs, X)
    train_error = np.mean((y - y_pred)**2)
    print(f"Degree {degree}: Train MSE = {train_error:.4f}")`
    },
    {
      id: 'regularization',
      topic: 'Regularization',
      question: 'What is regularization? Compare L1 and L2 regularization.',
      difficulty: 'Medium',
      frequency: 'Very Common',
      answer: `
## Regularization

Regularization prevents overfitting by adding a penalty term to the loss function.

### L1 Regularization (Lasso)

$$Loss = MSE + \\lambda \\sum|w_i|$$

- Adds absolute value of weights to loss
- **Produces sparse models** (sets some weights to exactly 0)
- Good for feature selection
- Creates diamond-shaped constraint region

### L2 Regularization (Ridge)

$$Loss = MSE + \\lambda \\sum w_i^2$$

- Adds squared weights to loss
- **Shrinks all weights toward zero** (but not exactly zero)
- Better when all features are relevant
- Creates circular constraint region

### Comparison

| Aspect | L1 (Lasso) | L2 (Ridge) |
|--------|------------|------------|
| Sparsity | Yes (feature selection) | No |
| Computation | Harder (not differentiable at 0) | Easier |
| Correlated features | Picks one | Shrinks together |
| Solution | Sparse | Dense |

### Elastic Net

Combines both: $Loss = MSE + \\lambda_1 \\sum|w_i| + \\lambda_2 \\sum w_i^2$

Best of both worlds when you have many correlated features.
      `,
      followUp: [
        'When would you choose L1 over L2?',
        'What happens as lambda increases?',
        'How do you tune the regularization parameter?'
      ],
      codeExample: `from sklearn.linear_model import Lasso, Ridge, ElasticNet
from sklearn.datasets import make_regression
import numpy as np

# Create data with some irrelevant features
X, y = make_regression(n_samples=100, n_features=20, 
                       n_informative=5, noise=10, random_state=42)

# Compare regularization methods
models = {
    'Lasso (L1)': Lasso(alpha=1.0),
    'Ridge (L2)': Ridge(alpha=1.0),
    'ElasticNet': ElasticNet(alpha=1.0, l1_ratio=0.5)
}

for name, model in models.items():
    model.fit(X, y)
    non_zero = np.sum(model.coef_ != 0)
    print(f"{name}: {non_zero} non-zero coefficients")`
    },
    {
      id: 'cross-validation',
      topic: 'Cross-Validation',
      question: 'Explain cross-validation and when to use different types.',
      difficulty: 'Easy',
      frequency: 'Very Common',
      answer: `
## Cross-Validation

Cross-validation is a technique for assessing model performance by testing on multiple train-test splits.

### K-Fold Cross-Validation

1. Split data into k equal folds
2. Train on k-1 folds, test on 1 fold
3. Repeat k times (each fold is test once)
4. Average the results

**Common choices:** k=5 or k=10

### Types of Cross-Validation

| Type | Use Case | Description |
|------|----------|-------------|
| **K-Fold** | General | Standard, works for most cases |
| **Stratified K-Fold** | Classification | Preserves class distribution |
| **Leave-One-Out (LOO)** | Small datasets | k = n, expensive |
| **Time Series Split** | Sequential data | Only use past to predict future |
| **Group K-Fold** | Grouped data | Keep groups together |

### Why Use Cross-Validation?

1. More reliable performance estimate
2. Uses all data for both training and testing
3. Reduces variance of estimate
4. Essential for hyperparameter tuning
      `,
      followUp: [
        'Why is stratified K-fold important for imbalanced data?',
        'When would Leave-One-Out be appropriate?',
        'How does cross-validation help with hyperparameter tuning?'
      ],
      codeExample: `from sklearn.model_selection import (
    KFold, StratifiedKFold, TimeSeriesSplit, cross_val_score
)
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification
import numpy as np

X, y = make_classification(n_samples=100, n_features=10, 
                           n_classes=2, random_state=42)

model = RandomForestClassifier(random_state=42)

# Different CV strategies
cv_methods = {
    'K-Fold (5)': KFold(n_splits=5, shuffle=True, random_state=42),
    'Stratified': StratifiedKFold(n_splits=5, shuffle=True, random_state=42),
    'Time Series': TimeSeriesSplit(n_splits=5)
}

for name, cv in cv_methods.items():
    scores = cross_val_score(model, X, y, cv=cv)
    print(f"{name}: {scores.mean():.3f} (+/- {scores.std()*2:.3f})")`
    },
    {
      id: 'gradient-descent-variants',
      topic: 'Gradient Descent Variants',
      question: 'Compare batch, mini-batch, and stochastic gradient descent.',
      difficulty: 'Medium',
      frequency: 'Common',
      answer: `
## Gradient Descent Variants

### Batch Gradient Descent
- Uses **entire dataset** to compute gradient
- Stable convergence
- Slow for large datasets
- May get stuck in local minima

### Stochastic Gradient Descent (SGD)
- Uses **single sample** per update
- Noisy updates (can escape local minima)
- Fast iterations but more iterations needed
- Never truly converges (oscillates)

### Mini-Batch Gradient Descent
- Uses **small batch** (32-256 samples)
- Best of both worlds
- Utilizes vectorization
- Most commonly used

### Comparison

| Aspect | Batch | SGD | Mini-Batch |
|--------|-------|-----|------------|
| Speed | Slow | Fast | Medium |
| Memory | High | Low | Medium |
| Convergence | Stable | Noisy | Balanced |
| Parallelization | Yes | No | Yes |

### Advanced Optimizers

1. **Momentum**: Accumulates velocity in consistent directions
2. **RMSprop**: Adapts learning rate per parameter
3. **Adam**: Combines momentum + RMSprop (most popular)
      `,
      followUp: [
        'Why is Adam so popular?',
        'What is learning rate scheduling?',
        'How do you choose batch size?'
      ],
      codeExample: `import numpy as np

def gradient_descent_comparison():
    np.random.seed(42)
    # Simple quadratic: f(x) = x^2, gradient = 2x
    
    lr = 0.1
    x_batch = x_sgd = x_mini = 5.0  # Starting point
    
    data = np.random.randn(100)  # Simulated gradients
    batch_size = 10
    
    print("Gradient Descent Comparison")
    print("-" * 40)
    
    for epoch in range(5):
        # Batch GD: average all gradients
        grad_batch = 2 * x_batch
        x_batch -= lr * grad_batch
        
        # SGD: one sample at a time
        for i in range(10):
            grad_sgd = 2 * x_sgd + np.random.randn() * 0.5  # Noisy
            x_sgd -= lr * grad_sgd * 0.1
        
        # Mini-batch
        for i in range(10):
            grad_mini = 2 * x_mini + np.random.randn() * 0.2
            x_mini -= lr * grad_mini * 0.1
        
        print(f"Epoch {epoch+1}: Batch={x_batch:.3f}, SGD={x_sgd:.3f}, Mini={x_mini:.3f}")

gradient_descent_comparison()`
    },
    {
      id: 'precision-recall',
      topic: 'Precision, Recall, and F1-Score',
      question: 'Explain precision, recall, and F1-score. When would you prioritize one over another?',
      difficulty: 'Easy',
      frequency: 'Very Common',
      answer: `
## Classification Metrics

### Confusion Matrix
\`\`\`
                Predicted
              Pos    Neg
Actual Pos    TP     FN
Actual Neg    FP     TN
\`\`\`

### Metrics

**Precision** = TP / (TP + FP)
- "Of all positive predictions, how many were correct?"
- Minimize false positives

**Recall (Sensitivity)** = TP / (TP + FN)
- "Of all actual positives, how many did we catch?"
- Minimize false negatives

**F1-Score** = 2 × (Precision × Recall) / (Precision + Recall)
- Harmonic mean of precision and recall
- Balances both metrics

### When to Prioritize

| Scenario | Prioritize | Reason |
|----------|------------|--------|
| Spam detection | Precision | Don't want to lose important emails |
| Cancer diagnosis | Recall | Don't want to miss any cases |
| Search engines | Precision | Show relevant results first |
| Fraud detection | Recall | Catch all fraudulent transactions |
| Balanced importance | F1-Score | When both matter equally |

### F-Beta Score
$$F_\\beta = (1 + \\beta^2) \\times \\frac{precision \\times recall}{(\\beta^2 \\times precision) + recall}$$

- β > 1: More weight on recall
- β < 1: More weight on precision
      `,
      followUp: [
        'What is the precision-recall tradeoff?',
        'How does the classification threshold affect these metrics?',
        'What is AUC-ROC and when would you use it?'
      ],
      codeExample: `from sklearn.metrics import precision_score, recall_score, f1_score, confusion_matrix
import numpy as np

# Example predictions
y_true = np.array([1, 1, 1, 0, 0, 0, 1, 0, 1, 1])
y_pred = np.array([1, 0, 1, 0, 1, 0, 1, 0, 0, 1])

print("Confusion Matrix:")
print(confusion_matrix(y_true, y_pred))

precision = precision_score(y_true, y_pred)
recall = recall_score(y_true, y_pred)
f1 = f1_score(y_true, y_pred)

print(f"\\nPrecision: {precision:.3f}")
print(f"Recall: {recall:.3f}")
print(f"F1-Score: {f1:.3f}")

# Interpretation
print(f"\\nOf predicted positives, {precision:.0%} were correct")
print(f"We caught {recall:.0%} of all actual positives")`
    }
  ],

  // ==================== DEEP LEARNING ====================
  deepLearning: [
    {
      id: 'vanishing-gradient',
      topic: 'Vanishing/Exploding Gradients',
      question: 'What causes vanishing and exploding gradients? How do you address them?',
      difficulty: 'Medium',
      frequency: 'Common',
      answer: `
## Vanishing/Exploding Gradients

### The Problem

In deep networks, gradients are computed via chain rule (backpropagation):
$$\\frac{\\partial L}{\\partial w_1} = \\frac{\\partial L}{\\partial z_n} \\times \\frac{\\partial z_n}{\\partial z_{n-1}} \\times ... \\times \\frac{\\partial z_2}{\\partial w_1}$$

**Vanishing Gradients:**
- Gradients get exponentially smaller
- Early layers learn very slowly
- Common with sigmoid/tanh activations (derivatives < 1)

**Exploding Gradients:**
- Gradients get exponentially larger
- Training becomes unstable (NaN values)
- Common with deep RNNs

### Solutions

| Solution | Addresses | How |
|----------|-----------|-----|
| ReLU activation | Vanishing | Gradient = 1 for x > 0 |
| Residual connections | Vanishing | Skip connections (ResNet) |
| Batch Normalization | Both | Normalizes layer inputs |
| Weight initialization | Both | Xavier, He initialization |
| Gradient clipping | Exploding | Cap gradient magnitude |
| LSTM/GRU | Vanishing in RNNs | Gating mechanisms |
      `,
      followUp: [
        'Why does ReLU help with vanishing gradients?',
        'How do residual connections help?',
        'What is gradient clipping and when do you use it?'
      ],
      codeExample: `import numpy as np

# Demonstrate vanishing gradients with sigmoid
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    s = sigmoid(x)
    return s * (1 - s)  # Max value is 0.25!

# Chain of 10 layers
n_layers = 10
gradient = 1.0

print("Vanishing gradient demonstration:")
print(f"Initial gradient: {gradient}")

for i in range(n_layers):
    # Sigmoid derivative is at most 0.25
    gradient *= sigmoid_derivative(0)  # At x=0, derivative = 0.25

print(f"After {n_layers} layers: {gradient:.10f}")
print(f"Gradient shrunk by factor of {1/gradient:.0f}x")

# ReLU doesn't have this problem
print("\\nReLU gradient (for positive inputs): always 1")`
    },
    {
      id: 'batch-normalization',
      topic: 'Batch Normalization',
      question: 'Explain batch normalization. Why is it effective?',
      difficulty: 'Medium',
      frequency: 'Common',
      answer: `
## Batch Normalization

### What It Does

Normalizes the inputs to each layer to have zero mean and unit variance:

$$\\hat{x} = \\frac{x - \\mu_B}{\\sqrt{\\sigma_B^2 + \\epsilon}}$$

Then scales and shifts with learned parameters:
$$y = \\gamma \\hat{x} + \\beta$$

### Why It Works

1. **Reduces Internal Covariate Shift**
   - Stabilizes the distribution of layer inputs
   - Each layer doesn't need to continuously adapt

2. **Allows Higher Learning Rates**
   - More stable training
   - Faster convergence

3. **Acts as Regularization**
   - Adds noise (batch statistics vary)
   - Can reduce need for dropout

4. **Reduces Sensitivity to Initialization**
   - Less dependent on careful weight init

### Training vs Inference

| Phase | Mean/Variance Used |
|-------|-------------------|
| Training | Batch statistics |
| Inference | Running average (from training) |
      `,
      followUp: [
        'What is Layer Normalization and when would you use it?',
        'Why might BatchNorm not work well with small batch sizes?',
        'How does BatchNorm interact with dropout?'
      ],
      codeExample: `import numpy as np

class BatchNorm:
    def __init__(self, num_features, momentum=0.1, eps=1e-5):
        self.gamma = np.ones(num_features)
        self.beta = np.zeros(num_features)
        self.running_mean = np.zeros(num_features)
        self.running_var = np.ones(num_features)
        self.momentum = momentum
        self.eps = eps
    
    def forward(self, x, training=True):
        if training:
            mean = x.mean(axis=0)
            var = x.var(axis=0)
            
            # Update running stats
            self.running_mean = (1-self.momentum) * self.running_mean + self.momentum * mean
            self.running_var = (1-self.momentum) * self.running_var + self.momentum * var
        else:
            mean = self.running_mean
            var = self.running_var
        
        # Normalize
        x_norm = (x - mean) / np.sqrt(var + self.eps)
        return self.gamma * x_norm + self.beta

# Demo
np.random.seed(42)
x = np.random.randn(32, 10) * 5 + 10  # Batch of 32, 10 features
bn = BatchNorm(10)

print(f"Before BN: mean={x.mean():.2f}, std={x.std():.2f}")
y = bn.forward(x)
print(f"After BN: mean={y.mean():.4f}, std={y.std():.2f}")`
    },
    {
      id: 'dropout',
      topic: 'Dropout',
      question: 'How does dropout work? Why is it effective for regularization?',
      difficulty: 'Easy',
      frequency: 'Common',
      answer: `
## Dropout

### How It Works

During training:
1. Randomly set fraction p of neurons to zero
2. Scale remaining neurons by 1/(1-p)

During inference:
- Use all neurons (no dropout)
- Weights are already scaled appropriately

### Why It Works

1. **Prevents Co-adaptation**
   - Neurons can't rely on specific other neurons
   - Forces redundant representations

2. **Ensemble Effect**
   - Each training step uses different "sub-network"
   - Final model = average of many networks

3. **Adds Noise**
   - Acts as data augmentation in feature space
   - Improves generalization

### Best Practices

| Layer Type | Typical Dropout Rate |
|------------|---------------------|
| Fully connected | 0.5 |
| Convolutional | 0.0 - 0.3 |
| After embedding | 0.1 - 0.2 |
| RNNs (between layers) | 0.2 - 0.5 |

### Variants
- **DropConnect**: Drop connections instead of neurons
- **Spatial Dropout**: Drop entire feature maps
- **Variational Dropout**: Consistent dropout mask across time
      `,
      followUp: [
        'What is the difference between dropout during training and inference?',
        'Why do we scale activations during dropout?',
        'What is Monte Carlo Dropout?'
      ],
      codeExample: `import numpy as np

def dropout(x, p=0.5, training=True):
    """
    p: probability of KEEPING a neuron
    """
    if not training:
        return x
    
    mask = np.random.binomial(1, p, size=x.shape)
    return (x * mask) / p  # Scale to maintain expected value

# Demo
np.random.seed(42)
x = np.ones((3, 5))  # Simple input

print("Original:")
print(x)

print("\\nWith dropout (p=0.5):")
y = dropout(x, p=0.5, training=True)
print(y)
print(f"Mean before: {x.mean():.2f}, Mean after: {y.mean():.2f}")`
    },
    {
      id: 'cnn-architecture',
      topic: 'CNN Architecture',
      question: 'Explain the key components of a CNN and their purposes.',
      difficulty: 'Medium',
      frequency: 'Very Common',
      answer: `
## CNN Architecture Components

### 1. Convolutional Layers
- Apply learnable filters/kernels
- Detect local patterns (edges, textures)
- Parameters: kernel size, stride, padding
- **Output = (W - K + 2P) / S + 1**

### 2. Pooling Layers
- Reduce spatial dimensions
- Provides translation invariance
- Types: Max pooling, Average pooling
- No learnable parameters

### 3. Activation Functions
- Add non-linearity
- ReLU most common: max(0, x)

### 4. Fully Connected Layers
- At end of network
- Combine features for classification
- Most parameters here

### Key Concepts

| Concept | Purpose |
|---------|---------|
| Local connectivity | Detect local patterns |
| Weight sharing | Reduce parameters, detect anywhere |
| Hierarchical features | Low→high level features |
| Receptive field | Area of input affecting output |

### Typical Architecture

\`\`\`
Input → [Conv → ReLU → Pool] × N → Flatten → FC → Output
\`\`\`
      `,
      followUp: [
        'What is the purpose of 1x1 convolutions?',
        'How do residual connections work in ResNet?',
        'What is transfer learning and why is it effective?'
      ],
      codeExample: `import numpy as np

def conv2d(image, kernel, stride=1, padding=0):
    """Simple 2D convolution."""
    # Add padding
    if padding > 0:
        image = np.pad(image, padding, mode='constant')
    
    h, w = image.shape
    kh, kw = kernel.shape
    
    out_h = (h - kh) // stride + 1
    out_w = (w - kw) // stride + 1
    
    output = np.zeros((out_h, out_w))
    
    for i in range(out_h):
        for j in range(out_w):
            region = image[i*stride:i*stride+kh, j*stride:j*stride+kw]
            output[i, j] = np.sum(region * kernel)
    
    return output

# Edge detection kernel
edge_kernel = np.array([
    [-1, -1, -1],
    [-1,  8, -1],
    [-1, -1, -1]
])

# Sample image
image = np.array([
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
], dtype=float)

print("Image:")
print(image)
print("\\nEdge detection result:")
print(conv2d(image, edge_kernel, padding=1))`
    }
  ],

  // ==================== NLP SPECIFIC ====================
  nlp: [
    {
      id: 'attention-mechanism',
      topic: 'Attention Mechanism',
      question: 'Explain the attention mechanism and its importance in transformers.',
      difficulty: 'Hard',
      frequency: 'Very Common',
      answer: `
## Attention Mechanism

### Core Idea
Instead of fixed context, dynamically focus on relevant parts of input.

### Scaled Dot-Product Attention

$$Attention(Q, K, V) = softmax\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$$

Where:
- **Q (Query)**: What we're looking for
- **K (Key)**: What we have to offer
- **V (Value)**: Actual content to retrieve
- **d_k**: Dimension (for scaling)

### Multi-Head Attention

Run multiple attention operations in parallel:
$$MultiHead(Q,K,V) = Concat(head_1,...,head_h)W^O$$

Each head can attend to different aspects.

### Self-Attention
- Q, K, V all come from same sequence
- Each position attends to all positions
- Captures dependencies regardless of distance

### Why It's Important

1. **Parallelization**: Unlike RNNs, no sequential dependency
2. **Long-range dependencies**: Direct connections
3. **Interpretability**: Attention weights show what model focuses on
      `,
      followUp: [
        'What is the purpose of the scaling factor in attention?',
        'How does multi-head attention differ from single-head?',
        'What are positional encodings and why are they needed?'
      ],
      codeExample: `import numpy as np

def scaled_dot_product_attention(Q, K, V):
    """
    Q, K, V: (seq_len, d_k)
    """
    d_k = Q.shape[-1]
    
    # Compute attention scores
    scores = Q @ K.T / np.sqrt(d_k)
    
    # Softmax
    attention_weights = np.exp(scores - scores.max(axis=-1, keepdims=True))
    attention_weights /= attention_weights.sum(axis=-1, keepdims=True)
    
    # Apply to values
    output = attention_weights @ V
    
    return output, attention_weights

# Example
np.random.seed(42)
seq_len, d_k = 4, 8

Q = np.random.randn(seq_len, d_k)
K = np.random.randn(seq_len, d_k)
V = np.random.randn(seq_len, d_k)

output, weights = scaled_dot_product_attention(Q, K, V)

print("Attention weights (who attends to whom):")
print(np.round(weights, 3))
print("\\nRows sum to 1:", np.round(weights.sum(axis=1), 2))`
    },
    {
      id: 'word-embeddings',
      topic: 'Word Embeddings',
      question: 'Compare Word2Vec, GloVe, and contextual embeddings (BERT).',
      difficulty: 'Medium',
      frequency: 'Common',
      answer: `
## Word Embeddings Comparison

### Word2Vec (2013)
- **Static** embeddings (same vector per word)
- Two architectures:
  - CBOW: Predict word from context
  - Skip-gram: Predict context from word
- Captures semantic relationships
- "king - man + woman ≈ queen"

### GloVe (2014)
- **Static** embeddings
- Based on word co-occurrence statistics
- Combines local context (Word2Vec) + global statistics
- Often performs similarly to Word2Vec

### BERT/Contextual (2018+)
- **Dynamic** embeddings (different based on context)
- "bank" has different embeddings in:
  - "river bank" vs "bank account"
- Pre-trained on large corpora
- Fine-tune for downstream tasks

### Comparison

| Aspect | Word2Vec/GloVe | BERT |
|--------|----------------|------|
| Context | Static | Dynamic |
| Polysemy | One vector | Multiple vectors |
| Training | Unsupervised | Self-supervised |
| Size | Small (300d) | Large (768d+) |
| Compute | Fast | Expensive |
      `,
      followUp: [
        'How does Word2Vec capture semantic relationships?',
        'What is the difference between BERT and GPT?',
        'How do you handle out-of-vocabulary words?'
      ],
      codeExample: `import numpy as np

# Simulated word embeddings
embeddings = {
    'king': np.array([0.8, 0.2, 0.9, 0.1]),
    'queen': np.array([0.75, 0.25, 0.85, 0.15]),
    'man': np.array([0.9, 0.1, 0.3, 0.05]),
    'woman': np.array([0.85, 0.15, 0.25, 0.1])
}

def cosine_sim(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Famous analogy: king - man + woman ≈ queen
result = embeddings['king'] - embeddings['man'] + embeddings['woman']

print("Word analogy: king - man + woman = ?")
print("\\nSimilarity with each word:")
for word, vec in embeddings.items():
    sim = cosine_sim(result, vec)
    print(f"  {word}: {sim:.3f}")
print("\\nClosest to 'queen'!")`
    }
  ],

  // ==================== PRACTICAL ML ====================
  practical: [
    {
      id: 'feature-engineering',
      topic: 'Feature Engineering',
      question: 'What are the most important feature engineering techniques?',
      difficulty: 'Medium',
      frequency: 'Very Common',
      answer: `
## Feature Engineering Techniques

### Numerical Features

1. **Scaling**
   - StandardScaler: (x - mean) / std
   - MinMaxScaler: (x - min) / (max - min)
   - RobustScaler: Uses median, IQR (outlier-resistant)

2. **Transformations**
   - Log transform: Reduce skewness
   - Power transforms: Box-Cox, Yeo-Johnson
   - Binning: Convert continuous to categorical

3. **Interactions**
   - Polynomial features: x₁², x₁×x₂
   - Ratio features: x₁/x₂

### Categorical Features

1. **Encoding**
   - One-hot encoding
   - Label encoding
   - Target encoding (mean of target per category)
   - Frequency encoding

2. **High cardinality**
   - Hashing
   - Embeddings (for deep learning)

### Time Features
- Extract: hour, day, month, weekday
- Cyclical encoding: sin/cos transforms
- Lag features
- Rolling statistics

### Text Features
- TF-IDF
- Count vectors
- Embeddings
      `,
      followUp: [
        'How do you handle missing values?',
        'When would you use target encoding vs one-hot?',
        'How do you select features?'
      ],
      codeExample: `import numpy as np
from collections import Counter

# Common feature engineering techniques

# 1. Log transform for skewed data
skewed = np.array([1, 2, 5, 10, 100, 1000])
log_transformed = np.log1p(skewed)  # log(1+x)
print(f"Original: {skewed}")
print(f"Log transformed: {log_transformed.round(2)}")

# 2. Target encoding
categories = ['A', 'A', 'B', 'B', 'B', 'C']
targets = [1, 0, 1, 1, 0, 1]

target_means = {}
for cat in set(categories):
    mask = [c == cat for c in categories]
    target_means[cat] = np.mean([t for t, m in zip(targets, mask) if m])

print(f"\\nTarget encoding: {target_means}")

# 3. Cyclical encoding for time
hour = 23
hour_sin = np.sin(2 * np.pi * hour / 24)
hour_cos = np.cos(2 * np.pi * hour / 24)
print(f"\\nHour {hour} -> sin={hour_sin:.3f}, cos={hour_cos:.3f}")`
    },
    {
      id: 'handling-imbalanced',
      topic: 'Handling Imbalanced Data',
      question: 'How do you handle imbalanced classification problems?',
      difficulty: 'Medium',
      frequency: 'Very Common',
      answer: `
## Handling Imbalanced Data

### Resampling Techniques

**Oversampling (increase minority)**
- Random oversampling
- SMOTE: Create synthetic samples
- ADASYN: Focus on hard examples

**Undersampling (reduce majority)**
- Random undersampling
- Tomek links: Remove ambiguous samples
- NearMiss: Keep samples near decision boundary

### Algorithmic Approaches

1. **Class Weights**
   - Penalize misclassification of minority more
   - \`class_weight='balanced'\` in sklearn

2. **Threshold Moving**
   - Adjust classification threshold
   - Lower threshold to catch more positives

3. **Ensemble Methods**
   - BalancedRandomForest
   - EasyEnsemble
   - Boosting with class weights

### Evaluation Metrics

| Metric | Use Case |
|--------|----------|
| Precision/Recall | When costs are asymmetric |
| F1-Score | Balance of precision/recall |
| AUC-ROC | Overall discriminative ability |
| AUC-PR | When positive class is rare |
      `,
      followUp: [
        'What is SMOTE and how does it work?',
        'When would you prefer under-sampling over over-sampling?',
        'How do you choose the right threshold?'
      ],
      codeExample: `import numpy as np
from collections import Counter

# Simulate imbalanced data
np.random.seed(42)
n_majority = 900
n_minority = 100

X_majority = np.random.randn(n_majority, 2)
X_minority = np.random.randn(n_minority, 2) + 2

X = np.vstack([X_majority, X_minority])
y = np.array([0]*n_majority + [1]*n_minority)

print("Original distribution:", Counter(y))

# Simple random oversampling
def random_oversample(X, y, target_ratio=1.0):
    minority_mask = y == 1
    X_minority = X[minority_mask]
    
    n_samples_needed = int(n_majority * target_ratio) - n_minority
    indices = np.random.choice(len(X_minority), n_samples_needed, replace=True)
    
    X_oversampled = np.vstack([X, X_minority[indices]])
    y_oversampled = np.hstack([y, np.ones(n_samples_needed)])
    
    return X_oversampled, y_oversampled

X_res, y_res = random_oversample(X, y)
print("After oversampling:", Counter(y_res.astype(int)))`
    }
  ]
};
