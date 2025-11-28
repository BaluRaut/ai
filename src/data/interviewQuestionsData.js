// Comprehensive Interview Questions Data

export const interviewQuestions = {
  sql: {
    title: 'SQL & Relational Databases',
    icon: '🗄️',
    categories: [
      {
        name: 'Basic Concepts',
        level: 'beginner',
        questions: [
          {
            q: 'What is the difference between SQL and NoSQL databases?',
            a: `SQL databases are relational, table-based databases with predefined schemas. They use SQL for querying and are ACID compliant. Examples: MySQL, PostgreSQL, Oracle.

NoSQL databases are non-relational, can be document-based, key-value, graph, or wide-column. They have flexible schemas and are designed for scalability. Examples: MongoDB, Redis, Cassandra.

Choose SQL when you need complex queries and transactions. Choose NoSQL for flexible schemas, high scalability, and unstructured data.`,
          },
          {
            q: 'What is normalization? Explain 1NF, 2NF, and 3NF.',
            a: `Normalization is the process of organizing data to reduce redundancy and improve data integrity.

**1NF (First Normal Form):**
- Each column contains atomic (indivisible) values
- No repeating groups or arrays

**2NF (Second Normal Form):**
- Must be in 1NF
- All non-key attributes fully depend on the primary key
- No partial dependencies

**3NF (Third Normal Form):**
- Must be in 2NF
- No transitive dependencies (non-key columns shouldn't depend on other non-key columns)

Example: If you have (order_id, product_id, product_name), product_name depends on product_id, not on the primary key. Move product_name to a separate products table.`,
          },
          {
            q: 'What is the difference between DELETE, TRUNCATE, and DROP?',
            a: `**DELETE:**
- Removes specific rows based on WHERE clause
- Can be rolled back (logged operation)
- Fires triggers
- Slow for large data

**TRUNCATE:**
- Removes all rows from a table
- Cannot be rolled back in some databases
- Doesn't fire triggers
- Faster than DELETE
- Resets identity counter

**DROP:**
- Removes the entire table (structure + data)
- Cannot be rolled back
- Removes all indexes, triggers, constraints`,
          },
          {
            q: 'What is a Primary Key vs Foreign Key?',
            a: `**Primary Key:**
- Uniquely identifies each row in a table
- Cannot be NULL
- Only one per table
- Automatically indexed

**Foreign Key:**
- References primary key in another table
- Can be NULL (unless specified)
- Multiple allowed per table
- Enforces referential integrity

Example:
\`\`\`sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
\`\`\``,
          },
          {
            q: 'Explain ACID properties in database transactions.',
            a: `ACID ensures reliable transaction processing:

**Atomicity:**
- All operations in a transaction succeed or all fail
- "All or nothing" principle

**Consistency:**
- Transaction brings database from one valid state to another
- All rules and constraints are maintained

**Isolation:**
- Concurrent transactions don't interfere with each other
- Each transaction sees a consistent database state

**Durability:**
- Once committed, changes are permanent
- Survives system crashes or power failures`,
          },
          {
            q: 'What is the difference between WHERE and HAVING?',
            a: `**WHERE:**
- Filters rows BEFORE grouping
- Cannot use aggregate functions
- Works on individual rows

**HAVING:**
- Filters groups AFTER grouping
- Can use aggregate functions
- Works on grouped results

Example:
\`\`\`sql
SELECT department, AVG(salary) as avg_sal
FROM employees
WHERE status = 'active'      -- Filter rows first
GROUP BY department
HAVING AVG(salary) > 50000;  -- Filter groups after
\`\`\``,
          },
          {
            q: 'What are indexes and when should you use them?',
            a: `Indexes are data structures (usually B-tree) that improve query performance.

**When to use:**
- Columns in WHERE clauses
- JOIN conditions
- ORDER BY columns
- Foreign keys

**When NOT to use:**
- Small tables
- Low cardinality columns
- Heavy write tables
- Rarely queried columns

**Types:** Clustered, Non-clustered, Composite, Unique`,
          },
        ],
      },
      {
        name: 'Joins & Subqueries',
        level: 'intermediate',
        questions: [
          {
            q: 'Explain different types of JOINs with examples.',
            a: `**INNER JOIN:** Returns only matching rows
\`\`\`sql
SELECT * FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;
\`\`\`

**LEFT JOIN:** All left rows + matching right (NULL if no match)
\`\`\`sql
SELECT * FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;
\`\`\`

**RIGHT JOIN:** All right rows + matching left

**FULL OUTER JOIN:** All rows from both tables

**CROSS JOIN:** Cartesian product

**SELF JOIN:** Table joined with itself
\`\`\`sql
SELECT e.name, m.name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
\`\`\``,
          },
          {
            q: 'What is a correlated subquery vs non-correlated subquery?',
            a: `**Non-correlated:** Executes once, independently
\`\`\`sql
SELECT * FROM products
WHERE price > (SELECT AVG(price) FROM products);
\`\`\`

**Correlated:** References outer query, executes for each row
\`\`\`sql
SELECT * FROM employees e
WHERE salary > (
    SELECT AVG(salary) FROM employees
    WHERE department_id = e.department_id
);
\`\`\``,
          },
          {
            q: 'How do you find the Nth highest salary?',
            a: `**Method 1: LIMIT/OFFSET**
\`\`\`sql
SELECT DISTINCT salary FROM employees
ORDER BY salary DESC LIMIT 1 OFFSET N-1;
\`\`\`

**Method 2: DENSE_RANK()**
\`\`\`sql
SELECT salary FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank
    FROM employees
) ranked WHERE rank = N;
\`\`\``,
          },
          {
            q: 'Write a query to find duplicate records.',
            a: `**Using GROUP BY:**
\`\`\`sql
SELECT email, COUNT(*) FROM users
GROUP BY email HAVING COUNT(*) > 1;
\`\`\`

**Using ROW_NUMBER():**
\`\`\`sql
SELECT * FROM (
    SELECT *, ROW_NUMBER() OVER(PARTITION BY email ORDER BY id) as rn
    FROM users
) t WHERE rn > 1;
\`\`\``,
          },
          {
            q: 'Explain UNION vs UNION ALL.',
            a: `**UNION:**
- Combines results and removes duplicates
- Slower (needs to check for duplicates)

**UNION ALL:**
- Combines all results including duplicates
- Faster

\`\`\`sql
SELECT name FROM customers
UNION ALL
SELECT name FROM suppliers;
\`\`\``,
          },
          {
            q: 'What are window functions? Give examples.',
            a: `Window functions perform calculations across rows without grouping:

\`\`\`sql
SELECT name, department, salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as rank,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank,
    SUM(salary) OVER (PARTITION BY department) as dept_total,
    LAG(salary) OVER (ORDER BY hire_date) as prev_salary,
    LEAD(salary) OVER (ORDER BY hire_date) as next_salary
FROM employees;
\`\`\``,
          },
        ],
      },
      {
        name: 'Performance & Optimization',
        level: 'advanced',
        questions: [
          {
            q: 'How do you optimize a slow SQL query?',
            a: `**Step 1:** Use EXPLAIN ANALYZE

**Step 2:** Check for:
1. Missing indexes on WHERE/JOIN columns
2. SELECT * - select only needed columns
3. N+1 queries - use JOINs
4. Functions on indexed columns
5. Large result sets - add LIMIT
6. Inefficient JOINs
7. Outdated statistics - run ANALYZE`,
          },
          {
            q: 'Explain database partitioning types.',
            a: `**Range Partitioning:** Based on value ranges
\`\`\`sql
PARTITION BY RANGE (YEAR(created_at)) (
    PARTITION p2023 VALUES LESS THAN (2024),
    PARTITION p2024 VALUES LESS THAN (2025)
);
\`\`\`

**List Partitioning:** Based on discrete values

**Hash Partitioning:** Distributes evenly using hash

**Vertical Partitioning:** Splits columns into tables`,
          },
          {
            q: 'What are isolation levels?',
            a: `**READ UNCOMMITTED:** Dirty reads allowed
**READ COMMITTED:** Only sees committed data (PostgreSQL default)
**REPEATABLE READ:** Same query = same results (MySQL default)
**SERIALIZABLE:** Complete isolation, slowest`,
          },
          {
            q: 'Explain deadlock and how to prevent it.',
            a: `Deadlock occurs when transactions wait for each other's locks.

**Prevention:**
1. Access tables in same order
2. Keep transactions short
3. Use lower isolation levels
4. Avoid user interaction in transactions
5. Use deadlock detection/timeout`,
          },
          {
            q: 'What is query execution plan?',
            a: `Shows how database executes a query:

\`\`\`sql
EXPLAIN ANALYZE SELECT * FROM orders WHERE status = 'pending';
\`\`\`

**Look for:**
- Seq Scan vs Index Scan
- Nested Loop vs Hash Join
- Cost estimates
- Actual vs estimated rows`,
          },
        ],
      },
      {
        name: 'Database Design',
        level: 'advanced',
        questions: [
          {
            q: 'When should you denormalize a database?',
            a: `**Denormalize when:**
- Read performance is critical
- Complex joins are too slow
- Reporting/analytics queries
- Data rarely changes

**Trade-offs:**
- Faster reads, slower writes
- Data redundancy
- Update anomalies possible`,
          },
          {
            q: 'How do you design for scalability?',
            a: `1. **Vertical Scaling:** Bigger server
2. **Horizontal Scaling:** More servers
3. **Read Replicas:** Offload reads
4. **Sharding:** Distribute data
5. **Caching:** Redis/Memcached
6. **Connection Pooling:** Reuse connections
7. **Async Processing:** Queue heavy operations`,
          },
          {
            q: 'Explain soft delete vs hard delete.',
            a: `**Hard Delete:** Permanently removes row
\`\`\`sql
DELETE FROM users WHERE id = 1;
\`\`\`

**Soft Delete:** Marks as deleted
\`\`\`sql
UPDATE users SET deleted_at = NOW() WHERE id = 1;
-- Query active users
SELECT * FROM users WHERE deleted_at IS NULL;
\`\`\`

**Soft delete benefits:** Audit trail, recovery, referential integrity`,
          },
        ],
      },
    ],
  },
  mongodb: {
    title: 'MongoDB & NoSQL',
    icon: '🍃',
    categories: [
      {
        name: 'Core Concepts',
        level: 'beginner',
        questions: [
          {
            q: 'What is MongoDB and when should you use it?',
            a: `MongoDB is a document-oriented NoSQL database storing JSON-like documents.

**Use when:**
- Flexible/evolving schema
- Hierarchical data
- Horizontal scalability needed
- Rapid prototyping

**Don't use when:**
- Complex multi-document transactions
- Complex joins needed
- Strong consistency critical`,
          },
          {
            q: 'Explain embedding vs referencing.',
            a: `**Embedding:** Store related data in single document
\`\`\`javascript
{ title: "Post", comments: [{text: "Great!"}, {text: "Thanks!"}] }
\`\`\`
Use for: Contains relationship, data accessed together

**Referencing:** Store reference to another document
\`\`\`javascript
{ title: "Post", author_id: ObjectId("...") }
\`\`\`
Use for: Many-to-many, data accessed independently`,
          },
          {
            q: 'What is the aggregation pipeline?',
            a: `Pipeline stages transform documents:
\`\`\`javascript
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
]);
\`\`\``,
          },
        ],
      },
      {
        name: 'Performance & Scaling',
        level: 'advanced',
        questions: [
          {
            q: 'How does MongoDB sharding work?',
            a: `**Components:** Shards, Config Servers, Mongos (router)

**Shard Key:** Determines data distribution
\`\`\`javascript
sh.shardCollection("mydb.users", { region: 1 })
\`\`\`

**Good shard key:** High cardinality, even distribution, query patterns`,
          },
          {
            q: 'Explain MongoDB indexing strategies.',
            a: `**Types:**
- Single Field: \`{ email: 1 }\`
- Compound: \`{ city: 1, name: 1 }\`
- Multikey: Auto for arrays
- Text: Full-text search
- TTL: Auto-expire documents

\`\`\`javascript
db.users.createIndex({ email: 1 }, { unique: true })
\`\`\``,
          },
        ],
      },
    ],
  },
  redis: {
    title: 'Redis & Caching',
    icon: '⚡',
    categories: [
      {
        name: 'Core Concepts',
        level: 'beginner',
        questions: [
          {
            q: 'What is Redis and its use cases?',
            a: `Redis is an in-memory data structure store.

**Use cases:**
- Caching (sessions, API responses)
- Real-time analytics (counters, leaderboards)
- Message queues
- Rate limiting
- Session management`,
          },
          {
            q: 'Explain Redis data structures.',
            a: `- **Strings:** Simple key-value
- **Lists:** Ordered collection (queues)
- **Sets:** Unique values
- **Sorted Sets:** Ranked data (leaderboards)
- **Hashes:** Field-value pairs (objects)
- **Streams:** Log-like data`,
          },
          {
            q: 'How does Redis persistence work?',
            a: `**RDB:** Point-in-time snapshots, compact, may lose recent data

**AOF:** Logs every write, more durable, larger files

**Hybrid:** Best of both - AOF durability, RDB for fast restarts`,
          },
        ],
      },
      {
        name: 'Advanced Patterns',
        level: 'advanced',
        questions: [
          {
            q: 'Explain cache eviction policies.',
            a: `- **noeviction:** Error when full
- **allkeys-lru:** Remove least recently used
- **allkeys-lfu:** Remove least frequently used
- **volatile-lru:** LRU among keys with TTL
- **volatile-ttl:** Shortest TTL first`,
          },
          {
            q: 'How to implement distributed locks?',
            a: `**Simple lock:**
\`\`\`
SET lock:resource value NX EX 30
\`\`\`

**Redlock (distributed):**
1. Try lock on N instances
2. Success if majority locked
3. Release all on failure`,
          },
          {
            q: 'Explain cache-aside vs write-through patterns.',
            a: `**Cache-Aside:**
1. Read: Check cache → miss → read DB → update cache
2. Write: Update DB → invalidate cache

**Write-Through:**
1. Write to cache and DB simultaneously
2. Cache always has latest data
3. Higher write latency`,
          },
        ],
      },
    ],
  },
  design: {
    title: 'Database Design',
    icon: '📐',
    categories: [
      {
        name: 'Schema Design',
        level: 'intermediate',
        questions: [
          {
            q: 'How do you approach designing a new database?',
            a: `1. **Gather requirements:** Understand data and queries
2. **Identify entities:** Main objects (users, orders, products)
3. **Define relationships:** One-to-many, many-to-many
4. **Normalize:** Apply 3NF rules
5. **Add constraints:** PKs, FKs, NOT NULL, UNIQUE
6. **Plan indexes:** Based on query patterns
7. **Consider scale:** Partitioning, sharding
8. **Review:** Check against use cases`,
          },
          {
            q: 'How do you handle many-to-many relationships?',
            a: `Use a junction/bridge table:
\`\`\`sql
CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(100));
CREATE TABLE courses (id INT PRIMARY KEY, title VARCHAR(100));
CREATE TABLE enrollments (
    student_id INT REFERENCES students(id),
    course_id INT REFERENCES courses(id),
    enrolled_at TIMESTAMP,
    PRIMARY KEY (student_id, course_id)
);
\`\`\``,
          },
          {
            q: 'How do you store hierarchical data?',
            a: `**Adjacency List:** parent_id column (simple, recursive queries)

**Path Enumeration:** Store path like "1/2/5" (fast reads)

**Nested Sets:** left/right values (fast reads, complex writes)

**Closure Table:** Separate table with ancestor/descendant pairs`,
          },
        ],
      },
      {
        name: 'Common Mistakes',
        level: 'advanced',
        questions: [
          {
            q: 'What are common database design mistakes?',
            a: `1. **No proper normalization:** Data redundancy
2. **Missing indexes:** Slow queries
3. **Too many indexes:** Slow writes
4. **VARCHAR(255) everywhere:** Wasted space
5. **No foreign keys:** Data integrity issues
6. **Storing calculated values:** Unless for performance
7. **No naming conventions:** Inconsistent code
8. **Ignoring NULL handling:** Unexpected query results
9. **No audit trail:** Can't track changes
10. **Over-engineering:** Premature optimization`,
          },
          {
            q: 'How do you handle slowly changing dimensions?',
            a: `**Type 1:** Overwrite (lose history)
**Type 2:** New row with version (track history)
**Type 3:** Add columns for old/new (limited history)
**Type 4:** Separate history table
**Type 6:** Hybrid of 1, 2, 3`,
          },
        ],
      },
    ],
  },
};

export default interviewQuestions;
