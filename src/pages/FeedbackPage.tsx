import { useState } from 'react'
import {
  Box, Typography, Paper, TextField, Button, Rating, Alert, Snackbar,
  Grid, Card, CardContent, Chip
} from '@mui/material'
import { motion } from 'framer-motion'
import FeedbackIcon from '@mui/icons-material/Feedback'
import SendIcon from '@mui/icons-material/Send'
import BugReportIcon from '@mui/icons-material/BugReport'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { useTranslation } from '../i18n/useTranslation'

type FeedbackType = 'bug' | 'suggestion' | 'praise' | 'other'

export default function FeedbackPage() {
  const { language, t } = useTranslation()
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('suggestion')
  const [rating, setRating] = useState<number>(5)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // In a real app, this would send to a backend
    console.log({
      type: feedbackType,
      rating,
      subject,
      message,
      email,
      timestamp: new Date().toISOString()
    })

    // Show success message
    setShowSuccess(true)

    // Reset form
    setSubject('')
    setMessage('')
    setEmail('')
    setRating(5)
  }

  const feedbackTypes = [
    {
      id: 'bug' as FeedbackType,
      icon: <BugReportIcon />,
      color: '#F44336'
    },
    {
      id: 'suggestion' as FeedbackType,
      icon: <LightbulbIcon />,
      color: '#FF9800'
    },
    {
      id: 'praise' as FeedbackType,
      icon: <ThumbUpIcon />,
      color: '#4CAF50'
    },
    {
      id: 'other' as FeedbackType,
      icon: <FeedbackIcon />,
      color: '#2196F3'
    }
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
            <FeedbackIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            {language === 'mr' ? 'अभिप्राय' : 'Feedback'}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {language === 'mr'
              ? 'तुमचे विचार आम्हाला सांगा आणि या प्लॅटफॉर्मला सुधारण्यात मदत करा'
              : 'Share your thoughts and help us improve this platform'}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Feedback Type Cards */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              {language === 'mr' ? 'अभिप्राय प्रकार निवडा' : 'Select Feedback Type'}
            </Typography>
            <Grid container spacing={2}>
              {feedbackTypes.map((type) => (
                <Grid item xs={12} sm={6} md={3} key={type.id}>
                  <Card
                    onClick={() => setFeedbackType(type.id)}
                    sx={{
                      cursor: 'pointer',
                      border: 2,
                      borderColor: feedbackType === type.id ? type.color : 'transparent',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4
                      }
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Box sx={{ fontSize: 40, color: type.color, mb: 1 }}>
                        {type.icon}
                      </Box>
                      <Typography variant="subtitle1">
                        {t(`feedbackType.${type.id}` as any)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Feedback Form */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                {/* Rating */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    {language === 'mr' ? 'तुम्ही हे प्लॅटफॉर्म कसे रेट कराल?' : 'How would you rate this platform?'}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Rating
                      value={rating}
                      onChange={(_, newValue) => setRating(newValue || 5)}
                      size="large"
                    />
                    <Chip label={`${rating}/5`} color="primary" />
                  </Box>
                </Box>

                {/* Subject */}
                <TextField
                  fullWidth
                  label={language === 'mr' ? 'विषय' : 'Subject'}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  sx={{ mb: 3 }}
                  placeholder={
                    language === 'mr'
                      ? 'तुमच्या अभिप्रायाचा संक्षिप्त सारांश'
                      : 'Brief summary of your feedback'
                  }
                />

                {/* Message */}
                <TextField
                  fullWidth
                  label={language === 'mr' ? 'संदेश' : 'Message'}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  multiline
                  rows={6}
                  sx={{ mb: 3 }}
                  placeholder={
                    language === 'mr'
                      ? 'कृपया तुमचा अभिप्राय येथे तपशीलवार लिहा...'
                      : 'Please provide detailed feedback here...'
                  }
                />

                {/* Email (optional) */}
                <TextField
                  fullWidth
                  label={language === 'mr' ? 'ईमेल (पर्यायी)' : 'Email (Optional)'}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ mb: 3 }}
                  placeholder={
                    language === 'mr'
                      ? 'आम्ही तुमच्याशी संपर्क साधू शकतो'
                      : 'In case we need to follow up'
                  }
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  endIcon={<SendIcon />}
                  disabled={!subject || !message}
                >
                  {language === 'mr' ? 'अभिप्राय सबमिट करा' : 'Submit Feedback'}
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Help Text */}
          <Grid item xs={12}>
            <Alert severity="info">
              <Typography variant="body2">
                {language === 'mr'
                  ? '💡 टीप: तुमचा अभिप्राय आम्हाला या प्लॅटफॉर्मला अधिक चांगले बनविण्यात मदत करतो. आम्ही प्रत्येक सबमिशन वाचतो!'
                  : '💡 Tip: Your feedback helps us make this platform better. We read every submission!'}
              </Typography>
            </Alert>
          </Grid>

          {/* Feature Showcase */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              {language === 'mr' ? 'तुम्ही मदत कशी करू शकता' : 'How You Can Help'}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <BugReportIcon sx={{ fontSize: 40, color: 'error.main', mb: 1 }} />
                  <Typography variant="subtitle2" gutterBottom>
                    {language === 'mr' ? 'बग रिपोर्ट करा' : 'Report Bugs'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {language === 'mr'
                      ? 'तांत्रिक समस्या किंवा त्रुटी आढळल्यास'
                      : 'Found technical issues or errors'}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <LightbulbIcon sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
                  <Typography variant="subtitle2" gutterBottom>
                    {language === 'mr' ? 'वैशिष्ट्ये सुचवा' : 'Suggest Features'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {language === 'mr'
                      ? 'नवीन वैशिष्ट्ये किंवा सुधारणा सुचवा'
                      : 'Share ideas for new features or improvements'}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <ThumbUpIcon sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
                  <Typography variant="subtitle2" gutterBottom>
                    {language === 'mr' ? 'प्रशंसा सामायिक करा' : 'Share Praise'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {language === 'mr'
                      ? 'तुम्हाला काय आवडते ते आम्हाला सांगा'
                      : 'Let us know what you love'}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Success Snackbar */}
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="success" onClose={() => setShowSuccess(false)} sx={{ width: '100%' }}>
            {language === 'mr'
              ? '✅ तुमचा अभिप्राय सबमिट केला गेला! धन्यवाद!'
              : '✅ Feedback submitted successfully! Thank you!'}
          </Alert>
        </Snackbar>
      </Box>
    </motion.div>
  )
}
