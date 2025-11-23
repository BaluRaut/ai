export const pandas = {
  id: 'pandas',
  title: 'Pandas Mastery',
  description: 'Master data manipulation and analysis with Pandas DataFrames and Series.',
  difficulty: 'intermediate',
  content: {
    overview: `Pandas is the most popular library for data manipulation and analysis in Python. Built on NumPy, it provides:

DataFrame: 2D labeled data structure (like Excel spreadsheet or SQL table)

Series: 1D labeled array (single column/row)

Powerful indexing: Access data by label or position

Data alignment: Automatic alignment in operations

Handling missing data: Built-in functions for NaN handling

GroupBy operations: Split-apply-combine for aggregations

Merging/Joining: Combine datasets like SQL joins

Time series: Extensive date/time functionality

Why Pandas?:
✓ Handles real-world messy data (missing values, mixed types)
✓ Intuitive syntax similar to SQL and Excel
✓ Seamless integration with NumPy, Matplotlib, scikit-learn
✓ Industry standard for data preprocessing in data science`,

    keyPoints: [
      'DataFrame is a 2D labeled data structure; Series is 1D',
      'Use .loc[] for label-based indexing, .iloc[] for position-based indexing',
      'Pandas automatically aligns data by index in operations',
      'Missing data (NaN) is handled gracefully with fillna(), dropna()',
      'GroupBy enables split-apply-combine pattern for aggregations',
      'Merge, join, and concat combine multiple DataFrames'
    ],

    useCases: [
      {
        title: 'Data Cleaning & Preprocessing',
        description: 'Clean messy data and prepare it for machine learning models',
        example: 'Handle missing values, remove duplicates, normalize data types'
      },
      {
        title: 'Exploratory Data Analysis',
        description: 'Analyze and understand datasets with summary statistics and grouping',
        example: 'Customer segmentation, sales trend analysis, A/B testing'
      },
      {
        title: 'Time Series Analysis',
        description: 'Work with date/time data for forecasting and trend analysis',
        example: 'Stock price analysis, weather forecasting, website traffic patterns'
      },
      {
        title: 'Data Aggregation & Reporting',
        description: 'Create pivot tables and aggregate data for business reports',
        example: 'Sales dashboards, financial reports, KPI tracking'
      },
      {
        title: 'ETL Operations',
        description: 'Extract, Transform, Load data from multiple sources',
        example: 'Merge CSV/Excel/SQL data, transform and export to databases'
      },
      {
        title: 'Financial Analysis',
        description: 'Analyze financial data and calculate key metrics',
        example: 'Portfolio returns, risk metrics, accounting reconciliation'
      }
    ],

    dos: [
      '✓ Use vectorized operations instead of iterrows() for performance',
      '✓ Use .copy() to avoid SettingWithCopyWarning',
      '✓ Chain operations for readability: df.dropna().groupby()',
      '✓ Use .loc[] and .iloc[] explicitly to avoid ambiguity',
      '✓ Set proper data types with .astype() to save memory',
      '✓ Use inplace=True only when necessary (usually avoid it)'
    ],

    donts: [
      '✗ Don\'t use iterrows() on large DataFrames - use apply() or vectorization',
      '✗ Don\'t modify a DataFrame while iterating over it',
      '✗ Don\'t use chained assignment: df[df.A > 0][\'B\'] = 1 (causes warning)',
      '✗ Don\'t ignore data types - int vs float vs object affects performance',
      '✗ Don\'t use loops when Pandas has a built-in function',
      '✗ Don\'t forget to reset_index() after filtering if needed'
    ],

    bestPractices: [
      'Read data with proper dtypes: pd.read_csv(..., dtype={...})',
      'Check data with .head(), .info(), .describe() after loading',
      'Use categorical dtype for low-cardinality string columns (saves memory)',
      'Handle missing data explicitly: decide to drop, fill, or interpolate',
      'Use .query() for readable filtering: df.query("age > 30")',
      'Profile memory usage with .memory_usage(deep=True)'
    ],

    cheatsheet: `
# Pandas Cheatsheet

## Creating DataFrames
pd.DataFrame({'A': [1,2], 'B': [3,4]})  # From dict
pd.DataFrame([[1,2], [3,4]], columns=['A','B'])  # From list
pd.read_csv('file.csv')                  # From CSV
pd.read_excel('file.xlsx')               # From Excel
pd.read_sql(query, connection)          # From SQL

## Creating Series
pd.Series([1, 2, 3])                     # From list
pd.Series({'a': 1, 'b': 2})              # From dict

## Viewing Data
df.head(10)                              # First 10 rows
df.tail(5)                               # Last 5 rows
df.info()                                # Data types, memory
df.describe()                            # Summary statistics
df.shape                                 # (rows, columns)
df.columns                               # Column names
df.index                                 # Row labels
df.dtypes                                # Data types

## Selection
df['col']                                # Select column (Series)
df[['col1', 'col2']]                     # Select columns (DataFrame)
df.loc[0]                                # Row by label
df.iloc[0]                               # Row by position
df.loc[0, 'col']                         # Cell by label
df.iloc[0, 1]                            # Cell by position
df.loc[0:5, ['A','B']]                   # Slice by label
df.iloc[0:5, 0:2]                        # Slice by position

## Filtering
df[df['age'] > 30]                       # Boolean indexing
df.query('age > 30 and city == "NYC"')   # SQL-like query
df[df['name'].isin(['Alice', 'Bob'])]    # Filter by list
df[df['col'].str.contains('pattern')]    # String pattern

## Adding/Removing
df['new_col'] = values                   # Add column
df['sum'] = df['A'] + df['B']           # Computed column
df.drop('col', axis=1)                   # Drop column
df.drop([0,1], axis=0)                   # Drop rows
df.drop_duplicates()                     # Remove duplicates

## Missing Data
df.isnull()                              # Check for NaN
df.dropna()                              # Drop rows with NaN
df.fillna(0)                             # Fill NaN with 0
df.fillna(df.mean())                     # Fill with mean
df.interpolate()                         # Interpolate missing

## Grouping & Aggregation
df.groupby('col').mean()                 # Group and aggregate
df.groupby(['A','B']).sum()              # Multi-column group
df.groupby('col').agg(['mean','sum'])    # Multiple aggregations
df.groupby('col')['value'].sum()         # Group one column
df.pivot_table(values='val', index='A', 
               columns='B', aggfunc='mean')  # Pivot table

## Sorting
df.sort_values('col')                    # Sort by column
df.sort_values(['A','B'], ascending=False) # Multi-column
df.sort_index()                          # Sort by index

## Merging & Joining
pd.concat([df1, df2])                    # Stack vertically
pd.concat([df1, df2], axis=1)            # Stack horizontally
df1.merge(df2, on='key')                 # Inner join
df1.merge(df2, on='key', how='left')     # Left join
df1.join(df2)                            # Join on index

## Apply Functions
df['col'].apply(lambda x: x*2)           # Apply to Series
df.apply(lambda row: row['A']+row['B'], axis=1)  # Apply to rows
df.applymap(lambda x: x*2)               # Apply to all cells

## String Operations
df['name'].str.lower()                   # Lowercase
df['name'].str.upper()                   # Uppercase
df['name'].str.contains('pattern')       # Contains
df['name'].str.split()                   # Split
df['name'].str.replace('old', 'new')     # Replace

## Date/Time
pd.to_datetime(df['date'])               # Convert to datetime
df['date'].dt.year                       # Extract year
df['date'].dt.month                      # Extract month
df['date'].dt.dayofweek                  # Day of week (0=Mon)
df.resample('M').mean()                  # Resample time series

## Reshaping
df.pivot(index='A', columns='B', values='C')  # Pivot wide
df.melt(id_vars=['A'])                   # Pivot long
df.T                                     # Transpose
df.stack()                               # Pivot to Series
df.unstack()                             # Series to DataFrame

## Export
df.to_csv('file.csv', index=False)       # To CSV
df.to_excel('file.xlsx')                 # To Excel
df.to_sql('table', connection)           # To SQL
df.to_json('file.json')                  # To JSON
`,

    codeExamples: [
      {
        title: '1. Creating DataFrames - Multiple Ways',
        explanation: `Pandas DataFrames can be created from dictionaries, lists, NumPy arrays, or read from files. Understanding creation methods is fundamental.`,
        code: `import pandas as pd
import numpy as np

# From dictionary (keys = columns)
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['NYC', 'LA', 'Chicago']
}
df1 = pd.DataFrame(data)
print("From dict:\\n", df1)

# From list of lists
data = [
    ['Alice', 25, 'NYC'],
    ['Bob', 30, 'LA'],
    ['Charlie', 35, 'Chicago']
]
df2 = pd.DataFrame(data, columns=['Name', 'Age', 'City'])
print("\\nFrom list:\\n", df2)

# From NumPy array
arr = np.array([[1, 2, 3], [4, 5, 6]])
df3 = pd.DataFrame(arr, columns=['A', 'B', 'C'])
print("\\nFrom NumPy:\\n", df3)

# From dict of Series
s1 = pd.Series([1, 2, 3])
s2 = pd.Series([4, 5, 6])
df4 = pd.DataFrame({'A': s1, 'B': s2})
print("\\nFrom Series:\\n", df4)

# Creating Series
series = pd.Series([10, 20, 30], index=['a', 'b', 'c'], name='values')
print("\\nSeries:\\n", series)
print("Series name:", series.name)`
      },
      {
        title: '2. Indexing and Selection - .loc vs .iloc',
        explanation: `Pandas offers multiple ways to select data. .loc uses labels, .iloc uses integer positions. Master both to avoid confusion!`,
        code: `import pandas as pd

df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 35, 40],
    'City': ['NYC', 'LA', 'Chicago', 'Boston'],
    'Salary': [70000, 80000, 75000, 90000]
})

print("Original DataFrame:\\n", df)

# Select single column (returns Series)
print("\\nNames (Series):\\n", df['Name'])

# Select multiple columns (returns DataFrame)
print("\\nName and Age:\\n", df[['Name', 'Age']])

# Select rows by position
print("\\nFirst 2 rows:\\n", df[0:2])

# .loc - label-based indexing
print("\\nRow 0 with .loc:\\n", df.loc[0])
print("\\nRows 0-2, columns Name and Age:")
print(df.loc[0:2, ['Name', 'Age']])

# .iloc - position-based indexing
print("\\nRow 0 with .iloc:\\n", df.iloc[0])
print("\\nFirst 2 rows, first 2 columns:")
print(df.iloc[0:2, 0:2])

# Single cell access
print("\\nCell [0, 'Name'] with .loc:", df.loc[0, 'Name'])
print("Cell [0, 0] with .iloc:", df.iloc[0, 0])

# Boolean indexing
high_earners = df[df['Salary'] > 75000]
print("\\nHigh earners (>75k):\\n", high_earners)

# Multiple conditions
nyc_young = df[(df['City'] == 'NYC') & (df['Age'] < 30)]
print("\\nNYC and Age < 30:\\n", nyc_young)`
      },
      {
        title: '3. Data Inspection and Exploration',
        explanation: `Always inspect your data after loading! These methods help you understand structure, types, and summary statistics.`,
        code: `import pandas as pd
import numpy as np

# Create sample data
np.random.seed(42)
df = pd.DataFrame({
    'Product': ['A', 'B', 'C', 'A', 'B'] * 20,
    'Sales': np.random.randint(100, 1000, 100),
    'Quantity': np.random.randint(1, 50, 100),
    'Price': np.random.uniform(10, 100, 100),
    'Date': pd.date_range('2024-01-01', periods=100)
})

# First and last rows
print("First 5 rows:")
print(df.head())
print("\\nLast 3 rows:")
print(df.tail(3))

# Shape and size
print(f"\\nShape: {df.shape}")  # (rows, cols)
print(f"Total elements: {df.size}")

# Column names and types
print("\\nColumns:", df.columns.tolist())
print("\\nData types:")
print(df.dtypes)

# Info - comprehensive overview
print("\\nDataFrame Info:")
df.info()

# Summary statistics
print("\\nSummary statistics:")
print(df.describe())

# Value counts for categorical
print("\\nProduct value counts:")
print(df['Product'].value_counts())

# Check for missing data
print(f"\\nMissing values per column:")
print(df.isnull().sum())

# Memory usage
print(f"\\nMemory usage:")
print(df.memory_usage(deep=True))`
      },
      {
        title: '4. Filtering and Querying Data',
        explanation: `Filtering is essential for data analysis. Pandas offers boolean indexing, .query(), and .isin() for flexible filtering.`,
        code: `import pandas as pd

df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    'Age': [25, 30, 35, 40, 28],
    'City': ['NYC', 'LA', 'NYC', 'Boston', 'LA'],
    'Salary': [70000, 80000, 75000, 90000, 72000],
    'Department': ['IT', 'HR', 'IT', 'Finance', 'HR']
})

# Single condition
high_salary = df[df['Salary'] > 75000]
print("Salary > 75000:\\n", high_salary)

# Multiple conditions (use & and |, not 'and'/'or')
nyc_high = df[(df['City'] == 'NYC') & (df['Salary'] > 70000)]
print("\\nNYC and Salary > 70k:\\n", nyc_high)

# OR condition
tech_or_high = df[(df['Department'] == 'IT') | (df['Salary'] > 80000)]
print("\\nIT or Salary > 80k:\\n", tech_or_high)

# .query() - SQL-like syntax (more readable)
result = df.query('Age > 30 and City == "NYC"')
print("\\nUsing .query():\\n", result)

# .query() with variables
min_salary = 75000
result = df.query('Salary > @min_salary')
print("\\nQuery with variable:\\n", result)

# .isin() - filter by list
cities_filter = df[df['City'].isin(['NYC', 'LA'])]
print("\\nCities in NYC or LA:\\n", cities_filter)

# String contains
it_names = df[df['Department'].str.contains('IT')]
print("\\nIT Department:\\n", it_names)

# NOT operator (~)
not_nyc = df[~(df['City'] == 'NYC')]
print("\\nNot in NYC:\\n", not_nyc)

# Between
age_range = df[df['Age'].between(28, 35)]
print("\\nAge between 28-35:\\n", age_range)`
      },
      {
        title: '5. Adding, Modifying, and Removing Columns',
        explanation: `DataFrames are mutable. You can add computed columns, modify existing ones, or remove columns easily.`,
        code: `import pandas as pd

df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Sales': [100, 150, 120],
    'Cost': [70, 90, 80]
})

print("Original:\\n", df)

# Add new column
df['Profit'] = df['Sales'] - df['Cost']
print("\\nWith Profit column:\\n", df)

# Add column with constant
df['Year'] = 2024
print("\\nWith Year:\\n", df)

# Add column with function
df['Profit_Margin'] = (df['Profit'] / df['Sales']) * 100
print("\\nWith Profit Margin:\\n", df)

# Modify existing column
df['Sales'] = df['Sales'] * 1.1  # 10% increase
print("\\nAfter 10% sales increase:\\n", df)

# Add column based on condition
df['Category'] = df['Sales'].apply(
    lambda x: 'High' if x > 140 else 'Low'
)
print("\\nWith Category:\\n", df)

# Using np.where for conditions (faster)
import numpy as np
df['Status'] = np.where(df['Profit'] > 30, 'Good', 'Poor')
print("\\nWith Status:\\n", df)

# Rename columns
df_renamed = df.rename(columns={'Name': 'Employee', 'Sales': 'Revenue'})
print("\\nRenamed:\\n", df_renamed)

# Remove columns
df_dropped = df.drop(['Year', 'Status'], axis=1)
print("\\nDropped columns:\\n", df_dropped)

# Remove in-place
df.drop('Profit_Margin', axis=1, inplace=True)
print("\\nAfter in-place drop:\\n", df)`
      },
      {
        title: '6. Handling Missing Data',
        explanation: `Real-world data has missing values (NaN). Pandas provides powerful methods to detect, remove, or fill missing data.`,
        code: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 5],
    'B': [np.nan, 2, 3, np.nan, 5],
    'C': [1, 2, 3, 4, 5],
    'D': ['a', None, 'c', 'd', 'e']
})

print("Data with missing values:\\n", df)

# Check for missing data
print("\\nMissing values:")
print(df.isnull())

# Count missing per column
print("\\nMissing count per column:")
print(df.isnull().sum())

# Check if any value is missing
print(f"\\nAny missing values? {df.isnull().any().any()}")

# Drop rows with ANY missing values
df_dropna = df.dropna()
print("\\nAfter dropna() - removes rows with any NaN:\\n", df_dropna)

# Drop rows where ALL values are missing
df_dropall = df.dropna(how='all')
print("\\nDrop only if all values NaN:\\n", df_dropall)

# Drop columns with missing data
df_dropcols = df.dropna(axis=1)
print("\\nDrop columns with NaN:\\n", df_dropcols)

# Fill missing with a value
df_fill0 = df.fillna(0)
print("\\nFill NaN with 0:\\n", df_fill0)

# Fill with column mean
df_fillmean = df.fillna(df.mean())
print("\\nFill numeric NaN with mean:\\n", df_fillmean)

# Fill with different values per column
df_filldict = df.fillna({'A': 0, 'B': 999, 'D': 'unknown'})
print("\\nFill with dict:\\n", df_filldict)

# Forward fill (use previous value)
df_ffill = df.fillna(method='ffill')
print("\\nForward fill:\\n", df_ffill)

# Backward fill
df_bfill = df.fillna(method='bfill')
print("\\nBackward fill:\\n", df_bfill)

# Interpolate (for numeric data)
df_interp = df.interpolate()
print("\\nInterpolated:\\n", df_interp)`
      },
      {
        title: '7. GroupBy - Split-Apply-Combine',
        explanation: `GroupBy is one of Pandas' most powerful features. It splits data into groups, applies a function, and combines results.`,
        code: `import pandas as pd

df = pd.DataFrame({
    'Department': ['IT', 'HR', 'IT', 'HR', 'IT', 'Finance'],
    'Employee': ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'],
    'Salary': [70000, 60000, 75000, 65000, 72000, 80000],
    'Age': [25, 30, 35, 28, 32, 40]
})

print("Original Data:\\n", df)

# Group by single column and aggregate
dept_avg = df.groupby('Department')['Salary'].mean()
print("\\nAverage salary by department:")
print(dept_avg)

# Multiple aggregations
dept_stats = df.groupby('Department')['Salary'].agg(['mean', 'min', 'max'])
print("\\nSalary stats by department:")
print(dept_stats)

# Group multiple columns
multi_agg = df.groupby('Department').agg({
    'Salary': ['mean', 'sum'],
    'Age': 'mean'
})
print("\\nMultiple aggregations:")
print(multi_agg)

# Group by and count
dept_count = df.groupby('Department').size()
print("\\nEmployees per department:")
print(dept_count)

# Filter groups
high_paid_depts = df.groupby('Department').filter(
    lambda x: x['Salary'].mean() > 65000
)
print("\\nDepartments with avg salary > 65k:")
print(high_paid_depts)

# Transform (returns same-sized result)
df['Dept_Avg_Salary'] = df.groupby('Department')['Salary'].transform('mean')
print("\\nWith department average:")
print(df)

# Apply custom function
def salary_range(group):
    return group['Salary'].max() - group['Salary'].min()

dept_range = df.groupby('Department').apply(salary_range)
print("\\nSalary range by department:")
print(dept_range)

# Multiple grouping columns
df2 = df.copy()
df2['Level'] = ['Junior', 'Senior', 'Mid', 'Junior', 'Mid', 'Senior']
multi_group = df2.groupby(['Department', 'Level'])['Salary'].mean()
print("\\nAverage salary by Department and Level:")
print(multi_group)`
      },
      {
        title: '8. Merging and Joining DataFrames',
        explanation: `Combining DataFrames is essential when working with relational data. Pandas provides merge (SQL-like joins) and concat (stacking).`,
        code: `import pandas as pd

# Sample data
employees = pd.DataFrame({
    'EmployeeID': [1, 2, 3, 4],
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'DeptID': [10, 20, 10, 30]
})

departments = pd.DataFrame({
    'DeptID': [10, 20, 30, 40],
    'DeptName': ['IT', 'HR', 'Finance', 'Marketing']
})

print("Employees:\\n", employees)
print("\\nDepartments:\\n", departments)

# Inner join (only matching rows)
inner = employees.merge(departments, on='DeptID', how='inner')
print("\\nInner join:")
print(inner)

# Left join (all from left, matching from right)
left = employees.merge(departments, on='DeptID', how='left')
print("\\nLeft join:")
print(left)

# Right join (all from right, matching from left)
right = employees.merge(departments, on='DeptID', how='right')
print("\\nRight join:")
print(right)

# Outer join (all rows from both)
outer = employees.merge(departments, on='DeptID', how='outer')
print("\\nOuter join:")
print(outer)

# Merge on different column names
emp2 = pd.DataFrame({
    'ID': [1, 2, 3],
    'Name': ['Alice', 'Bob', 'Charlie']
})
salaries = pd.DataFrame({
    'EmpID': [1, 2, 3],
    'Salary': [70000, 80000, 75000]
})

merged = emp2.merge(salaries, left_on='ID', right_on='EmpID')
print("\\nMerge on different column names:")
print(merged)

# Concatenate DataFrames vertically (stack rows)
df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})

concat_v = pd.concat([df1, df2], ignore_index=True)
print("\\nConcatenate vertically:")
print(concat_v)

# Concatenate horizontally (stack columns)
concat_h = pd.concat([df1, df2], axis=1)
print("\\nConcatenate horizontally:")
print(concat_h)`
      },
      {
        title: '9. Sorting and Ranking',
        explanation: `Sorting is crucial for analysis and presentation. Pandas can sort by values or index, single or multiple columns.`,
        code: `import pandas as pd

df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    'Age': [25, 30, 25, 40, 30],
    'Salary': [70000, 80000, 75000, 90000, 72000],
    'Department': ['IT', 'HR', 'IT', 'Finance', 'HR']
})

print("Original:\\n", df)

# Sort by single column
sorted_age = df.sort_values('Age')
print("\\nSorted by Age:")
print(sorted_age)

# Sort descending
sorted_salary = df.sort_values('Salary', ascending=False)
print("\\nSorted by Salary (descending):")
print(sorted_salary)

# Sort by multiple columns
sorted_multi = df.sort_values(['Age', 'Salary'], ascending=[True, False])
print("\\nSorted by Age (asc), then Salary (desc):")
print(sorted_multi)

# Sort by index
df_indexed = df.set_index('Name')
sorted_index = df_indexed.sort_index()
print("\\nSorted by index (Name):")
print(sorted_index)

# Ranking
df['Salary_Rank'] = df['Salary'].rank(ascending=False)
print("\\nWith salary rank:")
print(df[['Name', 'Salary', 'Salary_Rank']])

# Percentile ranking
df['Salary_Pct'] = df['Salary'].rank(pct=True)
print("\\nWith percentile rank:")
print(df[['Name', 'Salary', 'Salary_Pct']])

# nlargest and nsmallest (efficient for top-N)
top_3 = df.nlargest(3, 'Salary')
print("\\nTop 3 salaries:")
print(top_3)

bottom_2 = df.nsmallest(2, 'Age')
print("\\nYoungest 2:")
print(bottom_2)`
      },
      {
        title: '10. Apply, Map, and Applymap',
        explanation: `Apply custom functions to Series or DataFrames. Use apply() for complex operations, map() for Series element-wise, applymap() for DataFrame element-wise.`,
        code: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    'Name': ['alice', 'bob', 'charlie'],
    'Age': [25, 30, 35],
    'Salary': [70000, 80000, 75000]
})

