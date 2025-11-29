import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/index.js';
import translationMR from './locales/mr/index.js';

console.log('[i18n Config] EN keys:', Object.keys(translationEN || {}));
console.log('[i18n Config] EN has content?', 'content' in (translationEN || {}));
console.log('[i18n Config] MR keys:', Object.keys(translationMR || {}));
console.log('[i18n Config] MR has content?', 'content' in (translationMR || {}));

const resources = {
  en: {
    translation: translationEN
  },
  mr: {
    translation: translationMR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
