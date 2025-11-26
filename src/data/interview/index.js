// Interview Preparation - Main Index

export { codingChallenges } from './codingChallenges';
export { mlTheoryQuestions } from './mlTheoryQuestions';
export { mlSystemDesign } from './mlSystemDesign';
export { behavioralQuestions } from './behavioralQuestions';

// Combined interview preparation data
export const interviewPreparation = {
  title: 'Interview Preparation',
  description: 'Comprehensive preparation for Data Science and ML interviews',
  
  sections: [
    {
      id: 'coding',
      title: 'Coding Challenges',
      icon: '💻',
      description: 'LeetCode-style problems commonly asked in tech interviews',
      topics: ['Arrays', 'Strings', 'Trees', 'Dynamic Programming', 'Graphs']
    },
    {
      id: 'ml-theory',
      title: 'ML Theory Questions',
      icon: '🧠',
      description: 'Core machine learning concepts and interview questions',
      topics: ['Fundamentals', 'Algorithms', 'Deep Learning', 'Practical ML']
    },
    {
      id: 'system-design',
      title: 'ML System Design',
      icon: '🏗️',
      description: 'Design end-to-end ML systems for real-world problems',
      topics: ['Recommendation Systems', 'Fraud Detection', 'Search Ranking']
    },
    {
      id: 'behavioral',
      title: 'Behavioral Questions',
      icon: '🤝',
      description: 'STAR method answers for data science roles',
      topics: ['Projects', 'Collaboration', 'Leadership', 'Ethics']
    }
  ],

  studyPlan: {
    title: 'Interview Study Plan',
    weeks: [
      {
        week: 1,
        focus: 'Fundamentals',
        tasks: [
          'Review data structures and algorithms basics',
          'Practice 2-3 easy LeetCode problems daily',
          'Review ML fundamentals (bias-variance, cross-validation)',
          'Prepare 3-4 STAR stories'
        ]
      },
      {
        week: 2,
        focus: 'Core Skills',
        tasks: [
          'Practice medium LeetCode problems',
          'Deep dive into your main ML area (NLP, CV, etc.)',
          'Study one system design problem in detail',
          'Mock interview with a friend'
        ]
      },
      {
        week: 3,
        focus: 'Advanced Topics',
        tasks: [
          'Practice hard problems',
          'Review latest ML papers in your area',
          'Practice explaining projects to non-technical people',
          'Study 2-3 more system design problems'
        ]
      },
      {
        week: 4,
        focus: 'Final Prep',
        tasks: [
          'Focus on weak areas',
          'Do full mock interviews',
          'Research the company thoroughly',
          'Prepare questions to ask interviewers'
        ]
      }
    ]
  },

  resources: [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com',
      type: 'Coding Practice',
      description: 'The standard platform for coding interview prep'
    },
    {
      name: 'Designing Machine Learning Systems',
      author: 'Chip Huyen',
      type: 'Book',
      description: 'Excellent for ML system design interviews'
    },
    {
      name: 'Introduction to Statistical Learning',
      author: 'James, Witten, Hastie, Tibshirani',
      type: 'Book',
      description: 'Great for ML theory fundamentals'
    },
    {
      name: 'Grokking the System Design Interview',
      type: 'Course',
      description: 'Good patterns for system design'
    }
  ]
};
