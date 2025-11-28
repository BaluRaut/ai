export const topics = {
  // BEGINNER TOPICS
  'intro-databases': {
    id: 'intro-databases',
    pathId: 'beginner',
    title: 'Introduction to Databases',
    description: 'Learn what databases are and why they are essential for modern applications',
    flowDiagramType: 'query-execution',
    flowDiagramTitle: 'How Database Queries Are Executed',
    visualDiagram: `
      graph TD
        A[Application] -->|Read/Write| B[Database Management System]
        B -->|Manages| C[Database]
        C -->|Contains| D[Tables/Collections]
        D -->|Stores| E[Data]
        B -->|Provides| F[Security]
        B -->|Handles| G[Concurrent Access]
        B -->|Ensures| H[Data Integrity]
    `,
    content: {
      overview: 'A database is an organized collection of structured information or data, typically stored electronically in a computer system. Databases are managed by Database Management Systems (DBMS), which provide an interface for users to interact with the data. Modern applications rely heavily on databases to store everything from user profiles and transactions to analytics and real-time data.',
      keyPoints: [
        'Data is organized into tables, collections, or other structures',
        'DBMS handles data storage, retrieval, and manipulation',
        'Supports multiple users and concurrent access',
        'Provides data integrity and security features',
        'Enables efficient data querying and reporting',
        'Databases can be relational (SQL) or non-relational (NoSQL)',
        'Data persistence ensures information survives application restarts',
        'ACID properties ensure reliable transaction processing',
      ],
      useCases: [
        'E-commerce platforms for product catalogs and orders',
        'Banking systems for customer accounts and transactions',
        'Social media platforms for user profiles and content',
        'Healthcare systems for patient records',
        'Content management systems for websites',
        'IoT applications for sensor data storage',
        'Gaming platforms for player progress and leaderboards',
        'Logistics systems for tracking shipments',
      ],
      bestPractices: [
        'Choose the right database type for your use case',
        'Plan your data model before implementation',
        'Implement proper security measures',
        'Regular backups and disaster recovery planning',
        'Monitor performance and optimize as needed',
        'Use connection pooling for better performance',
        'Implement data validation at the database level',
        'Version control your database schema changes',
      ],
      doAndDont: {
        do: [
          'Use appropriate data types',
          'Implement proper indexing',
          'Normalize data to reduce redundancy',
          'Use transactions for data consistency',
          'Document your database schema',
          'Test queries before deploying to production',
          'Use prepared statements to prevent SQL injection',
        ],
        dont: [
          'Store sensitive data without encryption',
          'Ignore database performance metrics',
          'Use SELECT * in production queries',
          'Hardcode credentials in applications',
          'Skip regular backups',
          'Store large binary files directly in database',
          'Create tables without primary keys',
        ],
      },
    },
    examples: [
      {
        title: 'Types of Databases',
        code: `-- Relational Databases (SQL)
Examples: MySQL, PostgreSQL, Oracle, SQL Server
Use case: Structured data with relationships

-- NoSQL Databases
Document: MongoDB, CouchDB
Key-Value: Redis, DynamoDB
Column-Family: Cassandra, HBase
Graph: Neo4j, ArangoDB`,
        language: 'sql',
      },
      {
        title: 'Simple Table Structure',
        code: `-- Creating a basic users table
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
        language: 'sql',
      },
      {
        title: 'Database Architecture Overview',
        code: `/*
  Three-Tier Architecture:
  
  1. PRESENTATION TIER (Frontend)
     - Web browsers, mobile apps
     - Sends requests to application
  
  2. APPLICATION TIER (Backend)
     - Business logic
     - Connects to database
     - Processes data
  
  3. DATA TIER (Database)
     - Stores and manages data
     - Handles queries
     - Ensures data integrity
*/

-- Example: Backend connects to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'app_user',
  password: 'secure_password',
  database: 'my_application'
});`,
        language: 'javascript',
      },
      {
        title: 'SQL vs NoSQL Comparison',
        code: `/*
SQL (Relational Databases)
- Fixed schema (tables with columns)
- ACID compliant
- Best for structured data
- Strong consistency
- Good for: Banking, e-commerce, ERP

NoSQL (Non-Relational Databases)
- Flexible schema
- Eventual consistency (usually)
- Best for unstructured/semi-structured data
- Horizontal scaling
- Good for: Social media, real-time apps, IoT

Example SQL:
SELECT * FROM users WHERE age > 21;

Example NoSQL (MongoDB):
db.users.find({ age: { $gt: 21 } });
*/`,
        language: 'javascript',
      },
    ],
    quiz: [
      {
        question: 'What is a Database Management System (DBMS)?',
        options: [
          'A programming language for databases',
          'Software that manages database operations and provides interface for users',
          'A type of database',
          'A cloud storage service',
        ],
        correctAnswer: 1,
        explanation: 'A DBMS is software that handles the storage, retrieval, and updating of data in a database, providing an interface between users and the database.',
      },
      {
        question: 'Which of the following is a NoSQL database?',
        options: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
        correctAnswer: 2,
        explanation: 'MongoDB is a NoSQL document database, while MySQL, PostgreSQL, and Oracle are relational (SQL) databases.',
      },
      {
        question: 'What does ACID stand for in database transactions?',
        options: [
          'Automatic, Consistent, Isolated, Durable',
          'Atomicity, Consistency, Isolation, Durability',
          'Advanced, Cached, Indexed, Distributed',
          'Atomic, Copied, Independent, Data',
        ],
        correctAnswer: 1,
        explanation: 'ACID stands for Atomicity (all or nothing), Consistency (data remains valid), Isolation (transactions don\'t interfere), and Durability (committed changes are permanent).',
      },
      {
        question: 'Which database type is best for storing user profiles in a social media app?',
        options: [
          'Only SQL databases',
          'Only NoSQL databases',
          'Both can work, but NoSQL offers more flexibility for varied user data',
          'Spreadsheets are better',
        ],
        correctAnswer: 2,
        explanation: 'Both SQL and NoSQL can store user profiles, but NoSQL databases like MongoDB are often preferred for social media due to their flexible schema, which handles varied user data well.',
      },
      {
        question: 'What is the primary purpose of a database index?',
        options: [
          'To encrypt data',
          'To speed up data retrieval',
          'To backup data',
          'To compress data',
        ],
        correctAnswer: 1,
        explanation: 'Indexes speed up data retrieval by providing a quick lookup mechanism, similar to an index in a book.',
      },
    ],
    exercises: [
      {
        title: 'Understanding Database Types',
        difficulty: 'Easy',
        problem: 'Create a simple table called "students" with columns: id (integer), name (text), age (integer), and grade (text). Then insert 3 student records.',
        hints: [
          'Use CREATE TABLE to define the table structure',
          'Use INSERT INTO to add data',
          'Remember to specify column names and values',
        ],
        solution: `-- Create the students table
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER,
    grade TEXT
);

-- Insert student records
INSERT INTO students VALUES (1, 'Alice Johnson', 15, 'A');
INSERT INTO students VALUES (2, 'Bob Smith', 16, 'B');
INSERT INTO students VALUES (3, 'Charlie Brown', 15, 'A');

-- View the data
SELECT * FROM students;`,
        explanation: 'This exercise demonstrates the basic structure of creating a table and inserting data. The PRIMARY KEY ensures each student has a unique ID.',
        language: 'sql',
        expectedOutput: `id | name           | age | grade
1  | Alice Johnson  | 15  | A
2  | Bob Smith      | 16  | B
3  | Charlie Brown  | 15  | A`,
      },
      {
        title: 'Query Your First Database',
        difficulty: 'Easy',
        problem: 'Write a query to select all students who have grade "A".',
        hints: [
          'Use SELECT to retrieve data',
          'Use WHERE clause to filter',
          'Compare grade column with the value "A"',
        ],
        solution: `SELECT * FROM students WHERE grade = 'A';`,
        explanation: 'The WHERE clause filters rows based on a condition. Here we select only students with grade A.',
        language: 'sql',
        expectedOutput: `id | name           | age | grade
1  | Alice Johnson  | 15  | A
3  | Charlie Brown  | 15  | A`,
      },
    ],
    playground: {
      initialData: [
        `CREATE TABLE students (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          age INTEGER,
          grade TEXT
        )`,
        `INSERT INTO students VALUES (1, 'Alice Johnson', 15, 'A')`,
        `INSERT INTO students VALUES (2, 'Bob Smith', 16, 'B')`,
        `INSERT INTO students VALUES (3, 'Charlie Brown', 15, 'A')`,
        `INSERT INTO students VALUES (4, 'Diana Prince', 16, 'A')`,
        `INSERT INTO students VALUES (5, 'Eve Adams', 15, 'C')`,
      ],
      defaultQuery: 'SELECT * FROM students;',
    },
  },

  'relational-model': {
    id: 'relational-model',
    pathId: 'beginner',
    title: 'Relational Database Model',
    description: 'Understand the relational model and how data is organized in tables',
    flowDiagramType: 'normalization',
    flowDiagramTitle: 'Database Normalization Steps',
    visualDiagram: `
      erDiagram
        CUSTOMERS ||--o{ ORDERS : places
        CUSTOMERS {
            int customer_id PK
            string name
            string email
            string phone
        }
        ORDERS {
            int order_id PK
            int customer_id FK
            date order_date
            decimal total_amount
        }
        ORDERS ||--|{ ORDER_ITEMS : contains
        ORDER_ITEMS {
            int item_id PK
            int order_id FK
            int product_id FK
            int quantity
            decimal price
        }
        PRODUCTS ||--o{ ORDER_ITEMS : "ordered in"
        PRODUCTS {
            int product_id PK
            string product_name
            decimal price
            int stock
        }
    `,
    content: {
      overview: 'The relational model organizes data into tables (relations) with rows and columns. Each table represents an entity, and relationships between tables are established through keys. Database normalization is the process of organizing data to reduce redundancy and improve data integrity.',
      keyPoints: [
        'Data is stored in tables with rows and columns',
        'Each row represents a record/tuple',
        'Each column represents an attribute',
        'Primary keys uniquely identify rows',
        'Foreign keys create relationships between tables',
        'Normalization reduces data redundancy',
        'Normal forms (1NF, 2NF, 3NF, BCNF) define levels of organization',
        'Relationships can be one-to-one, one-to-many, or many-to-many',
      ],
      useCases: [
        'Customer relationship management (CRM) systems',
        'Inventory management systems',
        'Employee management systems',
        'Order processing systems',
        'Financial transaction systems',
        'E-learning platforms with student-course enrollments',
        'Healthcare systems with patient-doctor-appointment relationships',
      ],
      bestPractices: [
        'Define clear primary keys for each table',
        'Use foreign keys to maintain referential integrity',
        'Normalize tables to at least 3NF to reduce redundancy',
        'Choose appropriate data types for columns',
        'Use meaningful table and column names',
        'Document entity relationships with ER diagrams',
        'Consider denormalization only for performance after profiling',
        'Use junction tables for many-to-many relationships',
      ],
      doAndDont: {
        do: [
          'Use surrogate keys when natural keys are complex',
          'Establish relationships through foreign keys',
          'Document table relationships',
          'Use constraints to enforce data integrity',
          'Plan for scalability',
          'Normalize to eliminate data redundancy',
          'Create indexes on foreign key columns',
          'Use composite keys when appropriate',
        ],
        dont: [
          'Create tables without primary keys',
          'Store multiple values in a single column (violates 1NF)',
          'Use ambiguous column names',
          'Ignore data normalization',
          'Create circular foreign key relationships',
          'Store calculated/derived data',
          'Create unnecessary duplicate data',
          'Skip normalization without valid reason',
        ],
      },
    },
    examples: [
      {
        title: 'Creating Related Tables',
        code: `-- Customers table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20)
);

-- Orders table with foreign key
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);`,
        language: 'sql',
      },
      {
        title: 'One-to-Many Relationship',
        code: `-- One customer can have many orders
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    COUNT(o.order_id) as total_orders,
    SUM(o.total_amount) as total_spent
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name;`,
        language: 'sql',
      },
      {
        title: 'Many-to-Many Relationship with Junction Table',
        code: `-- Students and Courses have a many-to-many relationship
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100),
    credits INT
);

