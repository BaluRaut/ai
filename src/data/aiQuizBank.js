import { aiQuizBank as originalBank } from './aiQuizBankOriginal.js';
import { aiQuizBankExpansion6 } from './aiQuizBankExpansion6.js';
import { aiQuizBankExpansion7 } from './aiQuizBankExpansion7.js';
import { aiQuizBankExpansion8 } from './aiQuizBankExpansion8.js';
import { aiQuizBankExpansion9a } from './aiQuizBankExpansion9a.js';
import { aiQuizBankExpansion9b } from './aiQuizBankExpansion9b.js';
import { aiQuizBankExpansion10 } from './aiQuizBankExpansion10.js';
import { aiQuizBankExpansion11 } from './aiQuizBankExpansion11.js';
import { aiQuizBankExpansion12 } from './aiQuizBankExpansion12.js';
import { aiQuizBankExpansion13 } from './aiQuizBankExpansion13.js';
import { aiQuizBankExpansion14a } from './aiQuizBankExpansion14a.js';
import { aiQuizBankExpansion14b } from './aiQuizBankExpansion14b.js';

// Merge all quiz banks
export const aiQuizBank = {
  ...originalBank,
  deepLearningAdvanced: { 
    advancedConcepts: aiQuizBankExpansion6 
  },
  cloudAndHistory: { 
    cloudAndTools: aiQuizBankExpansion7 
  },
  nluCvLogic: { 
    advancedTopics: aiQuizBankExpansion8 
  },
  ethicsRobotics: { 
    ethicsAndRobotics: aiQuizBankExpansion9a 
  },
  edgeFuture: { 
    edgeAndFuture: aiQuizBankExpansion9b 
  },
  rlGenAI: {
    rlAndGenAI: aiQuizBankExpansion10
  },
  industryAI: {
    industryApplications: aiQuizBankExpansion11
  },
  mathForAI: {
    mathematics: aiQuizBankExpansion12
  },
  pythonForAI: {
    pythonTools: aiQuizBankExpansion13
  },
  mlopsDeployment: {
    mlopsAndDeployment: [...aiQuizBankExpansion14a, ...aiQuizBankExpansion14b]
  }
};

// Helper functions
export const getAIQuestionsByCategory = (category) => {
  const questions = [];
  Object.values(aiQuizBank).forEach(section => {
    if (section[category]) {
      questions.push(...section[category]);
    }
  });
  return questions;
};

export const getAIQuestionsByDifficulty = (difficulty) => {
  const questions = [];
  Object.values(aiQuizBank).forEach(section => {
    Object.values(section).forEach(category => {
      questions.push(...category.filter(q => q.difficulty === difficulty));
    });
  });
  return questions;
};

export const getRandomAIQuestions = (count) => {
  const allQuestions = [];
  Object.values(aiQuizBank).forEach(section => {
    Object.values(section).forEach(category => {
      allQuestions.push(...category);
    });
  });
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getAIQuestionCount = () => {
  let count = 0;
  Object.values(aiQuizBank).forEach(section => {
    Object.values(section).forEach(category => {
      count += category.length;
    });
  });
  return count;
};

export default aiQuizBank;
