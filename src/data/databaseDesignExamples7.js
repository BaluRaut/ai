// Database Design Example 7: Ride-Sharing / Transportation
export const databaseDesignExamples7 = [
  {
    id: 'rideshare',
    title: 'Ride-Sharing Platform',
    description: 'Uber/Lyft style ride booking with drivers, trips, and real-time tracking',
    difficulty: 'Advanced',
    technologies: ['PostgreSQL', 'PostGIS', 'Redis'],
    tables: [
      {
        name: 'users',
        schema: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  phone VARCHAR(20) UNIQUE NOT NULL,
  email VARCHAR(255),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  profile_photo VARCHAR(500),
  rating DECIMAL(2,1) DEFAULT 5.0,
  total_rides INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);`
      },
      {
        name: 'drivers',
        schema: `CREATE TABLE drivers (
  id SERIAL PRIMARY KEY,
  user_id INT UNIQUE REFERENCES users(id),
  license_number VARCHAR(50) NOT NULL,
  license_expiry DATE,
  status VARCHAR(20) DEFAULT 'offline', -- online, offline, busy
  current_location GEOGRAPHY(POINT, 4326),
  rating DECIMAL(2,1) DEFAULT 5.0,
  total_trips INT DEFAULT 0,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);`
      },
      {
        name: 'vehicles',
        schema: `CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  driver_id INT REFERENCES drivers(id),
  make VARCHAR(50),
  model VARCHAR(50),
  year INT,
  color VARCHAR(30),
  license_plate VARCHAR(20) UNIQUE NOT NULL,
  vehicle_type VARCHAR(20), -- economy, comfort, premium, xl
  capacity INT DEFAULT 4,
  is_active BOOLEAN DEFAULT true
);`
      },
      {
        name: 'rides',
        schema: `CREATE TABLE rides (
  id SERIAL PRIMARY KEY,
  rider_id INT REFERENCES users(id),
  driver_id INT REFERENCES drivers(id),
  vehicle_id INT REFERENCES vehicles(id),
  status VARCHAR(20) DEFAULT 'requested', -- requested, accepted, arriving, in_progress, completed, cancelled
  pickup_location GEOGRAPHY(POINT, 4326) NOT NULL,
  pickup_address TEXT,
  dropoff_location GEOGRAPHY(POINT, 4326) NOT NULL,
  dropoff_address TEXT,
  ride_type VARCHAR(20) NOT NULL,
  estimated_distance_km DECIMAL(6,2),
  actual_distance_km DECIMAL(6,2),
  estimated_fare DECIMAL(10,2),
  actual_fare DECIMAL(10,2),
  surge_multiplier DECIMAL(3,2) DEFAULT 1.00,
  requested_at TIMESTAMP DEFAULT NOW(),
  accepted_at TIMESTAMP,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  cancelled_at TIMESTAMP,
  cancellation_reason TEXT
);`
      },
      {
        name: 'ride_tracking',
        schema: `CREATE TABLE ride_tracking (
  id SERIAL PRIMARY KEY,
  ride_id INT REFERENCES rides(id),
  location GEOGRAPHY(POINT, 4326) NOT NULL,
  speed DECIMAL(5,2),
  heading INT,
  recorded_at TIMESTAMP DEFAULT NOW()
);`
      },
      {
        name: 'ratings',
        schema: `CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  ride_id INT UNIQUE REFERENCES rides(id),
  rider_rating INT CHECK (rider_rating BETWEEN 1 AND 5),
  rider_feedback TEXT,
  driver_rating INT CHECK (driver_rating BETWEEN 1 AND 5),
  driver_feedback TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);`
      },
      {
        name: 'payments',
        schema: `CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  ride_id INT REFERENCES rides(id),
  user_id INT REFERENCES users(id),
  amount DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(20), -- card, wallet, cash
  status VARCHAR(20) DEFAULT 'pending', -- pending, completed, failed, refunded
  transaction_id VARCHAR(100),
  processed_at TIMESTAMP
);`
      }
    ],
    relationships: [
      'Drivers are Users with additional verification',
      'Vehicles belong to Drivers',
      'Rides connect Riders with Drivers',
      'Ride Tracking stores GPS breadcrumbs',
      'Ratings are one-per-ride (bidirectional)',
      'Payments linked to Rides'
    ],
    indexes: [
      'CREATE INDEX idx_drivers_location ON drivers USING GIST(current_location);',
      'CREATE INDEX idx_drivers_status ON drivers(status) WHERE status = \'online\';',
      'CREATE INDEX idx_rides_status ON rides(status, requested_at);',
      'CREATE INDEX idx_rides_rider ON rides(rider_id, requested_at DESC);',
      'CREATE INDEX idx_tracking_ride ON ride_tracking(ride_id, recorded_at);'
    ],
    sampleQueries: [
      {
        name: 'Find Nearby Drivers',
        query: `SELECT d.id, u.first_name, v.make, v.model, v.vehicle_type,
       d.rating, 
       ST_Distance(d.current_location, ST_SetSRID(ST_Point($1, $2), 4326)) as distance_m
FROM drivers d
JOIN users u ON d.user_id = u.id
JOIN vehicles v ON v.driver_id = d.id AND v.is_active = true
WHERE d.status = 'online'
  AND ST_DWithin(d.current_location, ST_SetSRID(ST_Point($1, $2), 4326), 5000) -- 5km radius
ORDER BY distance_m
LIMIT 10;`
      },
      {
        name: 'Calculate Fare Estimate',
        query: `WITH route AS (
  SELECT ST_Distance(
    ST_SetSRID(ST_Point($1, $2), 4326),
    ST_SetSRID(ST_Point($3, $4), 4326)
  ) / 1000 as distance_km
)
SELECT 
  r.distance_km,
  p.base_fare + (r.distance_km * p.per_km_rate) as estimated_fare,
  p.vehicle_type
FROM route r
CROSS JOIN pricing p
WHERE p.city = $5;`
      },
      {
        name: 'Driver Earnings Report',
        query: `SELECT DATE(r.completed_at) as date,
       COUNT(*) as trips,
       SUM(r.actual_fare * 0.75) as earnings, -- 75% driver share
       AVG(rt.driver_rating) as avg_rating
FROM rides r
LEFT JOIN ratings rt ON r.id = rt.ride_id
WHERE r.driver_id = $1 
  AND r.status = 'completed'
  AND r.completed_at >= CURRENT_DATE - INTERVAL '7 days'
GROUP BY DATE(r.completed_at)
ORDER BY date DESC;`
      }
    ],
    commonMistakes: [
      { mistake: 'Not using spatial indexes', consequence: 'Slow nearby driver queries', solution: 'Use PostGIS with GIST index on location columns' },
      { mistake: 'Storing location as separate lat/lng', consequence: 'Complex distance calculations', solution: 'Use GEOGRAPHY type for accurate distance queries' },
      { mistake: 'Not handling surge pricing atomically', consequence: 'Price shown differs from charged', solution: 'Lock surge multiplier at ride request time' }
    ],
    designTips: [
      'Use PostGIS for geospatial queries (nearby drivers, ETA)',
      'Cache driver locations in Redis for real-time updates',
      'Store ride tracking points for route replay and disputes',
      'Implement surge pricing as a snapshot at request time',
      'Use separate table for tracking to avoid ride table bloat'
    ]
  }
];
