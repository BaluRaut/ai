// Practice Assignments Index
import { introPythonAssignments } from './intro-python';
import { variablesAssignments } from './variables-types';
import { operatorsAssignments } from './operators';
import { conditionalsAssignments } from './conditionals';
import { loopsAssignments } from './loops';
import { functionsAssignments } from './functions';
import { listsAssignments } from './lists';
import { dictionariesAssignments } from './dictionaries';
import { stringsAssignments } from './strings';
import { tuplesAssignments } from './tuples';
import { setsAssignments } from './sets';
import { comprehensionsAssignments } from './comprehensions';
import { fileHandlingAssignments } from './file-handling';
import { interviewProblemsAssignments } from './interview-problems';
import { realWorldProjectsAssignments } from './real-world-projects';
import { stringAlgorithmsAssignments } from './string-algorithms';
import { dataStructuresAssignments } from './data-structures';
// New deep-scan additions
import { recursionDPAssignments } from './recursion-dp';
import { errorHandlingAssignments } from './error-handling';
import { oopDeepAssignments } from './oop-deep';
import { sortingSearchingAssignments } from './sorting-searching';

export const practiceAssignments = {
  // Core Python Topics
  'intro-python': introPythonAssignments,
  'variables-types': variablesAssignments,
  'variables-datatypes': variablesAssignments,
  'operators': operatorsAssignments,
  'conditionals': conditionalsAssignments,
  'control-flow-basics': conditionalsAssignments,
  'loops': loopsAssignments,
  'loops-for-while': loopsAssignments,
  'functions': functionsAssignments,
  
  // Data Structures
  'lists': listsAssignments,
  'lists-comprehensive': listsAssignments,
  'dictionaries': dictionariesAssignments,
  'dictionaries-comprehensive': dictionariesAssignments,
  'strings': stringsAssignments,
  'strings-comprehensive': stringsAssignments,
  'tuples': tuplesAssignments,
  'tuples-comprehensive': tuplesAssignments,
  'sets': setsAssignments,
  'sets-comprehensive': setsAssignments,
  'comprehensions': comprehensionsAssignments,
  'file-handling': fileHandlingAssignments,
  
  // OOP & Advanced Python
  'oop-classes': oopDeepAssignments,
  'oop-basics': oopDeepAssignments,
  'advanced-oop': oopDeepAssignments,
  'classes-objects': oopDeepAssignments,
  'error-handling': errorHandlingAssignments,
  'exceptions': errorHandlingAssignments,
  'decorators': [...functionsAssignments.slice(-2), ...realWorldProjectsAssignments.slice(0, 2)],
  
  // Algorithms & Problem Solving
  'recursion': recursionDPAssignments,
  'recursion-dp': recursionDPAssignments,
  'dynamic-programming': recursionDPAssignments,
  'sorting': sortingSearchingAssignments,
  'searching': sortingSearchingAssignments,
  'algorithms': sortingSearchingAssignments,
  
  // Interview & Job Ready
  'interview-problems': interviewProblemsAssignments,
  'interview-prep': interviewProblemsAssignments,
  'real-world-projects': realWorldProjectsAssignments,
  'projects': realWorldProjectsAssignments,
  'string-algorithms': stringAlgorithmsAssignments,
  'data-structures': dataStructuresAssignments,
  'data-structures-advanced': dataStructuresAssignments,
  
  // Map regex to string algorithms
  'regex': stringAlgorithmsAssignments,
  'regular-expressions': stringAlgorithmsAssignments,
  'iterators-generators': realWorldProjectsAssignments
};

export const getAssignmentsForTopic = (topicId) => {
  return practiceAssignments[topicId] || [];
};

export const getTopicsWithAssignments = () => {
  return Object.keys(practiceAssignments);
};

// Special collections for focused practice
export const getInterviewProblems = () => interviewProblemsAssignments;
export const getRealWorldProjects = () => realWorldProjectsAssignments;
export const getRecursionDP = () => recursionDPAssignments;
export const getSortingSearching = () => sortingSearchingAssignments;
export const getOOPDeep = () => oopDeepAssignments;
export const getErrorHandling = () => errorHandlingAssignments;

export const getAllJobReadyProblems = () => [
  ...interviewProblemsAssignments,
  ...realWorldProjectsAssignments,
  ...stringAlgorithmsAssignments,
  ...dataStructuresAssignments,
  ...recursionDPAssignments,
  ...sortingSearchingAssignments,
  ...oopDeepAssignments,
  ...errorHandlingAssignments
];

// Get count of all assignments
export const getTotalAssignmentCount = () => {
  const allUnique = new Set();
  Object.values(practiceAssignments).flat().forEach(a => allUnique.add(a.id));
  return allUnique.size;
};

export default practiceAssignments;
