// Practice Assignments - Index (combines all modules)

import { fundamentalsAssignments } from './fundamentals';
import { machineLearningAssignments } from './machineLearning';
import { deepLearningAssignments } from './deepLearning';
import { advancedAIAssignments } from './advancedAI';
import { specializationAssignments } from './specializations';

// Combine all assignments into single export
export const practiceAssignments = {
  ...fundamentalsAssignments,
  ...machineLearningAssignments,
  ...deepLearningAssignments,
  ...advancedAIAssignments,
  ...specializationAssignments
};

// Export individual modules for granular imports
export {
  fundamentalsAssignments,
  machineLearningAssignments,
  deepLearningAssignments,
  advancedAIAssignments,
  specializationAssignments
};
