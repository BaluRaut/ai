import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Box,
  Alert,
  LinearProgress,
  Chip,
} from '@mui/material';
import { CheckCircle, Cancel, EmojiEvents } from '@mui/icons-material';
import { useProgress } from '../../context/ProgressContext';

const Quiz = ({ questions, topicId }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const { saveQuizScore } = useProgress();

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex,
    });
    setShowExplanation(false);
  };

  const handleCheckAnswer = () => {
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const handleSubmit = () => {
    const score = Object.keys(selectedAnswers).reduce((acc, key) => {
      return acc + (selectedAnswers[key] === questions[key].correctAnswer ? 1 : 0);
    }, 0);
    
    saveQuizScore(topicId, score, questions.length);
    setShowResults(true);
  };

  const calculateScore = () => {
    return Object.keys(selectedAnswers).reduce((acc, key) => {
      return acc + (selectedAnswers[key] === questions[key].correctAnswer ? 1 : 0);
    }, 0);
  };

  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const isCorrect = selectedAnswers[currentQuestion] === questions[currentQuestion].correctAnswer;
  const allAnswered = Object.keys(selectedAnswers).length === questions.length;

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;

    return (
      <Card elevation={3}>
        <CardContent>
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <EmojiEvents sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
            <Typography variant="h4" gutterBottom>
              Quiz Complete!
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              Score: {score} / {questions.length}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {percentage.toFixed(0)}%
            </Typography>

            <LinearProgress
              variant="determinate"
              value={percentage}
              sx={{ mt: 3, mb: 2, height: 10, borderRadius: 5 }}
              color={percentage >= 70 ? 'success' : percentage >= 50 ? 'warning' : 'error'}
            />

            {percentage >= 70 && (
              <Alert severity="success" sx={{ mt: 2 }}>
                Great job! You've mastered this topic!
              </Alert>
            )}
            {percentage >= 50 && percentage < 70 && (
              <Alert severity="warning" sx={{ mt: 2 }}>
                Good effort! Review the material and try again.
              </Alert>
            )}
            {percentage < 50 && (
              <Alert severity="info" sx={{ mt: 2 }}>
                Keep learning! Review the topic and practice more.
              </Alert>
            )}

            <Button
              variant="contained"
              onClick={() => {
                setCurrentQuestion(0);
                setSelectedAnswers({});
                setShowResults(false);
                setShowExplanation(false);
              }}
              sx={{ mt: 3 }}
            >
              Retake Quiz
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card elevation={3}>
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" color="primary">
              Quiz Time! 🎯
            </Typography>
            <Chip
              label={`Question ${currentQuestion + 1} of ${questions.length}`}
              color="primary"
              size="small"
            />
          </Box>
          
          <LinearProgress
            variant="determinate"
            value={((currentQuestion + 1) / questions.length) * 100}
            sx={{ mb: 2, height: 6, borderRadius: 3 }}
          />
        </Box>

        <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
          {question.question}
        </Typography>

        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            value={selectedAnswers[currentQuestion] ?? ''}
            onChange={(e) => handleAnswerSelect(currentQuestion, parseInt(e.target.value))}
          >
            {question.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={index}
                control={<Radio />}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Typography>{option}</Typography>
                    {showExplanation && index === question.correctAnswer && (
                      <CheckCircle color="success" sx={{ ml: 'auto' }} />
                    )}
                    {showExplanation && isAnswered && index === selectedAnswers[currentQuestion] && index !== question.correctAnswer && (
                      <Cancel color="error" sx={{ ml: 'auto' }} />
                    )}
                  </Box>
                }
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  p: 1.5,
                  mb: 1,
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                  ...(showExplanation && index === question.correctAnswer && {
                    borderColor: 'success.main',
                    bgcolor: 'success.light',
                    opacity: 0.9,
                  }),
                  ...(showExplanation && isAnswered && index === selectedAnswers[currentQuestion] && index !== question.correctAnswer && {
                    borderColor: 'error.main',
                    bgcolor: 'error.light',
                    opacity: 0.6,
                  }),
                }}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {showExplanation && (
          <Alert
            severity={isCorrect ? 'success' : 'info'}
            sx={{ mt: 3 }}
            icon={isCorrect ? <CheckCircle /> : <Cancel />}
          >
            <Typography variant="body2">
              <strong>Explanation:</strong> {question.explanation}
            </Typography>
          </Alert>
        )}

        <Box sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: 'wrap' }}>
          <Button
            variant="outlined"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>

          {!showExplanation && isAnswered && (
            <Button
              variant="contained"
              onClick={handleCheckAnswer}
              color="secondary"
            >
              Check Answer
            </Button>
          )}

          {showExplanation && currentQuestion < questions.length - 1 && (
            <Button
              variant="contained"
              onClick={handleNext}
            >
              Next Question
            </Button>
          )}

          {showExplanation && currentQuestion === questions.length - 1 && allAnswered && (
            <Button
              variant="contained"
              onClick={handleSubmit}
              color="success"
            >
              Submit Quiz
            </Button>
          )}

          {!showExplanation && (
            <Typography variant="caption" color="text.secondary" sx={{ ml: 'auto', alignSelf: 'center' }}>
              {Object.keys(selectedAnswers).length} / {questions.length} answered
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Quiz;
