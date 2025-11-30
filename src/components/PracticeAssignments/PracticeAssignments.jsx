import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  Chip,
  Button,
  Collapse,
  IconButton,
  Divider,
  Alert,
  Tooltip,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  Code,
  CheckCircle,
  LightbulbOutlined,
  ExpandMore,
  ExpandLess,
  Visibility,
  VisibilityOff,
  EmojiEvents
} from '@mui/icons-material';
import CodeEditor from '../CodeEditor/CodeEditor';
import { getAssignmentsForTopic } from '../../data/assignments';

const difficultyColors = {
  'Easy': 'success',
  'Medium': 'warning',
  'Hard': 'error'
};

const PracticeAssignments = ({ topicId }) => {
  const [expandedAssignment, setExpandedAssignment] = useState(null);
  const [showSolution, setShowSolution] = useState({});
  const [showHints, setShowHints] = useState({});
  const [userCode, setUserCode] = useState({});
  const [completedAssignments, setCompletedAssignments] = useState(() => {
    const saved = localStorage.getItem(`assignments_${topicId}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [showCelebration, setShowCelebration] = useState(false);

  const assignments = getAssignmentsForTopic(topicId);

  if (!assignments || assignments.length === 0) {
    return null;
  }

  const completedCount = completedAssignments.length;
  const totalCount = assignments.length;
  const progressPercent = (completedCount / totalCount) * 100;

  const handleToggleExpand = (assignmentId) => {
    setExpandedAssignment(expandedAssignment === assignmentId ? null : assignmentId);
  };

  const handleToggleHints = (assignmentId) => {
    setShowHints(prev => ({ ...prev, [assignmentId]: !prev[assignmentId] }));
  };

  const handleToggleSolution = (assignmentId) => {
    setShowSolution(prev => ({ ...prev, [assignmentId]: !prev[assignmentId] }));
  };

  const handleCodeChange = (assignmentId, code) => {
    setUserCode(prev => ({ ...prev, [assignmentId]: code }));
  };

  const handleMarkComplete = (assignmentId) => {
    if (!completedAssignments.includes(assignmentId)) {
      const newCompleted = [...completedAssignments, assignmentId];
      setCompletedAssignments(newCompleted);
      localStorage.setItem(`assignments_${topicId}`, JSON.stringify(newCompleted));
      
      // Show celebration if all assignments completed
      if (newCompleted.length === totalCount) {
        setShowCelebration(true);
      }
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Code color="primary" sx={{ fontSize: 32 }} />
          <Box>
            <Typography variant="h5" fontWeight="bold">
              Practice Assignments
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hands-on coding exercises to reinforce your learning
            </Typography>
          </Box>
        </Box>
        <Chip
          icon={<CheckCircle />}
          label={`${completedCount}/${totalCount} Completed`}
          color={completedCount === totalCount ? 'success' : 'default'}
          variant={completedCount === totalCount ? 'filled' : 'outlined'}
        />
      </Box>

      {/* Progress Bar */}
      <Box sx={{ mb: 3 }}>
        <LinearProgress
          variant="determinate"
          value={progressPercent}
          sx={{
            height: 8,
            borderRadius: 4,
            bgcolor: 'grey.200',
            '& .MuiLinearProgress-bar': {
              bgcolor: progressPercent === 100 ? 'success.main' : 'primary.main'
            }
          }}
        />
        <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
          {progressPercent.toFixed(0)}% Complete
        </Typography>
      </Box>

      {/* Assignments List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {assignments.map((assignment, index) => {
          const isCompleted = completedAssignments.includes(assignment.id);
          const isExpanded = expandedAssignment === assignment.id;
          const hintsVisible = showHints[assignment.id];
          const solutionVisible = showSolution[assignment.id];
          const currentCode = userCode[assignment.id] || assignment.starterCode;

          return (
            <Card
              key={assignment.id}
              elevation={isExpanded ? 4 : 1}
              sx={{
                border: isCompleted ? '2px solid' : '1px solid',
                borderColor: isCompleted ? 'success.main' : 'divider',
                transition: 'all 0.3s ease'
              }}
            >
              <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                {/* Assignment Header */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleToggleExpand(assignment.id)}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: isCompleted ? 'success.main' : 'primary.main',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    >
                      {isCompleted ? <CheckCircle fontSize="small" /> : index + 1}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {assignment.title}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                        <Chip
                          label={assignment.difficulty}
                          size="small"
                          color={difficultyColors[assignment.difficulty]}
                        />
                        {isCompleted && (
                          <Chip
                            icon={<CheckCircle />}
                            label="Completed"
                            size="small"
                            color="success"
                            variant="outlined"
                          />
                        )}
                      </Box>
                    </Box>
                  </Box>
                  <IconButton>
                    {isExpanded ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </Box>

                {/* Expanded Content */}
                <Collapse in={isExpanded}>
                  <Divider sx={{ my: 2 }} />

                  {/* Description */}
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {assignment.description}
                  </Typography>

                  {/* Hints Section */}
                  <Box sx={{ mb: 2 }}>
                    <Button
                      startIcon={<LightbulbOutlined />}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleHints(assignment.id);
                      }}
                      size="small"
                      color="warning"
                    >
                      {hintsVisible ? 'Hide Hints' : `Show Hints (${assignment.hints.length})`}
                    </Button>
                    <Collapse in={hintsVisible}>
                      <Alert severity="info" sx={{ mt: 1 }}>
                        <List dense disablePadding>
                          {assignment.hints.map((hint, i) => (
                            <ListItem key={i} disablePadding sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 24 }}>
                                <LightbulbOutlined fontSize="small" color="warning" />
                              </ListItemIcon>
                              <ListItemText primary={hint} />
                            </ListItem>
                          ))}
                        </List>
                      </Alert>
                    </Collapse>
                  </Box>

                  {/* Code Editor */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Your Solution:
                    </Typography>
                    <Paper variant="outlined" sx={{ overflow: 'hidden' }}>
                      <CodeEditor
                        initialCode={assignment.starterCode}
                        code={currentCode}
                        language="python"
                        onChange={(code) => handleCodeChange(assignment.id, code)}
                        height="250px"
                      />
                    </Paper>
                  </Box>

                  {/* Action Buttons */}
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="outlined"
                      startIcon={solutionVisible ? <VisibilityOff /> : <Visibility />}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleSolution(assignment.id);
                      }}
                    >
                      {solutionVisible ? 'Hide Solution' : 'Show Solution'}
                    </Button>
                    <Button
                      variant={isCompleted ? 'outlined' : 'contained'}
                      color="success"
                      startIcon={<CheckCircle />}
                      onClick={() => handleMarkComplete(assignment.id)}
                      disabled={isCompleted}
                    >
                      {isCompleted ? 'Completed' : 'Mark Complete'}
                    </Button>
                  </Box>

                  {/* Solution */}
                  <Collapse in={solutionVisible}>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" color="success.main" gutterBottom>
                        Solution:
                      </Typography>
                      <Paper
                        variant="outlined"
                        sx={{
                          bgcolor: 'success.50',
                          borderColor: 'success.main',
                          overflow: 'hidden'
                        }}
                      >
                        <CodeEditor
                          code={assignment.solution}
                          language="python"
                          readOnly
                          showOutput={false}
                          height="200px"
                        />
                      </Paper>
                    </Box>
                  </Collapse>
                </Collapse>
              </CardContent>
            </Card>
          );
        })}
      </Box>

      {/* Celebration Dialog */}
      <Dialog open={showCelebration} onClose={() => setShowCelebration(false)}>
        <DialogTitle sx={{ textAlign: 'center' }}>
          <EmojiEvents sx={{ fontSize: 64, color: 'warning.main' }} />
          <Typography variant="h5" sx={{ mt: 1 }}>
            🎉 Congratulations!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography align="center">
            You've completed all practice assignments for this topic!
            Keep up the great work and continue to the next topic.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowCelebration(false)}
          >
            Continue Learning
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default PracticeAssignments;
