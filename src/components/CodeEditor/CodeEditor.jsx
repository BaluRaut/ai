import { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Box, Button, Paper, Typography, CircularProgress, Alert } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useThemeMode } from '../../context/ThemeContext';

const CodeEditor = ({ initialCode = '', height = '400px', readOnly = false }) => {
  const { mode } = useThemeMode();
  const isDarkMode = mode === 'dark';
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState('');
  const [pyodideReady, setPyodideReady] = useState(false);
  const pyodideRef = useRef(null);

  // Initialize Pyodide
  useEffect(() => {
    const loadPyodide = async () => {
      try {
        if (!window.loadPyodide) {
          console.error('Pyodide not loaded');
          setError('Python runtime not available. Please refresh the page.');
          return;
        }

        const pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
        });

        // Redirect stdout and stderr
        pyodide.runPython(`
import sys
import io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
        `);

        pyodideRef.current = pyodide;
        setPyodideReady(true);
      } catch (err) {
        console.error('Error loading Pyodide:', err);
        setError('Failed to load Python runtime');
      }
    };

    loadPyodide();
  }, []);

  const runCode = async () => {
    if (!pyodideReady || !pyodideRef.current) {
      setError('Python runtime not ready. Please wait...');
      return;
    }

    setIsRunning(true);
    setError('');
    setOutput('');

    try {
      const pyodide = pyodideRef.current;

      // Clear previous output
      pyodide.runPython(`
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
      `);

      // Run user code
      await pyodide.runPythonAsync(code);

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
        setOutput('Code executed successfully (no output)');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while running the code');
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setOutput('');
    setError('');
  };

  const resetCode = () => {
    setCode(initialCode);
    clearOutput();
  };

  return (
    <Box sx={{ width: '100%', mb: 3 }}>
      <Paper elevation={3} sx={{ overflow: 'hidden' }}>
        {/* Editor Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 1.5,
            bgcolor: isDarkMode ? 'grey.900' : 'grey.100',
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            Python Code Editor
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {!readOnly && (
              <>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<DeleteOutlineIcon />}
                  onClick={resetCode}
                  disabled={isRunning}
                >
                  Reset
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  startIcon={
                    isRunning ? (
                      <CircularProgress size={16} color="inherit" />
                    ) : (
                      <PlayArrowIcon />
                    )
                  }
                  onClick={runCode}
                  disabled={isRunning || !pyodideReady}
                >
                  {isRunning ? 'Running...' : pyodideReady ? 'Run Code' : 'Loading...'}
                </Button>
              </>
            )}
          </Box>
        </Box>

        {/* Editor and Output Side by Side */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: height }}>
          {/* Monaco Editor */}
          <Box sx={{ flex: 1, height: { xs: '400px', md: height }, borderRight: { md: 1 }, borderColor: 'divider' }}>
            <Editor
              height="100%"
              defaultLanguage="python"
              value={code}
              onChange={(value) => setCode(value || '')}
              theme={isDarkMode ? 'vs-dark' : 'light'}
              options={{
                readOnly,
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

          {/* Output Display */}
          <Box 
            sx={{ 
              flex: 1, 
              minHeight: { xs: '200px', md: height },
              display: 'flex',
              flexDirection: 'column',
              bgcolor: isDarkMode ? 'grey.900' : 'grey.50',
            }}
          >
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Output
              </Typography>
              {(output || error) && (
                <Button size="small" onClick={clearOutput}>
                  Clear
                </Button>
              )}
            </Box>

            <Box sx={{ flex: 1, p: 2, overflow: 'auto' }}>
              {/* Loading State */}
              {!pyodideReady && !error && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CircularProgress size={20} />
                  <Typography variant="body2" color="text.secondary">
                    Loading Python runtime... (this may take a few seconds on first load)
                  </Typography>
                </Box>
              )}

              {/* Error Display */}
              {error && (
                <Alert severity="error" sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                  {error}
                </Alert>
              )}

              {/* Output Display */}
              {output && (
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    bgcolor: isDarkMode ? 'grey.800' : 'white',
                    fontFamily: 'monospace',
                    fontSize: '0.875rem',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    height: '100%',
                    overflow: 'auto',
                  }}
                >
                  {output}
                </Paper>
              )}

              {/* Empty State */}
              {!output && !error && pyodideReady && (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'text.secondary' }}>
                  <Typography variant="body2">
                    Click "Run Code" to see output here
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default CodeEditor;
