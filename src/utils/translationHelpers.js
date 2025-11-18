import { useTranslation } from 'react-i18next';
import { learningPaths as learningPathsEN, courseData as courseDataEN } from './courseContent';
import { learningPaths as learningPathsMR } from './courseContent.mr';

/**
 * Hook to get translated course content
 * Returns course data with translations applied based on current language
 */
export const useTranslatedContent = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // For now, we'll translate UI elements and keep code examples in English
  // This is because Python syntax is in English
  const getLearningPaths = () => {
    if (currentLang === 'mr') {
      return learningPathsMR;
    }
    return learningPathsEN;
  };

  const getCourseData = () => {
    // For now, return English course data
    // In future, we can add translated descriptions and explanations
    return courseDataEN;
  };

  return {
    learningPaths: getLearningPaths(),
    courseData: getCourseData()
  };
};

/**
 * Translate topic metadata (title, description, etc)
 * Keep code examples in English
 */
export const getTranslatedTopic = (topic, language) => {
  if (language !== 'mr' || !topic) {
    return topic;
  }

  // Topic translations would go here
  // For now, return original
  return topic;
};
