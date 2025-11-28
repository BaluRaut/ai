import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  LinearProgress,
  Chip,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Fade,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RefreshIcon from '@mui/icons-material/Refresh';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import StyleIcon from '@mui/icons-material/Style';
import { allTopics, learningPaths } from '../../data';

// Generate flashcards from topics
const generateFlashcards = () => {
  const flashcards = [];
  
  Object.entries(allTopics).forEach(([topicId, topic]) => {
    // Add key points as flashcards
    if (topic.content?.keyPoints) {
      topic.content.keyPoints.forEach((point, index) => {
        flashcards.push({
          id: `${topicId}-kp-${index}`,
          topicId,
          topicTitle: topic.title,
          pathId: topic.pathId,
          type: 'concept',
          front: `What is a key concept in ${topic.title}?`,
          back: point,
          category: 'Key Concept',
        });
      });
    }

    // Add quiz questions as flashcards
    if (topic.quiz) {
      topic.quiz.forEach((q, index) => {
        flashcards.push({
          id: `${topicId}-quiz-${index}`,
          topicId,
          topicTitle: topic.title,
          pathId: topic.pathId,
          type: 'quiz',
          front: q.question,
          back: `${q.options[q.correctAnswer]}\n\n💡 ${q.explanation}`,
          category: 'Quiz Question',
        });
      });
    }

    // Add do's and don'ts as flashcards
    if (topic.content?.doAndDont) {
      topic.content.doAndDont.do?.slice(0, 3).forEach((doItem, index) => {
        flashcards.push({
          id: `${topicId}-do-${index}`,
          topicId,
          topicTitle: topic.title,
          pathId: topic.pathId,
          type: 'best-practice',
          front: `Best Practice for ${topic.title}:`,
          back: `✅ DO: ${doItem}`,
          category: 'Best Practice',
        });
      });

      topic.content.doAndDont.dont?.slice(0, 3).forEach((dontItem, index) => {
        flashcards.push({
          id: `${topicId}-dont-${index}`,
          topicId,
          topicTitle: topic.title,
          pathId: topic.pathId,
          type: 'best-practice',
          front: `Common Mistake in ${topic.title}:`,
          back: `❌ DON'T: ${dontItem}`,
          category: 'Common Mistake',
        });
      });
    }
  });

  return flashcards;
};