print("Original:\\n", df)

# Apply to Series (column)
df['Name_Upper'] = df['Name'].apply(lambda x: x.upper())
print("\\nWith uppercase names:")
print(df)

# Apply with function
def categorize_age(age):
    if age < 30:
        return 'Young'
    elif age < 40:
        return 'Middle'
    else:
        return 'Senior'

df['Age_Category'] = df['Age'].apply(categorize_age)
print("\\nWith age category:")
print(df)

# Apply to DataFrame (row-wise, axis=1)
df['Name_Age'] = df.apply(
    lambda row: f"{row['Name']} is {row['Age']}", 
    axis=1
)
print("\\nWith combined column:")
print(df[['Name', 'Age', 'Name_Age']])

# map() - for Series, mapping values
mapping = {'alice': 'A', 'bob': 'B', 'charlie': 'C'}
df['Initial'] = df['Name'].map(mapping)
print("\\nWith initials:")
print(df[['Name', 'Initial']])

# applymap() - element-wise to entire DataFrame (DEPRECATED in pandas 2.1+)
# Use .map() instead for newer pandas
numeric_df = df[['Age', 'Salary']]
doubled = numeric_df.map(lambda x: x * 2)
print("\\nDoubled numeric columns:")
print(doubled)

# Vectorized string operations (faster than apply)
df['Name_Length'] = df['Name'].str.len()
df['Name_Title'] = df['Name'].str.title()
print("\\nWith string operations:")
print(df[['Name', 'Name_Length', 'Name_Title']])

