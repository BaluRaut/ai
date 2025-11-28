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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RefreshIcon from '@mui/icons-material/Refresh';
import Editor from '@monaco-editor/react';

const RedisPlayground = ({ exercises = [], initialData = {} }) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState([]);
  const [error, setError] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [store, setStore] = useState({});
  const [commandHistory, setCommandHistory] = useState([]);

  // Initialize Redis-like store
  useEffect(() => {
    resetStore();
  }, [initialData]);

  useEffect(() => {
    if (exercises[currentExercise]) {
      setCode(exercises[currentExercise].starterCode || '');
      setOutput([]);
      setError('');
      setShowHint(false);
    }
  }, [currentExercise, exercises]);

  const resetStore = () => {
    const newStore = {};
    
    // Initialize with provided data
    if (initialData.strings) {
      Object.entries(initialData.strings).forEach(([key, value]) => {
        newStore[key] = { type: 'string', value, ttl: null };
      });
    }
    if (initialData.lists) {
      Object.entries(initialData.lists).forEach(([key, value]) => {
        newStore[key] = { type: 'list', value: [...value], ttl: null };
      });
    }
    if (initialData.sets) {
      Object.entries(initialData.sets).forEach(([key, value]) => {
        newStore[key] = { type: 'set', value: new Set(value), ttl: null };
      });
    }
    if (initialData.hashes) {
      Object.entries(initialData.hashes).forEach(([key, value]) => {
        newStore[key] = { type: 'hash', value: { ...value }, ttl: null };
      });
    }
    if (initialData.sortedSets) {
      Object.entries(initialData.sortedSets).forEach(([key, value]) => {
        newStore[key] = { type: 'zset', value: [...value], ttl: null };
      });
    }
    
    setStore(newStore);
    setCommandHistory([]);
  };

  // Redis command executor
  const executeRedisCommand = (command, args) => {
    const cmd = command.toUpperCase();
    let result = null;
    const newStore = { ...store };

    switch (cmd) {
      // String commands
      case 'SET': {
        const [key, value, ...options] = args;
        newStore[key] = { type: 'string', value: String(value), ttl: null };
        
        // Handle EX option
        const exIndex = options.findIndex(o => o.toUpperCase() === 'EX');
        if (exIndex !== -1 && options[exIndex + 1]) {
          newStore[key].ttl = parseInt(options[exIndex + 1]);
        }
        
        result = 'OK';
        break;
      }
      
      case 'GET': {
        const [key] = args;
        const item = newStore[key];
        if (!item) result = '(nil)';
        else if (item.type !== 'string') result = '(error) WRONGTYPE Operation against a key holding the wrong kind of value';
        else result = item.value;
        break;
      }
      
      case 'MSET': {
        for (let i = 0; i < args.length; i += 2) {
          newStore[args[i]] = { type: 'string', value: String(args[i + 1]), ttl: null };
        }
        result = 'OK';
        break;
      }
      
      case 'MGET': {
        result = args.map(key => {
          const item = newStore[key];
          return item && item.type === 'string' ? item.value : '(nil)';
        });
        break;
      }
      
      case 'INCR': {
        const [key] = args;
        if (!newStore[key]) newStore[key] = { type: 'string', value: '0', ttl: null };
        if (newStore[key].type !== 'string') {
          result = '(error) WRONGTYPE';
          break;
        }
        const val = parseInt(newStore[key].value) || 0;
        newStore[key].value = String(val + 1);
        result = val + 1;
        break;
      }
      
      case 'INCRBY': {
        const [key, increment] = args;
        if (!newStore[key]) newStore[key] = { type: 'string', value: '0', ttl: null };
        const val = parseInt(newStore[key].value) || 0;
        newStore[key].value = String(val + parseInt(increment));
        result = val + parseInt(increment);
        break;
      }
      
      case 'DECR': {
        const [key] = args;
        if (!newStore[key]) newStore[key] = { type: 'string', value: '0', ttl: null };
        const val = parseInt(newStore[key].value) || 0;
        newStore[key].value = String(val - 1);
        result = val - 1;
        break;
      }
      
      case 'APPEND': {
        const [key, value] = args;
        if (!newStore[key]) newStore[key] = { type: 'string', value: '', ttl: null };
        newStore[key].value += String(value);
        result = newStore[key].value.length;
        break;
      }
      
      case 'STRLEN': {
        const [key] = args;
        result = newStore[key]?.value?.length || 0;
        break;
      }
      
      case 'SETEX': {
        const [key, seconds, value] = args;
        newStore[key] = { type: 'string', value: String(value), ttl: parseInt(seconds) };
        result = 'OK';
        break;
      }

      // List commands
      case 'LPUSH': {
        const [key, ...values] = args;
        if (!newStore[key]) newStore[key] = { type: 'list', value: [], ttl: null };
        if (newStore[key].type !== 'list') {
          result = '(error) WRONGTYPE';
          break;
        }
        values.reverse().forEach(v => newStore[key].value.unshift(String(v)));
        result = newStore[key].value.length;
        break;
      }
      
      case 'RPUSH': {
        const [key, ...values] = args;
        if (!newStore[key]) newStore[key] = { type: 'list', value: [], ttl: null };
        if (newStore[key].type !== 'list') {
          result = '(error) WRONGTYPE';
          break;
        }
        values.forEach(v => newStore[key].value.push(String(v)));
        result = newStore[key].value.length;
        break;
      }
      
      case 'LPOP': {
        const [key] = args;
        if (!newStore[key] || newStore[key].type !== 'list') {
          result = '(nil)';
          break;
        }
        result = newStore[key].value.shift() || '(nil)';
        break;
      }
      
      case 'RPOP': {
        const [key] = args;
        if (!newStore[key] || newStore[key].type !== 'list') {
          result = '(nil)';
          break;
        }
        result = newStore[key].value.pop() || '(nil)';
        break;
      }
      
      case 'LRANGE': {
        const [key, start, stop] = args;
        if (!newStore[key] || newStore[key].type !== 'list') {
          result = [];
          break;
        }
        const list = newStore[key].value;
        const startIdx = parseInt(start);
        let stopIdx = parseInt(stop);
        if (stopIdx < 0) stopIdx = list.length + stopIdx + 1;
        else stopIdx = stopIdx + 1;
        result = list.slice(startIdx, stopIdx);
        break;
      }
      
      case 'LLEN': {
        const [key] = args;
        result = newStore[key]?.type === 'list' ? newStore[key].value.length : 0;
        break;
      }
      
      case 'LINDEX': {
        const [key, index] = args;
        if (!newStore[key] || newStore[key].type !== 'list') {
          result = '(nil)';
          break;
        }
        const idx = parseInt(index);
        result = newStore[key].value[idx < 0 ? newStore[key].value.length + idx : idx] || '(nil)';
        break;
      }

      // Set commands
      case 'SADD': {
        const [key, ...members] = args;
        if (!newStore[key]) newStore[key] = { type: 'set', value: new Set(), ttl: null };
        if (newStore[key].type !== 'set') {
          result = '(error) WRONGTYPE';
          break;
        }
        let added = 0;
        members.forEach(m => {
          if (!newStore[key].value.has(String(m))) {
            newStore[key].value.add(String(m));
            added++;
          }
        });
        result = added;
        break;
      }
      
      case 'SMEMBERS': {
        const [key] = args;
        if (!newStore[key] || newStore[key].type !== 'set') {
          result = [];
          break;
        }
        result = Array.from(newStore[key].value);
        break;
      }
      
      case 'SISMEMBER': {
        const [key, member] = args;
        if (!newStore[key] || newStore[key].type !== 'set') {
          result = 0;
          break;
        }
        result = newStore[key].value.has(String(member)) ? 1 : 0;
        break;
      }
      
      case 'SCARD': {
        const [key] = args;
        result = newStore[key]?.type === 'set' ? newStore[key].value.size : 0;
        break;
      }
      
      case 'SREM': {
        const [key, ...members] = args;
        if (!newStore[key] || newStore[key].type !== 'set') {
          result = 0;
          break;
        }
        let removed = 0;
        members.forEach(m => {
          if (newStore[key].value.delete(String(m))) removed++;
        });
        result = removed;
        break;
      }
      
      case 'SINTER': {
        const sets = args.map(key => newStore[key]?.value).filter(s => s instanceof Set);
        if (sets.length === 0) {
          result = [];
          break;
        }
        result = Array.from(sets[0]).filter(item => sets.every(set => set.has(item)));
        break;
      }
      
      case 'SUNION': {
        const union = new Set();
        args.forEach(key => {
          if (newStore[key]?.type === 'set') {
            newStore[key].value.forEach(item => union.add(item));
          }
        });
        result = Array.from(union);
        break;
      }

      // Hash commands
      case 'HSET': {
        const [key, ...fieldValues] = args;
        if (!newStore[key]) newStore[key] = { type: 'hash', value: {}, ttl: null };
        if (newStore[key].type !== 'hash') {
          result = '(error) WRONGTYPE';
          break;
        }
        let added = 0;
        for (let i = 0; i < fieldValues.length; i += 2) {
          if (!(fieldValues[i] in newStore[key].value)) added++;
          newStore[key].value[fieldValues[i]] = String(fieldValues[i + 1]);
        }
        result = added;
        break;
      }
      
      case 'HGET': {
        const [key, field] = args;
        if (!newStore[key] || newStore[key].type !== 'hash') {
          result = '(nil)';
          break;
        }
        result = newStore[key].value[field] || '(nil)';
        break;
      }
      
      case 'HGETALL': {
        const [key] = args;
        if (!newStore[key] || newStore[key].type !== 'hash') {
          result = {};
          break;
        }
        result = newStore[key].value;
        break;
      }
      
      case 'HMSET': {
        const [key, ...fieldValues] = args;
        if (!newStore[key]) newStore[key] = { type: 'hash', value: {}, ttl: null };
        for (let i = 0; i < fieldValues.length; i += 2) {
          newStore[key].value[fieldValues[i]] = String(fieldValues[i + 1]);
        }
        result = 'OK';
        break;
      }
      
      case 'HINCRBY': {
        const [key, field, increment] = args;
        if (!newStore[key]) newStore[key] = { type: 'hash', value: {}, ttl: null };
        const current = parseInt(newStore[key].value[field]) || 0;
        newStore[key].value[field] = String(current + parseInt(increment));
        result = current + parseInt(increment);
        break;
      }
      
      case 'HDEL': {
        const [key, ...fields] = args;
        if (!newStore[key] || newStore[key].type !== 'hash') {
          result = 0;
          break;
        }
        let deleted = 0;
        fields.forEach(f => {
          if (f in newStore[key].value) {
            delete newStore[key].value[f];
            deleted++;
          }
        });
        result = deleted;
        break;
      }
      
      case 'HEXISTS': {
        const [key, field] = args;
        result = newStore[key]?.type === 'hash' && field in newStore[key].value ? 1 : 0;
        break;
      }
      
      case 'HLEN': {
        const [key] = args;
        result = newStore[key]?.type === 'hash' ? Object.keys(newStore[key].value).length : 0;
        break;
      }
      
      case 'HKEYS': {
        const [key] = args;
        result = newStore[key]?.type === 'hash' ? Object.keys(newStore[key].value) : [];
        break;
      }
      
      case 'HVALS': {
        const [key] = args;
        result = newStore[key]?.type === 'hash' ? Object.values(newStore[key].value) : [];
        break;
      }

      // Sorted Set commands
      case 'ZADD': {
        const [key, ...scoreMembers] = args;
        if (!newStore[key]) newStore[key] = { type: 'zset', value: [], ttl: null };
        if (newStore[key].type !== 'zset') {
          result = '(error) WRONGTYPE';
          break;
        }
        let added = 0;
        for (let i = 0; i < scoreMembers.length; i += 2) {
          const score = parseFloat(scoreMembers[i]);
          const member = String(scoreMembers[i + 1]);
          const existingIdx = newStore[key].value.findIndex(item => item.member === member);
          if (existingIdx === -1) {
            newStore[key].value.push({ score, member });
            added++;
          } else {
            newStore[key].value[existingIdx].score = score;
          }
        }
        newStore[key].value.sort((a, b) => a.score - b.score);
        result = added;
        break;
      }
      
      case 'ZRANGE': {
        const [key, start, stop, withScores] = args;
        if (!newStore[key] || newStore[key].type !== 'zset') {
          result = [];
          break;
        }
        const zset = newStore[key].value;
        const startIdx = parseInt(start);
        let stopIdx = parseInt(stop);
        if (stopIdx < 0) stopIdx = zset.length + stopIdx + 1;
        else stopIdx = stopIdx + 1;
        const range = zset.slice(startIdx, stopIdx);
        if (withScores?.toUpperCase() === 'WITHSCORES') {
          result = range.flatMap(item => [item.member, item.score]);
        } else {
          result = range.map(item => item.member);
        }
        break;
      }
      
      case 'ZREVRANGE': {
        const [key, start, stop, withScores] = args;
        if (!newStore[key] || newStore[key].type !== 'zset') {
          result = [];
          break;
        }
        const zset = [...newStore[key].value].reverse();
        const startIdx = parseInt(start);
        let stopIdx = parseInt(stop);
        if (stopIdx < 0) stopIdx = zset.length + stopIdx + 1;
        else stopIdx = stopIdx + 1;
        const range = zset.slice(startIdx, stopIdx);
        if (withScores?.toUpperCase() === 'WITHSCORES') {
          result = range.flatMap(item => [item.member, item.score]);
        } else {
          result = range.map(item => item.member);
        }
        break;
      }
      
      case 'ZSCORE': {
        const [key, member] = args;
        if (!newStore[key] || newStore[key].type !== 'zset') {
          result = '(nil)';
          break;
        }
        const item = newStore[key].value.find(i => i.member === member);
        result = item ? item.score : '(nil)';
        break;
      }
      
      case 'ZRANK': {
        const [key, member] = args;
        if (!newStore[key] || newStore[key].type !== 'zset') {
          result = '(nil)';
          break;
        }
        const idx = newStore[key].value.findIndex(i => i.member === member);
        result = idx >= 0 ? idx : '(nil)';
        break;
      }
      
      case 'ZREVRANK': {
        const [key, member] = args;
        if (!newStore[key] || newStore[key].type !== 'zset') {
          result = '(nil)';
          break;
        }
        const idx = newStore[key].value.findIndex(i => i.member === member);
        result = idx >= 0 ? newStore[key].value.length - 1 - idx : '(nil)';
        break;
      }
      
      case 'ZCARD': {
        const [key] = args;
        result = newStore[key]?.type === 'zset' ? newStore[key].value.length : 0;
        break;
      }
      
      case 'ZINCRBY': {
        const [key, increment, member] = args;
        if (!newStore[key]) newStore[key] = { type: 'zset', value: [], ttl: null };
        const existingIdx = newStore[key].value.findIndex(i => i.member === member);
        if (existingIdx === -1) {
          newStore[key].value.push({ score: parseFloat(increment), member });
        } else {
          newStore[key].value[existingIdx].score += parseFloat(increment);
        }
        newStore[key].value.sort((a, b) => a.score - b.score);
        const item = newStore[key].value.find(i => i.member === member);
        result = item.score;
        break;
      }

      // General commands
      case 'KEYS': {
        const [pattern] = args;
        const regex = new RegExp('^' + pattern.replace(/\*/g, '.*').replace(/\?/g, '.') + '$');
        result = Object.keys(newStore).filter(key => regex.test(key));
        break;
      }
      
      case 'EXISTS': {
        result = args.filter(key => key in newStore).length;
        break;
      }
      
      case 'DEL': {
        let deleted = 0;
        args.forEach(key => {
          if (key in newStore) {
            delete newStore[key];
            deleted++;
          }
        });
        result = deleted;
        break;
      }
      
      case 'TYPE': {
        const [key] = args;
        result = newStore[key]?.type || 'none';
        break;
      }
      
      case 'TTL': {
        const [key] = args;
        if (!newStore[key]) result = -2;
        else if (newStore[key].ttl === null) result = -1;
        else result = newStore[key].ttl;
        break;
      }
      
      case 'EXPIRE': {
        const [key, seconds] = args;
        if (!newStore[key]) result = 0;
        else {
          newStore[key].ttl = parseInt(seconds);
          result = 1;
        }
        break;
      }
      
      case 'FLUSHALL':
      case 'FLUSHDB': {
        Object.keys(newStore).forEach(key => delete newStore[key]);
        result = 'OK';
        break;
      }
      
      case 'DBSIZE': {
        result = Object.keys(newStore).length;
        break;
      }
      
      default:
        result = `(error) ERR unknown command '${command}'`;
    }

    setStore(newStore);
    return result;
  };

  // Parse and execute Redis commands
  const parseCommand = (line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return null;
    
    // Parse command with quoted strings support
    const parts = [];
    let current = '';
    let inQuotes = false;
    let quoteChar = '';
    
    for (let i = 0; i < trimmed.length; i++) {
      const char = trimmed[i];
      
      if ((char === '"' || char === "'") && !inQuotes) {
        inQuotes = true;
        quoteChar = char;
      } else if (char === quoteChar && inQuotes) {
        inQuotes = false;
        quoteChar = '';
      } else if (char === ' ' && !inQuotes) {
        if (current) {
          parts.push(current);
          current = '';
        }
      } else {
        current += char;
      }
    }
    if (current) parts.push(current);
    
    if (parts.length === 0) return null;
    
    const [command, ...args] = parts;
    return { command, args };
  };

  const runCode = () => {
    try {
      setError('');
      const lines = code.split('\n');
      const results = [];
      
      lines.forEach((line, index) => {
        const parsed = parseCommand(line);
        if (parsed) {
          const result = executeRedisCommand(parsed.command, parsed.args);
          results.push({
            command: `${parsed.command} ${parsed.args.join(' ')}`.trim(),
            result,
            lineNum: index + 1
          });
          setCommandHistory(prev => [...prev, { command: line.trim(), result }]);
        }
      });
      
      setOutput(results);
      
      // Check if exercise is correct
      const exercise = exercises[currentExercise];
      if (exercise?.validate) {
        const isCorrect = exercise.validate(results, store);
        if (isCorrect) {
          setOutput(prev => [...prev, { command: '', result: '✅ Correct! Exercise completed.', success: true }]);
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const formatResult = (result) => {
    if (result === null || result === undefined) return '(nil)';
    if (Array.isArray(result)) {
      if (result.length === 0) return '(empty array)';
      return result.map((item, i) => `${i + 1}) ${formatResult(item)}`).join('\n');
    }
    if (typeof result === 'object') {
      return Object.entries(result).map(([k, v]) => `${k}: ${v}`).join('\n');
    }
    return String(result);
  };

  const currentEx = exercises[currentExercise];

  // Get store display data
  const getStoreDisplay = () => {
    const display = {
      strings: [],
      lists: [],
      sets: [],
      hashes: [],
      sortedSets: []
    };
    
    Object.entries(store).forEach(([key, item]) => {
      switch(item.type) {
        case 'string':
          display.strings.push({ key, value: item.value, ttl: item.ttl });
          break;
        case 'list':
          display.lists.push({ key, value: item.value, ttl: item.ttl });
          break;
        case 'set':
          display.sets.push({ key, value: Array.from(item.value), ttl: item.ttl });
          break;
        case 'hash':
          display.hashes.push({ key, value: item.value, ttl: item.ttl });
          break;
        case 'zset':
          display.sortedSets.push({ key, value: item.value, ttl: item.ttl });
          break;
      }
    });
    
    return display;
  };

  const storeDisplay = getStoreDisplay();

  return (
    <Box>
      {/* Redis Store Viewer */}
      <Accordion sx={{ mb: 1.25 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" fontWeight="bold">
            🗄️ Redis Data Store
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <Button size="small" startIcon={<RefreshIcon />} onClick={resetStore}>
              Reset Store
            </Button>
          </Box>
          
          <Grid container spacing={2}>
            {/* Strings */}
            {storeDisplay.strings.length > 0 && (
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 1.5 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary">
                    📝 Strings ({storeDisplay.strings.length})
                  </Typography>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Key</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>TTL</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {storeDisplay.strings.slice(0, 5).map((item, idx) => (
                        <TableRow key={idx}>
                          <TableCell><code>{item.key}</code></TableCell>
                          <TableCell>{item.value}</TableCell>
                          <TableCell>{item.ttl || '-'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
            )}
            
            {/* Lists */}
            {storeDisplay.lists.length > 0 && (
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 1.5 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="secondary">
                    📋 Lists ({storeDisplay.lists.length})
                  </Typography>
                  {storeDisplay.lists.slice(0, 3).map((item, idx) => (
                    <Box key={idx} sx={{ mt: 1, p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                      <Typography variant="caption" fontWeight="bold">{item.key}</Typography>
                      <Typography variant="body2" fontFamily="monospace">
                        [{item.value.slice(0, 5).join(', ')}{item.value.length > 5 ? '...' : ''}]
                      </Typography>
                    </Box>
                  ))}
                </Paper>
              </Grid>
            )}
            
            {/* Sets */}
            {storeDisplay.sets.length > 0 && (
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 1.5 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="success.main">
                    🎯 Sets ({storeDisplay.sets.length})
                  </Typography>
                  {storeDisplay.sets.slice(0, 3).map((item, idx) => (
                    <Box key={idx} sx={{ mt: 1, p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                      <Typography variant="caption" fontWeight="bold">{item.key}</Typography>
                      <Typography variant="body2" fontFamily="monospace">
                        {'{' + item.value.slice(0, 5).join(', ') + (item.value.length > 5 ? '...' : '') + '}'}
                      </Typography>
                    </Box>
                  ))}
                </Paper>
              </Grid>
            )}
            
            {/* Hashes */}
            {storeDisplay.hashes.length > 0 && (
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 1.5 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="warning.main">
                    🗂️ Hashes ({storeDisplay.hashes.length})
                  </Typography>
                  {storeDisplay.hashes.slice(0, 3).map((item, idx) => (
                    <Box key={idx} sx={{ mt: 1, p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                      <Typography variant="caption" fontWeight="bold">{item.key}</Typography>
                      <pre style={{ margin: 0, fontSize: '0.75rem' }}>
                        {JSON.stringify(item.value, null, 2)}
                      </pre>
                    </Box>
                  ))}
                </Paper>
              </Grid>
            )}
            
            {/* Sorted Sets */}
            {storeDisplay.sortedSets.length > 0 && (
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 1.5 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="info.main">
                    📊 Sorted Sets ({storeDisplay.sortedSets.length})
                  </Typography>
                  {storeDisplay.sortedSets.slice(0, 3).map((item, idx) => (
                    <Box key={idx} sx={{ mt: 1, p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                      <Typography variant="caption" fontWeight="bold">{item.key}</Typography>
                      {item.value.slice(0, 5).map((entry, i) => (
                        <Typography key={i} variant="body2" fontFamily="monospace">
                          {entry.member}: {entry.score}
                        </Typography>
                      ))}
                    </Box>
                  ))}
                </Paper>
              </Grid>
            )}
          </Grid>
          
          {Object.keys(store).length === 0 && (
            <Typography variant="body2" color="text.secondary" textAlign="center">
              No data in store. Run some commands to add data!
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>

      {/* Exercise Navigation */}
      {exercises.length > 0 && (
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
      )}

      {/* Current Exercise */}
      {currentEx && (
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
              height="120px"
              defaultLanguage="shell"
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
              Run Commands
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

          {output.length > 0 && (
            <Paper sx={{ p: 2, bgcolor: '#1e1e1e', color: '#fff', fontFamily: 'monospace', fontSize: '0.85rem', maxHeight: 300, overflow: 'auto' }}>
              {output.map((item, idx) => (
                <Box key={idx} sx={{ mb: 1 }}>
                  {item.command && (
                    <Typography variant="body2" sx={{ color: '#9cdcfe' }}>
                      &gt; {item.command}
                    </Typography>
                  )}
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: item.success ? '#4caf50' : '#ce9178', 
                      whiteSpace: 'pre-wrap' 
                    }}
                  >
                    {formatResult(item.result)}
                  </Typography>
                </Box>
              ))}
            </Paper>
          )}
        </Paper>
      )}

      {/* Best Practices */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, bgcolor: '#e8f5e9', border: '2px solid #4caf50' }}>
            <Typography variant="subtitle1" fontWeight="bold" color="success.main" sx={{ mb: 1 }}>
              ✅ Do's
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>Set TTL on cache entries</li>
              <li>Use appropriate data structures</li>
              <li>Use pipelining for multiple commands</li>
              <li>Monitor memory usage</li>
              <li>Use connection pooling</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, bgcolor: '#ffebee', border: '2px solid #f44336' }}>
            <Typography variant="subtitle1" fontWeight="bold" color="error.main" sx={{ mb: 1 }}>
              ❌ Don'ts
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>Don't store large objects</li>
              <li>Avoid blocking operations</li>
              <li>Don't use as primary database</li>
              <li>Avoid KEYS in production</li>
              <li>Don't ignore memory limits</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ p: 2, bgcolor: '#fff3e0', border: '2px solid #ff9800' }}>
        <Typography variant="subtitle1" fontWeight="bold" color="warning.main" sx={{ mb: 1 }}>
          💡 Quick Reference
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Typography variant="caption" fontWeight="bold">Strings</Typography>
            <Typography variant="body2" fontFamily="monospace">
              SET, GET, INCR, DECR, APPEND
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="caption" fontWeight="bold">Lists</Typography>
            <Typography variant="body2" fontFamily="monospace">
              LPUSH, RPUSH, LPOP, LRANGE
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="caption" fontWeight="bold">Sets</Typography>
            <Typography variant="body2" fontFamily="monospace">
              SADD, SMEMBERS, SINTER, SUNION
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="caption" fontWeight="bold">Hashes</Typography>
            <Typography variant="body2" fontFamily="monospace">
              HSET, HGET, HGETALL, HINCRBY
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default RedisPlayground;
