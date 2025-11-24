import { useParams, useNavigate } from 'react-router-dom'
import { Typography, Box, Card, CardContent, CardActions, Button, Chip, LinearProgress, Alert } from '@mui/material'
import { motion } from 'framer-motion'
import { modules } from '../data/modules'
import { allTopics } from '../data/topics'
import { quizzes } from '../data/quizzes'
import { useAppContext } from '../context/AppContext'
import { useTranslation } from '../i18n/useTranslation'
import { useLocalizedContent } from '../hooks/useLocalizedContent'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import QuizIcon from '@mui/icons-material/Quiz'

export default function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const navigate = useNavigate()
  const { progress } = useAppContext()
  const { t } = useTranslation()
  const { getModuleTitle, getModuleDescription, getTopicTitle, currentLanguage } = useLocalizedContent()

  const module = modules.find(m => m.id === moduleId)
  const moduleTopics = allTopics.filter(t => t.moduleId === moduleId)
  const moduleQuiz = quizzes.find(q => q.moduleId === moduleId)

  if (!module) {
    return <Typography>{t('notFound')}</Typography>
  }

  const completedTopicsInModule = moduleTopics.filter(t =>
    progress.completedTopics.includes(t.id)
  ).length
  const progressPercentage = moduleTopics.length > 0 ? (completedTopicsInModule / moduleTopics.length) * 100 : 0

  const quizCompleted = moduleQuiz && progress.completedQuizzes.includes(moduleQuiz.id)
  const quizScore = moduleQuiz ? progress.quizScores[moduleQuiz.id] : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Box>
        <Button onClick={() => navigate('/')} sx={{ mb: 3 }}>
          ← {t('backTo')} {currentLanguage === 'mr' ? 'विभाग' : 'Modules'}
        </Button>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" gutterBottom>
            {module.icon} {getModuleTitle(module)}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {getModuleDescription(module)}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', my: 2 }}>
            <Chip label={module.duration} color="primary" />
            <Chip label={`${t('phase')} ${module.phase}`} />
            <Chip
              label={`${completedTopicsInModule}/${moduleTopics.length} ${t('topics')} ${t('completed')}`}
              color="success"
            />
          </Box>
          <LinearProgress
            variant="determinate"
            value={progressPercentage}
            sx={{ height: 8, borderRadius: 4 }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {Math.round(progressPercentage)}% {t('complete')}
          </Typography>
        </Box>

        {moduleQuiz && (
          <Alert
            severity={quizCompleted ? "success" : "info"}
            icon={quizCompleted ? <CheckCircleIcon /> : <QuizIcon />}
            sx={{ mb: 3 }}
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => navigate(`/quiz/${moduleQuiz.id}`)}
              >
                {quizCompleted ? t('retakeQuiz') : t('takeQuiz')}
              </Button>
            }
          >
            <Typography variant="body1">
              {quizCompleted
                ? `${currentLanguage === 'mr' ? 'प्रश्नमंजुषा' : 'Quiz'} ${t('completed')} ${currentLanguage === 'mr' ? 'गुण' : 'score'}: ${quizScore}%`
                : currentLanguage === 'mr'
                  ? 'हे विभाग पूर्ण करा आणि प्रश्नमंजुषेसह तुमचे ज्ञान तपासा!'
                  : 'Complete this module and test your knowledge with a quiz!'}
            </Typography>
          </Alert>
        )}

        <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 3 }}>
          📚 {t('topics')} {currentLanguage === 'mr' ? 'या विभागात' : 'in this Module'}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {moduleTopics.length > 0 ? (
            moduleTopics.map((topic, index) => {
              const isCompleted = progress.completedTopics.includes(topic.id)
              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card sx={{
                    bgcolor: isCompleted ? 'success.light' : 'background.paper',
                    border: isCompleted ? 2 : 0,
                    borderColor: 'success.main'
                  }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 1 }}>
                        <Chip label={`${t('day')} ${topic.day}`} size="small" color="secondary" />
                        {isCompleted && <CheckCircleIcon color="success" />}
                      </Box>
                      <Typography variant="h6" component="div" gutterBottom>
                        {getTopicTitle(topic)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {topic.content.substring(0, 150)}...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() => navigate(`/topic/${topic.id}`)}>
                        {isCompleted ? t('review') : t('learn')}
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              )
            })
          ) : (
            <Card>
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  {currentLanguage === 'mr'
                    ? 'या विभागासाठी विषय लवकरच येत आहेत! हे 365-दिवसांच्या व्यापक कार्यक्रमाचा भाग आहे.'
                    : 'Topics for this module are coming soon! This is part of the comprehensive 365-day program.'}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>
      </Box>
    </motion.div>
  )
}

