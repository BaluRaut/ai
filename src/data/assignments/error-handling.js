// Error Handling & Exception Management - Production Ready
export const errorHandlingAssignments = [
  {
    id: 'err-1',
    title: 'Basic Try-Except',
    difficulty: 'Easy',
    description: 'Handle division by zero and invalid input gracefully. Essential for production code.',
    hints: [
      'Use try-except blocks',
      'Catch specific exceptions first',
      'Provide meaningful error messages'
    ],
    starterCode: `def safe_divide(a, b):
    """
    Divide a by b safely.
    Return result or error message string.
    
    Handle:
    - Division by zero
    - Invalid types (non-numeric input)
    """
    # Your code here:
    pass

# Test
print(safe_divide(10, 2))      # 5.0
print(safe_divide(10, 0))      # "Error: Division by zero"
print(safe_divide("10", 2))    # "Error: Invalid input type"
print(safe_divide(10, "abc"))  # "Error: Invalid input type"
`,
    solution: `def safe_divide(a, b):
    """Divide a by b with error handling."""
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return "Error: Division by zero"
    except TypeError:
        return "Error: Invalid input type"

print(safe_divide(10, 2))
print(safe_divide(10, 0))
print(safe_divide("10", 2))
print(safe_divide(10, "abc"))`
  },
  {
    id: 'err-2',
    title: 'Custom Exception',
    difficulty: 'Medium',
    description: 'Create and use custom exceptions for validation. Professional Python practice.',
    hints: [
      'Inherit from Exception class',
      'Add custom message and attributes',
      'Raise when validation fails'
    ],
    starterCode: `class ValidationError(Exception):
    """Custom exception for validation errors"""
    # Your code here:
    pass

def validate_user(username, age, email):
    """
    Validate user data. Raise ValidationError if invalid.
    
    Rules:
    - Username: 3-20 characters, alphanumeric only
    - Age: 0-150
    - Email: must contain @
    """
    # Your code here:
    pass

# Test
try:
    validate_user("john_doe", 25, "john@email.com")
    print("User valid!")
except ValidationError as e:
    print(f"Validation failed: {e}")

try:
    validate_user("ab", 25, "john@email.com")  # Too short
except ValidationError as e:
    print(f"Validation failed: {e}")

try:
    validate_user("john", -5, "john@email.com")  # Invalid age
except ValidationError as e:
    print(f"Validation failed: {e}")
`,
    solution: `class ValidationError(Exception):
    """Custom exception for validation errors"""
    def __init__(self, field, message):
        self.field = field
        self.message = message
        super().__init__(f"{field}: {message}")

def validate_user(username, age, email):
    """Validate user data with custom exceptions."""
    # Username validation
    if not (3 <= len(username) <= 20):
        raise ValidationError("username", "Must be 3-20 characters")
    if not username.replace("_", "").isalnum():
        raise ValidationError("username", "Must be alphanumeric")
    
    # Age validation
    if not isinstance(age, int) or not (0 <= age <= 150):
        raise ValidationError("age", "Must be 0-150")
    
    # Email validation
    if "@" not in email:
        raise ValidationError("email", "Must contain @")
    
    return True

try:
    validate_user("john_doe", 25, "john@email.com")
    print("User valid!")
except ValidationError as e:
    print(f"Validation failed: {e}")

try:
    validate_user("ab", 25, "john@email.com")
except ValidationError as e:
    print(f"Validation failed: {e}")

try:
    validate_user("john", -5, "john@email.com")
except ValidationError as e:
    print(f"Validation failed: {e}")`
  },
  {
    id: 'err-3',
    title: 'Context Manager (with statement)',
    difficulty: 'Hard',
    description: 'Implement a context manager for resource management. Used in file handling, DB connections, locks.',
    hints: [
      'Implement __enter__ and __exit__ methods',
      '__enter__ returns the resource',
      '__exit__ handles cleanup and exceptions'
    ],
    starterCode: `class Timer:
    """
    Context manager that measures execution time.
    
    Usage:
    with Timer() as t:
        # code to measure
    print(f"Elapsed: {t.elapsed}")
    """
    
    def __init__(self):
        # Your code here:
        pass
    
    def __enter__(self):
        # Your code here:
        pass
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        # Your code here:
        pass

# Test
import time

with Timer() as t:
    time.sleep(0.1)
    total = sum(range(1000000))

print(f"Elapsed: {t.elapsed:.3f} seconds")
print(f"Result: {total}")
`,
    solution: `import time

class Timer:
    """Context manager that measures execution time."""
    
    def __init__(self):
        self.start = None
        self.end = None
        self.elapsed = None
    
    def __enter__(self):
        self.start = time.time()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.end = time.time()
        self.elapsed = self.end - self.start
        # Return False to propagate exceptions
        return False

with Timer() as t:
    time.sleep(0.1)
    total = sum(range(1000000))

print(f"Elapsed: {t.elapsed:.3f} seconds")
print(f"Result: {total}")`
  },
  {
    id: 'err-4',
    title: 'Retry Decorator',
    difficulty: 'Hard',
    description: 'Create a decorator that retries failed functions. Used in network calls, API requests.',
    hints: [
      'Track number of attempts',
      'Catch exceptions and retry',
      'Use exponential backoff'
    ],
    starterCode: `import time
import random

def retry(max_attempts=3, delay=1):
    """
    Decorator that retries a function on failure.
    
    Args:
        max_attempts: Maximum number of attempts
        delay: Delay between attempts (in seconds)
    """
    # Your code here:
    pass

# Test with unreliable function
@retry(max_attempts=5, delay=0.1)
def unreliable_api_call():
    """Simulates an API that fails 70% of the time"""
    if random.random() < 0.7:
        raise ConnectionError("API unavailable")
    return {"status": "success", "data": [1, 2, 3]}

# Try calling it
try:
    result = unreliable_api_call()
    print(f"Success: {result}")
except ConnectionError as e:
    print(f"Failed after all retries: {e}")
`,
    solution: `import time
import random

def retry(max_attempts=3, delay=1):
    """Decorator that retries a function on failure."""
    def decorator(func):
        def wrapper(*args, **kwargs):
            last_exception = None
            
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    last_exception = e
                    print(f"Attempt {attempt} failed: {e}")
                    if attempt < max_attempts:
                        time.sleep(delay)
            
            raise last_exception
        return wrapper
    return decorator

@retry(max_attempts=5, delay=0.1)
def unreliable_api_call():
    if random.random() < 0.7:
        raise ConnectionError("API unavailable")
    return {"status": "success", "data": [1, 2, 3]}

try:
    result = unreliable_api_call()
    print(f"Success: {result}")
except ConnectionError as e:
    print(f"Failed after all retries: {e}")`
  },
  {
    id: 'err-5',
    title: 'Exception Chaining',
    difficulty: 'Medium',
    description: 'Use exception chaining to preserve error context. Important for debugging in production.',
    hints: [
      'Use "raise ... from ..." syntax',
      'Original exception stored in __cause__',
      'Provides complete error trace'
    ],
    starterCode: `class DatabaseError(Exception):
    """Database operation failed"""
    pass

class UserNotFoundError(Exception):
    """User not found in database"""
    pass

def get_user_from_db(user_id):
    """Simulate database lookup that might fail"""
    # Simulating different failures
    if user_id < 0:
        raise ValueError("Invalid user ID")
    if user_id == 0:
        raise ConnectionError("Database connection failed")
    if user_id > 100:
        return None  # User not found
    return {"id": user_id, "name": f"User{user_id}"}

def get_user(user_id):
    """
    Get user with proper exception chaining.
    Convert low-level exceptions to application exceptions.
    """
    # Your code here:
    pass

# Test
for uid in [-1, 0, 50, 150]:
    try:
        user = get_user(uid)
        print(f"Found user: {user}")
    except (DatabaseError, UserNotFoundError) as e:
        print(f"Error for user {uid}: {e}")
        if e.__cause__:
            print(f"  Caused by: {e.__cause__}")
`,
    solution: `class DatabaseError(Exception):
    pass

class UserNotFoundError(Exception):
    pass

def get_user_from_db(user_id):
    if user_id < 0:
        raise ValueError("Invalid user ID")
    if user_id == 0:
        raise ConnectionError("Database connection failed")
    if user_id > 100:
        return None
    return {"id": user_id, "name": f"User{user_id}"}

def get_user(user_id):
    """Get user with proper exception chaining."""
    try:
        user = get_user_from_db(user_id)
        if user is None:
            raise UserNotFoundError(f"User {user_id} not found")
        return user
    except (ValueError, ConnectionError) as e:
        raise DatabaseError(f"Database error for user {user_id}") from e

for uid in [-1, 0, 50, 150]:
    try:
        user = get_user(uid)
        print(f"Found user: {user}")
    except (DatabaseError, UserNotFoundError) as e:
        print(f"Error for user {uid}: {e}")
        if e.__cause__:
            print(f"  Caused by: {e.__cause__}")`
  },
  {
    id: 'err-6',
    title: 'Finally & Cleanup',
    difficulty: 'Medium',
    description: 'Use finally for guaranteed cleanup. Critical for resource management.',
    hints: [
      'finally always runs, even if exception occurs',
      'Use for cleanup: close files, connections',
      'Can use with else clause too'
    ],
    starterCode: `class Connection:
    """Simulates a database connection"""
    def __init__(self, name):
        self.name = name
        self.is_open = False
    
    def open(self):
        print(f"Opening connection: {self.name}")
        self.is_open = True
    
    def close(self):
        print(f"Closing connection: {self.name}")
        self.is_open = False
    
    def query(self, sql):
        if not self.is_open:
            raise RuntimeError("Connection not open")
        if "DROP" in sql.upper():
            raise PermissionError("DROP not allowed")
        return f"Result of: {sql}"

def execute_query(sql):
    """
    Execute query with proper connection management.
    Connection must ALWAYS be closed, even if error occurs.
    
    Return query result or raise exception.
    """
    # Your code here:
    pass

# Test
print(execute_query("SELECT * FROM users"))
print()
try:
    print(execute_query("DROP TABLE users"))
except PermissionError as e:
    print(f"Query failed: {e}")
`,
    solution: `class Connection:
    def __init__(self, name):
        self.name = name
        self.is_open = False
    
    def open(self):
        print(f"Opening connection: {self.name}")
        self.is_open = True
    
    def close(self):
        print(f"Closing connection: {self.name}")
        self.is_open = False
    
    def query(self, sql):
        if not self.is_open:
            raise RuntimeError("Connection not open")
        if "DROP" in sql.upper():
            raise PermissionError("DROP not allowed")
        return f"Result of: {sql}"

def execute_query(sql):
    """Execute query with guaranteed cleanup."""
    conn = Connection("main_db")
    
    try:
        conn.open()
        result = conn.query(sql)
        return result
    finally:
        # This ALWAYS runs
        conn.close()

print(execute_query("SELECT * FROM users"))
print()
try:
    print(execute_query("DROP TABLE users"))
except PermissionError as e:
    print(f"Query failed: {e}")`
  }
];

export default errorHandlingAssignments;
