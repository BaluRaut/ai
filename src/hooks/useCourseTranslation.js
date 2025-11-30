import { useTranslation } from 'react-i18next';

/**
 * Custom hook to load course content translations
 * Automatically switches between English content and Marathi translations
 * based on current language setting
 */
export function useCourseTranslation() {
  const { i18n } = useTranslation();

  /**
   * Get translated topic by course and topic ID
   * @param {string} courseKey - 'fundamentals', 'machineLearning', etc.
   * @param {string} topicId - Topic ID (e.g., 'what-is-ai')
   * @returns {object|null} - Translated topic or null if not available
   */
  const getTranslatedTopic = (courseKey, topicId) => {
    if (i18n.language !== 'mr') {
      return null;
    }

    const resources = i18n.getResourceBundle('mr', 'translation');
    
    if (!resources || !resources.content || !resources.content[courseKey]) {
      return null;
    }

    const courseContent = resources.content[courseKey];
    
    const topic = Object.values(courseContent).find(t => t && (t.id === topicId || String(t.id) === String(topicId)));
    
    return topic || null;
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
    // The translated topic has fields at root level (overview, keyPoints, etc.)
    const merged = {
      ...originalTopic,
      title: translatedTopic.title || originalTopic.title,
      description: translatedTopic.description || originalTopic.description,
      content: {
        ...(originalTopic.content || {}),
        overview: translatedTopic.overview || translatedTopic.content?.overview || originalTopic.content?.overview || originalTopic.overview,
        keyPoints: translatedTopic.keyPoints || translatedTopic.content?.keyPoints || originalTopic.content?.keyPoints || originalTopic.keyPoints,
        useCases: translatedTopic.useCases || translatedTopic.content?.useCases || originalTopic.content?.useCases || originalTopic.useCases,
        dos: translatedTopic.dos || translatedTopic.content?.dos || originalTopic.content?.dos || originalTopic.dos,
        donts: translatedTopic.donts || translatedTopic.content?.donts || originalTopic.content?.donts || originalTopic.donts,
        bestPractices: translatedTopic.bestPractices || translatedTopic.content?.bestPractices || originalTopic.content?.bestPractices || originalTopic.bestPractices,
        comparisonTable: translatedTopic.comparisonTable || translatedTopic.content?.comparisonTable || originalTopic.content?.comparisonTable || originalTopic.comparisonTable,
        // Handle code examples if they exist in translation
        codeExamples: ((originalTopic.content?.codeExamples || originalTopic.codeExamples) || []).map((example, idx) => {
          // Check if translated code examples exist and have this index
          const translatedExample = (translatedTopic.codeExamples || translatedTopic.content?.codeExamples)?.[idx];
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
    
    return merged;
  };

  return {
    loading: false,
    error: null,
    isMarathi: i18n.language === 'mr',
    getTranslatedTopic,
    mergeTopicWithTranslation,
  };
}
