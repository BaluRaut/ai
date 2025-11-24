import { useEffect } from 'react'
import {
  Box, Typography, Grid, Card, CardContent, Paper, LinearProgress,
  Chip, Divider, Alert
} from '@mui/material'
import { motion } from 'framer-motion'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import LockIcon from '@mui/icons-material/Lock'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import SchoolIcon from '@mui/icons-material/School'
import QuizIcon from '@mui/icons-material/Quiz'
import { useAppContext } from '../context/AppContext'
import { useTranslation } from '../i18n/useTranslation'

interface Achievement {
  id: string
  icon: string
  category: 'learning' | 'quiz' | 'streak' | 'milestone'
  requirement: number
  color: string
}

const achievements: Achievement[] = [
  // Learning Achievements
  {
    id: 'first-topic',
    icon: '🎯',
    category: 'learning',
    requirement: 1,
    color: '#4CAF50'
  },
  {
    id: 'five-topics',
    icon: '🌟',
    category: 'learning',
    requirement: 5,
    color: '#2196F3'
  },
  {
    id: 'ten-topics',
    icon: '📚',
    category: 'learning',
    requirement: 10,
    color: '#9C27B0'
  },
  {
    id: 'module-master',
    icon: '👑',
    category: 'learning',
    requirement: 1,
    color: '#FF9800'
  },
  
  // Quiz Achievements
  {
    id: 'first-quiz',
    icon: '📝',
    category: 'quiz',
    requirement: 1,
    color: '#00BCD4'
  },
  {
    id: 'perfect-score',
    icon: '💯',
    category: 'quiz',
    requirement: 1,
    color: '#FF5722'
  },
  {
    id: 'quiz-champion',
    icon: '🏆',
    category: 'quiz',
    requirement: 10,
    color: '#FFD700'
  },
  
  // Streak Achievements
  {
    id: 'week-streak',
    icon: '🔥',
    category: 'streak',
    requirement: 7,
    color: '#F44336'
  },
  {
    id: 'month-streak',
    icon: '⚡',
    category: 'streak',
    requirement: 30,
    color: '#FF6F00'
  },
  
  // Milestone Achievements
  {
    id: 'halfway',
    icon: '🎖️',
    category: 'milestone',
    requirement: 50,
    color: '#3F51B5'
  },
  {
    id: 'completion',
    icon: '🎓',
    category: 'milestone',
    requirement: 100,
    color: '#4CAF50'
  },
  {
    id: 'cloud-expert',
    icon: '☁️',
    category: 'milestone',
    requirement: 1,
    color: '#00ACC1'
  }
]

