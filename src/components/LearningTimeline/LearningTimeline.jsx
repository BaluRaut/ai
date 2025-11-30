import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Drawer,
  IconButton,
  Chip,
  LinearProgress,
  Collapse,
  Tooltip,
  useTheme,
  useMediaQuery,
  Fab
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import {
  CheckCircle,
  RadioButtonUnchecked,
  PlayCircle,
  Lock,
  ExpandMore,
  ExpandLess,
  Timeline as TimelineIcon,
  Close
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';
import { aiLearningPaths } from '../../data/ai-courses/aiLearningPaths';

const LearningTimeline = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { pathId, topicId } = useParams();
  const { progress } = useProgress();
  const [expandedPath, setExpandedPath] = useState(pathId || null);

  // Calculate course statistics
  const getCourseStats = (courseId, courseTopics) => {
    const topicIds = Array.from({ length: courseTopics }, (_, i) => `${i + 1}`);
    const completed = topicIds.filter(id => progress[`${courseId}-${id}`]?.completed).length;
    const inProgress = topicIds.filter(id => 
      progress[`${courseId}-${id}`]?.viewed && !progress[`${courseId}-${id}`]?.completed
    ).length;
    
    return {
      total: courseTopics,
      completed,
      inProgress,
      percentage: (completed / courseTopics) * 100
    };
  };

  // Get status icon
  const getStatusIcon = (courseId, topicIndex, stats) => {
    const topicKey = `${courseId}-${topicIndex + 1}`;
    const topicProgress = progress[topicKey];

    if (topicProgress?.completed) {
      return <CheckCircle color="success" />;
    } else if (topicProgress?.viewed) {
      return <PlayCircle color="primary" />;
    } else if (topicIndex === 0 || progress[`${courseId}-${topicIndex}`]?.completed) {
      // First topic or previous topic completed = unlocked
      return <RadioButtonUnchecked color="action" />;
    } else {
      return <Lock color="disabled" />;
    }
  };

  // Get dot color
  const getDotColor = (courseId, topicIndex) => {
    const topicKey = `${courseId}-${topicIndex + 1}`;
    const topicProgress = progress[topicKey];

    if (topicProgress?.completed) return 'success';
    if (topicProgress?.viewed) return 'primary';
    if (topicIndex === 0 || progress[`${courseId}-${topicIndex}`]?.completed) return 'grey';
    return 'grey';
  };

  // Check if topic is locked
  const isTopicLocked = (courseId, topicIndex) => {
    if (topicIndex === 0) return false;
    const previousTopicKey = `${courseId}-${topicIndex}`;
    return !progress[previousTopicKey]?.completed;
  };

  // Navigate to topic
  const handleTopicClick = (courseId, topicIndex) => {
    if (isTopicLocked(courseId, topicIndex)) {
      return; // Don't navigate if locked
    }
    navigate(`/learn/${courseId}/${topicIndex + 1}`);
    if (isMobile) {
      onClose();
    }
  };

  // Calculate overall progress
  const overallStats = aiLearningPaths.reduce((acc, course) => {
    const stats = getCourseStats(course.id, course.topics);
    return {
      totalTopics: acc.totalTopics + stats.total,
      completedTopics: acc.completedTopics + stats.completed,
      inProgressTopics: acc.inProgressTopics + stats.inProgress
    };
  }, { totalTopics: 0, completedTopics: 0, inProgressTopics: 0 });

  const overallPercentage = (overallStats.completedTopics / overallStats.totalTopics) * 100;

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: isMobile ? '90%' : 380,
          maxWidth: '100%',
          bgcolor: 'background.default'
        }
      }}
    >
      <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TimelineIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>
              Learning Timeline
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        </Box>

        {/* Overall Progress */}
        <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Overall Progress
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
            <Chip 
              label={`${overallStats.completedTopics}/${overallStats.totalTopics} Complete`} 
              color="success" 
              size="small" 
            />
            {overallStats.inProgressTopics > 0 && (
              <Chip 
                label={`${overallStats.inProgressTopics} In Progress`} 
                color="primary" 
                size="small" 
              />
            )}
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={overallPercentage} 
            sx={{ height: 8, borderRadius: 4 }}
          />
          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
            {overallPercentage.toFixed(1)}% Complete
          </Typography>
        </Paper>

        {/* Courses Timeline */}
        <Box sx={{ flex: 1, overflow: 'auto', pr: 1 }}>
          <Timeline position="right" sx={{ p: 0, m: 0 }}>
            {aiLearningPaths.map((course, courseIndex) => {
              const stats = getCourseStats(course.id, course.topics);
              const isExpanded = expandedPath === course.id;
              const isCurrentCourse = pathId === course.id;

              return (
                <TimelineItem key={course.id} sx={{ minHeight: isExpanded ? 'auto' : '100px' }}>
                  <TimelineOppositeContent sx={{ flex: 0.2, py: 1, px: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                      {course.estimatedHours}h
                    </Typography>
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineDot 
                      color={stats.completed === stats.total ? 'success' : stats.completed > 0 ? 'primary' : 'grey'}
                      sx={{ boxShadow: isCurrentCourse ? `0 0 0 4px ${theme.palette.primary.light}` : 'none' }}
                    >
                      {course.icon}
                    </TimelineDot>
                    {courseIndex < aiLearningPaths.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>

                  <TimelineContent sx={{ py: 1, px: 2 }}>
                    <Paper 
                      elevation={isCurrentCourse ? 3 : 1}
                      sx={{ 
                        p: 1.5,
                        cursor: 'pointer',
                        borderLeft: isCurrentCourse ? `4px solid ${theme.palette.primary.main}` : 'none',
                        '&:hover': { bgcolor: 'action.hover' }
                      }}
                      onClick={() => setExpandedPath(isExpanded ? null : course.id)}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {course.title}
                        </Typography>
                        <IconButton size="small">
                          {isExpanded ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                      </Box>

                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                        {course.description}
                      </Typography>

                      <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 1 }}>
                        <Chip 
                          label={`${stats.completed}/${stats.total}`} 
                          size="small" 
                          color={stats.completed === stats.total ? 'success' : 'default'}
                        />
                        <Chip 
                          label={course.difficulty} 
                          size="small" 
                          variant="outlined"
                        />
                      </Box>

                      <LinearProgress 
                        variant="determinate" 
                        value={stats.percentage} 
                        sx={{ height: 4, borderRadius: 2 }}
                      />

                      {/* Topics List */}
                      <Collapse in={isExpanded}>
                        <Box sx={{ mt: 2 }}>
                          {Array.from({ length: course.topics }, (_, i) => {
                            const topicNum = i + 1;
                            const isCurrentTopic = pathId === course.id && topicId === `${topicNum}`;
                            const locked = isTopicLocked(course.id, i);

                            return (
                              <Tooltip 
                                key={i} 
                                title={locked ? 'Complete previous topic to unlock' : 'Click to open'}
                                placement="right"
                              >
                                <Box
                                  onClick={() => handleTopicClick(course.id, i)}
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    p: 1,
                                    mb: 0.5,
                                    borderRadius: 1,
                                    cursor: locked ? 'not-allowed' : 'pointer',
                                    bgcolor: isCurrentTopic ? 'primary.light' : 'transparent',
                                    opacity: locked ? 0.5 : 1,
                                    '&:hover': locked ? {} : { bgcolor: 'action.hover' }
                                  }}
                                >
                                  {getStatusIcon(course.id, i, stats)}
                                  <Typography variant="caption" sx={{ flex: 1 }}>
                                    Topic {topicNum}
                                  </Typography>
                                </Box>
                              </Tooltip>
                            );
                          })}
                        </Box>
                      </Collapse>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Box>

        {/* Footer Stats */}
        <Paper elevation={2} sx={{ p: 1.5, mt: 2 }}>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            Legend:
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CheckCircle fontSize="small" color="success" />
              <Typography variant="caption">Complete</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PlayCircle fontSize="small" color="primary" />
              <Typography variant="caption">In Progress</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <RadioButtonUnchecked fontSize="small" color="action" />
              <Typography variant="caption">Not Started</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Lock fontSize="small" color="disabled" />
              <Typography variant="caption">Locked</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Drawer>
  );
};

// Floating Action Button to open timeline
export const TimelineFAB = ({ onClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Fab
      color="secondary"
      onClick={onClick}
      sx={{
        position: 'fixed',
        bottom: isMobile ? 16 : 24,
        left: isMobile ? 16 : 24,
        zIndex: 1000
      }}
    >
      <TimelineIcon />
    </Fab>
  );
};

export default LearningTimeline;
