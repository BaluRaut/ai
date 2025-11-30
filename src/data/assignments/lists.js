export const listsAssignments = [
  {
    id: 'list-1',
    title: 'List Operations',
    difficulty: 'Easy',
    description: 'Perform basic list operations: find max, min, sum, and average.',
    hints: [
      'Use built-in functions: max(), min(), sum(), len()',
      'Average = sum / length',
      'Handle empty list case'
    ],
    starterCode: `def analyze_list(numbers):
    """Return a dictionary with max, min, sum, and average"""
    # Your code here:
    pass

result = analyze_list([10, 5, 8, 12, 3, 7])
print(result)
# Expected: {'max': 12, 'min': 3, 'sum': 45, 'average': 7.5}
`,
    solution: `def analyze_list(numbers):
    """Return a dictionary with max, min, sum, and average"""
    if not numbers:
        return {'max': None, 'min': None, 'sum': 0, 'average': None}
    
    return {
        'max': max(numbers),
        'min': min(numbers),
        'sum': sum(numbers),
        'average': sum(numbers) / len(numbers)
    }

result = analyze_list([10, 5, 8, 12, 3, 7])
print(result)`
  },
  {
    id: 'list-2',
    title: 'Remove Duplicates',
    difficulty: 'Medium',
    description: 'Remove duplicates from a list while preserving order.',
    hints: [
      'Use a set to track seen items',
      'Or use dict.fromkeys() trick',
      'List comprehension can be used'
    ],
    starterCode: `def remove_duplicates(lst):
    """Remove duplicates while preserving order"""
    # Your code here:
    pass

print(remove_duplicates([1, 2, 2, 3, 4, 4, 5]))
print(remove_duplicates(['a', 'b', 'a', 'c', 'b']))
`,
    solution: `def remove_duplicates(lst):
    """Remove duplicates while preserving order"""
    seen = set()
    result = []
    for item in lst:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

# Alternative: return list(dict.fromkeys(lst))

print(remove_duplicates([1, 2, 2, 3, 4, 4, 5]))
print(remove_duplicates(['a', 'b', 'a', 'c', 'b']))`
  },
  {
    id: 'list-3',
    title: 'List Comprehension',
    difficulty: 'Medium',
    description: 'Use list comprehension to create: squares, evens, and filtered strings.',
    hints: [
      '[expression for item in iterable]',
      '[expression for item in iterable if condition]',
      'Can be used with any iterable'
    ],
    starterCode: `# Task 1: Create a list of squares from 1 to 10
squares = None  # Your code here

# Task 2: Filter even numbers from a list
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = None  # Your code here

# Task 3: Extract uppercase words from a list
words = ["Hello", "WORLD", "python", "AI", "machine"]
uppercase_words = None  # Your code here

print(squares)         # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
print(evens)           # [2, 4, 6, 8, 10]
print(uppercase_words) # ['WORLD', 'AI']
`,
    solution: `# Task 1: Create a list of squares from 1 to 10
squares = [x**2 for x in range(1, 11)]

# Task 2: Filter even numbers from a list
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = [x for x in numbers if x % 2 == 0]

# Task 3: Extract uppercase words from a list
words = ["Hello", "WORLD", "python", "AI", "machine"]
uppercase_words = [w for w in words if w.isupper()]

print(squares)
print(evens)
print(uppercase_words)`
  }
];
