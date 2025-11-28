import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  InputAdornment,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Chip,
  ClickAwayListener,
  Fade,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import QuizIcon from '@mui/icons-material/Quiz';
import { allTopics } from '../../data';

const difficultyColors = {
  beginner: 'success',
  intermediate: 'warning',
  advanced: 'error',
  professional: 'secondary',
};

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const topicResults = [];

    Object.entries(allTopics).forEach(([topicId, topic]) => {
      let score = 0;
      const matches = [];

      // Title match (highest priority)
      if (topic.title.toLowerCase().includes(searchQuery)) {
        score += 100;
        matches.push('title');
      }

      // Description match
      if (topic.description?.toLowerCase().includes(searchQuery)) {
        score += 50;
        matches.push('description');
      }

      // Key points match
      if (topic.content?.keyPoints?.some(kp => kp.toLowerCase().includes(searchQuery))) {
        score += 30;
        matches.push('key points');
      }

      // Overview match
      if (topic.content?.overview?.toLowerCase().includes(searchQuery)) {
        score += 20;
        matches.push('overview');
      }

      // Examples match
      if (topic.examples?.some(ex => 
        ex.title?.toLowerCase().includes(searchQuery) || 
        ex.code?.toLowerCase().includes(searchQuery)
      )) {
        score += 15;
        matches.push('examples');
      }

      // Quiz match
      if (topic.quiz?.some(q => q.question?.toLowerCase().includes(searchQuery))) {
        score += 10;
        matches.push('quiz');
      }

      if (score > 0) {
        topicResults.push({
          id: topicId,
          topic,
          score,
          matches,
        });
      }
    });

    // Sort by score
    topicResults.sort((a, b) => b.score - a.score);
    setResults(topicResults.slice(0, 8));
    setSelectedIndex(-1);
  }, [query]);

  const handleSelect = (topicId, pathId) => {
    setQuery('');
    setIsOpen(false);
    navigate(`/path/${pathId}/topic/${topicId}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      const selected = results[selectedIndex];
      handleSelect(selected.id, selected.topic.pathId);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
  };

  const getMatchIcon = (matchType) => {
    switch (matchType) {
      case 'title':
      case 'description':
        return <ArticleIcon fontSize="small" />;
      case 'key points':
      case 'overview':
        return <SchoolIcon fontSize="small" />;
      case 'examples':
        return <CodeIcon fontSize="small" />;
      case 'quiz':
        return <QuizIcon fontSize="small" />;
      default:
        return <ArticleIcon fontSize="small" />;
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <Box sx={{ position: 'relative', width: { xs: 200, sm: 300, md: 400 }, mx: 2 }}>
        <TextField
          ref={inputRef}
          size="small"
          placeholder="Search topics, concepts, SQL..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              bgcolor: 'rgba(255,255,255,0.1)',
              borderRadius: 2,
              '& fieldset': {
                borderColor: 'rgba(255,255,255,0.3)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255,255,255,0.5)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'rgba(255,255,255,0.7)',
              },
            },
            '& input': {
              color: 'white',
              '&::placeholder': {
                color: 'rgba(255,255,255,0.7)',
                opacity: 1,
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'rgba(255,255,255,0.7)' }} />
              </InputAdornment>
            ),
            endAdornment: query && (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => {
                    setQuery('');
                    setResults([]);
                  }}
                  sx={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Fade in={isOpen && results.length > 0}>
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
            }}
          >
            <List dense>
              {results.map((result, index) => (
                <ListItem key={result.id} disablePadding>
                  <ListItemButton
                    selected={index === selectedIndex}
                    onClick={() => handleSelect(result.id, result.topic.pathId)}
                    sx={{
                      '&.Mui-selected': {
                        bgcolor: 'action.selected',
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {getMatchIcon(result.matches[0])}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="body1" fontWeight="medium">
                            {result.topic.title}
                          </Typography>
                          <Chip
                            size="small"
                            label={result.topic.pathId}
                            color={difficultyColors[result.topic.pathId] || 'default'}
                            sx={{ height: 20, fontSize: '0.7rem' }}
                          />
                        </Box>
                      }
                      secondary={
                        <Typography variant="caption" color="text.secondary" noWrap>
                          Found in: {result.matches.join(', ')}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box sx={{ p: 1, borderTop: 1, borderColor: 'divider' }}>
              <Typography variant="caption" color="text.secondary">
                Press ↑↓ to navigate, Enter to select, Esc to close
              </Typography>
            </Box>
          </Paper>
        </Fade>

        {isOpen && query.length >= 2 && results.length === 0 && (
          <Fade in>
            <Paper
              elevation={8}
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                mt: 1,
                p: 2,
                zIndex: 1300,
              }}
            >
              <Typography variant="body2" color="text.secondary" textAlign="center">
                No results found for "{query}"
              </Typography>
            </Paper>
          </Fade>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default SearchBar;
