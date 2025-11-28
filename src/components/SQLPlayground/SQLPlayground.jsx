import { useState, useEffect, useMemo } from 'react';
import Editor from '@monaco-editor/react';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
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
  Chip,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableChartIcon from '@mui/icons-material/TableChart';
import KeyIcon from '@mui/icons-material/Key';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ListIcon from '@mui/icons-material/List';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ReactFlow, { Background, Controls, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

const SQLPlayground = ({ initialQuery = '', sampleData = null }) => {
  const [db, setDb] = useState(null);
  const [query, setQuery] = useState(initialQuery);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tableSchema, setTableSchema] = useState([]);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'diagram'

  useEffect(() => {
    const initSqlJs = async () => {
      try {
        const SQL = await window.initSqlJs({
          locateFile: file => `https://sql.js.org/dist/${file}`
        });
        const database = new SQL.Database();
        
        // Create sample tables if sampleData is provided
        if (sampleData) {
          // Handle both array and string formats
          const sqlStatements = Array.isArray(sampleData) 
            ? sampleData.join(';\n') + ';'
            : sampleData;
          database.run(sqlStatements);
        } else {
          // Default sample data
          database.run(`
            CREATE TABLE users (
              id INTEGER PRIMARY KEY,
              name TEXT NOT NULL,
              email TEXT UNIQUE,
              age INTEGER
            );
            
            INSERT INTO users VALUES (1, 'John Doe', 'john@example.com', 30);
            INSERT INTO users VALUES (2, 'Jane Smith', 'jane@example.com', 25);
            INSERT INTO users VALUES (3, 'Bob Johnson', 'bob@example.com', 35);
            
            CREATE TABLE orders (
              id INTEGER PRIMARY KEY,
              user_id INTEGER,
              product TEXT,
              amount DECIMAL(10,2),
              order_date DATE,
              FOREIGN KEY (user_id) REFERENCES users(id)
            );
            
            INSERT INTO orders VALUES (1, 1, 'Laptop', 999.99, '2024-01-15');
            INSERT INTO orders VALUES (2, 1, 'Mouse', 29.99, '2024-01-16');
            INSERT INTO orders VALUES (3, 2, 'Keyboard', 79.99, '2024-01-17');
            INSERT INTO orders VALUES (4, 3, 'Monitor', 299.99, '2024-01-18');
          `);
        }
        
        setDb(database);
        
        // Get table schema information
        const tables = database.exec(`
          SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'
        `);
        
        if (tables.length > 0 && tables[0].values.length > 0) {
          const schemaInfo = tables[0].values.map(([tableName]) => {
            // Get columns for this table
            const columnsResult = database.exec(`PRAGMA table_info(${tableName})`);
            const columns = columnsResult[0]?.values.map(col => ({
              name: col[1],
              type: col[2],
              notNull: col[3] === 1,
              primaryKey: col[5] === 1,
            })) || [];
            
            // Get foreign keys
            const fkResult = database.exec(`PRAGMA foreign_key_list(${tableName})`);
            const foreignKeys = fkResult[0]?.values.map(fk => ({
              column: fk[3],
              referencedTable: fk[2],
              referencedColumn: fk[4],
            })) || [];
            
            // Get row count
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
        
        setLoading(false);
      } catch (err) {
        setError('Failed to initialize SQL.js: ' + err.message);
        setLoading(false);
      }
    };

    initSqlJs();
  }, [sampleData]);

  const executeQuery = () => {
    if (!db) return;
    
    setError(null);
    setResult(null);

    try {
      const results = db.exec(query);
      
      if (results.length > 0) {
        setResult(results[0]);
      } else {
        setResult({ columns: [], values: [], message: 'Query executed successfully (no results)' });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const resetDatabase = () => {
    if (db) {
      db.close();
    }
    setLoading(true);
    setResult(null);
    setError(null);
    // Re-initialize
    const initSqlJs = async () => {
      const SQL = await window.initSqlJs({
        locateFile: file => `https://sql.js.org/dist/${file}`
      });
      const database = new SQL.Database();
      
      if (sampleData) {
        // Handle both array and string formats
        const sqlStatements = Array.isArray(sampleData) 
          ? sampleData.join(';\n') + ';'
          : sampleData;
        database.run(sqlStatements);
      } else {
        database.run(`
          CREATE TABLE users (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT UNIQUE,
            age INTEGER
          );
          
          INSERT INTO users VALUES (1, 'John Doe', 'john@example.com', 30);
          INSERT INTO users VALUES (2, 'Jane Smith', 'jane@example.com', 25);
          INSERT INTO users VALUES (3, 'Bob Johnson', 'bob@example.com', 35);
          
          CREATE TABLE orders (
            id INTEGER PRIMARY KEY,
            user_id INTEGER,
            product TEXT,
            amount DECIMAL(10,2),
            order_date DATE,
            FOREIGN KEY (user_id) REFERENCES users(id)
          );
          
          INSERT INTO orders VALUES (1, 1, 'Laptop', 999.99, '2024-01-15');
          INSERT INTO orders VALUES (2, 1, 'Mouse', 29.99, '2024-01-16');
          INSERT INTO orders VALUES (3, 2, 'Keyboard', 79.99, '2024-01-17');
          INSERT INTO orders VALUES (4, 3, 'Monitor', 299.99, '2024-01-18');
        `);
      }
      
      setDb(database);
      
      // Get table schema information
      const tables = database.exec(`
        SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'
      `);
      
      if (tables.length > 0 && tables[0].values.length > 0) {
        const schemaInfo = tables[0].values.map(([tableName]) => {
          // Get columns for this table
          const columnsResult = database.exec(`PRAGMA table_info(${tableName})`);
          const columns = columnsResult[0]?.values.map(col => ({
            name: col[1],
            type: col[2],
            notNull: col[3] === 1,
            primaryKey: col[5] === 1,
          })) || [];
          
          // Get foreign keys
          const fkResult = database.exec(`PRAGMA foreign_key_list(${tableName})`);
          const foreignKeys = fkResult[0]?.values.map(fk => ({
            column: fk[3],
            referencedTable: fk[2],
            referencedColumn: fk[4],
          })) || [];
          
          // Get row count
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
      
      setLoading(false);
    };
    initSqlJs();
  };

  // Generate React Flow nodes and edges from table schema
  const { nodes, edges } = useMemo(() => {
    if (tableSchema.length === 0) return { nodes: [], edges: [] };

    const nodeWidth = 300;
    const nodeSpacingX = 400;
    const nodeSpacingY = 250;

    const newNodes = tableSchema.map((table, index) => {
      const col = index % 3;
      const row = Math.floor(index / 3);
      
      // Generate table description
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
              <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem', mb: 0.5, color: '#1976d2' }}>
                📊 {table.name}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1, fontSize: '0.7rem' }}>
                {description}
              </Typography>
              <Box sx={{ 
                maxHeight: 60, 
                overflow: 'auto', 
                fontSize: '0.75rem',
                bgcolor: '#f5f5f5',
                p: 0.5,
                borderRadius: 1,
                mb: 1
              }}>
                {table.columns.slice(0, 5).map((c, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {c.primaryKey && <KeyIcon sx={{ fontSize: 10, color: 'primary.main' }} />}
                    <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
                      {c.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ({c.type})
                    </Typography>
                  </Box>
                ))}
                {table.columns.length > 5 && (
                  <Typography variant="caption" color="text.secondary">
                    +{table.columns.length - 5} more...
                  </Typography>
                )}
              </Box>
              <Chip label={`${table.rowCount} rows`} size="small" color="primary" sx={{ fontSize: '0.7rem' }} />
            </Box>
          ),
        },
        style: {
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          border: '2px solid #1976d2',
          borderRadius: 12,
          padding: 16,
          width: nodeWidth,
          minHeight: 180,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
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
          labelStyle: { fill: '#9c27b0', fontSize: 11, fontWeight: 700 },
          labelBgStyle: { fill: '#fff', fillOpacity: 0.9 },
          labelBgPadding: [8, 4],
          labelBgBorderRadius: 4,
        });
      });
    });

    return { nodes: newNodes, edges: newEdges };
  }, [tableSchema]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        🎮 Interactive SQL Playground
      </Typography>
      
      {/* Database Schema Section */}
      {tableSchema.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TableChartIcon /> Database Tables & Schema
            </Typography>
            
            <ToggleButtonGroup
              value={viewMode}
              exclusive
              onChange={(e, newMode) => newMode && setViewMode(newMode)}
              size="small"
            >
              <ToggleButton value="list">
                <ListIcon sx={{ mr: 0.5 }} /> List
              </ToggleButton>
              <ToggleButton value="diagram">
                <AccountTreeIcon sx={{ mr: 0.5 }} /> Diagram
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          
          {viewMode === 'list' ? (
            // List View
            <>
              {tableSchema.map((table, idx) => (
                <Accordion key={idx} defaultExpanded={idx === 0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                      <Typography sx={{ fontWeight: 'bold' }}>{table.name}</Typography>
                      <Chip label={`${table.rowCount} rows`} size="small" color="primary" variant="outlined" />
                      <Chip label={`${table.columns.length} columns`} size="small" />
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TableContainer>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Column</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Constraints</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {table.columns.map((col, colIdx) => {
                            const fk = table.foreignKeys.find(fk => fk.column === col.name);
                            return (
                              <TableRow key={colIdx}>
                                <TableCell>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    {col.name}
                                    {col.primaryKey && <KeyIcon sx={{ fontSize: 16, color: 'primary.main' }} />}
                                  </Box>
                                </TableCell>
                                <TableCell>
                                  <code style={{ fontSize: '0.85rem', color: '#1976d2' }}>{col.type}</code>
                                </TableCell>
                                <TableCell>
                                  <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                                    {col.primaryKey && <Chip label="PRIMARY KEY" size="small" color="primary" />}
                                    {col.notNull && !col.primaryKey && <Chip label="NOT NULL" size="small" />}
                                    {fk && (
                                      <Chip 
                                        label={`FK → ${fk.referencedTable}(${fk.referencedColumn})`} 
                                        size="small" 
                                        color="secondary"
                                      />
                                    )}
                                  </Box>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
              ))}
            </>
          ) : (
            // Diagram View
            <Box sx={{ height: 600, border: '2px solid #1976d2', borderRadius: 2, bgcolor: '#fafafa' }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
                fitViewOptions={{ padding: 0.2 }}
                minZoom={0.5}
                maxZoom={1.5}
                defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
                attributionPosition="bottom-left"
              >
                <Background color="#aaa" gap={16} />
                <Controls />
              </ReactFlow>
            </Box>
          )}
        </Box>
      )}
      
      <Divider sx={{ my: 2 }} />
      
      {/* SQL Best Practices - Do's and Don'ts */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          💡 SQL Best Practices
        </Typography>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
          {/* Do's */}
          <Paper sx={{ p: 2, bgcolor: '#e8f5e9', border: '2px solid #4caf50' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1.5, color: '#2e7d32', display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleIcon /> Do's
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, '& li': { mb: 1, fontSize: '0.875rem' } }}>
              <li>Use <code>WHERE</code> clause to filter data efficiently</li>
              <li>Always specify column names instead of <code>SELECT *</code></li>
              <li>Use <code>JOIN</code> instead of subqueries when possible</li>
              <li>Add <code>LIMIT</code> clause for large result sets</li>
              <li>Use proper data types for comparisons</li>
              <li>Format queries with proper indentation for readability</li>
              <li>Use aliases for better column/table naming</li>
              <li>Test queries on small datasets first</li>
            </Box>
          </Paper>
          
          {/* Don'ts */}
          <Paper sx={{ p: 2, bgcolor: '#ffebee', border: '2px solid #f44336' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1.5, color: '#c62828', display: 'flex', alignItems: 'center', gap: 1 }}>
              <CancelIcon /> Don'ts
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, '& li': { mb: 1, fontSize: '0.875rem' } }}>
              <li>Don't use <code>SELECT *</code> in production queries</li>
              <li>Avoid using functions in <code>WHERE</code> clause on indexed columns</li>
              <li>Don't use <code>!=</code> or <code>NOT IN</code> with large datasets</li>
              <li>Avoid Cartesian products (missing <code>JOIN</code> conditions)</li>
              <li>Don't ignore NULL values in comparisons</li>
              <li>Avoid nested subqueries when <code>JOIN</code> works better</li>
              <li>Don't forget to close transactions</li>
              <li>Avoid using reserved keywords as column names</li>
            </Box>
          </Paper>
        </Box>
        
        {/* Quick Tips */}
        <Paper sx={{ p: 2, mt: 2, bgcolor: '#fff3e0', border: '2px solid #ff9800' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: '#e65100' }}>
            🎯 Quick Tips
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1 }}>
            <Box sx={{ fontSize: '0.875rem' }}>
              <strong>Performance:</strong> Use indexes, avoid wildcards at start of LIKE
            </Box>
            <Box sx={{ fontSize: '0.875rem' }}>
              <strong>Joins:</strong> INNER (matching rows), LEFT (all from left table)
            </Box>
            <Box sx={{ fontSize: '0.875rem' }}>
              <strong>Aggregates:</strong> GROUP BY required with COUNT, SUM, AVG, MAX, MIN
            </Box>
            <Box sx={{ fontSize: '0.875rem' }}>
              <strong>Order:</strong> WHERE → GROUP BY → HAVING → ORDER BY → LIMIT
            </Box>
          </Box>
        </Paper>
      </Box>
      
      <Divider sx={{ my: 2 }} />
      
      <Typography variant="body2" color="text.secondary" paragraph>
        Try your SQL queries here! Use the tables shown above.
      </Typography>

      <Box sx={{ border: '1px solid #ddd', borderRadius: 1, mb: 2, overflow: 'hidden' }}>
        <Editor
          height="100px"
          defaultLanguage="sql"
          value={query}
          onChange={(value) => setQuery(value || '')}
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

      <Box sx={{ display: 'flex', gap: 2, mb: 1.25 }}>
        <Button
          variant="contained"
          startIcon={<PlayArrowIcon />}
          onClick={executeQuery}
          disabled={!query.trim()}
        >
          Run Query
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={resetDatabase}
        >
          Reset Database
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {result && result.message && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {result.message}
        </Alert>
      )}

      {result && result.columns && result.columns.length > 0 && (
        <TableContainer component={Paper} variant="outlined" sx={{ mt: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                {result.columns.map((col, idx) => (
                  <TableCell key={idx} sx={{ fontWeight: 'bold', bgcolor: 'primary.light' }}>
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {result.values.map((row, rowIdx) => (
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
              {result.values.length} row{result.values.length !== 1 ? 's' : ''} returned
            </Typography>
          </Box>
        </TableContainer>
      )}
    </Paper>
  );
};

export default SQLPlayground;
