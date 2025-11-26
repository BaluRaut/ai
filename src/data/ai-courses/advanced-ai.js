const advancedAI = {
  id: 'advanced-ai',
  title: 'Advanced AI',
  description: 'NLP, LLMs, RAG, AI Agents, and MLOps',
  level: 'Professional',
  estimatedHours: 30,
  topics: [
    {
      id: 1,
      title: 'Natural Language Processing (NLP)',
      description: 'Teaching computers to understand human language',
      
      overview: `NLP enables computers to read, understand, and generate human language. From Google Translate to ChatGPT, it powers text analysis, sentiment detection, question answering, and language generation. It's challenging because language is ambiguous, context-dependent, and culturally nuanced.

Core tasks include tokenization (splitting text into words), part-of-speech tagging, named entity recognition (finding names, places), sentiment analysis, and machine translation. Modern NLP uses transformers (BERT, GPT) that understand context bidirectionally, replacing older methods like Bag-of-Words.

NLP pipelines typically: clean text → tokenize → embed words as vectors → apply ML model → interpret results. Libraries like spaCy and NLTK provide pre-built tools. Hugging Face transformers library gives access to thousands of pre-trained models ready to use.`,

      keyPoints: [
        'Enables computers to understand and generate human language',
        'Core tasks: tokenization, NER, sentiment, translation, generation',
        'Modern NLP uses transformers (BERT, GPT) for context understanding',
        'spaCy, NLTK for traditional NLP; Hugging Face for transformers',
        'Applications: chatbots, translation, sentiment analysis, summarization'
      ],

      useCases: [
        {
          title: 'Sentiment Analysis',
          description: 'Detect emotions in customer reviews',
          example: 'Amazon analyzing millions of product reviews to identify issues'
        },
        {
          title: 'Chatbots',
          description: 'Customer service automation',
          example: 'Banking chatbots handling 80% of customer queries'
        },
        {
          title: 'Machine Translation',
          description: 'Translate between languages',
          example: 'Google Translate supporting 133+ languages'
        },
        {
          title: 'Named Entity Recognition',
          description: 'Extract names, places, organizations',
          example: 'News agencies auto-tagging articles with people and locations'
        }
      ],

      codeExamples: [
        {
          title: 'Sentiment Analysis with Transformers',
          code: `from transformers import pipeline

# Load pre-trained sentiment model
classifier = pipeline("sentiment-analysis")

# Analyze text
texts = [
    "This product is amazing! Best purchase ever.",
    "Terrible quality. Waste of money.",
    "It's okay, nothing special."
]

for text in texts:
    result = classifier(text)[0]
    print(f"{text}")
    print(f"  → {result['label']}: {result['score']:.2%}\\n")

# Output:
# This product is amazing! → POSITIVE: 99.98%
# Terrible quality. → NEGATIVE: 99.95%
# It's okay → NEUTRAL: 68.23%`,
          language: 'python'
        }
      ],

      dos: [
        'Use pre-trained models from Hugging Face (saves weeks of training)',
        'Clean text: lowercase, remove special chars, handle emojis',
        'Use spaCy for production (fast), NLTK for learning',
        'Fine-tune pre-trained models on your specific domain'
      ],

      donts: [
        'Don\'t train from scratch - use transfer learning',
        'Don\'t ignore language-specific preprocessing (stemming, lemmatization)',
        'Don\'t forget to handle out-of-vocabulary words',
        'Don\'t use outdated methods (Bag-of-Words) for complex tasks'
      ],

      bestPractices: [
        'Start with pre-trained transformers (bert-base, distilbert)',
        'Use Hugging Face tokenizers - handle subword tokenization properly',
        'For production, optimize with ONNX or quantization',
        'Evaluate with domain-specific test sets, not generic benchmarks'
      ],

      quiz: [
        {
          question: 'What is tokenization in NLP?',
          options: [
            'Encrypting text for security',
            'Splitting text into words or subwords',
            'Translating between languages',
            'Detecting sentiment'
          ],
          correctAnswer: 1,
          explanation: 'Tokenization is the process of breaking text into smaller units (tokens) like words, subwords, or characters - the first step in most NLP pipelines.'
        }
      ]
    },

    {
      id: 2,
      title: 'Word Embeddings',
      description: 'Converting words to meaningful vectors',
      
      overview: `Word embeddings represent words as dense vectors (e.g., 300 dimensions) where similar words have similar vectors. "king" is close to "queen", "man" is close to "woman". This captures semantic relationships: king - man + woman ≈ queen. It's the foundation of modern NLP.

Traditional one-hot encoding represents words as sparse vectors: [0,0,1,0,0,...] - no meaning captured. Embeddings like Word2Vec, GloVe, and FastText learn from billions of words, discovering that "dog" and "puppy" appear in similar contexts, so they should be similar vectors.

Modern transformers (BERT, GPT) create contextualized embeddings - "bank" has different vectors in "river bank" vs "money bank". This context-awareness dramatically improves understanding. Pre-trained embeddings are available for free and can be fine-tuned for your domain.`,

      keyPoints: [
        'Represent words as dense vectors (e.g., 300D) capturing meaning',
        'Similar words have similar vectors (semantic similarity)',
        'Word2Vec, GloVe, FastText are classic embeddings',
        'BERT/GPT create contextualized embeddings (same word, different contexts)',
        'Pre-trained embeddings available for 100+ languages'
      ],

      useCases: [
        {
          title: 'Semantic Search',
          description: 'Find similar documents by meaning',
          example: 'Search "cheap laptop" finds "affordable computer"'
        },
        {
          title: 'Recommendation Systems',
          description: 'Recommend similar content',
          example: 'YouTube suggesting videos based on title similarity'
        },
        {
          title: 'Text Classification',
          description: 'Features for ML models',
          example: 'Spam detection using email embeddings'
        }
      ],

      codeExamples: [
        {
          title: 'Using Pre-trained Word2Vec Embeddings',
          code: `from gensim.models import KeyedVectors
import numpy as np

# Load pre-trained embeddings (download once)
# model = KeyedVectors.load_word2vec_format('GoogleNews-vectors.bin', binary=True)

# For demo, using smaller model
from gensim.downloader import load
model = load('glove-wiki-gigaword-50')  # 50D vectors

# Find similar words
similar = model.most_similar('king', topn=3)
print("Similar to 'king':", similar)

# Word arithmetic: king - man + woman ≈ queen
result = model.most_similar(
    positive=['king', 'woman'],
    negative=['man'],
    topn=1
)
print("\\nking - man + woman =", result[0][0])

# Similarity between words
similarity = model.similarity('dog', 'puppy')
print(f"\\nSimilarity(dog, puppy): {similarity:.2f}")

# Output:
# Similar to 'king': [('prince', 0.82), ('queen', 0.75), ...]
# king - man + woman = queen
# Similarity(dog, puppy): 0.76`,
          language: 'python'
        }
      ],

      dos: [
        'Use pre-trained embeddings (Word2Vec, GloVe, FastText)',
        'For modern tasks, use BERT/GPT embeddings via Hugging Face',
        'Fine-tune embeddings on domain-specific text',
        'Use cosine similarity to measure word similarity'
      ],

      donts: [
        'Don\'t train embeddings from scratch with small data (<10M words)',
        'Don\'t use one-hot encoding for NLP - loses all semantic meaning',
        'Don\'t ignore out-of-vocabulary words - use FastText (handles subwords)',
        'Don\'t use static embeddings for context-dependent tasks'
      ],

      bestPractices: [
        'Start with pre-trained: GloVe (classic), BERT (contextual)',
        'Use sentence transformers for sentence-level embeddings',
        'Combine multiple embeddings for better coverage',
        'Visualize embeddings with t-SNE or UMAP to verify quality'
      ],

      quiz: [
        {
          question: 'What is the key advantage of word embeddings over one-hot encoding?',
          options: [
            'Faster computation',
            'Captures semantic relationships between words',
            'Uses less memory',
            'Works only in English'
          ],
          correctAnswer: 1,
          explanation: 'Word embeddings capture semantic meaning - similar words have similar vectors. One-hot encoding treats all words as equally different with no semantic relationships.'
        }
      ]
    },

    {
      id: 3,
      title: 'BERT & Transformers',
      description: 'Bidirectional context understanding',
      
      overview: `BERT (Bidirectional Encoder Representations from Transformers) revolutionized NLP in 2018. Unlike previous models that read text left-to-right, BERT reads both directions simultaneously. In "I love programming in ___", it understands "programming" AND "in" to predict "Python", not just left context.

BERT is pre-trained on massive text (Wikipedia + Books) using masked language modeling: randomly mask 15% of words, predict them. This teaches deep understanding of language. You can fine-tune BERT for your task (classification, NER, QA) with just 1,000-10,000 labeled examples.

Transformers architecture (attention mechanism) replaced RNNs. Attention lets model focus on relevant words: in "The animal didn't cross the street because it was too tired", attention connects "it" to "animal", not "street". BERT, GPT, T5 all use transformers - it's the backbone of modern AI.`,

      keyPoints: [
        'Bidirectional: reads text both left-to-right and right-to-left',
        'Pre-trained on massive text via masked language modeling',
        'Fine-tune with small labeled data (1K-10K examples)',
        'Transformers use attention to focus on relevant context',
        'BERT for understanding, GPT for generation'
      ],

      useCases: [
        {
          title: 'Question Answering',
          description: 'Find answers in documents',
          example: 'Google Search using BERT to understand search intent'
        },
        {
          title: 'Text Classification',
          description: 'Categorize documents with high accuracy',
          example: 'Email classification (spam, important, promotional)'
        },
        {
          title: 'Named Entity Recognition',
          description: 'Extract entities with context understanding',
          example: 'Medical NER extracting diseases, symptoms, treatments'
        },
        {
          title: 'Semantic Search',
          description: 'Search by meaning, not keywords',
          example: 'E-commerce finding products by description similarity'
        }
      ],

      codeExamples: [
        {
          title: 'Question Answering with BERT',
          code: `from transformers import pipeline

# Load pre-trained BERT QA model
qa_pipeline = pipeline("question-answering")

# Context and question
context = """
BERT was created by Google in 2018. It uses transformers 
architecture with bidirectional training. BERT achieved 
state-of-the-art results on 11 NLP tasks.
"""

questions = [
    "When was BERT created?",
    "Who created BERT?",
    "What architecture does BERT use?"
]

for question in questions:
    result = qa_pipeline(question=question, context=context)
    print(f"Q: {question}")
    print(f"A: {result['answer']} (confidence: {result['score']:.2%})\\n")

# Output:
# Q: When was BERT created?
# A: 2018 (confidence: 98.45%)
#
# Q: Who created BERT?
# A: Google (confidence: 97.23%)`,
          language: 'python'
        }
      ],

      dos: [
        'Use pre-trained BERT models from Hugging Face (bert-base, distilbert)',
        'Fine-tune on your domain data for best results',
        'Use DistilBERT for faster inference (60% faster, 97% accuracy)',
        'Batch inputs for efficiency (8-32 samples per batch)'
      ],

      donts: [
        'Don\'t use BERT for text generation - use GPT instead',
        'Don\'t exceed max sequence length (512 tokens) - truncate properly',
        'Don\'t forget to tokenize with BERT\'s specific tokenizer',
        'Don\'t train from scratch - always fine-tune pre-trained model'
      ],

      bestPractices: [
        'Start with distilbert-base-uncased (faster, good accuracy)',
        'For domain-specific tasks, try domain BERT (BioBERT, FinBERT)',
        'Use learning rate warmup and gradual decay when fine-tuning',
        'Monitor validation loss to prevent overfitting during fine-tuning'
      ],

      quiz: [
        {
          question: 'What makes BERT "bidirectional"?',
          options: [
            'It can translate between two languages',
            'It reads text both left-to-right and right-to-left simultaneously',
            'It has two layers',
            'It uses two GPUs'
          ],
          correctAnswer: 1,
          explanation: 'BERT is bidirectional because it reads and understands text from both directions at once, using context from both left and right sides to understand each word.'
        }
      ]
    },

    {
      id: 4,
      title: 'Large Language Models (LLMs)',
      description: 'GPT, Claude, Gemini - the AI revolution',
      
      overview: `LLMs like GPT-4, Claude, and Gemini are massive neural networks (100B+ parameters) trained on trillions of words from the internet. They can write essays, code, answer questions, translate, summarize - all from simple text prompts. They're generative: they create new text, not just classify existing text.

Training cost: GPT-4 estimated at $100M+. They use transformer architecture with decoder (predicts next word). Training is unsupervised: given "The cat sat on the ___", predict "mat". After pre-training on massive text, they're fine-tuned with human feedback (RLHF) to follow instructions safely.

LLMs show emergent abilities: at sufficient scale, they gain reasoning, few-shot learning, and instruction following without being explicitly trained for it. They're not perfect - they hallucinate (make up facts), have biases, and lack true understanding - but they're incredibly powerful tools when used correctly.`,

      keyPoints: [
        'Massive models (100B+ parameters) trained on trillions of tokens',
        'Generate text, code, translations - not just classify',
        'Use transformer decoders (predict next token)',
        'Fine-tuned with human feedback (RLHF) for safety and helpfulness',
        'Show emergent abilities: reasoning, few-shot learning'
      ],

      useCases: [
        {
          title: 'Code Generation',
          description: 'Write code from natural language',
          example: 'GitHub Copilot generating functions from comments'
        },
        {
          title: 'Content Creation',
          description: 'Write articles, emails, marketing copy',
          example: 'Marketing teams using ChatGPT for ad copy drafts'
        },
        {
          title: 'Customer Support',
          description: 'Answer customer questions intelligently',
          example: 'AI chatbots handling complex support queries'
        },
        {
          title: 'Data Analysis',
          description: 'Analyze and summarize data',
          example: 'Summarizing research papers, extracting key insights'
        }
      ],

      codeExamples: [
        {
          title: 'Using OpenAI GPT API',
          code: `from openai import OpenAI

client = OpenAI(api_key="your-api-key")

# Simple completion
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful Python tutor."},
        {"role": "user", "content": "Explain list comprehension in Python"}
    ],
    temperature=0.7,
    max_tokens=200
)

print(response.choices[0].message.content)

# Few-shot learning (examples in prompt)
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "Extract sentiment from reviews."},
        {"role": "user", "content": "Review: Amazing product!\\nSentiment:"},
        {"role": "assistant", "content": "Positive"},
        {"role": "user", "content": "Review: Terrible experience.\\nSentiment:"},
        {"role": "assistant", "content": "Negative"},
        {"role": "user", "content": "Review: It's okay, nothing special.\\nSentiment:"}
    ]
)

print(response.choices[0].message.content)  # "Neutral"`,
          language: 'python'
        }
      ],

      dos: [
        'Use clear, specific prompts (prompt engineering is crucial)',
        'Provide examples in prompt for better results (few-shot learning)',
        'Set temperature=0 for deterministic outputs, 0.7-1.0 for creativity',
        'Use system messages to set behavior and constraints'
      ],

      donts: [
        'Don\'t trust outputs blindly - verify facts (hallucination risk)',
        'Don\'t send sensitive data without data privacy agreements',
        'Don\'t use for critical decisions without human review',
        'Don\'t ignore cost - API calls add up quickly at scale'
      ],

      bestPractices: [
        'Start with GPT-3.5 for cost-effective testing, use GPT-4 for quality',
        'Implement retrieval-augmented generation (RAG) for factual accuracy',
        'Use streaming for better UX (show responses as they generate)',
        'Monitor token usage and implement rate limiting'
      ],

      quiz: [
        {
          question: 'What is "hallucination" in LLMs?',
          options: [
            'When the model is too slow',
            'When the model generates false or made-up information',
            'When the model refuses to answer',
            'When the model uses too much memory'
          ],
          correctAnswer: 1,
          explanation: 'Hallucination occurs when LLMs confidently generate false information or make up facts that sound plausible but are incorrect. Always verify important claims.'
        }
      ]
    },

    {
      id: 5,
      title: 'Retrieval-Augmented Generation (RAG)',
      description: 'Combining LLMs with external knowledge',
      
      overview: `RAG solves LLM hallucination by grounding responses in real documents. Instead of relying only on training data (which becomes outdated), RAG retrieves relevant documents from a knowledge base and includes them in the prompt. The LLM then answers based on these retrieved facts.

How it works: (1) User asks question, (2) Convert question to embedding vector, (3) Search vector database for similar documents, (4) Include top 3-5 documents in LLM prompt, (5) LLM generates answer citing the documents. This ensures factual accuracy and allows easy source verification.

RAG is essential for enterprise AI: customer support (answer from docs), legal (cite regulations), healthcare (reference medical literature). It keeps knowledge current without retraining - just update the document database. Libraries like LangChain and LlamaIndex make RAG implementation straightforward.`,

      keyPoints: [
        'Retrieves relevant docs, includes them in LLM prompt for accuracy',
        'Solves hallucination by grounding in real sources',
        'Vector database stores doc embeddings for fast similarity search',
        'LLM cites sources, making answers verifiable',
        'Knowledge stays current without model retraining'
      ],

      useCases: [
        {
          title: 'Customer Support',
          description: 'Answer questions from product documentation',
          example: 'Chatbot retrieving relevant help articles to answer queries'
        },
        {
          title: 'Legal Analysis',
          description: 'Answer citing specific regulations',
          example: 'Legal AI retrieving relevant case law for queries'
        },
        {
          title: 'Research Assistant',
          description: 'Summarize academic papers',
          example: 'Scientist asking questions, system citing relevant papers'
        },
        {
          title: 'Internal Knowledge Base',
          description: 'Company-specific Q&A',
          example: 'Employee chatbot answering from company wiki/docs'
        }
      ],

      codeExamples: [
        {
          title: 'Simple RAG with LangChain',
          code: `from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

# 1. Load and split documents
loader = TextLoader("company_docs.txt")
documents = loader.load()

splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = splitter.split_documents(documents)

# 2. Create vector database
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(chunks, embeddings)

# 3. Create RAG chain
llm = ChatOpenAI(model="gpt-4", temperature=0)
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
    return_source_documents=True
)

# 4. Ask questions
question = "What is our return policy?"
result = qa_chain({"query": question})

print("Answer:", result["result"])
print("\\nSources:")
for doc in result["source_documents"]:
    print(f"- {doc.metadata['source']}: {doc.page_content[:100]}...")`,
          language: 'python'
        }
      ],

      dos: [
        'Chunk documents (500-1000 tokens) with overlap (100-200 tokens)',
        'Use quality embeddings (OpenAI, Cohere, or sentence-transformers)',
        'Retrieve 3-5 most relevant chunks, not everything',
        'Show sources to users for transparency and verification'
      ],

      donts: [
        'Don\'t use RAG for general knowledge - LLM alone is faster',
        'Don\'t retrieve too many chunks - context window is limited',
        'Don\'t skip chunk overlap - maintains context across boundaries',
        'Don\'t forget to update vector DB when documents change'
      ],

      bestPractices: [
        'Use hybrid search (vector + keyword) for better retrieval',
        'Implement re-ranking to improve top results quality',
        'Monitor retrieval quality - log when RAG fails to find relevant docs',
        'Use metadata filtering (date, category) to narrow search space'
      ],

      quiz: [
        {
          question: 'What is the main benefit of RAG over standard LLMs?',
          options: [
            'Faster response time',
            'Grounds responses in retrieved documents, reducing hallucination',
            'Uses less memory',
            'Works without internet'
          ],
          correctAnswer: 1,
          explanation: 'RAG retrieves relevant documents and includes them in the prompt, ensuring the LLM answers based on actual sources rather than potentially hallucinated information.'
        }
      ]
    },

    {
      id: 6,
      title: 'AI Agents',
      description: 'Autonomous AI systems that take actions',
      
      overview: `AI Agents are autonomous systems that perceive environment, make decisions, and take actions to achieve goals. Unlike simple chatbots that just respond, agents can use tools (search web, run code, call APIs), plan multi-step tasks, and iteratively work toward solutions.

Think of an agent as: (1) Brain = LLM for reasoning, (2) Tools = functions it can call (calculator, search, database query), (3) Memory = conversation history + long-term storage, (4) Planning = breaks complex tasks into steps. Ask "book me cheapest flight to Paris" - it searches flights, compares prices, books ticket, confirms.

Frameworks like LangChain, AutoGPT, and CrewAI enable agent building. They handle tool calling, memory management, and planning loops. Agents are emerging as the next AI paradigm - from passive answering to active problem-solving. They're already automating customer support, data analysis, and research tasks.`,

      keyPoints: [
        'Autonomous systems that perceive, decide, and act to achieve goals',
        'Can use tools: search, code execution, API calls, database queries',
        'Plan multi-step tasks and iterate based on results',
        'Components: LLM (brain), Tools (actions), Memory (context)',
        'Frameworks: LangChain, AutoGPT, CrewAI for building agents'
      ],

      useCases: [
        {
          title: 'Customer Support Agent',
          description: 'Handle complex queries end-to-end',
          example: 'Agent checking order status, processing refunds, updating tickets'
        },
        {
          title: 'Research Assistant',
          description: 'Gather and analyze information',
          example: 'Agent searching papers, summarizing findings, creating reports'
        },
        {
          title: 'Code Assistant',
          description: 'Write, test, and debug code autonomously',
          example: 'Agent generating code, running tests, fixing bugs iteratively'
        },
        {
          title: 'Data Analysis Agent',
          description: 'Analyze data and create visualizations',
          example: 'Agent loading CSV, analyzing trends, generating charts'
        }
      ],

      codeExamples: [
        {
          title: 'Simple Agent with LangChain',
          code: `from langchain.agents import initialize_agent, Tool
from langchain.agents import AgentType
from langchain.chat_models import ChatOpenAI
from langchain.tools import DuckDuckGoSearchRun

# Define tools the agent can use
search = DuckDuckGoSearchRun()

tools = [
    Tool(
        name="Search",
        func=search.run,
        description="Search the internet for current information"
    ),
    Tool(
        name="Calculator",
        func=lambda x: eval(x),
        description="Perform mathematical calculations. Input: mathematical expression"
    )
]

# Create agent with tools
llm = ChatOpenAI(model="gpt-4", temperature=0)
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

# Agent autonomously decides which tools to use
result = agent.run(
    "What is the current population of India times 0.15?"
)

# Agent flow:
# 1. Uses Search tool: "current population of India"
# 2. Gets result: ~1.4 billion
# 3. Uses Calculator: "1400000000 * 0.15"
# 4. Returns final answer: ~210 million

print(result)`,
          language: 'python'
        }
      ],

      dos: [
        'Clearly define tool descriptions - agent uses them to decide which tool',
        'Implement safety guardrails (rate limits, approval for critical actions)',
        'Give agents clear, specific goals and success criteria',
        'Log agent decisions and tool calls for debugging'
      ],

      donts: [
        'Don\'t give agents unrestricted access to sensitive systems',
        'Don\'t expect perfection - agents make mistakes, plan for it',
        'Don\'t create circular tool dependencies',
        'Don\'t skip error handling in tool implementations'
      ],

      bestPractices: [
        'Start with ReAct pattern (Reasoning + Acting) for reliability',
        'Use structured outputs for tool calls (JSON schemas)',
        'Implement human-in-the-loop for high-stakes decisions',
        'Monitor costs - agent loops can consume many tokens'
      ],

      quiz: [
        {
          question: 'What distinguishes AI Agents from regular chatbots?',
          options: [
            'They are faster',
            'They can autonomously use tools and take actions',
            'They use less memory',
            'They only work in English'
          ],
          correctAnswer: 1,
          explanation: 'AI Agents can perceive, reason, plan, and autonomously use tools (search, APIs, code execution) to achieve goals, unlike chatbots that only respond to queries.'
        }
      ]
    },

    {
      id: 7,
      title: 'Prompt Engineering',
      description: 'The art of communicating with LLMs effectively',
      
      overview: `Prompt Engineering is designing inputs to get better LLM outputs. A good prompt can improve accuracy from 40% to 90%. Techniques include: clear instructions, examples (few-shot), chain-of-thought (step-by-step reasoning), role prompting ("You are an expert..."), and output formatting.

Poor prompt: "Translate this." Good prompt: "You are a professional translator. Translate the following English text to Spanish, maintaining formal tone and cultural context: [text]". Specificity matters! Include: role, task, context, examples, format, constraints.

Advanced techniques: Chain-of-Thought (CoT) adds "Let's think step-by-step" for complex reasoning. Tree-of-Thought explores multiple reasoning paths. Self-consistency runs same prompt multiple times, picks consensus answer. Prompt engineering is still evolving - it's part art, part science.`,

      keyPoints: [
        'Designing prompts to maximize LLM output quality',
        'Key elements: role, task, context, examples, format, constraints',
        'Few-shot: provide 2-5 examples in prompt',
        'Chain-of-Thought: "think step-by-step" for complex reasoning',
        'Can improve accuracy from 40% to 90%+'
      ],

      useCases: [
        {
          title: 'Code Generation',
          description: 'Get working code from descriptions',
          example: 'Detailed specs with input/output examples → correct code'
        },
        {
          title: 'Data Extraction',
          description: 'Extract structured data from text',
          example: 'Extract person names, dates, amounts from invoices'
        },
        {
          title: 'Content Moderation',
          description: 'Classify content accurately',
          example: 'Few-shot examples → consistent toxicity classification'
        },
        {
          title: 'Complex Reasoning',
          description: 'Solve multi-step problems',
          example: 'Math word problems with chain-of-thought prompting'
        }
      ],

      codeExamples: [
        {
          title: 'Prompt Engineering Techniques',
          code: `# BAD: Vague prompt
prompt_bad = "Analyze this review"

# GOOD: Specific prompt with structure
prompt_good = """You are a sentiment analysis expert.

Task: Analyze the customer review below and provide:
1. Overall sentiment (Positive/Neutral/Negative)
2. Key topics mentioned
3. Specific issues or praise
4. Recommendation for customer support team

Review: {review_text}

Provide response in JSON format:
{
  "sentiment": "...",
  "topics": [...],
  "details": "...",
  "recommendation": "..."
}"""

# FEW-SHOT: Provide examples
prompt_fewshot = """Extract person names from text.

Example 1:
Text: "John Smith met with Dr. Sarah Johnson yesterday."
Names: ["John Smith", "Sarah Johnson"]

Example 2:
Text: "The CEO, Michael Chen, announced the merger."
Names: ["Michael Chen"]

Now extract from:
Text: "{new_text}"
Names:"""

# CHAIN-OF-THOUGHT: Step-by-step reasoning
prompt_cot = """Solve this problem step-by-step:

Problem: A store has 45 apples. They sell 60% in the morning and 
30% of the remainder in the afternoon. How many apples are left?

Let's solve this step-by-step:
1. First, calculate apples sold in morning: 45 * 0.60 = 27 apples
2. Apples remaining after morning: 45 - 27 = 18 apples
3. Apples sold in afternoon: 18 * 0.30 = 5.4 ≈ 5 apples
4. Final apples left: 18 - 5 = 13 apples

Answer: 13 apples

Now solve this similarly:
Problem: {new_problem}
"""`,
          language: 'python'
        }
      ],

      dos: [
        'Be specific and detailed - ambiguity leads to inconsistent outputs',
        'Provide 2-5 examples for few-shot learning (quality over quantity)',
        'Use delimiters (""", ###, <>) to separate sections clearly',
        'Specify output format (JSON, list, table) explicitly'
      ],

      donts: [
        'Don\'t assume the LLM knows context - state it explicitly',
        'Don\'t use contradictory instructions in same prompt',
        'Don\'t make prompts unnecessarily long - be concise but complete',
        'Don\'t forget to test prompts on edge cases'
      ],

      bestPractices: [
        'Start simple, add complexity only if needed',
        'Use system messages for persistent behavior/role',
        'Test prompts with diverse inputs to find failure modes',
        'Version control your prompts - track what works'
      ],

      quiz: [
        {
          question: 'What is "few-shot learning" in prompt engineering?',
          options: [
            'Using short prompts',
            'Providing examples in the prompt',
            'Running the model multiple times',
            'Using small models'
          ],
          correctAnswer: 1,
          explanation: 'Few-shot learning provides 2-5 examples in the prompt showing the task format and expected output, helping the LLM understand what you want without fine-tuning.'
        }
      ]
    },

    {
      id: 8,
      title: 'MLOps - ML Operations',
      description: 'Deploying and managing ML in production',
      
      overview: `MLOps brings DevOps practices to machine learning: version control for models, automated pipelines, monitoring, and reproducibility. It bridges the gap between data science (Jupyter notebooks) and production (reliable, scalable systems). 90% of ML models never reach production - MLOps fixes this.

Key components: (1) Experiment tracking (track every model version, parameters, metrics), (2) Model registry (central repository for models), (3) CI/CD pipelines (automated training, testing, deployment), (4) Monitoring (track performance, data drift), (5) Feature stores (manage and share features across teams).

Tools: MLflow (tracking, registry), Kubeflow (pipelines on Kubernetes), DVC (data version control), Weights & Biases (experiment tracking), Airflow (orchestration). MLOps ensures models are reproducible, tested, monitored, and easily rolled back if issues arise. It's essential for production ML.`,

      keyPoints: [
        'DevOps for machine learning: automation, monitoring, reproducibility',
        'Components: experiment tracking, model registry, CI/CD, monitoring',
        'Ensures models are versioned, tested, and production-ready',
        'Tools: MLflow, Kubeflow, DVC, W&B, Airflow',
        '90% of models fail to reach production - MLOps solves this'
      ],

      useCases: [
        {
          title: 'Model Versioning',
          description: 'Track all model versions and reproduce results',
          example: 'MLflow tracking 100+ experiments, parameters, and metrics'
        },
        {
          title: 'Automated Retraining',
          description: 'Retrain models on fresh data automatically',
          example: 'Daily retraining pipeline for recommendation system'
        },
        {
          title: 'A/B Testing',
          description: 'Deploy multiple model versions, compare performance',
          example: 'Testing new model on 10% traffic before full rollout'
        },
        {
          title: 'Model Governance',
          description: 'Audit, compliance, and explainability',
          example: 'Banking tracking all model decisions for regulatory compliance'
        }
      ],

      codeExamples: [
        {
          title: 'MLflow Experiment Tracking',
          code: `import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Set experiment
mlflow.set_experiment("customer_churn_prediction")

# Start run
with mlflow.start_run(run_name="random_forest_v1"):
    # Log parameters
    n_estimators = 100
    max_depth = 10
    mlflow.log_param("n_estimators", n_estimators)
    mlflow.log_param("max_depth", max_depth)
    
    # Train model
    model = RandomForestClassifier(
        n_estimators=n_estimators,
        max_depth=max_depth,
        random_state=42
    )
    model.fit(X_train, y_train)
    
    # Log metrics
    train_acc = accuracy_score(y_train, model.predict(X_train))
    test_acc = accuracy_score(y_test, model.predict(X_test))
    mlflow.log_metric("train_accuracy", train_acc)
    mlflow.log_metric("test_accuracy", test_acc)
    
    # Log model
    mlflow.sklearn.log_model(model, "random_forest_model")
    
    # Log artifacts (plots, data samples)
    import matplotlib.pyplot as plt
    # ... create plot ...
    plt.savefig("feature_importance.png")
    mlflow.log_artifact("feature_importance.png")

print(f"Model logged to MLflow UI: http://localhost:5000")

# Later: Load best model from registry
model_uri = "models:/customer_churn_model/production"
model = mlflow.sklearn.load_model(model_uri)`,
          language: 'python'
        }
      ],

      dos: [
        'Track every experiment - parameters, metrics, code version',
        'Use model registry to manage production/staging/archived models',
        'Automate testing: unit tests, integration tests, data validation',
        'Version data alongside models (DVC or similar)'
      ],

      donts: [
        'Don\'t deploy models without monitoring - they degrade over time',
        'Don\'t skip experiment tracking - "I forgot what worked" is common',
        'Don\'t ignore data versioning - models depend on specific data',
        'Don\'t manually deploy models - automate with CI/CD'
      ],

      bestPractices: [
        'Start with MLflow for tracking and registry (free, easy)',
        'Implement automated retraining when performance drops',
        'Use feature stores (Feast, Tecton) to share features across teams',
        'Create deployment checklists: tests passed, monitoring ready, rollback plan'
      ],

      quiz: [
        {
          question: 'What is the main goal of MLOps?',
          options: [
            'Make models more accurate',
            'Bridge gap between data science and production deployment',
            'Reduce training time',
            'Increase dataset size'
          ],
          correctAnswer: 1,
          explanation: 'MLOps applies DevOps practices to ML, ensuring models are versioned, tested, monitored, and reliably deployed to production - bridging the gap between data science experiments and production systems.'
        }
      ]
    },

    {
      id: 9,
      title: 'Model Deployment',
      description: 'Getting ML models into production',
      
      overview: `Model Deployment is making your trained model available for real-time predictions or batch processing. Options include: REST API (Flask, FastAPI), serverless (AWS Lambda), containers (Docker + Kubernetes), edge deployment (TensorFlow Lite, ONNX), and batch processing (Spark, Airflow).

Deployment patterns: (1) Real-time API: user requests → instant prediction (fraud detection), (2) Batch: process millions overnight (email recommendations), (3) Edge: run on device without internet (mobile apps), (4) Streaming: process data streams (IoT sensors). Each has different latency, throughput, and infrastructure needs.

Challenges: model serialization, dependency management, scaling, latency requirements, A/B testing, rollbacks. Use Docker for consistency (same environment everywhere), load balancers for scaling, monitoring for performance. Modern platforms like AWS SageMaker, GCP Vertex AI, Azure ML simplify deployment dramatically.`,

      keyPoints: [
        'Making trained models available for predictions in production',
        'Patterns: Real-time API, Batch processing, Edge, Streaming',
        'Tools: Flask/FastAPI, Docker, Kubernetes, AWS Lambda',
        'Challenges: serialization, scaling, latency, version management',
        'Cloud platforms (SageMaker, Vertex AI) simplify deployment'
      ],

      useCases: [
        {
          title: 'Real-time API',
          description: 'Instant predictions via HTTP endpoint',
          example: 'Fraud detection API processing transactions in <100ms'
        },
        {
          title: 'Batch Predictions',
          description: 'Process millions of records overnight',
          example: 'Daily customer churn predictions for entire user base'
        },
        {
          title: 'Edge Deployment',
          description: 'Run models on mobile/IoT devices',
          example: 'Face recognition on smartphone camera (offline)'
        },
        {
          title: 'Streaming',
          description: 'Process real-time data streams',
          example: 'Anomaly detection on sensor data streams'
        }
      ],

      codeExamples: [
        {
          title: 'FastAPI Model Deployment',
          code: `from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

# Load trained model
model = joblib.load("model.pkl")

app = FastAPI(title="Customer Churn Prediction API")

# Request schema
class CustomerData(BaseModel):
    age: int
    tenure_months: int
    monthly_charges: float
    total_charges: float
    contract_type: str

# Health check
@app.get("/health")
def health():
    return {"status": "healthy", "model_version": "v1.2.0"}

# Prediction endpoint
@app.post("/predict")
def predict(customer: CustomerData):
    # Prepare features
    features = np.array([[
        customer.age,
        customer.tenure_months,
        customer.monthly_charges,
        customer.total_charges,
        1 if customer.contract_type == "month-to-month" else 0
    ]])
    
    # Get prediction and probability
    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0]
    
    return {
        "will_churn": bool(prediction),
        "churn_probability": float(probability[1]),
        "model_version": "v1.2.0"
    }

# Run with: uvicorn main:app --reload
# Test: curl -X POST "http://localhost:8000/predict" \\
#   -H "Content-Type: application/json" \\
#   -d '{"age": 45, "tenure_months": 12, ...}'`,
          language: 'python'
        }
      ],

      dos: [
        'Use FastAPI for production APIs (fast, auto documentation)',
        'Containerize with Docker for consistency across environments',
        'Implement health checks and version endpoints',
        'Add input validation and error handling'
      ],

      donts: [
        'Don\'t use Flask in production without proper WSGI server (use Gunicorn)',
        'Don\'t forget to set timeouts - some predictions take time',
        'Don\'t expose internal errors to users - log them, return generic message',
        'Don\'t deploy without load testing - know your limits'
      ],

      bestPractices: [
        'Use async endpoints (FastAPI) for I/O-bound operations',
        'Implement model caching if preprocessing is expensive',
        'Add monitoring: latency, throughput, error rate',
        'Use blue-green deployment for zero-downtime updates'
      ],

      quiz: [
        {
          question: 'When should you use batch prediction instead of real-time API?',
          options: [
            'When predictions need to be instant',
            'When processing millions of records that don\'t need immediate results',
            'When the model is very small',
            'Never, APIs are always better'
          ],
          correctAnswer: 1,
          explanation: 'Batch prediction is ideal for processing large volumes of data that don\'t require immediate results, like daily email recommendations or monthly customer segmentation.'
        }
      ]
    },

    {
      id: 10,
      title: 'Model Monitoring',
      description: 'Tracking ML performance in production',
      
      overview: `Model Monitoring tracks model performance after deployment. Models degrade over time due to data drift (input distribution changes), concept drift (relationship between input and output changes), and data quality issues. Without monitoring, you won't know your 95% accurate model dropped to 70%.

Key metrics: (1) Model performance (accuracy, precision, recall) - requires ground truth labels, (2) Data drift (input distribution changed?) - detect with statistical tests, (3) Prediction drift (output distribution changed?), (4) System metrics (latency, throughput, errors). Set alerts when metrics cross thresholds.

Tools: Evidently AI (drift detection), WhyLabs (monitoring platform), Grafana/Prometheus (system metrics), custom dashboards. Best practice: monitor actively for first month post-deployment, then switch to weekly checks + alerts. Retrain models when performance degrades significantly (e.g., accuracy drops >5%).`,

      keyPoints: [
        'Track model performance, data drift, and system health in production',
        'Models degrade: data drift, concept drift, data quality issues',
        'Metrics: accuracy (needs labels), data drift (statistical tests), latency',
        'Tools: Evidently AI, WhyLabs, Prometheus, Grafana',
        'Set alerts, retrain when performance drops significantly'
      ],

      useCases: [
        {
          title: 'Data Drift Detection',
          description: 'Detect when input distribution changes',
          example: 'E-commerce detecting shift in customer demographics post-campaign'
        },
        {
          title: 'Performance Degradation',
          description: 'Track accuracy over time',
          example: 'Fraud detection accuracy dropping from 95% to 85% over 3 months'
        },
        {
          title: 'Anomaly Detection',
          description: 'Catch unusual prediction patterns',
          example: 'Suddenly 80% of predictions are positive (data issue?)'
        },
        {
          title: 'A/B Test Monitoring',
          description: 'Compare model versions in production',
          example: 'Model v2 has 2% higher accuracy but 50ms higher latency'
        }
      ],

      codeExamples: [
        {
          title: 'Data Drift Detection with Evidently',
          code: `from evidently.report import Report
from evidently.metric_preset import DataDriftPreset
import pandas as pd

# Reference data (training data)
reference_data = pd.read_csv("training_data.csv")

# Current production data (last week)
current_data = pd.read_csv("production_data_week_42.csv")

# Generate drift report
report = Report(metrics=[
    DataDriftPreset()
])

report.run(
    reference_data=reference_data,
    current_data=current_data,
    column_mapping=None
)

# Save HTML report
report.save_html("drift_report_week_42.html")

# Get drift results programmatically
results = report.as_dict()
dataset_drift = results['metrics'][0]['result']['dataset_drift']

if dataset_drift:
    print("⚠️  Data drift detected!")
    print("Drifted features:")
    for feature, details in results['metrics'][0]['result']['drift_by_columns'].items():
        if details['drift_detected']:
            print(f"  - {feature}: drift score = {details['drift_score']:.3f}")
    
    # Trigger retraining pipeline
    # retrain_model()
else:
    print("✅ No significant data drift")

# Log to monitoring system
import logging
logging.info(f"Drift check: {dataset_drift}, features: {len(reference_data.columns)}")`,
          language: 'python'
        }
      ],

      dos: [
        'Monitor both model metrics (accuracy) and data metrics (drift)',
        'Set up automated alerts for metric thresholds',
        'Compare current data to training data distribution regularly',
        'Log predictions and features for post-hoc analysis'
      ],

      donts: [
        'Don\'t wait for user complaints to detect issues',
        'Don\'t only monitor system metrics (latency) - track ML metrics too',
        'Don\'t ignore gradual degradation - 1% per month adds up',
        'Don\'t forget to collect ground truth labels for accuracy tracking'
      ],

      bestPractices: [
        'Monitor daily for first month, then weekly + alerts',
        'Use statistical tests (KS test, PSI) for drift detection',
        'Create monitoring dashboards (Grafana) for visibility',
        'Document model retraining triggers (e.g., accuracy <90%, drift >0.3)'
      ],

      quiz: [
        {
          question: 'What is "data drift" in ML monitoring?',
          options: [
            'When the model gets slower',
            'When input data distribution changes over time',
            'When the code has bugs',
            'When predictions are wrong'
          ],
          correctAnswer: 1,
          explanation: 'Data drift occurs when the statistical distribution of input features changes over time, potentially degrading model performance since it was trained on different data.'
        }
      ]
    }
  ]
};

export { advancedAI };
