import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Paper, Button, Chip } from '@mui/material';

const CorrelationHeatmapViz = () => {
  const canvasRef = useRef(null);
  const [data, setData] = useState(null);
  const [correlations, setCorrelations] = useState(null);

  const generateData = () => {
    const n = 100; // samples
    const numFeatures = 5;
    
    // Generate correlated data
    const newData = [];
    for (let i = 0; i < n; i++) {
      const x1 = Math.random() * 10;
      const x2 = x1 * 0.8 + Math.random() * 2; // Strongly correlated with x1
      const x3 = -x1 * 0.6 + Math.random() * 3; // Negatively correlated with x1
      const x4 = Math.random() * 10; // Independent
      const x5 = x2 * 0.5 + Math.random() * 2; // Moderately correlated with x2
      
      newData.push([x1, x2, x3, x4, x5]);
    }
    
    setData(newData);
    
    // Calculate correlation matrix
    const corr = [];
    for (let i = 0; i < numFeatures; i++) {
      corr[i] = [];
      for (let j = 0; j < numFeatures; j++) {
        if (i === j) {
          corr[i][j] = 1.0;
        } else {
          const col1 = newData.map(row => row[i]);
          const col2 = newData.map(row => row[j]);
          corr[i][j] = pearsonCorrelation(col1, col2);
        }
      }
    }
    
    setCorrelations(corr);
  };

  const pearsonCorrelation = (x, y) => {
    const n = x.length;
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
    const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);
    const sumY2 = y.reduce((sum, yi) => sum + yi * yi, 0);
    
    const numerator = n * sumXY - sumX * sumY;
    const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
    
    return numerator / denominator;
  };

  const getColor = (value) => {
    // Red for negative, white for zero, blue for positive
    if (value < 0) {
      const intensity = Math.abs(value);
      const r = 255;
      const g = Math.floor(255 * (1 - intensity));
      const b = Math.floor(255 * (1 - intensity));
      return `rgb(${r}, ${g}, ${b})`;
    } else {
      const intensity = value;
      const r = Math.floor(255 * (1 - intensity));
      const g = Math.floor(255 * (1 - intensity));
      const b = 255;
      return `rgb(${r}, ${g}, ${b})`;
    }
  };

  const drawHeatmap = (ctx, width, height) => {
    if (!correlations) return;
    
    ctx.clearRect(0, 0, width, height);
    
    const n = correlations.length;
    const cellSize = Math.min(width, height) / (n + 2);
    const offsetX = cellSize * 1.5;
    const offsetY = cellSize * 1.5;
    
    // Feature labels
    const labels = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'];
    
    // Draw column labels
    ctx.fillStyle = '#000';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    for (let i = 0; i < n; i++) {
      ctx.save();
      ctx.translate(offsetX + i * cellSize + cellSize / 2, offsetY - 10);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText(labels[i], 0, 0);
      ctx.restore();
    }
    
    // Draw row labels
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < n; i++) {
      ctx.fillText(labels[i], offsetX - 10, offsetY + i * cellSize + cellSize / 2);
    }
    
    // Draw cells
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const value = correlations[i][j];
        const x = offsetX + j * cellSize;
        const y = offsetY + i * cellSize;
        
        // Cell background
        ctx.fillStyle = getColor(value);
        ctx.fillRect(x, y, cellSize, cellSize);
        
        // Cell border
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, cellSize, cellSize);
        
        // Value text
        ctx.fillStyle = Math.abs(value) > 0.5 ? '#fff' : '#000';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(value.toFixed(2), x + cellSize / 2, y + cellSize / 2);
      }
    }
    
    // Draw color scale legend
    const legendX = offsetX + n * cellSize + 30;
    const legendY = offsetY;
    const legendWidth = 30;
    const legendHeight = n * cellSize;
    
    // Gradient
    const gradient = ctx.createLinearGradient(legendX, legendY, legendX, legendY + legendHeight);
    gradient.addColorStop(0, getColor(1));
    gradient.addColorStop(0.5, getColor(0));
    gradient.addColorStop(1, getColor(-1));
    
    ctx.fillStyle = gradient;
    ctx.fillRect(legendX, legendY, legendWidth, legendHeight);
    ctx.strokeStyle = '#333';
    ctx.strokeRect(legendX, legendY, legendWidth, legendHeight);
    
    // Legend labels
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('+1.0', legendX + legendWidth + 5, legendY);
    ctx.fillText('0.0', legendX + legendWidth + 5, legendY + legendHeight / 2);
    ctx.fillText('-1.0', legendX + legendWidth + 5, legendY + legendHeight);
    
    // Title
    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Correlation Matrix', width / 2, 25);
  };

  useEffect(() => {
    generateData();
  }, []);

  useEffect(() => {
    if (!correlations) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    drawHeatmap(ctx, canvas.width, canvas.height);
  }, [correlations]);

  const findStrongCorrelations = () => {
    if (!correlations) return [];
    
    const strong = [];
    const n = correlations.length;
    
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const value = correlations[i][j];
        if (Math.abs(value) > 0.5) {
          strong.push({
            pair: `Feature ${i + 1} & Feature ${j + 1}`,
            value: value,
            strength: Math.abs(value) > 0.7 ? 'Strong' : 'Moderate',
            direction: value > 0 ? 'Positive' : 'Negative'
          });
        }
      }
    }
    
    return strong.sort((a, b) => Math.abs(b.value) - Math.abs(a.value));
  };

  const strongCorrs = correlations ? findStrongCorrelations() : [];

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        🔥 Correlation Heatmap
      </Typography>
      
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Visualize relationships between features (used in feature selection)
      </Typography>

      <Button 
        variant="contained" 
        onClick={generateData}
        sx={{ mb: 2 }}
      >
        Generate New Dataset
      </Button>

      <canvas
        ref={canvasRef}
        width={700}
        height={500}
        style={{ width: '100%', maxWidth: '700px', height: 'auto', border: '1px solid #ddd', marginBottom: '20px' }}
      />

      {/* Interpretation */}
      <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1, mb: 2 }}>
        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
          How to Read:
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip 
            label="Blue: Positive correlation (both increase)" 
            sx={{ bgcolor: getColor(0.8), color: '#fff' }}
            size="small"
          />
          <Chip 
            label="Red: Negative correlation (one increases, other decreases)" 
            sx={{ bgcolor: getColor(-0.8), color: '#fff' }}
            size="small"
          />
          <Chip 
            label="White: No correlation (independent)" 
            sx={{ bgcolor: getColor(0), color: '#000' }}
            size="small"
          />
        </Box>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
          Values range from -1 (perfect negative) to +1 (perfect positive)
        </Typography>
      </Box>

      {/* Strong correlations */}
      {strongCorrs.length > 0 && (
        <Box sx={{ p: 2, bgcolor: 'warning.light', borderRadius: 1 }}>
          <Typography variant="subtitle2" fontWeight={600} gutterBottom>
            ⚠️ Strong Correlations Detected (|r| &gt; 0.5):
          </Typography>
          {strongCorrs.map((corr, idx) => (
            <Box key={idx} sx={{ mb: 1 }}>
              <Typography variant="body2">
                <strong>{corr.pair}</strong>: r = {corr.value.toFixed(3)} 
                <Chip 
                  label={`${corr.strength} ${corr.direction}`}
                  size="small"
                  color={Math.abs(corr.value) > 0.7 ? 'error' : 'warning'}
                  sx={{ ml: 1 }}
                />
              </Typography>
            </Box>
          ))}
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            Consider removing one feature from highly correlated pairs (multicollinearity)
          </Typography>
        </Box>
      )}

      {/* ML Application */}
      <Box sx={{ p: 2, bgcolor: 'info.light', borderRadius: 1, mt: 2 }}>
        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
          💡 ML Application:
        </Typography>
        <Typography variant="body2">
          • <strong>Feature Selection:</strong> Remove redundant features (|r| &gt; 0.9)
        </Typography>
        <Typography variant="body2">
          • <strong>Multicollinearity:</strong> High correlation causes unstable regression coefficients
        </Typography>
        <Typography variant="body2">
          • <strong>Exploratory Analysis:</strong> Understand relationships before modeling
        </Typography>
      </Box>
    </Paper>
  );
};

export default CorrelationHeatmapViz;
