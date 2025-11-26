// Marathi translations - index file
import common from './common.json';
import home from './home.json';
import courses from './courses.json';
import quiz from './quiz.json';
import interview from './interview.json';
import study from './study.json';
import legal from './legal.json';

// Topic-specific content files
import contentDataVisualization from './content-data-visualization.json';
import contentProfessionalPractices from './content-professional-practices.json';

const mr = {
  ...common,
  home,
  ...courses,
  quiz,
  interview,
  study,
  content: {
    dataVisualization: contentDataVisualization,
    professionalPractices: contentProfessionalPractices
  },
  ...legal
};

export default mr;
