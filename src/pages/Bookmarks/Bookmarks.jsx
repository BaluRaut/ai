import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  IconButton,
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DeleteIcon from '@mui/icons-material/Delete';
import { useProgress } from '../../context/ProgressContext';
import { allTopics } from '../../data';
import TopicCard from '../../components/TopicCard/TopicCard';

const Bookmarks = () => {
  const navigate = useNavigate();
  const { bookmarkedTopics, toggleBookmark } = useProgress();

  const bookmarkedTopicData = bookmarkedTopics
    .map(topicId => allTopics[topicId])
    .filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <BookmarkIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" fontWeight="bold">
            Bookmarked Topics
          </Typography>
        </Box>

        {bookmarkedTopicData.length === 0 ? (
          <Paper elevation={0} sx={{ p: 6, textAlign: 'center' }}>
            <BookmarkIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h5" color="text.secondary" gutterBottom>
              No bookmarks yet
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Bookmark topics to save them for later review
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={3}>
            {bookmarkedTopicData.map((topic) => {
              // Find the pathId for this topic
              const pathId = topic.pathId;
              return (
                <Grid item xs={12} sm={6} md={4} key={topic.id}>
                  <Box sx={{ position: 'relative' }}>
                    <IconButton
                      onClick={() => toggleBookmark(topic.id)}
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 1,
                        bgcolor: 'background.paper',
                        '&:hover': { bgcolor: 'error.light' },
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <TopicCard topic={topic} pathId={pathId} />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default Bookmarks;
