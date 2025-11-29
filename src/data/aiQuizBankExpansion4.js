export const aiQuizBankExpansion4 = [
  {
    "id": "ethics-mlops-001",
    "question": "Which type of bias occurs when the data used to train a model does not accurately represent the population it is intended to serve?",
    "options": [
      "Confirmation Bias",
      "Selection Bias",
      "Historical Bias",
      "Automation Bias"
    ],
    "correctAnswer": 1,
    "explanation": "Selection bias happens when the training data is chosen in a way that is not representative of the real-world distribution, leading to skewed model performance.",
    "difficulty": "easy",
    "tags": ["AI Ethics", "Bias"]
  },
  {
    "id": "ethics-mlops-002",
    "question": "In the context of AI fairness, what does 'Demographic Parity' require?",
    "options": [
      "The model's accuracy is the same across all groups.",
      "The proportion of positive predictions is equal across all sensitive groups.",
      "The true positive rates are equal across all groups.",
      "The model uses different thresholds for different groups."
    ],
    "correctAnswer": 1,
    "explanation": "Demographic Parity ensures that the likelihood of a positive outcome (e.g., getting a loan) is the same regardless of group membership (e.g., gender or race), ignoring the ground truth.",
    "difficulty": "medium",
    "tags": ["AI Ethics", "Fairness"]
  },
  {
    "id": "ethics-mlops-003",
    "question": "What is the primary goal of SHAP (SHapley Additive exPlanations) in AI explainability?",
    "options": [
      "To reduce the dimensionality of the dataset.",
      "To assign an importance value to each feature for a specific prediction.",
      "To visualize the decision tree structure.",
      "To prevent adversarial attacks."
    ],
    "correctAnswer": 1,
    "explanation": "SHAP values provide a unified measure of feature importance by calculating the contribution of each feature to the prediction, based on cooperative game theory.",
    "difficulty": "medium",
    "tags": ["AI Ethics", "Explainability"]
  },
  {
    "id": "ethics-mlops-004",
    "question": "Which privacy technique adds noise to a dataset or query result to prevent the identification of individuals while maintaining statistical validity?",
    "options": [
      "Federated Learning",
      "Homomorphic Encryption",
      "Differential Privacy",
      "Secure Multi-Party Computation"
    ],
    "correctAnswer": 2,
    "explanation": "Differential Privacy mathematically guarantees that the output of an algorithm does not significantly depend on the inclusion of any single individual's data, usually achieved by adding noise.",
    "difficulty": "hard",
    "tags": ["AI Ethics", "Privacy"]
  },
  {
    "id": "ethics-mlops-005",
    "question": "What is an 'Adversarial Attack' in the context of AI safety?",
    "options": [
      "Stealing the model weights.",
      "Manipulating input data with imperceptible noise to cause the model to make a mistake.",
      "Overloading the server with requests.",
      "Injecting bias into the training data."
    ],
    "correctAnswer": 1,
    "explanation": "Adversarial attacks involve crafting inputs (often with subtle perturbations) specifically designed to fool a machine learning model into making an incorrect classification.",
    "difficulty": "medium",
    "tags": ["AI Ethics", "Safety"]
  },
  {
    "id": "ethics-mlops-006",
    "question": "Which fairness metric requires that individuals who are qualified (have the positive label in ground truth) have an equal chance of being selected, regardless of their group?",
    "options": [
      "Demographic Parity",
      "Equal Opportunity",
      "Calibration",
      "Predictive Parity"
    ],
    "correctAnswer": 1,
    "explanation": "Equal Opportunity focuses on the True Positive Rate, ensuring that qualified candidates in different groups are treated equally.",
    "difficulty": "hard",
    "tags": ["AI Ethics", "Fairness"]
  },
  {
    "id": "ethics-mlops-007",
    "question": "What distinguishes LIME (Local Interpretable Model-agnostic Explanations) from global explainability methods?",
    "options": [
      "It explains the entire model's behavior at once.",
      "It approximates the model locally around a specific prediction using a simpler interpretable model.",
      "It only works for linear regression models.",
      "It requires access to the model's internal weights."
    ],
    "correctAnswer": 1,
    "explanation": "LIME explains individual predictions by perturbing the input around a specific data point and fitting a simple, interpretable model (like a linear model) to the local output.",
    "difficulty": "medium",
    "tags": ["AI Ethics", "Explainability"]
  },
  {
    "id": "ethics-mlops-008",
    "question": "How does Federated Learning contribute to data privacy?",
    "options": [
      "By encrypting the data in the cloud.",
      "By training the model on decentralized devices without moving the raw data to a central server.",
      "By removing all personal identifiers from the dataset.",
      "By using blockchain to store data."
    ],
    "correctAnswer": 1,
    "explanation": "Federated Learning allows models to be trained across multiple decentralized edge devices or servers holding local data samples, without exchanging them, thus keeping raw data private.",
    "difficulty": "medium",
    "tags": ["AI Ethics", "Privacy"]
  },
  {
    "id": "ethics-mlops-009",
    "question": "Historical bias in AI refers to:",
    "options": [
      "Bias introduced during the feature engineering phase.",
      "Bias that exists in the world and is reflected in the data generation process, even if the sampling is perfect.",
      "Bias caused by using outdated algorithms.",
      "Bias resulting from hardware limitations."
    ],
    "correctAnswer": 1,
    "explanation": "Historical bias arises when the data reflects existing prejudices or structural inequalities in society (e.g., historical hiring practices), which the model then learns and perpetuates.",
    "difficulty": "easy",
    "tags": ["AI Ethics", "Bias"]
  },
  {
    "id": "ethics-mlops-010",
    "question": "What is 'Model Inversion' in the context of AI security?",
    "options": [
      "Reversing the order of layers in a neural network.",
      "Inferring sensitive features of the training data by analyzing the model's outputs.",
      "Training a model to predict the opposite of the ground truth.",
      "Deploying a model back to the development environment."
    ],
    "correctAnswer": 1,
    "explanation": "Model Inversion attacks attempt to reconstruct the training data or sensitive features of the input by querying the model and analyzing its confidence scores or outputs.",
    "difficulty": "hard",
    "tags": ["AI Ethics", "Safety"]
  },
  {
    "id": "ethics-mlops-011",
    "question": "Which of the following best describes 'Confirmation Bias' in data analysis?",
    "options": [
      "The tendency to search for, interpret, or recall information in a way that confirms one's preexisting beliefs.",
      "The error of rejecting a true null hypothesis.",
      "The bias introduced when data is missing not at random.",
      "The tendency of a model to predict the majority class."
    ],
    "correctAnswer": 0,
    "explanation": "Confirmation bias is a cognitive bias where an analyst or data scientist might unconsciously favor data or results that support their initial hypothesis while ignoring contradictory evidence.",
    "difficulty": "easy",
    "tags": ["AI Ethics", "Bias"]
  },
  {
    "id": "ethics-mlops-012",
    "question": "What is the main trade-off often encountered when implementing Differential Privacy?",
    "options": [
      "Privacy vs. Security",
      "Privacy vs. Utility (Accuracy)",
      "Speed vs. Cost",
      "Fairness vs. Explainability"
    ],
    "correctAnswer": 1,
    "explanation": "Adding noise to data to guarantee differential privacy inevitably degrades the quality of the data, leading to a trade-off between the level of privacy protection and the accuracy (utility) of the model.",
    "difficulty": "medium",
    "tags": ["AI Ethics", "Privacy"]
  },
  {
    "id": "ethics-mlops-013",
    "question": "In AI robustness, what does it mean for a model to be 'robust'?",
    "options": [
      "It has high accuracy on the training set.",
      "It maintains performance even when inputs are perturbed, noisy, or slightly different from the training distribution.",
      "It can be trained very quickly.",
      "It uses a large number of parameters."
    ],
    "correctAnswer": 1,
    "explanation": "Robustness refers to a system's ability to function correctly and maintain performance in the presence of invalid inputs, noise, or stressful environmental conditions.",
    "difficulty": "medium",
    "tags": ["AI Ethics", "Safety"]
  },
  {
    "id": "ethics-mlops-014",
    "question": "Which concept refers to the ability to trace a model's decision back to the specific data points or logic that influenced it?",
    "options": [
      "Scalability",
      "Traceability / Accountability",
      "Availability",
      "Elasticity"
    ],
    "correctAnswer": 1,
    "explanation": "Traceability and accountability involve understanding the lineage of data and the logic of algorithms so that decisions can be audited and justified.",
    "difficulty": "easy",
    "tags": ["AI Ethics", "Explainability"]
  },
  {
    "id": "ethics-mlops-015",
    "question": "What is a 'Proxy Variable' in the context of discrimination?",
    "options": [
      "A variable used to speed up training.",
      "A seemingly neutral variable that is highly correlated with a protected attribute (like race or gender).",
      "A variable that has no impact on the prediction.",
      "A variable used to replace missing values."
    ],
    "correctAnswer": 1,
    "explanation": "Even if a protected attribute is removed, a model can still discriminate if it uses a proxy variable (e.g., zip code) that correlates strongly with the protected attribute (e.g., race).",
    "difficulty": "medium",
    "tags": ["AI Ethics", "Bias"]
  },
  {
    "id": "ethics-mlops-016",
    "question": "Which MLOps component is primarily responsible for tracking experiments, parameters, and metrics?",
    "options": [
      "Feature Store",
      "Model Registry",
      "Experiment Tracking System (e.g., MLflow Tracking)",
      "Kubernetes"
    ],
    "correctAnswer": 2,
    "explanation": "Experiment tracking tools allow data scientists to log parameters, code versions, metrics, and output files for every run, enabling comparison and reproducibility.",
    "difficulty": "easy",
    "tags": ["MLOps", "Lifecycle"]
  },
  {
    "id": "ethics-mlops-017",
    "question": "What is 'Data Drift'?",
    "options": [
      "The relationship between input features and the target variable changes.",
      "The statistical properties of the input data change over time compared to the training data.",
      "The model code is updated.",
      "The database schema changes."
    ],
    "correctAnswer": 1,
    "explanation": "Data drift (or covariate shift) occurs when the distribution of the input data ($P(X)$) changes, potentially degrading model performance if the model is not retrained.",
    "difficulty": "medium",
    "tags": ["MLOps", "Drift"]
  },
  {
    "id": "ethics-mlops-018",
    "question": "What is 'Concept Drift'?",
    "options": [
      "The input data distribution changes.",
      "The relationship between the input features and the target variable changes.",
      "The model runs out of memory.",
      "The training data is lost."
    ],
    "correctAnswer": 1,
    "explanation": "Concept drift occurs when the statistical relationship between the input features and the target variable ($P(Y|X)$) changes (e.g., what constitutes 'fraud' changes over time).",
    "difficulty": "medium",
    "tags": ["MLOps", "Drift"]
  },
  {
    "id": "ethics-mlops-019",
    "question": "What is the primary purpose of a 'Feature Store' in MLOps?",
    "options": [
      "To store model artifacts.",
      "To serve as a central repository for storing, documenting, and sharing features for training and inference.",
      "To visualize training curves.",
      "To manage container orchestration."
    ],
    "correctAnswer": 1,
    "explanation": "A Feature Store ensures consistency between training and serving by providing a single source of truth for features, reducing duplication and training-serving skew.",
    "difficulty": "medium",
    "tags": ["MLOps", "Feature Stores"]
  },
  {
    "id": "ethics-mlops-020",
    "question": "In the context of MLOps, what does 'CT' stand for in the CI/CD/CT pipeline?",
    "options": [
      "Continuous Testing",
      "Continuous Training",
      "Continuous Tracking",
      "Continuous Tuning"
    ],
    "correctAnswer": 1,
    "explanation": "Continuous Training (CT) is a unique step in MLOps pipelines where the model is automatically retrained and evaluated when new data arrives or performance degrades.",
    "difficulty": "easy",
    "tags": ["MLOps", "CI/CD"]
  },
  {
    "id": "ethics-mlops-021",
    "question": "What is the role of a 'Model Registry'?",
    "options": [
      "To store raw data.",
      "To manage the lifecycle of models, including versioning, stage transitions (staging, production), and annotations.",
      "To run unit tests on code.",
      "To monitor server CPU usage."
    ],
    "correctAnswer": 1,
    "explanation": "A Model Registry acts as a centralized repository to manage model versions, track their lineage, and control their promotion through different lifecycle stages.",
    "difficulty": "medium",
    "tags": ["MLOps", "Model Registry"]
  },
  {
    "id": "ethics-mlops-022",
    "question": "Which tool is commonly used for Data Versioning in ML projects, often functioning like 'Git for data'?",
    "options": [
      "Docker",
      "Kubernetes",
      "DVC (Data Version Control)",
      "Jenkins"
    ],
    "correctAnswer": 2,
    "explanation": "DVC is an open-source tool for data science projects that enables data versioning, pipeline management, and experiment tracking, often integrating with Git.",
    "difficulty": "easy",
    "tags": ["MLOps", "Data Versioning"]
  },
  {
    "id": "ethics-mlops-023",
    "question": "What is a 'Canary Deployment' in MLOps?",
    "options": [
      "Deploying the model to a separate environment for testing.",
      "Rolling out the new model to a small subset of users first to monitor performance before a full rollout.",
      "Running the new model in parallel with the old one without showing predictions to users.",
      "Replacing the old model instantly for all users."
    ],
    "correctAnswer": 1,
    "explanation": "Canary deployment minimizes risk by exposing the new version to a small percentage of traffic. If it performs well, the traffic is gradually increased.",
    "difficulty": "medium",
    "tags": ["MLOps", "Deployment"]
  },
  {
    "id": "ethics-mlops-024",
    "question": "What is 'Shadow Deployment'?",
    "options": [
      "Deploying a model on a dark web server.",
      "Running the new model alongside the current production model, receiving the same traffic, but not using its predictions for the application.",
      "Deploying a model without logging any data.",
      "Deploying a lightweight version of the model."
    ],
    "correctAnswer": 1,
    "explanation": "Shadow deployment allows testing the new model on real production traffic without affecting the user experience, as its predictions are only logged for analysis.",
    "difficulty": "medium",
    "tags": ["MLOps", "Deployment"]
  },
  {
    "id": "ethics-mlops-025",
    "question": "Why is 'Training-Serving Skew' a problem?",
    "options": [
      "It makes the model train too slowly.",
      "It occurs when the data or features available at inference time differ from those used during training, leading to poor performance.",
      "It means the model is overfitting.",
      "It refers to the skewness of the target variable distribution."
    ],
    "correctAnswer": 1,
    "explanation": "Training-serving skew happens when the environment or data processing logic differs between training and production, causing the model to behave unexpectedly.",
    "difficulty": "hard",
    "tags": ["MLOps", "Monitoring"]
  },
  {
    "id": "ethics-mlops-026",
    "question": "Which of the following is a key benefit of using Docker containers in MLOps?",
    "options": [
      "It improves the accuracy of the model.",
      "It ensures consistency of the runtime environment across development, testing, and production.",
      "It automatically tunes hyperparameters.",
      "It visualizes the neural network architecture."
    ],
    "correctAnswer": 1,
    "explanation": "Docker containers package the code and its dependencies, eliminating 'it works on my machine' issues and ensuring the model runs the same way everywhere.",
    "difficulty": "easy",
    "tags": ["MLOps", "Infrastructure"]
  },
  {
    "id": "ethics-mlops-027",
    "question": "What is the purpose of 'Pipeline Orchestration' tools like Kubeflow or Airflow?",
    "options": [
      "To write the ML code.",
      "To manage and schedule complex workflows of dependent tasks (e.g., data extraction -> training -> evaluation).",
      "To store large datasets.",
      "To provide a user interface for labeling data."
    ],
    "correctAnswer": 1,
    "explanation": "Orchestrators manage the execution of DAGs (Directed Acyclic Graphs), ensuring tasks run in the correct order, handling retries, and managing resources.",
    "difficulty": "medium",
    "tags": ["MLOps", "Pipelines"]
  },
  {
    "id": "ethics-mlops-028",
    "question": "In hypothesis testing, what is the 'P-value'?",
    "options": [
      "The probability that the null hypothesis is true.",
      "The probability of observing the data (or something more extreme) assuming the null hypothesis is true.",
      "The probability that the alternative hypothesis is true.",
      "The error rate of the model."
    ],
    "correctAnswer": 1,
    "explanation": "The P-value measures the evidence against the null hypothesis. A low p-value indicates that the observed data is unlikely under the null hypothesis.",
    "difficulty": "medium",
    "tags": ["Data Science", "Statistics"]
  },
  {
    "id": "ethics-mlops-029",
    "question": "What does a 'Type I Error' represent in statistics?",
    "options": [
      "False Negative (Failing to reject a false null hypothesis).",
      "False Positive (Rejecting a true null hypothesis).",
      "Standard Error.",
      "Variance Error."
    ],
    "correctAnswer": 1,
    "explanation": "A Type I error occurs when you incorrectly reject the null hypothesis when it is actually true (a 'false alarm').",
    "difficulty": "medium",
    "tags": ["Data Science", "Statistics"]
  },
  {
    "id": "ethics-mlops-030",
    "question": "Which visualization is best suited for showing the distribution of a single numerical variable?",
    "options": [
      "Scatter Plot",
      "Histogram",
      "Heatmap",
      "Pie Chart"
    ],
    "correctAnswer": 1,
    "explanation": "Histograms group data into bins and display the frequency of data points in each bin, clearly showing the distribution shape.",
    "difficulty": "easy",
    "tags": ["Data Science", "Visualization"]
  },
  {
    "id": "ethics-mlops-031",
    "question": "What is the purpose of 'Dimensionality Reduction' techniques like PCA?",
    "options": [
      "To increase the number of features.",
      "To reduce the number of variables while retaining as much information (variance) as possible.",
      "To clean missing data.",
      "To balance the classes in the dataset."
    ],
    "correctAnswer": 1,
    "explanation": "PCA (Principal Component Analysis) transforms the data into a lower-dimensional space by finding the principal components that explain the most variance.",
    "difficulty": "medium",
    "tags": ["Data Science", "Dimensionality Reduction"]
  },
  {
    "id": "ethics-mlops-032",
    "question": "What is the difference between Normalization and Standardization?",
    "options": [
      "Normalization scales data to [0,1]; Standardization scales data to mean 0 and variance 1.",
      "Normalization scales data to mean 0; Standardization scales data to [0,1].",
      "They are the same thing.",
      "Normalization is for categorical data; Standardization is for numerical data."
    ],
    "correctAnswer": 0,
    "explanation": "Normalization (Min-Max scaling) bounds data between 0 and 1. Standardization (Z-score normalization) centers data around 0 with a standard deviation of 1.",
    "difficulty": "medium",
    "tags": ["Data Science", "Feature Engineering"]
  },
  {
    "id": "ethics-mlops-033",
    "question": "Which technique is used to handle categorical variables with no intrinsic ordering?",
    "options": [
      "Label Encoding",
      "One-Hot Encoding",
      "Min-Max Scaling",
      "Log Transformation"
    ],
    "correctAnswer": 1,
    "explanation": "One-Hot Encoding creates binary columns for each category, preventing the model from assuming a mathematical order that doesn't exist (unlike Label Encoding).",
    "difficulty": "easy",
    "tags": ["Data Science", "Feature Engineering"]
  },
  {
    "id": "ethics-mlops-034",
    "question": "What does the 'Box Plot' visualization primarily display?",
    "options": [
      "The correlation between two variables.",
      "The five-number summary: minimum, first quartile, median, third quartile, and maximum.",
      "The frequency distribution of categories.",
      "The trend over time."
    ],
    "correctAnswer": 1,
    "explanation": "Box plots provide a visual summary of the central tendency, dispersion, and skewness of the data and are excellent for identifying outliers.",
    "difficulty": "easy",
    "tags": ["Data Science", "Visualization"]
  },
  {
    "id": "ethics-mlops-035",
    "question": "What is 't-SNE' primarily used for?",
    "options": [
      "Linear regression.",
      "Visualizing high-dimensional data in 2D or 3D space.",
      "Time series forecasting.",
      "Clustering large datasets efficiently."
    ],
    "correctAnswer": 1,
    "explanation": "t-SNE (t-Distributed Stochastic Neighbor Embedding) is a non-linear dimensionality reduction technique particularly good at visualizing high-dimensional clusters.",
    "difficulty": "hard",
    "tags": ["Data Science", "Dimensionality Reduction"]
  },
  {
    "id": "ethics-mlops-036",
    "question": "In the context of the Bias-Variance Tradeoff, what characterizes 'Overfitting'?",
    "options": [
      "High Bias, Low Variance",
      "Low Bias, High Variance",
      "High Bias, High Variance",
      "Low Bias, Low Variance"
    ],
    "correctAnswer": 1,
    "explanation": "Overfitting happens when a model learns the training noise (Low Bias) but fails to generalize to new data, resulting in unstable predictions (High Variance).",
    "difficulty": "medium",
    "tags": ["Data Science", "Model Evaluation"]
  },
  {
    "id": "ethics-mlops-037",
    "question": "What is the purpose of 'Cross-Validation'?",
    "options": [
      "To train the model faster.",
      "To assess how the results of a statistical analysis will generalize to an independent data set.",
      "To remove outliers.",
      "To select the best features."
    ],
    "correctAnswer": 1,
    "explanation": "Cross-validation (e.g., k-fold) splits the data into multiple train/test sets to provide a more robust estimate of model performance than a single split.",
    "difficulty": "medium",
    "tags": ["Data Science", "Model Evaluation"]
  },
  {
    "id": "ethics-mlops-038",
    "question": "Which metric is most appropriate for evaluating a classification model with highly imbalanced classes?",
    "options": [
      "Accuracy",
      "F1-Score (or AUC-PR)",
      "Mean Squared Error",
      "R-squared"
    ],
    "correctAnswer": 1,
    "explanation": "Accuracy can be misleading in imbalanced datasets (e.g., 99% accuracy by predicting the majority class). F1-Score balances Precision and Recall.",
    "difficulty": "medium",
    "tags": ["Data Science", "Model Evaluation"]
  },
  {
    "id": "ethics-mlops-039",
    "question": "What does 'Imputation' refer to in data preprocessing?",
    "options": [
      "Removing duplicate rows.",
      "Replacing missing data with substituted values (e.g., mean, median).",
      "Scaling features.",
      "Selecting relevant features."
    ],
    "correctAnswer": 1,
    "explanation": "Imputation is the process of handling missing data by filling in the gaps with estimated values to allow the use of algorithms that cannot handle nulls.",
    "difficulty": "easy",
    "tags": ["Data Science", "Feature Engineering"]
  },
  {
    "id": "ethics-mlops-040",
    "question": "What is the 'Central Limit Theorem'?",
    "options": [
      "Data always follows a normal distribution.",
      "The sampling distribution of the sample mean approximates a normal distribution as the sample size becomes large, regardless of the population distribution.",
      "The mean of the sample is always equal to the mean of the population.",
      "Variance decreases as sample size increases."
    ],
    "correctAnswer": 1,
    "explanation": "The CLT is a fundamental theorem stating that the distribution of sample means tends toward a normal distribution as the sample size increases.",
    "difficulty": "hard",
    "tags": ["Data Science", "Statistics"]
  },
  {
    "id": "ethics-mlops-041",
    "question": "Which correlation coefficient measures the strength and direction of a linear relationship between two variables?",
    "options": [
      "Spearman's Rank",
      "Pearson's r",
      "Kendall's Tau",
      "Chi-Square"
    ],
    "correctAnswer": 1,
    "explanation": "Pearson's correlation coefficient (r) measures linear correlation. Spearman and Kendall are used for monotonic (rank-based) relationships.",
    "difficulty": "medium",
    "tags": ["Data Science", "Statistics"]
  },
  {
    "id": "ethics-mlops-042",
    "question": "What is 'SMOTE' used for?",
    "options": [
      "Dimensionality reduction.",
      "Oversampling the minority class in an imbalanced dataset by generating synthetic examples.",
      "Undersampling the majority class.",
      "Feature selection."
    ],
    "correctAnswer": 1,
    "explanation": "SMOTE (Synthetic Minority Over-sampling Technique) creates synthetic data points for the minority class to balance the dataset.",
    "difficulty": "medium",
    "tags": ["Data Science", "Feature Engineering"]
  },
  {
    "id": "ethics-mlops-043",
    "question": "In an ROC curve, what is plotted on the X and Y axes?",
    "options": [
      "X: Precision, Y: Recall",
      "X: False Positive Rate, Y: True Positive Rate",
      "X: True Positive Rate, Y: False Positive Rate",
      "X: Accuracy, Y: Loss"
    ],
    "correctAnswer": 1,
    "explanation": "The ROC (Receiver Operating Characteristic) curve plots the True Positive Rate (Recall) against the False Positive Rate at various threshold settings.",
    "difficulty": "medium",
    "tags": ["Data Science", "Model Evaluation"]
  },
  {
    "id": "ethics-mlops-044",
    "question": "What is 'Kurtosis' a measure of?",
    "options": [
      "The asymmetry of the probability distribution.",
      "The 'tailedness' of the probability distribution.",
      "The central tendency.",
      "The spread of the data."
    ],
    "correctAnswer": 1,
    "explanation": "Kurtosis measures the heaviness of the tails of a distribution. High kurtosis indicates heavy tails (more outliers), while low kurtosis indicates light tails.",
    "difficulty": "hard",
    "tags": ["Data Science", "Statistics"]
  },
  {
    "id": "ethics-mlops-045",
    "question": "Which of the following is an example of 'Unsupervised Learning'?",
    "options": [
      "Predicting house prices.",
      "Classifying emails as spam or not spam.",
      "Clustering customers based on purchasing behavior.",
      "Playing chess."
    ],
    "correctAnswer": 2,
    "explanation": "Clustering is an unsupervised task where the model finds patterns or groupings in data without labeled outcomes.",
    "difficulty": "easy",
    "tags": ["Data Science", "Machine Learning"]
  },
  {
    "id": "ethics-mlops-046",
    "question": "What is the 'Vanishing Gradient Problem'?",
    "options": [
      "Gradients become too large during backpropagation.",
      "Gradients become extremely small during backpropagation, preventing weights in early layers from updating effectively.",
      "The learning rate is too high.",
      "The loss function is not differentiable."
    ],
    "correctAnswer": 1,
    "explanation": "In deep networks, gradients can diminish geometrically as they are propagated back through layers, causing early layers to stop learning.",
    "difficulty": "hard",
    "tags": ["Data Science", "Deep Learning"]
  },
  {
    "id": "ethics-mlops-047",
    "question": "What is 'A/B Testing' in the context of Data Science?",
    "options": [
      "Testing two different algorithms on the same dataset.",
      "A randomized experiment with two variants, A and B, to determine which performs better on a specific metric.",
      "Testing the code for bugs.",
      "Validating the data schema."
    ],
    "correctAnswer": 1,
    "explanation": "A/B testing compares two versions of a variable (e.g., a webpage or model) to determine which one performs better in a controlled experiment.",
    "difficulty": "easy",
    "tags": ["Data Science", "Statistics"]
  },
  {
    "id": "ethics-mlops-048",
    "question": "What is the primary goal of 'Regularization' (e.g., L1, L2)?",
    "options": [
      "To increase the model's complexity.",
      "To prevent overfitting by adding a penalty term to the loss function.",
      "To speed up training.",
      "To handle missing values."
    ],
    "correctAnswer": 1,
    "explanation": "Regularization discourages learning a more complex or flexible model, so as to avoid the risk of overfitting.",
    "difficulty": "medium",
    "tags": ["Data Science", "Machine Learning"]
  },
  {
    "id": "ethics-mlops-049",
    "question": "Which plot is useful for checking if data is normally distributed?",
    "options": [
      "Scatter Plot",
      "Q-Q Plot (Quantile-Quantile Plot)",
      "Bar Chart",
      "Line Chart"
    ],
    "correctAnswer": 1,
    "explanation": "A Q-Q plot compares the quantiles of the data distribution against the quantiles of a theoretical distribution (like the normal distribution). If points fall on the line, the data is normal.",
    "difficulty": "medium",
    "tags": ["Data Science", "Statistics"]
  },
  {
    "id": "ethics-mlops-050",
    "question": "What is 'Data Leakage'?",
    "options": [
      "Losing data due to hard drive failure.",
      "When information from outside the training dataset (like the target variable) is used to create the model.",
      "When the model reveals private user data.",
      "When the database connection is insecure."
    ],
    "correctAnswer": 1,
    "explanation": "Data leakage occurs when the model has access to information during training that it wouldn't have in a real-world prediction scenario, leading to overly optimistic performance estimates.",
    "difficulty": "medium",
    "tags": ["Data Science", "Methodology"]
  }
];
