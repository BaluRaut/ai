// ER Diagram configurations for all database design examples
// With proper spacing between tables for better readability

export const diagramData = {
  // Social Network
  'social-network': {
    tables: [
      { id: 'users', name: 'users', position: { x: 50, y: 150 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'username', type: 'varchar' }, { name: 'email', type: 'varchar' }] },
      { id: 'profiles', name: 'profiles', position: { x: 380, y: 50 }, color: '#388e3c',
        columns: [{ name: 'user_id', type: 'FK', fk: true }, { name: 'bio', type: 'text' }, { name: 'avatar_url', type: 'varchar' }] },
      { id: 'posts', name: 'posts', position: { x: 380, y: 280 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'content', type: 'text' }, { name: 'created_at', type: 'timestamp' }] },
      { id: 'friendships', name: 'friendships', position: { x: 50, y: 400 }, color: '#7b1fa2',
        columns: [{ name: 'user_id', type: 'FK', fk: true }, { name: 'friend_id', type: 'FK', fk: true }, { name: 'status', type: 'enum' }] },
      { id: 'likes', name: 'likes', position: { x: 650, y: 280 }, color: '#0097a7',
        columns: [{ name: 'user_id', type: 'FK', fk: true }, { name: 'post_id', type: 'FK', fk: true }] },
      { id: 'comments', name: 'comments', position: { x: 650, y: 480 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'post_id', type: 'FK', fk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'content', type: 'text' }] },
    ],
    relationships: [
      { from: 'users', to: 'profiles', label: '1:1' },
      { from: 'users', to: 'posts', label: '1:N' },
      { from: 'users', to: 'friendships', label: '1:N' },
      { from: 'users', to: 'likes', label: '1:N' },
      { from: 'posts', to: 'likes', label: '1:N' },
      { from: 'posts', to: 'comments', label: '1:N' },
      { from: 'users', to: 'comments', label: '1:N' },
    ]
  },

  // Booking System (Hotel/Appointment)
  'booking-system': {
    tables: [
      { id: 'users', name: 'users', position: { x: 50, y: 150 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'email', type: 'varchar' }, { name: 'name', type: 'varchar' }] },
      { id: 'services', name: 'services', position: { x: 400, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'duration', type: 'int' }, { name: 'price', type: 'decimal' }] },
      { id: 'providers', name: 'providers', position: { x: 700, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'specialty', type: 'varchar' }] },
      { id: 'availability', name: 'availability', position: { x: 700, y: 280 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'provider_id', type: 'FK', fk: true }, { name: 'date', type: 'date' }, { name: 'slots', type: 'jsonb' }] },
      { id: 'bookings', name: 'bookings', position: { x: 350, y: 320 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'provider_id', type: 'FK', fk: true }, { name: 'service_id', type: 'FK', fk: true }, { name: 'datetime', type: 'timestamp' }] },
      { id: 'payments', name: 'payments', position: { x: 50, y: 420 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'booking_id', type: 'FK', fk: true }, { name: 'amount', type: 'decimal' }, { name: 'status', type: 'enum' }] },
    ],
    relationships: [
      { from: 'users', to: 'bookings', label: '1:N' },
      { from: 'providers', to: 'bookings', label: '1:N' },
      { from: 'services', to: 'bookings', label: '1:N' },
      { from: 'providers', to: 'availability', label: '1:N' },
      { from: 'bookings', to: 'payments', label: '1:1' },
    ]
  },

  // Task Management
  'task-management': {
    tables: [
      { id: 'users', name: 'users', position: { x: 50, y: 150 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'email', type: 'varchar' }, { name: 'name', type: 'varchar' }] },
      { id: 'projects', name: 'projects', position: { x: 380, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'owner_id', type: 'FK', fk: true }] },
      { id: 'boards', name: 'boards', position: { x: 650, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'project_id', type: 'FK', fk: true }, { name: 'name', type: 'varchar' }] },
      { id: 'lists', name: 'lists', position: { x: 650, y: 280 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'board_id', type: 'FK', fk: true }, { name: 'name', type: 'varchar' }, { name: 'position', type: 'int' }] },
      { id: 'tasks', name: 'tasks', position: { x: 380, y: 320 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'list_id', type: 'FK', fk: true }, { name: 'assignee_id', type: 'FK', fk: true }, { name: 'title', type: 'varchar' }, { name: 'due_date', type: 'date' }] },
      { id: 'comments', name: 'task_comments', position: { x: 100, y: 450 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'task_id', type: 'FK', fk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'content', type: 'text' }] },
    ],
    relationships: [
      { from: 'users', to: 'projects', label: '1:N (owner)' },
      { from: 'projects', to: 'boards', label: '1:N' },
      { from: 'boards', to: 'lists', label: '1:N' },
      { from: 'lists', to: 'tasks', label: '1:N' },
      { from: 'users', to: 'tasks', label: '1:N (assignee)' },
      { from: 'tasks', to: 'comments', label: '1:N' },
    ]
  },

  // Subscription SaaS
  'subscription-saas': {
    tables: [
      { id: 'organizations', name: 'organizations', position: { x: 50, y: 50 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'slug', type: 'varchar' }] },
      { id: 'users', name: 'users', position: { x: 50, y: 300 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'org_id', type: 'FK', fk: true }, { name: 'email', type: 'varchar' }, { name: 'role', type: 'enum' }] },
      { id: 'plans', name: 'plans', position: { x: 400, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'price', type: 'decimal' }, { name: 'features', type: 'jsonb' }] },
      { id: 'subscriptions', name: 'subscriptions', position: { x: 400, y: 280 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'org_id', type: 'FK', fk: true }, { name: 'plan_id', type: 'FK', fk: true }, { name: 'status', type: 'enum' }] },
      { id: 'invoices', name: 'invoices', position: { x: 700, y: 200 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'subscription_id', type: 'FK', fk: true }, { name: 'amount', type: 'decimal' }, { name: 'status', type: 'enum' }] },
      { id: 'usage', name: 'usage_records', position: { x: 700, y: 400 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'subscription_id', type: 'FK', fk: true }, { name: 'metric', type: 'varchar' }, { name: 'quantity', type: 'int' }] },
    ],
    relationships: [
      { from: 'organizations', to: 'users', label: '1:N' },
      { from: 'organizations', to: 'subscriptions', label: '1:N' },
      { from: 'plans', to: 'subscriptions', label: '1:N' },
      { from: 'subscriptions', to: 'invoices', label: '1:N' },
      { from: 'subscriptions', to: 'usage', label: '1:N' },
    ]
  },

  // Aliases for mismatched IDs
  'inventory-management': {
    tables: [
      { id: 'warehouses', name: 'warehouses', position: { x: 50, y: 50 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'location', type: 'varchar' }] },
      { id: 'products', name: 'products', position: { x: 400, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'sku', type: 'varchar' }, { name: 'name', type: 'varchar' }] },
      { id: 'inventory', name: 'inventory', position: { x: 220, y: 280 }, color: '#f57c00',
        columns: [{ name: 'product_id', type: 'FK', fk: true }, { name: 'warehouse_id', type: 'FK', fk: true }, { name: 'quantity', type: 'int' }] },
      { id: 'movements', name: 'stock_movements', position: { x: 550, y: 280 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'product_id', type: 'FK', fk: true }, { name: 'type', type: 'enum' }, { name: 'quantity', type: 'int' }] },
      { id: 'suppliers', name: 'suppliers', position: { x: 750, y: 50 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }] },
      { id: 'po', name: 'purchase_orders', position: { x: 750, y: 280 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'supplier_id', type: 'FK', fk: true }, { name: 'status', type: 'enum' }] },
    ],
    relationships: [
      { from: 'warehouses', to: 'inventory', label: '1:N' },
      { from: 'products', to: 'inventory', label: '1:N' },
      { from: 'products', to: 'movements', label: '1:N' },
      { from: 'suppliers', to: 'po', label: '1:N' },
    ]
  },

  'messaging-app': {
    tables: [
      { id: 'users', name: 'users', position: { x: 50, y: 150 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'username', type: 'varchar' }, { name: 'status', type: 'enum' }] },
      { id: 'conversations', name: 'conversations', position: { x: 400, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'type', type: 'enum' }, { name: 'created_at', type: 'timestamp' }] },
      { id: 'participants', name: 'participants', position: { x: 220, y: 320 }, color: '#f57c00',
        columns: [{ name: 'conversation_id', type: 'FK', fk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'role', type: 'enum' }] },
      { id: 'messages', name: 'messages', position: { x: 600, y: 280 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'conversation_id', type: 'FK', fk: true }, { name: 'sender_id', type: 'FK', fk: true }, { name: 'content', type: 'text' }] },
      { id: 'read_receipts', name: 'read_receipts', position: { x: 450, y: 480 }, color: '#0097a7',
        columns: [{ name: 'message_id', type: 'FK', fk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'read_at', type: 'timestamp' }] },
    ],
    relationships: [
      { from: 'users', to: 'participants', label: '1:N' },
      { from: 'conversations', to: 'participants', label: '1:N' },
      { from: 'conversations', to: 'messages', label: '1:N' },
      { from: 'users', to: 'messages', label: '1:N' },
      { from: 'messages', to: 'read_receipts', label: '1:N' },
    ]
  },

  'ride-sharing': {
    tables: [
      { id: 'users', name: 'users', position: { x: 50, y: 150 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'phone', type: 'varchar' }, { name: 'rating', type: 'decimal' }] },
      { id: 'drivers', name: 'drivers', position: { x: 380, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'license', type: 'varchar' }, { name: 'status', type: 'enum' }] },
      { id: 'vehicles', name: 'vehicles', position: { x: 700, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'driver_id', type: 'FK', fk: true }, { name: 'plate', type: 'varchar' }] },
      { id: 'rides', name: 'rides', position: { x: 320, y: 300 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'rider_id', type: 'FK', fk: true }, { name: 'driver_id', type: 'FK', fk: true }, { name: 'status', type: 'enum' }] },
      { id: 'tracking', name: 'ride_tracking', position: { x: 600, y: 420 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'ride_id', type: 'FK', fk: true }, { name: 'location', type: 'point' }] },
      { id: 'payments', name: 'payments', position: { x: 50, y: 420 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'ride_id', type: 'FK', fk: true }, { name: 'amount', type: 'decimal' }] },
    ],
    relationships: [
      { from: 'users', to: 'drivers', label: '1:1' },
      { from: 'drivers', to: 'vehicles', label: '1:N' },
      { from: 'users', to: 'rides', label: '1:N (rider)' },
      { from: 'drivers', to: 'rides', label: '1:N' },
      { from: 'rides', to: 'tracking', label: '1:N' },
      { from: 'rides', to: 'payments', label: '1:1' },
    ]
  },

  'learning-management': {
    tables: [
      { id: 'users', name: 'users', position: { x: 50, y: 150 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'email', type: 'varchar' }, { name: 'role', type: 'enum' }] },
      { id: 'courses', name: 'courses', position: { x: 380, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'instructor_id', type: 'FK', fk: true }, { name: 'title', type: 'varchar' }, { name: 'price', type: 'decimal' }] },
      { id: 'enrollments', name: 'enrollments', position: { x: 180, y: 350 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'course_id', type: 'FK', fk: true }, { name: 'progress', type: 'int' }] },
      { id: 'lessons', name: 'lessons', position: { x: 680, y: 180 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'course_id', type: 'FK', fk: true }, { name: 'title', type: 'varchar' }, { name: 'order', type: 'int' }] },
      { id: 'progress', name: 'lesson_progress', position: { x: 520, y: 400 }, color: '#0097a7',
        columns: [{ name: 'enrollment_id', type: 'FK', fk: true }, { name: 'lesson_id', type: 'FK', fk: true }, { name: 'completed', type: 'bool' }] },
    ],
    relationships: [
      { from: 'users', to: 'courses', label: '1:N (instructor)' },
      { from: 'users', to: 'enrollments', label: '1:N' },
      { from: 'courses', to: 'enrollments', label: '1:N' },
      { from: 'courses', to: 'lessons', label: '1:N' },
      { from: 'enrollments', to: 'progress', label: '1:N' },
      { from: 'lessons', to: 'progress', label: '1:N' },
    ]
  },

  'event-ticketing': {
    tables: [
      { id: 'venues', name: 'venues', position: { x: 50, y: 50 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'capacity', type: 'int' }] },
      { id: 'events', name: 'events', position: { x: 350, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'venue_id', type: 'FK', fk: true }, { name: 'name', type: 'varchar' }, { name: 'date', type: 'date' }] },
      { id: 'ticket_types', name: 'ticket_types', position: { x: 650, y: 50 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'event_id', type: 'FK', fk: true }, { name: 'name', type: 'varchar' }, { name: 'price', type: 'decimal' }] },
      { id: 'tickets', name: 'tickets', position: { x: 500, y: 300 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'type_id', type: 'FK', fk: true }, { name: 'seat', type: 'varchar' }, { name: 'status', type: 'enum' }] },
      { id: 'orders', name: 'orders', position: { x: 180, y: 300 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'total', type: 'decimal' }] },
    ],
    relationships: [
      { from: 'venues', to: 'events', label: '1:N' },
      { from: 'events', to: 'ticket_types', label: '1:N' },
      { from: 'ticket_types', to: 'tickets', label: '1:N' },
      { from: 'orders', to: 'tickets', label: '1:N' },
    ]
  },

  'healthcare-ehr': {
    tables: [
      { id: 'patients', name: 'patients', position: { x: 50, y: 150 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'mrn', type: 'varchar' }, { name: 'name', type: 'varchar' }] },
      { id: 'doctors', name: 'doctors', position: { x: 400, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'specialization', type: 'varchar' }] },
      { id: 'appointments', name: 'appointments', position: { x: 220, y: 370 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'patient_id', type: 'FK', fk: true }, { name: 'doctor_id', type: 'FK', fk: true }, { name: 'date', type: 'date' }] },
      { id: 'records', name: 'medical_records', position: { x: 600, y: 280 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'patient_id', type: 'FK', fk: true }, { name: 'diagnosis', type: 'text' }] },
      { id: 'prescriptions', name: 'prescriptions', position: { x: 750, y: 480 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'record_id', type: 'FK', fk: true }, { name: 'medication', type: 'varchar' }] },
    ],
    relationships: [
      { from: 'patients', to: 'appointments', label: '1:N' },
      { from: 'doctors', to: 'appointments', label: '1:N' },
      { from: 'patients', to: 'records', label: '1:N' },
      { from: 'records', to: 'prescriptions', label: '1:N' },
    ]
  },

  'ecommerce': {
    tables: [
      { id: 'users', name: 'users', position: { x: 50, y: 50 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'email', type: 'varchar' }, { name: 'name', type: 'varchar' }] },
      { id: 'products', name: 'products', position: { x: 450, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'category_id', type: 'FK', fk: true }, { name: 'name', type: 'varchar' }, { name: 'price', type: 'decimal' }] },
      { id: 'categories', name: 'categories', position: { x: 450, y: 320 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'parent_id', type: 'FK', fk: true }] },
      { id: 'orders', name: 'orders', position: { x: 50, y: 320 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'total', type: 'decimal' }, { name: 'status', type: 'varchar' }] },
      { id: 'order_items', name: 'order_items', position: { x: 250, y: 520 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'order_id', type: 'FK', fk: true }, { name: 'product_id', type: 'FK', fk: true }, { name: 'quantity', type: 'int' }] },
      { id: 'cart', name: 'cart_items', position: { x: 700, y: 180 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'product_id', type: 'FK', fk: true }] },
    ],
    relationships: [
      { from: 'users', to: 'orders', label: '1:N' },
      { from: 'orders', to: 'order_items', label: '1:N' },
      { from: 'products', to: 'order_items', label: '1:N' },
      { from: 'categories', to: 'products', label: '1:N' },
      { from: 'users', to: 'cart', label: '1:N' },
      { from: 'products', to: 'cart', label: '1:N' },
    ]
  },

  'blog-cms': {
    tables: [
      { id: 'users', name: 'users', position: { x: 50, y: 150 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'username', type: 'varchar' }, { name: 'role', type: 'varchar' }] },
      { id: 'posts', name: 'posts', position: { x: 350, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'author_id', type: 'FK', fk: true }, { name: 'title', type: 'varchar' }, { name: 'status', type: 'varchar' }] },
      { id: 'categories', name: 'categories', position: { x: 700, y: 50 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'slug', type: 'varchar' }] },
      { id: 'tags', name: 'tags', position: { x: 700, y: 280 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }] },
      { id: 'post_tags', name: 'post_tags', position: { x: 500, y: 280 }, color: '#7b1fa2',
        columns: [{ name: 'post_id', type: 'FK', fk: true }, { name: 'tag_id', type: 'FK', fk: true }] },
      { id: 'comments', name: 'comments', position: { x: 200, y: 380 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'post_id', type: 'FK', fk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'parent_id', type: 'FK', fk: true }] },
    ],
    relationships: [
      { from: 'users', to: 'posts', label: '1:N' },
      { from: 'posts', to: 'categories', label: 'N:1' },
      { from: 'posts', to: 'post_tags', label: '1:N' },
      { from: 'tags', to: 'post_tags', label: '1:N' },
      { from: 'posts', to: 'comments', label: '1:N' },
      { from: 'users', to: 'comments', label: '1:N' },
    ]
  },

  'chat-messaging': {
    tables: [
      { id: 'users', name: 'users', position: { x: 50, y: 150 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'username', type: 'varchar' }, { name: 'status', type: 'enum' }] },
      { id: 'conversations', name: 'conversations', position: { x: 400, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'type', type: 'enum' }, { name: 'created_at', type: 'timestamp' }] },
      { id: 'participants', name: 'participants', position: { x: 220, y: 320 }, color: '#f57c00',
        columns: [{ name: 'conversation_id', type: 'FK', fk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'role', type: 'enum' }] },
      { id: 'messages', name: 'messages', position: { x: 600, y: 280 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'conversation_id', type: 'FK', fk: true }, { name: 'sender_id', type: 'FK', fk: true }, { name: 'content', type: 'text' }] },
      { id: 'read_receipts', name: 'read_receipts', position: { x: 450, y: 480 }, color: '#0097a7',
        columns: [{ name: 'message_id', type: 'FK', fk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'read_at', type: 'timestamp' }] },
    ],
    relationships: [
      { from: 'users', to: 'participants', label: '1:N' },
      { from: 'conversations', to: 'participants', label: '1:N' },
      { from: 'conversations', to: 'messages', label: '1:N' },
      { from: 'users', to: 'messages', label: '1:N' },
      { from: 'messages', to: 'read_receipts', label: '1:N' },
    ]
  },

  'lms': {
    tables: [
      { id: 'users', name: 'users', position: { x: 50, y: 150 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'email', type: 'varchar' }, { name: 'role', type: 'enum' }] },
      { id: 'courses', name: 'courses', position: { x: 380, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'instructor_id', type: 'FK', fk: true }, { name: 'title', type: 'varchar' }, { name: 'price', type: 'decimal' }] },
      { id: 'enrollments', name: 'enrollments', position: { x: 180, y: 350 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'course_id', type: 'FK', fk: true }, { name: 'progress', type: 'int' }] },
      { id: 'lessons', name: 'lessons', position: { x: 680, y: 180 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'course_id', type: 'FK', fk: true }, { name: 'title', type: 'varchar' }, { name: 'order', type: 'int' }] },
      { id: 'progress', name: 'lesson_progress', position: { x: 520, y: 400 }, color: '#0097a7',
        columns: [{ name: 'enrollment_id', type: 'FK', fk: true }, { name: 'lesson_id', type: 'FK', fk: true }, { name: 'completed', type: 'bool' }] },
    ],
    relationships: [
      { from: 'users', to: 'courses', label: '1:N (instructor)' },
      { from: 'users', to: 'enrollments', label: '1:N' },
      { from: 'courses', to: 'enrollments', label: '1:N' },
      { from: 'courses', to: 'lessons', label: '1:N' },
      { from: 'enrollments', to: 'progress', label: '1:N' },
      { from: 'lessons', to: 'progress', label: '1:N' },
    ]
  },

  'inventory': {
    tables: [
      { id: 'warehouses', name: 'warehouses', position: { x: 50, y: 50 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'location', type: 'varchar' }] },
      { id: 'products', name: 'products', position: { x: 400, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'sku', type: 'varchar' }, { name: 'name', type: 'varchar' }] },
      { id: 'inventory', name: 'inventory', position: { x: 220, y: 280 }, color: '#f57c00',
        columns: [{ name: 'product_id', type: 'FK', fk: true }, { name: 'warehouse_id', type: 'FK', fk: true }, { name: 'quantity', type: 'int' }] },
      { id: 'movements', name: 'stock_movements', position: { x: 550, y: 280 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'product_id', type: 'FK', fk: true }, { name: 'type', type: 'enum' }, { name: 'quantity', type: 'int' }] },
      { id: 'suppliers', name: 'suppliers', position: { x: 750, y: 50 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }] },
      { id: 'po', name: 'purchase_orders', position: { x: 750, y: 280 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'supplier_id', type: 'FK', fk: true }, { name: 'status', type: 'enum' }] },
    ],
    relationships: [
      { from: 'warehouses', to: 'inventory', label: '1:N' },
      { from: 'products', to: 'inventory', label: '1:N' },
      { from: 'products', to: 'movements', label: '1:N' },
      { from: 'suppliers', to: 'po', label: '1:N' },
    ]
  },

  'healthcare': {
    tables: [
      { id: 'patients', name: 'patients', position: { x: 50, y: 150 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'mrn', type: 'varchar' }, { name: 'name', type: 'varchar' }] },
      { id: 'doctors', name: 'doctors', position: { x: 400, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'specialization', type: 'varchar' }] },
      { id: 'appointments', name: 'appointments', position: { x: 220, y: 370 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'patient_id', type: 'FK', fk: true }, { name: 'doctor_id', type: 'FK', fk: true }, { name: 'date', type: 'date' }] },
      { id: 'records', name: 'medical_records', position: { x: 600, y: 280 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'patient_id', type: 'FK', fk: true }, { name: 'diagnosis', type: 'text' }] },
      { id: 'prescriptions', name: 'prescriptions', position: { x: 750, y: 480 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'record_id', type: 'FK', fk: true }, { name: 'medication', type: 'varchar' }] },
    ],
    relationships: [
      { from: 'patients', to: 'appointments', label: '1:N' },
      { from: 'doctors', to: 'appointments', label: '1:N' },
      { from: 'patients', to: 'records', label: '1:N' },
      { from: 'records', to: 'prescriptions', label: '1:N' },
    ]
  },

  'rideshare': {
    tables: [
      { id: 'users', name: 'users', position: { x: 50, y: 150 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'phone', type: 'varchar' }, { name: 'rating', type: 'decimal' }] },
      { id: 'drivers', name: 'drivers', position: { x: 380, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'license', type: 'varchar' }, { name: 'status', type: 'enum' }] },
      { id: 'vehicles', name: 'vehicles', position: { x: 700, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'driver_id', type: 'FK', fk: true }, { name: 'plate', type: 'varchar' }] },
      { id: 'rides', name: 'rides', position: { x: 320, y: 300 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'rider_id', type: 'FK', fk: true }, { name: 'driver_id', type: 'FK', fk: true }, { name: 'status', type: 'enum' }] },
      { id: 'tracking', name: 'ride_tracking', position: { x: 600, y: 420 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'ride_id', type: 'FK', fk: true }, { name: 'location', type: 'point' }] },
      { id: 'payments', name: 'payments', position: { x: 50, y: 420 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'ride_id', type: 'FK', fk: true }, { name: 'amount', type: 'decimal' }] },
    ],
    relationships: [
      { from: 'users', to: 'drivers', label: '1:1' },
      { from: 'drivers', to: 'vehicles', label: '1:N' },
      { from: 'users', to: 'rides', label: '1:N (rider)' },
      { from: 'drivers', to: 'rides', label: '1:N' },
      { from: 'rides', to: 'tracking', label: '1:N' },
      { from: 'rides', to: 'payments', label: '1:1' },
    ]
  },

  'job-portal': {
    tables: [
      { id: 'companies', name: 'companies', position: { x: 50, y: 50 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'industry', type: 'varchar' }] },
      { id: 'jobs', name: 'jobs', position: { x: 350, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'company_id', type: 'FK', fk: true }, { name: 'title', type: 'varchar' }, { name: 'skills', type: 'array' }] },
      { id: 'candidates', name: 'candidates', position: { x: 50, y: 300 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'skills', type: 'array' }] },
      { id: 'applications', name: 'applications', position: { x: 350, y: 300 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'job_id', type: 'FK', fk: true }, { name: 'candidate_id', type: 'FK', fk: true }, { name: 'status', type: 'enum' }] },
      { id: 'interviews', name: 'interviews', position: { x: 650, y: 300 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'application_id', type: 'FK', fk: true }, { name: 'scheduled_at', type: 'timestamp' }] },
    ],
    relationships: [
      { from: 'companies', to: 'jobs', label: '1:N' },
      { from: 'jobs', to: 'applications', label: '1:N' },
      { from: 'candidates', to: 'applications', label: '1:N' },
      { from: 'applications', to: 'interviews', label: '1:N' },
    ]
  },

  'hotel': {
    tables: [
      { id: 'hotels', name: 'hotels', position: { x: 50, y: 50 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'stars', type: 'int' }] },
      { id: 'room_types', name: 'room_types', position: { x: 350, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'hotel_id', type: 'FK', fk: true }, { name: 'name', type: 'varchar' }, { name: 'price', type: 'decimal' }] },
      { id: 'rooms', name: 'rooms', position: { x: 650, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'room_type_id', type: 'FK', fk: true }, { name: 'number', type: 'varchar' }] },
      { id: 'guests', name: 'guests', position: { x: 50, y: 300 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'email', type: 'varchar' }] },
      { id: 'reservations', name: 'reservations', position: { x: 380, y: 300 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'guest_id', type: 'FK', fk: true }, { name: 'room_id', type: 'FK', fk: true }, { name: 'check_in', type: 'date' }] },
    ],
    relationships: [
      { from: 'hotels', to: 'room_types', label: '1:N' },
      { from: 'room_types', to: 'rooms', label: '1:N' },
      { from: 'guests', to: 'reservations', label: '1:N' },
      { from: 'rooms', to: 'reservations', label: '1:N' },
    ]
  },

  'food-delivery': {
    tables: [
      { id: 'restaurants', name: 'restaurants', position: { x: 50, y: 50 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'location', type: 'point' }] },
      { id: 'menu', name: 'menu_items', position: { x: 380, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'restaurant_id', type: 'FK', fk: true }, { name: 'name', type: 'varchar' }, { name: 'price', type: 'decimal' }] },
      { id: 'customers', name: 'customers', position: { x: 50, y: 300 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'address', type: 'text' }] },
      { id: 'orders', name: 'orders', position: { x: 350, y: 300 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'customer_id', type: 'FK', fk: true }, { name: 'restaurant_id', type: 'FK', fk: true }, { name: 'status', type: 'enum' }] },
      { id: 'drivers', name: 'drivers', position: { x: 650, y: 180 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'location', type: 'point' }] },
    ],
    relationships: [
      { from: 'restaurants', to: 'menu', label: '1:N' },
      { from: 'customers', to: 'orders', label: '1:N' },
      { from: 'restaurants', to: 'orders', label: '1:N' },
      { from: 'drivers', to: 'orders', label: '1:N' },
    ]
  },

  'events': {
    tables: [
      { id: 'venues', name: 'venues', position: { x: 50, y: 50 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'capacity', type: 'int' }] },
      { id: 'events', name: 'events', position: { x: 350, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'venue_id', type: 'FK', fk: true }, { name: 'name', type: 'varchar' }, { name: 'date', type: 'date' }] },
      { id: 'ticket_types', name: 'ticket_types', position: { x: 650, y: 50 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'event_id', type: 'FK', fk: true }, { name: 'name', type: 'varchar' }, { name: 'price', type: 'decimal' }] },
      { id: 'tickets', name: 'tickets', position: { x: 500, y: 300 }, color: '#7b1fa2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'type_id', type: 'FK', fk: true }, { name: 'seat', type: 'varchar' }, { name: 'status', type: 'enum' }] },
      { id: 'orders', name: 'orders', position: { x: 180, y: 300 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'total', type: 'decimal' }] },
    ],
    relationships: [
      { from: 'venues', to: 'events', label: '1:N' },
      { from: 'events', to: 'ticket_types', label: '1:N' },
      { from: 'ticket_types', to: 'tickets', label: '1:N' },
      { from: 'orders', to: 'tickets', label: '1:N' },
    ]
  },

  'fitness': {
    tables: [
      { id: 'members', name: 'members', position: { x: 50, y: 150 }, color: '#1976d2',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'user_id', type: 'FK', fk: true }, { name: 'membership', type: 'enum' }] },
      { id: 'trainers', name: 'trainers', position: { x: 400, y: 50 }, color: '#388e3c',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'name', type: 'varchar' }, { name: 'specialization', type: 'array' }] },
      { id: 'classes', name: 'classes', position: { x: 400, y: 280 }, color: '#f57c00',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'trainer_id', type: 'FK', fk: true }, { name: 'name', type: 'varchar' }, { name: 'time', type: 'time' }] },
      { id: 'bookings', name: 'class_bookings', position: { x: 180, y: 420 }, color: '#7b1fa2',
        columns: [{ name: 'class_id', type: 'FK', fk: true }, { name: 'member_id', type: 'FK', fk: true }, { name: 'status', type: 'enum' }] },
      { id: 'workouts', name: 'workouts', position: { x: 700, y: 200 }, color: '#0097a7',
        columns: [{ name: 'id', type: 'PK', pk: true }, { name: 'member_id', type: 'FK', fk: true }, { name: 'date', type: 'date' }] },
    ],
    relationships: [
      { from: 'trainers', to: 'classes', label: '1:N' },
      { from: 'classes', to: 'bookings', label: '1:N' },
      { from: 'members', to: 'bookings', label: '1:N' },
      { from: 'members', to: 'workouts', label: '1:N' },
    ]
  }
};

export default diagramData;
