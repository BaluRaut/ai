import { useState, useMemo, useCallback, memo } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Button,
  Tabs,
  Tab,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  ExpandMore,
  PlayArrow,
  Timer,
  Shuffle,
  NavigateNext,
  NavigateBefore,
  CheckCircle,
  Business,
  Code,
  Psychology,
  Lightbulb,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { 
  interviewQuestions, 
  companyProblems, 
  mockInterviews 
} from '../../data/interview/questions';
import { pythonInterviewTopics, companies } from '../../data/interview/topics';

const InterviewPrep = memo(() => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [mockMode, setMockMode] = useState(false);
  const [selectedMock, setSelectedMock] = useState(null);
  const [mockTimer, setMockTimer] = useState(0);

  // Memoize markdown components to prevent recreation
  const markdownComponents = useMemo(() => ({
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  }), []);

  // Memoize questions filtering
  const topicQuestions = useMemo(() => {
    if (!selectedTopic) return [];
    return interviewQuestions.filter(q => q.category === selectedTopic.id);
  }, [selectedTopic]);

  // Memoize difficulty color function
  const getDifficultyColor = useCallback((difficulty) => {
    switch (difficulty) {
      case 'easy': return 'success';
      case 'medium': return 'warning';
      case 'hard': return 'error';
      default: return 'default';
    }
  }, []);

  // Start mock interview
  const startMockInterview = (mock) => {
    setSelectedMock(mock);
    setMockMode(true);
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
    setMockTimer(mock.duration * 60);
  };

  // Render Topics Tab
  const renderTopicsTab = () => (
    <Box>
      {!selectedTopic ? (
        <Grid container spacing={3}>
          {pythonInterviewTopics.map((topic) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={topic.id}>
              <Card
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                }}
                onClick={() => {
                  setSelectedTopic(topic);
                  setCurrentQuestionIndex(0);
                  setShowAnswer(false);
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Typography variant="h3">{topic.icon}</Typography>
                    <Box>
                      <Typography variant="h6">{topic.title}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {topic.questionCount} questions
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {topic.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box>
          <Button
            startIcon={<NavigateBefore />}
            onClick={() => setSelectedTopic(null)}
            sx={{ mb: 3 }}
          >
            Back to Topics
          </Button>

          <Typography variant="h5" gutterBottom>
            {selectedTopic.icon} {selectedTopic.title}
          </Typography>

          {/* Progress */}
          <Box sx={{ mb: 3 }}>
            <LinearProgress
              variant="determinate"
              value={((currentQuestionIndex + 1) / topicQuestions.length) * 100}
              sx={{ height: 8, borderRadius: 4 }}
            />
            <Typography variant="caption" color="text.secondary">
              Question {currentQuestionIndex + 1} of {topicQuestions.length}
            </Typography>
          </Box>

          {/* Current Question */}
          {topicQuestions[currentQuestionIndex] && (
            <Paper sx={{ p: 3, mb: 3 }}>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip
                  label={topicQuestions[currentQuestionIndex].difficulty}
                  color={getDifficultyColor(topicQuestions[currentQuestionIndex].difficulty)}
                  size="small"
                />
                {topicQuestions[currentQuestionIndex].companies?.slice(0, 3).map((c) => (
                  <Chip key={c} label={c} size="small" variant="outlined" />
                ))}
              </Box>

              <Typography variant="h6" gutterBottom>
                {topicQuestions[currentQuestionIndex].question}
              </Typography>

              {!showAnswer ? (
                <Button
                  variant="contained"
                  onClick={() => setShowAnswer(true)}
                  startIcon={<Lightbulb />}
                  sx={{ mt: 2 }}
                >
                  Show Answer
                </Button>
              ) : (
                <Box sx={{ mt: 3 }}>
                  <Divider sx={{ mb: 2 }} />
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    Answer:
                  </Typography>
                  <Box sx={{ '& pre': { borderRadius: 1, my: 2 } }}>
                    <ReactMarkdown components={markdownComponents}>
                      {topicQuestions[currentQuestionIndex].answer}
                    </ReactMarkdown>
                  </Box>

                  {topicQuestions[currentQuestionIndex].followUp && (
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="subtitle2" color="text.secondary">
                        Follow-up Questions:
                      </Typography>
                      <List dense>
                        {topicQuestions[currentQuestionIndex].followUp.map((q, i) => (
                          <ListItem key={i}>
                            <ListItemIcon><Psychology fontSize="small" /></ListItemIcon>
                            <ListItemText primary={q} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}
                </Box>
              )}
            </Paper>
          )}

          {/* Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              startIcon={<NavigateBefore />}
              disabled={currentQuestionIndex === 0}
              onClick={() => {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
                setShowAnswer(false);
              }}
            >
              Previous
            </Button>
            <Button
              endIcon={<NavigateNext />}
              disabled={currentQuestionIndex === topicQuestions.length - 1}
              onClick={() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setShowAnswer(false);
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );

  // Render Companies Tab
  const renderCompaniesTab = () => (
    <Box>
      {!selectedCompany ? (
        <Grid container spacing={3}>
          {companies.map((company) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={company.id}>
              <Card
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  borderLeft: `4px solid ${company.color}`,
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                }}
                onClick={() => setSelectedCompany(company)}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: company.color, width: 56, height: 56 }}>
                      <Typography variant="h5">{company.icon}</Typography>
                    </Avatar>
                    <Box>
                      <Typography variant="h6">{company.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {companyProblems[company.id]?.length || 0} problems
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box>
          <Button
            startIcon={<NavigateBefore />}
            onClick={() => setSelectedCompany(null)}
            sx={{ mb: 3 }}
          >
            Back to Companies
          </Button>

          <Typography variant="h5" gutterBottom>
            {selectedCompany.icon} {selectedCompany.name} Interview Problems
          </Typography>

          <Grid container spacing={2}>
            {companyProblems[selectedCompany.id]?.map((problem) => (
              <Grid size={{ xs: 12, sm: 6 }} key={problem.id}>
                <Card variant="outlined">
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography variant="subtitle1">{problem.title}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {problem.topic}
                        </Typography>
                      </Box>
                      <Chip
                        label={problem.difficulty}
                        color={getDifficultyColor(problem.difficulty)}
                        size="small"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );

  // Render Mock Interviews Tab
  const renderMockTab = () => (
    <Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Practice with timed mock interviews simulating real interview conditions
      </Typography>

      <Grid container spacing={3}>
        {mockInterviews.map((mock) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={mock.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {mock.title}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                  <Chip
                    icon={<Timer />}
                    label={`${mock.duration} min`}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={`${mock.questionCount} questions`}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={mock.difficulty}
                    color={getDifficultyColor(mock.difficulty)}
                    size="small"
                  />
                </Box>

                <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
                  Topics: {mock.topics.join(', ')}
                </Typography>

                <Button
                  variant="contained"
                  startIcon={<PlayArrow />}
                  onClick={() => startMockInterview(mock)}
                  fullWidth
                >
                  Start Interview
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Mock Interview Dialog */}
      <Dialog
        open={mockMode}
        onClose={() => setMockMode(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">{selectedMock?.title}</Typography>
            <Chip
              icon={<Timer />}
              label={`${Math.floor(mockTimer / 60)}:${(mockTimer % 60).toString().padStart(2, '0')}`}
              color="primary"
            />
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Mock interview mode! Answer questions as if in a real interview.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Tip: Explain your thought process out loud.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setMockMode(false)}>End Interview</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Business /> Interview Prep
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Master Python interviews with curated questions, company-specific problems, and mock interviews
        </Typography>
      </Box>

      {/* Tabs */}
      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={(e, v) => {
            setActiveTab(v);
            setSelectedTopic(null);
            setSelectedCompany(null);
          }}
          variant="fullWidth"
        >
          <Tab icon={<Code />} label="By Topic" />
          <Tab icon={<Business />} label="By Company" />
          <Tab icon={<Timer />} label="Mock Interview" />
        </Tabs>
      </Paper>

      {/* Tab Content */}
      {activeTab === 0 && renderTopicsTab()}
      {activeTab === 1 && renderCompaniesTab()}
      {activeTab === 2 && renderMockTab()}
    </Container>
  );
});

export default InterviewPrep;
