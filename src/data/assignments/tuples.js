export const tuplesAssignments = [
  {
    id: 'tuple-1',
    title: 'Tuple Basics',
    difficulty: 'Easy',
    description: 'Create a tuple with student information (name, age, grade) and access each element.',
    hints: [
      'Tuples use parentheses ()',
      'Access elements with index [0], [1], etc.',
      'Tuples are immutable - cannot be changed'
    ],
    starterCode: `# Create a student tuple and print each element
# Example: ("Alice", 20, "A")

# Your code here:
`,
    solution: `# Create student tuple
student = ("Alice", 20, "A")

# Access and print each element
print("Name:", student[0])
print("Age:", student[1])
print("Grade:", student[2])`
  },
  {
    id: 'tuple-2',
    title: 'Tuple Unpacking',
    difficulty: 'Easy',
    description: 'Use tuple unpacking to assign multiple variables at once from a tuple.',
    hints: [
      'Unpacking: a, b, c = tuple',
      'Number of variables must match tuple length',
      'Use * to capture remaining elements'
    ],
    starterCode: `# Given a tuple of coordinates
point = (10, 20, 30)

# Unpack into x, y, z variables and print them

# Your code here:
`,
    solution: `# Given a tuple of coordinates
point = (10, 20, 30)

# Unpack into variables
x, y, z = point

print(f"X: {x}")
print(f"Y: {y}")
print(f"Z: {z}")`
  },
  {
    id: 'tuple-3',
    title: 'Swap Variables',
    difficulty: 'Easy',
    description: 'Use tuple unpacking to swap two variables without using a temporary variable.',
    hints: [
      'Python allows: a, b = b, a',
      'This creates a tuple on the right side',
      'Then unpacks it on the left side'
    ],
    starterCode: `# Swap these two variables
a = 10
b = 20

print("Before swap: a =", a, "b =", b)

# Swap using tuple unpacking (one line!)
# Your code here:

print("After swap: a =", a, "b =", b)
`,
    solution: `# Swap these two variables
a = 10
b = 20

print("Before swap: a =", a, "b =", b)

# Swap using tuple unpacking
a, b = b, a

print("After swap: a =", a, "b =", b)`
  },
  {
    id: 'tuple-4',
    title: 'Named Tuples Alternative',
    difficulty: 'Medium',
    description: 'Create a function that returns multiple values as a tuple, then unpack the results.',
    hints: [
      'Functions can return multiple values',
      'Python automatically packs them as tuple',
      'Caller can unpack the result'
    ],
    starterCode: `# Create a function that calculates min, max, and average of a list
# Return all three values

def analyze_numbers(numbers):
    # Your code here:
    pass

# Test
result = analyze_numbers([5, 2, 8, 1, 9])
# Unpack and print the results
`,
    solution: `# Function returning multiple values
def analyze_numbers(numbers):
    minimum = min(numbers)
    maximum = max(numbers)
    average = sum(numbers) / len(numbers)
    return minimum, maximum, average

# Test
min_val, max_val, avg_val = analyze_numbers([5, 2, 8, 1, 9])
print(f"Min: {min_val}")
print(f"Max: {max_val}")
print(f"Average: {avg_val}")`
  }
];

export default tuplesAssignments;
