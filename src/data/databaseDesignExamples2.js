// Real World Database Design Examples - Part 2

export const databaseDesignExamples2 = [
  {
    id: 'blog-cms',
    title: 'Blog/CMS Platform',
    description: 'Content management with posts, categories, tags, and SEO',
    icon: '📝',
    difficulty: 'Beginner',
    estimatedTime: '1-2 hours',
    technologies: ['PostgreSQL', 'MongoDB'],
    
    overview: `A blog/CMS needs to handle content creation, categorization, versioning, and SEO. Choose SQL for structured content or MongoDB for flexible schemas.`,
    
    entities: [
      'Users', 'Posts', 'Categories', 'Tags', 'Comments', 'Media', 'Revisions'
    ],
    
    schema: `
-- Authors/Users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    display_name VARCHAR(100),
    bio TEXT,
    avatar_url VARCHAR(500),
    role VARCHAR(20) DEFAULT 'author', -- admin, editor, author
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories (hierarchical)
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    parent_id INT REFERENCES categories(id),
    description TEXT
);

-- Posts
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    author_id INT REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image VARCHAR(500),
    category_id INT REFERENCES categories(id),
    status VARCHAR(20) DEFAULT 'draft', -- draft, published, archived
    published_at TIMESTAMP,
    seo_title VARCHAR(60),
    seo_description VARCHAR(160),
    view_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tags (many-to-many)
CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    slug VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE post_tags (
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    tag_id INT REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (post_id, tag_id)
);

-- Comments (nested)
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id),
    parent_id INT REFERENCES comments(id), -- For replies
    author_name VARCHAR(100), -- For guest comments
    author_email VARCHAR(255),
    content TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Post Revisions (version history)
CREATE TABLE post_revisions (
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    title VARCHAR(255),
    content TEXT,
    revised_by INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Media Library
CREATE TABLE media (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    filename VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_type VARCHAR(50),
    file_size INT,
    alt_text VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_posts_status ON posts(status, published_at DESC);
CREATE INDEX idx_posts_author ON posts(author_id);
CREATE INDEX idx_comments_post ON comments(post_id, is_approved);
`,
    
    keyQueries: [
      {
        name: 'Get published posts with author and tags',
        query: `SELECT p.*, u.display_name as author_name,
    array_agg(t.name) as tags
FROM posts p
JOIN users u ON p.author_id = u.id
LEFT JOIN post_tags pt ON p.id = pt.post_id
LEFT JOIN tags t ON pt.tag_id = t.id
WHERE p.status = 'published'
GROUP BY p.id, u.display_name
ORDER BY p.published_at DESC;`
      },
      {
        name: 'Get nested comments',
        query: `WITH RECURSIVE comment_tree AS (
    SELECT id, content, parent_id, 0 as depth
    FROM comments WHERE post_id = $1 AND parent_id IS NULL
    UNION ALL
    SELECT c.id, c.content, c.parent_id, ct.depth + 1
    FROM comments c
    JOIN comment_tree ct ON c.parent_id = ct.id
)
SELECT * FROM comment_tree;`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Not storing revisions/history',
        why: 'Cannot recover from accidental edits or track changes.',
        solution: 'Create post_revisions table, save on each edit.'
      },
      {
        mistake: 'Storing tags as comma-separated string',
        why: 'Cannot query efficiently or maintain uniqueness.',
        solution: 'Use separate tags table with junction table.'
      },
      {
        mistake: 'No slug uniqueness validation',
        why: 'Duplicate URLs cause SEO and routing issues.',
        solution: 'UNIQUE constraint on slug, auto-generate if conflict.'
      }
    ],
    
    scalingTips: [
      'Cache rendered posts in Redis',
      'Use CDN for media files',
      'Full-text search with Elasticsearch',
      'Separate read replicas for high traffic'
    ]
  },
  
  {
    id: 'inventory-management',
    title: 'Inventory Management System',
    description: 'Track products, stock levels, warehouses, and movements',
    icon: '📦',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 hours',
    technologies: ['PostgreSQL'],
    
    overview: `Inventory systems need accurate stock tracking, multi-warehouse support, and movement history for auditing.`,
    
    entities: [
      'Products', 'Categories', 'Warehouses', 'Stock', 'Stock Movements', 
      'Suppliers', 'Purchase Orders'
    ],
    
    schema: `
-- Products
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    sku VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    category_id INT REFERENCES categories(id),
    unit_of_measure VARCHAR(20) DEFAULT 'piece',
    min_stock_level INT DEFAULT 0, -- Reorder point
    cost_price DECIMAL(10,2),
    sell_price DECIMAL(10,2),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    parent_id INT REFERENCES categories(id)
);

-- Warehouses/Locations
CREATE TABLE warehouses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(20) UNIQUE NOT NULL,
    address TEXT,
    is_active BOOLEAN DEFAULT true
);

-- Current Stock (denormalized for fast reads)
CREATE TABLE stock (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id),
    warehouse_id INT REFERENCES warehouses(id),
    quantity INT DEFAULT 0,
    reserved INT DEFAULT 0, -- Allocated to orders
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(product_id, warehouse_id)
);

-- Stock Movements (audit trail)
CREATE TABLE stock_movements (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id),
    warehouse_id INT REFERENCES warehouses(id),
    movement_type VARCHAR(30) NOT NULL, -- in, out, transfer, adjustment
    quantity INT NOT NULL, -- Positive or negative
    reference_type VARCHAR(30), -- purchase_order, sale, transfer
    reference_id INT,
    notes TEXT,
    created_by INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Suppliers
CREATE TABLE suppliers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(20) UNIQUE,
    contact_name VARCHAR(100),
    email VARCHAR(255),
    phone VARCHAR(20),
    address TEXT
);

-- Purchase Orders
CREATE TABLE purchase_orders (
    id SERIAL PRIMARY KEY,
    supplier_id INT REFERENCES suppliers(id),
    order_number VARCHAR(50) UNIQUE NOT NULL,
    status VARCHAR(30) DEFAULT 'draft',
    order_date DATE,
    expected_date DATE,
    total_amount DECIMAL(12,2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE purchase_order_items (
    id SERIAL PRIMARY KEY,
    po_id INT REFERENCES purchase_orders(id) ON DELETE CASCADE,
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    received_quantity INT DEFAULT 0
);

-- Trigger to update stock on movement
CREATE OR REPLACE FUNCTION update_stock_on_movement()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO stock (product_id, warehouse_id, quantity)
    VALUES (NEW.product_id, NEW.warehouse_id, NEW.quantity)
    ON CONFLICT (product_id, warehouse_id)
    DO UPDATE SET 
        quantity = stock.quantity + NEW.quantity,
        updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_stock_movement
AFTER INSERT ON stock_movements
FOR EACH ROW EXECUTE FUNCTION update_stock_on_movement();
`,
    
    keyQueries: [
      {
        name: 'Get low stock products',
        query: `SELECT p.*, s.quantity, s.reserved,
    (s.quantity - s.reserved) as available
FROM products p
JOIN stock s ON p.id = s.product_id
WHERE p.is_active = true
  AND (s.quantity - s.reserved) <= p.min_stock_level;`
      },
      {
        name: 'Stock movement history',
        query: `SELECT sm.*, p.name as product_name, w.name as warehouse_name
FROM stock_movements sm
JOIN products p ON sm.product_id = p.id
JOIN warehouses w ON sm.warehouse_id = w.id
WHERE sm.product_id = $1
ORDER BY sm.created_at DESC;`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Only storing current stock without movement history',
        why: 'Cannot audit changes or find discrepancies.',
        solution: 'Always log movements, calculate stock from movements or use trigger.'
      },
      {
        mistake: 'Not tracking reserved stock',
        why: 'Overselling when items are in carts but not purchased.',
        solution: 'Track reserved quantity, deduct from available.'
      },
      {
        mistake: 'Updating stock directly without transaction',
        why: 'Race conditions cause incorrect stock levels.',
        solution: 'Use transactions and SELECT FOR UPDATE.'
      }
    ],
    
    scalingTips: [
      'Use triggers for stock updates',
      'Partition movements by date',
      'Cache stock levels in Redis',
      'Background jobs for low-stock alerts'
    ]
  },
  
  {
    id: 'task-management',
    title: 'Task/Project Management',
    description: 'Projects, tasks, assignments, and time tracking',
    icon: '✅',
    difficulty: 'Beginner',
    estimatedTime: '1-2 hours',
    technologies: ['PostgreSQL'],
    
    overview: `Task management systems need hierarchical projects, task dependencies, assignments, and time tracking.`,
    
    entities: [
      'Users', 'Teams', 'Projects', 'Tasks', 'Comments', 'Time Entries', 'Labels'
    ],
    
    schema: `
-- Teams
CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE team_members (
    team_id INT REFERENCES teams(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(30) DEFAULT 'member', -- owner, admin, member
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (team_id, user_id)
);

-- Projects
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    team_id INT REFERENCES teams(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(30) DEFAULT 'active',
    start_date DATE,
    due_date DATE,
    created_by INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tasks
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    project_id INT REFERENCES projects(id) ON DELETE CASCADE,
    parent_id INT REFERENCES tasks(id), -- Subtasks
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(30) DEFAULT 'todo', -- todo, in_progress, review, done
    priority VARCHAR(20) DEFAULT 'medium', -- low, medium, high, urgent
    assignee_id INT REFERENCES users(id),
    reporter_id INT REFERENCES users(id),
    due_date TIMESTAMP,
    estimated_hours DECIMAL(5,2),
    position INT DEFAULT 0, -- For ordering
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Labels
CREATE TABLE labels (
    id SERIAL PRIMARY KEY,
    team_id INT REFERENCES teams(id) ON DELETE CASCADE,
    name VARCHAR(50) NOT NULL,
    color VARCHAR(7) -- Hex color
);

CREATE TABLE task_labels (
    task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
    label_id INT REFERENCES labels(id) ON DELETE CASCADE,
    PRIMARY KEY (task_id, label_id)
);

-- Comments
CREATE TABLE task_comments (
    id SERIAL PRIMARY KEY,
    task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Time Tracking
CREATE TABLE time_entries (
    id SERIAL PRIMARY KEY,
    task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id),
    started_at TIMESTAMP NOT NULL,
    ended_at TIMESTAMP,
    duration_minutes INT, -- Calculated or manual
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Task Dependencies
CREATE TABLE task_dependencies (
    task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
    depends_on_id INT REFERENCES tasks(id) ON DELETE CASCADE,
    PRIMARY KEY (task_id, depends_on_id),
    CHECK (task_id != depends_on_id)
);

-- Activity Log
CREATE TABLE task_activities (
    id SERIAL PRIMARY KEY,
    task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id),
    action VARCHAR(50) NOT NULL, -- created, status_changed, assigned, etc.
    old_value TEXT,
    new_value TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`,
    
    keyQueries: [
      {
        name: 'Get tasks assigned to user',
        query: `SELECT t.*, p.name as project_name,
    array_agg(l.name) as labels
FROM tasks t
JOIN projects p ON t.project_id = p.id
LEFT JOIN task_labels tl ON t.id = tl.task_id
LEFT JOIN labels l ON tl.label_id = l.id
WHERE t.assignee_id = $1 AND t.status != 'done'
GROUP BY t.id, p.name
ORDER BY t.priority DESC, t.due_date ASC;`
      },
      {
        name: 'Get project progress',
        query: `SELECT 
    COUNT(*) as total_tasks,
    COUNT(*) FILTER (WHERE status = 'done') as completed,
    SUM(estimated_hours) as total_hours,
    SUM(CASE WHEN status = 'done' THEN estimated_hours ELSE 0 END) as completed_hours
FROM tasks
WHERE project_id = $1;`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Not handling circular dependencies',
        why: 'Task A depends on B, B depends on A causes infinite loop.',
        solution: 'Check for cycles on insert, use recursive CTE to detect.'
      },
      {
        mistake: 'Storing duration instead of start/end times',
        why: 'Cannot generate accurate timesheets or detect overlaps.',
        solution: 'Store timestamps, calculate duration.'
      },
      {
        mistake: 'No activity logging',
        why: 'Cannot see who changed what and when.',
        solution: 'Log all changes to task_activities table.'
      }
    ],
    
    scalingTips: [
      'Index on assignee_id and status',
      'Partition activities by date',
      'WebSocket for real-time updates',
      'Cache project summaries'
    ]
  }
];

export default databaseDesignExamples2;
