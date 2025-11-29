export const aiExpansion2 = [
  {
    "id": "nlp-genai-001",
    "question": "What is the primary mechanism that allows Transformer models to handle long-range dependencies more effectively than RNNs?",
    "options": [
      "Recurrent connections",
      "Self-Attention mechanism",
      "Convolutional layers",
      "MaxPooling"
    ],
    "correctAnswer": 1,
    "explanation": "Self-Attention allows the model to weigh the importance of different words in a sequence relative to each other, regardless of their distance, enabling better handling of long-range dependencies compared to the sequential processing of RNNs.",
    "difficulty": "medium",
    "tags": ["Transformers", "Attention"]
  },
  {
    "id": "nlp-genai-002",
    "question": "In the context of Transformers, what is the purpose of 'Multi-head Attention'?",
    "options": [
      "To increase the number of layers in the model",
      "To allow the model to attend to information from different representation subspaces at different positions",
      "To reduce the computational complexity of the model",
      "To replace the feed-forward networks"
    ],
    "correctAnswer": 1,
    "explanation": "Multi-head attention runs the attention mechanism several times in parallel. This allows the model to jointly attend to information from different representation subspaces at different positions, capturing various aspects of the relationships between words.",
    "difficulty": "hard",
    "tags": ["Transformers", "Attention"]
  },
  {
    "id": "nlp-genai-003",
    "question": "What is the role of Positional Encodings in a Transformer architecture?",
    "options": [
      "To normalize the input data",
      "To inject information about the relative or absolute position of tokens in the sequence",
      "To convert words into vector embeddings",
      "To calculate the probability distribution of the output"
    ],
    "correctAnswer": 1,
    "explanation": "Since the Transformer architecture contains no recurrence or convolution, it has no inherent sense of order. Positional encodings are added to the input embeddings to give the model information about the position of each token in the sequence.",
    "difficulty": "medium",
    "tags": ["Transformers", "Architecture"]
  },
  {
    "id": "nlp-genai-004",
    "question": "Which component of the Transformer is primarily responsible for stabilizing the training of deep networks?",
    "options": [
      "Softmax Layer",
      "Layer Normalization",
      "Positional Encoding",
      "Linear Projection"
    ],
    "correctAnswer": 1,
    "explanation": "Layer Normalization is applied after each sub-layer (attention and feed-forward) in the Transformer. It helps stabilize the learning process and reduces training time by normalizing the inputs across the features.",
    "difficulty": "medium",
    "tags": ["Transformers", "Training"]
  },
  {
    "id": "nlp-genai-005",
    "question": "What is the computational complexity of the self-attention layer with respect to the sequence length N?",
    "options": [
      "O(N)",
      "O(N log N)",
      "O(N^2)",
      "O(1)"
    ],
    "correctAnswer": 2,
    "explanation": "Self-attention requires computing attention scores for every pair of tokens in the sequence, resulting in a quadratic complexity O(N^2) with respect to the sequence length N.",
    "difficulty": "hard",
    "tags": ["Transformers", "Complexity"]
  },
  {
    "id": "nlp-genai-006",
    "question": "In the original 'Attention Is All You Need' paper, the Transformer architecture consists of:",
    "options": [
      "Only an Encoder stack",
      "Only a Decoder stack",
      "Both an Encoder and a Decoder stack",
      "A single LSTM layer"
    ],
    "correctAnswer": 2,
    "explanation": "The original Transformer model proposed in 'Attention Is All You Need' is a sequence-to-sequence model consisting of both an Encoder stack (to process the input) and a Decoder stack (to generate the output).",
    "difficulty": "easy",
    "tags": ["Transformers", "History"]
  },
  {
    "id": "nlp-genai-007",
    "question": "In the self-attention mechanism, what are the three vectors generated for each input token?",
    "options": [
      "Input, Output, Hidden",
      "Query, Key, Value",
      "Alpha, Beta, Gamma",
      "Forget, Update, Output"
    ],
    "correctAnswer": 1,
    "explanation": "For each token, the self-attention mechanism generates three vectors: a Query vector (what I'm looking for), a Key vector (what I offer), and a Value vector (what I actually contain).",
    "difficulty": "medium",
    "tags": ["Transformers", "Attention"]
  },
  {
    "id": "nlp-genai-008",
    "question": "What is the purpose of 'Masked' Self-Attention in the Transformer Decoder?",
    "options": [
      "To hide the input from the encoder",
      "To prevent positions from attending to subsequent positions",
      "To randomly drop neurons for regularization",
      "To mask out padding tokens only"
    ],
    "correctAnswer": 1,
    "explanation": "Masked self-attention in the decoder ensures that the prediction for a specific position can only depend on known outputs at positions less than that position. It prevents the model from 'cheating' by looking ahead at future tokens.",
    "difficulty": "medium",
    "tags": ["Transformers", "Decoder"]
  },
  {
    "id": "nlp-genai-009",
    "question": "Which of the following popular LLMs is an Encoder-only model?",
    "options": [
      "GPT-3",
      "BERT",
      "T5",
      "LLaMA"
    ],
    "correctAnswer": 1,
    "explanation": "BERT (Bidirectional Encoder Representations from Transformers) is an encoder-only model designed to pre-train deep bidirectional representations from unlabeled text.",
    "difficulty": "easy",
    "tags": ["LLMs", "BERT"]
  },
  {
    "id": "nlp-genai-010",
    "question": "Which of the following models is a Decoder-only autoregressive model?",
    "options": [
      "BERT",
      "RoBERTa",
      "GPT-3",
      "T5"
    ],
    "correctAnswer": 2,
    "explanation": "GPT-3 (Generative Pre-trained Transformer 3) is a decoder-only model that generates text autoregressively, predicting the next token based on previous tokens.",
    "difficulty": "easy",
    "tags": ["LLMs", "GPT"]
  },
  {
    "id": "nlp-genai-011",
    "question": "What does 'T5' stand for in the context of NLP models?",
    "options": [
      "Transformer 5",
      "Text-to-Text Transfer Transformer",
      "Tensor-based Text Training Transformer",
      "Top 5 Transformer"
    ],
    "correctAnswer": 1,
    "explanation": "T5 stands for 'Text-to-Text Transfer Transformer'. It reframes all NLP tasks into a unified text-to-text format where the input and output are always text strings.",
    "difficulty": "medium",
    "tags": ["LLMs", "T5"]
  },
  {
    "id": "nlp-genai-012",
    "question": "What are the two pre-training objectives of BERT?",
    "options": [
      "Next Token Prediction and Translation",
      "Masked Language Modeling (MLM) and Next Sentence Prediction (NSP)",
      "Causal Language Modeling and Denoising",
      "Contrastive Learning and Clustering"
    ],
    "correctAnswer": 1,
    "explanation": "BERT is pre-trained using two unsupervised tasks: Masked Language Modeling (MLM), where random words are masked and predicted, and Next Sentence Prediction (NSP), where the model predicts if sentence B follows sentence A.",
    "difficulty": "medium",
    "tags": ["LLMs", "BERT", "Training"]
  },
  {
    "id": "nlp-genai-013",
    "question": "LLaMA (Large Language Model Meta AI) is notable for being trained primarily on:",
    "options": [
      "Private proprietary data",
      "Publicly available data",
      "Synthetic data generated by GPT-4",
      "Reinforcement learning data only"
    ],
    "correctAnswer": 1,
    "explanation": "LLaMA was released with the claim that it was trained exclusively on publicly available datasets, demonstrating that state-of-the-art performance can be achieved without proprietary data.",
    "difficulty": "medium",
    "tags": ["LLMs", "LLaMA"]
  },
  {
    "id": "nlp-genai-014",
    "question": "What do 'Scaling Laws' in LLMs generally suggest?",
    "options": [
      "Model performance decreases as size increases due to overfitting",
      "Model performance improves as a power law with respect to model size, dataset size, and compute",
      "Performance plateaus after 1 billion parameters",
      "Smaller models are always more efficient and accurate"
    ],
    "correctAnswer": 1,
    "explanation": "Scaling laws observe that the cross-entropy loss of a language model scales as a power law with model size, dataset size, and the amount of compute used for training.",
    "difficulty": "hard",
    "tags": ["LLMs", "Theory"]
  },
  {
    "id": "nlp-genai-015",
    "question": "Which model popularized 'few-shot learning' where the model performs tasks given only a few examples in the prompt?",
    "options": [
      "Word2Vec",
      "BERT",
      "GPT-3",
      "ResNet"
    ],
    "correctAnswer": 2,
    "explanation": "GPT-3 demonstrated strong few-shot learning capabilities, where it could perform a wide variety of tasks by just being provided with a few examples in the context window (prompt) without any gradient updates (fine-tuning).",
    "difficulty": "medium",
    "tags": ["LLMs", "GPT", "Few-shot"]
  },
  {
    "id": "nlp-genai-016",
    "question": "What is the fundamental architectural difference between GPT and BERT?",
    "options": [
      "GPT is bidirectional; BERT is unidirectional",
      "GPT is autoregressive (decoder); BERT is autoencoding (encoder)",
      "GPT uses RNNs; BERT uses CNNs",
      "GPT is for images; BERT is for text"
    ],
    "correctAnswer": 1,
    "explanation": "GPT is an autoregressive model (Decoder) that predicts the next word based on previous words (unidirectional context). BERT is an autoencoding model (Encoder) that looks at the entire sequence at once (bidirectional context) to predict masked words.",
    "difficulty": "medium",
    "tags": ["LLMs", "Architecture"]
  },
  {
    "id": "nlp-genai-017",
    "question": "What is Byte Pair Encoding (BPE) primarily used for in NLP?",
    "options": [
      "Image compression",
      "Subword tokenization",
      "Sentence classification",
      "Part-of-speech tagging"
    ],
    "correctAnswer": 1,
    "explanation": "BPE is a subword tokenization algorithm that iteratively merges the most frequent pair of bytes or characters in a text corpus. It helps handle rare words by breaking them down into common subword units.",
    "difficulty": "medium",
    "tags": ["Tokenization", "BPE"]
  },
  {
    "id": "nlp-genai-018",
    "question": "How does WordPiece tokenization differ from standard BPE?",
    "options": [
      "It merges based on frequency only",
      "It selects merges that maximize the likelihood of the training data",
      "It only uses whole words",
      "It is used exclusively for images"
    ],
    "correctAnswer": 1,
    "explanation": "While BPE merges based on the highest frequency of pairs, WordPiece selects the pair merge that maximizes the likelihood of the training data (or minimizes the perplexity) when added to the vocabulary.",
    "difficulty": "hard",
    "tags": ["Tokenization", "WordPiece"]
  },
  {
    "id": "nlp-genai-019",
    "question": "What is the 'Out-of-Vocabulary' (OOV) problem?",
    "options": [
      "When the model runs out of memory",
      "When the training data is too small",
      "When the model encounters a word during inference that was not in its training vocabulary",
      "When the vocabulary size is too large"
    ],
    "correctAnswer": 2,
    "explanation": "The OOV problem occurs when a model encounters a word it has not seen before and does not have an embedding for. Subword tokenizers mitigate this by representing unknown words as sequences of known subwords.",
    "difficulty": "easy",
    "tags": ["Tokenization", "Concepts"]
  },
  {
    "id": "nlp-genai-020",
    "question": "In BERT tokenization, what is the purpose of the [CLS] token?",
    "options": [
      "To mark the end of a sentence",
      "To represent the classification of the entire sequence",
      "To separate two sentences",
      "To mask a word"
    ],
    "correctAnswer": 1,
    "explanation": "The [CLS] token is a special token added to the beginning of every input sequence in BERT. The final hidden state corresponding to this token is used as the aggregate sequence representation for classification tasks.",
    "difficulty": "medium",
    "tags": ["Tokenization", "BERT"]
  },
  {
    "id": "nlp-genai-021",
    "question": "Why is tokenization a necessary step before feeding text into a neural network?",
    "options": [
      "To correct spelling errors",
      "To translate the text to English",
      "To convert raw text strings into numerical indices that the model can process",
      "To remove stop words"
    ],
    "correctAnswer": 2,
    "explanation": "Neural networks operate on numbers (tensors). Tokenization breaks text into smaller units (tokens) and maps them to numerical IDs (indices) in a vocabulary, allowing the model to process the text mathematically.",
    "difficulty": "easy",
    "tags": ["Tokenization", "Basics"]
  },
  {
    "id": "nlp-genai-022",
    "question": "What is the main advantage of Word2Vec embeddings over One-Hot Encoding?",
    "options": [
      "They are easier to compute",
      "They capture semantic relationships and similarity between words in a dense vector space",
      "They result in sparse vectors",
      "They do not require training"
    ],
    "correctAnswer": 1,
    "explanation": "One-hot encodings are sparse and high-dimensional, with no notion of similarity between words. Word2Vec produces dense, lower-dimensional vectors where words with similar meanings are close to each other in vector space.",
    "difficulty": "medium",
    "tags": ["Embeddings", "Word2Vec"]
  },
  {
    "id": "nlp-genai-023",
    "question": "How does GloVe (Global Vectors) primarily learn word embeddings?",
    "options": [
      "By predicting the next word in a sequence",
      "By factorizing the global word-word co-occurrence matrix",
      "By using a deep convolutional network",
      "By manual assignment"
    ],
    "correctAnswer": 1,
    "explanation": "GloVe is a count-based model that learns embeddings by factorizing the logarithm of the global word-word co-occurrence matrix, effectively capturing the ratio of co-occurrence probabilities.",
    "difficulty": "hard",
    "tags": ["Embeddings", "GloVe"]
  },
  {
    "id": "nlp-genai-024",
    "question": "What is a 'Contextual Embedding' (e.g., from BERT) compared to a static embedding (e.g., Word2Vec)?",
    "options": [
      "It is always 2D",
      "The embedding for a word is fixed regardless of where it appears",
      "The embedding for a word changes dynamically based on the surrounding words (context)",
      "It is only used for nouns"
    ],
    "correctAnswer": 2,
    "explanation": "Static embeddings (Word2Vec) assign one vector per word. Contextual embeddings (BERT) generate a representation for a word that depends on the entire sentence, so the word 'bank' has a different embedding in 'river bank' vs 'bank account'.",
    "difficulty": "medium",
    "tags": ["Embeddings", "Contextual"]
  },
  {
    "id": "nlp-genai-025",
    "question": "In the classic Word2Vec analogy, what is the result of vector operation: King - Man + Woman?",
    "options": [
      "Prince",
      "Queen",
      "Princess",
      "Monarch"
    ],
    "correctAnswer": 1,
    "explanation": "This is the classic example of vector arithmetic in word embeddings, demonstrating that the direction from 'Man' to 'King' is similar to the direction from 'Woman' to 'Queen'.",
    "difficulty": "easy",
    "tags": ["Embeddings", "Analogy"]
  },
  {
    "id": "nlp-genai-026",
    "question": "Which of the following is a typical dimension size for a modern LLM embedding?",
    "options": [
      "3",
      "10",
      "4096",
      "1,000,000"
    ],
    "correctAnswer": 2,
    "explanation": "Modern LLMs like GPT-3 or LLaMA typically use embedding dimensions in the thousands (e.g., 4096, 5120) to capture rich semantic information. 3 or 10 is too small, and 1 million is computationally prohibitive.",
    "difficulty": "medium",
    "tags": ["Embeddings", "Dimensions"]
  },
  {
    "id": "nlp-genai-027",
    "question": "What is 'Prompt Engineering'?",
    "options": [
      "Writing code to build the model",
      "Designing and refining input text to guide a GenAI model to produce the desired output",
      "Engineering the hardware for the model",
      "Cleaning the training data"
    ],
    "correctAnswer": 1,
    "explanation": "Prompt engineering involves crafting the input text (prompt) effectively to elicit the best possible response from a generative AI model without changing the model's weights.",
    "difficulty": "easy",
    "tags": ["GenAI", "Prompt Engineering"]
  },
  {
    "id": "nlp-genai-028",
    "question": "What does RAG stand for in Generative AI?",
    "options": [
      "Recurrent Attention Generator",
      "Retrieval-Augmented Generation",
      "Random Access Generation",
      "Rapid AI Growth"
    ],
    "correctAnswer": 1,
    "explanation": "RAG stands for Retrieval-Augmented Generation. It is a technique that combines a retriever (to find relevant documents) with a generator (LLM) to answer questions based on external knowledge.",
    "difficulty": "medium",
    "tags": ["GenAI", "RAG"]
  },
  {
    "id": "nlp-genai-029",
    "question": "What is the primary benefit of using RAG (Retrieval-Augmented Generation)?",
    "options": [
      "It makes the model smaller",
      "It reduces hallucinations by grounding the model's response in retrieved, up-to-date facts",
      "It speeds up training time",
      "It eliminates the need for a GPU"
    ],
    "correctAnswer": 1,
    "explanation": "RAG allows the LLM to access external data that it wasn't trained on. This helps ensure answers are factual and up-to-date, significantly reducing the likelihood of hallucinations.",
    "difficulty": "medium",
    "tags": ["GenAI", "RAG"]
  },
  {
    "id": "nlp-genai-030",
    "question": "What is 'Fine-tuning' in the context of LLMs?",
    "options": [
      "Adjusting the learning rate during pre-training",
      "Training a pre-trained model on a specific, smaller dataset to adapt it to a particular task",
      "Designing the model architecture",
      "Running the model on a CPU"
    ],
    "correctAnswer": 1,
    "explanation": "Fine-tuning takes a model that has already learned general language patterns (pre-training) and updates its weights using a specific dataset to specialize it for a particular application or style.",
    "difficulty": "medium",
    "tags": ["GenAI", "Fine-tuning"]
  },
  {
    "id": "nlp-genai-031",
    "question": "What does RLHF stand for?",
    "options": [
      "Reinforcement Learning from Human Feedback",
      "Real-time Language Human Fine-tuning",
      "Recursive Learning Hidden Features",
      "Randomized Linear Hidden Functions"
    ],
    "correctAnswer": 0,
    "explanation": "RLHF (Reinforcement Learning from Human Feedback) is a technique used to align LLMs with human values and preferences by training a reward model on human rankings of outputs and then optimizing the LLM using reinforcement learning.",
    "difficulty": "medium",
    "tags": ["GenAI", "RLHF"]
  },
  {
    "id": "nlp-genai-032",
    "question": "What effect does increasing the 'Temperature' parameter have on text generation?",
    "options": [
      "It makes the output more deterministic and repetitive",
      "It makes the output more random, creative, and diverse",
      "It increases the length of the output",
      "It decreases the inference speed"
    ],
    "correctAnswer": 1,
    "explanation": "Temperature controls the randomness of the sampling. High temperature flattens the probability distribution, allowing less likely tokens to be selected, leading to more creative/random output. Low temperature makes the distribution sharper, favoring the most likely tokens.",
    "difficulty": "medium",
    "tags": ["GenAI", "Parameters"]
  },
  {
    "id": "nlp-genai-033",
    "question": "If you set the Temperature to 0 during generation, what happens?",
    "options": [
      "The model stops generating",
      "The model outputs random noise",
      "The generation becomes deterministic (Greedy Decoding)",
      "The model crashes"
    ],
    "correctAnswer": 2,
    "explanation": "At temperature 0, the probability of the most likely token becomes 1 (or very close to it), effectively turning the sampling process into greedy decoding where the model always picks the single most likely next token.",
    "difficulty": "medium",
    "tags": ["GenAI", "Parameters"]
  },
  {
    "id": "nlp-genai-034",
    "question": "What is 'Top-k sampling'?",
    "options": [
      "Sampling from the top k layers of the network",
      "Restricting the sampling pool to the k most likely next tokens",
      "Training the model for k epochs",
      "Using k GPUs"
    ],
    "correctAnswer": 1,
    "explanation": "Top-k sampling filters the probability distribution to only the 'k' most likely next tokens and redistributes the probability mass among them before sampling. This prevents the model from choosing very low-probability (irrelevant) words.",
    "difficulty": "medium",
    "tags": ["GenAI", "Sampling"]
  },
  {
    "id": "nlp-genai-035",
    "question": "What is 'Top-p (Nucleus) sampling'?",
    "options": [
      "Sampling from the top p percent of the data",
      "Sampling from the smallest set of tokens whose cumulative probability exceeds p",
      "Sampling based on the position p",
      "A method to prune the model"
    ],
    "correctAnswer": 1,
    "explanation": "Top-p (Nucleus) sampling selects the smallest set of top tokens whose cumulative probability adds up to 'p' (e.g., 0.9). This allows the number of candidates to dynamically adjust based on the confidence of the model.",
    "difficulty": "hard",
    "tags": ["GenAI", "Sampling"]
  },
  {
    "id": "nlp-genai-036",
    "question": "What is a 'Hallucination' in the context of Generative AI?",
    "options": [
      "When the model generates an image instead of text",
      "When the model generates plausible-sounding but factually incorrect or nonsensical information",
      "When the model refuses to answer",
      "When the model copies text verbatim"
    ],
    "correctAnswer": 1,
    "explanation": "Hallucination refers to the phenomenon where an LLM generates text that is grammatically correct and confident but is factually wrong or not based on the input context.",
    "difficulty": "easy",
    "tags": ["GenAI", "Concepts"]
  },
  {
    "id": "nlp-genai-037",
    "question": "What is 'Chain-of-Thought' (CoT) prompting?",
    "options": [
      "Chaining multiple models together",
      "Asking the model to explain its reasoning step-by-step before giving the final answer",
      "Repeating the same prompt multiple times",
      "Using a chain of GPUs"
    ],
    "correctAnswer": 1,
    "explanation": "Chain-of-Thought prompting encourages the model to generate intermediate reasoning steps. This significantly improves performance on complex reasoning tasks like math or logic puzzles.",
    "difficulty": "medium",
    "tags": ["GenAI", "Prompt Engineering"]
  },
  {
    "id": "nlp-genai-038",
    "question": "What is 'Parameter-Efficient Fine-Tuning' (PEFT)?",
    "options": [
      "Fine-tuning all parameters of the model",
      "Fine-tuning only a small subset of parameters or adding a small number of trainable parameters",
      "Deleting parameters to make the model smaller",
      "Training without any parameters"
    ],
    "correctAnswer": 1,
    "explanation": "PEFT methods (like LoRA, Adapters) freeze most of the pre-trained model weights and only train a small number of extra parameters. This drastically reduces the computational cost of fine-tuning.",
    "difficulty": "medium",
    "tags": ["GenAI", "PEFT"]
  },
  {
    "id": "nlp-genai-039",
    "question": "What is LoRA (Low-Rank Adaptation)?",
    "options": [
      "A new activation function",
      "A PEFT technique that injects trainable rank decomposition matrices into the model layers",
      "A type of Recurrent Neural Network",
      "A dataset for legal documents"
    ],
    "correctAnswer": 1,
    "explanation": "LoRA freezes the pre-trained model weights and injects trainable rank decomposition matrices into each layer of the Transformer architecture, allowing efficient adaptation with very few trainable parameters.",
    "difficulty": "hard",
    "tags": ["GenAI", "LoRA"]
  },
  {
    "id": "nlp-genai-040",
    "question": "What is the 'Context Window' of an LLM?",
    "options": [
      "The GUI window where you type the prompt",
      "The maximum number of tokens the model can process in a single input/output sequence",
      "The time it takes to generate a response",
      "The physical screen size"
    ],
    "correctAnswer": 1,
    "explanation": "The context window is the limit on the amount of text (measured in tokens) that the model can consider at one time. This includes both the input prompt and the generated output.",
    "difficulty": "easy",
    "tags": ["GenAI", "Concepts"]
  },
  {
    "id": "nlp-genai-041",
    "question": "What is 'Zero-shot' prompting?",
    "options": [
      "Training the model with zero data",
      "Asking the model to perform a task without providing any examples in the prompt",
      "Using a model with zero weights",
      "Getting zero correct answers"
    ],
    "correctAnswer": 1,
    "explanation": "Zero-shot prompting involves giving the model a task description (e.g., 'Translate this to French:') without providing any examples of how to do it, relying entirely on its pre-training knowledge.",
    "difficulty": "easy",
    "tags": ["GenAI", "Prompt Engineering"]
  },
  {
    "id": "nlp-genai-042",
    "question": "What is the goal of Named Entity Recognition (NER)?",
    "options": [
      "To translate text",
      "To identify and classify entities like names, organizations, and locations in text",
      "To summarize a paragraph",
      "To generate new entities"
    ],
    "correctAnswer": 1,
    "explanation": "NER is an information extraction task that seeks to locate and classify named entities mentioned in unstructured text into pre-defined categories such as person names, organizations, locations, etc.",
    "difficulty": "easy",
    "tags": ["NLP Tasks", "NER"]
  },
  {
    "id": "nlp-genai-043",
    "question": "Sentiment Analysis primarily aims to:",
    "options": [
      "Correct grammar",
      "Determine the emotional tone or polarity (positive, negative, neutral) of a text",
      "Predict the next word",
      "Identify the author"
    ],
    "correctAnswer": 1,
    "explanation": "Sentiment analysis is the use of natural language processing to systematically identify, extract, quantify, and study affective states and subjective information (sentiment) within text.",
    "difficulty": "easy",
    "tags": ["NLP Tasks", "Sentiment Analysis"]
  },
  {
    "id": "nlp-genai-044",
    "question": "What is the BLEU score commonly used for?",
    "options": [
      "Evaluating the quality of machine translated text against reference translations",
      "Measuring the speed of the model",
      "Calculating the loss function",
      "Evaluating sentiment analysis"
    ],
    "correctAnswer": 0,
    "explanation": "BLEU (Bilingual Evaluation Understudy) is a metric for evaluating a generated sentence to a reference sentence. It is widely used in Machine Translation to measure how close the machine output is to human translation.",
    "difficulty": "medium",
    "tags": ["NLP Tasks", "Metrics"]
  },
  {
    "id": "nlp-genai-045",
    "question": "What is 'Extractive Summarization'?",
    "options": [
      "Generating new sentences to summarize the text",
      "Selecting and stitching together important sentences directly from the original text",
      "Extracting keywords only",
      "Translating the summary"
    ],
    "correctAnswer": 1,
    "explanation": "Extractive summarization works by identifying the most important sentences in the source text and concatenating them to form a summary, without modifying the wording.",
    "difficulty": "medium",
    "tags": ["NLP Tasks", "Summarization"]
  },
  {
    "id": "nlp-genai-046",
    "question": "What is 'Abstractive Summarization'?",
    "options": [
      "Selecting sentences from the text",
      "Generating new sentences that capture the main ideas, potentially using words not in the original text",
      "Summarizing abstract art",
      "Removing abstract concepts"
    ],
    "correctAnswer": 1,
    "explanation": "Abstractive summarization involves understanding the core meaning of the text and generating a new, concise summary that paraphrases the content, similar to how a human would summarize.",
    "difficulty": "medium",
    "tags": ["NLP Tasks", "Summarization"]
  },
  {
    "id": "nlp-genai-047",
    "question": "Which task involves assigning a predefined category or label to a piece of text?",
    "options": [
      "Text Generation",
      "Text Classification",
      "Text Clustering",
      "Text Segmentation"
    ],
    "correctAnswer": 1,
    "explanation": "Text classification is the process of categorizing text into organized groups. Examples include spam detection (spam vs. not spam) and topic categorization (sports, politics, tech).",
    "difficulty": "easy",
    "tags": ["NLP Tasks", "Classification"]
  },
  {
    "id": "nlp-genai-048",
    "question": "What is 'Coreference Resolution'?",
    "options": [
      "Resolving conflicts in code",
      "Finding all expressions that refer to the same entity in a text (e.g., 'Obama' and 'he')",
      "Translating references",
      "Linking to external websites"
    ],
    "correctAnswer": 1,
    "explanation": "Coreference resolution is the task of finding all expressions that refer to the same entity in a text. For example, determining that 'he' in a second sentence refers to 'John' in the first sentence.",
    "difficulty": "hard",
    "tags": ["NLP Tasks", "Coreference"]
  },
  {
    "id": "nlp-genai-049",
    "question": "What is Part-of-Speech (POS) Tagging?",
    "options": [
      "Tagging people in photos",
      "Assigning grammatical categories (noun, verb, adjective, etc.) to each word in a text",
      "Identifying the sentiment of a speech",
      "Translating speech to text"
    ],
    "correctAnswer": 1,
    "explanation": "POS tagging is the process of marking up a word in a text (corpus) as corresponding to a particular part of speech, based on both its definition and its context.",
    "difficulty": "easy",
    "tags": ["NLP Tasks", "POS Tagging"]
  },
  {
    "id": "nlp-genai-050",
    "question": "What is the 'ROUGE' metric primarily used for?",
    "options": [
      "Evaluating Text Summarization",
      "Evaluating Image Generation",
      "Evaluating Audio Quality",
      "Evaluating Code Generation"
    ],
    "correctAnswer": 0,
    "explanation": "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is a set of metrics used to evaluate automatic summarization and machine translation software in NLP. It compares an automatically produced summary or translation against a set of human-produced reference summaries.",
    "difficulty": "medium",
    "tags": ["NLP Tasks", "Metrics"]
  }
]
