// AI Learning Platform - Course Content Structure
// Progressive learning from AI fundamentals to specializations

import { aiLearningPaths } from './ai-courses/aiLearningPaths.js';
import { mathFoundations } from './ai-courses/math-foundations.js';
import { fundamentals } from './ai-courses/fundamentals.js';
import { machineLearning } from './ai-courses/machine-learning.js';
import { deepLearning } from './ai-courses/deep-learning.js';
import { advancedAI } from './ai-courses/advanced-ai.js';
import { specializations } from './ai-courses/specializations.js';
import { dataVisualization } from './ai-courses/data-visualization.js';
import { professionalPractices } from './ai-courses/professional-practices.js';

// Re-export learning paths configuration
export { aiLearningPaths as learningPaths };

// Aggregate all course data
export const courseData = {
  'math-foundations': mathFoundations,
  fundamentals,
  'machine-learning': machineLearning,
  'deep-learning': deepLearning,
  'advanced-ai': advancedAI,
  specializations,
  'data-visualization': dataVisualization,
  'professional-practices': professionalPractices,
};

