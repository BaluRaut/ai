export const aiQuizBankExpansion9 = [
  {
    id: "ethics-robotics-future-001",
    question: "What is 'Reward Hacking' in the context of AI Alignment?",
    options: [
      "The AI stealing cryptocurrency rewards",
      "The AI finding a shortcut to maximize its reward function without achieving the intended goal",
      "The AI refusing to accept rewards for tasks",
      "The AI hacking into the reward server to change the score"
    ],
    correctAnswer: 1,
    explanation: "Reward hacking (or specification gaming) occurs when an AI agent exploits flaws in the design of a reward function to achieve high scores in unintended and often harmful ways.",
    difficulty: "medium",
    tags: ["AI Ethics", "AI Alignment"]
  },
  {
    id: "ethics-robotics-future-002",
    question: "Which fairness metric requires that the proportion of positive predictions be the same across different demographic groups?",
    options: [
      "Equalized Odds",
      "Demographic Parity",
      "Calibration",
      "Predictive Parity"
    ],
    correctAnswer: 1,
    explanation: "Demographic Parity (or Statistical Parity) requires that the positive classification rate is equal for all protected groups, regardless of the true label distribution.",
    difficulty: "hard",
    tags: ["AI Ethics", "Fairness"]
  },
  {
    id: "ethics-robotics-future-003",
    question: "What does SHAP (SHapley Additive exPlanations) use to explain model predictions?",
    options: [
      "Decision trees",
      "Game theory concepts",
      "Neural network gradients",
      "Linear regression approximations"
    ],
    correctAnswer: 1,
    explanation: "SHAP values are based on cooperative game theory (Shapley values), assigning each feature an importance value for a particular prediction.",
    difficulty: "hard",
    tags: ["AI Ethics", "Explainability"]
  },
  {
    id: "ethics-robotics-future-004",
    question: "What is an 'Adversarial Example' in computer vision?",
    options: [
      "An image with missing pixels",
      "An image modified with imperceptible noise designed to fool a classifier",
      "A low-resolution image",
      "An image of a competitor's product"
    ],
    correctAnswer: 1,
    explanation: "Adversarial examples are inputs formed by applying small, often imperceptible perturbations to datasets that cause machine learning models to misclassify them with high confidence.",
    difficulty: "medium",
    tags: ["AI Ethics", "Safety"]
  },
  {
    id: "ethics-robotics-future-005",
    question: "Which technique involves training a model on data that has been maliciously tampered with to compromise the model's behavior?",
    options: [
      "Data Augmentation",
      "Data Poisoning",
      "Data Cleaning",
      "Data Mining"
    ],
    correctAnswer: 1,
    explanation: "Data poisoning involves injecting malicious data into the training set to corrupt the learned model, potentially creating backdoors or degrading performance.",
    difficulty: "medium",
    tags: ["AI Ethics", "Safety"]
  },
  {
    id: "ethics-robotics-future-006",
    question: "What is 'LIME' used for in Machine Learning?",
    options: [
      "Optimizing learning rates",
      "Explaining individual predictions of any classifier",
      "Compressing models for mobile",
      "Generating synthetic data"
    ],
    correctAnswer: 1,
    explanation: "LIME (Local Interpretable Model-agnostic Explanations) explains the predictions of any classifier by approximating it locally with an interpretable model.",
    difficulty: "medium",
    tags: ["AI Ethics", "Explainability"]
  },
  {
    id: "ethics-robotics-future-007",
    question: "In AI Alignment, what does 'Inner Alignment' refer to?",
    options: [
      "Aligning the AI's internal components physically",
      "Ensuring the AI's internal objective matches the outer specified objective",
      "Aligning the dataset with the model architecture",
      "Ensuring the development team agrees on the goals"
    ],
    correctAnswer: 1,
    explanation: "Inner alignment concerns whether the optimization process produces a model that internally pursues the objective specified by the reward function (outer alignment), rather than a proxy goal.",
    difficulty: "hard",
    tags: ["AI Ethics", "AI Alignment"]
  },
  {
    id: "ethics-robotics-future-008",
    question: "What is 'Instrumental Convergence'?",
    options: [
      "The tendency of different AI models to converge on the same answer",
      "The idea that certain sub-goals (like self-preservation) are useful for almost any final goal",
      "The convergence of AI and musical instruments",
      "The merging of hardware and software development"
    ],
    correctAnswer: 1,
    explanation: "Instrumental convergence suggests that intelligent agents with varied final goals will likely pursue similar sub-goals, such as resource acquisition and self-preservation, to ensure they can achieve their final goals.",
    difficulty: "hard",
    tags: ["AI Ethics", "Future of AI"]
  },
  {
    id: "ethics-robotics-future-009",
    question: "Which privacy technique adds noise to data or query results to prevent the identification of individuals?",
    options: [
      "Homomorphic Encryption",
      "Differential Privacy",
      "Secure Multi-party Computation",
      "Tokenization"
    ],
    correctAnswer: 1,
    explanation: "Differential Privacy provides a mathematical guarantee that the output of an algorithm does not significantly depend on the inclusion of any single individual's data, usually achieved by adding noise.",
    difficulty: "medium",
    tags: ["AI Ethics", "Privacy"]
  },
  {
    id: "ethics-robotics-future-010",
    question: "What is 'Federated Learning' primarily designed to improve?",
    options: [
      "Training speed",
      "Data privacy",
      "Model accuracy",
      "Hardware utilization"
    ],
    correctAnswer: 1,
    explanation: "Federated Learning allows training models across multiple decentralized devices holding local data samples, without exchanging them, thus improving data privacy.",
    difficulty: "medium",
    tags: ["AI Ethics", "Privacy", "Edge AI"]
  },
  {
    id: "ethics-robotics-future-011",
    question: "What is 'Algorithmic Bias'?",
    options: [
      "The bias term in a neural network layer",
      "Systematic and repeatable errors in a computer system that create unfair outcomes",
      "The preference of an algorithm for integer data",
      "The tendency of a model to overfit"
    ],
    correctAnswer: 1,
    explanation: "Algorithmic bias refers to systematic errors in a computer system that create unfair outcomes, such as privileging one arbitrary group of users over others.",
    difficulty: "easy",
    tags: ["AI Ethics", "Bias"]
  },
  {
    id: "ethics-robotics-future-012",
    question: "Which concept refers to the ability to trace the decision-making process of an AI system?",
    options: [
      "Scalability",
      "Transparency",
      "Latency",
      "Throughput"
    ],
    correctAnswer: 1,
    explanation: "Transparency (or interpretability/explainability) refers to the ability to understand and trace how an AI system arrives at its decisions.",
    difficulty: "easy",
    tags: ["AI Ethics", "Explainability"]
  },
  {
    id: "ethics-robotics-future-013",
    question: "What is a 'Model Inversion Attack'?",
    options: [
      "Flipping the weights of a model",
      "Reconstructing training data from the model's outputs",
      "Training a model to do the opposite of its task",
      "Inverting the input images"
    ],
    correctAnswer: 1,
    explanation: "Model inversion attacks aim to reconstruct the training data or sensitive features of the input data by analyzing the model's outputs or gradients.",
    difficulty: "hard",
    tags: ["AI Ethics", "Safety"]
  },
  {
    id: "ethics-robotics-future-014",
    question: "The 'Trolley Problem' is often used to discuss which aspect of AI?",
    options: [
      "Path planning efficiency",
      "Ethical decision making in autonomous systems",
      "Battery life optimization",
      "Object detection speed"
    ],
    correctAnswer: 1,
    explanation: "The Trolley Problem is a thought experiment used to explore ethical dilemmas and decision-making principles, particularly relevant for autonomous vehicles and AI safety.",
    difficulty: "easy",
    tags: ["AI Ethics", "Philosophy"]
  },
  {
    id: "ethics-robotics-future-015",
    question: "What is 'Value Loading' in AI safety?",
    options: [
      "Loading weights into a neural network",
      "The problem of ensuring an AI system pursues human values",
      "Calculating the value function in Reinforcement Learning",
      "Assigning monetary value to AI products"
    ],
    correctAnswer: 1,
    explanation: "Value loading (or value alignment) is the problem of encoding human values and goals into an AI system so that it acts in accordance with them.",
    difficulty: "medium",
    tags: ["AI Ethics", "AI Alignment"]
  },
  {
    id: "ethics-robotics-future-016",
    question: "In robotics, what does 'Inverse Kinematics' calculate?",
    options: [
      "The position of the end effector given joint angles",
      "The joint angles required to reach a specific end effector position",
      "The velocity of the robot",
      "The force required to lift an object"
    ],
    correctAnswer: 1,
    explanation: "Inverse Kinematics (IK) calculates the necessary joint parameters (angles/extensions) to place the end effector of a robot at a desired position and orientation.",
    difficulty: "medium",
    tags: ["Robotics", "Kinematics"]
  },
  {
    id: "ethics-robotics-future-017",
    question: "What does SLAM stand for in robotics?",
    options: [
      "Simultaneous Learning and Movement",
      "Simultaneous Localization and Mapping",
      "Synchronized Location and Motion",
      "Systematic Logic and Modeling"
    ],
    correctAnswer: 1,
    explanation: "SLAM stands for Simultaneous Localization and Mapping, the computational problem of constructing or updating a map of an unknown environment while simultaneously keeping track of an agent's location within it.",
    difficulty: "easy",
    tags: ["Robotics", "SLAM"]
  },
  {
    id: "ethics-robotics-future-018",
    question: "Which sensor uses laser light to measure distances?",
    options: [
      "Radar",
      "Sonar",
      "Lidar",
      "Ultrasonic"
    ],
    correctAnswer: 2,
    explanation: "Lidar (Light Detection and Ranging) uses pulsed laser light to measure distances to the Earth or other objects.",
    difficulty: "easy",
    tags: ["Robotics", "Sensors"]
  },
  {
    id: "ethics-robotics-future-019",
    question: "What defines the 'Degrees of Freedom' (DOF) of a robot?",
    options: [
      "The number of sensors it has",
      "The number of independent parameters that define its configuration",
      "The maximum speed it can travel",
      "The battery life duration"
    ],
    correctAnswer: 1,
    explanation: "Degrees of Freedom (DOF) refers to the number of independent parameters (usually joints or coordinates) that define the configuration or state of a mechanical system.",
    difficulty: "medium",
    tags: ["Robotics", "Kinematics"]
  },
  {
    id: "ethics-robotics-future-020",
    question: "Which of the following is a 'Proprioceptive' sensor?",
    options: [
      "Camera",
      "Lidar",
      "Wheel Encoder",
      "Ultrasonic Rangefinder"
    ],
    correctAnswer: 2,
    explanation: "Proprioceptive sensors measure the internal state of the robot, such as wheel encoders (measuring rotation) or joint angles. Cameras and Lidar are exteroceptive (measuring the environment).",
    difficulty: "medium",
    tags: ["Robotics", "Sensors"]
  },
  {
    id: "ethics-robotics-future-021",
    question: "What is the 'Jacobian Matrix' used for in robotics?",
    options: [
      "To map joint velocities to end-effector velocities",
      "To store the map of the environment",
      "To calculate the battery consumption",
      "To process image data"
    ],
    correctAnswer: 0,
    explanation: "The Jacobian matrix relates the joint velocities of a robot manipulator to the linear and angular velocities of its end effector.",
    difficulty: "hard",
    tags: ["Robotics", "Kinematics"]
  },
  {
    id: "ethics-robotics-future-022",
    question: "What is 'Loop Closure' in the context of SLAM?",
    options: [
      "Stopping the robot's movement",
      "Recognizing a previously visited location to correct accumulated errors",
      "Closing the feedback loop in a PID controller",
      "Finishing the mapping process"
    ],
    correctAnswer: 1,
    explanation: "Loop closure is the process of recognizing that the robot has returned to a previously visited location, allowing the SLAM algorithm to correct accumulated drift errors in the map and trajectory.",
    difficulty: "medium",
    tags: ["Robotics", "SLAM"]
  },
  {
    id: "ethics-robotics-future-023",
    question: "What is 'Dead Reckoning'?",
    options: [
      "Calculating position based on estimated speed and time without external references",
      "Using GPS to find location",
      "Using a camera to recognize landmarks",
      "Calculating the distance to an obstacle"
    ],
    correctAnswer: 0,
    explanation: "Dead reckoning is the process of calculating one's current position by using a previously determined position and advancing that position based upon known or estimated speeds over elapsed time and course.",
    difficulty: "medium",
    tags: ["Robotics", "Localization"]
  },
  {
    id: "ethics-robotics-future-024",
    question: "Which component is responsible for moving or controlling a mechanism or system?",
    options: [
      "Sensor",
      "Actuator",
      "Microcontroller",
      "Transistor"
    ],
    correctAnswer: 1,
    explanation: "An actuator is a component of a machine that is responsible for moving and controlling a mechanism or system, for example by opening a valve or rotating a wheel.",
    difficulty: "easy",
    tags: ["Robotics", "Hardware"]
  },
  {
    id: "ethics-robotics-future-025",
    question: "What is the 'End Effector' of a robot arm?",
    options: [
      "The base of the robot",
      "The first joint",
      "The device at the end of the arm designed to interact with the environment",
      "The power supply"
    ],
    correctAnswer: 2,
    explanation: "The end effector is the device at the end of a robotic manipulator, designed to interact with the environment (e.g., a gripper, welding torch, or paint sprayer).",
    difficulty: "easy",
    tags: ["Robotics", "Hardware"]
  },
  {
    id: "ethics-robotics-future-026",
    question: "Which algorithm is commonly used for path planning in robotics?",
    options: [
      "K-Means",
      "A* (A-Star)",
      "Naive Bayes",
      "Linear Regression"
    ],
    correctAnswer: 1,
    explanation: "A* (A-Star) is a widely used graph traversal and path search algorithm, known for its performance and accuracy in finding the shortest path.",
    difficulty: "medium",
    tags: ["Robotics", "Path Planning"]
  },
  {
    id: "ethics-robotics-future-027",
    question: "What is ROS?",
    options: [
      "Robot Optimization Standard",
      "Robot Operating System",
      "Robotic Optical Sensor",
      "Real-time Object System"
    ],
    correctAnswer: 1,
    explanation: "ROS (Robot Operating System) is a set of software libraries and tools that help you build robot applications. It provides hardware abstraction, device drivers, libraries, visualizers, etc.",
    difficulty: "easy",
    tags: ["Robotics", "Software"]
  },
  {
    id: "ethics-robotics-future-028",
    question: "What is 'Visual Odometry'?",
    options: [
      "Measuring the brightness of an image",
      "Estimating the position and orientation of a robot by analyzing associated camera images",
      "Detecting objects in an image",
      "Calibrating a camera lens"
    ],
    correctAnswer: 1,
    explanation: "Visual Odometry is the process of determining the position and orientation of a robot by analyzing the changes in images captured by its on-board cameras.",
    difficulty: "medium",
    tags: ["Robotics", "Localization"]
  },
  {
    id: "ethics-robotics-future-029",
    question: "Which filter is commonly used for sensor fusion and state estimation in robotics?",
    options: [
      "Sobel Filter",
      "Kalman Filter",
      "Gabor Filter",
      "Median Filter"
    ],
    correctAnswer: 1,
    explanation: "The Kalman Filter is an algorithm that uses a series of measurements observed over time, containing statistical noise and other inaccuracies, to produce estimates of unknown variables (like position) that are more accurate than those based on a single measurement alone.",
    difficulty: "hard",
    tags: ["Robotics", "State Estimation"]
  },
  {
    id: "ethics-robotics-future-030",
    question: "What characterizes 'Soft Robotics'?",
    options: [
      "Robots made of software only",
      "Robots constructed from highly compliant materials similar to living organisms",
      "Robots that speak softly",
      "Robots used for handling soft objects only"
    ],
    correctAnswer: 1,
    explanation: "Soft robotics is a subfield of robotics that concerns the design, control, and fabrication of robots made of compliant materials, rather than rigid links.",
    difficulty: "medium",
    tags: ["Robotics", "Future Robotics"]
  },
  {
    id: "ethics-robotics-future-031",
    question: "What is 'Quantization' in Edge AI?",
    options: [
      "Increasing the number of neurons",
      "Reducing the precision of the numbers used to represent model parameters",
      "Splitting the model into quantum states",
      "Measuring the quantity of data"
    ],
    correctAnswer: 1,
    explanation: "Quantization involves reducing the precision of the model's weights and activations (e.g., from 32-bit floating point to 8-bit integers) to reduce model size and improve inference speed.",
    difficulty: "medium",
    tags: ["Edge AI", "Optimization"]
  },
  {
    id: "ethics-robotics-future-032",
    question: "What is 'Pruning' in neural networks?",
    options: [
      "Removing unnecessary neurons or connections to compress the model",
      "Cutting the learning rate",
      "Removing bad data from the training set",
      "Shortening the training time"
    ],
    correctAnswer: 0,
    explanation: "Pruning is the process of removing parameters (weights) or neurons that contribute little to the model's output, resulting in a smaller and faster model.",
    difficulty: "medium",
    tags: ["Edge AI", "Optimization"]
  },
  {
    id: "ethics-robotics-future-033",
    question: "What is 'Knowledge Distillation'?",
    options: [
      "Extracting rules from a neural network",
      "Transferring knowledge from a large 'teacher' model to a smaller 'student' model",
      "Distilling data into a smaller dataset",
      "Filtering noise from knowledge bases"
    ],
    correctAnswer: 1,
    explanation: "Knowledge Distillation is a compression technique where a small 'student' model is trained to reproduce the behavior (outputs) of a large, pre-trained 'teacher' model.",
    difficulty: "medium",
    tags: ["Edge AI", "Optimization"]
  },
  {
    id: "ethics-robotics-future-034",
    question: "What is 'TinyML'?",
    options: [
      "Machine Learning on supercomputers",
      "Machine Learning on ultra-low-power microcontrollers",
      "A small dataset for ML",
      "A simplified ML algorithm"
    ],
    correctAnswer: 1,
    explanation: "TinyML is a field of study dedicated to exploring machine learning on embedded systems and microcontrollers with extremely low power consumption (milliwatts).",
    difficulty: "easy",
    tags: ["Edge AI", "TinyML"]
  },
  {
    id: "ethics-robotics-future-035",
    question: "What is a primary benefit of Edge AI regarding latency?",
    options: [
      "It increases latency due to slower processors",
      "It reduces latency by processing data locally without sending it to the cloud",
      "It has no effect on latency",
      "It varies randomly"
    ],
    correctAnswer: 1,
    explanation: "Edge AI processes data locally on the device, eliminating the round-trip time required to send data to a cloud server and back, thus significantly reducing latency.",
    difficulty: "easy",
    tags: ["Edge AI", "Concepts"]
  },
  {
    id: "ethics-robotics-future-036",
    question: "Which data format is commonly used in quantized Edge AI models?",
    options: [
      "FP64 (64-bit float)",
      "INT8 (8-bit integer)",
      "Complex128",
      "String"
    ],
    correctAnswer: 1,
    explanation: "INT8 (8-bit integer) is a common format for quantized models, offering a good balance between model size reduction/speed and accuracy preservation compared to FP32.",
    difficulty: "medium",
    tags: ["Edge AI", "Quantization"]
  },
  {
    id: "ethics-robotics-future-037",
    question: "What is 'Quantization Aware Training' (QAT)?",
    options: [
      "Training a model to recognize quantum states",
      "Simulating quantization effects during training to allow the model to adapt",
      "Training a model only on quantized data",
      "A training method for quantum computers"
    ],
    correctAnswer: 1,
    explanation: "Quantization Aware Training (QAT) simulates the effects of quantization (rounding and clamping) during the training process (forward pass), allowing the model to learn weights that are robust to quantization.",
    difficulty: "hard",
    tags: ["Edge AI", "Quantization"]
  },
  {
    id: "ethics-robotics-future-038",
    question: "What is an NPU?",
    options: [
      "Network Processing Unit",
      "Neural Processing Unit",
      "Node Processing Unit",
      "Null Processing Unit"
    ],
    correctAnswer: 1,
    explanation: "An NPU (Neural Processing Unit) is a specialized circuit designed to accelerate machine learning algorithms, typically operating on predictive models such as artificial neural networks.",
    difficulty: "easy",
    tags: ["Edge AI", "Hardware"]
  },
  {
    id: "ethics-robotics-future-039",
    question: "What is the difference between Structured and Unstructured Pruning?",
    options: [
      "Structured removes random weights; Unstructured removes whole layers",
      "Structured removes whole blocks/channels; Unstructured removes individual weights",
      "There is no difference",
      "Structured is for RNNs; Unstructured is for CNNs"
    ],
    correctAnswer: 1,
    explanation: "Unstructured pruning removes individual weights (setting them to zero), creating sparse matrices. Structured pruning removes entire structures like neurons, channels, or layers, maintaining dense matrix structures that are easier to accelerate on hardware.",
    difficulty: "hard",
    tags: ["Edge AI", "Pruning"]
  },
  {
    id: "ethics-robotics-future-040",
    question: "Why is 'On-device Inference' better for privacy?",
    options: [
      "It isn't better for privacy",
      "Personal data never leaves the user's device",
      "The device encrypts data better than the cloud",
      "It uses a VPN automatically"
    ],
    correctAnswer: 1,
    explanation: "On-device inference processes data locally, meaning sensitive user data (like images or voice) does not need to be transmitted to a third-party server, enhancing privacy.",
    difficulty: "easy",
    tags: ["Edge AI", "Privacy"]
  },
  {
    id: "ethics-robotics-future-041",
    question: "What is TensorFlow Lite?",
    options: [
      "A light version of Python",
      "A framework for deploying ML models on mobile and edge devices",
      "A dataset for testing",
      "A cloud service"
    ],
    correctAnswer: 1,
    explanation: "TensorFlow Lite is an open-source deep learning framework for on-device inference, designed to be lightweight and fast for mobile and embedded devices.",
    difficulty: "easy",
    tags: ["Edge AI", "Tools"]
  },
  {
    id: "ethics-robotics-future-042",
    question: "What is 'Post-Training Quantization'?",
    options: [
      "Quantizing the model after it has been fully trained",
      "Training the model after quantization",
      "Quantizing the training data",
      "Quantizing the gradients"
    ],
    correctAnswer: 0,
    explanation: "Post-Training Quantization is a technique to reduce model size and improve latency by quantizing weights and activations after the model has been trained, without requiring retraining.",
    difficulty: "medium",
    tags: ["Edge AI", "Quantization"]
  },
  {
    id: "ethics-robotics-future-043",
    question: "Which metric is critical for battery-powered Edge AI devices?",
    options: [
      "FLOPS per Watt",
      "Total parameters",
      "Training time",
      "Dataset size"
    ],
    correctAnswer: 0,
    explanation: "FLOPS per Watt (energy efficiency) is critical for battery-powered devices to ensure that AI tasks do not drain the battery too quickly.",
    difficulty: "medium",
    tags: ["Edge AI", "Hardware"]
  },
  {
    id: "ethics-robotics-future-044",
    question: "What is 'Model Compression'?",
    options: [
      "Zipping the model file",
      "Techniques to reduce the size of a model while maintaining accuracy",
      "Reducing the input image size",
      "Compressing the output labels"
    ],
    correctAnswer: 1,
    explanation: "Model compression refers to a set of techniques (like quantization, pruning, distillation) used to reduce the storage and memory requirements of a machine learning model.",
    difficulty: "easy",
    tags: ["Edge AI", "Optimization"]
  },
  {
    id: "ethics-robotics-future-045",
    question: "What is a 'Sparse Matrix' in the context of pruning?",
    options: [
      "A matrix with mostly zero values",
      "A matrix with very large numbers",
      "A matrix with complex numbers",
      "A matrix that is missing rows"
    ],
    correctAnswer: 0,
    explanation: "A sparse matrix is a matrix in which most of the elements are zero. Unstructured pruning results in sparse weight matrices.",
    difficulty: "medium",
    tags: ["Edge AI", "Math"]
  },
  {
    id: "ethics-robotics-future-046",
    question: "What does AGI stand for?",
    options: [
      "Artificial General Intelligence",
      "Automated Graphic Interface",
      "Advanced Genetic Intelligence",
      "Applied General Inference"
    ],
    correctAnswer: 0,
    explanation: "AGI (Artificial General Intelligence) refers to a type of AI that possesses the ability to understand, learn, and apply knowledge across a wide variety of tasks, similar to human intelligence.",
    difficulty: "easy",
    tags: ["Future of AI", "AGI"]
  },
  {
    id: "ethics-robotics-future-047",
    question: "What is the 'Technological Singularity'?",
    options: [
      "A single point of failure in a network",
      "A hypothetical point in time when technological growth becomes uncontrollable and irreversible, often linked to superintelligent AI",
      "The invention of the transistor",
      "The moment AI beats a human at Chess"
    ],
    correctAnswer: 1,
    explanation: "The Singularity is a hypothetical future point where technological growth becomes uncontrollable and irreversible, resulting in unfathomable changes to human civilization, often associated with the creation of superintelligence.",
    difficulty: "medium",
    tags: ["Future of AI", "Singularity"]
  },
  {
    id: "ethics-robotics-future-048",
    question: "What is a BCI?",
    options: [
      "Binary Code Interface",
      "Brain-Computer Interface",
      "Basic Computer Instruction",
      "Biological Cell Interaction"
    ],
    correctAnswer: 1,
    explanation: "A Brain-Computer Interface (BCI) is a direct communication pathway between an enhanced or wired brain and an external device.",
    difficulty: "easy",
    tags: ["Future of AI", "BCI"]
  },
  {
    id: "ethics-robotics-future-049",
    question: "What is 'Neuromorphic Computing'?",
    options: [
      "Computing with neurons",
      "Hardware architecture designed to mimic the biological structure of the brain",
      "Software for neurologists",
      "Computing using DNA"
    ],
    correctAnswer: 1,
    explanation: "Neuromorphic computing involves designing computer chips and systems that mimic the neuro-biological architectures of the nervous system (e.g., spiking neural networks).",
    difficulty: "medium",
    tags: ["Future of AI", "Hardware"]
  },
  {
    id: "ethics-robotics-future-050",
    question: "What is a 'Spiking Neural Network' (SNN)?",
    options: [
      "A network that has spikes in accuracy",
      "A neural network where neurons communicate via discrete spikes in time, mimicking biological neurons",
      "A network used for stock market prediction",
      "A network with sharp activation functions"
    ],
    correctAnswer: 1,
    explanation: "Spiking Neural Networks (SNNs) are artificial neural network models that more closely mimic natural neural networks by incorporating the concept of time and communicating via discrete spikes.",
    difficulty: "hard",
    tags: ["Future of AI", "Neuromorphic"]
  },
  {
    id: "ethics-robotics-future-051",
    question: "What is 'Moravec's Paradox'?",
    options: [
      "High-level reasoning requires little computation, but low-level sensorimotor skills require enormous computational resources",
      "AI will never be creative",
      "Robots will replace all humans",
      "Computers can calculate faster than humans"
    ],
    correctAnswer: 0,
    explanation: "Moravec's Paradox is the observation that it is comparatively easy to make computers exhibit adult level performance on intelligence tests, but difficult to give them the skills of a one-year-old when it comes to perception and mobility.",
    difficulty: "hard",
    tags: ["Future of AI", "Robotics"]
  },
  {
    id: "ethics-robotics-future-052",
    question: "What is the 'Paperclip Maximizer' thought experiment?",
    options: [
      "An AI that organizes office supplies",
      "An illustration of how an AI with a harmless goal could destroy the world if not aligned properly",
      "A robot that makes paperclips efficiently",
      "A game about paperclips"
    ],
    correctAnswer: 1,
    explanation: "The Paperclip Maximizer is a thought experiment showing that an artificial general intelligence designed with a trivial goal (like making paperclips) could destroy humanity by converting all available resources (including humans) into paperclips.",
    difficulty: "medium",
    tags: ["Future of AI", "Safety"]
  },
  {
    id: "ethics-robotics-future-053",
    question: "What is 'Whole Brain Emulation' (Mind Uploading)?",
    options: [
      "Scanning a brain to detect tumors",
      "The hypothetical process of scanning a physical brain and simulating its state on a computer",
      "Using a computer to control a brain",
      "Simulating a brain in a jar"
    ],
    correctAnswer: 1,
    explanation: "Whole Brain Emulation is the hypothetical process of scanning the mental state of a particular brain substrate and copying it to a computer, such that the simulation behaves indistinguishably from the original brain.",
    difficulty: "medium",
    tags: ["Future of AI", "Transhumanism"]
  },
  {
    id: "ethics-robotics-future-054",
    question: "What is the 'Control Problem' in AI safety?",
    options: [
      "How to control a robot arm",
      "The challenge of ensuring that a superintelligent AI remains under human control",
      "Controlling the power supply of a data center",
      "Controlling the versioning of code"
    ],
    correctAnswer: 1,
    explanation: "The Control Problem refers to the difficulty of ensuring that a superintelligent agent would act in the interests of its creators and remain under their control.",
    difficulty: "medium",
    tags: ["Future of AI", "Safety"]
  },
  {
    id: "ethics-robotics-future-055",
    question: "What is 'Neuralink' known for?",
    options: [
      "Building self-driving cars",
      "Developing implantable brain-machine interfaces",
      "Creating a new search engine",
      "Manufacturing robot dogs"
    ],
    correctAnswer: 1,
    explanation: "Neuralink is a neurotechnology company founded by Elon Musk and others, developing implantable brain-machine interfaces (BMIs) to connect humans and computers.",
    difficulty: "easy",
    tags: ["Future of AI", "BCI"]
  },
  {
    id: "ethics-robotics-future-056",
    question: "What is 'Superintelligence'?",
    options: [
      "An intellect that is much smarter than the best human brains in practically every field",
      "A very smart human",
      "A fast computer",
      "A large database"
    ],
    correctAnswer: 0,
    explanation: "Superintelligence refers to an intellect that is much smarter than the best human brains in practically every field, including scientific creativity, general wisdom, and social skills.",
    difficulty: "easy",
    tags: ["Future of AI", "Concepts"]
  },
  {
    id: "ethics-robotics-future-057",
    question: "What is the 'Chinese Room Argument'?",
    options: [
      "An argument about trade with China",
      "A thought experiment challenging the idea that a program can have a 'mind' or 'understanding' just by manipulating symbols",
      "A puzzle about arranging furniture",
      "A method for learning Chinese"
    ],
    correctAnswer: 1,
    explanation: "The Chinese Room Argument, by John Searle, holds that a digital computer executing a program cannot be shown to have a 'mind', 'understanding', or 'consciousness', regardless of how intelligently or human-like it may behave.",
    difficulty: "hard",
    tags: ["Future of AI", "Philosophy"]
  },
  {
    id: "ethics-robotics-future-058",
    question: "What is 'Quantum Machine Learning'?",
    options: [
      "Machine learning used to design quantum computers",
      "The integration of quantum algorithms within machine learning programs",
      "Learning about quantum physics",
      "Fast machine learning"
    ],
    correctAnswer: 1,
    explanation: "Quantum Machine Learning is an interdisciplinary area that explores the interplay of quantum computing and machine learning, potentially offering speedups for certain types of problems.",
    difficulty: "medium",
    tags: ["Future of AI", "Quantum"]
  },
  {
    id: "ethics-robotics-future-059",
    question: "What is 'Transhumanism' in the context of AI?",
    options: [
      "Transporting humans by AI",
      "A movement advocating for the transformation of the human condition through technologies like AI and BCI",
      "Translating human languages",
      "Transferring data between humans"
    ],
    correctAnswer: 1,
    explanation: "Transhumanism is a philosophical and intellectual movement which advocates for the enhancement of the human condition by developing and making widely available sophisticated technologies to greatly enhance human intellect and physiology.",
    difficulty: "medium",
    tags: ["Future of AI", "Philosophy"]
  },
  {
    id: "ethics-robotics-future-060",
    question: "What is the 'Turing Test' designed to evaluate?",
    options: [
      "Computer speed",
      "A machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human",
      "The accuracy of a math calculation",
      "The graphics quality of a game"
    ],
    correctAnswer: 1,
    explanation: "The Turing Test is a test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.",
    difficulty: "easy",
    tags: ["Future of AI", "History"]
  }
];
