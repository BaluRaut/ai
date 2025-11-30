import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const ThemeContext = createContext({
  mode: 'light',
  toggleTheme: () => {},
  customSettings: null,
});

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeModeProvider');
  }
  return context;
};

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode || 'light';
  });

  const [customSettings, setCustomSettings] = useState(() => {
    const saved = localStorage.getItem('themeSettings');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  // Listen for theme settings changes
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('themeSettings');
      setCustomSettings(saved ? JSON.parse(saved) : null);
    };
    
    // Listen for both storage events and custom theme update events
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('themeUpdate', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('themeUpdate', handleStorageChange);
    };
  }, []);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({ mode, toggleTheme, customSettings }), [mode, customSettings]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
