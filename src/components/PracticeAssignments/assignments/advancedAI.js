// Practice Assignments - Advanced AI (Expert Level)

export const advancedAIAssignments = {
  // NLP (ID: 1)
  '1': [
    {
      id: 1,
      title: 'Text Preprocessing',
      difficulty: 'Easy',
      description: 'Build NLP preprocessing pipeline.',
      hints: [
        'Tokenize: split into words',
        'Remove stopwords',
        'Lowercase and remove punctuation'
      ],
      starterCode: `import re

text = """Natural Language Processing enables computers 
to understand human language. It's used in chatbots!"""

# TODO: Lowercase
# TODO: Remove punctuation
# TODO: Tokenize
# TODO: Remove stopwords
stopwords = {'is', 'a', 'the', 'to', 'in', 'and', 'it'}

print("Preprocessed tokens:")`,
      solution: `import re

text = """Natural Language Processing enables computers 
to understand human language. It's used in chatbots!"""

# Lowercase
text_lower = text.lower()

# Remove punctuation
text_clean = re.sub(r'[^a-z\\s]', '', text_lower)

# Tokenize
tokens = text_clean.split()

# Remove stopwords
stopwords = {'is', 'a', 'the', 'to', 'in', 'and', 'it'}
filtered = [w for w in tokens if w not in stopwords]

print(f"Original: {len(text.split())} words")
print(f"After preprocessing: {len(filtered)} tokens")
print(f"Tokens: {filtered}")`
    },
    {
      id: 2,
      title: 'TF-IDF',
      difficulty: 'Medium',
      description: 'Implement TF-IDF from scratch.',
      hints: [
        'TF = term frequency in document',
        'IDF = log(N/df)',
        'TF-IDF = TF * IDF'
      ],
      starterCode: `from collections import Counter
import math

documents = [
    "machine learning is great",
    "deep learning is part of machine learning",
    "neural networks power deep learning"
]

def compute_tf(doc):
    words = doc.lower().split()
    return {w: c/len(words) for w, c in Counter(words).items()}

def compute_idf(docs, vocab):
    # TODO: Implement IDF
    pass

def compute_tfidf(docs):
    # TODO: Combine TF and IDF
    pass

print("TF-IDF Analysis:")`,
      solution: `from collections import Counter
import math

documents = [
    "machine learning is great",
    "deep learning is part of machine learning",
    "neural networks power deep learning"
]

def compute_tf(doc):
    words = doc.lower().split()
    return {w: c/len(words) for w, c in Counter(words).items()}

def compute_idf(docs, vocab):
    N = len(docs)
    idf = {}
    for word in vocab:
        df = sum(1 for doc in docs if word in doc.lower())
        idf[word] = math.log(N / df) if df > 0 else 0
    return idf

def compute_tfidf(docs):
    vocab = set()
    for doc in docs:
        vocab.update(doc.lower().split())
    
    idf = compute_idf(docs, vocab)
    tfidf = []
    for doc in docs:
        tf = compute_tf(doc)
        row = {w: tf.get(w, 0) * idf[w] for w in vocab}
        tfidf.append(row)
    return tfidf, vocab

tfidf, vocab = compute_tfidf(documents)

print("TF-IDF Analysis:")
for i, doc in enumerate(documents):
    top = sorted(tfidf[i].items(), key=lambda x: -x[1])[:3]
    print(f"\\nDoc {i+1}: {doc[:30]}...")
    print(f"  Top words: {[(w, round(s,3)) for w,s in top]}")`
    }
  ],

  // Word Embeddings (ID: 2)
  '2': [
    {
      id: 1,
      title: 'Word Similarity',
      difficulty: 'Medium',
      description: 'Calculate word similarity with embeddings.',
      hints: [
        'Cosine similarity: dot(A,B)/(||A||*||B||)',
        'Similar words have high similarity',
        'Range: -1 to 1'
      ],
      starterCode: `import numpy as np

# Simulated word embeddings
embeddings = {
    'king': np.array([0.5, 0.7, 0.1]),
    'queen': np.array([0.6, 0.65, 0.3]),
    'man': np.array([0.4, 0.5, -0.1]),
    'woman': np.array([0.5, 0.45, 0.1]),
}

def cosine_similarity(a, b):
    # TODO: Implement
    pass

# TODO: Find most similar to 'king'
print("Most similar to 'king':")`,
      solution: `import numpy as np

embeddings = {
    'king': np.array([0.5, 0.7, 0.1]),
    'queen': np.array([0.6, 0.65, 0.3]),
    'man': np.array([0.4, 0.5, -0.1]),
    'woman': np.array([0.5, 0.45, 0.1]),
}

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

def find_similar(word, embeddings):
    target = embeddings[word]
    sims = [(w, cosine_similarity(target, v)) 
            for w, v in embeddings.items() if w != word]
    return sorted(sims, key=lambda x: -x[1])

print("Word Similarity:")
for word in ['king', 'woman']:
    print(f"\\nMost similar to '{word}':")
    for w, sim in find_similar(word, embeddings):
        print(f"  {w}: {sim:.3f}")

# Word arithmetic
result = embeddings['king'] - embeddings['man'] + embeddings['woman']
best = max(embeddings.items(), key=lambda x: cosine_similarity(result, x[1]))
print(f"\\nking - man + woman = {best[0]}")`
    }
  ],

  // LLMs (ID: 4)
  '4': [
    {
      id: 1,
      title: 'Temperature Sampling',
      difficulty: 'Medium',
      description: 'Understand LLM temperature parameter.',
      hints: [
        'Temperature controls randomness',
        'Low temp = deterministic',
        'High temp = creative'
      ],
      starterCode: `import numpy as np

def softmax_temperature(logits, temp=1.0):
    scaled = logits / temp
    exp_scaled = np.exp(scaled - np.max(scaled))
    return exp_scaled / exp_scaled.sum()

logits = np.array([2.5, 1.8, 1.5, 0.5])
tokens = ['the', 'a', 'an', 'this']

# TODO: Compare temperatures 0.1, 1.0, 2.0
for temp in [0.1, 1.0, 2.0]:
    probs = softmax_temperature(logits, temp)
    print(f"\\nTemp={temp}:")`,
      solution: `import numpy as np

def softmax_temperature(logits, temp=1.0):
    scaled = logits / temp
    exp_scaled = np.exp(scaled - np.max(scaled))
    return exp_scaled / exp_scaled.sum()

logits = np.array([2.5, 1.8, 1.5, 0.5])
tokens = ['the', 'a', 'an', 'this']

print("Temperature Sampling:")
print(f"Logits: {dict(zip(tokens, logits))}")

for temp in [0.1, 1.0, 2.0]:
    probs = softmax_temperature(logits, temp)
    print(f"\\nTemp={temp}:")
    for tok, prob in zip(tokens, probs):
        bar = '*' * int(prob * 30)
        print(f"  {tok:5s}: {prob:.3f} {bar}")

print("\\nLow temp = predictable, High temp = creative")`
    }
  ],

  // RAG (ID: 5)
  '5': [
    {
      id: 1,
      title: 'Simple RAG System',
      difficulty: 'Hard',
      description: 'Build basic retrieval system.',
      hints: [
        'Embed documents and query',
        'Find most similar documents',
        'Use retrieved context'
      ],
      starterCode: `import numpy as np

documents = [
    "Python was created by Guido van Rossum.",
    "Machine learning uses algorithms to learn from data.",
    "TensorFlow and PyTorch are deep learning frameworks.",
]

# Simple BOW embedding
def embed(text, vocab):
    words = text.lower().split()
    vec = np.array([words.count(w) for w in vocab])
    return vec / (np.linalg.norm(vec) + 1e-8)

# TODO: Create vocab and embed documents
# TODO: Retrieve most relevant for query

query = "What frameworks are used for deep learning?"
print(f"Query: {query}")`,
      solution: `import numpy as np

documents = [
    "Python was created by Guido van Rossum.",
    "Machine learning uses algorithms to learn from data.",
    "TensorFlow and PyTorch are deep learning frameworks.",
]

def create_vocab(docs):
    vocab = set()
    for doc in docs:
        vocab.update(doc.lower().split())
    return sorted(vocab)

def embed(text, vocab):
    words = text.lower().split()
    vec = np.array([words.count(w) for w in vocab])
    norm = np.linalg.norm(vec)
    return vec / norm if norm > 0 else vec

def cosine_sim(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b) + 1e-8)

def retrieve(query, docs, doc_embeds, vocab, top_k=2):
    query_embed = embed(query, vocab)
    scores = [(doc, cosine_sim(query_embed, emb)) 
              for doc, emb in zip(docs, doc_embeds)]
    return sorted(scores, key=lambda x: -x[1])[:top_k]

vocab = create_vocab(documents)
doc_embeds = [embed(doc, vocab) for doc in documents]

query = "What frameworks are used for deep learning?"
print(f"Query: {query}\\n")
print("Retrieved documents:")
for doc, score in retrieve(query, documents, doc_embeds, vocab):
    print(f"  [{score:.3f}] {doc}")`
    }
  ],

  // Prompt Engineering (ID: 7)
  '7': [
    {
      id: 1,
      title: 'Prompt Templates',
      difficulty: 'Easy',
      description: 'Create effective prompt templates.',
      hints: [
        'Be specific and clear',
        'Provide examples (few-shot)',
        'Set context and role'
      ],
      starterCode: `# Prompt engineering patterns

def zero_shot(task, text):
    return f"{task}\\n\\nText: {text}\\n\\nAnswer:"

def few_shot(task, examples, text):
    prompt = task + "\\n\\n"
    for inp, out in examples:
        prompt += f"Text: {inp}\\nAnswer: {out}\\n\\n"
    prompt += f"Text: {text}\\nAnswer:"
    return prompt

# TODO: Create prompts for sentiment analysis
task = "Classify sentiment as positive, negative, or neutral."
examples = [("I love this!", "positive"), ("Terrible!", "negative")]
test = "The movie was okay."

print("Zero-shot:")
print(zero_shot(task, test))`,
      solution: `def zero_shot(task, text):
    return f"{task}\\n\\nText: {text}\\n\\nAnswer:"

def few_shot(task, examples, text):
    prompt = task + "\\n\\n"
    for inp, out in examples:
        prompt += f"Text: {inp}\\nAnswer: {out}\\n\\n"
    prompt += f"Text: {text}\\nAnswer:"
    return prompt

def chain_of_thought(question):
    return f"Question: {question}\\n\\nLet's think step by step:"

task = "Classify sentiment as positive, negative, or neutral."
examples = [("I love this!", "positive"), ("Terrible!", "negative")]
test = "The movie was okay."

print("1. ZERO-SHOT:")
print("-" * 30)
print(zero_shot(task, test))

print("\\n2. FEW-SHOT:")
print("-" * 30)
print(few_shot(task, examples, test))

print("\\n3. CHAIN-OF-THOUGHT:")
print("-" * 30)
print(chain_of_thought("If I have 5 apples and give away 2, how many left?"))

print("\\nGood prompts: Clear, specific, with examples!")`
    }
  ]
};
