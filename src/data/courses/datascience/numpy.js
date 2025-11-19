export const numpy = {
  id: 'numpy',
  title: 'NumPy Essentials',
  description: 'Master numerical computing with NumPy arrays, operations, and best practices.',
  difficulty: 'beginner',
  content: {
    overview: `NumPy (Numerical Python) is the foundational library for scientific computing in Python. It provides:

**Powerful N-dimensional array object (ndarray):** Fast, memory-efficient arrays

**Broadcasting:** Perform operations on arrays of different shapes

**Mathematical functions:** Linear algebra, Fourier transform, random numbers

**Performance:** Written in C, much faster than Python lists

**Why NumPy?:**
✓ 10-100x faster than Python lists for numerical operations
✓ Memory efficient - stores data contiguously
✓ Enables vectorized operations (no loops needed)
✓ Foundation for Pandas, SciPy, scikit-learn, TensorFlow`,

    keyPoints: [
      'NumPy arrays are homogeneous (all elements same type) and fixed-size',
      'Vectorization eliminates slow Python loops - operate on entire arrays at once',
      'Broadcasting allows operations between arrays of different shapes',
      'Use .shape, .dtype, .ndim to inspect array properties',
      'Indexing and slicing are powerful - support boolean and fancy indexing',
      'Universal functions (ufuncs) apply element-wise operations efficiently'
    ],

    useCases: [
      {
        title: 'Scientific Computing',
        description: 'High-performance numerical simulations and mathematical computations',
        example: 'Physics simulations, astronomy calculations, engineering analysis'
      },
      {
        title: 'Machine Learning Preprocessing',
        description: 'Prepare and transform data for ML models',
        example: 'Feature scaling, normalization, array reshaping for neural networks'
      },
      {
        title: 'Image & Signal Processing',
        description: 'Manipulate images and audio signals as arrays',
        example: 'Image filtering, compression, computer vision, audio processing'
      },
      {
        title: 'Statistical Analysis',
        description: 'Perform statistical computations and linear algebra operations',
        example: 'Correlation analysis, regression, eigenvalue decomposition'
      },
      {
        title: 'Financial Modeling',
        description: 'Analyze financial data and build quantitative models',
        example: 'Portfolio optimization, risk analysis, time series forecasting'
      },
      {
        title: 'Deep Learning',
        description: 'Matrix operations foundational to neural networks',
        example: 'TensorFlow and PyTorch are built on NumPy arrays'
      }
    ],

    dos: [
      '✓ Use vectorized operations instead of loops',
      '✓ Specify dtype when creating arrays for memory efficiency',
      '✓ Use .copy() when you need independent arrays',
      '✓ Use broadcasting for operations on different-shaped arrays',
      '✓ Pre-allocate arrays with zeros() or empty() for better performance',
      '✓ Use axis parameter in functions like sum(), mean() for multi-dimensional ops'
    ],

    donts: [
      '✗ Don\'t use Python loops on large NumPy arrays (slow)',
      '✗ Don\'t mix data types unnecessarily - causes upcasting',
      '✗ Don\'t modify arrays during iteration',
      '✗ Don\'t ignore views vs copies - understand when arrays share memory',
      '✗ Don\'t use append() in loops - it\'s inefficient, pre-allocate instead',
      '✗ Don\'t forget axis parameter - sum(arr) vs sum(arr, axis=0) are different'
    ],

    bestPractices: [
      'Use np.array() for small data, np.zeros/ones/empty for large arrays',
      'Leverage broadcasting to avoid unnecessary array expansion',
      'Use boolean indexing for filtering: arr[arr > 5]',
      'Chain operations for readability: (arr * 2 + 3) / 5',
      'Use np.where() for conditional operations instead of loops',
      'Profile code with %timeit in Jupyter to measure performance gains'
    ],

    cheatsheet: `
# NumPy Cheatsheet

## Array Creation
np.array([1,2,3])              # From list
np.zeros((3,4))                # 3x4 array of zeros
np.ones((2,3), dtype=int)      # 2x3 array of ones (integers)
np.arange(0, 10, 2)            # [0,2,4,6,8] - range
np.linspace(0, 1, 5)           # 5 values from 0 to 1
np.random.rand(3,3)            # 3x3 random [0,1)
np.eye(4)                      # 4x4 identity matrix

## Array Properties
arr.shape                      # Dimensions (rows, cols)
arr.dtype                      # Data type
arr.ndim                       # Number of dimensions
arr.size                       # Total elements
arr.nbytes                     # Memory usage

## Indexing & Slicing
arr[2]                         # Element at index 2
arr[1:4]                       # Elements 1,2,3
arr[::2]                       # Every 2nd element
arr[-1]                        # Last element
arr[arr > 5]                   # Boolean indexing
arr[[0,2,4]]                   # Fancy indexing

## Reshaping
arr.reshape(3,4)               # Change shape (must match size)
arr.flatten()                  # 1D array (copy)
arr.ravel()                    # 1D array (view if possible)
arr.T                          # Transpose
arr.resize((3,4))              # In-place reshape

## Math Operations (Vectorized)
arr + 5, arr * 2               # Element-wise operations
arr1 + arr2                    # Element-wise addition
arr ** 2                       # Square each element
np.sqrt(arr)                   # Square root
np.exp(arr), np.log(arr)       # Exponential, logarithm
arr.sum(), arr.mean()          # Sum, mean
arr.min(), arr.max()           # Min, max
arr.std(), arr.var()           # Std dev, variance

## Axis Operations
arr.sum(axis=0)                # Sum columns
arr.sum(axis=1)                # Sum rows
arr.mean(axis=0)               # Mean of each column

## Broadcasting
arr + np.array([1,2,3])        # Add to each row
arr * np.array([[1],[2]])      # Multiply columns

## Useful Functions
np.where(arr > 5, 1, 0)        # Conditional: if >5 then 1 else 0
np.concatenate([a1,a2])        # Join arrays
np.vstack([a1,a2])             # Stack vertically
np.hstack([a1,a2])             # Stack horizontally
np.unique(arr)                 # Unique values
np.sort(arr)                   # Sorted array
np.argsort(arr)                # Indices that would sort

## Linear Algebra
np.dot(a, b)                   # Dot product / matrix multiply
a @ b                          # Matrix multiply (Python 3.5+)
np.linalg.inv(arr)             # Matrix inverse
np.linalg.det(arr)             # Determinant
np.linalg.eig(arr)             # Eigenvalues, eigenvectors

## Random Numbers
np.random.seed(42)             # Set seed for reproducibility
np.random.rand(3,3)            # Uniform [0,1)
np.random.randn(3,3)           # Normal distribution (mean=0, std=1)
np.random.randint(0,10,(3,3))  # Random integers
np.random.choice([1,2,3], 5)   # Random sample with replacement
`,

    codeExamples: [
      {
        title: '1. Creating Arrays - Multiple Ways',
        explanation: `NumPy offers many ways to create arrays depending on your needs. Understanding when to use each method is crucial for performance.`,
        code: `import numpy as np

# From Python list
arr1 = np.array([1, 2, 3, 4, 5])
print("From list:", arr1)

# Specify data type for memory efficiency
arr2 = np.array([1, 2, 3], dtype=np.float32)
print("Float32:", arr2, "dtype:", arr2.dtype)

# 2D array (matrix)
arr3 = np.array([[1, 2, 3], [4, 5, 6]])
print("2D array:\\n", arr3)
print("Shape:", arr3.shape)  # (2, 3) = 2 rows, 3 cols

# Pre-allocated arrays (faster for large data)
zeros = np.zeros((3, 4))      # 3x4 array of 0s
ones = np.ones((2, 3))        # 2x3 array of 1s
empty = np.empty((2, 2))      # Uninitialized (fastest)

# Range-like arrays
arange_arr = np.arange(0, 10, 2)  # [0,2,4,6,8] - like range()
linspace_arr = np.linspace(0, 1, 5)  # 5 evenly spaced values from 0 to 1

print("Arange:", arange_arr)
print("Linspace:", linspace_arr)

# Identity matrix (1s on diagonal)
identity = np.eye(4)
print("Identity 4x4:\\n", identity)`
      },
      {
        title: '2. Indexing and Slicing - Powerful Access',
        explanation: `NumPy indexing is similar to Python lists but more powerful with boolean and fancy indexing.`,
        code: `import numpy as np

arr = np.array([10, 20, 30, 40, 50, 60])

# Basic indexing
print("First element:", arr[0])      # 10
print("Last element:", arr[-1])      # 60

# Slicing [start:stop:step]
print("First 3:", arr[:3])           # [10, 20, 30]
print("Every 2nd:", arr[::2])        # [10, 30, 50]
print("Reverse:", arr[::-1])         # [60, 50, 40, 30, 20, 10]

# 2D array indexing
arr2d = np.array([[1,2,3], [4,5,6], [7,8,9]])
print("Element [1,2]:", arr2d[1, 2])  # 6 (row 1, col 2)
print("First row:", arr2d[0, :])      # [1, 2, 3]
print("First column:", arr2d[:, 0])   # [1, 4, 7]

# Boolean indexing (POWERFUL!)
arr = np.array([1, 5, 10, 15, 20])
mask = arr > 10
print("Mask:", mask)                  # [False, False, False, True, True]
print("Values > 10:", arr[mask])      # [15, 20]
print("One-liner:", arr[arr > 10])    # [15, 20]

# Fancy indexing (index with array)
indices = [0, 2, 4]
print("Elements at 0,2,4:", arr[indices])  # [1, 10, 20]`
      },
      {
        title: '3. Vectorization - Avoid Loops!',
        explanation: `Vectorization is NumPy's superpower. Operations on entire arrays are 10-100x faster than Python loops.`,
        code: `import numpy as np
import time

# SLOW: Python loop
arr_list = list(range(1000000))
start = time.time()
result = [x * 2 for x in arr_list]
print(f"Python loop: {time.time() - start:.4f}s")

# FAST: NumPy vectorization
arr_np = np.arange(1000000)
start = time.time()
result = arr_np * 2
print(f"NumPy vectorized: {time.time() - start:.4f}s")

# Element-wise operations
arr = np.array([1, 2, 3, 4, 5])
print("Original:", arr)
print("Times 2:", arr * 2)           # [2, 4, 6, 8, 10]
print("Plus 10:", arr + 10)          # [11, 12, 13, 14, 15]
print("Squared:", arr ** 2)          # [1, 4, 9, 16, 25]

# Operations between arrays
arr1 = np.array([1, 2, 3])
arr2 = np.array([10, 20, 30])
print("Sum:", arr1 + arr2)           # [11, 22, 33]
print("Product:", arr1 * arr2)       # [10, 40, 90]

# Universal functions (ufuncs)
arr = np.array([1, 4, 9, 16])
print("Square root:", np.sqrt(arr))  # [1., 2., 3., 4.]
print("Exponential:", np.exp([1, 2, 3]))
print("Log:", np.log([1, 10, 100]))`
      },
      {
        title: '4. Broadcasting - Different Shapes, No Problem',
        explanation: `Broadcasting allows NumPy to perform operations on arrays of different shapes without creating copies. It's memory-efficient and fast.`,
        code: `import numpy as np

# Scalar broadcasting (simplest case)
arr = np.array([1, 2, 3, 4])
print("Array + 10:", arr + 10)  # [11, 12, 13, 14]
# 10 is "broadcast" to [10, 10, 10, 10]

# 1D + 1D broadcasting
arr2d = np.array([[1, 2, 3],
                  [4, 5, 6]])
arr1d = np.array([10, 20, 30])

# Add arr1d to each row of arr2d
result = arr2d + arr1d
print("Broadcasting 1D to 2D:\\n", result)
# [[11, 22, 33],
#  [14, 25, 36]]

# Column vector broadcasting
col_vector = np.array([[1], [2]])  # 2x1
print("Column vector shape:", col_vector.shape)

result = arr2d * col_vector
print("Broadcasting column:\\n", result)
# [[1,  2,  3],
#  [8, 10, 12]]

# Broadcasting rule: Dimensions are compatible if:
# 1. They are equal, OR
# 2. One of them is 1

a = np.ones((3, 4))    # 3x4
b = np.ones((4,))      # 4,
# b is broadcast to (1, 4) then to (3, 4)
print("(3,4) + (4,) works! Shape:", (a + b).shape)

# This will FAIL - incompatible shapes
# c = np.ones((3, 5))
# result = a + c  # ValueError: shapes don't match`
      },
      {
        title: '5. Reshaping and Transposing',
        explanation: `Changing array dimensions is common in data science. NumPy provides efficient methods for reshaping.`,
        code: `import numpy as np

arr = np.arange(12)  # [0, 1, 2, ..., 11]
print("Original:", arr, "Shape:", arr.shape)

# Reshape to 2D (must match total size)
arr2d = arr.reshape(3, 4)  # 3 rows, 4 cols
print("Reshaped 3x4:\\n", arr2d)

# Reshape to 3D
arr3d = arr.reshape(2, 3, 2)
print("Reshaped 2x3x2 shape:", arr3d.shape)

# Transpose (swap rows and cols)
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
print("Original 2x3:\\n", arr2d)
print("Transposed 3x2:\\n", arr2d.T)

# Flatten to 1D
flat = arr2d.flatten()  # Creates copy
print("Flattened:", flat)

# Ravel to 1D (view if possible, faster)
rav = arr2d.ravel()
print("Raveled:", rav)

# -1 in reshape = "infer this dimension"
arr = np.arange(24)
reshaped = arr.reshape(4, -1)  # 4 rows, auto-compute cols
print("Shape with -1:", reshaped.shape)  # (4, 6)

# Add new axis
arr1d = np.array([1, 2, 3])
arr2d_row = arr1d[np.newaxis, :]  # (1, 3) row vector
arr2d_col = arr1d[:, np.newaxis]  # (3, 1) col vector
print("Row vector shape:", arr2d_row.shape)
print("Col vector shape:", arr2d_col.shape)`
      },
      {
        title: '6. Aggregation Functions',
        explanation: `NumPy provides statistical functions that can operate on entire arrays or along specific axes.`,
        code: `import numpy as np

arr = np.array([[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]])

# Aggregate entire array
print("Sum:", arr.sum())          # 45
print("Mean:", arr.mean())        # 5.0
print("Std:", arr.std())          # ~2.58
print("Min:", arr.min())          # 1
print("Max:", arr.max())          # 9

# Axis operations
# axis=0 = operate down columns (collapse rows)
# axis=1 = operate across rows (collapse columns)

print("Sum each column (axis=0):", arr.sum(axis=0))  
# [12, 15, 18] = sum down each column

print("Sum each row (axis=1):", arr.sum(axis=1))
# [6, 15, 24] = sum across each row

print("Mean of columns:", arr.mean(axis=0))
# [4., 5., 6.]

# Other useful functions
print("Cumulative sum:", arr.cumsum())
# [1, 3, 6, 10, 15, 21, 28, 36, 45]

print("Median:", np.median(arr))  # 5.0
print("Percentile (75th):", np.percentile(arr, 75))  # 7.5

# argmin, argmax return indices
print("Index of min:", arr.argmin())  # 0
print("Index of max:", arr.argmax())  # 8`
      },
      {
        title: '7. Boolean Masking and np.where()',
        explanation: `Conditional operations without loops - filter and transform data efficiently.`,
        code: `import numpy as np

arr = np.array([1, 5, 10, 15, 20, 25])

# Boolean masking
mask = arr > 10
print("Mask:", mask)
# [False, False, False, True, True, True]

filtered = arr[mask]
print("Values > 10:", filtered)  # [15, 20, 25]

# Modify in-place with mask
arr[arr > 10] = 100
print("After masking:", arr)
# [1, 5, 10, 100, 100, 100]

# np.where() - vectorized if-else
arr = np.array([1, 5, 10, 15, 20])
result = np.where(arr > 10, 'high', 'low')
print("Where > 10:", result)
# ['low' 'low' 'low' 'high' 'high']

# Replace values conditionally
arr = np.array([1, -5, 10, -15, 20])
positive_only = np.where(arr < 0, 0, arr)
print("Negatives -> 0:", positive_only)
# [1, 0, 10, 0, 20]

# Multiple conditions
arr = np.array([1, 5, 10, 15, 20])
result = np.where((arr > 5) & (arr < 15), 'medium', 
                  np.where(arr >= 15, 'high', 'low'))
print("Categorized:", result)
# ['low' 'low' 'medium' 'high' 'high']

# np.clip() - limit values to range
arr = np.array([1, 5, 10, 15, 20])
clipped = np.clip(arr, 5, 15)
print("Clipped [5,15]:", clipped)
# [5, 5, 10, 15, 15]`
      },
      {
        title: '8. Linear Algebra Operations',
        explanation: `NumPy excels at matrix operations - essential for data science and machine learning.`,
        code: `import numpy as np

# Matrix multiplication
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Element-wise multiplication (NOT matrix multiply)
print("Element-wise A * B:\\n", A * B)

# Matrix multiplication (dot product)
print("Matrix multiply (A @ B):\\n", A @ B)
# [[19, 22],
#  [43, 50]]

# Also: np.dot(A, B)
print("Using np.dot:\\n", np.dot(A, B))

# Transpose
print("A transpose:\\n", A.T)

# Determinant
det = np.linalg.det(A)
print("Determinant of A:", det)  # -2.0

# Matrix inverse
A_inv = np.linalg.inv(A)
print("Inverse of A:\\n", A_inv)

# Verify: A @ A_inv should be identity
print("A @ A_inv (should be I):\\n", A @ A_inv)

# Eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)
print("Eigenvalues:", eigenvalues)
print("Eigenvectors:\\n", eigenvectors)

# Solving linear equations: Ax = b
A = np.array([[3, 1], [1, 2]])
b = np.array([9, 8])
x = np.linalg.solve(A, b)
print("Solution to Ax=b:", x)  # [2., 3.]
print("Verify Ax:", A @ x)     # [9., 8.]`
      },
      {
        title: '9. Random Numbers - Essential for ML',
        explanation: `NumPy's random module is crucial for data simulation, sampling, and machine learning.`,
        code: `import numpy as np

# Set seed for reproducibility
np.random.seed(42)

# Uniform distribution [0, 1)
rand = np.random.rand(5)
print("Uniform [0,1):", rand)

# Uniform in custom range [low, high)
rand_range = np.random.uniform(10, 20, 5)
print("Uniform [10,20):", rand_range)

# Normal (Gaussian) distribution
# mean=0, std=1
randn = np.random.randn(5)
print("Normal(0,1):", randn)

# Normal with custom mean and std
custom_normal = np.random.normal(100, 15, 5)
print("Normal(100,15):", custom_normal)

# Random integers
randint = np.random.randint(1, 10, 5)
print("Random ints [1,10):", randint)

# Random choice from array
choices = np.random.choice(['A', 'B', 'C'], 10)
print("Random choices:", choices)

# Random choice with probabilities
choices_weighted = np.random.choice(
    ['A', 'B', 'C'], 
    10, 
    p=[0.5, 0.3, 0.2]  # A=50%, B=30%, C=20%
)
print("Weighted choices:", choices_weighted)

# Shuffle array in-place
arr = np.arange(10)
np.random.shuffle(arr)
print("Shuffled:", arr)

# Random sample (without replacement)
sample = np.random.choice(100, 5, replace=False)
print("Sample of 5 from 0-99:", sample)`
      },
      {
        title: '10. Performance Tips - Views vs Copies',
        explanation: `Understanding when NumPy creates copies vs views is critical for memory and performance.`,
        code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])

# Slicing creates a VIEW (shares memory)
slice_view = arr[1:4]
print("Original:", arr)
print("Slice:", slice_view)

# Modify the view - changes original!
slice_view[0] = 999
print("After modifying slice:")
print("Original:", arr)  # [1, 999, 3, 4, 5] - CHANGED!
print("Slice:", slice_view)

# Create independent COPY
arr = np.array([1, 2, 3, 4, 5])
arr_copy = arr.copy()
arr_copy[0] = 999
print("\\nAfter modifying copy:")
print("Original:", arr)      # [1, 2, 3, 4, 5] - unchanged
print("Copy:", arr_copy)     # [999, 2, 3, 4, 5]

# Check if array is a view
print("\\nIs view?", slice_view.base is not None)  # True
print("Is copy?", arr_copy.base is not None)       # False

# Reshaping usually creates a view
arr2d = arr.reshape(5, 1)
print("Reshape is view?", arr2d.base is not None)  # True

# But some operations force a copy
arr_flat = arr.flatten()  # Copy
arr_rav = arr.ravel()     # View (if possible)

print("Flatten is view?", arr_flat.base is not None)  # False
print("Ravel is view?", arr_rav.base is not None)     # True`
      }
    ]
  },

  quiz: [
    {
      question: 'What is the main advantage of NumPy arrays over Python lists?',
      options: [
        'They can store strings',
        'They are 10-100x faster for numerical operations',
        'They can have variable sizes',
        'They use less memory for text data'
      ],
      correctAnswer: 1,
      explanation: 'NumPy arrays are optimized for numerical computing, written in C, and perform vectorized operations that are much faster than Python loops.'
    },
    {
      question: 'What does arr.shape return for a 2D array?',
      options: [
        'The total number of elements',
        'The data type',
        'A tuple (rows, columns)',
        'The memory size'
      ],
      correctAnswer: 2,
      explanation: 'shape returns a tuple representing dimensions. For 2D arrays, it\'s (rows, columns).'
    },
    {
      question: 'What is broadcasting in NumPy?',
      options: [
        'Sending data over a network',
        'Performing operations on arrays of different shapes',
        'Making arrays larger',
        'Converting between data types'
      ],
      correctAnswer: 1,
      explanation: 'Broadcasting allows NumPy to perform operations on arrays with different shapes by automatically expanding smaller arrays to match dimensions.'
    },
    {
      question: 'Which is faster: arr * 2 or [x * 2 for x in arr]?',
      options: [
        'List comprehension',
        'NumPy vectorization (arr * 2)',
        'They are the same speed',
        'Depends on array size'
      ],
      correctAnswer: 1,
      explanation: 'Vectorized NumPy operations (arr * 2) are 10-100x faster than Python loops because they execute in optimized C code.'
    },
    {
      question: 'What does arr[arr > 5] do?',
      options: [
        'Raises an error',
        'Returns a boolean array',
        'Returns elements greater than 5',
        'Modifies the array'
      ],
      correctAnswer: 2,
      explanation: 'This is boolean indexing. arr > 5 creates a boolean mask, and arr[mask] returns only elements where the mask is True.'
    },
    {
      question: 'What\'s the difference between arr.flatten() and arr.ravel()?',
      options: [
        'No difference',
        'flatten() always returns a copy, ravel() returns a view if possible',
        'flatten() is faster',
        'ravel() only works on 1D arrays'
      ],
      correctAnswer: 1,
      explanation: 'flatten() always creates a new array (copy), while ravel() returns a view of the original array when possible, making it more memory-efficient.'
    },
    {
      question: 'In a 2D array, what does arr.sum(axis=0) compute?',
      options: [
        'Sum of all elements',
        'Sum of each row',
        'Sum of each column',
        'Nothing, it causes an error'
      ],
      correctAnswer: 2,
      explanation: 'axis=0 means "operate down the rows", collapsing them and producing the sum for each column.'
    },
    {
      question: 'What does np.where(arr > 10, 1, 0) do?',
      options: [
        'Returns indices where arr > 10',
        'Returns 1 where arr > 10, else 0',
        'Filters arr to values > 10',
        'Counts elements > 10'
      ],
      correctAnswer: 1,
      explanation: 'np.where(condition, x, y) is a vectorized if-else: returns x where condition is True, y where False.'
    },
    {
      question: 'Which creates a 3x3 identity matrix?',
      options: [
        'np.ones((3, 3))',
        'np.zeros((3, 3))',
        'np.eye(3)',
        'np.diag([1, 1, 1])'
      ],
      correctAnswer: 2,
      explanation: 'np.eye(n) creates an n×n identity matrix (1s on diagonal, 0s elsewhere). np.diag([1,1,1]) also works but eye() is more direct.'
    },
    {
      question: 'What happens when you modify a NumPy slice?',
      options: [
        'Only the slice is modified',
        'Both the slice and original array are modified',
        'An error is raised',
        'A new array is created'
      ],
      correctAnswer: 1,
      explanation: 'Slices create views, not copies. Modifying a slice modifies the original array. Use .copy() for independent arrays.'
    },
    {
      question: 'What does arr.T do?',
      options: [
        'Converts to tuple',
        'Transposes the array (swaps rows and columns)',
        'Returns the total size',
        'Returns the data type'
      ],
      correctAnswer: 1,
      explanation: '.T transposes the array, swapping rows and columns. For a 2x3 array, .T produces a 3x2 array.'
    },
    {
      question: 'Which is the correct way to create a NumPy array of 100 zeros?',
      options: [
        'np.array([0] * 100)',
        'np.zeros(100)',
        'np.empty(100)',
        'Both A and B'
      ],
      correctAnswer: 3,
      explanation: 'Both work, but np.zeros(100) is more efficient and idiomatic. np.array([0]*100) creates a Python list first, then converts it.'
    },
    {
      question: 'What is vectorization?',
      options: [
        'Converting scalars to vectors',
        'Applying operations to entire arrays without explicit loops',
        'Making arrays larger',
        'Converting between data types'
      ],
      correctAnswer: 1,
      explanation: 'Vectorization means performing operations on entire arrays at once in optimized C code, eliminating slow Python loops.'
    },
    {
      question: 'How do you set a random seed for reproducibility?',
      options: [
        'np.seed(42)',
        'np.random.seed(42)',
        'random.seed(42)',
        'np.set_seed(42)'
      ],
      correctAnswer: 1,
      explanation: 'np.random.seed(42) sets the seed for NumPy\'s random number generator, ensuring reproducible results.'
    },
    {
      question: 'What does np.arange(0, 10, 2) return?',
      options: [
        '[0, 2, 4, 6, 8]',
        '[0, 2, 4, 6, 8, 10]',
        '[2, 4, 6, 8, 10]',
        '[0, 1, 2, 3, 4]'
      ],
      correctAnswer: 0,
      explanation: 'np.arange(start, stop, step) works like Python range(): starts at 0, stops before 10, steps by 2.'
    },
    {
      question: 'What is the purpose of dtype in NumPy?',
      options: [
        'To describe the array shape',
        'To specify the data type of array elements',
        'To set the number of dimensions',
        'To define array size'
      ],
      correctAnswer: 1,
      explanation: 'dtype specifies the data type (int32, float64, etc.). Choosing the right dtype saves memory and improves performance.'
    },
    {
      question: 'Which operation performs matrix multiplication?',
      options: [
        'A * B',
        'A @ B',
        'A + B',
        'A // B'
      ],
      correctAnswer: 1,
      explanation: 'A @ B performs matrix multiplication (also np.dot(A, B)). A * B does element-wise multiplication.'
    },
    {
      question: 'What does arr.reshape(-1, 1) do?',
      options: [
        'Creates a column vector (n rows, 1 column)',
        'Flattens the array',
        'Creates a row vector',
        'Raises an error'
      ],
      correctAnswer: 0,
      explanation: '-1 means "infer this dimension". reshape(-1, 1) creates a column vector with as many rows as needed.'
    },
    {
      question: 'How do you find the index of the maximum value?',
      options: [
        'arr.max()',
        'arr.argmax()',
        'arr.index(max(arr))',
        'np.where(arr == arr.max())'
      ],
      correctAnswer: 1,
      explanation: 'argmax() returns the index of the maximum value. max() returns the value itself.'
    },
    {
      question: 'What is the result of np.array([1,2,3]) + np.array([[1],[2]])?',
      options: [
        'Error - incompatible shapes',
        '[[2,3,4], [3,4,5]]',
        '[2,4,6]',
        '[[1,2,3], [2,4,6]]'
      ],
      correctAnswer: 1,
      explanation: 'Broadcasting: (3,) + (2,1) → (1,3) + (2,1) → (2,3). [1,2,3] is added to each row of [[1],[2]].'
    }
  ]
};
