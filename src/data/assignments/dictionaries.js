export const dictionariesAssignments = [
  {
    id: 'dict-1',
    title: 'Word Counter',
    difficulty: 'Medium',
    description: 'Count the frequency of each word in a sentence.',
    hints: [
      'Split the string into words',
      'Use a dictionary to count occurrences',
      'Convert to lowercase for case-insensitive counting'
    ],
    starterCode: `def count_words(sentence):
    """Count frequency of each word"""
    # Your code here:
    pass

text = "the quick brown fox jumps over the lazy dog the fox"
print(count_words(text))
# Expected: {'the': 3, 'quick': 1, 'brown': 1, 'fox': 2, ...}
`,
    solution: `def count_words(sentence):
    """Count frequency of each word"""
    words = sentence.lower().split()
    word_count = {}
    
    for word in words:
        word_count[word] = word_count.get(word, 0) + 1
    
    return word_count

text = "the quick brown fox jumps over the lazy dog the fox"
print(count_words(text))`
  },
  {
    id: 'dict-2',
    title: 'Merge Dictionaries',
    difficulty: 'Medium',
    description: 'Merge two dictionaries, summing values for common keys.',
    hints: [
      'Iterate through both dictionaries',
      'For common keys, add the values',
      'Python 3.9+ has | operator for dict merge'
    ],
    starterCode: `def merge_dicts(dict1, dict2):
    """Merge two dicts, summing values for common keys"""
    # Your code here:
    pass

d1 = {'a': 1, 'b': 2, 'c': 3}
d2 = {'b': 3, 'c': 4, 'd': 5}
print(merge_dicts(d1, d2))
# Expected: {'a': 1, 'b': 5, 'c': 7, 'd': 5}
`,
    solution: `def merge_dicts(dict1, dict2):
    """Merge two dicts, summing values for common keys"""
    result = dict1.copy()
    
    for key, value in dict2.items():
        result[key] = result.get(key, 0) + value
    
    return result

d1 = {'a': 1, 'b': 2, 'c': 3}
d2 = {'b': 3, 'c': 4, 'd': 5}
print(merge_dicts(d1, d2))`
  },
  {
    id: 'dict-3',
    title: 'Group By First Letter',
    difficulty: 'Hard',
    description: 'Group a list of words by their first letter.',
    hints: [
      'Use a dictionary with lists as values',
      'setdefault() or defaultdict can help',
      'Iterate and append to appropriate group'
    ],
    starterCode: `def group_by_first_letter(words):
    """Group words by their first letter"""
    # Your code here:
    pass

words = ['apple', 'banana', 'avocado', 'blueberry', 'cherry', 'apricot']
print(group_by_first_letter(words))
# Expected: {'a': ['apple', 'avocado', 'apricot'], 'b': ['banana', 'blueberry'], 'c': ['cherry']}
`,
    solution: `def group_by_first_letter(words):
    """Group words by their first letter"""
    result = {}
    for word in words:
        first_letter = word[0].lower()
        if first_letter not in result:
            result[first_letter] = []
        result[first_letter].append(word)
    return result

words = ['apple', 'banana', 'avocado', 'blueberry', 'cherry', 'apricot']
print(group_by_first_letter(words))`
  }
];
