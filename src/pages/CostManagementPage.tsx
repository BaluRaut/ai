import { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Alert,
  TextField,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tab,
  Tabs,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import WarningIcon from '@mui/icons-material/Warning'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'

export default function CostManagementPage() {
  const [tabValue, setTabValue] = useState(0)
  const [hours, setHours] = useState('730')
  const [storage, setStorage] = useState('100')
  const [transfer, setTransfer] = useState('50')

  const calculateCost = () => {
    const ec2 = parseFloat(hours) * 0.0116 // t2.micro on-demand
    const s3 = parseFloat(storage) * 0.023
    const dataTransfer = parseFloat(transfer) * 0.09
    return (ec2 + s3 + dataTransfer).toFixed(2)
  }

  const freeTierLimits = [
    {
      service: 'EC2',
      provider: 'AWS',
      free: '750 hours/month t2.micro',
      duration: '12 months',
      notes: 'Linux/Windows, any region'
    },
    {
      service: 'S3',
      provider: 'AWS',
      free: '5 GB storage, 20,000 GET, 2,000 PUT',
      duration: '12 months',
      notes: 'Standard storage class'
    },
    {
      service: 'RDS',
      provider: 'AWS',
      free: '750 hours/month db.t2.micro, 20 GB storage',
      duration: '12 months',
      notes: 'MySQL, PostgreSQL, MariaDB'
    },
    {
      service: 'Lambda',
      provider: 'AWS',
      free: '1M requests/month, 400,000 GB-seconds',
      duration: 'Always Free',
      notes: 'Includes compute time'
    },
    {
      service: 'DynamoDB',
      provider: 'AWS',
      free: '25 GB storage, 25 WCU, 25 RCU',
      duration: 'Always Free',
      notes: 'On-demand pricing'
    },
    {
      service: 'CloudWatch',
      provider: 'AWS',
      free: '10 custom metrics, 10 alarms',
      duration: 'Always Free',
      notes: 'Basic monitoring'
    },
    {
      service: 'Virtual Machines',
      provider: 'Azure',
      free: '750 hours/month B1S',
      duration: '12 months',
      notes: 'Windows or Linux'
    },
    {
      service: 'Blob Storage',
      provider: 'Azure',
      free: '5 GB LRS, 20,000 read, 10,000 write',
      duration: '12 months',
      notes: 'Hot tier'
    },
    {
      service: 'SQL Database',
      provider: 'Azure',
      free: '250 GB',
      duration: '12 months',
      notes: 'Single database'
    },
    {
      service: 'Compute Engine',
      provider: 'GCP',
      free: '1 f1-micro instance/month',
      duration: 'Always Free',
      notes: 'US regions only'
    },
    {
      service: 'Cloud Storage',
      provider: 'GCP',
      free: '5 GB Regional storage',
      duration: 'Always Free',
      notes: 'US regions'
    },
    {
      service: 'Cloud Functions',
      provider: 'GCP',
      free: '2M invocations/month',
      duration: 'Always Free',
      notes: 'Includes compute time'
    },
  ]

  const costOptimizationTips = [
    {
      category: 'Compute',
      tips: [
        'Use Reserved Instances for predictable workloads (up to 75% savings)',
        'Use Spot Instances for fault-tolerant workloads (up to 90% savings)',
        'Right-size instances - don\'t over-provision',
        'Stop instances when not in use (dev/test environments)',
        'Use Auto Scaling to match capacity with demand',
        'Consider serverless (Lambda) for event-driven workloads',
      ]
    },
    {
      category: 'Storage',
      tips: [
        'Use S3 Intelligent-Tiering for automatic cost optimization',
        'Implement lifecycle policies to move old data to Glacier',
        'Delete unused snapshots and AMIs',
        'Use S3 Standard-IA for infrequently accessed data',
        'Enable compression before storing in S3',
        'Review and delete old EBS volumes',
      ]
    },
    {
      category: 'Database',
      tips: [
        'Use RDS Reserved Instances (up to 69% savings)',
        'Choose the right instance size based on actual usage',
        'Use Aurora Serverless for variable workloads',
        'Delete old database snapshots',
        'Use read replicas instead of larger instance for read-heavy apps',
        'Consider DynamoDB on-demand for unpredictable traffic',
      ]
    },
    {
      category: 'Network',
      tips: [
        'Minimize data transfer between regions',
        'Use CloudFront CDN to reduce origin requests',
        'Use VPC endpoints to avoid NAT Gateway costs',
        'Compress data before transfer',
        'Review and optimize data transfer patterns',
        'Use Direct Connect for large regular transfers',
      ]
    },
    {
      category: 'Monitoring',
      tips: [
        'Set up billing alerts (free!)',
        'Use AWS Cost Explorer to identify trends',
        'Tag all resources for cost allocation',
        'Review Cost Anomaly Detection',
        'Enable AWS Trusted Advisor',
        'Set up budget alerts at 50%, 80%, 100%',
      ]
    },
  ]

  const commonMistakes = [
    {
      mistake: 'Leaving EC2 instances running 24/7',
      impact: '$85/month unnecessary cost',
      solution: 'Stop instances after work hours, use Lambda for scheduled start/stop'
    },
    {
      mistake: 'Using on-demand instances for production',
      impact: 'Paying 3x more than necessary',
      solution: 'Buy Reserved Instances or Savings Plans for steady-state workloads'
    },
    {
      mistake: 'Storing everything in S3 Standard',
      impact: '$23/TB vs $4/TB in Glacier',
      solution: 'Use lifecycle policies to transition to cheaper storage classes'
    },
    {
      mistake: 'Not deleting old snapshots',
      impact: '$0.05/GB/month adds up',
      solution: 'Automate snapshot cleanup, keep only last 7 days'
    },
    {
      mistake: 'Ignoring data transfer costs',
      impact: '$0.09/GB can be hundreds of dollars',
      solution: 'Use CloudFront, minimize cross-region transfers'
    },
    {
      mistake: 'Over-provisioned RDS instances',
      impact: '$200/month for unused capacity',
      solution: 'Monitor metrics, right-size based on actual usage'
    },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AttachMoneyIcon fontSize="large" color="primary" />
          Cloud Cost Management
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Master cloud costs: Free tier guide, billing calculator, and optimization strategies
        </Typography>
      </Box>

      {/* Important Alert */}
      <Alert severity="warning" icon={<WarningIcon />} sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          ⚠️ Critical: Always set up billing alerts to avoid surprise charges!
        </Typography>
        <Typography variant="body2">
          Even with free tier, you can incur charges if you exceed limits. Set alerts at $10, $50, $100 to stay safe.
        </Typography>
      </Alert>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)}>
          <Tab label="Free Tier Guide" />
          <Tab label="Cost Calculator" />
          <Tab label="Optimization Tips" />
          <Tab label="Common Mistakes" />
        </Tabs>
      </Box>

      {/* Free Tier Tab */}
      {tabValue === 0 && (
        <>
          <Alert severity="success" sx={{ mb: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              🎉 Free Tier Benefits for Students:
            </Typography>
            <Typography variant="body2">
              • AWS: 12 months free + always-free services + $100 credits (AWS Educate)<br />
              • Azure: $100 credit + 12 months free + always-free services<br />
              • GCP: $300 credit (90 days) + always-free tier<br />
              Perfect for learning without spending money!
            </Typography>
          </Alert>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Service</strong></TableCell>
                  <TableCell><strong>Provider</strong></TableCell>
                  <TableCell><strong>Free Tier</strong></TableCell>
                  <TableCell><strong>Duration</strong></TableCell>
                  <TableCell><strong>Notes</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {freeTierLimits.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.service}</TableCell>
                    <TableCell>
                      <Chip 
                        label={item.provider} 
                        size="small"
                        color={item.provider === 'AWS' ? 'warning' : item.provider === 'Azure' ? 'info' : 'primary'}
                      />
                    </TableCell>
                    <TableCell>{item.free}</TableCell>
                    <TableCell>
                      <Chip 
                        label={item.duration} 
                        size="small"
                        color={item.duration === 'Always Free' ? 'success' : 'default'}
                      />
                    </TableCell>
                    <TableCell><Typography variant="caption">{item.notes}</Typography></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Card sx={{ mt: 3, bgcolor: 'info.light' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                💡 How to Stay Within Free Tier
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom>✅ Do This:</Typography>
                  <ul>
                    <li>Set up billing alerts</li>
                    <li>Monitor usage in billing dashboard</li>
                    <li>Stop/terminate resources when not using</li>
                    <li>Use free tier eligible services</li>
                    <li>Check AWS Free Tier Usage page daily</li>
                    <li>Enable MFA on root account</li>
                  </ul>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom>❌ Avoid This:</Typography>
                  <ul>
                    <li>Running multiple large instances</li>
                    <li>Storing TBs of data</li>
                    <li>Excessive data transfer</li>
                    <li>Using non-free tier services</li>
                    <li>Leaving resources running 24/7 after testing</li>
                    <li>Ignoring billing alerts</li>
                  </ul>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </>
      )}

      {/* Calculator Tab */}
      {tabValue === 1 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  AWS Cost Estimator (Basic)
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Simple calculator for common services. For detailed estimates, use official AWS Pricing Calculator.
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="EC2 Hours/Month (t2.micro)"
                      type="number"
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                      helperText="Free tier: 750 hours/month"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="S3 Storage (GB)"
                      type="number"
                      value={storage}
                      onChange={(e) => setStorage(e.target.value)}
                      helperText="Free tier: 5 GB"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Data Transfer Out (GB)"
                      type="number"
                      value={transfer}
                      onChange={(e) => setTransfer(e.target.value)}
                      helperText="First 100 GB free/month"
                    />
                  </Grid>
                </Grid>

                <Box sx={{ mt: 3, p: 3, bgcolor: 'success.light', borderRadius: 2 }}>
                  <Typography variant="h4">
                    Estimated Monthly Cost: ${calculateCost()}
                  </Typography>
                  <Typography variant="caption">
                    * Approximate costs. Actual billing may vary based on region and exact usage.
                  </Typography>
                </Box>

                <Alert severity="info" sx={{ mt: 2 }}>
                  <strong>Pro Tip:</strong> Use AWS Pricing Calculator (https://calculator.aws) for accurate, detailed estimates including Reserved Instances and Savings Plans.
                </Alert>
              </CardContent>
            </Card>
          </Grid>

          {/* Pricing Comparison */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  💰 Quick Pricing Reference (USD/month)
                </Typography>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell><strong>Service</strong></TableCell>
                        <TableCell><strong>AWS</strong></TableCell>
                        <TableCell><strong>Azure</strong></TableCell>
                        <TableCell><strong>GCP</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Small VM (1vCPU, 1GB RAM)</TableCell>
                        <TableCell>$8.50 (t2.micro)</TableCell>
                        <TableCell>$14.60 (B1s)</TableCell>
                        <TableCell>$7.30 (f1-micro)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Medium VM (2vCPU, 4GB RAM)</TableCell>
                        <TableCell>$33.87 (t3.medium)</TableCell>
                        <TableCell>$60.74 (B2s)</TableCell>
                        <TableCell>$24.27 (e2-medium)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>100 GB Storage</TableCell>
                        <TableCell>$2.30 (S3 Standard)</TableCell>
                        <TableCell>$2.40 (Blob Hot)</TableCell>
                        <TableCell>$2.60 (Standard)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>MySQL Database (Small)</TableCell>
                        <TableCell>$15.33 (db.t3.micro)</TableCell>
                        <TableCell>$14.83 (Basic)</TableCell>
                        <TableCell>$7.67 (db-f1-micro)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                  * Prices as of Nov 2025, US East region. Check official pricing for latest rates.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* Optimization Tips Tab */}
      {tabValue === 2 && (
        <Grid container spacing={3}>
          {costOptimizationTips.map((section, index) => (
            <Grid item xs={12} key={index}>
              <Accordion defaultExpanded={index === 0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">
                    <TipsAndUpdatesIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    {section.category} Optimization
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {section.tips.map((tip, idx) => (
                      <li key={idx}>
                        <Typography variant="body2" paragraph>
                          {tip}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}

          {/* Quick Wins */}
          <Grid item xs={12}>
            <Card sx={{ bgcolor: 'success.light' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  🚀 Quick Wins - Implement Today!
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>Immediate Actions:</Typography>
                    <ol>
                      <li>Set up billing alerts ($10, $50, $100)</li>
                      <li>Stop all non-production instances after hours</li>
                      <li>Delete old snapshots and AMIs</li>
                      <li>Review and terminate unused resources</li>
                      <li>Enable Cost Explorer</li>
                    </ol>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>Potential Savings:</Typography>
                    <ul>
                      <li>Reserved Instances: 40-75% savings</li>
                      <li>Spot Instances: Up to 90% savings</li>
                      <li>S3 Intelligent-Tiering: 30-50% on storage</li>
                      <li>Auto-shutdown dev/test: 65% on compute</li>
                      <li>Right-sizing: 20-30% average</li>
                    </ul>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* Common Mistakes Tab */}
      {tabValue === 3 && (
        <Grid container spacing={2}>
          {commonMistakes.map((mistake, index) => (
            <Grid item xs={12} key={index}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <WarningIcon color="error" />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" color="error" gutterBottom>
                        {mistake.mistake}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        <strong>Impact:</strong> {mistake.impact}
                      </Typography>
                      <Alert severity="success" variant="outlined">
                        <strong>Solution:</strong> {mistake.solution}
                      </Alert>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* How to Set Up Billing Alerts */}
          <Grid item xs={12}>
            <Card sx={{ bgcolor: 'warning.light' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  🔔 How to Set Up AWS Billing Alerts (Step-by-Step)
                </Typography>
                <ol>
                  <li>Sign in to AWS Console as root user</li>
                  <li>Go to Billing Dashboard → Billing Preferences</li>
                  <li>Check "Receive Billing Alerts"</li>
                  <li>Save preferences</li>
                  <li>Go to CloudWatch → Alarms → Billing</li>
                  <li>Create Alarm → Select Metric → Billing → Total Estimated Charge</li>
                  <li>Set threshold (e.g., $10)</li>
                  <li>Configure SNS topic to send email</li>
                  <li>Create alarm and confirm email subscription</li>
                  <li>Repeat for $50, $100 thresholds</li>
                </ol>
                <Alert severity="info" sx={{ mt: 2 }}>
                  <strong>Note:</strong> CloudWatch billing metrics are only available in us-east-1 region!
                </Alert>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  )
}
