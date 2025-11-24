import { useState } from 'react'
import { Box, Paper, Typography, Radio, RadioGroup, FormControlLabel, Button, LinearProgress, Alert } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { QuizQuestion } from '../types'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import Confetti from 'react-confetti'

interface QuizComponentProps {
  questions: QuizQuestion[]
  onComplete: (score: number) => void
  passingScore: number
}

export default function QuizComponent({ questions, onComplete, passingScore }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [completed, setCompleted] = useState(false)

  const handleAnswer = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    setShowResult(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setCompleted(true)
      const finalScore = Math.round((score / questions.length) * 100)
      onComplete(finalScore)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const isPassed = (score / questions.length) * 100 >= passingScore

  if (completed) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {isPassed && <Confetti recycle={false} numberOfPieces={500} />}
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            {isPassed ? '🎉 Congratulations!' : '📚 Keep Learning!'}
          </Typography>
          <Typography variant="h2" color={isPassed ? 'success.main' : 'error.main'} gutterBottom>
            {Math.round((score / questions.length) * 100)}%
          </Typography>
          <Typography variant="body1" paragraph>
            You scored {score} out of {questions.length} questions correctly
          </Typography>
          <Alert severity={isPassed ? 'success' : 'info'} sx={{ mt: 2 }}>
            {isPassed
              ? 'Great job! You passed the quiz!'
              : `You need ${passingScore}% to pass. Review the material and try again!`}
          </Alert>
        </Paper>
      </motion.div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <Box>
      <LinearProgress variant="determinate" value={progress} sx={{ mb: 3, height: 8, borderRadius: 4 }} />

      <Typography variant="h6" gutterBottom color="text.secondary">
        Question {currentQuestion + 1} of {questions.length}
      </Typography>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Paper elevation={3} sx={{ p: 4, mb: 3 }}>
            <Typography variant="h5" gutterBottom>
              {question.question}
            </Typography>

            <RadioGroup
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(Number(e.target.value))}
            >
              {question.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={index}
                  control={<Radio />}
                  label={option}
                  disabled={showResult}
                  sx={{
                    p: 1,
                    borderRadius: 1,
                    bgcolor: showResult
                      ? index === question.correctAnswer
                        ? 'success.light'
                        : index === selectedAnswer
                        ? 'error.light'
                        : 'transparent'
                      : 'transparent'
                  }}
                />
              ))}
            </RadioGroup>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Alert
                  severity={selectedAnswer === question.correctAnswer ? 'success' : 'error'}
                  icon={selectedAnswer === question.correctAnswer ? <CheckCircleIcon /> : <CancelIcon />}
                  sx={{ mt: 3 }}
                >
                  <Typography variant="body1">
                    {question.explanation}
                  </Typography>
                </Alert>
              </motion.div>
            )}
          </Paper>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              disabled={currentQuestion === 0}
              onClick={() => {
                setCurrentQuestion(currentQuestion - 1)
                setShowResult(false)
                setSelectedAnswer(null)
              }}
            >
              Previous
            </Button>

            {!showResult ? (
              <Button
                variant="contained"
                onClick={handleAnswer}
                disabled={selectedAnswer === null}
              >
                Submit Answer
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </Button>
            )}
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  )
}

