# Translation Refactor Guide

## ✅ Completed: Modules Refactoring

### What was changed:

1. **Added module translations to `en.json`**:
```json
{
  "modules.cloudIntro.title": "Introduction to Cloud Computing",
  "modules.cloudIntro.description": "Learn what cloud computing is...",
  "modules.cloudIntro.duration": "14 days",
  // ... all 15 modules
}
```

2. **Removed hardcoded content from `modules.ts`**:
```typescript
{
  id: 'cloud-intro',
  title: '', // Empty - loaded from translations
  titleMr: '',
  description: '',
  descriptionMr: '',
  duration: '',
  icon: '☁️', // Static content stays
  phase: 1,
  topicCount: 20
}
```

3. **Updated `useLocalizedContent` hook** to fetch from translations:
```typescript
const getModuleTitle = (module: Module) => {
  const key = `modules.${module.id.replace(/-/g, '')}.title`
  return t(key) || module.title || ''
}
```

## 📋 Pattern for Adding More Languages

### Step 1: Create `mr.json` (Marathi)
```json
{
  "modules.cloudIntro.title": "क्लाउड कंप्युटिंगचा परिचय",
  "modules.cloudIntro.description": "क्लाउड कंप्युटिंग म्हणजे काय...",
  "modules.cloudIntro.duration": "14 दिवस"
}
```

### Step 2: Create any new language file (e.g., `hi.json` for Hindi)
```json
{
  "modules.cloudIntro.title": "क्लाउड कंप्यूटिंग का परिचय",
  "modules.cloudIntro.description": "क्लाउड कंप्यूटिंग क्या है..."
}
```

### Step 3: Update `translations.ts` to import new language
```typescript
import en from './en.json'
import mr from './mr.json'
import hi from './hi.json' // Add new language

export const translations = {
  en: en,
  mr: { ...en, ...mr }, // Marathi with English fallback
  hi: { ...en, ...hi }  // Hindi with English fallback
}
```

## 🔄 Next: Refactor Topics

### Current State (topics.ts has 400+ topics with bilingual content):
```typescript
{
  id: 'what-is-cloud',
  title: 'What is Cloud Computing?',
  titleMr: 'क्लाउड कंप्युटिंग म्हणजे काय?',
  content: 'Cloud computing is...',
  contentMr: 'क्लाउड कंप्युटिंग...',
  // More fields...
}
```

### Refactored Approach:

#### 1. Add to `en.json`:
```json
{
  "topics.whatIsCloud.title": "What is Cloud Computing?",
  "topics.whatIsCloud.content": "Cloud computing is a technology...",
  "topics.whatIsCloud.keyPoint1": "On-demand self-service",
  "topics.whatIsCloud.keyPoint2": "Broad network access",
  "topics.whatIsCloud.practicalExercise": "Sign up for AWS Free Tier..."
}
```

#### 2. Update `topics.ts`:
```typescript
{
  id: 'what-is-cloud',
  moduleId: 'cloud-intro',
  title: '', // Load from translations
  titleMr: '',
  content: '',
  contentMr: '',
  day: 1,
  // Only keep non-translatable content
  diagram: { /* ... */ }
}
```

#### 3. Update `useLocalizedContent`:
```typescript
const getTopicTitle = (topic: Topic) => {
  const key = `topics.${topic.id.replace(/-/g, '')}.title`
  return t(key) || topic.title || ''
}

const getTopicContent = (topic: Topic) => {
  const key = `topics.${topic.id.replace(/-/g, '')}.content`
  return t(key) || topic.content || ''
}
```

## 🎯 Benefits of This Approach

1. **Easy to add new languages**: Just create `fr.json`, `de.json`, `es.json`, etc.
2. **Centralized translations**: All language content in one place
3. **Type-safe**: TypeScript ensures translation keys exist
4. **Fallback system**: Missing translations fall back to English
5. **Scalable**: Can use translation services/APIs to bulk translate
6. **No code changes**: Adding a language doesn't require changing component code

## 📝 Current Translation Keys Count

- **UI Labels**: ~200 keys
- **Modules**: 45 keys (15 modules × 3 fields)
- **Topics**: ~0 (TODO: Add 400+ topics)
- **Quizzes**: ~0 (TODO: Add quiz questions/answers)

## 🚀 Recommended Next Steps

1. ✅ **DONE**: Refactor modules to use `en.json`
2. **TODO**: Add all module translations to `mr.json` (use Google Translate API)
3. **TODO**: Refactor topics (biggest task - 400+ topics)
4. **TODO**: Refactor quizzes
5. **TODO**: Add support for 3rd language (Hindi, Spanish, etc.)

## 💡 Tips

- Use naming convention: `{category}.{id}.{field}`
- Keep IDs without hyphens in keys: `cloud-intro` → `cloudintro`
- Always provide English fallback
- Use automated translation services for initial translations
- Have native speakers review translations for accuracy
