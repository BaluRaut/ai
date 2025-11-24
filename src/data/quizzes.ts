import { Quiz } from '../types'

export const quizzes: Quiz[] = [
  // Cloud Foundations
  {
    id: 'quiz-what-is-cloud',
    moduleId: 'cloud-intro',
    topicId: 'what-is-cloud',
    title: 'Quiz: What is Cloud Computing?',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'Which description best matches cloud computing?',
        options: [
          'Buying your own hardware and hosting locally',
          'Renting computing resources over the internet as needed',
          'Installing software from CDs on every computer',
          'Using dial-up modems to share files'
        ],
        correctAnswer: 1,
        explanation: 'Cloud computing delivers computing resources via the internet on-demand, similar to a utility model.'
      },
      {
        id: 'q2',
        question: 'Which characteristic is NOT part of cloud computing?',
        options: [
          'On-demand self-service',
          'Resource pooling',
          'Rapid elasticity',
          'Manual hardware procurement for every workload'
        ],
        correctAnswer: 3,
        explanation: 'Traditional manual procurement slows teams down; cloud resources are provisioned programmatically.'
      },
      {
        id: 'q3',
        question: 'What billing model do public clouds commonly follow?',
        options: [
          'Pay-as-you-go based on consumption',
          'Flat lifetime fee per server',
          'Quarterly licensing only',
          'Barter with unused hardware'
        ],
        correctAnswer: 0,
        explanation: 'Measured service enables paying only for the resources actually consumed.'
      }
    ]
  },
  {
    id: 'quiz-history-of-cloud',
    moduleId: 'cloud-intro',
    topicId: 'history-of-cloud',
    title: 'Quiz: History of Cloud',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'Which company launched EC2 and popularized IaaS in 2006?',
        options: ['Microsoft', 'Amazon', 'IBM', 'Oracle'],
        correctAnswer: 1,
        explanation: 'Amazon Web Services launched EC2 in 2006, jump-starting modern cloud adoption.'
      },
      {
        id: 'q2',
        question: 'What technology from the 1970s enabled multiple virtual machines on one mainframe?',
        options: ['Dial-up networking', 'Virtualization', 'Wi-Fi', 'Blockchain'],
        correctAnswer: 1,
        explanation: 'Virtualization layers like IBM VM/370 allowed many OS instances on a single host.'
      },
      {
        id: 'q3',
        question: 'Who described computing as a public utility in 1961?',
        options: ['Steve Jobs', 'John McCarthy', 'Grace Hopper', 'Vint Cerf'],
        correctAnswer: 1,
        explanation: 'Computer scientist John McCarthy predicted a utility-style computing future.'
      }
    ]
  },
  {
    id: 'quiz-how-cloud-works',
    moduleId: 'cloud-intro',
    topicId: 'how-cloud-works',
    title: 'Quiz: How Cloud Works',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'Which layer creates and manages virtual machines on physical hardware?',
        options: ['Browser', 'Hypervisor', 'Database', 'Switch'],
        correctAnswer: 1,
        explanation: 'The hypervisor abstracts physical hardware into multiple virtual machines.'
      },
      {
        id: 'q2',
        question: 'What do availability zones provide?',
        options: ['Different pricing tiers', 'Isolated power and networking within a region', 'New programming languages', 'Customer support scripts'],
        correctAnswer: 1,
        explanation: 'Multiple availability zones deliver redundancy inside a region.'
      },
      {
        id: 'q3',
        question: 'Which component distributes traffic across multiple instances?',
        options: ['Firewall', 'Load balancer', 'Package manager', 'Compiler'],
        correctAnswer: 1,
        explanation: 'Load balancers keep workloads healthy by spreading requests over targets.'
      }
    ]
  },
  {
    id: 'quiz-service-models',
    moduleId: 'cloud-intro',
    topicId: 'service-models',
    title: 'Quiz: Cloud Service Models',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'In which model does the customer manage the operating system?',
        options: ['SaaS', 'PaaS', 'IaaS', 'Serverless'],
        correctAnswer: 2,
        explanation: 'Infrastructure as a Service hands over virtual hardware while customers manage OS and runtime.'
      },
      {
        id: 'q2',
        question: 'Which option is an example of PaaS?',
        options: ['Amazon EC2', 'Google App Engine', 'Gmail', 'Microsoft Word'],
        correctAnswer: 1,
        explanation: 'App Engine lets developers deploy code without managing servers or OS patches.'
      },
      {
        id: 'q3',
        question: 'SaaS solutions most closely resemble which analogy?',
        options: ['Buying land to build on', 'Renting a turnkey apartment', 'Purchasing raw metal', 'Maintaining a fleet of vehicles yourself'],
        correctAnswer: 1,
        explanation: 'SaaS delivers a complete application ready for immediate use like a fully furnished apartment.'
      }
    ]
  },
  {
    id: 'quiz-deployment-models',
    moduleId: 'cloud-intro',
    topicId: 'deployment-models',
    title: 'Quiz: Deployment Models',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'Which model mixes on-premises and public cloud resources?',
        options: ['Public cloud', 'Private cloud', 'Hybrid cloud', 'Community cloud'],
        correctAnswer: 2,
        explanation: 'Hybrid cloud blends private infrastructure with public cloud services.'
      },
      {
        id: 'q2',
        question: 'Multi-cloud strategies help avoid what?',
        options: ['Automation', 'Vendor lock-in', 'Security', 'High availability'],
        correctAnswer: 1,
        explanation: 'Using multiple providers reduces dependence on a single vendor.'
      },
      {
        id: 'q3',
        question: 'Which deployment model gives a single organization dedicated infrastructure?',
        options: ['Public', 'Private', 'Hybrid', 'Community'],
        correctAnswer: 1,
        explanation: 'Private clouds are designed for one organization with maximum control.'
      }
    ]
  },

  // Networking
  {
    id: 'quiz-networking-basics',
    moduleId: 'networking',
    topicId: 'networking-basics',
    title: 'Quiz: Networking Basics',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'Which statement defines latency?',
        options: ['Total bandwidth available', 'Time delay for data to travel', 'Number of connected devices', 'IP address range'],
        correctAnswer: 1,
        explanation: 'Latency measures how long it takes for data to travel from source to destination.'
      },
      {
        id: 'q2',
        question: 'What does a server provide in a client-server model?',
        options: ['Requests', 'Responses/services', 'IP leases only', 'Cables'],
        correctAnswer: 1,
        explanation: 'Servers host services or data consumed by clients.'
      },
      {
        id: 'q3',
        question: 'Which protocol is used for secure remote shell access?',
        options: ['HTTP', 'SSH', 'FTP', 'SMTP'],
        correctAnswer: 1,
        explanation: 'Secure Shell (SSH) encrypts terminal sessions over TCP port 22.'
      }
    ]
  },
  {
    id: 'quiz-dns',
    moduleId: 'networking',
    topicId: 'dns-explained',
    title: 'Quiz: DNS Essentials',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'What does an A record map?',
        options: ['Domain to IPv4 address', 'Domain to email server', 'Domain to IPv6 address', 'Domain to TXT note'],
        correctAnswer: 0,
        explanation: 'A records translate hostnames to IPv4 addresses.'
      },
      {
        id: 'q2',
        question: 'Which record routes email for a domain?',
        options: ['TXT', 'MX', 'CNAME', 'NS'],
        correctAnswer: 1,
        explanation: 'MX (Mail Exchange) records point to email servers handling inbound mail.'
      },
      {
        id: 'q3',
        question: 'What does TTL control in DNS?',
        options: ['Password length', 'Cache duration before re-querying', 'Domain ownership duration', 'Renewal cost'],
        correctAnswer: 1,
        explanation: 'Time To Live determines how long resolvers cache DNS responses.'
      }
    ]
  },

  // Cloud Providers
  {
    id: 'quiz-aws-core',
    moduleId: 'cloud-providers',
    topicId: 'aws-core-services',
    title: 'Quiz: AWS Core Services',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'Which AWS service provides object storage?',
        options: ['EC2', 'Lambda', 'S3', 'CloudTrail'],
        correctAnswer: 2,
        explanation: 'Amazon S3 stores unstructured objects with high durability.'
      },
      {
        id: 'q2',
        question: 'Which service manages relational databases?',
        options: ['RDS', 'SNS', 'CloudFront', 'GuardDuty'],
        correctAnswer: 0,
        explanation: 'Amazon RDS offers managed relational database engines.'
      },
      {
        id: 'q3',
        question: 'What does IAM manage?',
        options: ['Monitoring dashboards', 'User identities and permissions', 'Network peering', 'Billing only'],
        correctAnswer: 1,
        explanation: 'Identity and Access Management defines who can do what inside AWS.'
      }
    ]
  },
  {
    id: 'quiz-gcp-core',
    moduleId: 'cloud-providers',
    topicId: 'gcp-services',
    title: 'Quiz: GCP Core Services',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'Which service provides scalable VM instances?',
        options: ['Cloud Storage', 'Compute Engine', 'BigQuery', 'Dataproc'],
        correctAnswer: 1,
        explanation: 'Compute Engine runs virtual machines of varying machine families.'
      },
      {
        id: 'q2',
        question: 'Which managed data warehouse is serverless on GCP?',
        options: ['BigQuery', 'Firestore', 'Cloud SQL', 'Spanner'],
        correctAnswer: 0,
        explanation: 'BigQuery is a fully managed analytics warehouse with SQL interface.'
      },
      {
        id: 'q3',
        question: 'Which service deploys containers on Kubernetes control planes?',
        options: ['Cloud Functions', 'GKE', 'Cloud Run jobs', 'Pub/Sub'],
        correctAnswer: 1,
        explanation: 'Google Kubernetes Engine manages Kubernetes clusters and workloads.'
      }
    ]
  },
  {
    id: 'quiz-azure-core',
    moduleId: 'cloud-providers',
    topicId: 'azure-intro',
    title: 'Quiz: Azure Core Concepts',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'What is Azure Virtual Machines comparable to?',
        options: ['AWS EC2', 'Azure Functions', 'Google Sheets', 'GitHub'],
        correctAnswer: 0,
        explanation: 'Azure VMs offer IaaS compute similar to Amazon EC2.'
      },
      {
        id: 'q2',
        question: 'Which service pairs well for serverless event-driven code?',
        options: ['Azure Functions', 'Azure CDN', 'Azure DevOps Boards', 'Power BI'],
        correctAnswer: 0,
        explanation: 'Azure Functions run code on-demand without server management.'
      },
      {
        id: 'q3',
        question: 'Azure Active Directory primarily handles what?',
        options: ['Virtual networks', 'Identity and single sign-on', 'Cost analysis', 'Media transcoding'],
        correctAnswer: 1,
        explanation: 'Azure AD manages directory services and identity for Microsoft clouds.'
      }
    ]
  },

  // Delivery & Automation
  {
    id: 'quiz-ci-cd',
    moduleId: 'cicd',
    topicId: 'cicd-pipeline',
    title: 'Quiz: CI/CD Fundamentals',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'Continuous Integration focuses on what?',
        options: ['Nightly manual builds', 'Merging code frequently with automated tests', 'Deploying hardware updates', 'Marketing websites'],
        correctAnswer: 1,
        explanation: 'CI ensures code changes integrate frequently and are validated by automated builds/tests.'
      },
      {
        id: 'q2',
        question: 'What is the purpose of a staging environment in pipelines?',
        options: ['Store documentation', 'Practice deployments before production', 'Keep backups of old builds', 'Test user passwords'],
        correctAnswer: 1,
        explanation: 'Staging mimics production to validate releases safely before go-live.'
      },
      {
        id: 'q3',
        question: 'Which step commonly follows automated tests before production release?',
        options: ['Manual code merge only', 'Security scanning and approvals', 'Unrelated HR review', 'Network rewiring'],
        correctAnswer: 1,
        explanation: 'Security scans and approvals ensure compliance before deploys.'
      }
    ]
  },

  // Domains & Email
  {
    id: 'quiz-domain-basics',
    moduleId: 'domains',
    topicId: 'domain-basics',
    title: 'Quiz: Domain Basics',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'What is a TLD in a domain name?',
        options: ['Top-level domain extension', 'Time-to-live value', 'Total link duration', 'Tag level descriptor'],
        correctAnswer: 0,
        explanation: 'Examples of TLDs include .com, .org, .io.'
      },
      {
        id: 'q2',
        question: 'Which system stores domain registrations?',
        options: ['ISP router', 'Domain registrar', 'Email client', 'Browser cache'],
        correctAnswer: 1,
        explanation: 'Registrars handle ownership records and renewals.'
      },
      {
        id: 'q3',
        question: 'Why use DNS instead of IPs?',
        options: ['IPs never change', 'DNS names are easier for humans to remember', 'DNS is slower', 'IPs are more secure'],
        correctAnswer: 1,
        explanation: 'Human-friendly names improve usability while DNS resolves to numeric IPs.'
      }
    ]
  },
  {
    id: 'quiz-email-security',
    moduleId: 'domains',
    topicId: 'email-security',
    title: 'Quiz: Email Security (SPF/DKIM/DMARC)',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'What does SPF validate?',
        options: ['Sender IPs allowed to send mail for a domain', 'Attachment size', 'Spam keywords', 'Encryption strength'],
        correctAnswer: 0,
        explanation: 'Sender Policy Framework lists authorized mail servers for a domain.'
      },
      {
        id: 'q2',
        question: 'DKIM adds which security control?',
        options: ['Digital signature on outbound mail', 'Spam filtering', 'Content translation', 'Link tracking'],
        correctAnswer: 0,
        explanation: 'DKIM signs email headers/body so recipients can verify authenticity.'
      },
      {
        id: 'q3',
        question: 'DMARC policies instruct receivers to do what?',
        options: ['Increase mailbox size', 'Handle authentication failures per policy', 'Change domain ownership', 'Throttle outgoing mail'],
        correctAnswer: 1,
        explanation: 'DMARC defines how receivers treat emails that fail SPF/DKIM checks.'
      }
    ]
  },
  {
    id: 'quiz-ssl-certificates',
    moduleId: 'domains',
  topicId: 'ssl-certificates',
    title: 'Quiz: SSL/TLS Certificates',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'Which indicator shows a site is using HTTPS?',
        options: ['Padlock icon in browser bar', 'File download prompt', 'Automatic fullscreen', 'Pop-up alert'],
        correctAnswer: 0,
        explanation: 'Browsers display a padlock to indicate a secure TLS connection.'
      },
      {
        id: 'q2',
        question: 'How long are Let\'s Encrypt certificates valid?',
        options: ['30 days', '90 days', '1 year', '5 years'],
        correctAnswer: 1,
        explanation: 'Let\'s Encrypt certificates expire every 90 days, encouraging automation.'
      },
      {
        id: 'q3',
        question: 'Why enable HTTPS even on informational sites?',
        options: ['Improves SEO and user trust', 'Slows down content delivery', 'Costs thousands yearly', 'Disables caching'],
        correctAnswer: 0,
        explanation: 'HTTPS protects integrity, builds trust, and is used as a ranking signal.'
      }
    ]
  },

  // FinOps
  {
    id: 'quiz-finops-foundations',
    moduleId: 'finops-governance',
    title: 'Quiz: FinOps & Cloud Governance Essentials',
    passingScore: 80,
    questions: [
      {
        id: 'q1',
        question: 'What is the core goal of FinOps?',
        options: [
          'Eliminate finance teams',
          'Balance cost, speed, and quality using shared accountability',
          'Force all workloads to the smallest instance',
          'Move everything on-premises'
        ],
        correctAnswer: 1,
        explanation: 'FinOps connects finance, engineering, and business to make informed trade-offs.'
      },
      {
        id: 'q2',
        question: 'Why enforce a tagging strategy?',
        options: [
          'To decorate dashboards only',
          'To attribute spend to products/teams automatically',
          'To slow deployments',
          'To meet domain registrar requirements'
        ],
        correctAnswer: 1,
        explanation: 'Consistent tags enable cost allocation, chargeback, and accountability.'
      },
      {
        id: 'q3',
        question: 'Which KPI measures Reserved Instance effectiveness?',
        options: ['CPU clock speed', 'Coverage/utilization percentages', 'Number of IAM users', 'Git commits per day'],
        correctAnswer: 1,
        explanation: 'Coverage and utilization show how much spend is protected and actually consumed.'
      },
      {
        id: 'q4',
        question: 'What is a showback report used for?',
        options: ['Hide cloud costs', 'Expose spend to teams without billing them directly', 'Encrypt data at rest', 'Replace architecture diagrams'],
        correctAnswer: 1,
        explanation: 'Showback reports drive awareness by sharing detailed consumption per team or product.'
      },
      {
        id: 'q5',
        question: 'Automation in FinOps helps teams by…',
        options: ['Creating random alerts', 'Automatically remediating waste and notifying owners', 'Preventing any scaling', 'Deleting all resources nightly'],
        correctAnswer: 1,
        explanation: 'Automation enforces guardrails, opens tickets, or stops idle resources without manual toil.'
      }
    ]
  }
]
