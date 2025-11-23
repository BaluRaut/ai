import { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { 
  Box, Button, Paper, Typography, CircularProgress, Alert, 
  Tabs, Tab, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Chip, Divider, IconButton, Tooltip 
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BugReportIcon from '@mui/icons-material/BugReport';
import StopIcon from '@mui/icons-material/Stop';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
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
  
  // Debugging state
  const [debugMode, setDebugMode] = useState(false);
  const [debugOutput, setDebugOutput] = useState([]);
  const [variables, setVariables] = useState({});
  const [currentLine, setCurrentLine] = useState(null);
  const [outputTab, setOutputTab] = useState(0);

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
        const needsSklearn = initialCode.includes('from sklearn') || initialCode.includes('import sklearn');
        
        if (needsNumpy || needsPandas || needsMatplotlib || needsSklearn) {
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
            if (needsSklearn) {
              await pyodide.loadPackage('scikit-learn');
              setOutput((prev) => prev + '\n✓ Scikit-learn loaded');
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

  const debugCode = async () => {
    if (!pyodideReady || !pyodideRef.current) {
      setError('Python runtime not ready. Please wait...');
      return;
    }

    setIsRunning(true);
    setError('');
    setDebugOutput([]);
    setVariables({});
    setCurrentLine(null);
    setOutputTab(1); // Switch to Debug tab

    try {
      const pyodide = pyodideRef.current;
      
      // Setup debug environment
      await pyodide.runPythonAsync(`
import sys
import io

# Capture output
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()

debug_info = []

def trace_lines(frame, event, arg):
    if event == 'line':
        lineno = frame.f_lineno
        local_vars = {k: str(v)[:100] for k, v in frame.f_locals.items() 
                     if not k.startswith('_')}
        debug_info.append({
            'line': lineno,
            'vars': local_vars.copy()
        })
    return trace_lines
`);
      
      // Store user code in pyodide namespace
      pyodide.globals.set('user_code', code);
      
      // Execute with tracing
      const result = await pyodide.runPythonAsync(`
sys.settrace(trace_lines)
try:
    exec(user_code)
except Exception as e:
    debug_info.append({
        'error': str(e),
        'type': type(e).__name__
    })
finally:
    sys.settrace(None)

# Return results
{
    'debug_info': debug_info,
    'stdout': sys.stdout.getvalue(),
    'stderr': sys.stderr.getvalue()
}
`);
      
      const resultObj = result.toJs({ dict_converter: Object.fromEntries });
      
      if (resultObj.debug_info) {
        const debugSteps = [];
        const debugInfoArray = resultObj.debug_info.toJs();
        
        for (let step of debugInfoArray) {
          const stepObj = step.toJs({ dict_converter: Object.fromEntries });
          debugSteps.push(stepObj);
        }
        
        setDebugOutput(debugSteps);
        
        // Get final variables
        if (debugSteps.length > 0) {
          const lastStep = debugSteps[debugSteps.length - 1];
          if (lastStep.vars) {
            setVariables(lastStep.vars);
          }
        }
      }
      
      if (resultObj.stdout) {
        setOutput(resultObj.stdout);
      }
      
      if (resultObj.stderr) {
        setError(resultObj.stderr);
      }
      
    } catch (err) {
      console.error('Debug error:', err);
      setError('Debug failed: ' + (err.message || 'Unknown error'));
    } finally {
      setIsRunning(false);
    }
  };

  const runCode = async () => {
    if (!pyodideReady || !pyodideRef.current) {
      setError('Python runtime not ready. Please wait...');
      return;
    }

    setIsRunning(true);
    setError('');
    setOutput('');
    setPlotImages([]);
    setOutputTab(0); // Switch to Output tab

    try {
      const pyodide = pyodideRef.current;

      // Check if code requires packages and load them if needed
      const needsNumpy = code.includes('import numpy') || code.includes('from numpy');
      const needsPandas = code.includes('import pandas') || code.includes('from pandas');
      const needsMatplotlib = code.includes('import matplotlib') || code.includes('from matplotlib') || code.includes('plt.');
      const needsSklearn = code.includes('from sklearn') || code.includes('import sklearn');
      
      if (needsNumpy || needsPandas || needsMatplotlib || needsSklearn) {
        const packagesToLoad = [];
        
        if (needsNumpy) packagesToLoad.push('numpy');
        if (needsPandas) packagesToLoad.push('pandas');
        if (needsMatplotlib) packagesToLoad.push('matplotlib');
        if (needsSklearn) packagesToLoad.push('scikit-learn');
        
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

      // Capture matplotlib plots ONLY if matplotlib was used
      let capturedPlots = [];
      if (needsMatplotlib) {
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
    setDebugOutput([]);
    setVariables({});
    setCurrentLine(null);
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
                  variant="outlined"
                  color="secondary"
                  startIcon={<BugReportIcon />}
                  onClick={debugCode}
                  disabled={isRunning || !pyodideReady}
                >
                  Debug
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
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Tabs 
                value={outputTab} 
                onChange={(e, newValue) => setOutputTab(newValue)}
                sx={{ minHeight: 42 }}
              >
                <Tab label="Output" sx={{ minHeight: 42, fontSize: '0.875rem' }} />
                <Tab 
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      Debug
                      {debugOutput.length > 0 && (
                        <Chip 
                          label={debugOutput.length} 
                          size="small" 
                          color="secondary"
                          sx={{ height: 18, fontSize: '0.7rem' }}
                        />
                      )}
                    </Box>
                  } 
                  sx={{ minHeight: 42, fontSize: '0.875rem' }} 
                />
              </Tabs>
              {(output || error || plotImages.length > 0 || debugOutput.length > 0) && (
                <Button size="small" onClick={clearOutput} sx={{ mr: 1 }}>
                  Clear
                </Button>
              )}
            </Box>

            <Box sx={{ flex: 1, overflow: 'auto' }}>
              {/* Output Tab */}
              {outputTab === 0 && (
                <Box sx={{ p: 2 }}>
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
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 200, color: 'text.secondary' }}>
                      <Typography variant="body2">
                        Click "Run Code" to see output here
                      </Typography>
                    </Box>
                  )}
                </Box>
              )}

              {/* Debug Tab */}
              {outputTab === 1 && (
                <Box sx={{ p: 2 }}>
                  {debugOutput.length > 0 ? (
                    <>
                      <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                        Execution Trace ({debugOutput.length} steps)
                      </Typography>
                      
                      {/* Variables Table */}
                      {Object.keys(variables).length > 0 && (
                        <Paper variant="outlined" sx={{ mb: 2, overflow: 'hidden' }}>
                          <Box sx={{ p: 1.5, bgcolor: isDarkMode ? 'grey.800' : 'grey.100', borderBottom: 1, borderColor: 'divider' }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                              Final Variables
                            </Typography>
                          </Box>
                          <TableContainer sx={{ maxHeight: 200 }}>
                            <Table size="small" stickyHeader>
                              <TableHead>
                                <TableRow>
                                  <TableCell sx={{ fontWeight: 600 }}>Variable</TableCell>
                                  <TableCell sx={{ fontWeight: 600 }}>Value</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {Object.entries(variables).map(([key, value]) => (
                                  <TableRow key={key} hover>
                                    <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                                      {key}
                                    </TableCell>
                                    <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.875rem', color: 'primary.main' }}>
                                      {value}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Paper>
                      )}

                      {/* Step-by-step execution trace */}
                      <Paper variant="outlined" sx={{ overflow: 'hidden' }}>
                        <Box sx={{ p: 1.5, bgcolor: isDarkMode ? 'grey.800' : 'grey.100', borderBottom: 1, borderColor: 'divider' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            Line-by-Line Execution
                          </Typography>
                        </Box>
                        <Box sx={{ maxHeight: 400, overflow: 'auto' }}>
                          {debugOutput.map((step, idx) => (
                            <Box 
                              key={idx}
                              sx={{ 
                                p: 1.5,
                                borderBottom: idx < debugOutput.length - 1 ? 1 : 0,
                                borderColor: 'divider',
                                '&:hover': { bgcolor: isDarkMode ? 'grey.800' : 'grey.50' }
                              }}
                            >
                              {step.error ? (
                                <Alert severity="error" sx={{ fontSize: '0.875rem' }}>
                                  <strong>{step.type}:</strong> {step.error}
                                </Alert>
                              ) : (
                                <>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                    <Chip 
                                      label={`Line ${step.line}`} 
                                      size="small" 
                                      color="primary"
                                      sx={{ fontFamily: 'monospace' }}
                                    />
                                    <Typography variant="caption" color="text.secondary">
                                      Step {idx + 1}
                                    </Typography>
                                  </Box>
                                  {step.vars && Object.keys(step.vars).length > 0 && (
                                    <Box sx={{ 
                                      bgcolor: isDarkMode ? 'grey.900' : 'grey.100',
                                      p: 1,
                                      borderRadius: 1,
                                      fontFamily: 'monospace',
                                      fontSize: '0.75rem'
                                    }}>
                                      {Object.entries(step.vars).map(([k, v]) => (
                                        <Box key={k} sx={{ mb: 0.5 }}>
                                          <span style={{ color: isDarkMode ? '#90caf9' : '#1976d2' }}>{k}</span>
                                          {' = '}
                                          <span style={{ color: isDarkMode ? '#a5d6a7' : '#388e3c' }}>{v}</span>
                                        </Box>
                                      ))}
                                    </Box>
                                  )}
                                </>
                              )}
                            </Box>
                          ))}
                        </Box>
                      </Paper>
                    </>
                  ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 200, color: 'text.secondary', flexDirection: 'column', gap: 1 }}>
                      <BugReportIcon sx={{ fontSize: 48, opacity: 0.3 }} />
                      <Typography variant="body2">
                        Click "Debug" to trace code execution step-by-step
                      </Typography>
                      <Typography variant="caption">
                        See variables and line-by-line execution flow
                      </Typography>
                    </Box>
                  )}
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
