// Real World Projects - Job Ready Assignments
export const realWorldProjectsAssignments = [
  {
    id: 'realworld-1',
    title: 'Password Validator',
    difficulty: 'Medium',
    description: 'Build a password strength checker like what companies use. Must check length, uppercase, lowercase, numbers, and special characters.',
    hints: [
      'Check minimum length (8 chars)',
      'Use any() with generator expressions',
      'Return strength level: weak, medium, strong'
    ],
    starterCode: `def validate_password(password):
    """
    Validate password strength.
    
    Requirements:
    - Minimum 8 characters
    - At least 1 uppercase letter
    - At least 1 lowercase letter
    - At least 1 digit
    - At least 1 special character (!@#$%^&*)
    
    Return: dict with 'valid' (bool), 'strength' (weak/medium/strong),
            and 'missing' (list of missing requirements)
    """
    # Your code here:
    pass

# Test cases
print(validate_password("abc"))
# {'valid': False, 'strength': 'weak', 'missing': [...]}

print(validate_password("Password123!"))
# {'valid': True, 'strength': 'strong', 'missing': []}

print(validate_password("password123"))
# {'valid': False, 'strength': 'medium', 'missing': ['uppercase', 'special']}
`,
    solution: `def validate_password(password):
    """
    Validate password strength with detailed feedback.
    """
    special_chars = "!@#$%^&*()_+-=[]{}|;':\",./<>?"
    
    checks = {
        'length': len(password) >= 8,
        'uppercase': any(c.isupper() for c in password),
        'lowercase': any(c.islower() for c in password),
        'digit': any(c.isdigit() for c in password),
        'special': any(c in special_chars for c in password)
    }
    
    missing = [key for key, passed in checks.items() if not passed]
    passed_count = sum(checks.values())
    
    # Determine strength
    if passed_count == 5:
        strength = 'strong'
    elif passed_count >= 3:
        strength = 'medium'
    else:
        strength = 'weak'
    
    return {
        'valid': len(missing) == 0,
        'strength': strength,
        'missing': missing
    }

# Test cases
print(validate_password("abc"))
print(validate_password("Password123!"))
print(validate_password("password123"))`
  },
  {
    id: 'realworld-2',
    title: 'Shopping Cart System',
    difficulty: 'Medium',
    description: 'Build a shopping cart with add, remove, update quantity, and calculate total with discounts.',
    hints: [
      'Use a class for Cart',
      'Store items as dict {name: {price, quantity}}',
      'Apply discounts based on total'
    ],
    starterCode: `class ShoppingCart:
    """
    Shopping cart with discount support.
    
    Discounts:
    - 10% off for orders over $100
    - 20% off for orders over $200
    """
    
    def __init__(self):
        # Your code here:
        pass
    
    def add_item(self, name, price, quantity=1):
        """Add item to cart"""
        pass
    
    def remove_item(self, name):
        """Remove item from cart"""
        pass
    
    def update_quantity(self, name, quantity):
        """Update item quantity"""
        pass
    
    def get_subtotal(self):
        """Get subtotal before discounts"""
        pass
    
    def get_discount(self):
        """Calculate discount amount"""
        pass
    
    def get_total(self):
        """Get final total after discounts"""
        pass
    
    def display(self):
        """Display cart contents"""
        pass

# Test
cart = ShoppingCart()
cart.add_item("Laptop", 999.99)
cart.add_item("Mouse", 29.99, 2)
cart.add_item("Keyboard", 79.99)
cart.display()
print(f"Total: \\${cart.get_total():.2f}")
`,
    solution: `class ShoppingCart:
    def __init__(self):
        self.items = {}
    
    def add_item(self, name, price, quantity=1):
        if name in self.items:
            self.items[name]['quantity'] += quantity
        else:
            self.items[name] = {'price': price, 'quantity': quantity}
    
    def remove_item(self, name):
        if name in self.items:
            del self.items[name]
    
    def update_quantity(self, name, quantity):
        if name in self.items:
            if quantity <= 0:
                self.remove_item(name)
            else:
                self.items[name]['quantity'] = quantity
    
    def get_subtotal(self):
        return sum(
            item['price'] * item['quantity'] 
            for item in self.items.values()
        )
    
    def get_discount(self):
        subtotal = self.get_subtotal()
        if subtotal > 200:
            return subtotal * 0.20
        elif subtotal > 100:
            return subtotal * 0.10
        return 0
    
    def get_total(self):
        return self.get_subtotal() - self.get_discount()
    
    def display(self):
        print("=" * 40)
        print("Shopping Cart")
        print("=" * 40)
        for name, item in self.items.items():
            line_total = item['price'] * item['quantity']
            print(f"{name}: \\${item['price']:.2f} x {item['quantity']} = \\${line_total:.2f}")
        print("-" * 40)
        print(f"Subtotal: \\${self.get_subtotal():.2f}")
        print(f"Discount: -\\${self.get_discount():.2f}")
        print(f"Total: \\${self.get_total():.2f}")

# Test
cart = ShoppingCart()
cart.add_item("Laptop", 999.99)
cart.add_item("Mouse", 29.99, 2)
cart.add_item("Keyboard", 79.99)
cart.display()`
  },
  {
    id: 'realworld-3',
    title: 'Log Parser',
    difficulty: 'Hard',
    description: 'Parse server logs to extract insights - count errors, find patterns, identify top IPs.',
    hints: [
      'Use regex to extract IP, status, path',
      'Use Counter for frequency analysis',
      'Group errors by type'
    ],
    starterCode: `import re
from collections import Counter

def parse_logs(log_lines):
    """
    Parse log lines and return insights.
    
    Log format: "IP - - [timestamp] \\"METHOD /path HTTP/1.1\\" STATUS SIZE"
    Example: '192.168.1.1 - - [01/Jan/2024:10:00:00] "GET /home HTTP/1.1" 200 1234'
    
    Return dict with:
    - total_requests: int
    - error_count: int (status >= 400)
    - top_ips: list of (ip, count) tuples
    - top_paths: list of (path, count) tuples
    - status_codes: dict of {code: count}
    """
    # Your code here:
    pass

# Sample logs
logs = [
    '192.168.1.1 - - [01/Jan/2024:10:00:00] "GET /home HTTP/1.1" 200 1234',
    '192.168.1.2 - - [01/Jan/2024:10:00:01] "GET /api/users HTTP/1.1" 200 567',
    '192.168.1.1 - - [01/Jan/2024:10:00:02] "POST /api/login HTTP/1.1" 401 89',
    '192.168.1.3 - - [01/Jan/2024:10:00:03] "GET /home HTTP/1.1" 200 1234',
    '192.168.1.1 - - [01/Jan/2024:10:00:04] "GET /admin HTTP/1.1" 403 45',
    '192.168.1.2 - - [01/Jan/2024:10:00:05] "GET /notfound HTTP/1.1" 404 23',
]

result = parse_logs(logs)
print(f"Total requests: {result['total_requests']}")
print(f"Errors: {result['error_count']}")
print(f"Top IPs: {result['top_ips']}")
print(f"Status codes: {result['status_codes']}")
`,
    solution: `import re
from collections import Counter

def parse_logs(log_lines):
    pattern = r'(\\d+\\.\\d+\\.\\d+\\.\\d+).*?"(\\w+) ([^ ]+).*?" (\\d+)'
    
    ips = []
    paths = []
    status_codes = []
    
    for line in log_lines:
        match = re.search(pattern, line)
        if match:
            ip, method, path, status = match.groups()
            ips.append(ip)
            paths.append(path)
            status_codes.append(int(status))
    
    ip_counter = Counter(ips)
    path_counter = Counter(paths)
    status_counter = Counter(status_codes)
    
    return {
        'total_requests': len(log_lines),
        'error_count': sum(1 for s in status_codes if s >= 400),
        'top_ips': ip_counter.most_common(5),
        'top_paths': path_counter.most_common(5),
        'status_codes': dict(status_counter)
    }

# Sample logs
logs = [
    '192.168.1.1 - - [01/Jan/2024:10:00:00] "GET /home HTTP/1.1" 200 1234',
    '192.168.1.2 - - [01/Jan/2024:10:00:01] "GET /api/users HTTP/1.1" 200 567',
    '192.168.1.1 - - [01/Jan/2024:10:00:02] "POST /api/login HTTP/1.1" 401 89',
    '192.168.1.3 - - [01/Jan/2024:10:00:03] "GET /home HTTP/1.1" 200 1234',
    '192.168.1.1 - - [01/Jan/2024:10:00:04] "GET /admin HTTP/1.1" 403 45',
    '192.168.1.2 - - [01/Jan/2024:10:00:05] "GET /notfound HTTP/1.1" 404 23',
]

result = parse_logs(logs)
print(f"Total requests: {result['total_requests']}")
print(f"Errors: {result['error_count']}")
print(f"Top IPs: {result['top_ips']}")
print(f"Status codes: {result['status_codes']}")`
  },
  {
    id: 'realworld-4',
    title: 'Data Validator API',
    difficulty: 'Medium',
    description: 'Build a flexible data validation system like what APIs use to validate incoming JSON data.',
    hints: [
      'Create validation rules as functions',
      'Support required, type, min/max, pattern',
      'Return detailed error messages'
    ],
    starterCode: `def validate_data(data, schema):
    """
    Validate data against a schema.
    
    Schema example:
    {
        'name': {'type': str, 'required': True, 'min_length': 2},
        'age': {'type': int, 'required': True, 'min': 0, 'max': 150},
        'email': {'type': str, 'required': True, 'pattern': r'@'},
        'phone': {'type': str, 'required': False}
    }
    
    Return: {'valid': bool, 'errors': dict of field -> error message}
    """
    # Your code here:
    pass

# Test
schema = {
    'name': {'type': str, 'required': True, 'min_length': 2},
    'age': {'type': int, 'required': True, 'min': 0, 'max': 150},
    'email': {'type': str, 'required': True, 'pattern': r'@'}
}

# Valid data
data1 = {'name': 'John Doe', 'age': 30, 'email': 'john@example.com'}
print(validate_data(data1, schema))

# Invalid data
data2 = {'name': 'J', 'age': -5, 'email': 'invalid'}
print(validate_data(data2, schema))

# Missing required field
data3 = {'name': 'John', 'age': 30}
print(validate_data(data3, schema))
`,
    solution: `import re

def validate_data(data, schema):
    errors = {}
    
    for field, rules in schema.items():
        value = data.get(field)
        
        # Check required
        if rules.get('required', False) and value is None:
            errors[field] = 'Field is required'
            continue
        
        if value is None:
            continue
        
        # Check type
        expected_type = rules.get('type')
        if expected_type and not isinstance(value, expected_type):
            errors[field] = f'Expected {expected_type.__name__}, got {type(value).__name__}'
            continue
        
        # Check min_length (for strings)
        if 'min_length' in rules and isinstance(value, str):
            if len(value) < rules['min_length']:
                errors[field] = f'Minimum length is {rules["min_length"]}'
                continue
        
        # Check min/max (for numbers)
        if 'min' in rules and isinstance(value, (int, float)):
            if value < rules['min']:
                errors[field] = f'Minimum value is {rules["min"]}'
                continue
        
        if 'max' in rules and isinstance(value, (int, float)):
            if value > rules['max']:
                errors[field] = f'Maximum value is {rules["max"]}'
                continue
        
        # Check pattern (for strings)
        if 'pattern' in rules and isinstance(value, str):
            if not re.search(rules['pattern'], value):
                errors[field] = f'Does not match required pattern'
                continue
    
    return {'valid': len(errors) == 0, 'errors': errors}

# Test
schema = {
    'name': {'type': str, 'required': True, 'min_length': 2},
    'age': {'type': int, 'required': True, 'min': 0, 'max': 150},
    'email': {'type': str, 'required': True, 'pattern': r'@'}
}

data1 = {'name': 'John Doe', 'age': 30, 'email': 'john@example.com'}
print(validate_data(data1, schema))

data2 = {'name': 'J', 'age': -5, 'email': 'invalid'}
print(validate_data(data2, schema))

data3 = {'name': 'John', 'age': 30}
print(validate_data(data3, schema))`
  },
  {
    id: 'realworld-5',
    title: 'Rate Limiter',
    difficulty: 'Hard',
    description: 'Implement a rate limiter - essential for APIs. Limit requests per user per time window.',
    hints: [
      'Track timestamps of requests per user',
      'Remove old timestamps outside window',
      'Check if under limit before allowing'
    ],
    starterCode: `from collections import defaultdict
import time

class RateLimiter:
    """
    Rate limiter using sliding window.
    Limit: max_requests per window_seconds
    """
    
    def __init__(self, max_requests, window_seconds):
        # Your code here:
        pass
    
    def is_allowed(self, user_id):
        """
        Check if user is allowed to make a request.
        Return True if allowed, False if rate limited.
        """
        pass
    
    def get_remaining(self, user_id):
        """
        Get remaining requests for user in current window.
        """
        pass

# Test
limiter = RateLimiter(max_requests=5, window_seconds=10)

# Simulate requests
user = "user123"
for i in range(7):
    allowed = limiter.is_allowed(user)
    remaining = limiter.get_remaining(user)
    print(f"Request {i+1}: {'Allowed' if allowed else 'RATE LIMITED'} (remaining: {remaining})")
`,
    solution: `from collections import defaultdict
import time

class RateLimiter:
    def __init__(self, max_requests, window_seconds):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self.requests = defaultdict(list)  # user_id -> list of timestamps
    
    def _clean_old_requests(self, user_id):
        """Remove requests outside the current window"""
        current_time = time.time()
        cutoff = current_time - self.window_seconds
        self.requests[user_id] = [
            ts for ts in self.requests[user_id] 
            if ts > cutoff
        ]
    
    def is_allowed(self, user_id):
        self._clean_old_requests(user_id)
        
        if len(self.requests[user_id]) < self.max_requests:
            self.requests[user_id].append(time.time())
            return True
        return False
    
    def get_remaining(self, user_id):
        self._clean_old_requests(user_id)
        return max(0, self.max_requests - len(self.requests[user_id]))

# Test
limiter = RateLimiter(max_requests=5, window_seconds=10)

user = "user123"
for i in range(7):
    allowed = limiter.is_allowed(user)
    remaining = limiter.get_remaining(user)
    print(f"Request {i+1}: {'Allowed' if allowed else 'RATE LIMITED'} (remaining: {remaining})")`
  },
  {
    id: 'realworld-6',
    title: 'LRU Cache',
    difficulty: 'Hard',
    description: 'Implement an LRU (Least Recently Used) Cache. Asked at every FAANG company.',
    hints: [
      'Use OrderedDict or dict + doubly linked list',
      'Move accessed items to end (most recent)',
      'Remove from front when capacity exceeded'
    ],
    starterCode: `class LRUCache:
    """
    Least Recently Used Cache with fixed capacity.
    When full, evict least recently used item.
    """
    
    def __init__(self, capacity):
        # Your code here:
        pass
    
    def get(self, key):
        """
        Get value by key. Return -1 if not found.
        Marks item as recently used.
        """
        pass
    
    def put(self, key, value):
        """
        Add or update key-value pair.
        Evicts least recently used if at capacity.
        """
        pass

# Test
cache = LRUCache(2)  # Capacity of 2

cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))   # Returns 1

cache.put(3, 3)       # Evicts key 2
print(cache.get(2))   # Returns -1 (not found)

cache.put(4, 4)       # Evicts key 1
print(cache.get(1))   # Returns -1 (not found)
print(cache.get(3))   # Returns 3
print(cache.get(4))   # Returns 4
`,
    solution: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()
    
    def get(self, key):
        if key not in self.cache:
            return -1
        # Move to end (most recently used)
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key, value):
        if key in self.cache:
            # Update and move to end
            self.cache.move_to_end(key)
        self.cache[key] = value
        
        # Evict oldest if over capacity
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)

