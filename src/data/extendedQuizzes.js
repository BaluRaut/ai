// Extended quiz questions for each topic (50-60 questions per topic)
// This file supplements the basic quizzes in courseContent.js

export const extendedQuizzes = {
  'intro-python': [
    {
      question: 'What makes Python a "high-level" programming language?',
      options: [
        'It runs faster than other languages',
        'It abstracts away low-level details like memory management',
        'It can only be used for advanced projects',
        'It was created recently'
      ],
      correctAnswer: 1,
      explanation: 'High-level languages like Python abstract complex details, making code more readable and easier to write.',
      difficulty: 'medium'
    },
    {
      question: 'Which command shows the Python version installed?',
      options: ['python --version', 'python -v', 'version python', 'show python'],
      correctAnswer: 0,
      explanation: 'Use "python --version" or "python -V" to check the installed Python version.',
      difficulty: 'easy'
    },
    {
      question: 'What is IDLE?',
      options: [
        'A Python library',
        'Integrated Development and Learning Environment for Python',
        'A type of loop',
        'A Python framework'
      ],
      correctAnswer: 1,
      explanation: 'IDLE is Python\'s Integrated Development and Learning Environment, included with Python installation.',
      difficulty: 'easy'
    },
    {
      question: 'How do you exit the Python interactive shell?',
      options: ['exit()', 'quit()', 'Ctrl+D (Unix) or Ctrl+Z (Windows)', 'All of the above'],
      correctAnswer: 3,
      explanation: 'You can exit using exit(), quit(), or keyboard shortcuts Ctrl+D (Unix/Mac) or Ctrl+Z then Enter (Windows).',
      difficulty: 'easy'
    },
    {
      question: 'What does "dynamically typed" mean in Python?',
      options: [
        'Variables must declare their type',
        'Types are determined at runtime',
        'You cannot change variable types',
        'Python only has one data type'
      ],
      correctAnswer: 1,
      explanation: 'Dynamic typing means variable types are determined at runtime, and you don\'t need to declare them explicitly.',
      difficulty: 'medium'
    },
    {
      question: 'Which of these is a valid multi-line comment in Python?',
      options: [
        '/* comment */',
        '<!-- comment -->',
        '"""comment"""',
        '// comment'
      ],
      correctAnswer: 2,
      explanation: 'Triple quotes (""" or \'\'\') are used for multi-line strings, which can serve as multi-line comments.',
      difficulty: 'easy'
    },
    {
      question: 'What is the output of: print(type(5))?',
      options: ['<class \'integer\'>', '<class \'int\'>', '<type \'number\'>', '5'],
      correctAnswer: 1,
      explanation: 'The type() function returns the class of an object. For integer 5, it returns <class \'int\'>.',
      difficulty: 'easy'
    },
    {
      question: 'Python is named after what?',
      options: [
        'A type of snake',
        'Monty Python comedy group',
        'PyThon programming language',
        'Python Institute'
      ],
      correctAnswer: 1,
      explanation: 'Python is named after the British comedy group Monty Python, not the snake.',
      difficulty: 'easy'
    },
    {
      question: 'What does "batteries included" mean for Python?',
      options: [
        'Python runs on battery power',
        'Python comes with a comprehensive standard library',
        'You need to install extra packages',
        'Python is energy efficient'
      ],
      correctAnswer: 1,
      explanation: '"Batteries included" means Python comes with a rich standard library, so you can do a lot without installing extra packages.',
      difficulty: 'medium'
    },
    {
      question: 'Which organization manages Python development?',
      options: [
        'Microsoft',
        'Google',
        'Python Software Foundation (PSF)',
        'Oracle'
      ],
      correctAnswer: 2,
      explanation: 'The Python Software Foundation (PSF) is the non-profit organization that manages Python development.',
      difficulty: 'medium'
    },
    {
      question: 'What is indentation used for in Python?',
      options: ['Just for readability', 'To define code blocks', 'Optional styling', 'Only in functions'],
      correctAnswer: 1,
      explanation: 'Indentation is mandatory in Python and defines code blocks, unlike braces in other languages.',
      difficulty: 'easy'
    },
    {
      question: 'Which file extension is used for Python files?',
      options: ['.python', '.pt', '.py', '.pyt'],
      correctAnswer: 2,
      explanation: 'Python files use the .py extension.',
      difficulty: 'easy'
    },
    {
      question: 'What is PEP 8?',
      options: [
        'A Python version',
        'Python style guide',
        'Python package manager',
        'Python error protocol'
      ],
      correctAnswer: 1,
      explanation: 'PEP 8 is the official style guide for Python code, defining conventions for writing readable code.',
      difficulty: 'easy'
    },
    {
      question: 'Which command displays "The Zen of Python"?',
      options: ['import zen', 'import this', 'show zen', 'python --zen'],
      correctAnswer: 1,
      explanation: 'The command "import this" displays The Zen of Python, a collection of guiding principles.',
      difficulty: 'easy'
    },
    {
      question: 'What is pip?',
      options: [
        'Python Installer Program',
        'Package Installer for Python',
        'Python Interactive Platform',
        'Python Integration Package'
      ],
      correctAnswer: 1,
      explanation: 'pip is the Package Installer for Python, used to install and manage Python packages.',
      difficulty: 'easy'
    },
    {
      question: 'Which year was Python first released?',
      options: ['1989', '1991', '1995', '2000'],
      correctAnswer: 1,
      explanation: 'Python was first released by Guido van Rossum in 1991.',
      difficulty: 'medium'
    },
    {
      question: 'What is CPython?',
      options: [
        'Python written in C++',
        'The reference implementation of Python written in C',
        'A Python compiler',
        'Python for C programmers'
      ],
      correctAnswer: 1,
      explanation: 'CPython is the original and most widely used implementation of Python, written in C.',
      difficulty: 'medium'
    },
    {
      question: 'Which is NOT a Python IDE/editor?',
      options: ['PyCharm', 'VS Code', 'Eclipse', 'Photoshop'],
      correctAnswer: 3,
      explanation: 'Photoshop is image editing software. PyCharm, VS Code, and Eclipse are all used for Python development.',
      difficulty: 'easy'
    },
    {
      question: 'What is a REPL?',
      options: [
        'Read-Eval-Print Loop',
        'Run-Execute-Print Language',
        'Real-time Execution Programming Layer',
        'Repeat-Edit-Parse Loop'
      ],
      correctAnswer: 0,
      explanation: 'REPL stands for Read-Eval-Print Loop, the interactive Python shell where you can test code.',
      difficulty: 'medium'
    },
    {
      question: 'Which Python version is currently supported?',
      options: ['Python 2.x only', 'Python 3.x only', 'Both 2.x and 3.x', 'Python 4.x'],
      correctAnswer: 1,
      explanation: 'Python 2 reached end-of-life in 2020. Only Python 3.x versions are currently supported.',
      difficulty: 'easy'
    },
    {
      question: 'What symbol starts single-line comments?',
      options: ['//', '#', '/*', '--'],
      correctAnswer: 1,
      explanation: 'Python uses # for single-line comments.',
      difficulty: 'easy'
    },
    {
      question: 'Which is a Python web framework?',
      options: ['React', 'Django', 'Angular', 'Vue'],
      correctAnswer: 1,
      explanation: 'Django is a popular Python web framework. React, Angular, and Vue are JavaScript frameworks.',
      difficulty: 'easy'
    },
    {
      question: 'What does "interpreted language" mean?',
      options: [
        'Code is translated to machine code before execution',
        'Code is executed line by line without pre-compilation',
        'Code must be compiled first',
        'Code cannot be read by humans'
      ],
      correctAnswer: 1,
      explanation: 'Interpreted languages like Python execute code line by line, unlike compiled languages that convert all code first.',
      difficulty: 'medium'
    },
    {
      question: 'Which programming paradigms does Python support?',
      options: [
        'Only object-oriented',
        'Only procedural',
        'Object-oriented, procedural, and functional',
        'Only functional'
      ],
      correctAnswer: 2,
      explanation: 'Python is multi-paradigm, supporting object-oriented, procedural, and functional programming styles.',
      difficulty: 'medium'
    },
    {
      question: 'What is a virtual environment?',
      options: [
        'A cloud-based Python installation',
        'An isolated Python environment for project dependencies',
        'A virtual machine',
        'An online Python editor'
      ],
      correctAnswer: 1,
      explanation: 'Virtual environments isolate project dependencies, preventing conflicts between different projects.',
      difficulty: 'medium'
    },
    {
      question: 'Which command creates a virtual environment?',
      options: ['python -m venv myenv', 'create venv myenv', 'new venv myenv', 'make venv myenv'],
      correctAnswer: 0,
      explanation: 'The command "python -m venv myenv" creates a virtual environment named myenv.',
      difficulty: 'medium'
    },
    {
      question: 'What is PyPI?',
      options: [
        'Python Package Index',
        'Python Programming Interface',
        'Python Project Installer',
        'Python Performance Indicator'
      ],
      correctAnswer: 0,
      explanation: 'PyPI (Python Package Index) is the official repository for third-party Python packages.',
      difficulty: 'easy'
    },
    {
      question: 'How do you install a package using pip?',
      options: [
        'pip download package_name',
        'pip install package_name',
        'pip get package_name',
        'pip add package_name'
      ],
      correctAnswer: 1,
      explanation: 'Use "pip install package_name" to install Python packages from PyPI.',
      difficulty: 'easy'
    },
    {
      question: 'What is the purpose of __init__.py?',
      options: [
        'To initialize variables',
        'To mark a directory as a Python package',
        'To start the program',
        'To import libraries'
      ],
      correctAnswer: 1,
      explanation: '__init__.py marks a directory as a Python package, allowing imports from it.',
      difficulty: 'medium'
    },
    {
      question: 'Which is NOT a Python data structure?',
      options: ['List', 'Tuple', 'Dictionary', 'Array (built-in)'],
      correctAnswer: 3,
      explanation: 'Python doesn\'t have built-in arrays. It has lists, tuples, sets, and dictionaries. Arrays come from numpy.',
      difficulty: 'medium'
    },
    {
      question: 'What is the Global Interpreter Lock (GIL)?',
      options: [
        'A security feature',
        'A mechanism allowing only one thread to execute Python bytecode at a time',
        'A file locking system',
        'A network protocol'
      ],
      correctAnswer: 1,
      explanation: 'The GIL ensures only one thread executes Python bytecode at once, affecting multi-threading performance.',
      difficulty: 'hard'
    },
    {
      question: 'Which symbol is used for string formatting?',
      options: ['%', 'f-strings', '.format()', 'All of the above'],
      correctAnswer: 3,
      explanation: 'Python supports multiple string formatting methods: % operator, f-strings (f"..."), and .format().',
      difficulty: 'medium'
    },
    {
      question: 'What is a docstring?',
      options: [
        'A documentation string using triple quotes',
        'A variable storing strings',
        'A function for printing',
        'A string module'
      ],
      correctAnswer: 0,
      explanation: 'Docstrings are documentation strings (using triple quotes) that describe modules, functions, or classes.',
      difficulty: 'easy'
    },
    {
      question: 'Which keyword is used to create a function?',
      options: ['function', 'def', 'func', 'define'],
      correctAnswer: 1,
      explanation: 'The "def" keyword is used to define functions in Python.',
      difficulty: 'easy'
    },
    {
      question: 'What does if __name__ == "__main__": do?',
      options: [
        'Checks if file is run directly',
        'Imports the main module',
        'Defines the main function',
        'Checks Python version'
      ],
      correctAnswer: 0,
      explanation: 'This checks if the file is run directly (not imported), allowing code to run only when executed.',
      difficulty: 'medium'
    },
    {
      question: 'Which is the correct way to create a list?',
      options: ['list = (1, 2, 3)', 'list = [1, 2, 3]', 'list = {1, 2, 3}', 'list = <1, 2, 3>'],
      correctAnswer: 1,
      explanation: 'Square brackets [] create lists. () creates tuples, {} creates sets/dicts, and <> is invalid.',
      difficulty: 'easy'
    },
    {
      question: 'What is lambda in Python?',
      options: [
        'A loop type',
        'An anonymous function',
        'A variable type',
        'A module'
      ],
      correctAnswer: 1,
      explanation: 'Lambda creates anonymous (unnamed) functions for simple operations.',
      difficulty: 'medium'
    },
    {
      question: 'Which function returns the length of an object?',
      options: ['size()', 'length()', 'len()', 'count()'],
      correctAnswer: 2,
      explanation: 'The len() function returns the length of sequences like lists, strings, tuples, etc.',
      difficulty: 'easy'
    },
    {
      question: 'What is the output of: print(3 ** 2)?',
      options: ['6', '9', '8', 'Error'],
      correctAnswer: 1,
      explanation: '** is the exponentiation operator. 3 ** 2 means 3 raised to power 2, which equals 9.',
      difficulty: 'easy'
    },
    {
      question: 'Which module is used for regular expressions?',
      options: ['regex', 're', 'regexp', 'expression'],
      correctAnswer: 1,
      explanation: 'The "re" module provides regular expression operations in Python.',
      difficulty: 'medium'
    },
    {
      question: 'What does "pythonic" mean?',
      options: [
        'Code written in Python',
        'Code following Python idioms and best practices',
        'Complex Python code',
        'Python for beginners'
      ],
      correctAnswer: 1,
      explanation: '"Pythonic" refers to code that follows Python\'s conventions, idioms, and philosophy.',
      difficulty: 'medium'
    },
    {
      question: 'Which is more pythonic for swapping two variables?',
      options: [
        'temp = a; a = b; b = temp',
        'a, b = b, a',
        'swap(a, b)',
        'Using XOR operation'
      ],
      correctAnswer: 1,
      explanation: 'Python\'s tuple unpacking (a, b = b, a) is the most pythonic way to swap variables.',
      difficulty: 'medium'
    },
    {
      question: 'What is the recommended indentation in PEP 8?',
      options: ['2 spaces', '4 spaces', '1 tab', '8 spaces'],
      correctAnswer: 1,
      explanation: 'PEP 8 recommends using 4 spaces for each indentation level.',
      difficulty: 'easy'
    },
    {
      question: 'Which function shows all attributes and methods of an object?',
      options: ['list()', 'dir()', 'attrs()', 'show()'],
      correctAnswer: 1,
      explanation: 'The dir() function returns all attributes and methods of an object.',
      difficulty: 'medium'
    },
    {
      question: 'What is the walrus operator?',
      options: [':=', '==', '=:', '::'],
      correctAnswer: 0,
      explanation: 'The walrus operator := (introduced in Python 3.8) assigns values within expressions.',
      difficulty: 'hard'
    },
    {
      question: 'Which is NOT a benefit of Python?',
      options: [
        'Easy to learn',
        'Large ecosystem',
        'Fastest execution speed',
        'Great for beginners'
      ],
      correctAnswer: 2,
      explanation: 'Python is not the fastest language. Its strength lies in readability and ease of use, not raw speed.',
      difficulty: 'easy'
    },
    {
      question: 'What is the purpose of requirements.txt?',
      options: [
        'To list code requirements',
        'To list project dependencies',
        'To document features',
        'To configure Python'
      ],
      correctAnswer: 1,
      explanation: 'requirements.txt lists all package dependencies and versions needed for a Python project.',
      difficulty: 'medium'
    },
    {
      question: 'Which command generates requirements.txt?',
      options: [
        'pip freeze > requirements.txt',
        'pip list > requirements.txt',
        'pip save requirements.txt',
        'pip export requirements.txt'
      ],
      correctAnswer: 0,
      explanation: '"pip freeze > requirements.txt" captures installed packages and versions to a file.',
      difficulty: 'medium'
    },
    {
      question: 'When did Python 2 reach end-of-life?',
      options: ['2015', '2018', '2020', '2022'],
      correctAnswer: 2,
      explanation: 'Python 2 officially reached end-of-life on January 1, 2020.',
      difficulty: 'easy'
    },
    {
      question: 'Which command shows help documentation?',
      options: ['doc()', 'help()', 'info()', 'man()'],
      correctAnswer: 1,
      explanation: 'The help() function displays documentation for Python objects and modules.',
      difficulty: 'easy'
    }
  ],
  
  'variables-datatypes': [
    {
      question: 'Which of these is a valid variable name in Python?',
      options: ['my-variable', '2ndVariable', '_myVariable', 'my variable'],
      correctAnswer: 2,
      explanation: 'Variable names can start with underscore or letter, not numbers or hyphens, and cannot contain spaces.',
      difficulty: 'easy'
    },
    {
      question: 'What is the output of: x = 5; x = "hello"; print(type(x))?',
      options: ['<class \'int\'>', '<class \'str\'>', 'Error', '<class \'mixed\'>'],
      correctAnswer: 1,
      explanation: 'Python allows changing variable types. After reassignment, x is a string, so type(x) returns <class \'str\'>.',
      difficulty: 'medium'
    },
    {
      question: 'How do you create a multi-word variable name following PEP 8?',
      options: ['myVariableName', 'my_variable_name', 'MyVariableName', 'my-variable-name'],
      correctAnswer: 1,
      explanation: 'PEP 8 recommends snake_case (lowercase with underscores) for variable names.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of: bool("")?',
      options: ['True', 'False', 'None', 'Error'],
      correctAnswer: 1,
      explanation: 'Empty strings are falsy in Python, so bool("") returns False.',
      difficulty: 'medium'
    },
    {
      question: 'Which data type is immutable?',
      options: ['list', 'dict', 'set', 'tuple'],
      correctAnswer: 3,
      explanation: 'Tuples are immutable - once created, their contents cannot be changed.',
      difficulty: 'medium'
    },
    {
      question: 'What does the None keyword represent?',
      options: ['Zero', 'Empty string', 'Absence of value', 'False'],
      correctAnswer: 2,
      explanation: 'None is a special constant representing the absence of a value or null value.',
      difficulty: 'easy'
    },
    {
      question: 'How do you check if two variables point to the same object?',
      options: ['==', 'is', '===', 'equals()'],
      correctAnswer: 1,
      explanation: 'The "is" operator checks if two variables reference the same object in memory.',
      difficulty: 'medium'
    },
    {
      question: 'What is the maximum value a Python integer can hold?',
      options: ['2^31 - 1', '2^63 - 1', 'Unlimited (depends on available memory)', '2^32 - 1'],
      correctAnswer: 2,
      explanation: 'Python 3 integers have unlimited precision - they can be as large as your memory allows.',
      difficulty: 'hard'
    },
    {
      question: 'Which function converts a string to an integer?',
      options: ['str()', 'int()', 'float()', 'convert()'],
      correctAnswer: 1,
      explanation: 'The int() function converts other data types to integers.',
      difficulty: 'easy'
    },
    {
      question: 'What is the output of: print(10 / 3)?',
      options: ['3', '3.0', '3.333333333333333', '3.33'],
      correctAnswer: 2,
      explanation: 'The / operator performs floating-point division, returning a float with full precision.',
      difficulty: 'easy'
    },
    {
      question: 'What is the difference between "==" and "is"?',
      options: [
        'No difference',
        '== compares values, is compares object identity',
        'is compares values, == compares identity',
        'Both compare values'
      ],
      correctAnswer: 1,
      explanation: '== checks if values are equal, while "is" checks if variables refer to the same object in memory.',
      difficulty: 'medium'
    },
    {
      question: 'Which is mutable?',
      options: ['int', 'str', 'list', 'tuple'],
      correctAnswer: 2,
      explanation: 'Lists are mutable (can be modified after creation). Integers, strings, and tuples are immutable.',
      difficulty: 'easy'
    },
    {
      question: 'What is the output of: print(type([]))?',
      options: ['<class \'array\'>', '<class \'list\'>', '<class \'tuple\'>', '<class \'dict\'>'],
      correctAnswer: 1,
      explanation: '[] creates an empty list, so type([]) returns <class \'list\'>.',
      difficulty: 'easy'
    },
    {
      question: 'How do you create a string in Python?',
      options: ['Using quotes', 'Using single quotes', 'Using double quotes', 'All of the above'],
      correctAnswer: 3,
      explanation: 'Python accepts single quotes, double quotes, and triple quotes for strings.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of: bool(0)?',
      options: ['True', 'False', 'None', 'Error'],
      correctAnswer: 1,
      explanation: 'The number 0 is falsy in Python, so bool(0) returns False.',
      difficulty: 'easy'
    },
    {
      question: 'Which operator performs floor division?',
      options: ['/', '//', '%', '**'],
      correctAnswer: 1,
      explanation: '// performs floor division (divides and rounds down to nearest integer).',
      difficulty: 'easy'
    },
    {
      question: 'What is the output of: print(10 // 3)?',
      options: ['3', '3.333', '3.0', '4'],
      correctAnswer: 0,
      explanation: '// performs floor division: 10 // 3 = 3 (integer result).',
      difficulty: 'easy'
    },
    {
      question: 'What is a complex number in Python?',
      options: [
        'A complicated calculation',
        'A number with real and imaginary parts',
        'A floating-point number',
        'An array of numbers'
      ],
      correctAnswer: 1,
      explanation: 'Complex numbers have real and imaginary parts, written as a + bj (e.g., 3 + 4j).',
      difficulty: 'medium'
    },
    {
      question: 'How do you check the type of a variable?',
      options: ['typeof(x)', 'type(x)', 'x.type()', 'checktype(x)'],
      correctAnswer: 1,
      explanation: 'The type() function returns the type of any object.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of: bool([])?',
      options: ['True', 'False', 'None', 'Error'],
      correctAnswer: 1,
      explanation: 'Empty lists are falsy in Python, so bool([]) returns False.',
      difficulty: 'easy'
    },
    {
      question: 'Which is NOT a numeric type in Python?',
      options: ['int', 'float', 'complex', 'decimal (built-in)'],
      correctAnswer: 3,
      explanation: 'int, float, and complex are built-in. decimal is available through the decimal module.',
      difficulty: 'medium'
    },
    {
      question: 'What does casting mean?',
      options: [
        'Converting one data type to another',
        'Creating variables',
        'Deleting variables',
        'Copying variables'
      ],
      correctAnswer: 0,
      explanation: 'Casting is the process of converting a value from one data type to another (e.g., int() to float).',
      difficulty: 'easy'
    },
    {
      question: 'What is the output of: str(123)?',
      options: ['123', '\'123\'', '"123"', 'Error'],
      correctAnswer: 0,
      explanation: 'str(123) converts the integer 123 to the string "123".',
      difficulty: 'easy'
    },
    {
      question: 'Which keyword deletes a variable?',
      options: ['delete', 'remove', 'del', 'clear'],
      correctAnswer: 2,
      explanation: 'The "del" keyword deletes variables or removes items from lists/dictionaries.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of: type(True)?',
      options: ['<class \'boolean\'>', '<class \'bool\'>', '<class \'int\'>', '<class \'true\'>'],
      correctAnswer: 1,
      explanation: 'Boolean values True and False have the type <class \'bool\'>.',
      difficulty: 'easy'
    },
    {
      question: 'Can you use reserved keywords as variable names?',
      options: [
        'Yes',
        'No',
        'Only in functions',
        'Only in classes'
      ],
      correctAnswer: 1,
      explanation: 'Reserved keywords (like if, for, while) cannot be used as variable names.',
      difficulty: 'easy'
    },
    {
      question: 'What is the output of: print(type(3.14))?',
      options: ['<class \'decimal\'>', '<class \'float\'>', '<class \'number\'>', '<class \'double\'>'],
      correctAnswer: 1,
      explanation: 'Decimal numbers like 3.14 are of type float in Python.',
      difficulty: 'easy'
    },
    {
      question: 'Which creates a tuple?',
      options: ['x = [1, 2, 3]', 'x = (1, 2, 3)', 'x = {1, 2, 3}', 'x = <1, 2, 3>'],
      correctAnswer: 1,
      explanation: 'Parentheses () create tuples. [] creates lists, {} creates sets/dicts.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of: int("42")?',
      options: ['42', '\'42\'', 'Error', 'None'],
      correctAnswer: 0,
      explanation: 'int("42") converts the string "42" to the integer 42.',
      difficulty: 'easy'
    },
    {
      question: 'What happens with: int("hello")?',
      options: ['0', 'hello', 'None', 'ValueError'],
      correctAnswer: 3,
      explanation: 'Attempting to convert non-numeric strings to int raises a ValueError.',
      difficulty: 'medium'
    },
    {
      question: 'Which operator gives the remainder of division?',
      options: ['/', '//', '%', '**'],
      correctAnswer: 2,
      explanation: 'The modulo operator % returns the remainder of division (e.g., 10 % 3 = 1).',
      difficulty: 'easy'
    },
    {
      question: 'What is the output of: 10 % 3?',
      options: ['0', '1', '3', '10'],
      correctAnswer: 1,
      explanation: '10 % 3 gives the remainder when 10 is divided by 3, which is 1.',
      difficulty: 'easy'
    },
    {
      question: 'What is string concatenation?',
      options: [
        'Splitting strings',
        'Joining strings together',
        'Converting strings',
        'Comparing strings'
      ],
      correctAnswer: 1,
      explanation: 'String concatenation is joining multiple strings together using the + operator.',
      difficulty: 'easy'
    },
    {
      question: 'What is the output of: "Hello" + "World"?',
      options: ['Hello World', 'HelloWorld', 'Error', 'Hello+World'],
      correctAnswer: 1,
      explanation: 'The + operator concatenates strings without spaces: "Hello" + "World" = "HelloWorld".',
      difficulty: 'easy'
    },
    {
      question: 'Which is the correct way to create a dictionary?',
      options: [
        'x = [key: value]',
        'x = {key: value}',
        'x = (key: value)',
        'x = <key: value>'
      ],
      correctAnswer: 1,
      explanation: 'Dictionaries use curly braces with key:value pairs: {\'name\': \'John\', \'age\': 30}.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of: float(5)?',
      options: ['5', '5.0', '\'5.0\'', 'Error'],
      correctAnswer: 1,
      explanation: 'float(5) converts the integer 5 to the float 5.0.',
      difficulty: 'easy'
    },
    {
      question: 'Can variable names start with a number?',
      options: ['Yes', 'No', 'Only if followed by letters', 'Only in Python 3'],
      correctAnswer: 1,
      explanation: 'Variable names cannot start with a number. They must start with a letter or underscore.',
      difficulty: 'easy'
    },
    {
      question: 'Which character is used for escape sequences?',
      options: ['/', '\\', '#', '@'],
      correctAnswer: 1,
      explanation: 'Backslash \\ is used for escape sequences like \\n (newline), \\t (tab), etc.',
      difficulty: 'easy'
    },
    {
      question: 'What is \\n in a string?',
      options: [
        'New line character',
        'Backslash n',
        'Tab character',
        'Space character'
      ],
      correctAnswer: 0,
      explanation: '\\n is the newline escape sequence, moving text to the next line.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of: bool(None)?',
      options: ['True', 'False', 'None', 'Error'],
      correctAnswer: 1,
      explanation: 'None is falsy in Python, so bool(None) returns False.',
      difficulty: 'easy'
    },
    {
      question: 'Which creates a set?',
      options: [
        'x = [1, 2, 3]',
        'x = (1, 2, 3)',
        'x = {1, 2, 3}',
        'x = set[1, 2, 3]'
      ],
      correctAnswer: 2,
      explanation: 'Curly braces {} without key:value pairs create a set. Use set() for empty sets.',
      difficulty: 'medium'
    },
    {
      question: 'What is the difference between single and double quotes?',
      options: [
        'Single quotes are faster',
        'No functional difference for strings',
        'Double quotes allow variables',
        'Single quotes only for characters'
      ],
      correctAnswer: 1,
      explanation: 'In Python, single and double quotes are functionally identical for creating strings.',
      difficulty: 'easy'
    },
    {
      question: 'What is a boolean in Python?',
      options: [
        'A data type with True/False values',
        'A number type',
        'A string type',
        'A collection type'
      ],
      correctAnswer: 0,
      explanation: 'Boolean is a data type with only two values: True and False.',
      difficulty: 'easy'
    },
    {
      question: 'What is the output of: 2 ** 3?',
      options: ['5', '6', '8', '9'],
      correctAnswer: 2,
      explanation: '** is the exponentiation operator. 2 ** 3 means 2³ = 8.',
      difficulty: 'easy'
    },
    {
      question: 'Which is the identity operator?',
      options: ['==', 'is', '===', 'id'],
      correctAnswer: 1,
      explanation: '"is" is the identity operator, checking if two variables refer to the same object.',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of: len("Python")?',
      options: ['5', '6', '7', 'Error'],
      correctAnswer: 1,
      explanation: 'len() returns the length of a string. "Python" has 6 characters.',
      difficulty: 'easy'
    },
    {
      question: 'Can you change a specific character in a string?',
      options: [
        'Yes, strings are mutable',
        'No, strings are immutable',
        'Only in Python 3',
        'Only with special methods'
      ],
      correctAnswer: 1,
      explanation: 'Strings are immutable in Python. You cannot change individual characters after creation.',
      difficulty: 'medium'
    },
    {
      question: 'What is string interpolation?',
      options: [
        'Splitting strings',
        'Embedding variables in strings',
        'Converting strings',
        'Comparing strings'
      ],
      correctAnswer: 1,
      explanation: 'String interpolation embeds variables in strings using f-strings: f"Hello {name}".',
      difficulty: 'medium'
    },
    {
      question: 'What is the output of: bool(1)?',
      options: ['True', 'False', '1', 'Error'],
      correctAnswer: 0,
      explanation: 'Any non-zero number is truthy in Python, so bool(1) returns True.',
      difficulty: 'easy'
    }
  ],

  'operators': [
    {
      question: 'What is the result of 10 % 3?',
      options: ['3', '1', '0', '10'],
      correctAnswer: 1,
      explanation: 'The modulo operator % returns the remainder of division: 10 % 3 = 1.',
      difficulty: 'easy'
    },
    {
      question: 'Which operator is used for exponentiation in Python?',
      options: ['^', '**', 'exp', 'pow'],
      correctAnswer: 1,
      explanation: 'The ** operator is used for exponentiation: 2 ** 3 = 8.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of 5 // 2?',
      options: ['2.5', '2', '3', '2.0'],
      correctAnswer: 1,
      explanation: 'The // operator performs floor division, returning the integer quotient.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of not True?',
      options: ['True', 'False', '0', '1'],
      correctAnswer: 1,
      explanation: 'The not operator inverts boolean values: not True = False.',
      difficulty: 'easy'
    },
    {
      question: 'Which operator checks if both conditions are true?',
      options: ['or', 'and', 'not', 'xor'],
      correctAnswer: 1,
      explanation: 'The "and" operator returns True only if both conditions are true.',
      difficulty: 'easy'
    },
    {
      question: 'What does the "is" operator check?',
      options: ['Value equality', 'Object identity', 'Type equality', 'None of these'],
      correctAnswer: 1,
      explanation: 'The "is" operator checks if two variables refer to the same object in memory.',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of 3 < 5 < 7?',
      options: ['True', 'False', 'Error', 'None'],
      correctAnswer: 0,
      explanation: 'Python allows chained comparisons: 3 < 5 < 7 is True.',
      difficulty: 'medium'
    },
    {
      question: 'What does the += operator do?',
      options: ['Addition', 'Add and assign', 'Increment', 'Concatenate'],
      correctAnswer: 1,
      explanation: '+= adds the right operand to the left operand and assigns the result: x += 5 means x = x + 5.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of True or False?',
      options: ['True', 'False', 'Error', 'None'],
      correctAnswer: 0,
      explanation: 'The "or" operator returns True if at least one condition is true.',
      difficulty: 'easy'
    },
    {
      question: 'Which operator is used for string concatenation?',
      options: ['&', '+', '.', ','],
      correctAnswer: 1,
      explanation: 'The + operator concatenates strings: "Hello" + "World" = "HelloWorld".',
      difficulty: 'easy'
    },
    {
      question: 'What is the precedence order between * and +?',
      options: ['+ before *', '* before +', 'Same precedence', 'Depends on position'],
      correctAnswer: 1,
      explanation: 'Multiplication (*) has higher precedence than addition (+): 2 + 3 * 4 = 14, not 20.',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of 10 / 3?',
      options: ['3', '3.0', '3.333333333333333', '3.33'],
      correctAnswer: 2,
      explanation: 'The / operator performs true division, returning a float with full precision.',
      difficulty: 'easy'
    },
    {
      question: 'What does the != operator do?',
      options: ['Assign value', 'Not equal', 'Not identity', 'Negate'],
      correctAnswer: 1,
      explanation: '!= checks if two values are not equal: 5 != 3 returns True.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of 2 ** 10?',
      options: ['20', '100', '1024', '512'],
      correctAnswer: 2,
      explanation: '** is the exponentiation operator: 2 ** 10 = 2^10 = 1024.',
      difficulty: 'easy'
    },
    {
      question: 'Which operator checks membership in a sequence?',
      options: ['in', 'is', 'has', 'contains'],
      correctAnswer: 0,
      explanation: 'The "in" operator checks if a value exists in a sequence: "a" in "apple" returns True.',
      difficulty: 'easy'
    },
    {
      question: 'What is short-circuit evaluation?',
      options: [
        'Fast execution',
        'Stopping evaluation when result is determined',
        'Skipping code',
        'Error handling'
      ],
      correctAnswer: 1,
      explanation: 'Short-circuit evaluation stops when the result is certain: False and X doesn\'t evaluate X.',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of 5 == 5.0?',
      options: ['True', 'False', 'Error', 'None'],
      correctAnswer: 0,
      explanation: '== compares values, not types. 5 and 5.0 have equal values, so it returns True.',
      difficulty: 'medium'
    },
    {
      question: 'What does the // operator return for negative numbers?',
      options: ['Rounds down', 'Rounds up', 'Rounds toward zero', 'Error'],
      correctAnswer: 0,
      explanation: '// always rounds down (toward negative infinity): -17 // 5 = -4.',
      difficulty: 'hard'
    },
    {
      question: 'What is the result of not not True?',
      options: ['True', 'False', 'Error', 'None'],
      correctAnswer: 0,
      explanation: 'Double negation returns the original value: not not True = True.',
      difficulty: 'easy'
    },
    {
      question: 'Which operator has the lowest precedence?',
      options: ['or', 'and', 'not', '**'],
      correctAnswer: 0,
      explanation: '"or" has the lowest precedence among logical operators: not > and > or.',
      difficulty: 'hard'
    },
    {
      question: 'What is the result of 0 or 5?',
      options: ['0', '5', 'True', 'False'],
      correctAnswer: 1,
      explanation: '"or" returns the first truthy value: 0 is falsy, so it returns 5.',
      difficulty: 'medium'
    },
    {
      question: 'What does the *= operator do?',
      options: ['Multiply', 'Multiply and assign', 'Repeat', 'All of the above'],
      correctAnswer: 3,
      explanation: '*= multiplies and assigns for numbers, and repeats for sequences: x *= 3 means x = x * 3.',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of "Hi" * 3?',
      options: ['"HiHiHi"', 'Error', '"Hi3"', '6'],
      correctAnswer: 0,
      explanation: '* operator repeats strings: "Hi" * 3 = "HiHiHi".',
      difficulty: 'easy'
    },
    {
      question: 'Which operator is used for bitwise AND?',
      options: ['&&', 'and', '&', 'AND'],
      correctAnswer: 2,
      explanation: '& is the bitwise AND operator: 5 & 3 = 1 (binary: 101 & 011 = 001).',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of 10 & 7 (bitwise AND)?',
      options: ['2', '17', '6', '10'],
      correctAnswer: 0,
      explanation: 'Bitwise AND: 1010 & 0111 = 0010 = 2.',
      difficulty: 'hard'
    },
    {
      question: 'What does the | operator do?',
      options: ['Bitwise OR', 'Logical OR', 'Pipe', 'Division'],
      correctAnswer: 0,
      explanation: '| is the bitwise OR operator: 5 | 3 = 7 (binary: 101 | 011 = 111).',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of 5 << 1 (left shift)?',
      options: ['5', '10', '2', '6'],
      correctAnswer: 1,
      explanation: 'Left shift << moves bits left: 101 << 1 = 1010 = 10.',
      difficulty: 'hard'
    },
    {
      question: 'What is the result of ~5 (bitwise NOT)?',
      options: ['-6', '-5', '5', '6'],
      correctAnswer: 0,
      explanation: 'Bitwise NOT inverts bits: ~5 = -(5+1) = -6 in two\'s complement.',
      difficulty: 'hard'
    },
    {
      question: 'What does the ^ operator do?',
      options: ['Exponentiation', 'Bitwise XOR', 'Logical XOR', 'Power'],
      correctAnswer: 1,
      explanation: '^ is the bitwise XOR operator: 5 ^ 3 = 6 (binary: 101 ^ 011 = 110).',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of 8 >> 2 (right shift)?',
      options: ['16', '4', '2', '1'],
      correctAnswer: 2,
      explanation: 'Right shift >> moves bits right: 1000 >> 2 = 0010 = 2.',
      difficulty: 'hard'
    },
    {
      question: 'Which operator cannot be overloaded in Python?',
      options: ['+', 'is', '*', '=='],
      correctAnswer: 1,
      explanation: 'The "is" and "is not" operators cannot be overloaded as they check object identity.',
      difficulty: 'hard'
    },
    {
      question: 'What is the result of [] or {}?',
      options: ['[]', '{}', 'False', 'Error'],
      correctAnswer: 1,
      explanation: 'Empty list is falsy, so "or" returns the second value {}.',
      difficulty: 'medium'
    },
    {
      question: 'What does the @ operator do in Python 3.5+?',
      options: ['Decorator', 'Matrix multiplication', 'At symbol', 'Email'],
      correctAnswer: 1,
      explanation: '@ is the matrix multiplication operator introduced in Python 3.5 (PEP 465).',
      difficulty: 'hard'
    },
    {
      question: 'What is the result of divmod(17, 5)?',
      options: ['(3, 2)', '3.4', '3', '2'],
      correctAnswer: 0,
      explanation: 'divmod() returns both quotient and remainder as a tuple: (17//5, 17%5) = (3, 2).',
      difficulty: 'medium'
    },
    {
      question: 'What is the walrus operator?',
      options: [':=', '==', '=>', '->'],
      correctAnswer: 0,
      explanation: ':= is the walrus operator (assignment expression) introduced in Python 3.8.',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of True + True?',
      options: ['2', 'True', 'Error', '1'],
      correctAnswer: 0,
      explanation: 'True is equivalent to 1 and False to 0 in arithmetic: True + True = 2.',
      difficulty: 'medium'
    },
    {
      question: 'What does the ** operator do with negative exponents?',
      options: ['Error', 'Returns fraction', 'Returns negative', 'Rounds down'],
      correctAnswer: 1,
      explanation: 'Negative exponents return fractions: 2 ** -2 = 0.25 (1/4).',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of "Python"[0]?',
      options: ['"P"', 'P', "'P'", 'Error'],
      correctAnswer: 0,
      explanation: 'Indexing strings with [0] returns the first character as a string.',
      difficulty: 'easy'
    },
    {
      question: 'What is operator overloading?',
      options: [
        'Using too many operators',
        'Defining custom behavior for operators in classes',
        'Multiple operators in one line',
        'Overwriting built-in operators'
      ],
      correctAnswer: 1,
      explanation: 'Operator overloading lets you define how operators work with custom objects using special methods.',
      difficulty: 'hard'
    },
    {
      question: 'What is the result of 5 / 0?',
      options: ['0', 'Infinity', 'ZeroDivisionError', 'None'],
      correctAnswer: 2,
      explanation: 'Dividing by zero raises a ZeroDivisionError exception.',
      difficulty: 'easy'
    },
    {
      question: 'Which comparison can chain: a < b < c?',
      options: ['All comparisons', 'Only < and >', 'Only == and !=', 'Not possible'],
      correctAnswer: 0,
      explanation: 'Python allows chaining any comparison operators: a < b < c, a <= b >= c, etc.',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of 10 // -3?',
      options: ['-3', '-4', '3', '-3.33'],
      correctAnswer: 1,
      explanation: 'Floor division always rounds down (toward negative infinity): 10 // -3 = -4.',
      difficulty: 'hard'
    },
    {
      question: 'What does the "not in" operator do?',
      options: [
        'Checks if value is not in sequence',
        'Negates membership',
        'Both A and B',
        'Syntax error'
      ],
      correctAnswer: 2,
      explanation: '"not in" checks if a value is not present in a sequence: "x" not in "hello" returns True.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of pow(2, 3, 5)?',
      options: ['8', '3', '1', '13'],
      correctAnswer: 1,
      explanation: 'pow(x, y, z) computes (x**y) % z efficiently: (2**3) % 5 = 8 % 5 = 3.',
      difficulty: 'hard'
    },
    {
      question: 'What is the associativity of the ** operator?',
      options: ['Left-to-right', 'Right-to-left', 'No associativity', 'Bidirectional'],
      correctAnswer: 1,
      explanation: '** is right-associative: 2 ** 3 ** 2 = 2 ** (3 ** 2) = 2 ** 9 = 512.',
      difficulty: 'hard'
    },
    {
      question: 'What is the result of abs(-5)?',
      options: ['5', '-5', '0', 'Error'],
      correctAnswer: 0,
      explanation: 'abs() returns the absolute value: abs(-5) = 5.',
      difficulty: 'easy'
    },
    {
      question: 'What is the ternary operator syntax in Python?',
      options: [
        'condition ? true : false',
        'true if condition else false',
        'if condition then true else false',
        'condition and true or false'
      ],
      correctAnswer: 1,
      explanation: 'Python\'s ternary operator: x = value_if_true if condition else value_if_false.',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of round(2.5)?',
      options: ['2', '3', '2.5', '3.0'],
      correctAnswer: 0,
      explanation: 'round() uses "banker\'s rounding" (round to even): round(2.5) = 2, round(3.5) = 4.',
      difficulty: 'hard'
    },
    {
      question: 'What does the // operator return for floats?',
      options: ['Integer', 'Float', 'Depends on inputs', 'Error'],
      correctAnswer: 1,
      explanation: '// returns a float if either operand is a float: 10.0 // 3 = 3.0.',
      difficulty: 'medium'
    }
  ],

  'control-flow-basics': [
    {
      question: 'What is the purpose of if statements?',
      options: ['Loop execution', 'Make decisions', 'Define functions', 'Import modules'],
      correctAnswer: 1,
      explanation: 'if statements allow programs to make decisions and execute different code based on conditions.',
      difficulty: 'easy'
    },
    {
      question: 'What is the correct syntax for an if statement?',
      options: ['if (x > 5):', 'if x > 5:', 'if x > 5 then:', 'if x > 5 {'],
      correctAnswer: 1,
      explanation: 'Python uses "if condition:" without parentheses or braces.',
      difficulty: 'easy'
    },
    {
      question: 'What does elif stand for?',
      options: ['Else If', 'Elif', 'Electronic If', 'End If'],
      correctAnswer: 0,
      explanation: 'elif is short for "else if", used to check multiple conditions.',
      difficulty: 'easy'
    },
    {
      question: 'How many elif statements can you have?',
      options: ['Only 1', 'Up to 10', 'Unlimited', 'Only 3'],
      correctAnswer: 2,
      explanation: 'You can have unlimited elif statements in Python.',
      difficulty: 'easy'
    },
    {
      question: 'What is the else clause used for?',
      options: [
        'Additional condition',
        'Default case when no conditions are true',
        'Error handling',
        'Loop termination'
      ],
      correctAnswer: 1,
      explanation: 'else executes when all if/elif conditions are false (default case).',
      difficulty: 'easy'
    },
    {
      question: 'What is indentation used for in Python?',
      options: ['Decoration', 'Define code blocks', 'Optional styling', 'Comments'],
      correctAnswer: 1,
      explanation: 'Indentation is mandatory in Python and defines code blocks.',
      difficulty: 'easy'
    },
    {
      question: 'What happens if you mix tabs and spaces?',
      options: ['Works fine', 'TabError', 'IndentationError', 'SyntaxError'],
      correctAnswer: 1,
      explanation: 'Mixing tabs and spaces causes a TabError or IndentationError.',
      difficulty: 'medium'
    },
    {
      question: 'Can you have an if statement without else?',
      options: ['Yes', 'No', 'Only with elif', 'Deprecated'],
      correctAnswer: 0,
      explanation: 'else is optional. You can have if alone or if-elif without else.',
      difficulty: 'easy'
    },
    {
      question: 'What is nested if?',
      options: [
        'If inside another if',
        'Multiple if on same level',
        'If with multiple conditions',
        'Invalid syntax'
      ],
      correctAnswer: 0,
      explanation: 'Nested if statements are if statements inside other if blocks.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of: if 0: print("Yes")?',
      options: ['Prints "Yes"', 'Prints nothing', 'Error', 'Prints "0"'],
      correctAnswer: 1,
      explanation: '0 is falsy in Python, so the condition is False and nothing prints.',
      difficulty: 'medium'
    },
    {
      question: 'What does pass do in an if statement?',
      options: ['Skip to else', 'Do nothing (placeholder)', 'Pass value', 'Exit if'],
      correctAnswer: 1,
      explanation: 'pass is a null operation placeholder used when syntax requires a statement.',
      difficulty: 'medium'
    },
    {
      question: 'Which values are falsy in Python?',
      options: [
        'Only False',
        'False, 0, empty strings/lists/dicts, None',
        'Only None',
        'Only 0'
      ],
      correctAnswer: 1,
      explanation: 'Falsy values include False, 0, 0.0, "", [], {}, None.',
      difficulty: 'medium'
    },
    {
      question: 'Can you use and/or in if conditions?',
      options: ['Yes', 'No', 'Only and', 'Only or'],
      correctAnswer: 0,
      explanation: 'You can use and, or, not to combine conditions: if x > 5 and y < 10:.',
      difficulty: 'easy'
    },
    {
      question: 'What is the one-line if syntax called?',
      options: ['Inline if', 'Ternary operator', 'Short if', 'Conditional expression'],
      correctAnswer: 3,
      explanation: 'value = x if condition else y is a conditional expression or ternary operator.',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of: if []: print("Yes")?',
      options: ['Prints "Yes"', 'Prints nothing', 'Error', 'Prints "[]"'],
      correctAnswer: 1,
      explanation: 'Empty lists are falsy, so the condition is False.',
      difficulty: 'medium'
    },
    {
      question: 'Can you have elif without if?',
      options: ['Yes', 'No', 'Only in loops', 'Deprecated'],
      correctAnswer: 1,
      explanation: 'elif must follow an if statement; it cannot exist alone.',
      difficulty: 'easy'
    },
    {
      question: 'What is the maximum nesting level for if statements?',
      options: ['3 levels', '10 levels', 'Unlimited', '5 levels'],
      correctAnswer: 2,
      explanation: 'Python doesn\'t limit nesting depth, but PEP 8 recommends keeping it shallow for readability.',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of: if "": print("Yes")?',
      options: ['Prints "Yes"', 'Prints nothing', 'Error', 'Prints ""'],
      correctAnswer: 1,
      explanation: 'Empty strings are falsy in Python.',
      difficulty: 'easy'
    },
    {
      question: 'Can you use comparison chaining in if?',
      options: ['Yes', 'No', 'Only with and', 'Deprecated'],
      correctAnswer: 0,
      explanation: 'Python supports chaining: if 1 < x < 10: is valid.',
      difficulty: 'medium'
    },
    {
      question: 'What does "if not x:" check for?',
      options: ['x is None', 'x is False', 'x is falsy', 'x is empty'],
      correctAnswer: 2,
      explanation: '"if not x:" checks if x is falsy (False, 0, None, empty, etc.).',
      difficulty: 'medium'
    },
    {
      question: 'What is the match statement introduced in Python 3.10?',
      options: [
        'String matching',
        'Structural pattern matching (switch-case alternative)',
        'Regular expressions',
        'File matching'
      ],
      correctAnswer: 1,
      explanation: 'match-case is Python\'s structural pattern matching, similar to switch-case in other languages.',
      difficulty: 'hard'
    },
    {
      question: 'Can you assign values in if conditions?',
      options: [
        'No',
        'Yes, using := (walrus operator)',
        'Yes, using =',
        'Only in Python 2'
      ],
      correctAnswer: 1,
      explanation: 'The walrus operator := allows assignment in conditions: if (n := len(list)) > 10:.',
      difficulty: 'hard'
    },
    {
      question: 'What is the result of: if 1 and 0: print("Yes")?',
      options: ['Prints "Yes"', 'Prints nothing', 'Error', 'Prints "1"'],
      correctAnswer: 1,
      explanation: '1 is truthy but 0 is falsy: 1 and 0 returns 0 (falsy).',
      difficulty: 'medium'
    },
    {
      question: 'What is guard clause pattern?',
      options: [
        'Protecting variables',
        'Early return to handle edge cases',
        'Error handling',
        'Loop protection'
      ],
      correctAnswer: 1,
      explanation: 'Guard clauses are early if-return statements that handle special cases first.',
      difficulty: 'hard'
    },
    {
      question: 'What is the result of: if None: print("Yes")?',
      options: ['Prints "Yes"', 'Prints nothing', 'Error', 'Prints "None"'],
      correctAnswer: 1,
      explanation: 'None is falsy, so the condition is False.',
      difficulty: 'easy'
    },
    {
      question: 'Can you use break in if statements?',
      options: [
        'No',
        'Yes, if inside a loop',
        'Yes, always',
        'Only in Python 3'
      ],
      correctAnswer: 1,
      explanation: 'break only works inside loops, not standalone if statements.',
      difficulty: 'medium'
    },
    {
      question: 'What is the any() function used for?',
      options: [
        'Check if any value exists',
        'Check if any value in iterable is truthy',
        'Random selection',
        'Type checking'
      ],
      correctAnswer: 1,
      explanation: 'any() returns True if any element in an iterable is truthy.',
      difficulty: 'medium'
    },
    {
      question: 'What is the all() function used for?',
      options: [
        'Select all items',
        'Check if all values in iterable are truthy',
        'Count items',
        'Sort items'
      ],
      correctAnswer: 1,
      explanation: 'all() returns True if all elements in an iterable are truthy.',
      difficulty: 'medium'
    },
    {
      question: 'What is truthiness testing?',
      options: [
        'Testing for True value',
        'Evaluating objects in boolean context',
        'Unit testing',
        'Debugging'
      ],
      correctAnswer: 1,
      explanation: 'Truthiness testing evaluates how objects behave in boolean contexts (if statements).',
      difficulty: 'medium'
    },
    {
      question: 'What is the difference between "if x" and "if x is True"?',
      options: [
        'No difference',
        '"if x" checks truthiness, "if x is True" checks identity',
        'Same result',
        'Syntax error'
      ],
      correctAnswer: 1,
      explanation: '"if x" checks if x is truthy (1, "hello", etc.), "if x is True" checks if x is literally True.',
      difficulty: 'hard'
    },
    {
      question: 'What is the result of: if [0]: print("Yes")?',
      options: ['Prints "Yes"', 'Prints nothing', 'Error', 'Prints "0"'],
      correctAnswer: 0,
      explanation: '[0] is a non-empty list (truthy), even though it contains 0.',
      difficulty: 'medium'
    },
    {
      question: 'Can you have multiple conditions in one elif?',
      options: ['No', 'Yes, using and/or', 'Only with nested if', 'Deprecated'],
      correctAnswer: 1,
      explanation: 'Use and/or to combine multiple conditions: elif x > 5 and y < 10:.',
      difficulty: 'easy'
    },
    {
      question: 'What is the assert statement used for?',
      options: [
        'Variable assignment',
        'Debugging and testing assumptions',
        'Error handling',
        'Logging'
      ],
      correctAnswer: 1,
      explanation: 'assert checks if a condition is True, raising AssertionError if False (used for debugging).',
      difficulty: 'medium'
    },
    {
      question: 'What happens with: if x = 5: print("Yes")?',
      options: ['Assigns and prints', 'SyntaxError', 'Assigns only', 'Prints only'],
      correctAnswer: 1,
      explanation: 'Single = is assignment, not comparison. Use == for equality or := for assignment expression.',
      difficulty: 'easy'
    },
    {
      question: 'What is early exit pattern?',
      options: [
        'Exiting programs',
        'Returning early from functions to avoid deep nesting',
        'Breaking loops',
        'Error handling'
      ],
      correctAnswer: 1,
      explanation: 'Early exit uses early returns to handle special cases, avoiding deep nested if-else blocks.',
      difficulty: 'medium'
    },
    {
      question: 'Can you use assignment expression in elif?',
      options: ['No', 'Yes, with :=', 'Only in Python 4', 'Deprecated'],
      correctAnswer: 1,
      explanation: 'Walrus operator works in elif: elif (n := calculate()) > 10:.',
      difficulty: 'hard'
    },
    {
      question: 'What is the result of: if {}: print("Yes")?',
      options: ['Prints "Yes"', 'Prints nothing', 'Error', 'Prints "{}"'],
      correctAnswer: 1,
      explanation: 'Empty dictionaries are falsy in Python.',
      difficulty: 'easy'
    },
    {
      question: 'What is De Morgan\'s Law applied to if statements?',
      options: [
        'not (A and B) = (not A) or (not B)',
        'A and B = not A or not B',
        'Unrelated to if',
        'Syntax rule'
      ],
      correctAnswer: 0,
      explanation: 'De Morgan\'s Law: not (A and B) equals (not A) or (not B), useful for simplifying conditions.',
      difficulty: 'hard'
    },
    {
      question: 'What is the recommended max depth for nested if?',
      options: ['1 level', '2-3 levels (PEP 8 guideline)', 'Unlimited', '5 levels'],
      correctAnswer: 1,
      explanation: 'PEP 8 recommends keeping nesting shallow (2-3 levels) for readability.',
      difficulty: 'medium'
    },
    {
      question: 'Can you use in operator in if conditions?',
      options: ['No', 'Yes', 'Only with lists', 'Only with strings'],
      correctAnswer: 1,
      explanation: '"in" works in if statements: if "a" in "apple": or if 5 in [1,2,3,4,5]:.',
      difficulty: 'easy'
    },
    {
      question: 'What is the result of: if "False": print("Yes")?',
      options: ['Prints "Yes"', 'Prints nothing', 'Error', 'Depends'],
      correctAnswer: 0,
      explanation: 'Non-empty strings are truthy, even if they contain "False".',
      difficulty: 'medium'
    },
    {
      question: 'What is EAFP principle in Python?',
      options: [
        'Error After Failure Principle',
        'Easier to Ask Forgiveness than Permission',
        'Exception And Finally Pattern',
        'Early And Fast Processing'
      ],
      correctAnswer: 1,
      explanation: 'EAFP: try-except instead of if checks. Example: try accessing dict key vs checking if key exists.',
      difficulty: 'hard'
    },
    {
      question: 'What is LBYL principle?',
      options: [
        'Look Before You Leap (check before action)',
        'Loop Before You Leave',
        'List Before You Load',
        'Lock Before You Link'
      ],
      correctAnswer: 0,
      explanation: 'LBYL: check conditions with if before performing actions (opposite of EAFP).',
      difficulty: 'hard'
    },
    {
      question: 'What is the result of: if (x := 5) > 3: print(x)?',
      options: ['5', 'True', 'Error', 'Nothing'],
      correctAnswer: 0,
      explanation: 'Walrus operator assigns 5 to x, then checks x > 3 (True), and prints 5.',
      difficulty: 'hard'
    },
    {
      question: 'Can you have if inside a list comprehension?',
      options: ['No', 'Yes, as filter', 'Only in Python 3', 'Deprecated'],
      correctAnswer: 1,
      explanation: 'if can filter list comprehensions: [x for x in range(10) if x % 2 == 0].',
      difficulty: 'medium'
    },
    {
      question: 'What is the result of: if 1 < 2 < 3 < 4: print("Yes")?',
      options: ['Prints "Yes"', 'Prints nothing', 'Error', 'Depends'],
      correctAnswer: 0,
      explanation: 'Chained comparisons all evaluate to True: 1 < 2 and 2 < 3 and 3 < 4.',
      difficulty: 'easy'
    },
    {
      question: 'What is the bool() function used for?',
      options: [
        'Create boolean',
        'Test truthiness of any value',
        'Boolean operations',
        'Type conversion only'
      ],
      correctAnswer: 1,
      explanation: 'bool() returns the truthiness of any value: bool([]) = False, bool([1]) = True.',
      difficulty: 'medium'
    },
    {
      question: 'What is conditional execution?',
      options: [
        'Running code based on conditions',
        'Executing conditions',
        'Optional code',
        'Delayed execution'
      ],
      correctAnswer: 0,
      explanation: 'Conditional execution means running different code paths based on whether conditions are true or false.',
      difficulty: 'easy'
    },
    {
      question: 'What is the simplest if statement?',
      options: [
        'if True:',
        'if x:',
        'if 1:',
        'All are equally simple'
      ],
      correctAnswer: 3,
      explanation: 'All are valid simple if statements. "if x:" is most common for variable checking.',
      difficulty: 'easy'
    }
  ],

  'loops-for-while': [
    {
      question: 'What is a for loop used for?',
      options: ['Decisions', 'Iterating over sequences', 'Defining functions', 'Error handling'],
      correctAnswer: 1,
      explanation: 'for loops iterate over sequences (lists, strings, ranges, etc.).',
      difficulty: 'easy'
    },
    {
      question: 'What does range(5) produce?',
      options: ['[1,2,3,4,5]', '[0,1,2,3,4]', '[0,1,2,3,4,5]', 'Error'],
      correctAnswer: 1,
      explanation: 'range(5) generates numbers from 0 to 4 (5 numbers total).',
      difficulty: 'easy'
    },
    {
      question: 'What is the while loop condition checked?',
      options: ['Before each iteration', 'After each iteration', 'Once at start', 'At the end'],
      correctAnswer: 0,
      explanation: 'while checks the condition before each iteration.',
      difficulty: 'easy'
    },
    {
      question: 'What does break do in a loop?',
      options: ['Pause loop', 'Exit loop immediately', 'Skip iteration', 'Restart loop'],
      correctAnswer: 1,
      explanation: 'break exits the loop immediately, skipping remaining iterations.',
      difficulty: 'easy'
    },
    {
      question: 'What does continue do in a loop?',
      options: ['Exit loop', 'Skip to next iteration', 'Pause loop', 'Restart loop'],
      correctAnswer: 1,
      explanation: 'continue skips the rest of the current iteration and moves to the next.',
      difficulty: 'easy'
    },
    {
      question: 'What is an infinite loop?',
      options: [
        'Very long loop',
        'Loop that never terminates',
        'Nested loop',
        'Error condition'
      ],
      correctAnswer: 1,
      explanation: 'Infinite loops have conditions that never become false (e.g., while True:).',
      difficulty: 'easy'
    },
    {
      question: 'What is the enumerate() function used for?',
      options: [
        'Count items',
        'Get index and value pairs when iterating',
        'Number items',
        'Sort items'
      ],
      correctAnswer: 1,
      explanation: 'enumerate() provides both index and value: for i, val in enumerate(list):.',
      difficulty: 'medium'
    },
    {
      question: 'What does range(1, 10, 2) produce?',
      options: ['[1,3,5,7,9]', '[1,2,3,4,5]', '[2,4,6,8,10]', 'Error'],
      correctAnswer: 0,
      explanation: 'range(start, stop, step): range(1, 10, 2) generates 1,3,5,7,9.',
      difficulty: 'medium'
    },
    {
      question: 'Can you use else with loops?',
      options: ['No', 'Yes, executes if loop completes normally', 'Only with for', 'Only with while'],
      correctAnswer: 1,
      explanation: 'Loop else executes after normal loop completion (not if broken with break).',
      difficulty: 'medium'
    },
    {
      question: 'What is a nested loop?',
      options: [
        'Loop with conditions',
        'Loop inside another loop',
        'Long loop',
        'Reverse loop'
      ],
      correctAnswer: 1,
      explanation: 'Nested loops are loops placed inside other loops.',
      difficulty: 'easy'
    },
    {
      question: 'How do you iterate over a string?',
      options: [
        'for char in string:',
        'for string in char:',
        'while string:',
        'Cannot iterate strings'
      ],
      correctAnswer: 0,
      explanation: 'Strings are iterable: for char in "hello": iterates each character.',
      difficulty: 'easy'
    },
    {
      question: 'What is the zip() function used for?',
      options: [
        'Compress files',
        'Combine multiple iterables element-wise',
        'Sort items',
        'Filter items'
      ],
      correctAnswer: 1,
      explanation: 'zip() pairs elements from multiple iterables: zip([1,2], ["a","b"]) -> [(1,"a"), (2,"b")].',
      difficulty: 'medium'
    },
    {
      question: 'What does pass do in a loop?',
      options: ['Exit loop', 'Do nothing (placeholder)', 'Skip iteration', 'Continue loop'],
      correctAnswer: 1,
      explanation: 'pass is a null operation used as a placeholder when syntax requires a statement.',
      difficulty: 'medium'
    },
    {
      question: 'How do you reverse iterate?',
      options: [
        'for i in reverse(list):',
        'for i in reversed(list):',
        'for i in list.reverse():',
        'Cannot reverse iterate'
      ],
      correctAnswer: 1,
      explanation: 'reversed() creates a reverse iterator: for i in reversed([1,2,3]):.',
      difficulty: 'medium'
    },
    {
      question: 'What is list comprehension an alternative to?',
      options: [
        'if statements',
        'for loops that build lists',
        'while loops',
        'Functions'
      ],
      correctAnswer: 1,
      explanation: 'List comprehension is a concise way to create lists: [x*2 for x in range(5)].',
      difficulty: 'medium'
    },
    {
      question: 'What does the else clause do after a for loop?',
      options: [
        'Always executes',
        'Executes if loop wasn\'t broken',
        'Handles errors',
        'Never executes'
      ],
      correctAnswer: 1,
      explanation: 'Loop else only executes if the loop completed normally (not broken with break).',
      difficulty: 'medium'
    },
    {
      question: 'How do you iterate with both index and value?',
      options: [
        'for i, v in list:',
        'for i, v in enumerate(list):',
        'for i in range(len(list)):',
        'Cannot do both'
      ],
      correctAnswer: 1,
      explanation: 'enumerate() provides both: for index, value in enumerate(mylist):.',
      difficulty: 'easy'
    },
    {
      question: 'What is the difference between range() in Python 2 and 3?',
      options: [
        'No difference',
        'Python 3 range returns iterator, Python 2 returns list',
        'Python 2 doesn\'t have range',
        'Syntax is different'
      ],
      correctAnswer: 1,
      explanation: 'Python 3 range() is an iterator (memory efficient), Python 2 range() created a list.',
      difficulty: 'hard'
    },
    {
      question: 'Can you modify a list while iterating it?',
      options: [
        'Yes, always safe',
        'No, can cause unexpected behavior',
        'Only with for',
        'Only with while'
      ],
      correctAnswer: 1,
      explanation: 'Modifying a list during iteration can skip or duplicate elements. Use copy or list comprehension.',
      difficulty: 'hard'
    },
    {
      question: 'What is the iter() function used for?',
      options: [
        'Count iterations',
        'Create an iterator from an iterable',
        'Iterate backwards',
        'Stop iteration'
      ],
      correctAnswer: 1,
      explanation: 'iter() creates an iterator object from any iterable.',
      difficulty: 'medium'
    },
    {
      question: 'What does next() do with iterators?',
      options: [
        'Skip to end',
        'Get next item from iterator',
        'Reset iterator',
        'Count items'
      ],
      correctAnswer: 1,
      explanation: 'next() retrieves the next item from an iterator, raising StopIteration when exhausted.',
      difficulty: 'medium'
    },
    {
      question: 'What is a generator?',
      options: [
        'Function that returns iterator using yield',
        'List creator',
        'Random number generator',
        'Loop type'
      ],
      correctAnswer: 0,
      explanation: 'Generators are functions that yield values one at a time, creating iterators efficiently.',
      difficulty: 'hard'
    },
    {
      question: 'What is the difference between for and while?',
      options: [
        'No difference',
        'for iterates known sequences, while continues until condition is false',
        'for is faster',
        'while is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'for is used for iterating sequences, while continues as long as a condition is true.',
      difficulty: 'medium'
    },
    {
      question: 'Can you use break with else in loops?',
      options: [
        'No',
        'Yes, else skipped if break is used',
        'Yes, else always executes',
        'Syntax error'
      ],
      correctAnswer: 1,
      explanation: 'break prevents else from executing. else only runs if loop completes normally.',
      difficulty: 'medium'
    },
    {
      question: 'What does _ conventionally mean in for loops?',
      options: [
        'Error',
        'Throwaway variable (value not used)',
        'Last value',
        'All values'
      ],
      correctAnswer: 1,
      explanation: '_ is used when you need to loop but don\'t use the variable: for _ in range(5):.',
      difficulty: 'medium'
    },
    {
      question: 'How do you iterate over dictionary keys?',
      options: [
        'for key in dict:',
        'for key in dict.keys():',
        'Both A and B',
        'Cannot iterate dict'
      ],
      correctAnswer: 2,
      explanation: 'Both work. for key in dict: is more common and Pythonic.',
      difficulty: 'easy'
    },
    {
      question: 'How do you iterate over dictionary values?',
      options: [
        'for val in dict.values():',
        'for val in dict:',
        'for val in dict.vals():',
        'Cannot do this'
      ],
      correctAnswer: 0,
      explanation: 'Use .values() method: for value in mydict.values():.',
      difficulty: 'easy'
    },
    {
      question: 'How do you iterate over dictionary key-value pairs?',
      options: [
        'for k, v in dict:',
        'for k, v in dict.items():',
        'for pair in dict:',
        'Cannot do this'
      ],
      correctAnswer: 1,
      explanation: 'Use .items() method: for key, value in mydict.items():.',
      difficulty: 'easy'
    },
    {
      question: 'What is the output of: for i in range(3): print(i)  else: print("Done")?',
      options: [
        '0 1 2',
        '0 1 2 Done',
        'Done',
        'Error'
      ],
      correctAnswer: 1,
      explanation: 'Loop prints 0,1,2 then else executes printing "Done".',
      difficulty: 'medium'
    },
    {
      question: 'What is the filter() function?',
      options: [
        'Remove items',
        'Create iterator of items that pass a test function',
        'Sort items',
        'Find items'
      ],
      correctAnswer: 1,
      explanation: 'filter(function, iterable) returns iterator of items where function returns True.',
      difficulty: 'medium'
    },
    {
      question: 'What is the map() function?',
      options: [
        'Create dictionary',
        'Apply function to all items in iterable',
        'Navigate data',
        'Sort items'
      ],
      correctAnswer: 1,
      explanation: 'map(function, iterable) applies function to each item: map(str.upper, ["a","b"]).',
      difficulty: 'medium'
    },
    {
      question: 'Can you use multiple variables in a for loop?',
      options: [
        'No',
        'Yes, with tuple unpacking',
        'Only with enumerate',
        'Only with zip'
      ],
      correctAnswer: 1,
      explanation: 'Tuple unpacking allows multiple variables: for x, y in [(1,2), (3,4)]:.',
      difficulty: 'medium'
    },
    {
      question: 'What is itertools module used for?',
      options: [
        'Tool functions',
        'Advanced iteration functions',
        'Time functions',
        'Error handling'
      ],
      correctAnswer: 1,
      explanation: 'itertools provides efficient iterators: combinations, permutations, cycle, etc.',
      difficulty: 'hard'
    },
    {
      question: 'What does sum() do with a loop?',
      options: [
        'Summarizes code',
        'Returns sum of all items in iterable',
        'Counts items',
        'Adds to total'
      ],
      correctAnswer: 1,
      explanation: 'sum(iterable) returns the sum of all numbers: sum([1,2,3]) = 6.',
      difficulty: 'easy'
    },
    {
      question: 'What is the any() function with loops?',
      options: [
        'Select any item',
        'Returns True if any item is truthy',
        'Random selection',
        'First item'
      ],
      correctAnswer: 1,
      explanation: 'any() returns True if at least one element is truthy: any([False, 0, 1]) = True.',
      difficulty: 'medium'
    },
    {
      question: 'What is the all() function with loops?',
      options: [
        'Select all items',
        'Returns True if all items are truthy',
        'Count items',
        'List items'
      ],
      correctAnswer: 1,
      explanation: 'all() returns True only if all elements are truthy: all([True, 1, "hi"]) = True.',
      difficulty: 'medium'
    },
    {
      question: 'Can you use return in a loop?',
      options: [
        'No',
        'Yes, if loop is inside a function',
        'Only with for',
        'Only with while'
      ],
      correctAnswer: 1,
      explanation: 'return exits the function immediately, stopping the loop.',
      difficulty: 'medium'
    },
    {
      question: 'What is sorted() with loops?',
      options: [
        'Sort in-place',
        'Return new sorted iterator/list',
        'Check if sorted',
        'Sort and return'
      ],
      correctAnswer: 1,
      explanation: 'sorted() returns a new sorted list: for x in sorted([3,1,2]): prints 1,2,3.',
      difficulty: 'easy'
    },
    {
      question: 'What is slicing in loops?',
      options: [
        'Cutting lists',
        'Selecting portion of sequence [start:stop:step]',
        'Removing items',
        'Dividing loops'
      ],
      correctAnswer: 1,
      explanation: 'Slicing creates subsequences: for x in mylist[::2]: iterates every 2nd item.',
      difficulty: 'medium'
    },
    {
      question: 'What does range(-1, -10, -1) produce?',
      options: [
        '[-1,-2,-3,-4,-5,-6,-7,-8,-9]',
        'Error',
        'Empty',
        '[1,2,3,4,5,6,7,8,9]'
      ],
      correctAnswer: 0,
      explanation: 'Negative step counts backwards: -1 to -9 in steps of -1.',
      difficulty: 'medium'
    },
    {
      question: 'What is a while True loop used for?',
      options: [
        'Error',
        'Infinite loop (run until break)',
        'Single iteration',
        'Conditional loop'
      ],
      correctAnswer: 1,
      explanation: 'while True creates infinite loop, typically exited with break based on condition.',
      difficulty: 'easy'
    },
    {
      question: 'Can you nest different loop types?',
      options: [
        'No',
        'Yes, for inside while, while inside for, etc.',
        'Only same types',
        'Deprecated'
      ],
      correctAnswer: 1,
      explanation: 'You can nest any loop types: for loop inside while loop and vice versa.',
      difficulty: 'easy'
    },
    {
      question: 'What is the min() function with loops?',
      options: [
        'Minimize iterations',
        'Return smallest item in iterable',
        'First item',
        'Count items'
      ],
      correctAnswer: 1,
      explanation: 'min(iterable) returns the smallest item: min([3,1,2]) = 1.',
      difficulty: 'easy'
    },
    {
      question: 'What is the max() function with loops?',
      options: [
        'Maximize iterations',
        'Return largest item in iterable',
        'Last item',
        'Count items'
      ],
      correctAnswer: 1,
      explanation: 'max(iterable) returns the largest item: max([3,1,2]) = 3.',
      difficulty: 'easy'
    },
    {
      question: 'What does enumerate(list, start=1) do?',
      options: [
        'Start counting from 1 instead of 0',
        'Skip first item',
        'Error',
        'End at 1'
      ],
      correctAnswer: 0,
      explanation: 'start parameter sets initial index: enumerate(["a","b"], start=1) -> (1,"a"), (2,"b").',
      difficulty: 'medium'
    },
    {
      question: 'What is StopIteration exception?',
      options: [
        'Error in loop',
        'Raised when iterator is exhausted',
        'Break exception',
        'Timeout error'
      ],
      correctAnswer: 1,
      explanation: 'StopIteration is raised by next() when an iterator has no more items.',
      difficulty: 'hard'
    },
    {
      question: 'What is lazy evaluation in iterators?',
      options: [
        'Slow execution',
        'Values computed only when needed',
        'Delayed loops',
        'Error handling'
      ],
      correctAnswer: 1,
      explanation: 'Lazy evaluation generates values on-demand, saving memory (e.g., range(), generators).',
      difficulty: 'hard'
    },
    {
      question: 'Can you unpack in for loops?',
      options: [
        'No',
        'Yes: for a, b, c in list_of_tuples:',
        'Only with zip',
        'Only with enumerate'
      ],
      correctAnswer: 1,
      explanation: 'Unpacking works in for loops: for x, y in [(1,2), (3,4)]: assigns x=1,y=2 then x=3,y=4.',
      difficulty: 'medium'
    },
    {
      question: 'What is the cycle() function from itertools?',
      options: [
        'Loop once',
        'Infinite repetition of sequence',
        'Circular buffer',
        'Count cycles'
      ],
      correctAnswer: 1,
      explanation: 'cycle() repeats sequence infinitely: cycle([1,2,3]) -> 1,2,3,1,2,3,1,2,3...',
      difficulty: 'hard'
    }
  ],

  'strings-comprehensive': [
    {
      question: 'What method converts string to uppercase?',
      options: ['.uppercase()', '.upper()', '.toUpper()', '.UP()'],
      correctAnswer: 1,
      explanation: '.upper() method converts all characters to uppercase.',
      difficulty: 'easy'
    },
    {
      question: 'How do you check if a string starts with "Hello"?',
      options: [
        'string.starts("Hello")',
        'string.startswith("Hello")',
        'string.begins("Hello")',
        'string[0] == "Hello"'
      ],
      correctAnswer: 1,
      explanation: '.startswith() method checks if string starts with specified prefix.',
      difficulty: 'easy'
    },
    {
      question: 'What does string slicing [::​-1] do?',
      options: [
        'Reverse the string',
        'Delete string',
        'Error',
        'Get every other character'
      ],
      correctAnswer: 0,
      explanation: '[::​-1] reverses the string by stepping backwards through all characters.',
      difficulty: 'medium'
    },
    {
      question: 'What is an f-string?',
      options: [
        'File string',
        'Formatted string literal for variable interpolation',
        'Function string',
        'Float string'
      ],
      correctAnswer: 1,
      explanation: 'f-strings allow embedding variables: f"Hello {name}" introduced in Python 3.6.',
      difficulty: 'medium'
    },
    {
      question: 'What does .split() do without arguments?',
      options: [
        'Error',
        'Split on whitespace',
        'Split every character',
        'Split on comma'
      ],
      correctAnswer: 1,
      explanation: '.split() without arguments splits on any whitespace (spaces, tabs, newlines).',
      difficulty: 'easy'
    },
    {
      question: 'What does .join() do?',
      options: [
        'Add strings',
        'Join iterable elements with separator string',
        'Merge characters',
        'Concatenate'
      ],
      correctAnswer: 1,
      explanation: '"separator".join(list) joins list elements with separator: ",".join(["a","b"]) = "a,b".',
      difficulty: 'medium'
    },
    {
      question: 'Are strings mutable in Python?',
      options: [
        'Yes',
        'No, they are immutable',
        'Depends on Python version',
        'Only small strings'
      ],
      correctAnswer: 1,
      explanation: 'Strings are immutable. You cannot change characters in-place, must create new string.',
      difficulty: 'easy'
    },
    {
      question: 'What does .strip() remove?',
      options: [
        'All spaces',
        'Leading and trailing whitespace',
        'All whitespace',
        'Special characters'
      ],
      correctAnswer: 1,
      explanation: '.strip() removes whitespace from beginning and end only.',
      difficulty: 'easy'
    },
    {
      question: 'How do you create a multiline string?',
      options: [
        'Using \\n',
        'Using triple quotes """..."""',
        'Both A and B',
        'Cannot create multiline strings'
      ],
      correctAnswer: 2,
      explanation: 'Both \\n escapes and triple quotes create multiline strings.',
      difficulty: 'easy'
    },
    {
      question: 'What does .replace("old", "new") do?',
      options: [
        'Replace first occurrence',
        'Replace all occurrences',
        'Replace and modify original',
        'Error if not found'
      ],
      correctAnswer: 1,
      explanation: '.replace() replaces all occurrences and returns new string (original unchanged).',
      difficulty: 'easy'
    },
    {
      question: 'What is string concatenation operator?',
      options: ['&', '+', '.', ','],
      correctAnswer: 1,
      explanation: '+ operator concatenates strings: "Hello" + "World" = "HelloWorld".',
      difficulty: 'easy'
    },
    {
      question: 'What does .find("substring") return if not found?',
      options: ['0', '-1', 'None', 'Error'],
      correctAnswer: 1,
      explanation: '.find() returns -1 if substring not found, otherwise returns starting index.',
      difficulty: 'medium'
    },
    {
      question: 'What is the difference between .find() and .index()?',
      options: [
        'No difference',
        '.index() raises ValueError if not found, .find() returns -1',
        '.find() is faster',
        '.index() is deprecated'
      ],
      correctAnswer: 1,
      explanation: '.index() raises exception when substring not found, .find() returns -1.',
      difficulty: 'medium'
    },
    {
      question: 'What does .lower() do?',
      options: [
        'Decrease string',
        'Convert to lowercase',
        'Move string down',
        'Reduce size'
      ],
      correctAnswer: 1,
      explanation: '.lower() converts all characters to lowercase.',
      difficulty: 'easy'
    },
    {
      question: 'What does .count("substring") return?',
      options: [
        'Index position',
        'Number of occurrences',
        'Length of substring',
        'Boolean'
      ],
      correctAnswer: 1,
      explanation: '.count() returns the number of non-overlapping occurrences of substring.',
      difficulty: 'easy'
    },
    {
      question: 'What is r"string" notation?',
      options: [
        'Reverse string',
        'Raw string (no escape sequences)',
        'Regular string',
        'Read-only string'
      ],
      correctAnswer: 1,
      explanation: 'r"..." creates raw string where backslashes are literal: r"\\n" is two characters, not newline.',
      difficulty: 'medium'
    },
    {
      question: 'What does .isdigit() check?',
      options: [
        'If string contains any digit',
        'If all characters are digits',
        'If string is number',
        'If string has no letters'
      ],
      correctAnswer: 1,
      explanation: '.isdigit() returns True only if all characters are digits (0-9).',
      difficulty: 'medium'
    },
    {
      question: 'What does .isalpha() check?',
      options: [
        'If string contains letters',
        'If all characters are alphabetic',
        'If string is alphabetical order',
        'If string starts with letter'
      ],
      correctAnswer: 1,
      explanation: '.isalpha() returns True if all characters are alphabetic letters.',
      difficulty: 'medium'
    },
    {
      question: 'What does .isalnum() check?',
      options: [
        'If alphanumeric',
        'If all characters are letters or digits',
        'If contains numbers',
        'If no special characters'
      ],
      correctAnswer: 1,
      explanation: '.isalnum() returns True if all characters are alphanumeric (letters or digits).',
      difficulty: 'medium'
    },
    {
      question: 'How do you access the 3rd character?',
      options: ['string[3]', 'string[2]', 'string.charAt(2)', 'string.get(2)'],
      correctAnswer: 1,
      explanation: 'Indexing starts at 0, so 3rd character is string[2].',
      difficulty: 'easy'
    },
    {
      question: 'What does negative indexing do?',
      options: [
        'Error',
        'Count from end of string',
        'Subtract from string',
        'Reverse string'
      ],
      correctAnswer: 1,
      explanation: 'Negative indices count from end: string[-1] is last character.',
      difficulty: 'easy'
    },
    {
      question: 'What is string formatting with %?',
      options: [
        'Modulo operation',
        'Old-style formatting: "Hello %s" % name',
        'Percentage',
        'Error'
      ],
      correctAnswer: 1,
      explanation: '% operator is old-style formatting (C-style): "Name: %s" % "John".',
      difficulty: 'medium'
    },
    {
      question: 'What is .format() method?',
      options: [
        'Format code',
        'String formatting: "Hello {}".format(name)',
        'Change format',
        'Validate format'
      ],
      correctAnswer: 1,
      explanation: '.format() is string formatting method: "Hello {0}".format(name).',
      difficulty: 'medium'
    },
    {
      question: 'What does .capitalize() do?',
      options: [
        'ALL CAPS',
        'First character uppercase, rest lowercase',
        'Every word capitalized',
        'No change'
      ],
      correctAnswer: 1,
      explanation: '.capitalize() makes first character uppercase and rest lowercase.',
      difficulty: 'easy'
    },
    {
      question: 'What does .title() do?',
      options: [
        'First letter uppercase',
        'Capitalize first letter of each word',
        'ALL CAPS',
        'No change'
      ],
      correctAnswer: 1,
      explanation: '.title() capitalizes first letter of each word: "hello world" -> "Hello World".',
      difficulty: 'easy'
    },
    {
      question: 'What does .swapcase() do?',
      options: [
        'Swap characters',
        'Swap uppercase/lowercase',
        'Reverse string',
        'Randomize case'
      ],
      correctAnswer: 1,
      explanation: '.swapcase() swaps case: "Hello" -> "hELLO".',
      difficulty: 'medium'
    },
    {
      question: 'What does .endswith("ing") check?',
      options: [
        'If string ends with "ing"',
        'If string contains "ing"',
        'If last word ends with "ing"',
        'Pattern match'
      ],
      correctAnswer: 0,
      explanation: '.endswith() checks if string ends with specified suffix.',
      difficulty: 'easy'
    },
    {
      question: 'What does .center(width, fillchar) do?',
      options: [
        'Align text',
        'Center string in field of width, padding with fillchar',
        'Middle substring',
        'Find center'
      ],
      correctAnswer: 1,
      explanation: '.center(10, "*") centers string in 10 characters: "Hi".center(10, "*") = "****Hi****".',
      difficulty: 'hard'
    },
    {
      question: 'What does .zfill(width) do?',
      options: [
        'Fill with zeros',
        'Pad left with zeros to reach width',
        'Replace with zeros',
        'Zero-based indexing'
      ],
      correctAnswer: 1,
      explanation: '.zfill(5) pads with zeros: "42".zfill(5) = "00042".',
      difficulty: 'hard'
    },
    {
      question: 'What does .partition("sep") return?',
      options: [
        'Split string',
        'Tuple of (before, sep, after)',
        'List of parts',
        'Two strings'
      ],
      correctAnswer: 1,
      explanation: '.partition() returns 3-tuple: "a-b-c".partition("-") = ("a", "-", "b-c").',
      difficulty: 'hard'
    },
    {
      question: 'What is the difference between .strip() and .trim()?',
      options: [
        'No difference',
        'Python has .strip(), not .trim()',
        '.trim() is faster',
        'Same method, different names'
      ],
      correctAnswer: 1,
      explanation: 'Python uses .strip(), not .trim() (which exists in other languages).',
      difficulty: 'easy'
    },
    {
      question: 'What does .lstrip() do?',
      options: [
        'Remove left characters',
        'Remove leading (left-side) whitespace only',
        'Left strip',
        'Split left'
      ],
      correctAnswer: 1,
      explanation: '.lstrip() removes whitespace from left (beginning) only.',
      difficulty: 'medium'
    },
    {
      question: 'What does .rstrip() do?',
      options: [
        'Remove right characters',
        'Remove trailing (right-side) whitespace only',
        'Reverse strip',
        'Split right'
      ],
      correctAnswer: 1,
      explanation: '.rstrip() removes whitespace from right (end) only.',
      difficulty: 'medium'
    },
    {
      question: 'What does .splitlines() do?',
      options: [
        'Split on space',
        'Split on line breaks (\\n, \\r\\n, etc.)',
        'Split every line',
        'Count lines'
      ],
      correctAnswer: 1,
      explanation: '.splitlines() splits string at line boundaries, returning list of lines.',
      difficulty: 'medium'
    },
    {
      question: 'What does "text".replace("a", "b", 2) do?',
      options: [
        'Replace all "a" with "b"',
        'Replace first 2 occurrences of "a" with "b"',
        'Replace "a" in position 2',
        'Error'
      ],
      correctAnswer: 1,
      explanation: '.replace(old, new, count) replaces only specified number of occurrences.',
      difficulty: 'hard'
    },
    {
      question: 'What does .encode() do to strings?',
      options: [
        'Encrypt string',
        'Convert string to bytes using encoding (default UTF-8)',
        'Compress string',
        'Hash string'
      ],
      correctAnswer: 1,
      explanation: '.encode() converts string to bytes: "Hello".encode() = b\'Hello\'.',
      difficulty: 'hard'
    },
    {
      question: 'What is a docstring?',
      options: [
        'Document string',
        'String literal used to document modules/functions/classes',
        'String of docs',
        'Help string'
      ],
      correctAnswer: 1,
      explanation: 'Docstrings are triple-quoted strings placed at the start of modules/functions/classes for documentation.',
      difficulty: 'medium'
    },
    {
      question: 'What does .isprintable() check?',
      options: [
        'If can print string',
        'If all characters are printable (no control chars)',
        'If string has content',
        'If visible'
      ],
      correctAnswer: 1,
      explanation: '.isprintable() returns True if all characters are printable (excluding \\n, \\t, etc.).',
      difficulty: 'hard'
    },
    {
      question: 'What does .isspace() check?',
      options: [
        'If contains space',
        'If all characters are whitespace',
        'If has spacing',
        'If empty'
      ],
      correctAnswer: 1,
      explanation: '.isspace() returns True if all characters are whitespace (space, tab, newline, etc.).',
      difficulty: 'medium'
    },
    {
      question: 'What does .istitle() check?',
      options: [
        'If has title',
        'If string is in title case (each word capitalized)',
        'If first letter capitalized',
        'If all caps'
      ],
      correctAnswer: 1,
      explanation: '.istitle() returns True if string is titlecased (each word starts with uppercase).',
      difficulty: 'medium'
    },
    {
      question: 'What does .expandtabs() do?',
      options: [
        'Add tabs',
        'Convert tabs to spaces',
        'Remove tabs',
        'Count tabs'
      ],
      correctAnswer: 1,
      explanation: '.expandtabs(tabsize) converts tab characters to spaces (default 8 spaces per tab).',
      difficulty: 'hard'
    },
    {
      question: 'What does string[1:5] return for "Python"?',
      options: ['"ytho"', '"Pyth"', '"ython"', '"thon"'],
      correctAnswer: 0,
      explanation: 'Slicing [1:5] returns characters from index 1 to 4 (not including 5): "ytho".',
      difficulty: 'medium'
    },
    {
      question: 'What does string[:-1] return for "Hello"?',
      options: ['"Hell"', '"Hello"', '"o"', 'Error'],
      correctAnswer: 0,
      explanation: '[:-1] returns all characters except the last one: "Hell".',
      difficulty: 'medium'
    },
    {
      question: 'Can you use * operator with strings?',
      options: [
        'No',
        'Yes, to repeat strings',
        'Only for multiplication',
        'Error'
      ],
      correctAnswer: 1,
      explanation: '* operator repeats strings: "Hi" * 3 = "HiHiHi".',
      difficulty: 'easy'
    },
    {
      question: 'What does .casefold() do?',
      options: [
        'Same as .lower()',
        'Aggressive lowercase for case-insensitive comparisons',
        'Fold string',
        'Change case'
      ],
      correctAnswer: 1,
      explanation: '.casefold() is more aggressive than .lower() for case-insensitive matching (handles special Unicode).',
      difficulty: 'hard'
    },
    {
      question: 'What is string immutability advantage?',
      options: [
        'Faster',
        'Can be used as dictionary keys, thread-safe, hashable',
        'Easier',
        'No advantages'
      ],
      correctAnswer: 1,
      explanation: 'Immutable strings can be dictionary keys, are hashable, and thread-safe.',
      difficulty: 'hard'
    },
    {
      question: 'What does .maketrans() and .translate() do?',
      options: [
        'Translate language',
        'Character-level mapping and translation',
        'Move string',
        'Convert encoding'
      ],
      correctAnswer: 1,
      explanation: '.maketrans() creates translation table, .translate() applies it for character mapping.',
      difficulty: 'hard'
    },
    {
      question: 'What does string[::2] return for "Python"?',
      options: ['"Pto"', '"Ptn"', '"Pyhn"', '"yhn"'],
      correctAnswer: 2,
      explanation: '[::2] returns every 2nd character: "Pyhn" (P,t,o,n skipping y,h).',
      difficulty: 'medium'
    },
    {
      question: 'What is the in operator for strings?',
      options: [
        'Error',
        'Checks if substring exists',
        'Adds to string',
        'Inserts character'
      ],
      correctAnswer: 1,
      explanation: '"in" checks substring existence: "ell" in "Hello" returns True.',
      difficulty: 'easy'
    },
    {
      question: 'What does len() return for "Hello"?',
      options: ['4', '5', '6', 'Error'],
      correctAnswer: 1,
      explanation: 'len() returns number of characters: len("Hello") = 5.',
      difficulty: 'easy'
    }
  ],

  'lists-comprehensive': [
    {
      question: 'How do you create an empty list?',
      options: ['[]', 'list()', 'Both A and B', '{}'],
      correctAnswer: 2,
      explanation: 'Both [] and list() create empty lists in Python.',
      difficulty: 'easy'
    },
    {
      question: 'What does .append() do?',
      options: ['Add multiple items', 'Add item to end of list', 'Insert at beginning', 'Remove item'],
      correctAnswer: 1,
      explanation: '.append() adds a single item to the end of the list.',
      difficulty: 'easy'
    },
    {
      question: 'What does .extend() do?',
      options: ['Make list longer', 'Add multiple items from iterable', 'Same as append', 'Increase size'],
      correctAnswer: 1,
      explanation: '.extend() adds all items from an iterable: [1,2].extend([3,4]) = [1,2,3,4].',
      difficulty: 'medium'
    },
    {
      question: 'What is the difference between .append() and .extend()?',
      options: [
        'No difference',
        '.append() adds single item, .extend() adds multiple items',
        '.extend() is faster',
        '.append() is deprecated'
      ],
      correctAnswer: 1,
      explanation: '.append([1,2]) adds the list as one element, .extend([1,2]) adds each element separately.',
      difficulty: 'medium'
    },
    {
      question: 'How do you insert an item at a specific index?',
      options: ['.add(index, item)', '.insert(index, item)', '.put(index, item)', '[index] = item'],
      correctAnswer: 1,
      explanation: '.insert(index, item) inserts item at specified position: list.insert(0, "first").',
      difficulty: 'easy'
    },
    {
      question: 'What does .pop() do without arguments?',
      options: ['Remove first item', 'Remove last item and return it', 'Clear list', 'Error'],
      correctAnswer: 1,
      explanation: '.pop() removes and returns the last item. .pop(0) removes first item.',
      difficulty: 'easy'
    },
    {
      question: 'What does .remove() do?',
      options: [
        'Remove by index',
        'Remove first occurrence of value',
        'Remove all occurrences',
        'Clear list'
      ],
      correctAnswer: 1,
      explanation: '.remove(value) removes the first occurrence of the specified value.',
      difficulty: 'easy'
    },
    {
      question: 'What happens if .remove() cannot find the value?',
      options: ['Returns None', 'ValueError', 'Returns False', 'Does nothing'],
      correctAnswer: 1,
      explanation: '.remove() raises ValueError if the value is not found.',
      difficulty: 'medium'
    },
    {
      question: 'How do you remove an item by index?',
      options: ['del list[index]', '.pop(index)', 'Both A and B', '.remove(index)'],
      correctAnswer: 2,
      explanation: 'Both del list[index] and .pop(index) remove by index. .pop() also returns the value.',
      difficulty: 'medium'
    },
    {
      question: 'What does .clear() do?',
      options: ['Delete list', 'Remove all items', 'Reset list', 'Empty and delete'],
      correctAnswer: 1,
      explanation: '.clear() removes all items from the list, leaving an empty list.',
      difficulty: 'easy'
    },
    {
      question: 'How do you get the index of an item?',
      options: ['.find()', '.index()', '.search()', '.position()'],
      correctAnswer: 1,
      explanation: '.index(value) returns the index of first occurrence. Raises ValueError if not found.',
      difficulty: 'easy'
    },
    {
      question: 'What does .count() return?',
      options: ['List length', 'Number of occurrences of value', 'All items', 'Index position'],
      correctAnswer: 1,
      explanation: '.count(value) returns how many times value appears in the list.',
      difficulty: 'easy'
    },
    {
      question: 'What does .sort() do?',
      options: [
        'Return new sorted list',
        'Sort list in-place',
        'Sort and return',
        'Check if sorted'
      ],
      correctAnswer: 1,
      explanation: '.sort() sorts the list in-place (modifies original). sorted() returns new sorted list.',
      difficulty: 'medium'
    },
    {
      question: 'What is the difference between .sort() and sorted()?',
      options: [
        'No difference',
        '.sort() modifies original, sorted() returns new list',
        'sorted() is faster',
        '.sort() is deprecated'
      ],
      correctAnswer: 1,
      explanation: '.sort() sorts in-place (returns None), sorted() returns new sorted list (original unchanged).',
      difficulty: 'medium'
    },
    {
      question: 'What does .reverse() do?',
      options: [
        'Return reversed list',
        'Reverse list in-place',
        'Sort backwards',
        'Reverse and return'
      ],
      correctAnswer: 1,
      explanation: '.reverse() reverses the list in-place. reversed() returns an iterator.',
      difficulty: 'medium'
    },
    {
      question: 'How do you copy a list?',
      options: ['list2 = list1', 'list2 = list1.copy()', 'list2 = list1[:]', 'Both B and C'],
      correctAnswer: 3,
      explanation: '.copy() and [:] create shallow copies. list2 = list1 creates a reference, not a copy.',
      difficulty: 'medium'
    },
    {
      question: 'What is list slicing [1:4]?',
      options: [
        'Items at index 1,2,3',
        'Items at index 1,2,3,4',
        'Items from 1 to 4',
        'Error'
      ],
      correctAnswer: 0,
      explanation: '[1:4] gets items from index 1 to 3 (not including 4).',
      difficulty: 'easy'
    },
    {
      question: 'What does [::​-1] do?',
      options: ['Delete list', 'Reverse list', 'Skip items', 'Error'],
      correctAnswer: 1,
      explanation: '[::​-1] creates a reversed copy of the list.',
      difficulty: 'medium'
    },
    {
      question: 'Are lists mutable?',
      options: ['No', 'Yes', 'Sometimes', 'Depends on Python version'],
      correctAnswer: 1,
      explanation: 'Lists are mutable - you can change, add, or remove items after creation.',
      difficulty: 'easy'
    },
    {
      question: 'Can lists contain different data types?',
      options: ['No', 'Yes', 'Only numbers and strings', 'Only same types'],
      correctAnswer: 1,
      explanation: 'Lists can contain mixed types: [1, "hello", True, 3.14, [1,2]].',
      difficulty: 'easy'
    },
    {
      question: 'What is a nested list?',
      options: [
        'List with many items',
        'List inside another list',
        'Sorted list',
        'Reversed list'
      ],
      correctAnswer: 1,
      explanation: 'Nested lists are lists containing other lists: [[1,2], [3,4], [5,6]].',
      difficulty: 'easy'
    },
    {
      question: 'How do you access nested list items?',
      options: ['list[i][j]', 'list[i,j]', 'list.get(i,j)', 'list[[i,j]]'],
      correctAnswer: 0,
      explanation: 'Use multiple indices: matrix[0][1] accesses row 0, column 1.',
      difficulty: 'medium'
    },
    {
      question: 'What is list comprehension?',
      options: [
        'Understanding lists',
        'Concise way to create lists: [x*2 for x in range(5)]',
        'List documentation',
        'List methods'
      ],
      correctAnswer: 1,
      explanation: 'List comprehension creates lists in one line: [expression for item in iterable if condition].',
      difficulty: 'medium'
    },
    {
      question: 'What does [x*2 for x in range(3)] produce?',
      options: ['[0,2,4]', '[2,4,6]', '[0,1,2]', 'Error'],
      correctAnswer: 0,
      explanation: 'List comprehension: x=0,1,2 → x*2 = 0,2,4.',
      difficulty: 'medium'
    },
    {
      question: 'Can you use if in list comprehension?',
      options: ['No', 'Yes, as filter', 'Only in Python 3', 'Deprecated'],
      correctAnswer: 1,
      explanation: 'if filters items: [x for x in range(10) if x % 2 == 0] gets even numbers.',
      difficulty: 'medium'
    },
    {
      question: 'What does + operator do with lists?',
      options: ['Error', 'Concatenate lists', 'Add to each item', 'Sum items'],
      correctAnswer: 1,
      explanation: '+ concatenates lists: [1,2] + [3,4] = [1,2,3,4].',
      difficulty: 'easy'
    },
    {
      question: 'What does * operator do with lists?',
      options: ['Multiply items', 'Repeat list', 'Error', 'Matrix multiplication'],
      correctAnswer: 1,
      explanation: '* repeats lists: [1,2] * 3 = [1,2,1,2,1,2].',
      difficulty: 'easy'
    },
    {
      question: 'What does the in operator check?',
      options: ['Index', 'If value exists in list', 'Type', 'Length'],
      correctAnswer: 1,
      explanation: '"in" checks membership: 5 in [1,2,3,4,5] returns True.',
      difficulty: 'easy'
    },
    {
      question: 'What is the difference between shallow and deep copy?',
      options: [
        'No difference',
        'Shallow copies nested objects by reference, deep copies recursively',
        'Shallow is faster',
        'Deep is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Shallow copy (.copy(), [:]) copies list but nested objects are references. Deep copy (copy.deepcopy()) copies everything.',
      difficulty: 'hard'
    },
    {
      question: 'How do you create a list of zeros?',
      options: ['[0] * n', 'zeros(n)', 'list.zeros(n)', '[0 for _ in range(n)]'],
      correctAnswer: 0,
      explanation: '[0] * n creates list of n zeros: [0] * 5 = [0,0,0,0,0]. Both A and D work.',
      difficulty: 'medium'
    },
    {
      question: 'What does max() do with lists?',
      options: ['Maximum length', 'Largest item', 'Last item', 'Count items'],
      correctAnswer: 1,
      explanation: 'max(list) returns the largest item in the list.',
      difficulty: 'easy'
    },
    {
      question: 'What does min() do with lists?',
      options: ['Minimum length', 'Smallest item', 'First item', 'Count items'],
      correctAnswer: 1,
      explanation: 'min(list) returns the smallest item in the list.',
      difficulty: 'easy'
    },
    {
      question: 'What does sum() do with lists?',
      options: ['Count items', 'Add all numbers', 'Summarize', 'Total length'],
      correctAnswer: 1,
      explanation: 'sum(list) returns the sum of all numeric items.',
      difficulty: 'easy'
    },
    {
      question: 'Can you sort a list with mixed types?',
      options: [
        'Yes',
        'No, raises TypeError',
        'Only numbers and strings',
        'Deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Sorting mixed types (numbers and strings) raises TypeError in Python 3.',
      difficulty: 'medium'
    },
    {
      question: 'What does .sort(reverse=True) do?',
      options: [
        'Error',
        'Sort in descending order',
        'Reverse then sort',
        'Sort backwards'
      ],
      correctAnswer: 1,
      explanation: 'reverse=True sorts in descending order (largest to smallest).',
      difficulty: 'easy'
    },
    {
      question: 'What is the key parameter in .sort()?',
      options: [
        'Sort key',
        'Function to extract comparison key from each item',
        'Dictionary key',
        'Index'
      ],
      correctAnswer: 1,
      explanation: 'key parameter takes a function: .sort(key=len) sorts by length, .sort(key=str.lower) ignores case.',
      difficulty: 'hard'
    },
    {
      question: 'How do you remove duplicates from a list?',
      options: [
        '.unique()',
        'Convert to set and back: list(set(mylist))',
        '.remove_duplicates()',
        'Automatically removed'
      ],
      correctAnswer: 1,
      explanation: 'list(set(mylist)) removes duplicates but loses order. Use dict.fromkeys() to preserve order.',
      difficulty: 'medium'
    },
    {
      question: 'What does enumerate() return with lists?',
      options: [
        'Just indices',
        'Index-value pairs',
        'Just values',
        'Count'
      ],
      correctAnswer: 1,
      explanation: 'enumerate() yields (index, value) tuples: for i, val in enumerate([10,20,30]):.',
      difficulty: 'medium'
    },
    {
      question: 'What does zip() do with two lists?',
      options: [
        'Compress',
        'Pair corresponding elements',
        'Merge',
        'Combine'
      ],
      correctAnswer: 1,
      explanation: 'zip([1,2], ["a","b"]) pairs elements: [(1,"a"), (2,"b")].',
      difficulty: 'medium'
    },
    {
      question: 'Can lists be used as dictionary keys?',
      options: ['Yes', 'No, lists are mutable/unhashable', 'Only empty lists', 'Only in Python 2'],
      correctAnswer: 1,
      explanation: 'Lists cannot be dictionary keys because they are mutable and unhashable.',
      difficulty: 'medium'
    },
    {
      question: 'What is list unpacking?',
      options: [
        'Extract items',
        'Assign list items to multiple variables: a, b, c = [1,2,3]',
        'Remove items',
        'Flatten list'
      ],
      correctAnswer: 1,
      explanation: 'Unpacking assigns list items to variables: x, y = [1, 2] assigns x=1, y=2.',
      difficulty: 'medium'
    },
    {
      question: 'What does [*list1, *list2] do?',
      options: [
        'Error',
        'Unpacking - merges lists',
        'Multiply',
        'Pointer'
      ],
      correctAnswer: 1,
      explanation: '* unpacks lists: [*[1,2], *[3,4]] = [1,2,3,4] (Python 3.5+).',
      difficulty: 'hard'
    },
    {
      question: 'What is the walrus operator with lists?',
      options: [
        'Not applicable',
        'Assignment in comprehension: [y for x in list if (y := x*2) > 10]',
        'Error',
        'Deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Walrus := assigns in expressions: [y for x in range(10) if (y := x*2) > 5].',
      difficulty: 'hard'
    },
    {
      question: 'What does any() do with lists?',
      options: [
        'Return any item',
        'True if any element is truthy',
        'Random item',
        'First item'
      ],
      correctAnswer: 1,
      explanation: 'any() returns True if at least one element is truthy.',
      difficulty: 'medium'
    },
    {
      question: 'What does all() do with lists?',
      options: [
        'Return all items',
        'True if all elements are truthy',
        'Count items',
        'List all'
      ],
      correctAnswer: 1,
      explanation: 'all() returns True only if all elements are truthy.',
      difficulty: 'medium'
    },
    {
      question: 'What is a list slice assignment?',
      options: [
        'Error',
        'Replace slice with new values: list[1:3] = [10,20]',
        'Copy slice',
        'Delete slice'
      ],
      correctAnswer: 1,
      explanation: 'Slice assignment replaces portion: list[1:3] = [10,20,30] replaces 2 items with 3.',
      difficulty: 'hard'
    },
    {
      question: 'What does del list[:] do?',
      options: ['Delete variable', 'Clear all items', 'Delete list', 'Error'],
      correctAnswer: 1,
      explanation: 'del list[:] removes all items (similar to .clear()) but list variable still exists.',
      difficulty: 'medium'
    },
    {
      question: 'What is the difference between is and == for lists?',
      options: [
        'No difference',
        'is checks object identity, == checks values',
        '== is faster',
        'is is deprecated'
      ],
      correctAnswer: 1,
      explanation: '== checks if values are equal, is checks if same object in memory.',
      difficulty: 'medium'
    },
    {
      question: 'What does filter() return with lists?',
      options: [
        'Filtered list',
        'Iterator of items that pass filter function',
        'Removed items',
        'Error'
      ],
      correctAnswer: 1,
      explanation: 'filter(function, list) returns iterator of items where function returns True.',
      difficulty: 'medium'
    },
    {
      question: 'What does map() return with lists?',
      options: [
        'Dictionary',
        'Iterator with function applied to each item',
        'Mapped values',
        'New list'
      ],
      correctAnswer: 1,
      explanation: 'map(function, list) returns iterator with function applied to each element.',
      difficulty: 'medium'
    }
  ],

  'dictionaries-comprehensive': [
    {
      question: 'How do you create an empty dictionary?',
      options: ['{}', 'dict()', 'Both A and B', '[]'],
      correctAnswer: 2,
      explanation: 'Both {} and dict() create empty dictionaries.',
      difficulty: 'easy'
    },
    {
      question: 'What are dictionary keys?',
      options: [
        'Indices',
        'Unique identifiers for values (must be immutable)',
        'Values',
        'Numbers only'
      ],
      correctAnswer: 1,
      explanation: 'Keys must be immutable (strings, numbers, tuples) and are unique identifiers for values.',
      difficulty: 'easy'
    },
    {
      question: 'Can you use a list as a dictionary key?',
      options: ['Yes', 'No, lists are mutable', 'Only empty lists', 'Only in Python 2'],
      correctAnswer: 1,
      explanation: 'Lists cannot be keys because they are mutable. Use tuples instead.',
      difficulty: 'medium'
    },
    {
      question: 'How do you access a value by key?',
      options: ['dict.key', 'dict[key]', 'dict.get(key)', 'Both B and C'],
      correctAnswer: 3,
      explanation: 'dict[key] and dict.get(key) both work. dict[key] raises KeyError if not found, .get() returns None.',
      difficulty: 'easy'
    },
    {
      question: 'What happens if you access a non-existent key with []?',
      options: ['Returns None', 'KeyError', 'Returns False', 'Creates key'],
      correctAnswer: 1,
      explanation: 'Accessing non-existent key with [] raises KeyError.',
      difficulty: 'easy'
    },
    {
      question: 'What does .get(key, default) do?',
      options: [
        'Always returns default',
        'Returns value if key exists, otherwise returns default',
        'Same as []',
        'Error'
      ],
      correctAnswer: 1,
      explanation: '.get(key, default) returns value or default (None if not specified) without raising error.',
      difficulty: 'medium'
    },
    {
      question: 'How do you add or update a key-value pair?',
      options: ['.add(key, value)', 'dict[key] = value', '.insert(key, value)', '.put(key, value)'],
      correctAnswer: 1,
      explanation: 'dict[key] = value adds new key or updates existing key.',
      difficulty: 'easy'
    },
    {
      question: 'What does .keys() return?',
      options: [
        'List of keys',
        'Dictionary view object of keys',
        'All keys as tuple',
        'Key count'
      ],
      correctAnswer: 1,
      explanation: '.keys() returns a view object (dict_keys) that reflects changes to dictionary.',
      difficulty: 'medium'
    },
    {
      question: 'What does .values() return?',
      options: [
        'List of values',
        'Dictionary view object of values',
        'All values as tuple',
        'Value count'
      ],
      correctAnswer: 1,
      explanation: '.values() returns a view object (dict_values) of all values.',
      difficulty: 'medium'
    },
    {
      question: 'What does .items() return?',
      options: [
        'All items',
        'View object of (key, value) tuples',
        'Dictionary copy',
        'Item count'
      ],
      correctAnswer: 1,
      explanation: '.items() returns view object of (key, value) pairs.',
      difficulty: 'medium'
    },
    {
      question: 'How do you iterate over dictionary keys?',
      options: [
        'for key in dict:',
        'for key in dict.keys():',
        'Both A and B',
        'Cannot iterate'
      ],
      correctAnswer: 2,
      explanation: 'Both work. for key in dict: is more common and Pythonic.',
      difficulty: 'easy'
    },
    {
      question: 'How do you iterate over key-value pairs?',
      options: [
        'for key, value in dict:',
        'for key, value in dict.items():',
        'for pair in dict:',
        'Cannot do this'
      ],
      correctAnswer: 1,
      explanation: 'for key, value in dict.items(): unpacks each (key, value) tuple.',
      difficulty: 'easy'
    },
    {
      question: 'What does .pop(key) do?',
      options: [
        'Remove last item',
        'Remove key and return its value',
        'Remove value',
        'Clear dictionary'
      ],
      correctAnswer: 1,
      explanation: '.pop(key) removes key and returns its value. Raises KeyError if key not found.',
      difficulty: 'medium'
    },
    {
      question: 'What does .pop(key, default) do?',
      options: [
        'Error',
        'Return value if key exists, otherwise return default',
        'Always return default',
        'Remove default'
      ],
      correctAnswer: 1,
      explanation: '.pop(key, default) returns and removes value or returns default without error.',
      difficulty: 'medium'
    },
    {
      question: 'What does .popitem() do?',
      options: [
        'Remove random item',
        'Remove and return last inserted (key, value) pair',
        'Remove first item',
        'Error'
      ],
      correctAnswer: 1,
      explanation: '.popitem() removes and returns the last inserted key-value pair (LIFO in Python 3.7+).',
      difficulty: 'medium'
    },
    {
      question: 'What does .update() do?',
      options: [
        'Refresh dictionary',
        'Add/update multiple key-value pairs from another dict',
        'Update values only',
        'Increment values'
      ],
      correctAnswer: 1,
      explanation: '.update(other_dict) adds or updates multiple key-value pairs at once.',
      difficulty: 'medium'
    },
    {
      question: 'What does .clear() do?',
      options: ['Delete dictionary', 'Remove all items', 'Reset values', 'Empty and delete'],
      correctAnswer: 1,
      explanation: '.clear() removes all key-value pairs, leaving an empty dictionary.',
      difficulty: 'easy'
    },
    {
      question: 'How do you check if a key exists?',
      options: [
        'key.exists()',
        'key in dict',
        'dict.has(key)',
        'dict.contains(key)'
      ],
      correctAnswer: 1,
      explanation: '"key in dict" returns True if key exists in dictionary.',
      difficulty: 'easy'
    },
    {
      question: 'What does del dict[key] do?',
      options: ['Delete value', 'Delete key-value pair', 'Delete dictionary', 'Error'],
      correctAnswer: 1,
      explanation: 'del dict[key] removes the key and its value. Raises KeyError if key not found.',
      difficulty: 'easy'
    },
    {
      question: 'Are dictionaries ordered in Python 3.7+?',
      options: [
        'No',
        'Yes, insertion order is preserved',
        'Sometimes',
        'Only if sorted'
      ],
      correctAnswer: 1,
      explanation: 'Python 3.7+ dictionaries preserve insertion order as a language feature.',
      difficulty: 'medium'
    },
    {
      question: 'What is dictionary comprehension?',
      options: [
        'Understanding dicts',
        'Creating dicts in one line: {k: v for k, v in items}',
        'Dict documentation',
        'Dict methods'
      ],
      correctAnswer: 1,
      explanation: 'Dict comprehension: {x: x**2 for x in range(5)} creates {0:0, 1:1, 2:4, 3:9, 4:16}.',
      difficulty: 'medium'
    },
    {
      question: 'What does .setdefault(key, default) do?',
      options: [
        'Set default value',
        'Return value if key exists, else insert key with default and return default',
        'Change default',
        'Error'
      ],
      correctAnswer: 1,
      explanation: '.setdefault(key, default) returns value or sets and returns default if key doesn\'t exist.',
      difficulty: 'hard'
    },
    {
      question: 'What does .fromkeys(keys, value) do?',
      options: [
        'Get keys',
        'Create dict with keys from iterable, all with same value',
        'Extract keys',
        'Filter keys'
      ],
      correctAnswer: 1,
      explanation: 'dict.fromkeys(["a","b","c"], 0) creates {"a":0, "b":0, "c":0}.',
      difficulty: 'hard'
    },
    {
      question: 'Can dictionary values be any type?',
      options: ['No', 'Yes, any type including dicts', 'Only immutable types', 'Only strings/numbers'],
      correctAnswer: 1,
      explanation: 'Values can be any type: numbers, strings, lists, dicts, objects, etc.',
      difficulty: 'easy'
    },
    {
      question: 'What is a nested dictionary?',
      options: [
        'Complex dict',
        'Dictionary containing other dictionaries as values',
        'Multi-level dict',
        'Sorted dict'
      ],
      correctAnswer: 1,
      explanation: 'Nested dicts: {"person": {"name": "John", "age": 30}}.',
      difficulty: 'easy'
    },
    {
      question: 'How do you copy a dictionary?',
      options: ['dict2 = dict1', 'dict2 = dict1.copy()', 'dict2 = dict(dict1)', 'Both B and C'],
      correctAnswer: 3,
      explanation: '.copy() and dict() create shallow copies. dict2 = dict1 creates reference.',
      difficulty: 'medium'
    },
    {
      question: 'What does len() return for dictionaries?',
      options: ['Total values', 'Number of key-value pairs', 'Memory size', 'Key count only'],
      correctAnswer: 1,
      explanation: 'len(dict) returns the number of key-value pairs.',
      difficulty: 'easy'
    },
    {
      question: 'Can you use tuples as dictionary keys?',
      options: ['No', 'Yes, tuples are immutable', 'Only empty tuples', 'Only in Python 3'],
      correctAnswer: 1,
      explanation: 'Tuples can be keys because they are immutable and hashable.',
      difficulty: 'easy'
    },
    {
      question: 'What does dict() constructor do?',
      options: [
        'Create empty dict',
        'Create dict from keyword args or iterable',
        'Convert to dict',
        'All of the above'
      ],
      correctAnswer: 3,
      explanation: 'dict() creates empty dict, dict(a=1, b=2), or dict([(\'a\',1), (\'b\',2)]).',
      difficulty: 'medium'
    },
    {
      question: 'What is the ** operator with dictionaries?',
      options: [
        'Power',
        'Unpacking: {**dict1, **dict2} merges dicts',
        'Error',
        'Multiply'
      ],
      correctAnswer: 1,
      explanation: '** unpacks dicts: {**{"a":1}, **{"b":2}} = {"a":1, "b":2}.',
      difficulty: 'hard'
    },
    {
      question: 'What does | operator do with dicts (Python 3.9+)?',
      options: [
        'Error',
        'Merge dictionaries',
        'Bitwise OR',
        'Filter'
      ],
      correctAnswer: 1,
      explanation: 'dict1 | dict2 merges dictionaries (Python 3.9+). Later keys override earlier ones.',
      difficulty: 'hard'
    },
    {
      question: 'What does |= operator do with dicts (Python 3.9+)?',
      options: [
        'Error',
        'Update dict in-place with another dict',
        'Bitwise OR assignment',
        'Append'
      ],
      correctAnswer: 1,
      explanation: 'dict1 |= dict2 updates dict1 with dict2 in-place (Python 3.9+).',
      difficulty: 'hard'
    },
    {
      question: 'What happens with duplicate keys in dict literal?',
      options: [
        'Error',
        'Last value wins',
        'All values stored',
        'First value kept'
      ],
      correctAnswer: 1,
      explanation: '{"a": 1, "a": 2} results in {"a": 2} - last value overwrites.',
      difficulty: 'medium'
    },
    {
      question: 'What is defaultdict from collections?',
      options: [
        'Default dictionary',
        'Dict that provides default value for missing keys',
        'Empty dict',
        'Read-only dict'
      ],
      correctAnswer: 1,
      explanation: 'defaultdict(list) automatically creates empty list for new keys.',
      difficulty: 'hard'
    },
    {
      question: 'What is OrderedDict from collections?',
      options: [
        'Sorted dict',
        'Dict that remembers insertion order (now redundant in Python 3.7+)',
        'Organized dict',
        'Numbered dict'
      ],
      correctAnswer: 1,
      explanation: 'OrderedDict explicitly tracks insertion order. Regular dicts do this since Python 3.7.',
      difficulty: 'hard'
    },
    {
      question: 'What is Counter from collections?',
      options: [
        'Count dict items',
        'Dict subclass for counting hashable objects',
        'Number tracker',
        'Iterator'
      ],
      correctAnswer: 1,
      explanation: 'Counter counts occurrences: Counter("hello") = {\'h\':1, \'e\':1, \'l\':2, \'o\':1}.',
      difficulty: 'hard'
    },
    {
      question: 'Can you sort a dictionary?',
      options: [
        'Yes, directly',
        'No, but can sort items: dict(sorted(d.items()))',
        'Use .sort()',
        'Automatically sorted'
      ],
      correctAnswer: 1,
      explanation: 'sorted(dict.items()) returns sorted list of tuples. Convert back to dict if needed.',
      difficulty: 'medium'
    },
    {
      question: 'What does max(dict) return?',
      options: [
        'Largest value',
        'Largest key',
        'Most frequent',
        'Last item'
      ],
      correctAnswer: 1,
      explanation: 'max(dict) returns the largest key. Use max(dict.values()) for largest value.',
      difficulty: 'medium'
    },
    {
      question: 'What does min(dict) return?',
      options: [
        'Smallest value',
        'Smallest key',
        'Least frequent',
        'First item'
      ],
      correctAnswer: 1,
      explanation: 'min(dict) returns the smallest key. Use min(dict.values()) for smallest value.',
      difficulty: 'medium'
    },
    {
      question: 'How do you merge two dictionaries in Python 3.5+?',
      options: [
        '{**dict1, **dict2}',
        'dict1.update(dict2)',
        'dict1 | dict2 (Python 3.9+)',
        'All of the above'
      ],
      correctAnswer: 3,
      explanation: 'Multiple ways: {**dict1, **dict2}, .update(), or | operator (3.9+).',
      difficulty: 'medium'
    },
    {
      question: 'What is a shallow copy vs deep copy of nested dict?',
      options: [
        'No difference',
        'Shallow copies nested dicts by reference, deep copies recursively',
        'Shallow is faster',
        'Deep is automatic'
      ],
      correctAnswer: 1,
      explanation: '.copy() creates shallow copy (nested dicts are references). Use copy.deepcopy() for deep copy.',
      difficulty: 'hard'
    },
    {
      question: 'Can you have None as a dictionary key?',
      options: ['No', 'Yes, None is immutable', 'Only in Python 3', 'Error'],
      correctAnswer: 1,
      explanation: 'None can be a key because it is immutable and hashable.',
      difficulty: 'medium'
    },
    {
      question: 'What does {}.get(key) return?',
      options: ['Error', 'None', 'Empty string', 'False'],
      correctAnswer: 1,
      explanation: '.get() returns None by default if key doesn\'t exist.',
      difficulty: 'easy'
    },
    {
      question: 'What is dict unpacking in function calls?',
      options: [
        'Error',
        'Pass dict as keyword arguments: func(**{"a":1, "b":2})',
        'Extract values',
        'Convert to args'
      ],
      correctAnswer: 1,
      explanation: '**dict unpacks to keyword arguments: func(**{"x":1, "y":2}) → func(x=1, y=2).',
      difficulty: 'hard'
    },
    {
      question: 'Are dictionary keys case-sensitive?',
      options: [
        'No',
        'Yes, "Key" and "key" are different',
        'Depends on setting',
        'Only for strings'
      ],
      correctAnswer: 1,
      explanation: 'Keys are case-sensitive: {"Name": 1, "name": 2} has two different keys.',
      difficulty: 'easy'
    },
    {
      question: 'What does reversed(dict) do?',
      options: [
        'Error in Python < 3.8',
        'Returns reverse iterator of keys (Python 3.8+)',
        'Reverse values',
        'Flip keys and values'
      ],
      correctAnswer: 1,
      explanation: 'reversed(dict) returns reverse iterator of keys in Python 3.8+.',
      difficulty: 'hard'
    },
    {
      question: 'What is a ChainMap from collections?',
      options: [
        'Linked dicts',
        'Groups multiple dicts into single view',
        'Chained access',
        'Ordered map'
      ],
      correctAnswer: 1,
      explanation: 'ChainMap combines multiple dicts into single view for lookups.',
      difficulty: 'hard'
    },
    {
      question: 'Can you use dictionary as a switch/case alternative?',
      options: [
        'No',
        'Yes, map values or functions to keys',
        'Only in Python 3.10+',
        'Use match instead'
      ],
      correctAnswer: 1,
      explanation: 'Dict can map options: actions = {"add": add_func, "sub": sub_func}; actions[choice]().',
      difficulty: 'medium'
    },
    {
      question: 'What does in check in a dictionary?',
      options: [
        'Values',
        'Keys only',
        'Both keys and values',
        'Items'
      ],
      correctAnswer: 1,
      explanation: '"key in dict" checks if key exists. Use "value in dict.values()" for values.',
      difficulty: 'medium'
    }
  ],

  'tuples-comprehensive': [
    {
      question: 'How do you create an empty tuple?',
      options: ['[]', '()', 'Both A and B', 'tuple()'],
      correctAnswer: 3,
      explanation: 'Both () and tuple() create empty tuples, but () is more common.',
      difficulty: 'easy'
    },
    {
      question: 'Are tuples mutable?',
      options: ['Yes', 'No, tuples are immutable', 'Sometimes', 'Depends on content'],
      correctAnswer: 1,
      explanation: 'Tuples are immutable - cannot change, add, or remove items after creation.',
      difficulty: 'easy'
    },
    {
      question: 'How do you create a single-element tuple?',
      options: ['(x)', '(x,)', '[x]', 'tuple(x)'],
      correctAnswer: 1,
      explanation: '(x,) creates single-element tuple. (x) without comma is just a value in parentheses.',
      difficulty: 'medium'
    },
    {
      question: 'What does (5) create?',
      options: ['Tuple with 5', 'Integer 5', 'List', 'Error'],
      correctAnswer: 1,
      explanation: '(5) is just the integer 5 in parentheses. Need (5,) for single-element tuple.',
      difficulty: 'medium'
    },
    {
      question: 'Can tuples contain different data types?',
      options: ['No', 'Yes', 'Only numbers and strings', 'Only immutable types'],
      correctAnswer: 1,
      explanation: 'Tuples can contain mixed types: (1, "hello", True, 3.14, [1,2]).',
      difficulty: 'easy'
    },
    {
      question: 'How do you access tuple elements?',
      options: ['tuple.get(index)', 'tuple[index]', 'tuple(index)', 'tuple.at(index)'],
      correctAnswer: 1,
      explanation: 'Use bracket notation: tuple[0] for first element, tuple[-1] for last.',
      difficulty: 'easy'
    },
    {
      question: 'Can you change a tuple element?',
      options: ['Yes', 'No, raises TypeError', 'Only first element', 'Only with .update()'],
      correctAnswer: 1,
      explanation: 'Tuples are immutable. tuple[0] = x raises TypeError.',
      difficulty: 'easy'
    },
    {
      question: 'What is tuple packing?',
      options: [
        'Compress tuple',
        'Creating tuple without parentheses: t = 1, 2, 3',
        'Store tuple',
        'Merge tuples'
      ],
      correctAnswer: 1,
      explanation: 'Tuple packing: t = 1, 2, 3 creates tuple (1, 2, 3) without parentheses.',
      difficulty: 'medium'
    },
    {
      question: 'What is tuple unpacking?',
      options: [
        'Extract values',
        'Assign tuple elements to variables: a, b, c = (1, 2, 3)',
        'Remove items',
        'Convert to list'
      ],
      correctAnswer: 1,
      explanation: 'Unpacking: x, y = (1, 2) assigns x=1, y=2.',
      difficulty: 'easy'
    },
    {
      question: 'What happens if unpacking count mismatch?',
      options: ['Uses available', 'ValueError', 'None for missing', 'Ignores extra'],
      correctAnswer: 1,
      explanation: 'a, b = (1, 2, 3) raises ValueError: too many values to unpack.',
      difficulty: 'medium'
    },
    {
      question: 'What does * do in tuple unpacking?',
      options: [
        'Error',
        'Collects remaining values: a, *b, c = (1,2,3,4,5)',
        'Multiply',
        'Repeat'
      ],
      correctAnswer: 1,
      explanation: 'a, *b, c = (1,2,3,4,5) assigns a=1, b=[2,3,4], c=5.',
      difficulty: 'hard'
    },
    {
      question: 'How many methods do tuples have?',
      options: ['Many', 'Two: .count() and .index()', 'None', 'Same as lists'],
      correctAnswer: 1,
      explanation: 'Tuples have only .count() and .index() because they are immutable.',
      difficulty: 'medium'
    },
    {
      question: 'What does .count() do?',
      options: ['Count items', 'Return number of occurrences of value', 'Get length', 'Count types'],
      correctAnswer: 1,
      explanation: '.count(value) returns how many times value appears in tuple.',
      difficulty: 'easy'
    },
    {
      question: 'What does .index() do?',
      options: [
        'Get all indices',
        'Return index of first occurrence of value',
        'Create index',
        'Sort by index'
      ],
      correctAnswer: 1,
      explanation: '.index(value) returns index of first occurrence. Raises ValueError if not found.',
      difficulty: 'easy'
    },
    {
      question: 'Can you concatenate tuples?',
      options: ['No', 'Yes with + operator', 'Only with .join()', 'Only same size'],
      correctAnswer: 1,
      explanation: '+ concatenates tuples: (1,2) + (3,4) = (1,2,3,4).',
      difficulty: 'easy'
    },
    {
      question: 'Can you repeat tuples?',
      options: ['No', 'Yes with * operator', 'Only empty tuples', 'Error'],
      correctAnswer: 1,
      explanation: '* repeats tuples: (1,2) * 3 = (1,2,1,2,1,2).',
      difficulty: 'easy'
    },
    {
      question: 'Can tuples be dictionary keys?',
      options: ['No', 'Yes, tuples are immutable', 'Only empty tuples', 'Only in Python 3'],
      correctAnswer: 1,
      explanation: 'Tuples can be dict keys because they are immutable and hashable.',
      difficulty: 'easy'
    },
    {
      question: 'Can a tuple containing a list be a dict key?',
      options: [
        'Yes',
        'No, raises TypeError because list is mutable',
        'Only if list is empty',
        'Only in Python 2'
      ],
      correctAnswer: 1,
      explanation: '(1, [2, 3]) cannot be dict key because it contains mutable list.',
      difficulty: 'hard'
    },
    {
      question: 'What does len() return for tuples?',
      options: ['Memory size', 'Number of elements', 'Depth', 'Type count'],
      correctAnswer: 1,
      explanation: 'len(tuple) returns the number of elements in tuple.',
      difficulty: 'easy'
    },
    {
      question: 'Can you slice tuples?',
      options: ['No', 'Yes, returns new tuple', 'Changes original', 'Error'],
      correctAnswer: 1,
      explanation: 'Slicing creates new tuple: (1,2,3,4)[1:3] = (2,3).',
      difficulty: 'easy'
    },
    {
      question: 'What does max() do with tuples?',
      options: ['Error', 'Return largest element', 'Return longest', 'Count max'],
      correctAnswer: 1,
      explanation: 'max(tuple) returns the largest element.',
      difficulty: 'easy'
    },
    {
      question: 'What does min() do with tuples?',
      options: ['Error', 'Return smallest element', 'Return shortest', 'Count min'],
      correctAnswer: 1,
      explanation: 'min(tuple) returns the smallest element.',
      difficulty: 'easy'
    },
    {
      question: 'What does sum() do with tuples?',
      options: ['Error', 'Sum all numeric elements', 'Count elements', 'Concatenate'],
      correctAnswer: 1,
      explanation: 'sum(tuple) returns the sum of all numeric elements.',
      difficulty: 'easy'
    },
    {
      question: 'Can you use in operator with tuples?',
      options: ['No', 'Yes, checks membership', 'Only for numbers', 'Error'],
      correctAnswer: 1,
      explanation: '"value in tuple" returns True if value exists in tuple.',
      difficulty: 'easy'
    },
    {
      question: 'What is a named tuple?',
      options: [
        'Tuple with name',
        'Tuple subclass with named fields from collections',
        'String tuple',
        'Labeled tuple'
      ],
      correctAnswer: 1,
      explanation: 'namedtuple creates tuple with named fields: Point = namedtuple(\'Point\', [\'x\', \'y\']).',
      difficulty: 'hard'
    },
    {
      question: 'Why use tuples instead of lists?',
      options: [
        'Faster',
        'Immutability provides safety, can be dict keys, slightly faster',
        'More methods',
        'Required by Python'
      ],
      correctAnswer: 1,
      explanation: 'Tuples are immutable (safer), hashable (dict keys), and slightly more memory efficient.',
      difficulty: 'medium'
    },
    {
      question: 'Can you sort a tuple?',
      options: [
        'Yes with .sort()',
        'No, but sorted() returns sorted list',
        'Yes in-place',
        'Error'
      ],
      correctAnswer: 1,
      explanation: 'Tuples have no .sort(). Use sorted(tuple) which returns a sorted list.',
      difficulty: 'medium'
    },
    {
      question: 'Can you reverse a tuple?',
      options: [
        'Yes with .reverse()',
        'No, but reversed() returns iterator or use [::-1]',
        'Yes in-place',
        'Error'
      ],
      correctAnswer: 1,
      explanation: 'Tuples have no .reverse(). Use reversed(tuple) or tuple[::-1].',
      difficulty: 'medium'
    },
    {
      question: 'How do you convert list to tuple?',
      options: ['list.to_tuple()', 'tuple(list)', '(list)', 'Cannot convert'],
      correctAnswer: 1,
      explanation: 'tuple(list) converts list to tuple.',
      difficulty: 'easy'
    },
    {
      question: 'How do you convert tuple to list?',
      options: ['tuple.to_list()', 'list(tuple)', '[tuple]', 'Cannot convert'],
      correctAnswer: 1,
      explanation: 'list(tuple) converts tuple to list.',
      difficulty: 'easy'
    },
    {
      question: 'Can tuples be nested?',
      options: ['No', 'Yes', 'Only 2 levels', 'Error'],
      correctAnswer: 1,
      explanation: 'Tuples can contain other tuples: ((1,2), (3,4), (5,6)).',
      difficulty: 'easy'
    },
    {
      question: 'What does tuple() constructor do?',
      options: [
        'Create empty tuple',
        'Convert iterable to tuple',
        'Both A and B',
        'Error'
      ],
      correctAnswer: 2,
      explanation: 'tuple() creates empty tuple or converts iterable: tuple([1,2,3]) = (1,2,3).',
      difficulty: 'medium'
    },
    {
      question: 'Can you delete a tuple element?',
      options: ['Yes', 'No, tuples are immutable', 'Only last element', 'With del'],
      correctAnswer: 1,
      explanation: 'Cannot delete individual elements. Can delete entire tuple: del tuple.',
      difficulty: 'easy'
    },
    {
      question: 'Can you delete entire tuple?',
      options: ['No', 'Yes with del tuple_name', 'Only empty tuples', 'Automatic'],
      correctAnswer: 1,
      explanation: 'del tuple_name deletes the entire tuple variable.',
      difficulty: 'easy'
    },
    {
      question: 'What does any() do with tuples?',
      options: [
        'Return any element',
        'True if any element is truthy',
        'Random element',
        'First element'
      ],
      correctAnswer: 1,
      explanation: 'any(tuple) returns True if at least one element is truthy.',
      difficulty: 'medium'
    },
    {
      question: 'What does all() do with tuples?',
      options: [
        'Return all elements',
        'True if all elements are truthy',
        'Count elements',
        'List all'
      ],
      correctAnswer: 1,
      explanation: 'all(tuple) returns True only if all elements are truthy.',
      difficulty: 'medium'
    },
    {
      question: 'Can you compare tuples?',
      options: [
        'No',
        'Yes, lexicographically (element by element)',
        'Only same size',
        'Only numbers'
      ],
      correctAnswer: 1,
      explanation: '(1,2,3) < (1,3,2) compares element by element from left.',
      difficulty: 'medium'
    },
    {
      question: 'What does enumerate() return with tuples?',
      options: [
        'Just indices',
        'Iterator of (index, value) tuples',
        'Just values',
        'Count'
      ],
      correctAnswer: 1,
      explanation: 'enumerate(tuple) yields (index, value) pairs.',
      difficulty: 'medium'
    },
    {
      question: 'What does zip() do with tuples?',
      options: [
        'Compress',
        'Pair corresponding elements from tuples',
        'Merge',
        'Combine'
      ],
      correctAnswer: 1,
      explanation: 'zip((1,2), ("a","b")) pairs elements: [(1,"a"), (2,"b")].',
      difficulty: 'medium'
    },
    {
      question: 'Can you use * to unpack tuple in function call?',
      options: ['No', 'Yes: func(*tuple) unpacks as arguments', 'Error', 'Only lists'],
      correctAnswer: 1,
      explanation: '*tuple unpacks elements as positional arguments: func(*(1,2,3)) → func(1,2,3).',
      difficulty: 'hard'
    },
    {
      question: 'What is the memory advantage of tuples?',
      options: [
        'Same as lists',
        'Tuples use less memory than lists',
        'Tuples use more',
        'No advantage'
      ],
      correctAnswer: 1,
      explanation: 'Tuples are more memory efficient due to immutability.',
      difficulty: 'medium'
    },
    {
      question: 'Can you iterate over tuples?',
      options: ['No', 'Yes with for loop', 'Only with index', 'Error'],
      correctAnswer: 1,
      explanation: 'for item in tuple: works just like lists.',
      difficulty: 'easy'
    },
    {
      question: 'What does filter() return with tuples?',
      options: [
        'Filtered tuple',
        'Iterator of items that pass filter',
        'Removed items',
        'Error'
      ],
      correctAnswer: 1,
      explanation: 'filter(function, tuple) returns iterator of items where function returns True.',
      difficulty: 'medium'
    },
    {
      question: 'What does map() return with tuples?',
      options: [
        'Mapped tuple',
        'Iterator with function applied to each item',
        'New tuple',
        'Error'
      ],
      correctAnswer: 1,
      explanation: 'map(function, tuple) returns iterator with function applied to each element.',
      difficulty: 'medium'
    },
    {
      question: 'Can empty tuple be a dict key?',
      options: ['No', 'Yes', 'Error', 'Only in Python 3'],
      correctAnswer: 1,
      explanation: '() can be a dict key because empty tuple is immutable and hashable.',
      difficulty: 'medium'
    },
    {
      question: 'What does tuple[::2] do?',
      options: ['Error', 'Every second element', 'First two', 'Divide by 2'],
      correctAnswer: 1,
      explanation: '[::2] gets every 2nd element: (0,1,2,3,4)[::2] = (0,2,4).',
      difficulty: 'medium'
    },
    {
      question: 'Is (1, 2, 3) == (1, 2, 3) True?',
      options: ['No', 'Yes', 'Sometimes', 'Error'],
      correctAnswer: 1,
      explanation: 'Tuples with same elements in same order are equal.',
      difficulty: 'easy'
    },
    {
      question: 'What does tuple multiplication return?',
      options: ['Error', 'New repeated tuple', 'Modified original', 'Product'],
      correctAnswer: 1,
      explanation: '(1,2) * 3 returns new tuple (1,2,1,2,1,2), original unchanged.',
      difficulty: 'easy'
    },
    {
      question: 'Can you use comprehension with tuples?',
      options: [
        'No',
        'Yes, but returns generator: (x for x in range(5))',
        'Same as lists',
        'Error'
      ],
      correctAnswer: 1,
      explanation: '(x for x in range(5)) is generator expression, not tuple. Use tuple() to convert.',
      difficulty: 'hard'
    }
  ],

  'sets-comprehensive': [
    {
      question: 'How do you create an empty set?',
      options: ['{}', 'set()', '[]', '()'],
      correctAnswer: 1,
      explanation: 'set() creates empty set. {} creates empty dictionary.',
      difficulty: 'medium'
    },
    {
      question: 'What does {} create?',
      options: ['Empty set', 'Empty dictionary', 'Both', 'Error'],
      correctAnswer: 1,
      explanation: '{} creates empty dictionary, not set. Use set() for empty set.',
      difficulty: 'medium'
    },
    {
      question: 'Are sets ordered?',
      options: ['Yes', 'No, sets are unordered', 'Only in Python 3.7+', 'Sorted automatically'],
      correctAnswer: 1,
      explanation: 'Sets are unordered collections (though Python 3.7+ maintains some insertion order).',
      difficulty: 'easy'
    },
    {
      question: 'Can sets contain duplicate values?',
      options: ['Yes', 'No, sets automatically remove duplicates', 'Only numbers', 'Error'],
      correctAnswer: 1,
      explanation: 'Sets contain only unique values: {1,2,2,3} = {1,2,3}.',
      difficulty: 'easy'
    },
    {
      question: 'Are sets mutable?',
      options: ['No', 'Yes, can add/remove items', 'Only frozenset', 'Sometimes'],
      correctAnswer: 1,
      explanation: 'Sets are mutable - can add/remove items. frozenset is immutable.',
      difficulty: 'easy'
    },
    {
      question: 'Can sets contain mutable items?',
      options: [
        'Yes',
        'No, only immutable/hashable items',
        'Only numbers',
        'Only strings'
      ],
      correctAnswer: 1,
      explanation: 'Sets can only contain immutable items (no lists/dicts). Can contain tuples.',
      difficulty: 'medium'
    },
    {
      question: 'How do you add item to set?',
      options: ['.append()', '.add()', '.insert()', '.put()'],
      correctAnswer: 1,
      explanation: '.add(item) adds single item to set.',
      difficulty: 'easy'
    },
    {
      question: 'What does .update() do?',
      options: [
        'Refresh set',
        'Add multiple items from iterable',
        'Update values',
        'Modify items'
      ],
      correctAnswer: 1,
      explanation: '.update(iterable) adds all items from iterable to set.',
      difficulty: 'easy'
    },
    {
      question: 'How do you remove item from set?',
      options: ['.remove() or .discard()', '.delete()', '.pop()', 'del set[item]'],
      correctAnswer: 0,
      explanation: '.remove(item) raises KeyError if not found. .discard(item) does not.',
      difficulty: 'medium'
    },
    {
      question: 'What is difference between .remove() and .discard()?',
      options: [
        'No difference',
        '.remove() raises error if not found, .discard() doesn\'t',
        '.discard() is faster',
        '.remove() is deprecated'
      ],
      correctAnswer: 1,
      explanation: '.remove(x) raises KeyError if x not in set. .discard(x) does nothing.',
      difficulty: 'medium'
    },
    {
      question: 'What does .pop() do with sets?',
      options: [
        'Remove last item',
        'Remove and return arbitrary item',
        'Remove first item',
        'Error'
      ],
      correctAnswer: 1,
      explanation: '.pop() removes and returns arbitrary item (sets are unordered).',
      difficulty: 'medium'
    },
    {
      question: 'What does .clear() do?',
      options: ['Delete set', 'Remove all items', 'Reset values', 'Empty and delete'],
      correctAnswer: 1,
      explanation: '.clear() removes all items, leaving empty set.',
      difficulty: 'easy'
    },
    {
      question: 'What is set union?',
      options: [
        'Merge sets',
        'All items from both sets: set1 | set2 or set1.union(set2)',
        'Common items',
        'Add sets'
      ],
      correctAnswer: 1,
      explanation: 'Union combines all unique items: {1,2} | {2,3} = {1,2,3}.',
      difficulty: 'easy'
    },
    {
      question: 'What is set intersection?',
      options: [
        'Cross sets',
        'Common items in both sets: set1 & set2 or set1.intersection(set2)',
        'All items',
        'Divide sets'
      ],
      correctAnswer: 1,
      explanation: 'Intersection finds common items: {1,2,3} & {2,3,4} = {2,3}.',
      difficulty: 'easy'
    },
    {
      question: 'What is set difference?',
      options: [
        'Subtract sets',
        'Items in first set but not in second: set1 - set2 or set1.difference(set2)',
        'Compare sets',
        'Unique items'
      ],
      correctAnswer: 1,
      explanation: 'Difference: {1,2,3} - {2,3,4} = {1}.',
      difficulty: 'easy'
    },
    {
      question: 'What is symmetric difference?',
      options: [
        'Same items',
        'Items in either set but not both: set1 ^ set2 or set1.symmetric_difference(set2)',
        'Opposite sets',
        'Mirror sets'
      ],
      correctAnswer: 1,
      explanation: 'Symmetric difference: {1,2,3} ^ {2,3,4} = {1,4}.',
      difficulty: 'medium'
    },
    {
      question: 'What operator represents union?',
      options: ['+', '|', '&', '^'],
      correctAnswer: 1,
      explanation: '| is union operator: set1 | set2.',
      difficulty: 'easy'
    },
    {
      question: 'What operator represents intersection?',
      options: ['|', '&', '-', '^'],
      correctAnswer: 1,
      explanation: '& is intersection operator: set1 & set2.',
      difficulty: 'easy'
    },
    {
      question: 'What operator represents difference?',
      options: ['|', '&', '-', '^'],
      correctAnswer: 2,
      explanation: '- is difference operator: set1 - set2.',
      difficulty: 'easy'
    },
    {
      question: 'What operator represents symmetric difference?',
      options: ['|', '&', '-', '^'],
      correctAnswer: 3,
      explanation: '^ is symmetric difference operator: set1 ^ set2.',
      difficulty: 'easy'
    },
    {
      question: 'What does .issubset() check?',
      options: [
        'Partial set',
        'If all items in set are in another set',
        'Subset count',
        'Set size'
      ],
      correctAnswer: 1,
      explanation: 'set1.issubset(set2) checks if set1 ⊆ set2 (all items of set1 in set2).',
      difficulty: 'medium'
    },
    {
      question: 'What does .issuperset() check?',
      options: [
        'Larger set',
        'If set contains all items from another set',
        'Superset count',
        'Set size'
      ],
      correctAnswer: 1,
      explanation: 'set1.issuperset(set2) checks if set1 ⊇ set2 (contains all items of set2).',
      difficulty: 'medium'
    },
    {
      question: 'What does .isdisjoint() check?',
      options: [
        'Separate sets',
        'If sets have no common items',
        'Disconnected sets',
        'Different sets'
      ],
      correctAnswer: 1,
      explanation: 'set1.isdisjoint(set2) returns True if no common items.',
      difficulty: 'medium'
    },
    {
      question: 'Can you index sets?',
      options: ['Yes', 'No, sets are unordered', 'Only first item', 'With .get()'],
      correctAnswer: 1,
      explanation: 'Cannot use set[0] because sets are unordered collections.',
      difficulty: 'easy'
    },
    {
      question: 'Can you slice sets?',
      options: ['Yes', 'No, sets are unordered', 'Only with step', 'Error'],
      correctAnswer: 1,
      explanation: 'Cannot slice sets because they are unordered.',
      difficulty: 'easy'
    },
    {
      question: 'Can you iterate over sets?',
      options: ['No', 'Yes with for loop', 'Only with index', 'Error'],
      correctAnswer: 1,
      explanation: 'for item in set: works, but order is not guaranteed.',
      difficulty: 'easy'
    },
    {
      question: 'What is frozenset?',
      options: [
        'Cold set',
        'Immutable version of set',
        'Sorted set',
        'Frozen values'
      ],
      correctAnswer: 1,
      explanation: 'frozenset is immutable set - cannot add/remove items after creation.',
      difficulty: 'medium'
    },
    {
      question: 'Can frozenset be a dict key?',
      options: ['No', 'Yes, frozenset is immutable', 'Only empty', 'Error'],
      correctAnswer: 1,
      explanation: 'frozenset can be dict key because it is immutable and hashable.',
      difficulty: 'medium'
    },
    {
      question: 'Can regular set be a dict key?',
      options: ['Yes', 'No, sets are mutable', 'Only empty sets', 'Only in Python 3'],
      correctAnswer: 1,
      explanation: 'Regular sets cannot be dict keys because they are mutable.',
      difficulty: 'medium'
    },
    {
      question: 'What does len() return for sets?',
      options: ['Memory size', 'Number of unique items', 'Total items added', 'Capacity'],
      correctAnswer: 1,
      explanation: 'len(set) returns number of unique items.',
      difficulty: 'easy'
    },
    {
      question: 'What does in operator check in sets?',
      options: ['Index', 'If value exists in set', 'Position', 'Count'],
      correctAnswer: 1,
      explanation: '"value in set" checks membership - very fast O(1) operation.',
      difficulty: 'easy'
    },
    {
      question: 'What is set comprehension?',
      options: [
        'Understanding sets',
        'Creating sets in one line: {x*2 for x in range(5)}',
        'Set documentation',
        'Set methods'
      ],
      correctAnswer: 1,
      explanation: 'Set comprehension: {x**2 for x in range(5)} creates {0,1,4,9,16}.',
      difficulty: 'medium'
    },
    {
      question: 'What does max() do with sets?',
      options: ['Error', 'Return largest item', 'Count max', 'Most frequent'],
      correctAnswer: 1,
      explanation: 'max(set) returns the largest item.',
      difficulty: 'easy'
    },
    {
      question: 'What does min() do with sets?',
      options: ['Error', 'Return smallest item', 'Count min', 'Least frequent'],
      correctAnswer: 1,
      explanation: 'min(set) returns the smallest item.',
      difficulty: 'easy'
    },
    {
      question: 'What does sum() do with sets?',
      options: ['Error', 'Sum all numeric items', 'Count items', 'Concatenate'],
      correctAnswer: 1,
      explanation: 'sum(set) returns sum of all numeric items.',
      difficulty: 'easy'
    },
    {
      question: 'Can sets contain different data types?',
      options: ['No', 'Yes, as long as hashable', 'Only numbers', 'Only strings'],
      correctAnswer: 1,
      explanation: 'Sets can contain mixed immutable types: {1, "hello", True, 3.14}.',
      difficulty: 'easy'
    },
    {
      question: 'What does |= operator do?',
      options: [
        'Error',
        'Update set with union: set1 |= set2',
        'Bitwise OR',
        'Compare'
      ],
      correctAnswer: 1,
      explanation: 'set1 |= set2 updates set1 with union (adds items from set2).',
      difficulty: 'medium'
    },
    {
      question: 'What does &= operator do?',
      options: [
        'Error',
        'Update set with intersection: set1 &= set2',
        'Bitwise AND',
        'Compare'
      ],
      correctAnswer: 1,
      explanation: 'set1 &= set2 updates set1 with intersection (keeps only common items).',
      difficulty: 'medium'
    },
    {
      question: 'What does -= operator do?',
      options: [
        'Subtract',
        'Update set with difference: set1 -= set2',
        'Remove items',
        'Compare'
      ],
      correctAnswer: 1,
      explanation: 'set1 -= set2 updates set1 with difference (removes items in set2).',
      difficulty: 'medium'
    },
    {
      question: 'What does ^= operator do?',
      options: [
        'Error',
        'Update set with symmetric difference: set1 ^= set2',
        'XOR',
        'Compare'
      ],
      correctAnswer: 1,
      explanation: 'set1 ^= set2 updates set1 with symmetric difference.',
      difficulty: 'medium'
    },
    {
      question: 'How do you convert list to set?',
      options: ['list.to_set()', 'set(list)', '{list}', 'Cannot convert'],
      correctAnswer: 1,
      explanation: 'set(list) converts list to set, removing duplicates.',
      difficulty: 'easy'
    },
    {
      question: 'How do you convert set to list?',
      options: ['set.to_list()', 'list(set)', '[set]', 'Cannot convert'],
      correctAnswer: 1,
      explanation: 'list(set) converts set to list (order not guaranteed).',
      difficulty: 'easy'
    },
    {
      question: 'Why use sets for removing duplicates?',
      options: [
        'Required',
        'Sets automatically maintain uniqueness - very efficient',
        'Only way',
        'Faster than lists'
      ],
      correctAnswer: 1,
      explanation: 'list(set(mylist)) quickly removes duplicates (but loses order).',
      difficulty: 'medium'
    },
    {
      question: 'Can you use < operator with sets?',
      options: [
        'No',
        'Yes, checks if proper subset',
        'Compares sizes',
        'Error'
      ],
      correctAnswer: 1,
      explanation: 'set1 < set2 checks if set1 is proper subset of set2 (subset but not equal).',
      difficulty: 'medium'
    },
    {
      question: 'Can you use <= operator with sets?',
      options: [
        'No',
        'Yes, checks if subset or equal',
        'Compares sizes',
        'Error'
      ],
      correctAnswer: 1,
      explanation: 'set1 <= set2 checks if set1 ⊆ set2 (subset or equal).',
      difficulty: 'medium'
    },
    {
      question: 'What does any() do with sets?',
      options: [
        'Return any item',
        'True if any item is truthy',
        'Random item',
        'First item'
      ],
      correctAnswer: 1,
      explanation: 'any(set) returns True if at least one item is truthy.',
      difficulty: 'medium'
    },
    {
      question: 'What does all() do with sets?',
      options: [
        'Return all items',
        'True if all items are truthy',
        'Count items',
        'List all'
      ],
      correctAnswer: 1,
      explanation: 'all(set) returns True only if all items are truthy.',
      difficulty: 'medium'
    },
    {
      question: 'Can you copy a set?',
      options: ['No', 'Yes with .copy()', 'Only frozenset', 'set2 = set1'],
      correctAnswer: 1,
      explanation: '.copy() creates shallow copy. set2 = set1 creates reference.',
      difficulty: 'easy'
    },
    {
      question: 'What is the time complexity of set membership test?',
      options: ['O(n)', 'O(1) average case', 'O(log n)', 'O(n²)'],
      correctAnswer: 1,
      explanation: '"x in set" is O(1) average - very fast using hash table.',
      difficulty: 'hard'
    }
  ],

  'functions': [
    {
      question: 'How do you define a function?',
      options: ['function name():', 'def name():', 'func name():', 'define name():'],
      correctAnswer: 1,
      explanation: 'Functions are defined with def keyword: def my_func():',
      difficulty: 'easy'
    },
    {
      question: 'What does return do?',
      options: [
        'End function',
        'Send value back to caller and exit function',
        'Print value',
        'Store value'
      ],
      correctAnswer: 1,
      explanation: 'return exits function and sends value back: return x + y.',
      difficulty: 'easy'
    },
    {
      question: 'What happens if function has no return statement?',
      options: ['Error', 'Returns None', 'Returns 0', 'Returns False'],
      correctAnswer: 1,
      explanation: 'Functions without return statement implicitly return None.',
      difficulty: 'medium'
    },
    {
      question: 'What are function parameters?',
      options: [
        'Function values',
        'Variables in function definition that receive arguments',
        'Function results',
        'Function names'
      ],
      correctAnswer: 1,
      explanation: 'Parameters are variables in def: def func(param1, param2):',
      difficulty: 'easy'
    },
    {
      question: 'What are function arguments?',
      options: [
        'Function debates',
        'Values passed to function when called',
        'Function parameters',
        'Return values'
      ],
      correctAnswer: 1,
      explanation: 'Arguments are actual values passed: func(10, 20).',
      difficulty: 'easy'
    },
    {
      question: 'What is a positional argument?',
      options: [
        'Named argument',
        'Argument matched to parameter by position',
        'Optional argument',
        'Location argument'
      ],
      correctAnswer: 1,
      explanation: 'Positional args matched by order: func(1, 2) → param1=1, param2=2.',
      difficulty: 'medium'
    },
    {
      question: 'What is a keyword argument?',
      options: [
        'Special argument',
        'Argument passed with parameter name: func(x=10)',
        'Required argument',
        'Reserved argument'
      ],
      correctAnswer: 1,
      explanation: 'Keyword args specify parameter name: func(name="John", age=30).',
      difficulty: 'medium'
    },
    {
      question: 'What is a default parameter?',
      options: [
        'First parameter',
        'Parameter with default value: def func(x=10):',
        'Required parameter',
        'Main parameter'
      ],
      correctAnswer: 1,
      explanation: 'Default parameters have fallback values: def greet(name="World"):',
      difficulty: 'easy'
    },
    {
      question: 'Can positional args come after keyword args?',
      options: ['Yes', 'No, SyntaxError', 'Sometimes', 'Only in Python 2'],
      correctAnswer: 1,
      explanation: 'func(x=1, 2) is SyntaxError. Positional args must come before keyword args.',
      difficulty: 'medium'
    },
    {
      question: 'What does *args do?',
      options: [
        'Multiply args',
        'Collect variable number of positional args into tuple',
        'Required args',
        'All arguments'
      ],
      correctAnswer: 1,
      explanation: '*args collects extra positional arguments: def func(*args) → args is tuple.',
      difficulty: 'medium'
    },
    {
      question: 'What does **kwargs do?',
      options: [
        'Power kwargs',
        'Collect variable number of keyword args into dict',
        'Required kwargs',
        'All keywords'
      ],
      correctAnswer: 1,
      explanation: '**kwargs collects extra keyword arguments: def func(**kwargs) → kwargs is dict.',
      difficulty: 'medium'
    },
    {
      question: 'What is the order of parameters?',
      options: [
        'Any order',
        'positional, *args, keyword-only, **kwargs',
        'kwargs first',
        'No rules'
      ],
      correctAnswer: 1,
      explanation: 'Order: def func(pos, *args, kw_only, **kwargs):',
      difficulty: 'hard'
    },
    {
      question: 'What is a lambda function?',
      options: [
        'Greek function',
        'Anonymous one-line function: lambda x: x*2',
        'Named function',
        'Deprecated function'
      ],
      correctAnswer: 1,
      explanation: 'lambda creates small anonymous function: lambda x, y: x + y.',
      difficulty: 'medium'
    },
    {
      question: 'Can lambda have multiple statements?',
      options: ['Yes', 'No, only single expression', 'Up to 3', 'With semicolons'],
      correctAnswer: 1,
      explanation: 'lambda restricted to single expression. Use def for multiple statements.',
      difficulty: 'medium'
    },
    {
      question: 'What is function scope?',
      options: [
        'Function size',
        'Region where variables are accessible',
        'Function purpose',
        'Function range'
      ],
      correctAnswer: 1,
      explanation: 'Scope determines variable visibility: local, enclosing, global, built-in (LEGB).',
      difficulty: 'medium'
    },
    {
      question: 'What is a local variable?',
      options: [
        'Nearby variable',
        'Variable defined inside function',
        'Function variable',
        'Temporary variable'
      ],
      correctAnswer: 1,
      explanation: 'Local variables exist only inside function: def func(): x = 10.',
      difficulty: 'easy'
    },
    {
      question: 'What is a global variable?',
      options: [
        'World variable',
        'Variable defined outside functions',
        'Public variable',
        'Universal variable'
      ],
      correctAnswer: 1,
      explanation: 'Global variables defined at module level, accessible everywhere.',
      difficulty: 'easy'
    },
    {
      question: 'What does global keyword do?',
      options: [
        'Create global',
        'Declare intent to modify global variable inside function',
        'Make public',
        'Export variable'
      ],
      correctAnswer: 1,
      explanation: 'global x allows modifying global variable x inside function.',
      difficulty: 'medium'
    },
    {
      question: 'What does nonlocal keyword do?',
      options: [
        'Not local',
        'Access variable from enclosing function scope',
        'Make global',
        'Remote variable'
      ],
      correctAnswer: 1,
      explanation: 'nonlocal accesses variable from outer (but not global) function scope.',
      difficulty: 'hard'
    },
    {
      question: 'What is a docstring?',
      options: [
        'String documentation',
        'First string in function describing its purpose',
        'Function name',
        'Return string'
      ],
      correctAnswer: 1,
      explanation: 'Docstring is triple-quoted string at start: def func(): """Description"""',
      difficulty: 'easy'
    },
    {
      question: 'How do you access docstring?',
      options: ['function.doc', 'function.__doc__', 'function.docstring', 'help(function)'],
      correctAnswer: 1,
      explanation: 'Access with .__doc__ attribute or help() function.',
      difficulty: 'medium'
    },
    {
      question: 'What is recursion?',
      options: [
        'Repetition',
        'Function calling itself',
        'Loop',
        'Function chain'
      ],
      correctAnswer: 1,
      explanation: 'Recursion is when function calls itself: def factorial(n): return n * factorial(n-1).',
      difficulty: 'medium'
    },
    {
      question: 'What is a base case in recursion?',
      options: [
        'First case',
        'Condition to stop recursion',
        'Default case',
        'Main case'
      ],
      correctAnswer: 1,
      explanation: 'Base case prevents infinite recursion: if n == 0: return 1.',
      difficulty: 'medium'
    },
    {
      question: 'What happens without base case?',
      options: [
        'Works fine',
        'RecursionError (maximum depth exceeded)',
        'Infinite loop',
        'Returns None'
      ],
      correctAnswer: 1,
      explanation: 'Missing base case causes RecursionError when max recursion depth reached.',
      difficulty: 'medium'
    },
    {
      question: 'What is a decorator?',
      options: [
        'Function decoration',
        'Function that modifies another function',
        'Function comment',
        'Function style'
      ],
      correctAnswer: 1,
      explanation: 'Decorator wraps function to add functionality: @decorator above function.',
      difficulty: 'hard'
    },
    {
      question: 'How do you apply decorator?',
      options: [
        'decorator(func)',
        '@decorator above function definition',
        'func.decorator()',
        'def func() decorator:'
      ],
      correctAnswer: 1,
      explanation: '@decorator syntax: @my_decorator followed by def func():',
      difficulty: 'hard'
    },
    {
      question: 'Can functions return multiple values?',
      options: [
        'No',
        'Yes, as tuple: return x, y',
        'Only two values',
        'With array'
      ],
      correctAnswer: 1,
      explanation: 'return x, y returns tuple (x, y). Can unpack: a, b = func().',
      difficulty: 'medium'
    },
    {
      question: 'What is a first-class function?',
      options: [
        'Best function',
        'Functions treated as objects (can be assigned, passed, returned)',
        'Main function',
        'Priority function'
      ],
      correctAnswer: 1,
      explanation: 'Python functions are first-class: f = my_func; new_func = f.',
      difficulty: 'hard'
    },
    {
      question: 'Can you pass function as argument?',
      options: ['No', 'Yes', 'Only lambda', 'Only built-in'],
      correctAnswer: 1,
      explanation: 'Functions can be passed: def apply(func, x): return func(x).',
      difficulty: 'medium'
    },
    {
      question: 'Can function return another function?',
      options: ['No', 'Yes', 'Only closures', 'Error'],
      correctAnswer: 1,
      explanation: 'Functions can return functions: def outer(): return inner.',
      difficulty: 'medium'
    },
    {
      question: 'What is a closure?',
      options: [
        'Closed function',
        'Nested function that remembers variables from enclosing scope',
        'Function end',
        'Private function'
      ],
      correctAnswer: 1,
      explanation: 'Closure retains access to enclosing scope variables after outer function returns.',
      difficulty: 'hard'
    },
    {
      question: 'What does pass do in function?',
      options: [
        'Skip function',
        'Null statement (placeholder for empty function)',
        'Pass value',
        'Continue'
      ],
      correctAnswer: 1,
      explanation: 'pass is placeholder: def func(): pass (does nothing).',
      difficulty: 'easy'
    },
    {
      question: 'What is a generator function?',
      options: [
        'Function creator',
        'Function using yield to return iterator',
        'Function generator',
        'Auto function'
      ],
      correctAnswer: 1,
      explanation: 'Generator uses yield: def gen(): yield 1; yield 2.',
      difficulty: 'hard'
    },
    {
      question: 'What is difference between return and yield?',
      options: [
        'No difference',
        'return exits, yield pauses and resumes',
        'yield is faster',
        'return is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'yield produces value and pauses, maintaining state for next call.',
      difficulty: 'hard'
    },
    {
      question: 'Can you have default parameters before required ones?',
      options: [
        'Yes',
        'No, SyntaxError',
        'Only in Python 2',
        'Sometimes'
      ],
      correctAnswer: 1,
      explanation: 'def func(x=1, y): is SyntaxError. Defaults must come after required.',
      difficulty: 'medium'
    },
    {
      question: 'What are keyword-only arguments?',
      options: [
        'Named arguments',
        'Arguments after * that must be passed by name',
        'Optional arguments',
        'String arguments'
      ],
      correctAnswer: 1,
      explanation: 'def func(*, x, y): requires func(x=1, y=2), not func(1, 2).',
      difficulty: 'hard'
    },
    {
      question: 'What does / mean in parameters (Python 3.8+)?',
      options: [
        'Division',
        'Marks parameters before it as positional-only',
        'Or operator',
        'Comment'
      ],
      correctAnswer: 1,
      explanation: 'def func(x, y, /): requires func(1, 2), not func(x=1, y=2).',
      difficulty: 'hard'
    },
    {
      question: 'Can mutable defaults be dangerous?',
      options: [
        'No',
        'Yes, shared between calls: def func(x=[]):',
        'Only lists',
        'Not in Python 3'
      ],
      correctAnswer: 1,
      explanation: 'def func(x=[]): x.append(1) shares same list across calls. Use x=None instead.',
      difficulty: 'hard'
    },
    {
      question: 'What is function annotation?',
      options: [
        'Function comment',
        'Type hints: def func(x: int) -> str:',
        'Documentation',
        'Function note'
      ],
      correctAnswer: 1,
      explanation: 'Annotations provide type hints: def add(x: int, y: int) -> int:',
      difficulty: 'medium'
    },
    {
      question: 'Are type annotations enforced?',
      options: ['Yes', 'No, only hints for tools', 'Only in Python 3.10+', 'At runtime'],
      correctAnswer: 1,
      explanation: 'Type hints are optional metadata for type checkers, not enforced.',
      difficulty: 'medium'
    },
    {
      question: 'What does callable() check?',
      options: [
        'If can call',
        'If object can be called like function',
        'Phone number',
        'If defined'
      ],
      correctAnswer: 1,
      explanation: 'callable(obj) checks if obj() is valid (functions, classes, etc.).',
      difficulty: 'medium'
    },
    {
      question: 'What is *args unpacking in call?',
      options: [
        'Error',
        'Unpacks iterable as positional args: func(*[1,2,3])',
        'Multiply',
        'Pointer'
      ],
      correctAnswer: 1,
      explanation: 'func(*[1,2,3]) → func(1,2,3). Unpacks list to arguments.',
      difficulty: 'medium'
    },
    {
      question: 'What is **kwargs unpacking in call?',
      options: [
        'Error',
        'Unpacks dict as keyword args: func(**{"x":1})',
        'Power',
        'Comment'
      ],
      correctAnswer: 1,
      explanation: 'func(**{"x":1, "y":2}) → func(x=1, y=2). Unpacks dict to kwargs.',
      difficulty: 'medium'
    },
    {
      question: 'What does map() return?',
      options: [
        'List',
        'Iterator with function applied to each item',
        'Dictionary',
        'Mapped values'
      ],
      correctAnswer: 1,
      explanation: 'map(func, iterable) returns iterator applying func to each element.',
      difficulty: 'medium'
    },
    {
      question: 'What does filter() return?',
      options: [
        'Filtered list',
        'Iterator of items where function returns True',
        'Removed items',
        'Boolean'
      ],
      correctAnswer: 1,
      explanation: 'filter(func, iterable) returns iterator of items where func(item) is True.',
      difficulty: 'medium'
    },
    {
      question: 'What does reduce() do?',
      options: [
        'Make smaller',
        'Apply function cumulatively to reduce iterable to single value',
        'Filter items',
        'Simplify'
      ],
      correctAnswer: 1,
      explanation: 'reduce(func, [1,2,3,4]) applies func cumulatively. From functools module.',
      difficulty: 'hard'
    },
    {
      question: 'Can you define function inside function?',
      options: ['No', 'Yes, nested functions', 'Only lambda', 'Error'],
      correctAnswer: 1,
      explanation: 'Can define nested functions: def outer(): def inner(): pass.',
      difficulty: 'medium'
    },
    {
      question: 'What is the walrus operator in functions?',
      options: [
        'Not applicable',
        'Assignment expression: if (n := func()) > 0:',
        'Error',
        'Deprecated'
      ],
      correctAnswer: 1,
      explanation: ':= assigns in expression: while (line := file.readline()).',
      difficulty: 'hard'
    },
    {
      question: 'What is partial function?',
      options: [
        'Incomplete function',
        'Function with some arguments pre-filled from functools',
        'Half function',
        'Draft function'
      ],
      correctAnswer: 1,
      explanation: 'partial() pre-fills arguments: from functools import partial; add5 = partial(add, 5).',
      difficulty: 'hard'
    }
  ],

  'exception-handling': [
    {
      question: 'What is an exception?',
      options: [
        'Special case',
        'Error that occurs during program execution',
        'Exclusion',
        'Rare event'
      ],
      correctAnswer: 1,
      explanation: 'Exception is runtime error: ZeroDivisionError, TypeError, ValueError.',
      difficulty: 'easy'
    },
    {
      question: 'What happens when exception is not handled?',
      options: [
        'Ignored',
        'Program crashes with traceback',
        'Returns None',
        'Continues'
      ],
      correctAnswer: 1,
      explanation: 'Unhandled exceptions terminate program and display traceback.',
      difficulty: 'easy'
    },
    {
      question: 'How do you handle exceptions?',
      options: ['if-else', 'try-except', 'catch-throw', 'handle-error'],
      correctAnswer: 1,
      explanation: 'try-except blocks catch and handle exceptions gracefully.',
      difficulty: 'easy'
    },
    {
      question: 'What is the basic try-except syntax?',
      options: [
        'try: code except: handler',
        'Both are correct',
        'catch: code except: handler',
        'try: code catch: handler'
      ],
      correctAnswer: 0,
      explanation: 'try: risky_code except: handle_error is basic syntax.',
      difficulty: 'easy'
    },
    {
      question: 'Can you catch specific exceptions?',
      options: ['No', 'Yes: except ValueError:', 'Only built-in', 'All at once'],
      correctAnswer: 1,
      explanation: 'except ExceptionType: catches specific exception: except ValueError:',
      difficulty: 'easy'
    },
    {
      question: 'Can you have multiple except blocks?',
      options: ['No', 'Yes, for different exceptions', 'Only two', 'Error'],
      correctAnswer: 1,
      explanation: 'Multiple except blocks handle different exceptions separately.',
      difficulty: 'easy'
    },
    {
      question: 'What does except without type catch?',
      options: [
        'Nothing',
        'All exceptions (not recommended)',
        'Only errors',
        'Specific ones'
      ],
      correctAnswer: 1,
      explanation: 'except: catches all exceptions but is discouraged (catches system exit too).',
      difficulty: 'medium'
    },
    {
      question: 'What does else block do in try-except?',
      options: [
        'Alternative handler',
        'Executes if no exception occurred',
        'Default handler',
        'Error case'
      ],
      correctAnswer: 1,
      explanation: 'else runs if try block succeeds (no exception raised).',
      difficulty: 'medium'
    },
    {
      question: 'What does finally block do?',
      options: [
        'Final handler',
        'Always executes, exception or not',
        'Last except',
        'Cleanup only if error'
      ],
      correctAnswer: 1,
      explanation: 'finally always runs for cleanup (close files, etc.), regardless of exceptions.',
      difficulty: 'easy'
    },
    {
      question: 'What is the order of try-except-else-finally?',
      options: [
        'Any order',
        'try, except(s), else (optional), finally (optional)',
        'try, finally, except',
        'No rules'
      ],
      correctAnswer: 1,
      explanation: 'Order: try → except(s) → else (optional) → finally (optional).',
      difficulty: 'medium'
    },
    {
      question: 'How do you raise an exception?',
      options: ['throw Exception', 'raise Exception', 'error Exception', 'except Exception'],
      correctAnswer: 1,
      explanation: 'raise ExceptionType("message") raises exception: raise ValueError("Invalid").',
      difficulty: 'easy'
    },
    {
      question: 'How do you re-raise caught exception?',
      options: ['raise again', 'raise (no args)', 'throw', 'reraise'],
      correctAnswer: 1,
      explanation: 'raise without arguments re-raises current exception in except block.',
      difficulty: 'medium'
    },
    {
      question: 'What does except Exception as e: do?',
      options: [
        'Rename exception',
        'Capture exception object in variable e',
        'Convert exception',
        'Alias exception'
      ],
      correctAnswer: 1,
      explanation: '"as e" assigns exception object to variable e for access to details.',
      difficulty: 'medium'
    },
    {
      question: 'What is ValueError?',
      options: [
        'Value error',
        'Raised when function gets correct type but inappropriate value',
        'Variable error',
        'Validation error'
      ],
      correctAnswer: 1,
      explanation: 'ValueError: int("abc") - correct type (string) but invalid for conversion.',
      difficulty: 'easy'
    },
    {
      question: 'What is TypeError?',
      options: [
        'Type error',
        'Raised when operation applied to inappropriate type',
        'Typing error',
        'Text error'
      ],
      correctAnswer: 1,
      explanation: 'TypeError: "hello" + 5 - cannot add string and int.',
      difficulty: 'easy'
    },
    {
      question: 'What is KeyError?',
      options: [
        'Keyboard error',
        'Raised when dict key not found',
        'Key problem',
        'Lock error'
      ],
      correctAnswer: 1,
      explanation: 'KeyError: dict["missing_key"] when key doesn\'t exist.',
      difficulty: 'easy'
    },
    {
      question: 'What is IndexError?',
      options: [
        'Index problem',
        'Raised when sequence index out of range',
        'Number error',
        'Position error'
      ],
      correctAnswer: 1,
      explanation: 'IndexError: list[100] when list has fewer than 101 items.',
      difficulty: 'easy'
    },
    {
      question: 'What is AttributeError?',
      options: [
        'Attribute problem',
        'Raised when attribute reference or assignment fails',
        'Property error',
        'Field error'
      ],
      correctAnswer: 1,
      explanation: 'AttributeError: obj.nonexistent_method when attribute doesn\'t exist.',
      difficulty: 'easy'
    },
    {
      question: 'What is ZeroDivisionError?',
      options: [
        'Zero error',
        'Raised when dividing by zero',
        'Math error',
        'Division problem'
      ],
      correctAnswer: 1,
      explanation: 'ZeroDivisionError: 10 / 0 or 10 // 0.',
      difficulty: 'easy'
    },
    {
      question: 'What is FileNotFoundError?',
      options: [
        'File error',
        'Raised when trying to open non-existent file',
        'Missing error',
        'Path error'
      ],
      correctAnswer: 1,
      explanation: 'FileNotFoundError: open("nonexistent.txt") when file doesn\'t exist.',
      difficulty: 'easy'
    },
    {
      question: 'What is ImportError?',
      options: [
        'Import problem',
        'Raised when import statement fails',
        'Module error',
        'Load error'
      ],
      correctAnswer: 1,
      explanation: 'ImportError: import nonexistent_module when module not found.',
      difficulty: 'easy'
    },
    {
      question: 'What is NameError?',
      options: [
        'Name problem',
        'Raised when variable name not found',
        'Variable error',
        'Reference error'
      ],
      correctAnswer: 1,
      explanation: 'NameError: print(undefined_variable) when variable doesn\'t exist.',
      difficulty: 'easy'
    },
    {
      question: 'What is SyntaxError?',
      options: [
        'Syntax problem',
        'Raised when Python parser encounters invalid syntax',
        'Grammar error',
        'Code error'
      ],
      correctAnswer: 1,
      explanation: 'SyntaxError: if x = 5: - using = instead of == in condition.',
      difficulty: 'easy'
    },
    {
      question: 'What is IndentationError?',
      options: [
        'Space error',
        'Raised when indentation is incorrect',
        'Tab error',
        'Format error'
      ],
      correctAnswer: 1,
      explanation: 'IndentationError: Incorrect spacing in block structures.',
      difficulty: 'easy'
    },
    {
      question: 'Can you catch multiple exceptions in one block?',
      options: [
        'No',
        'Yes: except (ValueError, TypeError):',
        'Only two',
        'Error'
      ],
      correctAnswer: 1,
      explanation: 'except (Exception1, Exception2): catches multiple exception types.',
      difficulty: 'medium'
    },
    {
      question: 'How do you create custom exception?',
      options: [
        'Cannot',
        'Class inheriting from Exception',
        'def exception():',
        'exception = type()'
      ],
      correctAnswer: 1,
      explanation: 'class MyError(Exception): pass creates custom exception.',
      difficulty: 'medium'
    },
    {
      question: 'What is the base class for all exceptions?',
      options: ['Error', 'BaseException', 'Exception', 'Throwable'],
      correctAnswer: 1,
      explanation: 'BaseException is base. Exception inherits from it (catch Exception, not BaseException).',
      difficulty: 'hard'
    },
    {
      question: 'What is the difference between Exception and BaseException?',
      options: [
        'No difference',
        'BaseException includes system exits; catch Exception instead',
        'Exception is newer',
        'BaseException is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'BaseException includes SystemExit, KeyboardInterrupt. Usually catch Exception.',
      difficulty: 'hard'
    },
    {
      question: 'What does assert do?',
      options: [
        'Assert truth',
        'Raise AssertionError if condition is False',
        'Declare',
        'Confirm'
      ],
      correctAnswer: 1,
      explanation: 'assert condition, "message" raises AssertionError if condition False.',
      difficulty: 'medium'
    },
    {
      question: 'What is AssertionError?',
      options: [
        'Assertion problem',
        'Raised when assert statement fails',
        'Test error',
        'Validation error'
      ],
      correctAnswer: 1,
      explanation: 'AssertionError: assert 1 == 2 raises error.',
      difficulty: 'medium'
    },
    {
      question: 'Should you use assert for data validation?',
      options: [
        'Yes',
        'No, assertions can be disabled with -O flag',
        'Always',
        'Required'
      ],
      correctAnswer: 1,
      explanation: 'Don\'t use assert for validation - can be disabled. Use if/raise instead.',
      difficulty: 'hard'
    },
    {
      question: 'What is traceback?',
      options: [
        'Backwards trace',
        'Stack trace showing where exception occurred',
        'Error log',
        'History'
      ],
      correctAnswer: 1,
      explanation: 'Traceback shows call stack leading to exception.',
      difficulty: 'medium'
    },
    {
      question: 'How do you get exception message?',
      options: [
        'exception.message',
        'str(exception) or exception.args',
        'exception.text',
        'exception.error'
      ],
      correctAnswer: 1,
      explanation: 'str(e) or e.args[0] gets exception message.',
      difficulty: 'medium'
    },
    {
      question: 'What is exception chaining?',
      options: [
        'Multiple exceptions',
        'raise NewError from original_error - shows cause',
        'Exception list',
        'Error sequence'
      ],
      correctAnswer: 1,
      explanation: 'raise ValueError("msg") from e chains exceptions showing both.',
      difficulty: 'hard'
    },
    {
      question: 'What does except* do (Python 3.11+)?',
      options: [
        'Catch all',
        'Catch exception groups',
        'Multiple catch',
        'Wildcard except'
      ],
      correctAnswer: 1,
      explanation: 'except* handles exception groups introduced in Python 3.11.',
      difficulty: 'hard'
    },
    {
      question: 'Can finally block have return?',
      options: [
        'No',
        'Yes, but overrides try/except return (not recommended)',
        'Error',
        'Only None'
      ],
      correctAnswer: 1,
      explanation: 'finally return overrides try/except return - generally avoided.',
      difficulty: 'hard'
    },
    {
      question: 'What is StopIteration?',
      options: [
        'Stop error',
        'Raised when iterator has no more items',
        'Loop end',
        'Break exception'
      ],
      correctAnswer: 1,
      explanation: 'StopIteration signals iterator exhaustion (handled by for loop).',
      difficulty: 'medium'
    },
    {
      question: 'What is KeyboardInterrupt?',
      options: [
        'Keyboard error',
        'Raised when user presses Ctrl+C',
        'Input error',
        'Break signal'
      ],
      correctAnswer: 1,
      explanation: 'KeyboardInterrupt: User presses Ctrl+C to stop program.',
      difficulty: 'medium'
    },
    {
      question: 'What is SystemExit?',
      options: [
        'System error',
        'Raised by sys.exit() to exit program',
        'Shutdown',
        'Quit exception'
      ],
      correctAnswer: 1,
      explanation: 'SystemExit: sys.exit() raises this to terminate program.',
      difficulty: 'medium'
    },
    {
      question: 'Should you catch KeyboardInterrupt?',
      options: [
        'Yes',
        'Usually no, let user stop program',
        'Always',
        'Never'
      ],
      correctAnswer: 1,
      explanation: 'Generally don\'t catch KeyboardInterrupt - allows user to stop program.',
      difficulty: 'medium'
    },
    {
      question: 'What is MemoryError?',
      options: [
        'Memory problem',
        'Raised when operation runs out of memory',
        'RAM error',
        'Allocation error'
      ],
      correctAnswer: 1,
      explanation: 'MemoryError: Operation cannot allocate required memory.',
      difficulty: 'medium'
    },
    {
      question: 'What is RecursionError?',
      options: [
        'Recursion problem',
        'Raised when maximum recursion depth exceeded',
        'Loop error',
        'Stack error'
      ],
      correctAnswer: 1,
      explanation: 'RecursionError: Recursion too deep (no base case or too many calls).',
      difficulty: 'medium'
    },
    {
      question: 'What is OverflowError?',
      options: [
        'Overflow problem',
        'Raised when arithmetic operation too large to represent',
        'Number error',
        'Size error'
      ],
      correctAnswer: 1,
      explanation: 'OverflowError: Numeric result too large (rare in Python due to arbitrary precision).',
      difficulty: 'medium'
    },
    {
      question: 'What is the context manager protocol?',
      options: [
        'Context rules',
        'Objects supporting __enter__ and __exit__ for with statement',
        'Manager pattern',
        'Context handling'
      ],
      correctAnswer: 1,
      explanation: 'Context managers ensure cleanup: with open("file") as f: - auto closes.',
      difficulty: 'hard'
    },
    {
      question: 'What does with statement guarantee?',
      options: [
        'Success',
        'Cleanup code runs even if exception occurs',
        'No errors',
        'Faster execution'
      ],
      correctAnswer: 1,
      explanation: 'with ensures __exit__ (cleanup) runs, similar to finally block.',
      difficulty: 'medium'
    },
    {
      question: 'Can you nest try-except blocks?',
      options: ['No', 'Yes', 'Only two levels', 'Error'],
      correctAnswer: 1,
      explanation: 'Can nest try-except blocks for granular error handling.',
      difficulty: 'medium'
    },
    {
      question: 'What is the __traceback__ attribute?',
      options: [
        'Traceback object',
        'Exception attribute containing traceback info',
        'Error stack',
        'Debug info'
      ],
      correctAnswer: 1,
      explanation: 'exception.__traceback__ contains traceback object for inspection.',
      difficulty: 'hard'
    },
    {
      question: 'What is warnings module for?',
      options: [
        'Errors',
        'Non-fatal warnings (deprecations, etc.)',
        'Alerts',
        'Messages'
      ],
      correctAnswer: 1,
      explanation: 'warnings module for non-critical issues: warnings.warn("deprecated").',
      difficulty: 'medium'
    },
    {
      question: 'What is logging better than print for errors?',
      options: [
        'Same thing',
        'Provides levels, formatting, filtering, file output',
        'Faster',
        'Required'
      ],
      correctAnswer: 1,
      explanation: 'logging module offers DEBUG, INFO, WARNING, ERROR levels with flexible output.',
      difficulty: 'medium'
    }
  ],

  'file-handling': [
    {
      question: 'How do you open a file for reading?',
      options: ['open("file.txt", "r")', 'read("file.txt")', 'file.open("r")', 'open("r", "file.txt")'],
      correctAnswer: 0,
      explanation: 'open("filename", "mode") opens file. "r" is read mode.',
      difficulty: 'easy'
    },
    {
      question: 'What does "w" mode do?',
      options: [
        'Read only',
        'Truncate file and write (creates if not exists)',
        'Append to file',
        'Write binary'
      ],
      correctAnswer: 1,
      explanation: '"w" mode truncates (empties) file if exists, creates new if not. Overwrites content.',
      difficulty: 'easy'
    },
    {
      question: 'What does "a" mode do?',
      options: [
        'Read all',
        'Append to end without truncating',
        'All modes',
        'Archive file'
      ],
      correctAnswer: 1,
      explanation: '"a" mode appends to end of file without erasing existing content.',
      difficulty: 'easy'
    },
    {
      question: 'What does "r+" mode do?',
      options: [
        'Read only',
        'Read and write (file must exist)',
        'Create and read',
        'Read multiple files'
      ],
      correctAnswer: 1,
      explanation: '"r+" allows both reading and writing. File must already exist.',
      difficulty: 'medium'
    },
    {
      question: 'What does "w+" mode do?',
      options: [
        'Write only',
        'Truncate and allow read/write',
        'Append and read',
        'Write protected'
      ],
      correctAnswer: 1,
      explanation: '"w+" truncates file and allows both reading and writing.',
      difficulty: 'medium'
    },
    {
      question: 'What does "x" mode do?',
      options: [
        'Execute file',
        'Exclusive creation - fails if file exists',
        'Extra permissions',
        'XML mode'
      ],
      correctAnswer: 1,
      explanation: '"x" mode creates new file, raises FileExistsError if file already exists.',
      difficulty: 'medium'
    },
    {
      question: 'What does "b" flag do?',
      options: ['Backup mode', 'Binary mode', 'Buffer mode', 'Big file mode'],
      correctAnswer: 1,
      explanation: '"b" flag opens file in binary mode: "rb", "wb", "ab".',
      difficulty: 'easy'
    },
    {
      question: 'What is the default file mode?',
      options: ['"w"', '"r" (read text)', '"a"', '"r+"'],
      correctAnswer: 1,
      explanation: 'Default mode is "r" (read text) if no mode specified.',
      difficulty: 'easy'
    },
    {
      question: 'What does with statement ensure?',
      options: [
        'Faster reading',
        'File is closed even if exception occurs',
        'File encryption',
        'File compression'
      ],
      correctAnswer: 1,
      explanation: 'with statement (context manager) ensures file.close() is called automatically.',
      difficulty: 'easy'
    },
    {
      question: 'What does .read() return?',
      options: ['List of lines', 'Entire file content as string', 'First line', 'File object'],
      correctAnswer: 1,
      explanation: '.read() returns entire file content as single string.',
      difficulty: 'easy'
    },
    {
      question: 'What does .read(n) do?',
      options: [
        'Read n lines',
        'Read n characters/bytes',
        'Read every n-th character',
        'Read n files'
      ],
      correctAnswer: 1,
      explanation: '.read(n) reads up to n characters (text mode) or bytes (binary mode).',
      difficulty: 'medium'
    },
    {
      question: 'What does .readline() return?',
      options: [
        'All lines',
        'Next single line including newline',
        'Line without newline',
        'First line only'
      ],
      correctAnswer: 1,
      explanation: '.readline() returns next line including \\n character.',
      difficulty: 'easy'
    },
    {
      question: 'What does .readlines() return?',
      options: [
        'String',
        'List of all lines (each with \\n)',
        'Iterator',
        'Tuple of lines'
      ],
      correctAnswer: 1,
      explanation: '.readlines() returns list where each element is a line with \\n.',
      difficulty: 'easy'
    },
    {
      question: 'How do you iterate over file lines efficiently?',
      options: [
        'file.readlines()',
        'for line in file:',
        'file.read().split()',
        'while file.readline():'
      ],
      correctAnswer: 1,
      explanation: 'for line in file: is most memory-efficient (doesn\'t load entire file).',
      difficulty: 'medium'
    },
    {
      question: 'What does .write() return?',
      options: [
        'True if successful',
        'Number of characters/bytes written',
        'File object',
        'None'
      ],
      correctAnswer: 1,
      explanation: '.write() returns the number of characters/bytes written.',
      difficulty: 'medium'
    },
    {
      question: 'What does .writelines() do?',
      options: [
        'Write with auto newlines',
        'Write list of strings (no auto newlines added)',
        'Write numbered lines',
        'Write multiple files'
      ],
      correctAnswer: 1,
      explanation: '.writelines(list) writes each string but doesn\'t add \\n automatically.',
      difficulty: 'medium'
    },
    {
      question: 'What does .close() do?',
      options: [
        'Delete file',
        'Flush buffers and release file handle',
        'Lock file',
        'Compress file'
      ],
      correctAnswer: 1,
      explanation: '.close() flushes pending writes and releases system resources.',
      difficulty: 'easy'
    },
    {
      question: 'What does .flush() do?',
      options: [
        'Delete content',
        'Force write buffered data to disk',
        'Clear file',
        'Close file'
      ],
      correctAnswer: 1,
      explanation: '.flush() writes buffered data to disk immediately without closing file.',
      difficulty: 'medium'
    },
    {
      question: 'What does .seek(offset) do?',
      options: [
        'Search text',
        'Move file pointer to position',
        'Find string',
        'Skip lines'
      ],
      correctAnswer: 1,
      explanation: '.seek(offset) moves file pointer to byte position for reading/writing.',
      difficulty: 'medium'
    },
    {
      question: 'What does .tell() return?',
      options: [
        'File size',
        'Current file pointer position',
        'Number of lines',
        'File name'
      ],
      correctAnswer: 1,
      explanation: '.tell() returns current byte position in file.',
      difficulty: 'medium'
    },
    {
      question: 'What is pathlib.Path?',
      options: [
        'Path string',
        'Object-oriented path handling class',
        'Path validator',
        'Directory only'
      ],
      correctAnswer: 1,
      explanation: 'pathlib.Path provides OOP interface for path operations, cross-platform.',
      difficulty: 'medium'
    },
    {
      question: 'How do you join paths with pathlib?',
      options: [
        'path1 + path2',
        'path1 / path2',
        'path1.join(path2)',
        'os.path.join()'
      ],
      correctAnswer: 1,
      explanation: 'Path objects use / operator: Path("dir") / "file.txt".',
      difficulty: 'medium'
    },
    {
      question: 'How do you check if file exists with pathlib?',
      options: [
        'Path.exists()',
        'path.exists()',
        'path.is_file()',
        'Both B and C'
      ],
      correctAnswer: 3,
      explanation: 'path.exists() checks any path, path.is_file() checks specifically for file.',
      difficulty: 'medium'
    },
    {
      question: 'How do you check if path is directory?',
      options: ['path.is_dir()', 'path.isdir()', 'path.directory()', 'path.type()'],
      correctAnswer: 0,
      explanation: 'path.is_dir() returns True if path points to directory.',
      difficulty: 'easy'
    },
    {
      question: 'How do you read entire file with pathlib?',
      options: [
        'path.read()',
        'path.read_text()',
        'path.get_text()',
        'path.content()'
      ],
      correctAnswer: 1,
      explanation: 'path.read_text() reads entire file as string (text mode).',
      difficulty: 'medium'
    },
    {
      question: 'How do you write text with pathlib?',
      options: [
        'path.write(text)',
        'path.write_text(text)',
        'path.save(text)',
        'path.set_text(text)'
      ],
      correctAnswer: 1,
      explanation: 'path.write_text(string) writes string to file (creates/overwrites).',
      difficulty: 'medium'
    },
    {
      question: 'What does path.parent return?',
      options: [
        'File name',
        'Parent directory as Path',
        'Root directory',
        'Full path'
      ],
      correctAnswer: 1,
      explanation: 'path.parent returns parent directory: Path("/a/b/c.txt").parent = Path("/a/b").',
      difficulty: 'easy'
    },
    {
      question: 'What does path.name return?',
      options: [
        'Path string',
        'Final path component (filename)',
        'Directory name',
        'Extension'
      ],
      correctAnswer: 1,
      explanation: 'path.name returns filename: Path("/a/b/file.txt").name = "file.txt".',
      difficulty: 'easy'
    },
    {
      question: 'What does path.stem return?',
      options: [
        'Full name',
        'Filename without extension',
        'Extension',
        'Directory'
      ],
      correctAnswer: 1,
      explanation: 'path.stem returns name without extension: Path("file.txt").stem = "file".',
      difficulty: 'medium'
    },
    {
      question: 'What does path.suffix return?',
      options: [
        'File type',
        'File extension including dot',
        'File size',
        'Last modified'
      ],
      correctAnswer: 1,
      explanation: 'path.suffix returns extension: Path("file.txt").suffix = ".txt".',
      difficulty: 'easy'
    },
    {
      question: 'How do you list directory contents with pathlib?',
      options: [
        'path.list()',
        'path.iterdir()',
        'path.ls()',
        'path.files()'
      ],
      correctAnswer: 1,
      explanation: 'path.iterdir() yields Path objects for directory contents.',
      difficulty: 'medium'
    },
    {
      question: 'How do you find files matching pattern with pathlib?',
      options: [
        'path.find("*.txt")',
        'path.glob("*.txt")',
        'path.search("*.txt")',
        'path.match("*.txt")'
      ],
      correctAnswer: 1,
      explanation: 'path.glob("pattern") yields matching paths: Path(".").glob("*.txt").',
      difficulty: 'medium'
    },
    {
      question: 'What does path.mkdir() do?',
      options: [
        'Make directory',
        'Create directory (parents=False, exist_ok=False)',
        'Move directory',
        'Mark directory'
      ],
      correctAnswer: 1,
      explanation: 'path.mkdir() creates directory. Use parents=True for intermediate dirs.',
      difficulty: 'medium'
    },
    {
      question: 'What does path.mkdir(parents=True) do?',
      options: [
        'Require parent permission',
        'Create intermediate directories',
        'Only work if parents exist',
        'Copy parent structure'
      ],
      correctAnswer: 1,
      explanation: 'parents=True creates all intermediate directories (like mkdir -p).',
      difficulty: 'medium'
    },
    {
      question: 'What does path.mkdir(exist_ok=True) do?',
      options: [
        'Check if exists',
        'Don\'t raise error if directory exists',
        'Always create',
        'Validate existence'
      ],
      correctAnswer: 1,
      explanation: 'exist_ok=True prevents FileExistsError if directory already exists.',
      difficulty: 'medium'
    },
    {
      question: 'What does path.unlink() do?',
      options: [
        'Break link',
        'Delete file',
        'Rename file',
        'Disconnect file'
      ],
      correctAnswer: 1,
      explanation: 'path.unlink() deletes file (not directory). Use rmdir() for empty dirs.',
      difficulty: 'medium'
    },
    {
      question: 'What does path.rmdir() do?',
      options: [
        'Remove any directory',
        'Remove empty directory only',
        'Remove files',
        'Recursive delete'
      ],
      correctAnswer: 1,
      explanation: 'path.rmdir() removes only empty directory. Use shutil.rmtree() for non-empty.',
      difficulty: 'medium'
    },
    {
      question: 'What does path.rename(new_path) do?',
      options: [
        'Copy file',
        'Rename/move file to new_path',
        'Create alias',
        'Duplicate file'
      ],
      correctAnswer: 1,
      explanation: 'path.rename(target) renames or moves file to target path.',
      difficulty: 'easy'
    },
    {
      question: 'What does FileNotFoundError indicate?',
      options: [
        'File deleted',
        'File doesn\'t exist at specified path',
        'No permission',
        'File corrupted'
      ],
      correctAnswer: 1,
      explanation: 'FileNotFoundError raised when trying to open non-existent file.',
      difficulty: 'easy'
    },
    {
      question: 'What does PermissionError indicate?',
      options: [
        'File locked',
        'Insufficient permissions for operation',
        'File protected',
        'Admin required'
      ],
      correctAnswer: 1,
      explanation: 'PermissionError raised when lacking permissions to read/write/execute.',
      difficulty: 'easy'
    },
    {
      question: 'What does IsADirectoryError indicate?',
      options: [
        'Wrong type',
        'Tried to open directory as file',
        'Directory check',
        'Path validation'
      ],
      correctAnswer: 1,
      explanation: 'IsADirectoryError raised when file operation attempted on directory.',
      difficulty: 'medium'
    },
    {
      question: 'Why specify encoding when opening text files?',
      options: [
        'Faster',
        'Avoid encoding issues across platforms',
        'Required',
        'Better security'
      ],
      correctAnswer: 1,
      explanation: 'Explicit encoding (usually utf-8) ensures consistent behavior across platforms.',
      difficulty: 'medium'
    },
    {
      question: 'What is the default encoding on Windows?',
      options: ['utf-8', 'Platform-dependent (often cp1252)', 'ascii', 'latin-1'],
      correctAnswer: 1,
      explanation: 'Windows default is often cp1252, not utf-8. Always specify encoding.',
      difficulty: 'hard'
    },
    {
      question: 'How do you read CSV files?',
      options: [
        'open() and parse',
        'Use csv module: csv.reader()',
        'readcsv()',
        'import_csv()'
      ],
      correctAnswer: 1,
      explanation: 'csv module provides csv.reader() and csv.DictReader() for CSV parsing.',
      difficulty: 'medium'
    },
    {
      question: 'How do you read JSON files?',
      options: [
        'open() and parse',
        'json.load(file) or json.loads(string)',
        'readjson()',
        'import_json()'
      ],
      correctAnswer: 1,
      explanation: 'json.load() reads from file object, json.loads() parses JSON string.',
      difficulty: 'medium'
    },
    {
      question: 'How do you write JSON files?',
      options: [
        'write(str(dict))',
        'json.dump(data, file) or json.dumps(data)',
        'writejson()',
        'export_json()'
      ],
      correctAnswer: 1,
      explanation: 'json.dump() writes to file, json.dumps() converts to JSON string.',
      difficulty: 'medium'
    },
    {
      question: 'What does json.dump(indent=2) do?',
      options: [
        'Compress JSON',
        'Pretty-print with 2-space indentation',
        'Validate JSON',
        'Sort keys'
      ],
      correctAnswer: 1,
      explanation: 'indent parameter formats JSON with specified indentation for readability.',
      difficulty: 'medium'
    },
    {
      question: 'What is the difference between binary and text mode?',
      options: [
        'Speed',
        'Binary works with bytes, text with strings',
        'Security',
        'Compression'
      ],
      correctAnswer: 1,
      explanation: 'Binary mode (rb/wb) uses bytes, text mode (r/w) uses strings with encoding.',
      difficulty: 'medium'
    },
    {
      question: 'When should you use binary mode?',
      options: [
        'Always',
        'For non-text files (images, audio, executables)',
        'For text files',
        'Never'
      ],
      correctAnswer: 1,
      explanation: 'Binary mode for non-text data: images, PDFs, audio, video, executables.',
      difficulty: 'easy'
    },
    {
      question: 'What does shutil.copy() do?',
      options: [
        'Copy text',
        'Copy file to destination',
        'Copy directory',
        'Duplicate string'
      ],
      correctAnswer: 1,
      explanation: 'shutil.copy(src, dst) copies file content and permissions.',
      difficulty: 'medium'
    }
  ],

  'modules-packages': [
    {
      question: 'What is a module?',
      options: [
        'Module function',
        'Python file containing code (.py)',
        'Package',
        'Library'
      ],
      correctAnswer: 1,
      explanation: 'Module is a single Python file with .py extension containing Python code.',
      difficulty: 'easy'
    },
    {
      question: 'What is a package?',
      options: [
        'Module collection',
        'Directory containing __init__.py and modules',
        'Compressed file',
        'Library'
      ],
      correctAnswer: 1,
      explanation: 'Package is directory with __init__.py file and one or more modules.',
      difficulty: 'easy'
    },
    {
      question: 'What is the purpose of __init__.py?',
      options: [
        'Initialize variables',
        'Mark directory as package and run package initialization',
        'Main file',
        'Configuration'
      ],
      correctAnswer: 1,
      explanation: '__init__.py marks directory as package and executes when package imported.',
      difficulty: 'easy'
    },
    {
      question: 'Is __init__.py required in Python 3.3+?',
      options: [
        'Yes, always',
        'No, but recommended for regular packages',
        'Only for sub-packages',
        'Deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Python 3.3+ has implicit namespace packages, but __init__.py still recommended.',
      difficulty: 'medium'
    },
    {
      question: 'How do you import a module?',
      options: [
        'include module',
        'import module',
        'require module',
        'use module'
      ],
      correctAnswer: 1,
      explanation: 'import module_name imports the module.',
      difficulty: 'easy'
    },
    {
      question: 'How do you import specific item from module?',
      options: [
        'import module.item',
        'from module import item',
        'import item from module',
        'module.import(item)'
      ],
      correctAnswer: 1,
      explanation: 'from module import item imports specific function/class/variable.',
      difficulty: 'easy'
    },
    {
      question: 'How do you import module with alias?',
      options: [
        'import module = alias',
        'import module as alias',
        'import alias from module',
        'import module rename alias'
      ],
      correctAnswer: 1,
      explanation: 'import module as alias gives module a shorter name: import numpy as np.',
      difficulty: 'easy'
    },
    {
      question: 'How do you import all from module?',
      options: [
        'import module.*',
        'from module import *',
        'import all from module',
        'import module all'
      ],
      correctAnswer: 1,
      explanation: 'from module import * imports all public names (not recommended).',
      difficulty: 'easy'
    },
    {
      question: 'Why is "from module import *" discouraged?',
      options: [
        'Slower',
        'Pollutes namespace, unclear where names come from',
        'Doesn\'t work',
        'Deprecated'
      ],
      correctAnswer: 1,
      explanation: 'import * makes code unclear and can cause name conflicts.',
      difficulty: 'medium'
    },
    {
      question: 'What does __name__ contain?',
      options: [
        'File name',
        'Module name or "__main__" if run as script',
        'Function name',
        'Variable name'
      ],
      correctAnswer: 1,
      explanation: '__name__ is "__main__" when script runs directly, else module name.',
      difficulty: 'easy'
    },
    {
      question: 'When is __name__ == "__main__"?',
      options: [
        'Always',
        'When file is executed directly as script',
        'When imported',
        'Never'
      ],
      correctAnswer: 1,
      explanation: '__name__ is "__main__" only when file is main program, not when imported.',
      difficulty: 'easy'
    },
    {
      question: 'What is the purpose of "if __name__ == \'__main__\':"?',
      options: [
        'Required syntax',
        'Code runs only when script executed directly, not when imported',
        'Main function',
        'Error handling'
      ],
      correctAnswer: 1,
      explanation: 'Allows code to run as script but not execute when module is imported.',
      difficulty: 'medium'
    },
    {
      question: 'What is sys.path?',
      options: [
        'System path',
        'List of directories Python searches for modules',
        'File path',
        'Program path'
      ],
      correctAnswer: 1,
      explanation: 'sys.path is list of directory paths Python searches when importing.',
      difficulty: 'medium'
    },
    {
      question: 'What is the first item in sys.path?',
      options: [
        'Python installation',
        'Directory of script being run',
        'Current directory',
        'Home directory'
      ],
      correctAnswer: 1,
      explanation: 'sys.path[0] is directory containing the script being executed.',
      difficulty: 'medium'
    },
    {
      question: 'How do you add to sys.path?',
      options: [
        'sys.path.add()',
        'sys.path.append(path)',
        'sys.path.insert(path)',
        'sys.addpath()'
      ],
      correctAnswer: 1,
      explanation: 'sys.path.append(directory) adds directory to module search path.',
      difficulty: 'medium'
    },
    {
      question: 'What is __file__ attribute?',
      options: [
        'File object',
        'Path to module file',
        'File name',
        'File content'
      ],
      correctAnswer: 1,
      explanation: '__file__ contains path to the module file.',
      difficulty: 'medium'
    },
    {
      question: 'What does import do internally?',
      options: [
        'Copy file',
        'Execute module code and create namespace',
        'Link file',
        'Include text'
      ],
      correctAnswer: 1,
      explanation: 'import executes module code (once) and creates namespace object.',
      difficulty: 'medium'
    },
    {
      question: 'Are modules executed every time they\'re imported?',
      options: [
        'Yes',
        'No, only first import (cached in sys.modules)',
        'Sometimes',
        'Depends on mode'
      ],
      correctAnswer: 1,
      explanation: 'Module executed once; subsequent imports use cached version from sys.modules.',
      difficulty: 'medium'
    },
    {
      question: 'What is sys.modules?',
      options: [
        'Module list',
        'Dictionary of already imported modules',
        'Module path',
        'Module cache file'
      ],
      correctAnswer: 1,
      explanation: 'sys.modules is dict mapping module names to module objects (cache).',
      difficulty: 'hard'
    },
    {
      question: 'How do you reload a module?',
      options: [
        'import again',
        'importlib.reload(module)',
        'reload(module)',
        'import -f module'
      ],
      correctAnswer: 1,
      explanation: 'importlib.reload(module) re-executes module code (rarely needed).',
      difficulty: 'hard'
    },
    {
      question: 'What is relative import?',
      options: [
        'Import from parent',
        'Import using dots (.) relative to current package',
        'Import sibling',
        'Conditional import'
      ],
      correctAnswer: 1,
      explanation: 'Relative import uses dots: from . import module (same package), from .. import (parent).',
      difficulty: 'medium'
    },
    {
      question: 'What does "from . import module" mean?',
      options: [
        'Current directory',
        'Import module from same package',
        'Import all',
        'Root import'
      ],
      correctAnswer: 1,
      explanation: 'Single dot (.) refers to current package level.',
      difficulty: 'medium'
    },
    {
      question: 'What does "from .. import module" mean?',
      options: [
        'Two levels',
        'Import from parent package',
        'Import range',
        'Multiple imports'
      ],
      correctAnswer: 1,
      explanation: 'Two dots (..) refers to parent package (one level up).',
      difficulty: 'medium'
    },
    {
      question: 'Can you use relative imports in main script?',
      options: [
        'Yes',
        'No, only in packages',
        'Sometimes',
        'With flag'
      ],
      correctAnswer: 1,
      explanation: 'Relative imports only work inside packages, not in main scripts.',
      difficulty: 'hard'
    },
    {
      question: 'What is absolute import?',
      options: [
        'Complete import',
        'Import using full module path from root',
        'Forced import',
        'Direct import'
      ],
      correctAnswer: 1,
      explanation: 'Absolute import uses full path: from package.subpackage import module.',
      difficulty: 'medium'
    },
    {
      question: 'What is __all__ in module?',
      options: [
        'All variables',
        'List of public names exported by "import *"',
        'All functions',
        'Everything'
      ],
      correctAnswer: 1,
      explanation: '__all__ = ["name1", "name2"] defines what "from module import *" imports.',
      difficulty: 'hard'
    },
    {
      question: 'What happens if module has no __all__?',
      options: [
        'Error',
        'import * imports all public names (not starting with _)',
        'Imports nothing',
        'Imports everything'
      ],
      correctAnswer: 1,
      explanation: 'Without __all__, import * imports all names not starting with underscore.',
      difficulty: 'medium'
    },
    {
      question: 'What is a namespace package?',
      options: [
        'Named package',
        'Package spread across multiple directories (no __init__.py)',
        'Package namespace',
        'Virtual package'
      ],
      correctAnswer: 1,
      explanation: 'Namespace packages (PEP 420) allow same package name in multiple locations.',
      difficulty: 'hard'
    },
    {
      question: 'What is the difference between module and package?',
      options: [
        'Same thing',
        'Module is file, package is directory with modules',
        'Module is smaller',
        'Package is compressed'
      ],
      correctAnswer: 1,
      explanation: 'Module = single .py file. Package = directory containing modules + __init__.py.',
      difficulty: 'easy'
    },
    {
      question: 'What is importlib?',
      options: [
        'Import library',
        'Module providing import system implementation',
        'Import tool',
        'Library importer'
      ],
      correctAnswer: 1,
      explanation: 'importlib provides programmatic interface to import system.',
      difficulty: 'medium'
    },
    {
      question: 'How do you import module by string name?',
      options: [
        'import "module"',
        'importlib.import_module("module")',
        'eval("import module")',
        '__import__("module")'
      ],
      correctAnswer: 1,
      explanation: 'importlib.import_module(name_string) imports module by string name.',
      difficulty: 'hard'
    },
    {
      question: 'What is __pycache__ directory?',
      options: [
        'Cache folder',
        'Contains bytecode .pyc files for faster loading',
        'Temporary files',
        'Package cache'
      ],
      correctAnswer: 1,
      explanation: '__pycache__ stores compiled bytecode (.pyc) to speed up subsequent imports.',
      difficulty: 'medium'
    },
    {
      question: 'What are .pyc files?',
      options: [
        'Python C files',
        'Compiled Python bytecode',
        'Python cache',
        'Python config'
      ],
      correctAnswer: 1,
      explanation: '.pyc files contain compiled bytecode, created automatically to speed imports.',
      difficulty: 'medium'
    },
    {
      question: 'Should you commit __pycache__ to version control?',
      options: [
        'Yes',
        'No, add to .gitignore',
        'Sometimes',
        'Required'
      ],
      correctAnswer: 1,
      explanation: '__pycache__ is generated automatically, should be in .gitignore.',
      difficulty: 'medium'
    },
    {
      question: 'What is the difference between import and from...import?',
      options: [
        'Same thing',
        'import loads module namespace, from imports specific names',
        'from is faster',
        'import is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'import module: use module.name. from module import name: use name directly.',
      difficulty: 'medium'
    },
    {
      question: 'What is circular import?',
      options: [
        'Round import',
        'Two modules importing each other',
        'Loop import',
        'Recursive import'
      ],
      correctAnswer: 1,
      explanation: 'Circular import: A imports B and B imports A. Can cause errors.',
      difficulty: 'medium'
    },
    {
      question: 'How to avoid circular imports?',
      options: [
        'Can\'t avoid',
        'Restructure code, use import inside functions, or late imports',
        'Use reload',
        'Import once'
      ],
      correctAnswer: 1,
      explanation: 'Solutions: restructure, import at function level, use TYPE_CHECKING.',
      difficulty: 'hard'
    },
    {
      question: 'What is the standard library?',
      options: [
        'Required library',
        'Collection of modules included with Python',
        'Default library',
        'Core library'
      ],
      correctAnswer: 1,
      explanation: 'Standard library: modules included with Python (os, sys, math, etc.).',
      difficulty: 'easy'
    },
    {
      question: 'Do you need to install standard library modules?',
      options: [
        'Yes',
        'No, included with Python',
        'Some of them',
        'Depends on version'
      ],
      correctAnswer: 1,
      explanation: 'Standard library modules come with Python installation.',
      difficulty: 'easy'
    },
    {
      question: 'What is a third-party package?',
      options: [
        'Third package',
        'Package not in standard library (installed via pip)',
        'External package',
        'Vendor package'
      ],
      correctAnswer: 1,
      explanation: 'Third-party packages installed separately using pip from PyPI.',
      difficulty: 'easy'
    },
    {
      question: 'How do you install third-party packages?',
      options: [
        'import install package',
        'pip install package',
        'python -m install package',
        'get package'
      ],
      correctAnswer: 1,
      explanation: 'pip install package_name installs from Python Package Index (PyPI).',
      difficulty: 'easy'
    },
    {
      question: 'What is PyPI?',
      options: [
        'Python PI',
        'Python Package Index - repository of Python packages',
        'Python installer',
        'Python API'
      ],
      correctAnswer: 1,
      explanation: 'PyPI (pypi.org) is official repository hosting thousands of Python packages.',
      difficulty: 'easy'
    },
    {
      question: 'What is requirements.txt?',
      options: [
        'Requirements doc',
        'File listing project dependencies',
        'Config file',
        'Readme file'
      ],
      correctAnswer: 1,
      explanation: 'requirements.txt lists packages needed: pip install -r requirements.txt.',
      difficulty: 'medium'
    },
    {
      question: 'How do you generate requirements.txt?',
      options: [
        'Write manually',
        'pip freeze > requirements.txt',
        'pip list > requirements.txt',
        'Auto-generated'
      ],
      correctAnswer: 1,
      explanation: 'pip freeze outputs installed packages with versions.',
      difficulty: 'medium'
    },
    {
      question: 'What is a virtual environment?',
      options: [
        'Virtual machine',
        'Isolated Python environment with own packages',
        'Cloud environment',
        'Test environment'
      ],
      correctAnswer: 1,
      explanation: 'Virtual environment isolates project dependencies from system Python.',
      difficulty: 'medium'
    },
    {
      question: 'Why use virtual environments?',
      options: [
        'Required',
        'Avoid dependency conflicts between projects',
        'Faster execution',
        'Better security'
      ],
      correctAnswer: 1,
      explanation: 'Virtual environments prevent version conflicts between different projects.',
      difficulty: 'medium'
    },
    {
      question: 'How do you create virtual environment?',
      options: [
        'virtualenv create',
        'python -m venv env_name',
        'pip create env',
        'venv new'
      ],
      correctAnswer: 1,
      explanation: 'python -m venv myenv creates virtual environment directory.',
      difficulty: 'medium'
    },
    {
      question: 'What does dir(module) return?',
      options: [
        'Module directory',
        'List of names defined in module',
        'Module path',
        'Documentation'
      ],
      correctAnswer: 1,
      explanation: 'dir(module) returns sorted list of module\'s attributes and methods.',
      difficulty: 'medium'
    },
    {
      question: 'What does help(module) do?',
      options: [
        'Help text',
        'Display module documentation',
        'Debug module',
        'Test module'
      ],
      correctAnswer: 1,
      explanation: 'help(module) shows interactive help including docstrings.',
      difficulty: 'easy'
    }
  ],

  'oop-basics': [
    {
      question: 'What is a class?',
      options: [
        'Class type',
        'Blueprint for creating objects',
        'Function group',
        'Code block'
      ],
      correctAnswer: 1,
      explanation: 'Class is a template defining structure and behavior for objects.',
      difficulty: 'easy'
    },
    {
      question: 'What is an object?',
      options: [
        'Variable',
        'Instance of a class',
        'Function',
        'Module'
      ],
      correctAnswer: 1,
      explanation: 'Object is a specific instance created from a class with its own data.',
      difficulty: 'easy'
    },
    {
      question: 'How do you define a class?',
      options: [
        'class MyClass:',
        'Both A is correct',
        'def class MyClass:',
        'create class MyClass:'
      ],
      correctAnswer: 0,
      explanation: 'class ClassName: defines a class using class keyword.',
      difficulty: 'easy'
    },
    {
      question: 'What is __init__ method?',
      options: [
        'Initializer',
        'Constructor that initializes new objects',
        'Destructor',
        'Main method'
      ],
      correctAnswer: 1,
      explanation: '__init__(self, ...) is constructor called when creating object instance.',
      difficulty: 'easy'
    },
    {
      question: 'What does "self" represent?',
      options: [
        'Class itself',
        'Current instance of the class',
        'Global variable',
        'Parent class'
      ],
      correctAnswer: 1,
      explanation: 'self refers to instance being operated on (like "this" in other languages).',
      difficulty: 'easy'
    },
    {
      question: 'Is "self" a keyword?',
      options: [
        'Yes',
        'No, it\'s a naming convention',
        'Sometimes',
        'Deprecated'
      ],
      correctAnswer: 1,
      explanation: 'self is convention, not keyword. Could use any name, but self is standard.',
      difficulty: 'medium'
    },
    {
      question: 'How do you create an object instance?',
      options: [
        'new MyClass()',
        'obj = MyClass()',
        'create MyClass()',
        'instance MyClass()'
      ],
      correctAnswer: 1,
      explanation: 'Call class like function: obj = ClassName(args).',
      difficulty: 'easy'
    },
    {
      question: 'What is an instance variable?',
      options: [
        'Class variable',
        'Variable unique to each object (self.variable)',
        'Global variable',
        'Function variable'
      ],
      correctAnswer: 1,
      explanation: 'Instance variables defined in __init__ with self: self.name = value.',
      difficulty: 'easy'
    },
    {
      question: 'What is a class variable?',
      options: [
        'Instance variable',
        'Variable shared by all instances of class',
        'Global variable',
        'Function variable'
      ],
      correctAnswer: 1,
      explanation: 'Class variables defined in class body, shared across all instances.',
      difficulty: 'medium'
    },
    {
      question: 'What is the difference between class and instance variables?',
      options: [
        'Same thing',
        'Class variables shared, instance variables unique per object',
        'Class variables are private',
        'No difference'
      ],
      correctAnswer: 1,
      explanation: 'Class variables: one copy for all instances. Instance: unique per object.',
      difficulty: 'medium'
    },
    {
      question: 'What is a method?',
      options: [
        'Variable',
        'Function defined inside a class',
        'Object',
        'Attribute'
      ],
      correctAnswer: 1,
      explanation: 'Method is a function defined in class that operates on instances.',
      difficulty: 'easy'
    },
    {
      question: 'What is an instance method?',
      options: [
        'Static method',
        'Method that takes self as first parameter',
        'Class method',
        'Private method'
      ],
      correctAnswer: 1,
      explanation: 'Instance methods take self as first parameter, operate on specific instance.',
      difficulty: 'easy'
    },
    {
      question: 'What is @classmethod decorator?',
      options: [
        'Instance method',
        'Method that takes cls as first parameter, works with class',
        'Static method',
        'Private method'
      ],
      correctAnswer: 1,
      explanation: '@classmethod methods receive class as first argument (cls), not instance.',
      difficulty: 'medium'
    },
    {
      question: 'What is @staticmethod decorator?',
      options: [
        'Instance method',
        'Method that doesn\'t take self or cls (utility function)',
        'Class method',
        'Private method'
      ],
      correctAnswer: 1,
      explanation: '@staticmethod doesn\'t receive self or cls, just regular function in class.',
      difficulty: 'medium'
    },
    {
      question: 'What is encapsulation?',
      options: [
        'Capsule creation',
        'Bundling data and methods together in a class',
        'Inheritance',
        'Polymorphism'
      ],
      correctAnswer: 1,
      explanation: 'Encapsulation: bundling data (attributes) and methods in one unit (class).',
      difficulty: 'easy'
    },
    {
      question: 'How do you indicate private attributes in Python?',
      options: [
        'private keyword',
        'Prefix with underscore: _private or __private',
        'Use @private',
        'Cannot make private'
      ],
      correctAnswer: 1,
      explanation: '_name: convention for internal use. __name: name mangling for strong privacy.',
      difficulty: 'medium'
    },
    {
      question: 'What does single underscore prefix mean?',
      options: [
        'Private',
        'Convention indicating internal use (not enforced)',
        'Protected',
        'Hidden'
      ],
      correctAnswer: 1,
      explanation: '_name is convention suggesting internal use, but still accessible.',
      difficulty: 'medium'
    },
    {
      question: 'What does double underscore prefix do?',
      options: [
        'Makes truly private',
        'Name mangling to avoid conflicts in subclasses',
        'Special method',
        'Super private'
      ],
      correctAnswer: 1,
      explanation: '__name triggers name mangling: becomes _ClassName__name (not truly private).',
      difficulty: 'hard'
    },
    {
      question: 'What is inheritance?',
      options: [
        'Copying class',
        'Creating class based on existing class',
        'Importing class',
        'Cloning class'
      ],
      correctAnswer: 1,
      explanation: 'Inheritance: child class inherits attributes/methods from parent class.',
      difficulty: 'easy'
    },
    {
      question: 'How do you inherit from a class?',
      options: [
        'class Child extends Parent:',
        'class Child(Parent):',
        'class Child -> Parent:',
        'class Child from Parent:'
      ],
      correctAnswer: 1,
      explanation: 'class ChildClass(ParentClass): creates child class inheriting from parent.',
      difficulty: 'easy'
    },
    {
      question: 'What is the parent class also called?',
      options: [
        'Main class',
        'Base class or superclass',
        'Root class',
        'Master class'
      ],
      correctAnswer: 1,
      explanation: 'Parent class = base class = superclass. Child = derived = subclass.',
      difficulty: 'easy'
    },
    {
      question: 'What is the child class also called?',
      options: [
        'Sub class',
        'Derived class or subclass',
        'Lower class',
        'Dependent class'
      ],
      correctAnswer: 1,
      explanation: 'Child class = derived class = subclass.',
      difficulty: 'easy'
    },
    {
      question: 'Does child class inherit parent\'s methods?',
      options: ['No', 'Yes, unless private', 'Only public', 'Sometimes'],
      correctAnswer: 1,
      explanation: 'Child inherits all parent methods and attributes (including "private").',
      difficulty: 'easy'
    },
    {
      question: 'What is method overriding?',
      options: [
        'Deleting method',
        'Child class redefining parent class method',
        'Calling method twice',
        'Method error'
      ],
      correctAnswer: 1,
      explanation: 'Overriding: child provides its own implementation of parent\'s method.',
      difficulty: 'easy'
    },
    {
      question: 'How do you call parent class method from child?',
      options: [
        'parent.method()',
        'super().method()',
        'base.method()',
        'ParentClass.method()'
      ],
      correctAnswer: 1,
      explanation: 'super() returns proxy object allowing access to parent class methods.',
      difficulty: 'medium'
    },
    {
      question: 'What does super().__init__() do?',
      options: [
        'Initialize super',
        'Call parent class constructor',
        'Create super object',
        'Reset class'
      ],
      correctAnswer: 1,
      explanation: 'super().__init__() calls parent constructor from child\'s __init__.',
      difficulty: 'medium'
    },
    {
      question: 'What is multiple inheritance?',
      options: [
        'Many objects',
        'Class inheriting from multiple parent classes',
        'Multiple children',
        'Many methods'
      ],
      correctAnswer: 1,
      explanation: 'Multiple inheritance: class Child(Parent1, Parent2, Parent3):',
      difficulty: 'medium'
    },
    {
      question: 'What is the MRO?',
      options: [
        'Method Resolution Object',
        'Method Resolution Order - order Python searches for methods',
        'Multiple Resolution Order',
        'Method Return Order'
      ],
      correctAnswer: 1,
      explanation: 'MRO determines which parent method is called in multiple inheritance.',
      difficulty: 'hard'
    },
    {
      question: 'How do you view MRO?',
      options: [
        'mro()',
        'ClassName.__mro__ or ClassName.mro()',
        'get_mro()',
        'show_mro()'
      ],
      correctAnswer: 1,
      explanation: 'ClassName.__mro__ or ClassName.mro() shows method resolution order.',
      difficulty: 'hard'
    },
    {
      question: 'What is polymorphism?',
      options: [
        'Many forms',
        'Objects of different classes responding to same method differently',
        'Multiple classes',
        'Many methods'
      ],
      correctAnswer: 1,
      explanation: 'Polymorphism: different objects can have methods with same name behaving differently.',
      difficulty: 'medium'
    },
    {
      question: 'What is duck typing?',
      options: [
        'Duck class',
        'If it walks like a duck and quacks like a duck, it\'s a duck',
        'Animal typing',
        'Type checking'
      ],
      correctAnswer: 1,
      explanation: 'Duck typing: object\'s type determined by behavior, not explicit class.',
      difficulty: 'hard'
    },
    {
      question: 'What is the difference between composition and inheritance?',
      options: [
        'Same thing',
        'Composition uses objects as attributes, inheritance extends class',
        'Composition is faster',
        'Inheritance is newer'
      ],
      correctAnswer: 1,
      explanation: 'Composition: has-a relationship. Inheritance: is-a relationship.',
      difficulty: 'medium'
    },
    {
      question: 'What is a property decorator?',
      options: [
        'Class decorator',
        'Makes method accessible like attribute: @property',
        'Private property',
        'Static property'
      ],
      correctAnswer: 1,
      explanation: '@property allows method to be accessed like attribute (getter).',
      difficulty: 'medium'
    },
    {
      question: 'What is @property.setter?',
      options: [
        'Set property',
        'Defines method to set property value',
        'Property configuration',
        'Assign property'
      ],
      correctAnswer: 1,
      explanation: '@property_name.setter decorator defines setter method for property.',
      difficulty: 'medium'
    },
    {
      question: 'What is __str__ method?',
      options: [
        'String method',
        'Returns string representation for print() and str()',
        'Convert to string',
        'String conversion'
      ],
      correctAnswer: 1,
      explanation: '__str__ provides human-readable string representation of object.',
      difficulty: 'medium'
    },
    {
      question: 'What is __repr__ method?',
      options: [
        'Representation',
        'Returns unambiguous string representation for debugging',
        'Repeat method',
        'Report method'
      ],
      correctAnswer: 1,
      explanation: '__repr__ provides developer-friendly representation, should be unambiguous.',
      difficulty: 'medium'
    },
    {
      question: 'What is the difference between __str__ and __repr__?',
      options: [
        'Same thing',
        '__str__ for users, __repr__ for developers/debugging',
        '__str__ is faster',
        '__repr__ is deprecated'
      ],
      correctAnswer: 1,
      explanation: '__str__: readable for users. __repr__: unambiguous for developers.',
      difficulty: 'medium'
    },
    {
      question: 'What is __len__ method?',
      options: [
        'Get length',
        'Defines behavior for len() function',
        'Length check',
        'Size method'
      ],
      correctAnswer: 1,
      explanation: '__len__ allows len(obj) to work on custom objects.',
      difficulty: 'medium'
    },
    {
      question: 'What is __getitem__ method?',
      options: [
        'Get item',
        'Enables indexing: obj[key]',
        'Item getter',
        'Get attribute'
      ],
      correctAnswer: 1,
      explanation: '__getitem__ allows obj[index] syntax for custom objects.',
      difficulty: 'medium'
    },
    {
      question: 'What is __setitem__ method?',
      options: [
        'Set item',
        'Enables item assignment: obj[key] = value',
        'Item setter',
        'Set attribute'
      ],
      correctAnswer: 1,
      explanation: '__setitem__ allows obj[index] = value syntax.',
      difficulty: 'medium'
    },
    {
      question: 'What is __call__ method?',
      options: [
        'Call method',
        'Makes object callable like a function',
        'Phone call',
        'Function call'
      ],
      correctAnswer: 1,
      explanation: '__call__ allows using object as function: obj().',
      difficulty: 'hard'
    },
    {
      question: 'What is __eq__ method?',
      options: [
        'Equal method',
        'Defines behavior for == operator',
        'Equation method',
        'Equality check'
      ],
      correctAnswer: 1,
      explanation: '__eq__(self, other) defines what obj1 == obj2 means.',
      difficulty: 'medium'
    },
    {
      question: 'What is __lt__ method?',
      options: [
        'Less than',
        'Defines behavior for < operator',
        'Left method',
        'Light method'
      ],
      correctAnswer: 1,
      explanation: '__lt__(self, other) defines obj1 < obj2 comparison.',
      difficulty: 'medium'
    },
    {
      question: 'What is __add__ method?',
      options: [
        'Addition',
        'Defines behavior for + operator',
        'Add method',
        'Append method'
      ],
      correctAnswer: 1,
      explanation: '__add__(self, other) defines obj1 + obj2 behavior.',
      difficulty: 'medium'
    },
    {
      question: 'What are magic methods?',
      options: [
        'Special tricks',
        'Methods with double underscores defining operator behavior',
        'Hidden methods',
        'Advanced methods'
      ],
      correctAnswer: 1,
      explanation: 'Magic/dunder methods: __init__, __str__, __add__ etc. Define special behavior.',
      difficulty: 'medium'
    },
    {
      question: 'What is an abstract class?',
      options: [
        'Unclear class',
        'Class with abstract methods that must be implemented by children',
        'Base class',
        'Virtual class'
      ],
      correctAnswer: 1,
      explanation: 'Abstract class (ABC) cannot be instantiated, defines interface for children.',
      difficulty: 'hard'
    },
    {
      question: 'How do you create abstract class?',
      options: [
        'abstract class',
        'Inherit from ABC and use @abstractmethod',
        'Use @abstract',
        'class Abstract:'
      ],
      correctAnswer: 1,
      explanation: 'from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod...',
      difficulty: 'hard'
    },
    {
      question: 'What is isinstance()?',
      options: [
        'Create instance',
        'Check if object is instance of class',
        'Instance check',
        'Type check'
      ],
      correctAnswer: 1,
      explanation: 'isinstance(obj, ClassName) returns True if obj is instance of ClassName.',
      difficulty: 'easy'
    },
    {
      question: 'What is issubclass()?',
      options: [
        'Create subclass',
        'Check if class is subclass of another',
        'Subclass check',
        'Child check'
      ],
      correctAnswer: 1,
      explanation: 'issubclass(Child, Parent) returns True if Child inherits from Parent.',
      difficulty: 'easy'
    }
  ],

  'design-patterns': [
    {
      question: 'What are design patterns?',
      options: [
        'Code templates',
        'Reusable solutions to common software design problems',
        'Design tools',
        'Code styles'
      ],
      correctAnswer: 1,
      explanation: 'Design patterns: proven solutions to recurring problems in software design.',
      difficulty: 'easy'
    },
    {
      question: 'What are the three main categories of design patterns?',
      options: [
        'Simple, Medium, Complex',
        'Creational, Structural, Behavioral',
        'Basic, Advanced, Expert',
        'Input, Process, Output'
      ],
      correctAnswer: 1,
      explanation: 'Three categories: Creational (object creation), Structural (composition), Behavioral (communication).',
      difficulty: 'medium'
    },
    {
      question: 'What is the Singleton pattern?',
      options: [
        'Single instance',
        'Ensures class has only one instance with global access point',
        'One method',
        'Single file'
      ],
      correctAnswer: 1,
      explanation: 'Singleton: restricts class to single instance (database connection, logger).',
      difficulty: 'easy'
    },
    {
      question: 'When should you use Singleton?',
      options: [
        'Always',
        'When exactly one instance needed (config manager, connection pool)',
        'For all classes',
        'Never'
      ],
      correctAnswer: 1,
      explanation: 'Use Singleton when single instance must coordinate actions across system.',
      difficulty: 'medium'
    },
    {
      question: 'What is the Factory pattern?',
      options: [
        'Object factory',
        'Creates objects without specifying exact class',
        'Manufacturing pattern',
        'Build pattern'
      ],
      correctAnswer: 1,
      explanation: 'Factory: interface for creating objects, letting subclasses decide which class.',
      difficulty: 'medium'
    },
    {
      question: 'When should you use Factory pattern?',
      options: [
        'Always create objects',
        'When creation logic is complex or class determined at runtime',
        'For simple objects',
        'Never'
      ],
      correctAnswer: 1,
      explanation: 'Use Factory when object creation involves complex logic or runtime decisions.',
      difficulty: 'medium'
    },
    {
      question: 'What is the Observer pattern?',
      options: [
        'Watch pattern',
        'Defines one-to-many dependency where observers notified of state changes',
        'Monitor pattern',
        'Spy pattern'
      ],
      correctAnswer: 1,
      explanation: 'Observer: objects (observers) notified when subject\'s state changes.',
      difficulty: 'medium'
    },
    {
      question: 'When should you use Observer pattern?',
      options: [
        'Watching files',
        'When changes to one object should notify multiple dependent objects',
        'For monitoring',
        'Always'
      ],
      correctAnswer: 1,
      explanation: 'Use Observer for event handling, publish-subscribe systems (GUI, real-time updates).',
      difficulty: 'medium'
    },
    {
      question: 'What is the Strategy pattern?',
      options: [
        'Planning pattern',
        'Defines family of algorithms, encapsulates each, makes them interchangeable',
        'Game pattern',
        'Decision pattern'
      ],
      correctAnswer: 1,
      explanation: 'Strategy: encapsulate algorithms in separate classes, make them interchangeable.',
      difficulty: 'medium'
    },
    {
      question: 'When should you use Strategy pattern?',
      options: [
        'For plans',
        'When you need different variants of an algorithm',
        'Always',
        'For games'
      ],
      correctAnswer: 1,
      explanation: 'Use Strategy when multiple algorithms for task, selected at runtime.',
      difficulty: 'medium'
    },
    {
      question: 'What is the Decorator pattern?',
      options: [
        'Pretty pattern',
        'Adds responsibilities to objects dynamically without subclassing',
        'Design pattern',
        'Ornament pattern'
      ],
      correctAnswer: 1,
      explanation: 'Decorator: wraps object to add behavior without modifying original class.',
      difficulty: 'medium'
    },
    {
      question: 'When should you use Decorator pattern?',
      options: [
        'For decoration',
        'When you need to add responsibilities to individual objects dynamically',
        'Always',
        'For UI'
      ],
      correctAnswer: 1,
      explanation: 'Use Decorator to extend functionality without subclassing (middleware, logging).',
      difficulty: 'medium'
    },
    {
      question: 'What is the Adapter pattern?',
      options: [
        'Plug adapter',
        'Converts interface of class to another interface clients expect',
        'Connection pattern',
        'Bridge pattern'
      ],
      correctAnswer: 1,
      explanation: 'Adapter: allows incompatible interfaces to work together (wrapper).',
      difficulty: 'medium'
    },
    {
      question: 'When should you use Adapter pattern?',
      options: [
        'For adapters',
        'When integrating with existing class with incompatible interface',
        'Always',
        'For hardware'
      ],
      correctAnswer: 1,
      explanation: 'Use Adapter to make existing classes work without modifying their code.',
      difficulty: 'medium'
    },
    {
      question: 'What is the Builder pattern?',
      options: [
        'Construction pattern',
        'Separates object construction from representation',
        'Build tool',
        'Creator pattern'
      ],
      correctAnswer: 1,
      explanation: 'Builder: constructs complex objects step by step, same construction different representations.',
      difficulty: 'hard'
    },
    {
      question: 'When should you use Builder pattern?',
      options: [
        'Building houses',
        'When object construction is complex with many optional parameters',
        'Always',
        'For simple objects'
      ],
      correctAnswer: 1,
      explanation: 'Use Builder for complex objects with many optional components (fluent interfaces).',
      difficulty: 'hard'
    },
    {
      question: 'What is the Facade pattern?',
      options: [
        'Front pattern',
        'Provides simplified interface to complex subsystem',
        'Face pattern',
        'Hide pattern'
      ],
      correctAnswer: 1,
      explanation: 'Facade: unified simple interface to complex set of interfaces in subsystem.',
      difficulty: 'medium'
    },
    {
      question: 'When should you use Facade pattern?',
      options: [
        'For facades',
        'When you want to provide simple interface to complex system',
        'Always',
        'For UI'
      ],
      correctAnswer: 1,
      explanation: 'Use Facade to simplify API, hide complexity (library wrappers, service layers).',
      difficulty: 'medium'
    },
    {
      question: 'What is the Template Method pattern?',
      options: [
        'Code template',
        'Defines algorithm skeleton in base class, steps overridden in subclasses',
        'Method template',
        'Code generator'
      ],
      correctAnswer: 1,
      explanation: 'Template Method: algorithm structure in superclass, details in subclasses.',
      difficulty: 'hard'
    },
    {
      question: 'When should you use Template Method?',
      options: [
        'For templates',
        'When algorithm structure same but steps differ',
        'Always',
        'For code generation'
      ],
      correctAnswer: 1,
      explanation: 'Use Template Method when algorithms share structure but differ in details.',
      difficulty: 'hard'
    },
    {
      question: 'What is the Command pattern?',
      options: [
        'Order pattern',
        'Encapsulates request as object, allowing parameterization and queuing',
        'Instruction pattern',
        'Control pattern'
      ],
      correctAnswer: 1,
      explanation: 'Command: turns request into object, supporting undo, queuing, logging.',
      difficulty: 'hard'
    },
    {
      question: 'When should you use Command pattern?',
      options: [
        'For commands',
        'When you need undo/redo, queuing, or logging operations',
        'Always',
        'For CLI'
      ],
      correctAnswer: 1,
      explanation: 'Use Command for undo/redo systems, macros, queued requests.',
      difficulty: 'hard'
    },
    {
      question: 'What is the Iterator pattern?',
      options: [
        'Loop pattern',
        'Provides way to access elements sequentially without exposing structure',
        'Repeat pattern',
        'Cycle pattern'
      ],
      correctAnswer: 1,
      explanation: 'Iterator: traverse collection without exposing internal representation.',
      difficulty: 'medium'
    },
    {
      question: 'Is Iterator pattern built into Python?',
      options: [
        'No',
        'Yes, via __iter__ and __next__ methods',
        'Requires library',
        'Deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Python has built-in iterator protocol: __iter__ and __next__.',
      difficulty: 'medium'
    },
    {
      question: 'What is the State pattern?',
      options: [
        'Status pattern',
        'Allows object to change behavior when internal state changes',
        'Condition pattern',
        'Mode pattern'
      ],
      correctAnswer: 1,
      explanation: 'State: object appears to change class when state changes.',
      difficulty: 'hard'
    },
    {
      question: 'When should you use State pattern?',
      options: [
        'For states',
        'When object behavior depends on state and changes at runtime',
        'Always',
        'For flags'
      ],
      correctAnswer: 1,
      explanation: 'Use State for state machines, workflow systems (order processing, game characters).',
      difficulty: 'hard'
    },
    {
      question: 'What is the Proxy pattern?',
      options: [
        'Representative pattern',
        'Provides surrogate or placeholder controlling access to another object',
        'Agent pattern',
        'Delegate pattern'
      ],
      correctAnswer: 1,
      explanation: 'Proxy: controls access to object (lazy initialization, access control, logging).',
      difficulty: 'hard'
    },
    {
      question: 'When should you use Proxy pattern?',
      options: [
        'For proxies',
        'When you need control over access to object (lazy loading, caching)',
        'Always',
        'For network'
      ],
      correctAnswer: 1,
      explanation: 'Use Proxy for lazy initialization, access control, remote proxies, caching.',
      difficulty: 'hard'
    },
    {
      question: 'What is the Chain of Responsibility pattern?',
      options: [
        'Chain pattern',
        'Passes request along chain of handlers until one handles it',
        'Link pattern',
        'Handler pattern'
      ],
      correctAnswer: 1,
      explanation: 'Chain of Responsibility: request passed through chain until handled.',
      difficulty: 'hard'
    },
    {
      question: 'When should you use Chain of Responsibility?',
      options: [
        'For chains',
        'When multiple objects might handle request, handler not known',
        'Always',
        'For validation'
      ],
      correctAnswer: 1,
      explanation: 'Use Chain for event handling, middleware, logging systems.',
      difficulty: 'hard'
    },
    {
      question: 'What is the Composite pattern?',
      options: [
        'Combination pattern',
        'Composes objects into tree structures representing part-whole hierarchies',
        'Mix pattern',
        'Merge pattern'
      ],
      correctAnswer: 1,
      explanation: 'Composite: treats individual objects and compositions uniformly (tree structures).',
      difficulty: 'hard'
    },
    {
      question: 'When should you use Composite pattern?',
      options: [
        'For trees',
        'When you need to represent part-whole hierarchies',
        'Always',
        'For files'
      ],
      correctAnswer: 1,
      explanation: 'Use Composite for tree structures (file systems, UI components, org charts).',
      difficulty: 'hard'
    },
    {
      question: 'What is the Bridge pattern?',
      options: [
        'Connection pattern',
        'Decouples abstraction from implementation',
        'Link pattern',
        'Join pattern'
      ],
      correctAnswer: 1,
      explanation: 'Bridge: separates abstraction and implementation so they vary independently.',
      difficulty: 'hard'
    },
    {
      question: 'What is the Flyweight pattern?',
      options: [
        'Light pattern',
        'Shares common state among objects to reduce memory',
        'Small pattern',
        'Fast pattern'
      ],
      correctAnswer: 1,
      explanation: 'Flyweight: minimizes memory use by sharing data with similar objects.',
      difficulty: 'hard'
    },
    {
      question: 'What is the Memento pattern?',
      options: [
        'Memory pattern',
        'Captures and restores object state without violating encapsulation',
        'Save pattern',
        'Snapshot pattern'
      ],
      correctAnswer: 1,
      explanation: 'Memento: save/restore object state (undo mechanisms, snapshots).',
      difficulty: 'hard'
    },
    {
      question: 'What is the Mediator pattern?',
      options: [
        'Middle pattern',
        'Defines object that encapsulates how set of objects interact',
        'Communication pattern',
        'Center pattern'
      ],
      correctAnswer: 1,
      explanation: 'Mediator: centralizes complex communications between related objects.',
      difficulty: 'hard'
    },
    {
      question: 'What is the Visitor pattern?',
      options: [
        'Guest pattern',
        'Adds operations to objects without modifying their classes',
        'Tour pattern',
        'Access pattern'
      ],
      correctAnswer: 1,
      explanation: 'Visitor: separates algorithm from object structure it operates on.',
      difficulty: 'hard'
    },
    {
      question: 'What is the Prototype pattern?',
      options: [
        'First pattern',
        'Creates objects by cloning existing instance',
        'Template pattern',
        'Model pattern'
      ],
      correctAnswer: 1,
      explanation: 'Prototype: create new objects by copying existing (prototypical) instance.',
      difficulty: 'medium'
    },
    {
      question: 'What is the difference between Factory and Abstract Factory?',
      options: [
        'Same thing',
        'Factory creates one product, Abstract Factory creates families of products',
        'Abstract is newer',
        'No difference'
      ],
      correctAnswer: 1,
      explanation: 'Abstract Factory: creates families of related objects without specifying classes.',
      difficulty: 'hard'
    },
    {
      question: 'Should you always use design patterns?',
      options: [
        'Yes',
        'No, only when they solve actual problem',
        'Always',
        'Required'
      ],
      correctAnswer: 1,
      explanation: 'Use patterns when appropriate. Don\'t force patterns where they don\'t fit.',
      difficulty: 'medium'
    },
    {
      question: 'What is antipattern?',
      options: [
        'Opposite pattern',
        'Common response to problem that is ineffective or counterproductive',
        'Bad pattern',
        'Old pattern'
      ],
      correctAnswer: 1,
      explanation: 'Antipattern: commonly used bad solution (God Object, Spaghetti Code).',
      difficulty: 'medium'
    },
    {
      question: 'What is dependency injection?',
      options: [
        'Import dependencies',
        'Passing dependencies to object rather than creating inside',
        'Inject code',
        'Add dependencies'
      ],
      correctAnswer: 1,
      explanation: 'Dependency injection: provide dependencies from outside (improves testing, flexibility).',
      difficulty: 'hard'
    },
    {
      question: 'What are SOLID principles?',
      options: [
        'Strong code',
        'Five OOP design principles for maintainable code',
        'Solid patterns',
        'Core rules'
      ],
      correctAnswer: 1,
      explanation: 'SOLID: Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion.',
      difficulty: 'hard'
    },
    {
      question: 'What is Single Responsibility Principle?',
      options: [
        'One function',
        'Class should have only one reason to change',
        'One method',
        'Single class'
      ],
      correctAnswer: 1,
      explanation: 'SRP: each class should have one responsibility, one reason to change.',
      difficulty: 'medium'
    },
    {
      question: 'What is Open-Closed Principle?',
      options: [
        'Open or closed',
        'Open for extension, closed for modification',
        'Open source',
        'Public class'
      ],
      correctAnswer: 1,
      explanation: 'OCP: extend behavior without modifying existing code.',
      difficulty: 'medium'
    },
    {
      question: 'What is Liskov Substitution Principle?',
      options: [
        'Substitute classes',
        'Subtypes must be substitutable for base types',
        'Replace objects',
        'Swap instances'
      ],
      correctAnswer: 1,
      explanation: 'LSP: child class objects should work wherever parent class objects work.',
      difficulty: 'hard'
    },
    {
      question: 'What is DRY principle?',
      options: [
        'Dry code',
        'Don\'t Repeat Yourself - avoid duplication',
        'Direct Reusable YAML',
        'Dry run'
      ],
      correctAnswer: 1,
      explanation: 'DRY: every piece of knowledge should have single, unambiguous representation.',
      difficulty: 'easy'
    },
    {
      question: 'What is KISS principle?',
      options: [
        'Kiss goodbye',
        'Keep It Simple, Stupid - prefer simplicity',
        'Key Integration Simple System',
        'Keep It Super Simple'
      ],
      correctAnswer: 1,
      explanation: 'KISS: simplicity should be key goal, avoid unnecessary complexity.',
      difficulty: 'easy'
    },
    {
      question: 'What is YAGNI principle?',
      options: [
        'You Are Going Nowhere',
        'You Aren\'t Gonna Need It - don\'t add until necessary',
        'Yet Another Good New Idea',
        'Young Age General New Intelligence'
      ],
      correctAnswer: 1,
      explanation: 'YAGNI: don\'t implement features until actually needed.',
      difficulty: 'medium'
    }
  ]
};

export default extendedQuizzes;

