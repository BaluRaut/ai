// Enhanced API Routes with Request/Response Bodies - Part 3

export const part3Routes = {
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
          author: { id: 1, name: 'John Doe', bio: '...', avatar: '...', social: { twitter: '...' } },
          category: { id: 5, name: 'Tutorials' },
          tags: [{ id: 1, name: 'react', slug: 'react' }],
          published_at: '2024-01-15', updated_at: '2024-01-16',
          meta: { description: '...', og_image: '...' },
          related_posts: [{ id: 2, title: 'Advanced React Patterns', slug: '...' }]
        }
      },
      {
        method: 'POST',
        path: '/posts',
        description: 'Create new post',
        purpose: 'Author creates a new blog post',
        requestBody: {
          title: 'My New Post',
          content: '<p>Post content...</p>',
          excerpt: 'Short summary...',
          category_id: 5,
          tags: ['react', 'tutorial'],
          featured_image_id: 100,
          status: 'draft',
          meta: { description: 'SEO description', keywords: ['...'] }
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
      // Categories & Tags
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
          }, {
            id: 101, sender: { id: 1, name: 'Me' },
            content: null, type: 'image',
            attachment: { url: '...', thumbnail: '...', width: 800, height: 600 },
            sent_at: '...'
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
        method: 'POST',
        path: '/conversations/:id/typing',
        description: 'Send typing indicator',
        purpose: 'Show "User is typing..." to others',
        responseBody: { ok: true }
      },
      // WebSocket events (for documentation)
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
          total: 500, filters: { categories: [...], levels: [...] }
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
          requirements: ['Basic computer skills'],
          curriculum: [{
            section: 'Introduction', duration_mins: 45,
            lessons: [{ id: 1, title: 'Welcome', duration: 5, preview: true }]
          }],
          instructor: { name: '...', bio: '...', courses: 12, students: 100000 },
          reviews_summary: { avg: 4.8, total: 5200, distribution: { 5: 4000, 4: 800 } }
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
          lesson: { id: 1, title: 'Welcome', video_url: '...', duration: 300, resources: [{ name: 'Slides.pdf', url: '...' }] },
          progress: { completed: false, watched_seconds: 120 },
          next_lesson: { id: 2, title: 'Setup' },
          prev_lesson: null
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
        path: '/learn/:slug/lesson/:lessonId/complete',
        description: 'Mark lesson complete',
        purpose: 'User finishes a lesson',
        responseBody: { completed: true, course_progress: 18, next_lesson: { id: 2, title: 'Setup' } }
      },
      // Quizzes
      {
        method: 'GET',
        path: '/learn/:slug/quiz/:quizId',
        description: 'Get quiz questions',
        purpose: 'Load quiz for knowledge check',
        responseBody: {
          quiz: { id: 1, title: 'HTML Basics Quiz', questions_count: 10, time_limit: 600 },
          questions: [{ id: 1, text: 'What does HTML stand for?', type: 'multiple_choice', options: ['A', 'B', 'C', 'D'] }]
        }
      },
      {
        method: 'POST',
        path: '/learn/:slug/quiz/:quizId/submit',
        description: 'Submit quiz answers',
        purpose: 'Grade quiz and show results',
        requestBody: { answers: [{ question_id: 1, answer: 'A' }] },
        responseBody: { score: 80, passed: true, correct: 8, total: 10, review: [{ q: 1, correct: true }] }
      },
      // Certificate
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
            warehouses: [{ id: 1, name: 'Main', qty: 300 }, { id: 2, name: 'West', qty: 200 }],
            reorder_point: 100, status: 'active'
          }],
          total: 1200
        }
      },
      {
        method: 'GET',
        path: '/products/:sku',
        description: 'Get product details',
        purpose: 'Full product info with history',
        responseBody: {
          id: 1, sku: 'PROD-001', name: 'Widget A',
          description: '...', category: 'Electronics',
          cost: 15.00, price: 29.99, margin: 50,
          dimensions: { weight: 0.5, length: 10, width: 5, height: 3 },
          stock_by_warehouse: [{ warehouse: 'Main', qty: 300, bin: 'A-12-3' }],
          suppliers: [{ id: 10, name: 'Acme Corp', lead_time_days: 7 }],
          stock_history: [{ date: '2024-01-15', type: 'received', qty: 100 }]
        }
      },
      {
        method: 'POST',
        path: '/stock/receive',
        description: 'Receive stock',
        purpose: 'Record incoming inventory from supplier',
        requestBody: {
          purchase_order_id: 500,
          items: [{ sku: 'PROD-001', qty: 100, warehouse_id: 1, bin: 'A-12-3' }],
          received_by: 'John Doe'
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
          items: [{ sku: 'PROD-001', qty: 50 }],
          reason: 'Rebalancing stock'
        },
        responseBody: { transfer_id: 700, status: 'in_transit', estimated_arrival: '2024-01-20' }
      },
      {
        method: 'POST',
        path: '/stock/adjust',
        description: 'Stock adjustment',
        purpose: 'Correct inventory counts (damage, loss)',
        requestBody: {
          sku: 'PROD-001', warehouse_id: 1,
          adjustment: -5, reason: 'damaged', notes: 'Water damage'
        },
        responseBody: { adjustment_id: 800, new_qty: 295, adjusted_by: 'John' }
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
            suggested_order: 200, supplier: 'Acme Corp'
          }]
        }
      },
      // Purchase Orders
      {
        method: 'POST',
        path: '/purchase-orders',
        description: 'Create purchase order',
        purpose: 'Order stock from supplier',
        requestBody: {
          supplier_id: 10,
          items: [{ sku: 'PROD-001', qty: 200, unit_cost: 15.00 }],
          expected_delivery: '2024-01-25'
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
          contact: { phone: '555-1234', email: '...', address: '...' },
          emergency_contact: { name: 'Jane Doe', relation: 'Spouse', phone: '...' },
          insurance: { provider: 'BlueCross', policy: '...', group: '...' },
          allergies: ['Penicillin'], conditions: ['Hypertension'],
          primary_physician: { id: 100, name: 'Dr. Smith' }
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
            id: 100, name: 'Dr. Sarah Smith', credentials: 'MD, FACP',
            specialty: 'Internal Medicine', photo: '...',
            location: { clinic: 'Main Hospital', address: '...' },
            rating: 4.8, accepts_insurance: ['BlueCross', 'Aetna'],
            next_available: '2024-01-20'
          }]
        }
      },
      {
        method: 'GET',
        path: '/doctors/:id/availability',
        description: 'Get doctor availability',
        purpose: 'Show open appointment slots',
        params: 'date_from, date_to',
        responseBody: {
          doctor_id: 100, name: 'Dr. Smith',
          slots: [
            { date: '2024-01-20', times: ['09:00', '10:00', '14:00'] },
            { date: '2024-01-21', times: ['11:00', '15:00'] }
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
          type: 'follow_up', reason: 'Blood pressure check',
          notes: 'Patient prefers morning'
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
          visits: [{
            id: 100, date: '2024-01-10', doctor: 'Dr. Smith',
            type: 'Office Visit', diagnosis: ['J06.9 - Acute URI'],
            vitals: { bp: '120/80', hr: 72, temp: 98.6 },
            notes: 'Patient reports cold symptoms...'
          }],
          medications: [{ name: 'Lisinopril', dose: '10mg', frequency: 'Daily' }],
          lab_results: [{ date: '2024-01-05', test: 'CBC', status: 'normal' }]
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
          frequency: '3x daily', duration: '10 days',
          quantity: 30, refills: 0, pharmacy_id: 50
        },
        responseBody: { rx_id: 800, sent_to_pharmacy: true, pharmacy: 'CVS Main St' }
      }
    ]
  }
};

export default part3Routes;
