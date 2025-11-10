// COMPREHENSIVE PYTHON COURSE CONTENT - EXPANDED VERSION
// This file contains additional topics to be added to courseContent.js

export const expandedBeginnerTopics = [
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
  }
];

// CONTENT OUTLINE - Topics to be added (structure for implementation)

export const contentOutline = {
  beginner: {
    chapters: [
      {
        chapter: '1. Introduction',
        topics: [
          'Introduction to Programming Languages',
          'Introduction to Python',
          'Advantages of Python',
          'Installing Python (Windows, macOS, Linux)',
          'Execution Modes (Interactive & Script)',
        ]
      },
      {
        chapter: '2. Python Fundamentals',
        topics: [
          'Character Set',
          'Tokens: Keywords',
          'Tokens: Identifiers',
          'Tokens: Literals (String, Numeric, Boolean, None)',
          'Tokens: Operators',
          'Tokens: Delimiters',
          'Blocks and Indentation',
          'Comments (Single-line, Multi-line, Docstrings)',
        ]
      },
      {
        chapter: '3. Variables & Data Types',
        topics: [
          'Objects & Variables',
          'Variables & Assignment Statements',
          'Built-in Data Types (int, float, str, bool, complex)',
          'Type Checking (type(), isinstance())',
          'Type Casting (Implicit & Explicit)',
          'Mutable vs Immutable Data Types',
        ]
      },
      {
        chapter: '4. Input/Output',
        topics: [
          'Accepting User Input (input() function)',
          'Displaying Output (print() function)',
          'Formatting Output (f-strings, format(), %)',
          'Reading Command Line Arguments',
        ]
      },
      {
        chapter: '5. Operators & Expressions',
        topics: [
          'Arithmetic Operators (+, -, *, /, //, %, **)',
          'Relational/Comparison Operators (==, !=, >, <, >=, <=)',
          'Assignment Operators (=, +=, -=, *=, /=, //=, %=, **=)',
          'Logical Operators (and, or, not)',
          'Bitwise Operators (&, |, ^, ~, <<, >>)',
          'Identity Operators (is, is not)',
          'Membership Operators (in, not in)',
          'Expressions',
          'Operator Precedence & Associativity',
        ]
      },
      {
        chapter: '6. Control Flow',
        topics: [
          'Sequential Flow',
          'Selection: if statement',
          'Selection: if-else statement',
          'Selection: if-elif-else statement',
          'Nested if statements',
          'Ternary Operator',
          'match-case statement (Python 3.10+)',
        ]
      },
      {
        chapter: '7. Iteration',
        topics: [
          'while loop',
          'for loop',
          'range() function',
          'break statement',
          'continue statement',
          'pass statement',
          'else clause with loops',
          'Nested loops',
          'Loop patterns and techniques',
        ]
      },
    ]
  },
  
  intermediate: {
    chapters: [
      {
        chapter: '8. Strings',
        topics: [
          'String Creation & Initialization',
          'String Indexing & Slicing',
          'String Immutability',
          'String Operations (Concatenation, Repetition)',
          'String Methods: Case Conversion (upper, lower, title, capitalize, swapcase)',
          'String Methods: Checking (isalpha, isdigit, isalnum, isspace)',
          'String Methods: Searching (find, rfind, index, rindex)',
          'String Methods: Splitting & Joining (split, rsplit, splitlines, join)',
          'String Methods: Stripping (strip, lstrip, rstrip)',
          'String Methods: Replace & Translate',
          'String Formatting (%, format(), f-strings)',
          'Escape Sequences',
          'Raw Strings',
          'String Encoding & Decoding',
          'Regular Expressions (re module)',
        ]
      },
      {
        chapter: '9. Lists',
        topics: [
          'List Creation',
          'Accessing Elements (Indexing, Slicing)',
          'List Operations (Concatenation, Repetition, Membership)',
          'List Methods: Adding (append, extend, insert)',
          'List Methods: Removing (remove, pop, clear)',
          'List Methods: Searching (index, count)',
          'List Methods: Sorting (sort, reverse)',
          'List Methods: Copying (copy, list())',
          'List Comprehension',
          'Nested Lists & 2D Lists',
          'List as Stack',
          'List as Queue (using collections.deque)',
          'Copying Lists (Shallow vs Deep Copy)',
        ]
      },
      {
        chapter: '10. Tuples',
        topics: [
          'Tuple Creation',
          'Singleton Tuples',
          'Accessing Tuple Elements',
          'Tuple Immutability',
          'Tuple Operations',
          'Tuple Methods (count, index)',
          'Tuple Unpacking',
          'Named Tuples (collections.namedtuple)',
          'Nested Tuples',
        ]
      },
      {
        chapter: '11. Sets',
        topics: [
          'Set Creation',
          'Set Operations (Union, Intersection, Difference, Symmetric Difference)',
          'Set Methods (add, update, remove, discard, pop, clear)',
          'Set Comprehension',
          'Frozen Sets',
          'Set Theory Operations',
        ]
      },
      {
        chapter: '12. Dictionaries',
        topics: [
          'Dictionary Creation',
          'Accessing Dictionary Items',
          'Adding & Updating Items',
          'Removing Items (pop, popitem, del, clear)',
          'Dictionary Methods (keys, values, items, get, setdefault)',
          'Dictionary Comprehension',
          'Nested Dictionaries',
          'Merging Dictionaries',
          'OrderedDict & defaultdict',
        ]
      },
      {
        chapter: '13. Functions',
        topics: [
          'Function Definition & Calling',
          'Function Parameters & Arguments',
          'Default Parameters',
          'Keyword Arguments',
          'Positional-only Parameters',
          'Keyword-only Parameters',
          'Variable-length Arguments (*args, **kwargs)',
          'Return Statement & Multiple Returns',
          'Scope: Local, Global, Nonlocal',
          'Lambda Functions',
          'Higher-order Functions (map, filter, reduce)',
          'Recursion',
          'Function Annotations',
          'Docstrings',
        ]
      },
    ]
  },
  
  advanced: {
    chapters: [
      {
        chapter: '14. Object-Oriented Programming',
        topics: [
          'Classes & Objects',
          'Constructor (__init__)',
          'Instance Variables & Methods',
          'Class Variables & Methods',
          'Static Methods',
          'Encapsulation (Public, Protected, Private)',
          'Property Decorators (@property)',
          'Inheritance (Single, Multiple, Multilevel)',
          'Method Overriding',
          'super() function',
          'Polymorphism',
          'Abstract Classes (abc module)',
          'Magic Methods / Dunder Methods',
          '__str__ vs __repr__',
          'Operator Overloading',
        ]
      },
      {
        chapter: '15. File Handling',
        topics: [
          'File Opening Modes (r, w, a, r+, w+, a+)',
          'Reading Files (read, readline, readlines)',
          'Writing Files (write, writelines)',
          'File Context Manager (with statement)',
          'File Position (seek, tell)',
          'Binary Files',
          'CSV Files (csv module)',
          'JSON Files (json module)',
          'pickle Module (Serialization)',
          'File & Directory Operations (os, pathlib)',
        ]
      },
      {
        chapter: '16. Exception Handling',
        topics: [
          'Syntax Errors vs Exceptions',
          'try-except Block',
          'Multiple except Clauses',
          'except with Multiple Exceptions',
          'try-except-else',
          'try-except-finally',
          'Raising Exceptions',
          'Custom Exceptions',
          'Exception Chaining',
          'Built-in Exceptions',
          'Assertions',
        ]
      },
      {
        chapter: '17. Modules & Packages',
        topics: [
          'Creating Modules',
          'Importing Modules',
          'from...import Statement',
          'Module Search Path',
          'dir() Function',
          '__name__ Variable',
          'Creating Packages',
          '__init__.py',
          'Relative vs Absolute Imports',
          'Installing External Packages (pip)',
        ]
      },
      {
        chapter: '18. Advanced Concepts',
        topics: [
          'Iterators & Iterables',
          'Generators',
          'Generator Expressions',
          'Decorators',
          'Context Managers',
          'Closures',
          'List Comprehensions (Advanced)',
          'Dictionary & Set Comprehensions',
          'Enumerate & Zip',
          'Collections Module (Counter, defaultdict, OrderedDict, deque)',
        ]
      },
    ]
  },
  
  professional: {
    chapters: [
      {
        chapter: '19. Python Standard Library',
        topics: [
          'math Module',
          'random Module',
          'statistics Module',
          'datetime Module',
          'os Module',
          'sys Module',
          'pathlib Module',
          're Module (Regular Expressions)',
          'itertools Module',
          'functools Module',
          'collections Module',
          'typing Module',
        ]
      },
      {
        chapter: '20. Design Patterns',
        topics: [
          'Singleton Pattern',
          'Factory Pattern',
          'Observer Pattern',
          'Strategy Pattern',
          'Decorator Pattern',
          'Adapter Pattern',
          'Command Pattern',
        ]
      },
      {
        chapter: '21. Testing & Debugging',
        topics: [
          'unittest Module',
          'pytest Framework',
          'Test-Driven Development (TDD)',
          'Debugging with pdb',
          'Logging Module',
          'Code Coverage',
          'Mocking & Patching',
        ]
      },
      {
        chapter: '22. Best Practices',
        topics: [
          'PEP 8 Style Guide',
          'Code Documentation',
          'Virtual Environments',
          'Type Hints',
          'Code Refactoring',
          'Performance Optimization',
          'Security Best Practices',
        ]
      },
      {
        chapter: '23. Web Development',
        topics: [
          'Flask Framework Basics',
          'Django Framework Basics',
          'REST APIs',
          'Database Integration (SQLite, PostgreSQL)',
          'ORM (Object-Relational Mapping)',
        ]
      },
      {
        chapter: '24. Data Science',
        topics: [
          'NumPy Basics',
          'Pandas Basics',
          'Data Visualization (Matplotlib, Seaborn)',
          'Data Analysis Workflow',
        ]
      },
    ]
  }
};

export default {expandedBeginnerTopics, contentOutline};
