// Practice Assignments - Specializations (Expert Level)

export const specializationAssignments = {
  // Computer Vision (ID: 1)
  'cv-1': [
    {
      id: 1,
      title: 'Image Histogram',
      difficulty: 'Easy',
      description: 'Calculate image histogram.',
      hints: [
        'Count pixels at each intensity',
        'Useful for contrast analysis',
        '256 bins for 8-bit images'
      ],
      starterCode: `import numpy as np

def histogram(image, bins=256):
    hist = np.zeros(bins)
    # TODO: Count pixel intensities
    return hist

np.random.seed(42)
image = np.random.randint(0, 256, (8, 8))

print("Image (8x8):")
print(image)`,
      solution: `import numpy as np

def histogram(image, bins=256):
    hist = np.zeros(bins)
    for pixel in image.flatten():
        hist[pixel] += 1
    return hist

np.random.seed(42)
image = np.random.randint(0, 256, (8, 8))

print("Image (8x8):")
print(image)

hist = histogram(image)
print(f"\\nMean intensity: {np.mean(image):.1f}")
print(f"Std: {np.std(image):.1f}")
print(f"\\nNon-zero bins: {np.sum(hist > 0)}")`
    },
    {
      id: 2,
      title: 'IoU Calculation',
      difficulty: 'Medium',
      description: 'Calculate Intersection over Union.',
      hints: [
        'IoU = intersection / union',
        'Box format: [x1, y1, x2, y2]',
        'Used to evaluate detections'
      ],
      starterCode: `import numpy as np

def calculate_iou(box1, box2):
    # box: [x1, y1, x2, y2]
    # TODO: Calculate intersection
    # TODO: Calculate union
    # TODO: Return IoU
    pass

box1 = [100, 100, 200, 200]
box2 = [150, 150, 250, 250]

iou = calculate_iou(box1, box2)
print(f"IoU: {iou}")`,
      solution: `import numpy as np

def calculate_iou(box1, box2):
    # Intersection
    x1 = max(box1[0], box2[0])
    y1 = max(box1[1], box2[1])
    x2 = min(box1[2], box2[2])
    y2 = min(box1[3], box2[3])
    
    intersection = max(0, x2-x1) * max(0, y2-y1)
    
    # Union
    area1 = (box1[2]-box1[0]) * (box1[3]-box1[1])
    area2 = (box2[2]-box2[0]) * (box2[3]-box2[1])
    union = area1 + area2 - intersection
    
    return intersection / union if union > 0 else 0

box1 = [100, 100, 200, 200]
box2 = [150, 150, 250, 250]

print(f"Box 1: {box1}")
print(f"Box 2: {box2}")
print(f"IoU: {calculate_iou(box1, box2):.3f}")

# No overlap
box3 = [300, 300, 400, 400]
print(f"\\nBox 1 vs Box 3 (no overlap): {calculate_iou(box1, box3):.3f}")`
    }
  ],

  // Time Series (ID: 2)
  'ts-2': [
    {
      id: 1,
      title: 'Moving Average',
      difficulty: 'Easy',
      description: 'Calculate simple moving average.',
      hints: [
        'SMA: average of last N values',
        'Smooths noise',
        'Window slides over data'
      ],
      starterCode: `import numpy as np

def moving_average(data, window):
    sma = []
    # TODO: Calculate SMA
    return np.array(sma)

prices = np.array([100, 102, 101, 105, 110, 108, 115, 112])
print(f"Prices: {prices}")
print(f"SMA(3): {moving_average(prices, 3)}")`,
      solution: `import numpy as np

def moving_average(data, window):
    sma = []
    for i in range(len(data) - window + 1):
        sma.append(np.mean(data[i:i+window]))
    return np.array(sma)

prices = np.array([100, 102, 101, 105, 110, 108, 115, 112])
print(f"Prices: {prices}")
print(f"SMA(3): {moving_average(prices, 3).round(1)}")
print(f"SMA(5): {moving_average(prices, 5).round(1)}")

print("\\nLarger window = smoother but more lag")`
    }
  ],

  // Recommender (ID: 3)
  'rec-3': [
    {
      id: 1,
      title: 'Collaborative Filtering',
      difficulty: 'Medium',
      description: 'Build user-based recommender.',
      hints: [
        'Find similar users',
        'Use their ratings to predict',
        'Cosine similarity for users'
      ],
      starterCode: `import numpy as np

# User-item ratings (0 = not rated)
ratings = np.array([
    [5, 4, 0, 0, 3],
    [4, 5, 4, 0, 0],
    [0, 0, 5, 4, 4],
])

def cosine_sim(a, b):
    mask = (a > 0) & (b > 0)
    if not mask.any():
        return 0
    return np.dot(a[mask], b[mask]) / (np.linalg.norm(a[mask]) * np.linalg.norm(b[mask]))

# TODO: Find most similar user to user 0
print("User similarities:")`,
      solution: `import numpy as np

ratings = np.array([
    [5, 4, 0, 0, 3],
    [4, 5, 4, 0, 0],
    [0, 0, 5, 4, 4],
])

def cosine_sim(a, b):
    mask = (a > 0) & (b > 0)
    if not mask.any():
        return 0
    return np.dot(a[mask], b[mask]) / (np.linalg.norm(a[mask]) * np.linalg.norm(b[mask]) + 1e-8)

print("Rating Matrix:")
print(ratings)

print("\\nUser Similarities:")
for i in range(len(ratings)):
    for j in range(i+1, len(ratings)):
        sim = cosine_sim(ratings[i], ratings[j])
        print(f"  User {i} - User {j}: {sim:.3f}")

# Predict for user 0, item 2
print("\\nPrediction: User 0 would rate Item 2 based on similar users")`
    }
  ],

  // Anomaly Detection (ID: 4)
  'anomaly-4': [
    {
      id: 1,
      title: 'Z-Score Anomaly Detection',
      difficulty: 'Easy',
      description: 'Detect outliers using Z-score.',
      hints: [
        'Z = (x - mean) / std',
        '|Z| > 3 is typically anomaly',
        'Assumes normal distribution'
      ],
      starterCode: `import numpy as np

def detect_anomalies(data, threshold=3):
    mean = np.mean(data)
    std = np.std(data)
    # TODO: Calculate Z-scores and find anomalies
    pass

np.random.seed(42)
data = np.random.randn(100) * 10 + 50
data = np.append(data, [150, 0])  # Add anomalies

print(f"Data points: {len(data)}")`,
      solution: `import numpy as np

def detect_anomalies(data, threshold=3):
    mean = np.mean(data)
    std = np.std(data)
    z_scores = (data - mean) / std
    anomalies = np.where(np.abs(z_scores) > threshold)[0]
    return anomalies, z_scores

np.random.seed(42)
data = np.random.randn(100) * 10 + 50
data = np.append(data, [150, 0])

anomalies, z_scores = detect_anomalies(data)

print(f"Data: mean={np.mean(data):.1f}, std={np.std(data):.1f}")
print(f"\\nDetected {len(anomalies)} anomalies:")
for idx in anomalies:
    print(f"  Index {idx}: value={data[idx]:.1f}, z={z_scores[idx]:.2f}")`
    }
  ],

  // Reinforcement Learning (ID: 5)
  'rl-5': [
    {
      id: 1,
      title: 'Q-Learning',
      difficulty: 'Hard',
      description: 'Implement Q-learning for simple environment.',
      hints: [
        'Q(s,a) += alpha * (r + gamma*max(Q(s\')) - Q(s,a))',
        'Epsilon-greedy exploration',
        'Learn optimal policy'
      ],
      starterCode: `import numpy as np

class SimpleEnv:
    def __init__(self):
        self.state = 0
        self.goal = 4
    
    def reset(self):
        self.state = 0
        return self.state
    
    def step(self, action):
        if action == 1:  # right
            self.state = min(self.state + 1, self.goal)
        else:  # left
            self.state = max(self.state - 1, 0)
        reward = 10 if self.state == self.goal else -1
        done = self.state == self.goal
        return self.state, reward, done

# TODO: Implement Q-learning
Q = np.zeros((5, 2))
print("Q-table:")`,
      solution: `import numpy as np

class SimpleEnv:
    def __init__(self):
        self.state = 0
        self.goal = 4
    
    def reset(self):
        self.state = 0
        return self.state
    
    def step(self, action):
        if action == 1:
            self.state = min(self.state + 1, self.goal)
        else:
            self.state = max(self.state - 1, 0)
        reward = 10 if self.state == self.goal else -1
        done = self.state == self.goal
        return self.state, reward, done

env = SimpleEnv()
Q = np.zeros((5, 2))
alpha, gamma, epsilon = 0.1, 0.9, 0.1

for _ in range(500):
    state = env.reset()
    while True:
        action = np.random.randint(2) if np.random.random() < epsilon else np.argmax(Q[state])
        next_state, reward, done = env.step(action)
        Q[state, action] += alpha * (reward + gamma * np.max(Q[next_state]) - Q[state, action])
        state = next_state
        if done:
            break

print("Q-table (left, right):")
for s in range(5):
    action = "Right" if np.argmax(Q[s]) == 1 else "Left"
    print(f"  State {s}: {Q[s].round(1)} -> {action}")`
    }
  ]
};
