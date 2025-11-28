import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box, Paper, Typography, Card, CardContent, Button, Chip,
  Accordion, AccordionSummary, AccordionDetails, Alert, List,
  ListItem, ListItemIcon, ListItemText, IconButton, Tooltip,
  Grid, TextField, InputAdornment, Tabs, Tab, Collapse, useTheme,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon, Code as CodeIcon, Storage as DatabaseIcon,
  ContentCopy as CopyIcon, CheckCircle as CheckIcon, Circle as CircleIcon,
  Warning as WarningIcon, Lightbulb as TipIcon, Search as SearchIcon,
  ShoppingCart, Article, Chat, School, AccountTree as DiagramIcon,
  Api as ApiIcon, ExpandLess, ExpandMore, TableChart as TableIcon,
} from '@mui/icons-material';
import { allDatabaseDesignExamples, commonDesignMistakes } from '../../data/allDatabaseDesignExamples';
import ERDiagram from '../../components/ERDiagram';
import { diagramData } from '../../data/diagramData';
import { allApiRoutesDetailed as apiRoutesDetailed } from '../../data/allApiRoutesDetailed';

const icons = { 'ecommerce': <ShoppingCart />, 'blog-cms': <Article />, 'chat-messaging': <Chat />, 'lms': <School /> };
const colors = { 'Beginner': 'success', 'Intermediate': 'warning', 'Advanced': 'error' };

