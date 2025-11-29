import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Fab,
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
  Schedule,
  SignalCellularAlt,
  Link as LinkIcon,
  SmartToy,
} from '@mui/icons-material';
import { learningPaths, courseData } from '../../data/courseContent';
import extendedQuizzes from '../../data/extendedQuizzes';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import CodeSandbox from '../../components/CodeSandbox/CodeSandbox';
import Quiz from '../../components/Quiz/Quiz';
import AITutor from '../../components/AITutor/AITutor';
import NeuralNetworkViz from '../../components/Visualizations/NeuralNetworkViz';
import PracticeAssignments from '../../components/PracticeAssignments/PracticeAssignments';
import { useProgress } from '../../context/ProgressContext';
import { useCourseTranslation } from '../../hooks/useCourseTranslation';
import { useState, useMemo, useEffect } from 'react';
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
  const [showAITutor, setShowAITutor] = useState(false);
  const { t } = useTranslation();
  const { mergeTopicWithTranslation } = useCourseTranslation();

  // Reset AI Tutor when topic changes
  useEffect(() => {
    setShowAITutor(false);
    setShowQuiz(false);
    // Scroll to top when topic changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [topicId, pathId]);

  const path = learningPaths.find(p => p.id === pathId);
  const topics = courseData[pathId]?.topics || [];
  
  // Debug logging
  console.log('Looking for topic:', { pathId, topicId, topicIdType: typeof topicId });
  console.log('Available topics:', topics.map(t => ({ id: t.id, idType: typeof t.id, title: t.title })));
  
  const originalTopic = topics.find(t => String(t.id) === String(topicId));
  
  console.log('Found topic:', originalTopic?.title || 'NOT FOUND');
  
  // Get translated topic
  const topic = originalTopic ? mergeTopicWithTranslation(originalTopic, pathId) : null;
  const currentIndex = topics.findIndex(t => String(t.id) === String(topicId));

  // Normalize topic content - some topics have data in content, others directly on topic
  const topicContent = useMemo(() => {
    if (!topic) return {};
    return {
      overview: topic.content?.overview || topic.overview || '',
      keyPoints: topic.content?.keyPoints || topic.keyPoints || [],
      useCases: topic.content?.useCases || topic.useCases || [],
      codeExamples: topic.content?.codeExamples || topic.codeExamples || [],
      dos: topic.content?.dos || topic.dos || [],
      donts: topic.content?.donts || topic.donts || [],
      diagram: topic.content?.diagram || topic.diagram,
      comparisonTable: topic.content?.comparisonTable || topic.comparisonTable,
      fileStructure: topic.content?.fileStructure || topic.fileStructure,
      concepts: topic.content?.concepts || topic.concepts || [],
      exercises: topic.content?.exercises || topic.exercises || [],
    };
  }, [topic]);

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
  const isMiniProject = String(topic?.id || '').includes('project') || topic?.title?.includes('Mini Project');

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
      topicContent.codeExamples.forEach((example, index) => {
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

  // Get difficulty color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner': return 'success';
      case 'intermediate': return 'warning';
      case 'advanced': return 'error';
      case 'professional': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ 
      px: isMobile ? 2 : 4, 
      py: 3,
      minHeight: '100vh',
      bgcolor: 'background.default'
    }}>
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
            <Typography variant="h6" color="text.secondary" paragraph>
              {topic.description}
            </Typography>
            
            {/* Metadata Chips */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
              {topic.difficulty && (
                <Chip
                  icon={<SignalCellularAlt />}
                  label={topic.difficulty}
                  color={getDifficultyColor(topic.difficulty)}
                  variant="filled"
                />
              )}
              {topic.estimatedTime && (
                <Chip
                  icon={<Schedule />}
                  label={`${topic.estimatedTime} minutes`}
                  color="primary"
                  variant="outlined"
                />
              )}
            </Box>

            {/* Prerequisites */}
            {topic.prerequisites && topic.prerequisites.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Prerequisites:</strong>
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {topic.prerequisites.map((prereqId, idx) => {
                    const prereqTopic = topics.find(t => t.id === prereqId);
                    return (
                      <Chip
                        key={idx}
                        label={prereqTopic?.title || prereqId}
                        size="small"
                        variant="outlined"
                        icon={<LinkIcon />}
                        onClick={() => navigate(`/path/${pathId}/topic/${prereqId}`)}
                        sx={{ cursor: 'pointer' }}
                      />
                    );
                  })}
                </Box>
              </Box>
            )}
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
          {topicContent.overview.split('\n\n').map((paragraph, idx) => {
            // Handle bold text with **
            if (paragraph.startsWith('**') && paragraph.includes(':**')) {
              const [heading, ...content] = paragraph.split(':**');
              return (
                <Box key={idx}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    {heading.replace(/\*\*/g, '')}:
                  </Typography>
                  {content.join(':**').split('\n').filter(line => line.trim()).map((line, i) => (
                    <Typography 
                      key={i} 
                      variant="body2" 
                      component="li"
                      sx={{ 
                        ml: line.trim().startsWith('-') || line.trim().startsWith('•') ? 4 : 2, 
                        mb: 0.5,
                        listStyleType: line.trim().startsWith('-') || line.trim().startsWith('•') ? 'disc' : 'none',
                        display: 'list-item'
                      }}
                    >
                      {line.trim().replace(/^[-•]\s*/, '')}
                    </Typography>
                  ))}
                </Box>
              );
            }
            
            // Handle inline bold text (**text**)
            const parts = paragraph.split(/(\*\*.*?\*\*)/g);
            const hasInlineBold = parts.some(part => part.startsWith('**') && part.endsWith('**'));
            
            if (hasInlineBold) {
              return (
                <Typography key={idx} variant="body1" component="div">
                  {parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return (
                        <Box key={i} component="span" sx={{ fontWeight: 700 }}>
                          {part.replace(/\*\*/g, '')}
                        </Box>
                      );
                    }
                    return <span key={i}>{part}</span>;
                  })}
                </Typography>
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
          {topicContent.keyPoints.map((point, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircle color="primary" />
              </ListItemIcon>
              <ListItemText primary={point} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Diagram - Visual Representation */}
      {topicContent.diagram && (
        <Paper elevation={2} sx={{ p: isMobile ? 2 : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            🎨 {topicContent.diagram.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {topicContent.diagram.description}
          </Typography>
          
          {topicContent.diagram.type === 'nested-circles' && (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              py: 4,
              position: 'relative',
              minHeight: 400
            }}>
              {/* Nested circles visualization */}
              {topicContent.diagram.layers.map((layer, index) => {
                const size = 350 - (index * 100);
                const opacity = 0.3 - (index * 0.05);
                return (
                  <Box
                    key={index}
                    sx={{
                      position: 'absolute',
                      width: size,
                      height: size,
                      borderRadius: '50%',
                      border: `3px solid ${layer.color}`,
                      bgcolor: `${layer.color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: topicContent.diagram.layers.length - index,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        zIndex: 100
                      }
                    }}
                  >
                    <Typography 
                      variant={index === 0 ? 'h6' : index === 1 ? 'subtitle1' : 'body1'}
                      fontWeight={600}
                      sx={{ 
                        color: layer.color,
                        textAlign: 'center',
                        px: 2,
                        mb: 0.5
                      }}
                    >
                      {layer.label}
                    </Typography>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        textAlign: 'center',
                        px: 2,
                        color: 'text.secondary',
                        fontSize: index === 2 ? '0.65rem' : '0.75rem'
                      }}
                    >
                      {layer.description}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          )}
          
          {/* Legend */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mt: 3 }}>
            {topicContent.diagram.layers.map((layer, index) => (
              <Chip
                key={index}
                label={layer.label}
                sx={{
                  bgcolor: layer.color,
                  color: 'white',
                  fontWeight: 600
                }}
              />
            ))}
          </Box>
        </Paper>
      )}

      {/* Comparison Table */}
      {topicContent.comparisonTable && (
        <Paper elevation={2} sx={{ p: isMobile ? 1 : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ px: isMobile ? 2 : 0, pt: isMobile ? 2 : 0 }}>
            📊 {topicContent.comparisonTable.title}
          </Typography>
          <TableContainer sx={{ mt: 2 }}>
            <Table size={isMobile ? 'small' : 'medium'}>
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  {topicContent.comparisonTable.headers.map((header, index) => (
                    <TableCell 
                      key={index}
                      sx={{ 
                        color: 'white',
                        fontWeight: 700,
                        fontSize: isMobile ? '0.75rem' : '0.875rem',
                        whiteSpace: isMobile ? 'normal' : 'nowrap'
                      }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {(() => {
                  // Handle both row array format and object field format
                  const rows = topicContent.comparisonTable.rows || 
                    Object.entries(topicContent.comparisonTable)
                      .filter(([key]) => !['title', 'headers'].includes(key))
                      .map(([, value]) => value);
                  
                  return rows.map((row, rowIndex) => (
                    <TableRow 
                      key={rowIndex}
                      sx={{ 
                        '&:nth-of-type(odd)': { bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50' },
                        '&:hover': { bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100' }
                      }}
                    >
                      {row.map((cell, cellIndex) => (
                        <TableCell 
                          key={cellIndex}
                          sx={{
                            fontWeight: cellIndex === 0 ? 600 : 400,
                            fontSize: isMobile ? '0.7rem' : '0.875rem',
                            color: cellIndex === 0 ? 'primary.main' : 'text.primary'
                          }}
                        >
                          {cell}
                        </TableCell>
                      ))}
                    </TableRow>
                  ));
                })()}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}

      {/* File Structure - For Mini Projects */}
      {isMiniProject && topicContent.fileStructure && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            📁 {t('topic.fileStructure', 'File Structure')}
          </Typography>
          <Box sx={{ 
            bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
            p: 2, 
            borderRadius: 1,
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            overflowX: 'auto',
            whiteSpace: 'pre'
          }}>
            <Typography component="pre" sx={{ m: 0, fontFamily: 'inherit', fontSize: 'inherit' }}>
              {topicContent.fileStructure}
            </Typography>
          </Box>
        </Paper>
      )}

      {/* Key Concepts - For Mini Projects */}
      {isMiniProject && topicContent.concepts && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            🔑 {t('topic.concepts', 'Key Concepts')}
          </Typography>
          {topicContent.concepts.map((concept, index) => (
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
      {topicContent.useCases && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            💡 Real-World Use Cases
          </Typography>
          {Object.values(topicContent.useCases).map((useCase, index) => (
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
      {(topicContent.dos || topicContent.donts) && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            ✅ Do's and Don'ts
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mt: 2 }}>
            {topicContent.dos && (
              <Box>
                <Typography variant="h6" color="success.main" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircle /> Do's
                </Typography>
                <List>
                  {topicContent.dos.map((item, index) => (
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
            {topicContent.donts && (
              <Box>
                <Typography variant="h6" color="error.main" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Cancel /> Don'ts
                </Typography>
                <List>
                  {topicContent.donts.map((item, index) => (
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
      {topicContent.bestPractices && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Lightbulb color="warning" /> Best Practices
          </Typography>
          
          {/* Handle array format (simple list) */}
          {Array.isArray(topicContent.bestPractices) && (
            <List>
              {topicContent.bestPractices.map((practice, index) => (
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
          {!Array.isArray(topicContent.bestPractices) && topicContent.bestPractices && (
            <Box>
              {Object.entries(topicContent.bestPractices).map(([category, practices], idx) => (
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
      {isMiniProject && topicContent.realWorldApplications && !Array.isArray(topicContent.realWorldApplications) && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            🌍 {t('topic.realWorldApplications', 'Real-World Applications')}
          </Typography>
          {topicContent.realWorldApplications.description && (
            <Typography variant="body1" paragraph>
              {topicContent.realWorldApplications.description}
            </Typography>
          )}
          {topicContent.realWorldApplications.examples && (
            <Box sx={{ mt: 2 }}>
              {topicContent.realWorldApplications.examples.map((example, index) => (
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
      {isMiniProject && topicContent.practiceExercises && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            💪 Practice Exercises
          </Typography>
          {topicContent.practiceExercises.map((exercise, index) => (
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
                  <Box sx={{ mt: 2, p: 2, bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50', borderRadius: 1 }}>
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
      {topicContent.codeExamples && (
        <Paper elevation={2} sx={{ p: isMobile ? '16px 4px' : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Code /> Code Examples
          </Typography>
          {topicContent.codeExamples.map((example, index) => (
            <Accordion key={index} defaultExpanded={index === 0}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">{example.title}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: isMobile ? '8px 0px 23px' : 2 }}>
                <Typography variant="body2" paragraph>
                  {example.explanation}
                </Typography>
                <CodeBlock code={example.code} />
                {example.output && (
                  <Box sx={{ mt: 2, p: 2, bgcolor: 'background.default', borderRadius: 1, border: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                      Output:
                    </Typography>
                    {example.output.type === 'image' && example.output.url ? (
                      <Box component="img" src={example.output.url} alt={example.title} sx={{ maxWidth: '100%', height: 'auto', borderRadius: 1 }} />
                    ) : (
                      <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        {example.output.description || example.output}
                      </Typography>
                    )}
                  </Box>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      )}

      {/* Interactive Code Sandbox */}
      {topicContent.codeExamples && topicContent.codeExamples.length > 0 && (
        <CodeSandbox
          initialCode={topicContent.codeExamples[0].code}
          initialJsCode={topicContent.codeExamples[0].jsCode}
          title="🚀 Interactive Code Sandbox - Try & Modify the Code!"
          height="450px"
          supportedLanguages={
            topicContent.codeExamples[0].jsCode 
              ? ['python', 'javascript'] 
              : ['python']
          }
        />
      )}

      {/* Practice Assignments */}
      <PracticeAssignments topicId={topicId} />

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

      {/* Interactive Visualizations */}
      {pathId === 'deep-learning' && topicId === '1' && (
        <Paper elevation={2} sx={{ p: isMobile ? 2 : 3, mb: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            🎨 Interactive Neural Network Visualization
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Watch how signals propagate through a neural network. Adjust the architecture, speed, and activation functions to see how they affect the network behavior.
          </Typography>
          <NeuralNetworkViz 
            layers={[3, 5, 3, 2]}
            title="Forward Propagation Demo"
            description="See how input data flows through layers to produce output"
          />
        </Paper>
      )}

      {/* AI Tutor Floating Button */}
      <Tooltip title="Ask AI Tutor" placement="left">
        <Fab 
          color="primary" 
          onClick={() => setShowAITutor(true)}
          sx={{ 
            position: 'fixed', 
            bottom: 24, 
            right: 24,
            zIndex: 1000,
          }}
        >
          <SmartToy />
        </Fab>
      </Tooltip>

      {/* AI Tutor Dialog */}
      {showAITutor && (
        <AITutor 
          topic={topic} 
          pathId={pathId} 
          onClose={() => setShowAITutor(false)} 
        />
      )}
    </Box>
  );
};

export default TopicDetail;
