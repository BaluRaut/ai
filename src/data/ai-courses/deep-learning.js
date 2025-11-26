export const deepLearning = {
  id: 'deep-learning',
  title: 'Deep Learning',
  description: 'Neural networks and deep learning architectures',
  icon: '🧠',
  color: '#9C27B0',
  level: 'Advanced',
  duration: '25 hours',
  topics: [
    {
      id: 1,
      title: 'Neural Networks Basics',
      description: 'Understanding artificial neural networks',
      
      overview: `Neural Networks are inspired by how our brain works. Think of them as layers of simple decision-makers working together. Each 'neuron' takes inputs, does simple math, and passes the result forward. When you stack many layers together, they can learn very complex patterns - like recognizing faces in photos or understanding speech.

A simple neural network has 3 parts: Input layer (receives data), Hidden layers (does the learning), and Output layer (gives prediction). During training, the network adjusts tiny numbers called 'weights' to get better at its task. It's like learning to ride a bike - you make small adjustments until you get it right.

The magic happens through 'backpropagation' - when the network makes a mistake, it goes backward and adjusts the weights. After seeing thousands of examples, it learns patterns that even humans might miss. This is why neural networks power everything from photo filters to self-driving cars.`,

      keyPoints: [
        'Layers of neurons working together to learn patterns',
        'Forward pass: data flows input → hidden → output',
        'Backward pass: errors flow back to adjust weights',
        'Activation functions add non-linearity (ReLU, Sigmoid, Tanh)',
        'Need lots of data and computing power to train'
      ],

      useCases: [
        {
          title: 'Image Recognition',
          description: 'Identifying objects in photos - cats, dogs, cars, people',
          example: 'Facebook auto-tagging friends in photos with 97% accuracy'
        },
        {
          title: 'Speech Recognition',
          description: 'Converting spoken words to text',
          example: 'Siri and Alexa understanding your voice commands'
        },
        {
          title: 'Medical Diagnosis',
          description: 'Detecting diseases from X-rays and MRI scans',
          example: 'Finding tumors in medical images faster than radiologists'
        },
        {
          title: 'Credit Card Fraud',
          description: 'Detecting unusual spending patterns in real-time',
          example: 'Banks blocking suspicious transactions before money is lost'
        }
      ],

      codeExamples: [
        {
          title: 'Simple Neural Network with TensorFlow.js',
          language: 'javascript',
          code: `// Create a simple neural network
const model = tf.sequential();

// Input layer + first hidden layer
model.add(tf.layers.dense({
  units: 16,           // 16 neurons
  activation: 'relu',  // ReLU activation
  inputShape: [4]      // 4 input features
}));

// Second hidden layer
model.add(tf.layers.dense({
  units: 8,
  activation: 'relu'
}));

// Output layer
model.add(tf.layers.dense({
  units: 3,            // 3 classes
  activation: 'softmax' // For classification
}));

// Compile the model
model.compile({
  optimizer: 'adam',
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy']
});

// Training data (example)
const xs = tf.tensor2d([[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]]);
const ys = tf.tensor2d([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);

// Train the model
await model.fit(xs, ys, {
  epochs: 100,
  callbacks: {
    onEpochEnd: (epoch, logs) => {
      if (epoch % 20 === 0) {
        console.log(\`Epoch $\\{epoch}: loss = $\\{logs.loss.toFixed(4)}\`);
      }
    }
  }
});

console.log('Training complete!');`
        },
        {
          title: 'Simple Neural Network with PyTorch',
          language: 'python',
          code: `import torch
import torch.nn as nn
import torch.optim as optim

# Define neural network
class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
        self.fc1 = nn.Linear(4, 16)   # Input to hidden1
        self.fc2 = nn.Linear(16, 8)   # Hidden1 to hidden2
        self.fc3 = nn.Linear(8, 3)    # Hidden2 to output
        self.relu = nn.ReLU()
        self.softmax = nn.Softmax(dim=1)
    
    def forward(self, x):
        x = self.relu(self.fc1(x))    # First hidden layer
        x = self.relu(self.fc2(x))    # Second hidden layer
        x = self.softmax(self.fc3(x)) # Output layer
        return x

# Create model
model = SimpleNN()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training data
X = torch.tensor([[1., 2., 3., 4.], 
                  [2., 3., 4., 5.], 
                  [3., 4., 5., 6.]])
y = torch.tensor([0, 1, 2])  # Class labels

# Training loop
for epoch in range(100):
    optimizer.zero_grad()
    outputs = model(X)
    loss = criterion(outputs, y)
    loss.backward()
    optimizer.step()
    
    if epoch % 20 == 0:
        print(f'Epoch $\\{epoch}: loss = $\\{loss.item():.4f}')

print('Training complete!')`
        }
      ],

      diagram: {
        type: 'network',
        layers: [
          { name: 'Input Layer', neurons: 4, description: 'Features' },
          { name: 'Hidden Layer 1', neurons: 16, description: 'ReLU activation' },
          { name: 'Hidden Layer 2', neurons: 8, description: 'ReLU activation' },
          { name: 'Output Layer', neurons: 3, description: 'Softmax (probabilities)' }
        ]
      },

      dos: [
        'Start with 1-2 hidden layers, add more only if needed',
        'Normalize your input data (mean=0, std=1)',
        'Use ReLU activation for hidden layers - it\'s fast and works well',
        'Monitor training and validation loss to detect overfitting'
      ],

      donts: [
        'Don\'t use too many layers without enough data - you\'ll overfit',
        'Don\'t forget to split data: 70% train, 15% validation, 15% test',
        'Don\'t use Sigmoid/Tanh everywhere - they cause vanishing gradients',
        'Don\'t train without GPU if you have more than 10,000 samples'
      ],

      bestPractices: [
        'Use frameworks like TensorFlow or PyTorch - don\'t code from scratch',
        'Start simple, add complexity gradually',
        'Use batch normalization to train faster and more stable',
        'Save model checkpoints during training - don\'t lose progress'
      ],

      quiz: [
        {
          question: 'What is backpropagation?',
          options: [
            'Sending data forward through the network',
            'Adjusting weights by propagating errors backward',
            'A type of activation function',
            'The process of splitting data'
          ],
          correctAnswer: 1,
          explanation: 'Backpropagation calculates gradients and propagates errors backward through the network to update weights and minimize loss.'
        },
        {
          question: 'Which activation function is most commonly used in hidden layers?',
          options: [
            'Sigmoid',
            'Tanh',
            'ReLU',
            'Linear'
          ],
          correctAnswer: 2,
          explanation: 'ReLU (Rectified Linear Unit) is the most popular activation for hidden layers because it\'s fast, simple, and avoids vanishing gradient problems.'
        },
        {
          question: 'What happens during the forward pass?',
          options: [
            'Weights are updated',
            'Data flows from input to output',
            'Errors are calculated',
            'The model is saved'
          ],
          correctAnswer: 1,
          explanation: 'During the forward pass, input data flows through the network layer by layer to produce predictions.'
        }
      ]
    },

    {
      id: 2,
      title: 'Convolutional Neural Networks (CNN)',
      description: 'Deep learning for images and visual data',
      
      overview: `CNNs are specialized neural networks for images. Think of them as having 'sliding windows' that scan across an image looking for patterns. First layers detect simple things like edges and corners. Deeper layers combine these to recognize complex objects like eyes, wheels, or leaves.

The key innovation is 'convolution' - instead of looking at the entire image at once, CNN looks at small patches (like 3×3 pixels). This means a cat detector learns to find cat features anywhere in the image, not just in one position. It's like learning to recognize your friend's face whether they're on the left or right side of a photo.

CNNs have three main types of layers: Convolutional layers (find patterns), Pooling layers (reduce size and keep important info), and Fully connected layers (make final decision). This architecture is why your phone can recognize your face in milliseconds, even in different lighting.`,

      keyPoints: [
        'Specialized for images - automatically learns visual features',
        'Convolutional filters scan image to detect patterns (edges, shapes, objects)',
        'Pooling layers reduce size while keeping important information',
        'Position-invariant: recognizes objects anywhere in image',
        'Much fewer parameters than regular neural networks for images'
      ],

      useCases: [
        {
          title: 'Face Recognition',
          description: 'Identifying people from their faces',
          example: 'iPhone Face ID unlocking your phone in 0.5 seconds'
        },
        {
          title: 'Self-Driving Cars',
          description: 'Detecting pedestrians, traffic signs, and lane markings',
          example: 'Tesla Autopilot recognizing stop signs and traffic lights'
        },
        {
          title: 'Medical Imaging',
          description: 'Analyzing X-rays, CT scans, and MRIs for diseases',
          example: 'Detecting COVID-19 from chest X-rays with 95% accuracy'
        },
        {
          title: 'Quality Control',
          description: 'Finding defects in manufactured products',
          example: 'Smartphone factories detecting screen scratches automatically'
        }
      ],

      codeExamples: [
        {
          title: 'CNN for Image Classification - TensorFlow.js',
          language: 'javascript',
          code: `// Create CNN model
const model = tf.sequential();

// First convolutional block
model.add(tf.layers.conv2d({
  inputShape: [28, 28, 1],  // 28x28 grayscale image
  filters: 32,              // 32 different filters
  kernelSize: 3,            // 3x3 filter size
  activation: 'relu'
}));
model.add(tf.layers.maxPooling2d({ poolSize: 2 }));

// Second convolutional block
model.add(tf.layers.conv2d({
  filters: 64,
  kernelSize: 3,
  activation: 'relu'
}));
model.add(tf.layers.maxPooling2d({ poolSize: 2 }));

// Flatten and fully connected layers
model.add(tf.layers.flatten());
model.add(tf.layers.dense({ units: 128, activation: 'relu' }));
model.add(tf.layers.dropout({ rate: 0.5 }));
model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));

// Compile
model.compile({
  optimizer: 'adam',
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy']
});

console.log('CNN Model created!');
model.summary();`
        }
      ],

      dos: [
        'Use data augmentation: rotate, flip, zoom images to increase dataset',
        'Start with pre-trained models like ResNet or VGG (transfer learning)',
        'Use small filters (3×3 or 5×5) stacked deep rather than large filters',
        'Apply batch normalization after convolutional layers'
      ],

      donts: [
        'Don\'t use fully connected layers for images - use CNN instead',
        'Don\'t train from scratch if you have less than 10,000 images',
        'Don\'t use large filter sizes (7×7 or bigger) - inefficient',
        'Don\'t skip data augmentation - it prevents overfitting'
      ],

      bestPractices: [
        'Use transfer learning: fine-tune ResNet50 or MobileNet',
        'Apply MaxPooling after 2-3 convolutional layers',
        'Use dropout (0.3-0.5) before fully connected layers',
        'Monitor class-wise accuracy - some classes might need more data'
      ],

      quiz: [
        {
          question: 'What does a convolutional layer do?',
          options: [
            'Reduces image size',
            'Applies sliding filters to detect patterns',
            'Classifies the image',
            'Normalizes pixel values'
          ],
          correctAnswer: 1,
          explanation: 'Convolutional layers apply learnable filters that slide across the image to detect patterns like edges, textures, and shapes.'
        },
        {
          question: 'What is the purpose of pooling layers?',
          options: [
            'Increase image resolution',
            'Add more parameters',
            'Reduce spatial dimensions while keeping important features',
            'Change color channels'
          ],
          correctAnswer: 2,
          explanation: 'Pooling layers reduce the spatial size of feature maps, making the network more efficient while retaining the most important information.'
        }
      ]
    },

    {
      id: 3,
      title: 'Recurrent Neural Networks (RNN)',
      description: 'Neural networks for sequences and time-series',
      
      overview: `RNNs are designed for sequences - data where order matters. Think of reading a sentence: each word depends on previous words. RNNs have 'memory' - they remember what they saw before. When processing word 5, they still remember words 1-4.

Imagine predicting the next word: 'The cat sat on the ___'. You need to remember 'cat' to guess 'mat'. Regular neural networks forget previous inputs, but RNNs maintain a hidden state that carries information forward. It's like having a notebook where you write down important things as you read.

RNNs process one item at a time: read word → update memory → read next word. This makes them perfect for text, speech, and time-series data. However, basic RNNs struggle with long sequences (they 'forget' things from 50 steps ago). That's why we use improved versions like LSTM and GRU.`,

      keyPoints: [
        'Designed for sequential data: text, speech, time-series',
        'Has memory: remembers previous inputs through hidden state',
        'Processes sequences one step at a time',
        'Shares weights across time steps - efficient learning',
        'Vanilla RNN has vanishing gradient problem for long sequences'
      ],

      useCases: [
        {
          title: 'Language Translation',
          description: 'Translating text from one language to another',
          example: 'Google Translate converting English to Hindi in real-time'
        },
        {
          title: 'Speech Recognition',
          description: 'Converting audio waveforms to text',
          example: 'YouTube auto-generating captions for videos'
        },
        {
          title: 'Stock Price Prediction',
          description: 'Forecasting future prices based on historical patterns',
          example: 'Predicting tomorrow\'s price using last 60 days of data'
        },
        {
          title: 'Music Generation',
          description: 'Creating new melodies based on learned patterns',
          example: 'AI composing background music for videos'
        }
      ],

      dos: [
        'Use LSTM or GRU instead of vanilla RNN for better results',
        'Normalize your time-series data before feeding to RNN',
        'Use bidirectional RNN to see both past and future context',
        'Apply gradient clipping to prevent exploding gradients'
      ],

      donts: [
        'Don\'t use vanilla RNN for sequences longer than 20-30 steps',
        'Don\'t forget to reset hidden state between different sequences',
        'Don\'t use RNN for very long sequences - use Transformers instead',
        'Don\'t use large batch sizes - RNN training is memory-intensive'
      ],

      bestPractices: [
        'Start with LSTM (2-3 layers with 128-256 units each)',
        'Use teacher forcing during training for faster convergence',
        'Apply dropout between RNN layers (not within timesteps)',
        'For language tasks, use embeddings (Word2Vec or GloVe)'
      ],

      quiz: [
        {
          question: 'What makes RNNs suitable for sequential data?',
          options: [
            'They have more layers than CNNs',
            'They maintain hidden state to remember previous inputs',
            'They use larger batch sizes',
            'They train faster than other networks'
          ],
          correctAnswer: 1,
          explanation: 'RNNs have a hidden state that acts as memory, allowing them to remember information from previous time steps in the sequence.'
        }
      ]
    },

    {
      id: 4,
      title: 'Long Short-Term Memory (LSTM)',
      description: 'Advanced RNN with long-term memory',
      
      overview: `LSTM is a smarter version of RNN that can remember information for very long sequences. Think of it as having a selective memory - it decides what to remember, what to forget, and what to pay attention to. This makes it much better than basic RNN for real-world tasks.

LSTM has 'gates' - like doors that control information flow. Forget gate decides 'should I forget old info?', Input gate decides 'should I store new info?', and Output gate decides 'what should I output?'. It's like taking notes during a lecture - you don't write everything, only important points.

This architecture solves the vanishing gradient problem. While RNN forgets things after 20-30 steps, LSTM can remember patterns from hundreds of steps ago. That's why it's the go-to choice for language translation, speech recognition, and any task involving long sequences.`,

      keyPoints: [
        'Improved RNN that can remember long-term dependencies',
        'Has 3 gates: Forget, Input, Output - control information flow',
        'Cell state acts as memory highway carrying information',
        'Solves vanishing gradient problem of vanilla RNN',
        'More parameters than RNN but much better performance'
      ],

      useCases: [
        {
          title: 'Machine Translation',
          description: 'Translating long sentences preserving context',
          example: 'Translating entire paragraphs while maintaining meaning'
        },
        {
          title: 'Video Captioning',
          description: 'Generating descriptions for video sequences',
          example: 'Describing what\'s happening in a 2-minute video clip'
        },
        {
          title: 'Handwriting Recognition',
          description: 'Converting handwritten text to digital text',
          example: 'OCR apps reading handwritten notes accurately'
        }
      ],

      dos: [
        'Use 2-3 LSTM layers with 128-512 units per layer',
        'Apply dropout (0.2-0.5) between LSTM layers',
        'Use return_sequences=True for all layers except last',
        'Monitor validation loss - LSTM can overfit easily'
      ],

      donts: [
        'Don\'t use more than 4-5 LSTM layers - diminishing returns',
        'Don\'t forget to normalize/standardize your input sequences',
        'Don\'t use very large hidden sizes (>1024) without good reason',
        'Don\'t ignore computational cost - LSTM is 3-4x slower than GRU'
      ],

      bestPractices: [
        'Start with GRU (faster) - switch to LSTM if you need better accuracy',
        'Use bidirectional LSTM for tasks where future context helps',
        'Apply gradient clipping (clip value 1.0-5.0)',
        'Use Adam optimizer with learning rate 0.001 or lower'
      ],

      quiz: [
        {
          question: 'How does LSTM solve the vanishing gradient problem?',
          options: [
            'By using larger learning rates',
            'Through gates that control information flow',
            'By reducing the number of layers',
            'By using different activation functions only'
          ],
          correctAnswer: 1,
          explanation: 'LSTM uses gates (forget, input, output) and a cell state to control information flow, allowing gradients to flow through many time steps without vanishing.'
        }
      ]
    },

    {
      id: 5,
      title: 'Transfer Learning',
      description: 'Using pre-trained models for faster learning',
      
      overview: `Transfer Learning is like using someone else's knowledge to learn faster. Instead of training a model from scratch, you start with a model that's already trained on millions of images. Then you fine-tune it for your specific task. It's like learning to drive a truck when you already know how to drive a car.

Imagine training an image classifier from scratch - you'd need 100,000+ images and weeks of training. With transfer learning, you take a pre-trained model (like ResNet trained on ImageNet's 14 million images) and adapt it to your 1,000 images in hours. The early layers already learned to detect edges, shapes, and textures - you just teach the final layers your specific classes.

This is revolutionary for small datasets. A model pre-trained on cats and dogs already knows 'what fur looks like' - you just need to teach it the difference between your specific dog breeds. It's why you can build a custom image classifier with just 100 images per class.`,

      keyPoints: [
        'Use pre-trained models instead of training from scratch',
        'Lower layers learn general features (edges, textures)',
        'Upper layers learn task-specific features',
        'Requires much less data and training time',
        'Common pre-trained models: ResNet, VGG, BERT, GPT'
      ],

      useCases: [
        {
          title: 'Custom Image Classification',
          description: 'Building classifier with limited data',
          example: 'Detecting plant diseases with only 500 images using ResNet50'
        },
        {
          title: 'Medical Imaging',
          description: 'Diagnosing rare diseases with few examples',
          example: 'Detecting rare skin conditions with 100 images per class'
        },
        {
          title: 'Text Classification',
          description: 'Sentiment analysis or topic classification',
          example: 'Fine-tuning BERT for customer review sentiment with 1,000 reviews'
        }
      ],

      dos: [
        'Freeze early layers, only train final layers initially',
        'Use smaller learning rate (0.0001) when fine-tuning',
        'Gradually unfreeze more layers if you have enough data',
        'Apply data augmentation even with pre-trained models'
      ],

      donts: [
        'Don\'t train all layers immediately - start with last few layers',
        'Don\'t use same learning rate as training from scratch',
        'Don\'t skip pre-training if you have less than 10,000 images',
        'Don\'t use pre-trained models from completely different domain'
      ],

      bestPractices: [
        'For images: Use ResNet50, EfficientNet, or MobileNet',
        'For text: Use BERT, RoBERTa, or GPT-based models',
        'Start with frozen base, train only classifier layer',
        'After initial training, unfreeze top 2-3 layers and fine-tune'
      ],

      quiz: [
        {
          question: 'What is the main advantage of transfer learning?',
          options: [
            'It requires more data',
            'It trains slower',
            'It requires less data and training time',
            'It always gives 100% accuracy'
          ],
          correctAnswer: 2,
          explanation: 'Transfer learning leverages knowledge from pre-trained models, requiring significantly less data and training time while often achieving better results.'
        }
      ]
    },

    {
      id: 6,
      title: 'Generative Adversarial Networks (GAN)',
      description: 'Two networks competing to generate realistic data',
      
      overview: `GANs are like a forger and a detective playing a game. The Generator (forger) creates fake images, and the Discriminator (detective) tries to tell real from fake. As the detective gets better at spotting fakes, the forger gets better at creating realistic fakes. Eventually, the fakes become so good that even experts can't tell the difference.

Think of it as two neural networks competing: Generator creates fake data from random noise, Discriminator judges if data is real or fake. The Generator learns from the Discriminator's feedback. When the Discriminator says 'this looks fake because...', the Generator adjusts to fool it next time.

GANs can create incredibly realistic faces, convert horses to zebras, turn sketches into photos, and generate art. However, they're hard to train - if one network becomes too strong, the other gives up. It's like a game where both players must improve at the same rate.`,

      keyPoints: [
        'Two neural networks competing: Generator vs Discriminator',
        'Generator creates fake data from random noise',
        'Discriminator tries to distinguish real from fake',
        'Training is adversarial: they improve each other',
        'Notoriously difficult to train - requires careful tuning'
      ],

      useCases: [
        {
          title: 'Face Generation',
          description: 'Creating realistic human faces that don\'t exist',
          example: 'ThisPersonDoesNotExist.com generating unlimited unique faces'
        },
        {
          title: 'Image-to-Image Translation',
          description: 'Converting images from one style to another',
          example: 'Turning day photos to night, summer to winter, horses to zebras'
        },
        {
          title: 'Super Resolution',
          description: 'Enhancing low-resolution images to high-resolution',
          example: 'Upscaling old 480p videos to 4K quality'
        }
      ],

      dos: [
        'Use separate learning rates for Generator and Discriminator',
        'Apply label smoothing: use 0.9 instead of 1.0 for real labels',
        'Monitor both losses - they should stay relatively balanced',
        'Use techniques like WGAN or StyleGAN for stable training'
      ],

      donts: [
        'Don\'t let Discriminator become too strong - it kills learning',
        'Don\'t use batch normalization in Discriminator\'s first layer',
        'Don\'t expect stable training - GANs are inherently unstable',
        'Don\'t skip regularization techniques like gradient penalty'
      ],

      bestPractices: [
        'Start with DCGAN (Deep Convolutional GAN) architecture',
        'Use LeakyReLU in Discriminator, ReLU in Generator',
        'Apply Spectral Normalization for training stability',
        'Generate samples every epoch to monitor quality visually'
      ],

      quiz: [
        {
          question: 'What are the two main components of a GAN?',
          options: [
            'Encoder and Decoder',
            'Generator and Discriminator',
            'Input and Output',
            'CNN and RNN'
          ],
          correctAnswer: 1,
          explanation: 'GANs consist of a Generator (creates fake data) and a Discriminator (distinguishes real from fake) that compete and improve each other.'
        }
      ]
    },

    {
      id: 7,
      title: 'Autoencoders',
      description: 'Neural networks for compression and reconstruction',
      
      overview: `Autoencoders compress data and then reconstruct it, like a smart zip file. They learn to capture the 'essence' of data in a smaller form. Imagine describing a photo in 10 words instead of 1000 - that's what the encoder does. Then the decoder tries to recreate the original photo from those 10 words.

The network has a bottleneck in the middle - forcing it to compress information. This bottleneck learns meaningful features. For example, when compressing face images, it might learn features like 'has glasses', 'smiling', 'age', etc. These compressed features are often more useful than raw pixels.

Autoencoders have many uses: noise removal (compress noisy image, reconstruct clean version), anomaly detection (if reconstruction is bad, input is unusual), and dimensionality reduction (like PCA but non-linear). They're unsupervised - no labels needed, just raw data.`,

      keyPoints: [
        'Compresses data into smaller representation, then reconstructs it',
        'Encoder reduces dimensions, Decoder expands back',
        'Learns meaningful features in the bottleneck layer',
        'Unsupervised learning - doesn\'t need labeled data',
        'Variants: Denoising, Variational, Sparse Autoencoders'
      ],

      useCases: [
        {
          title: 'Image Denoising',
          description: 'Removing noise from corrupted images',
          example: 'Cleaning up old scanned photos or low-light camera images'
        },
        {
          title: 'Anomaly Detection',
          description: 'Finding unusual patterns in data',
          example: 'Detecting fraudulent credit card transactions or network intrusions'
        },
        {
          title: 'Dimensionality Reduction',
          description: 'Compressing high-dimensional data for visualization',
          example: 'Reducing 1000 features to 2D for plotting'
        }
      ],

      dos: [
        'Make bottleneck layer much smaller than input (1/4 to 1/10)',
        'Use same architecture for encoder and decoder (mirrored)',
        'Start with simple autoencoder before trying VAE or DAE',
        'Normalize input data to 0-1 range'
      ],

      donts: [
        'Don\'t make bottleneck too large - it won\'t learn compression',
        'Don\'t use different activation functions in encoder vs decoder',
        'Don\'t expect perfect reconstruction - some loss is normal',
        'Don\'t use autoencoders for labeled classification tasks directly'
      ],

      bestPractices: [
        'Use Mean Squared Error (MSE) loss for reconstruction',
        'For images, use convolutional autoencoders (CAE)',
        'Apply dropout in bottleneck layer for robustness',
        'Visualize reconstructions during training to monitor quality'
      ],

      quiz: [
        {
          question: 'What is the main purpose of the bottleneck layer in an autoencoder?',
          options: [
            'Increase model complexity',
            'Force the model to learn compressed representations',
            'Speed up training',
            'Prevent overfitting only'
          ],
          correctAnswer: 1,
          explanation: 'The bottleneck forces the autoencoder to compress data into a smaller representation, learning the most important features.'
        }
      ]
    },

    {
      id: 8,
      title: 'Optimization Algorithms',
      description: 'Methods to train neural networks efficiently',
      
      overview: `Optimization algorithms are methods to train neural networks efficiently. Think of training as climbing down a mountain in fog - you can't see the bottom, you only feel the slope under your feet. The optimizer decides which direction to step and how big the step should be.

Gradient Descent is the basic idea: calculate the slope (gradient), step in the opposite direction (downhill). But there are many improvements: SGD adds randomness (faster but noisy), Momentum remembers previous directions (smoother path), Adam adapts learning rate for each parameter (most popular).

Choosing the right optimizer is like choosing the right vehicle for terrain. SGD is a bicycle (simple, reliable), Momentum is a motorcycle (faster, smoother), Adam is an all-terrain vehicle (works almost everywhere). For most tasks, Adam is the safe default choice - it converges fast and needs less tuning.`,

      keyPoints: [
        'Algorithms to minimize loss function during training',
        'Gradient Descent: basic idea - follow slope downhill',
        'SGD with Momentum: remembers previous updates for smoother path',
        'Adam: adapts learning rate per parameter - most popular',
        'Learning rate is crucial: too high = unstable, too low = slow'
      ],

      useCases: [
        {
          title: 'Training Deep Networks',
          description: 'Optimizing millions of parameters efficiently',
          example: 'Training ResNet-50 (25M parameters) in reasonable time'
        },
        {
          title: 'Fine-tuning Models',
          description: 'Adjusting pre-trained models with low learning rate',
          example: 'Fine-tuning BERT with learning rate 2e-5'
        }
      ],

      dos: [
        'Use Adam as default optimizer - works 90% of the time',
        'Start with learning rate 0.001 for Adam, 0.01 for SGD',
        'Use learning rate schedules: reduce on plateau or cosine annealing',
        'Monitor training loss curve - should decrease smoothly'
      ],

      donts: [
        'Don\'t use same learning rate for all optimizers - they differ',
        'Don\'t keep learning rate constant - use schedules for better results',
        'Don\'t use very large learning rates (>0.1) without warmup',
        'Don\'t switch optimizers mid-training - restart if you change'
      ],

      bestPractices: [
        'Adam for most tasks: beta1=0.9, beta2=0.999, lr=0.001',
        'SGD+Momentum for computer vision: momentum=0.9, lr=0.01',
        'Use learning rate finder to find optimal initial LR',
        'Apply gradient clipping if training is unstable'
      ],

      quiz: [
        {
          question: 'Which optimizer is most commonly used as default?',
          options: [
            'SGD',
            'Adam',
            'RMSprop',
            'Adagrad'
          ],
          correctAnswer: 1,
          explanation: 'Adam is the most popular default optimizer because it adapts learning rates per parameter and works well on most problems without much tuning.'
        }
      ]
    },

    {
      id: 9,
      title: 'Transformers',
      description: 'Attention-based architecture powering modern AI',
      
      overview: `Transformers revolutionized AI by using 'attention' instead of recurrence. Instead of reading text word-by-word like RNN, Transformers look at all words simultaneously and focus on the most relevant ones. It's like reading a paragraph and highlighting important words - that's what attention does.

The key innovation is 'self-attention' - each word figures out which other words are important. In 'The cat sat on the mat', when processing 'sat', the model attends strongly to 'cat' and 'mat'. This allows parallel processing (much faster than RNN) and understanding long-range dependencies.

Transformers power all modern large language models: GPT (ChatGPT), BERT (Google Search), T5 (translation). They're also used for images (Vision Transformers), speech, and proteins. The architecture is simple but powerful: stack attention layers, add residual connections, and layer normalization.`,

      keyPoints: [
        'Uses attention mechanism instead of recurrence',
        'Processes entire sequence in parallel - much faster than RNN',
        'Self-attention: each token attends to all other tokens',
        'Positional encoding tells model word order',
        'Powers GPT, BERT, T5, and most modern LLMs'
      ],

      useCases: [
        {
          title: 'Language Models',
          description: 'Generating human-like text',
          example: 'ChatGPT, GPT-4 for conversations, writing, coding'
        },
        {
          title: 'Machine Translation',
          description: 'Translating between languages accurately',
          example: 'Google Translate achieving near-human quality'
        },
        {
          title: 'Text Summarization',
          description: 'Condensing long documents to key points',
          example: 'Summarizing 10-page report to 1 paragraph'
        }
      ],

      dos: [
        'Use pre-trained Transformers (BERT, GPT) via transfer learning',
        'Apply layer normalization before attention and feedforward layers',
        'Use warmup learning rate schedule for stable training',
        'Increase model size (layers, heads, dimensions) if you have data'
      ],

      donts: [
        'Don\'t train Transformer from scratch with small dataset (<1M examples)',
        'Don\'t forget positional encoding - order matters in sequences',
        'Don\'t use very long sequences (>512) without efficient attention',
        'Don\'t skip residual connections - they\'re crucial for deep models'
      ],

      bestPractices: [
        'For text: Fine-tune BERT (encoder) or GPT (decoder)',
        'Use multi-head attention (8-16 heads typical)',
        'Apply dropout (0.1-0.3) after attention and feedforward',
        'Use libraries like HuggingFace Transformers - don\'t implement from scratch'
      ],

      quiz: [
        {
          question: 'What is the main advantage of Transformers over RNNs?',
          options: [
            'Transformers use less memory',
            'Transformers can process sequences in parallel',
            'Transformers are easier to implement',
            'Transformers require less data'
          ],
          correctAnswer: 1,
          explanation: 'Transformers use attention to process all tokens in parallel, making them much faster to train than sequential RNNs.'
        }
      ]
    },

    {
      id: 10,
      title: 'Attention Mechanisms',
      description: 'The core innovation behind modern AI',
      
      overview: `Attention is the brain's ability to focus on what's important. In AI, attention mechanisms let models focus on relevant parts of input while ignoring noise. When translating 'I love dogs' to Spanish, the model attends to 'love' when generating 'amo', and 'dogs' when generating 'perros'.

Think of reading a textbook: you don't memorize every word, you highlight key concepts. Attention does the same - it learns which inputs are important for each output. This is computed using Query, Key, Value (QKV) triplets. Query asks 'what am I looking for?', Keys answer 'what do I have?', and Values provide 'here's the information'.

Attention solved the bottleneck problem in sequence-to-sequence models. Previously, encoders compressed everything into a single vector (information loss). With attention, the decoder can look back at all encoder states and pick what it needs. This dramatically improved translation, summarization, and image captioning.`,

      keyPoints: [
        'Focuses on relevant parts of input dynamically',
        'Computes alignment scores between query and keys',
        'Weighted sum of values based on attention scores',
        'Self-attention: input attends to itself (used in Transformers)',
        'Cross-attention: output attends to input (used in encoder-decoder)'
      ],

      useCases: [
        {
          title: 'Machine Translation',
          description: 'Aligning source and target language words',
          example: 'Translating "Le chat noir" to "The black cat" with correct word alignment'
        },
        {
          title: 'Image Captioning',
          description: 'Focusing on different image regions when generating words',
          example: 'Looking at dog when saying "dog", at grass when saying "playing"'
        },
        {
          title: 'Document Summarization',
          description: 'Attending to most important sentences',
          example: 'Extracting key points from 100-page document'
        }
      ],

      dos: [
        'Use scaled dot-product attention for efficiency',
        'Apply multi-head attention to capture different aspects',
        'Visualize attention weights to understand model behavior',
        'Use attention masks for padding and causal (left-to-right) modeling'
      ],

      donts: [
        'Don\'t forget to scale attention scores by sqrt(d_k)',
        'Don\'t use attention for very long sequences without optimization',
        'Don\'t skip softmax - it normalizes attention weights to sum to 1',
        'Don\'t use too many attention heads (>16) without good reason'
      ],

      bestPractices: [
        'For sequences <512: use standard attention',
        'For long sequences: use sparse attention or linear attention',
        'Combine with residual connections and layer normalization',
        'Use attention dropout (0.1) to prevent overfitting'
      ],

      quiz: [
        {
          question: 'What are the three components of attention mechanism?',
          options: [
            'Input, Hidden, Output',
            'Query, Key, Value',
            'Encoder, Decoder, Attention',
            'Forward, Backward, Update'
          ],
          correctAnswer: 1,
          explanation: 'Attention uses Query (what to look for), Key (what is available), and Value (the actual information) to compute weighted attention.'
        }
      ]
    }
  ]
};
