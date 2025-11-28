import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  LinearProgress,
  Box,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useProgress } from '../../context/ProgressContext';

const TopicCard = ({ topic, pathId }) => {
  const navigate = useNavigate();
  const { isTopicComplete } = useProgress();
  const completed = isTopicComplete(topic.id);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="h6" component="h3">
            {topic.title}
          </Typography>
          {completed && (
            <CheckCircleIcon color="success" sx={{ ml: 1, flexShrink: 0 }} />
          )}
        </Box>
        <Typography variant="body2" color="text.secondary" paragraph>
          {topic.description}
        </Typography>
        {topic.content?.keyPoints && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="caption" color="text.secondary">
              {topic.content.keyPoints.length} key concepts
            </Typography>
          </Box>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          fullWidth
          onClick={() => navigate(`/path/${pathId}/topic/${topic.id}`)}
        >
          {completed ? 'Review' : 'Start Learning'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default TopicCard;
