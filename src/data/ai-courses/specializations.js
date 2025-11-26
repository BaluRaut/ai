const specializations = {
  id: 'specializations',
  title: 'AI Specializations',
  description: 'Advanced applications: Computer Vision, Time Series, Recommender Systems, and more',
  level: 'Expert',
  estimatedHours: 35,
  topics: [
    {
      id: 1,
      title: 'Computer Vision',
      description: 'Teaching computers to see and understand images',
      
      overview: `Computer Vision enables machines to extract information from images and videos. From facial recognition to self-driving cars, it powers visual understanding. Core tasks: image classification (cat vs dog), object detection (finding objects and their locations), semantic segmentation (pixel-level classification), and image generation.

Modern CV uses CNNs (Convolutional Neural Networks) that automatically learn features like edges, textures, and patterns. Pre-trained models like ResNet, EfficientNet, and YOLO achieve human-level accuracy on many tasks. Transfer learning is standard - fine-tune pre-trained models on your data instead of training from scratch.

Applications are everywhere: medical imaging (detecting tumors), autonomous vehicles (recognizing pedestrians), retail (visual search), agriculture (crop health monitoring), manufacturing (defect detection). OpenCV provides classical CV tools, while PyTorch and TensorFlow handle deep learning approaches.`,

      keyPoints: [
        'Enables machines to understand images and videos',
        'Tasks: classification, detection, segmentation, generation',
        'CNNs (ResNet, EfficientNet, YOLO) are the backbone',
        'Transfer learning: fine-tune pre-trained models',
        'Applications: medical imaging, autonomous vehicles, retail'
      ],

      useCases: [
        {
          title: 'Medical Imaging',
          description: 'Detect diseases from X-rays, MRIs, CT scans',
          example: 'AI detecting breast cancer with 94% accuracy from mammograms'
        },
        {
          title: 'Autonomous Vehicles',
          description: 'Identify pedestrians, vehicles, traffic signs',
          example: 'Tesla FSD detecting and tracking 100+ objects in real-time'
        },
        {
          title: 'Quality Control',
          description: 'Detect manufacturing defects automatically',
          example: 'Factories inspecting 1000+ products/hour for defects'
        },
        {
          title: 'Visual Search',
          description: 'Find similar products from photos',
          example: 'Pinterest visual search: photo of shoes → similar products'
        }
      ],

      codeExamples: [
        {
          title: 'Image Classification with Transfer Learning',
          code: `import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image

# Load pre-trained ResNet50
model = models.resnet50(pretrained=True)
model.eval()  # Inference mode

# Image preprocessing
transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )
])

# Load and classify image
image = Image.open("dog.jpg")
input_tensor = transform(image).unsqueeze(0)

# Get prediction
with torch.no_grad():
    output = model(input_tensor)
    probabilities = torch.nn.functional.softmax(output[0], dim=0)

# Get top 5 predictions
top5_prob, top5_idx = torch.topk(probabilities, 5)

# Load ImageNet class names
with open("imagenet_classes.txt") as f:
    classes = [line.strip() for line in f]

# Print results
print("Top 5 Predictions:")
for i in range(5):
    print(f"{i+1}. {classes[top5_idx[i]]}: {top5_prob[i].item():.2%}")

# Output:
# 1. Golden Retriever: 87.23%
# 2. Labrador: 8.45%
# 3. Dog: 2.11%`,
          language: 'python'
        }
      ],

      dos: [
        'Use pre-trained models (ResNet, EfficientNet) and fine-tune',
        'Augment training data: rotation, flip, crop, color jitter',
        'Use proper image normalization (ImageNet mean/std)',
        'Start with smaller images (224x224), increase if needed'
      ],

      donts: [
        'Don\'t train from scratch - wastes time and needs huge data',
        'Don\'t forget data augmentation - prevents overfitting',
        'Don\'t use low resolution if task requires fine details',
        'Don\'t ignore class imbalance - use weighted loss or sampling'
      ],

      bestPractices: [
        'Transfer learning: freeze early layers, train final layers first',
        'Use mixed precision training (FP16) for speed and memory',
        'For object detection, try YOLO or Faster R-CNN',
        'Validate on diverse test set to avoid dataset bias'
      ],

      quiz: [
        {
          question: 'What is transfer learning in Computer Vision?',
          options: [
            'Transferring images between computers',
            'Using pre-trained models and fine-tuning on your data',
            'Converting between image formats',
            'Moving data to GPU'
          ],
          correctAnswer: 1,
          explanation: 'Transfer learning uses models pre-trained on large datasets (like ImageNet) and fine-tunes them on your specific task, achieving better results with less data and training time.'
        }
      ]
    },

    {
      id: 2,
      title: 'Time Series Forecasting',
      description: 'Predicting future values from sequential data',
      
      overview: `Time Series Forecasting predicts future values based on historical patterns. Stock prices, weather, sales, website traffic - anything with temporal dependency. Unlike regular ML, time series has temporal order (shuffling destroys information), trends, seasonality, and autocorrelation.

Classical methods: ARIMA (autoregressive integrated moving average), exponential smoothing, seasonal decomposition. Modern approaches: LSTMs and GRUs (capture long-term dependencies), Prophet (Facebook's tool for business forecasting), and Transformers (attention for time series). Each has strengths - ARIMA for simple patterns, deep learning for complex patterns.

Key challenges: stationarity (mean/variance constant over time), missing data, multiple seasonalities (daily + weekly + yearly), and concept drift (patterns change over time). Feature engineering is crucial: lag features, rolling statistics, time-based features (day of week, month), and external variables (holidays, events).`,

      keyPoints: [
        'Predict future values from historical sequential data',
        'Has temporal order, trends, seasonality, autocorrelation',
        'Classical: ARIMA, exponential smoothing; Modern: LSTM, Prophet',
        'Challenges: stationarity, missing data, concept drift',
        'Features: lags, rolling stats, time-based, external variables'
      ],

      useCases: [
        {
          title: 'Sales Forecasting',
          description: 'Predict future sales for inventory planning',
          example: 'Walmart forecasting demand for 100M+ products weekly'
        },
        {
          title: 'Stock Price Prediction',
          description: 'Forecast market movements',
          example: 'Hedge funds using ML for algorithmic trading'
        },
        {
          title: 'Energy Demand',
          description: 'Predict electricity consumption',
          example: 'Power grids forecasting load to optimize generation'
        },
        {
          title: 'Anomaly Detection',
          description: 'Detect unusual patterns in time series',
          example: 'Server monitoring detecting traffic spikes or drops'
        }
      ],

      codeExamples: [
        {
          title: 'Time Series Forecasting with Prophet',
          code: `from prophet import Prophet
import pandas as pd
import matplotlib.pyplot as plt

# Prepare data (Prophet requires 'ds' and 'y' columns)
df = pd.read_csv('sales_data.csv')
df = df.rename(columns={'date': 'ds', 'sales': 'y'})

# Create and train model
model = Prophet(
    yearly_seasonality=True,
    weekly_seasonality=True,
    daily_seasonality=False,
    changepoint_prior_scale=0.05  # Flexibility of trend changes
)

# Add custom seasonality (e.g., monthly)
model.add_seasonality(
    name='monthly',
    period=30.5,
    fourier_order=5
)

# Add holidays
holidays = pd.DataFrame({
    'holiday': 'black_friday',
    'ds': pd.to_datetime(['2023-11-24', '2024-11-29']),
    'lower_window': 0,
    'upper_window': 1,
})
model = Prophet(holidays=holidays)

# Fit model
model.fit(df)

# Create future dataframe (next 30 days)
future = model.make_future_dataframe(periods=30)

# Forecast
forecast = model.predict(future)

# Plot results
fig = model.plot(forecast)
plt.title('Sales Forecast')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.show()

# Plot components (trend, seasonality)
fig = model.plot_components(forecast)
plt.show()

# Get forecast values
print("Next 7 days forecast:")
print(forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail(7))`,
          language: 'python'
        }
      ],

      dos: [
        'Check for stationarity (Augmented Dickey-Fuller test)',
        'Handle missing data properly (interpolation, forward fill)',
        'Use train/test split respecting time order (no shuffle!)',
        'Create lag features and rolling statistics'
      ],

      donts: [
        'Don\'t shuffle data - destroys temporal relationships',
        'Don\'t use future information in features (data leakage!)',
        'Don\'t ignore seasonality - crucial for accurate forecasting',
        'Don\'t forget to scale features before using neural networks'
      ],

      bestPractices: [
        'Start with Prophet for business forecasting (easy, robust)',
        'Use LSTM/GRU for complex patterns with many features',
        'Cross-validate with time series split (walk-forward validation)',
        'Monitor forecast accuracy regularly, retrain when drift detected'
      ],

      quiz: [
        {
          question: 'Why can\'t you shuffle time series data like regular ML data?',
          options: [
            'It makes training slower',
            'It destroys temporal dependencies and order',
            'It increases memory usage',
            'It\'s not true, you can shuffle'
          ],
          correctAnswer: 1,
          explanation: 'Time series data has temporal dependencies - past values influence future values. Shuffling destroys this critical sequential relationship, making predictions meaningless.'
        }
      ]
    },

    {
      id: 3,
      title: 'Recommender Systems',
      description: 'Personalized suggestions based on user behavior',
      
      overview: `Recommender Systems suggest items users might like. Netflix shows (40% of views from recommendations), Amazon products (35% of revenue), Spotify music - all use sophisticated recommendation engines. They increase engagement, revenue, and user satisfaction by showing relevant content.

Three main approaches: (1) Collaborative Filtering - "users like you also liked..." (user-user or item-item similarity), (2) Content-Based - "you liked X, here's similar Y" (item features), (3) Hybrid - combine both. Modern systems use deep learning with embeddings representing users and items in the same vector space.

Challenges: cold start (new users/items have no history), scalability (millions of users × millions of items), sparsity (most users rate <1% of items), and diversity (don't show only similar items). Evaluation metrics: precision@k, recall@k, NDCG (ranking quality), and coverage (% of items recommended).`,

      keyPoints: [
        'Suggest items users might like based on behavior and preferences',
        'Approaches: Collaborative Filtering, Content-Based, Hybrid',
        'Modern systems use deep learning with user/item embeddings',
        'Challenges: cold start, scalability, sparsity, diversity',
        'Metrics: precision@k, recall@k, NDCG, coverage'
      ],

      useCases: [
        {
          title: 'E-commerce',
          description: 'Product recommendations increase sales',
          example: 'Amazon\'s "customers who bought this also bought" (35% revenue)'
        },
        {
          title: 'Streaming Platforms',
          description: 'Movie/music recommendations drive engagement',
          example: 'Netflix recommendations influence 80% of content watched'
        },
        {
          title: 'Social Media',
          description: 'Content and connection recommendations',
          example: 'LinkedIn "People You May Know" increasing connections by 30%'
        },
        {
          title: 'News/Content',
          description: 'Personalized article recommendations',
          example: 'Medium showing relevant articles increasing reading time'
        }
      ],

      codeExamples: [
        {
          title: 'Collaborative Filtering with Surprise Library',
          code: `from surprise import SVD, Dataset, Reader
from surprise.model_selection import cross_validate
import pandas as pd

# Load data (user_id, item_id, rating)
df = pd.read_csv('ratings.csv')

# Prepare for Surprise library
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(df[['user_id', 'item_id', 'rating']], reader)

# Matrix Factorization (SVD)
model = SVD(
    n_factors=100,      # Embedding dimension
    n_epochs=20,        # Training epochs
    lr_all=0.005,       # Learning rate
    reg_all=0.02        # Regularization
)

# Cross-validation
results = cross_validate(model, data, measures=['RMSE', 'MAE'], cv=5, verbose=True)

# Train on full dataset
trainset = data.build_full_trainset()
model.fit(trainset)

# Predict rating for specific user-item pair
user_id = 196
item_id = 302
prediction = model.predict(user_id, item_id)
print(f"Predicted rating for user {user_id}, item {item_id}: {prediction.est:.2f}")

# Get top N recommendations for a user
def get_top_n_recommendations(model, user_id, n=10):
    # Get all items
    all_items = df['item_id'].unique()
    
    # Predict ratings for all items
    predictions = [model.predict(user_id, item_id) for item_id in all_items]
    
    # Sort by predicted rating
    predictions.sort(key=lambda x: x.est, reverse=True)
    
    # Return top N
    return [(pred.iid, pred.est) for pred in predictions[:n]]

top_recs = get_top_n_recommendations(model, user_id=196, n=5)
print(f"\\nTop 5 recommendations for user 196:")
for item_id, rating in top_recs:
    print(f"  Item {item_id}: predicted rating {rating:.2f}")`,
          language: 'python'
        }
      ],

      dos: [
        'Use matrix factorization (SVD, ALS) for collaborative filtering',
        'Implement implicit feedback (clicks, views) not just ratings',
        'Add content features for hybrid recommendations',
        'Use negative sampling for implicit data'
      ],

      donts: [
        'Don\'t ignore cold start - have fallback (popular items)',
        'Don\'t only recommend similar items - add diversity',
        'Don\'t forget to filter already consumed items',
        'Don\'t ignore temporal dynamics - preferences change over time'
      ],

      bestPractices: [
        'Start with simple baseline (popularity, user average)',
        'Use implicit feedback (clicks, views) - more data than ratings',
        'Implement two-tower model (user tower + item tower) for scale',
        'A/B test recommendations to measure real business impact'
      ],

      quiz: [
        {
          question: 'What is the "cold start problem" in recommender systems?',
          options: [
            'The system is slow to start',
            'Difficulty recommending to new users or new items with no history',
            'The algorithm is outdated',
            'Server issues during startup'
          ],
          correctAnswer: 1,
          explanation: 'Cold start occurs when new users (no interaction history) or new items (no ratings/clicks) enter the system, making it impossible to make personalized recommendations using collaborative filtering.'
        }
      ]
    },

    {
      id: 4,
      title: 'Anomaly Detection',
      description: 'Identifying unusual patterns in data',
      
      overview: `Anomaly Detection finds rare, unusual patterns that differ significantly from the norm. Fraud detection (1 fraudulent transaction in 10,000), network intrusion (malicious traffic among normal requests), equipment failure prediction (unusual sensor readings) - all rely on spotting anomalies.

Methods vary by data type: (1) Statistical - data points beyond 3 standard deviations, (2) Isolation Forest - anomalies are easier to isolate, (3) Autoencoders - normal data reconstructs well, anomalies don't, (4) One-Class SVM - learns boundary around normal data. Time series anomaly detection uses LSTM-based models or Prophet for forecasting + deviation detection.

Challenges: class imbalance (anomalies are rare 0.01-1%), defining "normal" (evolves over time), labeling (hard to get anomaly examples), and false positives (users hate false alarms). Semi-supervised learning is common - train on normal data only, flag deviations.`,

      keyPoints: [
        'Identify rare, unusual patterns differing from normal behavior',
        'Methods: Statistical, Isolation Forest, Autoencoders, One-Class SVM',
        'Applications: fraud, intrusion detection, equipment failure',
        'Challenges: extreme imbalance, evolving normal, labeling, false positives',
        'Often semi-supervised: train on normal data, detect deviations'
      ],

      useCases: [
        {
          title: 'Fraud Detection',
          description: 'Identify fraudulent transactions in real-time',
          example: 'Credit cards blocking suspicious transactions (99.9% normal, 0.1% fraud)'
        },
        {
          title: 'Network Security',
          description: 'Detect intrusions and attacks',
          example: 'Firewalls identifying DDoS attacks and malware traffic'
        },
        {
          title: 'Predictive Maintenance',
          description: 'Detect equipment issues before failure',
          example: 'Manufacturing detecting unusual vibration patterns in motors'
        },
        {
          title: 'Healthcare Monitoring',
          description: 'Alert on abnormal patient vitals',
          example: 'ICU monitoring detecting critical changes in heart rate patterns'
        }
      ],

      codeExamples: [
        {
          title: 'Anomaly Detection with Isolation Forest',
          code: `from sklearn.ensemble import IsolationForest
import numpy as np
import pandas as pd

# Load transaction data
df = pd.read_csv('transactions.csv')

# Features: amount, time, merchant_category, etc.
features = ['amount', 'hour', 'day_of_week', 'merchant_risk_score']
X = df[features]

# Train Isolation Forest (unsupervised)
model = IsolationForest(
    contamination=0.01,  # Expected % of anomalies
    random_state=42,
    n_estimators=100
)

# Fit on data
model.fit(X)

# Predict: -1 for anomalies, 1 for normal
predictions = model.predict(X)

# Get anomaly scores (lower = more anomalous)
scores = model.score_samples(X)

# Add to dataframe
df['anomaly'] = predictions
df['anomaly_score'] = scores

# Find anomalies
anomalies = df[df['anomaly'] == -1]
print(f"Found {len(anomalies)} anomalies out of {len(df)} transactions")

# Top 10 most anomalous
top_anomalies = df.nsmallest(10, 'anomaly_score')
print("\\nTop 10 anomalies:")
print(top_anomalies[['transaction_id', 'amount', 'anomaly_score']])

# Real-time scoring for new transaction
new_transaction = np.array([[5000, 3, 2, 0.8]])  # amount, hour, day, risk
is_anomaly = model.predict(new_transaction)[0]
if is_anomaly == -1:
    print("\\n⚠️  ALERT: Anomalous transaction detected!")
else:
    print("\\n✅ Normal transaction")`,
          language: 'python'
        }
      ],

      dos: [
        'Use Isolation Forest for multivariate anomalies (works well)',
        'For time series, use LSTM autoencoder (learns temporal patterns)',
        'Set contamination parameter based on expected anomaly rate',
        'Combine multiple methods for robust detection'
      ],

      donts: [
        'Don\'t use standard classification - need semi-supervised approach',
        'Don\'t ignore domain knowledge - define "normal" carefully',
        'Don\'t set contamination too high - causes false positives',
        'Don\'t forget to retrain as "normal" evolves over time'
      ],

      bestPractices: [
        'Start with Isolation Forest (simple, effective, no labels needed)',
        'Use autoencoders for high-dimensional data (images, text)',
        'Implement anomaly score thresholds with human review',
        'Monitor false positive rate - adjust sensitivity accordingly'
      ],

      quiz: [
        {
          question: 'Why is anomaly detection often semi-supervised?',
          options: [
            'It\'s faster than supervised learning',
            'Anomalies are rare and hard to label, so we train on normal data only',
            'It uses less memory',
            'It\'s required by law'
          ],
          correctAnswer: 1,
          explanation: 'Anomalies are typically very rare (0.01-1%) and hard to collect/label. Semi-supervised approaches train only on normal data and detect deviations, avoiding the need for labeled anomaly examples.'
        }
      ]
    },

    {
      id: 5,
      title: 'Reinforcement Learning',
      description: 'Learning through trial, error, and rewards',
      
      overview: `Reinforcement Learning (RL) trains agents to make sequential decisions by trial and error. Unlike supervised learning (learn from labels) or unsupervised learning (find patterns), RL learns from rewards and penalties. Agent takes actions in environment, receives rewards, and learns to maximize long-term cumulative reward.

Core concepts: (1) Agent - decision maker, (2) Environment - world agent interacts with, (3) State - current situation, (4) Action - what agent can do, (5) Reward - feedback signal, (6) Policy - strategy mapping states to actions. Goal: find optimal policy maximizing expected cumulative reward over time.

Famous successes: AlphaGo (beat world champion at Go), OpenAI Five (Dota 2), robotics (robot learning to walk), game AI, autonomous vehicles. Algorithms: Q-Learning (value-based), Policy Gradient (REINFORCE), Actor-Critic (A3C, PPO), Deep Q-Networks (DQN). RL is powerful but sample-inefficient - requires millions of interactions.`,

      keyPoints: [
        'Learn through trial, error, and rewards (not from labeled data)',
        'Components: Agent, Environment, State, Action, Reward, Policy',
        'Goal: maximize long-term cumulative reward',
        'Algorithms: Q-Learning, DQN, PPO, A3C',
        'Applications: game AI, robotics, autonomous vehicles, trading'
      ],

      useCases: [
        {
          title: 'Game AI',
          description: 'Master complex games through self-play',
          example: 'AlphaGo defeating world Go champion Lee Sedol'
        },
        {
          title: 'Robotics',
          description: 'Learn motor control and manipulation',
          example: 'Boston Dynamics robots learning to walk and balance'
        },
        {
          title: 'Autonomous Driving',
          description: 'Learn optimal driving policies',
          example: 'Waymo training driving decisions in simulation'
        },
        {
          title: 'Resource Optimization',
          description: 'Optimize complex system operations',
          example: 'Google reducing datacenter cooling costs by 40% with RL'
        }
      ],

      codeExamples: [
        {
          title: 'Q-Learning for Simple Grid World',
          code: `import numpy as np
import gym

# Create environment (simple grid world)
env = gym.make('FrozenLake-v1')

# Initialize Q-table (states x actions)
Q = np.zeros([env.observation_space.n, env.action_space.n])

# Hyperparameters
alpha = 0.1      # Learning rate
gamma = 0.99     # Discount factor
epsilon = 0.1    # Exploration rate
episodes = 10000

# Training loop
rewards_all = []
for episode in range(episodes):
    state = env.reset()
    total_reward = 0
    done = False
    
    while not done:
        # Epsilon-greedy action selection
        if np.random.random() < epsilon:
            action = env.action_space.sample()  # Explore
        else:
            action = np.argmax(Q[state])  # Exploit
        
        # Take action
        next_state, reward, done, _ = env.step(action)
        
        # Q-learning update
        old_value = Q[state, action]
        next_max = np.max(Q[next_state])
        
        # Q(s,a) = Q(s,a) + α[r + γ*max(Q(s',a')) - Q(s,a)]
        new_value = old_value + alpha * (reward + gamma * next_max - old_value)
        Q[state, action] = new_value
        
        state = next_state
        total_reward += reward
    
    rewards_all.append(total_reward)
    
    # Print progress
    if (episode + 1) % 1000 == 0:
        avg_reward = np.mean(rewards_all[-1000:])
        print(f"Episode {episode + 1}: Average reward = {avg_reward:.3f}")

# Test learned policy
state = env.reset()
done = False
total_reward = 0

print("\\nTesting learned policy:")
while not done:
    action = np.argmax(Q[state])  # Use learned policy
    state, reward, done, _ = env.step(action)
    total_reward += reward
    
print(f"Test reward: {total_reward}")`,
          language: 'python'
        }
      ],

      dos: [
        'Start with simple environments (CartPole, FrozenLake)',
        'Use pre-trained models when possible (expensive to train)',
        'Implement reward shaping for faster learning',
        'Use experience replay (DQN) for sample efficiency'
      ],

      donts: [
        'Don\'t expect quick results - RL needs millions of samples',
        'Don\'t use RL when supervised learning works (overkill)',
        'Don\'t skip exploration - gets stuck in local optima',
        'Don\'t ignore reward function design - crucial for success'
      ],

      bestPractices: [
        'Use stable baselines3 library (well-tested implementations)',
        'Start with PPO (Proximal Policy Optimization) - robust algorithm',
        'Train in simulation before real world (safety + speed)',
        'Monitor learning curves: reward, episode length, loss'
      ],

      quiz: [
        {
          question: 'What is the key difference between RL and supervised learning?',
          options: [
            'RL is faster',
            'RL learns from rewards through trial and error, not labeled examples',
            'RL uses less memory',
            'RL only works for games'
          ],
          correctAnswer: 1,
          explanation: 'Reinforcement Learning learns through trial and error by receiving rewards and penalties, unlike supervised learning which learns from labeled input-output pairs.'
        }
      ]
    },

    {
      id: 6,
      title: 'Edge AI & TinyML',
      description: 'Running AI on devices, not cloud',
      
      overview: `Edge AI runs machine learning models on devices (phones, IoT, cameras, drones) instead of cloud servers. Benefits: instant response (no network latency), privacy (data stays on device), reliability (works offline), and lower costs (no cloud compute fees). It's enabling real-time AI everywhere.

TinyML takes it further - ML on microcontrollers with <1MB RAM and <1MHz CPU. Think smart sensors, wearables, hearing aids. Models must be tiny (KB-sized), efficient (milliwatts), and fast. Techniques: model quantization (32-bit → 8-bit), pruning (remove unnecessary weights), knowledge distillation (large model → small model).

Frameworks: TensorFlow Lite (mobile/embedded), ONNX Runtime (cross-platform), Core ML (iOS), TensorRT (NVIDIA GPUs), Edge Impulse (end-to-end TinyML). Use cases: smartphone AI (face unlock, voice assistant), smart cameras (person detection), industrial IoT (predictive maintenance), healthcare wearables (fall detection).`,

      keyPoints: [
        'Run ML on devices (phones, IoT, cameras) instead of cloud',
        'Benefits: low latency, privacy, offline, cost-effective',
        'TinyML: ML on microcontrollers (<1MB RAM, KB-sized models)',
        'Techniques: quantization, pruning, knowledge distillation',
        'Frameworks: TensorFlow Lite, ONNX, Core ML, TensorRT'
      ],

      useCases: [
        {
          title: 'Smartphone AI',
          description: 'Face unlock, voice assistant, camera features',
          example: 'iPhone Face ID processing facial recognition on-device'
        },
        {
          title: 'Smart Cameras',
          description: 'Person detection, activity recognition',
          example: 'Security cameras detecting people without cloud upload'
        },
        {
          title: 'Industrial IoT',
          description: 'Predictive maintenance on factory floor',
          example: 'Sensors detecting motor anomalies in real-time'
        },
        {
          title: 'Wearables',
          description: 'Health monitoring and fall detection',
          example: 'Smartwatches detecting irregular heartbeat patterns'
        }
      ],

      codeExamples: [
        {
          title: 'Model Quantization for Edge Deployment',
          code: `import tensorflow as tf
import numpy as np

# Load trained model
model = tf.keras.models.load_model('trained_model.h5')

# Original model size
import os
original_size = os.path.getsize('trained_model.h5') / 1024  # KB
print(f"Original model: {original_size:.2f} KB")

# Convert to TensorFlow Lite with quantization
converter = tf.lite.TFLiteConverter.from_keras_model(model)

# Post-training quantization (weights: 32-bit → 8-bit)
converter.optimizations = [tf.lite.Optimize.DEFAULT]

# Representative dataset for calibration
def representative_dataset():
    for _ in range(100):
        yield [np.random.random((1, 224, 224, 3)).astype(np.float32)]

converter.representative_dataset = representative_dataset

# Full integer quantization (weights + activations)
converter.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS_INT8]
converter.inference_input_type = tf.uint8
converter.inference_output_type = tf.uint8

# Convert
tflite_model = converter.convert()

# Save quantized model
with open('quantized_model.tflite', 'wb') as f:
    f.write(tflite_model)

# Compare sizes
quantized_size = len(tflite_model) / 1024  # KB
print(f"Quantized model: {quantized_size:.2f} KB")
print(f"Size reduction: {(1 - quantized_size/original_size)*100:.1f}%")

# Test inference
interpreter = tf.lite.Interpreter(model_content=tflite_model)
interpreter.allocate_tensors()

# Get input/output details
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Run inference
test_input = np.random.random((1, 224, 224, 3)).astype(np.float32)
interpreter.set_tensor(input_details[0]['index'], test_input)
interpreter.invoke()
output = interpreter.get_tensor(output_details[0]['index'])

print(f"\\nInference successful! Output shape: {output.shape}")`,
          language: 'python'
        }
      ],

      dos: [
        'Use quantization (8-bit) for 4x size reduction, faster inference',
        'Test quantized model accuracy - acceptable degradation is 1-2%',
        'Use TensorFlow Lite for mobile, Edge Impulse for microcontrollers',
        'Optimize model architecture (MobileNet, EfficientNet for edge)'
      ],

      donts: [
        'Don\'t deploy large models without optimization',
        'Don\'t forget to test on actual device - not just laptop',
        'Don\'t ignore power consumption - critical for battery devices',
        'Don\'t skip representative dataset for quantization calibration'
      ],

      bestPractices: [
        'Start with MobileNetV3 or EfficientNet-Lite (designed for edge)',
        'Use post-training quantization first (easy, good results)',
        'For TinyML, use quantization-aware training for better accuracy',
        'Benchmark inference time and memory on target device'
      ],

      quiz: [
        {
          question: 'What is the main benefit of Edge AI over cloud AI?',
          options: [
            'Higher accuracy',
            'Low latency, privacy, and works offline',
            'Easier to implement',
            'Cheaper to develop'
          ],
          correctAnswer: 1,
          explanation: 'Edge AI processes data on-device, providing instant response (no network latency), better privacy (data stays local), and offline functionality - crucial for real-time applications.'
        }
      ]
    },

    {
      id: 7,
      title: 'Explainable AI (XAI)',
      description: 'Understanding and interpreting AI decisions',
      
      overview: `Explainable AI (XAI) makes AI decisions interpretable and transparent. "Why did the model reject my loan?" "Which features drove this medical diagnosis?" As AI impacts critical decisions (healthcare, finance, hiring), understanding the "why" is essential for trust, debugging, fairness, and regulatory compliance.

Techniques: (1) SHAP (SHapley Additive exPlanations) - shows feature importance for each prediction, (2) LIME (Local Interpretable Model-agnostic Explanations) - explains individual predictions with simple models, (3) Attention visualization - shows what model focuses on, (4) Feature importance - global model understanding, (5) Counterfactual explanations - "change X to Y to get different outcome".

Trade-off: complex models (deep learning, gradient boosting) are more accurate but less interpretable. Simple models (linear regression, decision trees) are interpretable but less powerful. XAI bridges this gap - get high accuracy AND explanations. Libraries: SHAP, LIME, ELI5, InterpretML provide ready-to-use tools.`,

      keyPoints: [
        'Make AI decisions interpretable and transparent',
        'Techniques: SHAP, LIME, attention visualization, feature importance',
        'Essential for trust, debugging, fairness, regulatory compliance',
        'Trade-off: accuracy vs interpretability (XAI bridges gap)',
        'Libraries: SHAP, LIME, ELI5, InterpretML'
      ],

      useCases: [
        {
          title: 'Healthcare Diagnosis',
          description: 'Explain why AI recommended specific diagnosis',
          example: 'Radiologist understanding which image regions indicate cancer'
        },
        {
          title: 'Credit Scoring',
          description: 'Explain loan approval/rejection decisions',
          example: 'Bank showing customer why loan was denied (regulatory requirement)'
        },
        {
          title: 'Hiring Systems',
          description: 'Ensure fair, unbiased candidate evaluation',
          example: 'HR auditing AI recruiter for gender/race bias'
        },
        {
          title: 'Fraud Detection',
          description: 'Explain why transaction was flagged',
          example: 'Bank analyst investigating fraud alert reasons'
        }
      ],

      codeExamples: [
        {
          title: 'SHAP for Model Explanation',
          code: `import shap
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

# Train model
df = pd.read_csv('credit_data.csv')
X = df.drop('approved', axis=1)
y = df['approved']

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)

# Create SHAP explainer
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X)

# Explain single prediction
sample_idx = 0
sample = X.iloc[sample_idx]
prediction = model.predict_proba([sample])[0]

print(f"Prediction: {prediction[1]:.2%} probability of approval")
print("\\nFeature contributions:")

# Get SHAP values for this sample
sample_shap = shap_values[1][sample_idx]  # Class 1 (approved)

# Sort features by absolute contribution
feature_importance = list(zip(X.columns, sample_shap))
feature_importance.sort(key=lambda x: abs(x[1]), reverse=True)

for feature, contribution in feature_importance[:5]:
    direction = "increases" if contribution > 0 else "decreases"
    print(f"  {feature}: {direction} approval by {abs(contribution):.3f}")

# Visualize (requires matplotlib)
shap.initjs()
shap.force_plot(
    explainer.expected_value[1],
    sample_shap,
    sample,
    matplotlib=True
)

# Summary plot (global explanations)
shap.summary_plot(shap_values[1], X, plot_type="bar")

# Dependence plot (relationship between feature and SHAP value)
shap.dependence_plot("income", shap_values[1], X)

# Output example:
# Prediction: 87.50% probability of approval
# Feature contributions:
#   income: increases approval by 0.234
#   credit_score: increases approval by 0.156
#   debt_ratio: decreases approval by 0.089
#   age: increases approval by 0.045
#   employment_years: increases approval by 0.023`,
          language: 'python'
        }
      ],

      dos: [
        'Use SHAP for tree-based models (fast, accurate explanations)',
        'Use LIME for any model type (model-agnostic)',
        'Validate explanations with domain experts',
        'Show explanations to end users for transparency'
      ],

      donts: [
        'Don\'t trust black-box models for high-stakes decisions without XAI',
        'Don\'t assume feature importance = causation',
        'Don\'t ignore fairness - check for bias in explanations',
        'Don\'t use overly complex explanations users won\'t understand'
      ],

      bestPractices: [
        'SHAP for accurate, theoretically grounded explanations',
        'Combine global (overall model) + local (per-prediction) explanations',
        'Document explanation methodology for audits',
        'Use attention visualization for deep learning (images, text)'
      ],

      quiz: [
        {
          question: 'Why is Explainable AI important in healthcare and finance?',
          options: [
            'It makes models faster',
            'Trust, regulatory compliance, and understanding critical decisions',
            'It reduces training time',
            'It\'s not important'
          ],
          correctAnswer: 1,
          explanation: 'In high-stakes domains like healthcare and finance, we need to understand and trust AI decisions, meet regulatory requirements (like right to explanation), and ensure fairness - XAI provides this transparency.'
        }
      ]
    },

    {
      id: 8,
      title: 'AI in Industry',
      description: 'Real-world AI applications across sectors',
      
      overview: `AI is transforming every industry. Healthcare (diagnosis, drug discovery), Finance (fraud detection, trading), Manufacturing (predictive maintenance, quality control), Retail (recommendations, demand forecasting), Agriculture (crop monitoring, yield prediction), Transportation (autonomous vehicles, route optimization) - AI creates value everywhere.

Success requires: (1) Clear business problem (not "use AI" but "reduce customer churn by 20%"), (2) Quality data (garbage in = garbage out), (3) Domain expertise (data scientists + domain experts), (4) Production infrastructure (MLOps, monitoring), (5) Change management (people must trust and adopt AI). 87% of AI projects fail - mostly non-technical reasons.

Real examples: Netflix saves $1B/year from recommendations, Amazon saves 20% in inventory costs with demand forecasting, Tesla trains autonomous driving with 3M+ cars, hospitals detect cancer earlier with AI radiology. AI isn't magic - it's pattern recognition applied to real problems with measurable ROI.`,

      keyPoints: [
        'AI transforming healthcare, finance, manufacturing, retail, agriculture, transport',
        'Success needs: clear problem, quality data, domain expertise, MLOps, adoption',
        '87% of AI projects fail - mostly non-technical reasons',
        'Real examples: Netflix ($1B savings), Amazon (20% inventory reduction)',
        'Focus on business value and measurable ROI, not just technology'
      ],

      useCases: [
        {
          title: 'Healthcare - Medical Imaging',
          description: 'AI detecting diseases from scans',
          example: 'Google AI detecting diabetic retinopathy at 94% accuracy'
        },
        {
          title: 'Finance - Fraud Detection',
          description: 'Real-time transaction monitoring',
          example: 'PayPal preventing $18M+ in fraud daily using ML'
        },
        {
          title: 'Manufacturing - Predictive Maintenance',
          description: 'Predict equipment failures before they happen',
          example: 'GE reducing unplanned downtime by 10-20% with AI'
        },
        {
          title: 'Retail - Demand Forecasting',
          description: 'Optimize inventory and reduce waste',
          example: 'Walmart forecasting demand for 500M+ products weekly'
        },
        {
          title: 'Agriculture - Precision Farming',
          description: 'Monitor crop health and optimize yields',
          example: 'John Deere using computer vision for weed detection'
        },
        {
          title: 'Transportation - Route Optimization',
          description: 'Find optimal delivery routes in real-time',
          example: 'UPS saving 10M+ gallons of fuel yearly with AI routing'
        }
      ],

      codeExamples: [
        {
          title: 'End-to-End Business Problem: Customer Churn Prediction',
          code: `# Business Problem: Reduce customer churn by 20%
# Approach: Predict which customers will churn, offer retention incentives

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import classification_report, roc_auc_score
import joblib

# 1. Load and prepare data
df = pd.read_csv('customer_data.csv')

# 2. Feature engineering (domain knowledge crucial!)
df['tenure_months'] = (pd.to_datetime('today') - pd.to_datetime(df['signup_date'])).dt.days / 30
df['avg_monthly_spend'] = df['total_spend'] / df['tenure_months']
df['support_tickets_per_month'] = df['support_tickets'] / df['tenure_months']
df['days_since_last_login'] = (pd.to_datetime('today') - pd.to_datetime(df['last_login'])).dt.days

# Define features and target
features = ['tenure_months', 'avg_monthly_spend', 'support_tickets_per_month',
            'days_since_last_login', 'age', 'num_products', 'is_premium']
X = df[features]
y = df['churned']  # 1 = churned, 0 = retained

# 3. Train/test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# 4. Train model
model = GradientBoostingClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=5,
    random_state=42
)
model.fit(X_train, y_train)

# 5. Evaluate
y_pred = model.predict(X_test)
y_pred_proba = model.predict_proba(X_test)[:, 1]

print("Model Performance:")
print(classification_report(y_test, y_pred))
print(f"\\nROC AUC: {roc_auc_score(y_test, y_pred_proba):.3f}")

# 6. Business impact analysis
# Identify high-risk customers (churn probability > 70%)
high_risk = df[model.predict_proba(X)[:, 1] > 0.7]
print(f"\\nHigh-risk customers: {len(high_risk)}")
print(f"Potential revenue at risk: $\\{high_risk['avg_monthly_spend'].sum() * 12:,.0f}/year")

# 7. Feature importance (business insights)
feature_importance = pd.DataFrame({
    'feature': features,
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)

print("\\nTop churn indicators:")
print(feature_importance)

# 8. Deploy model
joblib.dump(model, 'churn_model.pkl')
print("\\nModel saved for production deployment")

# Business outcome:
# - Identify 15% of customers at high churn risk
# - Offer targeted retention incentives (discount, support)
# - Reduce churn from 25% → 20% (5% absolute reduction)
# - ROI: Retention cost $50/customer, LTV $2000 → 40x ROI`,
          language: 'python'
        }
      ],

      dos: [
        'Start with clear business problem and success metrics',
        'Involve domain experts from day one',
        'Calculate ROI before starting - is AI worth it?',
        'Start small, prove value, then scale'
      ],

      donts: [
        'Don\'t use AI for the sake of using AI - solve real problems',
        'Don\'t ignore data quality - clean data beats fancy algorithms',
        'Don\'t skip change management - people must adopt the solution',
        'Don\'t forget ethical considerations (bias, privacy, fairness)'
      ],

      bestPractices: [
        'Define success: specific metric (reduce churn by 20%, not "improve business")',
        'Validate with pilot before full rollout',
        'Monitor business metrics (revenue, cost) not just ML metrics (accuracy)',
        'Document everything: data sources, assumptions, limitations'
      ],

      quiz: [
        {
          question: 'Why do 87% of AI projects fail?',
          options: [
            'AI technology is not ready',
            'Mostly non-technical: unclear goals, poor data, lack of adoption',
            'AI is too expensive',
            'Not enough data scientists'
          ],
          correctAnswer: 1,
          explanation: 'Most AI project failures are non-technical: unclear business objectives, poor data quality, lack of domain expertise, insufficient production infrastructure, and failure to get user adoption - not algorithm limitations.'
        }
      ]
    }
  ]
};

export { specializations };
