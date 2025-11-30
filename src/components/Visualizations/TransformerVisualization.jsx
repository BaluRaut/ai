import { useEffect, useRef, useState } from 'react';
import { Box, Paper, Typography, Slider, Button, TextField } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';

const TransformerVisualization = () => {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState(0);
  const [inputText, setInputText] = useState('AI is amazing');
  const animationRef = useRef(null);

  const words = inputText.split(' ').filter(w => w.trim()).slice(0, 5);
  const maxSteps = words.length - 1;

  // Simulate attention scores
  const getAttentionScore = (from, to, step) => {
    if (from === step) {
      // Current word pays most attention to relevant words
      if (from === to) return 0.9; // Self-attention
      if (Math.abs(from - to) === 1) return 0.6; // Adjacent words
      return 0.3; // Distant words
    }
    return 0.1;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || words.length === 0) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = 800;
    const height = canvas.height = 400;

    ctx.clearRect(0, 0, width, height);

    // Colors
    const primaryColor = '#3498db';
    const attentionColor = '#e74c3c';
    const textColor = '#2c3e50';

    // Draw title
    ctx.fillStyle = textColor;
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Transformer Self-Attention Mechanism', 20, 25);
    ctx.font = '11px Arial';
    ctx.fillText(`Analyzing: "${inputText}"`, 20, 42);

    // Layout
    const startX = 100;
    const spacing = Math.min(120, 600 / words.length);
    const inputY = 100;
    const attentionY = 200;
    const outputY = 320;
    const boxSize = 50;

    // Draw input embeddings
    words.forEach((word, idx) => {
      const x = startX + idx * spacing;
      
      // Box
      ctx.strokeStyle = primaryColor;
      ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
      ctx.lineWidth = 2;
      ctx.fillRect(x - boxSize/2, inputY - boxSize/2, boxSize, boxSize);
      ctx.strokeRect(x - boxSize/2, inputY - boxSize/2, boxSize, boxSize);

      // Word
      ctx.fillStyle = textColor;
      ctx.font = 'bold 11px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(word, x, inputY + 5);
      
      // Label
      ctx.font = '9px Arial';
      ctx.fillText(`Emb ${idx}`, x, inputY - boxSize/2 - 8);
    });

    // Draw attention connections
    words.forEach((_, fromIdx) => {
      const fromX = startX + fromIdx * spacing;
      
      words.forEach((_, toIdx) => {
        const toX = startX + toIdx * spacing;
        const score = getAttentionScore(fromIdx, toIdx, step);
        
        if (score > 0.2) {
          ctx.strokeStyle = attentionColor;
          ctx.globalAlpha = score;
          ctx.lineWidth = score * 4;
          
          // Draw curved line
          ctx.beginPath();
          ctx.moveTo(fromX, inputY + boxSize/2);
          
          const controlY = attentionY;
          ctx.quadraticCurveTo(fromX, controlY, toX, outputY - boxSize/2);
          ctx.stroke();
          
          ctx.globalAlpha = 1;
        }
      });
    });

    // Draw attention layer label
    ctx.fillStyle = attentionColor;
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('⚡ Attention Layer', 20, attentionY);
    ctx.font = '10px Arial';
    ctx.fillText(`Focus: "${words[step]}"`, 20, attentionY + 15);

    // Draw output embeddings
    words.forEach((word, idx) => {
      const x = startX + idx * spacing;
      const isActive = idx === step;
      
      // Box
      ctx.strokeStyle = isActive ? attentionColor : primaryColor;
      ctx.fillStyle = isActive ? 'rgba(231, 76, 60, 0.2)' : 'rgba(52, 152, 219, 0.1)';
      ctx.lineWidth = isActive ? 3 : 2;
      ctx.fillRect(x - boxSize/2, outputY - boxSize/2, boxSize, boxSize);
      ctx.strokeRect(x - boxSize/2, outputY - boxSize/2, boxSize, boxSize);

      // Contextual word
      ctx.fillStyle = textColor;
      ctx.font = isActive ? 'bold 11px Arial' : '11px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(word, x, outputY + 5);
      
      // Label
      ctx.font = '9px Arial';
      ctx.fillText(`Out ${idx}`, x, outputY + boxSize/2 + 15);
    });

    // Draw attention scores on the side
    ctx.fillStyle = textColor;
    ctx.font = '10px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Attention Scores:', width - 150, inputY);
    
    words.forEach((word, idx) => {
      const score = getAttentionScore(step, idx, step);
      const barWidth = score * 80;
      const y = inputY + 20 + idx * 20;
      
      // Bar
      ctx.fillStyle = attentionColor;
      ctx.globalAlpha = 0.6;
      ctx.fillRect(width - 150, y, barWidth, 12);
      ctx.globalAlpha = 1;
      
      // Text
      ctx.fillStyle = textColor;
      ctx.fillText(`${word}: ${score.toFixed(2)}`, width - 145, y + 10);
    });

    // Draw Q, K, V labels
    ctx.fillStyle = primaryColor;
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    const midX = startX + (words.length - 1) * spacing / 2;
    ctx.fillText('Q (Query)', midX - 100, attentionY - 30);
    ctx.fillText('K (Key)', midX, attentionY - 30);
    ctx.fillText('V (Value)', midX + 100, attentionY - 30);

  }, [step, words, inputText]);

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
  }, [isPlaying, maxSteps]);

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        ⚡ Transformer Self-Attention
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        See how transformers use attention to understand relationships between words
      </Typography>

      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          size="small"
          label="Input Sequence (space-separated, max 5 words)"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            setStep(0);
            setIsPlaying(false);
          }}
          helperText="Try: 'The cat sat on mat' or 'AI learns from data'"
        />
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

      <Box sx={{ px: 2, mb: 2 }}>
        <Typography variant="caption" gutterBottom>
          Focused Word: {step}/{maxSteps} - "{words[step]}"
        </Typography>
        <Slider
          value={step}
          onChange={(e, value) => setStep(value)}
          min={0}
          max={maxSteps}
          marks
          step={1}
          disabled={maxSteps === 0}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          variant="contained"
          startIcon={isPlaying ? <Pause /> : <PlayArrow />}
          onClick={() => setIsPlaying(!isPlaying)}
          disabled={maxSteps === 0}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Button variant="outlined" onClick={() => setStep(0)}>
          Reset
        </Button>
      </Box>

      <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
        <Typography variant="caption" display="block" gutterBottom fontWeight={600}>
          How Self-Attention Works:
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Query (Q):</strong> What the current word is looking for
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Key (K):</strong> What each word offers as context
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Value (V):</strong> The actual information from each word
        </Typography>
        <Typography variant="caption" display="block">
          • <strong>Attention Score:</strong> How much each word should attend to others (shown by line thickness)
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1, fontStyle: 'italic' }}>
          Thicker red lines = higher attention. The output combines all inputs weighted by attention scores.
        </Typography>
      </Box>
    </Paper>
  );
};

export default TransformerVisualization;
