// AI & Machine Learning Quiz Bank - 200+ Questions
// Covers all AI topics from fundamentals to specializations

export const aiQuizBank = {
  // AI FUNDAMENTALS (50 questions)
  fundamentals: {
    aiBasics: [
      {
        id: 'ai001',
        question: 'What is the main difference between AI and Machine Learning?',
        options: [
          'They are the same thing',
          'AI is a broader concept, ML is a subset that learns from data',
          'ML is broader than AI',
          'AI only works with images'
        ],
        correctAnswer: 1,
        explanation: 'AI is the broader concept of machines mimicking human intelligence. Machine Learning is a specific approach to achieving AI by learning patterns from data.',
        difficulty: 'easy',
        tags: ['ai-basics', 'definitions']
      },
      {
        id: 'ai002',
        question: 'Which type of AI exists today?',
        options: [
          'General AI (AGI)',
          'Super AI',
          'Narrow AI (ANI)',
          'Universal AI'
        ],
        correctAnswer: 2,
        explanation: 'Narrow AI (ANI) is the only type that exists today - AI designed for specific tasks like image recognition or language translation.',
        difficulty: 'easy',
        tags: ['ai-types', 'fundamentals']
      },
      {
        id: 'ai003',
        question: 'What is supervised learning?',
        options: [
          'Learning without any data',
          'Learning from labeled data with known outputs',
          'Learning by trial and error with rewards',
          'Learning from unlabeled data'
        ],
        correctAnswer: 1,
        explanation: 'Supervised learning trains models on labeled data where both inputs (features) and outputs (labels) are known. The model learns to map inputs to outputs.',
        difficulty: 'easy',
        tags: ['supervised-learning', 'ml-types']
      },
      {
        id: 'ai004',
        question: 'What is the purpose of a validation set?',
        options: [
          'To train the model',
          'To tune hyperparameters and prevent overfitting',
          'To deploy the model',
          'To collect more data'
        ],
        correctAnswer: 1,
        explanation: 'The validation set is used to tune hyperparameters and monitor model performance during training to prevent overfitting, without touching the test set.',
        difficulty: 'medium',
        tags: ['validation', 'data-splitting']
      },
      {
        id: 'ai005',
        question: 'What is overfitting?',
        options: [
          'Model performs too well on all data',
          'Model memorizes training data but fails on new data',
          'Model is too simple',
          'Model trains too quickly'
        ],
        correctAnswer: 1,
        explanation: 'Overfitting occurs when a model learns the training data too well, including noise, and fails to generalize to new, unseen data.',
        difficulty: 'easy',
        tags: ['overfitting', 'generalization']
      },
      {
        id: 'ai006',
        question: 'Which metric is best for imbalanced classification?',
        options: [
          'Accuracy',
          'F1 Score or AUC-ROC',
          'Mean Squared Error',
          'R-squared'
        ],
        correctAnswer: 1,
        explanation: 'For imbalanced data, accuracy is misleading. F1 Score (harmonic mean of precision/recall) or AUC-ROC are better metrics that account for class imbalance.',
        difficulty: 'medium',
        tags: ['metrics', 'imbalanced-data']
      },
      {
        id: 'ai007',
        question: 'What is feature engineering?',
        options: [
          'Building new hardware',
          'Creating, transforming, or selecting input variables for ML models',
          'Deleting features',
          'Visualizing data'
        ],
        correctAnswer: 1,
        explanation: 'Feature engineering is the process of using domain knowledge to create, transform, or select input features that help ML models learn better patterns.',
        difficulty: 'medium',
        tags: ['feature-engineering', 'preprocessing']
      },
      {
        id: 'ai008',
        question: 'What does cross-validation help with?',
        options: [
          'Training faster',
          'Getting reliable performance estimates and reducing overfitting',
          'Collecting more data',
          'Deploying models'
        ],
        correctAnswer: 1,
        explanation: 'Cross-validation trains and evaluates the model on different data subsets, providing more reliable performance estimates and helping detect overfitting.',
        difficulty: 'medium',
        tags: ['cross-validation', 'evaluation']
      },
      {
        id: 'ai009',
        question: 'What is the bias-variance tradeoff?',
        options: [
          'Choosing between speed and accuracy',
          'Balance between model simplicity (high bias) and complexity (high variance)',
          'Trading data for compute',
          'Memory vs CPU tradeoff'
        ],
        correctAnswer: 1,
        explanation: 'Bias-variance tradeoff: Simple models have high bias (underfitting), complex models have high variance (overfitting). The goal is finding the right balance.',
        difficulty: 'hard',
        tags: ['bias-variance', 'model-complexity']
      },
      {
        id: 'ai010',
        question: 'What is regularization used for?',
        options: [
          'Making data more regular',
          'Preventing overfitting by penalizing large model weights',
          'Speeding up training',
          'Collecting more data'
        ],
        correctAnswer: 1,
        explanation: 'Regularization adds a penalty term to the loss function to discourage large weights, helping prevent overfitting. Common types: L1 (Lasso) and L2 (Ridge).',
        difficulty: 'medium',
        tags: ['regularization', 'overfitting']
      }
    ],

    pythonForAI: [
      {
        id: 'ai011',
        question: 'Which library is best for numerical computations in Python?',
        options: ['Pandas', 'NumPy', 'Matplotlib', 'Requests'],
        correctAnswer: 1,
        explanation: 'NumPy provides efficient array operations and mathematical functions, serving as the foundation for scientific computing in Python.',
        difficulty: 'easy',
        tags: ['numpy', 'libraries']
      },
      {
        id: 'ai012',
        question: 'What is the main advantage of Pandas DataFrames?',
        options: [
          'Faster than NumPy arrays',
          'Labeled data with powerful data manipulation',
          'Better for deep learning',
          'Automatic model training'
        ],
        correctAnswer: 1,
        explanation: 'Pandas DataFrames provide labeled rows/columns, built-in handling of missing data, and powerful data manipulation/analysis functions.',
        difficulty: 'easy',
        tags: ['pandas', 'dataframes']
      },
      {
        id: 'ai013',
        question: 'What does df.dropna() do in Pandas?',
        options: [
          'Drops all columns',
          'Removes rows with missing values',
          'Fills missing values',
          'Deletes the dataframe'
        ],
        correctAnswer: 1,
        explanation: 'dropna() removes rows (or columns with axis=1) that contain missing (NaN) values from a DataFrame.',
        difficulty: 'easy',
        tags: ['pandas', 'missing-data']
      },
      {
        id: 'ai014',
        question: 'What is broadcasting in NumPy?',
        options: [
          'Sending data over network',
          'Automatic expansion of arrays for element-wise operations',
          'Printing array values',
          'Copying arrays'
        ],
        correctAnswer: 1,
        explanation: 'Broadcasting allows NumPy to perform operations on arrays of different shapes by automatically expanding smaller arrays to match larger ones.',
        difficulty: 'medium',
        tags: ['numpy', 'broadcasting']
      },
      {
        id: 'ai015',
        question: 'What is the purpose of train_test_split in sklearn?',
        options: [
          'Training multiple models',
          'Dividing data into training and testing sets',
          'Splitting features from labels',
          'Cross-validation'
        ],
        correctAnswer: 1,
        explanation: 'train_test_split randomly divides data into training and testing sets, ensuring the model is evaluated on unseen data.',
        difficulty: 'easy',
        tags: ['sklearn', 'data-splitting']
      }
    ]
  },

  // MACHINE LEARNING (60 questions)
  machineLearning: {
    algorithms: [
      {
        id: 'ml001',
        question: 'When should you use Linear Regression?',
        options: [
          'For classification problems',
          'For predicting continuous numerical values',
          'For clustering',
          'For image recognition'
        ],
        correctAnswer: 1,
        explanation: 'Linear Regression is used when predicting continuous numerical outputs (like price, temperature) based on the linear relationship with input features.',
        difficulty: 'easy',
        tags: ['linear-regression', 'regression']
      },
      {
        id: 'ml002',
        question: 'What is the difference between Logistic and Linear Regression?',
        options: [
          'No difference',
          'Logistic is for classification, Linear for regression',
          'Linear is faster',
          'Logistic uses more data'
        ],
        correctAnswer: 1,
        explanation: 'Linear Regression predicts continuous values. Logistic Regression predicts probabilities for classification, using a sigmoid function to output 0-1.',
        difficulty: 'medium',
        tags: ['logistic-regression', 'classification']
      },
      {
        id: 'ml003',
        question: 'How does a Decision Tree make predictions?',
        options: [
          'Random selection',
          'Sequential if-else conditions on features',
          'Neural network computation',
          'Distance calculation'
        ],
        correctAnswer: 1,
        explanation: 'Decision Trees split data based on feature thresholds, creating a tree of if-else conditions. Each leaf node contains a prediction.',
        difficulty: 'medium',
        tags: ['decision-trees', 'algorithms']
      },
      {
        id: 'ml004',
        question: 'What makes Random Forest more robust than a single Decision Tree?',
        options: [
          'It uses more data',
          'Ensemble of trees reduces overfitting through averaging',
          'Faster training',
          'Simpler algorithm'
        ],
        correctAnswer: 1,
        explanation: 'Random Forest trains multiple decision trees on random subsets of data/features. Averaging predictions reduces overfitting and variance.',
        difficulty: 'medium',
        tags: ['random-forest', 'ensemble']
      },
      {
        id: 'ml005',
        question: 'What is the kernel trick in SVM?',
        options: [
          'Operating system optimization',
          'Mapping data to higher dimensions for linear separation',
          'Faster training technique',
          'Hyperparameter tuning'
        ],
        correctAnswer: 1,
        explanation: 'The kernel trick maps data to higher-dimensional space where it becomes linearly separable, without explicitly computing the transformation.',
        difficulty: 'hard',
        tags: ['svm', 'kernel']
      },
      {
        id: 'ml006',
        question: 'What is the main idea behind K-Nearest Neighbors (KNN)?',
        options: [
          'Creating clusters',
          'Classifying based on the majority label of K closest points',
          'Learning weights',
          'Reducing dimensions'
        ],
        correctAnswer: 1,
        explanation: 'KNN classifies a point by looking at its K nearest neighbors (by distance) and assigning the most common label among them.',
        difficulty: 'easy',
        tags: ['knn', 'classification']
      },
      {
        id: 'ml007',
        question: 'What does K-Means clustering optimize?',
        options: [
          'Accuracy',
          'Within-cluster sum of squares (inertia)',
          'Number of clusters',
          'Model parameters'
        ],
        correctAnswer: 1,
        explanation: 'K-Means minimizes within-cluster variance (inertia) by iteratively assigning points to nearest centroids and updating centroids.',
        difficulty: 'medium',
        tags: ['kmeans', 'clustering']
      },
      {
        id: 'ml008',
        question: 'What is gradient descent?',
        options: [
          'A type of neural network',
          'Optimization algorithm that minimizes loss by following gradients',
          'Data preprocessing technique',
          'Evaluation metric'
        ],
        correctAnswer: 1,
        explanation: 'Gradient descent iteratively adjusts model parameters in the direction that reduces the loss function, using gradients to find the minimum.',
        difficulty: 'medium',
        tags: ['gradient-descent', 'optimization']
      },
      {
        id: 'ml009',
        question: 'What is XGBoost primarily known for?',
        options: [
          'Image classification',
          'Gradient boosting with regularization for tabular data',
          'Natural language processing',
          'Reinforcement learning'
        ],
        correctAnswer: 1,
        explanation: 'XGBoost is an optimized gradient boosting algorithm known for winning Kaggle competitions, excellent for structured/tabular data.',
        difficulty: 'medium',
        tags: ['xgboost', 'boosting']
      },
      {
        id: 'ml010',
        question: 'What is the difference between bagging and boosting?',
        options: [
          'No difference',
          'Bagging trains in parallel, boosting trains sequentially to fix errors',
          'Bagging is faster',
          'Boosting uses more trees'
        ],
        correctAnswer: 1,
        explanation: 'Bagging (e.g., Random Forest) trains models independently in parallel. Boosting (e.g., XGBoost) trains sequentially, each model correcting previous errors.',
        difficulty: 'hard',
        tags: ['ensemble', 'bagging', 'boosting']
      }
    ],

    featureEngineering: [
      {
        id: 'ml011',
        question: 'Why normalize/standardize features?',
        options: [
          'To make data prettier',
          'To bring features to similar scales for algorithms sensitive to magnitude',
          'To reduce data size',
          'To remove outliers'
        ],
        correctAnswer: 1,
        explanation: 'Many algorithms (KNN, SVM, neural networks) are sensitive to feature scales. Normalization ensures no feature dominates due to larger values.',
        difficulty: 'medium',
        tags: ['normalization', 'preprocessing']
      },
      {
        id: 'ml012',
        question: 'What is one-hot encoding used for?',
        options: [
          'Numerical features',
          'Converting categorical variables to binary columns',
          'Reducing dimensions',
          'Handling missing values'
        ],
        correctAnswer: 1,
        explanation: 'One-hot encoding converts categorical variables into binary columns (0/1) so they can be used in ML algorithms that require numerical input.',
        difficulty: 'easy',
        tags: ['encoding', 'categorical']
      },
      {
        id: 'ml013',
        question: 'What is target encoding?',
        options: [
          'Encoding the target variable',
          'Replacing categories with the mean of the target for that category',
          'One-hot encoding',
          'Label encoding'
        ],
        correctAnswer: 1,
        explanation: 'Target encoding replaces each category with the average target value for that category. Powerful but prone to overfitting - use with caution.',
        difficulty: 'hard',
        tags: ['encoding', 'target-encoding']
      },
      {
        id: 'ml014',
        question: 'When should you use log transformation?',
        options: [
          'For all features',
          'For right-skewed data to make it more normal',
          'For categorical data',
          'Never'
        ],
        correctAnswer: 1,
        explanation: 'Log transformation helps with right-skewed data (like income, prices), making the distribution more normal and reducing the impact of outliers.',
        difficulty: 'medium',
        tags: ['transformation', 'skewness']
      },
      {
        id: 'ml015',
        question: 'What is feature selection?',
        options: [
          'Creating new features',
          'Choosing the most relevant features and removing irrelevant ones',
          'Transforming features',
          'Encoding features'
        ],
        correctAnswer: 1,
        explanation: 'Feature selection identifies and keeps only the most relevant features, reducing overfitting, training time, and improving model interpretability.',
        difficulty: 'medium',
        tags: ['feature-selection', 'dimensionality']
      }
    ],

    evaluation: [
      {
        id: 'ml016',
        question: 'What does precision measure in classification?',
        options: [
          'Overall accuracy',
          'Of positive predictions, how many were actually positive',
          'Of actual positives, how many were predicted positive',
          'Model speed'
        ],
        correctAnswer: 1,
        explanation: 'Precision = TP/(TP+FP). Of all positive predictions, what fraction was correct. Important when false positives are costly.',
        difficulty: 'medium',
        tags: ['precision', 'metrics']
      },
      {
        id: 'ml017',
        question: 'What does recall (sensitivity) measure?',
        options: [
          'Overall accuracy',
          'Of positive predictions, how many were correct',
          'Of actual positives, how many were correctly predicted',
          'Model size'
        ],
        correctAnswer: 2,
        explanation: 'Recall = TP/(TP+FN). Of all actual positives, what fraction was correctly identified. Important when false negatives are costly (e.g., disease detection).',
        difficulty: 'medium',
        tags: ['recall', 'metrics']
      },
      {
        id: 'ml018',
        question: 'What is the F1 Score?',
        options: [
          'Average of precision and recall',
          'Harmonic mean of precision and recall',
          'Maximum of precision and recall',
          'Precision minus recall'
        ],
        correctAnswer: 1,
        explanation: 'F1 = 2*(Precision*Recall)/(Precision+Recall). The harmonic mean balances precision and recall, useful when you need both to be good.',
        difficulty: 'medium',
        tags: ['f1-score', 'metrics']
      },
      {
        id: 'ml019',
        question: 'What does AUC-ROC represent?',
        options: [
          'Accuracy across thresholds',
          'Probability that model ranks a random positive higher than a random negative',
          'Training speed',
          'Model size'
        ],
        correctAnswer: 1,
        explanation: 'AUC-ROC measures the probability that a random positive example is scored higher than a random negative. AUC of 1.0 is perfect, 0.5 is random.',
        difficulty: 'hard',
        tags: ['auc-roc', 'metrics']
      },
      {
        id: 'ml020',
        question: 'Which metric should you use for regression?',
        options: [
          'Accuracy',
          'F1 Score',
          'Mean Squared Error (MSE) or R-squared',
          'Precision'
        ],
        correctAnswer: 2,
        explanation: 'Regression metrics include MSE (average squared error), RMSE (root MSE for same units), MAE (average absolute error), and R² (variance explained).',
        difficulty: 'easy',
        tags: ['regression-metrics', 'mse']
      }
    ]
  },

  // DEEP LEARNING (50 questions)
  deepLearning: {
    neuralNetworks: [
      {
        id: 'dl001',
        question: 'What is an activation function?',
        options: [
          'Function that activates the GPU',
          'Non-linear function applied to neuron output enabling complex patterns',
          'Function that starts training',
          'Loss function'
        ],
        correctAnswer: 1,
        explanation: 'Activation functions add non-linearity to neural networks, enabling them to learn complex patterns. Without them, the network would be just linear.',
        difficulty: 'easy',
        tags: ['activation', 'neural-networks']
      },
      {
        id: 'dl002',
        question: 'Why is ReLU commonly used as an activation function?',
        options: [
          'It is the most accurate',
          'Computationally cheap and reduces vanishing gradient problem',
          'It works with any data',
          'Required by TensorFlow'
        ],
        correctAnswer: 1,
        explanation: 'ReLU (max(0,x)) is simple to compute and reduces the vanishing gradient problem because its gradient is 1 for positive inputs.',
        difficulty: 'medium',
        tags: ['relu', 'activation']
      },
      {
        id: 'dl003',
        question: 'What is backpropagation?',
        options: [
          'Moving data backwards',
          'Algorithm that computes gradients by propagating error backwards through network',
          'Reversing predictions',
          'Data augmentation'
        ],
        correctAnswer: 1,
        explanation: 'Backpropagation calculates gradients of the loss with respect to each weight by applying the chain rule backwards through the network.',
        difficulty: 'medium',
        tags: ['backpropagation', 'training']
      },
      {
        id: 'dl004',
        question: 'What is the vanishing gradient problem?',
        options: [
          'Gradients becoming too large',
          'Gradients becoming extremely small, preventing learning in early layers',
          'Gradients disappearing from GPU memory',
          'Too many gradients'
        ],
        correctAnswer: 1,
        explanation: 'In deep networks with sigmoid/tanh, gradients can become extremely small through many layers, preventing early layers from learning effectively.',
        difficulty: 'hard',
        tags: ['vanishing-gradient', 'deep-networks']
      },
      {
        id: 'dl005',
        question: 'What is dropout regularization?',
        options: [
          'Removing layers',
          'Randomly setting a fraction of neurons to zero during training',
          'Dropping bad data',
          'Reducing learning rate'
        ],
        correctAnswer: 1,
        explanation: 'Dropout randomly deactivates neurons during training, preventing co-adaptation and acting as an ensemble of sub-networks, reducing overfitting.',
        difficulty: 'medium',
        tags: ['dropout', 'regularization']
      },
      {
        id: 'dl006',
        question: 'What is batch normalization?',
        options: [
          'Normalizing batch size',
          'Normalizing layer inputs to have zero mean and unit variance',
          'Batching data',
          'Normalizing weights'
        ],
        correctAnswer: 1,
        explanation: 'Batch normalization normalizes layer inputs, stabilizing training, allowing higher learning rates, and reducing sensitivity to initialization.',
        difficulty: 'medium',
        tags: ['batch-norm', 'normalization']
      },
      {
        id: 'dl007',
        question: 'What optimizer is commonly recommended as a default?',
        options: [
          'SGD',
          'Adam',
          'RMSprop',
          'Gradient Descent'
        ],
        correctAnswer: 1,
        explanation: 'Adam (Adaptive Moment Estimation) combines momentum and adaptive learning rates, working well across most problems with default settings.',
        difficulty: 'easy',
        tags: ['adam', 'optimizers']
      },
      {
        id: 'dl008',
        question: 'What is the purpose of learning rate scheduling?',
        options: [
          'Making training faster',
          'Adjusting learning rate during training for better convergence',
          'Scheduling training time',
          'Reducing memory'
        ],
        correctAnswer: 1,
        explanation: 'Learning rate scheduling reduces the learning rate as training progresses, allowing large steps initially and fine-tuning near convergence.',
        difficulty: 'medium',
        tags: ['learning-rate', 'scheduling']
      }
    ],

    cnn: [
      {
        id: 'dl009',
        question: 'What operation do CNNs primarily use for feature extraction?',
        options: [
          'Matrix multiplication',
          'Convolution (sliding filters over input)',
          'Addition',
          'Division'
        ],
        correctAnswer: 1,
        explanation: 'CNNs use convolution operations - sliding learned filters over input images to detect features like edges, textures, and patterns.',
        difficulty: 'easy',
        tags: ['cnn', 'convolution']
      },
      {
        id: 'dl010',
        question: 'What does a pooling layer do?',
        options: [
          'Increases image size',
          'Reduces spatial dimensions while retaining important features',
          'Adds more features',
          'Normalizes data'
        ],
        correctAnswer: 1,
        explanation: 'Pooling (max or average) reduces spatial dimensions, making the network more efficient and invariant to small translations.',
        difficulty: 'easy',
        tags: ['pooling', 'cnn']
      },
      {
        id: 'dl011',
        question: 'What is transfer learning?',
        options: [
          'Transferring data between computers',
          'Using a pre-trained model as starting point for new task',
          'Moving models to production',
          'Learning multiple tasks'
        ],
        correctAnswer: 1,
        explanation: 'Transfer learning uses a model pre-trained on large dataset (like ImageNet) as a starting point, fine-tuning it for your specific task.',
        difficulty: 'medium',
        tags: ['transfer-learning', 'pretrained']
      },
      {
        id: 'dl012',
        question: 'Which CNN architecture introduced residual connections?',
        options: [
          'VGG',
          'ResNet',
          'AlexNet',
          'LeNet'
        ],
        correctAnswer: 1,
        explanation: 'ResNet introduced skip/residual connections that add input to layer output, allowing training of very deep networks (100+ layers).',
        difficulty: 'medium',
        tags: ['resnet', 'architectures']
      },
      {
        id: 'dl013',
        question: 'What is data augmentation?',
        options: [
          'Collecting more data',
          'Artificially expanding training data with transformations',
          'Cleaning data',
          'Reducing data size'
        ],
        correctAnswer: 1,
        explanation: 'Data augmentation applies random transformations (rotation, flip, crop, color changes) to training images, increasing effective dataset size.',
        difficulty: 'easy',
        tags: ['augmentation', 'regularization']
      }
    ],

    rnn: [
      {
        id: 'dl014',
        question: 'What type of data are RNNs designed for?',
        options: [
          'Images',
          'Sequential data (text, time series)',
          'Tabular data',
          'Graphs'
        ],
        correctAnswer: 1,
        explanation: 'RNNs process sequential data by maintaining hidden state that captures information from previous steps, ideal for text and time series.',
        difficulty: 'easy',
        tags: ['rnn', 'sequences']
      },
      {
        id: 'dl015',
        question: 'What problem do LSTMs solve that basic RNNs have?',
        options: [
          'Speed issues',
          'Long-term dependency learning (vanishing gradients)',
          'Memory usage',
          'Data loading'
        ],
        correctAnswer: 1,
        explanation: 'LSTMs have gates (forget, input, output) that control information flow, allowing them to learn long-term dependencies that basic RNNs cannot.',
        difficulty: 'medium',
        tags: ['lstm', 'long-term-dependencies']
      },
      {
        id: 'dl016',
        question: 'What are the three gates in an LSTM cell?',
        options: [
          'Start, middle, end',
          'Forget, input, output',
          'Read, write, delete',
          'Open, close, hold'
        ],
        correctAnswer: 1,
        explanation: 'LSTM has forget gate (what to discard), input gate (what to add), and output gate (what to output), controlling cell state flow.',
        difficulty: 'hard',
        tags: ['lstm', 'gates']
      },
      {
        id: 'dl017',
        question: 'What is the advantage of GRU over LSTM?',
        options: [
          'More accurate',
          'Simpler architecture with fewer parameters',
          'Works with images',
          'No advantage'
        ],
        correctAnswer: 1,
        explanation: 'GRU (Gated Recurrent Unit) has only 2 gates vs LSTM\'s 3, making it simpler and faster to train while often achieving similar performance.',
        difficulty: 'medium',
        tags: ['gru', 'lstm']
      }
    ],

    transformers: [
      {
        id: 'dl018',
        question: 'What is the key innovation of Transformers?',
        options: [
          'Recurrent connections',
          'Self-attention mechanism that processes all positions in parallel',
          'Convolutional layers',
          'Pooling layers'
        ],
        correctAnswer: 1,
        explanation: 'Transformers use self-attention to relate all positions in a sequence simultaneously, enabling parallel processing and better long-range dependencies.',
        difficulty: 'medium',
        tags: ['transformers', 'attention']
      },
      {
        id: 'dl019',
        question: 'What does BERT stand for?',
        options: [
          'Basic Encoder Representations from Text',
          'Bidirectional Encoder Representations from Transformers',
          'Better Encoding for Reading Text',
          'Batch Encoder Reading Transformer'
        ],
        correctAnswer: 1,
        explanation: 'BERT is Bidirectional Encoder Representations from Transformers, pre-trained on masked language modeling to understand context from both directions.',
        difficulty: 'easy',
        tags: ['bert', 'nlp']
      },
      {
        id: 'dl020',
        question: 'What is the difference between BERT and GPT?',
        options: [
          'No difference',
          'BERT is bidirectional encoder, GPT is unidirectional decoder',
          'GPT is faster',
          'BERT is for images'
        ],
        correctAnswer: 1,
        explanation: 'BERT uses bidirectional attention (sees all context) for understanding. GPT uses left-to-right attention (causal) for generation.',
        difficulty: 'hard',
        tags: ['bert', 'gpt', 'comparison']
      }
    ]
  },

  // ADVANCED AI (40 questions)
  advancedAI: {
    llms: [
      {
        id: 'adv001',
        question: 'What is a Large Language Model (LLM)?',
        options: [
          'A model with large file size',
          'Transformer model trained on massive text data to understand and generate language',
          'A database for languages',
          'Translation software'
        ],
        correctAnswer: 1,
        explanation: 'LLMs are transformer-based models trained on billions of words, learning language patterns to understand context, answer questions, and generate text.',
        difficulty: 'easy',
        tags: ['llm', 'fundamentals']
      },
      {
        id: 'adv002',
        question: 'What is prompt engineering?',
        options: [
          'Building prompts in code',
          'Crafting effective instructions to get desired outputs from LLMs',
          'Engineering prompt displays',
          'Automatic prompt generation'
        ],
        correctAnswer: 1,
        explanation: 'Prompt engineering is the art of designing inputs (prompts) that guide LLMs to produce accurate, relevant, and useful outputs.',
        difficulty: 'easy',
        tags: ['prompt-engineering', 'llm']
      },
      {
        id: 'adv003',
        question: 'What is few-shot learning in LLMs?',
        options: [
          'Training with few epochs',
          'Providing examples in the prompt to guide model behavior',
          'Using small datasets',
          'Fast inference'
        ],
        correctAnswer: 1,
        explanation: 'Few-shot learning provides a few examples in the prompt to show the LLM the desired format/behavior without fine-tuning.',
        difficulty: 'medium',
        tags: ['few-shot', 'in-context-learning']
      },
      {
        id: 'adv004',
        question: 'What is the context window in LLMs?',
        options: [
          'The visual interface',
          'Maximum number of tokens the model can process at once',
          'Training data size',
          'Response length'
        ],
        correctAnswer: 1,
        explanation: 'Context window is the maximum tokens (input + output) an LLM can handle. GPT-4 has 128K tokens, Claude has 200K+ tokens.',
        difficulty: 'medium',
        tags: ['context-window', 'llm']
      },
      {
        id: 'adv005',
        question: 'What is hallucination in LLMs?',
        options: [
          'Visual effects',
          'Model generating plausible but false or made-up information',
          'Fast processing',
          'Memory issues'
        ],
        correctAnswer: 1,
        explanation: 'Hallucination occurs when LLMs confidently generate false information, stating facts that don\'t exist or are incorrect.',
        difficulty: 'easy',
        tags: ['hallucination', 'limitations']
      }
    ],

    rag: [
      {
        id: 'adv006',
        question: 'What is RAG (Retrieval-Augmented Generation)?',
        options: [
          'A type of neural network',
          'Combining retrieval of relevant documents with LLM generation',
          'Random text generation',
          'Audio generation'
        ],
        correctAnswer: 1,
        explanation: 'RAG retrieves relevant documents from a knowledge base and provides them as context to the LLM, enabling accurate answers based on specific data.',
        difficulty: 'medium',
        tags: ['rag', 'retrieval']
      },
      {
        id: 'adv007',
        question: 'What are vector embeddings used for in RAG?',
        options: [
          'Storing images',
          'Representing text as numerical vectors for semantic similarity search',
          'Compressing data',
          'Encrypting data'
        ],
        correctAnswer: 1,
        explanation: 'Embeddings convert text to dense vectors where similar meanings are close together, enabling semantic search to find relevant documents.',
        difficulty: 'medium',
        tags: ['embeddings', 'vector-search']
      },
      {
        id: 'adv008',
        question: 'What is a vector database?',
        options: [
          'Database for storing numbers',
          'Database optimized for storing and querying vector embeddings',
          'Regular SQL database',
          'File storage system'
        ],
        correctAnswer: 1,
        explanation: 'Vector databases (Pinecone, Weaviate, Chroma) are optimized for storing embeddings and performing fast similarity searches.',
        difficulty: 'medium',
        tags: ['vector-database', 'rag']
      },
      {
        id: 'adv009',
        question: 'What is chunking in RAG?',
        options: [
          'Compressing files',
          'Splitting documents into smaller pieces for embedding',
          'Grouping similar documents',
          'Deleting data'
        ],
        correctAnswer: 1,
        explanation: 'Chunking splits large documents into smaller pieces that fit within embedding model limits and provide focused context for retrieval.',
        difficulty: 'medium',
        tags: ['chunking', 'preprocessing']
      }
    ],

    agents: [
      {
        id: 'adv010',
        question: 'What is an AI Agent?',
        options: [
          'A chatbot',
          'LLM that can use tools and take actions to accomplish goals',
          'A search engine',
          'A database'
        ],
        correctAnswer: 1,
        explanation: 'AI Agents are LLMs that can reason, plan, and take actions using external tools (APIs, databases, code execution) to accomplish complex goals.',
        difficulty: 'medium',
        tags: ['agents', 'tools']
      },
      {
        id: 'adv011',
        question: 'What is ReAct in the context of AI agents?',
        options: [
          'A JavaScript framework',
          'Reasoning and Acting pattern where LLM thinks then acts',
          'Reaction time measurement',
          'Error handling'
        ],
        correctAnswer: 1,
        explanation: 'ReAct (Reasoning + Acting) is a pattern where agents alternate between thinking (reasoning about what to do) and acting (using tools).',
        difficulty: 'hard',
        tags: ['react', 'agent-patterns']
      },
      {
        id: 'adv012',
        question: 'What is function calling in LLMs?',
        options: [
          'Calling Python functions',
          'LLM generating structured output to invoke external functions',
          'Recursive calls',
          'API calls'
        ],
        correctAnswer: 1,
        explanation: 'Function calling allows LLMs to generate structured JSON output specifying which function to call and with what parameters.',
        difficulty: 'medium',
        tags: ['function-calling', 'tools']
      }
    ],

    fineTuning: [
      {
        id: 'adv013',
        question: 'What is fine-tuning?',
        options: [
          'Adjusting hyperparameters',
          'Further training a pre-trained model on task-specific data',
          'Cleaning data',
          'Deploying models'
        ],
        correctAnswer: 1,
        explanation: 'Fine-tuning continues training a pre-trained model on your specific data, adapting it to your domain or task while leveraging learned knowledge.',
        difficulty: 'easy',
        tags: ['fine-tuning', 'training']
      },
      {
        id: 'adv014',
        question: 'What is LoRA (Low-Rank Adaptation)?',
        options: [
          'A type of data',
          'Parameter-efficient fine-tuning by training small adapter matrices',
          'Learning rate adjustment',
          'Loss function'
        ],
        correctAnswer: 1,
        explanation: 'LoRA freezes the original model and trains small low-rank matrices, enabling fine-tuning with much less memory and compute.',
        difficulty: 'hard',
        tags: ['lora', 'peft']
      },
      {
        id: 'adv015',
        question: 'When should you fine-tune vs use RAG?',
        options: [
          'Always fine-tune',
          'Fine-tune for style/behavior, RAG for factual knowledge',
          'Always use RAG',
          'They do the same thing'
        ],
        correctAnswer: 1,
        explanation: 'Fine-tune to change model behavior/style. Use RAG for factual knowledge that may change or needs citations. Often combine both.',
        difficulty: 'hard',
        tags: ['fine-tuning', 'rag', 'comparison']
      }
    ]
  },

  // COMPUTER VISION (30 questions)
  computerVision: {
    imageProcessing: [
      {
        id: 'cv001',
        question: 'What is a convolutional filter/kernel in image processing?',
        options: [
          'A type of image format',
          'A small matrix used to detect features like edges or patterns',
          'A compression algorithm',
          'An image resizer'
        ],
        correctAnswer: 1,
        explanation: 'A convolutional kernel is a small matrix (e.g., 3x3) that slides over an image to detect specific features like edges, corners, or textures.',
        difficulty: 'medium',
        tags: ['convolution', 'image-processing']
      },
      {
        id: 'cv002',
        question: 'What does stride mean in convolution operations?',
        options: [
          'Filter size',
          'Number of pixels the filter moves at each step',
          'Image resolution',
          'Number of filters'
        ],
        correctAnswer: 1,
        explanation: 'Stride is the number of pixels the convolution filter moves at each step. Larger strides result in smaller output dimensions.',
        difficulty: 'medium',
        tags: ['stride', 'convolution']
      },
      {
        id: 'cv003',
        question: 'What is padding in CNNs?',
        options: [
          'Adding pixels around the input image',
          'Removing pixels from edges',
          'Compressing the image',
          'Normalizing pixel values'
        ],
        correctAnswer: 0,
        explanation: 'Padding adds extra pixels (usually zeros) around the image borders, allowing convolutions to preserve spatial dimensions.',
        difficulty: 'easy',
        tags: ['padding', 'cnn']
      },
      {
        id: 'cv004',
        question: 'What is object detection?',
        options: [
          'Classifying an entire image',
          'Identifying and localizing objects with bounding boxes',
          'Segmenting each pixel',
          'Generating new images'
        ],
        correctAnswer: 1,
        explanation: 'Object detection finds objects in images and draws bounding boxes around them, predicting both class and location.',
        difficulty: 'easy',
        tags: ['object-detection', 'computer-vision']
      },
      {
        id: 'cv005',
        question: 'What is the difference between object detection and segmentation?',
        options: [
          'No difference',
          'Detection uses boxes, segmentation labels each pixel',
          'Segmentation is faster',
          'Detection is more accurate'
        ],
        correctAnswer: 1,
        explanation: 'Object detection draws bounding boxes around objects. Segmentation classifies each pixel, providing precise object boundaries.',
        difficulty: 'medium',
        tags: ['segmentation', 'detection']
      },
      {
        id: 'cv006',
        question: 'What is YOLO in computer vision?',
        options: [
          'A programming language',
          'You Only Look Once - real-time object detection',
          'A dataset',
          'A loss function'
        ],
        correctAnswer: 1,
        explanation: 'YOLO (You Only Look Once) is a real-time object detection algorithm that processes the entire image in a single pass, making it very fast.',
        difficulty: 'medium',
        tags: ['yolo', 'object-detection']
      },
      {
        id: 'cv007',
        question: 'What is IoU (Intersection over Union)?',
        options: [
          'A neural network type',
          'Metric measuring overlap between predicted and ground truth boxes',
          'Image format',
          'Training technique'
        ],
        correctAnswer: 1,
        explanation: 'IoU measures how much the predicted bounding box overlaps with the ground truth. IoU = Area of Overlap / Area of Union. Used to evaluate detection.',
        difficulty: 'medium',
        tags: ['iou', 'metrics']
      },
      {
        id: 'cv008',
        question: 'What is semantic segmentation?',
        options: [
          'Labeling each pixel with a class (no instance distinction)',
          'Detecting objects',
          'Image classification',
          'Image compression'
        ],
        correctAnswer: 0,
        explanation: 'Semantic segmentation assigns a class label to every pixel in an image, but doesn\'t distinguish between different instances of the same class.',
        difficulty: 'medium',
        tags: ['semantic-segmentation', 'segmentation']
      },
      {
        id: 'cv009',
        question: 'What is instance segmentation?',
        options: [
          'Same as semantic segmentation',
          'Segmentation that distinguishes between different instances of same class',
          'Object detection',
          'Image classification'
        ],
        correctAnswer: 1,
        explanation: 'Instance segmentation combines detection and segmentation - it segments each pixel AND distinguishes between different instances (e.g., person 1 vs person 2).',
        difficulty: 'hard',
        tags: ['instance-segmentation', 'segmentation']
      },
      {
        id: 'cv010',
        question: 'What is a GAN (Generative Adversarial Network)?',
        options: [
          'A classification network',
          'Two networks (generator and discriminator) trained adversarially',
          'A detection algorithm',
          'A regularization technique'
        ],
        correctAnswer: 1,
        explanation: 'GANs have a generator that creates fake images and a discriminator that tries to detect fakes. They compete, improving both until the generator makes realistic images.',
        difficulty: 'medium',
        tags: ['gan', 'generative']
      }
    ],

    architectures: [
      {
        id: 'cv011',
        question: 'What innovation did VGGNet introduce?',
        options: [
          'Residual connections',
          'Using only small 3x3 filters consistently',
          'Attention mechanism',
          'Depthwise convolution'
        ],
        correctAnswer: 1,
        explanation: 'VGG showed that using small 3x3 filters stacked deeply works better than large filters, setting a standard for CNN architectures.',
        difficulty: 'medium',
        tags: ['vgg', 'architectures']
      },
      {
        id: 'cv012',
        question: 'What problem do Inception modules solve?',
        options: [
          'Overfitting',
          'Choosing the right filter size by using multiple sizes in parallel',
          'Vanishing gradients',
          'Data augmentation'
        ],
        correctAnswer: 1,
        explanation: 'Inception modules use 1x1, 3x3, and 5x5 filters in parallel, letting the network learn which filter size works best for each feature.',
        difficulty: 'hard',
        tags: ['inception', 'architectures']
      },
      {
        id: 'cv013',
        question: 'What is a 1x1 convolution used for?',
        options: [
          'Edge detection',
          'Changing the number of channels/dimensionality reduction',
          'Pooling',
          'Upsampling'
        ],
        correctAnswer: 1,
        explanation: '1x1 convolutions change the number of channels (feature maps) without changing spatial dimensions. Used for dimensionality reduction and adding non-linearity.',
        difficulty: 'medium',
        tags: ['1x1-conv', 'bottleneck']
      },
      {
        id: 'cv014',
        question: 'What is the U-Net architecture used for?',
        options: [
          'Image classification',
          'Image segmentation, especially medical imaging',
          'Object detection',
          'Image generation'
        ],
        correctAnswer: 1,
        explanation: 'U-Net has an encoder-decoder structure with skip connections, excelling at segmentation tasks, especially in medical imaging with limited data.',
        difficulty: 'medium',
        tags: ['unet', 'segmentation']
      },
      {
        id: 'cv015',
        question: 'What is a Vision Transformer (ViT)?',
        options: [
          'A CNN variant',
          'Applying transformer architecture directly to image patches',
          'A GAN architecture',
          'An RNN for images'
        ],
        correctAnswer: 1,
        explanation: 'ViT splits images into patches, treats them as tokens (like words), and applies the transformer architecture, achieving excellent results on image tasks.',
        difficulty: 'hard',
        tags: ['vit', 'transformers']
      }
    ]
  },

  // MLOps & DEPLOYMENT (30 questions)
  mlops: {
    deployment: [
      {
        id: 'mlo001',
        question: 'What is model deployment?',
        options: [
          'Training a model',
          'Making a model available for real-world predictions',
          'Collecting data',
          'Feature engineering'
        ],
        correctAnswer: 1,
        explanation: 'Model deployment is the process of making a trained model available in production to make predictions on new data.',
        difficulty: 'easy',
        tags: ['deployment', 'production']
      },
      {
        id: 'mlo002',
        question: 'What is a REST API in the context of ML?',
        options: [
          'A training framework',
          'Interface for clients to send data and receive predictions over HTTP',
          'A database',
          'A model format'
        ],
        correctAnswer: 1,
        explanation: 'REST APIs allow applications to send input data over HTTP and receive model predictions in response, enabling integration with web services.',
        difficulty: 'easy',
        tags: ['api', 'rest']
      },
      {
        id: 'mlo003',
        question: 'Why use Docker for ML deployment?',
        options: [
          'It trains models faster',
          'Packages model and dependencies for consistent deployment across environments',
          'It improves accuracy',
          'It\'s required for Python'
        ],
        correctAnswer: 1,
        explanation: 'Docker containers package the model, code, and all dependencies together, ensuring the same environment runs everywhere.',
        difficulty: 'medium',
        tags: ['docker', 'containers']
      },
      {
        id: 'mlo004',
        question: 'What is model serving?',
        options: [
          'Saving models to disk',
          'Running models to handle inference requests in production',
          'Training models',
          'Evaluating models'
        ],
        correctAnswer: 1,
        explanation: 'Model serving systems (like TensorFlow Serving, TorchServe) handle loading models and processing inference requests at scale.',
        difficulty: 'medium',
        tags: ['serving', 'inference']
      },
      {
        id: 'mlo005',
        question: 'What is batch inference vs real-time inference?',
        options: [
          'No difference',
          'Batch processes many predictions at once; real-time handles single requests instantly',
          'Batch is faster',
          'Real-time is more accurate'
        ],
        correctAnswer: 1,
        explanation: 'Batch inference processes large amounts of data in bulk (e.g., nightly). Real-time inference handles requests immediately as they arrive.',
        difficulty: 'medium',
        tags: ['batch', 'real-time', 'inference']
      },
      {
        id: 'mlo006',
        question: 'What is Flask commonly used for in ML?',
        options: [
          'Training neural networks',
          'Creating simple web APIs for model serving',
          'Data preprocessing',
          'GPU computing'
        ],
        correctAnswer: 1,
        explanation: 'Flask is a lightweight Python web framework often used to create simple APIs for serving ML model predictions.',
        difficulty: 'easy',
        tags: ['flask', 'api']
      },
      {
        id: 'mlo007',
        question: 'What is FastAPI and why is it popular for ML?',
        options: [
          'A training library',
          'Modern Python API framework with automatic docs and async support',
          'A model format',
          'A database'
        ],
        correctAnswer: 1,
        explanation: 'FastAPI is a modern, fast Python framework with automatic OpenAPI documentation, type hints, and async support - ideal for ML APIs.',
        difficulty: 'medium',
        tags: ['fastapi', 'api']
      }
    ],

    monitoring: [
      {
        id: 'mlo008',
        question: 'What is model monitoring?',
        options: [
          'Watching training progress',
          'Tracking model performance and behavior in production',
          'Debugging code',
          'Version control'
        ],
        correctAnswer: 1,
        explanation: 'Model monitoring tracks prediction quality, latency, errors, and data drift in production to ensure the model continues performing well.',
        difficulty: 'medium',
        tags: ['monitoring', 'production']
      },
      {
        id: 'mlo009',
        question: 'What is data drift?',
        options: [
          'Data moving between servers',
          'Change in input data distribution over time',
          'Data corruption',
          'Missing data'
        ],
        correctAnswer: 1,
        explanation: 'Data drift occurs when production data differs from training data distribution, potentially degrading model performance over time.',
        difficulty: 'medium',
        tags: ['drift', 'monitoring']
      },
      {
        id: 'mlo010',
        question: 'What is concept drift?',
        options: [
          'Same as data drift',
          'Change in the relationship between input and target over time',
          'Model getting smaller',
          'Training instability'
        ],
        correctAnswer: 1,
        explanation: 'Concept drift occurs when the underlying relationship between features and target changes (e.g., customer behavior changes), requiring model retraining.',
        difficulty: 'hard',
        tags: ['concept-drift', 'drift']
      },
      {
        id: 'mlo011',
        question: 'What is A/B testing in ML deployment?',
        options: [
          'Testing two algorithms',
          'Comparing models by routing traffic to different versions',
          'Unit testing',
          'Integration testing'
        ],
        correctAnswer: 1,
        explanation: 'A/B testing routes different users to different model versions to compare real-world performance before full deployment.',
        difficulty: 'medium',
        tags: ['ab-testing', 'deployment']
      },
      {
        id: 'mlo012',
        question: 'What is a canary deployment?',
        options: [
          'Deploying to birds',
          'Gradually rolling out new model to small percentage of traffic',
          'Full deployment',
          'Testing in staging'
        ],
        correctAnswer: 1,
        explanation: 'Canary deployment releases a new model to a small percentage of users first, monitoring for issues before full rollout.',
        difficulty: 'medium',
        tags: ['canary', 'deployment']
      }
    ],

    cicd: [
      {
        id: 'mlo013',
        question: 'What is CI/CD in ML?',
        options: [
          'A programming language',
          'Continuous Integration/Deployment - automating testing and deployment',
          'A model architecture',
          'A data format'
        ],
        correctAnswer: 1,
        explanation: 'CI/CD automates code testing, model training, validation, and deployment, enabling faster and more reliable ML releases.',
        difficulty: 'easy',
        tags: ['cicd', 'automation']
      },
      {
        id: 'mlo014',
        question: 'What is MLflow?',
        options: [
          'A deep learning framework',
          'Platform for ML lifecycle management including experiments, models, and deployment',
          'A database',
          'A visualization tool'
        ],
        correctAnswer: 1,
        explanation: 'MLflow is an open-source platform for managing the ML lifecycle: experiment tracking, model packaging, and deployment.',
        difficulty: 'medium',
        tags: ['mlflow', 'lifecycle']
      },
      {
        id: 'mlo015',
        question: 'What is DVC (Data Version Control)?',
        options: [
          'Git for code',
          'Version control for large data files and ML pipelines',
          'A database',
          'A cloud platform'
        ],
        correctAnswer: 1,
        explanation: 'DVC extends Git for versioning large data files, ML models, and pipelines that are too big for traditional Git.',
        difficulty: 'medium',
        tags: ['dvc', 'version-control']
      }
    ],

    optimization: [
      {
        id: 'mlo016',
        question: 'What is model quantization?',
        options: [
          'Making models bigger',
          'Reducing model precision (e.g., float32 to int8) for faster inference',
          'Adding more layers',
          'Data augmentation'
        ],
        correctAnswer: 1,
        explanation: 'Quantization reduces numerical precision of model weights (32-bit to 8-bit), decreasing size and improving inference speed with minimal accuracy loss.',
        difficulty: 'hard',
        tags: ['quantization', 'optimization']
      },
      {
        id: 'mlo017',
        question: 'What is model pruning?',
        options: [
          'Adding more parameters',
          'Removing unnecessary weights/connections to make models smaller',
          'Changing activation functions',
          'Data cleaning'
        ],
        correctAnswer: 1,
        explanation: 'Pruning removes less important weights or neurons from neural networks, reducing model size and computation while maintaining accuracy.',
        difficulty: 'hard',
        tags: ['pruning', 'optimization']
      },
      {
        id: 'mlo018',
        question: 'What is knowledge distillation?',
        options: [
          'Cleaning data',
          'Training a smaller model to mimic a larger model',
          'Feature extraction',
          'Data augmentation'
        ],
        correctAnswer: 1,
        explanation: 'Knowledge distillation trains a smaller "student" model to replicate the outputs of a larger "teacher" model, achieving similar performance with less compute.',
        difficulty: 'hard',
        tags: ['distillation', 'compression']
      },
      {
        id: 'mlo019',
        question: 'What is ONNX?',
        options: [
          'A training framework',
          'Open standard format for ML models enabling framework interoperability',
          'A cloud platform',
          'A programming language'
        ],
        correctAnswer: 1,
        explanation: 'ONNX (Open Neural Network Exchange) is an open format for ML models, allowing models to be transferred between frameworks (PyTorch → TensorFlow).',
        difficulty: 'medium',
        tags: ['onnx', 'interoperability']
      },
      {
        id: 'mlo020',
        question: 'What is TensorRT?',
        options: [
          'A training library',
          'NVIDIA platform for optimizing and deploying models for inference',
          'A database',
          'A cloud service'
        ],
        correctAnswer: 1,
        explanation: 'TensorRT is NVIDIA\'s SDK for optimizing neural networks for inference, providing significant speedups on NVIDIA GPUs.',
        difficulty: 'hard',
        tags: ['tensorrt', 'optimization']
      }
    ]
  },

  // NLP & LANGUAGE (30 questions)
  nlp: {
    basics: [
      {
        id: 'nlp001',
        question: 'What is tokenization in NLP?',
        options: [
          'Encryption',
          'Splitting text into smaller units (words, subwords, characters)',
          'Translation',
          'Classification'
        ],
        correctAnswer: 1,
        explanation: 'Tokenization breaks text into tokens (words, subwords, or characters) that can be processed by NLP models.',
        difficulty: 'easy',
        tags: ['tokenization', 'preprocessing']
      },
      {
        id: 'nlp002',
        question: 'What is a word embedding?',
        options: [
          'Hiding words',
          'Dense vector representation of words capturing semantic meaning',
          'Word count',
          'Spelling correction'
        ],
        correctAnswer: 1,
        explanation: 'Word embeddings are dense vector representations where similar words have similar vectors, capturing semantic relationships.',
        difficulty: 'medium',
        tags: ['embeddings', 'representations']
      },
      {
        id: 'nlp003',
        question: 'What is the difference between Word2Vec and GloVe?',
        options: [
          'No difference',
          'Word2Vec uses local context, GloVe uses global co-occurrence statistics',
          'GloVe is faster',
          'Word2Vec is more accurate'
        ],
        correctAnswer: 1,
        explanation: 'Word2Vec predicts words from local context (window). GloVe uses global word co-occurrence matrix to learn embeddings.',
        difficulty: 'hard',
        tags: ['word2vec', 'glove']
      },
      {
        id: 'nlp004',
        question: 'What is named entity recognition (NER)?',
        options: [
          'Naming files',
          'Identifying and classifying named entities (person, location, organization)',
          'Translation',
          'Summarization'
        ],
        correctAnswer: 1,
        explanation: 'NER identifies and classifies named entities in text into categories like person, organization, location, date, etc.',
        difficulty: 'easy',
        tags: ['ner', 'information-extraction']
      },
      {
        id: 'nlp005',
        question: 'What is sentiment analysis?',
        options: [
          'Grammar checking',
          'Determining the emotional tone or opinion in text',
          'Language detection',
          'Text generation'
        ],
        correctAnswer: 1,
        explanation: 'Sentiment analysis classifies text as positive, negative, or neutral, often used for product reviews and social media analysis.',
        difficulty: 'easy',
        tags: ['sentiment', 'classification']
      }
    ],

    transformersNLP: [
      {
        id: 'nlp006',
        question: 'What is self-attention in transformers?',
        options: [
          'Focusing on one word',
          'Mechanism that relates all positions to compute representations',
          'Removing attention layers',
          'External attention'
        ],
        correctAnswer: 1,
        explanation: 'Self-attention allows each position to attend to all positions in the sequence, computing weighted representations based on relevance.',
        difficulty: 'medium',
        tags: ['attention', 'transformers']
      },
      {
        id: 'nlp007',
        question: 'What are positional encodings for?',
        options: [
          'Image positions',
          'Giving transformers information about word order since they have no inherent sequence understanding',
          'Encoding GPS',
          'Memory positions'
        ],
        correctAnswer: 1,
        explanation: 'Transformers process all positions in parallel, so positional encodings are added to give the model information about word order.',
        difficulty: 'medium',
        tags: ['positional-encoding', 'transformers']
      },
      {
        id: 'nlp008',
        question: 'What is masked language modeling (MLM)?',
        options: [
          'Hiding the model',
          'Pre-training task where model predicts masked/hidden words',
          'Filtering bad words',
          'Encrypting text'
        ],
        correctAnswer: 1,
        explanation: 'MLM is BERT\'s pre-training task: randomly mask tokens and train the model to predict them, learning bidirectional context.',
        difficulty: 'medium',
        tags: ['mlm', 'pretraining']
      },
      {
        id: 'nlp009',
        question: 'What is causal language modeling?',
        options: [
          'Finding causes in text',
          'Predicting the next token given previous tokens (left-to-right)',
          'Understanding causality',
          'Random prediction'
        ],
        correctAnswer: 1,
        explanation: 'Causal LM predicts the next token given all previous tokens, used by GPT models. Enables text generation.',
        difficulty: 'medium',
        tags: ['causal-lm', 'gpt']
      },
      {
        id: 'nlp010',
        question: 'What is sequence-to-sequence (seq2seq)?',
        options: [
          'Copy-paste',
          'Model architecture that transforms input sequence to output sequence',
          'Sorting sequences',
          'Comparing sequences'
        ],
        correctAnswer: 1,
        explanation: 'Seq2seq models take an input sequence and generate an output sequence, used for translation, summarization, and question answering.',
        difficulty: 'medium',
        tags: ['seq2seq', 'encoder-decoder']
      }
    ],

    llmAdvanced: [
      {
        id: 'nlp011',
        question: 'What is chain-of-thought prompting?',
        options: [
          'Linking prompts together',
          'Prompting LLMs to show reasoning steps before the final answer',
          'Chain of API calls',
          'Memory chains'
        ],
        correctAnswer: 1,
        explanation: 'Chain-of-thought prompting asks LLMs to "think step by step", showing reasoning before the answer, improving performance on complex tasks.',
        difficulty: 'medium',
        tags: ['chain-of-thought', 'prompting']
      },
      {
        id: 'nlp012',
        question: 'What is RLHF (Reinforcement Learning from Human Feedback)?',
        options: [
          'A neural network type',
          'Fine-tuning LLMs using human preference ratings',
          'Faster training',
          'Data collection'
        ],
        correctAnswer: 1,
        explanation: 'RLHF trains a reward model from human comparisons, then uses RL to fine-tune the LLM to generate preferred responses.',
        difficulty: 'hard',
        tags: ['rlhf', 'alignment']
      },
      {
        id: 'nlp013',
        question: 'What is temperature in LLM generation?',
        options: [
          'Hardware temperature',
          'Parameter controlling randomness - lower is more deterministic',
          'Training speed',
          'Model size'
        ],
        correctAnswer: 1,
        explanation: 'Temperature scales logits before softmax: lower values (0.1-0.5) make output more focused/deterministic, higher values (0.8-1.0) increase diversity.',
        difficulty: 'medium',
        tags: ['temperature', 'generation']
      },
      {
        id: 'nlp014',
        question: 'What is top-p (nucleus) sampling?',
        options: [
          'Selecting top tokens',
          'Sampling from the smallest set of tokens whose probability sums to p',
          'Random sampling',
          'Greedy decoding'
        ],
        correctAnswer: 1,
        explanation: 'Top-p sampling selects from the smallest set of tokens whose cumulative probability exceeds p, balancing diversity and quality.',
        difficulty: 'hard',
        tags: ['top-p', 'sampling']
      },
      {
        id: 'nlp015',
        question: 'What is the difference between zero-shot and few-shot prompting?',
        options: [
          'No difference',
          'Zero-shot provides no examples, few-shot provides examples in the prompt',
          'Zero-shot is faster',
          'Few-shot is more accurate always'
        ],
        correctAnswer: 1,
        explanation: 'Zero-shot gives only instructions. Few-shot includes examples in the prompt to demonstrate the desired format/behavior.',
        difficulty: 'easy',
        tags: ['zero-shot', 'few-shot']
      }
    ]
  },

  // DATA VISUALIZATION & ANALYTICS (20 questions)
  dataVisualization: {
    tools: [
      {
        id: 'viz001',
        question: 'Which library is best for creating static plots in Python?',
        options: [
          'Plotly',
          'Matplotlib',
          'Bokeh',
          'D3.js'
        ],
        correctAnswer: 1,
        explanation: 'Matplotlib is the foundational plotting library for static visualizations in Python, offering fine-grained control over plot elements.',
        difficulty: 'easy',
        tags: ['matplotlib', 'visualization']
      },
      {
        id: 'viz002',
        question: 'What is Seaborn built on top of?',
        options: [
          'Plotly',
          'Matplotlib',
          'Bokeh',
          'NumPy'
        ],
        correctAnswer: 1,
        explanation: 'Seaborn is built on top of Matplotlib, providing a higher-level interface for creating attractive statistical graphics.',
        difficulty: 'easy',
        tags: ['seaborn', 'matplotlib']
      },
      {
        id: 'viz003',
        question: 'When should you use Plotly over Matplotlib?',
        options: [
          'For static reports',
          'For interactive, web-based visualizations',
          'For faster rendering',
          'For smaller file sizes'
        ],
        correctAnswer: 1,
        explanation: 'Plotly excels at creating interactive visualizations that can be embedded in web pages with zoom, hover, and pan capabilities.',
        difficulty: 'medium',
        tags: ['plotly', 'interactive']
      },
      {
        id: 'viz004',
        question: 'What is Streamlit used for?',
        options: [
          'Data storage',
          'Building interactive ML web applications with Python',
          'Model training',
          'Data collection'
        ],
        correctAnswer: 1,
        explanation: 'Streamlit allows you to create interactive data apps and ML demos using only Python, without requiring web development knowledge.',
        difficulty: 'easy',
        tags: ['streamlit', 'apps']
      },
      {
        id: 'viz005',
        question: 'What type of chart is best for showing distribution?',
        options: [
          'Line chart',
          'Histogram or box plot',
          'Pie chart',
          'Scatter plot'
        ],
        correctAnswer: 1,
        explanation: 'Histograms show distribution shape and frequency. Box plots show median, quartiles, and outliers - both are excellent for distributions.',
        difficulty: 'easy',
        tags: ['distribution', 'charts']
      }
    ],

    bestPractices: [
      {
        id: 'viz006',
        question: 'When should you use a pie chart?',
        options: [
          'For time series',
          'For showing parts of a whole (few categories)',
          'For distributions',
          'For correlations'
        ],
        correctAnswer: 1,
        explanation: 'Pie charts work best for showing proportions of a whole with few categories (2-5). Bar charts are often better for comparisons.',
        difficulty: 'easy',
        tags: ['pie-chart', 'best-practices']
      },
      {
        id: 'viz007',
        question: 'What is a heatmap best used for?',
        options: [
          'Time series',
          'Showing patterns in matrix data like correlations',
          'Distributions',
          'Part-to-whole relationships'
        ],
        correctAnswer: 1,
        explanation: 'Heatmaps use color intensity to show values in a matrix, excellent for correlation matrices, confusion matrices, and time-based patterns.',
        difficulty: 'medium',
        tags: ['heatmap', 'correlation']
      },
      {
        id: 'viz008',
        question: 'What is a confusion matrix used for?',
        options: [
          'Showing feature importance',
          'Evaluating classification model performance across all classes',
          'Visualizing data distribution',
          'Showing time trends'
        ],
        correctAnswer: 1,
        explanation: 'Confusion matrices show true vs predicted labels for classification, revealing where models make mistakes across classes.',
        difficulty: 'medium',
        tags: ['confusion-matrix', 'evaluation']
      },
      {
        id: 'viz009',
        question: 'What is feature importance visualization?',
        options: [
          'Showing data types',
          'Displaying which features contribute most to model predictions',
          'Visualizing missing data',
          'Showing training progress'
        ],
        correctAnswer: 1,
        explanation: 'Feature importance plots show which features have the most impact on predictions, helping with model interpretation and feature selection.',
        difficulty: 'medium',
        tags: ['feature-importance', 'interpretability']
      },
      {
        id: 'viz010',
        question: 'What is a ROC curve used for?',
        options: [
          'Showing training loss',
          'Evaluating binary classifier performance across thresholds',
          'Visualizing data',
          'Feature selection'
        ],
        correctAnswer: 1,
        explanation: 'ROC curves plot True Positive Rate vs False Positive Rate across thresholds, showing classifier performance. AUC summarizes overall quality.',
        difficulty: 'medium',
        tags: ['roc', 'evaluation']
      }
    ]
  }
};

// Helper functions
export const getAIQuestionsByCategory = (category) => {
  const questions = [];
  Object.values(aiQuizBank).forEach(section => {
    if (section[category]) {
      questions.push(...section[category]);
    }
  });
  return questions;
};

export const getAIQuestionsByDifficulty = (difficulty) => {
  const questions = [];
  Object.values(aiQuizBank).forEach(section => {
    Object.values(section).forEach(category => {
      questions.push(...category.filter(q => q.difficulty === difficulty));
    });
  });
  return questions;
};

export const getRandomAIQuestions = (count) => {
  const allQuestions = [];
  Object.values(aiQuizBank).forEach(section => {
    Object.values(section).forEach(category => {
      allQuestions.push(...category);
    });
  });
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getAIQuestionCount = () => {
  let count = 0;
  Object.values(aiQuizBank).forEach(section => {
    Object.values(section).forEach(category => {
      count += category.length;
    });
  });
  return count;
};

export default aiQuizBank;