export default function AchievementsPage() {
  const { progress, unlockAchievement } = useAppContext()
  const { language, t } = useTranslation()

  const getAchievementTitle = (achievementId: string) => {
    const key = `achievements.${achievementId.replace(/-/g, '')}.title` as any
    return t(key)
  }

  const getAchievementDescription = (achievementId: string) => {
    const key = `achievements.${achievementId.replace(/-/g, '')}.description` as any
    return t(key)
  }

  const getCategoryName = (categoryId: string) => {
    const key = `achievements.category.${categoryId}` as any
    return t(key)
  }

  // Check and unlock achievements
  useEffect(() => {
    const completedTopics = progress.completedTopics.length
    const passedQuizzes = Object.entries(progress.quizScores).filter(([, score]) => score >= 70).length
    const perfectScores = Object.entries(progress.quizScores).filter(([, score]) => score === 100).length
    const progressPercentage = Math.round((completedTopics / 400) * 100)

    // Learning achievements
    if (completedTopics >= 1) unlockAchievement('first-topic')
    if (completedTopics >= 5) unlockAchievement('five-topics')
    if (completedTopics >= 10) unlockAchievement('ten-topics')

    // Quiz achievements
    if (passedQuizzes >= 1) unlockAchievement('first-quiz')
    if (perfectScores >= 1) unlockAchievement('perfect-score')
    if (passedQuizzes >= 10) unlockAchievement('quiz-champion')

    // Milestone achievements
    if (progressPercentage >= 50) unlockAchievement('halfway')
    if (progressPercentage >= 100) unlockAchievement('completion')
  }, [progress, unlockAchievement])

  const unlockedAchievements = achievements.filter(a => 
    progress.achievements?.includes(a.id)
  )
  
  const lockedAchievements = achievements.filter(a => 
    !progress.achievements?.includes(a.id)
  )

  const categories = [
    { id: 'learning', icon: <SchoolIcon /> },
    { id: 'quiz', icon: <QuizIcon /> },
    { id: 'streak', icon: <LocalFireDepartmentIcon /> },
    { id: 'milestone', icon: <EmojiEventsIcon /> }
  ]

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
            <EmojiEventsIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            {language === 'mr' ? 'उपलब्धी' : 'Achievements'}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {language === 'mr' 
              ? 'तुमच्या शिक्षण प्रवासातील माईलस्टोन्स आणि बक्षिसे'
              : 'Track your milestones and rewards on your learning journey'}
          </Typography>
        </Box>

        {/* Progress Overview */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', bgcolor: 'success.main', color: 'white' }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                {unlockedAchievements.length}
              </Typography>
              <Typography variant="body2">
                {language === 'mr' ? 'अनलॉक केलेले' : 'Unlocked'}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', bgcolor: 'warning.main', color: 'white' }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                {lockedAchievements.length}
              </Typography>
              <Typography variant="body2">
                {language === 'mr' ? 'लॉक केलेले' : 'Locked'}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                {Math.round((unlockedAchievements.length / achievements.length) * 100)}%
              </Typography>
              <Typography variant="body2">
                {language === 'mr' ? 'पूर्णता' : 'Completion'}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <LinearProgress 
          variant="determinate" 
          value={(unlockedAchievements.length / achievements.length) * 100}
          sx={{ height: 10, borderRadius: 5, mb: 4 }}
        />

        {/* Categories */}
        {categories.map((category) => {
          const categoryAchievements = achievements.filter(a => a.category === category.id)
          const unlockedCount = categoryAchievements.filter(a => progress.achievements?.includes(a.id)).length

          return (
            <Box key={category.id} sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                {category.icon}
                <Typography variant="h5">
                  {getCategoryName(category.id)}
                </Typography>
                <Chip 
                  label={`${unlockedCount}/${categoryAchievements.length}`} 
                  size="small" 
                  color="primary"
                />
              </Box>

              <Grid container spacing={3}>
                {categoryAchievements.map((achievement, index) => {
                  const isUnlocked = progress.achievements?.includes(achievement.id)

                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={achievement.id}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card
                          elevation={3}
                          sx={{
                            height: '100%',
                            border: isUnlocked ? 2 : 0,
                            borderColor: achievement.color,
                            opacity: isUnlocked ? 1 : 0.6,
                            position: 'relative',
                            overflow: 'visible'
                          }}
                        >
                          {isUnlocked && (
                            <CheckCircleIcon
                              sx={{
                                position: 'absolute',
                                top: -10,
                                right: -10,
                                fontSize: 30,
                                color: 'success.main',
                                bgcolor: 'background.paper',
                                borderRadius: '50%'
                              }}
                            />
                          )}

                          <CardContent sx={{ textAlign: 'center' }}>
                            <Box
                              sx={{
                                fontSize: 64,
                                mb: 2,
                                filter: isUnlocked ? 'none' : 'grayscale(100%)',
                                opacity: isUnlocked ? 1 : 0.4
                              }}
                            >
                              {achievement.icon}
                            </Box>

                            <Typography variant="h6" gutterBottom>
                              {getAchievementTitle(achievement.id)}
                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                              {getAchievementDescription(achievement.id)}
                            </Typography>

                            {!isUnlocked && (
                              <Chip
                                icon={<LockIcon />}
                                label={language === 'mr' ? 'लॉक केलेले' : 'Locked'}
                                size="small"
                                sx={{ bgcolor: 'grey.300' }}
                              />
                            )}

                            {isUnlocked && (
                              <Chip
                                icon={<CheckCircleIcon />}
                                label={language === 'mr' ? 'अनलॉक केलेले' : 'Unlocked'}
                                size="small"
                                color="success"
                              />
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  )
                })}
              </Grid>

              <Divider sx={{ mt: 4 }} />
            </Box>
          )
        })}

        {/* Motivational Message */}
        {unlockedAchievements.length < achievements.length && (
          <Alert severity="info" icon={<EmojiEventsIcon />} sx={{ mt: 4 }}>
            <Typography variant="body2">
              {language === 'mr'
                ? `${lockedAchievements.length} अधिक उपलब्धी अनलॉक करण्यासाठी शिकणे सुरू ठेवा!`
                : `Keep learning to unlock ${lockedAchievements.length} more achievements!`}
            </Typography>
          </Alert>
        )}

        {unlockedAchievements.length === achievements.length && (
          <Alert severity="success" icon={<EmojiEventsIcon />} sx={{ mt: 4 }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              {language === 'mr'
                ? '🎉 अभिनंदन! तुम्ही सर्व उपलब्धी अनलॉक केल्या आहेत!'
                : '🎉 Congratulations! You have unlocked all achievements!'}
            </Typography>
          </Alert>
        )}
      </Box>
    </motion.div>
  )
}
