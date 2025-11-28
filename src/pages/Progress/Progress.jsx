import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  LinearProgress,
  Card,
  CardContent,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useProgress } from '../../context/ProgressContext';
import { learningPaths, allTopics } from '../../data';

const Progress = () => {
  const { completedTopics, quizScores } = useProgress();

  const totalTopics = Object.keys(allTopics).length;
  const overallProgress = Math.round((completedTopics.length / totalTopics) * 100);

  const pathProgress = learningPaths.map(path => {
    const pathTopics = path.topics;
    const completed = pathTopics.filter(topicId => completedTopics.includes(topicId)).length;
    const progress = Math.round((completed / pathTopics.length) * 100);
    return {
      ...path,
      completed,
      total: pathTopics.length,
      progress,
    };
  });

  const averageQuizScore = Object.values(quizScores).length > 0
    ? Math.round(Object.values(quizScores).reduce((a, b) => a + b, 0) / Object.values(quizScores).length)
    : 0;

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <TrendingUpIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" fontWeight="bold">
            Your Progress
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <CheckCircleIcon sx={{ fontSize: 48, color: 'success.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold">
                  {completedTopics.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Topics Completed
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <TrendingUpIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold">
                  {overallProgress}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Overall Progress
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <EmojiEventsIcon sx={{ fontSize: 48, color: 'warning.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold">
                  {averageQuizScore}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Average Quiz Score
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Progress by Learning Path
        </Typography>

        <Grid container spacing={3}>
          {pathProgress.map((path) => (
            <Grid item xs={12} key={path.id}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h3" sx={{ mr: 2 }}>
                    {path.icon}
                  </Typography>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" fontWeight="600">
                      {path.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {path.completed} / {path.total} topics completed
                    </Typography>
                  </Box>
                  <Typography variant="h5" fontWeight="bold" color="primary">
                    {path.progress}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={path.progress}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    bgcolor: 'grey.200',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: path.color,
                    },
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>

        {completedTopics.length > 0 && (
          <Paper elevation={0} sx={{ p: 3, mt: 4, bgcolor: 'primary.light', color: 'primary.contrastText' }}>
            <Typography variant="h6" gutterBottom>
              🎉 Great job!
            </Typography>
            <Typography variant="body1">
              You've completed {completedTopics.length} topics so far. Keep up the excellent work!
            </Typography>
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default Progress;
