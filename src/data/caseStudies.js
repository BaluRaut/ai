// Real-World AI Case Studies
// Industry implementations across Healthcare, Finance, Retail, Manufacturing

export const caseStudies = {
  healthcare: [
    {
      id: 'health-01',
      title: 'Diabetic Retinopathy Detection',
      company: 'Google Health / DeepMind',
      challenge: 'Early detection of diabetic retinopathy to prevent blindness in millions of diabetic patients worldwide.',
      solution: 'Deep learning model trained on 128,000+ retinal images to detect disease stages with ophthalmologist-level accuracy.',
      technology: ['CNN', 'Transfer Learning', 'Image Classification', 'Ensemble Methods'],
      results: [
        '94% sensitivity in detecting referable diabetic retinopathy',
        'Reduces screening time from 10 minutes to seconds',
        'Deployed in India and Thailand for mass screening',
        'FDA approved for autonomous diagnosis'
      ],
      keyTakeaways: [
        'Medical AI requires extensive validation and regulatory approval',
        'Explainability is crucial for physician adoption',
        'Real-world deployment needs robust edge cases handling'
      ],
      architectureHighlights: `
        Input: Retinal fundus images (512x512)
        Model: Inception-v3 based architecture
        Output: 5-class severity classification
        Training: 128,000 images, multiple grader consensus
        Validation: 10,000+ images from external clinics
      `,
      lessonsLearned: [
        'Data quality > quantity for medical applications',
        'Multi-grader consensus improves label quality',
        'Different populations may need model recalibration'
      ],
      resources: [
        { title: 'Nature Paper', url: 'https://www.nature.com/articles/nature16961' }
      ]
    },
    {
      id: 'health-02',
      title: 'Drug Discovery with AlphaFold',
      company: 'DeepMind',
      challenge: 'Protein structure prediction - a 50-year grand challenge in biology crucial for drug development.',
      solution: 'AlphaFold2 uses attention-based neural networks to predict 3D protein structures from amino acid sequences.',
      technology: ['Transformers', 'Attention Mechanisms', 'Graph Neural Networks', 'Evolutionary Data'],
      results: [
        'Solved the protein folding problem',
        'Predicted structures for 200M+ proteins',
        'Accelerates drug discovery by years',
        'Open-sourced for scientific community'
      ],
      keyTakeaways: [
        'Domain knowledge + deep learning = breakthroughs',
        'Attention mechanisms excel at modeling relationships',
        'Open science accelerates global research'
      ],
      architectureHighlights: `
        Input: Amino acid sequence + evolutionary data (MSA)
        Model: Evoformer (novel attention architecture)
        Output: 3D atomic coordinates + confidence scores
        Training: 170,000 known protein structures
        Inference: Structure prediction in minutes vs months
      `,
      lessonsLearned: [
        'Combining multiple data sources improves predictions',
        'Iterative refinement produces better results',
        'Confidence estimation is essential for scientific applications'
      ],
      resources: [
        { title: 'AlphaFold Database', url: 'https://alphafold.ebi.ac.uk/' }
      ]
    },
    {
      id: 'health-03',
      title: 'COVID-19 Diagnosis from CT Scans',
      company: 'Various Research Institutions',
      challenge: 'Rapid and accurate COVID-19 diagnosis during pandemic when PCR tests were limited.',
      solution: 'AI models analyzing chest CT scans to detect COVID-19 patterns with high sensitivity.',
      technology: ['3D CNN', 'Segmentation', 'Attention', 'Federated Learning'],
      results: [
        '95%+ sensitivity in detecting COVID-19',
        'Results in seconds vs hours for PCR',
        'Helps triage patients effectively',
        'Deployed in 100+ hospitals worldwide'
      ],
      keyTakeaways: [
        'AI can rapidly adapt to new diseases',
        'Federated learning enables collaboration without data sharing',
        'Continuous learning handles variant evolution'
      ],
      architectureHighlights: `
        Input: 3D CT scan volumes
        Model: 3D ResNet / DenseNet variants
        Output: COVID probability + severity score
        Training: Federated across 20+ hospitals
        Features: Lesion segmentation, lung involvement %
      `,
      lessonsLearned: [
        'Speed of development matters in emergencies',
        'Multi-center validation is crucial',
        'AI complements, not replaces, clinical judgment'
      ],
      resources: [
        { title: 'COVID-Net', url: 'https://github.com/lindawangg/COVID-Net' }
      ]
    },
    {
      id: 'health-04',
      title: 'Sepsis Early Warning System',
      company: 'Johns Hopkins Hospital',
      challenge: 'Sepsis kills 270,000 Americans annually. Every hour of delayed treatment increases mortality by 7.6%.',
      solution: 'ML model predicting sepsis onset 6+ hours before clinical symptoms using EHR data.',
      technology: ['Gradient Boosting', 'LSTM', 'Real-time Streaming', 'Clinical Integration'],
      results: [
        'Predicts sepsis 6 hours before onset',
        '18% reduction in sepsis mortality',
        '12% reduction in length of stay',
        'Integrated into clinical workflow'
      ],
      keyTakeaways: [
        'Early prediction enables early intervention',
        'Clinical workflow integration is as important as model accuracy',
        'Continuous monitoring beats periodic assessment'
      ],
      architectureHighlights: `
        Input: Vital signs, lab values, medications, notes
        Model: Ensemble (XGBoost + LSTM for temporal patterns)
        Output: Sepsis risk score (0-100) + time to onset
        Update: Real-time with each new data point
        Alert: Threshold-based clinical notifications
      `,
      lessonsLearned: [
        'Real-time predictions require optimized pipelines',
        'Alert fatigue is a major adoption barrier',
        'Model must explain why patient is at risk'
      ],
      resources: []
    }
  ],
  
  finance: [
    {
      id: 'fin-01',
      title: 'Credit Card Fraud Detection',
      company: 'Major Banks (Visa, Mastercard, JPMorgan)',
      challenge: 'Detect fraudulent transactions in real-time among billions of legitimate ones.',
      solution: 'ML models analyzing transaction patterns, user behavior, and network features for anomaly detection.',
      technology: ['Gradient Boosting', 'Neural Networks', 'Graph Analytics', 'Real-time Scoring'],
      results: [
        '99.9%+ accuracy in fraud detection',
        'Processing 65,000+ transactions per second',
        '$25B+ annual fraud prevention',
        '<100ms latency for real-time decisions'
      ],
      keyTakeaways: [
        'Extreme class imbalance requires specialized techniques',
        'Feature engineering from domain expertise is crucial',
        'Real-time systems need robust fallbacks'
      ],
      architectureHighlights: `
        Input: Transaction features (amount, location, time, merchant)
        Behavioral: User spending patterns, velocity features
        Network: Graph features (merchant connections, device fingerprints)
        Model: Two-stage - fast rule engine + ML scorer
        Latency: <50ms for 95th percentile
      `,
      lessonsLearned: [
        'Rules + ML hybrid outperforms either alone',
        'Model needs frequent retraining as fraud evolves',
        'False positive rate affects customer experience'
      ],
      resources: []
    },
    {
      id: 'fin-02',
      title: 'Algorithmic Trading',
      company: 'Renaissance Technologies, Two Sigma',
      challenge: 'Find and exploit market inefficiencies before competitors using quantitative methods.',
      solution: 'ML models analyzing vast amounts of financial data to predict price movements and execute trades.',
      technology: ['Reinforcement Learning', 'NLP for News', 'Time Series', 'Alternative Data'],
      results: [
        'Medallion Fund: 66% annual returns (1988-2018)',
        'Processing petabytes of data daily',
        'Trades executed in microseconds',
        'Manages $100B+ in assets'
      ],
      keyTakeaways: [
        'Alpha decays quickly - continuous innovation required',
        'Alternative data provides edge',
        'Execution quality is as important as signal quality'
      ],
      architectureHighlights: `
        Data Sources: Market data, news, satellite imagery, social media
        Signals: Statistical arbitrage, momentum, sentiment
        Execution: Smart order routing, market making
        Risk: Real-time portfolio risk management
        Infrastructure: Low-latency co-located servers
      `,
      lessonsLearned: [
        'Markets are highly efficient - small edges matter',
        'Transaction costs eat into profits',
        'Risk management prevents blow-ups'
      ],
      resources: []
    },
    {
      id: 'fin-03',
      title: 'Credit Scoring with Alternative Data',
      company: 'Upstart, ZestFinance',
      challenge: 'Assess creditworthiness for thin-file or no-file applicants lacking traditional credit history.',
      solution: 'ML models using alternative data (education, employment, behavior) for more inclusive lending.',
      technology: ['Gradient Boosting', 'Explainable AI', 'Fairness Constraints', 'Regulatory Compliance'],
      results: [
        '75% fewer defaults at same approval rate',
        '27% more approvals for underserved groups',
        'Higher accuracy than FICO alone',
        'Full regulatory approval (CFPB, state agencies)'
      ],
      keyTakeaways: [
        'Alternative data can increase both accuracy and fairness',
        'Model explainability is mandatory for lending',
        'Fairness must be explicitly measured and optimized'
      ],
      architectureHighlights: `
        Traditional: Income, employment, existing debt
        Alternative: Education, field of study, employer
        Behavioral: Application behavior, device data
        Model: Gradient boosting with SHAP explanations
        Fairness: Disparate impact testing, bias mitigation
      `,
      lessonsLearned: [
        'Regulatory compliance shapes model architecture',
        'Adverse action reasons required for denials',
        'Model monitoring for fairness drift essential'
      ],
      resources: []
    },
    {
      id: 'fin-04',
      title: 'Anti-Money Laundering (AML)',
      company: 'HSBC, Standard Chartered (with Ayasdi/Symphony AyasdiAI)',
      challenge: 'Detect money laundering patterns among millions of transactions while reducing false positives.',
      solution: 'ML replacing rule-based systems to improve detection while dramatically reducing false positives.',
      technology: ['Graph Neural Networks', 'Anomaly Detection', 'Network Analysis', 'NLP'],
      results: [
        '70% reduction in false positives',
        '2-3x improvement in true positive detection',
        'Significant cost savings in investigations',
        'Better regulatory compliance'
      ],
      keyTakeaways: [
        'Graph features capture money laundering networks',
        'ML reduces alert fatigue for investigators',
        'Continuous learning adapts to new laundering methods'
      ],
      architectureHighlights: `
        Transaction Graph: Accounts as nodes, transfers as edges
        Features: Flow patterns, velocity, counterparty risk
        Model: GNN for network patterns + tabular model for transactions
        Output: Risk score + suspicious pattern explanation
        Integration: Case management system for investigators
      `,
      lessonsLearned: [
        'Graph structure reveals hidden relationships',
        'Explainability crucial for regulatory acceptance',
        'Human-in-the-loop for final decisions'
      ],
      resources: []
    }
  ],
  
  retail: [
    {
      id: 'retail-01',
      title: 'Amazon Recommendation Engine',
      company: 'Amazon',
      challenge: 'Personalize product recommendations for 300M+ customers across millions of products.',
      solution: 'Deep learning recommendation system combining collaborative filtering, content-based, and contextual signals.',
      technology: ['Deep Learning', 'Collaborative Filtering', 'Real-time Personalization', 'A/B Testing'],
      results: [
        '35% of Amazon revenue from recommendations',
        'Processes billions of user actions daily',
        'Real-time personalization at scale',
        'Continuous A/B testing optimization'
      ],
      keyTakeaways: [
        'Recommendations drive significant revenue',
        'Multiple signals improve accuracy',
        'Real-time updates improve engagement'
      ],
      architectureHighlights: `
        Signals: Browse history, purchases, search, ratings
        Model: Neural collaborative filtering + sequential models
        Features: Product embeddings, user embeddings, context
        Serving: Real-time with <100ms latency
        Optimization: Multi-objective (revenue, relevance, diversity)
      `,
      lessonsLearned: [
        'Diversity prevents filter bubbles',
        'Recency weighs heavily in recommendations',
        'Cold-start requires content-based fallbacks'
      ],
      resources: []
    },
    {
      id: 'retail-02',
      title: 'Walmart Demand Forecasting',
      company: 'Walmart',
      challenge: 'Forecast demand for 500K+ SKUs across 4,700+ stores to optimize inventory.',
      solution: 'ML forecasting system considering seasonality, promotions, weather, events, and local factors.',
      technology: ['Time Series', 'Gradient Boosting', 'Hierarchical Forecasting', 'External Features'],
      results: [
        '30% reduction in out-of-stocks',
        '15% reduction in excess inventory',
        'Billions in annual savings',
        'Better customer satisfaction'
      ],
      keyTakeaways: [
        'Local factors matter at store level',
        'Promotional effects require causal modeling',
        'Hierarchical reconciliation improves accuracy'
      ],
      architectureHighlights: `
        Granularity: Store x SKU x Day forecasts
        Features: Historical sales, promotions, weather, events
        Model: LightGBM with custom loss for inventory costs
        Hierarchy: Item -> Category -> Department -> Store -> Region
        Output: Point forecast + prediction intervals
      `,
      lessonsLearned: [
        'Business costs should inform model loss function',
        'Forecast uncertainty as important as point estimate',
        'Human override needed for unprecedented events'
      ],
      resources: []
    },
    {
      id: 'retail-03',
      title: 'Dynamic Pricing at Uber',
      company: 'Uber',
      challenge: 'Balance supply and demand in real-time across millions of ride requests.',
      solution: 'Surge pricing ML model that adjusts prices to maximize marketplace efficiency.',
      technology: ['Reinforcement Learning', 'Real-time Optimization', 'Causal Inference', 'Geospatial'],
      results: [
        '20-30% improvement in marketplace efficiency',
        'Reduced wait times during high demand',
        'Increased driver supply during peak times',
        'Real-time pricing across 10,000+ cities'
      ],
      keyTakeaways: [
        'Dynamic pricing balances two-sided marketplaces',
        'Transparency in pricing builds trust',
        'Local optimization needs global constraints'
      ],
      architectureHighlights: `
        Demand Model: Predict ride requests by zone x time
        Supply Model: Predict driver availability and response to surge
        Optimization: Find price that clears market
        Constraints: Maximum surge caps, fairness considerations
        Latency: Price updates every few minutes per zone
      `,
      lessonsLearned: [
        'Consumer perception of fairness matters',
        'Extreme surges create negative press',
        'Driver behavior responds to incentives'
      ],
      resources: []
    },
    {
      id: 'retail-04',
      title: 'Visual Search at Pinterest',
      company: 'Pinterest',
      challenge: 'Help users find products from images - "I want something like this!"',
      solution: 'Visual search using deep learning to find similar products from billions of images.',
      technology: ['CNN', 'Metric Learning', 'Visual Embeddings', 'Approximate Nearest Neighbors'],
      results: [
        '600M+ visual searches monthly',
        '85% of Pinterest users say visual search influenced purchases',
        '2x higher engagement than text search',
        'Powers billions in shopping transactions'
      ],
      keyTakeaways: [
        'Visual search is natural for discovery',
        'Embedding quality determines search quality',
        'Approximate methods enable scale'
      ],
      architectureHighlights: `
        Encoder: ResNet-based visual encoder
        Training: Triplet loss for metric learning
        Index: HNSW for approximate nearest neighbors
        Features: Object detection + embedding per object
        Serving: <200ms for image search
      `,
      lessonsLearned: [
        'Object-level vs image-level embeddings matter',
        'Training data quality crucial for embeddings',
        'Real-time updates for trending products'
      ],
      resources: []
    }
  ],
  
  manufacturing: [
    {
      id: 'mfg-01',
      title: 'Predictive Maintenance at Siemens',
      company: 'Siemens',
      challenge: 'Predict equipment failures before they occur to prevent costly unplanned downtime.',
      solution: 'ML models analyzing sensor data to predict remaining useful life and schedule maintenance.',
      technology: ['Time Series', 'Anomaly Detection', 'Survival Analysis', 'IoT Integration'],
      results: [
        '30% reduction in unplanned downtime',
        '25% reduction in maintenance costs',
        'Extended equipment lifespan',
        'Deployed across 10,000+ industrial assets'
      ],
      keyTakeaways: [
        'Sensor data contains early failure signals',
        'Domain expertise crucial for feature engineering',
        'False alarms have real costs'
      ],
      architectureHighlights: `
        Data: Vibration, temperature, pressure, current sensors
        Features: Statistical (mean, std, kurtosis), spectral (FFT)
        Model: Gradient boosting for classification, survival for RUL
        Output: Health score + remaining useful life estimate
        Integration: CMMS for maintenance scheduling
      `,
      lessonsLearned: [
        'Failure data is rare - need synthetic or physics-based augmentation',
        'Different failure modes need different models',
        'Maintenance windows constrain predictions usefulness'
      ],
      resources: []
    },
    {
      id: 'mfg-02',
      title: 'Quality Inspection with Computer Vision',
      company: 'BMW, Tesla, Foxconn',
      challenge: 'Detect manufacturing defects with higher accuracy and speed than human inspectors.',
      solution: 'Computer vision systems using CNNs to inspect products on production lines.',
      technology: ['CNN', 'Object Detection', 'Segmentation', 'Edge Deployment'],
      results: [
        '99.5%+ defect detection rate',
        '10x faster than manual inspection',
        'Consistent 24/7 inspection quality',
        '50% reduction in quality costs'
      ],
      keyTakeaways: [
        'Lighting and positioning critical for imaging',
        'Anomaly detection for rare defects',
        'Edge deployment for real-time decisions'
      ],
      architectureHighlights: `
        Camera: High-resolution industrial cameras
        Lighting: Controlled, multi-angle illumination
        Model: YOLOv8 for defect detection, U-Net for segmentation
        Inference: Edge GPUs (NVIDIA Jetson)
        Output: Defect type, location, severity
      `,
      lessonsLearned: [
        'Synthetic defects help with rare defect types',
        'Active learning improves model over time',
        'Integration with reject/rework systems'
      ],
      resources: []
    },
    {
      id: 'mfg-03',
      title: 'Supply Chain Optimization',
      company: 'Unilever, P&G',
      challenge: 'Optimize global supply chain with thousands of products, hundreds of facilities.',
      solution: 'ML for demand forecasting, inventory optimization, and logistics planning.',
      technology: ['Forecasting', 'Optimization', 'Reinforcement Learning', 'Digital Twin'],
      results: [
        '20% reduction in inventory costs',
        '15% improvement in service levels',
        'Carbon footprint reduction',
        'Resilience to supply disruptions'
      ],
      keyTakeaways: [
        'End-to-end optimization beats local optimization',
        'Scenario planning handles uncertainty',
        'Sustainability now a key objective'
      ],
      architectureHighlights: `
        Demand: Hierarchical forecasting with external features
        Inventory: Multi-echelon inventory optimization
        Logistics: Vehicle routing with constraints
        Planning: Mixed-integer programming + heuristics
        Simulation: Digital twin for what-if analysis
      `,
      lessonsLearned: [
        'Data integration across silos is hard',
        'Human planners need decision support, not replacement',
        'Robustness to disruptions more important than efficiency'
      ],
      resources: []
    },
    {
      id: 'mfg-04',
      title: 'Autonomous Robots at Amazon Warehouses',
      company: 'Amazon Robotics (Kiva Systems)',
      challenge: 'Coordinate thousands of robots in warehouses for efficient order fulfillment.',
      solution: 'Multi-agent RL and path planning for 200,000+ robots across fulfillment centers.',
      technology: ['Multi-Agent RL', 'Path Planning', 'SLAM', 'Fleet Coordination'],
      results: [
        '500,000+ robots deployed globally',
        '5x improvement in picking efficiency',
        '20% reduction in operating costs',
        'Handles peak demand (Prime Day, holidays)'
      ],
      keyTakeaways: [
        'Coordination is harder than individual robot control',
        'Real-time replanning handles dynamic environments',
        'Safety is paramount - no human-robot collisions'
      ],
      architectureHighlights: `
        Navigation: SLAM for localization, path planning
        Coordination: Central traffic management + local decisions
        Optimization: Pod selection, robot assignment, path optimization
        Safety: Multi-level collision avoidance
        Scaling: Hierarchical architecture for large fleets
      `,
      lessonsLearned: [
        'Simulation-to-real transfer is challenging',
        'System reliability more important than individual robot performance',
        'Human-robot collaboration design is crucial'
      ],
      resources: []
    }
  ],
  
  other: [
    {
      id: 'other-01',
      title: 'Content Moderation at Scale',
      company: 'Meta (Facebook), YouTube',
      challenge: 'Moderate billions of pieces of content daily for hate speech, violence, misinformation.',
      solution: 'Multi-modal AI analyzing text, images, video for policy violations.',
      technology: ['Multi-modal AI', 'NLP', 'Computer Vision', 'Human-in-the-loop'],
      results: [
        '99%+ automated detection for some violation types',
        'Processes billions of posts daily',
        'Reduces human reviewer trauma',
        'Continuous adaptation to new trends'
      ],
      keyTakeaways: [
        'Context is crucial for moderation decisions',
        'Policy evolves - models must adapt',
        'Human oversight remains essential'
      ],
      architectureHighlights: `
        Text: Transformer models for multiple languages
        Images: CNN classifiers for policy categories
        Video: Temporal modeling for video understanding
        Fusion: Multi-modal combination for final decision
        Review: High-risk content goes to human reviewers
      `,
      lessonsLearned: [
        'Cultural context affects appropriateness',
        'Adversarial users try to evade detection',
        'Transparency in moderation builds trust'
      ],
      resources: []
    },
    {
      id: 'other-02',
      title: 'Autonomous Vehicles',
      company: 'Waymo, Tesla, Cruise',
      challenge: 'Enable safe self-driving in complex, unpredictable real-world environments.',
      solution: 'Multi-sensor fusion, perception, prediction, and planning for autonomous driving.',
      technology: ['LiDAR', 'Computer Vision', 'Sensor Fusion', 'Reinforcement Learning', 'Simulation'],
      results: [
        '20M+ autonomous miles driven (Waymo)',
        'Lower accident rates than human drivers',
        'Commercial robotaxi services launched',
        'Continuous improvement from fleet data'
      ],
      keyTakeaways: [
        'Safety-critical AI requires extreme rigor',
        'Edge cases are the hardest problem',
        'Simulation accelerates development'
      ],
      architectureHighlights: `
        Perception: Camera, LiDAR, radar fusion
        Prediction: Behavior prediction for other road users
        Planning: Motion planning with safety constraints
        Control: Low-level vehicle control
        Simulation: Millions of simulated miles for testing
      `,
      lessonsLearned: [
        'Long tail of edge cases is extremely long',
        'HD maps provide crucial prior information',
        'Redundancy is essential for safety-critical decisions'
      ],
      resources: []
    },
    {
      id: 'other-03',
      title: 'Language Models for Code (GitHub Copilot)',
      company: 'GitHub / OpenAI',
      challenge: 'Help developers write code faster with AI-powered suggestions.',
      solution: 'Large language model fine-tuned on code that suggests completions in real-time.',
      technology: ['LLMs', 'Codex/GPT', 'Context Understanding', 'IDE Integration'],
      results: [
        '46% of code written by Copilot (among users)',
        '55% faster task completion',
        '1M+ developers using daily',
        'Works across 12+ programming languages'
      ],
      keyTakeaways: [
        'Context is king for code suggestions',
        'Developer trust requires high precision',
        'Learning from feedback improves suggestions'
      ],
      architectureHighlights: `
        Model: GPT-based, fine-tuned on public code
        Context: Current file + open tabs + project structure
        Generation: Multiple suggestions with confidence scores
        Integration: VS Code, JetBrains, Neovim
        Privacy: Enterprise option with no data retention
      `,
      lessonsLearned: [
        'License compliance is complex for code models',
        'Security vulnerabilities in suggestions are risks',
        'IDE integration UX is crucial for adoption'
      ],
      resources: []
    }
  ]
};

