export const setsAssignments = [
  {
    id: 'set-1',
    title: 'Remove Duplicates',
    difficulty: 'Easy',
    description: 'Use a set to remove duplicate elements from a list.',
    hints: [
      'set() creates a set from a list',
      'Sets automatically remove duplicates',
      'Convert back to list with list()'
    ],
    starterCode: `# Remove duplicates from this list
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 5]

# Use set to remove duplicates
# Your code here:
`,
    solution: `# Remove duplicates from this list
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 5]

# Use set to remove duplicates
unique_numbers = list(set(numbers))
print("Original:", numbers)
print("Unique:", unique_numbers)`
  },
  {
    id: 'set-2',
    title: 'Common Elements',
    difficulty: 'Easy',
    description: 'Find common elements between two lists using set intersection.',
    hints: [
      'Convert lists to sets',
      'Use & or .intersection() method',
      'Result is a set of common elements'
    ],
    starterCode: `# Find common elements
list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]

# Find elements that appear in both lists
# Your code here:
`,
    solution: `# Find common elements
list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]

# Convert to sets and find intersection
set1 = set(list1)
set2 = set(list2)
common = set1 & set2

print("List 1:", list1)
print("List 2:", list2)
print("Common elements:", common)`
  },
  {
    id: 'set-3',
    title: 'Set Operations',
    difficulty: 'Medium',
    description: 'Perform union, intersection, and difference operations on two sets of student names.',
    hints: [
      'Union: | or .union()',
      'Intersection: & or .intersection()',
      'Difference: - or .difference()'
    ],
    starterCode: `# Students in two different classes
math_students = {"Alice", "Bob", "Charlie", "David"}
science_students = {"Charlie", "David", "Eve", "Frank"}

# Find:
# 1. All students (union)
# 2. Students in both classes (intersection)
# 3. Students only in math (difference)
# 4. Students only in science (difference)

# Your code here:
`,
    solution: `# Students in two different classes
math_students = {"Alice", "Bob", "Charlie", "David"}
science_students = {"Charlie", "David", "Eve", "Frank"}

# Union - all students
all_students = math_students | science_students
print("All students:", all_students)

# Intersection - in both classes
both_classes = math_students & science_students
print("In both classes:", both_classes)

# Difference - only in math
only_math = math_students - science_students
print("Only in math:", only_math)

# Difference - only in science
only_science = science_students - math_students
print("Only in science:", only_science)`
  },
  {
    id: 'set-4',
    title: 'Unique Words Counter',
    difficulty: 'Medium',
    description: 'Count unique words in a sentence using a set.',
    hints: [
      'Use .lower() for case-insensitive comparison',
      'Use .split() to get words',
      'len(set) gives unique count'
    ],
    starterCode: `# Count unique words in this sentence
sentence = "The quick brown fox jumps over the lazy dog the fox is quick"

# Find unique words (case-insensitive)
# Your code here:
`,
    solution: `# Count unique words in this sentence
sentence = "The quick brown fox jumps over the lazy dog the fox is quick"

# Convert to lowercase and split into words
words = sentence.lower().split()

# Create set of unique words
unique_words = set(words)

print("Total words:", len(words))
print("Unique words:", len(unique_words))
print("Unique word list:", unique_words)`
  }
];

export default setsAssignments;
