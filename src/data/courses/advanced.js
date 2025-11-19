export const advanced = {
    topics: [
      {
        id: 'exception-handling',
        title: 'Exception Handling Mastery',
        description: 'Master error handling and exception management',
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
              code: `# Basic try/except
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print("Result:", result)
except ValueError:
    print("Invalid input! Please enter a valid number.")
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Catching multiple exceptions
try:
    value = int("abc")
except (ValueError, TypeError) as e:
    print("Error:", e)

# Generic exception catch (use sparingly)
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
      }
    ]
  };
