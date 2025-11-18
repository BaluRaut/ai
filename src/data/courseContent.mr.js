// Marathi translation of course content
// मराठी भाषेत अभ्यासक्रम सामग्री

export const learningPaths = [
  {
    id: 'beginner',
    title: 'पायथन मूलभूत',
    description: 'शून्य पासून पायथन प्रोग्रामिंग सुरू करा',
    level: 'नवशिक्या',
    icon: '🌱',
    color: '#4CAF50'
  },
  {
    id: 'intermediate',
    title: 'डेटा सायन्स',
    description: 'डेटा विश्लेषण आणि मशीन लर्निंग शिका',
    level: 'मध्यम',
    icon: '📊',
    color: '#2196F3'
  },
  {
    id: 'professional',
    title: 'व्यावसायिक पायथन',
    description: 'प्रगत विषय आणि वास्तविक-जगातील प्रकल्प',
    level: 'प्रगत',
    icon: '🚀',
    color: '#9C27B0'
  }
];

// Note: Course data structure remains the same, only adding Marathi translations
// We'll use a translation mapping system to keep code examples in English
// while translating UI text, descriptions, and explanations

export const courseDataTranslations = {
  beginner: {
    title: 'पायथन मूलभूत',
    description: 'शून्य पासून पायथन प्रोग्रामिंग सुरू करा',
  },
  intermediate: {
    title: 'डेटा सायन्स',
    description: 'डेटा विश्लेषण आणि मशीन लर्निंग शिका',
  },
  professional: {
    title: 'व्यावसायिक पायथन',
    description: 'प्रगत विषय आणि वास्तविक-जगातील प्रकल्प',
  }
};

export default { learningPaths, courseDataTranslations };
