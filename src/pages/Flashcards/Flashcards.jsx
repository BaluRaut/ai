import React, { useState, useEffect } from 'react';
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
  Paper,
  Tabs,
  Tab,
  Tooltip,
  useTheme,
  alpha
} from '@mui/material';
import {
  NavigateBefore,
  NavigateNext,
  Shuffle,
  Refresh,
  CheckCircle,
  Cancel,
  Lightbulb,
  Category,
  SwapHoriz
} from '@mui/icons-material';
import { pythonFlashcards } from '../../data/flashcards/pythonFlashcards';

function Flashcards() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isReversedMode, setIsReversedMode] = useState(false); // Flip mode - show answer first
  const [knownCards, setKnownCards] = useState(new Set());
  const [unknownCards, setUnknownCards] = useState(new Set());
  const [shuffledCards, setShuffledCards] = useState([]);

  const categories = pythonFlashcards.categories;
  const currentCategory = categories[selectedCategory];

  useEffect(() => {
    // Reset when category changes
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setShuffledCards([...currentCategory.cards]);
  }, [selectedCategory, currentCategory.cards]);

  const currentCard = shuffledCards[currentCardIndex];
  const totalCards = shuffledCards.length;
  const progress = totalCards > 0 ? ((currentCardIndex + 1) / totalCards) * 100 : 0;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentCardIndex < totalCards - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...currentCategory.cards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const handleReset = () => {
    setShuffledCards([...currentCategory.cards]);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setKnownCards(new Set());
    setUnknownCards(new Set());
  };

  const handleToggleReversedMode = () => {
    setIsReversedMode(!isReversedMode);
    setIsFlipped(false);
  };

  // Get the front and back content based on reversed mode
  const getFrontContent = (card) => isReversedMode ? card.back : card.front;
  const getBackContent = (card) => isReversedMode ? card.front : card.back;

  const handleKnown = () => {
    if (currentCard) {
      setKnownCards(prev => new Set([...prev, currentCard.id]));
      setUnknownCards(prev => {
        const newSet = new Set(prev);
        newSet.delete(currentCard.id);
        return newSet;
      });
    }
    handleNext();
  };

  const handleUnknown = () => {
    if (currentCard) {
      setUnknownCards(prev => new Set([...prev, currentCard.id]));
      setKnownCards(prev => {
        const newSet = new Set(prev);
        newSet.delete(currentCard.id);
        return newSet;
      });
    }
    handleNext();
  };

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            🃏 Flash Cards
          </Typography>
          {isReversedMode && (
            <Chip 
              icon={<SwapHoriz />}
              label="Flip Mode: Answer → Term" 
              color="secondary" 
              variant="filled"
              size="small"
            />
          )}
        </Box>
        <Typography variant="body1" color="text.secondary">
          Review key concepts with interactive flashcards. Click a card to flip it!
        </Typography>
      </Box>

      {/* Category Tabs */}
      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          {categories.map((cat, index) => (
            <Tab
              key={cat.id}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span>{cat.icon}</span>
                  <span>{cat.title}</span>
                </Box>
              }
            />
          ))}
        </Tabs>
      </Paper>

      {/* Progress & Stats */}
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Card {currentCardIndex + 1} of {totalCards}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Chip
              icon={<CheckCircle />}
              label={`Known: ${knownCards.size}`}
              color="success"
              size="small"
              variant="outlined"
            />
            <Chip
              icon={<Cancel />}
              label={`Review: ${unknownCards.size}`}
              color="error"
              size="small"
              variant="outlined"
            />
          </Box>
        </Box>
        <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
      </Box>

      {/* Flashcard */}
      {currentCard && (
        <Box sx={{ perspective: '1000px', mb: 3 }}>
          <Card
            onClick={handleFlip}
            sx={{
              minHeight: 350,
              cursor: 'pointer',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              position: 'relative',
              bgcolor: isFlipped 
                ? alpha(theme.palette.success.main, 0.05)
                : alpha(theme.palette.primary.main, 0.05),
              border: 2,
              borderColor: isFlipped ? 'success.main' : 'primary.main',
              '&:hover': {
                boxShadow: 6
              }
            }}
          >
            {/* Front of card */}
            <CardContent
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 4
              }}
            >
              <Lightbulb sx={{ fontSize: 48, color: isReversedMode ? 'secondary.main' : 'primary.main', mb: 2 }} />
              <Typography 
                variant={isReversedMode ? "body1" : "h5"}
                textAlign="center" 
                fontWeight="medium"
                sx={{ 
                  mb: 2,
                  whiteSpace: isReversedMode ? 'pre-wrap' : 'normal',
                  fontFamily: isReversedMode ? 'monospace' : 'inherit',
                  fontSize: isReversedMode ? '0.95rem' : 'inherit',
                  lineHeight: isReversedMode ? 1.8 : 'inherit',
                  maxHeight: '200px',
                  overflow: 'auto'
                }}
              >
                {getFrontContent(currentCard)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {isReversedMode ? "Click to reveal term" : "Click to reveal answer"}
              </Typography>
              {isReversedMode && (
                <Chip 
                  label="🔄 Flip Mode" 
                  size="small" 
                  color="secondary" 
                  sx={{ mt: 1 }}
                />
              )}
              <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                {currentCard.tags.map(tag => (
                  <Chip key={tag} label={tag} size="small" variant="outlined" />
                ))}
              </Box>
            </CardContent>

            {/* Back of card */}
            <CardContent
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 4,
                overflow: 'auto'
              }}
            >
              <Typography
                variant={isReversedMode ? "h5" : "body1"}
                textAlign="center"
                sx={{
                  whiteSpace: isReversedMode ? 'normal' : 'pre-wrap',
                  fontFamily: isReversedMode ? 'inherit' : 'monospace',
                  fontSize: isReversedMode ? 'inherit' : '0.95rem',
                  lineHeight: isReversedMode ? 'inherit' : 1.8,
                  fontWeight: isReversedMode ? 'medium' : 'normal'
                }}
              >
                {getBackContent(currentCard)}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* Navigation Controls */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
        >
          Previous
        </Button>

        <Tooltip title="Shuffle cards">
          <IconButton onClick={handleShuffle} color="primary">
            <Shuffle />
          </IconButton>
        </Tooltip>

        <Tooltip title={isReversedMode ? "Normal Mode (Term → Answer)" : "Flip Mode (Answer → Term)"}>
          <IconButton 
            onClick={handleToggleReversedMode} 
            color={isReversedMode ? "secondary" : "default"}
            sx={{
              bgcolor: isReversedMode ? alpha(theme.palette.secondary.main, 0.1) : 'transparent',
              '&:hover': {
                bgcolor: isReversedMode ? alpha(theme.palette.secondary.main, 0.2) : alpha(theme.palette.action.hover, 0.1)
              }
            }}
          >
            <SwapHoriz />
          </IconButton>
        </Tooltip>

        <Tooltip title="Reset progress">
          <IconButton onClick={handleReset} color="secondary">
            <Refresh />
          </IconButton>
        </Tooltip>

        <Button
          variant="outlined"
          endIcon={<NavigateNext />}
          onClick={handleNext}
          disabled={currentCardIndex === totalCards - 1}
        >
          Next
        </Button>
      </Box>

      {/* Know/Don't Know Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<Cancel />}
          onClick={handleUnknown}
          sx={{ minWidth: 150 }}
        >
          Need Review
        </Button>
        <Button
          variant="contained"
          color="success"
          startIcon={<CheckCircle />}
          onClick={handleKnown}
          sx={{ minWidth: 150 }}
        >
          Got It!
        </Button>
      </Box>

      {/* All Cards Overview */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Category /> All Cards in {currentCategory.title}
        </Typography>
        <Grid container spacing={2}>
          {shuffledCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Card
                onClick={() => {
                  setCurrentCardIndex(index);
                  setIsFlipped(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                sx={{
                  cursor: 'pointer',
                  bgcolor: knownCards.has(card.id)
                    ? alpha(theme.palette.success.main, 0.1)
                    : unknownCards.has(card.id)
                    ? alpha(theme.palette.error.main, 0.1)
                    : 'background.paper',
                  borderLeft: 4,
                  borderColor: knownCards.has(card.id)
                    ? 'success.main'
                    : unknownCards.has(card.id)
                    ? 'error.main'
                    : 'primary.main',
                  '&:hover': {
                    bgcolor: alpha(theme.palette.primary.main, 0.05)
                  }
                }}
              >
                <CardContent sx={{ py: 1.5 }}>
                  <Typography variant="body2" noWrap>
                    {index + 1}. {card.front}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default Flashcards;
