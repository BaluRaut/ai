import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Container,
} from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import { learningPaths } from '../../data';
import { useProgress } from '../../context/ProgressContext';
import { allTopics } from '../../data';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const navigate = useNavigate();
  const { completedTopics } = useProgress();
  const { t } = useTranslation();

  const getPathProgress = (pathTopics) => {
    const completed = pathTopics.filter(topicId => completedTopics.includes(topicId)).length;
    return Math.round((completed / pathTopics.length) * 100);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <StorageIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            {t('app.title')}
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            {t('app.subtitle')}
          </Typography>
        </Box>

        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          {t('home.learningPaths')}
        </Typography>

        <Grid container spacing={3}>
          {learningPaths.map((path) => {
            const progress = getPathProgress(path.topics);
            return (
              <Grid item xs={12} sm={6} md={6} key={path.id}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardActionArea onClick={() => navigate(`/path/${path.id}`)} sx={{ height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h2" sx={{ mr: 2 }}>
                          {path.icon}
                        </Typography>
                        <Typography variant="h5" component="h2" fontWeight="600">
                          {path.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {path.description}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="caption" color="text.secondary">
                          {t('home.progress')}: {progress}%
                        </Typography>
                        <Box
                          sx={{
                            mt: 1,
                            height: 8,
                            bgcolor: 'grey.200',
                            borderRadius: 4,
                          }}
                        >
                          <Box
                            sx={{
                              height: '100%',
                              width: `${progress}%`,
                              bgcolor: path.color,
                              borderRadius: 4,
                              transition: 'width 0.3s',
                            }}
                          />
                        </Box>
                      </Box>
                      <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                        {path.topics.length} {t('home.topics')}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Box sx={{ mt: 6, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>
            {t('home.whyLearn')}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                {t('home.highDemand')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('home.highDemandDesc')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                {t('home.careerGrowth')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('home.careerGrowthDesc')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                {t('home.realWorld')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('home.realWorldDesc')}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
