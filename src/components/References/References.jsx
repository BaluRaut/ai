import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Link,
  Divider,
  Card,
  CardContent,
  IconButton,
  Collapse,
  Avatar
} from '@mui/material';
import {
  Book,
  VideoLibrary,
  Code,
  School,
  Article,
  GitHub,
  Language,
  ExpandMore,
  ExpandLess,
  OpenInNew,
  YouTube,
  MenuBook,
  Description,
  Schedule
} from '@mui/icons-material';

const References = ({ pathId, topicId }) => {
  const [tabValue, setTabValue] = useState(0);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Comprehensive reference database
  const references = {
    // Video Tutorials
    videos: [
      {
        title: '3Blue1Brown - Neural Networks Series',
        author: 'Grant Sanderson',
        url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi',
        description: 'Visual, intuitive explanations of neural networks and deep learning',
        duration: '4 hours',
        topics: ['Neural Networks', 'Backpropagation', 'Gradient Descent'],
        difficulty: 'Beginner-Intermediate'
      },
      {
        title: '3Blue1Brown - Linear Algebra Series',
        author: 'Grant Sanderson',
        url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
        description: 'Geometric understanding of linear algebra concepts',
        duration: '2 hours',
        topics: ['Vectors', 'Matrices', 'Eigenvalues', 'Transformations'],
        difficulty: 'Beginner'
      },
      {
        title: '3Blue1Brown - Calculus Series',
        author: 'Grant Sanderson',
        url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr',
        description: 'Essence of calculus with visual explanations',
        duration: '3 hours',
        topics: ['Derivatives', 'Integrals', 'Chain Rule', 'Optimization'],
        difficulty: 'Beginner'
      },
      {
        title: 'StatQuest - Machine Learning',
        author: 'Josh Starmer',
        url: 'https://www.youtube.com/c/joshstarmer',
        description: 'Clear, simple explanations of ML and stats concepts',
        duration: 'Various',
        topics: ['Statistics', 'ML Algorithms', 'Neural Networks', 'Decision Trees'],
        difficulty: 'Beginner-Intermediate'
      },
      {
        title: 'Andrej Karpathy - Neural Networks: Zero to Hero',
        author: 'Andrej Karpathy',
        url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ',
        description: 'Build neural networks from scratch in code',
        duration: '8+ hours',
        topics: ['Neural Networks', 'GPT', 'Backpropagation', 'PyTorch'],
        difficulty: 'Intermediate-Advanced'
      },
      {
        title: 'Stanford CS229: Machine Learning',
        author: 'Andrew Ng',
        url: 'https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU',
        description: 'Full university course on machine learning',
        duration: '40+ hours',
        topics: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning'],
        difficulty: 'Advanced'
      },
      {
        title: 'DeepLearning.AI - Deep Learning Specialization',
        author: 'Andrew Ng',
        url: 'https://www.youtube.com/@Deeplearningai',
        description: 'Comprehensive deep learning course series',
        duration: '60+ hours',
        topics: ['CNNs', 'RNNs', 'Transformers', 'GANs'],
        difficulty: 'Intermediate-Advanced'
      },
      {
        title: 'Two Minute Papers',
        author: 'Károly Zsolnai-Fehér',
        url: 'https://www.youtube.com/@TwoMinutePapers',
        description: 'Latest AI research papers explained simply',
        duration: 'Various 2-5 min videos',
        topics: ['Latest Research', 'AI Trends', 'Computer Vision', 'NLP'],
        difficulty: 'All Levels'
      }
    ],

    // Books & Textbooks
    books: [
      {
        title: 'Deep Learning',
        authors: 'Ian Goodfellow, Yoshua Bengio, Aaron Courville',
        url: 'https://www.deeplearningbook.org/',
        description: 'The definitive textbook on deep learning',
        type: 'Free Online',
        pages: '800+',
        topics: ['Neural Networks', 'CNNs', 'RNNs', 'Optimization', 'Regularization'],
        difficulty: 'Advanced'
      },
      {
        title: 'Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow',
        authors: 'Aurélien Géron',
        url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/',
        description: 'Practical ML with Python - best for beginners',
        type: 'Paid Book',
        pages: '850',
        topics: ['Scikit-Learn', 'TensorFlow', 'Keras', 'End-to-End Projects'],
        difficulty: 'Beginner-Intermediate'
      },
      {
        title: 'Pattern Recognition and Machine Learning',
        authors: 'Christopher Bishop',
        url: 'https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/',
        description: 'Mathematical foundations of ML',
        type: 'Free PDF',
        pages: '738',
        topics: ['Probability', 'Bayesian Methods', 'Neural Networks', 'Graphical Models'],
        difficulty: 'Advanced'
      },
      {
        title: 'The Hundred-Page Machine Learning Book',
        authors: 'Andriy Burkov',
        url: 'http://themlbook.com/',
        description: 'Concise overview of ML concepts',
        type: 'Paid Book (read online first)',
        pages: '160',
        topics: ['ML Fundamentals', 'Algorithms', 'Math Basics'],
        difficulty: 'Beginner-Intermediate'
      },
      {
        title: 'Mathematics for Machine Learning',
        authors: 'Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong',
        url: 'https://mml-book.github.io/',
        description: 'Math foundations for ML',
        type: 'Free Online',
        pages: '391',
        topics: ['Linear Algebra', 'Calculus', 'Probability', 'Optimization'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Neural Networks and Deep Learning',
        authors: 'Michael Nielsen',
        url: 'http://neuralnetworksanddeeplearning.com/',
        description: 'Interactive book on neural networks',
        type: 'Free Online',
        pages: 'Web-based',
        topics: ['Neural Networks', 'Backpropagation', 'CNNs'],
        difficulty: 'Beginner-Intermediate'
      },
      {
        title: 'Probabilistic Machine Learning: An Introduction',
        authors: 'Kevin Murphy',
        url: 'https://probml.github.io/pml-book/book1.html',
        description: 'Modern ML from a probabilistic perspective',
        type: 'Free PDF',
        pages: '826',
        topics: ['Probability', 'Bayesian ML', 'Deep Learning'],
        difficulty: 'Advanced'
      }
    ],

    // Online Courses
    courses: [
      {
        title: 'CS50\'s Introduction to AI with Python',
        platform: 'Harvard/edX',
        url: 'https://cs50.harvard.edu/ai/',
        description: 'Harvard\'s intro to AI and ML',
        duration: '7 weeks',
        cost: 'Free',
        topics: ['Search', 'Knowledge', 'Neural Networks', 'NLP'],
        difficulty: 'Beginner'
      },
      {
        title: 'Machine Learning Specialization',
        platform: 'Coursera (Andrew Ng)',
        url: 'https://www.coursera.org/specializations/machine-learning-introduction',
        description: 'Most popular ML course',
        duration: '3 months',
        cost: 'Free to audit',
        topics: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks'],
        difficulty: 'Beginner'
      },
      {
        title: 'Deep Learning Specialization',
        platform: 'Coursera (DeepLearning.AI)',
        url: 'https://www.coursera.org/specializations/deep-learning',
        description: 'Comprehensive deep learning',
        duration: '5 months',
        cost: 'Free to audit',
        topics: ['CNNs', 'RNNs', 'Transformers', 'Sequence Models'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Fast.ai - Practical Deep Learning',
        platform: 'fast.ai',
        url: 'https://course.fast.ai/',
        description: 'Top-down approach to deep learning',
        duration: '7 weeks',
        cost: 'Free',
        topics: ['CNNs', 'NLP', 'Tabular Data', 'Collaborative Filtering'],
        difficulty: 'Intermediate'
      },
      {
        title: 'MIT 6.S191: Introduction to Deep Learning',
        platform: 'MIT',
        url: 'http://introtodeeplearning.com/',
        description: 'MIT\'s intensive deep learning course',
        duration: '1 week intensive',
        cost: 'Free',
        topics: ['Neural Networks', 'CNNs', 'RNNs', 'GANs', 'Reinforcement Learning'],
        difficulty: 'Intermediate-Advanced'
      },
      {
        title: 'Full Stack Deep Learning',
        platform: 'UC Berkeley',
        url: 'https://fullstackdeeplearning.com/',
        description: 'Production ML systems',
        duration: '12 weeks',
        cost: 'Free',
        topics: ['MLOps', 'Deployment', 'Testing', 'Monitoring'],
        difficulty: 'Advanced'
      }
    ],

    // Documentation & Tutorials
    documentation: [
      {
        title: 'PyTorch Documentation',
        url: 'https://pytorch.org/docs/',
        description: 'Official PyTorch docs with tutorials',
        type: 'Framework Docs',
        topics: ['PyTorch', 'Neural Networks', 'Computer Vision', 'NLP']
      },
      {
        title: 'TensorFlow Documentation',
        url: 'https://www.tensorflow.org/learn',
        description: 'Official TensorFlow guides and tutorials',
        type: 'Framework Docs',
        topics: ['TensorFlow', 'Keras', 'TFLite', 'TensorFlow.js']
      },
      {
        title: 'Scikit-Learn User Guide',
        url: 'https://scikit-learn.org/stable/user_guide.html',
        description: 'Comprehensive ML algorithms guide',
        type: 'Library Docs',
        topics: ['Classical ML', 'Preprocessing', 'Model Selection']
      },
      {
        title: 'Hugging Face Transformers',
        url: 'https://huggingface.co/docs/transformers/',
        description: 'State-of-the-art NLP models',
        type: 'Library Docs',
        topics: ['Transformers', 'BERT', 'GPT', 'NLP Tasks']
      },
      {
        title: 'NumPy Documentation',
        url: 'https://numpy.org/doc/',
        description: 'Fundamental package for scientific computing',
        type: 'Library Docs',
        topics: ['Arrays', 'Linear Algebra', 'Statistics']
      },
      {
        title: 'Pandas Documentation',
        url: 'https://pandas.pydata.org/docs/',
        description: 'Data manipulation and analysis',
        type: 'Library Docs',
        topics: ['Data Structures', 'Data Cleaning', 'Analysis']
      }
    ],

    // Research Papers & Articles
    papers: [
      {
        title: 'Attention Is All You Need',
        authors: 'Vaswani et al.',
        url: 'https://arxiv.org/abs/1706.03762',
        year: '2017',
        description: 'The transformer architecture paper',
        citations: '100,000+',
        topics: ['Transformers', 'Attention Mechanism', 'NLP']
      },
      {
        title: 'ImageNet Classification with Deep CNNs',
        authors: 'Krizhevsky, Sutskever, Hinton',
        url: 'https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html',
        year: '2012',
        description: 'AlexNet - revolutionized computer vision',
        citations: '100,000+',
        topics: ['CNNs', 'Computer Vision', 'ImageNet']
      },
      {
        title: 'BERT: Pre-training of Deep Bidirectional Transformers',
        authors: 'Devlin et al.',
        url: 'https://arxiv.org/abs/1810.04805',
        year: '2018',
        description: 'BERT for NLP tasks',
        citations: '50,000+',
        topics: ['BERT', 'NLP', 'Pre-training', 'Transfer Learning']
      },
      {
        title: 'Generative Adversarial Networks',
        authors: 'Ian Goodfellow et al.',
        url: 'https://arxiv.org/abs/1406.2661',
        year: '2014',
        description: 'Introduction of GANs',
        citations: '40,000+',
        topics: ['GANs', 'Generative Models', 'Unsupervised Learning']
      },
      {
        title: 'Deep Residual Learning (ResNet)',
        authors: 'He et al.',
        url: 'https://arxiv.org/abs/1512.03385',
        year: '2015',
        description: 'Residual connections for very deep networks',
        citations: '100,000+',
        topics: ['ResNet', 'Deep Learning', 'Computer Vision']
      },
      {
        title: 'Adam: A Method for Stochastic Optimization',
        authors: 'Kingma & Ba',
        url: 'https://arxiv.org/abs/1412.6980',
        year: '2014',
        description: 'The Adam optimizer',
        citations: '100,000+',
        topics: ['Optimization', 'Gradient Descent', 'Training']
      }
    ],

    // Interactive Learning
    interactive: [
      {
        title: 'TensorFlow Playground',
        url: 'https://playground.tensorflow.org/',
        description: 'Interactive neural network visualization',
        type: 'Web App',
        topics: ['Neural Networks', 'Visualization', 'Training']
      },
      {
        title: 'Distill.pub',
        url: 'https://distill.pub/',
        description: 'Interactive ML research explanations',
        type: 'Research Journal',
        topics: ['Attention', 'Feature Visualization', 'Interpretability']
      },
      {
        title: 'Kaggle Learn',
        url: 'https://www.kaggle.com/learn',
        description: 'Hands-on micro-courses',
        type: 'Interactive Tutorials',
        topics: ['Python', 'ML', 'Deep Learning', 'Data Viz']
      },
      {
        title: 'Google AI Experiments',
        url: 'https://experiments.withgoogle.com/collection/ai',
        description: 'Interactive AI demos',
        type: 'Demos',
        topics: ['Computer Vision', 'NLP', 'Music Generation']
      },
      {
        title: 'ML Visuals',
        url: 'https://github.com/dair-ai/ml-visuals',
        description: 'Diagrams and figures for ML concepts',
        type: 'Visual Resources',
        topics: ['Diagrams', 'Infographics', 'Presentations']
      }
    ],

    // Community & Forums
    community: [
      {
        title: 'Papers with Code',
        url: 'https://paperswithcode.com/',
        description: 'ML papers with implementation code',
        type: 'Repository',
        topics: ['Research', 'Code', 'Benchmarks', 'State-of-the-art']
      },
      {
        title: 'Towards Data Science',
        url: 'https://towardsdatascience.com/',
        description: 'Medium publication on data science and ML',
        type: 'Blog',
        topics: ['Tutorials', 'Case Studies', 'Best Practices']
      },
      {
        title: 'Machine Learning Mastery',
        url: 'https://machinelearningmastery.com/',
        description: 'Practical ML tutorials',
        type: 'Blog',
        topics: ['Step-by-step Tutorials', 'Code Examples', 'Tips']
      },
      {
        title: 'r/MachineLearning',
        url: 'https://www.reddit.com/r/MachineLearning/',
        description: 'Reddit community for ML',
        type: 'Forum',
        topics: ['Research', 'Discussions', 'News', 'Q&A']
      },
      {
        title: 'AI Alignment Forum',
        url: 'https://www.alignmentforum.org/',
        description: 'Discussions on AI safety and alignment',
        type: 'Forum',
        topics: ['AI Safety', 'Ethics', 'Research']
      },
      {
        title: 'Kaggle Forums',
        url: 'https://www.kaggle.com/discussions',
        description: 'Competitions and discussions',
        type: 'Community',
        topics: ['Competitions', 'Datasets', 'Notebooks']
      }
    ],

    // Tools & Libraries
    tools: [
      {
        title: 'Google Colab',
        url: 'https://colab.research.google.com/',
        description: 'Free Jupyter notebooks with GPU',
        type: 'Development Environment',
        features: ['Free GPU/TPU', 'Pre-installed Libraries', 'Easy Sharing']
      },
      {
        title: 'Weights & Biases',
        url: 'https://wandb.ai/',
        description: 'Experiment tracking and visualization',
        type: 'MLOps Tool',
        features: ['Experiment Tracking', 'Hyperparameter Tuning', 'Model Registry']
      },
      {
        title: 'MLflow',
        url: 'https://mlflow.org/',
        description: 'Open-source ML lifecycle platform',
        type: 'MLOps Tool',
        features: ['Tracking', 'Projects', 'Models', 'Registry']
      },
      {
        title: 'Label Studio',
        url: 'https://labelstud.io/',
        description: 'Data labeling and annotation',
        type: 'Annotation Tool',
        features: ['Multi-format Support', 'ML-assisted Labeling', 'Export']
      },
      {
        title: 'Gradio',
        url: 'https://gradio.app/',
        description: 'Build ML demos quickly',
        type: 'Demo Builder',
        features: ['Instant UI', 'Sharing', 'Integration']
      }
    ],

    // Datasets
    datasets: [
      {
        title: 'UCI Machine Learning Repository',
        url: 'https://archive.ics.uci.edu/ml/',
        description: '600+ datasets for ML',
        size: 'Various',
        domains: ['Classification', 'Regression', 'Clustering', 'Time Series']
      },
      {
        title: 'Kaggle Datasets',
        url: 'https://www.kaggle.com/datasets',
        description: '100,000+ public datasets',
        size: 'Various',
        domains: ['All Domains', 'Competitions', 'Real-world Data']
      },
      {
        title: 'ImageNet',
        url: 'https://www.image-net.org/',
        description: 'Large visual database',
        size: '14M images, 20k categories',
        domains: ['Computer Vision', 'Object Recognition']
      },
      {
        title: 'Common Crawl',
        url: 'https://commoncrawl.org/',
        description: 'Web crawl data',
        size: 'Petabytes',
        domains: ['NLP', 'Web Data', 'Large-scale']
      },
      {
        title: 'Hugging Face Datasets',
        url: 'https://huggingface.co/datasets',
        description: 'NLP and ML datasets',
        size: '10,000+ datasets',
        domains: ['NLP', 'Computer Vision', 'Audio']
      }
    ]
  };

  const renderVideoList = () => (
    <Box>
      {references.videos.map((video, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'error.main' }}>
                <YouTube />
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Link href={video.url} target="_blank" rel="noopener" underline="hover">
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {video.title}
                    <OpenInNew fontSize="small" />
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  by {video.author}
                </Typography>
                <Typography variant="body2" paragraph>
                  {video.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                  <Chip label={video.duration} size="small" icon={<Schedule />} />
                  <Chip label={video.difficulty} size="small" color="primary" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                  {video.topics.map((topic, i) => (
                    <Chip key={i} label={topic} size="small" variant="outlined" />
                  ))}
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderBookList = () => (
    <Box>
      {references.books.map((book, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <MenuBook />
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Link href={book.url} target="_blank" rel="noopener" underline="hover">
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {book.title}
                    <OpenInNew fontSize="small" />
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  by {book.authors}
                </Typography>
                <Typography variant="body2" paragraph>
                  {book.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                  <Chip label={book.type} size="small" color={book.type.includes('Free') ? 'success' : 'default'} />
                  <Chip label={`${book.pages} pages`} size="small" variant="outlined" />
                  <Chip label={book.difficulty} size="small" color="primary" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                  {book.topics.map((topic, i) => (
                    <Chip key={i} label={topic} size="small" variant="outlined" />
                  ))}
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderCourseList = () => (
    <Box>
      {references.courses.map((course, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>
                <School />
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Link href={course.url} target="_blank" rel="noopener" underline="hover">
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {course.title}
                    <OpenInNew fontSize="small" />
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {course.platform}
                </Typography>
                <Typography variant="body2" paragraph>
                  {course.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                  <Chip label={course.duration} size="small" icon={<Schedule />} />
                  <Chip label={course.cost} size="small" color={course.cost === 'Free' ? 'success' : 'warning'} />
                  <Chip label={course.difficulty} size="small" color="primary" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                  {course.topics.map((topic, i) => (
                    <Chip key={i} label={topic} size="small" variant="outlined" />
                  ))}
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderDocsList = () => (
    <Box>
      {references.documentation.map((doc, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'info.main' }}>
                <Description />
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Link href={doc.url} target="_blank" rel="noopener" underline="hover">
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {doc.title}
                    <OpenInNew fontSize="small" />
                  </Typography>
                </Link>
                <Typography variant="body2" paragraph>
                  {doc.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                  <Chip label={doc.type} size="small" color="info" />
                  {doc.topics.map((topic, i) => (
                    <Chip key={i} label={topic} size="small" variant="outlined" />
                  ))}
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderPapersList = () => (
    <Box>
      {references.papers.map((paper, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'warning.main' }}>
                <Article />
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Link href={paper.url} target="_blank" rel="noopener" underline="hover">
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {paper.title}
                    <OpenInNew fontSize="small" />
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {paper.authors} ({paper.year})
                </Typography>
                <Typography variant="body2" paragraph>
                  {paper.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                  <Chip label={`${paper.citations} citations`} size="small" color="warning" />
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                  {paper.topics.map((topic, i) => (
                    <Chip key={i} label={topic} size="small" variant="outlined" />
                  ))}
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderInteractiveList = () => (
    <Box>
      {references.interactive.map((item, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Link href={item.url} target="_blank" rel="noopener" underline="hover">
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {item.title}
                <OpenInNew fontSize="small" />
              </Typography>
            </Link>
            <Typography variant="body2" paragraph>
              {item.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
              <Chip label={item.type} size="small" color="success" />
              {item.topics.map((topic, i) => (
                <Chip key={i} label={topic} size="small" variant="outlined" />
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderCommunityList = () => (
    <Box>
      {references.community.map((item, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Link href={item.url} target="_blank" rel="noopener" underline="hover">
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {item.title}
                <OpenInNew fontSize="small" />
              </Typography>
            </Link>
            <Typography variant="body2" paragraph>
              {item.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
              <Chip label={item.type} size="small" color="secondary" />
              {item.topics.map((topic, i) => (
                <Chip key={i} label={topic} size="small" variant="outlined" />
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderToolsList = () => (
    <Box>
      {references.tools.map((tool, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Link href={tool.url} target="_blank" rel="noopener" underline="hover">
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {tool.title}
                <OpenInNew fontSize="small" />
              </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {tool.type}
            </Typography>
            <Typography variant="body2" paragraph>
              {tool.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
              {tool.features.map((feature, i) => (
                <Chip key={i} label={feature} size="small" variant="outlined" />
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderDatasetsList = () => (
    <Box>
      {references.datasets.map((dataset, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Link href={dataset.url} target="_blank" rel="noopener" underline="hover">
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {dataset.title}
                <OpenInNew fontSize="small" />
              </Typography>
            </Link>
            <Typography variant="body2" paragraph>
              {dataset.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
              <Chip label={dataset.size} size="small" color="info" />
            </Box>
            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
              {dataset.domains.map((domain, i) => (
                <Chip key={i} label={domain} size="small" variant="outlined" />
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
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
          <Tab icon={<VideoLibrary />} label="Videos" />
          <Tab icon={<MenuBook />} label="Books" />
          <Tab icon={<School />} label="Courses" />
          <Tab icon={<Description />} label="Docs" />
          <Tab icon={<Article />} label="Papers" />
          <Tab icon={<Code />} label="Interactive" />
          <Tab icon={<Language />} label="Community" />
          <Tab icon={<GitHub />} label="Tools" />
          <Tab icon={<Book />} label="Datasets" />
        </Tabs>
      </Box>

      <Box sx={{ p: 3 }}>
        {tabValue === 0 && renderVideoList()}
        {tabValue === 1 && renderBookList()}
        {tabValue === 2 && renderCourseList()}
        {tabValue === 3 && renderDocsList()}
        {tabValue === 4 && renderPapersList()}
        {tabValue === 5 && renderInteractiveList()}
        {tabValue === 6 && renderCommunityList()}
        {tabValue === 7 && renderToolsList()}
        {tabValue === 8 && renderDatasetsList()}
      </Box>
    </Paper>
  );
};

export default References;
