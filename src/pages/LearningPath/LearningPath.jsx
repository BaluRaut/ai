import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Chip,
  Paper,
  Breadcrumbs,
  Link,
  TextField,
  InputAdornment,
} from '@mui/material';
import { NavigateNext, School, Search as SearchIcon } from '@mui/icons-material';
import { learningPaths, courseData } from '../../data/courseContent';
import TopicCard from '../../components/TopicCard/TopicCard';
import { useProgress } from '../../context/ProgressContext';
import { useCourseTranslation } from '../../hooks/useCourseTranslation';

const LearningPath = () => {
  const { pathId } = useParams();
  const { completedTopics } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const { mergeTopicWithTranslation, isMarathi } = useCourseTranslation();
  
  const path = learningPaths.find(p => p.id === pathId);
  const topics = courseData[pathId]?.topics || [];
  
  // Translate all topics if Marathi is active
  const translatedTopics = topics.map(topic => 
    mergeTopicWithTranslation(topic, pathId)
  );

  // Filter topics based on search query (using translated topics)
  const filteredTopics = translatedTopics.filter(topic => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      topic.title.toLowerCase().includes(query) ||
      topic.description?.toLowerCase().includes(query) ||
      topic.content?.keyPoints?.some(point => point.toLowerCase().includes(query))
    );
  });

  if (!path) {
    return (
      <Container>
        <Typography variant="h4">Path not found</Typography>
      </Container>
    );
  }

  const completedCount = translatedTopics.filter(topic => 
    completedTopics.includes(topic.id)
  ).length;

  const progress = translatedTopics.length > 0 ? (completedCount / translatedTopics.length) * 100 : 0;

  return (
    <Container maxWidth="xl" sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 3 }}>
      <Breadcrumbs separator={<NavigateNext fontSize="small" />} sx={{ mb: 3 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">{path.title}</Typography>
      </Breadcrumbs>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 4,
          background: `linear-gradient(135deg, ${path.color}20 0%, ${path.color}40 100%)`,
          borderTop: `4px solid ${path.color}`,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant="h2">{path.icon}</Typography>
          <Box>
            <Typography variant="h4" fontWeight={700}>
              {path.title}
            </Typography>
            <Chip
              label={path.level}
              sx={{ mt: 1, bgcolor: path.color, color: 'white' }}
            />
          </Box>
        </Box>

        <Typography variant="h6" paragraph color="text.secondary">
          {path.description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
          <Chip
            icon={<School />}
            label={`${topics.length} Topics`}
            variant="outlined"
          />
          <Chip
            label={`${completedCount} Completed`}
            color="success"
            variant="outlined"
          />
          <Chip
            label={`${progress.toFixed(0)}% Progress`}
            color="primary"
          />
          <Chip
            label={path.estimatedTime}
            variant="outlined"
          />
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
        Topics
      </Typography>

      {/* Search Topics */}
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Search topics in this path..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: 600 }}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredTopics.map((topic) => (
          <Grid item xs={12} sm={6} md={4} key={topic.id}>
            <TopicCard topic={topic} pathId={pathId} />
          </Grid>
        ))}
      </Grid>

      {filteredTopics.length === 0 && searchQuery && (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No topics found for "{searchQuery}"
          </Typography>
        </Paper>
      )}

      {topics.length === 0 && (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            Topics coming soon...
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default LearningPath;
