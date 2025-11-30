import { useEffect, useRef, useState } from 'react';
import { Box, Paper, Typography, Slider, ToggleButtonGroup, ToggleButton, TextField } from '@mui/material';

const MatrixVisualization = () => {
  const canvasRef = useRef(null);
  const [operation, setOperation] = useState('multiply');
  const [animation, setAnimation] = useState(0);

  // Sample matrices
  const matrixA = [[2, 1], [1, 3]];
  const matrixB = [[1, 0], [0, 1]];
  const vectorX = [3, 2];

  const multiplyMatrixVector = (matrix, vector) => {
    return matrix.map(row =>
      row.reduce((sum, val, i) => sum + val * vector[i], 0)
    );
  };

  const multiplyMatrices = (a, b) => {
    return a.map(row =>
      b[0].map((_, col) =>
        row.reduce((sum, val, i) => sum + val * b[i][col], 0)
      )
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = 700;
    const height = canvas.height = 350;

    ctx.clearRect(0, 0, width, height);

    const gridSize = 40;
    const originX = 150;
    const originY = height / 2;

    // Draw grid
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 1;
    for (let x = -5; x <= 10; x++) {
      ctx.beginPath();
      ctx.moveTo(originX + x * gridSize, 0);
      ctx.lineTo(originX + x * gridSize, height);
      ctx.stroke();
    }
    for (let y = -4; y <= 4; y++) {
      ctx.beginPath();
      ctx.moveTo(0, originY + y * gridSize);
      ctx.lineTo(width, originY + y * gridSize);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#95a5a6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    const drawVector = (vec, color, label, alpha = 1) => {
      const x = originX + vec[0] * gridSize;
      const y = originY - vec[1] * gridSize;

      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 3;

      // Draw line
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Draw arrowhead
      const angle = Math.atan2(vec[1], vec[0]);
      const arrowSize = 12;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(
        x - arrowSize * Math.cos(angle - Math.PI / 6),
        y + arrowSize * Math.sin(angle - Math.PI / 6)
      );
      ctx.lineTo(
        x - arrowSize * Math.cos(angle + Math.PI / 6),
        y + arrowSize * Math.sin(angle + Math.PI / 6)
      );
      ctx.closePath();
      ctx.fill();

      // Label
      ctx.font = 'bold 14px Arial';
      ctx.fillText(label, x + 10, y - 10);

      ctx.globalAlpha = 1;
    };

    // Title
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Linear Transformation Visualization', 20, 25);

    if (operation === 'multiply') {
      // Original vector
      drawVector(vectorX, '#3498db', 'v⃗', 0.3);

      // Transformed vector
      const result = multiplyMatrixVector(matrixA, vectorX);
      drawVector(result, '#e74c3c', 'Av⃗', 1);

      // Matrix display
      ctx.fillStyle = '#2c3e50';
      ctx.font = '12px Arial';
      ctx.fillText('Matrix A:', 500, 80);
      ctx.font = '14px Courier';
      ctx.fillText(`[${matrixA[0].join('  ')}]`, 510, 105);
      ctx.fillText(`[${matrixA[1].join('  ')}]`, 510, 125);

      ctx.font = '12px Arial';
      ctx.fillText('Vector v⃗:', 500, 160);
      ctx.font = '14px Courier';
      ctx.fillText(`[${vectorX[0]}]`, 520, 185);
      ctx.fillText(`[${vectorX[1]}]`, 520, 205);

      ctx.font = '12px Arial';
      ctx.fillText('Result Av⃗:', 500, 240);
      ctx.font = '14px Courier';
      ctx.fillText(`[${result[0]}]`, 520, 265);
      ctx.fillText(`[${result[1]}]`, 520, 285);

    } else if (operation === 'dotproduct') {
      const vec1 = [3, 2];
      const vec2 = [2, 3];
      const dot = vec1[0] * vec2[0] + vec1[1] * vec2[1];

      drawVector(vec1, '#3498db', 'v⃗');
      drawVector(vec2, '#2ecc71', 'w⃗');

      // Projection
      const projScale = dot / (vec2[0] ** 2 + vec2[1] ** 2);
      const projection = [vec2[0] * projScale, vec2[1] * projScale];
      drawVector(projection, '#f39c12', 'proj', 0.7);

      // Info
      ctx.fillStyle = '#2c3e50';
      ctx.font = '12px Arial';
      ctx.fillText('Dot Product:', 480, 100);
      ctx.font = '14px Courier';
      ctx.fillText(`v⃗ · w⃗ = ${dot}`, 490, 125);
      
      ctx.font = '12px Arial';
      ctx.fillText(`= ${vec1[0]}×${vec2[0]} + ${vec1[1]}×${vec2[1]}`, 490, 150);
      ctx.fillText(`= ${vec1[0] * vec2[0]} + ${vec1[1] * vec2[1]}`, 490, 170);

      const angle = Math.acos(dot / (Math.sqrt(vec1[0]**2 + vec1[1]**2) * Math.sqrt(vec2[0]**2 + vec2[1]**2))) * 180 / Math.PI;
      ctx.fillText(`Angle: ${angle.toFixed(1)}°`, 490, 200);
    }

  }, [operation, animation]);

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        🔢 Linear Algebra - Matrix Transformations
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Visualize how matrices transform vectors in 2D space
      </Typography>

      <Box sx={{ mb: 2 }}>
        <ToggleButtonGroup
          value={operation}
          exclusive
          onChange={(e, value) => value && setOperation(value)}
          size="small"
          fullWidth
        >
          <ToggleButton value="multiply">Matrix × Vector</ToggleButton>
          <ToggleButton value="dotproduct">Dot Product</ToggleButton>
        </ToggleButtonGroup>
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

      <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
        <Typography variant="caption" display="block" gutterBottom fontWeight={600}>
          Key Concepts:
        </Typography>
        {operation === 'multiply' && (
          <>
            <Typography variant="caption" display="block">
              • <strong>Matrix × Vector:</strong> Transforms vector by rotation, scaling, shearing
            </Typography>
            <Typography variant="caption" display="block">
              • <strong>Blue vector (v⃗):</strong> Original input vector
            </Typography>
            <Typography variant="caption" display="block">
              • <strong>Red vector (Av⃗):</strong> Transformed output vector
            </Typography>
            <Typography variant="caption" display="block">
              • Used in: Neural networks, computer graphics, robotics
            </Typography>
          </>
        )}
        {operation === 'dotproduct' && (
          <>
            <Typography variant="caption" display="block">
              • <strong>Dot Product:</strong> Measures similarity and projection
            </Typography>
            <Typography variant="caption" display="block">
              • Larger value = vectors more aligned
            </Typography>
            <Typography variant="caption" display="block">
              • Zero = perpendicular vectors
            </Typography>
            <Typography variant="caption" display="block">
              • Used in: Cosine similarity, attention mechanisms, recommendations
            </Typography>
          </>
        )}
      </Box>
    </Paper>
  );
};

export default MatrixVisualization;
