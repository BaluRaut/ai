import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Paper,
  Breadcrumbs,
  Link,
  Button,
  Chip,
  Divider,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  NavigateNext,
  CheckCircle,
  Cancel,
  ArrowBack,
  ArrowForward,
  Bookmark,
  BookmarkBorder,
  ExpandMore,
  Lightbulb,
  Warning,
  Code,
  Quiz as QuizIcon,
} from '@mui/icons-material';
import { learningPaths, courseData } from '../../data/courseContent';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import Quiz from '../../components/Quiz/Quiz';
import { useProgress } from '../../context/ProgressContext';
import { useState } from 'react';

const TopicDetail = () => {
  const { pathId, topicId } = useParams();
  const navigate = useNavigate();
  const { markTopicComplete, isTopicComplete, toggleBookmark, isBookmarked } = useProgress();
  const [showQuiz, setShowQuiz] = useState(false);

  const path = learningPaths.find(p => p.id === pathId);
  const topics = courseData[pathId]?.topics || [];
  const topic = topics.find(t => t.id === topicId);
  const currentIndex = topics.findIndex(t => t.id === topicId);

  if (!topic || !path) {
    return (
      <Container>
        <Typography variant="h4">Topic not found</Typography>
      </Container>
    );
  }

  const previousTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

  const completed = isTopicComplete(topicId);
  const bookmarked = isBookmarked(topicId);

  const handleComplete = () => {
    markTopicComplete(topicId);
    if (nextTopic) {
      navigate(`/path/${pathId}/topic/${nextTopic.id}`);
    }
  };

  return (
    <Container maxWidth="lg">
      <Breadcrumbs separator={<NavigateNext fontSize="small" />} sx={{ mb: 3 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href={`/path/${pathId}`}>
          {path.title}
        </Link>
        <Typography color="text.primary">{topic.title}</Typography>
      </Breadcrumbs>

      {/* Header */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {topic.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {topic.description}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {completed && (
              <Chip
                icon={<CheckCircle />}
                label="Completed"
                color="success"
              />
            )}
            <Tooltip title={bookmarked ? 'Remove bookmark' : 'Bookmark'}>
              <IconButton onClick={() => toggleBookmark(topicId)} color={bookmarked ? 'primary' : 'default'}>
                {bookmarked ? <Bookmark /> : <BookmarkBorder />}
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Paper>

      {/* Overview */}
      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          📚 Overview
        </Typography>
        <Typography variant="body1" paragraph>
          {topic.content.overview}
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
          Key Points
        </Typography>
        <List>
          {topic.content.keyPoints.map((point, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircle color="primary" />
              </ListItemIcon>
              <ListItemText primary={point} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Use Cases */}
      {topic.content.useCases && (
        <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            💡 Real-World Use Cases
          </Typography>
          {topic.content.useCases.map((useCase, index) => (
            <Card key={index} variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  {useCase.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {useCase.description}
                </Typography>
                <Chip label={`Example: ${useCase.example}`} size="small" variant="outlined" />
              </CardContent>
            </Card>
          ))}
        </Paper>
      )}

      {/* Do's and Don'ts */}
      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          ✅ Do's and Don'ts
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mt: 2 }}>
          <Box>
            <Typography variant="h6" color="success.main" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle /> Do's
            </Typography>
            <List>
              {topic.content.dos.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircle color="success" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography variant="h6" color="error.main" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Cancel /> Don'ts
            </Typography>
            <List>
              {topic.content.donts.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Cancel color="error" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Paper>

      {/* Best Practices */}
      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Lightbulb color="warning" /> Best Practices
        </Typography>
        <List>
          {topic.content.bestPractices.map((practice, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Lightbulb color="warning" />
              </ListItemIcon>
              <ListItemText primary={practice} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Code Examples */}
      {topic.content.codeExamples && (
        <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Code /> Code Examples
          </Typography>
          {topic.content.codeExamples.map((example, index) => (
            <Accordion key={index} defaultExpanded={index === 0}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">{example.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  {example.explanation}
                </Typography>
                <CodeBlock code={example.code} />
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      )}

      {/* Quiz Section */}
      {topic.quiz && (
        <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
          {!showQuiz ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <QuizIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Ready to Test Your Knowledge?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Take the quiz to reinforce what you've learned
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => setShowQuiz(true)}
                startIcon={<QuizIcon />}
              >
                Start Quiz ({topic.quiz.length} Questions)
              </Button>
            </Box>
          ) : (
            <Quiz questions={topic.quiz} topicId={topicId} />
          )}
        </Paper>
      )}

      {/* Navigation */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => navigate(`/path/${pathId}/topic/${previousTopic.id}`)}
          disabled={!previousTopic}
        >
          Previous
        </Button>

        {!completed && (
          <Button
            variant="contained"
            color="success"
            onClick={handleComplete}
            startIcon={<CheckCircle />}
          >
            Mark as Complete
          </Button>
        )}

        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          onClick={() => navigate(`/path/${pathId}/topic/${nextTopic.id}`)}
          disabled={!nextTopic}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default TopicDetail;
