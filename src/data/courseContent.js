// Modular course content structure
// Each learning path is now in its own file for better maintainability

import { learningPaths } from './courses/learningPaths.js';
import { beginner } from './courses/beginner.js';
import { intermediate } from './courses/intermediate.js';
import { advanced } from './courses/advanced.js';
import { professional } from './courses/professional.js';
import { dataScience } from './courses/dataScience.js';

// Re-export learning paths configuration
export { learningPaths };

// Aggregate all course data
export const courseData = {
  beginner,
  intermediate,
  advanced,
  professional,
  dataScience,
};
