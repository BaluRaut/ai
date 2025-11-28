import { useState, useEffect } from 'react';
import initSqlJs from 'sql.js';
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  TextField,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Chip,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import StorageIcon from '@mui/icons-material/Storage';
import { useTranslation } from 'react-i18next';

const SQLPlayground = () => {
  const { t } = useTranslation();
  const [db, setDb] = useState(null);
  const [query, setQuery] = useState('SELECT * FROM users;');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initSqlJs({
      locateFile: file => `https://sql.js.org/dist/${file}`
    }).then(SQL => {
      const database = new SQL.Database();
      
      // Create sample tables and data
      database.run(`
        CREATE TABLE users (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT UNIQUE,
          age INTEGER,
          city TEXT
        );
        
        CREATE TABLE orders (
          order_id INTEGER PRIMARY KEY,
          user_id INTEGER,
          product TEXT,
          amount DECIMAL(10,2),
          order_date DATE,
          FOREIGN KEY (user_id) REFERENCES users(id)
        );
        
        INSERT INTO users (id, name, email, age, city) VALUES
          (1, 'Alice Johnson', 'alice@example.com', 28, 'New York'),
          (2, 'Bob Smith', 'bob@example.com', 35, 'Los Angeles'),
          (3, 'Carol White', 'carol@example.com', 42, 'Chicago'),
          (4, 'David Brown', 'david@example.com', 31, 'Houston'),
          (5, 'Eve Davis', 'eve@example.com', 26, 'Phoenix');
          
        INSERT INTO orders (order_id, user_id, product, amount, order_date) VALUES
          (1, 1, 'Laptop', 999.99, '2024-01-15'),
          (2, 1, 'Mouse', 29.99, '2024-01-16'),
          (3, 2, 'Keyboard', 79.99, '2024-01-20'),
          (4, 3, 'Monitor', 299.99, '2024-01-25'),
          (5, 2, 'Headphones', 149.99, '2024-02-01'),
          (6, 4, 'Webcam', 89.99, '2024-02-05');
      `);
      
      setDb(database);
      setLoading(false);
    }).catch(err => {
      setError('Failed to initialize SQL.js: ' + err.message);
      setLoading(false);
    });
  }, []);

  const executeQuery = () => {
    if (!db) return;
    
    setError(null);
    setResults(null);
    
    try {
      const result = db.exec(query);
      
      if (result.length > 0) {
        setResults(result[0]);
      } else {
        // For INSERT, UPDATE, DELETE queries
        setResults({ message: t('playground.queryExecuted') });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const sampleQueries = [
    {
      title: t('playground.selectAll'),
      query: 'SELECT * FROM users;'
    },
    {
      title: t('playground.joinQuery'),
      query: `SELECT u.name, u.email, o.product, o.amount
FROM users u
JOIN orders o ON u.id = o.user_id
ORDER BY o.amount DESC;`
    },
    {
      title: t('playground.aggregation'),
      query: `SELECT u.name, COUNT(o.order_id) as total_orders, SUM(o.amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
ORDER BY total_spent DESC;`
    },
    {
      title: 'Filter & Sort',
      query: `SELECT name, age, city
FROM users
WHERE age > 30
ORDER BY age DESC;`
    },
    {
      title: t('playground.insertData'),
      query: `INSERT INTO users (id, name, email, age, city)
VALUES (6, 'Frank Miller', 'frank@example.com', 29, 'Seattle');`
    }
  ];

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h5">Loading SQL Playground...</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <StorageIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Box>
            <Typography variant="h3" component="h1" fontWeight="bold">
              {t('playground.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t('playground.subtitle')}
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                SQL Editor
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={8}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                variant="outlined"
                sx={{
                  mb: 2,
                  '& .MuiInputBase-root': {
                    fontFamily: 'monospace',
                    fontSize: '14px',
                  },
                }}
              />
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<PlayArrowIcon />}
                  onClick={executeQuery}
                  disabled={!query.trim()}
                >
                  {t('playground.runQuery')}
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    setResults(null);
                    setError(null);
                  }}
                >
                  {t('playground.clearResults')}
                </Button>
              </Box>
            </Paper>

            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                <Typography variant="subtitle2">{t('playground.error')}:</Typography>
                {error}
              </Alert>
            )}

            {results && (
              <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {t('playground.results')}
                </Typography>
                {results.message ? (
                  <Alert severity="success">{results.message}</Alert>
                ) : (
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          {results.columns.map((col, idx) => (
                            <TableCell key={idx} sx={{ fontWeight: 'bold' }}>
                              {col}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {results.values.map((row, rowIdx) => (
                          <TableRow key={rowIdx}>
                            {row.map((cell, cellIdx) => (
                              <TableCell key={cellIdx}>{cell}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
                {results.values && (
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    {results.values.length} {t('playground.rowsAffected')}
                  </Typography>
                )}
              </Paper>
            )}
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                {t('playground.sampleQueries')}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {sampleQueries.map((sample, idx) => (
                  <Chip
                    key={idx}
                    label={sample.title}
                    onClick={() => setQuery(sample.query)}
                    sx={{ justifyContent: 'flex-start', py: 2, height: 'auto' }}
                  />
                ))}
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Available Tables:
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'monospace', mb: 1 }}>
                  • users (id, name, email, age, city)
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                  • orders (order_id, user_id, product, amount, order_date)
                </Typography>
              </Box>

              <Alert severity="info" sx={{ mt: 3 }}>
                <Typography variant="caption">
                  This playground runs entirely in your browser using SQLite via WebAssembly. Your data is not sent to any server.
                </Typography>
              </Alert>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SQLPlayground;
