import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  Paper,
  Button,
  useTheme,
  alpha,
  Divider,
  Link,
  Avatar,
  ListItemAvatar
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  PlayCircle as VideoIcon,
  School as CourseIcon,
  MenuBook as DocIcon,
  Code as CodeIcon,
  YouTube as YouTubeIcon,
  OpenInNew as ExternalLinkIcon,
  Timer as TimerIcon,
  EmojiEvents as CertificateIcon,
  TrendingUp as LevelIcon,
  Laptop as PlatformIcon
} from '@mui/icons-material';
import { videoResources, learningPaths, practicePlatforms } from '../../data/videoResources';

const topicLabels = {
  pythonBasics: '🐍 Python Fundamentals',
  dataScience: '📊 Data Science',
  dataVisualization: '📈 Data Visualization',
  machineLearning: '🤖 Machine Learning',
  deepLearning: '🧠 Deep Learning',
  nlp: '💬 Natural Language Processing',
  computerVision: '👁️ Computer Vision',
  reinforcementLearning: '🎮 Reinforcement Learning',
  mlops: '🚀 MLOps & Deployment',
  aiEthics: '⚖️ AI Ethics',
  generativeAI: '✨ Generative AI & LLMs'
};

const levelColors = {
  Beginner: 'success',
  Intermediate: 'warning',
  Advanced: 'error',
  'Beginner to Advanced': 'info'
};

function Resources() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedTopic, setSelectedTopic] = useState('pythonBasics');
  const [activeTab, setActiveTab] = useState(0);

  const currentResources = videoResources[selectedTopic];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          📚 Learning Resources
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
          Curated video tutorials, courses, and documentation to accelerate your AI/ML learning journey.
        </Typography>
      </Box>

      {/* Topic Selection */}
      <Paper sx={{ mb: 4, p: 2 }}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Select Topic:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {Object.keys(videoResources).map((topic) => (
            <Chip
              key={topic}
              label={topicLabels[topic]}
              onClick={() => setSelectedTopic(topic)}
              color={selectedTopic === topic ? 'primary' : 'default'}
              variant={selectedTopic === topic ? 'filled' : 'outlined'}
              sx={{ cursor: 'pointer' }}
            />
          ))}
        </Box>
      </Paper>

      {/* Resource Type Tabs */}
      <Tabs 
        value={activeTab} 
        onChange={(e, v) => setActiveTab(v)} 
        sx={{ mb: 4 }}
        variant="fullWidth"
      >
        <Tab 
          icon={<YouTubeIcon />} 
          label="Video Tutorials" 
          iconPosition="start"
        />
        <Tab 
          icon={<CourseIcon />} 
          label="Courses" 
          iconPosition="start"
        />
        <Tab 
          icon={<DocIcon />} 
          label="Documentation" 
          iconPosition="start"
        />
        <Tab 
          icon={<CodeIcon />} 
          label="Practice" 
          iconPosition="start"
        />
      </Tabs>

      {/* Video Tutorials */}
      {activeTab === 0 && currentResources && (
        <Grid container spacing={3}>
          {currentResources.videos.map((video, idx) => (
            <Grid item xs={12} md={6} lg={4} key={idx}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: 'error.main' }}>
                      <YouTubeIcon />
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="subtitle1" fontWeight="bold" sx={{ lineHeight: 1.3 }}>
                        {video.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {video.platform}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip 
                      icon={<TimerIcon />}
                      label={video.duration} 
                      size="small"
                      variant="outlined"
                    />
                    <Chip 
                      label={video.level} 
                      size="small"
                      color={levelColors[video.level] || 'default'}
                    />
                  </Box>

                  <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    href={video.url}
                    target="_blank"
                    startIcon={<VideoIcon />}
                  >
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Courses */}
      {activeTab === 1 && currentResources && (
        <Grid container spacing={3}>
          {currentResources.courses.map((course, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {course.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <PlatformIcon sx={{ fontSize: 14, mr: 0.5, verticalAlign: 'middle' }} />
                        {course.platform}
                      </Typography>
                    </Box>
                    {course.certificate && (
                      <Chip 
                        icon={<CertificateIcon />}
                        label="Certificate" 
                        size="small"
                        color="success"
                      />
                    )}
                  </Box>

                  {course.instructor && (
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Instructor: {course.instructor}
                    </Typography>
                  )}

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 2 }}>
                    <TimerIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      Duration: {course.duration}
                    </Typography>
                  </Box>

                  <Button
                    variant="outlined"
                    fullWidth
                    href={course.url}
                    target="_blank"
                    endIcon={<ExternalLinkIcon />}
                  >
                    View Course
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Documentation */}
      {activeTab === 2 && currentResources && (
        <Grid container spacing={3}>
          {currentResources.documentation.map((doc, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card 
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8]
                  }
                }}
                onClick={() => window.open(doc.url, '_blank')}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2, width: 56, height: 56 }}>
                    <DocIcon />
                  </Avatar>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {doc.title}
                  </Typography>
                  <Chip label={doc.type} size="small" variant="outlined" />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Practice Platforms */}
      {activeTab === 3 && (
        <Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
            Practice Platforms
          </Typography>
          <Grid container spacing={3}>
            {practicePlatforms.map((platform, idx) => (
              <Grid item xs={12} md={6} lg={4} key={idx}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8]
                    }
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {platform.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {platform.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                      {platform.bestFor.map((item, i) => (
                        <Chip key={i} label={item} size="small" variant="outlined" />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      href={platform.url}
                      target="_blank"
                      endIcon={<ExternalLinkIcon />}
                    >
                      Visit Platform
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* Learning Paths */}
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
            📍 Recommended Learning Paths
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(learningPaths).map(([key, path]) => (
              <Grid item xs={12} md={4} key={key}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                      {path.title}
                    </Typography>
                    <List dense>
                      {path.steps.map((step, idx) => (
                        <ListItem key={idx} sx={{ alignItems: 'flex-start' }}>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'primary.main', width: 28, height: 28, fontSize: 14 }}>
                              {idx + 1}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="subtitle2">
                                {topicLabels[step.topic] || step.topic}
                              </Typography>
                            }
                            secondary={
                              <>
                                <Typography variant="caption" color="text.secondary">
                                  {step.duration}
                                </Typography>
                                <br />
                                <Typography variant="caption">
                                  {step.description}
                                </Typography>
                              </>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default Resources;
