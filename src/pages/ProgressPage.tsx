import { Typography, Box, Grid, Paper, Card, CardContent, LinearProgress, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { useAppContext } from '../context/AppContext'
import { modules } from '../data/modules'
import { quizzes } from '../data/quizzes'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

export default function ProgressPage() {
  const { progress, getProgressPercentage } = useAppContext()
  const progressPercentage = getProgressPercentage()

  const completedModules = modules.filter(m => {
    const moduleQuiz = quizzes.find(q => q.moduleId === m.id)
    return moduleQuiz && progress.completedQuizzes.includes(moduleQuiz.id)
  })

  const quizData = quizzes
    .filter(q => progress.completedQuizzes.includes(q.id))
    .map(q => ({
      name: q.title.replace(' Quiz', ''),
      score: progress.quizScores[q.id] || 0
    }))

  const pieData = [
    { name: 'Completed', value: progress.completedTopics.length },
    { name: 'Remaining', value: 400 - progress.completedTopics.length }
  ]

  const COLORS = ['#4caf50', '#e0e0e0']

  const getDaysActive = () => {
    const start = new Date(progress.startDate)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - start.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Typography variant="h3" gutterBottom>
          📊 Your Learning Progress
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Track your journey to cloud mastery!
        </Typography>
      </motion.div>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                  <Typography variant="h6">Topics Completed</Typography>
                </Box>
                <Typography variant="h3" color="success.main">
                  {progress.completedTopics.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  out of 400 topics
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={3}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmojiEventsIcon color="warning" sx={{ mr: 1 }} />
                  <Typography variant="h6">Quizzes Passed</Typography>
                </Box>
                <Typography variant="h3" color="warning.main">
                  {progress.completedQuizzes.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  out of {quizzes.length} quizzes
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={3}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <TrendingUpIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6">Overall Progress</Typography>
                </Box>
                <Typography variant="h3" color="primary.main">
                  {progressPercentage}%
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={progressPercentage}
                  sx={{ mt: 2, height: 8, borderRadius: 4 }}
                />
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={3}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6">Days Active</Typography>
                </Box>
                <Typography variant="h3" color="info.main">
                  {getDaysActive()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {365 - getDaysActive()} days remaining
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Learning Progress Overview
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quiz Scores
            </Typography>
            {quizData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={quizData}>
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#1976d2" name="Score %" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <Typography variant="body2" color="text.secondary" sx={{ py: 10, textAlign: 'center' }}>
                No quizzes completed yet. Start learning to unlock quizzes!
              </Typography>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Completed Modules
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
              {completedModules.length > 0 ? (
                completedModules.map(module => (
                  <Chip
                    key={module.id}
                    label={`${module.icon} ${module.title}`}
                    color="success"
                    icon={<CheckCircleIcon />}
                  />
                ))
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Complete module quizzes to see them here!
                </Typography>
              )}
            </Box>
          </Paper>
        </Grid>

        {progressPercentage >= 25 && (
          <Grid item xs={12}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <Paper elevation={3} sx={{ p: 3, bgcolor: 'success.light', textAlign: 'center' }}>
                <EmojiEventsIcon sx={{ fontSize: 60, color: 'success.dark' }} />
                <Typography variant="h5" gutterBottom>
                  🎉 Milestone Achieved!
                </Typography>
                <Typography variant="body1">
                  You've completed {progressPercentage}% of the course! Keep going! 🚀
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

