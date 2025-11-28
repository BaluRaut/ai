// Database Design Example 10: Food Delivery Platform
export const databaseDesignExamples10 = [
  {
    id: 'food-delivery',
    title: 'Food Delivery Platform',
    description: 'Restaurant ordering with menu, cart, orders, and delivery tracking',
    difficulty: 'Intermediate',
    technologies: ['PostgreSQL', 'Redis', 'PostGIS'],
    tables: [
      {
        name: 'restaurants',
        schema: `CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  slug VARCHAR(200) UNIQUE,
  description TEXT,
  cuisine_types TEXT[],
  address TEXT,
  location GEOGRAPHY(POINT, 4326),
  phone VARCHAR(20),
  rating DECIMAL(2,1) DEFAULT 0,
  price_range INT CHECK (price_range BETWEEN 1 AND 4),
  delivery_fee DECIMAL(6,2) DEFAULT 0,
  min_order_amount DECIMAL(8,2) DEFAULT 0,
  avg_prep_time_mins INT DEFAULT 30,
  is_open BOOLEAN DEFAULT true,
  opening_hours JSONB
);`
      },
      {
        name: 'menu_categories',
        schema: `CREATE TABLE menu_categories (
  id SERIAL PRIMARY KEY,
  restaurant_id INT REFERENCES restaurants(id),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  sort_order INT DEFAULT 0
);`
      },
      {
        name: 'menu_items',
        schema: `CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  restaurant_id INT REFERENCES restaurants(id),
  category_id INT REFERENCES menu_categories(id),
  name VARCHAR(200) NOT NULL,
  description TEXT,
  price DECIMAL(8,2) NOT NULL,
  image_url VARCHAR(500),
  is_vegetarian BOOLEAN DEFAULT false,
  is_vegan BOOLEAN DEFAULT false,
  is_available BOOLEAN DEFAULT true,
  calories INT,
  allergens TEXT[]
);`
      },
      {
        name: 'orders',
        schema: `CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  order_number VARCHAR(20) UNIQUE NOT NULL,
  customer_id INT REFERENCES users(id),
  restaurant_id INT REFERENCES restaurants(id),
  driver_id INT REFERENCES drivers(id),
  status VARCHAR(30) DEFAULT 'pending', -- pending, confirmed, preparing, ready, picked_up, delivered, cancelled
  subtotal DECIMAL(10,2) NOT NULL,
  delivery_fee DECIMAL(6,2),
  tax DECIMAL(8,2),
  tip DECIMAL(8,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,
  delivery_address TEXT,
  delivery_location GEOGRAPHY(POINT, 4326),
  special_instructions TEXT,
  estimated_delivery_at TIMESTAMP,
  delivered_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);`
      },
      {
        name: 'order_items',
        schema: `CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(id),
  menu_item_id INT REFERENCES menu_items(id),
  quantity INT NOT NULL,
  unit_price DECIMAL(8,2) NOT NULL,
  special_instructions TEXT,
  customizations JSONB
);`
      }
    ],
    relationships: [
      'Restaurants have Categories and Menu Items',
      'Orders contain multiple Order Items',
      'Orders assigned to Drivers for delivery',
      'Customers place Orders from Restaurants'
    ],
    indexes: [
      'CREATE INDEX idx_restaurants_location ON restaurants USING GIST(location);',
      'CREATE INDEX idx_restaurants_cuisine ON restaurants USING GIN(cuisine_types);',
      'CREATE INDEX idx_orders_status ON orders(status, created_at);',
      'CREATE INDEX idx_orders_customer ON orders(customer_id, created_at DESC);'
    ],
    sampleQueries: [
      {
        name: 'Nearby Open Restaurants',
        query: `SELECT r.id, r.name, r.cuisine_types, r.rating, r.price_range,
       r.avg_prep_time_mins, r.delivery_fee,
       ST_Distance(r.location, ST_SetSRID(ST_Point($1, $2), 4326)) / 1000 as distance_km
FROM restaurants r
WHERE r.is_open = true
  AND ST_DWithin(r.location, ST_SetSRID(ST_Point($1, $2), 4326), 10000)
ORDER BY r.rating DESC, distance_km
LIMIT 20;`
      },
      {
        name: 'Order with Items',
        query: `SELECT o.*, 
       json_agg(json_build_object(
         'name', mi.name, 'quantity', oi.quantity, 
         'price', oi.unit_price, 'customizations', oi.customizations
       )) as items
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
JOIN menu_items mi ON oi.menu_item_id = mi.id
WHERE o.id = $1
GROUP BY o.id;`
      }
    ],
    commonMistakes: [
      { mistake: 'Not caching menu data', consequence: 'Slow menu loading', solution: 'Cache restaurant menus in Redis' },
      { mistake: 'No item availability tracking', consequence: 'Orders placed for out-of-stock items', solution: 'Add is_available flag, update in real-time' }
    ],
    designTips: [
      'Use PostGIS for delivery radius calculations',
      'Store opening hours as JSONB for flexibility',
      'Cache popular restaurants in Redis',
      'Use customizations JSONB for item modifications'
    ]
  }
];
