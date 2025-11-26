import { useMemo, useState } from 'react';
import { courseData } from '../data/courseContent';
import { aiLearningPaths } from '../data/ai-courses/aiLearningPaths';

/**
 * Global search hook - Search across all topics, courses, and content
 * Searches in: title, description, overview, keyPoints, useCases, dos, donts, bestPractices
 */
export const useGlobalSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Get excerpt around the query match - defined before useMemo
  const getExcerpt = (text, query, contextLength = 80) => {
    if (!text) return '';
    const lowerText = text.toLowerCase();
    const index = lowerText.indexOf(query.toLowerCase());
    
    if (index === -1) return text.substring(0, contextLength) + '...';
    
    const start = Math.max(0, index - contextLength / 2);
    const end = Math.min(text.length, index + query.length + contextLength / 2);
    
    let excerpt = text.substring(start, end);
    if (start > 0) excerpt = '...' + excerpt;
    if (end < text.length) excerpt = excerpt + '...';
    
    return excerpt;
  };

  // Calculate search results
  const searchResults = useMemo(() => {
    if (!searchQuery || searchQuery.trim().length < 2) {
      return [];
    }

    const query = searchQuery.toLowerCase().trim();
    const results = [];

    // Search across all courses
    Object.entries(courseData).forEach(([pathId, course]) => {
      const path = aiLearningPaths.find(p => p.id === pathId);
      
      if (!course.topics) return;

      course.topics.forEach(topic => {
        let score = 0;
        const matches = [];

        // Search in title (highest weight)
        if (topic.title?.toLowerCase().includes(query)) {
          score += 10;
          matches.push({ field: 'title', text: topic.title });
        }

        // Search in description (high weight)
        if (topic.description?.toLowerCase().includes(query)) {
          score += 8;
          matches.push({ field: 'description', text: topic.description });
        }

        // Search in overview
        if (topic.overview?.toLowerCase().includes(query)) {
          score += 5;
          matches.push({ field: 'overview', text: getExcerpt(topic.overview, query) });
        }

        // Search in keyPoints
        topic.keyPoints?.forEach((point, idx) => {
          if (point.toLowerCase().includes(query)) {
            score += 3;
            matches.push({ field: 'keyPoint', text: point });
          }
        });

        // Search in useCases
        topic.useCases?.forEach(useCase => {
          if (useCase.title?.toLowerCase().includes(query) || 
              useCase.description?.toLowerCase().includes(query) ||
              useCase.example?.toLowerCase().includes(query)) {
            score += 2;
            matches.push({ field: 'useCase', text: useCase.title });
          }
        });

        // Search in dos/donts/bestPractices
        const practices = [
          ...(topic.dos || []),
          ...(topic.donts || []),
          ...(topic.bestPractices || [])
        ];
        practices.forEach(practice => {
          if (practice.toLowerCase().includes(query)) {
            score += 1;
            matches.push({ field: 'practice', text: practice });
          }
        });

        // If we have matches, add to results
        if (score > 0) {
          results.push({
            topic,
            pathId,
            pathTitle: path?.title || pathId,
            pathIcon: path?.icon || '📚',
            pathColor: path?.color || '#666',
            score,
            matches: matches.slice(0, 3) // Limit to top 3 matches
          });
        }
      });
    });

    // Sort by relevance score (descending)
    return results.sort((a, b) => b.score - a.score);
  }, [searchQuery]);

  // Highlight query in text
  const highlightText = (text, query) => {
    if (!text || !query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  // Get suggestions (popular searches, recent topics)
  const getSearchSuggestions = () => {
    return [
      'neural networks',
      'machine learning',
      'deep learning',
      'python',
      'transformers',
      'LLM',
      'RAG',
      'deployment',
      'CNN',
      'NLP',
      'classification',
      'regression'
    ];
  };

  // Filter results by course
  const filterByCourse = (results, courseId) => {
    if (!courseId) return results;
    return results.filter(r => r.pathId === courseId);
  };

  // Filter results by difficulty
  const filterByDifficulty = (results, difficulty) => {
    if (!difficulty) return results;
    return results.filter(r => r.topic.difficulty?.toLowerCase() === difficulty.toLowerCase());
  };

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    highlightText,
    getSearchSuggestions,
    filterByCourse,
    filterByDifficulty,
    hasResults: searchResults.length > 0,
    resultCount: searchResults.length
  };
};

export default useGlobalSearch;
