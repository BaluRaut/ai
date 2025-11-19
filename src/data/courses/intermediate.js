export const intermediate = {
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
  };
