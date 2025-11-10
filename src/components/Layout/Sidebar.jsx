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
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { learningPaths } from '../../data/courseContent';
import { useProgress } from '../../context/ProgressContext';

const Sidebar = ({ open, onClose, isMobile }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { completedTopics } = useProgress();

  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Quiz Practice', icon: <Quiz />, path: '/quiz' },
    { text: 'Bookmarks', icon: <BookmarkBorder />, path: '/bookmarks' },
    { text: 'Progress', icon: <TrendingUp />, path: '/progress' },
    { text: 'Achievements', icon: <EmojiEvents />, path: '/achievements' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      onClose();
    }
  };

  const drawerWidth = 280;

  const drawerContent = (
    <Box sx={{ width: drawerWidth, pt: 8 }}>
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
      </List>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ px: 2, mb: 2 }}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Learning Paths
        </Typography>
      </Box>

      <List>
        {learningPaths.map((path) => (
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
                secondary={path.level}
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
          Your Progress
        </Typography>
        <Chip
          icon={<EmojiEvents />}
          label={`${completedTopics.length} Topics Completed`}
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
