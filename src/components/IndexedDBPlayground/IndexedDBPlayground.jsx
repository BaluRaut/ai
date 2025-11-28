import { useState, useEffect } from 'react';
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
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Divider,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import StorageIcon from '@mui/icons-material/Storage';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Dexie from 'dexie';

const IndexedDBPlayground = ({ initialCode = '', dbSchema = null }) => {
  const [db, setDb] = useState(null);
  const [code, setCode] = useState(initialCode);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const initDB = async () => {
      try {
        // Create Dexie database
        const database = new Dexie('PlaygroundDB');
        
        // Define schema
        if (dbSchema) {
          database.version(1).stores(dbSchema);
        } else {
          // Default schema
          database.version(1).stores({
            users: '++id, name, email, age',
            products: '++id, name, price, category',
            orders: '++id, userId, productId, quantity, orderDate'
          });
        }

        await database.open();

        // Add sample data if tables are empty
        const userCount = await database.users.count();
        if (userCount === 0) {
          await database.users.bulkAdd([
            { name: 'John Doe', email: 'john@example.com', age: 30 },
            { name: 'Jane Smith', email: 'jane@example.com', age: 25 },
            { name: 'Bob Johnson', email: 'bob@example.com', age: 35 }
          ]);

          await database.products.bulkAdd([
            { name: 'Laptop', price: 999.99, category: 'Electronics' },
            { name: 'Mouse', price: 25.99, category: 'Electronics' },
            { name: 'Desk Chair', price: 199.99, category: 'Furniture' }
          ]);

          await database.orders.bulkAdd([
            { userId: 1, productId: 1, quantity: 1, orderDate: new Date('2024-01-15') },
            { userId: 2, productId: 2, quantity: 2, orderDate: new Date('2024-01-16') }
          ]);
        }

        setDb(database);
        setLoading(false);
      } catch (err) {
        setError('Failed to initialize IndexedDB: ' + err.message);
        setLoading(false);
      }
    };

    initDB();

    return () => {
      if (db) {
        db.close();
      }
    };
  }, [dbSchema]);

  const executeCode = async () => {
    if (!db) return;
    
    setError(null);
    setResult(null);

    try {
      // Create a safe execution context
      const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
      const func = new AsyncFunction('db', code);
      const queryResult = await func(db);
      
      if (Array.isArray(queryResult)) {
        setResult({
          type: 'array',
          data: queryResult,
          count: queryResult.length
        });
      } else if (queryResult !== undefined) {
        setResult({
          type: 'value',
          data: queryResult
        });
      } else {
        setResult({
          type: 'success',
          message: 'Operation completed successfully'
        });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const resetDatabase = async () => {
    if (db) {
      await db.delete();
    }
    setLoading(true);
    setResult(null);
    setError(null);
    window.location.reload(); // Simplest way to reinitialize
  };

  const showTableData = async (tableName) => {
    if (!db || !db[tableName]) return;
    
    try {
      const data = await db[tableName].toArray();
      setResult({
        type: 'array',
        data: data,
        count: data.length,
        tableName: tableName
      });
      setError(null);
    } catch (err) {
      setError(`Error fetching ${tableName}: ${err.message}`);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <StorageIcon /> IndexedDB Playground (Dexie.js)
      </Typography>
      
      {/* IndexedDB Best Practices */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 1.5 }}>
          💡 IndexedDB / Dexie.js Best Practices
        </Typography>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
          {/* Do's */}
          <Paper sx={{ p: 2, bgcolor: '#e8f5e9', border: '2px solid #4caf50' }}>
            <Typography variant="caption" sx={{ fontWeight: 'bold', mb: 1, color: '#2e7d32', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CheckCircleIcon fontSize="small" /> Do's
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2, '& li': { mb: 0.5, fontSize: '0.8rem' } }}>
              <li>Use indexes for frequently queried fields</li>
              <li>Use <code>.where()</code> for efficient filtering</li>
              <li>Use <code>.bulkAdd()</code> for multiple inserts</li>
              <li>Use <code>++id</code> for auto-increment primary keys</li>
              <li>Handle promises with async/await</li>
              <li>Use transactions for related operations</li>
            </Box>
          </Paper>
          
          {/* Don'ts */}
          <Paper sx={{ p: 2, bgcolor: '#ffebee', border: '2px solid #f44336' }}>
            <Typography variant="caption" sx={{ fontWeight: 'bold', mb: 1, color: '#c62828', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CancelIcon fontSize="small" /> Don'ts
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2, '& li': { mb: 0.5, fontSize: '0.8rem' } }}>
              <li>Don't store large files (use Blob URLs instead)</li>
              <li>Avoid synchronous operations</li>
              <li>Don't forget error handling</li>
              <li>Avoid storing functions or DOM elements</li>
              <li>Don't use it for sensitive data without encryption</li>
              <li>Avoid querying without indexes on large datasets</li>
            </Box>
          </Paper>
        </Box>
        
        {/* Database Schema */}
        <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5', border: '1px solid #ddd' }}>
          <Typography variant="caption" sx={{ fontWeight: 'bold', mb: 1, display: 'block' }}>
            📊 Database Schema
          </Typography>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="caption" sx={{ fontWeight: 'bold' }}>Available Tables</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ fontSize: '0.75rem' }}>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'primary.main' }}>users</Typography>
                  <Typography variant="caption" display="block" color="text.secondary">
                    ++id, name, email, age
                  </Typography>
                </Box>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'primary.main' }}>products</Typography>
                  <Typography variant="caption" display="block" color="text.secondary">
                    ++id, name, price, category
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'primary.main' }}>orders</Typography>
                  <Typography variant="caption" display="block" color="text.secondary">
                    ++id, userId, productId, quantity, orderDate
                  </Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Box>
      
      <Divider sx={{ my: 2 }} />
      
      <Typography variant="body2" color="text.secondary" paragraph>
        Try Dexie.js queries here! Use the <code>db</code> object to interact with IndexedDB.
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
          <Tab label="Query Editor" />
          <Tab label="View Data" />
        </Tabs>
      </Box>

      {tabValue === 0 && (
        <>
          <Box sx={{ border: '1px solid #ddd', borderRadius: 1, mb: 2, overflow: 'hidden' }}>
            <Editor
              height="100px"
              defaultLanguage="javascript"
              value={code}
              onChange={(value) => setCode(value || '')}
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
              onClick={executeCode}
              disabled={!code.trim()}
            >
              Run Code
            </Button>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={resetDatabase}
            >
              Reset Database
            </Button>
          </Box>
        </>
      )}

      {tabValue === 1 && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Quick View Tables:
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button size="small" variant="outlined" onClick={() => showTableData('users')}>
              View Users
            </Button>
            <Button size="small" variant="outlined" onClick={() => showTableData('products')}>
              View Products
            </Button>
            <Button size="small" variant="outlined" onClick={() => showTableData('orders')}>
              View Orders
            </Button>
          </Box>
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {result && result.type === 'success' && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {result.message}
        </Alert>
      )}

      {result && result.type === 'value' && (
        <Paper variant="outlined" sx={{ p: 2, bgcolor: 'grey.50' }}>
          <Typography variant="subtitle2" gutterBottom>Result:</Typography>
          <Typography variant="body1" sx={{ fontFamily: 'monospace' }}>
            {JSON.stringify(result.data, null, 2)}
          </Typography>
        </Paper>
      )}

      {result && result.type === 'array' && result.data.length > 0 && (
        <Box>
          {result.tableName && (
            <Typography variant="subtitle2" gutterBottom>
              Table: {result.tableName}
            </Typography>
          )}
          <TableContainer component={Paper} variant="outlined" sx={{ mt: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  {Object.keys(result.data[0]).map((key) => (
                    <TableCell key={key} sx={{ fontWeight: 'bold', bgcolor: 'primary.light' }}>
                      {key}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {result.data.map((row, rowIdx) => (
                  <TableRow key={rowIdx}>
                    {Object.values(row).map((cell, cellIdx) => (
                      <TableCell key={cellIdx}>
                        {cell instanceof Date ? cell.toLocaleDateString() : String(cell)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Box sx={{ p: 1, bgcolor: 'grey.100' }}>
              <Typography variant="caption">
                {result.count} record{result.count !== 1 ? 's' : ''} returned
              </Typography>
            </Box>
          </TableContainer>
        </Box>
      )}

      {result && result.type === 'array' && result.data.length === 0 && (
        <Alert severity="info" sx={{ mt: 2 }}>
          Query returned 0 results
        </Alert>
      )}

      <Box sx={{ mt: 3, p: 2, bgcolor: 'info.lighter', borderRadius: 1 }}>
        <Typography variant="subtitle2" gutterBottom fontWeight="bold">
          💡 Quick Reference:
        </Typography>
        <Typography variant="body2" component="div" sx={{ fontFamily: 'monospace', fontSize: '12px' }}>
          • <strong>Query all:</strong> db.users.toArray()<br/>
          • <strong>Get by ID:</strong> db.users.get(1)<br/>
          • <strong>Add:</strong> db.users.add({'{name: "Alice", age: 28}'})<br/>
          • <strong>Update:</strong> db.users.update(1, {'{age: 31}'})<br/>
          • <strong>Delete:</strong> db.users.delete(1)<br/>
          • <strong>Filter:</strong> db.users.where('age').above(25).toArray()<br/>
          • <strong>Count:</strong> db.users.count()
        </Typography>
      </Box>
    </Paper>
  );
};

export default IndexedDBPlayground;
