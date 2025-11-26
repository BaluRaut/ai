// Practice Assignments - Deep Learning (Advanced Level)

export const deepLearningAssignments = {
  // Neural Networks (ID: 1)
  '1': [
    {
      id: 1,
      title: 'Build Neural Network from Scratch',
      difficulty: 'Hard',
      description: 'Create a simple neural network using only NumPy.',
      hints: [
        'Sigmoid: 1/(1+exp(-x))',
        'Forward: input -> hidden -> output',
        'Backprop: update weights with gradients'
      ],
      starterCode: `import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    return x * (1 - x)

# XOR problem
X = np.array([[0,0], [0,1], [1,0], [1,1]])
y = np.array([[0], [1], [1], [0]])

np.random.seed(1)
# TODO: Initialize weights
# hidden: 2 inputs -> 4 neurons
# output: 4 -> 1

# TODO: Training loop

print("Predictions:")`,
      solution: `import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    return x * (1 - x)

X = np.array([[0,0], [0,1], [1,0], [1,1]])
y = np.array([[0], [1], [1], [0]])

np.random.seed(1)
w_hidden = np.random.randn(2, 4)
w_output = np.random.randn(4, 1)

# Training
for i in range(10000):
    hidden = sigmoid(X @ w_hidden)
    output = sigmoid(hidden @ w_output)
    
    output_error = y - output
    output_delta = output_error * sigmoid_derivative(output)
    
    hidden_error = output_delta @ w_output.T
    hidden_delta = hidden_error * sigmoid_derivative(hidden)
    
    w_output += hidden.T @ output_delta * 0.5
    w_hidden += X.T @ hidden_delta * 0.5

print("XOR Neural Network:")
for i, pred in enumerate(output):
    print(f"  {X[i]} -> {pred[0]:.3f} (expected: {y[i][0]})")`
    },
    {
      id: 2,
      title: 'Activation Functions',
      difficulty: 'Easy',
      description: 'Implement and compare activation functions.',
      hints: [
        'ReLU: max(0, x)',
        'Sigmoid: 1/(1+exp(-x))',
        'Tanh: (exp(x)-exp(-x))/(exp(x)+exp(-x))'
      ],
      starterCode: `import numpy as np

def relu(x):
    # TODO: Implement ReLU
    pass

def sigmoid(x):
    # TODO: Implement sigmoid
    pass

def tanh(x):
    # TODO: Implement tanh
    pass

# Test
x = np.array([-2, -1, 0, 1, 2])
print(f"Input: {x}")
print(f"ReLU: {relu(x)}")`,
      solution: `import numpy as np

def relu(x):
    return np.maximum(0, x)

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def tanh(x):
    return np.tanh(x)

x = np.array([-2, -1, 0, 1, 2])
print(f"Input:   {x}")
print(f"ReLU:    {relu(x)}")
print(f"Sigmoid: {sigmoid(x).round(3)}")
print(f"Tanh:    {tanh(x).round(3)}")

print("\\nUse cases:")
print("  ReLU: Hidden layers (fast, no vanishing gradient)")
print("  Sigmoid: Binary output (0-1 probability)")
print("  Tanh: Hidden layers (-1 to 1, zero-centered)")`
    }
  ],

  // CNN (ID: 2)
  '2': [
    {
      id: 1,
      title: 'Convolution Operation',
      difficulty: 'Medium',
      description: 'Implement 2D convolution from scratch.',
      hints: [
        'Kernel slides over input',
        'Element-wise multiply and sum',
        'Output size depends on padding'
      ],
      starterCode: `import numpy as np

def convolve2d(image, kernel):
    h, w = image.shape
    kh, kw = kernel.shape
    out_h = h - kh + 1
    out_w = w - kw + 1
    output = np.zeros((out_h, out_w))
    
    # TODO: Implement convolution
    
    return output

# Test
image = np.array([
    [1, 2, 3, 0],
    [0, 1, 2, 3],
    [3, 0, 1, 2],
    [2, 3, 0, 1]
])

kernel = np.array([
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1]
])

result = convolve2d(image, kernel)
print("Convolution result:")
print(result)`,
      solution: `import numpy as np

def convolve2d(image, kernel):
    h, w = image.shape
    kh, kw = kernel.shape
    out_h = h - kh + 1
    out_w = w - kw + 1
    output = np.zeros((out_h, out_w))
    
    for i in range(out_h):
        for j in range(out_w):
            region = image[i:i+kh, j:j+kw]
            output[i, j] = np.sum(region * kernel)
    
    return output

image = np.array([
    [1, 2, 3, 0],
    [0, 1, 2, 3],
    [3, 0, 1, 2],
    [2, 3, 0, 1]
])

# Sobel edge detection kernel
kernel = np.array([
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1]
])

result = convolve2d(image, kernel)
print("Image (4x4):")
print(image)
print("\\nSobel kernel (vertical edges):")
print(kernel)
print("\\nConvolution result (2x2):")
print(result.astype(int))`
    },
    {
      id: 2,
      title: 'Max Pooling',
      difficulty: 'Easy',
      description: 'Implement max pooling operation.',
      hints: [
        'Take max from each region',
        'Reduces spatial dimensions',
        'Common size: 2x2'
      ],
      starterCode: `import numpy as np

def max_pool2d(feature_map, pool_size=2):
    h, w = feature_map.shape
    out_h = h // pool_size
    out_w = w // pool_size
    output = np.zeros((out_h, out_w))
    
    # TODO: Implement max pooling
    
    return output

feature_map = np.array([
    [1, 3, 2, 4],
    [5, 6, 1, 2],
    [3, 2, 8, 1],
    [4, 1, 3, 5]
])

print("After 2x2 max pooling:")`,
      solution: `import numpy as np

def max_pool2d(feature_map, pool_size=2):
    h, w = feature_map.shape
    out_h = h // pool_size
    out_w = w // pool_size
    output = np.zeros((out_h, out_w))
    
    for i in range(out_h):
        for j in range(out_w):
            region = feature_map[i*pool_size:(i+1)*pool_size, 
                                j*pool_size:(j+1)*pool_size]
            output[i, j] = np.max(region)
    
    return output

feature_map = np.array([
    [1, 3, 2, 4],
    [5, 6, 1, 2],
    [3, 2, 8, 1],
    [4, 1, 3, 5]
])

print("Original (4x4):")
print(feature_map)
print("\\nAfter 2x2 max pooling (2x2):")
print(max_pool2d(feature_map).astype(int))`
    }
  ],

  // RNN (ID: 3)
  '3': [
    {
      id: 1,
      title: 'Simple RNN Cell',
      difficulty: 'Hard',
      description: 'Implement RNN forward pass.',
      hints: [
        'h_t = tanh(W_xh * x + W_hh * h_{t-1})',
        'Hidden state carries information',
        'Process sequence step by step'
      ],
      starterCode: `import numpy as np

class SimpleRNN:
    def __init__(self, input_size, hidden_size):
        self.Wxh = np.random.randn(hidden_size, input_size) * 0.1
        self.Whh = np.random.randn(hidden_size, hidden_size) * 0.1
        self.hidden_size = hidden_size
    
    def forward(self, x_sequence):
        h = np.zeros((self.hidden_size, 1))
        # TODO: Process each timestep
        return h

# Test
rnn = SimpleRNN(input_size=3, hidden_size=4)
sequence = [np.random.randn(3, 1) for _ in range(5)]
final_h = rnn.forward(sequence)
print(f"Final hidden: {final_h.flatten()}")`,
      solution: `import numpy as np

class SimpleRNN:
    def __init__(self, input_size, hidden_size):
        self.Wxh = np.random.randn(hidden_size, input_size) * 0.1
        self.Whh = np.random.randn(hidden_size, hidden_size) * 0.1
        self.hidden_size = hidden_size
    
    def forward(self, x_sequence):
        h = np.zeros((self.hidden_size, 1))
        states = []
        
        for x in x_sequence:
            h = np.tanh(self.Wxh @ x + self.Whh @ h)
            states.append(h.copy())
        
        return h, states

np.random.seed(42)
rnn = SimpleRNN(input_size=3, hidden_size=4)
sequence = [np.random.randn(3, 1) for _ in range(5)]

final_h, all_h = rnn.forward(sequence)
print(f"Sequence length: {len(sequence)}")
print(f"\\nHidden state evolution:")
for t, h in enumerate(all_h):
    print(f"  t={t}: {h.flatten().round(3)}")`
    }
  ],

  // Transformers (ID: 9)
  '9': [
    {
      id: 1,
      title: 'Self-Attention',
      difficulty: 'Hard',
      description: 'Implement scaled dot-product attention.',
      hints: [
        'Attention = softmax(QK^T/sqrt(d))V',
        'Q, K, V from input',
        'Each position attends to all others'
      ],
      starterCode: `import numpy as np

def softmax(x, axis=-1):
    exp_x = np.exp(x - np.max(x, axis=axis, keepdims=True))
    return exp_x / np.sum(exp_x, axis=axis, keepdims=True)

def attention(Q, K, V):
    d_k = Q.shape[-1]
    # TODO: Implement attention
    # scores = Q @ K.T / sqrt(d_k)
    # weights = softmax(scores)
    # output = weights @ V
    return None, None

# Test
seq_len, d_k = 4, 8
Q = np.random.randn(seq_len, d_k)
K = np.random.randn(seq_len, d_k)
V = np.random.randn(seq_len, d_k)

output, weights = attention(Q, K, V)
print("Attention weights:")`,
      solution: `import numpy as np

def softmax(x, axis=-1):
    exp_x = np.exp(x - np.max(x, axis=axis, keepdims=True))
    return exp_x / np.sum(exp_x, axis=axis, keepdims=True)

def attention(Q, K, V):
    d_k = Q.shape[-1]
    scores = Q @ K.T / np.sqrt(d_k)
    weights = softmax(scores, axis=-1)
    output = weights @ V
    return output, weights

np.random.seed(42)
seq_len, d_k = 4, 8
Q = np.random.randn(seq_len, d_k)
K = np.random.randn(seq_len, d_k)
V = np.random.randn(seq_len, d_k)

output, weights = attention(Q, K, V)
print("Self-Attention:")
print(f"Sequence length: {seq_len}, Dimension: {d_k}")
print(f"\\nAttention weights (each row sums to 1):")
print(weights.round(3))
print("\\nEach position can attend to all others!")`
    }
  ]
};
