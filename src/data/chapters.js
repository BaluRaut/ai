const chapters = [
  {
    id: 'ch1',
    title: 'Foundations: Math & Mindset for AI',
    tags: ['Math', 'Foundations', 'Beginner', 'Both Tracks'],
    skills: ['Linear algebra', 'Calculus', 'Probability', 'Tensors'],
    what: [
      'Vectors, matrices, tensors; dot/transpose/matmul',
      'Derivatives, chain rule, gradient descent intuition',
      'Distributions, mean/variance, Bayes basics',
      'Tensor programming mental model'
    ],
    why: [
      'Neural nets are matrix calculus — this removes the magic',
      'Improves debugging and interpretation of training dynamics',
      'Underpins uncertainty, metrics, and evaluation',
      'Bridges theory and TensorFlow.js/TensorFlow practice'
    ],
    how: [
      'Learn with visual intuition then code small demos',
      'Do pencil-and-paper derivations + reproduce in code',
      'Simulate randomness; plot histograms & loss curves',
      'Keep a living glossary and cheat-sheets'
    ],
    resources: [
      { label: '3Blue1Brown: Linear Algebra', url: 'https://www.3blue1brown.com/topics/linear-algebra' },
      { label: 'Essence of Calculus', url: 'https://www.3blue1brown.com/lessons/derivatives' },
      { label: 'Khan: Probability', url: 'https://www.khanacademy.org/math/statistics-probability' },
      { label: 'TF.js Tensors', url: 'https://js.tensorflow.org/api/latest/#Tensors' }
    ],
  },
  {
    id: 'ch2',
    title: 'Python Core for AI',
    tags: ['Python', 'Beginner', 'Tooling'],
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Jupyter'],
    what: [
      'Python syntax, packaging, virtualenv, notebooks',
      'NumPy arrays, broadcasting, vectorization',
      'Pandas data wrangling; plotting with Matplotlib/Plotly',
      'Clean code: tests, docstrings, black/ruff'
    ],
    why: [
      'Python is the lingua franca for ML research and data prep',
      'Vectorization is key to performance and readable code',
      'Exploration + visualization speed up iteration',
      'Clean code enables reproducibility and collaboration'
    ],
    how: [
      'Daily notebook exercises on data munging',
      'Convert loops to vectorized NumPy/Pandas ops',
      'Make plots for every experiment (loss, metrics, errors)',
      'Set up a reusable project template'
    ],
    resources: [
      { label: 'NumPy', url: 'https://numpy.org/doc/' },
      { label: 'Pandas', url: 'https://pandas.pydata.org/docs/' },
      { label: 'Matplotlib', url: 'https://matplotlib.org/stable/index.html' },
      { label: 'Plotly', url: 'https://plotly.com/python/' }
    ],
  },
  {
    id: 'ch3',
    title: 'JavaScript Core & TensorFlow.js Basics',
    tags: ['JavaScript', 'TF.js', 'Beginner', 'Browser'],
    skills: ['ES6 modules', 'Async/Await', 'TF.js tensors', 'Backends'],
    what: [
      'Modern JS essentials; Node vs Browser differences',
      'TF.js tensors, memory management (tf.tidy)',
      'Backends: webgl, webgpu, wasm — trade-offs',
      'Model.fit/predict; saving/loading models'
    ],
    why: [
      'Run AI everywhere with zero install via the browser',
      'Leverage GPU acceleration on client devices',
      'Ship interactive ML apps quickly',
      'Great for demos, education, and privacy-preserving inference'
    ],
    how: [
      'Recreate simple ML tasks in TF.js (linear/classifier)',
      'Experiment with backends; measure FPS and memory',
      'Package a demo with Vite; deploy to Netlify/Pages',
      'Compare Python vs JS implementations'
    ],
    resources: [
      { label: 'TF.js Guide', url: 'https://www.tensorflow.org/js' },
      { label: 'TF.js Examples', url: 'https://github.com/tensorflow/tfjs-examples' },
      { label: 'TF.js API', url: 'https://js.tensorflow.org/api/latest/' }
    ],
  },
  {
    id: 'ch4',
    title: 'Data Handling & Visualization',
    tags: ['Python', 'JavaScript', 'Data', 'Viz'],
    skills: ['Data cleaning', 'EDA', 'Plotting', 'D3/Charting'],
    what: [
      'Data types, missing values, outliers, scaling',
      'Exploratory analysis: distributions, correlations',
      'Feature engineering basics',
      'Visualization best practices'
    ],
    why: [
      'Real-world data is messy; great models start with great data',
      'Visuals reveal patterns & errors quickly',
      'Good features amplify signal for simpler models',
      'Communicating findings is a core ML skill'
    ],
    how: [
      'Write reusable EDA notebooks and scripts',
      'Create dashboards/plots for key metrics',
      'Automate checks (schema, drift)',
      'Share short reports each week'
    ],
    resources: [
      { label: 'Pandas User Guide', url: 'https://pandas.pydata.org/docs/user_guide/index.html' },
      { label: 'Seaborn', url: 'https://seaborn.pydata.org/' },
      { label: 'D3.js', url: 'https://d3js.org/' },
      { label: 'Chart.js', url: 'https://www.chartjs.org/' }
    ],
  },
  {
    id: 'ch5',
    title: 'ML Fundamentals with scikit-learn',
    tags: ['Python', 'ML', 'scikit-learn'],
    skills: ['Train/test split', 'Metrics', 'Regularization', 'Pipelines'],
    what: [
      'Supervised learning: regression & classification',
      'Bias-variance, cross-validation, metrics (AUC, F1)',
      'Pipelines & preprocessing',
      'Hyperparameter tuning'
    ],
    why: [
      'Baselines matter; classic ML solves many problems well',
      'Pipelines keep code clean and reproducible',
      'Understanding regularization improves generalization',
      'Metrics make results comparable and honest'
    ],
    how: [
      'Train 3+ models per problem; compare fairly',
      'Use GridSearch/RandomizedSearch',
      'Save models & preprocessing together',
      'Document experiments with a lightweight template'
    ],
    resources: [
      { label: 'scikit-learn', url: 'https://scikit-learn.org/stable/' },
      { label: 'sklearn Pipelines', url: 'https://scikit-learn.org/stable/modules/compose.html' },
      { label: 'Model Selection', url: 'https://scikit-learn.org/stable/modules/model_selection.html' }
    ],
  },
  {
    id: 'ch6',
    title: 'Deep Learning Basics (Keras & TF.js)',
    tags: ['Deep Learning', 'Keras', 'TF.js'],
    skills: ['Dense nets', 'Activations', 'Losses', 'Optimizers'],
    what: [
      'Neural nets with Keras: Sequential & Functional API',
      'Activation functions and initialization',
      'Loss functions and optimizers',
      'Training loops, callbacks, early stopping'
    ],
    why: [
      'Foundation for modern AI systems',
      'Learn to prevent over/underfitting',
      'Reusable patterns across tasks (vision/NLP)',
      'Transfer understanding to TF.js in the browser'
    ],
    how: [
      'Build regressors & classifiers on tabular & simple image data',
      'Use callbacks (EarlyStopping/ReduceLROnPlateau)',
      'Replicate small models in TF.js',
      'Track experiments and write postmortems'
    ],
    resources: [
      { label: 'Keras Guides', url: 'https://keras.io/guides/' },
      { label: 'TensorFlow', url: 'https://www.tensorflow.org/guide' },
      { label: 'TF.js Layers', url: 'https://www.tensorflow.org/js/guide/models_and_layers' }
    ],
  },
  {
    id: 'ch7',
    title: 'Computer Vision I: CNNs',
    tags: ['Vision', 'CNN', 'Python', 'TF.js'],
    skills: ['Convolutions', 'Pooling', 'Augmentation', 'Transfer learning'],
    what: [
      'Conv/pool layers, receptive fields',
      'Small CNNs on CIFAR/MNIST',
      'Data augmentation & regularization',
      'Transfer learning with MobileNet/ResNet'
    ],
    why: [
      'Vision is a core ML domain with rich applications',
      'Transfer learning enables small-data success',
      'Augmentation improves robustness',
      'Builds intuition for spatial features'
    ],
    how: [
      'Train a small CNN in Keras',
      'Port to TF.js and deploy as a web demo',
      'Experiment with augmentation policies',
      'Write an error analysis report'
    ],
    resources: [
      { label: 'Keras Vision', url: 'https://keras.io/examples/vision/' },
      { label: 'TF.js MobileNet', url: 'https://www.tensorflow.org/js/models' }
    ],
  },
  {
    id: 'ch8',
    title: 'NLP I: Classical & Embeddings',
    tags: ['NLP', 'Embeddings', 'Python', 'TF.js'],
    skills: ['Tokenization', 'Word vectors', 'Sentence embeddings', 'Text metrics'],
    what: [
      'Tokenization and preprocessing',
      'Word2Vec/GloVe basics; spaCy pipelines',
      'Sentence embeddings (USE)',
      'Text classification and similarity'
    ],
    why: [
      'Embeddings power search and clustering',
      'Preprocessing drives downstream quality',
      'Simple models + good features go far',
      'Bridges to transformer era'
    ],
    how: [
      'Build a text classifier with scikit-learn + embeddings',
      'Use Universal Sentence Encoder in TF.js',
      'Create a semantic search mini app',
      'Evaluate with confusion matrices & PR curves'
    ],
    resources: [
      { label: 'spaCy', url: 'https://spacy.io/usage' },
      { label: 'USE (TF.js)', url: 'https://tfhub.dev/google/universal-sentence-encoder/4' },
      { label: 'scikit-learn Text', url: 'https://scikit-learn.org/stable/tutorial/text_analytics/working_with_text_data.html' }
    ],
  },
  {
    id: 'ch9',
    title: 'Deployment & MLOps Basics',
    tags: ['MLOps', 'Deployment', 'Python', 'JavaScript'],
    skills: ['APIs', 'CI/CD', 'Packaging', 'Monitoring'],
    what: [
      'FastAPI/Streamlit for Python serving',
      'Node/Express and TF.js in browser',
      'Packaging, versioning, model registry',
      'Experiment tracking & basic monitoring'
    ],
    why: [
      'Models must ship to users to create value',
      'Automation reduces regressions and toil',
      'Monitoring catches drift and failures early',
      'Good packaging = easy reuse & scaling'
    ],
    how: [
      'Build a FastAPI endpoint and Streamlit demo',
      'Deploy JS demo to Netlify/Vercel',
      'Track experiments (MLflow or Weights & Biases)',
      'Create a smoke-test checklist'
    ],
    resources: [
      { label: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
      { label: 'Streamlit', url: 'https://docs.streamlit.io/' },
      { label: 'MLflow', url: 'https://mlflow.org/' },
      { label: 'Weights & Biases', url: 'https://docs.wandb.ai/' }
    ],
  },
  {
    id: 'ch10',
    title: 'Reinforcement Learning Basics',
    tags: ['RL', 'Python'],
    skills: ['MDPs', 'Policies', 'Q-learning', 'Exploration'],
    what: [
      'Markov Decision Processes; rewards and value',
      'Tabular Q-learning & SARSA',
      'Function approximation basics',
      'Evaluation and exploration strategies'
    ],
    why: [
      'Teaches decision-making under uncertainty',
      'Applies to control, robotics, operations',
      'Links to bandits and online learning',
      'Builds mindset for long-horizon problems'
    ],
    how: [
      'Solve gridworld with tabular Q-learning',
      'Implement epsilon-greedy and decaying schedules',
      'Plot learning curves and returns',
      'Write a concise report'
    ],
    resources: [
      { label: 'Gymnasium', url: 'https://www.gymlibrary.dev/' },
      { label: 'RL Intro (Sutton & Barto)', url: 'http://incompleteideas.net/book/RLbook2020.pdf' }
    ],
  },
  {
    id: 'ch11',
    title: 'Advanced DL: Transformers',
    tags: ['Transformers', 'NLP', 'Python', 'TF.js'],
    skills: ['Attention', 'Pretraining', 'Fine-tuning', 'Inference'],
    what: [
      'Self-attention, encoder/decoder architectures',
      'Positional encodings and scaling laws (intuitive)',
      'Fine-tuning vs adapters/LoRA',
      'Efficient inference & tokenization'
    ],
    why: [
      'Transformers underpin modern language & vision models',
      'Understanding attention unlocks new applications',
      'Fine-tuning enables domain adaptation',
      'Efficiency matters for real-time apps'
    ],
    how: [
      'Fine-tune a small transformer on a text task',
      'Evaluate with BLEU/ROUGE/accuracy as relevant',
      'Serve a minimal inference API',
      'Try a TF.js transformer demo if feasible'
    ],
    resources: [
      { label: 'Hugging Face Transformers', url: 'https://huggingface.co/docs/transformers/index' },
      { label: 'Tokenizers', url: 'https://huggingface.co/docs/tokenizers/index' }
    ],
  },
  {
    id: 'ch12',
    title: 'Computer Vision II: Detection & Segmentation',
    tags: ['Vision', 'Detection', 'Segmentation', 'Python'],
    skills: ['Augmentation', 'Anchors', 'IoU', 'mAP'],
    what: [
      'Object detection fundamentals (anchors, IoU)',
      'Segmentation basics (UNet/Mask R-CNN intuition)',
      'Data labeling and augmentation pipelines',
      'Evaluation: mAP, confusion, precision/recall'
    ],
    why: [
      'Unlocks bound boxes & pixel-level tasks',
      'Critical for industry use-cases (retail, medical, robotics)',
      'Labeling quality is everything',
      'Strong evaluation avoids overclaiming results'
    ],
    how: [
      'Train a small detector or segmenter on a tiny dataset',
      'Augment, evaluate, iterate',
      'Create a demo notebook and sample images',
      'Write a crisp summary'
    ],
    resources: [
      { label: 'Ultralytics YOLO', url: 'https://docs.ultralytics.com/' },
      { label: 'Keras CV', url: 'https://keras.io/keras_cv/' }
    ],
  },
  {
    id: 'ch13',
    title: 'NLP II: Generation & Fine-Tuning',
    tags: ['NLP', 'Generation', 'Python', 'TF.js'],
    skills: ['Text generation', 'LoRA/Adapters', 'Eval', 'Guardrails'],
    what: [
      'Causal LMs and decoding (greedy, beam, nucleus)',
      'Parameter-efficient fine-tuning (LoRA/adapters)',
      'Prompting basics and evaluation',
      'Safety guardrails'
    ],
    why: [
      'Text generators power chatbots and content tools',
      'PEFT cuts cost while maintaining quality',
      'Better evaluation reduces regressions',
      'Safety is required for production'
    ],
    how: [
      'Fine-tune a small causal LM on domain text',
      'Build an evaluation harness',
      'Create a small chat UI (Streamlit or web)',
      'Add basic guardrails and filters'
    ],
    resources: [
      { label: 'PEFT', url: 'https://huggingface.co/docs/peft/index' },
      { label: 'Eval (Hugging Face)', url: 'https://huggingface.co/docs/evaluate/index' }
    ],
  },
  {
    id: 'ch14',
    title: 'Audio & Time Series',
    tags: ['Audio', 'Time Series', 'Python'],
    skills: ['STFT', 'Spectrograms', 'ARIMA/LSTM', 'Anomaly detection'],
    what: [
      'Audio features (MFCC, spectrogram)',
      'Classifiers for audio events',
      'Time series forecasting (ARIMA/LSTM/prophet basics)',
      'Anomaly detection patterns'
    ],
    why: [
      'Covers sound, sensors, finance use-cases',
      'Broadens intuition beyond vision/text',
      'Teaches feature engineering for temporal data',
      'Useful in monitoring ML systems'
    ],
    how: [
      'Build a clap vs snap classifier',
      'Forecast a public dataset with 2+ models',
      'Compare metrics and residuals',
      'Document limitations'
    ],
    resources: [
      { label: 'librosa', url: 'https://librosa.org/doc/latest/index.html' },
      { label: 'Facebook Prophet', url: 'https://facebook.github.io/prophet/' }
    ],
  },
  {
    id: 'ch15',
    title: 'Responsible AI, Experiment Tracking & Testing',
    tags: ['Ethics', 'Testing', 'MLOps', 'Python', 'JavaScript'],
    skills: ['Bias/fairness', 'Explainability', 'Tests/CI', 'Datasets'],
    what: [
      'Bias, fairness, dataset documentation',
      'Explainability (feature importance, SHAP/Grad-CAM)',
      'Unit/integration tests for ML',
      'Data versioning & governance basics'
    ],
    why: [
      'Real-world impact demands responsibility',
      'Explaining models builds trust with stakeholders',
      'Tests prevent silent failures',
      'Datasets are products—treat them as such'
    ],
    how: [
      'Audit a model for bias & write a datasheet',
      'Add tests to a project & integrate CI',
      'Add explainability to one project',
      'Create a model card'
    ],
    resources: [
      { label: 'Model Cards', url: 'https://modelcards.withgoogle.com/about' },
      { label: 'SHAP', url: 'https://shap.readthedocs.io/en/latest/' }
    ],
  },
  {
    id: 'ch16',
    title: 'Capstones & Portfolio',
    tags: ['Capstone', 'Portfolio', 'Python', 'TF.js'],
    skills: ['Product thinking', 'Deployment', 'Docs', 'Presentation'],
    what: [
      'Define problem statements and target users',
      'Scoping & roadmapping',
      'Build/ship 2–3 projects end-to-end',
      'Prepare portfolio write-ups & demos'
    ],
    why: [
      'Projects demonstrate practical skill & taste',
      'Shipping builds confidence & credibility',
      'Docs/summaries help future employers/clients',
      'Polished demos stand out'
    ],
    how: [
      'Pick 2–3 projects from previous chapters',
      'Harden code, add tests, refine UX',
      'Deploy and gather feedback',
      'Publish write-ups and videos'
    ],
    resources: [
      { label: 'Streamlit Deploy', url: 'https://docs.streamlit.io/streamlit-community-cloud' },
      { label: 'Netlify', url: 'https://www.netlify.com/' },
      { label: 'Vercel', url: 'https://vercel.com/' }
    ],
  }
]

export default chapters
