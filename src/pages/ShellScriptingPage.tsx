import { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Chip,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CodeIcon from '@mui/icons-material/Code'
import TerminalIcon from '@mui/icons-material/Terminal'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

interface ScriptExample {
  id: string
  category: 'basics' | 'variables' | 'conditionals' | 'loops' | 'functions' | 'files' | 'automation' | 'aws' | 'advanced'
  title: string
  description: string
  code: string
  explanation: string
  output?: string
  useCase: string
}

const scriptExamples: ScriptExample[] = [
  // Basics
  {
    id: 'basic-1',
    category: 'basics',
    title: 'Hello World Script',
    description: 'Your first bash script - the traditional start',
    code: `#!/bin/bash
# This is a comment
echo "Hello, World!"
echo "Welcome to Shell Scripting"
echo "Today's date is: $(date)"`,
    explanation: `- #!/bin/bash - Shebang line, tells system to use bash
- # - Comment line, ignored by interpreter
- echo - Prints text to screen
- $(date) - Command substitution, runs date command`,
    output: `Hello, World!
Welcome to Shell Scripting
Today's date is: Sun Nov 24 10:30:00 PST 2025`,
    useCase: 'Basic script structure, printing output'
  },
  {
    id: 'basic-2',
    category: 'basics',
    title: 'User Input',
    description: 'Taking input from users',
    code: `#!/bin/bash
echo "What is your name?"
read name
echo "Hello, $name! Nice to meet you."

echo "What's your favorite cloud provider?"
read -p "Enter (AWS/Azure/GCP): " cloud
echo "Great choice! $cloud is awesome!"`,
    explanation: `- read - Reads user input into variable
- read -p "prompt" - Shows prompt and reads input in one line
- $name - Access variable value with $`,
    output: `What is your name?
[User types: John]
Hello, John! Nice to meet you.`,
    useCase: 'Interactive scripts, getting user preferences'
  },

  // Variables
  {
    id: 'var-1',
    category: 'variables',
    title: 'Working with Variables',
    description: 'Declaring and using variables',
    code: `#!/bin/bash
# String variables
name="Cloud Engineer"
company="AWS"
role="DevOps"

# Number variables
experience=3
salary=80000

# Command output as variable
current_date=$(date +%Y-%m-%d)
user_count=$(who | wc -l)

echo "Position: $role $name at $company"
echo "Experience: $experience years"
echo "Salary: $$salary"
echo "Date: $current_date"
echo "Users logged in: $user_count"

# Variable arithmetic
total=$((salary * 12))
echo "Annual salary: $$total"`,
    explanation: `- No spaces around = when assigning
- $(command) - Command substitution
- $((expression)) - Arithmetic expansion
- $$ - Literal dollar sign`,
    output: `Position: DevOps Cloud Engineer at AWS
Experience: 3 years
Annual salary: $960000`,
    useCase: 'Storing data, configuration values, calculations'
  },
  {
    id: 'var-2',
    category: 'variables',
    title: 'Environment Variables',
    description: 'Using and setting environment variables',
    code: `#!/bin/bash
# Display common environment variables
echo "Home Directory: $HOME"
echo "Current User: $USER"
echo "Shell: $SHELL"
echo "Current Path: $PWD"

# Set custom environment variable
export MY_APP_ENV="production"
export DATABASE_URL="postgresql://localhost:5432/mydb"

echo "App Environment: $MY_APP_ENV"
echo "Database: $DATABASE_URL"

# Check if variable is set
if [ -z "$AWS_REGION" ]; then
    export AWS_REGION="us-east-1"
    echo "AWS_REGION not set, defaulting to $AWS_REGION"
fi`,
    explanation: `- $HOME, $USER, $PWD - Built-in environment variables
- export - Makes variable available to child processes
- [ -z "$var" ] - Checks if variable is empty`,
    useCase: 'Configuration management, cloud deployments'
  },

  // Conditionals
  {
    id: 'cond-1',
    category: 'conditionals',
    title: 'If-Else Statements',
    description: 'Making decisions in scripts',
    code: `#!/bin/bash
echo "Enter your age:"
read age

if [ $age -lt 18 ]; then
    echo "You are a minor"
elif [ $age -ge 18 ] && [ $age -lt 65 ]; then
    echo "You are an adult"
else
    echo "You are a senior citizen"
fi

# Check if file exists
if [ -f "/var/log/syslog" ]; then
    echo "Syslog file exists"
else
    echo "Syslog file not found"
fi

# Check if directory exists
if [ -d "/home/$USER/projects" ]; then
    echo "Projects directory exists"
else
    echo "Creating projects directory..."
    mkdir -p "/home/$USER/projects"
fi`,
    explanation: `- [ condition ] - Test condition (space required)
- -lt - Less than
- -ge - Greater than or equal
- -f - File exists
- -d - Directory exists
- && - AND operator
- || - OR operator`,
    useCase: 'Validation, file checks, decision making'
  },
  {
    id: 'cond-2',
    category: 'conditionals',
    title: 'Case Statements',
    description: 'Multiple choice selections',
    code: `#!/bin/bash
echo "Which cloud service do you want to use?"
echo "1) EC2 Instance"
echo "2) S3 Bucket"
echo "3) Lambda Function"
echo "4) RDS Database"
read -p "Enter choice [1-4]: " choice

case $choice in
    1)
        echo "Launching EC2 instance..."
        # aws ec2 run-instances ...
        ;;
    2)
        echo "Creating S3 bucket..."
        # aws s3 mb s3://my-bucket
        ;;
    3)
        echo "Deploying Lambda function..."
        # aws lambda create-function ...
        ;;
    4)
        echo "Setting up RDS database..."
        # aws rds create-db-instance ...
        ;;
    *)
        echo "Invalid choice!"
        exit 1
        ;;
esac`,
    explanation: `- case $var in - Start case statement
- ) - End of pattern
- ;; - End of case block
- * - Default case (catch-all)
- esac - End case statement`,
    useCase: 'Menu systems, handling multiple options'
  },

  // Loops
  {
    id: 'loop-1',
    category: 'loops',
    title: 'For Loops',
    description: 'Iterating over lists and ranges',
    code: `#!/bin/bash
# Loop through list
echo "=== Cloud Providers ==="
for cloud in AWS Azure GCP DigitalOcean
do
    echo "- $cloud"
done

# Loop through range
echo -e "\n=== Count to 5 ==="
for i in {1..5}
do
    echo "Number: $i"
done

# Loop through files
echo -e "\n=== Log Files ==="
for file in /var/log/*.log
do
    if [ -f "$file" ]; then
        echo "Found: $file"
        echo "Size: $(du -h "$file" | cut -f1)"
    fi
done

# C-style for loop
echo -e "\n=== Countdown ==="
for ((i=10; i>=1; i--))
do
    echo "Countdown: $i"
    sleep 1
done
echo "Blast off! 🚀"`,
    explanation: `- for var in list - Iterate over list
- {1..5} - Range expansion
- for ((init; condition; increment)) - C-style loop
- *.log - Glob pattern for files`,
    useCase: 'Processing multiple files, batch operations'
  },
  {
    id: 'loop-2',
    category: 'loops',
    title: 'While Loops',
    description: 'Loop while condition is true',
    code: `#!/bin/bash
# Simple counter
counter=1
while [ $counter -le 5 ]
do
    echo "Iteration: $counter"
    counter=$((counter + 1))
done

# Read file line by line
echo -e "\n=== Reading file ==="
while IFS= read -r line
do
    echo "Line: $line"
done < /etc/hosts

# Monitor until service is ready
echo -e "\n=== Waiting for service ==="
attempt=0
max_attempts=10

while [ $attempt -lt $max_attempts ]
do
    if curl -s http://localhost:8080/health > /dev/null; then
        echo "Service is ready!"
        break
    else
        echo "Attempt $((attempt + 1))/$max_attempts - Service not ready, waiting..."
        sleep 5
        attempt=$((attempt + 1))
    fi
done`,
    explanation: `- while [ condition ] - Loop while true
- IFS= - Preserve whitespace when reading
- read -r line - Read without backslash interpretation
- break - Exit loop
- continue - Skip to next iteration`,
    useCase: 'Monitoring, waiting for conditions, file processing'
  },

  // Functions
  {
    id: 'func-1',
    category: 'functions',
    title: 'Function Basics',
    description: 'Creating reusable functions',
    code: `#!/bin/bash

# Simple function
greet() {
    echo "Hello from function!"
}

# Function with parameters
greet_user() {
    local name=$1
    local role=$2
    echo "Hello, $name!"
    echo "Your role is: $role"
}

# Function with return value
add_numbers() {
    local sum=$(($1 + $2))
    echo $sum
}

# Function that returns status
check_service() {
    if systemctl is-active --quiet $1; then
        echo "$1 is running"
        return 0
    else
        echo "$1 is not running"
        return 1
    fi
}

# Using functions
greet
echo ""
greet_user "John Doe" "DevOps Engineer"
echo ""
result=$(add_numbers 10 20)
echo "Sum: $result"
echo ""
if check_service "nginx"; then
    echo "✅ Service is healthy"
else
    echo "❌ Service needs attention"
fi`,
    explanation: `- function_name() { } - Define function
- $1, $2, $3 - Function parameters
- local - Variable local to function
- return - Exit with status code (0=success)
- echo value - Return data via stdout`,
    useCase: 'Code organization, reusability, modularity'
  },

  // File Operations
  {
    id: 'file-1',
    category: 'files',
    title: 'File Operations',
    description: 'Reading, writing, and manipulating files',
    code: `#!/bin/bash

# Create directory
mkdir -p /tmp/my_app/logs

# Write to file
echo "Application started at $(date)" > /tmp/my_app/logs/app.log

# Append to file
echo "User logged in" >> /tmp/my_app/logs/app.log
echo "Processing data..." >> /tmp/my_app/logs/app.log

# Read file
echo "=== Log Contents ==="
cat /tmp/my_app/logs/app.log

# Count lines in file
line_count=$(wc -l < /tmp/my_app/logs/app.log)
echo "Total lines: $line_count"

# Search in file
if grep -q "error" /tmp/my_app/logs/app.log; then
    echo "⚠️ Errors found in log!"
else
    echo "✅ No errors in log"
fi

# Copy file
cp /tmp/my_app/logs/app.log /tmp/my_app/logs/app.log.backup

# Check file size
file_size=$(stat -f%z /tmp/my_app/logs/app.log 2>/dev/null || stat -c%s /tmp/my_app/logs/app.log)
echo "File size: $file_size bytes"

# Delete old files (older than 7 days)
find /tmp/my_app/logs -name "*.log" -mtime +7 -delete`,
    explanation: `- > - Redirect output, overwrite file
- >> - Redirect output, append to file
- < - Read from file
- grep -q - Quiet search (no output, just status)
- find with -mtime - Find files by modification time`,
    useCase: 'Log management, file backups, cleanup tasks'
  },

  // AWS Automation
  {
    id: 'aws-1',
    category: 'aws',
    title: 'AWS Instance Management',
    description: 'Automate AWS EC2 operations',
    code: `#!/bin/bash

# Configuration
REGION="us-east-1"
INSTANCE_TYPE="t2.micro"
AMI_ID="ami-0c55b159cbfafe1f0"
KEY_NAME="my-key-pair"
SECURITY_GROUP="sg-12345678"

# Function to create EC2 instance
create_instance() {
    echo "Creating EC2 instance..."
    instance_id=$(aws ec2 run-instances \\
        --region $REGION \\
        --image-id $AMI_ID \\
        --instance-type $INSTANCE_TYPE \\
        --key-name $KEY_NAME \\
        --security-group-ids $SECURITY_GROUP \\
        --query 'Instances[0].InstanceId' \\
        --output text)
    
    echo "Instance created: $instance_id"
    echo "Waiting for instance to be running..."
    
    aws ec2 wait instance-running \\
        --region $REGION \\
        --instance-ids $instance_id
    
    public_ip=$(aws ec2 describe-instances \\
        --region $REGION \\
        --instance-ids $instance_id \\
        --query 'Reservations[0].Instances[0].PublicIpAddress' \\
        --output text)
    
    echo "Instance is running!"
    echo "Public IP: $public_ip"
    echo "SSH: ssh -i $KEY_NAME.pem ec2-user@$public_ip"
}

# Function to list all instances
list_instances() {
    echo "=== EC2 Instances ==="
    aws ec2 describe-instances \\
        --region $REGION \\
        --query 'Reservations[*].Instances[*].[InstanceId,State.Name,InstanceType,PublicIpAddress]' \\
        --output table
}

# Function to stop instance
stop_instance() {
    local instance_id=$1
    echo "Stopping instance $instance_id..."
    aws ec2 stop-instances --instance-ids $instance_id
    aws ec2 wait instance-stopped --instance-ids $instance_id
    echo "Instance stopped"
}

# Function to start instance
start_instance() {
    local instance_id=$1
    echo "Starting instance $instance_id..."
    aws ec2 start-instances --instance-ids $instance_id
    aws ec2 wait instance-running --instance-ids $instance_id
    echo "Instance started"
}

# Menu
echo "AWS EC2 Management Script"
echo "1) Create Instance"
echo "2) List Instances"
echo "3) Stop Instance"
echo "4) Start Instance"
read -p "Choice: " choice

case $choice in
    1) create_instance ;;
    2) list_instances ;;
    3) 
        read -p "Enter Instance ID: " id
        stop_instance $id
        ;;
    4)
        read -p "Enter Instance ID: " id
        start_instance $id
        ;;
    *) echo "Invalid choice" ;;
esac`,
    explanation: `- aws ec2 - AWS CLI EC2 commands
- --query - JMESPath query for filtering output
- --output text/table - Format output
- wait - Wait for resource state
- \\ - Line continuation for readability`,
    useCase: 'EC2 automation, instance lifecycle management'
  },
  {
    id: 'aws-2',
    category: 'aws',
    title: 'S3 Backup Script',
    description: 'Automated S3 backups with rotation',
    code: `#!/bin/bash

# Configuration
BACKUP_DIR="/var/www/html"
S3_BUCKET="my-backups-bucket"
APP_NAME="myapp"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="\${APP_NAME}_\${TIMESTAMP}.tar.gz"
RETENTION_DAYS=30

# Function to create backup
create_backup() {
    echo "Creating backup of $BACKUP_DIR..."
    tar -czf /tmp/$BACKUP_FILE -C $BACKUP_DIR .
    
    if [ $? -eq 0 ]; then
        echo "✅ Backup created: $BACKUP_FILE"
        return 0
    else
        echo "❌ Backup failed!"
        return 1
    fi
}

# Function to upload to S3
upload_to_s3() {
    echo "Uploading to S3 bucket: $S3_BUCKET..."
    aws s3 cp /tmp/$BACKUP_FILE s3://$S3_BUCKET/backups/
    
    if [ $? -eq 0 ]; then
        echo "✅ Upload successful"
        rm -f /tmp/$BACKUP_FILE
        return 0
    else
        echo "❌ Upload failed!"
        return 1
    fi
}

# Function to delete old backups
cleanup_old_backups() {
    echo "Cleaning up backups older than $RETENTION_DAYS days..."
    
    # List old files
    old_files=$(aws s3 ls s3://$S3_BUCKET/backups/ \\
        | awk '{print $4}' \\
        | grep "^\${APP_NAME}_" \\
        | head -n -$RETENTION_DAYS)
    
    for file in $old_files; do
        echo "Deleting: $file"
        aws s3 rm s3://$S3_BUCKET/backups/$file
    done
    
    echo "✅ Cleanup complete"
}

# Function to verify backup
verify_backup() {
    echo "Verifying backup integrity..."
    aws s3 ls s3://$S3_BUCKET/backups/$BACKUP_FILE
    
    if [ $? -eq 0 ]; then
        size=$(aws s3 ls s3://$S3_BUCKET/backups/$BACKUP_FILE \\
            | awk '{print $3}')
        echo "✅ Backup verified (Size: $size bytes)"
        return 0
    else
        echo "❌ Backup verification failed!"
        return 1
    fi
}

# Send notification
send_notification() {
    local status=$1
    local message=$2
    
    # Send to SNS topic (optional)
    # aws sns publish \\
    #     --topic-arn "arn:aws:sns:us-east-1:123456:backup-alerts" \\
    #     --message "$message" \\
    #     --subject "Backup $status"
    
    echo "📧 Notification: $message"
}

# Main execution
echo "=== Starting Backup Process ==="
echo "Timestamp: $(date)"

if create_backup; then
    if upload_to_s3; then
        if verify_backup; then
            cleanup_old_backups
            send_notification "SUCCESS" "Backup completed successfully for $APP_NAME"
            echo "=== Backup Process Complete ==="
            exit 0
        fi
    fi
fi

send_notification "FAILURE" "Backup failed for $APP_NAME"
echo "=== Backup Process Failed ==="
exit 1`,
    explanation: `- tar -czf - Create compressed archive
- aws s3 cp - Copy to S3
- aws s3 ls - List S3 objects
- head -n -N - Keep last N items
- $? - Exit status of last command`,
    useCase: 'Automated backups, disaster recovery, data archival'
  },

  // Advanced
  {
    id: 'adv-1',
    category: 'advanced',
    title: 'Deployment Script with Rollback',
    description: 'Production deployment with automatic rollback',
    code: `#!/bin/bash
set -euo pipefail  # Exit on error, undefined vars, pipe failures

# Configuration
APP_NAME="myapp"
DEPLOY_DIR="/var/www/\${APP_NAME}"
BACKUP_DIR="/var/backups/\${APP_NAME}"
LOG_FILE="/var/log/\${APP_NAME}_deploy.log"
VERSION=$1

# Logging function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a $LOG_FILE
}

# Error handler
error_exit() {
    log "ERROR: $1"
    rollback
    exit 1
}

# Create backup before deployment
backup_current() {
    log "Creating backup of current version..."
    timestamp=$(date +%Y%m%d_%H%M%S)
    mkdir -p $BACKUP_DIR
    tar -czf $BACKUP_DIR/backup_$timestamp.tar.gz -C $DEPLOY_DIR . \\
        || error_exit "Backup failed"
    log "Backup created: backup_$timestamp.tar.gz"
}

# Deploy new version
deploy() {
    log "Deploying version $VERSION..."
    
    # Download from S3
    aws s3 cp s3://my-releases/\${APP_NAME}-\${VERSION}.tar.gz /tmp/ \\
        || error_exit "Download failed"
    
    # Extract to staging
    mkdir -p /tmp/staging
    tar -xzf /tmp/\${APP_NAME}-\${VERSION}.tar.gz -C /tmp/staging \\
        || error_exit "Extraction failed"
    
    # Run tests
    if ! run_tests; then
        error_exit "Tests failed"
    fi
    
    # Copy to production
    rsync -av --delete /tmp/staging/ $DEPLOY_DIR/ \\
        || error_exit "Deployment failed"
    
    # Restart service
    systemctl restart $APP_NAME \\
        || error_exit "Service restart failed"
    
    log "Deployment successful"
}

# Run tests
run_tests() {
    log "Running smoke tests..."
    sleep 2
    
    # Check if service is responding
    if curl -sf http://localhost:8080/health > /dev/null; then
        log "✅ Health check passed"
        return 0
    else
        log "❌ Health check failed"
        return 1
    fi
}

# Rollback function
rollback() {
    log "⚠️ Rolling back to previous version..."
    
    latest_backup=$(ls -t $BACKUP_DIR/backup_*.tar.gz | head -1)
    if [ -z "$latest_backup" ]; then
        log "ERROR: No backup found for rollback!"
        return 1
    fi
    
    log "Restoring from: $latest_backup"
    tar -xzf $latest_backup -C $DEPLOY_DIR
    systemctl restart $APP_NAME
    log "Rollback complete"
}

# Monitor after deployment
monitor() {
    log "Monitoring deployment for 60 seconds..."
    for i in {1..12}; do
        if ! curl -sf http://localhost:8080/health > /dev/null; then
            error_exit "Service became unhealthy after deployment"
        fi
        echo -n "."
        sleep 5
    done
    echo ""
    log "✅ Monitoring passed"
}

# Main execution
log "=== Starting Deployment ==="
log "Version: $VERSION"

# Validate input
if [ -z "$VERSION" ]; then
    echo "Usage: $0 <version>"
    exit 1
fi

# Pre-deployment checks
if ! aws s3 ls s3://my-releases/\${APP_NAME}-\${VERSION}.tar.gz > /dev/null; then
    error_exit "Version $VERSION not found in S3"
fi

# Execute deployment
backup_current
deploy
monitor

log "=== Deployment Complete ==="
log "Version $VERSION is now live"

# Cleanup old backups (keep last 5)
ls -t $BACKUP_DIR/backup_*.tar.gz | tail -n +6 | xargs -r rm -f
log "Cleaned up old backups"`,
    explanation: `- set -euo pipefail - Strict error handling
- tee - Write to file and stdout simultaneously
- || - Execute if previous command fails
- trap - Catch signals for cleanup
- rsync - Efficient file synchronization`,
    useCase: 'Zero-downtime deployments, production releases'
  },
]

export default function ShellScriptingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [tabValue, setTabValue] = useState(0)

  const categories = [
    { value: 'all', label: 'All Examples', icon: '📚' },
    { value: 'basics', label: 'Basics', icon: '🎯' },
    { value: 'variables', label: 'Variables', icon: '📦' },
    { value: 'conditionals', label: 'Conditionals', icon: '🔀' },
    { value: 'loops', label: 'Loops', icon: '🔄' },
    { value: 'functions', label: 'Functions', icon: '⚙️' },
    { value: 'files', label: 'Files', icon: '📁' },
    { value: 'aws', label: 'AWS Automation', icon: '☁️' },
    { value: 'advanced', label: 'Advanced', icon: '🚀' },
  ]

  const filteredExamples = selectedCategory === 'all' 
    ? scriptExamples 
    : scriptExamples.filter(ex => ex.category === selectedCategory)

  const cheatSheet = [
    { category: 'Variables', items: [
      'name="value" - Assign variable (no spaces!)',
      '$name - Access variable',
      '${name} - Clear variable boundary',
      'export VAR - Make available to child processes',
      'readonly VAR - Make variable immutable',
    ]},
    { category: 'Conditionals', items: [
      '[ -f file ] - File exists',
      '[ -d dir ] - Directory exists',
      '[ -z "$var" ] - Variable is empty',
      '[ $a -eq $b ] - Numbers equal',
      '[ "$a" = "$b" ] - Strings equal',
      '[ $a -lt $b ] - Less than',
      '[ $a -gt $b ] - Greater than',
    ]},
    { category: 'Loops', items: [
      'for i in {1..10} - Range loop',
      'for file in *.txt - File glob',
      'while [ condition ] - While loop',
      'break - Exit loop',
      'continue - Next iteration',
    ]},
    { category: 'Special Variables', items: [
      '$0 - Script name',
      '$1, $2 - Arguments',
      '$# - Number of arguments',
      '$@ - All arguments',
      '$? - Exit status of last command',
      '$$ - Process ID',
      '$! - PID of last background job',
    ]},
    { category: 'File Operations', items: [
      '> file - Redirect output (overwrite)',
      '>> file - Append output',
      '< file - Read from file',
      'cat file - Display file',
      'grep pattern file - Search in file',
      'sed s/old/new/ - Stream editor',
      'awk {print $1} - Pattern scanning',
    ]},
    { category: 'Common Commands', items: [
      'echo - Print text',
      'read - Get user input',
      'test or [ ] - Evaluate condition',
      'exit N - Exit with status code',
      'sleep N - Pause for N seconds',
      'date - Current date/time',
      'basename - Extract filename',
      'dirname - Extract directory',
    ]},
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TerminalIcon fontSize="large" color="primary" />
          Shell Scripting Mastery
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Master Bash scripting with practical examples for cloud automation
        </Typography>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)}>
          <Tab label="Examples" icon={<CodeIcon />} iconPosition="start" />
          <Tab label="Cheat Sheet" icon={<PlayArrowIcon />} iconPosition="start" />
        </Tabs>
      </Box>

      {/* Examples Tab */}
      {tabValue === 0 && (
        <>
          {/* Category Filter */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="subtitle2" gutterBottom>
                Select Category:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
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
            </CardContent>
          </Card>

          {/* Best Practices Alert */}
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              📖 Shell Scripting Best Practices:
            </Typography>
            <Typography variant="body2">
              • Always use <code>#!/bin/bash</code> shebang<br />
              • Quote variables: <code>"$var"</code> to handle spaces<br />
              • Use <code>set -euo pipefail</code> for safer scripts<br />
              • Add comments to explain complex logic<br />
              • Test scripts before running in production
            </Typography>
          </Alert>

          {/* Examples */}
          <Box>
            {filteredExamples.map(example => (
              <Accordion key={example.id} sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ width: '100%' }}>
                    <Typography variant="h6">{example.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {example.description}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    {/* Code */}
                    <Typography variant="subtitle2" color="primary" gutterBottom>
                      📝 Script:
                    </Typography>
                    <Paper sx={{ p: 2, bgcolor: '#1e1e1e', color: '#d4d4d4', mb: 2, overflowX: 'auto' }}>
                      <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.875rem' }}>
                        <code>{example.code}</code>
                      </pre>
                    </Paper>

                    {/* Explanation */}
                    <Typography variant="subtitle2" color="secondary" gutterBottom>
                      💡 Explanation:
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ whiteSpace: 'pre-line' }}>
                      {example.explanation}
                    </Typography>

                    {/* Output */}
                    {example.output && (
                      <>
                        <Typography variant="subtitle2" color="success.main" gutterBottom>
                          🖥️ Output:
                        </Typography>
                        <Paper sx={{ p: 2, bgcolor: '#f5f5f5', mb: 2 }}>
                          <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.875rem' }}>
                            {example.output}
                          </pre>
                        </Paper>
                      </>
                    )}

                    {/* Use Case */}
                    <Typography variant="subtitle2" gutterBottom>
                      🎯 Use Case:
                    </Typography>
                    <Chip label={example.useCase} color="info" variant="outlined" />
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </>
      )}

      {/* Cheat Sheet Tab */}
      {tabValue === 1 && (
        <Grid container spacing={3}>
          {cheatSheet.map((section, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    {section.category}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {section.items.map((item, idx) => (
                      <li key={idx}>
                        <Typography variant="body2" paragraph component="div">
                          <code>{item.split(' - ')[0]}</code>
                          {item.includes(' - ') && (
                            <span style={{ color: '#666' }}> - {item.split(' - ')[1]}</span>
                          )}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Quick Tips */}
          <Grid item xs={12}>
            <Card sx={{ bgcolor: 'warning.light' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  ⚡ Quick Tips for Cloud Engineers
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>AWS CLI Shortcuts:</Typography>
                    <Box component="ul" sx={{ pl: 2, fontSize: '0.875rem' }}>
                      <li><code>aws ec2 describe-instances</code> - List EC2 instances</li>
                      <li><code>aws s3 ls</code> - List S3 buckets</li>
                      <li><code>aws lambda list-functions</code> - List Lambda functions</li>
                      <li><code>aws rds describe-db-instances</code> - List RDS databases</li>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>Debugging:</Typography>
                    <Box component="ul" sx={{ pl: 2, fontSize: '0.875rem' }}>
                      <li><code>bash -x script.sh</code> - Debug mode (trace execution)</li>
                      <li><code>set -x</code> - Enable debugging in script</li>
                      <li><code>echo $?</code> - Check last command exit status</li>
                      <li><code>trap 'echo Error' ERR</code> - Catch errors</li>
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