# Using .apply() with NumPy functions (fast)
df['Salary_Log'] = df['Salary'].apply(np.log10)
print("\\nWith log10 salary:")
print(df[['Salary', 'Salary_Log']])`
      },
      {
        title: '11. Time Series Analysis - Resampling & Rolling Windows',
        explanation: `Pandas excels at time series analysis with date/time indexing, resampling, and rolling window operations for trend analysis.`,
        code: `import pandas as pd
import numpy as np

# Create time series data
date_range = pd.date_range('2024-01-01', periods=365, freq='D')
np.random.seed(42)
df = pd.DataFrame({
    'Date': date_range,
    'Sales': np.random.randint(100, 500, 365) + np.sin(np.arange(365)/30) * 50,
    'Temperature': np.random.uniform(20, 35, 365),
    'Customers': np.random.randint(50, 200, 365)
})

# Set date as index for time series operations
df.set_index('Date', inplace=True)
print("First 5 days:")
print(df.head())

# Resample to weekly average
weekly = df.resample('W').mean()
print("\\nWeekly averages:")
print(weekly.head())

# Resample to monthly sum
monthly_sales = df['Sales'].resample('M').sum()
print("\\nMonthly total sales:")
print(monthly_sales.head(3))

# Rolling window - 7-day moving average
df['Sales_7d_avg'] = df['Sales'].rolling(window=7).mean()
print("\\nWith 7-day moving average:")
print(df[['Sales', 'Sales_7d_avg']].head(10))

