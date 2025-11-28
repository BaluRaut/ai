import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  Fab,
  Drawer,
  Avatar,
  Chip,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  Collapse,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CodeIcon from '@mui/icons-material/Code';
import QuizIcon from '@mui/icons-material/Quiz';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Simulated AI responses based on topic context
const generateAIResponse = (question, topicContext) => {
  const q = question.toLowerCase();
  const topic = topicContext?.title?.toLowerCase() || '';
  const topicId = topicContext?.id || '';
  
  // SQL-related questions
  if (q.includes('select') || q.includes('query')) {
    return {
      text: `Great question about queries! 📊

The SELECT statement is the foundation of SQL querying. Here's the basic structure:

\`\`\`sql
SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column1;
\`\`\`

**Key points:**
- Always be specific about columns (avoid SELECT *)
- Use WHERE to filter results
- ORDER BY sorts your results
- LIMIT restricts the number of rows

Would you like me to explain any part in more detail?`,
      suggestions: ['Explain WHERE clause', 'Show JOIN examples', 'What is GROUP BY?']
    };
  }
  
  if (q.includes('join')) {
    return {
      text: `JOINs are essential for combining data from multiple tables! 🔗

**Types of JOINs:**

1. **INNER JOIN** - Returns matching rows from both tables
\`\`\`sql
SELECT * FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;
\`\`\`

2. **LEFT JOIN** - All rows from left table, matching from right
3. **RIGHT JOIN** - All rows from right table, matching from left
4. **FULL JOIN** - All rows from both tables

**Pro tip:** Always use table aliases (like 'o' and 'c') for cleaner code!

What type of JOIN would you like to explore more?`,
      suggestions: ['When to use LEFT JOIN?', 'Explain self-join', 'Multiple table joins']
    };
  }
  
  if (q.includes('index') || q.includes('performance') || q.includes('optimize')) {
    return {
      text: `Let's talk about database optimization! ⚡

**Indexes are like a book's index** - they help find data quickly without scanning every row.

**When to create indexes:**
- Columns used in WHERE clauses
- Columns used in JOIN conditions
- Columns used in ORDER BY

**When NOT to index:**
- Small tables (< 1000 rows)
- Columns with low cardinality
- Tables with heavy writes

\`\`\`sql
CREATE INDEX idx_customer_email ON customers(email);
\`\`\`

**Remember:** Too many indexes slow down INSERT/UPDATE operations!`,
      suggestions: ['Explain execution plans', 'Composite indexes?', 'Query optimization tips']
    };
  }
  
  if (q.includes('mongodb') || q.includes('nosql') || q.includes('document')) {
    return {
      text: `MongoDB is a powerful document database! 📄

**Key concepts:**
- **Documents** = JSON-like records (similar to rows)
- **Collections** = Groups of documents (similar to tables)
- **Flexible schema** = No fixed structure required

**Basic operations:**
\`\`\`javascript
// Insert
db.users.insertOne({ name: "John", age: 30 });

// Find
db.users.find({ age: { $gt: 25 } });

// Update
db.users.updateOne({ name: "John" }, { $set: { age: 31 } });
\`\`\`

**When to use MongoDB:**
- Rapidly changing schemas
- Large volumes of unstructured data
- Real-time applications`,
      suggestions: ['MongoDB vs SQL?', 'Aggregation pipeline', 'Schema design tips']
    };
  }
  
  if (q.includes('redis') || q.includes('cache') || q.includes('in-memory')) {
    return {
      text: `Redis is an ultra-fast in-memory data store! 🚀

**Common use cases:**
- **Caching** - Store frequently accessed data
- **Sessions** - User session management
- **Leaderboards** - Using Sorted Sets
- **Pub/Sub** - Real-time messaging

**Data structures:**
- Strings: \`SET key "value"\`
- Lists: \`LPUSH mylist "item"\`
- Sets: \`SADD myset "member"\`
- Hashes: \`HSET user:1 name "John"\`
- Sorted Sets: \`ZADD leaderboard 100 "player1"\`

**Pro tip:** Always set TTL (expiration) on cache keys!`,
      suggestions: ['Redis vs Memcached?', 'Caching strategies', 'Pub/Sub example']
    };
  }
  
  if (q.includes('normalize') || q.includes('normalization') || q.includes('normal form')) {
    return {
      text: `Database normalization reduces redundancy! 📋

**Normal Forms explained simply:**

**1NF (First Normal Form)**
- No repeating groups
- Each cell contains one value

**2NF (Second Normal Form)**
- Must be in 1NF
- No partial dependencies (all non-key columns depend on FULL primary key)

**3NF (Third Normal Form)**
- Must be in 2NF
- No transitive dependencies (non-key columns shouldn't depend on other non-key columns)

**Rule of thumb:** Normalize to 3NF for most applications, then denormalize ONLY if you have proven performance issues.`,
      suggestions: ['Show 1NF example', 'When to denormalize?', 'Explain BCNF']
    };
  }
  
  if (q.includes('transaction') || q.includes('acid')) {
    return {
      text: `Transactions ensure data integrity! 🔒

**ACID Properties:**
- **A**tomicity - All or nothing
- **C**onsistency - Data remains valid
- **I**solation - Transactions don't interfere
- **D**urability - Changes are permanent

**Basic transaction:**
\`\`\`sql
START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT; -- or ROLLBACK on error
\`\`\`

**Use transactions when:**
- Transferring money between accounts
- Multi-step order processing
- Any operation that must fully complete or not at all`,
      suggestions: ['Isolation levels?', 'Deadlock prevention', 'Savepoints explained']
    };
  }
  
  if (q.includes('constraint') || q.includes('primary key') || q.includes('foreign key')) {
    return {
      text: `Constraints enforce data integrity! ✅

**Types of constraints:**

1. **PRIMARY KEY** - Unique identifier for each row
2. **FOREIGN KEY** - Links tables together
3. **UNIQUE** - Prevents duplicate values
4. **NOT NULL** - Requires a value
5. **CHECK** - Custom validation rules
6. **DEFAULT** - Auto-fill when no value provided

\`\`\`sql
CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    amount DECIMAL(10,2) CHECK (amount > 0),
    status VARCHAR(20) DEFAULT 'pending',
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
\`\`\``,
      suggestions: ['ON DELETE CASCADE?', 'Composite keys', 'Check constraint examples']
    };
  }
  
  // Topic-specific contextual responses
  if (topicId === 'intro-databases') {
    return {
      text: `Welcome to databases! 🎓

I see you're learning about database fundamentals. This is a great starting point!

**Key things to understand:**
1. A database organizes and stores data efficiently
2. DBMS (Database Management System) is the software that manages databases
3. SQL is the language we use to interact with relational databases

**Two main categories:**
- **Relational (SQL)**: MySQL, PostgreSQL, SQLite
- **NoSQL**: MongoDB, Redis, Cassandra

What aspect would you like to explore first?`,
      suggestions: ['SQL vs NoSQL?', 'What is a table?', 'Show me a simple example']
    };
  }
  
  // General help
  if (q.includes('help') || q.includes('what can you do') || q.includes('how do i')) {
    return {
      text: `I'm your AI Database Tutor! 🤖

**I can help you with:**
- 📖 Explaining database concepts
- 🔍 SQL query writing
- 🐛 Debugging your queries
- 💡 Best practices & tips
- 📊 Understanding data models
- ⚡ Performance optimization

**Try asking me:**
- "How do JOINs work?"
- "Explain normalization"
- "When should I use an index?"
- "What's the difference between SQL and NoSQL?"

I'm here to help you learn! Ask me anything about databases.`,
      suggestions: ['SQL basics', 'Database design tips', 'Common mistakes to avoid']
    };
  }
  
  // Default response
  return {
    text: `That's a great question! 🤔

Based on what you're asking about "${question.slice(0, 50)}...", here are some thoughts:

${topicContext ? `Since you're studying **${topicContext.title}**, let me give you some context:

${topicContext.content?.overview?.slice(0, 200)}...

` : ''}
I'd recommend:
1. Start with the basic concepts
2. Try the interactive playground
3. Practice with the exercises
4. Take the quiz to test your knowledge

What specific aspect would you like me to explain in more detail?`,
    suggestions: ['Explain with example', 'Show me the syntax', 'Common mistakes?']
  };
};

