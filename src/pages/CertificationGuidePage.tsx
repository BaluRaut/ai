import { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Alert,
  Tab,
  Tabs,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SchoolIcon from '@mui/icons-material/School'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TimerIcon from '@mui/icons-material/Timer'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'

interface Certification {
  id: string
  provider: 'aws' | 'azure' | 'gcp'
  name: string
  level: 'foundational' | 'associate' | 'professional' | 'specialty'
  duration: string
  cost: string
  passingScore: number
  examFormat: string
  validFor: string
  prerequisites?: string
  topics: string[]
  studyResources: string[]
  examTips: string[]
  sampleQuestions?: { question: string; answer: string }[]
}

const certifications: Certification[] = [
  {
    id: 'aws-clf',
    provider: 'aws',
    name: 'AWS Certified Cloud Practitioner',
    level: 'foundational',
    duration: '90 minutes',
    cost: '$100',
    passingScore: 700,
    examFormat: '65 multiple choice/multiple select',
    validFor: '3 years',
    topics: [
      'Cloud concepts (26%)',
      'Security and compliance (25%)',
      'Technology (33%)',
      'Billing and pricing (16%)',
    ],
    studyResources: [
      'AWS Cloud Practitioner Essentials (free course)',
      'AWS Whitepapers: Overview of AWS',
      'AWS Architecture Center',
      'Practice exams on Udemy, Tutorials Dojo',
      'AWS Skill Builder learning paths',
    ],
    examTips: [
      'Understand AWS global infrastructure (Regions, AZs)',
      'Know the 6 pillars of Well-Architected Framework',
      'Familiarize with AWS pricing models (on-demand, reserved, spot)',
      'Understand shared responsibility model',
      'Know key services: EC2, S3, RDS, VPC, IAM, Lambda',
      'Review AWS support plans (Basic, Developer, Business, Enterprise)',
      'Practice with free tier hands-on labs',
    ],
    sampleQuestions: [
      {
        question: 'Which AWS service provides object storage?',
        answer: 'Amazon S3 (Simple Storage Service) - designed for 99.999999999% durability'
      },
      {
        question: 'What is the AWS shared responsibility model?',
        answer: 'AWS manages security OF the cloud (infrastructure), customers manage security IN the cloud (data, applications, access)'
      },
    ]
  },
  {
    id: 'aws-saa',
    provider: 'aws',
    name: 'AWS Certified Solutions Architect - Associate',
    level: 'associate',
    duration: '130 minutes',
    cost: '$150',
    passingScore: 720,
    examFormat: '65 questions',
    validFor: '3 years',
    prerequisites: 'Recommended: 1 year AWS experience',
    topics: [
      'Design Secure Architectures (30%)',
      'Design Resilient Architectures (26%)',
      'Design High-Performing Architectures (24%)',
      'Design Cost-Optimized Architectures (20%)',
    ],
    studyResources: [
      'A Cloud Guru - SAA Course',
      'Stephane Maarek\'s Udemy course',
      'AWS Documentation for core services',
      'Tutorials Dojo Practice Tests',
      'AWS Well-Architected Framework whitepaper',
      'Hands-on labs: Build VPC, deploy multi-tier app',
    ],
    examTips: [
      'Master VPC design (subnets, route tables, NAT, security groups)',
      'Understand S3 storage classes and lifecycle policies',
      'Know EC2 instance types and when to use each',
      'Learn Auto Scaling and Load Balancers deeply',
      'Understand RDS Multi-AZ vs Read Replicas',
      'Know when to use Lambda vs Fargate vs EC2',
      'Study CloudFront, Route 53, and caching strategies',
      'Understand disaster recovery strategies (backup, pilot light, warm standby)',
    ],
  },
  {
    id: 'azure-900',
    provider: 'azure',
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    level: 'foundational',
    duration: '60 minutes',
    cost: '$99',
    passingScore: 700,
    examFormat: '40-60 questions',
    validFor: 'Does not expire',
    topics: [
      'Cloud Concepts (25-30%)',
      'Azure Architecture and Services (35-40%)',
      'Azure Management and Governance (30-35%)',
    ],
    studyResources: [
      'Microsoft Learn AZ-900 learning path (FREE)',
      'Azure Fundamentals video series',
      'John Savill\'s Azure Master Class',
      'Practice tests on Whizlabs',
      'Azure free tier hands-on practice',
    ],
    examTips: [
      'Understand cloud service models (IaaS, PaaS, SaaS)',
      'Know Azure regions and availability zones',
      'Learn core Azure services: VMs, App Service, Storage, SQL Database',
      'Understand Azure pricing and cost management',
      'Know Azure governance features: RBAC, policies, locks',
      'Familiarize with Azure Portal and Cloud Shell',
      'Understand SLA and service lifecycle',
    ],
  },
  {
    id: 'azure-104',
    provider: 'azure',
    name: 'Microsoft Azure Administrator (AZ-104)',
    level: 'associate',
    duration: '120 minutes',
    cost: '$165',
    passingScore: 700,
    examFormat: '40-60 questions',
    validFor: '1 year (requires annual renewal)',
    prerequisites: 'Recommended: 6+ months Azure administration',
    topics: [
      'Manage Azure identities and governance (15-20%)',
      'Implement and manage storage (15-20%)',
      'Deploy and manage Azure compute (20-25%)',
      'Configure and manage virtual networking (20-25%)',
      'Monitor and maintain Azure resources (10-15%)',
    ],
    studyResources: [
      'Microsoft Learn AZ-104 path',
      'Scott Duffy\'s Udemy course',
      'Hands-on labs in Azure Portal',
      'MeasureUp practice tests',
      'Azure documentation',
    ],
    examTips: [
      'Practice creating and managing VMs',
      'Master Azure AD and RBAC',
      'Understand VNet peering and VPN Gateway',
      'Know storage account types and replication',
      'Learn Azure Backup and Site Recovery',
      'Understand Azure Monitor and Log Analytics',
      'Practice with Azure CLI and PowerShell',
    ],
  },
  {
    id: 'gcp-ace',
    provider: 'gcp',
    name: 'Google Cloud Associate Cloud Engineer',
    level: 'associate',
    duration: '120 minutes',
    cost: '$125',
    passingScore: 70,
    examFormat: '50 multiple choice',
    validFor: '3 years',
    prerequisites: 'Recommended: 6+ months GCP experience',
    topics: [
      'Setting up a cloud solution environment (17.5%)',
      'Planning and configuring a cloud solution (17.5%)',
      'Deploying and implementing (25%)',
      'Ensuring successful operation (20%)',
      'Configuring access and security (15%)',
    ],
    studyResources: [
      'Google Cloud Skills Boost (Qwiklabs)',
      'Coursera Google Cloud courses',
      'A Cloud Guru GCP course',
      'Official Google Cloud documentation',
      'Practice with GCP free tier',
    ],
    examTips: [
      'Master gcloud CLI commands',
      'Understand Compute Engine vs App Engine vs Cloud Run',
      'Know Cloud Storage classes and lifecycle',
      'Learn VPC networks and firewall rules',
      'Understand IAM roles and service accounts',
      'Practice with GKE (Kubernetes)',
      'Know Cloud SQL and BigQuery basics',
      'Understand Cloud Functions and Pub/Sub',
    ],
  },
]

const studyPlan = {
  '30-day': {
    title: '30-Day Intensive Plan',
    weeks: [
      { week: 1, focus: 'Core Concepts', hours: '2-3 hours/day', tasks: ['Watch video course', 'Read whitepapers', 'Create free tier account'] },
      { week: 2, focus: 'Compute & Storage', hours: '2-3 hours/day', tasks: ['Hands-on labs with EC2/VMs', 'Practice S3/Blob Storage', 'Build simple app'] },
      { week: 3, focus: 'Networking & Security', hours: '2-3 hours/day', tasks: ['Configure VPC/VNet', 'Set up IAM', 'Practice security groups'] },
      { week: 4, focus: 'Practice & Review', hours: '3-4 hours/day', tasks: ['Take practice exams', 'Review weak areas', 'Schedule exam'] },
    ]
  },
  '60-day': {
    title: '60-Day Balanced Plan',
    weeks: [
      { week: '1-2', focus: 'Fundamentals', hours: '1-2 hours/day', tasks: ['Complete intro course', 'Read documentation', 'Setup account'] },
      { week: '3-4', focus: 'Core Services', hours: '1-2 hours/day', tasks: ['Hands-on with compute', 'Storage exercises', 'Database basics'] },
      { week: '5-6', focus: 'Networking', hours: '1-2 hours/day', tasks: ['VPC/VNet design', 'Load balancers', 'DNS configuration'] },
      { week: '7-8', focus: 'Review & Practice', hours: '2-3 hours/day', tasks: ['Practice exams', 'Build projects', 'Take exam'] },
    ]
  },
  '90-day': {
    title: '90-Day Comprehensive Plan',
    weeks: [
      { week: '1-3', focus: 'Cloud Fundamentals', hours: '1 hour/day', tasks: ['Video courses', 'Reading materials', 'Explore console'] },
      { week: '4-6', focus: 'Compute Services', hours: '1 hour/day', tasks: ['VMs setup', 'Serverless practice', 'Container basics'] },
      { week: '7-9', focus: 'Storage & Databases', hours: '1 hour/day', tasks: ['Object storage', 'Block storage', 'SQL databases'] },
      { week: '10-12', focus: 'Networking & Security', hours: '1-2 hours/day', tasks: ['VPC design', 'IAM policies', 'Security best practices'] },
      { week: '13', focus: 'Final Preparation', hours: '2-3 hours/day', tasks: ['Practice tests', 'Review notes', 'Schedule & pass exam'] },
    ]
  },
}

export default function CertificationGuidePage() {
  const [selectedProvider, setSelectedProvider] = useState<string>('all')
  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  const [tabValue, setTabValue] = useState(0)

  const filteredCerts = certifications.filter(cert => {
    const matchesProvider = selectedProvider === 'all' || cert.provider === selectedProvider
    const matchesLevel = selectedLevel === 'all' || cert.level === selectedLevel
    return matchesProvider && matchesLevel
  })

  const providers = [
    { value: 'all', label: 'All Providers', color: '#757575' },
    { value: 'aws', label: 'AWS', color: '#FF9900' },
    { value: 'azure', label: 'Azure', color: '#0078D4' },
    { value: 'gcp', label: 'Google Cloud', color: '#4285F4' },
  ]

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'foundational', label: 'Foundational' },
    { value: 'associate', label: 'Associate' },
    { value: 'professional', label: 'Professional' },
    { value: 'specialty', label: 'Specialty' },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <SchoolIcon fontSize="large" color="primary" />
          Cloud Certification Guide
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Complete guide to AWS, Azure, and Google Cloud certifications with study plans and resources
        </Typography>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)}>
          <Tab label="Certifications" icon={<EmojiEventsIcon />} iconPosition="start" />
          <Tab label="Study Plans" icon={<MenuBookIcon />} iconPosition="start" />
        </Tabs>
      </Box>

      {/* Certifications Tab */}
      {tabValue === 0 && (
        <>
          {/* Filters */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="subtitle2" gutterBottom>
                Cloud Provider:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                {providers.map(provider => (
                  <Chip
                    key={provider.value}
                    label={provider.label}
                    onClick={() => setSelectedProvider(provider.value)}
                    sx={{
                      backgroundColor: selectedProvider === provider.value ? provider.color : undefined,
                      color: selectedProvider === provider.value ? 'white' : undefined,
                    }}
                    variant={selectedProvider === provider.value ? 'filled' : 'outlined'}
                  />
                ))}
              </Box>

              <Typography variant="subtitle2" gutterBottom>
                Certification Level:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {levels.map(level => (
                  <Chip
                    key={level.value}
                    label={level.label}
                    onClick={() => setSelectedLevel(level.value)}
                    color={selectedLevel === level.value ? 'primary' : 'default'}
                    variant={selectedLevel === level.value ? 'filled' : 'outlined'}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Certification Path Recommendation */}
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              🎯 Recommended Certification Path for Beginners:
            </Typography>
            <Typography variant="body2">
              1. Start with <strong>Foundational</strong> (AWS CCP / Azure AZ-900 / GCP Cloud Digital Leader)<br />
              2. Progress to <strong>Associate</strong> (AWS SAA / Azure AZ-104 / GCP ACE)<br />
              3. Specialize with <strong>Professional</strong> or <strong>Specialty</strong> certifications
            </Typography>
          </Alert>

          {/* Certifications Grid */}
          <Grid container spacing={3}>
            {filteredCerts.map(cert => (
              <Grid item xs={12} key={cert.id}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                      <Box>
                        <Typography variant="h5" gutterBottom>
                          {cert.name}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Chip 
                            label={cert.provider.toUpperCase()} 
                            size="small"
                            sx={{ 
                              bgcolor: cert.provider === 'aws' ? '#FF9900' : 
                                       cert.provider === 'azure' ? '#0078D4' : '#4285F4',
                              color: 'white'
                            }}
                          />
                          <Chip label={cert.level} size="small" color="primary" variant="outlined" />
                        </Box>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="h4" color="primary">{cert.cost}</Typography>
                        <Typography variant="caption">Exam Fee</Typography>
                      </Box>
                    </Box>

                    {/* Quick Info */}
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item xs={6} sm={3}>
                        <Box sx={{ textAlign: 'center' }}>
                          <TimerIcon color="action" />
                          <Typography variant="body2" fontWeight="bold">{cert.duration}</Typography>
                          <Typography variant="caption">Duration</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Box sx={{ textAlign: 'center' }}>
                          <EmojiEventsIcon color="action" />
                          <Typography variant="body2" fontWeight="bold">{cert.passingScore}+</Typography>
                          <Typography variant="caption">Pass Score</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Box sx={{ textAlign: 'center' }}>
                          <MenuBookIcon color="action" />
                          <Typography variant="body2" fontWeight="bold">{cert.examFormat}</Typography>
                          <Typography variant="caption">Questions</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Box sx={{ textAlign: 'center' }}>
                          <CheckCircleIcon color="action" />
                          <Typography variant="body2" fontWeight="bold">{cert.validFor}</Typography>
                          <Typography variant="caption">Valid For</Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    {cert.prerequisites && (
                      <Alert severity="warning" sx={{ mb: 2 }}>
                        <strong>Prerequisites:</strong> {cert.prerequisites}
                      </Alert>
                    )}

                    {/* Exam Topics */}
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          📚 Exam Topics
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List dense>
                          {cert.topics.map((topic, idx) => (
                            <ListItem key={idx}>
                              <ListItemIcon>
                                <CheckCircleIcon color="primary" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary={topic} />
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>

                    {/* Study Resources */}
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          📖 Study Resources
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List dense>
                          {cert.studyResources.map((resource, idx) => (
                            <ListItem key={idx}>
                              <ListItemIcon>
                                <MenuBookIcon color="secondary" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary={resource} />
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>

                    {/* Exam Tips */}
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          💡 Exam Tips
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List dense>
                          {cert.examTips.map((tip, idx) => (
                            <ListItem key={idx}>
                              <ListItemIcon>
                                <CheckCircleIcon color="success" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary={tip} />
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>

                    {/* Sample Questions */}
                    {cert.sampleQuestions && (
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="subtitle1" fontWeight="bold">
                            ❓ Sample Questions
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {cert.sampleQuestions.map((sq, idx) => (
                            <Box key={idx} sx={{ mb: 2 }}>
                              <Typography variant="subtitle2" color="primary" gutterBottom>
                                Q{idx + 1}: {sq.question}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                <strong>Answer:</strong> {sq.answer}
                              </Typography>
                              {idx < cert.sampleQuestions!.length - 1 && <Divider sx={{ mt: 2 }} />}
                            </Box>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {/* Study Plans Tab */}
      {tabValue === 1 && (
        <Grid container spacing={3}>
          {Object.entries(studyPlan).map(([key, plan]) => (
            <Grid item xs={12} key={key}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="primary">
                    {plan.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Ideal for: {key === '30-day' ? 'Full-time study, intensive preparation' : 
                               key === '60-day' ? 'Working professionals, moderate pace' : 
                               'Long-term preparation, 1 hour daily'}
                  </Typography>
                  
                  {plan.weeks.map((week, idx) => (
                    <Box key={idx} sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          Week {week.week}: {week.focus}
                        </Typography>
                        <Chip label={week.hours} size="small" color="secondary" />
                      </Box>
                      <List dense>
                        {week.tasks.map((task, tidx) => (
                          <ListItem key={tidx}>
                            <ListItemIcon>
                              <CheckCircleIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={task} />
                          </ListItem>
                        ))}
                      </List>
                      {idx < plan.weeks.length - 1 && <Divider />}
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* General Study Tips */}
          <Grid item xs={12}>
            <Card sx={{ bgcolor: 'success.light', color: 'success.contrastText' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  🎯 Study Success Tips
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>✅ Do This:</Typography>
                    <List dense>
                      <ListItem><ListItemText primary="Create a study schedule and stick to it" /></ListItem>
                      <ListItem><ListItemText primary="Hands-on practice is essential" /></ListItem>
                      <ListItem><ListItemText primary="Take multiple practice exams" /></ListItem>
                      <ListItem><ListItemText primary="Join study groups or forums" /></ListItem>
                      <ListItem><ListItemText primary="Review explanations for wrong answers" /></ListItem>
                      <ListItem><ListItemText primary="Build real projects using cloud services" /></ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>❌ Avoid This:</Typography>
                    <List dense>
                      <ListItem><ListItemText primary="Don't just memorize - understand concepts" /></ListItem>
                      <ListItem><ListItemText primary="Don't skip hands-on practice" /></ListItem>
                      <ListItem><ListItemText primary="Don't rely only on brain dumps" /></ListItem>
                      <ListItem><ListItemText primary="Don't procrastinate - start early" /></ListItem>
                      <ListItem><ListItemText primary="Don't ignore weak areas" /></ListItem>
                      <ListItem><ListItemText primary="Don't schedule exam without practice tests" /></ListItem>
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  )
}
