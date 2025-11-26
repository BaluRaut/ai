import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip,
  Button,
  TextField,
  Collapse,
  Alert,
  Divider,
} from '@mui/material';
import {
  Code,
  CheckCircle,
  LightbulbOutlined,
  PlayArrow,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import CodeSandbox from '../CodeSandbox/CodeSandbox';

// Import assignments from separate organized files
import { practiceAssignments } from './assignments';

const PracticeAssignments = ({ topicId }) => {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [code, setCode] = useState('');
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [completed, setCompleted] = useState(new Set());

  // Normalize topic ID to string for consistent lookups
  const normalizedTopicId = String(topicId);
  
  // Get assignments for current topic
  const assignments = practiceAssignments[normalizedTopicId] || [];

  const handleSelectAssignment = (assignment) => {
    setSelectedAssignment(assignment);
    setCode(assignment.starterCode);
    setShowHints(false);
    setShowSolution(false);
  };

  const handleMarkComplete = () => {
    setCompleted(prev => new Set([...prev, selectedAssignment.id]));
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'success';
      case 'Medium': return 'warning';
      case 'Hard': return 'error';
      default: return 'default';
    }
  };

  if (assignments.length === 0) {
    return (
      <Paper sx={{ p: 3, textAlign: 'center' }}>
        <Code sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h6" color="text.secondary">
          Practice assignments coming soon!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We're preparing hands-on exercises for this topic.
        </Typography>
      </Paper>
    );
  }

  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
      {/* Assignment List */}
      <Paper sx={{ width: { xs: '100%', md: 300 }, flexShrink: 0 }}>
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Code /> Practice Exercises
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {assignments.length} exercises available
          </Typography>
        </Box>
        <List>
          {assignments.map((assignment) => (
            <ListItem key={assignment.id} disablePadding>
              <ListItemButton
                selected={selectedAssignment?.id === assignment.id}
                onClick={() => handleSelectAssignment(assignment)}
              >
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {completed.has(assignment.id) && (
                        <CheckCircle color="success" fontSize="small" />
                      )}
                      <Typography variant="body2" noWrap>
                        {assignment.title}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Chip
                      label={assignment.difficulty}
                      size="small"
                      color={getDifficultyColor(assignment.difficulty)}
                      sx={{ mt: 0.5 }}
                    />
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Assignment Content */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {selectedAssignment ? (
          <Paper sx={{ p: 3 }}>
            {/* Header */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <Typography variant="h5">{selectedAssignment.title}</Typography>
                <Chip
                  label={selectedAssignment.difficulty}
                  color={getDifficultyColor(selectedAssignment.difficulty)}
                />
              </Box>
              <Typography variant="body1" color="text.secondary">
                {selectedAssignment.description}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Hints Section */}
            <Box sx={{ mb: 3 }}>
              <Button
                startIcon={<LightbulbOutlined />}
                onClick={() => setShowHints(!showHints)}
                variant="outlined"
                size="small"
                sx={{ mb: 1 }}
              >
                {showHints ? 'Hide Hints' : 'Show Hints'}
              </Button>
              <Collapse in={showHints}>
                <Alert severity="info" sx={{ mt: 1 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Hints:
                  </Typography>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {selectedAssignment.hints.map((hint, idx) => (
                      <li key={idx}>
                        <Typography variant="body2">{hint}</Typography>
                      </li>
                    ))}
                  </ul>
                </Alert>
              </Collapse>
            </Box>

            {/* Code Editor */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Your Code:
              </Typography>
              <TextField
                multiline
                fullWidth
                rows={15}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                variant="outlined"
                sx={{
                  '& .MuiInputBase-input': {
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                  },
                }}
              />
            </Box>

            {/* Code Sandbox */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PlayArrow /> Run Your Code:
              </Typography>
              <CodeSandbox initialCode={code} />
            </Box>

            {/* Solution Section */}
            <Box sx={{ mb: 3 }}>
              <Button
                startIcon={showSolution ? <VisibilityOff /> : <Visibility />}
                onClick={() => setShowSolution(!showSolution)}
                variant="outlined"
                color="secondary"
                size="small"
                sx={{ mb: 1 }}
              >
                {showSolution ? 'Hide Solution' : 'Show Solution'}
              </Button>
              <Collapse in={showSolution}>
                <Paper
                  sx={{
                    p: 2,
                    mt: 1,
                    bgcolor: 'grey.900',
                    borderRadius: 1,
                  }}
                >
                  <Typography
                    component="pre"
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: '0.85rem',
                      color: '#e0e0e0',
                      whiteSpace: 'pre-wrap',
                      m: 0,
                      overflowX: 'auto',
                    }}
                  >
                    {selectedAssignment.solution}
                  </Typography>
                </Paper>
              </Collapse>
            </Box>

            {/* Complete Button */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                color="success"
                startIcon={<CheckCircle />}
                onClick={handleMarkComplete}
                disabled={completed.has(selectedAssignment.id)}
              >
                {completed.has(selectedAssignment.id) ? 'Completed!' : 'Mark as Complete'}
              </Button>
              <Button
                variant="outlined"
                onClick={() => setCode(selectedAssignment.starterCode)}
              >
                Reset Code
              </Button>
            </Box>
          </Paper>
        ) : (
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Code sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary">
              Select an exercise to begin
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Choose from {assignments.length} practice exercises on the left
            </Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default PracticeAssignments;
