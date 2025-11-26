// Practice Assignments - Fundamentals (Basic Level)

export const fundamentalsAssignments = {
  // What is AI
  'what-is-ai': [
    {
      id: 1,
      title: 'Your First AI - Pattern Recognizer',
      difficulty: 'Easy',
      description: 'Create a simple rule-based AI that predicts exam scores based on study hours.',
      hints: [
        'Look at the pattern in the data',
        'Find the relationship between hours and scores',
        'Create a simple formula: score = base + (hours × points_per_hour)'
      ],
      starterCode: `# Your First AI: Simple Pattern Recognition
# No libraries needed - just Python!

# Training data: hours studied vs exam score
hours = [1, 2, 3, 4, 5, 6, 7, 8]
scores = [50, 55, 60, 65, 70, 75, 80, 85]

# TODO: Find the pattern
# Hint: Each hour adds about 5 points, starting from ~45

def predict_score(study_hours):
    # TODO: Complete the formula
    base_score = 0  # Fix this
    points_per_hour = 0  # Fix this
    predicted = base_score + (study_hours * points_per_hour)
    return predicted

# Test your AI
print(f"3 hours -> {predict_score(3)} (should be ~60)")
print(f"9 hours -> {predict_score(9)} (should be ~90)")`,
      solution: `# Your First AI: Simple Pattern Recognition

hours = [1, 2, 3, 4, 5, 6, 7, 8]
scores = [50, 55, 60, 65, 70, 75, 80, 85]

def predict_score(study_hours):
    base_score = 45
    points_per_hour = 5
    predicted = base_score + (study_hours * points_per_hour)
    return predicted

print(f"3 hours -> {predict_score(3)} (expected ~60)")
print(f"9 hours -> {predict_score(9)} (expected ~90)")

# This is AI at its core: Finding patterns to make predictions!`
    }
  ],

  // NumPy Basics
  'python-numpy-basics': [
    {
      id: 1,
      title: 'NumPy Array Operations',
      difficulty: 'Easy',
      description: 'Learn basic NumPy array operations fundamental to AI.',
      hints: [
        'Use np.array() to create arrays',
        'Arrays support element-wise operations',
        'Use .shape to check dimensions'
      ],
      starterCode: `import numpy as np

# TODO: Create a 1D array with values 1-5
arr = None

# TODO: Create a 2D array (3x3)
matrix = None

# TODO: Perform element-wise operations
# Multiply arr by 2, then add 10

print("Array:", arr)
print("Matrix shape:", matrix.shape if matrix is not None else None)`,
      solution: `import numpy as np

# Create 1D array
arr = np.array([1, 2, 3, 4, 5])

# Create 2D array
matrix = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

# Element-wise operations
result = arr * 2 + 10

print("Array:", arr)
print("Matrix shape:", matrix.shape)
print("Result:", result)
print("Matrix sum:", matrix.sum())
print("Matrix mean:", matrix.mean())`
    },
    {
      id: 2,
      title: 'Statistical Operations',
      difficulty: 'Medium',
      description: 'Calculate statistics using NumPy.',
      hints: [
        'Use np.mean(), np.std(), np.median()',
        'axis=0 for column-wise, axis=1 for row-wise',
        'np.percentile() for percentiles'
      ],
      starterCode: `import numpy as np

# Student scores: rows=students, cols=subjects
scores = np.array([
    [85, 90, 78],
    [92, 88, 95],
    [76, 82, 80],
    [88, 94, 91]
])

# TODO: Calculate mean score per subject (column)
subject_means = None

# TODO: Calculate mean score per student (row)
student_means = None

# TODO: Find the highest and lowest overall scores
highest = None
lowest = None

print("Subject averages:", subject_means)
print("Student averages:", student_means)`,
      solution: `import numpy as np

scores = np.array([
    [85, 90, 78],
    [92, 88, 95],
    [76, 82, 80],
    [88, 94, 91]
])

# Mean per subject (column-wise)
subject_means = np.mean(scores, axis=0)

# Mean per student (row-wise)
student_means = np.mean(scores, axis=1)

# Highest and lowest
highest = np.max(scores)
lowest = np.min(scores)

print("Subject averages:", subject_means)
print("Student averages:", student_means)
print(f"Highest score: {highest}")
print(f"Lowest score: {lowest}")
print(f"Overall std: {np.std(scores):.2f}")`
    }
  ],

  // Pandas Basics
  'python-pandas-basics': [
    {
      id: 1,
      title: 'DataFrame Basics',
      difficulty: 'Easy',
      description: 'Create and manipulate DataFrames.',
      hints: [
        'pd.DataFrame() creates from dict',
        'Use df["column"] to select columns',
        'Use df.head() to preview data'
      ],
      starterCode: `import pandas as pd

# TODO: Create a DataFrame with columns: name, age, city
data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['NYC', 'LA', 'Chicago']
}

df = None  # Create DataFrame here

# TODO: Add a new column 'country' with value 'USA'

# TODO: Select only name and age columns

print(df)`,
      solution: `import pandas as pd

data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['NYC', 'LA', 'Chicago']
}

df = pd.DataFrame(data)

# Add new column
df['country'] = 'USA'

# Select columns
name_age = df[['name', 'age']]

print("Full DataFrame:")
print(df)
print("\\nName and Age only:")
print(name_age)
print("\\nBasic info:")
print(df.describe())`
    },
    {
      id: 2,
      title: 'Data Filtering and Aggregation',
      difficulty: 'Medium',
      description: 'Filter data and calculate aggregations.',
      hints: [
        'Use df[df["col"] > value] for filtering',
        'Use df.groupby() for grouping',
        'Use .mean(), .sum(), .count() for aggregations'
      ],
      starterCode: `import pandas as pd

df = pd.DataFrame({
    'department': ['Sales', 'IT', 'Sales', 'IT', 'HR'],
    'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    'salary': [50000, 60000, 55000, 65000, 45000]
})

# TODO: Filter employees with salary > 50000
high_salary = None

# TODO: Calculate average salary by department
dept_avg = None

# TODO: Count employees per department
dept_count = None

print("High salary employees:")
print(high_salary)`,
      solution: `import pandas as pd

df = pd.DataFrame({
    'department': ['Sales', 'IT', 'Sales', 'IT', 'HR'],
    'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    'salary': [50000, 60000, 55000, 65000, 45000]
})

# Filter high salary
high_salary = df[df['salary'] > 50000]

# Average by department
dept_avg = df.groupby('department')['salary'].mean()

# Count per department
dept_count = df['department'].value_counts()

print("High salary employees:")
print(high_salary)
print("\\nAverage salary by dept:")
print(dept_avg)
print("\\nEmployees per dept:")
print(dept_count)`
    }
  ],

  // Data Preprocessing
  'data-preprocessing': [
    {
      id: 1,
      title: 'Handle Missing Values',
      difficulty: 'Easy',
      description: 'Learn to handle missing data.',
      hints: [
        'Use df.isnull().sum() to count missing',
        'Use df.fillna() to fill missing values',
        'Use df.dropna() to remove rows with missing'
      ],
      starterCode: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': [1, 2, np.nan, 4],
    'B': [5, np.nan, np.nan, 8],
    'C': [9, 10, 11, 12]
})

print("Missing values per column:")
print(df.isnull().sum())

# TODO: Fill missing in 'A' with mean
# TODO: Fill missing in 'B' with 0

print("\\nAfter handling missing:")
print(df)`,
      solution: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': [1, 2, np.nan, 4],
    'B': [5, np.nan, np.nan, 8],
    'C': [9, 10, 11, 12]
})

print("Missing values per column:")
print(df.isnull().sum())

# Fill with mean
df['A'] = df['A'].fillna(df['A'].mean())

# Fill with 0
df['B'] = df['B'].fillna(0)

print("\\nAfter handling missing:")
print(df)
print("\\nNo more missing:")
print(df.isnull().sum())`
    },
    {
      id: 2,
      title: 'Feature Scaling',
      difficulty: 'Medium',
      description: 'Normalize and standardize features.',
      hints: [
        'StandardScaler: mean=0, std=1',
        'MinMaxScaler: range 0 to 1',
        'Fit on train, transform both'
      ],
      starterCode: `from sklearn.preprocessing import StandardScaler, MinMaxScaler
import numpy as np

data = np.array([
    [100, 0.001],
    [200, 0.002],
    [300, 0.003],
    [400, 0.004]
])

print("Original data:")
print(data)

# TODO: Apply StandardScaler
scaler = StandardScaler()
standardized = None

# TODO: Apply MinMaxScaler
normalizer = MinMaxScaler()
normalized = None

print("\\nStandardized:")
print(standardized)`,
      solution: `from sklearn.preprocessing import StandardScaler, MinMaxScaler
import numpy as np

data = np.array([
    [100, 0.001],
    [200, 0.002],
    [300, 0.003],
    [400, 0.004]
])

print("Original data:")
print(data)

# StandardScaler
scaler = StandardScaler()
standardized = scaler.fit_transform(data)

# MinMaxScaler
normalizer = MinMaxScaler()
normalized = normalizer.fit_transform(data)

print("\\nStandardized (mean=0, std=1):")
print(standardized.round(2))

print("\\nNormalized (0-1 range):")
print(normalized.round(2))`
    },
    {
      id: 3,
      title: 'Encoding Categorical Data',
      difficulty: 'Medium',
      description: 'Convert categories to numbers.',
      hints: [
        'LabelEncoder for ordinal',
        'OneHotEncoder for nominal',
        'pd.get_dummies() is also useful'
      ],
      starterCode: `from sklearn.preprocessing import LabelEncoder, OneHotEncoder
import pandas as pd

df = pd.DataFrame({
    'color': ['red', 'blue', 'green', 'red', 'blue'],
    'size': ['S', 'M', 'L', 'M', 'S']
})

print("Original:")
print(df)

# TODO: Apply Label Encoding to 'size'
# TODO: Apply One-Hot Encoding to 'color'

print("\\nAfter encoding:")`,
      solution: `from sklearn.preprocessing import LabelEncoder
import pandas as pd

df = pd.DataFrame({
    'color': ['red', 'blue', 'green', 'red', 'blue'],
    'size': ['S', 'M', 'L', 'M', 'S']
})

print("Original:")
print(df)

# Label encode size (ordinal)
le = LabelEncoder()
df['size_encoded'] = le.fit_transform(df['size'])

# One-hot encode color (nominal)
color_dummies = pd.get_dummies(df['color'], prefix='color')
df = pd.concat([df, color_dummies], axis=1)

print("\\nAfter encoding:")
print(df)
print("\\nSize mapping:", dict(zip(le.classes_, range(len(le.classes_)))))`
    }
  ]
};
