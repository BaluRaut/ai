// Real World Database Design Examples - Part 1

export const databaseDesignExamples = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'Complete online store with products, orders, inventory, and payments',
    icon: '🛒',
    difficulty: 'Intermediate',
    estimatedTime: '3-4 hours',
    technologies: ['PostgreSQL', 'Redis'],
    
    overview: `An e-commerce platform needs to handle products, categories, users, shopping carts, orders, payments, reviews, and inventory. This design focuses on scalability and data integrity.`,
    
    entities: [
      'Users', 'Addresses', 'Categories', 'Products', 'Product Variants',
      'Inventory', 'Cart', 'Orders', 'Order Items', 'Payments', 'Reviews'
    ],
    
    schema: `
-- Users and Authentication
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(20) DEFAULT 'shipping', -- shipping, billing
    street VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(100) NOT NULL,
    is_default BOOLEAN DEFAULT false
);

-- Product Catalog
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    parent_id INT REFERENCES categories(id),
    description TEXT,
    image_url VARCHAR(500)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES categories(id),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    base_price DECIMAL(10,2) NOT NULL,
    sku VARCHAR(50) UNIQUE,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_variants (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    name VARCHAR(100), -- "Red, Large"
    sku VARCHAR(50) UNIQUE,
    price_modifier DECIMAL(10,2) DEFAULT 0,
    attributes JSONB -- {"color": "red", "size": "L"}
);

CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    variant_id INT REFERENCES product_variants(id),
    quantity INT DEFAULT 0,
    reserved INT DEFAULT 0, -- Items in carts
    warehouse VARCHAR(50),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Shopping Cart (also cached in Redis)
CREATE TABLE cart_items (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    variant_id INT REFERENCES product_variants(id),
    quantity INT NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, variant_id)
);

-- Orders
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    order_number VARCHAR(50) UNIQUE NOT NULL,
    status VARCHAR(30) DEFAULT 'pending',
    subtotal DECIMAL(10,2) NOT NULL,
    tax DECIMAL(10,2) DEFAULT 0,
    shipping_cost DECIMAL(10,2) DEFAULT 0,
    discount DECIMAL(10,2) DEFAULT 0,
    total DECIMAL(10,2) NOT NULL,
    shipping_address_id INT REFERENCES addresses(id),
    billing_address_id INT REFERENCES addresses(id),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    variant_id INT REFERENCES product_variants(id),
    product_name VARCHAR(255), -- Snapshot at purchase
    variant_name VARCHAR(100),
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL
);

CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id),
    method VARCHAR(50), -- card, paypal, etc.
    status VARCHAR(30) DEFAULT 'pending',
    amount DECIMAL(10,2) NOT NULL,
    transaction_id VARCHAR(100),
    gateway_response JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    content TEXT,
    is_verified_purchase BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_inventory_variant ON inventory(variant_id);
`,
    
    keyQueries: [
      {
        name: 'Get product with variants and stock',
        query: `SELECT p.*, 
    json_agg(json_build_object(
        'variant_id', pv.id,
        'name', pv.name,
        'price', p.base_price + pv.price_modifier,
        'stock', i.quantity - i.reserved
    )) as variants
FROM products p
LEFT JOIN product_variants pv ON p.id = pv.product_id
LEFT JOIN inventory i ON pv.id = i.variant_id
WHERE p.slug = $1 AND p.is_active = true
GROUP BY p.id;`
      },
      {
        name: 'Get user order history',
        query: `SELECT o.*, 
    COUNT(oi.id) as item_count,
    array_agg(oi.product_name) as products
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
WHERE o.user_id = $1
GROUP BY o.id
ORDER BY o.created_at DESC;`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Storing product price only in products table',
        why: 'Prices change over time. Order items need price snapshot at purchase time.',
        solution: 'Store unit_price and product_name in order_items as a snapshot.'
      },
      {
        mistake: 'Not separating inventory from products',
        why: 'Products can have multiple variants with different stock levels.',
        solution: 'Use product_variants and inventory tables for flexibility.'
      },
      {
        mistake: 'Using cart table only without caching',
        why: 'Cart is accessed frequently, database queries add latency.',
        solution: 'Cache cart in Redis, sync to database periodically.'
      }
    ],
    
    scalingTips: [
      'Use Redis for cart and session data',
      'Partition orders table by date',
      'Read replicas for product catalog',
      'CDN for product images',
      'Async processing for order confirmations'
    ]
  },
  
  {
    id: 'social-network',
    title: 'Social Network Platform',
    description: 'Users, posts, follows, likes, comments, and messaging',
    icon: '👥',
    difficulty: 'Advanced',
    estimatedTime: '4-5 hours',
    technologies: ['PostgreSQL', 'Redis', 'Neo4j'],
    
    overview: `A social network requires handling complex relationships between users, content, and interactions. The key challenge is efficiently querying the social graph.`,
    
    entities: [
      'Users', 'Posts', 'Comments', 'Likes', 'Follows',
      'Messages', 'Notifications', 'Hashtags'
    ],
    
    schema: `
-- Users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    display_name VARCHAR(100),
    bio VARCHAR(500),
    avatar_url VARCHAR(500),
    is_verified BOOLEAN DEFAULT false,
    is_private BOOLEAN DEFAULT false,
    follower_count INT DEFAULT 0,
    following_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Follow Relationship (Self-referential Many-to-Many)
CREATE TABLE follows (
    follower_id INT REFERENCES users(id) ON DELETE CASCADE,
    following_id INT REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (follower_id, following_id),
    CHECK (follower_id != following_id)
);

-- Posts
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    media_urls TEXT[],
    like_count INT DEFAULT 0,
    comment_count INT DEFAULT 0,
    repost_count INT DEFAULT 0,
    reply_to_id INT REFERENCES posts(id), -- For threads
    repost_of_id INT REFERENCES posts(id), -- For reposts
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Likes (Polymorphic - can like posts or comments)
CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    likeable_type VARCHAR(20) NOT NULL, -- 'post' or 'comment'
    likeable_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, likeable_type, likeable_id)
);

-- Comments
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    parent_id INT REFERENCES comments(id), -- Nested comments
    content TEXT NOT NULL,
    like_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Hashtags
CREATE TABLE hashtags (
    id SERIAL PRIMARY KEY,
    tag VARCHAR(100) UNIQUE NOT NULL,
    post_count INT DEFAULT 0
);

CREATE TABLE post_hashtags (
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    hashtag_id INT REFERENCES hashtags(id) ON DELETE CASCADE,
    PRIMARY KEY (post_id, hashtag_id)
);

-- Direct Messages
CREATE TABLE conversations (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE conversation_participants (
    conversation_id INT REFERENCES conversations(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    last_read_at TIMESTAMP,
    PRIMARY KEY (conversation_id, user_id)
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    conversation_id INT REFERENCES conversations(id) ON DELETE CASCADE,
    sender_id INT REFERENCES users(id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Notifications
CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    actor_id INT REFERENCES users(id),
    type VARCHAR(30) NOT NULL, -- follow, like, comment, mention
    entity_type VARCHAR(20),
    entity_id INT,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_posts_user ON posts(user_id, created_at DESC);
CREATE INDEX idx_follows_follower ON follows(follower_id);
CREATE INDEX idx_follows_following ON follows(following_id);
CREATE INDEX idx_notifications_user ON notifications(user_id, is_read);
`,
    
    keyQueries: [
      {
        name: 'Get user feed (posts from following)',
        query: `SELECT p.*, u.username, u.avatar_url,
    EXISTS(SELECT 1 FROM likes WHERE user_id = $1 
           AND likeable_type = 'post' AND likeable_id = p.id) as is_liked
FROM posts p
JOIN users u ON p.user_id = u.id
WHERE p.user_id IN (
    SELECT following_id FROM follows WHERE follower_id = $1
) AND p.is_deleted = false
ORDER BY p.created_at DESC
LIMIT 20;`
      },
      {
        name: 'Find mutual followers',
        query: `SELECT u.* FROM users u
WHERE u.id IN (
    SELECT following_id FROM follows WHERE follower_id = $1
    INTERSECT
    SELECT following_id FROM follows WHERE follower_id = $2
);`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Not denormalizing counts (follower_count, like_count)',
        why: 'Counting followers/likes on every request is expensive.',
        solution: 'Store counts and update with triggers or async jobs.'
      },
      {
        mistake: 'Using relational DB for friend-of-friend queries',
        why: 'Graph traversals are slow with JOINs.',
        solution: 'Use Neo4j or graph database for social graph.'
      },
      {
        mistake: 'Not implementing soft delete for posts',
        why: 'Hard delete breaks references and loses audit trail.',
        solution: 'Use is_deleted flag, clean up with background job.'
      }
    ],
    
    scalingTips: [
      'Use Redis for feed caching and real-time notifications',
      'Neo4j for friend suggestions and graph queries',
      'Shard by user_id for horizontal scaling',
      'Async processing for counts and notifications',
      'Separate read/write replicas'
    ]
  },
  
  {
    id: 'booking-system',
    title: 'Hotel/Restaurant Booking System',
    description: 'Manage availability, reservations, and prevent double bookings',
    icon: '🏨',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 hours',
    technologies: ['PostgreSQL'],
    
    overview: `Booking systems need to handle availability, prevent conflicts, and manage time slots. The key challenge is concurrent booking handling.`,
    
    entities: [
      'Venues', 'Rooms/Tables', 'Time Slots', 'Bookings', 'Customers', 'Payments'
    ],
    
    schema: `
-- Venues (Hotels/Restaurants)
CREATE TABLE venues (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50), -- hotel, restaurant
    address TEXT,
    timezone VARCHAR(50) DEFAULT 'UTC',
    settings JSONB DEFAULT '{}'
);

-- Bookable Resources (Rooms/Tables)
CREATE TABLE resources (
    id SERIAL PRIMARY KEY,
    venue_id INT REFERENCES venues(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50), -- room, table
    capacity INT,
    price_per_unit DECIMAL(10,2), -- per night/hour
    attributes JSONB -- {"floor": 2, "view": "ocean"}
);

-- Availability (Optional - for complex rules)
CREATE TABLE availability (
    id SERIAL PRIMARY KEY,
    resource_id INT REFERENCES resources(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    is_available BOOLEAN DEFAULT true,
    price_override DECIMAL(10,2),
    UNIQUE(resource_id, date)
);

-- Bookings
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    resource_id INT REFERENCES resources(id),
    customer_id INT REFERENCES customers(id),
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    status VARCHAR(30) DEFAULT 'pending',
    total_price DECIMAL(10,2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Prevent overlapping bookings
    EXCLUDE USING gist (
        resource_id WITH =,
        tstzrange(start_time, end_time) WITH &&
    ) WHERE (status != 'cancelled')
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100),
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_bookings_resource_time ON bookings(resource_id, start_time, end_time);
CREATE INDEX idx_bookings_status ON bookings(status);
`,
    
    keyQueries: [
      {
        name: 'Find available rooms for date range',
        query: `SELECT r.* FROM resources r
WHERE r.venue_id = $1
  AND r.id NOT IN (
    SELECT resource_id FROM bookings
    WHERE status != 'cancelled'
      AND start_time < $3  -- end_date
      AND end_time > $2    -- start_date
  );`
      },
      {
        name: 'Check availability before booking',
        query: `SELECT NOT EXISTS (
    SELECT 1 FROM bookings
    WHERE resource_id = $1
      AND status != 'cancelled'
      AND start_time < $3
      AND end_time > $2
) as is_available;`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Not using exclusion constraints for time ranges',
        why: 'Race conditions can cause double bookings.',
        solution: 'Use PostgreSQL EXCLUDE constraint with tstzrange.'
      },
      {
        mistake: 'Checking availability and inserting separately',
        why: 'Gap between check and insert allows race conditions.',
        solution: 'Use single transaction with SELECT FOR UPDATE or exclusion constraint.'
      },
      {
        mistake: 'Storing only booking date, not time range',
        why: 'Cannot support partial-day bookings or time slots.',
        solution: 'Always store start_time and end_time with timezone.'
      }
    ],
    
    scalingTips: [
      'Use database-level constraints for consistency',
      'Cache availability in Redis, invalidate on booking',
      'Partition bookings by date for old data archival',
      'Use optimistic locking for concurrent updates'
    ]
  }
];

export default databaseDesignExamples;
