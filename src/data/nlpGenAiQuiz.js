const nlpGenAiQuiz = [
  // --- Tokenization & Embeddings (15 Questions) ---
  {
    id: 'nlp-tok-001',
    question: 'What is the primary purpose of tokenization in NLP?',
    options: [
      'To convert text into numerical vectors directly',
      'To break text into smaller units like words or subwords',
      'To remove stop words from the text',
      'To translate text into another language'
    ],
    correctAnswer: 1,
    explanation: 'Tokenization is the process of breaking down text into smaller units called tokens (words, subwords, or characters) for processing.',
    difficulty: 'easy',
    tags: ['nlp', 'tokenization']
  },
  {
    id: 'nlp-tok-002',
    question: 'Which tokenization method is commonly used in models like BERT and GPT to handle out-of-vocabulary words?',
    options: [
      'Word-level tokenization',
      'Character-level tokenization',
      'Subword tokenization (e.g., BPE, WordPiece)',
      'Sentence-level tokenization'
    ],
    correctAnswer: 2,
    explanation: 'Subword tokenization algorithms like Byte-Pair Encoding (BPE) and WordPiece allow models to represent rare words as sequences of common subwords, solving the OOV problem.',
    difficulty: 'medium',
    tags: ['nlp', 'tokenization', 'bert', 'gpt']
  },
  {
    id: 'nlp-emb-003',
    question: 'What is the key property of Word2Vec embeddings?',
    options: [
      'They are sparse vectors',
      'They capture semantic relationships where similar words have similar vectors',
      'They are manually crafted features',
      'They depend on the position of the word in the sentence'
    ],
    correctAnswer: 1,
    explanation: 'Word2Vec produces dense vector representations where words with similar meanings are located close to each other in the vector space.',
    difficulty: 'medium',
    tags: ['nlp', 'embeddings', 'word2vec']
  },
  {
    id: 'nlp-emb-004',
    question: 'How does GloVe (Global Vectors) differ from Word2Vec?',
    options: [
      'GloVe uses a neural network, Word2Vec uses count matrices',
      'GloVe is based on matrix factorization of global word-word co-occurrence counts',
      'GloVe only works for character embeddings',
      'GloVe requires labeled data'
    ],
    correctAnswer: 1,
    explanation: 'GloVe learns vectors by factorizing the logarithm of the global word co-occurrence matrix, whereas Word2Vec uses a local context window prediction approach.',
    difficulty: 'hard',
    tags: ['nlp', 'embeddings', 'glove']
  },
  {
    id: 'nlp-emb-005',
    question: 'What is a limitation of static embeddings like Word2Vec and GloVe?',
    options: [
      'They cannot handle large vocabularies',
      'They generate the same vector for a word regardless of its context (polysemy)',
      'They are too computationally expensive to train',
      'They only support English'
    ],
    correctAnswer: 1,
    explanation: 'Static embeddings assign a fixed vector to each word, so they cannot distinguish between different meanings of the same word (e.g., "bank" of a river vs. "bank" for money).',
    difficulty: 'medium',
    tags: ['nlp', 'embeddings', 'limitations']
  },
  {
    id: 'nlp-emb-006',
    question: 'Which algorithm iteratively merges the most frequent pair of characters or character sequences?',
    options: [
      'WordPiece',
      'Byte-Pair Encoding (BPE)',
      'Unigram Language Model',
      'SentencePiece'
    ],
    correctAnswer: 1,
    explanation: 'Byte-Pair Encoding (BPE) starts with characters and iteratively merges the most frequent adjacent pair of symbols to form new subwords.',
    difficulty: 'medium',
    tags: ['nlp', 'tokenization', 'bpe']
  },
  {
    id: 'nlp-emb-007',
    question: 'In the context of embeddings, what does "dimensionality" refer to?',
    options: [
      'The number of words in the vocabulary',
      'The length of the vector representing each token',
      'The number of layers in the model',
      'The size of the training dataset'
    ],
    correctAnswer: 1,
    explanation: 'Dimensionality is the size of the vector (e.g., 512, 768) used to represent a single token in the embedding space.',
    difficulty: 'easy',
    tags: ['nlp', 'embeddings']
  },
  {
    id: 'nlp-emb-008',
    question: 'What is the "Bag of Words" (BoW) model?',
    options: [
      'A deep learning model for translation',
      'A representation that counts word frequencies, ignoring order',
      'A method to store embeddings in a database',
      'A type of recurrent neural network'
    ],
    correctAnswer: 1,
    explanation: 'Bag of Words represents text as a collection of its words and their counts, disregarding grammar and word order.',
    difficulty: 'easy',
    tags: ['nlp', 'basics']
  },
  {
    id: 'nlp-emb-009',
    question: 'What is TF-IDF used for?',
    options: [
      'To generate text',
      'To evaluate the importance of a word in a document relative to a corpus',
      'To translate words',
      'To compress text data'
    ],
    correctAnswer: 1,
    explanation: 'TF-IDF (Term Frequency-Inverse Document Frequency) weighs words to highlight those that are frequent in a document but rare across the corpus.',
    difficulty: 'medium',
    tags: ['nlp', 'basics', 'tf-idf']
  },
  {
    id: 'nlp-emb-010',
    question: 'Which embedding technique is context-dependent?',
    options: [
      'Word2Vec',
      'GloVe',
      'FastText',
      'BERT Embeddings'
    ],
    correctAnswer: 3,
    explanation: 'BERT generates contextualized embeddings, meaning the representation of a word changes based on the surrounding words.',
    difficulty: 'medium',
    tags: ['nlp', 'embeddings', 'bert']
  },
  {
    id: 'nlp-emb-011',
    question: 'What advantage does FastText have over Word2Vec?',
    options: [
      'It uses transformers',
      'It represents words as bags of character n-grams',
      'It is faster to train',
      'It requires less memory'
    ],
    correctAnswer: 1,
    explanation: 'FastText represents words as n-grams of characters, allowing it to generate embeddings for out-of-vocabulary words by combining their subword vectors.',
    difficulty: 'medium',
    tags: ['nlp', 'embeddings', 'fasttext']
  },
  {
    id: 'nlp-emb-012',
    question: 'What is "Cosine Similarity" used for in NLP?',
    options: [
      'Calculating the loss function',
      'Measuring the semantic similarity between two embedding vectors',
      'Normalizing the input data',
      'Tokenizing the text'
    ],
    correctAnswer: 1,
    explanation: 'Cosine similarity measures the cosine of the angle between two vectors, often used to determine how similar two words or documents are.',
    difficulty: 'easy',
    tags: ['nlp', 'math', 'similarity']
  },
  {
    id: 'nlp-emb-013',
    question: 'What is a "stop word"?',
    options: [
      'The last word in a sentence',
      'A common word (like "the", "is") often removed during preprocessing',
      'A token that stops generation',
      'An error in the text'
    ],
    correctAnswer: 1,
    explanation: 'Stop words are high-frequency words that often carry little unique semantic meaning and are sometimes removed to reduce noise.',
    difficulty: 'easy',
    tags: ['nlp', 'preprocessing']
  },
  {
    id: 'nlp-emb-014',
    question: 'What is "lemmatization"?',
    options: [
      'Cutting off the ends of words',
      'Reducing words to their base or dictionary form (lemma)',
      'Converting text to lowercase',
      'Removing punctuation'
    ],
    correctAnswer: 1,
    explanation: 'Lemmatization reduces words to their base form (e.g., "running" -> "run", "better" -> "good") using vocabulary and morphological analysis.',
    difficulty: 'medium',
    tags: ['nlp', 'preprocessing']
  },
  {
    id: 'nlp-emb-015',
    question: 'How does "stemming" differ from "lemmatization"?',
    options: [
      'Stemming is slower',
      'Stemming uses a dictionary, Lemmatization uses heuristics',
      'Stemming crudely chops off affixes, Lemmatization considers the context and part of speech',
      'They are identical'
    ],
    correctAnswer: 2,
    explanation: 'Stemming is a heuristic process that chops off ends of words (often resulting in non-words), while lemmatization returns the actual dictionary root.',
    difficulty: 'medium',
    tags: ['nlp', 'preprocessing']
  },

  // --- Transformers (20 Questions) ---
  {
    id: 'nlp-trans-016',
    question: 'What is the core mechanism of the Transformer architecture?',
    options: [
      'Recurrent Neural Networks (RNNs)',
      'Convolutional Neural Networks (CNNs)',
      'Self-Attention Mechanism',
      'Long Short-Term Memory (LSTM)'
    ],
    correctAnswer: 2,
    explanation: 'The Transformer architecture relies entirely on the self-attention mechanism to draw global dependencies between input and output.',
    difficulty: 'easy',
    tags: ['nlp', 'transformers', 'attention']
  },
  {
    id: 'nlp-trans-017',
    question: 'What problem does the "Attention" mechanism solve in Seq2Seq models?',
    options: [
      'Vanishing gradient in deep networks',
      'The bottleneck of compressing the entire source sentence into a fixed-size vector',
      'Overfitting on small datasets',
      'Slow training speed'
    ],
    correctAnswer: 1,
    explanation: 'Attention allows the decoder to focus on different parts of the source sentence at each step, avoiding the bottleneck of a single fixed context vector.',
    difficulty: 'medium',
    tags: ['nlp', 'attention', 'seq2seq']
  },
  {
    id: 'nlp-trans-018',
    question: 'What are the three vectors created for each token in Self-Attention?',
    options: [
      'Input, Output, Hidden',
      'Query, Key, Value',
      'Alpha, Beta, Gamma',
      'Positive, Negative, Neutral'
    ],
    correctAnswer: 1,
    explanation: 'In self-attention, each token is projected into three vectors: Query (Q), Key (K), and Value (V).',
    difficulty: 'medium',
    tags: ['nlp', 'transformers', 'attention']
  },
  {
    id: 'nlp-trans-019',
    question: 'What is "Multi-Head Attention"?',
    options: [
      'Running attention multiple times sequentially',
      'Running multiple self-attention mechanisms in parallel to capture different relationships',
      'Using multiple models to vote on the output',
      'Attending to multiple sentences at once'
    ],
    correctAnswer: 1,
    explanation: 'Multi-Head Attention runs several attention layers in parallel ("heads"), allowing the model to attend to information from different representation subspaces.',
    difficulty: 'medium',
    tags: ['nlp', 'transformers', 'attention']
  },
  {
    id: 'nlp-trans-020',
    question: 'Why are "Positional Encodings" added in Transformers?',
    options: [
      'To increase the vocabulary size',
      'Because the self-attention mechanism is permutation invariant and has no inherent sense of order',
      'To encrypt the data',
      'To normalize the input vectors'
    ],
    correctAnswer: 1,
    explanation: 'Since Transformers process tokens in parallel without recurrence, they need positional encodings to inject information about the relative or absolute position of tokens.',
    difficulty: 'medium',
    tags: ['nlp', 'transformers', 'positional-encoding']
  },
  {
    id: 'nlp-trans-021',
    question: 'What is the architecture of the original BERT model?',
    options: [
      'Encoder-Decoder',
      'Decoder-only',
      'Encoder-only',
      'RNN-based'
    ],
    correctAnswer: 2,
    explanation: 'BERT (Bidirectional Encoder Representations from Transformers) uses a stack of Transformer Encoders.',
    difficulty: 'medium',
    tags: ['nlp', 'bert', 'architecture']
  },
  {
    id: 'nlp-trans-022',
    question: 'What is the architecture of the GPT family of models?',
    options: [
      'Encoder-Decoder',
      'Decoder-only',
      'Encoder-only',
      'Bi-directional LSTM'
    ],
    correctAnswer: 1,
    explanation: 'GPT (Generative Pre-trained Transformer) uses a stack of Transformer Decoders (masked self-attention).',
    difficulty: 'medium',
    tags: ['nlp', 'gpt', 'architecture']
  },
  {
    id: 'nlp-trans-023',
    question: 'What is "Masked Language Modeling" (MLM)?',
    options: [
      'Predicting the next word in a sequence',
      'Predicting random words that have been hidden (masked) in the input',
      'Translating text with a mask',
      'Generating text from scratch'
    ],
    correctAnswer: 1,
    explanation: 'MLM is a pre-training objective where random tokens in the input are masked, and the model learns to predict them based on the context.',
    difficulty: 'medium',
    tags: ['nlp', 'bert', 'training']
  },
  {
    id: 'nlp-trans-024',
    question: 'What is "Causal Language Modeling" (CLM)?',
    options: [
      'Predicting the next token based only on previous tokens',
      'Predicting the middle word of a sentence',
      'Classifying the sentiment of a sentence',
      'Finding the cause of an event in text'
    ],
    correctAnswer: 0,
    explanation: 'CLM is the standard objective for autoregressive models like GPT, where the model predicts the next token using only the past context.',
    difficulty: 'medium',
    tags: ['nlp', 'gpt', 'training']
  },
  {
    id: 'nlp-trans-025',
    question: 'What is the "Feed-Forward Network" component in a Transformer block applied to?',
    options: [
      'The entire sequence at once',
      'Each position separately and identically',
      'Only the first token',
      'The attention matrix'
    ],
    correctAnswer: 1,
    explanation: 'The Feed-Forward Network in a Transformer is applied position-wise, meaning the same dense layers are applied to each token independently.',
    difficulty: 'hard',
    tags: ['nlp', 'transformers', 'architecture']
  },
  {
    id: 'nlp-trans-026',
    question: 'What is "Layer Normalization" used for in Transformers?',
    options: [
      'To normalize the input images',
      'To stabilize the learning process and reduce training time',
      'To convert text to lowercase',
      'To reduce the model size'
    ],
    correctAnswer: 1,
    explanation: 'Layer Normalization is applied after each sub-layer (attention and feed-forward) to stabilize dynamics and enable faster training.',
    difficulty: 'medium',
    tags: ['nlp', 'transformers', 'normalization']
  },
  {
    id: 'nlp-trans-027',
    question: 'Which model introduced the "Encoder-Decoder" Transformer architecture?',
    options: [
      'BERT',
      'GPT-1',
      'The original "Attention Is All You Need" paper',
      'Word2Vec'
    ],
    correctAnswer: 2,
    explanation: 'The original Transformer paper ("Attention Is All You Need" by Vaswani et al.) proposed the Encoder-Decoder architecture for machine translation.',
    difficulty: 'medium',
    tags: ['nlp', 'transformers', 'history']
  },
  {
    id: 'nlp-trans-028',
    question: 'What is the complexity of Self-Attention with respect to sequence length N?',
    options: [
      'O(N)',
      'O(N log N)',
      'O(N^2)',
      'O(1)'
    ],
    correctAnswer: 2,
    explanation: 'Standard self-attention computes a matrix of size N x N (attention scores between all pairs), resulting in quadratic O(N^2) complexity.',
    difficulty: 'hard',
    tags: ['nlp', 'transformers', 'complexity']
  },
  {
    id: 'nlp-trans-029',
    question: 'What is T5 (Text-to-Text Transfer Transformer)?',
    options: [
      'A model that only handles translation',
      'A model that frames all NLP tasks as text-to-text generation problems',
      'A vision transformer',
      'A specialized tokenizer'
    ],
    correctAnswer: 1,
    explanation: 'T5 treats every NLP problem (translation, classification, summarization) as taking text as input and generating text as output.',
    difficulty: 'medium',
    tags: ['nlp', 't5', 'models']
  },
  {
    id: 'nlp-trans-030',
    question: 'What is the role of the "Softmax" function in the Attention mechanism?',
    options: [
      'To convert raw scores into probabilities that sum to 1',
      'To remove negative values',
      'To increase the dimension of vectors',
      'To tokenize the input'
    ],
    correctAnswer: 0,
    explanation: 'Softmax is applied to the scaled dot-product of Query and Key to obtain attention weights (probabilities) that sum to 1.',
    difficulty: 'medium',
    tags: ['nlp', 'math', 'attention']
  },
  {
    id: 'nlp-trans-031',
    question: 'What is "Distillation" in the context of Transformers (e.g., DistilBERT)?',
    options: [
      'Training a smaller "student" model to mimic a larger "teacher" model',
      'Cleaning the dataset',
      'Increasing the model size',
      'Removing stop words'
    ],
    correctAnswer: 0,
    explanation: 'Knowledge Distillation involves training a smaller, faster model (student) to reproduce the behavior/outputs of a larger, pre-trained model (teacher).',
    difficulty: 'medium',
    tags: ['nlp', 'optimization', 'distillation']
  },
  {
    id: 'nlp-trans-032',
    question: 'What is the "CLS" token in BERT?',
    options: [
      'The token used for classification tasks',
      'The token that clears the memory',
      'The token for separation',
      'The last token of the sentence'
    ],
    correctAnswer: 0,
    explanation: 'The [CLS] token is a special token added to the start of every input. Its final hidden state is used as the aggregate sequence representation for classification tasks.',
    difficulty: 'medium',
    tags: ['nlp', 'bert', 'tokens']
  },
  {
    id: 'nlp-trans-033',
    question: 'What is "RoBERTa"?',
    options: [
      'A robot that speaks',
      'A robustly optimized version of BERT trained with more data and longer time',
      'A smaller version of BERT',
      'A French version of BERT'
    ],
    correctAnswer: 1,
    explanation: 'RoBERTa (Robustly optimized BERT approach) modifies BERT\'s pre-training (e.g., removing Next Sentence Prediction, larger batches) to improve performance.',
    difficulty: 'medium',
    tags: ['nlp', 'models', 'roberta']
  },
  {
    id: 'nlp-trans-034',
    question: 'What is "Cross-Attention"?',
    options: [
      'Attention within the same sequence',
      'Attention where Queries come from the decoder and Keys/Values come from the encoder',
      'Attention between two different models',
      'Attention across different languages'
    ],
    correctAnswer: 1,
    explanation: 'Cross-Attention (or Encoder-Decoder Attention) allows the decoder to attend to the encoder\'s output (the source sequence).',
    difficulty: 'hard',
    tags: ['nlp', 'transformers', 'attention']
  },
  {
    id: 'nlp-trans-035',
    question: 'Which Transformer variant is designed to handle long sequences efficiently?',
    options: [
      'BERT',
      'Longformer / BigBird',
      'GPT-2',
      'RoBERTa'
    ],
    correctAnswer: 1,
    explanation: 'Models like Longformer and BigBird use sparse attention mechanisms to reduce the O(N^2) complexity, allowing them to process much longer sequences.',
    difficulty: 'hard',
    tags: ['nlp', 'transformers', 'efficiency']
  },

  // --- LLMs (30 Questions) ---
  {
    id: 'nlp-llm-036',
    question: 'What does "LLM" stand for?',
    options: [
      'Large Learning Machine',
      'Large Language Model',
      'Long Language Method',
      'Linear Logic Model'
    ],
    correctAnswer: 1,
    explanation: 'LLM stands for Large Language Model, referring to models with billions of parameters trained on vast amounts of text.',
    difficulty: 'easy',
    tags: ['nlp', 'llm', 'basics']
  },
  {
    id: 'nlp-llm-037',
    question: 'What is "Zero-shot Learning" in the context of LLMs?',
    options: [
      'The model fails to learn',
      'The model performs a task without seeing any specific examples of that task',
      'The model requires zero training data',
      'The model uses zero parameters'
    ],
    correctAnswer: 1,
    explanation: 'Zero-shot learning is the ability of a model to perform a task given only a natural language description/instruction, without any examples.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'prompting']
  },
  {
    id: 'nlp-llm-038',
    question: 'What is "Few-shot Learning" or "In-context Learning"?',
    options: [
      'Training the model on a few images',
      'Providing a few examples of the task in the prompt to guide the model',
      'Fine-tuning the model for a few epochs',
      'Using a small model'
    ],
    correctAnswer: 1,
    explanation: 'Few-shot learning involves providing a few input-output examples in the prompt context to help the model understand and perform the task.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'prompting']
  },
  {
    id: 'nlp-llm-039',
    question: 'What is "Chain-of-Thought" (CoT) prompting?',
    options: [
      'Linking multiple models together',
      'Prompting the model to generate intermediate reasoning steps before the final answer',
      'A chain of random words',
      'Repeating the question multiple times'
    ],
    correctAnswer: 1,
    explanation: 'Chain-of-Thought prompting encourages the model to "think aloud" or break down the problem into steps, which improves performance on complex reasoning tasks.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'prompting']
  },
  {
    id: 'nlp-llm-040',
    question: 'What is "RLHF"?',
    options: [
      'Reinforcement Learning from Human Feedback',
      'Real Language Human Format',
      'Random Learning Heuristic Function',
      'Recursive Linear Hidden Field'
    ],
    correctAnswer: 0,
    explanation: 'RLHF (Reinforcement Learning from Human Feedback) is a technique used to align LLMs with human values and instructions by training a reward model on human preferences.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'alignment']
  },
  {
    id: 'nlp-llm-041',
    question: 'What is "Hallucination" in LLMs?',
    options: [
      'The model seeing images',
      'The model generating factually incorrect or nonsensical information confidently',
      'The model crashing',
      'The model refusing to answer'
    ],
    correctAnswer: 1,
    explanation: 'Hallucination refers to the phenomenon where an LLM generates text that is plausible-sounding but factually incorrect or unrelated to the source.',
    difficulty: 'easy',
    tags: ['nlp', 'llm', 'issues']
  },
  {
    id: 'nlp-llm-042',
    question: 'What is "Temperature" in the context of LLM sampling?',
    options: [
      'The heat of the GPU',
      'A parameter that controls the randomness of the output',
      'The mood of the model',
      'The length of the output'
    ],
    correctAnswer: 1,
    explanation: 'Temperature scales the logits before softmax. High temperature (e.g., 1.0) increases randomness/creativity; low temperature (e.g., 0.1) makes output more deterministic.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'parameters']
  },
  {
    id: 'nlp-llm-043',
    question: 'What is "Fine-tuning"?',
    options: [
      'Adjusting the volume',
      'Training a pre-trained model on a specific dataset to adapt it to a specific task',
      'Creating a model from scratch',
      'Cleaning the data'
    ],
    correctAnswer: 1,
    explanation: 'Fine-tuning involves taking a pre-trained model and continuing the training process on a smaller, task-specific dataset to improve performance on that task.',
    difficulty: 'easy',
    tags: ['nlp', 'llm', 'training']
  },
  {
    id: 'nlp-llm-044',
    question: 'What is "PEFT" (Parameter-Efficient Fine-Tuning)?',
    options: [
      'Fine-tuning all parameters',
      'Techniques like LoRA that fine-tune only a small subset of parameters',
      'Training without parameters',
      'Perfect Efficient Fast Training'
    ],
    correctAnswer: 1,
    explanation: 'PEFT methods (like LoRA, Adapters) update only a small number of extra parameters while freezing the main model, reducing computational cost.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'peft']
  },
  {
    id: 'nlp-llm-045',
    question: 'What is "LoRA" (Low-Rank Adaptation)?',
    options: [
      'A new language model',
      'A PEFT technique that injects trainable low-rank decomposition matrices into transformer layers',
      'A loss function',
      'A tokenization method'
    ],
    correctAnswer: 1,
    explanation: 'LoRA freezes the pre-trained model weights and injects trainable rank decomposition matrices into each layer of the Transformer architecture.',
    difficulty: 'hard',
    tags: ['nlp', 'llm', 'peft', 'lora']
  },
  {
    id: 'nlp-llm-046',
    question: 'What is "RAG" (Retrieval-Augmented Generation)?',
    options: [
      'Generating random answers',
      'Combining an LLM with an external knowledge retrieval system',
      'A type of recurrent network',
      'Rapid Automatic Generation'
    ],
    correctAnswer: 1,
    explanation: 'RAG retrieves relevant documents from an external knowledge base and provides them as context to the LLM to generate more accurate and up-to-date answers.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'rag']
  },
  {
    id: 'nlp-llm-047',
    question: 'Which model is developed by Meta?',
    options: [
      'GPT-4',
      'Claude',
      'LLaMA',
      'PaLM'
    ],
    correctAnswer: 2,
    explanation: 'LLaMA (Large Language Model Meta AI) is a family of open-weights models developed by Meta.',
    difficulty: 'easy',
    tags: ['nlp', 'llm', 'models']
  },
  {
    id: 'nlp-llm-048',
    question: 'Which model is developed by Google?',
    options: [
      'GPT-4',
      'PaLM / Gemini',
      'LLaMA',
      'Mistral'
    ],
    correctAnswer: 1,
    explanation: 'PaLM (Pathways Language Model) and Gemini are developed by Google.',
    difficulty: 'easy',
    tags: ['nlp', 'llm', 'models']
  },
  {
    id: 'nlp-llm-049',
    question: 'What is the "Context Window" of an LLM?',
    options: [
      'The screen size of the application',
      'The maximum number of tokens the model can process in a single input/output sequence',
      'The time it takes to generate a response',
      'The training data size'
    ],
    correctAnswer: 1,
    explanation: 'The context window is the limit on the amount of text (measured in tokens) the model can consider at one time (e.g., 4k, 32k, 128k tokens).',
    difficulty: 'easy',
    tags: ['nlp', 'llm', 'concepts']
  },
  {
    id: 'nlp-llm-050',
    question: 'What is "Prompt Engineering"?',
    options: [
      'Building physical prompts',
      'The art of crafting inputs (prompts) to guide LLMs to generate desired outputs',
      'Designing the model architecture',
      'Writing Python code'
    ],
    correctAnswer: 1,
    explanation: 'Prompt engineering involves designing and refining the input text given to an LLM to elicit the best possible response.',
    difficulty: 'easy',
    tags: ['nlp', 'llm', 'prompting']
  },
  {
    id: 'nlp-llm-051',
    question: 'What is "Top-k sampling"?',
    options: [
      'Selecting the top k answers',
      'Restricting the sampling pool to the k most likely next tokens',
      'Sampling k times',
      'Training on the top k data points'
    ],
    correctAnswer: 1,
    explanation: 'Top-k sampling filters the distribution of the next word to only the top k most probable words before sampling.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'sampling']
  },
  {
    id: 'nlp-llm-052',
    question: 'What is "Top-p (Nucleus) sampling"?',
    options: [
      'Sampling from the top p percent of data',
      'Sampling from the smallest set of tokens whose cumulative probability exceeds p',
      'Sampling based on position',
      'Sampling based on polarity'
    ],
    correctAnswer: 1,
    explanation: 'Top-p sampling selects from the smallest set of top tokens whose cumulative probability adds up to p (e.g., 0.9), allowing for dynamic vocabulary size.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'sampling']
  },
  {
    id: 'nlp-llm-053',
    question: 'What is the "Scaling Law" in LLMs?',
    options: [
      'Models get slower as they get larger',
      'Performance improves predictably as model size, data size, and compute increase',
      'Laws regulating AI size',
      'Scaling images for input'
    ],
    correctAnswer: 1,
    explanation: 'Scaling laws observe that model performance (loss) improves as a power-law function of model size, dataset size, and compute budget.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'theory']
  },
  {
    id: 'nlp-llm-054',
    question: 'What is "Instruction Tuning"?',
    options: [
      'Tuning the hyperparameters',
      'Fine-tuning a base model on a dataset of instructions and responses',
      'Giving instructions to the developers',
      'Tuning the hardware'
    ],
    correctAnswer: 1,
    explanation: 'Instruction tuning fine-tunes a base LLM on a collection of tasks described via instructions, making the model better at following user commands.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'training']
  },
  {
    id: 'nlp-llm-055',
    question: 'What is a "Base Model" vs "Chat Model"?',
    options: [
      'Base is for images, Chat is for text',
      'Base is trained on raw text prediction; Chat is fine-tuned for dialogue and instructions',
      'Base is smaller',
      'Chat is older'
    ],
    correctAnswer: 1,
    explanation: 'A base model is trained to complete text (predict next token), while a chat model is further fine-tuned (RLHF/Instruction) to engage in conversation.',
    difficulty: 'easy',
    tags: ['nlp', 'llm', 'models']
  },
  {
    id: 'nlp-llm-056',
    question: 'What is "Quantization" in LLMs?',
    options: [
      'Using quantum computers',
      'Reducing the precision of model weights (e.g., from FP16 to INT4) to save memory',
      'Counting the quantity of tokens',
      'Increasing the model size'
    ],
    correctAnswer: 1,
    explanation: 'Quantization reduces the number of bits used to represent model parameters, significantly lowering memory usage and often speeding up inference with minimal accuracy loss.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'optimization']
  },
  {
    id: 'nlp-llm-057',
    question: 'What is "MoE" (Mixture of Experts)?',
    options: [
      'A team of human experts',
      'A model architecture where different sub-models (experts) handle different inputs',
      'Mixing different datasets',
      'A mixture of embeddings'
    ],
    correctAnswer: 1,
    explanation: 'Mixture of Experts uses a sparse architecture where a routing network selects a subset of "expert" layers to process each token, allowing for massive parameter counts with lower inference cost.',
    difficulty: 'hard',
    tags: ['nlp', 'llm', 'architecture']
  },
  {
    id: 'nlp-llm-058',
    question: 'What is the "Tokenizer" responsible for in an LLM pipeline?',
    options: [
      'Generating the answer',
      'Converting raw text into a sequence of integers (token IDs)',
      'Calculating the loss',
      'Connecting to the internet'
    ],
    correctAnswer: 1,
    explanation: 'The tokenizer converts human-readable text into numerical token IDs that the model can process.',
    difficulty: 'easy',
    tags: ['nlp', 'llm', 'pipeline']
  },
  {
    id: 'nlp-llm-059',
    question: 'What is "Perplexity"?',
    options: [
      'A measure of how confused the user is',
      'A metric to evaluate language models, measuring how well the model predicts a sample',
      'The complexity of the code',
      'The size of the dataset'
    ],
    correctAnswer: 1,
    explanation: 'Perplexity is a common metric for language models; lower perplexity indicates the model is less "surprised" by the text and predicts it better.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'metrics']
  },
  {
    id: 'nlp-llm-060',
    question: 'What is "Beam Search"?',
    options: [
      'Searching with a laser',
      'A decoding algorithm that keeps track of the top k most probable sequences',
      'A random search',
      'Searching for beams in images'
    ],
    correctAnswer: 1,
    explanation: 'Beam search explores multiple possible paths (sequences) simultaneously, keeping the top k most promising ones at each step to find a better overall sequence.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'decoding']
  },
  {
    id: 'nlp-llm-061',
    question: 'What is "Greedy Decoding"?',
    options: [
      'Always selecting the single most probable next token',
      'Selecting tokens that cost the most',
      'Decoding as fast as possible',
      'Using all tokens'
    ],
    correctAnswer: 0,
    explanation: 'Greedy decoding selects the token with the highest probability at each step, which is fast but often leads to repetitive or suboptimal text.',
    difficulty: 'easy',
    tags: ['nlp', 'llm', 'decoding']
  },
  {
    id: 'nlp-llm-062',
    question: 'What is "Constitutional AI"?',
    options: [
      'AI that writes constitutions',
      'An approach (by Anthropic) to align AI using a set of principles (constitution) rather than just human labels',
      'AI for legal advice',
      'A government AI'
    ],
    correctAnswer: 1,
    explanation: 'Constitutional AI uses a set of defined principles to guide the model\'s behavior and self-critique during training.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'alignment']
  },
  {
    id: 'nlp-llm-063',
    question: 'What is "Emergent Behavior" in LLMs?',
    options: [
      'Bugs appearing in code',
      'Capabilities that appear in large models that were not present in smaller ones',
      'The model emerging from the screen',
      'Slow loading times'
    ],
    correctAnswer: 1,
    explanation: 'Emergent behaviors are abilities (like arithmetic, reasoning) that spontaneously appear as the model scale increases, not explicitly programmed.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'theory']
  },
  {
    id: 'nlp-llm-064',
    question: 'What is "Catastrophic Forgetting"?',
    options: [
      'The model deleting its weights',
      'When a model forgets previously learned information upon learning new information',
      'The user forgetting the prompt',
      'A system crash'
    ],
    correctAnswer: 1,
    explanation: 'Catastrophic forgetting occurs when fine-tuning on a new task causes the neural network to drastically lose performance on previously learned tasks.',
    difficulty: 'medium',
    tags: ['nlp', 'llm', 'training']
  },
  {
    id: 'nlp-llm-065',
    question: 'What is the "Transformer-XL" designed for?',
    options: [
      'Extra Large images',
      'Learning dependency beyond a fixed length without disrupting temporal coherence',
      'Translating Excel files',
      'Small devices'
    ],
    correctAnswer: 1,
    explanation: 'Transformer-XL introduces recurrence to the transformer architecture to capture longer-term dependencies than standard fixed-context transformers.',
    difficulty: 'hard',
    tags: ['nlp', 'transformers', 'models']
  },

  // --- Generative Models (20 Questions) ---
  {
    id: 'gen-mod-066',
    question: 'What does "GAN" stand for?',
    options: [
      'General Artificial Network',
      'Generative Adversarial Network',
      'Global Attention Node',
      'Gradient Ascent Network'
    ],
    correctAnswer: 1,
    explanation: 'GAN stands for Generative Adversarial Network, a framework where two networks (generator and discriminator) compete.',
    difficulty: 'easy',
    tags: ['generative-ai', 'gan']
  },
  {
    id: 'gen-mod-067',
    question: 'What are the two main components of a GAN?',
    options: [
      'Encoder and Decoder',
      'Generator and Discriminator',
      'Actor and Critic',
      'Teacher and Student'
    ],
    correctAnswer: 1,
    explanation: 'A GAN consists of a Generator (creates fake data) and a Discriminator (tries to distinguish real data from fake data).',
    difficulty: 'easy',
    tags: ['generative-ai', 'gan']
  },
  {
    id: 'gen-mod-068',
    question: 'What is the goal of the Generator in a GAN?',
    options: [
      'To classify images',
      'To fool the Discriminator into thinking generated data is real',
      'To compress data',
      'To minimize the training time'
    ],
    correctAnswer: 1,
    explanation: 'The Generator aims to produce synthetic data indistinguishable from real data to "fool" the Discriminator.',
    difficulty: 'easy',
    tags: ['generative-ai', 'gan']
  },
  {
    id: 'gen-mod-069',
    question: 'What is "Mode Collapse" in GANs?',
    options: [
      'The model stops training',
      'The generator produces only a limited variety of outputs (e.g., the same face)',
      'The discriminator becomes too strong',
      'The model collapses into a black hole'
    ],
    correctAnswer: 1,
    explanation: 'Mode collapse happens when the generator finds a few outputs that fool the discriminator and keeps producing only those, losing diversity.',
    difficulty: 'medium',
    tags: ['generative-ai', 'gan', 'issues']
  },
  {
    id: 'gen-mod-070',
    question: 'What is a "VAE" (Variational Autoencoder)?',
    options: [
      'A standard compression algorithm',
      'A generative model that learns a probabilistic latent space',
      'A video editor',
      'A voice assistant'
    ],
    correctAnswer: 1,
    explanation: 'VAEs are generative models that encode input into a distribution (mean and variance) in latent space and sample from it to decode new outputs.',
    difficulty: 'medium',
    tags: ['generative-ai', 'vae']
  },
  {
    id: 'gen-mod-071',
    question: 'What is the "Reparameterization Trick" in VAEs?',
    options: [
      'A magic trick',
      'A method to allow backpropagation through the random sampling step',
      'Changing the hyperparameters',
      'Resizing the images'
    ],
    correctAnswer: 1,
    explanation: 'The reparameterization trick (z = mu + sigma * epsilon) allows gradients to flow through the stochastic sampling process during training.',
    difficulty: 'hard',
    tags: ['generative-ai', 'vae', 'math']
  },
  {
    id: 'gen-mod-072',
    question: 'What is a "Diffusion Model"?',
    options: [
      'A model that spreads news',
      'A model that generates data by iteratively denoising random noise',
      'A model for chemistry',
      'A simple regression model'
    ],
    correctAnswer: 1,
    explanation: 'Diffusion models (like Stable Diffusion) generate data by reversing a process that gradually added noise to data, effectively learning to denoise.',
    difficulty: 'medium',
    tags: ['generative-ai', 'diffusion']
  },
  {
    id: 'gen-mod-073',
    question: 'Which model type powers "Stable Diffusion" and "DALL-E 2"?',
    options: [
      'GAN',
      'Diffusion Model',
      'VAE',
      'LSTM'
    ],
    correctAnswer: 1,
    explanation: 'State-of-the-art image generation models like Stable Diffusion and DALL-E 2 are based on Diffusion Models.',
    difficulty: 'easy',
    tags: ['generative-ai', 'diffusion', 'models']
  },
  {
    id: 'gen-mod-074',
    question: 'What is the "Forward Process" in Diffusion Models?',
    options: [
      'Generating the image',
      'Gradually adding Gaussian noise to the data until it becomes pure noise',
      'Moving forward in time',
      'Training the neural network'
    ],
    correctAnswer: 1,
    explanation: 'The forward diffusion process systematically destroys the structure of the data by adding noise over many steps.',
    difficulty: 'medium',
    tags: ['generative-ai', 'diffusion']
  },
  {
    id: 'gen-mod-075',
    question: 'What is "CLIP" (Contrastive Language-Image Pre-training)?',
    options: [
      'A tool to clip images',
      'A model that learns to associate text and images in a shared embedding space',
      'A video generation model',
      'A text summarizer'
    ],
    correctAnswer: 1,
    explanation: 'CLIP is trained to predict which caption goes with which image, enabling zero-shot image classification and guiding generative models.',
    difficulty: 'medium',
    tags: ['generative-ai', 'multimodal']
  },
  {
    id: 'gen-mod-076',
    question: 'What is "Conditioning" in generative models?',
    options: [
      'Air conditioning',
      'Providing extra information (like a text prompt or class label) to guide the generation',
      'Pre-processing the data',
      'Cleaning the model'
    ],
    correctAnswer: 1,
    explanation: 'Conditioning involves feeding auxiliary information (e.g., "a cat") to the model so it generates specific outputs rather than random ones.',
    difficulty: 'easy',
    tags: ['generative-ai', 'concepts']
  },
  {
    id: 'gen-mod-077',
    question: 'What is "Latent Space"?',
    options: [
      'Outer space',
      'A compressed, abstract representation of data where similar items are closer together',
      'The memory of the computer',
      'The screen space'
    ],
    correctAnswer: 1,
    explanation: 'Latent space is a multi-dimensional space where the model maps inputs; navigating this space allows for interpolation and manipulation of generated features.',
    difficulty: 'medium',
    tags: ['generative-ai', 'concepts']
  },
  {
    id: 'gen-mod-078',
    question: 'What is "In-painting"?',
    options: [
      'Painting on a canvas',
      'Filling in missing or masked parts of an image using a generative model',
      'Painting inside a house',
      'Coloring a black and white photo'
    ],
    correctAnswer: 1,
    explanation: 'In-painting is the task of reconstructing missing regions in an image, often used for editing or restoration.',
    difficulty: 'easy',
    tags: ['generative-ai', 'tasks']
  },
  {
    id: 'gen-mod-079',
    question: 'What is "StyleGAN" known for?',
    options: [
      'Generating text',
      'Generating highly realistic human faces and allowing control over style (pose, age, etc.)',
      'Generating music',
      'Translating languages'
    ],
    correctAnswer: 1,
    explanation: 'StyleGAN is famous for generating photorealistic faces and providing control over "styles" at different levels of detail.',
    difficulty: 'medium',
    tags: ['generative-ai', 'gan', 'models']
  },
  {
    id: 'gen-mod-080',
    question: 'What is "CycleGAN" used for?',
    options: [
      'Generating bicycles',
      'Unpaired image-to-image translation (e.g., turning horses into zebras)',
      'Cycling through data',
      'Video generation'
    ],
    correctAnswer: 1,
    explanation: 'CycleGAN learns to translate between two domains (e.g., summer to winter) without needing paired training examples.',
    difficulty: 'medium',
    tags: ['generative-ai', 'gan', 'models']
  },
  {
    id: 'gen-mod-081',
    question: 'What is the "FID" (Fréchet Inception Distance) score?',
    options: [
      'A score for video games',
      'A metric to evaluate the quality and diversity of generated images',
      'A distance measure for text',
      'A loss function'
    ],
    correctAnswer: 1,
    explanation: 'FID measures the distance between the feature distributions of real and generated images; lower FID indicates better quality and realism.',
    difficulty: 'hard',
    tags: ['generative-ai', 'metrics']
  },
  {
    id: 'gen-mod-082',
    question: 'What is "Deepfakes"?',
    options: [
      'Deep learning errors',
      'Synthetic media where a person\'s likeness is replaced with another\'s',
      'Fake news text',
      'Deep databases'
    ],
    correctAnswer: 1,
    explanation: 'Deepfakes use generative AI to create realistic but fake videos or audio, often swapping faces or voices.',
    difficulty: 'easy',
    tags: ['generative-ai', 'ethics']
  },
  {
    id: 'gen-mod-083',
    question: 'What is "Neural Style Transfer"?',
    options: [
      'Transferring files',
      'Applying the artistic style of one image to the content of another',
      'Translating text styles',
      'Copying neural networks'
    ],
    correctAnswer: 1,
    explanation: 'Neural Style Transfer separates and recombines content and style representations from a CNN to render a photo in the style of a painting.',
    difficulty: 'medium',
    tags: ['generative-ai', 'tasks']
  },
  {
    id: 'gen-mod-084',
    question: 'What is a "Text-to-Image" model?',
    options: [
      'OCR software',
      'A model that generates images based on textual descriptions',
      'A model that describes images',
      'A scanner'
    ],
    correctAnswer: 1,
    explanation: 'Text-to-Image models (like Midjourney, DALL-E) take a text prompt and generate a corresponding visual image.',
    difficulty: 'easy',
    tags: ['generative-ai', 'tasks']
  },
  {
    id: 'gen-mod-085',
    question: 'What is "Guidance Scale" (Classifier-Free Guidance) in diffusion?',
    options: [
      'A map for the model',
      'A parameter controlling how closely the generation follows the text prompt',
      'The size of the image',
      'The learning rate'
    ],
    correctAnswer: 1,
    explanation: 'Guidance scale controls the trade-off between image quality/diversity and adherence to the prompt. Higher values force the model to follow the prompt more strictly.',
    difficulty: 'hard',
    tags: ['generative-ai', 'diffusion', 'parameters']
  },

  // --- NLP Tasks (15 Questions) ---
  {
    id: 'nlp-task-086',
    question: 'What is "NER" (Named Entity Recognition)?',
    options: [
      'Recognizing new errors',
      'Identifying and classifying entities (names, orgs, locations) in text',
      'Translating names',
      'Generating names'
    ],
    correctAnswer: 1,
    explanation: 'NER is the task of locating and classifying named entities mentioned in unstructured text into categories like person names, organizations, locations, etc.',
    difficulty: 'easy',
    tags: ['nlp', 'tasks', 'ner']
  },
  {
    id: 'nlp-task-087',
    question: 'What is "Sentiment Analysis"?',
    options: [
      'Analyzing sentence structure',
      'Determining the emotional tone (positive, negative, neutral) of text',
      'Analyzing grammar',
      'Predicting the next word'
    ],
    correctAnswer: 1,
    explanation: 'Sentiment analysis determines the attitude or emotion expressed in a piece of text.',
    difficulty: 'easy',
    tags: ['nlp', 'tasks', 'sentiment']
  },
  {
    id: 'nlp-task-088',
    question: 'What is "POS Tagging" (Part-of-Speech Tagging)?',
    options: [
      'Tagging posts on social media',
      'Assigning grammatical categories (noun, verb, adj) to each word in a text',
      'Tagging the position of words',
      'Translating tags'
    ],
    correctAnswer: 1,
    explanation: 'POS tagging involves labeling each word in a sentence with its appropriate part of speech based on its definition and context.',
    difficulty: 'easy',
    tags: ['nlp', 'tasks', 'pos']
  },
  {
    id: 'nlp-task-089',
    question: 'What is "Text Summarization"?',
    options: [
      'Counting words',
      'Creating a concise version of a text that retains the main information',
      'Deleting the text',
      'Expanding the text'
    ],
    correctAnswer: 1,
    explanation: 'Text summarization produces a shorter version of a document while preserving its key meaning.',
    difficulty: 'easy',
    tags: ['nlp', 'tasks', 'summarization']
  },
  {
    id: 'nlp-task-090',
    question: 'What is the difference between "Extractive" and "Abstractive" summarization?',
    options: [
      'Extractive is slower',
      'Extractive selects existing sentences; Abstractive generates new sentences',
      'Abstractive selects existing sentences; Extractive generates new sentences',
      'They are the same'
    ],
    correctAnswer: 1,
    explanation: 'Extractive summarization pulls sentences directly from the source, while abstractive summarization generates new phrasing to capture the essence.',
    difficulty: 'medium',
    tags: ['nlp', 'tasks', 'summarization']
  },
  {
    id: 'nlp-task-091',
    question: 'What is "Machine Translation"?',
    options: [
      'Translating machines',
      'Automatically converting text from one language to another',
      'Translating code to machine code',
      'Moving machines'
    ],
    correctAnswer: 1,
    explanation: 'Machine Translation (MT) is the subfield of computational linguistics that investigates the use of software to translate text or speech from one language to another.',
    difficulty: 'easy',
    tags: ['nlp', 'tasks', 'translation']
  },
  {
    id: 'nlp-task-092',
    question: 'What is "Question Answering" (QA)?',
    options: [
      'Asking questions',
      'Building systems that automatically answer questions posed by humans in natural language',
      'Testing the model',
      'Writing quizzes'
    ],
    correctAnswer: 1,
    explanation: 'QA systems are designed to answer questions posed in natural language, often by retrieving information from a knowledge base or text.',
    difficulty: 'easy',
    tags: ['nlp', 'tasks', 'qa']
  },
  {
    id: 'nlp-task-093',
    question: 'What is "Coreference Resolution"?',
    options: [
      'Resolving conflicts',
      'Finding all expressions that refer to the same entity in a text',
      'Fixing references in code',
      'Translating pronouns'
    ],
    correctAnswer: 1,
    explanation: 'Coreference resolution determines which words (like "he", "it", "the president") refer to the same entity (like "Obama") in the text.',
    difficulty: 'hard',
    tags: ['nlp', 'tasks', 'coreference']
  },
  {
    id: 'nlp-task-094',
    question: 'What is "Dependency Parsing"?',
    options: [
      'Parsing dependencies in package.json',
      'Analyzing the grammatical structure to find relationships (dependencies) between "head" words and words which modify those heads',
      'Parsing HTML',
      'Checking for dependent variables'
    ],
    correctAnswer: 1,
    explanation: 'Dependency parsing analyzes the grammatical structure of a sentence, establishing relationships between "head" words and words which modify those heads.',
    difficulty: 'medium',
    tags: ['nlp', 'tasks', 'parsing']
  },
  {
    id: 'nlp-task-095',
    question: 'What is "Topic Modeling"?',
    options: [
      'Modeling 3D objects',
      'Unsupervised technique to discover abstract "topics" that occur in a collection of documents',
      'Writing topics',
      'Classifying images'
    ],
    correctAnswer: 1,
    explanation: 'Topic modeling (like LDA) is an unsupervised method used to discover the hidden thematic structure in a large corpus of text.',
    difficulty: 'medium',
    tags: ['nlp', 'tasks', 'topic-modeling']
  },
  {
    id: 'nlp-task-096',
    question: 'What is "LDA" (Latent Dirichlet Allocation)?',
    options: [
      'A supervised learning algorithm',
      'A popular topic modeling algorithm',
      'A type of neural network',
      'A database'
    ],
    correctAnswer: 1,
    explanation: 'LDA is a generative statistical model used for topic modeling, assuming documents are mixtures of topics and topics are mixtures of words.',
    difficulty: 'hard',
    tags: ['nlp', 'tasks', 'topic-modeling']
  },
  {
    id: 'nlp-task-097',
    question: 'What is "BLEU" score?',
    options: [
      'The color blue',
      'A metric for evaluating machine-translated text against reference translations',
      'A sentiment score',
      'A speed metric'
    ],
    correctAnswer: 1,
    explanation: 'BLEU (Bilingual Evaluation Understudy) is a metric for evaluating the quality of text which has been machine-translated from one natural language to another.',
    difficulty: 'medium',
    tags: ['nlp', 'metrics', 'translation']
  },
  {
    id: 'nlp-task-098',
    question: 'What is "ROUGE" score?',
    options: [
      'The color red',
      'A set of metrics used to evaluate automatic summarization and machine translation',
      'A classification metric',
      'A clustering metric'
    ],
    correctAnswer: 1,
    explanation: 'ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is commonly used to evaluate text summarization by comparing overlap with reference summaries.',
    difficulty: 'medium',
    tags: ['nlp', 'metrics', 'summarization']
  },
  {
    id: 'nlp-task-099',
    question: 'What is "Text Classification"?',
    options: [
      'Classifying images of text',
      'Assigning predefined categories to text documents (e.g., spam vs. ham)',
      'Writing text',
      'Sorting files'
    ],
    correctAnswer: 1,
    explanation: 'Text classification is the process of categorizing text into organized groups, such as sentiment analysis, topic labeling, and spam detection.',
    difficulty: 'easy',
    tags: ['nlp', 'tasks', 'classification']
  },
  {
    id: 'nlp-task-100',
    question: 'What is "Language Identification"?',
    options: [
      'Identifying the speaker',
      'Determining which natural language a given content is in',
      'Translating the language',
      'Learning a language'
    ],
    correctAnswer: 1,
    explanation: 'Language identification is the task of automatically determining the language of a text document.',
    difficulty: 'easy',
    tags: ['nlp', 'tasks']
  }
];

export default nlpGenAiQuiz;
