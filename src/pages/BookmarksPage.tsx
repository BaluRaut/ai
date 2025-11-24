import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box, Typography, Grid, Card, CardContent, CardActions, Button,
  Chip, IconButton, Paper, Tabs, Tab, Alert
} from '@mui/material'
import { motion } from 'framer-motion'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import DeleteIcon from '@mui/icons-material/Delete'
import SchoolIcon from '@mui/icons-material/School'
import QuizIcon from '@mui/icons-material/Quiz'
import { useAppContext } from '../context/AppContext'
import { useTranslation } from '../i18n/useTranslation'
import { allTopics } from '../data/topics'
import { quizzes } from '../data/quizzes'
import { modules } from '../data/modules'
import { Topic, Quiz } from '../types'

type BookmarkType = 'topics' | 'quizzes'

export default function BookmarksPage() {
  const navigate = useNavigate()
  const { progress, toggleBookmark } = useAppContext()
  const { language } = useTranslation()
  const [activeTab, setActiveTab] = useState<BookmarkType>('topics')

  // Get bookmarked topics
  const bookmarkedTopics = allTopics.filter((topic: Topic) => 
    progress.bookmarkedTopics?.includes(topic.id)
  )

  // Get bookmarked quizzes
  const bookmarkedQuizzes = quizzes.filter((quiz: Quiz) => 
    progress.bookmarkedQuizzes?.includes(quiz.id)
  )

  const handleRemoveBookmark = (id: string, type: BookmarkType) => {
    toggleBookmark(id, type === 'topics' ? 'topic' : 'quiz')
  }

  const isEmpty = activeTab === 'topics' 
    ? bookmarkedTopics.length === 0 
    : bookmarkedQuizzes.length === 0

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <BookmarkIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            {language === 'mr' ? 'माझे बुकमार्क' : 'My Bookmarks'}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {language === 'mr' 
              ? 'तुमचे जतन केलेले विषय आणि प्रश्नमंजुषा'
              : 'Your saved topics and quizzes for quick access'}
          </Typography>
        </Box>

        {/* Tabs */}
        <Paper elevation={1} sx={{ mb: 3 }}>
          <Tabs 
            value={activeTab} 
            onChange={(_, newValue) => setActiveTab(newValue)}
            variant="fullWidth"
          >
            <Tab 
              value="topics" 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <SchoolIcon />
                  {language === 'mr' ? 'विषय' : 'Topics'} ({bookmarkedTopics.length})
                </Box>
              }
            />
            <Tab 
              value="quizzes" 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <QuizIcon />
                  {language === 'mr' ? 'प्रश्नमंजुषा' : 'Quizzes'} ({bookmarkedQuizzes.length})
                </Box>
              }
            />
          </Tabs>
        </Paper>

        {/* Empty State */}
        {isEmpty && (
          <Paper elevation={1} sx={{ p: 6, textAlign: 'center' }}>
            <BookmarkBorderIcon sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {language === 'mr' 
                ? 'अद्याप बुकमार्क नाहीत' 
                : 'No bookmarks yet'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {language === 'mr'
                ? 'नंतर वाचण्यासाठी विषय आणि प्रश्नमंजुषा जतन करण्यासाठी बुकमार्क चिन्हावर क्लिक करा'
                : 'Click the bookmark icon on topics and quizzes to save them for later'}
            </Typography>
          </Paper>
        )}

        {/* Topics Tab Content */}
        {activeTab === 'topics' && !isEmpty && (
          <Grid container spacing={3}>
            {bookmarkedTopics.map((topic: Topic, index: number) => {
              const module = modules.find(m => m.id === topic.moduleId)
              const isCompleted = progress.completedTopics.includes(topic.id)

              return (
                <Grid item xs={12} md={6} lg={4} key={topic.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Chip 
                            label={module?.icon + ' ' + (language === 'mr' ? module?.titleMr : module?.title)}
                            size="small" 
                            color="primary"
                            variant="outlined"
                          />
                          <IconButton 
                            size="small" 
                            onClick={() => handleRemoveBookmark(topic.id, 'topics')}
                            color="error"
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Box>

                        <Typography variant="h6" gutterBottom>
                          {language === 'mr' ? topic.titleMr : topic.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }} noWrap>
                          {(language === 'mr' ? topic.contentMr : topic.content)?.substring(0, 100)}...
                        </Typography>

                        {isCompleted && (
                          <Chip 
                            label={language === 'mr' ? '✓ पूर्ण' : '✓ Completed'} 
                            size="small" 
                            color="success"
                          />
                        )}
                      </CardContent>

                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button
                          fullWidth
                          variant="contained"
                          onClick={() => navigate(`/topic/${topic.id}`)}
                          startIcon={<SchoolIcon />}
                        >
                          {language === 'mr' ? 'शिका' : 'Learn'}
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              )
            })}
          </Grid>
        )}

        {/* Quizzes Tab Content */}
        {activeTab === 'quizzes' && !isEmpty && (
          <Grid container spacing={3}>
            {bookmarkedQuizzes.map((quiz, index) => {
              const module = modules.find(m => m.id === quiz.moduleId)
              const score = progress.quizScores[quiz.id]
              const isPassed = score !== undefined && score >= quiz.passingScore

              return (
                <Grid item xs={12} md={6} lg={4} key={quiz.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Chip 
                            label={module?.icon + ' ' + (language === 'mr' ? module?.titleMr : module?.title)}
                            size="small" 
                            color="primary"
                            variant="outlined"
                          />
                          <IconButton 
                            size="small" 
                            onClick={() => handleRemoveBookmark(quiz.id, 'quizzes')}
                            color="error"
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Box>

                        <Typography variant="h6" gutterBottom>
                          {quiz.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          📝 {quiz.questions.length} {language === 'mr' ? 'प्रश्न' : 'Questions'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          🎯 {language === 'mr' ? 'उत्तीर्णता गुण' : 'Passing Score'}: {quiz.passingScore}%
                        </Typography>

                        {score !== undefined && (
                          <Alert severity={isPassed ? 'success' : 'warning'} sx={{ mt: 2 }}>
                            {language === 'mr' ? 'गुण' : 'Score'}: {score}%
                          </Alert>
                        )}
                      </CardContent>

                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button
                          fullWidth
                          variant="contained"
                          onClick={() => navigate(`/quiz/${quiz.id}`)}
                          startIcon={<QuizIcon />}
                        >
                          {score !== undefined
                            ? (language === 'mr' ? 'पुन्हा प्रयत्न' : 'Retake')
                            : (language === 'mr' ? 'प्रारंभ' : 'Start')
                          }
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              )
            })}
          </Grid>
        )}
      </Box>
    </motion.div>
  )
}
