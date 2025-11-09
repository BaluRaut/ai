# 🐍 Python Skills Platform for Girls

A beautiful, mobile-responsive learning platform built with React 19, Vite, and Material UI to teach Python programming to girls at all levels.

## 🎯 Target Audience

- 10th Grade students (Beginners)
- 12th Grade students
- Graduation level
- Masters level  
- 5 years experience professionals

## ✨ Features

- **React 19** - Latest React with modern features
- **Vite** - Super fast build tool and development server
- **Material UI** - Beautiful, responsive components
- **Mobile-First Design** - Works perfectly on phones, tablets, and desktops
- **Chapter Structure** - Each topic has:
  - **What** - Simple explanation
  - **Why** - Why it matters
  - **How** - Practical examples with code
- **Code Snippets** - Syntax-highlighted code with copy button
- **Easy Navigation** - Quick chapter switching

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development

The app will run on `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── ChapterList.jsx       # Navigation sidebar
│   ├── ChapterContent.jsx    # Main content display
│   └── CodeSnippet.jsx       # Code display with syntax highlighting
├── data/
│   └── chapters.js           # All chapter content
├── App.jsx                   # Main app component
└── main.jsx                  # Entry point
```

## 🎨 Design Features

- Purple and pink color scheme
- Responsive layout (mobile, tablet, desktop)
- Easy-to-read typography
- Copy code functionality
- Smooth navigation
- Clean, modern interface

## 📚 Current Chapters

1. **Variables and Data Types** (10th Grade)
   - Understanding variables
   - Different data types
   - Working with text and numbers

2. **Lists - Your Data Collection** (12th Grade)
   - Creating and using lists
   - Adding/removing items
   - List operations and loops

## 🔜 Adding More Chapters

Edit `src/data/chapters.js` and add new chapter objects with the same structure:

```javascript
{
  title: "Your Chapter Title",
  level: "Beginner/Intermediate/Advanced",
  description: "Brief description",
  what: "What is it explanation",
  why: "Why it matters explanation",
  how: "How to use it explanation",
  codeExamples: [...]
}
```

## 💜 Made with Love

Simple Python learning for girls, by design!
