export const professionalTopics = {
  'database-design-patterns': {
    id: 'database-design-patterns',
    pathId: 'professional',
    title: 'Database Design Patterns',
    description: 'Advanced patterns for scalable and maintainable database architecture',
    content: {
      overview: 'Database design patterns are proven solutions to common database design problems. They help create scalable, maintainable, and efficient database systems.',
      keyPoints: [
        'Repository pattern for data access',
        'Unit of Work pattern for transactions',
        'CQRS for read/write separation',
        'Event Sourcing for audit trails',
        'Polyglot Persistence for mixed workloads',
      ],
      useCases: [
        'Complex enterprise applications',
        'Microservices architectures',
        'Event-driven systems',
        'High-performance applications',
        'Systems requiring full audit trails',
      ],
      bestPractices: [
        'Choose patterns based on requirements',
        'Don\'t over-engineer simple problems',
        'Document pattern usage',
        'Consider team expertise',
        'Balance complexity vs benefits',
      ],
      doAndDont: {
        do: [
          'Understand the problem before applying patterns',
          'Combine patterns appropriately',
          'Test thoroughly',
          'Monitor performance',
          'Document architectural decisions',
        ],
        dont: [
          'Use patterns just for the sake of it',
          'Mix incompatible patterns',
          'Ignore maintenance overhead',
          'Apply CQRS everywhere',
          'Forget about operational complexity',
        ],
      },
    },
    examples: [
      {
        title: 'Repository Pattern',
        code: `// Repository interface
class UserRepository:
    def find_by_id(self, user_id):
        pass
    
    def find_by_email(self, email):
        pass
    
    def save(self, user):
        pass
    
    def delete(self, user_id):
        pass

// Implementation
class MySQLUserRepository(UserRepository):
    def __init__(self, connection):
        self.connection = connection
    
    def find_by_id(self, user_id):
        cursor = self.connection.cursor()
        cursor.execute(
            "SELECT * FROM users WHERE id = %s",
            (user_id,)
        )
        return cursor.fetchone()
    
    def save(self, user):
        cursor = self.connection.cursor()
        cursor.execute(
            "INSERT INTO users (name, email) VALUES (%s, %s)",
            (user['name'], user['email'])
        )
        self.connection.commit()`,
        language: 'python',
      },
      {
        title: 'CQRS Pattern',
        code: `// Command Model (Write)
class CreateOrderCommand:
    def execute(self, order_data):
        # Write to normalized database
        order = Order(**order_data)
        db.session.add(order)
        db.session.commit()
        
        # Publish event for read model update
        event_bus.publish('OrderCreated', order)

// Query Model (Read)
class OrderQueryService:
    def get_order_summary(self, order_id):
        # Read from denormalized read database
        return read_db.query(
            '''SELECT o.id, o.total, c.name as customer_name,
                      array_agg(p.name) as products
               FROM orders_read o
               JOIN customers_read c ON o.customer_id = c.id
               JOIN order_products op ON o.id = op.order_id
               JOIN products_read p ON op.product_id = p.id
               WHERE o.id = %s
               GROUP BY o.id, o.total, c.name''',
            (order_id,)
        )`,
        language: 'python',
      },
      {
        title: 'Event Sourcing',
        code: `// Event store schema
CREATE TABLE events (
    event_id BIGSERIAL PRIMARY KEY,
    aggregate_id UUID NOT NULL,
    aggregate_type VARCHAR(50) NOT NULL,
    event_type VARCHAR(50) NOT NULL,
    event_data JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    version INT NOT NULL
);

// Storing events
INSERT INTO events (
    aggregate_id, aggregate_type, event_type, event_data, version
) VALUES (
    'user-123',
    'User',
    'UserCreated',
    '{"name": "John", "email": "john@example.com"}',
    1
);

// Rebuilding state from events
SELECT event_type, event_data
FROM events
WHERE aggregate_id = 'user-123'
ORDER BY version ASC;`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'What is the main benefit of the Repository pattern?',
        options: [
          'Faster queries',
          'Decoupling data access logic from business logic',
          'Automatic caching',
          'Built-in security',
        ],
        correctAnswer: 1,
        explanation: 'The Repository pattern decouples data access logic from business logic, making code more maintainable and testable.',
      },
      {
        question: 'What does CQRS stand for?',
        options: [
          'Create Query Read Store',
          'Command Query Responsibility Segregation',
          'Cached Query Result System',
          'Complex Query Relational Structure',
        ],
        correctAnswer: 1,
        explanation: 'CQRS (Command Query Responsibility Segregation) separates read and write operations into different models.',
      },
    ],
  },

  'cloud-databases': {
    id: 'cloud-databases',
    pathId: 'professional',
    title: 'Cloud Database Services',
    description: 'Master cloud-native database solutions',
    content: {
      overview: 'Cloud databases are managed database services offered by cloud providers. They provide scalability, high availability, and reduced operational overhead.',
      keyPoints: [
        'Managed services reduce operational burden',
        'Auto-scaling capabilities',
        'Built-in backup and recovery',
        'Global distribution options',
        'Pay-per-use pricing models',
      ],
      useCases: [
        'Scalable web applications',
        'Mobile app backends',
        'IoT data storage',
        'Analytics and data warehousing',
        'Multi-region applications',
      ],
      bestPractices: [
        'Choose right database type for workload',
        'Use connection pooling',
        'Implement proper backup strategies',
        'Monitor costs and performance',
        'Use managed security features',
      ],
      doAndDont: {
        do: [
          'Use auto-scaling features',
          'Enable automated backups',
          'Implement read replicas',
          'Use VPC for security',
          'Monitor with cloud tools',
        ],
        dont: [
          'Ignore cost optimization',
          'Over-provision resources',
          'Skip security best practices',
          'Forget about vendor lock-in',
          'Ignore region selection',
        ],
      },
    },
    examples: [
      {
        title: 'AWS RDS Setup',
        code: `# AWS CLI - Create RDS Instance
aws rds create-db-instance \\
    --db-instance-identifier mydb \\
    --db-instance-class db.t3.micro \\
    --engine postgres \\
    --master-username admin \\
    --master-user-password mypassword \\
    --allocated-storage 20 \\
    --backup-retention-period 7 \\
    --multi-az \\
    --storage-encrypted

# Create Read Replica
aws rds create-db-instance-read-replica \\
    --db-instance-identifier mydb-replica \\
    --source-db-instance-identifier mydb \\
    --db-instance-class db.t3.micro

# Enable automated backups
aws rds modify-db-instance \\
    --db-instance-identifier mydb \\
    --backup-retention-period 7 \\
    --preferred-backup-window "03:00-04:00"`,
        language: 'bash',
      },
      {
        title: 'Azure Cosmos DB',
        code: `// Node.js SDK example
const { CosmosClient } = require("@azure/cosmos");

const client = new CosmosClient({
    endpoint: process.env.COSMOS_ENDPOINT,
    key: process.env.COSMOS_KEY
});

// Create database and container
const { database } = await client.databases.createIfNotExists({
    id: "OrdersDB"
});

const { container } = await database.containers.createIfNotExists({
    id: "Orders",
    partitionKey: "/customerId"
});

// Insert document
const newOrder = {
    id: "order1",
    customerId: "customer123",
    items: ["item1", "item2"],
    total: 150.00
};

await container.items.create(newOrder);

// Query documents
const querySpec = {
    query: "SELECT * FROM c WHERE c.customerId = @customerId",
    parameters: [{ name: "@customerId", value: "customer123" }]
};

const { resources } = await container.items.query(querySpec).fetchAll();`,
        language: 'javascript',
      },
      {
        title: 'Google Cloud Firestore',
        code: `// Python SDK example
from google.cloud import firestore

db = firestore.Client()

# Add a document
doc_ref = db.collection('users').document('user1')
doc_ref.set({
    'name': 'John Doe',
    'email': 'john@example.com',
    'age': 30
})

# Query documents
users_ref = db.collection('users')
query = users_ref.where('age', '>=', 18)
results = query.stream()

for doc in results:
    print(f'{doc.id} => {doc.to_dict()}')

# Real-time listener
def on_snapshot(doc_snapshot, changes, read_time):
    for doc in doc_snapshot:
        print(f'Received document: {doc.id}')

doc_ref.on_snapshot(on_snapshot)`,
        language: 'python',
      },
    ],
    quiz: [
      {
        question: 'What is a major benefit of cloud-managed databases?',
        options: [
          'They are always free',
          'Reduced operational overhead and automatic scaling',
          'Unlimited storage',
          'Faster than on-premise always',
        ],
        correctAnswer: 1,
        explanation: 'Cloud-managed databases reduce operational overhead by handling maintenance, backups, and scaling automatically.',
      },
      {
        question: 'What is vendor lock-in?',
        options: [
          'A security feature',
          'Dependency on a specific cloud provider\'s services',
          'A type of database lock',
          'A backup strategy',
        ],
        correctAnswer: 1,
        explanation: 'Vendor lock-in refers to becoming dependent on a specific cloud provider\'s proprietary services, making it difficult to migrate to another provider.',
      },
    ],
  },

  'data-warehousing': {
    id: 'data-warehousing',
    pathId: 'professional',
    title: 'Data Warehousing',
    description: 'Design and implement data warehouses for analytics',
    content: {
      overview: 'Data warehousing involves collecting and managing data from various sources to provide meaningful business insights. It uses specialized database designs optimized for query and analysis.',
      keyPoints: [
        'Star and snowflake schemas',
        'ETL/ELT processes',
        'OLAP vs OLTP',
        'Dimensional modeling',
        'Data marts and data lakes',
      ],
      useCases: [
        'Business intelligence and reporting',
        'Historical data analysis',
        'Decision support systems',
        'Data mining',
        'Trend analysis',
      ],
      bestPractices: [
        'Use dimensional modeling',
        'Implement proper ETL processes',
        'Partition large fact tables',
        'Create aggregated tables',
        'Regular maintenance and optimization',
      ],
      doAndDont: {
        do: [
          'Design for query performance',
          'Maintain data quality',
          'Document data lineage',
          'Use slowly changing dimensions',
          'Implement incremental loads',
        ],
        dont: [
          'Use normalized schema for analytics',
          'Mix OLTP and OLAP',
          'Ignore data quality',
          'Skip data governance',
          'Over-aggregate prematurely',
        ],
      },
    },
    examples: [
      {
        title: 'Star Schema Design',
        code: `-- Fact table
CREATE TABLE fact_sales (
    sale_id BIGINT PRIMARY KEY,
    date_key INT NOT NULL,
    product_key INT NOT NULL,
    customer_key INT NOT NULL,
    store_key INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2),
    total_amount DECIMAL(10,2),
    FOREIGN KEY (date_key) REFERENCES dim_date(date_key),
    FOREIGN KEY (product_key) REFERENCES dim_product(product_key),
    FOREIGN KEY (customer_key) REFERENCES dim_customer(customer_key),
    FOREIGN KEY (store_key) REFERENCES dim_store(store_key)
);

-- Dimension tables
CREATE TABLE dim_date (
    date_key INT PRIMARY KEY,
    full_date DATE,
    day_of_week VARCHAR(10),
    month VARCHAR(10),
    quarter INT,
    year INT,
    is_weekend BOOLEAN
);

CREATE TABLE dim_product (
    product_key INT PRIMARY KEY,
    product_id VARCHAR(50),
    product_name VARCHAR(200),
    category VARCHAR(100),
    subcategory VARCHAR(100),
    brand VARCHAR(100)
);`,
        language: 'sql',
      },
      {
        title: 'ETL Process',
        code: `-- Extract
CREATE TABLE staging_sales AS
SELECT * FROM source_sales
WHERE created_date >= CURRENT_DATE - INTERVAL '1 day';

-- Transform
INSERT INTO fact_sales (
    sale_id, date_key, product_key, customer_key, store_key,
    quantity, unit_price, total_amount
)
SELECT 
    s.id,
    d.date_key,
    p.product_key,
    c.customer_key,
    st.store_key,
    s.quantity,
    s.price,
    s.quantity * s.price
FROM staging_sales s
JOIN dim_date d ON s.sale_date = d.full_date
JOIN dim_product p ON s.product_id = p.product_id
JOIN dim_customer c ON s.customer_id = c.customer_id
JOIN dim_store st ON s.store_id = st.store_id;

-- Load summary tables
INSERT INTO summary_monthly_sales
SELECT 
    d.year,
    d.month,
    p.category,
    SUM(f.total_amount) as total_sales,
    COUNT(*) as transaction_count
FROM fact_sales f
JOIN dim_date d ON f.date_key = d.date_key
JOIN dim_product p ON f.product_key = p.product_key
GROUP BY d.year, d.month, p.category;`,
        language: 'sql',
      },
      {
        title: 'Analytical Queries',
        code: `-- Top products by sales
SELECT 
    p.product_name,
    p.category,
    SUM(f.total_amount) as total_sales,
    SUM(f.quantity) as units_sold
FROM fact_sales f
JOIN dim_product p ON f.product_key = p.product_key
JOIN dim_date d ON f.date_key = d.date_key
WHERE d.year = 2023
GROUP BY p.product_name, p.category
ORDER BY total_sales DESC
LIMIT 10;

-- Sales trend analysis
SELECT 
    d.year,
    d.quarter,
    SUM(f.total_amount) as quarterly_sales,
    LAG(SUM(f.total_amount)) OVER (ORDER BY d.year, d.quarter) as previous_quarter,
    (SUM(f.total_amount) - LAG(SUM(f.total_amount)) OVER (ORDER BY d.year, d.quarter)) / 
        LAG(SUM(f.total_amount)) OVER (ORDER BY d.year, d.quarter) * 100 as growth_percentage
FROM fact_sales f
JOIN dim_date d ON f.date_key = d.date_key
GROUP BY d.year, d.quarter
ORDER BY d.year, d.quarter;`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'What is the main difference between OLTP and OLAP?',
        options: [
          'OLTP is for analysis, OLAP is for transactions',
          'OLTP is for transactions, OLAP is for analysis',
          'They are the same thing',
          'OLTP is faster than OLAP',
        ],
        correctAnswer: 1,
        explanation: 'OLTP (Online Transaction Processing) handles day-to-day transactions, while OLAP (Online Analytical Processing) is optimized for complex queries and analysis.',
      },
      {
        question: 'What is a star schema?',
        options: [
          'A security pattern',
          'A denormalized schema with fact and dimension tables',
          'A type of index',
          'A backup strategy',
        ],
        correctAnswer: 1,
        explanation: 'Star schema is a denormalized database schema with a central fact table connected to dimension tables, resembling a star shape.',
      },
    ],
  },

  'database-monitoring': {
    id: 'database-monitoring',
    pathId: 'professional',
    title: 'Database Monitoring and Performance',
    description: 'Monitor and optimize database performance',
    content: {
      overview: 'Database monitoring involves tracking performance metrics, identifying issues, and optimizing database operations to ensure reliability and efficiency.',
      keyPoints: [
        'Key performance indicators (KPIs)',
        'Query performance monitoring',
        'Resource utilization tracking',
        'Alerting and notification',
        'Performance baselining',
      ],
      useCases: [
        'Identifying slow queries',
        'Capacity planning',
        'Troubleshooting performance issues',
        'Ensuring SLA compliance',
        'Proactive issue detection',
      ],
      bestPractices: [
        'Monitor key metrics continuously',
        'Set up alerts for anomalies',
        'Analyze slow query logs',
        'Establish performance baselines',
        'Regular performance reviews',
      ],
      doAndDont: {
        do: [
          'Track database-specific metrics',
          'Monitor at multiple levels',
          'Document normal behavior',
          'Automate monitoring',
          'Review trends regularly',
        ],
        dont: [
          'Wait for user complaints',
          'Ignore slow query logs',
          'Monitor too many meaningless metrics',
          'Forget about disk space',
          'Skip regular maintenance',
        ],
      },
    },
    examples: [
      {
        title: 'MySQL Performance Monitoring',
        code: `-- Enable slow query log
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2;
SET GLOBAL slow_query_log_file = '/var/log/mysql/slow.log';

-- View current connections
SHOW PROCESSLIST;

-- Check table status
SHOW TABLE STATUS;

-- View query cache statistics
SHOW STATUS LIKE 'Qcache%';

-- Check InnoDB status
SHOW ENGINE INNODB STATUS;

-- Performance schema queries
SELECT * FROM performance_schema.events_statements_summary_by_digest
ORDER BY SUM_TIMER_WAIT DESC LIMIT 10;

-- Connection statistics
SELECT * FROM performance_schema.threads
WHERE PROCESSLIST_COMMAND IS NOT NULL;`,
        language: 'sql',
      },
      {
        title: 'PostgreSQL Monitoring',
        code: `-- Check active queries
SELECT pid, usename, application_name, state, query
FROM pg_stat_activity
WHERE state = 'active';

-- Database statistics
SELECT datname, numbackends, xact_commit, xact_rollback,
       blks_read, blks_hit,
       tup_returned, tup_fetched, tup_inserted, tup_updated, tup_deleted
FROM pg_stat_database;

-- Table statistics
SELECT schemaname, tablename, seq_scan, idx_scan,
       n_tup_ins, n_tup_upd, n_tup_del
FROM pg_stat_user_tables
ORDER BY seq_scan DESC;

-- Index usage
SELECT schemaname, tablename, indexname, idx_scan
FROM pg_stat_user_indexes
ORDER BY idx_scan ASC;

-- Lock monitoring
SELECT locktype, database, relation::regclass, mode, granted
FROM pg_locks;

-- Cache hit ratio
SELECT 
    sum(blks_hit) / (sum(blks_hit) + sum(blks_read)) AS cache_hit_ratio
FROM pg_stat_database;`,
        language: 'sql',
      },
      {
        title: 'Monitoring with Python',
        code: `import psycopg2
import time
from datetime import datetime

def monitor_database():
    conn = psycopg2.connect(
        host="localhost",
        database="mydb",
        user="admin",
        password="password"
    )
    
    cursor = conn.cursor()
    
    # Monitor active connections
    cursor.execute("""
        SELECT count(*) FROM pg_stat_activity 
        WHERE state = 'active'
    """)
    active_connections = cursor.fetchone()[0]
    
    # Monitor database size
    cursor.execute("""
        SELECT pg_size_pretty(pg_database_size(current_database()))
    """)
    db_size = cursor.fetchone()[0]
    
    # Monitor slow queries
    cursor.execute("""
        SELECT query, calls, total_time, mean_time
        FROM pg_stat_statements
        WHERE mean_time > 1000
        ORDER BY mean_time DESC
        LIMIT 5
    """)
    slow_queries = cursor.fetchall()
    
    print(f"[{datetime.now()}] Active: {active_connections}, Size: {db_size}")
    
    if slow_queries:
        print("Slow queries detected:")
        for query in slow_queries:
            print(f"  Mean time: {query[3]:.2f}ms - {query[0][:50]}...")
    
    cursor.close()
    conn.close()

# Run monitoring loop
while True:
    monitor_database()
    time.sleep(60)`,
        language: 'python',
      },
    ],
    quiz: [
      {
        question: 'What is a slow query log?',
        options: [
          'A backup of old queries',
          'A log of queries exceeding a time threshold',
          'A list of failed queries',
          'A security audit log',
        ],
        correctAnswer: 1,
        explanation: 'A slow query log records queries that take longer than a specified threshold to execute, helping identify performance problems.',
      },
      {
        question: 'What does cache hit ratio measure?',
        options: [
          'Number of successful queries',
          'Percentage of data reads served from memory vs disk',
          'Number of cached queries',
          'Database uptime percentage',
        ],
        correctAnswer: 1,
        explanation: 'Cache hit ratio measures the percentage of data read requests served from memory cache versus those requiring disk reads.',
      },
    ],
  },

  'disaster-recovery': {
    id: 'disaster-recovery',
    pathId: 'professional',
    title: 'Disaster Recovery and Backup',
    description: 'Ensure business continuity with proper backup and recovery strategies',
    content: {
      overview: 'Disaster recovery involves planning and implementing strategies to recover databases after catastrophic failures, ensuring business continuity and data protection.',
      keyPoints: [
        'Regular automated backups',
        'Point-in-time recovery (PITR)',
        'Recovery time objective (RTO)',
        'Recovery point objective (RPO)',
        'Testing recovery procedures',
      ],
      useCases: [
        'Hardware failures',
        'Data corruption',
        'Ransomware attacks',
        'Natural disasters',
        'Human errors',
      ],
      bestPractices: [
        'Follow 3-2-1 backup rule',
        'Test recovery regularly',
        'Document recovery procedures',
        'Encrypt backup data',
        'Monitor backup success',
      ],
      doAndDont: {
        do: [
          'Automate backup processes',
          'Store backups off-site',
          'Test restores regularly',
          'Monitor backup status',
          'Maintain backup retention policy',
        ],
        dont: [
          'Rely on a single backup',
          'Skip backup testing',
          'Store backups in same location',
          'Ignore backup failures',
          'Forget about backup security',
        ],
      },
    },
    examples: [
      {
        title: 'MySQL Backup Strategies',
        code: `#!/bin/bash
# Full backup script
BACKUP_DIR="/backups/mysql"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/full_backup_$DATE.sql.gz"

# Create full backup
mysqldump --all-databases \\
    --single-transaction \\
    --quick \\
    --lock-tables=false \\
    --routines \\
    --triggers \\
    --events \\
    | gzip > $BACKUP_FILE

# Binary log backup for PITR
mysql -e "FLUSH LOGS;"
cp /var/lib/mysql/mysql-bin.* $BACKUP_DIR/binlogs/

# Verify backup
if [ -f "$BACKUP_FILE" ]; then
    echo "Backup successful: $BACKUP_FILE"
    # Upload to cloud storage
    aws s3 cp $BACKUP_FILE s3://my-backups/mysql/
else
    echo "Backup failed!"
    exit 1
fi`,
        language: 'bash',
      },
      {
        title: 'PostgreSQL Backup and Recovery',
        code: `#!/bin/bash
# Continuous archiving setup
# postgresql.conf
wal_level = replica
archive_mode = on
archive_command = 'cp %p /archive/%f'

# Base backup
pg_basebackup -D /backup/base -Ft -z -P

# Point-in-time recovery
# 1. Stop PostgreSQL
systemctl stop postgresql

# 2. Restore base backup
rm -rf /var/lib/postgresql/data/*
tar -xzf /backup/base/base.tar.gz -C /var/lib/postgresql/data/

# 3. Create recovery.conf
cat > /var/lib/postgresql/data/recovery.conf << EOF
restore_command = 'cp /archive/%f %p'
recovery_target_time = '2023-12-01 14:30:00'
EOF

# 4. Start PostgreSQL
systemctl start postgresql

# Incremental backup with pg_dump
pg_dump -Fc mydb > mydb_$(date +%Y%m%d).dump`,
        language: 'bash',
      },
      {
        title: 'Automated Backup Monitoring',
        code: `import os
import smtplib
from datetime import datetime, timedelta
from email.mime.text import MIMEText

def check_backup_freshness(backup_dir, max_age_hours=24):
    """Check if latest backup is within acceptable age"""
    try:
        files = os.listdir(backup_dir)
        if not files:
            return False, "No backup files found"
        
        latest_file = max(files, key=lambda f: os.path.getctime(
            os.path.join(backup_dir, f)
        ))
        
        file_age = datetime.now() - datetime.fromtimestamp(
            os.path.getctime(os.path.join(backup_dir, latest_file))
        )
        
        if file_age > timedelta(hours=max_age_hours):
            return False, f"Latest backup is {file_age.hours} hours old"
        
        return True, f"Latest backup: {latest_file}"
    
    except Exception as e:
        return False, str(e)

def send_alert(message):
    """Send email alert"""
    msg = MIMEText(message)
    msg['Subject'] = 'Database Backup Alert'
    msg['From'] = 'monitoring@example.com'
    msg['To'] = 'admin@example.com'
    
    s = smtplib.SMTP('localhost')
    s.send_message(msg)
    s.quit()

# Run check
success, message = check_backup_freshness('/backups/mysql')
if not success:
    send_alert(f"Backup check failed: {message}")`,
        language: 'python',
      },
    ],
    quiz: [
      {
        question: 'What does RTO stand for?',
        options: [
          'Recovery Time Objective',
          'Real-Time Operation',
          'Redundant Transfer Option',
          'Remote Terminal Operation',
        ],
        correctAnswer: 0,
        explanation: 'RTO (Recovery Time Objective) is the maximum acceptable time to restore operations after a disaster.',
      },
      {
        question: 'What is the 3-2-1 backup rule?',
        options: [
          '3 backups, 2 locations, 1 cloud',
          '3 copies, 2 different media, 1 offsite',
          '3 servers, 2 databases, 1 backup',
          '3 days, 2 weeks, 1 month retention',
        ],
        correctAnswer: 1,
        explanation: 'The 3-2-1 rule means: 3 copies of data, on 2 different media types, with 1 copy stored offsite.',
      },
    ],
  },

  'microservices-db': {
    id: 'microservices-db',
    pathId: 'professional',
    title: 'Databases in Microservices',
    description: 'Design database strategies for microservices architecture',
    content: {
      overview: 'In microservices architecture, each service typically manages its own database to ensure loose coupling and independent scalability. This introduces challenges around data consistency and distributed transactions.',
      keyPoints: [
        'Database per service pattern',
        'Eventual consistency',
        'Saga pattern for distributed transactions',
        'Event-driven data synchronization',
        'API composition for queries',
      ],
      useCases: [
        'Large-scale distributed systems',
        'Independent service deployment',
        'Polyglot persistence requirements',
        'Team autonomy',
        'Service-specific scaling needs',
      ],
      bestPractices: [
        'One database per microservice',
        'Use events for cross-service communication',
        'Implement saga pattern for transactions',
        'Accept eventual consistency',
        'Avoid distributed joins',
      ],
      doAndDont: {
        do: [
          'Encapsulate database access',
          'Use asynchronous messaging',
          'Implement compensating transactions',
          'Design for eventual consistency',
          'Use domain events',
        ],
        dont: [
          'Share databases between services',
          'Use distributed transactions (2PC)',
          'Perform cross-service joins',
          'Require immediate consistency',
          'Tightly couple services through database',
        ],
      },
    },
    examples: [
      {
        title: 'Saga Pattern',
        code: `// Order Service
class OrderService:
    def create_order(self, order_data):
        # Local transaction
        order = Order(**order_data)
        db.session.add(order)
        db.session.commit()
        
        # Publish event
        event_bus.publish('OrderCreated', {
            'order_id': order.id,
            'customer_id': order.customer_id,
            'total': order.total
        })
        
        return order

// Payment Service
class PaymentService:
    def on_order_created(self, event):
        try:
            # Process payment
            payment = self.process_payment(event['total'])
            
            # Publish success
            event_bus.publish('PaymentProcessed', {
                'order_id': event['order_id'],
                'payment_id': payment.id
            })
        except PaymentError:
            # Publish failure - triggers compensation
            event_bus.publish('PaymentFailed', {
                'order_id': event['order_id']
            })

// Order Service - Compensation
class OrderService:
    def on_payment_failed(self, event):
        # Compensating transaction
        order = Order.query.get(event['order_id'])
        order.status = 'CANCELLED'
        db.session.commit()`,
        language: 'python',
      },
      {
        title: 'Event Sourcing in Microservices',
        code: `// Event Store Service
class EventStoreService:
    def store_event(self, aggregate_id, event_type, event_data):
        event = Event(
            aggregate_id=aggregate_id,
            event_type=event_type,
            data=event_data,
            timestamp=datetime.now()
        )
        db.session.add(event)
        db.session.commit()
        
        # Publish to message bus
        message_bus.publish(event_type, event_data)

// Product Service - Writing
class ProductService:
    def create_product(self, product_data):
        product_id = generate_id()
        
        # Store event
        event_store.store_event(
            product_id,
            'ProductCreated',
            product_data
        )
        
        return product_id

// Inventory Service - Reading
class InventoryService:
    def on_product_created(self, event):
        # Update read model
        inventory = Inventory(
            product_id=event['product_id'],
            quantity=event.get('initial_quantity', 0)
        )
        db.session.add(inventory)
        db.session.commit()`,
        language: 'python',
      },
      {
        title: 'API Composition',
        code: `// API Gateway - Composing data from multiple services
class OrderAPIGateway:
    def get_order_details(self, order_id):
        # Call Order Service
        order = order_service.get_order(order_id)
        
        # Call Customer Service
        customer = customer_service.get_customer(order['customer_id'])
        
        # Call Product Service for each item
        items = []
        for item in order['items']:
            product = product_service.get_product(item['product_id'])
            items.append({
                **item,
                'product_name': product['name'],
                'product_image': product['image_url']
            })
        
        # Compose response
        return {
            'order_id': order['id'],
            'order_date': order['created_at'],
            'status': order['status'],
            'customer': {
                'name': customer['name'],
                'email': customer['email']
            },
            'items': items,
            'total': order['total']
        }

// Alternative: CQRS with Materialized View
class OrderQueryService:
    def on_order_updated(self, event):
        # Maintain denormalized view
        order_view = OrderView.query.get(event['order_id'])
        if not order_view:
            order_view = OrderView(order_id=event['order_id'])
        
        # Update with data from event
        order_view.update_from_event(event)
        db.session.commit()`,
        language: 'python',
      },
    ],
    quiz: [
      {
        question: 'What is the database per service pattern?',
        options: [
          'All services share one database',
          'Each microservice has its own private database',
          'Services use multiple databases',
          'Services don\'t use databases',
        ],
        correctAnswer: 1,
        explanation: 'Database per service pattern means each microservice has its own private database, ensuring loose coupling and independence.',
      },
      {
        question: 'What is the Saga pattern used for?',
        options: [
          'Database backups',
          'Managing distributed transactions across services',
          'Query optimization',
          'Database replication',
        ],
        correctAnswer: 1,
        explanation: 'The Saga pattern manages distributed transactions by breaking them into a sequence of local transactions with compensating actions for failures.',
      },
    ],
  },
};
