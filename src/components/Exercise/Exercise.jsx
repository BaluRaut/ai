import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Collapse,
} from '@mui/material';
import CodeBlock from '../CodeBlock/CodeBlock';
import { useTranslation } from 'react-i18next';

const Exercise = ({ exercise, index }) => {
  const [showSolution, setShowSolution] = useState(false);
  const { t } = useTranslation();

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Exercise {index + 1}: {exercise.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {exercise.description}
      </Typography>

      {exercise.hint && (
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
          💡 Hint: {exercise.hint}
        </Typography>
      )}

      <Button
        variant="outlined"
        size="small"
        onClick={() => setShowSolution(!showSolution)}
        sx={{ mb: 2 }}
      >
        {showSolution ? t('topic.hideSolution') : t('topic.showSolution')}
      </Button>

      <Collapse in={showSolution}>
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" gutterBottom fontWeight="600">
            {t('topic.solution')}:
          </Typography>
          <CodeBlock code={exercise.solution} language={exercise.language || 'sql'} />
          {exercise.explanation && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              <strong>Explanation:</strong> {exercise.explanation}
            </Typography>
          )}
        </Box>
      </Collapse>
    </Paper>
  );
};

export default Exercise;
