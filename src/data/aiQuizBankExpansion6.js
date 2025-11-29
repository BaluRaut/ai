export const aiQuizBankExpansion6 = [
  {
    "id": "dl-advanced-001",
    "question": "In Convolutional Neural Networks (CNNs), what is the primary purpose of the pooling layer?",
    "options": [
      "To increase the spatial dimensions of the feature maps",
      "To reduce the spatial dimensions and computation while retaining important features",
      "To introduce non-linearity into the network",
      "To perform the convolution operation with learnable weights"
    ],
    "correctAnswer": 1,
    "explanation": "Pooling layers (like Max Pooling) downsample the feature maps, reducing their spatial dimensions and the number of parameters, which helps control overfitting and reduces computational cost.",
    "difficulty": "easy",
    "tags": ["Deep Learning", "CNN", "Pooling"]
  },
  {
    "id": "dl-advanced-002",
    "question": "What effect does increasing the 'stride' have on the output feature map in a CNN?",
    "options": [
      "It increases the spatial dimensions of the output",
      "It has no effect on the spatial dimensions",
      "It reduces the spatial dimensions of the output",
      "It increases the depth (number of channels) of the output"
    ],
    "correctAnswer": 2,
    "explanation": "Stride controls how many pixels the filter moves across the input image. A larger stride means the filter skips pixels, resulting in a smaller output feature map.",
    "difficulty": "easy",
    "tags": ["Deep Learning", "CNN", "Stride"]
  },
  {
    "id": "dl-advanced-003",
    "question": "Which technique is used in CNNs to preserve the spatial dimensions of the input volume after convolution?",
    "options": [
      "Stride",
      "Pooling",
      "Padding",
      "Flattening"
    ],
    "correctAnswer": 2,
    "explanation": "Padding (specifically 'same' padding) involves adding zeros around the border of the input, allowing the output feature map to have the same spatial dimensions as the input.",
    "difficulty": "easy",
    "tags": ["Deep Learning", "CNN", "Padding"]
  },
  {
    "id": "dl-advanced-004",
    "question": "What is the key innovation introduced by ResNet (Residual Networks) that allows for training very deep networks?",
    "options": [
      "Inception modules",
      "Skip connections (or residual connections)",
      "Dense connections",
      "Attention mechanisms"
    ],
    "correctAnswer": 1,
    "explanation": "ResNet introduces skip connections that allow gradients to flow through the network more easily during backpropagation, mitigating the vanishing gradient problem in very deep networks.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "CNN", "ResNet"]
  },
  {
    "id": "dl-advanced-005",
    "question": "What is a defining characteristic of the VGG architecture?",
    "options": [
      "Use of very large filters (e.g., 11x11)",
      "Use of inception modules with multiple filter sizes",
      "Exclusive use of small (3x3) convolution filters stacked on top of each other",
      "Use of residual blocks"
    ],
    "correctAnswer": 2,
    "explanation": "VGG is known for its simplicity, using a stack of small 3x3 convolutional filters with stride 1, which mimics the effect of larger receptive fields while keeping the number of parameters lower and adding more non-linearity.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "CNN", "VGG"]
  },
  {
    "id": "dl-advanced-006",
    "question": "In Recurrent Neural Networks (RNNs), what is the primary cause of the 'vanishing gradient' problem?",
    "options": [
      "The use of ReLU activation functions",
      "Repeated multiplication of gradients less than 1 during backpropagation through time",
      "The use of too many hidden layers in a feedforward network",
      "The lack of recurrent connections"
    ],
    "correctAnswer": 1,
    "explanation": "In standard RNNs, gradients are propagated back through many time steps. If the weights or derivatives are small (less than 1), repeated multiplication causes the gradients to shrink exponentially, preventing the network from learning long-term dependencies.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "RNN", "Vanishing Gradient"]
  },
  {
    "id": "dl-advanced-007",
    "question": "Which component of an LSTM (Long Short-Term Memory) unit is responsible for deciding what information to discard from the cell state?",
    "options": [
      "Input gate",
      "Output gate",
      "Forget gate",
      "Update gate"
    ],
    "correctAnswer": 2,
    "explanation": "The forget gate in an LSTM uses a sigmoid layer to decide which information from the previous cell state is no longer relevant and should be removed.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "RNN", "LSTM"]
  },
  {
    "id": "dl-advanced-008",
    "question": "How does a Gated Recurrent Unit (GRU) differ from an LSTM?",
    "options": [
      "GRU has more parameters than LSTM",
      "GRU has separate cell state and hidden state",
      "GRU combines the forget and input gates into a single update gate",
      "GRU cannot handle sequential data"
    ],
    "correctAnswer": 2,
    "explanation": "GRU is a simplified version of LSTM. It merges the cell state and hidden state, and combines the forget and input gates into a single 'update gate', making it computationally more efficient.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "RNN", "GRU"]
  },
  {
    "id": "dl-advanced-009",
    "question": "What is the core mechanism that allows Transformers to handle long-range dependencies better than RNNs?",
    "options": [
      "Recurrent connections",
      "Convolutional filters",
      "Self-Attention mechanism",
      "Max pooling"
    ],
    "correctAnswer": 2,
    "explanation": "The Self-Attention mechanism allows the model to weigh the importance of different words in a sequence relative to each other, regardless of their distance, enabling direct modeling of long-range dependencies.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Transformers", "Attention"]
  },
  {
    "id": "dl-advanced-010",
    "question": "In the context of Transformers, what is the purpose of 'Positional Encoding'?",
    "options": [
      "To encode the semantic meaning of words",
      "To inject information about the order or position of tokens in the sequence",
      "To normalize the input vectors",
      "To reduce the dimensionality of the input"
    ],
    "correctAnswer": 1,
    "explanation": "Since Transformers process the entire sequence in parallel (unlike RNNs which process sequentially), they have no inherent sense of order. Positional encodings are added to the input embeddings to provide information about the relative or absolute position of tokens.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Transformers", "Positional Encoding"]
  },
  {
    "id": "dl-advanced-011",
    "question": "Which Transformer model is primarily designed as a bidirectional encoder for understanding context?",
    "options": [
      "GPT (Generative Pre-trained Transformer)",
      "BERT (Bidirectional Encoder Representations from Transformers)",
      "T5 (Text-to-Text Transfer Transformer)",
      "Seq2Seq"
    ],
    "correctAnswer": 1,
    "explanation": "BERT is designed to pre-train deep bidirectional representations from unlabeled text by conditioning on both left and right context in all layers, making it highly effective for understanding tasks.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Transformers", "BERT"]
  },
  {
    "id": "dl-advanced-012",
    "question": "What is the primary training objective of the GPT (Generative Pre-trained Transformer) family of models?",
    "options": [
      "Masked Language Modeling (predicting missing words)",
      "Next Token Prediction (Autoregressive modeling)",
      "Sentence classification",
      "Translation"
    ],
    "correctAnswer": 1,
    "explanation": "GPT models are trained using a causal language modeling objective, where the model learns to predict the next token in a sequence given the previous tokens.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Transformers", "GPT"]
  },
  {
    "id": "dl-advanced-013",
    "question": "In a Generative Adversarial Network (GAN), what is the goal of the 'Discriminator'?",
    "options": [
      "To generate realistic data samples",
      "To minimize the reconstruction loss",
      "To distinguish between real data and fake data generated by the Generator",
      "To encode the input into a latent space"
    ],
    "correctAnswer": 2,
    "explanation": "The Discriminator is a binary classifier that tries to determine whether a given input is real (from the dataset) or fake (created by the Generator).",
    "difficulty": "easy",
    "tags": ["Deep Learning", "GANs", "Discriminator"]
  },
  {
    "id": "dl-advanced-014",
    "question": "What is the 'Minimax Game' in the context of GAN training?",
    "options": [
      "The Generator tries to minimize the Discriminator's accuracy, while the Discriminator tries to maximize it",
      "Both networks try to minimize the total loss",
      "The Generator tries to maximize the Discriminator's accuracy",
      "The Discriminator tries to minimize the Generator's loss"
    ],
    "correctAnswer": 0,
    "explanation": "GAN training is a zero-sum game where the Generator tries to fool the Discriminator (minimize the probability that the Discriminator is correct), and the Discriminator tries to correctly classify real vs. fake (maximize its accuracy).",
    "difficulty": "hard",
    "tags": ["Deep Learning", "GANs", "Theory"]
  },
  {
    "id": "dl-advanced-015",
    "question": "What is 'Mode Collapse' in GANs?",
    "options": [
      "When the Discriminator becomes too strong and the Generator stops learning",
      "When the Generator produces only a limited variety of outputs (e.g., the same image) regardless of the input noise",
      "When the training loss diverges to infinity",
      "When the latent space becomes sparse"
    ],
    "correctAnswer": 1,
    "explanation": "Mode collapse occurs when the Generator finds a single or few outputs that fool the Discriminator and keeps producing them, failing to capture the diversity of the real data distribution.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "GANs", "Challenges"]
  },
  {
    "id": "dl-advanced-016",
    "question": "In an Autoencoder, what is the 'Latent Space'?",
    "options": [
      "The input layer of the network",
      "The compressed representation of the input data produced by the Encoder",
      "The output layer of the Decoder",
      "The loss function used for training"
    ],
    "correctAnswer": 1,
    "explanation": "The latent space (or bottleneck) is the compressed, lower-dimensional representation of the input data found in the middle of the Autoencoder, containing the most essential features.",
    "difficulty": "easy",
    "tags": ["Deep Learning", "Autoencoders", "Latent Space"]
  },
  {
    "id": "dl-advanced-017",
    "question": "How does a Variational Autoencoder (VAE) differ from a standard Autoencoder?",
    "options": [
      "It uses a different loss function only",
      "It learns a probabilistic distribution (mean and variance) for the latent space instead of a fixed vector",
      "It does not have a Decoder",
      "It is used for supervised learning only"
    ],
    "correctAnswer": 1,
    "explanation": "VAEs impose a probabilistic structure on the latent space. The encoder outputs parameters (mean and variance) of a distribution, from which the latent vector is sampled, enabling generation of new data.",
    "difficulty": "hard",
    "tags": ["Deep Learning", "Autoencoders", "VAE"]
  },
  {
    "id": "dl-advanced-018",
    "question": "What is the 'Reparameterization Trick' in VAEs used for?",
    "options": [
      "To increase the learning rate",
      "To allow backpropagation through the random sampling process",
      "To reduce the size of the latent space",
      "To visualize the decoder output"
    ],
    "correctAnswer": 1,
    "explanation": "Standard backpropagation cannot flow through a random sampling node. The reparameterization trick expresses the random variable as a deterministic function of the parameters and an independent noise source, allowing gradients to flow.",
    "difficulty": "hard",
    "tags": ["Deep Learning", "Autoencoders", "VAE"]
  },
  {
    "id": "dl-advanced-019",
    "question": "In Reinforcement Learning, what is the 'Exploration vs. Exploitation' trade-off?",
    "options": [
      "Choosing between training a larger model or a smaller model",
      "Balancing between trying new actions to find better rewards (exploration) and using known actions to maximize current rewards (exploitation)",
      "Deciding whether to use supervised or unsupervised learning",
      "Balancing the learning rate and batch size"
    ],
    "correctAnswer": 1,
    "explanation": "An agent must explore the environment to discover high-reward strategies but must also exploit its current knowledge to gain rewards. Focusing too much on either leads to suboptimal performance.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Reinforcement Learning", "Concepts"]
  },
  {
    "id": "dl-advanced-020",
    "question": "What does the Q-value represent in Q-Learning?",
    "options": [
      "The immediate reward received after an action",
      "The probability of taking an action",
      "The expected cumulative future reward of taking a specific action in a specific state",
      "The value of the state itself"
    ],
    "correctAnswer": 2,
    "explanation": "The Q-value (Quality value) estimates the total reward an agent can expect to accumulate starting from a given state, taking a specific action, and following the optimal policy thereafter.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Reinforcement Learning", "Q-Learning"]
  },
  {
    "id": "dl-advanced-021",
    "question": "What is the main difference between Policy Gradient methods and Q-Learning?",
    "options": [
      "Policy Gradient methods optimize the policy directly, while Q-Learning learns a value function to derive the policy",
      "Q-Learning works for continuous action spaces, while Policy Gradients do not",
      "Policy Gradients do not use a reward function",
      "There is no difference"
    ],
    "correctAnswer": 0,
    "explanation": "Q-Learning is a value-based method that learns Q-values and selects actions based on them. Policy Gradient methods parameterize the policy itself and update the parameters to maximize expected reward directly.",
    "difficulty": "hard",
    "tags": ["Deep Learning", "Reinforcement Learning", "Policy Gradients"]
  },
  {
    "id": "dl-advanced-022",
    "question": "In Transfer Learning, what is 'Fine-tuning'?",
    "options": [
      "Training a model from scratch on a new dataset",
      "Using a pre-trained model as a fixed feature extractor",
      "Taking a pre-trained model and continuing the training process on a new, specific dataset, often with a lower learning rate",
      "Adjusting the hyperparameters of a model"
    ],
    "correctAnswer": 2,
    "explanation": "Fine-tuning involves taking a model trained on a large dataset (source) and updating its weights (often just the later layers or all layers slightly) on a smaller, task-specific dataset (target).",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Transfer Learning", "Fine-tuning"]
  },
  {
    "id": "dl-advanced-023",
    "question": "When is Transfer Learning most beneficial?",
    "options": [
      "When you have a massive amount of labeled data for your specific task",
      "When you have a small amount of labeled data for your task, but a related large dataset exists",
      "When the source and target domains are completely unrelated",
      "When computational resources are unlimited"
    ],
    "correctAnswer": 1,
    "explanation": "Transfer learning leverages features learned from a large dataset to improve performance on a related task where data is scarce, preventing overfitting and speeding up convergence.",
    "difficulty": "easy",
    "tags": ["Deep Learning", "Transfer Learning", "Strategy"]
  },
  {
    "id": "dl-advanced-024",
    "question": "What is 'Few-Shot Learning' in the context of Meta-Learning?",
    "options": [
      "Training a model for only a few epochs",
      "Learning to classify new categories given only a few examples of each",
      "Using a very small neural network",
      "Training with a small batch size"
    ],
    "correctAnswer": 1,
    "explanation": "Few-Shot Learning aims to create models that can generalize to new tasks or classes containing only a handful of training examples, mimicking human learning ability.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Meta-Learning", "Few-Shot"]
  },
  {
    "id": "dl-advanced-025",
    "question": "What is the core idea behind Self-Supervised Learning?",
    "options": [
      "Using human-annotated labels for all data",
      "Generating labels from the data itself using pretext tasks to learn representations",
      "Learning without any data",
      "Using reinforcement learning rewards"
    ],
    "correctAnswer": 1,
    "explanation": "Self-Supervised Learning utilizes unlabeled data by creating 'pretext' tasks (like predicting the next word, or image rotation) where the labels are derived from the data structure itself, allowing the model to learn useful features.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Self-Supervised Learning", "Concepts"]
  },
  {
    "id": "dl-advanced-026",
    "question": "Which of the following is a common pretext task in Computer Vision for self-supervised learning?",
    "options": [
      "Predicting the class label (e.g., cat vs dog)",
      "Predicting the rotation angle of an image",
      "Bounding box regression",
      "Semantic segmentation"
    ],
    "correctAnswer": 1,
    "explanation": "Predicting the rotation (e.g., 0, 90, 180, 270 degrees) is a common pretext task. The model must understand the content and orientation of objects to solve it, learning semantic features in the process.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Self-Supervised Learning", "Computer Vision"]
  },
  {
    "id": "dl-advanced-027",
    "question": "What is 'Contrastive Learning'?",
    "options": [
      "Learning to contrast bright and dark pixels",
      "Learning representations by pulling positive pairs (similar data) close and pushing negative pairs (dissimilar data) apart",
      "Comparing the performance of two different models",
      "A method for image enhancement"
    ],
    "correctAnswer": 1,
    "explanation": "Contrastive learning (e.g., SimCLR) learns an embedding space where similar samples (e.g., augmentations of the same image) are close together, and dissimilar samples are far apart.",
    "difficulty": "hard",
    "tags": ["Deep Learning", "Self-Supervised Learning", "Contrastive Learning"]
  },
  {
    "id": "dl-advanced-028",
    "question": "In the context of CNNs, what is a '1x1 Convolution' often used for?",
    "options": [
      "To increase the spatial dimensions",
      "To reduce the number of channels (dimensionality reduction) and add non-linearity",
      "It has no practical use",
      "To perform blurring"
    ],
    "correctAnswer": 1,
    "explanation": "1x1 convolutions are used to change the depth of the feature maps (number of channels) without changing spatial dimensions. They are computationally efficient for dimensionality reduction and adding non-linearity.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "CNN", "Architecture"]
  },
  {
    "id": "dl-advanced-029",
    "question": "What is the 'Receptive Field' in a CNN?",
    "options": [
      "The total number of neurons in the network",
      "The region of the input image that a particular feature map neuron is looking at",
      "The size of the output layer",
      "The range of values the activation function can output"
    ],
    "correctAnswer": 1,
    "explanation": "The receptive field is the specific area of the input image that influences the value of a specific neuron in a deeper layer. It grows as you go deeper into the network.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "CNN", "Concepts"]
  },
  {
    "id": "dl-advanced-030",
    "question": "Which normalization technique normalizes the inputs across the features for each sample independently?",
    "options": [
      "Batch Normalization",
      "Layer Normalization",
      "Group Normalization",
      "Weight Normalization"
    ],
    "correctAnswer": 1,
    "explanation": "Layer Normalization computes the mean and variance used for normalization from all of the summed inputs to the neurons in a layer on a single training case. It is commonly used in RNNs and Transformers.",
    "difficulty": "hard",
    "tags": ["Deep Learning", "Normalization", "Concepts"]
  },
  {
    "id": "dl-advanced-031",
    "question": "In Attention mechanisms, what are 'Query', 'Key', and 'Value' vectors derived from?",
    "options": [
      "They are fixed external vectors",
      "They are learned projections of the input embeddings",
      "They are random noise vectors",
      "They are the outputs of the final layer"
    ],
    "correctAnswer": 1,
    "explanation": "In self-attention, the input vector for each token is multiplied by three learned weight matrices to produce the Query, Key, and Value vectors for that token.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Transformers", "Attention"]
  },
  {
    "id": "dl-advanced-032",
    "question": "What is the advantage of 'Multi-Head Attention' over single-head attention?",
    "options": [
      "It reduces the computational cost",
      "It allows the model to jointly attend to information from different representation subspaces at different positions",
      "It removes the need for positional encodings",
      "It guarantees convergence"
    ],
    "correctAnswer": 1,
    "explanation": "Multi-head attention runs the attention mechanism multiple times in parallel. This allows the model to capture different types of relationships (e.g., syntactic vs. semantic) simultaneously.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Transformers", "Attention"]
  },
  {
    "id": "dl-advanced-033",
    "question": "What is the 'Encoder-Decoder' architecture typically used for?",
    "options": [
      "Image classification",
      "Sequence-to-Sequence tasks like Machine Translation",
      "Simple regression",
      "Clustering"
    ],
    "correctAnswer": 1,
    "explanation": "The Encoder processes the input sequence into a context vector (or representations), and the Decoder generates the output sequence from that context. This is standard for translation, summarization, etc.",
    "difficulty": "easy",
    "tags": ["Deep Learning", "Transformers", "Architecture"]
  },
  {
    "id": "dl-advanced-034",
    "question": "In GANs, what is the 'Wasserstein Loss' (WGAN) designed to fix?",
    "options": [
      "Slow training speed",
      "Vanishing gradients and mode collapse by providing a smoother distance metric between distributions",
      "Overfitting of the discriminator",
      "High memory usage"
    ],
    "correctAnswer": 1,
    "explanation": "Standard GAN loss can lead to vanishing gradients when the discriminator is too good. Wasserstein loss uses the Earth Mover's distance, providing meaningful gradients even when the real and fake distributions don't overlap.",
    "difficulty": "hard",
    "tags": ["Deep Learning", "GANs", "Advanced"]
  },
  {
    "id": "dl-advanced-035",
    "question": "What is a 'Denoising Autoencoder'?",
    "options": [
      "An autoencoder that removes noise from audio",
      "An autoencoder trained to reconstruct the original input from a corrupted (noisy) version of it",
      "An autoencoder with no hidden layers",
      "An autoencoder used for compression only"
    ],
    "correctAnswer": 1,
    "explanation": "Denoising Autoencoders are trained by adding noise to the input image and forcing the network to output the clean original image. This forces the model to learn robust features rather than just copying the input.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Autoencoders", "Variants"]
  },
  {
    "id": "dl-advanced-036",
    "question": "In Reinforcement Learning, what is a 'Policy'?",
    "options": [
      "The reward function",
      "The environment rules",
      "The strategy or mapping from states to actions that the agent follows",
      "The memory buffer"
    ],
    "correctAnswer": 2,
    "explanation": "A policy defines the agent's behavior. It maps a given state of the environment to an action (deterministic) or a probability distribution over actions (stochastic).",
    "difficulty": "easy",
    "tags": ["Deep Learning", "Reinforcement Learning", "Concepts"]
  },
  {
    "id": "dl-advanced-037",
    "question": "What is the role of the 'Discount Factor' (gamma) in Reinforcement Learning?",
    "options": [
      "To reduce the learning rate over time",
      "To determine the importance of future rewards relative to immediate rewards",
      "To discount the price of computation",
      "To normalize the state vectors"
    ],
    "correctAnswer": 1,
    "explanation": "The discount factor (between 0 and 1) determines how much the agent cares about future rewards. A value close to 0 makes the agent myopic (greedy), while close to 1 makes it far-sighted.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Reinforcement Learning", "Concepts"]
  },
  {
    "id": "dl-advanced-038",
    "question": "What is 'Experience Replay' in Deep Q-Networks (DQN)?",
    "options": [
      "Replaying the game for the user",
      "Storing past experiences (state, action, reward, next state) in a buffer and sampling random batches for training",
      "Repeating the same action multiple times",
      "Visualizing the agent's path"
    ],
    "correctAnswer": 1,
    "explanation": "Experience Replay breaks the correlation between consecutive samples in RL training (which can destabilize training) by sampling random experiences from a memory buffer.",
    "difficulty": "hard",
    "tags": ["Deep Learning", "Reinforcement Learning", "DQN"]
  },
  {
    "id": "dl-advanced-039",
    "question": "In Transfer Learning, what is 'Feature Extraction'?",
    "options": [
      "Manually selecting features from data",
      "Using the convolutional base of a pre-trained network to extract features from new data, then training a new classifier on top",
      "Extracting the weights from the model",
      "Visualizing the filters"
    ],
    "correctAnswer": 1,
    "explanation": "Feature extraction involves freezing the weights of a pre-trained model's feature extraction layers (e.g., CNN base) and only training a new classifier head for the specific task.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Transfer Learning", "Feature Extraction"]
  },
  {
    "id": "dl-advanced-040",
    "question": "What is 'MAML' (Model-Agnostic Meta-Learning)?",
    "options": [
      "A specific architecture for image recognition",
      "An algorithm that learns a good initialization of parameters so that the model can adapt to a new task with few gradient steps",
      "A type of reinforcement learning environment",
      "A data augmentation technique"
    ],
    "correctAnswer": 1,
    "explanation": "MAML optimizes for an initial set of parameters that are sensitive to task changes, such that small updates on a new task lead to large improvements in the loss function.",
    "difficulty": "hard",
    "tags": ["Deep Learning", "Meta-Learning", "MAML"]
  },
  {
    "id": "dl-advanced-041",
    "question": "Which architecture is commonly associated with 'Seq2Seq' models for translation?",
    "options": [
      "Single CNN",
      "Encoder-Decoder RNNs (or Transformers)",
      "Standard Feedforward Network",
      "GANs"
    ],
    "correctAnswer": 1,
    "explanation": "Seq2Seq (Sequence to Sequence) models typically use an Encoder to process the input language and a Decoder to generate the output language. Historically RNNs were used; now Transformers are dominant.",
    "difficulty": "easy",
    "tags": ["Deep Learning", "NLP", "Architecture"]
  },
  {
    "id": "dl-advanced-042",
    "question": "What is the 'Global Average Pooling' layer often used for in modern CNNs?",
    "options": [
      "To replace the fully connected layers at the end of the network to reduce parameters",
      "To increase the resolution of the image",
      "To perform data augmentation",
      "To normalize the batch"
    ],
    "correctAnswer": 0,
    "explanation": "Global Average Pooling takes the average of each feature map, converting a tensor of shape (H, W, C) to (1, 1, C). It replaces dense layers, drastically reducing parameters and preventing overfitting.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "CNN", "Pooling"]
  },
  {
    "id": "dl-advanced-043",
    "question": "What is the 'Teacher Forcing' technique in RNN training?",
    "options": [
      "Using a pre-trained teacher model to guide the student",
      "Feeding the actual ground truth output from the previous time step as input to the current step, instead of the model's own prediction",
      "Forcing the model to learn faster",
      "Using a higher learning rate"
    ],
    "correctAnswer": 1,
    "explanation": "Teacher forcing stabilizes and speeds up training by supplying the correct previous token during training, preventing errors from compounding early in the sequence.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "RNN", "Training"]
  },
  {
    "id": "dl-advanced-044",
    "question": "In the context of BERT, what does the '[CLS]' token represent?",
    "options": [
      "The end of a sentence",
      "A special classification token whose final hidden state is used as the aggregate sequence representation",
      "A padding token",
      "A masked token"
    ],
    "correctAnswer": 1,
    "explanation": "The [CLS] token is added to the start of every input sequence in BERT. For classification tasks, the final hidden state corresponding to this token is used as the input to the classifier.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Transformers", "BERT"]
  },
  {
    "id": "dl-advanced-045",
    "question": "What is 'Neural Architecture Search' (NAS)?",
    "options": [
      "Searching for images on the web",
      "The process of automating the design of neural network architectures",
      "Searching for weights in a fixed architecture",
      "A search engine built with neural networks"
    ],
    "correctAnswer": 1,
    "explanation": "NAS uses algorithms (like RL or evolutionary algorithms) to automatically discover the best performing neural network structure for a given task, rather than designing it manually.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "AutoML", "NAS"]
  },
  {
    "id": "dl-advanced-046",
    "question": "What is the 'Actor-Critic' method in Reinforcement Learning?",
    "options": [
      "A method where two agents play against each other",
      "A hybrid method where the 'Actor' learns the policy and the 'Critic' learns the value function to evaluate the action",
      "A method used only for movie reviews",
      "A supervised learning technique"
    ],
    "correctAnswer": 1,
    "explanation": "Actor-Critic methods combine the benefits of policy-based (Actor) and value-based (Critic) methods. The Critic estimates the value function to help reduce the variance of the Actor's policy updates.",
    "difficulty": "hard",
    "tags": ["Deep Learning", "Reinforcement Learning", "Actor-Critic"]
  },
  {
    "id": "dl-advanced-047",
    "question": "What is 'Catastrophic Forgetting' in neural networks?",
    "options": [
      "When the model forgets the training data after saving",
      "The tendency of a neural network to completely forget previously learned information upon learning new information",
      "When the gradient becomes zero",
      "When the model runs out of memory"
    ],
    "correctAnswer": 1,
    "explanation": "This is a major challenge in continual learning. When a network is trained sequentially on Task A and then Task B, the weights change to optimize for B, often destroying the configuration that solved A.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Challenges", "Continual Learning"]
  },
  {
    "id": "dl-advanced-048",
    "question": "In Vision Transformers (ViT), how are images processed?",
    "options": [
      "Pixel by pixel sequentially",
      "Using standard convolutional layers only",
      "By splitting the image into fixed-size patches, flattening them, and treating them as a sequence of tokens",
      "By converting them to grayscale first"
    ],
    "correctAnswer": 2,
    "explanation": "ViT applies the pure Transformer architecture to images by dividing the image into patches (e.g., 16x16 pixels), linearly embedding them, and feeding them into the Transformer encoder.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Transformers", "Vision"]
  },
  {
    "id": "dl-advanced-049",
    "question": "What is the primary advantage of 'Depthwise Separable Convolution' (e.g., in MobileNets)?",
    "options": [
      "Higher accuracy than standard convolution",
      "Significantly reduced computational cost and number of parameters",
      "Ability to handle 3D data",
      "No need for activation functions"
    ],
    "correctAnswer": 1,
    "explanation": "It splits the standard convolution into two steps: a depthwise convolution (filtering inputs) and a pointwise convolution (combining outputs). This drastically reduces the multiplication operations required.",
    "difficulty": "hard",
    "tags": ["Deep Learning", "CNN", "Efficiency"]
  },
  {
    "id": "dl-advanced-050",
    "question": "What is 'Knowledge Distillation'?",
    "options": [
      "Extracting rules from a neural network",
      "Transferring knowledge from a large, complex model (Teacher) to a smaller, faster model (Student)",
      "Cleaning the dataset",
      "Summarizing text"
    ],
    "correctAnswer": 1,
    "explanation": "Knowledge Distillation trains a small student model to reproduce the output (soft targets) of a large teacher model (or ensemble), allowing the small model to perform better than if trained on raw labels alone.",
    "difficulty": "medium",
    "tags": ["Deep Learning", "Model Compression", "Distillation"]
  }
];
