import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { BookmarkBorder } from '@mui/icons-material';
import { useProgress } from '../../context/ProgressContext';
import { courseData, learningPaths } from '../../data/courseContent';
import TopicCard from '../../components/TopicCard/TopicCard';
import { useTranslation } from 'react-i18next';

const Bookmarks = () => {
  const { bookmarks } = useProgress();
  const { t } = useTranslation();

  const bookmarkedTopics = [];
  
  Object.keys(courseData).forEach(pathId => {
    const topics = courseData[pathId].topics || [];
    topics.forEach(topic => {
      if (bookmarks.includes(topic.id)) {
        bookmarkedTopics.push({ ...topic, pathId });
      }
    });
  });

  return (
    <Container maxWidth="xl" sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 3 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <BookmarkBorder sx={{ fontSize: 48, color: 'primary.main' }} />
          <Box>
            <Typography variant="h4" fontWeight={700}>
              {t('bookmarks.title')}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {bookmarkedTopics.length} {t('bookmarks.bookmarkedTopics', 'bookmarked topics')}
            </Typography>
          </Box>
        </Box>
      </Paper>

      {bookmarkedTopics.length > 0 ? (
        <Grid container spacing={3}>
          {bookmarkedTopics.map((topic) => (
            <Grid item xs={12} sm={6} md={4} key={topic.id}>
              <TopicCard topic={topic} pathId={topic.pathId} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper sx={{ p: 6, textAlign: 'center' }}>
          <BookmarkBorder sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {t('bookmarks.noBookmarks')}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('bookmarks.addBookmarks')}
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default Bookmarks;
