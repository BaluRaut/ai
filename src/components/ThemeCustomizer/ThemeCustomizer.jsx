import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Slider,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Divider,
  Grid,
  Paper,
  IconButton,
} from '@mui/material';
import {
  Close as CloseIcon,
  Palette as PaletteIcon,
  TextFields as TextFieldsIcon,
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
} from '@mui/icons-material';

const THEME_PRESETS = {
  default: { primary: '#1976d2', secondary: '#dc004e' },
  ocean: { primary: '#0077b6', secondary: '#00b4d8' },
  forest: { primary: '#2d6a4f', secondary: '#74c69d' },
  sunset: { primary: '#ff6b35', secondary: '#f7931e' },
  purple: { primary: '#7209b7', secondary: '#f72585' },
  teal: { primary: '#14746f', secondary: '#38b000' },
};

const FONT_FAMILIES = [
  { label: 'Default (Roboto)', value: 'Roboto, sans-serif' },
  { label: 'System', value: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
  { label: 'Serif', value: 'Georgia, serif' },
  { label: 'Monospace', value: '"Courier New", monospace' },
  { label: 'Open Sans', value: '"Open Sans", sans-serif' },
];

const ThemeCustomizer = ({ open, onClose, currentSettings, onApply }) => {
  const [settings, setSettings] = useState(currentSettings || {
    mode: 'light',
    colorPreset: 'default',
    fontSize: 16,
    fontFamily: 'Roboto, sans-serif',
    spacing: 8,
    borderRadius: 4,
  });

  const handleApply = () => {
    // Save to localStorage
    localStorage.setItem('themeSettings', JSON.stringify(settings));
    // Trigger custom event for immediate update
    window.dispatchEvent(new Event('themeUpdate'));
    onClose();
  };

  const handleReset = () => {
    const defaultSettings = {
      mode: 'light',
      colorPreset: 'default',
      fontSize: 16,
      fontFamily: 'Roboto, sans-serif',
      spacing: 8,
      borderRadius: 4,
    };
    setSettings(defaultSettings);
    localStorage.setItem('themeSettings', JSON.stringify(defaultSettings));
    window.dispatchEvent(new Event('themeUpdate'));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 3, maxHeight: '90vh' }
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PaletteIcon color="primary" />
            <Typography variant="h6">Theme Customizer</Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ pt: 3 }}>
        {/* Mode Toggle */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkIcon fontSize="small" />
            Theme Mode
          </Typography>
          <ToggleButtonGroup
            value={settings.mode}
            exclusive
            onChange={(e, newMode) => newMode && setSettings({ ...settings, mode: newMode })}
            fullWidth
            sx={{ mt: 1 }}
          >
            <ToggleButton value="light">
              <LightIcon sx={{ mr: 1 }} fontSize="small" />
              Light
            </ToggleButton>
            <ToggleButton value="dark">
              <DarkIcon sx={{ mr: 1 }} fontSize="small" />
              Dark
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Color Presets */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PaletteIcon fontSize="small" />
            Color Scheme
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {Object.entries(THEME_PRESETS).map(([key, colors]) => (
              <Grid item xs={4} sm={3} key={key}>
                <Paper
                  onClick={() => setSettings({ ...settings, colorPreset: key })}
                  sx={{
                    p: 2,
                    cursor: 'pointer',
                    border: 2,
                    borderColor: settings.colorPreset === key ? 'primary.main' : 'transparent',
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 0.5, mb: 1 }}>
                    <Box sx={{ flex: 1, height: 40, bgcolor: colors.primary, borderRadius: 1 }} />
                    <Box sx={{ flex: 1, height: 40, bgcolor: colors.secondary, borderRadius: 1 }} />
                  </Box>
                  <Typography variant="caption" align="center" display="block" textTransform="capitalize">
                    {key}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Font Size */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Font Size
          </Typography>
          <Box sx={{ px: 2 }}>
            <Slider
              value={settings.fontSize}
              onChange={(e, value) => setSettings({ ...settings, fontSize: value })}
              min={12}
              max={20}
              step={1}
              marks={[
                { value: 12, label: 'Small' },
                { value: 16, label: 'Medium' },
                { value: 20, label: 'Large' },
              ]}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box sx={{ mt: 2, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
            <Typography sx={{ fontSize: `${settings.fontSize}px` }}>
              Preview: This is how text will look with {settings.fontSize}px font size
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Font Family */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextFieldsIcon fontSize="small" />
            Font Family
          </Typography>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              value={settings.fontFamily}
              onChange={(e) => setSettings({ ...settings, fontFamily: e.target.value })}
            >
              {FONT_FAMILIES.map((font) => (
                <FormControlLabel
                  key={font.value}
                  value={font.value}
                  control={<Radio />}
                  label={
                    <Typography sx={{ fontFamily: font.value }}>
                      {font.label}
                    </Typography>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Spacing */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Spacing Density
          </Typography>
          <Box sx={{ px: 2 }}>
            <Slider
              value={settings.spacing}
              onChange={(e, value) => setSettings({ ...settings, spacing: value })}
              min={4}
              max={12}
              step={2}
              marks={[
                { value: 4, label: 'Compact' },
                { value: 8, label: 'Normal' },
                { value: 12, label: 'Comfortable' },
              ]}
              valueLabelDisplay="auto"
            />
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Border Radius */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Border Radius
          </Typography>
          <Box sx={{ px: 2 }}>
            <Slider
              value={settings.borderRadius}
              onChange={(e, value) => setSettings({ ...settings, borderRadius: value })}
              min={0}
              max={16}
              step={2}
              marks={[
                { value: 0, label: 'Square' },
                { value: 8, label: 'Rounded' },
                { value: 16, label: 'Very Round' },
              ]}
              valueLabelDisplay="auto"
            />
          </Box>
          <Paper sx={{ mt: 2, p: 3, borderRadius: `${settings.borderRadius}px` }}>
            <Typography>Preview: Card with {settings.borderRadius}px border radius</Typography>
          </Paper>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleReset}
          >
            Reset to Default
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={handleApply}
          >
            Apply Theme
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ThemeCustomizer;
