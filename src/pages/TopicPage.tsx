import { useParams, useNavigate } from 'react-router-dom'
import { Typography, Box, Button, Paper, List, ListItem, ListItemText, Chip, Alert, Grid, IconButton, Tooltip } from '@mui/material'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { allTopics } from '../data/topics'
import { modules } from '../data/modules'
import { quizzes } from '../data/quizzes'
import { useAppContext } from '../context/AppContext'
import { useTranslation } from '../i18n/useTranslation'
import { useLocalizedContent } from '../hooks/useLocalizedContent'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CodeIcon from '@mui/icons-material/Code'
import QuizIcon from '@mui/icons-material/Quiz'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import WorkIcon from '@mui/icons-material/Work'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import AnimatedDiagram from '../components/AnimatedDiagram'

export default function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>()
  const navigate = useNavigate()
  const { progress, markTopicComplete, toggleBookmark } = useAppContext()
  const { t } = useTranslation()
  const { getTopicTitle, getTopicContent, getTopicKeyPoints, getTopicExamples, getTopicExercise, getModuleTitle, currentLanguage } = useLocalizedContent()

  const topic = allTopics.find(t => t.id === topicId)

  if (!topic) {
    return <Typography>{t('notFound')}</Typography>
  }

  const module = modules.find(m => m.id === topic.moduleId)
  const currentIndex = allTopics.findIndex(t => t.id === topicId)
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null
  const isCompleted = progress.completedTopics.includes(topic.id)
  const isBookmarked = progress.bookmarkedTopics?.includes(topic.id) || false
  
  // Find quizzes
  const topicQuiz = quizzes.find(q => q.topicId === topic.id)
  const moduleQuiz = quizzes.find(q => q.moduleId === topic.moduleId && !q.topicId)
  const activeQuiz = topicQuiz || moduleQuiz

  const handleMarkComplete = () => {
    markTopicComplete(topic.id)
  }

  const handleToggleBookmark = () => {
    toggleBookmark(topic.id, 'topic')
  }

  const topicKeyPoints = getTopicKeyPoints(topic)
  const topicExamples = getTopicExamples(topic)
  const practicalExercise = getTopicExercise(topic)

  const MarkdownComponents = {
    h1: ({...props}) => <Typography variant="h3" gutterBottom {...props} />,
    h2: ({...props}) => <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: 'primary.main' }} {...props} />,
    h3: ({...props}) => <Typography variant="h5" gutterBottom sx={{ mt: 3, mb: 1 }} {...props} />,
    p: ({...props}) => <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }} {...props} />,
    li: ({...props}) => <li style={{ fontSize: '1.1rem', marginBottom: '8px', marginLeft: '20px' }} {...props} />,
    table: ({...props}) => (
      <Box sx={{ overflowX: 'auto', my: 2 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }} {...props} />
      </Box>
    ),
    th: ({...props}) => <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#f5f5f5', textAlign: 'left', fontWeight: 'bold' }} {...props} />,
    td: ({...props}) => <td style={{ border: '1px solid #ddd', padding: '12px' }} {...props} />,
    a: ({...props}) => <a style={{ color: '#1976d2', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" {...props} />,
    blockquote: ({...props}) => <blockquote style={{ borderLeft: '4px solid #ccc', margin: '1.5em 0', padding: '0.5em 10px', color: '#666', backgroundColor: '#f9f9f9' }} {...props} />,
    code: ({className, children, ...props}: any) => {
      const match = /language-(\w+)/.exec(className || '')
      const isInline = !match && !String(children).includes('\n')
      return (
        <code 
          style={{ 
            backgroundColor: isInline ? '#f5f5f5' : '#2d2d2d', 
            color: isInline ? '#d32f2f' : '#fff',
            padding: isInline ? '2px 6px' : '16px', 
            borderRadius: '4px', 
            fontFamily: 'monospace',
            display: isInline ? 'inline' : 'block',
            overflowX: 'auto',
            fontSize: '0.9em'
          }} 
          {...props}
        >
          {children}
        </code>
      )
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Button onClick={() => navigate(`/module/${topic.moduleId}`)} sx={{ mb: 3 }}>
          ← {t('backTo')} {module && getModuleTitle(module)}
        </Button>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Chip label={`${t('day')} ${topic.day}`} color="primary" sx={{ mr: 1 }} />
              <Chip label={module && getModuleTitle(module)} variant="outlined" />
              {isCompleted && <Chip label={t('completed')} color="success" icon={<CheckCircleIcon />} sx={{ ml: 1 }} />}
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Tooltip title={isBookmarked ? (currentLanguage === 'mr' ? 'बुकमार्क काढा' : 'Remove Bookmark') : (currentLanguage === 'mr' ? 'बुकमार्क करा' : 'Bookmark')}>
                <IconButton onClick={handleToggleBookmark} color={isBookmarked ? 'primary' : 'default'}>
                  {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </IconButton>
              </Tooltip>
              <Button
                variant={isCompleted ? 'outlined' : 'contained'}
                color={isCompleted ? 'success' : 'primary'}
                onClick={handleMarkComplete}
                startIcon={<CheckCircleIcon />}
              >
                {isCompleted ? `${t('completed')} ✓` : t('markComplete')}
              </Button>
            </Box>
          </Box>

          <Typography variant="h3" gutterBottom>
            {getTopicTitle(topic)}
          </Typography>

          {topic.imageUrl && (
            <Box sx={{ mb: 3, borderRadius: 2, overflow: 'hidden' }}>
              <img 
                src={topic.imageUrl} 
                alt={getTopicTitle(topic)} 
                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} 
              />
            </Box>
          )}

          <Box sx={{ mb: 4 }}>
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={MarkdownComponents}
            >
              {getTopicContent(topic)}
            </ReactMarkdown>
          </Box>

          {topic.diagram && (
            <AnimatedDiagram 
              code={topic.diagram.code} 
              title={topic.diagram.title} 
            />
          )}

          {/* Layered Learning Section */}
          <Grid container spacing={2} sx={{ mt: 2, mb: 4 }}>
            {topic.funFact && (
              <Grid item xs={12} md={4}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 2, 
                    height: '100%', 
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(33, 150, 243, 0.1)' : '#e3f2fd', 
                    borderLeft: '4px solid #2196f3' 
                  }}
                >
                  <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 'bold', color: (theme) => theme.palette.mode === 'dark' ? '#90caf9' : '#1565c0', mb: 1 }}>
                    <LightbulbIcon fontSize="small" /> {currentLanguage === 'mr' ? 'तुम्हाला माहित आहे का?' : 'Did You Know?'}
                  </Typography>
                  <Box sx={{ color: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : 'text.secondary', '& p': { fontSize: '0.875rem', margin: 0 } }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {topic.funFact}
                    </ReactMarkdown>
                  </Box>
                </Paper>
              </Grid>
            )}
            
            {topic.careerInsight && (
              <Grid item xs={12} md={4}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 2, 
                    height: '100%', 
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(156, 39, 176, 0.1)' : '#f3e5f5', 
                    borderLeft: '4px solid #9c27b0' 
                  }}
                >
                  <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 'bold', color: (theme) => theme.palette.mode === 'dark' ? '#ce93d8' : '#7b1fa2', mb: 1 }}>
                    <WorkIcon fontSize="small" /> {currentLanguage === 'mr' ? 'करिअर इनसाइट' : 'Career Insight'}
                  </Typography>
                  <Box sx={{ color: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : 'text.secondary', '& p': { fontSize: '0.875rem', margin: 0 } }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {topic.careerInsight}
                    </ReactMarkdown>
                  </Box>
                </Paper>
              </Grid>
            )}

            {topic.proTip && (
              <Grid item xs={12} md={4}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 2, 
                    height: '100%', 
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 152, 0, 0.1)' : '#fff3e0', 
                    borderLeft: '4px solid #ff9800' 
                  }}
                >
                  <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 'bold', color: (theme) => theme.palette.mode === 'dark' ? '#ffcc80' : '#e65100', mb: 1 }}>
                    <VerifiedUserIcon fontSize="small" /> {currentLanguage === 'mr' ? 'प्रो टीप' : 'Pro Tip'}
                  </Typography>
                  <Box sx={{ color: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : 'text.secondary', '& p': { fontSize: '0.875rem', margin: 0 } }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {topic.proTip}
                    </ReactMarkdown>
                  </Box>
                </Paper>
              </Grid>
            )}
          </Grid>

          {topicKeyPoints.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon color="success" /> {t('keyPoints')}
                </Typography>
                <Paper variant="outlined" sx={{ p: 2, bgcolor: 'background.default' }}>
                  <List>
                    {topicKeyPoints.map((point, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={point} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Box>
            </motion.div>
          )}

          {topicExamples.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CodeIcon color="primary" /> {t('examples')}
                </Typography>
                <Paper variant="outlined" sx={{ p: 2, bgcolor: 'background.default' }}>
                  <List>
                    {topicExamples.map((example, index) => (
                      <ListItem key={index}>
                        <ListItemText
                          primary={example}
                          sx={{ fontFamily: 'monospace' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Box>
            </motion.div>
          )}

          {practicalExercise && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Alert severity="info" sx={{ mt: 4, '& .MuiAlert-message': { width: '100%' } }}>
                <Typography variant="h6" gutterBottom>
                  🛠️ {t('practicalExercise')}
                </Typography>
                <Box sx={{ '& p': { mb: 1 }, '& ul, & ol': { mt: 1, mb: 2 } }}>
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      ...MarkdownComponents,
                      table: ({...props}) => (
                        <Box sx={{ overflowX: 'auto', my: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }} {...props} />
                        </Box>
                      ),
                      code: ({className, children, ...props}: any) => (
                        <code 
                          style={{ 
                            backgroundColor: 'rgba(0,0,0,0.05)', 
                            padding: '2px 4px', 
                            borderRadius: '4px', 
                            fontFamily: 'monospace',
                            fontWeight: 'bold'
                          }} 
                          {...props}
                        >
                          {children}
                        </code>
                      )
                    }}
                  >
                    {practicalExercise}
                  </ReactMarkdown>
                </Box>
              </Alert>
            </motion.div>
          )}
        </Paper>

        {activeQuiz && (
          <Paper elevation={3} sx={{ p: 3, mb: 4, bgcolor: 'warning.light' }}>
            <Typography variant="h6" gutterBottom>
              📝 {t('readyToTest')}
            </Typography>
            <Typography variant="body1" paragraph>
              {topicQuiz 
                ? (currentLanguage === 'mr' ? 'या विषयावरील प्रश्नमंजुषा सोडवा!' : 'Take a quick quiz on this topic!')
                : (currentLanguage === 'mr' 
                    ? `${module && getModuleTitle(module)} प्रश्नमंजुषा सोडवून तुमची समज तपासा!` 
                    : `Take the ${module && getModuleTitle(module)} quiz to assess your understanding!`)
              }
            </Typography>
            <Button
              variant="contained"
              startIcon={<QuizIcon />}
              onClick={() => navigate(`/quiz/${activeQuiz.id}`)}
            >
              {t('takeQuiz')}
            </Button>
          </Paper>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            variant="outlined"
            disabled={!prevTopic}
            onClick={() => prevTopic && navigate(`/topic/${prevTopic.id}`)}
          >
            ← {t('previousTopic')}
          </Button>
          <Button
            variant="contained"
            disabled={!nextTopic}
            onClick={() => nextTopic && navigate(`/topic/${nextTopic.id}`)}
          >
            {t('nextTopic')} →
          </Button>
        </Box>
      </Box>
    </motion.div>
  )
}

