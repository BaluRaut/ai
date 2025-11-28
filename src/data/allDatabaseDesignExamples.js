// Combine all database design examples

import { databaseDesignExamples } from './databaseDesignExamples1';
import { databaseDesignExamples2 } from './databaseDesignExamples2';
import { databaseDesignExamples3 } from './databaseDesignExamples3';
import { databaseDesignExamples4 } from './databaseDesignExamples4';
import { databaseDesignExamples5 } from './databaseDesignExamples5';
import { databaseDesignExamples6 } from './databaseDesignExamples6';
import { databaseDesignExamples7 } from './databaseDesignExamples7';
import { databaseDesignExamples8 } from './databaseDesignExamples8';
import { databaseDesignExamples9 } from './databaseDesignExamples9';
import { databaseDesignExamples10 } from './databaseDesignExamples10';
import { databaseDesignExamples11 } from './databaseDesignExamples11';
import { databaseDesignExamples12 } from './databaseDesignExamples12';

// Combine all examples into one array (12 real-world examples)
export const allDatabaseDesignExamples = [
  ...databaseDesignExamples,
  ...databaseDesignExamples2,
  ...databaseDesignExamples3,
  ...databaseDesignExamples4,
  ...databaseDesignExamples5,
  ...databaseDesignExamples6,
  ...databaseDesignExamples7,
  ...databaseDesignExamples8,
  ...databaseDesignExamples9,
  ...databaseDesignExamples10,
  ...databaseDesignExamples11,
  ...databaseDesignExamples12,
];

