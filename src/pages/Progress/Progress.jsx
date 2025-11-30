import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  LinearProgress,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { TrendingUp, CheckCircle, EmojiEvents, School } from '@mui/icons-material';
import { useProgress } from '../../context/ProgressContext';
import { courseData, learningPaths } from '../../data/courseContent';
import { useTranslation } from 'react-i18next';
import ActivityHeatmap from '../../components/ActivityHeatmap/ActivityHeatmap';

const Progress = () => {
  const { completedTopics, quizScores } = useProgress();
  const { t } = useTranslation();

  const pathProgress = learningPaths.map(path => {
    const topics = courseData[path.id]?.topics || [];
    const completed = topics.filter(t => completedTopics.includes(t.id)).length;
    const percentage = topics.length > 0 ? (completed / topics.length) * 100 : 0;
    
    return {
      ...path,
      totalTopics: topics.length,
      completedTopics: completed,
      percentage,
    };
  });

  const totalTopics = pathProgress.reduce((sum, path) => sum + path.totalTopics, 0);
  const totalCompleted = pathProgress.reduce((sum, path) => sum + path.completedTopics, 0);
  const overallProgress = totalTopics > 0 ? (totalCompleted / totalTopics) * 100 : 0;

  const quizzesTaken = Object.keys(quizScores).length;
  const averageScore = quizzesTaken > 0
    ? Object.values(quizScores).reduce((sum, quiz) => sum + (quiz.score / quiz.total) * 100, 0) / quizzesTaken
    : 0;

  return (
    <Container maxWidth="xl" sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 3 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <TrendingUp sx={{ fontSize: 48, color: 'primary.main' }} />
          <Box>
            <Typography variant="h4" fontWeight={700}>
              {t('progress.title')}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {t('progress.subtitle', 'Track your Python learning journey')}
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Overall Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircle color="success" sx={{ mr: 1 }} />
                <Typography variant="h6">{t('progress.topicsCompleted')}</Typography>
              </Box>
              <Typography variant="h3" fontWeight={700} color="success.main">
                {totalCompleted}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('progress.outOf', 'out of')} {totalTopics} {t('progress.total', 'total')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">{t('progress.overallProgress', 'Overall Progress')}</Typography>
              </Box>
              <Typography variant="h3" fontWeight={700} color="primary.main">
                {overallProgress.toFixed(0)}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={overallProgress}
                sx={{ mt: 1, height: 8, borderRadius: 4 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <School color="secondary" sx={{ mr: 1 }} />
                <Typography variant="h6">{t('progress.quizzesTaken')}</Typography>
              </Box>
              <Typography variant="h3" fontWeight={700} color="secondary.main">
                {quizzesTaken}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('progress.assessmentsCompleted', 'assessments completed')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmojiEvents color="warning" sx={{ mr: 1 }} />
                <Typography variant="h6">{t('progress.averageScore')}</Typography>
              </Box>
              <Typography variant="h3" fontWeight={700} color="warning.main">
                {averageScore.toFixed(0)}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('progress.quizPerformance', 'quiz performance')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Activity Heatmap */}
      <Box sx={{ mt: 4, mb: 4 }}>
        <ActivityHeatmap />
      </Box>

      {/* Path Progress */}
      <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mb: 3 }}>
        {t('progress.progressByPath', 'Progress by Learning Path')}
      </Typography>
      <Grid container spacing={3}>
        {pathProgress.map(path => (
          <Grid item xs={12} sm={6} key={path.id}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Typography variant="h3">{path.icon}</Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={600}>
                    {path.title}
                  </Typography>
                  <Chip
                    label={path.level}
                    size="small"
                    sx={{ bgcolor: path.color, color: 'white' }}
                  />
                </Box>
                <Typography variant="h4" fontWeight={700} color="primary">
                  {path.percentage.toFixed(0)}%
                </Typography>
              </Box>
              
              <LinearProgress
                variant="determinate"
                value={path.percentage}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  mb: 2,
                  bgcolor: 'grey.200',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: path.color,
                  },
                }}
              />
              
              <Typography variant="body2" color="text.secondary">
                {path.completedTopics} {t('progress.of', 'of')} {path.totalTopics} {t('progress.topicsCompletedLower', 'topics completed')}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Progress;
