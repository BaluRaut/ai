import { useEffect, useRef, useState } from 'react';
import { Box, Paper, Typography, Slider, Button, TextField } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';

const RNNVisualization = () => {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState(0);
  const [inputText, setInputText] = useState('Hello AI');
  const animationRef = useRef(null);

  const words = inputText.split(' ').filter(w => w.trim());
  const maxSteps = words.length - 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = 800;
    const height = canvas.height = 300;

    ctx.clearRect(0, 0, width, height);

    const nodeRadius = 25;
    const nodeSpacing = 150;
    const startX = 100;
    const yInput = 80;
    const yHidden = 150;
    const yOutput = 220;

    // Draw title
    ctx.fillStyle = '#000';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Recurrent Neural Network - Sequence Processing', 20, 25);

    // Draw time steps
    for (let t = 0; t <= Math.min(words.length, 4); t++) {
      const x = startX + t * nodeSpacing;
      const isActive = t <= step;
      const opacity = isActive ? 1 : 0.3;

      // Input node
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.arc(x, yInput, nodeRadius, 0, Math.PI * 2);
      ctx.fillStyle = isActive ? '#e3f2fd' : '#f5f5f5';
      ctx.fill();
      ctx.strokeStyle = '#1976d2';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      if (t < words.length) {
        ctx.fillText(words[t], x, yInput + 5);
      }
      ctx.font = '10px Arial';
      ctx.fillText(`t=${t}`, x, yInput - nodeRadius - 10);

      // Hidden state node
      ctx.beginPath();
      ctx.arc(x, yHidden, nodeRadius, 0, Math.PI * 2);
      ctx.fillStyle = isActive ? '#fff3e0' : '#f5f5f5';
      ctx.fill();
      ctx.strokeStyle = '#ff9800';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.fillStyle = '#000';
      ctx.font = '11px Arial';
      ctx.fillText('h', x, yHidden + 5);

      // Output node
      ctx.beginPath();
      ctx.arc(x, yOutput, nodeRadius, 0, Math.PI * 2);
      ctx.fillStyle = isActive ? '#f3e5f5' : '#f5f5f5';
      ctx.fill();
      ctx.strokeStyle = '#9c27b0';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.fillStyle = '#000';
      ctx.font = '10px Arial';
      if (t < words.length && isActive) {
        ctx.fillText('out', x, yOutput + 5);
      }

      // Draw connections
      // Input to Hidden
      ctx.beginPath();
      ctx.moveTo(x, yInput + nodeRadius);
      ctx.lineTo(x, yHidden - nodeRadius);
      ctx.strokeStyle = isActive ? '#1976d2' : '#ddd';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Hidden to Output
      ctx.beginPath();
      ctx.moveTo(x, yHidden + nodeRadius);
      ctx.lineTo(x, yOutput - nodeRadius);
      ctx.strokeStyle = isActive ? '#ff9800' : '#ddd';
      ctx.stroke();

      // Recurrent connection (hidden to next hidden)
      if (t < Math.min(words.length, 4) - 1) {
        const nextX = startX + (t + 1) * nodeSpacing;
        const isNextActive = (t + 1) <= step;
        
        ctx.beginPath();
        ctx.moveTo(x + nodeRadius, yHidden);
        ctx.lineTo(nextX - nodeRadius, yHidden);
        ctx.strokeStyle = isNextActive ? '#ff9800' : '#ddd';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Arrow
        if (isNextActive) {
          const arrowSize = 8;
          ctx.beginPath();
          ctx.moveTo(nextX - nodeRadius, yHidden);
          ctx.lineTo(nextX - nodeRadius - arrowSize, yHidden - arrowSize/2);
          ctx.lineTo(nextX - nodeRadius - arrowSize, yHidden + arrowSize/2);
          ctx.closePath();
          ctx.fillStyle = '#ff9800';
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      ctx.textAlign = 'left';
    }

    // Draw legend
    ctx.fillStyle = '#666';
    ctx.font = '11px Arial';
    ctx.fillText('Input Word', 20, yInput);
    ctx.fillText('Hidden State (Memory)', 20, yHidden);
    ctx.fillText('Output', 20, yOutput);

  }, [step, words]);

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = setInterval(() => {
        setStep((prev) => (prev >= maxSteps ? 0 : prev + 1));
      }, 1500);
    } else if (animationRef.current) {
      clearInterval(animationRef.current);
    }

    return () => {
      if (animationRef.current) clearInterval(animationRef.current);
    };
  }, [isPlaying, maxSteps]);

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        🔄 Recurrent Neural Network (RNN)
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        See how RNN processes sequences one step at a time with memory
      </Typography>

      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          size="small"
          label="Input Sequence (space-separated words)"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            setStep(0);
            setIsPlaying(false);
          }}
          helperText="Try: 'Hello World' or 'I love AI'"
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <canvas
          ref={canvasRef}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            maxWidth: '100%',
          }}
        />
      </Box>

      <Box sx={{ px: 2, mb: 2 }}>
        <Typography variant="caption" gutterBottom>
          Time Step: {step}/{maxSteps}
        </Typography>
        <Slider
          value={step}
          onChange={(e, value) => setStep(value)}
          min={0}
          max={maxSteps}
          marks
          step={1}
          disabled={maxSteps === 0}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          variant="contained"
          startIcon={isPlaying ? <Pause /> : <PlayArrow />}
          onClick={() => setIsPlaying(!isPlaying)}
          disabled={maxSteps === 0}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Button variant="outlined" onClick={() => setStep(0)}>
          Reset
        </Button>
      </Box>

      <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
        <Typography variant="caption" display="block" gutterBottom fontWeight={600}>
          How RNN Works:
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Sequential Processing:</strong> Processes one word at a time (left to right)
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Hidden State (Memory):</strong> Orange nodes carry information from previous steps
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Recurrent Connection:</strong> Arrows show how memory flows forward
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Output:</strong> Can be generated at each step or at the end
        </Typography>
      </Box>
    </Paper>
  );
};

export default RNNVisualization;
