import { useEffect, useRef, useState } from 'react';
import { Box, Paper, Typography, Slider, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { PlayArrow, Pause, Refresh } from '@mui/icons-material';

const GradientDescentVisualization = () => {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState(0);
  const [learningRate, setLearningRate] = useState(0.1);
  const [algorithm, setAlgorithm] = useState('gd'); // 'gd', 'momentum', 'adam'
  const [position, setPosition] = useState({ x: -2, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null);

  const maxSteps = 50;

  // Loss function: f(x) = x^2 + 0.5 (simple parabola)
  const lossFunction = (x) => x * x + 0.5;
  
  // Gradient: f'(x) = 2x
  const gradient = (x) => 2 * x;

  const resetPosition = () => {
    setPosition({ x: -2, y: 0 });
    setVelocity({ x: 0, y: 0 });
    setStep(0);
    setIsPlaying(false);
  };

  const performStep = () => {
    setPosition(prev => {
      const grad = gradient(prev.x);
      let newX = prev.x;
      let newVelocity = { ...velocity };

      if (algorithm === 'gd') {
        // Standard Gradient Descent
        newX = prev.x - learningRate * grad;
      } else if (algorithm === 'momentum') {
        // Momentum
        const momentum = 0.9;
        newVelocity.x = momentum * velocity.x - learningRate * grad;
        newX = prev.x + newVelocity.x;
      } else if (algorithm === 'adam') {
        // Simplified Adam
        const beta = 0.9;
        newVelocity.x = beta * velocity.x + (1 - beta) * grad;
        newX = prev.x - learningRate * newVelocity.x;
      }

      setVelocity(newVelocity);
      setStep(s => s + 1);
      
      return { x: newX, y: 0 };
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = 800;
    const height = canvas.height = 400;

    ctx.clearRect(0, 0, width, height);

    // Setup coordinate system
    const centerX = width / 2;
    const centerY = height - 80;
    const scale = 80;

    // Draw title
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Gradient Descent - ${algorithm.toUpperCase()} (Step: ${step})`, 20, 25);
    ctx.font = '11px Arial';
    ctx.fillText(`Learning Rate: ${learningRate}`, 20, 42);

    // Draw axes
    ctx.strokeStyle = '#95a5a6';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // Draw loss function curve
    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let x = -3; x <= 3; x += 0.1) {
      const y = lossFunction(x);
      const canvasX = centerX + x * scale;
      const canvasY = centerY - y * scale;
      
      if (x === -3) {
        ctx.moveTo(canvasX, canvasY);
      } else {
        ctx.lineTo(canvasX, canvasY);
      }
    }
    ctx.stroke();

    // Draw curve label
    ctx.fillStyle = '#3498db';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('f(x) = x² + 0.5', centerX + 100, 60);

    // Draw minimum point
    ctx.fillStyle = '#2ecc71';
    ctx.beginPath();
    ctx.arc(centerX, centerY - 0.5 * scale, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2ecc71';
    ctx.font = '11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Global Minimum', centerX, centerY - 0.5 * scale - 15);
    ctx.fillText('x=0, loss=0.5', centerX, centerY - 0.5 * scale - 28);

    // Draw current position
    const currentX = centerX + position.x * scale;
    const currentY = centerY - lossFunction(position.x) * scale;
    
    ctx.fillStyle = '#e74c3c';
    ctx.beginPath();
    ctx.arc(currentX, currentY, 10, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw gradient arrow
    const grad = gradient(position.x);
    const arrowLength = 40;
    const arrowX = currentX - grad * arrowLength;
    const arrowY = currentY;
    
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(currentX, currentY);
    ctx.lineTo(arrowX, arrowY);
    ctx.stroke();
    
    // Arrowhead
    ctx.fillStyle = '#e74c3c';
    ctx.beginPath();
    ctx.moveTo(arrowX, arrowY);
    ctx.lineTo(arrowX + 10, arrowY - 5);
    ctx.lineTo(arrowX + 10, arrowY + 5);
    ctx.closePath();
    ctx.fill();

    // Position info
    ctx.fillStyle = '#e74c3c';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Current Position:`, currentX + 15, currentY - 15);
    ctx.font = '10px Arial';
    ctx.fillText(`x = ${position.x.toFixed(3)}`, currentX + 15, currentY);
    ctx.fillText(`loss = ${lossFunction(position.x).toFixed(3)}`, currentX + 15, currentY + 12);
    ctx.fillText(`gradient = ${grad.toFixed(3)}`, currentX + 15, currentY + 24);

    // Draw trajectory (path taken)
    if (step > 0) {
      ctx.strokeStyle = 'rgba(231, 76, 60, 0.3)';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      
      // This is simplified - in a real implementation you'd store all positions
      ctx.beginPath();
      ctx.moveTo(centerX - 2 * scale, centerY - lossFunction(-2) * scale);
      ctx.lineTo(currentX, currentY);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw grid
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 1;
    for (let i = -3; i <= 3; i++) {
      if (i !== 0) {
        ctx.beginPath();
        ctx.moveTo(centerX + i * scale, 0);
        ctx.lineTo(centerX + i * scale, height);
        ctx.stroke();
        
        // X labels
        ctx.fillStyle = '#7f8c8d';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(i.toString(), centerX + i * scale, centerY + 15);
      }
    }

  }, [position, step, algorithm, learningRate]);

  useEffect(() => {
    if (isPlaying && step < maxSteps && Math.abs(position.x) > 0.01) {
      animationRef.current = setTimeout(() => {
        performStep();
      }, 300);
    } else if (step >= maxSteps || Math.abs(position.x) <= 0.01) {
      setIsPlaying(false);
    }

    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, [isPlaying, step, position]);

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        📉 Gradient Descent Optimization
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Watch how gradient descent finds the minimum of a loss function
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
          Algorithm:
        </Typography>
        <ToggleButtonGroup
          value={algorithm}
          exclusive
          onChange={(e, value) => {
            if (value) {
              setAlgorithm(value);
              resetPosition();
            }
          }}
          size="small"
          fullWidth
        >
          <ToggleButton value="gd">Gradient Descent</ToggleButton>
          <ToggleButton value="momentum">Momentum</ToggleButton>
          <ToggleButton value="adam">Adam</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box sx={{ mb: 2, px: 2 }}>
        <Typography variant="caption" gutterBottom>
          Learning Rate: {learningRate}
        </Typography>
        <Slider
          value={learningRate}
          onChange={(e, value) => {
            setLearningRate(value);
            resetPosition();
          }}
          min={0.01}
          max={0.5}
          step={0.01}
          marks={[
            { value: 0.01, label: '0.01' },
            { value: 0.1, label: '0.1' },
            { value: 0.3, label: '0.3' },
            { value: 0.5, label: '0.5' },
          ]}
          disabled={isPlaying}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          startIcon={isPlaying ? <Pause /> : <PlayArrow />}
          onClick={() => setIsPlaying(!isPlaying)}
          disabled={step >= maxSteps || Math.abs(position.x) <= 0.01}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Button
          variant="outlined"
          onClick={performStep}
          disabled={isPlaying || step >= maxSteps}
        >
          Next Step
        </Button>
        <Button
          variant="outlined"
          startIcon={<Refresh />}
          onClick={resetPosition}
        >
          Reset
        </Button>
      </Box>

      <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
        <Typography variant="caption" display="block" gutterBottom fontWeight={600}>
          Optimization Algorithms:
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Gradient Descent:</strong> x(new) = x(old) - α × ∇f(x)
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Momentum:</strong> Adds velocity to overcome local minima (faster convergence)
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Adam:</strong> Adaptive learning rate with momentum (most popular)
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Red ball</span> = current position | <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Arrow</span> = gradient direction | <span style={{ color: '#2ecc71', fontWeight: 'bold' }}>Green dot</span> = optimal solution
        </Typography>
      </Box>
    </Paper>
  );
};

export default GradientDescentVisualization;