-- Junction/Bridge table
CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    grade VARCHAR(2),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    UNIQUE(student_id, course_id) -- Prevent duplicate enrollments
);

-- Query: Find all courses for a specific student
SELECT s.student_name, c.course_name, e.grade
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id
WHERE s.student_id = 1;`,
        language: 'sql',
      },
      {
        title: 'Self-Referencing Relationship (Hierarchical)',
        code: `-- Employees table with manager relationship
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    job_title VARCHAR(50),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);

INSERT INTO employees VALUES (1, 'Alice Johnson', 'CEO', NULL);
INSERT INTO employees VALUES (2, 'Bob Smith', 'VP Engineering', 1);
INSERT INTO employees VALUES (3, 'Carol Davis', 'Senior Developer', 2);
INSERT INTO employees VALUES (4, 'David Lee', 'Developer', 2);

-- Query: Find employee with their manager
SELECT 
    e.employee_name as Employee,
    e.job_title,
    m.employee_name as Manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;`,
        language: 'sql',
      },
      {
        title: 'Composite Primary Key Example',
        code: `-- Order items need composite key (order_id + product_id)
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2),
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- This prevents duplicate products in same order
-- Insert works fine
INSERT INTO order_items VALUES (1, 101, 2, 29.99);

-- This would fail (duplicate primary key)
-- INSERT INTO order_items VALUES (1, 101, 5, 29.99);`,
        language: 'sql',
      },
      {
        title: 'Database Normalization Example - Step by Step',
        code: `-- UNNORMALIZED: Bad design with repeating groups
-- Student: John Doe, Courses: Math, Physics, Chemistry
CREATE TABLE student_courses_bad (
    student_id INT,
    student_name VARCHAR(100),
    course1 VARCHAR(50),
    course2 VARCHAR(50),
    course3 VARCHAR(50)
    -- Problems: Fixed number of courses, lots of NULLs, hard to query
);

-- FIRST NORMAL FORM (1NF): Remove repeating groups
CREATE TABLE students_1nf (
    student_id INT,
    student_name VARCHAR(100),
    course_name VARCHAR(50),
    instructor VARCHAR(50),
    instructor_email VARCHAR(100)
    -- Problem: student_name repeats for each course
    -- Problem: instructor info repeats
);

-- SECOND NORMAL FORM (2NF): Remove partial dependencies
-- Separate into logical entities
CREATE TABLE students_2nf (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100)
);

CREATE TABLE courses_2nf (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50),
    instructor VARCHAR(50),
    instructor_email VARCHAR(100)
    -- Problem: instructor info depends on instructor, not course
);

CREATE TABLE enrollments_2nf (
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id)
);

-- THIRD NORMAL FORM (3NF): Remove transitive dependencies
CREATE TABLE students_3nf (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100)
);

CREATE TABLE instructors_3nf (
    instructor_id INT PRIMARY KEY,
    instructor_name VARCHAR(50),
    instructor_email VARCHAR(100)
);

CREATE TABLE courses_3nf (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50),
    instructor_id INT,
    FOREIGN KEY (instructor_id) REFERENCES instructors_3nf(instructor_id)
);

CREATE TABLE enrollments_3nf (
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students_3nf(student_id),
    FOREIGN KEY (course_id) REFERENCES courses_3nf(course_id)
);`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'What is a primary key?',
        options: [
          'A key that opens the database',
          'A unique identifier for each row in a table',
          'The first column in a table',
          'A password for database access',
        ],
        correctAnswer: 1,
        explanation: 'A primary key is a column or set of columns that uniquely identifies each row in a table.',
      },
      {
        question: 'What does a foreign key do?',
        options: [
          'Encrypts data in the table',
          'Creates a relationship between two tables',
          'Sorts data in ascending order',
          'Backs up the database',
        ],
        correctAnswer: 1,
        explanation: 'A foreign key creates a link between two tables by referencing the primary key of another table.',
      },
      {
        question: 'What is a junction (bridge) table used for?',
        options: [
          'Connecting to remote databases',
          'Implementing many-to-many relationships',
          'Storing backup data',
          'Logging database changes',
        ],
        correctAnswer: 1,
        explanation: 'A junction table implements many-to-many relationships by containing foreign keys to both related tables.',
      },
      {
        question: 'What does 1NF (First Normal Form) require?',
        options: [
          'Tables must have no foreign keys',
          'All columns must contain atomic (indivisible) values',
          'Tables must have at least 3 columns',
          'All tables must be connected',
        ],
        correctAnswer: 1,
        explanation: 'First Normal Form requires that each column contains atomic values and there are no repeating groups.',
      },
      {
        question: 'What is a composite primary key?',
        options: [
          'A key made of special characters',
          'A primary key using multiple columns',
          'A key that changes over time',
          'A key stored in multiple tables',
        ],
        correctAnswer: 1,
        explanation: 'A composite primary key uses two or more columns together to uniquely identify each row in a table.',
      },
      {
        question: 'In a one-to-many relationship, where does the foreign key go?',
        options: [
          'In the "one" side table',
          'In the "many" side table',
          'In both tables',
          'In a separate link table',
        ],
        correctAnswer: 1,
        explanation: 'The foreign key is placed in the "many" side table, referencing the primary key of the "one" side table.',
      },
    ],
    exercises: [
      {
        title: 'Create Related Tables',
        difficulty: 'Medium',
        problem: 'Create two tables: "departments" (dept_id, dept_name) and "employees" (emp_id, emp_name, salary, dept_id). The dept_id in employees should reference the departments table.',
        hints: [
          'Create the parent table (departments) first',
          'Use FOREIGN KEY constraint to link tables',
          'Insert data into departments before employees',
        ],
        solution: `-- Create departments table first (parent)
