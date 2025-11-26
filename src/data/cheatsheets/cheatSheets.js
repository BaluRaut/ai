// AI & ML Cheat Sheets

export const cheatSheets = {
  sheets: [
    // ==================== PYTHON CHEAT SHEET ====================
    {
      id: 'python-basics',
      title: 'Python Basics',
      icon: '🐍',
      color: '#3776ab',
      sections: [
        {
          title: 'Data Types',
          content: `
| Type | Example | Mutable |
|------|---------|---------|
| int | \`42\` | No |
| float | \`3.14\` | No |
| str | \`"hello"\` | No |
| bool | \`True\` | No |
| list | \`[1, 2, 3]\` | Yes |
| tuple | \`(1, 2, 3)\` | No |
| dict | \`{"a": 1}\` | Yes |
| set | \`{1, 2, 3}\` | Yes |
          `
        },
        {
          title: 'String Operations',
          code: `
# String methods
s = "Hello World"
s.lower()           # "hello world"
s.upper()           # "HELLO WORLD"
s.split()           # ["Hello", "World"]
s.replace("o", "0") # "Hell0 W0rld"
s.strip()           # Remove whitespace
s.startswith("He")  # True
s.find("o")         # 4 (index)

# f-strings (Python 3.6+)
name = "Alice"
age = 25
f"Name: {name}, Age: {age}"
f"Square: {5**2}"
f"Float: {3.14159:.2f}"  # "3.14"
          `
        },
        {
          title: 'List Operations',
          code: `
# Creating lists
lst = [1, 2, 3, 4, 5]
lst = list(range(5))  # [0,1,2,3,4]

# Accessing
lst[0]      # First: 1
lst[-1]     # Last: 5
lst[1:3]    # Slice: [2, 3]
lst[::2]    # Step: [1, 3, 5]
lst[::-1]   # Reverse: [5,4,3,2,1]

# Modifying
lst.append(6)        # Add to end
lst.insert(0, 0)     # Insert at index
lst.extend([7, 8])   # Add multiple
lst.pop()            # Remove & return last
lst.remove(3)        # Remove first 3

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(10) if x%2==0]
          `
        },
        {
          title: 'Dictionary Operations',
          code: `
# Creating
d = {"name": "Alice", "age": 25}
d = dict(name="Alice", age=25)

# Accessing
d["name"]           # "Alice"
d.get("name")       # "Alice" (safe)
d.get("x", "default") # Returns default

# Modifying
d["city"] = "NYC"   # Add/update
del d["age"]        # Delete
d.pop("name")       # Remove & return

# Iterating
for key in d:
    print(key, d[key])
for k, v in d.items():
    print(k, v)

# Dict comprehension
squares = {x: x**2 for x in range(5)}
          `
        },
        {
          title: 'Control Flow',
          code: `
# Conditionals
if x > 0:
    print("positive")
elif x < 0:
    print("negative")
else:
    print("zero")

# Ternary
result = "yes" if condition else "no"

# Loops
for i in range(5):
    print(i)

for i, val in enumerate(lst):
    print(i, val)

for a, b in zip(list1, list2):
    print(a, b)

while condition:
    # do something
    if exit_condition:
        break
    if skip_condition:
        continue
          `
        },
        {
          title: 'Functions',
          code: `
# Basic function
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# *args and **kwargs
def func(*args, **kwargs):
    print(args)    # tuple
    print(kwargs)  # dict

# Lambda
square = lambda x: x**2
add = lambda a, b: a + b

# Map, Filter, Reduce
list(map(square, [1,2,3]))  # [1,4,9]
list(filter(lambda x: x>2, [1,2,3,4]))  # [3,4]

from functools import reduce
reduce(lambda a,b: a+b, [1,2,3,4])  # 10
          `
        }
      ]
    },

    // ==================== NUMPY CHEAT SHEET ====================
    {
      id: 'numpy',
      title: 'NumPy',
      icon: '🔢',
      color: '#013243',
      sections: [
        {
          title: 'Array Creation',
          code: `
import numpy as np

# From lists
a = np.array([1, 2, 3])
b = np.array([[1,2], [3,4]])

# Zeros, Ones, Empty
np.zeros((3, 4))      # 3x4 zeros
np.ones((2, 3))       # 2x3 ones
np.empty((2, 2))      # Uninitialized

# Sequences
np.arange(0, 10, 2)   # [0, 2, 4, 6, 8]
np.linspace(0, 1, 5)  # 5 points 0 to 1

# Random
np.random.rand(3, 3)  # Uniform [0,1)
np.random.randn(3, 3) # Normal(0,1)
np.random.randint(0, 10, (3,3))

# Identity & Diagonal
np.eye(3)             # 3x3 identity
np.diag([1,2,3])      # Diagonal matrix
          `
        },
        {
          title: 'Array Properties & Reshaping',
          code: `
a = np.array([[1,2,3], [4,5,6]])

# Properties
a.shape       # (2, 3)
a.ndim        # 2
a.size        # 6
a.dtype       # int64

# Reshaping
a.reshape(3, 2)       # New shape
a.flatten()           # 1D copy
a.ravel()             # 1D view
a.T                   # Transpose
a.transpose(1, 0)     # Axis order

# Adding dimensions
a[np.newaxis, :]      # Add dim at start
a[:, np.newaxis]      # Add dim at end
np.expand_dims(a, 0)  # Same as above
          `
        },
        {
          title: 'Indexing & Slicing',
          code: `
a = np.array([[1,2,3], [4,5,6], [7,8,9]])

# Basic indexing
a[0, 0]       # 1
a[0]          # [1, 2, 3]
a[:, 0]       # [1, 4, 7] (first column)
a[0:2, 1:3]   # Submatrix

# Boolean indexing
a[a > 5]      # [6, 7, 8, 9]
a[a % 2 == 0] # [2, 4, 6, 8]

# Fancy indexing
a[[0, 2], :]  # Rows 0 and 2
a[:, [0, 2]]  # Cols 0 and 2

# Where
np.where(a > 5)       # Indices
np.where(a > 5, a, 0) # Conditional
          `
        },
        {
          title: 'Math Operations',
          code: `
# Element-wise
a + b, a - b, a * b, a / b
a ** 2        # Square
np.sqrt(a)    # Square root
np.exp(a)     # e^x
np.log(a)     # Natural log

# Aggregations
np.sum(a)           # Total sum
np.sum(a, axis=0)   # Sum columns
np.sum(a, axis=1)   # Sum rows
np.mean(a)          # Mean
np.std(a)           # Std dev
np.min(a), np.max(a)
np.argmin(a), np.argmax(a)

# Linear algebra
np.dot(a, b)        # Dot product
a @ b               # Matrix multiply
np.linalg.inv(a)    # Inverse
np.linalg.det(a)    # Determinant
np.linalg.eig(a)    # Eigenvalues
          `
        },
        {
          title: 'Broadcasting Rules',
          content: `
Arrays can operate together if dimensions are compatible:
1. Compare shapes right-to-left
2. Dimensions match if equal OR one is 1

**Examples:**
\`\`\`
(3, 4) + (4,)    → (3, 4)  ✓
(3, 4) + (3, 1)  → (3, 4)  ✓
(3, 4) + (3,)    → Error   ✗
\`\`\`
          `
        }
      ]
    },

    // ==================== PANDAS CHEAT SHEET ====================
    {
      id: 'pandas',
      title: 'Pandas',
      icon: '🐼',
      color: '#150458',
      sections: [
        {
          title: 'Creating DataFrames',
          code: `
import pandas as pd

# From dict
df = pd.DataFrame({
    'name': ['Alice', 'Bob'],
    'age': [25, 30]
})

# From CSV
df = pd.read_csv('file.csv')
df = pd.read_csv('file.csv', index_col=0)

# From Excel
df = pd.read_excel('file.xlsx')

# Save
df.to_csv('out.csv', index=False)
df.to_excel('out.xlsx')
          `
        },
        {
          title: 'Basic Info',
          code: `
df.head()         # First 5 rows
df.tail()         # Last 5 rows
df.shape          # (rows, cols)
df.info()         # Data types, memory
df.describe()     # Statistics
df.columns        # Column names
df.dtypes         # Data types
df.isnull().sum() # Missing per column
          `
        },
        {
          title: 'Selection',
          code: `
# Column
df['col']         # Series
df[['a', 'b']]    # DataFrame

# Row by label
df.loc['row_label']
df.loc['a':'c']   # Inclusive!
df.loc[:, 'col']

# Row by position
df.iloc[0]        # First row
df.iloc[0:3]      # First 3 rows
df.iloc[:, 0]     # First column

# Boolean
df[df['age'] > 25]
df[(df['age'] > 25) & (df['city'] == 'NYC')]
df.query('age > 25 and city == "NYC"')
          `
        },
        {
          title: 'Data Manipulation',
          code: `
# Add column
df['new'] = df['a'] + df['b']
df['category'] = df['value'].apply(lambda x: 'high' if x > 50 else 'low')

# Drop
df.drop('col', axis=1)    # Column
df.drop(0, axis=0)        # Row

# Rename
df.rename(columns={'old': 'new'})

# Sort
df.sort_values('col')
df.sort_values('col', ascending=False)
df.sort_values(['a', 'b'])

# Group by
df.groupby('category').mean()
df.groupby('category').agg({
    'value': ['mean', 'sum'],
    'count': 'max'
})
          `
        },
        {
          title: 'Missing Data',
          code: `
# Check
df.isnull()
df.isnull().sum()
df.isnull().any()

# Drop
df.dropna()                # Any null
df.dropna(subset=['col'])  # Specific
df.dropna(thresh=2)        # Min non-null

# Fill
df.fillna(0)
df.fillna(df.mean())
df.fillna(method='ffill')  # Forward fill
df.fillna(method='bfill')  # Backward fill
df['col'].interpolate()
          `
        },
        {
          title: 'Merging & Joining',
          code: `
# Merge (SQL-like)
pd.merge(df1, df2, on='key')
pd.merge(df1, df2, on='key', how='left')
# how: 'inner', 'outer', 'left', 'right'

pd.merge(df1, df2, 
         left_on='a', right_on='b')

# Concat
pd.concat([df1, df2])           # Stack rows
pd.concat([df1, df2], axis=1)   # Side by side

# Join (on index)
df1.join(df2, how='left')
          `
        }
      ]
    },

    // ==================== SCIKIT-LEARN CHEAT SHEET ====================
    {
      id: 'sklearn',
      title: 'Scikit-Learn',
      icon: '🔬',
      color: '#f89939',
      sections: [
        {
          title: 'Basic Workflow',
          code: `
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# 1. Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 2. Preprocess
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 3. Train
model = LogisticRegression()
model.fit(X_train_scaled, y_train)

# 4. Predict
y_pred = model.predict(X_test_scaled)

# 5. Evaluate
accuracy = accuracy_score(y_test, y_pred)
          `
        },
        {
          title: 'Preprocessing',
          code: `
from sklearn.preprocessing import (
    StandardScaler,    # Mean=0, Std=1
    MinMaxScaler,      # Scale to [0,1]
    RobustScaler,      # Uses median/IQR
    LabelEncoder,      # Labels to ints
    OneHotEncoder,     # One-hot encoding
)

# Scaling
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Encoding
le = LabelEncoder()
y_encoded = le.fit_transform(y)

ohe = OneHotEncoder(sparse=False)
X_encoded = ohe.fit_transform(X_cat)

# Imputation
from sklearn.impute import SimpleImputer
imputer = SimpleImputer(strategy='mean')
X_filled = imputer.fit_transform(X)
          `
        },
        {
          title: 'Models Quick Reference',
          content: `
| Task | Model | Import |
|------|-------|--------|
| Classification | Logistic Regression | \`LogisticRegression\` |
| Classification | Random Forest | \`RandomForestClassifier\` |
| Classification | SVM | \`SVC\` |
| Classification | Gradient Boosting | \`GradientBoostingClassifier\` |
| Regression | Linear Regression | \`LinearRegression\` |
| Regression | Ridge | \`Ridge\` |
| Regression | Random Forest | \`RandomForestRegressor\` |
| Clustering | K-Means | \`KMeans\` |
| Clustering | DBSCAN | \`DBSCAN\` |
| Dim Reduction | PCA | \`PCA\` |
          `
        },
        {
          title: 'Model Selection',
          code: `
from sklearn.model_selection import (
    cross_val_score,
    GridSearchCV,
    RandomizedSearchCV,
)

# Cross-validation
scores = cross_val_score(model, X, y, cv=5)
print(f"Mean: {scores.mean():.3f} (+/- {scores.std():.3f})")

# Grid search
param_grid = {
    'C': [0.1, 1, 10],
    'kernel': ['rbf', 'linear']
}
grid = GridSearchCV(SVC(), param_grid, cv=5)
grid.fit(X, y)
print(grid.best_params_)
print(grid.best_score_)

# Random search (faster)
from scipy.stats import uniform
param_dist = {'C': uniform(0.1, 10)}
random = RandomizedSearchCV(
    SVC(), param_dist, n_iter=20, cv=5
)
          `
        },
        {
          title: 'Metrics',
          code: `
from sklearn.metrics import (
    # Classification
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix,
    classification_report,
    roc_auc_score,
    
    # Regression
    mean_squared_error,
    mean_absolute_error,
    r2_score,
)

# Classification
print(classification_report(y_true, y_pred))
cm = confusion_matrix(y_true, y_pred)

# Regression
mse = mean_squared_error(y_true, y_pred)
rmse = mse ** 0.5
r2 = r2_score(y_true, y_pred)
          `
        },
        {
          title: 'Pipelines',
          code: `
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer

# Simple pipeline
pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('model', LogisticRegression())
])
pipe.fit(X_train, y_train)
y_pred = pipe.predict(X_test)

# Column transformer
preprocessor = ColumnTransformer([
    ('num', StandardScaler(), num_cols),
    ('cat', OneHotEncoder(), cat_cols)
])

full_pipe = Pipeline([
    ('prep', preprocessor),
    ('model', RandomForestClassifier())
])
          `
        }
      ]
    },

    // ==================== PYTORCH CHEAT SHEET ====================
    {
      id: 'pytorch',
      title: 'PyTorch',
      icon: '🔥',
      color: '#ee4c2c',
      sections: [
        {
          title: 'Tensors',
          code: `
import torch

# Creating tensors
x = torch.tensor([1, 2, 3])
x = torch.zeros(3, 4)
x = torch.ones(3, 4)
x = torch.rand(3, 4)      # Uniform [0,1)
x = torch.randn(3, 4)     # Normal(0,1)
x = torch.arange(0, 10)

# From NumPy
x = torch.from_numpy(np_array)
np_array = x.numpy()

# Device
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
x = x.to(device)

# Properties
x.shape, x.dtype, x.device
x.requires_grad = True  # For gradients
          `
        },
        {
          title: 'Basic Operations',
          code: `
# Math
x + y, x - y, x * y, x / y
x @ y              # Matrix multiply
torch.mm(x, y)     # Matrix multiply
torch.matmul(x, y) # Batch matrix multiply

# Reshaping
x.view(3, 4)       # Reshape (must be contiguous)
x.reshape(3, 4)    # Reshape (always works)
x.squeeze()        # Remove dims of size 1
x.unsqueeze(0)     # Add dim
x.permute(1, 0, 2) # Reorder dims
x.transpose(0, 1)  # Swap two dims

# Aggregations
x.sum(), x.mean(), x.std()
x.sum(dim=0)       # Along dimension
x.max(), x.argmax()
          `
        },
        {
          title: 'Neural Network Module',
          code: `
import torch.nn as nn

class Net(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(784, 256)
        self.fc2 = nn.Linear(256, 10)
        self.relu = nn.ReLU()
        self.dropout = nn.Dropout(0.2)
    
    def forward(self, x):
        x = x.view(-1, 784)  # Flatten
        x = self.relu(self.fc1(x))
        x = self.dropout(x)
        x = self.fc2(x)
        return x

model = Net()
model.to(device)
          `
        },
        {
          title: 'Training Loop',
          code: `
import torch.optim as optim

# Setup
model = Net()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
model.train()
for epoch in range(num_epochs):
    for batch_x, batch_y in dataloader:
        batch_x, batch_y = batch_x.to(device), batch_y.to(device)
        
        # Forward pass
        outputs = model(batch_x)
        loss = criterion(outputs, batch_y)
        
        # Backward pass
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
    
    print(f"Epoch {epoch}, Loss: {loss.item():.4f}")
          `
        },
        {
          title: 'Common Layers',
          code: `
# Linear
nn.Linear(in_features, out_features)

# Convolution
nn.Conv2d(in_channels, out_channels, kernel_size)
nn.MaxPool2d(kernel_size)
nn.BatchNorm2d(num_features)

# Recurrent
nn.LSTM(input_size, hidden_size, num_layers)
nn.GRU(input_size, hidden_size, num_layers)

# Activation
nn.ReLU()
nn.Sigmoid()
nn.Softmax(dim=1)
nn.GELU()

# Regularization
nn.Dropout(p=0.5)
nn.BatchNorm1d(num_features)
nn.LayerNorm(normalized_shape)
          `
        },
        {
          title: 'Data Loading',
          code: `
from torch.utils.data import Dataset, DataLoader

class CustomDataset(Dataset):
    def __init__(self, X, y):
        self.X = torch.tensor(X, dtype=torch.float32)
        self.y = torch.tensor(y, dtype=torch.long)
    
    def __len__(self):
        return len(self.X)
    
    def __getitem__(self, idx):
        return self.X[idx], self.y[idx]

dataset = CustomDataset(X, y)
dataloader = DataLoader(
    dataset, 
    batch_size=32, 
    shuffle=True,
    num_workers=4
)
          `
        }
      ]
    },

    // ==================== GIT CHEAT SHEET ====================
    {
      id: 'git',
      title: 'Git Commands',
      icon: '📦',
      color: '#f05032',
      sections: [
        {
          title: 'Basic Commands',
          code: `
# Initialize
git init
git clone <url>

# Status & History
git status
git log
git log --oneline

# Staging
git add <file>
git add .
git reset <file>    # Unstage

# Committing
git commit -m "message"
git commit --amend  # Edit last commit

# Branching
git branch              # List branches
git branch <name>       # Create branch
git checkout <branch>   # Switch branch
git checkout -b <name>  # Create & switch
git merge <branch>      # Merge into current
git branch -d <name>    # Delete branch
          `
        },
        {
          title: 'Remote Operations',
          code: `
# Remote setup
git remote add origin <url>
git remote -v

# Push & Pull
git push origin <branch>
git push -u origin <branch>  # Set upstream
git pull origin <branch>
git fetch origin

# Sync with remote
git pull --rebase origin main
          `
        },
        {
          title: 'Undoing Changes',
          code: `
# Discard changes
git checkout -- <file>
git restore <file>

# Reset commits
git reset --soft HEAD~1   # Keep changes staged
git reset --mixed HEAD~1  # Keep changes unstaged
git reset --hard HEAD~1   # Discard changes

# Revert (creates new commit)
git revert <commit>

# Stash changes
git stash
git stash pop
git stash list
          `
        }
      ]
    }
  ]
};

export default cheatSheets;
