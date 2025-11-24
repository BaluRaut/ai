# Cloud Computing Learning Platform - i18n Guide

## 📁 i18n Structure

This project uses **i18next** for internationalization, making it easy to support multiple languages.

### Directory Structure
```
public/
└── locales/
    ├── en/
    │   └── common.json    # English translations
    └── mr/
        └── common.json    # Marathi translations (you can add more languages)
```

## 🌍 Currently Supported Languages

- **English (en)** - Fully implemented
- **Marathi (mr)** - Template provided for translation

## 🚀 How to Add Translations

### Step 1: Copy the English JSON Structure

The `public/locales/en/common.json` file contains all translation keys. Use this as your reference.

### Step 2: Translate to Your Language

1. Open `public/locales/mr/common.json` (or create a new language folder)
2. Translate each value while keeping the SAME keys
3. Maintain the JSON structure exactly

Example:
```json
{
  "navigation": {
    "home": "Home",           // English
    "home": "मुख्यपृष्ठ"      // Marathi
  }
}
```

### Step 3: Test Your Translations

1. Run the app: `npm run dev`
2. Change language in settings
3. Verify all text displays correctly

## 🔧 Using Translations in Code

### In React Components

```typescript
import { useTranslation } from '../i18n/useTranslationNew'

function MyComponent() {
  const { t, language, changeLanguage } = useTranslation()

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
      
      {/* Change language */}
      <button onClick={() => changeLanguage('mr')}>
        Switch to Marathi
      </button>
    </div>
  )
}
```

### For Nested Translations

```typescript
import { useNestedTranslation } from '../i18n/useTranslationNew'

function NavigationComponent() {
  const tn = useNestedTranslation('navigation')

  return (
    <nav>
      <a href="/">{tn('home')}</a>
      <a href="/progress">{tn('progress')}</a>
      <a href="/quiz">{tn('quizPractice')}</a>
    </nav>
  )
}
```

## 📝 Translation Key Structure

### Main Categories

```
navigation          - Navigation menu items
hero                - Homepage hero section
learningPath        - Learning path page
module              - Module/topic pages
quiz                - Quiz-related text
progress            - Progress tracking page
actions             - Button labels and actions
footer              - Footer content
phases              - Learning phase names
modules             - Module titles and descriptions
common              - Common UI elements
notifications       - Success/error messages
placeholders        - Form placeholders
validation          - Form validation messages
settings            - Settings page
```

## 🎯 Translation Guidelines

### DO ✅
- Keep the JSON structure identical to English
- Preserve placeholders like `{{name}}`
- Maintain HTML tags if present
- Test translations in the UI
- Keep keys in English (never translate keys!)
- Use proper Unicode for special characters

### DON'T ❌
- Change the JSON key names
- Remove or add new keys (unless updating en.json first)
- Break the JSON syntax
- Use machine translation without review
- Change HTML structure

## 🌐 Adding a New Language

### Example: Adding Hindi (hi)

1. **Create directory**
   ```bash
   mkdir public/locales/hi
   ```

2. **Copy template**
   ```bash
   cp public/locales/en/common.json public/locales/hi/common.json
   ```

3. **Translate content**
   Edit `public/locales/hi/common.json` and translate all values

4. **Update i18n config**
   Edit `src/i18n/config.ts`:
   ```typescript
   // Add 'hi' to supported languages
   supportedLngs: ['en', 'mr', 'hi'],
   ```

5. **Add language selector**
   Update your language switcher component to include Hindi

6. **Test**
   ```bash
   npm run dev
   ```

## 🔍 Finding Translation Keys

### Method 1: Search in common.json
Open `public/locales/en/common.json` and search for the text

### Method 2: Check Component
Look at the component code to see which key it uses:
```typescript
{t('navigation.home')}  // Key is: navigation.home
```

### Method 3: Use Browser DevTools
1. Open browser console
2. Type: `localStorage.getItem('i18nextLng')`
3. Change language and inspect DOM

## 📊 Translation Progress Template

Use this checklist when translating:

### Navigation Section ✅
- [ ] home
- [ ] learningPath
- [ ] progress
- [ ] quizPractice
- [ ] bookmarks
- [ ] achievements
- [ ] giveFeedback

### Hero Section ⬜
- [ ] title
- [ ] subtitle
- [ ] startLearning
- [ ] viewProgress

(Continue for all sections...)

## 🛠️ Troubleshooting

### Translation Not Showing
1. Check console for errors
2. Verify JSON syntax is valid
3. Ensure key exists in common.json
4. Clear browser cache
5. Restart dev server

### Language Not Switching
1. Check localStorage: `i18nextLng`
2. Verify language code in config
3. Check browser console for errors

### Missing Translations
1. Fallback is English
2. Add missing keys to your language file
3. Match the English structure exactly

## 📚 Resources

- **i18next Documentation**: https://www.i18next.com/
- **React-i18next**: https://react.i18next.com/
- **JSON Validator**: https://jsonlint.com/
- **Translation Tools**: https://www.deepl.com/ (for better than Google Translate)

## 💡 Pro Tips

1. **Use Namespaces**: For large apps, split translations into multiple files
2. **Pluralization**: i18next supports plural forms automatically
3. **Context**: Use context for gender-specific translations
4. **Interpolation**: Insert variables: `{t('welcome', { name: 'John' })}`
5. **Formatting**: Use i18next-icu for advanced formatting

## 🤝 Contributing Translations

1. Fork the repository
2. Create a new language folder
3. Translate `common.json`
4. Test thoroughly
5. Submit a pull request

### Quality Checklist
- [ ] All keys translated
- [ ] No JSON syntax errors
- [ ] Tested in the UI
- [ ] Special characters display correctly
- [ ] RTL support (if applicable)
- [ ] Cultural appropriateness checked

---

## 📧 Need Help?

If you're translating to a new language and need assistance:
1. Check existing translations for reference
2. Test incrementally (don't translate everything at once)
3. Use native speakers for review
4. Consider cultural context, not just literal translation

Happy translating! 🌍🎉
