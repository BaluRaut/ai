// API Routes for all database design examples

export const apiRoutes = {
  'ecommerce': {
    title: 'E-Commerce API Routes',
    baseUrl: '/api/v1',
    routes: [
      // Products
      { method: 'GET', path: '/products', description: 'List all products with pagination', params: 'page, limit, category, sort' },
      { method: 'GET', path: '/products/:id', description: 'Get single product details', params: 'id' },
      { method: 'POST', path: '/products', description: 'Create new product (admin)', body: '{ name, price, category_id, description }' },
      { method: 'PUT', path: '/products/:id', description: 'Update product', body: '{ name, price, stock }' },
      { method: 'DELETE', path: '/products/:id', description: 'Delete product (soft delete)' },
      { method: 'GET', path: '/products/search', description: 'Search products', params: 'q, min_price, max_price' },
      
      // Categories
      { method: 'GET', path: '/categories', description: 'List all categories with tree structure' },
      { method: 'GET', path: '/categories/:id/products', description: 'Get products in category' },
      
      // Cart
      { method: 'GET', path: '/cart', description: 'Get current user cart' },
      { method: 'POST', path: '/cart/items', description: 'Add item to cart', body: '{ product_id, quantity }' },
      { method: 'PUT', path: '/cart/items/:id', description: 'Update cart item quantity', body: '{ quantity }' },
      { method: 'DELETE', path: '/cart/items/:id', description: 'Remove item from cart' },
      { method: 'DELETE', path: '/cart', description: 'Clear entire cart' },
      
      // Orders
      { method: 'GET', path: '/orders', description: 'List user orders', params: 'status, page' },
      { method: 'GET', path: '/orders/:id', description: 'Get order details with items' },
      { method: 'POST', path: '/orders', description: 'Create order from cart', body: '{ shipping_address_id, payment_method }' },
      { method: 'PUT', path: '/orders/:id/cancel', description: 'Cancel order (if pending)' },
      
      // Users
      { method: 'POST', path: '/auth/register', description: 'Register new user', body: '{ email, password, name }' },
      { method: 'POST', path: '/auth/login', description: 'Login user', body: '{ email, password }' },
      { method: 'GET', path: '/users/me', description: 'Get current user profile' },
      { method: 'PUT', path: '/users/me', description: 'Update profile', body: '{ name, phone }' },
      { method: 'GET', path: '/users/me/addresses', description: 'List user addresses' },
      { method: 'POST', path: '/users/me/addresses', description: 'Add new address', body: '{ street, city, zip }' },
      
      // Reviews
      { method: 'GET', path: '/products/:id/reviews', description: 'Get product reviews', params: 'page, sort' },
      { method: 'POST', path: '/products/:id/reviews', description: 'Add review', body: '{ rating, title, content }' },
    ]
  },

  'blog-cms': {
    title: 'Blog/CMS API Routes',
    baseUrl: '/api/v1',
    routes: [
      // Posts
      { method: 'GET', path: '/posts', description: 'List published posts', params: 'page, category, tag, author' },
      { method: 'GET', path: '/posts/:slug', description: 'Get single post by slug' },
      { method: 'POST', path: '/posts', description: 'Create new post', body: '{ title, content, category_id, tags[] }' },
      { method: 'PUT', path: '/posts/:id', description: 'Update post', body: '{ title, content, status }' },
      { method: 'DELETE', path: '/posts/:id', description: 'Delete post' },
      { method: 'PUT', path: '/posts/:id/publish', description: 'Publish draft post' },
      { method: 'GET', path: '/posts/:id/versions', description: 'Get post version history' },
      
      // Categories
      { method: 'GET', path: '/categories', description: 'List all categories' },
      { method: 'POST', path: '/categories', description: 'Create category', body: '{ name, slug, description }' },
      
      // Tags
      { method: 'GET', path: '/tags', description: 'List all tags with post count' },
      { method: 'GET', path: '/tags/:slug/posts', description: 'Get posts by tag' },
      
      // Comments
      { method: 'GET', path: '/posts/:id/comments', description: 'Get post comments (threaded)' },
      { method: 'POST', path: '/posts/:id/comments', description: 'Add comment', body: '{ content, parent_id? }' },
      { method: 'PUT', path: '/comments/:id', description: 'Edit comment' },
      { method: 'DELETE', path: '/comments/:id', description: 'Delete comment' },
      { method: 'PUT', path: '/comments/:id/approve', description: 'Approve comment (admin)' },
      
      // Media
      { method: 'GET', path: '/media', description: 'List uploaded media', params: 'type, page' },
      { method: 'POST', path: '/media/upload', description: 'Upload media file', body: 'multipart/form-data' },
      { method: 'DELETE', path: '/media/:id', description: 'Delete media file' },
      
      // Authors
      { method: 'GET', path: '/authors/:username', description: 'Get author profile' },
      { method: 'GET', path: '/authors/:username/posts', description: 'Get author posts' },
    ]
  },

  'chat-messaging': {
    title: 'Chat/Messaging API Routes',
    baseUrl: '/api/v1',
    routes: [
      // Conversations
      { method: 'GET', path: '/conversations', description: 'List user conversations', params: 'page' },
      { method: 'GET', path: '/conversations/:id', description: 'Get conversation details' },
      { method: 'POST', path: '/conversations', description: 'Create new conversation', body: '{ participant_ids[], type }' },
      { method: 'POST', path: '/conversations/:id/participants', description: 'Add participant to group' },
      { method: 'DELETE', path: '/conversations/:id/leave', description: 'Leave conversation' },
      
      // Messages
      { method: 'GET', path: '/conversations/:id/messages', description: 'Get messages', params: 'before, limit' },
      { method: 'POST', path: '/conversations/:id/messages', description: 'Send message', body: '{ content, type, attachments[] }' },
      { method: 'PUT', path: '/messages/:id', description: 'Edit message', body: '{ content }' },
      { method: 'DELETE', path: '/messages/:id', description: 'Delete message' },
      { method: 'POST', path: '/messages/:id/reactions', description: 'Add reaction', body: '{ emoji }' },
      
      // Read receipts
      { method: 'POST', path: '/conversations/:id/read', description: 'Mark conversation as read' },
      { method: 'GET', path: '/messages/:id/read-by', description: 'Get who read the message' },
      
      // Typing
      { method: 'POST', path: '/conversations/:id/typing', description: 'Send typing indicator' },
      
      // Users
      { method: 'GET', path: '/users/search', description: 'Search users', params: 'q' },
      { method: 'GET', path: '/users/:id/status', description: 'Get user online status' },
      { method: 'PUT', path: '/users/me/status', description: 'Set online/away status', body: '{ status }' },
      
      // WebSocket
      { method: 'WS', path: '/ws', description: 'WebSocket connection for real-time messages' },
    ]
  },

  'lms': {
    title: 'LMS API Routes',
    baseUrl: '/api/v1',
    routes: [
      // Courses
      { method: 'GET', path: '/courses', description: 'List available courses', params: 'category, level, page' },
      { method: 'GET', path: '/courses/:slug', description: 'Get course details with curriculum' },
      { method: 'POST', path: '/courses', description: 'Create course (instructor)', body: '{ title, description, price }' },
      { method: 'PUT', path: '/courses/:id', description: 'Update course' },
      { method: 'PUT', path: '/courses/:id/publish', description: 'Publish course' },
      
      // Lessons
      { method: 'GET', path: '/courses/:id/lessons', description: 'Get course lessons' },
      { method: 'GET', path: '/lessons/:id', description: 'Get lesson content (enrolled only)' },
      { method: 'POST', path: '/courses/:id/lessons', description: 'Add lesson', body: '{ title, content, video_url, order }' },
      { method: 'PUT', path: '/lessons/:id', description: 'Update lesson' },
      
      // Enrollment
      { method: 'POST', path: '/courses/:id/enroll', description: 'Enroll in course' },
      { method: 'GET', path: '/enrollments', description: 'Get my enrollments' },
      { method: 'GET', path: '/enrollments/:id/progress', description: 'Get course progress' },
      
      // Progress
      { method: 'POST', path: '/lessons/:id/complete', description: 'Mark lesson complete' },
      { method: 'POST', path: '/lessons/:id/progress', description: 'Update progress', body: '{ progress_percent, last_position }' },
      
      // Quizzes
      { method: 'GET', path: '/lessons/:id/quiz', description: 'Get lesson quiz' },
      { method: 'POST', path: '/quizzes/:id/submit', description: 'Submit quiz answers', body: '{ answers[] }' },
      { method: 'GET', path: '/quizzes/:id/results', description: 'Get quiz results' },
      
      // Reviews
      { method: 'GET', path: '/courses/:id/reviews', description: 'Get course reviews' },
      { method: 'POST', path: '/courses/:id/reviews', description: 'Add review', body: '{ rating, content }' },
      
      // Certificates
      { method: 'GET', path: '/certificates', description: 'Get my certificates' },
      { method: 'GET', path: '/certificates/:id/download', description: 'Download certificate PDF' },
    ]
  },

  'inventory': {
    title: 'Inventory Management API Routes',
    baseUrl: '/api/v1',
    routes: [
      // Products
      { method: 'GET', path: '/products', description: 'List products', params: 'category, sku, page' },
      { method: 'GET', path: '/products/:sku', description: 'Get product by SKU' },
      { method: 'POST', path: '/products', description: 'Create product', body: '{ sku, name, category_id, unit_price }' },
      { method: 'PUT', path: '/products/:id', description: 'Update product' },
      
      // Inventory
      { method: 'GET', path: '/inventory', description: 'Get stock levels', params: 'warehouse_id, low_stock' },
      { method: 'GET', path: '/inventory/:product_id', description: 'Get product stock by warehouse' },
      { method: 'POST', path: '/inventory/adjust', description: 'Adjust stock', body: '{ product_id, warehouse_id, quantity, reason }' },
      { method: 'POST', path: '/inventory/transfer', description: 'Transfer between warehouses', body: '{ product_id, from, to, quantity }' },
      
      // Stock Movements
      { method: 'GET', path: '/movements', description: 'Get stock movements', params: 'product_id, type, date_from, date_to' },
      { method: 'GET', path: '/movements/:id', description: 'Get movement details' },
      
      // Purchase Orders
      { method: 'GET', path: '/purchase-orders', description: 'List POs', params: 'status, supplier_id' },
      { method: 'POST', path: '/purchase-orders', description: 'Create PO', body: '{ supplier_id, items[] }' },
      { method: 'PUT', path: '/purchase-orders/:id/send', description: 'Send PO to supplier' },
      { method: 'POST', path: '/purchase-orders/:id/receive', description: 'Receive goods', body: '{ items[] }' },
      
      // Suppliers
      { method: 'GET', path: '/suppliers', description: 'List suppliers' },
      { method: 'POST', path: '/suppliers', description: 'Add supplier', body: '{ name, email, payment_terms }' },
      
      // Warehouses
      { method: 'GET', path: '/warehouses', description: 'List warehouses' },
      { method: 'GET', path: '/warehouses/:id/inventory', description: 'Get warehouse inventory' },
      
      // Reports
      { method: 'GET', path: '/reports/low-stock', description: 'Low stock alert report' },
      { method: 'GET', path: '/reports/valuation', description: 'Inventory valuation report' },
    ]
  },

  'healthcare': {
    title: 'Healthcare System API Routes',
    baseUrl: '/api/v1',
    routes: [
      // Patients
      { method: 'GET', path: '/patients', description: 'Search patients', params: 'q, mrn' },
      { method: 'GET', path: '/patients/:id', description: 'Get patient details' },
      { method: 'POST', path: '/patients', description: 'Register patient', body: '{ name, dob, contact, insurance }' },
      { method: 'PUT', path: '/patients/:id', description: 'Update patient info' },
      { method: 'GET', path: '/patients/:id/history', description: 'Get medical history' },
      
      // Appointments
      { method: 'GET', path: '/appointments', description: 'List appointments', params: 'date, doctor_id, status' },
      { method: 'GET', path: '/doctors/:id/availability', description: 'Get doctor availability', params: 'date' },
      { method: 'POST', path: '/appointments', description: 'Book appointment', body: '{ patient_id, doctor_id, date, time, reason }' },
      { method: 'PUT', path: '/appointments/:id', description: 'Reschedule appointment' },
      { method: 'PUT', path: '/appointments/:id/cancel', description: 'Cancel appointment' },
      { method: 'PUT', path: '/appointments/:id/check-in', description: 'Patient check-in' },
      
      // Medical Records
      { method: 'GET', path: '/patients/:id/records', description: 'Get medical records' },
      { method: 'POST', path: '/records', description: 'Create medical record', body: '{ patient_id, diagnosis, treatment }' },
      { method: 'GET', path: '/records/:id', description: 'Get record details' },
      
      // Prescriptions
      { method: 'GET', path: '/patients/:id/prescriptions', description: 'Get patient prescriptions' },
      { method: 'POST', path: '/prescriptions', description: 'Create prescription', body: '{ patient_id, medications[] }' },
      { method: 'POST', path: '/prescriptions/:id/refill', description: 'Request refill' },
      
      // Lab Results
      { method: 'GET', path: '/patients/:id/labs', description: 'Get lab results' },
      { method: 'POST', path: '/labs/order', description: 'Order lab tests', body: '{ patient_id, tests[] }' },
      { method: 'PUT', path: '/labs/:id/results', description: 'Enter lab results' },
      
      // Doctors
      { method: 'GET', path: '/doctors', description: 'List doctors', params: 'specialization, department' },
      { method: 'GET', path: '/doctors/:id/schedule', description: 'Get doctor schedule' },
    ]
  },

  'rideshare': {
    title: 'Ride-Sharing API Routes',
    baseUrl: '/api/v1',
    routes: [
      // Rides
      { method: 'POST', path: '/rides/estimate', description: 'Get fare estimate', body: '{ pickup, dropoff, ride_type }' },
      { method: 'POST', path: '/rides', description: 'Request ride', body: '{ pickup, dropoff, ride_type, payment_method }' },
      { method: 'GET', path: '/rides/:id', description: 'Get ride details' },
      { method: 'PUT', path: '/rides/:id/cancel', description: 'Cancel ride' },
      { method: 'GET', path: '/rides', description: 'Get ride history', params: 'page' },
      
      // Driver matching
      { method: 'GET', path: '/rides/:id/driver', description: 'Get assigned driver details' },
      { method: 'GET', path: '/rides/:id/track', description: 'Get real-time location' },
      
      // Ratings
      { method: 'POST', path: '/rides/:id/rate', description: 'Rate driver', body: '{ rating, feedback }' },
      
      // Driver endpoints
      { method: 'PUT', path: '/driver/status', description: 'Set online/offline', body: '{ status }' },
      { method: 'PUT', path: '/driver/location', description: 'Update location', body: '{ lat, lng }' },
      { method: 'GET', path: '/driver/rides/available', description: 'Get nearby ride requests' },
      { method: 'POST', path: '/driver/rides/:id/accept', description: 'Accept ride request' },
      { method: 'PUT', path: '/driver/rides/:id/arrive', description: 'Mark arrived at pickup' },
      { method: 'PUT', path: '/driver/rides/:id/start', description: 'Start trip' },
      { method: 'PUT', path: '/driver/rides/:id/complete', description: 'Complete trip' },
      { method: 'GET', path: '/driver/earnings', description: 'Get earnings', params: 'period' },
      
      // Payments
      { method: 'GET', path: '/payment-methods', description: 'List saved payment methods' },
      { method: 'POST', path: '/payment-methods', description: 'Add payment method', body: '{ type, token }' },
      
      // WebSocket
      { method: 'WS', path: '/ws/ride/:id', description: 'Real-time ride updates' },
    ]
  },

  'job-portal': {
    title: 'Job Portal API Routes',
    baseUrl: '/api/v1',
    routes: [
      // Jobs
      { method: 'GET', path: '/jobs', description: 'Search jobs', params: 'q, location, type, remote, skills, page' },
      { method: 'GET', path: '/jobs/:slug', description: 'Get job details' },
      { method: 'POST', path: '/jobs', description: 'Post job (employer)', body: '{ title, description, requirements, salary }' },
      { method: 'PUT', path: '/jobs/:id', description: 'Update job posting' },
      { method: 'PUT', path: '/jobs/:id/close', description: 'Close job posting' },
      { method: 'GET', path: '/jobs/:id/applicants', description: 'Get applicants (employer)' },
      
      // Applications
      { method: 'POST', path: '/jobs/:id/apply', description: 'Apply to job', body: '{ cover_letter, resume_url }' },
      { method: 'GET', path: '/applications', description: 'Get my applications' },
      { method: 'GET', path: '/applications/:id', description: 'Get application status' },
      { method: 'PUT', path: '/applications/:id/withdraw', description: 'Withdraw application' },
      { method: 'PUT', path: '/applications/:id/status', description: 'Update status (employer)', body: '{ status }' },
      
      // Interviews
      { method: 'POST', path: '/applications/:id/schedule', description: 'Schedule interview', body: '{ datetime, type, link }' },
      { method: 'PUT', path: '/interviews/:id/feedback', description: 'Submit interview feedback' },
      
      // Candidate Profile
      { method: 'GET', path: '/profile', description: 'Get my profile' },
      { method: 'PUT', path: '/profile', description: 'Update profile', body: '{ headline, skills[], experience }' },
      { method: 'POST', path: '/profile/resume', description: 'Upload resume' },
      
      // Saved Jobs
      { method: 'GET', path: '/saved-jobs', description: 'Get saved jobs' },
      { method: 'POST', path: '/jobs/:id/save', description: 'Save job' },
      { method: 'DELETE', path: '/jobs/:id/save', description: 'Unsave job' },
      
      // Companies
      { method: 'GET', path: '/companies/:slug', description: 'Get company profile' },
      { method: 'GET', path: '/companies/:slug/jobs', description: 'Get company jobs' },
      { method: 'PUT', path: '/company', description: 'Update company profile (employer)' },
    ]
  },

  'hotel': {
    title: 'Hotel Reservation API Routes',
    baseUrl: '/api/v1',
    routes: [
      // Hotels
      { method: 'GET', path: '/hotels', description: 'Search hotels', params: 'city, check_in, check_out, guests' },
      { method: 'GET', path: '/hotels/:id', description: 'Get hotel details' },
      { method: 'GET', path: '/hotels/:id/rooms', description: 'Get room types' },
      
      // Availability
      { method: 'GET', path: '/hotels/:id/availability', description: 'Check availability', params: 'check_in, check_out, room_type' },
      { method: 'GET', path: '/room-types/:id/calendar', description: 'Get availability calendar', params: 'month' },
      
      // Reservations
      { method: 'POST', path: '/reservations', description: 'Create reservation', body: '{ hotel_id, room_type_id, dates, guest_info }' },
      { method: 'GET', path: '/reservations/:confirmation', description: 'Get reservation by confirmation code' },
      { method: 'PUT', path: '/reservations/:id/cancel', description: 'Cancel reservation' },
      { method: 'PUT', path: '/reservations/:id/modify', description: 'Modify dates', body: '{ check_in, check_out }' },
      
      // Guest
      { method: 'GET', path: '/reservations', description: 'Get my reservations' },
      { method: 'POST', path: '/reservations/:id/check-in', description: 'Online check-in' },
      
      // Admin
      { method: 'GET', path: '/admin/reservations', description: 'List all reservations', params: 'date, status' },
      { method: 'PUT', path: '/admin/rooms/:id/status', description: 'Update room status', body: '{ status }' },
      { method: 'PUT', path: '/admin/pricing', description: 'Update room pricing', body: '{ room_type_id, dates[], price }' },
    ]
  },

  'food-delivery': {
    title: 'Food Delivery API Routes',
    baseUrl: '/api/v1',
    routes: [
      // Restaurants
      { method: 'GET', path: '/restaurants', description: 'List nearby restaurants', params: 'lat, lng, cuisine, sort' },
      { method: 'GET', path: '/restaurants/:slug', description: 'Get restaurant with menu' },
      { method: 'GET', path: '/restaurants/:id/menu', description: 'Get full menu' },
      
      // Cart
      { method: 'GET', path: '/cart', description: 'Get current cart' },
      { method: 'POST', path: '/cart/items', description: 'Add to cart', body: '{ restaurant_id, item_id, quantity, customizations }' },
      { method: 'PUT', path: '/cart/items/:id', description: 'Update cart item' },
      { method: 'DELETE', path: '/cart/items/:id', description: 'Remove from cart' },
      
      // Orders
      { method: 'POST', path: '/orders', description: 'Place order', body: '{ delivery_address, payment_method, tip }' },
      { method: 'GET', path: '/orders/:id', description: 'Get order details' },
      { method: 'GET', path: '/orders/:id/track', description: 'Track order in real-time' },
      { method: 'GET', path: '/orders', description: 'Order history' },
      
      // Driver
      { method: 'GET', path: '/driver/orders/available', description: 'Get available deliveries' },
      { method: 'POST', path: '/driver/orders/:id/accept', description: 'Accept delivery' },
      { method: 'PUT', path: '/driver/orders/:id/picked-up', description: 'Mark picked up' },
      { method: 'PUT', path: '/driver/orders/:id/delivered', description: 'Mark delivered' },
      { method: 'PUT', path: '/driver/location', description: 'Update driver location' },
      
      // Restaurant Dashboard
      { method: 'GET', path: '/restaurant/orders', description: 'Get incoming orders' },
      { method: 'PUT', path: '/restaurant/orders/:id/accept', description: 'Accept order' },
      { method: 'PUT', path: '/restaurant/orders/:id/ready', description: 'Mark ready for pickup' },
      { method: 'PUT', path: '/restaurant/menu/:id/availability', description: 'Toggle item availability' },
      
      // WebSocket
      { method: 'WS', path: '/ws/orders/:id', description: 'Real-time order tracking' },
    ]
  },

  'events': {
    title: 'Event Ticketing API Routes',
    baseUrl: '/api/v1',
    routes: [
      // Events
      { method: 'GET', path: '/events', description: 'List events', params: 'city, category, date, page' },
      { method: 'GET', path: '/events/:slug', description: 'Get event details' },
      { method: 'GET', path: '/events/:id/seating', description: 'Get seating chart' },
      
      // Tickets
      { method: 'GET', path: '/events/:id/tickets', description: 'Get available ticket types' },
      { method: 'GET', path: '/events/:id/availability', description: 'Check seat availability', params: 'section' },
      { method: 'POST', path: '/tickets/hold', description: 'Hold seats temporarily', body: '{ event_id, seats[], ticket_type_id }' },
      { method: 'DELETE', path: '/tickets/hold/:id', description: 'Release held seats' },
      
      // Orders
      { method: 'POST', path: '/orders', description: 'Purchase tickets', body: '{ hold_id, payment_method }' },
      { method: 'GET', path: '/orders/:id', description: 'Get order with tickets' },
      { method: 'GET', path: '/orders', description: 'Get my orders' },
      { method: 'POST', path: '/orders/:id/refund', description: 'Request refund' },
      
      // Tickets
      { method: 'GET', path: '/tickets', description: 'Get my tickets' },
      { method: 'GET', path: '/tickets/:id/barcode', description: 'Get ticket barcode' },
      { method: 'POST', path: '/tickets/:id/transfer', description: 'Transfer ticket', body: '{ recipient_email }' },
      
      // Venues
      { method: 'GET', path: '/venues/:id', description: 'Get venue info' },
      { method: 'GET', path: '/venues/:id/events', description: 'Get venue events' },
      
      // Admin
      { method: 'POST', path: '/events', description: 'Create event', body: '{ name, venue_id, date, ticket_types[] }' },
      { method: 'POST', path: '/tickets/:barcode/scan', description: 'Scan ticket at entry' },
    ]
  },

  'fitness': {
    title: 'Fitness/Gym API Routes',
    baseUrl: '/api/v1',
    routes: [
      // Members
      { method: 'GET', path: '/members/me', description: 'Get my membership' },
      { method: 'POST', path: '/members', description: 'Register membership', body: '{ plan, payment_method }' },
      { method: 'PUT', path: '/members/me/pause', description: 'Pause membership' },
      { method: 'PUT', path: '/members/me/cancel', description: 'Cancel membership' },
      
      // Classes
      { method: 'GET', path: '/classes', description: 'Get class schedule', params: 'date, type, trainer' },
      { method: 'GET', path: '/classes/:id', description: 'Get class details' },
      { method: 'POST', path: '/classes/:id/book', description: 'Book class', body: '{ date }' },
      { method: 'DELETE', path: '/classes/:id/book', description: 'Cancel booking' },
      { method: 'GET', path: '/bookings', description: 'Get my bookings' },
      
      // Trainers
      { method: 'GET', path: '/trainers', description: 'List trainers' },
      { method: 'GET', path: '/trainers/:id/availability', description: 'Get trainer availability' },
      { method: 'POST', path: '/trainers/:id/book', description: 'Book personal training', body: '{ datetime }' },
      
      // Workouts
      { method: 'GET', path: '/workouts', description: 'Get my workout log', params: 'date_from, date_to' },
      { method: 'POST', path: '/workouts', description: 'Log workout', body: '{ date, exercises[], duration }' },
      { method: 'GET', path: '/workouts/:id', description: 'Get workout details' },
      { method: 'PUT', path: '/workouts/:id', description: 'Update workout' },
      
      // Stats
      { method: 'GET', path: '/stats', description: 'Get fitness stats', params: 'period' },
      { method: 'GET', path: '/stats/progress', description: 'Get progress over time' },
      
      // Check-in
      { method: 'POST', path: '/check-in', description: 'Gym check-in (QR code)' },
      { method: 'GET', path: '/check-ins', description: 'Get check-in history' },
    ]
  }
};

export default apiRoutes;
