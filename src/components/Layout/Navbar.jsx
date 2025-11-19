import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
  Home,
  BookmarkBorder,
  Feedback,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useThemeMode } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Navbar = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  // Google Form URL - Replace this with your actual Google Form URL
  const FEEDBACK_FORM_URL = 'https://forms.gle/C4dADEyYM3VBxF7K8';

  const handleFeedbackClick = () => {
    window.open(FEEDBACK_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <AppBar position="fixed" elevation={2}>
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 0,
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
          onClick={() => navigate('/')}
        >
          <span style={{ fontSize: '1.5rem' }}>🐍</span>
          {!isMobile && 'Python Learning Hub'}
          {isMobile && 'PyHub'}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {!isMobile && (
          <>
            <Button
              color="inherit"
              startIcon={<Home />}
              onClick={() => navigate('/')}
            >
              {t('nav.home')}
            </Button>
            <Button
              color="inherit"
              startIcon={<BookmarkBorder />}
              onClick={() => navigate('/bookmarks')}
            >
              {t('nav.bookmarks')}
            </Button>
            <Button
              color="inherit"
              startIcon={<Feedback />}
              onClick={handleFeedbackClick}
              sx={{ 
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' }
              }}
            >
              {t('nav.feedback', 'Feedback')}
            </Button>
          </>
        )}

        <LanguageSelector />

        <IconButton color="inherit" onClick={toggleTheme}>
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
