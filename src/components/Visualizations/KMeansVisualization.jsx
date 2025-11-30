import { useEffect, useRef, useState } from 'react';
import { Box, Paper, Typography, Slider, Button, TextField } from '@mui/material';
import { PlayArrow, Pause, Refresh } from '@mui/icons-material';

const KMeansVisualization = () => {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [iteration, setIteration] = useState(0);
  const [k, setK] = useState(3);
  const [points, setPoints] = useState([]);
  const [centroids, setCentroids] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const animationRef = useRef(null);

  const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];

  // Initialize random points and centroids
  const initializeData = () => {
    const newPoints = [];
    for (let i = 0; i < 60; i++) {
      newPoints.push({
        x: Math.random() * 700 + 50,
        y: Math.random() * 300 + 50,
      });
    }
    
    const newCentroids = [];
    for (let i = 0; i < k; i++) {
      newCentroids.push({
        x: Math.random() * 700 + 50,
        y: Math.random() * 300 + 50,
      });
    }
    
    setPoints(newPoints);
    setCentroids(newCentroids);
    setAssignments(new Array(newPoints.length).fill(0));
    setIteration(0);
    setIsPlaying(false);
  };

  useEffect(() => {
    initializeData();
  }, [k]);

  // K-Means iteration step
  const performIteration = () => {
    if (points.length === 0 || centroids.length === 0) return;

    // Step 1: Assign points to nearest centroid
    const newAssignments = points.map(point => {
      let minDist = Infinity;
      let cluster = 0;
      
      centroids.forEach((centroid, idx) => {
        const dist = Math.sqrt(
          Math.pow(point.x - centroid.x, 2) + Math.pow(point.y - centroid.y, 2)
        );
        if (dist < minDist) {
          minDist = dist;
          cluster = idx;
        }
      });
      
      return cluster;
    });

    // Step 2: Update centroids
    const newCentroids = centroids.map((_, idx) => {
      const clusterPoints = points.filter((_, i) => newAssignments[i] === idx);
      
      if (clusterPoints.length === 0) {
        return centroids[idx]; // Keep old centroid if no points assigned
      }
      
      const sumX = clusterPoints.reduce((sum, p) => sum + p.x, 0);
      const sumY = clusterPoints.reduce((sum, p) => sum + p.y, 0);
      
      return {
        x: sumX / clusterPoints.length,
        y: sumY / clusterPoints.length,
      };
    });

    setAssignments(newAssignments);
    setCentroids(newCentroids);
    setIteration(prev => prev + 1);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || points.length === 0) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = 800;
    const height = canvas.height = 400;

    ctx.clearRect(0, 0, width, height);

    // Draw title
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText(`K-Means Clustering (K=${k}, Iteration=${iteration})`, 20, 25);

    // Draw points
    points.forEach((point, idx) => {
      const cluster = assignments[idx];
      ctx.fillStyle = colors[cluster % colors.length];
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    // Draw centroids
    centroids.forEach((centroid, idx) => {
      // Draw cross
      ctx.strokeStyle = colors[idx % colors.length];
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centroid.x - 15, centroid.y);
      ctx.lineTo(centroid.x + 15, centroid.y);
      ctx.moveTo(centroid.x, centroid.y - 15);
      ctx.lineTo(centroid.x, centroid.y + 15);
      ctx.stroke();

      // Draw circle around cross
      ctx.beginPath();
      ctx.arc(centroid.x, centroid.y, 10, 0, Math.PI * 2);
      ctx.stroke();

      // Label
      ctx.fillStyle = colors[idx % colors.length];
      ctx.font = 'bold 11px Arial';
      ctx.fillText(`C${idx + 1}`, centroid.x + 15, centroid.y - 10);
    });

  }, [points, centroids, assignments, iteration, k]);

  useEffect(() => {
    if (isPlaying && iteration < 20) {
      animationRef.current = setTimeout(() => {
        performIteration();
      }, 1000);
    } else if (iteration >= 20) {
      setIsPlaying(false);
    }

    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, [isPlaying, iteration]);

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        🎯 K-Means Clustering Visualization
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Watch how K-Means iteratively assigns points to clusters and updates centroids
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

      <Box sx={{ mb: 2, px: 2 }}>
        <Typography variant="caption" gutterBottom>
          Number of Clusters (K): {k}
        </Typography>
        <Slider
          value={k}
          onChange={(e, value) => setK(value)}
          min={2}
          max={6}
          marks
          step={1}
          disabled={isPlaying}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          startIcon={isPlaying ? <Pause /> : <PlayArrow />}
          onClick={() => {
            if (iteration >= 20) {
              initializeData();
              setIsPlaying(true);
            } else {
              setIsPlaying(!isPlaying);
            }
          }}
        >
          {isPlaying ? 'Pause' : iteration >= 20 ? 'Restart' : 'Play'}
        </Button>
        <Button
          variant="outlined"
          onClick={performIteration}
          disabled={isPlaying || iteration >= 20}
        >
          Next Step
        </Button>
        <Button
          variant="outlined"
          startIcon={<Refresh />}
          onClick={initializeData}
        >
          New Data
        </Button>
      </Box>

      <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
        <Typography variant="caption" display="block" gutterBottom fontWeight={600}>
          K-Means Algorithm:
        </Typography>
        <Typography variant="caption" display="block">
          <strong>1. Initialization:</strong> Randomly place K centroids (marked with ⊕)
        </Typography>
        <Typography variant="caption" display="block">
          <strong>2. Assignment:</strong> Assign each point to the nearest centroid
        </Typography>
        <Typography variant="caption" display="block">
          <strong>3. Update:</strong> Move centroids to the mean position of assigned points
        </Typography>
        <Typography variant="caption" display="block">
          <strong>4. Repeat:</strong> Steps 2-3 until convergence (centroids stop moving)
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1, fontStyle: 'italic' }}>
          Current Iteration: {iteration} | Clusters: {k}
        </Typography>
      </Box>
    </Paper>
  );
};

export default KMeansVisualization;
