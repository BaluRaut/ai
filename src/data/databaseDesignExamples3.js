// Real World Database Design Examples - Part 3

export const databaseDesignExamples3 = [
  {
    id: 'messaging-app',
    title: 'Chat/Messaging Application',
    description: 'Real-time messaging with conversations, groups, and media',
    icon: '💬',
    difficulty: 'Advanced',
    estimatedTime: '3-4 hours',
    technologies: ['PostgreSQL', 'Redis', 'MongoDB'],
    
    overview: `Messaging apps need to handle real-time delivery, read receipts, group chats, and message history efficiently.`,
    
    entities: [
      'Users', 'Conversations', 'Participants', 'Messages', 'Attachments', 'Read Receipts'
    ],
    
    schema: `
-- Users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    phone VARCHAR(20) UNIQUE,
    email VARCHAR(255) UNIQUE,
    display_name VARCHAR(100),
    avatar_url VARCHAR(500),
    status VARCHAR(255), -- "Hey there! I'm using this app"
    last_seen TIMESTAMP,
    is_online BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Conversations (1:1 or Group)
CREATE TABLE conversations (
    id SERIAL PRIMARY KEY,
    type VARCHAR(20) DEFAULT 'direct', -- direct, group
    name VARCHAR(255), -- For groups
    avatar_url VARCHAR(500), -- For groups
    created_by INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Conversation Participants
CREATE TABLE participants (
    id SERIAL PRIMARY KEY,
    conversation_id INT REFERENCES conversations(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(20) DEFAULT 'member', -- admin, member
    nickname VARCHAR(50),
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    left_at TIMESTAMP, -- NULL if still in group
    is_muted BOOLEAN DEFAULT false,
    last_read_message_id BIGINT,
    UNIQUE(conversation_id, user_id)
);

-- Messages
CREATE TABLE messages (
    id BIGSERIAL PRIMARY KEY,
    conversation_id INT REFERENCES conversations(id) ON DELETE CASCADE,
    sender_id INT REFERENCES users(id),
    reply_to_id BIGINT REFERENCES messages(id),
    content TEXT,
    message_type VARCHAR(20) DEFAULT 'text', -- text, image, video, file, system
    metadata JSONB, -- For forwarded, edited info
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    edited_at TIMESTAMP
);

-- Message Attachments
CREATE TABLE attachments (
    id SERIAL PRIMARY KEY,
    message_id BIGINT REFERENCES messages(id) ON DELETE CASCADE,
    file_type VARCHAR(50),
    file_url VARCHAR(500) NOT NULL,
    file_name VARCHAR(255),
    file_size INT,
    thumbnail_url VARCHAR(500),
    width INT, -- For images/videos
    height INT
);

-- Read Receipts
CREATE TABLE read_receipts (
    message_id BIGINT REFERENCES messages(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    read_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (message_id, user_id)
);

-- Message Reactions
CREATE TABLE reactions (
    id SERIAL PRIMARY KEY,
    message_id BIGINT REFERENCES messages(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    emoji VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(message_id, user_id, emoji)
);

-- Indexes
CREATE INDEX idx_messages_conversation ON messages(conversation_id, created_at DESC);
CREATE INDEX idx_participants_user ON participants(user_id);
CREATE INDEX idx_messages_sender ON messages(sender_id);

-- Partition messages by date for large scale
-- CREATE TABLE messages (...) PARTITION BY RANGE (created_at);
`,
    
    keyQueries: [
      {
        name: 'Get user conversations with last message',
        query: `SELECT c.*, 
    m.content as last_message,
    m.created_at as last_message_at,
    m.sender_id as last_sender_id,
    (SELECT COUNT(*) FROM messages 
     WHERE conversation_id = c.id 
       AND id > p.last_read_message_id) as unread_count
FROM conversations c
JOIN participants p ON c.id = p.conversation_id
LEFT JOIN LATERAL (
    SELECT * FROM messages 
    WHERE conversation_id = c.id 
    ORDER BY created_at DESC LIMIT 1
) m ON true
WHERE p.user_id = $1 AND p.left_at IS NULL
ORDER BY m.created_at DESC NULLS LAST;`
      },
      {
        name: 'Get messages with pagination',
        query: `SELECT m.*, u.display_name, u.avatar_url,
    array_agg(DISTINCT r.emoji) as reactions
FROM messages m
JOIN users u ON m.sender_id = u.id
LEFT JOIN reactions r ON m.id = r.message_id
WHERE m.conversation_id = $1 
  AND m.created_at < $2
  AND m.is_deleted = false
GROUP BY m.id, u.display_name, u.avatar_url
ORDER BY m.created_at DESC
LIMIT 50;`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Storing read status per message per user in messages table',
        why: 'Explodes storage - M messages × N users in group.',
        solution: 'Store last_read_message_id per participant, count unread with query.'
      },
      {
        mistake: 'Not using cursor-based pagination',
        why: 'OFFSET is slow for deep pagination in chat history.',
        solution: 'Use WHERE created_at < $cursor ORDER BY created_at DESC.'
      },
      {
        mistake: 'Querying database for online status',
        why: 'Too slow for real-time presence.',
        solution: 'Use Redis for presence, pub/sub for updates.'
      }
    ],
    
    scalingTips: [
      'Partition messages by date or conversation',
      'Redis for presence and unread counts',
      'WebSocket for real-time delivery',
      'Separate hot/cold storage for old messages',
      'CDN for media attachments'
    ]
  },
  
  {
    id: 'subscription-saas',
    title: 'SaaS Subscription & Billing',
    description: 'Subscription plans, billing cycles, and usage-based pricing',
    icon: '💳',
    difficulty: 'Advanced',
    estimatedTime: '3-4 hours',
    technologies: ['PostgreSQL'],
    
    overview: `SaaS billing needs to handle multiple plans, billing cycles, usage tracking, and payment history.`,
    
    entities: [
      'Organizations', 'Users', 'Plans', 'Subscriptions', 'Invoices', 
      'Payments', 'Usage Records', 'Features'
    ],
    
    schema: `
-- Organizations (Accounts)
CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    billing_email VARCHAR(255),
    stripe_customer_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE org_members (
    org_id INT REFERENCES organizations(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(30) DEFAULT 'member', -- owner, admin, member
    PRIMARY KEY (org_id, user_id)
);

-- Plans
CREATE TABLE plans (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    price_monthly DECIMAL(10,2),
    price_yearly DECIMAL(10,2),
    is_active BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0
);

-- Plan Features
CREATE TABLE features (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(50) UNIQUE NOT NULL, -- api_calls, storage, users
    unit VARCHAR(50) -- calls, GB, seats
);

CREATE TABLE plan_features (
    plan_id INT REFERENCES plans(id) ON DELETE CASCADE,
    feature_id INT REFERENCES features(id) ON DELETE CASCADE,
    limit_value INT, -- NULL means unlimited
    is_enabled BOOLEAN DEFAULT true,
    PRIMARY KEY (plan_id, feature_id)
);

-- Subscriptions
CREATE TABLE subscriptions (
    id SERIAL PRIMARY KEY,
    org_id INT REFERENCES organizations(id),
    plan_id INT REFERENCES plans(id),
    status VARCHAR(30) DEFAULT 'active', -- active, cancelled, past_due, trialing
    billing_cycle VARCHAR(20) DEFAULT 'monthly', -- monthly, yearly
    current_period_start TIMESTAMP NOT NULL,
    current_period_end TIMESTAMP NOT NULL,
    cancel_at_period_end BOOLEAN DEFAULT false,
    cancelled_at TIMESTAMP,
    trial_ends_at TIMESTAMP,
    stripe_subscription_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subscription Add-ons
CREATE TABLE subscription_items (
    id SERIAL PRIMARY KEY,
    subscription_id INT REFERENCES subscriptions(id) ON DELETE CASCADE,
    feature_id INT REFERENCES features(id),
    quantity INT DEFAULT 1, -- Extra seats, storage, etc.
    unit_price DECIMAL(10,2)
);

-- Usage Records (for metered billing)
CREATE TABLE usage_records (
    id SERIAL PRIMARY KEY,
    org_id INT REFERENCES organizations(id),
    feature_id INT REFERENCES features(id),
    quantity INT NOT NULL,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    billing_period_start DATE,
    billing_period_end DATE
);

-- Invoices
CREATE TABLE invoices (
    id SERIAL PRIMARY KEY,
    org_id INT REFERENCES organizations(id),
    subscription_id INT REFERENCES subscriptions(id),
    invoice_number VARCHAR(50) UNIQUE NOT NULL,
    status VARCHAR(20) DEFAULT 'draft', -- draft, open, paid, void
    subtotal DECIMAL(10,2),
    tax DECIMAL(10,2) DEFAULT 0,
    total DECIMAL(10,2),
    due_date DATE,
    paid_at TIMESTAMP,
    stripe_invoice_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE invoice_items (
    id SERIAL PRIMARY KEY,
    invoice_id INT REFERENCES invoices(id) ON DELETE CASCADE,
    description VARCHAR(255),
    quantity INT,
    unit_price DECIMAL(10,2),
    amount DECIMAL(10,2)
);

-- Payments
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    org_id INT REFERENCES organizations(id),
    invoice_id INT REFERENCES invoices(id),
    amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    payment_method VARCHAR(50),
    stripe_payment_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_subscriptions_org ON subscriptions(org_id);
CREATE INDEX idx_usage_org_period ON usage_records(org_id, billing_period_start);
`,
    
    keyQueries: [
      {
        name: 'Get organization with current plan and usage',
        query: `SELECT o.*, p.name as plan_name,
    s.status as subscription_status,
    s.current_period_end,
    json_agg(json_build_object(
        'feature', f.code,
        'limit', pf.limit_value,
        'used', COALESCE(u.total_used, 0)
    )) as feature_usage
FROM organizations o
JOIN subscriptions s ON o.id = s.org_id AND s.status = 'active'
JOIN plans p ON s.plan_id = p.id
LEFT JOIN plan_features pf ON p.id = pf.plan_id
LEFT JOIN features f ON pf.feature_id = f.id
LEFT JOIN LATERAL (
    SELECT SUM(quantity) as total_used
    FROM usage_records
    WHERE org_id = o.id AND feature_id = f.id
      AND billing_period_start = s.current_period_start::date
) u ON true
WHERE o.id = $1
GROUP BY o.id, p.name, s.status, s.current_period_end;`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Storing plan details directly in subscription',
        why: 'Plan changes affect historical data.',
        solution: 'Reference plan_id, snapshot pricing in invoice.'
      },
      {
        mistake: 'Not handling proration for mid-cycle changes',
        why: 'Customers charged incorrectly when upgrading/downgrading.',
        solution: 'Calculate prorated amounts, use Stripe proration.'
      },
      {
        mistake: 'Single table for all billing events',
        why: 'Mixed concerns, hard to query and audit.',
        solution: 'Separate tables: subscriptions, invoices, payments, usage.'
      }
    ],
    
    scalingTips: [
      'Cache feature limits in Redis',
      'Aggregate usage periodically',
      'Queue invoice generation',
      'Separate billing microservice'
    ]
  },
  
  {
    id: 'ride-sharing',
    title: 'Ride Sharing App (Uber-like)',
    description: 'Drivers, riders, trips, real-time matching, and payments',
    icon: '🚗',
    difficulty: 'Advanced',
    estimatedTime: '4-5 hours',
    technologies: ['PostgreSQL', 'Redis', 'PostGIS'],
    
    overview: `Ride sharing requires real-time location tracking, efficient driver matching, and dynamic pricing.`,
    
    entities: [
      'Users', 'Drivers', 'Vehicles', 'Ride Requests', 'Trips', 
      'Payments', 'Ratings', 'Surge Pricing'
    ],
    
    schema: `
-- Enable PostGIS for geo queries
CREATE EXTENSION IF NOT EXISTS postgis;

-- Users (Riders)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    phone VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255),
    name VARCHAR(100),
    avatar_url VARCHAR(500),
    rating DECIMAL(2,1) DEFAULT 5.0,
    total_rides INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Drivers
CREATE TABLE drivers (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) UNIQUE,
    license_number VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'offline', -- online, offline, busy
    current_location GEOGRAPHY(POINT, 4326),
    heading DECIMAL(5,2), -- Direction in degrees
    rating DECIMAL(2,1) DEFAULT 5.0,
    total_trips INT DEFAULT 0,
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Vehicles
CREATE TABLE vehicles (
    id SERIAL PRIMARY KEY,
    driver_id INT REFERENCES drivers(id) ON DELETE CASCADE,
    type VARCHAR(30), -- economy, comfort, premium, xl
    make VARCHAR(50),
    model VARCHAR(50),
    year INT,
    color VARCHAR(30),
    license_plate VARCHAR(20),
    is_active BOOLEAN DEFAULT true
);

-- Ride Requests
CREATE TABLE ride_requests (
    id SERIAL PRIMARY KEY,
    rider_id INT REFERENCES users(id),
    pickup_location GEOGRAPHY(POINT, 4326) NOT NULL,
    pickup_address TEXT,
    dropoff_location GEOGRAPHY(POINT, 4326) NOT NULL,
    dropoff_address TEXT,
    vehicle_type VARCHAR(30) DEFAULT 'economy',
    status VARCHAR(30) DEFAULT 'pending', -- pending, matched, expired, cancelled
    estimated_fare DECIMAL(10,2),
    surge_multiplier DECIMAL(3,2) DEFAULT 1.0,
    expires_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trips
CREATE TABLE trips (
    id SERIAL PRIMARY KEY,
    request_id INT REFERENCES ride_requests(id),
    rider_id INT REFERENCES users(id),
    driver_id INT REFERENCES drivers(id),
    vehicle_id INT REFERENCES vehicles(id),
    pickup_location GEOGRAPHY(POINT, 4326),
    dropoff_location GEOGRAPHY(POINT, 4326),
    status VARCHAR(30) DEFAULT 'accepted', 
    -- accepted, arriving, started, completed, cancelled
    distance_km DECIMAL(10,2),
    duration_minutes INT,
    base_fare DECIMAL(10,2),
    surge_multiplier DECIMAL(3,2) DEFAULT 1.0,
    total_fare DECIMAL(10,2),
    payment_status VARCHAR(20) DEFAULT 'pending',
    accepted_at TIMESTAMP,
    arrived_at TIMESTAMP,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    cancelled_at TIMESTAMP,
    cancelled_by VARCHAR(20), -- rider, driver
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trip Route (for tracking)
CREATE TABLE trip_locations (
    id SERIAL PRIMARY KEY,
    trip_id INT REFERENCES trips(id) ON DELETE CASCADE,
    location GEOGRAPHY(POINT, 4326) NOT NULL,
    speed DECIMAL(5,2),
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ratings
CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    trip_id INT REFERENCES trips(id),
    rater_id INT REFERENCES users(id),
    ratee_id INT REFERENCES users(id),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Surge Zones
CREATE TABLE surge_zones (
    id SERIAL PRIMARY KEY,
    area GEOGRAPHY(POLYGON, 4326),
    multiplier DECIMAL(3,2) DEFAULT 1.0,
    valid_from TIMESTAMP,
    valid_until TIMESTAMP
);

-- Indexes
CREATE INDEX idx_drivers_location ON drivers USING GIST(current_location);
CREATE INDEX idx_drivers_status ON drivers(status);
CREATE INDEX idx_trips_driver ON trips(driver_id, created_at DESC);
CREATE INDEX idx_trips_rider ON trips(rider_id, created_at DESC);
`,
    
    keyQueries: [
      {
        name: 'Find nearby available drivers',
        query: `SELECT d.*, v.type, v.make, v.model,
    ST_Distance(d.current_location, ST_MakePoint($1, $2)::geography) as distance_m
FROM drivers d
JOIN vehicles v ON d.id = v.driver_id AND v.is_active = true
WHERE d.status = 'online'
  AND v.type = $3
  AND ST_DWithin(d.current_location, ST_MakePoint($1, $2)::geography, 5000) -- 5km radius
ORDER BY distance_m
LIMIT 10;`
      },
      {
        name: 'Get surge pricing for location',
        query: `SELECT multiplier FROM surge_zones
WHERE ST_Contains(area::geometry, ST_MakePoint($1, $2))
  AND CURRENT_TIMESTAMP BETWEEN valid_from AND valid_until
ORDER BY multiplier DESC
LIMIT 1;`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Not using spatial indexes for location queries',
        why: 'Finding nearby drivers becomes O(n) instead of O(log n).',
        solution: 'Use PostGIS with GIST index on geography columns.'
      },
      {
        mistake: 'Storing location history in main trips table',
        why: 'Bloats table, slows down queries.',
        solution: 'Separate trip_locations table, partition by date.'
      },
      {
        mistake: 'Real-time driver location in PostgreSQL only',
        why: 'Too slow for real-time updates.',
        solution: 'Redis for real-time locations, persist to DB periodically.'
      }
    ],
    
    scalingTips: [
      'Redis GEO for real-time driver locations',
      'Partition trip_locations by date',
      'Queue-based driver matching',
      'Separate service for surge calculation',
      'Time-series DB for analytics'
    ]
  },
  
  {
    id: 'food-delivery',
    title: 'Food Delivery Platform',
    description: 'Restaurants, menus, orders, delivery tracking',
    icon: '🍕',
    difficulty: 'Intermediate',
    estimatedTime: '3-4 hours',
    technologies: ['PostgreSQL', 'Redis', 'PostGIS'],
    
    overview: `Food delivery needs restaurant management, menu customization, real-time order tracking, and delivery optimization.`,
    
    entities: [
      'Restaurants', 'Menus', 'Menu Items', 'Modifiers', 'Orders',
      'Order Items', 'Delivery Drivers', 'Ratings'
    ],
    
    schema: `
CREATE EXTENSION IF NOT EXISTS postgis;

-- Restaurants
CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE,
    description TEXT,
    cuisine_type VARCHAR(50),
    location GEOGRAPHY(POINT, 4326),
    address TEXT,
    phone VARCHAR(20),
    rating DECIMAL(2,1) DEFAULT 0,
    review_count INT DEFAULT 0,
    price_range INT CHECK (price_range BETWEEN 1 AND 4), -- $, $$, $$$, $$$$
    is_active BOOLEAN DEFAULT true,
    opens_at TIME,
    closes_at TIME,
    delivery_radius_km DECIMAL(4,2) DEFAULT 5,
    min_order_amount DECIMAL(10,2) DEFAULT 0,
    avg_prep_time_mins INT DEFAULT 30,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Menu Categories
CREATE TABLE menu_categories (
    id SERIAL PRIMARY KEY,
    restaurant_id INT REFERENCES restaurants(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true
);

-- Menu Items
CREATE TABLE menu_items (
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES menu_categories(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(500),
    is_vegetarian BOOLEAN DEFAULT false,
    is_vegan BOOLEAN DEFAULT false,
    is_gluten_free BOOLEAN DEFAULT false,
    spicy_level INT DEFAULT 0,
    calories INT,
    is_available BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0
);

-- Modifier Groups (Size, Toppings, etc.)
CREATE TABLE modifier_groups (
    id SERIAL PRIMARY KEY,
    restaurant_id INT REFERENCES restaurants(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL, -- "Size", "Toppings"
    selection_type VARCHAR(20) DEFAULT 'single', -- single, multiple
    min_selections INT DEFAULT 0,
    max_selections INT,
    is_required BOOLEAN DEFAULT false
);

CREATE TABLE modifiers (
    id SERIAL PRIMARY KEY,
    group_id INT REFERENCES modifier_groups(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    price_adjustment DECIMAL(10,2) DEFAULT 0,
    is_default BOOLEAN DEFAULT false,
    is_available BOOLEAN DEFAULT true
);

CREATE TABLE item_modifier_groups (
    item_id INT REFERENCES menu_items(id) ON DELETE CASCADE,
    group_id INT REFERENCES modifier_groups(id) ON DELETE CASCADE,
    PRIMARY KEY (item_id, group_id)
);

-- Orders
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_number VARCHAR(20) UNIQUE NOT NULL,
    customer_id INT REFERENCES users(id),
    restaurant_id INT REFERENCES restaurants(id),
    driver_id INT REFERENCES delivery_drivers(id),
    status VARCHAR(30) DEFAULT 'pending',
    -- pending, confirmed, preparing, ready, picked_up, delivered, cancelled
    delivery_address TEXT NOT NULL,
    delivery_location GEOGRAPHY(POINT, 4326),
    delivery_instructions TEXT,
    subtotal DECIMAL(10,2) NOT NULL,
    delivery_fee DECIMAL(10,2) DEFAULT 0,
    service_fee DECIMAL(10,2) DEFAULT 0,
    tip DECIMAL(10,2) DEFAULT 0,
    tax DECIMAL(10,2) DEFAULT 0,
    total DECIMAL(10,2) NOT NULL,
    estimated_delivery_at TIMESTAMP,
    confirmed_at TIMESTAMP,
    ready_at TIMESTAMP,
    picked_up_at TIMESTAMP,
    delivered_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order Items
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    menu_item_id INT REFERENCES menu_items(id),
    item_name VARCHAR(255), -- Snapshot
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    modifiers JSONB, -- Snapshot of selected modifiers
    special_instructions TEXT,
    total DECIMAL(10,2) NOT NULL
);

-- Delivery Drivers
CREATE TABLE delivery_drivers (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    status VARCHAR(20) DEFAULT 'offline',
    current_location GEOGRAPHY(POINT, 4326),
    vehicle_type VARCHAR(30), -- bicycle, motorcycle, car
    rating DECIMAL(2,1) DEFAULT 5.0,
    is_verified BOOLEAN DEFAULT false
);

-- Indexes
CREATE INDEX idx_restaurants_location ON restaurants USING GIST(location);
CREATE INDEX idx_orders_customer ON orders(customer_id, created_at DESC);
CREATE INDEX idx_orders_restaurant ON orders(restaurant_id, created_at DESC);
CREATE INDEX idx_orders_status ON orders(status);
`,
    
    keyQueries: [
      {
        name: 'Find nearby open restaurants',
        query: `SELECT r.*,
    ST_Distance(r.location, ST_MakePoint($1, $2)::geography) / 1000 as distance_km
FROM restaurants r
WHERE r.is_active = true
  AND ST_DWithin(r.location, ST_MakePoint($1, $2)::geography, r.delivery_radius_km * 1000)
  AND CURRENT_TIME BETWEEN r.opens_at AND r.closes_at
ORDER BY r.rating DESC, distance_km
LIMIT 20;`
      },
      {
        name: 'Get restaurant menu',
        query: `SELECT mc.id as category_id, mc.name as category_name,
    json_agg(json_build_object(
        'id', mi.id, 'name', mi.name, 'price', mi.price,
        'description', mi.description, 'image_url', mi.image_url
    ) ORDER BY mi.sort_order) as items
FROM menu_categories mc
LEFT JOIN menu_items mi ON mc.id = mi.category_id AND mi.is_available = true
WHERE mc.restaurant_id = $1 AND mc.is_active = true
GROUP BY mc.id
ORDER BY mc.sort_order;`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Not snapshotting item details in order',
        why: 'Menu prices/names change, order history becomes inaccurate.',
        solution: 'Store item_name, price, modifiers in order_items.'
      },
      {
        mistake: 'Complex modifier logic in application only',
        why: 'Inconsistent validation, hard to query.',
        solution: 'Store modifier rules in DB, validate on insert.'
      },
      {
        mistake: 'Checking restaurant hours in application',
        why: 'Time zone issues, inconsistent results.',
        solution: 'Store in DB with proper time zone handling.'
      }
    ],
    
    scalingTips: [
      'Cache restaurant menus in Redis',
      'Real-time order status via WebSocket',
      'Queue for order processing',
      'Separate search with Elasticsearch'
    ]
  }
];

export default databaseDesignExamples3;
