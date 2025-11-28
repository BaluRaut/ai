export const advancedTopics = {
  'mongodb': {
    id: 'mongodb',
    pathId: 'advanced',
    title: 'MongoDB Basics',
    description: 'Introduction to document-oriented NoSQL databases',
    content: {
      overview: 'MongoDB is a popular NoSQL document database that stores data in flexible, JSON-like documents. It provides high performance, high availability, and easy scalability.',
      keyPoints: [
        'Document-oriented data model',
        'Flexible schema design',
        'Horizontal scalability',
        'Rich query language',
        'Built-in replication and sharding',
      ],
      useCases: [
        'Content management systems',
        'Real-time analytics',
        'IoT applications',
        'Mobile applications',
        'Catalog management',
      ],
      bestPractices: [
        'Design schema based on access patterns',
        'Use embedded documents for related data',
        'Index frequently queried fields',
        'Limit document size (16MB max)',
        'Use aggregation pipeline for complex queries',
      ],
      doAndDont: {
        do: [
          'Embed related data when accessed together',
          'Use references for large or independent collections',
          'Create indexes on query fields',
          'Use projection to limit returned fields',
          'Leverage aggregation framework',
        ],
        dont: [
          'Treat MongoDB like a relational database',
          'Create deeply nested documents',
          'Ignore index usage',
          'Store large files without GridFS',
          'Use transactions when not necessary',
        ],
      },
    },
    examples: [
      {
        title: 'Basic CRUD Operations',
        code: `// Insert documents
db.users.insertOne({
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
});

// Insert multiple documents
db.users.insertMany([
    { name: "Jane Smith", email: "jane@example.com", age: 25 },
    { name: "Bob Johnson", email: "bob@example.com", age: 35 }
]);

// Find documents
db.users.find({ age: { $gt: 25 } });

// Update document
db.users.updateOne(
    { email: "john@example.com" },
    { $set: { age: 31, "address.city": "Boston" } }
);

// Delete document
db.users.deleteOne({ email: "john@example.com" });`,
        language: 'javascript',
      },
      {
        title: 'Queries and Filtering',
        code: `// Find with multiple conditions
db.products.find({
    price: { $gte: 100, $lte: 500 },
    category: "Electronics"
});

// Find with OR condition
db.products.find({
    $or: [
        { category: "Electronics" },
        { category: "Computers" }
    ]
});

// Text search
db.products.find({
    $text: { $search: "laptop gaming" }
});

// Find with projection
db.users.find(
    { age: { $gt: 25 } },
    { name: 1, email: 1, _id: 0 }
);

// Sort and limit
db.products.find()
    .sort({ price: -1 })
    .limit(10);`,
        language: 'javascript',
      },
      {
        title: 'Aggregation Pipeline',
        code: `// Group by and calculate
db.orders.aggregate([
    {
        $match: { status: "completed" }
    },
    {
        $group: {
            _id: "$customerId",
            totalOrders: { $sum: 1 },
            totalSpent: { $sum: "$amount" },
            avgOrderValue: { $avg: "$amount" }
        }
    },
    {
        $sort: { totalSpent: -1 }
    },
    {
        $limit: 10
    }
]);

// Lookup (join) example
db.orders.aggregate([
    {
        $lookup: {
            from: "customers",
            localField: "customerId",
            foreignField: "_id",
            as: "customerInfo"
        }
    },
    {
        $unwind: "$customerInfo"
    }
]);`,
        language: 'javascript',
      },
    ],
    quiz: [
      {
        question: 'What is the main data structure used in MongoDB?',
        options: ['Tables', 'Documents', 'Graphs', 'Key-Value pairs'],
        correctAnswer: 1,
        explanation: 'MongoDB stores data in flexible, JSON-like documents, which can have varying structures.',
      },
      {
        question: 'What is the maximum document size in MongoDB?',
        options: ['1MB', '4MB', '16MB', 'Unlimited'],
        correctAnswer: 2,
        explanation: 'MongoDB documents have a maximum size of 16 megabytes to ensure that a single document cannot use excessive amount of RAM or bandwidth during transmission.',
      },
      {
        question: 'What is the MongoDB equivalent of a SQL table?',
        options: ['Document', 'Collection', 'Database', 'Schema'],
        correctAnswer: 1,
        explanation: 'A collection in MongoDB is similar to a table in SQL databases. It contains multiple documents.',
      },
      {
        question: 'Which operator is used to query values greater than a specified value?',
        options: ['$gt', '$greater', '$more', '>'],
        correctAnswer: 0,
        explanation: '$gt (greater than) is the MongoDB query operator for comparing values greater than a specified value.',
      },
      {
        question: 'What is the aggregation pipeline used for?',
        options: [
          'Creating indexes',
          'Processing and transforming data through stages',
          'Connecting to databases',
          'Backing up data',
        ],
        correctAnswer: 1,
        explanation: 'The aggregation pipeline processes documents through multiple stages, allowing data transformation, grouping, and analysis.',
      },
      {
        question: 'When should you embed documents vs use references?',
        options: [
          'Always embed, never reference',
          'Embed for frequently accessed together data, reference for large/independent data',
          'Always use references for better performance',
          'Use embedding only for arrays',
        ],
        correctAnswer: 1,
        explanation: 'Embed documents when data is frequently accessed together. Use references for large documents or data that is accessed independently.',
      },
    ],
    playground: {
      type: 'nosql',
      initialData: {
        users: [
          { _id: 1, name: 'Alice Johnson', email: 'alice@example.com', age: 28, city: 'New York', status: 'active', joinDate: '2023-01-15' },
          { _id: 2, name: 'Bob Smith', email: 'bob@example.com', age: 35, city: 'Los Angeles', status: 'active', joinDate: '2023-02-20' },
          { _id: 3, name: 'Charlie Brown', email: 'charlie@example.com', age: 42, city: 'Chicago', status: 'inactive', joinDate: '2022-11-10' },
          { _id: 4, name: 'Diana Prince', email: 'diana@example.com', age: 31, city: 'New York', status: 'active', joinDate: '2023-03-05' },
          { _id: 5, name: 'Eve Davis', email: 'eve@example.com', age: 29, city: 'San Francisco', status: 'active', joinDate: '2023-01-25' },
        ],
        products: [
          { _id: 101, name: 'Laptop', category: 'Electronics', price: 999, stock: 50, tags: ['computer', 'portable'] },
          { _id: 102, name: 'Mouse', category: 'Electronics', price: 25, stock: 200, tags: ['computer', 'accessory'] },
          { _id: 103, name: 'Desk', category: 'Furniture', price: 299, stock: 30, tags: ['office', 'workspace'] },
          { _id: 104, name: 'Chair', category: 'Furniture', price: 199, stock: 45, tags: ['office', 'seating'] },
          { _id: 105, name: 'Monitor', category: 'Electronics', price: 350, stock: 60, tags: ['computer', 'display'] },
        ],
        orders: [
          { _id: 201, userId: 1, productId: 101, quantity: 1, total: 999, status: 'completed', orderDate: '2023-04-10' },
          { _id: 202, userId: 2, productId: 102, quantity: 2, total: 50, status: 'completed', orderDate: '2023-04-11' },
          { _id: 203, userId: 1, productId: 105, quantity: 1, total: 350, status: 'pending', orderDate: '2023-04-12' },
          { _id: 204, userId: 4, productId: 103, quantity: 1, total: 299, status: 'completed', orderDate: '2023-04-13' },
          { _id: 205, userId: 5, productId: 104, quantity: 2, total: 398, status: 'completed', orderDate: '2023-04-14' },
        ],
      },
      exercises: [
        {
          title: 'Find All Active Users',
          difficulty: 'Easy',
          problem: 'Find all users with status "active" and display their names and emails.',
          starterCode: `// Find active users
const activeUsers = db.users.find({ status: 'active' }).toArray();
results.push(activeUsers);`,
          hints: [
            'Use db.users.find() with a query object',
            'Match status field with "active"',
            'Don\'t forget .toArray() to get results',
          ],
          solution: `const activeUsers = db.users.find({ status: 'active' }).toArray();
results.push(activeUsers);`,
          validate: (result, db) => {
            return result[0] && result[0].length === 4 && result[0].every(u => u.status === 'active');
          },
        },
        {
          title: 'Filter by Age Range',
          difficulty: 'Easy',
          problem: 'Find all users between ages 30 and 40 (inclusive).',
          starterCode: `// Find users in age range
const users = db.users.find({ /* your query */ }).toArray();
results.push(users);`,
          hints: [
            'Use $gte (greater than or equal) and $lte (less than or equal)',
            'Combine operators in the age field: { age: { $gte: 30, $lte: 40 } }',
            'This should return users aged 30-40',
          ],
          solution: `const users = db.users.find({ 
  age: { $gte: 30, $lte: 40 } 
}).toArray();
results.push(users);`,
          validate: (result, db) => {
            return result[0] && result[0].length === 3 && result[0].every(u => u.age >= 30 && u.age <= 40);
          },
        },
        {
          title: 'Projection - Select Specific Fields',
          difficulty: 'Easy',
          problem: 'Find all products but only show name, price, and category fields (exclude _id).',
          starterCode: `// Use projection to select fields
const products = db.products.find({}, { /* projection */ }).toArray();
results.push(products);`,
          hints: [
            'Second parameter to find() is projection',
            'Use 1 to include fields: { name: 1, price: 1, category: 1 }',
            'Use _id: 0 to exclude _id field',
          ],
          solution: `const products = db.products.find({}, { 
  name: 1, 
  price: 1, 
  category: 1, 
  _id: 0 
}).toArray();
results.push(products);`,
          validate: (result, db) => {
            return result[0] && result[0].length === 5 && result[0].every(p => !p._id && p.name && p.price && p.category);
          },
        },
        {
          title: 'Sort and Limit',
          difficulty: 'Medium',
          problem: 'Find the 3 most expensive products, sorted by price in descending order.',
          starterCode: `// Sort by price descending and limit to 3
const expensive = db.products.find().sort({ /* sort */ }).limit(3).toArray();
results.push(expensive);`,
          hints: [
            'Use .sort() to order results',
            'Descending order uses -1: { price: -1 }',
            'Chain .limit(3) after sort',
          ],
          solution: `const expensive = db.products.find()
  .sort({ price: -1 })
  .limit(3)
  .toArray();
results.push(expensive);`,
          validate: (result, db) => {
            return result[0] && result[0].length === 3 && result[0][0].price >= result[0][1].price;
          },
        },
        {
          title: 'Update Document',
          difficulty: 'Medium',
          problem: 'Update the user with email "bob@example.com" to set their city to "Seattle" and age to 36.',
          starterCode: `// Update user document
db.users.updateOne(
  { /* query */ },
  { $set: { /* fields to update */ } }
);
const updated = db.users.findOne({ email: 'bob@example.com' });
results.push(updated);`,
          hints: [
            'Use updateOne() with query and update object',
            'Query: { email: "bob@example.com" }',
            'Update with $set: { city: "Seattle", age: 36 }',
          ],
          solution: `db.users.updateOne(
  { email: 'bob@example.com' },
  { $set: { city: 'Seattle', age: 36 } }
);
const updated = db.users.findOne({ email: 'bob@example.com' });
results.push(updated);`,
          validate: (result, db) => {
            return result[0] && result[0].city === 'Seattle' && result[0].age === 36;
          },
        },
        {
          title: 'Count Documents',
          difficulty: 'Medium',
          problem: 'Count how many products are in the "Electronics" category.',
          starterCode: `// Count electronics products
const count = db.products.countDocuments({ /* query */ });
results.push({ electronicsCount: count });`,
          hints: [
            'Use countDocuments() method',
            'Pass query object: { category: "Electronics" }',
            'Returns a number, not documents',
          ],
          solution: `const count = db.products.countDocuments({ category: 'Electronics' });
results.push({ electronicsCount: count });`,
          validate: (result, db) => {
            return result[0] && result[0].electronicsCount === 3;
          },
        },
        {
          title: 'Aggregation - Group by City',
          difficulty: 'Hard',
          problem: 'Use aggregation to count how many users are in each city.',
          starterCode: `// Aggregate users by city
const cityGroups = db.users.aggregate([
  {
    $group: {
      _id: '$city',
      userCount: { $sum: 1 }
    }
  }
]).toArray();
results.push(cityGroups);`,
          hints: [
            'Use aggregate() with pipeline array',
            '$group stage groups by a field',
            '$sum: 1 counts each document',
          ],
          solution: `const cityGroups = db.users.aggregate([
  {
    $group: {
      _id: '$city',
      userCount: { $sum: 1 }
    }
  }
]).toArray();
results.push(cityGroups);`,
          validate: (result, db) => {
            return result[0] && result[0].length === 4 && result[0].every(g => g._id && g.userCount);
          },
        },
        {
          title: 'Complex Aggregation Pipeline',
          difficulty: 'Hard',
          problem: 'Find total revenue per user (sum of order totals) for users who have placed orders, sorted by revenue descending.',
          starterCode: `// Aggregate orders by user
const revenue = db.orders.aggregate([
  { $group: {
    _id: '$userId',
    totalRevenue: { $sum: '$total' },
    orderCount: { $sum: 1 }
  }},
  { $sort: { totalRevenue: -1 } }
]).toArray();
results.push(revenue);`,
          hints: [
            'Group by userId field',
            'Use $sum: "$total" to sum the total field',
            'Sort by totalRevenue in descending order (-1)',
          ],
          solution: `const revenue = db.orders.aggregate([
  { 
    $group: {
      _id: '$userId',
      totalRevenue: { $sum: '$total' },
      orderCount: { $sum: 1 }
    }
  },
  { $sort: { totalRevenue: -1 } }
]).toArray();
results.push(revenue);`,
          validate: (result, db) => {
            return result[0] && result[0].length === 4 && result[0][0].totalRevenue >= result[0][1].totalRevenue;
          },
        },
      ],
    },
  },

  'redis': {
    id: 'redis',
    pathId: 'advanced',
    title: 'Redis Fundamentals',
    description: 'Master in-memory data store for caching and real-time applications',
    content: {
      overview: 'Redis is an open-source, in-memory data structure store used as a database, cache, and message broker. It supports various data structures and provides exceptional performance.',
      keyPoints: [
        'In-memory storage for ultra-fast access',
        'Support for various data structures',
        'Persistence options available',
        'Pub/Sub messaging',
        'Atomic operations',
      ],
      useCases: [
        'Caching frequently accessed data',
        'Session management',
        'Real-time analytics',
        'Leaderboards and counting',
        'Message queues',
      ],
      bestPractices: [
        'Use appropriate data structures',
        'Set expiration times for cache keys',
        'Monitor memory usage',
        'Use pipelining for multiple commands',
        'Implement proper eviction policies',
      ],
      doAndDont: {
        do: [
          'Set TTL on cache entries',
          'Use appropriate data structures',
          'Monitor memory consumption',
          'Use connection pooling',
          'Implement retry logic',
        ],
        dont: [
          'Store large objects',
          'Use Redis as primary database without persistence',
          'Ignore memory limits',
          'Use blocking operations in production',
          'Store sensitive data without encryption',
        ],
      },
    },
    examples: [
      {
        title: 'Basic String Operations',
        code: `# Set and get values
SET user:1000:name "John Doe"
GET user:1000:name

# Set with expiration (60 seconds)
SETEX session:abc123 60 "user_data"

# Increment counter
INCR page:views:home
INCRBY user:1000:points 10

# Multiple operations
MSET user:1:name "John" user:2:name "Jane"
MGET user:1:name user:2:name`,
        language: 'bash',
      },
      {
        title: 'Lists and Hashes',
        code: `# List operations
LPUSH queue:tasks "task1"
RPUSH queue:tasks "task2"
LPOP queue:tasks
LRANGE queue:tasks 0 -1

# Hash operations
HSET user:1000 name "John Doe" age 30 email "john@example.com"
HGET user:1000 name
HGETALL user:1000
HINCRBY user:1000 age 1

# Check if field exists
HEXISTS user:1000 email`,
        language: 'bash',
      },
      {
        title: 'Sets and Sorted Sets',
        code: `# Set operations
SADD tags:1 "redis" "database" "nosql"
SMEMBERS tags:1
SISMEMBER tags:1 "redis"

# Set operations
SADD skills:john "python" "javascript"
SADD skills:jane "python" "java"
SINTER skills:john skills:jane

# Sorted sets (leaderboard)
ZADD leaderboard 100 "player1"
ZADD leaderboard 250 "player2"
ZADD leaderboard 175 "player3"

ZRANGE leaderboard 0 -1 WITHSCORES
ZREVRANK leaderboard "player2"`,
        language: 'bash',
      },
    ],
    quiz: [
      {
        question: 'What is Redis primarily used for?',
        options: [
          'Long-term data storage',
          'In-memory caching and real-time applications',
          'File storage',
          'Video streaming',
        ],
        correctAnswer: 1,
        explanation: 'Redis is primarily used as an in-memory data store for caching and real-time applications due to its exceptional speed.',
      },
      {
        question: 'Which Redis data structure would you use for a leaderboard?',
        options: ['String', 'List', 'Sorted Set', 'Hash'],
        correctAnswer: 2,
        explanation: 'Sorted Sets are ideal for leaderboards as they maintain elements in order based on their scores.',
      },
      {
        question: 'What does TTL (Time To Live) do in Redis?',
        options: [
          'Tracks when data was created',
          'Sets automatic expiration time for keys',
          'Logs access times',
          'Defines data priority',
        ],
        correctAnswer: 1,
        explanation: 'TTL sets an expiration time for keys. After the specified time, Redis automatically deletes the key.',
      },
      {
        question: 'Which command adds an element to the left of a Redis list?',
        options: ['LADD', 'LPUSH', 'LINSERT', 'LFRONT'],
        correctAnswer: 1,
        explanation: 'LPUSH adds one or more elements to the left (head) of a list. RPUSH adds to the right (tail).',
      },
      {
        question: 'What data structure would you use to store a user profile with multiple fields?',
        options: ['String', 'List', 'Hash', 'Set'],
        correctAnswer: 2,
        explanation: 'Hashes are perfect for storing objects with multiple fields like user profiles, as they allow individual field access.',
      },
      {
        question: 'What happens when memory is full in Redis?',
        options: [
          'Server crashes',
          'Data is written to disk',
          'Eviction policy determines which keys to remove',
          'All data is deleted',
        ],
        correctAnswer: 2,
        explanation: 'Redis uses eviction policies (like LRU - Least Recently Used) to decide which keys to remove when memory is full.',
      },
    ],
    playground: {
      type: 'redis',
      initialData: {
        strings: {
          'user:1:name': 'Alice Johnson',
          'user:2:name': 'Bob Smith',
          'counter:pageviews': '1500',
          'session:abc123': 'user_data_here',
        },
        lists: {
          'queue:emails': ['email1@test.com', 'email2@test.com', 'email3@test.com'],
          'recent:products': ['laptop', 'mouse', 'keyboard'],
        },
        sets: {
          'tags:article:1': ['redis', 'database', 'nosql', 'caching'],
          'skills:alice': ['python', 'javascript', 'sql'],
          'skills:bob': ['python', 'java', 'go'],
        },
        hashes: {
          'user:100': { name: 'Charlie Brown', email: 'charlie@test.com', age: '28', city: 'New York' },
          'product:500': { name: 'Laptop Pro', price: '999', stock: '50', category: 'Electronics' },
        },
        sortedSets: {
          'leaderboard:game1': [
            { score: 2500, member: 'player_alpha' },
            { score: 1800, member: 'player_beta' },
            { score: 3200, member: 'player_gamma' },
            { score: 950, member: 'player_delta' },
          ],
        },
      },
      exercises: [
        {
          title: 'Basic String Operations',
          difficulty: 'Easy',
          problem: 'Set a new key "greeting" with value "Hello Redis!" and then retrieve it using GET.',
          starterCode: `# Set the greeting key\nSET greeting "Hello Redis!"\n\n# Get the value back\nGET greeting`,
          hints: [
            'Use SET key value to store a string',
            'Use GET key to retrieve the value',
            'String values with spaces need quotes',
          ],
          solution: `SET greeting "Hello Redis!"\nGET greeting`,
          validate: (results, store) => {
            return store.greeting?.value === 'Hello Redis!';
          },
        },
        {
          title: 'Increment Counter',
          difficulty: 'Easy',
          problem: 'Increment the counter:pageviews by 1 using INCR, then add 100 more using INCRBY.',
          starterCode: `# Increment by 1\nINCR counter:pageviews\n\n# Increment by 100\nINCRBY counter:pageviews 100`,
          hints: [
            'INCR adds 1 to a numeric string value',
            'INCRBY adds a specific amount',
            'Redis treats string values as integers for these operations',
          ],
          solution: `INCR counter:pageviews\nINCRBY counter:pageviews 100`,
          validate: (results, store) => {
            return parseInt(store['counter:pageviews']?.value) === 1601;
          },
        },
        {
          title: 'Working with Lists',
          difficulty: 'Easy',
          problem: 'Add "urgent_task" to the beginning of queue:tasks list using LPUSH, then view all items with LRANGE.',
          starterCode: `# Create/add to list\nLPUSH queue:tasks "urgent_task"\n\n# View all items (0 to -1 means all)\nLRANGE queue:tasks 0 -1`,
          hints: [
            'LPUSH adds to the LEFT (beginning) of the list',
            'RPUSH adds to the RIGHT (end) of the list',
            'LRANGE key 0 -1 returns all elements',
          ],
          solution: `LPUSH queue:tasks "urgent_task"\nLRANGE queue:tasks 0 -1`,
          validate: (results, store) => {
            return store['queue:tasks']?.value[0] === 'urgent_task';
          },
        },
        {
          title: 'Hash Operations',
          difficulty: 'Medium',
          problem: 'Create a new user hash "user:200" with fields: name="Diana Prince", email="diana@test.com", age="30". Then retrieve all fields.',
          starterCode: `# Set multiple hash fields\nHSET user:200 name "Diana Prince" email "diana@test.com" age 30\n\n# Get all fields and values\nHGETALL user:200`,
          hints: [
            'HSET can set multiple field-value pairs at once',
            'HGETALL returns all fields and values',
            'HGET returns a single field value',
          ],
          solution: `HSET user:200 name "Diana Prince" email "diana@test.com" age 30\nHGETALL user:200`,
          validate: (results, store) => {
            const user = store['user:200']?.value;
            return user && user.name === 'Diana Prince' && user.email === 'diana@test.com';
          },
        },
        {
          title: 'Set Operations - Union & Intersection',
          difficulty: 'Medium',
          problem: 'Find the common skills between Alice and Bob using SINTER. Then find all unique skills using SUNION.',
          starterCode: `# Find common skills (intersection)\nSINTER skills:alice skills:bob\n\n# Find all skills (union)\nSUNION skills:alice skills:bob`,
          hints: [
            'SINTER returns elements present in ALL sets',
            'SUNION returns ALL unique elements from all sets',
            'Both commands take multiple key names',
          ],
          solution: `SINTER skills:alice skills:bob\nSUNION skills:alice skills:bob`,
          validate: (results, store) => {
            const intersection = results.find(r => r.command.includes('SINTER'));
            return intersection && intersection.result.includes('python');
          },
        },
        {
          title: 'Leaderboard with Sorted Sets',
          difficulty: 'Medium',
          problem: 'Add a new player "player_epsilon" with score 2100 to leaderboard:game1. Then show the top 3 players with their scores.',
          starterCode: `# Add new player with score\nZADD leaderboard:game1 2100 player_epsilon\n\n# Get top 3 (highest scores first)\nZREVRANGE leaderboard:game1 0 2 WITHSCORES`,
          hints: [
            'ZADD key score member adds to sorted set',
            'ZREVRANGE returns members in descending score order',
            'WITHSCORES includes the score values',
          ],
          solution: `ZADD leaderboard:game1 2100 player_epsilon\nZREVRANGE leaderboard:game1 0 2 WITHSCORES`,
          validate: (results, store) => {
            const zset = store['leaderboard:game1']?.value;
            return zset && zset.some(item => item.member === 'player_epsilon' && item.score === 2100);
          },
        },
        {
          title: 'Get Player Rank',
          difficulty: 'Hard',
          problem: 'Find the rank of "player_gamma" in the leaderboard (highest score = rank 0). Also get their score.',
          starterCode: `# Get rank (0-indexed, highest first)\nZREVRANK leaderboard:game1 player_gamma\n\n# Get score\nZSCORE leaderboard:game1 player_gamma`,
          hints: [
            'ZREVRANK gives rank with highest score as 0',
            'ZRANK gives rank with lowest score as 0',
            'ZSCORE returns the score of a member',
          ],
          solution: `ZREVRANK leaderboard:game1 player_gamma\nZSCORE leaderboard:game1 player_gamma`,
          validate: (results, store) => {
            return results.some(r => r.command.includes('ZSCORE') && r.result === 3200);
          },
        },
        {
          title: 'Cache with Expiration',
          difficulty: 'Hard',
          problem: 'Set a cache key "cache:user:profile:1" with value "cached_profile_data" that expires in 300 seconds using SETEX. Check the TTL.',
          starterCode: `# Set with expiration (seconds)\nSETEX cache:user:profile:1 300 "cached_profile_data"\n\n# Check time-to-live\nTTL cache:user:profile:1`,
          hints: [
            'SETEX key seconds value sets with automatic expiration',
            'TTL key returns remaining seconds (-1 = no expiry, -2 = key missing)',
            'EXPIRE key seconds can add expiration to existing keys',
          ],
          solution: `SETEX cache:user:profile:1 300 "cached_profile_data"\nTTL cache:user:profile:1`,
          validate: (results, store) => {
            return store['cache:user:profile:1']?.value === 'cached_profile_data' && 
                   store['cache:user:profile:1']?.ttl === 300;
          },
        },
      ],
    },
  },

  'query-optimization': {
    id: 'query-optimization',
    pathId: 'advanced',
    title: 'Query Optimization',
    description: 'Techniques to improve database query performance',
    content: {
      overview: 'Query optimization involves analyzing and improving SQL queries to reduce execution time and resource consumption. It includes proper indexing, query restructuring, and understanding execution plans.',
      keyPoints: [
        'Analyze query execution plans',
        'Use appropriate indexes',
        'Avoid N+1 query problems',
        'Optimize JOIN operations',
        'Use query caching effectively',
      ],
      useCases: [
        'Improving slow-running reports',
        'Reducing server load',
        'Scaling high-traffic applications',
        'Optimizing batch processing',
        'Real-time data retrieval',
      ],
      bestPractices: [
        'Always analyze execution plans',
        'Index columns used in WHERE and JOIN',
        'Use LIMIT for large result sets',
        'Avoid SELECT * in queries',
        'Use appropriate JOIN types',
      ],
      doAndDont: {
        do: [
          'Profile queries before optimizing',
          'Use covering indexes',
          'Batch operations when possible',
          'Use query result caching',
          'Monitor slow query logs',
        ],
        dont: [
          'Optimize without measuring',
          'Over-index tables',
          'Use functions on indexed columns in WHERE',
          'Ignore execution plans',
          'Use OR when UNION is more efficient',
        ],
      },
    },
    examples: [
      {
        title: 'Query Execution Analysis',
        code: `-- Analyze query execution plan
EXPLAIN SELECT c.name, COUNT(o.id) as order_count
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE c.created_at > '2023-01-01'
GROUP BY c.id, c.name;

-- Analyze with cost information
EXPLAIN ANALYZE SELECT *
FROM products
WHERE category_id = 5 AND price > 100;

-- Show index usage
SHOW INDEX FROM products;`,
        language: 'sql',
      },
      {
        title: 'Optimization Techniques',
        code: `-- BAD: Using function on indexed column
SELECT * FROM orders
WHERE YEAR(order_date) = 2023;

-- GOOD: Preserve index usage
SELECT * FROM orders
WHERE order_date >= '2023-01-01' 
  AND order_date < '2024-01-01';

-- BAD: SELECT *
SELECT * FROM orders o
JOIN customers c ON o.customer_id = c.id;

-- GOOD: Specific columns
SELECT o.id, o.order_date, c.name, c.email
FROM orders o
JOIN customers c ON o.customer_id = c.id;

-- Use UNION ALL instead of UNION when duplicates are OK
SELECT product_name FROM products WHERE category = 'A'
UNION ALL
SELECT product_name FROM products WHERE category = 'B';`,
        language: 'sql',
      },
      {
        title: 'Avoiding N+1 Queries',
        code: `-- BAD: N+1 Query Problem
-- First query
SELECT * FROM customers;
-- Then for each customer...
SELECT * FROM orders WHERE customer_id = ?;

-- GOOD: Single query with JOIN
SELECT c.*, o.*
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;

-- Or use subquery
SELECT c.*,
    (SELECT COUNT(*) FROM orders WHERE customer_id = c.id) as order_count
FROM customers c;`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'What is the purpose of EXPLAIN in SQL?',
        options: [
          'To document the query',
          'To show the query execution plan',
          'To format the query',
          'To execute the query faster',
        ],
        correctAnswer: 1,
        explanation: 'EXPLAIN shows the query execution plan, helping you understand how the database will execute the query and identify optimization opportunities.',
      },
      {
        question: 'What is the N+1 query problem?',
        options: [
          'A mathematical equation',
          'Executing N queries in a loop plus 1 initial query',
          'Using N+1 tables in a JOIN',
          'A type of database error',
        ],
        correctAnswer: 1,
        explanation: 'The N+1 problem occurs when you execute one query to get a list, then N additional queries (one for each item) to get related data, instead of using a JOIN.',
      },
      {
        question: 'Why should you avoid using functions on indexed columns in WHERE?',
        options: [
          'It causes syntax errors',
          'It prevents the index from being used',
          'It makes queries longer',
          'It uses more memory',
        ],
        correctAnswer: 1,
        explanation: 'Using functions on indexed columns (e.g., YEAR(date_column)) prevents the database from using the index, resulting in a full table scan.',
      },
      {
        question: 'What is a covering index?',
        options: [
          'An index that covers the primary key',
          'An index containing all columns needed by a query',
          'An index on all table columns',
          'An encrypted index',
        ],
        correctAnswer: 1,
        explanation: 'A covering index contains all the columns required by a query, allowing the query to be satisfied entirely from the index without accessing the table.',
      },
      {
        question: 'When should you use UNION ALL instead of UNION?',
        options: [
          'When you need distinct results',
          'When you want duplicates and better performance',
          'When combining different data types',
          'When sorting is required',
        ],
        correctAnswer: 1,
        explanation: 'UNION ALL is faster than UNION because it doesn\'t remove duplicates. Use it when duplicates are acceptable or when the result sets are already distinct.',
      },
      {
        question: 'What is query caching?',
        options: [
          'Storing query text in files',
          'Storing query results for reuse',
          'Compiling queries ahead of time',
          'Logging slow queries',
        ],
        correctAnswer: 1,
        explanation: 'Query caching stores the results of executed queries so that identical subsequent queries can return cached results without re-executing the query.',
      },
    ],
    playground: {
      type: 'sql',
      initialData: [
        `CREATE TABLE products (
          product_id INTEGER PRIMARY KEY,
          product_name TEXT,
          category TEXT,
          price DECIMAL(10,2),
          description TEXT,
          stock INTEGER
        )`,
        `CREATE TABLE order_items (
          item_id INTEGER PRIMARY KEY,
          order_id INTEGER,
          product_id INTEGER,
          quantity INTEGER,
          item_price DECIMAL(10,2),
          FOREIGN KEY (product_id) REFERENCES products(product_id)
        )`,
        `CREATE TABLE sales (
          sale_id INTEGER PRIMARY KEY,
          product_id INTEGER,
          sale_date DATE,
          amount DECIMAL(10,2),
          FOREIGN KEY (product_id) REFERENCES products(product_id)
        )`,
        `INSERT INTO products VALUES
          (1, 'Laptop', 'Electronics', 999.99, 'High performance laptop', 50),
          (2, 'Mouse', 'Electronics', 29.99, 'Wireless mouse', 200),
          (3, 'Keyboard', 'Electronics', 79.99, 'Mechanical keyboard', 150),
          (4, 'Monitor', 'Electronics', 299.99, '27 inch display', 75),
          (5, 'Desk', 'Furniture', 399.99, 'Standing desk', 30),
          (6, 'Chair', 'Furniture', 249.99, 'Ergonomic chair', 40)`,
        `INSERT INTO order_items VALUES
          (1, 1, 1, 2, 999.99),
          (2, 1, 2, 1, 29.99),
          (3, 2, 3, 1, 79.99),
          (4, 3, 1, 1, 999.99),
          (5, 3, 4, 2, 299.99),
          (6, 4, 5, 1, 399.99)`,
        `INSERT INTO sales VALUES
          (1, 1, '2024-01-15', 1999.98),
          (2, 2, '2024-01-16', 29.99),
          (3, 3, '2024-01-17', 79.99),
          (4, 1, '2024-01-18', 999.99),
          (5, 4, '2024-01-19', 599.98),
          (6, 5, '2024-01-20', 399.99)`,
        `CREATE INDEX idx_products_category ON products(category)`,
        `CREATE INDEX idx_products_price ON products(price)`,
        `CREATE INDEX idx_order_items_product ON order_items(product_id)`,
        `CREATE INDEX idx_sales_product ON sales(product_id)`,
        `CREATE INDEX idx_sales_date ON sales(sale_date)`,
      ],
    },
    exercises: [
      {
        title: 'Avoid SELECT *',
        difficulty: 'Easy',
        problem: 'Get only product_name and price for all products (avoid SELECT *)',
        hints: [
          'Specify only the columns you need',
          'This reduces data transfer and improves performance',
        ],
        solution: `SELECT product_name, price FROM products`,
        explanation: 'Using SELECT * retrieves unnecessary columns, wasting bandwidth and memory. Always specify only the columns you need.',
      },
      {
        title: 'Use Index for Filtering',
        difficulty: 'Easy',
        problem: 'Find all products in the Electronics category. This query uses the idx_products_category index.',
        hints: [
          'Filter using WHERE on category column',
          'The index makes this lookup fast',
        ],
        solution: `SELECT product_name, price FROM products WHERE category = 'Electronics'`,
        explanation: 'The idx_products_category index allows the database to quickly locate Electronics products without scanning the entire table.',
      },
      {
        title: 'Range Query Optimization',
        difficulty: 'Medium',
        problem: 'Find products with price between 50 and 300. Uses the idx_products_price index.',
        hints: [
          'Use BETWEEN for range queries',
          'Indexes work well with range scans',
        ],
        solution: `SELECT product_name, price FROM products WHERE price BETWEEN 50 AND 300`,
        explanation: 'B-tree indexes efficiently handle range queries. The idx_products_price index helps scan prices in order.',
      },
      {
        title: 'Optimize Date Range Query',
        difficulty: 'Medium',
        problem: 'Find all sales in January 2024 using a date range (not a function). This preserves index usage.',
        hints: [
          'Use date range comparison instead of MONTH() or YEAR() functions',
          'Functions on indexed columns prevent index usage',
          'Use >= and < for date ranges',
        ],
        solution: `SELECT * FROM sales 
WHERE sale_date >= '2024-01-01' AND sale_date < '2024-02-01'`,
        explanation: 'Avoid using functions like YEAR(sale_date) = 2024 as they prevent index usage. Use range comparisons instead.',
      },
      {
        title: 'JOIN with Indexed Columns',
        difficulty: 'Medium',
        problem: 'Get product names and their total quantity sold by joining products and order_items. The join uses indexed columns.',
        hints: [
          'JOIN on product_id (indexed in both tables)',
          'GROUP BY product',
          'SUM the quantities',
        ],
        solution: `SELECT p.product_name, SUM(oi.quantity) as total_sold
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_id, p.product_name`,
        explanation: 'Both product_id columns are indexed (primary key and idx_order_items_product), making the JOIN efficient.',
      },
      {
        title: 'Limit Large Result Sets',
        difficulty: 'Easy',
        problem: 'Get the top 3 most expensive products. Use LIMIT for better performance.',
        hints: [
          'ORDER BY price descending',
          'Use LIMIT 3 to return only top results',
          'LIMIT reduces data transfer',
        ],
        solution: `SELECT product_name, price 
FROM products 
ORDER BY price DESC 
LIMIT 3`,
        explanation: 'Using LIMIT prevents retrieving more data than needed, especially important for large tables.',
      },
      {
        title: 'Covering Index Query',
        difficulty: 'Hard',
        problem: 'Find the count of products in each category. Select only category and count.',
        hints: [
          'GROUP BY category',
          'Use COUNT(*)',
          'The idx_products_category index helps',
        ],
        solution: `SELECT category, COUNT(*) as product_count
FROM products
GROUP BY category`,
        explanation: 'This query benefits from the category index, and since we only need category and count, it\'s efficient.',
      },
      {
        title: 'Aggregate with JOIN Optimization',
        difficulty: 'Hard',
        problem: 'Find total sales amount for each product. Join sales with products and sum amounts.',
        hints: [
          'JOIN sales with products on product_id',
          'GROUP BY product',
          'SUM the sale amounts',
          'Both join columns are indexed',
        ],
        solution: `SELECT p.product_name, SUM(s.amount) as total_sales
FROM products p
JOIN sales s ON p.product_id = s.product_id
GROUP BY p.product_id, p.product_name`,
        explanation: 'The indexes on both product_id columns (primary key and idx_sales_product) make this aggregation query efficient.',
      },
    ],
  },

  'database-security': {
    id: 'database-security',
    pathId: 'advanced',
    title: 'Database Security',
    description: 'Protect your data with proper security measures',
    content: {
      overview: 'Database security involves protecting databases from unauthorized access, malicious attacks, and data breaches. It includes authentication, authorization, encryption, and security best practices.',
      keyPoints: [
        'Strong authentication and authorization',
        'Data encryption at rest and in transit',
        'SQL injection prevention',
        'Regular security audits',
        'Principle of least privilege',
      ],
      useCases: [
        'Protecting customer personal information',
        'Securing financial transaction data',
        'HIPAA compliance for healthcare',
        'PCI DSS compliance for payments',
        'GDPR compliance for EU data',
      ],
      bestPractices: [
        'Use parameterized queries',
        'Implement role-based access control',
        'Encrypt sensitive data',
        'Regular security updates',
        'Monitor and log access',
      ],
      doAndDont: {
        do: [
          'Use prepared statements',
          'Encrypt passwords with salt',
          'Implement least privilege access',
          'Regular backups',
          'Monitor for suspicious activity',
        ],
        dont: [
          'Store passwords in plain text',
          'Give all users DBA privileges',
          'Ignore security patches',
          'Expose database directly to internet',
          'Log sensitive data',
        ],
      },
    },
    examples: [
      {
        title: 'SQL Injection Prevention',
        code: `-- BAD: Vulnerable to SQL injection
query = "SELECT * FROM users WHERE username = '" + username + "'"

-- GOOD: Parameterized query (Python example)
cursor.execute(
    "SELECT * FROM users WHERE username = %s",
    (username,)
)

-- GOOD: Prepared statement (Node.js)
const query = 'SELECT * FROM users WHERE username = ?';
connection.query(query, [username], (err, results) => {
    // Handle results
});`,
        language: 'sql',
      },
      {
        title: 'User Access Control',
        code: `-- Create users with specific privileges
CREATE USER 'app_readonly'@'localhost' IDENTIFIED BY 'strong_password';
GRANT SELECT ON mydb.* TO 'app_readonly'@'localhost';

CREATE USER 'app_writer'@'localhost' IDENTIFIED BY 'strong_password';
GRANT SELECT, INSERT, UPDATE ON mydb.* TO 'app_writer'@'localhost';

-- Create role
CREATE ROLE 'app_developer';
GRANT SELECT, INSERT, UPDATE, DELETE ON mydb.* TO 'app_developer';
GRANT 'app_developer' TO 'john'@'localhost';

-- Revoke privileges
REVOKE INSERT ON mydb.users FROM 'app_writer'@'localhost';

-- View user privileges
SHOW GRANTS FOR 'app_readonly'@'localhost';`,
        language: 'sql',
      },
      {
        title: 'Data Encryption',
        code: `-- Encrypt sensitive columns
CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100),
    -- Store encrypted password
    password_hash VARCHAR(255),
    -- Encrypt sensitive data
    ssn VARBINARY(255)
);

-- Insert with encryption
INSERT INTO users (username, email, password_hash, ssn)
VALUES (
    'john',
    'john@example.com',
    -- Use bcrypt/scrypt in application
    '$2b$12$hash...',
    -- Encrypt SSN
    AES_ENCRYPT('123-45-6789', 'encryption_key')
);

-- Decrypt when reading
SELECT 
    username,
    email,
    AES_DECRYPT(ssn, 'encryption_key') as ssn
FROM users
WHERE id = 1;`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'What is SQL injection?',
        options: [
          'A database backup method',
          'A type of malicious attack using SQL in input',
          'A way to optimize queries',
          'A database migration tool',
        ],
        correctAnswer: 1,
        explanation: 'SQL injection is a security vulnerability where attackers insert malicious SQL code through application inputs to manipulate or access the database.',
      },
      {
        question: 'How should passwords be stored in a database?',
        options: [
          'As plain text',
          'Encrypted with reversible encryption',
          'Hashed with a strong one-way hash function',
          'In a separate file',
        ],
        correctAnswer: 2,
        explanation: 'Passwords should be hashed using a strong, one-way hash function (like bcrypt) with a salt, making them irreversible.',
      },
    ],
  },

  'replication': {
    id: 'replication',
    pathId: 'advanced',
    title: 'Database Replication',
    description: 'Ensure high availability and scalability with replication',
    content: {
      overview: 'Database replication involves copying data from one database to others to ensure availability, improve read performance, and provide disaster recovery. It maintains multiple synchronized copies of data.',
      keyPoints: [
        'Master-slave replication',
        'Master-master replication',
        'Asynchronous vs synchronous replication',
        'Read scalability',
        'High availability and failover',
      ],
      useCases: [
        'Load balancing read queries',
        'Geographic distribution',
        'Disaster recovery',
        'Zero-downtime migrations',
        'Reporting and analytics',
      ],
      bestPractices: [
        'Monitor replication lag',
        'Use read replicas for reporting',
        'Implement automated failover',
        'Regular testing of replica promotion',
        'Consider network latency',
      ],
      doAndDont: {
        do: [
          'Monitor replication health',
          'Route reads to replicas',
          'Test failover procedures',
          'Use binary logging',
          'Set up alerts for lag',
        ],
        dont: [
          'Write to read replicas',
          'Ignore replication lag',
          'Skip regular backups',
          'Overload replicas',
          'Forget to encrypt replication traffic',
        ],
      },
    },
    examples: [
      {
        title: 'MySQL Replication Setup',
        code: `-- On Master Server
-- Enable binary logging in my.cnf
[mysqld]
server-id = 1
log-bin = mysql-bin
binlog-do-db = mydb

-- Create replication user
CREATE USER 'repl'@'%' IDENTIFIED BY 'password';
GRANT REPLICATION SLAVE ON *.* TO 'repl'@'%';

-- Get master status
SHOW MASTER STATUS;

-- On Replica Server
[mysqld]
server-id = 2
relay-log = mysql-relay-bin

-- Configure replication
CHANGE MASTER TO
    MASTER_HOST='master_ip',
    MASTER_USER='repl',
    MASTER_PASSWORD='password',
    MASTER_LOG_FILE='mysql-bin.000001',
    MASTER_LOG_POS=154;

-- Start replication
START SLAVE;

-- Check status
SHOW SLAVE STATUS\G`,
        language: 'sql',
      },
      {
        title: 'PostgreSQL Streaming Replication',
        code: `-- On Master (postgresql.conf)
wal_level = replica
max_wal_senders = 3
wal_keep_size = 16MB

-- Create replication user
CREATE ROLE replicator WITH REPLICATION LOGIN PASSWORD 'password';

-- On Master (pg_hba.conf)
host replication replicator replica_ip/32 md5

-- On Replica
-- Stop PostgreSQL and remove data directory
-- Then run pg_basebackup
pg_basebackup -h master_ip -U replicator -D /var/lib/postgresql/data -P

-- Create standby.signal file
touch /var/lib/postgresql/data/standby.signal

-- Configure connection (postgresql.conf)
primary_conninfo = 'host=master_ip port=5432 user=replicator password=password'

-- Start replica
systemctl start postgresql`,
        language: 'bash',
      },
    ],
    quiz: [
      {
        question: 'What is the main purpose of database replication?',
        options: [
          'To compress data',
          'To improve availability and read performance',
          'To delete old data',
          'To create backups only',
        ],
        correctAnswer: 1,
        explanation: 'Replication improves availability by maintaining multiple copies of data and enhances read performance by distributing read queries across replicas.',
      },
      {
        question: 'What is replication lag?',
        options: [
          'Time taken to create a replica',
          'Delay between master and replica data',
          'Network latency',
          'Backup duration',
        ],
        correctAnswer: 1,
        explanation: 'Replication lag is the time delay between when data is written to the master and when it appears on the replica.',
      },
      {
        question: 'What is the difference between synchronous and asynchronous replication?',
        options: [
          'Sync requires network, async doesn\'t',
          'Sync waits for replica confirmation, async doesn\'t',
          'Async is faster to set up',
          'There is no difference',
        ],
        correctAnswer: 1,
        explanation: 'Synchronous replication waits for confirmation from replicas before committing, ensuring consistency. Asynchronous doesn\'t wait, allowing faster writes but possible data loss.',
      },
      {
        question: 'In master-slave replication, where should writes go?',
        options: [
          'To any server',
          'Only to the master',
          'Only to slaves',
          'To both simultaneously',
        ],
        correctAnswer: 1,
        explanation: 'In master-slave replication, all writes must go to the master, which then replicates changes to slaves. Slaves handle read queries.',
      },
      {
        question: 'What is a replica promotion?',
        options: [
          'Upgrading replica hardware',
          'Making a replica the new master',
          'Increasing replica priority',
          'Adding more replicas',
        ],
        correctAnswer: 1,
        explanation: 'Replica promotion is the process of converting a replica into the new master, typically during failover when the original master fails.',
      },
    ],
  },

  'database-scaling': {
    id: 'database-scaling',
    pathId: 'advanced',
    title: 'Database Scaling - Horizontal & Vertical',
    description: 'Master strategies for scaling databases to handle growing workloads',
    content: {
      overview: 'Database scaling involves increasing the capacity of your database system to handle more data, users, and transactions. There are two primary approaches: vertical scaling (scale-up) and horizontal scaling (scale-out), each with distinct trade-offs and use cases.',
      keyPoints: [
        'Vertical Scaling: Add more power to existing server (CPU, RAM, SSD)',
        'Horizontal Scaling: Add more servers to distribute load',
        'Read replicas: Scale read operations independently',
        'Write scaling: Sharding and partitioning strategies',
        'Connection pooling: Optimize database connections',
        'Caching layers: Reduce database load with Redis/Memcached',
      ],
      useCases: [
        'High-traffic web applications',
        'Growing SaaS platforms',
        'E-commerce with flash sales',
        'Real-time analytics systems',
        'Multi-tenant applications',
        'Global applications with geographic distribution',
      ],
      bestPractices: [
        'Start with vertical scaling for simplicity',
        'Use read replicas before sharding',
        'Implement caching early',
        'Monitor and plan before you need to scale',
        'Design for horizontal scaling from the start',
        'Consider CAP theorem trade-offs',
      ],
      doAndDont: {
        do: [
          'Profile and optimize queries first',
          'Use connection pooling',
          'Implement caching strategically',
          'Plan for growth with scalable architecture',
          'Monitor performance metrics continuously',
          'Test scaling strategies in staging',
        ],
        dont: [
          'Scale without understanding bottlenecks',
          'Ignore query optimization before scaling',
          'Shard prematurely',
          'Forget about operational complexity',
          'Assume one strategy fits all workloads',
          'Neglect data consistency requirements',
        ],
      },
    },
    examples: [
      {
        title: 'Vertical vs Horizontal Scaling Comparison',
        code: `/*
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DATABASE SCALING STRATEGIES                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  VERTICAL SCALING (Scale Up)          HORIZONTAL SCALING (Scale Out)        │
│  ─────────────────────────────        ───────────────────────────────       │
│                                                                             │
│  ┌─────────────────┐                  ┌──────┐ ┌──────┐ ┌──────┐           │
│  │                 │                  │ DB 1 │ │ DB 2 │ │ DB 3 │           │
│  │  More CPU       │                  └──────┘ └──────┘ └──────┘           │
│  │  More RAM       │                       ↑       ↑       ↑               │
│  │  Faster SSD     │                  ┌─────────────────────────┐          │
│  │  Better Network │                  │    Load Balancer /      │          │
│  │                 │                  │    Shard Router         │          │
│  └─────────────────┘                  └─────────────────────────┘          │
│        ↑                                          ↑                        │
│   Single Server                           Multiple Servers                 │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  PROS:                                PROS:                                 │
│  • Simple to implement                • Nearly unlimited scalability        │
│  • No code changes                    • Better fault tolerance              │
│  • No distributed complexity          • Geographic distribution             │
│  • ACID compliance intact             • Cost-effective at scale             │
│                                                                             │
│  CONS:                                CONS:                                 │
│  • Hardware limits (ceiling)          • Complex to implement                │
│  • Single point of failure            • Distributed transactions harder     │
│  • Expensive at high end              • Cross-shard queries costly          │
│  • Downtime for upgrades              • Operational complexity              │
└─────────────────────────────────────────────────────────────────────────────┘
*/`,
        language: 'sql',
      },
      {
        title: 'Read Replicas for Read Scaling',
        code: `-- STEP 1: Primary/Replica Architecture
/*
        ┌──────────────────┐
        │   Application    │
        └────────┬─────────┘
                 │
        ┌────────▼─────────┐
        │  Connection Pool │
        └────────┬─────────┘
                 │
    ┌────────────┼────────────┐
    │            │            │
    ▼            ▼            ▼
┌────────┐  ┌────────┐  ┌────────┐
│Primary │  │Replica1│  │Replica2│
│(Write) │  │(Read)  │  │(Read)  │
└───┬────┘  └────────┘  └────────┘
    │            ▲            ▲
    │            │            │
    └────────────┴────────────┘
         Async Replication
*/

-- MySQL: Create Read Replica
-- On Primary Server:
CHANGE REPLICATION SOURCE TO
    SOURCE_HOST='primary.example.com',
    SOURCE_USER='repl_user',
    SOURCE_PASSWORD='password',
    SOURCE_AUTO_POSITION=1;

START REPLICA;

-- Application-level read/write splitting (Python)
-- Write queries go to primary
-- Read queries distributed to replicas`,
        language: 'sql',
      },
      {
        title: 'Application-Level Read/Write Splitting',
        code: `import random
from contextlib import contextmanager

class DatabaseRouter:
    def __init__(self):
        self.primary = create_connection('primary.db.example.com')
        self.replicas = [
            create_connection('replica1.db.example.com'),
            create_connection('replica2.db.example.com'),
            create_connection('replica3.db.example.com'),
        ]
    
    def get_write_connection(self):
        """All writes go to primary"""
        return self.primary
    
    def get_read_connection(self):
        """Reads distributed across replicas"""
        return random.choice(self.replicas)

db_router = DatabaseRouter()

# Usage in application
class UserRepository:
    def create_user(self, user_data):
        """Write operation - uses primary"""
        conn = db_router.get_write_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO users (name, email) VALUES (%s, %s)",
            (user_data['name'], user_data['email'])
        )
        conn.commit()
    
    def get_user(self, user_id):
        """Read operation - uses replica"""
        conn = db_router.get_read_connection()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT * FROM users WHERE id = %s",
            (user_id,)
        )
        return cursor.fetchone()
    
    def get_user_after_write(self, user_id):
        """Read-after-write - use primary to avoid replication lag"""
        conn = db_router.get_write_connection()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT * FROM users WHERE id = %s",
            (user_id,)
        )
        return cursor.fetchone()`,
        language: 'python',
      },
      {
        title: 'Connection Pooling for Efficiency',
        code: `# Python with SQLAlchemy connection pooling
from sqlalchemy import create_engine
from sqlalchemy.pool import QueuePool

# Create engine with connection pool
engine = create_engine(
    'postgresql://user:password@localhost/mydb',
    poolclass=QueuePool,
    pool_size=20,           # Maintained connections
    max_overflow=30,        # Extra connections when needed
    pool_timeout=30,        # Wait time for connection
    pool_recycle=1800,      # Recycle connections after 30 min
    pool_pre_ping=True,     # Check connection health
)

# PostgreSQL: Configure connection limits
-- postgresql.conf
-- max_connections = 200
-- shared_buffers = 4GB

# PgBouncer for connection pooling proxy
-- pgbouncer.ini
[databases]
mydb = host=localhost port=5432 dbname=mydb

[pgbouncer]
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 50
min_pool_size = 10`,
        language: 'python',
      },
      {
        title: 'Caching Layer with Redis',
        code: `import redis
import json
from functools import wraps

redis_client = redis.Redis(host='localhost', port=6379, db=0)

def cache_query(ttl=300):
    """Decorator to cache database query results"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # Create cache key from function name and arguments
            cache_key = f"{func.__name__}:{json.dumps(args)}:{json.dumps(kwargs)}"
            
            # Try to get from cache
            cached = redis_client.get(cache_key)
            if cached:
                return json.loads(cached)
            
            # Execute query and cache result
            result = func(*args, **kwargs)
            redis_client.setex(cache_key, ttl, json.dumps(result))
            return result
        return wrapper
    return decorator

class ProductService:
    @cache_query(ttl=600)  # Cache for 10 minutes
    def get_product(self, product_id):
        """Cached product lookup"""
        cursor = db.cursor()
        cursor.execute(
            "SELECT * FROM products WHERE id = %s",
            (product_id,)
        )
        return cursor.fetchone()
    
    @cache_query(ttl=60)  # Cache for 1 minute
    def get_popular_products(self, limit=10):
        """Frequently accessed, short TTL"""
        cursor = db.cursor()
        cursor.execute(
            """SELECT p.*, COUNT(oi.id) as order_count 
               FROM products p 
               JOIN order_items oi ON p.id = oi.product_id 
               GROUP BY p.id 
               ORDER BY order_count DESC 
               LIMIT %s""",
            (limit,)
        )
        return cursor.fetchall()
    
    def update_product(self, product_id, data):
        """Invalidate cache on update"""
        cursor = db.cursor()
        cursor.execute(
            "UPDATE products SET name=%s, price=%s WHERE id=%s",
            (data['name'], data['price'], product_id)
        )
        db.commit()
        
        # Invalidate related caches
        redis_client.delete(f"get_product:({product_id},):{{}}")
        redis_client.delete("get_popular_products:*")`,
        language: 'python',
      },
      {
        title: 'Table Partitioning (Vertical Partitioning within DB)',
        code: `-- PostgreSQL: Range Partitioning by date
-- Great for time-series data like orders, logs, events

CREATE TABLE orders (
    id BIGSERIAL,
    user_id INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    PRIMARY KEY (id, created_at)
) PARTITION BY RANGE (created_at);

-- Create monthly partitions
CREATE TABLE orders_2024_01 PARTITION OF orders
    FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

CREATE TABLE orders_2024_02 PARTITION OF orders
    FOR VALUES FROM ('2024-02-01') TO ('2024-03-01');

CREATE TABLE orders_2024_03 PARTITION OF orders
    FOR VALUES FROM ('2024-03-01') TO ('2024-04-01');

-- Automatic partition creation (pg_partman extension)
SELECT partman.create_parent(
    p_parent_table := 'public.orders',
    p_control := 'created_at',
    p_type := 'range',
    p_interval := '1 month',
    p_premake := 3  -- Create 3 future partitions
);

-- Query optimization: Partition pruning
EXPLAIN ANALYZE
SELECT * FROM orders 
WHERE created_at >= '2024-02-01' AND created_at < '2024-03-01';
-- Only scans orders_2024_02 partition!

-- Easy data archival: Drop old partitions
DROP TABLE orders_2023_01;  -- Fast drop of entire partition`,
        language: 'sql',
      },
      {
        title: 'Vertical Scaling Checklist',
        code: `/*
VERTICAL SCALING CHECKLIST
===========================

Before scaling hardware, optimize what you have:

1. QUERY OPTIMIZATION
   ✓ EXPLAIN ANALYZE slow queries
   ✓ Add missing indexes
   ✓ Rewrite N+1 queries
   ✓ Use query result caching

2. CONFIGURATION TUNING
   PostgreSQL:
   - shared_buffers = 25% of RAM
   - effective_cache_size = 75% of RAM
   - work_mem = RAM / max_connections / 4
   - maintenance_work_mem = 512MB - 2GB
   
   MySQL:
   - innodb_buffer_pool_size = 70-80% of RAM
   - innodb_log_file_size = 1-2GB
   - innodb_flush_method = O_DIRECT
   - innodb_io_capacity = 2000 (SSD)

3. HARDWARE UPGRADES (in order of impact)
   ✓ RAM: More memory = larger buffer pool
   ✓ Storage: SSD/NVMe vs HDD (10-100x faster)
   ✓ CPU: More cores for parallel queries
   ✓ Network: 10Gbps for large data transfers

4. WHEN TO UPGRADE
   - CPU consistently > 70% utilization
   - Memory pressure (swapping)
   - Disk I/O wait times high
   - Connection pool exhausted

5. CLOUD INSTANCE SIZING
   AWS RDS Examples:
   - db.t3.medium: 2 vCPU, 4GB RAM (dev/test)
   - db.r5.large: 2 vCPU, 16GB RAM (small prod)
   - db.r5.2xlarge: 8 vCPU, 64GB RAM (medium prod)
   - db.r5.8xlarge: 32 vCPU, 256GB RAM (large prod)
*/

-- Monitor before scaling
-- PostgreSQL: Check if you need more resources
SELECT 
    pg_size_pretty(pg_database_size(current_database())) as db_size,
    (SELECT setting FROM pg_settings WHERE name = 'shared_buffers') as shared_buffers,
    (SELECT setting FROM pg_settings WHERE name = 'effective_cache_size') as cache_size;

-- Check buffer cache hit ratio (should be > 99%)
SELECT 
    sum(heap_blks_hit) / nullif(sum(heap_blks_hit) + sum(heap_blks_read), 0) as hit_ratio
FROM pg_statio_user_tables;`,
        language: 'sql',
      },
      {
        title: 'Scaling Decision Flowchart',
        code: `/*
SCALING DECISION FLOWCHART
===========================

START: Database is slow or at capacity
          │
          ▼
    ┌─────────────────┐
    │ Are queries     │──YES──▶ Optimize queries first
    │ optimized?      │         (indexes, rewrites)
    └─────────────────┘                │
          │ NO                         │
          ▼                            ▼
    ┌─────────────────┐         ┌─────────────────┐
    │ Using caching?  │──NO───▶ │ Add Redis/      │
    │                 │         │ Memcached layer │
    └─────────────────┘         └─────────────────┘
          │ YES                        │
          ▼                            ▼
    ┌─────────────────┐         Still slow?
    │ Read-heavy      │──YES──▶ Add Read Replicas
    │ workload?       │
    └─────────────────┘
          │ NO (Write-heavy)
          ▼
    ┌─────────────────┐
    │ Single server   │──NO───▶ VERTICAL SCALING
    │ maxed out?      │         (bigger instance)
    └─────────────────┘
          │ YES
          ▼
    ┌─────────────────┐
    │ Data naturally  │──YES──▶ TABLE PARTITIONING
    │ partitionable   │         (by date/region)
    │ (time-series)?  │
    └─────────────────┘
          │ NO
          ▼
    ┌─────────────────┐
    │ Multi-tenant    │──YES──▶ SHARDING BY TENANT
    │ application?    │
    └─────────────────┘
          │ NO
          ▼
    HORIZONTAL SHARDING
    (by user_id, etc.)

KEY METRICS TO MONITOR:
- Query latency (p50, p95, p99)
- Queries per second (QPS)
- CPU utilization
- Memory usage (buffer cache hit ratio)
- Disk I/O (IOPS, throughput)
- Connection count
- Replication lag
*/`,
        language: 'sql',
      },
    ],
    quiz: [
      {
        question: 'What is the main difference between vertical and horizontal scaling?',
        options: [
          'Vertical adds more servers, horizontal upgrades hardware',
          'Vertical upgrades existing server hardware, horizontal adds more servers',
          'They are the same thing',
          'Vertical is for reads, horizontal is for writes',
        ],
        correctAnswer: 1,
        explanation: 'Vertical scaling (scale-up) means adding more resources to a single server (CPU, RAM, storage). Horizontal scaling (scale-out) means adding more servers and distributing the workload across them.',
      },
      {
        question: 'What should you typically try BEFORE horizontal scaling?',
        options: [
          'Delete data',
          'Query optimization, caching, and read replicas',
          'Switch to a different database',
          'Add more application servers',
        ],
        correctAnswer: 1,
        explanation: 'Before the complexity of sharding, optimize queries, add caching layers, and use read replicas. These provide significant improvements with less operational complexity.',
      },
      {
        question: 'What is a read replica used for?',
        options: [
          'Storing backup data',
          'Handling write operations',
          'Distributing read queries to reduce primary server load',
          'Encrypting data',
        ],
        correctAnswer: 2,
        explanation: 'Read replicas are copies of the primary database that handle read queries, allowing you to scale read capacity horizontally while the primary handles writes.',
      },
      {
        question: 'What is the main limitation of vertical scaling?',
        options: [
          'It requires code changes',
          'Hardware has physical limits and becomes very expensive at high end',
          'It causes data loss',
          'It only works with NoSQL databases',
        ],
        correctAnswer: 1,
        explanation: 'Vertical scaling has a ceiling - there\'s a limit to how powerful a single server can be, and costs increase exponentially at the high end. Horizontal scaling has no theoretical limit.',
      },
      {
        question: 'When is table partitioning a good scaling strategy?',
        options: [
          'When data is randomly distributed',
          'When you have time-series data that can be split by date ranges',
          'When you need ACID transactions',
          'When queries access all data equally',
        ],
        correctAnswer: 1,
        explanation: 'Partitioning works well for time-series data (logs, orders, events) where queries typically access recent data. It enables partition pruning and easy archival of old data.',
      },
      {
        question: 'What is connection pooling used for?',
        options: [
          'Encrypting database connections',
          'Backing up data',
          'Efficiently reusing database connections to reduce overhead',
          'Splitting reads and writes',
        ],
        correctAnswer: 2,
        explanation: 'Connection pooling maintains a pool of open database connections that can be reused, reducing the overhead of creating new connections for each request.',
      },
    ],
  },

  'sharding': {
    id: 'sharding',
    pathId: 'advanced',
    title: 'Database Sharding',
    description: 'Scale horizontally by partitioning data across multiple databases',
    content: {
      overview: 'Sharding is a database partitioning technique that distributes data across multiple database instances. Each shard contains a subset of the data, enabling horizontal scalability.',
      keyPoints: [
        'Horizontal partitioning of data',
        'Distributed across multiple servers',
        'Shard key determines data distribution',
        'Improved write and read performance',
        'Complexity in queries and transactions',
      ],
      useCases: [
        'Very large datasets (billions of rows)',
        'High write throughput applications',
        'Multi-tenant SaaS applications',
        'Geographic data distribution',
        'Scaling beyond single server capacity',
      ],
      bestPractices: [
        'Choose shard key carefully',
        'Ensure even data distribution',
        'Plan for shard rebalancing',
        'Monitor shard performance',
        'Consider query patterns',
      ],
      doAndDont: {
        do: [
          'Choose stable shard keys',
          'Monitor shard distribution',
          'Plan for growth',
          'Use consistent hashing',
          'Document sharding strategy',
        ],
        dont: [
          'Use sequential IDs as shard key',
          'Create hot shards',
          'Cross-shard JOIN frequently',
          'Ignore rebalancing needs',
          'Shard prematurely',
        ],
      },
    },
    examples: [
      {
        title: 'Sharding Strategies',
        code: `-- Range-based sharding
-- Shard 1: user_id 1-1000000
-- Shard 2: user_id 1000001-2000000
-- Shard 3: user_id 2000001-3000000

-- Hash-based sharding
shard_number = hash(user_id) % number_of_shards

-- Geographic sharding
-- Shard 1: users in USA
-- Shard 2: users in Europe
-- Shard 3: users in Asia

-- List-based sharding (multi-tenant)
-- Shard 1: tenant_ids [1, 5, 9, 13]
-- Shard 2: tenant_ids [2, 6, 10, 14]
-- Shard 3: tenant_ids [3, 7, 11, 15]`,
        language: 'sql',
      },
      {
        title: 'Application-Level Sharding',
        code: `# Python example of routing queries
def get_shard(user_id, num_shards=4):
    return user_id % num_shards

def get_user(user_id):
    shard = get_shard(user_id)
    connection = get_connection(f'shard_{shard}')
    cursor = connection.cursor()
    cursor.execute(
        "SELECT * FROM users WHERE user_id = %s",
        (user_id,)
    )
    return cursor.fetchone()

def create_user(user_data):
    user_id = generate_user_id()
    shard = get_shard(user_id)
    connection = get_connection(f'shard_{shard}')
    cursor = connection.cursor()
    cursor.execute(
        "INSERT INTO users VALUES (%s, %s, %s)",
        (user_id, user_data['name'], user_data['email'])
    )
    connection.commit()`,
        language: 'python',
      },
      {
        title: 'MongoDB Sharding',
        code: `// Enable sharding on database
sh.enableSharding("mydb")

// Create shard key index
db.users.createIndex({ "user_id": 1 })

// Shard the collection
sh.shardCollection("mydb.users", { "user_id": 1 })

// Check sharding status
sh.status()

// View chunk distribution
db.users.getShardDistribution()

// Add a new shard
sh.addShard("shard03/mongodb3.example.com:27017")`,
        language: 'javascript',
      },
    ],
    quiz: [
      {
        question: 'What is the primary benefit of database sharding?',
        options: [
          'Easier backups',
          'Horizontal scalability for large datasets',
          'Better security',
          'Automatic data compression',
        ],
        correctAnswer: 1,
        explanation: 'Sharding enables horizontal scalability by distributing data across multiple servers, allowing systems to handle larger datasets and higher throughput.',
      },
      {
        question: 'What is a shard key?',
        options: [
          'A security credential',
          'The field used to determine data distribution',
          'A backup encryption key',
          'A user password',
        ],
        correctAnswer: 1,
        explanation: 'A shard key is the field used to determine how data is distributed across shards. It\'s crucial for achieving even distribution and good performance.',
      },
      {
        question: 'What is a hot shard?',
        options: [
          'A shard with high temperature',
          'A shard receiving disproportionate traffic',
          'A newly created shard',
          'A shard being backed up',
        ],
        correctAnswer: 1,
        explanation: 'A hot shard is one that receives a disproportionate amount of traffic or data, causing performance bottlenecks. Good shard key selection helps avoid this.',
      },
      {
        question: 'Which sharding strategy uses a mathematical function on the key?',
        options: [
          'Range-based',
          'List-based',
          'Hash-based',
          'Geographic',
        ],
        correctAnswer: 2,
        explanation: 'Hash-based sharding uses a hash function on the shard key to determine which shard holds the data, providing good distribution but making range queries harder.',
      },
      {
        question: 'What is the main challenge with cross-shard queries?',
        options: [
          'They are impossible',
          'They require coordinating data from multiple shards',
          'They delete data',
          'They cause data duplication',
        ],
        correctAnswer: 1,
        explanation: 'Cross-shard queries need to gather and combine data from multiple shards, adding complexity and potentially reducing performance compared to single-shard queries.',
      },
    ],
  },
};
