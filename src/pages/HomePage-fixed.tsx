import { Typography, Box, Card, CardContent, CardActions, Button, Chip, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { modules } from '../data/modules'
import { useTranslation } from '../i18n/useTranslation'
import { useLocalizedContent } from '../hooks/useLocalizedContent'
import { useAppContext } from '../context/AppContext'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function HomePage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { getModuleTitle, getModuleDescription, currentLanguage } = useLocalizedContent()
  const { progress } = useAppContext()

  const phases = [
    {
      number: 1,
      name: currentLanguage === 'mr' ? 'पाया' : 'Foundation',
      description: currentLanguage === 'mr' ? 'क्लाउड मूलभूत, नेटवर्किंग, प्रदाते' : 'Cloud basics, networking, providers',
      days: '1-60',
      color: '#e3f2fd'
    },
    {
      number: 2,
      name: currentLanguage === 'mr' ? 'मुख्य सेवा' : 'Core Services',
      description: currentLanguage === 'mr' ? 'कंप्युट, स्टोरेज, डेटाबेस' : 'Compute, storage, databases',
      days: '61-150',
      color: '#f3e5f5'
    },
    {
      number: 3,
      name: 'DevOps',
      description: currentLanguage === 'mr' ? 'Git, CI/CD, कोड म्हणून पायाभूत सुविधा' : 'Git, CI/CD, Infrastructure as Code',
      days: '151-240',
      color: '#fff3e0'
    },
    {
      number: 4,
      name: currentLanguage === 'mr' ? 'वेब सेवा' : 'Web Services',
      description: currentLanguage === 'mr' ? 'डोमेन, DNS, ईमेल, SSL' : 'Domains, DNS, Email, SSL',
      days: '241-270',
      color: '#e8f5e9'
    },
    {
      number: 5,
      name: currentLanguage === 'mr' ? 'सुरक्षा आणि ऑपरेशन्स' : 'Security & Ops',
      description: currentLanguage === 'mr' ? 'सुरक्षा, देखरेख, लॉगिंग' : 'Security, monitoring, logging',
      days: '271-330',
      color: '#fce4ec'
    },
    {
      number: 6,
      name: currentLanguage === 'mr' ? 'प्रगत आणि प्रकल्प' : 'Advanced & Projects',
      description: currentLanguage === 'mr' ? 'प्रगत विषय, कॅपस्टोन प्रकल्प' : 'Advanced topics, capstone projects',
      days: '327-365',
      color: '#e0f2f1'
    }
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
        textAlign: 'center',
        mb: 8,
        py: 6,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 4,
        color: 'white'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            {t('heroTitle')} ☁️
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', opacity: 0.95, mb: 4 }}>
            {t('heroSubtitle')}
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/learning-path')}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': { bgcolor: 'grey.100' }
              }}
            >
              {t('startLearning')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/progress')}
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              {t('viewProgress')}
            </Button>
          </Box>
          {progress.completedTopics.length > 0 && (
            <Chip
              label={`${progress.completedTopics.length} ${t('topicsCompleted')}`}
              color="success"
              sx={{ mt: 3, fontWeight: 'bold' }}
            />
          )}
        </motion.div>
      </Box>

      {/* Learning Phases */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          {currentLanguage === 'mr' ? '📅 शिकण्याचे टप्पे' : '📅 Learning Phases'}
        </Typography>
        <Grid container spacing={3}>
          {phases.map((phase, index) => (
            <Grid item xs={12} md={6} key={phase.number}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card sx={{
                  height: '100%',
                  bgcolor: phase.color,
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.02)' }
                }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Chip
                        label={`${t('phase')} ${phase.number}`}
                        color="primary"
                        sx={{ mr: 2 }}
                      />
                      <Typography variant="h6">{phase.name}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {phase.description}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                      {currentLanguage === 'mr' ? 'दिवस' : 'Days'} {phase.days}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* All Modules */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          {currentLanguage === 'mr' ? '📚 सर्व शिक्षण विभाग' : '📚 All Learning Modules'}
        </Typography>
        <Grid container spacing={3}>
          {modules.map((module, index) => (
            <Grid item xs={12} sm={6} md={4} key={module.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: 2,
                  borderColor: 'transparent',
                  '&:hover': { borderColor: 'primary.main' }
                }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                      {module.icon}
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                      {getModuleTitle(module)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {getModuleDescription(module)}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label={module.duration} size="small" />
                      <Chip label={`${t('phase')} ${module.phase}`} size="small" color="primary" variant="outlined" />
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => navigate(`/module/${module.id}`)}>
                      {currentLanguage === 'mr' ? 'एक्सप्लोर करा' : 'Explore'}
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{
        textAlign: 'center',
        py: 6,
        bgcolor: 'primary.main',
        color: 'white',
        borderRadius: 4,
        mt: 6
      }}>
        <Typography variant="h4" gutterBottom>
          {currentLanguage === 'mr'
            ? '🚀 आज तुमचा प्रवास सुरू करा!'
            : '🚀 Start Your Journey Today!'}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {currentLanguage === 'mr'
            ? '365 दिवसांत नवशिक्यापासून क्लाउड व्यावसायिक बना'
            : 'Transform from beginner to cloud professional in 365 days'}
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/learning-path')}
          sx={{
            bgcolor: 'white',
            color: 'primary.main',
            '&:hover': { bgcolor: 'grey.100' }
          }}
        >
          {t('startLearning')}
        </Button>
      </Box>
    </Box>
  )
}

