# 🎨 Using Enhanced Content in Components

## Quick Start Guide

### 1. Using i18n Translations

#### In Any Component:

```typescript
import { useTranslation } from '../i18n/useTranslationNew'

function MyComponent() {
  const { t, language, changeLanguage } = useTranslation()

  return (
    <div>
      {/* Basic translation */}
      <h1>{t('hero.title')}</h1>
      
      {/* With fallback */}
      <p>{t('hero.subtitle') || 'Default subtitle'}</p>
      
      {/* Language switcher */}
      <button onClick={() => changeLanguage('mr')}>
        मराठी
      </button>
      <button onClick={() => changeLanguage('en')}>
        English
      </button>
      
      {/* Current language */}
      <p>Current: {language}</p>
    </div>
  )
}
```

#### For Navigation:

```typescript
import { useNestedTranslation } from '../i18n/useTranslationNew'

function Navigation() {
  const tn = useNestedTranslation('navigation')

  return (
    <nav>
      <Link to="/">{tn('home')}</Link>
      <Link to="/path">{tn('learningPath')}</Link>
      <Link to="/progress">{tn('progress')}</Link>
      <Link to="/quiz">{tn('quizPractice')}</Link>
    </nav>
  )
}
```

---

### 2. Displaying Enhanced Topic Content

#### TopicPage Component Example:

```typescript
import { useParams } from 'react-router-dom'
import { allEnhancedTopics } from '../data/topicsEnhanced'
import ReactMarkdown from 'react-markdown' // Install: npm install react-markdown

function TopicPage() {
  const { topicId } = useParams()
  const topic = allEnhancedTopics.find(t => t.id === topicId)

  if (!topic) return <div>Topic not found</div>

  return (
    <div className="topic-container">
      {/* Header */}
      <header>
        <h1>{topic.title}</h1>
        <p>Day {topic.day}</p>
      </header>

      {/* Featured Image */}
      {topic.imageUrl && (
        <div className="topic-image">
          <img 
            src={topic.imageUrl} 
            alt={topic.title}
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Main Content */}
      <section className="content">
        <ReactMarkdown>{topic.content}</ReactMarkdown>
      </section>

      {/* Key Points */}
      {topic.keyPoints && (
        <section className="key-points">
          <h2>🎯 Key Points</h2>
          <ul>
            {topic.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Examples */}
      {topic.examples && (
        <section className="examples">
          <h2>💡 Real-World Examples</h2>
          <ul>
            {topic.examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Diagram */}
      {topic.diagramUrl && (
        <section className="diagram">
          <h2>📊 Visual Diagram</h2>
          <img 
            src={topic.diagramUrl} 
            alt={`${topic.title} diagram`}
            style={{ width: '100%', maxWidth: '800px' }}
          />
        </section>
      )}

      {/* Video */}
      {topic.videoUrl && (
        <section className="video">
          <h2>🎥 Video Tutorial</h2>
          <div className="video-container">
            {/* YouTube embed */}
            {topic.videoUrl.includes('youtube.com') && (
              <iframe
                width="100%"
                height="400"
                src={topic.videoUrl.replace('watch?v=', 'embed/')}
                title={topic.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {/* Regular link */}
            {!topic.videoUrl.includes('youtube.com') && (
              <a href={topic.videoUrl} target="_blank" rel="noopener noreferrer">
                Watch Video Tutorial
              </a>
            )}
          </div>
        </section>
      )}

      {/* Practical Exercise */}
      {topic.practicalExercise && (
        <section className="exercise">
          <h2>🛠️ Hands-On Exercise</h2>
          <ReactMarkdown>{topic.practicalExercise}</ReactMarkdown>
        </section>
      )}

      {/* Additional Resources */}
      {topic.additionalResources && (
        <section className="resources">
          <h2>📚 Additional Resources</h2>
          <ul>
            {topic.additionalResources.map((resource, index) => {
              // Extract URL from markdown-style links
              const match = resource.match(/\[(.+?)\]\((.+?)\)/) ||
                           resource.match(/(https?:\/\/\S+)/)
              const url = match ? (match[2] || match[1]) : resource
              const text = match ? match[1] : resource

              return (
                <li key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </div>
  )
}

export default TopicPage
```

---

### 3. Language Selector Component

```typescript
import { useTranslation } from '../i18n/useTranslationNew'

function LanguageSelector() {
  const { language, changeLanguage } = useTranslation()

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
    // Add more languages as you translate
    // { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    // { code: 'es', name: 'Español', flag: '🇪🇸' },
  ]

  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={language === lang.code ? 'active' : ''}
        >
          <span className="flag">{lang.flag}</span>
          <span className="name">{lang.name}</span>
        </button>
      ))}
    </div>
  )
}
```

---

### 4. Module Cards with Enhanced Content

