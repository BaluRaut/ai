export const intermediateTopics = {
  'joins': {
    id: 'joins',
    pathId: 'intermediate',
    title: 'SQL Joins',
    description: 'Master combining data from multiple tables using joins',
    flowDiagramType: 'joins',
    flowDiagramTitle: 'Visual Guide to SQL JOIN Types',
    content: {
      overview: 'Joins are used to combine rows from two or more tables based on a related column between them. Understanding joins is essential for working with relational databases.',
      keyPoints: [
        'INNER JOIN returns matching rows from both tables',
        'LEFT JOIN returns all rows from left table',
        'RIGHT JOIN returns all rows from right table',
        'FULL JOIN returns all rows when there is a match',
        'CROSS JOIN returns Cartesian product',
      ],
      useCases: [
        'Combining customer and order data',
        'Linking employees with departments',
        'Matching products with categories',
        'Associating users with their posts',
        'Connecting orders with order items',
      ],
      bestPractices: [
        'Understand which type of join fits your needs',
        'Use table aliases for readability',
        'Index join columns for performance',
        'Be cautious with CROSS JOINS',
        'Use explicit JOIN syntax over implicit',
      ],
      doAndDont: {
        do: [
          'Use meaningful table aliases',
          'Specify join conditions clearly',
          'Use INNER JOIN when you need only matches',
          'Use LEFT JOIN to include unmatched rows',
          'Index foreign key columns',
        ],
        dont: [
          'Use comma-separated FROM clause (implicit join)',
          'Forget join conditions (causing Cartesian products)',
          'Join too many tables at once',
          'Use SELECT * with joins',
          'Ignore NULL values in join results',
        ],
      },
    },
    examples: [
      {
        title: 'INNER JOIN',
        code: `-- Get orders with customer information
SELECT 
    o.order_id,
    o.order_date,
    c.customer_name,
    c.email,
    o.total_amount
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id;

-- Multiple INNER JOINs
SELECT 
    o.order_id,
    c.customer_name,
    p.product_name,
    oi.quantity,
    oi.price
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id
INNER JOIN order_items oi ON o.order_id = oi.order_id
INNER JOIN products p ON oi.product_id = p.product_id;`,
        language: 'sql',
      },
      {
        title: 'LEFT JOIN',
        code: `-- Get all customers and their orders (including customers with no orders)
SELECT 
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.order_date,
    o.total_amount
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;

-- Find customers with no orders
SELECT 
    c.customer_id,
    c.customer_name,
    c.email
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;`,
        language: 'sql',
      },
      {
        title: 'RIGHT and FULL JOIN',
        code: `-- RIGHT JOIN: All orders and matching customers
SELECT 
    c.customer_name,
    o.order_id,
    o.total_amount
FROM customers c
RIGHT JOIN orders o ON c.customer_id = o.customer_id;

-- FULL OUTER JOIN: All customers and all orders
SELECT 
    c.customer_name,
    o.order_id,
    o.total_amount
FROM customers c
FULL OUTER JOIN orders o ON c.customer_id = o.customer_id;`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'What does an INNER JOIN return?',
        options: [
          'All rows from both tables',
          'Only rows that have matching values in both tables',
          'All rows from the left table',
          'Only rows without matches',
        ],
        correctAnswer: 1,
        explanation: 'INNER JOIN returns only the rows that have matching values in both tables based on the join condition.',
      },
      {
        question: 'How would you find customers who have never placed an order?',
        options: [
          'INNER JOIN with WHERE clause',
          'RIGHT JOIN with WHERE clause',
          'LEFT JOIN with WHERE order_id IS NULL',
          'CROSS JOIN',
        ],
        correctAnswer: 2,
        explanation: 'Use LEFT JOIN from customers to orders, then filter WHERE order_id IS NULL to find customers with no orders.',
      },
      {
        question: 'What happens in a CROSS JOIN?',
        options: [
          'Returns only matching rows',
          'Returns rows with NULL values',
          'Returns Cartesian product (all combinations)',
          'Returns unique rows only',
        ],
        correctAnswer: 2,
        explanation: 'CROSS JOIN returns the Cartesian product - every row from the first table combined with every row from the second table.',
      },
      {
        question: 'Which JOIN type keeps all rows from the left table?',
        options: [
          'INNER JOIN',
          'RIGHT JOIN',
          'LEFT JOIN',
          'CROSS JOIN',
        ],
        correctAnswer: 2,
        explanation: 'LEFT JOIN (or LEFT OUTER JOIN) returns all rows from the left table and matching rows from the right table. Unmatched rows show NULL.',
      },
      {
        question: 'What is a self join?',
        options: [
          'Joining a table with a view',
          'Joining a table with itself',
          'Joining without conditions',
          'Joining with the same columns',
        ],
        correctAnswer: 1,
        explanation: 'A self join is when a table is joined with itself, often used for hierarchical data like employees reporting to managers.',
      },
      {
        question: 'Which clause specifies the join condition in explicit JOIN syntax?',
        options: [
          'WHERE',
          'HAVING',
          'ON',
          'USING',
        ],
        correctAnswer: 2,
        explanation: 'The ON clause specifies the join condition. USING can also be used when column names are identical in both tables.',
      },
    ],
    exercises: [
      {
        title: 'INNER JOIN Practice',
        difficulty: 'Easy',
        problem: 'Write a query to get all orders along with the customer name who placed them. Show order_id, customer_name, and order_date.',
        hints: [
          'Use INNER JOIN between orders and customers',
          'Join on customer_id',
          'Select specific columns from both tables',
        ],
        solution: `SELECT 
    o.order_id,
    c.customer_name,
    o.order_date
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id;`,
        explanation: 'INNER JOIN combines rows from both tables where the customer_id matches. Only orders with valid customers will appear.',
        language: 'sql',
      },
      {
        title: 'LEFT JOIN - Find Unmatched Records',
        difficulty: 'Medium',
        problem: 'Find all customers who have never placed an order. Show their customer_id, customer_name, and email.',
        hints: [
          'Use LEFT JOIN from customers to orders',
          'Use WHERE clause to filter NULL order_ids',
          'This finds customers with no matching orders',
        ],
        solution: `SELECT 
    c.customer_id,
    c.customer_name,
    c.email
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;`,
        explanation: 'LEFT JOIN includes all customers even if they have no orders. WHERE o.order_id IS NULL filters for customers with no matching orders.',
        language: 'sql',
      },
      {
        title: 'Multiple JOINs',
        difficulty: 'Hard',
        problem: 'Get a complete order report showing: order_id, customer_name, product_name, quantity, and total price (quantity * unit_price). Join orders, customers, order_items, and products tables.',
        hints: [
          'Start with orders table',
          'JOIN customers using customer_id',
          'JOIN order_items using order_id',
          'JOIN products using product_id',
          'Calculate total: quantity * unit_price',
        ],
        solution: `SELECT 
    o.order_id,
    c.customer_name,
    p.product_name,
    oi.quantity,
    (oi.quantity * oi.unit_price) as total_price
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id
INNER JOIN order_items oi ON o.order_id = oi.order_id
INNER JOIN products p ON oi.product_id = p.product_id
ORDER BY o.order_id;`,
        explanation: 'Multiple JOINs connect four tables. Each JOIN adds related information. The calculation creates a computed column for total price.',
        language: 'sql',
      },
      {
        title: 'Aggregate with JOIN',
        difficulty: 'Medium',
        problem: 'For each customer, show their name and total number of orders they have placed. Include customers with 0 orders.',
        hints: [
          'Use LEFT JOIN to include all customers',
          'Use COUNT() to count orders',
          'Use GROUP BY customer',
          'COUNT(o.order_id) counts only non-NULL values',
        ],
        solution: `SELECT 
    c.customer_name,
    COUNT(o.order_id) as total_orders
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.customer_name
ORDER BY total_orders DESC;`,
        explanation: 'LEFT JOIN ensures all customers appear. COUNT(o.order_id) counts orders per customer (0 for customers with no orders). GROUP BY aggregates the data.',
        language: 'sql',
      },
      {
        title: 'Self JOIN',
        difficulty: 'Hard',
        problem: 'Find all employees and their managers. Show employee_name and manager_name. (The employees table has a manager_id that references another employee_id).',
        hints: [
          'Join employees table to itself',
          'Use different aliases (e for employee, m for manager)',
          'Join e.manager_id = m.employee_id',
          'Use LEFT JOIN to include employees without managers',
        ],
        solution: `SELECT 
    e.employee_name as Employee,
    m.employee_name as Manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id
ORDER BY e.employee_name;`,
        explanation: 'Self JOIN joins a table to itself. Different aliases distinguish employee and manager. LEFT JOIN includes employees with no manager (CEO, for example).',
        language: 'sql',
      },
      {
        title: 'JOIN with WHERE Conditions',
        difficulty: 'Medium',
        problem: 'Find all orders placed by customers from "New York" where the total amount is greater than $100. Show customer_name, city, order_id, and total_amount.',
        hints: [
          'JOIN orders and customers',
          'Filter by city in WHERE clause',
          'Filter by total_amount in WHERE clause',
          'Combine conditions with AND',
        ],
        solution: `SELECT 
    c.customer_name,
    c.city,
    o.order_id,
    o.total_amount
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id
WHERE c.city = 'New York' AND o.total_amount > 100
ORDER BY o.total_amount DESC;`,
        explanation: 'WHERE clause filters after the JOIN. Both conditions must be true. This combines relationship filtering (JOIN) with value filtering (WHERE).',
        language: 'sql',
      },
      {
        title: 'Complex Analysis - Customer Spending',
        difficulty: 'Hard',
        problem: 'Create a report showing each customer\'s total spending. Include: customer_name, total_orders (count), total_spent (sum of order totals). Only show customers who have spent more than $500.',
        hints: [
          'JOIN customers and orders',
          'Use COUNT() for total orders',
          'Use SUM() for total spending',
          'GROUP BY customer',
          'Use HAVING to filter aggregated results',
        ],
        solution: `SELECT 
    c.customer_name,
    COUNT(o.order_id) as total_orders,
    SUM(o.total_amount) as total_spent
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.customer_name
HAVING SUM(o.total_amount) > 500
ORDER BY total_spent DESC;`,
        explanation: 'GROUP BY aggregates per customer. HAVING filters after aggregation (unlike WHERE which filters before). This finds high-value customers.',
        language: 'sql',
      },
    ],
    playground: {
      initialData: [
        `CREATE TABLE customers (
          customer_id INTEGER PRIMARY KEY,
          customer_name TEXT NOT NULL,
          email TEXT,
          city TEXT
        )`,
        `CREATE TABLE orders (
          order_id INTEGER PRIMARY KEY,
          customer_id INTEGER,
          order_date TEXT,
          total_amount DECIMAL(10, 2),
          FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
        )`,
        `CREATE TABLE products (
          product_id INTEGER PRIMARY KEY,
          product_name TEXT NOT NULL,
          category TEXT,
          price DECIMAL(10, 2)
        )`,
        `CREATE TABLE order_items (
          order_item_id INTEGER PRIMARY KEY,
          order_id INTEGER,
          product_id INTEGER,
          quantity INTEGER,
          unit_price DECIMAL(10, 2),
          FOREIGN KEY (order_id) REFERENCES orders(order_id),
          FOREIGN KEY (product_id) REFERENCES products(product_id)
        )`,
        `CREATE TABLE employees (
          employee_id INTEGER PRIMARY KEY,
          employee_name TEXT NOT NULL,
          manager_id INTEGER,
          FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
        )`,
        `INSERT INTO customers VALUES (1, 'Alice Johnson', 'alice@example.com', 'New York')`,
        `INSERT INTO customers VALUES (2, 'Bob Smith', 'bob@example.com', 'Los Angeles')`,
        `INSERT INTO customers VALUES (3, 'Carol White', 'carol@example.com', 'New York')`,
        `INSERT INTO customers VALUES (4, 'David Brown', 'david@example.com', 'Chicago')`,
        `INSERT INTO customers VALUES (5, 'Eve Davis', 'eve@example.com', 'Boston')`,
        `INSERT INTO orders VALUES (1, 1, '2024-01-15', 250.00)`,
        `INSERT INTO orders VALUES (2, 1, '2024-02-20', 180.50)`,
        `INSERT INTO orders VALUES (3, 2, '2024-01-18', 95.00)`,
        `INSERT INTO orders VALUES (4, 3, '2024-03-10', 450.00)`,
        `INSERT INTO orders VALUES (5, 3, '2024-03-15', 120.00)`,
        `INSERT INTO products VALUES (1, 'Laptop', 'Electronics', 999.99)`,
        `INSERT INTO products VALUES (2, 'Mouse', 'Electronics', 25.99)`,
        `INSERT INTO products VALUES (3, 'Keyboard', 'Electronics', 75.00)`,
        `INSERT INTO products VALUES (4, 'Monitor', 'Electronics', 299.99)`,
        `INSERT INTO order_items VALUES (1, 1, 1, 1, 999.99)`,
        `INSERT INTO order_items VALUES (2, 1, 2, 2, 25.99)`,
        `INSERT INTO order_items VALUES (3, 2, 3, 1, 75.00)`,
        `INSERT INTO order_items VALUES (4, 3, 2, 3, 25.99)`,
        `INSERT INTO order_items VALUES (5, 4, 4, 1, 299.99)`,
        `INSERT INTO employees VALUES (1, 'CEO Sarah', NULL)`,
        `INSERT INTO employees VALUES (2, 'Manager John', 1)`,
        `INSERT INTO employees VALUES (3, 'Developer Alice', 2)`,
        `INSERT INTO employees VALUES (4, 'Developer Bob', 2)`,
      ],
      defaultQuery: `-- Example: INNER JOIN customers and orders
SELECT 
    c.customer_name,
    o.order_id,
    o.order_date,
    o.total_amount
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id;

-- Try these queries:
-- 1. Find customers with no orders (LEFT JOIN + WHERE NULL)
-- 2. Join 4 tables for complete order details
-- 3. Count orders per customer`,
    },
  },

  'subqueries': {
    id: 'subqueries',
    pathId: 'intermediate',
    title: 'Subqueries',
    description: 'Learn to use nested queries for complex data retrieval',
    content: {
      overview: 'A subquery is a query nested inside another query. Subqueries can be used in SELECT, FROM, WHERE, and HAVING clauses to perform complex operations.',
      keyPoints: [
        'Subqueries can return single values, rows, or tables',
        'Used in WHERE clause for filtering',
        'Used in FROM clause as derived tables',
        'Can be correlated or non-correlated',
        'EXISTS and IN operators often use subqueries',
      ],
      useCases: [
        'Finding records above average',
        'Filtering based on aggregate values',
        'Comparing data across tables',
        'Creating derived tables',
        'Checking for existence of related records',
      ],
      bestPractices: [
        'Use JOINs when possible for better performance',
        'Keep subqueries simple and readable',
        'Consider using WITH (CTEs) for complex subqueries',
        'Understand correlated vs non-correlated subqueries',
        'Test subquery performance',
      ],
      doAndDont: {
        do: [
          'Use subqueries for one-time calculations',
          'Use EXISTS for checking existence',
          'Use IN for matching against a list',
          'Consider CTEs for readability',
          'Limit subquery result sets',
        ],
        dont: [
          'Overuse subqueries when JOINs work better',
          'Nest subqueries too deeply',
          'Use SELECT * in subqueries',
          'Forget to optimize subquery performance',
          'Use correlated subqueries unnecessarily',
        ],
      },
    },
    examples: [
      {
        title: 'Subquery in WHERE Clause',
        code: `-- Find products priced above average
SELECT product_name, price
FROM products
WHERE price > (
    SELECT AVG(price)
    FROM products
);

-- Find customers who placed orders
SELECT customer_name
FROM customers
WHERE customer_id IN (
    SELECT DISTINCT customer_id
    FROM orders
);

-- Find customers with no orders using NOT EXISTS
SELECT customer_name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
);`,
        language: 'sql',
      },
      {
        title: 'Subquery in FROM Clause',
        code: `-- Use subquery as derived table
SELECT 
    category,
    AVG(product_count) as avg_products
FROM (
    SELECT 
        category_id as category,
        COUNT(*) as product_count
    FROM products
    GROUP BY category_id
) as category_stats
GROUP BY category;

-- Get top 5 customers by total spending
SELECT *
FROM (
    SELECT 
        c.customer_name,
        SUM(o.total_amount) as total_spent,
        COUNT(o.order_id) as order_count
    FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
    GROUP BY c.customer_id, c.customer_name
    ORDER BY total_spent DESC
    LIMIT 5
) as top_customers;`,
        language: 'sql',
      },
      {
        title: 'Correlated Subquery',
        code: `-- Find employees earning more than department average
SELECT 
    e.employee_name,
    e.salary,
    e.department_id
FROM employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM employees e2
    WHERE e2.department_id = e.department_id
);

-- Get latest order for each customer
SELECT 
    c.customer_name,
    (SELECT MAX(order_date)
     FROM orders o
     WHERE o.customer_id = c.customer_id) as last_order_date
FROM customers c;`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'What is a correlated subquery?',
        options: [
          'A subquery that runs once',
          'A subquery that references the outer query',
          'A subquery in the SELECT clause',
          'A subquery with JOIN',
        ],
        correctAnswer: 1,
        explanation: 'A correlated subquery references columns from the outer query and is executed once for each row of the outer query.',
      },
      {
        question: 'Which is generally faster for checking existence?',
        options: [
          'IN subquery',
          'EXISTS subquery',
          'JOIN',
          'They are all the same',
        ],
        correctAnswer: 1,
        explanation: 'EXISTS is often faster because it stops as soon as it finds a match, while IN needs to retrieve all values.',
      },
      {
        question: 'Where can subqueries NOT be used?',
        options: [
          'SELECT clause',
          'FROM clause',
          'GROUP BY clause',
          'WHERE clause',
        ],
        correctAnswer: 2,
        explanation: 'Subqueries cannot be used directly in the GROUP BY clause. They can be used in SELECT, FROM, WHERE, and HAVING clauses.',
      },
      {
        question: 'What does a scalar subquery return?',
        options: [
          'Multiple rows and columns',
          'A single value (one row, one column)',
          'An entire table',
          'No value',
        ],
        correctAnswer: 1,
        explanation: 'A scalar subquery returns exactly one value - one row with one column. It can be used where a single value is expected.',
      },
      {
        question: 'What is the main advantage of using CTE over subqueries?',
        options: [
          'CTEs are always faster',
          'CTEs can be referenced multiple times',
          'CTEs use less memory',
          'CTEs work without indexes',
        ],
        correctAnswer: 1,
        explanation: 'CTEs (Common Table Expressions) can be referenced multiple times in the main query, improving readability and avoiding code duplication.',
      },
    ],
    playground: {
      type: 'sql',
      initialData: [
        `CREATE TABLE employees (
          employee_id INTEGER PRIMARY KEY,
          employee_name TEXT,
          department_id INTEGER,
          salary DECIMAL(10,2),
          hire_date DATE
        )`,
        `CREATE TABLE departments (
          department_id INTEGER PRIMARY KEY,
          department_name TEXT,
          location TEXT
        )`,
        `CREATE TABLE projects (
          project_id INTEGER PRIMARY KEY,
          project_name TEXT,
          budget DECIMAL(12,2),
          department_id INTEGER,
          FOREIGN KEY (department_id) REFERENCES departments(department_id)
        )`,
        `INSERT INTO departments VALUES
          (1, 'Engineering', 'Building A'),
          (2, 'Sales', 'Building B'),
          (3, 'Marketing', 'Building C'),
          (4, 'HR', 'Building A')`,
        `INSERT INTO employees VALUES
          (1, 'Alice Johnson', 1, 95000, '2020-01-15'),
          (2, 'Bob Smith', 1, 85000, '2021-03-20'),
          (3, 'Carol Davis', 2, 75000, '2019-06-10'),
          (4, 'David Wilson', 2, 80000, '2021-08-05'),
          (5, 'Emma Brown', 3, 70000, '2022-02-14'),
          (6, 'Frank Miller', 1, 90000, '2020-11-30'),
          (7, 'Grace Lee', 3, 72000, '2021-05-18')`,
        `INSERT INTO projects VALUES
          (1, 'Website Redesign', 150000, 1),
          (2, 'Mobile App', 200000, 1),
          (3, 'Sales Campaign', 50000, 2),
          (4, 'Brand Refresh', 80000, 3)`,
      ],
    },
    exercises: [
      {
        title: 'Find Above-Average Salaries',
        difficulty: 'Easy',
        problem: 'Find all employees who earn more than the average salary across all employees.',
        hints: [
          'Use a subquery in the WHERE clause',
          'The subquery should calculate AVG(salary)',
          'Compare employee salary with the subquery result',
        ],
        solution: `SELECT employee_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees)`,
        explanation: 'This uses a scalar subquery that returns a single value (average salary) to filter employees.',
      },
      {
        title: 'Employees in Engineering',
        difficulty: 'Easy',
        problem: 'Find all employees who work in the Engineering department using a subquery with IN.',
        hints: [
          'Use a subquery to find the department_id for Engineering',
          'Use IN to match employee department_id',
        ],
        solution: `SELECT employee_name, salary
FROM employees
WHERE department_id IN (
  SELECT department_id FROM departments WHERE department_name = 'Engineering'
)`,
        explanation: 'The subquery returns department_id(s) for Engineering, and IN matches employees in those departments.',
      },
      {
        title: 'Departments with Employees',
        difficulty: 'Medium',
        problem: 'Find all departments that have at least one employee using EXISTS.',
        hints: [
          'Use EXISTS with a correlated subquery',
          'The subquery should check for matching department_id in employees',
        ],
        solution: `SELECT department_name
FROM departments d
WHERE EXISTS (
  SELECT 1 FROM employees e WHERE e.department_id = d.department_id
)`,
        explanation: 'EXISTS checks if at least one employee exists for each department. It\'s more efficient than IN for existence checks.',
      },
      {
        title: 'Above Department Average',
        difficulty: 'Medium',
        problem: 'Find employees who earn more than the average salary in their own department (correlated subquery).',
        hints: [
          'Use a correlated subquery that references the outer query',
          'Calculate AVG(salary) for the same department',
          'Compare with e.salary',
        ],
        solution: `SELECT employee_name, salary, department_id
FROM employees e
WHERE salary > (
  SELECT AVG(salary) FROM employees e2 WHERE e2.department_id = e.department_id
)`,
        explanation: 'This correlated subquery runs once per row, calculating the average salary for each employee\'s department.',
      },
      {
        title: 'Derived Table - Department Stats',
        difficulty: 'Medium',
        problem: 'Use a subquery in FROM clause to find the department with the highest average salary. Show department_name and avg_salary.',
        hints: [
          'Create a derived table with department_id and AVG(salary)',
          'JOIN with departments table',
          'Order by average salary descending and limit to 1',
        ],
        solution: `SELECT d.department_name, dept_avg.avg_salary
FROM (
  SELECT department_id, AVG(salary) as avg_salary
  FROM employees
  GROUP BY department_id
) dept_avg
JOIN departments d ON dept_avg.department_id = d.department_id
ORDER BY dept_avg.avg_salary DESC
LIMIT 1`,
        explanation: 'The subquery creates a derived table with aggregated data, which is then joined with departments for the final result.',
      },
      {
        title: 'Departments Without Projects',
        difficulty: 'Medium',
        problem: 'Find all departments that do NOT have any projects using NOT EXISTS.',
        hints: [
          'Use NOT EXISTS to find departments without matches',
          'Correlated subquery checks projects table',
        ],
        solution: `SELECT department_name
FROM departments d
WHERE NOT EXISTS (
  SELECT 1 FROM projects p WHERE p.department_id = d.department_id
)`,
        explanation: 'NOT EXISTS is efficient for finding rows without related records in another table.',
      },
      {
        title: 'Subquery in SELECT',
        difficulty: 'Hard',
        problem: 'For each department, show department_name, location, and the count of employees in that department using a subquery in the SELECT clause.',
        hints: [
          'Put the subquery in SELECT list',
          'Use correlated subquery to count employees',
          'Match department_id between outer and inner query',
        ],
        solution: `SELECT 
  department_name,
  location,
  (SELECT COUNT(*) FROM employees e WHERE e.department_id = d.department_id) as employee_count
FROM departments d`,
        explanation: 'A scalar subquery in the SELECT clause returns a single value for each row. This pattern is useful when you need calculated fields.',
      },
      {
        title: 'Complex Multi-Level Subquery',
        difficulty: 'Hard',
        problem: 'Find employees who work in departments that have projects with budget > 100000. Use nested subqueries.',
        hints: [
          'Inner subquery: find department_ids with high-budget projects',
          'Use IN to match employees to those departments',
        ],
        solution: `SELECT employee_name, salary
FROM employees
WHERE department_id IN (
  SELECT department_id FROM projects WHERE budget > 100000
)`,
        explanation: 'This demonstrates using a subquery to filter based on related table criteria, allowing complex filtering logic.',
      },
    ],
  },

  'indexes': {
    id: 'indexes',
    pathId: 'intermediate',
    title: 'Database Indexes',
    description: 'Optimize query performance with proper indexing strategies',
    content: {
      overview: 'Indexes are data structures that improve the speed of data retrieval operations. They work like a book index, allowing the database to find data without scanning every row.',
      keyPoints: [
        'Speeds up SELECT queries',
        'Slows down INSERT, UPDATE, DELETE',
        'B-Tree is the most common index type',
        'Unique indexes prevent duplicate values',
        'Composite indexes cover multiple columns',
      ],
      useCases: [
        'Speeding up WHERE clause filtering',
        'Optimizing JOIN operations',
        'Improving ORDER BY performance',
        'Enforcing uniqueness',
        'Supporting foreign key constraints',
      ],
      bestPractices: [
        'Index columns used in WHERE clauses',
        'Index foreign key columns',
        'Consider composite indexes for multi-column queries',
        'Monitor index usage and remove unused indexes',
        'Be selective - too many indexes hurt performance',
      ],
      doAndDont: {
        do: [
          'Index columns used frequently in queries',
          'Use covering indexes when possible',
          'Index foreign key columns',
          'Analyze query execution plans',
          'Maintain index statistics',
        ],
        dont: [
          'Index every column',
          'Index small tables',
          'Index columns with low cardinality',
          'Forget to drop unused indexes',
          'Over-index tables with frequent writes',
        ],
      },
    },
    examples: [
      {
        title: 'Creating Indexes',
        code: `-- Single column index
CREATE INDEX idx_customer_email ON customers(email);

-- Unique index
CREATE UNIQUE INDEX idx_product_code ON products(product_code);

-- Composite index
CREATE INDEX idx_order_customer_date 
ON orders(customer_id, order_date);

-- Full-text index
CREATE FULLTEXT INDEX idx_product_description 
ON products(description);`,
        language: 'sql',
      },
      {
        title: 'Index Analysis',
        code: `-- Show indexes on a table
SHOW INDEXES FROM customers;

-- Explain query execution plan
EXPLAIN SELECT * FROM customers WHERE email = 'john@example.com';

-- Drop an index
DROP INDEX idx_customer_email ON customers;

-- Create index concurrently (PostgreSQL)
CREATE INDEX CONCURRENTLY idx_customer_name ON customers(last_name, first_name);`,
        language: 'sql',
      },
      {
        title: 'Covering Index Example',
        code: `-- Query that can be satisfied entirely from index
-- Create covering index
CREATE INDEX idx_customer_lookup 
ON customers(last_name, first_name, email);

-- This query uses only indexed columns
SELECT last_name, first_name, email
FROM customers
WHERE last_name = 'Smith'
ORDER BY first_name;

-- Index statistics
ANALYZE TABLE customers;`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'What is the main benefit of database indexes?',
        options: [
          'Reduce storage space',
          'Speed up data retrieval',
          'Improve data security',
          'Automatic backups',
        ],
        correctAnswer: 1,
        explanation: 'Indexes primarily speed up data retrieval operations by allowing the database to find data without scanning every row.',
      },
      {
        question: 'What is a disadvantage of having too many indexes?',
        options: [
          'Queries become slower',
          'INSERT/UPDATE/DELETE operations slow down',
          'Data gets corrupted',
          'Tables become read-only',
        ],
        correctAnswer: 1,
        explanation: 'Each index must be updated when data is inserted, updated, or deleted, which can slow down write operations.',
      },
      {
        question: 'What is a composite index?',
        options: [
          'An index on a single column',
          'An index on multiple columns',
          'An index shared between tables',
          'A temporary index',
        ],
        correctAnswer: 1,
        explanation: 'A composite (or compound) index is created on multiple columns and is useful for queries that filter or sort by those columns together.',
      },
      {
        question: 'What is the most common index structure in databases?',
        options: [
          'Hash Table',
          'Binary Search Tree',
          'B-Tree',
          'Linked List',
        ],
        correctAnswer: 2,
        explanation: 'B-Tree (Balanced Tree) is the most common index structure, offering O(log n) search, insert, and delete operations while keeping data sorted.',
      },
      {
        question: 'When should you NOT create an index?',
        options: [
          'On primary key columns',
          'On frequently queried columns',
          'On columns with very low cardinality',
          'On foreign key columns',
        ],
        correctAnswer: 2,
        explanation: 'Columns with very low cardinality (few unique values, like boolean columns) are poor candidates for indexing as they don\'t provide significant selectivity.',
      },
      {
        question: 'What is a covering index?',
        options: [
          'An index that covers the entire table',
          'An index that contains all columns needed by a query',
          'An index that covers primary keys only',
          'An index created during maintenance',
        ],
        correctAnswer: 1,
        explanation: 'A covering index includes all columns needed by a query, allowing the query to be satisfied entirely from the index without accessing the table data.',
      },
    ],
    playground: {
      type: 'sql',
      initialData: [
        `CREATE TABLE customers (
          customer_id INTEGER PRIMARY KEY,
          first_name TEXT,
          last_name TEXT,
          email TEXT,
          city TEXT,
          country TEXT,
          registration_date DATE
        )`,
        `CREATE TABLE products (
          product_id INTEGER PRIMARY KEY,
          product_name TEXT,
          category TEXT,
          price DECIMAL(10,2),
          stock_quantity INTEGER
        )`,
        `CREATE TABLE orders (
          order_id INTEGER PRIMARY KEY,
          customer_id INTEGER,
          product_id INTEGER,
          quantity INTEGER,
          order_date DATE,
          total_amount DECIMAL(10,2),
          FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
          FOREIGN KEY (product_id) REFERENCES products(product_id)
        )`,
        `INSERT INTO customers VALUES 
          (1, 'John', 'Smith', 'john.smith@email.com', 'New York', 'USA', '2023-01-15'),
          (2, 'Emma', 'Johnson', 'emma.j@email.com', 'London', 'UK', '2023-02-20'),
          (3, 'Michael', 'Brown', 'mbrown@email.com', 'Toronto', 'Canada', '2023-03-10'),
          (4, 'Sarah', 'Davis', 'sdavis@email.com', 'Sydney', 'Australia', '2023-04-05'),
          (5, 'James', 'Wilson', 'jwilson@email.com', 'New York', 'USA', '2023-05-12')`,
        `INSERT INTO products VALUES
          (1, 'Laptop Pro', 'Electronics', 1299.99, 50),
          (2, 'Wireless Mouse', 'Electronics', 29.99, 200),
          (3, 'Office Chair', 'Furniture', 249.99, 75),
          (4, 'USB-C Cable', 'Electronics', 15.99, 500),
          (5, 'Monitor 27inch', 'Electronics', 399.99, 100)`,
        `INSERT INTO orders VALUES
          (1, 1, 1, 1, '2024-01-10', 1299.99),
          (2, 1, 2, 2, '2024-01-10', 59.98),
          (3, 2, 3, 1, '2024-01-15', 249.99),
          (4, 3, 1, 1, '2024-01-20', 1299.99),
          (5, 4, 4, 5, '2024-01-25', 79.95),
          (6, 5, 5, 2, '2024-02-01', 799.98),
          (7, 2, 2, 3, '2024-02-05', 89.97)`,
        `CREATE INDEX idx_customer_email ON customers(email)`,
        `CREATE INDEX idx_customer_city ON customers(city)`,
        `CREATE INDEX idx_product_category ON products(category)`,
        `CREATE INDEX idx_order_customer ON orders(customer_id)`,
        `CREATE INDEX idx_order_date ON orders(order_date)`,
      ],
    },
    exercises: [
      {
        title: 'Find Customers by Email',
        difficulty: 'Easy',
        problem: 'Write a query to find the customer with email "emma.j@email.com". This query will use the idx_customer_email index.',
        hints: [
          'Use SELECT to get customer details',
          'Use WHERE clause with email field',
          'The index on email makes this query fast',
        ],
        solution: `SELECT * FROM customers WHERE email = 'emma.j@email.com'`,
        explanation: 'The idx_customer_email index allows the database to quickly locate the customer without scanning all rows.',
      },
      {
        title: 'List Orders by Customer',
        difficulty: 'Easy',
        problem: 'Find all orders for customer_id = 1. The idx_order_customer index will optimize this query.',
        hints: [
          'Use SELECT with WHERE on customer_id',
          'The foreign key index makes lookups fast',
        ],
        solution: `SELECT * FROM orders WHERE customer_id = 1`,
        explanation: 'The idx_order_customer index on customer_id makes finding all orders for a specific customer very efficient.',
      },
      {
        title: 'Find Products by Category',
        difficulty: 'Easy',
        problem: 'Get all products in the "Electronics" category. This uses the idx_product_category index.',
        hints: [
          'Use WHERE clause to filter by category',
          'Category is indexed for fast filtering',
        ],
        solution: `SELECT * FROM products WHERE category = 'Electronics'`,
        explanation: 'The idx_product_category index speeds up category-based filtering, common in e-commerce applications.',
      },
      {
        title: 'Range Query with Index',
        difficulty: 'Medium',
        problem: 'Find all orders placed in January 2024 (between 2024-01-01 and 2024-01-31). The idx_order_date index helps with date range queries.',
        hints: [
          'Use BETWEEN for date ranges',
          'The order_date index optimizes range scans',
        ],
        solution: `SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31'`,
        explanation: 'B-tree indexes (default type) are efficient for range queries. The idx_order_date index allows quick scanning of date ranges.',
      },
      {
        title: 'JOIN with Indexed Columns',
        difficulty: 'Medium',
        problem: 'Get customer names and their order details. JOIN on indexed customer_id for optimal performance.',
        hints: [
          'JOIN customers and orders tables',
          'Use customer_id for the join condition',
          'Both tables have indexes on customer_id',
        ],
        solution: `SELECT c.first_name, c.last_name, o.order_id, o.order_date, o.total_amount
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id`,
        explanation: 'The idx_order_customer index on orders.customer_id makes the JOIN operation much faster by allowing quick lookups.',
      },
      {
        title: 'Composite Index Usage',
        difficulty: 'Medium',
        problem: 'Find all customers from "New York" city and order by last_name. Consider how indexes affect this query.',
        hints: [
          'Use WHERE on city (which is indexed)',
          'ORDER BY last_name',
          'A composite index on (city, last_name) would be ideal',
        ],
        solution: `SELECT * FROM customers WHERE city = 'New York' ORDER BY last_name`,
        explanation: 'The idx_customer_city index helps filter by city. A composite index on (city, last_name) would optimize both filtering and sorting.',
      },
      {
        title: 'Count with Index',
        difficulty: 'Medium',
        problem: 'Count how many orders each customer has placed. Use GROUP BY with indexed customer_id.',
        hints: [
          'Use COUNT with GROUP BY',
          'Group by customer_id (indexed column)',
          'Include customer names with a JOIN',
        ],
        solution: `SELECT c.first_name, c.last_name, COUNT(o.order_id) as order_count
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name`,
        explanation: 'Indexes on join columns (customer_id) make aggregation queries faster by optimizing the JOIN and GROUP BY operations.',
      },
      {
        title: 'Covering Index Benefits',
        difficulty: 'Hard',
        problem: 'Select only email and city for customers in "USA". A composite index on (country, city, email) would make this a covering index query.',
        hints: [
          'SELECT only email and city columns',
          'Filter by country = "USA"',
          'A covering index contains all needed columns',
        ],
        solution: `SELECT email, city FROM customers WHERE country = 'USA'`,
        explanation: 'If there was a composite index on (country, city, email), this query could be satisfied entirely from the index without accessing the table data (covering index).',
      },
    ],
  },

  'transactions': {
    id: 'transactions',
    pathId: 'intermediate',
    title: 'Database Transactions',
    description: 'Ensure data consistency with ACID transactions',
    flowDiagramType: 'transaction',
    flowDiagramTitle: 'Transaction Flow: COMMIT vs ROLLBACK',
    content: {
      overview: 'A transaction is a sequence of operations performed as a single logical unit of work. Transactions ensure data integrity through ACID properties: Atomicity, Consistency, Isolation, and Durability.',
      keyPoints: [
        'Atomicity: All or nothing execution',
        'Consistency: Data remains in valid state',
        'Isolation: Concurrent transactions don\'t interfere',
        'Durability: Committed changes are permanent',
        'Use COMMIT to save changes, ROLLBACK to undo',
      ],
      useCases: [
        'Money transfers between accounts',
        'Order processing with inventory updates',
        'Multi-step user registration',
        'Batch data updates',
        'Maintaining referential integrity',
      ],
      bestPractices: [
        'Keep transactions short and simple',
        'Handle errors with proper rollback',
        'Use appropriate isolation levels',
        'Avoid user interaction during transactions',
        'Set transaction timeouts',
      ],
      doAndDont: {
        do: [
          'Use transactions for related operations',
          'Handle exceptions properly',
          'Commit or rollback explicitly',
          'Choose appropriate isolation level',
          'Keep transactions brief',
        ],
        dont: [
          'Leave transactions open indefinitely',
          'Include user input within transactions',
          'Ignore deadlock situations',
          'Use higher isolation than needed',
          'Nest transactions unnecessarily',
        ],
      },
    },
    examples: [
      {
        title: 'Basic Transaction',
        code: `-- Start transaction
START TRANSACTION;

-- Perform operations
UPDATE accounts 
SET balance = balance - 100 
WHERE account_id = 1;

UPDATE accounts 
SET balance = balance + 100 
WHERE account_id = 2;

-- Commit if successful
COMMIT;

-- Or rollback if there's an error
-- ROLLBACK;`,
        language: 'sql',
      },
      {
        title: 'Transaction with Error Handling',
        code: `-- MySQL example with error handling
START TRANSACTION;

-- Save point for partial rollback
SAVEPOINT before_update;

UPDATE inventory 
SET quantity = quantity - 5 
WHERE product_id = 100;

-- Check if sufficient inventory
SET @qty = (SELECT quantity FROM inventory WHERE product_id = 100);

IF @qty < 0 THEN
    ROLLBACK TO before_update;
    SELECT 'Insufficient inventory' AS error;
ELSE
    INSERT INTO orders (product_id, quantity, order_date)
    VALUES (100, 5, NOW());
    COMMIT;
END IF;`,
        language: 'sql',
      },
      {
        title: 'Isolation Levels',
        code: `-- Set isolation level
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
START TRANSACTION;
-- Your queries here
COMMIT;

-- Different isolation levels:
-- READ UNCOMMITTED (lowest isolation, highest concurrency)
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

-- READ COMMITTED (prevents dirty reads)
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- REPEATABLE READ (prevents non-repeatable reads)
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- SERIALIZABLE (highest isolation, lowest concurrency)
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'What does the "A" in ACID stand for?',
        options: ['Automatic', 'Atomicity', 'Asynchronous', 'Aggregated'],
        correctAnswer: 1,
        explanation: 'Atomicity ensures that all operations in a transaction are completed successfully or none of them are applied.',
      },
      {
        question: 'What happens when you ROLLBACK a transaction?',
        options: [
          'Saves all changes',
          'Undoes all changes since transaction started',
          'Closes the database connection',
          'Creates a backup',
        ],
        correctAnswer: 1,
        explanation: 'ROLLBACK undoes all changes made in the current transaction, returning the database to its state before the transaction began.',
      },
      {
        question: 'What does the "I" in ACID represent?',
        options: ['Integrity', 'Isolation', 'Integration', 'Indexing'],
        correctAnswer: 1,
        explanation: 'Isolation ensures that concurrent transactions don\'t interfere with each other, as if they were executed serially.',
      },
      {
        question: 'Which isolation level allows dirty reads?',
        options: [
          'READ UNCOMMITTED',
          'READ COMMITTED',
          'REPEATABLE READ',
          'SERIALIZABLE',
        ],
        correctAnswer: 0,
        explanation: 'READ UNCOMMITTED is the lowest isolation level and allows dirty reads - reading data that hasn\'t been committed yet by other transactions.',
      },
      {
        question: 'What is a SAVEPOINT used for?',
        options: [
          'Automatically saving the transaction',
          'Creating a point for partial rollback',
          'Backing up the database',
          'Locking tables',
        ],
        correctAnswer: 1,
        explanation: 'SAVEPOINT creates a point within a transaction to which you can later rollback, allowing partial undo of changes.',
      },
      {
        question: 'What problem does the "D" (Durability) property solve?',
        options: [
          'Ensures data validation',
          'Prevents data duplication',
          'Committed data survives system failures',
          'Enables data distribution',
        ],
        correctAnswer: 2,
        explanation: 'Durability guarantees that once a transaction is committed, the changes persist even if there\'s a system crash or power failure.',
      },
    ],
  },

  'normalization': {
    id: 'normalization',
    pathId: 'intermediate',
    title: 'Database Normalization',
    description: 'Design efficient database schemas through normalization',
    content: {
      overview: 'Normalization is the process of organizing data to reduce redundancy and improve data integrity. It involves dividing large tables into smaller ones and defining relationships between them.',
      keyPoints: [
        '1NF: Eliminate repeating groups',
        '2NF: Remove partial dependencies',
        '3NF: Remove transitive dependencies',
        'BCNF: Advanced form of 3NF',
        'Denormalization for performance when needed',
      ],
      useCases: [
        'Designing scalable database schemas',
        'Reducing data redundancy',
        'Improving data integrity',
        'Simplifying data maintenance',
        'Optimizing storage',
      ],
      bestPractices: [
        'Normalize to 3NF for most applications',
        'Understand when to denormalize',
        'Document your schema design',
        'Use appropriate keys and relationships',
        'Balance normalization with query performance',
      ],
      doAndDont: {
        do: [
          'Eliminate data redundancy',
          'Use separate tables for entities',
          'Define clear relationships',
          'Apply normalization rules systematically',
          'Consider denormalization for read-heavy tables',
        ],
        dont: [
          'Over-normalize to the point of poor performance',
          'Store calculated values unnecessarily',
          'Create too many small tables',
          'Ignore the impact on query complexity',
          'Normalize everything blindly',
        ],
      },
    },
    examples: [
      {
        title: 'First Normal Form (1NF)',
        code: `-- NOT in 1NF (repeating groups)
CREATE TABLE orders_bad (
    order_id INT,
    customer_name VARCHAR(100),
    products VARCHAR(500)  -- "Laptop, Mouse, Keyboard"
);

-- IN 1NF (atomic values)
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE
);

CREATE TABLE order_items (
    item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);`,
        language: 'sql',
      },
      {
        title: 'Second Normal Form (2NF)',
        code: `-- NOT in 2NF (partial dependency)
CREATE TABLE order_details_bad (
    order_id INT,
    product_id INT,
    product_name VARCHAR(100),  -- Depends only on product_id
    product_price DECIMAL(10,2), -- Depends only on product_id
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);

-- IN 2NF (remove partial dependencies)
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    product_price DECIMAL(10,2)
);

CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);`,
        language: 'sql',
      },
      {
        title: 'Third Normal Form (3NF)',
        code: `-- NOT in 3NF (transitive dependency)
CREATE TABLE employees_bad (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    department_id INT,
    department_name VARCHAR(100),  -- Depends on department_id
    department_location VARCHAR(100) -- Depends on department_id
);

-- IN 3NF (remove transitive dependencies)
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100),
    department_location VARCHAR(100)
);

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'What is the main goal of database normalization?',
        options: [
          'Increase query speed',
          'Reduce data redundancy and improve integrity',
          'Reduce number of tables',
          'Increase storage space',
        ],
        correctAnswer: 1,
        explanation: 'Normalization aims to reduce data redundancy and improve data integrity by organizing data efficiently.',
      },
      {
        question: 'What does First Normal Form (1NF) require?',
        options: [
          'Remove all foreign keys',
          'Each column contains atomic values',
          'Remove all indexes',
          'Combine all tables',
        ],
        correctAnswer: 1,
        explanation: '1NF requires that each column contains atomic (indivisible) values and there are no repeating groups.',
      },
      {
        question: 'What is a partial dependency that 2NF eliminates?',
        options: [
          'Non-key column depending on part of a composite key',
          'A column depending on another non-key column',
          'A column depending on the primary key',
          'A foreign key depending on a primary key',
        ],
        correctAnswer: 0,
        explanation: '2NF eliminates partial dependencies where a non-key column depends on only part of a composite (multi-column) primary key.',
      },
      {
        question: 'What is a transitive dependency that 3NF removes?',
        options: [
          'Column A depends on column B directly',
          'Column A depends on column C which depends on the primary key',
          'All columns depend on the primary key',
          'Foreign key references another table',
        ],
        correctAnswer: 1,
        explanation: 'A transitive dependency occurs when a non-key column depends on another non-key column, which in turn depends on the primary key.',
      },
      {
        question: 'When might you consider denormalization?',
        options: [
          'When storage space is limited',
          'When you need to improve read performance',
          'When you have too many foreign keys',
          'When tables are too small',
        ],
        correctAnswer: 1,
        explanation: 'Denormalization is sometimes used to improve read performance by reducing the number of joins required, especially in read-heavy applications.',
      },
      {
        question: 'What is BCNF (Boyce-Codd Normal Form)?',
        options: [
          'Same as 2NF',
          'A stricter version of 3NF',
          'Less strict than 1NF',
          'Only for NoSQL databases',
        ],
        correctAnswer: 1,
        explanation: 'BCNF is a stricter version of 3NF that handles certain edge cases where 3NF doesn\'t fully eliminate all redundancy.',
      },
    ],
    playground: {
      type: 'sql',
      initialData: [
        `CREATE TABLE students_unnormalized (
          student_id INTEGER PRIMARY KEY,
          student_name TEXT,
          courses TEXT,
          grades TEXT,
          instructor_names TEXT
        )`,
        `INSERT INTO students_unnormalized VALUES
          (1, 'John Smith', 'Math,Physics', 'A,B', 'Dr. Anderson,Prof. Lee'),
          (2, 'Mary Johnson', 'Chemistry,Biology,Math', 'A,A,B', 'Dr. Brown,Dr. White,Dr. Anderson'),
          (3, 'Bob Wilson', 'Physics', 'B', 'Prof. Lee')`,
        `CREATE TABLE students_normalized (
          student_id INTEGER PRIMARY KEY,
          student_name TEXT
        )`,
        `CREATE TABLE courses (
          course_id INTEGER PRIMARY KEY,
          course_name TEXT,
          instructor_id INTEGER
        )`,
        `CREATE TABLE instructors (
          instructor_id INTEGER PRIMARY KEY,
          instructor_name TEXT
        )`,
        `CREATE TABLE enrollments (
          enrollment_id INTEGER PRIMARY KEY,
          student_id INTEGER,
          course_id INTEGER,
          grade TEXT,
          FOREIGN KEY (student_id) REFERENCES students_normalized(student_id),
          FOREIGN KEY (course_id) REFERENCES courses(course_id)
        )`,
        `INSERT INTO students_normalized VALUES (1, 'John Smith'), (2, 'Mary Johnson'), (3, 'Bob Wilson')`,
        `INSERT INTO instructors VALUES (1, 'Dr. Anderson'), (2, 'Prof. Lee'), (3, 'Dr. Brown'), (4, 'Dr. White')`,
        `INSERT INTO courses VALUES
          (1, 'Math', 1),
          (2, 'Physics', 2),
          (3, 'Chemistry', 3),
          (4, 'Biology', 4)`,
        `INSERT INTO enrollments VALUES
          (1, 1, 1, 'A'),
          (2, 1, 2, 'B'),
          (3, 2, 3, 'A'),
          (4, 2, 4, 'A'),
          (5, 2, 1, 'B'),
          (6, 3, 2, 'B')`,
      ],
    },
    exercises: [
      {
        title: 'View Unnormalized Data',
        difficulty: 'Easy',
        problem: 'Select all data from the students_unnormalized table to see the problems with this design.',
        hints: [
          'Use SELECT * to see all columns',
          'Notice how courses, grades, and instructors are stored as comma-separated values',
        ],
        solution: `SELECT * FROM students_unnormalized`,
        explanation: 'This shows a table violating 1NF - it has repeating groups (multiple courses in one field) and non-atomic values.',
      },
      {
        title: 'Query Normalized Students',
        difficulty: 'Easy',
        problem: 'Get all student names from the normalized students table.',
        hints: [
          'The students_normalized table follows 1NF',
          'Each student has one row with atomic values',
        ],
        solution: `SELECT * FROM students_normalized`,
        explanation: 'In the normalized design, students are in their own table with only student-specific data.',
      },
      {
        title: 'Join Student Enrollments',
        difficulty: 'Medium',
        problem: 'Show each student\'s name along with their enrolled courses and grades by joining the normalized tables.',
        hints: [
          'JOIN students_normalized with enrollments',
          'JOIN enrollments with courses',
          'Select student_name, course_name, grade',
        ],
        solution: `SELECT s.student_name, c.course_name, e.grade
FROM students_normalized s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id`,
        explanation: 'Normalization allows us to query related data through JOINs rather than parsing comma-separated values.',
      },
      {
        title: 'Find Course Instructors',
        difficulty: 'Medium',
        problem: 'List all courses with their instructor names by joining courses and instructors tables.',
        hints: [
          'JOIN courses with instructors',
          'Use instructor_id as the join key',
        ],
        solution: `SELECT c.course_name, i.instructor_name
FROM courses c
JOIN instructors i ON c.instructor_id = i.instructor_id`,
        explanation: 'By separating instructors into their own table (3NF), we eliminate redundancy and make updates easier.',
      },
      {
        title: 'Student Performance Report',
        difficulty: 'Medium',
        problem: 'Create a report showing student_name, course_name, instructor_name, and grade for all enrollments.',
        hints: [
          'Need to join 4 tables: students, enrollments, courses, instructors',
          'Chain the JOINs carefully',
        ],
        solution: `SELECT 
  s.student_name, 
  c.course_name, 
  i.instructor_name, 
  e.grade
FROM students_normalized s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id
JOIN instructors i ON c.instructor_id = i.instructor_id`,
        explanation: 'Normalized data allows flexible querying while maintaining data integrity and reducing redundancy.',
      },
      {
        title: 'Count Enrollments Per Student',
        difficulty: 'Medium',
        problem: 'Count how many courses each student is enrolled in.',
        hints: [
          'GROUP BY student',
          'COUNT enrollments',
          'JOIN with students to get names',
        ],
        solution: `SELECT s.student_name, COUNT(e.enrollment_id) as course_count
FROM students_normalized s
LEFT JOIN enrollments e ON s.student_id = e.student_id
GROUP BY s.student_id, s.student_name`,
        explanation: 'Normalization makes aggregation queries straightforward - each enrollment is a separate row.',
      },
      {
        title: 'Students Without Dr. Anderson',
        difficulty: 'Hard',
        problem: 'Find all students who are NOT enrolled in any courses taught by Dr. Anderson.',
        hints: [
          'Use NOT EXISTS with a correlated subquery',
          'Check enrollments → courses → instructors',
        ],
        solution: `SELECT s.student_name
FROM students_normalized s
WHERE NOT EXISTS (
  SELECT 1 
  FROM enrollments e
  JOIN courses c ON e.course_id = c.course_id
  JOIN instructors i ON c.instructor_id = i.instructor_id
  WHERE e.student_id = s.student_id 
  AND i.instructor_name = 'Dr. Anderson'
)`,
        explanation: 'Normalized structure makes complex queries like this possible and efficient.',
      },
      {
        title: 'Update Instructor Name',
        difficulty: 'Hard',
        problem: 'Update Prof. Lee\'s name to "Professor Lee" in the instructors table.',
        hints: [
          'Use UPDATE statement',
          'Set instructor_name',
          'WHERE instructor_name = current value',
        ],
        solution: `UPDATE instructors 
SET instructor_name = 'Professor Lee' 
WHERE instructor_name = 'Prof. Lee'`,
        explanation: 'In normalized tables, updating an instructor\'s name only requires one update. In the unnormalized table, we\'d need to update multiple rows and parse comma-separated values!',
      },
    ],
  },

  'stored-procedures': {
    id: 'stored-procedures',
    pathId: 'intermediate',
    title: 'Stored Procedures and Functions',
    description: 'Create reusable database logic with stored procedures',
    content: {
      overview: 'Stored procedures are precompiled SQL code stored in the database that can be executed repeatedly. They encapsulate business logic, improve performance, and enhance security.',
      keyPoints: [
        'Encapsulate complex logic',
        'Improve performance through precompilation',
        'Reduce network traffic',
        'Enhance security through access control',
        'Support input/output parameters',
      ],
      useCases: [
        'Complex business logic',
        'Batch processing operations',
        'Data validation before insert/update',
        'Automated maintenance tasks',
        'Report generation',
      ],
      bestPractices: [
        'Keep procedures focused and simple',
        'Use meaningful names',
        'Document parameters and return values',
        'Handle errors appropriately',
        'Avoid business logic in procedures when possible',
      ],
      doAndDont: {
        do: [
          'Use for frequently executed operations',
          'Implement proper error handling',
          'Use parameters to prevent SQL injection',
          'Version control your procedures',
          'Test thoroughly',
        ],
        dont: [
          'Put all business logic in procedures',
          'Create overly complex procedures',
          'Forget to handle NULL values',
          'Ignore performance implications',
          'Use dynamic SQL unnecessarily',
        ],
      },
    },
    examples: [
      {
        title: 'Basic Stored Procedure',
        code: `-- Create a simple stored procedure
DELIMITER //

CREATE PROCEDURE GetCustomerOrders(IN customer_id INT)
BEGIN
    SELECT 
        o.order_id,
        o.order_date,
        o.total_amount,
        o.status
    FROM orders o
    WHERE o.customer_id = customer_id
    ORDER BY o.order_date DESC;
END //

DELIMITER ;

-- Call the procedure
CALL GetCustomerOrders(123);`,
        language: 'sql',
      },
      {
        title: 'Procedure with Output Parameters',
        code: `DELIMITER //

CREATE PROCEDURE GetOrderStatistics(
    IN customer_id INT,
    OUT total_orders INT,
    OUT total_spent DECIMAL(10,2),
    OUT avg_order_value DECIMAL(10,2)
)
BEGIN
    SELECT 
        COUNT(*),
        IFNULL(SUM(total_amount), 0),
        IFNULL(AVG(total_amount), 0)
    INTO total_orders, total_spent, avg_order_value
    FROM orders
    WHERE customer_id = customer_id;
END //

DELIMITER ;

-- Call with output parameters
CALL GetOrderStatistics(123, @orders, @spent, @avg);
SELECT @orders, @spent, @avg;`,
        language: 'sql',
      },
      {
        title: 'Function Example',
        code: `-- Create a function
DELIMITER //

CREATE FUNCTION CalculateDiscount(
    order_total DECIMAL(10,2)
)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE discount DECIMAL(10,2);
    
    IF order_total >= 1000 THEN
        SET discount = order_total * 0.15;
    ELSEIF order_total >= 500 THEN
        SET discount = order_total * 0.10;
    ELSEIF order_total >= 100 THEN
        SET discount = order_total * 0.05;
    ELSE
        SET discount = 0;
    END IF;
    
    RETURN discount;
END //

DELIMITER ;

-- Use the function
SELECT 
    order_id,
    total_amount,
    CalculateDiscount(total_amount) as discount,
    total_amount - CalculateDiscount(total_amount) as final_amount
FROM orders;`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'What is the main advantage of stored procedures?',
        options: [
          'Easier to debug',
          'Precompiled and faster execution',
          'Automatic backups',
          'Better graphics',
        ],
        correctAnswer: 1,
        explanation: 'Stored procedures are precompiled and stored in the database, resulting in faster execution and reduced network traffic.',
      },
      {
        question: 'What is the difference between a stored procedure and a function?',
        options: [
          'No difference',
          'Functions must return a value, procedures may not',
          'Procedures are faster',
          'Functions cannot have parameters',
        ],
        correctAnswer: 1,
        explanation: 'Functions must return a value and can be used in SQL expressions, while procedures may or may not return values and are called using CALL statement.',
      },
      {
        question: 'What is a DELIMITER used for in stored procedures?',
        options: [
          'To separate parameters',
          'To change the statement terminator temporarily',
          'To split tables',
          'To divide the database',
        ],
        correctAnswer: 1,
        explanation: 'DELIMITER changes the statement terminator so semicolons inside the procedure body aren\'t interpreted as the end of the CREATE PROCEDURE statement.',
      },
      {
        question: 'What type of parameter allows passing values into a procedure?',
        options: [
          'OUT parameter',
          'INOUT parameter',
          'IN parameter',
          'RETURN parameter',
        ],
        correctAnswer: 2,
        explanation: 'IN parameters are used to pass values into a stored procedure. They are read-only within the procedure.',
      },
      {
        question: 'When should you use a function instead of a procedure?',
        options: [
          'When you need to call it from a trigger',
          'When you need to return a value for use in SQL expressions',
          'When you don\'t need parameters',
          'When performance is critical',
        ],
        correctAnswer: 1,
        explanation: 'Functions are ideal when you need to return a value that can be used in SQL expressions like SELECT statements or WHERE clauses.',
      },
    ],
  },
};