const Flashcards = () => {
  const [allFlashcards] = useState(generateFlashcards);
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedPath, setSelectedPath] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [knownCards, setKnownCards] = useState([]);
  const [unknownCards, setUnknownCards] = useState([]);
  const [isStudying, setIsStudying] = useState(false);

  useEffect(() => {
    filterCards();
  }, [selectedPath, selectedType, allFlashcards]);

  const filterCards = () => {
    let filtered = [...allFlashcards];

    if (selectedPath !== 'all') {
      filtered = filtered.filter(card => card.pathId === selectedPath);
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(card => card.type === selectedType);
    }

    // Shuffle
    filtered.sort(() => Math.random() - 0.5);
    setFlashcards(filtered);
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards([]);
    setUnknownCards([]);
  };

  const shuffleCards = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const markKnown = () => {
    if (!knownCards.includes(currentIndex)) {
      setKnownCards([...knownCards, currentIndex]);
      setUnknownCards(unknownCards.filter(i => i !== currentIndex));
    }
    nextCard();
  };

  const markUnknown = () => {
    if (!unknownCards.includes(currentIndex)) {
      setUnknownCards([...unknownCards, currentIndex]);
      setKnownCards(knownCards.filter(i => i !== currentIndex));
    }
    nextCard();
  };

  const restartSession = () => {
    setKnownCards([]);
    setUnknownCards([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    shuffleCards();
  };

  const studyUnknown = () => {
    if (unknownCards.length > 0) {
      const unknownFlashcards = unknownCards.map(i => flashcards[i]);
      setFlashcards(unknownFlashcards);
      setCurrentIndex(0);
      setIsFlipped(false);
      setKnownCards([]);
      setUnknownCards([]);
    }
  };

  const currentCard = flashcards[currentIndex];
  const progress = flashcards.length > 0 ? ((currentIndex + 1) / flashcards.length) * 100 : 0;

  const difficultyColors = {
    beginner: 'success',
    intermediate: 'warning',
    advanced: 'error',
    professional: 'secondary',
  };

  if (flashcards.length === 0) {
    return (
      <Container maxWidth="md">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <StyleIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            📚 Flashcards
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Review key concepts in flashcard format
          </Typography>

          <Paper sx={{ p: 4, mt: 4 }}>
            <Stack spacing={3}>
              <FormControl fullWidth>
                <InputLabel>Learning Path</InputLabel>
                <Select
                  value={selectedPath}
                  label="Learning Path"
                  onChange={(e) => setSelectedPath(e.target.value)}
                >
                  <MenuItem value="all">All Paths</MenuItem>
                  {learningPaths.map(path => (
                    <MenuItem key={path.id} value={path.id}>
                      {path.icon} {path.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Card Type</InputLabel>
                <Select
                  value={selectedType}
                  label="Card Type"
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <MenuItem value="all">All Types</MenuItem>
                  <MenuItem value="concept">Key Concepts</MenuItem>
                  <MenuItem value="quiz">Quiz Questions</MenuItem>
                  <MenuItem value="best-practice">Best Practices</MenuItem>
                </Select>
              </FormControl>

              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  filterCards();
                  setIsStudying(true);
                }}
              >
                Start Studying
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              📚 Flashcards
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {flashcards.length} cards • {knownCards.length} known • {unknownCards.length} to review
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <IconButton onClick={shuffleCards} title="Shuffle">
              <ShuffleIcon />
            </IconButton>
            <IconButton onClick={restartSession} title="Restart">
              <RefreshIcon />
            </IconButton>
          </Stack>
        </Box>

        {/* Progress */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Card {currentIndex + 1} of {flashcards.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Math.round(progress)}%
            </Typography>
          </Box>
          <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
        </Box>

        {/* Flashcard */}
        {currentCard && (
          <Box
            onClick={() => setIsFlipped(!isFlipped)}
            sx={{
              perspective: '1000px',
              cursor: 'pointer',
              mb: 3,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                minHeight: 300,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
              }}
            >
              {/* Front */}
              <Card
                sx={{
                  position: 'absolute',
                  width: '100%',
                  minHeight: 300,
                  backfaceVisibility: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 2 }}>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        size="small"
                        label={currentCard.topicTitle}
                        color={difficultyColors[currentCard.pathId]}
                      />
                      <Chip
                        size="small"
                        label={currentCard.category}
                        variant="outlined"
                      />
                    </Stack>
                  </Box>
                  <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h5" textAlign="center">
                      {currentCard.front}
                    </Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary" textAlign="center">
                    Click to flip
                  </Typography>
                </CardContent>
              </Card>

              {/* Back */}
              <Card
                sx={{
                  position: 'absolute',
                  width: '100%',
                  minHeight: 300,
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      size="small"
                      label="Answer"
                      sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'inherit' }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h6" textAlign="center" sx={{ whiteSpace: 'pre-line' }}>
                      {currentCard.back}
                    </Typography>
                  </Box>
                  <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
                    Click to flip back
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        )}

        {/* Navigation & Actions */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          <Button
            variant="outlined"
            color="error"
            startIcon={<CancelIcon />}
            onClick={markUnknown}
            disabled={currentIndex >= flashcards.length - 1 && unknownCards.includes(currentIndex)}
          >
            Don't Know
          </Button>
          <IconButton onClick={prevCard} disabled={currentIndex === 0}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={nextCard} disabled={currentIndex >= flashcards.length - 1}>
            <ArrowForwardIcon />
          </IconButton>
          <Button
            variant="outlined"
            color="success"
            startIcon={<CheckCircleIcon />}
            onClick={markKnown}
            disabled={currentIndex >= flashcards.length - 1 && knownCards.includes(currentIndex)}
          >
            Know It
          </Button>
        </Stack>

        {/* Session Complete */}
        {currentIndex === flashcards.length - 1 && (
          <Fade in>
            <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'success.light', color: 'success.contrastText' }}>
              <Typography variant="h6" gutterBottom>
                🎉 Session Complete!
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Known: {knownCards.length} • To Review: {unknownCards.length}
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" onClick={restartSession}>
                  Start Over
                </Button>
                {unknownCards.length > 0 && (
                  <Button variant="outlined" onClick={studyUnknown} sx={{ color: 'inherit', borderColor: 'inherit' }}>
                    Study Unknown ({unknownCards.length})
                  </Button>
                )}
              </Stack>
            </Paper>
          </Fade>
        )}

        {/* Keyboard shortcuts */}
        <Typography variant="caption" color="text.secondary" textAlign="center" display="block">
          Tip: Press Space to flip, ← → to navigate
        </Typography>
      </Box>
    </Container>
  );
};

export default Flashcards;
