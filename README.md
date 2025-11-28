# Database Learning Platform 🗄️

A comprehensive, interactive database learning platform built with **React 19** and **Material UI v6**. This platform provides a structured learning path from beginner to professional level, covering SQL, NoSQL, and advanced database concepts.

## ✨ Features

### 📚 Comprehensive Content
- **4 Learning Paths**: Beginner, Intermediate, Advanced, and Professional
- **23+ Topics**: Each topic includes:
  - Overview and key concepts
  - Real-world use cases
  - Do's and Don'ts
  - Best practices
  - Multiple code examples with syntax highlighting
  - Interactive quizzes

### 🎯 Interactive Learning
- **Code Examples**: Syntax-highlighted SQL, JavaScript, Python, and Bash code with copy-to-clipboard functionality
- **Interactive Quizzes**: Test your knowledge after each topic with immediate feedback
- **SQL Playground**: Practice SQL queries in your browser with SQLite (via WebAssembly)
- **Progress Tracking**: Monitor your learning journey across all paths
- **Bookmarks**: Save topics for later review
- **Internationalization**: Multi-language support (i18n ready)

### 📱 Mobile Responsive
- Fully responsive design that works on all devices
- Mobile-optimized navigation with drawer
- Touch-friendly interface
- Adaptive layouts for different screen sizes

### 🎨 Modern UI/UX
- Clean, modern Material UI design
- Dark/Light theme toggle
- Smooth animations and transitions
- Intuitive navigation
- Progress indicators

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd database-learning-platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The app will automatically open at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 📖 Learning Paths

### 🌱 Beginner - Database Foundations
- Introduction to Databases
- Relational Database Model
- Basic SQL Commands (SELECT, INSERT, UPDATE, DELETE)
- SQL Data Types
- Database Constraints (PRIMARY KEY, FOREIGN KEY, etc.)

### 🚀 Intermediate - SQL Mastery
- SQL Joins (INNER, LEFT, RIGHT, FULL)
- Subqueries and Nested Queries
- Database Indexes and Performance
- Transactions and ACID Properties
- Database Normalization (1NF, 2NF, 3NF)
- Stored Procedures and Functions

### ⚡ Advanced - NoSQL & Performance
- MongoDB Basics and CRUD Operations
- Redis Fundamentals and Caching
- Query Optimization Techniques
- Database Security Best Practices
- Database Replication and High Availability
- Sharding and Horizontal Scaling

### 👑 Professional - Database Architect
- Database Design Patterns (Repository, CQRS, Event Sourcing)
- Cloud Database Services (AWS RDS, Azure Cosmos DB, Google Firestore)
- Data Warehousing and OLAP
- Database Monitoring and Performance Tuning
- Disaster Recovery and Backup Strategies
- Databases in Microservices Architecture

## 🛠️ Technology Stack

- **Frontend Framework**: React 19
- **UI Library**: Material UI v6
- **Routing**: React Router v6
- **Code Highlighting**: React Syntax Highlighter
- **SQL Playground**: sql.js (SQLite compiled to WebAssembly)
- **Internationalization**: i18next, react-i18next
- **Build Tool**: Vite
- **Styling**: Emotion (CSS-in-JS)

## 📁 Project Structure

```
database-learning-platform/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   ├── TopicCard/
│   │   ├── CodeBlock/
│   │   └── Quiz/
│   ├── pages/
│   │   ├── Home/
│   │   ├── LearningPath/
│   │   ├── TopicDetail/
│   │   ├── Bookmarks/
│   │   ├── Progress/
│   │   └── QuizPractice/
│   │   └── SQLPlayground/
│   ├── context/
│   │   ├── ThemeContext.jsx
│   │   └── ProgressContext.jsx
│   ├── i18n/
│   │   ├── config.js
│   │   └── locales/
│   │       └── en.json
│   ├── data/
│   │   ├── learningPaths.js
│   │   ├── topics/
│   │   │   ├── beginnerTopics.js
│   │   │   ├── intermediateTopics.js
│   │   │   ├── advancedTopics.js
│   │   │   └── professionalTopics.js
│   │   └── index.js
│   ├── theme/
│   │   └── theme.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

## 🎯 Key Features Explained

### Progress Tracking
- Automatically saves completed topics to local storage
- Track completion percentage for each learning path
- View overall progress statistics
- Monitor quiz scores

### Bookmark System
- Save important topics for quick access
- Easy management of bookmarked content
- Persisted in local storage

### Quiz System
- Multiple-choice questions after each topic
- Immediate feedback with detailed explanations
- Score tracking and history
- Practice mode for all topics

### SQL Playground
- **In-Browser Database**: Run real SQL queries using SQLite compiled to WebAssembly
- **Pre-loaded Sample Data**: Practice with users and orders tables
- **Sample Queries**: Quick access to common SQL patterns
- **No Server Required**: Everything runs client-side for privacy and speed
- **Real-time Execution**: Instant query results
- **Error Handling**: Clear error messages for debugging

### Theme Switching
- Toggle between light and dark modes
- Preference saved to local storage
- Optimized for readability in both modes

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- **Mobile**: < 600px
- **Tablet**: 600px - 900px
- **Desktop**: 900px - 1200px
- **Large Desktop**: > 1200px

## 💡 Usage Tips

1. **Start with Beginner Path** if you're new to databases
2. **Use the SQL Playground** to practice queries hands-on
3. **Use Bookmarks** to mark topics you want to review
4. **Take Quizzes** after each topic to reinforce learning
5. **Check Progress Page** regularly to track your journey
6. **Toggle Dark Mode** for comfortable reading at night
7. **Practice Regularly** using the Quiz Practice section

## 🗂️ Topics Covered

### SQL Topics
- Database fundamentals and relational model
- CRUD operations and basic queries
- JOIN operations and relationships
- Subqueries and complex queries
- Indexing and query optimization
- Transactions and concurrency
- Normalization and database design

### NoSQL Topics
- MongoDB document database
- Redis in-memory store
- Data modeling for NoSQL
- Eventual consistency

### Advanced Topics
- Replication and sharding
- Database security
- Performance optimization
- Cloud databases
- Microservices architecture
- Data warehousing
- Disaster recovery

## 🤝 Contributing

This is an educational project. Feel free to fork and customize it for your learning needs!

## 📝 License

This project is open source and available for educational purposes.

---

**Happy Learning! 🎉**

Master databases from SQL fundamentals to cloud-native architectures!
