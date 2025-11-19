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
  const [plotImages, setPlotImages] = useState([]);
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

        // Auto-load common data science packages if code uses them
        const needsNumpy = initialCode.includes('import numpy') || initialCode.includes('from numpy');
        const needsPandas = initialCode.includes('import pandas') || initialCode.includes('from pandas');
        const needsMatplotlib = initialCode.includes('import matplotlib') || initialCode.includes('from matplotlib');
        
        if (needsNumpy || needsPandas || needsMatplotlib) {
          setOutput('Loading required packages...');
          
          try {
            if (needsNumpy) {
              await pyodide.loadPackage('numpy');
              setOutput((prev) => prev + '\n✓ NumPy loaded');
            }
            if (needsPandas) {
              await pyodide.loadPackage('pandas');
              setOutput((prev) => prev + '\n✓ Pandas loaded');
            }
            if (needsMatplotlib) {
              await pyodide.loadPackage('matplotlib');
              setOutput((prev) => prev + '\n✓ Matplotlib loaded');
            }
            setOutput((prev) => prev + '\n\nReady to run! Click "Run Code" to execute.\n');
          } catch (pkgErr) {
            console.error('Error loading packages:', pkgErr);
            setError('Failed to load required packages: ' + pkgErr.message);
          }
        }

        pyodideRef.current = pyodide;
        setPyodideReady(true);
      } catch (err) {
        console.error('Error loading Pyodide:', err);
        setError('Failed to load Python runtime');
      }
    };

    loadPyodide();
  }, [initialCode]);

  const runCode = async () => {
    if (!pyodideReady || !pyodideRef.current) {
      setError('Python runtime not ready. Please wait...');
      return;
    }

    setIsRunning(true);
    setError('');
    setOutput('');
    setPlotImages([]);

    try {
      const pyodide = pyodideRef.current;

      // Check if code requires packages and load them if needed
      const needsNumpy = code.includes('import numpy') || code.includes('from numpy');
      const needsPandas = code.includes('import pandas') || code.includes('from pandas');
      const needsMatplotlib = code.includes('import matplotlib') || code.includes('from matplotlib');
      
      if (needsNumpy || needsPandas || needsMatplotlib) {
        const packagesToLoad = [];
        
        if (needsNumpy) packagesToLoad.push('numpy');
        if (needsPandas) packagesToLoad.push('pandas');
        if (needsMatplotlib) packagesToLoad.push('matplotlib');
        
        setOutput('Loading required packages...\n');
        
        for (const pkg of packagesToLoad) {
          try {
            await pyodide.loadPackage(pkg);
            setOutput((prev) => prev + `✓ ${pkg.charAt(0).toUpperCase() + pkg.slice(1)} loaded\n`);
          } catch (pkgErr) {
            // Package might already be loaded, continue
            console.log(`Package ${pkg} already loaded or error:`, pkgErr);
          }
        }
        
        setOutput((prev) => prev + '\nRunning code...\n\n');
      }

      // Clear previous output and setup matplotlib if needed
      pyodide.runPython(`
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()

# Setup matplotlib to use inline backend and suppress warnings
try:
    import matplotlib
    import matplotlib.pyplot as plt
    import warnings
    matplotlib.use('Agg')  # Use non-interactive backend
    plt.close('all')  # Close any existing figures
    # Suppress the UserWarning about Agg backend
    warnings.filterwarnings('ignore', message='.*Matplotlib is currently using agg.*')
except ImportError:
    pass  # matplotlib not loaded, that's fine
      `);

      // Run user code (remove plt.show() calls as they're not needed)
      const codeToRun = code.replace(/plt\.show\(\)/g, '# plt.show() - removed for inline display');
      await pyodide.runPythonAsync(codeToRun);

      // Capture matplotlib plots if any
      let capturedPlots = [];
      try {
        const plotData = pyodide.runPython(`
import sys
plot_result = []
try:
    import matplotlib.pyplot as plt
    import io
    import base64
    
    # Get all figure numbers
    figs = plt.get_fignums()
    if figs:
        for fig_num in figs:
            fig = plt.figure(fig_num)
            buf = io.BytesIO()
            fig.savefig(buf, format='png', dpi=100, bbox_inches='tight')
            buf.seek(0)
            img_base64 = base64.b64encode(buf.read()).decode('utf-8')
            plot_result.append(img_base64)
            plt.close(fig)
except Exception as e:
    # Print error to stderr for debugging
    print(f"Plot capture error: {e}", file=sys.stderr)
plot_result
        `);
        
        if (plotData && plotData.length > 0) {
          capturedPlots = Array.from(plotData.toJs());
          console.log(`Captured ${capturedPlots.length} plot(s)`);
        }
      } catch (plotErr) {
        console.error('Error capturing plots:', plotErr);
      }

      // Get output
      const stdout = pyodide.runPython('sys.stdout.getvalue()');
      const stderr = pyodide.runPython('sys.stderr.getvalue()');

      if (stderr) {
        setError(stderr);
      }
      if (stdout) {
        setOutput((prev) => {
          // If we already have loading messages, append to them
          if (prev && prev.includes('Loading required packages')) {
            return prev + stdout;
          }
          return stdout;
        });
      }
      
      // Set plot images
      if (capturedPlots && capturedPlots.length > 0) {
        setPlotImages(capturedPlots);
      }
      
      if (!stdout && !stderr && capturedPlots.length === 0) {
        setOutput((prev) => {
          if (prev && prev.includes('Loading required packages')) {
            return prev + '\nCode executed successfully (no output)';
          }
          return 'Code executed successfully (no output)';
        });
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
    setPlotImages([]);
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
          <Box sx={{ 
            flex: plotImages.length > 0 ? '0 0 50%' : 1, 
            height: { xs: '400px', md: height }, 
            borderRight: { md: 1 }, 
            borderColor: 'divider' 
          }}>
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
              flex: plotImages.length > 0 ? '0 0 50%' : 1,
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
              {(output || error || plotImages.length > 0) && (
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
                    overflow: 'auto',
                    mb: plotImages.length > 0 ? 2 : 0,
                  }}
                >
                  {output}
                </Paper>
              )}

              {/* Plot Images Display */}
              {plotImages.length > 0 && (
                <Box sx={{ mt: output ? 2 : 0 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                    Generated Plots:
                  </Typography>
                  {plotImages.map((imgData, idx) => (
                    <Box 
                      key={idx} 
                      sx={{ 
                        mb: 2,
                        p: 1,
                        bgcolor: 'white',
                        borderRadius: 1,
                        boxShadow: 1,
                      }}
                    >
                      <img 
                        src={`data:image/png;base64,${imgData}`} 
                        alt={`Plot ${idx + 1}`}
                        style={{ 
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              )}

              {/* Empty State */}
              {!output && !error && pyodideReady && plotImages.length === 0 && (
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
