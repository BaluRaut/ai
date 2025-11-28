// Database Design Example 8: Job Portal / Recruitment
export const databaseDesignExamples8 = [
  {
    id: 'job-portal',
    title: 'Job Portal / Recruitment Platform',
    description: 'LinkedIn-style job board with companies, jobs, applications, and matching',
    difficulty: 'Intermediate',
    technologies: ['PostgreSQL', 'Elasticsearch'],
    tables: [
      {
        name: 'companies',
        schema: `CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  slug VARCHAR(200) UNIQUE NOT NULL,
  description TEXT,
  industry VARCHAR(100),
  company_size VARCHAR(50), -- 1-10, 11-50, 51-200, 201-500, 500+
  website VARCHAR(255),
  logo_url VARCHAR(500),
  headquarters VARCHAR(200),
  founded_year INT,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);`
      },
      {
        name: 'jobs',
        schema: `CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  company_id INT REFERENCES companies(id),
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(250) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT,
  responsibilities TEXT,
  employment_type VARCHAR(50), -- full-time, part-time, contract, internship
  experience_level VARCHAR(50), -- entry, mid, senior, lead, executive
  location VARCHAR(200),
  is_remote BOOLEAN DEFAULT false,
  salary_min DECIMAL(12,2),
  salary_max DECIMAL(12,2),
  salary_currency VARCHAR(3) DEFAULT 'USD',
  skills TEXT[], -- PostgreSQL array
  status VARCHAR(20) DEFAULT 'draft', -- draft, active, paused, closed
  posted_at TIMESTAMP,
  expires_at TIMESTAMP,
  created_by INT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);`
      },
      {
        name: 'candidates',
        schema: `CREATE TABLE candidates (
  id SERIAL PRIMARY KEY,
  user_id INT UNIQUE REFERENCES users(id),
  headline VARCHAR(200),
  summary TEXT,
  resume_url VARCHAR(500),
  linkedin_url VARCHAR(255),
  github_url VARCHAR(255),
  portfolio_url VARCHAR(255),
  current_company VARCHAR(200),
  current_title VARCHAR(200),
  years_experience INT,
  expected_salary DECIMAL(12,2),
  open_to_work BOOLEAN DEFAULT true,
  preferred_locations TEXT[],
  preferred_job_types TEXT[],
  skills TEXT[]
);`
      },
      {
        name: 'applications',
        schema: `CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
  job_id INT REFERENCES jobs(id),
  candidate_id INT REFERENCES candidates(id),
  status VARCHAR(30) DEFAULT 'applied', -- applied, screening, interview, offer, hired, rejected, withdrawn
  cover_letter TEXT,
  resume_url VARCHAR(500),
  answers JSONB, -- screening questions answers
  applied_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(job_id, candidate_id)
);`
      },
      {
        name: 'interviews',
        schema: `CREATE TABLE interviews (
  id SERIAL PRIMARY KEY,
  application_id INT REFERENCES applications(id),
  interview_type VARCHAR(50), -- phone, video, onsite, technical
  scheduled_at TIMESTAMP NOT NULL,
  duration_minutes INT DEFAULT 60,
  location VARCHAR(200),
  meeting_link VARCHAR(500),
  interviewer_ids INT[],
  status VARCHAR(20) DEFAULT 'scheduled', -- scheduled, completed, cancelled, no-show
  feedback TEXT,
  rating INT CHECK (rating BETWEEN 1 AND 5),
  created_at TIMESTAMP DEFAULT NOW()
);`
      },
      {
        name: 'saved_jobs',
        schema: `CREATE TABLE saved_jobs (
  candidate_id INT REFERENCES candidates(id),
  job_id INT REFERENCES jobs(id),
  saved_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (candidate_id, job_id)
);`
      },
      {
        name: 'job_views',
        schema: `CREATE TABLE job_views (
  id SERIAL PRIMARY KEY,
  job_id INT REFERENCES jobs(id),
  candidate_id INT REFERENCES candidates(id),
  viewed_at TIMESTAMP DEFAULT NOW()
);`
      }
    ],
    relationships: [
      'Companies post many Jobs',
      'Candidates apply to Jobs via Applications',
      'Applications can have multiple Interviews',
      'Candidates can save Jobs (bookmarks)',
      'Job Views track engagement analytics'
    ],
    indexes: [
      'CREATE INDEX idx_jobs_company ON jobs(company_id, status);',
      'CREATE INDEX idx_jobs_status ON jobs(status, posted_at DESC);',
      'CREATE INDEX idx_jobs_location ON jobs(location) WHERE status = \'active\';',
      'CREATE INDEX idx_jobs_skills ON jobs USING GIN(skills);',
      'CREATE INDEX idx_applications_job ON applications(job_id, status);',
      'CREATE INDEX idx_applications_candidate ON applications(candidate_id, applied_at DESC);',
      'CREATE INDEX idx_candidates_skills ON candidates USING GIN(skills);'
    ],
    sampleQueries: [
      {
        name: 'Search Jobs with Skill Match',
        query: `SELECT j.id, j.title, c.name as company, j.location,
       j.salary_min, j.salary_max, j.employment_type,
       array_length(j.skills & $1::text[], 1) as skill_match_count
FROM jobs j
JOIN companies c ON j.company_id = c.id
WHERE j.status = 'active'
  AND j.skills && $1::text[] -- has any matching skill
  AND ($2 IS NULL OR j.is_remote = $2)
  AND ($3 IS NULL OR j.location ILIKE '%' || $3 || '%')
ORDER BY skill_match_count DESC, j.posted_at DESC
LIMIT 20;`
      },
      {
        name: 'Application Pipeline',
        query: `SELECT a.status, COUNT(*) as count,
       AVG(EXTRACT(EPOCH FROM (a.updated_at - a.applied_at))/86400)::int as avg_days
FROM applications a
WHERE a.job_id = $1
GROUP BY a.status
ORDER BY CASE a.status
  WHEN 'applied' THEN 1
  WHEN 'screening' THEN 2
  WHEN 'interview' THEN 3
  WHEN 'offer' THEN 4
  WHEN 'hired' THEN 5
  ELSE 6 END;`
      },
      {
        name: 'Candidate Recommendations',
        query: `SELECT c.id, u.first_name, u.last_name, c.headline,
       c.years_experience, c.current_company,
       array_length(c.skills & j.skills, 1) as matching_skills
FROM candidates c
JOIN users u ON c.user_id = u.id
CROSS JOIN jobs j
WHERE j.id = $1
  AND c.open_to_work = true
  AND c.skills && j.skills
  AND c.id NOT IN (SELECT candidate_id FROM applications WHERE job_id = $1)
ORDER BY matching_skills DESC, c.years_experience DESC
LIMIT 20;`
      }
    ],
    commonMistakes: [
      { mistake: 'Not using array columns for skills', consequence: 'Complex join tables, slow skill matching', solution: 'Use TEXT[] with GIN index for fast containment queries' },
      { mistake: 'Allowing duplicate applications', consequence: 'Candidates apply multiple times to same job', solution: 'Add UNIQUE constraint on (job_id, candidate_id)' },
      { mistake: 'No status history tracking', consequence: 'Cannot analyze hiring funnel timing', solution: 'Add application_status_history table with timestamps' }
    ],
    designTips: [
      'Use PostgreSQL arrays with GIN indexes for skill matching',
      'Consider Elasticsearch for full-text job search',
      'Track application status history for funnel analytics',
      'Implement job expiration with background job',
      'Store screening question answers as JSONB for flexibility'
    ]
  }
];