```typescript
import { modules } from '../data/modules'
import { useTranslation } from '../i18n/useTranslationNew'

function ModuleCard({ module }) {
  const { t, language } = useTranslation()

  return (
    <div className="module-card">
      <div className="icon">{module.icon}</div>
      
      {/* Use translation keys for module titles/descriptions */}
      <h3>{t(`modules.${module.id}.title`) || module.title}</h3>
      <p>{t(`modules.${module.id}.description`) || module.description}</p>
      
      <div className="meta">
        <span>📅 {module.duration}</span>
        <span>📚 {module.topicCount} topics</span>
        <span>📈 Phase {module.phase}</span>
      </div>
    </div>
  )
}
```

---

### 5. Installing Required Dependencies

```bash
# For markdown rendering
npm install react-markdown

# For syntax highlighting in code blocks
npm install react-syntax-highlighter
npm install @types/react-syntax-highlighter --save-dev

# For better markdown (optional)
npm install remark-gfm  # GitHub Flavored Markdown
```

---

### 6. Advanced: Markdown with Syntax Highlighting

```typescript
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

function EnhancedContent({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              style={tomorrow}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
```

---

### 7. Progress Tracking with Enhanced Content

```typescript
import { useAppContext } from '../context/AppContext'
import { allEnhancedTopics } from '../data/topicsEnhanced'

function ProgressDashboard() {
  const { progress } = useAppContext()

  const totalTopics = allEnhancedTopics.length
  const completedCount = progress.completedTopics.length
  const percentComplete = (completedCount / totalTopics) * 100

  // Topics with videos watched
  const topicsWithVideos = allEnhancedTopics.filter(t => t.videoUrl).length

  // Topics with exercises completed
  const exercisesCompleted = progress.completedTopics.filter(topicId => {
    const topic = allEnhancedTopics.find(t => t.id === topicId)
    return topic?.practicalExercise
  }).length

  return (
    <div className="progress-dashboard">
      <h2>Your Progress</h2>
      
      <div className="stats">
        <div className="stat">
          <h3>{completedCount} / {totalTopics}</h3>
          <p>Topics Completed</p>
          <progress value={completedCount} max={totalTopics} />
        </div>

        <div className="stat">
          <h3>{exercisesCompleted}</h3>
          <p>Hands-On Exercises Done</p>
        </div>

        <div className="stat">
          <h3>{topicsWithVideos}</h3>
          <p>Video Tutorials Available</p>
        </div>
      </div>
    </div>
  )
}
```

---

### 8. Search Through Enhanced Content

```typescript
import { useState } from 'react'
import { allEnhancedTopics } from '../data/topicsEnhanced'

function SearchTopics() {
  const [query, setQuery] = useState('')

  const results = allEnhancedTopics.filter(topic => {
    const searchText = `${topic.title} ${topic.content} ${topic.keyPoints?.join(' ')}`.toLowerCase()
    return searchText.includes(query.toLowerCase())
  })

  return (
    <div>
      <input
        type="search"
        placeholder="Search topics, concepts, examples..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="results">
        {results.map(topic => (
          <div key={topic.id} className="result">
            <h3>{topic.title}</h3>
            <p>Day {topic.day}</p>
            {topic.imageUrl && (
              <img src={topic.imageUrl} alt="" style={{ width: 100 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

## 🎨 Styling Tips

### For Images:
```css
.topic-image img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```

### For Video Embeds:
```css
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

### For Code Blocks:
```css
pre {
  background: #1e1e1e;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}

code {
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 0.9rem;
}
```

---

## 📝 Best Practices

### 1. Always Check for Content Existence
```typescript
{topic.imageUrl && <img src={topic.imageUrl} />}
{topic.videoUrl && <VideoPlayer url={topic.videoUrl} />}
```

### 2. Provide Fallbacks
```typescript
const title = t('module.title') || module.title
```

### 3. Handle Loading States
```typescript
import { Suspense } from 'react'

<Suspense fallback={<div>Loading translations...</div>}>
  <YourComponent />
</Suspense>
```

### 4. Lazy Load Images
```typescript
<img 
  src={topic.imageUrl} 
  loading="lazy"
  alt={topic.title}
/>
```

---

## 🚀 Quick Implementation Checklist

- [ ] Install react-markdown: `npm install react-markdown`
- [ ] Import enhanced topics: `import { allEnhancedTopics } from '../data/topicsEnhanced'`
- [ ] Update TopicPage to show images, diagrams, videos
- [ ] Add LanguageSelector component to header
- [ ] Update all hardcoded text to use `t()` function
- [ ] Test language switching
- [ ] Test on mobile devices
- [ ] Optimize image loading

---

## 🎯 Result

With these components, you'll have:
- ✅ Fully translated multi-language app
- ✅ Rich content with images and videos
- ✅ Interactive exercises
- ✅ Professional resource links
- ✅ Engaging learning experience

Happy coding! 🎉
