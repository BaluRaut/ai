import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  LinearProgress,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  BookmarkBorder,
  Bookmark,
  CheckCircle,
  Schedule,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';

const TopicCard = ({ topic, pathId }) => {
  const navigate = useNavigate();
  const { isTopicComplete, isBookmarked, toggleBookmark } = useProgress();
  
  const completed = isTopicComplete(topic.id);
  const bookmarked = isBookmarked(topic.id);

  const handleClick = () => {
    navigate(`/path/${pathId}/topic/${topic.id}`);
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    toggleBookmark(topic.id);
  };

  return (
    <Card
      sx={{
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
        position: 'relative',
        height: '100%',
      }}
      onClick={handleClick}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, pr: 2 }}>
            {topic.title}
          </Typography>
          <Box>
            {completed && (
              <Tooltip title="Completed">
                <CheckCircle color="success" sx={{ mr: 0.5 }} />
              </Tooltip>
            )}
            <IconButton
              size="small"
              onClick={handleBookmark}
              color={bookmarked ? 'primary' : 'default'}
            >
              {bookmarked ? <Bookmark /> : <BookmarkBorder />}
            </IconButton>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" paragraph>
          {topic.description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
          {topic.content?.useCases && (
            <Chip
              label={`${topic.content.useCases.length} Use Cases`}
              size="small"
              color="primary"
              variant="outlined"
            />
          )}
          {topic.quiz && (
            <Chip
              label={`${topic.quiz.length} Quiz Questions`}
              size="small"
              color="secondary"
              variant="outlined"
            />
          )}
          {topic.content?.codeExamples && (
            <Chip
              label={`${topic.content.codeExamples.length} Examples`}
              size="small"
              color="info"
              variant="outlined"
            />
          )}
        </Box>

        {completed && (
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{ mt: 2, height: 6, borderRadius: 3 }}
            color="success"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default TopicCard;
