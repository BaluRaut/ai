// Database Design Example 6: Healthcare/Hospital System
export const databaseDesignExamples6 = [
  {
    id: 'healthcare',
    title: 'Healthcare Management System',
    description: 'Patient records, appointments, doctors, and medical history',
    difficulty: 'Advanced',
    technologies: ['PostgreSQL', 'Encryption'],
    tables: [
      {
        name: 'patients',
        schema: `CREATE TABLE patients (
  id SERIAL PRIMARY KEY,
  medical_record_number VARCHAR(20) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  date_of_birth DATE NOT NULL,
  gender VARCHAR(10),
  blood_type VARCHAR(5),
  phone VARCHAR(20),
  email VARCHAR(255),
  emergency_contact_name VARCHAR(100),
  emergency_contact_phone VARCHAR(20),
  insurance_provider VARCHAR(100),
  insurance_id VARCHAR(50),
  allergies TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);`
      },
      {
        name: 'doctors',
        schema: `CREATE TABLE doctors (
  id SERIAL PRIMARY KEY,
  employee_id VARCHAR(20) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  specialization VARCHAR(100),
  department_id INT REFERENCES departments(id),
  license_number VARCHAR(50),
  phone VARCHAR(20),
  email VARCHAR(255),
  is_available BOOLEAN DEFAULT true
);`
      },
      {
        name: 'appointments',
        schema: `CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  patient_id INT REFERENCES patients(id),
  doctor_id INT REFERENCES doctors(id),
  appointment_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  status VARCHAR(20) DEFAULT 'scheduled', -- scheduled, confirmed, completed, cancelled, no-show
  type VARCHAR(50), -- consultation, follow-up, procedure
  reason TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  CONSTRAINT no_overlap EXCLUDE USING gist (
    doctor_id WITH =,
    tsrange(appointment_date + start_time, appointment_date + end_time) WITH &&
  )
);`
      },
      {
        name: 'medical_records',
        schema: `CREATE TABLE medical_records (
  id SERIAL PRIMARY KEY,
  patient_id INT REFERENCES patients(id),
  doctor_id INT REFERENCES doctors(id),
  appointment_id INT REFERENCES appointments(id),
  visit_date DATE NOT NULL,
  chief_complaint TEXT,
  diagnosis TEXT,
  diagnosis_code VARCHAR(20), -- ICD-10 code
  treatment_plan TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);`
      },
      {
        name: 'prescriptions',
        schema: `CREATE TABLE prescriptions (
  id SERIAL PRIMARY KEY,
  medical_record_id INT REFERENCES medical_records(id),
  patient_id INT REFERENCES patients(id),
  doctor_id INT REFERENCES doctors(id),
  medication_name VARCHAR(200) NOT NULL,
  dosage VARCHAR(100),
  frequency VARCHAR(100),
  duration VARCHAR(50),
  quantity INT,
  refills_allowed INT DEFAULT 0,
  refills_used INT DEFAULT 0,
  prescribed_date DATE DEFAULT CURRENT_DATE,
  notes TEXT
);`
      },
      {
        name: 'lab_results',
        schema: `CREATE TABLE lab_results (
  id SERIAL PRIMARY KEY,
  patient_id INT REFERENCES patients(id),
  doctor_id INT REFERENCES doctors(id),
  test_name VARCHAR(200) NOT NULL,
  test_code VARCHAR(50),
  result_value VARCHAR(100),
  unit VARCHAR(50),
  reference_range VARCHAR(100),
  status VARCHAR(20) DEFAULT 'pending', -- pending, completed, abnormal
  ordered_date DATE,
  result_date DATE,
  notes TEXT
);`
      }
    ],
    relationships: [
      'Patients have many Appointments with Doctors',
      'Medical Records belong to Patient and Doctor',
      'Prescriptions are linked to Medical Records',
      'Lab Results ordered by Doctors for Patients',
      'Doctors belong to Departments'
    ],
    indexes: [
      'CREATE INDEX idx_patients_mrn ON patients(medical_record_number);',
      'CREATE INDEX idx_appointments_date ON appointments(appointment_date, doctor_id);',
      'CREATE INDEX idx_appointments_patient ON appointments(patient_id, status);',
      'CREATE INDEX idx_records_patient ON medical_records(patient_id, visit_date);',
      'CREATE INDEX idx_prescriptions_patient ON prescriptions(patient_id, prescribed_date);'
    ],
    sampleQueries: [
      {
        name: 'Patient Medical History',
        query: `SELECT mr.visit_date, d.first_name || ' ' || d.last_name as doctor,
       d.specialization, mr.diagnosis, mr.treatment_plan
FROM medical_records mr
JOIN doctors d ON mr.doctor_id = d.id
WHERE mr.patient_id = $1
ORDER BY mr.visit_date DESC;`
      },
      {
        name: 'Doctor Schedule Today',
        query: `SELECT a.start_time, a.end_time, a.type, a.status,
       p.first_name || ' ' || p.last_name as patient,
       a.reason
FROM appointments a
JOIN patients p ON a.patient_id = p.id
WHERE a.doctor_id = $1 AND a.appointment_date = CURRENT_DATE
ORDER BY a.start_time;`
      },
      {
        name: 'Active Prescriptions',
        query: `SELECT p.medication_name, p.dosage, p.frequency, p.duration,
       d.first_name || ' ' || d.last_name as prescribed_by,
       p.refills_allowed - p.refills_used as refills_remaining
FROM prescriptions p
JOIN doctors d ON p.doctor_id = d.id
WHERE p.patient_id = $1
  AND p.prescribed_date + p.duration::interval > CURRENT_DATE;`
      }
    ],
    commonMistakes: [
      { mistake: 'Not encrypting sensitive data', consequence: 'HIPAA violations, data breaches', solution: 'Encrypt PII at rest and in transit, use column-level encryption' },
      { mistake: 'No appointment overlap prevention', consequence: 'Double-booking doctors', solution: 'Use PostgreSQL EXCLUDE constraint with tsrange' },
      { mistake: 'Missing audit trail', consequence: 'Cannot track who accessed/modified records', solution: 'Implement audit logging for all medical record access' }
    ],
    designTips: [
      'Use PostgreSQL EXCLUDE constraint to prevent overlapping appointments',
      'Store allergies as array for easy checking',
      'Implement row-level security for HIPAA compliance',
      'Consider separate audit log table for access tracking',
      'Use ICD-10 codes for standardized diagnosis coding'
    ]
  }
];
