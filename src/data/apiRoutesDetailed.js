// Enhanced API Routes with Request/Response Bodies - Part 1

export const apiRoutesDetailed = {
  'ecommerce': {
    title: 'E-Commerce API',
    baseUrl: '/api/v1',
    routes: [
      // Products
      {
        method: 'GET',
        path: '/products',
        description: 'List all products with pagination and filters',
        purpose: 'Main product listing for shop page, search results, and category pages',
        params: 'page, limit, category_id, min_price, max_price, sort',
        responseBody: {
          data: [{ id: 1, name: 'iPhone 15', price: 999.00, image: '/products/1.jpg', rating: 4.5 }],
          pagination: { page: 1, limit: 20, total: 150, pages: 8 }
        }
      },
      {
        method: 'GET',
        path: '/products/:id',
        description: 'Get single product with full details',
        purpose: 'Product detail page - shows all info, variants, images, reviews',
        responseBody: {
          id: 1, name: 'iPhone 15', price: 999.00, description: '...', 
          images: ['/img/1.jpg'], variants: [{ id: 1, color: 'Black', stock: 50 }],
          category: { id: 5, name: 'Phones' }, rating: 4.5, reviews_count: 128
        }
      },
      {
        method: 'POST',
        path: '/products',
        description: 'Create new product (Admin only)',
        purpose: 'Admin panel - add new products to catalog',
        requestBody: { name: 'Product Name', price: 99.99, category_id: 5, description: '...', images: ['url1'] },
        responseBody: { id: 123, name: 'Product Name', created_at: '2024-01-15T10:30:00Z' }
      },
      // Cart
      {
        method: 'GET',
        path: '/cart',
        description: 'Get current user cart',
        purpose: 'Display cart contents on cart page and mini-cart dropdown',
        responseBody: {
          items: [{ id: 1, product: { id: 1, name: 'iPhone', price: 999 }, quantity: 2, subtotal: 1998 }],
          subtotal: 1998.00, tax: 159.84, total: 2157.84, item_count: 2
        }
      },
      {
        method: 'POST',
        path: '/cart/items',
        description: 'Add item to cart',
        purpose: 'Called when user clicks "Add to Cart" button on product page',
        requestBody: { product_id: 123, quantity: 1, variant_id: 456 },
        responseBody: { cart_item_id: 789, message: 'Added to cart', cart_count: 3 }
      },
      {
        method: 'PUT',
        path: '/cart/items/:id',
        description: 'Update cart item quantity',
        purpose: 'Allow users to change quantity in cart without removing item',
        requestBody: { quantity: 3 },
        responseBody: { item: { id: 789, quantity: 3, subtotal: 2997 }, cart_total: 2997 }
      },
      {
        method: 'DELETE',
        path: '/cart/items/:id',
        description: 'Remove item from cart',
        purpose: 'User removes unwanted item from cart',
        responseBody: { message: 'Item removed', cart_count: 2 }
      },
      // Orders
      {
        method: 'POST',
        path: '/orders',
        description: 'Create order from cart',
        purpose: 'Checkout process - converts cart to order, initiates payment',
        requestBody: { 
          shipping_address_id: 1, 
          billing_address_id: 2, 
          payment_method: 'card',
          payment_token: 'tok_xxx'
        },
        responseBody: { 
          order_id: 5001, 
          order_number: 'ORD-2024-5001',
          total: 2157.84,
          status: 'pending_payment',
          payment_url: 'https://pay.stripe.com/...'
        }
      },
      {
        method: 'GET',
        path: '/orders',
        description: 'List user order history',
        purpose: 'Show past orders in user account section',
        params: 'status, page',
        responseBody: {
          orders: [{ id: 5001, order_number: 'ORD-2024-5001', total: 2157.84, status: 'delivered', created_at: '...' }],
          pagination: { page: 1, total: 15 }
        }
      },
      {
        method: 'GET',
        path: '/orders/:id',
        description: 'Get order details',
        purpose: 'Order detail page - shows items, tracking, status timeline',
        responseBody: {
          id: 5001, order_number: 'ORD-2024-5001', status: 'shipped',
          items: [{ product: { name: 'iPhone' }, quantity: 2, price: 999 }],
          shipping: { carrier: 'UPS', tracking: '1Z999AA10123456784' },
          timeline: [{ status: 'ordered', at: '...' }, { status: 'shipped', at: '...' }]
        }
      },
      // Auth
      {
        method: 'POST',
        path: '/auth/register',
        description: 'Register new user account',
        purpose: 'New user signup - creates account and sends verification email',
        requestBody: { email: 'user@example.com', password: 'SecurePass123!', first_name: 'John', last_name: 'Doe' },
        responseBody: { user_id: 123, message: 'Verification email sent', token: 'jwt_token_here' }
      },
      {
        method: 'POST',
        path: '/auth/login',
        description: 'Login user',
        purpose: 'Authenticate user and start session',
        requestBody: { email: 'user@example.com', password: 'SecurePass123!' },
        responseBody: { token: 'jwt_token_here', user: { id: 123, email: '...', name: 'John Doe' }, expires_in: 86400 }
      },
      // Reviews
      {
        method: 'GET',
        path: '/products/:id/reviews',
        description: 'Get product reviews',
        purpose: 'Display customer reviews on product page',
        params: 'page, sort (recent, helpful, rating)',
        responseBody: {
          reviews: [{ id: 1, user: 'John D.', rating: 5, title: 'Great!', content: '...', verified: true, helpful_count: 24 }],
          summary: { average: 4.5, total: 128, distribution: { 5: 80, 4: 30, 3: 10, 2: 5, 1: 3 } }
        }
      },
      {
        method: 'POST',
        path: '/products/:id/reviews',
        description: 'Submit product review',
        purpose: 'Let customers share feedback after purchase',
        requestBody: { rating: 5, title: 'Amazing product!', content: 'Really happy with this purchase...' },
        responseBody: { review_id: 456, message: 'Review submitted', status: 'pending_approval' }
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
        description: 'List published blog posts',
        purpose: 'Main blog listing, homepage feed, category archives',
        params: 'page, limit, category, tag, author, search',
        responseBody: {
          posts: [{ id: 1, title: 'Getting Started', slug: 'getting-started', excerpt: '...', author: { name: 'John' }, published_at: '...' }],
          pagination: { page: 1, total: 50 }
        }
      },
      {
        method: 'GET',
        path: '/posts/:slug',
        description: 'Get full post content by slug',
        purpose: 'Individual blog post page with full content',
        responseBody: {
          id: 1, title: 'Getting Started', slug: 'getting-started',
          content: '<p>Full HTML content...</p>', 
          author: { id: 1, name: 'John', avatar: '...' },
          category: { id: 5, name: 'Tutorials' }, tags: ['react', 'beginners'],
          published_at: '2024-01-15', reading_time: 8, views: 1250
        }
      },
      {
        method: 'POST',
        path: '/posts',
        description: 'Create new post',
        purpose: 'Authors create new blog posts from editor',
        requestBody: { title: 'My New Post', content: '...', category_id: 5, tags: ['react'], status: 'draft' },
        responseBody: { id: 123, slug: 'my-new-post', status: 'draft', edit_url: '/admin/posts/123' }
      },
      {
        method: 'PUT',
        path: '/posts/:id',
        description: 'Update existing post',
        purpose: 'Edit post content, fix typos, update information',
        requestBody: { title: 'Updated Title', content: '...', status: 'published' },
        responseBody: { id: 123, updated_at: '2024-01-15T10:30:00Z', status: 'published' }
      },
      {
        method: 'PUT',
        path: '/posts/:id/publish',
        description: 'Publish draft post',
        purpose: 'Move post from draft to published state',
        requestBody: { publish_at: '2024-01-20T09:00:00Z' },
        responseBody: { id: 123, status: 'published', published_at: '2024-01-20T09:00:00Z' }
      },
      // Comments
      {
        method: 'GET',
        path: '/posts/:id/comments',
        description: 'Get threaded comments for post',
        purpose: 'Display discussion section below blog post',
        responseBody: {
          comments: [{ 
            id: 1, content: 'Great article!', author: { name: 'Jane' }, created_at: '...', 
            replies: [{ id: 2, content: 'Thanks!', author: { name: 'John' } }]
          }],
          total: 25
        }
      },
      {
        method: 'POST',
        path: '/posts/:id/comments',
        description: 'Add comment to post',
        purpose: 'Readers engage with content through comments',
        requestBody: { content: 'Very helpful, thanks!', parent_id: null },
        responseBody: { comment_id: 456, status: 'pending_moderation' }
      },
      // Categories & Tags
      {
        method: 'GET',
        path: '/categories',
        description: 'List all categories',
        purpose: 'Populate category navigation, filters',
        responseBody: { categories: [{ id: 1, name: 'Tutorials', slug: 'tutorials', post_count: 45 }] }
      },
      {
        method: 'GET',
        path: '/tags',
        description: 'List popular tags',
        purpose: 'Tag cloud, post filtering',
        responseBody: { tags: [{ name: 'react', slug: 'react', count: 32 }] }
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
        purpose: 'Sidebar showing all chats with last message preview',
        responseBody: {
          conversations: [{
            id: 1, type: 'direct', 
            participant: { id: 2, name: 'Jane', avatar: '...', online: true },
            last_message: { content: 'See you tomorrow!', sent_at: '10:30 AM' },
            unread_count: 2
          }]
        }
      },
      {
        method: 'POST',
        path: '/conversations',
        description: 'Create new conversation',
        purpose: 'Start new chat with user or create group',
        requestBody: { participant_ids: [2, 3], type: 'group', name: 'Project Team' },
        responseBody: { conversation_id: 123, type: 'group', created_at: '...' }
      },
      {
        method: 'GET',
        path: '/conversations/:id/messages',
        description: 'Get messages in conversation',
        purpose: 'Load chat history when opening conversation',
        params: 'before (cursor), limit',
        responseBody: {
          messages: [{ id: 1, sender_id: 2, content: 'Hello!', sent_at: '...', read_by: [1, 3] }],
          has_more: true, cursor: 'msg_abc123'
        }
      },
      {
        method: 'POST',
        path: '/conversations/:id/messages',
        description: 'Send new message',
        purpose: 'User sends message in chat',
        requestBody: { content: 'Hey, how are you?', type: 'text', attachments: [] },
        responseBody: { message_id: 456, sent_at: '2024-01-15T10:30:00Z', status: 'sent' }
      },
      {
        method: 'POST',
        path: '/conversations/:id/read',
        description: 'Mark conversation as read',
        purpose: 'Update read receipts when user views messages',
        responseBody: { read_at: '2024-01-15T10:30:00Z', unread_count: 0 }
      },
      {
        method: 'POST',
        path: '/conversations/:id/typing',
        description: 'Send typing indicator',
        purpose: 'Show "User is typing..." to other participants',
        responseBody: { status: 'ok' }
      },
      {
        method: 'WS',
        path: '/ws',
        description: 'WebSocket connection',
        purpose: 'Real-time message delivery, typing indicators, online status',
        responseBody: 'Events: message.new, message.read, user.typing, user.online'
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
        description: 'List available courses',
        purpose: 'Course catalog, search, browse by category',
        params: 'category, level, price, rating, page',
        responseBody: {
          courses: [{ 
            id: 1, title: 'React Masterclass', slug: 'react-masterclass',
            instructor: { name: 'John Doe' }, price: 49.99, rating: 4.8,
            students_count: 15000, thumbnail: '...', level: 'intermediate'
          }],
          pagination: { page: 1, total: 200 }
        }
      },
      {
        method: 'GET',
        path: '/courses/:slug',
        description: 'Get course details with curriculum',
        purpose: 'Course landing page with full info for purchase decision',
        responseBody: {
          id: 1, title: 'React Masterclass', description: '...',
          instructor: { id: 1, name: 'John', bio: '...', courses_count: 12, students: 50000 },
          curriculum: [{ section: 'Introduction', lessons: [{ id: 1, title: 'Welcome', duration: '5:30', preview: true }] }],
          price: 49.99, rating: 4.8, reviews_count: 1200, total_duration: '12h 30m',
          requirements: ['Basic JS'], what_you_learn: ['React hooks', 'State management']
        }
      },
      {
        method: 'POST',
        path: '/courses/:id/enroll',
        description: 'Enroll in course',
        purpose: 'Student purchases/enrolls in course',
        requestBody: { payment_method: 'card', coupon_code: 'SAVE20' },
        responseBody: { enrollment_id: 456, course_id: 1, access_until: '2025-01-15', start_url: '/learn/react-masterclass' }
      },
      {
        method: 'GET',
        path: '/enrollments',
        description: 'Get my enrolled courses',
        purpose: 'Student dashboard showing courses in progress',
        responseBody: {
          enrollments: [{ 
            course: { id: 1, title: 'React Masterclass', thumbnail: '...' },
            progress: 45, last_lesson: { id: 5, title: 'useEffect' }, enrolled_at: '...'
          }]
        }
      },
      {
        method: 'GET',
        path: '/lessons/:id',
        description: 'Get lesson content',
        purpose: 'Video player page with lesson content',
        responseBody: {
          id: 5, title: 'Understanding useEffect', 
          video_url: 'https://...', duration: '15:30',
          resources: [{ name: 'Cheatsheet.pdf', url: '...' }],
          next_lesson: { id: 6, title: 'Custom Hooks' },
          prev_lesson: { id: 4, title: 'useState' }
        }
      },
      {
        method: 'POST',
        path: '/lessons/:id/complete',
        description: 'Mark lesson as complete',
        purpose: 'Track student progress through course',
        responseBody: { lesson_id: 5, completed_at: '...', course_progress: 48, next_lesson_id: 6 }
      },
      {
        method: 'POST',
        path: '/lessons/:id/progress',
        description: 'Update video progress',
        purpose: 'Save playback position so user can resume later',
        requestBody: { current_time: 523, duration: 930 },
        responseBody: { saved: true, progress_percent: 56 }
      },
      // Quizzes
      {
        method: 'GET',
        path: '/lessons/:id/quiz',
        description: 'Get quiz for lesson',
        purpose: 'Knowledge check after completing lesson',
        responseBody: {
          quiz_id: 10, title: 'useEffect Quiz',
          questions: [{ id: 1, question: 'When does useEffect run?', options: ['A', 'B', 'C', 'D'], type: 'single' }]
        }
      },
      {
        method: 'POST',
        path: '/quizzes/:id/submit',
        description: 'Submit quiz answers',
        purpose: 'Check student understanding, unlock next section',
        requestBody: { answers: [{ question_id: 1, answer: 'B' }] },
        responseBody: { score: 80, passed: true, correct: 4, total: 5, explanations: [{ q: 1, correct: 'B', explanation: '...' }] }
      }
    ]
  },

  'inventory': {
    title: 'Inventory Management API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/inventory',
        description: 'Get stock levels across warehouses',
        purpose: 'Main inventory dashboard, stock overview',
        params: 'warehouse_id, low_stock, category',
        responseBody: {
          items: [{ sku: 'SKU001', name: 'Widget A', warehouse: 'Main', quantity: 150, reserved: 20, available: 130, reorder_point: 50 }],
          summary: { total_items: 500, low_stock_count: 12, total_value: 125000 }
        }
      },
      {
        method: 'POST',
        path: '/inventory/adjust',
        description: 'Adjust stock quantity',
        purpose: 'Manual stock corrections after count, damage, etc.',
        requestBody: { product_id: 123, warehouse_id: 1, quantity: -5, reason: 'damaged', notes: 'Water damage from leak' },
        responseBody: { movement_id: 456, new_quantity: 145, adjusted_by: 'John Doe', adjusted_at: '...' }
      },
      {
        method: 'POST',
        path: '/inventory/transfer',
        description: 'Transfer stock between warehouses',
        purpose: 'Move inventory to balance stock across locations',
        requestBody: { product_id: 123, from_warehouse: 1, to_warehouse: 2, quantity: 50 },
        responseBody: { transfer_id: 789, status: 'pending', from_new_qty: 100, to_new_qty: 150 }
      },
      {
        method: 'GET',
        path: '/movements',
        description: 'Get stock movement history',
        purpose: 'Audit trail, investigate discrepancies',
        params: 'product_id, warehouse_id, type, date_from, date_to',
        responseBody: {
          movements: [{ id: 1, type: 'IN', product: 'Widget A', quantity: 100, reference: 'PO-001', by: 'Jane', at: '...' }]
        }
      },
      // Purchase Orders
      {
        method: 'POST',
        path: '/purchase-orders',
        description: 'Create purchase order',
        purpose: 'Order inventory from suppliers',
        requestBody: { 
          supplier_id: 5, warehouse_id: 1,
          items: [{ product_id: 123, quantity: 100, unit_price: 10.00 }],
          expected_date: '2024-02-01'
        },
        responseBody: { po_id: 101, po_number: 'PO-2024-101', total: 1000, status: 'draft' }
      },
      {
        method: 'POST',
        path: '/purchase-orders/:id/receive',
        description: 'Receive goods from PO',
        purpose: 'Record inventory when shipment arrives',
        requestBody: { items: [{ product_id: 123, received_qty: 95, notes: '5 items damaged' }] },
        responseBody: { po_id: 101, status: 'partial', received_at: '...', inventory_updated: true }
      },
      // Reports
      {
        method: 'GET',
        path: '/reports/low-stock',
        description: 'Low stock alert report',
        purpose: 'Identify items needing reorder',
        responseBody: {
          items: [{ sku: 'SKU001', name: 'Widget A', current: 45, reorder_point: 50, suggested_order: 100 }]
        }
      },
      {
        method: 'GET',
        path: '/reports/valuation',
        description: 'Inventory valuation report',
        purpose: 'Financial reporting, asset value',
        responseBody: {
          warehouses: [{ id: 1, name: 'Main', total_value: 85000, item_count: 1200 }],
          total_value: 125000
        }
      }
    ]
  },

  'healthcare': {
    title: 'Healthcare System API',
    baseUrl: '/api/v1',
    routes: [
      {
        method: 'GET',
        path: '/patients/:id',
        description: 'Get patient details',
        purpose: 'View patient profile, contact info, insurance',
        responseBody: {
          id: 1, mrn: 'MRN-001', name: 'John Smith', dob: '1985-03-15', gender: 'male',
          contact: { phone: '555-1234', email: '...' }, insurance: { provider: 'Blue Cross', id: '...' },
          allergies: ['Penicillin'], blood_type: 'O+'
        }
      },
      {
        method: 'GET',
        path: '/patients/:id/history',
        description: 'Get medical history',
        purpose: 'Review past visits, diagnoses, treatments',
        responseBody: {
          records: [{ date: '2024-01-10', doctor: 'Dr. Jane', diagnosis: 'Flu', treatment: '...', notes: '...' }],
          conditions: ['Hypertension'], medications: [{ name: 'Lisinopril', dosage: '10mg', frequency: 'daily' }]
        }
      },
      // Appointments
      {
        method: 'GET',
        path: '/doctors/:id/availability',
        description: 'Get doctor available slots',
        purpose: 'Show open times when booking appointment',
        params: 'date, duration',
        responseBody: {
          date: '2024-01-20',
          slots: [{ start: '09:00', end: '09:30', available: true }, { start: '09:30', end: '10:00', available: false }]
        }
      },
      {
        method: 'POST',
        path: '/appointments',
        description: 'Book appointment',
        purpose: 'Patient schedules visit with doctor',
        requestBody: { patient_id: 1, doctor_id: 5, date: '2024-01-20', time: '09:00', type: 'consultation', reason: 'Annual checkup' },
        responseBody: { appointment_id: 100, confirmation: 'APT-2024-100', reminder_sent: true }
      },
      {
        method: 'PUT',
        path: '/appointments/:id/check-in',
        description: 'Patient check-in',
        purpose: 'Mark patient arrived for appointment',
        responseBody: { checked_in_at: '...', wait_time_estimate: 15, queue_position: 3 }
      },
      // Medical Records
      {
        method: 'POST',
        path: '/records',
        description: 'Create medical record',
        purpose: 'Doctor documents visit findings',
        requestBody: { 
          patient_id: 1, appointment_id: 100,
          chief_complaint: 'Headaches', diagnosis: 'Tension headache', diagnosis_code: 'G44.2',
          treatment_plan: 'OTC pain relievers, reduce screen time', notes: '...'
        },
        responseBody: { record_id: 200, created_at: '...' }
      },
      // Prescriptions
      {
        method: 'POST',
        path: '/prescriptions',
        description: 'Create prescription',
        purpose: 'Doctor prescribes medication',
        requestBody: {
          patient_id: 1, record_id: 200,
          medications: [{ name: 'Ibuprofen', dosage: '400mg', frequency: 'every 6 hours', duration: '7 days', quantity: 28 }]
        },
        responseBody: { prescription_id: 300, pharmacy_sent: true, refills_allowed: 2 }
      },
      // Labs
      {
        method: 'POST',
        path: '/labs/order',
        description: 'Order lab tests',
        purpose: 'Doctor orders blood work, imaging, etc.',
        requestBody: { patient_id: 1, tests: ['CBC', 'CMP', 'Lipid Panel'], priority: 'routine', fasting: true },
        responseBody: { order_id: 400, tests_ordered: 3, instructions: 'Fasting 12 hours before test' }
      },
      {
        method: 'PUT',
        path: '/labs/:id/results',
        description: 'Enter lab results',
        purpose: 'Lab technician records test results',
        requestBody: { results: [{ test: 'Glucose', value: 95, unit: 'mg/dL', flag: 'normal' }] },
        responseBody: { lab_id: 400, status: 'completed', abnormal_count: 0 }
      }
    ]
  }
};

export default apiRoutesDetailed;