CREATE TABLE departments (
    dept_id INTEGER PRIMARY KEY,
    dept_name TEXT NOT NULL
);

-- Create employees table with foreign key
CREATE TABLE employees (
    emp_id INTEGER PRIMARY KEY,
    emp_name TEXT NOT NULL,
    salary DECIMAL(10, 2),
    dept_id INTEGER,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

-- Insert department data
INSERT INTO departments VALUES (1, 'Engineering');
INSERT INTO departments VALUES (2, 'Sales');
INSERT INTO departments VALUES (3, 'HR');

-- Insert employee data
INSERT INTO employees VALUES (1, 'John Doe', 75000.00, 1);
INSERT INTO employees VALUES (2, 'Jane Smith', 65000.00, 2);
INSERT INTO employees VALUES (3, 'Bob Johnson', 55000.00, 3);

-- View the relationship
SELECT e.emp_name, e.salary, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id;`,
        explanation: 'Foreign keys maintain referential integrity. You must create the parent table (departments) before the child table (employees) to establish the relationship.',
        language: 'sql',
      },
      {
        title: 'Library System Normalization (Real World Example 1)',
        difficulty: 'Hard',
        problem: 'You have an unnormalized library table storing: book_title, author_name, author_email, publisher_name, publisher_address, member_name, member_email, checkout_date. Normalize this to 3NF.',
        hints: [
          'Identify entities: Books, Authors, Publishers, Members, Checkouts',
          'Remove repeating groups (1NF)',
          'Remove partial dependencies (2NF)',
          'Remove transitive dependencies (3NF)',
        ],
        solution: `-- 3NF Library Database Design

-- Authors table
CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    author_name VARCHAR(100),
    author_email VARCHAR(100)
);

-- Publishers table
CREATE TABLE publishers (
    publisher_id INT PRIMARY KEY,
    publisher_name VARCHAR(100),
    publisher_address VARCHAR(200)
);

-- Books table
CREATE TABLE books (
    book_id INT PRIMARY KEY,
    book_title VARCHAR(200),
    author_id INT,
    publisher_id INT,
    isbn VARCHAR(13) UNIQUE,
    FOREIGN KEY (author_id) REFERENCES authors(author_id),
    FOREIGN KEY (publisher_id) REFERENCES publishers(publisher_id)
);

-- Members table
CREATE TABLE members (
    member_id INT PRIMARY KEY,
    member_name VARCHAR(100),
    member_email VARCHAR(100),
    join_date DATE
);

-- Checkouts table (tracks borrowing)
CREATE TABLE checkouts (
    checkout_id INT PRIMARY KEY,
    book_id INT,
    member_id INT,
    checkout_date DATE,
    return_date DATE,
    FOREIGN KEY (book_id) REFERENCES books(book_id),
    FOREIGN KEY (member_id) REFERENCES members(member_id)
);`,
        explanation: 'Normalized design eliminates redundancy. Author and publisher info stored once, referenced by books. Checkout tracks borrowing history without duplicating book/member data.',
        language: 'sql',
      },
      {
        title: 'E-Commerce Order System (Real World Example 2)',
        difficulty: 'Hard',
        problem: 'Design a normalized database for an e-commerce system with: customers, products, orders, and order items. Include product categories.',
        hints: [
          'Customers and Products are independent entities',
          'Orders belong to customers (one-to-many)',
          'Order items link orders and products (many-to-many)',
          'Categories classify products (one-to-many)',
        ],
        solution: `-- E-Commerce Normalized Database

-- Categories table
CREATE TABLE categories (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(50),
    description TEXT
);

-- Products table
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    category_id INT,
    price DECIMAL(10, 2),
    stock_quantity INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Customers table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    shipping_address TEXT
);

-- Orders table
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATETIME,
    total_amount DECIMAL(10, 2),
    status VARCHAR(20),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Order items (junction table for many-to-many)
CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    unit_price DECIMAL(10, 2),
    subtotal DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);`,
        explanation: 'This design prevents data duplication. Product prices at order time are stored in order_items, preserving historical data even if prices change.',
        language: 'sql',
      },
      {
        title: 'Hospital Management System (Real World Example 3)',
        difficulty: 'Hard',
        problem: 'Create a normalized database for a hospital with: patients, doctors, appointments, and medical records. Consider that doctors have specializations.',
        hints: [
          'Patients and Doctors are independent entities',
          'Appointments connect patients and doctors',
          'Medical records belong to appointments',
          'Specializations can be separate for normalization',
        ],
        solution: `-- Hospital Management Normalized Database

-- Specializations table
CREATE TABLE specializations (
    specialization_id INT PRIMARY KEY,
    specialization_name VARCHAR(50)
);

-- Doctors table
CREATE TABLE doctors (
    doctor_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    specialization_id INT,
    license_number VARCHAR(20) UNIQUE,
    phone VARCHAR(20),
    FOREIGN KEY (specialization_id) REFERENCES specializations(specialization_id)
);

-- Patients table
CREATE TABLE patients (
    patient_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE,
    blood_group VARCHAR(5),
    phone VARCHAR(20),
    address TEXT
);

-- Appointments table
CREATE TABLE appointments (
    appointment_id INT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    appointment_date DATETIME,
    status VARCHAR(20),
    reason TEXT,
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id)
);

-- Medical records table
CREATE TABLE medical_records (
    record_id INT PRIMARY KEY,
    appointment_id INT,
    diagnosis TEXT,
    prescription TEXT,
    notes TEXT,
    FOREIGN KEY (appointment_id) REFERENCES appointments(appointment_id)
);`,
        explanation: 'Separation of concerns: patient info, doctor info, and appointment details are independent. Medical records link to appointments, maintaining complete history.',
        language: 'sql',
      },
      {
        title: 'University Course Registration (Real World Example 4)',
        difficulty: 'Medium',
        problem: 'Design a normalized database for a university where students enroll in courses, courses have prerequisites, and professors teach courses.',
        hints: [
          'Students, Courses, and Professors are entities',
          'Enrollments is many-to-many (students-courses)',
          'Prerequisites is self-referencing for courses',
          'Teaching assignment links professors and courses',
        ],
        solution: `-- University System Normalized Database

-- Professors table
CREATE TABLE professors (
    professor_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department VARCHAR(50),
    email VARCHAR(100)
);

-- Courses table
CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_code VARCHAR(10) UNIQUE,
    course_name VARCHAR(100),
    credits INT,
    professor_id INT,
    FOREIGN KEY (professor_id) REFERENCES professors(professor_id)
);

-- Prerequisites (self-referencing)
CREATE TABLE course_prerequisites (
    course_id INT,
    prerequisite_course_id INT,
    PRIMARY KEY (course_id, prerequisite_course_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    FOREIGN KEY (prerequisite_course_id) REFERENCES courses(course_id)
);

-- Students table
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    enrollment_year INT
);

-- Enrollments (many-to-many)
CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    semester VARCHAR(20),
    grade VARCHAR(2),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    UNIQUE(student_id, course_id, semester)
);`,
        explanation: 'Self-referencing prerequisite table allows courses to require other courses. Unique constraint on enrollments prevents duplicate registrations per semester.',
        language: 'sql',
      },
      {
        title: 'Social Media Platform (Real World Example 5)',
        difficulty: 'Hard',
        problem: 'Design a normalized database for a social media platform where users create posts, comment on posts, and follow other users.',
        hints: [
          'Users table is central',
          'Posts belong to users (one-to-many)',
          'Comments belong to posts and users',
          'Follows is self-referencing many-to-many',
        ],
        solution: `-- Social Media Normalized Database

-- Users table
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE,
    full_name VARCHAR(100),
    bio TEXT,
    profile_picture_url VARCHAR(255),
    created_at DATETIME
);

