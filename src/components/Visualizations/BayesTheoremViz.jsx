import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Paper, Slider, ToggleButtonGroup, ToggleButton, Chip } from '@mui/material';

const BayesTheoremViz = () => {
  const canvasRef = useRef(null);
  const [scenario, setScenario] = useState('medical');
  
  // Medical test scenario
  const [diseasePrevalence, setDiseasePrevalence] = useState(0.01); // P(Disease)
  const [testSensitivity, setTestSensitivity] = useState(0.99);     // P(+ | Disease)
  const [testSpecificity, setTestSpecificity] = useState(0.95);     // P(- | No Disease)
  
  // Spam filter scenario
  const [spamRate, setSpamRate] = useState(0.3);           // P(Spam)
  const [wordInSpam, setWordInSpam] = useState(0.8);       // P("free" | Spam)
  const [wordInHam, setWordInHam] = useState(0.1);         // P("free" | Ham)

  // Calculate Bayes theorem results
  const calculateBayes = () => {
    if (scenario === 'medical') {
      const pDisease = diseasePrevalence;
      const pNoDisease = 1 - pDisease;
      const pPositiveGivenDisease = testSensitivity;
      const pPositiveGivenNoDisease = 1 - testSpecificity;
      
      // P(+) = P(+ | D) * P(D) + P(+ | no D) * P(no D)
      const pPositive = pPositiveGivenDisease * pDisease + pPositiveGivenNoDisease * pNoDisease;
      
      // Bayes: P(D | +) = P(+ | D) * P(D) / P(+)
      const pDiseaseGivenPositive = (pPositiveGivenDisease * pDisease) / pPositive;
      
      return {
        prior: pDisease,
        likelihood: pPositiveGivenDisease,
        evidence: pPositive,
        posterior: pDiseaseGivenPositive,
        labels: {
          prior: 'P(Disease)',
          likelihood: 'P(+ Test | Disease)',
          evidence: 'P(+ Test)',
          posterior: 'P(Disease | + Test)'
        }
      };
    } else {
      // Spam filter
      const pSpam = spamRate;
      const pHam = 1 - pSpam;
      const pWordGivenSpam = wordInSpam;
      const pWordGivenHam = wordInHam;
      
      // P(word) = P(word | spam) * P(spam) + P(word | ham) * P(ham)
      const pWord = pWordGivenSpam * pSpam + pWordGivenHam * pHam;
      
      // Bayes: P(spam | word) = P(word | spam) * P(spam) / P(word)
      const pSpamGivenWord = (pWordGivenSpam * pSpam) / pWord;
      
      return {
        prior: pSpam,
        likelihood: pWordGivenSpam,
        evidence: pWord,
        posterior: pSpamGivenWord,
        labels: {
          prior: 'P(Spam)',
          likelihood: 'P("free" | Spam)',
          evidence: 'P("free")',
          posterior: 'P(Spam | "free")'
        }
      };
    }
  };

  const drawDiagram = (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);
    
    const result = calculateBayes();
    const boxWidth = 150;
    const boxHeight = 80;
    const spacing = 100;
    
    // Positions for boxes
    const priorX = 100;
    const likelihoodX = priorX + boxWidth + spacing;
    const evidenceX = likelihoodX + boxWidth + spacing;
    const posteriorX = width / 2 - boxWidth / 2;
    
    const topY = 50;
    const bottomY = 250;
    
    // Helper to draw rounded box with value
    const drawBox = (x, y, label, value, color) => {
      // Box
      ctx.fillStyle = color;
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 3;
      roundRect(ctx, x, y, boxWidth, boxHeight, 10);
      ctx.fill();
      ctx.stroke();
      
      // Label
      ctx.fillStyle = '#000';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(label, x + boxWidth / 2, y + 30);
      
      // Value
      ctx.font = 'bold 24px Arial';
      ctx.fillStyle = '#fff';
      ctx.fillText((value * 100).toFixed(1) + '%', x + boxWidth / 2, y + 60);
    };
    
    // Draw boxes
    drawBox(priorX, topY, 'Prior', result.prior, '#2196f3');
    drawBox(likelihoodX, topY, 'Likelihood', result.likelihood, '#4caf50');
    drawBox(evidenceX, topY, 'Evidence', result.evidence, '#ff9800');
    drawBox(posteriorX, bottomY, 'Posterior', result.posterior, '#e91e63');
    
    // Draw arrows and formula
    const arrowY = topY + boxHeight + 30;
    
    // Arrow from Prior
    drawArrow(ctx, priorX + boxWidth / 2, topY + boxHeight, priorX + boxWidth / 2, arrowY);
    
    // Arrow from Likelihood
    drawArrow(ctx, likelihoodX + boxWidth / 2, topY + boxHeight, likelihoodX + boxWidth / 2, arrowY);
    
    // Horizontal combine arrow
    drawArrow(ctx, priorX + boxWidth / 2, arrowY, likelihoodX + boxWidth / 2, arrowY);
    
    // Multiply symbol
    ctx.fillStyle = '#000';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('×', (priorX + likelihoodX + boxWidth) / 2, arrowY + 7);
    
    // Division arrow pointing down
    const divX = (likelihoodX + evidenceX + boxWidth) / 2;
    drawArrow(ctx, divX, arrowY + 20, posteriorX + boxWidth / 2, bottomY - 20);
    
    // Division symbol
    ctx.fillText('÷', evidenceX + boxWidth / 2 + 20, topY + boxHeight / 2);
    
    // Bayes Formula
    ctx.font = '16px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText('Bayes Theorem:', width / 2, bottomY - 60);
    ctx.font = 'bold 14px Courier';
    ctx.fillText(
      `${result.labels.posterior} = ${result.labels.likelihood} × ${result.labels.prior} / ${result.labels.evidence}`,
      width / 2,
      bottomY - 35
    );
    
    // Explanation text
    ctx.font = '13px Arial';
    ctx.fillStyle = '#666';
    const explanation = scenario === 'medical'
      ? `Even with ${(testSensitivity * 100).toFixed(0)}% accurate test, only ${(result.posterior * 100).toFixed(1)}% chance of disease (base rate matters!)`
      : `Email with "free" is ${(result.posterior * 100).toFixed(1)}% likely spam`;
    ctx.fillText(explanation, width / 2, bottomY + boxHeight + 30);
    
    // Labels for each term
    ctx.font = '12px Arial';
    ctx.fillStyle = '#555';
    ctx.textAlign = 'center';
    ctx.fillText(result.labels.prior, priorX + boxWidth / 2, topY - 10);
    ctx.fillText(result.labels.likelihood, likelihoodX + boxWidth / 2, topY - 10);
    ctx.fillText(result.labels.evidence, evidenceX + boxWidth / 2, topY - 10);
    ctx.fillText(result.labels.posterior, posteriorX + boxWidth / 2, bottomY - 10);
  };
  
  const roundRect = (ctx, x, y, width, height, radius) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  };
  
  const drawArrow = (ctx, fromX, fromY, toX, toY) => {
    const headlen = 10;
    const angle = Math.atan2(toY - fromY, toX - fromX);
    
    ctx.strokeStyle = '#333';
    ctx.fillStyle = '#333';
    ctx.lineWidth = 2;
    
    // Line
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
    
    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    drawDiagram(ctx, canvas.width, canvas.height);
  }, [scenario, diseasePrevalence, testSensitivity, testSpecificity, spamRate, wordInSpam, wordInHam]);

  const result = calculateBayes();

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        🎯 Bayes Theorem Interactive
      </Typography>
      
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Update beliefs with evidence: Prior → Posterior
      </Typography>

      <ToggleButtonGroup
        value={scenario}
        exclusive
        onChange={(e, val) => val && setScenario(val)}
        sx={{ mb: 3 }}
      >
        <ToggleButton value="medical">Medical Test</ToggleButton>
        <ToggleButton value="spam">Spam Filter</ToggleButton>
      </ToggleButtonGroup>

      <canvas
        ref={canvasRef}
        width={700}
        height={400}
        style={{ width: '100%', maxWidth: '700px', height: 'auto', border: '1px solid #ddd', marginBottom: '20px' }}
      />

      {/* Controls */}
      <Box sx={{ mb: 3 }}>
        {scenario === 'medical' ? (
          <>
            <Typography gutterBottom>
              Disease Prevalence: {(diseasePrevalence * 100).toFixed(1)}%
            </Typography>
            <Slider
              value={diseasePrevalence}
              onChange={(e, val) => setDiseasePrevalence(val)}
              min={0.001}
              max={0.2}
              step={0.001}
              valueLabelDisplay="auto"
              valueLabelFormat={(val) => `${(val * 100).toFixed(1)}%`}
            />
            
            <Typography gutterBottom sx={{ mt: 2 }}>
              Test Sensitivity (True Positive Rate): {(testSensitivity * 100).toFixed(0)}%
            </Typography>
            <Slider
              value={testSensitivity}
              onChange={(e, val) => setTestSensitivity(val)}
              min={0.5}
              max={1}
              step={0.01}
              valueLabelDisplay="auto"
              valueLabelFormat={(val) => `${(val * 100).toFixed(0)}%`}
            />
            
            <Typography gutterBottom sx={{ mt: 2 }}>
              Test Specificity (True Negative Rate): {(testSpecificity * 100).toFixed(0)}%
            </Typography>
            <Slider
              value={testSpecificity}
              onChange={(e, val) => setTestSpecificity(val)}
              min={0.5}
              max={1}
              step={0.01}
              valueLabelDisplay="auto"
              valueLabelFormat={(val) => `${(val * 100).toFixed(0)}%`}
            />
          </>
        ) : (
          <>
            <Typography gutterBottom>
              Spam Rate: {(spamRate * 100).toFixed(0)}%
            </Typography>
            <Slider
              value={spamRate}
              onChange={(e, val) => setSpamRate(val)}
              min={0.1}
              max={0.9}
              step={0.05}
              valueLabelDisplay="auto"
              valueLabelFormat={(val) => `${(val * 100).toFixed(0)}%`}
            />
            
            <Typography gutterBottom sx={{ mt: 2 }}>
              P("free" appears | Spam): {(wordInSpam * 100).toFixed(0)}%
            </Typography>
            <Slider
              value={wordInSpam}
              onChange={(e, val) => setWordInSpam(val)}
              min={0.1}
              max={1}
              step={0.05}
              valueLabelDisplay="auto"
              valueLabelFormat={(val) => `${(val * 100).toFixed(0)}%`}
            />
            
            <Typography gutterBottom sx={{ mt: 2 }}>
              P("free" appears | Not Spam): {(wordInHam * 100).toFixed(0)}%
            </Typography>
            <Slider
              value={wordInHam}
              onChange={(e, val) => setWordInHam(val)}
              min={0}
              max={0.5}
              step={0.05}
              valueLabelDisplay="auto"
              valueLabelFormat={(val) => `${(val * 100).toFixed(0)}%`}
            />
          </>
        )}
      </Box>

      {/* Results */}
      <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
          Calculation Breakdown:
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
          <Chip label={`Prior: ${(result.prior * 100).toFixed(1)}%`} color="primary" size="small" />
          <Chip label={`Likelihood: ${(result.likelihood * 100).toFixed(1)}%`} color="success" size="small" />
          <Chip label={`Evidence: ${(result.evidence * 100).toFixed(1)}%`} color="warning" size="small" />
        </Box>
        <Typography variant="h6" color="error" sx={{ mt: 1 }}>
          → Posterior: {(result.posterior * 100).toFixed(1)}%
        </Typography>
        
        <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
          {scenario === 'medical' 
            ? 'Key insight: Low prevalence (base rate) means even accurate tests have many false positives!'
            : 'Bayes combines prior knowledge (spam rate) with new evidence (word presence)'}
        </Typography>
      </Box>
    </Paper>
  );
};

export default BayesTheoremViz;
