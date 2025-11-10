import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
import {
  School,
  Speed,
  EmojiEvents,
  TrendingUp,
  ArrowForward,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { learningPaths } from '../../data/courseContent';
import { useProgress } from '../../context/ProgressContext';

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { completedTopics } = useProgress();

  const features = [
    {
      icon: <School sx={{ fontSize: 40 }} />,
      title: 'Comprehensive Content',
      description: 'Learn everything from basics to advanced Python concepts with detailed explanations and examples.',
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Interactive Learning',
      description: 'Practice with code examples, quizzes, and real-world use cases for hands-on experience.',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 40 }} />,
      title: 'Track Progress',
      description: 'Monitor your learning journey with progress tracking, bookmarks, and achievement badges.',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: 'Best Practices',
      description: 'Master Python with do\'s, don\'ts, and industry-standard coding practices.',
    },
  ];

  return (
    <Container maxWidth="xl">
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          py: { xs: 6, md: 10 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.secondary.main}20 100%)`,
          borderRadius: 4,
          mb: 6,
        }}
      >
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          component="h1"
          gutterBottom
          fontWeight={700}
        >
          Master Python Programming 🐍
        </Typography>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          color="text.secondary"
          paragraph
          sx={{ maxWidth: 800, mx: 'auto', px: 2 }}
        >
          Your complete guide to learning Python from fundamentals to professional-level development
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={() => navigate('/path/beginner')}
            sx={{ px: 4, py: 1.5 }}
          >
            Start Learning
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/progress')}
            sx={{ px: 4, py: 1.5 }}
          >
            View Progress
          </Button>
        </Box>

        {completedTopics.length > 0 && (
          <Chip
            icon={<EmojiEvents />}
            label={`${completedTopics.length} Topics Completed!`}
            color="success"
            sx={{ mt: 3 }}
          />
        )}
      </Box>

      {/* Learning Paths */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mb: 4 }}>
          Choose Your Learning Path
        </Typography>
        <Grid container spacing={3}>
          {learningPaths.map((path) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={path.id}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  borderTop: `4px solid ${path.color}`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                  },
                }}
                onClick={() => navigate(`/path/${path.id}`)}
              >
                <CardContent>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="h2" component="div">
                      {path.icon}
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    {path.title}
                  </Typography>
                  <Chip
                    label={path.level}
                    size="small"
                    sx={{ mb: 2, bgcolor: path.color, color: 'white' }}
                  />
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {path.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="flex" alignItems="center">
                    <School fontSize="small" sx={{ mr: 0.5 }} />
                    {path.estimatedTime}
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/path/${path.id}`);
                    }}
                  >
                    Explore Path
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Features */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mb: 4 }}>
          Why Learn Here?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          textAlign: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          mb: 4,
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight={600}>
          Ready to Start Your Python Journey?
        </Typography>
        <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
          Join thousands of learners mastering Python programming
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            bgcolor: 'white',
            color: theme.palette.primary.main,
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.9)',
            },
          }}
          endIcon={<ArrowForward />}
          onClick={() => navigate('/path/beginner')}
        >
          Begin Learning Now
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;