# Rolling window - 30-day sum
df['Sales_30d_sum'] = df['Sales'].rolling(window=30).sum()

# Expanding window (cumulative)
df['Cumulative_Sales'] = df['Sales'].expanding().sum()
print("\\nCumulative sales:")
print(df[['Sales', 'Cumulative_Sales']].tail())

# Extract date components
df['Year'] = df.index.year
df['Month'] = df.index.month
df['DayOfWeek'] = df.index.dayofweek  # 0=Monday
df['Quarter'] = df.index.quarter

print("\\nWith date components:")
print(df[['Sales', 'Year', 'Month', 'DayOfWeek', 'Quarter']].head())

# Group by month and get statistics
monthly_stats = df.groupby('Month')['Sales'].agg(['mean', 'min', 'max'])
print("\\nMonthly statistics:")
print(monthly_stats)

# Date range filtering
jan_sales = df['2024-01-01':'2024-01-31']
print(f"\\nJanuary sales count: {len(jan_sales)}")`,
        outputDescription: `Output shows:
1. Daily time series data with sales, temperature, customers
2. Weekly resampled averages (reduced from 365 to ~52 rows)
3. Monthly total sales
4. 7-day rolling average smoothing out daily fluctuations
5. Cumulative sales showing running total
6. Date components extracted (year, month, day of week, quarter)
7. Monthly statistics across all months
8. Filtered data for specific date range`
      },
      {
        title: '12. Multi-Index (Hierarchical Indexing) - Advanced Operations',
        explanation: `Multi-index allows you to work with higher dimensional data in a 2D DataFrame. Essential for complex data analysis and pivot operations.`,
        code: `import pandas as pd
