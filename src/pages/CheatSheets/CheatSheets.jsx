import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Paper,
  Divider,
  Chip,
  IconButton,
  Tooltip,
  useTheme,
  alpha
} from '@mui/material';
import {
  ContentCopy,
  Print,
  Download,
  Code
} from '@mui/icons-material';
import { cheatSheets } from '../../data/cheatsheets/cheatSheets';

function CheatSheets() {
  const theme = useTheme();
  const [selectedSheet, setSelectedSheet] = useState(0);
  const isDarkMode = theme.palette.mode === 'dark';

  const sheets = cheatSheets.sheets;
  const currentSheet = sheets[selectedSheet];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  const handlePrint = () => {
    window.print();
  };

  const renderContent = (section) => {
    if (section.code) {
      return (
        <Box sx={{ position: 'relative' }}>
          <Tooltip title="Copy code">
            <IconButton
              size="small"
              onClick={() => handleCopyCode(section.code)}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 1,
                bgcolor: 'background.paper',
                '&:hover': { bgcolor: 'action.hover' }
              }}
            >
              <ContentCopy fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box
            component="pre"
            sx={{
              bgcolor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
              color: isDarkMode ? '#d4d4d4' : '#333',
              p: 2,
              borderRadius: 1,
              overflow: 'auto',
              fontSize: '0.85rem',
              fontFamily: 'monospace',
              m: 0
            }}
          >
            <code>{section.code.trim()}</code>
          </Box>
        </Box>
      );
    }

    if (section.content) {
      return (
        <Box sx={{ 
          '& table': { 
            width: '100%', 
            borderCollapse: 'collapse',
            '& th, & td': {
              border: `1px solid ${theme.palette.divider}`,
              p: 1,
              textAlign: 'left'
            },
            '& th': {
              bgcolor: alpha(theme.palette.primary.main, 0.1)
            }
          },
          '& code': {
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            px: 0.5,
            borderRadius: 0.5,
            fontFamily: 'monospace'
          },
          '& pre': {
            bgcolor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
            p: 2,
            borderRadius: 1,
            overflow: 'auto'
          }
        }}>
          <Typography 
            variant="body2" 
            component="div"
            sx={{ 
              whiteSpace: 'pre-wrap',
              fontFamily: 'inherit',
              '& code': {
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                px: 0.5,
                py: 0.25,
                borderRadius: 0.5,
                fontFamily: 'monospace',
                fontSize: '0.85em'
              }
            }}
            dangerouslySetInnerHTML={{ 
              __html: section.content
                .trim()
                .replace(/`([^`]+)`/g, '<code>$1</code>')
                .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br/>')
            }}
          />
        </Box>
      );
    }

    return null;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            📋 Cheat Sheets
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quick reference guides for Python, NumPy, Pandas, and more
          </Typography>
        </Box>
        <Box>
          <Tooltip title="Print cheat sheet">
            <IconButton onClick={handlePrint} color="primary">
              <Print />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Sheet Selection Cards */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {sheets.map((sheet, index) => (
          <Grid item xs={6} sm={4} md={2} key={sheet.id}>
            <Card
              onClick={() => setSelectedSheet(index)}
              sx={{
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s',
                border: 2,
                borderColor: selectedSheet === index ? sheet.color : 'transparent',
                bgcolor: selectedSheet === index 
                  ? alpha(sheet.color, 0.1) 
                  : 'background.paper',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <CardContent sx={{ py: 2 }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {sheet.icon}
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  {sheet.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Current Sheet Content */}
      <Paper 
        sx={{ 
          p: 3,
          borderTop: 4,
          borderColor: currentSheet.color
        }}
        className="print-content"
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Typography variant="h4">{currentSheet.icon}</Typography>
          <Typography variant="h5" fontWeight="bold">
            {currentSheet.title} Cheat Sheet
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {currentSheet.sections.map((section, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                variant="outlined" 
                sx={{ 
                  height: '100%',
                  '& .MuiCardContent-root': {
                    height: '100%'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Code sx={{ color: currentSheet.color }} />
                    <Typography variant="h6" fontWeight="medium">
                      {section.title}
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  {renderContent(section)}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Quick Reference Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          📚 All Available Cheat Sheets
        </Typography>
        <Grid container spacing={2}>
          {sheets.map((sheet, index) => (
            <Grid item xs={12} sm={6} md={4} key={sheet.id}>
              <Card 
                variant="outlined"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: alpha(sheet.color, 0.05)
                  }
                }}
                onClick={() => {
                  setSelectedSheet(index);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Typography variant="h5" sx={{ mr: 2 }}>{sheet.icon}</Typography>
                <Box>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {sheet.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {sheet.sections.length} sections
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Print Styles */}
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            .print-content, .print-content * {
              visibility: visible;
            }
            .print-content {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
          }
        `}
      </style>
    </Container>
  );
}

export default CheatSheets;
