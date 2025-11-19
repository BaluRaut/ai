import { useParams, useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Paper,
  Breadcrumbs,
  Link,
  Button,
  Chip,
  Divider,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  NavigateNext,
  CheckCircle,
  Cancel,
  ArrowBack,
  ArrowForward,
  Bookmark,
  BookmarkBorder,
  ExpandMore,
  Lightbulb,
  Warning,
  Code,
  Quiz as QuizIcon,
  Download,
} from '@mui/icons-material';
import { learningPaths, courseData } from '../../data/courseContent';
import extendedQuizzes from '../../data/extendedQuizzes';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import Quiz from '../../components/Quiz/Quiz';
import { useProgress } from '../../context/ProgressContext';
import { useState, useMemo } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { useTranslation } from 'react-i18next';

const TopicDetail = () => {
  const { pathId, topicId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { markTopicComplete, isTopicComplete, toggleBookmark, isBookmarked } = useProgress();
  const [showQuiz, setShowQuiz] = useState(false);
  const { t } = useTranslation();

  const path = learningPaths.find(p => p.id === pathId);
  const topics = courseData[pathId]?.topics || [];
  const topic = topics.find(t => t.id === topicId);
  const currentIndex = topics.findIndex(t => t.id === topicId);

  // Merge basic quizzes with extended quizzes
  const allQuizzes = useMemo(() => {
    const basicQuiz = topic?.quiz || [];
    const extendedQuiz = extendedQuizzes[topicId] || [];
    return [...basicQuiz, ...extendedQuiz];
  }, [topic, topicId]);

  if (!topic || !path) {
    return (
      <Container>
        <Typography variant="h4">Topic not found</Typography>
      </Container>
    );
  }

  const previousTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

  const completed = isTopicComplete(topicId);
  const bookmarked = isBookmarked(topicId);

  // Check if this is a mini project
  const isMiniProject = topic.id?.includes('project') || topic.title?.includes('Mini Project');

  // Download project files as ZIP
  const handleDownloadProject = async () => {
    const zip = new JSZip();
    
    // Create README
    const readme = `# ${topic.title}

${topic.description}

## Prerequisites
${topic.prerequisites ? topic.prerequisites.map(p => `- ${p}`).join('\n') : 'Basic Python knowledge'}

## Estimated Time
${topic.estimatedTime}

## Setup Instructions

1. Create a virtual environment:
   \`\`\`bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\\Scripts\\activate
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

3. Follow the instructions in each Python file to understand the project structure.

## Project Structure

${topic.content?.fileStructure || 'See individual files for details'}

## Running the Project

Check the main.py or run.py file for the entry point.

---
Generated from Python Learning Platform
`;
    
    zip.file('README.md', readme);
    
    // Add all code examples as separate files
    if (topic.content?.codeExamples) {
      topic.content.codeExamples.forEach((example, index) => {
        // Extract filename from title or use a default
        let filename = 'example_' + (index + 1);
        
        // Try to extract filename from title
        const titleMatch = example.title.match(/\(([\w/.]+\.[\w]+)\)/);
        if (titleMatch) {
          filename = titleMatch[1];
        } else if (example.title.toLowerCase().includes('requirement')) {
          filename = 'requirements.txt';
        } else if (example.title.toLowerCase().includes('config')) {
          filename = 'config.py';
        } else if (example.title.toLowerCase().includes('main')) {
          filename = 'main.py';
        } else if (example.title.toLowerCase().includes('.py')) {
          const pyMatch = example.title.match(/([\w_]+\.py)/);
          if (pyMatch) filename = pyMatch[1];
        }
        
        // Add explanation as comments at the top
        const fileContent = `"""
${example.title}

${example.explanation}
"""

${example.code}
`;
        
        zip.file(filename, fileContent);
      });
    }
    
    // Add .env.example if it's a project that needs it
    if (topic.title.includes('API') || topic.title.includes('Weather') || topic.title.includes('Chat')) {
      const envExample = `# Environment Variables
# Copy this file to .env and fill in your values

# Add your configuration here
# Example:
# API_KEY=your_api_key_here
# SECRET_KEY=your_secret_key_here
`;
      zip.file('.env.example', envExample);
    }
    
    // Add .gitignore
    const gitignore = `# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
venv/
env/
ENV/

# IDE
.vscode/
.idea/
*.swp
*.swo

# Environment
.env

# Data
*.db
*.sqlite
*.log
data/cache/
`;
    zip.file('.gitignore', gitignore);
    
    // Generate and download ZIP
    const blob = await zip.generateAsync({ type: 'blob' });
    const projectName = topic.title.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
    saveAs(blob, `${projectName}.zip`);
  };

  const handleComplete = () => {
    markTopicComplete(topicId);
    if (nextTopic) {
      navigate(`/path/${pathId}/topic/${nextTopic.id}`);
    }
  };

  return (
    <Box sx={{ px: isMobile ? 2 : 4, py: 3 }}>
      <Breadcrumbs separator={<NavigateNext fontSize="small" />} sx={{ mb: 3 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href={`/path/${pathId}`}>
          {path.title}
        </Link>
        <Typography color="text.primary">{topic.title}</Typography>
      </Breadcrumbs>

      {/* Header */}
      <Paper elevation={3} sx={{ p: isMobile ? '16px 4px' : 3, mb: isMobile ? 3 : 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {topic.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {topic.description}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            {isMiniProject && (
              <Tooltip title={t('topic.downloadProject')}>
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  onClick={handleDownloadProject}
                  color="primary"
                  size={isMobile ? "small" : "medium"}
                >
                  {t('topic.downloadProject')}
                </Button>
              </Tooltip>
            )}
            {completed && (
              <Chip
                icon={<CheckCircle />}
                label={t('topic.completed')}
                color="success"
              />
            )}
            <Tooltip title={bookmarked ? t('topic.removeBookmark') : t('topic.bookmark')}>
              <IconButton onClick={() => toggleBookmark(topicId)} color={bookmarked ? 'primary' : 'default'}>
                {bookmarked ? <Bookmark /> : <BookmarkBorder />}
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Paper>

      {/* Overview */}
      <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          📚 {t('topic.overview')}
        </Typography>
        <Box sx={{ '& > *': { mb: 2 } }}>
          {topic.content.overview.split('\n\n').map((paragraph, idx) => {
            // Handle bold text with **
            if (paragraph.startsWith('**') && paragraph.includes(':**')) {
              const [heading, ...content] = paragraph.split(':**');
              return (
                <Box key={idx}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    {heading.replace(/\*\*/g, '')}:
                  </Typography>
                  {content.join(':**').split('\n').filter(line => line.trim()).map((line, i) => (
                    <Typography key={i} variant="body2" sx={{ ml: line.startsWith('•') ? 2 : 0, mb: 0.5 }}>
                      {line.trim()}
                    </Typography>
                  ))}
                </Box>
              );
            }
            // Regular paragraphs
            return (
              <Typography key={idx} variant="body1">
                {paragraph}
              </Typography>
            );
          })}
        </Box>

        <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
          {t('topic.keyPoints')}
        </Typography>
        <List>
          {topic.content.keyPoints.map((point, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircle color="primary" />
              </ListItemIcon>
              <ListItemText primary={point} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* File Structure - For Mini Projects */}
      {isMiniProject && topic.content.fileStructure && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            📁 {t('topic.fileStructure', 'File Structure')}
          </Typography>
          <Box sx={{ 
            bgcolor: 'grey.100', 
            p: 2, 
            borderRadius: 1,
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            overflowX: 'auto',
            whiteSpace: 'pre'
          }}>
            <Typography component="pre" sx={{ m: 0, fontFamily: 'inherit', fontSize: 'inherit' }}>
              {topic.content.fileStructure}
            </Typography>
          </Box>
        </Paper>
      )}

      {/* Key Concepts - For Mini Projects */}
      {isMiniProject && topic.content.concepts && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            🔑 {t('topic.concepts', 'Key Concepts')}
          </Typography>
          {topic.content.concepts.map((concept, index) => (
            <Card key={index} variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  {concept.name}
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>What it is:</strong> {concept.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Why it matters:</strong> {concept.why}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Paper>
      )}

      {/* Use Cases */}
      {topic.content.useCases && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            💡 Real-World Use Cases
          </Typography>
          {topic.content.useCases.map((useCase, index) => (
            <Card key={index} variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  {useCase.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {useCase.description}
                </Typography>
                <Chip label={`Example: ${useCase.example}`} size="small" variant="outlined" />
              </CardContent>
            </Card>
          ))}
        </Paper>
      )}

      {/* Do's and Don'ts */}
      {(topic.content.dos || topic.content.donts) && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            ✅ Do's and Don'ts
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mt: 2 }}>
            {topic.content.dos && (
              <Box>
                <Typography variant="h6" color="success.main" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircle /> Do's
                </Typography>
                <List>
                  {topic.content.dos.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
            {topic.content.donts && (
              <Box>
                <Typography variant="h6" color="error.main" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Cancel /> Don'ts
                </Typography>
                <List>
                  {topic.content.donts.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Cancel color="error" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </Box>
        </Paper>
      )}

      {/* Best Practices */}
      {topic.content.bestPractices && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Lightbulb color="warning" /> Best Practices
          </Typography>
          
          {/* Handle array format (simple list) */}
          {Array.isArray(topic.content.bestPractices) && (
            <List>
              {topic.content.bestPractices.map((practice, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Lightbulb color="warning" />
                  </ListItemIcon>
                  <ListItemText primary={practice} />
                </ListItem>
              ))}
            </List>
          )}
          
          {/* Handle object format (categorized) */}
          {!Array.isArray(topic.content.bestPractices) && topic.content.bestPractices && (
            <Box>
              {Object.entries(topic.content.bestPractices).map(([category, practices], idx) => (
                <Box key={idx} sx={{ mb: 3 }}>
                  <Typography variant="h6" color="primary" gutterBottom sx={{ textTransform: 'capitalize' }}>
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  <List>
                    {practices.map((practice, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircle color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={practice} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Box>
          )}
        </Paper>
      )}

      {/* Real-World Applications - For projects with detailed structure */}
      {isMiniProject && topic.content.realWorldApplications && !Array.isArray(topic.content.realWorldApplications) && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            🌍 {t('topic.realWorldApplications', 'Real-World Applications')}
          </Typography>
          {topic.content.realWorldApplications.description && (
            <Typography variant="body1" paragraph>
              {topic.content.realWorldApplications.description}
            </Typography>
          )}
          {topic.content.realWorldApplications.examples && (
            <Box sx={{ mt: 2 }}>
              {topic.content.realWorldApplications.examples.map((example, index) => (
                <Card key={index} variant="outlined" sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {example.domain}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      <strong>Apps:</strong> {Array.isArray(example.apps) ? example.apps.join(', ') : example.apps}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Features:</strong> {example.features}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
        </Paper>
      )}

      {/* Practice Exercises - For projects */}
      {isMiniProject && topic.content.practiceExercises && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            💪 Practice Exercises
          </Typography>
          {topic.content.practiceExercises.map((exercise, index) => (
            <Card key={index} variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" color="primary">
                    {exercise.title}
                  </Typography>
                  <Chip 
                    label={exercise.difficulty} 
                    size="small" 
                    color={
                      exercise.difficulty === 'easy' ? 'success' : 
                      exercise.difficulty === 'medium' ? 'warning' : 
                      'error'
                    }
                  />
                </Box>
                <Typography variant="body2" paragraph>
                  {exercise.description}
                </Typography>
                {exercise.hints && Array.isArray(exercise.hints) && exercise.hints.length > 0 && (
                  <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      💡 {t('topic.hints', 'Hints')}:
                    </Typography>
                    <List dense>
                      {exercise.hints.map((hint, i) => (
                        <ListItem key={i}>
                          <ListItemText 
                            primary={hint}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </Paper>
      )}

      {/* Code Examples */}
      {topic.content.codeExamples && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Code /> Code Examples
          </Typography>
          {topic.content.codeExamples.map((example, index) => (
            <Accordion key={index} defaultExpanded={index === 0}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">{example.title}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: isMobile ? '8px 0px 23px' : 2 }}>
                <Typography variant="body2" paragraph>
                  {example.explanation}
                </Typography>
                <CodeBlock code={example.code} />
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      )}

      {/* Interactive Code Editor */}
      <Paper elevation={2} sx={{ p: isMobile ? 2 : 3, mb: 3 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Code /> Try It Yourself - Interactive Python Editor
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Write and run Python code directly in your browser. Experiment with the concepts you've learned!
        </Typography>
        <CodeEditor 
          initialCode={
            topic.content.codeExamples && topic.content.codeExamples.length > 0 
              ? topic.content.codeExamples[0].code 
              : `# Write your Python code here
print("Hello, Python!")

# Try some examples:
# Variables
name = "Learner"
age = 25
print(f"My name is {name} and I am {age} years old")

# Lists
fruits = ["apple", "banana", "cherry"]
print("Fruits:", fruits)
`
          }
          height="500px"
        />
      </Paper>

      {/* Quiz Section */}
      {allQuizzes.length > 0 && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          {!showQuiz ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <QuizIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Ready to Test Your Knowledge?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Take the quiz to reinforce what you've learned
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => setShowQuiz(true)}
                startIcon={<QuizIcon />}
              >
                Start Quiz ({allQuizzes.length} Questions)
              </Button>
            </Box>
          ) : (
            <Quiz questions={allQuizzes} topicId={topicId} />
          )}
        </Paper>
      )}

      {/* Navigation */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => navigate(`/path/${pathId}/topic/${previousTopic.id}`)}
          disabled={!previousTopic}
        >
          Previous
        </Button>

        {!completed && (
          <Button
            variant="contained"
            color="success"
            onClick={handleComplete}
            startIcon={<CheckCircle />}
          >
            Mark as Complete
          </Button>
        )}

        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          onClick={() => navigate(`/path/${pathId}/topic/${nextTopic.id}`)}
          disabled={!nextTopic}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default TopicDetail;
