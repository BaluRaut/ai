import { LearningDay } from '../types'

export const learningPath: LearningDay[] = [
  { day: 1, phase: 'Foundation', module: 'Cloud Introduction', topics: ['What is Cloud Computing'], practicalExercise: 'Sign up for AWS, GCP, Azure free tiers', estimatedHours: 2 },
  { day: 2, phase: 'Foundation', module: 'Cloud Introduction', topics: ['What is Cloud Computing (cont.)'], practicalExercise: 'Explore cloud provider consoles', estimatedHours: 2 },
  { day: 3, phase: 'Foundation', module: 'Cloud Introduction', topics: ['History of Cloud Computing'], practicalExercise: 'Research cloud adoption case studies', estimatedHours: 2 },
  { day: 5, phase: 'Foundation', module: 'Cloud Introduction', topics: ['How Cloud Works'], practicalExercise: 'Virtual tour of data center', estimatedHours: 3 },
  { day: 8, phase: 'Foundation', module: 'Cloud Introduction', topics: ['Service Models'], practicalExercise: 'Identify IaaS, PaaS, SaaS in apps you use', estimatedHours: 2 },
  { day: 11, phase: 'Foundation', module: 'Cloud Introduction', topics: ['Deployment Models'], practicalExercise: 'Design deployment model for scenarios', estimatedHours: 2 },
  { day: 15, phase: 'Foundation', module: 'Networking', topics: ['Networking Basics'], practicalExercise: 'Map your home network', estimatedHours: 2 },
  { day: 18, phase: 'Foundation', module: 'Networking', topics: ['IP Addresses'], practicalExercise: 'Find your public and private IPs', estimatedHours: 2 },
  { day: 21, phase: 'Foundation', module: 'Networking', topics: ['DNS'], practicalExercise: 'Use nslookup and dig commands', estimatedHours: 3 },
  { day: 24, phase: 'Foundation', module: 'Networking', topics: ['Protocols'], practicalExercise: 'Analyze network traffic with DevTools', estimatedHours: 2 },
  { day: 27, phase: 'Foundation', module: 'Networking', topics: ['Ports & Firewalls'], practicalExercise: 'Configure firewall rules', estimatedHours: 2 },
  { day: 43, phase: 'Foundation', module: 'Cloud Providers', topics: ['AWS Overview'], practicalExercise: 'Create AWS account, explore console', estimatedHours: 3 },
  { day: 46, phase: 'Foundation', module: 'Cloud Providers', topics: ['AWS Services'], practicalExercise: 'Launch EC2 instance, create S3 bucket', estimatedHours: 3 },
  { day: 49, phase: 'Foundation', module: 'Cloud Providers', topics: ['GCP Overview'], practicalExercise: 'Create GCP account', estimatedHours: 2 },
  { day: 51, phase: 'Foundation', module: 'Cloud Providers', topics: ['GCP Services'], practicalExercise: 'Deploy on App Engine', estimatedHours: 3 },
  { day: 53, phase: 'Foundation', module: 'Cloud Providers', topics: ['Azure Overview'], practicalExercise: 'Create Azure account', estimatedHours: 2 },
  { day: 179, phase: 'DevOps', module: 'CI/CD', topics: ['Continuous Integration'], practicalExercise: 'Setup GitHub repository with workflow', estimatedHours: 3 },
  { day: 182, phase: 'DevOps', module: 'CI/CD', topics: ['Continuous Delivery'], practicalExercise: 'Auto-deploy to staging', estimatedHours: 3 },
  { day: 185, phase: 'DevOps', module: 'CI/CD', topics: ['CI/CD Pipeline'], practicalExercise: 'Build complete pipeline', estimatedHours: 4 },
  { day: 249, phase: 'Web Services', module: 'Domains', topics: ['Domain Basics'], practicalExercise: 'Research domain availability', estimatedHours: 1 },
  { day: 252, phase: 'Web Services', module: 'Domains', topics: ['Domain Registration'], practicalExercise: 'Register your first domain', estimatedHours: 2 },
  { day: 255, phase: 'Web Services', module: 'Domains', topics: ['DNS Records'], practicalExercise: 'Configure DNS records', estimatedHours: 2 },
  { day: 258, phase: 'Web Services', module: 'Domains', topics: ['Subdomains'], practicalExercise: 'Create multiple subdomains', estimatedHours: 2 },
  { day: 261, phase: 'Web Services', module: 'Domains', topics: ['Email Setup'], practicalExercise: 'Configure Google Workspace', estimatedHours: 3 },
  { day: 264, phase: 'Web Services', module: 'Domains', topics: ['MX Records'], practicalExercise: 'Add MX records for email', estimatedHours: 2 },
  { day: 266, phase: 'Web Services', module: 'Domains', topics: ['Email Security'], practicalExercise: 'Add SPF, DKIM, DMARC', estimatedHours: 2 },
  { day: 268, phase: 'Web Services', module: 'Domains', topics: ['SSL Certificates'], practicalExercise: 'Enable HTTPS with Let\'s Encrypt', estimatedHours: 2 }
  ,
  // FinOps & Cloud Governance Phase
  { day: 300, phase: 'FinOps', module: 'FinOps & Governance', topics: ['FinOps Foundations', 'Cross-functional kickoff'], practicalExercise: 'Run a FinOps discovery workshop with finance + engineering', estimatedHours: 3 },
  { day: 304, phase: 'FinOps', module: 'FinOps & Governance', topics: ['Tagging Strategy', 'Cost Allocation'], practicalExercise: 'Implement mandatory tag keys via IaC and audit 10 resources', estimatedHours: 2 },
  { day: 308, phase: 'FinOps', module: 'FinOps & Governance', topics: ['Budgets & Alerts'], practicalExercise: 'Configure multi-threshold alerts in AWS Budgets/Azure Cost Management', estimatedHours: 2 },
  { day: 312, phase: 'FinOps', module: 'FinOps & Governance', topics: ['Rightsizing Playbooks'], practicalExercise: 'Identify top 5 underutilized instances and document downsizing plan', estimatedHours: 2 },
  { day: 316, phase: 'FinOps', module: 'FinOps & Governance', topics: ['Commitment Portfolio'], practicalExercise: 'Model savings for RI/Savings Plan purchase and present to stakeholders', estimatedHours: 2 },
  { day: 320, phase: 'FinOps', module: 'FinOps & Governance', topics: ['Policy-as-Code Guardrails'], practicalExercise: 'Deploy a Config/Policy rule that enforces approved regions', estimatedHours: 3 },
  { day: 324, phase: 'FinOps', module: 'FinOps & Governance', topics: ['Chargeback Models'], practicalExercise: 'Build a showback spreadsheet with three allocation drivers', estimatedHours: 2 },
  { day: 328, phase: 'FinOps', module: 'FinOps & Governance', topics: ['Automation & Dashboards'], practicalExercise: 'Create a QuickSight/Data Studio dashboard showing top cost drivers and anomalies', estimatedHours: 3 }
]

