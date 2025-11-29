import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { GradientDescentViz, NeuralNetworkViz } from '../../components/Visualizations';

const Visualizations = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Interactive Visualizations
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Explore complex AI concepts through interactive simulations and visualizations.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        
        {/* Gradient Descent Section */}
        <Box id="gradient-descent">
          <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
            1. Gradient Descent Optimization
          </Typography>
          <GradientDescentViz />
        </Box>

        {/* Neural Network Section */}
        <Box id="neural-network">
          <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
            2. Neural Network Architecture
          </Typography>
          <Box sx={{ 
            p: 4, 
            bgcolor: 'background.paper', 
            borderRadius: 2, 
            boxShadow: 1,
            minHeight: '500px'
          }}>
            <NeuralNetworkViz />
          </Box>
        </Box>

      </Box>
    </Container>
  );
};

export default Visualizations;