import numpy as np

# Create multi-index DataFrame
arrays = [
    ['Store A', 'Store A', 'Store B', 'Store B', 'Store C', 'Store C'],
    ['Product X', 'Product Y', 'Product X', 'Product Y', 'Product X', 'Product Y']
]
index = pd.MultiIndex.from_arrays(arrays, names=['Store', 'Product'])

df = pd.DataFrame({
    'Q1_Sales': [100, 150, 120, 180, 90, 140],
    'Q2_Sales': [110, 160, 130, 190, 95, 150],
    'Q3_Sales': [105, 155, 125, 185, 92, 145],
    'Q4_Sales': [115, 165, 135, 195, 98, 155]
}, index=index)

print("Multi-index DataFrame:")
print(df)

# Access by outer index
print("\\nAll data for Store A:")
print(df.loc['Store A'])

# Access by both levels
print("\\nStore B, Product X:")
print(df.loc[('Store B', 'Product X')])

# Access using slicers
idx = pd.IndexSlice
print("\\nAll stores, Product Y:")
print(df.loc[idx[:, 'Product Y'], :])

# Stack - pivot from columns to rows
stacked = df.stack()
print("\\nStacked (3-level index):")
print(stacked.head(8))

# Unstack - pivot from rows to columns
unstacked = df.unstack(level='Product')
print("\\nUnstacked by Product:")
print(unstacked)

# Swap index levels
swapped = df.swaplevel()
print("\\nSwapped index levels:")
print(swapped.sort_index())

# Aggregation across levels
print("\\nTotal sales per Store:")
print(df.groupby(level='Store').sum())

print("\\nTotal sales per Product:")
print(df.groupby(level='Product').sum())

# Reset multi-index to columns
flat = df.reset_index()
print("\\nFlattened DataFrame:")
print(flat)

# Create multi-index from columns
df2 = flat.set_index(['Store', 'Product'])
print("\\nRecreated multi-index:")
print(df2.head())

# Cross-section (xs) - get all data for a specific level value
print("\\nAll Product X data (cross-section):")
print(df.xs('Product X', level='Product'))`,
        outputDescription: `Output demonstrates:
