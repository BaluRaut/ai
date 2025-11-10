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
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useThemeMode } from '../../context/ThemeContext';

const Navbar = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
              Home
            </Button>
            <Button
              color="inherit"
              startIcon={<BookmarkBorder />}
              onClick={() => navigate('/bookmarks')}
            >
              Bookmarks
            </Button>
          </>
        )}

        <IconButton color="inherit" onClick={toggleTheme}>
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
