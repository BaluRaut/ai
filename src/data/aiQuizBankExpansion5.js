export const aiQuizBankExpansion5 = [
  {
    "id": "python-math-001",
    "question": "In NumPy, what is the result of the operation `np.array([1, 2, 3]) + np.array([10])` due to broadcasting?",
    "options": [
      "Error: shapes (3,) and (1,) are incompatible",
      "[11, 12, 13]",
      "[11, 2, 3]",
      "[1, 2, 13]"
    ],
    "correctAnswer": 1,
    "explanation": "Broadcasting stretches the smaller array `[10]` to match the shape of the larger array `[1, 2, 3]`, resulting in `[1+10, 2+10, 3+10] = [11, 12, 13]`.",
    "difficulty": "easy",
    "tags": ["python", "numpy", "broadcasting"]
  },
  {
    "id": "python-math-002",
    "question": "Which NumPy attribute returns a tuple representing the dimensions of an array?",
    "options": [
      ".size",
      ".ndim",
      ".shape",
      ".dtype"
    ],
    "correctAnswer": 2,
    "explanation": "The `.shape` attribute returns a tuple of integers indicating the size of the array in each dimension.",
    "difficulty": "easy",
    "tags": ["python", "numpy", "attributes"]
  },
  {
    "id": "python-math-003",
    "question": "What is the primary advantage of NumPy vectorization over Python loops?",
    "options": [
      "It uses less memory by compressing data",
      "It allows arrays to hold mixed data types",
      "It delegates operations to optimized C/Fortran code, significantly increasing speed",
      "It automatically parallelizes code across multiple machines"
    ],
    "correctAnswer": 2,
    "explanation": "Vectorization allows NumPy to apply operations to whole arrays at once, utilizing underlying optimized C libraries and avoiding slow Python loops.",
    "difficulty": "medium",
    "tags": ["python", "numpy", "performance"]
  },
  {
    "id": "python-math-004",
    "question": "Given `arr = np.array([[1, 2, 3], [4, 5, 6]])`, what does `arr[0, 1]` return?",
    "options": [
      "1",
      "2",
      "4",
      "[1, 2]"
    ],
    "correctAnswer": 1,
    "explanation": "In NumPy indexing `arr[row, col]`, `0` refers to the first row and `1` refers to the second column (0-indexed), so the value is 2.",
    "difficulty": "easy",
    "tags": ["python", "numpy", "indexing"]
  },
  {
    "id": "python-math-005",
    "question": "Which function is used to stack arrays vertically in NumPy?",
    "options": [
      "np.hstack",
      "np.vstack",
      "np.concatenate(axis=1)",
      "np.column_stack"
    ],
    "correctAnswer": 1,
    "explanation": "`np.vstack` stacks arrays in sequence vertically (row-wise).",
    "difficulty": "easy",
    "tags": ["python", "numpy", "manipulation"]
  },
  {
    "id": "python-math-006",
    "question": "In Pandas, which method is used to select rows by label/index name?",
    "options": [
      ".iloc[]",
      ".loc[]",
      ".ix[]",
      ".select[]"
    ],
    "correctAnswer": 1,
    "explanation": "`.loc[]` is label-based data selection, whereas `.iloc[]` is integer position-based.",
    "difficulty": "easy",
    "tags": ["python", "pandas", "indexing"]
  },
  {
    "id": "python-math-007",
    "question": "How do you handle missing values in a Pandas DataFrame by replacing them with a specific value?",
    "options": [
      "df.dropna()",
      "df.isnull()",
      "df.fillna(value)",
      "df.replace_na(value)"
    ],
    "correctAnswer": 2,
    "explanation": "`df.fillna()` is the standard method to fill NA/NaN values using a specified method or value.",
    "difficulty": "easy",
    "tags": ["python", "pandas", "cleaning"]
  },
  {
    "id": "python-math-008",
    "question": "What is the result of an inner join between two DataFrames?",
    "options": [
      "All rows from both DataFrames",
      "Only rows with matching keys in both DataFrames",
      "All rows from the left DataFrame and matching rows from the right",
      "All rows from the right DataFrame and matching rows from the left"
    ],
    "correctAnswer": 1,
    "explanation": "An inner join returns only the rows where the join key exists in both DataFrames.",
    "difficulty": "medium",
    "tags": ["python", "pandas", "merging"]
  },
  {
    "id": "python-math-009",
    "question": "Which Pandas function is used to compute summary statistics like mean, min, and max for numeric columns?",
    "options": [
      "df.info()",
      "df.head()",
      "df.describe()",
      "df.stats()"
    ],
    "correctAnswer": 2,
    "explanation": "`df.describe()` generates descriptive statistics that summarize the central tendency, dispersion, and shape of a dataset’s distribution.",
    "difficulty": "easy",
    "tags": ["python", "pandas", "analysis"]
  },
  {
    "id": "python-math-010",
    "question": "In Pandas, what does `df.groupby('Category')['Value'].mean()` do?",
    "options": [
      "Sorts the DataFrame by 'Category'",
      "Filters rows where 'Category' is 'Value'",
      "Calculates the average of 'Value' for each unique 'Category'",
      "Counts the number of occurrences of each 'Category'"
    ],
    "correctAnswer": 2,
    "explanation": "It groups the data by the 'Category' column and then computes the mean of the 'Value' column for each group.",
    "difficulty": "medium",
    "tags": ["python", "pandas", "aggregation"]
  },
  {
    "id": "python-math-011",
    "question": "In Scikit-learn, what is the purpose of the `fit()` method in an estimator?",
    "options": [
      "To apply the learned parameters to new data",
      "To learn parameters (like weights or means) from the training data",
      "To evaluate the accuracy of the model",
      "To split the data into training and testing sets"
    ],
    "correctAnswer": 1,
    "explanation": "`fit()` triggers the learning process where the model adapts its internal parameters to the provided training data.",
    "difficulty": "easy",
    "tags": ["python", "sklearn", "api"]
  },
  {
    "id": "python-math-012",
    "question": "Which Scikit-learn method should be used on test data to prevent data leakage during preprocessing?",
    "options": [
      "fit()",
      "transform()",
      "fit_transform()",
      "predict()"
    ],
    "correctAnswer": 1,
    "explanation": "You should only use `transform()` on test data, using the parameters learned from `fit()` on the training data. Using `fit_transform()` on test data would leak information.",
    "difficulty": "hard",
    "tags": ["python", "sklearn", "best-practices"]
  },
  {
    "id": "python-math-013",
    "question": "What is a Scikit-learn `Pipeline` used for?",
    "options": [
      "To visualize the decision tree structure",
      "To chain multiple processing steps and an estimator into a single unit",
      "To download datasets from the internet",
      "To parallelize training across GPUs"
    ],
    "correctAnswer": 1,
    "explanation": "A `Pipeline` sequentially applies a list of transforms and a final estimator, ensuring that the same preprocessing steps are applied during training and prediction.",
    "difficulty": "medium",
    "tags": ["python", "sklearn", "pipelines"]
  },
  {
    "id": "python-math-014",
    "question": "Which Matplotlib function is used to create a scatter plot?",
    "options": [
      "plt.plot()",
      "plt.bar()",
      "plt.scatter()",
      "plt.hist()"
    ],
    "correctAnswer": 2,
    "explanation": "`plt.scatter()` is specifically designed to create scatter plots representing individual data points.",
    "difficulty": "easy",
    "tags": ["python", "matplotlib", "plotting"]
  },
  {
    "id": "python-math-015",
    "question": "In Seaborn, which function creates a heatmap to visualize a correlation matrix?",
    "options": [
      "sns.heatmap()",
      "sns.pairplot()",
      "sns.boxplot()",
      "sns.distplot()"
    ],
    "correctAnswer": 0,
    "explanation": "`sns.heatmap()` plots rectangular data as a color-encoded matrix, commonly used for visualizing correlations.",
    "difficulty": "easy",
    "tags": ["python", "seaborn", "visualization"]
  },
  {
    "id": "python-math-016",
    "question": "What is the dot product of two vectors `a = [1, 2]` and `b = [3, 4]`?",
    "options": [
      "[3, 8]",
      "7",
      "11",
      "10"
    ],
    "correctAnswer": 2,
    "explanation": "The dot product is calculated as $(1*3) + (2*4) = 3 + 8 = 11$.",
    "difficulty": "easy",
    "tags": ["math", "linear-algebra", "vectors"]
  },
  {
    "id": "python-math-017",
    "question": "If matrix A has dimensions $3 \\times 2$ and matrix B has dimensions $2 \\times 4$, what are the dimensions of the product $AB$?",
    "options": [
      "$3 \\times 2$",
      "$2 \\times 2$",
      "$3 \\times 4$",
      "Multiplication is not possible"
    ],
    "correctAnswer": 2,
    "explanation": "For matrix multiplication, the inner dimensions must match (2 and 2). The resulting matrix has the outer dimensions: $3 \\times 4$.",
    "difficulty": "medium",
    "tags": ["math", "linear-algebra", "matrices"]
  },
  {
    "id": "python-math-018",
    "question": "What is an eigenvector of a square matrix $A$?",
    "options": [
      "A vector that becomes zero when multiplied by $A$",
      "A non-zero vector that changes only by a scalar factor when multiplied by $A$",
      "The vector with the largest magnitude in the matrix",
      "A vector perpendicular to all rows of $A$"
    ],
    "correctAnswer": 1,
    "explanation": "An eigenvector $v$ satisfies $Av = \\lambda v$, meaning its direction remains unchanged (or reversed), only scaled by the eigenvalue $\\lambda$.",
    "difficulty": "hard",
    "tags": ["math", "linear-algebra", "eigenvalues"]
  },
  {
    "id": "python-math-019",
    "question": "What does the derivative of a function represent geometrically?",
    "options": [
      "The area under the curve",
      "The slope of the tangent line to the curve at a point",
      "The maximum value of the function",
      "The intersection with the x-axis"
    ],
    "correctAnswer": 1,
    "explanation": "The derivative measures the instantaneous rate of change, which corresponds to the slope of the tangent line.",
    "difficulty": "easy",
    "tags": ["math", "calculus", "derivatives"]
  },
  {
    "id": "python-math-020",
    "question": "What is the derivative of $f(x) = x^2$?",
    "options": [
      "$x$",
      "$2x$",
      "$2$",
      "$x^3/3$"
    ],
    "correctAnswer": 1,
    "explanation": "Using the power rule $\\frac{d}{dx}x^n = nx^{n-1}$, the derivative of $x^2$ is $2x^{2-1} = 2x$.",
    "difficulty": "easy",
    "tags": ["math", "calculus", "derivatives"]
  },
  {
    "id": "python-math-021",
    "question": "In multivariable calculus, what is the gradient?",
    "options": [
      "A scalar representing the total change",
      "A vector of partial derivatives pointing in the direction of steepest ascent",
      "The second derivative of the function",
      "The area under the surface"
    ],
    "correctAnswer": 1,
    "explanation": "The gradient is a vector containing all partial derivatives, pointing in the direction where the function increases most rapidly.",
    "difficulty": "medium",
    "tags": ["math", "calculus", "gradients"]
  },
  {
    "id": "python-math-022",
    "question": "What rule is used to compute the derivative of a composite function like $f(g(x))$?",
    "options": [
      "Product Rule",
      "Quotient Rule",
      "Chain Rule",
      "Power Rule"
    ],
    "correctAnswer": 2,
    "explanation": "The Chain Rule states that $\\frac{d}{dx}f(g(x)) = f'(g(x)) \\cdot g'(x)$. It is essential for backpropagation in neural networks.",
    "difficulty": "medium",
    "tags": ["math", "calculus", "chain-rule"]
  },
  {
    "id": "python-math-023",
    "question": "What does Bayes' Theorem calculate?",
    "options": [
      "The probability of an event occurring given no prior information",
      "The probability of an event based on prior knowledge of conditions that might be related to the event",
      "The average value of a distribution",
      "The standard deviation of a dataset"
    ],
    "correctAnswer": 1,
    "explanation": "Bayes' Theorem describes the probability of an event, based on prior knowledge of conditions that might be related to the event: $P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$.",
    "difficulty": "medium",
    "tags": ["math", "probability", "bayes"]
  },
  {
    "id": "python-math-024",
    "question": "If events A and B are independent, what is $P(A \\text{ and } B)$?",
    "options": [
      "$P(A) + P(B)$",
      "$P(A) \\times P(B)$",
      "$P(A) / P(B)$",
      "$0$"
    ],
    "correctAnswer": 1,
    "explanation": "For independent events, the probability of both occurring is the product of their individual probabilities.",
    "difficulty": "easy",
    "tags": ["math", "probability", "independence"]
  },
  {
    "id": "python-math-025",
    "question": "Which probability distribution is shaped like a bell curve and defined by its mean and standard deviation?",
    "options": [
      "Uniform Distribution",
      "Binomial Distribution",
      "Normal (Gaussian) Distribution",
      "Poisson Distribution"
    ],
    "correctAnswer": 2,
    "explanation": "The Normal Distribution is the classic bell curve, symmetric around the mean.",
    "difficulty": "easy",
    "tags": ["math", "probability", "distributions"]
  },
  {
    "id": "python-math-026",
    "question": "In NumPy, what does `np.arange(0, 10, 2)` produce?",
    "options": [
      "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]",
      "[0, 2, 4, 6, 8, 10]",
      "[0, 2, 4, 6, 8]",
      "[2, 4, 6, 8, 10]"
    ],
    "correctAnswer": 2,
    "explanation": "`np.arange(start, stop, step)` generates values from `start` up to (but not including) `stop` with step size `step`.",
    "difficulty": "easy",
    "tags": ["python", "numpy", "creation"]
  },
  {
    "id": "python-math-027",
    "question": "What is the purpose of `np.reshape()`?",
    "options": [
      "To change the data type of the array",
      "To change the dimensions of the array without changing its data",
      "To remove elements from the array",
      "To sort the array"
    ],
    "correctAnswer": 1,
    "explanation": "`reshape` gives a new shape to an array without changing its data, provided the total number of elements remains the same.",
    "difficulty": "easy",
    "tags": ["python", "numpy", "manipulation"]
  },
  {
    "id": "python-math-028",
    "question": "In Pandas, how do you read a CSV file into a DataFrame?",
    "options": [
      "pd.read_file('data.csv')",
      "pd.import_csv('data.csv')",
      "pd.read_csv('data.csv')",
      "pd.load_csv('data.csv')"
    ],
    "correctAnswer": 2,
    "explanation": "`pd.read_csv()` is the standard function to read comma-separated values (csv) files into a DataFrame.",
    "difficulty": "easy",
    "tags": ["python", "pandas", "io"]
  },
  {
    "id": "python-math-029",
    "question": "Which Pandas method allows you to apply a function along an axis of the DataFrame?",
    "options": [
      ".map()",
      ".apply()",
      ".run()",
      ".execute()"
    ],
    "correctAnswer": 1,
    "explanation": "`.apply()` applies a function along an axis of the DataFrame (rows or columns).",
    "difficulty": "medium",
    "tags": ["python", "pandas", "transformation"]
  },
  {
    "id": "python-math-030",
    "question": "What is the default behavior of `df.drop('col_name', axis=1)`?",
    "options": [
      "It deletes the column in-place",
      "It returns a new DataFrame with the column removed",
      "It deletes the row with index 'col_name'",
      "It sets all values in the column to NaN"
    ],
    "correctAnswer": 1,
    "explanation": "By default, Pandas operations are not in-place. It returns a new object unless `inplace=True` is specified.",
    "difficulty": "medium",
    "tags": ["python", "pandas", "manipulation"]
  },
  {
    "id": "python-math-031",
    "question": "In Scikit-learn, what is 'stratified sampling' used for during train-test split?",
    "options": [
      "To ensure the training set is larger than the test set",
      "To ensure the distribution of target classes is the same in both training and test sets",
      "To shuffle the data randomly",
      "To remove outliers before splitting"
    ],
    "correctAnswer": 1,
    "explanation": "Stratified sampling preserves the percentage of samples for each class, which is crucial for imbalanced datasets.",
    "difficulty": "medium",
    "tags": ["python", "sklearn", "preprocessing"]
  },
  {
    "id": "python-math-032",
    "question": "Which metric is most appropriate for evaluating a regression model?",
    "options": [
      "Accuracy",
      "F1-Score",
      "Mean Squared Error (MSE)",
      "Precision"
    ],
    "correctAnswer": 2,
    "explanation": "MSE measures the average squared difference between estimated values and the actual value, suitable for continuous outputs (regression). The others are classification metrics.",
    "difficulty": "medium",
    "tags": ["python", "sklearn", "metrics"]
  },
  {
    "id": "python-math-033",
    "question": "What does `plt.xlabel('Time')` do in Matplotlib?",
    "options": [
      "Sets the title of the plot",
      "Sets the label for the x-axis",
      "Adds a legend to the plot",
      "Changes the x-axis scale to logarithmic"
    ],
    "correctAnswer": 1,
    "explanation": "`xlabel` sets the text label for the x-axis.",
    "difficulty": "easy",
    "tags": ["python", "matplotlib", "plotting"]
  },
  {
    "id": "python-math-034",
    "question": "What is the identity matrix?",
    "options": [
      "A matrix with all zeros",
      "A matrix with all ones",
      "A square matrix with ones on the main diagonal and zeros elsewhere",
      "A matrix where rows equal columns"
    ],
    "correctAnswer": 2,
    "explanation": "The identity matrix $I$ acts like the number 1 in matrix multiplication: $AI = A$. It has 1s on the diagonal and 0s everywhere else.",
    "difficulty": "easy",
    "tags": ["math", "linear-algebra", "matrices"]
  },
  {
    "id": "python-math-035",
    "question": "What is the transpose of a matrix?",
    "options": [
      "The inverse of the matrix",
      "The matrix flipped over its main diagonal (rows become columns)",
      "The matrix multiplied by -1",
      "The matrix with all elements squared"
    ],
    "correctAnswer": 1,
    "explanation": "Transposing a matrix switches its row and column indices. $A_{ij}$ becomes $A^T_{ji}$.",
    "difficulty": "easy",
    "tags": ["math", "linear-algebra", "matrices"]
  },
  {
    "id": "python-math-036",
    "question": "What is a partial derivative?",
    "options": [
      "The derivative of a part of a function",
      "The derivative of a multivariable function with respect to one variable, holding others constant",
      "An incomplete derivative calculation",
      "The integral of a derivative"
    ],
    "correctAnswer": 1,
    "explanation": "In multivariable calculus, a partial derivative $\\frac{\\partial f}{\\partial x}$ measures how $f$ changes as $x$ changes, while treating other variables like $y$ and $z$ as constants.",
    "difficulty": "medium",
    "tags": ["math", "calculus", "derivatives"]
  },
  {
    "id": "python-math-037",
    "question": "What is the global minimum of a convex function?",
    "options": [
      "The highest point on the curve",
      "The point where the derivative is zero and the function value is lowest",
      "Any point where the derivative is zero",
      "The point where the function crosses the y-axis"
    ],
    "correctAnswer": 1,
    "explanation": "For a convex function, any local minimum is also the global minimum, found where the gradient is zero.",
    "difficulty": "medium",
    "tags": ["math", "calculus", "optimization"]
  },
  {
    "id": "python-math-038",
    "question": "What is the 'Chain Rule' used for in Deep Learning?",
    "options": [
      "To link layers together",
      "To calculate gradients for backpropagation",
      "To initialize weights",
      "To normalize data"
    ],
    "correctAnswer": 1,
    "explanation": "Backpropagation relies entirely on the Chain Rule to compute how the error function changes with respect to weights in earlier layers.",
    "difficulty": "hard",
    "tags": ["math", "calculus", "deep-learning"]
  },
  {
    "id": "python-math-039",
    "question": "What is the probability of rolling a 6 on a fair six-sided die?",
    "options": [
      "1/2",
      "1/6",
      "1/3",
      "1/10"
    ],
    "correctAnswer": 1,
    "explanation": "There is 1 favorable outcome out of 6 equally likely outcomes.",
    "difficulty": "easy",
    "tags": ["math", "probability", "basics"]
  },
  {
    "id": "python-math-040",
    "question": "What is the expected value (mean) of a probability distribution?",
    "options": [
      "The most frequent value",
      "The weighted average of all possible values",
      "The middle value",
      "The range of values"
    ],
    "correctAnswer": 1,
    "explanation": "The expected value is the sum of all possible values each multiplied by their probability of occurrence.",
    "difficulty": "medium",
    "tags": ["math", "probability", "statistics"]
  },
  {
    "id": "python-math-041",
    "question": "Which NumPy function calculates the dot product of two arrays?",
    "options": [
      "np.mult()",
      "np.dot()",
      "np.cross()",
      "np.prod()"
    ],
    "correctAnswer": 1,
    "explanation": "`np.dot()` computes the dot product of two arrays (or matrix multiplication for 2D arrays).",
    "difficulty": "easy",
    "tags": ["python", "numpy", "linear-algebra"]
  },
  {
    "id": "python-math-042",
    "question": "In Pandas, how do you combine two DataFrames by appending rows?",
    "options": [
      "pd.merge()",
      "pd.join()",
      "pd.concat()",
      "pd.append()"
    ],
    "correctAnswer": 2,
    "explanation": "`pd.concat()` is the primary function for concatenating pandas objects along a particular axis (default is index/rows). Note: `append` is deprecated.",
    "difficulty": "medium",
    "tags": ["python", "pandas", "manipulation"]
  },
  {
    "id": "python-math-043",
    "question": "What is 'One-Hot Encoding' in Scikit-learn?",
    "options": [
      "Converting text to lowercase",
      "Converting categorical variables into binary vectors",
      "Scaling numerical features to 0-1 range",
      "Removing missing values"
    ],
    "correctAnswer": 1,
    "explanation": "One-Hot Encoding transforms categorical labels into a format that can be provided to ML algorithms, creating a binary column for each category.",
    "difficulty": "medium",
    "tags": ["python", "sklearn", "preprocessing"]
  },
  {
    "id": "python-math-044",
    "question": "Which Seaborn plot is best for visualizing the distribution of a single univariate variable?",
    "options": [
      "sns.scatterplot()",
      "sns.histplot()",
      "sns.lineplot()",
      "sns.heatmap()"
    ],
    "correctAnswer": 1,
    "explanation": "`sns.histplot()` (or `distplot` in older versions) plots a histogram to show the frequency distribution of a variable.",
    "difficulty": "easy",
    "tags": ["python", "seaborn", "visualization"]
  },
  {
    "id": "python-math-045",
    "question": "What is the determinant of a matrix?",
    "options": [
      "A vector representing the diagonal",
      "A scalar value that indicates whether the matrix is invertible",
      "The sum of all elements",
      "The product of all elements"
    ],
    "correctAnswer": 1,
    "explanation": "The determinant is a scalar value. If it is non-zero, the matrix is invertible. If it is zero, the matrix is singular (non-invertible).",
    "difficulty": "medium",
    "tags": ["math", "linear-algebra", "matrices"]
  },
  {
    "id": "python-math-046",
    "question": "What is the geometric interpretation of the dot product being zero?",
    "options": [
      "The vectors are parallel",
      "The vectors are identical",
      "The vectors are orthogonal (perpendicular)",
      "One vector is zero"
    ],
    "correctAnswer": 2,
    "explanation": "If $a \\cdot b = 0$ and neither vector is zero, the angle between them is 90 degrees (orthogonal).",
    "difficulty": "medium",
    "tags": ["math", "linear-algebra", "vectors"]
  },
  {
    "id": "python-math-047",
    "question": "What is the derivative of $\\sin(x)$?",
    "options": [
      "$\\cos(x)$",
      "$-\\cos(x)$",
      "$\\tan(x)$",
      "$-\\sin(x)$"
    ],
    "correctAnswer": 0,
    "explanation": "The derivative of the sine function is the cosine function.",
    "difficulty": "easy",
    "tags": ["math", "calculus", "derivatives"]
  },
  {
    "id": "python-math-048",
    "question": "What is the 'learning rate' in gradient descent?",
    "options": [
      "The speed at which the model trains",
      "The size of the step taken in the direction of the negative gradient",
      "The accuracy of the model",
      "The number of epochs"
    ],
    "correctAnswer": 1,
    "explanation": "The learning rate is a hyperparameter that controls how much to change the model in response to the estimated error each time the model weights are updated.",
    "difficulty": "medium",
    "tags": ["math", "calculus", "optimization"]
  },
  {
    "id": "python-math-049",
    "question": "What is a 'random variable'?",
    "options": [
      "A variable that changes randomly in code",
      "A variable whose possible values are numerical outcomes of a random phenomenon",
      "An unknown value in algebra",
      "A variable with no defined type"
    ],
    "correctAnswer": 1,
    "explanation": "In probability, a random variable is a function that maps the outcomes of a random process to numbers.",
    "difficulty": "medium",
    "tags": ["math", "probability", "basics"]
  },
  {
    "id": "python-math-050",
    "question": "What is the Central Limit Theorem?",
    "options": [
      "The mean of a sample is always equal to the population mean",
      "The distribution of sample means approximates a normal distribution as the sample size gets larger",
      "Probability cannot exceed 1",
      "All distributions are normal"
    ],
    "correctAnswer": 1,
    "explanation": "The CLT states that the sampling distribution of the sample mean approaches a normal distribution as the sample size increases, regardless of the population's distribution.",
    "difficulty": "hard",
    "tags": ["math", "probability", "statistics"]
  }
];
