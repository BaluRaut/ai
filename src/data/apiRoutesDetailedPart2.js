// Enhanced API Routes with Request/Response Bodies - Part 2

import { apiRoutesDetailed as part1 } from './apiRoutesDetailed';

const part2 = {
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
            { type: 'economy', price_range: '$12-15', eta: 3, surge: 1.0 },
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
        responseBody: { 
          ride_id: 5001, status: 'searching', 
          estimated_pickup: '3 mins', estimated_fare: 20.00
        }
      },
      {
        method: 'GET',
        path: '/rides/:id',
        description: 'Get ride details',
        purpose: 'View ride status, driver info, route',
        responseBody: {
          id: 5001, status: 'in_progress',
          driver: { id: 100, name: 'Mike', photo: '...', rating: 4.9, vehicle: { make: 'Toyota', model: 'Camry', plate: 'ABC123', color: 'Black' } },
          pickup: { address: '123 Main St', arrived_at: '...' },
          dropoff: { address: '456 Park Ave', eta: '10 mins' },
          fare: { estimated: 20.00, surge: 1.0 }
        }
      },
      {
        method: 'GET',
        path: '/rides/:id/track',
        description: 'Get real-time location',
        purpose: 'Show driver position on map during ride',
        responseBody: { lat: 40.7350, lng: -73.9900, heading: 45, speed: 25, eta_mins: 8, updated_at: '...' }
      },
      {
        method: 'POST',
        path: '/rides/:id/rate',
        description: 'Rate the ride',
        purpose: 'User provides feedback after trip',
        requestBody: { rating: 5, feedback: 'Great driver!', tip: 5.00 },
        responseBody: { rated: true, tip_added: true }
      },
      // Driver endpoints
      {
        method: 'PUT',
        path: '/driver/status',
        description: 'Set driver online/offline',
        purpose: 'Driver starts/stops accepting rides',
        requestBody: { status: 'online', location: { lat: 40.7128, lng: -74.0060 } },
        responseBody: { status: 'online', since: '...', earnings_today: 125.50 }
      },
      {
        method: 'GET',
        path: '/driver/rides/available',
        description: 'Get nearby ride requests',
        purpose: 'Show available rides driver can accept',
        responseBody: {
          rides: [{ id: 5002, pickup_distance: '0.3 mi', pickup_address: '...', fare_estimate: 25.00, surge: 1.5 }]
        }
      },
      {
        method: 'POST',
        path: '/driver/rides/:id/accept',
        description: 'Accept ride request',
        purpose: 'Driver takes the ride job',
        responseBody: { 
          ride_id: 5002, rider: { name: 'John', phone: '555-1234' },
          pickup: { address: '...', lat: 40.7128, lng: -74.0060, eta: 4 }
        }
      },
      {
        method: 'PUT',
        path: '/driver/rides/:id/complete',
        description: 'Complete the ride',
        purpose: 'Mark ride finished, trigger payment',
        responseBody: { 
          ride_id: 5002, final_fare: 22.50, your_earnings: 16.88,
          trip_summary: { distance_km: 5.2, duration_mins: 18 }
        }
      },
      {
        method: 'GET',
        path: '/driver/earnings',
        description: 'Get earnings report',
        purpose: 'Driver views income summary',
        params: 'period (today, week, month)',
        responseBody: {
          period: 'week', total: 850.00, trips: 42, hours_online: 35,
          breakdown: [{ date: '2024-01-15', trips: 8, earnings: 120 }]
        }
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
            id: 1, title: 'Senior React Developer', company: { name: 'TechCorp', logo: '...' },
            location: 'New York, NY', remote: true, salary_range: '$120k-150k',
            posted_at: '2 days ago', skills: ['React', 'TypeScript']
          }],
          total: 250, filters: { locations: ['NYC', 'SF'], types: ['full-time', 'contract'] }
        }
      },
      {
        method: 'GET',
        path: '/jobs/:slug',
        description: 'Get full job details',
        purpose: 'Job detail page with full description',
        responseBody: {
          id: 1, title: 'Senior React Developer',
          company: { id: 10, name: 'TechCorp', description: '...', size: '51-200', industry: 'Tech' },
          description: '<p>Full HTML...</p>', requirements: ['5+ years React', 'TypeScript'],
          benefits: ['Health', '401k', 'Remote'], salary: { min: 120000, max: 150000 },
          applicants: 45, posted_at: '...', expires_at: '...'
        }
      },
      {
        method: 'POST',
        path: '/jobs/:id/apply',
        description: 'Apply to job',
        purpose: 'Candidate submits application',
        requestBody: { cover_letter: 'I am excited to apply...', resume_url: '/resumes/john.pdf', answers: [{ q: 1, a: 'Yes' }] },
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
        requestBody: { status: 'interview', notes: 'Strong candidate, schedule technical' },
        responseBody: { status: 'interview', updated_at: '...' }
      },
      {
        method: 'POST',
        path: '/applications/:id/schedule',
        description: 'Schedule interview',
        purpose: 'Book interview with candidate',
        requestBody: { 
          type: 'video', datetime: '2024-01-20T14:00:00Z', duration: 60,
          interviewers: [101, 102], meeting_link: 'https://meet.google.com/...'
        },
        responseBody: { interview_id: 50, calendar_invite_sent: true }
      },
      // Profile
      {
        method: 'PUT',
        path: '/profile',
        description: 'Update candidate profile',
        purpose: 'Keep resume/skills current for job matching',
        requestBody: { 
          headline: 'Senior Full Stack Developer', summary: '...',
          skills: ['React', 'Node.js', 'PostgreSQL'], years_experience: 8,
          expected_salary: 130000, open_to_work: true
        },
        responseBody: { updated: true, profile_strength: 85 }
      },
      // Saved Jobs
      {
        method: 'POST',
        path: '/jobs/:id/save',
        description: 'Save job for later',
        purpose: 'Bookmark interesting jobs',
        responseBody: { saved: true, saved_count: 12 }
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
            type_id: 10, name: 'Deluxe King', capacity: 2, beds: '1 King',
            price_per_night: 180, total_price: 540, available: 3,
            amenities: ['ocean view', 'balcony'], images: ['...']
          }],
          policies: { check_in: '15:00', check_out: '11:00', cancellation: '24h free' }
        }
      },
      {
        method: 'POST',
        path: '/reservations',
        description: 'Create reservation',
        purpose: 'Book selected room',
        requestBody: {
          hotel_id: 1, room_type_id: 10, check_in: '2024-02-01', check_out: '2024-02-04',
          guests: 2, guest_info: { name: 'John Doe', email: '...', phone: '...' },
          special_requests: 'High floor please', payment_method_id: 1
        },
        responseBody: {
          reservation_id: 1001, confirmation: 'RES-ABC123',
          total: 540, status: 'confirmed', confirmation_email_sent: true
        }
      },
      {
        method: 'GET',
        path: '/reservations/:confirmation',
        description: 'Get reservation details',
        purpose: 'View/manage booking',
        responseBody: {
          id: 1001, confirmation: 'RES-ABC123', status: 'confirmed',
          hotel: { name: 'Grand Hotel', address: '...', phone: '...' },
          room: { type: 'Deluxe King', number: null },
          dates: { check_in: '2024-02-01', check_out: '2024-02-04', nights: 3 },
          guest: { name: 'John Doe' }, total: 540,
          cancellation_deadline: '2024-01-31T15:00:00Z'
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
            price_level: 2, image: '...', is_open: true, distance_km: 1.2
          }]
        }
      },
      {
        method: 'GET',
        path: '/restaurants/:slug',
        description: 'Get restaurant with menu',
        purpose: 'Restaurant page with full menu',
        responseBody: {
          id: 1, name: 'Pizza Palace', rating: 4.6, address: '...',
          hours: { today: '11:00-22:00', is_open: true },
          menu: [{
            category: 'Pizzas',
            items: [{ id: 101, name: 'Margherita', price: 14.99, description: '...', image: '...', popular: true }]
          }],
          delivery_fee: 2.99, min_order: 15.00
        }
      },
      {
        method: 'POST',
        path: '/cart/items',
        description: 'Add item to cart',
        purpose: 'User adds food to order',
        requestBody: { 
          restaurant_id: 1, item_id: 101, quantity: 2,
          customizations: { size: 'large', toppings: ['mushrooms', 'olives'] },
          special_instructions: 'Extra crispy'
        },
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
        responseBody: {
          order_id: 2001, order_number: 'ORD-2001',
          total: 52.96, estimated_delivery: '35-45 min',
          status: 'confirmed'
        }
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
            { status: 'ready', at: '18:50' },
            { status: 'picked_up', at: '18:55' }
          ],
          driver: { name: 'Alex', phone: '555-1234', vehicle: 'Honda Civic' },
          location: { lat: 40.7200, lng: -73.9900 },
          eta_mins: 8
        }
      },
      // Restaurant Dashboard
      {
        method: 'GET',
        path: '/restaurant/orders',
        description: 'Get incoming orders',
        purpose: 'Restaurant manages order queue',
        responseBody: {
          orders: [{
            id: 2001, order_number: 'ORD-2001', status: 'new',
            items: [{ name: 'Margherita', qty: 2, mods: 'large, mushrooms' }],
            total: 35.98, placed_at: '18:30', prep_time_suggestion: 20
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
            price_from: 75, image: '...', tickets_available: true
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
          venue: { id: 10, name: 'MSG', address: '...', seating_chart_url: '...' },
          date: '2024-03-15', doors_open: '18:00', start_time: '20:00',
          ticket_types: [
            { id: 1, name: 'Floor', price: 150, available: 50 },
            { id: 2, name: 'Lower Bowl', price: 100, available: 200 }
          ],
          age_restriction: '18+', policies: { no_refunds: true }
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
          total: 315, receipt_url: '...'
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
          benefits: ['all classes', 'personal training discount', 'guest passes'],
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
            difficulty: 'intermediate', spots_left: 5, max_capacity: 20
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
      // Workouts
      {
        method: 'POST',
        path: '/workouts',
        description: 'Log workout',
        purpose: 'Record exercise session',
        requestBody: {
          date: '2024-01-19', duration: 60, type: 'strength',
          exercises: [
            { name: 'Bench Press', sets: [{ reps: 10, weight: 135 }, { reps: 8, weight: 155 }] },
            { name: 'Squats', sets: [{ reps: 12, weight: 185 }] }
          ],
          notes: 'Felt strong today'
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
          top_exercises: [{ name: 'Bench Press', times: 8 }],
          progress: { weight_lifted: '+15%', cardio_duration: '+20%' }
        }
      },
      // Check-in
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

// Merge both parts
export const apiRoutesDetailed = { ...part1, ...part2 };
export default apiRoutesDetailed;
