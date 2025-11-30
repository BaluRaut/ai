// String Manipulation & Algorithms - Job Interview Essentials
export const stringAlgorithmsAssignments = [
  {
    id: 'string-1',
    title: 'Reverse Words in String',
    difficulty: 'Medium',
    description: 'Reverse the order of words in a string. Keep words intact, just reverse their order.',
    hints: [
      'Split by spaces',
      'Reverse the list',
      'Join back together'
    ],
    starterCode: `def reverse_words(s):
    """
    Reverse word order in a string.
    
    "Hello World" -> "World Hello"
    "  the sky is blue  " -> "blue is sky the"
    
    Handle multiple spaces correctly.
    """
    # Your code here:
    pass

# Test cases
print(reverse_words("Hello World"))
print(reverse_words("  the sky is blue  "))
print(reverse_words("a good   example"))
`,
    solution: `def reverse_words(s):
    """
    Reverse word order in a string.
    split() handles multiple spaces automatically.
    """
    words = s.split()  # Splits on any whitespace
    return ' '.join(reversed(words))

# Test cases
print(reverse_words("Hello World"))
print(reverse_words("  the sky is blue  "))
print(reverse_words("a good   example"))`
  },
  {
    id: 'string-2',
    title: 'Longest Common Prefix',
    difficulty: 'Medium',
    description: 'Find the longest common prefix among an array of strings.',
    hints: [
      'Start with first string as prefix',
      'Shorten prefix until it matches all strings',
      'Or use zip to compare character by character'
    ],
    starterCode: `def longest_common_prefix(strs):
    """
    Find longest common prefix.
    
    ["flower","flow","flight"] -> "fl"
    ["dog","racecar","car"] -> ""
    """
    # Your code here:
    pass

# Test cases
print(longest_common_prefix(["flower", "flow", "flight"]))  # "fl"
print(longest_common_prefix(["dog", "racecar", "car"]))     # ""
print(longest_common_prefix(["interspecies", "interstellar", "interstate"]))  # "inters"
`,
    solution: `def longest_common_prefix(strs):
    """
    Using zip to compare characters across all strings.
    """
    if not strs:
        return ""
    
    prefix = []
    
    # zip stops at shortest string
    for chars in zip(*strs):
        if len(set(chars)) == 1:  # All same
            prefix.append(chars[0])
        else:
            break
    
    return ''.join(prefix)

# Test cases
print(longest_common_prefix(["flower", "flow", "flight"]))
print(longest_common_prefix(["dog", "racecar", "car"]))
print(longest_common_prefix(["interspecies", "interstellar", "interstate"]))`
  },
  {
    id: 'string-3',
    title: 'String Compression',
    difficulty: 'Medium',
    description: 'Implement basic string compression using counts of repeated characters. (Run-length encoding)',
    hints: [
      'Track current char and count',
      'When char changes, append to result',
      'Only compress if result is shorter'
    ],
    starterCode: `def compress_string(s):
    """
    Compress string using run-length encoding.
    Return original if compressed isn't shorter.
    
    "aabcccccaaa" -> "a2b1c5a3"
    "abc" -> "abc" (compressed "a1b1c1" is longer)
    """
    # Your code here:
    pass

# Test cases
print(compress_string("aabcccccaaa"))  # "a2b1c5a3"
print(compress_string("abc"))          # "abc"
print(compress_string("aaa"))          # "a3"
print(compress_string("aabbcc"))       # "aabbcc"
`,
    solution: `def compress_string(s):
    """
    Run-length encoding compression.
    """
    if not s:
        return s
    
    result = []
    count = 1
    
    for i in range(1, len(s)):
        if s[i] == s[i-1]:
            count += 1
        else:
            result.append(s[i-1] + str(count))
            count = 1
    
    # Don't forget last group
    result.append(s[-1] + str(count))
    
    compressed = ''.join(result)
    return compressed if len(compressed) < len(s) else s

# Test cases
print(compress_string("aabcccccaaa"))
print(compress_string("abc"))
print(compress_string("aaa"))
print(compress_string("aabbcc"))`
  },
  {
    id: 'string-4',
    title: 'Group Anagrams',
    difficulty: 'Medium',
    description: 'Given an array of strings, group anagrams together.',
    hints: [
      'Anagrams have same sorted characters',
      'Use sorted string as dictionary key',
      'Group strings with same key'
    ],
    starterCode: `def group_anagrams(strs):
    """
    Group anagrams together.
    
    ["eat","tea","tan","ate","nat","bat"]
    -> [["eat","tea","ate"], ["tan","nat"], ["bat"]]
    
    Order doesn't matter.
    """
    # Your code here:
    pass

# Test
result = group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
for group in result:
    print(sorted(group))
`,
    solution: `from collections import defaultdict

def group_anagrams(strs):
    """
    Group anagrams using sorted string as key.
    Time: O(n * k log k) where k is max string length
    """
    groups = defaultdict(list)
    
    for s in strs:
        # Sorted string is the key
        key = ''.join(sorted(s))
        groups[key].append(s)
    
    return list(groups.values())

# Test
result = group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
for group in result:
    print(sorted(group))`
  },
  {
    id: 'string-5',
    title: 'First Unique Character',
    difficulty: 'Easy',
    description: 'Find the first non-repeating character in a string and return its index.',
    hints: [
      'Count all character frequencies first',
      'Then find first with count 1',
      'Use Counter or dictionary'
    ],
    starterCode: `def first_unique_char(s):
    """
    Find index of first non-repeating character.
    Return -1 if none found.
    
    "leetcode" -> 0 (l is first unique)
    "loveleetcode" -> 2 (v is first unique)
    "aabb" -> -1
    """
    # Your code here:
    pass

# Test cases
print(first_unique_char("leetcode"))      # 0
print(first_unique_char("loveleetcode"))  # 2
print(first_unique_char("aabb"))          # -1
`,
    solution: `from collections import Counter

def first_unique_char(s):
    """
    Two-pass solution using Counter.
    Time: O(n), Space: O(1) - only 26 letters
    """
    count = Counter(s)
    
    for i, char in enumerate(s):
        if count[char] == 1:
            return i
    
    return -1

# Test cases
print(first_unique_char("leetcode"))
print(first_unique_char("loveleetcode"))
print(first_unique_char("aabb"))`
  },
  {
    id: 'string-6',
    title: 'Longest Substring Without Repeating',
    difficulty: 'Hard',
    description: 'Find the length of the longest substring without repeating characters. Classic sliding window problem.',
    hints: [
      'Use sliding window technique',
      'Track character positions in a dict',
      'Move left pointer when duplicate found'
    ],
    starterCode: `def length_of_longest_substring(s):
    """
    Find longest substring without repeating characters.
    
    "abcabcbb" -> 3 ("abc")
    "bbbbb" -> 1 ("b")
    "pwwkew" -> 3 ("wke")
    """
    # Your code here:
    pass

# Test cases
print(length_of_longest_substring("abcabcbb"))  # 3
print(length_of_longest_substring("bbbbb"))     # 1
print(length_of_longest_substring("pwwkew"))    # 3
print(length_of_longest_substring(""))          # 0
`,
    solution: `def length_of_longest_substring(s):
    """
    Sliding window with character position tracking.
    Time: O(n), Space: O(min(n, alphabet_size))
    """
    char_index = {}  # char -> last seen index
    max_length = 0
    left = 0
    
    for right, char in enumerate(s):
        if char in char_index and char_index[char] >= left:
            # Found duplicate in current window
            left = char_index[char] + 1
        
        char_index[char] = right
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Test cases
print(length_of_longest_substring("abcabcbb"))
print(length_of_longest_substring("bbbbb"))
print(length_of_longest_substring("pwwkew"))
print(length_of_longest_substring(""))`
  }
];

export default stringAlgorithmsAssignments;
