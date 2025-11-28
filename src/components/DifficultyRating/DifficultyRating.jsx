import React from 'react';
import { Box, Chip, Tooltip, Typography } from '@mui/material';
import {
  School as BeginnerIcon,
  TrendingUp as IntermediateIcon,
  Psychology as AdvancedIcon,
  Star as StarIcon,
} from '@mui/icons-material';

const difficultyConfig = {
  beginner: {
    label: 'Beginner',
    color: 'success',
    icon: <BeginnerIcon fontSize="small" />,
    description: 'Perfect for those new to databases. Covers fundamental concepts.',
    stars: 1,
  },
  intermediate: {
    label: 'Intermediate',
    color: 'warning',
    icon: <IntermediateIcon fontSize="small" />,
    description: 'Requires basic database knowledge. Introduces more complex topics.',
    stars: 2,
  },
  advanced: {
    label: 'Advanced',
    color: 'error',
    icon: <AdvancedIcon fontSize="small" />,
    description: 'For experienced developers. Covers complex and specialized topics.',
    stars: 3,
  },
};

/**
 * DifficultyRating Component
 * Displays a difficulty level indicator for topics
 * 
 * @param {string} difficulty - 'beginner', 'intermediate', or 'advanced'
 * @param {string} variant - 'chip', 'badge', 'stars', or 'text'
 * @param {boolean} showTooltip - Whether to show description tooltip
 * @param {string} size - 'small' or 'medium'
 */
const DifficultyRating = ({ 
  difficulty = 'beginner', 
  variant = 'chip',
  showTooltip = true,
  size = 'small',
}) => {
  const config = difficultyConfig[difficulty] || difficultyConfig.beginner;

  const renderStars = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
      {[1, 2, 3].map((star) => (
        <StarIcon
          key={star}
          sx={{
            fontSize: size === 'small' ? 16 : 20,
            color: star <= config.stars ? `${config.color}.main` : 'grey.400',
          }}
        />
      ))}
    </Box>
  );

  const renderChip = () => (
    <Chip
      icon={config.icon}
      label={config.label}
      color={config.color}
      size={size}
      variant="outlined"
    />
  );

  const renderBadge = () => (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        px: 1,
        py: 0.25,
        borderRadius: 1,
        bgcolor: `${config.color}.main`,
        color: 'white',
        fontSize: size === 'small' ? '0.75rem' : '0.875rem',
      }}
    >
      {config.icon}
      <span>{config.label}</span>
    </Box>
  );

  const renderText = () => (
    <Typography
      variant={size === 'small' ? 'caption' : 'body2'}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        color: `${config.color}.main`,
        fontWeight: 500,
      }}
    >
      {config.icon}
      {config.label}
    </Typography>
  );

  const content = () => {
    switch (variant) {
      case 'stars':
        return renderStars();
      case 'badge':
        return renderBadge();
      case 'text':
        return renderText();
      case 'chip':
      default:
        return renderChip();
    }
  };

  if (showTooltip) {
    return (
      <Tooltip title={config.description} arrow>
        <span>{content()}</span>
      </Tooltip>
    );
  }

  return content();
};

/**
 * DifficultyFilter Component
 * Filter buttons for selecting difficulty levels
 */
export const DifficultyFilter = ({ 
  selected = [], 
  onChange,
  showAll = true,
}) => {
  const handleToggle = (diff) => {
    if (selected.includes(diff)) {
      onChange(selected.filter((d) => d !== diff));
    } else {
      onChange([...selected, diff]);
    }
  };

  const handleSelectAll = () => {
    if (selected.length === 3) {
      onChange([]);
    } else {
      onChange(['beginner', 'intermediate', 'advanced']);
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {showAll && (
        <Chip
          label="All Levels"
          onClick={handleSelectAll}
          color={selected.length === 3 || selected.length === 0 ? 'primary' : 'default'}
          variant={selected.length === 3 || selected.length === 0 ? 'filled' : 'outlined'}
          size="small"
        />
      )}
      {Object.entries(difficultyConfig).map(([key, config]) => (
        <Chip
          key={key}
          icon={config.icon}
          label={config.label}
          onClick={() => handleToggle(key)}
          color={selected.includes(key) ? config.color : 'default'}
          variant={selected.includes(key) ? 'filled' : 'outlined'}
          size="small"
        />
      ))}
    </Box>
  );
};

/**
 * DifficultyLegend Component
 * Shows explanation of all difficulty levels
 */
export const DifficultyLegend = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
    {Object.entries(difficultyConfig).map(([key, config]) => (
      <Box key={key} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Chip
          icon={config.icon}
          label={config.label}
          color={config.color}
          size="small"
          variant="outlined"
        />
        <Typography variant="caption" color="text.secondary">
          {config.description}
        </Typography>
      </Box>
    ))}
  </Box>
);

/**
 * DifficultyProgress Component
 * Shows user progress across difficulty levels
 */
export const DifficultyProgress = ({ progress = {} }) => {
  // progress = { beginner: { completed: 5, total: 10 }, ... }
  
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      {Object.entries(difficultyConfig).map(([key, config]) => {
        const data = progress[key] || { completed: 0, total: 0 };
        const percentage = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0;
        
        return (
          <Box
            key={key}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 1.5,
              borderRadius: 2,
              bgcolor: 'background.paper',
              minWidth: 100,
            }}
          >
            {config.icon}
            <Typography variant="caption" color="text.secondary">
              {config.label}
            </Typography>
            <Typography variant="h6" color={`${config.color}.main`}>
              {percentage}%
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {data.completed}/{data.total} topics
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default DifficultyRating;