1. Multi-index DataFrame with Store and Product as index levels
2. Selecting data by outer index (Store A)
3. Selecting by both index levels
4. Using IndexSlice for flexible slicing
5. Stack operation creating 3-level index
6. Unstack creating multi-level columns
7. Swapping index levels
8. Aggregating across specific index levels
9. Flattening multi-index to regular columns
10. Cross-section extraction for specific level values`
      },
      {
        title: '13. Advanced GroupBy - Transform, Apply, and Multiple Aggregations',
        explanation: `GroupBy is one of Pandas' most powerful features. Beyond basic aggregation, you can transform data, apply custom functions, and compute multiple statistics.`,
        code: `import pandas as pd
import numpy as np

# Create sample sales data
np.random.seed(42)
df = pd.DataFrame({
    'Region': np.random.choice(['North', 'South', 'East', 'West'], 100),
    'Product': np.random.choice(['A', 'B', 'C'], 100),
    'Sales': np.random.randint(100, 1000, 100),
    'Quantity': np.random.randint(1, 50, 100),
    'Profit': np.random.randint(10, 200, 100)
})

print("Sample data:")
print(df.head())

# Basic groupby aggregation
print("\\nMean sales by Region:")
print(df.groupby('Region')['Sales'].mean())

# Multiple aggregations with .agg()
print("\\nMultiple statistics by Region:")
agg_result = df.groupby('Region')['Sales'].agg(['mean', 'sum', 'min', 'max', 'count'])
print(agg_result)

# Different aggregations for different columns
print("\\nDifferent aggregations per column:")
multi_agg = df.groupby('Region').agg({
    'Sales': ['sum', 'mean'],
    'Quantity': 'sum',
    'Profit': ['min', 'max']
})
print(multi_agg)

# Custom aggregation function
def range_func(x):
    return x.max() - x.min()

print("\\nCustom function (range):")
print(df.groupby('Region')['Sales'].agg(range_func))

# Transform - broadcast group statistic back to original DataFrame
df['Sales_Mean_By_Region'] = df.groupby('Region')['Sales'].transform('mean')
df['Sales_Pct_of_Region'] = df['Sales'] / df['Sales_Mean_By_Region'] * 100
print("\\nWith transform (each row gets group mean):")
print(df[['Region', 'Sales', 'Sales_Mean_By_Region', 'Sales_Pct_of_Region']].head(10))

# Apply - custom function on each group
def top_performer(group):
    return group.nlargest(2, 'Sales')

print("\\nTop 2 sales per Region:")
top_sales = df.groupby('Region', group_keys=False).apply(top_performer)
print(top_sales)

# Multiple groupby columns
print("\\nGroupBy Region AND Product:")
multi_group = df.groupby(['Region', 'Product'])['Sales'].sum().unstack(fill_value=0)
print(multi_group)

# Filter groups - only keep groups with certain conditions
large_regions = df.groupby('Region').filter(lambda x: x['Sales'].sum() > 10000)
print(f"\\nRegions with total sales > 10000: {len(large_regions)} rows")

# Named aggregations (Pandas 0.25+)
print("\\nNamed aggregations:")
named_agg = df.groupby('Region').agg(
    Total_Sales=('Sales', 'sum'),
    Avg_Profit=('Profit', 'mean'),
    Max_Quantity=('Quantity', 'max'),
    Transaction_Count=('Sales', 'count')
)
print(named_agg)

# GroupBy with quantiles
print("\\nSales quartiles by Region:")
print(df.groupby('Region')['Sales'].quantile([0.25, 0.5, 0.75]).unstack())`,
        outputDescription: `Output demonstrates:
1. Basic mean aggregation by group
2. Multiple aggregations (mean, sum, min, max, count)
3. Different aggregation functions for different columns
4. Custom aggregation function (range calculation)
5. Transform broadcasting group statistics back to original rows
6. Apply with custom function to get top performers per group
7. Multi-column grouping creating a pivot-like result
8. Filtering groups based on conditions
9. Named aggregations with descriptive column names
10. Quantile calculations per group`
      },
      {
        title: '14. Pivot Tables and Cross-Tabulation - Advanced Reshaping',
        explanation: `Pivot tables are essential for data analysis and reporting. Pandas provides flexible pivot_table() and crosstab() for reshaping and aggregating data.`,
        code: `import pandas as pd
import numpy as np

# Create sample sales data
np.random.seed(42)
df = pd.DataFrame({
    'Date': pd.date_range('2024-01-01', periods=200, freq='D').repeat(3)[:200],
    'Store': np.random.choice(['Store A', 'Store B', 'Store C'], 200),
    'Product': np.random.choice(['Widget', 'Gadget', 'Doohickey'], 200),
    'Sales': np.random.randint(100, 1000, 200),
    'Quantity': np.random.randint(1, 20, 200),
    'Region': np.random.choice(['North', 'South'], 200)
})

print("Sample data:")
print(df.head())

# Basic pivot table
pivot1 = pd.pivot_table(df, values='Sales', index='Store', columns='Product', aggfunc='mean')
print("\\nAverage sales by Store and Product:")
print(pivot1)

# Pivot with multiple aggregation functions
pivot2 = pd.pivot_table(df, values='Sales', index='Store', columns='Product', 
                        aggfunc=['mean', 'sum', 'count'])
print("\\nMultiple aggregations:")
print(pivot2)

# Pivot with margins (totals)
pivot3 = pd.pivot_table(df, values='Sales', index='Store', columns='Product', 
                        aggfunc='sum', margins=True, margins_name='Total')
print("\\nWith row and column totals:")
print(pivot3)

# Multiple values
pivot4 = pd.pivot_table(df, values=['Sales', 'Quantity'], index='Store', 
                        columns='Product', aggfunc='sum')
print("\\nMultiple values (Sales and Quantity):")
print(pivot4)

# Multiple index levels
pivot5 = pd.pivot_table(df, values='Sales', index=['Region', 'Store'], 
                        columns='Product', aggfunc='mean')
print("\\nMulti-level index (Region and Store):")
print(pivot5)

# Fill missing values in pivot
pivot6 = pd.pivot_table(df, values='Sales', index='Store', columns='Product', 
                        aggfunc='sum', fill_value=0)
print("\\nWith fill_value=0:")
print(pivot6)

# Cross-tabulation for frequency counts
crosstab1 = pd.crosstab(df['Store'], df['Product'])
print("\\nCrosstab - frequency counts:")
print(crosstab1)

# Crosstab with percentages
crosstab2 = pd.crosstab(df['Store'], df['Product'], normalize='index')
print("\\nCrosstab - row percentages:")
print(crosstab2.round(3))

# Crosstab with values and aggregation
crosstab3 = pd.crosstab(df['Store'], df['Product'], values=df['Sales'], aggfunc='mean')
print("\\nCrosstab with average sales:")
print(crosstab3.round(0))

# Crosstab with margins
crosstab4 = pd.crosstab(df['Store'], df['Product'], margins=True, margins_name='Total')
print("\\nCrosstab with totals:")
print(crosstab4)

# Multiple columns in crosstab
crosstab5 = pd.crosstab([df['Region'], df['Store']], df['Product'])
print("\\nCrosstab with multiple row categories:")
print(crosstab5)

# Pivot with custom aggregation
def sales_range(x):
    return x.max() - x.min()

pivot7 = pd.pivot_table(df, values='Sales', index='Store', columns='Product', 
                        aggfunc=sales_range)
print("\\nPivot with custom function (sales range):")
print(pivot7.round(0))`,
        outputDescription: `Output shows:
1. Basic pivot table with average sales
2. Pivot with multiple aggregation functions (mean, sum, count)
3. Pivot with margins showing row and column totals
4. Pivot with multiple value columns (Sales and Quantity)
5. Multi-level index pivot (Region and Store)
6. Pivot with fill_value to replace NaN with 0
7. Crosstab showing frequency counts
8. Crosstab normalized by row (percentages)
9. Crosstab with aggregation of values
10. Crosstab with margin totals
11. Multi-level crosstab
12. Pivot with custom aggregation function`
      },
      {
        title: '15. Performance Optimization - Memory & Speed',
        explanation: `Optimize Pandas for large datasets using proper dtypes, categorical data, chunking, and vectorization to improve both memory usage and execution speed.`,
        code: `import pandas as pd
import numpy as np
import time

# Create large dataset
np.random.seed(42)
n_rows = 100000

# BEFORE optimization - inefficient dtypes
df_bad = pd.DataFrame({
    'id': range(n_rows),
    'category': np.random.choice(['A', 'B', 'C', 'D', 'E'], n_rows),
    'value': np.random.randint(0, 100, n_rows),
    'price': np.random.uniform(10, 100, n_rows),
    'date': pd.date_range('2020-01-01', periods=n_rows, freq='min'),
    'flag': np.random.choice([True, False], n_rows)
})

print("BEFORE optimization:")
print(f"Memory usage:\\n{df_bad.memory_usage(deep=True)}")
print(f"Total: {df_bad.memory_usage(deep=True).sum() / 1024**2:.2f} MB")
print(f"\\nData types:\\n{df_bad.dtypes}")

# AFTER optimization
df_good = pd.DataFrame({
    'id': pd.array(range(n_rows), dtype='int32'),  # int32 instead of int64
    'category': pd.Categorical(np.random.choice(['A', 'B', 'C', 'D', 'E'], n_rows)),  # categorical
    'value': pd.array(np.random.randint(0, 100, n_rows), dtype='int8'),  # int8 (0-255)
    'price': pd.array(np.random.uniform(10, 100, n_rows), dtype='float32'),  # float32 instead of float64
    'date': pd.date_range('2020-01-01', periods=n_rows, freq='min'),
    'flag': np.random.choice([True, False], n_rows)  # boolean already efficient
})

print("\\n\\nAFTER optimization:")
print(f"Memory usage:\\n{df_good.memory_usage(deep=True)}")
print(f"Total: {df_good.memory_usage(deep=True).sum() / 1024**2:.2f} MB")
print(f"\\nData types:\\n{df_good.dtypes}")

memory_saved = (df_bad.memory_usage(deep=True).sum() - df_good.memory_usage(deep=True).sum()) / 1024**2
print(f"\\nMemory saved: {memory_saved:.2f} MB ({memory_saved/df_bad.memory_usage(deep=True).sum()*100*1024**2:.1f}%)")

# Performance comparison - vectorized vs loop
df_test = df_good.copy()

# BAD - Using loop
start = time.time()
result_loop = []
for idx, row in df_test.iterrows():
    result_loop.append(row['value'] * 2 + row['price'])
loop_time = time.time() - start

# GOOD - Vectorized operation
start = time.time()
result_vectorized = df_test['value'] * 2 + df_test['price']
vectorized_time = time.time() - start

print(f"\\n\\nPerformance comparison (100k rows):")
print(f"Loop time: {loop_time:.3f} seconds")
print(f"Vectorized time: {vectorized_time:.6f} seconds")
print(f"Speedup: {loop_time/vectorized_time:.0f}x faster")

# Using .apply() vs vectorized
start = time.time()
result_apply = df_test['value'].apply(lambda x: x * 2)
apply_time = time.time() - start

start = time.time()
result_vec = df_test['value'] * 2
vec_time = time.time() - start

print(f"\\n.apply() time: {apply_time:.6f} seconds")
print(f"Vectorized time: {vec_time:.6f} seconds")
print(f"Vectorized is {apply_time/vec_time:.0f}x faster")

# Reading CSV in chunks (for very large files)
print("\\n\\nChunking example:")
# First, save to CSV
df_good.to_csv('large_file.csv', index=False)

# Read in chunks
chunk_size = 10000
chunk_results = []
for chunk in pd.read_csv('large_file.csv', chunksize=chunk_size):
    # Process each chunk
    chunk_mean = chunk['value'].mean()
    chunk_results.append(chunk_mean)

print(f"Processed {len(chunk_results)} chunks")
print(f"Overall mean: {np.mean(chunk_results):.2f}")

# Best practices summary
print("\\n\\nBest Practices for Performance:")
print("1. Use categorical dtype for low-cardinality string columns")
print("2. Use smallest numeric dtype that fits your data (int8, int16, int32, float32)")
print("3. Avoid iterrows() - use vectorized operations or .apply()")
print("4. Use .query() instead of boolean indexing for complex filters")
print("5. Read large CSVs in chunks with chunksize parameter")
print("6. Use .copy() to avoid SettingWithCopyWarning and unexpected behavior")
print("7. Set index on frequently accessed columns for faster lookups")`,
        outputDescription: `Output demonstrates:
1. Memory usage BEFORE optimization (~38 MB)
2. Memory usage AFTER optimization (~15 MB, 60% reduction)
3. Data type comparison (int64→int32, object→categorical, float64→float32)
4. Performance comparison: loop vs vectorized (1000x+ faster)
5. Performance: .apply() vs vectorized operations
6. Chunking large files to avoid loading entire dataset into memory
7. Best practices summary for memory and speed optimization

Key takeaway: Proper dtype selection and vectorization can reduce memory by 50-70% and improve speed by 100-1000x for large datasets.`
      }
    ]
  },

  quiz: [
    {
      question: 'What is the main difference between a DataFrame and a Series?',
      options: [
        'DataFrame is faster',
        'DataFrame is 2D (table), Series is 1D (single column/row)',
        'Series can only store numbers',
        'DataFrame cannot have an index'
      ],
      correctAnswer: 1,
      explanation: 'A DataFrame is a 2D labeled data structure (like a table with rows and columns), while a Series is 1D (a single column or row with an index).'
    },
    {
      question: 'What is the difference between .loc[] and .iloc[]?',
      options: [
        '.loc is faster than .iloc',
        '.loc uses labels, .iloc uses integer positions',
        '.iloc is for columns, .loc is for rows',
        'They are the same'
      ],
      correctAnswer: 1,
      explanation: '.loc[] uses label-based indexing (df.loc[0, "Name"]), while .iloc[] uses integer position-based indexing (df.iloc[0, 1]).'
    },
    {
      question: 'How do you select rows where Age > 30 AND City is "NYC"?',
      options: [
        'df[df.Age > 30 and df.City == "NYC"]',
        'df[(df.Age > 30) & (df.City == "NYC")]',
        'df.filter(Age > 30, City == "NYC")',
        'df.select(Age > 30).where(City == "NYC")'
      ],
      correctAnswer: 1,
      explanation: 'Use & for AND, | for OR in boolean indexing. Parentheses are required: df[(condition1) & (condition2)]. Python\'s "and"/"or" don\'t work with Pandas boolean indexing.'
    },
    {
      question: 'What does df.groupby("Department")["Salary"].mean() do?',
      options: [
        'Calculates mean of Department column',
        'Groups by Department and calculates average salary for each department',
        'Filters departments by average salary',
        'Sorts departments by salary'
      ],
      correctAnswer: 1,
      explanation: 'groupby() splits data by Department, then .mean() calculates the average Salary for each group.'
    },
    {
      question: 'Which is the most efficient way to iterate over a DataFrame?',
      options: [
        'for row in df.iterrows()',
        'for i in range(len(df))',
        'Avoid iteration - use vectorized operations or .apply()',
        'for row in df'
      ],
      correctAnswer: 2,
      explanation: 'Iteration over DataFrames is slow. Use vectorized operations (df["col"] * 2) or .apply() when absolutely necessary. Avoid iterrows() for large datasets.'
    },
    {
      question: 'What does df.fillna(0) do?',
      options: [
        'Removes rows with NaN',
        'Replaces all NaN values with 0',
        'Counts NaN values',
        'Filters rows where values are 0'
      ],
      correctAnswer: 1,
      explanation: 'fillna(value) replaces all missing (NaN) values with the specified value, in this case 0.'
    },
    {
      question: 'What is the result of pd.merge(df1, df2, how="left")?',
      options: [
        'Only rows that exist in both DataFrames',
        'All rows from df1, matching rows from df2 (NaN if no match)',
        'All rows from df2, matching rows from df1',
        'All rows from both DataFrames'
      ],
      correctAnswer: 1,
      explanation: 'Left join keeps all rows from the left DataFrame (df1) and adds matching data from the right DataFrame (df2). Non-matching rows get NaN.'
    },
    {
      question: 'What does df.pivot_table(values="Sales", index="Product", columns="Region", aggfunc="sum") create?',
      options: [
        'A sorted table',
        'A cross-tabulation with Products as rows, Regions as columns, summed Sales as values',
        'A filtered DataFrame',
        'A grouped DataFrame'
      ],
      correctAnswer: 1,
      explanation: 'pivot_table() creates a spreadsheet-style pivot table. Products become rows, Regions become columns, and cells contain summed Sales.'
    },
    {
      question: 'How do you read a CSV file with the first column as index?',
      options: [
        'pd.read_csv("file.csv", index=0)',
        'pd.read_csv("file.csv", index_col=0)',
        'pd.read_csv("file.csv", set_index=0)',
        'pd.read_csv("file.csv").set_index(0)'
      ],
      correctAnswer: 1,
      explanation: 'Use index_col=0 to set the first column as the index when reading CSV: pd.read_csv("file.csv", index_col=0).'
    },
    {
      question: 'What does df.sort_values(["Age", "Salary"], ascending=[True, False]) do?',
      options: [
        'Sorts by Age descending, then Salary ascending',
        'Sorts by Age ascending, then Salary descending',
        'Sorts by both columns ascending',
        'Throws an error'
      ],
      correctAnswer: 1,
      explanation: 'Sorts first by Age (ascending=True), then by Salary (ascending=False) for rows with the same Age.'
    },
    {
      question: 'What is the difference between .apply() and .map()?',
      options: [
        '.apply() is only for DataFrames, .map() is only for Series',
        '.map() is faster',
        '.apply() can be used on Series or DataFrames (row/column), .map() is for Series element-wise mapping',
        'They are identical'
      ],
      correctAnswer: 2,
      explanation: '.apply() works on Series or DataFrames and can apply complex functions. .map() is for Series and is used to map values (like a dictionary lookup or function).'
    },
    {
      question: 'How do you drop rows with ANY missing values?',
      options: [
        'df.dropna()',
        'df.drop(nan)',
        'df.remove_na()',
        'df.filter_nan()'
      ],
      correctAnswer: 0,
      explanation: 'df.dropna() removes rows with any NaN values. Use df.dropna(how="all") to remove only rows where ALL values are NaN.'
    },
    {
      question: 'What does df["Age"].apply(lambda x: x * 2) do?',
      options: [
        'Doubles each value in the Age column',
        'Filters Age column',
        'Sorts Age column',
        'Creates a new DataFrame'
      ],
      correctAnswer: 0,
      explanation: '.apply() applies the lambda function to each element in the Age column, doubling all values.'
    },
    {
      question: 'How do you combine two DataFrames vertically (stack rows)?',
      options: [
        'pd.concat([df1, df2])',
        'df1.append(df2)',
        'pd.merge(df1, df2)',
        'df1 + df2'
      ],
      correctAnswer: 0,
      explanation: 'pd.concat([df1, df2]) stacks DataFrames vertically (adds rows). Note: .append() is deprecated, use concat() instead.'
    },
    {
      question: 'What does df.query("Age > 30 and City == \'NYC\'") do?',
      options: [
        'Throws an error',
        'Filters rows where Age > 30 AND City is NYC',
        'Sorts the DataFrame',
        'Groups the DataFrame'
      ],
      correctAnswer: 1,
      explanation: '.query() provides a more readable way to filter using SQL-like syntax. It\'s equivalent to df[(df.Age > 30) & (df.City == "NYC")].'
    },
    {
      question: 'How do you rename a column from "old_name" to "new_name"?',
      options: [
        'df.rename(columns={"old_name": "new_name"})',
        'df.columns["old_name"] = "new_name"',
        'df.change_name("old_name", "new_name")',
        'df["new_name"] = df["old_name"]'
      ],
      correctAnswer: 0,
      explanation: 'Use .rename() with a dictionary: df.rename(columns={"old": "new"}). Add inplace=True to modify the original.'
    },
    {
      question: 'What is the purpose of .reset_index()?',
      options: [
        'To remove the index',
        'To convert the current index to a column and create a new default numeric index',
        'To sort by index',
        'To set a new index'
      ],
      correctAnswer: 1,
      explanation: '.reset_index() converts the current index to a column and creates a new default integer index (0, 1, 2, ...). Use drop=True to discard the old index.'
    },
    {
      question: 'How do you find the top 5 rows with highest salary?',
      options: [
        'df.sort_values("Salary").head(5)',
        'df.nlargest(5, "Salary")',
        'df.top(5, "Salary")',
        'df.max("Salary", n=5)'
      ],
      correctAnswer: 1,
      explanation: 'df.nlargest(n, "column") efficiently returns the top N rows by the specified column. Alternatively: df.sort_values("Salary", ascending=False).head(5).'
    },
    {
      question: 'What does df.isnull().sum() return?',
      options: [
        'Total missing values in DataFrame',
        'Number of missing values per column',
        'Boolean mask of missing values',
        'Rows with missing values'
      ],
      correctAnswer: 1,
      explanation: 'df.isnull() creates a boolean mask, .sum() counts True values per column. Result is a Series showing missing count for each column.'
    },
    {
      question: 'What is the difference between merge() and concat()?',
      options: [
        'No difference',
        'merge() joins DataFrames by matching columns (SQL-like), concat() simply stacks them',
        'concat() is faster',
        'merge() only works with 2 DataFrames'
      ],
      correctAnswer: 1,
      explanation: 'merge() performs SQL-style joins (inner, left, right, outer) based on key columns. concat() simply stacks DataFrames vertically or horizontally without matching.'
    }
  ]
};
