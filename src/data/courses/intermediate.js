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
        difficulty: 'Intermediate',
        estimatedTime: 60,
        prerequisites: ["control-flow-basics"],
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
      },
      {
        id: 'comprehensions',
        title: 'List & Dict Comprehensions',
        description: 'Master Pythonic syntax for creating lists, dictionaries, and sets efficiently',
        content: {
          overview: `Comprehensions are a concise and readable way to create collections in Python. They provide elegant one-liner syntax for transforming, filtering, and combining data.

List Comprehensions: Create lists from iterables with optional filtering

Dict Comprehensions: Build dictionaries with key-value transformations

Set Comprehensions: Generate unique sets with filtering

Nested Comprehensions: Handle multi-dimensional data structures

Why Use Comprehensions:
✓ More readable than equivalent for loops
✓ Often faster than traditional loops
✓ Pythonic and idiomatic code style
✓ Compact syntax reduces code length`,
          keyPoints: [
            'Basic syntax: [expression for item in iterable]',
            'With condition: [expression for item in iterable if condition]',
            'Can nest comprehensions for multi-dimensional data',
            'Dict comprehensions use {key: value for...} syntax',
            'Set comprehensions use {expression for...} syntax',
            'More readable than map() and filter() in most cases'
          ],
          useCases: [
            {
              title: 'Data Transformation',
              description: 'Transform lists/dicts to new formats',
              example: 'Convert temperatures, normalize data, extract fields'
            },
            {
              title: 'Filtering',
              description: 'Extract elements matching criteria',
              example: 'Filter even numbers, valid emails, passing scores'
            },
            {
              title: 'Data Parsing',
              description: 'Parse and restructure data',
              example: 'CSV processing, JSON transformation, API responses'
            },
            {
              title: 'Matrix Operations',
              description: 'Create and manipulate 2D structures',
              example: 'Matrix initialization, flattening, transposition'
            }
          ],
          dos: [
            '✓ Use comprehensions for simple transformations and filters',
            '✓ Keep comprehensions readable - break complex ones into loops',
            '✓ Use meaningful variable names even in comprehensions',
            '✓ Prefer comprehensions over map() and filter() for clarity',
            '✓ Use dict comprehensions to swap keys/values'
          ],
          donts: [
            '✗ Don\'t create overly complex nested comprehensions',
            '✗ Don\'t use comprehensions with side effects',
            '✗ Don\'t sacrifice readability for brevity',
            '✗ Don\'t use comprehensions when loops are clearer',
            '✗ Don\'t forget comprehensions create new objects'
          ],
          bestPractices: [
            'Keep comprehensions simple - one transformation or filter',
            'Use generator expressions for large datasets: (x for x in range())',
            'Break complex logic into regular loops for clarity',
            'Use intermediate variables for complex expressions',
            'Add comments for non-obvious comprehensions'
          ],
          codeExamples: [
            {
              title: '1. List Comprehensions - Basics',
              code: `# Traditional loop
squares_loop = []
for x in range(10):
    squares_loop.append(x**2)
print("Loop:", squares_loop)

# List comprehension (more Pythonic)
squares = [x**2 for x in range(10)]
print("Comprehension:", squares)

# With condition (filter)
evens = [x for x in range(20) if x % 2 == 0]
print("Even numbers:", evens)

# Transform strings
names = ["alice", "bob", "charlie"]
upper_names = [name.upper() for name in names]
print("Uppercase:", upper_names)

# If-else in comprehension
numbers = [1, 2, 3, 4, 5]
labels = ["even" if n % 2 == 0 else "odd" for n in numbers]
print("Labels:", labels)

# Multiple operations
prices = [10, 20, 30, 40]
prices_with_tax = [round(price * 1.08, 2) for price in prices]
print("With tax:", prices_with_tax)`,
              explanation: 'List comprehensions provide concise syntax for creating lists from iterables with optional filtering and transformation.'
            },
            {
              title: '2. Dict Comprehensions - Creating Dictionaries',
              code: `# Create dict from lists
keys = ['a', 'b', 'c']
values = [1, 2, 3]
my_dict = {k: v for k, v in zip(keys, values)}
print("From zip:", my_dict)

# Square numbers dict
squares_dict = {x: x**2 for x in range(1, 6)}
print("Squares:", squares_dict)

# Swap keys and values
original = {'a': 1, 'b': 2, 'c': 3}
swapped = {v: k for k, v in original.items()}
print("Swapped:", swapped)

# With condition
numbers = range(1, 11)
even_squares = {x: x**2 for x in numbers if x % 2 == 0}
print("Even squares:", even_squares)

# Transform dict values
prices = {'apple': 1.00, 'banana': 0.50, 'orange': 0.75}
prices_with_tax = {item: price * 1.08 for item, price in prices.items()}
print("With tax:", prices_with_tax)

# Create dict from string
text = "hello"
char_index = {char: idx for idx, char in enumerate(text)}
print("Char positions:", char_index)

# Conditional dict creation
scores = {'Alice': 85, 'Bob': 92, 'Charlie': 78, 'David': 95}
passed = {name: score for name, score in scores.items() if score >= 80}
print("Passed:", passed)`,
              explanation: 'Dict comprehensions build dictionaries using {key: value for...} syntax, perfect for transforming or filtering dictionaries.'
            },
            {
              title: '3. Set Comprehensions & Nested Comprehensions',
              code: `# Set comprehension (unique values only)
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 5]
unique_squares = {x**2 for x in numbers}
print("Unique squares:", unique_squares)

# Filter vowels from string
text = "Hello World"
vowels = {char.lower() for char in text if char.lower() in 'aeiou'}
print("Vowels:", vowels)

# Nested list comprehension - 2D matrix
matrix = [[i + j for j in range(3)] for i in range(3)]
print("Matrix:")
for row in matrix:
    print(row)

# Flatten 2D list
matrix_2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix_2d for num in row]
print("Flattened:", flattened)

# Nested with condition
matrix_filtered = [[i*j for j in range(1, 4) if (i*j) % 2 == 0] for i in range(1, 4)]
print("Filtered matrix:", matrix_filtered)

# Cartesian product
colors = ['red', 'blue']
sizes = ['S', 'M', 'L']
combinations = [(color, size) for color in colors for size in sizes]
print("Combinations:", combinations)

# Nested dict comprehension
students = ['Alice', 'Bob', 'Charlie']
subjects = ['Math', 'Science']
grades = {student: {subject: 0 for subject in subjects} for student in students}
print("Grade sheet:", grades)`,
              explanation: 'Set comprehensions create unique collections, while nested comprehensions handle multi-dimensional structures and combinations.'
            },
            {
              title: '4. Advanced Patterns & Real-World Examples',
              code: `# Parse CSV-like data
csv_data = "Alice,25,NYC\\nBob,30,LA\\nCharlie,35,Chicago"
parsed = [
    {'name': parts[0], 'age': int(parts[1]), 'city': parts[2]}
    for line in csv_data.split('\\n')
    for parts in [line.split(',')]
]
print("Parsed CSV:", parsed)

# Group by property
people = [
    {'name': 'Alice', 'age': 25},
    {'name': 'Bob', 'age': 30},
    {'name': 'Charlie', 'age': 25}
]
age_groups = {}
for person in people:
    age = person['age']
    if age not in age_groups:
        age_groups[age] = []
    age_groups[age].append(person['name'])
print("Age groups:", age_groups)

# Same with comprehension (complex - use loop for clarity)
# This shows why loops are sometimes better!

# Word frequency counter
text = "the quick brown fox jumps over the lazy dog"
word_freq = {word: text.split().count(word) for word in set(text.split())}
print("Word frequency:", word_freq)

# Extract specific fields
data = [
    {'name': 'Alice', 'score': 85, 'passed': True},
    {'name': 'Bob', 'score': 92, 'passed': True},
    {'name': 'Charlie', 'score': 78, 'passed': False}
]
names_of_passed = [d['name'] for d in data if d['passed']]
print("Passed students:", names_of_passed)

# Create lookup table
products = [
    {'id': 1, 'name': 'Laptop', 'price': 999},
    {'id': 2, 'name': 'Mouse', 'price': 25},
    {'id': 3, 'name': 'Keyboard', 'price': 75}
]
product_lookup = {p['id']: p for p in products}
print("Product 2:", product_lookup[2])

# Nested comprehension for matrix transpose
matrix = [[1, 2, 3], [4, 5, 6]]
transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
print("Original:", matrix)
print("Transposed:", transposed)`,
              explanation: 'Advanced comprehensions can parse data, create lookups, and perform complex transformations, but remember: readability counts!'
            }
          ],
          quiz: [
            {
              question: 'What does [x**2 for x in range(5)] produce?',
              options: ['[0, 1, 2, 3, 4]', '[0, 1, 4, 9, 16]', '[1, 4, 9, 16, 25]', 'Error'],
              correctAnswer: 1,
              explanation: 'List comprehension squares each number in range(5), which is 0-4, producing [0, 1, 4, 9, 16].'
            },
            {
              question: 'What is the difference between [x for x in range(5)] and (x for x in range(5))?',
              options: [
                'No difference',
                'First is a list, second is a generator expression',
                'Second is a tuple',
                'Second is invalid syntax'
              ],
              correctAnswer: 1,
              explanation: '[] creates a list comprehension (evaluates immediately), () creates a generator expression (lazy evaluation).'
            },
            {
              question: 'How do you create a dict with keys as numbers 1-5 and values as their squares?',
              options: [
                '[x: x**2 for x in range(1, 6)]',
                '{x: x**2 for x in range(1, 6)}',
                '{x, x**2 for x in range(1, 6)}',
                '(x: x**2 for x in range(1, 6))'
              ],
              correctAnswer: 1,
              explanation: 'Dict comprehensions use {key: value for...} syntax. {} creates a dict, [] creates a list.'
            },
            {
              question: 'What does {x for x in [1, 2, 2, 3, 3, 3]} produce?',
              options: ['{1, 2, 3}', '[1, 2, 3]', '{1, 2, 2, 3, 3, 3}', 'Error'],
              correctAnswer: 0,
              explanation: '{} without key:value creates a set comprehension, which automatically removes duplicates.'
            },
            {
              question: 'How to filter only even numbers from a list using comprehension?',
              options: [
                '[x for x in numbers where x % 2 == 0]',
                '[x for x in numbers if x % 2 == 0]',
                '[x if x % 2 == 0 for x in numbers]',
                '[x for x in numbers if even]'
              ],
              correctAnswer: 1,
              explanation: 'Use "if condition" after the for clause to filter elements: [x for x in numbers if x % 2 == 0].'
            }
          ]
        }
      },
      {
        id: 'decorators',
        title: 'Decorators & Higher-Order Functions',
        description: 'Master function decorators and functional programming concepts',
        difficulty: 'Intermediate',
        estimatedTime: 55,
        prerequisites: ["functions"],
        content: {
          overview: `Decorators are a powerful Python feature that allows you to modify or enhance functions without changing their code. They implement the decorator pattern from design patterns.

What are Decorators:
• Functions that take a function and return a modified function
• Use @ symbol before function definition
• Enable code reuse and separation of concerns

Common Use Cases:
• Logging and debugging
• Performance timing
• Access control and authentication
• Caching/memoization
• Input validation

Why Use Decorators:
✓ Don't repeat yourself (DRY principle)
✓ Separate cross-cutting concerns
✓ Clean and readable code
✓ Widely used in frameworks (Flask, Django)`,
          keyPoints: [
            'Decorators are functions that wrap other functions',
            'Use @decorator_name syntax above function definition',
            'Can stack multiple decorators on one function',
            'functools.wraps preserves original function metadata',
            'Can create decorators with arguments using nested functions',
            'Closures enable decorators to access outer scope variables'
          ],
          useCases: [
            {
              title: 'Logging & Debugging',
              description: 'Automatically log function calls and returns',
              example: 'Track function execution, debug parameters, monitor errors'
            },
            {
              title: 'Performance Monitoring',
              description: 'Measure execution time',
              example: 'Profile slow functions, optimize bottlenecks'
            },
            {
              title: 'Authentication & Authorization',
              description: 'Check user permissions before execution',
              example: 'Web frameworks, API endpoints, admin functions'
            },
            {
              title: 'Caching',
              description: 'Store results to avoid recomputation',
              example: 'Expensive calculations, database queries, API calls'
            }
          ],
          dos: [
            '✓ Use functools.wraps to preserve function metadata',
            '✓ Keep decorators simple and focused on one task',
            '✓ Document what your decorator does',
            '✓ Use decorators for cross-cutting concerns',
            '✓ Consider using built-in decorators like @property, @staticmethod'
          ],
          donts: [
            '✗ Don\'t make decorators too complex',
            '✗ Don\'t forget functools.wraps (loses docstrings)',
            '✗ Don\'t overuse decorators - they can obscure code',
            '✗ Don\'t create decorators with significant overhead',
            '✗ Don\'t stack too many decorators - hard to debug'
          ],
          bestPractices: [
            'Always use @functools.wraps in decorator functions',
            'Create decorator libraries for common patterns',
            'Use descriptive names that explain what decorator does',
            'Consider performance impact of decorators',
            'Test decorated and undecorated functions separately'
          ],
          codeExamples: [
            {
              title: '1. Basic Decorator - Logging Function Calls',
              code: `import functools

# Simple decorator
def log_call(func):
    """Decorator that logs function calls"""
    @functools.wraps(func)  # Preserves original function metadata
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}() with args={args}, kwargs={kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__}() returned {result}")
        return result
    return wrapper

# Using the decorator
@log_call
def add(a, b):
    """Add two numbers"""
    return a + b

@log_call
def greet(name, greeting="Hello"):
    """Greet someone"""
    return f"{greeting}, {name}!"

# Test decorated functions
result1 = add(5, 3)
print(f"Result: {result1}\\n")

result2 = greet("Alice")
print(f"Result: {result2}\\n")

result3 = greet("Bob", greeting="Hi")
print(f"Result: {result3}\\n")

# Check metadata is preserved
print(f"Function name: {add.__name__}")
print(f"Docstring: {add.__doc__}")`,
              explanation: 'Decorators wrap functions to add functionality. @functools.wraps preserves original function metadata (name, docstring).'
            },
            {
              title: '2. Performance Timer Decorator',
              code: `import functools
import time

def timer(func):
    """Measure function execution time"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        execution_time = end_time - start_time
        print(f"{func.__name__}() took {execution_time:.4f} seconds")
        return result
    return wrapper

@timer
def fast_function():
    """Quick function"""
    return sum(range(100))

@timer
def slow_function():
    """Slow function with sleep"""
    time.sleep(0.5)
    return sum(range(1000000))

@timer
def fibonacci(n):
    """Calculate fibonacci number (inefficient)"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Test timer decorator
print("Testing fast function:")
fast_function()

print("\\nTesting slow function:")
slow_function()

print("\\nTesting fibonacci (notice recursive calls are timed too):")
fibonacci(10)`,
              explanation: 'Timer decorator measures execution time by recording start/end times and calculating the difference.'
            },
            {
              title: '3. Decorator with Arguments & Caching',
              code: `import functools
import time

# Decorator factory - decorator that takes arguments
def repeat(times):
    """Decorator that repeats function execution"""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            results = []
            for i in range(times):
                result = func(*args, **kwargs)
                results.append(result)
                print(f"Execution {i+1}/{times}: {result}")
            return results
        return wrapper
    return decorator

@repeat(times=3)
def say_hello(name):
    return f"Hello, {name}!"

print("Using decorator with arguments:")
say_hello("Alice")

print("\\n" + "="*50 + "\\n")

# Caching decorator (memoization)
def memoize(func):
    """Cache function results"""
    cache = {}
    @functools.wraps(func)
    def wrapper(*args):
        if args not in cache:
            print(f"Computing {func.__name__}{args}...")
            cache[args] = func(*args)
        else:
            print(f"Using cached result for {func.__name__}{args}")
        return cache[args]
    return wrapper

@memoize
def fibonacci(n):
    """Calculate fibonacci with caching"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print("Fibonacci with memoization:")
print(f"fib(10) = {fibonacci(10)}")
print(f"\\nCalling again:")
print(f"fib(10) = {fibonacci(10)}")  # Uses cache

# Built-in caching with functools
@functools.lru_cache(maxsize=128)
def factorial(n):
    """Calculate factorial with LRU cache"""
    print(f"Computing factorial({n})")
    if n <= 1:
        return 1
    return n * factorial(n-1)

print("\\n" + "="*50)
print("\\nUsing built-in @lru_cache:")
print(f"5! = {factorial(5)}")
print(f"\\nCalling again:")
print(f"5! = {factorial(5)}")  # Uses cache`,
              explanation: 'Decorators can take arguments using nested functions. Caching decorators store results to avoid recomputation.'
            },
            {
              title: '4. Multiple Decorators & Class-Based Decorators',
              code: `import functools
import time

# Multiple decorators stack from bottom to top
def bold(func):
    """Wrap output in <b> tags"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return f"<b>{func(*args, **kwargs)}</b>"
    return wrapper

def italic(func):
    """Wrap output in <i> tags"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return f"<i>{func(*args, **kwargs)}</i>"
    return wrapper

def underline(func):
    """Wrap output in <u> tags"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return f"<u>{func(*args, **kwargs)}</u>"
    return wrapper

# Stacking decorators (applied bottom to top)
@bold
@italic
@underline
def greet(name):
    return f"Hello, {name}!"

print("Stacked decorators:")
print(greet("Alice"))  # <b><i><u>Hello, Alice!</u></i></b>

print("\\n" + "="*50 + "\\n")

# Class-based decorator
class CountCalls:
    """Count how many times a function is called"""
    def __init__(self, func):
        functools.update_wrapper(self, func)
        self.func = func
        self.num_calls = 0
    
    def __call__(self, *args, **kwargs):
        self.num_calls += 1
        print(f"Call {self.num_calls} to {self.func.__name__}()")
        return self.func(*args, **kwargs)

@CountCalls
def process_data(data):
    return f"Processing: {data}"

print("Class-based decorator:")
print(process_data("file1.txt"))
print(process_data("file2.txt"))
print(process_data("file3.txt"))
print(f"\\nTotal calls: {process_data.num_calls}")

# Access control decorator
def require_auth(func):
    """Simulate authentication check"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # In real app, check session/token
        authenticated = True  # Simulated
        if not authenticated:
            raise PermissionError(f"Authentication required for {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@require_auth
def delete_user(user_id):
    return f"Deleted user {user_id}"

print("\\n" + "="*50)
print("\\nAuthentication decorator:")
print(delete_user(123))`,
              explanation: 'Multiple decorators stack from bottom to top. Class-based decorators use __call__ method. Decorators enable access control patterns.'
            }
          ],
          quiz: [
            {
              question: 'What does the @ symbol do in Python?',
              options: [
                'Comments out code',
                'Applies a decorator to a function',
                'Creates a lambda function',
                'Defines a class method'
              ],
              correctAnswer: 1,
              explanation: '@ is syntactic sugar for applying decorators. @decorator\\ndef func(): is equivalent to func = decorator(func).'
            },
            {
              question: 'Why use @functools.wraps in decorator definitions?',
              options: [
                'It makes decorators faster',
                'It preserves the original function\'s metadata (__name__, __doc__)',
                'It is required for decorators to work',
                'It allows decorators to take arguments'
              ],
              correctAnswer: 1,
              explanation: '@functools.wraps copies metadata from the original function, preserving __name__, __doc__, and other attributes.'
            },
            {
              question: 'If you stack @decorator1 and @decorator2, which is applied first?',
              options: [
                'decorator1',
                'decorator2',
                'They are applied simultaneously',
                'Depends on execution order'
              ],
              correctAnswer: 1,
              explanation: 'Decorators stack from bottom to top. @decorator1\\n@decorator2\\ndef func(): applies decorator2 first, then decorator1.'
            },
            {
              question: 'What is a common use case for decorators?',
              options: [
                'Replacing if statements',
                'Logging, timing, or caching function calls',
                'Creating variables',
                'Sorting lists'
              ],
              correctAnswer: 1,
              explanation: 'Decorators excel at cross-cutting concerns like logging, timing, authentication, and caching without modifying function code.'
            },
            {
              question: 'How do you create a decorator that takes arguments?',
              options: [
                'Use a single function with *args',
                'Use a nested function (decorator factory)',
                'Use a class',
                'It\'s not possible'
              ],
              correctAnswer: 1,
              explanation: 'Decorator factories use nested functions: def decorator_with_args(arg): def decorator(func): def wrapper(*args, **kwargs): ...'
            }
          ]
        }
      },
      {
        id: 'generators',
        title: 'Generators & Iterators',
        description: 'Master memory-efficient iteration with generators and iterators',
        content: {
          overview: `Generators are a powerful Python feature for creating iterators in a memory-efficient way. They generate values on-the-fly instead of storing everything in memory.

What are Generators:
• Functions that use yield instead of return
• Produce values one at a time (lazy evaluation)
• Maintain state between calls
• Can be infinite

Generator Expressions:
• Like list comprehensions but with () instead of []
• Create generators without defining functions
• Memory-efficient for large datasets

Why Use Generators:
✓ Memory efficient - don't store all values
✓ Fast for large datasets
✓ Can represent infinite sequences
✓ Elegant for pipelines and streaming data`,
          keyPoints: [
            'Use yield to create generator functions',
            'Generators are iterators - can only iterate once',
            'Generator expressions use () syntax: (x for x in range(10))',
            'next() gets the next value from a generator',
            'Generators remember state between yields',
            'More memory-efficient than lists for large datasets'
          ],
          useCases: [
            {
              title: 'Large File Processing',
              description: 'Read huge files line-by-line without loading into memory',
              example: 'Process log files, CSV parsing, streaming data'
            },
            {
              title: 'Infinite Sequences',
              description: 'Generate unlimited sequences',
              example: 'Fibonacci series, prime numbers, random data streams'
            },
            {
              title: 'Data Pipelines',
              description: 'Chain transformations efficiently',
              example: 'ETL processes, data cleaning, filtering streams'
            },
            {
              title: 'Performance Optimization',
              description: 'Reduce memory footprint',
              example: 'Processing millions of records, real-time data'
            }
          ],
          dos: [
            '✓ Use generators for large datasets to save memory',
            '✓ Use generator expressions for simple cases',
            '✓ Chain generators to create data pipelines',
            '✓ Use yield from to delegate to another generator',
            '✓ Remember generators can only be iterated once'
          ],
          donts: [
            '✗ Don\'t try to iterate a generator twice',
            '✗ Don\'t use generators when you need random access',
            '✗ Don\'t use generators for small datasets (overhead)',
            '✗ Don\'t forget generators are consumed after iteration',
            '✗ Don\'t try to get length of generator with len()'
          ],
          bestPractices: [
            'Use generator expressions for simple transformations',
            'Create generator functions for complex logic',
            'Chain generators instead of creating intermediate lists',
            'Use itertools module for common generator patterns',
            'Document that functions return generators (not lists)'
          ],
          codeExamples: [
            {
              title: '1. Generator Functions vs Regular Functions',
              code: `# Regular function - returns list (stores all in memory)
def squares_list(n):
    result = []
    for i in range(n):
        result.append(i ** 2)
    return result

# Generator function - yields values one at a time
def squares_generator(n):
    for i in range(n):
        yield i ** 2

# Compare memory usage
print("Regular function (list):")
squares_l = squares_list(5)
print(f"Type: {type(squares_l)}")
print(f"Values: {squares_l}")
print(f"Can iterate multiple times: {list(squares_l)}")

print("\\nGenerator function:")
squares_g = squares_generator(5)
print(f"Type: {type(squares_g)}")
print(f"Values (first iteration): {list(squares_g)}")
print(f"Values (second iteration): {list(squares_g)}")  # Empty! Already consumed

# Generator expressions
print("\\nGenerator expression:")
squares_expr = (x**2 for x in range(5))
print(f"Type: {type(squares_expr)}")
print(f"Values: {list(squares_expr)}")

# Manual iteration with next()
print("\\nManual iteration:")
gen = squares_generator(3)
print(f"First: {next(gen)}")
print(f"Second: {next(gen)}")
print(f"Third: {next(gen)}")
# print(next(gen))  # Would raise StopIteration

# Using in for loop (recommended)
print("\\nFor loop (recommended):")
for square in squares_generator(5):
    print(square, end=" ")
print()`,
              explanation: 'Generators use yield to produce values on-demand. Unlike lists, they don\'t store all values in memory and can only be iterated once.'
            },
            {
              title: '2. Infinite Generators & Practical Applications',
              code: `# Infinite generator - no memory limit!
def infinite_counter(start=0):
    """Count forever from start"""
    num = start
    while True:
        yield num
        num += 1

# Use with caution - this would run forever without break!
print("Infinite counter (first 10):")
counter = infinite_counter(1)
for _ in range(10):
    print(next(counter), end=" ")
print()

# Fibonacci sequence generator
def fibonacci():
    """Generate fibonacci sequence infinitely"""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

print("\\nFibonacci sequence (first 15):")
fib = fibonacci()
for _ in range(15):
    print(next(fib), end=" ")
print()

# Reading large files efficiently
def read_large_file(file_path):
    """Read file line by line (memory efficient)"""
    with open(file_path, 'r') as file:
        for line in file:
            yield line.strip()

# Create a sample file for demo
with open('sample.txt', 'w') as f:
    f.write("Line 1\\nLine 2\\nLine 3\\nLine 4\\nLine 5\\n")

print("\\nReading file with generator:")
for line in read_large_file('sample.txt'):
    print(f"Processing: {line}")

# Generate random data stream
import random

def random_numbers(count, min_val=0, max_val=100):
    """Generate random numbers on-demand"""
    for _ in range(count):
        yield random.randint(min_val, max_val)

print("\\nRandom numbers:")
for num in random_numbers(10, 1, 50):
    print(num, end=" ")
print()`,
              explanation: 'Generators can represent infinite sequences and process large files without loading everything into memory.'
            },
            {
              title: '3. Generator Pipelines & Data Processing',
              code: `# Chain generators to create data processing pipeline
def read_data():
    """Simulate reading data"""
    data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for item in data:
        yield item

def filter_even(numbers):
    """Filter even numbers"""
    for num in numbers:
        if num % 2 == 0:
            yield num

def square(numbers):
    """Square each number"""
    for num in numbers:
        yield num ** 2

def add_ten(numbers):
    """Add 10 to each number"""
    for num in numbers:
        yield num + 10

# Create pipeline (no computation yet!)
print("Building pipeline:")
pipeline = add_ten(square(filter_even(read_data())))
print(f"Pipeline created: {pipeline}")

# Only computes when we iterate
print("\\nExecuting pipeline:")
result = list(pipeline)
print(f"Result: {result}")

# More Pythonic with generator expressions
print("\\nSame pipeline with expressions:")
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = (num**2 + 10 for num in data if num % 2 == 0)
print(f"Result: {list(result)}")

# yield from - delegate to another generator
def chain_generators(*iterables):
    """Chain multiple iterables"""
    for iterable in iterables:
        yield from iterable  # Delegate to each iterable

gen1 = range(3)
gen2 = range(10, 13)
gen3 = range(20, 23)

print("\\nChaining generators with yield from:")
chained = chain_generators(gen1, gen2, gen3)
print(f"Chained: {list(chained)}")

# Process CSV-like data
def parse_csv_lines(lines):
    """Parse CSV lines"""
    for line in lines:
        yield line.split(',')

def filter_by_age(records, min_age):
    """Filter records by age"""
    for record in records:
        if int(record[1]) >= min_age:
            yield record

csv_data = ["Alice,25,NYC", "Bob,30,LA", "Charlie,22,Chicago", "David,35,Boston"]

print("\\nCSV Processing Pipeline:")
parsed = parse_csv_lines(csv_data)
filtered = filter_by_age(parsed, 25)
for record in filtered:
    print(f"Name: {record[0]}, Age: {record[1]}, City: {record[2]}")`,
              explanation: 'Generator pipelines chain transformations efficiently. yield from delegates to another generator. Each stage processes data on-demand.'
            },
            {
              title: '4. Advanced: Generator Methods & itertools',
              code: `import itertools

# Generator with send() method
def echo_generator():
    """Generator that echoes sent values"""
    value = None
    while True:
        value = yield value
        if value is not None:
            value = value.upper()

gen = echo_generator()
next(gen)  # Prime the generator
print("Generator send() method:")
print(f"Send 'hello': {gen.send('hello')}")
print(f"Send 'world': {gen.send('world')}")

# itertools - powerful generator utilities
print("\\nitertools.count (infinite counter):")
counter = itertools.count(10, 2)  # Start at 10, step by 2
for i in range(5):
    print(next(counter), end=" ")
print()

print("\\nitertools.cycle (repeat forever):")
colors = itertools.cycle(['red', 'green', 'blue'])
for i in range(10):
    print(next(colors), end=" ")
print()

print("\\nitertools.chain (combine iterables):")
chained = itertools.chain([1, 2, 3], [4, 5, 6], [7, 8, 9])
print(list(chained))

print("\\nitertools.islice (slice an iterator):")
numbers = itertools.count()  # Infinite counter
first_ten_evens = itertools.islice((x for x in numbers if x % 2 == 0), 10)
print(list(first_ten_evens))

print("\\nitertools.takewhile (take until condition false):")
data = [1, 4, 6, 8, 10, 3, 5, 1]
less_than_8 = itertools.takewhile(lambda x: x < 8, data)
print(list(less_than_8))

print("\\nitertools.dropwhile (drop until condition false):")
data = [1, 4, 6, 8, 10, 3, 5, 1]
after_first_8 = itertools.dropwhile(lambda x: x < 8, data)
print(list(after_first_8))

print("\\nitertools.combinations (all combinations):")
letters = ['A', 'B', 'C']
combos = itertools.combinations(letters, 2)
print(list(combos))

print("\\nitertools.permutations (all permutations):")
letters = ['A', 'B', 'C']
perms = itertools.permutations(letters, 2)
print(list(perms))

print("\\nitertools.product (Cartesian product):")
colors = ['red', 'blue']
sizes = ['S', 'M', 'L']
products = itertools.product(colors, sizes)
print(list(products))

# Groupby - group consecutive items
print("\\nitertools.groupby:")
data = [('A', 1), ('A', 2), ('B', 3), ('B', 4), ('C', 5)]
for key, group in itertools.groupby(data, key=lambda x: x[0]):
    print(f"{key}: {list(group)}")`,
              explanation: 'Generators support send() for two-way communication. itertools provides powerful generator utilities for common patterns.'
            }
          ],
          quiz: [
            {
              question: 'What is the main difference between a generator and a regular function?',
              options: [
                'Generators are faster',
                'Generators use yield instead of return and maintain state',
                'Generators cannot take parameters',
                'Generators must be infinite'
              ],
              correctAnswer: 1,
              explanation: 'Generators use yield to produce values one at a time and remember their state between calls, unlike regular functions that return once.'
            },
            {
              question: 'What happens if you try to iterate a generator twice?',
              options: [
                'It works fine, same values',
                'The second iteration is empty (generator is exhausted)',
                'It raises an error',
                'It reverses the values'
              ],
              correctAnswer: 1,
              explanation: 'Generators can only be iterated once. After exhaustion, they yield nothing. You need to create a new generator to iterate again.'
            },
            {
              question: 'What is the difference between [x**2 for x in range(10)] and (x**2 for x in range(10))?',
              options: [
                'No difference',
                'First creates a list, second creates a generator expression',
                'Second is invalid syntax',
                'First is faster'
              ],
              correctAnswer: 1,
              explanation: '[] creates a list comprehension (evaluates immediately and stores in memory), () creates a generator expression (lazy evaluation).'
            },
            {
              question: 'When should you use generators?',
              options: [
                'Always - they are always better than lists',
                'For large datasets or when you need memory efficiency',
                'Never - lists are better',
                'Only for infinite sequences'
              ],
              correctAnswer: 1,
              explanation: 'Use generators for large datasets, streaming data, or when you don\'t need random access. For small datasets where you need multiple iterations, lists are fine.'
            },
            {
              question: 'What does "yield from iterable" do?',
              options: [
                'Yields the iterable object itself',
                'Delegates to another iterable, yielding all its values',
                'Creates a copy of the iterable',
                'It\'s invalid syntax'
              ],
              correctAnswer: 1,
              explanation: '"yield from" delegates to another iterable, yielding each of its values. It\'s a shorthand for "for item in iterable: yield item".'
            }
          ]
        }
      },
      {
        id: 'regex',
        title: 'Regular Expressions (Regex)',
        description: 'Master pattern matching and text processing with regular expressions',
        difficulty: 'Intermediate',
        estimatedTime: 60,
        prerequisites: ["functions"],
        content: {
          overview: `Regular expressions (regex) are powerful tools for matching patterns in text. They enable complex text searching, validation, and manipulation with concise syntax.

What are Regular Expressions:
• Pattern-matching language for strings
• Used for searching, extracting, and replacing text
• Supported across most programming languages
• Essential for text processing and validation

Common Use Cases:
• Email/phone validation
• Data extraction from text
• Find and replace operations
• Log file parsing
• Web scraping

Why Learn Regex:
✓ Powerful text processing in one line
✓ Industry standard for pattern matching
✓ Works in Python, JavaScript, SQL, command line
✓ Essential for data cleaning and validation`,
          keyPoints: [
            'Python re module provides regex functionality',
            '. matches any character, * means zero or more',
            '[] defines character sets, () creates groups',
            '^ matches start, $ matches end of string',
            'Use raw strings r"pattern" for regex patterns',
            'Compile patterns with re.compile() for reuse'
          ],
          useCases: [
            {
              title: 'Data Validation',
              description: 'Validate emails, phone numbers, passwords',
              example: 'Form validation, user input checking, data quality'
            },
            {
              title: 'Text Extraction',
              description: 'Extract specific patterns from text',
              example: 'Parse logs, extract URLs, find dates in documents'
            },
            {
              title: 'Data Cleaning',
              description: 'Find and replace patterns',
              example: 'Remove formatting, normalize data, clean datasets'
            },
            {
              title: 'Web Scraping',
              description: 'Extract data from HTML',
              example: 'Parse web pages, extract links, find patterns'
            }
          ],
          dos: [
            '✓ Use raw strings r"..." for regex patterns',
            '✓ Compile patterns you reuse with re.compile()',
            '✓ Use verbose mode re.VERBOSE for complex patterns',
            '✓ Test regex patterns thoroughly',
            '✓ Use online regex testers (regex101.com) for development'
          ],
          donts: [
            '✗ Don\'t make overly complex patterns - break them down',
            '✗ Don\'t forget to escape special characters',
            '✗ Don\'t use regex for parsing HTML (use BeautifulSoup)',
            '✗ Don\'t forget raw strings - backslashes can be tricky',
            '✗ Don\'t overuse regex - simple string methods are often clearer'
          ],
          bestPractices: [
            'Always use raw strings r"pattern" for regex',
            'Compile frequently used patterns for performance',
            'Use named groups for clarity: (?P<name>...)',
            'Add comments to complex patterns with re.VERBOSE',
            'Test edge cases and invalid inputs'
          ],
          codeExamples: [
            {
              title: '1. Regex Basics - Searching and Matching',
              code: `import re

# Basic pattern matching
text = "The quick brown fox jumps over the lazy dog"

# search() - find first occurrence
match = re.search(r'fox', text)
if match:
    print(f"Found '{match.group()}' at position {match.start()}")

# findall() - find all occurrences
vowels = re.findall(r'[aeiou]', text)
print(f"Vowels found: {vowels}")
print(f"Count: {len(vowels)}")

# match() - match at start of string
match = re.match(r'The', text)
print(f"Starts with 'The': {match is not None}")

# fullmatch() - match entire string
match = re.fullmatch(r'The.*dog', text)
print(f"Full match: {match is not None}")

# Special characters
# . = any character
# * = zero or more
# + = one or more  
# ? = zero or one
# {n} = exactly n times
# {n,m} = between n and m times

pattern = r'\\d+'  # One or more digits
text2 = "There are 123 apples and 456 oranges"
numbers = re.findall(pattern, text2)
print(f"\\nNumbers found: {numbers}")

# Character classes
pattern = r'[A-Z][a-z]+'  # Capital letter followed by lowercase
text3 = "Alice and Bob went to Chicago"
names = re.findall(pattern, text3)
print(f"Capitalized words: {names}")`,
              explanation: 'Regex basics: search() finds first match, findall() finds all, match() checks start. Use raw strings r"" for patterns.'
            },
            {
              title: '2. Pattern Building & Character Classes',
              code: `import re

# Character classes and metacharacters
text = "Contact: john@email.com or call 555-1234"

# \\d = digit [0-9]
# \\D = non-digit
# \\w = word character [a-zA-Z0-9_]
# \\W = non-word character
# \\s = whitespace
# \\S = non-whitespace

# Extract email
email_pattern = r'[\\w.-]+@[\\w.-]+\\.\\w+'
email = re.findall(email_pattern, text)
print(f"Email: {email}")

# Extract phone
phone_pattern = r'\\d{3}-\\d{4}'
phone = re.findall(phone_pattern, text)
print(f"Phone: {phone}")

# Anchors
# ^ = start of string
# $ = end of string
# \\b = word boundary

text2 = "cat scatter catalog"
# Find whole word "cat" only
whole_cat = re.findall(r'\\bcat\\b', text2)
print(f"\\nWhole word 'cat': {whole_cat}")

# Quantifiers
text3 = "color colour gray grey"
# Match both color and colour
colors = re.findall(r'colou?r', text3)  # ? = zero or one
print(f"Color variants: {colors}")

# Match gray or grey
grays = re.findall(r'gr[ae]y', text3)  # [ae] = a or e
print(f"Gray variants: {grays}")

# Groups with ()
text4 = "Date: 2024-01-15, Time: 14:30:00"
# Capture groups
date_pattern = r'(\\d{4})-(\\d{2})-(\\d{2})'
match = re.search(date_pattern, text4)
if match:
    print(f"\\nFull date: {match.group(0)}")  # group(0) = entire match
    print(f"Year: {match.group(1)}")
    print(f"Month: {match.group(2)}")
    print(f"Day: {match.group(3)}")

# Named groups - more readable!
pattern = r'(?P<year>\\d{4})-(?P<month>\\d{2})-(?P<day>\\d{2})'
match = re.search(pattern, text4)
if match:
    print(f"\\nNamed groups:")
    print(f"Year: {match.group('year')}")
    print(f"Month: {match.group('month')}")
    print(f"Day: {match.group('day')}")
    print(f"As dict: {match.groupdict()}")`,
              explanation: 'Character classes (\\d, \\w, \\s) match types of characters. Groups () capture parts of pattern. Named groups (?P<name>) improve readability.'
            },
            {
              title: '3. Real-World Validation Patterns',
              code: `import re

# Email validation (simple)
def validate_email(email):
    pattern = r'^[\\w.-]+@[\\w.-]+\\.\\w{2,}$'
    return re.match(pattern, email) is not None

emails = [
    "john@example.com",      # Valid
    "jane.doe@company.co.uk", # Valid
    "invalid@",              # Invalid
    "@invalid.com",          # Invalid
    "no-at-sign.com"         # Invalid
]

print("Email validation:")
for email in emails:
    print(f"{email:30} -> {'✓ Valid' if validate_email(email) else '✗ Invalid'}")

# Phone number validation (US format)
def validate_phone(phone):
    # Accepts: 555-1234, (555) 123-4567, 555.123.4567, 5551234567
    patterns = [
        r'^\\d{3}-\\d{4}$',                    # 555-1234
        r'^\\(\\d{3}\\) \\d{3}-\\d{4}$',       # (555) 123-4567
        r'^\\d{3}\\.\\d{3}\\.\\d{4}$',          # 555.123.4567
        r'^\\d{10}$'                           # 5551234567
    ]
    return any(re.match(pattern, phone) for pattern in patterns)

phones = [
    "555-1234",
    "(555) 123-4567",
    "555.123.4567",
    "5551234567",
    "123-45-6789",  # Invalid (wrong format)
    "abc-defg"      # Invalid (not numbers)
]

print("\\nPhone validation:")
for phone in phones:
    print(f"{phone:20} -> {'✓ Valid' if validate_phone(phone) else '✗ Invalid'}")

# Password validation
def validate_password(password):
    """
    Validate password:
    - At least 8 characters
    - Contains uppercase and lowercase
    - Contains digit
    - Contains special character
    """
    if len(password) < 8:
        return False, "Too short (min 8 characters)"
    if not re.search(r'[A-Z]', password):
        return False, "Missing uppercase letter"
    if not re.search(r'[a-z]', password):
        return False, "Missing lowercase letter"
    if not re.search(r'\\d', password):
        return False, "Missing digit"
    if not re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
        return False, "Missing special character"
    return True, "Valid password"

passwords = [
    "Pass123!",      # Valid
    "password",      # Invalid (no uppercase, digit, special)
    "PASSWORD123!",  # Invalid (no lowercase)
    "Pass!",         # Invalid (too short)
    "MyP@ssw0rd"     # Valid
]

print("\\nPassword validation:")
for pwd in passwords:
    valid, message = validate_password(pwd)
    print(f"{pwd:20} -> {message}")

# URL validation
def validate_url(url):
    pattern = r'^https?://[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$'
    return re.match(pattern, url) is not None

urls = [
    "https://www.example.com",
    "http://example.com/path?query=value",
    "ftp://example.com",  # Invalid (not http/https)
    "www.example.com",    # Invalid (missing protocol)
]

print("\\nURL validation:")
for url in urls:
    print(f"{url:40} -> {'✓ Valid' if validate_url(url) else '✗ Invalid'}")`,
              explanation: 'Real-world validation combines multiple regex patterns. Use anchors (^ $) to match entire string. Test multiple cases including edge cases.'
            },
            {
              title: '4. Text Extraction & Substitution',
              code: `import re

# Extract all emails from text
text = """
Contact us at support@company.com or sales@company.com
For urgent matters: urgent@company.org
Personal: john.doe@email.net
"""

email_pattern = r'[\\w.-]+@[\\w.-]+\\.\\w+'
emails = re.findall(email_pattern, text)
print("Extracted emails:")
for email in emails:
    print(f"  - {email}")

# Extract dates in various formats
log = """
2024-01-15: System started
Jan 20, 2024: Update installed
2024/02/01: Backup completed
"""

# Pattern for YYYY-MM-DD
dates1 = re.findall(r'\\d{4}-\\d{2}-\\d{2}', log)
# Pattern for Mon DD, YYYY
dates2 = re.findall(r'\\w{3} \\d{2}, \\d{4}', log)
# Pattern for YYYY/MM/DD
dates3 = re.findall(r'\\d{4}/\\d{2}/\\d{2}', log)

print("\\nExtracted dates:")
print(f"ISO format: {dates1}")
print(f"Written format: {dates2}")
print(f"Slash format: {dates3}")

# Substitution with sub()
text = "Price: $100, Discount: $25, Total: $75"

# Replace $ with USD
result = re.sub(r'\\$', 'USD ', text)
print(f"\\nOriginal: {text}")
print(f"Replaced: {result}")

# Replace with captured groups
text = "Call us at 555-1234 or 555-5678"
# Format: (XXX) XXX-XXXX
result = re.sub(r'(\\d{3})-(\\d{4})', r'(555) \\1-\\2', text)
print(f"\\nPhone formatting:")
print(f"Original: {text}")
print(f"Formatted: {result}")

# Replace with function
def convert_to_uppercase(match):
    return match.group(0).upper()

text = "hello world python programming"
result = re.sub(r'\\b\\w{5,}\\b', convert_to_uppercase, text)
print(f"\\nCapitalize long words:")
print(f"Original: {text}")
print(f"Result: {result}")

# Split by pattern
text = "apple,banana;cherry|orange:grape"
fruits = re.split(r'[,;|:]', text)
print(f"\\nSplit by multiple delimiters:")
print(f"Original: {text}")
print(f"Fruits: {fruits}")

# Compiled patterns for performance
email_regex = re.compile(r'[\\w.-]+@[\\w.-]+\\.\\w+')
text = "Contact: a@b.com, b@c.com, c@d.com"
emails = email_regex.findall(text)
print(f"\\nUsing compiled pattern:")
print(f"Emails: {emails}")

# Case-insensitive matching
text = "Python python PYTHON PyThOn"
matches = re.findall(r'python', text, re.IGNORECASE)
print(f"\\nCase-insensitive matches: {matches}")`,
              explanation: 'Use findall() to extract patterns, sub() to replace, split() to divide text. Compiled patterns improve performance for repeated use.'
            }
          ],
          quiz: [
            {
              question: 'What does the regex pattern r"\\d{3}-\\d{4}" match?',
              options: [
                'Any 7-digit number',
                'Three digits, a dash, then four digits (e.g., 555-1234)',
                'Phone numbers only',
                'Dates in MM-DD-YYYY format'
              ],
              correctAnswer: 1,
              explanation: '\\d matches a digit, {3} means exactly 3 times, {4} means exactly 4 times. This matches patterns like 555-1234.'
            },
            {
              question: 'Why use raw strings r"..." for regex patterns in Python?',
              options: [
                'They make regex faster',
                'They prevent Python from interpreting backslashes as escape sequences',
                'They are required for regex to work',
                'They make patterns case-insensitive'
              ],
              correctAnswer: 1,
              explanation: 'Raw strings treat backslashes literally. Without r"", \\d would become \\\\d, causing issues. r"\\d" is cleaner than "\\\\d".'
            },
            {
              question: 'What is the difference between re.search() and re.match()?',
              options: [
                'No difference',
                'search() finds anywhere in string, match() only at the beginning',
                'match() is faster',
                'search() is case-sensitive, match() is not'
              ],
              correctAnswer: 1,
              explanation: 're.match() only matches at the start of the string, while re.search() finds the first occurrence anywhere in the string.'
            },
            {
              question: 'What does the pattern r"[aeiou]" match?',
              options: [
                'The literal string "aeiou"',
                'Any single vowel',
                'All vowels in sequence',
                'Any consonant'
              ],
              correctAnswer: 1,
              explanation: 'Square brackets [] define a character set. [aeiou] matches any single character that is a, e, i, o, or u.'
            },
            {
              question: 'How do you make a regex pattern case-insensitive?',
              options: [
                'Use uppercase letters in the pattern',
                'Add re.IGNORECASE flag to the function',
                'Convert string to lowercase first',
                'Use [A-Za-z] for all letters'
              ],
              correctAnswer: 1,
              explanation: 'Use re.IGNORECASE flag: re.search(pattern, text, re.IGNORECASE) makes the match case-insensitive.'
            }
          ]
        }
      },
      {
        id: 'json-apis',
        title: 'Working with JSON & APIs',
        description: 'Master JSON data handling and REST API communication in Python',
        difficulty: 'Intermediate',
        estimatedTime: 55,
        prerequisites: ["file-handling"],
        content: {
          overview: `JSON (JavaScript Object Notation) is the standard format for data exchange on the web. Learning to work with JSON and APIs is essential for modern Python development.

What is JSON:
• Lightweight data-interchange format
• Human-readable text format
• Based on JavaScript object syntax
• Language-independent (works everywhere)

What are APIs:
• Application Programming Interfaces
• Allow programs to communicate
• REST APIs use HTTP requests (GET, POST, PUT, DELETE)
• Return data usually in JSON format

Why Learn JSON & APIs:
✓ Essential for web development
✓ Access data from any web service
✓ Build data-driven applications
✓ Integrate with third-party services`,
          keyPoints: [
            'json.dumps() converts Python to JSON string',
            'json.loads() converts JSON string to Python',
            'requests library simplifies HTTP API calls',
            'APIs use GET (read), POST (create), PUT (update), DELETE (remove)',
            'Always check response status codes (200 = success)',
            'Handle API errors and rate limits gracefully'
          ],
          useCases: [
            {
              title: 'Data Exchange',
              description: 'Save/load structured data to files or databases',
              example: 'Configuration files, data persistence, caching'
            },
            {
              title: 'Web APIs',
              description: 'Fetch data from web services',
              example: 'Weather data, social media, stock prices, maps'
            },
            {
              title: 'Microservices',
              description: 'Communication between services',
              example: 'REST APIs, webhooks, service integration'
            },
            {
              title: 'Data Processing',
              description: 'Parse and transform API responses',
              example: 'ETL pipelines, data analysis, reporting'
            }
          ],
          dos: [
            '✓ Use requests library for API calls (not urllib)',
            '✓ Check response.status_code before using data',
            '✓ Handle exceptions (network errors, timeouts)',
            '✓ Use JSON for configuration files (readable)',
            '✓ Respect API rate limits and terms of service'
          ],
          donts: [
            '✗ Don\'t hardcode API keys - use environment variables',
            '✗ Don\'t ignore response status codes',
            '✗ Don\'t make API calls in loops without rate limiting',
            '✗ Don\'t store sensitive data in JSON files',
            '✗ Don\'t parse JSON manually - use json module'
          ],
          bestPractices: [
            'Use environment variables for API keys (never commit them!)',
            'Implement exponential backoff for retries',
            'Cache API responses when appropriate',
            'Log API requests for debugging',
            'Use requests.Session() for multiple calls to same API'
          ],
          codeExamples: [
            {
              title: '1. JSON Basics - Encoding and Decoding',
              code: `import json

# Python dict to JSON string
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York",
    "hobbies": ["reading", "coding", "hiking"],
    "is_student": False,
    "grades": None
}

# Convert Python to JSON (dumps = dump string)
json_string = json.dumps(person)
print("Python dict to JSON string:")
print(json_string)
print(f"Type: {type(json_string)}")

# Pretty print with indentation
json_pretty = json.dumps(person, indent=2)
print("\\nPretty printed JSON:")
print(json_pretty)

# Sort keys alphabetically
json_sorted = json.dumps(person, indent=2, sort_keys=True)
print("\\nSorted keys:")
print(json_sorted)

# Convert JSON string to Python (loads = load string)
json_text = '{"name": "Bob", "age": 25, "scores": [85, 90, 95]}'
python_dict = json.loads(json_text)
print("\\nJSON string to Python dict:")
print(python_dict)
print(f"Name: {python_dict['name']}")
print(f"Type: {type(python_dict)}")

# Working with JSON files
data = {
    "users": [
        {"id": 1, "name": "Alice", "email": "alice@example.com"},
        {"id": 2, "name": "Bob", "email": "bob@example.com"}
    ],
    "total": 2
}

# Write to JSON file
with open('users.json', 'w') as f:
    json.dump(data, f, indent=2)  # dump (no 's') writes to file
print("\\nWritten to users.json")

# Read from JSON file
with open('users.json', 'r') as f:
    loaded_data = json.load(f)  # load (no 's') reads from file
print("\\nLoaded from users.json:")
print(f"Total users: {loaded_data['total']}")
for user in loaded_data['users']:
    print(f"  - {user['name']}: {user['email']}")`,
              explanation: 'json.dumps() converts Python to JSON string, json.loads() converts back. Use json.dump()/load() for files. indent parameter prettifies output.'
            },
            {
              title: '2. Making API Requests with requests Library',
              code: `import requests

# First, install requests: pip install requests

# GET request - fetch data
print("1. GET Request - Fetch data:")
response = requests.get('https://jsonplaceholder.typicode.com/posts/1')

# Check status code
print(f"Status Code: {response.status_code}")
if response.status_code == 200:
    print("Success!")
else:
    print("Failed!")

# Get JSON data
data = response.json()  # Automatically parses JSON
print(f"Title: {data['title']}")
print(f"Body: {data['body'][:50]}...")

# GET with parameters
print("\\n2. GET with query parameters:")
params = {
    'userId': 1,
    '_limit': 3
}
response = requests.get('https://jsonplaceholder.typicode.com/posts', params=params)
posts = response.json()
print(f"Fetched {len(posts)} posts:")
for post in posts:
    print(f"  - {post['id']}: {post['title']}")

# POST request - create data
print("\\n3. POST Request - Create data:")
new_post = {
    'title': 'My New Post',
    'body': 'This is the content of my post',
    'userId': 1
}
response = requests.post('https://jsonplaceholder.typicode.com/posts', json=new_post)
print(f"Status Code: {response.status_code}")
if response.status_code == 201:  # 201 = Created
    created = response.json()
    print(f"Created post with ID: {created['id']}")

# PUT request - update data
print("\\n4. PUT Request - Update data:")
updated_post = {
    'id': 1,
    'title': 'Updated Title',
    'body': 'Updated content',
    'userId': 1
}
response = requests.put('https://jsonplaceholder.typicode.com/posts/1', json=updated_post)
print(f"Status Code: {response.status_code}")

# DELETE request - remove data
print("\\n5. DELETE Request:")
response = requests.delete('https://jsonplaceholder.typicode.com/posts/1')
print(f"Status Code: {response.status_code}")
if response.status_code == 200:
    print("Successfully deleted")

# Headers - send additional metadata
print("\\n6. Custom headers:")
headers = {
    'User-Agent': 'My Python App',
    'Accept': 'application/json'
}
response = requests.get('https://jsonplaceholder.typicode.com/posts/1', headers=headers)
print(f"Request headers sent: {headers}")`,
              explanation: 'requests library simplifies API calls. GET retrieves data, POST creates, PUT updates, DELETE removes. Always check status_code.'
            },
            {
              title: '3. Real-World API Example - Error Handling',
              code: `import requests
import time

def fetch_github_user(username):
    """
    Fetch GitHub user info with proper error handling
    """
    url = f'https://api.github.com/users/{username}'
    
    try:
        # Set timeout to avoid hanging
        response = requests.get(url, timeout=5)
        
        # Check for errors
        if response.status_code == 200:
            user_data = response.json()
            return {
                'success': True,
                'data': {
                    'name': user_data.get('name', 'N/A'),
                    'bio': user_data.get('bio', 'N/A'),
                    'public_repos': user_data.get('public_repos', 0),
                    'followers': user_data.get('followers', 0),
                    'created_at': user_data.get('created_at', 'N/A')
                }
            }
        elif response.status_code == 404:
            return {'success': False, 'error': 'User not found'}
        elif response.status_code == 403:
            return {'success': False, 'error': 'Rate limit exceeded'}
        else:
            return {'success': False, 'error': f'HTTP {response.status_code}'}
            
    except requests.exceptions.Timeout:
        return {'success': False, 'error': 'Request timed out'}
    except requests.exceptions.ConnectionError:
        return {'success': False, 'error': 'Connection error'}
    except requests.exceptions.RequestException as e:
        return {'success': False, 'error': str(e)}

# Test the function
users = ['torvalds', 'gvanrossum', 'nonexistentuser12345']

for username in users:
    print(f"\\nFetching {username}:")
    result = fetch_github_user(username)
    
    if result['success']:
        data = result['data']
        print(f"  Name: {data['name']}")
        print(f"  Bio: {data['bio'][:50]}..." if data['bio'] != 'N/A' else "  Bio: N/A")
        print(f"  Repos: {data['public_repos']}")
        print(f"  Followers: {data['followers']}")
    else:
        print(f"  Error: {result['error']}")
    
    time.sleep(1)  # Rate limiting - be nice to APIs!

# Using Session for multiple requests
print("\\n" + "="*50)
print("Using Session for better performance:")

with requests.Session() as session:
    # Set default headers for all requests
    session.headers.update({'User-Agent': 'Python Learning App'})
    
    # Make multiple requests - connection is reused
    for i in range(1, 4):
        response = session.get(f'https://jsonplaceholder.typicode.com/posts/{i}')
        if response.status_code == 200:
            post = response.json()
            print(f"Post {i}: {post['title']}")`,
              explanation: 'Always handle errors: check status codes, catch exceptions, set timeouts. Use Session() for multiple requests to same API for better performance.'
            },
            {
              title: '4. Parsing Complex JSON & Data Transformation',
              code: `import json

# Complex nested JSON (like real API responses)
api_response = '''
{
  "status": "success",
  "data": {
    "users": [
      {
        "id": 1,
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "address": {
          "street": "123 Main St",
          "city": "New York",
          "zipcode": "10001"
        },
        "orders": [
          {"id": 101, "total": 99.99, "status": "delivered"},
          {"id": 102, "total": 149.99, "status": "pending"}
        ]
      },
      {
        "id": 2,
        "name": "Bob Smith",
        "email": "bob@example.com",
        "address": {
          "street": "456 Oak Ave",
          "city": "Los Angeles",
          "zipcode": "90001"
        },
        "orders": [
          {"id": 103, "total": 79.99, "status": "delivered"}
        ]
      }
    ]
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
'''

# Parse JSON
data = json.loads(api_response)

# Navigate nested structure
print("Parsing complex JSON:")
print(f"Status: {data['status']}")
print(f"Timestamp: {data['timestamp']}")
print(f"\\nUsers:")

for user in data['data']['users']:
    print(f"\\n  {user['name']} ({user['email']})")
    print(f"  Address: {user['address']['street']}, {user['address']['city']}")
    print(f"  Orders: {len(user['orders'])}")
    
    total_spent = sum(order['total'] for order in user['orders'])
    print(f"  Total spent: {total_spent}")
    
    for order in user['orders']:
        print(f"    - Order {order['id']}: {order['total']} ({order['status']})")

# Transform data
print("\\n" + "="*50)
print("Data transformation:")

# Create summary report
summary = {
    "total_users": len(data['data']['users']),
    "total_orders": sum(len(user['orders']) for user in data['data']['users']),
    "revenue": sum(
        order['total'] 
        for user in data['data']['users'] 
        for order in user['orders']
    ),
    "users_by_city": {}
}

# Group users by city
for user in data['data']['users']:
    city = user['address']['city']
    if city not in summary['users_by_city']:
        summary['users_by_city'][city] = []
    summary['users_by_city'][city].append(user['name'])

print(json.dumps(summary, indent=2))

# Extract specific fields (flatten structure)
simplified = [
    {
        'name': user['name'],
        'city': user['address']['city'],
        'order_count': len(user['orders']),
        'total_spent': sum(order['total'] for order in user['orders'])
    }
    for user in data['data']['users']
]

print("\\nSimplified data:")
print(json.dumps(simplified, indent=2))`,
              explanation: 'Navigate nested JSON with [key] access. Use list comprehensions to transform data. Extract and flatten complex structures for easier processing.'
            }
          ],
          quiz: [
            {
              question: 'What is the difference between json.dumps() and json.dump()?',
              options: [
                'No difference',
                'dumps() returns string, dump() writes to file',
                'dump() is faster',
                'dumps() is for Python 2, dump() is for Python 3'
              ],
              correctAnswer: 1,
              explanation: 'json.dumps() (dump string) converts Python object to JSON string. json.dump() writes directly to a file object.'
            },
            {
              question: 'What HTTP status code indicates a successful GET request?',
              options: [
                '404',
                '500',
                '200',
                '301'
              ],
              correctAnswer: 2,
              explanation: '200 means OK (success). 404 is Not Found, 500 is Server Error, 301 is Redirect. Always check status codes before using data.'
            },
            {
              question: 'Which HTTP method is used to create a new resource on the server?',
              options: [
                'GET',
                'POST',
                'PUT',
                'DELETE'
              ],
              correctAnswer: 1,
              explanation: 'POST creates new resources, GET retrieves, PUT updates, DELETE removes. POST typically returns status 201 (Created) on success.'
            },
            {
              question: 'How do you pass query parameters to a GET request using requests library?',
              options: [
                'requests.get(url + "?key=value")',
                'requests.get(url, params={\'key\': \'value\'})',
                'requests.get(url, query={\'key\': \'value\'})',
                'requests.get(url, data={\'key\': \'value\'})'
              ],
              correctAnswer: 1,
              explanation: 'Use params parameter: requests.get(url, params={\'key\': \'value\'}). The library automatically formats the URL.'
            },
            {
              question: 'Why use requests.Session() for multiple API calls?',
              options: [
                'It\'s required by most APIs',
                'It reuses connections and persists headers, improving performance',
                'It makes code shorter',
                'It automatically handles rate limits'
              ],
              correctAnswer: 1,
              explanation: 'Session() reuses the underlying TCP connection and persists headers/cookies across requests, improving performance for multiple calls to the same API.'
            }
          ]
        }
      }
    ]
  };

