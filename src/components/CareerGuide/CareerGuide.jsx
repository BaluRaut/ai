import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Card,
  CardContent,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  LinearProgress,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  AlertTitle,
  Stack,
  Button,
  Link
} from '@mui/material';
import {
  Work,
  School,
  TrendingUp,
  Code,
  CheckCircle,
  ExpandMore,
  Psychology,
  DataObject,
  CloudQueue,
  Security,
  Business,
  Science,
  Biotech,
  AccountBalance,
  LocalHospital,
  DirectionsCar,
  SmartToy,
  Analytics,
  Engineering,
  AttachMoney,
  LocationOn,
  Timeline
} from '@mui/icons-material';

const CareerGuide = () => {
  const [tabValue, setTabValue] = useState(0);
  const [expandedRole, setExpandedRole] = useState(null);

  // Comprehensive career database
  const careers = {
    // Core AI/ML Roles
    coreML: [
      {
        title: 'Machine Learning Engineer',
        level: 'Mid to Senior',
        salary: '$120k - $200k',
        demand: 'Very High',
        icon: <Psychology />,
        description: 'Design, build, and deploy machine learning models into production systems',
        responsibilities: [
          'Develop and train ML models for real-world applications',
          'Build scalable ML pipelines and infrastructure',
          'Optimize model performance and efficiency',
          'Deploy models to production and monitor performance',
          'Collaborate with data scientists and software engineers',
          'A/B test different models and approaches',
          'Maintain and update existing ML systems'
        ],
        skills: {
          programming: ['Python', 'Java/Scala', 'C++', 'SQL'],
          mlFrameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'LightGBM'],
          mlOps: ['Docker', 'Kubernetes', 'MLflow', 'Kubeflow', 'AWS SageMaker'],
          cloudPlatforms: ['AWS', 'GCP', 'Azure'],
          core: ['Statistics', 'Linear Algebra', 'Algorithms', 'Data Structures'],
          soft: ['Problem-solving', 'Communication', 'Teamwork']
        },
        relatedTopics: ['Supervised Learning', 'Neural Networks', 'Model Deployment', 'MLOps'],
        companies: ['Google', 'Meta', 'Amazon', 'Netflix', 'Uber', 'Airbnb'],
        careerPath: 'Junior ML Engineer → ML Engineer → Senior ML Engineer → ML Lead/Architect'
      },
      {
        title: 'Data Scientist',
        level: 'Entry to Senior',
        salary: '$100k - $180k',
        demand: 'Very High',
        icon: <Analytics />,
        description: 'Extract insights from data using statistical analysis and machine learning',
        responsibilities: [
          'Analyze large datasets to find patterns and insights',
          'Build predictive models and statistical analyses',
          'Create data visualizations and dashboards',
          'Communicate findings to stakeholders',
          'Design and run A/B tests and experiments',
          'Clean and preprocess data for analysis',
          'Collaborate with business teams to solve problems'
        ],
        skills: {
          programming: ['Python', 'R', 'SQL', 'Julia'],
          mlFrameworks: ['Scikit-learn', 'Pandas', 'NumPy', 'Statsmodels'],
          visualization: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
          statistics: ['Hypothesis Testing', 'Regression', 'Bayesian Statistics', 'Time Series'],
          core: ['Statistics', 'Probability', 'Mathematics', 'Domain Knowledge'],
          soft: ['Storytelling', 'Business Acumen', 'Communication']
        },
        relatedTopics: ['Statistics', 'Data Analysis', 'Visualization', 'Feature Engineering'],
        companies: ['Microsoft', 'LinkedIn', 'Spotify', 'Walmart', 'Capital One'],
        careerPath: 'Data Analyst → Data Scientist → Senior Data Scientist → Principal Data Scientist'
      },
      {
        title: 'Deep Learning Engineer',
        level: 'Mid to Senior',
        salary: '$130k - $220k',
        demand: 'High',
        icon: <Biotech />,
        description: 'Develop and optimize deep neural networks for complex tasks',
        responsibilities: [
          'Design and implement deep learning architectures',
          'Train large-scale neural networks',
          'Optimize model performance and efficiency',
          'Work on computer vision, NLP, or speech tasks',
          'Research and implement latest DL techniques',
          'Fine-tune pre-trained models (transfer learning)',
          'Deploy deep learning models to production'
        ],
        skills: {
          programming: ['Python', 'C++', 'CUDA'],
          frameworks: ['PyTorch', 'TensorFlow', 'JAX', 'Keras'],
          architectures: ['CNNs', 'RNNs', 'Transformers', 'GANs', 'VAEs'],
          optimization: ['GPU Programming', 'Model Compression', 'Quantization', 'Pruning'],
          core: ['Deep Learning Theory', 'Calculus', 'Linear Algebra', 'Optimization'],
          soft: ['Research Skills', 'Innovation', 'Collaboration']
        },
        relatedTopics: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers', 'Computer Vision'],
        companies: ['OpenAI', 'DeepMind', 'NVIDIA', 'Tesla', 'Apple'],
        careerPath: 'ML Engineer → Deep Learning Engineer → Senior DL Engineer → Research Scientist'
      },
      {
        title: 'AI Research Scientist',
        level: 'Senior to Lead',
        salary: '$150k - $300k+',
        demand: 'High',
        icon: <Science />,
        description: 'Conduct cutting-edge AI research and publish in top conferences',
        responsibilities: [
          'Design and conduct novel AI research experiments',
          'Publish papers in top conferences (NeurIPS, ICML, ICLR)',
          'Develop new algorithms and architectures',
          'Mentor junior researchers and engineers',
          'Present findings at conferences and seminars',
          'Collaborate with academic institutions',
          'Apply research to real-world problems'
        ],
        skills: {
          programming: ['Python', 'C++', 'Julia', 'MATLAB'],
          frameworks: ['PyTorch', 'TensorFlow', 'JAX'],
          research: ['Paper Writing', 'Experimental Design', 'Literature Review'],
          math: ['Advanced Mathematics', 'Optimization Theory', 'Information Theory'],
          core: ['PhD in AI/ML/CS', 'Publications', 'Research Experience'],
          soft: ['Critical Thinking', 'Creativity', 'Communication']
        },
        relatedTopics: ['Advanced AI', 'Research Methods', 'Theory', 'Novel Architectures'],
        companies: ['Google Research', 'Meta AI', 'OpenAI', 'DeepMind', 'Microsoft Research'],
        careerPath: 'PhD → Postdoc/Research Intern → Research Scientist → Senior/Principal Scientist'
      }
    ],

    // Specialized AI Roles
    specialized: [
      {
        title: 'Computer Vision Engineer',
        level: 'Mid to Senior',
        salary: '$125k - $210k',
        demand: 'Very High',
        icon: <DirectionsCar />,
        description: 'Build AI systems that understand and process visual information',
        responsibilities: [
          'Develop image and video processing pipelines',
          'Build object detection and segmentation models',
          'Implement facial recognition and tracking systems',
          'Work on autonomous vehicle perception',
          'Optimize models for real-time processing',
          'Deploy computer vision systems to edge devices',
          'Handle 3D vision and depth estimation'
        ],
        skills: {
          programming: ['Python', 'C++', 'CUDA'],
          frameworks: ['OpenCV', 'PyTorch', 'TensorFlow', 'YOLO', 'Detectron2'],
          architectures: ['CNNs', 'ResNet', 'YOLO', 'Mask R-CNN', 'Vision Transformers'],
          tools: ['CUDA', 'TensorRT', 'OpenVINO', 'CoreML'],
          core: ['Image Processing', 'Computer Vision', 'Deep Learning', '3D Geometry'],
          soft: ['Attention to Detail', 'Problem-solving', 'Innovation']
        },
        relatedTopics: ['CNNs', 'Object Detection', 'Image Segmentation', 'Transfer Learning'],
        companies: ['Tesla', 'Waymo', 'Apple', 'Meta', 'Amazon (Ring)', 'Microsoft'],
        careerPath: 'CV Engineer → Senior CV Engineer → CV Architect → Computer Vision Lead'
      },
      {
        title: 'Natural Language Processing Engineer',
        level: 'Mid to Senior',
        salary: '$120k - $200k',
        demand: 'Very High',
        icon: <SmartToy />,
        description: 'Build systems that understand and generate human language',
        responsibilities: [
          'Develop chatbots and conversational AI',
          'Build text classification and sentiment analysis',
          'Implement named entity recognition (NER)',
          'Fine-tune large language models (LLMs)',
          'Create question-answering systems',
          'Work on machine translation',
          'Build text summarization and generation systems'
        ],
        skills: {
          programming: ['Python', 'JavaScript'],
          frameworks: ['Transformers (Hugging Face)', 'spaCy', 'NLTK', 'PyTorch', 'TensorFlow'],
          models: ['BERT', 'GPT', 'T5', 'LLaMA', 'Claude', 'Gemini'],
          tools: ['LangChain', 'Vector Databases', 'OpenAI API', 'Anthropic API'],
          core: ['Linguistics', 'NLP Fundamentals', 'Deep Learning', 'Transformers'],
          soft: ['Communication', 'Language Skills', 'Problem-solving']
        },
        relatedTopics: ['Transformers', 'BERT', 'GPT', 'Text Processing', 'Attention Mechanism'],
        companies: ['OpenAI', 'Google', 'Amazon (Alexa)', 'Meta', 'Grammarly', 'Duolingo'],
        careerPath: 'NLP Engineer → Senior NLP Engineer → NLP Architect → NLP Research Lead'
      },
      {
        title: 'MLOps Engineer',
        level: 'Mid to Senior',
        salary: '$115k - $190k',
        demand: 'Very High',
        icon: <CloudQueue />,
        description: 'Build infrastructure and tools for ML model deployment and monitoring',
        responsibilities: [
          'Build ML deployment pipelines (CI/CD for ML)',
          'Set up model monitoring and alerting',
          'Manage model versioning and registry',
          'Optimize model serving infrastructure',
          'Implement feature stores and data pipelines',
          'Ensure model reproducibility',
          'Handle model retraining and updates'
        ],
        skills: {
          programming: ['Python', 'Bash', 'Go', 'SQL'],
          mlOps: ['MLflow', 'Kubeflow', 'Airflow', 'Prefect', 'DVC'],
          devOps: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform'],
          cloud: ['AWS', 'GCP', 'Azure', 'SageMaker', 'Vertex AI'],
          core: ['DevOps', 'System Design', 'ML Fundamentals', 'Monitoring'],
          soft: ['Automation Mindset', 'Reliability Focus', 'Collaboration']
        },
        relatedTopics: ['Model Deployment', 'CI/CD', 'Monitoring', 'Production ML'],
        companies: ['Netflix', 'Uber', 'Airbnb', 'Twitter', 'Databricks'],
        careerPath: 'DevOps Engineer → MLOps Engineer → Senior MLOps → ML Platform Engineer'
      },
      {
        title: 'AI Product Manager',
        level: 'Mid to Senior',
        salary: '$130k - $220k',
        demand: 'High',
        icon: <Business />,
        description: 'Define and drive AI product strategy and roadmap',
        responsibilities: [
          'Define AI product vision and strategy',
          'Work with stakeholders to gather requirements',
          'Prioritize AI features and capabilities',
          'Coordinate between ML engineers and business',
          'Evaluate ML model performance vs business metrics',
          'Make build vs buy decisions for AI tools',
          'Ensure ethical AI practices and compliance'
        ],
        skills: {
          technical: ['ML Fundamentals', 'Data Analytics', 'A/B Testing'],
          product: ['Product Strategy', 'Roadmapping', 'User Research', 'Agile/Scrum'],
          business: ['Business Metrics', 'ROI Analysis', 'Stakeholder Management'],
          tools: ['JIRA', 'Confluence', 'SQL', 'Analytics Tools'],
          core: ['AI/ML Knowledge', 'Product Management', 'Domain Expertise'],
          soft: ['Leadership', 'Communication', 'Strategic Thinking', 'Decision-making']
        },
        relatedTopics: ['AI Strategy', 'Product Development', 'Business Metrics', 'Ethics'],
        companies: ['Google', 'Microsoft', 'Amazon', 'Salesforce', 'Adobe'],
        careerPath: 'Product Analyst → PM → Senior PM → Group PM → Director of AI Products'
      }
    ],

    // Domain-Specific AI Roles
    domainSpecific: [
      {
        title: 'AI in Healthcare / Medical AI Specialist',
        level: 'Mid to Senior',
        salary: '$130k - $220k',
        demand: 'Growing',
        icon: <LocalHospital />,
        description: 'Apply AI to medical diagnostics, drug discovery, and patient care',
        responsibilities: [
          'Develop medical image analysis systems (X-ray, MRI, CT)',
          'Build disease prediction and diagnosis models',
          'Work on drug discovery and genomics',
          'Create patient monitoring and alert systems',
          'Ensure HIPAA compliance and data privacy',
          'Collaborate with medical professionals',
          'Validate models with clinical trials'
        ],
        skills: {
          programming: ['Python', 'R', 'MATLAB'],
          frameworks: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'SimpleITK'],
          domain: ['Medical Terminology', 'Clinical Workflows', 'Biology', 'HIPAA'],
          ml: ['Computer Vision', 'Time Series', 'Survival Analysis', 'Federated Learning'],
          core: ['Deep Learning', 'Statistics', 'Domain Knowledge'],
          soft: ['Ethics', 'Attention to Detail', 'Collaboration with Doctors']
        },
        relatedTopics: ['Computer Vision', 'Medical Imaging', 'Privacy', 'Ethics'],
        companies: ['Tempus', 'PathAI', 'Butterfly Network', 'GE Healthcare', 'Philips'],
        careerPath: 'ML Engineer → Medical AI Specialist → Senior Specialist → Medical AI Lead'
      },
      {
        title: 'AI in Finance / Quantitative Analyst',
        level: 'Mid to Senior',
        salary: '$140k - $250k+',
        demand: 'High',
        icon: <AccountBalance />,
        description: 'Use AI for trading, risk management, and financial forecasting',
        responsibilities: [
          'Develop algorithmic trading strategies',
          'Build fraud detection systems',
          'Create credit scoring and risk models',
          'Forecast market trends and prices',
          'Implement portfolio optimization',
          'Detect financial anomalies',
          'Ensure regulatory compliance'
        ],
        skills: {
          programming: ['Python', 'R', 'C++', 'Java', 'SQL'],
          frameworks: ['Pandas', 'NumPy', 'Scikit-learn', 'Prophet', 'PyTorch'],
          finance: ['Financial Markets', 'Risk Management', 'Derivatives', 'Portfolio Theory'],
          ml: ['Time Series', 'Reinforcement Learning', 'Anomaly Detection', 'NLP'],
          core: ['Statistics', 'Econometrics', 'Optimization', 'Finance Domain'],
          soft: ['Risk Awareness', 'Analytical Thinking', 'Quick Decision-making']
        },
        relatedTopics: ['Time Series', 'Reinforcement Learning', 'Anomaly Detection', 'NLP'],
        companies: ['Goldman Sachs', 'JPMorgan', 'Citadel', 'Two Sigma', 'Renaissance Technologies'],
        careerPath: 'Analyst → Quantitative Analyst → Senior Quant → Quant Researcher/PM'
      },
      {
        title: 'Autonomous Systems Engineer',
        level: 'Senior',
        salary: '$140k - $240k',
        demand: 'Growing',
        icon: <DirectionsCar />,
        description: 'Build AI systems for self-driving vehicles, drones, and robotics',
        responsibilities: [
          'Develop perception systems (cameras, LiDAR, radar)',
          'Build motion planning and control algorithms',
          'Implement sensor fusion',
          'Create localization and mapping (SLAM)',
          'Test and validate in simulation',
          'Ensure safety and reliability',
          'Work on decision-making systems'
        ],
        skills: {
          programming: ['Python', 'C++', 'ROS', 'CUDA'],
          frameworks: ['PyTorch', 'TensorFlow', 'OpenCV', 'PCL (Point Cloud Library)'],
          robotics: ['ROS/ROS2', 'SLAM', 'Path Planning', 'Control Theory'],
          ml: ['Computer Vision', 'Reinforcement Learning', 'Sensor Fusion'],
          core: ['Robotics', 'Linear Algebra', 'Optimization', 'Physics'],
          soft: ['Safety Mindset', 'System Thinking', 'Testing Rigor']
        },
        relatedTopics: ['Computer Vision', 'Reinforcement Learning', 'Robotics', 'Sensor Fusion'],
        companies: ['Tesla', 'Waymo', 'Cruise', 'Aurora', 'Zoox', 'Boston Dynamics'],
        careerPath: 'Robotics Engineer → Autonomy Engineer → Senior Autonomy → Autonomy Lead'
      },
      {
        title: 'AI Security / Adversarial ML Specialist',
        level: 'Senior',
        salary: '$135k - $230k',
        demand: 'Growing',
        icon: <Security />,
        description: 'Protect AI systems from attacks and ensure robust security',
        responsibilities: [
          'Test AI models for vulnerabilities',
          'Implement adversarial training',
          'Build robust and secure ML systems',
          'Detect model poisoning and backdoors',
          'Ensure privacy-preserving ML',
          'Work on federated learning security',
          'Audit AI systems for security risks'
        ],
        skills: {
          programming: ['Python', 'C++', 'Go'],
          security: ['Cybersecurity', 'Cryptography', 'Adversarial ML', 'Privacy'],
          frameworks: ['PyTorch', 'TensorFlow', 'Foolbox', 'CleverHans'],
          ml: ['Deep Learning', 'Differential Privacy', 'Federated Learning'],
          core: ['Security Principles', 'ML Robustness', 'Attack Vectors'],
          soft: ['Security Mindset', 'Paranoia', 'Attention to Detail']
        },
        relatedTopics: ['Adversarial Examples', 'Security', 'Privacy', 'Robust ML'],
        companies: ['Google (Security AI)', 'Microsoft', 'IBM', 'Nvidia', 'Cybersecurity Startups'],
        careerPath: 'Security Engineer → AI Security Engineer → Senior AI Security → Security Lead'
      }
    ],

    // Emerging AI Roles
    emerging: [
      {
        title: 'Prompt Engineer / LLM Specialist',
        level: 'Entry to Mid',
        salary: '$90k - $160k',
        demand: 'Very High (New)',
        icon: <SmartToy />,
        description: 'Design and optimize prompts for large language models',
        responsibilities: [
          'Design effective prompts for LLMs',
          'Fine-tune language models for specific tasks',
          'Build LLM-powered applications',
          'Implement RAG (Retrieval-Augmented Generation)',
          'Optimize prompt chains and workflows',
          'Evaluate LLM outputs and quality',
          'Stay updated with latest LLM developments'
        ],
        skills: {
          programming: ['Python', 'JavaScript'],
          frameworks: ['LangChain', 'LlamaIndex', 'OpenAI API', 'Anthropic API'],
          models: ['GPT-4', 'Claude', 'Gemini', 'LLaMA', 'Mistral'],
          techniques: ['Prompt Engineering', 'RAG', 'Fine-tuning', 'Chain-of-Thought'],
          core: ['NLP Basics', 'LLM Understanding', 'Application Design'],
          soft: ['Creativity', 'Language Skills', 'Experimentation']
        },
        relatedTopics: ['LLMs', 'GPT', 'Transformers', 'NLP', 'Prompt Design'],
        companies: ['OpenAI', 'Anthropic', 'Startups', 'Consulting Firms', 'Most Tech Companies'],
        careerPath: 'Prompt Engineer → Senior Prompt Engineer → LLM Applications Architect'
      },
      {
        title: 'AI Ethics & Safety Researcher',
        level: 'Mid to Senior',
        salary: '$110k - $200k',
        demand: 'Growing',
        icon: <Security />,
        description: 'Ensure AI systems are safe, fair, and aligned with human values',
        responsibilities: [
          'Assess AI systems for bias and fairness',
          'Develop AI safety guidelines and policies',
          'Test models for harmful outputs',
          'Work on AI alignment research',
          'Implement responsible AI frameworks',
          'Audit AI systems for ethical issues',
          'Educate teams on AI ethics'
        ],
        skills: {
          technical: ['ML Fundamentals', 'Statistics', 'Fairness Metrics'],
          ethics: ['AI Ethics', 'Philosophy', 'Law', 'Policy', 'Social Science'],
          frameworks: ['Fairlearn', 'AI Fairness 360', 'What-If Tool'],
          research: ['Research Methods', 'Writing', 'Critical Analysis'],
          core: ['Ethics Theory', 'Bias Detection', 'AI Safety', 'Alignment'],
          soft: ['Critical Thinking', 'Communication', 'Advocacy', 'Empathy']
        },
        relatedTopics: ['AI Ethics', 'Fairness', 'Bias', 'Safety', 'Alignment'],
        companies: ['OpenAI (Safety)', 'Anthropic', 'DeepMind (Safety)', 'Google', 'Meta'],
        careerPath: 'Ethics Analyst → AI Ethics Researcher → Senior Researcher → Ethics Lead'
      },
      {
        title: 'AI Infrastructure Engineer',
        level: 'Mid to Senior',
        salary: '$130k - $210k',
        demand: 'High',
        icon: <CloudQueue />,
        description: 'Build and maintain large-scale AI training and inference infrastructure',
        responsibilities: [
          'Design distributed training systems',
          'Optimize GPU/TPU clusters',
          'Build model serving infrastructure',
          'Implement efficient data pipelines',
          'Monitor infrastructure performance',
          'Reduce training and inference costs',
          'Handle petabyte-scale datasets'
        ],
        skills: {
          programming: ['Python', 'C++', 'Go', 'CUDA'],
          infrastructure: ['Kubernetes', 'Ray', 'Horovod', 'DeepSpeed', 'SLURM'],
          cloud: ['AWS', 'GCP', 'Azure', 'On-prem clusters'],
          distributed: ['Distributed Training', 'Model Parallelism', 'Data Parallelism'],
          core: ['System Design', 'Performance Optimization', 'Distributed Systems'],
          soft: ['Scalability Thinking', 'Cost Awareness', 'Reliability']
        },
        relatedTopics: ['Distributed Training', 'GPU Computing', 'Infrastructure', 'Scaling'],
        companies: ['Meta', 'Google', 'Microsoft', 'NVIDIA', 'OpenAI', 'Databricks'],
        careerPath: 'SRE/Infra Engineer → AI Infra Engineer → Senior AI Infra → Infra Architect'
      },
      {
        title: 'Generative AI Engineer',
        level: 'Mid to Senior',
        salary: '$125k - $210k',
        demand: 'Very High (Exploding)',
        icon: <Biotech />,
        description: 'Build systems that generate content: text, images, video, audio, code',
        responsibilities: [
          'Build text generation systems (GPT-based)',
          'Develop image generation models (Stable Diffusion, DALL-E)',
          'Create audio/music generation systems',
          'Work on video synthesis',
          'Fine-tune generative models',
          'Implement content moderation',
          'Optimize generation quality and speed'
        ],
        skills: {
          programming: ['Python', 'JavaScript'],
          frameworks: ['Transformers', 'Diffusers', 'Stable Diffusion', 'GANs', 'VAEs'],
          models: ['GPT', 'DALL-E', 'Midjourney', 'Stable Diffusion', 'Whisper', 'MusicLM'],
          techniques: ['Fine-tuning', 'LoRA', 'DreamBooth', 'ControlNet', 'Prompt Engineering'],
          core: ['Generative Models', 'Deep Learning', 'Transformers', 'Diffusion Models'],
          soft: ['Creativity', 'Experimentation', 'User Focus']
        },
        relatedTopics: ['GANs', 'VAEs', 'Diffusion Models', 'Transformers', 'LLMs'],
        companies: ['OpenAI', 'Stability AI', 'Midjourney', 'Runway', 'Adobe', 'Google'],
        careerPath: 'ML Engineer → Generative AI Engineer → Senior GenAI Engineer → GenAI Lead'
      }
    ],

    // Supporting Roles
    supporting: [
      {
        title: 'Data Engineer (AI/ML Focus)',
        level: 'Entry to Senior',
        salary: '$100k - $170k',
        demand: 'Very High',
        icon: <DataObject />,
        description: 'Build data pipelines and infrastructure to support ML systems',
        responsibilities: [
          'Build ETL/ELT pipelines for ML data',
          'Design data warehouses and lakes',
          'Ensure data quality and validation',
          'Create feature engineering pipelines',
          'Manage data versioning (DVC)',
          'Optimize query performance',
          'Handle real-time data streaming'
        ],
        skills: {
          programming: ['Python', 'SQL', 'Java', 'Scala'],
          databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Snowflake', 'BigQuery'],
          tools: ['Airflow', 'Kafka', 'Spark', 'Flink', 'dbt', 'DVC'],
          cloud: ['AWS', 'GCP', 'Azure'],
          core: ['Data Modeling', 'ETL', 'Data Quality', 'System Design'],
          soft: ['Attention to Detail', 'Reliability', 'Collaboration']
        },
        relatedTopics: ['Data Pipelines', 'Feature Engineering', 'Data Quality', 'ETL'],
        companies: ['Netflix', 'Airbnb', 'Uber', 'Spotify', 'LinkedIn'],
        careerPath: 'Junior Data Engineer → Data Engineer → Senior Data Engineer → Data Architect'
      },
      {
        title: 'ML Solutions Architect',
        level: 'Senior',
        salary: '$140k - $230k',
        demand: 'High',
        icon: <Engineering />,
        description: 'Design end-to-end ML solutions and architectures for enterprises',
        responsibilities: [
          'Design ML system architectures',
          'Choose right tools and technologies',
          'Work with clients to understand needs',
          'Create technical proposals and RFPs',
          'Lead proof-of-concepts (POCs)',
          'Ensure scalability and cost-efficiency',
          'Bridge business and technical teams'
        ],
        skills: {
          technical: ['ML/DL', 'Cloud Platforms', 'Databases', 'APIs', 'Microservices'],
          architecture: ['System Design', 'Scalability', 'Cost Optimization', 'Security'],
          business: ['Consulting', 'Presentation', 'Requirements Gathering', 'ROI Analysis'],
          tools: ['AWS/GCP/Azure', 'Docker', 'Kubernetes', 'ML Frameworks'],
          core: ['Solution Design', 'ML Knowledge', 'Cloud Architecture'],
          soft: ['Leadership', 'Communication', 'Strategic Thinking', 'Client Management']
        },
        relatedTopics: ['System Design', 'Cloud Platforms', 'MLOps', 'Architecture Patterns'],
        companies: ['AWS', 'Google Cloud', 'Microsoft', 'Databricks', 'Consulting Firms'],
        careerPath: 'ML Engineer → Senior ML Engineer → Solutions Architect → Principal Architect'
      },
      {
        title: 'AI/ML Technical Writer',
        level: 'Entry to Mid',
        salary: '$70k - $120k',
        demand: 'Moderate',
        icon: <School />,
        description: 'Create documentation, tutorials, and educational content for AI/ML',
        responsibilities: [
          'Write technical documentation for ML APIs',
          'Create tutorials and how-to guides',
          'Develop educational courses and content',
          'Maintain documentation for ML frameworks',
          'Simplify complex AI concepts',
          'Create code examples and notebooks',
          'Work with engineering teams'
        ],
        skills: {
          technical: ['ML Basics', 'Python', 'APIs', 'Cloud Platforms'],
          writing: ['Technical Writing', 'Content Creation', 'Editing', 'SEO'],
          tools: ['Markdown', 'Jupyter', 'Git', 'Docs Tools (ReadTheDocs, Docusaurus)'],
          education: ['Instructional Design', 'Curriculum Development'],
          core: ['Communication', 'ML Understanding', 'Examples Creation'],
          soft: ['Clarity', 'Empathy', 'Teaching', 'Collaboration']
        },
        relatedTopics: ['Documentation', 'Education', 'Communication', 'All ML Topics'],
        companies: ['Google', 'Meta', 'OpenAI', 'Hugging Face', 'Tech Writing Agencies'],
        careerPath: 'Technical Writer → Senior Technical Writer → Documentation Lead → DevRel'
      },
      {
        title: 'AI Developer Advocate / DevRel',
        level: 'Mid to Senior',
        salary: '$100k - $180k',
        demand: 'Moderate',
        icon: <School />,
        description: 'Bridge between AI products and developer community',
        responsibilities: [
          'Create demos and sample applications',
          'Speak at conferences and meetups',
          'Write blog posts and tutorials',
          'Gather developer feedback',
          'Build community and engagement',
          'Create video tutorials and courses',
          'Work with product teams on developer experience'
        ],
        skills: {
          technical: ['ML/DL', 'Python', 'Web Development', 'APIs'],
          content: ['Public Speaking', 'Writing', 'Video Creation', 'Social Media'],
          community: ['Community Building', 'Event Organization', 'Networking'],
          tools: ['GitHub', 'YouTube', 'Twitter/X', 'LinkedIn', 'Medium'],
          core: ['ML Knowledge', 'Communication', 'Teaching', 'Developer Empathy'],
          soft: ['Charisma', 'Enthusiasm', 'Empathy', 'Storytelling']
        },
        relatedTopics: ['All AI Topics', 'Developer Tools', 'Community', 'Education'],
        companies: ['Google', 'Microsoft', 'OpenAI', 'Hugging Face', 'NVIDIA', 'Databricks'],
        careerPath: 'Developer → Developer Advocate → Senior DevRel → Head of Developer Relations'
      }
    ]
  };

  // Industry salary and demand overview
  const industryOverview = {
    salaryRanges: [
      { role: 'Entry Level (0-2 years)', range: '$70k - $110k', color: 'info' },
      { role: 'Mid Level (2-5 years)', range: '$110k - $160k', color: 'primary' },
      { role: 'Senior (5-8 years)', range: '$150k - $220k', color: 'success' },
      { role: 'Lead/Principal (8+ years)', range: '$200k - $300k+', color: 'warning' }
    ],
    topPayingIndustries: [
      { industry: 'Finance & Trading', avg: '$180k - $300k+' },
      { industry: 'Big Tech (FAANG)', avg: '$150k - $250k' },
      { industry: 'AI Research Labs', avg: '$150k - $300k+' },
      { industry: 'Autonomous Vehicles', avg: '$140k - $240k' },
      { industry: 'Healthcare AI', avg: '$130k - $220k' },
      { industry: 'Consulting', avg: '$120k - $200k' }
    ],
    topLocations: [
      { location: 'San Francisco Bay Area', premium: '+30-50%' },
      { location: 'Seattle', premium: '+20-30%' },
      { location: 'New York City', premium: '+20-30%' },
      { location: 'Boston', premium: '+15-25%' },
      { location: 'Remote (US)', premium: 'Baseline' }
    ],
    skillsInDemand: [
      { skill: 'LLMs & Generative AI', demand: 95 },
      { skill: 'MLOps & Production ML', demand: 90 },
      { skill: 'PyTorch & TensorFlow', demand: 88 },
      { skill: 'Computer Vision', demand: 85 },
      { skill: 'NLP & Transformers', demand: 85 },
      { skill: 'Cloud Platforms (AWS/GCP/Azure)', demand: 82 },
      { skill: 'Deep Learning', demand: 80 },
      { skill: 'Python Programming', demand: 95 }
    ]
  };

  const renderRoleCard = (role) => (
    <Card key={role.title} sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
            {role.icon}
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom>
              {role.title}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
              <Chip icon={<TrendingUp />} label={role.demand} color="success" size="small" />
              <Chip icon={<AttachMoney />} label={role.salary} color="primary" size="small" />
              <Chip label={role.level} size="small" variant="outlined" />
            </Box>
            <Typography variant="body1" color="text.secondary" paragraph>
              {role.description}
            </Typography>
          </Box>
        </Box>

        {/* Responsibilities */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">📋 Key Responsibilities</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              {role.responsibilities.map((resp, idx) => (
                <ListItem key={idx}>
                  <ListItemIcon>
                    <CheckCircle color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={resp} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Required Skills */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">🎯 Required Skills</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              {Object.entries(role.skills).map(([category, skills]) => (
                <Grid item xs={12} sm={6} key={category}>
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                    {skills.map((skill, idx) => (
                      <Chip key={idx} label={skill} size="small" variant="outlined" />
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* Career Path & Companies */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" color="primary" gutterBottom>
            🎓 Related Topics from This Platform:
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
            {role.relatedTopics.map((topic, idx) => (
              <Chip key={idx} label={topic} size="small" color="secondary" />
            ))}
          </Box>

          <Typography variant="subtitle2" color="primary" gutterBottom>
            🏢 Top Companies Hiring:
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
            {role.companies.map((company, idx) => (
              <Chip key={idx} label={company} size="small" />
            ))}
          </Box>

          <Alert severity="info" sx={{ mt: 2 }}>
            <AlertTitle>Career Progression</AlertTitle>
            {role.careerPath}
          </Alert>
        </Box>
      </CardContent>
    </Card>
  );

  const renderIndustryOverview = () => (
    <Box>
      <Alert severity="success" sx={{ mb: 3 }}>
        <AlertTitle>🚀 AI/ML Job Market - 2025 Outlook</AlertTitle>
        The AI/ML job market is experiencing unprecedented growth, with demand for skilled professionals outpacing supply. Salaries are highly competitive, especially for specialized roles.
      </Alert>

      {/* Salary Ranges */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            💰 Salary Ranges by Experience
          </Typography>
          <Grid container spacing={2}>
            {industryOverview.salaryRanges.map((item) => (
              <Grid item xs={12} sm={6} key={item.role}>
                <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {item.role}
                  </Typography>
                  <Typography variant="h6" color={`${item.color}.main`}>
                    {item.range}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Top Paying Industries */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🏭 Top Paying Industries
          </Typography>
          <List>
            {industryOverview.topPayingIndustries.map((item, idx) => (
              <React.Fragment key={item.industry}>
                <ListItem>
                  <ListItemIcon>
                    <AttachMoney color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.industry}
                    secondary={`Average: ${item.avg}`}
                  />
                </ListItem>
                {idx < industryOverview.topPayingIndustries.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Location Impact */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            📍 Location Impact on Salary
          </Typography>
          <List>
            {industryOverview.topLocations.map((item) => (
              <ListItem key={item.location}>
                <ListItemIcon>
                  <LocationOn color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={item.location}
                  secondary={`Salary Premium: ${item.premium}`}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Skills in Demand */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🔥 Most In-Demand Skills (2025)
          </Typography>
          {industryOverview.skillsInDemand.map((item) => (
            <Box key={item.skill} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="body2">{item.skill}</Typography>
                <Typography variant="body2" color="primary">
                  {item.demand}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={item.demand}
                sx={{ height: 8, borderRadius: 1 }}
              />
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );

  const renderJobSearchTips = () => (
    <Box>
      <Alert severity="info" sx={{ mb: 3 }}>
        <AlertTitle>💡 Pro Tips for Landing Your Dream AI Job</AlertTitle>
        These strategies will help you stand out in the competitive AI job market.
      </Alert>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">1️⃣ Build a Strong Portfolio</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="GitHub Projects"
                secondary="3-5 well-documented projects showing end-to-end ML pipelines. Quality > Quantity."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="Kaggle Competitions"
                secondary="Participate in competitions. Aim for top 10% rankings to demonstrate skills."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="Blog & Write"
                secondary="Write technical blog posts on Medium/dev.to explaining your projects and learnings."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="Contribute to Open Source"
                secondary="Contribute to popular ML libraries (PyTorch, TensorFlow, Hugging Face)."
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">2️⃣ Networking & Community</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="LinkedIn Presence"
                secondary="Share learnings, engage with AI content, connect with professionals."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="Attend Conferences"
                secondary="NeurIPS, ICML, CVPR, local meetups. Network and learn latest trends."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="Join Communities"
                secondary="Discord servers, Reddit (r/MachineLearning), Twitter/X AI community."
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">3️⃣ Ace the Interview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="ML System Design"
                secondary="Practice designing end-to-end ML systems (recommendation, search, ranking)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="Coding (LeetCode)"
                secondary="Solve 100-150 problems (Easy-Medium). Focus on arrays, strings, trees, graphs."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="ML Theory"
                secondary="Deep understanding of algorithms, loss functions, optimization, regularization."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="Behavioral"
                secondary="STAR method. Prepare stories about teamwork, challenges, leadership."
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">4️⃣ Certifications & Courses</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            <Chip label="AWS Certified Machine Learning – Specialty" color="primary" />
            <Chip label="Google Cloud Professional ML Engineer" color="primary" />
            <Chip label="TensorFlow Developer Certificate" color="primary" />
            <Chip label="Deep Learning Specialization (Coursera)" color="secondary" />
            <Chip label="Fast.ai Practical Deep Learning" color="secondary" />
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
              Note: Certifications are helpful but not mandatory. Real projects matter more!
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">5️⃣ Job Search Strategy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="Apply Strategically"
                secondary="Target 20-30 companies. Tailor resume/cover letter for each."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="Use Referrals"
                secondary="70% of jobs are filled through referrals. Leverage your network."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="Track Applications"
                secondary="Use spreadsheet to track companies, roles, status, follow-ups."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText
                primary="Follow Up"
                secondary="Send thank-you emails. Follow up after 1-2 weeks if no response."
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Card sx={{ mt: 3, bgcolor: 'success.light' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🎯 Action Plan: Your First 90 Days
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Month 1:</strong> Complete 2 end-to-end ML projects. Start LeetCode (30 problems). Build LinkedIn presence.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Month 2:</strong> Participate in 1 Kaggle competition. Write 2 blog posts. Attend 2 meetups. 50 more LeetCode problems.
          </Typography>
          <Typography variant="body2">
            <strong>Month 3:</strong> Polish portfolio. Network heavily. Apply to 30 companies. Practice mock interviews.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <Paper elevation={2} sx={{ mb: 3 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={(e, val) => setTabValue(val)}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab icon={<TrendingUp />} label="Industry Overview" />
          <Tab icon={<Psychology />} label="Core ML Roles" />
          <Tab icon={<Code />} label="Specialized Roles" />
          <Tab icon={<Biotech />} label="Domain-Specific" />
          <Tab icon={<Timeline />} label="Emerging Roles" />
          <Tab icon={<Engineering />} label="Supporting Roles" />
          <Tab icon={<School />} label="Job Search Tips" />
        </Tabs>
      </Box>

      <Box sx={{ p: 3 }}>
        {tabValue === 0 && renderIndustryOverview()}
        {tabValue === 1 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              🎯 Core ML/AI Roles
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              These are the fundamental roles in the AI/ML industry. Most professionals start here.
            </Typography>
            {careers.coreML.map(renderRoleCard)}
          </Box>
        )}
        {tabValue === 2 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              🔬 Specialized AI Roles
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Focus on specific technical domains within AI/ML.
            </Typography>
            {careers.specialized.map(renderRoleCard)}
          </Box>
        )}
        {tabValue === 3 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              🏥 Domain-Specific AI Roles
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Apply AI in specific industries like healthcare, finance, autonomous systems.
            </Typography>
            {careers.domainSpecific.map(renderRoleCard)}
          </Box>
        )}
        {tabValue === 4 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              🚀 Emerging AI Roles (Hot in 2025!)
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              New and rapidly growing roles in the AI space.
            </Typography>
            {careers.emerging.map(renderRoleCard)}
          </Box>
        )}
        {tabValue === 5 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              🛠️ Supporting Roles
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Essential roles that support AI/ML teams and products.
            </Typography>
            {careers.supporting.map(renderRoleCard)}
          </Box>
        )}
        {tabValue === 6 && renderJobSearchTips()}
      </Box>
    </Paper>
  );
};

export default CareerGuide;
