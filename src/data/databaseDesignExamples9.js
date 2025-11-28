// Database Design Example 9: Hotel Reservation System
export const databaseDesignExamples9 = [
  {
    id: 'hotel',
    title: 'Hotel Reservation System',
    description: 'Room booking with availability, pricing, and guest management',
    difficulty: 'Intermediate',
    technologies: ['PostgreSQL', 'Redis'],
    tables: [
      {
        name: 'hotels',
        schema: `CREATE TABLE hotels (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  address TEXT,
  city VARCHAR(100),
  country VARCHAR(100),
  star_rating INT CHECK (star_rating BETWEEN 1 AND 5),
  amenities TEXT[],
  check_in_time TIME DEFAULT '15:00',
  check_out_time TIME DEFAULT '11:00',
  is_active BOOLEAN DEFAULT true
);`
      },
      {
        name: 'room_types',
        schema: `CREATE TABLE room_types (
  id SERIAL PRIMARY KEY,
  hotel_id INT REFERENCES hotels(id),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  capacity INT NOT NULL,
  bed_type VARCHAR(50),
  size_sqm DECIMAL(6,2),
  base_price DECIMAL(10,2) NOT NULL,
  amenities TEXT[]
);`
      },
      {
        name: 'rooms',
        schema: `CREATE TABLE rooms (
  id SERIAL PRIMARY KEY,
  hotel_id INT REFERENCES hotels(id),
  room_type_id INT REFERENCES room_types(id),
  room_number VARCHAR(20) NOT NULL,
  floor INT,
  status VARCHAR(20) DEFAULT 'available', -- available, occupied, maintenance
  UNIQUE(hotel_id, room_number)
);`
      },
      {
        name: 'reservations',
        schema: `CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  confirmation_code VARCHAR(20) UNIQUE NOT NULL,
  guest_id INT REFERENCES guests(id),
  hotel_id INT REFERENCES hotels(id),
  room_id INT REFERENCES rooms(id),
  check_in_date DATE NOT NULL,
  check_out_date DATE NOT NULL,
  num_guests INT DEFAULT 1,
  status VARCHAR(20) DEFAULT 'confirmed', -- pending, confirmed, checked_in, checked_out, cancelled
  total_amount DECIMAL(10,2),
  special_requests TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  CONSTRAINT valid_dates CHECK (check_out_date > check_in_date)
);`
      },
      {
        name: 'room_availability',
        schema: `-- Calendar-based availability (for complex pricing)
CREATE TABLE room_availability (
  id SERIAL PRIMARY KEY,
  room_type_id INT REFERENCES room_types(id),
  date DATE NOT NULL,
  available_count INT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  min_stay INT DEFAULT 1,
  UNIQUE(room_type_id, date)
);`
      }
    ],
    relationships: [
      'Hotels have many Room Types and Rooms',
      'Rooms belong to Room Types',
      'Reservations link Guests to Rooms',
      'Room Availability tracks daily pricing/inventory'
    ],
    indexes: [
      'CREATE INDEX idx_reservations_dates ON reservations(hotel_id, check_in_date, check_out_date);',
      'CREATE INDEX idx_availability_date ON room_availability(room_type_id, date);',
      'CREATE INDEX idx_rooms_status ON rooms(hotel_id, status);'
    ],
    sampleQueries: [
      {
        name: 'Check Room Availability',
        query: `SELECT rt.id, rt.name, rt.base_price, r.available_count,
       SUM(ra.price) as total_price
FROM room_types rt
JOIN room_availability ra ON rt.id = ra.room_type_id
WHERE rt.hotel_id = $1
  AND ra.date >= $2 AND ra.date < $3
  AND ra.available_count > 0
GROUP BY rt.id, ra.available_count
HAVING COUNT(*) = ($3::date - $2::date);`
      },
      {
        name: 'Current Occupancy',
        query: `SELECT 
  COUNT(*) FILTER (WHERE r.status = 'occupied') as occupied,
  COUNT(*) FILTER (WHERE r.status = 'available') as available,
  ROUND(100.0 * COUNT(*) FILTER (WHERE r.status = 'occupied') / COUNT(*), 1) as occupancy_rate
FROM rooms r WHERE r.hotel_id = $1;`
      }
    ],
    commonMistakes: [
      { mistake: 'Not preventing double booking', consequence: 'Same room booked twice', solution: 'Use exclusion constraint or check availability atomically' },
      { mistake: 'Storing price only in room_types', consequence: 'Cannot do dynamic pricing', solution: 'Use room_availability table with daily prices' }
    ],
    designTips: [
      'Pre-populate room_availability for next 365 days',
      'Use Redis to cache availability for search',
      'Implement confirmation codes for easy lookup'
    ]
  }
];
