export const learningPaths = [
  {
    id: 'beginner',
    title: 'Python Foundations',
    description: 'Start your Python journey with fundamental concepts',
    level: 'Beginner',
    color: '#4caf50',
    icon: '🌱',
    estimatedTime: '4-6 weeks',
  },
  {
    id: 'intermediate',
    title: 'Python Essentials',
    description: 'Master essential Python programming skills',
    level: 'Intermediate',
    color: '#2196f3',
    icon: '🚀',
    estimatedTime: '6-8 weeks',
  },
  {
    id: 'advanced',
    title: 'Python Mastery',
    description: 'Dive deep into advanced Python concepts',
    level: 'Advanced',
    color: '#ff9800',
    icon: '⚡',
    estimatedTime: '8-10 weeks',
  },
  {
    id: 'professional',
    title: 'Python Expert',
    description: 'Professional-level Python development skills',
    level: 'Professional',
    color: '#9c27b0',
    icon: '👑',
    estimatedTime: '10-12 weeks',
  },
];

export const courseData = {
  beginner: {
    topics: [
      {
        id: 'intro-python',
        title: 'Introduction to Python',
        description: 'Understanding what Python is and why it\'s popular',
        content: {
          overview: 'Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python emphasizes code readability and allows programmers to express concepts in fewer lines of code.',
          keyPoints: [
            'Python is interpreted - no compilation needed',
            'Dynamically typed - no need to declare variable types',
            'Cross-platform - runs on Windows, Mac, Linux',
            'Huge standard library and ecosystem',
            'Used in web development, data science, AI, automation, and more'
          ],
          useCases: [
            {
              title: 'Web Development',
              description: 'Build websites and web applications using Django, Flask, FastAPI',
              example: 'Instagram, Spotify, and Pinterest use Python'
            },
            {
              title: 'Data Science & AI',
              description: 'Analyze data, create visualizations, build machine learning models',
              example: 'Pandas, NumPy, TensorFlow, PyTorch libraries'
            },
            {
              title: 'Automation & Scripting',
              description: 'Automate repetitive tasks, system administration',
              example: 'File management, web scraping, testing automation'
            },
            {
              title: 'Game Development',
              description: 'Create games using Pygame library',
              example: 'Simple 2D games and prototypes'
            }
          ],
          dos: [
            'Follow PEP 8 style guide for readable code',
            'Use meaningful variable and function names',
            'Write comments to explain complex logic',
            'Use virtual environments for project dependencies',
            'Test your code regularly'
          ],
          donts: [
            'Don\'t use single letter variable names (except in loops)',
            'Don\'t ignore errors and exceptions',
            'Don\'t mix tabs and spaces for indentation',
            'Don\'t write functions that do too many things',
            'Don\'t hardcode values that might change'
          ],
          bestPractices: [
            'Use 4 spaces for indentation (not tabs)',
            'Keep lines under 79 characters when possible',
            'Use docstrings to document functions and classes',
            'Import modules at the top of the file',
            'Use version control (Git) for your projects'
          ],
          codeExamples: [
            {
              title: 'Your First Python Program',
              code: `# This is a comment - Python ignores this line
print("Hello, World!")  # Output: Hello, World!

# Multi-line strings
message = """
This is a multi-line string.
You can write multiple lines here.
"""
print(message)`,
              explanation: 'The print() function displays output. Use # for single-line comments and triple quotes for multi-line strings.'
            }
          ]
        },
        quiz: [
          {
            question: 'What type of programming language is Python?',
            options: ['Compiled', 'Interpreted', 'Assembly', 'Machine code'],
            correctAnswer: 1,
            explanation: 'Python is an interpreted language, meaning code is executed line by line without prior compilation.'
          },
          {
            question: 'Which symbol is used for single-line comments in Python?',
            options: ['//', '/*', '#', '<!--'],
            correctAnswer: 2,
            explanation: 'The # symbol is used for single-line comments in Python.'
          },
          {
            question: 'What is the recommended indentation in Python?',
            options: ['2 spaces', '4 spaces', '1 tab', 'Any amount'],
            correctAnswer: 1,
            explanation: 'PEP 8 recommends using 4 spaces for indentation.'
          }
        ]
      },
      {
        id: 'variables-datatypes',
        title: 'Variables and Data Types',
        description: 'Learn to store and manipulate different types of data',
        content: {
          overview: 'Variables are containers for storing data values. Python has various built-in data types including numbers, strings, booleans, lists, tuples, dictionaries, and sets. Understanding data types is fundamental to writing effective Python code.',
          keyPoints: [
            'Variables don\'t need explicit declaration',
            'Variable names are case-sensitive',
            'Python determines type automatically (dynamic typing)',
            'You can change a variable\'s type after it\'s set',
            'Use type() function to check a variable\'s type'
          ],
          useCases: [
            {
              title: 'Storing User Information',
              description: 'Store names, ages, email addresses',
              example: 'name = "John", age = 25, email = "john@example.com"'
            },
            {
              title: 'Mathematical Calculations',
              description: 'Perform arithmetic operations',
              example: 'price = 100, tax = 0.15, total = price * (1 + tax)'
            },
            {
              title: 'Boolean Logic',
              description: 'Control program flow with true/false values',
              example: 'is_logged_in = True, has_permission = False'
            },
            {
              title: 'Text Processing',
              description: 'Manipulate strings for various applications',
              example: 'Processing user input, formatting output'
            }
          ],
          dos: [
            'Use descriptive variable names (user_age instead of x)',
            'Follow naming conventions (lowercase with underscores)',
            'Initialize variables before using them',
            'Use constants in UPPERCASE (MAX_SIZE = 100)',
            'Choose appropriate data types for your data'
          ],
          donts: [
            'Don\'t use Python keywords as variable names (if, for, while)',
            'Don\'t start variable names with numbers',
            'Don\'t use spaces in variable names',
            'Don\'t reuse variable names for different purposes',
            'Don\'t ignore type compatibility in operations'
          ],
          bestPractices: [
            'Use meaningful names that describe the data',
            'Keep variable scope as small as possible',
            'Group related variables together',
            'Use type hints for better code documentation',
            'Validate input data before assigning to variables'
          ],
          codeExamples: [
            {
              title: 'Basic Data Types',
              code: `# Integer (whole numbers)
age = 25
year = 2024

# Float (decimal numbers)
price = 19.99
temperature = -5.5

# String (text)
name = "Alice"
message = 'Hello, World!'

# Boolean (True/False)
is_student = True
has_license = False

# Check type
print(type(age))        # <class 'int'>
print(type(price))      # <class 'float'>
print(type(name))       # <class 'str'>
print(type(is_student)) # <class 'bool'>`,
              explanation: 'Python has four primitive data types: int, float, str, and bool. The type() function shows the type of any variable.'
            },
            {
              title: 'Type Conversion',
              code: `# Converting between types
age_str = "25"
age_int = int(age_str)      # String to integer
print(age_int + 5)          # Output: 30

price = 19.99
price_int = int(price)      # Float to integer (19)
price_str = str(price)      # Float to string ("19.99")

# Be careful with conversions
number = "25.5"
# int(number)  # ERROR! Can't convert float string directly
number_int = int(float(number))  # Correct: 25

# Boolean conversions
bool(0)        # False
bool(1)        # True
bool("")       # False
bool("Hello")  # True`,
              explanation: 'Use int(), float(), str(), and bool() functions to convert between types. Some conversions may lose precision or fail.'
            },
            {
              title: 'Multiple Assignment',
              code: `# Assign multiple variables at once
x, y, z = 10, 20, 30
print(x, y, z)  # Output: 10 20 30

# Assign same value to multiple variables
a = b = c = 100
print(a, b, c)  # Output: 100 100 100

# Swap variables
x, y = 5, 10
x, y = y, x  # Swap
print(x, y)  # Output: 10 5

# Unpacking
name, age, city = ["Alice", 25, "NY"]
print(name)  # Output: Alice`,
              explanation: 'Python allows elegant multiple assignments and swapping without temporary variables.'
            }
          ]
        },
        quiz: [
          {
            question: 'Which of the following is a valid variable name?',
            options: ['2name', 'user-name', 'user_name', 'for'],
            correctAnswer: 2,
            explanation: 'user_name is valid. Variable names cannot start with numbers, contain hyphens, or use Python keywords.'
          },
          {
            question: 'What is the result of int("3.14")?',
            options: ['3', '3.14', 'Error', '4'],
            correctAnswer: 2,
            explanation: 'Converting a float string directly to int causes an error. First convert to float, then to int.'
          },
          {
            question: 'What does bool("") return?',
            options: ['True', 'False', 'None', 'Error'],
            correctAnswer: 1,
            explanation: 'Empty strings are considered False in Python. Non-empty strings are True.'
          },
          {
            question: 'What type is the result of 5 / 2?',
            options: ['int', 'float', 'string', 'boolean'],
            correctAnswer: 1,
            explanation: 'Division (/) always returns a float in Python 3, even if dividing evenly. Use // for integer division.'
          }
        ]
      },
      {
        id: 'operators',
        title: 'Operators',
        description: 'Perform operations and comparisons',
        content: {
          overview: 'Operators are symbols that perform operations on variables and values. Python supports arithmetic, comparison, logical, assignment, and other operators. Understanding operators is essential for performing calculations and making decisions in your code.',
          keyPoints: [
            'Arithmetic operators: +, -, *, /, //, %, **',
            'Comparison operators: ==, !=, >, <, >=, <=',
            'Logical operators: and, or, not',
            'Assignment operators: =, +=, -=, *=, /=',
            'Operator precedence follows mathematical rules'
          ],
          useCases: [
            {
              title: 'Mathematical Calculations',
              description: 'Calculate totals, averages, percentages',
              example: 'total = price * quantity; average = sum / count'
            },
            {
              title: 'Conditional Logic',
              description: 'Make decisions based on conditions',
              example: 'if age >= 18 and has_id: grant_access()'
            },
            {
              title: 'String Operations',
              description: 'Concatenate and repeat strings',
              example: 'full_name = first + " " + last; line = "=" * 50'
            },
            {
              title: 'Membership Testing',
              description: 'Check if value exists in collection',
              example: 'if "admin" in user_roles: show_admin_panel()'
            }
          ],
          dos: [
            'Use parentheses to clarify complex expressions',
            'Use // for integer division when you need whole numbers',
            'Use ** for exponentiation instead of pow()',
            'Chain comparisons (x < y < z) for readability',
            'Use += and similar operators for concise updates'
          ],
          donts: [
            'Don\'t compare floats with == (use math.isclose())',
            'Don\'t use = when you mean == in conditions',
            'Don\'t chain assignments with operators (x = y += 1)',
            'Don\'t forget operator precedence (* before +)',
            'Don\'t use "is" for value comparison (use ==)'
          ],
          bestPractices: [
            'Use meaningful spacing around operators for readability',
            'Break complex expressions into smaller parts',
            'Use comparison chaining when appropriate',
            'Prefer "is None" over "== None" for None checks',
            'Use descriptive variable names in boolean expressions'
          ],
          codeExamples: [
            {
              title: 'Arithmetic Operators',
              code: `# Basic arithmetic
x = 10
y = 3

print(x + y)   # Addition: 13
print(x - y)   # Subtraction: 7
print(x * y)   # Multiplication: 30
print(x / y)   # Division: 3.333...
print(x // y)  # Floor division: 3
print(x % y)   # Modulus (remainder): 1
print(x ** y)  # Exponentiation: 1000

# Order of operations (PEMDAS)
result = 2 + 3 * 4    # 14 (not 20)
result = (2 + 3) * 4  # 20 (parentheses first)

# Practical example
price = 100
tax_rate = 0.08
total = price * (1 + tax_rate)  # 108.0`,
              explanation: 'Python follows standard mathematical operator precedence. Use parentheses to control order of operations.'
            },
            {
              title: 'Comparison Operators',
              code: `# Comparison operators return True or False
x = 10
y = 5

print(x == y)   # Equal to: False
print(x != y)   # Not equal to: True
print(x > y)    # Greater than: True
print(x < y)    # Less than: False
print(x >= 10)  # Greater or equal: True
print(x <= 9)   # Less or equal: False

# Chaining comparisons
age = 25
print(18 <= age < 65)  # True (adult working age)

# String comparison (lexicographic)
print("apple" < "banana")  # True
print("Python" == "python") # False (case-sensitive)

# Practical example
user_age = 20
if user_age >= 18:
    print("Adult")`,
              explanation: 'Comparison operators compare values and return boolean results. Python allows chaining comparisons elegantly.'
            },
            {
              title: 'Logical Operators',
              code: `# AND - both conditions must be True
age = 25
has_license = True
print(age >= 18 and has_license)  # True

# OR - at least one condition must be True
is_weekend = True
is_holiday = False
print(is_weekend or is_holiday)  # True

# NOT - inverts the boolean value
is_raining = False
print(not is_raining)  # True

# Combined logical expressions
temperature = 28
is_sunny = True
good_beach_day = (temperature > 25 and is_sunny 
                  and not is_raining)

# Short-circuit evaluation
x = 5
# Second part not evaluated if first is False
if x > 10 and expensive_function():
    pass`,
              explanation: 'Logical operators combine boolean expressions. Python uses short-circuit evaluation for efficiency.'
            },
            {
              title: 'Assignment and Identity Operators',
              code: `# Assignment operators
x = 10
x += 5   # Same as: x = x + 5 (15)
x -= 3   # Same as: x = x - 3 (12)
x *= 2   # Same as: x = x * 2 (24)
x /= 4   # Same as: x = x / 4 (6.0)
x //= 2  # Same as: x = x // 2 (3.0)
x %= 2   # Same as: x = x % 2 (1.0)

# Identity operators (is, is not)
x = [1, 2, 3]
y = [1, 2, 3]
z = x

print(x == y)   # True (same content)
print(x is y)   # False (different objects)
print(x is z)   # True (same object)
print(x is not y)  # True

# Use 'is' only for None, True, False
value = None
if value is None:  # Correct
    print("No value")`,
              explanation: 'Assignment operators provide shortcuts. Use "is" for identity (same object), "==" for equality (same value).'
            },
            {
              title: 'Membership and Other Operators',
              code: `# Membership operators (in, not in)
fruits = ["apple", "banana", "orange"]
print("apple" in fruits)      # True
print("grape" not in fruits)  # True

text = "Hello, World!"
print("World" in text)  # True

# Practical uses
user_roles = ["admin", "editor"]
if "admin" in user_roles:
    print("Admin access granted")

# String concatenation and repetition
greeting = "Hello" + " " + "World"  # "Hello World"
line = "=" * 50  # 50 equal signs
border = "-" * 20

# Ternary operator (conditional expression)
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # "Adult"

# One-liner for max/min
a, b = 5, 10
maximum = a if a > b else b`,
              explanation: 'Membership operators check for presence in sequences. The ternary operator provides concise conditional assignment.'
            }
          ]
        },
        quiz: [
          {
            question: 'What is the result of 17 // 5?',
            options: ['3.4', '3', '4', '2'],
            correctAnswer: 1,
            explanation: 'The // operator performs floor division, returning only the integer part: 17 // 5 = 3.'
          },
          {
            question: 'What does "Python" in "I love Python" return?',
            options: ['True', 'False', 'Error', 'None'],
            correctAnswer: 0,
            explanation: 'The "in" operator checks if a substring exists in a string and returns True.'
          },
          {
            question: 'What is the result of True and False or True?',
            options: ['True', 'False', 'Error', 'None'],
            correctAnswer: 0,
            explanation: '"and" is evaluated first: True and False = False, then False or True = True.'
          },
          {
            question: 'Which is correct for checking if x is None?',
            options: ['x == None', 'x is None', 'x === None', 'Both A and B'],
            correctAnswer: 1,
            explanation: 'Use "is None" (identity check) rather than "== None" as per Python best practices.'
          }
        ]
      },
      
      {
        id: 'installing-python',
        title: 'Installing Python',
        description: 'Learn how to install Python on different operating systems',
        content: {
          overview: 'Python installation is the first step in your programming journey. Python is available for Windows, macOS, and Linux. Understanding proper installation ensures you have the right environment for development.',
          keyPoints: [
            'Python can be downloaded from python.org',
            'Windows: Use the official installer with "Add to PATH" option',
            'macOS: Can use Homebrew or official installer',
            'Linux: Usually pre-installed, can use package managers',
            'Verify installation using python --version command'
          ],
          useCases: [
            {
              title: 'Windows Installation',
              description: 'Install Python on Windows systems',
              example: 'Download from python.org, run installer, check "Add Python to PATH"'
            },
            {
              title: 'macOS Installation',
              description: 'Install using Homebrew or official installer',
              example: 'brew install python3 or download from python.org'
            },
            {
              title: 'Development Environment',
              description: 'Set up IDE or code editor',
              example: 'VS Code, PyCharm, Jupyter Notebook'
            },
            {
              title: 'Virtual Environments',
              description: 'Isolate project dependencies',
              example: 'python -m venv myenv'
            }
          ],
          dos: [
            'Always add Python to system PATH during installation',
            'Verify installation immediately after installing',
            'Install pip (Python package manager) if not included',
            'Consider using virtual environments for projects',
            'Keep Python updated to latest stable version'
          ],
          donts: [
            'Don\'t install multiple Python versions without version managers',
            'Don\'t skip adding to PATH on Windows',
            'Don\'t ignore security warnings during installation',
            'Don\'t install packages globally without virtual environments',
            'Don\'t use Python 2.x for new projects (it\'s deprecated)'
          ],
          bestPractices: [
            'Use version managers like pyenv for multiple Python versions',
            'Create virtual environments for each project',
            'Document Python version requirements in README',
            'Use requirements.txt for package dependencies',
            'Regularly update pip: python -m pip install --upgrade pip'
          ],
          codeExamples: [
            {
              title: 'Verify Python Installation',
              code: `# Check Python version
python --version
# or
python3 --version

# Check pip installation
pip --version
# or
pip3 --version

# Python interactive shell
python
>>> print("Hello, Python!")
Hello, Python!
>>> exit()`,
              explanation: 'Use command line to verify Python and pip are correctly installed'
            },
            {
              title: 'Create Virtual Environment',
              code: `# Create virtual environment
python -m venv myproject_env

# Activate on Windows
myproject_env\\Scripts\\activate

# Activate on macOS/Linux
source myproject_env/bin/activate

# Install packages in virtual environment
pip install requests numpy pandas

# Save dependencies
pip freeze > requirements.txt

# Deactivate
deactivate`,
              explanation: 'Virtual environments keep project dependencies isolated and manageable'
            }
          ]
        },
        quiz: [
          {
            question: 'Which command verifies Python installation?',
            options: ['python -v', 'python --version', 'python -check', 'python verify'],
            correctAnswer: 1,
            explanation: 'python --version displays the installed Python version'
          },
          {
            question: 'What is the purpose of a virtual environment?',
            options: ['Speed up Python', 'Isolate project dependencies', 'Create virtual machines', 'Encrypt code'],
            correctAnswer: 1,
            explanation: 'Virtual environments isolate dependencies for different projects'
          },
          {
            question: 'What should you check during Windows installation?',
            options: ['Add Python to PATH', 'Install all features', 'Use custom location', 'Skip documentation'],
            correctAnswer: 0,
            explanation: 'Adding Python to PATH allows you to run Python from any command prompt'
          }
        ]
      },
      
      {
        id: 'execution-modes',
        title: 'Python Execution Modes',
        description: 'Interactive vs Script mode execution',
        content: {
          overview: 'Python can be executed in two primary modes: Interactive Mode for testing snippets and quick experimentation, and Script Mode for running complete programs. Understanding both modes helps you work efficiently.',
          keyPoints: [
            'Interactive mode: REPL (Read-Eval-Print-Loop) for immediate feedback',
            'Script mode: Execute complete Python files (.py)',
            'Interactive mode is great for learning and testing',
            'Script mode is used for production code',
            'Both modes execute Python code identically'
          ],
          useCases: [
            {
              title: 'Interactive Mode - Testing',
              description: 'Quick testing of Python expressions',
              example: '>>> 2 + 2 [Enter] returns 4 immediately'
            },
            {
              title: 'Interactive Mode - Learning',
              description: 'Explore Python features and libraries',
              example: 'Try different functions and see results instantly'
            },
            {
              title: 'Script Mode - Applications',
              description: 'Create complete programs and applications',
              example: 'web apps, data analysis scripts, automation tools'
            },
            {
              title: 'Script Mode - Production',
              description: 'Deploy code to servers and production environments',
              example: 'Run scheduled tasks, web servers, batch processing'
            }
          ],
          dos: [
            'Use interactive mode for quick testing and learning',
            'Use script mode for any code you want to save',
            'Add .py extension to all Python script files',
            'Include shebang line in scripts for Unix systems',
            'Make scripts executable with proper permissions'
          ],
          donts: [
            'Don\'t write long programs in interactive mode',
            'Don\'t forget to save your work when exiting interactive mode',
            'Don\'t use interactive mode for production code',
            'Don\'t run untrusted scripts without reviewing',
            'Don\'t forget error handling in scripts'
          ],
          bestPractices: [
            'Use interactive mode for experimentation',
            'Write scripts for reusable code',
            'Add comments and docstrings in scripts',
            'Use if __name__ == "__main__": for script entry points',
            'Test scripts thoroughly before deployment'
          ],
          codeExamples: [
            {
              title: 'Interactive Mode Usage',
              code: `# Start interactive Python shell
$ python

# Python prompt appears
>>> print("Hello, World!")
Hello, World!

>>> x = 5
>>> y = 10
>>> x + y
15

>>> for i in range(3):
...     print(i)
...
0
1
2

>>> exit()  # or Ctrl+D (Unix) / Ctrl+Z (Windows)`,
              explanation: 'Interactive mode provides immediate feedback, great for testing'
            },
            {
              title: 'Script Mode - Creating a Python File',
              code: `# Save as: hello.py
#!/usr/bin/env python3
"""
A simple Python script demonstrating script mode.
"""

def greet(name):
    """Greet a person by name."""
    return f"Hello, {name}!"

if __name__ == "__main__":
    # This block runs only when script is executed directly
    print(greet("World"))
    print("This is script mode execution!")
    
# Run from command line:
# python hello.py`,
              explanation: 'Script mode allows you to write complete programs and save them for reuse'
            },
            {
              title: 'Script with Command Line Arguments',
              code: `# Save as: greet_user.py
import sys

def main():
    if len(sys.argv) < 2:
        print("Usage: python greet_user.py <name>")
        sys.exit(1)
    
    name = sys.argv[1]
    print(f"Hello, {name}!")

if __name__ == "__main__":
    main()

# Run: python greet_user.py Alice
# Output: Hello, Alice!`,
              explanation: 'Scripts can accept command-line arguments for dynamic behavior'
            }
          ]
        },
        quiz: [
          {
            question: 'Which mode is best for testing small code snippets?',
            options: ['Script mode', 'Interactive mode', 'Compile mode', 'Debug mode'],
            correctAnswer: 1,
            explanation: 'Interactive mode provides immediate feedback, perfect for testing snippets'
          },
          {
            question: 'What is the file extension for Python scripts?',
            options: ['.python', '.py', '.script', '.pys'],
            correctAnswer: 1,
            explanation: 'Python scripts use the .py file extension'
          },
          {
            question: 'What does if __name__ == "__main__": do?',
            options: ['Checks Python version', 'Ensures code runs only when script is executed directly', 'Imports modules', 'Defines a function'],
            correctAnswer: 1,
            explanation: 'This idiom ensures code runs only when the file is executed directly, not when imported'
          }
        ]
      },

      {
        id: 'python-tokens',
        title: 'Python Tokens - Building Blocks',
        description: 'Understanding the smallest units of Python programs',
        content: {
          overview: 'Tokens are the smallest individual units of a Python program - the building blocks of code. When Python reads your code, it breaks it into tokens: keywords, identifiers, literals, operators, and delimiters. Understanding tokens is fundamental to writing correct Python code.',
          keyPoints: [
            'Tokens are the smallest lexical units in Python',
            'Five types: Keywords, Identifiers, Literals, Operators, Delimiters',
            'Python interpreter breaks code into tokens during execution',
            'Each token has a specific purpose and meaning',
            'Proper token usage ensures syntactically correct code'
          ],
          useCases: [
            {
              title: 'Keywords - Reserved Words',
              description: 'Reserved words with special meaning (if, else, for, while, def, class, etc.)',
              example: 'if x > 10: # "if" is a keyword token'
            },
            {
              title: 'Identifiers - Names',
              description: 'Names given to variables, functions, classes',
              example: 'student_name = "Alice" # student_name is identifier'
            },
            {
              title: 'Literals - Values',
              description: 'Fixed values like numbers, strings, booleans',
              example: '42, "hello", True, 3.14 are all literals'
            },
            {
              title: 'Operators - Actions',
              description: 'Symbols that perform operations (+, -, *, /, ==, !=, etc.)',
              example: 'x = 5 + 3 # = and + are operator tokens'
            },
            {
              title: 'Delimiters - Structure',
              description: 'Punctuation that organizes code ((), [], {}, :, ,)',
              example: 'my_list = [1, 2, 3] # [] and , are delimiters'
            }
          ],
          dos: [
            'Use descriptive identifiers that explain purpose',
            'Follow Python naming conventions (PEP 8)',
            'Use appropriate literals for data types',
            'Understand operator precedence',
            'Use delimiters correctly for grouping'
          ],
          donts: [
            'Don\'t use keywords as identifiers',
            'Don\'t create confusing identifier names',
            'Don\'t mix token types incorrectly',
            'Don\'t ignore Python syntax rules',
            'Don\'t use reserved words for variable names'
          ],
          bestPractices: [
            'Use snake_case for variables and functions',
            'Use CamelCase for class names',
            'Make identifiers meaningful and readable',
            'Group related tokens with proper delimiters',
            'Understand token roles in your code'
          ],
          codeExamples: [
            {
              title: 'Understanding All Token Types',
              code: `# Keywords: if, else, def, return
def calculate_grade(score):
    # Identifiers: calculate_grade, score, grade
    # Literals: 90, 80, 70, "A", "B", "C", "F"
    # Operators: >=, =
    # Delimiters: (), :, ,
    
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >= 70:
        grade = "C"
    else:
        grade = "F"
    
    return grade

# Function call with literal argument
result = calculate_grade(85)
print(result)  # Output: B`,
              explanation: 'This example shows all five token types working together in a complete program'
            },
            {
              title: 'Python Keywords (Reserved Words)',
              code: `# All Python keywords (cannot be used as identifiers)
import keyword

print("Total keywords:", len(keyword.kwlist))
print("Keywords:", keyword.kwlist)

# Output shows:
# ['False', 'None', 'True', 'and', 'as', 'assert', 
#  'async', 'await', 'break', 'class', 'continue', 
#  'def', 'del', 'elif', 'else', 'except', 'finally',
#  'for', 'from', 'global', 'if', 'import', 'in', 
#  'is', 'lambda', 'nonlocal', 'not', 'or', 'pass',
#  'raise', 'return', 'try', 'while', 'with', 'yield']

# Invalid - using keyword as identifier
# class = "Python"  # SyntaxError!

# Valid - proper identifier
course_name = "Python"  # ✓ Correct`,
              explanation: 'Keywords are reserved and cannot be used as variable names'
            },
            {
              title: 'Valid vs Invalid Identifiers',
              code: `# Valid identifiers
student_name = "Alice"
_private_var = 42
MAX_SIZE = 100
studentAge = 20
total2024 = 1000

# Invalid identifiers (will cause errors)
# 2024total = 1000      # Cannot start with digit
# student-name = "Bob"  # Cannot use hyphen
# class = "Python"      # Cannot use keyword
# my variable = 10      # Cannot have spaces
# @username = "test"    # Cannot use special chars

# Testing identifier validity
def is_valid_identifier(name):
    return name.isidentifier() and not name in keyword.kwlist

print(is_valid_identifier("student_name"))  # True
print(is_valid_identifier("2024total"))     # False
print(is_valid_identifier("class"))         # False`,
              explanation: 'Identifiers must follow naming rules: start with letter/underscore, no keywords'
            }
          ],
          quiz: [
            {
              question: 'Which of the following is NOT a valid Python identifier?',
              options: ['_private', 'student2024', '2024student', 'MAX_VALUE'],
              correctAnswer: 2,
              explanation: 'Identifiers cannot start with a digit'
            },
            {
              question: 'What type of token is "if" in Python?',
              options: ['Identifier', 'Keyword', 'Literal', 'Operator'],
              correctAnswer: 1,
              explanation: '"if" is a reserved keyword in Python'
            },
            {
              question: 'Which is a delimiter in Python?',
              options: ['print', '42', 'x', ':'],
              correctAnswer: 3,
              explanation: 'Colon (:) is a delimiter used for code blocks'
            }
          ]
        }
      },

      {
        id: 'control-flow-basics',
        title: 'Control Flow - if/else Statements',
        description: 'Making decisions in your code',
        content: {
          overview: 'Control flow statements allow your program to make decisions and execute different code based on conditions. The if/elif/else statements are fundamental for creating logic in programs - from simple checks to complex decision trees.',
          keyPoints: [
            'if statement executes code when condition is True',
            'elif (else if) checks additional conditions',
            'else executes when all conditions are False',
            'Conditions use comparison operators (==, !=, <, >, <=, >=)',
            'Indentation defines code blocks (4 spaces)'
          ],
          useCases: [
            {
              title: 'User Input Validation',
              description: 'Check if user input meets requirements',
              example: 'Validate age, email format, password strength'
            },
            {
              title: 'Business Logic',
              description: 'Implement business rules and decisions',
              example: 'Calculate discounts, determine eligibility, route requests'
            },
            {
              title: 'Error Handling',
              description: 'Check for errors before processing',
              example: 'Verify file exists, check network connection, validate data'
            },
            {
              title: 'Game Logic',
              description: 'Control game flow based on player actions',
              example: 'Check win/lose conditions, validate moves, update scores'
            }
          ],
          dos: [
            'Use clear, readable conditions',
            'Handle all possible cases',
            'Use elif instead of multiple if when appropriate',
            'Keep condition expressions simple',
            'Test edge cases thoroughly'
          ],
          donts: [
            'Don\'t forget the colon (:) after conditions',
            'Don\'t mix tabs and spaces for indentation',
            'Don\'t create overly complex nested conditions',
            'Don\'t forget to handle the else case',
            'Don\'t use assignment (=) instead of comparison (==)'
          ],
          bestPractices: [
            'Use 4 spaces for indentation consistently',
            'Order conditions from most to least likely',
            'Use boolean variables for complex conditions',
            'Consider using match/case for many conditions (Python 3.10+)',
            'Write self-documenting condition names'
          ],
          codeExamples: [
            {
              title: 'Basic if/elif/else Structure',
              code: `# Grade calculator
score = 85

if score >= 90:
    grade = "A"
    message = "Excellent work!"
elif score >= 80:
    grade = "B"
    message = "Good job!"
elif score >= 70:
    grade = "C"
    message = "Satisfactory"
elif score >= 60:
    grade = "D"
    message = "Need improvement"
else:
    grade = "F"
    message = "Please see instructor"

print(f"Grade: {grade}")
print(message)

# Output:
# Grade: B
# Good job!`,
              explanation: 'elif allows checking multiple conditions in order, stops at first True'
            },
            {
              title: 'Nested Conditions and Logical Operators',
              code: `# Login system with multiple checks
username = "alice"
password = "secret123"
is_active = True
login_attempts = 2

# Using logical operators (and, or, not)
if username and password:
    if len(password) >= 8 and is_active:
        if login_attempts < 3:
            print("✓ Login successful!")
            print(f"Welcome, {username}!")
        else:
            print("✗ Account locked - too many attempts")
    elif not is_active:
        print("✗ Account is deactivated")
    else:
        print("✗ Password must be 8+ characters")
else:
    print("✗ Username and password required")

# Better approach using early returns in functions
def login(username, password, is_active, attempts):
    if not username or not password:
        return "Username and password required"
    
    if attempts >= 3:
        return "Account locked - too many attempts"
    
    if not is_active:
        return "Account is deactivated"
    
    if len(password) < 8:
        return "Password must be 8+ characters"
    
    return f"Welcome, {username}!"

result = login("alice", "secret123", True, 2)
print(result)`,
              explanation: 'Use logical operators (and, or, not) for complex conditions. Early returns reduce nesting.'
            },
            {
              title: 'Real-World Example: E-commerce Discount',
              code: `# Calculate shopping cart discount
cart_total = 250
is_member = True
is_first_purchase = False
coupon_code = "SAVE20"

discount = 0
discount_reason = []

# Member discount
if is_member:
    discount += 10
    discount_reason.append("Member: 10%")

# First purchase bonus
if is_first_purchase:
    discount += 15
    discount_reason.append("First Purchase: 15%")

# Coupon code
if coupon_code == "SAVE20":
    discount += 20
    discount_reason.append("Coupon SAVE20: 20%")
elif coupon_code == "SAVE10":
    discount += 10
    discount_reason.append("Coupon SAVE10: 10%")

# Large order discount
if cart_total > 200:
    discount += 5
    discount_reason.append("Large Order: 5%")

# Calculate final price
discount_amount = cart_total * (discount / 100)
final_price = cart_total - discount_amount

print("Cart Total: $%.2f" % cart_total)
print("Discounts Applied: %d%%" % discount)
for reason in discount_reason:
    print("  -", reason)
print("Discount Amount: $%.2f" % discount_amount)
print("Final Price: $%.2f" % final_price)

# Output:
# Cart Total: $250.00
# Discounts Applied: 35%
# - Member: 10%
# - Coupon SAVE20: 20%
# - Large Order: 5%
# Discount Amount: $87.50
# Final Price: $162.50`,
              explanation: 'Real-world example combining multiple conditions to calculate discounts'
            }
          ],
          quiz: [
            {
              question: 'What happens if multiple elif conditions are True?',
              options: [
                'All True conditions execute',
                'Only the first True condition executes',
                'Only the last True condition executes',
                'SyntaxError occurs'
              ],
              correctAnswer: 1,
              explanation: 'Python stops checking conditions after the first True one'
            },
            {
              question: 'Which operator checks if two values are equal?',
              options: ['=', '==', '!=', 'is'],
              correctAnswer: 1,
              explanation: '== checks equality, = is assignment, != is not equal, is checks identity'
            },
            {
              question: 'How many spaces should you use for indentation in Python?',
              options: ['2 spaces', '3 spaces', '4 spaces', '8 spaces'],
              correctAnswer: 2,
              explanation: 'PEP 8 recommends 4 spaces for indentation'
            }
          ]
        }
      },

      {
        id: 'loops-for-while',
        title: 'Loops - for and while',
        description: 'Repeating actions efficiently',
        content: {
          overview: 'Loops allow you to repeat code multiple times without writing it over and over. Python provides two main loop types: "for" loops for iterating over sequences, and "while" loops for repeating until a condition changes. Mastering loops is essential for processing data and automating tasks.',
          keyPoints: [
            'for loops iterate over sequences (lists, strings, ranges)',
            'while loops repeat while condition is True',
            'break exits the loop immediately',
            'continue skips to next iteration',
            'range() generates number sequences for loops',
            'Loops can be nested for multi-dimensional processing'
          ],
          useCases: [
            {
              title: 'Data Processing',
              description: 'Process each item in a dataset',
              example: 'Analyze list of sales, calculate statistics, filter data'
            },
            {
              title: 'User Interaction',
              description: 'Keep asking for input until valid',
              example: 'Menu systems, input validation, game loops'
            },
            {
              title: 'File Operations',
              description: 'Read file line by line',
              example: 'Process log files, parse CSV data, analyze text'
            },
            {
              title: 'Automation',
              description: 'Repeat tasks automatically',
              example: 'Send emails, download files, update databases'
            }
          ],
          dos: [
            'Use for loops when you know the number of iterations',
            'Use while loops when iterations depend on a condition',
            'Always ensure while loops can terminate',
            'Use break to exit loops when needed',
            'Use meaningful variable names in loops'
          ],
          donts: [
            'Don\'t create infinite loops accidentally',
            'Don\'t modify the sequence you\'re iterating over',
            'Don\'t use loops when built-in functions exist',
            'Don\'t forget to update while loop conditions',
            'Don\'t nest too many loops (reduces readability)'
          ],
          bestPractices: [
            'Use enumerate() to get index and value together',
            'Use list comprehensions for simple transformations',
            'Consider using zip() for parallel iteration',
            'Use else clause with loops for no-break scenarios',
            'Profile nested loops for performance'
          ],
          codeExamples: [
            {
              title: 'for Loop - Iterating Over Collections',
              code: `# Iterate over a list
fruits = ["apple", "banana", "cherry", "date"]

for fruit in fruits:
    print(f"I love {fruit}s!")

# Output:
# I love apples!
# I love bananas!
# I love cherrys!
# I love dates!

# Using enumerate() to get index
for index, fruit in enumerate(fruits):
    print(f"{index + 1}. {fruit}")

# Output:
# 1. apple
# 2. banana
# 3. cherry
# 4. date

# Using range() for number sequences
print("\\nCountdown:")
for i in range(10, 0, -1):
    print(i, end=" ")
print("Blast off! 🚀")

# Output: 10 9 8 7 6 5 4 3 2 1 Blast off! 🚀`,
              explanation: 'for loops are perfect for iterating over known sequences'
            },
            {
              title: 'while Loop - Condition-Based Repetition',
              code: `# Input validation with while loop
password = ""
attempts = 0
max_attempts = 3

while len(password) < 8 and attempts < max_attempts:
    password = input("Enter password (8+ chars): ")
    attempts += 1
    
    if len(password) < 8:
        print(f"Too short! {max_attempts - attempts} attempts left")

if len(password) >= 8:
    print("✓ Password accepted!")
else:
    print("✗ Too many failed attempts")

# Game loop example
score = 0
playing = True

while playing:
    print(f"\\nCurrent score: {score}")
    action = input("Enter 'play' to continue, 'quit' to exit: ")
    
    if action == "play":
        score += 10
        print("You earned 10 points!")
    elif action == "quit":
        playing = False
        print(f"Game over! Final score: {score}")
    else:
        print("Invalid action!")`,
              explanation: 'while loops continue until condition becomes False'
            },
            {
              title: 'Loop Control - break, continue, else',
              code: `# Using break to exit loop early
numbers = [1, 3, 5, 7, 8, 9, 11, 13]

print("Finding first even number:")
for num in numbers:
    if num % 2 == 0:
        print(f"Found even number: {num}")
        break  # Exit loop immediately
else:
    # This runs only if loop completes without break
    print("No even number found")

# Using continue to skip iterations
print("\\nOdd numbers only:")
for num in range(1, 11):
    if num % 2 == 0:
        continue  # Skip to next iteration
    print(num, end=" ")

# Output: 1 3 5 7 9

# Nested loops with labels (using break)
print("\\n\\nSearching 2D grid:")
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

target = 5
found = False

for i, row in enumerate(matrix):
    for j, value in enumerate(row):
        if value == target:
            print(f"Found {target} at position ({i}, {j})")
            found = True
            break
    if found:
        break  # Exit outer loop too

# Real-world: Processing data until condition
print("\\nProcessing transactions:")
transactions = [100, 50, -30, 200, -150, 75, -25]
balance = 500

for transaction in transactions:
    balance += transaction
    print(f"Transaction: {transaction:+d}, Balance: {balance}")
    
    if balance < 0:
        print("⚠ ALERT: Negative balance!")
        break
else:
    print("✓ All transactions processed successfully")`,
              explanation: 'break exits loop, continue skips iteration, else runs if no break occurred'
            },
            {
              title: 'Real-World: Data Analysis Loop',
              code: `# Analyzing student grades
students = [
    {"name": "Alice", "scores": [85, 90, 88]},
    {"name": "Bob", "scores": [78, 82, 80]},
    {"name": "Charlie", "scores": [92, 95, 98]},
    {"name": "Diana", "scores": [65, 70, 68]}
]

print("STUDENT GRADE REPORT")
print("=" * 50)

for student in students:
    name = student["name"]
    scores = student["scores"]
    
    # Calculate statistics
    total = sum(scores)
    average = total / len(scores)
    highest = max(scores)
    lowest = min(scores)
    
    # Determine grade
    if average >= 90:
        grade = "A"
    elif average >= 80:
        grade = "B"
    elif average >= 70:
        grade = "C"
    else:
        grade = "D"
    
    # Print report
    print(f"\\nStudent: {name}")
    print(f"  Scores: {scores}")
    print(f"  Average: {average:.1f}")
    print(f"  Range: {lowest} - {highest}")
    print(f"  Grade: {grade}")
    
    # Flag at-risk students
    if average < 70:
        print(f"  ⚠ Status: At Risk - Needs Support")

print("\\n" + "=" * 50)`,
              explanation: 'Complete example combining loops, conditionals, and data processing'
            }
          ],
          quiz: [
            {
              question: 'What does "break" do in a loop?',
              options: [
                'Skips to next iteration',
                'Exits the loop completely',
                'Pauses the loop',
                'Restarts the loop'
              ],
              correctAnswer: 1,
              explanation: 'break immediately exits the loop entirely'
            },
            {
              question: 'What does range(5) produce?',
              options: ['[1, 2, 3, 4, 5]', '[0, 1, 2, 3, 4]', '[0, 1, 2, 3, 4, 5]', '[1, 2, 3, 4]'],
              correctAnswer: 1,
              explanation: 'range(5) generates numbers from 0 to 4 (5 is excluded)'
            },
            {
              question: 'When should you use a while loop instead of a for loop?',
              options: [
                'When iterating over a list',
                'When you know exact number of iterations',
                'When iterations depend on a changing condition',
                'Never, for loops are always better'
              ],
              correctAnswer: 2,
              explanation: 'Use while loops when the number of iterations depends on a condition'
            }
          ]
        }
      }
    ]
  },
  
  intermediate: {
    topics: [
      {
        id: 'strings-comprehensive',
        title: 'Strings - Complete Mastery',
        description: 'Master string manipulation and text processing in Python',
        content: {
          overview: 'Strings are sequences of characters used for storing and manipulating text. Python provides powerful string methods and operations that make text processing easy and efficient. From simple concatenation to complex pattern matching, strings are fundamental to almost every Python program.',
          keyPoints: [
            'Strings are immutable - cannot be changed after creation',
            'Can use single quotes, double quotes, or triple quotes',
            'Support indexing and slicing like lists',
            'Rich set of built-in methods for manipulation',
            'Unicode support for international characters'
          ],
          useCases: [
            {
              title: 'Text Processing',
              description: 'Parse and analyze text data',
              example: 'Process log files, extract information, clean data'
            },
            {
              title: 'User Input Validation',
              description: 'Validate and format user input',
              example: 'Check email format, clean phone numbers, validate passwords'
            },
            {
              title: 'Data Formatting',
              description: 'Format data for display',
              example: 'Create reports, format currency, generate messages'
            },
            {
              title: 'File Operations',
              description: 'Read and write text files',
              example: 'Parse CSV, process configuration files, log writing'
            }
          ],
          dos: [
            'Use .format() or % formatting for string interpolation',
            'Use appropriate string methods instead of manual loops',
            'Use join() for combining multiple strings efficiently',
            'Use strip() to remove unwanted whitespace',
            'Check string methods documentation for built-in solutions'
          ],
          donts: [
            'Don\'t concatenate strings in loops (use join instead)',
            'Don\'t use + for building large strings repeatedly',
            'Don\'t forget strings are immutable',
            'Don\'t use == for case-insensitive comparison without lower()',
            'Don\'t manually implement what built-in methods do'
          ],
          bestPractices: [
            'Use .format() or % for string formatting',
            'Use raw strings (r"...") for regular expressions',
            'Use triple quotes for multi-line strings',
            'Chain string methods for clean code',
            'Use constants for repeated string values'
          ],
          codeExamples: [
            {
              title: 'String Creation and Basic Operations',
              code: `# Different ways to create strings
single = 'Hello World'
double = "Python Programming"
triple = """Multi-line
string with
multiple lines"""

# String concatenation
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print(full_name)  # John Doe

# String repetition
separator = "=" * 50
print(separator)

# String indexing (0-based)
text = "Python"
print(text[0])    # P (first character)
print(text[-1])   # n (last character)
print(text[2])    # t (third character)

# String slicing [start:end:step]
print(text[0:3])   # Pyt (index 0 to 2)
print(text[2:])    # thon (from index 2 to end)
print(text[:4])    # Pyth (from start to index 3)
print(text[::2])   # Pto (every 2nd character)
print(text[::-1])  # nohtyP (reverse string)`,
              explanation: 'Strings can be created multiple ways and support powerful slicing operations'
            },
            {
              title: 'String Formatting - Modern Approaches',
              code: `name = "Alice"
age = 25
score = 87.55

# Using .format() method - RECOMMENDED
message = "{} is {} years old and scored {:.1f}%".format(name, age, score)
print(message)  # Alice is 25 years old and scored 87.6%

# Named placeholders
message = "{name} scored {score:.2f}%".format(name=name, score=score)
print(message)  # Alice scored 87.55%

# Positional placeholders
message = "{0} is {1} years old. {0} loves Python!".format(name, age)
print(message)  # Alice is 25 years old. Alice loves Python!

# Old style % formatting
message = "%s is %d years old" % (name, age)
print(message)  # Alice is 25 years old

# Advanced formatting with .format()
price = 1234.56
print("Price: {:,.2f}".format(price))      # Price: 1,234.56
print("Price: {:>10.2f}".format(price))    # Right align in 10 chars
print("Price: {:<10.2f}".format(price))    # Left align
print("Price: {:^10.2f}".format(price))    # Center align

# With % formatting
print("Price: %,.2f" % price)              # Price: 1,234.56
print("Hex: %x, Oct: %o" % (255, 255))     # Hex: ff, Oct: 377`,
              explanation: 'Use .format() or % for clean, readable string formatting'
            },
            {
              title: 'Essential String Methods',
              code: `text = "  Python Programming  "

# Case conversion
print(text.upper())        # "  PYTHON PROGRAMMING  "
print(text.lower())        # "  python programming  "
print(text.title())        # "  Python Programming  "
print(text.capitalize())   # "  python programming  "
print(text.swapcase())     # "  pYTHON pROGRAMMING  "

# Whitespace removal
print(text.strip())        # "Python Programming"
print(text.lstrip())       # "Python Programming  "
print(text.rstrip())       # "  Python Programming"
print(text.strip().replace(" ", "_"))  # "Python_Programming"

# Searching and checking
email = "user@example.com"
print(email.startswith("user"))     # True
print(email.endswith(".com"))       # True
print("@" in email)                 # True
print(email.find("@"))              # 4 (index of @)
print(email.index("@"))             # 4 (raises error if not found)
print(email.count("e"))             # 3

# Splitting and joining
csv_data = "Alice,25,Engineer"
parts = csv_data.split(",")
print(parts)  # ['Alice', '25', 'Engineer']

words = ["Python", "is", "awesome"]
sentence = " ".join(words)
print(sentence)  # "Python is awesome"

# String validation methods
print("12345".isdigit())      # True
print("Python".isalpha())     # True
print("Python3".isalnum())    # True
print("   ".isspace())        # True
print("Hello World".istitle())  # True`,
              explanation: 'Python provides rich string methods for common operations'
            },
            {
              title: 'Real-World: Email Validator',
              code: `def validate_email(email):
    """
    Validate email format (simple version)
    Returns: (is_valid, error_message)
    """
    # Remove whitespace
    email = email.strip()
    
    # Check basic requirements
    if not email:
        return False, "Email cannot be empty"
    
    if len(email) < 5:
        return False, "Email too short"
    
    if email.count("@") != 1:
        return False, "Email must contain exactly one @"
    
    if not email[0].isalnum():
        return False, "Email must start with letter or number"
    
    # Split into local and domain
    local, domain = email.split("@")
    
    if not local or not domain:
        return False, "Email must have both local and domain parts"
    
    if not "." in domain:
        return False, "Domain must contain a dot"
    
    if domain.startswith(".") or domain.endswith("."):
        return False, "Domain cannot start or end with dot"
    
    return True, "Email is valid"

# Test the validator
test_emails = [
    "user@example.com",
    "invalid.email",
    "@example.com",
    "user@",
    "user space@example.com",
    "valid.user@sub.example.com"
]

print("EMAIL VALIDATION RESULTS")
print("=" * 50)
for email in test_emails:
    is_valid, message = validate_email(email)
    status = "VALID" if is_valid else "INVALID"
    print("{} - {} - {}".format(status, email, message))`,
              explanation: 'Practical example using multiple string methods for validation'
            },
            {
              title: 'Real-World: Text Data Cleaning',
              code: `def clean_phone_number(phone):
    """Clean and format phone number to (XXX) XXX-XXXX"""
    # Remove all non-digit characters
    digits = ''.join(char for char in phone if char.isdigit())
    
    # Check if we have 10 digits
    if len(digits) != 10:
        return None
    
    # Format: (XXX) XXX-XXXX
    return "({}) {}-{}".format(digits[0:3], digits[3:6], digits[6:10])

def clean_text_data(text):
    """Clean messy text data"""
    # Remove extra whitespace
    text = ' '.join(text.split())
    
    # Remove special characters except basic punctuation
    allowed = set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 .,!?-")
    text = ''.join(char for char in text if char in allowed)
    
    # Fix common issues
    text = text.replace(" ,", ",")
    text = text.replace(" .", ".")
    text = text.replace("  ", " ")
    
    return text.strip()

# Test phone cleaning
phones = [
    "123-456-7890",
    "(123) 456-7890",
    "123.456.7890",
    "1234567890",
    "+1 123-456-7890"
]

print("PHONE NUMBER CLEANING")
print("=" * 50)
for phone in phones:
    cleaned = clean_phone_number(phone)
    print("{} -> {}".format(phone, cleaned))

# Test text cleaning
messy_text = "  Hello,,,   World!!!  This  is    messy   text...  "
print("\\nTEXT CLEANING")
print("=" * 50)
print("Before: " + repr(messy_text))
print("After:  " + repr(clean_text_data(messy_text)))`,
              explanation: 'Real-world data cleaning using string methods and comprehensions'
            }
          ],
          quiz: [
            {
              question: 'What does "Python"[1:4] return?',
              options: ['"Pyt"', '"yth"', '"ytho"', '"Pyth"'],
              correctAnswer: 1,
              explanation: 'Slicing [1:4] returns characters at index 1, 2, 3 (not including 4)'
            },
            {
              question: 'Which method removes whitespace from both ends of a string?',
              options: ['remove()', 'strip()', 'trim()', 'clean()'],
              correctAnswer: 1,
              explanation: 'strip() removes whitespace from both ends, lstrip() from left, rstrip() from right'
            },
            {
              question: 'What is the best way to combine a list of strings in Python?',
              options: [
                'Use + in a loop',
                'Use join() method',
                'Use format()',
                'Use append()'
              ],
              correctAnswer: 1,
              explanation: 'join() is most efficient: " ".join(list_of_strings)'
            },
            {
              question: 'Are strings mutable or immutable in Python?',
              options: [
                'Mutable - can be changed',
                'Immutable - cannot be changed',
                'Depends on how they are created',
                'Only single-quoted strings are immutable'
              ],
              correctAnswer: 1,
              explanation: 'Strings are immutable. Any operation that modifies a string creates a new string'
            }
          ]
        }
      },

      {
        id: 'lists-comprehensive',
        title: 'Lists - Complete Mastery',
        description: 'Master Python lists and list operations',
        content: {
          overview: 'Lists are ordered, mutable collections that can hold items of any type. They are one of Python\'s most versatile data structures, perfect for storing sequences of related data. Lists support indexing, slicing, and a rich set of methods for adding, removing, and manipulating elements.',
          keyPoints: [
            'Lists are mutable - can be modified after creation',
            'Can contain mixed data types',
            'Support indexing, slicing, and iteration',
            'Dynamic size - grow and shrink automatically',
            'Many built-in methods for manipulation'
          ],
          useCases: [
            {
              title: 'Data Collection',
              description: 'Store and organize related data',
              example: 'Student grades, shopping cart items, task lists'
            },
            {
              title: 'Data Processing',
              description: 'Transform and analyze data',
              example: 'Filter records, calculate statistics, sort results'
            },
            {
              title: 'Stack/Queue Implementation',
              description: 'Implement data structures',
              example: 'Task queues, undo/redo functionality, breadth-first search'
            },
            {
              title: 'Batch Operations',
              description: 'Process multiple items',
              example: 'Bulk file processing, batch API calls, data imports'
            }
          ],
          dos: [
            'Use list comprehensions for transformations',
            'Use appropriate methods (append, extend, insert)',
            'Check if list is empty with "if my_list:"',
            'Use enumerate() when you need index and value',
            'Use slicing for creating copies'
          ],
          donts: [
            'Don\'t modify list while iterating over it',
            'Don\'t use + for repeated appending (use extend)',
            'Don\'t forget lists are mutable (passed by reference)',
            'Don\'t use lists for large datasets needing fast lookups',
            'Don\'t create unnecessary copies of large lists'
          ],
          bestPractices: [
            'Use list comprehensions instead of map/filter when readable',
            'Consider using deque for queue operations',
            'Use tuple for immutable sequences',
            'Profile before optimizing list operations',
            'Use appropriate data structure (list, set, dict) for your use case'
          ],
          codeExamples: [
            {
              title: 'List Creation and Basic Operations',
              code: `# Creating lists
empty_list = []
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True, [1, 2]]
range_list = list(range(10))  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# List from string
chars = list("Python")  # ['P', 'y', 't', 'h', 'o', 'n']

# Accessing elements
fruits = ["apple", "banana", "cherry", "date"]
print(fruits[0])      # apple (first)
print(fruits[-1])     # date (last)
print(fruits[1:3])    # ['banana', 'cherry'] (slicing)

# Modifying lists
fruits[0] = "apricot"  # Change first element
fruits.append("fig")   # Add to end
fruits.insert(1, "blueberry")  # Insert at index
fruits.remove("cherry")  # Remove first occurrence
popped = fruits.pop()  # Remove and return last item
popped_at_1 = fruits.pop(1)  # Remove at index

print(fruits)

# List operations
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2  # [1, 2, 3, 4, 5, 6]
repeated = list1 * 3  # [1, 2, 3, 1, 2, 3, 1, 2, 3]

# Membership
print(2 in list1)     # True
print(7 not in list1) # True`,
              explanation: 'Lists support various creation methods and operations'
            },
            {
              title: 'List Comprehensions - Powerful and Pythonic',
              code: `# Basic list comprehension
squares = [x**2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition (filter)
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)  # [0, 4, 16, 36, 64]

# Transform strings
names = ["alice", "bob", "charlie"]
capitalized = [name.capitalize() for name in names]
print(capitalized)  # ['Alice', 'Bob', 'Charlie']

# Nested comprehensions
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
print(matrix)
# [[1, 2, 3],
#  [2, 4, 6],
#  [3, 6, 9]]

# Flatten nested list
nested = [[1, 2], [3, 4], [5, 6]]
flat = [item for sublist in nested for item in sublist]
print(flat)  # [1, 2, 3, 4, 5, 6]

# With if-else
numbers = [1, 2, 3, 4, 5]
result = ["Even" if x % 2 == 0 else "Odd" for x in numbers]
print(result)  # ['Odd', 'Even', 'Odd', 'Even', 'Odd']

# Real-world: Extract emails from data
users = [
    {"name": "Alice", "email": "alice@example.com"},
    {"name": "Bob", "email": "bob@example.com"},
    {"name": "Charlie", "email": "charlie@example.com"}
]
emails = [user["email"] for user in users]
print(emails)`,
              explanation: 'List comprehensions provide elegant way to create and transform lists'
            },
            {
              title: 'Essential List Methods',
              code: `numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5]

# Adding elements
numbers.append(7)        # Add to end
numbers.extend([8, 9])   # Add multiple items
numbers.insert(0, 0)     # Insert at position

# Removing elements
numbers.remove(1)        # Remove first occurrence of value
last = numbers.pop()     # Remove and return last item
at_index = numbers.pop(0)  # Remove and return at index
numbers.clear()          # Remove all items

# Searching and counting
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5]
print(numbers.index(4))  # 2 (first index of 4)
print(numbers.count(1))  # 2 (number of 1s)

# Sorting (modifies list)
numbers.sort()           # Sort ascending
print(numbers)           # [1, 1, 2, 3, 4, 5, 5, 6, 9]

numbers.sort(reverse=True)  # Sort descending
print(numbers)           # [9, 6, 5, 5, 4, 3, 2, 1, 1]

# Sorting without modifying (returns new list)
original = [3, 1, 4, 1, 5]
sorted_list = sorted(original)
print(original)      # [3, 1, 4, 1, 5] (unchanged)
print(sorted_list)   # [1, 1, 3, 4, 5]

# Reversing
numbers.reverse()    # Reverse in place
reversed_list = list(reversed(numbers))  # New reversed list

# Copying
shallow_copy = numbers.copy()
also_shallow = numbers[:]
import copy
deep_copy = copy.deepcopy(numbers)`,
              explanation: 'List methods provide powerful tools for manipulation'
            },
            {
              title: 'Real-World: Student Grade Management',
              code: `class GradeManager:
    def __init__(self):
        self.students = []
    
    def add_student(self, name, grades):
        self.students.append({
            'name': name,
            'grades': grades,
            'average': sum(grades) / len(grades) if grades else 0
        })
    
    def get_top_students(self, n=3):
        # Sort by average, descending
        sorted_students = sorted(
            self.students,
            key=lambda s: s['average'],
            reverse=True
        )
        return sorted_students[:n]
    
    def get_failing_students(self, threshold=60):
        return [s for s in self.students if s['average'] < threshold]
    
    def calculate_statistics(self):
        if not self.students:
            return None
        
        averages = [s['average'] for s in self.students]
        return {
            'class_average': sum(averages) / len(averages),
            'highest': max(averages),
            'lowest': min(averages),
            'total_students': len(self.students)
        }

# Usage
manager = GradeManager()
manager.add_student("Alice", [85, 90, 88, 92])
manager.add_student("Bob", [78, 82, 75, 80])
manager.add_student("Charlie", [92, 95, 98, 94])
manager.add_student("Diana", [55, 60, 58, 62])

print("TOP 3 STUDENTS")
print("=" * 50)
for i, student in enumerate(manager.get_top_students(), 1):
    print("{}. {}: {:.1f}%".format(i, student['name'], student['average']))

print("\\nFAILING STUDENTS")
print("=" * 50)
for student in manager.get_failing_students():
    print("{}: {:.1f}%".format(student['name'], student['average']))

print("\\nCLASS STATISTICS")
print("=" * 50)
stats = manager.calculate_statistics()
for key, value in stats.items():
    if isinstance(value, float):
        print("{}: {:.1f}".format(key.replace('_', ' ').title(), value))
    else:
        print("{}: {}".format(key.replace('_', ' ').title(), value))`,
              explanation: 'Complete real-world example using lists and list methods'
            }
          ],
          quiz: [
            {
              question: 'What does list.append() do?',
              options: [
                'Adds multiple items to the list',
                'Adds one item to the end of the list',
                'Inserts item at beginning',
                'Removes the last item'
              ],
              correctAnswer: 1,
              explanation: 'append() adds a single item to the end of the list'
            },
            {
              question: 'What is the difference between list.sort() and sorted(list)?',
              options: [
                'No difference',
                'sort() modifies original, sorted() returns new list',
                'sorted() is faster',
                'sort() only works with numbers'
              ],
              correctAnswer: 1,
              explanation: 'sort() modifies list in place, sorted() returns new sorted list'
            },
            {
              question: 'What does [x*2 for x in range(5)] produce?',
              options: [
                '[0, 2, 4, 6, 8]',
                '[2, 4, 6, 8, 10]',
                '[0, 1, 2, 3, 4]',
                '[0, 0, 2, 2, 4, 4]'
              ],
              correctAnswer: 0,
              explanation: 'List comprehension multiplies each number in range(5) by 2: [0, 2, 4, 6, 8]'
            },
            {
              question: 'Are lists mutable or immutable in Python?',
              options: [
                'Immutable - cannot be changed',
                'Mutable - can be changed',
                'Depends on the content',
                'Only numeric lists are mutable'
              ],
              correctAnswer: 1,
              explanation: 'Lists are mutable, meaning they can be modified after creation'
            }
          ]
        }
      },

      {
        id: 'tuples-comprehensive',
        title: 'Tuples - Immutable Sequences',
        description: 'Master tuples and tuple operations in Python',
        content: {
          overview: 'Tuples are immutable sequences in Python, similar to lists but cannot be modified after creation. They are perfect for storing related data that should not change, like coordinates, RGB colors, or database records. Tuples are faster than lists and can be used as dictionary keys.',
          keyPoints: [
            'Tuples are immutable - cannot be changed after creation',
            'Created using parentheses () or without delimiters',
            'Support indexing and slicing like lists',
            'Can be used as dictionary keys (unlike lists)',
            'Faster and more memory-efficient than lists'
          ],
          useCases: [
            {
              title: 'Fixed Data Collections',
              description: 'Store data that should not change',
              example: 'Coordinates (x, y), RGB colors (255, 128, 0), date (2023, 12, 25)'
            },
            {
              title: 'Multiple Return Values',
              description: 'Return multiple values from functions',
              example: 'def get_user(): return name, age, email'
            },
            {
              title: 'Dictionary Keys',
              description: 'Use as immutable dictionary keys',
              example: 'locations = {(40.7, -74.0): "New York", (34.0, -118.2): "LA"}'
            },
            {
              title: 'Data Integrity',
              description: 'Prevent accidental modifications',
              example: 'Configuration settings, constant values, enum-like data'
            }
          ],
          dos: [
            'Use tuples for fixed collections of items',
            'Use tuple unpacking for readable code',
            'Use tuples as dictionary keys when needed',
            'Use named tuples for better code clarity',
            'Return tuples from functions for multiple values'
          ],
          donts: [
            'Don\'t use tuples when you need to modify data',
            'Don\'t forget the comma for single-item tuples',
            'Don\'t confuse (1) with (1,) - first is int, second is tuple',
            'Don\'t try to modify tuple elements directly',
            'Don\'t use tuples for large, homogeneous data (use lists)'
          ],
          bestPractices: [
            'Use tuple unpacking for cleaner code',
            'Consider named tuples for self-documenting code',
            'Use tuples for heterogeneous data (different types)',
            'Use tuples when data should not change',
            'Prefer tuples over lists for return values'
          ],
          codeExamples: [
            {
              title: 'Tuple Creation and Basic Operations',
              code: `# Creating tuples
empty_tuple = ()
single_item = (1,)  # Note the comma!
coordinates = (10, 20)
rgb = (255, 128, 0)
mixed = (1, "hello", 3.14, True)

# Tuple without parentheses (tuple packing)
point = 5, 10
print(point)  # (5, 10)

# Tuple from other sequences
tuple_from_list = tuple([1, 2, 3])
tuple_from_string = tuple("Python")  # ('P', 'y', 't', 'h', 'o', 'n')

# Accessing elements
person = ("Alice", 25, "Engineer")
print(person[0])   # Alice
print(person[-1])  # Engineer
print(person[0:2]) # ('Alice', 25)

# Tuple operations
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
combined = tuple1 + tuple2  # (1, 2, 3, 4, 5, 6)
repeated = tuple1 * 3  # (1, 2, 3, 1, 2, 3, 1, 2, 3)

# Membership
print(2 in tuple1)     # True
print(7 not in tuple1) # True

# Length and count
print(len(tuple1))     # 3
numbers = (1, 2, 2, 3, 2, 4)
print(numbers.count(2))  # 3
print(numbers.index(3))  # 3`,
              explanation: 'Tuples are created with parentheses and support similar operations to lists, but are immutable'
            },
            {
              title: 'Tuple Unpacking - Elegant and Powerful',
              code: `# Basic unpacking
coordinates = (10, 20)
x, y = coordinates
print("X: {}, Y: {}".format(x, y))  # X: 10, Y: 20

# Multiple assignment
name, age, profession = ("Alice", 25, "Engineer")
print("{} is {} years old".format(name, age))

# Swapping variables
a, b = 5, 10
a, b = b, a  # Swap using tuple unpacking
print("a: {}, b: {}".format(a, b))  # a: 10, b: 5

# Extended unpacking (Python 3+)
numbers = (1, 2, 3, 4, 5)
first, *middle, last = numbers
print("First: {}".format(first))    # First: 1
print("Middle: {}".format(middle))  # Middle: [2, 3, 4]
print("Last: {}".format(last))      # Last: 5

# Unpacking in loops
people = [
    ("Alice", 25),
    ("Bob", 30),
    ("Charlie", 35)
]
for name, age in people:
    print("{} is {}".format(name, age))

# Returning multiple values
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers)/len(numbers)

minimum, maximum, average = get_stats([1, 2, 3, 4, 5])
print("Min: {}, Max: {}, Avg: {:.1f}".format(minimum, maximum, average))`,
              explanation: 'Tuple unpacking makes code cleaner and more readable'
            },
            {
              title: 'Named Tuples for Better Code',
              code: `from collections import namedtuple

# Define a named tuple
Point = namedtuple('Point', ['x', 'y'])
Person = namedtuple('Person', ['name', 'age', 'profession'])

# Create instances
p1 = Point(10, 20)
p2 = Point(x=30, y=40)

print(p1.x, p1.y)  # 10 20
print(p2.x, p2.y)  # 30 40

# Named tuple with Person
alice = Person("Alice", 25, "Engineer")
print(alice.name)        # Alice
print(alice.age)         # 25
print(alice.profession)  # Engineer

# Still works like regular tuple
print(alice[0])  # Alice
name, age, prof = alice
print(name)      # Alice

# Named tuple is immutable
# alice.age = 26  # This would raise an error

# Create modified copy
bob = alice._replace(name="Bob", age=30)
print(bob)  # Person(name='Bob', age=30, profession='Engineer')

# Convert to dictionary
person_dict = alice._asdict()
print(person_dict)  # {'name': 'Alice', 'age': 25, 'profession': 'Engineer'}

# Real-world: Using named tuples for data
Color = namedtuple('Color', ['red', 'green', 'blue'])
red = Color(255, 0, 0)
green = Color(0, 255, 0)
blue = Color(0, 0, 255)

print("Red color: RGB({}, {}, {})".format(red.red, red.green, red.blue))`,
              explanation: 'Named tuples provide self-documenting code with named fields while maintaining tuple benefits'
            },
            {
              title: 'Real-World: Database Records',
              code: `from collections import namedtuple

# Define a database record structure
Student = namedtuple('Student', ['id', 'name', 'grade', 'major'])

# Simulate database query results
students_db = [
    Student(1, "Alice", 3.8, "Computer Science"),
    Student(2, "Bob", 3.5, "Mathematics"),
    Student(3, "Charlie", 3.9, "Physics"),
    Student(4, "Diana", 3.7, "Computer Science"),
    Student(5, "Eve", 3.6, "Mathematics")
]

def get_top_students(students, n=3):
    """Get top N students by grade"""
    sorted_students = sorted(students, key=lambda s: s.grade, reverse=True)
    return sorted_students[:n]

def get_students_by_major(students, major):
    """Filter students by major"""
    return [s for s in students if s.major == major]

def calculate_average_grade(students):
    """Calculate average grade"""
    if not students:
        return 0
    total = sum(s.grade for s in students)
    return total / len(students)

# Usage
print("TOP 3 STUDENTS")
print("=" * 60)
for i, student in enumerate(get_top_students(students_db), 1):
    print("{}. {} (ID: {}) - Grade: {:.2f} - {}".format(
        i, student.name, student.id, student.grade, student.major
    ))

print("\\nCOMPUTER SCIENCE STUDENTS")
print("=" * 60)
cs_students = get_students_by_major(students_db, "Computer Science")
for student in cs_students:
    print("{} - Grade: {:.2f}".format(student.name, student.grade))

print("\\nAVERAGE GRADES BY MAJOR")
print("=" * 60)
majors = set(s.major for s in students_db)
for major in sorted(majors):
    major_students = get_students_by_major(students_db, major)
    avg = calculate_average_grade(major_students)
    print("{}: {:.2f}".format(major, avg))`,
              explanation: 'Named tuples are perfect for representing database records with immutability and clarity'
            }
          ],
          quiz: [
            {
              question: 'What is the main difference between tuples and lists?',
              options: [
                'Tuples are faster',
                'Tuples are immutable, lists are mutable',
                'Lists can store any type',
                'Tuples use less memory'
              ],
              correctAnswer: 1,
              explanation: 'The main difference is that tuples are immutable (cannot be changed) while lists are mutable'
            },
            {
              question: 'How do you create a tuple with a single item?',
              options: [
                '(1)',
                '(1,)',
                '[1]',
                'tuple(1)'
              ],
              correctAnswer: 1,
              explanation: 'Single-item tuples require a trailing comma: (1,). Without it, (1) is just an integer'
            },
            {
              question: 'Can tuples be used as dictionary keys?',
              options: [
                'No, only strings can be keys',
                'Yes, because they are immutable',
                'No, only numbers can be keys',
                'Yes, but only empty tuples'
              ],
              correctAnswer: 1,
              explanation: 'Tuples can be dictionary keys because they are immutable (hashable)'
            },
            {
              question: 'What does tuple unpacking allow you to do?',
              options: [
                'Modify tuple elements',
                'Assign tuple elements to multiple variables',
                'Delete tuple elements',
                'Sort tuple elements'
              ],
              correctAnswer: 1,
              explanation: 'Tuple unpacking allows assigning tuple elements to multiple variables: x, y = (1, 2)'
            }
          ]
        }
      },

      {
        id: 'dictionaries-comprehensive',
        title: 'Dictionaries - Key-Value Mastery',
        description: 'Master Python dictionaries and mapping operations',
        content: {
          overview: 'Dictionaries are Python\'s built-in mapping type, storing data as key-value pairs. They provide fast lookups, flexible data organization, and are fundamental to Python programming. Dictionaries are mutable, unordered (before Python 3.7) or insertion-ordered (Python 3.7+), and support powerful operations for data manipulation.',
          keyPoints: [
            'Store data as key-value pairs for fast lookups',
            'Keys must be immutable (strings, numbers, tuples)',
            'Values can be any type, including other dictionaries',
            'Insertion order preserved (Python 3.7+)',
            'Average O(1) time complexity for lookups'
          ],
          useCases: [
            {
              title: 'Data Mapping',
              description: 'Map keys to values for quick lookups',
              example: 'user_ages = {"Alice": 25, "Bob": 30, "Charlie": 35}'
            },
            {
              title: 'Configuration Storage',
              description: 'Store application settings and config',
              example: 'config = {"host": "localhost", "port": 8080, "debug": True}'
            },
            {
              title: 'Caching',
              description: 'Cache expensive computation results',
              example: 'fibonacci_cache = {0: 0, 1: 1, 2: 1, 3: 2}'
            },
            {
              title: 'Data Transformation',
              description: 'Transform and restructure data',
              example: 'Group students by grade, aggregate sales by region'
            }
          ],
          dos: [
            'Use get() method to avoid KeyError',
            'Use dict comprehensions for transformations',
            'Use setdefault() or defaultdict for default values',
            'Check if key exists with "in" operator',
            'Use items() for iterating key-value pairs'
          ],
          donts: [
            'Don\'t use mutable objects as keys (lists, sets, dicts)',
            'Don\'t modify dictionary while iterating (use list(dict.items()))',
            'Don\'t use dict[key] without checking existence',
            'Don\'t forget dictionaries are mutable (passed by reference)',
            'Don\'t use dictionaries for ordered sequences (use lists)'
          ],
          bestPractices: [
            'Use dict.get(key, default) instead of dict[key]',
            'Use dict comprehensions for creating dictionaries',
            'Use collections.defaultdict for default values',
            'Use collections.Counter for counting',
            'Consider using dataclasses for structured data'
          ],
          codeExamples: [
            {
              title: 'Dictionary Creation and Operations',
              code: `# Creating dictionaries
empty_dict = {}
also_empty = dict()

# Different creation methods
user = {"name": "Alice", "age": 25, "city": "NYC"}
user2 = dict(name="Bob", age=30, city="LA")
pairs = dict([("a", 1), ("b", 2), ("c", 3)])

# Accessing values
print(user["name"])        # Alice
print(user.get("age"))     # 25
print(user.get("email", "N/A"))  # N/A (default value)

# Modifying dictionaries
user["email"] = "alice@example.com"  # Add new key
user["age"] = 26  # Update existing value
del user["city"]  # Delete key

# Dictionary methods
print(user.keys())    # dict_keys(['name', 'age', 'email'])
print(user.values())  # dict_values(['Alice', 26, 'alice@example.com'])
print(user.items())   # dict_items([('name', 'Alice'), ('age', 26), ...])

# Checking existence
print("name" in user)  # True
print("city" in user)  # False

# Merging dictionaries (Python 3.9+)
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}
merged = dict1 | dict2  # {'a': 1, 'b': 2, 'c': 3, 'd': 4}

# Update method
config = {"host": "localhost", "port": 8080}
config.update({"port": 9000, "debug": True})
print(config)  # {'host': 'localhost', 'port': 9000, 'debug': True}`,
              explanation: 'Dictionaries provide fast key-value storage with flexible operations'
            },
            {
              title: 'Dictionary Comprehensions',
              code: `# Basic dictionary comprehension
squares = {x: x**2 for x in range(6)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# From lists
names = ["Alice", "Bob", "Charlie"]
name_lengths = {name: len(name) for name in names}
print(name_lengths)  # {'Alice': 5, 'Bob': 3, 'Charlie': 7}

# With condition
numbers = [1, 2, 3, 4, 5, 6]
even_squares = {x: x**2 for x in numbers if x % 2 == 0}
print(even_squares)  # {2: 4, 4: 16, 6: 36}

# Transform existing dictionary
prices = {"apple": 0.5, "banana": 0.3, "cherry": 0.8}
discounted = {item: price * 0.9 for item, price in prices.items()}
print(discounted)

# Swap keys and values
original = {"a": 1, "b": 2, "c": 3}
swapped = {v: k for k, v in original.items()}
print(swapped)  # {1: 'a', 2: 'b', 3: 'c'}

# Nested comprehension
matrix = {
    "row{}".format(i): {
        "col{}".format(j): i * j 
        for j in range(3)
    }
    for i in range(3)
}
print(matrix)`,
              explanation: 'Dictionary comprehensions provide elegant way to create and transform dictionaries'
            },
            {
              title: 'Advanced Dictionary Techniques',
              code: `from collections import defaultdict, Counter

# defaultdict - automatic default values
word_count = defaultdict(int)
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
for word in words:
    word_count[word] += 1
print(dict(word_count))  # {'apple': 3, 'banana': 2, 'cherry': 1}

# Counter - specialized for counting
counter = Counter(words)
print(counter)  # Counter({'apple': 3, 'banana': 2, 'cherry': 1})
print(counter.most_common(2))  # [('apple', 3), ('banana', 2)]

# setdefault - get or set default
user_prefs = {}
theme = user_prefs.setdefault("theme", "dark")
print(theme)  # dark
print(user_prefs)  # {'theme': 'dark'}

# pop and popitem
config = {"host": "localhost", "port": 8080, "debug": True}
port = config.pop("port", 3000)  # Remove and return value
print(port)  # 8080
print(config)  # {'host': 'localhost', 'debug': True}

# Nested dictionaries
users = {
    "alice": {"age": 25, "city": "NYC", "skills": ["Python", "JS"]},
    "bob": {"age": 30, "city": "LA", "skills": ["Java", "C++"]},
}
print(users["alice"]["skills"][0])  # Python

# Get nested values safely
def safe_get(dct, keys, default=None):
    for key in keys:
        try:
            dct = dct[key]
        except (KeyError, TypeError):
            return default
    return dct

result = safe_get(users, ["alice", "city"])  # NYC
result2 = safe_get(users, ["alice", "email"], "N/A")  # N/A`,
              explanation: 'Advanced techniques for working with dictionaries efficiently'
            },
            {
              title: 'Real-World: Student Grade System',
              code: `from collections import defaultdict

class GradeBook:
    def __init__(self):
        self.students = {}
    
    def add_student(self, student_id, name):
        self.students[student_id] = {
            "name": name,
            "grades": [],
            "assignments": {}
        }
    
    def add_grade(self, student_id, assignment, grade):
        if student_id in self.students:
            self.students[student_id]["grades"].append(grade)
            self.students[student_id]["assignments"][assignment] = grade
    
    def get_average(self, student_id):
        grades = self.students.get(student_id, {}).get("grades", [])
        return sum(grades) / len(grades) if grades else 0
    
    def get_class_statistics(self):
        all_averages = [self.get_average(sid) for sid in self.students]
        return {
            "count": len(all_averages),
            "average": sum(all_averages) / len(all_averages) if all_averages else 0,
            "highest": max(all_averages) if all_averages else 0,
            "lowest": min(all_averages) if all_averages else 0
        }
    
    def get_top_students(self, n=3):
        student_avgs = [
            (sid, self.students[sid]["name"], self.get_average(sid))
            for sid in self.students
        ]
        sorted_students = sorted(student_avgs, key=lambda x: x[2], reverse=True)
        return sorted_students[:n]

# Usage
gradebook = GradeBook()
gradebook.add_student("S001", "Alice")
gradebook.add_student("S002", "Bob")
gradebook.add_student("S003", "Charlie")

gradebook.add_grade("S001", "Midterm", 95)
gradebook.add_grade("S001", "Final", 92)
gradebook.add_grade("S002", "Midterm", 85)
gradebook.add_grade("S002", "Final", 88)
gradebook.add_grade("S003", "Midterm", 98)
gradebook.add_grade("S003", "Final", 96)

print("CLASS STATISTICS")
print("=" * 50)
stats = gradebook.get_class_statistics()
for key, value in stats.items():
    print("{}: {:.1f}".format(key.title(), value))

print("\\nTOP STUDENTS")
print("=" * 50)
for i, (sid, name, avg) in enumerate(gradebook.get_top_students(), 1):
    print("{}. {} ({}): {:.1f}%".format(i, name, sid, avg))`,
              explanation: 'Complete real-world grade management system using dictionaries'
            }
          ],
          quiz: [
            {
              question: 'What happens if you try to access a non-existent key with dict[key]?',
              options: [
                'Returns None',
                'Returns empty string',
                'Raises KeyError',
                'Returns 0'
              ],
              correctAnswer: 2,
              explanation: 'Accessing a non-existent key with dict[key] raises a KeyError. Use dict.get(key) to avoid this'
            },
            {
              question: 'Which of these CANNOT be used as a dictionary key?',
              options: [
                'String',
                'Tuple',
                'List',
                'Integer'
              ],
              correctAnswer: 2,
              explanation: 'Lists cannot be dictionary keys because they are mutable. Keys must be immutable (hashable)'
            },
            {
              question: 'What does the dict.get(key, default) method do?',
              options: [
                'Always returns default value',
                'Returns value if key exists, otherwise returns default',
                'Raises error if key doesn\'t exist',
                'Creates a new key with default value'
              ],
              correctAnswer: 1,
              explanation: 'dict.get(key, default) returns the value if key exists, otherwise returns the default value (None if not specified)'
            }
          ]
        }
      },

      {
        id: 'sets-comprehensive',
        title: 'Sets - Unique Collections Mastery',
        description: 'Master Python sets and set operations',
        content: {
          overview: 'Sets are unordered collections of unique elements in Python. They are perfect for removing duplicates, membership testing, and mathematical set operations like union, intersection, and difference. Sets are mutable (but frozensets are immutable) and provide fast O(1) membership testing.',
          keyPoints: [
            'Sets store only unique elements - duplicates are automatically removed',
            'Unordered - no indexing or slicing',
            'Fast membership testing with O(1) average time complexity',
            'Support mathematical set operations (union, intersection, difference)',
            'Elements must be immutable (hashable)'
          ],
          useCases: [
            {
              title: 'Remove Duplicates',
              description: 'Quickly remove duplicate items from sequences',
              example: 'unique_items = set([1, 2, 2, 3, 3, 4]) # {1, 2, 3, 4}'
            },
            {
              title: 'Membership Testing',
              description: 'Fast checking if element exists',
              example: 'allowed_users = {"alice", "bob"}; "alice" in allowed_users'
            },
            {
              title: 'Set Operations',
              description: 'Find common elements, differences between collections',
              example: 'common_skills = frontend_skills & backend_skills'
            },
            {
              title: 'Tag Systems',
              description: 'Manage unique tags, categories, keywords',
              example: 'post_tags = {"python", "tutorial", "beginner"}'
            }
          ],
          dos: [
            'Use sets for membership testing when order doesn\'t matter',
            'Use sets to remove duplicates efficiently',
            'Use set operations for comparing collections',
            'Use frozenset when you need immutable sets',
            'Use set comprehensions for transformations'
          ],
          donts: [
            'Don\'t use sets when you need to maintain order',
            'Don\'t try to add mutable objects (lists, dicts) to sets',
            'Don\'t use sets for indexed access',
            'Don\'t forget sets are mutable (use frozenset for dict keys)',
            'Don\'t use sets for small collections (overhead not worth it)'
          ],
          bestPractices: [
            'Use sets for fast membership testing',
            'Prefer set operations over manual loops',
            'Use frozenset for immutable sets',
            'Document when set ordering matters (it doesn\'t)',
            'Consider sets for deduplication'
          ],
          codeExamples: [
            {
              title: 'Set Creation and Basic Operations',
              code: `# Creating sets
empty_set = set()  # Note: {} creates an empty dict, not set
numbers = {1, 2, 3, 4, 5}
mixed = {1, "hello", 3.14, True}

# Set from list (removes duplicates)
numbers_list = [1, 2, 2, 3, 3, 3, 4, 5, 5]
unique_numbers = set(numbers_list)
print(unique_numbers)  # {1, 2, 3, 4, 5}

# Set from string
chars = set("hello")
print(chars)  # {'h', 'e', 'l', 'o'}

# Adding elements
fruits = {"apple", "banana"}
fruits.add("cherry")
print(fruits)  # {'apple', 'banana', 'cherry'}

# Adding multiple elements
fruits.update(["date", "elderberry"])
print(fruits)

# Removing elements
fruits.remove("banana")  # Raises KeyError if not found
fruits.discard("grape")  # No error if not found
popped = fruits.pop()    # Remove and return arbitrary element

# Membership testing (very fast)
print("apple" in fruits)      # True
print("banana" not in fruits) # True

# Set size
print(len(fruits))`,
              explanation: 'Sets automatically handle uniqueness and provide fast membership testing'
            },
            {
              title: 'Set Operations - Mathematical Power',
              code: `# Set operations
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Union (all elements from both sets)
union = set1 | set2
# or: union = set1.union(set2)
print(union)  # {1, 2, 3, 4, 5, 6, 7, 8}

# Intersection (common elements)
intersection = set1 & set2
# or: intersection = set1.intersection(set2)
print(intersection)  # {4, 5}

# Difference (in set1 but not in set2)
difference = set1 - set2
# or: difference = set1.difference(set2)
print(difference)  # {1, 2, 3}

# Symmetric difference (in either set, but not both)
sym_diff = set1 ^ set2
# or: sym_diff = set1.symmetric_difference(set2)
print(sym_diff)  # {1, 2, 3, 6, 7, 8}

# Subset and superset
small_set = {1, 2}
print(small_set.issubset(set1))     # True
print(set1.issuperset(small_set))   # True
print(small_set.isdisjoint(set2))   # True (no common elements)

# Update operations (modify in place)
set1.update({9, 10})              # Add elements
set1.intersection_update(set2)    # Keep only common
set1.difference_update(set2)      # Remove elements in set2`,
              explanation: 'Set operations provide powerful ways to compare and combine collections'
            },
            {
              title: 'Set Comprehensions',
              code: `# Basic set comprehension
squares = {x**2 for x in range(10)}
print(squares)  # {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

# With condition
even_squares = {x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # {0, 4, 16, 36, 64}

# From string (unique characters)
text = "hello world"
unique_chars = {char.lower() for char in text if char.isalpha()}
print(unique_chars)  # {'h', 'e', 'l', 'o', 'w', 'r', 'd'}

# Extract unique lengths
words = ["apple", "banana", "cherry", "date", "fig"]
lengths = {len(word) for word in words}
print(lengths)  # {3, 4, 5, 6}

# Real-world: Extract unique domains
emails = [
    "user1@gmail.com",
    "user2@yahoo.com",
    "user3@gmail.com",
    "user4@outlook.com",
    "user5@gmail.com"
]
domains = {email.split("@")[1] for email in emails}
print(domains)  # {'gmail.com', 'yahoo.com', 'outlook.com'}`,
              explanation: 'Set comprehensions create sets efficiently with automatic deduplication'
            },
            {
              title: 'Real-World: Tag Management System',
              code: `class Article:
    def __init__(self, title, tags):
        self.title = title
        self.tags = set(tags)  # Store as set for uniqueness
    
    def add_tag(self, tag):
        self.tags.add(tag)
    
    def remove_tag(self, tag):
        self.tags.discard(tag)
    
    def has_tag(self, tag):
        return tag in self.tags
    
    def common_tags(self, other):
        """Find tags common with another article"""
        return self.tags & other.tags
    
    def all_tags(self, other):
        """Get all unique tags from both articles"""
        return self.tags | other.tags
    
    def unique_tags(self, other):
        """Tags in this article but not in other"""
        return self.tags - other.tags

# Usage
article1 = Article("Python Basics", ["python", "tutorial", "beginner"])
article2 = Article("Advanced Python", ["python", "advanced", "oop"])

# Add tags (duplicates ignored)
article1.add_tag("programming")
article1.add_tag("python")  # Already exists, no duplicate

print("Article 1 tags:", article1.tags)
print("Article 2 tags:", article2.tags)

# Find common tags
common = article1.common_tags(article2)
print("Common tags:", common)  # {'python'}

# All unique tags
all_tags = article1.all_tags(article2)
print("All tags:", all_tags)

# Tags unique to article1
unique = article1.unique_tags(article2)
print("Unique to article1:", unique)  # {'tutorial', 'beginner', 'programming'}`,
              explanation: 'Sets are perfect for tag systems requiring uniqueness and fast lookups'
            },
            {
              title: 'Real-World: User Permissions',
              code: `# User permission management using sets
class User:
    def __init__(self, username, permissions=None):
        self.username = username
        self.permissions = set(permissions) if permissions else set()
    
    def grant_permission(self, permission):
        self.permissions.add(permission)
    
    def revoke_permission(self, permission):
        self.permissions.discard(permission)
    
    def has_permission(self, permission):
        return permission in self.permissions
    
    def has_all_permissions(self, required_permissions):
        return required_permissions.issubset(self.permissions)
    
    def has_any_permission(self, permissions):
        return bool(self.permissions & permissions)

# Create users with different permissions
admin = User("admin", ["read", "write", "delete", "manage_users"])
editor = User("editor", ["read", "write"])
viewer = User("viewer", ["read"])

# Check permissions
print(admin.has_permission("delete"))  # True
print(editor.has_permission("delete")) # False

# Check if user has all required permissions
required = {"read", "write"}
print(editor.has_all_permissions(required))  # True
print(viewer.has_all_permissions(required))  # False

# Grant new permission
editor.grant_permission("delete")
print(editor.permissions)  # {'read', 'write', 'delete'}

# Check if user has any of the permissions
moderator_perms = {"delete", "manage_users"}
print(admin.has_any_permission(moderator_perms))  # True
print(editor.has_any_permission(moderator_perms)) # True
print(viewer.has_any_permission(moderator_perms)) # False`,
              explanation: 'Sets efficiently manage permissions with fast lookups and set operations'
            }
          ],
          quiz: [
            {
              question: 'What happens when you add a duplicate element to a set?',
              options: [
                'Raises an error',
                'Creates a duplicate entry',
                'Silently ignored - sets contain only unique elements',
                'Replaces the existing element'
              ],
              correctAnswer: 2,
              explanation: 'Sets automatically maintain uniqueness. Adding a duplicate is silently ignored'
            },
            {
              question: 'Which operation finds elements common to both sets?',
              options: [
                'Union (|)',
                'Intersection (&)',
                'Difference (-)',
                'Symmetric difference (^)'
              ],
              correctAnswer: 1,
              explanation: 'Intersection (&) returns elements present in both sets'
            },
            {
              question: 'Can you add a list to a set?',
              options: [
                'Yes, always',
                'No, lists are mutable and cannot be hashed',
                'Yes, but only empty lists',
                'Only if the list contains unique elements'
              ],
              correctAnswer: 1,
              explanation: 'Lists cannot be added to sets because they are mutable. Use frozenset or tuple instead'
            },
            {
              question: 'What is the average time complexity for membership testing in a set?',
              options: [
                'O(n)',
                'O(log n)',
                'O(1)',
                'O(n²)'
              ],
              correctAnswer: 2,
              explanation: 'Sets use hash tables, providing O(1) average time complexity for membership testing'
            }
          ]
        }
      },

      {
        id: 'functions',
        title: 'Functions',
        description: 'Create reusable blocks of code',
        content: {
          overview: 'Functions are reusable blocks of code that perform specific tasks. They help organize code, reduce repetition, and make programs more maintainable. Functions can accept inputs (parameters) and return outputs (return values).',
          keyPoints: [
            'Functions are defined using the def keyword',
            'Parameters allow passing data to functions',
            'Return values send data back from functions',
            'Functions can have default parameter values',
            'Scope determines where variables are accessible'
          ],
          useCases: [
            {
              title: 'Code Reusability',
              description: 'Write once, use many times',
              example: 'def calculate_tax(amount): return amount * 0.08'
            },
            {
              title: 'Abstraction',
              description: 'Hide complex logic behind simple interfaces',
              example: 'send_email(to, subject, body) hides email complexity'
            },
            {
              title: 'Modularity',
              description: 'Break large programs into manageable pieces',
              example: 'validate_input(), process_data(), display_results()'
            },
            {
              title: 'Testing',
              description: 'Test individual components independently',
              example: 'Test each function separately for reliability'
            }
          ],
          dos: [
            'Give functions descriptive names that indicate their purpose',
            'Keep functions focused on a single task',
            'Use docstrings to document function behavior',
            'Return values instead of printing when possible',
            'Use type hints for parameters and return values'
          ],
          donts: [
            'Don\'t create functions that are too long (>20-30 lines)',
            'Don\'t use global variables inside functions when avoidable',
            'Don\'t modify mutable arguments unexpectedly',
            'Don\'t forget to return a value when needed',
            'Don\'t use too many parameters (>5 suggests refactoring needed)'
          ],
          bestPractices: [
            'One function should do one thing well',
            'Use default parameters for optional values',
            'Document complex functions with docstrings',
            'Validate input parameters',
            'Use meaningful parameter names'
          ],
          codeExamples: [
            {
              title: 'Basic Function Definition',
              code: `# Simple function with no parameters
def greet():
    print("Hello, World!")

greet()  # Call the function

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")  # Hello, Alice!

# Function with return value
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8

# Function with multiple return values
def get_user_info():
    return "Alice", 25, "alice@example.com"

name, age, email = get_user_info()`,
              explanation: 'Functions encapsulate code. Use parameters for inputs and return for outputs. Multiple values can be returned as a tuple.'
            },
            {
              title: 'Default Parameters and Keyword Arguments',
              code: `# Default parameter values
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))              # Hello, Alice!
print(greet("Bob", "Hi"))          # Hi, Bob!
print(greet("Charlie", greeting="Hey"))  # Hey, Charlie!

# Multiple defaults
def create_profile(name, age=18, country="USA"):
    return {
        "name": name,
        "age": age,
        "country": country
    }

profile1 = create_profile("Alice")
profile2 = create_profile("Bob", 25)
profile3 = create_profile("Charlie", country="UK")

# Keyword arguments (any order)
def calculate_bmi(weight, height):
    return weight / (height ** 2)

bmi = calculate_bmi(height=1.75, weight=70)`,
              explanation: 'Default parameters provide fallback values. Keyword arguments allow specifying parameters by name in any order.'
            },
            {
              title: 'Variable-length Arguments',
              code: `# *args - accepts any number of positional arguments
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))        # 6
print(sum_all(1, 2, 3, 4, 5))  # 15

# **kwargs - accepts any number of keyword arguments
def print_user_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_user_info(name="Alice", age=25, city="NYC")

# Combining all parameter types
def complex_function(pos1, pos2, *args, default="value", **kwargs):
    print(f"Positional: {pos1}, {pos2}")
    print(f"Args: {args}")
    print(f"Default: {default}")
    print(f"Kwargs: {kwargs}")

complex_function(1, 2, 3, 4, default="custom", extra="data")`,
              explanation: '*args collects extra positional arguments into a tuple. **kwargs collects extra keyword arguments into a dictionary.'
            },
            {
              title: 'Lambda Functions',
              code: `# Lambda - anonymous single-expression functions
square = lambda x: x ** 2
print(square(5))  # 25

add = lambda a, b: a + b
print(add(3, 7))  # 10

# Common use with built-in functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Filtering
even = list(filter(lambda x: x % 2 == 0, numbers))
print(even)  # [2, 4]

# Sorting with key
students = [
    {"name": "Alice", "grade": 85},
    {"name": "Bob", "grade": 92},
    {"name": "Charlie", "grade": 78}
]
sorted_students = sorted(students, key=lambda s: s["grade"], reverse=True)

# When to use: simple, one-time operations
# When not to use: complex logic (use def instead)`,
              explanation: 'Lambda functions are compact one-line functions. Useful for simple operations, especially with map(), filter(), sorted().'
            },
            {
              title: 'Docstrings and Type Hints',
              code: `def calculate_discount(price: float, discount_percent: float = 10) -> float:
    """
    Calculate the discounted price of an item.
    
    Args:
        price (float): The original price of the item
        discount_percent (float): The discount percentage (default: 10)
    
    Returns:
        float: The price after applying the discount
    
    Examples:
        >>> calculate_discount(100, 20)
        80.0
        >>> calculate_discount(50)
        45.0
    
    Raises:
        ValueError: If price or discount_percent is negative
    """
    if price < 0 or discount_percent < 0:
        raise ValueError("Price and discount must be non-negative")
    
    discount_amount = price * (discount_percent / 100)
    return price - discount_amount

# Access docstring
print(calculate_discount.__doc__)

# Type hints help IDEs and tools
def process_data(data: list[int]) -> dict[str, int]:
    return {
        "sum": sum(data),
        "count": len(data),
        "average": sum(data) // len(data) if data else 0
    }`,
              explanation: 'Docstrings document functions. Type hints specify expected types (not enforced at runtime but useful for tools).'
            }
          ]
        },
        quiz: [
          {
            question: 'What does a function return if no return statement is specified?',
            options: ['0', 'None', 'Empty string', 'Error'],
            correctAnswer: 1,
            explanation: 'Functions without a return statement implicitly return None.'
          },
          {
            question: 'What is the purpose of *args in a function definition?',
            options: ['Multiply arguments', 'Accept variable positional arguments', 'Create pointers', 'Unpack lists'],
            correctAnswer: 1,
            explanation: '*args allows a function to accept any number of positional arguments as a tuple.'
          },
          {
            question: 'Which is true about lambda functions?',
            options: ['Can have multiple statements', 'Can only have one expression', 'Must have a name', 'Cannot take parameters'],
            correctAnswer: 1,
            explanation: 'Lambda functions are limited to a single expression and return its value implicitly.'
          },
          {
            question: 'What is the correct way to document a function in Python?',
            options: ['# comment', '/* comment */', '"""docstring"""', '// comment'],
            correctAnswer: 2,
            explanation: 'Triple-quoted strings (docstrings) are the standard way to document Python functions.'
          }
        ]
      }
    ]
  },
  
  advanced: {
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
        description: 'Learn classes, objects, and OOP principles',
        content: {
          overview: 'Object-Oriented Programming (OOP) is a programming paradigm based on objects that contain data (attributes) and code (methods). OOP helps organize complex programs, promotes code reuse, and models real-world entities effectively.',
          keyPoints: [
            'Classes are blueprints for creating objects',
            'Objects are instances of classes',
            'Encapsulation bundles data and methods together',
            'Inheritance allows classes to inherit from others',
            'Polymorphism enables using objects of different types uniformly'
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
              title: 'Creating Classes and Objects',
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
              title: 'Encapsulation and Properties',
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
        return f"Account({self.owner}: ${self.__balance})"

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
              title: 'Inheritance',
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
      }
    ]
  },
  
  professional: {
    topics: [
      {
        id: 'design-patterns',
        title: 'Design Patterns',
        description: 'Common solutions to recurring problems',
        content: {
          overview: 'Design patterns are proven solutions to common software design problems. They represent best practices evolved over time and provide a shared vocabulary for developers. Understanding design patterns improves code quality and communication.',
          keyPoints: [
            'Patterns provide tested solutions to common problems',
            'They improve code readability and maintainability',
            'Patterns facilitate communication between developers',
            'Three main categories: Creational, Structural, Behavioral',
            'Don\'t force patterns - use when appropriate'
          ],
          useCases: [
            {
              title: 'Singleton Pattern',
              description: 'Ensure only one instance exists',
              example: 'Database connection manager, configuration handler'
            },
            {
              title: 'Factory Pattern',
              description: 'Create objects without specifying exact class',
              example: 'Document creator (PDF, Word, etc.)'
            },
            {
              title: 'Observer Pattern',
              description: 'Notify multiple objects of state changes',
              example: 'Event systems, data binding, MVC frameworks'
            },
            {
              title: 'Strategy Pattern',
              description: 'Switch algorithms at runtime',
              example: 'Payment methods, sorting algorithms, compression'
            }
          ],
          dos: [
            'Understand the problem before applying a pattern',
            'Use patterns to solve real problems, not for their own sake',
            'Adapt patterns to fit your specific needs',
            'Document which patterns you\'re using',
            'Learn the intent and applicability of each pattern'
          ],
          donts: [
            'Don\'t overcomplicate simple problems with patterns',
            'Don\'t force a pattern where it doesn\'t fit',
            'Don\'t use patterns just to show off knowledge',
            'Don\'t ignore simpler solutions',
            'Don\'t create rigid, inflexible implementations'
          ],
          bestPractices: [
            'Start simple, add patterns as needed',
            'Understand trade-offs of each pattern',
            'Combine patterns when appropriate',
            'Keep implementations clean and understandable',
            'Consider Python\'s unique features (decorators, etc.)'
          ],
          codeExamples: [
            {
              title: 'Singleton Pattern',
              code: `# Ensure only one instance of a class exists
class DatabaseConnection:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.connected = False
        return cls._instance
    
    def connect(self):
        if not self.connected:
            print("Connecting to database...")
            self.connected = True
    
    def query(self, sql):
        if self.connected:
            return f"Executing: {sql}"
        return "Not connected"

# Usage
db1 = DatabaseConnection()
db2 = DatabaseConnection()

print(db1 is db2)  # True - same instance!
db1.connect()
print(db2.connected)  # True - shared state

# Alternative using decorator
def singleton(cls):
    instances = {}
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return get_instance

@singleton
class Config:
    def __init__(self):
        self.settings = {}`,
              explanation: 'Singleton ensures only one instance exists. Useful for resources that should be shared (database connections, configs).'
            },
            {
              title: 'Factory Pattern',
              code: `# Factory creates objects based on conditions
from abc import ABC, abstractmethod

class Document(ABC):
    @abstractmethod
    def create(self):
        pass

class PDFDocument(Document):
    def create(self):
        return "Creating PDF document"

class WordDocument(Document):
    def create(self):
        return "Creating Word document"

class ExcelDocument(Document):
    def create(self):
        return "Creating Excel document"

# Factory class
class DocumentFactory:
    @staticmethod
    def create_document(doc_type):
        if doc_type == "pdf":
            return PDFDocument()
        elif doc_type == "word":
            return WordDocument()
        elif doc_type == "excel":
            return ExcelDocument()
        else:
            raise ValueError(f"Unknown document type: {doc_type}")

# Usage
factory = DocumentFactory()
doc1 = factory.create_document("pdf")
doc2 = factory.create_document("word")

print(doc1.create())  # Creating PDF document
print(doc2.create())  # Creating Word document

# More Pythonic approach using dictionary
class DocumentFactory2:
    _creators = {
        "pdf": PDFDocument,
        "word": WordDocument,
        "excel": ExcelDocument
    }
    
    @classmethod
    def create_document(cls, doc_type):
        creator = cls._creators.get(doc_type)
        if not creator:
            raise ValueError(f"Unknown type: {doc_type}")
        return creator()`,
              explanation: 'Factory pattern centralizes object creation logic, making code more flexible and easier to extend with new types.'
            }
          ]
        },
        quiz: [
          {
            question: 'What is the main purpose of the Singleton pattern?',
            options: ['Create multiple instances', 'Ensure only one instance exists', 'Delete instances', 'Copy instances'],
            correctAnswer: 1,
            explanation: 'Singleton ensures a class has only one instance and provides global access to it.'
          },
          {
            question: 'When should you use design patterns?',
            options: ['Always', 'Never', 'When they solve a real problem', 'Only in large projects'],
            correctAnswer: 2,
            explanation: 'Design patterns should be used when they provide a clear benefit and solve a real problem, not just for the sake of using them.'
          }
        ]
      }
    ]
  }
};

export default courseData;
