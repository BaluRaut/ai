import React, { useState, useMemo, useCallback, memo, lazy, Suspense } from 'react';
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
  DialogActions,
  Skeleton
} from '@mui/material';
import {
  Code,
  CheckCircle,
  LightbulbOutlined,
  ExpandMore,
  ExpandLess,
  Visibility,
  VisibilityOff,
  EmojiEvents,
  ContentCopy
} from '@mui/icons-material';
import { getAssignmentsForTopic } from '../../data/assignments';

// Lazy load CodeEditor - it's heavy (Monaco)
const CodeEditor = lazy(() => import('../CodeEditor/CodeEditor'));

// Simple code display for solutions (much lighter than Monaco)
const CodeBlock = memo(({ code, language = 'python' }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <Box sx={{ position: 'relative' }}>
      <IconButton
        size="small"
        onClick={handleCopy}
        sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}
      >
        <ContentCopy fontSize="small" />
      </IconButton>
      {copied && (
        <Typography
          variant="caption"
          sx={{ position: 'absolute', top: 12, right: 48, color: 'success.main' }}
        >
          Copied!
        </Typography>
      )}
      <Box
        component="pre"
        sx={{
          p: 2,
          m: 0,
          overflow: 'auto',
          maxHeight: 300,
          fontSize: '0.875rem',
          fontFamily: 'Consolas, Monaco, monospace',
          bgcolor: 'grey.900',
          color: 'grey.100',
          borderRadius: 1,
          '&::-webkit-scrollbar': { width: 8, height: 8 },
          '&::-webkit-scrollbar-thumb': { bgcolor: 'grey.700', borderRadius: 4 }
        }}
      >
        <code>{code}</code>
      </Box>
    </Box>
  );
});

// Loading placeholder for editor
const EditorLoader = () => (
  <Box sx={{ p: 2 }}>
    <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 1 }} />
    <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
      <Skeleton variant="rectangular" width={80} height={36} sx={{ borderRadius: 1 }} />
      <Skeleton variant="rectangular" width={80} height={36} sx={{ borderRadius: 1 }} />
    </Box>
  </Box>
);

const difficultyColors = {
  'Easy': 'success',
  'Medium': 'warning',
  'Hard': 'error'
};

const PracticeAssignments = memo(({ topicId }) => {
  const [expandedAssignment, setExpandedAssignment] = useState(null);
  const [openedAssignments, setOpenedAssignments] = useState(new Set()); // Track which have been opened
  const [showSolution, setShowSolution] = useState({});
  const [showHints, setShowHints] = useState({});
  const [userCode, setUserCode] = useState({});
  const [completedAssignments, setCompletedAssignments] = useState(() => {
    const saved = localStorage.getItem(`assignments_${topicId}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [showCelebration, setShowCelebration] = useState(false);

  // Memoize assignments to prevent recalculation
  const assignments = useMemo(() => getAssignmentsForTopic(topicId), [topicId]);

  // Memoize handlers
  const handleToggleExpand = useCallback((assignmentId) => {
    setExpandedAssignment(prev => prev === assignmentId ? null : assignmentId);
    // Mark as opened (for lazy loading the editor)
    setOpenedAssignments(prev => new Set(prev).add(assignmentId));
  }, []);

  const handleToggleHints = useCallback((assignmentId) => {
    setShowHints(prev => ({ ...prev, [assignmentId]: !prev[assignmentId] }));
  }, []);

  const handleToggleSolution = useCallback((assignmentId) => {
    setShowSolution(prev => ({ ...prev, [assignmentId]: !prev[assignmentId] }));
  }, []);

  const handleCodeChange = useCallback((assignmentId, code) => {
    setUserCode(prev => ({ ...prev, [assignmentId]: code }));
  }, []);

  if (!assignments || assignments.length === 0) {
    return null;
  }

  const completedCount = completedAssignments.length;
  const totalCount = assignments.length;
  const progressPercent = (completedCount / totalCount) * 100;

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
          const hasBeenOpened = openedAssignments.has(assignment.id);
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

                {/* Expanded Content - unmountOnExit saves memory */}
                <Collapse in={isExpanded} timeout="auto" unmountOnExit={false}>
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
                    <Collapse in={hintsVisible} timeout="auto">
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

                  {/* Code Editor - Only load when opened */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Your Solution:
                    </Typography>
                    <Paper variant="outlined" sx={{ overflow: 'hidden' }}>
                      {hasBeenOpened ? (
                        <Suspense fallback={<EditorLoader />}>
                          <CodeEditor
                            initialCode={assignment.starterCode}
                            code={currentCode}
                            language="python"
                            onChange={(code) => handleCodeChange(assignment.id, code)}
                            height="250px"
                          />
                        </Suspense>
                      ) : (
                        <EditorLoader />
                      )}
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

                  {/* Solution - Use lightweight CodeBlock instead of Monaco */}
                  <Collapse in={solutionVisible} timeout="auto">
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" color="success.main" gutterBottom>
                        Solution:
                      </Typography>
                      <Paper
                        variant="outlined"
                        sx={{
                          borderColor: 'success.main',
                          overflow: 'hidden'
                        }}
                      >
                        <CodeBlock code={assignment.solution} language="python" />
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
});

export default PracticeAssignments;
