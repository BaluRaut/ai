import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { AppProvider, useAppContext } from './context/AppContext'
import HomePage from './pages/HomePage'
import LearningPathPage from './pages/LearningPathPage'
import ModulePage from './pages/ModulePage'
import TopicPage from './pages/TopicPage'
import QuizPage from './pages/QuizPage'
import ProgressPage from './pages/ProgressPage'
import QuizPracticePage from './pages/QuizPracticePage'
import BookmarksPage from './pages/BookmarksPage'
import AchievementsPage from './pages/AchievementsPage'
import FeedbackPage from './pages/FeedbackPage'
import InterviewPrepPage from './pages/InterviewPrepPage'
import CertificationGuidePage from './pages/CertificationGuidePage'
import CostManagementPage from './pages/CostManagementPage'
import ShellScriptingPage from './pages/ShellScriptingPage'
import Layout from './components/Layout'
import { useMemo } from 'react'

function AppContent() {
  const { settings } = useAppContext()

  const theme = useMemo(() => createTheme({
    palette: {
      mode: settings.theme,
      primary: {
        main: settings.theme === 'dark' ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: settings.theme === 'dark' ? '#f48fb1' : '#dc004e',
      },
      background: {
        default: settings.theme === 'dark' ? '#121212' : '#fafafa',
        paper: settings.theme === 'dark' ? '#1e1e1e' : '#ffffff',
      }
    },
    typography: {
      fontSize: settings.fontSize === 'small' ? 12 : settings.fontSize === 'large' ? 16 : 14,
    }
  }), [settings.theme, settings.fontSize])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learning-path" element={<LearningPathPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/quiz-practice" element={<QuizPracticePage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/interview-prep" element={<InterviewPrepPage />} />
            <Route path="/certifications" element={<CertificationGuidePage />} />
            <Route path="/cost-management" element={<CostManagementPage />} />
            <Route path="/shell-scripting" element={<ShellScriptingPage />} />
            <Route path="/module/:moduleId" element={<ModulePage />} />
            <Route path="/topic/:topicId" element={<TopicPage />} />
            <Route path="/quiz/:quizId" element={<QuizPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App

