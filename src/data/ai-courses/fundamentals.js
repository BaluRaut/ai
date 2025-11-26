const fundamentals = {
  topics: [
    {
      id: 'what-is-ai',
      title: 'What is Artificial Intelligence?',
      description: 'Understanding AI, its types, and real-world applications',
      difficulty: 'Beginner',
      estimatedTime: 30,
      prerequisites: [],
      content: {
        overview: 'Artificial Intelligence (AI) is the simulation of human intelligence in machines programmed to think and learn. It encompasses everything from simple automation to complex decision-making systems. AI has transformed industries from healthcare to entertainment, making it one of the most important technologies of our time.',
        keyPoints: [
          'AI mimics human cognitive functions like learning and problem-solving',
          'Three types: Narrow AI (current), General AI (future), Super AI (theoretical)',
          'Machine Learning is a subset of AI that learns from data',
          'Deep Learning uses neural networks to process complex patterns',
          'AI is used in smartphones, recommendations, autonomous vehicles, and more'
        ],
        useCases: [
          {
            title: 'Virtual Assistants',
            description: 'Siri, Alexa, Google Assistant use NLP to understand voice commands',
            example: 'Ask "What\'s the weather?" and AI processes language, fetches data, and responds'
          },
          {
            title: 'Recommendation Systems',
            description: 'Netflix, YouTube, Amazon suggest content based on your preferences',
            example: 'Watch action movies → AI learns preference → Recommends similar content'
          },
          {
            title: 'Medical Diagnosis',
            description: 'AI analyzes medical images to detect diseases early',
            example: 'Scan X-rays for cancer with 95%+ accuracy, faster than humans'
          },
          {
            title: 'Self-Driving Cars',
            description: 'Tesla, Waymo use AI to navigate roads autonomously',
            example: 'Computer vision + sensors detect pedestrians, traffic signs, obstacles'
          }
        ],
        dos: [
          'Start with understanding basic concepts before diving into code',
          'Explore different AI applications to see what interests you',
          'Learn Python - it\'s the most popular AI programming language',
          'Practice with real-world datasets',
          'Stay updated with latest AI developments'
        ],
        donts: [
          'Don\'t expect to build complex AI overnight - it takes time',
          'Don\'t skip the math fundamentals (statistics, linear algebra)',
          'Don\'t rely only on theory - practical implementation is crucial',
          'Don\'t ignore ethical implications of AI systems',
          'Don\'t get overwhelmed - take one concept at a time'
        ],
        bestPractices: [
          'Follow a structured learning path from basics to advanced',
          'Build small projects to reinforce learning',
          'Join AI communities and forums for support',
          'Read research papers to understand cutting-edge work',
          'Experiment with different AI tools and frameworks'
        ],
        codeExamples: [
          {
            title: 'Your First AI Program - Simple Prediction',
            code: `# Simple AI: Linear relationship prediction
# Without any ML library - just pure logic

# Training data: hours studied vs exam score
hours = [1, 2, 3, 4, 5, 6, 7, 8]
scores = [50, 55, 60, 65, 70, 75, 80, 85]

# Simple AI: Find pattern (roughly 5 points per hour + 45 base)
def predict_score(study_hours):
    base_score = 45
    points_per_hour = 5
    predicted = base_score + (study_hours * points_per_hour)
    return predicted

# Test predictions
print("If you study 3 hours:", predict_score(3))  # ~60
print("If you study 9 hours:", predict_score(9))  # ~90

# This is AI at its core: learning patterns from data!`,
            explanation: 'This simple example shows AI\'s core concept: finding patterns in data to make predictions. Real AI uses sophisticated math, but the principle is the same!'
          }
        ]
      },
      quiz: [
        {
          question: 'What is the main difference between AI and Machine Learning?',
          options: [
            'They are exactly the same thing',
            'ML is a subset of AI that learns from data',
            'AI is a subset of ML',
            'They are completely unrelated'
          ],
          correctAnswer: 1,
          explanation: 'Machine Learning is a subset of Artificial Intelligence. AI is the broader concept of machines being able to carry out tasks intelligently, while ML is a specific approach to achieve AI by learning from data.'
        },
        {
          question: 'Which type of AI exists today?',
          options: [
            'Super AI',
            'General AI',
            'Narrow AI',
            'All of the above'
          ],
          correctAnswer: 2,
          explanation: 'Narrow AI (or Weak AI) is what exists today. It\'s designed to perform specific tasks like voice recognition, image classification, or playing chess. General AI and Super AI are theoretical concepts.'
        },
        {
          question: 'What is a real-world application of AI?',
          options: [
            'Calculator apps',
            'Static websites',
            'Recommendation systems',
            'Text editors'
          ],
          correctAnswer: 2,
          explanation: 'Recommendation systems (like Netflix, YouTube, Amazon) are real AI applications that learn from your behavior to suggest relevant content. Calculators and text editors are traditional software without learning capabilities.'
        }
      ]
    },

    {
      id: 'ai-ml-dl-differences',
      title: 'AI vs ML vs Deep Learning',
      description: 'Understanding the relationship between AI, Machine Learning, and Deep Learning',
      difficulty: 'Beginner',
      estimatedTime: 25,
      prerequisites: ['what-is-ai'],
      content: {
        overview: 'AI, ML, and DL are related but distinct concepts. Think of them as nested dolls: AI is the outermost layer (broadest concept), Machine Learning sits inside AI, and Deep Learning is a specialized technique within ML. Understanding these distinctions is crucial for navigating the AI landscape.',
        
        diagram: {
          type: 'nested-circles',
          title: 'The Relationship Between AI, ML, and Deep Learning',
          description: 'AI is the broadest field, ML is a subset of AI, and DL is a subset of ML',
          layers: [
            { label: 'Artificial Intelligence', color: '#FF6B6B', description: 'Machines that can perform intelligent tasks' },
            { label: 'Machine Learning', color: '#4ECDC4', description: 'Systems that learn from data' },
            { label: 'Deep Learning', color: '#A78BFA', description: 'Neural networks with multiple layers' }
          ]
        },

        comparisonTable: {
          title: 'AI vs Machine Learning vs Deep Learning',
          headers: ['Aspect', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning'],
          rows: [
            ['Definition', 'Machines performing intelligent tasks', 'Systems learning from data without explicit programming', 'Neural networks with multiple layers learning hierarchical features'],
            ['Scope', 'Broadest - includes all intelligent systems', 'Subset of AI focused on learning', 'Subset of ML using neural networks'],
            ['Approach', 'Can use rules, logic, ML, or other methods', 'Statistical algorithms and pattern recognition', 'Artificial neural networks inspired by brain'],
            ['Data Requirements', 'Varies (can work with little or no data)', 'Moderate datasets (hundreds to thousands)', 'Large datasets (thousands to millions)'],
            ['Examples', 'Rule-based chatbots, game AI, expert systems', 'Spam filters, recommendation systems, linear regression', 'Image recognition, speech synthesis, language models'],
            ['Programming', 'Manually programmed rules and logic', 'Algorithm learns patterns from labeled data', 'Network learns features automatically'],
            ['Human Intervention', 'High - rules defined by humans', 'Medium - features often engineered by humans', 'Low - automatically discovers features'],
            ['Computing Power', 'Low to moderate', 'Moderate', 'High - requires GPUs/TPUs'],
            ['Interpretability', 'High - rules are explicit', 'Medium - can inspect learned patterns', 'Low - "black box" behavior']
          ]
        },

        keyPoints: [
          'AI: Broad field of making machines intelligent',
          'ML: Subset of AI that learns patterns from data without explicit programming',
          'DL: Subset of ML using neural networks with multiple layers',
          'AI can exist without ML (rule-based systems)',
          'DL requires large amounts of data and computing power'
        ],
        useCases: [
          {
            title: 'AI without ML: Rule-Based Chatbot',
            description: 'Simple if-then rules handle conversations',
            example: 'If user says "hello" → respond "Hi there!". No learning involved.'
          },
          {
            title: 'Machine Learning: Spam Filter',
            description: 'Learns to identify spam from labeled examples',
            example: 'Train on 10,000 emails (spam/not spam) → Predicts new emails accurately'
          },
          {
            title: 'Deep Learning: Image Recognition',
            description: 'Neural networks identify objects in photos',
            example: 'Show 1M cat pictures → Network learns features → Recognizes cats in new photos'
          }
        ],
        codeExamples: [
          {
            title: 'Comparison: Rule-Based vs ML vs DL',
            code: `# 1. AI (Rule-Based) - No learning
def rule_based_spam_detector(email):
    spam_words = ['win', 'free', 'click here', 'urgent']
    for word in spam_words:
        if word in email.lower():
            return "SPAM"
    return "NOT SPAM"

# 2. Machine Learning - Learns from data
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer

# Training data
emails = ["Win free iPhone", "Meeting at 3pm", "Click here urgent"]
labels = ["spam", "not spam", "spam"]

# ML learns patterns
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(emails)
model = MultinomialNB()
model.fit(X, labels)

# Predicts new emails
new_email = vectorizer.transform(["Free prize winner"])
print(model.predict(new_email))  # Predicts: spam

# 3. Deep Learning - Neural networks (requires more data)
# We'll cover this in Deep Learning section!`,
            explanation: 'Rule-based systems use fixed logic, ML learns patterns, and DL uses neural networks for complex patterns. Each has its place depending on the problem!'
          }
        ],
        dos: [
          'Understand when to use each approach',
          'Start with simple ML before attempting DL',
          'Use rule-based systems for well-defined problems',
          'Choose DL for complex patterns (images, audio, text)'
        ],
        donts: [
          'Don\'t use DL for simple problems that ML can solve',
          'Don\'t confuse AI terminology in conversations',
          'Don\'t assume more complex = better'
        ],
        bestPractices: [
          'Match technique to problem complexity',
          'Start simple, add complexity only if needed',
          'Consider data availability and computing resources'
        ]
      },
      quiz: [
        {
          question: 'Which statement correctly describes the relationship?',
          options: [
            'ML contains AI, which contains DL',
            'AI contains ML, which contains DL',
            'DL contains ML, which contains AI',
            'They are all separate fields'
          ],
          correctAnswer: 1,
          explanation: 'AI is the broadest field, Machine Learning is a subset of AI, and Deep Learning is a subset of Machine Learning. Think of them as nested circles.'
        }
      ]
    },

    // Topic 3: Types of AI
    {
      id: 'types-of-ai',
      title: 'Types of AI: Narrow, General, and Super AI',
      difficulty: 'Beginner',
      estimatedTime: '25 minutes',
      prerequisites: ['what-is-ai'],
      content: {
        overview: `
Artificial Intelligence can be categorized based on its capabilities and functionality. Understanding these types helps you recognize what's currently possible, what's being researched, and what remains science fiction.

**Narrow AI (Weak AI)** - This is AI designed to perform a specific task. All AI systems we use today fall into this category - from virtual assistants to recommendation engines to self-driving cars. Each excels at one task but cannot generalize to others.

**General AI (Strong AI)** - This is AI with human-level intelligence across all tasks. It can learn, understand, and apply intelligence to solve any problem that a human can. This doesn't exist yet and is the focus of ongoing research.

**Super AI** - This is AI that surpasses human intelligence in all aspects. It's purely theoretical and raises important ethical and existential questions about the future of AI.
        `,
        keyPoints: [
          'Narrow AI: Specialized in one task (all current AI)',
          'General AI: Human-level intelligence across all tasks (not yet achieved)',
          'Super AI: Exceeds human intelligence (theoretical)',
          'Current technology is exclusively Narrow AI',
          'AGI (Artificial General Intelligence) is the goal of AI research'
        ],
        useCases: [
          {
            title: 'Narrow AI Examples',
            description: 'Siri (voice assistant), AlphaGo (game playing), Tesla Autopilot (driving), ChatGPT (language), DALL-E (image generation) - each excels at its specific task'
          },
          {
            title: 'Why General AI is Hard',
            description: 'A chess AI cannot drive a car. A language model cannot diagnose diseases without specific training. Current AI lacks transfer learning and common sense reasoning'
          },
          {
            title: 'The AGI Challenge',
            description: 'Creating AI that can learn new tasks like humans do, understand context, reason abstractly, and apply knowledge across domains remains unsolved'
          }
        ],
        codeExamples: [
          {
            title: 'Narrow AI: Specialized Function',
            code: `# This spam detector ONLY detects spam - it's Narrow AI
def is_spam(email_text):
    spam_words = ['win', 'free', 'click here', 'limited time']
    score = sum(1 for word in spam_words if word in email_text.lower())
    return score >= 2

# It cannot do other tasks like translate or summarize
print(is_spam("Click here to win free money!"))  # True
print(is_spam("Meeting at 3pm tomorrow"))  # False

# Example of what General AI would do (not possible yet):
# general_ai.detect_spam(email)
# general_ai.translate(email, to='spanish')
# general_ai.write_code(prompt)
# general_ai.diagnose_disease(symptoms)
# ... any task a human can do`,
            language: 'python'
          }
        ],
        dos: [
          'Recognize that all current AI is Narrow AI',
          'Understand limitations of AI systems',
          'Don\'t expect AI to generalize beyond its training',
          'Stay informed about AGI research progress'
        ],
        donts: [
          'Don\'t expect one AI to do multiple unrelated tasks',
          'Don\'t confuse Narrow AI capabilities with human-like understanding',
          'Don\'t fear Super AI - it\'s theoretical and far from reality'
        ],
        bestPractices: [
          'Use Narrow AI for well-defined, specific problems',
          'Combine multiple Narrow AI systems for complex workflows',
          'Keep realistic expectations about AI capabilities'
        ]
      },
      quiz: [
        {
          question: 'What type of AI are all current AI systems?',
          options: [
            'General AI',
            'Super AI',
            'Narrow AI',
            'Hybrid AI'
          ],
          correctAnswer: 2,
          explanation: 'All AI systems today, including ChatGPT, self-driving cars, and virtual assistants, are Narrow AI - designed for specific tasks.'
        },
        {
          question: 'Which statement about General AI is correct?',
          options: [
            'Google Search is a General AI',
            'General AI doesn\'t exist yet',
            'ChatGPT is the first General AI',
            'General AI is less capable than Narrow AI'
          ],
          correctAnswer: 1,
          explanation: 'General AI (AGI) - AI with human-level intelligence across all tasks - has not been achieved yet. It remains a research goal.'
        }
      ]
    },

    // Topic 4: Real-World AI Applications
    {
      id: 'ai-applications',
      title: 'Real-World AI Applications Across Industries',
      difficulty: 'Beginner',
      estimatedTime: '30 minutes',
      prerequisites: ['what-is-ai', 'types-of-ai'],
      content: {
        overview: `
AI is transforming every industry imaginable. Understanding where and how AI is applied helps you identify opportunities in your field and appreciate the breadth of AI's impact on modern life.

**Healthcare**: AI analyzes medical images, predicts diseases, discovers drugs, and personalizes treatment plans. Systems can detect cancer in X-rays with accuracy matching or exceeding human radiologists.

**Finance**: AI detects fraud in real-time, trades stocks, assesses credit risk, and provides personalized financial advice. Banks use AI to prevent billions in fraudulent transactions annually.

**Transportation**: Self-driving cars, traffic optimization, route planning, and predictive maintenance. AI processes sensor data to make split-second driving decisions.

**Retail**: Recommendation engines, inventory management, price optimization, and visual search. Amazon's recommendations drive 35% of their sales through AI.

**Manufacturing**: Quality control, predictive maintenance, supply chain optimization, and robot automation. AI reduces defects and downtime significantly.
        `,
        keyPoints: [
          'Healthcare: Medical imaging, drug discovery, diagnosis',
          'Finance: Fraud detection, trading, risk assessment',
          'Transportation: Autonomous vehicles, route optimization',
          'Retail: Recommendations, inventory, customer service',
          'Manufacturing: Quality control, predictive maintenance'
        ],
        useCases: [
          {
            title: 'AI in Medical Diagnosis',
            description: 'Google\'s AI detects diabetic retinopathy from eye scans with 90%+ accuracy. IBM Watson helps oncologists identify cancer treatment options based on medical literature.'
          },
          {
            title: 'AI in Financial Fraud Detection',
            description: 'PayPal uses AI to analyze millions of transactions per second, identifying suspicious patterns and blocking fraud before it happens. Saved $2B+ annually.'
          },
          {
            title: 'AI in Content Recommendation',
            description: 'Netflix saves $1B yearly by using AI recommendations to reduce churn. 80% of watched content comes from recommendations, not search.'
          },
          {
            title: 'AI in Agriculture',
            description: 'John Deere uses computer vision to identify weeds and spray only where needed, reducing herbicide use by 90%. Drones monitor crop health using AI.'
          }
        ],
        codeExamples: [
          {
            title: 'Simple Product Recommendation System',
            code: `# Basic recommendation based on user behavior
user_purchases = {
    'Alice': ['laptop', 'mouse', 'keyboard'],
    'Bob': ['laptop', 'mouse', 'monitor'],
    'Charlie': ['keyboard', 'headphones']
}

def recommend_products(user, all_users):
    """Recommend products based on similar users"""
    user_items = set(all_users.get(user, []))
    
    # Find similar users (who bought similar items)
    recommendations = set()
    for other_user, items in all_users.items():
        if other_user != user:
            # If they share 2+ items, recommend their other items
            if len(set(items) & user_items) >= 2:
                recommendations.update(set(items) - user_items)
    
    return list(recommendations)

# Alice bought laptop, mouse, keyboard
# Bob also bought laptop and mouse, so recommend his monitor
print(recommend_products('Alice', user_purchases))
# Output: ['monitor']`,
            language: 'python'
          }
        ],
        dos: [
          'Explore AI applications in your industry',
          'Understand both benefits and limitations',
          'Consider ethical implications of AI use',
          'Stay updated on emerging AI applications'
        ],
        donts: [
          'Don\'t assume AI can solve every problem',
          'Don\'t ignore data privacy concerns',
          'Don\'t overlook the need for human oversight'
        ],
        bestPractices: [
          'Start with clear business problems AI can solve',
          'Ensure you have quality data for training',
          'Combine AI automation with human expertise',
          'Monitor AI system performance continuously'
        ]
      },
      quiz: [
        {
          question: 'How does AI help in fraud detection?',
          options: [
            'By manually reviewing every transaction',
            'By analyzing patterns in real-time to identify suspicious activity',
            'By blocking all international transactions',
            'By requiring human approval for all purchases'
          ],
          correctAnswer: 1,
          explanation: 'AI fraud detection systems analyze millions of transactions in real-time, learning normal patterns and flagging anomalies that might indicate fraud.'
        },
        {
          question: 'What percentage of Netflix content watched comes from AI recommendations?',
          options: [
            '20%',
            '50%',
            '80%',
            '95%'
          ],
          correctAnswer: 2,
          explanation: 'About 80% of content watched on Netflix comes from personalized recommendations, not from user search. This AI-driven engagement saves Netflix $1B+ annually in reduced churn.'
        }
      ]
    },

    // Topic 5: AI Ethics and Responsible AI
    {
      id: 'ai-ethics',
      title: 'AI Ethics and Responsible AI Development',
      difficulty: 'Beginner',
      estimatedTime: '30 minutes',
      prerequisites: ['what-is-ai', 'ai-applications'],
      content: {
        overview: `
As AI becomes more powerful and widespread, ethical considerations become critical. Responsible AI ensures systems are fair, transparent, accountable, and beneficial to society.

**Bias in AI**: AI systems can perpetuate or amplify human biases present in training data. A hiring AI trained on historical data might discriminate against women if past hiring was biased.

**Privacy**: AI systems often require vast amounts of personal data. Balancing AI capabilities with user privacy is a fundamental challenge.

**Transparency**: Many AI systems are "black boxes" - we don't understand how they make decisions. This lack of explainability is problematic in high-stakes domains like healthcare and criminal justice.

**Accountability**: When AI makes mistakes, who is responsible? The developer? The company? The user? Clear accountability frameworks are needed.

**Job Displacement**: AI automation may eliminate certain jobs. Society must prepare for this transition through education and policy.
        `,
        keyPoints: [
          'Bias: AI can inherit and amplify human biases from data',
          'Privacy: AI systems need data, raising privacy concerns',
          'Transparency: "Black box" AI lacks explainability',
          'Accountability: Unclear responsibility when AI fails',
          'Fairness: AI should treat all groups equitably'
        ],
        useCases: [
          {
            title: 'Facial Recognition Bias',
            description: 'Studies show facial recognition is less accurate for people with darker skin, leading to false arrests. AI systems trained primarily on lighter-skinned faces perpetuate this bias.'
          },
          {
            title: 'Hiring Algorithm Discrimination',
            description: 'Amazon scrapped an AI recruiting tool that discriminated against women. Trained on resumes from male-dominated tech industry, it penalized resumes containing the word "women\'s".'
          },
          {
            title: 'Credit Scoring Fairness',
            description: 'AI credit systems must avoid discrimination based on protected characteristics like race, gender, or zip code, while still accurately assessing risk.'
          },
          {
            title: 'Healthcare AI Transparency',
            description: 'Doctors need to understand why an AI recommends a treatment. Black-box systems without explanations are unsuitable for medical decisions.'
          }
        ],
        codeExamples: [
          {
            title: 'Detecting Bias in Data',
            code: `# Example: Checking for gender bias in salary data
import statistics

salaries_data = [
    {'gender': 'M', 'salary': 75000, 'experience': 5},
    {'gender': 'M', 'salary': 80000, 'experience': 5},
    {'gender': 'F', 'salary': 70000, 'experience': 5},
    {'gender': 'F', 'salary': 68000, 'experience': 5},
    {'gender': 'M', 'salary': 90000, 'experience': 7},
    {'gender': 'F', 'salary': 82000, 'experience': 7},
]

# Group by gender
male_salaries = [d['salary'] for d in salaries_data if d['gender'] == 'M']
female_salaries = [d['salary'] for d in salaries_data if d['gender'] == 'F']

avg_male = statistics.mean(male_salaries)
avg_female = statistics.mean(female_salaries)

print("Average Male Salary: $" + str(avg_male))
print("Average Female Salary: $" + str(avg_female))
gap_percent = ((avg_male - avg_female) / avg_female * 100)
print(f"Gender Pay Gap: {gap_percent:.1f}%")

# Output shows potential bias that AI might learn
# An AI trained on this data would perpetuate the gap`,
            language: 'python'
          }
        ],
        dos: [
          'Audit training data for biases',
          'Test AI systems on diverse populations',
          'Make AI decisions explainable when possible',
          'Establish clear accountability for AI systems',
          'Involve diverse teams in AI development'
        ],
        donts: [
          'Don\'t deploy AI without bias testing',
          'Don\'t collect more personal data than necessary',
          'Don\'t use AI for high-stakes decisions without human oversight',
          'Don\'t ignore ethical concerns for performance gains'
        ],
        bestPractices: [
          'Use diverse, representative training data',
          'Implement fairness metrics and monitoring',
          'Provide explanations for AI decisions',
          'Conduct regular ethical audits',
          'Design with privacy in mind from the start'
        ]
      },
      quiz: [
        {
          question: 'What is algorithmic bias?',
          options: [
            'When AI intentionally discriminates',
            'When AI learns and perpetuates biases present in training data',
            'When programmers deliberately add bias to code',
            'When AI refuses to make decisions'
          ],
          correctAnswer: 1,
          explanation: 'Algorithmic bias occurs when AI systems inherit biases from their training data, often unintentionally perpetuating historical discrimination or stereotypes.'
        },
        {
          question: 'Why is transparency important in AI?',
          options: [
            'To make code run faster',
            'To reduce development costs',
            'To understand and trust AI decisions, especially in critical applications',
            'To comply with open-source licenses'
          ],
          correctAnswer: 2,
          explanation: 'Transparency (explainability) allows us to understand how AI makes decisions, building trust and enabling accountability, especially critical in healthcare, finance, and justice.'
        },
        {
          question: 'What should companies do before deploying AI systems?',
          options: [
            'Test only on average cases',
            'Deploy immediately to get feedback',
            'Test on diverse populations and audit for bias',
            'Wait for government regulations'
          ],
          correctAnswer: 2,
          explanation: 'Responsible AI development requires testing on diverse populations, auditing for bias, ensuring fairness, and validating safety before deployment.'
        }
      ]
    },

    // Topic 6: Python for AI - NumPy Basics
    {
      id: 'python-numpy-basics',
      title: 'Python for AI: NumPy Fundamentals',
      difficulty: 'Beginner',
      estimatedTime: '35 minutes',
      prerequisites: ['what-is-ai'],
      content: {
        overview: `
NumPy (Numerical Python) is the foundation of data science and AI in Python. It provides powerful tools for working with arrays and matrices, which are essential for machine learning algorithms.

**Why NumPy for AI?** Machine learning works with large datasets represented as multi-dimensional arrays. NumPy makes operations on these arrays incredibly fast (often 50-100x faster than pure Python) through vectorization and optimized C code.

**Key Concepts**: Arrays are collections of numbers arranged in grids. A 1D array is like a list, a 2D array is like a table, and 3D+ arrays represent more complex data structures like images (height × width × color channels).

Every major ML library (TensorFlow, PyTorch, scikit-learn) is built on NumPy or uses NumPy-compatible arrays.
        `,
        keyPoints: [
          'NumPy arrays are faster and more memory-efficient than Python lists',
          'Vectorization allows operations on entire arrays without loops',
          'Arrays can be 1D (vectors), 2D (matrices), or higher dimensions',
          'NumPy is the foundation of pandas, TensorFlow, and scikit-learn',
          'Essential for data preprocessing, feature engineering, and model implementation'
        ],
        useCases: [
          {
            title: 'Image Data Representation',
            description: 'Images are stored as 3D NumPy arrays (height × width × RGB channels). A 100×100 color image is a (100, 100, 3) array.',
            example: 'Load image → NumPy array → Apply filters → Train CNN'
          },
          {
            title: 'Dataset Matrix Operations',
            description: 'ML datasets are 2D arrays where rows are samples and columns are features. NumPy enables fast matrix operations for training.',
            example: '1000 customers × 20 features = (1000, 20) array for predictions'
          },
          {
            title: 'Mathematical Computations',
            description: 'Linear algebra operations (dot products, matrix multiplication) are core to neural networks and are blazing fast with NumPy.',
            example: 'Compute predictions: predictions = X @ weights + bias (vectorized)'
          }
        ],
        codeExamples: [
          {
            title: 'NumPy Basics - Arrays and Operations',
            code: `import numpy as np

# Create arrays
python_list = [1, 2, 3, 4, 5]
numpy_array = np.array([1, 2, 3, 4, 5])

print("NumPy array:", numpy_array)
print("Shape:", numpy_array.shape)
print("Data type:", numpy_array.dtype)

# Vectorized operations (no loops needed!)
doubled = numpy_array * 2
squared = numpy_array ** 2
print("Doubled:", doubled)
print("Squared:", squared)

# 2D array (matrix)
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])
print("\\nMatrix shape:", matrix.shape)  # (3, 3)
print("Element at [1,2]:", matrix[1, 2])  # 6

# Useful functions
print("\\nSum:", numpy_array.sum())
print("Mean:", numpy_array.mean())
print("Max:", numpy_array.max())
print("Min:", numpy_array.min())

# Create special arrays
zeros = np.zeros((3, 4))  # 3x4 array of zeros
ones = np.ones((2, 3))    # 2x3 array of ones
random = np.random.rand(3, 3)  # 3x3 random values [0,1)

print("\\nZeros array:\\n", zeros)`,
            jsCode: `// JavaScript with TensorFlow.js
const tf = require('@tensorflow/tfjs');

// Create tensors (similar to NumPy arrays)
const array = tf.tensor1d([1, 2, 3, 4, 5]);

console.log("Tensor:", array.arraySync());
console.log("Shape:", array.shape);
console.log("Data type:", array.dtype);

// Vectorized operations
const doubled = array.mul(2);
const squared = array.square();

console.log("Doubled:", doubled.arraySync());
console.log("Squared:", squared.arraySync());

// 2D tensor (matrix)
const matrix = tf.tensor2d([[1, 2, 3],
                            [4, 5, 6],
                            [7, 8, 9]]);

console.log("\\nMatrix shape:", matrix.shape);

// Useful functions
console.log("Sum:", array.sum().arraySync());
console.log("Mean:", array.mean().arraySync());
console.log("Max:", array.max().arraySync());

// Create special tensors
const zeros = tf.zeros([3, 4]);
const ones = tf.ones([2, 3]);
const random = tf.randomUniform([3, 3]);

console.log("\\nZeros tensor:", zeros.arraySync());

// Clean up memory
array.dispose();
doubled.dispose();
squared.dispose();`
          }
        ],
        dos: [
          'Use NumPy arrays instead of Python lists for numerical data',
          'Leverage vectorization - avoid explicit loops when possible',
          'Understand array shapes - crucial for debugging ML code',
          'Use built-in functions (sum, mean, max) - they\'re optimized'
        ],
        donts: [
          'Don\'t mix Python lists and NumPy arrays unnecessarily',
          'Don\'t forget to check array shapes before operations',
          'Don\'t use loops when vectorized operations are available',
          'Don\'t modify arrays in-place unless you understand the consequences'
        ],
        bestPractices: [
          'Always check array shapes with .shape before operations',
          'Use descriptive variable names for arrays (X_train, y_test)',
          'Vectorize operations for performance gains',
          'Use random seed (np.random.seed()) for reproducible results'
        ]
      },
      quiz: [
        {
          question: 'Why is NumPy faster than Python lists for numerical operations?',
          options: [
            'It uses more memory',
            'It\'s written in Python',
            'It uses vectorization and optimized C code',
            'It has fewer features'
          ],
          correctAnswer: 2,
          explanation: 'NumPy uses vectorization (operating on entire arrays at once) and is implemented in optimized C code, making it 50-100x faster than pure Python lists for numerical operations.'
        },
        {
          question: 'What is the shape of this array: np.array([[1,2,3], [4,5,6]])?',
          options: [
            '(3, 2)',
            '(2, 3)',
            '(6,)',
            '(2, 2)'
          ],
          correctAnswer: 1,
          explanation: 'The array has 2 rows and 3 columns, so its shape is (2, 3). Shape is always (rows, columns) for 2D arrays.'
        }
      ]
    },

    // Topic 7: Python for AI - Pandas Basics
    {
      id: 'python-pandas-basics',
      title: 'Python for AI: Pandas for Data Manipulation',
      difficulty: 'Beginner',
      estimatedTime: '35 minutes',
      prerequisites: ['python-numpy-basics'],
      content: {
        overview: `
Pandas is the go-to library for data manipulation and analysis in Python. While NumPy works with arrays, Pandas works with DataFrames - spreadsheet-like structures with labeled rows and columns.

**Why Pandas for AI?** Real-world data is messy - missing values, different data types, dates, categories. Pandas makes it easy to clean, transform, and prepare data for machine learning. It's the bridge between raw data and ML-ready datasets.

**Key Concepts**: DataFrames are 2D tables with labeled columns. Each column is a Series (1D labeled array). You can filter, sort, group, merge, and transform data with simple, readable commands.

90% of a data scientist's time is spent preparing data. Pandas makes this process efficient and intuitive.
        `,
        keyPoints: [
          'DataFrames are labeled 2D tables, Series are labeled 1D arrays',
          'Handle missing data, merge datasets, group by categories',
          'Read/write CSV, Excel, JSON, SQL databases easily',
          'Filter and select data with powerful indexing',
          'Essential for data cleaning and feature engineering'
        ],
        useCases: [
          {
            title: 'Data Cleaning',
            description: 'Remove duplicates, handle missing values, convert data types, fix inconsistencies before training ML models.',
            example: 'Raw customer data → Remove nulls → Encode categories → Ready for ML'
          },
          {
            title: 'Feature Engineering',
            description: 'Create new features from existing columns: extract date parts, combine fields, calculate ratios.',
            example: 'Date column → Extract month, day, weekday → Better predictions'
          },
          {
            title: 'Exploratory Data Analysis',
            description: 'Quickly summarize data, find patterns, compute statistics, visualize distributions.',
            example: 'df.describe() shows mean, std, min, max for all numeric columns'
          }
        ],
        codeExamples: [
          {
            title: 'Pandas Basics - DataFrames and Data Manipulation',
            code: `import pandas as pd
import numpy as np

# Create DataFrame from dictionary
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 35, 28],
    'Salary': [50000, 60000, 75000, 55000],
    'Department': ['IT', 'HR', 'IT', 'Finance']
}

df = pd.DataFrame(data)
print("DataFrame:")
print(df)

# Basic info
print("\\nShape:", df.shape)  # (4, 4)
print("Columns:", df.columns.tolist())
print("\\nFirst 2 rows:")
print(df.head(2))

# Select columns
print("\\nNames:", df['Name'].tolist())
print("\\nAge and Salary:")
print(df[['Age', 'Salary']])

# Filter rows
high_earners = df[df['Salary'] > 55000]
print("\\nHigh earners:")
print(high_earners)

# Add new column
df['Salary_Thousands'] = df['Salary'] / 1000
print("\\nWith new column:")
print(df)

# Group by and aggregate
avg_by_dept = df.groupby('Department')['Salary'].mean()
print("\\nAverage salary by department:")
print(avg_by_dept)

# Statistics
print("\\nStatistics:")
print(df.describe())`,
            jsCode: `// JavaScript doesn't have a direct Pandas equivalent
// But we can use danfojs for similar functionality
const dfd = require("danfojs-node");

// Create DataFrame
const data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 35, 28],
    'Salary': [50000, 60000, 75000, 55000],
    'Department': ['IT', 'HR', 'IT', 'Finance']
};

const df = new dfd.DataFrame(data);
console.log("DataFrame:");
df.print();

// Select column
console.log("\\nNames:");
df['Name'].print();

// Filter rows
const highEarners = df.query(df['Salary'].gt(55000));
console.log("\\nHigh earners:");
highEarners.print();

// Add column
df.addColumn('Salary_K', df['Salary'].div(1000));

// Statistics
console.log("\\nStatistics:");
df.describe().print();`
          }
        ],
        dos: [
          'Use df.head() to preview data before processing',
          'Check for missing values with df.isnull().sum()',
          'Use vectorized operations instead of loops',
          'Save cleaned data to avoid re-processing'
        ],
        donts: [
          'Don\'t modify DataFrames in loops - use vectorization',
          'Don\'t ignore missing data - handle it explicitly',
          'Don\'t use iterrows() for large datasets - it\'s slow',
          'Don\'t forget to reset_index() after filtering'
        ],
        bestPractices: [
          'Always explore data first: df.info(), df.describe(), df.head()',
          'Use meaningful column names without spaces',
          'Chain operations for cleaner code: df.dropna().groupby().mean()',
          'Document data transformations for reproducibility'
        ]
      },
      quiz: [
        {
          question: 'What is the difference between a DataFrame and a Series?',
          options: [
            'No difference, they\'re the same',
            'DataFrame is 2D with labeled columns, Series is 1D',
            'Series is faster than DataFrame',
            'DataFrame can only hold numbers'
          ],
          correctAnswer: 1,
          explanation: 'A DataFrame is a 2D table with multiple labeled columns, while a Series is a 1D labeled array (essentially one column). A DataFrame is like an Excel sheet, a Series is like a single column.'
        },
        {
          question: 'How do you filter a DataFrame to show only rows where Age > 30?',
          options: [
            'df.filter(Age > 30)',
            'df[df["Age"] > 30]',
            'df.where(Age > 30)',
            'df.select(Age > 30)'
          ],
          correctAnswer: 1,
          explanation: 'Use boolean indexing: df[df["Age"] > 30]. This creates a boolean mask (True/False for each row) and returns only rows where the condition is True.'
        }
      ]
    },

    // Topic 8: Supervised vs Unsupervised Learning
    {
      id: 'supervised-vs-unsupervised',
      title: 'Supervised vs Unsupervised Learning',
      difficulty: 'Beginner',
      estimatedTime: '30 minutes',
      prerequisites: ['ai-ml-dl-differences'],
      content: {
        overview: `
Machine Learning has two main paradigms that define how models learn from data: Supervised and Unsupervised Learning.

**Supervised Learning**: You provide the model with labeled examples (input + correct answer). The model learns to map inputs to outputs. Like a student learning with answer keys - you show examples with correct answers, and the model learns the pattern.

**Unsupervised Learning**: You give the model data without labels. It finds patterns, structures, or groupings on its own. Like exploring a new city without a guide - you discover neighborhoods, patterns, and clusters yourself.

Most real-world AI applications use supervised learning because we have labeled data (spam/not spam, cat/dog images, customer churn yes/no). Unsupervised learning is powerful for discovering hidden patterns when we don't know what we're looking for.
        `,
        
        comparisonTable: {
          title: 'Supervised vs Unsupervised Learning',
          headers: ['Aspect', 'Supervised Learning', 'Unsupervised Learning'],
          rows: [
            ['Data Requirements', 'Labeled data (input + output)', 'Unlabeled data (input only)'],
            ['Goal', 'Predict outcomes for new data', 'Find hidden patterns or structure'],
            ['Learning Process', 'Learn from correct answers', 'Discover patterns independently'],
            ['Examples', 'Classification, Regression', 'Clustering, Dimensionality Reduction'],
            ['Use Cases', 'Email spam filter, Price prediction, Image recognition', 'Customer segmentation, Anomaly detection, Topic modeling'],
            ['Accuracy', 'Can measure accuracy directly', 'Harder to evaluate (no ground truth)'],
            ['Data Preparation', 'Expensive (requires labeling)', 'Cheaper (no labeling needed)'],
            ['Common Algorithms', 'Linear Regression, Decision Trees, Neural Networks', 'K-Means, PCA, Hierarchical Clustering']
          ]
        },

        keyPoints: [
          'Supervised: Learn from labeled examples (input → output)',
          'Unsupervised: Find patterns in unlabeled data',
          'Supervised needs expensive labeled data, unsupervised does not',
          'Most business applications use supervised learning',
          'Unsupervised is great for exploration and discovery'
        ],
        useCases: [
          {
            title: 'Supervised: Email Spam Detection',
            description: 'Train on thousands of emails labeled "spam" or "not spam". Model learns what makes an email spam.',
            example: 'Input: Email text → Output: Spam (Yes/No)'
          },
          {
            title: 'Supervised: House Price Prediction',
            description: 'Train on historical house sales (size, location, price). Model predicts price for new houses.',
            example: 'Input: [3 bedrooms, 2000 sqft, downtown] → Output: $450,000'
          },
          {
            title: 'Unsupervised: Customer Segmentation',
            description: 'Group customers by behavior without predefined categories. Discover customer types automatically.',
            example: 'Input: Purchase history → Output: 5 customer groups (budget shoppers, premium buyers, etc.)'
          },
          {
            title: 'Unsupervised: Anomaly Detection',
            description: 'Find unusual patterns in data without knowing what "unusual" looks like beforehand.',
            example: 'Input: Credit card transactions → Output: Flag suspicious transactions'
          }
        ],
        codeExamples: [
          {
            title: 'Supervised Learning Example - Classification',
            code: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Load labeled dataset (flowers with species labels)
iris = load_iris()
X = iris.data  # Features: sepal length, width, etc.
y = iris.target  # Labels: 0=setosa, 1=versicolor, 2=virginica

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# Train supervised model
model = DecisionTreeClassifier()
model.fit(X_train, y_train)  # Learn from labeled examples

# Predict on new data
predictions = model.predict(X_test)

# Evaluate accuracy (we have correct labels to compare)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.2f}")
print(f"Predicted species: {predictions[:5]}")
print(f"Actual species: {y_test[:5]}")`,
            jsCode: `// Supervised Learning with TensorFlow.js
const tf = require('@tensorflow/tfjs');

// Create labeled training data
const X_train = tf.tensor2d([[1, 2], [2, 3], [3, 4], [4, 5]]);
const y_train = tf.tensor2d([[0], [0], [1], [1]]); // Labels

// Build simple neural network
const model = tf.sequential({
  layers: [
    tf.layers.dense({inputShape: [2], units: 4, activation: 'relu'}),
    tf.layers.dense({units: 1, activation: 'sigmoid'})
  ]
});

model.compile({
  optimizer: 'adam',
  loss: 'binaryCrossentropy',
  metrics: ['accuracy']
});

// Train model (learn from labeled data)
await model.fit(X_train, y_train, {epochs: 50, verbose: 0});

// Predict on new data
const X_test = tf.tensor2d([[1.5, 2.5], [3.5, 4.5]]);
const predictions = model.predict(X_test);

console.log("Predictions:", predictions.arraySync());`
          },
          {
            title: 'Unsupervised Learning Example - Clustering',
            code: `from sklearn.cluster import KMeans
import numpy as np

# Unlabeled data: customer purchase amounts (no labels!)
customer_spending = np.array([
    [100, 50],   # Customer 1: [online, in-store]
    [150, 60],   # Customer 2
    [80, 40],    # Customer 3
    [1000, 500], # Customer 4
    [1200, 600], # Customer 5
    [900, 450]   # Customer 6
])

# Find 2 groups automatically (no labels needed!)
kmeans = KMeans(n_clusters=2, random_state=42)
clusters = kmeans.fit_predict(customer_spending)

print("Customer groups:", clusters)
# Output might be: [0, 0, 0, 1, 1, 1]
# Group 0: Budget shoppers, Group 1: Premium buyers

print("\\nCluster centers (average spending per group):")
print(kmeans.cluster_centers_)

# Predict cluster for new customer
new_customer = np.array([[120, 55]])
predicted_group = kmeans.predict(new_customer)
print(f"\\nNew customer belongs to group: {predicted_group[0]}")`
          }
        ],
        dos: [
          'Use supervised learning when you have labeled data',
          'Use unsupervised learning for exploration and pattern discovery',
          'Start with supervised if your goal is prediction',
          'Combine both: use unsupervised for feature engineering, then supervised for prediction'
        ],
        donts: [
          'Don\'t use supervised learning without enough labeled data',
          'Don\'t expect unsupervised learning to solve prediction problems',
          'Don\'t ignore unsupervised methods - they can reveal valuable insights',
          'Don\'t skip data exploration before choosing an approach'
        ],
        bestPractices: [
          'Choose based on your data and goal, not on what\'s trendy',
          'Unsupervised learning can help you understand your data before supervised learning',
          'Sometimes semi-supervised learning (mix of both) is best',
          'Evaluate if labeling cost is worth it for supervised learning'
        ]
      },
      quiz: [
        {
          question: 'What is the main difference between supervised and unsupervised learning?',
          options: [
            'Supervised is faster than unsupervised',
            'Supervised uses labeled data, unsupervised uses unlabeled data',
            'Supervised is more accurate',
            'Unsupervised requires more data'
          ],
          correctAnswer: 1,
          explanation: 'Supervised learning requires labeled data (input + correct output), while unsupervised learning works with unlabeled data and finds patterns on its own.'
        },
        {
          question: 'Which scenario requires supervised learning?',
          options: [
            'Grouping customers by behavior',
            'Predicting house prices from features',
            'Finding topics in documents',
            'Detecting unusual patterns'
          ],
          correctAnswer: 1,
          explanation: 'Predicting house prices requires supervised learning because we need labeled training data (houses with known prices) to learn the relationship between features and price.'
        },
        {
          question: 'What is K-Means clustering?',
          options: [
            'A supervised classification algorithm',
            'An unsupervised clustering algorithm that groups similar data',
            'A deep learning technique',
            'A data preprocessing method'
          ],
          correctAnswer: 1,
          explanation: 'K-Means is an unsupervised learning algorithm that groups similar data points into K clusters without using labels.'
        }
      ]
    },

    // Topic 9: What is Agentic AI
    {
      id: 'what-is-agentic-ai',
      title: 'What is Agentic AI? The Future of Autonomous Systems',
      difficulty: 'Beginner',
      estimatedTime: '35 minutes',
      prerequisites: ['what-is-ai', 'types-of-ai'],
      content: {
        overview: `
Agentic AI represents the next evolution in artificial intelligence - systems that can act autonomously to achieve goals, make decisions, use tools, and adapt to changing environments without constant human intervention.

**Traditional AI vs Agentic AI**: Traditional AI responds to inputs (you ask ChatGPT a question, it answers). Agentic AI takes initiative - it can break down complex goals into steps, use multiple tools, remember context, learn from feedback, and execute multi-step plans autonomously.

**Key Characteristics of Agents**:
- **Autonomy**: Can operate independently without human guidance for each step
- **Goal-Oriented**: Works toward defined objectives, not just responding to prompts
- **Tool Use**: Can access and use external tools (search, calculators, APIs, databases)
- **Planning**: Breaks complex tasks into sub-tasks and executes them in sequence
- **Memory**: Maintains context across interactions and learns from experience
- **Adaptability**: Adjusts strategy based on results and feedback

**Real-World Example**: Instead of asking "What's the weather?", you tell an agentic AI: "Plan my outdoor wedding in June." The agent checks weather patterns, finds venues, compares prices, checks availability, creates a timeline, and presents a complete plan - all autonomously.
        `,

        diagram: {
          type: 'nested-circles',
          title: 'Evolution from AI to Agentic AI',
          description: 'Agentic AI builds on traditional AI with autonomy, planning, and tool use',
          layers: [
            { label: 'Traditional AI', color: '#FF6B6B', description: 'Responds to inputs, no autonomy' },
            { label: 'AI with Tools', color: '#4ECDC4', description: 'Can use external tools and APIs' },
            { label: 'Agentic AI', color: '#A78BFA', description: 'Autonomous goal-oriented agents' }
          ]
        },

        comparisonTable: {
          title: 'Traditional AI vs Agentic AI',
          headers: ['Aspect', 'Traditional AI', 'Agentic AI'],
          rows: [
            ['Interaction Model', 'One-shot: Single input → Single output', 'Multi-step: Goal → Autonomous execution'],
            ['Autonomy', 'Requires human for each step', 'Operates independently to achieve goals'],
            ['Tool Usage', 'Limited or no tool access', 'Can use multiple tools (search, APIs, code execution)'],
            ['Planning', 'No planning capability', 'Creates and executes multi-step plans'],
            ['Memory', 'Stateless (forgets after response)', 'Maintains memory across interactions'],
            ['Adaptability', 'Fixed responses', 'Learns from feedback and adjusts approach'],
            ['Examples', 'ChatGPT (conversational), Image classifier', 'AutoGPT, BabyAGI, Customer service agents'],
            ['Use Cases', 'Q&A, Classification, Generation', 'Research, Planning, Multi-tool workflows']
          ]
        },

        keyPoints: [
          'Agentic AI can autonomously pursue goals and make decisions',
          'Agents use tools: search engines, calculators, databases, code interpreters',
          'They plan, execute, evaluate, and adapt their approach',
          'Memory allows agents to learn from past interactions',
          'Examples: AutoGPT, Devin (coding agent), customer service bots'
        ],
        useCases: [
          {
            title: 'Research Agent',
            description: 'You ask "What are the top AI trends in 2025?" Agent searches web, reads articles, compares sources, synthesizes findings, creates report.',
            example: 'Goal: Research report → Agent: Search → Read → Analyze → Summarize → Present'
          },
          {
            title: 'Coding Agent (Devin)',
            description: 'You describe a feature. Agent writes code, runs tests, debugs errors, refactors, commits to GitHub - all autonomously.',
            example: 'Goal: "Add login feature" → Agent: Plan → Code → Test → Debug → Deploy'
          },
          {
            title: 'Personal Assistant Agent',
            description: 'You say "Book a trip to Paris". Agent checks flights, hotels, creates itinerary, books reservations, adds to calendar.',
            example: 'Goal: Paris trip → Agent: Search → Compare → Book → Organize → Confirm'
          },
          {
            title: 'Customer Service Agent',
            description: 'Customer: "My order is late". Agent checks order status, finds issue, updates shipping, sends tracking, offers discount.',
            example: 'Goal: Resolve complaint → Agent: Diagnose → Act → Update → Follow-up'
          }
        ],
        codeExamples: [
          {
            title: 'Simple Agentic AI Pattern - ReAct (Reasoning + Acting)',
            code: `# Simplified agent pattern: Think → Act → Observe → Repeat
import json

class SimpleAgent:
    def __init__(self):
        self.tools = {
            'search': self.search_tool,
            'calculate': self.calculate_tool,
        }
        self.memory = []
    
    def search_tool(self, query):
        # Simulate web search
        results = {
            'weather in Paris': 'Sunny, 22°C',
            'best time to visit Paris': 'April to June or September to November'
        }
        return results.get(query, 'No results found')
    
    def calculate_tool(self, expression):
        try:
            return eval(expression)
        except:
            return 'Invalid calculation'
    
    def think(self, goal):
        """Agent decides what to do next"""
        print(f"\\n🤔 Thinking: How to achieve '{goal}'?")
        
        if 'weather' in goal.lower():
            return ('search', 'weather in Paris')
        elif 'calculate' in goal.lower() or '+' in goal:
            return ('calculate', goal.split('calculate')[-1].strip())
        else:
            return ('search', goal)
    
    def act(self, action, tool_input):
        """Execute the chosen action"""
        print(f"🔨 Acting: Using {action} with input '{tool_input}'")
        tool = self.tools.get(action)
        if tool:
            result = tool(tool_input)
            return result
        return "Tool not found"
    
    def observe(self, result):
        """Observe the result and decide if goal is achieved"""
        print(f"👁️ Observing: Got result '{result}'")
        self.memory.append(result)
        return result
    
    def run(self, goal, max_steps=3):
        """Main agent loop: Think → Act → Observe"""
        print(f"\\n🎯 Goal: {goal}")
        
        for step in range(max_steps):
            # Think: Decide next action
            action, tool_input = self.think(goal)
            
            # Act: Execute action
            result = self.act(action, tool_input)
            
            # Observe: Check result
            final_result = self.observe(result)
            
            # Check if goal achieved (simplified)
            if result != 'No results found':
                print(f"\\n✅ Goal achieved! Result: {final_result}")
                return final_result
        
        print("\\n⚠️ Max steps reached")
        return None

# Example usage
agent = SimpleAgent()

# Agent autonomously decides to search
agent.run("What's the weather in Paris?")

# Agent autonomously decides to calculate
agent.run("calculate 234 + 567")`,
            jsCode: `// Agentic AI pattern in JavaScript
class SimpleAgent {
  constructor() {
    this.tools = {
      search: this.searchTool.bind(this),
      calculate: this.calculateTool.bind(this)
    };
    this.memory = [];
  }
  
  searchTool(query) {
    const results = {
      'weather in Paris': 'Sunny, 22°C',
      'best time to visit Paris': 'April to June'
    };
    return results[query] || 'No results found';
  }
  
  calculateTool(expression) {
    try {
      return eval(expression);
    } catch {
      return 'Invalid calculation';
    }
  }
  
  think(goal) {
    console.log(\`\\n🤔 Thinking: How to achieve '\${goal}'?\`);
    
    if (goal.toLowerCase().includes('weather')) {
      return ['search', 'weather in Paris'];
    } else if (goal.includes('+') || goal.includes('calculate')) {
      const expr = goal.split('calculate').pop().trim();
      return ['calculate', expr];
    }
    return ['search', goal];
  }
  
  act(action, toolInput) {
    console.log(\`🔨 Acting: Using \${action} with input '\${toolInput}'\`);
    const tool = this.tools[action];
    return tool ? tool(toolInput) : 'Tool not found';
  }
  
  observe(result) {
    console.log(\`👁️ Observing: Got result '\${result}'\`);
    this.memory.push(result);
    return result;
  }
  
  run(goal, maxSteps = 3) {
    console.log(\`\\n🎯 Goal: \${goal}\`);
    
    for (let step = 0; step < maxSteps; step++) {
      const [action, toolInput] = this.think(goal);
      const result = this.act(action, toolInput);
      const finalResult = this.observe(result);
      
      if (result !== 'No results found') {
        console.log(\`\\n✅ Goal achieved! Result: \${finalResult}\`);
        return finalResult;
      }
    }
    
    console.log('\\n⚠️ Max steps reached');
    return null;
  }
}

// Usage
const agent = new SimpleAgent();
agent.run("What's the weather in Paris?");
agent.run("calculate 234 + 567");`
          }
        ],
        dos: [
          'Define clear goals and success criteria for agents',
          'Implement safety guardrails to prevent harmful actions',
          'Give agents access to necessary tools and APIs',
          'Monitor agent behavior and decisions',
          'Start with simple tasks before complex autonomous workflows'
        ],
        donts: [
          'Don\'t give agents unrestricted access to critical systems',
          'Don\'t skip human oversight for high-stakes decisions',
          'Don\'t expect perfect decision-making - agents can make mistakes',
          'Don\'t ignore cost - tool usage and API calls add up quickly'
        ],
        bestPractices: [
          'Use ReAct pattern: Reasoning + Acting in loops',
          'Implement memory for context retention',
          'Add feedback mechanisms for learning',
          'Set clear boundaries and constraints',
          'Log all agent actions for debugging and auditing'
        ]
      },
      quiz: [
        {
          question: 'What makes Agentic AI different from traditional AI?',
          options: [
            'It\'s more accurate',
            'It can autonomously pursue goals and use tools',
            'It\'s faster',
            'It requires less data'
          ],
          correctAnswer: 1,
          explanation: 'Agentic AI can autonomously break down goals, make decisions, use tools, and execute multi-step plans without constant human guidance - unlike traditional AI that responds to single inputs.'
        },
        {
          question: 'What is the ReAct pattern in agentic AI?',
          options: [
            'A React framework for AI',
            'Reasoning + Acting in a loop',
            'A way to train neural networks',
            'A database for agents'
          ],
          correctAnswer: 1,
          explanation: 'ReAct is a pattern where agents alternate between Reasoning (thinking about what to do) and Acting (using tools to execute actions), creating a loop until the goal is achieved.'
        },
        {
          question: 'Which is an example of agentic AI?',
          options: [
            'ChatGPT answering a single question',
            'An agent that researches, plans, and books a vacation autonomously',
            'A spam filter',
            'An image classifier'
          ],
          correctAnswer: 1,
          explanation: 'An agent that autonomously researches, plans, and books a vacation demonstrates agentic AI - it pursues a complex goal through multiple steps, using various tools without constant guidance.'
        }
      ]
    },

    // Topic 10: Data Preprocessing Fundamentals
    {
      id: 'data-preprocessing',
      title: 'Data Preprocessing: Preparing Data for AI',
      difficulty: 'Beginner',
      estimatedTime: '40 minutes',
      prerequisites: ['python-pandas-basics', 'python-numpy-basics'],
      content: {
        overview: `
**"Garbage in, garbage out"** - the most important rule in AI. Raw data is messy, incomplete, and inconsistent. Data preprocessing transforms raw data into clean, structured formats that ML models can understand.

**Why Preprocessing Matters**:
- Real-world data has missing values, outliers, inconsistent formats
- Models expect numerical input, but data has text, categories, dates
- Different features have different scales (age: 0-100, salary: 30,000-200,000)
- Without preprocessing, even the best algorithm will fail

**Common Preprocessing Steps**:
1. **Handle Missing Data**: Fill, remove, or impute missing values
2. **Encode Categorical Data**: Convert text categories to numbers
3. **Scale Features**: Normalize or standardize numerical features
4. **Remove Outliers**: Handle extreme values that skew data
5. **Split Data**: Separate into training and testing sets

**Example**: Predicting house prices with data: [3 bedrooms, "Downtown", $?, 2000 sqft]. Preprocessing: fill missing price (median), encode "Downtown" → 1, scale sqft (0-1 range), remove $10M mansion outlier.
        `,

        keyPoints: [
          'Missing data: Use mean/median/mode imputation or remove rows',
          'Categorical encoding: Label encoding (ordinal) or one-hot encoding (nominal)',
          'Feature scaling: Normalization (0-1) or standardization (mean=0, std=1)',
          'Train/test split: Essential to prevent overfitting (typically 80/20)',
          'Data preprocessing takes 70-80% of AI project time'
        ],

        useCases: [
          {
            title: 'Healthcare: Patient Risk Prediction',
            description: 'Raw data: age, blood pressure, "Male"/"Female", missing cholesterol values. Preprocessing: impute missing values, encode gender, scale measurements.',
            example: 'Before: [45, 120/80, "Male", NaN] → After: [0.45, 0.67, 1, 0.55]'
          },
          {
            title: 'E-commerce: Customer Segmentation',
            description: 'Raw data: purchase history with different currencies, "Premium"/"Basic" membership, missing email addresses. Preprocessing: convert currency, encode membership, handle missing data.',
            example: 'Before: ["$100", "Premium", NaN] → After: [100, 1, "customer@example.com"]'
          },
          {
            title: 'Finance: Credit Scoring',
            description: 'Raw data: income varies 20K-500K, employment status text, credit history has missing values. Preprocessing: scale income, encode employment, fill missing history.',
            example: 'Model accuracy: 65% (raw) → 89% (preprocessed)'
          }
        ],

        codeExamples: [
          {
            title: 'Complete Data Preprocessing Pipeline',
            code: `import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.impute import SimpleImputer

# Sample messy dataset
data = pd.DataFrame({
    'age': [25, 30, np.nan, 45, 35],
    'salary': [50000, 60000, 75000, np.nan, 65000],
    'department': ['Sales', 'IT', 'Sales', 'HR', 'IT'],
    'promoted': [0, 1, 1, 0, 1]
})

print("Original Data:")
print(data)
print(f"\\nMissing values: \\n{data.isnull().sum()}")

# Step 1: Handle missing numerical data
imputer = SimpleImputer(strategy='mean')
data[['age', 'salary']] = imputer.fit_transform(data[['age', 'salary']])

print("\\nAfter imputing missing values:")
print(data)

# Step 2: Encode categorical data (department)
label_encoder = LabelEncoder()
data['department_encoded'] = label_encoder.fit_transform(data['department'])

print("\\nAfter encoding categories:")
print(data[['department', 'department_encoded']])

# Step 3: Feature scaling
scaler = StandardScaler()
data[['age_scaled', 'salary_scaled']] = scaler.fit_transform(
    data[['age', 'salary']]
)

print("\\nAfter scaling:")
print(data[['age', 'age_scaled', 'salary', 'salary_scaled']])

# Step 4: Prepare features (X) and target (y)
X = data[['age_scaled', 'salary_scaled', 'department_encoded']]
y = data['promoted']

# Step 5: Split into training and testing sets (80/20)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(f"\\nTraining set: {len(X_train)} samples")
print(f"Testing set: {len(X_test)} samples")
print("\\n✅ Data is ready for machine learning!")`,
            jsCode: `// Data Preprocessing with TensorFlow.js and danfojs
const dfd = require("danfojs-node");
const tf = require('@tensorflow/tfjs');

// Create messy dataset
const data = new dfd.DataFrame({
  age: [25, 30, NaN, 45, 35],
  salary: [50000, 60000, 75000, NaN, 65000],
  department: ['Sales', 'IT', 'Sales', 'HR', 'IT'],
  promoted: [0, 1, 1, 0, 1]
});

console.log("Original Data:");
data.print();

// Step 1: Handle missing values (fill with mean)
data.fillna({
  columns: ["age", "salary"],
  values: [data['age'].mean(), data['salary'].mean()],
  inplace: true
});

console.log("\\nAfter filling missing values:");
data.print();

// Step 2: Encode categorical data
const labelMap = { 'Sales': 0, 'IT': 1, 'HR': 2 };
data.addColumn('department_encoded', 
  data['department'].map(d => labelMap[d])
);

// Step 3: Feature scaling (standardization)
function standardize(series) {
  const mean = series.mean();
  const std = series.std();
  return series.map(val => (val - mean) / std);
}

data.addColumn('age_scaled', standardize(data['age']));
data.addColumn('salary_scaled', standardize(data['salary']));

console.log("\\nPreprocessed Data:");
data.print();

// Step 4: Prepare for ML (convert to tensors)
const features = data[['age_scaled', 'salary_scaled', 'department_encoded']];
const target = data['promoted'];

const X = tf.tensor2d(features.values);
const y = tf.tensor2d(target.values, [target.values.length, 1]);

console.log("\\nFeatures tensor shape:", X.shape);
console.log("Target tensor shape:", y.shape);
console.log("\\n✅ Data is ready for machine learning!");`
          }
        ],

        dos: [
          'Always check for missing values before training',
          'Scale features when using distance-based algorithms (KNN, SVM)',
          'Use one-hot encoding for nominal categories (no inherent order)',
          'Split data BEFORE any preprocessing to avoid data leakage'
        ],

        donts: [
          'Don\'t remove missing data carelessly - might lose important patterns',
          'Don\'t use training data statistics on test data (causes data leakage)',
          'Don\'t forget to save preprocessing objects (scaler, encoder) for production',
          'Don\'t skip exploratory data analysis (EDA) before preprocessing'
        ],

        bestPractices: [
          'Create a preprocessing pipeline that can be reused',
          'Document all preprocessing decisions for reproducibility',
          'Handle outliers based on domain knowledge, not just statistics',
          'Always validate preprocessing results before training models'
        ]
      },

      quiz: [
        {
          question: 'Why do we need to scale features in machine learning?',
          options: [
            'To make the data look better',
            'To ensure all features contribute equally to distance calculations',
            'To reduce file size',
            'Scaling is not necessary'
          ],
          correctAnswer: 1,
          explanation: 'Feature scaling ensures that features with larger ranges don\'t dominate distance calculations in algorithms like KNN or SVM. Without scaling, a feature like "salary" (30K-200K) would overwhelm "age" (0-100).'
        },
        {
          question: 'What is the difference between label encoding and one-hot encoding?',
          options: [
            'They are the same',
            'Label encoding assigns integers, one-hot creates binary columns',
            'Label encoding is faster',
            'One-hot encoding is only for numbers'
          ],
          correctAnswer: 1,
          explanation: 'Label encoding assigns integers (0, 1, 2) to categories, which can imply order. One-hot encoding creates separate binary columns for each category, avoiding false ordinal relationships.'
        },
        {
          question: 'When should you split your data into train/test sets?',
          options: [
            'After all preprocessing',
            'Before any preprocessing',
            'It doesn\'t matter',
            'Only for large datasets'
          ],
          correctAnswer: 1,
          explanation: 'Always split data BEFORE preprocessing to avoid data leakage. If you calculate statistics (mean, std) on all data, then split, your test set is no longer truly independent.'
        }
      ]
    },

    // Topic 11: Classification vs Regression
    {
      id: 'classification-vs-regression',
      title: 'Classification vs Regression: Prediction Types',
      difficulty: 'Beginner',
      estimatedTime: '30 minutes',
      prerequisites: ['supervised-vs-unsupervised'],
      content: {
        overview: `
In supervised learning, there are two main types of prediction problems based on what you're trying to predict: **Classification** (categories) and **Regression** (continuous values).

**Classification**: Predict which category/class an input belongs to. The output is discrete - a label from a fixed set of options.
- Binary: Two classes (spam/not spam, fraud/legitimate)
- Multi-class: Multiple classes (dog/cat/bird, disease type A/B/C)

**Regression**: Predict a continuous numerical value. The output can be any number within a range.
- Examples: House price, temperature, stock price, age

**How to Choose**:
- Ask: "Am I predicting a category or a number?"
- Category → Classification (Email is spam: Yes/No)
- Number → Regression (House sells for: $425,000)

**Different Algorithms**: Classification uses logistic regression, decision trees, SVM. Regression uses linear regression, polynomial regression, regression trees. Some algorithms (like neural networks) can do both with different output layers.
        `,

        comparisonTable: {
          title: 'Classification vs Regression',
          headers: ['Aspect', 'Classification', 'Regression'],
          rows: [
            ['Output Type', 'Discrete categories/labels', 'Continuous numerical values'],
            ['Examples', 'Spam detection, Image recognition, Disease diagnosis', 'Price prediction, Temperature forecast, Age estimation'],
            ['Algorithms', 'Logistic Regression, Decision Trees, SVM, Naive Bayes', 'Linear Regression, Polynomial Regression, Ridge, Lasso'],
            ['Evaluation Metrics', 'Accuracy, Precision, Recall, F1-Score, AUC', 'MSE, RMSE, MAE, R² Score'],
            ['Output Format', 'Class label (0/1) or probability (0.0-1.0)', 'Real number (e.g., 234.56)'],
            ['Loss Function', 'Cross-Entropy Loss', 'Mean Squared Error (MSE)'],
            ['Binary Example', 'Is email spam? (Yes/No)', 'How many spam emails? (12)'],
            ['Multi-class Example', 'Animal in image? (Cat/Dog/Bird)', 'Animal age? (3.5 years)']
          ]
        },

        keyPoints: [
          'Classification: Discrete outputs (categories, labels)',
          'Regression: Continuous outputs (numbers, values)',
          'Binary classification: 2 classes (yes/no, 0/1)',
          'Multi-class classification: 3+ classes (dog/cat/bird)',
          'Same input data can be used for both - depends on what you predict'
        ],

        useCases: [
          {
            title: 'Classification: Medical Diagnosis',
            description: 'Input: Patient symptoms, test results. Output: Disease type (Healthy/Diabetes/Heart Disease). Discrete categories.',
            example: 'Input: [Age:45, BP:140, Sugar:180] → Output: "Diabetes" (Class 1)'
          },
          {
            title: 'Regression: House Price Prediction',
            description: 'Input: Square footage, bedrooms, location. Output: Exact price in dollars. Continuous value.',
            example: 'Input: [2000sqft, 3bed, Downtown] → Output: $450,000 (number)'
          },
          {
            title: 'Classification: Customer Churn',
            description: 'Input: Usage patterns, payment history. Output: Will customer leave? (Yes/No). Binary classification.',
            example: 'Input: [LowUsage, LatePayments] → Output: "Will Churn" (Class 1)'
          },
          {
            title: 'Regression: Sales Forecasting',
            description: 'Input: Historical sales, seasonality, marketing spend. Output: Predicted sales amount. Continuous.',
            example: 'Input: [Q4, $50K marketing] → Output: $1,250,000 (sales forecast)'
          }
        ],

        codeExamples: [
          {
            title: 'Classification Example - Email Spam Detection',
            code: `from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
import numpy as np

# Features: [num_exclamations, num_links, word_count]
X_train = np.array([
    [5, 10, 50],   # Spam features
    [1, 2, 100],   # Not spam
    [8, 15, 30],   # Spam
    [0, 1, 150],   # Not spam
    [10, 20, 40]   # Spam
])

# Labels: 1 = Spam, 0 = Not Spam (DISCRETE)
y_train = np.array([1, 0, 1, 0, 1])

# Train classification model
classifier = LogisticRegression()
classifier.fit(X_train, y_train)

# Predict for new emails
X_test = np.array([
    [3, 8, 60],    # Suspicious email
    [0, 1, 120]    # Normal email
])

# Output: Class labels (0 or 1)
predictions = classifier.predict(X_test)
print("Predictions:", predictions)  # [1, 0] - Spam, Not Spam

# Get probabilities
probabilities = classifier.predict_proba(X_test)
print("\\nProbabilities [Not Spam, Spam]:")
print(probabilities)

# Classification metrics
print("\\nAccuracy:", accuracy_score(y_train, classifier.predict(X_train)))`,
            jsCode: `// Classification with TensorFlow.js
const tf = require('@tensorflow/tfjs');

// Training data - features and labels (0 or 1)
const X_train = tf.tensor2d([
  [5, 10, 50],   // Spam
  [1, 2, 100],   // Not spam
  [8, 15, 30],   // Spam
  [0, 1, 150],   // Not spam
  [10, 20, 40]   // Spam
]);

const y_train = tf.tensor2d([[1], [0], [1], [0], [1]]);

// Build classification model (sigmoid for binary)
const model = tf.sequential({
  layers: [
    tf.layers.dense({inputShape: [3], units: 8, activation: 'relu'}),
    tf.layers.dense({units: 1, activation: 'sigmoid'}) // Output: 0-1
  ]
});

model.compile({
  optimizer: 'adam',
  loss: 'binaryCrossentropy', // Classification loss
  metrics: ['accuracy']
});

// Train
await model.fit(X_train, y_train, {epochs: 100, verbose: 0});

// Predict new emails
const X_test = tf.tensor2d([[3, 8, 60], [0, 1, 120]]);
const predictions = model.predict(X_test);

console.log("Predictions (probabilities):");
predictions.print(); // [0.89, 0.12] - likely spam, not spam

// Convert to class labels
const labels = predictions.greater(0.5).dataSync();
console.log("Class labels:", labels); // [1, 0]`
          },
          {
            title: 'Regression Example - House Price Prediction',
            code: `from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# Features: [sqft, bedrooms, age]
X_train = np.array([
    [1500, 3, 10],
    [2000, 4, 5],
    [1200, 2, 15],
    [2500, 4, 2],
    [1800, 3, 8]
])

# Prices in thousands (CONTINUOUS VALUES)
y_train = np.array([300, 400, 250, 500, 350])

# Train regression model
regressor = LinearRegression()
regressor.fit(X_train, y_train)

# Predict house prices
X_test = np.array([
    [1600, 3, 12],  # House 1
    [2200, 4, 3]    # House 2
])

# Output: Continuous prices (not categories!)
predictions = regressor.predict(X_test)
print("Predicted prices: $", predictions * 1000)
# Output: [320,000, 430,000] - exact numbers

# Regression metrics
train_predictions = regressor.predict(X_train)
print("\\nR² Score:", r2_score(y_train, train_predictions))
print("Mean Squared Error:", mean_squared_error(y_train, train_predictions))`,
            jsCode: `// Regression with TensorFlow.js
const tf = require('@tensorflow/tfjs');

// Training data - continuous price values
const X_train = tf.tensor2d([
  [1500, 3, 10],
  [2000, 4, 5],
  [1200, 2, 15],
  [2500, 4, 2],
  [1800, 3, 8]
]);

const y_train = tf.tensor2d([[300], [400], [250], [500], [350]]);

// Build regression model (linear output)
const model = tf.sequential({
  layers: [
    tf.layers.dense({inputShape: [3], units: 16, activation: 'relu'}),
    tf.layers.dense({units: 1}) // No activation = linear regression
  ]
});

model.compile({
  optimizer: 'adam',
  loss: 'meanSquaredError', // Regression loss
  metrics: ['mae']
});

// Train
await model.fit(X_train, y_train, {epochs: 100, verbose: 0});

// Predict house prices
const X_test = tf.tensor2d([[1600, 3, 12], [2200, 4, 3]]);
const predictions = model.predict(X_test);

console.log("Predicted prices ($1000s):");
predictions.print(); // [320, 430] - continuous values`
          }
        ],

        dos: [
          'Use classification when output is a category (spam, disease type)',
          'Use regression when output is a number (price, temperature)',
          'Choose metrics appropriate to task (accuracy for classification, MSE for regression)',
          'For probabilities, use sigmoid (binary) or softmax (multi-class) activation'
        ],

        donts: [
          'Don\'t use regression for categories - will give nonsensical values',
          'Don\'t use classification for continuous values - loses precision',
          'Don\'t ignore the problem type when choosing algorithms',
          'Don\'t use wrong evaluation metrics (accuracy for regression is meaningless)'
        ],

        bestPractices: [
          'Clearly define your target variable before choosing approach',
          'Binary classification can output probabilities (0.0-1.0) for confidence',
          'Regression can be converted to classification by binning (e.g., price ranges)',
          'Some problems can be framed either way - choose based on business need'
        ]
      },

      quiz: [
        {
          question: 'Which is a classification problem?',
          options: [
            'Predicting tomorrow\'s temperature',
            'Determining if a transaction is fraudulent',
            'Estimating house price',
            'Forecasting stock price'
          ],
          correctAnswer: 1,
          explanation: 'Fraud detection is classification - the output is a discrete category (Fraudulent or Legitimate). The other options predict continuous numerical values, making them regression problems.'
        },
        {
          question: 'What activation function is typically used for binary classification output?',
          options: [
            'Linear',
            'ReLU',
            'Sigmoid',
            'Tanh'
          ],
          correctAnswer: 2,
          explanation: 'Sigmoid activation outputs values between 0 and 1, perfect for binary classification probabilities. Linear is for regression, ReLU for hidden layers.'
        },
        {
          question: 'Which metric is appropriate for regression?',
          options: [
            'Accuracy',
            'Precision',
            'Mean Squared Error (MSE)',
            'F1-Score'
          ],
          correctAnswer: 2,
          explanation: 'MSE measures average squared difference between predicted and actual values - perfect for regression. Accuracy, Precision, and F1-Score are classification metrics.'
        }
      ]
    },

    // Topic 12: Model Evaluation Metrics
    {
      id: 'model-evaluation-metrics',
      title: 'Model Evaluation: Measuring AI Performance',
      difficulty: 'Beginner',
      estimatedTime: '40 minutes',
      prerequisites: ['classification-vs-regression', 'supervised-vs-unsupervised'],
      content: {
        overview: `
**"How good is my model?"** - the most critical question in AI. You can't improve what you don't measure. Evaluation metrics quantify model performance and guide optimization.

**Why Multiple Metrics Matter**: 
A model with 99% accuracy might be terrible! Imagine disease detection where only 1% of patients are sick. A model that always predicts "healthy" gets 99% accuracy but misses all diseases. You need precision, recall, and F1-score to catch this.

**Classification Metrics**:
- **Accuracy**: (Correct predictions / Total predictions) - overall correctness
- **Precision**: Of predicted positives, how many are actually positive? (No false alarms)
- **Recall**: Of actual positives, how many did we catch? (No missed cases)
- **F1-Score**: Harmonic mean of precision and recall (balanced measure)

**Regression Metrics**:
- **MSE** (Mean Squared Error): Average squared difference (penalizes large errors)
- **RMSE** (Root MSE): Square root of MSE (same units as target)
- **MAE** (Mean Absolute Error): Average absolute difference (robust to outliers)
- **R² Score**: How much variance is explained (0-1, closer to 1 is better)

**The Confusion Matrix**: A table showing True Positives, False Positives, True Negatives, False Negatives - the foundation for all classification metrics.
        `,

        comparisonTable: {
          title: 'Classification vs Regression Metrics',
          headers: ['Metric', 'Type', 'Formula/Meaning', 'Best Value', 'Use Case'],
          rows: [
            ['Accuracy', 'Classification', '(TP + TN) / Total', '1.0 (100%)', 'Balanced datasets'],
            ['Precision', 'Classification', 'TP / (TP + FP)', '1.0', 'Minimize false alarms (spam)'],
            ['Recall', 'Classification', 'TP / (TP + FN)', '1.0', 'Catch all positives (disease)'],
            ['F1-Score', 'Classification', '2 * (Precision * Recall) / (P + R)', '1.0', 'Balanced precision/recall'],
            ['MSE', 'Regression', 'Avg((actual - predicted)²)', '0.0', 'General regression'],
            ['RMSE', 'Regression', '√MSE', '0.0', 'Same units as target'],
            ['MAE', 'Regression', 'Avg(|actual - predicted|)', '0.0', 'Robust to outliers'],
            ['R² Score', 'Regression', 'Variance explained', '1.0', 'Model comparison']
          ]
        },

        keyPoints: [
          'Accuracy alone is misleading with imbalanced data',
          'Precision = "Of my positive predictions, how many are correct?"',
          'Recall = "Of all actual positives, how many did I find?"',
          'F1-Score balances precision and recall (useful when both matter)',
          'For regression, lower MSE/MAE is better; higher R² is better'
        ],

        useCases: [
          {
            title: 'High Recall Priority: Cancer Detection',
            description: 'Missing a cancer case (False Negative) is catastrophic. We need high recall - catch all cases, even if we have some false alarms.',
            example: 'Recall: 0.98 (catch 98% of cases) > Precision: 0.70 (30% false alarms acceptable)'
          },
          {
            title: 'High Precision Priority: Spam Filter',
            description: 'Marking important email as spam (False Positive) loses business. We need high precision - only flag real spam.',
            example: 'Precision: 0.95 (95% flagged are spam) > Recall: 0.80 (ok to miss some spam)'
          },
          {
            title: 'Balanced F1-Score: Fraud Detection',
            description: 'Both false positives (blocking legitimate transactions) and false negatives (missing fraud) are costly. Need balance.',
            example: 'F1-Score: 0.85 (balances precision: 0.82, recall: 0.88)'
          },
          {
            title: 'R² Score: House Price Model',
            description: 'R² of 0.85 means model explains 85% of price variance - good performance. R² of 0.40 means poor fit.',
            example: 'Model A (R²=0.87) beats Model B (R²=0.62) - explains variance better'
          }
        ],

        codeExamples: [
          {
            title: 'Classification Metrics - Complete Example',
            code: `from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, 
    f1_score, confusion_matrix, classification_report
)
import numpy as np

# True labels and predictions (disease detection)
y_true = np.array([1, 0, 1, 1, 0, 1, 0, 0, 1, 0])  # Actual
y_pred = np.array([1, 0, 1, 0, 0, 1, 0, 0, 1, 1])  # Predicted

# Calculate all metrics
accuracy = accuracy_score(y_true, y_pred)
precision = precision_score(y_true, y_pred)
recall = recall_score(y_true, y_pred)
f1 = f1_score(y_true, y_pred)

print("=== Classification Metrics ===")
print(f"Accuracy: {accuracy:.2f} (80% correct overall)")
print(f"Precision: {precision:.2f} (Of predicted sick, {precision:.0%} are actually sick)")
print(f"Recall: {recall:.2f} (Of actually sick, we caught {recall:.0%})")
print(f"F1-Score: {f1:.2f} (Balanced measure)")

# Confusion Matrix
cm = confusion_matrix(y_true, y_pred)
print("\\n=== Confusion Matrix ===")
print(cm)
print("[[TN FP]")
print(" [FN TP]]")

# Extract values
tn, fp, fn, tp = cm.ravel()
print(f"\\nTrue Negatives: {tn} (correctly predicted healthy)")
print(f"False Positives: {fp} (false alarms)")
print(f"False Negatives: {fn} (missed cases - DANGEROUS!)")
print(f"True Positives: {tp} (correctly caught disease)")

# Detailed report
print("\\n=== Full Classification Report ===")
print(classification_report(y_true, y_pred, 
                          target_names=['Healthy', 'Sick']))`,
            jsCode: `// Classification Metrics in JavaScript
const y_true = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0];
const y_pred = [1, 0, 1, 0, 0, 1, 0, 0, 1, 1];

// Calculate confusion matrix values
let tp = 0, tn = 0, fp = 0, fn = 0;

for (let i = 0; i < y_true.length; i++) {
  if (y_true[i] === 1 && y_pred[i] === 1) tp++;
  else if (y_true[i] === 0 && y_pred[i] === 0) tn++;
  else if (y_true[i] === 0 && y_pred[i] === 1) fp++;
  else if (y_true[i] === 1 && y_pred[i] === 0) fn++;
}

// Calculate metrics
const accuracy = (tp + tn) / y_true.length;
const precision = tp / (tp + fp);
const recall = tp / (tp + fn);
const f1 = 2 * (precision * recall) / (precision + recall);

console.log("=== Classification Metrics ===");
console.log(\`Accuracy: \${accuracy.toFixed(2)}\`);
console.log(\`Precision: \${precision.toFixed(2)}\`);
console.log(\`Recall: \${recall.toFixed(2)}\`);
console.log(\`F1-Score: \${f1.toFixed(2)}\`);

console.log("\\n=== Confusion Matrix ===");
console.log(\`True Negatives: \${tn}\`);
console.log(\`False Positives: \${fp}\`);
console.log(\`False Negatives: \${fn}\`);
console.log(\`True Positives: \${tp}\`);`
          },
          {
            title: 'Regression Metrics - Complete Example',
            code: `from sklearn.metrics import (
    mean_squared_error, mean_absolute_error, r2_score
)
import numpy as np

# True prices and predictions (in thousands)
y_true = np.array([300, 400, 250, 500, 350, 450, 280])
y_pred = np.array([310, 380, 260, 480, 340, 470, 290])

# Calculate regression metrics
mse = mean_squared_error(y_true, y_pred)
rmse = np.sqrt(mse)
mae = mean_absolute_error(y_true, y_pred)
r2 = r2_score(y_true, y_pred)

print("=== Regression Metrics ===")
print(f"Mean Squared Error (MSE): {mse:.2f}")
print(f"Root Mean Squared Error (RMSE): {rmse:.2f} thousand")
print(f"Mean Absolute Error (MAE): {mae:.2f} thousand")
print(f"R² Score: {r2:.3f} (model explains {r2:.1%} of variance)")

# Show individual errors
errors = y_true - y_pred
print("\\n=== Individual Predictions ===")
for i in range(len(y_true)):
    print(f"True: $\{y_true[i]\}K, Predicted: $\{y_pred[i]\}K, "
          f"Error: $\{errors[i]:.0f\}K")

# Interpretation
print("\\n=== Interpretation ===")
print(f"On average, predictions are off by $\{mae:.0f\}K")
print(f"RMSE penalizes large errors more: $\{rmse:.0f\}K")
if r2 > 0.8:
    print("R² > 0.8: Excellent model!")
elif r2 > 0.6:
    print("R² > 0.6: Good model")
else:
    print("R² < 0.6: Model needs improvement")`,
            jsCode: `// Regression Metrics in JavaScript
const y_true = [300, 400, 250, 500, 350, 450, 280];
const y_pred = [310, 380, 260, 480, 340, 470, 290];

// Calculate MSE
const mse = y_true.reduce((sum, actual, i) => {
  return sum + Math.pow(actual - y_pred[i], 2);
}, 0) / y_true.length;

// Calculate RMSE
const rmse = Math.sqrt(mse);

// Calculate MAE
const mae = y_true.reduce((sum, actual, i) => {
  return sum + Math.abs(actual - y_pred[i]);
}, 0) / y_true.length;

// Calculate R² Score
const mean_true = y_true.reduce((a, b) => a + b) / y_true.length;
const ss_tot = y_true.reduce((sum, val) => 
  sum + Math.pow(val - mean_true, 2), 0
);
const ss_res = y_true.reduce((sum, val, i) => 
  sum + Math.pow(val - y_pred[i], 2), 0
);
const r2 = 1 - (ss_res / ss_tot);

console.log("=== Regression Metrics ===");
console.log("MSE: " + mse.toFixed(2));
console.log("RMSE: " + rmse.toFixed(2) + "K");
console.log("MAE: " + mae.toFixed(2) + "K");
console.log("R² Score: " + r2.toFixed(3));

console.log("\\nAverage error: $" + mae.toFixed(0) + "K");`
          }
        ],

        dos: [
          'Use multiple metrics - accuracy alone is misleading',
          'Choose metrics based on business cost (false positive vs false negative)',
          'For imbalanced data, use precision, recall, F1 (not just accuracy)',
          'Report confidence intervals for metrics when possible'
        ],

        donts: [
          'Don\'t rely only on accuracy with imbalanced datasets',
          'Don\'t ignore the confusion matrix - it reveals true model behavior',
          'Don\'t use classification metrics for regression (or vice versa)',
          'Don\'t forget domain context when interpreting metrics'
        ],

        bestPractices: [
          'Visualize confusion matrix as heatmap for better understanding',
          'Calculate metrics on both training and test sets to detect overfitting',
          'For multi-class: use macro/micro/weighted averaging',
          'Document which metric matters most for your specific use case'
        ]
      },

      quiz: [
        {
          question: 'Why can 99% accuracy be misleading?',
          options: [
            'Accuracy is always a good metric',
            'With imbalanced data, a model predicting only the majority class can have high accuracy',
            '99% is actually a low accuracy',
            'Accuracy doesn\'t work for classification'
          ],
          correctAnswer: 1,
          explanation: 'In imbalanced datasets (e.g., 99% healthy, 1% sick), a model always predicting "healthy" gets 99% accuracy but is useless. This is why we need precision, recall, and F1-score.'
        },
        {
          question: 'When should you prioritize recall over precision?',
          options: [
            'Spam email filtering',
            'Disease detection',
            'Product recommendations',
            'Never - precision is always more important'
          ],
          correctAnswer: 1,
          explanation: 'Disease detection requires high recall - missing a sick patient (false negative) is catastrophic. We prefer some false alarms (false positives) over missed cases.'
        },
        {
          question: 'What does R² score of 0.85 mean?',
          options: [
            '85% accuracy',
            'Model explains 85% of the variance in target variable',
            'Average error is 85%',
            'Model is 15% wrong'
          ],
          correctAnswer: 1,
          explanation: 'R² score measures how much of the target variable\'s variance is explained by the model. 0.85 means 85% of variance is explained - a strong model. R² ranges from 0 to 1, with 1 being perfect.'
        }
      ]
    },

    // Topic 13: Your First ML Model
    {
      id: 'first-ml-model',
      title: 'Building Your First Machine Learning Model',
      difficulty: 'Beginner',
      estimatedTime: '45 minutes',
      prerequisites: ['data-preprocessing', 'classification-vs-regression', 'model-evaluation-metrics'],
      content: {
        overview: `
**Welcome to the most exciting moment** - building your first real machine learning model from scratch! You'll go from raw data to predictions in just a few steps.

**The ML Workflow**:
1. **Load Data**: Import your dataset (CSV, database, API)
2. **Explore Data**: Understand features, check for missing values, visualize
3. **Preprocess**: Clean, encode, scale features
4. **Split Data**: Training set (80%) and testing set (20%)
5. **Choose Model**: Pick an algorithm (Decision Tree, Logistic Regression, etc.)
6. **Train Model**: Fit the model to training data
7. **Make Predictions**: Predict on test data
8. **Evaluate**: Check accuracy, precision, recall

**Example Project**: Predict if a customer will buy a product based on age and salary. Simple, practical, and you'll see results immediately!

**Why This Works**: ML models find patterns in training data (learning phase), then apply those patterns to new data (prediction phase). Like learning from examples in school, then taking a test.
        `,

        keyPoints: [
          'ML workflow: Load → Explore → Preprocess → Split → Train → Predict → Evaluate',
          'Training data teaches the model, test data evaluates it',
          'Start simple: Use Decision Trees or Logistic Regression',
          'Always evaluate on unseen test data to measure real performance',
          'Iterate: Try different models, tune parameters, improve features'
        ],

        useCases: [
          {
            title: 'Customer Purchase Prediction',
            description: 'Predict if customer will buy based on age and salary. Binary classification problem.',
            example: 'Input: [Age: 35, Salary: 60K] → Output: Will Buy (85% confidence)'
          },
          {
            title: 'Iris Flower Classification',
            description: 'Classic ML problem: Classify iris flowers into 3 species based on petal/sepal measurements.',
            example: 'Input: [Petal length: 5.1, Width: 3.5...] → Output: Species: Setosa'
          },
          {
            title: 'House Price Prediction',
            description: 'Predict house price based on size, bedrooms, location. Regression problem.',
            example: 'Input: [2000 sqft, 3 bed] → Output: Price: $425,000'
          }
        ],

        codeExamples: [
          {
            title: 'Complete ML Project - Customer Purchase Prediction',
            code: `# Step 1: Import libraries
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, classification_report
import numpy as np
import pandas as pd

# Step 2: Create sample dataset
# Features: Age, Salary (in thousands)
# Target: Purchased (1=Yes, 0=No)
data = pd.DataFrame({
    'Age': [25, 30, 35, 40, 45, 50, 35, 30, 48, 38],
    'Salary': [30, 40, 50, 60, 70, 80, 45, 35, 75, 55],
    'Purchased': [0, 0, 1, 1, 1, 1, 0, 0, 1, 1]
})

print("Dataset Overview:")
print(data.head())
print(f"\\nDataset shape: {data.shape}")
print(f"Missing values: {data.isnull().sum().sum()}")

# Step 3: Prepare features (X) and target (y)
X = data[['Age', 'Salary']]  # Features
y = data['Purchased']         # Target

print(f"\\nFeatures shape: {X.shape}")
print(f"Target shape: {y.shape}")

# Step 4: Split into training and testing sets (80/20)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(f"\\nTraining samples: {len(X_train)}")
print(f"Testing samples: {len(X_test)}")

# Step 5: Create and train the model
model = DecisionTreeClassifier(random_state=42)
print("\\n🚀 Training model...")
model.fit(X_train, y_train)
print("✅ Model trained!")

# Step 6: Make predictions on test data
y_pred = model.predict(X_test)
print(f"\\nPredictions: {y_pred}")
print(f"Actual values: {y_test.values}")

# Step 7: Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"\\n📊 Model Accuracy: {accuracy:.2%}")

# Detailed metrics
print("\\nDetailed Classification Report:")
print(classification_report(y_test, y_pred, 
                          target_names=['Not Buy', 'Will Buy']))

# Step 8: Predict for new customers
new_customers = np.array([
    [28, 35],  # Young, low salary
    [42, 65]   # Older, high salary
])

predictions = model.predict(new_customers)
probabilities = model.predict_proba(new_customers)

print("\\n🔮 Predictions for new customers:")
for i, customer in enumerate(new_customers):
    print(f"Customer {i+1}: Age={customer[0]}, Salary={customer[1]}K")
    print(f"  Prediction: {'Will Buy' if predictions[i] else 'Not Buy'}")
    print(f"  Confidence: {probabilities[i][predictions[i]]:.2%}\\n")

print("🎉 Congratulations! You built your first ML model!")`,
            jsCode: `// Complete ML Project with TensorFlow.js
const tf = require('@tensorflow/tfjs');

// Step 2: Create dataset
const data = {
  Age: [25, 30, 35, 40, 45, 50, 35, 30, 48, 38],
  Salary: [30, 40, 50, 60, 70, 80, 45, 35, 75, 55],
  Purchased: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1]
};

console.log("Dataset loaded: 10 samples");

// Step 3: Prepare features and target
const X = tf.tensor2d(
  data.Age.map((age, i) => [age, data.Salary[i]])
);
const y = tf.tensor2d(data.Purchased, [10, 1]);

console.log("Features shape:", X.shape);
console.log("Target shape:", y.shape);

// Step 4: Split data (8 train, 2 test)
const X_train = X.slice([0, 0], [8, 2]);
const X_test = X.slice([8, 0], [2, 2]);
const y_train = y.slice([0, 0], [8, 1]);
const y_test = y.slice([8, 0], [2, 1]);

console.log("\\nTraining samples: 8");
console.log("Testing samples: 2");

// Step 5: Build model
const model = tf.sequential({
  layers: [
    tf.layers.dense({inputShape: [2], units: 8, activation: 'relu'}),
    tf.layers.dense({units: 4, activation: 'relu'}),
    tf.layers.dense({units: 1, activation: 'sigmoid'})
  ]
});

model.compile({
  optimizer: tf.train.adam(0.01),
  loss: 'binaryCrossentropy',
  metrics: ['accuracy']
});

// Step 6: Train model
console.log("\\n🚀 Training model...");
await model.fit(X_train, y_train, {
  epochs: 100,
  verbose: 0
});
console.log("✅ Model trained!");

// Step 7: Evaluate
const evaluation = model.evaluate(X_test, y_test);
const accuracy = evaluation[1].dataSync()[0];
console.log("\\n📊 Model Accuracy:", (accuracy * 100).toFixed(2) + "%");

// Step 8: Predict for new customers
const new_customers = tf.tensor2d([[28, 35], [42, 65]]);
const predictions = model.predict(new_customers);

console.log("\\n🔮 Predictions for new customers:");
const pred_values = predictions.arraySync();
console.log("Customer 1 (Age: 28, Salary: 35K):", 
  pred_values[0][0] > 0.5 ? "Will Buy" : "Not Buy",
  "(" + (pred_values[0][0] * 100).toFixed(1) + "%)");
console.log("Customer 2 (Age: 42, Salary: 65K):", 
  pred_values[1][0] > 0.5 ? "Will Buy" : "Not Buy",
  "(" + (pred_values[1][0] * 100).toFixed(1) + "%)");

console.log("\\n🎉 Congratulations! You built your first ML model!");`
          }
        ],

        dos: [
          'Start with a small, simple dataset to understand the workflow',
          'Always split data before training to get honest performance metrics',
          'Check data quality: missing values, outliers, class balance',
          'Visualize predictions vs actual to understand model behavior'
        ],

        donts: [
          'Don\'t test on training data - gives misleadingly high accuracy',
          'Don\'t skip data exploration - garbage in, garbage out',
          'Don\'t expect perfection on first try - iterate and improve',
          'Don\'t use complex models (deep learning) when simple ones work'
        ],

        bestPractices: [
          'Follow the ML workflow systematically every time',
          'Document your experiments: model type, parameters, results',
          'Start simple (Decision Tree, Logistic Regression), then try complex models',
          'Save your trained model for reuse in production',
          'Cross-validation gives better performance estimates than single train/test split'
        ]
      },

      quiz: [
        {
          question: 'Why do we split data into training and testing sets?',
          options: [
            'To make the model train faster',
            'To evaluate model performance on unseen data',
            'To reduce dataset size',
            'It\'s not necessary'
          ],
          correctAnswer: 1,
          explanation: 'We split data to evaluate how well the model generalizes to new, unseen data. Testing on training data gives misleadingly high accuracy because the model has already seen those examples.'
        },
        {
          question: 'What is the typical train/test split ratio?',
          options: [
            '50/50',
            '80/20',
            '95/5',
            '60/40'
          ],
          correctAnswer: 1,
          explanation: '80/20 (or 70/30) is the most common split. 80% for training gives the model enough data to learn, while 20% for testing provides a reliable performance estimate.'
        },
        {
          question: 'Which comes first in the ML workflow?',
          options: [
            'Train the model',
            'Make predictions',
            'Explore and preprocess data',
            'Deploy to production'
          ],
          correctAnswer: 2,
          explanation: 'Data exploration and preprocessing come first. Understanding and cleaning your data is crucial - the model can only be as good as the data it\'s trained on.'
        }
      ]
    },

    // Topic 14: AI Tools and Platforms
    {
      id: 'ai-tools-platforms',
      title: 'AI Tools & Platforms: Your Development Toolkit',
      difficulty: 'Beginner',
      estimatedTime: '35 minutes',
      prerequisites: ['first-ml-model'],
      content: {
        overview: `
**The right tools make AI development 10x easier.** From writing code to training models to deploying in production, there's a tool for every step.

**Categories of AI Tools**:
1. **Development Environments**: Jupyter Notebooks, Google Colab, VS Code
2. **ML Libraries**: Scikit-learn (classical ML), TensorFlow, PyTorch (deep learning)
3. **Data Tools**: Pandas, NumPy, Matplotlib, Seaborn
4. **Cloud Platforms**: AWS, Google Cloud, Azure (scalable training & deployment)
5. **Specialized Tools**: Hugging Face (NLP), Weights & Biases (experiment tracking), Kaggle (datasets & competitions)

**Beginners Start Here**:
- **Google Colab**: Free GPU, no setup, runs in browser
- **Jupyter Notebooks**: Interactive coding, mix code with notes
- **Scikit-learn**: Easiest library for classical ML
- **Kaggle**: Free datasets, tutorials, competitions

**Production Ready**:
- **TensorFlow/PyTorch**: Industry-standard deep learning frameworks
- **Docker**: Package your model with dependencies
- **AWS/GCP/Azure**: Deploy models at scale
        `,

        comparisonTable: {
          title: 'Popular AI Tools Comparison',
          headers: ['Tool', 'Category', 'Best For', 'Difficulty', 'Cost'],
          rows: [
            ['Google Colab', 'Environment', 'Learning, Prototyping', 'Easy', 'Free (GPU included)'],
            ['Jupyter Notebook', 'Environment', 'Interactive Development', 'Easy', 'Free'],
            ['Scikit-learn', 'Library', 'Classical ML', 'Easy', 'Free'],
            ['TensorFlow', 'Library', 'Deep Learning, Production', 'Medium', 'Free'],
            ['PyTorch', 'Library', 'Deep Learning, Research', 'Medium', 'Free'],
            ['Hugging Face', 'Platform', 'NLP, Transformers', 'Medium', 'Free (paid tiers)'],
            ['Kaggle', 'Platform', 'Datasets, Competitions, Learning', 'Easy', 'Free'],
            ['AWS SageMaker', 'Cloud', 'Enterprise ML Deployment', 'Hard', 'Pay-as-you-go'],
            ['Weights & Biases', 'Tool', 'Experiment Tracking', 'Medium', 'Free (paid tiers)']
          ]
        },

        keyPoints: [
          'Google Colab: Free GPU, perfect for learning and small projects',
          'Scikit-learn: Best starting point for classical ML',
          'TensorFlow/PyTorch: Choose one for deep learning (both excellent)',
          'Kaggle: Free datasets, competitions, and community learning',
          'Cloud platforms: AWS/GCP/Azure for production deployment'
        ],

        useCases: [
          {
            title: 'Learning AI (Beginner)',
            description: 'Stack: Google Colab + Scikit-learn + Kaggle datasets. Zero setup, free GPU, tons of tutorials.',
            example: 'Open Colab → Import dataset from Kaggle → Train model → Share notebook'
          },
          {
            title: 'Research Project (Academic)',
            description: 'Stack: Jupyter + PyTorch + Weights & Biases. Experiment tracking, reproducible results.',
            example: 'Local Jupyter → PyTorch experiments → W&B for tracking → Publish paper'
          },
          {
            title: 'Production Deployment (Startup)',
            description: 'Stack: TensorFlow + Docker + AWS SageMaker. Scalable, reliable, monitored.',
            example: 'Train TensorFlow model → Package in Docker → Deploy to SageMaker → Auto-scaling'
          },
          {
            title: 'NLP Application',
            description: 'Stack: Hugging Face Transformers + Python + FastAPI. Pre-trained models, easy deployment.',
            example: 'Load BERT from Hugging Face → Fine-tune → Deploy with FastAPI → Serve predictions'
          }
        ],

        codeExamples: [
          {
            title: 'Setting Up Your AI Environment',
            code: `# Install essential AI libraries
# Run this in your terminal or Jupyter notebook

# Data manipulation
pip install numpy pandas matplotlib seaborn

# Classical Machine Learning
pip install scikit-learn

# Deep Learning (choose one to start)
pip install tensorflow  # Google's framework
# OR
pip install torch torchvision  # PyTorch

# Jupyter for interactive development
pip install jupyter notebook

# Additional useful tools
pip install plotly  # Interactive visualizations
pip install kaggle  # Download Kaggle datasets

# Example: Using Scikit-learn
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load built-in dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Evaluate
predictions = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, predictions):.2%}")

# Save model for later use
import joblib
joblib.dump(model, 'my_first_model.pkl')
print("Model saved!")

# Load model
loaded_model = joblib.load('my_first_model.pkl')
print("Model loaded and ready to use!")`,
            jsCode: `// Setting up TensorFlow.js in Node.js

// Install TensorFlow.js
// npm install @tensorflow/tfjs
// npm install @tensorflow/tfjs-node  // For Node.js backend

const tf = require('@tensorflow/tfjs-node');

console.log("TensorFlow.js version:", tf.version.tfjs);

// Simple model example
const model = tf.sequential({
  layers: [
    tf.layers.dense({inputShape: [4], units: 10, activation: 'relu'}),
    tf.layers.dense({units: 3, activation: 'softmax'})
  ]
});

model.compile({
  optimizer: 'adam',
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy']
});

console.log("Model created successfully!");

// Model summary
model.summary();

// Save model
await model.save('file://./my-model');
console.log("Model saved!");

// Load model
const loadedModel = await tf.loadLayersModel('file://./my-model/model.json');
console.log("Model loaded and ready!");

// For browser (include in HTML):
// <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>

console.log("\\n✅ TensorFlow.js setup complete!");`
          },
          {
            title: 'Using Google Colab (Cloud Notebook)',
            code: `# Google Colab tips and tricks

# 1. Check if running in Colab
try:
    import google.colab
    IN_COLAB = True
    print("✅ Running in Google Colab")
except:
    IN_COLAB = False
    print("❌ Not in Colab")

# 2. Mount Google Drive (access your files)
if IN_COLAB:
    from google.colab import drive
    drive.mount('/content/drive')
    print("Google Drive mounted at /content/drive")

# 3. Check GPU availability
import torch
if torch.cuda.is_available():
    print(f"🚀 GPU available: {torch.cuda.get_device_name(0)}")
else:
    print("⚠️ No GPU - using CPU")

# 4. Download dataset from Kaggle
# First: Upload kaggle.json to Colab
if IN_COLAB:
    !mkdir -p ~/.kaggle
    !cp kaggle.json ~/.kaggle/
    !chmod 600 ~/.kaggle/kaggle.json
    !kaggle datasets download -d dataset-name
    print("Dataset downloaded!")

# 5. Install additional libraries
if IN_COLAB:
    !pip install -q transformers  # -q for quiet mode
    print("Transformers library installed")

# 6. Save model to Google Drive
if IN_COLAB:
    import joblib
    # Train your model here
    # model = ...
    
    # Save to Google Drive
    # joblib.dump(model, '/content/drive/MyDrive/my_model.pkl')
    print("Model saved to Google Drive!")

print("\\n💡 Colab Tips:")
print("- Runtime > Change runtime type > Select GPU")
print("- Files persist only during session")
print("- Free GPU: ~12 hours, then session resets")
print("- Use Google Drive to save work permanently")`
          }
        ],

        dos: [
          'Start with Google Colab for free GPU access',
          'Learn Jupyter Notebooks for interactive development',
          'Master Scikit-learn before diving into deep learning',
          'Use version control (Git) for your AI projects'
        ],

        donts: [
          'Don\'t pay for cloud resources when learning (use free tiers)',
          'Don\'t learn all tools at once - master one at a time',
          'Don\'t skip documentation - it saves hours of debugging',
          'Don\'t ignore community resources (Stack Overflow, GitHub, forums)'
        ],

        bestPractices: [
          'Set up a consistent development environment early',
          'Use virtual environments (conda, venv) to manage dependencies',
          'Keep track of experiments with Weights & Biases or MLflow',
          'Join Kaggle competitions to learn from others\' code',
          'Contribute to open-source AI projects to build skills'
        ]
      },

      quiz: [
        {
          question: 'What is the main advantage of Google Colab?',
          options: [
            'It\'s the fastest IDE',
            'Free GPU access without any setup',
            'Better code editor than VS Code',
            'Automatic model deployment'
          ],
          correctAnswer: 1,
          explanation: 'Google Colab provides free GPU access in your browser with zero setup required. This is perfect for learning and experimentation without needing expensive hardware.'
        },
        {
          question: 'Which library is best for beginners learning classical ML?',
          options: [
            'TensorFlow',
            'PyTorch',
            'Scikit-learn',
            'Keras'
          ],
          correctAnswer: 2,
          explanation: 'Scikit-learn is the most beginner-friendly library for classical machine learning. It has simple APIs, excellent documentation, and covers all fundamental ML algorithms.'
        },
        {
          question: 'What is Kaggle primarily used for?',
          options: [
            'Cloud deployment',
            'Code editing',
            'Datasets, competitions, and learning',
            'Model training only'
          ],
          correctAnswer: 2,
          explanation: 'Kaggle is a platform for datasets, ML competitions, and community learning. It\'s an excellent resource for finding datasets, practicing skills, and learning from others\' solutions.'
        }
      ]
    }

  ]
};

export { fundamentals };

