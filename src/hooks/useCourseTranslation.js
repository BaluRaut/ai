import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Custom hook to load course content translations
 * Automatically switches between English content and Marathi translations
 * based on current language setting
 */
export function useCourseTranslation() {
  const { i18n } = useTranslation();
  const [translations, setTranslations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only load translations for Marathi
    if (i18n.language === 'mr') {
      setLoading(true);
      setError(null);

      // Dynamically import the Marathi translation file
      import('../../translation-batch/course-content-mr.json')
        .then((module) => {
          setTranslations(module.default || module);
          setLoading(false);
        })
        .catch((err) => {
          console.warn('Marathi translations not available yet:', err);
          setError(err);
          setLoading(false);
        });
    } else {
      // Clear translations for English (use original content)
      setTranslations(null);
      setLoading(false);
    }
  }, [i18n.language]);

  /**
   * Get translated topic by course and topic ID
   * @param {string} courseKey - 'beginner', 'intermediate', 'advanced', 'professional'
   * @param {string} topicId - Topic ID
   * @returns {object|null} - Translated topic or null if not available
   */
  const getTranslatedTopic = (courseKey, topicId) => {
    if (!translations || i18n.language !== 'mr') {
      return null;
    }

    const course = translations.courses?.[courseKey];
    if (!course) return null;

    return course.topics?.find(topic => topic.id === topicId);
  };

  /**
   * Merge original topic with translation
   * Preserves code and non-translatable content
   * @param {object} originalTopic - Original English topic
   * @param {string} courseKey - Course key
   * @returns {object} - Merged topic with translations
   */
  const mergeTopicWithTranslation = (originalTopic, courseKey) => {
    if (!originalTopic) return originalTopic;

    const translatedTopic = getTranslatedTopic(courseKey, originalTopic.id);
    
    if (!translatedTopic) {
      return originalTopic; // Return original if no translation
    }

    // Deep merge: translation takes priority for text, keep original code
    return {
      ...originalTopic,
      title: translatedTopic.title || originalTopic.title,
      description: translatedTopic.description || originalTopic.description,
      content: {
        ...originalTopic.content,
        overview: translatedTopic.content?.overview || originalTopic.content.overview,
        keyPoints: translatedTopic.content?.keyPoints || originalTopic.content.keyPoints,
        useCases: translatedTopic.content?.useCases || originalTopic.content.useCases,
        dos: translatedTopic.content?.dos || originalTopic.content.dos,
        donts: translatedTopic.content?.donts || originalTopic.content.donts,
        bestPractices: translatedTopic.content?.bestPractices || originalTopic.content.bestPractices,
        codeExamples: (originalTopic.content.codeExamples || []).map((example, idx) => {
          const translatedExample = translatedTopic.content?.codeExamples?.[idx];
          return {
            ...example,
            title: translatedExample?.title || example.title,
            explanation: translatedExample?.explanation || example.explanation,
            // Keep code unchanged
            code: example.code,
            language: example.language,
          };
        }),
      },
    };
  };

  return {
    translations,
    loading,
    error,
    isMarathi: i18n.language === 'mr',
    getTranslatedTopic,
    mergeTopicWithTranslation,
  };
}
