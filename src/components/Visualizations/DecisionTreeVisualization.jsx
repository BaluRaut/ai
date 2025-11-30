import { useEffect, useRef, useState } from 'react';
import { Box, Paper, Typography, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { AccountTree, PlayArrow } from '@mui/icons-material';

const DecisionTreeVisualization = () => {
  const canvasRef = useRef(null);
  const [currentDepth, setCurrentDepth] = useState(0);
  const [metric, setMetric] = useState('gini');

  const maxDepth = 3;

  // Sample tree structure
  const tree = {
    feature: 'Age',
    threshold: 30,
    gini: 0.5,
    entropy: 1.0,
    samples: 100,
    left: {
      feature: 'Income',
      threshold: 50000,
      gini: 0.32,
      entropy: 0.81,
      samples: 60,
      left: {
        class: 'No',
        gini: 0.0,
        entropy: 0.0,
        samples: 40,
        color: '#e74c3c'
      },
      right: {
        class: 'Yes',
        gini: 0.18,
        entropy: 0.5,
        samples: 20,
        color: '#2ecc71'
      }
    },
    right: {
      feature: 'Education',
      threshold: 'College',
      gini: 0.28,
      entropy: 0.72,
      samples: 40,
      left: {
        class: 'No',
        gini: 0.12,
        entropy: 0.3,
        samples: 15,
        color: '#e74c3c'
      },
      right: {
        class: 'Yes',
        gini: 0.0,
        entropy: 0.0,
        samples: 25,
        color: '#2ecc71'
      }
    }
  };

  const drawNode = (ctx, node, x, y, level, maxLevel) => {
    if (!node || level > currentDepth) return;

    const nodeWidth = 140;
    const nodeHeight = 70;
    const isLeaf = node.class !== undefined;

    // Draw node background
    if (isLeaf) {
      ctx.fillStyle = node.color;
      ctx.globalAlpha = 0.3;
    } else {
      ctx.fillStyle = '#3498db';
      ctx.globalAlpha = 0.2;
    }
    
    ctx.fillRect(x - nodeWidth/2, y, nodeWidth, nodeHeight);
    ctx.globalAlpha = 1;

    // Draw node border
    ctx.strokeStyle = isLeaf ? node.color : '#3498db';
    ctx.lineWidth = 2;
    ctx.strokeRect(x - nodeWidth/2, y, nodeWidth, nodeHeight);

    // Draw node content
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'center';

    if (isLeaf) {
      ctx.fillText(`Class: ${node.class}`, x, y + 25);
      ctx.font = '11px Arial';
      ctx.fillText(`Samples: ${node.samples}`, x, y + 42);
      const metricValue = metric === 'gini' ? node.gini : node.entropy;
      ctx.fillText(`${metric}: ${metricValue.toFixed(2)}`, x, y + 57);
    } else {
      ctx.fillText(node.feature, x, y + 18);
      ctx.font = '11px Arial';
      ctx.fillText(`≤ ${node.threshold}`, x, y + 33);
      ctx.fillText(`Samples: ${node.samples}`, x, y + 48);
      const metricValue = metric === 'gini' ? node.gini : node.entropy;
      ctx.fillText(`${metric}: ${metricValue.toFixed(2)}`, x, y + 63);
    }

    // Draw children connections
    if (!isLeaf && level < currentDepth) {
      const childY = y + nodeHeight + 60;
      const xOffset = 180 / Math.pow(2, level);

      // Left child
      if (node.left) {
        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y + nodeHeight);
        ctx.lineTo(x - xOffset, childY);
        ctx.stroke();

        // Label
        ctx.fillStyle = '#e74c3c';
        ctx.font = 'bold 10px Arial';
        ctx.fillText('Yes', x - xOffset/2 - 10, y + nodeHeight + 30);

        drawNode(ctx, node.left, x - xOffset, childY, level + 1, maxLevel);
      }

      // Right child
      if (node.right) {
        ctx.strokeStyle = '#2ecc71';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y + nodeHeight);
        ctx.lineTo(x + xOffset, childY);
        ctx.stroke();

        // Label
        ctx.fillStyle = '#2ecc71';
        ctx.font = 'bold 10px Arial';
        ctx.fillText('No', x + xOffset/2 + 10, y + nodeHeight + 30);

        drawNode(ctx, node.right, x + xOffset, childY, level + 1, maxLevel);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = 800;
    const height = canvas.height = 450;

    ctx.clearRect(0, 0, width, height);

    // Draw title
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Decision Tree (Depth: ${currentDepth}/${maxDepth})`, 20, 25);

    // Draw tree starting from top center
    drawNode(ctx, tree, width / 2, 50, 0, maxDepth);

  }, [currentDepth, metric]);

  const handleGrow = () => {
    if (currentDepth < maxDepth) {
      setCurrentDepth(prev => prev + 1);
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        🌲 Decision Tree Visualization
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        See how a decision tree splits data based on features to make predictions
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
          Splitting Metric:
        </Typography>
        <ToggleButtonGroup
          value={metric}
          exclusive
          onChange={(e, value) => value && setMetric(value)}
          size="small"
          fullWidth
        >
          <ToggleButton value="gini">Gini Impurity</ToggleButton>
          <ToggleButton value="entropy">Entropy</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          variant="contained"
          startIcon={<PlayArrow />}
          onClick={handleGrow}
          disabled={currentDepth >= maxDepth}
        >
          Grow Tree
        </Button>
        <Button
          variant="outlined"
          onClick={() => setCurrentDepth(0)}
        >
          Reset
        </Button>
      </Box>

      <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
        <Typography variant="caption" display="block" gutterBottom fontWeight={600}>
          How Decision Trees Work:
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Splitting:</strong> At each node, find the best feature to split on
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Gini Impurity:</strong> Measures how often a random element would be incorrectly labeled (0 = pure, 0.5 = maximum impurity)
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Entropy:</strong> Measures disorder in data (0 = pure, 1 = maximum disorder)
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Leaf Nodes:</strong> Final predictions (green = Yes, red = No)
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Yes branch</span> follows the condition, <span style={{ color: '#2ecc71', fontWeight: 'bold' }}>No branch</span> doesn't
        </Typography>
      </Box>
    </Paper>
  );
};

export default DecisionTreeVisualization;
