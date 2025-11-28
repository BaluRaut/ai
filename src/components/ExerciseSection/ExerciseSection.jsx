import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeBlock from '../CodeBlock/CodeBlock';

const ExerciseSection = ({ exercises, onComplete }) => {
  const [expandedExercise, setExpandedExercise] = useState(null);
  const [completedExercises, setCompletedExercises] = useState([]);

  const handleComplete = (exerciseId) => {
    if (!completedExercises.includes(exerciseId)) {
      setCompletedExercises([...completedExercises, exerciseId]);
    }
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight="600">
        Practice Exercises
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Try solving these exercises to reinforce your learning
      </Typography>

      {exercises.map((exercise, index) => {
        const isCompleted = completedExercises.includes(index);
        return (
          <Accordion
            key={index}
            expanded={expandedExercise === index}
            onChange={(e, expanded) => setExpandedExercise(expanded ? index : null)}
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                <Typography variant="h6">
                  Exercise {index + 1}: {exercise.title}
                </Typography>
                {isCompleted && <CheckCircleIcon color="success" />}
                <Chip
                  label={exercise.difficulty}
                  size="small"
                  color={
                    exercise.difficulty === 'Easy' ? 'success' :
                    exercise.difficulty === 'Medium' ? 'warning' : 'error'
                  }
                  sx={{ ml: 'auto' }}
                />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant="body1" paragraph>
                  <strong>Problem:</strong> {exercise.problem}
                </Typography>

                {exercise.hints && exercise.hints.length > 0 && (
                  <Box sx={{ my: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Hints:
                    </Typography>
                    <ul>
                      {exercise.hints.map((hint, i) => (
                        <li key={i}>
                          <Typography variant="body2">{hint}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}

                {exercise.expectedOutput && (
                  <Box sx={{ my: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Expected Output:
                    </Typography>
                    <Paper elevation={1} sx={{ p: 2, bgcolor: 'grey.100' }}>
                      <Typography variant="body2" component="pre" sx={{ m: 0 }}>
                        {exercise.expectedOutput}
                      </Typography>
                    </Paper>
                  </Box>
                )}

                <Accordion sx={{ mt: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle2">Show Solution</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <CodeBlock
                      code={exercise.solution}
                      language={exercise.language || 'sql'}
                      title="Solution"
                    />
                    {exercise.explanation && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Explanation:
                        </Typography>
                        <Typography variant="body2">{exercise.explanation}</Typography>
                      </Box>
                    )}
                  </AccordionDetails>
                </Accordion>

                <Button
                  variant="contained"
                  size="small"
                  sx={{ mt: 2 }}
                  onClick={() => handleComplete(index)}
                  disabled={isCompleted}
                >
                  {isCompleted ? 'Completed' : 'Mark as Complete'}
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default ExerciseSection;
