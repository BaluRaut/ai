import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Chip,
  Paper,
  IconButton,
  Divider,
  Grid,
  Fade,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Search as SearchIcon,
  Close,
  TrendingUp,
  FilterList,
  EmojiObjects,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useGlobalSearch } from '../../hooks/useGlobalSearch';
import { aiLearningPaths } from '../../data/ai-courses/aiLearningPaths';

const GlobalSearch = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const inputRef = useRef(null);
  
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    getSearchSuggestions,
    filterByCourse,
    hasResults,
    resultCount
  } = useGlobalSearch();

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true);

  // Focus input when dialog opens
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [open]);

  // Hide suggestions when user types
  useEffect(() => {
    setShowSuggestions(searchQuery.length === 0);
  }, [searchQuery]);

  const handleResultClick = (result) => {
    navigate(`/path/${result.pathId}/topic/${result.topic.id}`);
    onClose();
    setSearchQuery('');
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleCourseFilter = (courseId) => {
    setSelectedCourse(selectedCourse === courseId ? null : courseId);
  };

  const handleClear = () => {
    setSearchQuery('');
    setSelectedCourse(null);
    setShowSuggestions(true);
    inputRef.current?.focus();
  };

  const filteredResults = selectedCourse 
    ? filterByCourse(searchResults, selectedCourse)
    : searchResults;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      fullScreen={isMobile}
      PaperProps={{
        sx: {
          borderRadius: isMobile ? 0 : 2,
          maxHeight: isMobile ? '100vh' : '80vh',
        }
      }}
    >
      <DialogContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Search Header */}
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <TextField
              inputRef={inputRef}
              fullWidth
              placeholder="Search all topics, courses, concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: searchQuery && (
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={handleClear}>
                      <Close fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              autoComplete="off"
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'background.default',
                }
              }}
            />
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Box>

          {/* Course Filters */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
            <FilterList fontSize="small" sx={{ color: 'text.secondary' }} />
            {aiLearningPaths.map(path => (
              <Chip
                key={path.id}
                label={path.icon + ' ' + path.title}
                size="small"
                onClick={() => handleCourseFilter(path.id)}
                variant={selectedCourse === path.id ? 'filled' : 'outlined'}
                sx={{
                  borderColor: selectedCourse === path.id ? path.color : undefined,
                  bgcolor: selectedCourse === path.id ? `${path.color}20` : undefined,
                  color: selectedCourse === path.id ? path.color : undefined,
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Search Results / Suggestions */}
        <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
          {/* Show suggestions when empty */}
          {showSuggestions && searchQuery.length === 0 && (
            <Fade in>
              <Box>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TrendingUp fontSize="small" /> Popular Searches
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {getSearchSuggestions().map((suggestion, idx) => (
                    <Chip
                      key={idx}
                      label={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      icon={<EmojiObjects />}
                      variant="outlined"
                      sx={{ cursor: 'pointer' }}
                    />
                  ))}
                </Box>

                <Divider sx={{ my: 3 }} />

                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                  💡 Search Tips
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText 
                      primary="Search by topic name"
                      secondary='Try "neural networks" or "gradient descent"'
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Search by concept"
                      secondary='Try "overfitting" or "backpropagation"'
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Search by use case"
                      secondary='Try "fraud detection" or "image classification"'
                    />
                  </ListItem>
                </List>
              </Box>
            </Fade>
          )}

          {/* No results */}
          {!showSuggestions && searchQuery.length >= 2 && !hasResults && (
            <Fade in>
              <Box sx={{ textAlign: 'center', py: 6 }}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  No results found for "{searchQuery}"
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Try different keywords or browse by course
                </Typography>
              </Box>
            </Fade>
          )}

          {/* Search Results */}
          {!showSuggestions && hasResults && (
            <Fade in>
              <Box>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                  Found {resultCount} result{resultCount !== 1 ? 's' : ''} 
                  {selectedCourse && ` in ${aiLearningPaths.find(p => p.id === selectedCourse)?.title}`}
                </Typography>

                <List sx={{ pt: 0 }}>
                  {filteredResults.map((result, idx) => (
                    <Paper
                      key={idx}
                      elevation={0}
                      sx={{
                        mb: 2,
                        border: 1,
                        borderColor: 'divider',
                        overflow: 'hidden',
                        transition: 'all 0.2s',
                        '&:hover': {
                          borderColor: result.pathColor,
                          boxShadow: 2,
                        }
                      }}
                    >
                      <ListItemButton onClick={() => handleResultClick(result)}>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
                              <Typography variant="h6" component="span">
                                {result.topic.title}
                              </Typography>
                              <Chip
                                label={result.pathIcon + ' ' + result.pathTitle}
                                size="small"
                                sx={{
                                  bgcolor: `${result.pathColor}20`,
                                  color: result.pathColor,
                                  fontWeight: 600,
                                }}
                              />
                              {result.topic.difficulty && (
                                <Chip
                                  label={result.topic.difficulty}
                                  size="small"
                                  variant="outlined"
                                />
                              )}
                            </Box>
                          }
                          secondary={
                            <Box sx={{ mt: 1 }}>
                              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                {result.topic.description}
                              </Typography>
                              {result.matches.length > 0 && (
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                  {result.matches.slice(0, 2).map((match, mIdx) => (
                                    <Typography
                                      key={mIdx}
                                      variant="caption"
                                      sx={{
                                        color: 'text.secondary',
                                        bgcolor: 'action.hover',
                                        p: 0.5,
                                        borderRadius: 0.5,
                                        fontFamily: 'monospace',
                                      }}
                                    >
                                      📍 {match.field}: {match.text.substring(0, 100)}...
                                    </Typography>
                                  ))}
                                </Box>
                              )}
                            </Box>
                          }
                        />
                      </ListItemButton>
                    </Paper>
                  ))}
                </List>
              </Box>
            </Fade>
          )}
        </Box>

        {/* Footer with keyboard shortcuts */}
        <Box sx={{ p: 1.5, borderTop: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
          <Grid container spacing={1} sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
            <Grid item xs={12} sm={4}>
              <Chip label="↵ to select" size="small" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Chip label="↑↓ to navigate" size="small" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Chip label="ESC to close" size="small" variant="outlined" />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalSearch;
