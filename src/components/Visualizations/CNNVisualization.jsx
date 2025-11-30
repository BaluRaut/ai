import { useEffect, useRef, useState } from 'react';
import { Box, Paper, Typography, Slider, Button } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';

const CNNVisualization = () => {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = 800;
    const height = canvas.height = 400;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw input image
    const drawInputImage = () => {
      ctx.fillStyle = '#e3f2fd';
      ctx.fillRect(20, 150, 100, 100);
      ctx.strokeStyle = '#1976d2';
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 150, 100, 100);
      
      // Draw grid
      for (let i = 0; i <= 4; i++) {
        ctx.beginPath();
        ctx.moveTo(20 + i * 25, 150);
        ctx.lineTo(20 + i * 25, 250);
        ctx.moveTo(20, 150 + i * 25);
        ctx.lineTo(120, 150 + i * 25);
        ctx.strokeStyle = '#90caf9';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.fillText('Input Image', 30, 270);
      ctx.fillText('28×28', 45, 285);
    };

    // Draw convolutional layer
    const drawConvLayer = (x, filters) => {
      const filterSize = 80;
      const spacing = 10;
      
      for (let i = 0; i < filters; i++) {
        const y = 80 + i * (filterSize + spacing);
        if (y + filterSize > height - 20) break;
        
        const opacity = step >= 1 ? 1 : 0.3;
        ctx.globalAlpha = opacity;
        
        ctx.fillStyle = step >= 1 ? '#fff3e0' : '#f5f5f5';
        ctx.fillRect(x, y, filterSize, filterSize);
        ctx.strokeStyle = '#ff9800';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, filterSize, filterSize);
        
        // Draw activation
        if (step >= 1) {
          for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
              const intensity = Math.random();
              ctx.fillStyle = `rgba(255, 152, 0, ${intensity})`;
              ctx.fillRect(x + 5 + c * 17.5, y + 5 + r * 17.5, 15, 15);
            }
          }
        }
      }
      
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.fillText('Conv Layer', x, 30);
      ctx.fillText(`${filters} filters`, x + 5, 45);
    };

    // Draw pooling layer
    const drawPoolingLayer = (x) => {
      const poolSize = 60;
      const opacity = step >= 2 ? 1 : 0.3;
      ctx.globalAlpha = opacity;
      
      ctx.fillStyle = step >= 2 ? '#e8f5e9' : '#f5f5f5';
      ctx.fillRect(x, 150, poolSize, poolSize);
      ctx.strokeStyle = '#4caf50';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, 150, poolSize, poolSize);
      
      if (step >= 2) {
        // Draw pooled regions
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            ctx.fillStyle = `rgba(76, 175, 80, ${0.3 + Math.random() * 0.4})`;
            ctx.fillRect(x + 5 + j * 25, 155 + i * 25, 20, 20);
          }
        }
      }
      
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.fillText('MaxPool', x, 230);
      ctx.fillText('2×2', x + 10, 245);
    };

    // Draw fully connected layer
    const drawFCLayer = (x) => {
      const opacity = step >= 3 ? 1 : 0.3;
      ctx.globalAlpha = opacity;
      
      const nodes = 10;
      const nodeRadius = 8;
      const startY = 50;
      const spacing = 30;
      
      for (let i = 0; i < nodes; i++) {
        ctx.beginPath();
        ctx.arc(x, startY + i * spacing, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = step >= 3 ? '#f3e5f5' : '#f5f5f5';
        ctx.fill();
        ctx.strokeStyle = '#9c27b0';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        if (step >= 3 && i < 3) {
          ctx.fillStyle = `rgba(156, 39, 176, ${0.5 + Math.random() * 0.5})`;
          ctx.fill();
        }
      }
      
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.fillText('FC Layer', x - 20, 365);
      ctx.fillText('10 classes', x - 25, 380);
    };

    // Draw arrows
    const drawArrow = (x1, y1, x2, y2, opacity = 1) => {
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = '#666';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Arrowhead
      const angle = Math.atan2(y2 - y1, x2 - x1);
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - 10 * Math.cos(angle - Math.PI / 6), y2 - 10 * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(x2 - 10 * Math.cos(angle + Math.PI / 6), y2 - 10 * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fillStyle = '#666';
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    // Draw all layers
    drawInputImage();
    drawConvLayer(200, 3);
    drawPoolingLayer(350);
    drawConvLayer(480, 2);
    drawPoolingLayer(620);
    drawFCLayer(730);

    // Draw arrows
    drawArrow(120, 200, 200, 150, step >= 1 ? 1 : 0.3);
    drawArrow(280, 180, 350, 180, step >= 2 ? 1 : 0.3);
    drawArrow(410, 180, 480, 150, step >= 2 ? 1 : 0.3);
    drawArrow(560, 180, 620, 180, step >= 3 ? 1 : 0.3);
    drawArrow(680, 180, 722, 200, step >= 3 ? 1 : 0.3);

  }, [step]);

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = setInterval(() => {
        setStep((prev) => (prev >= 3 ? 0 : prev + 1));
      }, 2000);
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
        📊 Convolutional Neural Network (CNN) Architecture
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Watch how a CNN processes an image through convolutional and pooling layers
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

      <Box sx={{ px: 2, mb: 2 }}>
        <Typography variant="caption" gutterBottom>Animation Step: {step}/3</Typography>
        <Slider
          value={step}
          onChange={(e, value) => setStep(value)}
          min={0}
          max={3}
          marks={[
            { value: 0, label: 'Input' },
            { value: 1, label: 'Conv1' },
            { value: 2, label: 'Pool1' },
            { value: 3, label: 'Output' },
          ]}
          step={1}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          variant="contained"
          startIcon={isPlaying ? <Pause /> : <PlayArrow />}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? 'Pause' : 'Play'} Animation
        </Button>
        <Button variant="outlined" onClick={() => setStep(0)}>
          Reset
        </Button>
      </Box>

      <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
        <Typography variant="caption" display="block" gutterBottom fontWeight={600}>
          Architecture Flow:
        </Typography>
        <Typography variant="caption" display="block">
          1. <strong>Input Layer:</strong> 28×28 pixel image
        </Typography>
        <Typography variant="caption" display="block">
          2. <strong>Conv Layer 1:</strong> Apply filters to detect features (edges, textures)
        </Typography>
        <Typography variant="caption" display="block">
          3. <strong>MaxPool Layer:</strong> Reduce dimensions while keeping important features
        </Typography>
        <Typography variant="caption" display="block">
          4. <strong>Conv Layer 2:</strong> Detect higher-level patterns
        </Typography>
        <Typography variant="caption" display="block">
          5. <strong>Fully Connected:</strong> Classification into 10 categories
        </Typography>
      </Box>
    </Paper>
  );
};

export default CNNVisualization;
