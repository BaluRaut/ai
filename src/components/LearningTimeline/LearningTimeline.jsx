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
import { courseData } from '../../data/courseContent';

const LearningTimeline = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { pathId, topicId } = useParams();
  const { isTopicComplete } = useProgress();
  const [expandedPath, setExpandedPath] = useState(pathId || null);

  // Get topics for a course
  const getCourseTopics = (courseId) => {
    return courseData[courseId]?.topics || [];
  };

  // Calculate course statistics
  const getCourseStats = (courseId) => {
    const topics = getCourseTopics(courseId);
    if (!topics.length) return { total: 0, completed: 0, inProgress: 0, percentage: 0 };

    const completed = topics.filter(topic => isTopicComplete(topic.id)).length;
    // We don't track "in progress" (viewed but not complete) in the simple context yet, 
    // so we'll assume 0 for now or check if it's the current topic
    const inProgress = 0; 
    
    return {
      total: topics.length,
      completed,
      inProgress,
      percentage: (completed / topics.length) * 100
    };
  };

  // Get status icon
  const getStatusIcon = (courseId, topic, index) => {
    const isCompleted = isTopicComplete(topic.id);
    const isCurrent = pathId === courseId && topicId === topic.id;

    if (isCompleted) {
      return <CheckCircle color="success" />;
    } else if (isCurrent) {
      return <PlayCircle color="primary" />;
    } else if (index === 0 || isTopicComplete(getCourseTopics(courseId)[index - 1]?.id)) {
      // First topic or previous topic completed = unlocked
      return <RadioButtonUnchecked color="action" />;
    } else {
      return <Lock color="disabled" />;
    }
  };

  // Check if topic is locked
  const isTopicLocked = (courseId, index) => {
    if (index === 0) return false;
    const topics = getCourseTopics(courseId);
    const previousTopic = topics[index - 1];
    return !isTopicComplete(previousTopic?.id);
  };

  // Navigate to topic
  const handleTopicClick = (courseId, topic) => {
    const topics = getCourseTopics(courseId);
    const index = topics.findIndex(t => t.id === topic.id);
    
    if (isTopicLocked(courseId, index)) {
      return; // Don't navigate if locked
    }
    navigate(`/learn/${courseId}/${topic.id}`);
    if (isMobile) {
      onClose();
    }
  };

  // Calculate overall progress
  const overallStats = aiLearningPaths.reduce((acc, course) => {
    const stats = getCourseStats(course.id);
    return {
      totalTopics: acc.totalTopics + stats.total,
      completedTopics: acc.completedTopics + stats.completed,
      inProgressTopics: acc.inProgressTopics + stats.inProgress
    };
  }, { totalTopics: 0, completedTopics: 0, inProgressTopics: 0 });

  const overallPercentage = overallStats.totalTopics > 0 
    ? (overallStats.completedTopics / overallStats.totalTopics) * 100 
    : 0;

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
              const stats = getCourseStats(course.id);
              const isExpanded = expandedPath === course.id;
              const isCurrentCourse = pathId === course.id;
              const topics = getCourseTopics(course.id);

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
                          {topics.map((topic, i) => {
                            const isCurrentTopic = pathId === course.id && topicId === topic.id;
                            const locked = isTopicLocked(course.id, i);

                            return (
                              <Tooltip 
                                key={topic.id} 
                                title={locked ? 'Complete previous topic to unlock' : 'Click to open'}
                                placement="right"
                              >
                                <Box
                                  onClick={() => handleTopicClick(course.id, topic)}
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
                                  {getStatusIcon(course.id, topic, i)}
                                  <Typography variant="caption" sx={{ flex: 1 }}>
                                    {topic.title}
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
              <Typography variant="caption">Current</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <RadioButtonUnchecked fontSize="small" color="action" />
              <Typography variant="caption">Available</Typography>
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