// Common database design mistakes (general)
export const commonDesignMistakes = [
  {
    id: 1,
    category: 'Schema Design',
    mistake: 'Not normalizing data properly',
    description: 'Storing redundant data across multiple tables',
    consequence: 'Update anomalies, data inconsistency, wasted storage',
    solution: 'Apply normalization rules (1NF, 2NF, 3NF), then denormalize only where needed for performance',
    example: `-- BAD: Storing customer info in every order
CREATE TABLE orders (
    id INT,
    customer_name VARCHAR(100),  -- Duplicated!
    customer_email VARCHAR(255), -- Duplicated!
    product_name VARCHAR(100)
);

-- GOOD: Separate tables with foreign keys
CREATE TABLE customers (id INT PRIMARY KEY, name VARCHAR(100), email VARCHAR(255));
CREATE TABLE orders (id INT PRIMARY KEY, customer_id INT REFERENCES customers(id));`
  },
  {
    id: 2,
    category: 'Schema Design',
    mistake: 'Using VARCHAR(255) for everything',
    description: 'Setting maximum length for all string columns',
    consequence: 'Wasted memory in some databases, unclear data constraints',
    solution: 'Use appropriate lengths based on actual data requirements',
    example: `-- BAD
CREATE TABLE users (
    country_code VARCHAR(255),  -- Only needs 2-3 chars
    phone VARCHAR(255),         -- Max 20 chars
    zip_code VARCHAR(255)       -- Max 10 chars
);

-- GOOD
CREATE TABLE users (
    country_code CHAR(2),
    phone VARCHAR(20),
    zip_code VARCHAR(10)
);`
  },
  {
    id: 3,
    category: 'Indexing',
    mistake: 'Missing indexes on foreign keys',
    description: 'Not indexing columns used in JOIN conditions',
    consequence: 'Slow queries, full table scans on JOINs',
    solution: 'Always index foreign key columns',
    example: `-- BAD: No index on order_items.order_id
CREATE TABLE order_items (
    id INT PRIMARY KEY,
    order_id INT REFERENCES orders(id),
    product_id INT
);

-- GOOD: Index on foreign key
CREATE INDEX idx_order_items_order ON order_items(order_id);`
  },
  {
    id: 4,
    category: 'Indexing',
    mistake: 'Too many indexes',
    description: 'Creating indexes on every column',
    consequence: 'Slow INSERT/UPDATE/DELETE operations, wasted storage',
    solution: 'Only index columns used in WHERE, JOIN, ORDER BY frequently',
    example: `-- BAD: Index on rarely queried column
CREATE INDEX idx_users_created ON users(created_at);
CREATE INDEX idx_users_updated ON users(updated_at);
CREATE INDEX idx_users_bio ON users(bio);  -- Never searched!

-- GOOD: Only index what you query
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);`
  },
  {
    id: 5,
    category: 'Data Types',
    mistake: 'Using wrong data types',
    description: 'Storing numbers as strings, dates as strings',
    consequence: 'Cannot use comparison operators, sorting issues, validation problems',
    solution: 'Use appropriate data types for the data',
    example: `-- BAD
CREATE TABLE products (
    price VARCHAR(20),     -- Can't do math
    created_at VARCHAR(50) -- Can't compare dates
);

-- GOOD
CREATE TABLE products (
    price DECIMAL(10,2),
    created_at TIMESTAMP
);`
  },
  {
    id: 6,
    category: 'Data Types',
    mistake: 'Using INT for monetary values',
    description: 'Storing currency as integer or float',
    consequence: 'Rounding errors, precision loss',
    solution: 'Use DECIMAL/NUMERIC for exact precision',
    example: `-- BAD: Float has precision issues
CREATE TABLE invoices (amount FLOAT);
-- 0.1 + 0.2 = 0.30000000000000004

-- GOOD: Exact decimal
CREATE TABLE invoices (amount DECIMAL(10,2));`
  },
  {
    id: 7,
    category: 'Constraints',
    mistake: 'No foreign key constraints',
    description: 'Relying on application to maintain referential integrity',
    consequence: 'Orphaned records, data inconsistency',
    solution: 'Always use foreign key constraints',
    example: `-- BAD: No constraint
CREATE TABLE orders (customer_id INT);
-- Can insert orders with non-existent customers!

-- GOOD: With constraint
CREATE TABLE orders (
    customer_id INT REFERENCES customers(id) ON DELETE RESTRICT
);`
  },
  {
    id: 8,
    category: 'Constraints',
    mistake: 'Not using CHECK constraints',
    description: 'Only validating data in application code',
    consequence: 'Invalid data can enter database through direct queries',
    solution: 'Add CHECK constraints for business rules',
    example: `-- BAD: No validation
CREATE TABLE products (price DECIMAL(10,2));
-- Negative prices possible!

-- GOOD: With CHECK
CREATE TABLE products (
    price DECIMAL(10,2) CHECK (price >= 0),
    status VARCHAR(20) CHECK (status IN ('active', 'inactive'))
);`
  },
  {
    id: 9,
    category: 'Performance',
    mistake: 'SELECT * in production queries',
    description: 'Retrieving all columns when only few are needed',
    consequence: 'Wasted bandwidth, slower queries, can\'t use covering indexes',
    solution: 'Select only the columns you need',
    example: `-- BAD
SELECT * FROM users WHERE id = 1;
-- Returns 50 columns when you need 3

-- GOOD
SELECT id, name, email FROM users WHERE id = 1;`
  },
  {
    id: 10,
    category: 'Performance',
    mistake: 'N+1 query problem',
    description: 'Executing one query per item in a loop',
    consequence: 'Hundreds of database round-trips, extremely slow',
    solution: 'Use JOINs or batch queries',
    example: `-- BAD: N+1 queries
orders = SELECT * FROM orders;
for order in orders:
    customer = SELECT * FROM customers WHERE id = order.customer_id;

-- GOOD: Single query with JOIN
SELECT o.*, c.name, c.email
FROM orders o
JOIN customers c ON o.customer_id = c.id;`
  },
  {
    id: 11,
    category: 'Performance',
    mistake: 'Functions on indexed columns in WHERE clause',
    description: 'Using functions that prevent index usage',
    consequence: 'Full table scan instead of index scan',
    solution: 'Restructure query to use index',
    example: `-- BAD: Can't use index on created_at
SELECT * FROM orders WHERE YEAR(created_at) = 2024;

-- GOOD: Range query uses index
SELECT * FROM orders 
WHERE created_at >= '2024-01-01' 
  AND created_at < '2025-01-01';`
  },
  {
    id: 12,
    category: 'Concurrency',
    mistake: 'Check-then-act race conditions',
    description: 'Checking a value and then updating based on it in separate queries',
    consequence: 'Race conditions, overselling, double bookings',
    solution: 'Use single atomic UPDATE or transactions with proper locking',
    example: `-- BAD: Race condition
available = SELECT stock FROM products WHERE id = 1;
if available >= 5:
    UPDATE products SET stock = stock - 5 WHERE id = 1;

-- GOOD: Atomic update
UPDATE products 
SET stock = stock - 5 
WHERE id = 1 AND stock >= 5
RETURNING stock;`
  },
  {
    id: 13,
    category: 'History & Audit',
    mistake: 'No audit trail',
    description: 'Not tracking who changed what and when',
    consequence: 'Cannot debug issues, no accountability, compliance problems',
    solution: 'Add audit columns or separate audit log table',
    example: `-- Add audit columns
CREATE TABLE orders (
    id INT PRIMARY KEY,
    -- ... other columns ...
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by INT REFERENCES users(id),
    updated_at TIMESTAMP,
    updated_by INT REFERENCES users(id)
);

-- Or separate audit log
CREATE TABLE audit_log (
    id SERIAL PRIMARY KEY,
    table_name VARCHAR(50),
    record_id INT,
    action VARCHAR(10),
    old_values JSONB,
    new_values JSONB,
    changed_by INT,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
  },
  {
    id: 14,
    category: 'History & Audit',
    mistake: 'Hard deleting records',
    description: 'Permanently removing data without soft delete',
    consequence: 'Cannot recover data, breaks referential integrity, no audit trail',
    solution: 'Use soft delete with deleted_at column',
    example: `-- BAD: Permanent delete
DELETE FROM users WHERE id = 1;

-- GOOD: Soft delete
UPDATE users SET deleted_at = NOW() WHERE id = 1;

-- Query active users
SELECT * FROM users WHERE deleted_at IS NULL;`
  },
  {
    id: 15,
    category: 'Security',
    mistake: 'Storing passwords in plain text',
    description: 'Not hashing passwords before storage',
    consequence: 'Major security breach if database is compromised',
    solution: 'Use bcrypt or argon2 for password hashing',
    example: `-- BAD
CREATE TABLE users (
    password VARCHAR(100)  -- Plain text!
);

-- GOOD
CREATE TABLE users (
    password_hash VARCHAR(255)  -- bcrypt hash
);
-- Use bcrypt in application:
-- password_hash = bcrypt.hash(password, salt_rounds=12)`
  }
];

export default allDatabaseDesignExamples;
