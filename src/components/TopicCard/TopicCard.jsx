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
  SignalCellularAlt,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';
import { useCourseTranslation } from '../../hooks/useCourseTranslation';

const TopicCard = ({ topic, pathId }) => {
  const navigate = useNavigate();
  const { isTopicComplete, isBookmarked, toggleBookmark } = useProgress();
  const { mergeTopicWithTranslation } = useCourseTranslation();
  
  // Get translated topic if available
  const displayTopic = mergeTopicWithTranslation(topic, pathId);
  
  const completed = isTopicComplete(displayTopic.id);
  const bookmarked = isBookmarked(displayTopic.id);

  const handleClick = () => {
    navigate(`/path/${pathId}/topic/${displayTopic.id}`);
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    toggleBookmark(displayTopic.id);
  };

  // Get difficulty color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner': return 'success';
      case 'intermediate': return 'warning';
      case 'advanced': return 'error';
      case 'professional': return 'secondary';
      default: return 'default';
    }
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
            {displayTopic.title}
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
          {displayTopic.description}
        </Typography>

        {/* Metadata Chips */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          {displayTopic.difficulty && (
            <Chip
              icon={<SignalCellularAlt />}
              label={displayTopic.difficulty}
              size="small"
              color={getDifficultyColor(displayTopic.difficulty)}
              variant="outlined"
            />
          )}
          {displayTopic.estimatedTime && (
            <Chip
              icon={<Schedule />}
              label={`${displayTopic.estimatedTime} min`}
              size="small"
              color="primary"
              variant="outlined"
            />
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
          {displayTopic.content?.useCases && (
            <Chip
              label={`${displayTopic.content.useCases.length} Use Cases`}
              size="small"
              color="primary"
              variant="outlined"
            />
          )}
          {displayTopic.quiz && (
            <Chip
              label={`${displayTopic.quiz.length} Quiz Questions`}
              size="small"
              color="secondary"
              variant="outlined"
            />
          )}
          {displayTopic.content?.codeExamples && (
            <Chip
              label={`${displayTopic.content.codeExamples.length} Examples`}
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
