// Python & AI Flashcards

export const pythonFlashcards = {
  categories: [
    {
      id: 'python-basics',
      title: 'Python Basics',
      icon: '🐍',
      cards: [
        {
          id: 'py-1',
          front: 'What is a list comprehension?',
          back: 'A concise way to create lists.\n\nSyntax: [expression for item in iterable if condition]\n\nExample:\nsquares = [x**2 for x in range(10)]',
          tags: ['python', 'lists', 'syntax']
        },
        {
          id: 'py-2',
          front: 'What is the difference between a list and a tuple?',
          back: '• List: Mutable (can be changed), uses []\n• Tuple: Immutable (cannot be changed), uses ()\n\nTuples are faster and can be used as dictionary keys.',
          tags: ['python', 'data-structures']
        },
        {
          id: 'py-3',
          front: 'What does *args and **kwargs mean?',
          back: '*args: Allows passing variable number of positional arguments (as tuple)\n\n**kwargs: Allows passing variable number of keyword arguments (as dict)\n\ndef func(*args, **kwargs):\n    print(args)   # tuple\n    print(kwargs) # dict',
          tags: ['python', 'functions']
        },
        {
          id: 'py-4',
          front: 'What is a decorator in Python?',
          back: 'A function that modifies another function\'s behavior without changing its code.\n\n@decorator\ndef my_func():\n    pass\n\nEquivalent to:\nmy_func = decorator(my_func)',
          tags: ['python', 'advanced']
        },
        {
          id: 'py-5',
          front: 'What is the difference between == and is?',
          back: '== compares values (equality)\nis compares identity (same object in memory)\n\na = [1,2]\nb = [1,2]\na == b  # True (same value)\na is b  # False (different objects)',
          tags: ['python', 'operators']
        },
        {
          id: 'py-6',
          front: 'What is a generator in Python?',
          back: 'A function that yields values one at a time, saving memory.\n\ndef count_up(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1\n\nUses yield instead of return. Creates an iterator.',
          tags: ['python', 'generators', 'memory']
        },
        {
          id: 'py-7',
          front: 'What is the GIL?',
          back: 'Global Interpreter Lock\n\nA mutex that allows only one thread to execute Python bytecode at a time.\n\nImpact: Limits true parallelism in CPU-bound multi-threaded programs.\n\nSolution: Use multiprocessing for CPU-bound tasks.',
          tags: ['python', 'threading', 'advanced']
        },
        {
          id: 'py-8',
          front: 'What are Python\'s mutable and immutable types?',
          back: 'Immutable: int, float, str, tuple, frozenset\n\nMutable: list, dict, set, custom objects\n\nImmutable objects cannot be changed after creation.',
          tags: ['python', 'data-types']
        }
      ]
    },
    {
      id: 'numpy-pandas',
      title: 'NumPy & Pandas',
      icon: '📊',
      cards: [
        {
          id: 'np-1',
          front: 'How do you create a NumPy array?',
          back: 'import numpy as np\n\n# From list\narr = np.array([1, 2, 3])\n\n# Zeros/Ones\nnp.zeros((3, 3))\nnp.ones((2, 4))\n\n# Range\nnp.arange(0, 10, 2)\nnp.linspace(0, 1, 5)',
          tags: ['numpy', 'arrays']
        },
        {
          id: 'np-2',
          front: 'What is broadcasting in NumPy?',
          back: 'Automatic expansion of arrays with different shapes during arithmetic.\n\nRules:\n1. Dimensions compared right-to-left\n2. Sizes must match or one must be 1\n\narr = np.array([[1,2,3]])\narr + 10  # Adds 10 to all elements',
          tags: ['numpy', 'broadcasting']
        },
        {
          id: 'np-3',
          front: 'How do you select rows in Pandas?',
          back: '# By label\ndf.loc[\'row_label\']\ndf.loc[\'a\':\'c\']  # inclusive\n\n# By position\ndf.iloc[0]\ndf.iloc[0:3]  # exclusive\n\n# Boolean\ndf[df[\'col\'] > 5]',
          tags: ['pandas', 'indexing']
        },
        {
          id: 'np-4',
          front: 'How do you handle missing values in Pandas?',
          back: '# Check for missing\ndf.isnull().sum()\n\n# Drop missing\ndf.dropna()\n\n# Fill missing\ndf.fillna(value)\ndf.fillna(df.mean())\ndf.fillna(method=\'ffill\')',
          tags: ['pandas', 'missing-data']
        },
        {
          id: 'np-5',
          front: 'What is the difference between apply, map, and applymap?',
          back: 'map: Series only, element-wise\ndf[\'col\'].map(func)\n\napply: Works on Series or DataFrame\ndf.apply(func, axis=0)  # columns\ndf.apply(func, axis=1)  # rows\n\napplymap: DataFrame only, element-wise\ndf.applymap(func)',
          tags: ['pandas', 'functions']
        },
        {
          id: 'np-6',
          front: 'How do you merge DataFrames?',
          back: '# Merge (SQL-like join)\npd.merge(df1, df2, on=\'key\')\npd.merge(df1, df2, how=\'left\')\n\n# Concat (stack)\npd.concat([df1, df2], axis=0)  # rows\npd.concat([df1, df2], axis=1)  # cols\n\n# Join (on index)\ndf1.join(df2)',
          tags: ['pandas', 'merging']
        }
      ]
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      icon: '🤖',
      cards: [
        {
          id: 'ml-1',
          front: 'What is the bias-variance tradeoff?',
          back: 'Bias: Error from wrong assumptions (underfitting)\nVariance: Error from sensitivity to training data (overfitting)\n\nTotal Error = Bias² + Variance + Noise\n\nGoal: Find the sweet spot that minimizes both.',
          tags: ['ml', 'fundamentals']
        },
        {
          id: 'ml-2',
          front: 'What is cross-validation?',
          back: 'Technique to evaluate model performance by splitting data into multiple folds.\n\nK-Fold: Split into K parts, train on K-1, test on 1, rotate.\n\nBenefits:\n• Uses all data for both training and testing\n• Reduces variance of estimate\n• Detects overfitting',
          tags: ['ml', 'validation']
        },
        {
          id: 'ml-3',
          front: 'What is regularization?',
          back: 'Technique to prevent overfitting by adding penalty for complexity.\n\nL1 (Lasso): |w| penalty → sparse weights\nL2 (Ridge): w² penalty → small weights\nElastic Net: Both L1 + L2\n\nλ controls regularization strength.',
          tags: ['ml', 'regularization']
        },
        {
          id: 'ml-4',
          front: 'What is gradient descent?',
          back: 'Optimization algorithm to minimize loss function.\n\nw = w - α * ∂L/∂w\n\nVariants:\n• Batch: All data per update\n• Stochastic (SGD): One sample\n• Mini-batch: Small batches\n\nα = learning rate',
          tags: ['ml', 'optimization']
        },
        {
          id: 'ml-5',
          front: 'What is the difference between bagging and boosting?',
          back: 'Bagging: Train models in parallel on random subsets, average predictions.\nExample: Random Forest\n\nBoosting: Train models sequentially, each fixing previous errors.\nExample: XGBoost, AdaBoost\n\nBagging reduces variance.\nBoosting reduces bias.',
          tags: ['ml', 'ensemble']
        },
        {
          id: 'ml-6',
          front: 'How do you handle imbalanced classes?',
          back: '1. Resampling:\n   • Oversample minority (SMOTE)\n   • Undersample majority\n\n2. Class weights in loss function\n\n3. Different metrics:\n   • Precision, Recall, F1\n   • AUC-ROC, AUC-PR\n\n4. Threshold tuning',
          tags: ['ml', 'classification']
        },
        {
          id: 'ml-7',
          front: 'What is feature scaling and why is it important?',
          back: 'Transforming features to similar ranges.\n\nStandardization: (x - μ) / σ → mean=0, std=1\nNormalization: (x - min) / (max - min) → [0, 1]\n\nImportant for:\n• Gradient descent convergence\n• Distance-based algorithms (KNN, SVM)\n• Regularization fairness',
          tags: ['ml', 'preprocessing']
        },
        {
          id: 'ml-8',
          front: 'What is the curse of dimensionality?',
          back: 'Problems that arise with high-dimensional data:\n\n1. Data becomes sparse\n2. Distance metrics become meaningless\n3. More features → need exponentially more data\n4. Overfitting more likely\n\nSolutions: PCA, feature selection, regularization',
          tags: ['ml', 'dimensionality']
        }
      ]
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning',
      icon: '🧠',
      cards: [
        {
          id: 'dl-1',
          front: 'What is backpropagation?',
          back: 'Algorithm to compute gradients in neural networks using the chain rule.\n\n1. Forward pass: compute outputs\n2. Compute loss\n3. Backward pass: compute gradients layer by layer\n4. Update weights\n\n∂L/∂w = ∂L/∂a * ∂a/∂z * ∂z/∂w',
          tags: ['dl', 'training']
        },
        {
          id: 'dl-2',
          front: 'What is the vanishing gradient problem?',
          back: 'Gradients become very small in deep networks, preventing learning in early layers.\n\nCauses: Sigmoid/tanh activation (gradients < 1)\n\nSolutions:\n• ReLU activation\n• Batch normalization\n• Skip connections (ResNet)\n• Proper initialization',
          tags: ['dl', 'training']
        },
        {
          id: 'dl-3',
          front: 'What is dropout?',
          back: 'Regularization technique that randomly sets neurons to 0 during training.\n\nnn.Dropout(p=0.5)  # 50% dropout\n\nBenefits:\n• Prevents co-adaptation\n• Ensemble effect\n• Reduces overfitting\n\nNote: Disabled during inference.',
          tags: ['dl', 'regularization']
        },
        {
          id: 'dl-4',
          front: 'What is batch normalization?',
          back: 'Normalizes layer inputs to have mean=0, var=1.\n\nx̂ = (x - μ) / √(σ² + ε)\ny = γx̂ + β  # learnable params\n\nBenefits:\n• Faster training\n• Higher learning rates\n• Reduces internal covariate shift\n• Slight regularization',
          tags: ['dl', 'normalization']
        },
        {
          id: 'dl-5',
          front: 'What is the difference between CNN and RNN?',
          back: 'CNN (Convolutional Neural Network):\n• Spatial patterns\n• Weight sharing via filters\n• Good for images\n\nRNN (Recurrent Neural Network):\n• Sequential patterns\n• Hidden state carries info\n• Good for text, time series\n\nTransformers now often replace RNNs.',
          tags: ['dl', 'architectures']
        },
        {
          id: 'dl-6',
          front: 'What is attention mechanism?',
          back: 'Allows model to focus on relevant parts of input.\n\nAttention(Q, K, V) = softmax(QK^T / √d) * V\n\nQ: Query (what to look for)\nK: Key (what\'s available)\nV: Value (actual content)\n\nSelf-attention: Q, K, V from same input.',
          tags: ['dl', 'transformers']
        },
        {
          id: 'dl-7',
          front: 'What are common optimizers?',
          back: 'SGD: Basic, needs tuning\nSGD+Momentum: Accelerates in consistent direction\n\nAdam: Adaptive learning rates + momentum\n• Most popular default\n• lr=0.001 typically\n\nAdamW: Adam with proper weight decay\nRMSprop: Adaptive, good for RNNs',
          tags: ['dl', 'optimization']
        },
        {
          id: 'dl-8',
          front: 'What is transfer learning?',
          back: 'Using a pre-trained model on a new task.\n\nStrategies:\n1. Feature extraction: Freeze base, train new head\n2. Fine-tuning: Unfreeze some/all layers, train with small lr\n\nWorks because early layers learn general features (edges, textures).',
          tags: ['dl', 'transfer-learning']
        }
      ]
    },
    {
      id: 'nlp',
      title: 'NLP & LLMs',
      icon: '📝',
      cards: [
        {
          id: 'nlp-1',
          front: 'What is tokenization?',
          back: 'Breaking text into smaller units (tokens).\n\nTypes:\n• Word: "Hello world" → ["Hello", "world"]\n• Subword (BPE): "unhappy" → ["un", "happy"]\n• Character: "Hi" → ["H", "i"]\n\nSubword is most common for LLMs (handles OOV).',
          tags: ['nlp', 'preprocessing']
        },
        {
          id: 'nlp-2',
          front: 'What is word embedding?',
          back: 'Dense vector representation of words.\n\nWord2Vec: Predict word from context (CBOW) or context from word (Skip-gram)\n\nGloVe: Based on co-occurrence matrix\n\nProperties:\nking - man + woman ≈ queen',
          tags: ['nlp', 'embeddings']
        },
        {
          id: 'nlp-3',
          front: 'What is a Transformer?',
          back: 'Architecture using self-attention without recurrence.\n\nComponents:\n• Multi-head self-attention\n• Feed-forward layers\n• Positional encoding\n• Layer normalization\n\nEncoder: Bidirectional (BERT)\nDecoder: Autoregressive (GPT)',
          tags: ['nlp', 'transformers']
        },
        {
          id: 'nlp-4',
          front: 'What is the difference between BERT and GPT?',
          back: 'BERT:\n• Encoder-only\n• Bidirectional context\n• Good for understanding\n• Tasks: classification, NER, QA\n\nGPT:\n• Decoder-only\n• Autoregressive (left-to-right)\n• Good for generation\n• Tasks: text generation, chat',
          tags: ['nlp', 'llm']
        },
        {
          id: 'nlp-5',
          front: 'What is prompt engineering?',
          back: 'Designing inputs to get desired outputs from LLMs.\n\nTechniques:\n• Zero-shot: Direct question\n• Few-shot: Include examples\n• Chain-of-thought: "Let\'s think step by step"\n• System prompts: Set behavior\n\nBe specific, provide context, iterate.',
          tags: ['nlp', 'llm', 'prompting']
        },
        {
          id: 'nlp-6',
          front: 'What is RAG (Retrieval Augmented Generation)?',
          back: 'Combining retrieval with generation.\n\n1. User query → embed\n2. Search vector DB for relevant docs\n3. Add docs to prompt context\n4. LLM generates answer using context\n\nBenefits: Reduces hallucination, uses current info.',
          tags: ['nlp', 'llm', 'rag']
        },
        {
          id: 'nlp-7',
          front: 'What is fine-tuning vs prompting?',
          back: 'Prompting:\n• No training, instant\n• Limited by context window\n• Flexible, easy to change\n\nFine-tuning:\n• Requires training data\n• Permanent behavior change\n• Better for specific tasks\n• More expensive\n\nTry prompting first!',
          tags: ['nlp', 'llm']
        }
      ]
    },
    {
      id: 'statistics',
      title: 'Statistics & Probability',
      icon: '📈',
      cards: [
        {
          id: 'stat-1',
          front: 'What is p-value?',
          back: 'Probability of observing results at least as extreme as the data, assuming null hypothesis is true.\n\np < 0.05: Reject null (statistically significant)\np ≥ 0.05: Fail to reject null\n\nNote: p-value ≠ probability that null is true!',
          tags: ['statistics', 'hypothesis-testing']
        },
        {
          id: 'stat-2',
          front: 'What is Bayes\' Theorem?',
          back: 'P(A|B) = P(B|A) * P(A) / P(B)\n\nPosterior = Likelihood × Prior / Evidence\n\nUpdates probability based on new evidence.\n\nExample: Disease testing - probability of disease given positive test.',
          tags: ['statistics', 'probability']
        },
        {
          id: 'stat-3',
          front: 'What is the Central Limit Theorem?',
          back: 'Sample means approach normal distribution as sample size increases, regardless of population distribution.\n\nMean of sample means = population mean\nStd of sample means = σ/√n\n\nRequires n ≥ 30 typically.',
          tags: ['statistics', 'distributions']
        },
        {
          id: 'stat-4',
          front: 'What is Type I vs Type II error?',
          back: 'Type I (False Positive): Rejecting true null\n• Probability = α (significance level)\n• "Crying wolf"\n\nType II (False Negative): Not rejecting false null\n• Probability = β\n• Power = 1 - β\n• "Missing the wolf"',
          tags: ['statistics', 'hypothesis-testing']
        },
        {
          id: 'stat-5',
          front: 'What is correlation vs causation?',
          back: 'Correlation: Variables move together\n• r = -1 to 1\n• Does NOT imply causation\n\nCausation: One variable causes change in another\n• Requires: correlation + time order + no confounders\n• Best proven by randomized experiments',
          tags: ['statistics', 'fundamentals']
        },
        {
          id: 'stat-6',
          front: 'What is A/B testing?',
          back: 'Randomized controlled experiment comparing two variants.\n\nSteps:\n1. Define hypothesis & metric\n2. Calculate sample size needed\n3. Randomly assign users\n4. Run experiment\n5. Analyze with statistical test\n\nWatch for: novelty effect, multiple testing.',
          tags: ['statistics', 'experimentation']
        }
      ]
    }
  ]
};

export default pythonFlashcards;
