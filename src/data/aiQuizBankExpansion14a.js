export const aiQuizBankExpansion14a = [
  {
    id: "mlops-001",
    question: "What is the primary objective of MLOps?",
    options: [
      "To automate the replacement of data scientists",
      "To unify ML system development (Dev) and ML system operation (Ops)",
      "To focus exclusively on model accuracy regardless of deployment speed",
      "To separate the data engineering team from the model training team"
    ],
    correctAnswer: 1,
    explanation: "MLOps aims to unify the development and operation of ML systems to increase automation, improve production quality, and ensure reliability and scalability.",
    difficulty: "easy",
    tags: ["MLOps", "Concepts"]
  },
  {
    id: "mlops-002",
    question: "Which Docker command is used to build an image from a Dockerfile?",
    options: [
      "docker create",
      "docker run",
      "docker build",
      "docker commit"
    ],
    correctAnswer: 2,
    explanation: "The `docker build` command builds a Docker image from a Dockerfile and a 'context' (the set of files at a specified location).",
    difficulty: "easy",
    tags: ["Docker", "CLI"]
  },
  {
    id: "mlops-003",
    question: "In Kubernetes, what is the smallest deployable unit that can be created and managed?",
    options: [
      "Service",
      "Deployment",
      "Pod",
      "Node"
    ],
    correctAnswer: 2,
    explanation: "A Pod is the smallest execution unit in Kubernetes. It encapsulates one or more applications (containers), storage resources, and a unique network IP.",
    difficulty: "medium",
    tags: ["Kubernetes", "Concepts"]
  },
  {
    id: "mlops-004",
    question: "What is 'Data Drift' in the context of deployed ML models?",
    options: [
      "The process of moving data from on-premise to cloud",
      "A change in the statistical properties of the input data over time",
      "The loss of data due to database corruption",
      "The latency introduced during data preprocessing"
    ],
    correctAnswer: 1,
    explanation: "Data drift refers to the change in the statistical distribution of the input data (features) used for prediction compared to the data used for training, which can degrade model performance.",
    difficulty: "medium",
    tags: ["MLOps", "Monitoring"]
  },
  {
    id: "mlops-005",
    question: "Which component in an MLOps pipeline is responsible for storing and versioning trained models?",
    options: [
      "Feature Store",
      "Model Registry",
      "Container Registry",
      "Git Repository"
    ],
    correctAnswer: 1,
    explanation: "A Model Registry is a centralized repository for storing, versioning, and managing the lifecycle of trained ML models.",
    difficulty: "easy",
    tags: ["MLOps", "Components"]
  },
  {
    id: "mlops-006",
    question: "What is the purpose of a 'Dockerfile'?",
    options: [
      "To list the files in a directory",
      "To define the steps to assemble a Docker image",
      "To manage Kubernetes clusters",
      "To store model hyperparameters"
    ],
    correctAnswer: 1,
    explanation: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image.",
    difficulty: "easy",
    tags: ["Docker", "Configuration"]
  },
  {
    id: "mlops-007",
    question: "In a CI/CD pipeline for ML, what does 'Continuous Training' (CT) refer to?",
    options: [
      "Training the model for an infinite number of epochs",
      "Automatically retraining the model when new data arrives or performance degrades",
      "Continuously monitoring the training loss during a single run",
      "Training models on a continuous stream of data without stopping"
    ],
    correctAnswer: 1,
    explanation: "Continuous Training (CT) is the process of automatically retraining and serving machine learning models in production to adapt to changes in data patterns.",
    difficulty: "medium",
    tags: ["MLOps", "CI/CD"]
  },
  {
    id: "mlops-008",
    question: "What is a 'Feature Store' used for?",
    options: [
      "Storing the output predictions of a model",
      "Centralizing and serving features for both training and inference to ensure consistency",
      "Archiving old model versions",
      "Storing raw unstructured data like images and audio"
    ],
    correctAnswer: 1,
    explanation: "A Feature Store is a centralized repository that stores curated features, ensuring that the same feature definitions and values are used for both model training and online inference (preventing training-serving skew).",
    difficulty: "medium",
    tags: ["MLOps", "Components"]
  },
  {
    id: "mlops-009",
    question: "Which Kubernetes object is primarily used to manage stateless applications and ensure a specified number of replicas are running?",
    options: [
      "StatefulSet",
      "DaemonSet",
      "Deployment",
      "Job"
    ],
    correctAnswer: 2,
    explanation: "A Deployment provides declarative updates for Pods and ReplicaSets. It is the standard way to deploy stateless applications and manage scaling and rollouts.",
    difficulty: "medium",
    tags: ["Kubernetes", "Resources"]
  },
  {
    id: "mlops-010",
    question: "What is 'Canary Deployment' in the context of ML model serving?",
    options: [
      "Deploying the model to a coal mine to test for gas",
      "Rolling out the new model to a small subset of users before a full release",
      "Running the new model in the background without showing predictions to users",
      "Replacing the old model instantly for all users"
    ],
    correctAnswer: 1,
    explanation: "Canary deployment involves rolling out a new version of a model to a small percentage of traffic to monitor its performance and stability before rolling it out to the entire infrastructure.",
    difficulty: "medium",
    tags: ["MLOps", "Deployment Strategies"]
  },
  {
    id: "mlops-011",
    question: "What is the difference between 'Model Drift' (Concept Drift) and 'Data Drift'?",
    options: [
      "They are the same thing",
      "Data drift is about input distribution changes; Concept drift is when the relationship between inputs and target changes",
      "Data drift is about the target variable; Concept drift is about the input features",
      "Data drift happens in training; Concept drift happens in inference"
    ],
    correctAnswer: 1,
    explanation: "Data Drift refers to changes in the input data distribution $P(X)$. Concept Drift refers to changes in the relationship between input and target $P(Y|X)$, meaning the definition of the 'ground truth' has changed.",
    difficulty: "hard",
    tags: ["MLOps", "Monitoring"]
  },
  {
    id: "mlops-012",
    question: "Which tool is widely used for container orchestration?",
    options: [
      "Docker Compose",
      "Kubernetes",
      "Ansible",
      "Terraform"
    ],
    correctAnswer: 1,
    explanation: "Kubernetes is the de facto standard for container orchestration, automating the deployment, scaling, and management of containerized applications.",
    difficulty: "easy",
    tags: ["Kubernetes", "Tools"]
  },
  {
    id: "mlops-013",
    question: "What is the purpose of 'Shadow Deployment'?",
    options: [
      "To hide the model from unauthorized users",
      "To run the new model alongside the old one, processing real traffic but not returning predictions to users",
      "To deploy the model on a dark web server",
      "To run the model only during night time"
    ],
    correctAnswer: 1,
    explanation: "Shadow deployment (or dark launch) lets the new model process production traffic in parallel with the existing model. Its predictions are logged for analysis but not returned to the user, allowing safe testing.",
    difficulty: "medium",
    tags: ["MLOps", "Deployment Strategies"]
  },
  {
    id: "mlops-014",
    question: "In a Dockerfile, what does the `FROM` instruction do?",
    options: [
      "Copies files from the host to the container",
      "Sets the working directory",
      "Initializes a new build stage and sets the base image",
      "Exposes a network port"
    ],
    correctAnswer: 2,
    explanation: "The `FROM` instruction initializes a new build stage and sets the Base Image for subsequent instructions. A valid Dockerfile must start with a `FROM` instruction.",
    difficulty: "easy",
    tags: ["Docker", "Configuration"]
  },
  {
    id: "mlops-015",
    question: "What is 'Reproducibility' in ML pipelines?",
    options: [
      "The ability to copy code from StackOverflow",
      "The ability to recreate the exact same model using the same code, data, and environment",
      "The ability to run the model on any hardware",
      "The ability to train a model in under an hour"
    ],
    correctAnswer: 1,
    explanation: "Reproducibility ensures that an ML experiment can be repeated with the exact same data, code, hyperparameters, and environment to yield the same results.",
    difficulty: "easy",
    tags: ["MLOps", "Concepts"]
  },
  {
    id: "mlops-016",
    question: "Which Kubernetes component exposes an application running on a set of Pods as a network service?",
    options: [
      "Volume",
      "Service",
      "ConfigMap",
      "Secret"
    ],
    correctAnswer: 1,
    explanation: "A Kubernetes Service is an abstraction which defines a logical set of Pods and a policy by which to access them (often via a stable IP address or DNS name).",
    difficulty: "medium",
    tags: ["Kubernetes", "Networking"]
  },
  {
    id: "mlops-017",
    question: "What is the role of 'MLflow' in the MLOps ecosystem?",
    options: [
      "It is a deep learning framework like PyTorch",
      "It is a platform to manage the ML lifecycle, including experimentation, reproducibility, and deployment",
      "It is a database for storing large datasets",
      "It is a Kubernetes distribution"
    ],
    correctAnswer: 1,
    explanation: "MLflow is an open-source platform for managing the end-to-end machine learning lifecycle, including tracking experiments, packaging code into reproducible runs, and sharing and deploying models.",
    difficulty: "medium",
    tags: ["MLOps", "Tools"]
  },
  {
    id: "mlops-018",
    question: "What is 'Training-Serving Skew'?",
    options: [
      "When the model trains faster than it serves predictions",
      "A discrepancy between the data/environment used during training and the data/environment encountered in production",
      "When the server hardware is skewed physically",
      "When the training data is not balanced"
    ],
    correctAnswer: 1,
    explanation: "Training-serving skew occurs when performance in production is worse than in training due to differences in how data is processed, feature engineering pipelines, or library versions between the two environments.",
    difficulty: "hard",
    tags: ["MLOps", "Challenges"]
  },
  {
    id: "mlops-019",
    question: "Which Docker command lists all running containers?",
    options: [
      "docker ps",
      "docker images",
      "docker run",
      "docker info"
    ],
    correctAnswer: 0,
    explanation: "`docker ps` lists the containers that are currently running. Adding `-a` lists all containers (running and stopped).",
    difficulty: "easy",
    tags: ["Docker", "CLI"]
  },
  {
    id: "mlops-020",
    question: "What is the purpose of a 'Liveness Probe' in Kubernetes?",
    options: [
      "To check if the container is ready to accept traffic",
      "To check if the container is running and restart it if it crashes or hangs",
      "To check if the container has the latest code",
      "To check if the node has enough memory"
    ],
    correctAnswer: 1,
    explanation: "A Liveness Probe checks if the application inside the container is alive. If the probe fails, Kubernetes kills the container and the container is subjected to its restart policy.",
    difficulty: "hard",
    tags: ["Kubernetes", "Health Checks"]
  },
  {
    id: "mlops-021",
    question: "In the context of MLOps, what is 'A/B Testing'?",
    options: [
      "Testing the model with dataset A and dataset B",
      "Comparing two versions of a model in production by splitting traffic between them to see which performs better on business metrics",
      "Testing the model on Alpha and Beta versions of the software",
      "Unit testing the API endpoints"
    ],
    correctAnswer: 1,
    explanation: "A/B testing in MLOps involves routing a subset of users to a new model (B) while the rest use the current model (A) to statistically compare their performance on real-world metrics.",
    difficulty: "medium",
    tags: ["MLOps", "Testing"]
  },
  {
    id: "mlops-022",
    question: "What is the main advantage of using containers (Docker) for ML models?",
    options: [
      "They make the model train faster",
      "They provide a consistent, isolated environment ensuring the model runs the same way everywhere",
      "They automatically tune hyperparameters",
      "They replace the need for a GPU"
    ],
    correctAnswer: 1,
    explanation: "Containers package the code and all its dependencies (libraries, runtime) together, solving the 'it works on my machine' problem and ensuring consistency across development, testing, and production.",
    difficulty: "easy",
    tags: ["Docker", "Benefits"]
  },
  {
    id: "mlops-023",
    question: "What is 'Kubeflow'?",
    options: [
      "A flow chart tool for Kubernetes",
      "A machine learning toolkit for Kubernetes dedicated to making deployments of ML workflows simple, portable, and scalable",
      "A new networking plugin for Kubernetes",
      "A database for storing Kubernetes logs"
    ],
    correctAnswer: 1,
    explanation: "Kubeflow is a project dedicated to making deployments of machine learning (ML) workflows on Kubernetes simple, portable, and scalable.",
    difficulty: "medium",
    tags: ["MLOps", "Tools"]
  },
  {
    id: "mlops-024",
    question: "Which file is used to define services, networks, and volumes for a multi-container Docker application?",
    options: [
      "Dockerfile",
      "package.json",
      "docker-compose.yml",
      "requirements.txt"
    ],
    correctAnswer: 2,
    explanation: "`docker-compose.yml` is the configuration file used by Docker Compose to define and run multi-container Docker applications.",
    difficulty: "easy",
    tags: ["Docker", "Tools"]
  },
  {
    id: "mlops-025",
    question: "What is the purpose of 'Horizontal Pod Autoscaling' (HPA) in Kubernetes?",
    options: [
      "To increase the size of the node disk",
      "To automatically update the container image version",
      "To automatically scale the number of Pods in a deployment based on observed CPU utilization or other metrics",
      "To move Pods to a different region"
    ],
    correctAnswer: 2,
    explanation: "HPA automatically scales the number of Pods in a replication controller, deployment, replica set, or stateful set based on observed CPU utilization or custom metrics.",
    difficulty: "medium",
    tags: ["Kubernetes", "Scaling"]
  }
];