// Summary statistics for each industry
export const industrySummary = {
  healthcare: {
    totalCaseStudies: caseStudies.healthcare.length,
    keyTechnologies: ['Medical Imaging', 'Drug Discovery', 'Clinical Prediction', 'Federated Learning'],
    regulatoryConsiderations: ['FDA Approval', 'HIPAA Compliance', 'Clinical Validation'],
    ethicalConcerns: ['Bias in medical data', 'Explainability for doctors', 'Patient privacy']
  },
  finance: {
    totalCaseStudies: caseStudies.finance.length,
    keyTechnologies: ['Fraud Detection', 'Credit Scoring', 'Algorithmic Trading', 'AML'],
    regulatoryConsiderations: ['Fair Lending Laws', 'Model Risk Management', 'Explainability Requirements'],
    ethicalConcerns: ['Algorithmic fairness', 'Predatory lending', 'Market manipulation']
  },
  retail: {
    totalCaseStudies: caseStudies.retail.length,
    keyTechnologies: ['Recommendations', 'Demand Forecasting', 'Dynamic Pricing', 'Visual Search'],
    regulatoryConsiderations: ['Consumer Protection', 'Price Transparency', 'Data Privacy'],
    ethicalConcerns: ['Filter bubbles', 'Price discrimination', 'Addiction to shopping']
  },
  manufacturing: {
    totalCaseStudies: caseStudies.manufacturing.length,
    keyTechnologies: ['Predictive Maintenance', 'Quality Inspection', 'Supply Chain', 'Robotics'],
    regulatoryConsiderations: ['Safety Standards', 'Environmental Compliance', 'Labor Laws'],
    ethicalConcerns: ['Job displacement', 'Worker safety', 'Environmental impact']
  }
};

export default caseStudies;
