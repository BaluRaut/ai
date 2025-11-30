import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Button,
  IconButton,
  LinearProgress,
  ToggleButtonGroup,
  ToggleButton,
  Paper,
  Fade,
} from '@mui/material';
import {
  ArrowBack,
  ArrowForward,
  Shuffle,
  Replay,
  Check,
  Close,
  Style,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { flashcardSets, getTotalFlashcardCount } from '../../data/flashcards';

// Memoized flashcard set card
const FlashcardSetCard = memo(({ set, onClick, getDifficultyColor }) => (
  <Card 
    sx={{ 
      height: '100%', 
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 4,
      }
    }}
    onClick={() => onClick(set)}
  >
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <Typography variant="h2" component="span">
          {set.icon}
        </Typography>
        <Box>
          <Typography variant="h6">{set.title}</Typography>
          <Chip 
            label={set.difficulty} 
            size="small" 
            color={getDifficultyColor(set.difficulty)}
          />
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {set.description}
      </Typography>
      <Typography variant="caption" color="primary">
        {set.count} cards
      </Typography>
    </CardContent>
  </Card>
));

const Flashcards = () => {
  const { t } = useTranslation();
  const [selectedSet, setSelectedSet] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [knownCards, setKnownCards] = useState(new Set());
  const [unknownCards, setUnknownCards] = useState(new Set());
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  // Memoize total count
  const totalCount = useMemo(() => getTotalFlashcardCount(), []);

  // Shuffle function
  const shuffleArray = useCallback((array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Start a flashcard set
  const startSet = useCallback((set) => {
    setSelectedSet(set);
    setShuffledCards([...set.flashcards]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards(new Set());
    setUnknownCards(new Set());
  }, []);

  // Shuffle current set
  const handleShuffle = () => {
    setShuffledCards(shuffleArray(shuffledCards));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Reset progress
  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards(new Set());
    setUnknownCards(new Set());
  };

  // Navigate cards
  const goNext = useCallback(() => {
    if (currentIndex < shuffledCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, shuffledCards.length]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  // Mark card as known/unknown
  const markKnown = useCallback(() => {
    const cardId = shuffledCards[currentIndex].id;
    setKnownCards(prev => new Set([...prev, cardId]));
    setUnknownCards(prev => {
      const newSet = new Set(prev);
      newSet.delete(cardId);
      return newSet;
    });
    goNext();
  }, [shuffledCards, currentIndex, goNext]);

  const markUnknown = useCallback(() => {
    const cardId = shuffledCards[currentIndex].id;
    setUnknownCards(prev => new Set([...prev, cardId]));
    setKnownCards(prev => {
      const newSet = new Set(prev);
      newSet.delete(cardId);
      return newSet;
    });
    goNext();
  }, [shuffledCards, currentIndex, goNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedSet) return;
      
      switch (e.key) {
        case ' ':
        case 'Enter':
          e.preventDefault();
          setIsFlipped(f => !f);
          break;
        case 'ArrowRight':
          goNext();
          break;
        case 'ArrowLeft':
          goPrev();
          break;
        case 'k':
          markKnown();
          break;
        case 'u':
          markUnknown();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSet, goNext, goPrev, markKnown, markUnknown]);

  // Memoize filtered sets
  const filteredSets = useMemo(() => 
    filterDifficulty === 'all' 
      ? flashcardSets 
      : flashcardSets.filter(set => set.difficulty === filterDifficulty),
    [filterDifficulty]
  );

  // Back to set selection
  const backToSets = useCallback(() => {
    setSelectedSet(null);
    setShuffledCards([]);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, []);

  // Current card
  const currentCard = shuffledCards[currentIndex];
  const progress = shuffledCards.length > 0 
    ? ((currentIndex + 1) / shuffledCards.length) * 100 
    : 0;

  // Difficulty colors
  const getDifficultyColor = useCallback((difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'success';
      case 'intermediate': return 'warning';
      case 'advanced': return 'error';
      default: return 'default';
    }
  }, []);

  // Set selection view
  if (!selectedSet) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Style /> {t('nav.flashcards', 'Flashcards')}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {totalCount} flashcards across {flashcardSets.length} sets
          </Typography>
        </Box>

        {/* Difficulty Filter */}
        <Box sx={{ mb: 3 }}>
          <ToggleButtonGroup
            value={filterDifficulty}
            exclusive
            onChange={(e, val) => val && setFilterDifficulty(val)}
            size="small"
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="beginner">Beginner</ToggleButton>
            <ToggleButton value="intermediate">Intermediate</ToggleButton>
            <ToggleButton value="advanced">Advanced</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Flashcard Sets Grid */}
        <Grid container spacing={3}>
          {filteredSets.map((set) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={set.id}>
              <FlashcardSetCard 
                set={set} 
                onClick={startSet} 
                getDifficultyColor={getDifficultyColor} 
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
  // Flashcard study view
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Button startIcon={<ArrowBack />} onClick={backToSets} sx={{ mb: 2 }}>
          Back to Sets
        </Button>
        <Typography variant="h5" gutterBottom>
          {selectedSet.icon} {selectedSet.title}
        </Typography>
        
        {/* Progress */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ flexGrow: 1, height: 8, borderRadius: 4 }}
          />
          <Typography variant="body2" color="text.secondary">
            {currentIndex + 1} / {shuffledCards.length}
          </Typography>
        </Box>

        {/* Stats */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Chip 
            icon={<Check />} 
            label={`Known: ${knownCards.size}`} 
            color="success" 
            size="small" 
          />
          <Chip 
            icon={<Close />} 
            label={`Review: ${unknownCards.size}`} 
            color="error" 
            size="small" 
          />
        </Box>
      </Box>

      {/* Flashcard with 3D Flip Animation */}
      {currentCard && (
        <Box
          onClick={() => setIsFlipped(!isFlipped)}
          sx={{
            perspective: '1000px',
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              minHeight: 300,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front of card (Question) */}
            <Paper
              elevation={4}
              sx={{
                position: 'absolute',
                width: '100%',
                minHeight: 300,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                bgcolor: 'background.paper',
                color: 'text.primary',
                backfaceVisibility: 'hidden',
                borderRadius: 2,
                '&:hover': {
                  boxShadow: 8,
                }
              }}
            >
              <Chip 
                label={currentCard.category} 
                size="small" 
                sx={{ position: 'absolute', top: 16, left: 16 }}
              />
              <Chip 
                label={currentCard.difficulty} 
                size="small" 
                color={getDifficultyColor(currentCard.difficulty)}
                sx={{ position: 'absolute', top: 16, right: 16 }}
              />
              
              <Typography variant="caption" color="text.secondary" sx={{ mb: 2 }}>
                QUESTION
              </Typography>
              
              <Typography variant="h5" sx={{ maxWidth: '100%' }}>
                {currentCard.front}
              </Typography>

              <Typography 
                variant="caption" 
                sx={{ position: 'absolute', bottom: 16, color: 'text.secondary' }}
              >
                Click or press Space to flip
              </Typography>
            </Paper>

            {/* Back of card (Answer) */}
            <Paper
              elevation={4}
              sx={{
                position: 'absolute',
                width: '100%',
                minHeight: 300,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                borderRadius: 2,
                '&:hover': {
                  boxShadow: 8,
                }
              }}
            >
              <Chip 
                label={currentCard.category} 
                size="small" 
                sx={{ 
                  position: 'absolute', 
                  top: 16, 
                  left: 16,
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'inherit'
                }}
              />
              <Chip 
                label={currentCard.difficulty} 
                size="small" 
                color={getDifficultyColor(currentCard.difficulty)}
                sx={{ position: 'absolute', top: 16, right: 16 }}
              />
              
              <Typography variant="caption" sx={{ mb: 2 }}>
                ANSWER
              </Typography>
              
              <Typography variant="h5" sx={{ maxWidth: '100%' }}>
                {currentCard.back}
              </Typography>

              <Typography 
                variant="caption" 
                sx={{ position: 'absolute', bottom: 16, color: 'rgba(255,255,255,0.7)' }}
              >
                Click or press Space to flip back
              </Typography>
            </Paper>
          </Box>
        </Box>
      )}

      {/* Controls */}
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        <IconButton 
          onClick={goPrev} 
          disabled={currentIndex === 0}
          color="primary"
          size="large"
        >
          <ArrowBack />
        </IconButton>
        
        <Button 
          variant="outlined" 
          color="error" 
          startIcon={<Close />}
          onClick={markUnknown}
        >
          Need Review (U)
        </Button>
        
        <Button 
          variant="contained" 
          color="success" 
          startIcon={<Check />}
          onClick={markKnown}
        >
          Got It! (K)
        </Button>
        
        <IconButton 
          onClick={goNext} 
          disabled={currentIndex === shuffledCards.length - 1}
          color="primary"
          size="large"
        >
          <ArrowForward />
        </IconButton>
      </Box>

      {/* Action buttons */}
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button startIcon={<Shuffle />} onClick={handleShuffle}>
          Shuffle
        </Button>
        <Button startIcon={<Replay />} onClick={handleReset}>
          Reset
        </Button>
      </Box>

      {/* Keyboard shortcuts */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="caption" color="text.secondary">
          Keyboard: Space/Enter = Flip | ←→ = Navigate | K = Known | U = Review
        </Typography>
      </Box>
    </Container>
  );
};

export default Flashcards;
