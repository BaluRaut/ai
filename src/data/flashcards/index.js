// Flashcards Index - Export all flashcard sets
import { pythonBasicsFlashcards } from './python-basics';
import { collectionsFlashcards } from './collections';
import { oopFlashcards } from './oop';
import { algorithmsFlashcards } from './algorithms';
import { advancedPythonFlashcards } from './advanced-python';
import { interviewFlashcards } from './interview-concepts';
import { dataStructuresFlashcards } from './data-structures';

// Individual exports
export {
  pythonBasicsFlashcards,
  collectionsFlashcards,
  oopFlashcards,
  algorithmsFlashcards,
  advancedPythonFlashcards,
  interviewFlashcards,
  dataStructuresFlashcards
};

// Combined flashcard sets with metadata
export const flashcardSets = [
  {
    id: 'python-basics',
    title: 'Python Basics',
    description: 'Variables, data types, operators, strings, loops, functions, and more',
    flashcards: pythonBasicsFlashcards,
    count: pythonBasicsFlashcards.length,
    difficulty: 'beginner',
    icon: '🐍'
  },
  {
    id: 'collections',
    title: 'Collections & Data Structures',
    description: 'Lists, tuples, dictionaries, sets, and collection patterns',
    flashcards: collectionsFlashcards,
    count: collectionsFlashcards.length,
    difficulty: 'intermediate',
    icon: '📦'
  },
  {
    id: 'oop',
    title: 'Object-Oriented Programming',
    description: 'Classes, inheritance, magic methods, design patterns',
    flashcards: oopFlashcards,
    count: oopFlashcards.length,
    difficulty: 'intermediate',
    icon: '🏗️'
  },
  {
    id: 'algorithms',
    title: 'Algorithms & Complexity',
    description: 'Sorting, searching, Big O, recursion, dynamic programming',
    flashcards: algorithmsFlashcards,
    count: algorithmsFlashcards.length,
    difficulty: 'advanced',
    icon: '🧮'
  },
  {
    id: 'advanced-python',
    title: 'Advanced Python',
    description: 'Decorators, generators, context managers, file I/O, error handling',
    flashcards: advancedPythonFlashcards,
    count: advancedPythonFlashcards.length,
    difficulty: 'advanced',
    icon: '🚀'
  },
  {
    id: 'interview-concepts',
    title: 'Interview Concepts',
    description: 'Common coding patterns: two pointers, sliding window, backtracking, etc.',
    flashcards: interviewFlashcards,
    count: interviewFlashcards.length,
    difficulty: 'advanced',
    icon: '💼'
  },
  {
    id: 'data-structures',
    title: 'Data Structures',
    description: 'Stacks, queues, trees, graphs, heaps, hash tables',
    flashcards: dataStructuresFlashcards,
    count: dataStructuresFlashcards.length,
    difficulty: 'intermediate',
    icon: '🌳'
  }
];

// Get all flashcards combined
export const getAllFlashcards = () => [
  ...pythonBasicsFlashcards,
  ...collectionsFlashcards,
  ...oopFlashcards,
  ...algorithmsFlashcards,
  ...advancedPythonFlashcards,
  ...interviewFlashcards,
  ...dataStructuresFlashcards
];

// Get flashcards by category
export const getFlashcardsByCategory = (category) => {
  return getAllFlashcards().filter(card => card.category === category);
};

// Get flashcards by difficulty
export const getFlashcardsByDifficulty = (difficulty) => {
  return getAllFlashcards().filter(card => card.difficulty === difficulty);
};

// Get flashcard set by id
export const getFlashcardSetById = (id) => {
  return flashcardSets.find(set => set.id === id);
};

// Get total count
export const getTotalFlashcardCount = () => getAllFlashcards().length;

// Get all categories
export const getAllCategories = () => {
  const categories = new Set();
  getAllFlashcards().forEach(card => categories.add(card.category));
  return Array.from(categories).sort();
};

// Default export
export default flashcardSets;
