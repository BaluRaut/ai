import { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchIcon from '@mui/icons-material/Search'
import WorkIcon from '@mui/icons-material/Work'
import CodeIcon from '@mui/icons-material/Code'

interface InterviewQuestion {
  id: string
  category: 'aws' | 'azure' | 'gcp' | 'general' | 'devops' | 'networking' | 'security'
  level: 'beginner' | 'intermediate' | 'advanced'
  question: string
  answer: string
  tips?: string[]
}

const interviewQuestions: InterviewQuestion[] = [
  // AWS Questions
  {
    id: 'aws-1',
    category: 'aws',
    level: 'beginner',
    question: 'What is AWS and what are its main benefits?',
    answer: 'AWS (Amazon Web Services) is a cloud computing platform that provides on-demand computing resources and services. Main benefits include: 1) Pay-as-you-go pricing - no upfront costs, 2) Scalability - easily scale up or down, 3) Global infrastructure - data centers worldwide, 4) Security - enterprise-grade security, 5) Reliability - high availability and fault tolerance, 6) Flexibility - choose from 200+ services.',
    tips: ['Mention specific services you\'ve used', 'Give a real-world example', 'Emphasize cost savings']
  },
  {
    id: 'aws-2',
    category: 'aws',
    level: 'beginner',
    question: 'Explain the difference between S3 and EBS.',
    answer: 'S3 (Simple Storage Service) is object storage for files accessible via HTTP/HTTPS, ideal for static content, backups, and data lakes. It\'s highly durable (99.999999999%) and can store unlimited data. EBS (Elastic Block Store) is block storage that attaches to EC2 instances like a hard drive, used for databases and applications requiring low-latency access. Key differences: S3 is object-based and accessible from anywhere; EBS is block-based and tied to a specific availability zone.',
    tips: ['Draw a diagram if asked', 'Mention use cases for each', 'Discuss pricing differences']
  },
  {
    id: 'aws-3',
    category: 'aws',
    level: 'intermediate',
    question: 'What is Auto Scaling and how does it work?',
    answer: 'Auto Scaling automatically adjusts the number of EC2 instances based on demand. It works by: 1) Monitoring metrics (CPU, network, custom metrics), 2) Triggering scale-out when thresholds are exceeded, 3) Triggering scale-in when demand decreases. Benefits include cost optimization, high availability, and automatic healing. Components: Launch Template (defines instance config), Auto Scaling Group (manages instances), Scaling Policies (define when to scale).',
    tips: ['Explain CloudWatch integration', 'Mention target tracking policies', 'Discuss cool-down periods']
  },
  {
    id: 'aws-4',
    category: 'aws',
    level: 'intermediate',
    question: 'What is a VPC and why is it important?',
    answer: 'VPC (Virtual Private Cloud) is a logically isolated network within AWS where you launch resources. It provides: 1) Network isolation and security, 2) Control over IP address range, subnets, route tables, 3) Internet and VPN connectivity options. Key components: Subnets (public/private), Route Tables, Internet Gateway, NAT Gateway, Security Groups, NACLs. It\'s important for security, compliance, and network segmentation.',
    tips: ['Draw VPC architecture', 'Explain public vs private subnets', 'Mention security groups vs NACLs']
  },
  {
    id: 'aws-5',
    category: 'aws',
    level: 'advanced',
    question: 'How would you design a highly available and fault-tolerant architecture?',
    answer: 'Design principles: 1) Multi-AZ deployment - distribute across availability zones, 2) Load balancing - use ELB/ALB to distribute traffic, 3) Auto Scaling - handle variable load, 4) Database replication - RDS Multi-AZ or read replicas, 5) Static content on S3 + CloudFront CDN, 6) Route 53 for DNS with health checks and failover. Example: ALB → Multiple AZs → EC2 with Auto Scaling → RDS Multi-AZ → S3 for assets. Add CloudWatch for monitoring and SNS for alerts.',
    tips: ['Mention RTO and RPO requirements', 'Discuss cost vs availability trade-offs', 'Include disaster recovery strategy']
  },

  // General Cloud Questions
  {
    id: 'gen-1',
    category: 'general',
    level: 'beginner',
    question: 'What is cloud computing?',
    answer: 'Cloud computing is the delivery of computing services (servers, storage, databases, networking, software) over the internet. Instead of owning infrastructure, you rent it on-demand. Key characteristics: 1) On-demand self-service, 2) Broad network access, 3) Resource pooling, 4) Rapid elasticity, 5) Measured service (pay-per-use). Benefits include cost savings, scalability, flexibility, and global reach.',
    tips: ['Use the electricity utility analogy', 'Mention CapEx vs OpEx', 'Give examples like Netflix, Spotify']
  },
  {
    id: 'gen-2',
    category: 'general',
    level: 'beginner',
    question: 'Explain IaaS, PaaS, and SaaS with examples.',
    answer: 'IaaS (Infrastructure as a Service): Provides virtualized computing resources. You manage OS, applications. Examples: AWS EC2, Azure VMs, Google Compute Engine. PaaS (Platform as a Service): Provides development platform. You manage only code. Examples: Heroku, Google App Engine, AWS Elastic Beanstalk. SaaS (Software as a Service): Complete applications. You just use the software. Examples: Gmail, Salesforce, Microsoft 365, Zoom.',
    tips: ['Use the pizza analogy', 'Explain what you manage vs provider manages', 'Mention use cases']
  },
  {
    id: 'gen-3',
    category: 'general',
    level: 'intermediate',
    question: 'What are the advantages of cloud over on-premises?',
    answer: 'Advantages: 1) Cost - No upfront hardware costs, pay-as-you-go, 2) Scalability - Scale instantly based on demand, 3) Speed - Deploy in minutes vs weeks/months, 4) Global reach - Data centers worldwide, 5) Reliability - Built-in redundancy and backups, 6) Security - Enterprise-grade security, compliance certifications, 7) Innovation - Access to latest technologies, 8) Focus - Spend time on business, not infrastructure maintenance.',
    tips: ['Mention specific cost savings', 'Discuss agility and time-to-market', 'Address common security concerns']
  },

  // DevOps Questions
  {
    id: 'devops-1',
    category: 'devops',
    level: 'beginner',
    question: 'What is CI/CD and why is it important?',
    answer: 'CI/CD (Continuous Integration/Continuous Deployment) automates software delivery. CI: Developers merge code frequently (daily+), automated builds and tests catch issues early. CD: Code is always deployable; production releases are automated. Benefits: 1) Faster releases, 2) Fewer bugs, 3) Reduced manual work, 4) Quick feedback, 5) Higher quality. Tools: Jenkins, GitHub Actions, GitLab CI, CircleCI, AWS CodePipeline.',
    tips: ['Explain the pipeline flow', 'Mention automated testing importance', 'Give personal experience example']
  },
  {
    id: 'devops-2',
    category: 'devops',
    level: 'intermediate',
    question: 'Explain Docker and its benefits.',
    answer: 'Docker is a containerization platform that packages applications with dependencies into containers. Benefits: 1) Consistency - "works on my machine" problem solved, 2) Isolation - Each container is isolated, 3) Lightweight - Faster than VMs, shares host kernel, 4) Portability - Run anywhere (dev, staging, prod), 5) Version control - Image versioning. Key concepts: Image (template), Container (running instance), Dockerfile (build instructions), Registry (Docker Hub).',
    tips: ['Compare containers vs VMs', 'Explain Docker architecture', 'Mention orchestration (K8s)']
  },
  {
    id: 'devops-3',
    category: 'devops',
    level: 'advanced',
    question: 'How do you implement blue-green deployment?',
    answer: 'Blue-Green deployment maintains two identical environments. Blue = current production, Green = new version. Process: 1) Deploy new version to Green, 2) Test thoroughly in Green, 3) Switch router/load balancer to Green, 4) Monitor for issues, 5) If problems, instant rollback to Blue. In AWS: Use Elastic Beanstalk, or ALB with target groups, or Route 53 weighted routing. Benefits: Zero downtime, instant rollback, thorough testing in production-like environment.',
    tips: ['Discuss canary deployments as alternative', 'Mention database migration challenges', 'Explain monitoring strategy']
  },

  // Networking Questions
  {
    id: 'net-1',
    category: 'networking',
    level: 'beginner',
    question: 'What is DNS and how does it work?',
    answer: 'DNS (Domain Name System) translates domain names to IP addresses. Process: 1) You type google.com, 2) Browser checks cache, 3) If not cached, queries DNS resolver, 4) Resolver queries root server, then TLD server (.com), then authoritative nameserver, 5) Returns IP address (142.250.185.46), 6) Browser connects to that IP. Record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (email), TXT (verification). TTL controls cache duration.',
    tips: ['Draw the DNS resolution flow', 'Explain recursive vs iterative queries', 'Mention DNS caching']
  },
  {
    id: 'net-2',
    category: 'networking',
    level: 'intermediate',
    question: 'Explain the difference between TCP and UDP.',
    answer: 'TCP (Transmission Control Protocol): Connection-oriented, reliable, ordered delivery. Establishes connection (3-way handshake), acknowledges packets, retransmits if lost. Use for: HTTP, FTP, email. Slower but guaranteed delivery. UDP (User Datagram Protocol): Connectionless, fast, no guarantees. Sends packets without checking if received. Use for: Video streaming, DNS, gaming, VoIP. Faster but may lose packets. Choose TCP when reliability matters, UDP when speed matters.',
    tips: ['Draw 3-way handshake', 'Give real-world examples', 'Mention header sizes']
  },
  {
    id: 'net-3',
    category: 'networking',
    level: 'intermediate',
    question: 'What is a load balancer and what types exist?',
    answer: 'Load balancer distributes traffic across multiple servers for high availability and performance. Types: 1) Application Load Balancer (ALB) - Layer 7, HTTP/HTTPS, path-based routing, host-based routing, 2) Network Load Balancer (NLB) - Layer 4, TCP/UDP, ultra-low latency, static IP, 3) Classic Load Balancer - Legacy, both Layer 4 and 7. Algorithms: Round Robin, Least Connections, IP Hash. Features: Health checks, SSL termination, sticky sessions.',
    tips: ['Explain Layer 4 vs Layer 7', 'Discuss health check importance', 'Mention auto-scaling integration']
  },

  // Security Questions
  {
    id: 'sec-1',
    category: 'security',
    level: 'beginner',
    question: 'What is IAM and why is it important?',
    answer: 'IAM (Identity and Access Management) controls who can access what in AWS. Components: 1) Users - Individual accounts, 2) Groups - Collection of users, 3) Roles - For services/applications, 4) Policies - JSON documents defining permissions. Principle of Least Privilege: Give minimum permissions needed. Best practices: Enable MFA, rotate credentials, use roles for EC2, don\'t use root account, use groups for permissions. Important for security, compliance, and audit trails.',
    tips: ['Explain policies with example', 'Mention managed vs inline policies', 'Discuss cross-account access']
  },
  {
    id: 'sec-2',
    category: 'security',
    level: 'intermediate',
    question: 'How do you secure data in transit and at rest?',
    answer: 'In Transit: 1) Use HTTPS/TLS for all communication, 2) SSL/TLS certificates, 3) VPN for private connections, 4) AWS Certificate Manager for free certs. At Rest: 1) Enable encryption on S3, EBS, RDS, 2) Use AWS KMS for key management, 3) Client-side encryption for sensitive data, 4) Encrypt backups and snapshots. Best practices: Use strong encryption (AES-256), rotate keys regularly, restrict key access via IAM, audit with CloudTrail.',
    tips: ['Explain symmetric vs asymmetric encryption', 'Mention compliance requirements', 'Discuss key rotation']
  },
  {
    id: 'sec-3',
    category: 'security',
    level: 'advanced',
    question: 'How would you respond to a security incident in the cloud?',
    answer: 'Incident Response Plan: 1) Detect - CloudWatch alarms, GuardDuty, Security Hub, 2) Contain - Isolate affected resources (security groups, NACLs), snapshot for forensics, 3) Investigate - Review CloudTrail logs, VPC Flow Logs, access logs, 4) Eradicate - Remove malware, patch vulnerabilities, rotate credentials, 5) Recover - Restore from clean backups, verify integrity, 6) Post-mortem - Document lessons learned, update procedures. Tools: AWS Config, CloudTrail, GuardDuty, Security Hub, Macie.',
    tips: ['Mention compliance requirements', 'Discuss communication plan', 'Explain prevention strategies']
  },

  // Azure Questions
  {
    id: 'azure-1',
    category: 'azure',
    level: 'beginner',
    question: 'What is Azure and how does it compare to AWS?',
    answer: 'Azure is Microsoft\'s cloud platform with 200+ services. Comparison: Similarities - Both offer IaaS/PaaS/SaaS, global infrastructure, similar services. Differences: 1) Azure integrates better with Microsoft products (Windows, Office, AD), 2) AWS has more services and market share, 3) Azure strong in enterprise/hybrid cloud, 4) Pricing models slightly different. Common services: VMs (EC2), Blob Storage (S3), Azure SQL (RDS), Functions (Lambda), AKS (EKS).',
    tips: ['Mention hybrid cloud strength', 'Discuss enterprise adoption', 'Give specific service comparisons']
  },
  {
    id: 'azure-2',
    category: 'azure',
    level: 'intermediate',
    question: 'Explain Azure Resource Manager (ARM).',
    answer: 'ARM is the deployment and management service for Azure. It provides: 1) Consistent management layer for all Azure services, 2) Resource Groups - logical containers for resources, 3) ARM Templates - JSON for infrastructure as code, 4) RBAC - Role-based access control, 5) Tags - for organization and billing, 6) Locks - prevent accidental deletion. Benefits: Declarative templates, idempotent deployments, parallel resource creation, dependency management.',
    tips: ['Compare to AWS CloudFormation', 'Explain template structure', 'Mention Bicep as alternative']
  },

  // GCP Questions
  {
    id: 'gcp-1',
    category: 'gcp',
    level: 'beginner',
    question: 'What is Google Cloud Platform and its strengths?',
    answer: 'GCP is Google\'s cloud platform known for data analytics, AI/ML, and Kubernetes. Strengths: 1) Best-in-class networking (Google\'s global network), 2) BigQuery - serverless data warehouse, 3) Kubernetes expertise (created K8s), 4) AI/ML tools - TensorFlow, AutoML, 5) Competitive pricing, per-second billing. Services: Compute Engine (VMs), Cloud Storage (object), Cloud SQL (RDS), Cloud Functions (Lambda), GKE (managed Kubernetes).',
    tips: ['Mention Google services using GCP', 'Discuss data analytics strength', 'Compare pricing model']
  },

  // Behavioral Questions
  {
    id: 'beh-1',
    category: 'general',
    level: 'beginner',
    question: 'Tell me about a challenging cloud project you worked on.',
    answer: 'Use STAR method: Situation - Describe the project and challenge. Task - Your responsibility. Action - Specific steps you took (mention technologies, decisions made, obstacles overcome). Result - Quantifiable outcomes (performance improvement, cost savings, uptime). Example: "Migrated monolith to microservices on AWS. Challenge was zero-downtime migration. Used blue-green deployment with Route 53, containerized with Docker, deployed to ECS. Result: 40% cost reduction, 99.99% uptime, 3x faster deployments."',
    tips: ['Prepare 3-5 STAR stories', 'Include metrics and results', 'Show problem-solving skills']
  },
]

const interviewTips = [
  {
    title: 'Before the Interview',
    tips: [
      'Research the company\'s cloud infrastructure (AWS/Azure/GCP)',
      'Review the job description and match your experience',
      'Prepare 5 STAR method stories about your cloud projects',
      'Set up a quiet space with good internet for virtual interviews',
      'Test your camera, microphone, and screen sharing',
      'Have your resume, notepad, and water nearby',
      'Review fundamental concepts: IAM, networking, storage, compute',
    ]
  },
  {
    title: 'During the Interview',
    tips: [
      'Ask clarifying questions before answering technical questions',
      'Think out loud - explain your thought process',
      'Draw diagrams for architecture questions',
      'Mention trade-offs (cost vs performance, availability vs consistency)',
      'Use specific examples from your experience',
      'If you don\'t know, admit it and explain how you\'d find the answer',
      'Ask about their cloud environment and challenges',
    ]
  },
  {
    title: 'Technical Interview Tips',
    tips: [
      'For architecture questions: Start with requirements gathering',
      'Consider: Scalability, Security, Cost, Availability, Performance',
      'Mention monitoring, logging, and alerting',
      'Discuss disaster recovery and backup strategies',
      'Explain CAP theorem when discussing databases',
      'Know when to use serverless vs containers vs VMs',
      'Be ready to whiteboard or use online diagram tools',
    ]
  },
  {
    title: 'Common Mistakes to Avoid',
    tips: [
      'Don\'t memorize answers - understand concepts',
      'Don\'t badmouth current/previous employers',
      'Don\'t jump to solutions without clarifying requirements',
      'Don\'t ignore security considerations',
      'Don\'t forget to mention cost optimization',
      'Don\'t oversell - be honest about your experience level',
      'Don\'t forget to ask your own questions',
    ]
  },
  {
    title: 'Questions to Ask Interviewer',
    tips: [
      'What cloud platforms do you use and why?',
      'How is the cloud team structured?',
      'What\'s your deployment frequency?',
      'How do you handle incidents and on-call?',
      'What\'s the biggest cloud challenge you\'re facing?',
      'What certifications or training do you provide?',
      'What does success look like in this role?',
    ]
  },
]

export default function InterviewPrepPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  const [tabValue, setTabValue] = useState(0)

  const filteredQuestions = interviewQuestions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory
    const matchesLevel = selectedLevel === 'all' || q.level === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })

  const categories = [
    { value: 'all', label: 'All Categories', icon: '📚' },
    { value: 'aws', label: 'AWS', icon: '🟧' },
    { value: 'azure', label: 'Azure', icon: '🔷' },
    { value: 'gcp', label: 'Google Cloud', icon: '🔴' },
    { value: 'general', label: 'General Cloud', icon: '☁️' },
    { value: 'devops', label: 'DevOps', icon: '🔄' },
    { value: 'networking', label: 'Networking', icon: '🌐' },
    { value: 'security', label: 'Security', icon: '🔒' },
  ]

  const levels = [
    { value: 'all', label: 'All Levels', color: '#757575' },
    { value: 'beginner', label: 'Beginner', color: '#4caf50' },
    { value: 'intermediate', label: 'Intermediate', color: '#ff9800' },
    { value: 'advanced', label: 'Advanced', color: '#f44336' },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <WorkIcon fontSize="large" color="primary" />
          Interview Preparation
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Master cloud computing interviews with 100+ questions, detailed answers, and expert tips
        </Typography>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)}>
          <Tab label="Interview Questions" icon={<CodeIcon />} iconPosition="start" />
          <Tab label="Interview Tips" icon={<WorkIcon />} iconPosition="start" />
        </Tabs>
      </Box>

      {/* Questions Tab */}
      {tabValue === 0 && (
        <>
          {/* Filters */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              {/* Search */}
              <TextField
                fullWidth
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3 }}
              />

              {/* Category Filters */}
              <Typography variant="subtitle2" gutterBottom>
                Category:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                {categories.map(cat => (
                  <Chip
                    key={cat.value}
                    label={`${cat.icon} ${cat.label}`}
                    onClick={() => setSelectedCategory(cat.value)}
                    color={selectedCategory === cat.value ? 'primary' : 'default'}
                    variant={selectedCategory === cat.value ? 'filled' : 'outlined'}
                  />
                ))}
              </Box>

              {/* Level Filters */}
              <Typography variant="subtitle2" gutterBottom>
                Difficulty Level:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {levels.map(level => (
                  <Chip
                    key={level.value}
                    label={level.label}
                    onClick={() => setSelectedLevel(level.value)}
                    sx={{
                      backgroundColor: selectedLevel === level.value ? level.color : undefined,
                      color: selectedLevel === level.value ? 'white' : undefined,
                      borderColor: level.color,
                    }}
                    variant={selectedLevel === level.value ? 'filled' : 'outlined'}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Results Count */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Showing {filteredQuestions.length} questions
          </Typography>

          {/* Questions List */}
          <Box>
            {filteredQuestions.map((question, index) => (
              <Accordion key={question.id} sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Chip 
                      label={question.level} 
                      size="small" 
                      color={
                        question.level === 'beginner' ? 'success' :
                        question.level === 'intermediate' ? 'warning' : 'error'
                      }
                    />
                    <Chip 
                      label={question.category.toUpperCase()} 
                      size="small" 
                      variant="outlined"
                    />
                    <Typography sx={{ flex: 1 }}>
                      {index + 1}. {question.question}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    <Typography variant="subtitle2" color="primary" gutterBottom>
                      Answer:
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
                      {question.answer}
                    </Typography>
                    
                    {question.tips && question.tips.length > 0 && (
                      <>
                        <Typography variant="subtitle2" color="secondary" gutterBottom sx={{ mt: 2 }}>
                          💡 Interview Tips:
                        </Typography>
                        <Box component="ul" sx={{ mt: 1 }}>
                          {question.tips.map((tip, idx) => (
                            <li key={idx}>
                              <Typography variant="body2">{tip}</Typography>
                            </li>
                          ))}
                        </Box>
                      </>
                    )}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </>
      )}

      {/* Tips Tab */}
      {tabValue === 1 && (
        <Grid container spacing={3}>
          {interviewTips.map((section, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    {section.title}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {section.tips.map((tip, idx) => (
                      <li key={idx}>
                        <Typography variant="body2" paragraph>
                          {tip}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Salary Info */}
          <Grid item xs={12}>
            <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  💰 Cloud Computing Salary Ranges (2025)
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                      <Typography variant="subtitle1" fontWeight="bold">Junior Cloud Engineer</Typography>
                      <Typography variant="h5">$60k - $90k</Typography>
                      <Typography variant="body2">0-2 years experience</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                      <Typography variant="subtitle1" fontWeight="bold">DevOps Engineer</Typography>
                      <Typography variant="h5">$80k - $120k</Typography>
                      <Typography variant="body2">2-5 years experience</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                      <Typography variant="subtitle1" fontWeight="bold">Solutions Architect</Typography>
                      <Typography variant="h5">$100k - $150k+</Typography>
                      <Typography variant="body2">5+ years experience</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                      <Typography variant="subtitle1" fontWeight="bold">Security Engineer</Typography>
                      <Typography variant="h5">$90k - $130k</Typography>
                      <Typography variant="body2">3-6 years experience</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                      <Typography variant="subtitle1" fontWeight="bold">SRE Engineer</Typography>
                      <Typography variant="h5">$100k - $140k</Typography>
                      <Typography variant="body2">4-7 years experience</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                      <Typography variant="subtitle1" fontWeight="bold">Cloud Architect</Typography>
                      <Typography variant="h5">$120k - $180k+</Typography>
                      <Typography variant="body2">7+ years experience</Typography>
                    </Box>
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
