import { useState } from 'react';
import {
  TextField,
  InputAdornment,
  Box,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip,
  Typography,
  Fade,
  ClickAwayListener,
} from '@mui/material';
import { Search as SearchIcon, Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { courseData, learningPaths } from '../../data/courseContent';

const SearchBar = ({ isMobile = false }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  // Get all topics from all paths
  const getAllTopics = () => {
    const allTopics = [];
    Object.keys(courseData).forEach(pathId => {
      const topics = courseData[pathId]?.topics || [];
      const pathInfo = learningPaths.find(p => p.id === pathId);
      topics.forEach(topic => {
        allTopics.push({
          ...topic,
          pathId,
          pathTitle: pathInfo?.title || pathId,
          pathIcon: pathInfo?.icon || '📚',
        });
      });
    });
    return allTopics;
  };

  // Search filter function
  const filterTopics = (query) => {
    if (!query || query.trim().length < 2) return [];
    
    const searchTerm = query.toLowerCase().trim();
    const allTopics = getAllTopics();
    
    return allTopics.filter(topic => {
      // Search in title
      if (topic.title.toLowerCase().includes(searchTerm)) return true;
      
      // Search in description
      if (topic.description?.toLowerCase().includes(searchTerm)) return true;
      
      // Search in tags if they exist
      if (topic.tags && Array.isArray(topic.tags)) {
        if (topic.tags.some(tag => tag.toLowerCase().includes(searchTerm))) return true;
      }
      
      // Search in key points
      if (topic.content?.keyPoints) {
        if (topic.content.keyPoints.some(point => 
          point.toLowerCase().includes(searchTerm)
        )) return true;
      }
      
      return false;
    }).slice(0, 8); // Limit to 8 results
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowResults(value.trim().length >= 2);
  };

  const handleTopicClick = (topic) => {
    navigate(`/path/${topic.pathId}/topic/${topic.id}`);
    setSearchQuery('');
    setShowResults(false);
  };

  const handleClear = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  const searchResults = filterTopics(searchQuery);

  return (
    <ClickAwayListener onClickAway={() => setShowResults(false)}>
      <Box sx={{ position: 'relative', width: isMobile ? '100%' : 400 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search topics..."
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => {
            if (searchQuery.trim().length >= 2) setShowResults(true);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <Close
                  sx={{ cursor: 'pointer', fontSize: 20 }}
                  onClick={handleClear}
                />
              </InputAdornment>
            ),
            sx: {
              bgcolor: 'background.paper',
              borderRadius: 1,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'divider',
              },
            },
          }}
        />

        {/* Search Results Dropdown */}
        {showResults && searchResults.length > 0 && (
          <Fade in={showResults}>
            <Paper
              elevation={8}
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                mt: 1,
                maxHeight: 400,
                overflow: 'auto',
                zIndex: 1300,
                borderRadius: 2,
              }}
            >
              <List sx={{ p: 0 }}>
                {searchResults.map((topic) => (
                  <ListItem key={topic.id} disablePadding>
                    <ListItemButton
                      onClick={() => handleTopicClick(topic)}
                      sx={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 1,
                        py: 2,
                        '&:hover': {
                          bgcolor: 'action.hover',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                        <Typography variant="body2" color="text.secondary">
                          {topic.pathIcon}
                        </Typography>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {topic.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {topic.description}
                      </Typography>
                      <Chip
                        label={topic.pathTitle}
                        size="small"
                        variant="outlined"
                        sx={{ height: 20, fontSize: '0.7rem' }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Fade>
        )}

        {/* No Results Message */}
        {showResults && searchQuery.trim().length >= 2 && searchResults.length === 0 && (
          <Fade in={showResults}>
            <Paper
              elevation={8}
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                mt: 1,
                p: 3,
                zIndex: 1300,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                No topics found for "{searchQuery}"
              </Typography>
            </Paper>
          </Fade>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default SearchBar;
