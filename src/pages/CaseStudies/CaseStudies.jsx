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
  Button,
  useTheme,
  alpha,
  Divider
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  Business as BusinessIcon,
  Lightbulb as LightbulbIcon,
  Architecture as ArchitectureIcon,
  TrendingUp as TrendingUpIcon,
  LocalHospital as HealthIcon,
  AccountBalance as FinanceIcon,
  ShoppingCart as RetailIcon,
  PrecisionManufacturing as ManufacturingIcon,
  Category as OtherIcon,
  PlayArrow as PlayArrowIcon,
  School as SchoolIcon,
  Link as LinkIcon
} from '@mui/icons-material';
import { caseStudies, industrySummary } from '../../data/caseStudies';

const industryIcons = {
  healthcare: <HealthIcon />,
  finance: <FinanceIcon />,
  retail: <RetailIcon />,
  manufacturing: <ManufacturingIcon />,
  other: <OtherIcon />
};

const industryColors = {
  healthcare: '#4caf50',
  finance: '#2196f3',
  retail: '#ff9800',
  manufacturing: '#9c27b0',
  other: '#607d8b'
};

const industryLabels = {
  healthcare: 'Healthcare',
  finance: 'Finance',
  retail: 'Retail & E-commerce',
  manufacturing: 'Manufacturing',
  other: 'Other Industries'
};

function CaseStudies() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedIndustry, setSelectedIndustry] = useState('healthcare');
  const [selectedCase, setSelectedCase] = useState(null);

  const handleCaseClick = (caseStudy) => {
    setSelectedCase(caseStudy);
  };

  const handleBack = () => {
    setSelectedCase(null);
  };

  if (selectedCase) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Button 
          onClick={handleBack} 
          sx={{ mb: 3 }}
          startIcon={<PlayArrowIcon sx={{ transform: 'rotate(180deg)' }} />}
        >
          Back to Case Studies
        </Button>

        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            mb: 4, 
            borderRadius: 3, 
            bgcolor: alpha(industryColors[selectedIndustry], 0.1),
            borderLeft: `4px solid ${industryColors[selectedIndustry]}`
          }}
        >
          <Chip 
            label={industryLabels[selectedIndustry]} 
            sx={{ 
              bgcolor: industryColors[selectedIndustry], 
              color: 'white',
              mb: 2
            }}
          />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {selectedCase.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            <BusinessIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            {selectedCase.company}
          </Typography>
        </Paper>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom color="error">
                  🎯 Challenge
                </Typography>
                <Typography variant="body1">
                  {selectedCase.challenge}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom color="success.main">
                  💡 Solution
                </Typography>
                <Typography variant="body1" paragraph>
                  {selectedCase.solution}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedCase.technology.map((tech, idx) => (
                    <Chip key={idx} label={tech} size="small" color="primary" variant="outlined" />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  <TrendingUpIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Results & Impact
                </Typography>
                <List dense>
                  {selectedCase.results.map((result, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={result} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="secondary">
                  <LightbulbIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Key Takeaways
                </Typography>
                <List dense>
                  {selectedCase.keyTakeaways.map((takeaway, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        <LightbulbIcon color="warning" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={takeaway} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <ArchitectureIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Architecture Highlights
                </Typography>
                <Paper 
                  sx={{ 
                    p: 2, 
                    bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
                    fontFamily: 'monospace',
                    whiteSpace: 'pre-wrap',
                    fontSize: '0.875rem'
                  }}
                >
                  {selectedCase.architectureHighlights}
                </Paper>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Lessons Learned
                </Typography>
                <List dense>
                  {selectedCase.lessonsLearned.map((lesson, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        <CheckCircleIcon color="info" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={lesson} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {selectedCase.resources && selectedCase.resources.length > 0 && (
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <LinkIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Resources
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    {selectedCase.resources.map((resource, idx) => (
                      <Button 
                        key={idx}
                        variant="outlined"
                        href={resource.url}
                        target="_blank"
                        size="small"
                      >
                        {resource.title}
                      </Button>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          📊 AI Case Studies
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
          Learn from real-world AI implementations at top companies. Understand challenges, 
          solutions, architectures, and lessons learned.
        </Typography>
      </Box>

      {/* Industry Tabs */}
      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={selectedIndustry}
          onChange={(e, v) => setSelectedIndustry(v)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              minHeight: 72,
              textTransform: 'none'
            }
          }}
        >
          {Object.keys(caseStudies).map((industry) => (
            <Tab
              key={industry}
              value={industry}
              icon={industryIcons[industry]}
              label={
                <Box>
                  <Typography variant="body2" fontWeight="medium">
                    {industryLabels[industry]}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {caseStudies[industry].length} cases
                  </Typography>
                </Box>
              }
            />
          ))}
        </Tabs>
      </Paper>

      {/* Industry Summary */}
      {industrySummary[selectedIndustry] && (
        <Paper sx={{ p: 3, mb: 4, bgcolor: alpha(industryColors[selectedIndustry], 0.05) }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle2" color="text.secondary">Key Technologies</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                {industrySummary[selectedIndustry].keyTechnologies.map((tech, idx) => (
                  <Chip key={idx} label={tech} size="small" />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle2" color="text.secondary">Regulatory Considerations</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                {industrySummary[selectedIndustry].regulatoryConsiderations.map((reg, idx) => (
                  <Chip key={idx} label={reg} size="small" variant="outlined" color="warning" />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle2" color="text.secondary">Ethical Concerns</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                {industrySummary[selectedIndustry].ethicalConcerns.map((eth, idx) => (
                  <Chip key={idx} label={eth} size="small" variant="outlined" color="error" />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}

      {/* Case Study Cards */}
      <Grid container spacing={3}>
        {caseStudies[selectedIndustry].map((caseStudy) => (
          <Grid item xs={12} md={6} key={caseStudy.id}>
            <Card 
              sx={{ 
                height: '100%', 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderLeft: `4px solid ${industryColors[selectedIndustry]}`,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8]
                }
              }}
              onClick={() => handleCaseClick(caseStudy)}
            >
              <CardContent>
                <Typography variant="overline" color="text.secondary">
                  {caseStudy.company}
                </Typography>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {caseStudy.title}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 60 }}>
                  {caseStudy.challenge.substring(0, 150)}...
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {caseStudy.technology.slice(0, 3).map((tech, idx) => (
                    <Chip key={idx} label={tech} size="small" variant="outlined" />
                  ))}
                  {caseStudy.technology.length > 3 && (
                    <Chip label={`+${caseStudy.technology.length - 3}`} size="small" />
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

export default CaseStudies;
