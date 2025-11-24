import { useParams, useNavigate } from 'react-router-dom'
import { Typography, Box, Button } from '@mui/material'
import QuizComponent from '../components/QuizComponent'
import { quizzes } from '../data/quizzes'
import { modules } from '../data/modules'
import { useAppContext } from '../context/AppContext'

export default function QuizPage() {
  const { quizId } = useParams<{ quizId: string }>()
  const navigate = useNavigate()
  const { markQuizComplete } = useAppContext()

  const quiz = quizzes.find(q => q.id === quizId)

  if (!quiz) {
    return <Typography>Quiz not found</Typography>
  }

  const module = modules.find(m => m.id === quiz.moduleId)

  const handleQuizComplete = (score: number) => {
    markQuizComplete(quiz.id, score)
  }

  return (
    <Box>
      <Button onClick={() => navigate(`/module/${quiz.moduleId}`)} sx={{ mb: 3 }}>
        ← Back to {module?.title}
      </Button>

      <Typography variant="h3" gutterBottom>
        {quiz.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Passing Score: {quiz.passingScore}% | {quiz.questions.length} Questions
      </Typography>

      <QuizComponent
        questions={quiz.questions}
        onComplete={handleQuizComplete}
        passingScore={quiz.passingScore}
      />
    </Box>
  )
}

