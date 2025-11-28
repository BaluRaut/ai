// Database Design Example 12: Fitness/Gym Management
export const databaseDesignExamples12 = [
  {
    id: 'fitness',
    title: 'Fitness & Gym Management',
    description: 'Memberships, class bookings, trainer schedules, and workout tracking',
    difficulty: 'Intermediate',
    technologies: ['PostgreSQL'],
    tables: [
      {
        name: 'members',
        schema: `CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  membership_type VARCHAR(50), -- basic, premium, vip
  membership_start DATE,
  membership_end DATE,
  status VARCHAR(20) DEFAULT 'active', -- active, expired, suspended
  emergency_contact VARCHAR(100),
  health_conditions TEXT
);`
      },
      {
        name: 'trainers',
        schema: `CREATE TABLE trainers (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  specializations TEXT[],
  certifications TEXT[],
  hourly_rate DECIMAL(8,2),
  bio TEXT,
  is_available BOOLEAN DEFAULT true
);`
      },
      {
        name: 'classes',
        schema: `CREATE TABLE classes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  trainer_id INT REFERENCES trainers(id),
  room VARCHAR(50),
  day_of_week INT, -- 0=Sunday
  start_time TIME,
  duration_mins INT,
  max_capacity INT,
  difficulty VARCHAR(20) -- beginner, intermediate, advanced
);`
      },
      {
        name: 'class_bookings',
        schema: `CREATE TABLE class_bookings (
  id SERIAL PRIMARY KEY,
  class_id INT REFERENCES classes(id),
  member_id INT REFERENCES members(id),
  class_date DATE NOT NULL,
  status VARCHAR(20) DEFAULT 'booked', -- booked, attended, cancelled, no-show
  booked_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(class_id, member_id, class_date)
);`
      },
      {
        name: 'workouts',
        schema: `CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  member_id INT REFERENCES members(id),
  workout_date DATE DEFAULT CURRENT_DATE,
  duration_mins INT,
  calories_burned INT,
  notes TEXT
);`
      },
      {
        name: 'exercises',
        schema: `CREATE TABLE exercises (
  id SERIAL PRIMARY KEY,
  workout_id INT REFERENCES workouts(id),
  exercise_name VARCHAR(100),
  sets INT,
  reps INT,
  weight DECIMAL(6,2),
  notes TEXT
);`
      }
    ],
    relationships: [
      'Members book Classes',
      'Trainers teach Classes',
      'Members log Workouts with Exercises'
    ],
    indexes: [
      'CREATE INDEX idx_bookings_class ON class_bookings(class_id, class_date);',
      'CREATE INDEX idx_bookings_member ON class_bookings(member_id, class_date);',
      'CREATE INDEX idx_members_status ON members(status, membership_end);'
    ],
    sampleQueries: [
      {
        name: 'Class Availability',
        query: `SELECT c.name, c.start_time, t.user_id as trainer,
       c.max_capacity - COUNT(cb.id) as spots_left
FROM classes c
JOIN trainers t ON c.trainer_id = t.id
LEFT JOIN class_bookings cb ON c.id = cb.class_id 
  AND cb.class_date = $1 AND cb.status = 'booked'
WHERE c.day_of_week = EXTRACT(DOW FROM $1::date)
GROUP BY c.id, t.user_id
HAVING c.max_capacity > COUNT(cb.id);`
      },
      {
        name: 'Member Workout Stats',
        query: `SELECT DATE_TRUNC('week', workout_date) as week,
       COUNT(*) as workouts, SUM(duration_mins) as total_mins,
       SUM(calories_burned) as total_calories
FROM workouts WHERE member_id = $1
GROUP BY week ORDER BY week DESC LIMIT 8;`
      }
    ],
    commonMistakes: [
      { mistake: 'Not checking membership status', consequence: 'Expired members can book', solution: 'Always validate membership is active and not expired' },
      { mistake: 'No class capacity check', consequence: 'Overbooking classes', solution: 'Check capacity before insert or use trigger' }
    ],
    designTips: [
      'Use recurring schedule pattern for classes',
      'Track attendance for member engagement',
      'Add waitlist for full classes'
    ]
  }
];
