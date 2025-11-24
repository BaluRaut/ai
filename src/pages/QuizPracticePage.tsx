import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box, Typography, Grid, Card, CardContent, CardActions, Button,
  Chip, TextField, InputAdornment, MenuItem, Select, FormControl,
  InputLabel, LinearProgress, Paper, Divider
} from '@mui/material'
import { motion } from 'framer-motion'
import SearchIcon from '@mui/icons-material/Search'
import QuizIcon from '@mui/icons-material/Quiz'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { quizzes } from '../data/quizzes'
import { modules } from '../data/modules'
import { useAppContext } from '../context/AppContext'
import { useTranslation } from '../i18n/useTranslation'

export default function QuizPracticePage() {
  const navigate = useNavigate()
  const { progress } = useAppContext()
  const { language } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterModule, setFilterModule] = useState('all')

  // Filter quizzes
  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesModule = filterModule === 'all' || quiz.moduleId === filterModule
    return matchesSearch && matchesModule
  })

  // Get quiz statistics
  const getQuizStats = (quizId: string) => {
    const score = progress.quizScores[quizId]
    const isPassed = score !== undefined && score >= (quizzes.find(q => q.id === quizId)?.passingScore || 70)
    return { score, isPassed }
  }

  const totalQuizzes = quizzes.length
  const passedQuizzes = Object.entries(progress.quizScores).filter(([id, score]) => {
    const quiz = quizzes.find(q => q.id === id)
    return quiz && score >= quiz.passingScore
  }).length

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
            <QuizIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            {language === 'mr' ? 'प्रश्नमंजुषा सराव' : 'Quiz Practice'}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {language === 'mr' 
              ? 'तुमचे ज्ञान चाचणी घ्या आणि तुमची समज सुधारा'
              : 'Test your knowledge and improve your understanding'}
          </Typography>
        </Box>

        {/* Statistics Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                {totalQuizzes}
              </Typography>
              <Typography variant="body2">
                {language === 'mr' ? 'एकूण प्रश्नमंजुषा' : 'Total Quizzes'}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', bgcolor: 'success.main', color: 'white' }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                {passedQuizzes}
              </Typography>
              <Typography variant="body2">
                {language === 'mr' ? 'उत्तीर्ण झालेले' : 'Passed'}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', bgcolor: 'warning.main', color: 'white' }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                {Math.round((passedQuizzes / totalQuizzes) * 100)}%
              </Typography>
              <Typography variant="body2">
                {language === 'mr' ? 'यशाचा दर' : 'Success Rate'}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Filters */}
        <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder={language === 'mr' ? 'प्रश्नमंजुषा शोधा...' : 'Search quizzes...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>{language === 'mr' ? 'मॉड्यूलनुसार फिल्टर करा' : 'Filter by Module'}</InputLabel>
                <Select
                  value={filterModule}
                  label={language === 'mr' ? 'मॉड्यूलनुसार फिल्टर करा' : 'Filter by Module'}
                  onChange={(e) => setFilterModule(e.target.value)}
                >
                  <MenuItem value="all">{language === 'mr' ? 'सर्व मॉड्यूल्स' : 'All Modules'}</MenuItem>
                  {modules.map((module) => (
                    <MenuItem key={module.id} value={module.id}>
                      {module.icon} {language === 'mr' ? module.titleMr : module.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        {/* Quiz Grid */}
        {filteredQuizzes.length === 0 ? (
          <Paper elevation={1} sx={{ p: 6, textAlign: 'center' }}>
            <QuizIcon sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }} />
            <Typography variant="h6" color="text.secondary">
              {language === 'mr' ? 'कोणतीही प्रश्नमंजुषा आढळली नाही' : 'No quizzes found'}
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={3}>
            {filteredQuizzes.map((quiz, index) => {
              const module = modules.find(m => m.id === quiz.moduleId)
              const { score, isPassed } = getQuizStats(quiz.id)
              const hasAttempted = score !== undefined

              return (
                <Grid item xs={12} md={6} lg={4} key={quiz.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card 
                      elevation={3}
                      sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column',
                        border: isPassed ? 2 : 0,
                        borderColor: 'success.main',
                        position: 'relative'
                      }}
                    >
                      {isPassed && (
                        <Chip
                          icon={<CheckCircleIcon />}
                          label={language === 'mr' ? 'उत्तीर्ण' : 'Passed'}
                          color="success"
                          size="small"
                          sx={{ position: 'absolute', top: 12, right: 12 }}
                        />
                      )}
                      
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <QuizIcon color="primary" />
                          <Chip 
                            label={module?.icon + ' ' + (language === 'mr' ? module?.titleMr : module?.title)} 
                            size="small" 
                            variant="outlined"
                          />
                        </Box>

                        <Typography variant="h6" gutterBottom>
                          {quiz.title}
                        </Typography>

                        <Box sx={{ mt: 2 }}>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            📝 {quiz.questions.length} {language === 'mr' ? 'प्रश्न' : 'Questions'}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            🎯 {language === 'mr' ? 'उत्तीर्णता गुण' : 'Passing Score'}: {quiz.passingScore}%
                          </Typography>
                          
                          {hasAttempted && (
                            <>
                              <Divider sx={{ my: 1.5 }} />
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <EmojiEventsIcon 
                                  sx={{ 
                                    fontSize: 20, 
                                    color: isPassed ? 'success.main' : 'warning.main' 
                                  }} 
                                />
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                  {language === 'mr' ? 'सर्वोच्च गुण' : 'Best Score'}: {score}%
                                </Typography>
                              </Box>
                              <LinearProgress 
                                variant="determinate" 
                                value={score} 
                                color={isPassed ? 'success' : 'warning'}
                                sx={{ height: 8, borderRadius: 4 }}
                              />
                            </>
                          )}
                        </Box>
                      </CardContent>

                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button
                          fullWidth
                          variant={hasAttempted ? 'outlined' : 'contained'}
                          onClick={() => navigate(`/quiz/${quiz.id}`)}
                          startIcon={<QuizIcon />}
                        >
                          {hasAttempted 
                            ? (language === 'mr' ? 'पुन्हा प्रयत्न करा' : 'Retake Quiz')
                            : (language === 'mr' ? 'प्रारंभ करा' : 'Start Quiz')
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
