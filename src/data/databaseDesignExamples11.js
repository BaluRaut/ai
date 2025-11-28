// Database Design Example 11: Event Ticketing System
export const databaseDesignExamples11 = [
  {
    id: 'events',
    title: 'Event Ticketing Platform',
    description: 'Concerts, sports events with venues, seating, and ticket sales',
    difficulty: 'Advanced',
    technologies: ['PostgreSQL', 'Redis'],
    tables: [
      {
        name: 'venues',
        schema: `CREATE TABLE venues (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  address TEXT,
  city VARCHAR(100),
  capacity INT,
  seating_chart JSONB -- section/row/seat layout
);`
      },
      {
        name: 'events',
        schema: `CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  venue_id INT REFERENCES venues(id),
  name VARCHAR(300) NOT NULL,
  description TEXT,
  category VARCHAR(50), -- concert, sports, theater
  event_date DATE NOT NULL,
  start_time TIME,
  end_time TIME,
  status VARCHAR(20) DEFAULT 'upcoming', -- upcoming, ongoing, completed, cancelled
  total_tickets INT,
  sold_tickets INT DEFAULT 0
);`
      },
      {
        name: 'ticket_types',
        schema: `CREATE TABLE ticket_types (
  id SERIAL PRIMARY KEY,
  event_id INT REFERENCES events(id),
  name VARCHAR(100), -- VIP, General, Balcony
  price DECIMAL(10,2) NOT NULL,
  quantity INT NOT NULL,
  sold INT DEFAULT 0,
  sale_start TIMESTAMP,
  sale_end TIMESTAMP
);`
      },
      {
        name: 'tickets',
        schema: `CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  event_id INT REFERENCES events(id),
  ticket_type_id INT REFERENCES ticket_types(id),
  order_id INT REFERENCES orders(id),
  barcode VARCHAR(50) UNIQUE NOT NULL,
  section VARCHAR(20),
  row VARCHAR(10),
  seat VARCHAR(10),
  status VARCHAR(20) DEFAULT 'available', -- available, reserved, sold, used
  reserved_until TIMESTAMP,
  UNIQUE(event_id, section, row, seat)
);`
      },
      {
        name: 'orders',
        schema: `CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  event_id INT REFERENCES events(id),
  total_amount DECIMAL(10,2),
  status VARCHAR(20) DEFAULT 'pending', -- pending, paid, refunded, cancelled
  created_at TIMESTAMP DEFAULT NOW()
);`
      }
    ],
    relationships: [
      'Events held at Venues',
      'Events have multiple Ticket Types',
      'Tickets belong to Ticket Types',
      'Orders contain multiple Tickets'
    ],
    indexes: [
      'CREATE INDEX idx_tickets_event ON tickets(event_id, status);',
      'CREATE INDEX idx_tickets_reserved ON tickets(reserved_until) WHERE status = \'reserved\';',
      'CREATE INDEX idx_events_date ON events(event_date, status);'
    ],
    sampleQueries: [
      {
        name: 'Available Seats by Section',
        query: `SELECT section, COUNT(*) as available
FROM tickets
WHERE event_id = $1 AND status = 'available'
GROUP BY section ORDER BY section;`
      },
      {
        name: 'Release Expired Reservations',
        query: `UPDATE tickets SET status = 'available', reserved_until = NULL
WHERE status = 'reserved' AND reserved_until < NOW()
RETURNING id;`
      }
    ],
    commonMistakes: [
      { mistake: 'No reservation timeout', consequence: 'Tickets locked forever if user abandons', solution: 'Add reserved_until timestamp, run cleanup job' },
      { mistake: 'Race condition on seat selection', consequence: 'Same seat sold twice', solution: 'Use SELECT FOR UPDATE or atomic update' }
    ],
    designTips: [
      'Pre-generate tickets when event created',
      'Use Redis for seat hold during checkout',
      'Generate unique barcodes for entry scanning',
      'Run periodic job to release expired reservations'
    ]
  }
];
