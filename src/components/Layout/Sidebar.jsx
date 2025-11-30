import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
  Chip,
} from '@mui/material';
import {
  Home,
  School,
  BookmarkBorder,
  EmojiEvents,
  TrendingUp,
  Quiz,
  Feedback,
  WorkOutline,
  Style,
  Article,
  RocketLaunch,
  BusinessCenter,
  VideoLibrary,
  Insights,
  Map
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { aiLearningPaths } from '../../data/ai-courses/aiLearningPaths';
import { useProgress } from '../../context/ProgressContext';
import { useTranslation } from 'react-i18next';
import SearchBar from '../SearchBar/SearchBar';

const Sidebar = ({ open, onClose, isMobile }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { completedTopics } = useProgress();
  const { t } = useTranslation();

  // Google Form URL - Replace this with your actual Google Form URL
  const FEEDBACK_FORM_URL = 'https://forms.gle/C4dADEyYM3VBxF7K8';

  const menuItems = [
    { text: t('nav.home'), icon: <Home />, path: '/' },
    { text: t('nav.quizPractice'), icon: <Quiz />, path: '/quiz' },
    { text: 'Career Guide', icon: <Map />, path: '/career' },
    { text: 'Interview Prep', icon: <WorkOutline />, path: '/interview-prep' },
    { text: 'Flash Cards', icon: <Style />, path: '/flashcards' },
    { text: 'Cheat Sheets', icon: <Article />, path: '/cheatsheets' },
    { text: 'Visualizations', icon: <Insights />, path: '/visualizations' },
    { text: 'Capstone Projects', icon: <RocketLaunch />, path: '/capstone-projects' },
    { text: 'Case Studies', icon: <BusinessCenter />, path: '/case-studies' },
    { text: 'Resources', icon: <VideoLibrary />, path: '/resources' },
    { text: t('nav.bookmarks'), icon: <BookmarkBorder />, path: '/bookmarks' },
    { text: t('nav.progress'), icon: <TrendingUp />, path: '/progress' },
    { text: t('nav.achievements'), icon: <EmojiEvents />, path: '/achievements' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      onClose();
    }
  };

  const handleFeedbackClick = () => {
    window.open(FEEDBACK_FORM_URL, '_blank', 'noopener,noreferrer');
    if (isMobile) {
      onClose();
    }
  };

  const drawerWidth = 280;

  const drawerContent = (
    <Box sx={{ width: drawerWidth, pt: 8 }}>
      {/* Search Bar for Mobile */}
      <Box sx={{ px: 2, mb: 2 }}>
        <SearchBar isMobile={true} />
      </Box>

      <Divider sx={{ mb: 1 }} />

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        
        {/* Feedback Button */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleFeedbackClick}
            sx={{
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
              mx: 1,
              borderRadius: 1,
              mt: 1,
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>
              <Feedback />
            </ListItemIcon>
            <ListItemText primary={t('nav.feedback', 'Give Feedback')} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ px: 2, mb: 2 }}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {t('nav.learningPaths')}
        </Typography>
      </Box>

      <List>
        {aiLearningPaths.map((path) => (
          <ListItem key={path.id} disablePadding>
            <ListItemButton
              selected={location.pathname === `/path/${path.id}`}
              onClick={() => handleNavigation(`/path/${path.id}`)}
            >
              <ListItemIcon>
                <span style={{ fontSize: '1.5rem' }}>{path.icon}</span>
              </ListItemIcon>
              <ListItemText
                primary={path.title}
                secondary={path.difficulty}
                primaryTypographyProps={{ variant: 'body2' }}
                secondaryTypographyProps={{ variant: 'caption' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ px: 2 }}>
        <Typography variant="caption" color="text.secondary" gutterBottom display="block">
          {t('progress.title')}
        </Typography>
        <Chip
          icon={<EmojiEvents />}
          label={`${completedTopics.length} ${t('progress.topicsCompleted')}`}
          size="small"
          color="primary"
          sx={{ mt: 1 }}
        />
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <Drawer anchor="left" open={open} onClose={onClose}>
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
