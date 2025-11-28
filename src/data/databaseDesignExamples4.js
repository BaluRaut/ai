// Real World Database Design Examples - Part 4

export const databaseDesignExamples4 = [
  {
    id: 'learning-management',
    title: 'Learning Management System (LMS)',
    description: 'Courses, lessons, enrollments, progress tracking, and certificates',
    icon: '🎓',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 hours',
    technologies: ['PostgreSQL'],
    
    overview: `An LMS needs to track student progress, handle various content types, manage enrollments, and issue certificates.`,
    
    entities: [
      'Users', 'Courses', 'Modules', 'Lessons', 'Enrollments', 
      'Progress', 'Quizzes', 'Certificates'
    ],
    
    schema: `
-- Instructors/Students
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(20) DEFAULT 'student', -- student, instructor, admin
    avatar_url VARCHAR(500),
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    instructor_id INT REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    thumbnail_url VARCHAR(500),
    level VARCHAR(20) DEFAULT 'beginner', -- beginner, intermediate, advanced
    price DECIMAL(10,2) DEFAULT 0,
    is_published BOOLEAN DEFAULT false,
    total_duration_mins INT DEFAULT 0,
    enrollment_count INT DEFAULT 0,
    rating DECIMAL(2,1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    published_at TIMESTAMP
);

-- Course Modules
CREATE TABLE modules (
    id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    sort_order INT DEFAULT 0,
    is_free_preview BOOLEAN DEFAULT false
);

-- Lessons
CREATE TABLE lessons (
    id SERIAL PRIMARY KEY,
    module_id INT REFERENCES modules(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content_type VARCHAR(30) DEFAULT 'video', -- video, text, quiz, assignment
    content TEXT, -- For text content or embed code
    video_url VARCHAR(500),
    duration_mins INT DEFAULT 0,
    sort_order INT DEFAULT 0,
    is_free_preview BOOLEAN DEFAULT false
);

-- Attachments/Resources
CREATE TABLE lesson_resources (
    id SERIAL PRIMARY KEY,
    lesson_id INT REFERENCES lessons(id) ON DELETE CASCADE,
    title VARCHAR(255),
    file_url VARCHAR(500) NOT NULL,
    file_type VARCHAR(50)
);

-- Enrollments
CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    course_id INT REFERENCES courses(id) ON DELETE CASCADE,
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP, -- For subscription-based access
    completed_at TIMESTAMP,
    progress_percent INT DEFAULT 0,
    UNIQUE(user_id, course_id)
);

-- Lesson Progress
CREATE TABLE lesson_progress (
    id SERIAL PRIMARY KEY,
    enrollment_id INT REFERENCES enrollments(id) ON DELETE CASCADE,
    lesson_id INT REFERENCES lessons(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'not_started', -- not_started, in_progress, completed
    progress_seconds INT DEFAULT 0, -- For videos
    completed_at TIMESTAMP,
    UNIQUE(enrollment_id, lesson_id)
);

-- Quizzes
CREATE TABLE quizzes (
    id SERIAL PRIMARY KEY,
    lesson_id INT REFERENCES lessons(id) ON DELETE CASCADE,
    passing_score INT DEFAULT 70,
    max_attempts INT -- NULL = unlimited
);

CREATE TABLE quiz_questions (
    id SERIAL PRIMARY KEY,
    quiz_id INT REFERENCES quizzes(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    question_type VARCHAR(20) DEFAULT 'multiple_choice',
    options JSONB, -- ["Option A", "Option B", "Option C"]
    correct_answer JSONB, -- [0] for single, [0,2] for multiple
    explanation TEXT,
    points INT DEFAULT 1,
    sort_order INT DEFAULT 0
);

CREATE TABLE quiz_attempts (
    id SERIAL PRIMARY KEY,
    enrollment_id INT REFERENCES enrollments(id) ON DELETE CASCADE,
    quiz_id INT REFERENCES quizzes(id) ON DELETE CASCADE,
    answers JSONB,
    score INT,
    passed BOOLEAN,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    submitted_at TIMESTAMP
);

-- Certificates
CREATE TABLE certificates (
    id SERIAL PRIMARY KEY,
    enrollment_id INT REFERENCES enrollments(id),
    certificate_number VARCHAR(50) UNIQUE NOT NULL,
    issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pdf_url VARCHAR(500)
);

-- Course Reviews
CREATE TABLE course_reviews (
    id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_enrollments_user ON enrollments(user_id);
CREATE INDEX idx_progress_enrollment ON lesson_progress(enrollment_id);
`,
    
    keyQueries: [
      {
        name: 'Get course curriculum with progress',
        query: `SELECT m.id as module_id, m.title as module_title,
    json_agg(json_build_object(
        'lesson_id', l.id,
        'title', l.title,
        'content_type', l.content_type,
        'duration_mins', l.duration_mins,
        'status', COALESCE(lp.status, 'not_started')
    ) ORDER BY l.sort_order) as lessons
FROM modules m
LEFT JOIN lessons l ON m.id = l.module_id
LEFT JOIN lesson_progress lp ON l.id = lp.lesson_id AND lp.enrollment_id = $2
WHERE m.course_id = $1
GROUP BY m.id
ORDER BY m.sort_order;`
      },
      {
        name: 'Calculate enrollment progress',
        query: `UPDATE enrollments e
SET progress_percent = (
    SELECT ROUND(100.0 * COUNT(*) FILTER (WHERE lp.status = 'completed') / COUNT(*))
    FROM lessons l
    JOIN modules m ON l.module_id = m.id
    LEFT JOIN lesson_progress lp ON l.id = lp.lesson_id AND lp.enrollment_id = e.id
    WHERE m.course_id = e.course_id
)
WHERE e.id = $1;`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Calculating progress on every request',
        why: 'Expensive query, slow response.',
        solution: 'Store progress_percent, update on lesson completion.'
      },
      {
        mistake: 'Not tracking video position',
        why: 'Users lose their place when resuming.',
        solution: 'Store progress_seconds, resume from last position.'
      },
      {
        mistake: 'Storing correct answers client-side',
        why: 'Users can cheat by inspecting responses.',
        solution: 'Store in DB, validate server-side only.'
      }
    ],
    
    scalingTips: [
      'Cache course structure in Redis',
      'CDN for video content',
      'Background job for certificate generation',
      'Separate analytics database for reporting'
    ]
  },
  
  {
    id: 'event-ticketing',
    title: 'Event Ticketing System',
    description: 'Events, venues, ticket types, sales, and check-in',
    icon: '🎫',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 hours',
    technologies: ['PostgreSQL', 'Redis'],
    
    overview: `Event ticketing needs to handle high-concurrency sales, prevent overselling, and manage check-ins.`,
    
    entities: [
      'Organizers', 'Venues', 'Events', 'Ticket Types', 
      'Tickets', 'Orders', 'Check-ins'
    ],
    
    schema: `
-- Organizers
CREATE TABLE organizers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    stripe_account_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Venues
CREATE TABLE venues (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT,
    city VARCHAR(100),
    capacity INT,
    seating_chart JSONB -- Optional seating map
);

-- Events
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    organizer_id INT REFERENCES organizers(id),
    venue_id INT REFERENCES venues(id),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    event_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME,
    timezone VARCHAR(50) DEFAULT 'UTC',
    status VARCHAR(20) DEFAULT 'draft', -- draft, published, cancelled, completed
    sales_start_at TIMESTAMP,
    sales_end_at TIMESTAMP,
    is_online BOOLEAN DEFAULT false,
    stream_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ticket Types
CREATE TABLE ticket_types (
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES events(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL, -- "General Admission", "VIP"
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    quantity_total INT NOT NULL,
    quantity_sold INT DEFAULT 0,
    max_per_order INT DEFAULT 10,
    sales_start_at TIMESTAMP,
    sales_end_at TIMESTAMP,
    sort_order INT DEFAULT 0
);

-- Orders
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES events(id),
    customer_email VARCHAR(255) NOT NULL,
    customer_name VARCHAR(100),
    customer_phone VARCHAR(20),
    order_number VARCHAR(20) UNIQUE NOT NULL,
    status VARCHAR(20) DEFAULT 'pending', -- pending, completed, refunded, cancelled
    subtotal DECIMAL(10,2) NOT NULL,
    fees DECIMAL(10,2) DEFAULT 0,
    total DECIMAL(10,2) NOT NULL,
    payment_intent_id VARCHAR(100),
    expires_at TIMESTAMP, -- For pending orders
    completed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order Items
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    ticket_type_id INT REFERENCES ticket_types(id),
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL
);

-- Individual Tickets
CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    order_item_id INT REFERENCES order_items(id) ON DELETE CASCADE,
    ticket_type_id INT REFERENCES ticket_types(id),
    ticket_number VARCHAR(20) UNIQUE NOT NULL,
    qr_code VARCHAR(100) UNIQUE NOT NULL,
    attendee_name VARCHAR(100),
    attendee_email VARCHAR(255),
    status VARCHAR(20) DEFAULT 'valid', -- valid, checked_in, cancelled, refunded
    checked_in_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Check-in Logs
CREATE TABLE checkin_logs (
    id SERIAL PRIMARY KEY,
    ticket_id INT REFERENCES tickets(id),
    action VARCHAR(20) NOT NULL, -- checkin, checkout, denied
    scanned_by INT REFERENCES users(id),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Waitlist
CREATE TABLE waitlist (
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES events(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    notified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(event_id, email)
);

-- Indexes
CREATE INDEX idx_events_date ON events(event_date, status);
CREATE INDEX idx_tickets_qr ON tickets(qr_code);
CREATE INDEX idx_orders_customer ON orders(customer_email);
`,
    
    keyQueries: [
      {
        name: 'Get event with ticket availability',
        query: `SELECT e.*, v.name as venue_name,
    json_agg(json_build_object(
        'id', tt.id,
        'name', tt.name,
        'price', tt.price,
        'available', tt.quantity_total - tt.quantity_sold
    ) ORDER BY tt.sort_order) as ticket_types
FROM events e
LEFT JOIN venues v ON e.venue_id = v.id
LEFT JOIN ticket_types tt ON e.id = tt.event_id
WHERE e.slug = $1
GROUP BY e.id, v.name;`
      },
      {
        name: 'Reserve tickets (with locking)',
        query: `UPDATE ticket_types
SET quantity_sold = quantity_sold + $2
WHERE id = $1 
  AND quantity_sold + $2 <= quantity_total
  AND (sales_end_at IS NULL OR sales_end_at > NOW())
RETURNING *;`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Checking availability then updating separately',
        why: 'Race condition causes overselling.',
        solution: 'Use UPDATE with WHERE condition in single query.'
      },
      {
        mistake: 'Not expiring pending orders',
        why: 'Tickets stuck in pending state indefinitely.',
        solution: 'Set expires_at, background job to release expired.'
      },
      {
        mistake: 'Sequential QR code generation',
        why: 'Predictable codes can be guessed.',
        solution: 'Use random UUIDs or cryptographic tokens.'
      }
    ],
    
    scalingTips: [
      'Redis for availability counters',
      'Queue for order processing',
      'Separate check-in service',
      'Pre-generate QR codes in batch'
    ]
  },
  
  {
    id: 'healthcare-ehr',
    title: 'Healthcare EHR System',
    description: 'Patient records, appointments, prescriptions, and billing',
    icon: '🏥',
    difficulty: 'Advanced',
    estimatedTime: '4-5 hours',
    technologies: ['PostgreSQL'],
    
    overview: `Healthcare systems require strict data privacy, audit trails, and complex scheduling. HIPAA compliance is critical.`,
    
    entities: [
      'Patients', 'Providers', 'Appointments', 'Medical Records',
      'Prescriptions', 'Lab Results', 'Billing'
    ],
    
    schema: `
-- Patients
CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    mrn VARCHAR(20) UNIQUE NOT NULL, -- Medical Record Number
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(20),
    ssn_encrypted BYTEA, -- Encrypted
    phone VARCHAR(20),
    email VARCHAR(255),
    address TEXT,
    emergency_contact JSONB,
    insurance_info JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Providers (Doctors, Nurses)
CREATE TABLE providers (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    npi VARCHAR(20) UNIQUE, -- National Provider Identifier
    specialty VARCHAR(100),
    department_id INT REFERENCES departments(id),
    is_active BOOLEAN DEFAULT true
);

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(255)
);

-- Appointments
CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id),
    provider_id INT REFERENCES providers(id),
    appointment_type VARCHAR(50), -- checkup, followup, procedure
    status VARCHAR(30) DEFAULT 'scheduled',
    scheduled_start TIMESTAMP NOT NULL,
    scheduled_end TIMESTAMP NOT NULL,
    actual_start TIMESTAMP,
    actual_end TIMESTAMP,
    chief_complaint TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    EXCLUDE USING gist (
        provider_id WITH =,
        tstzrange(scheduled_start, scheduled_end) WITH &&
    ) WHERE (status != 'cancelled')
);

-- Medical Records / Encounters
CREATE TABLE encounters (
    id SERIAL PRIMARY KEY,
    appointment_id INT REFERENCES appointments(id),
    patient_id INT REFERENCES patients(id),
    provider_id INT REFERENCES providers(id),
    encounter_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    chief_complaint TEXT,
    subjective TEXT, -- Patient's description
    objective TEXT, -- Provider's observations
    assessment TEXT, -- Diagnosis
    plan TEXT, -- Treatment plan
    vitals JSONB, -- {"bp": "120/80", "temp": 98.6, ...}
    signed_at TIMESTAMP,
    signed_by INT REFERENCES providers(id)
);

-- Diagnoses (ICD-10 codes)
CREATE TABLE diagnoses (
    id SERIAL PRIMARY KEY,
    encounter_id INT REFERENCES encounters(id) ON DELETE CASCADE,
    icd_code VARCHAR(10) NOT NULL,
    description TEXT,
    is_primary BOOLEAN DEFAULT false
);

-- Prescriptions
CREATE TABLE prescriptions (
    id SERIAL PRIMARY KEY,
    encounter_id INT REFERENCES encounters(id),
    patient_id INT REFERENCES patients(id),
    prescribed_by INT REFERENCES providers(id),
    medication_name VARCHAR(255) NOT NULL,
    dosage VARCHAR(100),
    frequency VARCHAR(100),
    duration VARCHAR(100),
    quantity INT,
    refills INT DEFAULT 0,
    instructions TEXT,
    status VARCHAR(20) DEFAULT 'active',
    prescribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Lab Orders & Results
CREATE TABLE lab_orders (
    id SERIAL PRIMARY KEY,
    encounter_id INT REFERENCES encounters(id),
    patient_id INT REFERENCES patients(id),
    ordered_by INT REFERENCES providers(id),
    test_type VARCHAR(100) NOT NULL,
    status VARCHAR(20) DEFAULT 'ordered',
    priority VARCHAR(20) DEFAULT 'routine',
    ordered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    collected_at TIMESTAMP,
    resulted_at TIMESTAMP
);

CREATE TABLE lab_results (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES lab_orders(id) ON DELETE CASCADE,
    component VARCHAR(100) NOT NULL,
    value VARCHAR(100),
    unit VARCHAR(50),
    reference_range VARCHAR(100),
    is_abnormal BOOLEAN DEFAULT false,
    notes TEXT
);

-- Audit Log (HIPAA requirement)
CREATE TABLE audit_log (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    action VARCHAR(50) NOT NULL,
    resource_type VARCHAR(50) NOT NULL,
    resource_id INT,
    old_values JSONB,
    new_values JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_appointments_provider_date ON appointments(provider_id, scheduled_start);
CREATE INDEX idx_encounters_patient ON encounters(patient_id, encounter_date DESC);
CREATE INDEX idx_audit_log_resource ON audit_log(resource_type, resource_id);
`,
    
    keyQueries: [
      {
        name: 'Get patient medical history',
        query: `SELECT e.*, p.first_name || ' ' || p.last_name as provider_name,
    json_agg(DISTINCT d.*) as diagnoses,
    json_agg(DISTINCT pr.*) as prescriptions
FROM encounters e
JOIN providers prov ON e.provider_id = prov.id
JOIN users p ON prov.user_id = p.id
LEFT JOIN diagnoses d ON e.id = d.encounter_id
LEFT JOIN prescriptions pr ON e.id = pr.encounter_id
WHERE e.patient_id = $1
GROUP BY e.id, p.first_name, p.last_name
ORDER BY e.encounter_date DESC;`
      },
      {
        name: 'Find available appointment slots',
        query: `WITH time_slots AS (
    SELECT generate_series(
        $2::timestamp, $3::timestamp, '30 minutes'::interval
    ) AS slot_start
)
SELECT ts.slot_start
FROM time_slots ts
WHERE NOT EXISTS (
    SELECT 1 FROM appointments a
    WHERE a.provider_id = $1
      AND a.status != 'cancelled'
      AND a.scheduled_start < ts.slot_start + interval '30 minutes'
      AND a.scheduled_end > ts.slot_start
);`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Not encrypting sensitive data (SSN, etc.)',
        why: 'HIPAA violation, data breach risk.',
        solution: 'Encrypt PII at rest, use separate encryption keys.'
      },
      {
        mistake: 'Missing audit trail',
        why: 'HIPAA requires tracking all access to patient data.',
        solution: 'Log all reads/writes to audit_log table.'
      },
      {
        mistake: 'Not using exclusion constraint for appointments',
        why: 'Double-booking providers possible.',
        solution: 'Use PostgreSQL EXCLUDE constraint with tstzrange.'
      }
    ],
    
    scalingTips: [
      'Separate PHI from non-sensitive data',
      'Encrypt data at rest and in transit',
      'Role-based access control',
      'Regular audit log review',
      'Backup with encryption'
    ]
  },
  
  {
    id: 'multi-tenant-saas',
    title: 'Multi-Tenant SaaS Architecture',
    description: 'Tenant isolation strategies, shared vs dedicated databases',
    icon: '🏢',
    difficulty: 'Advanced',
    estimatedTime: '3-4 hours',
    technologies: ['PostgreSQL'],
    
    overview: `Multi-tenant SaaS requires balancing isolation, performance, and cost. There are several strategies with different trade-offs.`,
    
    entities: [
      'Tenants', 'Users', 'All Application Tables'
    ],
    
    schema: `
-- STRATEGY 1: Shared Database with tenant_id column
-- Simplest, most cost-effective, least isolation

CREATE TABLE tenants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    plan VARCHAR(50) DEFAULT 'free',
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    tenant_id INT REFERENCES tenants(id) ON DELETE CASCADE NOT NULL,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    role VARCHAR(30) DEFAULT 'member',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(tenant_id, email)
);

-- All tables have tenant_id
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    tenant_id INT REFERENCES tenants(id) ON DELETE CASCADE NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Row Level Security (RLS) for isolation
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policy to only show tenant's own data
CREATE POLICY tenant_isolation_users ON users
    USING (tenant_id = current_setting('app.current_tenant')::int);

CREATE POLICY tenant_isolation_projects ON projects
    USING (tenant_id = current_setting('app.current_tenant')::int);

-- Set tenant context in application
-- SET app.current_tenant = '123';

-- Indexes with tenant_id first for partition pruning
CREATE INDEX idx_users_tenant ON users(tenant_id, email);
CREATE INDEX idx_projects_tenant ON projects(tenant_id);


-- STRATEGY 2: Schema per tenant
-- Better isolation, moderate complexity

-- Create schema for each tenant
CREATE SCHEMA tenant_acme;
CREATE SCHEMA tenant_globex;

-- Each schema has same tables
CREATE TABLE tenant_acme.users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100),
    role VARCHAR(30) DEFAULT 'member'
);

CREATE TABLE tenant_acme.projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Set search_path per request
-- SET search_path TO tenant_acme, public;


-- STRATEGY 3: Database per tenant
-- Maximum isolation, highest cost

-- Each tenant gets own database
-- CREATE DATABASE tenant_acme;
-- CREATE DATABASE tenant_globex;

-- Connection string per tenant
-- postgres://user:pass@host/tenant_acme


-- HYBRID: Shared + Dedicated for enterprise
CREATE TABLE enterprise_tenants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    database_host VARCHAR(255), -- Dedicated DB for enterprise
    is_dedicated BOOLEAN DEFAULT false
);
`,
    
    keyQueries: [
      {
        name: 'Ensure tenant isolation in query',
        query: `-- Always filter by tenant_id
SELECT * FROM projects
WHERE tenant_id = $1 AND name ILIKE $2;

-- Or use RLS (automatic)
SET app.current_tenant = $1;
SELECT * FROM projects WHERE name ILIKE $2;`
      },
      {
        name: 'Tenant usage statistics',
        query: `SELECT t.name, t.plan,
    (SELECT COUNT(*) FROM users WHERE tenant_id = t.id) as user_count,
    (SELECT COUNT(*) FROM projects WHERE tenant_id = t.id) as project_count
FROM tenants t
ORDER BY user_count DESC;`
      }
    ],
    
    commonMistakes: [
      {
        mistake: 'Forgetting tenant_id in queries',
        why: 'Data leaks between tenants.',
        solution: 'Use RLS policies, add tenant_id to all indexes.'
      },
      {
        mistake: 'Not indexing tenant_id first in composite indexes',
        why: 'Queries scan more data than needed.',
        solution: 'Always put tenant_id first: (tenant_id, other_columns).'
      },
      {
        mistake: 'Schema-per-tenant with too many tenants',
        why: 'Thousands of schemas cause performance issues.',
        solution: 'Use shared DB for small tenants, dedicated for large.'
      }
    ],
    
    scalingTips: [
      'RLS for automatic tenant filtering',
      'Connection pooling per tenant',
      'Consider Citus for distributed multi-tenant',
      'Shard large tenants to dedicated DB',
      'Monitor per-tenant resource usage'
    ]
  }
];

export default databaseDesignExamples4;