const AITutor = ({ topicContext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add welcome message when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        type: 'ai',
        text: `Hi! I'm your AI Database Tutor 🤖

${topicContext ? `I see you're learning about **${topicContext.title}**. I'm here to help you understand this topic better!` : "I'm here to help you learn about databases!"}

Feel free to ask me any questions, or try one of the quick actions below!`,
        suggestions: topicContext ? [
          `Explain ${topicContext.title}`,
          'Give me an example',
          'Common mistakes?',
          'Best practices'
        ] : [
          'SQL basics',
          'What is NoSQL?',
          'Database design tips'
        ],
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, topicContext]);

  const handleSendMessage = async (messageText = inputValue) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: messageText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI thinking delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));

    // Generate AI response
    const response = generateAIResponse(messageText, topicContext);
    const aiMessage = {
      type: 'ai',
      text: response.text,
      suggestions: response.suggestions,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { icon: <LightbulbIcon />, label: 'Explain concept', action: 'Can you explain this concept in simple terms?' },
    { icon: <CodeIcon />, label: 'Show example', action: 'Show me a practical code example' },
    { icon: <HelpOutlineIcon />, label: 'Common mistakes', action: 'What are common mistakes to avoid?' },
    { icon: <QuizIcon />, label: 'Quiz me', action: 'Give me a quick quiz question to test my knowledge' },
    { icon: <AutoFixHighIcon />, label: 'Best practices', action: 'What are the best practices for this?' },
  ];

  const renderMessage = (message, index) => {
    const isAI = message.type === 'ai';
    
    return (
      <Box
        key={index}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: isAI ? 'flex-start' : 'flex-end',
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 1,
            maxWidth: '90%',
            flexDirection: isAI ? 'row' : 'row-reverse',
          }}
        >
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: isAI ? 'primary.main' : 'secondary.main',
            }}
          >
            {isAI ? <SmartToyIcon fontSize="small" /> : <SchoolIcon fontSize="small" />}
          </Avatar>
          <Paper
            elevation={1}
            sx={{
              p: 2,
              bgcolor: isAI ? 'grey.100' : 'primary.main',
              color: isAI ? 'text.primary' : 'white',
              borderRadius: 2,
              '& code': {
                bgcolor: isAI ? 'grey.200' : 'rgba(255,255,255,0.2)',
                px: 0.5,
                borderRadius: 0.5,
                fontFamily: 'monospace',
              },
              '& pre': {
                bgcolor: isAI ? '#1e1e1e' : 'rgba(0,0,0,0.3)',
                color: '#fff',
                p: 1.5,
                borderRadius: 1,
                overflow: 'auto',
                fontSize: '0.85rem',
                fontFamily: 'monospace',
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{ whiteSpace: 'pre-wrap' }}
              dangerouslySetInnerHTML={{
                __html: message.text
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/`([^`]+)`/g, '<code>$1</code>')
                  .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre>$2</pre>')
              }}
            />
          </Paper>
        </Box>
        
        {/* Suggestion chips */}
        {isAI && message.suggestions && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1, ml: 5 }}>
            {message.suggestions.map((suggestion, idx) => (
              <Chip
                key={idx}
                label={suggestion}
                size="small"
                onClick={() => handleSendMessage(suggestion)}
                sx={{ cursor: 'pointer' }}
                variant="outlined"
              />
            ))}
          </Box>
        )}
      </Box>
    );
  };

  return (
    <>
      {/* Floating Action Button */}
      <Tooltip title="AI Tutor" placement="left">
        <Fab
          color="primary"
          onClick={() => setIsOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1000,
            animation: messages.length === 0 ? 'pulse 2s infinite' : 'none',
            '@keyframes pulse': {
              '0%': { boxShadow: '0 0 0 0 rgba(25, 118, 210, 0.4)' },
              '70%': { boxShadow: '0 0 0 10px rgba(25, 118, 210, 0)' },
              '100%': { boxShadow: '0 0 0 0 rgba(25, 118, 210, 0)' },
            },
          }}
        >
          <SmartToyIcon />
        </Fab>
      </Tooltip>

      {/* Chat Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: { xs: '100%', sm: 400 } },
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
            <SmartToyIcon />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                AI Database Tutor
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                {topicContext ? `Helping with: ${topicContext.title}` : 'Ask me anything about databases!'}
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={() => setIsOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Quick Actions */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <ListItemButton onClick={() => setShowQuickActions(!showQuickActions)}>
            <ListItemText primary="Quick Actions" secondary="Click to expand" />
            {showQuickActions ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={showQuickActions}>
            <Box sx={{ p: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {quickActions.map((action, idx) => (
                <Chip
                  key={idx}
                  icon={action.icon}
                  label={action.label}
                  size="small"
                  onClick={() => handleSendMessage(action.action)}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Collapse>
        </Box>

        {/* Messages */}
        <Box
          sx={{
            flex: 1,
            overflow: 'auto',
            p: 2,
            bgcolor: 'grey.50',
          }}
        >
          {messages.map((message, index) => renderMessage(message, index))}
          
          {isLoading && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                <SmartToyIcon fontSize="small" />
              </Avatar>
              <Paper sx={{ p: 1.5, bgcolor: 'grey.100' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={16} />
                  <Typography variant="body2" color="text.secondary">
                    Thinking...
                  </Typography>
                </Box>
              </Paper>
            </Box>
          )}
          
          <div ref={messagesEndRef} />
        </Box>

        {/* Input */}
        <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider', bgcolor: 'white' }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Ask a question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
              multiline
              maxRows={3}
            />
            <IconButton
              color="primary"
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isLoading}
            >
              <SendIcon />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
            Press Enter to send • AI responses are simulated for demo
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default AITutor;
