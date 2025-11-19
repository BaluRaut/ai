export const beginner = {
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
            explanation: 'Python is an interpreted language, meaning code is executed line by line without prior compilation.',
            difficulty: 'easy'
          },
          {
            question: 'Which symbol is used for single-line comments in Python?',
            options: ['//', '/*', '#', '<!--'],
            correctAnswer: 2,
            explanation: 'The # symbol is used for single-line comments in Python.',
            difficulty: 'easy'
          },
          {
            question: 'What is the recommended indentation in Python?',
            options: ['2 spaces', '4 spaces', '1 tab', 'Any amount'],
            correctAnswer: 1,
            explanation: 'PEP 8 recommends using 4 spaces for indentation.',
            difficulty: 'easy'
          },
          {
            question: 'Who created Python?',
            options: ['Dennis Ritchie', 'Guido van Rossum', 'James Gosling', 'Bjarne Stroustrup'],
            correctAnswer: 1,
            explanation: 'Guido van Rossum created Python and released it in 1991.',
            difficulty: 'easy'
          },
          {
            question: 'What is the file extension for Python files?',
            options: ['.python', '.py', '.pt', '.pyt'],
            correctAnswer: 1,
            explanation: 'Python files use the .py extension.',
            difficulty: 'easy'
          },
          {
            question: 'Which of these is NOT a Python keyword?',
            options: ['if', 'while', 'switch', 'for'],
            correctAnswer: 2,
            explanation: 'Python does not have a switch statement. Use if-elif-else instead.',
            difficulty: 'medium'
          },
          {
            question: 'What does PEP stand for?',
            options: ['Python Enhancement Proposal', 'Python Executable Program', 'Python Error Protocol', 'Python Extension Pack'],
            correctAnswer: 0,
            explanation: 'PEP stands for Python Enhancement Proposal, which are design documents for Python.',
            difficulty: 'medium'
          },
          {
            question: 'Which version of Python is recommended for new projects?',
            options: ['Python 2.7', 'Python 3.x', 'Python 1.5', 'Either 2 or 3'],
            correctAnswer: 1,
            explanation: 'Python 3.x is recommended as Python 2 reached end of life in 2020.',
            difficulty: 'easy'
          },
          {
            question: 'What is the Zen of Python?',
            options: ['A meditation app', 'Python design principles', 'A debugging tool', 'A code editor'],
            correctAnswer: 1,
            explanation: 'The Zen of Python (PEP 20) is a collection of 19 guiding principles for Python design. Type "import this" to see it.',
            difficulty: 'medium'
          },
          {
            question: 'How do you start the Python interactive interpreter?',
            options: ['python', 'start python', 'run python', 'execute python'],
            correctAnswer: 0,
            explanation: 'Type "python" or "python3" in the command line to start the interactive interpreter.',
            difficulty: 'easy'
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
      },

      {
        id: 'tokens-keywords',
        title: 'Python Tokens and Keywords',
        description: 'Understanding the building blocks of Python code',
        content: {
          overview: 'Tokens are the smallest units of a Python program. They include keywords, identifiers, literals, operators, and delimiters. Keywords are reserved words with special meaning that cannot be used as variable names.',
          keyPoints: [
            'Python has 35 reserved keywords (as of Python 3.11)',
            'Keywords are case-sensitive (True, False, None)',
            'Cannot use keywords as variable/function names',
            'Some keywords are soft keywords (match, case in Python 3.10+)',
            'Use keyword module to list all keywords'
          ],
          useCases: [
            {
              title: 'Control Flow Keywords',
              description: 'if, elif, else, for, while, break, continue, pass',
              example: 'Control program execution flow'
            },
            {
              title: 'Function and Class Keywords',
              description: 'def, class, return, yield, lambda',
              example: 'Define functions, classes, and generators'
            },
            {
              title: 'Logic Keywords',
              description: 'and, or, not, in, is',
              example: 'Boolean operations and membership testing'
            },
            {
              title: 'Exception Keywords',
              description: 'try, except, finally, raise, assert',
              example: 'Error handling and debugging'
            }
          ],
          dos: [
            'Use keywords correctly according to Python syntax',
            'Learn the purpose of each keyword',
            'Use meaningful identifiers instead of keywords',
            'Check if a word is a keyword using keyword.iskeyword()',
            'Follow PEP 8 naming conventions for identifiers'
          ],
          donts: [
            'Don\'t use keywords as variable names',
            'Don\'t misspell keywords (e.g., Def instead of def)',
            'Don\'t use reserved words from other languages',
            'Don\'t create identifiers that look like keywords',
            'Don\'t ignore case sensitivity in keywords'
          ],
          bestPractices: [
            'Memorize commonly used keywords',
            'Use IDE with syntax highlighting',
            'Understand keyword context and usage',
            'Keep updated with new keywords in Python versions',
            'Use descriptive names for identifiers'
          ],
          codeExamples: [
            {
              title: 'All Python Keywords',
              code: `# Import keyword module
import keyword

# List all keywords
print("Python Keywords:")
print(keyword.kwlist)

# Check if a word is a keyword
print(keyword.iskeyword('if'))      # True
print(keyword.iskeyword('hello'))   # False

# Output (Python 3.11):
# ['False', 'None', 'True', 'and', 'as', 'assert', 
#  'async', 'await', 'break', 'class', 'continue', 
#  'def', 'del', 'elif', 'else', 'except', 'finally', 
#  'for', 'from', 'global', 'if', 'import', 'in', 
#  'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 
#  'raise', 'return', 'try', 'while', 'with', 'yield']`,
              explanation: 'Python provides the keyword module to work with keywords programmatically'
            },
            {
              title: 'Keywords in Action',
              code: `# Control flow keywords
if True:
    pass  # pass is a null operation
elif False:
    continue  # skip (only in loops)
else:
    break  # exit loop (only in loops)

# Function keywords
def my_function():
    return "Hello"  # return value

# Lambda (anonymous function)
square = lambda x: x ** 2

# Class keyword
class MyClass:
    pass

# Logic keywords
result = True and False  # False
result = True or False   # True
result = not True        # False

# Membership keywords
print(5 in [1, 2, 3, 4, 5])  # True
print(5 is 5)                # True

# Exception keywords
try:
    risky_operation()
except Exception as e:
    print(f"Error: {e}")
finally:
    print("Cleanup")`,
              explanation: 'Different categories of keywords serve different purposes in Python programming'
            },
            {
              title: 'Common Keyword Mistakes',
              code: `# ❌ WRONG - using keywords as variable names
# class = "Math"      # SyntaxError
# for = 10            # SyntaxError
# if = True           # SyntaxError

# ✅ CORRECT - use descriptive names instead
class_name = "Math"
iteration_count = 10
condition = True

# ❌ WRONG - case sensitivity
# IF x > 5:           # NameError (IF is not defined)
# DEF my_func():      # SyntaxError

# ✅ CORRECT - proper case
if x > 5:
    print("Greater")

def my_func():
    return "Success"

# ❌ WRONG - reserved in other contexts
# None = 5            # SyntaxError (None is a constant)
# True = False        # SyntaxError

# ✅ CORRECT
value = None
is_valid = True`,
              explanation: 'Keywords are case-sensitive and cannot be used as variable names'
            }
          ]
        },
        quiz: [
          {
            question: 'How many keywords does Python 3.11 have?',
            options: ['25', '30', '35', '40'],
            correctAnswer: 2,
            explanation: 'Python 3.11 has 35 reserved keywords'
          },
          {
            question: 'Which of these is NOT a Python keyword?',
            options: ['pass', 'continue', 'next', 'break'],
            correctAnswer: 2,
            explanation: 'next is a built-in function, not a keyword. pass, continue, and break are keywords'
          },
          {
            question: 'What module can you use to check Python keywords?',
            options: ['sys', 'keyword', 'builtins', 'tokens'],
            correctAnswer: 1,
            explanation: 'The keyword module provides functions to work with Python keywords'
          }
        ]
      },

      {
        id: 'identifiers-naming',
        title: 'Identifiers and Naming Rules',
        description: 'Learn how to name variables, functions, and classes properly',
        content: {
          overview: 'Identifiers are names given to variables, functions, classes, modules, and other objects. Python has specific rules for valid identifiers and conventions for readable, maintainable code.',
          keyPoints: [
            'Identifiers can contain letters, digits, and underscores',
            'Must start with a letter (a-z, A-Z) or underscore (_)',
            'Cannot start with a digit',
            'Case-sensitive (Name and name are different)',
            'Cannot be a Python keyword'
          ],
          useCases: [
            {
              title: 'Variable Names',
              description: 'Store data values with descriptive names',
              example: 'user_age, total_price, is_valid'
            },
            {
              title: 'Function Names',
              description: 'Name functions describing what they do',
              example: 'calculate_total(), send_email(), validate_input()'
            },
            {
              title: 'Class Names',
              description: 'Name classes using CapWords convention',
              example: 'UserAccount, ShoppingCart, DatabaseManager'
            },
            {
              title: 'Constants',
              description: 'Use UPPERCASE for constants',
              example: 'MAX_SIZE, PI, DEFAULT_TIMEOUT'
            }
          ],
          dos: [
            'Use descriptive and meaningful names',
            'Follow snake_case for variables and functions',
            'Use CapWords (PascalCase) for class names',
            'Use UPPERCASE for constants',
            'Keep names concise but clear'
          ],
          donts: [
            'Don\'t use single letters except in loops (i, j, k)',
            'Don\'t start names with numbers',
            'Don\'t use special characters (@, #, $, etc.)',
            'Don\'t use Python keywords as names',
            'Don\'t create ambiguous or cryptic names'
          ],
          bestPractices: [
            'Use verb_noun for function names: get_user(), calculate_total()',
            'Use is/has prefix for boolean variables: is_active, has_permission',
            'Avoid abbreviations unless widely understood',
            'Be consistent with naming conventions across project',
            'Use single underscore prefix for internal/private names'
          ],
          codeExamples: [
            {
              title: 'Valid vs Invalid Identifiers',
              code: `# ✅ VALID identifiers
user_name = "Alice"
user2 = "Bob"
_private_var = 42
firstName = "John"     # camelCase (not recommended)
first_name = "Jane"    # snake_case (recommended)
UserAccount = "Class"  # CapWords (for classes)
MAX_SIZE = 100         # UPPERCASE (for constants)

# ❌ INVALID identifiers
# 2users = "Invalid"        # Cannot start with digit
# user-name = "Invalid"     # Hyphen not allowed
# user name = "Invalid"     # Spaces not allowed
# user@name = "Invalid"     # Special chars not allowed
# for = "Invalid"           # Cannot use keywords
# $price = "Invalid"        # Dollar sign not allowed

# Valid but confusing (avoid)
l = 1           # Looks like 1
O = 0           # Looks like 0
I = 1           # Looks like l`,
              explanation: 'Follow Python naming rules to avoid syntax errors'
            },
            {
              title: 'Naming Conventions (PEP 8)',
              code: `# Variables and Functions - snake_case
user_age = 25
total_amount = 1500.50
is_logged_in = True

def calculate_tax(amount):
    return amount * 0.1

def send_welcome_email(user_email):
    pass

# Classes - CapWords (PascalCase)
class UserAccount:
    pass

class ShoppingCart:
    pass

class DatabaseConnection:
    pass

# Constants - UPPERCASE with underscores
PI = 3.14159
MAX_CONNECTIONS = 100
DEFAULT_TIMEOUT = 30
DATABASE_URL = "localhost:5432"

# Private/Internal - leading underscore
_internal_cache = {}
_helper_function = lambda x: x * 2

# Special - double underscores (name mangling)
class MyClass:
    def __init__(self):
        self.__private_attr = "secret"
    
# Module-level private
_module_private_var = "internal use only"`,
              explanation: 'Following PEP 8 conventions makes code readable and maintainable'
            },
            {
              title: 'Descriptive Names',
              code: `# ❌ BAD - unclear, abbreviated
def calc(a, b):
    return a * b + (a * b * 0.1)

x = calc(100, 5)

# ✅ GOOD - clear, descriptive
def calculate_total_with_tax(price, quantity):
    subtotal = price * quantity
    tax = subtotal * 0.1
    return subtotal + tax

total_price = calculate_total_with_tax(100, 5)

# ❌ BAD - cryptic names
def proc_data(d):
    r = []
    for i in d:
        if i > 0:
            r.append(i * 2)
    return r

# ✅ GOOD - meaningful names
def process_positive_numbers(numbers):
    doubled_positives = []
    for number in numbers:
        if number > 0:
            doubled_positives.append(number * 2)
    return doubled_positives

# Boolean variables - use is/has prefix
is_active = True
has_permission = False
can_edit = True
should_notify = False

# Collections - use plural names
users = ["Alice", "Bob", "Charlie"]
prices = [10.99, 25.50, 5.00]
user_dict = {"name": "Alice", "age": 30}`,
              explanation: 'Descriptive names make code self-documenting and easier to understand'
            }
          ]
        },
        quiz: [
          {
            question: 'Which is a valid Python identifier?',
            options: ['2variable', 'variable_2', 'variable-2', 'variable name'],
            correctAnswer: 1,
            explanation: 'variable_2 is valid. Identifiers can contain letters, digits, and underscores, but cannot start with a digit or contain hyphens/spaces'
          },
          {
            question: 'What naming convention does PEP 8 recommend for function names?',
            options: ['camelCase', 'snake_case', 'PascalCase', 'UPPERCASE'],
            correctAnswer: 1,
            explanation: 'PEP 8 recommends snake_case for function and variable names'
          },
          {
            question: 'Which naming style is recommended for class names?',
            options: ['snake_case', 'camelCase', 'CapWords', 'lowercase'],
            correctAnswer: 2,
            explanation: 'CapWords (also known as PascalCase) is recommended for class names in Python'
          }
        ]
      },

      {
        id: 'literals-types',
        title: 'Python Literals',
        description: 'Understanding different types of literal values',
        content: {
          overview: 'Literals are fixed values that appear directly in code. Python supports numeric literals (integers, floats, complex), string literals, boolean literals (True/False), and special literal None. Understanding literals is fundamental to working with data.',
          keyPoints: [
            'Numeric literals: integers, floats, complex numbers',
            'String literals: single, double, triple quotes',
            'Boolean literals: True and False (capitalized)',
            'None literal: represents absence of value',
            'Collection literals: lists [], tuples (), dicts {}, sets {}'
          ],
          useCases: [
            {
              title: 'Numeric Calculations',
              description: 'Direct number values in expressions',
              example: 'total = 100 + 50 * 1.5'
            },
            {
              title: 'String Messages',
              description: 'Fixed text values in programs',
              example: 'greeting = "Welcome to Python!"'
            },
            {
              title: 'Boolean Flags',
              description: 'True/False conditions',
              example: 'is_active = True, debug_mode = False'
            },
            {
              title: 'Default Values',
              description: 'None for uninitialized variables',
              example: 'user_input = None'
            }
          ],
          dos: [
            'Use appropriate literal types for your data',
            'Use triple quotes for multi-line strings',
            'Use raw strings (r"") for regular expressions',
            'Use underscores in large numbers for readability',
            'Use None for missing/undefined values'
          ],
          donts: [
            'Don\'t use quotes around numeric literals',
            'Don\'t confuse 0/1 with False/True',
            'Don\'t use empty strings for None',
            'Don\'t ignore decimal precision in float literals',
            'Don\'t mix number bases without clarity'
          ],
          bestPractices: [
            'Use f-strings for string formatting (Python 3.6+)',
            'Use scientific notation for very large/small numbers',
            'Use explicit type conversion when needed',
            'Document complex number usage',
            'Use constants for repeated literal values'
          ],
          codeExamples: [
            {
              title: 'Numeric Literals',
              code: `# Integer literals
decimal = 100
binary = 0b1100100      # Binary (base 2)
octal = 0o144           # Octal (base 8)
hexadecimal = 0x64      # Hexadecimal (base 16)

print(decimal, binary, octal, hexadecimal)  # All print 100

# Underscore for readability (Python 3.6+)
million = 1_000_000
billion = 1_000_000_000

# Float literals
pi = 3.14159
price = 19.99
negative = -42.5

# Scientific notation
speed_of_light = 3.0e8        # 3.0 × 10^8
planck = 6.626e-34            # 6.626 × 10^-34

# Complex numbers
complex1 = 3 + 4j
complex2 = complex(3, 4)       # Same as 3 + 4j

print(complex1.real)           # 3.0
print(complex1.imag)           # 4.0`,
              explanation: 'Python supports various numeric literal formats for different bases and types'
            },
            {
              title: 'String Literals',
              code: `# Single and double quotes
single = 'Hello'
double = "World"
quote_inside = "He said 'Hello'"
apostrophe = 'It\\'s Python'

# Triple quotes for multi-line
multi_line = """
This is a multi-line string.
It can span multiple lines.
Useful for documentation.
"""

paragraph = '''
Another way to write
multi-line strings
using triple single quotes.
'''

# Raw strings (ignore escape sequences)
path = r"C:\\Users\\name\\file.txt"
regex = r"\\d+\\.\\d+"

# Unicode strings
unicode_str = "Hello 世界 🐍"
emoji = "Python is 🔥"

# Formatted strings (f-strings)
name = "Alice"
age = 30
message = f"My name is {name} and I'm {age} years old"
calculation = f"2 + 2 = {2 + 2}"

# String concatenation with +
full_name = "John" + " " + "Doe"`,
              explanation: 'Python offers flexible string literal syntax for different use cases'
            },
            {
              title: 'Boolean and None Literals',
              code: `# Boolean literals (capitalized!)
is_active = True
is_completed = False

# Common boolean expressions
result = (5 > 3)              # True
comparison = (10 == 20)       # False

# None literal (absence of value)
user_input = None
result = None
optional_parameter = None

# Checking None
if user_input is None:
    print("No input provided")

# None vs False vs 0
print(None == False)    # False
print(None == 0)        # False
print(None is None)     # True

# Truthy and Falsy values
# Falsy: False, None, 0, 0.0, "", [], {}, ()
# Truthy: Everything else

if None:
    print("Won't print")
    
if 0:
    print("Won't print")
    
if "":
    print("Won't print")
    
if "Hello":
    print("Will print!")   # Non-empty string is truthy`,
              explanation: 'Boolean and None literals are fundamental for control flow and representing absence of values'
            },
            {
              title: 'Collection Literals',
              code: `# List literal
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

# Tuple literal
coordinates = (10, 20)
rgb = (255, 128, 0)
single_item = (42,)    # Comma required for single-item tuple

# Dictionary literal
user = {
    "name": "Alice",
    "age": 30,
    "email": "alice@example.com"
}

prices = {"apple": 0.50, "banana": 0.30}

# Set literal
unique_numbers = {1, 2, 3, 4, 5}
colors = {"red", "green", "blue"}

# Empty collections
empty_list = []
empty_tuple = ()
empty_dict = {}
empty_set = set()      # Cannot use {} - that's a dict!

# Nested collections
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
students = [
    {"name": "Alice", "grade": 85},
    {"name": "Bob", "grade": 90}
]`,
              explanation: 'Collection literals provide convenient syntax for creating data structures'
            }
          ]
        },
        quiz: [
          {
            question: 'Which is a valid way to write one million in Python?',
            options: ['1000000', '1_000_000', 'Both A and B', 'Neither'],
            correctAnswer: 2,
            explanation: 'Both 1000000 and 1_000_000 are valid. Underscores improve readability (Python 3.6+)'
          },
          {
            question: 'What does the literal 0b1010 represent?',
            options: ['1010 in decimal', '10 in decimal', '8 in decimal', 'Invalid syntax'],
            correctAnswer: 1,
            explanation: '0b1010 is a binary literal representing decimal 10 (1×8 + 0×4 + 1×2 + 0×1)'
          },
          {
            question: 'Which statement about None is correct?',
            options: ['None == 0', 'None == False', 'None is None', 'None == ""'],
            correctAnswer: 2,
            explanation: 'None is a unique object. Use "is" operator to check for None, not "=="'
          }
        ]
      },

      {
        id: 'python-comments',
        title: 'Comments and Documentation',
        description: 'Writing clear comments and docstrings',
        content: {
          overview: 'Comments are annotations in code that Python ignores during execution. They explain what code does, why decisions were made, and how to use functions/classes. Good comments make code maintainable and collaborative.',
          keyPoints: [
            'Single-line comments start with #',
            'Multi-line comments use triple quotes (""" or \'\'\')',
            'Docstrings document modules, classes, functions',
            'Comments explain WHY, not WHAT (code shows what)',
            'Keep comments up-to-date with code changes'
          ],
          useCases: [
            {
              title: 'Code Explanation',
              description: 'Clarify complex logic or algorithms',
              example: '# Using binary search for O(log n) performance'
            },
            {
              title: 'Function Documentation',
              description: 'Describe function purpose, parameters, returns',
              example: 'Docstrings with parameter descriptions'
            },
            {
              title: 'TODO Markers',
              description: 'Mark incomplete or planned features',
              example: '# TODO: Add error handling for network failures'
            },
            {
              title: 'Debugging',
              description: 'Temporarily disable code',
              example: '# print(debug_info)  # Commented out for production'
            }
          ],
          dos: [
            'Write clear, concise comments',
            'Use docstrings for all public functions/classes',
            'Explain WHY code exists, not just what it does',
            'Keep comments up-to-date',
            'Use TODO, FIXME, NOTE markers for special comments'
          ],
          donts: [
            'Don\'t state the obvious (# increment x by 1)',
            'Don\'t write novels - be concise',
            'Don\'t leave outdated comments',
            'Don\'t comment out large blocks permanently',
            'Don\'t use comments to hide bad code names'
          ],
          bestPractices: [
            'Self-documenting code reduces need for comments',
            'Use docstrings that tools can extract',
            'Follow PEP 257 for docstring conventions',
            'Explain complex algorithms with references',
            'Use inline comments sparingly'
          ],
          codeExamples: [
            {
              title: 'Single-Line Comments',
              code: `# This is a single-line comment
print("Hello")  # This comment is at end of line

# Calculate total price with tax
price = 100
tax_rate = 0.1
total = price + (price * tax_rate)  # 100 + 10 = 110

# Comments can span multiple lines
# by using # at the start of each line
# This is useful for longer explanations

# Good comments explain WHY
# ✅ GOOD - explains reasoning
# Using dict for O(1) lookup instead of list O(n)
user_cache = {}

# ❌ BAD - states the obvious
# Set x to 5
x = 5

# Special markers
# TODO: Add input validation
# FIXME: Handle division by zero
# NOTE: This assumes positive input
# HACK: Temporary workaround for bug #123`,
              explanation: 'Single-line comments start with # and extend to end of line'
            },
            {
              title: 'Docstrings - Function Documentation',
              code: `def calculate_bmi(weight, height):
    """
    Calculate Body Mass Index (BMI).
    
    BMI = weight(kg) / height(m)²
    
    Args:
        weight (float): Weight in kilograms
        height (float): Height in meters
    
    Returns:
        float: BMI value rounded to 2 decimal places
    
    Raises:
        ValueError: If weight or height is negative
    
    Examples:
        >>> calculate_bmi(70, 1.75)
        22.86
        >>> calculate_bmi(85, 1.80)
        26.23
    """
    if weight <= 0 or height <= 0:
        raise ValueError("Weight and height must be positive")
    
    bmi = weight / (height ** 2)
    return round(bmi, 2)

# Access docstring
print(calculate_bmi.__doc__)

# Use help() to see documentation
help(calculate_bmi)`,
              explanation: 'Docstrings are the first statement in a function/class. Triple quotes allow multi-line text'
            },
            {
              title: 'Class and Module Docstrings',
              code: `"""
User Management Module

This module provides classes and functions for managing user accounts,
authentication, and permissions.

Author: Your Name
Date: 2025-11-18
Version: 1.0
"""

class UserAccount:
    """
    Represents a user account in the system.
    
    This class handles user information, authentication,
    and permission management.
    
    Attributes:
        username (str): Unique username
        email (str): User's email address
        is_active (bool): Account active status
        created_at (datetime): Account creation timestamp
    
    Methods:
        authenticate(password): Verify user credentials
        update_email(new_email): Change user email
        deactivate(): Disable the account
    """
    
    def __init__(self, username, email):
        """
        Initialize a new user account.
        
        Args:
            username (str): Unique username (3-20 chars)
            email (str): Valid email address
        
        Raises:
            ValueError: If username/email is invalid
        """
        self.username = username
        self.email = email
        self.is_active = True
    
    def authenticate(self, password):
        """
        Verify user password.
        
        Args:
            password (str): Password to check
        
        Returns:
            bool: True if password is correct, False otherwise
        """
        # Authentication logic here
        pass`,
              explanation: 'Module and class docstrings provide high-level documentation. Use consistent format (Google, NumPy, or Sphinx style)'
            },
            {
              title: 'Commenting Best Practices',
              code: `# ❌ BAD COMMENTS - Too obvious
x = x + 1  # Add 1 to x
print(name)  # Print name

# ✅ GOOD COMMENTS - Explain WHY
x = x + 1  # Adjust for 1-based indexing

# ❌ BAD - Using comment instead of good naming
# t is temp in celsius
t = 25

# ✅ GOOD - Self-documenting variable name
temperature_celsius = 25

# ❌ BAD - Commented-out code
# old_function()
# legacy_code()
# x = 10

# ✅ GOOD - Remove old code, use version control
# If you need it, Git history has it!

# ✅ GOOD - Explain complex algorithm
def quicksort(arr):
    """Sort array using quicksort algorithm."""
    # Base case: arrays with 0-1 elements are already sorted
    if len(arr) <= 1:
        return arr
    
    # Choose pivot (middle element for better average case)
    pivot = arr[len(arr) // 2]
    
    # Partition into three groups
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    # Recursively sort and combine
    return quicksort(left) + middle + quicksort(right)

# ✅ GOOD - Document assumptions
def process_data(data):
    """Process user data.
    
    Assumes data is already validated and sanitized.
    Expects data format: {"name": str, "age": int}
    """
    pass`,
              explanation: 'Good comments explain complex logic, assumptions, and reasoning. Code should be self-explanatory where possible'
            }
          ]
        },
        quiz: [
          {
            question: 'What character starts a single-line comment in Python?',
            options: ['//', '/*', '#', '--'],
            correctAnswer: 2,
            explanation: 'The # character starts a single-line comment in Python'
          },
          {
            question: 'What are docstrings used for?',
            options: [
              'Temporarily disabling code',
              'Documenting modules, classes, and functions',
              'Multi-line calculations',
              'Error messages'
            ],
            correctAnswer: 1,
            explanation: 'Docstrings are string literals used to document code. They can be accessed via __doc__ attribute'
          },
          {
            question: 'Which comment is most helpful?',
            options: [
              '# x = 5 assigns 5 to x',
              '# Using binary search for O(log n) complexity',
              '# This is a variable',
              '# Code below'
            ],
            correctAnswer: 1,
            explanation: 'Good comments explain WHY and provide context, not just restate what the code obviously does'
          }
        ]
      },

      {
        id: 'user-input',
        title: 'Getting User Input',
        description: 'Learn how to accept and process user input in Python',
        content: {
          overview: 'The input() function allows Python programs to interact with users by accepting text input from the keyboard. Understanding how to get, validate, and convert user input is essential for creating interactive programs.',
          keyPoints: [
            'input() function reads user input as a string',
            'Always returns a string, even if user types numbers',
            'Use type conversion to get numbers from input',
            'Can provide a prompt message to guide users',
            'Input waits for user to press Enter'
          ],
          useCases: [
            {
              title: 'Interactive Programs',
              description: 'Create programs that respond to user choices',
              example: 'Calculators, games, menus, configuration tools'
            },
            {
              title: 'Data Collection',
              description: 'Gather information from users',
              example: 'Registration forms, surveys, questionnaires'
            },
            {
              title: 'Configuration',
              description: 'Let users customize program behavior',
              example: 'Settings, preferences, parameters'
            },
            {
              title: 'Testing',
              description: 'Manually test program logic',
              example: 'Input test data, verify outputs'
            }
          ],
          dos: [
            'Always validate user input',
            'Provide clear prompts explaining what to enter',
            'Handle invalid input gracefully',
            'Convert input to appropriate type (int, float, etc.)',
            'Use try-except for type conversion errors'
          ],
          donts: [
            'Don\'t assume input is valid',
            'Don\'t forget input() returns strings',
            'Don\'t use vague prompts like "Enter:"',
            'Don\'t crash on invalid input',
            'Don\'t ask for input multiple times unnecessarily'
          ],
          bestPractices: [
            'Validate input immediately after receiving it',
            'Provide examples in prompts: "Enter age (e.g., 25): "',
            'Use loops to re-prompt on invalid input',
            'Strip whitespace from input: input().strip()',
            'Consider default values for optional input'
          ],
          codeExamples: [
            {
              title: 'Basic Input',
              code: `# Simple input (returns string)
name = input("What is your name? ")
print(f"Hello, {name}!")

# Input with prompt
age = input("How old are you? ")
print(f"You are {age} years old")
# Note: age is a STRING, not a number!

# Multiple inputs
first_name = input("First name: ")
last_name = input("Last name: ")
full_name = f"{first_name} {last_name}"
print(f"Full name: {full_name}")

# Input without prompt (less user-friendly)
data = input()  # Waits for input, no prompt displayed`,
              explanation: 'input() displays a prompt and waits for user to type and press Enter'
            },
            {
              title: 'Converting Input Types',
              code: `# Convert string input to integer
age_str = input("Enter your age: ")
age = int(age_str)  # Convert to integer
print(f"Next year you'll be {age + 1}")

# Shorter version (convert immediately)
age = int(input("Enter your age: "))
height = float(input("Enter your height in meters: "))

# Multiple numeric inputs
print("Enter two numbers:")
num1 = int(input("First number: "))
num2 = int(input("Second number: "))
total = num1 + num2
print(f"{num1} + {num2} = {total}")

# Boolean input
answer = input("Continue? (yes/no): ")
should_continue = answer.lower() == "yes"

# Example with validation
while True:
    try:
        age = int(input("Enter your age: "))
        if age > 0 and age < 150:
            break
        else:
            print("Please enter a valid age (1-149)")
    except ValueError:
        print("Please enter a number")`,
              explanation: 'Use int(), float(), bool() to convert string input to other types'
            },
            {
              title: 'Input Validation',
              code: `# Validate numeric input
def get_positive_number(prompt):
    """Get a positive number from user with validation."""
    while True:
        try:
            value = float(input(prompt))
            if value > 0:
                return value
            else:
                print("❌ Please enter a positive number")
        except ValueError:
            print("❌ Please enter a valid number")

price = get_positive_number("Enter price: $")

# Validate choice from options
def get_choice(prompt, valid_options):
    """Get user choice from valid options."""
    while True:
        choice = input(prompt).strip().lower()
        if choice in valid_options:
            return choice
        else:
            print(f"❌ Please choose from: {', '.join(valid_options)}")

operation = get_choice(
    "Choose operation (add/subtract/multiply/divide): ",
    ["add", "subtract", "multiply", "divide"]
)

# Validate yes/no
def get_yes_no(prompt):
    """Get yes/no answer from user."""
    while True:
        answer = input(prompt + " (yes/no): ").strip().lower()
        if answer in ["yes", "y"]:
            return True
        elif answer in ["no", "n"]:
            return False
        else:
            print("❌ Please answer 'yes' or 'no'")

continue_program = get_yes_no("Do you want to continue?")`,
              explanation: 'Always validate input to prevent errors and ensure data quality'
            },
            {
              title: 'Real-World Example: Simple Calculator',
              code: `# Interactive calculator with input validation
print("=== Simple Calculator ===")
print()

# Get first number
while True:
    try:
        num1 = float(input("Enter first number: "))
        break
    except ValueError:
        print("❌ Invalid number. Try again.")

# Get operation
while True:
    operation = input("Choose operation (+, -, *, /): ").strip()
    if operation in ['+', '-', '*', '/']:
        break
    else:
        print("❌ Please choose +, -, *, or /")

# Get second number
while True:
    try:
        num2 = float(input("Enter second number: "))
        if operation == '/' and num2 == 0:
            print("❌ Cannot divide by zero. Try again.")
        else:
            break
    except ValueError:
        print("❌ Invalid number. Try again.")

# Perform calculation
if operation == '+':
    result = num1 + num2
elif operation == '-':
    result = num1 - num2
elif operation == '*':
    result = num1 * num2
else:  # operation == '/'
    result = num1 / num2

print(f"\\n{num1} {operation} {num2} = {result}")

# Ask to continue
continue_calc = input("\\nCalculate again? (yes/no): ")
if continue_calc.lower() in ['yes', 'y']:
    print("Restarting calculator...")
else:
    print("Goodbye!")`,
              explanation: 'Robust input handling makes programs user-friendly and error-resistant'
            }
          ]
        },
        quiz: [
          {
            question: 'What type does input() always return?',
            options: ['int', 'float', 'str', 'bool'],
            correctAnswer: 2,
            explanation: 'input() always returns a string (str), even if the user types numbers'
          },
          {
            question: 'How do you convert user input to an integer?',
            options: [
              'input(int)',
              'int(input())',
              'integer(input())',
              'input().int()'
            ],
            correctAnswer: 1,
            explanation: 'Use int(input()) to convert the string returned by input() to an integer'
          },
          {
            question: 'What happens if you try int("hello")?',
            options: [
              'Returns 0',
              'Returns None',
              'Raises ValueError',
              'Returns "hello"'
            ],
            correctAnswer: 2,
            explanation: 'int() raises a ValueError when given a string that cannot be converted to an integer'
          }
        ]
      },

      {
        id: 'display-output',
        title: 'Displaying Output',
        description: 'Master the print() function and output formatting',
        content: {
          overview: 'The print() function displays output to the console. Python offers multiple ways to format output, from simple concatenation to advanced f-strings. Understanding output formatting is crucial for creating readable, professional programs.',
          keyPoints: [
            'print() displays text and values to the console',
            'Can print multiple values separated by spaces',
            'f-strings (f"") provide easy string formatting',
            'format() method for complex formatting',
            'Can control separator and ending characters'
          ],
          useCases: [
            {
              title: 'Debugging',
              description: 'Display variable values during development',
              example: 'print(f"x={x}, y={y}")'
            },
            {
              title: 'User Feedback',
              description: 'Show results, messages, and status',
              example: 'Success messages, error notifications, progress updates'
            },
            {
              title: 'Reports',
              description: 'Generate formatted reports and tables',
              example: 'Sales reports, data summaries, invoices'
            },
            {
              title: 'Logging',
              description: 'Record program activities',
              example: 'Application logs, audit trails'
            }
          ],
          dos: [
            'Use f-strings for readable formatting (Python 3.6+)',
            'Provide clear, informative messages',
            'Use proper spacing and alignment',
            'End with newline for readability',
            'Format numbers appropriately (decimals, currency, etc.)'
          ],
          donts: [
            'Don\'t print excessive debug output in production',
            'Don\'t ignore formatting for user-facing output',
            'Don\'t use print() for logging in large applications',
            'Don\'t forget to remove debug prints',
            'Don\'t assume terminal width'
          ],
          bestPractices: [
            'Use f-strings for modern, readable formatting',
            'Align columns for tabular data',
            'Use thousands separators for large numbers',
            'Include units in output (e.g., "25 kg", "100 USD")',
            'Consider using logging module instead of print for apps'
          ],
          codeExamples: [
            {
              title: 'Basic Print Statements',
              code: `# Simple print
print("Hello, World!")

# Print variables
name = "Alice"
age = 30
print(name)
print(age)

# Print multiple values (separated by space)
print("Name:", name, "Age:", age)
# Output: Name: Alice Age: 30

# Print without newline (use end parameter)
print("Loading", end="...")
print("Done!")
# Output: Loading...Done!

# Custom separator
print("apple", "banana", "cherry", sep=", ")
# Output: apple, banana, cherry

# Print to file
with open("output.txt", "w") as f:
    print("Hello, File!", file=f)`,
              explanation: 'print() is versatile - can print one or more values with custom separators and endings'
            },
            {
              title: 'String Formatting with f-strings',
              code: `# f-strings (Python 3.6+) - RECOMMENDED
name = "Alice"
age = 30
height = 1.65

print(f"My name is \\{name}")
print(f"I am \\{age} years old")
print(f"My height is \\{height} meters")

# Expressions in f-strings
print(f"Next year I'll be \\{age + 1}")
print(f"My name in uppercase: \\{name.upper()}")

# Formatting numbers
price = 1234.5
print(f"Price: $\\{price:.2f}")      # 2 decimal places: $1234.50
print(f"Price: $\\{price:,.2f}")     # With comma: $1,234.50

# Alignment and padding
print(f"\\{'Left':<10}|")    # Left-aligned (10 chars)
print(f"\\{'Right':>10}|")   # Right-aligned
print(f"\\{'Center':^10}|")  # Centered

# Percentage formatting
accuracy = 0.9567
print(f"Accuracy: \\{accuracy:.2%}")  # 95.67%

# Binary, Octal, Hexadecimal
number = 42
print(f"Binary: \\{number:b}")   # 101010
print(f"Octal: \\{number:o}")    # 52
print(f"Hex: \\{number:x}")      # 2a`,
              explanation: 'f-strings provide the most readable and powerful way to format strings in modern Python'
            },
            {
              title: 'Other Formatting Methods',
              code: `# Old % formatting (legacy, not recommended)
name = "Alice"
age = 30
print("Name: %s, Age: %d" % (name, age))

# str.format() method
print("Name: {}, Age: {}".format(name, age))
print("Name: {0}, Age: {1}".format(name, age))
print("Name: {n}, Age: {a}".format(n=name, a=age))

# Format with alignment
print("{:<10} | {:>10}".format("Left", "Right"))
print("{:^20}".format("Centered"))

# Multiline output
message = """
╔════════════════════╗
║   Welcome to       ║
║   Python World!    ║
╚════════════════════╝
"""
print(message)

# Using join for lists
fruits = ["apple", "banana", "cherry"]
print(", ".join(fruits))  # apple, banana, cherry

# Concatenation (not recommended for many values)
print("Hello " + "World " + "!")`,
              explanation: 'Multiple formatting methods exist, but f-strings are recommended for clarity'
            },
            {
              title: 'Real-World Example: Receipt Formatter',
              code: `# Format a shopping receipt
print("=" * 40)
print(f"\\{'SHOPPING RECEIPT':^40}")
print("=" * 40)
print()

items = [
    ("Apple", 3, 0.50),
    ("Banana", 5, 0.30),
    ("Orange", 2, 0.75),
    ("Milk", 1, 2.50)
]

print(f"\\{'Item':<15} \\{'Qty':>5} \\{'Price':>8} \\{'Total':>10}")
print("-" * 40)

subtotal = 0
for item_name, quantity, price in items:
    total = quantity * price
    subtotal += total
    print(f"\\{item_name:<15} \\{quantity:>5} $\\{price:>7.2f} $\\{total:>9.2f}")

print("-" * 40)

tax_rate = 0.08
tax = subtotal * tax_rate
grand_total = subtotal + tax

print(f"\\{'Subtotal:':<30} $\\{subtotal:>9.2f}")
print(f"\\{'Tax (8%):':<30} $\\{tax:>9.2f}")
print("=" * 40)
print(f"\\{'TOTAL:':<30} $\\{grand_total:>9.2f}")
print("=" * 40)

# Output:
# ========================================
#           SHOPPING RECEIPT
# ========================================
# 
# Item             Qty    Price      Total
# ----------------------------------------
# Apple              3   $  0.50   $   1.50
# Banana             5   $  0.30   $   1.50
# Orange             2   $  0.75   $   1.50
# Milk               1   $  2.50   $   2.50
# ----------------------------------------
# Subtotal:                      $   7.00
# Tax (8%):                      $   0.56
# ========================================
# TOTAL:                         $   7.56
# ========================================`,
              explanation: 'Proper formatting creates professional-looking output for reports and receipts'
            }
          ]
        },
        quiz: [
          {
            question: 'Which is the recommended way to format strings in modern Python?',
            options: [
              '% formatting',
              'f-strings',
              'String concatenation with +',
              'print() multiple arguments'
            ],
            correctAnswer: 1,
            explanation: 'f-strings (f"text {variable}") are the recommended, most readable formatting method in Python 3.6+'
          },
          {
            question: 'What does print("A", "B", "C", sep="-") output?',
            options: [
              'A B C',
              'A-B-C',
              'ABC',
              'A - B - C'
            ],
            correctAnswer: 1,
            explanation: 'sep="-" sets the separator between printed values to hyphen: A-B-C'
          },
          {
            question: 'How do you format a number to 2 decimal places in an f-string?',
            options: [
              'f"{num.2f}"',
              'f"{num:.2f}"',
              'f"{num:2f}"',
              'f"{num:f2}"'
            ],
            correctAnswer: 1,
            explanation: 'f"{num:.2f}" formats num with 2 decimal places. The : starts format specification'
          }
        ]
      }
    ]
  };
