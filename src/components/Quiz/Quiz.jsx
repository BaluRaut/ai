import { useState } from 'react';
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Paper,
  Alert,
} from '@mui/material';

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleAnswerSelect = (answerIndex) => {
    if (!showExplanation) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmit = () => {
    const isCorrect = selectedAnswer === question.correctAnswer;
    setShowExplanation(true);
    
    const newAnswers = [...answers, { question: currentQuestion, correct: isCorrect }];
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const finalScore = Math.round((score / questions.length) * 100);
      onComplete(finalScore);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Question {currentQuestion + 1} of {questions.length}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500, mb: 2 }}>
          {question.question}
        </Typography>
      </Box>

      <RadioGroup value={selectedAnswer} onChange={(e) => handleAnswerSelect(Number(e.target.value))}>
        {question.options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={index}
            control={<Radio />}
            label={option}
            disabled={showExplanation}
            sx={{
              mb: 1,
              p: 1,
              borderRadius: 1,
              bgcolor: showExplanation && index === question.correctAnswer ? 'success.light' : 
                       showExplanation && index === selectedAnswer && index !== question.correctAnswer ? 'error.light' : 'transparent',
              '&:hover': { bgcolor: showExplanation ? undefined : 'action.hover' },
            }}
          />
        ))}
      </RadioGroup>

      {showExplanation && (
        <Alert severity={selectedAnswer === question.correctAnswer ? 'success' : 'error'} sx={{ mt: 2 }}>
          <Typography variant="body2">{question.explanation}</Typography>
        </Alert>
      )}

      <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
        {!showExplanation ? (
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
          >
            Submit Answer
          </Button>
        ) : (
          <Button variant="contained" onClick={handleNext}>
            {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
          </Button>
        )}
      </Box>

      <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
        Current Score: {score} / {currentQuestion + (showExplanation ? 1 : 0)}
      </Typography>
    </Paper>
  );
};

export default Quiz;
