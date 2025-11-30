// AI Learning Paths Configuration
// Defines the progressive learning structure

export const aiLearningPaths = [
  {
    id: 'math-foundations',
    title: 'Math for AI/ML',
    titleMr: 'एआय/एमएलसाठी गणित',
    description: 'Master essential mathematics: Linear Algebra, Calculus, Probability & Statistics',
    descriptionMr: 'आवश्यक गणित मास्टर करा: रेखीय बीजगणित, कॅल्क्युलस, संभाव्यता आणि सांख्यिकी',
    icon: '🔢',
    color: '#9b59b6',
    difficulty: 'Beginner-Intermediate',
    estimatedHours: 32,
    topics: 4,
    outcomes: [
      'Master vectors, matrices, and linear transformations',
      'Understand derivatives, gradients, and chain rule',
      'Apply probability theory and statistical inference',
      'Solve optimization problems with calculus',
      'Build real-world ML applications with math'
    ],
    prerequisites: [
      'High school mathematics',
      'Basic algebra knowledge'
    ]
  },
  {
    id: 'fundamentals',
    title: 'AI Fundamentals',
    titleMr: 'एआय मूलभूत गोष्टी',
    description: 'Start your AI journey - Learn what AI is, its types, and build your first models',
    descriptionMr: 'तुमचा एआय प्रवास सुरू करा - एआय काय आहे, त्याचे प्रकार जाणून घ्या आणि तुमचे पहिले मॉडेल तयार करा',
    icon: '🤖',
    color: '#FF6B6B',
    difficulty: 'Beginner',
    estimatedHours: 15,
    topics: 14,
    outcomes: [
      'Understand AI, ML, and Deep Learning differences',
      'Learn Python for AI (NumPy, Pandas)',
      'Build your first ML model',
      'Understand supervised vs unsupervised learning',
      'Evaluate model performance'
    ],
    prerequisites: [
      'Basic programming knowledge (any language)',
      'High school mathematics'
    ]
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    titleMr: 'डेटा व्हिज्युअलायझेशन',
    description: 'Master data visualization with Matplotlib, Seaborn, Plotly, and Streamlit',
    descriptionMr: 'Matplotlib, Seaborn, Plotly आणि Streamlit सह डेटा व्हिज्युअलायझेशन मास्टर करा',
    icon: '📊',
    color: '#3498DB',
    difficulty: 'Beginner-Intermediate',
    estimatedHours: 12,
    topics: 4,
    outcomes: [
      'Create publication-ready plots with Matplotlib',
      'Build statistical visualizations with Seaborn',
      'Create interactive charts with Plotly',
      'Build ML dashboards with Streamlit'
    ],
    prerequisites: [
      'Basic Python knowledge',
      'Understanding of data structures'
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Essentials',
    titleMr: 'मशीन लर्निंग आवश्यक',
    description: 'Master core ML algorithms - Build production-ready models',
    descriptionMr: 'कोर एम.एल. अल्गोरिदम मास्टर करा - उत्पादन-तयार मॉडेल तयार करा',
    icon: '🔬',
    color: '#4ECDC4',
    difficulty: 'Intermediate',
    estimatedHours: 20,
    topics: 13,
    outcomes: [
      'Implement regression and classification algorithms',
      'Master decision trees, random forests, SVM',
      'Perform feature engineering',
      'Tune hyperparameters',
      'Deploy ML models'
    ],
    prerequisites: [
      'Complete AI Fundamentals',
      'Python programming',
      'Basic statistics'
    ]
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    titleMr: 'डीप लर्निंग',
    description: 'Neural networks, CNNs, RNNs - Build AI that sees and understands',
    descriptionMr: 'न्यूरल नेटवर्क्स, सीएनएन, आरएनएन - एआय तयार करा जे पाहते आणि समजते',
    icon: '🧠',
    color: '#A78BFA',
    difficulty: 'Advanced',
    estimatedHours: 25,
    topics: 10,
    outcomes: [
      'Build neural networks from scratch',
      'Implement CNNs for image recognition',
      'Use RNNs/LSTMs for sequences',
      'Apply transfer learning',
      'Create GANs and autoencoders'
    ],
    prerequisites: [
      'Complete Machine Learning',
      'Linear algebra basics',
      'Calculus fundamentals'
    ]
  },
  {
    id: 'advanced-ai',
    title: 'Advanced AI',
    titleMr: 'प्रगत एआय',
    description: 'LLMs, RAG, AI Agents - Build cutting-edge AI applications',
    descriptionMr: 'एलएलएम, आरएजी, एआय एजंट्स - अत्याधुनिक एआय ऍप्लिकेशन्स तयार करा',
    icon: '🚀',
    color: '#F59E0B',
    difficulty: 'Professional',
    estimatedHours: 30,
    topics: 10,
    outcomes: [
      'Work with Large Language Models',
      'Build RAG systems',
      'Create AI agents',
      'Fine-tune models',
      'Implement MLOps pipelines'
    ],
    prerequisites: [
      'Complete Deep Learning',
      'Understanding of transformers',
      'Cloud computing basics'
    ]
  },
  {
    id: 'professional-practices',
    title: 'Professional ML Practices',
    titleMr: 'व्यावसायिक एमएल पद्धती',
    description: 'Project structure, deployment, AutoML, and industry applications',
    descriptionMr: 'प्रोजेक्ट स्ट्रक्चर, डिप्लॉयमेंट, ऑटोएमएल आणि उद्योग अनुप्रयोग',
    icon: '💼',
    color: '#E74C3C',
    difficulty: 'Professional',
    estimatedHours: 20,
    topics: 5,
    outcomes: [
      'Structure ML projects professionally',
      'Deploy models with Docker and FastAPI',
      'Use AutoML for rapid prototyping',
      'Apply AI in healthcare and finance',
      'Build production-ready ML systems'
    ],
    prerequisites: [
      'Complete Machine Learning',
      'Basic understanding of APIs',
      'Docker basics (optional)'
    ]
  },
  {
    id: 'specializations',
    title: 'AI Specializations',
    titleMr: 'एआय स्पेशलायझेशन',
    description: 'Domain expertise - Time series, recommenders, edge AI, and more',
    descriptionMr: 'डोमेन तज्ञता - टाइम सीरीज, रिकमेंडर्स, एज एआय आणि बरेच काही',
    icon: '⭐',
    color: '#10B981',
    difficulty: 'Expert',
    estimatedHours: 35,
    topics: 8,
    outcomes: [
      'Build recommendation systems',
      'Forecast time series data',
      'Implement anomaly detection',
      'Optimize for edge devices',
      'Scale AI to production'
    ],
    prerequisites: [
      'Complete Advanced AI',
      'Production ML experience',
      'System design knowledge'
    ]
  }
];

export default aiLearningPaths;
