export const aiQuizBankExpansion14b = [
  {
    id: "mlops-026",
    question: "What is 'Data Drift' (or Covariate Shift) in the context of model monitoring?",
    options: [
      "Changes in the model's hyperparameters over time",
      "Changes in the statistical distribution of input features compared to training data",
      "The gradual decrease in model inference speed due to memory leaks",
      "The corruption of training labels in the database"
    ],
    correctAnswer: 1,
    explanation: "Data drift occurs when the distribution of the input data in production diverges from the distribution of the data used to train the model, potentially leading to performance degradation.",
    difficulty: "medium",
    tags: ["MLOps", "Monitoring", "Data Drift"]
  },
  {
    id: "mlops-027",
    question: "How does 'Concept Drift' differ from 'Data Drift'?",
    options: [
      "Concept drift is about the input data, while data drift is about the output labels",
      "Concept drift refers to a change in the relationship between input features and the target variable",
      "Concept drift only happens in unsupervised learning",
      "There is no difference; they are synonyms"
    ],
    correctAnswer: 1,
    explanation: "Concept drift happens when the statistical relationship between the input features and the target variable changes (e.g., user behavior changes), whereas data drift is purely about input distribution changes.",
    difficulty: "hard",
    tags: ["MLOps", "Monitoring", "Concept Drift"]
  },
  {
    id: "mlops-028",
    question: "Which metric is commonly used to quantify the magnitude of drift between two probability distributions?",
    options: [
      "Root Mean Squared Error (RMSE)",
      "Kullback-Leibler (KL) Divergence",
      "F1 Score",
      "Stochastic Gradient Descent"
    ],
    correctAnswer: 1,
    explanation: "KL Divergence (and related metrics like PSI or JS Divergence) measures how one probability distribution differs from a second, reference probability distribution, making it ideal for drift detection.",
    difficulty: "hard",
    tags: ["MLOps", "Monitoring", "Metrics"]
  },
  {
    id: "mlops-029",
    question: "What is 'Training-Serving Skew'?",
    options: [
      "When the model is trained on a GPU but served on a CPU",
      "A discrepancy in performance caused by differences in the data or pipeline between training and serving environments",
      "When the training data is larger than the serving memory capacity",
      "The time delay between finishing training and deploying the model"
    ],
    correctAnswer: 1,
    explanation: "Training-serving skew occurs when the code, data pipeline, or environment used for inference differs from what was used during training, leading to unexpected model behavior.",
    difficulty: "medium",
    tags: ["MLOps", "Deployment", "Best Practices"]
  },
  {
    id: "mlops-030",
    question: "In a 'Shadow Deployment' strategy, what happens to the user traffic?",
    options: [
      "It is split 50/50 between the old and new model",
      "It is sent to the new model, and if it fails, falls back to the old model",
      "It is sent to the existing model for response, but also duplicated to the new model for monitoring without affecting the user",
      "It is queued until the new model is fully warmed up"
    ],
    correctAnswer: 2,
    explanation: "Shadow deployment involves sending production traffic to the new model in parallel with the existing model. The new model's predictions are logged for analysis but not returned to the user.",
    difficulty: "medium",
    tags: ["MLOps", "Deployment", "Strategies"]
  },
  {
    id: "mlops-031",
    question: "What is the primary goal of a 'Canary Deployment'?",
    options: [
      "To deploy the model to a small subset of users first to detect issues before a full rollout",
      "To deploy the model only to internal developers",
      "To replace the old model instantly across all servers",
      "To run the model in an offline batch process"
    ],
    correctAnswer: 0,
    explanation: "Canary deployment releases the new version to a small percentage of users (the 'canaries') to validate performance and stability before rolling it out to the entire user base.",
    difficulty: "easy",
    tags: ["MLOps", "Deployment", "Strategies"]
  },
  {
    id: "mlops-032",
    question: "What is the main benefit of using ONNX (Open Neural Network Exchange)?",
    options: [
      "It automatically optimizes hyperparameters during training",
      "It provides a standard format to represent models, allowing interoperability between different frameworks (e.g., PyTorch to ONNX Runtime)",
      "It replaces the need for GPUs in production",
      "It is a programming language specifically for AI"
    ],
    correctAnswer: 1,
    explanation: "ONNX is an open standard format for machine learning models that allows models trained in one framework (like PyTorch) to be run in another (like ONNX Runtime) or on different hardware accelerators.",
    difficulty: "medium",
    tags: ["MLOps", "ONNX", "Interoperability"]
  },
  {
    id: "mlops-033",
    question: "When using TensorFlow Serving, what is the standard file format expected for the model?",
    options: [
      "HDF5 (.h5)",
      "Pickle (.pkl)",
      "SavedModel",
      "Checkpoint (.ckpt)"
    ],
    correctAnswer: 2,
    explanation: "TensorFlow Serving is designed to serve models exported in the TensorFlow 'SavedModel' format, which includes the model architecture, weights, and computation graph.",
    difficulty: "medium",
    tags: ["MLOps", "TF Serving", "TensorFlow"]
  },
  {
    id: "mlops-034",
    question: "What is the purpose of 'SignatureDefs' in a TensorFlow SavedModel?",
    options: [
      "To sign the model for security verification",
      "To define the input and output tensors and the specific computation graph to be executed for a given task (e.g., prediction)",
      "To list the authors of the model",
      "To define the memory requirements of the model"
    ],
    correctAnswer: 1,
    explanation: "SignatureDefs define the signature of a computation supported in a TensorFlow graph, identifying the input and output tensors so that serving systems know how to interact with the model.",
    difficulty: "hard",
    tags: ["MLOps", "TF Serving", "TensorFlow"]
  },
  {
    id: "mlops-035",
    question: "Which Kubernetes resource is primarily used to automatically scale the number of model replica pods based on CPU or custom metrics?",
    options: [
      "Vertical Pod Autoscaler (VPA)",
      "Horizontal Pod Autoscaler (HPA)",
      "DaemonSet",
      "StatefulSet"
    ],
    correctAnswer: 1,
    explanation: "The Horizontal Pod Autoscaler (HPA) automatically scales the number of pods in a replication controller, deployment, or replica set based on observed CPU utilization or custom metrics like request rate.",
    difficulty: "medium",
    tags: ["MLOps", "Kubernetes", "Scaling"]
  },
  {
    id: "mlops-036",
    question: "In Kubernetes, what is a 'Node Selector' or 'Node Affinity' often used for in ML deployments?",
    options: [
      "To select which users can access the model",
      "To ensure ML pods are scheduled on nodes with specific hardware, such as GPUs",
      "To select the version of Python to run",
      "To connect the pod to a specific database"
    ],
    correctAnswer: 1,
    explanation: "Node Selectors and Affinity rules allow you to constrain which nodes your pods are eligible to be scheduled on, which is critical for ensuring GPU-accelerated workloads land on GPU-enabled nodes.",
    difficulty: "medium",
    tags: ["MLOps", "Kubernetes", "Hardware"]
  },
  {
    id: "mlops-037",
    question: "What is the role of an 'Ingress Controller' in a Kubernetes ML deployment?",
    options: [
      "To control the training process inside the pod",
      "To manage external access to the services in a cluster, typically HTTP/HTTPS",
      "To inject environment variables into containers",
      "To store model artifacts"
    ],
    correctAnswer: 1,
    explanation: "An Ingress Controller manages incoming external traffic and routes it to the correct internal services (like your model serving pods), often handling load balancing and SSL termination.",
    difficulty: "medium",
    tags: ["MLOps", "Kubernetes", "Networking"]
  },
  {
    id: "mlops-038",
    question: "What is 'Request Batching' in the context of model serving?",
    options: [
      "Training the model in batches",
      "Grouping multiple incoming inference requests into a single batch to improve throughput and hardware utilization",
      "Sending requests to the model only at night",
      "Compressing the request data"
    ],
    correctAnswer: 1,
    explanation: "Request batching aggregates multiple individual inference requests into a single tensor batch, allowing the model (especially on GPUs) to process them in parallel, significantly increasing throughput.",
    difficulty: "medium",
    tags: ["MLOps", "Serving", "Optimization"]
  },
  {
    id: "mlops-039",
    question: "Which tool is commonly used to package Kubernetes applications (including ML deployments) into reusable charts?",
    options: [
      "Docker Compose",
      "Helm",
      "Ansible",
      "Terraform"
    ],
    correctAnswer: 1,
    explanation: "Helm is the package manager for Kubernetes. It uses 'charts' to define, install, and upgrade complex Kubernetes applications, making it easier to manage ML deployments.",
    difficulty: "easy",
    tags: ["MLOps", "Kubernetes", "Tools"]
  },
  {
    id: "mlops-040",
    question: "What is the function of a 'Model Registry' in an MLOps pipeline?",
    options: [
      "To register users who can use the model",
      "To store, version, and manage the lifecycle of ML models (e.g., staging, production)",
      "To register the hardware specifications of the server",
      "To log the training loss"
    ],
    correctAnswer: 1,
    explanation: "A Model Registry is a central repository to store and version trained models, track their lineage, and manage their lifecycle stages (e.g., moving a model from staging to production).",
    difficulty: "medium",
    tags: ["MLOps", "Governance", "Model Registry"]
  },
  {
    id: "mlops-041",
    question: "What is the 'Sidecar' pattern in Kubernetes often used for in ML serving?",
    options: [
      "Running a second model for ensemble learning",
      "Attaching a secondary container to the main application container to handle auxiliary tasks like logging, proxying, or metric collection",
      "Running the training job alongside the serving job",
      "Mounting a side storage volume"
    ],
    correctAnswer: 1,
    explanation: "The Sidecar pattern involves running a helper container alongside the main application container in the same pod. In ML, this is often used for tasks like scraping metrics, handling SSL, or logging payloads.",
    difficulty: "hard",
    tags: ["MLOps", "Kubernetes", "Patterns"]
  },
  {
    id: "mlops-042",
    question: "What is the primary advantage of using gRPC over REST for model serving?",
    options: [
      "gRPC is easier to debug with a web browser",
      "gRPC uses Protocol Buffers for efficient binary serialization and supports HTTP/2, offering lower latency and higher throughput",
      "gRPC does not require a network connection",
      "gRPC is natively supported by Python but not other languages"
    ],
    correctAnswer: 1,
    explanation: "gRPC is often preferred for high-performance model serving because it uses binary serialization (Protobuf) and persistent connections (HTTP/2), resulting in lower latency compared to text-based REST/JSON.",
    difficulty: "hard",
    tags: ["MLOps", "Serving", "Protocols"]
  },
  {
    id: "mlops-043",
    question: "What does `torch.onnx.export` do in PyTorch?",
    options: [
      "Exports the model weights to a CSV file",
      "Traces the model execution and exports it to the ONNX format",
      "Exports the model to a TensorFlow SavedModel",
      "Deletes the model from memory"
    ],
    correctAnswer: 1,
    explanation: "The `torch.onnx.export` function traces the execution of a PyTorch model with a dummy input and saves the computation graph in the ONNX standard format.",
    difficulty: "medium",
    tags: ["MLOps", "PyTorch", "ONNX"]
  },
  {
    id: "mlops-044",
    question: "In the context of MLOps, what is a 'Feature Store'?",
    options: [
      "A database for storing model hyperparameters",
      "A centralized system to store, document, and serve features for both training (offline) and inference (online) to ensure consistency",
      "A marketplace to buy pre-trained models",
      "A storage system for raw unstructured data"
    ],
    correctAnswer: 1,
    explanation: "A Feature Store manages feature engineering logic and data, providing a consistent source of features for both offline training and low-latency online inference, preventing training-serving skew.",
    difficulty: "medium",
    tags: ["MLOps", "Data Engineering", "Feature Store"]
  },
  {
    id: "mlops-045",
    question: "What is 'Model Warmup' in TensorFlow Serving?",
    options: [
      "Heating up the server room before deployment",
      "Running a set of sample requests through the model immediately after loading to initialize internal structures and caches before serving real traffic",
      "Training the model for a few extra epochs",
      "Increasing the CPU voltage"
    ],
    correctAnswer: 1,
    explanation: "Model warmup involves sending dummy requests to the model upon loading. This triggers lazy initializations (like graph optimization or memory allocation) so that the first real user request doesn't suffer from high latency.",
    difficulty: "hard",
    tags: ["MLOps", "TF Serving", "Optimization"]
  },
  {
    id: "mlops-046",
    question: "Which component is responsible for managing Custom Resources in Kubernetes, often used to manage complex ML lifecycles?",
    options: [
      "The Kubelet",
      "An Operator",
      "The Container Runtime",
      "The Proxy"
    ],
    correctAnswer: 1,
    explanation: "An Operator is a software extension to Kubernetes that makes use of Custom Resources to manage applications and their components. ML Operators (like TFOperator) manage the lifecycle of ML jobs.",
    difficulty: "hard",
    tags: ["MLOps", "Kubernetes", "Operators"]
  },
  {
    id: "mlops-047",
    question: "What is the purpose of 'Outlier Detection' in model monitoring?",
    options: [
      "To find the best performing model",
      "To identify individual input instances that are significantly different from the training distribution, which might lead to unreliable predictions",
      "To detect when the server is down",
      "To remove noise from the training data"
    ],
    correctAnswer: 1,
    explanation: "Outlier detection in monitoring helps identify anomalous input queries in production. These outliers might indicate data quality issues, attacks, or edge cases the model wasn't trained for.",
    difficulty: "medium",
    tags: ["MLOps", "Monitoring", "Anomalies"]
  },
  {
    id: "mlops-048",
    question: "Why is 'Version Control' for data (DVC, etc.) important in MLOps?",
    options: [
      "It compresses the data to save space",
      "It allows reproducibility by tracking which specific dataset version was used to train a specific model version",
      "It encrypts the data for security",
      "It automatically cleans the data"
    ],
    correctAnswer: 1,
    explanation: "Data version control ensures that you can link a specific model artifact back to the exact snapshot of data used to train it, which is essential for reproducibility and debugging.",
    difficulty: "easy",
    tags: ["MLOps", "Data", "Versioning"]
  },
  {
    id: "mlops-049",
    question: "What is the 'Feedback Loop' in a production ML system?",
    options: [
      "The electrical feedback in the server hardware",
      "The process of collecting outcomes or ground truth from production predictions and using them to retrain or improve the model",
      "The loop in the code that runs the prediction",
      "The communication between the frontend and backend"
    ],
    correctAnswer: 1,
    explanation: "A feedback loop involves capturing the actual results of the model's predictions (e.g., did the user click the recommended item?) and feeding that data back into the system for monitoring and retraining.",
    difficulty: "medium",
    tags: ["MLOps", "Lifecycle", "Feedback"]
  },
  {
    id: "mlops-050",
    question: "What is 'Explainability' (e.g., SHAP, LIME) in the context of model serving?",
    options: [
      "Documentation of the code",
      "Techniques to interpret and attribute a model's prediction to specific input features, helping to understand 'why' a decision was made",
      "Translating the model output to different languages",
      "Explaining the cost of the infrastructure"
    ],
    correctAnswer: 1,
    explanation: "Explainability techniques like SHAP or LIME provide insights into individual predictions by showing which features contributed most to the output, which is crucial for trust and compliance in production.",
    difficulty: "medium",
    tags: ["MLOps", "Explainability", "Trust"]
  }
];
