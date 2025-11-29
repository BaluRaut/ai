export const aiQuizBankExpansion14 = [
  {
    id: "mlops-001",
    question: "What is the primary function of Docker in an MLOps workflow?",
    options: [
      "To automatically tune model hyperparameters",
      "To package applications and dependencies into portable containers",
      "To visualize neural network architectures",
      "To manage database schemas"
    ],
    correctAnswer: 1,
    explanation: "Docker packages an application and its dependencies into a container, ensuring consistency across development, testing, and production environments.",
    difficulty: "easy",
    tags: ["MLOps", "Docker", "Deployment"]
  },
  {
    id: "mlops-002",
    question: "In Kubernetes, what is the smallest deployable unit of computing?",
    options: [
      "Node",
      "Cluster",
      "Pod",
      "Service"
    ],
    correctAnswer: 2,
    explanation: "A Pod is the smallest execution unit in Kubernetes, consisting of one or more containers that share storage and network resources.",
    difficulty: "easy",
    tags: ["MLOps", "Kubernetes", "Infrastructure"]
  },
  {
    id: "mlops-003",
    question: "What does CI/CD stand for in the context of software and ML engineering?",
    options: [
      "Continuous Integration / Continuous Deployment",
      "Computer Intelligence / Computer Design",
      "Code Inspection / Code Debugging",
      "Cloud Infrastructure / Cloud Delivery"
    ],
    correctAnswer: 0,
    explanation: "CI/CD stands for Continuous Integration and Continuous Deployment (or Delivery), a set of practices to automate the building, testing, and deploying of applications.",
    difficulty: "easy",
    tags: ["MLOps", "CI/CD", "DevOps"]
  },
  {
    id: "mlops-004",
    question: "What is 'Model Drift' in the context of model monitoring?",
    options: [
      "The process of moving a model from one server to another",
      "The degradation of model performance over time due to changes in data distribution",
      "The increase in model file size after training",
      "The random initialization of model weights"
    ],
    correctAnswer: 1,
    explanation: "Model drift (or concept drift) occurs when the statistical properties of the target variable change over time, causing the model's predictions to become less accurate.",
    difficulty: "medium",
    tags: ["MLOps", "Monitoring", "Drift"]
  },
  {
    id: "mlops-005",
    question: "What is the main advantage of using ONNX (Open Neural Network Exchange)?",
    options: [
      "It guarantees 100% accuracy for all models",
      "It provides interoperability between different deep learning frameworks",
      "It is the only format supported by NVIDIA GPUs",
      "It automatically cleans training data"
    ],
    correctAnswer: 1,
    explanation: "ONNX is an open format built to represent machine learning models, allowing models trained in one framework (like PyTorch) to be deployed in another (like ONNX Runtime) or converted to others.",
    difficulty: "medium",
    tags: ["MLOps", "ONNX", "Interoperability"]
  },
  {
    id: "mlops-006",
    question: "Which component of TensorFlow Serving allows for grouping multiple inference requests into a single batch for efficiency?",
    options: [
      "Model Loader",
      "Source Adapter",
      "Batching Session",
      "Request Batcher"
    ],
    correctAnswer: 2,
    explanation: "TensorFlow Serving uses a batching mechanism (often configured via `batching_parameters`) to combine multiple individual inference requests into a single batch to improve throughput on hardware like GPUs.",
    difficulty: "hard",
    tags: ["MLOps", "TF Serving", "Optimization"]
  },
  {
    id: "mlops-007",
    question: "What is a 'Canary Deployment' strategy?",
    options: [
      "Deploying the model to a coal mine to test for gas",
      "Rolling out the new version to a small subset of users before a full release",
      "Deploying the model only during the night",
      "Replacing the entire production environment instantly"
    ],
    correctAnswer: 1,
    explanation: "Canary deployment involves releasing a new version of an application or model to a small percentage of traffic to validate performance and stability before rolling it out to everyone.",
    difficulty: "medium",
    tags: ["MLOps", "Deployment", "Strategy"]
  },
  {
    id: "mlops-008",
    question: "What is the purpose of a 'Feature Store' in MLOps?",
    options: [
      "To store the trained model binaries",
      "To manage and serve features consistently for both training and inference",
      "To store the raw logs from the web server",
      "To sell features to other companies"
    ],
    correctAnswer: 1,
    explanation: "A Feature Store is a centralized repository that manages feature engineering logic and data, ensuring that the features used for training models are identical to those used during inference (preventing training-serving skew).",
    difficulty: "medium",
    tags: ["MLOps", "Feature Store", "Data Engineering"]
  },
  {
    id: "mlops-009",
    question: "In Docker, what is the difference between an image and a container?",
    options: [
      "An image is a running instance; a container is a read-only template",
      "An image is a read-only template; a container is a runnable instance of an image",
      "They are synonyms for the same thing",
      "An image is for Linux; a container is for Windows"
    ],
    correctAnswer: 1,
    explanation: "A Docker image is an immutable file containing the source code, libraries, and dependencies. A container is a running instance of that image.",
    difficulty: "easy",
    tags: ["MLOps", "Docker", "Concepts"]
  },
  {
    id: "mlops-010",
    question: "What is 'Training-Serving Skew'?",
    options: [
      "When the model trains faster than it serves predictions",
      "A discrepancy between the data/features used during training and those available at serving time",
      "When the server hardware is skewed physically",
      "A bias in the training data towards one class"
    ],
    correctAnswer: 1,
    explanation: "Training-serving skew happens when the data distribution or feature processing logic differs between the training environment and the production serving environment, leading to poor performance.",
    difficulty: "medium",
    tags: ["MLOps", "Monitoring", "Issues"]
  },
  {
    id: "mlops-011",
    question: "Which Kubernetes object is primarily used to manage stateless applications and ensure a specified number of replicas are running?",
    options: [
      "StatefulSet",
      "Deployment",
      "Job",
      "Ingress"
    ],
    correctAnswer: 1,
    explanation: "A Deployment controller provides declarative updates for Pods and ReplicaSets, commonly used for stateless applications to maintain a desired number of replicas.",
    difficulty: "medium",
    tags: ["MLOps", "Kubernetes", "Orchestration"]
  },
  {
    id: "mlops-012",
    question: "What is 'Shadow Deployment'?",
    options: [
      "Deploying a model in a dark theme",
      "Running the new model alongside the old one, receiving the same traffic but not returning its predictions to users",
      "Hiding the deployment from the system administrator",
      "Deploying a model that only works in the shadows"
    ],
    correctAnswer: 1,
    explanation: "Shadow deployment allows testing a new model in production by sending it real traffic and logging the results for comparison without affecting the end-user response.",
    difficulty: "medium",
    tags: ["MLOps", "Deployment", "Strategy"]
  },
  {
    id: "mlops-013",
    question: "What is the role of 'ONNX Runtime'?",
    options: [
      "To design neural network architectures",
      "To execute ONNX models with high performance across different hardware platforms",
      "To convert TensorFlow models to PyTorch",
      "To visualize the training process"
    ],
    correctAnswer: 1,
    explanation: "ONNX Runtime is a cross-platform inference engine that allows you to run models trained in various frameworks (exported to ONNX) efficiently on CPU, GPU, and other accelerators.",
    difficulty: "medium",
    tags: ["MLOps", "ONNX", "Inference"]
  },
  {
    id: "mlops-014",
    question: "In TF Serving, what file is typically used to configure model version policies and labels?",
    options: [
      "docker-compose.yml",
      "models.config",
      "serving.json",
      "pipeline.yaml"
    ],
    correctAnswer: 1,
    explanation: "TensorFlow Serving uses a `models.config` file (often in Protocol Buffer text format) to specify which models to load, their base paths, and version policies.",
    difficulty: "hard",
    tags: ["MLOps", "TF Serving", "Configuration"]
  },
  {
    id: "mlops-015",
    question: "What is 'Data Drift' specifically?",
    options: [
      "When the relationship between input features and target variable changes",
      "When the statistical distribution of the input data changes over time",
      "When data is lost during transmission",
      "When the database schema changes"
    ],
    correctAnswer: 1,
    explanation: "Data drift refers to changes in the distribution of the input data (independent variables) over time, which can degrade model performance even if the relationship to the target hasn't changed.",
    difficulty: "medium",
    tags: ["MLOps", "Monitoring", "Drift"]
  },
  {
    id: "mlops-016",
    question: "Which tool is commonly used for 'Container Orchestration'?",
    options: [
      "Docker Compose",
      "Kubernetes",
      "Ansible",
      "Jenkins"
    ],
    correctAnswer: 1,
    explanation: "Kubernetes is the de facto standard for container orchestration, managing the deployment, scaling, and operation of application containers across clusters of hosts.",
    difficulty: "easy",
    tags: ["MLOps", "Kubernetes", "Orchestration"]
  },
  {
    id: "mlops-017",
    question: "What is the benefit of 'Blue/Green Deployment'?",
    options: [
      "It saves energy by using green technologies",
      "It allows instant rollback by switching traffic between two identical environments (one live, one idle)",
      "It mixes two models to create a better one",
      "It deploys models only to users with blue or green eyes"
    ],
    correctAnswer: 1,
    explanation: "Blue/Green deployment reduces downtime and risk by running two identical production environments. Only one (Blue) serves live traffic. The new version is deployed to Green, tested, and then traffic is switched.",
    difficulty: "medium",
    tags: ["MLOps", "Deployment", "Strategy"]
  },
  {
    id: "mlops-018",
    question: "What is 'gRPC' and why is it used in model serving?",
    options: [
      "A graphical remote procedure call for visualization",
      "A high-performance RPC framework that uses Protocol Buffers, often faster than REST for internal microservices",
      "A protocol for global routing of packets",
      "A version control system for models"
    ],
    correctAnswer: 1,
    explanation: "gRPC is a high-performance, open-source RPC framework. In model serving (like TF Serving), it is often preferred over REST for its lower latency and efficient binary serialization using Protocol Buffers.",
    difficulty: "hard",
    tags: ["MLOps", "Serving", "Networking"]
  },
  {
    id: "mlops-019",
    question: "What is the purpose of a 'Model Registry'?",
    options: [
      "To register the model for copyright protection",
      "To store, version, and manage model artifacts and their metadata",
      "To list all the models available on the internet",
      "To schedule model training jobs"
    ],
    correctAnswer: 1,
    explanation: "A Model Registry is a central repository to manage the lifecycle of ML models, including versioning, stage transitions (staging to production), and storing metadata/artifacts.",
    difficulty: "easy",
    tags: ["MLOps", "Model Registry", "Management"]
  },
  {
    id: "mlops-020",
    question: "Which command builds a Docker image from a Dockerfile?",
    options: [
      "docker run",
      "docker pull",
      "docker build",
      "docker create"
    ],
    correctAnswer: 2,
    explanation: "`docker build` is the command used to create a Docker image from a Dockerfile and a context.",
    difficulty: "easy",
    tags: ["MLOps", "Docker", "Commands"]
  },
  {
    id: "mlops-021",
    question: "What is 'Continuous Training' (CT) in MLOps?",
    options: [
      "Training a model for 24 hours straight",
      "Automatically retraining models when performance drops or new data arrives",
      "Training models on continuous variables only",
      "The practice of developers constantly learning new skills"
    ],
    correctAnswer: 1,
    explanation: "Continuous Training is the MLOps practice of automatically triggering model retraining pipelines based on triggers like data availability, schedule, or performance degradation.",
    difficulty: "medium",
    tags: ["MLOps", "CI/CD", "Training"]
  },
  {
    id: "mlops-022",
    question: "What is the 'SavedModel' format?",
    options: [
      "A generic format for saving any file",
      "The standard serialization format for TensorFlow models, including weights and computation graph",
      "A format used exclusively by PyTorch",
      "A compressed zip file of images"
    ],
    correctAnswer: 1,
    explanation: "SavedModel is the universal serialization format for TensorFlow models. It is language-neutral and recoverable, making it ideal for serving with TensorFlow Serving.",
    difficulty: "medium",
    tags: ["MLOps", "TensorFlow", "Formats"]
  },
  {
    id: "mlops-023",
    question: "In Kubernetes, what is a 'Service'?",
    options: [
      "A background process on a node",
      "An abstraction that defines a logical set of Pods and a policy to access them (networking)",
      "A paid subscription feature",
      "The help desk for the cluster"
    ],
    correctAnswer: 1,
    explanation: "A Kubernetes Service is an abstraction which defines a logical set of Pods and a policy by which to access them, often providing a stable IP address and load balancing.",
    difficulty: "medium",
    tags: ["MLOps", "Kubernetes", "Networking"]
  },
  {
    id: "mlops-024",
    question: "What is 'A/B Testing' in the context of ML models?",
    options: [
      "Testing if the model knows the alphabet",
      "Comparing two models by routing a portion of live traffic to each and measuring business metrics",
      "Testing the model on dataset A and dataset B",
      "Checking if the model is compatible with blood type AB"
    ],
    correctAnswer: 1,
    explanation: "A/B testing involves deploying two variants of a model (A and B) to production and splitting traffic between them to determine which performs better on specific business metrics.",
    difficulty: "easy",
    tags: ["MLOps", "Testing", "Strategy"]
  },
  {
    id: "mlops-025",
    question: "What is the primary use of 'Prometheus' in an MLOps stack?",
    options: [
      "To train models",
      "To store large datasets",
      "To collect and store metrics as time-series data for monitoring",
      "To visualize graph structures"
    ],
    correctAnswer: 2,
    explanation: "Prometheus is an open-source systems monitoring and alerting toolkit that collects and stores metrics as time-series data, commonly used to monitor Kubernetes clusters and model endpoints.",
    difficulty: "medium",
    tags: ["MLOps", "Monitoring", "Tools"]
  },
  {
    id: "mlops-026",
    question: "What is 'Grafana' typically used for?",
    options: [
      "Writing code",
      "Visualizing metrics and logs through interactive dashboards",
      "Compiling C++ code",
      "Managing database transactions"
    ],
    correctAnswer: 1,
    explanation: "Grafana is an open-source analytics and interactive visualization web application. It provides charts, graphs, and alerts for the web when connected to supported data sources like Prometheus.",
    difficulty: "easy",
    tags: ["MLOps", "Monitoring", "Visualization"]
  },
  {
    id: "mlops-027",
    question: "What does 'Horizontal Pod Autoscaling' (HPA) do in Kubernetes?",
    options: [
      "Increases the size of the node's hard drive",
      "Automatically scales the number of Pods in a deployment based on observed CPU utilization or other metrics",
      "Adds more CPUs to a single container",
      "Moves Pods to a horizontal position on the screen"
    ],
    correctAnswer: 1,
    explanation: "HPA automatically scales the number of Pods in a replication controller, deployment, replica set, or stateful set based on observed CPU utilization or custom metrics.",
    difficulty: "medium",
    tags: ["MLOps", "Kubernetes", "Scaling"]
  },
  {
    id: "mlops-028",
    question: "What is 'Quantization' in the context of model deployment?",
    options: [
      "Converting a model to quantum computing format",
      "Reducing the precision of the numbers used to represent model parameters (e.g., float32 to int8) to reduce size and latency",
      "Increasing the number of layers in a model",
      "Measuring the quantity of data used"
    ],
    correctAnswer: 1,
    explanation: "Quantization is an optimization technique that reduces the precision of the model's weights and activations (e.g., from 32-bit floating point to 8-bit integer), reducing model size and inference latency with minimal accuracy loss.",
    difficulty: "medium",
    tags: ["MLOps", "Optimization", "Deployment"]
  },
  {
    id: "mlops-029",
    question: "What is 'Triton Inference Server'?",
    options: [
      "A database server by NVIDIA",
      "An open-source inference serving software that supports multiple frameworks (TensorFlow, PyTorch, ONNX, etc.)",
      "A specialized hardware for training",
      "A cloud provider"
    ],
    correctAnswer: 1,
    explanation: "Triton Inference Server (by NVIDIA) is a multi-framework inference serving software that simplifies the deployment of AI models at scale in production.",
    difficulty: "medium",
    tags: ["MLOps", "Serving", "Tools"]
  },
  {
    id: "mlops-030",
    question: "What is a 'Multi-stage Build' in Docker?",
    options: [
      "Building a Docker image on multiple computers at once",
      "A method to reduce image size by using multiple FROM instructions, copying only necessary artifacts to the final image",
      "Building an image that runs multiple applications",
      "A build process that takes multiple days"
    ],
    correctAnswer: 1,
    explanation: "Multi-stage builds allow you to use multiple `FROM` statements in a Dockerfile. You can copy artifacts (like compiled binaries) from one stage to another, leaving behind all the build dependencies in the final image to keep it small.",
    difficulty: "medium",
    tags: ["MLOps", "Docker", "Optimization"]
  },
  {
    id: "mlops-031",
    question: "What is 'Kubeflow'?",
    options: [
      "A flow chart tool for Kubernetes",
      "A machine learning toolkit for Kubernetes dedicated to making deployments of ML workflows simple, portable, and scalable",
      "A water cooling system for servers",
      "A new programming language"
    ],
    correctAnswer: 1,
    explanation: "Kubeflow is an open-source project dedicated to making deployments of machine learning (ML) workflows on Kubernetes simple, portable, and scalable.",
    difficulty: "medium",
    tags: ["MLOps", "Kubernetes", "Platform"]
  },
  {
    id: "mlops-032",
    question: "What is the purpose of 'DVC' (Data Version Control)?",
    options: [
      "To control the version of the database software",
      "To version control data and models, similar to how Git versions code",
      "To compress video data",
      "To visualize data distributions"
    ],
    correctAnswer: 1,
    explanation: "DVC is an open-source version control system for machine learning projects. It handles large files, data sets, and machine learning models, often integrating with Git.",
    difficulty: "medium",
    tags: ["MLOps", "Data Engineering", "Tools"]
  },
  {
    id: "mlops-033",
    question: "What is 'GitOps'?",
    options: [
      "A special version of Git for operations teams",
      "A paradigm where the Git repository is the single source of truth for infrastructure and application configuration",
      "Operating Git from the command line only",
      "A GitHub feature for project management"
    ],
    correctAnswer: 1,
    explanation: "GitOps is a set of practices to manage infrastructure and application configurations using Git, where the desired state of the system is versioned in Git and automatically applied to the cluster.",
    difficulty: "medium",
    tags: ["MLOps", "DevOps", "Strategy"]
  },
  {
    id: "mlops-034",
    question: "What is 'TorchServe'?",
    options: [
      "A flashlight app",
      "A flexible and easy-to-use tool for serving PyTorch models",
      "A library for torching bad data",
      "A monitoring tool for PyTorch"
    ],
    correctAnswer: 1,
    explanation: "TorchServe is a performant, flexible, and easy-to-use tool for serving PyTorch models in production, developed by AWS and Facebook.",
    difficulty: "medium",
    tags: ["MLOps", "Serving", "PyTorch"]
  },
  {
    id: "mlops-035",
    question: "What is the 'SignatureDef' in TensorFlow Serving?",
    options: [
      "The digital signature of the developer",
      "A definition that identifies the input and output tensors of a computation graph for serving",
      "The license agreement of the model",
      "The memory signature of the process"
    ],
    correctAnswer: 1,
    explanation: "SignatureDef defines the signature of a computation supported in a TensorFlow SavedModel, specifying the input and output tensors that can be accessed by the client.",
    difficulty: "hard",
    tags: ["MLOps", "TF Serving", "Concepts"]
  },
  {
    id: "mlops-036",
    question: "What is 'Pruning' in model optimization?",
    options: [
      "Cutting the cables of the server",
      "Removing unnecessary neurons or connections (weights) from a neural network to reduce size and complexity",
      "Reducing the size of the training dataset",
      "Stopping the training early"
    ],
    correctAnswer: 1,
    explanation: "Pruning involves removing parameters (weights) from a neural network that contribute little to the output, resulting in a smaller, faster, and more sparse model.",
    difficulty: "medium",
    tags: ["MLOps", "Optimization", "Concepts"]
  },
  {
    id: "mlops-037",
    question: "What is 'Helm' in the context of Kubernetes?",
    options: [
      "The steering wheel of a ship",
      "A package manager for Kubernetes that helps manage Kubernetes applications",
      "A security tool for containers",
      "A monitoring dashboard"
    ],
    correctAnswer: 1,
    explanation: "Helm is the package manager for Kubernetes. It uses 'charts' to define, install, and upgrade even the most complex Kubernetes applications.",
    difficulty: "medium",
    tags: ["MLOps", "Kubernetes", "Tools"]
  },
  {
    id: "mlops-038",
    question: "What is 'Ingress' in Kubernetes?",
    options: [
      "The entry point for data ingestion",
      "An API object that manages external access to the services in a cluster, typically HTTP/HTTPS",
      "A database query language",
      "A type of storage volume"
    ],
    correctAnswer: 1,
    explanation: "Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. Traffic routing is controlled by rules defined on the Ingress resource.",
    difficulty: "medium",
    tags: ["MLOps", "Kubernetes", "Networking"]
  },
  {
    id: "mlops-039",
    question: "Why is 'Reproducibility' critical in MLOps?",
    options: [
      "To ensure we can print the code on paper",
      "To ensure that a model can be recreated with the exact same performance given the same code and data",
      "To copy models to other companies",
      "It is not critical"
    ],
    correctAnswer: 1,
    explanation: "Reproducibility ensures that experiments are verifiable and that production models can be debugged or retrained reliably. It requires versioning code, data, and environment configurations.",
    difficulty: "easy",
    tags: ["MLOps", "Concepts", "Best Practices"]
  },
  {
    id: "mlops-040",
    question: "What is a 'Distroless' Docker image?",
    options: [
      "An image without a Linux distribution",
      "A minimal Docker image that contains only the application and its runtime dependencies, without package managers or shells",
      "An image that works on any OS",
      "A broken image"
    ],
    correctAnswer: 1,
    explanation: "Distroless images contain only your application and its runtime dependencies. They do not contain package managers, shells, or any other programs you would expect to find in a standard Linux distribution, improving security and reducing size.",
    difficulty: "hard",
    tags: ["MLOps", "Docker", "Security"]
  },
  {
    id: "mlops-041",
    question: "What is 'TensorRT'?",
    options: [
      "A TensorFlow rewriting tool",
      "An SDK by NVIDIA for high-performance deep learning inference optimization and runtime",
      "A real-time tensor visualization tool",
      "A database for tensors"
    ],
    correctAnswer: 1,
    explanation: "NVIDIA TensorRT is an SDK for high-performance deep learning inference. It includes a deep learning inference optimizer and runtime that delivers low latency and high throughput for deep learning inference applications.",
    difficulty: "medium",
    tags: ["MLOps", "Optimization", "NVIDIA"]
  },
  {
    id: "mlops-042",
    question: "What is 'OpenVINO'?",
    options: [
      "An open source wine database",
      "A toolkit by Intel for optimizing and deploying deep learning models on Intel hardware",
      "A virtualization software",
      "A new neural network architecture"
    ],
    correctAnswer: 1,
    explanation: "OpenVINO (Open Visual Inference and Neural network Optimization) is a toolkit from Intel that facilitates the optimization of a deep learning model from a framework and deployment using an inference engine on Intel hardware.",
    difficulty: "medium",
    tags: ["MLOps", "Optimization", "Intel"]
  },
  {
    id: "mlops-043",
    question: "What is the 'Sidecar' pattern in Kubernetes?",
    options: [
      "A motorcycle attachment",
      "Deploying a helper container alongside the main application container in the same Pod",
      "Running a backup server in a different region",
      "A pattern for writing documentation"
    ],
    correctAnswer: 1,
    explanation: "The Sidecar pattern involves co-locating another container in the same Pod as the main application container to provide auxiliary features like logging, monitoring, or proxying (e.g., Istio Envoy proxy).",
    difficulty: "medium",
    tags: ["MLOps", "Kubernetes", "Patterns"]
  },
  {
    id: "mlops-044",
    question: "What is 'Seldon Core'?",
    options: [
      "A character from a sci-fi novel",
      "An open-source platform for deploying machine learning models on Kubernetes",
      "A core library for Python",
      "A CPU architecture"
    ],
    correctAnswer: 1,
    explanation: "Seldon Core is an open-source platform that converts your ML models (TensorFlow, PyTorch, H2O, etc.) into production-ready REST/gRPC microservices deployed on Kubernetes.",
    difficulty: "hard",
    tags: ["MLOps", "Serving", "Platform"]
  },
  {
    id: "mlops-045",
    question: "What is 'BentoML'?",
    options: [
      "A Japanese lunch box",
      "A framework for building reliable, scalable, and cost-efficient AI applications",
      "A machine learning algorithm",
      "A cloud storage service"
    ],
    correctAnswer: 1,
    explanation: "BentoML is an open-source framework for machine learning model serving. It unifies the model serving workflow, supporting multiple frameworks and deployment targets.",
    difficulty: "medium",
    tags: ["MLOps", "Serving", "Tools"]
  },
  {
    id: "mlops-046",
    question: "What is 'Concept Drift'?",
    options: [
      "When the definition of the target variable changes over time",
      "When the input data distribution changes",
      "When the model forgets concepts",
      "When the developer changes the concept of the project"
    ],
    correctAnswer: 0,
    explanation: "Concept drift occurs when the statistical properties of the target variable (what the model is trying to predict) change over time. For example, the definition of 'fraud' might evolve.",
    difficulty: "medium",
    tags: ["MLOps", "Monitoring", "Drift"]
  },
  {
    id: "mlops-047",
    question: "What is the purpose of 'Docker Compose'?",
    options: [
      "To compose music",
      "To define and run multi-container Docker applications",
      "To write Dockerfiles automatically",
      "To monitor Docker containers"
    ],
    correctAnswer: 1,
    explanation: "Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application's services.",
    difficulty: "easy",
    tags: ["MLOps", "Docker", "Tools"]
  },
  {
    id: "mlops-048",
    question: "What is 'Latency' in model serving?",
    options: [
      "The time it takes to train the model",
      "The time delay between sending a request and receiving the prediction",
      "The accuracy of the model",
      "The size of the model on disk"
    ],
    correctAnswer: 1,
    explanation: "Latency is the time interval between the stimulation (sending the inference request) and the response (receiving the prediction). Low latency is critical for real-time applications.",
    difficulty: "easy",
    tags: ["MLOps", "Serving", "Metrics"]
  },
  {
    id: "mlops-049",
    question: "What is 'Throughput' in model serving?",
    options: [
      "The number of requests a system can handle per unit of time",
      "The speed of light through the server cables",
      "The amount of data used for training",
      "The number of layers in the network"
    ],
    correctAnswer: 0,
    explanation: "Throughput is the number of inference requests that the serving system can process successfully within a given time period (e.g., requests per second).",
    difficulty: "easy",
    tags: ["MLOps", "Serving", "Metrics"]
  },
  {
    id: "mlops-050",
    question: "What is the role of an 'API Gateway' in an MLOps architecture?",
    options: [
      "To prevent any access to the models",
      "To act as a single entry point for defined backend services, handling routing, authentication, and rate limiting",
      "To store the API documentation",
      "To train the models via API"
    ],
    correctAnswer: 1,
    explanation: "An API Gateway sits between clients and services. It acts as a reverse proxy, accepting all API calls, aggregating the various services required to fulfill them, and returning the appropriate result.",
    difficulty: "medium",
    tags: ["MLOps", "Infrastructure", "Networking"]
  }
];
