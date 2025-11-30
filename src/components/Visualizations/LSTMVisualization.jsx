import { useEffect, useRef, useState } from 'react';
import { Box, Paper, Typography, Slider, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';

const LSTMVisualization = () => {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState(0);
  const [activeGate, setActiveGate] = useState('all'); // 'all', 'forget', 'input', 'output'
  const animationRef = useRef(null);

  const maxSteps = 5;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = 900;
    const height = canvas.height = 400;

    ctx.clearRect(0, 0, width, height);

    // Colors
    const forgetColor = '#e74c3c';
    const inputColor = '#3498db';
    const outputColor = '#2ecc71';
    const cellColor = '#f39c12';
    const textColor = '#2c3e50';

    // Gate activation values (simulate over steps)
    const forgetGate = 0.3 + (step * 0.1);
    const inputGate = 0.6 - (step * 0.05);
    const outputGate = 0.7 + (step * 0.04);
    const cellState = 0.5 + (step * 0.08);

    // Draw title
    ctx.fillStyle = textColor;
    ctx.font = 'bold 16px Arial';
    ctx.fillText('LSTM Cell - Long Short-Term Memory', 20, 25);
    ctx.font = '12px Arial';
    ctx.fillText(`Time Step: ${step}`, 20, 45);

    // Cell dimensions
    const cellX = 350;
    const cellY = 120;
    const cellWidth = 200;
    const cellHeight = 160;

    // Draw main LSTM cell
    ctx.strokeStyle = '#34495e';
    ctx.lineWidth = 3;
    ctx.strokeRect(cellX, cellY, cellWidth, cellHeight);
    ctx.fillStyle = 'rgba(52, 73, 94, 0.05)';
    ctx.fillRect(cellX, cellY, cellWidth, cellHeight);

    // Draw cell state line (horizontal through middle)
    const cellStateY = cellY + cellHeight / 2;
    ctx.strokeStyle = cellColor;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(50, cellStateY);
    ctx.lineTo(cellX, cellStateY);
    ctx.stroke();

    // Cell state flows through
    ctx.beginPath();
    ctx.moveTo(cellX + cellWidth, cellStateY);
    ctx.lineTo(width - 50, cellStateY);
    ctx.stroke();

    // Arrow on cell state
    const drawArrow = (x, y, size = 8) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - size, y - size/2);
      ctx.lineTo(x - size, y + size/2);
      ctx.closePath();
      ctx.fill();
    };

    // Draw gates
    const gateSize = 40;
    const gateY1 = cellY + 30;
    const gateY2 = cellY + 90;
    const gateY3 = cellY + 130;

    // Forget Gate (×)
    if (activeGate === 'all' || activeGate === 'forget') {
      const forgetX = cellX + 30;
      ctx.fillStyle = forgetColor;
      ctx.globalAlpha = 0.2 + forgetGate * 0.6;
      ctx.beginPath();
      ctx.arc(forgetX + gateSize/2, cellStateY, gateSize/2, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.strokeStyle = forgetColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      // × symbol
      ctx.strokeStyle = forgetColor;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(forgetX + 10, cellStateY - 10);
      ctx.lineTo(forgetX + 30, cellStateY + 10);
      ctx.moveTo(forgetX + 30, cellStateY - 10);
      ctx.lineTo(forgetX + 10, cellStateY + 10);
      ctx.stroke();

      // Label
      ctx.fillStyle = textColor;
      ctx.font = '11px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Forget', forgetX + gateSize/2, gateY1 - 10);
      ctx.fillText(`σ=${forgetGate.toFixed(2)}`, forgetX + gateSize/2, cellStateY + 35);
    }

    // Input Gate (+)
    if (activeGate === 'all' || activeGate === 'input') {
      const inputX = cellX + 90;
      ctx.fillStyle = inputColor;
      ctx.globalAlpha = 0.2 + inputGate * 0.6;
      ctx.beginPath();
      ctx.arc(inputX + gateSize/2, cellStateY, gateSize/2, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.strokeStyle = inputColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      // + symbol
      ctx.strokeStyle = inputColor;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(inputX + 20, cellStateY - 10);
      ctx.lineTo(inputX + 20, cellStateY + 10);
      ctx.moveTo(inputX + 10, cellStateY);
      ctx.lineTo(inputX + 30, cellStateY);
      ctx.stroke();

      // Label
      ctx.fillStyle = textColor;
      ctx.font = '11px Arial';
      ctx.fillText('Input', inputX + gateSize/2, gateY1 - 10);
      ctx.fillText(`σ=${inputGate.toFixed(2)}`, inputX + gateSize/2, cellStateY + 35);
    }

    // Output Gate
    if (activeGate === 'all' || activeGate === 'output') {
      const outputX = cellX + cellWidth - 70;
      ctx.fillStyle = outputColor;
      ctx.globalAlpha = 0.2 + outputGate * 0.6;
      ctx.beginPath();
      ctx.arc(outputX + gateSize/2, cellStateY, gateSize/2, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.strokeStyle = outputColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      // tanh symbol
      ctx.fillStyle = outputColor;
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('tanh', outputX + gateSize/2, cellStateY + 5);

      // Label
      ctx.fillStyle = textColor;
      ctx.font = '11px Arial';
      ctx.fillText('Output', outputX + gateSize/2, gateY1 - 10);
      ctx.fillText(`σ=${outputGate.toFixed(2)}`, outputX + gateSize/2, cellStateY + 35);
    }

    // Input arrows
    ctx.fillStyle = inputColor;
    ctx.strokeStyle = inputColor;
    ctx.lineWidth = 2;
    
    // h(t-1) input
    ctx.beginPath();
    ctx.moveTo(50, 80);
    ctx.lineTo(cellX - 20, 80);
    ctx.stroke();
    drawArrow(cellX - 20, 80);
    ctx.fillStyle = textColor;
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('h(t-1)', 55, 75);

    // x(t) input
    ctx.strokeStyle = inputColor;
    ctx.beginPath();
    ctx.moveTo(50, cellY + cellHeight + 40);
    ctx.lineTo(cellX + cellWidth/2, cellY + cellHeight + 40);
    ctx.lineTo(cellX + cellWidth/2, cellY + cellHeight);
    ctx.stroke();
    ctx.fillStyle = inputColor;
    drawArrow(cellX + cellWidth/2, cellY + cellHeight);
    ctx.fillStyle = textColor;
    ctx.fillText('x(t)', 55, cellY + cellHeight + 35);

    // Output arrows
    ctx.strokeStyle = outputColor;
    ctx.lineWidth = 2;
    
    // h(t) output
    ctx.beginPath();
    ctx.moveTo(cellX + cellWidth, 80);
    ctx.lineTo(width - 50, 80);
    ctx.stroke();
    ctx.fillStyle = outputColor;
    drawArrow(width - 50, 80);
    ctx.fillStyle = textColor;
    ctx.textAlign = 'right';
    ctx.fillText('h(t)', width - 55, 75);

    // Cell state label
    ctx.fillStyle = cellColor;
    ctx.textAlign = 'left';
    ctx.fillText('C(t-1)', 55, cellStateY - 10);
    ctx.textAlign = 'right';
    ctx.fillText('C(t)', width - 55, cellStateY - 10);

    // Cell state value
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.font = 'bold 12px Arial';
    ctx.fillText(`Cell State: ${cellState.toFixed(2)}`, cellX + cellWidth/2, cellY - 10);

    ctx.textAlign = 'left';

  }, [step, activeGate]);

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
  }, [isPlaying]);

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        🧠 LSTM Cell Visualization
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        See how LSTM cells use gates to control information flow and maintain long-term memory
      </Typography>

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

      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" gutterBottom display="block">
          Gate Filter:
        </Typography>
        <ToggleButtonGroup
          value={activeGate}
          exclusive
          onChange={(e, value) => value && setActiveGate(value)}
          size="small"
          fullWidth
        >
          <ToggleButton value="all">All Gates</ToggleButton>
          <ToggleButton value="forget">Forget Gate</ToggleButton>
          <ToggleButton value="input">Input Gate</ToggleButton>
          <ToggleButton value="output">Output Gate</ToggleButton>
        </ToggleButtonGroup>
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
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          variant="contained"
          startIcon={isPlaying ? <Pause /> : <PlayArrow />}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Button variant="outlined" onClick={() => setStep(0)}>
          Reset
        </Button>
      </Box>

      <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
        <Typography variant="caption" display="block" gutterBottom fontWeight={600}>
          LSTM Gate Functions:
        </Typography>
        <Typography variant="caption" display="block" color="error.main">
          • <strong>Forget Gate (×):</strong> Decides what information to discard from cell state
        </Typography>
        <Typography variant="caption" display="block" color="primary.main">
          • <strong>Input Gate (+):</strong> Decides what new information to add to cell state
        </Typography>
        <Typography variant="caption" display="block" color="success.main">
          • <strong>Output Gate (tanh):</strong> Decides what to output based on cell state
        </Typography>
        <Typography variant="caption" display="block" color="warning.main">
          • <strong>Cell State (C):</strong> Long-term memory that flows through the network
        </Typography>
      </Box>
    </Paper>
  );
};

export default LSTMVisualization;
