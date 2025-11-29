export const aiQuizBankExpansion9a = [
  {
    id: "ethics-robotics-001",
    question: "In the context of AI ethics, what does 'selection bias' refer to?",
    options: [
      "The algorithm selecting the wrong output",
      "The training data not being representative of the real-world population",
      "The user selecting the wrong model for the task",
      "The hardware selecting the wrong processing unit"
    ],
    correctAnswer: 1,
    explanation: "Selection bias occurs when the data used to train an AI model is not representative of the population it is intended to serve, leading to skewed or unfair results.",
    difficulty: "easy",
    tags: ["Ethics", "Bias"]
  },
  {
    id: "ethics-robotics-002",
    question: "Which fairness metric requires that the proportion of positive outcomes be equal across different demographic groups?",
    options: [
      "Equal Opportunity",
      "Demographic Parity",
      "Calibration",
      "Predictive Parity"
    ],
    correctAnswer: 1,
    explanation: "Demographic Parity (or Statistical Parity) requires that the decision rate (positive outcome) is independent of the protected attribute (e.g., gender, race).",
    difficulty: "medium",
    tags: ["Ethics", "Fairness"]
  },
  {
    id: "ethics-robotics-003",
    question: "What is the 'black box' problem in Artificial Intelligence?",
    options: [
      "The physical casing of AI servers is too dark",
      "The inability to understand the internal decision-making process of complex models like Deep Neural Networks",
      "The lack of data available for training",
      "The high energy consumption of AI models"
    ],
    correctAnswer: 1,
    explanation: "The 'black box' problem refers to the opacity of complex AI models (like deep learning), where it is difficult for humans to interpret how the model arrived at a specific prediction.",
    difficulty: "easy",
    tags: ["Ethics", "Explainability"]
  },
  {
    id: "ethics-robotics-004",
    question: "What is the primary goal of SHAP (SHapley Additive exPlanations) in AI?",
    options: [
      "To increase the speed of model training",
      "To compress the model size",
      "To explain the output of a machine learning model by attributing importance to each feature",
      "To generate synthetic training data"
    ],
    correctAnswer: 2,
    explanation: "SHAP values provide a unified measure of feature importance, explaining the prediction of an instance by computing the contribution of each feature to the prediction.",
    difficulty: "medium",
    tags: ["Ethics", "Explainability"]
  },
  {
    id: "ethics-robotics-005",
    question: "The 'Paperclip Maximizer' thought experiment is an illustration of which AI safety problem?",
    options: [
      "Overfitting",
      "Misalignment of goals (AI Alignment)",
      "Data poisoning",
      "Hardware failure"
    ],
    correctAnswer: 1,
    explanation: "The Paperclip Maximizer illustrates the alignment problem, where an AI with a harmless goal (make paperclips) destroys humanity because its objective function didn't include constraints on human safety or values.",
    difficulty: "hard",
    tags: ["Ethics", "AI Alignment"]
  },
  {
    id: "ethics-robotics-006",
    question: "What is 'reward hacking' or 'specification gaming' in Reinforcement Learning?",
    options: [
      "The agent finding a way to maximize the reward signal without actually achieving the intended goal",
      "The agent refusing to learn from the reward",
      "The developer manually changing the reward values",
      "The agent hacking into the server to change its score"
    ],
    correctAnswer: 0,
    explanation: "Reward hacking occurs when an agent exploits loopholes in the reward function to get high scores in unintended and often useless or harmful ways.",
    difficulty: "medium",
    tags: ["Ethics", "Safety"]
  },
  {
    id: "ethics-robotics-007",
    question: "What is an 'adversarial example' in the context of computer vision?",
    options: [
      "An image of a competitor's product",
      "An input image with imperceptible perturbations designed to cause the model to make a mistake",
      "A low-resolution image used for testing",
      "An image that violates copyright laws"
    ],
    correctAnswer: 1,
    explanation: "Adversarial examples are inputs formed by applying small, often invisible, changes to original inputs that result in the model classifying them incorrectly with high confidence.",
    difficulty: "medium",
    tags: ["Ethics", "Safety", "Adversarial AI"]
  },
  {
    id: "ethics-robotics-008",
    question: "What technique adds noise to data or queries to guarantee that the output does not reveal whether any specific individual's data was included?",
    options: [
      "Data Augmentation",
      "Differential Privacy",
      "Homomorphic Encryption",
      "Regularization"
    ],
    correctAnswer: 1,
    explanation: "Differential Privacy is a mathematical framework for quantifying and limiting the privacy risk of statistical databases, ensuring that the output is essentially the same whether any individual is in the dataset or not.",
    difficulty: "hard",
    tags: ["Ethics", "Privacy"]
  },
  {
    id: "ethics-robotics-009",
    question: "What is 'Model Collapse' in the context of Generative AI?",
    options: [
      "The physical server crashing due to overheating",
      "The degradation of model quality when trained on data generated by other AI models",
      "The model forgetting previous tasks (Catastrophic Forgetting)",
      "The financial bankruptcy of an AI company"
    ],
    correctAnswer: 1,
    explanation: "Model Collapse refers to a degenerative process where models trained on synthetic data (generated by previous models) lose information about the tails of the distribution and converge to a distorted representation of reality.",
    difficulty: "medium",
    tags: ["Ethics", "Generative AI"]
  },
  {
    id: "ethics-robotics-010",
    question: "Which of the following best describes 'Algorithmic Accountability'?",
    options: [
      "The algorithm's ability to count accurately",
      "The assignment of responsibility for the outcomes and impacts of algorithmic decisions",
      "The speed at which an algorithm processes data",
      "The cost of running the algorithm"
    ],
    correctAnswer: 1,
    explanation: "Algorithmic Accountability involves mechanisms to ensure that those who develop and deploy algorithms are responsible for their decisions and consequences, often involving audits and transparency.",
    difficulty: "easy",
    tags: ["Ethics", "Accountability"]
  },
  {
    id: "ethics-robotics-011",
    question: "In robotics, what is the difference between Forward Kinematics and Inverse Kinematics?",
    options: [
      "Forward calculates joint angles from position; Inverse calculates position from joint angles",
      "Forward calculates end-effector position from joint angles; Inverse calculates joint angles from end-effector position",
      "Forward is for moving forward; Inverse is for moving backward",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "Forward Kinematics computes the position/orientation of the end-effector given the joint angles. Inverse Kinematics (IK) computes the necessary joint angles to reach a desired end-effector position.",
    difficulty: "medium",
    tags: ["Robotics", "Kinematics"]
  },
  {
    id: "ethics-robotics-012",
    question: "What does 'Degrees of Freedom' (DOF) refer to in a robot arm?",
    options: [
      "The temperature range the robot can operate in",
      "The number of independent parameters that define the robot's configuration",
      "The maximum weight the robot can lift",
      "The number of sensors on the robot"
    ],
    correctAnswer: 1,
    explanation: "Degrees of Freedom (DOF) refers to the number of independent movements a robot mechanism can make, typically corresponding to the number of joints or axes of motion.",
    difficulty: "easy",
    tags: ["Robotics", "Kinematics"]
  },
  {
    id: "ethics-robotics-013",
    question: "What is the primary function of a LiDAR sensor in robotics?",
    options: [
      "To measure temperature",
      "To capture color images",
      "To measure distances to objects using laser pulses",
      "To detect sound waves"
    ],
    correctAnswer: 2,
    explanation: "LiDAR (Light Detection and Ranging) measures distances (ranging) by illuminating the target with laser light and measuring the reflection with a sensor, creating a 3D map of the environment.",
    difficulty: "easy",
    tags: ["Robotics", "Sensors"]
  },
  {
    id: "ethics-robotics-014",
    question: "What does the acronym SLAM stand for in robotics?",
    options: [
      "Simultaneous Localization and Mapping",
      "Systematic Learning and Movement",
      "Sensor Logic and Motor control",
      "Synchronized Linear Actuation Mechanism"
    ],
    correctAnswer: 0,
    explanation: "SLAM (Simultaneous Localization and Mapping) is the computational problem of constructing or updating a map of an unknown environment while simultaneously keeping track of an agent's location within it.",
    difficulty: "easy",
    tags: ["Robotics", "SLAM"]
  },
  {
    id: "ethics-robotics-015",
    question: "What is 'Loop Closure' in the context of SLAM?",
    options: [
      "The robot returning to its charging station",
      "The algorithm recognizing that the robot has returned to a previously visited location",
      "A programming loop that never ends",
      "Closing the feedback loop in a PID controller"
    ],
    correctAnswer: 1,
    explanation: "Loop closure is the process of recognizing that the robot has returned to a previously visited location. This allows the SLAM algorithm to correct accumulated drift errors in the map and trajectory.",
    difficulty: "hard",
    tags: ["Robotics", "SLAM"]
  },
  {
    id: "ethics-robotics-016",
    question: "What does an IMU (Inertial Measurement Unit) typically measure?",
    options: [
      "Distance to objects",
      "Specific force (acceleration) and angular rate",
      "GPS coordinates directly",
      "Visual features"
    ],
    correctAnswer: 1,
    explanation: "An IMU typically consists of accelerometers and gyroscopes (and sometimes magnetometers) to measure specific force (linear acceleration) and angular rate (rotational velocity).",
    difficulty: "medium",
    tags: ["Robotics", "Sensors"]
  },
  {
    id: "ethics-robotics-017",
    question: "Which algorithm is widely used for path planning to find the shortest path in a known environment?",
    options: [
      "K-Means Clustering",
      "A* (A-Star) Search",
      "Linear Regression",
      "Bubble Sort"
    ],
    correctAnswer: 1,
    explanation: "A* (A-Star) is a graph traversal and path search algorithm that is widely used in robotics for path planning because of its performance and accuracy in finding the shortest path.",
    difficulty: "medium",
    tags: ["Robotics", "Path Planning"]
  },
  {
    id: "ethics-robotics-018",
    question: "In robotics, what is a Jacobian matrix used for?",
    options: [
      "To store the robot's name",
      "To relate joint velocities to end-effector velocities",
      "To calculate the battery life",
      "To process image data"
    ],
    correctAnswer: 1,
    explanation: "The Jacobian matrix relates the joint velocities (in the configuration space) to the linear and angular velocities of the end-effector (in the task space).",
    difficulty: "hard",
    tags: ["Robotics", "Kinematics"]
  },
  {
    id: "ethics-robotics-019",
    question: "What is a 'singularity' in a robot arm?",
    options: [
      "The moment the robot becomes self-aware",
      "A configuration where the robot loses one or more degrees of freedom",
      "A single point in the cloud",
      "The base of the robot"
    ],
    correctAnswer: 1,
    explanation: "A kinematic singularity is a configuration where the robot's Jacobian becomes singular (determinant is zero), causing the robot to lose the ability to move in certain directions and potentially requiring infinite joint velocities.",
    difficulty: "hard",
    tags: ["Robotics", "Kinematics"]
  },
  {
    id: "ethics-robotics-020",
    question: "What is the difference between Proprioceptive and Exteroceptive sensors?",
    options: [
      "Proprioceptive measure internal state; Exteroceptive measure external environment",
      "Proprioceptive measure external environment; Exteroceptive measure internal state",
      "Proprioceptive are expensive; Exteroceptive are cheap",
      "Proprioceptive are digital; Exteroceptive are analog"
    ],
    correctAnswer: 0,
    explanation: "Proprioceptive sensors (e.g., encoders, IMUs) measure the internal status of the robot (joint angles, speed). Exteroceptive sensors (e.g., cameras, LiDAR) measure the external environment.",
    difficulty: "medium",
    tags: ["Robotics", "Sensors"]
  },
  {
    id: "ethics-robotics-021",
    question: "What is 'Visual Servoing'?",
    options: [
      "Serving food using a robot",
      "Using visual feedback (camera data) to control the motion of a robot",
      "Visualizing the robot's server logs",
      "Cleaning the robot's camera lens"
    ],
    correctAnswer: 1,
    explanation: "Visual servoing is a technique which uses feedback information extracted from a vision sensor (camera) to control the motion of a robot.",
    difficulty: "medium",
    tags: ["Robotics", "Control"]
  },
  {
    id: "ethics-robotics-022",
    question: "What is the 'Kidnapped Robot Problem'?",
    options: [
      "When a robot is stolen",
      "A situation where a robot is carried to an arbitrary location without being told, and must localize itself",
      "When a robot's battery dies",
      "When a robot gets stuck in a loop"
    ],
    correctAnswer: 1,
    explanation: "The Kidnapped Robot Problem refers to the challenge of global localization where a robot is placed in an unknown location in a known map and must determine its position from sensor readings.",
    difficulty: "medium",
    tags: ["Robotics", "SLAM", "Localization"]
  },
  {
    id: "ethics-robotics-023",
    question: "What is 'Configuration Space' (C-Space) in motion planning?",
    options: [
      "The physical space the robot occupies",
      "The set of all possible configurations (states) of the robot",
      "The hard drive space required for the OS",
      "The space where the robot is manufactured"
    ],
    correctAnswer: 1,
    explanation: "Configuration Space (C-Space) is the set of all possible transformations (positions and orientations) or joint angles that a robot can attain. Path planning is often performed in C-Space.",
    difficulty: "hard",
    tags: ["Robotics", "Path Planning"]
  },
  {
    id: "ethics-robotics-024",
    question: "What is the purpose of a Kalman Filter in robotics?",
    options: [
      "To filter dust from the air intake",
      "To estimate the state of a system from noisy measurements",
      "To compress video data",
      "To sort database records"
    ],
    correctAnswer: 1,
    explanation: "The Kalman Filter is an algorithm that uses a series of measurements observed over time, containing statistical noise, to produce estimates of unknown variables (like position) that are more accurate than those based on a single measurement alone.",
    difficulty: "hard",
    tags: ["Robotics", "State Estimation"]
  },
  {
    id: "ethics-robotics-025",
    question: "What defines a 'Holonomic' robot?",
    options: [
      "A robot that can move in any direction instantaneously without rotation",
      "A robot that looks like a human",
      "A robot that is controlled by a hologram",
      "A robot that can only move forward and backward"
    ],
    correctAnswer: 0,
    explanation: "A holonomic robot (like one with omni-wheels) allows the controllable degrees of freedom to equal the total degrees of freedom, enabling it to move in any direction (x, y) and rotate simultaneously.",
    difficulty: "medium",
    tags: ["Robotics", "Kinematics"]
  },
  {
    id: "ethics-robotics-026",
    question: "In AI Ethics, what is 'Automation Bias'?",
    options: [
      "The tendency of AI to automate jobs",
      "The propensity for humans to favor suggestions from automated decision-making systems",
      "The bias of robots against humans",
      "The error rate of automated systems"
    ],
    correctAnswer: 1,
    explanation: "Automation bias is the tendency of humans to over-rely on automated systems, often ignoring contradictory information or their own judgment, assuming the machine is always correct.",
    difficulty: "easy",
    tags: ["Ethics", "Human-AI Interaction"]
  },
  {
    id: "ethics-robotics-027",
    question: "What is 'Inverse Reinforcement Learning' (IRL) primarily used for in AI Alignment?",
    options: [
      "To teach the AI to play games backwards",
      "To infer the reward function (goals/values) of an agent (e.g., a human) by observing its behavior",
      "To punish the AI for bad behavior",
      "To speed up training"
    ],
    correctAnswer: 1,
    explanation: "Inverse Reinforcement Learning (IRL) is the process of deriving a reward function from observed behavior. It is used in alignment to help AI systems learn human values by observing human actions.",
    difficulty: "hard",
    tags: ["Ethics", "AI Alignment"]
  },
  {
    id: "ethics-robotics-028",
    question: "What is the 'Trolley Problem' often used to discuss in AI?",
    options: [
      "Public transportation logistics",
      "Ethical dilemmas involving trade-offs in autonomous decision making",
      "The cost of railway infrastructure",
      "The speed of electric vehicles"
    ],
    correctAnswer: 1,
    explanation: "The Trolley Problem is a classic ethical thought experiment used to discuss how Autonomous Vehicles (or AI) should make decisions in unavoidable accident scenarios where different outcomes involve different harms.",
    difficulty: "easy",
    tags: ["Ethics", "Moral Dilemmas"]
  },
  {
    id: "ethics-robotics-029",
    question: "What is 'Federated Learning' primarily designed to enhance?",
    options: [
      "Processing speed",
      "Data Privacy",
      "Image resolution",
      "Network bandwidth"
    ],
    correctAnswer: 1,
    explanation: "Federated Learning allows training a model across multiple decentralized edge devices or servers holding local data samples, without exchanging them, thus preserving data privacy.",
    difficulty: "medium",
    tags: ["Ethics", "Privacy"]
  },
  {
    id: "ethics-robotics-030",
    question: "What is the role of an 'Actuator' in a robot?",
    options: [
      "To think and process data",
      "To convert energy into motion",
      "To sense the environment",
      "To store the map"
    ],
    correctAnswer: 1,
    explanation: "An actuator is a component of a machine that is responsible for moving and controlling a mechanism or system, typically by converting electrical, hydraulic, or pneumatic energy into mechanical motion.",
    difficulty: "easy",
    tags: ["Robotics", "Hardware"]
  }
];
