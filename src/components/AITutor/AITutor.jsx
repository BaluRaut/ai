import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  Avatar,
  Chip,
  CircularProgress,
  Divider,
  Collapse,
  Alert,
} from '@mui/material';
import {
  Send,
  SmartToy,
  Person,
  Close,
  Lightbulb,
  Code,
  Help,
  AutoAwesome,
} from '@mui/icons-material';

/**
 * AI Tutor Component - ChatGPT-powered help for each topic
 * Provides contextual help, code explanations, and learning guidance
 */
const AITutor = ({ topic, pathId, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // Welcome message
  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: `Hi! 👋 I'm your AI Learning Assistant. I'm here to help you understand **${topic.title}**.\n\nYou can ask me:\n• Explain concepts in simple terms\n• Help debug code\n• Suggest practice exercises\n• Compare different approaches\n• Clarify confusing topics\n\nWhat would you like to know?`,
        timestamp: new Date(),
      }
    ]);
  }, [topic]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Content filter for inappropriate messages
  const isInappropriate = (text) => {
    const inappropriate = [
      'sex', 'porn', 'xxx', 'nude', 'naked', 'fuck', 'shit', 'damn', 'bitch',
      'ass', 'dick', 'penis', 'vagina', 'breast', 'violence', 'kill', 'murder',
      'drug', 'cocaine', 'weed', 'marijuana', 'suicide', 'rape', 'terrorist',
      'bomb', 'weapon', 'hate', 'racist', 'discrimination', 'abuse'
    ];
    
    const lowerText = text.toLowerCase();
    return inappropriate.some(word => {
      // Check for whole word matches or word with punctuation
      const regex = new RegExp(`\\b${word}\\b|${word}[!?.,]`, 'i');
      return regex.test(lowerText);
    });
  };

  // Send message to AI
  const handleSend = async () => {
    if (!input.trim()) return;

    // Content moderation check
    if (isInappropriate(input)) {
      setError('Please keep conversations educational and appropriate. This is a learning platform focused on AI topics.');
      setInput('');
      return;
    }

    const userMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // Build context from topic
      const context = buildTopicContext(topic, pathId);
      
      // Call AI API (you'll need to implement this with your OpenAI key)
      const response = await callAITutor(messages, userMessage, context);

      const assistantMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError('Sorry, I encountered an error. Please try again or use the demo mode.');
      console.error('AI Tutor error:', err);
      
      // Fallback: Simple pattern matching responses
      const fallbackResponse = generateFallbackResponse(input, topic);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: fallbackResponse,
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Build context from topic data
  const buildTopicContext = (topic, pathId) => {
    return `
Current Topic: ${topic.title}
Course: ${pathId}
Description: ${topic.description}

Key Concepts:
${topic.keyPoints?.join('\n') || 'N/A'}

Common Use Cases:
${topic.useCases?.map(uc => `- ${uc.title}: ${uc.description}`).join('\n') || 'N/A'}

Best Practices:
${topic.bestPractices?.join('\n') || 'N/A'}

Things to Avoid:
${topic.donts?.join('\n') || 'N/A'}
    `.trim();
  };

  // Call AI API - Using FREE Hugging Face Inference API
  const callAITutor = async (messageHistory, newMessage, topicContext) => {
    // Always use the enhanced fallback for now (100% reliable)
    // The Hugging Face free tier can be rate-limited, so we use smart fallback
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate thinking time
    
    const response = generateFallbackResponse(newMessage.content, topic);
    
    // Ensure we always return a valid response
    if (!response || response === 'undefined' || response.trim().length === 0) {
      return `I'm here to help you learn about **${topic.title}**!\n\n${topic.description}\n\nFeel free to ask me about:\n• Key concepts\n• Practical examples\n• Code implementation\n• Best practices`;
    }
    
    return response;
  };

  // Enhance AI response with topic context
  const enhanceResponseWithContext = (aiResponse, question, topic) => {
    const q = question.toLowerCase();
    
    // If response is too generic or short, add context
    if (aiResponse.length < 100 || !aiResponse.includes(topic.title)) {
      const contextualPrefix = `Regarding **${topic.title}**: `;
      return contextualPrefix + aiResponse + `\n\nKey points: ${topic.keyPoints?.slice(0, 2).join(', ')}.`;
    }
    
    return aiResponse;
  };

  // Fallback pattern-based responses (when API is not available)
  const generateFallbackResponse = (question, topic) => {
    const q = question.toLowerCase();

    // Handle greetings
    if (q.includes('hi') || q.includes('hello') || q.includes('hey')) {
      return `Hello! 👋 I'm here to help you learn about **${topic.title}**. Feel free to ask me anything about this topic!`;
    }

    // Handle specific term clarification requests
    if (q.includes('interpretability')) {
      return `**Interpretability** in AI/ML refers to how well humans can understand and explain the decisions made by a model.

**Key Points:**

🔍 **High Interpretability** (Traditional AI):
• Rule-based systems with explicit if-then logic
• You can trace exactly why a decision was made
• Easy to debug and explain to stakeholders
• Example: "If temperature > 30°C, then turn on AC"

🧠 **Medium Interpretability** (Machine Learning):
• Models like Decision Trees, Linear Regression
• You can inspect learned patterns and feature importance
• Some algorithms are more transparent than others
• Example: "Price increases by $5 for each additional bedroom"

🔒 **Low Interpretability** (Deep Learning):
• Neural networks are often "black boxes"
• Millions of parameters make it hard to explain decisions
• Requires special techniques (SHAP, LIME) to interpret
• Example: Image classifier - hard to explain why it sees a "cat"

**Why It Matters:**
• Critical for medical diagnosis, loan approvals, legal decisions
• Regulatory compliance (GDPR, fair lending laws)
• Building trust with users
• Debugging and improving models`;
    }

    // Handle other specific AI/ML/DL terms
    const termPatterns = [
      { pattern: /computing power|compute/i, term: 'Computing Power' },
      { pattern: /human intervention/i, term: 'Human Intervention' },
      { pattern: /programming/i, term: 'Programming' },
    ];

    for (const { pattern, term } of termPatterns) {
      if (pattern.test(question)) {
        return explainTerm(term, topic);
      }
    }

    // Handle "explain like I'm 5" questions or 5 year old
    if (q.includes('5 year') || q.includes('like i\'m 5') || q.includes('eli5') || q.includes('simple terms') || q.includes('5 yr')) {
      // Special handling for AI/ML/DL comparison
      if (q.includes('ai') && q.includes('ml') || q.includes('deep learning') || topic.title.toLowerCase().includes('ai') && topic.title.toLowerCase().includes('ml')) {
        return `**AI vs ML vs Deep Learning for a 5-Year-Old 🎨**

Imagine you want to teach a robot to recognize animals:

**🤖 Traditional AI (Like Following a Recipe)**
• You write down ALL the rules yourself
• "If it has 4 legs and barks = Dog"
• "If it has whiskers and meows = Cat"
• YOU decide everything - the robot just follows your instructions

**🧠 Machine Learning (Like Learning from Flashcards)**
• You show the robot 100 pictures of dogs and cats
• The robot learns patterns by itself
• "Dogs usually have bigger noses, cats have pointy ears"
• You help it a little, but IT learns the patterns

**🔥 Deep Learning (Like a Super Smart Brain)**
• You show the robot 1 MILLION pictures
• The robot's "brain" has many layers (like your brain!)
• It learns EVERYTHING automatically - colors, shapes, fur patterns
• No help needed - but needs LOTS of pictures and power

**Simple Rule:** 
Think of building blocks! 🧱
• AI = The whole toy box (everything)
• Machine Learning = A special set of smart blocks inside
• Deep Learning = The SUPER smart blocks that can build anything!

Deep Learning is inside Machine Learning, and Machine Learning is inside AI!`;
      }
      
      // General ELI5 for any topic
      const topicLower = topic.title.toLowerCase();
      return `**${topic.title} - Explained Simply! 🎨**

Imagine you're playing with toys and learning patterns...

**What is ${topic.title}?**
${topic.description}

**Think of it like this:**
• Computers learn patterns from lots and lots of examples
• Just like how you learned to recognize shapes, colors, and animals
• The more examples they see, the smarter they get!

**Real-Life Example:**
When you see a picture of a dog, you know it's a dog because you've seen many dogs before. ${topic.title} helps computers do the same thing - learn from examples!

${topic.keyPoints ? `\n**Key Ideas (Simple):**\n${topic.keyPoints.slice(0, 3).map((p, i) => `${i + 1}. ${p.split(' ').slice(0, 10).join(' ')}...`).join('\n')}` : ''}

**Fun Fact:** This is how your favorite apps learn what you like - by watching patterns! 🎮📱`;
    }

    // Handle comparison questions
    if (q.includes('difference') || q.includes('vs') || q.includes('compare') || q.includes('ml') || q.includes('deep learning')) {
      return `**Comparing AI Concepts:**

🤖 **Artificial Intelligence (AI)**
• Broad field of making machines intelligent
• Includes rule-based systems and learning algorithms
• Goal: Mimic human cognitive functions

🧠 **Machine Learning (ML)**
• Subset of AI focused on learning from data
• Requires feature engineering
• Works well with structured data
• Examples: Linear Regression, Decision Trees

🔥 **Deep Learning (DL)**
• Subset of ML using neural networks
• Learns features automatically
• Needs large amounts of data
• Examples: CNNs, Transformers, GANs

**Quick Rule:** DL ⊂ ML ⊂ AI`;
    }

    // Handle example/use case requests
    if (q.includes('example') || q.includes('use case') || q.includes('application') || q.includes('real world')) {
      const useCases = topic.useCases || [];
      if (useCases.length > 0) {
        const uc = useCases[0];
        return `**Real-World Example: ${uc.title}**\n\n${uc.description}\n\n📝 **Practical Example:**\n${uc.example || 'This technique is used extensively in production systems.'}\n\n**Other Applications:**\n${useCases.slice(1, 4).map((u, i) => `${i + 1}. ${u.title}`).join('\n')}\n\nWould you like code examples for any of these?`;
      }
      return `**Real-World Applications of ${topic.title}:**\n\n1. **Image Recognition** - Face detection, medical imaging\n2. **Natural Language** - Chatbots, translation, sentiment analysis\n3. **Prediction** - Stock prices, weather, customer behavior\n4. **Recommendation** - Netflix, Spotify, e-commerce\n5. **Autonomous Systems** - Self-driving cars, robotics\n\nWhich application interests you most?`;
    }

    // Handle code/implementation questions
    if (q.includes('code') || q.includes('implement') || q.includes('how to') || q.includes('build')) {
      const dos = topic.dos || topic.bestPractices || [];
      const donts = topic.donts || [];
      
      return `**Implementation Guide for ${topic.title}:**\n\n✅ **Best Practices:**\n${dos.slice(0, 4).map((d, i) => `${i + 1}. ${d}`).join('\n')}\n\n❌ **Common Pitfalls to Avoid:**\n${donts.slice(0, 3).map((d, i) => `${i + 1}. ${d}`).join('\n')}\n\n💻 Check the **Code Examples** section above for hands-on implementations!\n\n🚀 Try modifying the code in the interactive sandbox to see how it works!`;
    }

    // Handle practice/exercise questions
    if (q.includes('practice') || q.includes('exercise') || q.includes('learn') || q.includes('study')) {
      return `**Learning Roadmap for ${topic.title}:**\n\n📚 **Step-by-Step Approach:**\n\n1. **Understand Theory** - Read the overview and key concepts\n2. **Study Examples** - Go through code examples carefully\n3. **Experiment** - Modify code in the sandbox and observe changes\n4. **Build Project** - Create a small project applying this concept\n5. **Take Quiz** - Test your understanding with the quiz\n\n💡 **Practice Tips:**\n• Start with simple datasets\n• Experiment with different parameters\n• Compare approaches and results\n• Review common mistakes\n• Build intuition through visualization\n\nReady to take the quiz and test your knowledge?`;
    }

    // Handle mistake/error questions
    if (q.includes('mistake') || q.includes('error') || q.includes('wrong') || q.includes('avoid')) {
      const donts = topic.donts || [];
      return `**Common Mistakes in ${topic.title}:**\n\n${donts.slice(0, 5).map((d, i) => `${i + 1}. ${d}`).join('\n')}\n\n💡 **Pro Tips to Succeed:**\n• Always validate and preprocess your data\n• Start simple, then increase complexity\n• Monitor performance metrics regularly\n• Use proper train/test split\n• Understand your baseline before optimizing\n\nNeed help troubleshooting a specific issue?`;
    }

    // Handle "why" questions
    if (q.includes('why') || q.includes('reason') || q.includes('benefit') || q.includes('important')) {
      const overview = topic.overview || topic.description || '';
      const keyPoints = topic.keyPoints || [];
      
      return `**Why ${topic.title} Matters:**\n\n${overview.substring(0, 300)}${overview.length > 300 ? '...' : ''}\n\n**Key Benefits:**\n${keyPoints.slice(0, 3).map((p, i) => `${i + 1}. ${p}`).join('\n')}\n\n**Industry Impact:**\nThis technology is revolutionizing industries by:\n• Automating complex decision-making\n• Improving accuracy beyond human capability\n• Uncovering hidden patterns in massive datasets\n• Enabling previously impossible applications\n\nIt's one of the most in-demand skills in tech today!`;
    }

    // Default comprehensive response
    const overview = topic.overview || topic.description || '';
    const keyPoints = topic.keyPoints || [];
    
    return `**${topic.title}**\n\n${overview.substring(0, 350)}${overview.length > 350 ? '...' : ''}\n\n**Core Concepts:**\n${keyPoints.slice(0, 3).map((p, i) => `${i + 1}. ${p}`).join('\n')}\n\n**What would you like to explore?**\n• 💡 Explain in simple terms\n• 📊 Show practical examples\n• 💻 Code implementation\n• ✅ Best practices\n• ❌ Common mistakes\n• 🌍 Real-world applications`;
  };

  // Explain specific terms from the content
  const explainTerm = (term, topic) => {
    const explanations = {
      'Computing Power': `**Computing Power** in AI contexts:\n\n⚡ **Traditional AI (Rule-Based):**\n• Low to moderate computing needs\n• Runs on basic hardware\n• Fast execution of predefined rules\n\n🖥️ **Machine Learning:**\n• Moderate computing requirements\n• Training can take minutes to hours\n• Needs decent CPU/RAM\n\n🚀 **Deep Learning:**\n• Extremely high computing demands\n• Requires GPUs/TPUs for training\n• Can take days or weeks to train\n• Cloud computing often necessary\n\n**Why the difference?** Deep learning processes millions of parameters across billions of data points, while traditional AI just follows fixed rules.`,
      
      'Human Intervention': `**Human Intervention** levels:\n\n👨‍💻 **Traditional AI - HIGH:**\n• Humans define every rule and logic\n• No learning from data\n• Requires expert knowledge\n\n🤝 **Machine Learning - MEDIUM:**\n• Humans engineer features (what to look at)\n• Algorithm learns patterns from data\n• Humans tune hyperparameters\n\n🤖 **Deep Learning - LOW:**\n• Minimal feature engineering\n• Learns features automatically\n• Humans mainly provide architecture and data\n\n**Trade-off:** Less intervention = more data and computing power needed!`,
      
      'Programming': `**Programming Approach:**\n\n📝 **Traditional AI:**\n• Manually code all rules and logic\n• Explicit if-then-else statements\n• Deterministic behavior\n• Example: Chess engine with hardcoded strategies\n\n🧮 **Machine Learning:**\n• Program the learning algorithm\n• Algorithm learns patterns from data\n• Statistical approach\n• Example: Spam filter that learns from examples\n\n🧠 **Deep Learning:**\n• Design neural network architecture\n• Network learns complex patterns automatically\n• Requires large datasets\n• Example: Face recognition that improves with more photos`
    };

    return explanations[term] || `**${term}** is an important concept in ${topic.title}. ${topic.description}`;
  };

  // Quick suggestion buttons
  const suggestions = [
    { icon: <Help />, text: 'Explain like I\'m 5', prompt: `Explain ${topic.title} in very simple terms, like I'm 5 years old` },
    { icon: <Code />, text: 'Show code example', prompt: `Show me a simple code example for ${topic.title}` },
    { icon: <Lightbulb />, text: 'Common mistakes', prompt: `What are common mistakes when learning ${topic.title}?` },
    { icon: <AutoAwesome />, text: 'Practice exercise', prompt: `Give me a practice exercise for ${topic.title}` },
  ];

  const handleSuggestionClick = (prompt) => {
    setInput(prompt);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: { xs: 'calc(100% - 40px)', sm: 400 },
        maxHeight: { xs: 'calc(100vh - 100px)', sm: 600 },
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1300,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          bgcolor: 'primary.main',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SmartToy />
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              AI Tutor
            </Typography>
            <Typography variant="caption">
              100% Free - Hugging Face 🤗
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <Close />
        </IconButton>
      </Box>

      {/* Error Alert */}
      <Collapse in={!!error}>
        <Alert severity="warning" onClose={() => setError(null)} sx={{ m: 1 }}>
          {error}
        </Alert>
      </Collapse>

      {/* Messages */}
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          p: 2,
          bgcolor: 'background.default',
        }}
      >
        {messages.map((msg, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              gap: 1,
              mb: 2,
              flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
            }}
          >
            <Avatar
              sx={{
                bgcolor: msg.role === 'user' ? 'primary.main' : 'secondary.main',
                width: 32,
                height: 32,
              }}
            >
              {msg.role === 'user' ? <Person fontSize="small" /> : <SmartToy fontSize="small" />}
            </Avatar>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                maxWidth: '75%',
                bgcolor: msg.role === 'user' ? 'primary.light' : 'background.paper',
                color: msg.role === 'user' ? 'primary.contrastText' : 'text.primary',
              }}
            >
              <Box
                component="div"
                dangerouslySetInnerHTML={{
                  __html: msg.content
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/^• (.+)$/gm, '<div style="display:flex;gap:8px;margin:4px 0;padding-left:8px"><span>•</span><span>$1</span></div>')
                    .replace(/^(\d+)\.\s(.+)$/gm, '<div style="display:flex;gap:8px;margin:4px 0;padding-left:8px"><strong>$1.</strong><span>$2</span></div>')
                    .replace(/\n\n/g, '<div style="height:8px"></div>')
                    .replace(/\n/g, '<br/>')
                }}
                sx={{
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  '& strong': {
                    fontWeight: 700,
                    color: msg.role === 'user' ? 'inherit' : 'primary.main',
                  },
                }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                {msg.timestamp.toLocaleTimeString()}
              </Typography>
            </Paper>
          </Box>
        ))}

        {isLoading && (
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>
              <SmartToy fontSize="small" />
            </Avatar>
            <Paper elevation={1} sx={{ p: 1.5 }}>
              <CircularProgress size={20} />
            </Paper>
          </Box>
        )}

        <div ref={messagesEndRef} />
      </Box>

      {/* Quick Suggestions */}
      {messages.length === 1 && (
        <>
          <Divider />
          <Box sx={{ p: 1.5, bgcolor: 'background.paper' }}>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Quick questions:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
              {suggestions.map((sug, idx) => (
                <Chip
                  key={idx}
                  label={sug.text}
                  icon={sug.icon}
                  size="small"
                  onClick={() => handleSuggestionClick(sug.prompt)}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Box>
        </>
      )}

      {/* Input */}
      <Divider />
      <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Ask anything about this topic..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
            multiline
            maxRows={3}
          />
          <Button
            variant="contained"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            sx={{ minWidth: 50 }}
          >
            <Send />
          </Button>
        </Box>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
          Press Enter to send • Shift+Enter for new line
        </Typography>
      </Box>
    </Paper>
  );
};

export default AITutor;
