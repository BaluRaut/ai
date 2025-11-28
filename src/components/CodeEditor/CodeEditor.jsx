import { useState, useEffect, useMemo } from 'react';
import Editor from '@monaco-editor/react';
import {
  Box,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Chip,
  Button,
  TextField,
  Divider,
  Alert,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ErrorIcon from '@mui/icons-material/Error';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableChartIcon from '@mui/icons-material/TableChart';
import KeyIcon from '@mui/icons-material/Key';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ListIcon from '@mui/icons-material/List';
import CancelIcon from '@mui/icons-material/Cancel';
import ReactFlow, { Background, Controls, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeEditor = ({ assignments, playgroundData = null }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [completed, setCompleted] = useState(new Set());
  const [db, setDb] = useState(null);
  const [executionResult, setExecutionResult] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [running, setRunning] = useState(false);
  const [tableSchema, setTableSchema] = useState([]);
  const [viewMode, setViewMode] = useState('list');

  const currentAssignment = assignments[selectedIndex];

  // Initialize SQL.js database
  useEffect(() => {
    const initDB = async () => {
      if (!playgroundData) return;
      
      try {
        const SQL = await window.initSqlJs({
          locateFile: file => `https://sql.js.org/dist/${file}`
        });
        const database = new SQL.Database();
        
        // Execute initial data setup
        if (Array.isArray(playgroundData)) {
          const sqlStatements = playgroundData.join(';\n') + ';';
          database.run(sqlStatements);
        }
        
        setDb(database);
        
        // Get table schema information
        const tables = database.exec(`
          SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'
        `);
        
        if (tables.length > 0 && tables[0].values.length > 0) {
          const schemaInfo = tables[0].values.map(([tableName]) => {
            const columnsResult = database.exec(`PRAGMA table_info(${tableName})`);
            const columns = columnsResult[0]?.values.map(col => ({
              name: col[1],
              type: col[2],
              notNull: col[3] === 1,
              primaryKey: col[5] === 1,
            })) || [];
            
            const fkResult = database.exec(`PRAGMA foreign_key_list(${tableName})`);
            const foreignKeys = fkResult[0]?.values.map(fk => ({
              column: fk[3],
              referencedTable: fk[2],
              referencedColumn: fk[4],
            })) || [];
            
            const countResult = database.exec(`SELECT COUNT(*) FROM ${tableName}`);
            const rowCount = countResult[0]?.values[0][0] || 0;
            
            return {
              name: tableName,
              columns,
              foreignKeys,
              rowCount,
            };
          });
          
          setTableSchema(schemaInfo);
        }
      } catch (err) {
        console.error('Failed to initialize database:', err);
      }
    };

    initDB();
    
    return () => {
      if (db) db.close();
    };
  }, [playgroundData]);

  // Generate React Flow nodes and edges
  const { nodes, edges } = useMemo(() => {
    if (tableSchema.length === 0) return { nodes: [], edges: [] };

    const nodeWidth = 280;
    const nodeSpacingX = 380;
    const nodeSpacingY = 230;

    const newNodes = tableSchema.map((table, index) => {
      const col = index % 3;
      const row = Math.floor(index / 3);
      
      const pkColumns = table.columns.filter(c => c.primaryKey).map(c => c.name);
      const fkCount = table.foreignKeys.length;
      const description = `${table.columns.length} columns • ${pkColumns.length} PK${fkCount > 0 ? ` • ${fkCount} FK` : ''}`;
      
      return {
        id: table.name,
        type: 'default',
        position: { x: col * nodeSpacingX, y: row * nodeSpacingY },
        data: {
          label: (
            <Box sx={{ minWidth: nodeWidth - 40 }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: '1rem', mb: 0.5, color: '#1976d2' }}>
                📊 {table.name}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.8, fontSize: '0.65rem' }}>
                {description}
              </Typography>
              <Box sx={{ 
                maxHeight: 50, 
                overflow: 'auto', 
                fontSize: '0.7rem',
                bgcolor: '#f5f5f5',
                p: 0.4,
                borderRadius: 1,
                mb: 0.8
              }}>
                {table.columns.slice(0, 4).map((c, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
                    {c.primaryKey && <KeyIcon sx={{ fontSize: 9, color: 'primary.main' }} />}
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', fontSize: '0.65rem' }}>
                      {c.name} ({c.type})
                    </Typography>
                  </Box>
                ))}
                {table.columns.length > 4 && (
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6rem' }}>
                    +{table.columns.length - 4} more
                  </Typography>
                )}
              </Box>
              <Chip label={`${table.rowCount} rows`} size="small" color="primary" sx={{ fontSize: '0.65rem', height: 18 }} />
            </Box>
          ),
        },
        style: {
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          border: '2px solid #1976d2',
          borderRadius: 10,
          padding: 12,
          width: nodeWidth,
          minHeight: 160,
          boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
        },
      };
    });

    const newEdges = [];
    tableSchema.forEach((table) => {
      table.foreignKeys.forEach((fk, idx) => {
        newEdges.push({
          id: `${table.name}-${fk.column}-${fk.referencedTable}-${idx}`,
          source: table.name,
          target: fk.referencedTable,
          label: `${fk.column} → ${fk.referencedColumn}`,
          type: 'smoothstep',
          animated: true,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#9c27b0',
          },
          style: { stroke: '#9c27b0', strokeWidth: 2 },
          labelStyle: { fill: '#9c27b0', fontSize: 10, fontWeight: 700 },
          labelBgStyle: { fill: '#fff', fillOpacity: 0.9 },
          labelBgPadding: [6, 3],
          labelBgBorderRadius: 3,
        });
      });
    });

    return { nodes: newNodes, edges: newEdges };
  }, [tableSchema]);

  const normalizeResult = (result) => {
    if (!result || !result.values) return [];
    return result.values.map(row => 
      row.map(cell => {
        if (cell === null) return null;
        if (typeof cell === 'string') return cell.trim().toLowerCase();
        if (typeof cell === 'number') return Math.round(cell * 100) / 100;
        return cell;
      })
    );
  };

  const compareResults = (userResult, expectedResult) => {
    const normalizedUser = normalizeResult(userResult);
    const normalizedExpected = normalizeResult(expectedResult);
    
    if (normalizedUser.length !== normalizedExpected.length) {
      return { match: false, reason: `Expected ${normalizedExpected.length} rows but got ${normalizedUser.length}` };
    }
    
    for (let i = 0; i < normalizedUser.length; i++) {
      if (normalizedUser[i].length !== normalizedExpected[i].length) {
        return { match: false, reason: `Row ${i + 1} has different number of columns` };
      }
      
      for (let j = 0; j < normalizedUser[i].length; j++) {
        if (normalizedUser[i][j] !== normalizedExpected[i][j]) {
          return { 
            match: false, 
            reason: `Mismatch at row ${i + 1}, column ${j + 1}: expected "${normalizedExpected[i][j]}" but got "${normalizedUser[i][j]}"`
          };
        }
      }
    }
    
    return { match: true };
  };

  const runAndCheck = async () => {
    if (!db || !userCode.trim()) return;
    
    setRunning(true);
    setExecutionResult(null);
    setIsCorrect(null);
    
    try {
      // Execute user's query
      const userResults = db.exec(userCode.trim());
      const userResult = userResults.length > 0 ? userResults[0] : { columns: [], values: [] };
      
      // Execute expected solution if it exists
      if (currentAssignment.solution) {
        const expectedResults = db.exec(currentAssignment.solution.trim());
        const expectedResult = expectedResults.length > 0 ? expectedResults[0] : { columns: [], values: [] };
        
        // Compare results
        const comparison = compareResults(userResult, expectedResult);
        
        if (comparison.match) {
          setIsCorrect(true);
          setCompleted(new Set([...completed, selectedIndex]));
        } else {
          setIsCorrect(false);
          setExecutionResult({
            type: 'mismatch',
            reason: comparison.reason,
            userResult,
            expectedResult
          });
          setRunning(false);
          return;
        }
      }
      
      setExecutionResult({
        type: 'success',
        result: userResult
      });
      
    } catch (err) {
      setIsCorrect(false);
      setExecutionResult({
        type: 'error',
        message: err.message
      });
    }
    
    setRunning(false);
  };

  const handleSelectAssignment = (index) => {
    setSelectedIndex(index);
    setUserCode('');
    setShowSolution(false);
    setShowHints(false);
    setExecutionResult(null);
    setIsCorrect(null);
  };

  const handleMarkComplete = () => {
    setCompleted(new Set([...completed, selectedIndex]));
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'success';
      case 'medium':
        return 'warning';
      case 'hard':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Paper elevation={3} sx={{ display: 'flex', height: '700px', overflow: 'hidden' }}>
      {/* Left Side - Assignment List */}
      <Box
        sx={{
          width: '320px',
          borderRight: 1,
          borderColor: 'divider',
          overflow: 'auto',
          bgcolor: 'background.default',
        }}
      >
        <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CodeIcon /> Assignments
          </Typography>
          <Typography variant="caption">
            {completed.size} of {assignments.length} completed
          </Typography>
        </Box>
        <List sx={{ p: 0 }}>
          {assignments.map((assignment, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={() => handleSelectAssignment(index)}
                sx={{
                  borderLeft: selectedIndex === index ? 4 : 0,
                  borderColor: 'primary.main',
                  bgcolor: selectedIndex === index ? 'action.selected' : 'transparent',
                }}
              >
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {completed.has(index) && (
                        <CheckCircleIcon color="success" sx={{ fontSize: 18 }} />
                      )}
                      <Typography variant="body2" fontWeight={selectedIndex === index ? 600 : 400}>
                        {index + 1}. {assignment.title}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Chip
                      label={assignment.difficulty}
                      size="small"
                      color={getDifficultyColor(assignment.difficulty)}
                      sx={{ mt: 0.5, height: 20, fontSize: '0.7rem' }}
                    />
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Right Side - Code Editor and Details */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Assignment Details */}
        <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Typography variant="h5" fontWeight="bold">
              {currentAssignment.title}
            </Typography>
            <Chip
              label={currentAssignment.difficulty}
              color={getDifficultyColor(currentAssignment.difficulty)}
              size="small"
            />
          </Box>
          <Typography variant="body1" color="text.secondary" paragraph>
            {currentAssignment.problem}
          </Typography>

          {/* Hints Toggle */}
          <Button
            size="small"
            startIcon={<LightbulbIcon />}
            onClick={() => setShowHints(!showHints)}
            sx={{ mb: 1 }}
          >
            {showHints ? 'Hide' : 'Show'} Hints ({currentAssignment.hints?.length || 0})
          </Button>

          <Collapse in={showHints}>
            <Alert severity="info" sx={{ mt: 1 }}>
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                Hints:
              </Typography>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {currentAssignment.hints?.map((hint, idx) => (
                  <li key={idx}>
                    <Typography variant="body2">{hint}</Typography>
                  </li>
                ))}
              </ul>
            </Alert>
          </Collapse>
        </Box>

        {/* Code Editor Area */}
        <Box sx={{ flex: 1, overflow: 'auto', p: 3, bgcolor: 'grey.50' }}>
          {/* Database Schema Section (for SQL assignments) - Collapsible at top */}
          {playgroundData && tableSchema.length > 0 && (
            <Accordion sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TableChartIcon fontSize="small" color="primary" />
                  <Typography variant="subtitle2" fontWeight="bold">
                    Database Schema ({tableSchema.length} tables)
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ mb: 1 }}>
                  <ToggleButtonGroup
                    value={viewMode}
                    exclusive
                    onChange={(e, newMode) => newMode && setViewMode(newMode)}
                    size="small"
                  >
                    <ToggleButton value="list">
                      <ListIcon sx={{ fontSize: 14, mr: 0.5 }} /> List
                    </ToggleButton>
                    <ToggleButton value="diagram">
                      <AccountTreeIcon sx={{ fontSize: 14, mr: 0.5 }} /> Diagram
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
                
                {viewMode === 'list' ? (
                  <Box sx={{ maxHeight: 200, overflow: 'auto' }}>
                    {tableSchema.map((table, idx) => (
                      <Box key={idx} sx={{ mb: 1.5, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          <Typography sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{table.name}</Typography>
                          <Chip label={`${table.rowCount} rows`} size="small" sx={{ fontSize: '0.7rem', height: 18 }} />
                        </Box>
                        <Box sx={{ fontSize: '0.75rem', pl: 1 }}>
                          {table.columns.map((col, colIdx) => {
                            const fk = table.foreignKeys.find(fk => fk.column === col.name);
                            return (
                              <Box key={colIdx} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.3 }}>
                                {col.primaryKey && <KeyIcon sx={{ fontSize: 12, color: 'primary.main' }} />}
                                <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
                                  {col.name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  ({col.type})
                                </Typography>
                                {fk && (
                                  <Chip 
                                    label={`FK → ${fk.referencedTable}`} 
                                    size="small" 
                                    color="secondary"
                                    sx={{ fontSize: '0.6rem', height: 16 }}
                                  />
                                )}
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Box sx={{ height: 250, border: '1px solid #ddd', borderRadius: 1, bgcolor: '#fafafa' }}>
                    <ReactFlow
                      nodes={nodes}
                      edges={edges}
                      fitView
                      fitViewOptions={{ padding: 0.15 }}
                      minZoom={0.4}
                      maxZoom={1.2}
                      defaultViewport={{ x: 0, y: 0, zoom: 0.7 }}
                      attributionPosition="bottom-left"
                    >
                      <Background color="#aaa" gap={12} />
                      <Controls />
                    </ReactFlow>
                  </Box>
                )}
              </AccordionDetails>
            </Accordion>
          )}
          
          <Typography variant="subtitle2" gutterBottom fontWeight="bold">
            Your Solution:
          </Typography>
          <Box sx={{ border: '1px solid #ddd', borderRadius: 1, mb: 2, overflow: 'hidden' }}>
            <Editor
              height="100px"
              defaultLanguage="sql"
              value={userCode}
              onChange={(value) => setUserCode(value || '')}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 13,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                wordWrap: 'on',
                scrollbar: {
                  vertical: 'visible',
                  horizontal: 'visible',
                },
              }}
            />
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, mb: 1.25, flexWrap: 'wrap' }}>
            {playgroundData && db && (
              <Button
                variant="contained"
                color="success"
                startIcon={running ? <CircularProgress size={16} color="inherit" /> : <PlayArrowIcon />}
                onClick={runAndCheck}
                disabled={!userCode.trim() || running}
              >
                {running ? 'Running...' : 'Run & Check'}
              </Button>
            )}
            <Button
              variant="outlined"
              startIcon={showSolution ? <VisibilityOffIcon /> : <VisibilityIcon />}
              onClick={() => setShowSolution(!showSolution)}
            >
              {showSolution ? 'Hide' : 'Show'} Solution
            </Button>
            <Button
              variant="outlined"
              startIcon={<CheckCircleIcon />}
              onClick={handleMarkComplete}
              disabled={completed.has(selectedIndex)}
            >
              {completed.has(selectedIndex) ? 'Completed' : 'Mark Complete'}
            </Button>
          </Box>

          {/* Execution Result */}
          {executionResult && executionResult.type === 'error' && (
            <Alert severity="error" icon={<ErrorIcon />} sx={{ mb: 2 }}>
              <Typography variant="subtitle2" fontWeight="bold">Query Error:</Typography>
              <Typography variant="body2">{executionResult.message}</Typography>
            </Alert>
          )}

          {isCorrect === true && (
            <Alert severity="success" icon={<CheckCircleIcon />} sx={{ mb: 2 }}>
              <Typography variant="subtitle2" fontWeight="bold">✅ Correct!</Typography>
              <Typography variant="body2">Your query produces the expected result. Great job!</Typography>
            </Alert>
          )}

          {isCorrect === false && executionResult?.type === 'mismatch' && (
            <Alert severity="warning" sx={{ mb: 2 }}>
              <Typography variant="subtitle2" fontWeight="bold">❌ Incorrect Result</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>{executionResult.reason}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="caption">Try reviewing the problem requirements or check the hints.</Typography>
            </Alert>
          )}

          {executionResult && executionResult.type === 'success' && executionResult.result && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                Query Result:
              </Typography>
              {executionResult.result.values && executionResult.result.values.length > 0 ? (
                <TableContainer component={Paper} variant="outlined">
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        {executionResult.result.columns.map((col, idx) => (
                          <TableCell key={idx} sx={{ fontWeight: 'bold', bgcolor: 'success.light' }}>
                            {col}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {executionResult.result.values.map((row, rowIdx) => (
                        <TableRow key={rowIdx}>
                          {row.map((cell, cellIdx) => (
                            <TableCell key={cellIdx}>{cell}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Box sx={{ p: 1, bgcolor: 'grey.100' }}>
                    <Typography variant="caption">
                      {executionResult.result.values.length} row(s) returned
                    </Typography>
                  </Box>
                </TableContainer>
              ) : (
                <Alert severity="info">Query executed successfully (no results returned)</Alert>
              )}
            </Box>
          )}

          {/* Solution Display */}
          <Collapse in={showSolution}>
            <Paper elevation={2} sx={{ p: 2, mb: 2, bgcolor: 'background.paper' }}>
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                ✅ Solution:
              </Typography>
              <SyntaxHighlighter
                language={currentAssignment.language || 'sql'}
                style={vscDarkPlus}
                customStyle={{ borderRadius: 8, fontSize: '14px' }}
              >
                {currentAssignment.solution}
              </SyntaxHighlighter>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                📖 Explanation:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {currentAssignment.explanation}
              </Typography>
            </Paper>
          </Collapse>
        </Box>
      </Box>
    </Paper>
  );
};

export default CodeEditor;
