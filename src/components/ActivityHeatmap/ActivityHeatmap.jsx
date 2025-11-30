import { useState, useEffect, useMemo } from 'react';
import { Box, Paper, Typography, Tooltip, useTheme } from '@mui/material';
import { LocalFireDepartment as StreakIcon } from '@mui/icons-material';

const ActivityHeatmap = () => {
  const theme = useTheme();
  const [activityData, setActivityData] = useState({});

  // Load activity data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('learningActivity');
    if (saved) {
      setActivityData(JSON.parse(saved));
    }
  }, []);

  // Generate last 12 weeks of dates
  const weeks = useMemo(() => {
    const result = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 83); // 12 weeks = 84 days

    for (let week = 0; week < 12; week++) {
      const weekDays = [];
      for (let day = 0; day < 7; day++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + (week * 7) + day);
        weekDays.push(date);
      }
      result.push(weekDays);
    }
    return result;
  }, []);

  // Get activity level for a date
  const getActivityLevel = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    const activity = activityData[dateStr] || { topicsCompleted: 0, timeSpent: 0 };
    
    if (activity.topicsCompleted === 0) return 0;
    if (activity.topicsCompleted <= 2) return 1;
    if (activity.topicsCompleted <= 5) return 2;
    if (activity.topicsCompleted <= 8) return 3;
    return 4;
  };

  // Get color based on activity level
  const getColor = (level) => {
    if (level === 0) return theme.palette.mode === 'dark' ? '#2d333b' : '#ebedf0';
    const colors = {
      1: theme.palette.mode === 'dark' ? '#0e4429' : '#9be9a8',
      2: theme.palette.mode === 'dark' ? '#006d32' : '#40c463',
      3: theme.palette.mode === 'dark' ? '#26a641' : '#30a14e',
      4: theme.palette.mode === 'dark' ? '#39d353' : '#216e39',
    };
    return colors[level] || colors[1];
  };

  // Calculate current streak
  const currentStreak = useMemo(() => {
    let streak = 0;
    const today = new Date();
    
    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      if (activityData[dateStr]?.topicsCompleted > 0) {
        streak++;
      } else if (i > 0) {
        break;
      }
    }
    return streak;
  }, [activityData]);

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6">Learning Activity</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <StreakIcon color="warning" />
          <Typography variant="h6" color="warning.main">
            {currentStreak} day streak
          </Typography>
        </Box>
      </Box>

      {/* Month labels */}
      <Box sx={{ display: 'flex', mb: 1, ml: '30px' }}>
        {weeks.map((week, weekIdx) => {
          const firstDay = week[0];
          const showMonth = firstDay.getDate() <= 7 || weekIdx === 0;
          return (
            <Box key={weekIdx} sx={{ flex: 1, minWidth: 0 }}>
              {showMonth && (
                <Typography variant="caption" color="text.secondary">
                  {monthNames[firstDay.getMonth()]}
                </Typography>
              )}
            </Box>
          );
        })}
      </Box>

      {/* Heatmap grid */}
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        {/* Day labels */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mr: 0.5 }}>
          {dayNames.map((day, idx) => (
            <Box key={idx} sx={{ height: 14, display: 'flex', alignItems: 'center' }}>
              {idx % 2 === 1 && (
                <Typography variant="caption" sx={{ fontSize: '9px', color: 'text.secondary' }}>
                  {day}
                </Typography>
              )}
            </Box>
          ))}
        </Box>

        {/* Weeks */}
        {weeks.map((week, weekIdx) => (
          <Box key={weekIdx} sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, flex: 1 }}>
            {week.map((date, dayIdx) => {
              const level = getActivityLevel(date);
              const dateStr = date.toISOString().split('T')[0];
              const activity = activityData[dateStr] || { topicsCompleted: 0, timeSpent: 0 };
              
              return (
                <Tooltip
                  key={dayIdx}
                  title={
                    <Box>
                      <Typography variant="caption" display="block">
                        {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </Typography>
                      <Typography variant="caption" display="block">
                        {activity.topicsCompleted} topics completed
                      </Typography>
                      {activity.timeSpent > 0 && (
                        <Typography variant="caption" display="block">
                          {Math.round(activity.timeSpent / 60)} minutes
                        </Typography>
                      )}
                    </Box>
                  }
                  arrow
                >
                  <Box
                    sx={{
                      width: '100%',
                      minWidth: 14,
                      height: 14,
                      bgcolor: getColor(level),
                      borderRadius: 0.5,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                        boxShadow: 1,
                      },
                    }}
                  />
                </Tooltip>
              );
            })}
          </Box>
        ))}
      </Box>

      {/* Legend */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2, justifyContent: 'flex-end' }}>
        <Typography variant="caption" color="text.secondary">Less</Typography>
        {[0, 1, 2, 3, 4].map((level) => (
          <Box
            key={level}
            sx={{
              width: 14,
              height: 14,
              bgcolor: getColor(level),
              borderRadius: 0.5,
            }}
          />
        ))}
        <Typography variant="caption" color="text.secondary">More</Typography>
      </Box>
    </Paper>
  );
};

export default ActivityHeatmap;
