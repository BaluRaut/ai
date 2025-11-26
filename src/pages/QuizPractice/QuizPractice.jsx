import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  LinearProgress,
  Chip,
  Paper,
  Alert,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  IconButton,
  Divider
} from '@mui/material';
import {
  CheckCircle,
  Cancel,
  NavigateNext,
  NavigateBefore,
  Refresh,
  FilterList,
  EmojiEvents,
  Timer,
  Psychology,
  Code
} from '@mui/icons-material';
import { getRandomQuestions, getQuestionsByDifficulty, getQuestionsByTag, getTotalQuestionCount } from '../../data/pythonQuizBank';
import { getRandomAIQuestions, getAIQuestionsByDifficulty, getAIQuestionCount } from '../../data/aiQuizBank';
import { useTranslation } from 'react-i18next';

const QuizPractice = () => {
  const { t } = useTranslation();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizSettings, setQuizSettings] = useState({
    count: 10,
    difficulty: 'all',
    level: 'all',
    topic: 'all' // 'all', 'python', 'ai'
  });
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startQuiz = () => {
    let selectedQuestions = [];
    const { count, difficulty, level, topic } = quizSettings;
    
    // Get questions based on topic selection
    if (topic === 'python') {
      // Python questions only
      if (level !== 'all') {
        selectedQuestions = getRandomQuestions(count, level);
      } else if (difficulty !== 'all') {
        selectedQuestions = getQuestionsByDifficulty(difficulty);
        selectedQuestions = selectedQuestions.sort(() => 0.5 - Math.random()).slice(0, count);
      } else {
        selectedQuestions = getRandomQuestions(count);
      }
    } else if (topic === 'ai') {
      // AI questions only
      if (difficulty !== 'all') {
        selectedQuestions = getAIQuestionsByDifficulty(difficulty);
        selectedQuestions = selectedQuestions.sort(() => 0.5 - Math.random()).slice(0, count);
      } else {
        selectedQuestions = getRandomAIQuestions(count);
      }
    } else {
      // Mixed - both Python and AI questions
      const pythonCount = Math.ceil(count / 2);
      const aiCount = count - pythonCount;
      
      let pythonQuestions = [];
      let aiQuestions = [];
      
      if (difficulty !== 'all') {
        pythonQuestions = getQuestionsByDifficulty(difficulty)
          .sort(() => 0.5 - Math.random())
          .slice(0, pythonCount);
        aiQuestions = getAIQuestionsByDifficulty(difficulty)
          .sort(() => 0.5 - Math.random())
          .slice(0, aiCount);
      } else {
        pythonQuestions = getRandomQuestions(pythonCount);
        aiQuestions = getRandomAIQuestions(aiCount);
      }
      
      // Mix and shuffle
      selectedQuestions = [...pythonQuestions, ...aiQuestions]
        .sort(() => 0.5 - Math.random());
    }
    
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizStarted(true);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setTimeElapsed(0);
    setTimerActive(true);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (showExplanation) return; // Prevent changing answer after submission
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    setShowExplanation(true);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setAnsweredQuestions(prev => [...prev, {
      question: currentQuestion,
      selectedAnswer,
      isCorrect
    }]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setTimerActive(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      const previousAnswer = answeredQuestions[currentQuestionIndex - 1];
      if (previousAnswer) {
        setSelectedAnswer(previousAnswer.selectedAnswer);
        setShowExplanation(true);
      } else {
        setSelectedAnswer(null);
        setShowExplanation(false);
      }
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions([]);
    setTimeElapsed(0);
    setTimerActive(false);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'success';
      case 'medium': return 'warning';
      case 'hard': return 'error';
      default: return 'default';
    }
  };

  const getScorePercentage = () => {
    return answeredQuestions.length > 0 
      ? Math.round((score / answeredQuestions.length) * 100)
      : 0;
  };

  if (!quizStarted) {
    return (
      <Container maxWidth="md" sx={{ py: 4, minHeight: '100vh', bgcolor: 'background.default' }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <EmojiEvents sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
          <Typography variant="h3" gutterBottom fontWeight="bold">
            {t('quiz.practiceTitle')}
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            {t('quiz.practiceSubtitle')} {getTotalQuestionCount() + getAIQuestionCount()}+ {t('quiz.questions')}!
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
            <Chip 
              icon={<Code />}
              label={`Python: ${getTotalQuestionCount()}+ questions`} 
              color="primary" 
              variant="outlined"
            />
            <Chip 
              icon={<Psychology />}
              label={`AI/ML: ${getAIQuestionCount()}+ questions`} 
              color="secondary" 
              variant="outlined"
            />
          </Box>
        </Box>

        <Card elevation={3}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              {t('quiz.quizSettings')}
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>{t('quiz.topic', 'Topic')}</InputLabel>
                  <Select
                    value={quizSettings.topic}
                    label={t('quiz.topic', 'Topic')}
                    onChange={(e) => setQuizSettings({...quizSettings, topic: e.target.value})}
                  >
                    <MenuItem value="all">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        🎯 {t('quiz.allTopics', 'All Topics (Python + AI/ML)')}
                      </Box>
                    </MenuItem>
                    <MenuItem value="python">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        🐍 {t('quiz.pythonOnly', 'Python Programming Only')}
                      </Box>
                    </MenuItem>
                    <MenuItem value="ai">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        🤖 {t('quiz.aiOnly', 'AI & Machine Learning Only')}
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>{t('quiz.numberOfQuestions')}</InputLabel>
                  <Select
                    value={quizSettings.count}
                    label={t('quiz.numberOfQuestions')}
                    onChange={(e) => setQuizSettings({...quizSettings, count: e.target.value})}
                  >
                    <MenuItem value={5}>5 {t('quiz.questions')}</MenuItem>
                    <MenuItem value={10}>10 {t('quiz.questions')}</MenuItem>
                    <MenuItem value={20}>20 {t('quiz.questions')}</MenuItem>
                    <MenuItem value={50}>50 {t('quiz.questions')}</MenuItem>
                    <MenuItem value={100}>100 {t('quiz.questions')}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>{t('quiz.difficultyLevel')}</InputLabel>
                  <Select
                    value={quizSettings.difficulty}
                    label={t('quiz.difficultyLevel')}
                    onChange={(e) => setQuizSettings({...quizSettings, difficulty: e.target.value})}
                  >
                    <MenuItem value="all">{t('quiz.allLevels')}</MenuItem>
                    <MenuItem value="easy">{t('quiz.easy')}</MenuItem>
                    <MenuItem value="medium">{t('quiz.medium')}</MenuItem>
                    <MenuItem value="hard">{t('quiz.hard')}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>{t('quiz.learningPath')}</InputLabel>
                  <Select
                    value={quizSettings.level}
                    label={t('quiz.learningPath')}
                    onChange={(e) => setQuizSettings({...quizSettings, level: e.target.value})}
                  >
                    <MenuItem value="all">{t('quiz.allPaths')}</MenuItem>
                    <MenuItem value="beginner">{t('quiz.beginner')}</MenuItem>
                    <MenuItem value="intermediate">{t('quiz.intermediate')}</MenuItem>
                    <MenuItem value="advanced">{t('quiz.advanced')}</MenuItem>
                    <MenuItem value="expert">{t('quiz.expert')}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={startQuiz}
              sx={{ mt: 4, py: 2, fontSize: '1.1rem' }}
            >
              {t('quiz.start')}
            </Button>
          </CardContent>
        </Card>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {t('quiz.tip')}
          </Typography>
        </Box>
      </Container>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isQuizComplete = currentQuestionIndex === questions.length - 1 && showExplanation;

  if (isQuizComplete) {
    const percentage = getScorePercentage();
    let feedback = '';
    let feedbackColor = 'success';

    if (percentage >= 90) {
      feedback = 'Outstanding! You have mastered Python! 🏆';
      feedbackColor = 'success';
    } else if (percentage >= 75) {
      feedback = 'Great job! You have strong Python knowledge! 🌟';
      feedbackColor = 'success';
    } else if (percentage >= 60) {
      feedback = 'Good work! Keep practicing to improve! 👍';
      feedbackColor = 'info';
    } else if (percentage >= 40) {
      feedback = 'Not bad! Review the topics and try again! 📚';
      feedbackColor = 'warning';
    } else {
      feedback = 'Keep learning! Practice makes perfect! 💪';
      feedbackColor = 'error';
    }

    return (
      <Container maxWidth="md" sx={{ py: 4, minHeight: '100vh', bgcolor: 'background.default' }}>
        <Card elevation={3}>
          <CardContent sx={{ p: 4, textAlign: 'center' }}>
            <EmojiEvents sx={{ fontSize: 80, color: `${feedbackColor}.main`, mb: 2 }} />
            
            <Typography variant="h3" gutterBottom fontWeight="bold">
              Quiz Complete!
            </Typography>

            <Alert severity={feedbackColor} sx={{ my: 3, fontSize: '1.1rem' }}>
              {feedback}
            </Alert>

            <Grid container spacing={3} sx={{ my: 3 }}>
              <Grid item xs={12} sm={4}>
                <Paper elevation={2} sx={{ p: 3 }}>
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    {score}/{questions.length}
                  </Typography>
                  <Typography color="text.secondary">Correct Answers</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={2} sx={{ p: 3 }}>
                  <Typography variant="h4" color="secondary" fontWeight="bold">
                    {percentage}%
                  </Typography>
                  <Typography color="text.secondary">Score</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={2} sx={{ p: 3 }}>
                  <Typography variant="h4" color="info.main" fontWeight="bold">
                    {formatTime(timeElapsed)}
                  </Typography>
                  <Typography color="text.secondary">Time</Typography>
                </Paper>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              Review Your Answers
            </Typography>

            <Box sx={{ textAlign: 'left', maxHeight: 400, overflow: 'auto', mb: 3 }}>
              {answeredQuestions.map((answer, index) => (
                <Paper 
                  key={index} 
                  sx={{ 
                    p: 2, 
                    mb: 2, 
                    border: 1, 
                    borderColor: answer.isCorrect ? 'success.main' : 'error.main' 
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {answer.isCorrect ? (
                      <CheckCircle color="success" sx={{ mr: 1 }} />
                    ) : (
                      <Cancel color="error" sx={{ mr: 1 }} />
                    )}
                    <Typography variant="subtitle2">
                      Question {index + 1}: {answer.question.question}
                    </Typography>
                  </Box>
                  {!answer.isCorrect && (
                    <Typography variant="body2" color="text.secondary">
                      Correct answer: {answer.question.options[answer.question.correctAnswer]}
                    </Typography>
                  )}
                </Paper>
              ))}
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={resetQuiz}
                  size="large"
                >
                  Back to Settings
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={startQuiz}
                  size="large"
                >
                  Try Again
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4, minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Progress Header */}
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">
            Question {currentQuestionIndex + 1} of {questions.length}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Chip 
              icon={<Timer />}
              label={formatTime(timeElapsed)} 
              color="primary" 
              variant="outlined" 
            />
            <Chip 
              label={`Score: ${score}/${answeredQuestions.length}`} 
              color="secondary" 
            />
          </Box>
        </Box>
        <LinearProgress 
          variant="determinate" 
          value={((currentQuestionIndex + 1) / questions.length) * 100} 
          sx={{ height: 8, borderRadius: 4 }}
        />
      </Box>

      {/* Question Card */}
      <Card elevation={3}>
        <CardContent sx={{ p: 4 }}>
          {/* Question Header */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
              <Chip 
                label={currentQuestion.difficulty} 
                color={getDifficultyColor(currentQuestion.difficulty)}
                size="small"
              />
              {currentQuestion.tags.map(tag => (
                <Chip key={tag} label={tag} size="small" variant="outlined" />
              ))}
            </Box>
            
            <Typography variant="h5" gutterBottom fontWeight="bold">
              {currentQuestion.question}
            </Typography>
          </Box>

          {/* Answer Options */}
          <FormControl component="fieldset" fullWidth sx={{ mb: 3 }}>
            <RadioGroup value={selectedAnswer} onChange={(e) => handleAnswerSelect(parseInt(e.target.value))}>
              {currentQuestion.options.map((option, index) => {
                let optionColor = 'default';
                let optionBorder = 'none';
                
                if (showExplanation) {
                  if (index === currentQuestion.correctAnswer) {
                    optionColor = 'success.light';
                    optionBorder = '2px solid';
                  } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
                    optionColor = 'error.light';
                    optionBorder = '2px solid';
                  }
                }

                return (
                  <Paper
                    key={index}
                    sx={{
                      p: 2,
                      mb: 1,
                      backgroundColor: optionColor,
                      border: optionBorder,
                      borderColor: optionColor,
                      cursor: showExplanation ? 'default' : 'pointer',
                      '&:hover': {
                        backgroundColor: showExplanation ? optionColor : 'action.hover'
                      }
                    }}
                    onClick={() => !showExplanation && handleAnswerSelect(index)}
                  >
                    <FormControlLabel
                      value={index}
                      control={<Radio disabled={showExplanation} />}
                      label={
                        <Typography variant="body1">
                          {option}
                          {showExplanation && index === currentQuestion.correctAnswer && (
                            <CheckCircle sx={{ ml: 1, verticalAlign: 'middle', color: 'success.main' }} />
                          )}
                        </Typography>
                      }
                      sx={{ width: '100%', m: 0 }}
                    />
                  </Paper>
                );
              })}
            </RadioGroup>
          </FormControl>

          {/* Explanation */}
          {showExplanation && (
            <Alert 
              severity={selectedAnswer === currentQuestion.correctAnswer ? 'success' : 'info'}
              sx={{ mb: 3 }}
            >
              <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                Explanation:
              </Typography>
              <Typography variant="body2">
                {currentQuestion.explanation}
              </Typography>
            </Alert>
          )}

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
            <Button
              startIcon={<NavigateBefore />}
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>

            <Box sx={{ display: 'flex', gap: 2 }}>
              {!showExplanation ? (
                <Button
                  variant="contained"
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  size="large"
                >
                  Submit Answer
                </Button>
              ) : (
                <Button
                  variant="contained"
                  endIcon={<NavigateNext />}
                  onClick={handleNextQuestion}
                  size="large"
                >
                  {currentQuestionIndex === questions.length - 1 ? 'View Results' : 'Next Question'}
                </Button>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Exit Button */}
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button
          startIcon={<Refresh />}
          onClick={resetQuiz}
          variant="outlined"
        >
          Exit Quiz
        </Button>
      </Box>
    </Container>
  );
};

export default QuizPractice;
