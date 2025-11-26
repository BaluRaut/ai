import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  Paper,
  Divider,
  Button,
  useTheme,
  alpha
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Code as CodeIcon,
  CheckCircle as CheckCircleIcon,
  School as SchoolIcon,
  Timer as TimerIcon,
  Build as BuildIcon,
  Storage as StorageIcon,
  Assignment as AssignmentIcon,
  PlayArrow as PlayArrowIcon,
  Lightbulb as LightbulbIcon,
  Link as LinkIcon
} from '@mui/icons-material';
import { capstoneProjects } from '../../data/capstoneProjects';
import CodeBlock from '../../components/CodeBlock/CodeBlock';

const difficultyColors = {
  beginner: 'success',
  intermediate: 'warning',
  advanced: 'error',
  Beginner: 'success',
  Intermediate: 'warning',
  Advanced: 'error'
};

function CapstoneProjects() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setActiveTab(0);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Button 
          onClick={handleBack} 
          sx={{ mb: 3 }}
          startIcon={<PlayArrowIcon sx={{ transform: 'rotate(180deg)' }} />}
        >
          Back to Projects
        </Button>

        <Paper elevation={0} sx={{ p: 4, mb: 4, borderRadius: 3, bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {selectedProject.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, maxWidth: 600 }}>
                {selectedProject.description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip 
                  label={selectedProject.difficulty} 
                  color={difficultyColors[selectedProject.difficulty] || 'default'}
                  size="small"
                />
                <Chip 
                  icon={<TimerIcon />}
                  label={selectedProject.duration} 
                  variant="outlined"
                  size="small"
                />
                {selectedProject.category && (
                  <Chip 
                    label={selectedProject.category}
                    variant="outlined"
                    size="small"
                    color="secondary"
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Paper>

        <Tabs 
          value={activeTab} 
          onChange={(e, v) => setActiveTab(v)} 
          sx={{ mb: 3 }}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Overview" />
          <Tab label="Implementation Steps" />
          <Tab label="Deliverables & Resources" />
        </Tabs>

        {activeTab === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <BuildIcon color="primary" />
                    <Typography variant="h6">Skills You'll Learn</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.skills?.map((skill, idx) => (
                      <Chip key={idx} label={skill} size="small" variant="outlined" />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <StorageIcon color="primary" />
                    <Typography variant="h6">Dataset</Typography>
                  </Box>
                  <Typography variant="body1" gutterBottom>
                    <strong>{selectedProject.dataset?.name}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Source: {selectedProject.dataset?.source}
                  </Typography>
                  {selectedProject.dataset?.size && (
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Size: {selectedProject.dataset.size}
                    </Typography>
                  )}
                  {selectedProject.dataset?.url && (
                    <Button 
                      variant="outlined" 
                      size="small"
                      href={selectedProject.dataset.url}
                      target="_blank"
                      sx={{ mt: 1 }}
                      startIcon={<LinkIcon />}
                    >
                      Access Dataset
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <LightbulbIcon color="primary" />
                    <Typography variant="h6">Learning Outcomes</Typography>
                  </Box>
                  <List dense>
                    {selectedProject.learningOutcomes?.map((outcome, idx) => (
                      <ListItem key={idx}>
                        <ListItemIcon>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={outcome} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {activeTab === 1 && (
          <Box>
            {selectedProject.steps?.map((step, idx) => (
              <Accordion key={idx} defaultExpanded={idx === 0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Chip label={`Phase ${idx + 1}`} size="small" color="primary" />
                    <Box>
                      <Typography fontWeight="medium">{step.phase}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Duration: {step.duration}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2" gutterBottom>Tasks:</Typography>
                  <List dense>
                    {step.tasks?.map((task, tidx) => (
                      <ListItem key={tidx}>
                        <ListItemIcon>
                          <CheckCircleIcon fontSize="small" color="action" />
                        </ListItemIcon>
                        <ListItemText primary={task} />
                      </ListItem>
                    ))}
                  </List>
                  {step.code && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>Code Example:</Typography>
                      <CodeBlock code={step.code} language="python" />
                    </Box>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        )}

        {activeTab === 2 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <AssignmentIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Required Deliverables
                  </Typography>
                  <List dense>
                    {selectedProject.deliverables?.map((item, idx) => (
                      <ListItem key={idx}>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <LinkIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Resources
                  </Typography>
                  <List dense>
                    {selectedProject.resources?.map((resource, idx) => (
                      <ListItem key={idx}>
                        <ListItemIcon>
                          <SchoolIcon color="info" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={
                            <Button
                              href={resource.url}
                              target="_blank"
                              size="small"
                              sx={{ textTransform: 'none', p: 0 }}
                            >
                              {resource.title}
                            </Button>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          🚀 Capstone Projects
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
          Build real-world AI/ML projects from scratch. Each project includes step-by-step guidance, 
          code examples, and deliverables.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {capstoneProjects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card 
              sx={{ 
                height: '100%', 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8]
                }
              }}
              onClick={() => handleProjectClick(project)}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Chip 
                    label={project.difficulty} 
                    color={difficultyColors[project.difficulty] || 'default'}
                    size="small"
                  />
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 60 }}>
                  {project.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <TimerIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    {project.duration}
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {project.skills?.slice(0, 4).map((skill, idx) => (
                    <Chip key={idx} label={skill} size="small" variant="outlined" />
                  ))}
                  {project.skills?.length > 4 && (
                    <Chip label={`+${project.skills.length - 4}`} size="small" />
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CapstoneProjects;
