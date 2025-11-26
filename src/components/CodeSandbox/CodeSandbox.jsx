import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  IconButton,
  Tooltip,
  Alert,
  CircularProgress,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import {
  PlayArrow,
  ContentCopy,
  Check,
  RestartAlt,
} from '@mui/icons-material';
import Editor from '@monaco-editor/react';
import { useTheme } from '@mui/material/styles';

const CodeSandbox = ({ 
  initialCode = '', 
  initialJsCode = '',
  title = 'Try It Yourself', 
  height = '400px',
  supportedLanguages = ['python', 'javascript']
}) => {
  const theme = useTheme();
  const [selectedLang, setSelectedLang] = useState(supportedLanguages[0]);
  const [pythonCode, setPythonCode] = useState(initialCode);
  const [jsCode, setJsCode] = useState(initialJsCode || initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [pyodideReady, setPyodideReady] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Initializing Python environment...');
  const pyodideRef = useRef(null);

  const currentCode = selectedLang === 'python' ? pythonCode : jsCode;
  const setCurrentCode = selectedLang === 'python' ? setPythonCode : setJsCode;

  // Initialize Pyodide only if Python is supported
  useEffect(() => {
    if (!supportedLanguages.includes('python')) {
      return;
    }

    const loadPyodide = async () => {
      try {
        if (!window.loadPyodide) {
          setError('Pyodide not loaded. Please refresh the page.');
          return;
        }

        setLoadingMessage('Loading Python runtime...');
        const pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
        });

        // Redirect stdout
        pyodide.runPython(`
import sys
import io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);

        setLoadingMessage('Python ready!');
        pyodideRef.current = pyodide;
        setPyodideReady(true);
      } catch (err) {
        console.error('Error loading Pyodide:', err);
        setError('Failed to load Python environment: ' + err.message);
      }
    };

    loadPyodide();
  }, [supportedLanguages]);

  const runCode = async () => {
    setIsRunning(true);
    setError('');
    setOutput('');

    try {
      if (selectedLang === 'python') {
        await runPythonCode();
      } else if (selectedLang === 'javascript') {
        await runJavaScriptCode();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsRunning(false);
    }
  };

  const runPythonCode = async () => {
    if (!pyodideReady || !pyodideRef.current) {
      setError('Python environment not ready. Please wait...');
      return;
    }

    const pyodide = pyodideRef.current;

    // Clear previous output
    pyodide.runPython(`
import sys
import io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);

    // Check for common imports and auto-install packages
    const codeLines = pythonCode.toLowerCase();
    const packagesToLoad = [];
    
    if (codeLines.includes('import numpy') || codeLines.includes('from numpy')) {
      packagesToLoad.push('numpy');
    }
    if (codeLines.includes('import pandas') || codeLines.includes('from pandas')) {
      packagesToLoad.push('pandas');
    }
    if (codeLines.includes('import matplotlib') || codeLines.includes('from matplotlib')) {
      packagesToLoad.push('matplotlib');
    }
    if (codeLines.includes('sklearn') || codeLines.includes('scikit-learn')) {
      packagesToLoad.push('scikit-learn');
    }

    // Load packages if needed
    if (packagesToLoad.length > 0) {
      setOutput(`Installing packages: ${packagesToLoad.join(', ')}...\n`);
      for (const pkg of packagesToLoad) {
        try {
          await pyodide.loadPackage(pkg);
        } catch (err) {
          console.warn(`Could not load ${pkg}:`, err);
        }
      }
      setOutput('');
    }

    // Run user code
    await pyodide.runPythonAsync(pythonCode);

    // Get output
    const stdout = pyodide.runPython('sys.stdout.getvalue()');
    const stderr = pyodide.runPython('sys.stderr.getvalue()');

    if (stderr) {
      setError(stderr);
    }
    if (stdout) {
      setOutput(stdout);
    }
    if (!stdout && !stderr) {
      setOutput('Code executed successfully with no output.');
    }
  };

  const runJavaScriptCode = async () => {
    // Capture console output
    const logs = [];
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;

    console.log = (...args) => {
      logs.push(args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' '));
      originalLog.apply(console, args);
    };

    console.error = (...args) => {
      logs.push('ERROR: ' + args.join(' '));
      originalError.apply(console, args);
    };

    console.warn = (...args) => {
      logs.push('WARNING: ' + args.join(' '));
      originalWarn.apply(console, args);
    };

    try {
      // Load TensorFlow.js if needed
      if (jsCode.includes('tf.') && !window.tf) {
        setError('TensorFlow.js not loaded. Add the library to use TensorFlow.');
        return;
      }

      // Create async function to support await in user code
      const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
      const runUserCode = new AsyncFunction(jsCode);
      
      await runUserCode();
      
      setOutput(logs.join('\n') || 'Code executed successfully with no output.');
    } catch (err) {
      setError(err.message);
    } finally {
      // Restore console
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    if (selectedLang === 'python') {
      setPythonCode(initialCode);
    } else {
      setJsCode(initialJsCode || initialCode);
    }
    setOutput('');
    setError('');
  };

  const handleLanguageChange = (event, newLanguage) => {
    if (newLanguage !== null) {
      setSelectedLang(newLanguage);
      setOutput('');
      setError('');
    }
  };

  const showLoadingScreen = selectedLang === 'python' && !pyodideReady;

  return (
    <Paper elevation={2} sx={{ overflow: 'hidden', mb: 3 }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          bgcolor: 'primary.main',
          color: 'white',
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {/* Language Selector */}
          {supportedLanguages.length > 1 && (
            <ToggleButtonGroup
              value={selectedLang}
              exclusive
              onChange={handleLanguageChange}
              size="small"
              sx={{
                mr: 2,
                '& .MuiToggleButton-root': {
                  color: 'white',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  '&.Mui-selected': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                    }
                  }
                }
              }}
            >
              {supportedLanguages.map(lang => (
                <ToggleButton key={lang} value={lang}>
                  {lang === 'python' ? '🐍 Python' : '⚡ JavaScript'}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          )}
          
          {!showLoadingScreen && (
            <Typography variant="caption" sx={{ mr: 1 }}>
              {selectedLang === 'python' && pyodideReady && '✓ Python Ready'}
              {selectedLang === 'javascript' && '✓ JS Ready'}
            </Typography>
          )}
          <Tooltip title="Reset Code">
            <IconButton onClick={handleReset} sx={{ color: 'white' }} size="small">
              <RestartAlt />
            </IconButton>
          </Tooltip>
          <Tooltip title={copied ? 'Copied!' : 'Copy Code'}>
            <IconButton onClick={handleCopy} sx={{ color: 'white' }} size="small">
              {copied ? <Check /> : <ContentCopy />}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Loading Indicator */}
      {showLoadingScreen && (
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <CircularProgress size={40} sx={{ mb: 2 }} />
          <Typography variant="body2" color="text.secondary">
            {loadingMessage}
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
            This only happens once - Python will be ready for all topics
          </Typography>
        </Box>
      )}

      {/* Code Editor and Output - Side by Side */}
      {!showLoadingScreen && (
        <>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: height }}>
            {/* Left Side - Code Editor */}
            <Box sx={{ 
              flex: 1, 
              bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#ffffff',
              borderRight: { md: 1 },
              borderColor: 'divider'
            }}>
              <Editor
                height={height}
                language={selectedLang}
                value={currentCode}
                onChange={(value) => setCurrentCode(value || '')}
                theme={theme.palette.mode === 'dark' ? 'vs-dark' : 'light'}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 4,
                  wordWrap: 'on',
                }}
              />
            </Box>

            {/* Right Side - Output */}
            <Box sx={{ 
              flex: 1, 
              display: 'flex',
              flexDirection: 'column',
              bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50',
              minHeight: { xs: '200px', md: height }
            }}>
              <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
                <Typography variant="subtitle2" fontWeight={600}>
                  Output:
                </Typography>
              </Box>
              <Box sx={{ flex: 1, p: 2, overflow: 'auto' }}>
                {!output && !error && (
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    Click "Run Code" to see output here...
                  </Typography>
                )}
                {error && (
                  <Alert severity="error" sx={{ mb: 1, fontFamily: 'monospace', fontSize: '0.875rem' }}>
                    {error}
                  </Alert>
                )}
                {output && (
                  <Typography
                    component="pre"
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: '0.875rem',
                      whiteSpace: 'pre-wrap',
                      margin: 0,
                      color: 'text.primary'
                    }}
                  >
                    {output}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>

          {/* Run Button */}
          <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider', display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              startIcon={isRunning ? <CircularProgress size={20} color="inherit" /> : <PlayArrow />}
              onClick={runCode}
              disabled={isRunning}
              size="large"
              sx={{ minWidth: 150 }}
            >
              {isRunning ? 'Running...' : 'Run Code'}
            </Button>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default CodeSandbox;
