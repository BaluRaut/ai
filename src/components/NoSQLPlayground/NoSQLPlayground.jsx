import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  Alert,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Tabs,
  Tab,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Editor from '@monaco-editor/react';

const NoSQLPlayground = ({ exercises, initialData = {} }) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [database, setDatabase] = useState({});
  const [schemaView, setSchemaView] = useState('collections');

  useEffect(() => {
    // Initialize database with sample data
    setDatabase(initialData);
    setCode(exercises[currentExercise]?.starterCode || '');
    setOutput('');
    setError('');
    setShowHint(false);
  }, [currentExercise, exercises, initialData]);

  // MongoDB-like simulation engine
  const executeMongoCode = (codeString) => {
    try {
      const db = JSON.parse(JSON.stringify(database)); // Deep clone
      const results = [];
      
      // Create db proxy to simulate MongoDB operations
      const dbProxy = new Proxy({}, {
        get: (target, collectionName) => {
          if (!db[collectionName]) {
            db[collectionName] = [];
          }
          
          return {
            // insertOne
            insertOne: (doc) => {
              const id = Date.now() + Math.random();
              const newDoc = { _id: id, ...doc };
              db[collectionName].push(newDoc);
              return { insertedId: id, acknowledged: true };
            },
            
            // insertMany
            insertMany: (docs) => {
              const ids = [];
              docs.forEach(doc => {
                const id = Date.now() + Math.random();
                const newDoc = { _id: id, ...doc };
                db[collectionName].push(newDoc);
                ids.push(id);
              });
              return { insertedIds: ids, acknowledged: true };
            },
            
            // find
            find: (query = {}, projection = null) => {
              let filtered = db[collectionName].filter(doc => matchQuery(doc, query));
              
              if (projection) {
                filtered = filtered.map(doc => applyProjection(doc, projection));
              }
              
              return {
                toArray: () => filtered,
                sort: (sortObj) => ({
                  limit: (n) => ({
                    toArray: () => filtered.sort((a, b) => compareSort(a, b, sortObj)).slice(0, n)
                  }),
                  toArray: () => filtered.sort((a, b) => compareSort(a, b, sortObj))
                }),
                limit: (n) => ({
                  toArray: () => filtered.slice(0, n)
                })
              };
            },
            
            // findOne
            findOne: (query = {}) => {
              return db[collectionName].find(doc => matchQuery(doc, query)) || null;
            },
            
            // updateOne
            updateOne: (query, update) => {
              const docIndex = db[collectionName].findIndex(doc => matchQuery(doc, query));
              if (docIndex !== -1) {
                db[collectionName][docIndex] = applyUpdate(db[collectionName][docIndex], update);
                return { modifiedCount: 1, acknowledged: true };
              }
              return { modifiedCount: 0, acknowledged: true };
            },
            
            // updateMany
            updateMany: (query, update) => {
              let count = 0;
              db[collectionName].forEach((doc, index) => {
                if (matchQuery(doc, query)) {
                  db[collectionName][index] = applyUpdate(doc, update);
                  count++;
                }
              });
              return { modifiedCount: count, acknowledged: true };
            },
            
            // deleteOne
            deleteOne: (query) => {
              const docIndex = db[collectionName].findIndex(doc => matchQuery(doc, query));
              if (docIndex !== -1) {
                db[collectionName].splice(docIndex, 1);
                return { deletedCount: 1, acknowledged: true };
              }
              return { deletedCount: 0, acknowledged: true };
            },
            
            // deleteMany
            deleteMany: (query) => {
              const initialLength = db[collectionName].length;
              db[collectionName] = db[collectionName].filter(doc => !matchQuery(doc, query));
              return { deletedCount: initialLength - db[collectionName].length, acknowledged: true };
            },
            
            // countDocuments
            countDocuments: (query = {}) => {
              return db[collectionName].filter(doc => matchQuery(doc, query)).length;
            },
            
            // aggregate
            aggregate: (pipeline) => {
              let data = [...db[collectionName]];
              
              pipeline.forEach(stage => {
                const stageKey = Object.keys(stage)[0];
                const stageValue = stage[stageKey];
                
                switch(stageKey) {
                  case '$match':
                    data = data.filter(doc => matchQuery(doc, stageValue));
                    break;
                  case '$group':
                    data = performGroup(data, stageValue);
                    break;
                  case '$sort':
                    data = data.sort((a, b) => compareSort(a, b, stageValue));
                    break;
                  case '$limit':
                    data = data.slice(0, stageValue);
                    break;
                  case '$project':
                    data = data.map(doc => applyProjection(doc, stageValue));
                    break;
                }
              });
              
              return { toArray: () => data };
            }
          };
        }
      });
      
      // Execute user code
      const func = new Function('db', 'results', codeString + '\nreturn results;');
      const result = func(dbProxy, results);
      
      // Update database state
      setDatabase(db);
      
      return result.length > 0 ? result : ['Code executed successfully'];
    } catch (err) {
      throw new Error(err.message);
    }
  };
  
  // Helper: Match query conditions
  const matchQuery = (doc, query) => {
    if (Object.keys(query).length === 0) return true;
    
    for (const [key, value] of Object.entries(query)) {
      if (key === '$or') {
        return value.some(subQuery => matchQuery(doc, subQuery));
      }
      if (key === '$and') {
        return value.every(subQuery => matchQuery(doc, subQuery));
      }
      
      const docValue = getNestedValue(doc, key);
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Handle operators
        for (const [op, opValue] of Object.entries(value)) {
          switch(op) {
            case '$gt': if (!(docValue > opValue)) return false; break;
            case '$gte': if (!(docValue >= opValue)) return false; break;
            case '$lt': if (!(docValue < opValue)) return false; break;
            case '$lte': if (!(docValue <= opValue)) return false; break;
            case '$ne': if (docValue === opValue) return false; break;
            case '$in': if (!opValue.includes(docValue)) return false; break;
            case '$nin': if (opValue.includes(docValue)) return false; break;
            case '$exists': if ((docValue !== undefined) !== opValue) return false; break;
          }
        }
      } else {
        if (docValue !== value) return false;
      }
    }
    return true;
  };
  
  // Helper: Get nested value
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  };
  
  // Helper: Apply projection
  const applyProjection = (doc, projection) => {
    const result = {};
    const include = Object.values(projection).some(v => v === 1);
    
    for (const [key, value] of Object.entries(projection)) {
      if (value === 1) {
        result[key] = getNestedValue(doc, key);
      }
    }
    
    if (!include) {
      // Exclusion mode
      for (const key in doc) {
        if (!projection[key]) result[key] = doc[key];
      }
    } else if (!projection._id && projection._id !== 0) {
      result._id = doc._id;
    }
    
    return result;
  };
  
  // Helper: Apply update
  const applyUpdate = (doc, update) => {
    const newDoc = { ...doc };
    
    for (const [operator, fields] of Object.entries(update)) {
      switch(operator) {
        case '$set':
          for (const [key, value] of Object.entries(fields)) {
            setNestedValue(newDoc, key, value);
          }
          break;
        case '$inc':
          for (const [key, value] of Object.entries(fields)) {
            const current = getNestedValue(newDoc, key) || 0;
            setNestedValue(newDoc, key, current + value);
          }
          break;
        case '$unset':
          for (const key of Object.keys(fields)) {
            deleteNestedValue(newDoc, key);
          }
          break;
      }
    }
    
    return newDoc;
  };
  
  const setNestedValue = (obj, path, value) => {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((current, key) => {
      if (!current[key]) current[key] = {};
      return current[key];
    }, obj);
    target[lastKey] = value;
  };
  
  const deleteNestedValue = (obj, path) => {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((current, key) => current?.[key], obj);
    if (target) delete target[lastKey];
  };
  
  // Helper: Compare for sorting
  const compareSort = (a, b, sortObj) => {
    for (const [key, order] of Object.entries(sortObj)) {
      const aVal = getNestedValue(a, key);
      const bVal = getNestedValue(b, key);
      if (aVal < bVal) return order === 1 ? -1 : 1;
      if (aVal > bVal) return order === 1 ? 1 : -1;
    }
    return 0;
  };
  
  // Helper: Perform grouping
  const performGroup = (data, groupSpec) => {
    const groups = {};
    
    data.forEach(doc => {
      const groupKey = typeof groupSpec._id === 'string' 
        ? getNestedValue(doc, groupSpec._id.replace('$', ''))
        : groupSpec._id;
      
      if (!groups[groupKey]) {
        groups[groupKey] = { _id: groupKey };
        
        for (const [field, accumulator] of Object.entries(groupSpec)) {
          if (field === '_id') continue;
          
          const accOp = Object.keys(accumulator)[0];
          const accField = accumulator[accOp];
          
          switch(accOp) {
            case '$sum':
              groups[groupKey][field] = 0;
              break;
            case '$avg':
              groups[groupKey][field] = { sum: 0, count: 0 };
              break;
            case '$min':
              groups[groupKey][field] = Infinity;
              break;
            case '$max':
              groups[groupKey][field] = -Infinity;
              break;
          }
        }
      }
      
      for (const [field, accumulator] of Object.entries(groupSpec)) {
        if (field === '_id') continue;
        
        const accOp = Object.keys(accumulator)[0];
        const accField = accumulator[accOp];
        const value = typeof accField === 'string' 
          ? getNestedValue(doc, accField.replace('$', ''))
          : accField;
        
        switch(accOp) {
          case '$sum':
            groups[groupKey][field] += value;
            break;
          case '$avg':
            groups[groupKey][field].sum += value;
            groups[groupKey][field].count += 1;
            break;
          case '$min':
            groups[groupKey][field] = Math.min(groups[groupKey][field], value);
            break;
          case '$max':
            groups[groupKey][field] = Math.max(groups[groupKey][field], value);
            break;
        }
      }
    });
    
    // Finalize averages
    return Object.values(groups).map(group => {
      const finalGroup = { ...group };
      for (const [key, value] of Object.entries(finalGroup)) {
        if (value && typeof value === 'object' && 'sum' in value && 'count' in value) {
          finalGroup[key] = value.sum / value.count;
        }
      }
      return finalGroup;
    });
  };

  const runCode = () => {
    try {
      setError('');
      const result = executeMongoCode(code);
      
      // Check if result matches expected output
      const exercise = exercises[currentExercise];
      if (exercise.validate) {
        const isCorrect = exercise.validate(result, database);
        if (isCorrect) {
          setOutput(JSON.stringify(result, null, 2) + '\n\n✅ Correct! Exercise completed.');
        } else {
          setOutput(JSON.stringify(result, null, 2) + '\n\n❌ Result doesn\'t match expected output. Try again!');
        }
      } else {
        setOutput(JSON.stringify(result, null, 2));
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const currentEx = exercises[currentExercise];

  return (
    <Box>
      {/* Collections Schema Viewer */}
      <Accordion sx={{ mb: 1.25 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" fontWeight="bold">
            📊 Database Collections
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            {Object.keys(database).map(collectionName => (
              <Paper key={collectionName} sx={{ p: 2, mb: 2 }}>
                <Typography variant="subtitle2" fontWeight="bold" color="primary">
                  {collectionName} ({database[collectionName].length} documents)
                </Typography>
                <Box sx={{ mt: 1, fontSize: '0.85rem', fontFamily: 'monospace', bgcolor: '#f5f5f5', p: 1, borderRadius: 1, maxHeight: 200, overflow: 'auto' }}>
                  <pre>{JSON.stringify(database[collectionName].slice(0, 3), null, 2)}</pre>
                  {database[collectionName].length > 3 && (
                    <Typography variant="caption" color="text.secondary">
                      ... and {database[collectionName].length - 3} more documents
                    </Typography>
                  )}
                </Box>
              </Paper>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Exercise Navigation */}
      <Box sx={{ mb: 2 }}>
        <Tabs 
          value={currentExercise} 
          onChange={(e, val) => setCurrentExercise(val)}
          variant="scrollable"
          scrollButtons="auto"
        >
          {exercises.map((ex, idx) => (
            <Tab 
              key={idx} 
              label={`${idx + 1}. ${ex.title}`}
              icon={ex.completed ? <CheckCircleIcon fontSize="small" /> : null}
              iconPosition="end"
            />
          ))}
        </Tabs>
      </Box>

      {/* Current Exercise */}
      <Paper sx={{ p: 3, mb: 1.25 }}>
        <Box sx={{ mb: 2 }}>
          <Chip label={currentEx.difficulty} color="primary" size="small" sx={{ mr: 1 }} />
          <Typography variant="h6" component="span">{currentEx.title}</Typography>
        </Box>
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          {currentEx.problem}
        </Typography>

        {/* Code Editor */}
        <Box sx={{ mb: 1.25, border: '1px solid #ddd', borderRadius: 1 }}>
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
              wordWrap: 'on',
              automaticLayout: true,
              scrollbar: {
                vertical: 'visible',
                horizontal: 'visible',
              },
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 1.25 }}>
          <Button variant="contained" startIcon={<PlayArrowIcon />} onClick={runCode}>
            Run Code
          </Button>
          <Button variant="outlined" onClick={() => setShowHint(!showHint)}>
            {showHint ? 'Hide' : 'Show'} Hints
          </Button>
          <Button variant="text" onClick={() => setCode(currentEx.solution)}>
            Show Solution
          </Button>
        </Box>

        {showHint && (
          <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant="subtitle2" fontWeight="bold">Hints:</Typography>
            <ul>
              {currentEx.hints.map((hint, idx) => (
                <li key={idx}>{hint}</li>
              ))}
            </ul>
          </Alert>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {output && (
          <Paper sx={{ p: 2, bgcolor: '#f5f5f5', fontFamily: 'monospace', fontSize: '0.85rem', maxHeight: 300, overflow: 'auto' }}>
            <pre>{output}</pre>
          </Paper>
        )}
      </Paper>

      {/* Best Practices */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, bgcolor: '#e8f5e9', border: '2px solid #4caf50' }}>
            <Typography variant="subtitle1" fontWeight="bold" color="success.main" sx={{ mb: 1 }}>
              ✅ Do's
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>Embed related data accessed together</li>
              <li>Index frequently queried fields</li>
              <li>Use projection to limit fields</li>
              <li>Design schema for your queries</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, bgcolor: '#ffebee', border: '2px solid #f44336' }}>
            <Typography variant="subtitle1" fontWeight="bold" color="error.main" sx={{ mb: 1 }}>
              ❌ Don'ts
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>Don't treat it like SQL</li>
              <li>Avoid deeply nested documents</li>
              <li>Don't ignore index usage</li>
              <li>Avoid unbounded arrays</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ p: 2, bgcolor: '#fff3e0', border: '2px solid #ff9800' }}>
        <Typography variant="subtitle1" fontWeight="bold" color="warning.main" sx={{ mb: 1 }}>
          💡 Quick Tips
        </Typography>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>Use <code>db.collection.find()</code> for queries</li>
          <li>Use <code>aggregate([])</code> for complex operations</li>
          <li>Push results to <code>results.push()</code> array to see output</li>
          <li>All operations return promises - use <code>.toArray()</code> for find operations</li>
        </ul>
      </Paper>
    </Box>
  );
};

export default NoSQLPlayground;
