export const aiQuizBankExpansion8 = [
  // --- Natural Language Understanding (NLU) Specifics ---
  {
    id: 'nlu-cv-logic-001',
    question: 'In Named Entity Recognition (NER), what does the "BIO" tagging scheme stand for?',
    options: [
      'Binary, Input, Output',
      'Beginning, Inside, Outside',
      'Base, Internal, Outer',
      'Basic, Intermediate, Other'
    ],
    correctAnswer: 1,
    explanation: 'BIO stands for Beginning (first token of an entity), Inside (subsequent tokens of an entity), and Outside (not part of an entity).',
    difficulty: 'medium',
    tags: ['NLU', 'NER']
  },
  {
    id: 'nlu-cv-logic-002',
    question: 'Which of the following is a "closed class" in Part-of-Speech (POS) tagging?',
    options: [
      'Nouns',
      'Verbs',
      'Adjectives',
      'Prepositions'
    ],
    correctAnswer: 3,
    explanation: 'Prepositions (and determiners, pronouns) are closed classes because languages rarely add new words to these categories, unlike open classes like nouns and verbs.',
    difficulty: 'medium',
    tags: ['NLU', 'POS Tagging']
  },
  {
    id: 'nlu-cv-logic-003',
    question: 'What is the primary goal of Dependency Parsing?',
    options: [
      'To group words into phrases (NP, VP)',
      'To identify the grammatical structure and relationships between "head" words and "dependents"',
      'To tag every word with its part of speech',
      'To translate the sentence into another language'
    ],
    correctAnswer: 1,
    explanation: 'Dependency parsing focuses on the relationships between words (who did what to whom), connecting heads to dependents, rather than grouping them into constituents.',
    difficulty: 'medium',
    tags: ['NLU', 'Dependency Parsing']
  },
  {
    id: 'nlu-cv-logic-004',
    question: 'In Sentiment Analysis, what does "Aspect-Based Sentiment Analysis" (ABSA) entail?',
    options: [
      'Determining the overall sentiment of a document',
      'Identifying sentiment towards specific features or aspects of an entity (e.g., "battery life" of a phone)',
      'Detecting sarcasm in text',
      'Translating sentiment into a numerical score only'
    ],
    correctAnswer: 1,
    explanation: 'ABSA goes beyond global sentiment to identify polarity regarding specific aspects, such as liking the "screen" but hating the "battery" of a device.',
    difficulty: 'medium',
    tags: ['NLU', 'Sentiment Analysis']
  },
  {
    id: 'nlu-cv-logic-005',
    question: 'Which challenge in NER refers to the fact that "Washington" could be a person, a state, or the federal government?',
    options: [
      'Segmentation fault',
      'Ambiguity',
      'Sparsity',
      'Overfitting'
    ],
    correctAnswer: 1,
    explanation: 'Ambiguity is a major challenge where the same string can refer to different entity types depending on context.',
    difficulty: 'easy',
    tags: ['NLU', 'NER']
  },
  {
    id: 'nlu-cv-logic-006',
    question: 'In a dependency tree, what is the unique property of the "Root" node?',
    options: [
      'It has no children',
      'It has no head (parent)',
      'It is always a noun',
      'It is always the first word of the sentence'
    ],
    correctAnswer: 1,
    explanation: 'The Root node is the top of the dependency tree and is the only node that does not depend on any other word.',
    difficulty: 'medium',
    tags: ['NLU', 'Dependency Parsing']
  },
  {
    id: 'nlu-cv-logic-007',
    question: 'What makes "sarcasm detection" particularly difficult in Sentiment Analysis?',
    options: [
      'Sarcasm uses very rare words',
      'Sarcasm often implies the opposite of the literal meaning of the words used',
      'Sarcasm is only present in spoken language',
      'Sarcasm requires image data to detect'
    ],
    correctAnswer: 1,
    explanation: 'Sarcasm relies on context, tone, and world knowledge, often stating positive words to mean something negative, which confuses simple lexical models.',
    difficulty: 'medium',
    tags: ['NLU', 'Sentiment Analysis']
  },
  {
    id: 'nlu-cv-logic-008',
    question: 'Which algorithm is commonly used for sequence labeling tasks like POS tagging and NER?',
    options: [
      'K-Means Clustering',
      'Conditional Random Fields (CRF)',
      'Linear Regression',
      'Principal Component Analysis'
    ],
    correctAnswer: 1,
    explanation: 'CRFs (and Bi-LSTMs/Transformers) are standard for sequence labeling because they consider the context of neighboring labels.',
    difficulty: 'hard',
    tags: ['NLU', 'Algorithms']
  },
  {
    id: 'nlu-cv-logic-009',
    question: 'What is "Coreference Resolution"?',
    options: [
      'Translating text between languages',
      'Determining which words refer to the same entity (e.g., "Steve" and "he")',
      'Parsing the grammatical structure',
      'Identifying the sentiment of a sentence'
    ],
    correctAnswer: 1,
    explanation: 'Coreference resolution is the task of finding all expressions that refer to the same entity in a text.',
    difficulty: 'medium',
    tags: ['NLU', 'Coreference']
  },
  {
    id: 'nlu-cv-logic-010',
    question: 'In the context of NLU, what is a "projective" dependency parse?',
    options: [
      'A parse where dependency arcs do not cross',
      'A parse that predicts future words',
      'A parse using 3D projection',
      'A parse that only uses nouns'
    ],
    correctAnswer: 0,
    explanation: 'A projective dependency tree can be drawn without any crossing edges when the words are written in linear order.',
    difficulty: 'hard',
    tags: ['NLU', 'Dependency Parsing']
  },
  {
    id: 'nlu-cv-logic-011',
    question: 'What is the difference between Stemming and Lemmatization?',
    options: [
      'Stemming chops off ends of words; Lemmatization uses a vocabulary and morphological analysis to return the base form',
      'Stemming is slower than Lemmatization',
      'Lemmatization chops off ends; Stemming uses a dictionary',
      'There is no difference'
    ],
    correctAnswer: 0,
    explanation: 'Stemming is a crude heuristic process (chopping), while Lemmatization properly reduces words to their lemma (dictionary form) considering context.',
    difficulty: 'medium',
    tags: ['NLU', 'Preprocessing']
  },
  {
    id: 'nlu-cv-logic-012',
    question: 'Which metric is often used to evaluate the quality of a language model?',
    options: [
      'Accuracy',
      'Perplexity',
      'Mean Squared Error',
      'IoU'
    ],
    correctAnswer: 1,
    explanation: 'Perplexity measures how well a probability model predicts a sample; lower perplexity indicates a better model.',
    difficulty: 'medium',
    tags: ['NLU', 'Metrics']
  },
  {
    id: 'nlu-cv-logic-013',
    question: 'In NER, what does the "O" tag represent in the BIO scheme?',
    options: [
      'Object',
      'Outside',
      'Other',
      'Organization'
    ],
    correctAnswer: 1,
    explanation: 'O stands for Outside, indicating the token is not part of any named entity.',
    difficulty: 'easy',
    tags: ['NLU', 'NER']
  },
  {
    id: 'nlu-cv-logic-014',
    question: 'What is "Named Entity Linking" (NEL)?',
    options: [
      'Finding names in text',
      'Connecting named entities in text to unique entries in a knowledge base (e.g., Wikipedia)',
      'Linking two names together in a sentence',
      'Creating new names for entities'
    ],
    correctAnswer: 1,
    explanation: 'NEL goes a step further than NER by disambiguating the entity and linking it to a specific ID in a knowledge base.',
    difficulty: 'medium',
    tags: ['NLU', 'NER']
  },
  {
    id: 'nlu-cv-logic-015',
    question: 'Which of these is a "stop word"?',
    options: [
      'Algorithm',
      'The',
      'Compute',
      'Neural'
    ],
    correctAnswer: 1,
    explanation: 'Stop words are common words (like "the", "is", "at") often filtered out in processing because they carry little unique semantic meaning.',
    difficulty: 'easy',
    tags: ['NLU', 'Preprocessing']
  },
  {
    id: 'nlu-cv-logic-016',
    question: 'What does TF-IDF stand for?',
    options: [
      'Term Frequency - Inverse Document Frequency',
      'Total Frequency - Inside Document Frequency',
      'Text Format - Image Data Format',
      'Token Frequency - Index Data Frequency'
    ],
    correctAnswer: 0,
    explanation: 'TF-IDF is a numerical statistic that reflects how important a word is to a document in a collection or corpus.',
    difficulty: 'medium',
    tags: ['NLU', 'Information Retrieval']
  },
  {
    id: 'nlu-cv-logic-017',
    question: 'What is an N-gram?',
    options: [
      'A weight of N grams',
      'A contiguous sequence of N items (words/characters) from a given sample of text',
      'A neural network with N layers',
      'A grammar rule with N conditions'
    ],
    correctAnswer: 1,
    explanation: 'An N-gram is a sequence of N items. A 2-gram is a bigram, a 3-gram is a trigram, etc.',
    difficulty: 'easy',
    tags: ['NLU', 'Language Modeling']
  },
  {
    id: 'nlu-cv-logic-018',
    question: 'Which POS tag would likely be assigned to the word "quickly"?',
    options: [
      'Noun (NN)',
      'Verb (VB)',
      'Adjective (JJ)',
      'Adverb (RB)'
    ],
    correctAnswer: 3,
    explanation: '"Quickly" modifies a verb, making it an adverb.',
    difficulty: 'easy',
    tags: ['NLU', 'POS Tagging']
  },
  {
    id: 'nlu-cv-logic-019',
    question: 'What is the "Bag of Words" (BoW) assumption?',
    options: [
      'Word order matters immensely',
      'Grammar is the most important feature',
      'The order of words is ignored, only their frequency counts',
      'Words must be kept in a bag'
    ],
    correctAnswer: 2,
    explanation: 'BoW simplifies text representation by disregarding grammar and word order but keeping multiplicity.',
    difficulty: 'medium',
    tags: ['NLU', 'Representation']
  },
  {
    id: 'nlu-cv-logic-020',
    question: 'In dependency parsing, what is the "Head"?',
    options: [
      'The first word of the sentence',
      'The word that determines the syntactic category of the phrase and governs the dependent',
      'The most important word in the document',
      'The subject of the sentence'
    ],
    correctAnswer: 1,
    explanation: 'The head is the central word that controls the dependent words (e.g., in "big dog", "dog" is the head).',
    difficulty: 'medium',
    tags: ['NLU', 'Dependency Parsing']
  },

  // --- Computer Vision Advanced Tasks ---
  {
    id: 'nlu-cv-logic-021',
    question: 'What is the main difference between Semantic Segmentation and Instance Segmentation?',
    options: [
      'Semantic segmentation treats all objects of the same class as one region; Instance segmentation distinguishes individual objects of the same class.',
      'Instance segmentation is faster.',
      'Semantic segmentation uses bounding boxes; Instance segmentation uses pixels.',
      'There is no difference.'
    ],
    correctAnswer: 0,
    explanation: 'Semantic segmentation labels every pixel with a class (e.g., all "car" pixels are blue). Instance segmentation distinguishes "car 1" from "car 2".',
    difficulty: 'medium',
    tags: ['Computer Vision', 'Segmentation']
  },
  {
    id: 'nlu-cv-logic-022',
    question: 'What does IoU stand for in Object Detection?',
    options: [
      'Input over Output',
      'Intersection over Union',
      'Image of Universe',
      'Index of Utility'
    ],
    correctAnswer: 1,
    explanation: 'Intersection over Union (IoU) measures the overlap between the predicted bounding box and the ground truth box.',
    difficulty: 'medium',
    tags: ['Computer Vision', 'Metrics']
  },
  {
    id: 'nlu-cv-logic-023',
    question: 'If a predicted bounding box perfectly matches the ground truth, what is the IoU?',
    options: [
      '0.0',
      '0.5',
      '1.0',
      '100.0'
    ],
    correctAnswer: 2,
    explanation: 'IoU is a ratio from 0 to 1. Perfect overlap means the intersection equals the union, resulting in 1.0.',
    difficulty: 'easy',
    tags: ['Computer Vision', 'Metrics']
  },
  {
    id: 'nlu-cv-logic-024',
    question: 'What is mAP in the context of Object Detection evaluation?',
    options: [
      'mean Average Precision',
      'maximum Area Pixel',
      'minimum Average Point',
      'mean Absolute Pixel'
    ],
    correctAnswer: 0,
    explanation: 'mAP (mean Average Precision) is the average of the Average Precision (AP) calculated for each class.',
    difficulty: 'medium',
    tags: ['Computer Vision', 'Metrics']
  },
  {
    id: 'nlu-cv-logic-025',
    question: 'What is the purpose of Non-Maximum Suppression (NMS) in Object Detection?',
    options: [
      'To increase the brightness of the image',
      'To eliminate redundant, overlapping bounding boxes for the same object, keeping only the best one',
      'To suppress the background noise',
      'To stop the training early'
    ],
    correctAnswer: 1,
    explanation: 'Object detectors often predict multiple boxes for one object. NMS removes the duplicates based on IoU and confidence scores.',
    difficulty: 'medium',
    tags: ['Computer Vision', 'Object Detection']
  },
  {
    id: 'nlu-cv-logic-026',
    question: 'What does Keypoint Detection typically identify?',
    options: [
      'The background of the image',
      'Specific points of interest like joints (elbows, knees) or facial landmarks',
      'The color histogram',
      'The file size'
    ],
    correctAnswer: 1,
    explanation: 'Keypoint detection locates specific semantic points, commonly used for pose estimation (skeleton tracking).',
    difficulty: 'easy',
    tags: ['Computer Vision', 'Keypoint Detection']
  },
  {
    id: 'nlu-cv-logic-027',
    question: 'What is Panoptic Segmentation?',
    options: [
      'Segmentation using panoramic images',
      'A combination of Semantic and Instance segmentation (classifying background stuff and detecting individual thing objects)',
      'Segmentation in black and white',
      '3D segmentation'
    ],
    correctAnswer: 1,
    explanation: 'Panoptic segmentation unifies semantic segmentation (for "stuff" like sky, road) and instance segmentation (for "things" like cars, people).',
    difficulty: 'hard',
    tags: ['Computer Vision', 'Segmentation']
  },
  {
    id: 'nlu-cv-logic-028',
    question: 'In a Convolutional Neural Network (CNN), what is the "Receptive Field"?',
    options: [
      'The size of the input image',
      'The region of the input image that a particular feature map neuron is looking at',
      'The memory capacity of the network',
      'The output layer size'
    ],
    correctAnswer: 1,
    explanation: 'The receptive field is the specific area of the input space that affects a particular unit in the network.',
    difficulty: 'medium',
    tags: ['Computer Vision', 'CNN']
  },
  {
    id: 'nlu-cv-logic-029',
    question: 'What is the primary function of a Pooling layer (e.g., Max Pooling)?',
    options: [
      'To increase the spatial dimensions',
      'To add more parameters',
      'To downsample the spatial dimensions and reduce computation',
      'To change the colors'
    ],
    correctAnswer: 2,
    explanation: 'Pooling reduces the height and width of the feature maps, reducing the number of parameters and computation.',
    difficulty: 'easy',
    tags: ['Computer Vision', 'CNN']
  },
  {
    id: 'nlu-cv-logic-030',
    question: 'Which technique involves rotating, flipping, or cropping training images to increase dataset diversity?',
    options: [
      'Data Compression',
      'Data Augmentation',
      'Data Cleaning',
      'Data Mining'
    ],
    correctAnswer: 1,
    explanation: 'Data Augmentation artificially expands the training set by applying transformations to existing images.',
    difficulty: 'easy',
    tags: ['Computer Vision', 'Data']
  },
  {
    id: 'nlu-cv-logic-031',
    question: 'What are "Anchor Boxes" in object detection models like Faster R-CNN or YOLO?',
    options: [
      'Boxes that hold the image in place',
      'Pre-defined bounding boxes of different aspect ratios and scales used as references for prediction',
      'The final output boxes',
      'Boxes drawn by the user'
    ],
    correctAnswer: 1,
    explanation: 'Anchor boxes serve as initial guesses or templates. The network predicts offsets from these anchors.',
    difficulty: 'hard',
    tags: ['Computer Vision', 'Object Detection']
  },
  {
    id: 'nlu-cv-logic-032',
    question: 'What is the "Vanishing Gradient" problem?',
    options: [
      'When the image fades away',
      'When gradients become too small during backpropagation, preventing weights from updating in deep layers',
      'When the learning rate is too high',
      'When the loss function disappears'
    ],
    correctAnswer: 1,
    explanation: 'In deep networks, gradients can diminish geometrically as they propagate back, stopping early layers from learning.',
    difficulty: 'medium',
    tags: ['Computer Vision', 'Deep Learning']
  },
  {
    id: 'nlu-cv-logic-033',
    question: 'How does ResNet (Residual Network) address the vanishing gradient problem?',
    options: [
      'By using smaller images',
      'By using skip connections (shortcut connections) that allow gradients to flow more easily',
      'By removing all activation functions',
      'By using only one layer'
    ],
    correctAnswer: 1,
    explanation: 'Skip connections allow the signal to bypass layers, mitigating the vanishing gradient problem and allowing very deep networks.',
    difficulty: 'medium',
    tags: ['Computer Vision', 'Architecture']
  },
  {
    id: 'nlu-cv-logic-034',
    question: 'What is Transfer Learning in Computer Vision?',
    options: [
      'Moving data from one computer to another',
      'Using a pre-trained model (e.g., on ImageNet) and fine-tuning it for a new, related task',
      'Learning to transfer styles',
      'Converting code from Python to C++'
    ],
    correctAnswer: 1,
    explanation: 'Transfer learning leverages features learned from a large dataset to improve performance on a smaller, specific dataset.',
    difficulty: 'easy',
    tags: ['Computer Vision', 'Training']
  },
  {
    id: 'nlu-cv-logic-035',
    question: 'In the context of YOLO (You Only Look Once), what is the main advantage over two-stage detectors like Faster R-CNN?',
    options: [
      'Higher accuracy on small objects',
      'Real-time inference speed',
      'Uses less memory',
      'Easier to install'
    ],
    correctAnswer: 1,
    explanation: 'YOLO is a single-stage detector designed for speed, making it suitable for real-time applications, though sometimes at a slight cost to accuracy.',
    difficulty: 'medium',
    tags: ['Computer Vision', 'Object Detection']
  },
  {
    id: 'nlu-cv-logic-036',
    question: 'What does a "Precision-Recall Curve" visualize?',
    options: [
      'The training time vs accuracy',
      'The trade-off between Precision and Recall for different threshold settings',
      'The loss over epochs',
      'The image resolution vs speed'
    ],
    correctAnswer: 1,
    explanation: 'It shows how precision decreases as you increase recall (by lowering the confidence threshold), helping to choose an operating point.',
    difficulty: 'medium',
    tags: ['Computer Vision', 'Metrics']
  },
  {
    id: 'nlu-cv-logic-037',
    question: 'What is a "Convolution" operation in image processing?',
    options: [
      'Twisting the image',
      'A mathematical operation where a kernel (filter) slides over the image to extract features',
      'Compressing the image',
      'Changing the file format'
    ],
    correctAnswer: 1,
    explanation: 'Convolution involves dot products between a filter and local regions of the input, fundamental to feature extraction in CNNs.',
    difficulty: 'easy',
    tags: ['Computer Vision', 'CNN']
  },
  {
    id: 'nlu-cv-logic-038',
    question: 'Which metric is better for evaluating segmentation on imbalanced classes: Accuracy or Dice Coefficient?',
    options: [
      'Accuracy',
      'Dice Coefficient',
      'Both are equal',
      'Neither'
    ],
    correctAnswer: 1,
    explanation: 'Accuracy can be misleading if the background dominates. The Dice Coefficient (similar to IoU) focuses on the overlap of the target class.',
    difficulty: 'hard',
    tags: ['Computer Vision', 'Metrics']
  },
  {
    id: 'nlu-cv-logic-039',
    question: 'What is "Pose Estimation"?',
    options: [
      'Estimating the cost of a photo',
      'Determining the position and orientation of an object or person (e.g., skeletal joints)',
      'Guessing the camera model',
      'Estimating the lighting'
    ],
    correctAnswer: 1,
    explanation: 'Pose estimation involves detecting keypoints to understand the configuration of a body or object in space.',
    difficulty: 'medium',
    tags: ['Computer Vision', 'Keypoint Detection']
  },
  {
    id: 'nlu-cv-logic-040',
    question: 'What is the "Stride" in a convolutional layer?',
    options: [
      'The size of the filter',
      'The number of filters',
      'The step size the filter moves across the input',
      'The amount of padding'
    ],
    correctAnswer: 2,
    explanation: 'Stride controls how much the filter shifts. A stride of 2 downsamples the output by a factor of 2.',
    difficulty: 'medium',
    tags: ['Computer Vision', 'CNN']
  },

  // --- General AI Logic & Reasoning Puzzles ---
  {
    id: 'nlu-cv-logic-041',
    question: 'Syllogism: All neural networks are algorithms. Some algorithms are heuristic. Therefore...',
    options: [
      'All neural networks are heuristic.',
      'Some neural networks are heuristic.',
      'Some heuristics are neural networks.',
      'None of the above follows necessarily.'
    ],
    correctAnswer: 3,
    explanation: 'Just because some algorithms are heuristic doesn\'t mean the set of neural networks overlaps with the set of heuristics. They could be disjoint subsets of algorithms.',
    difficulty: 'hard',
    tags: ['Logic', 'Reasoning']
  },
  {
    id: 'nlu-cv-logic-042',
    question: 'If a medical test for a disease is 99% accurate, and the disease affects 1 in 10,000 people, what is the probability you have the disease if you test positive? (Base Rate Fallacy)',
    options: [
      '99%',
      '~50%',
      '~1%',
      '0.01%'
    ],
    correctAnswer: 2,
    explanation: 'Due to the low base rate (prevalence), the number of false positives vastly outnumbers true positives. The probability is surprisingly low (approx < 1%).',
    difficulty: 'hard',
    tags: ['Logic', 'Probability']
  },
  {
    id: 'nlu-cv-logic-043',
    question: 'What is "Overfitting" analogous to in human learning?',
    options: [
      'Understanding the core concepts perfectly',
      'Memorizing the practice test answers but failing the real exam',
      'Not studying enough',
      'Daydreaming'
    ],
    correctAnswer: 1,
    explanation: 'Overfitting is like rote memorization of noise or specific examples without learning the underlying generalizable patterns.',
    difficulty: 'easy',
    tags: ['Logic', 'ML Concepts']
  },
  {
    id: 'nlu-cv-logic-044',
    question: 'Correlation does not imply...',
    options: [
      'Relation',
      'Association',
      'Causation',
      'Prediction'
    ],
    correctAnswer: 2,
    explanation: 'Just because two variables move together (ice cream sales and shark attacks) does not mean one causes the other (both are caused by summer heat).',
    difficulty: 'easy',
    tags: ['Logic', 'Statistics']
  },
  {
    id: 'nlu-cv-logic-045',
    question: 'In the "Prisoner\'s Dilemma", what is the dominant strategy for a single round?',
    options: [
      'Cooperate (stay silent)',
      'Defect (betray)',
      'Flip a coin',
      'Wait'
    ],
    correctAnswer: 1,
    explanation: 'Defecting yields a better payoff regardless of what the opponent does, even though mutual cooperation would be globally better.',
    difficulty: 'medium',
    tags: ['Logic', 'Game Theory']
  },
  {
    id: 'nlu-cv-logic-046',
    question: 'What is "Occam\'s Razor" in the context of model selection?',
    options: [
      'The sharpest model is best',
      'Among competing hypotheses, the one with the fewest assumptions (simplest) should be selected',
      'Always choose the most complex model',
      'Cut the data in half'
    ],
    correctAnswer: 1,
    explanation: 'Simpler models are preferred to avoid overfitting and improve interpretability, assuming they perform similarly.',
    difficulty: 'medium',
    tags: ['Logic', 'Philosophy']
  },
  {
    id: 'nlu-cv-logic-047',
    question: 'What is the "Chinese Room Argument" intended to demonstrate?',
    options: [
      'That computers can translate Chinese perfectly',
      'That syntax (manipulating symbols) is not the same as semantics (understanding meaning)',
      'That AI will take over the world',
      'That rooms can be intelligent'
    ],
    correctAnswer: 1,
    explanation: 'Searle argued that a program could simulate understanding (passing the Turing Test) without actually understanding, just by following rules.',
    difficulty: 'medium',
    tags: ['Logic', 'Philosophy of AI']
  },
  {
    id: 'nlu-cv-logic-048',
    question: 'If Model A has high bias and low variance, it is likely...',
    options: [
      'Overfitting',
      'Underfitting',
      'Perfect',
      'Broken'
    ],
    correctAnswer: 1,
    explanation: 'High bias means the model is too simple to capture the underlying pattern (underfitting).',
    difficulty: 'medium',
    tags: ['Logic', 'Bias-Variance']
  },
  {
    id: 'nlu-cv-logic-049',
    question: 'What is the "Curse of Dimensionality"?',
    options: [
      '3D movies are expensive',
      'As the number of features (dimensions) increases, the amount of data needed to generalize grows exponentially',
      'Dimensions are cursed',
      'AI cannot handle more than 2 dimensions'
    ],
    correctAnswer: 1,
    explanation: 'In high-dimensional space, data becomes sparse, making distance metrics less meaningful and learning difficult.',
    difficulty: 'medium',
    tags: ['Logic', 'ML Theory']
  },
  {
    id: 'nlu-cv-logic-050',
    question: 'In the A* search algorithm, what does the heuristic function h(n) estimate?',
    options: [
      'The cost from the start node to n',
      'The estimated cost from node n to the goal',
      'The total path cost',
      'The time taken'
    ],
    correctAnswer: 1,
    explanation: 'h(n) estimates the remaining cost to reach the goal. A* uses f(n) = g(n) + h(n).',
    difficulty: 'medium',
    tags: ['Logic', 'Search Algorithms']
  },
  {
    id: 'nlu-cv-logic-051',
    question: 'What is "Zero-Shot Learning"?',
    options: [
      'Learning with zero data',
      'The ability of a model to recognize classes it has never seen during training',
      'Learning instantly',
      'Learning without a computer'
    ],
    correctAnswer: 1,
    explanation: 'It relies on semantic attributes or descriptions to classify unseen categories without specific training examples.',
    difficulty: 'medium',
    tags: ['Logic', 'Learning Paradigms']
  },
  {
    id: 'nlu-cv-logic-052',
    question: 'Analogy: Gradient Descent is to a Neural Network as ______ is to a Human.',
    options: [
      'Walking down a hill blindfolded to find the bottom',
      'Climbing a ladder',
      'Sleeping',
      'Eating'
    ],
    correctAnswer: 0,
    explanation: 'Gradient descent iteratively moves towards the minimum loss, similar to feeling the slope and stepping downwards.',
    difficulty: 'easy',
    tags: ['Logic', 'Analogy']
  },
  {
    id: 'nlu-cv-logic-053',
    question: 'If P(A) = 0.5 and P(B) = 0.5, and A and B are independent, what is P(A and B)?',
    options: [
      '0.5',
      '1.0',
      '0.25',
      '0.0'
    ],
    correctAnswer: 2,
    explanation: 'For independent events, P(A and B) = P(A) * P(B) = 0.5 * 0.5 = 0.25.',
    difficulty: 'easy',
    tags: ['Logic', 'Probability']
  },
  {
    id: 'nlu-cv-logic-054',
    question: 'What is the "Exploration vs. Exploitation" trade-off in Reinforcement Learning?',
    options: [
      'Choosing between using known information to get rewards (exploit) vs trying new actions to find better rewards (explore)',
      'Mining data vs selling data',
      'Exploring the internet vs exploiting bugs',
      'None of the above'
    ],
    correctAnswer: 0,
    explanation: 'An agent must balance using its current knowledge to maximize reward vs exploring to potentially find even higher rewards.',
    difficulty: 'medium',
    tags: ['Logic', 'Reinforcement Learning']
  },
  {
    id: 'nlu-cv-logic-055',
    question: 'Which logical fallacy assumes that because Event B followed Event A, Event A caused Event B?',
    options: [
      'Ad Hominem',
      'Post Hoc Ergo Propter Hoc',
      'Straw Man',
      'Slippery Slope'
    ],
    correctAnswer: 1,
    explanation: 'This is the "after this, therefore because of this" fallacy, confusing temporal sequence with causality.',
    difficulty: 'hard',
    tags: ['Logic', 'Fallacies']
  },
  {
    id: 'nlu-cv-logic-056',
    question: 'In Minimax algorithm (Game Theory), what does the "Min" player try to do?',
    options: [
      'Maximize their own score',
      'Minimize the possible loss for a worst case (maximize the minimum gain)',
      'Minimize the "Max" player\'s score',
      'Play randomly'
    ],
    correctAnswer: 2,
    explanation: 'The Min player tries to minimize the score (which the Max player is trying to maximize), effectively assuming the opponent plays optimally.',
    difficulty: 'medium',
    tags: ['Logic', 'Algorithms']
  },
  {
    id: 'nlu-cv-logic-057',
    question: 'What is a "False Negative"?',
    options: [
      'The model predicts Positive, but it is Negative',
      'The model predicts Negative, but it is actually Positive',
      'The model predicts Negative, and it is Negative',
      'The model predicts Positive, and it is Positive'
    ],
    correctAnswer: 1,
    explanation: 'A Type II error: failing to detect an effect or condition that is present.',
    difficulty: 'easy',
    tags: ['Logic', 'Metrics']
  },
  {
    id: 'nlu-cv-logic-058',
    question: 'If you have a dataset of 1000 images, 990 are cats and 10 are dogs. A model predicts "Cat" for every image. What is its accuracy?',
    options: [
      '10%',
      '50%',
      '99%',
      '100%'
    ],
    correctAnswer: 2,
    explanation: 'It gets 990/1000 correct. This illustrates why accuracy is a bad metric for imbalanced datasets.',
    difficulty: 'easy',
    tags: ['Logic', 'Metrics']
  },
  {
    id: 'nlu-cv-logic-059',
    question: 'What is "Unsupervised Learning" analogous to?',
    options: [
      'Learning with a teacher correcting you',
      'Learning by finding patterns on your own without labels',
      'Learning from rewards and punishments',
      'Not learning at all'
    ],
    correctAnswer: 1,
    explanation: 'Unsupervised learning finds hidden structures (clusters, associations) in unlabeled data.',
    difficulty: 'easy',
    tags: ['Logic', 'Learning Paradigms']
  },
  {
    id: 'nlu-cv-logic-060',
    question: 'Syllogism: No robots have feelings. HAL is a robot. Therefore...',
    options: [
      'HAL has feelings.',
      'HAL does not have feelings.',
      'HAL might have feelings.',
      'Robots are HAL.'
    ],
    correctAnswer: 1,
    explanation: 'A standard valid deduction. If the set of robots and set of feeling-things are disjoint, and HAL is in the robot set, HAL is not in the feeling-things set.',
    difficulty: 'easy',
    tags: ['Logic', 'Reasoning']
  }
];
