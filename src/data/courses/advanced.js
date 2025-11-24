export const advanced = {
    topics: [
      {
        id: 'exception-handling',
        title: 'Exception Handling Mastery',
        description: 'Master error handling and exception management',
        difficulty: 'Advanced',
        estimatedTime: 65,
        prerequisites: ["oop-basics"],
        content: {
          overview: 'Exception handling is crucial for writing robust programs that can gracefully handle errors. Python uses try/except blocks to catch and handle exceptions, allowing programs to recover from errors instead of crashing. Understanding exception handling improves code reliability and user experience.',
          keyPoints: [
            'Exceptions are errors detected during execution',
            'try/except blocks catch and handle exceptions',
            'finally block always executes for cleanup',
            'else block runs if no exception occurs',
            'Can raise custom exceptions for specific errors'
          ],
          useCases: [
            {
              title: 'File Operations',
              description: 'Handle file not found, permission errors',
              example: 'Try to open file, handle if missing or inaccessible'
            },
            {
              title: 'Network Requests',
              description: 'Handle connection failures, timeouts',
              example: 'API calls with retry logic on failures'
            },
            {
              title: 'User Input Validation',
              description: 'Catch invalid input formats',
              example: 'Convert string to int, handle ValueError'
            },
            {
              title: 'Database Operations',
              description: 'Handle connection errors, query failures',
              example: 'Rollback transactions on errors'
            }
          ],
          dos: [
            'Catch specific exceptions, not generic Exception',
            'Use finally for cleanup (close files, connections)',
            'Provide meaningful error messages',
            'Log exceptions for debugging',
            'Raise exceptions for invalid states'
          ],
          donts: [
            'Don\'t use bare except: (catches everything including sys.exit)',
            'Don\'t silently ignore exceptions',
            'Don\'t use exceptions for flow control',
            'Don\'t catch exceptions you can\'t handle',
            'Don\'t forget to clean up resources'
          ],
          bestPractices: [
            'Catch specific exceptions first, general ones last',
            'Use context managers (with) for automatic cleanup',
            'Create custom exceptions for domain-specific errors',
            'Document what exceptions functions can raise',
            'Fail fast - detect errors early'
          ],
          codeExamples: [
            {
              title: 'Basic Exception Handling',
              code: `# Basic try/except with simulated input
# Simulated test cases
test_inputs = ["5", "abc", "0", "10"]

for test_val in test_inputs:
    print(f"\\nTesting with input: '{test_val}'")
    try:
        number = int(test_val)  # In real Python: int(input("Enter a number: "))
        result = 10 / number
        print(f"✓ Result: {result}")
    except ValueError:
        print("✗ Invalid input! Please enter a valid number.")
    except ZeroDivisionError:
        print("✗ Cannot divide by zero!")

# Catching multiple exceptions
try:
    value = int("abc")
except (ValueError, TypeError) as e:
    print("Error:", e)

# Generic exception catch (use sparingly)
def risky_operation():
    raise RuntimeError("Something went wrong")

try:
    risky_operation()
except Exception as e:
    print("An error occurred:", str(e))

# Get exception details
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print("Exception type:", type(e).__name__)
    print("Exception message:", str(e))`,
              explanation: 'try/except blocks catch exceptions. Catch specific exceptions when possible'
            },
            {
              title: 'try/except/else/finally',
              code: `# Complete exception handling structure
def read_file(filename):
    try:
        file = open(filename, 'r')
        content = file.read()
    except FileNotFoundError:
        print("File not found:", filename)
        return None
    except PermissionError:
        print("Permission denied:", filename)
        return None
    else:
        # Runs only if no exception occurred
        print("File read successfully")
        return content
    finally:
        # Always executes, even if exception or return
        try:
            file.close()
            print("File closed")
        except:
            pass  # File was never opened

# Better approach with context manager
def read_file_better(filename):
    try:
        with open(filename, 'r') as file:
            content = file.read()
            return content
    except FileNotFoundError:
        print("File not found:", filename)
        return None
    except PermissionError:
        print("Permission denied:", filename)
        return None
    else:
        print("File read successfully")

# Usage
content = read_file_better("data.txt")
if content:
    print("Content length:", len(content))`,
              explanation: 'else runs if no exception, finally always runs for cleanup. Context managers are preferred'
            },
            {
              title: 'Raising Exceptions',
              code: `# Raise built-in exceptions
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

# Raise with custom message
def validate_age(age):
    if not isinstance(age, int):
        raise TypeError("Age must be an integer")
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 150:
        raise ValueError("Age seems unrealistic")
    return True

# Re-raising exceptions
def process_data(data):
    try:
        result = complex_operation(data)
    except ValueError as e:
        print("Error processing data:", e)
        raise  # Re-raise the same exception

# Chaining exceptions (Python 3)
def wrapper_function():
    try:
        dangerous_operation()
    except ValueError as e:
        raise RuntimeError("Wrapper failed") from e

# Usage
try:
    validate_age(-5)
except ValueError as e:
    print("Validation error:", e)

try:
    divide(10, 0)
except ValueError as e:
    print("Division error:", e)`,
              explanation: 'Raise exceptions to signal errors. Use specific exception types for clarity'
            },
            {
              title: 'Custom Exceptions',
              code: `# Custom exception classes
class ValidationError(Exception):
    """Raised when validation fails"""
    pass

class InsufficientFundsError(Exception):
    """Raised when account has insufficient funds"""
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        message = "Insufficient funds: balance={}, attempted={}".format(
            balance, amount
        )
        super().__init__(message)

class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance
    
    def withdraw(self, amount):
        if amount <= 0:
            raise ValidationError("Withdrawal amount must be positive")
        if amount > self.balance:
            raise InsufficientFundsError(self.balance, amount)
        self.balance -= amount
        return self.balance

# Usage
account = BankAccount(100)

try:
    account.withdraw(-50)
except ValidationError as e:
    print("Validation error:", e)

try:
    account.withdraw(150)
except InsufficientFundsError as e:
    print("Error:", e)
    print("Available:", e.balance)
    print("Requested:", e.amount)

# Exception hierarchy
class APIError(Exception):
    """Base exception for API errors"""
    pass

class AuthenticationError(APIError):
    """Authentication failed"""
    pass

class RateLimitError(APIError):
    """Rate limit exceeded"""
    pass

def call_api(auth_token):
    if not auth_token:
        raise AuthenticationError("No auth token provided")
    # API call logic
    raise RateLimitError("Too many requests")

try:
    call_api(None)
except AuthenticationError as e:
    print("Auth error:", e)
except APIError as e:
    print("API error:", e)`,
              explanation: 'Custom exceptions provide domain-specific error handling with meaningful names'
            },
            {
              title: 'Real-World: Robust File Processor',
              code: `import os
import json

class FileProcessingError(Exception):
    """Base exception for file processing errors"""
    pass

class FileProcessor:
    def __init__(self, input_file, output_file):
        self.input_file = input_file
        self.output_file = output_file
    
    def validate_file(self, filename):
        """Validate file exists and is readable"""
        if not os.path.exists(filename):
            raise FileNotFoundError("File does not exist: {}".format(filename))
        if not os.access(filename, os.R_OK):
            raise PermissionError("No read permission: {}".format(filename))
    
    def process(self):
        """Process file with comprehensive error handling"""
        try:
            # Validate input file
            self.validate_file(self.input_file)
            
            # Read and process
            with open(self.input_file, 'r') as f:
                data = json.load(f)
            
            # Transform data
            processed = self.transform_data(data)
            
            # Write output
            with open(self.output_file, 'w') as f:
                json.dump(processed, f, indent=2)
            
        except FileNotFoundError as e:
            print("ERROR: {}".format(e))
            return False
        except PermissionError as e:
            print("ERROR: {}".format(e))
            return False
        except json.JSONDecodeError as e:
            print("ERROR: Invalid JSON in {}: {}".format(self.input_file, e))
            return False
        except Exception as e:
            print("ERROR: Unexpected error: {}".format(e))
            return False
        else:
            print("SUCCESS: Processed {} -> {}".format(
                self.input_file, self.output_file
            ))
            return True
        finally:
            print("Processing completed")
    
    def transform_data(self, data):
        """Transform data with validation"""
        if not isinstance(data, list):
            raise ValueError("Expected list, got {}".format(type(data).__name__))
        return [item.upper() if isinstance(item, str) else item for item in data]

# Usage
processor = FileProcessor("input.json", "output.json")
success = processor.process()

if not success:
    print("Failed to process file")`,
              explanation: 'Comprehensive error handling makes programs robust and user-friendly'
            }
          ],
          quiz: [
            {
              question: 'What is the purpose of the finally block?',
              options: [
                'Runs only if exception occurs',
                'Runs only if no exception occurs',
                'Always runs, even if exception or return',
                'Never runs if exception occurs'
              ],
              correctAnswer: 2,
              explanation: 'finally block always executes, perfect for cleanup operations like closing files'
            },
            {
              question: 'What\'s wrong with using "except:" without specifying exception type?',
              options: [
                'Nothing, it\'s recommended',
                'It catches everything including system exits',
                'It\'s faster than specific exceptions',
                'It only catches ValueError'
              ],
              correctAnswer: 1,
              explanation: 'Bare except: catches everything including SystemExit, making it hard to stop the program'
            },
            {
              question: 'When should you create custom exceptions?',
              options: [
                'Never, use built-in exceptions only',
                'Always, for every error',
                'For domain-specific errors with special handling',
                'Only for file operations'
              ],
              correctAnswer: 2,
              explanation: 'Custom exceptions are useful for domain-specific errors that need special handling or information'
            }
          ]
        }
      },

      {
        id: 'file-handling',
        title: 'File Handling & I/O Operations',
        description: 'Master file operations and data persistence',
        content: {
          overview: 'File handling is essential for reading and writing data to disk. Python provides powerful tools for working with files, including context managers for safe operations, pathlib for path manipulation, and built-in support for common formats like CSV and JSON. Understanding file I/O is crucial for data persistence and processing.',
          keyPoints: [
            'Use context managers (with) for automatic file closing',
            'Different modes: read (r), write (w), append (a), binary (b)',
            'pathlib provides object-oriented path handling',
            'CSV and JSON modules for structured data',
            'Always handle file-related exceptions'
          ],
          useCases: [
            {
              title: 'Data Persistence',
              description: 'Save and load application data',
              example: 'Save user preferences, game state, application config'
            },
            {
              title: 'Data Processing',
              description: 'Read, transform, and write data files',
              example: 'Process CSV reports, analyze log files, data ETL'
            },
            {
              title: 'Configuration Management',
              description: 'Load settings from config files',
              example: 'Read JSON/YAML config, environment variables'
            },
            {
              title: 'Data Export/Import',
              description: 'Exchange data with other systems',
              example: 'Export to CSV/Excel, import from JSON/XML'
            }
          ],
          dos: [
            'Always use context managers (with) for file operations',
            'Handle exceptions (FileNotFoundError, PermissionError)',
            'Close files explicitly if not using with statement',
            'Use pathlib for cross-platform path handling',
            'Specify encoding explicitly (usually utf-8)'
          ],
          donts: [
            'Don\'t forget to close files (use with)',
            'Don\'t read entire large files into memory',
            'Don\'t ignore file operation exceptions',
            'Don\'t use string concatenation for paths',
            'Don\'t assume file exists without checking'
          ],
          bestPractices: [
            'Use pathlib.Path for path operations',
            'Always specify file encoding',
            'Process large files in chunks or lines',
            'Use appropriate modules (csv, json) for structured data',
            'Validate paths and permissions before operations'
          ],
          codeExamples: [
            {
              title: 'Basic File Operations',
              code: `# Reading files - best practice with context manager
with open('data.txt', 'r', encoding='utf-8') as file:
    content = file.read()
    print(content)

# File automatically closed after with block

# Reading line by line (memory efficient for large files)
with open('data.txt', 'r') as file:
    for line in file:
        print(line.strip())

# Read all lines into a list
with open('data.txt', 'r') as file:
    lines = file.readlines()
    print(lines)

# Writing to files
with open('output.txt', 'w') as file:
    file.write("Hello, World!\\n")
    file.write("Second line\\n")

# Writing multiple lines
lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
with open('output.txt', 'w') as file:
    file.writelines(lines)

# Appending to files
with open('log.txt', 'a') as file:
    file.write("New log entry\\n")

# Without context manager (not recommended)
file = open('data.txt', 'r')
try:
    content = file.read()
finally:
    file.close()  # Must remember to close`,
              explanation: 'Context managers (with) ensure files are properly closed even if errors occur'
            },
            {
              title: 'Path Handling with pathlib',
              code: `from pathlib import Path

# Create Path objects
current_file = Path(__file__)
home_dir = Path.home()
temp_dir = Path('/tmp')

# Path operations
data_dir = Path('data')
file_path = data_dir / 'users' / 'alice.txt'  # Cross-platform join

print(file_path)  # data/users/alice.txt

# Check if exists
if file_path.exists():
    print("File exists")

if file_path.is_file():
    print("Is a file")

if data_dir.is_dir():
    print("Is a directory")

# Create directories
output_dir = Path('output/reports')
output_dir.mkdir(parents=True, exist_ok=True)

# Read/write with pathlib
file_path = Path('data.txt')
content = file_path.read_text(encoding='utf-8')
file_path.write_text("Hello, World!", encoding='utf-8')

# Get file info
print("Name:", file_path.name)  # data.txt
print("Stem:", file_path.stem)  # data
print("Suffix:", file_path.suffix)  # .txt
print("Parent:", file_path.parent)  # .

# List files in directory
data_dir = Path('data')
for file in data_dir.glob('*.txt'):
    print(file)

# Recursive glob
for file in data_dir.rglob('*.py'):
    print(file)`,
              explanation: 'pathlib provides clean, object-oriented path handling that works across platforms'
            },
            {
              title: 'Working with CSV Files',
              code: `import csv

# Reading CSV
with open('users.csv', 'r') as file:
    reader = csv.reader(file)
    header = next(reader)  # Skip header
    for row in reader:
        print(row)

# Reading CSV with DictReader
with open('users.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row['name'], row['email'], row['age'])

# Writing CSV
data = [
    ['Name', 'Age', 'City'],
    ['Alice', '25', 'NYC'],
    ['Bob', '30', 'LA'],
    ['Charlie', '35', 'Chicago']
]

with open('output.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)

# Writing with DictWriter
fieldnames = ['name', 'age', 'city']
users = [
    {'name': 'Alice', 'age': 25, 'city': 'NYC'},
    {'name': 'Bob', 'age': 30, 'city': 'LA'}
]

with open('users.csv', 'w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(users)`,
              explanation: 'CSV module handles comma-separated values with automatic quoting and escaping'
            },
            {
              title: 'Working with JSON Files',
              code: `import json

# Reading JSON
with open('data.json', 'r') as file:
    data = json.load(file)
    print(data)

# Writing JSON
data = {
    'users': [
        {'name': 'Alice', 'age': 25},
        {'name': 'Bob', 'age': 30}
    ],
    'total': 2
}

with open('output.json', 'w') as file:
    json.dump(data, file, indent=2)

# Pretty print JSON
print(json.dumps(data, indent=2))

# JSON string to Python object
json_string = '{"name": "Alice", "age": 25}'
user = json.loads(json_string)
print(user['name'])

# Python object to JSON string
python_obj = {'name': 'Bob', 'active': True, 'score': 95.5}
json_string = json.dumps(python_obj)
print(json_string)

# Custom JSON encoding
from datetime import datetime

class DateEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        return super().default(obj)

data = {'timestamp': datetime.now(), 'event': 'login'}
json_string = json.dumps(data, cls=DateEncoder, indent=2)
print(json_string)`,
              explanation: 'JSON module provides easy conversion between Python objects and JSON format'
            },
            {
              title: 'Real-World: Log File Analyzer',
              code: `from pathlib import Path
from datetime import datetime
import json

class LogAnalyzer:
    def __init__(self, log_file):
        self.log_file = Path(log_file)
        self.stats = {
            'total_lines': 0,
            'errors': 0,
            'warnings': 0,
            'info': 0
        }
    
    def analyze(self):
        """Analyze log file line by line"""
        if not self.log_file.exists():
            raise FileNotFoundError("Log file not found")
        
        with open(self.log_file, 'r', encoding='utf-8') as file:
            for line in file:
                self.stats['total_lines'] += 1
                line_lower = line.lower()
                
                if 'error' in line_lower:
                    self.stats['errors'] += 1
                elif 'warning' in line_lower:
                    self.stats['warnings'] += 1
                elif 'info' in line_lower:
                    self.stats['info'] += 1
        
        return self.stats
    
    def save_report(self, output_file):
        """Save analysis report as JSON"""
        report = {
            'log_file': str(self.log_file),
            'analyzed_at': datetime.now().isoformat(),
            'statistics': self.stats
        }
        
        output_path = Path(output_file)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        
        with open(output_path, 'w') as file:
            json.dump(report, file, indent=2)
        
        print("Report saved to:", output_path)

# Usage
analyzer = LogAnalyzer('app.log')
stats = analyzer.analyze()

print("LOG ANALYSIS")
print("=" * 50)
for key, value in stats.items():
    print("{}: {}".format(key, value))

analyzer.save_report('reports/log_analysis.json')`,
              explanation: 'Real-world example combining file reading, analysis, and JSON export'
            }
          ],
          quiz: [
            {
              question: 'What is the purpose of the with statement in file operations?',
              options: [
                'Makes files read faster',
                'Automatically closes files even if errors occur',
                'Encrypts file content',
                'Compresses files'
              ],
              correctAnswer: 1,
              explanation: 'with statement ensures files are properly closed even if exceptions occur'
            },
            {
              question: 'Which mode opens a file for appending without truncating?',
              options: [
                '"w" mode',
                '"r+" mode',
                '"a" mode',
                '"x" mode'
              ],
              correctAnswer: 2,
              explanation: '"a" mode opens for appending. "w" truncates the file, "r+" allows reading and writing, "x" creates new file'
            },
            {
              question: 'What is the advantage of reading files line by line vs. read()?',
              options: [
                'Faster execution',
                'Better security',
                'Memory efficient for large files',
                'Automatic error handling'
              ],
              correctAnswer: 2,
              explanation: 'Reading line by line is memory efficient as it doesn\'t load the entire file into memory'
            }
          ]
        }
      },

      {
        id: 'modules-packages',
        title: 'Modules & Packages',
        description: 'Master code organization and imports',
        content: {
          overview: 'Modules and packages are Python\'s way of organizing code into reusable components. A module is a single Python file, while a package is a collection of modules. Understanding imports, the module search path, and package structure is essential for building maintainable applications and reusing code effectively.',
          keyPoints: [
            'Modules are single .py files containing Python code',
            'Packages are directories containing __init__.py',
            'import statement loads modules and packages',
            '__name__ == "__main__" identifies script entry point',
            'Python searches sys.path for modules'
          ],
          useCases: [
            {
              title: 'Code Organization',
              description: 'Split large projects into manageable files',
              example: 'utils.py, models.py, views.py, config.py'
            },
            {
              title: 'Code Reuse',
              description: 'Share code across multiple scripts',
              example: 'Common utilities, helper functions, constants'
            },
            {
              title: 'Library Development',
              description: 'Create reusable libraries',
              example: 'Create installable packages with setup.py'
            },
            {
              title: 'Namespace Management',
              description: 'Avoid naming conflicts',
              example: 'myapp.database, myapp.api, myapp.utils'
            }
          ],
          dos: [
            'Use meaningful module and package names',
            'Keep modules focused (single responsibility)',
            'Use __init__.py for package initialization',
            'Import only what you need',
            'Use if __name__ == "__main__" for scripts'
          ],
          donts: [
            'Don\'t use circular imports',
            'Don\'t import * (use explicit imports)',
            'Don\'t pollute global namespace',
            'Don\'t modify sys.path unless necessary',
            'Don\'t forget __init__.py for packages'
          ],
          bestPractices: [
            'Use absolute imports in packages',
            'Keep __init__.py minimal',
            'Group imports: stdlib, third-party, local',
            'Use importlib for dynamic imports',
            'Document module purpose in docstring'
          ],
          codeExamples: [
            {
              title: 'Creating and Importing Modules',
              code: `# File: math_utils.py
"""Utility functions for mathematical operations"""

PI = 3.14159

def circle_area(radius):
    """Calculate circle area"""
    return PI * radius ** 2

def circle_circumference(radius):
    """Calculate circle circumference"""
    return 2 * PI * radius

# File: main.py
# Different import styles

# Import entire module
import math_utils
area = math_utils.circle_area(5)
print(area)

# Import specific functions
from math_utils import circle_area, PI
area = circle_area(5)
print(PI)

# Import with alias
import math_utils as mu
area = mu.circle_area(5)

# Import all (not recommended)
from math_utils import *
area = circle_area(5)  # Works but pollutes namespace

# Conditional import
try:
    import numpy as np
except ImportError:
    print("NumPy not installed")
    np = None`,
              explanation: 'Multiple ways to import modules. Use explicit imports for clarity'
            },
            {
              title: 'Creating Packages',
              code: `# Package structure:
# myapp/
#     __init__.py
#     config.py
#     utils.py
#     models/
#         __init__.py
#         user.py
#         product.py

# File: myapp/__init__.py
"""MyApp package initialization"""
__version__ = '1.0.0'

# Make commonly used items available at package level
from .config import settings
from .utils import helper

# File: myapp/config.py
"""Application configuration"""
settings = {
    'debug': True,
    'database': 'myapp.db'
}

# File: myapp/utils.py
"""Utility functions"""
def helper():
    return "Helper function"

# File: myapp/models/__init__.py
"""Models package"""
from .user import User
from .product import Product

# File: myapp/models/user.py
"""User model"""
class User:
    def __init__(self, name):
        self.name = name

# File: myapp/models/product.py
"""Product model"""
class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

# Using the package:
# File: main.py
import myapp
from myapp.models import User, Product

print(myapp.__version__)
print(myapp.settings)

user = User("Alice")
product = Product("Widget", 9.99)`,
              explanation: 'Packages organize related modules. __init__.py makes directory a package'
            },
            {
              title: 'Script vs Module: __name__ == "__main__"',
              code: `# File: calculator.py
"""Calculator module with command-line interface"""

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def main():
    """Command-line interface"""
    print("Calculator")
    print("10 + 5 =", add(10, 5))
    print("10 - 5 =", subtract(10, 5))
    print("10 * 5 =", multiply(10, 5))
    print("10 / 5 =", divide(10, 5))

# This runs only when script is executed directly
if __name__ == "__main__":
    main()

# When imported as module:
# >>> import calculator
# >>> result = calculator.add(10, 5)
# (main() is NOT called)

# When run as script:
# $ python calculator.py
# Calculator
# 10 + 5 = 15
# ...
# (main() IS called)`,
              explanation: '__name__ is "__main__" only when file is run as script, not when imported'
            },
            {
              title: 'Module Search Path and sys.path',
              code: `import sys
import os

# Print module search path
print("Python searches for modules in:")
for path in sys.path:
    print(path)

# sys.path contains:
# 1. Current directory
# 2. PYTHONPATH environment variable
# 3. Standard library directories
# 4. Site-packages (third-party packages)

# Add custom path (temporary)
sys.path.insert(0, '/custom/path')

# Better: Use PYTHONPATH environment variable
# $ export PYTHONPATH=/custom/path:$PYTHONPATH

# Check where module is loaded from
import json
print("json module location:", json.__file__)

# Reload module (useful for development)
import importlib
importlib.reload(json)

# Dynamic import
module_name = 'math'
math_module = importlib.import_module(module_name)
print(math_module.pi)`,
              explanation: 'sys.path determines where Python looks for modules. Usually no need to modify it'
            },
            {
              title: 'Real-World: Project Structure',
              code: `# Professional project structure:
# project/
#     README.md
#     setup.py
#     requirements.txt
#     myapp/
#         __init__.py
#         __main__.py  # Makes package executable
#         config.py
#         database.py
#         api/
#             __init__.py
#             routes.py
#             middleware.py
#         models/
#             __init__.py
#             user.py
#             product.py
#         utils/
#             __init__.py
#             validators.py
#             helpers.py
#     tests/
#         __init__.py
#         test_api.py
#         test_models.py

# File: myapp/__main__.py
"""Entry point for python -m myapp"""
from .api import app

if __name__ == '__main__':
    app.run()

# File: myapp/__init__.py
"""Application package initialization"""
__version__ = '1.0.0'
__author__ = 'Your Name'

from .config import load_config
from .database import connect

config = load_config()
db = connect(config['database'])

# Usage:
# $ python -m myapp  # Runs __main__.py
# or
# >>> import myapp
# >>> myapp.__version__
# '1.0.0'`,
              explanation: 'Professional structure with clear separation of concerns and proper package organization'
            }
          ],
          quiz: [
            {
              question: 'What is the purpose of __init__.py?',
              options: [
                'Initialize variables',
                'Mark directory as Python package',
                'Define main function',
                'Import all modules'
              ],
              correctAnswer: 1,
              explanation: '__init__.py marks a directory as a Python package and runs when package is imported'
            },
            {
              question: 'When is __name__ equal to "__main__"?',
              options: [
                'When module is imported',
                'When module is run as a script',
                'Always',
                'Never'
              ],
              correctAnswer: 1,
              explanation: '__name__ is "__main__" only when the file is executed directly as a script'
            },
            {
              question: 'What is wrong with "from module import *"?',
              options: [
                'It\'s slower',
                'It pollutes namespace and makes code less clear',
                'It doesn\'t work',
                'Nothing, it\'s recommended'
              ],
              correctAnswer: 1,
              explanation: 'import * pollutes namespace with many names and makes it unclear where functions come from'
            }
          ]
        }
      },

      {
        id: 'oop-basics',
        title: 'Object-Oriented Programming Basics',
        description: 'Master the 4 pillars of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction',
        content: {
          overview: 'Object-Oriented Programming (OOP) is a powerful programming paradigm that structures code around "objects" rather than functions and logic. These objects are instances of "classes", which act as blueprints. OOP relies on four fundamental pillars: Encapsulation (hiding internal state), Inheritance (creating new classes from existing ones), Polymorphism (using a unified interface for different types), and Abstraction (hiding complex implementation details). This approach makes code more modular, reusable, and easier to maintain for large-scale applications.',
          keyPoints: [
            'Classes are blueprints defining attributes (data) and methods (behavior)',
            'Objects are concrete instances created from classes',
            'The 4 Pillars of OOP: Encapsulation, Inheritance, Polymorphism, Abstraction',
            'Encapsulation protects data using private attributes and properties',
            'Inheritance promotes code reuse by deriving child classes from parents',
            'Polymorphism allows different classes to be treated as instances of the same general class',
            'Abstraction hides complex reality while exposing only the necessary parts',
            'Composition (has-a relationship) is often preferred over Inheritance (is-a relationship)'
          ],
          useCases: [
            {
              title: 'Modeling Real-World Entities',
              description: 'Represent complex entities with attributes and behaviors',
              example: 'Car class with attributes (color, model) and methods (start, stop)'
            },
            {
              title: 'Code Organization',
              description: 'Group related functionality together',
              example: 'User class with authentication, profile methods'
            },
            {
              title: 'Code Reuse',
              description: 'Inherit common functionality',
              example: 'Animal base class, Dog and Cat inherit behaviors'
            },
            {
              title: 'Large Applications',
              description: 'Structure complex systems',
              example: 'E-commerce: Product, Cart, Order, Payment classes'
            }
          ],
          dos: [
            'Use classes to model real-world concepts',
            'Keep class responsibilities focused (Single Responsibility)',
            'Use inheritance for "is-a" relationships',
            'Make attributes private when they shouldn\'t be accessed directly',
            'Provide clear class and method names'
          ],
          donts: [
            'Don\'t create god classes that do everything',
            'Don\'t use inheritance just for code reuse (use composition)',
            'Don\'t expose internal implementation details',
            'Don\'t forget to call super().__init__() in child classes',
            'Don\'t overuse inheritance (deep hierarchies are hard to maintain)'
          ],
          bestPractices: [
            'Favor composition over inheritance',
            'Use properties for controlled attribute access',
            'Implement __str__ and __repr__ for readable objects',
            'Follow naming conventions (CapWords for classes)',
            'Document classes and their public interface'
          ],
          codeExamples: [
            {
              title: '1. Creating Classes and Objects',
              code: `# Define a class
class Dog:
    # Class attribute (shared by all instances)
    species = "Canis familiaris"
    
    # Constructor (__init__ method)
    def __init__(self, name, age):
        # Instance attributes (unique to each instance)
        self.name = name
        self.age = age
    
    # Instance method
    def bark(self):
        return f"{self.name} says Woof!"
    
    def description(self):
        return f"{self.name} is {self.age} years old"

# Create objects (instances)
dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

print(dog1.name)         # Buddy
print(dog1.bark())       # Buddy says Woof!
print(dog1.description()) # Buddy is 3 years old
print(dog1.species)      # Canis familiaris

# Each object has its own instance attributes
print(dog2.name)  # Max
print(dog2.age)   # 5`,
              explanation: 'Classes define the structure. __init__ initializes objects. self refers to the instance. Create objects by calling the class.'
            },
            {
              title: '2. Encapsulation and Properties',
              code: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.__balance = balance  # Private attribute (by convention)
    
    # Property getter
    @property
    def balance(self):
        return self.__balance
    
    # Property setter
    @balance.setter
    def balance(self, amount):
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        self.__balance = amount
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return True
        return False
    
    def __str__(self):
        return f"Account({self.owner}: \${self.__balance})"

# Usage
account = BankAccount("Alice", 1000)
print(account.balance)  # 1000 (using property)
account.deposit(500)
print(account.balance)  # 1500

# Cannot set negative balance
try:
    account.balance = -100
except ValueError as e:
    print(e)  # Balance cannot be negative`,
              explanation: 'Use __ prefix for private attributes. @property creates managed attributes with getters/setters for validation.'
            },
            {
              title: '3. Inheritance',
              code: `# Base class (Parent)
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def make_sound(self):
        return "Some sound"
    
    def info(self):
        return f"{self.name} is a {self.species}"

# Derived class (Child)
class Dog(Animal):
    def __init__(self, name, breed):
        # Call parent constructor
        super().__init__(name, "Dog")
        self.breed = breed
    
    # Override parent method
    def make_sound(self):
        return "Woof! Woof!"
    
    # Add new method
    def fetch(self):
        return f"{self.name} is fetching the ball"

class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, "Cat")
        self.color = color
    
    def make_sound(self):
        return "Meow!"
    
    def scratch(self):
        return f"{self.name} is scratching"

# Usage
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", "Orange")

print(dog.info())        # Buddy is a Dog (inherited)
print(dog.make_sound())  # Woof! Woof! (overridden)
print(dog.fetch())       # Buddy is fetching (new method)

print(cat.make_sound())  # Meow!
print(cat.scratch())     # Whiskers is scratching`,
              explanation: 'Inheritance allows child classes to reuse parent code. Use super() to call parent methods. Override methods to customize behavior.'
            },
            {
              title: '4. Polymorphism',
              code: `class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return 3.14 * self.radius * self.radius

# Polymorphism in action
shapes = [Rectangle(10, 20), Circle(5)]

for shape in shapes:
    # Same method name 'area' works for different types
    print(f"Area: {shape.area()}")`,
              explanation: 'Polymorphism allows different classes to be treated as instances of the same general class through a common interface.'
            },
            {
              title: '5. Abstraction (Abstract Base Classes)',
              code: `from abc import ABC, abstractmethod

# Abstract Base Class
class PaymentProcessor(ABC):
    @abstractmethod
    def process_payment(self, amount):
        pass

class CreditCardPayment(PaymentProcessor):
    def process_payment(self, amount):
        return f"Processing credit card payment of \${amount}"

class PayPalPayment(PaymentProcessor):
    def process_payment(self, amount):
        return f"Processing PayPal payment of \${amount}"

# processor = PaymentProcessor() # Error: Cannot instantiate abstract class

# Concrete implementations
payments = [CreditCardPayment(), PayPalPayment()]
for p in payments:
    print(p.process_payment(100))`,
              explanation: 'Abstraction hides complex implementation details. Abstract Base Classes (ABC) enforce that child classes implement specific methods.'
            },
            {
              title: '6. Magic Methods (Operator Overloading)',
              code: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # String representation for end users
    def __str__(self):
        return f"Vector({self.x}, {self.y})"

    # String representation for developers
    def __repr__(self):
        return f"Vector(x={self.x}, y={self.y})"

    # Overloading + operator
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    # Overloading == operator
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

v1 = Vector(2, 3)
v2 = Vector(4, 5)
v3 = v1 + v2  # Uses __add__

print(f"v1: {v1}")      # Uses __str__
print(f"v3: {v3}")      # Vector(6, 8)
print(v1 == Vector(2, 3)) # True (Uses __eq__)`,
              explanation: 'Magic methods (dunder methods) allow you to define how objects behave with built-in operations like printing, addition, and comparison.'
            }
          ]
        },
        quiz: [
          {
            question: 'What is the purpose of __init__ method?',
            options: ['Delete object', 'Initialize object', 'Copy object', 'Print object'],
            correctAnswer: 1,
            explanation: '__init__ is the constructor that initializes new objects with their initial state.'
          },
          {
            question: 'What does "self" represent in a class method?',
            options: ['The class itself', 'The current instance', 'A global variable', 'The parent class'],
            correctAnswer: 1,
            explanation: '"self" refers to the current instance of the class, allowing access to instance attributes and methods.'
          },
          {
            question: 'What is encapsulation in OOP?',
            options: ['Creating multiple objects', 'Bundling data and methods', 'Inheriting from parents', 'Overriding methods'],
            correctAnswer: 1,
            explanation: 'Encapsulation is bundling data (attributes) and methods that operate on that data within a class.'
          }
        ]
      },
      {
        id: 'oop-advanced',
        title: 'Advanced OOP Concepts',
        description: 'Deep dive into Python object model, MRO, and Metaclasses',
        content: {
          overview: 'Advanced Object-Oriented Programming in Python goes beyond basic classes and inheritance. It involves understanding how Python actually implements objects, how method resolution works in multiple inheritance, how to optimize memory usage, and how to customize class creation itself using metaclasses.',
          keyPoints: [
            'Multiple Inheritance allows a class to inherit from multiple parents',
            'MRO (Method Resolution Order) determines the order of class search',
            'Mixins are small classes that provide specific functionality',
            '__slots__ optimizes memory usage by preventing dynamic attribute creation',
            'Descriptors allow customizing attribute access (get/set/delete)',
            'Metaclasses are "classes of classes" that control class creation'
          ],
          useCases: [
            {
              title: 'Complex Class Hierarchies',
              description: 'Using multiple inheritance and mixins',
              example: 'Django Mixins (LoginRequiredMixin, PermissionRequiredMixin)'
            },
            {
              title: 'Memory Optimization',
              description: 'Handling millions of small objects',
              example: 'Using __slots__ for Point or Particle classes'
            },
            {
              title: 'Framework Development',
              description: 'Creating APIs and ORMs',
              example: 'Django models, SQLAlchemy declarative base (Metaclasses)'
            },
            {
              title: 'Resource Management',
              description: 'Custom context managers',
              example: 'Database connections, file locks using __enter__/__exit__'
            }
          ],
          dos: [
            'Use Mixins to share functionality without deep hierarchies',
            'Use super() for cooperative multiple inheritance',
            'Use __slots__ only when memory is a critical bottleneck',
            'Use descriptors for reusable attribute logic',
            'Keep metaclasses for framework-level code'
          ],
          donts: [
            'Don\'t create complex diamond inheritance structures if avoidable',
            'Don\'t use __slots__ if you need dynamic attributes',
            'Don\'t overuse metaclasses (they are "magic")',
            'Don\'t rely on MRO for logic (it can be confusing)',
            'Don\'t mix classic and new-style classes (Python 2 legacy)'
          ],
          bestPractices: [
            'Follow the C3 linearization algorithm (MRO)',
            'Prefer composition over complex multiple inheritance',
            'Document mixin requirements clearly',
            'Use abstract base classes to define interfaces',
            'Test MRO with help(Class) to verify order'
          ],
          codeExamples: [
            {
              title: '1. Multiple Inheritance and MRO',
              code: `class A:
    def greet(self):
        return "Hello from A"

class B(A):
    def greet(self):
        return "Hello from B"

class C(A):
    def greet(self):
        return "Hello from C"

class D(B, C):
    pass

# Method Resolution Order (MRO)
# D -> B -> C -> A -> object
d = D()
print(d.greet())  # Output: Hello from B

print(D.mro())
# [<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>]

# Using super() in multiple inheritance
class Base:
    def __init__(self):
        print("Base init")

class Mixin1(Base):
    def __init__(self):
        print("Mixin1 init")
        super().__init__()

class Mixin2(Base):
    def __init__(self):
        print("Mixin2 init")
        super().__init__()

class Combined(Mixin1, Mixin2):
    def __init__(self):
        print("Combined init")
        super().__init__()

c = Combined()
# Output:
# Combined init
# Mixin1 init
# Mixin2 init
# Base init`,
              explanation: 'Python uses C3 linearization for MRO. super() ensures each class in the hierarchy is called exactly once.'
            },
            {
              title: '2. Memory Optimization with __slots__',
              code: `import sys

class RegularPoint:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class SlottedPoint:
    # Restrict attributes to x and y
    __slots__ = ['x', 'y']
    
    def __init__(self, x, y):
        self.x = x
        self.y = y

# Usage
p1 = RegularPoint(1, 2)
p2 = SlottedPoint(1, 2)

# Regular objects have __dict__
print(p1.__dict__)  # {'x': 1, 'y': 2}

# Slotted objects don't have __dict__
try:
    print(p2.__dict__)
except AttributeError:
    print("SlottedPoint has no __dict__")

# Cannot add new attributes to slotted object
try:
    p2.z = 3
except AttributeError as e:
    print(e)  # 'SlottedPoint' object has no attribute 'z'

# Memory difference (approximate)
print(f"Regular size: {sys.getsizeof(p1) + sys.getsizeof(p1.__dict__)} bytes")
print(f"Slotted size: {sys.getsizeof(p2)} bytes")`,
              explanation: '__slots__ saves memory by suppressing __dict__ creation, useful for creating millions of small objects.'
            },
            {
              title: '3. Descriptors',
              code: `class PositiveNumber:
    def __set_name__(self, owner, name):
        self.name = name

    def __get__(self, instance, owner):
        if instance is None:
            return self
        return instance.__dict__.get(self.name)

    def __set__(self, instance, value):
        if not isinstance(value, (int, float)):
            raise TypeError(f"{self.name} must be a number")
        if value <= 0:
            raise ValueError(f"{self.name} must be positive")
        instance.__dict__[self.name] = value

class Product:
    price = PositiveNumber()
    quantity = PositiveNumber()

    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    
    def total_cost(self):
        return self.price * self.quantity

# Usage
p = Product("Widget", 100, 5)
print(p.total_cost())  # 500

try:
    p.price = -50
except ValueError as e:
    print(e)  # price must be positive`,
              explanation: 'Descriptors allow you to define reusable behavior for attribute access (get, set, delete) across multiple classes.'
            },
            {
              title: '4. Context Managers as Classes',
              code: `class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None

    def __enter__(self):
        print(f"Opening {self.filename}...")
        self.file = open(self.filename, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_value, traceback):
        print(f"Closing {self.filename}...")
        if self.file:
            self.file.close()
        
        if exc_type:
            print(f"An error occurred: {exc_value}")
        
        # Return True to suppress exception, False to propagate
        return False

# Usage
try:
    with FileManager('test.txt', 'w') as f:
        f.write('Hello, World!')
        print("File written")
        # raise ValueError("Something went wrong")
except Exception as e:
    print(f"Caught exception: {e}")`,
              explanation: 'Implementing __enter__ and __exit__ allows classes to be used with the "with" statement for resource management.'
            }
          ],
          quiz: [
            {
              question: 'What is the Diamond Problem in inheritance?',
              options: ['When a class inherits from two classes that inherit from a common base', 'When a class has too many methods', 'When inheritance is too deep', 'When a class has no parent'],
              correctAnswer: 0,
              explanation: 'The Diamond Problem occurs in multiple inheritance when two parent classes inherit from the same grandparent, potentially causing ambiguity.'
            },
            {
              question: 'What does __slots__ do?',
              options: ['Creates a dictionary', 'Prevents creation of __dict__ and saves memory', 'Allows unlimited attributes', 'Speeds up method calls'],
              correctAnswer: 1,
              explanation: '__slots__ tells Python to allocate space for a fixed set of attributes, preventing the creation of __dict__ and saving memory.'
            },
            {
              question: 'What is MRO?',
              options: ['Method Random Order', 'Method Resolution Order', 'Memory Read Operation', 'Multiple Resolution Object'],
              correctAnswer: 1,
              explanation: 'Method Resolution Order (MRO) is the order in which Python searches for methods in a hierarchy of classes.'
            }
          ]
        }
      },
      {
        id: 'async-await',
        title: 'Async/Await & Concurrency',
        description: 'Master asynchronous programming for I/O-bound operations',
        difficulty: 'Advanced',
        estimatedTime: 80,
        prerequisites: ["multithreading"],
        content: {
          overview: `Asynchronous programming allows your program to perform other tasks while waiting for I/O operations (network requests, file operations, database queries). Python's async/await syntax makes concurrent programming more readable and efficient.

Key Concepts:

- async/await: Define and call asynchronous functions
- Event Loop: Manages execution of async tasks
- Coroutines: Functions that can pause and resume
- Tasks: Wrapped coroutines that run concurrently
- asyncio: Python's async programming library

When to Use:

Use async/await for I/O-bound operations (network, files, databases). For CPU-bound tasks, use multiprocessing instead.`,
          keyPoints: [
            'async def creates a coroutine function',
            'await pauses execution until the awaited task completes',
            'Event loop manages concurrent execution',
            'asyncio.gather() runs multiple tasks concurrently',
            'asyncio.create_task() schedules a coroutine to run',
            'Use for I/O-bound operations, not CPU-bound',
            'Async functions must be awaited or scheduled',
            'Libraries must support async (aiohttp, asyncpg, etc.)'
          ],
          useCases: [
            {
              title: 'Web Scraping',
              description: 'Fetch multiple URLs concurrently',
              example: 'Download 100 web pages in parallel instead of sequentially'
            },
            {
              title: 'API Requests',
              description: 'Make multiple API calls simultaneously',
              example: 'Fetch data from 10 different APIs at once'
            },
            {
              title: 'Database Queries',
              description: 'Run multiple queries concurrently',
              example: 'Query multiple tables in parallel with asyncpg'
            },
            {
              title: 'Real-time Applications',
              description: 'Handle multiple connections simultaneously',
              example: 'WebSocket server managing thousands of connections'
            }
          ],
          dos: [
            'Use async/await for I/O-bound operations',
            'Always await async functions',
            'Use asyncio.gather() to run tasks concurrently',
            'Handle exceptions in async code properly',
            'Use async context managers (async with)',
            'Use async libraries (aiohttp, not requests)'
          ],
          donts: [
            "Don't use async for CPU-bound tasks",
            "Don't block the event loop with synchronous code",
            "Don't forget to await async functions",
            "Don't mix sync and async code without care",
            "Don't use time.sleep() (use asyncio.sleep())",
            "Don't create too many concurrent tasks without limits"
          ],
          bestPractices: [
            'Use asyncio.run() to start the event loop',
            'Create tasks with asyncio.create_task() for concurrent execution',
            'Use asyncio.gather() to wait for multiple tasks',
            'Implement timeouts with asyncio.wait_for()',
            'Use semaphores to limit concurrent operations',
            'Handle cancellation with try/except asyncio.CancelledError',
            'Profile async code to ensure it\'s actually faster'
          ],
          codeExamples: [
            {
              title: 'Basic Async/Await',
              explanation: 'Define and call asynchronous functions. async def creates a coroutine, await pauses until completion.',
              code: `import asyncio
import time

# Synchronous version (slow)
def fetch_data_sync(n):
    print(f"Fetching data {n}...")
    time.sleep(2)  # Simulate I/O operation
    return f"Data {n}"

# Takes 6 seconds total (sequential)
start = time.time()
for i in range(3):
    result = fetch_data_sync(i)
    print(result)
print(f"Sync took: {time.time() - start:.2f}s")

# Asynchronous version (fast)
async def fetch_data_async(n):
    print(f"Fetching data {n}...")
    await asyncio.sleep(2)  # Simulate I/O operation (non-blocking)
    return f"Data {n}"

async def main():
    # Run tasks concurrently
    tasks = [fetch_data_async(i) for i in range(3)]
    results = await asyncio.gather(*tasks)
    for result in results:
        print(result)

# Takes ~2 seconds total (concurrent)
start = time.time()
asyncio.run(main())
print(f"Async took: {time.time() - start:.2f}s")

# Output shows all 3 tasks start immediately and finish together`,
              output: {
                description: 'Synchronous version takes 6 seconds (2s × 3 tasks sequentially). Async version takes ~2 seconds (all 3 tasks run concurrently). Demonstrates massive speedup for I/O-bound operations.'
              }
            },
            {
              title: 'Concurrent API Requests',
              explanation: 'Fetch multiple URLs concurrently. Much faster than sequential requests for I/O-bound operations.',
              code: `import asyncio
import time

# Simulated async HTTP request
async def fetch_url(url):
    print(f"Starting request to {url}")
    await asyncio.sleep(1)  # Simulate network delay
    print(f"Completed request to {url}")
    return f"Data from {url}"

async def fetch_all_urls(urls):
    # Method 1: Using gather
    tasks = [fetch_url(url) for url in urls]
    results = await asyncio.gather(*tasks)
    return results

async def main():
    urls = [
        'https://api.example.com/users',
        'https://api.example.com/posts',
        'https://api.example.com/comments',
        'https://api.example.com/photos',
        'https://api.example.com/albums'
    ]
    
    start = time.time()
    results = await fetch_all_urls(urls)
    elapsed = time.time() - start
    
    print(f"\\nFetched {len(results)} URLs in {elapsed:.2f}s")
    print("Sequential would take ~5s, concurrent takes ~1s")
    
    # Method 2: Using create_task for more control
    tasks = []
    for url in urls[:3]:
        task = asyncio.create_task(fetch_url(url))
        tasks.append(task)
    
    # Wait for all tasks
    completed = await asyncio.gather(*tasks)
    print(f"Completed {len(completed)} tasks")

asyncio.run(main())`,
              output: {
                description: 'All 5 requests start simultaneously and complete in ~1 second total instead of 5 seconds sequentially. Shows both asyncio.gather() and create_task() methods for concurrent execution.'
              }
            },
            {
              title: 'Error Handling & Timeouts',
              explanation: 'Handle errors and timeouts in async code. Use try/except and asyncio.wait_for() for robustness.',
              code: `import asyncio

async def unreliable_operation(n):
    await asyncio.sleep(n)
    if n == 2:
        raise ValueError(f"Operation {n} failed!")
    return f"Success {n}"

async def main():
    # Handle exceptions in gather
    print("1. Handling exceptions with return_exceptions=True")
    tasks = [unreliable_operation(i) for i in range(4)]
    results = await asyncio.gather(*tasks, return_exceptions=True)
    
    for i, result in enumerate(results):
        if isinstance(result, Exception):
            print(f"Task {i} failed: {result}")
        else:
            print(f"Task {i} succeeded: {result}")
    
    # Timeouts
    print("\\n2. Using timeouts")
    try:
        # This will timeout after 1 second
        result = await asyncio.wait_for(
            unreliable_operation(3),
            timeout=1.0
        )
        print(f"Result: {result}")
    except asyncio.TimeoutError:
        print("Operation timed out!")
    
    # Individual exception handling
    print("\\n3. Individual try/except")
    async def safe_operation(n):
        try:
            return await unreliable_operation(n)
        except ValueError as e:
            print(f"Caught error: {e}")
            return None
    
    tasks = [safe_operation(i) for i in range(4)]
    results = await asyncio.gather(*tasks)
    print(f"Results: {results}")

asyncio.run(main())`,
              output: {
                description: 'Shows three error handling patterns: return_exceptions=True in gather (returns exceptions in results), asyncio.wait_for() for timeouts, and wrapping coroutines in try/except. Essential for robust async code.'
              }
            },
            {
              title: 'Rate Limiting with Semaphores',
              explanation: 'Control concurrent operations with semaphores to avoid overwhelming resources (APIs, databases, network).',
              code: `import asyncio
import time

async def download_file(file_id, semaphore):
    # Semaphore ensures max N concurrent downloads
    async with semaphore:
        print(f"[{time.strftime('%H:%M:%S')}] Starting download {file_id}")
        await asyncio.sleep(2)  # Simulate download
        print(f"[{time.strftime('%H:%M:%S')}] Completed download {file_id}")
        return f"file_{file_id}.dat"

async def main():
    # Limit to 3 concurrent downloads
    semaphore = asyncio.Semaphore(3)
    
    # Try to download 10 files
    tasks = [
        download_file(i, semaphore)
        for i in range(10)
    ]
    
    start = time.time()
    results = await asyncio.gather(*tasks)
    elapsed = time.time() - start
    
    print(f"\\nDownloaded {len(results)} files in {elapsed:.2f}s")
    print("With limit of 3 concurrent, expect ~6-7 seconds")
    print("Without limit would be ~2 seconds but might overwhelm server")
    
    # Real-world example: API rate limiting
    async def api_call(endpoint, semaphore):
        async with semaphore:
            print(f"Calling {endpoint}")
            await asyncio.sleep(0.5)
            return {"data": f"from {endpoint}"}
    
    # Limit to 5 requests/second
    api_semaphore = asyncio.Semaphore(5)
    endpoints = [f"/api/resource/{i}" for i in range(20)]
    
    api_tasks = [api_call(ep, api_semaphore) for ep in endpoints]
    api_results = await asyncio.gather(*api_tasks)
    print(f"\\nCompleted {len(api_results)} API calls")

asyncio.run(main())`,
              output: {
                description: 'Semaphore limits concurrent operations. With limit=3, only 3 downloads run at once. As each completes, the next starts. Takes ~6-7 seconds for 10 files (vs ~2s unlimited or 20s sequential). Essential for respecting rate limits and avoiding resource exhaustion.'
              }
            }
          ],
          quiz: [
            {
              question: 'What is the main benefit of async/await?',
              options: [
                'Faster CPU-bound computations',
                'Efficient handling of I/O-bound operations by not blocking',
                'Automatic parallelization',
                'Reduced memory usage'
              ],
              correctAnswer: 1,
              explanation: 'Async/await allows the program to perform other tasks while waiting for I/O operations (network, disk, database) instead of blocking. It does not help with CPU-bound tasks.'
            },
            {
              question: 'What happens if you call an async function without await?',
              options: [
                'It runs synchronously',
                'It raises an error',
                'It returns a coroutine object that needs to be awaited',
                'It runs in the background automatically'
              ],
              correctAnswer: 2,
              explanation: 'Calling an async function without await returns a coroutine object. You must await it or schedule it with create_task() to actually execute it.'
            },
            {
              question: 'Which function runs multiple async tasks concurrently?',
              options: [
                'asyncio.wait()',
                'asyncio.gather()',
                'asyncio.run_all()',
                'asyncio.parallel()'
              ],
              correctAnswer: 1,
              explanation: 'asyncio.gather() takes multiple coroutines and runs them concurrently, returning their results in order when all complete.'
            },
            {
              question: 'Why should you use asyncio.sleep() instead of time.sleep() in async code?',
              options: [
                'It is faster',
                'time.sleep() blocks the entire event loop',
                'asyncio.sleep() is more accurate',
                'time.sleep() does not work in async functions'
              ],
              correctAnswer: 1,
              explanation: 'time.sleep() blocks the entire event loop, preventing other tasks from running. asyncio.sleep() yields control to the event loop, allowing other tasks to execute.'
            },
            {
              question: 'What does a Semaphore control in async code?',
              options: [
                'The number of event loops',
                'The maximum number of concurrent operations',
                'The execution order of tasks',
                'Memory allocation'
              ],
              correctAnswer: 1,
              explanation: 'A Semaphore limits the number of concurrent operations. Useful for rate limiting API calls, limiting database connections, or controlling resource usage.'
            }
          ]
        }
      },
      {
        id: 'context-managers',
        title: 'Context Managers',
        description: 'Master resource management with context managers',
        difficulty: 'Advanced',
        estimatedTime: 60,
        prerequisites: ["exception-handling"],
        content: {
          overview: `Context managers ensure resources are properly acquired and released, even if errors occur. They implement the "with" statement protocol using __enter__ and __exit__ methods or the contextlib module.

What They Solve:

- Automatic resource cleanup (files, locks, connections)
- Exception-safe resource handling
- Clean, readable resource management code

Two Ways to Create:

1. Class-based: Implement __enter__ and __exit__
2. Decorator-based: Use @contextmanager decorator`,
          keyPoints: [
            'Context managers guarantee cleanup even if exceptions occur',
            '__enter__ acquires the resource and returns it',
            '__exit__ releases the resource, receives exception info',
            '@contextmanager decorator simplifies creation',
            'Use "with" statement to invoke context managers',
            'Common for files, locks, database connections',
            'Can suppress exceptions by returning True from __exit__',
            'Supports async with async context managers'
          ],
          useCases: [
            {
              title: 'File Handling',
              description: 'Automatically close files even if errors occur',
              example: 'with open("file.txt") as f: ensures file closes'
            },
            {
              title: 'Database Connections',
              description: 'Commit transactions and close connections properly',
              example: 'with db.transaction(): commits on success, rollback on error'
            },
            {
              title: 'Thread Locks',
              description: 'Acquire and release locks safely',
              example: 'with lock: automatically releases lock'
            },
            {
              title: 'Temporary State',
              description: 'Change and restore state temporarily',
              example: 'with temp_directory(): creates and cleans up temp dir'
            }
          ],
          dos: [
            'Always use context managers for resource management',
            'Implement proper cleanup in __exit__',
            'Use contextlib for simple cases',
            'Handle exceptions appropriately in __exit__',
            'Document what resources are managed',
            'Test that cleanup happens on exceptions'
          ],
          donts: [
            "Don't forget to return the resource from __enter__",
            "Don't raise exceptions in __exit__ unless necessary",
            "Don't rely on __del__ for cleanup",
            "Don't leave resources open on exceptions",
            "Don't create context managers that do too much",
            "Don't suppress exceptions without good reason"
          ],
          bestPractices: [
            'Prefer context managers over try/finally',
            'Use @contextmanager for simple cases',
            'Return resource from __enter__ for "as" clause',
            '__exit__ should return False to propagate exceptions',
            'Support both sync and async when appropriate',
            'Make context managers reusable when possible',
            'Document the managed resource lifecycle'
          ],
          codeExamples: [
            {
              title: 'Class-based Context Manager',
              explanation: 'Implement __enter__ and __exit__ to create a context manager. __enter__ sets up resources, __exit__ cleans up.',
              code: `class DatabaseConnection:
    def __init__(self, host, database):
        self.host = host
        self.database = database
        self.connection = None
    
    def __enter__(self):
        print(f"Connecting to {self.database} on {self.host}")
        # Simulate connection
        self.connection = f"Connected to {self.database}"
        return self.connection
    
    def __exit__(self, exc_type, exc_value, traceback):
        print("Closing database connection")
        self.connection = None
        
        if exc_type is not None:
            print(f"Exception occurred: {exc_type.__name__}: {exc_value}")
            # Return False to propagate exception
            # Return True to suppress exception
        
        return False  # Propagate exceptions

# Usage
with DatabaseConnection('localhost', 'mydb') as conn:
    print(f"Using: {conn}")
    print("Performing database operations...")
    # Connection automatically closes when block ends

print("\\nWith exception:")
try:
    with DatabaseConnection('localhost', 'mydb') as conn:
        print(f"Using: {conn}")
        raise ValueError("Something went wrong!")
except ValueError as e:
    print(f"Caught: {e}")

print("Connection still closed properly!")`,
              output: {
                description: 'Shows context manager lifecycle: __enter__ runs at start of with block, __exit__ runs at end (even if exception occurs). Connection is guaranteed to close. __exit__ receives exception info and can handle or propagate it.'
              }
            },
            {
              title: '@contextmanager Decorator',
              explanation: 'Use @contextmanager for simpler context managers. Yield the resource, cleanup happens after yield.',
              code: `from contextlib import contextmanager
import time

@contextmanager
def timer(name):
    """Context manager to time code execution"""
    print(f"[{name}] Starting...")
    start = time.time()
    try:
        yield  # Code in 'with' block runs here
    finally:
        elapsed = time.time() - start
        print(f"[{name}] Finished in {elapsed:.3f}s")

# Usage
with timer("Database Query"):
    time.sleep(1)
    print("Querying database...")

with timer("API Request"):
    time.sleep(0.5)
    print("Calling API...")

# Yielding a value
@contextmanager
def temporary_directory():
    """Create and cleanup temporary directory"""
    import tempfile
    import shutil
    
    temp_dir = tempfile.mkdtemp()
    print(f"Created temp directory: {temp_dir}")
    try:
        yield temp_dir  # Provide directory path to caller
    finally:
        print(f"Cleaning up: {temp_dir}")
        shutil.rmtree(temp_dir, ignore_errors=True)

with temporary_directory() as temp_dir:
    print(f"Using temp dir: {temp_dir}")
    # Create files in temp_dir
    # All automatically cleaned up

# Error handling
@contextmanager
def error_handler(operation_name):
    """Catch and log errors"""
    try:
        yield
    except Exception as e:
        print(f"ERROR in {operation_name}: {e}")
        raise  # Re-raise after logging

with error_handler("File Processing"):
    # Your code here
    print("Processing files...")`,
              output: {
                description: '@contextmanager simplifies context manager creation. Code before yield is __enter__, code after yield (in finally) is __exit__. Timer measures execution time, temporary_directory creates and cleans up temp dir, error_handler catches and logs errors.'
              }
            },
            {
              title: 'Multiple Context Managers',
              explanation: 'Use multiple context managers in a single with statement for managing multiple resources.',
              code: `from contextlib import contextmanager

@contextmanager
def open_file(filename, mode):
    """Wrapper around file opening"""
    print(f"Opening {filename} in mode {mode}")
    f = open(filename, mode)
    try:
        yield f
    finally:
        print(f"Closing {filename}")
        f.close()

# Multiple context managers in one statement
print("1. Multiple managers:")
with open_file('input.txt', 'w') as infile, \\
     open_file('output.txt', 'w') as outfile:
    infile.write("Input data")
    outfile.write("Output data")
# Both files automatically closed

# Nested context managers
print("\\n2. Nested managers:")
with open_file('file1.txt', 'w') as f1:
    with open_file('file2.txt', 'w') as f2:
        f1.write("File 1")
        f2.write("File 2")

# Using contextlib.ExitStack for dynamic number of resources
from contextlib import ExitStack

print("\\n3. ExitStack for dynamic resources:")
files = ['file1.txt', 'file2.txt', 'file3.txt']

with ExitStack() as stack:
    # Open unknown number of files
    file_handles = [
        stack.enter_context(open_file(fname, 'w'))
        for fname in files
    ]
    
    for i, f in enumerate(file_handles):
        f.write(f"Content for file {i+1}")
    
    # All files automatically closed

# Real-world example: Database transaction
@contextmanager
def database_transaction(db_connection):
    """Ensure transaction commits or rolls back"""
    print("BEGIN TRANSACTION")
    try:
        yield db_connection
        print("COMMIT")
        # db_connection.commit()
    except Exception as e:
        print(f"ROLLBACK due to {e}")
        # db_connection.rollback()
        raise

# Simulate database work
class FakeDB:
    pass

db = FakeDB()
with database_transaction(db):
    print("INSERT INTO users ...")
    print("UPDATE orders ...")
    # Automatically commits`,
              output: {
                description: 'Shows multiple ways to use context managers together: comma-separated (manages multiple resources), nested (explicit control), and ExitStack (dynamic number of resources). Transaction example shows automatic commit/rollback pattern.'
              }
            },
            {
              title: 'Async Context Managers',
              explanation: 'Use async with for async context managers. Implement __aenter__ and __aexit__ or use @asynccontextmanager.',
              code: `import asyncio
from contextlib import asynccontextmanager

# Class-based async context manager
class AsyncDatabaseConnection:
    def __init__(self, connection_string):
        self.connection_string = connection_string
        self.connection = None
    
    async def __aenter__(self):
        print(f"Connecting to {self.connection_string}")
        await asyncio.sleep(0.5)  # Simulate async connection
        self.connection = f"Connected: {self.connection_string}"
        return self.connection
    
    async def __aexit__(self, exc_type, exc_value, traceback):
        print("Closing async connection")
        await asyncio.sleep(0.2)  # Simulate async cleanup
        self.connection = None
        return False

# Decorator-based async context manager
@asynccontextmanager
async def async_timer(name):
    """Async version of timer"""
    import time
    print(f"[{name}] Starting...")
    start = time.time()
    try:
        yield
    finally:
        elapsed = time.time() - start
        print(f"[{name}] Took {elapsed:.3f}s")

@asynccontextmanager
async def async_resource(resource_id):
    """Acquire and release async resource"""
    print(f"Acquiring resource {resource_id}")
    await asyncio.sleep(0.3)
    resource = f"Resource-{resource_id}"
    try:
        yield resource
    finally:
        print(f"Releasing resource {resource_id}")
        await asyncio.sleep(0.2)

async def main():
    # Using async context manager
    async with AsyncDatabaseConnection("postgresql://localhost/mydb") as conn:
        print(f"Using: {conn}")
        await asyncio.sleep(0.5)
    
    # Using async timer
    async with async_timer("API Call"):
        await asyncio.sleep(1)
        print("Fetching data...")
    
    # Multiple async resources
    async with async_resource(1) as r1, \\
               async_resource(2) as r2:
        print(f"Using {r1} and {r2}")
        await asyncio.sleep(0.5)

asyncio.run(main())`,
              output: {
                description: 'Async context managers use __aenter__ and __aexit__ (or @asynccontextmanager). Used with "async with" statement. Essential for async resources like database connections, HTTP sessions, or file operations. All cleanup is properly awaited.'
              }
            }
          ],
          quiz: [
            {
              question: 'What is the purpose of the __exit__ method in a context manager?',
              options: [
                'To create the resource',
                'To clean up the resource, even if an exception occurs',
                'To return the resource',
                'To handle user input'
              ],
              correctAnswer: 1,
              explanation: '__exit__ is always called when exiting the with block, even if an exception occurred. It receives exception information and can perform cleanup like closing files or releasing locks.'
            },
            {
              question: 'What does @contextmanager allow you to do?',
              options: [
                'Create async functions',
                'Create context managers using a generator function',
                'Decorate class methods',
                'Create static methods'
              ],
              correctAnswer: 1,
              explanation: '@contextmanager from contextlib lets you create context managers using a generator function. Code before yield is __enter__, code after yield (in finally) is __exit__.'
            },
            {
              question: 'What should __exit__ return to propagate exceptions?',
              options: [
                'True',
                'False',
                'None',
                'The exception'
              ],
              correctAnswer: 1,
              explanation: '__exit__ should return False (or None, which is falsy) to propagate exceptions. Returning True suppresses the exception, which should only be done when you want to handle it silently.'
            },
            {
              question: 'Which is better for managing multiple resources: try/finally or context managers?',
              options: [
                'try/finally',
                'Context managers',
                'Both are equal',
                'Neither'
              ],
              correctAnswer: 1,
              explanation: 'Context managers are better because they ensure cleanup happens even if you forget, reduce boilerplate code, and make intent clearer. try/finally requires manual cleanup code for each resource.'
            },
            {
              question: 'What methods do async context managers use?',
              options: [
                '__enter__ and __exit__',
                '__aenter__ and __aexit__',
                '__async_enter__ and __async_exit__',
                '__start__ and __stop__'
              ],
              correctAnswer: 1,
              explanation: 'Async context managers use __aenter__ and __aexit__ (with single "a" prefix). These are async methods that can use await, used with "async with" statement.'
            }
          ]
        }
      },
      {
        id: 'iterators-iterables',
        title: 'Iterators & Iterables',
        description: 'Master iteration protocols and create custom iterators',
        difficulty: 'Advanced',
        estimatedTime: 65,
        prerequisites: ["generators-iterators"],
        content: {
          overview: `Iterators and iterables are fundamental to Python's for loops, comprehensions, and many built-in functions. Understanding them allows you to create memory-efficient, custom iteration logic.

Key Distinctions:

- Iterable: Any object that can return an iterator (__iter__ method)
- Iterator: Object that produces values one at a time (__next__ method)
- Generator: Special iterator created with yield

When to Use:

- Processing large datasets that don't fit in memory
- Creating custom iteration logic
- Lazy evaluation for performance
- Infinite sequences`,
          keyPoints: [
            'Iterables have __iter__() returning an iterator',
            'Iterators have __next__() returning next value',
            'Iterators raise StopIteration when exhausted',
            'Generators are iterators created with yield',
            'iter() converts iterables to iterators',
            'Iterators can only be traversed once',
            'Iterables can be iterated multiple times',
            'Many built-ins accept iterables (sum, max, list, etc.)'
          ],
          useCases: [
            {
              title: 'Large File Processing',
              description: 'Read files line-by-line without loading entire file',
              example: 'Process 10GB log file with minimal memory'
            },
            {
              title: 'Database Result Sets',
              description: 'Fetch database records one at a time',
              example: 'Iterate through millions of database rows efficiently'
            },
            {
              title: 'Custom Data Structures',
              description: 'Make custom classes work with for loops',
              example: 'Tree traversal, linked list iteration, graph exploration'
            },
            {
              title: 'Infinite Sequences',
              description: 'Generate values on-demand indefinitely',
              example: 'Fibonacci numbers, timestamps, IDs'
            }
          ],
          dos: [
            'Implement __iter__ and __next__ for custom iterators',
            'Raise StopIteration when iteration completes',
            'Use generators for simple iteration logic',
            'Prefer iterators for memory-efficient processing',
            'Use itertools for advanced iteration patterns',
            'Make iterables reusable (return new iterator from __iter__)'
          ],
          donts: [
            "Don't forget to raise StopIteration",
            "Don't modify collection while iterating",
            "Don't reuse exhausted iterators",
            "Don't create iterators when lists would work fine",
            "Don't forget __iter__ returns self for iterators",
            "Don't use iterators for small datasets that fit in memory"
          ],
          bestPractices: [
            'Use generators (yield) instead of manual iterator classes when possible',
            'Implement __iter__ to return self for iterator objects',
            'Document if your iterator is single-use or reusable',
            'Use itertools for combining/chaining iterators',
            'Prefer iterators over loading all data into memory',
            'Use next() with default to handle StopIteration gracefully',
            'Make iterables reusable by creating new iterator each time'
          ],
          codeExamples: [
            {
              title: 'Iterator vs Iterable Basics',
              explanation: 'Understand the difference between iterables (have __iter__) and iterators (have __next__). Iterators are single-use.',
              code: `# Iterable: can be iterated multiple times
my_list = [1, 2, 3]
print("List is iterable:", hasattr(my_list, '__iter__'))

# First iteration
for num in my_list:
    print(num, end=' ')
print()

# Second iteration (works! lists are reusable)
for num in my_list:
    print(num, end=' ')
print("\\n")

# Iterator: single-use, traversed once
my_iter = iter(my_list)
print("Iterator:", my_iter)
print("Has __next__:", hasattr(my_iter, '__next__'))

# Manually call __next__
print(next(my_iter))  # 1
print(next(my_iter))  # 2
print(next(my_iter))  # 3

# Exhausted - raises StopIteration
try:
    print(next(my_iter))
except StopIteration:
    print("Iterator exhausted!")

# Cannot reuse exhausted iterator
print("Remaining items:", list(my_iter))  # []

# Create new iterator to iterate again
new_iter = iter(my_list)
print("New iterator:", list(new_iter))  # [1, 2, 3]`,
              output: {
                description: 'Shows iterable (list) can be iterated multiple times, but iterator is single-use. Once exhausted, iterator raises StopIteration and returns empty. Must create new iterator to iterate again.'
              }
            },
            {
              title: 'Custom Iterator Class',
              explanation: 'Create custom iterator by implementing __iter__ (returns self) and __next__ (returns next value or raises StopIteration).',
              code: `class CountDown:
    """Iterator that counts down from start to 0"""
    def __init__(self, start):
        self.current = start
    
    def __iter__(self):
        # Iterator returns itself
        return self
    
    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        
        self.current -= 1
        return self.current + 1

# Use custom iterator
countdown = CountDown(5)
print("Countdown:")
for num in countdown:
    print(num, end=' ')
print("\\n")

# Iterator is exhausted - cannot reuse
print("Reuse attempt:", list(countdown))  # []

# Create reusable iterable wrapper
class CountDownIterable:
    """Iterable that creates new CountDown iterator each time"""
    def __init__(self, start):
        self.start = start
    
    def __iter__(self):
        # Return NEW iterator each time
        return CountDown(self.start)

# Reusable iterable
reusable = CountDownIterable(3)

print("First iteration:", list(reusable))   # [3, 2, 1]
print("Second iteration:", list(reusable))  # [3, 2, 1]

# Fibonacci iterator
class Fibonacci:
    """Infinite Fibonacci sequence"""
    def __init__(self):
        self.a, self.b = 0, 1
    
    def __iter__(self):
        return self
    
    def __next__(self):
        result = self.a
        self.a, self.b = self.b, self.a + self.b
        return result

# Get first 10 Fibonacci numbers
fib = Fibonacci()
first_10 = []
for i, num in enumerate(fib):
    if i >= 10:
        break
    first_10.append(num)

print("First 10 Fibonacci:", first_10)`,
              output: {
                description: 'CountDown is single-use iterator. CountDownIterable is reusable (creates new iterator each time). Fibonacci demonstrates infinite iterator - must break manually or use islice(). Shows difference between iterator and iterable design.'
              }
            },
            {
              title: 'Generators - Simpler Iterators',
              explanation: 'Generators use yield to create iterators without manual __iter__/__next__ implementation. More concise and readable.',
              code: `# Generator function (uses yield)
def countdown(start):
    """Generator that counts down from start"""
    while start > 0:
        yield start
        start -= 1

# Use generator
for num in countdown(5):
    print(num, end=' ')
print("\\n")

# Generator is iterator
gen = countdown(3)
print("Type:", type(gen))
print("Next:", next(gen))  # 3
print("Next:", next(gen))  # 2
print("Remaining:", list(gen))  # [1]

# Fibonacci generator
def fibonacci():
    """Infinite Fibonacci generator"""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Use with itertools.islice for finite sequence
from itertools import islice
first_10 = list(islice(fibonacci(), 10))
print("First 10 Fibonacci:", first_10)

# Generator that processes large file
def read_large_file(filepath):
    """Memory-efficient file reader"""
    with open(filepath, 'r') as f:
        for line in f:
            yield line.strip()

# Simulated usage (file doesn't exist in demo)
# for line in read_large_file('huge_file.txt'):
#     process(line)  # Only one line in memory at a time

# Generator with state
def running_average():
    """Generator that yields running average"""
    total = 0
    count = 0
    while True:
        value = yield total / count if count > 0 else 0
        if value is not None:
            total += value
            count += 1

avg = running_average()
next(avg)  # Prime the generator
print("After 10:", avg.send(10))  # 10.0
print("After 20:", avg.send(20))  # 15.0
print("After 30:", avg.send(30))  # 20.0`,
              output: {
                description: 'Generators are simpler than iterator classes. countdown() generates values with yield. fibonacci() shows infinite generator with islice(). running_average() demonstrates bidirectional communication with send(). Generators maintain state between yields.'
              }
            },
            {
              title: 'Itertools - Advanced Iteration',
              explanation: 'itertools module provides powerful tools for combining, filtering, and transforming iterators efficiently.',
              code: `from itertools import (
    count, cycle, repeat,           # Infinite iterators
    chain, zip_longest, islice,     # Combinators
    accumulate, groupby, compress,  # Aggregators
    product, permutations, combinations  # Combinatorics
)

# Infinite iterators
print("1. Infinite Iterators:")
print("count(10, 2):", list(islice(count(10, 2), 5)))  # [10, 12, 14, 16, 18]
print("cycle('ABC'):", list(islice(cycle('ABC'), 7)))   # ['A','B','C','A','B','C','A']
print("repeat('X', 3):", list(repeat('X', 3)))          # ['X', 'X', 'X']

# Chain - combine multiple iterators
print("\\n2. Chaining:")
combined = chain([1, 2], [3, 4], [5])
print("chain([1,2], [3,4], [5]):", list(combined))  # [1, 2, 3, 4, 5]

# zip_longest - zip with padding
print("\\n3. Zip with padding:")
result = zip_longest([1, 2], ['a', 'b', 'c'], fillvalue='-')
print("zip_longest:", list(result))  # [(1,'a'), (2,'b'), ('-','c')]

# islice - slice an iterator
print("\\n4. Slicing iterators:")
print("islice(range(10), 2, 8, 2):", list(islice(range(10), 2, 8, 2)))  # [2, 4, 6]

# accumulate - running totals
print("\\n5. Accumulate (running sum):")
print("accumulate([1,2,3,4,5]):", list(accumulate([1,2,3,4,5])))  # [1, 3, 6, 10, 15]

# groupby - group consecutive items
print("\\n6. Group by:")
from itertools import groupby
data = [('A', 1), ('A', 2), ('B', 1), ('B', 2), ('C', 1)]
for key, group in groupby(data, key=lambda x: x[0]):
    print(f"  {key}: {list(group)}")

# compress - filter with selector
print("\\n7. Compress (filter):")
data = ['A', 'B', 'C', 'D', 'E']
selectors = [1, 0, 1, 0, 1]
print("compress:", list(compress(data, selectors)))  # ['A', 'C', 'E']

# Combinatorics
print("\\n8. Combinatorics:")
print("product('AB', '12'):", list(product('AB', '12')))  # Cartesian product
print("permutations('ABC', 2):", list(permutations('ABC', 2)))  # All 2-item arrangements
print("combinations('ABC', 2):", list(combinations('ABC', 2)))   # All 2-item combinations

# Real-world: Batch processing
def batch(iterable, n):
    """Batch items into groups of n"""
    from itertools import islice
    iterator = iter(iterable)
    while batch := list(islice(iterator, n)):
        yield batch

print("\\n9. Batching:")
for batch_items in batch(range(10), 3):
    print(f"  Process batch: {batch_items}")`,
              output: {
                description: 'Demonstrates itertools power: infinite iterators (count, cycle, repeat), combinators (chain, zip_longest, islice), aggregators (accumulate, groupby, compress), and combinatorics (product, permutations, combinations). Shows batch() utility for processing large datasets in chunks. All memory-efficient.'
              }
            }
          ],
          quiz: [
            {
              question: 'What is the difference between an iterable and an iterator?',
              options: [
                'No difference',
                'Iterable has __iter__, iterator has __next__',
                'Iterable is a list, iterator is a generator',
                'Iterators are faster'
              ],
              correctAnswer: 1,
              explanation: 'Iterables have __iter__() which returns an iterator. Iterators have __next__() which returns the next value. An iterator is also an iterable (its __iter__ returns self).'
            },
            {
              question: 'What does __iter__ return in an iterator class?',
              options: [
                'None',
                'The first element',
                'self',
                'A new iterator'
              ],
              correctAnswer: 2,
              explanation: 'In an iterator class, __iter__ should return self because the iterator is already an iterator. In an iterable class, __iter__ creates and returns a new iterator.'
            },
            {
              question: 'What happens when an iterator is exhausted?',
              options: [
                'It restarts from beginning',
                'It raises StopIteration',
                'It returns None',
                'It returns []'
              ],
              correctAnswer: 1,
              explanation: 'When __next__ has no more values to return, it raises StopIteration. This signals the end of iteration and is caught automatically by for loops.'
            },
            {
              question: 'Can you iterate over an exhausted iterator again?',
              options: [
                'Yes, it automatically resets',
                'No, iterators are single-use',
                'Only if you call reset()',
                'Yes, but slower'
              ],
              correctAnswer: 1,
              explanation: 'Iterators are single-use. Once exhausted, they remain exhausted. You must create a new iterator (by calling iter() on the original iterable) to iterate again.'
            },
            {
              question: 'What is the main advantage of generators over lists?',
              options: [
                'Faster execution',
                'Memory efficiency - values generated on-demand',
                'Easier syntax',
                'Better error handling'
              ],
              correctAnswer: 1,
              explanation: 'Generators produce values one at a time using yield, keeping only one value in memory at a time. Lists store all values in memory at once. This makes generators much more memory-efficient for large datasets.'
            }
          ]
        }
      },
      {
        id: 'metaclasses',
        title: 'Metaclasses',
        description: 'Master Python\'s class creation mechanism and metaprogramming',
        content: {
          overview: `Metaclasses are "classes of classes" - they define how classes behave. While rarely needed in everyday code, understanding metaclasses reveals Python's object model and enables powerful metaprogramming.

What Are Metaclasses?

- Classes are instances of metaclasses
- The default metaclass is \`type\`
- Metaclasses control class creation
- Used for frameworks, ORMs, validation, logging

Key Insight:

\`\`\`python
# Everything is an object
isinstance(5, int)          # True
isinstance(int, type)       # True
isinstance(type, type)      # True (type is its own metaclass!)
\`\`\`

When to Use:

Rarely! Use when you need to modify class creation itself (frameworks, ORMs, DSLs). For most cases, decorators, descriptors, or __init_subclass__ are simpler.`,
          keyPoints: [
            'type is the default metaclass for all classes',
            'Classes are instances of their metaclass',
            'Metaclasses control class creation via __new__ and __init__',
            '__init_subclass__ is simpler alternative for many use cases',
            'Metaclasses inherit from type',
            'Used in ORMs (SQLAlchemy), web frameworks (Django)',
            'Very powerful but complex - use sparingly',
            'Can validate class attributes at definition time'
          ],
          useCases: [
            {
              title: 'ORM Frameworks',
              description: 'Automatically register model classes',
              example: 'SQLAlchemy uses metaclasses to track database models'
            },
            {
              title: 'API Clients',
              description: 'Auto-generate methods from API spec',
              example: 'Create HTTP methods from API documentation'
            },
            {
              title: 'Singleton Pattern',
              description: 'Ensure only one instance of a class',
              example: 'Database connection, configuration manager'
            },
            {
              title: 'Validation',
              description: 'Validate class attributes at definition',
              example: 'Ensure required methods are implemented'
            }
          ],
          dos: [
            'Understand type() and how classes are created',
            'Use __init_subclass__ before metaclasses when possible',
            'Document metaclass behavior clearly',
            'Keep metaclasses simple and focused',
            'Use for framework-level code, not application code',
            'Test metaclass behavior thoroughly'
          ],
          donts: [
            "Don't use metaclasses when decorators would work",
            "Don't overcomplicate class hierarchies",
            "Don't use metaclasses for simple attribute validation",
            "Don't forget __init_subclass__ exists (simpler alternative)",
            "Don't create metaclasses without clear justification",
            "Don't use multiple metaclasses (conflicts are complex)"
          ],
          bestPractices: [
            'Prefer __init_subclass__ over metaclasses for validation',
            'Use class decorators for simple modifications',
            'Document why metaclass is necessary',
            'Inherit from type for custom metaclasses',
            'Override __new__ to modify class creation',
            'Use super() in metaclass methods',
            'Keep metaclass logic minimal and clear'
          ],
          codeExamples: [
            {
              title: 'Understanding type() - The Meta metaclass',
              explanation: 'type() is both a function (returns type of object) and the default metaclass (creates classes). All classes are instances of type.',
              code: `# type() as a function - returns type of object
print("Type of 5:", type(5))           # <class 'int'>
print("Type of 'hello':", type('hello'))  # <class 'str'>
print("Type of int:", type(int))       # <class 'type'>
print("Type of type:", type(type))     # <class 'type'> (type is its own metaclass!)

# type() as a metaclass - creates classes dynamically
# type(name, bases, dict) creates a class

# Traditional class definition
class Dog:
    def bark(self):
        return "Woof!"

# Equivalent using type()
DogDynamic = type(
    'DogDynamic',          # Class name
    (),                    # Base classes (empty tuple = no bases)
    {                      # Class dictionary
        'bark': lambda self: "Woof!"
    }
)

dog1 = Dog()
dog2 = DogDynamic()
print("dog1.bark():", dog1.bark())
print("dog2.bark():", dog2.bark())
print("Same behavior?", dog1.bark() == dog2.bark())

# Creating class with inheritance
Animal = type('Animal', (), {'species': 'Unknown'})
Cat = type('Cat', (Animal,), {'meow': lambda self: "Meow!"})

cat = Cat()
print("cat.species:", cat.species)
print("cat.meow():", cat.meow())

# Verify metaclass
print("\\nMetaclass verification:")
print("Dog's metaclass:", type(Dog))            # <class 'type'>
print("DogDynamic's metaclass:", type(DogDynamic))  # <class 'type'>
print("isinstance(Dog, type):", isinstance(Dog, type))  # True

# Class hierarchy
print("\\nClass hierarchy:")
print("5 -> int -> type")
print("  isinstance(5, int):", isinstance(5, int))
print("  isinstance(int, type):", isinstance(int, type))`,
              output: {
                description: 'Shows type() has dual role: returns type of objects, and creates classes dynamically. All classes are instances of type. Dog and DogDynamic behave identically. Demonstrates class-instance-metaclass relationship: objects are instances of classes, classes are instances of type.'
              }
            },
            {
              title: 'Custom Metaclass Basics',
              explanation: 'Create custom metaclass by inheriting from type. Override __new__ to modify class creation. Metaclass __new__ runs when class is defined, not when instances are created.',
              code: `# Custom metaclass
class Meta(type):
    """Metaclass that prints when class is created"""
    
    def __new__(mcs, name, bases, dct):
        print(f"Creating class: {name}")
        print(f"  Bases: {bases}")
        print(f"  Attributes: {list(dct.keys())}")
        
        # Create the class
        cls = super().__new__(mcs, name, bases, dct)
        
        # Add timestamp to class
        from datetime import datetime
        cls._created_at = datetime.now()
        
        return cls

# Use metaclass with metaclass=Meta
print("Defining MyClass...")
class MyClass(metaclass=Meta):
    x = 10
    
    def method(self):
        return "Hello"

print("\\nClass created!")
print("MyClass._created_at:", MyClass._created_at)

# Creating instance doesn't trigger metaclass
print("\\nCreating instance...")
obj = MyClass()
print("Instance created (no metaclass output)")

# Singleton pattern with metaclass
class Singleton(type):
    """Metaclass that creates singleton classes"""
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        # __call__ runs when creating instance: MyClass()
        if cls not in cls._instances:
            print(f"Creating first instance of {cls.__name__}")
            instance = super().__call__(*args, **kwargs)
            cls._instances[cls] = instance
        else:
            print(f"Returning existing instance of {cls.__name__}")
        return cls._instances[cls]

class Database(metaclass=Singleton):
    def __init__(self, host):
        print(f"Initializing Database with host: {host}")
        self.host = host

print("\\nSingleton demonstration:")
db1 = Database("localhost")
print("db1.host:", db1.host)

db2 = Database("other-host")  # Ignored! Returns db1
print("db2.host:", db2.host)
print("Same instance?", db1 is db2)  # True`,
              output: {
                description: 'Custom Meta metaclass runs __new__ when class is defined (not when instances created). Adds _created_at timestamp to class. Singleton metaclass uses __call__ to ensure only one instance exists, regardless of how many times you call Database(). Both db1 and db2 refer to same object.'
              }
            },
            {
              title: 'Metaclass for Validation',
              explanation: 'Use metaclasses to enforce rules at class definition time. Validates that required methods are implemented.',
              code: `class InterfaceEnforcer(type):
    """Metaclass that enforces required methods"""
    
    def __new__(mcs, name, bases, dct):
        # Skip validation for the base interface class itself
        if name == 'Interface':
            return super().__new__(mcs, name, bases, dct)
        
        # Check if required_methods is defined
        required = dct.get('required_methods', [])
        
        # Validate all required methods are implemented
        missing = []
        for method in required:
            if method not in dct:
                # Check if inherited from base class
                found = any(hasattr(base, method) for base in bases)
                if not found:
                    missing.append(method)
        
        if missing:
            raise TypeError(
                f"Class {name} missing required methods: {missing}"
            )
        
        return super().__new__(mcs, name, bases, dct)

# Base interface class
class Interface(metaclass=InterfaceEnforcer):
    required_methods = []

# Define an interface
class PaymentProcessor(Interface):
    required_methods = ['process_payment', 'refund']

# This works - all methods implemented
class StripeProcessor(PaymentProcessor):
    def process_payment(self, amount):
        return f"Processing {amount} via Stripe"
    
    def refund(self, transaction_id):
        return f"Refunding {transaction_id}"

processor = StripeProcessor()
print(processor.process_payment(100))

# This FAILS at class definition time
print("\\nTrying to create incomplete class...")
try:
    class IncompleteProcessor(PaymentProcessor):
        def process_payment(self, amount):
            return f"Processing {amount}"
        # Missing refund() method!
except TypeError as e:
    print(f"Error: {e}")

# Attribute validation
class ValidatedMeta(type):
    """Validates class attributes"""
    
    def __new__(mcs, name, bases, dct):
        # Ensure all attributes are uppercase
        for attr_name in dct:
            if not attr_name.startswith('_'):  # Skip private/magic
                if not attr_name.isupper():
                    raise ValueError(
                        f"Attribute {attr_name} must be UPPERCASE"
                    )
        
        return super().__new__(mcs, name, bases, dct)

# This works
class Constants(metaclass=ValidatedMeta):
    MAX_SIZE = 100
    MIN_SIZE = 10

print("\\nConstants.MAX_SIZE:", Constants.MAX_SIZE)

# This fails
try:
    class BadConstants(metaclass=ValidatedMeta):
        MaxSize = 100  # Not uppercase!
except ValueError as e:
    print(f"Validation error: {e}")`,
              output: {
                description: 'InterfaceEnforcer metaclass validates required methods at class definition. StripeProcessor works (has all methods), IncompleteProcessor fails immediately (missing refund). ValidatedMeta ensures attribute naming conventions. Errors happen at class definition, not runtime - catching bugs early.'
              }
            },
            {
              title: '__init_subclass__ - Simpler Alternative',
              explanation: '__init_subclass__ is simpler than metaclasses for many use cases. Runs when subclass is created. Use this instead of metaclasses when possible.',
              code: `# Using __init_subclass__ instead of metaclass
class Plugin:
    """Base class that auto-registers plugins"""
    plugins = {}
    
    def __init_subclass__(cls, plugin_name=None, **kwargs):
        """Called when Plugin is subclassed"""
        super().__init_subclass__(**kwargs)
        
        # Auto-register plugin
        if plugin_name:
            cls.plugins[plugin_name] = cls
            print(f"Registered plugin: {plugin_name}")

# Create plugins (auto-registered)
class ImagePlugin(Plugin, plugin_name='image'):
    def process(self, data):
        return f"Processing image: {data}"

class VideoPlugin(Plugin, plugin_name='video'):
    def process(self, data):
        return f"Processing video: {data}"

# Access registered plugins
print("\\nAvailable plugins:", list(Plugin.plugins.keys()))

# Use plugin dynamically
plugin = Plugin.plugins['image']()
print(plugin.process("photo.jpg"))

# Validation with __init_subclass__
class Validated:
    """Base class that validates subclass attributes"""
    
    def __init_subclass__(cls, required_attrs=None, **kwargs):
        super().__init_subclass__(**kwargs)
        
        if required_attrs:
            missing = [attr for attr in required_attrs if not hasattr(cls, attr)]
            if missing:
                raise TypeError(f"{cls.__name__} missing: {missing}")

# This works
class User(Validated, required_attrs=['username', 'email']):
    username = None
    email = None

print("\\nUser class created successfully")

# This fails
try:
    class IncompleteUser(Validated, required_attrs=['username', 'email']):
        username = None
        # Missing email!
except TypeError as e:
    print(f"Error: {e}")

# Comparison: Metaclass vs __init_subclass__
print("\\nWhen to use which?")
print("✓ Use __init_subclass__: validation, registration, simple hooks")
print("✓ Use metaclasses: modify class structure, complex class creation")
print("✓ Prefer __init_subclass__ (simpler, more readable)")

# __init_subclass__ can accept parameters
class Configurable:
    def __init_subclass__(cls, config=None, **kwargs):
        super().__init_subclass__(**kwargs)
        cls.config = config or {}
        print(f"{cls.__name__} configured with: {cls.config}")

class Service(Configurable, config={'timeout': 30, 'retries': 3}):
    pass

print("Service.config:", Service.config)`,
              output: {
                description: '__init_subclass__ is cleaner than metaclasses for common patterns. Plugin system auto-registers subclasses. Validated ensures required attributes. Accepts parameters like metaclasses but with simpler syntax. Prefer this over metaclasses when possible - easier to understand and maintain.'
              }
            }
          ],
          quiz: [
            {
              question: 'What is the default metaclass for all classes in Python?',
              options: [
                'object',
                'type',
                'class',
                'Meta'
              ],
              correctAnswer: 1,
              explanation: 'type is the default metaclass. All classes are instances of type unless you specify a custom metaclass.'
            },
            {
              question: 'When does metaclass __new__ execute?',
              options: [
                'When creating an instance',
                'When defining the class',
                'When calling a method',
                'When importing the module'
              ],
              correctAnswer: 1,
              explanation: 'Metaclass __new__ runs when the class is defined (at class definition time), not when instances are created. This allows metaclasses to modify the class itself.'
            },
            {
              question: 'What is a simpler alternative to metaclasses for validation?',
              options: [
                '__init__',
                '__new__',
                '__init_subclass__',
                'decorators'
              ],
              correctAnswer: 2,
              explanation: '__init_subclass__ provides a simpler way to hook into subclass creation without the complexity of metaclasses. Use it for validation, registration, and simple class modifications.'
            },
            {
              question: 'Can a class have multiple metaclasses?',
              options: [
                'Yes, any number',
                'Yes, up to two',
                'No, only one metaclass',
                'Only if they are related'
              ],
              correctAnswer: 2,
              explanation: 'A class can only have one metaclass. If you try to inherit from classes with different metaclasses, you get a metaclass conflict error.'
            },
            {
              question: 'What is the main use case for metaclasses?',
              options: [
                'Making code faster',
                'Framework-level code that modifies class creation',
                'Creating singleton objects',
                'Adding methods to instances'
              ],
              correctAnswer: 1,
              explanation: 'Metaclasses are mainly used in framework-level code (ORMs like SQLAlchemy, web frameworks like Django) where you need to modify how classes are created. For application code, simpler alternatives usually suffice.'
            }
          ]
        }
      }
    ]
  };
