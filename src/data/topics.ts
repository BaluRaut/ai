import { Topic } from '../types'
import { enhancedTopics } from './enhancedTopics'

const baseTopics: Topic[] = [
  // Cloud Introduction Module (Days 1-14)
  {
    id: 'what-is-cloud',
    moduleId: 'cloud-intro',
    title: 'What is Cloud Computing?',
    titleMr: 'क्लाउड कंप्युटिंग म्हणजे काय?',
    day: 1,
    content: `Cloud computing is the delivery of computing services over the internet ("the cloud"). Instead of owning and maintaining physical servers and infrastructure, you can access technology services on an as-needed basis from a cloud provider.

Think of it like electricity - you don't need to own a power plant to use electricity. You just plug in and pay for what you use. Cloud computing works the same way!`,
    contentMr: `क्लाउड कंप्युटिंग म्हणजे इंटरनेटवरून ("क्लाउड") कंप्युटिंग सेवांचे वितरण. भौतिक सर्व्हर आणि पायाभूत सुविधांची मालकी आणि देखभाल करण्याऐवजी, आपण क्लाउड प्रदात्याकडून आवश्यकतेनुसार तंत्रज्ञान सेवा मिळवू शकता.

याचा विचार विजेप्रमाणे करा - वीज वापरण्यासाठी आपल्याला पॉवर प्लांटची मालकी नको. आपण फक्त प्लग इन करा आणि आपण वापरता त्यासाठी पैसे द्या. क्लाउड कंप्युटिंग त्याच प्रकारे कार्य करते!`,
    keyPoints: [
      '✅ On-demand access to computing resources',
      '💰 Pay only for what you use (pay-as-you-go)',
      '🚫 No need to buy or maintain physical servers',
      '🌍 Access from anywhere with internet',
      '📈 Scalable - grow or shrink resources instantly'
    ],
    keyPointsMr: [
      '✅ कंप्युटिंग संसाधनांसाठी मागणीनुसार प्रवेश',
      '💰 फक्त आपण वापरता त्यासाठीच पैसे द्या (पे-अ‍ॅज-यू-गो)',
      '🚫 भौतिक सर्व्हर खरेदी किंवा देखभाल करण्याची गरज नाही',
      '🌍 इंटरनेटसह कुठूनही प्रवेश करा',
      '📈 स्केलेबल - संसाधने त्वरित वाढवा किंवा कमी करा'
    ],
    examples: [
      'Gmail - Email service in the cloud',
      'Netflix - Video streaming using cloud infrastructure',
      'Dropbox - File storage in the cloud',
      'Google Docs - Document editing without software installation',
      'Zoom - Video conferencing hosted in cloud'
    ],
    examplesMr: [
      'Gmail - क्लाउडमधील ईमेल सेवा',
      'Netflix - क्लाउड पायाभूत सुविधा वापरून व्हिडिओ स्ट्रीमिंग',
      'Dropbox - क्लाउडमध्ये फाइल स्टोरेज',
      'Google Docs - सॉफ्टवेअर इन्स्टॉलेशनशिवाय दस्तऐवज संपादन',
      'Zoom - क्लाउडमध्ये होस्ट केलेले व्हिडिओ कॉन्फरन्सिंग'
    ],
    practicalExercise: 'Create free tier accounts on AWS, Google Cloud, and Azure. Explore their dashboards and identify 3 services on each platform.',
    practicalExerciseMr: 'AWS, Google Cloud आणि Azure वर मोफत खाती तयार करा. त्यांचे डॅशबोर्ड एक्सप्लोर करा आणि प्रत्येक प्लॅटफॉर्मवर 3 सेवा ओळखा.'
  },
  {
    id: 'history-of-cloud',
    moduleId: 'cloud-intro',
    title: 'History of Cloud Computing',
    titleMr: 'क्लाउड कंप्युटिंगचा इतिहास',
    day: 3,
    content: `Cloud computing didn't appear overnight. It evolved over decades from mainframe computers to the modern cloud services we use today.`,
    contentMr: `क्लाउड कंप्युटिंग रातोरात दिसले नाही. ते मेनफ्रेम संगणकांपासून आज आपण वापरत असलेल्या आधुनिक क्लाउड सेवांपर्यंत अनेक दशकांमध्ये विकसित झाले.`,
    keyPoints: [
      '1960s: Mainframe computers shared by multiple users',
      '1990s: Internet boom enables remote computing',
      '1999: Salesforce launches first SaaS application',
      '2002: Amazon builds internal infrastructure that becomes AWS',
      '2006: AWS launches EC2 - first major public cloud service',
      '2008: Google App Engine launched',
      '2010: Microsoft Azure introduced',
      '2015+: Serverless and container revolution',
      'Present: Multi-cloud and hybrid strategies dominate'
    ],
    keyPointsMr: [
      '1960: अनेक वापरकर्त्यांनी शेअर केलेले मेनफ्रेम संगणक',
      '1990: इंटरनेट बूमने दूरस्थ कंप्युटिंग सक्षम केले',
      '1999: Salesforce ने पहिले SaaS अॅप्लिकेशन लॉन्च केले',
      '2002: Amazon ने अंतर्गत पायाभूत सुविधा तयार केली जी AWS बनली',
      '2006: AWS ने EC2 लॉन्च केले - पहिली प्रमुख सार्वजनिक क्लाउड सेवा',
      '2008: Google App Engine लॉन्च झाले',
      '2010: Microsoft Azure सादर केले',
      '2015+: सर्व्हरलेस आणि कंटेनर क्रांती',
      'सध्या: मल्टी-क्लाउड आणि हायब्रिड धोरणे प्रबळ आहेत'
    ]
  },
  {
    id: 'how-cloud-works',
    moduleId: 'cloud-intro',
    title: 'How Cloud Computing Works',
    titleMr: 'क्लाउड कंप्युटिंग कसे कार्य करते',
    day: 5,
    content: `Cloud computing uses virtualization technology to create virtual machines on physical servers located in massive data centers around the world.`,
    contentMr: `क्लाउड कंप्युटिंग जगभरातील मोठ्या डेटा सेंटर्समध्ये असलेल्या भौतिक सर्व्हरवर व्हर्च्युअल मशीन तयार करण्यासाठी व्हर्च्युअलायझेशन तंत्रज्ञान वापरते.`,
    keyPoints: [
      '🏢 Data Centers: Warehouse-sized facilities with thousands of servers',
      '💻 Virtualization: One physical server runs multiple virtual machines',
      '🌐 Network: High-speed internet connects users to data centers',
      '🔌 APIs: Software interfaces to manage and access resources',
      '⚖️ Load Balancing: Distributes work across multiple servers',
      '🔄 Redundancy: Multiple copies of data for reliability',
      '🌍 Global Distribution: Data centers in multiple countries'
    ],
    keyPointsMr: [
      '🏢 डेटा सेंटर्स: हजारो सर्व्हरसह गोदाम-आकाराच्या सुविधा',
      '💻 व्हर्च्युअलायझेशन: एक भौतिक सर्व्हर अनेक व्हर्च्युअल मशीन चालवतो',
      '🌐 नेटवर्क: हाय-स्पीड इंटरनेट वापरकर्त्यांना डेटा सेंटर्सशी जोडते',
      '🔌 APIs: संसाधने व्यवस्थापित आणि प्रवेश करण्यासाठी सॉफ्टवेअर इंटरफेस',
      '⚖️ लोड बॅलन्सिंग: अनेक सर्व्हरवर काम वितरीत करते',
      '🔄 अनावश्यकता: विश्वसनीयतेसाठी डेटाच्या अनेक प्रती',
      '🌍 जागतिक वितरण: अनेक देशांमध्ये डेटा सेंटर्स'
    ],
    examples: [
      'Physical Server → Hypervisor → Multiple VMs',
      'Request from browser → Load Balancer → Nearest server',
      'Data saved → Replicated to 3+ locations automatically'
    ]
  },
  {
    id: 'service-models',
    moduleId: 'cloud-intro',
    title: 'Cloud Service Models (IaaS, PaaS, SaaS)',
    day: 8,
    content: `Three main service models define what the cloud provider manages vs what you manage. Think of it like renting different types of living spaces.`,
    keyPoints: [
      '🏗️ IaaS (Infrastructure as a Service): Like renting an empty apartment - You get virtual machines, storage, networks. You manage OS and applications.',
      '🛠️ PaaS (Platform as a Service): Like a serviced apartment - Development platform provided. You only manage your application code.',
      '🏠 SaaS (Software as a Service): Like a hotel - Complete applications ready to use. You just use the software, nothing to manage.'
    ],
    examples: [
      'IaaS: AWS EC2, Google Compute Engine, Azure VMs',
      'PaaS: Google App Engine, Heroku, AWS Elastic Beanstalk',
      'SaaS: Gmail, Salesforce, Microsoft 365, Zoom, Slack'
    ]
  },
  {
    id: 'deployment-models',
    moduleId: 'cloud-intro',
    title: 'Cloud Deployment Models',
    day: 11,
    content: `Different ways to deploy and use cloud infrastructure based on security, compliance, and business needs.`,
    keyPoints: [
      '🌐 Public Cloud: Services available to anyone over internet (AWS, Azure, GCP) - Most cost-effective',
      '🏢 Private Cloud: Dedicated infrastructure for one organization - Maximum control and security',
      '🔀 Hybrid Cloud: Combination of public and private - Best of both worlds',
      '☁️☁️ Multi-Cloud: Using services from multiple providers - Avoid vendor lock-in'
    ],
    examples: [
      'Public: Startup hosting website on AWS',
      'Private: Bank running critical systems on-premises',
      'Hybrid: Company keeping sensitive data private, public for web apps',
      'Multi-Cloud: Using AWS for compute, GCP for analytics'
    ]
  },

  // Networking Module (Days 15-30)
  {
    id: 'networking-basics',
    moduleId: 'networking',
    title: 'Networking Basics',
    day: 15,
    content: `A network is a group of computers and devices connected together to share resources and communicate. The internet is the largest network in the world!`,
    keyPoints: [
      '🖥️ Network: Connected devices that communicate',
      '🌍 Internet: Global network of networks',
      '📋 Protocol: Rules for data transmission',
      '👤 Client: Device requesting information (your computer)',
      '🖥️ Server: Device providing information',
      '📊 Bandwidth: Amount of data transmitted per second',
      '⏱️ Latency: Time delay in transmission (ping)'
    ],
    examples: [
      'Your home WiFi is a network',
      'When you visit google.com, your browser is the client',
      'Google\'s computers are the servers',
      'HTTP is the protocol they use to communicate'
    ]
  },
  {
    id: 'ip-addresses',
    moduleId: 'networking',
    title: 'IP Addresses Explained',
    day: 18,
    content: `Every device on a network has a unique IP address - like a phone number for computers. It tells data where to go.`,
    keyPoints: [
      '📱 IPv4: Common format - 192.168.1.1 (4 billion addresses)',
      '🆕 IPv6: New format - More addresses than atoms on Earth!',
      '🌐 Public IP: Address visible on internet',
      '🏠 Private IP: Address within local network (192.168.x.x)',
      '📌 Static IP: Permanent address',
      '🔄 Dynamic IP: Changes periodically (most home internet)'
    ],
    examples: [
      'Your router: 192.168.1.1 (private)',
      'Google DNS: 8.8.8.8 (public)',
      'Your laptop on home WiFi: 192.168.1.15 (private)',
      'Website server: Has public IP to be accessible worldwide'
    ]
  },
  {
    id: 'dns-explained',
    moduleId: 'networking',
    title: 'DNS - The Internet\'s Phonebook',
    day: 21,
    content: `DNS (Domain Name System) translates human-readable names like google.com into IP addresses that computers use. Without DNS, you'd have to remember IP addresses for every website!`,
    keyPoints: [
      '📖 DNS = Internet phonebook',
      'You type: www.google.com',
      'DNS translates: 142.250.185.46',
      '🗄️ DNS Servers: Store domain-to-IP mappings',
      '📝 DNS Records: Different types (A, CNAME, MX, TXT)',
      '⏰ TTL: How long to cache DNS info'
    ],
    examples: [
      'A Record: example.com → 192.0.2.1',
      'CNAME: www.example.com → example.com',
      'MX Record: Directs email to mail servers',
      'TXT Record: Verification, SPF for email'
    ]
  },
  {
    id: 'protocols',
    moduleId: 'networking',
    title: 'Network Protocols',
    day: 24,
    content: `Protocols are standardized rules for how data is formatted and transmitted. Like languages that computers use to talk to each other.`,
    keyPoints: [
      '🌐 HTTP/HTTPS: Web browsing (Port 80/443)',
      '📁 FTP: File transfer (Port 21)',
      '🔐 SSH: Secure remote access (Port 22)',
      '📧 SMTP: Sending email (Port 25, 587)',
      '🔍 DNS: Domain resolution (Port 53)',
      '✅ TCP: Reliable, ordered delivery',
      '⚡ UDP: Fast but no guarantee',
      '🏓 ICMP: Network diagnostics (ping)'
    ]
  },
  {
    id: 'ports-firewalls',
    moduleId: 'networking',
    title: 'Ports and Firewalls',
    day: 27,
    content: `Ports are virtual doors for different services. Firewalls control which doors are open and who can enter.`,
    keyPoints: [
      '🚪 Port: Virtual endpoint (0-65535)',
      '🔢 Well-known: 0-1023 (HTTP, SSH, etc.)',
      '🛡️ Firewall: Security guard for network',
      '⬇️ Inbound: Incoming connections',
      '⬆️ Outbound: Outgoing connections',
      '☁️ Security Groups: Cloud firewall'
    ],
    examples: [
      'Port 80: HTTP web traffic',
      'Port 443: HTTPS (secure)',
      'Port 22: SSH server access',
      'Port 3306: MySQL database',
      'Port 5432: PostgreSQL'
    ]
  },

  // Cloud Providers Module (Days 43-60)
  {
    id: 'aws-intro',
    moduleId: 'cloud-providers',
    title: 'Amazon Web Services (AWS)',
    day: 43,
    content: `AWS is the largest and most popular cloud platform, launched in 2006. It offers 200+ services and powers companies like Netflix, Airbnb, and NASA.`,
    keyPoints: [
      '🏆 Market leader - 32% market share',
      '📅 Launched 2006 - Cloud pioneer',
      '🌍 30+ geographic regions worldwide',
      '🛠️ 200+ services available',
      '💪 Powers: Netflix, Airbnb, NASA, Spotify',
      '💰 Free tier for learning'
    ]
  },
  {
    id: 'aws-core-services',
    moduleId: 'cloud-providers',
    title: 'AWS Core Services',
    day: 46,
    content: `Essential AWS services every cloud professional must know.`,
    keyPoints: [
      '💻 EC2: Virtual servers in the cloud',
      '📦 S3: Object storage for files',
      '🗄️ RDS: Managed databases (MySQL, PostgreSQL)',
      '⚡ Lambda: Run code without servers',
      '🔒 VPC: Private network environment',
      '🌍 CloudFront: CDN for fast delivery',
      '🌐 Route 53: DNS and domains',
      '👤 IAM: User permissions',
      '📊 CloudWatch: Monitoring',
      '🚀 Elastic Beanstalk: Easy app deployment'
    ],
    examples: [
      'EC2: Host a website',
      'S3: Store images and backups',
      'Lambda: Auto-process uploads',
      'RDS: Application database'
    ]
  },
  {
    id: 'gcp-intro',
    moduleId: 'cloud-providers',
    title: 'Google Cloud Platform',
    day: 49,
    content: `Google's cloud platform known for data analytics, AI/ML, and Kubernetes. Powers Google Search, Gmail, and YouTube.`,
    keyPoints: [
      '📊 Strong in data analytics and AI',
      '🔍 Powers Google services',
      '📈 ~10% market share',
      '🚀 Best-in-class networking',
      '🎯 Great for startups',
      '💵 $300 free credit'
    ]
  },
  {
    id: 'gcp-services',
    moduleId: 'cloud-providers',
    title: 'GCP Core Services',
    day: 51,
    content: `Key Google Cloud services to understand.`,
    keyPoints: [
      '💻 Compute Engine: VMs',
      '📦 Cloud Storage: Object storage',
      '🗄️ Cloud SQL: Managed databases',
      '⚡ Cloud Functions: Serverless',
      '🎨 App Engine: Platform for apps',
      '🐳 GKE: Kubernetes service',
      '📊 BigQuery: Data warehouse',
      '🌍 Cloud CDN: Content delivery',
      '🔥 Firebase: Mobile/web platform'
    ]
  },
  {
    id: 'azure-intro',
    moduleId: 'cloud-providers',
    title: 'Microsoft Azure',
    day: 53,
    content: `Microsoft's cloud with strong enterprise integration. Popular for companies using Microsoft products.`,
    keyPoints: [
      '🏢 Enterprise-focused',
      '📈 ~23% market share',
      '🔗 Great Office 365 integration',
      '🌐 60+ regions',
      '💼 Popular with corporations',
      '💵 $200 free credit'
    ]
  },

  // CI/CD Module
  {
    id: 'what-is-ci',
    moduleId: 'cicd',
    title: 'What is Continuous Integration (CI)?',
    day: 179,
    content: `CI is the practice of automatically building and testing code every time developers make changes. It catches bugs early and keeps code working.`,
    keyPoints: [
      '✅ Developers push code frequently (daily+)',
      '🔨 Automated build compiles code',
      '🧪 Automated tests catch bugs',
      '⚡ Quick feedback on issues',
      '🔀 Prevents integration conflicts',
      '📊 Everyone works on latest version'
    ],
    examples: [
      '1. Dev writes code and commits to Git',
      '2. CI system detects commit',
      '3. Code builds automatically',
      '4. Tests run automatically',
      '5. Developer gets success/failure notification'
    ]
  },
  {
    id: 'what-is-cd',
    moduleId: 'cicd',
    title: 'What is Continuous Delivery (CD)?',
    day: 182,
    content: `CD ensures code is always ready to deploy to production. It requires manual approval but deployment is automated.`,
    keyPoints: [
      '🚀 Code always ready to deploy',
      '✅ Passes all quality checks',
      '👆 Requires manual approval',
      '📉 Reduces deployment risk',
      '⏰ Deploy anytime',
      '🔄 Repeatable process'
    ]
  },
  {
    id: 'cicd-pipeline',
    moduleId: 'cicd',
    title: 'CI/CD Pipeline Explained',
    day: 185,
    content: `A pipeline is the automated workflow that takes code from development to production.`,
    keyPoints: [
      '1️⃣ Source: Code in Git',
      '2️⃣ Build: Compile and package',
      '3️⃣ Test: Run automated tests',
      '4️⃣ Security: Scan vulnerabilities',
      '5️⃣ Package: Create artifact',
      '6️⃣ Deploy Staging: Test environment',
      '7️⃣ Deploy Production: Release to users'
    ]
  },

  // FinOps & Cloud Governance Module (Days 300-330)
  {
    id: 'finops-foundations',
    moduleId: 'finops-governance',
    title: 'FinOps Foundations & Culture',
    titleMr: 'FinOps पायाभूत आणि संस्कृती',
    day: 300,
    content: `FinOps brings finance, engineering, and product teams together to make informed trade-offs between speed, cost, and quality. A healthy FinOps culture promotes shared accountability and real-time visibility into cloud spending.`,
    contentMr: `FinOps वित्त, अभियांत्रिकी आणि उत्पादन संघांना एकत्र आणते जेणेकरून गती, खर्च आणि गुणवत्ता यांच्यातील तडजोडींचे informed निर्णय घेता येतील. सशक्त FinOps संस्कृती सामायिक जबाबदारी आणि क्लाउड खर्चावर वास्तविक-वेळ दृश्यता वाढवते.`,
    keyPoints: [
      '🤝 Cross-functional collaboration between finance & tech',
      '📊 Real-time data for decision making',
      '🎯 Unit economics over total bill only',
      '🔁 Inspect → Optimize → Measure loop',
      '📅 Tagging & reporting standards documented'
    ],
    keyPointsMr: [
      '🤝 वित्त आणि तंत्र संघातील क्रॉस-फंक्शनल सहकार्य',
      '📊 निर्णयासाठी वास्तविक-वेळ डेटा',
      '🎯 फक्त एकूण बिल नव्हे तर युनिट इकॉनॉमिक्सवर लक्ष',
      '🔁 तपासा → ऑप्टिमाइझ → मोजा चक्र',
      '📅 टॅगिंग आणि अहवाल मानकांची नोंद'
    ],
    practicalExercise: 'Host a 30-minute FinOps kickoff with engineering leads and list current cost pain points + desired KPIs.',
    practicalExerciseMr: 'इंजिनिअरिंग लीड्ससोबत ३० मिनिटांचा FinOps किकऑफ घ्या आणि खर्चातील अडचणी व अपेक्षित KPI यांची यादी करा.'
  },
  {
    id: 'finops-tagging',
    moduleId: 'finops-governance',
    title: 'Cost Allocation & Tagging Strategy',
    titleMr: 'खर्च विभाजन आणि टॅगिंग धोरण',
    day: 302,
    content: `Without consistent tags you cannot attribute spend to teams, products, or environments. Design mandatory keys, automated enforcement, and exception handling.`,
    contentMr: `सातत्यपूर्ण टॅगशिवाय आपण खर्च संघ, उत्पादने किंवा वातावरणांना जोडू शकत नाही. अनिवार्य की, स्वयंचलित अंमलबजावणी आणि अपवाद हाताळणीसह धोरण तयार करा.`,
    keyPoints: [
      '🏷️ Standard keys: owner, product, env, compliance',
      '🧾 Tag inheritance via IaC modules',
      '🛑 Non-compliant resources quarantined',
      '📥 Use AWS Config/Azure Policy for enforcement',
      '🧮 Untagged spend tracked as technical debt'
    ],
    keyPointsMr: [
      '🏷️ मानक की: मालक, उत्पादन, env, अनुपालन',
      '🧾 IaC मॉड्यूलद्वारे टॅग वारसा',
      '🛑 नियमांचे उल्लंघन करणारी संसाधने क्वारंटाईन करा',
      '📥 अंमलबजावणीसाठी AWS Config/Azure Policy वापरा',
      '🧮 टॅग नसलेला खर्च तांत्रिक कर्ज म्हणून ट्रॅक करा'
    ],
    practicalExercise: 'Create a tagging policy document and implement a sample Terraform module that applies required tags automatically.',
    practicalExerciseMr: 'टॅगिंग धोरण दस्तऐवज तयार करा आणि आवश्यक टॅग स्वयंचलितपणे लागू करणारा नमुना Terraform मॉड्यूल तयार करा.'
  },
  {
    id: 'finops-budgets',
    moduleId: 'finops-governance',
    title: 'Budgets, Forecasting & Alerts',
    titleMr: 'बजेट, पूर्वानुमान आणि अलर्ट',
    day: 304,
    content: `FinOps teams create rolling forecasts, variance dashboards, and alerting policies so product teams know when they are likely to exceed spend before the invoice arrives.`,
    contentMr: `FinOps संघ फिरते पूर्वानुमान, विचलन डॅशबोर्ड आणि अलर्ट धोरणे तयार करतात जेणेकरून बिल येण्यापूर्वीच संघांना संभाव्य खर्च ओलांडण्याची माहिती मिळेल.`,
    keyPoints: [
      '📈 12-month rolling forecast with seasonality',
      '⚖️ Forecast accuracy KPI (<5% variance)',
      '🔔 Multi-channel alerts (chat, email, ticket)',
      '🧮 Commitment vs on-demand split visibility',
      '📉 Early-warning spend anomaly detection'
    ],
    keyPointsMr: [
      '📈 ऋतुमानासह १२ महिन्यांचा रोलिंग पूर्वानुमान',
      '⚖️ पूर्वानुमान अचूकता KPI (<5% विचलन)',
      '🔔 मल्टी-चॅनेल अलर्ट (चॅट, ईमेल, तिकीट)',
      '🧮 कमिटमेंट वि ऑन-डिमांड खर्च दृश्यता',
      '📉 खर्चातील असामान्यता लवकर ओळख'
    ],
    practicalExercise: 'Configure AWS Budgets or Azure Cost Management alerts that trigger at 50/80/100% of a team quota.',
    practicalExerciseMr: 'संघाच्या कोट्याच्या ५०/८०/१००% वर अलर्ट ट्रिगर होईल असे AWS Budgets किंवा Azure Cost Management सेट करा.'
  },
  {
    id: 'finops-rightsizing',
    moduleId: 'finops-governance',
    title: 'Rightsizing & Elasticity Playbooks',
    titleMr: 'राइटसाइजिंग आणि इलॅस्टिसिटी प्लेबुक्स',
    day: 306,
    content: `Rightsizing analyzes utilization metrics to downgrade instance families, shrink clusters, or schedule shutdowns without hurting SLOs. Document automation triggers and rollback paths.`,
    contentMr: `राइटसाइजिंग वापर मेट्रिक्स तपासून इन्स्टन्स फॅमिली डाउनग्रेड करणे, क्लस्टर कमी करणे किंवा SLO न बिघडवता शटडाउन वेळापत्रक तयार करणे संभव करते. स्वयंचलित ट्रिगर आणि रोलबॅक मार्ग नोंदवा.`,
    keyPoints: [
      '📉 CPU/RAM thresholds drive actions',
      '🛑 Freeze periods for peak launches',
      '🕒 Schedules for dev/test environments',
      '🤖 Integrate with Auto Scaling + Lambda/Functions',
      '📝 Change log + approvals for audit'
    ],
    keyPointsMr: [
      '📉 CPU/RAM थ्रेशहोल्डवर क्रिया अवलंबून',
      '🛑 पीक रिलीज दरम्यान फ्रीझ पीरियड',
      '🕒 Dev/Test वातावरणासाठी वेळापत्रक',
      '🤖 ऑटो स्केलिंग + Lambda/Functions शी एकत्रीकरण',
      '📝 ऑडिटसाठी बदल नोंद व मंजुरी'
    ],
    practicalExercise: 'Use Cost Explorer or GCP Recommender to export underutilized resources and design an automation workflow to downsize them.',
    practicalExerciseMr: 'Cost Explorer किंवा GCP Recommender वापरून कमी वापरलेली संसाधने निर्यात करा आणि त्यांना डाउनसाईज करणारा स्वयंचलित कार्यप्रवाह तयार करा.'
  },
  {
    id: 'finops-purchasing',
    moduleId: 'finops-governance',
    title: 'Purchasing Options & Commitments',
    titleMr: 'खरेदी पर्याय आणि कमिटमेंट',
    day: 308,
    content: `Balance on-demand flexibility with Reserved Instances, Savings Plans, Azure Reservations, or committed use contracts. Track break-even points and utilization.`,
    contentMr: `ऑन-डिमांड लवचिकतेसोबत Reserved Instances, Savings Plans, Azure Reservations किंवा committed use करारांचे संतुलन राखा. ब्रेक-इव्हन पॉईंट आणि वापर ट्रॅक करा.`,
    keyPoints: [
      '💳 Portfolio mix: on-demand, spot, commitments',
      '📊 Coverage & utilization KPIs',
      '🔄 Marketplace resale strategies',
      '📉 Scenario modeling for forecasts',
      '🧾 Contract governance + renewal calendar'
    ],
    keyPointsMr: [
      '💳 पोर्टफोलिओ मिश्रण: ऑन-डिमांड, स्पॉट, कमिटमेंट',
      '📊 कव्हरेज आणि वापर KPI',
      '🔄 मार्केटप्लेस रीसेल धोरण',
      '📉 पूर्वानुमानासाठी दृश्यात्मक मॉडेलिंग',
      '🧾 करार प्रशासन व नूतनीकरण कॅलेंडर'
    ],
    practicalExercise: 'Calculate savings for moving a 24x7 workload from on-demand to 1-year no-upfront Savings Plan and document assumptions.',
    practicalExerciseMr: '२४x७ वर्कलोड ऑन-डिमांडवरून १-वर्ष नो-अपफ्रंट Savings Plan वर हलवताना किती बचत होते ते मोजा आणि गृहीतके लिहा.'
  },
  {
    id: 'finops-storage-optimization',
    moduleId: 'finops-governance',
    title: 'Storage & Data Transfer Optimization',
    titleMr: 'स्टोरेज आणि डेटा ट्रान्सफर ऑप्टिमायझेशन',
    day: 310,
    content: `Architect lifecycle policies, intelligent tiering, caching, and data locality to minimize storage plus egress costs without sacrificing resilience.`,
    contentMr: `लाइफसायकल धोरण, बुद्धिमान tiering, कॅशिंग आणि डेटा स्थानिकता तयार करा जेणेकरून स्टोरेज व इग्रेस खर्च कमी होईल आणि लचीलापन अबाधित ठेवता येईल.`,
    keyPoints: [
      '🗄️ Tiering policies (S3 IA, Archive, Azure Cool)',
      '♻️ Lifecycle automation & deletion reviews',
      '🚚 Reduce cross-region transfer with edge caches',
      '🔐 Compression & deduplication trade-offs',
      '📦 Data residency and compliance impacts'
    ],
    keyPointsMr: [
      '🗄️ टियरिंग धोरणे (S3 IA, Archive, Azure Cool)',
      '♻️ लाइफसायकल स्वयंचलन आणि deletion पुनरावलोकन',
      '🚚 एज कॅशद्वारे क्रॉस-रीजन ट्रान्सफर कमी करा',
      '🔐 कॉम्प्रेशन व डीडुप ट्रेड-ऑफ्स',
      '📦 डेटा रेसिडेन्सी आणि अनुपालन परिणाम'
    ],
    practicalExercise: 'Enable lifecycle policies on a sample storage bucket and quantify projected savings after 30/90 days.',
    practicalExerciseMr: 'नमुना स्टोरेज बकेटवर लाइफसायकल धोरण सक्षम करा आणि ३०/९० दिवसानंतर अंदाजित बचत मोजा.'
  },
  {
    id: 'finops-policy-as-code',
    moduleId: 'finops-governance',
    title: 'Policy-as-Code Guardrails',
    titleMr: 'पॉलिसी-अज-कोड गार्डरेल्स',
    day: 312,
    content: `Codify limits on instance sizes, regions, or high-risk services so governance scales with automation. Use Config rules, Azure Policy, or Organization Policy plus remediation.`,
    contentMr: `इन्स्टन्स आकार, प्रदेश किंवा उच्च-जोखीम सेवांवरील मर्यादा कोड म्हणून लिहा जेणेकरून गव्हर्नन्स स्वयंचलनासह स्केल होईल. Config नियम, Azure Policy किंवा Organization Policy आणि सुधारणा वापरा.`,
    keyPoints: [
      '🧩 Reusable guardrail library',
      '⚡ Auto-remediation actions (Lambda, Functions)',
      '📝 Exception workflow with expiry',
      '🔍 Continuous compliance dashboards',
      '🔐 Separation of duties for approvals'
    ],
    keyPointsMr: [
      '🧩 पुनर्वापरयोग्य गार्डरेल लायब्ररी',
      '⚡ स्वयंचलित सुधारणा (Lambda, Functions)',
      '📝 मुदत असलेली अपवाद वर्कफ्लो',
      '🔍 सतत अनुपालन डॅशबोर्ड',
      '🔐 मंजुरीसाठी कर्तव्यांचे विभाजन'
    ],
    practicalExercise: 'Write an AWS Config rule that blocks untagged EC2 instances and deploy it via CloudFormation/Terraform.',
    practicalExerciseMr: 'टॅग नसलेल्या EC2 इन्स्टन्स ब्लॉक करणारा AWS Config नियम लिहा आणि तो CloudFormation/Terraform द्वारे तैनात करा.'
  },
  {
    id: 'finops-chargeback',
    moduleId: 'finops-governance',
    title: 'Chargeback & Showback Models',
    titleMr: 'चार्जबॅक आणि शोबॅक मॉडेल्स',
    day: 314,
    content: `Translate shared platform costs into fair, explainable invoices or reports so teams own their consumption. Pick a model (allocation, usage-based, hybrid) and socialize it.`,
    contentMr: `सामायिक प्लॅटफॉर्म खर्च पारदर्शक पद्धतीने विभागा जेणेकरून संघ स्वतःच्या वापराची जबाबदारी घेतील. मॉडेल (वाटप, वापर आधारित, हायब्रिड) निवडा आणि ते प्रसारित करा.`,
    keyPoints: [
      '💵 Allocation drivers (users, requests, GB)',
      '📑 Internal rate cards with incentives',
      '🧮 Handling shared services & amortization',
      '🗣️ Quarterly business reviews with dashboards',
      '🧾 Audit trail for finance teams'
    ],
    keyPointsMr: [
      '💵 वाटप चालक (users, requests, GB)',
      '📑 प्रोत्साहनांसह अंतर्गत rate cards',
      '🧮 सामायिक सेवा आणि अमॉर्टायझेशन हाताळणे',
      '🗣️ तिमाही व्यवसाय पुनरावलोकन डॅशबोर्डसह',
      '🧾 वित्त संघासाठी ऑडिट ट्रेल'
    ],
    practicalExercise: 'Design a showback report template that splits monthly spend by product, environment, and commitment type.',
    practicalExerciseMr: 'उत्पादन, वातावरण आणि कमिटमेंट प्रकारानुसार मासिक खर्च दाखवणारा शोबॅक रिपोर्ट टेम्पलेट तयार करा.'
  },
  {
    id: 'finops-dashboards',
    moduleId: 'finops-governance',
    title: 'Dashboards, KPIs & Storytelling',
    titleMr: 'डॅशबोर्ड, KPI आणि कथाकथन',
    day: 316,
    content: `Executives need concise narratives: highlight waste, opportunity, and business impact. Curate metrics such as unit cost per customer, forecast accuracy, and automation coverage.`,
    contentMr: `कार्यकारींना संक्षिप्त कथा हवी असते: वाया जाणारा खर्च, संधी आणि व्यावसायिक परिणाम हायलाइट करा. ग्राहक प्रति युनिट खर्च, पूर्वानुमान अचूकता आणि स्वयंचलन कव्हरेज यांसारखी मेट्रिक्स निवडा.`,
    keyPoints: [
      '📌 North-star metrics tied to OKRs',
      '📊 Layered dashboards (exec vs squad)',
      '🧠 Insights over raw numbers',
      '🕒 Weekly FinOps office hours',
      '🎯 Call-to-action on every slide'
    ],
    keyPointsMr: [
      '📌 OKRs शी जोडलेली नॉर्थ-स्टार मेट्रिक्स',
      '📊 स्तरित डॅशबोर्ड (exec वि स्क्वाड)',
      '🧠 केवळ आकडे नव्हे तर अंतर्दृष्टी',
      '🕒 साप्ताहिक FinOps ऑफिस अवर',
      '🎯 प्रत्येक स्लाइडवर Call-to-action'
    ],
    practicalExercise: 'Build a sample dashboard (Sheets/Data Studio/QuickSight) showing top cost drivers and trend lines for the past 90 days.',
    practicalExerciseMr: 'मागील ९० दिवसांसाठी प्रमुख खर्च घटक आणि ट्रेंड दाखवणारा नमुना डॅशबोर्ड (Sheets/Data Studio/QuickSight) तयार करा.'
  },
  {
    id: 'finops-automation',
    moduleId: 'finops-governance',
    title: 'Automation & Continuous Governance',
    titleMr: 'स्वयंचलन आणि सतत गव्हर्नन्स',
    day: 318,
    content: `Combine APIs, event rules, and workflow engines to automatically remediate waste, open tickets, or notify owners. Continuous governance keeps pace with rapid releases.`,
    contentMr: `API, इव्हेंट नियम आणि वर्कफ्लो engine एकत्र करून वाया जाणाऱ्या खर्चाचे स्वयंचलित निराकरण करा, तिकीट उघडा किंवा मालकांना सूचित करा. सतत गव्हर्नन्स जलद रिलीजशी ताळमेळ ठेवते.`,
    keyPoints: [
      '⚙️ Event-driven automations (CloudWatch, Event Grid)',
      '📮 Ticket + chat ops integration',
      '🧪 Pre-deployment policy checks in CI',
      '🧱 Drift detection for IaC stacks',
      '📚 Runbooks + shared knowledge base'
    ],
    keyPointsMr: [
      '⚙️ इव्हेंट-चालित स्वयंचलने (CloudWatch, Event Grid)',
      '📮 तिकीट आणि चॅट ऑप्स एकत्रीकरण',
      '🧪 CI मध्ये प्री-डिप्लॉयमेंट पॉलिसी तपासणी',
      '🧱 IaC स्टॅकसाठी ड्रिफ्ट शोध',
      '📚 रनबुक आणि सामायिक नॉलेज बेस'
    ],
    practicalExercise: 'Create an automation that stops idle dev instances at night using EventBridge + Lambda or Logic Apps.',
    practicalExerciseMr: 'EventBridge + Lambda किंवा Logic Apps वापरून रात्री रिकाम्या dev इन्स्टन्स बंद करणारी स्वयंचलन तयार करा.'
  },

  // Domains Module (Days 249-270)
  {
    id: 'domain-basics',
    moduleId: 'domains',
    title: 'What is a Domain Name?',
    day: 249,
    content: `A domain name is the address people type to visit your website, like google.com or amazon.com. It's much easier to remember than an IP address!`,
    keyPoints: [
      '🌐 Human-readable website address',
      '💭 Easier than remembering IP addresses',
      '📝 Structure: subdomain.domain.extension',
      '🌍 Each domain is unique worldwide',
      '💰 You rent domains (typically yearly)',
      '⭐ Your brand on the internet'
    ],
    examples: [
      'google.com - Domain name',
      'www - Subdomain',
      '.com - Top Level Domain (TLD)',
      'Full: https://www.google.com/search'
    ]
  },
  {
    id: 'domain-registration',
    moduleId: 'domains',
    title: 'How to Register a Domain',
    day: 252,
    content: `Step-by-step guide to getting your own domain name.`,
    keyPoints: [
      '1️⃣ Choose registrar (GoDaddy, Namecheap, Cloudflare)',
      '2️⃣ Search for available name',
      '3️⃣ Select extension (.com, .io, .dev)',
      '4️⃣ Check price ($10-15/year typically)',
      '5️⃣ Create account',
      '6️⃣ Provide contact info',
      '7️⃣ Complete payment',
      '8️⃣ Verify email',
      '9️⃣ Configure DNS'
    ],
    examples: [
      'Namecheap: myapp.com for $12/year',
      'Google Domains: Simple and reliable',
      'Cloudflare: Great DNS and free SSL'
    ]
  },
  {
    id: 'dns-records',
    moduleId: 'domains',
    title: 'DNS Records Explained',
    day: 255,
    content: `DNS records connect your domain to services. Different record types serve different purposes.`,
    keyPoints: [
      '🔵 A Record: Domain → IPv4 address',
      '🔷 AAAA: Domain → IPv6 address',
      '🔗 CNAME: Domain alias (www → main)',
      '📧 MX: Mail server configuration',
      '📝 TXT: Verification and SPF',
      '🌐 NS: Nameserver records',
      '⏰ TTL: Cache duration'
    ],
    examples: [
      'A: example.com → 192.0.2.1',
      'CNAME: www.example.com → example.com',
      'MX: mail.example.com → mail server'
    ]
  },
  {
    id: 'subdomains',
    moduleId: 'domains',
    title: 'Creating Subdomains',
    day: 258,
    content: `Subdomains let you create separate sections of your site. They're free and unlimited!`,
    keyPoints: [
      '🆓 Free to create unlimited subdomains',
      '📋 Format: subdomain.domain.com',
      '🎯 Each can point to different service',
      '🔧 Created in DNS settings',
      '⚡ Great for organization'
    ],
    examples: [
      'blog.example.com - Blog',
      'api.example.com - API server',
      'staging.example.com - Testing',
      'app.example.com - Web app',
      'mail.example.com - Email'
    ]
  },
  {
    id: 'email-setup',
    moduleId: 'domains',
    title: 'Email with Custom Domain',
    day: 261,
    content: `Set up professional email like admin@yourcompany.com instead of yourcompany@gmail.com.`,
    keyPoints: [
      '✨ Professional appearance',
      '📧 yourname@yourdomain.com',
      '💼 Options:',
      '  - Google Workspace ($6/mo)',
      '  - Microsoft 365 ($5/mo)',
      '  - Zoho Mail (Free tier)',
      '📝 Requires MX record setup',
      '🔒 Add SPF, DKIM, DMARC'
    ]
  },
  {
    id: 'mx-records',
    moduleId: 'domains',
    title: 'MX Records for Email',
    day: 264,
    content: `MX (Mail Exchange) records tell the internet where to deliver email for your domain.`,
    keyPoints: [
      '📬 Points to email server',
      '🔢 Priority number (lower = higher)',
      '🔄 Can have multiple for backup',
      '⚙️ Set in DNS configuration',
      '📋 Provider gives specific records'
    ],
    examples: [
      'Google Workspace MX:',
      '1. ASPMX.L.GOOGLE.COM (Priority 1)',
      '2. ALT1.ASPMX.L.GOOGLE.COM (Priority 5)',
      'Each provider has different MX records'
    ]
  },
  {
    id: 'email-security',
    moduleId: 'domains',
    title: 'SPF, DKIM, and DMARC',
    day: 266,
    content: `Email security records prevent spammers from using your domain and improve deliverability.`,
    keyPoints: [
      '🛡️ SPF: Lists authorized email servers',
      '✍️ DKIM: Digital signature for emails',
      '🔒 DMARC: Policy for failed authentication',
      '📈 Improves email deliverability',
      '🚫 Prevents spoofing',
      '📝 All are TXT records'
    ]
  },
  {
    id: 'ssl-certificates',
    moduleId: 'domains',
    title: 'SSL Certificates (HTTPS)',
    day: 268,
    content: `SSL certificates enable HTTPS - the padlock in your browser that shows a site is secure.`,
    keyPoints: [
      '🔒 HTTPS = HTTP + SSL encryption',
      '🔐 Encrypts data between user and server',
      '✅ Required for credibility and SEO',
      '🆓 Free options available',
      '⚡ Let\'s Encrypt: Free, automated',
      '☁️ Cloudflare: Free SSL + CDN',
      '🔄 Auto-renewal recommended'
    ],
    examples: [
      'Let\'s Encrypt: Free, renew every 90 days',
      'Cloudflare: Free SSL with DNS',
      'Paid: $50-200/year for extended validation'
    ]
  }
]

// Merge enhanced topics with base topics
export const allTopics: Topic[] = baseTopics.map(topic => {
  const enhanced = enhancedTopics.find(et => et.id === topic.id)
  return enhanced ? { ...topic, ...enhanced } : topic
})