-- Posts table
CREATE TABLE posts (
    post_id INT PRIMARY KEY,
    user_id INT,
    content TEXT,
    image_url VARCHAR(255),
    created_at DATETIME,
    likes_count INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Comments table
CREATE TABLE comments (
    comment_id INT PRIMARY KEY,
    post_id INT,
    user_id INT,
    comment_text TEXT,
    created_at DATETIME,
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Follows table (self-referencing many-to-many)
CREATE TABLE follows (
    follower_id INT,
    following_id INT,
    followed_at DATETIME,
    PRIMARY KEY (follower_id, following_id),
    FOREIGN KEY (follower_id) REFERENCES users(user_id),
    FOREIGN KEY (following_id) REFERENCES users(user_id),
    CHECK (follower_id != following_id) -- Can't follow yourself
);

-- Likes table (many-to-many: users like posts)
CREATE TABLE post_likes (
    user_id INT,
    post_id INT,
    liked_at DATETIME,
    PRIMARY KEY (user_id, post_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (post_id) REFERENCES posts(post_id)
);`,
        explanation: 'Self-referencing follows table tracks user relationships. Separate likes table maintains who liked what. This design supports features like "show posts from people I follow" efficiently.',
        language: 'sql',
      },
    ],
    playground: {
      initialData: [
        `CREATE TABLE departments (
          dept_id INTEGER PRIMARY KEY,
          dept_name TEXT NOT NULL
        )`,
        `CREATE TABLE employees (
          emp_id INTEGER PRIMARY KEY,
          emp_name TEXT NOT NULL,
          salary DECIMAL(10, 2),
          dept_id INTEGER,
          FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
        )`,
        `INSERT INTO departments VALUES (1, 'Engineering')`,
        `INSERT INTO departments VALUES (2, 'Sales')`,
        `INSERT INTO departments VALUES (3, 'HR')`,
        `INSERT INTO employees VALUES (1, 'John Doe', 75000.00, 1)`,
        `INSERT INTO employees VALUES (2, 'Jane Smith', 65000.00, 2)`,
        `INSERT INTO employees VALUES (3, 'Bob Johnson', 55000.00, 3)`,
        `INSERT INTO employees VALUES (4, 'Alice Williams', 80000.00, 1)`,
      ],
      defaultQuery: `SELECT e.emp_name, e.salary, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id;`,
    },
  },

  'basic-sql': {
    id: 'basic-sql',
    pathId: 'beginner',
    title: 'Basic SQL Commands',
    description: 'Master the fundamental SQL commands for data manipulation',
    content: {
      overview: 'SQL (Structured Query Language) is the standard language for interacting with relational databases. The basic commands include SELECT, INSERT, UPDATE, and DELETE for data manipulation.',
      keyPoints: [
        'SELECT retrieves data from tables',
        'INSERT adds new records',
        'UPDATE modifies existing records',
        'DELETE removes records',
        'WHERE clause filters results',
      ],
      useCases: [
        'Querying customer information',
        'Adding new products to inventory',
        'Updating user profiles',
        'Removing inactive accounts',
        'Filtering data based on conditions',
      ],
      bestPractices: [
        'Always use WHERE with UPDATE and DELETE',
        'Use specific column names instead of SELECT *',
        'Test queries on a small dataset first',
        'Use transactions for multiple related operations',
        'Format SQL for readability',
      ],
      doAndDont: {
        do: [
          'Use uppercase for SQL keywords',
          'Indent complex queries for readability',
          'Use aliases for better column names',
          'Add comments to complex queries',
          'Use prepared statements to prevent SQL injection',
        ],
        dont: [
          'Run UPDATE/DELETE without WHERE clause',
          'Use SELECT * in production',
          'Concatenate user input directly into queries',
          'Ignore query performance',
          'Forget to commit transactions',
        ],
      },
    },
    examples: [
      {
        title: 'SELECT Statement',
        code: `-- Select all columns
SELECT * FROM products;

-- Select specific columns
SELECT product_name, price, stock_quantity 
FROM products;

-- Select with WHERE clause
SELECT product_name, price 
FROM products 
WHERE price > 100;

-- Select with ORDER BY
SELECT product_name, price 
FROM products 
ORDER BY price DESC;`,
        language: 'sql',
      },
      {
        title: 'INSERT Statement',
        code: `-- Insert single row
INSERT INTO products (product_name, price, stock_quantity)
VALUES ('Laptop', 999.99, 50);

-- Insert multiple rows
INSERT INTO products (product_name, price, stock_quantity)
VALUES 
    ('Mouse', 29.99, 200),
    ('Keyboard', 79.99, 150),
    ('Monitor', 299.99, 75);`,
        language: 'sql',
      },
      {
        title: 'UPDATE and DELETE',
        code: `-- Update single column
UPDATE products 
SET price = 899.99 
WHERE product_name = 'Laptop';

-- Update multiple columns
UPDATE products 
SET price = 899.99, stock_quantity = 45 
WHERE product_id = 1;

-- Delete specific records
DELETE FROM products 
WHERE stock_quantity = 0;

-- CAUTION: Delete all records (no WHERE clause)
DELETE FROM products;`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'Which SQL command is used to retrieve data?',
        options: ['GET', 'RETRIEVE', 'SELECT', 'FETCH'],
        correctAnswer: 2,
        explanation: 'SELECT is the SQL command used to retrieve data from one or more tables.',
      },
      {
        question: 'What happens if you run DELETE without a WHERE clause?',
        options: [
          'Nothing happens',
          'An error occurs',
          'All records in the table are deleted',
          'Only the first record is deleted',
        ],
        correctAnswer: 2,
        explanation: 'DELETE without WHERE clause removes all records from the table, which is usually not intended.',
      },
      {
        question: 'Which clause is used to sort query results?',
        options: ['SORT BY', 'ORDER BY', 'ARRANGE BY', 'FILTER BY'],
        correctAnswer: 1,
        explanation: 'ORDER BY clause is used to sort the results in ascending (ASC) or descending (DESC) order.',
      },
      {
        question: 'What keyword limits the number of rows returned?',
        options: ['LIMIT', 'MAX', 'TOP', 'COUNT'],
        correctAnswer: 0,
        explanation: 'LIMIT (in MySQL) or TOP (in SQL Server) restricts the number of rows returned by a query.',
      },
      {
        question: 'What does INSERT INTO do?',
        options: [
          'Updates existing records',
          'Adds new records to a table',
          'Deletes records from a table',
          'Creates a new table',
        ],
        correctAnswer: 1,
        explanation: 'INSERT INTO adds new records (rows) to a database table.',
      },
      {
        question: 'Which clause is used to filter records in a SELECT?',
        options: ['FILTER', 'WHERE', 'HAVING', 'WHEN'],
        correctAnswer: 1,
        explanation: 'WHERE clause is used to filter records based on specified conditions.',
      },
    ],
    visualDiagram: `graph TD
    A[SQL Query Flow] --> B{Command Type}
    B -->|SELECT| C[Read Data]
    B -->|INSERT| D[Create Data]
    B -->|UPDATE| E[Modify Data]
    B -->|DELETE| F[Remove Data]
    C --> G[WHERE Clause]
    D --> H[VALUES Clause]
    E --> I[SET + WHERE]
    F --> J[WHERE Clause]
    G --> K[ORDER BY/LIMIT]
    K --> L[Result Set]
    I --> L
    J --> L
    H --> L`,
    exercises: [
      {
        title: 'SELECT Practice',
        difficulty: 'Easy',
        problem: 'Write a query to select all products that cost more than $50 and have at least 10 units in stock.',
        hints: ['Use WHERE clause with AND to combine multiple conditions', 'Column names are: price and stock_quantity'],
        solution: `SELECT * FROM products
WHERE price > 50 AND stock_quantity >= 10;`,
        explanation: 'This query uses the WHERE clause with AND to filter products based on two conditions: price greater than 50 and stock quantity of at least 10.',
        language: 'sql',
      },
      {
        title: 'INSERT New Record',
        difficulty: 'Easy',
        problem: 'Insert a new product called "Wireless Headphones" with price $89.99 and 25 units in stock.',
        hints: ['Use INSERT INTO with VALUES', 'Specify column names in parentheses'],
        solution: `INSERT INTO products (product_name, price, stock_quantity)
VALUES ('Wireless Headphones', 89.99, 25);`,
        explanation: 'This INSERT statement adds a new row to the products table with the specified values.',
        language: 'sql',
      },
      {
        title: 'UPDATE Records',
        difficulty: 'Medium',
        problem: 'Increase the price of all products in the "Electronics" category by 10%.',
        hints: ['Use UPDATE with SET and WHERE', 'To increase by 10%, multiply by 1.10'],
        solution: `UPDATE products
SET price = price * 1.10
WHERE category = 'Electronics';`,
        explanation: 'This UPDATE statement multiplies the current price by 1.10 (adding 10%) for all products where category is Electronics.',
        language: 'sql',
      },
      {
        title: 'ORDER BY Practice',
        difficulty: 'Easy',
        problem: 'Select product names and prices, ordered by price from highest to lowest.',
        hints: ['Use ORDER BY with DESC', 'DESC means descending order'],
        solution: `SELECT product_name, price
FROM products
ORDER BY price DESC;`,
        explanation: 'ORDER BY price DESC sorts the results by price in descending order (highest first).',
        language: 'sql',
      },
      {
        title: 'DELETE with Condition',
        difficulty: 'Medium',
        problem: 'Delete all products that have zero stock quantity.',
        hints: ['Use DELETE with WHERE clause', 'Always include WHERE to avoid deleting all records'],
        solution: `DELETE FROM products
WHERE stock_quantity = 0;`,
        explanation: 'This DELETE statement removes only products with zero stock. The WHERE clause is critical to prevent deleting all records.',
        language: 'sql',
      },
      {
        title: 'LIMIT Results',
        difficulty: 'Easy',
        problem: 'Select the top 5 most expensive products (name and price only).',
        hints: ['Use ORDER BY with DESC', 'Use LIMIT to restrict number of results'],
        solution: `SELECT product_name, price
FROM products
ORDER BY price DESC
LIMIT 5;`,
        explanation: 'Combining ORDER BY DESC with LIMIT gives us the top N records sorted by a specific column.',
        language: 'sql',
      },
      {
        title: 'COUNT and Aggregate',
        difficulty: 'Medium',
        problem: 'Count how many products are in the Electronics category.',
        hints: ['Use COUNT(*) function', 'Use WHERE to filter category'],
        solution: `SELECT COUNT(*) as total_electronics
FROM products
WHERE category = 'Electronics';`,
        explanation: 'COUNT(*) counts all rows matching the WHERE condition. Using an alias makes the result column more readable.',
        language: 'sql',
      },
      {
        title: 'Multiple Conditions with OR',
        difficulty: 'Medium',
        problem: 'Select all products that are either in the "Electronics" category OR have price less than $30.',
        hints: ['Use WHERE with OR operator', 'Parentheses can clarify complex conditions'],
        solution: `SELECT * FROM products
WHERE category = 'Electronics' OR price < 30;`,
        explanation: 'The OR operator returns records that match either condition. This is different from AND which requires both conditions to be true.',
        language: 'sql',
      },
    ],
    playground: {
      initialData: [
        `CREATE TABLE products (
          product_id INTEGER PRIMARY KEY,
          product_name TEXT NOT NULL,
          category TEXT,
          price DECIMAL(10, 2),
          stock_quantity INTEGER
        )`,
        `INSERT INTO products VALUES (1, 'Laptop', 'Electronics', 999.99, 15)`,
        `INSERT INTO products VALUES (2, 'Mouse', 'Electronics', 25.99, 50)`,
        `INSERT INTO products VALUES (3, 'Desk Chair', 'Furniture', 199.99, 8)`,
        `INSERT INTO products VALUES (4, 'Monitor', 'Electronics', 299.99, 12)`,
        `INSERT INTO products VALUES (5, 'Keyboard', 'Electronics', 75.00, 30)`,
      ],
      defaultQuery: `-- Try SELECT with WHERE
SELECT * FROM products
WHERE category = 'Electronics';`,
    },
  },

  'data-types': {
    id: 'data-types',
    pathId: 'beginner',
    title: 'SQL Data Types',
    description: 'Learn about different data types available in SQL databases',
    content: {
      overview: 'Data types define the kind of values that can be stored in a column. Choosing the right data type is crucial for data integrity, storage efficiency, and query performance.',
      keyPoints: [
        'Numeric types for numbers (INT, DECIMAL, FLOAT)',
        'String types for text (VARCHAR, TEXT, CHAR)',
        'Date and time types (DATE, DATETIME, TIMESTAMP)',
        'Boolean type for true/false values',
        'Binary types for files and images (BLOB, BINARY)',
      ],
      useCases: [
        'Storing user ages as integers',
        'Storing product prices as decimals',
        'Storing user names as varchar',
        'Storing registration dates as datetime',
        'Storing active/inactive status as boolean',
      ],
      bestPractices: [
        'Use the most appropriate data type for each column',
        'Choose VARCHAR over CHAR for variable-length strings',
        'Use DECIMAL for monetary values',
        'Use DATE/DATETIME for temporal data',
        'Specify length for VARCHAR columns',
      ],
      doAndDont: {
        do: [
          'Use INT for whole numbers',
          'Use DECIMAL for precise decimal values',
          'Use VARCHAR with appropriate length',
          'Use TIMESTAMP for automatic time tracking',
          'Use ENUM for fixed set of values',
        ],
        dont: [
          'Use VARCHAR(255) for everything',
          'Use FLOAT for monetary values',
          'Store dates as strings',
          'Use TEXT when VARCHAR is sufficient',
          'Ignore storage requirements',
        ],
      },
    },
    examples: [
      {
        title: 'Common Data Types',
        code: `CREATE TABLE employees (
    -- Numeric types
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    age TINYINT,
    salary DECIMAL(10, 2),
    rating FLOAT,
    
    -- String types
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    bio TEXT,
    department_code CHAR(3),
    
    -- Date/Time types
    hire_date DATE,
    last_login DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Boolean
    is_active BOOLEAN DEFAULT TRUE,
    
    -- Enum
    employment_type ENUM('full-time', 'part-time', 'contract')
);`,
        language: 'sql',
      },
      {
        title: 'Data Type Examples',
        code: `-- Insert with various data types
INSERT INTO employees (
    first_name, 
    last_name, 
    age, 
    salary, 
    hire_date, 
    is_active, 
    employment_type
) VALUES (
    'John',           -- VARCHAR
    'Doe',            -- VARCHAR
    30,               -- TINYINT
    75000.50,         -- DECIMAL
    '2023-01-15',     -- DATE
    TRUE,             -- BOOLEAN
    'full-time'       -- ENUM
);`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'Which data type should be used for storing monetary values?',
        options: ['FLOAT', 'INT', 'DECIMAL', 'VARCHAR'],
        correctAnswer: 2,
        explanation: 'DECIMAL should be used for monetary values because it provides exact precision, unlike FLOAT which can have rounding errors.',
      },
      {
        question: 'What is the difference between CHAR and VARCHAR?',
        options: [
          'CHAR is for numbers, VARCHAR is for text',
          'CHAR is fixed-length, VARCHAR is variable-length',
          'CHAR is faster, VARCHAR is slower',
          'There is no difference',
        ],
        correctAnswer: 1,
        explanation: 'CHAR stores fixed-length strings (padding with spaces), while VARCHAR stores variable-length strings (using only needed space).',
      },
      {
        question: 'Which data type is best for storing a date of birth?',
        options: ['VARCHAR', 'INT', 'DATE', 'DATETIME'],
        correctAnswer: 2,
        explanation: 'DATE is the appropriate type for storing dates without time components, like date of birth.',
      },
      {
        question: 'What is the purpose of AUTO_INCREMENT?',
        options: [
          'Automatically increases column width',
          'Generates unique sequential numbers',
          'Increases query speed',
          'Automatically updates timestamps',
        ],
        correctAnswer: 1,
        explanation: 'AUTO_INCREMENT automatically generates unique sequential numbers for a column, commonly used for primary keys.',
      },
      {
        question: 'Which type stores true/false values?',
        options: ['BIT', 'BOOLEAN', 'BINARY', 'Both BIT and BOOLEAN'],
        correctAnswer: 3,
        explanation: 'Both BIT and BOOLEAN can store true/false values. BOOLEAN is often an alias for TINYINT(1) in MySQL.',
      },
      {
        question: 'When should you use TEXT instead of VARCHAR?',
        options: [
          'For small strings under 100 characters',
          'For large text content like blog posts',
          'For fixed-length codes',
          'For email addresses',
        ],
        correctAnswer: 1,
        explanation: 'TEXT should be used for large variable-length text content that may exceed VARCHAR limits (65,535 bytes).',
      },
    ],
    visualDiagram: `graph TD
    A[SQL Data Types] --> B[Numeric]
    A --> C[String]
    A --> D[Date/Time]
    A --> E[Other]
    B --> B1[INT - Whole Numbers]
    B --> B2[DECIMAL - Exact Numbers]
    B --> B3[FLOAT - Approximate Numbers]
    C --> C1[VARCHAR - Variable Length]
    C --> C2[CHAR - Fixed Length]
    C --> C3[TEXT - Large Text]
    D --> D1[DATE - YYYY-MM-DD]
    D --> D2[DATETIME - Date + Time]
    D --> D3[TIMESTAMP - Unix Time]
    E --> E1[BOOLEAN - True/False]
    E --> E2[BLOB - Binary Data]`,
    exercises: [
      {
        title: 'Choose Correct Data Types',
        difficulty: 'Easy',
        problem: 'Create a "books" table with: book_id (auto-increment), title (max 200 chars), author (max 100 chars), isbn (exactly 13 chars), price (with cents), published_date, pages (whole number), is_available (yes/no).',
        hints: [
          'Use INTEGER for whole numbers',
          'Use DECIMAL for prices to avoid rounding errors',
          'Use CHAR for fixed-length strings like ISBN',
          'Use BOOLEAN for yes/no values',
        ],
        solution: `CREATE TABLE books (
    book_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(100) NOT NULL,
    isbn CHAR(13) UNIQUE,
    price DECIMAL(10, 2),
    published_date DATE,
    pages INTEGER,
    is_available BOOLEAN DEFAULT TRUE
);`,
        explanation: 'Each data type is chosen for efficiency and accuracy: VARCHAR for variable-length text, CHAR for fixed ISBN, DECIMAL for exact price representation, and BOOLEAN for true/false availability.',
        language: 'sql',
      },
      {
        title: 'Data Type Conversion',
        difficulty: 'Medium',
        problem: 'Given a table with dates stored as text (e.g., "2024-01-15"), write a query to convert them to actual DATE type and find all records from 2024.',
        hints: [
          'Use CAST() or DATE() function to convert text to date',
          'Extract year using STRFTIME() or YEAR() function',
        ],
        solution: `-- Method 1: Using DATE() function
SELECT *
FROM events
WHERE DATE(event_date_text) >= '2024-01-01'
  AND DATE(event_date_text) < '2025-01-01';

-- Method 2: Using STRFTIME for year extraction
SELECT *
FROM events
WHERE STRFTIME('%Y', event_date_text) = '2024';`,
        explanation: 'Converting text to proper date types allows for accurate date comparisons and calculations. STRFTIME is SQLite-specific, while DATE() is more universal.',
        language: 'sql',
      },
    ],
    playground: {
      initialData: [
        `CREATE TABLE demo_types (
          id INTEGER PRIMARY KEY,
          int_col INTEGER,
          decimal_col DECIMAL(10, 2),
          varchar_col VARCHAR(50),
          char_col CHAR(5),
          date_col DATE,
          bool_col BOOLEAN
        )`,
        `INSERT INTO demo_types VALUES (1, 42, 99.99, 'Variable length text', 'FIXED', '2024-01-15', 1)`,
        `INSERT INTO demo_types VALUES (2, 100, 123.45, 'Short', 'ABC', '2024-06-20', 0)`,
      ],
      defaultQuery: `-- See how different data types store values
SELECT * FROM demo_types;

-- Check actual storage
SELECT 
  typeof(int_col) as int_type,
  typeof(decimal_col) as decimal_type,
  typeof(varchar_col) as varchar_type
FROM demo_types LIMIT 1;`,
    },
  },

  'constraints': {
    id: 'constraints',
    pathId: 'beginner',
    title: 'Database Constraints',
    description: 'Understand how to enforce data integrity with constraints',
    content: {
      overview: 'Constraints are rules enforced on data columns to maintain data integrity and accuracy. They prevent invalid data from being entered into the database.',
      keyPoints: [
        'PRIMARY KEY ensures unique identification',
        'FOREIGN KEY maintains referential integrity',
        'UNIQUE prevents duplicate values',
        'NOT NULL requires a value',
        'CHECK validates data against conditions',
        'DEFAULT provides default values',
      ],
      useCases: [
        'Ensuring unique email addresses',
        'Maintaining relationships between tables',
        'Preventing null values in critical columns',
        'Validating age ranges',
        'Setting default status values',
      ],
      bestPractices: [
        'Always define a primary key',
        'Use NOT NULL for required fields',
        'Implement foreign keys for relationships',
        'Use CHECK constraints for data validation',
        'Name constraints explicitly',
      ],
      doAndDont: {
        do: [
          'Use descriptive constraint names',
          'Add constraints during table creation',
          'Document constraint purposes',
          'Use CHECK for business rule validation',
          'Consider cascading deletes carefully',
        ],
        dont: [
          'Over-constrain tables',
          'Ignore constraint violations',
          'Use CHECK for complex logic',
          'Forget to add indexes on foreign keys',
          'Create circular foreign key dependencies',
        ],
      },
    },
    examples: [
      {
        title: 'Various Constraints',
        code: `CREATE TABLE products (
    -- PRIMARY KEY constraint
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    
    -- UNIQUE constraint
    product_code VARCHAR(20) UNIQUE,
    
    -- NOT NULL constraint
    product_name VARCHAR(100) NOT NULL,
    
    -- CHECK constraint
    price DECIMAL(10, 2) CHECK (price > 0),
    stock_quantity INT CHECK (stock_quantity >= 0),
    
    -- DEFAULT constraint
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Multiple column constraint
    CONSTRAINT unique_name_category UNIQUE (product_name, category_id)
);`,
        language: 'sql',
      },
      {
        title: 'Foreign Key Constraints',
        code: `CREATE TABLE order_items (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    price DECIMAL(10, 2) NOT NULL,
    
    -- Foreign key with ON DELETE CASCADE
    FOREIGN KEY (order_id) 
        REFERENCES orders(order_id) 
        ON DELETE CASCADE,
    
    -- Foreign key with ON UPDATE CASCADE
    FOREIGN KEY (product_id) 
        REFERENCES products(product_id) 
        ON UPDATE CASCADE
);`,
        language: 'sql',
      },
      {
        title: 'Adding Constraints to Existing Tables',
        code: `-- Add UNIQUE constraint
ALTER TABLE users 
ADD CONSTRAINT unique_email UNIQUE (email);

-- Add CHECK constraint
ALTER TABLE employees 
ADD CONSTRAINT check_age CHECK (age >= 18 AND age <= 65);

-- Add FOREIGN KEY constraint
ALTER TABLE orders 
ADD CONSTRAINT fk_customer 
FOREIGN KEY (customer_id) REFERENCES customers(customer_id);

-- Drop constraint
ALTER TABLE users 
DROP CONSTRAINT unique_email;`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'What does the NOT NULL constraint do?',
        options: [
          'Sets a default value',
          'Ensures a column must have a value',
          'Creates an index',
          'Validates data format',
        ],
        correctAnswer: 1,
        explanation: 'NOT NULL constraint ensures that a column cannot have NULL values; it must always contain data.',
      },
      {
        question: 'What happens with ON DELETE CASCADE?',
        options: [
          'Prevents deletion',
          'Deletes related records in child table',
          'Sets foreign key to NULL',
          'Creates a backup',
        ],
        correctAnswer: 1,
        explanation: 'ON DELETE CASCADE automatically deletes all related records in the child table when a parent record is deleted.',
      },
      {
        question: 'What is the purpose of the CHECK constraint?',
        options: [
          'To check for duplicate values',
          'To validate data against a condition',
          'To check database connection',
          'To check file permissions',
        ],
        correctAnswer: 1,
        explanation: 'CHECK constraint validates data against a specified condition before allowing insert or update.',
      },
      {
        question: 'Can a table have multiple UNIQUE constraints?',
        options: [
          'No, only one per table',
          'Yes, multiple columns can have UNIQUE',
          'Only on numeric columns',
          'Only on the primary key',
        ],
        correctAnswer: 1,
        explanation: 'A table can have multiple UNIQUE constraints on different columns or column combinations.',
      },
      {
        question: 'What does ON DELETE SET NULL do?',
        options: [
          'Deletes the parent record',
          'Sets the foreign key to NULL in child records',
          'Prevents deletion',
          'Deletes child records',
        ],
        correctAnswer: 1,
        explanation: 'ON DELETE SET NULL sets the foreign key column to NULL in child records when the referenced parent record is deleted.',
      },
      {
        question: 'Which constraint uniquely identifies each record?',
        options: ['UNIQUE', 'NOT NULL', 'PRIMARY KEY', 'FOREIGN KEY'],
        correctAnswer: 2,
        explanation: 'PRIMARY KEY constraint uniquely identifies each record and is a combination of UNIQUE and NOT NULL.',
      },
    ],
    visualDiagram: `graph TD
    A[Database Constraints] --> B[PRIMARY KEY]
    A --> C[FOREIGN KEY]
    A --> D[UNIQUE]
    A --> E[NOT NULL]
    A --> F[CHECK]
    A --> G[DEFAULT]
    
    B --> B1[Unique + Not Null<br/>One per table]
    C --> C1[Links Tables<br/>Referential Integrity]
    D --> D1[Prevents Duplicates<br/>Can be NULL]
    E --> E1[Must Have Value<br/>No NULL allowed]
    F --> F1[Custom Validation<br/>Business Rules]
    G --> G1[Auto-fill Value<br/>When NULL]
    
    C --> H{ON DELETE}
    H --> H1[CASCADE: Delete children]
    H --> H2[SET NULL: Nullify FK]
    H --> H3[RESTRICT: Prevent delete]`,
    exercises: [
      {
        title: 'Create Table with Constraints',
        difficulty: 'Medium',
        problem: 'Create a "users" table with: user_id (primary key), email (unique, required), username (unique, required, 3-20 chars), age (must be 13+), status (default "active"), created_at (default current time).',
        hints: [
          'Use PRIMARY KEY for user_id',
          'Use UNIQUE and NOT NULL for email and username',
          'Use CHECK constraint for age validation',
          'Use DEFAULT for status and created_at',
        ],
        solution: `CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(20) UNIQUE NOT NULL 
        CHECK (LENGTH(username) BETWEEN 3 AND 20),
    age INTEGER CHECK (age >= 13),
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
        explanation: 'This table demonstrates multiple constraints: PRIMARY KEY for unique identification, UNIQUE for email/username uniqueness, NOT NULL for required fields, CHECK for data validation, and DEFAULT for auto-populated values.',
        language: 'sql',
      },
      {
        title: 'Foreign Key with Cascade',
        difficulty: 'Hard',
        problem: 'Create two tables: "authors" (author_id, name) and "books" (book_id, title, author_id). When an author is deleted, all their books should also be deleted.',
        hints: [
          'Create authors table first',
          'Use FOREIGN KEY with ON DELETE CASCADE',
          'author_id in books references authors table',
        ],
        solution: `CREATE TABLE authors (
    author_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE books (
    book_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(200) NOT NULL,
    author_id INTEGER NOT NULL,
    FOREIGN KEY (author_id) 
        REFERENCES authors(author_id)
        ON DELETE CASCADE
);

-- Test the cascade
INSERT INTO authors (name) VALUES ('J.K. Rowling');
INSERT INTO books (title, author_id) 
VALUES ('Harry Potter', 1);

-- This will delete both the author and their books
DELETE FROM authors WHERE author_id = 1;`,
        explanation: 'ON DELETE CASCADE ensures referential integrity by automatically removing all books when their author is deleted, preventing orphaned records.',
        language: 'sql',
      },
      {
        title: 'Test Constraint Violations',
        difficulty: 'Easy',
        problem: 'Given a table with age CHECK constraint (age >= 18), write statements that will: (1) succeed, (2) fail due to constraint violation.',
        hints: [
          'Valid age should be 18 or higher',
          'Age less than 18 will violate the constraint',
        ],
        solution: `-- This will SUCCEED
INSERT INTO employees (name, age) 
VALUES ('John Doe', 25);

-- This will FAIL (age < 18)
INSERT INTO employees (name, age) 
VALUES ('Jane Smith', 16);
-- Error: CHECK constraint failed: age >= 18

-- This will also SUCCEED (exactly 18)
INSERT INTO employees (name, age) 
VALUES ('Bob Johnson', 18);`,
        explanation: 'CHECK constraints validate data before insertion. Any value that violates the condition (age < 18) will be rejected with an error.',
        language: 'sql',
      },
    ],
    playground: {
      initialData: [
        `CREATE TABLE users (
          user_id INTEGER PRIMARY KEY AUTOINCREMENT,
          email VARCHAR(255) UNIQUE NOT NULL,
          username VARCHAR(20) UNIQUE NOT NULL,
          age INTEGER CHECK (age >= 13),
          status VARCHAR(20) DEFAULT 'active'
        )`,
        `INSERT INTO users (email, username, age) VALUES ('john@example.com', 'john_doe', 25)`,
        `INSERT INTO users (email, username, age) VALUES ('jane@example.com', 'jane_smith', 30)`,
      ],
      defaultQuery: `-- Try inserting valid data
INSERT INTO users (email, username, age) 
VALUES ('bob@example.com', 'bob_jones', 20);

-- Try inserting duplicate email (will fail)
-- INSERT INTO users (email, username, age) 
-- VALUES ('john@example.com', 'different_user', 22);

SELECT * FROM users;`,
    },
  },

  'indexeddb-basics': {
    id: 'indexeddb-basics',
    pathId: 'beginner',
    title: 'Client-Side Databases with IndexedDB',
    description: 'Learn how to use IndexedDB and Dexie.js for browser-based data storage',
    content: {
      overview: 'IndexedDB is a low-level API for client-side storage of significant amounts of structured data in the browser. Dexie.js is a wrapper library that makes working with IndexedDB much easier with a simple, promise-based API.',
      keyPoints: [
        'IndexedDB stores data locally in the browser',
        'Supports large amounts of structured data',
        'Works asynchronously with promises',
        'Dexie.js simplifies IndexedDB operations',
        'Perfect for offline-first applications',
        'Stores JavaScript objects directly',
        'Supports indexes for fast querying',
        'Data persists across browser sessions',
      ],
      useCases: [
        'Progressive Web Apps (PWAs) with offline support',
        'Caching API responses for faster load times',
        'Storing user preferences and settings locally',
        'Draft saving in email or document editors',
        'Shopping cart persistence',
        'Offline-capable mobile apps',
        'Browser-based games with save states',
      ],
      bestPractices: [
        'Use Dexie.js for easier IndexedDB management',
        'Define clear database schemas',
        'Index fields that you query frequently',
        'Handle versioning for schema changes',
        'Use transactions for multiple operations',
        'Implement error handling for all operations',
        'Clean up old data periodically',
        'Use appropriate data types',
      ],
      doAndDont: {
        do: [
          'Use auto-incremented IDs for primary keys',
          'Create indexes on fields you filter by',
          'Handle promise rejections',
          'Version your database schema',
          'Test with real-world data volumes',
          'Use compound indexes when needed',
          'Implement data migration strategies',
          'Clear unused data to save space',
        ],
        dont: [
          'Store sensitive data without encryption',
          'Assume IndexedDB works in all browsers',
          'Create too many indexes (impacts performance)',
          'Store huge objects without consideration',
          'Forget to handle quota exceeded errors',
          'Use IndexedDB for simple key-value storage (use localStorage)',
          'Block the main thread with large operations',
          'Ignore database versioning',
        ],
      },
    },
    examples: [
      {
        title: 'Creating a Dexie Database',
        code: `import Dexie from 'dexie';

// Create database instance
const db = new Dexie('MyDatabase');

// Define schema (version 1)
db.version(1).stores({
  users: '++id, name, email, age',
  // ++id: auto-increment primary key
  // name, email, age: indexed fields
  
  products: '++id, name, price, category',
  orders: '++id, userId, productId, quantity, orderDate'
});

// Open the database
await db.open();
console.log('Database opened successfully');`,
        language: 'javascript',
      },
      {
        title: 'Adding Data (CRUD - Create)',
        code: `// Add single record
await db.users.add({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
});

// Add multiple records
await db.users.bulkAdd([
  { name: 'Jane Smith', email: 'jane@example.com', age: 25 },
  { name: 'Bob Johnson', email: 'bob@example.com', age: 35 }
]);

// Add and get the generated ID
const userId = await db.users.add({
  name: 'Alice Williams',
  email: 'alice@example.com',
  age: 28
});
console.log('New user ID:', userId);`,
        language: 'javascript',
      },
      {
        title: 'Querying Data (CRUD - Read)',
        code: `// Get all users
const allUsers = await db.users.toArray();

// Get by primary key
const user = await db.users.get(1);

// Filter with where clause
const youngUsers = await db.users
  .where('age')
  .below(30)
  .toArray();

// Multiple conditions
const specificUsers = await db.users
  .where('age')
  .between(25, 35)
  .and(user => user.email.includes('@example.com'))
  .toArray();

// Count records
const totalUsers = await db.users.count();

// Check if exists
const exists = await db.users
  .where('email')
  .equals('john@example.com')
  .count() > 0;`,
        language: 'javascript',
      },
      {
        title: 'Updating Data (CRUD - Update)',
        code: `// Update specific fields by ID
await db.users.update(1, {
  age: 31,
  email: 'newemail@example.com'
});

// Update using where clause
await db.users
  .where('age')
  .below(25)
  .modify({ status: 'young' });

// Update with function
await db.products
  .where('category')
  .equals('Electronics')
  .modify(product => {
    product.price = product.price * 0.9; // 10% discount
  });

// Put (add or update)
await db.users.put({
  id: 1,
  name: 'John Updated',
  email: 'john@example.com',
  age: 31
});`,
        language: 'javascript',
      },
      {
        title: 'Deleting Data (CRUD - Delete)',
        code: `// Delete by primary key
await db.users.delete(1);

// Delete with where clause
await db.users
  .where('age')
  .above(60)
  .delete();

// Delete all records
await db.users.clear();

// Delete multiple by IDs
await db.users.bulkDelete([1, 2, 3]);

// Conditional delete
const deletedCount = await db.products
  .where('stock')
  .equals(0)
  .delete();
console.log(\`Deleted \${deletedCount} out-of-stock products\`);`,
        language: 'javascript',
      },
      {
        title: 'Advanced Queries and Relationships',
        code: `// Simulate JOIN - Get orders with user details
const ordersWithUsers = await db.orders.toArray();
const enrichedOrders = await Promise.all(
  ordersWithUsers.map(async (order) => {
    const user = await db.users.get(order.userId);
    const product = await db.products.get(order.productId);
    return {
      ...order,
      userName: user?.name,
      userEmail: user?.email,
      productName: product?.name,
      productPrice: product?.price
    };
  })
);

// Aggregate - Calculate total orders per user
const userOrders = {};
await db.orders.each(order => {
  userOrders[order.userId] = (userOrders[order.userId] || 0) + 1;
});

// Complex filtering with and/or
const results = await db.products
  .where('price')
  .below(100)
  .and(p => p.category === 'Electronics' || p.category === 'Accessories')
  .toArray();`,
        language: 'javascript',
      },
    ],
    quiz: [
      {
        question: 'What is the main advantage of using Dexie.js over raw IndexedDB?',
        options: [
          'It makes IndexedDB faster',
          'It provides a simpler, promise-based API',
          'It increases storage capacity',
          'It works on older browsers',
        ],
        correctAnswer: 1,
        explanation: 'Dexie.js wraps IndexedDB with a much simpler, promise-based API, making it easier to work with while maintaining the same underlying performance.',
      },
      {
        question: 'What does the ++ prefix mean in a Dexie schema like "++id"?',
        options: [
          'The field is required',
          'The field is indexed',
          'The field is an auto-incremented primary key',
          'The field is encrypted',
        ],
        correctAnswer: 2,
        explanation: 'The ++ prefix indicates an auto-incremented primary key. Dexie will automatically generate sequential IDs for new records.',
      },
      {
        question: 'Which method is used to retrieve all records from a Dexie table?',
        options: [
          'getAll()',
          'toArray()',
          'fetchAll()',
          'select()',
        ],
        correctAnswer: 1,
        explanation: 'The toArray() method retrieves all records from a table and returns them as a JavaScript array.',
      },
      {
        question: 'Where is IndexedDB data stored?',
        options: [
          'On a remote server',
          'In the browser (client-side)',
          'In a cloud database',
          'In a text file',
        ],
        correctAnswer: 1,
        explanation: 'IndexedDB stores data locally in the browser, making it perfect for offline-first applications.',
      },
      {
        question: 'What method adds or updates a record in Dexie?',
        options: [
          'add()',
          'put()',
          'update()',
          'insert()',
        ],
        correctAnswer: 1,
        explanation: 'The put() method adds a new record or updates an existing one if a record with the same primary key exists.',
      },
      {
        question: 'What is db.version(1).stores() used for?',
        options: [
          'Opening database connections',
          'Defining the database schema',
          'Backing up data',
          'Deleting databases',
        ],
        correctAnswer: 1,
        explanation: 'db.version().stores() defines the database schema, including tables and their indexes for that version.',
      },
    ],
    exercises: [
      {
        title: 'Basic Data Operations',
        difficulty: 'Easy',
        problem: 'Add a new user named "Charlie Brown" with email "charlie@example.com" and age 27 to the users table. Then retrieve all users.',
        hints: [
          'Use db.users.add() to add a record',
          'Use db.users.toArray() to get all records',
          'Return the result for display',
        ],
        solution: `// Add new user
await db.users.add({
  name: 'Charlie Brown',
  email: 'charlie@example.com',
  age: 27
});

// Return all users
return await db.users.toArray();`,
        explanation: 'This demonstrates basic CRUD operations. The add() method inserts a new record and returns its auto-generated ID. toArray() fetches all records.',
        language: 'javascript',
      },
      {
        title: 'Filtering with Where Clause',
        difficulty: 'Easy',
        problem: 'Find all users who are older than 25 years.',
        hints: [
          'Use db.users.where() to create a query',
          'Use .above() method for greater than comparison',
          'Use .toArray() to get results',
        ],
        solution: `// Query users above age 25
return await db.users
  .where('age')
  .above(25)
  .toArray();`,
        explanation: 'The where() method starts a query chain. above() filters for values greater than the specified number. This is equivalent to SQL\'s WHERE age > 25.',
        language: 'javascript',
      },
      {
        title: 'Update Record',
        difficulty: 'Medium',
        problem: 'Update the user with ID 1 to change their age to 35 and email to "updated@example.com". Then return the updated user.',
        hints: [
          'Use db.users.update(id, changes) to update',
          'Use db.users.get(id) to retrieve the updated record',
        ],
        solution: `// Update user
await db.users.update(1, {
  age: 35,
  email: 'updated@example.com'
});

// Return updated user
return await db.users.get(1);`,
        explanation: 'The update() method modifies specific fields of a record without affecting other fields. It\'s efficient for partial updates.',
        language: 'javascript',
      },
      {
        title: 'Count and Aggregate',
        difficulty: 'Medium',
        problem: 'Count how many products are in the "Electronics" category.',
        hints: [
          'Use where() to filter by category',
          'Use count() to get the number of records',
        ],
        solution: `// Count electronics products
const count = await db.products
  .where('category')
  .equals('Electronics')
  .count();

return \`Found \${count} Electronics products\`;`,
        explanation: 'The count() method returns the number of records matching the query without loading all data into memory, making it efficient.',
        language: 'javascript',
      },
      {
        title: 'Bulk Operations',
        difficulty: 'Medium',
        problem: 'Add three new products: {name: "Keyboard", price: 75, category: "Electronics"}, {name: "Monitor", price: 299, category: "Electronics"}, {name: "Notebook", price: 15, category: "Stationery"}. Return all products.',
        hints: [
          'Use bulkAdd() for multiple inserts',
          'Pass an array of objects',
          'Use toArray() to return all products',
        ],
        solution: `// Add multiple products at once
await db.products.bulkAdd([
  { name: 'Keyboard', price: 75, category: 'Electronics' },
  { name: 'Monitor', price: 299, category: 'Electronics' },
  { name: 'Notebook', price: 15, category: 'Stationery' }
]);

// Return all products
return await db.products.toArray();`,
        explanation: 'bulkAdd() is more efficient than multiple add() calls. It performs all insertions in a single transaction.',
        language: 'javascript',
      },
      {
        title: 'Complex Filtering',
        difficulty: 'Hard',
        problem: 'Find all products with price between 20 and 100 (inclusive) that are in the Electronics category.',
        hints: [
          'Use between() for price range',
          'Use and() to add additional conditions',
          'Chain the conditions together',
        ],
        solution: `// Query with multiple conditions
return await db.products
  .where('price')
  .between(20, 100, true, true) // true = inclusive
  .and(product => product.category === 'Electronics')
  .toArray();`,
        explanation: 'The between() method filters by range. The and() method adds additional filter logic. This demonstrates combining indexed and non-indexed queries.',
        language: 'javascript',
      },
      {
        title: 'Simulating JOIN Operations',
        difficulty: 'Hard',
        problem: 'Get all orders and include the user name and product name for each order.',
        hints: [
          'First get all orders',
          'For each order, fetch related user and product',
          'Use Promise.all() for parallel fetching',
          'Combine the data into a single object',
        ],
        solution: `// Get all orders
const orders = await db.orders.toArray();

// Enrich with user and product data
const enrichedOrders = await Promise.all(
  orders.map(async (order) => {
    const user = await db.users.get(order.userId);
    const product = await db.products.get(order.productId);
    
    return {
      orderId: order.id,
      userName: user?.name || 'Unknown',
      productName: product?.name || 'Unknown',
      quantity: order.quantity,
      orderDate: order.orderDate
    };
  })
);

return enrichedOrders;`,
        explanation: 'IndexedDB doesn\'t have native JOIN support. We simulate it by fetching related records separately and combining them. Promise.all() ensures parallel execution for better performance.',
        language: 'javascript',
      },
      {
        title: 'Batch Update with Modify',
        difficulty: 'Hard',
        problem: 'Apply a 10% discount to all Electronics products. Update their prices and return the updated products.',
        hints: [
          'Use where() to filter Electronics',
          'Use modify() with a function to update prices',
          'Calculate new price as price * 0.9',
        ],
        solution: `// Apply 10% discount to Electronics
await db.products
  .where('category')
  .equals('Electronics')
  .modify(product => {
    product.price = Math.round(product.price * 0.9 * 100) / 100;
  });

// Return updated Electronics products
return await db.products
  .where('category')
  .equals('Electronics')
  .toArray();`,
        explanation: 'The modify() method is efficient for bulk updates. It updates records in-place without loading them all into memory first. Math.round is used to avoid floating-point precision issues.',
        language: 'javascript',
      },
    ],
    playground: {
      type: 'indexeddb',
      dbSchema: {
        users: '++id, name, email, age',
        products: '++id, name, price, category',
        orders: '++id, userId, productId, quantity, orderDate'
      },
      defaultCode: `// Example: Query all users
return await db.users.toArray();

// Try these queries:
// - Find users above age 30
// - Add a new product
// - Update a user's email
// - Count products by category`
    },
  },
};
