// English translations - index file
import common from './common.json';
import home from './home.json';
import courses from './courses.json';
import quiz from './quiz.json';
import interview from './interview.json';
import study from './study.json';
import legal from './legal.json';

// Topic-specific content files
import contentFundamentals from './content-fundamentals.json';
import contentMachineLearning from './content-machine-learning.json';
import contentDeepLearning from './content-deep-learning.json';
import contentAdvancedAI from './content-advanced-ai.json';
import contentSpecializations from './content-specializations.json';
import contentDataVisualization from './content-data-visualization.json';
import contentProfessionalPractices from './content-professional-practices.json';

const en = {
  ...common,
  home,
  ...courses,
  quiz,
  interview,
  study,
  ...legal
};

// Add content separately to ensure it's not overwritten by spread operators
en.content = {
  fundamentals: contentFundamentals,
  'machine-learning': contentMachineLearning,
  'deep-learning': contentDeepLearning,
  'advanced-ai': contentAdvancedAI,
  specializations: contentSpecializations,
  'data-visualization': contentDataVisualization,
  'professional-practices': contentProfessionalPractices
};

export default en;
