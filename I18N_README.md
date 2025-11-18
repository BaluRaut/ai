# Multi-Language Support (i18n)

This application supports multiple languages using `react-i18next`.

## Supported Languages

- **English** (en) - Default
- **मराठी / Marathi** (mr)

## How to Use

### For Users

1. Click the language icon (🌐) in the top navigation bar
2. Select your preferred language from the dropdown
3. The entire interface will switch to the selected language
4. Your language preference is saved in browser storage

### For Developers

#### Adding New Translations

1. **Add translations to locale files:**
   - English: `src/i18n/locales/en.json`
   - Marathi: `src/i18n/locales/mr.json`

2. **Use translations in components:**
   ```jsx
   import { useTranslation } from 'react-i18next';
   
   function MyComponent() {
     const { t } = useTranslation();
     
     return (
       <div>
         <h1>{t('nav.home')}</h1>
         <p>{t('home.description')}</p>
       </div>
     );
   }
   ```

#### Adding a New Language

1. Create a new locale file: `src/i18n/locales/{languageCode}.json`
2. Copy the structure from `en.json` and translate all strings
3. Import and add to resources in `src/i18n/config.js`:
   ```js
   import translationXX from './locales/xx.json';
   
   const resources = {
     en: { translation: translationEN },
     mr: { translation: translationMR },
     xx: { translation: translationXX }  // New language
   };
   ```
4. Add language option to `LanguageSelector.jsx`:
   ```js
   const languages = [
     { code: 'en', name: 'English', nativeName: 'English' },
     { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
     { code: 'xx', name: 'Language Name', nativeName: 'Native Name' }
   ];
   ```

## Translation Keys Structure

```json
{
  "nav": {
    "home": "Navigation items",
    "quizPractice": "...",
    ...
  },
  "home": {
    "title": "Home page content",
    ...
  },
  "topic": {
    "overview": "Topic detail page",
    ...
  },
  "quiz": {
    "title": "Quiz related",
    ...
  },
  "progress": {
    "title": "Progress tracking",
    ...
  },
  "common": {
    "loading": "Common UI elements",
    ...
  }
}
```

## Features

- ✅ Automatic language detection from browser
- ✅ Language preference persistence in localStorage
- ✅ Fallback to English if translation missing
- ✅ Hot reload during development
- ✅ Type-safe translation keys (when using TypeScript)
- ✅ Easy-to-use translation function `t()`
- ✅ Language switcher in navigation

## Note on Content

Currently, the **Python code examples and course content remain in English** to maintain consistency with Python's English-based syntax and programming conventions. The UI, navigation, and interface elements are fully translated.

To add multi-language support for course content:
1. Create separate content files for each language
2. Store in `src/data/courseContent.{lang}.js`
3. Import based on current language in components
