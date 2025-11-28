import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
  Divider,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import QuizIcon from '@mui/icons-material/Quiz';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import StyleIcon from '@mui/icons-material/Style';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useThemeMode } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import SearchBar from '../SearchBar/SearchBar';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleMode } = useThemeMode();
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mainMenuItems = [
    { text: t('nav.home'), icon: <HomeIcon />, path: '/' },
    { text: t('nav.playground'), icon: <CodeIcon />, path: '/playground' },
    { text: t('nav.bookmarks'), icon: <BookmarkIcon />, path: '/bookmarks' },
    { text: t('nav.progress'), icon: <TrendingUpIcon />, path: '/progress' },
    { text: t('nav.quizPractice'), icon: <QuizIcon />, path: '/quiz' },
  ];

  const resourceMenuItems = [
    { text: 'Cheat Sheets', icon: <DescriptionIcon />, path: '/cheatsheets' },
    { text: 'Flashcards', icon: <StyleIcon />, path: '/flashcards' },
    { text: 'Interview Questions', icon: <WorkIcon />, path: '/interview-questions' },
    { text: 'Project Examples', icon: <BuildIcon />, path: '/project-examples' },
  ];

  const drawer = (
    <Box>
      <Toolbar>
        <StorageIcon sx={{ mr: 1 }} />
        <Typography variant="h6" noWrap component="div">
          DB Mastery
        </Typography>
      </Toolbar>
      <List>
        {mainMenuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                if (isMobile) setMobileOpen(false);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setResourcesOpen(!resourcesOpen)}>
            <ListItemIcon><BuildIcon /></ListItemIcon>
            <ListItemText primary="Resources" />
            {resourcesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={resourcesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {resourceMenuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => {
                    navigate(item.path);
                    if (isMobile) setMobileOpen(false);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 0, mr: 2 }}>
            Database Learning Platform
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, maxWidth: 400, mx: 2 }}>
            <SearchBar />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <LanguageSelector />
          <IconButton onClick={toggleMode} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Container maxWidth="xl">
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
