import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Slider, ToggleButtonGroup, ToggleButton, Button } from '@mui/material';

const ProbabilityDistributionViz = () => {
  const canvasRef = useRef(null);
  const [distribution, setDistribution] = useState('normal');
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Distribution parameters
  const [normalMu, setNormalMu] = useState(0);
  const [normalSigma, setNormalSigma] = useState(1);
  const [binomialN, setBinomialN] = useState(10);
  const [binomialP, setBinomialP] = useState(0.5);
  const [poissonLambda, setPoissonLambda] = useState(3);
  
  // Animation state
  const [highlightX, setHighlightX] = useState(null);
  const animationRef = useRef(null);

  // Probability density/mass functions
  const normalPDF = (x, mu, sigma) => {
    const coefficient = 1 / (sigma * Math.sqrt(2 * Math.PI));
    const exponent = -0.5 * Math.pow((x - mu) / sigma, 2);
    return coefficient * Math.exp(exponent);
  };

  const binomialPMF = (k, n, p) => {
    const combination = factorial(n) / (factorial(k) * factorial(n - k));
    return combination * Math.pow(p, k) * Math.pow(1 - p, n - k);
  };

  const poissonPMF = (k, lambda) => {
    return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
  };

  const factorial = (n) => {
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
  };

  const drawDistribution = (ctx, width, height) => {
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    const padding = 60;
    const graphWidth = width - 2 * padding;
    const graphHeight = height - 2 * padding;

    // Draw axes
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding); // X-axis
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(padding, padding); // Y-axis
    ctx.stroke();

    // Draw distribution based on type
    if (distribution === 'normal') {
      drawNormal(ctx, width, height, padding, graphWidth, graphHeight);
    } else if (distribution === 'binomial') {
      drawBinomial(ctx, width, height, padding, graphWidth, graphHeight);
    } else if (distribution === 'poisson') {
      drawPoisson(ctx, width, height, padding, graphWidth, graphHeight);
    }

    // Draw labels
    drawLabels(ctx, width, height, padding);
  };

  const drawNormal = (ctx, width, height, padding, graphWidth, graphHeight) => {
    const xMin = normalMu - 4 * normalSigma;
    const xMax = normalMu + 4 * normalSigma;
    const points = 200;
    
    // Calculate y-values and find max
    const data = [];
    let maxY = 0;
    for (let i = 0; i <= points; i++) {
      const x = xMin + (i / points) * (xMax - xMin);
      const y = normalPDF(x, normalMu, normalSigma);
      data.push({ x, y });
      maxY = Math.max(maxY, y);
    }

    // Draw curve
    ctx.strokeStyle = '#2196f3';
    ctx.fillStyle = 'rgba(33, 150, 243, 0.2)';
    ctx.lineWidth = 3;
    ctx.beginPath();

    data.forEach((point, i) => {
      const screenX = padding + (point.x - xMin) / (xMax - xMin) * graphWidth;
      const screenY = height - padding - (point.y / maxY) * graphHeight;
      
      if (i === 0) {
        ctx.moveTo(screenX, screenY);
      } else {
        ctx.lineTo(screenX, screenY);
      }
    });
    
    ctx.stroke();

    // Fill area under curve
    ctx.lineTo(width - padding, height - padding);
    ctx.lineTo(padding, height - padding);
    ctx.closePath();
    ctx.fill();

    // Highlight standard deviations
    const sigmaColors = ['rgba(76, 175, 80, 0.3)', 'rgba(255, 193, 7, 0.2)', 'rgba(244, 67, 54, 0.1)'];
    for (let i = 1; i <= 3; i++) {
      const x1 = normalMu - i * normalSigma;
      const x2 = normalMu + i * normalSigma;
      const screenX1 = padding + (x1 - xMin) / (xMax - xMin) * graphWidth;
      const screenX2 = padding + (x2 - xMin) / (xMax - xMin) * graphWidth;
      
      ctx.fillStyle = sigmaColors[i - 1];
      ctx.fillRect(screenX1, padding, screenX2 - screenX1, graphHeight);
    }

    // Draw mean line
    const meanX = padding + (normalMu - xMin) / (xMax - xMin) * graphWidth;
    ctx.strokeStyle = '#f44336';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(meanX, padding);
    ctx.lineTo(meanX, height - padding);
    ctx.stroke();
    ctx.setLineDash([]);

    // Labels
    ctx.fillStyle = '#000';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('μ', meanX, height - padding + 25);
    
    // X-axis values
    for (let i = -3; i <= 3; i++) {
      const x = normalMu + i * normalSigma;
      const screenX = padding + (x - xMin) / (xMax - xMin) * graphWidth;
      ctx.fillText(x.toFixed(1), screenX, height - padding + 40);
    }
  };

  const drawBinomial = (ctx, width, height, padding, graphWidth, graphHeight) => {
    const data = [];
    let maxY = 0;
    
    for (let k = 0; k <= binomialN; k++) {
      const p = binomialPMF(k, binomialN, binomialP);
      data.push({ k, p });
      maxY = Math.max(maxY, p);
    }

    const barWidth = graphWidth / (binomialN + 2);

    data.forEach((point) => {
      const x = padding + ((point.k + 1) / (binomialN + 2)) * graphWidth;
      const barHeight = (point.p / maxY) * graphHeight;
      const y = height - padding - barHeight;

      // Highlight bar if animating
      const isHighlighted = isAnimating && highlightX === point.k;
      ctx.fillStyle = isHighlighted ? '#ff9800' : '#4caf50';
      
      ctx.fillRect(x - barWidth / 3, y, barWidth * 0.6, barHeight);
      
      // Outline
      ctx.strokeStyle = '#2e7d32';
      ctx.lineWidth = 2;
      ctx.strokeRect(x - barWidth / 3, y, barWidth * 0.6, barHeight);

      // Value labels
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(point.k, x, height - padding + 20);
      
      if (isHighlighted) {
        ctx.fillStyle = '#ff9800';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(`P(${point.k}) = ${point.p.toFixed(3)}`, x, y - 10);
      }
    });

    // Y-axis label
    ctx.fillStyle = '#000';
    ctx.font = '14px Arial';
    ctx.save();
    ctx.translate(padding - 40, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillText('Probability', 0, 0);
    ctx.restore();
  };

  const drawPoisson = (ctx, width, height, padding, graphWidth, graphHeight) => {
    const maxK = Math.min(20, Math.ceil(poissonLambda * 3));
    const data = [];
    let maxY = 0;
    
    for (let k = 0; k <= maxK; k++) {
      const p = poissonPMF(k, poissonLambda);
      data.push({ k, p });
      maxY = Math.max(maxY, p);
    }

    const barWidth = graphWidth / (maxK + 2);

    data.forEach((point) => {
      const x = padding + ((point.k + 1) / (maxK + 2)) * graphWidth;
      const barHeight = (point.p / maxY) * graphHeight;
      const y = height - padding - barHeight;

      const isHighlighted = isAnimating && highlightX === point.k;
      ctx.fillStyle = isHighlighted ? '#ff5722' : '#9c27b0';
      
      ctx.fillRect(x - barWidth / 3, y, barWidth * 0.6, barHeight);
      
      ctx.strokeStyle = '#6a1b9a';
      ctx.lineWidth = 2;
      ctx.strokeRect(x - barWidth / 3, y, barWidth * 0.6, barHeight);

      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(point.k, x, height - padding + 20);
      
      if (isHighlighted) {
        ctx.fillStyle = '#ff5722';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(`P(${point.k}) = ${point.p.toFixed(3)}`, x, y - 10);
      }
    });

    // Y-axis label
    ctx.fillStyle = '#000';
    ctx.font = '14px Arial';
    ctx.save();
    ctx.translate(padding - 40, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillText('Probability', 0, 0);
    ctx.restore();
  };

  const drawLabels = (ctx, width, height, padding) => {
    ctx.fillStyle = '#000';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('X', width - padding + 20, height - padding + 5);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    drawDistribution(ctx, width, height);
  }, [distribution, normalMu, normalSigma, binomialN, binomialP, poissonLambda, highlightX, isAnimating]);

  // Animation loop
  useEffect(() => {
    if (!isAnimating) {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
      setHighlightX(null);
      return;
    }

    let currentX = 0;
    const maxX = distribution === 'binomial' ? binomialN : Math.min(20, Math.ceil(poissonLambda * 3));
    
    animationRef.current = setInterval(() => {
      setHighlightX(currentX);
      currentX++;
      if (currentX > maxX) {
        currentX = 0;
      }
    }, 500);

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [isAnimating, distribution, binomialN, poissonLambda]);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        📊 Probability Distributions
      </Typography>
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Explore common probability distributions used in machine learning
        </Typography>
      </Box>

      <ToggleButtonGroup
        value={distribution}
        exclusive
        onChange={(e, val) => val && setDistribution(val)}
        sx={{ mb: 2 }}
      >
        <ToggleButton value="normal">Normal (Gaussian)</ToggleButton>
        <ToggleButton value="binomial">Binomial</ToggleButton>
        <ToggleButton value="poisson">Poisson</ToggleButton>
      </ToggleButtonGroup>

      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        style={{ width: '100%', maxWidth: '800px', height: 'auto', border: '1px solid #ddd' }}
      />

      {/* Distribution-specific controls */}
      <Box sx={{ mt: 3 }}>
        {distribution === 'normal' && (
          <>
            <Typography gutterBottom>Mean (μ): {normalMu}</Typography>
            <Slider
              value={normalMu}
              onChange={(e, val) => setNormalMu(val)}
              min={-5}
              max={5}
              step={0.5}
              marks
              valueLabelDisplay="auto"
            />
            <Typography gutterBottom sx={{ mt: 2 }}>Standard Deviation (σ): {normalSigma}</Typography>
            <Slider
              value={normalSigma}
              onChange={(e, val) => setNormalSigma(val)}
              min={0.5}
              max={3}
              step={0.25}
              marks
              valueLabelDisplay="auto"
            />
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
              Green: ±1σ (68%), Yellow: ±2σ (95%), Red: ±3σ (99.7%)
            </Typography>
          </>
        )}

        {distribution === 'binomial' && (
          <>
            <Typography gutterBottom>Number of trials (n): {binomialN}</Typography>
            <Slider
              value={binomialN}
              onChange={(e, val) => setBinomialN(val)}
              min={5}
              max={20}
              step={1}
              marks
              valueLabelDisplay="auto"
            />
            <Typography gutterBottom sx={{ mt: 2 }}>Success probability (p): {binomialP}</Typography>
            <Slider
              value={binomialP}
              onChange={(e, val) => setBinomialP(val)}
              min={0.1}
              max={0.9}
              step={0.1}
              marks
              valueLabelDisplay="auto"
            />
            <Button 
              variant="contained" 
              onClick={toggleAnimation}
              sx={{ mt: 2 }}
            >
              {isAnimating ? 'Stop Animation' : 'Animate Probabilities'}
            </Button>
          </>
        )}

        {distribution === 'poisson' && (
          <>
            <Typography gutterBottom>Rate (λ): {poissonLambda}</Typography>
            <Slider
              value={poissonLambda}
              onChange={(e, val) => setPoissonLambda(val)}
              min={1}
              max={10}
              step={0.5}
              marks
              valueLabelDisplay="auto"
            />
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
              Models: events per interval (website visits, customer arrivals)
            </Typography>
            <Button 
              variant="contained" 
              onClick={toggleAnimation}
              sx={{ mt: 2 }}
            >
              {isAnimating ? 'Stop Animation' : 'Animate Probabilities'}
            </Button>
          </>
        )}
      </Box>

      {/* Distribution info */}
      <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
        <Typography variant="subtitle2" fontWeight={600}>
          {distribution === 'normal' && 'Normal Distribution'}
          {distribution === 'binomial' && 'Binomial Distribution'}
          {distribution === 'poisson' && 'Poisson Distribution'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {distribution === 'normal' && 'Continuous bell curve. Most data falls near the mean. Use: heights, IQ scores, measurement errors.'}
          {distribution === 'binomial' && `${binomialN} independent trials, each with ${(binomialP * 100).toFixed(0)}% success probability. Use: coin flips, quality control.`}
          {distribution === 'poisson' && `Average ${poissonLambda} events per interval. Use: website traffic, radioactive decay, customer arrivals.`}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ProbabilityDistributionViz;
