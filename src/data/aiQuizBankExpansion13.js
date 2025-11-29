export const aiQuizBankExpansion13 = [
  {
    id: "python-001",
    question: "Which NumPy function is used to create an array filled with zeros?",
    options: [
      "np.empty()",
      "np.zeros()",
      "np.null()",
      "np.void()"
    ],
    correctAnswer: 1,
    explanation: "np.zeros() creates a new array of given shape and type, filled with zeros.",
    difficulty: "easy",
    tags: ["numpy", "basics"]
  },
  {
    id: "python-002",
    question: "In Pandas, which method is used to view the first few rows of a DataFrame?",
    options: [
      "df.top()",
      "df.start()",
      "df.head()",
      "df.first()"
    ],
    correctAnswer: 2,
    explanation: "The head() method returns the first n rows for the object based on position. It is useful for quickly testing if your object has the right type of data in it.",
    difficulty: "easy",
    tags: ["pandas", "basics"]
  },
  {
    id: "python-003",
    question: "Which Scikit-learn function is commonly used to split data into training and testing sets?",
    options: [
      "split_data()",
      "train_test_split()",
      "data_split()",
      "create_sets()"
    ],
    correctAnswer: 1,
    explanation: "train_test_split() from sklearn.model_selection is the standard function to split arrays or matrices into random train and test subsets.",
    difficulty: "easy",
    tags: ["scikit-learn", "preprocessing"]
  },
  {
    id: "python-004",
    question: "In PyTorch, how do you move a tensor to the GPU?",
    options: [
      "tensor.gpu()",
      "tensor.cuda()",
      "tensor.to('cuda')",
      "tensor.move('gpu')"
    ],
    correctAnswer: 2,
    explanation: "The .to() method is the most general way to move tensors to a device. tensor.to('cuda') moves it to the default CUDA device.",
    difficulty: "medium",
    tags: ["pytorch", "gpu"]
  },
  {
    id: "python-005",
    question: "Which Keras model type allows you to build models layer-by-layer linearly?",
    options: [
      "Functional",
      "Sequential",
      "Linear",
      "Stacked"
    ],
    correctAnswer: 1,
    explanation: "The Sequential model is appropriate for a plain stack of layers where each layer has exactly one input tensor and one output tensor.",
    difficulty: "easy",
    tags: ["tensorflow", "keras"]
  },
  {
    id: "python-006",
    question: "What is the output of [x**2 for x in range(3)]?",
    options: [
      "[1, 2, 3]",
      "[0, 1, 2]",
      "[0, 1, 4]",
      "[1, 4, 9]"
    ],
    correctAnswer: 2,
    explanation: "range(3) yields 0, 1, 2. Squaring them gives 0, 1, 4.",
    difficulty: "easy",
    tags: ["python", "syntax"]
  },
  {
    id: "python-007",
    question: "What is the primary goal of Gradient Descent in machine learning?",
    options: [
      "To increase the loss function",
      "To minimize the loss function",
      "To calculate the accuracy",
      "To split the data"
    ],
    correctAnswer: 1,
    explanation: "Gradient Descent is an optimization algorithm used to minimize some function by iteratively moving in the direction of steepest descent as defined by the negative of the gradient.",
    difficulty: "medium",
    tags: ["optimization", "theory"]
  },
  {
    id: "python-008",
    question: "What is 'broadcasting' in NumPy?",
    options: [
      "Sending data to multiple GPUs",
      "Printing array contents",
      "Arithmetic operations on arrays of different shapes",
      "Reshaping arrays"
    ],
    correctAnswer: 2,
    explanation: "Broadcasting describes how NumPy treats arrays with different shapes during arithmetic operations. Subject to certain constraints, the smaller array is 'broadcast' across the larger array so that they have compatible shapes.",
    difficulty: "medium",
    tags: ["numpy", "broadcasting"]
  },
  {
    id: "python-009",
    question: "Which Pandas function is used to check for missing values?",
    options: [
      "df.missing()",
      "df.check_null()",
      "df.isnull()",
      "df.empty()"
    ],
    correctAnswer: 2,
    explanation: "isnull() (or isna()) returns a DataFrame of boolean values indicating whether each element is missing (NaN/None).",
    difficulty: "easy",
    tags: ["pandas", "cleaning"]
  },
  {
    id: "python-010",
    question: "Which Scikit-learn class is used for standardizing features by removing the mean and scaling to unit variance?",
    options: [
      "MinMaxScaler",
      "StandardScaler",
      "Normalizer",
      "RobustScaler"
    ],
    correctAnswer: 1,
    explanation: "StandardScaler standardizes features by removing the mean and scaling to unit variance (z = (x - u) / s).",
    difficulty: "medium",
    tags: ["scikit-learn", "preprocessing"]
  },
  {
    id: "python-011",
    question: "What is the purpose of 'autograd' in PyTorch?",
    options: [
      "Automatic data loading",
      "Automatic differentiation",
      "Automatic model saving",
      "Automatic GPU selection"
    ],
    correctAnswer: 1,
    explanation: "torch.autograd provides classes and functions implementing automatic differentiation of arbitrary scalar valued functions.",
    difficulty: "medium",
    tags: ["pytorch", "autograd"]
  },
  {
    id: "python-012",
    question: "Which activation function is commonly used in the output layer for binary classification?",
    options: [
      "ReLU",
      "Softmax",
      "Sigmoid",
      "Tanh"
    ],
    correctAnswer: 2,
    explanation: "Sigmoid squashes values between 0 and 1, making it suitable for binary classification probabilities.",
    difficulty: "medium",
    tags: ["tensorflow", "theory"]
  },
  {
    id: "python-013",
    question: "Which keyword is used to create a generator in Python?",
    options: [
      "return",
      "yield",
      "generate",
      "emit"
    ],
    correctAnswer: 1,
    explanation: "The 'yield' keyword pauses the function execution and sends a value back to the caller, but retains enough state to enable the function to resume where it is left off.",
    difficulty: "medium",
    tags: ["python", "syntax"]
  },
  {
    id: "python-014",
    question: "What indicates overfitting in a machine learning model?",
    options: [
      "High training error, high validation error",
      "Low training error, low validation error",
      "Low training error, high validation error",
      "High training error, low validation error"
    ],
    correctAnswer: 2,
    explanation: "Overfitting occurs when a model learns the training data too well, including noise, leading to poor generalization on new data (high validation error).",
    difficulty: "medium",
    tags: ["theory", "optimization"]
  },
  {
    id: "python-015",
    question: "Which NumPy method changes the shape of an array without changing its data?",
    options: [
      "resize()",
      "reshape()",
      "transform()",
      "view()"
    ],
    correctAnswer: 1,
    explanation: "reshape() gives a new shape to an array without changing its data.",
    difficulty: "easy",
    tags: ["numpy", "manipulation"]
  },
  {
    id: "python-016",
    question: "Which Pandas operation is used to split the object, apply a function, and combine the results?",
    options: [
      "merge",
      "concat",
      "groupby",
      "join"
    ],
    correctAnswer: 2,
    explanation: "groupby() involves some combination of splitting the object, applying a function, and combining the results.",
    difficulty: "medium",
    tags: ["pandas", "analysis"]
  },
  {
    id: "python-017",
    question: "What does a confusion matrix evaluate?",
    options: [
      "Regression performance",
      "Clustering performance",
      "Classification performance",
      "Dimensionality reduction"
    ],
    correctAnswer: 2,
    explanation: "A confusion matrix is a table used to describe the performance of a classification model.",
    difficulty: "easy",
    tags: ["scikit-learn", "metrics"]
  },
  {
    id: "python-018",
    question: "In PyTorch, what is the base class for all neural network modules?",
    options: [
      "torch.nn.Network",
      "torch.nn.Base",
      "torch.nn.Module",
      "torch.nn.Layer"
    ],
    correctAnswer: 2,
    explanation: "torch.nn.Module is the base class for all neural network modules in PyTorch.",
    difficulty: "easy",
    tags: ["pytorch", "basics"]
  },
  {
    id: "python-019",
    question: "Which method configures the model for training in Keras?",
    options: [
      "build()",
      "compile()",
      "configure()",
      "setup()"
    ],
    correctAnswer: 1,
    explanation: "compile() configures the model for training, specifying the optimizer, loss function, and metrics.",
    difficulty: "easy",
    tags: ["tensorflow", "keras"]
  },
  {
    id: "python-020",
    question: "What is a Python decorator?",
    options: [
      "A comment style",
      "A function that modifies the behavior of another function",
      "A class inheritance method",
      "A variable declaration"
    ],
    correctAnswer: 1,
    explanation: "A decorator is a design pattern in Python that allows a user to add new functionality to an existing object without modifying its structure.",
    difficulty: "medium",
    tags: ["python", "syntax"]
  },
  {
    id: "python-021",
    question: "What happens if the learning rate is too high?",
    options: [
      "Training will be very slow",
      "The model will converge perfectly",
      "The model may overshoot the minimum and diverge",
      "The loss will remain constant"
    ],
    correctAnswer: 2,
    explanation: "A learning rate that is too large can cause the model to converge too quickly to a suboptimal solution, or overshoot the optimal point and diverge.",
    difficulty: "medium",
    tags: ["optimization", "theory"]
  },
  {
    id: "python-022",
    question: "Which NumPy function calculates the dot product of two arrays?",
    options: [
      "np.mult()",
      "np.dot()",
      "np.cross()",
      "np.prod()"
    ],
    correctAnswer: 1,
    explanation: "np.dot() returns the dot product of two arrays.",
    difficulty: "easy",
    tags: ["numpy", "math"]
  },
  {
    id: "python-023",
    question: "Which Pandas function is similar to SQL JOIN?",
    options: [
      "concat()",
      "append()",
      "merge()",
      "combine()"
    ],
    correctAnswer: 2,
    explanation: "merge() allows you to join two DataFrames on columns or indices, similar to SQL joins.",
    difficulty: "medium",
    tags: ["pandas", "manipulation"]
  },
  {
    id: "python-024",
    question: "What is a Scikit-learn Pipeline used for?",
    options: [
      "Visualizing data",
      "Chaining multiple processing steps and an estimator",
      "Downloading datasets",
      "Parallel processing"
    ],
    correctAnswer: 1,
    explanation: "Pipeline sequentially applies a list of transforms and a final estimator. It helps to assemble several steps that can be cross-validated together.",
    difficulty: "medium",
    tags: ["scikit-learn", "pipeline"]
  },
  {
    id: "python-025",
    question: "Which PyTorch class is used to iterate over a dataset in batches?",
    options: [
      "DataBatcher",
      "DataLoader",
      "Dataset",
      "BatchSampler"
    ],
    correctAnswer: 1,
    explanation: "DataLoader combines a dataset and a sampler, and provides an iterable over the given dataset.",
    difficulty: "easy",
    tags: ["pytorch", "data"]
  },
  {
    id: "python-026",
    question: "What are Keras Callbacks used for?",
    options: [
      "Defining the model architecture",
      "Preprocessing data",
      "Performing actions at various stages of training",
      "Compiling the model"
    ],
    correctAnswer: 2,
    explanation: "Callbacks are objects that can perform actions at various stages of training (e.g. at the start or end of an epoch, before or after a single batch, etc.).",
    difficulty: "medium",
    tags: ["tensorflow", "keras"]
  },
  {
    id: "python-027",
    question: "How do you define an anonymous function in Python?",
    options: [
      "def func():",
      "lambda arguments: expression",
      "func = new Function()",
      "anonymous()"
    ],
    correctAnswer: 1,
    explanation: "The 'lambda' keyword is used to create small anonymous functions.",
    difficulty: "easy",
    tags: ["python", "syntax"]
  },
  {
    id: "python-028",
    question: "What is the main difference between L1 and L2 regularization?",
    options: [
      "L1 adds squared magnitude, L2 adds absolute magnitude",
      "L1 adds absolute magnitude, L2 adds squared magnitude",
      "L1 is for regression, L2 is for classification",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "L1 regularization (Lasso) adds the absolute value of magnitude of coefficient as penalty term. L2 regularization (Ridge) adds squared magnitude of coefficient as penalty term.",
    difficulty: "hard",
    tags: ["theory", "optimization"]
  },
  {
    id: "python-029",
    question: "What does arr[::-1] do in NumPy?",
    options: [
      "Returns the last element",
      "Reverses the array",
      "Returns the first element",
      "Sorts the array"
    ],
    correctAnswer: 1,
    explanation: "Slicing with a step of -1 reverses the array.",
    difficulty: "easy",
    tags: ["numpy", "indexing"]
  },
  {
    id: "python-030",
    question: "Which Pandas method applies a function along an axis of the DataFrame?",
    options: [
      "map()",
      "apply()",
      "transform()",
      "run()"
    ],
    correctAnswer: 1,
    explanation: "apply() applies a function along an axis of the DataFrame.",
    difficulty: "medium",
    tags: ["pandas", "manipulation"]
  },
  {
    id: "python-031",
    question: "What is K-Fold Cross-Validation?",
    options: [
      "Splitting data into K random parts",
      "Training K different models",
      "Partitioning data into K subsets, training on K-1 and validating on 1, repeated K times",
      "Validating on K random samples"
    ],
    correctAnswer: 2,
    explanation: "K-Fold Cross-Validation splits the data into K folds. The model is trained on K-1 folds and tested on the remaining fold. This is repeated K times.",
    difficulty: "medium",
    tags: ["scikit-learn", "validation"]
  },
  {
    id: "python-032",
    question: "Which module contains optimization algorithms in PyTorch?",
    options: [
      "torch.opt",
      "torch.optim",
      "torch.learn",
      "torch.train"
    ],
    correctAnswer: 1,
    explanation: "torch.optim is a package implementing various optimization algorithms.",
    difficulty: "easy",
    tags: ["pytorch", "optimization"]
  },
  {
    id: "python-033",
    question: "Which method trains the model for a fixed number of epochs in Keras?",
    options: [
      "train()",
      "run()",
      "fit()",
      "execute()"
    ],
    correctAnswer: 2,
    explanation: "fit() trains the model for a fixed number of epochs (iterations on a dataset).",
    difficulty: "easy",
    tags: ["tensorflow", "keras"]
  },
  {
    id: "python-034",
    question: "What is the purpose of the 'with' statement in Python?",
    options: [
      "To define a function",
      "To import modules",
      "To simplify exception handling and resource management",
      "To create a loop"
    ],
    correctAnswer: 2,
    explanation: "The 'with' statement simplifies exception handling by encapsulating common preparation and cleanup tasks (like closing a file).",
    difficulty: "medium",
    tags: ["python", "syntax"]
  },
  {
    id: "python-035",
    question: "What is 'batch size' in training neural networks?",
    options: [
      "The total number of training examples",
      "The number of training examples used in one iteration",
      "The number of layers in the network",
      "The size of the input image"
    ],
    correctAnswer: 1,
    explanation: "Batch size is the number of training examples utilized in one iteration.",
    difficulty: "easy",
    tags: ["optimization", "theory"]
  },
  {
    id: "python-036",
    question: "Which NumPy function generates random numbers from a standard normal distribution?",
    options: [
      "np.random.rand()",
      "np.random.randn()",
      "np.random.randint()",
      "np.random.normal()"
    ],
    correctAnswer: 1,
    explanation: "np.random.randn() returns a sample (or samples) from the 'standard normal' distribution.",
    difficulty: "medium",
    tags: ["numpy", "random"]
  },
  {
    id: "python-037",
    question: "Which function reads a CSV file into a Pandas DataFrame?",
    options: [
      "pd.read_file()",
      "pd.import_csv()",
      "pd.read_csv()",
      "pd.load_csv()"
    ],
    correctAnswer: 2,
    explanation: "read_csv() is the primary function for reading CSV files into a DataFrame.",
    difficulty: "easy",
    tags: ["pandas", "io"]
  },
  {
    id: "python-038",
    question: "What does GridSearchCV do?",
    options: [
      "Plots a grid of data",
      "Searches for the best hyperparameters by trying all combinations",
      "Searches for data on the web",
      "Visualizes the grid layout"
    ],
    correctAnswer: 1,
    explanation: "GridSearchCV exhaustively considers all parameter combinations to find the best parameters for a model.",
    difficulty: "medium",
    tags: ["scikit-learn", "tuning"]
  },
  {
    id: "python-039",
    question: "Which loss function is commonly used for regression problems in PyTorch?",
    options: [
      "nn.CrossEntropyLoss",
      "nn.BCELoss",
      "nn.MSELoss",
      "nn.NLLLoss"
    ],
    correctAnswer: 2,
    explanation: "MSELoss (Mean Squared Error) is the standard loss function for regression problems.",
    difficulty: "medium",
    tags: ["pytorch", "loss"]
  },
  {
    id: "python-040",
    question: "Which method returns the loss value & metrics values for the model in test mode in Keras?",
    options: [
      "predict()",
      "evaluate()",
      "test()",
      "score()"
    ],
    correctAnswer: 1,
    explanation: "evaluate() returns the loss value & metrics values for the model in test mode.",
    difficulty: "easy",
    tags: ["tensorflow", "keras"]
  },
  {
    id: "python-041",
    question: "How do you format a string with variables in Python 3.6+?",
    options: [
      "\"Value: \" + val",
      "\"Value: %s\" % val",
      "f\"Value: {val}\"",
      "\"Value: {}\".format(val)"
    ],
    correctAnswer: 2,
    explanation: "f-strings (formatted string literals) provide a concise and convenient way to embed expressions inside string literals.",
    difficulty: "easy",
    tags: ["python", "syntax"]
  },
  {
    id: "python-042",
    question: "What is an 'epoch'?",
    options: [
      "One forward pass and one backward pass of all the training examples",
      "One iteration over a batch",
      "The time it takes to train",
      "A specific layer type"
    ],
    correctAnswer: 0,
    explanation: "An epoch is one complete presentation of the data set to be learned to a learning machine.",
    difficulty: "easy",
    tags: ["theory", "optimization"]
  },
  {
    id: "python-043",
    question: "Which NumPy function computes the mean of array elements?",
    options: [
      "np.average()",
      "np.mean()",
      "np.median()",
      "np.mode()"
    ],
    correctAnswer: 1,
    explanation: "np.mean() computes the arithmetic mean along the specified axis.",
    difficulty: "easy",
    tags: ["numpy", "stats"]
  },
  {
    id: "python-044",
    question: "Which Pandas function creates a spreadsheet-style pivot table?",
    options: [
      "crosstab()",
      "pivot_table()",
      "stack()",
      "melt()"
    ],
    correctAnswer: 1,
    explanation: "pivot_table() creates a spreadsheet-style pivot table as a DataFrame.",
    difficulty: "medium",
    tags: ["pandas", "analysis"]
  },
  {
    id: "python-045",
    question: "Which algorithm is a popular unsupervised learning method for clustering?",
    options: [
      "Linear Regression",
      "K-Means",
      "Logistic Regression",
      "Decision Tree"
    ],
    correctAnswer: 1,
    explanation: "K-Means is a popular unsupervised learning algorithm used for clustering data.",
    difficulty: "easy",
    tags: ["scikit-learn", "clustering"]
  },
  {
    id: "python-046",
    question: "How do you save a PyTorch model's state dictionary?",
    options: [
      "torch.save(model, 'path')",
      "torch.save(model.state_dict(), 'path')",
      "model.save('path')",
      "torch.dump(model, 'path')"
    ],
    correctAnswer: 1,
    explanation: "Saving the state_dict() is the recommended way to save a model for inference, as it saves only the parameters.",
    difficulty: "medium",
    tags: ["pytorch", "io"]
  },
  {
    id: "python-047",
    question: "Which format is commonly used to save Keras models?",
    options: [
      ".txt",
      ".h5",
      ".csv",
      ".xml"
    ],
    correctAnswer: 1,
    explanation: "Keras models are typically saved in the HDF5 format (.h5) or the SavedModel format.",
    difficulty: "easy",
    tags: ["tensorflow", "io"]
  },
  {
    id: "python-048",
    question: "Which block is used to catch exceptions in Python?",
    options: [
      "try...catch",
      "try...except",
      "do...catch",
      "begin...rescue"
    ],
    correctAnswer: 1,
    explanation: "Python uses try...except blocks to handle exceptions.",
    difficulty: "easy",
    tags: ["python", "syntax"]
  },
  {
    id: "python-049",
    question: "What is the Bias-Variance Tradeoff?",
    options: [
      "Balancing training time and accuracy",
      "Balancing model complexity to minimize total error",
      "Balancing CPU and GPU usage",
      "Balancing data size and model size"
    ],
    correctAnswer: 1,
    explanation: "The bias-variance tradeoff is the property of a model that the variance of the parameter estimated across samples can be reduced by increasing the bias in the estimated parameters.",
    difficulty: "hard",
    tags: ["theory", "optimization"]
  },
  {
    id: "python-050",
    question: "How do you check the data type of a NumPy array?",
    options: [
      "arr.type",
      "arr.dtype",
      "arr.datatype",
      "type(arr)"
    ],
    correctAnswer: 1,
    explanation: "The .dtype attribute returns the data type of the array's elements.",
    difficulty: "easy",
    tags: ["numpy", "basics"]
  }
];
