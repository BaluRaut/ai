import React, { useState, useCallback } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Alert,
  CircularProgress,
  Chip,
  IconButton,
  Tooltip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab,
} from '@mui/material';
import {
  PlayArrow as PlayIcon,
  ContentCopy as CopyIcon,
  Refresh as RefreshIcon,
  Lightbulb as LightbulbIcon,
  Hub as GraphIcon,
} from '@mui/icons-material';
import Editor from '@monaco-editor/react';

// Mock Neo4j-like query engine for learning purposes
class MockNeo4jEngine {
  constructor() {
    this.nodes = new Map();
    this.relationships = [];
    this.nodeId = 0;
    this.relId = 0;
    this.initialize();
  }

  initialize() {
    // Create some sample data
    this.createNode({ name: 'Alice', age: 30 }, ['Person']);
    this.createNode({ name: 'Bob', age: 25 }, ['Person']);
    this.createNode({ name: 'Charlie', age: 35 }, ['Person']);
    this.createNode({ name: 'TechCorp', industry: 'Technology' }, ['Company']);
    this.createNode({ name: 'DataInc', industry: 'Data Analytics' }, ['Company']);
    this.createNode({ title: 'Graph Databases', year: 2023 }, ['Book']);
    this.createNode({ title: 'Neo4j in Action', year: 2022 }, ['Book']);

    // Create relationships
    this.createRelationship(0, 1, 'KNOWS', { since: 2020 });
    this.createRelationship(0, 2, 'KNOWS', { since: 2019 });
    this.createRelationship(1, 2, 'KNOWS', { since: 2021 });
    this.createRelationship(0, 3, 'WORKS_AT', { role: 'Developer', since: 2018 });
    this.createRelationship(1, 4, 'WORKS_AT', { role: 'Analyst', since: 2020 });
    this.createRelationship(2, 3, 'WORKS_AT', { role: 'Manager', since: 2015 });
    this.createRelationship(0, 5, 'READ', { rating: 5 });
    this.createRelationship(1, 6, 'READ', { rating: 4 });
  }

  createNode(properties, labels = []) {
    const id = this.nodeId++;
    this.nodes.set(id, { id, labels, properties });
    return { id, labels, properties };
  }

  createRelationship(startId, endId, type, properties = {}) {
    const id = this.relId++;
    const rel = { id, startId, endId, type, properties };
    this.relationships.push(rel);
    return rel;
  }

  reset() {
    this.nodes.clear();
    this.relationships = [];
    this.nodeId = 0;
    this.relId = 0;
    this.initialize();
  }

