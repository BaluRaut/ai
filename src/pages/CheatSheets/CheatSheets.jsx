import { useState, useCallback, memo } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  IconButton,
  Tabs,
  Tab,
  Tooltip,
  Divider,
} from '@mui/material';
import {
  ContentCopy,
  Print,
  ArrowBack,
  Description,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { cheatSheets } from '../../data/cheatsheets';

const CheatSheets = memo(() => {
  const { t } = useTranslation();
  const [selectedSheet, setSelectedSheet] = useState(null);
  const [copiedItem, setCopiedItem] = useState(null);

  // Copy to clipboard - memoized
  const handleCopy = useCallback((text) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(text);
    setTimeout(() => setCopiedItem(null), 2000);
  }, []);

  // Print sheet
  const handlePrint = () => {
    window.print();
  };

  // Render sheet selection
  const renderSheetSelection = () => (
    <Grid container spacing={3}>
      {cheatSheets.map((sheet) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={sheet.id}>
          <Card
            sx={{
              cursor: 'pointer',
              transition: 'all 0.2s',
              borderTop: `4px solid ${sheet.color}`,
              '&:hover': { 
                transform: 'translateY(-4px)', 
                boxShadow: 4,
              },
            }}
            onClick={() => setSelectedSheet(sheet)}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Typography variant="h2">{sheet.icon}</Typography>
                <Box>
                  <Typography variant="h6">{sheet.title}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {sheet.sections.length} sections
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                {sheet.sections.slice(0, 3).map((section) => (
                  <Chip
                    key={section.title}
                    label={section.title}
                    size="small"
                    variant="outlined"
                  />
                ))}
                {sheet.sections.length > 3 && (
                  <Chip
                    label={`+${sheet.sections.length - 3} more`}
                    size="small"
                  />
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  // Render selected sheet
  const renderSheet = () => (
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => setSelectedSheet(null)}
        >
          All Cheat Sheets
        </Button>
        <Box>
          <Tooltip title="Print">
            <IconButton onClick={handlePrint}>
              <Print />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Sheet Title */}
      <Paper 
        sx={{ 
          p: 3, 
          mb: 3, 
          background: `linear-gradient(135deg, ${selectedSheet.color}20 0%, ${selectedSheet.color}10 100%)`,
          borderLeft: `4px solid ${selectedSheet.color}`,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h2">{selectedSheet.icon}</Typography>
          <Box>
            <Typography variant="h4">{selectedSheet.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              Quick Reference Guide
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Sections Grid */}
      <Grid container spacing={3}>
        {selectedSheet.sections.map((section) => (
          <Grid size={{ xs: 12, md: 6 }} key={section.title}>
            <Paper sx={{ height: '100%' }}>
              <Box 
                sx={{ 
                  p: 2, 
                  bgcolor: `${selectedSheet.color}15`,
                  borderBottom: `2px solid ${selectedSheet.color}`,
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {section.title}
                </Typography>
              </Box>
              <TableContainer>
                <Table size="small">
                  <TableBody>
                    {section.items.map((item, index) => (
                      <TableRow 
                        key={index}
                        sx={{ 
                          '&:hover': { bgcolor: 'action.hover' },
                          cursor: item.syntax ? 'pointer' : 'default',
                        }}
                        onClick={() => item.syntax && handleCopy(item.syntax)}
                      >
                        <TableCell 
                          sx={{ 
                            fontFamily: 'monospace', 
                            fontSize: '0.85rem',
                            color: 'primary.main',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            width: '50%',
                          }}
                        >
                          {item.syntax}
                          {item.syntax && (
                            <Tooltip title={copiedItem === item.syntax ? 'Copied!' : 'Click to copy'}>
                              <ContentCopy 
                                sx={{ 
                                  fontSize: 14, 
                                  ml: 1, 
                                  opacity: 0.5,
                                  verticalAlign: 'middle',
                                }} 
                              />
                            </Tooltip>
                          )}
                        </TableCell>
                        <TableCell sx={{ fontSize: '0.85rem' }}>
                          {item.description}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Print styles */}
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            .MuiContainer-root, .MuiContainer-root * {
              visibility: visible;
            }
            .MuiContainer-root {
              position: absolute;
              left: 0;
              top: 0;
            }
            .MuiButton-root, .MuiIconButton-root {
              display: none !important;
            }
          }
        `}
      </style>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Description /> Cheat Sheets
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Quick reference cards for Python syntax, patterns, and common operations
        </Typography>
      </Box>

      {selectedSheet ? renderSheet() : renderSheetSelection()}
    </Container>
  );
});

export default CheatSheets;
