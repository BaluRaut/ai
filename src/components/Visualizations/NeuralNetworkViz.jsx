import { useState, useEffect, useRef } from 'react';
import { Box, Paper, Typography, Slider, Button, Chip, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { PlayArrow, Pause, Refresh } from '@mui/icons-material';

/**
 * Interactive Neural Network Visualization
 * Shows forward propagation with animated signals
 */
const NeuralNetworkViz = ({ 
  layers = [3, 4, 2],
  title = "Neural Network Architecture",
  description = "Watch signals flow through the network"
}) => {
  const canvasRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const [showWeights, setShowWeights] = useState(true);
  const [activationFunction, setActivationFunction] = useState('relu');
  const [signals, setSignals] = useState([]);
  const animationRef = useRef(null);

  // Network configuration
  const nodeRadius = 20;
  const layerSpacing = 150;
  const nodeSpacing = 60;
  const canvasWidth = 800;
  const canvasHeight = 400;

  // Calculate node positions
  const getNodePosition = (layer, node, totalNodes) => {
    const x = 100 + layer * layerSpacing;
    const startY = (canvasHeight - (totalNodes - 1) * nodeSpacing) / 2;
    const y = startY + node * nodeSpacing;
    return { x, y };
  };

  // Draw the network
  const drawNetwork = (ctx, animationProgress = 0) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw connections (edges)
    for (let l = 0; l < layers.length - 1; l++) {
      for (let i = 0; i < layers[l]; i++) {
        for (let j = 0; j < layers[l + 1]; j++) {
          const from = getNodePosition(l, i, layers[l]);
          const to = getNodePosition(l + 1, j, layers[l + 1]);

          // Draw edge
          ctx.strokeStyle = '#444';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(from.x + nodeRadius, from.y);
          ctx.lineTo(to.x - nodeRadius, to.y);
          ctx.stroke();

          // Draw weight labels
          if (showWeights) {
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2;
            const weight = (Math.random() * 2 - 1).toFixed(2);
            
            ctx.fillStyle = '#666';
            ctx.font = '10px monospace';
            ctx.fillText(weight, midX, midY);
          }
        }
      }
    }

    // Draw nodes
    layers.forEach((nodeCount, layerIdx) => {
      for (let nodeIdx = 0; nodeIdx < nodeCount; nodeIdx++) {
        const { x, y } = getNodePosition(layerIdx, nodeIdx, nodeCount);
        
        // Node circle
        ctx.fillStyle = layerIdx === 0 ? '#4ECDC4' : 
                        layerIdx === layers.length - 1 ? '#FF6B6B' : 
                        '#A78BFA';
        ctx.beginPath();
        ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
        ctx.fill();
        
        // Node border
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Activation value
        const activation = Math.sin(animationProgress * 0.1 + layerIdx + nodeIdx) * 0.5 + 0.5;
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(activation.toFixed(2), x, y);
      }
    });

    // Draw layer labels
    layers.forEach((nodeCount, layerIdx) => {
      const { x } = getNodePosition(layerIdx, 0, nodeCount);
      const labelY = 30;
      
      ctx.fillStyle = '#888';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      
      const layerName = layerIdx === 0 ? 'Input' : 
                        layerIdx === layers.length - 1 ? 'Output' : 
                        `Hidden ${layerIdx}`;
      ctx.fillText(layerName, x, labelY);
      ctx.font = '12px Arial';
      ctx.fillText(`(${nodeCount} neurons)`, x, labelY + 15);
    });

    // Draw animated signals
    signals.forEach(signal => {
      ctx.fillStyle = '#FFD93D';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#FFD93D';
      ctx.beginPath();
      ctx.arc(signal.x, signal.y, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  };

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let progress = 0;

    const animate = () => {
      progress += 1;
      
      // Update signals
      if (isAnimating && progress % 30 === 0) {
        // Create new signals from input layer
        const newSignals = Array.from({ length: layers[0] }, (_, i) => {
          const pos = getNodePosition(0, i, layers[0]);
          return {
            x: pos.x,
            y: pos.y,
            targetLayer: 1,
            targetNode: Math.floor(Math.random() * layers[1]),
            speed: animationSpeed / 10,
          };
        });
        setSignals(prev => [...prev, ...newSignals]);
      }

      // Move signals
      setSignals(prev => {
        return prev
          .map(signal => {
            if (signal.targetLayer >= layers.length) return null;
            
            const target = getNodePosition(
              signal.targetLayer,
              signal.targetNode,
              layers[signal.targetLayer]
            );

            const dx = target.x - signal.x;
            const dy = target.y - signal.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 5) {
              // Reached target, move to next layer
              if (signal.targetLayer < layers.length - 1) {
                return {
                  x: target.x,
                  y: target.y,
                  targetLayer: signal.targetLayer + 1,
                  targetNode: Math.floor(Math.random() * layers[signal.targetLayer + 1]),
                  speed: signal.speed,
                };
              }
              return null; // Reached output
            }

            return {
              ...signal,
              x: signal.x + (dx / dist) * signal.speed,
              y: signal.y + (dy / dist) * signal.speed,
            };
          })
          .filter(Boolean);
      });

      drawNetwork(ctx, progress);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAnimating, showWeights, animationSpeed, signals, layers]);

  const handleReset = () => {
    setSignals([]);
    setIsAnimating(false);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        {description}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </Box>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="contained"
              onClick={() => setIsAnimating(!isAnimating)}
              startIcon={isAnimating ? <Pause /> : <PlayArrow />}
            >
              {isAnimating ? 'Pause' : 'Start'}
            </Button>
            <Button
              variant="outlined"
              onClick={handleReset}
              startIcon={<Refresh />}
            >
              Reset
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <Chip
              label={showWeights ? 'Weights ON' : 'Weights OFF'}
              onClick={() => setShowWeights(!showWeights)}
              color={showWeights ? 'primary' : 'default'}
            />
            <ToggleButtonGroup
              value={activationFunction}
              exclusive
              onChange={(e, val) => val && setActivationFunction(val)}
              size="small"
            >
              <ToggleButton value="relu">ReLU</ToggleButton>
              <ToggleButton value="sigmoid">Sigmoid</ToggleButton>
              <ToggleButton value="tanh">Tanh</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            Animation Speed
          </Typography>
          <Slider
            value={animationSpeed}
            onChange={(e, val) => setAnimationSpeed(val)}
            min={10}
            max={100}
            valueLabelDisplay="auto"
            marks={[
              { value: 10, label: 'Slow' },
              { value: 50, label: 'Medium' },
              { value: 100, label: 'Fast' },
            ]}
          />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Chip icon={<Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#4ECDC4' }} />} label="Input Layer" />
            <Chip icon={<Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#A78BFA' }} />} label="Hidden Layer" />
            <Chip icon={<Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#FF6B6B' }} />} label="Output Layer" />
            <Chip icon={<Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#FFD93D' }} />} label="Signal Flow" />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 2, p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
          💡 How it works:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Click "Start" to see signals propagate through the network<br />
          • Each neuron applies an activation function ({activationFunction}) to its inputs<br />
          • Weights (shown on edges) determine signal strength between neurons<br />
          • The network transforms input → hidden representations → output predictions
        </Typography>
      </Box>
    </Paper>
  );
};

export default NeuralNetworkViz;