  executeQuery(cypher) {
    const upperQuery = cypher.toUpperCase().trim();
    
    try {
      // MATCH queries
      if (upperQuery.startsWith('MATCH')) {
        return this.handleMatch(cypher);
      }
      
      // CREATE queries
      if (upperQuery.startsWith('CREATE')) {
        return this.handleCreate(cypher);
      }
      
      // DELETE queries
      if (upperQuery.includes('DELETE')) {
        return this.handleDelete(cypher);
      }
      
      // RETURN only
      if (upperQuery.startsWith('RETURN')) {
        return { 
          success: true, 
          data: [],
          message: 'Empty result - no MATCH clause' 
        };
      }

      return { 
        success: false, 
        error: 'Unsupported query. Try MATCH, CREATE, or DELETE statements.' 
      };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  handleMatch(cypher) {
    const results = [];
    
    // Match all nodes with label
    const labelMatch = cypher.match(/MATCH\s*\(\s*(\w+)\s*:\s*(\w+)\s*\)/i);
    if (labelMatch) {
      const [, variable, label] = labelMatch;
      const matchedNodes = Array.from(this.nodes.values())
        .filter(n => n.labels.includes(label));
      
      // Check for WHERE clause
      const whereMatch = cypher.match(/WHERE\s+(\w+)\.(\w+)\s*(=|>|<|>=|<=|<>)\s*['"]?([^'")\s]+)['"]?/i);
      let filtered = matchedNodes;
      
      if (whereMatch) {
        const [, , prop, op, value] = whereMatch;
        filtered = matchedNodes.filter(n => {
          const propVal = n.properties[prop];
          const numVal = isNaN(value) ? value : Number(value);
          switch(op) {
            case '=': return propVal == numVal;
            case '>': return propVal > numVal;
            case '<': return propVal < numVal;
            case '>=': return propVal >= numVal;
            case '<=': return propVal <= numVal;
            case '<>': return propVal != numVal;
            default: return false;
          }
        });
      }
      
      // Check for RETURN clause
      const returnMatch = cypher.match(/RETURN\s+(.+)$/i);
      if (returnMatch) {
        const returnClause = returnMatch[1].trim();
        
        if (returnClause.includes('COUNT')) {
          return { 
            success: true, 
            data: [{ count: filtered.length }],
            columns: ['count']
          };
        }
        
        // Return specific properties
        const propMatch = returnClause.match(/(\w+)\.(\w+)/g);
        if (propMatch) {
          const props = propMatch.map(p => p.split('.')[1]);
          results.push(...filtered.map(n => {
            const row = {};
            props.forEach(p => { row[p] = n.properties[p]; });
            return row;
          }));
          return { success: true, data: results, columns: props };
        }
        
        // Return full node
        results.push(...filtered.map(n => ({
          [variable]: { labels: n.labels, properties: n.properties }
        })));
        return { success: true, data: results, columns: [variable] };
      }
      
      return { success: true, data: filtered, columns: ['node'] };
    }

    // Match relationships
    const relMatch = cypher.match(/MATCH\s*\(\s*(\w+)\s*\)\s*-\s*\[\s*:?(\w*)\s*\]\s*->\s*\(\s*(\w+)\s*\)/i);
    if (relMatch) {
      const [, , relType] = relMatch;
      const matchedRels = relType 
        ? this.relationships.filter(r => r.type.toUpperCase() === relType.toUpperCase())
        : this.relationships;
      
      results.push(...matchedRels.map(r => ({
        from: this.nodes.get(r.startId)?.properties,
        relationship: { type: r.type, properties: r.properties },
        to: this.nodes.get(r.endId)?.properties
      })));
      
      return { success: true, data: results, columns: ['from', 'relationship', 'to'] };
    }

    // Match all nodes
    if (upperQuery.includes('MATCH (N)') || upperQuery.includes('MATCH(N)')) {
      return { 
        success: true, 
        data: Array.from(this.nodes.values()), 
        columns: ['id', 'labels', 'properties'] 
      };
    }

    return { 
      success: true, 
      data: Array.from(this.nodes.values()), 
      columns: ['id', 'labels', 'properties'] 
    };
  }

  handleCreate(cypher) {
    // Create node
    const nodeMatch = cypher.match(/CREATE\s*\(\s*(\w*)\s*:\s*(\w+)\s*\{([^}]+)\}\s*\)/i);
    if (nodeMatch) {
      const [, , label, propsStr] = nodeMatch;
      const properties = {};
      propsStr.split(',').forEach(prop => {
        const [key, value] = prop.split(':').map(s => s.trim());
        properties[key] = value.replace(/['"]/g, '');
        if (!isNaN(properties[key])) {
          properties[key] = Number(properties[key]);
        }
      });
      
      const node = this.createNode(properties, [label]);
      return { 
        success: true, 
        message: `Created node with label ${label}`,
        data: [node],
        columns: ['id', 'labels', 'properties']
      };
    }

    // Create relationship
    const relMatch = cypher.match(/CREATE\s*\([^)]+\)\s*-\s*\[\s*:(\w+)\s*\]\s*->\s*\([^)]+\)/i);
    if (relMatch) {
      return { 
        success: true, 
        message: 'Relationship creation simulated (use MATCH to create between existing nodes)',
        data: []
      };
    }

    return { success: false, error: 'Invalid CREATE syntax' };
  }

  handleDelete(cypher) {
    if (cypher.toUpperCase().includes('DETACH DELETE')) {
      // Simulate detach delete
      return { 
        success: true, 
        message: 'Nodes and relationships deleted (simulated)',
        data: []
      };
    }
    
    return { 
      success: true, 
      message: 'Delete operation simulated',
      data: []
    };
  }
}

// Create singleton instance
const neo4jEngine = new MockNeo4jEngine();

// Example queries
const exampleQueries = [
  {
    name: 'Get all Person nodes',
    query: `MATCH (p:Person)
RETURN p`,
  },
  {
    name: 'Find people over 30',
    query: `MATCH (p:Person)
WHERE p.age > 30
RETURN p.name, p.age`,
  },
  {
    name: 'Find KNOWS relationships',
    query: `MATCH (a)-[:KNOWS]->(b)
RETURN a, b`,
  },
  {
    name: 'Count all companies',
    query: `MATCH (c:Company)
RETURN COUNT(c)`,
  },
  {
    name: 'Find who works where',
    query: `MATCH (p)-[:WORKS_AT]->(c)
RETURN p, c`,
  },
  {
    name: 'Create a new Person',
    query: `CREATE (p:Person {name: 'David', age: 28})
RETURN p`,
  },
  {
    name: 'Get all Books',
    query: `MATCH (b:Book)
RETURN b.title, b.year`,
  },
];

const Neo4jPlayground = () => {
  const [query, setQuery] = useState(exampleQueries[0].query);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const executeQuery = useCallback(() => {
    setLoading(true);
    setError(null);
    setResults(null);

    setTimeout(() => {
      const result = neo4jEngine.executeQuery(query);
      
      if (result.success) {
        setResults(result);
      } else {
        setError(result.error);
      }
      setLoading(false);
    }, 300);
  }, [query]);

  const resetDatabase = () => {
    neo4jEngine.reset();
    setResults(null);
    setError(null);
  };

  const copyQuery = () => {
    navigator.clipboard.writeText(query);
  };

  const loadExample = (example) => {
    setQuery(example.query);
    setResults(null);
    setError(null);
  };

  const renderResults = () => {
    if (!results) return null;

    if (results.message && results.data.length === 0) {
      return (
        <Alert severity="success" sx={{ mt: 2 }}>
          {results.message}
        </Alert>
      );
    }

    return (
      <Box sx={{ mt: 2 }}>
        {results.message && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {results.message}
          </Alert>
        )}
        <Typography variant="subtitle2" gutterBottom>
          Results ({results.data.length} rows):
        </Typography>
        <Paper 
          variant="outlined" 
          sx={{ 
            maxHeight: 300, 
            overflow: 'auto',
            bgcolor: 'grey.900',
            p: 2,
          }}
        >
          <pre style={{ margin: 0, fontSize: '13px', color: '#e0e0e0' }}>
            {JSON.stringify(results.data, null, 2)}
          </pre>
        </Paper>
      </Box>
    );
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <GraphIcon color="primary" />
        <Typography variant="h6">Neo4j Cypher Playground</Typography>
        <Chip 
          label="Simulated Environment" 
          size="small" 
          color="warning" 
          variant="outlined" 
        />
      </Box>

      <Alert severity="info" icon={<LightbulbIcon />}>
        This is a simulated Neo4j environment for learning Cypher. The database comes 
        pre-loaded with Person, Company, and Book nodes with KNOWS, WORKS_AT, and READ relationships.
      </Alert>

      <Box sx={{ display: 'flex', gap: 2, flex: 1, minHeight: 0 }}>
        {/* Left Panel - Editor */}
        <Paper sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <Box sx={{ p: 1, borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)} size="small">
              <Tab label="Query" />
              <Tab label="Examples" />
            </Tabs>
          </Box>

          {selectedTab === 0 ? (
            <>
              <Box sx={{ flex: 1, minHeight: 200 }}>
                <Editor
                  height="100%"
                  defaultLanguage="cypher"
                  language="cypher"
                  value={query}
                  onChange={(value) => setQuery(value || '')}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    wordWrap: 'on',
                  }}
                />
              </Box>
              <Box sx={{ p: 1, borderTop: 1, borderColor: 'divider', display: 'flex', gap: 1 }}>
                <Button
                  variant="contained"
                  startIcon={loading ? <CircularProgress size={16} color="inherit" /> : <PlayIcon />}
                  onClick={executeQuery}
                  disabled={loading || !query.trim()}
                >
                  Run Query
                </Button>
                <Tooltip title="Copy query">
                  <IconButton onClick={copyQuery} size="small">
                    <CopyIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Reset database">
                  <IconButton onClick={resetDatabase} size="small" color="warning">
                    <RefreshIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </>
          ) : (
            <List dense sx={{ overflow: 'auto' }}>
              {exampleQueries.map((example, idx) => (
                <ListItem
                  key={idx}
                  button
                  onClick={() => {
                    loadExample(example);
                    setSelectedTab(0);
                  }}
                  sx={{ '&:hover': { bgcolor: 'action.hover' } }}
                >
                  <ListItemText
                    primary={example.name}
                    secondary={
                      <Typography 
                        variant="caption" 
                        component="pre" 
                        sx={{ 
                          fontFamily: 'monospace', 
                          whiteSpace: 'pre-wrap',
                          color: 'text.secondary' 
                        }}
                      >
                        {example.query}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Paper>

        {/* Right Panel - Results */}
        <Paper sx={{ flex: 1, p: 2, overflow: 'auto' }}>
          <Typography variant="subtitle1" gutterBottom>
            Query Results
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
              <CircularProgress />
            </Box>
          )}

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          {renderResults()}

          {!loading && !error && !results && (
            <Typography color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
              Run a query to see results
            </Typography>
          )}
        </Paper>
      </Box>

      {/* Schema Info */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          Database Schema
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          <Box>
            <Typography variant="caption" color="text.secondary">Node Labels:</Typography>
            <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
              <Chip label="Person" size="small" color="primary" variant="outlined" />
              <Chip label="Company" size="small" color="secondary" variant="outlined" />
              <Chip label="Book" size="small" color="success" variant="outlined" />
            </Box>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">Relationship Types:</Typography>
            <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
              <Chip label="KNOWS" size="small" variant="outlined" />
              <Chip label="WORKS_AT" size="small" variant="outlined" />
              <Chip label="READ" size="small" variant="outlined" />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Neo4jPlayground;
