import { createTheme } from '@mui/material/styles';

const THEME_PRESETS = {
  default: { primary: '#FF6B6B', secondary: '#4ECDC4' },
  ocean: { primary: '#0077b6', secondary: '#00b4d8' },
  forest: { primary: '#2d6a4f', secondary: '#74c69d' },
  sunset: { primary: '#ff6b35', secondary: '#f7931e' },
  purple: { primary: '#7209b7', secondary: '#f72585' },
  teal: { primary: '#14746f', secondary: '#38b000' },
};

// Create a custom theme with dark/light mode support
export const getTheme = (mode, customSettings = null) => {
  // Get custom colors from preset
  const colorPreset = customSettings?.colorPreset || 'default';
  const colors = THEME_PRESETS[colorPreset] || THEME_PRESETS.default;
  
  const fontSize = customSettings?.fontSize || 16;
  const fontFamily = customSettings?.fontFamily || '"Roboto", "Helvetica", "Arial", sans-serif';
  const spacing = customSettings?.spacing || 8;
  const borderRadius = customSettings?.borderRadius || 4;
  
  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
      success: {
        main: '#4caf50',
      },
      warning: {
        main: '#ff9800',
      },
      error: {
        main: '#f44336',
      },
      background: {
        default: mode === 'dark' ? '#0a1929' : '#f5f5f5',
        paper: mode === 'dark' ? '#1a2027' : '#ffffff',
      },
    },
    spacing: spacing,
    shape: {
      borderRadius: borderRadius,
    },
    typography: {
    fontFamily: fontFamily,
    fontSize: fontSize,
    h1: {
      fontSize: `${fontSize * 2.5 / 16}rem`,
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: `${fontSize * 2 / 16}rem`,
      },
    },
    h2: {
      fontSize: `${fontSize * 2 / 16}rem`,
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: `${fontSize * 1.75 / 16}rem`,
      },
    },
    h3: {
      fontSize: `${fontSize * 1.75 / 16}rem`,
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: `${fontSize * 1.5 / 16}rem`,
      },
    },
    h4: {
      fontSize: `${fontSize * 1.5 / 16}rem`,
      fontWeight: 500,
      '@media (max-width:600px)': {
        fontSize: `${fontSize * 1.25 / 16}rem`,
      },
    },
    h5: {
      fontSize: `${fontSize * 1.25 / 16}rem`,
      fontWeight: 500,
    },
    h6: {
      fontSize: `${fontSize / 16}rem`,
      fontWeight: 500,
    },
    body1: {
      fontSize: `${fontSize / 16}rem`,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: `${fontSize * 0.875 / 16}rem`,
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: borderRadius,
          padding: '8px 24px',
          fontSize: `${fontSize / 16}rem`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius * 2,
          boxShadow: mode === 'dark' 
            ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
            : '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
        },
      },
    },
  },
  });
};
