export const aiExpansion3 = [
  {
    "id": "cv-rl-001",
    "question": "What is the primary innovation introduced by ResNet (Residual Networks) that enables the training of very deep neural networks?",
    "options": [
      "Inception modules",
      "Skip connections (Residual blocks)",
      "Depthwise separable convolutions",
      "Global average pooling"
    ],
    "correctAnswer": 1,
    "explanation": "ResNet introduced skip connections (or shortcut connections) that allow gradients to flow more easily during backpropagation, mitigating the vanishing gradient problem in deep networks.",
    "difficulty": "medium",
    "tags": ["CV", "CNN", "ResNet"]
  },
  {
    "id": "cv-rl-002",
    "question": "Which characteristic defines the VGG architecture?",
    "options": [
      "Use of large 7x7 filters",
      "Use of inception modules",
      "Exclusive use of small 3x3 convolutional filters",
      "Use of residual blocks"
    ],
    "correctAnswer": 2,
    "explanation": "VGG is characterized by its simplicity, using only 3x3 convolutional layers stacked on top of each other in increasing depth.",
    "difficulty": "easy",
    "tags": ["CV", "CNN", "VGG"]
  },
  {
    "id": "cv-rl-003",
    "question": "What is the main concept behind the Inception module in GoogleNet?",
    "options": [
      "Using residual connections",
      "Multi-scale processing using different filter sizes in parallel",
      "Using depthwise separable convolutions",
      "Using attention mechanisms"
    ],
    "correctAnswer": 1,
    "explanation": "The Inception module applies convolutions with different kernel sizes (1x1, 3x3, 5x5) in parallel to capture features at multiple scales simultaneously.",
    "difficulty": "medium",
    "tags": ["CV", "CNN", "Inception"]
  },
  {
    "id": "cv-rl-004",
    "question": "Which technique does MobileNet use to significantly reduce computational cost and model size?",
    "options": [
      "Dilated convolutions",
      "Depthwise separable convolutions",
      "Transposed convolutions",
      "3D convolutions"
    ],
    "correctAnswer": 1,
    "explanation": "MobileNet uses depthwise separable convolutions, which split the standard convolution into a depthwise convolution and a pointwise convolution, drastically reducing parameters.",
    "difficulty": "medium",
    "tags": ["CV", "CNN", "MobileNet"]
  },
  {
    "id": "cv-rl-005",
    "question": "What is the primary purpose of a pooling layer in a CNN?",
    "options": [
      "To increase the depth of the feature maps",
      "To introduce non-linearity",
      "To reduce spatial dimensions and computation",
      "To normalize the input data"
    ],
    "correctAnswer": 2,
    "explanation": "Pooling layers (like Max Pooling) reduce the spatial dimensions (width and height) of the input volume, reducing the number of parameters and computation in the network.",
    "difficulty": "easy",
    "tags": ["CV", "CNN", "Pooling"]
  },
  {
    "id": "cv-rl-006",
    "question": "What does YOLO stand for in the context of object detection?",
    "options": [
      "You Only Look Once",
      "Your Object Location Output",
      "Yielding Object Location Optimization",
      "Yearly Object Learning Objective"
    ],
    "correctAnswer": 0,
    "explanation": "YOLO stands for 'You Only Look Once', referring to its ability to predict bounding boxes and class probabilities in a single evaluation of the network.",
    "difficulty": "easy",
    "tags": ["CV", "Object Detection", "YOLO"]
  },
  {
    "id": "cv-rl-007",
    "question": "What was the main performance bottleneck of the original R-CNN architecture?",
    "options": [
      "Low accuracy",
      "Slow inference due to independent processing of thousands of region proposals",
      "Inability to detect small objects",
      "Lack of GPU support"
    ],
    "correctAnswer": 1,
    "explanation": "R-CNN was slow because it ran a CNN independently on around 2000 region proposals for every image, leading to redundant computations.",
    "difficulty": "medium",
    "tags": ["CV", "Object Detection", "R-CNN"]
  },
  {
    "id": "cv-rl-008",
    "question": "How does SSD (Single Shot MultiBox Detector) differ from Faster R-CNN?",
    "options": [
      "SSD uses a Region Proposal Network (RPN)",
      "SSD is a two-stage detector",
      "SSD eliminates the region proposal step and detects objects in a single pass",
      "SSD is slower but more accurate"
    ],
    "correctAnswer": 2,
    "explanation": "SSD is a one-stage detector that predicts bounding boxes and classes directly from feature maps in a single pass, unlike the two-stage Faster R-CNN.",
    "difficulty": "medium",
    "tags": ["CV", "Object Detection", "SSD"]
  },
  {
    "id": "cv-rl-009",
    "question": "What metric is commonly used to evaluate the overlap between a predicted bounding box and the ground truth?",
    "options": [
      "Mean Squared Error (MSE)",
      "Intersection over Union (IoU)",
      "Cross Entropy Loss",
      "Accuracy"
    ],
    "correctAnswer": 1,
    "explanation": "Intersection over Union (IoU) measures the overlap between two bounding boxes. It is calculated as the area of overlap divided by the area of union.",
    "difficulty": "easy",
    "tags": ["CV", "Object Detection", "Metrics"]
  },
  {
    "id": "cv-rl-010",
    "question": "What are 'Anchor Boxes' in object detection?",
    "options": [
      "Boxes used to anchor the model to the GPU",
      "Pre-defined boxes of specific aspect ratios and scales used as references for prediction",
      "The final output boxes of the network",
      "Boxes used for data augmentation"
    ],
    "correctAnswer": 1,
    "explanation": "Anchor boxes are pre-defined bounding boxes of different sizes and aspect ratios that serve as reference templates for the network to predict offsets against.",
    "difficulty": "medium",
    "tags": ["CV", "Object Detection"]
  },
  {
    "id": "cv-rl-011",
    "question": "In which domain was the U-Net architecture originally developed and popularized?",
    "options": [
      "Autonomous driving",
      "Face recognition",
      "Biomedical image segmentation",
      "Satellite imagery analysis"
    ],
    "correctAnswer": 2,
    "explanation": "U-Net was developed for biomedical image segmentation, specifically for segmenting neuronal structures in electron microscopic stacks.",
    "difficulty": "easy",
    "tags": ["CV", "Segmentation", "U-Net"]
  },
  {
    "id": "cv-rl-012",
    "question": "What additional output does Mask R-CNN provide compared to Faster R-CNN?",
    "options": [
      "Depth map",
      "Pixel-level segmentation mask for each object",
      "3D bounding box",
      "Optical flow"
    ],
    "correctAnswer": 1,
    "explanation": "Mask R-CNN extends Faster R-CNN by adding a parallel branch for predicting an object mask (segmentation) in alignment with the existing branch for bounding box recognition.",
    "difficulty": "medium",
    "tags": ["CV", "Segmentation", "Mask R-CNN"]
  },
  {
    "id": "cv-rl-013",
    "question": "What is the key difference between Semantic Segmentation and Instance Segmentation?",
    "options": [
      "Semantic segmentation is faster",
      "Instance segmentation distinguishes between different objects of the same class",
      "Semantic segmentation uses bounding boxes",
      "Instance segmentation only works on video"
    ],
    "correctAnswer": 1,
    "explanation": "Semantic segmentation treats all pixels of the same class (e.g., all cars) as one label. Instance segmentation identifies each individual object (e.g., car #1, car #2) separately.",
    "difficulty": "medium",
    "tags": ["CV", "Segmentation"]
  },
  {
    "id": "cv-rl-014",
    "question": "What is the role of the 'decoder' part in an encoder-decoder segmentation network?",
    "options": [
      "To extract features",
      "To classify the image",
      "To upsample feature maps back to the original image resolution",
      "To reduce noise"
    ],
    "correctAnswer": 2,
    "explanation": "The decoder takes the compressed feature representation from the encoder and upsamples it to reconstruct the spatial dimensions for pixel-wise classification.",
    "difficulty": "medium",
    "tags": ["CV", "Segmentation"]
  },
  {
    "id": "cv-rl-015",
    "question": "Why are skip connections used between the encoder and decoder in U-Net?",
    "options": [
      "To speed up training",
      "To recover fine-grained spatial information lost during downsampling",
      "To reduce the number of parameters",
      "To prevent overfitting"
    ],
    "correctAnswer": 1,
    "explanation": "Skip connections concatenate high-resolution features from the encoder with the upsampled features in the decoder, helping to localize features precisely.",
    "difficulty": "medium",
    "tags": ["CV", "Segmentation", "U-Net"]
  },
  {
    "id": "cv-rl-016",
    "question": "Which operator is commonly used for edge detection in image processing?",
    "options": [
      "Gaussian operator",
      "Sobel operator",
      "Mean filter",
      "Median filter"
    ],
    "correctAnswer": 1,
    "explanation": "The Sobel operator is a discrete differentiation operator used to compute an approximation of the gradient of the image intensity function, highlighting edges.",
    "difficulty": "easy",
    "tags": ["CV", "Image Processing"]
  },
  {
    "id": "cv-rl-017",
    "question": "What is the primary effect of applying a Gaussian blur to an image?",
    "options": [
      "Sharpening edges",
      "Increasing contrast",
      "Smoothing and noise reduction",
      "Detecting corners"
    ],
    "correctAnswer": 2,
    "explanation": "Gaussian blur acts as a low-pass filter, smoothing the image and reducing high-frequency noise.",
    "difficulty": "easy",
    "tags": ["CV", "Image Processing"]
  },
  {
    "id": "cv-rl-018",
    "question": "What is the purpose of Histogram Equalization?",
    "options": [
      "To reduce image size",
      "To enhance image contrast",
      "To change the color space",
      "To blur the image"
    ],
    "correctAnswer": 1,
    "explanation": "Histogram equalization adjusts the intensity distribution of an image to enhance contrast, making details more visible in over- or under-exposed areas.",
    "difficulty": "medium",
    "tags": ["CV", "Image Processing"]
  },
  {
    "id": "cv-rl-019",
    "question": "In image processing, what is a convolution kernel?",
    "options": [
      "The central pixel of an image",
      "A small matrix of weights used to extract features or apply effects",
      "The operating system core",
      "A type of image file format"
    ],
    "correctAnswer": 1,
    "explanation": "A kernel (or filter) is a small matrix that slides over the image, performing element-wise multiplication and sum to apply effects like blurring, sharpening, or edge detection.",
    "difficulty": "easy",
    "tags": ["CV", "Image Processing"]
  },
  {
    "id": "cv-rl-020",
    "question": "Which color space is often preferred in image processing because it separates luminance (brightness) from chrominance (color)?",
    "options": [
      "RGB",
      "CMYK",
      "YCbCr (or LAB/HSV)",
      "Grayscale"
    ],
    "correctAnswer": 2,
    "explanation": "Spaces like YCbCr, LAB, or HSV separate the intensity (Luminance/Value) from the color information, which is useful for lighting-invariant processing.",
    "difficulty": "medium",
    "tags": ["CV", "Image Processing"]
  },
  {
    "id": "cv-rl-021",
    "question": "How does a Vision Transformer (ViT) process an input image?",
    "options": [
      "Pixel by pixel",
      "By splitting it into fixed-size patches",
      "Using sliding windows",
      "Using 3D convolutions"
    ],
    "correctAnswer": 1,
    "explanation": "ViT splits the image into a sequence of fixed-size patches (e.g., 16x16 pixels), flattens them, and treats them as tokens similar to words in NLP.",
    "difficulty": "medium",
    "tags": ["CV", "Vision Transformers"]
  },
  {
    "id": "cv-rl-022",
    "question": "Why are positional embeddings necessary in Vision Transformers?",
    "options": [
      "To increase model capacity",
      "Because the self-attention mechanism is permutation-invariant",
      "To reduce overfitting",
      "To handle color information"
    ],
    "correctAnswer": 1,
    "explanation": "Unlike CNNs, standard Transformers have no inherent notion of order or spatial relationships. Positional embeddings are added to give the model information about the location of each patch.",
    "difficulty": "hard",
    "tags": ["CV", "Vision Transformers"]
  },
  {
    "id": "cv-rl-023",
    "question": "What mechanism allows a Vision Transformer to focus on different parts of an image globally?",
    "options": [
      "Max Pooling",
      "Self-Attention",
      "Convolution",
      "Dropout"
    ],
    "correctAnswer": 1,
    "explanation": "Self-attention allows every patch to attend to every other patch in the image, enabling the model to capture global dependencies.",
    "difficulty": "medium",
    "tags": ["CV", "Vision Transformers"]
  },
  {
    "id": "cv-rl-024",
    "question": "What is the purpose of the [CLS] token in a standard ViT architecture?",
    "options": [
      "To mark the end of the sequence",
      "To aggregate information for the final classification task",
      "To store the class labels",
      "To initialize the weights"
    ],
    "correctAnswer": 1,
    "explanation": "A learnable [CLS] token is prepended to the sequence of patches. The state of this token at the output of the Transformer encoder serves as the image representation for classification.",
    "difficulty": "medium",
    "tags": ["CV", "Vision Transformers"]
  },
  {
    "id": "cv-rl-025",
    "question": "What is a key difference in 'inductive bias' between CNNs and ViTs?",
    "options": [
      "ViTs have stronger inductive bias for locality",
      "CNNs have built-in translation invariance and locality; ViTs do not",
      "CNNs require more data to train than ViTs",
      "ViTs cannot handle color images"
    ],
    "correctAnswer": 1,
    "explanation": "CNNs are designed with biases for locality (pixels near each other matter) and translation invariance. ViTs lack these strong biases, which allows them to be more flexible but often requires more data to learn these patterns.",
    "difficulty": "hard",
    "tags": ["CV", "Vision Transformers"]
  },
  {
    "id": "cv-rl-026",
    "question": "In Reinforcement Learning, what is the entity that interacts with the environment and takes actions?",
    "options": [
      "The Critic",
      "The Agent",
      "The Policy",
      "The State"
    ],
    "correctAnswer": 1,
    "explanation": "The Agent is the learner and decision-maker in the RL framework.",
    "difficulty": "easy",
    "tags": ["RL", "Concepts"]
  },
  {
    "id": "cv-rl-027",
    "question": "What signal does the environment provide to the agent to evaluate the quality of an action?",
    "options": [
      "State",
      "Observation",
      "Reward",
      "Gradient"
    ],
    "correctAnswer": 2,
    "explanation": "The Reward is a scalar feedback signal that indicates how well the agent is performing at a given step.",
    "difficulty": "easy",
    "tags": ["RL", "Concepts"]
  },
  {
    "id": "cv-rl-028",
    "question": "What defines the agent's behavior, mapping states to actions?",
    "options": [
      "Value Function",
      "Model",
      "Policy",
      "Reward Function"
    ],
    "correctAnswer": 2,
    "explanation": "A Policy (often denoted as pi) defines the agent's way of behaving at a given time, mapping perceived states to actions to be taken.",
    "difficulty": "easy",
    "tags": ["RL", "Concepts"]
  },
  {
    "id": "cv-rl-029",
    "question": "What does the Value Function estimate in RL?",
    "options": [
      "The immediate reward",
      "The expected cumulative future reward",
      "The probability of taking an action",
      "The next state"
    ],
    "correctAnswer": 1,
    "explanation": "The Value Function estimates the long-term return (expected cumulative discounted reward) starting from a particular state.",
    "difficulty": "medium",
    "tags": ["RL", "Concepts"]
  },
  {
    "id": "cv-rl-030",
    "question": "What property must a system satisfy to be considered a Markov Decision Process (MDP)?",
    "options": [
      "The future depends on the entire history",
      "The future depends only on the current state and action, not the past",
      "The environment must be deterministic",
      "The state space must be continuous"
    ],
    "correctAnswer": 1,
    "explanation": "The Markov Property states that the future is independent of the past given the present. The current state captures all relevant information from the history.",
    "difficulty": "medium",
    "tags": ["RL", "MDP"]
  },
  {
    "id": "cv-rl-031",
    "question": "Is Q-Learning considered an on-policy or off-policy algorithm?",
    "options": [
      "On-policy",
      "Off-policy",
      "Neither",
      "Both"
    ],
    "correctAnswer": 1,
    "explanation": "Q-Learning is off-policy because it learns the value of the optimal policy independently of the agent's actions (which might be exploratory).",
    "difficulty": "medium",
    "tags": ["RL", "Algorithms", "Q-Learning"]
  },
  {
    "id": "cv-rl-032",
    "question": "What technique does Deep Q-Network (DQN) use to break correlations between consecutive samples?",
    "options": [
      "Dropout",
      "Experience Replay",
      "Batch Normalization",
      "Gradient Clipping"
    ],
    "correctAnswer": 1,
    "explanation": "Experience Replay stores transitions in a buffer and samples a random batch for training, breaking the temporal correlation between consecutive experiences.",
    "difficulty": "medium",
    "tags": ["RL", "Algorithms", "DQN"]
  },
  {
    "id": "cv-rl-033",
    "question": "What is the 'epsilon-greedy' strategy used for?",
    "options": [
      "Calculating the loss",
      "Balancing exploration and exploitation",
      "Updating the weights",
      "Initializing the network"
    ],
    "correctAnswer": 1,
    "explanation": "Epsilon-greedy is a simple method where the agent explores (picks a random action) with probability epsilon and exploits (picks the best known action) with probability 1-epsilon.",
    "difficulty": "easy",
    "tags": ["RL", "Exploration"]
  },
  {
    "id": "cv-rl-034",
    "question": "What is the role of the discount factor (gamma) in the return calculation?",
    "options": [
      "To increase the learning rate",
      "To determine the importance of future rewards relative to immediate rewards",
      "To normalize the rewards",
      "To prevent division by zero"
    ],
    "correctAnswer": 1,
    "explanation": "The discount factor (0 <= gamma <= 1) determines how much the agent cares about rewards in the distant future. A gamma close to 0 makes the agent myopic; close to 1 makes it far-sighted.",
    "difficulty": "medium",
    "tags": ["RL", "Concepts"]
  },
  {
    "id": "cv-rl-035",
    "question": "What distinguishes Model-Based RL from Model-Free RL?",
    "options": [
      "Model-Based RL uses a neural network",
      "Model-Based RL learns or uses a model of the environment's dynamics (transitions and rewards)",
      "Model-Free RL requires a simulator",
      "Model-Based RL is always faster"
    ],
    "correctAnswer": 1,
    "explanation": "Model-Based RL involves learning or having access to the transition function T(s,a,s') and reward function R(s,a), allowing for planning.",
    "difficulty": "medium",
    "tags": ["RL", "Concepts"]
  },
  {
    "id": "cv-rl-036",
    "question": "What is a main advantage of Policy Gradient methods over Value-based methods like DQN?",
    "options": [
      "They are more sample efficient",
      "They can naturally handle continuous action spaces and stochastic policies",
      "They are easier to debug",
      "They guarantee a global optimum"
    ],
    "correctAnswer": 1,
    "explanation": "Policy Gradient methods optimize the policy directly, making them suitable for high-dimensional or continuous action spaces where finding the max Q-value is difficult.",
    "difficulty": "hard",
    "tags": ["RL", "Algorithms", "Policy Gradients"]
  },
  {
    "id": "cv-rl-037",
    "question": "In Actor-Critic methods, what is the role of the 'Critic'?",
    "options": [
      "To select actions",
      "To estimate the value function (evaluate the action)",
      "To explore the environment",
      "To reset the environment"
    ],
    "correctAnswer": 1,
    "explanation": "The Actor selects the action, and the Critic estimates the value function (e.g., V(s) or Q(s,a)) to critique the action taken by the Actor.",
    "difficulty": "medium",
    "tags": ["RL", "Algorithms", "Actor-Critic"]
  },
  {
    "id": "cv-rl-038",
    "question": "What is the key feature of Proximal Policy Optimization (PPO) that improves stability?",
    "options": [
      "Using a replay buffer",
      "Clipping the objective function to prevent large policy updates",
      "Using a genetic algorithm",
      "Using supervised learning"
    ],
    "correctAnswer": 1,
    "explanation": "PPO uses a clipped surrogate objective function to ensure that the new policy does not deviate too much from the old policy in a single update step.",
    "difficulty": "hard",
    "tags": ["RL", "Algorithms", "PPO"]
  },
  {
    "id": "cv-rl-039",
    "question": "What does A2C stand for in Reinforcement Learning?",
    "options": [
      "Action-to-Critic",
      "Advantage Actor-Critic",
      "Asynchronous Actor-Critic",
      "Advanced Actor-Critic"
    ],
    "correctAnswer": 1,
    "explanation": "A2C stands for Advantage Actor-Critic. It is a synchronous, deterministic version of the A3C (Asynchronous Advantage Actor-Critic) algorithm.",
    "difficulty": "medium",
    "tags": ["RL", "Algorithms", "A2C"]
  },
  {
    "id": "cv-rl-040",
    "question": "What is the 'sparse reward' problem?",
    "options": [
      "When rewards are too small",
      "When the agent rarely receives non-zero rewards, making it hard to learn",
      "When there are too many rewards",
      "When rewards are negative"
    ],
    "correctAnswer": 1,
    "explanation": "Sparse rewards occur when the agent must perform a long sequence of correct actions to get any feedback, making it difficult for random exploration to find the goal.",
    "difficulty": "medium",
    "tags": ["RL", "Challenges"]
  },
  {
    "id": "cv-rl-041",
    "question": "What constitutes an 'episode' in Reinforcement Learning?",
    "options": [
      "A single step",
      "A sequence of states, actions, and rewards from a start state to a terminal state",
      "The entire training process",
      "A batch of data"
    ],
    "correctAnswer": 1,
    "explanation": "An episode is a complete run of the agent-environment interaction, ending when a terminal state (like winning a game or crashing) is reached.",
    "difficulty": "easy",
    "tags": ["RL", "Concepts"]
  },
  {
    "id": "cv-rl-042",
    "question": "Which equation is fundamental to solving MDPs and relates the value of a state to the values of its successors?",
    "options": [
      "Maxwell's Equation",
      "Bellman Equation",
      "Schrodinger Equation",
      "Euler Equation"
    ],
    "correctAnswer": 1,
    "explanation": "The Bellman Equation expresses the relationship between the value of a state and the values of the next possible states.",
    "difficulty": "medium",
    "tags": ["RL", "MDP"]
  },
  {
    "id": "cv-rl-043",
    "question": "What is Temporal Difference (TD) learning?",
    "options": [
      "Learning from complete episodes only",
      "Learning by predicting the difference between consecutive value estimates",
      "Learning using a time machine",
      "Learning with a fixed dataset"
    ],
    "correctAnswer": 1,
    "explanation": "TD learning updates estimates based in part on other learned estimates, bootstrapping from the current estimate of the next state's value.",
    "difficulty": "medium",
    "tags": ["RL", "Concepts"]
  },
  {
    "id": "cv-rl-044",
    "question": "Which of the following algorithms is best suited for an environment with a continuous action space?",
    "options": [
      "Standard Q-Learning",
      "DQN",
      "DDPG (Deep Deterministic Policy Gradient)",
      "Tabular Q-Learning"
    ],
    "correctAnswer": 2,
    "explanation": "DDPG is an actor-critic algorithm specifically designed for environments with continuous action spaces. Standard DQN works with discrete actions.",
    "difficulty": "hard",
    "tags": ["RL", "Algorithms"]
  },
  {
    "id": "cv-rl-045",
    "question": "What is the goal of Inverse Reinforcement Learning (IRL)?",
    "options": [
      "To maximize the reward",
      "To infer the reward function from observed expert behavior",
      "To minimize the loss",
      "To learn the transition dynamics"
    ],
    "correctAnswer": 1,
    "explanation": "IRL aims to determine the underlying reward function that explains the behavior of an expert agent, rather than finding the optimal policy directly.",
    "difficulty": "hard",
    "tags": ["RL", "Advanced"]
  },
  {
    "id": "cv-rl-046",
    "question": "What is a major challenge specific to Multi-Agent Reinforcement Learning (MARL)?",
    "options": [
      "Lack of data",
      "Non-stationarity of the environment",
      "Slow GPUs",
      "Simple state spaces"
    ],
    "correctAnswer": 1,
    "explanation": "In MARL, the environment becomes non-stationary from the perspective of a single agent because other agents are also learning and changing their policies simultaneously.",
    "difficulty": "hard",
    "tags": ["RL", "Multi-Agent"]
  },
  {
    "id": "cv-rl-047",
    "question": "How do Monte Carlo methods update value estimates?",
    "options": [
      "After every step",
      "Based on complete episodes",
      "Using a model",
      "Randomly"
    ],
    "correctAnswer": 1,
    "explanation": "Monte Carlo methods wait until the end of an episode to calculate the actual return and then update the value estimates.",
    "difficulty": "medium",
    "tags": ["RL", "Algorithms"]
  },
  {
    "id": "cv-rl-048",
    "question": "How does SARSA differ from Q-Learning?",
    "options": [
      "SARSA is off-policy, Q-Learning is on-policy",
      "SARSA is on-policy, Q-Learning is off-policy",
      "SARSA uses a neural network",
      "There is no difference"
    ],
    "correctAnswer": 1,
    "explanation": "SARSA (State-Action-Reward-State-Action) is on-policy because it updates the Q-value based on the action actually taken by the current policy, whereas Q-Learning updates based on the max possible action.",
    "difficulty": "medium",
    "tags": ["RL", "Algorithms"]
  },
  {
    "id": "cv-rl-049",
    "question": "What is 'Curriculum Learning' in the context of RL?",
    "options": [
      "Learning from a textbook",
      "Training on a sequence of tasks ordered by increasing difficulty",
      "Using a fixed learning rate",
      "Learning without rewards"
    ],
    "correctAnswer": 1,
    "explanation": "Curriculum learning involves training the agent on easier versions of the task first and gradually increasing the complexity, which can speed up convergence.",
    "difficulty": "easy",
    "tags": ["RL", "Training Strategies"]
  },
  {
    "id": "cv-rl-050",
    "question": "What is the primary solution when the state space is too large to be represented in a table (Tabular RL)?",
    "options": [
      "Ignore some states",
      "Use Function Approximation (e.g., Neural Networks)",
      "Increase the memory",
      "Stop training"
    ],
    "correctAnswer": 1,
    "explanation": "When the state space is continuous or very large, function approximators like neural networks are used to estimate value functions or policies, leading to Deep RL.",
    "difficulty": "medium",
    "tags": ["RL", "Deep RL"]
  }
]
