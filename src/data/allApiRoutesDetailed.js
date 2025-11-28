// All Enhanced API Routes Combined with Request/Response Bodies

export const allApiRoutesDetailed = {
  // Social Network API
  'social-network': {
    title: 'Social Network API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/feed',
        description: 'Get personalized news feed',
        purpose: 'Main feed showing posts from friends and followed users',
        params: 'page, limit, filter (all, friends, following)',
        responseBody: {
          posts: [{
            id: 1, author: { id: 10, name: 'John', username: 'john_doe', avatar: '...' },
            content: 'Just had an amazing day!', images: ['...'],
            likes_count: 42, comments_count: 8, shares_count: 3,
            created_at: '2024-01-15T10:30:00Z', liked_by_me: false
          }],
          next_cursor: 'abc123'
        }
      },
      {
        method: 'POST',
        path: '/posts',
        description: 'Create a new post',
        purpose: 'User shares content with their network',
        requestBody: { content: 'Hello world!', images: ['...'], visibility: 'friends' },
        responseBody: { id: 100, content: '...', created_at: '...', visibility: 'friends' }
      },
      {
        method: 'POST',
        path: '/posts/:id/like',
        description: 'Like a post',
        purpose: 'Express appreciation for content',
        responseBody: { liked: true, likes_count: 43 }
      },
      {
        method: 'POST',
        path: '/posts/:id/comments',
        description: 'Comment on a post',
        purpose: 'Engage in discussion on a post',
        requestBody: { content: 'Great post!', parent_id: null },
        responseBody: { id: 200, content: 'Great post!', author: { name: 'Me' }, created_at: '...' }
      },
      {
        method: 'GET',
        path: '/users/:username',
        description: 'Get user profile',
        purpose: 'View user profile page with posts and info',
        responseBody: {
          id: 10, username: 'john_doe', name: 'John Doe', bio: '...',
          avatar: '...', cover_photo: '...', followers_count: 1250,
          following_count: 340, posts_count: 89, is_following: false
        }
      },
      {
        method: 'POST',
        path: '/users/:id/follow',
        description: 'Follow a user',
        purpose: 'Add user to following list to see their posts',
        responseBody: { following: true, followers_count: 1251 }
      },
      {
        method: 'GET',
        path: '/friend-requests',
        description: 'Get pending friend requests',
        purpose: 'Manage incoming friend requests',
        responseBody: {
          requests: [{ id: 1, from: { id: 20, name: 'Jane', avatar: '...' }, sent_at: '...' }]
        }
      },
      {
        method: 'POST',
        path: '/friend-requests/:id/accept',
        description: 'Accept friend request',
        purpose: 'Confirm friendship with another user',
        responseBody: { accepted: true, friends_count: 156 }
      },
      {
        method: 'GET',
        path: '/notifications',
        description: 'Get user notifications',
        purpose: 'Stay updated on activity related to user',
        responseBody: {
          notifications: [
            { id: 1, type: 'like', message: 'John liked your post', read: false, created_at: '...' }
          ],
          unread_count: 5
        }
      }
    ]
  },

  // Booking System API
  'booking-system': {
    title: 'Booking System API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/services',
        description: 'List available services',
        purpose: 'Show what can be booked',
        responseBody: {
          services: [{
            id: 1, name: 'Haircut', duration: 30, price: 35.00,
            description: '...', category: 'Hair'
          }]
        }
      },
      {
        method: 'GET',
        path: '/providers',
        description: 'List service providers',
        purpose: 'Show available staff/providers',
        params: 'service_id, date',
        responseBody: {
          providers: [{
            id: 1, name: 'Sarah Smith', specialty: 'Stylist',
            rating: 4.8, photo: '...', services: [1, 2, 3]
          }]
        }
      },
      {
        method: 'GET',
        path: '/providers/:id/availability',
        description: 'Get provider availability',
        purpose: 'Show open time slots for booking',
        params: 'date, service_id',
        responseBody: {
          provider_id: 1, date: '2024-01-20',
          slots: [
            { time: '09:00', available: true },
            { time: '09:30', available: false },
            { time: '10:00', available: true }
          ]
        }
      },
      {
        method: 'POST',
        path: '/bookings',
        description: 'Create a booking',
        purpose: 'Reserve a time slot for service',
        requestBody: {
          service_id: 1, provider_id: 1,
          date: '2024-01-20', time: '10:00',
          notes: 'First time customer'
        },
        responseBody: {
          booking_id: 500, confirmation: 'BK-ABC123',
          service: 'Haircut', provider: 'Sarah Smith',
          datetime: '2024-01-20T10:00:00', status: 'confirmed'
        }
      },
      {
        method: 'GET',
        path: '/bookings',
        description: 'Get my bookings',
        purpose: 'View upcoming and past appointments',
        responseBody: {
          upcoming: [{
            id: 500, service: 'Haircut', provider: 'Sarah',
            datetime: '2024-01-20T10:00:00', status: 'confirmed'
          }],
          past: [{ id: 499, service: 'Haircut', datetime: '2024-01-10T10:00:00', status: 'completed' }]
        }
      },
      {
        method: 'PUT',
        path: '/bookings/:id/cancel',
        description: 'Cancel a booking',
        purpose: 'Cancel an upcoming appointment',
        responseBody: { cancelled: true, refund_eligible: true, refund_amount: 35.00 }
      },
      {
        method: 'PUT',
        path: '/bookings/:id/reschedule',
        description: 'Reschedule a booking',
        purpose: 'Move appointment to different time',
        requestBody: { date: '2024-01-21', time: '11:00' },
        responseBody: { rescheduled: true, new_datetime: '2024-01-21T11:00:00' }
      }
    ]
  },

  // Task Management API
  'task-management': {
    title: 'Task Management API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/projects',
        description: 'List user projects',
        purpose: 'Show all projects user is member of',
        responseBody: {
          projects: [{
            id: 1, name: 'Website Redesign', description: '...',
            owner: { id: 10, name: 'John' }, members_count: 5,
            task_stats: { total: 50, completed: 30, in_progress: 15 }
          }]
        }
      },
      {
        method: 'GET',
        path: '/projects/:id/boards',
        description: 'Get project boards',
        purpose: 'Show Kanban boards in project',
        responseBody: {
          boards: [{
            id: 1, name: 'Sprint 1',
            lists: [
              { id: 1, name: 'To Do', position: 0, task_count: 5 },
              { id: 2, name: 'In Progress', position: 1, task_count: 3 }
            ]
          }]
        }
      },
      {
        method: 'GET',
        path: '/boards/:id/tasks',
        description: 'Get board with tasks',
        purpose: 'Full board view with all lists and tasks',
        responseBody: {
          board: { id: 1, name: 'Sprint 1' },
          lists: [{
            id: 1, name: 'To Do',
            tasks: [{
              id: 100, title: 'Design homepage', priority: 'high',
              assignee: { id: 10, name: 'John', avatar: '...' },
              due_date: '2024-01-20', labels: ['design']
            }]
          }]
        }
      },
      {
        method: 'POST',
        path: '/tasks',
        description: 'Create a task',
        purpose: 'Add new task to a list',
        requestBody: {
          list_id: 1, title: 'New task', description: '...',
          assignee_id: 10, due_date: '2024-01-25', priority: 'medium'
        },
        responseBody: { id: 101, title: 'New task', list_id: 1, position: 0 }
      },
      {
        method: 'PUT',
        path: '/tasks/:id',
        description: 'Update task',
        purpose: 'Edit task details',
        requestBody: { title: 'Updated title', status: 'in_progress' },
        responseBody: { id: 100, title: 'Updated title', updated_at: '...' }
      },
      {
        method: 'PUT',
        path: '/tasks/:id/move',
        description: 'Move task between lists',
        purpose: 'Drag and drop task to different list',
        requestBody: { list_id: 2, position: 0 },
        responseBody: { moved: true, new_list_id: 2, position: 0 }
      },
      {
        method: 'POST',
        path: '/tasks/:id/comments',
        description: 'Add task comment',
        purpose: 'Discuss task with team',
        requestBody: { content: 'Working on this now' },
        responseBody: { id: 50, content: 'Working on this now', author: { name: 'John' }, created_at: '...' }
      },
      {
        method: 'GET',
        path: '/me/tasks',
        description: 'Get my assigned tasks',
        purpose: 'View all tasks assigned to current user',
        params: 'status, due, project_id',
        responseBody: {
          tasks: [{
            id: 100, title: 'Design homepage', project: 'Website Redesign',
            due_date: '2024-01-20', priority: 'high', status: 'in_progress'
          }]
        }
      }
    ]
  },

  // Subscription SaaS API
  'subscription-saas': {
    title: 'Subscription SaaS API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/plans',
        description: 'List available plans',
        purpose: 'Pricing page showing plan options',
        responseBody: {
          plans: [{
            id: 1, name: 'Starter', price: 29, billing: 'monthly',
            features: ['5 users', '10GB storage', 'Email support'],
            popular: false
          }, {
            id: 2, name: 'Pro', price: 99, billing: 'monthly',
            features: ['Unlimited users', '100GB storage', 'Priority support'],
            popular: true
          }]
        }
      },
      {
        method: 'GET',
        path: '/organizations/:id/subscription',
        description: 'Get current subscription',
        purpose: 'View subscription status and details',
        responseBody: {
          subscription_id: 500, plan: { name: 'Pro', price: 99 },
          status: 'active', current_period_end: '2024-02-15',
          usage: { users: 12, storage_gb: 45 }, cancel_at_period_end: false
        }
      },
      {
        method: 'POST',
        path: '/subscriptions',
        description: 'Create subscription',
        purpose: 'Sign up for a plan',
        requestBody: {
          plan_id: 2, payment_method_id: 'pm_abc123',
          billing_email: 'billing@company.com'
        },
        responseBody: {
          subscription_id: 500, status: 'active', plan: 'Pro',
          current_period_start: '2024-01-15', current_period_end: '2024-02-15'
        }
      },
      {
        method: 'PUT',
        path: '/subscriptions/:id/upgrade',
        description: 'Upgrade plan',
        purpose: 'Switch to higher tier plan',
        requestBody: { plan_id: 3 },
        responseBody: { upgraded: true, new_plan: 'Enterprise', prorated_amount: 50 }
      },
      {
        method: 'PUT',
        path: '/subscriptions/:id/cancel',
        description: 'Cancel subscription',
        purpose: 'End subscription at period end',
        responseBody: { cancelled: true, effective_date: '2024-02-15', access_until: '2024-02-15' }
      },
      {
        method: 'GET',
        path: '/organizations/:id/invoices',
        description: 'Get invoice history',
        purpose: 'View billing history and download invoices',
        responseBody: {
          invoices: [{
            id: 1, number: 'INV-2024-001', amount: 99, status: 'paid',
            date: '2024-01-15', pdf_url: '...'
          }]
        }
      },
      {
        method: 'GET',
        path: '/organizations/:id/usage',
        description: 'Get usage metrics',
        purpose: 'Monitor usage against plan limits',
        responseBody: {
          period: { start: '2024-01-15', end: '2024-02-15' },
          metrics: {
            users: { used: 12, limit: -1 },
            storage: { used_gb: 45, limit_gb: 100 },
            api_calls: { used: 15000, limit: 100000 }
          }
        }
      }
    ]
  },

  // Aliases for ID mismatches
  'inventory-management': {
    title: 'Inventory Management API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/products',
        description: 'List products',
        purpose: 'Product catalog with stock levels',
        params: 'category, warehouse, low_stock, search',
        responseBody: {
          products: [{
            id: 1, sku: 'PROD-001', name: 'Widget A',
            category: 'Electronics', price: 29.99,
            total_stock: 500, reserved: 50, available: 450,
            warehouses: [{ id: 1, name: 'Main', qty: 300 }],
            reorder_point: 100
          }]
        }
      },
      {
        method: 'POST',
        path: '/stock/receive',
        description: 'Receive stock',
        purpose: 'Record incoming inventory from supplier',
        requestBody: {
          purchase_order_id: 500,
          items: [{ sku: 'PROD-001', qty: 100, warehouse_id: 1 }]
        },
        responseBody: { receipt_id: 600, items_received: 1, new_stock: { 'PROD-001': 600 } }
      },
      {
        method: 'POST',
        path: '/stock/transfer',
        description: 'Transfer between warehouses',
        purpose: 'Move inventory between locations',
        requestBody: {
          from_warehouse_id: 1, to_warehouse_id: 2,
          items: [{ sku: 'PROD-001', qty: 50 }]
        },
        responseBody: { transfer_id: 700, status: 'in_transit', estimated_arrival: '2024-01-20' }
      },
      {
        method: 'POST',
        path: '/stock/adjust',
        description: 'Stock adjustment',
        purpose: 'Correct inventory counts (damage, loss)',
        requestBody: { sku: 'PROD-001', warehouse_id: 1, adjustment: -5, reason: 'damaged' },
        responseBody: { adjustment_id: 800, new_qty: 295 }
      },
      {
        method: 'GET',
        path: '/stock/low',
        description: 'Get low stock alerts',
        purpose: 'Items below reorder point',
        responseBody: {
          alerts: [{
            sku: 'PROD-002', name: 'Widget B',
            current_stock: 45, reorder_point: 100,
            suggested_order: 200
          }]
        }
      },
      {
        method: 'POST',
        path: '/purchase-orders',
        description: 'Create purchase order',
        purpose: 'Order stock from supplier',
        requestBody: {
          supplier_id: 10,
          items: [{ sku: 'PROD-001', qty: 200, unit_cost: 15.00 }]
        },
        responseBody: { po_id: 500, po_number: 'PO-2024-500', total: 3000.00, status: 'pending' }
      }
    ]
  },

  'messaging-app': {
    title: 'Chat/Messaging API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/conversations',
        description: 'List user conversations',
        purpose: 'Inbox view showing all chats',
        responseBody: {
          conversations: [{
            id: 1, type: 'direct',
            participant: { id: 50, name: 'Jane', avatar: '...', online: true },
            last_message: { content: 'See you tomorrow!', sent_at: '...', is_read: true },
            unread_count: 0
          }]
        }
      },
      {
        method: 'GET',
        path: '/conversations/:id/messages',
        description: 'Get messages in conversation',
        purpose: 'Load chat history with pagination',
        params: 'before (cursor), limit',
        responseBody: {
          messages: [{
            id: 100, sender: { id: 50, name: 'Jane', avatar: '...' },
            content: 'Hello!', type: 'text',
            sent_at: '...', delivered_at: '...', read_at: '...'
          }],
          has_more: true, cursor: 'abc123'
        }
      },
      {
        method: 'POST',
        path: '/conversations/:id/messages',
        description: 'Send message',
        purpose: 'Send text, image, or file message',
        requestBody: { content: 'Hello!', type: 'text', reply_to: null },
        responseBody: { id: 102, sent_at: '...', status: 'sent' }
      },
      {
        method: 'POST',
        path: '/conversations',
        description: 'Start new conversation',
        purpose: 'Create DM or group chat',
        requestBody: { type: 'group', name: 'New Group', participant_ids: [50, 51, 52] },
        responseBody: { id: 5, type: 'group', name: 'New Group', created_at: '...' }
      },
      {
        method: 'PUT',
        path: '/conversations/:id/read',
        description: 'Mark as read',
        purpose: 'Update read receipts',
        requestBody: { last_read_message_id: 102 },
        responseBody: { marked_read: true }
      },
      {
        method: 'WS',
        path: '/ws',
        description: 'Real-time WebSocket',
        purpose: 'Live message delivery, typing indicators, presence',
        events: ['message.new', 'message.read', 'typing.start', 'typing.stop', 'user.online', 'user.offline']
      }
    ]
  },

  'ride-sharing': {
    title: 'Ride-Sharing API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'POST',
        path: '/rides/estimate',
        description: 'Get fare estimate',
        purpose: 'Show user estimated price before booking',
        requestBody: { pickup: { lat: 40.7128, lng: -74.0060 }, dropoff: { lat: 40.7580, lng: -73.9855 }, ride_type: 'comfort' },
        responseBody: { 
          estimates: [
            { type: 'economy', price_range: '$12-15', eta: 3 },
            { type: 'comfort', price_range: '$18-22', eta: 2, surge: 1.2 }
          ],
          distance_km: 5.2, duration_mins: 18
        }
      },
      {
        method: 'POST',
        path: '/rides',
        description: 'Request a ride',
        purpose: 'User books a ride after seeing estimate',
        requestBody: { 
          pickup: { lat: 40.7128, lng: -74.0060, address: '123 Main St' }, 
          dropoff: { lat: 40.7580, lng: -73.9855, address: '456 Park Ave' }, 
          ride_type: 'comfort', payment_method_id: 1
        },
        responseBody: { ride_id: 5001, status: 'searching', estimated_pickup: '3 mins', estimated_fare: 20.00 }
      },
      {
        method: 'GET',
        path: '/rides/:id',
        description: 'Get ride details',
        purpose: 'View ride status, driver info, route',
        responseBody: {
          id: 5001, status: 'in_progress',
          driver: { id: 100, name: 'Mike', rating: 4.9, vehicle: { make: 'Toyota', model: 'Camry', plate: 'ABC123' } },
          pickup: { address: '123 Main St', arrived_at: '...' },
          dropoff: { address: '456 Park Ave', eta: '10 mins' }
        }
      },
      {
        method: 'GET',
        path: '/rides/:id/track',
        description: 'Get real-time location',
        purpose: 'Show driver position on map during ride',
        responseBody: { lat: 40.7350, lng: -73.9900, heading: 45, speed: 25, eta_mins: 8 }
      },
      {
        method: 'POST',
        path: '/rides/:id/rate',
        description: 'Rate the ride',
        purpose: 'User provides feedback after trip',
        requestBody: { rating: 5, feedback: 'Great driver!', tip: 5.00 },
        responseBody: { rated: true, tip_added: true }
      },
      {
        method: 'PUT',
        path: '/driver/status',
        description: 'Set driver online/offline',
        purpose: 'Driver starts/stops accepting rides',
        requestBody: { status: 'online', location: { lat: 40.7128, lng: -74.0060 } },
        responseBody: { status: 'online', earnings_today: 125.50 }
      }
    ]
  },

  'learning-management': {
    title: 'Learning Management System API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/courses',
        description: 'Browse courses',
        purpose: 'Course catalog with filters',
        params: 'category, level, price, rating, search',
        responseBody: {
          courses: [{
            id: 1, title: 'Complete Web Development',
            instructor: { id: 10, name: 'John Doe', avatar: '...' },
            rating: 4.8, reviews: 5200, students: 45000,
            price: 49.99, sale_price: 12.99,
            thumbnail: '...', duration_hours: 42, lessons: 280,
            level: 'beginner', bestseller: true
          }],
          total: 500
        }
      },
      {
        method: 'GET',
        path: '/courses/:slug',
        description: 'Get course details',
        purpose: 'Course landing page with curriculum',
        responseBody: {
          id: 1, title: 'Complete Web Development',
          description: '<p>Full HTML...</p>',
          what_youll_learn: ['Build websites', 'React apps'],
          curriculum: [{
            section: 'Introduction', duration_mins: 45,
            lessons: [{ id: 1, title: 'Welcome', duration: 5, preview: true }]
          }]
        }
      },
      {
        method: 'POST',
        path: '/courses/:id/enroll',
        description: 'Enroll in course',
        purpose: 'Purchase/enroll in a course',
        requestBody: { payment_method_id: 1, coupon: 'SAVE20' },
        responseBody: { enrollment_id: 500, access_granted: true, start_url: '/learn/complete-web-dev/lesson/1' }
      },
      {
        method: 'GET',
        path: '/learn/:slug/lesson/:lessonId',
        description: 'Get lesson content',
        purpose: 'Video player page with resources',
        responseBody: {
          lesson: { id: 1, title: 'Welcome', video_url: '...', duration: 300 },
          progress: { completed: false, watched_seconds: 120 },
          next_lesson: { id: 2, title: 'Setup' }
        }
      },
      {
        method: 'POST',
        path: '/learn/:slug/lesson/:lessonId/progress',
        description: 'Update progress',
        purpose: 'Track video progress and completion',
        requestBody: { watched_seconds: 180, completed: false },
        responseBody: { updated: true, course_progress: 15 }
      }
    ]
  },

  'event-ticketing': {
    title: 'Event Ticketing API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/events',
        description: 'List upcoming events',
        purpose: 'Event discovery and search',
        params: 'city, category, date_from, date_to, price_max',
        responseBody: {
          events: [{
            id: 1, name: 'Rock Concert 2024', category: 'concert',
            venue: { name: 'Madison Square Garden', city: 'New York' },
            date: '2024-03-15', time: '20:00',
            price_from: 75, tickets_available: true
          }]
        }
      },
      {
        method: 'GET',
        path: '/events/:slug',
        description: 'Get event details',
        purpose: 'Event page with ticket options',
        responseBody: {
          id: 1, name: 'Rock Concert 2024', description: '...',
          venue: { id: 10, name: 'MSG', address: '...' },
          date: '2024-03-15', doors_open: '18:00',
          ticket_types: [
            { id: 1, name: 'Floor', price: 150, available: 50 },
            { id: 2, name: 'Lower Bowl', price: 100, available: 200 }
          ]
        }
      },
      {
        method: 'POST',
        path: '/tickets/hold',
        description: 'Hold seats temporarily',
        purpose: 'Reserve seats during checkout (5 min hold)',
        requestBody: { event_id: 1, ticket_type_id: 1, quantity: 2, seats: ['A1', 'A2'] },
        responseBody: { hold_id: 'HOLD-123', expires_at: '...', seats: ['A1', 'A2'], total: 300 }
      },
      {
        method: 'POST',
        path: '/orders',
        description: 'Purchase tickets',
        purpose: 'Complete ticket purchase',
        requestBody: { hold_id: 'HOLD-123', payment_method_id: 1, buyer: { name: '...', email: '...' } },
        responseBody: {
          order_id: 3001, confirmation: 'TKT-ABC123',
          tickets: [{ id: 5001, barcode: 'BC123456', seat: 'A1' }],
          total: 315
        }
      },
      {
        method: 'GET',
        path: '/tickets',
        description: 'Get my tickets',
        purpose: 'View purchased tickets',
        responseBody: {
          tickets: [{
            id: 5001, event: { name: 'Rock Concert', date: '2024-03-15' },
            venue: 'MSG', seat: 'Floor A1',
            barcode_url: '/tickets/5001/barcode', status: 'valid'
          }]
        }
      }
    ]
  },

  'healthcare-ehr': {
    title: 'Healthcare/Medical API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/patients/:id',
        description: 'Get patient record',
        purpose: 'View patient demographics and history',
        responseBody: {
          id: 1, mrn: 'MRN-12345',
          name: { first: 'John', last: 'Doe' },
          dob: '1985-05-15', gender: 'M',
          contact: { phone: '555-1234', email: '...' },
          insurance: { provider: 'BlueCross', policy: '...' },
          allergies: ['Penicillin'], conditions: ['Hypertension']
        }
      },
      {
        method: 'GET',
        path: '/doctors',
        description: 'Search doctors',
        purpose: 'Find providers by specialty/availability',
        params: 'specialty, location, insurance, available_date',
        responseBody: {
          doctors: [{
            id: 100, name: 'Dr. Sarah Smith',
            specialty: 'Internal Medicine',
            rating: 4.8, accepts_insurance: ['BlueCross'],
            next_available: '2024-01-20'
          }]
        }
      },
      {
        method: 'POST',
        path: '/appointments',
        description: 'Book appointment',
        purpose: 'Schedule patient visit',
        requestBody: {
          doctor_id: 100, patient_id: 1,
          date: '2024-01-20', time: '10:00',
          type: 'follow_up', reason: 'Blood pressure check'
        },
        responseBody: { appointment_id: 5000, confirmation: 'APT-5000', reminder_sent: true }
      },
      {
        method: 'GET',
        path: '/patients/:id/medical-records',
        description: 'Get medical records',
        purpose: 'View patient chart and history',
        responseBody: {
          patient_id: 1,
          visits: [{ id: 100, date: '2024-01-10', doctor: 'Dr. Smith', diagnosis: ['J06.9 - Acute URI'] }],
          medications: [{ name: 'Lisinopril', dose: '10mg', frequency: 'Daily' }]
        }
      },
      {
        method: 'POST',
        path: '/prescriptions',
        description: 'Create prescription',
        purpose: 'Doctor prescribes medication',
        requestBody: {
          patient_id: 1, doctor_id: 100,
          medication: 'Amoxicillin', dose: '500mg',
          frequency: '3x daily', duration: '10 days'
        },
        responseBody: { rx_id: 800, sent_to_pharmacy: true, pharmacy: 'CVS Main St' }
      }
    ]
  },

  'ecommerce': {
    title: 'E-Commerce API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/products',
        description: 'Get list of products with optional filtering and pagination',
        purpose: 'Main product listing page, search results, category browsing',
        params: 'category, min_price, max_price, sort, page, limit, search',
        requestBody: null,
        responseBody: {
          products: [
            { id: 1, name: 'Wireless Headphones', price: 79.99, category: 'Electronics', rating: 4.5, stock: 150, images: ['...'] }
          ],
          pagination: { page: 1, limit: 20, total: 500, totalPages: 25 }
        },
        statusCodes: [200, 400, 500]
      },
      {
        method: 'GET',
        path: '/products/:id',
        description: 'Get detailed product information',
        purpose: 'Product detail page showing all specs, reviews, related items',
        responseBody: {
          id: 1, name: 'Wireless Headphones', description: 'Premium noise-canceling...',
          price: 79.99, compare_at_price: 99.99, category: { id: 5, name: 'Electronics' },
          specifications: { brand: 'AudioMax', battery: '30 hours' },
          images: [{ url: '...', alt: '...' }], rating: 4.5, review_count: 234,
          stock: 150, in_stock: true, variants: [{ id: 10, color: 'Black', stock: 80 }]
        },
        statusCodes: [200, 404]
      },
      {
        method: 'POST',
        path: '/cart/items',
        description: 'Add item to shopping cart',
        purpose: 'When user clicks "Add to Cart" button on product page',
        requestBody: { product_id: 1, variant_id: 10, quantity: 2 },
        responseBody: {
          cart_id: 'cart_abc123', item_id: 50,
          item: { product_id: 1, name: 'Wireless Headphones', variant: 'Black', quantity: 2, price: 79.99, subtotal: 159.98 },
          cart_total: 159.98, item_count: 2
        },
        statusCodes: [201, 400, 404, 422]
      },
      {
        method: 'PUT',
        path: '/cart/items/:id',
        description: 'Update cart item quantity',
        purpose: 'When user changes quantity in cart page',
        requestBody: { quantity: 3 },
        responseBody: { item_id: 50, quantity: 3, subtotal: 239.97, cart_total: 239.97 },
        statusCodes: [200, 400, 404, 422]
      },
      {
        method: 'DELETE',
        path: '/cart/items/:id',
        description: 'Remove item from cart',
        purpose: 'When user clicks remove/delete button on cart item',
        responseBody: { removed: true, cart_total: 0, item_count: 0 },
        statusCodes: [200, 404]
      },
      {
        method: 'POST',
        path: '/orders',
        description: 'Create a new order from cart',
        purpose: 'Checkout process - converts cart to order and processes payment',
        requestBody: {
          cart_id: 'cart_abc123',
          shipping_address: { street: '123 Main St', city: 'NYC', state: 'NY', zip: '10001', country: 'US' },
          billing_address: { same_as_shipping: true },
          payment_method: { type: 'card', token: 'tok_visa_4242' },
          shipping_method: 'standard'
        },
        responseBody: {
          order_id: 1001, order_number: 'ORD-2024-1001', status: 'confirmed',
          items: [{ product_id: 1, name: 'Wireless Headphones', quantity: 2, price: 79.99 }],
          subtotal: 159.98, shipping: 9.99, tax: 13.60, total: 183.57,
          payment: { status: 'captured', last4: '4242' },
          estimated_delivery: '2024-01-20'
        },
        statusCodes: [201, 400, 402, 422]
      },
      {
        method: 'GET',
        path: '/orders',
        description: 'Get user order history',
        purpose: 'Order history page in user account',
        responseBody: {
          orders: [
            { order_id: 1001, order_number: 'ORD-2024-1001', date: '2024-01-15', status: 'shipped', total: 183.57, item_count: 2 }
          ],
          pagination: { page: 1, total: 15 }
        },
        statusCodes: [200, 401]
      },
      {
        method: 'GET',
        path: '/orders/:id',
        description: 'Get single order details',
        purpose: 'Order confirmation page, order detail view',
        responseBody: {
          order_id: 1001, order_number: 'ORD-2024-1001', status: 'shipped',
          items: [{ product_id: 1, name: 'Wireless Headphones', quantity: 2, unit_price: 79.99, subtotal: 159.98 }],
          shipping_address: { street: '123 Main St', city: 'NYC' },
          subtotal: 159.98, shipping: 9.99, tax: 13.60, total: 183.57,
          tracking: { carrier: 'UPS', number: '1Z999AA...' },
          timeline: [{ status: 'confirmed', date: '2024-01-15' }, { status: 'shipped', date: '2024-01-16' }]
        },
        statusCodes: [200, 401, 404]
      },
      {
        method: 'POST',
        path: '/products/:id/reviews',
        description: 'Add a product review',
        purpose: 'Customer submits review after purchase',
        requestBody: { rating: 5, title: 'Excellent!', content: 'Best headphones I have owned...', images: [] },
        responseBody: { review_id: 500, status: 'pending_moderation', message: 'Thanks for your review!' },
        statusCodes: [201, 400, 401, 403]
      },
      {
        method: 'GET',
        path: '/users/me/wishlist',
        description: 'Get user wishlist',
        purpose: 'Wishlist page showing saved items',
        responseBody: {
          items: [{ id: 1, product: { id: 1, name: 'Wireless Headphones', price: 79.99, in_stock: true }, added_at: '2024-01-10' }]
        },
        statusCodes: [200, 401]
      }
    ]
  },

  'blog-cms': {
    title: 'Blog/CMS API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/posts',
        description: 'List blog posts',
        purpose: 'Main blog listing with pagination and filters',
        params: 'page, per_page, category, tag, author, status, search',
        responseBody: {
          posts: [{
            id: 1, title: 'Getting Started with React',
            slug: 'getting-started-react',
            excerpt: 'Learn the basics of React...',
            author: { id: 1, name: 'John Doe', avatar: '...' },
            category: { id: 5, name: 'Tutorials', slug: 'tutorials' },
            tags: ['react', 'javascript'],
            featured_image: '...', published_at: '2024-01-15',
            reading_time: 5, views: 1250, comments_count: 12
          }],
          total: 150, page: 1, per_page: 10
        }
      },
      {
        method: 'GET',
        path: '/posts/:slug',
        description: 'Get single post',
        purpose: 'Full post content for reading page',
        responseBody: {
          id: 1, title: 'Getting Started with React',
          content: '<p>Full HTML content...</p>',
          author: { id: 1, name: 'John Doe', bio: '...', avatar: '...' },
          category: { id: 5, name: 'Tutorials' },
          tags: [{ id: 1, name: 'react', slug: 'react' }],
          published_at: '2024-01-15', updated_at: '2024-01-16',
          related_posts: [{ id: 2, title: 'Advanced React Patterns', slug: '...' }]
        }
      },
      {
        method: 'POST',
        path: '/posts',
        description: 'Create new post',
        purpose: 'Author creates a new blog post',
        requestBody: {
          title: 'My New Post', content: '<p>Post content...</p>',
          excerpt: 'Short summary...', category_id: 5, tags: ['react', 'tutorial'],
          featured_image_id: 100, status: 'draft'
        },
        responseBody: { id: 10, slug: 'my-new-post', status: 'draft', preview_url: '/preview/abc123' }
      },
      {
        method: 'PUT',
        path: '/posts/:id',
        description: 'Update post',
        purpose: 'Edit existing post content or metadata',
        requestBody: { title: 'Updated Title', content: '...', status: 'published' },
        responseBody: { id: 10, updated_at: '...', status: 'published', url: '/posts/my-new-post' }
      },
      {
        method: 'POST',
        path: '/posts/:id/comments',
        description: 'Add comment',
        purpose: 'Readers engage with post content',
        requestBody: { content: 'Great article!', parent_id: null },
        responseBody: { id: 100, content: 'Great article!', author: { name: 'Guest' }, created_at: '...', pending_moderation: true }
      },
      {
        method: 'POST',
        path: '/media',
        description: 'Upload media',
        purpose: 'Upload images/files for posts',
        requestBody: 'multipart/form-data with file',
        responseBody: { id: 100, url: '/uploads/image.jpg', thumbnail: '...', mime_type: 'image/jpeg', size: 245000 }
      },
      {
        method: 'GET',
        path: '/categories',
        description: 'List categories',
        purpose: 'Navigation and filtering options',
        responseBody: {
          categories: [
            { id: 1, name: 'Tutorials', slug: 'tutorials', post_count: 45 },
            { id: 2, name: 'News', slug: 'news', post_count: 23 }
          ]
        }
      }
    ]
  },

  'chat-messaging': {
    title: 'Chat/Messaging API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/conversations',
        description: 'List user conversations',
        purpose: 'Inbox view showing all chats',
        responseBody: {
          conversations: [{
            id: 1, type: 'direct',
            participant: { id: 50, name: 'Jane', avatar: '...', online: true },
            last_message: { content: 'See you tomorrow!', sent_at: '...', is_read: true },
            unread_count: 0
          }, {
            id: 2, type: 'group', name: 'Project Team',
            participants: [{ id: 50, name: 'Jane' }, { id: 51, name: 'Bob' }],
            last_message: { sender: 'Bob', content: 'Done!', sent_at: '...' },
            unread_count: 3
          }]
        }
      },
      {
        method: 'GET',
        path: '/conversations/:id/messages',
        description: 'Get messages in conversation',
        purpose: 'Load chat history with pagination',
        params: 'before (cursor), limit',
        responseBody: {
          messages: [{
            id: 100, sender: { id: 50, name: 'Jane', avatar: '...' },
            content: 'Hello!', type: 'text',
            sent_at: '...', delivered_at: '...', read_at: '...'
          }],
          has_more: true, cursor: 'abc123'
        }
      },
      {
        method: 'POST',
        path: '/conversations/:id/messages',
        description: 'Send message',
        purpose: 'Send text, image, or file message',
        requestBody: { content: 'Hello!', type: 'text', reply_to: null },
        responseBody: { id: 102, sent_at: '...', status: 'sent' }
      },
      {
        method: 'POST',
        path: '/conversations',
        description: 'Start new conversation',
        purpose: 'Create DM or group chat',
        requestBody: { type: 'group', name: 'New Group', participant_ids: [50, 51, 52] },
        responseBody: { id: 5, type: 'group', name: 'New Group', created_at: '...' }
      },
      {
        method: 'PUT',
        path: '/conversations/:id/read',
        description: 'Mark as read',
        purpose: 'Update read receipts',
        requestBody: { last_read_message_id: 102 },
        responseBody: { marked_read: true }
      },
      {
        method: 'WS',
        path: '/ws',
        description: 'Real-time WebSocket',
        purpose: 'Live message delivery, typing indicators, presence',
        events: ['message.new', 'message.read', 'typing.start', 'typing.stop', 'user.online', 'user.offline']
      }
    ]
  },

  'lms': {
    title: 'Learning Management System API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/courses',
        description: 'Browse courses',
        purpose: 'Course catalog with filters',
        params: 'category, level, price, rating, search',
        responseBody: {
          courses: [{
            id: 1, title: 'Complete Web Development',
            instructor: { id: 10, name: 'John Doe', avatar: '...' },
            rating: 4.8, reviews: 5200, students: 45000,
            price: 49.99, sale_price: 12.99,
            thumbnail: '...', duration_hours: 42, lessons: 280,
            level: 'beginner', bestseller: true
          }],
          total: 500
        }
      },
      {
        method: 'GET',
        path: '/courses/:slug',
        description: 'Get course details',
        purpose: 'Course landing page with curriculum',
        responseBody: {
          id: 1, title: 'Complete Web Development',
          description: '<p>Full HTML...</p>',
          what_youll_learn: ['Build websites', 'React apps'],
          curriculum: [{
            section: 'Introduction', duration_mins: 45,
            lessons: [{ id: 1, title: 'Welcome', duration: 5, preview: true }]
          }],
          instructor: { name: '...', bio: '...', courses: 12, students: 100000 }
        }
      },
      {
        method: 'POST',
        path: '/courses/:id/enroll',
        description: 'Enroll in course',
        purpose: 'Purchase/enroll in a course',
        requestBody: { payment_method_id: 1, coupon: 'SAVE20' },
        responseBody: { enrollment_id: 500, access_granted: true, start_url: '/learn/complete-web-dev/lesson/1' }
      },
      {
        method: 'GET',
        path: '/learn/:slug/lesson/:lessonId',
        description: 'Get lesson content',
        purpose: 'Video player page with resources',
        responseBody: {
          lesson: { id: 1, title: 'Welcome', video_url: '...', duration: 300 },
          progress: { completed: false, watched_seconds: 120 },
          next_lesson: { id: 2, title: 'Setup' }
        }
      },
      {
        method: 'POST',
        path: '/learn/:slug/lesson/:lessonId/progress',
        description: 'Update progress',
        purpose: 'Track video progress and completion',
        requestBody: { watched_seconds: 180, completed: false },
        responseBody: { updated: true, course_progress: 15 }
      },
      {
        method: 'POST',
        path: '/learn/:slug/quiz/:quizId/submit',
        description: 'Submit quiz answers',
        purpose: 'Grade quiz and show results',
        requestBody: { answers: [{ question_id: 1, answer: 'A' }] },
        responseBody: { score: 80, passed: true, correct: 8, total: 10 }
      },
      {
        method: 'GET',
        path: '/courses/:id/certificate',
        description: 'Get course certificate',
        purpose: 'Download completion certificate',
        responseBody: { certificate_url: '/certificates/abc123.pdf', issued_at: '...', credential_id: 'CERT-123' }
      }
    ]
  },

  'inventory': {
    title: 'Inventory Management API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/products',
        description: 'List products',
        purpose: 'Product catalog with stock levels',
        params: 'category, warehouse, low_stock, search',
        responseBody: {
          products: [{
            id: 1, sku: 'PROD-001', name: 'Widget A',
            category: 'Electronics', price: 29.99,
            total_stock: 500, reserved: 50, available: 450,
            warehouses: [{ id: 1, name: 'Main', qty: 300 }],
            reorder_point: 100
          }]
        }
      },
      {
        method: 'POST',
        path: '/stock/receive',
        description: 'Receive stock',
        purpose: 'Record incoming inventory from supplier',
        requestBody: {
          purchase_order_id: 500,
          items: [{ sku: 'PROD-001', qty: 100, warehouse_id: 1 }]
        },
        responseBody: { receipt_id: 600, items_received: 1, new_stock: { 'PROD-001': 600 } }
      },
      {
        method: 'POST',
        path: '/stock/transfer',
        description: 'Transfer between warehouses',
        purpose: 'Move inventory between locations',
        requestBody: {
          from_warehouse_id: 1, to_warehouse_id: 2,
          items: [{ sku: 'PROD-001', qty: 50 }]
        },
        responseBody: { transfer_id: 700, status: 'in_transit', estimated_arrival: '2024-01-20' }
      },
      {
        method: 'POST',
        path: '/stock/adjust',
        description: 'Stock adjustment',
        purpose: 'Correct inventory counts (damage, loss)',
        requestBody: { sku: 'PROD-001', warehouse_id: 1, adjustment: -5, reason: 'damaged' },
        responseBody: { adjustment_id: 800, new_qty: 295 }
      },
      {
        method: 'GET',
        path: '/stock/low',
        description: 'Get low stock alerts',
        purpose: 'Items below reorder point',
        responseBody: {
          alerts: [{
            sku: 'PROD-002', name: 'Widget B',
            current_stock: 45, reorder_point: 100,
            suggested_order: 200
          }]
        }
      },
      {
        method: 'POST',
        path: '/purchase-orders',
        description: 'Create purchase order',
        purpose: 'Order stock from supplier',
        requestBody: {
          supplier_id: 10,
          items: [{ sku: 'PROD-001', qty: 200, unit_cost: 15.00 }]
        },
        responseBody: { po_id: 500, po_number: 'PO-2024-500', total: 3000.00, status: 'pending' }
      }
    ]
  },

  'healthcare': {
    title: 'Healthcare/Medical API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/patients/:id',
        description: 'Get patient record',
        purpose: 'View patient demographics and history',
        responseBody: {
          id: 1, mrn: 'MRN-12345',
          name: { first: 'John', last: 'Doe' },
          dob: '1985-05-15', gender: 'M',
          contact: { phone: '555-1234', email: '...' },
          insurance: { provider: 'BlueCross', policy: '...' },
          allergies: ['Penicillin'], conditions: ['Hypertension']
        }
      },
      {
        method: 'GET',
        path: '/doctors',
        description: 'Search doctors',
        purpose: 'Find providers by specialty/availability',
        params: 'specialty, location, insurance, available_date',
        responseBody: {
          doctors: [{
            id: 100, name: 'Dr. Sarah Smith',
            specialty: 'Internal Medicine',
            rating: 4.8, accepts_insurance: ['BlueCross'],
            next_available: '2024-01-20'
          }]
        }
      },
      {
        method: 'GET',
        path: '/doctors/:id/availability',
        description: 'Get doctor availability',
        purpose: 'Show open appointment slots',
        responseBody: {
          doctor_id: 100, slots: [
            { date: '2024-01-20', times: ['09:00', '10:00', '14:00'] }
          ]
        }
      },
      {
        method: 'POST',
        path: '/appointments',
        description: 'Book appointment',
        purpose: 'Schedule patient visit',
        requestBody: {
          doctor_id: 100, patient_id: 1,
          date: '2024-01-20', time: '10:00',
          type: 'follow_up', reason: 'Blood pressure check'
        },
        responseBody: { appointment_id: 5000, confirmation: 'APT-5000', reminder_sent: true }
      },
      {
        method: 'GET',
        path: '/patients/:id/medical-records',
        description: 'Get medical records',
        purpose: 'View patient chart and history',
        responseBody: {
          patient_id: 1,
          visits: [{ id: 100, date: '2024-01-10', doctor: 'Dr. Smith', diagnosis: ['J06.9 - Acute URI'] }],
          medications: [{ name: 'Lisinopril', dose: '10mg', frequency: 'Daily' }]
        }
      },
      {
        method: 'POST',
        path: '/prescriptions',
        description: 'Create prescription',
        purpose: 'Doctor prescribes medication',
        requestBody: {
          patient_id: 1, doctor_id: 100,
          medication: 'Amoxicillin', dose: '500mg',
          frequency: '3x daily', duration: '10 days'
        },
        responseBody: { rx_id: 800, sent_to_pharmacy: true, pharmacy: 'CVS Main St' }
      }
    ]
  },

  'rideshare': {
    title: 'Ride-Sharing API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'POST',
        path: '/rides/estimate',
        description: 'Get fare estimate',
        purpose: 'Show user estimated price before booking',
        requestBody: { pickup: { lat: 40.7128, lng: -74.0060 }, dropoff: { lat: 40.7580, lng: -73.9855 }, ride_type: 'comfort' },
        responseBody: { 
          estimates: [
            { type: 'economy', price_range: '$12-15', eta: 3 },
            { type: 'comfort', price_range: '$18-22', eta: 2, surge: 1.2 }
          ],
          distance_km: 5.2, duration_mins: 18
        }
      },
      {
        method: 'POST',
        path: '/rides',
        description: 'Request a ride',
        purpose: 'User books a ride after seeing estimate',
        requestBody: { 
          pickup: { lat: 40.7128, lng: -74.0060, address: '123 Main St' }, 
          dropoff: { lat: 40.7580, lng: -73.9855, address: '456 Park Ave' }, 
          ride_type: 'comfort', payment_method_id: 1
        },
        responseBody: { ride_id: 5001, status: 'searching', estimated_pickup: '3 mins', estimated_fare: 20.00 }
      },
      {
        method: 'GET',
        path: '/rides/:id',
        description: 'Get ride details',
        purpose: 'View ride status, driver info, route',
        responseBody: {
          id: 5001, status: 'in_progress',
          driver: { id: 100, name: 'Mike', rating: 4.9, vehicle: { make: 'Toyota', model: 'Camry', plate: 'ABC123' } },
          pickup: { address: '123 Main St', arrived_at: '...' },
          dropoff: { address: '456 Park Ave', eta: '10 mins' }
        }
      },
      {
        method: 'GET',
        path: '/rides/:id/track',
        description: 'Get real-time location',
        purpose: 'Show driver position on map during ride',
        responseBody: { lat: 40.7350, lng: -73.9900, heading: 45, speed: 25, eta_mins: 8 }
      },
      {
        method: 'POST',
        path: '/rides/:id/rate',
        description: 'Rate the ride',
        purpose: 'User provides feedback after trip',
        requestBody: { rating: 5, feedback: 'Great driver!', tip: 5.00 },
        responseBody: { rated: true, tip_added: true }
      },
      {
        method: 'PUT',
        path: '/driver/status',
        description: 'Set driver online/offline',
        purpose: 'Driver starts/stops accepting rides',
        requestBody: { status: 'online', location: { lat: 40.7128, lng: -74.0060 } },
        responseBody: { status: 'online', earnings_today: 125.50 }
      },
      {
        method: 'POST',
        path: '/driver/rides/:id/accept',
        description: 'Accept ride request',
        purpose: 'Driver takes the ride job',
        responseBody: { 
          ride_id: 5002, rider: { name: 'John', phone: '555-1234' },
          pickup: { address: '...', eta: 4 }
        }
      },
      {
        method: 'PUT',
        path: '/driver/rides/:id/complete',
        description: 'Complete the ride',
        purpose: 'Mark ride finished, trigger payment',
        responseBody: { ride_id: 5002, final_fare: 22.50, your_earnings: 16.88 }
      },
      {
        method: 'GET',
        path: '/driver/earnings',
        description: 'Get earnings report',
        purpose: 'Driver views income summary',
        params: 'period (today, week, month)',
        responseBody: { period: 'week', total: 850.00, trips: 42, hours_online: 35 }
      }
    ]
  },

  'job-portal': {
    title: 'Job Portal API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/jobs',
        description: 'Search job listings',
        purpose: 'Main job search with filters',
        params: 'q, location, type, remote, salary_min, experience, skills, page',
        responseBody: {
          jobs: [{
            id: 1, title: 'Senior React Developer', company: { name: 'TechCorp' },
            location: 'New York, NY', remote: true, salary_range: '$120k-150k',
            posted_at: '2 days ago', skills: ['React', 'TypeScript']
          }],
          total: 250
        }
      },
      {
        method: 'GET',
        path: '/jobs/:slug',
        description: 'Get full job details',
        purpose: 'Job detail page with full description',
        responseBody: {
          id: 1, title: 'Senior React Developer',
          company: { id: 10, name: 'TechCorp', description: '...' },
          description: '<p>Full HTML...</p>', requirements: ['5+ years React'],
          benefits: ['Health', '401k', 'Remote'], salary: { min: 120000, max: 150000 },
          applicants: 45
        }
      },
      {
        method: 'POST',
        path: '/jobs/:id/apply',
        description: 'Apply to job',
        purpose: 'Candidate submits application',
        requestBody: { cover_letter: 'I am excited to apply...', resume_url: '/resumes/john.pdf' },
        responseBody: { application_id: 500, status: 'applied', applied_at: '...' }
      },
      {
        method: 'GET',
        path: '/applications',
        description: 'Get my applications',
        purpose: 'Candidate tracks application status',
        responseBody: {
          applications: [{
            id: 500, job: { title: 'Senior React Dev', company: 'TechCorp' },
            status: 'interview', applied_at: '...', next_step: 'Technical interview on Jan 20'
          }]
        }
      },
      {
        method: 'PUT',
        path: '/applications/:id/status',
        description: 'Update application status',
        purpose: 'Employer moves candidate through pipeline',
        requestBody: { status: 'interview', notes: 'Strong candidate' },
        responseBody: { status: 'interview', updated_at: '...' }
      },
      {
        method: 'POST',
        path: '/applications/:id/schedule',
        description: 'Schedule interview',
        purpose: 'Book interview with candidate',
        requestBody: { type: 'video', datetime: '2024-01-20T14:00:00Z', duration: 60 },
        responseBody: { interview_id: 50, calendar_invite_sent: true }
      },
      {
        method: 'PUT',
        path: '/profile',
        description: 'Update candidate profile',
        purpose: 'Keep resume/skills current for job matching',
        requestBody: { headline: 'Senior Full Stack Developer', skills: ['React', 'Node.js'], open_to_work: true },
        responseBody: { updated: true, profile_strength: 85 }
      }
    ]
  },

  'hotel': {
    title: 'Hotel Reservation API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/hotels',
        description: 'Search hotels',
        purpose: 'Main search results page',
        params: 'city, check_in, check_out, guests, rooms, min_price, stars',
        responseBody: {
          hotels: [{
            id: 1, name: 'Grand Hotel', stars: 4, location: 'Downtown',
            price_from: 150, rating: 4.5, reviews: 320, image: '...',
            amenities: ['pool', 'wifi', 'gym']
          }],
          total: 45
        }
      },
      {
        method: 'GET',
        path: '/hotels/:id/availability',
        description: 'Check room availability',
        purpose: 'Show available rooms for selected dates',
        params: 'check_in, check_out, guests',
        responseBody: {
          hotel: { id: 1, name: 'Grand Hotel' },
          rooms: [{
            type_id: 10, name: 'Deluxe King', capacity: 2,
            price_per_night: 180, total_price: 540, available: 3
          }],
          policies: { check_in: '15:00', check_out: '11:00' }
        }
      },
      {
        method: 'POST',
        path: '/reservations',
        description: 'Create reservation',
        purpose: 'Book selected room',
        requestBody: {
          hotel_id: 1, room_type_id: 10, check_in: '2024-02-01', check_out: '2024-02-04',
          guests: 2, guest_info: { name: 'John Doe', email: '...', phone: '...' }
        },
        responseBody: { reservation_id: 1001, confirmation: 'RES-ABC123', total: 540, status: 'confirmed' }
      },
      {
        method: 'GET',
        path: '/reservations/:confirmation',
        description: 'Get reservation details',
        purpose: 'View/manage booking',
        responseBody: {
          id: 1001, confirmation: 'RES-ABC123', status: 'confirmed',
          hotel: { name: 'Grand Hotel', address: '...', phone: '...' },
          room: { type: 'Deluxe King' },
          dates: { check_in: '2024-02-01', check_out: '2024-02-04', nights: 3 },
          total: 540, cancellation_deadline: '2024-01-31T15:00:00Z'
        }
      },
      {
        method: 'PUT',
        path: '/reservations/:id/cancel',
        description: 'Cancel reservation',
        purpose: 'Guest cancels booking',
        responseBody: { cancelled: true, refund_amount: 540, refund_status: 'processing' }
      },
      {
        method: 'POST',
        path: '/reservations/:id/check-in',
        description: 'Online check-in',
        purpose: 'Complete check-in before arrival',
        requestBody: { arrival_time: '16:00', id_document: 'passport_scan_url' },
        responseBody: { checked_in: true, room_number: '512', key_ready: true }
      }
    ]
  },

  'food-delivery': {
    title: 'Food Delivery API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/restaurants',
        description: 'List nearby restaurants',
        purpose: 'Main browse/search page',
        params: 'lat, lng, cuisine, sort, open_now, delivery_fee',
        responseBody: {
          restaurants: [{
            id: 1, name: 'Pizza Palace', cuisines: ['Italian', 'Pizza'],
            rating: 4.6, reviews: 230, delivery_fee: 2.99, delivery_time: '25-35 min',
            is_open: true, distance_km: 1.2
          }]
        }
      },
      {
        method: 'GET',
        path: '/restaurants/:slug',
        description: 'Get restaurant with menu',
        purpose: 'Restaurant page with full menu',
        responseBody: {
          id: 1, name: 'Pizza Palace', rating: 4.6,
          hours: { today: '11:00-22:00', is_open: true },
          menu: [{
            category: 'Pizzas',
            items: [{ id: 101, name: 'Margherita', price: 14.99, description: '...', popular: true }]
          }],
          delivery_fee: 2.99, min_order: 15.00
        }
      },
      {
        method: 'POST',
        path: '/cart/items',
        description: 'Add item to cart',
        purpose: 'User adds food to order',
        requestBody: { restaurant_id: 1, item_id: 101, quantity: 2, customizations: { size: 'large' } },
        responseBody: { cart_item_id: 50, item_total: 35.98, cart_total: 45.97 }
      },
      {
        method: 'POST',
        path: '/orders',
        description: 'Place order',
        purpose: 'Submit order for preparation',
        requestBody: {
          delivery_address: { street: '123 Main St', apt: '4B', instructions: 'Ring buzzer' },
          payment_method_id: 1, tip: 5.00
        },
        responseBody: { order_id: 2001, order_number: 'ORD-2001', total: 52.96, estimated_delivery: '35-45 min', status: 'confirmed' }
      },
      {
        method: 'GET',
        path: '/orders/:id/track',
        description: 'Track order in real-time',
        purpose: 'Live order status and driver location',
        responseBody: {
          status: 'out_for_delivery',
          timeline: [
            { status: 'confirmed', at: '18:30' },
            { status: 'preparing', at: '18:32' },
            { status: 'picked_up', at: '18:55' }
          ],
          driver: { name: 'Alex', phone: '555-1234' },
          location: { lat: 40.7200, lng: -73.9900 },
          eta_mins: 8
        }
      },
      {
        method: 'GET',
        path: '/restaurant/orders',
        description: 'Get incoming orders',
        purpose: 'Restaurant manages order queue',
        responseBody: {
          orders: [{
            id: 2001, order_number: 'ORD-2001', status: 'new',
            items: [{ name: 'Margherita', qty: 2 }],
            total: 35.98, placed_at: '18:30'
          }]
        }
      },
      {
        method: 'PUT',
        path: '/restaurant/orders/:id/ready',
        description: 'Mark order ready',
        purpose: 'Notify driver food is ready for pickup',
        responseBody: { status: 'ready', driver_notified: true, driver_eta: 5 }
      }
    ]
  },

  'events': {
    title: 'Event Ticketing API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/events',
        description: 'List upcoming events',
        purpose: 'Event discovery and search',
        params: 'city, category, date_from, date_to, price_max',
        responseBody: {
          events: [{
            id: 1, name: 'Rock Concert 2024', category: 'concert',
            venue: { name: 'Madison Square Garden', city: 'New York' },
            date: '2024-03-15', time: '20:00',
            price_from: 75, tickets_available: true
          }]
        }
      },
      {
        method: 'GET',
        path: '/events/:slug',
        description: 'Get event details',
        purpose: 'Event page with ticket options',
        responseBody: {
          id: 1, name: 'Rock Concert 2024', description: '...',
          venue: { id: 10, name: 'MSG', address: '...' },
          date: '2024-03-15', doors_open: '18:00',
          ticket_types: [
            { id: 1, name: 'Floor', price: 150, available: 50 },
            { id: 2, name: 'Lower Bowl', price: 100, available: 200 }
          ]
        }
      },
      {
        method: 'POST',
        path: '/tickets/hold',
        description: 'Hold seats temporarily',
        purpose: 'Reserve seats during checkout (5 min hold)',
        requestBody: { event_id: 1, ticket_type_id: 1, quantity: 2, seats: ['A1', 'A2'] },
        responseBody: { hold_id: 'HOLD-123', expires_at: '...', seats: ['A1', 'A2'], total: 300 }
      },
      {
        method: 'POST',
        path: '/orders',
        description: 'Purchase tickets',
        purpose: 'Complete ticket purchase',
        requestBody: { hold_id: 'HOLD-123', payment_method_id: 1, buyer: { name: '...', email: '...' } },
        responseBody: {
          order_id: 3001, confirmation: 'TKT-ABC123',
          tickets: [{ id: 5001, barcode: 'BC123456', seat: 'A1' }],
          total: 315
        }
      },
      {
        method: 'GET',
        path: '/tickets',
        description: 'Get my tickets',
        purpose: 'View purchased tickets',
        responseBody: {
          tickets: [{
            id: 5001, event: { name: 'Rock Concert', date: '2024-03-15' },
            venue: 'MSG', seat: 'Floor A1',
            barcode_url: '/tickets/5001/barcode', status: 'valid'
          }]
        }
      },
      {
        method: 'POST',
        path: '/tickets/:id/transfer',
        description: 'Transfer ticket',
        purpose: 'Send ticket to friend',
        requestBody: { recipient_email: 'friend@email.com', message: 'Enjoy the show!' },
        responseBody: { transferred: true, new_ticket_id: 5002, email_sent: true }
      },
      {
        method: 'POST',
        path: '/tickets/:barcode/scan',
        description: 'Scan ticket at entry',
        purpose: 'Validate ticket at venue door',
        responseBody: { valid: true, ticket: { seat: 'A1', holder: 'John Doe' }, already_used: false }
      }
    ]
  },

  'fitness': {
    title: 'Fitness/Gym API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/members/me',
        description: 'Get my membership',
        purpose: 'View membership status and details',
        responseBody: {
          id: 1, plan: 'Premium', status: 'active',
          start_date: '2024-01-01', end_date: '2024-12-31',
          benefits: ['all classes', 'personal training discount'],
          check_ins_this_month: 12, streak_days: 5
        }
      },
      {
        method: 'GET',
        path: '/classes',
        description: 'Get class schedule',
        purpose: 'Browse and filter available classes',
        params: 'date, type, trainer, difficulty',
        responseBody: {
          classes: [{
            id: 1, name: 'HIIT Training', type: 'cardio',
            trainer: { name: 'Sarah', photo: '...' },
            time: '09:00', duration: 45, room: 'Studio A',
            difficulty: 'intermediate', spots_left: 5
          }]
        }
      },
      {
        method: 'POST',
        path: '/classes/:id/book',
        description: 'Book a class',
        purpose: 'Reserve spot in group fitness class',
        requestBody: { date: '2024-01-20' },
        responseBody: { booking_id: 100, class: 'HIIT Training', spot: 15, reminder_set: true }
      },
      {
        method: 'GET',
        path: '/bookings',
        description: 'Get my class bookings',
        purpose: 'View upcoming and past class reservations',
        responseBody: {
          upcoming: [{ id: 100, class: 'HIIT', date: '2024-01-20', time: '09:00', can_cancel: true }],
          past: [{ id: 99, class: 'Yoga', date: '2024-01-18', attended: true }]
        }
      },
      {
        method: 'POST',
        path: '/workouts',
        description: 'Log workout',
        purpose: 'Record exercise session',
        requestBody: {
          date: '2024-01-19', duration: 60, type: 'strength',
          exercises: [{ name: 'Bench Press', sets: [{ reps: 10, weight: 135 }] }]
        },
        responseBody: { workout_id: 200, calories_estimate: 320, personal_records: [{ exercise: 'Bench Press', weight: 155 }] }
      },
      {
        method: 'GET',
        path: '/stats',
        description: 'Get fitness stats',
        purpose: 'Dashboard overview of progress',
        params: 'period (week, month, year)',
        responseBody: {
          period: 'month', workouts: 16, total_duration: 720,
          calories_burned: 5200, streak: 5,
          top_exercises: [{ name: 'Bench Press', times: 8 }]
        }
      },
      {
        method: 'POST',
        path: '/check-in',
        description: 'Gym check-in',
        purpose: 'Record gym visit via QR code or app',
        responseBody: { checked_in: true, time: '07:30', visits_this_week: 4, message: 'Have a great workout!' }
      }
    ]
  }
};

export default allApiRoutesDetailed;
