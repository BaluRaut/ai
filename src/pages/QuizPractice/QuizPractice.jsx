import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import { allTopics } from '../../data';
import Quiz from '../../components/Quiz/Quiz';
import { useProgress } from '../../context/ProgressContext';

const QuizPractice = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const { saveQuizScore } = useProgress();

  const topics = Object.values(allTopics);

  const handleQuizComplete = (score) => {
    saveQuizScore(selectedTopic, score);
    alert(`Quiz completed! Your score: ${score}%`);
    setSelectedTopic('');
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <QuizIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" fontWeight="bold">
            Quiz Practice
          </Typography>
        </Box>

        <Paper elevation={0} sx={{ p: 3, mb: 4 }}>
          <Typography variant="body1" color="text.secondary" paragraph>
            Test your knowledge by taking quizzes on any topic. Select a topic below to begin.
          </Typography>

          <FormControl fullWidth>
            <InputLabel>Select Topic</InputLabel>
            <Select
              value={selectedTopic}
              label="Select Topic"
              onChange={(e) => setSelectedTopic(e.target.value)}
            >
              {topics.map((topic) => (
                <MenuItem key={topic.id} value={topic.id}>
                  {topic.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Paper>

        {selectedTopic && allTopics[selectedTopic] && (
          <Box>
            <Typography variant="h5" gutterBottom>
              {allTopics[selectedTopic].title}
            </Typography>
            <Quiz
              questions={allTopics[selectedTopic].quiz}
              onComplete={handleQuizComplete}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default QuizPractice;
