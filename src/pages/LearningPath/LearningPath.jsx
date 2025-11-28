import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Button,
  LinearProgress,
  Container,
  Breadcrumbs,
  Link,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { learningPaths, allTopics } from '../../data';
import TopicCard from '../../components/TopicCard/TopicCard';
import { useProgress } from '../../context/ProgressContext';

const LearningPath = () => {
  const { pathId } = useParams();
  const navigate = useNavigate();
  const { completedTopics } = useProgress();

  const path = learningPaths.find(p => p.id === pathId);

  if (!path) {
    return (
      <Container>
        <Typography variant="h4">Path not found</Typography>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </Container>
    );
  }

  const topics = path.topics.map(topicId => allTopics[topicId]).filter(Boolean);
  const completedCount = path.topics.filter(topicId => completedTopics.includes(topicId)).length;
  const progress = Math.round((completedCount / path.topics.length) * 100);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Breadcrumbs sx={{ mb: 2 }}>
          <Link
            component="button"
            variant="body1"
            onClick={() => navigate('/')}
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Typography color="text.primary">{path.title}</Typography>
        </Breadcrumbs>

        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="h2" sx={{ mr: 2 }}>
              {path.icon}
            </Typography>
            <Box>
              <Typography variant="h4" component="h1" fontWeight="bold">
                {path.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {path.description}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Progress: {completedCount} / {path.topics.length} topics completed
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {progress}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ height: 8, borderRadius: 4 }}
            />
          </Box>
        </Box>

        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Topics
        </Typography>

        <Grid container spacing={3}>
          {topics.map((topic) => (
            <Grid item xs={12} sm={6} md={4} key={topic.id}>
              <TopicCard topic={topic} pathId={pathId} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default LearningPath;
