export const stringsAssignments = [
  {
    id: 'str-1',
    title: 'Palindrome Checker',
    difficulty: 'Easy',
    description: 'Check if a string is a palindrome (reads same forwards and backwards).',
    hints: [
      'Remove spaces and convert to lowercase',
      'Compare string with its reverse',
      'String reverse: s[::-1]'
    ],
    starterCode: `def is_palindrome(s):
    """Check if string is a palindrome"""
    # Your code here:
    pass

print(is_palindrome("racecar"))      # True
print(is_palindrome("A man a plan a canal Panama"))  # True
print(is_palindrome("hello"))        # False
`,
    solution: `def is_palindrome(s):
    """Check if string is a palindrome"""
    # Remove spaces and convert to lowercase
    clean = s.lower().replace(" ", "")
    # Compare with reverse
    return clean == clean[::-1]

print(is_palindrome("racecar"))
print(is_palindrome("A man a plan a canal Panama"))
print(is_palindrome("hello"))`
  },
  {
    id: 'str-2',
    title: 'Anagram Checker',
    difficulty: 'Medium',
    description: 'Check if two strings are anagrams of each other.',
    hints: [
      'Anagrams have same characters in different order',
      'Sort both strings and compare',
      'Or use character counting'
    ],
    starterCode: `def is_anagram(s1, s2):
    """Check if s1 and s2 are anagrams"""
    # Your code here:
    pass

print(is_anagram("listen", "silent"))  # True
print(is_anagram("hello", "world"))    # False
print(is_anagram("Dormitory", "Dirty room"))  # True
`,
    solution: `def is_anagram(s1, s2):
    """Check if s1 and s2 are anagrams"""
    # Clean both strings
    clean1 = s1.lower().replace(" ", "")
    clean2 = s2.lower().replace(" ", "")
    
    # Sort and compare
    return sorted(clean1) == sorted(clean2)

print(is_anagram("listen", "silent"))
print(is_anagram("hello", "world"))
print(is_anagram("Dormitory", "Dirty room"))`
  },
  {
    id: 'str-3',
    title: 'Title Case Converter',
    difficulty: 'Medium',
    description: 'Convert a sentence to title case (capitalize first letter of each word).',
    hints: [
      'Use the title() method for basic conversion',
      'Or split, capitalize each word, join',
      'Handle edge cases like all caps'
    ],
    starterCode: `def to_title_case(s):
    """Convert string to title case"""
    # Your code here:
    pass

print(to_title_case("hello world"))           # "Hello World"
print(to_title_case("THE QUICK BROWN FOX"))   # "The Quick Brown Fox"
print(to_title_case("python programming"))    # "Python Programming"
`,
    solution: `def to_title_case(s):
    """Convert string to title case"""
    # Method 1: Using title()
    return s.title()
    
    # Method 2: Manual implementation
    # words = s.lower().split()
    # return ' '.join(word.capitalize() for word in words)

print(to_title_case("hello world"))
print(to_title_case("THE QUICK BROWN FOX"))
print(to_title_case("python programming"))`
  }
];
