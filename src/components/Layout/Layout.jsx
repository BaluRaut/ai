import { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Navbar onMenuClick={handleDrawerToggle} />
      
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar
          open={mobileOpen}
          onClose={handleDrawerToggle}
          isMobile={isMobile}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 0,
            mt: 8,
            ml: isMobile ? 0 : '0px',
            width: isMobile ? '100%' : 'calc(100% - 280px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ flex: 1 }}>
            {children}
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