# Test
cache = LRUCache(2)

cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))   # Returns 1

cache.put(3, 3)       # Evicts key 2
print(cache.get(2))   # Returns -1 (not found)

cache.put(4, 4)       # Evicts key 1
print(cache.get(1))   # Returns -1 (not found)
print(cache.get(3))   # Returns 3
print(cache.get(4))   # Returns 4`
  },
  {
    id: 'realworld-7',
    title: 'URL Shortener Logic',
    difficulty: 'Medium',
    description: 'Build the core logic for a URL shortener like bit.ly. Map short codes to full URLs.',
    hints: [
      'Generate unique short codes',
      'Use base62 encoding (a-z, A-Z, 0-9)',
      'Store mapping in both directions'
    ],
    starterCode: `import random
import string

class URLShortener:
    """
    URL Shortener with custom short codes.
    """
    
    def __init__(self, base_url="http://short.ly/"):
        # Your code here:
        pass
    
    def shorten(self, long_url, custom_code=None):
        """
        Create short URL. Use custom_code if provided.
        Return the full short URL.
        """
        pass
    
    def expand(self, short_code):
        """
        Get original URL from short code.
        Return None if not found.
        """
        pass
    
    def _generate_code(self, length=6):
        """Generate random short code"""
        pass

# Test
shortener = URLShortener()

# Shorten URLs
short1 = shortener.shorten("https://www.example.com/very/long/path/to/page")
print(f"Short URL: {short1}")

short2 = shortener.shorten("https://www.google.com", custom_code="goog")
print(f"Custom short URL: {short2}")

# Expand
print(f"Expanded: {shortener.expand(short1.split('/')[-1])}")
print(f"Expanded: {shortener.expand('goog')}")
print(f"Not found: {shortener.expand('xyz')}")
`,
    solution: `import random
import string

class URLShortener:
    def __init__(self, base_url="http://short.ly/"):
        self.base_url = base_url
        self.url_map = {}  # short_code -> long_url
        self.reverse_map = {}  # long_url -> short_code
    
    def _generate_code(self, length=6):
        chars = string.ascii_letters + string.digits
        while True:
            code = ''.join(random.choice(chars) for _ in range(length))
            if code not in self.url_map:
                return code
    
    def shorten(self, long_url, custom_code=None):
        # Check if already shortened
        if long_url in self.reverse_map:
            return self.base_url + self.reverse_map[long_url]
        
        # Use custom or generate code
        if custom_code:
            if custom_code in self.url_map:
                raise ValueError(f"Code '{custom_code}' already exists")
            code = custom_code
        else:
            code = self._generate_code()
        
        # Store mappings
        self.url_map[code] = long_url
        self.reverse_map[long_url] = code
        
        return self.base_url + code
    
    def expand(self, short_code):
        return self.url_map.get(short_code)

# Test
shortener = URLShortener()

short1 = shortener.shorten("https://www.example.com/very/long/path/to/page")
print(f"Short URL: {short1}")

short2 = shortener.shorten("https://www.google.com", custom_code="goog")
print(f"Custom short URL: {short2}")

print(f"Expanded: {shortener.expand(short1.split('/')[-1])}")
print(f"Expanded: {shortener.expand('goog')}")
print(f"Not found: {shortener.expand('xyz')}")`
  },
  {
    id: 'realworld-8',
    title: 'Task Queue',
    difficulty: 'Medium',
    description: 'Build a priority task queue with scheduling - like Celery or Redis Queue.',
    hints: [
      'Use heapq for priority queue',
      'Higher priority = lower number',
      'Support delayed tasks'
    ],
    starterCode: `import heapq
import time

class TaskQueue:
    """
    Priority task queue with delayed execution support.
    """
    
    def __init__(self):
        # Your code here:
        pass
    
    def add_task(self, task_name, handler, priority=5, delay=0):
        """
        Add task to queue.
        priority: 1 (highest) to 10 (lowest)
        delay: seconds to wait before task can run
        """
        pass
    
    def get_next_task(self):
        """
        Get next task ready to run (considering delay).
        Returns (task_name, handler) or None if no ready tasks.
        """
        pass
    
    def run_all(self):
        """
        Run all tasks in priority order.
        """
        pass
    
    def pending_count(self):
        """Return number of pending tasks"""
        pass

# Test
queue = TaskQueue()

def task_a(): print("Running Task A")
def task_b(): print("Running Task B")
def task_c(): print("Running Task C - HIGH PRIORITY")
def task_d(): print("Running Task D - DELAYED")

queue.add_task("Task A", task_a, priority=5)
queue.add_task("Task B", task_b, priority=5)
queue.add_task("Task C", task_c, priority=1)  # Highest priority
queue.add_task("Task D", task_d, priority=3, delay=1)  # Delayed

print(f"Pending tasks: {queue.pending_count()}")
print("Running tasks...")
queue.run_all()
`,
    solution: `import heapq
import time

class TaskQueue:
    def __init__(self):
        self.tasks = []
        self.counter = 0  # For stable sorting
    
    def add_task(self, task_name, handler, priority=5, delay=0):
        run_at = time.time() + delay
        # heapq is min-heap, so lower priority number = higher priority
        heapq.heappush(self.tasks, (priority, run_at, self.counter, task_name, handler))
        self.counter += 1
    
    def get_next_task(self):
        current_time = time.time()
        
        # Find first ready task
        ready_tasks = []
        not_ready = []
        
        while self.tasks:
            task = heapq.heappop(self.tasks)
            priority, run_at, counter, name, handler = task
            
            if run_at <= current_time:
                ready_tasks.append(task)
                break
            else:
                not_ready.append(task)
        
        # Put back not-ready tasks
        for task in not_ready:
            heapq.heappush(self.tasks, task)
        
        if ready_tasks:
            _, _, _, name, handler = ready_tasks[0]
            return (name, handler)
        return None
    
    def run_all(self):
        while self.tasks:
            result = self.get_next_task()
            if result:
                name, handler = result
                print(f"[Executing] {name}")
                handler()
            else:
                # Wait a bit for delayed tasks
                time.sleep(0.1)
    
    def pending_count(self):
        return len(self.tasks)

# Test
queue = TaskQueue()

def task_a(): print("Running Task A")
def task_b(): print("Running Task B")
def task_c(): print("Running Task C - HIGH PRIORITY")
def task_d(): print("Running Task D - DELAYED")

queue.add_task("Task A", task_a, priority=5)
queue.add_task("Task B", task_b, priority=5)
queue.add_task("Task C", task_c, priority=1)
queue.add_task("Task D", task_d, priority=3, delay=1)

print(f"Pending tasks: {queue.pending_count()}")
print("Running tasks...")
queue.run_all()`
  }
];

export default realWorldProjectsAssignments;
