import { aiQuizBank, getAIQuestionCount } from '../src/data/aiQuizBank.js';

console.log('Total Questions:', getAIQuestionCount());

// Check specific sections
console.log('Deep Learning Advanced:', aiQuizBank.deepLearningAdvanced?.advancedConcepts?.length);
console.log('Cloud & History:', aiQuizBank.cloudAndHistory?.cloudAndTools?.length);
console.log('NLU/CV/Logic:', aiQuizBank.nluCvLogic?.advancedTopics?.length);
console.log('Ethics/Robotics:', aiQuizBank.ethicsRobotics?.ethicsAndRobotics?.length);
console.log('Edge/Future:', aiQuizBank.edgeFuture?.edgeAndFuture?.length);
