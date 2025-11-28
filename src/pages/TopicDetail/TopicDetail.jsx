import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Breadcrumbs,
  Link,
  Paper,
  Chip,
  Button,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { learningPaths, allTopics } from '../../data';
import { useProgress } from '../../context/ProgressContext';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import Quiz from '../../components/Quiz/Quiz';
import SQLPlayground from '../../components/SQLPlayground/SQLPlayground';
import DiagramVisualizer from '../../components/DiagramVisualizer/DiagramVisualizer';
import ExerciseSection from '../../components/ExerciseSection/ExerciseSection';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import InteractiveFlowDiagram from '../../components/InteractiveFlowDiagram/InteractiveFlowDiagram';
import IndexedDBPlayground from '../../components/IndexedDBPlayground/IndexedDBPlayground';
import NoSQLPlayground from '../../components/NoSQLPlayground/NoSQLPlayground';
import RedisPlayground from '../../components/RedisPlayground/RedisPlayground';
import AITutor from '../../components/AITutor/AITutor';
import { useState } from 'react';

const TopicDetail = () => {
  const { pathId, topicId } = useParams();
  const navigate = useNavigate();
  const { isTopicComplete, markTopicComplete, isBookmarked, toggleBookmark, saveQuizScore } = useProgress();
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const path = learningPaths.find(p => p.id === pathId);
  const topic = allTopics[topicId];

  if (!path || !topic) {
    return (
      <Container>
        <Typography variant="h4">Topic not found</Typography>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </Container>
    );
  }

  const completed = isTopicComplete(topicId);
  const bookmarked = isBookmarked(topicId);

  // Find current topic index and get previous/next topics
  // path.topics is an array of topic IDs (strings)
  const currentTopicIndex = path.topics.findIndex(t => t === topicId);
  const previousTopicId = currentTopicIndex > 0 ? path.topics[currentTopicIndex - 1] : null;
  const nextTopicId = currentTopicIndex < path.topics.length - 1 ? path.topics[currentTopicIndex + 1] : null;
  
  // Get actual topic objects from allTopics
  const previousTopic = previousTopicId ? allTopics[previousTopicId] : null;
  const nextTopic = nextTopicId ? allTopics[nextTopicId] : null;

  const handleQuizComplete = (score) => {
    saveQuizScore(topicId, score);
    setQuizCompleted(true);
    if (!completed) {
      markTopicComplete(topicId);
    }
  };

  const handleMarkComplete = () => {
    markTopicComplete(topicId);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Breadcrumbs sx={{ mb: 2 }}>
          <Link component="button" variant="body1" onClick={() => navigate('/')} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link component="button" variant="body1" onClick={() => navigate(`/path/${pathId}`)} sx={{ cursor: 'pointer' }}>
            {path.title}
          </Link>
          <Typography color="text.primary">{topic.title}</Typography>
        </Breadcrumbs>

        <Paper elevation={0} sx={{ p: 4, mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
                {topic.title}
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                {topic.description}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
              <IconButton onClick={() => toggleBookmark(topicId)} color="primary">
                {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
              </IconButton>
              {completed && <CheckCircleIcon color="success" sx={{ fontSize: 32 }} />}
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Overview */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">
              Overview
            </Typography>
            <Typography variant="body1" paragraph>
              {topic.content.overview}
            </Typography>
          </Box>

          {/* Key Points */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">
              Key Points
            </Typography>
            <List>
              {topic.content.keyPoints.map((point, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`• ${point}`} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Use Cases */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">
              Real-World Use Cases
            </Typography>
            <List>
              {topic.content.useCases.map((useCase, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${index + 1}. ${useCase}`} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Best Practices */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">
              Best Practices
            </Typography>
            <List>
              {topic.content.bestPractices.map((practice, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`✓ ${practice}`} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Do's and Don'ts */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">
              Do's and Don'ts
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
              <Paper elevation={1} sx={{ p: 2, bgcolor: 'background.paper', border: '2px solid', borderColor: 'success.main' }}>
                <Typography variant="h6" color="success.main" gutterBottom>
                  ✓ Do
                </Typography>
                <List dense>
                  {topic.content.doAndDont.do.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
              <Paper elevation={1} sx={{ p: 2, bgcolor: 'background.paper', border: '2px solid', borderColor: 'error.main' }}>
                <Typography variant="h6" color="error.main" gutterBottom>
                  ✗ Don't
                </Typography>
                <List dense>
                  {topic.content.doAndDont.dont.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Box>
          </Box>

          {/* Code Examples */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">
              Code Examples
            </Typography>
            {topic.examples.map((example, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <CodeBlock code={example.code} language={example.language} title={example.title} />
              </Box>
            ))}
          </Box>

          {/* Visual Diagram */}
          {topic.visualDiagram && (
            <Box sx={{ mb: 4 }}>
              <DiagramVisualizer diagram={topic.visualDiagram} title="Visual Representation" />
            </Box>
          )}

          {/* Interactive Flow Diagram */}
          {topic.flowDiagramType && (
            <Box sx={{ mb: 4 }}>
              <InteractiveFlowDiagram type={topic.flowDiagramType} title={topic.flowDiagramTitle || "Interactive Diagram"} />
            </Box>
          )}

          {/* SQL Playground */}
          {topic.playground && topic.playground.type !== 'indexeddb' && topic.playground.type !== 'nosql' && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom fontWeight="600">
                Interactive SQL Playground
              </Typography>
              <SQLPlayground 
                sampleData={topic.playground.initialData} 
                initialQuery={topic.playground.defaultQuery} 
              />
            </Box>
          )}

          {/* IndexedDB Playground */}
          {topic.playground && topic.playground.type === 'indexeddb' && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom fontWeight="600">
                Interactive IndexedDB Playground
              </Typography>
              <IndexedDBPlayground 
                dbSchema={topic.playground.dbSchema}
                initialCode={topic.playground.defaultCode}
              />
            </Box>
          )}

          {/* NoSQL/MongoDB Playground */}
          {topic.playground && topic.playground.type === 'nosql' && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom fontWeight="600">
                Interactive MongoDB Playground
              </Typography>
              <NoSQLPlayground 
                exercises={topic.playground.exercises}
                initialData={topic.playground.initialData}
              />
            </Box>
          )}

          {/* Redis Playground */}
          {topic.playground && topic.playground.type === 'redis' && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom fontWeight="600">
                Interactive Redis Playground
              </Typography>
              <RedisPlayground 
                exercises={topic.playground.exercises}
                initialData={topic.playground.initialData}
              />
            </Box>
          )}

          {/* Practice Exercises - Code Editor Mode */}
          {topic.exercises && topic.exercises.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom fontWeight="600">
                Practice Assignments
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {topic.playground && topic.playground.type !== 'indexeddb' 
                  ? 'Write your SQL query and click "Run & Check" to validate your solution against expected output.'
                  : 'Complete these coding challenges to master the concepts. Select an assignment from the left, write your solution, and compare with the provided answer.'}
              </Typography>
              <CodeEditor 
                assignments={topic.exercises} 
                playgroundData={topic.playground && topic.playground.type !== 'indexeddb' ? topic.playground.initialData : null}
              />
            </Box>
          )}

          {/* Quiz Section */}
          {!showQuiz && !quizCompleted && (
            <Box sx={{ textAlign: 'center', my: 4 }}>
              <Button variant="contained" size="large" onClick={() => setShowQuiz(true)}>
                Take Quiz
              </Button>
            </Box>
          )}

          {showQuiz && !quizCompleted && (
            <Quiz questions={topic.quiz} onComplete={handleQuizComplete} />
          )}

          {quizCompleted && (
            <Paper elevation={3} sx={{ p: 3, mt: 3, bgcolor: 'success.light', textAlign: 'center' }}>
              <CheckCircleIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Quiz Completed!
              </Typography>
              <Typography variant="body1">
                Great job! You've completed this topic.
              </Typography>
            </Paper>
          )}

          {!completed && !showQuiz && (
            <Box sx={{ textAlign: 'center', my: 4 }}>
              <Button variant="outlined" onClick={handleMarkComplete}>
                Mark as Complete
              </Button>
            </Box>
          )}

          {/* Navigation Buttons */}
          <Divider sx={{ my: 4 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
            <Box>
              {previousTopic ? (
                <Button
                  variant="outlined"
                  startIcon={<ArrowBackIcon />}
                  onClick={() => navigate(`/path/${pathId}/topic/${previousTopicId}`)}
                  sx={{ textTransform: 'none' }}
                >
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="caption" display="block" color="text.secondary">
                      Previous
                    </Typography>
                    <Typography variant="body2" fontWeight="600">
                      {previousTopic.title}
                    </Typography>
                  </Box>
                </Button>
              ) : (
                <Box sx={{ width: 200 }} /> // Spacer
              )}
            </Box>

            <Button
              variant="text"
              onClick={() => navigate(`/path/${pathId}`)}
              sx={{ textTransform: 'none' }}
            >
              <Typography variant="body2" color="text.secondary">
                Back to {path.title}
              </Typography>
            </Button>

            <Box>
              {nextTopic ? (
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate(`/path/${pathId}/topic/${nextTopicId}`)}
                  sx={{ textTransform: 'none' }}
                >
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="caption" display="block" sx={{ opacity: 0.9 }}>
                      Next
                    </Typography>
                    <Typography variant="body2" fontWeight="600">
                      {nextTopic.title}
                    </Typography>
                  </Box>
                </Button>
              ) : (
                <Box sx={{ width: 200 }} /> // Spacer
              )}
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* AI Tutor - Floating Chat */}
      <AITutor topicContext={topic} />
    </Container>
  );
};

export default TopicDetail;
