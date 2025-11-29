export const aiQuizBankExpansion9b = [
  {
    id: "edge-future-001",
    question: "What is the primary goal of 'Quantization' in the context of Edge AI?",
    options: [
      "To increase the number of layers in a neural network",
      "To reduce the precision of model weights to save memory and computation",
      "To increase the training speed of the model on the cloud",
      "To convert a supervised learning model into an unsupervised one"
    ],
    correctAnswer: 1,
    explanation: "Quantization involves reducing the precision of the numbers used to represent a model's parameters (e.g., from 32-bit floating point to 8-bit integers), which reduces model size and inference latency.",
    difficulty: "medium",
    tags: ["Edge AI", "Quantization"]
  },
  {
    id: "edge-future-002",
    question: "Which technique involves removing less important connections (weights) from a neural network to make it smaller and faster?",
    options: [
      "Dropout",
      "Pruning",
      "Padding",
      "Pooling"
    ],
    correctAnswer: 1,
    explanation: "Pruning is the process of removing weights that contribute little to the model's output, effectively sparsifying the network to reduce size and computational cost.",
    difficulty: "easy",
    tags: ["Edge AI", "Pruning"]
  },
  {
    id: "edge-future-003",
    question: "What is 'TinyML'?",
    options: [
      "A machine learning library for massive supercomputers",
      "A field of study focused on running ML models on ultra-low-power microcontrollers",
      "A small dataset used for testing large models",
      "A simplified version of Python for AI"
    ],
    correctAnswer: 1,
    explanation: "TinyML brings machine learning to low-power devices like microcontrollers (MCUs), enabling always-on smart applications with milliwatt power consumption.",
    difficulty: "medium",
    tags: ["Edge AI", "TinyML"]
  },
  {
    id: "edge-future-004",
    question: "In the context of Mobile AI, what does 'NPU' stand for?",
    options: [
      "Network Processing Unit",
      "Neural Processing Unit",
      "Natural Processing Unit",
      "Node Processing Unit"
    ],
    correctAnswer: 1,
    explanation: "An NPU (Neural Processing Unit) is a specialized circuit designed to accelerate machine learning algorithms, particularly neural networks, on mobile and edge devices.",
    difficulty: "easy",
    tags: ["Edge AI", "Hardware"]
  },
  {
    id: "edge-future-005",
    question: "What is the main advantage of 'Edge Computing' over 'Cloud Computing' for real-time AI applications?",
    options: [
      "Unlimited storage capacity",
      "Higher processing power",
      "Lower latency and reduced bandwidth usage",
      "Easier model training"
    ],
    correctAnswer: 2,
    explanation: "Edge computing processes data locally on the device, eliminating the need to send data to a central server, which significantly reduces latency and bandwidth requirements.",
    difficulty: "medium",
    tags: ["Edge AI", "Concepts"]
  },
  {
    id: "edge-future-006",
    question: "Which framework is specifically designed for deploying machine learning models on mobile and embedded devices?",
    options: [
      "TensorFlow Lite",
      "Scikit-learn",
      "Pandas",
      "Apache Spark"
    ],
    correctAnswer: 0,
    explanation: "TensorFlow Lite is a set of tools that enables on-device machine learning by helping developers run their models on mobile, embedded, and IoT devices.",
    difficulty: "easy",
    tags: ["Edge AI", "Tools"]
  },
  {
    id: "edge-future-007",
    question: "What is 'Knowledge Distillation'?",
    options: [
      "Transferring knowledge from a large 'teacher' model to a smaller 'student' model",
      "Extracting rules from a neural network",
      "Summarizing text documents",
      "Cleaning a dataset before training"
    ],
    correctAnswer: 0,
    explanation: "Knowledge Distillation is a compression technique where a small, compact model (student) is trained to reproduce the behavior and performance of a large, complex model (teacher).",
    difficulty: "hard",
    tags: ["Edge AI", "Optimization"]
  },
  {
    id: "edge-future-008",
    question: "Which data format is commonly used for interoperability between different AI frameworks and deployment on edge devices?",
    options: [
      "HTML",
      "ONNX (Open Neural Network Exchange)",
      "SQL",
      "CSV"
    ],
    correctAnswer: 1,
    explanation: "ONNX is an open format built to represent machine learning models, allowing models trained in one framework (like PyTorch) to be deployed using another (like ONNX Runtime) on various hardware.",
    difficulty: "medium",
    tags: ["Edge AI", "Standards"]
  },
  {
    id: "edge-future-009",
    question: "What is a key challenge when deploying AI models on battery-powered edge devices?",
    options: [
      "Internet speed",
      "Power consumption / Energy efficiency",
      "Screen resolution",
      "Keyboard layout"
    ],
    correctAnswer: 1,
    explanation: "Energy efficiency is critical for battery-powered devices. AI models can be computationally intensive, draining batteries quickly if not optimized.",
    difficulty: "easy",
    tags: ["Edge AI", "Challenges"]
  },
  {
    id: "edge-future-010",
    question: "What is 'Federated Learning'?",
    options: [
      "Training a model on a single centralized server",
      "Training an algorithm across multiple decentralized edge devices holding local data samples",
      "Combining different types of neural networks",
      "Learning from labeled and unlabeled data simultaneously"
    ],
    correctAnswer: 1,
    explanation: "Federated Learning enables mobile phones to collaboratively learn a shared prediction model while keeping all the training data on the device, enhancing privacy.",
    difficulty: "hard",
    tags: ["Edge AI", "Privacy"]
  },
  {
    id: "edge-future-011",
    question: "Which of the following is NOT a typical technique for model compression?",
    options: [
      "Quantization",
      "Pruning",
      "Data Augmentation",
      "Low-rank factorization"
    ],
    correctAnswer: 2,
    explanation: "Data Augmentation is a technique used during training to increase the diversity of data, not to compress the model size. The others are compression techniques.",
    difficulty: "medium",
    tags: ["Edge AI", "Optimization"]
  },
  {
    id: "edge-future-012",
    question: "In the context of quantization, what does 'Post-training quantization' refer to?",
    options: [
      "Quantizing the model after it has been fully trained",
      "Quantizing the model during the training process",
      "Quantizing the training data before feeding it to the model",
      "Quantizing the output predictions only"
    ],
    correctAnswer: 0,
    explanation: "Post-training quantization is a conversion technique that reduces model size and improves CPU and hardware accelerator latency with little degradation in model accuracy, applied after training is complete.",
    difficulty: "medium",
    tags: ["Edge AI", "Quantization"]
  },
  {
    id: "edge-future-013",
    question: "What is the benefit of using 'int8' weights instead of 'float32' weights?",
    options: [
      "4x reduction in model size",
      "2x reduction in model size",
      "No change in model size",
      "Increase in model size"
    ],
    correctAnswer: 0,
    explanation: "An 8-bit integer (int8) takes up 1 byte, while a 32-bit float (float32) takes up 4 bytes. Thus, switching from float32 to int8 results in a 4x reduction in memory usage for weights.",
    difficulty: "medium",
    tags: ["Edge AI", "Quantization"]
  },
  {
    id: "edge-future-014",
    question: "Which hardware accelerator is often found in modern smartphones to handle AI tasks like facial recognition?",
    options: [
      "Tape Drive",
      "DSP (Digital Signal Processor) / AI Engine",
      "Floppy Disk Controller",
      "Ethernet Card"
    ],
    correctAnswer: 1,
    explanation: "Modern smartphones often include dedicated AI hardware like DSPs (e.g., Hexagon) or Neural Engines to handle AI workloads efficiently.",
    difficulty: "easy",
    tags: ["Edge AI", "Hardware"]
  },
  {
    id: "edge-future-015",
    question: "What does 'Latency' refer to in Edge AI?",
    options: [
      "The accuracy of the model",
      "The time taken to process a single inference request",
      "The amount of data stored in the cloud",
      "The training time of the model"
    ],
    correctAnswer: 1,
    explanation: "Latency is the time delay between an input being provided to the model and the model producing an output. Low latency is crucial for real-time edge applications.",
    difficulty: "easy",
    tags: ["Edge AI", "Concepts"]
  },
  {
    id: "edge-future-016",
    question: "What does AGI stand for?",
    options: [
      "Artificial General Intelligence",
      "Automated Graphic Interface",
      "Advanced Genetic Intelligence",
      "Applied Global Information"
    ],
    correctAnswer: 0,
    explanation: "AGI (Artificial General Intelligence) refers to a type of AI that possesses the ability to understand, learn, and apply knowledge across a wide variety of tasks, similar to human intelligence.",
    difficulty: "easy",
    tags: ["Future AI", "AGI"]
  },
  {
    id: "edge-future-017",
    question: "What is the 'Technological Singularity'?",
    options: [
      "A single point of failure in a network",
      "A hypothetical point in time when technological growth becomes uncontrollable and irreversible, often associated with self-improving AI",
      "The invention of the first computer",
      "When AI achieves 100% accuracy on all tasks"
    ],
    correctAnswer: 1,
    explanation: "The Singularity is a hypothetical future point where AI becomes capable of recursive self-improvement, leading to an intelligence explosion that radically changes civilization.",
    difficulty: "medium",
    tags: ["Future AI", "Singularity"]
  },
  {
    id: "edge-future-018",
    question: "What is a Brain-Computer Interface (BCI)?",
    options: [
      "A keyboard and mouse",
      "A direct communication pathway between an enhanced or wired brain and an external device",
      "A VR headset",
      "A simulation of the brain on a computer"
    ],
    correctAnswer: 1,
    explanation: "BCIs allow for direct communication between the brain and external devices, potentially enabling control of computers or prosthetics via thought, or even memory augmentation.",
    difficulty: "medium",
    tags: ["Future AI", "BCI"]
  },
  {
    id: "edge-future-019",
    question: "What is the 'Alignment Problem' in AI safety?",
    options: [
      "Aligning images in a dataset",
      "Ensuring AI systems' goals and behaviors are aligned with human values and intent",
      "Aligning text in a document",
      "Making sure all servers are in a straight line"
    ],
    correctAnswer: 1,
    explanation: "The Alignment Problem concerns the difficulty of ensuring that highly capable AI systems pursue goals that are beneficial to humans and do not cause unintended harm.",
    difficulty: "medium",
    tags: ["Future AI", "Safety"]
  },
  {
    id: "edge-future-020",
    question: "What is 'Neuromorphic Computing'?",
    options: [
      "Computing using biological neurons only",
      "Designing computer chips and systems that mimic the biological structure and function of the human brain",
      "Using AI to study the brain",
      "A new programming language for neurology"
    ],
    correctAnswer: 1,
    explanation: "Neuromorphic computing involves hardware architectures (like Spiking Neural Networks) that mimic the brain's neuro-biological structures to achieve high efficiency and parallelism.",
    difficulty: "hard",
    tags: ["Future AI", "Hardware"]
  },
  {
    id: "edge-future-021",
    question: "Which test was proposed by Alan Turing to determine if a machine exhibits intelligent behavior equivalent to a human?",
    options: [
      "The IQ Test",
      "The Turing Test",
      "The Voight-Kampff Test",
      "The Rorschach Test"
    ],
    correctAnswer: 1,
    explanation: "The Turing Test evaluates a machine's ability to exhibit intelligent behavior indistinguishable from that of a human during a text-only conversation.",
    difficulty: "easy",
    tags: ["Future AI", "History"]
  },
  {
    id: "edge-future-022",
    question: "What is 'Whole Brain Emulation' (Mind Uploading)?",
    options: [
      "Scanning a brain and copying its computational state to a digital substrate",
      "Using a computer to perform brain surgery",
      "Connecting two brains together",
      "Simulating a single neuron"
    ],
    correctAnswer: 0,
    explanation: "Whole Brain Emulation is the hypothetical process of scanning the mental state of a particular brain substrate and copying it to a computer, potentially allowing the mind to live on digitally.",
    difficulty: "hard",
    tags: ["Future AI", "Transhumanism"]
  },
  {
    id: "edge-future-023",
    question: "What is 'Explainable AI' (XAI) and why is it important for the future?",
    options: [
      "AI that can speak",
      "AI systems whose actions and decisions can be understood by humans",
      "AI that explains how to code",
      "AI that is open source"
    ],
    correctAnswer: 1,
    explanation: "As AI becomes more complex (black boxes), XAI is crucial for trust, accountability, and safety, ensuring humans understand why an AI made a specific decision.",
    difficulty: "medium",
    tags: ["Future AI", "Ethics"]
  },
  {
    id: "edge-future-024",
    question: "What is the concept of 'Superintelligence'?",
    options: [
      "An intellect that is much smarter than the best human brains in practically every field",
      "A computer with a very fast processor",
      "A human with a high IQ",
      "A large database of information"
    ],
    correctAnswer: 0,
    explanation: "Superintelligence refers to an agent that possesses intelligence far surpassing that of the brightest and most gifted human minds.",
    difficulty: "easy",
    tags: ["Future AI", "Concepts"]
  },
  {
    id: "edge-future-025",
    question: "How might Quantum Computing impact AI in the future?",
    options: [
      "It will make AI slower but more accurate",
      "It could exponentially speed up optimization and training of complex models",
      "It will replace all AI algorithms with quantum physics",
      "It has no potential impact on AI"
    ],
    correctAnswer: 1,
    explanation: "Quantum computing offers the potential to solve certain optimization and linear algebra problems much faster than classical computers, potentially revolutionizing machine learning training and inference.",
    difficulty: "medium",
    tags: ["Future AI", "Quantum AI"]
  },
  {
    id: "edge-future-026",
    question: "What is 'Narrow AI' (or Weak AI)?",
    options: [
      "AI that is physically small",
      "AI designed and trained for a specific task",
      "AI that fails often",
      "AI that has general consciousness"
    ],
    correctAnswer: 1,
    explanation: "Narrow AI is designed to perform a specific task (like playing chess or recognizing faces) and does not possess general cognitive abilities. This describes all current AI.",
    difficulty: "easy",
    tags: ["Future AI", "Concepts"]
  },
  {
    id: "edge-future-027",
    question: "What is the 'Paperclip Maximizer' thought experiment?",
    options: [
      "An AI that helps organize office supplies",
      "A scenario showing how an AI with a harmless goal could destroy the world if not aligned with human values",
      "A game about making paperclips",
      "A method for compressing files"
    ],
    correctAnswer: 1,
    explanation: "Proposed by Nick Bostrom, it illustrates instrumental convergence: an AI designed solely to maximize paperclips might consume all matter in the universe to achieve that goal, harming humans in the process.",
    difficulty: "hard",
    tags: ["Future AI", "Safety"]
  },
  {
    id: "edge-future-028",
    question: "What is 'Morphological Computation' in robotics?",
    options: [
      "Computing using shapes",
      "Offloading computational control tasks to the physical body mechanics of the robot",
      "Changing the shape of the computer case",
      "Using 3D printers to make computers"
    ],
    correctAnswer: 1,
    explanation: "Morphological computation involves designing the physical body of a robot (e.g., soft materials, compliant joints) to simplify the control algorithms needed for movement.",
    difficulty: "hard",
    tags: ["Future AI", "Robotics"]
  },
  {
    id: "edge-future-029",
    question: "Which of these is a major ethical concern regarding the future of AI?",
    options: [
      "AI will become too expensive",
      "Algorithmic bias and job displacement",
      "AI will run out of electricity",
      "AI will refuse to work"
    ],
    correctAnswer: 1,
    explanation: "Bias in training data can lead to unfair discrimination, and automation by AI poses risks of significant job displacement in various sectors.",
    difficulty: "medium",
    tags: ["Future AI", "Ethics"]
  },
  {
    id: "edge-future-030",
    question: "What is 'Active Learning' in the context of future AI systems?",
    options: [
      "AI that runs while you exercise",
      "A learning algorithm that can interactively query a user (or other information source) to label new data points with the desired outputs",
      "AI that learns without any data",
      "AI that is always turned on"
    ],
    correctAnswer: 1,
    explanation: "Active Learning allows an AI to choose which data it learns from, asking for human help only on the most confusing examples, making learning more efficient.",
    difficulty: "medium",
    tags: ["Future AI", "Learning Paradigms"]
  }
];
