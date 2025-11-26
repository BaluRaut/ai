import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Alert,
  Button,
  LinearProgress,
  useTheme
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Code as CodeIcon,
  Psychology as PsychologyIcon,
  Architecture as ArchitectureIcon,
  Groups as GroupsIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  TipsAndUpdates as TipsIcon,
  School as SchoolIcon,
  Star as StarIcon
} from '@mui/icons-material';
import {
  codingChallenges,
  mlTheoryQuestions,
  mlSystemDesign,
  behavioralQuestions,
  interviewPreparation
} from '../../data/interview';
import CodeBlock from '../../components/CodeBlock/CodeBlock';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`interview-tabpanel-${index}`}
      aria-labelledby={`interview-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const difficultyColors = {
  Easy: 'success',
  Medium: 'warning',
  Hard: 'error'
};

function InterviewPrep() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [completedProblems, setCompletedProblems] = useState(new Set());

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const toggleProblemComplete = (problemId) => {
    setCompletedProblems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(problemId)) {
        newSet.delete(problemId);
      } else {
        newSet.add(problemId);
      }
      return newSet;
    });
  };

  // Coding Challenges Tab
  const CodingTab = () => {
    const difficulties = [
      { level: 'Easy', description: 'Great for warming up', problems: codingChallenges.easy || [] },
      { level: 'Medium', description: 'Common interview level', problems: codingChallenges.medium || [] },
      { level: 'Hard', description: 'Challenge yourself', problems: codingChallenges.hard || [] }
    ];

    return (
      <Box>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CodeIcon color="primary" />
          Coding Challenges
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Practice these LeetCode-style problems commonly asked in data science and ML engineering interviews.
        </Typography>

        {difficulties.map((difficulty) => (
          <Box key={difficulty.level} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip 
                label={difficulty.level} 
                color={difficultyColors[difficulty.level]} 
                size="small" 
              />
              {difficulty.description}
            </Typography>

            {difficulty.problems.map((problem) => (
              <Accordion key={problem.id} sx={{ mb: 1 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
                    <Button
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleProblemComplete(problem.id);
                      }}
                    >
                      <CheckCircleIcon 
                        color={completedProblems.has(problem.id) ? 'success' : 'disabled'} 
                      />
                    </Button>
                    <Typography sx={{ flexGrow: 1 }}>{problem.title}</Typography>
                    <Chip label={problem.category || 'Algorithm'} size="small" variant="outlined" />
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" paragraph>{problem.description}</Typography>
                  
                  {problem.examples && problem.examples.length > 0 && (
                    <>
                      <Typography variant="subtitle2" gutterBottom>Examples:</Typography>
                      {problem.examples.map((ex, idx) => (
                        <Paper key={idx} sx={{ p: 2, bgcolor: 'grey.100', mb: 2 }}>
                          <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
                            Input: {ex.input}{'\n'}Output: {ex.output}
                            {ex.explanation && `\nExplanation: ${ex.explanation}`}
                          </Typography>
                        </Paper>
                      ))}
                    </>
                  )}

                  <Typography variant="subtitle2" gutterBottom>Solution:</Typography>
                  <CodeBlock code={problem.solution} language="python" />
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}
      </Box>
    );
  };

  // ML Theory Tab
  const MLTheoryTab = () => {
    const categories = [
      { id: 'fundamentals', title: 'ML Fundamentals', questions: mlTheoryQuestions.fundamentals || [] },
      { id: 'algorithms', title: 'Algorithms', questions: mlTheoryQuestions.algorithms || [] },
      { id: 'deep-learning', title: 'Deep Learning', questions: mlTheoryQuestions.deepLearning || [] },
      { id: 'practical', title: 'Practical ML', questions: mlTheoryQuestions.practical || [] }
    ];

    return (
      <Box>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PsychologyIcon color="primary" />
          ML Theory Questions
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Master these fundamental ML concepts frequently asked in interviews.
        </Typography>

        {categories.map((category) => (
          <Box key={category.id} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
              {category.title}
            </Typography>

            {category.questions.map((q) => (
              <Accordion key={q.id} sx={{ mb: 1 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Chip 
                      label={q.difficulty} 
                      color={difficultyColors[q.difficulty]} 
                      size="small" 
                    />
                    <Typography>{q.question}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Paper sx={{ p: 2, bgcolor: 'success.50', mb: 2, borderLeft: 3, borderColor: 'success.main' }}>
                    <Typography variant="subtitle2" color="success.dark" gutterBottom>
                      Answer:
                    </Typography>
                    <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                      {q.answer}
                    </Typography>
                  </Paper>

                  {q.keyPoints && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>Key Points:</Typography>
                      <List dense>
                        {q.keyPoints.map((point, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <StarIcon fontSize="small" color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={point} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}

                  {q.followUp && (
                    <Alert severity="info" sx={{ mt: 2 }}>
                      <Typography variant="subtitle2">Follow-up Question:</Typography>
                      <Typography variant="body2">{q.followUp}</Typography>
                    </Alert>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}
      </Box>
    );
  };

  // System Design Tab
  const SystemDesignTab = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ArchitectureIcon color="primary" />
        ML System Design
      </Typography>
      
      <Paper sx={{ p: 2, mb: 3, bgcolor: 'info.50' }}>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {mlSystemDesign.overview}
        </Typography>
      </Paper>

      {mlSystemDesign.problems.map((problem) => (
        <Card key={problem.id} sx={{ mb: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">{problem.title}</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip label={problem.difficulty} color={difficultyColors[problem.difficulty]} />
                <Chip label={problem.duration} icon={<ScheduleIcon />} variant="outlined" />
              </Box>
            </Box>
            
            <Typography variant="body2" color="text.secondary" paragraph>
              {problem.description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Companies: {problem.company}
            </Typography>

            <Accordion sx={{ mt: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Clarifying Questions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List dense>
                  {problem.clarifyingQuestions.map((q, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <TipsIcon fontSize="small" color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={q} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Requirements</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" color="primary" gutterBottom>
                      Functional Requirements
                    </Typography>
                    <List dense>
                      {problem.requirements.functional.map((req, idx) => (
                        <ListItem key={idx}>
                          <ListItemText primary={`• ${req}`} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" color="secondary" gutterBottom>
                      Non-Functional Requirements
                    </Typography>
                    <List dense>
                      {problem.requirements.nonFunctional.map((req, idx) => (
                        <ListItem key={idx}>
                          <ListItemText primary={`• ${req}`} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Full Solution</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography 
                  variant="body2" 
                  component="div"
                  sx={{ 
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'monospace',
                    fontSize: '0.85rem'
                  }}
                >
                  {problem.solution}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" gutterBottom>Key Takeaways:</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {problem.keyTakeaways.map((takeaway, idx) => (
                  <Chip 
                    key={idx} 
                    label={takeaway} 
                    size="small" 
                    variant="outlined"
                    color="primary"
                  />
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  // Behavioral Tab
  const BehavioralTab = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <GroupsIcon color="primary" />
        Behavioral Questions
      </Typography>
      
      <Paper sx={{ p: 2, mb: 3, bgcolor: 'info.50' }}>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {behavioralQuestions.overview}
        </Typography>
      </Paper>

      {Object.entries(behavioralQuestions.categories).map(([key, category]) => (
        <Box key={key} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
            {category.title}
          </Typography>

          {category.questions.map((q) => (
            <Accordion key={q.id} sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="medium">{q.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>Tips:</Typography>
                  <List dense>
                    {q.tips.map((tip, idx) => (
                      <ListItem key={idx}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <TipsIcon fontSize="small" color="warning" />
                        </ListItemIcon>
                        <ListItemText primary={tip} />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Paper sx={{ p: 2, bgcolor: 'grey.50', borderLeft: 3, borderColor: 'primary.main' }}>
                  <Typography variant="subtitle2" gutterBottom>Example Answer Structure:</Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ whiteSpace: 'pre-line', fontFamily: 'monospace' }}
                  >
                    {q.exampleStructure}
                  </Typography>
                </Paper>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ))}

      <Divider sx={{ my: 4 }} />

      {/* Questions to Ask */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        {behavioralQuestions.questionsToAsk.title}
      </Typography>
      <Grid container spacing={2}>
        {behavioralQuestions.questionsToAsk.categories.map((cat) => (
          <Grid item xs={12} md={6} key={cat.name}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {cat.name}
                </Typography>
                <List dense>
                  {cat.questions.map((q, idx) => (
                    <ListItem key={idx}>
                      <ListItemText primary={`• ${q}`} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  // Study Plan Tab
  const StudyPlanTab = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SchoolIcon color="primary" />
        4-Week Study Plan
      </Typography>

      <Grid container spacing={3}>
        {interviewPreparation.studyPlan.weeks.map((week) => (
          <Grid item xs={12} md={6} key={week.week}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Chip label={`Week ${week.week}`} color="primary" />
                  <Typography variant="h6">{week.focus}</Typography>
                </Box>
                <List dense>
                  {week.tasks.map((task, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon fontSize="small" color="disabled" />
                      </ListItemIcon>
                      <ListItemText primary={task} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Recommended Resources
      </Typography>
      <Grid container spacing={2}>
        {interviewPreparation.resources.map((resource) => (
          <Grid item xs={12} md={6} lg={3} key={resource.name}>
            <Card>
              <CardContent>
                <Chip label={resource.type} size="small" sx={{ mb: 1 }} />
                <Typography variant="subtitle1">{resource.name}</Typography>
                {resource.author && (
                  <Typography variant="caption" color="text.secondary">
                    by {resource.author}
                  </Typography>
                )}
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {resource.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          🎯 Interview Preparation
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Comprehensive preparation for Data Science and Machine Learning interviews
        </Typography>
      </Box>

      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab icon={<CodeIcon />} label="Coding" />
          <Tab icon={<PsychologyIcon />} label="ML Theory" />
          <Tab icon={<ArchitectureIcon />} label="System Design" />
          <Tab icon={<GroupsIcon />} label="Behavioral" />
          <Tab icon={<SchoolIcon />} label="Study Plan" />
        </Tabs>
      </Paper>

      <TabPanel value={activeTab} index={0}>
        <CodingTab />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <MLTheoryTab />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <SystemDesignTab />
      </TabPanel>
      <TabPanel value={activeTab} index={3}>
        <BehavioralTab />
      </TabPanel>
      <TabPanel value={activeTab} index={4}>
        <StudyPlanTab />
      </TabPanel>
    </Container>
  );
}

export default InterviewPrep;