const ProjectExamples = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(null);
  const [tab, setTab] = useState(0);
  const [expandedRoute, setExpandedRoute] = useState(null);
  const [expandedSchema, setExpandedSchema] = useState({});
  const [expandedAccordions, setExpandedAccordions] = useState({
    schema: true,
    diagram: true,
    relationships: false,
    indexes: false,
    queries: true,
    apiRoutes: false,
    mistakes: false
  });

  const toggleAccordion = (key) => (event, isExpanded) => {
    event.stopPropagation();
    setExpandedAccordions(prev => ({ ...prev, [key]: isExpanded }));
  };

  const filtered = useMemo(() => {
    if (!search) return allDatabaseDesignExamples;
    const q = search.toLowerCase();
    return allDatabaseDesignExamples.filter(p => 
      p.title.toLowerCase().includes(q) || p.technologies.some(t => t.toLowerCase().includes(q))
    );
  }, [search]);

  const selected = projectId ? allDatabaseDesignExamples.find(p => p.id === projectId) : null;

  const copy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  // Theme-aware code block
  const CodeBlock = ({ code, id }) => (
    <Box sx={{ position: 'relative' }}>
      <Tooltip title={copied === id ? 'Copied!' : 'Copy'}>
        <IconButton 
          size="small" 
          onClick={() => copy(code, id)} 
          sx={{ 
            position: 'absolute', 
            top: 8, 
            right: 8, 
            color: isDark ? 'grey.400' : 'grey.600', 
            zIndex: 1,
            bgcolor: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.8)',
            '&:hover': { bgcolor: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,1)' }
          }}
        >
          {copied === id ? <CheckIcon fontSize="small" /> : <CopyIcon fontSize="small" />}
        </IconButton>
      </Tooltip>
      <Paper sx={{ 
        bgcolor: isDark ? 'grey.900' : '#1e1e1e', 
        p: 2, 
        overflow: 'auto', 
        maxHeight: 500,
        border: '1px solid',
        borderColor: isDark ? 'grey.800' : 'grey.300'
      }}>
        <pre style={{ margin: 0, fontSize: '12px', color: '#e0e0e0', whiteSpace: 'pre-wrap' }}>{code?.trim()}</pre>
      </Paper>
    </Box>
  );

  // Theme-aware JSON block
  const JsonBlock = ({ data, label }) => (
    <Box sx={{ mb: 1 }}>
      <Typography variant="caption" sx={{ color: isDark ? 'grey.500' : 'grey.600', display: 'block', mb: 0.5 }}>{label}:</Typography>
      <Paper sx={{ 
        bgcolor: isDark ? 'grey.800' : '#263238', 
        p: 1.5, 
        borderRadius: 1,
        border: '1px solid',
        borderColor: isDark ? 'grey.700' : 'grey.400'
      }}>
        <pre style={{ margin: 0, fontSize: '11px', color: '#81c784', whiteSpace: 'pre-wrap' }}>
          {typeof data === 'string' ? data : JSON.stringify(data, null, 2)}
        </pre>
      </Paper>
    </Box>
  );

  const ProjectCard = ({ p }) => (
    <Card 
      onClick={() => navigate(`/project-examples/${p.id}`)} 
      sx={{ height: '100%', cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 }, border: '1px solid', borderColor: 'divider', transition: 'all 0.2s' }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          {icons[p.id] || <DatabaseIcon />}
          <Typography variant="h6" sx={{ fontSize: '1rem' }}>{p.title}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 40 }}>{p.description}</Typography>
        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
          <Chip label={p.difficulty} size="small" color={colors[p.difficulty] || 'default'} />
          {p.technologies.slice(0, 2).map(t => <Chip key={t} label={t} size="small" variant="outlined" />)}
        </Box>
      </CardContent>
    </Card>
  );

  // Get table count - handle both formats
  const getTableCount = (p) => {
    if (p.tables?.length) return p.tables.length;
    if (p.schema) {
      const matches = p.schema.match(/CREATE TABLE/gi);
      return matches ? matches.length : 0;
    }
    return 0;
  };

  const Detail = ({ p }) => {
    const routes = apiRoutesDetailed[p.id];
    
    return (
      <Box>
        <Button onClick={() => navigate('/project-examples')} sx={{ mb: 2 }}>← Back to Projects</Button>
        
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              {icons[p.id] || <DatabaseIcon />}
              <Box>
                <Typography variant="h5">{p.title}</Typography>
                <Typography color="text.secondary">{p.description}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label={p.difficulty} color={colors[p.difficulty]} />
              {p.technologies.map(t => <Chip key={t} label={t} variant="outlined" />)}
            </Box>
            {p.overview && (
              <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>{p.overview}</Typography>
            )}
          </CardContent>
        </Card>

        {/* Schema Section - with sub-accordions for each table */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              <DatabaseIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Database Schema ({getTableCount(p)} Tables)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {p.tables?.length > 0 ? (
              p.tables.map((t, i) => (
                <Accordion 
                  key={i} 
                  expanded={expandedSchema[`table-${i}`] ?? (i < 2)}
                  onChange={() => setExpandedSchema(prev => ({ ...prev, [`table-${i}`]: !prev[`table-${i}`] }))}
                  sx={{ 
                    mb: 1, 
                    '&:before': { display: 'none' },
                    bgcolor: isDark ? 'grey.900' : 'grey.50',
                    border: '1px solid',
                    borderColor: 'divider'
                  }}
                >
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ 
                      bgcolor: isDark ? 'grey.800' : 'grey.100',
                      '&:hover': { bgcolor: isDark ? 'grey.700' : 'grey.200' }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <TableIcon fontSize="small" color="primary" />
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{t.name}</Typography>
                      {t.description && (
                        <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                          - {t.description}
                        </Typography>
                      )}
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 2 }}>
                    <CodeBlock code={t.schema} id={`s-${i}`} />
                  </AccordionDetails>
                </Accordion>
              ))
            ) : p.schema ? (
              // Parse schema into individual CREATE TABLE statements for sub-accordions
              (() => {
                const tableStatements = p.schema.split(/(?=CREATE TABLE)/gi).filter(s => s.trim());
                if (tableStatements.length <= 1) {
                  return <CodeBlock code={p.schema} id="schema" />;
                }
                return tableStatements.map((stmt, i) => {
                  const tableNameMatch = stmt.match(/CREATE TABLE\s+(?:IF NOT EXISTS\s+)?[`"]?(\w+)[`"]?/i);
                  const tableName = tableNameMatch ? tableNameMatch[1] : `Table ${i + 1}`;
                  return (
                    <Accordion 
                      key={i}
                      expanded={expandedSchema[`stmt-${i}`] ?? (i < 3)}
                      onChange={() => setExpandedSchema(prev => ({ ...prev, [`stmt-${i}`]: !prev[`stmt-${i}`] }))}
                      sx={{ 
                        mb: 1, 
                        '&:before': { display: 'none' },
                        bgcolor: isDark ? 'grey.900' : 'grey.50',
                        border: '1px solid',
                        borderColor: 'divider'
                      }}
                    >
                      <AccordionSummary 
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ 
                          bgcolor: isDark ? 'grey.800' : 'grey.100',
                          '&:hover': { bgcolor: isDark ? 'grey.700' : 'grey.200' }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <TableIcon fontSize="small" color="primary" />
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{tableName}</Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails sx={{ p: 2 }}>
                        <CodeBlock code={stmt.trim()} id={`stmt-${i}`} />
                      </AccordionDetails>
                    </Accordion>
                  );
                });
              })()
            ) : (
              <Typography color="text.secondary">No schema available</Typography>
            )}
          </AccordionDetails>
        </Accordion>

        {/* ER Diagram */}
        {diagramData[p.id] && (
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6"><DiagramIcon sx={{ mr: 1, verticalAlign: 'middle' }} />ER Diagram</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ERDiagram tables={diagramData[p.id].tables} relationships={diagramData[p.id].relationships} height={450} />
            </AccordionDetails>
          </Accordion>
        )}

        {/* Relationships */}
        {p.relationships && (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Relationships</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                {p.relationships.map((r, i) => (
                  <ListItem key={i}>
                    <ListItemIcon><CircleIcon sx={{ fontSize: 8 }} /></ListItemIcon>
                    <ListItemText primary={r} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        )}

        {/* Indexes */}
        {p.indexes && (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Indexes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CodeBlock code={Array.isArray(p.indexes) ? p.indexes.join('\n\n') : p.indexes} id="idx" />
            </AccordionDetails>
          </Accordion>
        )}

        {/* Sample Queries */}
        {p.sampleQueries && (
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6"><CodeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />Sample Queries</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {p.sampleQueries.map((q, i) => (
                <Box key={i} sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>{q.name}</Typography>
                  {q.description && <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{q.description}</Typography>}
                  <CodeBlock code={q.query} id={`q-${i}`} />
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        )}

        {/* API Routes with Request/Response */}
        {routes && (
          <Accordion 
            expanded={expandedAccordions.apiRoutes} 
            onChange={toggleAccordion('apiRoutes')}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                <ApiIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                API Routes ({routes.routes.length})
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Base URL: <code style={{ 
                  background: isDark ? '#333' : '#e0e0e0', 
                  color: isDark ? '#fff' : '#333',
                  padding: '2px 6px', 
                  borderRadius: 4 
                }}>{routes.baseUrl}</code>
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {routes.routes.map((route, i) => {
                  const isExpanded = expandedRoute === `${p.id}-${i}`;
                  return (
                    <Paper 
                      key={i} 
                      sx={{ 
                        bgcolor: isDark ? 'grey.900' : 'grey.100', 
                        overflow: 'hidden',
                        border: '1px solid',
                        borderColor: isDark ? 'grey.800' : 'grey.300'
                      }}
                    >
                      <Box 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setExpandedRoute(isExpanded ? null : `${p.id}-${i}`);
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                        sx={{ 
                          p: 1.5, 
                          cursor: 'pointer', 
                          '&:hover': { bgcolor: isDark ? 'grey.800' : 'grey.200' } 
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          <Chip 
                            label={route.method} 
                            size="small" 
                            sx={{ 
                              minWidth: 65,
                              fontWeight: 600,
                              bgcolor: route.method === 'GET' ? 'success.main' : 
                                       route.method === 'POST' ? 'primary.main' : 
                                       route.method === 'PUT' ? 'warning.main' : 
                                       route.method === 'DELETE' ? 'error.main' : 
                                       route.method === 'WS' ? 'secondary.main' : 'grey.600',
                              color: 'white'
                            }} 
                          />
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              fontFamily: 'monospace', 
                              color: isDark ? 'primary.light' : 'primary.dark', 
                              flex: 1,
                              fontWeight: 500
                            }}
                          >
                            {route.path}
                          </Typography>
                          {isExpanded ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
                        </Box>
                        <Typography variant="caption" color="text.secondary">{route.description}</Typography>
                      </Box>
                      
                      <Collapse in={isExpanded}>
                        <Box sx={{ 
                          p: 2, 
                          pt: 1, 
                          borderTop: '1px solid', 
                          borderColor: isDark ? 'grey.800' : 'grey.300',
                          bgcolor: isDark ? 'grey.850' : 'grey.50'
                        }}>
                          {route.purpose && (
                            <Alert severity="info" sx={{ mb: 2, py: 0 }}>
                              <Typography variant="caption"><strong>Why:</strong> {route.purpose}</Typography>
                            </Alert>
                          )}
                          
                          {route.params && (
                            <Typography variant="caption" display="block" sx={{ color: 'info.main', mb: 1 }}>
                              <strong>Query Params:</strong> {route.params}
                            </Typography>
                          )}
                          
                          {route.requestBody && (
                            <JsonBlock data={route.requestBody} label="Request Body" />
                          )}
                          
                          {route.responseBody && (
                            <JsonBlock data={route.responseBody} label="Response Body" />
                          )}
                        </Box>
                      </Collapse>
                    </Paper>
                  );
                })}
              </Box>
            </AccordionDetails>
          </Accordion>
        )}

        {/* Common Mistakes */}
        {p.commonMistakes && (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                <WarningIcon sx={{ mr: 1, verticalAlign: 'middle', color: 'warning.main' }} />
                Common Mistakes
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {p.commonMistakes.map((m, i) => (
                <Alert severity="warning" sx={{ mb: 2 }} key={i}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{m.mistake}</Typography>
                  <Typography variant="body2">{m.consequence}</Typography>
                  <Typography variant="body2" color="success.main">✓ {m.solution}</Typography>
                </Alert>
              ))}
            </AccordionDetails>
          </Accordion>
        )}

        {/* Design Tips */}
        {p.designTips && (
          <Alert severity="info" sx={{ mt: 3 }} icon={<TipIcon />}>
            <Typography variant="subtitle2" gutterBottom>Design Tips:</Typography>
            <List dense>
              {p.designTips.map((t, i) => (
                <ListItem key={i} sx={{ py: 0 }}>
                  <ListItemIcon><CircleIcon sx={{ fontSize: 8 }} /></ListItemIcon>
                  <ListItemText primary={t} />
                </ListItem>
              ))}
            </List>
          </Alert>
        )}
      </Box>
    );
  };

  const Mistakes = () => (
    <Box>
      <Typography variant="h5" gutterBottom>Common Database Design Mistakes</Typography>
      {commonDesignMistakes.map(m => (
        <Accordion key={m.id} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Chip label={m.category} size="small" color="primary" variant="outlined" sx={{ mr: 2 }} />
            <Typography>{m.mistake}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" paragraph><strong>Problem:</strong> {m.description}</Typography>
            <Typography variant="body2" color="error.main" paragraph><strong>Consequence:</strong> {m.consequence}</Typography>
            <Typography variant="body2" color="success.main" paragraph><strong>Solution:</strong> {m.solution}</Typography>
            {m.example && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" gutterBottom>Example:</Typography>
                <CodeBlock code={m.example} id={`m-${m.id}`} />
              </Box>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Real-World Database Design Examples</Typography>
      <Typography color="text.secondary" paragraph>
        Learn from {allDatabaseDesignExamples.length} complete examples with schemas, queries, API routes & common mistakes.
      </Typography>

      {!projectId && (
        <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ mb: 3 }}>
          <Tab label={`Projects (${allDatabaseDesignExamples.length})`} />
          <Tab label={`Mistakes (${commonDesignMistakes.length})`} />
        </Tabs>
      )}

      {projectId ? (
        selected ? <Detail p={selected} /> : (
          <Alert severity="error">
            Project "{projectId}" not found. <Button onClick={() => navigate('/project-examples')}>Back to Projects</Button>
          </Alert>
        )
      ) : (
        <>
          {tab === 0 && (
            <>
              <TextField 
                fullWidth 
                placeholder="Search projects..." 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                sx={{ mb: 3 }} 
                InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment> }} 
              />
              <Grid container spacing={2}>
                {filtered.map(p => (
                  <Grid item xs={12} sm={6} md={4} key={p.id}>
                    <ProjectCard p={p} />
                  </Grid>
                ))}
                {!filtered.length && (
                  <Grid item xs={12}>
                    <Alert severity="info">No projects found.</Alert>
                  </Grid>
                )}
              </Grid>
            </>
          )}
          {tab === 1 && <Mistakes />}
        </>
      )}
    </Box>
  );
};

export default ProjectExamples;
