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
      console.log('[useCourseTranslation] Not Marathi, skipping translation');
      return null;
    }

    // Get the full resource bundle for Marathi
    // Note: This assumes resources are loaded. If using a backend loader, this might need adjustment.
    // Since we bundle translations, this is synchronous and safe.
    const resources = i18n.getResourceBundle('mr', 'translation');
    
    console.log('[useCourseTranslation] Resources:', resources ? 'Loaded' : 'NULL');
    console.log('[useCourseTranslation] Full resource keys:', resources ? Object.keys(resources) : 'NONE');
    console.log('[useCourseTranslation] Resources object:', resources);
    console.log('[useCourseTranslation] Looking for courseKey:', courseKey, 'topicId:', topicId);
    console.log('[useCourseTranslation] Available content keys:', resources?.content ? Object.keys(resources.content) : 'NONE');
    
    if (!resources || !resources.content || !resources.content[courseKey]) {
      console.log('[useCourseTranslation] Course content not found for key:', courseKey);
      return null;
    }

    const courseContent = resources.content[courseKey];
    console.log('[useCourseTranslation] Course content found, keys:', Object.keys(courseContent));
    
    // Find the topic object that matches the ID
    // We iterate over the values because the keys (e.g., 'whatIsAI') might not match the IDs (e.g., 'what-is-ai')
    // Handle both numeric IDs (original) and string IDs (translations)
    const topic = Object.values(courseContent).find(t => t && (t.id === topicId || String(t.id) === String(topicId)));
    
    console.log('[useCourseTranslation] Found topic:', topic ? topic.title : 'NOT FOUND');
    
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
    
    console.log('[mergeTopicWithTranslation] Original overview:', (originalTopic.content?.overview || originalTopic.overview)?.substring(0, 100));
    console.log('[mergeTopicWithTranslation] Translated overview:', translatedTopic.overview?.substring(0, 100));
    console.log('[mergeTopicWithTranslation] Merged overview:', merged.content.overview?.substring(0, 100));
    console.log('[mergeTopicWithTranslation] Translated dos:', translatedTopic.dos);
    console.log('[mergeTopicWithTranslation] Merged dos:', merged.content.dos);
    
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
