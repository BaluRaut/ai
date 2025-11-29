import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';
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
import InterviewPrep from './pages/InterviewPrep/InterviewPrep';
import Flashcards from './pages/Flashcards/Flashcards';
import CheatSheets from './pages/CheatSheets/CheatSheets';
import CapstoneProjects from './pages/CapstoneProjects/CapstoneProjects';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import Resources from './pages/Resources/Resources';
import Visualizations from './pages/Visualizations/Visualizations';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';

function AppContent() {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);
amplitude.add(sessionReplayPlugin());
amplitude.init('cf9409dbde4fb96686ac8fabd345e057', {"autocapture":{"attribution":true,"fileDownloads":true,"formInteractions":true,"pageViews":true,"sessions":true,"elementInteractions":true,"networkTracking":true,"webVitals":true,"frustrationInteractions":true}});
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
            <Route path="/interview-prep" element={<InterviewPrep />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/cheatsheets" element={<CheatSheets />} />
            <Route path="/capstone-projects" element={<CapstoneProjects />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/visualizations" element={<Visualizations />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
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

