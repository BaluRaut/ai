import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ThemeModeProvider, useThemeMode } from './context/ThemeContext';
import { ProgressProvider } from './context/ProgressContext';
import { getTheme } from './theme/theme';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import LearningPath from './pages/LearningPath/LearningPath';
import TopicDetail from './pages/TopicDetail/TopicDetail';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import Progress from './pages/Progress/Progress';
import QuizPractice from './pages/QuizPractice/QuizPractice';
import SQLPlayground from './pages/SQLPlayground/SQLPlayground';
import CheatSheets from './pages/CheatSheets/CheatSheets';
import Flashcards from './pages/Flashcards/Flashcards';
import InterviewQuestions from './pages/InterviewQuestions/InterviewQuestions';
import ProjectExamples from './pages/ProjectExamples/ProjectExamples';
import './App.css';

function AppContent() {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/path/:pathId" element={<LearningPath />} />
            <Route path="/path/:pathId/topic/:topicId" element={<TopicDetail />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/quiz" element={<QuizPractice />} />
            <Route path="/playground" element={<SQLPlayground />} />
            <Route path="/cheatsheets" element={<CheatSheets />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/interview-questions" element={<InterviewQuestions />} />
            <Route path="/project-examples" element={<ProjectExamples />} />
            <Route path="/project-examples/:projectId" element={<ProjectExamples />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeModeProvider>
      <ProgressProvider>
        <AppContent />
      </ProgressProvider>
    </ThemeModeProvider>
  );
}

export default App;
