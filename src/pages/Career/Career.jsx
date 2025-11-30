import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CareerGuide from '../../components/CareerGuide/CareerGuide';

const Career = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          AI Career Guide
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Explore various career paths, roles, and requirements in the field of Artificial Intelligence and Machine Learning.
        </Typography>
      </Box>
      <CareerGuide />
    </Container>
  );
};

export default Career;
