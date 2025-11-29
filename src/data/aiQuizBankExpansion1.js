export const aiExpansion1 = [
  {
    id: "ml-exp-001",
    question: "What is the primary goal of Supervised Learning?",
    options: [
      "To cluster data into groups",
      "To learn a mapping from inputs to outputs based on labeled data",
      "To reduce the dimensionality of data",
      "To maximize a reward signal"
    ],
    correctAnswer: 1,
    explanation: "Supervised learning uses labeled training data to learn a function that maps input variables to output variables.",
    difficulty: "easy",
    tags: [
      "supervised-learning",
      "basics"
    ]
  },
  {
    id: "ml-exp-002",
    question: "Which algorithm is NOT a supervised learning algorithm?",
    options: [
      "Linear Regression",
      "Decision Trees",
      "K-Means Clustering",
      "Support Vector Machines"
    ],
    correctAnswer: 2,
    explanation: "K-Means is an unsupervised clustering algorithm, whereas the others are supervised.",
    difficulty: "easy",
    tags: [
      "supervised-learning",
      "algorithms"
    ]
  },
  {
    id: "ml-exp-003",
    question: "In a Decision Tree, what does a leaf node represent?",
    options: [
      "A decision rule",
      "A feature to split on",
      "The final class label or value",
      "The root of the tree"
    ],
    correctAnswer: 2,
    explanation: "Leaf nodes in a decision tree represent the final output (class label for classification or value for regression).",
    difficulty: "medium",
    tags: [
      "decision-trees"
    ]
  },
  {
    id: "ml-exp-004",
    question: "What is the 'Kernel Trick' in SVM?",
    options: [
      "A method to speed up training",
      "Mapping data to a higher-dimensional space to make it linearly separable",
      "A way to reduce overfitting",
      "A technique for feature selection"
    ],
    correctAnswer: 1,
    explanation: "The Kernel Trick allows SVMs to solve non-linear problems by implicitly mapping input data into high-dimensional feature spaces.",
    difficulty: "hard",
    tags: [
      "svm",
      "kernel-methods"
    ]
  },
  {
    id: "ml-exp-005",
    question: "What is the main advantage of Random Forests over a single Decision Tree?",
    options: [
      "Faster training time",
      "Reduced variance and less overfitting",
      "Better interpretability",
      "Requires less memory"
    ],
    correctAnswer: 1,
    explanation: "Random Forests average multiple decision trees, which reduces variance and the risk of overfitting compared to a single tree.",
    difficulty: "medium",
    tags: [
      "random-forest",
      "ensemble"
    ]
  },
  {
    id: "ml-exp-006",
    question: "Which metric is most appropriate for evaluating a classification model with imbalanced classes?",
    options: [
      "Accuracy",
      "Mean Squared Error",
      "F1 Score",
      "R-squared"
    ],
    correctAnswer: 2,
    explanation: "Accuracy can be misleading for imbalanced datasets. F1 Score (harmonic mean of precision and recall) provides a better balance.",
    difficulty: "medium",
    tags: [
      "metrics",
      "imbalanced-data"
    ]
  },
  {
    id: "ml-exp-007",
    question: "What is the purpose of the 'k' in k-Nearest Neighbors (k-NN)?",
    options: [
      "It represents the number of classes",
      "It represents the number of neighbors to consider for voting",
      "It represents the number of features",
      "It represents the learning rate"
    ],
    correctAnswer: 1,
    explanation: "k is the hyperparameter specifying the number of closest training examples to consider when predicting a new data point.",
    difficulty: "easy",
    tags: [
      "knn"
    ]
  },
  {
    id: "ml-exp-008",
    question: "Naive Bayes classifiers assume that features are:",
    options: [
      "Highly correlated",
      "Linearly dependent",
      "Mutually independent conditional on the class",
      "Normally distributed"
    ],
    correctAnswer: 2,
    explanation: "The 'Naive' assumption is that all features are independent of each other given the class label.",
    difficulty: "medium",
    tags: [
      "naive-bayes"
    ]
  },
  {
    id: "ml-exp-009",
    question: "In Linear Regression, what does the 'bias' term represent?",
    options: [
      "The slope of the line",
      "The value of the output when all inputs are zero",
      "The error rate",
      "The learning rate"
    ],
    correctAnswer: 1,
    explanation: "The bias (intercept) is the expected value of the target variable when all predictor variables are 0.",
    difficulty: "easy",
    tags: [
      "linear-regression"
    ]
  },
  {
    id: "ml-exp-010",
    question: "What is the difference between L1 and L2 regularization?",
    options: [
      "L1 shrinks coefficients to zero (sparsity), L2 shrinks them towards zero",
      "L1 is for regression, L2 is for classification",
      "L1 prevents underfitting, L2 prevents overfitting",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "L1 (Lasso) can reduce coefficients to exactly zero, performing feature selection. L2 (Ridge) shrinks them but rarely to zero.",
    difficulty: "hard",
    tags: [
      "regularization"
    ]
  },
  {
    id: "ml-exp-011",
    question: "What is the objective of K-Means clustering?",
    options: [
      "To maximize the distance between clusters",
      "To minimize the within-cluster sum of squares (variance)",
      "To find the optimal number of clusters automatically",
      "To classify new data points"
    ],
    correctAnswer: 1,
    explanation: "K-Means aims to partition observations into k clusters such that the within-cluster sum of squares is minimized.",
    difficulty: "medium",
    tags: [
      "k-means",
      "clustering"
    ]
  },
  {
    id: "ml-exp-012",
    question: "Which technique is used for dimensionality reduction?",
    options: [
      "Random Forest",
      "Principal Component Analysis (PCA)",
      "Gradient Boosting",
      "Logistic Regression"
    ],
    correctAnswer: 1,
    explanation: "PCA is a classic unsupervised technique for reducing the dimensionality of data while preserving variance.",
    difficulty: "easy",
    tags: [
      "pca",
      "dimensionality-reduction"
    ]
  },
  {
    id: "ml-exp-013",
    question: "What does PCA try to preserve?",
    options: [
      "Class separability",
      "Variance of the data",
      "Distance between data points",
      "Number of features"
    ],
    correctAnswer: 1,
    explanation: "PCA projects data onto orthogonal axes (principal components) that maximize the variance of the data.",
    difficulty: "medium",
    tags: [
      "pca"
    ]
  },
  {
    id: "ml-exp-014",
    question: "Hierarchical clustering can be visualized using a:",
    options: [
      "Scatter plot",
      "Histogram",
      "Dendrogram",
      "Confusion Matrix"
    ],
    correctAnswer: 2,
    explanation: "A dendrogram is a tree-like diagram that records the sequences of merges or splits in hierarchical clustering.",
    difficulty: "easy",
    tags: [
      "clustering",
      "visualization"
    ]
  },
  {
    id: "ml-exp-015",
    question: "What is a key characteristic of DBSCAN compared to K-Means?",
    options: [
      "It requires specifying the number of clusters",
      "It can find arbitrarily shaped clusters and handle noise",
      "It only works on linear data",
      "It is faster"
    ],
    correctAnswer: 1,
    explanation: "DBSCAN groups points that are closely packed together and can identify outliers as noise, unlike K-Means which forces all points into clusters.",
    difficulty: "medium",
    tags: [
      "dbscan",
      "clustering"
    ]
  },
  {
    id: "ml-exp-016",
    question: "What is a Perceptron?",
    options: [
      "A multi-layer neural network",
      "The simplest type of artificial neural network (single layer)",
      "A type of recurrent neural network",
      "An unsupervised learning algorithm"
    ],
    correctAnswer: 1,
    explanation: "A Perceptron is the fundamental building block of neural networks, essentially a single-layer binary classifier.",
    difficulty: "easy",
    tags: [
      "neural-networks",
      "basics"
    ]
  },
  {
    id: "ml-exp-017",
    question: "What is the role of an activation function?",
    options: [
      "To initialize weights",
      "To introduce non-linearity into the network",
      "To calculate the loss",
      "To update the weights"
    ],
    correctAnswer: 1,
    explanation: "Without activation functions, a neural network would just be a linear regression model. They introduce non-linearity.",
    difficulty: "medium",
    tags: [
      "activation-functions"
    ]
  },
  {
    id: "ml-exp-018",
    question: "Which activation function is commonly used in the output layer for binary classification?",
    options: [
      "ReLU",
      "Softmax",
      "Sigmoid",
      "Tanh"
    ],
    correctAnswer: 2,
    explanation: "Sigmoid squashes the output between 0 and 1, making it ideal for binary classification probabilities.",
    difficulty: "easy",
    tags: [
      "activation-functions"
    ]
  },
  {
    id: "ml-exp-019",
    question: "What is the 'Vanishing Gradient' problem?",
    options: [
      "When gradients become too large and the model explodes",
      "When gradients become too small, preventing weights from updating in deep layers",
      "When the learning rate is too high",
      "When the loss function is incorrect"
    ],
    correctAnswer: 1,
    explanation: "In deep networks, gradients can become extremely small during backpropagation, causing early layers to stop learning.",
    difficulty: "hard",
    tags: [
      "deep-learning",
      "optimization"
    ]
  },
  {
    id: "ml-exp-020",
    question: "Which architecture is best suited for image recognition tasks?",
    options: [
      "RNN",
      "CNN (Convolutional Neural Network)",
      "Transformer",
      "Autoencoder"
    ],
    correctAnswer: 1,
    explanation: "CNNs are designed to process grid-like data such as images using convolutional layers to detect features.",
    difficulty: "easy",
    tags: [
      "cnn",
      "computer-vision"
    ]
  },
  {
    id: "ml-exp-021",
    question: "What is the purpose of the 'Pooling' layer in a CNN?",
    options: [
      "To increase the depth of the network",
      "To reduce the spatial dimensions (downsampling) and computation",
      "To add non-linearity",
      "To prevent overfitting"
    ],
    correctAnswer: 1,
    explanation: "Pooling (like Max Pooling) reduces the spatial size of the representation, reducing parameters and computation.",
    difficulty: "medium",
    tags: [
      "cnn"
    ]
  },
  {
    id: "ml-exp-022",
    question: "What does an RNN (Recurrent Neural Network) use to handle sequential data?",
    options: [
      "Convolutional filters",
      "Self-attention",
      "Hidden state / Memory",
      "Pooling layers"
    ],
    correctAnswer: 2,
    explanation: "RNNs maintain a hidden state that captures information about previous time steps in the sequence.",
    difficulty: "medium",
    tags: [
      "rnn",
      "nlp"
    ]
  },
  {
    id: "ml-exp-023",
    question: "What is the main advantage of LSTM over standard RNNs?",
    options: [
      "Simpler architecture",
      "Faster training",
      "Ability to capture long-term dependencies",
      "Uses fewer parameters"
    ],
    correctAnswer: 2,
    explanation: "LSTMs (Long Short-Term Memory) are designed to solve the vanishing gradient problem and learn long-term dependencies.",
    difficulty: "medium",
    tags: [
      "lstm",
      "rnn"
    ]
  },
  {
    id: "ml-exp-024",
    question: "What mechanism allows Transformers to process sequences in parallel?",
    options: [
      "Recurrence",
      "Convolution",
      "Self-Attention",
      "Pooling"
    ],
    correctAnswer: 2,
    explanation: "Self-Attention allows the model to weigh the importance of different words in a sentence simultaneously, enabling parallelization.",
    difficulty: "hard",
    tags: [
      "transformers",
      "nlp"
    ]
  },
  {
    id: "ml-exp-025",
    question: "What is 'Dropout' in Deep Learning?",
    options: [
      "Removing data points",
      "A regularization technique where neurons are randomly ignored during training",
      "Stopping training early",
      "Reducing the learning rate"
    ],
    correctAnswer: 1,
    explanation: "Dropout randomly sets a fraction of input units to 0 at each update during training to prevent overfitting.",
    difficulty: "medium",
    tags: [
      "regularization"
    ]
  },
  {
    id: "ml-exp-026",
    question: "What is the function of an Optimizer (e.g., Adam, SGD)?",
    options: [
      "To calculate the error",
      "To update the weights to minimize the loss function",
      "To initialize the network",
      "To normalize the data"
    ],
    correctAnswer: 1,
    explanation: "Optimizers define how the weights of the neural network are updated based on the gradients to minimize the loss.",
    difficulty: "easy",
    tags: [
      "optimization"
    ]
  },
  {
    id: "ml-exp-027",
    question: "Which loss function is typically used for multi-class classification?",
    options: [
      "Mean Squared Error",
      "Binary Cross-Entropy",
      "Categorical Cross-Entropy",
      "Hinge Loss"
    ],
    correctAnswer: 2,
    explanation: "Categorical Cross-Entropy is the standard loss function for multi-class classification problems.",
    difficulty: "medium",
    tags: [
      "loss-functions"
    ]
  },
  {
    id: "ml-exp-028",
    question: "What is 'Batch Normalization'?",
    options: [
      "Normalizing the input data only",
      "Normalizing layer inputs to stabilize and accelerate training",
      "Normalizing the output predictions",
      "Removing outliers from batches"
    ],
    correctAnswer: 1,
    explanation: "Batch Normalization normalizes the inputs of each layer (activations) to have a mean of 0 and variance of 1, speeding up training.",
    difficulty: "hard",
    tags: [
      "optimization",
      "regularization"
    ]
  },
  {
    id: "ml-exp-029",
    question: "What is Transfer Learning?",
    options: [
      "Training a model from scratch",
      "Using a pre-trained model on a new, similar task",
      "Transferring data between servers",
      "Converting a regression model to classification"
    ],
    correctAnswer: 1,
    explanation: "Transfer learning involves taking a model trained on a large dataset and fine-tuning it for a different but related task.",
    difficulty: "medium",
    tags: [
      "transfer-learning"
    ]
  },
  {
    id: "ml-exp-030",
    question: "What is Data Augmentation?",
    options: [
      "Collecting more real data",
      "Synthetically increasing the dataset by applying transformations",
      "Cleaning the data",
      "Reducing the dataset size"
    ],
    correctAnswer: 1,
    explanation: "Data augmentation creates modified versions of images (rotations, flips) or text to increase dataset size and diversity.",
    difficulty: "easy",
    tags: [
      "data-preprocessing"
    ]
  },
  {
    id: "ml-exp-031",
    question: "What is the difference between Epoch and Batch?",
    options: [
      "Epoch is one pass through the full dataset, Batch is a subset",
      "Batch is one pass through the full dataset, Epoch is a subset",
      "They are the same",
      "Epoch is for testing, Batch is for training"
    ],
    correctAnswer: 0,
    explanation: "An epoch is one complete pass through the entire training dataset. A batch is a subset of the dataset used for one gradient update.",
    difficulty: "easy",
    tags: [
      "terminology"
    ]
  },
  {
    id: "ml-exp-032",
    question: "What is Overfitting?",
    options: [
      "The model performs well on training data but poor on new data",
      "The model performs poorly on both training and new data",
      "The model is too simple",
      "The model takes too long to train"
    ],
    correctAnswer: 0,
    explanation: "Overfitting occurs when a model learns the noise in the training data rather than the underlying pattern, failing to generalize.",
    difficulty: "easy",
    tags: [
      "model-evaluation"
    ]
  },
  {
    id: "ml-exp-033",
    question: "Which technique helps prevent Overfitting?",
    options: [
      "Increasing model complexity",
      "Regularization",
      "Reducing training data",
      "Removing activation functions"
    ],
    correctAnswer: 1,
    explanation: "Regularization techniques like L1/L2, Dropout, and Early Stopping are specifically designed to prevent overfitting.",
    difficulty: "easy",
    tags: [
      "regularization"
    ]
  },
  {
    id: "ml-exp-034",
    question: "What is the 'Bias-Variance Tradeoff'?",
    options: [
      "Balancing training time and accuracy",
      "Balancing underfitting (high bias) and overfitting (high variance)",
      "Balancing precision and recall",
      "Balancing model size and speed"
    ],
    correctAnswer: 1,
    explanation: "It refers to the problem of minimizing two sources of error that prevent supervised learning algorithms from generalizing.",
    difficulty: "hard",
    tags: [
      "theory"
    ]
  },
  {
    id: "ml-exp-035",
    question: "What is a Confusion Matrix?",
    options: [
      "A matrix of random numbers",
      "A table used to evaluate the performance of a classification model",
      "A layer in a neural network",
      "A method for data cleaning"
    ],
    correctAnswer: 1,
    explanation: "A confusion matrix shows the counts of True Positives, True Negatives, False Positives, and False Negatives.",
    difficulty: "easy",
    tags: [
      "metrics"
    ]
  },
  {
    id: "ml-exp-036",
    question: "What does AUC-ROC measure?",
    options: [
      "The error rate",
      "The ability of a classifier to distinguish between classes",
      "The training speed",
      "The accuracy at a specific threshold"
    ],
    correctAnswer: 1,
    explanation: "The Area Under the ROC Curve measures the overall performance of a binary classifier across all classification thresholds.",
    difficulty: "medium",
    tags: [
      "metrics"
    ]
  },
  {
    id: "ml-exp-037",
    question: "What is 'One-Hot Encoding'?",
    options: [
      "Converting categorical variables into binary vectors",
      "Normalizing numerical data",
      "Encrypting data",
      "Compressing data"
    ],
    correctAnswer: 0,
    explanation: "One-hot encoding converts categorical data into a format that can be provided to ML algorithms (binary columns).",
    difficulty: "easy",
    tags: [
      "feature-engineering"
    ]
  },
  {
    id: "ml-exp-038",
    question: "What is the purpose of a Validation Set?",
    options: [
      "To train the model",
      "To tune hyperparameters and evaluate during training",
      "To test the final model performance",
      "To initialize weights"
    ],
    correctAnswer: 1,
    explanation: "The validation set is used to tune hyperparameters and prevent overfitting during the training phase.",
    difficulty: "medium",
    tags: [
      "methodology"
    ]
  },
  {
    id: "ml-exp-039",
    question: "What is 'Gradient Descent'?",
    options: [
      "A method to find the maximum of a function",
      "An optimization algorithm to minimize the loss function",
      "A type of neural network",
      "A data visualization technique"
    ],
    correctAnswer: 1,
    explanation: "Gradient Descent is an iterative optimization algorithm used to minimize a cost function by moving in the direction of steepest descent.",
    difficulty: "easy",
    tags: [
      "optimization"
    ]
  },
  {
    id: "ml-exp-040",
    question: "What is the 'Learning Rate'?",
    options: [
      "The speed at which the model predicts",
      "The step size at each iteration while moving toward a minimum of a loss function",
      "The accuracy of the model",
      "The number of epochs"
    ],
    correctAnswer: 1,
    explanation: "The learning rate determines how big of a step the optimizer takes during gradient descent.",
    difficulty: "easy",
    tags: [
      "hyperparameters"
    ]
  },
  {
    id: "ml-exp-041",
    question: "What is 'Early Stopping'?",
    options: [
      "Stopping the project before it starts",
      "Stopping training when validation performance degrades",
      "Stopping data collection",
      "Stopping the server"
    ],
    correctAnswer: 1,
    explanation: "Early stopping is a form of regularization used to avoid overfitting when training a learner with an iterative method.",
    difficulty: "medium",
    tags: [
      "regularization"
    ]
  },
  {
    id: "ml-exp-042",
    question: "What is a 'Tensor' in frameworks like TensorFlow/PyTorch?",
    options: [
      "A type of neuron",
      "A multi-dimensional array",
      "A loss function",
      "A hardware unit"
    ],
    correctAnswer: 1,
    explanation: "A tensor is a generalization of vectors and matrices to potentially higher dimensions.",
    difficulty: "easy",
    tags: [
      "frameworks"
    ]
  },
  {
    id: "ml-exp-043",
    question: "What is 'Word2Vec'?",
    options: [
      "A text classification algorithm",
      "A technique to convert words to vector representations",
      "A spell checker",
      "A translation tool"
    ],
    correctAnswer: 1,
    explanation: "Word2Vec is a technique for natural language processing to produce word embeddings.",
    difficulty: "medium",
    tags: [
      "nlp"
    ]
  },
  {
    id: "ml-exp-044",
    question: "What is 'Semantic Segmentation'?",
    options: [
      "Classifying an entire image",
      "Classifying each pixel in an image into a class",
      "Detecting objects with bounding boxes",
      "Cropping images"
    ],
    correctAnswer: 1,
    explanation: "Semantic segmentation involves labeling every pixel in an image with a class label.",
    difficulty: "hard",
    tags: [
      "computer-vision"
    ]
  },
  {
    id: "ml-exp-045",
    question: "What is 'Reinforcement Learning'?",
    options: [
      "Learning from labeled data",
      "Learning by interacting with an environment and receiving rewards",
      "Learning from unlabeled data",
      "Learning from books"
    ],
    correctAnswer: 1,
    explanation: "RL is an area of ML concerned with how intelligent agents ought to take actions in an environment to maximize cumulative reward.",
    difficulty: "medium",
    tags: [
      "reinforcement-learning"
    ]
  },
  {
    id: "ml-exp-046",
    question: "What is the 'Exploration vs Exploitation' dilemma?",
    options: [
      "Choosing between two algorithms",
      "Choosing between gathering new information or using known information",
      "Choosing between CPU and GPU",
      "Choosing between Python and R"
    ],
    correctAnswer: 1,
    explanation: "It's the trade-off between exploring new possibilities to find better payoffs and exploiting known good payoffs.",
    difficulty: "medium",
    tags: [
      "reinforcement-learning"
    ]
  },
  {
    id: "ml-exp-047",
    question: "What is 'Grid Search'?",
    options: [
      "Searching for data on a grid",
      "Exhaustively searching through a manually specified subset of hyperparameters",
      "Randomly searching hyperparameters",
      "Searching for features"
    ],
    correctAnswer: 1,
    explanation: "Grid search is a method for hyperparameter tuning that tries every combination of a provided list of values.",
    difficulty: "easy",
    tags: [
      "hyperparameter-tuning"
    ]
  },
  {
    id: "ml-exp-048",
    question: "What is 'Cross-Validation'?",
    options: [
      "Validating data across different servers",
      "Partitioning data into subsets to train and test the model multiple times",
      "Checking code with a colleague",
      "Using multiple models"
    ],
    correctAnswer: 1,
    explanation: "Cross-validation is a resampling procedure used to evaluate machine learning models on a limited data sample.",
    difficulty: "medium",
    tags: [
      "methodology"
    ]
  },
  {
    id: "ml-exp-049",
    question: "What is 'Feature Scaling'?",
    options: [
      "Selecting the best features",
      "Normalizing the range of independent variables",
      "Creating new features",
      "Deleting features"
    ],
    correctAnswer: 1,
    explanation: "Feature scaling (normalization/standardization) ensures that features contribute equally to the result.",
    difficulty: "easy",
    tags: [
      "preprocessing"
    ]
  },
  {
    id: "ml-exp-050",
    question: "What is 'Imputation' in data preprocessing?",
    options: [
      "Removing missing data",
      "Filling in missing data with estimated values",
      "Encrypting data",
      "Sorting data"
    ],
    correctAnswer: 1,
    explanation: "Imputation is the process of replacing missing data with substituted values (e.g., mean, median).",
    difficulty: "easy",
    tags: [
      "preprocessing"
    ]
  },
  {
    id: "ml-exp-051",
    question: "What is 'Ensemble Learning'?",
    options: [
      "Learning with a single model",
      "Combining multiple models to improve performance",
      "Learning from music",
      "Learning online"
    ],
    correctAnswer: 1,
    explanation: "Ensemble methods use multiple learning algorithms to obtain better predictive performance than could be obtained from any of the constituent learning algorithms alone.",
    difficulty: "medium",
    tags: [
      "ensemble"
    ]
  },
  {
    id: "ml-exp-052",
    question: "What is 'Bagging' (Bootstrap Aggregating)?",
    options: [
      "Training models on the same data sequentially",
      "Training models on random subsets of data in parallel",
      "Training models on different features",
      "Training models with different algorithms"
    ],
    correctAnswer: 1,
    explanation: "Bagging involves training multiple models independently on random subsets of the training data and averaging their predictions.",
    difficulty: "hard",
    tags: [
      "ensemble"
    ]
  },
  {
    id: "ml-exp-053",
    question: "What is 'Boosting'?",
    options: [
      "Training models in parallel",
      "Training models sequentially, where each corrects the errors of the previous one",
      "Increasing the learning rate",
      "Using a larger dataset"
    ],
    correctAnswer: 1,
    explanation: "Boosting trains models sequentially, with each new model focusing on the instances that were misclassified by previous models.",
    difficulty: "hard",
    tags: [
      "ensemble"
    ]
  },
  {
    id: "ml-exp-054",
    question: "What is 'XGBoost'?",
    options: [
      "A type of neural network",
      "An optimized distributed gradient boosting library",
      "A data cleaning tool",
      "A visualization library"
    ],
    correctAnswer: 1,
    explanation: "XGBoost (Extreme Gradient Boosting) is a popular and efficient implementation of gradient boosted decision trees.",
    difficulty: "medium",
    tags: [
      "algorithms"
    ]
  },
  {
    id: "ml-exp-055",
    question: "What is 'Softmax' used for?",
    options: [
      "Binary classification",
      "Multi-class classification probabilities",
      "Regression output",
      "Feature scaling"
    ],
    correctAnswer: 1,
    explanation: "Softmax converts a vector of numbers into a vector of probabilities, where the probabilities of each value are proportional to the relative scale of each value in the vector.",
    difficulty: "medium",
    tags: [
      "activation-functions"
    ]
  },
  {
    id: "ml-exp-056",
    question: "What is 'ReLU' (Rectified Linear Unit)?",
    options: [
      "A linear activation function",
      "An activation function f(x) = max(0, x)",
      "A loss function",
      "An optimizer"
    ],
    correctAnswer: 1,
    explanation: "ReLU is the most common activation function in deep learning, defined as the positive part of its argument.",
    difficulty: "easy",
    tags: [
      "activation-functions"
    ]
  },
  {
    id: "ml-exp-057",
    question: "What is 'Momentum' in optimization?",
    options: [
      "The speed of training",
      "A technique to accelerate SGD in the relevant direction and dampen oscillations",
      "The size of the model",
      "The memory usage"
    ],
    correctAnswer: 1,
    explanation: "Momentum helps accelerate gradients vectors in the right directions, thus leading to faster converging.",
    difficulty: "hard",
    tags: [
      "optimization"
    ]
  },
  {
    id: "ml-exp-058",
    question: "What is 'Fine-tuning' in the context of LLMs?",
    options: [
      "Training a model from scratch",
      "Adjusting the parameters of a pre-trained model on a specific dataset",
      "Cleaning the text data",
      "Increasing the vocabulary size"
    ],
    correctAnswer: 1,
    explanation: "Fine-tuning involves taking a pre-trained language model and training it further on a specific dataset to adapt it to a specific task.",
    difficulty: "medium",
    tags: [
      "llm",
      "nlp"
    ]
  },
  {
    id: "ml-exp-059",
    question: "What is 'Zero-shot Learning'?",
    options: [
      "Learning with zero data",
      "The ability of a model to perform a task without having seen any examples of that specific task during training",
      "Learning with zero errors",
      "Learning in zero time"
    ],
    correctAnswer: 1,
    explanation: "Zero-shot learning allows models to predict classes they have never seen during training.",
    difficulty: "hard",
    tags: [
      "advanced-ml"
    ]
  },
  {
    id: "ml-exp-060",
    question: "What is 'Self-Supervised Learning'?",
    options: [
      "Supervised learning with human labels",
      "Learning where the data provides the supervision (e.g., predicting the next word)",
      "Unsupervised learning",
      "Reinforcement learning"
    ],
    correctAnswer: 1,
    explanation: "Self-supervised learning generates labels from the data itself, allowing training on large unlabeled datasets.",
    difficulty: "hard",
    tags: [
      "advanced-ml"
    ]
  },
  {
    id: "ml-exp-061",
    question: "What is an 'Autoencoder'?",
    options: [
      "A car part",
      "A neural network that learns to copy its input to its output (compression/reconstruction)",
      "A code generator",
      "A translation model"
    ],
    correctAnswer: 1,
    explanation: "Autoencoders are used for learning efficient codings of unlabeled data (dimensionality reduction, denoising).",
    difficulty: "medium",
    tags: [
      "neural-networks"
    ]
  },
  {
    id: "ml-exp-062",
    question: "What is a 'GAN' (Generative Adversarial Network)?",
    options: [
      "A single network that generates images",
      "Two networks (Generator and Discriminator) competing against each other",
      "A genetic algorithm",
      "A graph network"
    ],
    correctAnswer: 1,
    explanation: "GANs consist of two neural networks, a generator and a discriminator, which contest with each other in a game.",
    difficulty: "medium",
    tags: [
      "generative-ai"
    ]
  },
  {
    id: "ml-exp-063",
    question: "What is 'Explainable AI' (XAI)?",
    options: [
      "AI that can speak",
      "Methods and techniques to make AI results understandable by humans",
      "AI that explains the world",
      "Simple AI models"
    ],
    correctAnswer: 1,
    explanation: "XAI focuses on making the output of machine learning models transparent and interpretable.",
    difficulty: "medium",
    tags: [
      "ethics",
      "xai"
    ]
  },
  {
    id: "ml-exp-064",
    question: "What is 'Federated Learning'?",
    options: [
      "Learning on a central server",
      "Training an algorithm across multiple decentralized edge devices without exchanging local data samples",
      "Learning from government data",
      "Learning in a federation"
    ],
    correctAnswer: 1,
    explanation: "Federated learning enables mobile phones to collaboratively learn a shared prediction model while keeping all the training data on the device.",
    difficulty: "hard",
    tags: [
      "advanced-ml"
    ]
  },
  {
    id: "ml-exp-065",
    question: "What is 'Precision'?",
    options: [
      "The ratio of correctly predicted positive observations to the total predicted positives",
      "The ratio of correctly predicted positive observations to the all observations in actual class",
      "The overall accuracy",
      "The error rate"
    ],
    correctAnswer: 1,
    explanation: "Precision = TP / (TP + FP). It answers: Of all the instances predicted as positive, what percent were actually positive?",
    difficulty: "medium",
    tags: [
      "metrics"
    ]
  },
  {
    id: "ml-exp-066",
    question: "What is 'Recall' (Sensitivity)?",
    options: [
      "The ratio of correctly predicted positive observations to the total predicted positives",
      "The ratio of correctly predicted positive observations to the all observations in actual class",
      "The specificity",
      "The F1 score"
    ],
    correctAnswer: 1,
    explanation: "Recall = TP / (TP + FN). It answers: Of all the actual positive instances, what percent were predicted correctly?",
    difficulty: "medium",
    tags: [
      "metrics"
    ]
  },
  {
    id: "ml-exp-067",
    question: "What is 'F1 Score'?",
    options: [
      "The average of precision and recall",
      "The harmonic mean of precision and recall",
      "The difference between precision and recall",
      "The sum of precision and recall"
    ],
    correctAnswer: 1,
    explanation: "F1 Score is the harmonic mean of Precision and Recall, giving a better measure of the incorrectly classified cases than the Accuracy Metric.",
    difficulty: "medium",
    tags: [
      "metrics"
    ]
  },
  {
    id: "ml-exp-068",
    question: "What is 'MSE' (Mean Squared Error)?",
    options: [
      "A classification metric",
      "A regression metric measuring the average squared difference between estimated and actual values",
      "A clustering metric",
      "A probability"
    ],
    correctAnswer: 1,
    explanation: "MSE is a standard loss function for regression problems.",
    difficulty: "easy",
    tags: [
      "metrics"
    ]
  },
  {
    id: "ml-exp-069",
    question: "What is 'Regularization'?",
    options: [
      "Making the data regular",
      "Techniques to prevent overfitting by penalizing complex models",
      "Standardizing the code",
      "Scheduling training"
    ],
    correctAnswer: 1,
    explanation: "Regularization adds a penalty term to the loss function to discourage the model from learning overly complex patterns.",
    difficulty: "easy",
    tags: [
      "regularization"
    ]
  },
  {
    id: "ml-exp-070",
    question: "What is 'Stochastic Gradient Descent' (SGD)?",
    options: [
      "Using the whole dataset for each update",
      "Using a single random sample for each update",
      "Using a batch of samples",
      "Using no data"
    ],
    correctAnswer: 1,
    explanation: "SGD updates the weights using the gradient calculated from a single random training example at each step.",
    difficulty: "medium",
    tags: [
      "optimization"
    ]
  },
  {
    id: "ml-exp-071",
    question: "What is 'Hyperparameter Tuning'?",
    options: [
      "Adjusting the weights of the model",
      "Adjusting the configuration settings used to control the learning process",
      "Adjusting the input data",
      "Adjusting the hardware"
    ],
    correctAnswer: 1,
    explanation: "Hyperparameters (like learning rate, k in k-NN) are set before training and significantly affect performance.",
    difficulty: "easy",
    tags: [
      "methodology"
    ]
  },
  {
    id: "ml-exp-072",
    question: "What is 'Feature Engineering'?",
    options: [
      "Building features for software",
      "Using domain knowledge to extract features from raw data",
      "Selecting features",
      "Deleting features"
    ],
    correctAnswer: 1,
    explanation: "Feature engineering is the process of using domain knowledge to create features that make machine learning algorithms work.",
    difficulty: "medium",
    tags: [
      "feature-engineering"
    ]
  },
  {
    id: "ml-exp-073",
    question: "What is 'Data Leakage'?",
    options: [
      "When data is stolen",
      "When information from outside the training dataset is used to create the model",
      "When data is lost",
      "When the model leaks memory"
    ],
    correctAnswer: 1,
    explanation: "Data leakage occurs when the training data contains information about the target, but similar data will not be available when the model is used for prediction.",
    difficulty: "medium",
    tags: [
      "methodology"
    ]
  },
  {
    id: "ml-exp-074",
    question: "What is 'Concept Drift'?",
    options: [
      "When the concept is hard to understand",
      "When the statistical properties of the target variable change over time",
      "When the model drifts away",
      "When the data is static"
    ],
    correctAnswer: 1,
    explanation: "Concept drift means that the relationship between input data and the target variable changes over time.",
    difficulty: "hard",
    tags: [
      "production-ml"
    ]
  },
  {
    id: "ml-exp-075",
    question: "What is 'A/B Testing' in ML?",
    options: [
      "Testing two models (A and B) to see which performs better in production",
      "Testing the alphabet",
      "Testing training vs testing data",
      "Testing hardware"
    ],
    correctAnswer: 1,
    explanation: "A/B testing compares two versions of a model in a live environment to determine which one performs better.",
    difficulty: "medium",
    tags: [
      "production-ml"
    ]
  },
  {
    id: "ml-exp-076",
    question: "What is 'Tokenization'?",
    options: [
      "Turning data into tokens",
      "Breaking text into smaller units like words or subwords",
      "Authentication",
      "Encryption"
    ],
    correctAnswer: 1,
    explanation: "Tokenization is the process of segmenting text into smaller units called tokens.",
    difficulty: "easy",
    tags: [
      "nlp"
    ]
  },
  {
    id: "ml-exp-077",
    question: "What is 'Stemming'?",
    options: [
      "Growing a tree",
      "Reducing words to their root form",
      "Removing stop words",
      "Tokenization"
    ],
    correctAnswer: 1,
    explanation: "Stemming is a text normalization technique that cuts off the ends of words to reduce them to a common base form.",
    difficulty: "easy",
    tags: [
      "nlp"
    ]
  },
  {
    id: "ml-exp-078",
    question: "What is 'Lemmatization'?",
    options: [
      "Similar to stemming but considers the context and converts the word to its meaningful base form",
      "Removing letters",
      "Capitalizing words",
      "Translating words"
    ],
    correctAnswer: 0,
    explanation: "Lemmatization reduces words to their lemma (dictionary form) considering the context, unlike stemming which just chops off endings.",
    difficulty: "medium",
    tags: [
      "nlp"
    ]
  },
  {
    id: "ml-exp-079",
    question: "What are 'Stop Words'?",
    options: [
      "Words that stop the sentence",
      "Common words (like 'the', 'is') that are often removed during preprocessing",
      "Words that are important",
      "Keywords"
    ],
    correctAnswer: 1,
    explanation: "Stop words are high-frequency words that often carry little meaning and are filtered out.",
    difficulty: "easy",
    tags: [
      "nlp"
    ]
  },
  {
    id: "ml-exp-080",
    question: "What is 'TF-IDF'?",
    options: [
      "A deep learning model",
      "Term Frequency-Inverse Document Frequency",
      "A database",
      "A file format"
    ],
    correctAnswer: 1,
    explanation: "TF-IDF is a numerical statistic that is intended to reflect how important a word is to a document in a collection or corpus.",
    difficulty: "medium",
    tags: [
      "nlp"
    ]
  },
  {
    id: "ml-exp-081",
    question: "What is 'Object Detection'?",
    options: [
      "Classifying an image",
      "Identifying and locating objects in an image with bounding boxes",
      "Segmenting pixels",
      "Filtering images"
    ],
    correctAnswer: 1,
    explanation: "Object detection involves both classification and localization (drawing a bounding box around the object).",
    difficulty: "medium",
    tags: [
      "computer-vision"
    ]
  },
  {
    id: "ml-exp-082",
    question: "What is 'YOLO' (You Only Look Once)?",
    options: [
      "A social media acronym",
      "A real-time object detection system",
      "A reinforcement learning agent",
      "A chatbot"
    ],
    correctAnswer: 1,
    explanation: "YOLO is a popular algorithm for real-time object detection.",
    difficulty: "medium",
    tags: [
      "computer-vision"
    ]
  },
  {
    id: "ml-exp-083",
    question: "What is 'ResNet'?",
    options: [
      "A residual neural network",
      "A resolution network",
      "A recurrent network",
      "A research network"
    ],
    correctAnswer: 1,
    explanation: "ResNet introduced skip connections (residuals) to allow training of very deep networks.",
    difficulty: "medium",
    tags: [
      "architectures"
    ]
  },
  {
    id: "ml-exp-084",
    question: "What is 'BERT'?",
    options: [
      "A sesame street character",
      "Bidirectional Encoder Representations from Transformers",
      "A vision model",
      "A reinforcement learning algorithm"
    ],
    correctAnswer: 1,
    explanation: "BERT is a transformer-based model designed to pre-train deep bidirectional representations from unlabeled text.",
    difficulty: "medium",
    tags: [
      "nlp",
      "transformers"
    ]
  },
  {
    id: "ml-exp-085",
    question: "What is 'GPT'?",
    options: [
      "General Purpose Tool",
      "Generative Pre-trained Transformer",
      "Gradient Processing Tensor",
      "Graph Processing Tool"
    ],
    correctAnswer: 1,
    explanation: "GPT is a type of large language model that uses deep learning to produce human-like text.",
    difficulty: "medium",
    tags: [
      "nlp",
      "transformers"
    ]
  },
  {
    id: "ml-exp-086",
    question: "What is 'Attention Mechanism'?",
    options: [
      "Paying attention to the screen",
      "A technique that allows the model to focus on specific parts of the input sequence",
      "A loss function",
      "A regularization method"
    ],
    correctAnswer: 1,
    explanation: "Attention allows the model to weigh the importance of different input elements when generating an output.",
    difficulty: "medium",
    tags: [
      "deep-learning"
    ]
  },
  {
    id: "ml-exp-087",
    question: "What is 'Positional Encoding' in Transformers?",
    options: [
      "Encoding the GPS position",
      "Injecting information about the relative or absolute position of tokens in the sequence",
      "Encoding the class label",
      "Encoding the file path"
    ],
    correctAnswer: 1,
    explanation: "Since Transformers process tokens in parallel, positional encoding is needed to give the model information about the order of words.",
    difficulty: "hard",
    tags: [
      "transformers"
    ]
  },
  {
    id: "ml-exp-088",
    question: "What is 'Latent Space'?",
    options: [
      "Empty space",
      "A compressed representation of data in which similar data points are closer together",
      "The space between layers",
      "The cloud"
    ],
    correctAnswer: 1,
    explanation: "Latent space is an abstract multi-dimensional space containing feature values that we cannot interpret directly.",
    difficulty: "hard",
    tags: [
      "theory"
    ]
  },
  {
    id: "ml-exp-089",
    question: "What is 'Dimensionality Reduction'?",
    options: [
      "Reducing the file size",
      "Reducing the number of random variables under consideration",
      "Reducing the image size",
      "Reducing the number of layers"
    ],
    correctAnswer: 1,
    explanation: "It is the process of reducing the number of input variables in a dataset.",
    difficulty: "easy",
    tags: [
      "preprocessing"
    ]
  },
  {
    id: "ml-exp-090",
    question: "What is 't-SNE'?",
    options: [
      "A time series model",
      "t-Distributed Stochastic Neighbor Embedding",
      "A neural network",
      "A clustering algorithm"
    ],
    correctAnswer: 1,
    explanation: "t-SNE is a statistical method for visualizing high-dimensional data by giving each datapoint a location in a two or three-dimensional map.",
    difficulty: "hard",
    tags: [
      "visualization"
    ]
  },
  {
    id: "ml-exp-091",
    question: "What is 'SMOTE'?",
    options: [
      "Synthetic Minority Over-sampling Technique",
      "Small Model Optimization",
      "Smart Modeling",
      "Smooth Text Encoding"
    ],
    correctAnswer: 0,
    explanation: "SMOTE is an oversampling technique where synthetic samples are generated for the minority class.",
    difficulty: "medium",
    tags: [
      "imbalanced-data"
    ]
  },
  {
    id: "ml-exp-092",
    question: "What is 'Stratified K-Fold'?",
    options: [
      "Random splitting",
      "Splitting data such that each fold has the same proportion of observations with a given categorical value",
      "Splitting by time",
      "Splitting by size"
    ],
    correctAnswer: 1,
    explanation: "Stratified K-Fold ensures that each fold of the dataset has the same proportion of observations with a given label.",
    difficulty: "medium",
    tags: [
      "methodology"
    ]
  },
  {
    id: "ml-exp-093",
    question: "What is 'Hinge Loss'?",
    options: [
      "A loss function used for SVMs",
      "A loss function for regression",
      "A loss function for clustering",
      "A hardware failure"
    ],
    correctAnswer: 0,
    explanation: "Hinge loss is primarily used for Support Vector Machines (SVMs) for maximum-margin classification.",
    difficulty: "hard",
    tags: [
      "loss-functions"
    ]
  },
  {
    id: "ml-exp-094",
    question: "What is 'Categorical Encoding'?",
    options: [
      "Converting numbers to categories",
      "Converting categorical data into numerical format",
      "Categorizing images",
      "Encoding video"
    ],
    correctAnswer: 1,
    explanation: "Categorical encoding is the process of converting categorical data into integer format so that the data with converted categorical values can be provided to the models.",
    difficulty: "easy",
    tags: [
      "preprocessing"
    ]
  },
  {
    id: "ml-exp-095",
    question: "What is 'Label Encoding'?",
    options: [
      "Assigning a unique integer to each category",
      "Creating binary columns",
      "Encoding labels with text",
      "Removing labels"
    ],
    correctAnswer: 0,
    explanation: "Label encoding converts each value in a column to a number.",
    difficulty: "easy",
    tags: [
      "preprocessing"
    ]
  },
  {
    id: "ml-exp-096",
    question: "What is 'Outlier Detection'?",
    options: [
      "Finding the best data",
      "Identifying data points that differ significantly from other observations",
      "Detecting lies",
      "Detecting missing values"
    ],
    correctAnswer: 1,
    explanation: "Outlier detection is the identification of rare items, events or observations which raise suspicions by differing significantly from the majority of the data.",
    difficulty: "easy",
    tags: [
      "preprocessing"
    ]
  },
  {
    id: "ml-exp-097",
    question: "What is 'Stationarity' in Time Series?",
    options: [
      "The data does not change",
      "Statistical properties like mean and variance are constant over time",
      "The train is at the station",
      "The series is short"
    ],
    correctAnswer: 1,
    explanation: "A stationary time series is one whose properties do not depend on the time at which the series is observed.",
    difficulty: "hard",
    tags: [
      "time-series"
    ]
  },
  {
    id: "ml-exp-098",
    question: "What is 'Autocorrelation'?",
    options: [
      "Correlation between different variables",
      "Correlation of a signal with a delayed copy of itself",
      "Automatic correlation",
      "Zero correlation"
    ],
    correctAnswer: 1,
    explanation: "Autocorrelation represents the degree of similarity between a given time series and a lagged version of itself.",
    difficulty: "medium",
    tags: [
      "time-series"
    ]
  },
  {
    id: "ml-exp-099",
    question: "What is 'ARIMA'?",
    options: [
      "A vision model",
      "AutoRegressive Integrated Moving Average",
      "A reinforcement learning agent",
      "A clustering method"
    ],
    correctAnswer: 1,
    explanation: "ARIMA is a popular statistical method for time series forecasting.",
    difficulty: "medium",
    tags: [
      "time-series"
    ]
  },
  {
    id: "ml-exp-100",
    question: "What is 'Sequence-to-Sequence' (Seq2Seq)?",
    options: [
      "Mapping fixed input to fixed output",
      "Mapping variable-length sequences to variable-length sequences",
      "Sorting sequences",
      "Deleting sequences"
    ],
    correctAnswer: 1,
    explanation: "Seq2Seq models are used for tasks like translation, summarization, and chatbots.",
    difficulty: "medium",
    tags: [
      "nlp"
    ]
  }
]
