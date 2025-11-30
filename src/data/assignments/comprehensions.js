export const comprehensionsAssignments = [
  {
    id: 'comp-1',
    title: 'List Comprehension Basics',
    difficulty: 'Easy',
    description: 'Use list comprehension to create a list of squares from 1 to 10.',
    hints: [
      'Syntax: [expression for item in iterable]',
      'range(1, 11) gives numbers 1-10',
      'Square is n ** 2 or n * n'
    ],
    starterCode: `# Create a list of squares from 1 to 10
# Result should be: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Using traditional loop (for reference):
# squares = []
# for n in range(1, 11):
#     squares.append(n ** 2)

# Now do it with list comprehension (one line):
# Your code here:
`,
    solution: `# Create a list of squares from 1 to 10
squares = [n ** 2 for n in range(1, 11)]
print("Squares:", squares)`
  },
  {
    id: 'comp-2',
    title: 'Filtered Comprehension',
    difficulty: 'Easy',
    description: 'Use list comprehension with a condition to filter even numbers from a list.',
    hints: [
      'Add if condition at the end',
      'Syntax: [x for x in list if condition]',
      'Even numbers: n % 2 == 0'
    ],
    starterCode: `# Filter only even numbers from this list
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

# Get only even numbers using list comprehension
# Your code here:
`,
    solution: `# Filter only even numbers from this list
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

# Get only even numbers using list comprehension
even_numbers = [n for n in numbers if n % 2 == 0]
print("Even numbers:", even_numbers)`
  },
  {
    id: 'comp-3',
    title: 'Dictionary Comprehension',
    difficulty: 'Medium',
    description: 'Create a dictionary that maps numbers to their cubes using dictionary comprehension.',
    hints: [
      'Syntax: {key: value for item in iterable}',
      'Cube is n ** 3',
      'Key is the number, value is its cube'
    ],
    starterCode: `# Create a dictionary mapping 1-5 to their cubes
# Result: {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}

# Using dictionary comprehension:
# Your code here:
`,
    solution: `# Create a dictionary mapping 1-5 to their cubes
cubes = {n: n ** 3 for n in range(1, 6)}
print("Cubes dictionary:", cubes)

# Access individual values
print("Cube of 3:", cubes[3])
print("Cube of 5:", cubes[5])`
  },
  {
    id: 'comp-4',
    title: 'Nested Comprehension',
    difficulty: 'Medium',
    description: 'Flatten a 2D list into a 1D list using nested list comprehension.',
    hints: [
      'Outer loop first, inner loop second',
      'Syntax: [item for row in matrix for item in row]',
      'Think of it as nested for loops'
    ],
    starterCode: `# Flatten this 2D list into 1D
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Result should be: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Flatten using nested comprehension:
# Your code here:
`,
    solution: `# Flatten this 2D list into 1D
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Flatten using nested comprehension
flattened = [num for row in matrix for num in row]
print("Original matrix:", matrix)
print("Flattened:", flattened)`
  },
  {
    id: 'comp-5',
    title: 'Word Lengths',
    difficulty: 'Easy',
    description: 'Create a list of word lengths from a sentence using list comprehension.',
    hints: [
      'Use .split() to get words',
      'len(word) gives word length',
      'Combine in one comprehension'
    ],
    starterCode: `# Get the length of each word
sentence = "Python is a powerful programming language"

# Create list of word lengths
# Result: [6, 2, 1, 8, 11, 8]

# Your code here:
`,
    solution: `# Get the length of each word
sentence = "Python is a powerful programming language"

# Create list of word lengths
words = sentence.split()
lengths = [len(word) for word in words]

print("Words:", words)
print("Lengths:", lengths)

# Or in one line:
lengths_oneline = [len(w) for w in sentence.split()]
print("One-liner:", lengths_oneline)`
  }
];

export default comprehensionsAssignments;
