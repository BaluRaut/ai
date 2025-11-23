// Hook to get translated course content based on current language
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

// Translation files will be lazy-loaded
const translationCache = {};

async function loadTranslations(courseName, language) {
  const cacheKey = `${courseName}-${language}`;
  
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }
  
  try {
    const translations = await import(`../i18n/courseTranslations/${courseName}-${language}.json`);
    translationCache[cacheKey] = translations.default || translations;
    return translationCache[cacheKey];
  } catch (error) {
    console.warn(`Translations not found for ${courseName} in ${language}`);
    return null;
  }
}

export function useTopicTranslation(topic, pathId) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return useMemo(() => {
    // If English or no translation needed, return original
    if (!topic || currentLang === 'en' || currentLang.startsWith('en')) {
      return topic;
    }
    
    // For Marathi
    if (currentLang === 'mr') {
      // Check if translation data exists inline (after migration)
      if (topic.title_mr) {
        return {
          ...topic,
          title: topic.title_mr,
          description: topic.description_mr,
          content: {
            ...topic.content,
            overview: topic.content_mr?.overview || topic.content.overview,
            keyPoints: topic.content_mr?.keyPoints || topic.content.keyPoints,
            useCases: topic.content_mr?.useCases || topic.content.useCases,
            dos: topic.content_mr?.dos || topic.content.dos,
            donts: topic.content_mr?.donts || topic.content.donts,
            bestPractices: topic.content_mr?.bestPractices || topic.content.bestPractices,
            codeExamples: (topic.content.codeExamples || []).map((ex, idx) => ({
              ...ex,
              title: topic.content_mr?.codeExamples?.[idx]?.title || ex.title,
              explanation: topic.content_mr?.codeExamples?.[idx]?.explanation || ex.explanation,
            })),
          },
        };
      }
    }
    
    // Fallback to original
    return topic;
  }, [topic, currentLang]);
}

// Helper function to get translated array
export function getTranslatedArray(original, translated, language) {
  if (language === 'en' || !translated) return original;
  return translated;
}

// Helper to get translated text
export function getTranslatedText(original, translated, language) {
  if (language === 'en' || !translated) return original;
  return translated;
}
