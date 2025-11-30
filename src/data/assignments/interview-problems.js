// Advanced Practice Problems - Interview & Job Ready
export const interviewProblemsAssignments = [
  {
    id: 'interview-1',
    title: 'Two Sum Problem',
    difficulty: 'Medium',
    description: 'Given an array of integers and a target sum, return indices of two numbers that add up to the target. This is a classic interview question asked at Google, Amazon, Facebook.',
    hints: [
      'Brute force: O(n²) - check every pair',
      'Optimal: Use a dictionary to store seen numbers',
      'For each number, check if (target - number) exists in dict'
    ],
    starterCode: `def two_sum(nums, target):
    """
    Find two numbers that add up to target.
    Return their indices.
    
    Example:
    nums = [2, 7, 11, 15], target = 9
    Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
    """
    # Your code here:
    pass

# Test cases
print(two_sum([2, 7, 11, 15], 9))  # [0, 1]
print(two_sum([3, 2, 4], 6))       # [1, 2]
print(two_sum([3, 3], 6))          # [0, 1]
`,
    solution: `def two_sum(nums, target):
    """
    Find two numbers that add up to target.
    Using hash map for O(n) time complexity.
    """
    seen = {}  # value -> index
    
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    
    return []

# Test cases
print(two_sum([2, 7, 11, 15], 9))  # [0, 1]
print(two_sum([3, 2, 4], 6))       # [1, 2]
print(two_sum([3, 3], 6))          # [0, 1]`
  },
  {
    id: 'interview-2',
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    description: 'Check if a string is a valid palindrome, considering only alphanumeric characters and ignoring case. Common in phone screens.',
    hints: [
      'Remove non-alphanumeric characters',
      'Convert to lowercase',
      'Compare string with its reverse'
    ],
    starterCode: `def is_palindrome(s):
    """
    Check if string is palindrome (ignore spaces, punctuation, case)
    
    Examples:
    "A man, a plan, a canal: Panama" -> True
    "race a car" -> False
    """
    # Your code here:
    pass

# Test cases
print(is_palindrome("A man, a plan, a canal: Panama"))  # True
print(is_palindrome("race a car"))  # False
print(is_palindrome("Was it a car or a cat I saw?"))  # True
`,
    solution: `def is_palindrome(s):
    """
    Check if string is palindrome (ignore spaces, punctuation, case)
    """
    # Keep only alphanumeric and convert to lowercase
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    
    # Compare with reverse
    return cleaned == cleaned[::-1]

# Test cases
print(is_palindrome("A man, a plan, a canal: Panama"))  # True
print(is_palindrome("race a car"))  # False
print(is_palindrome("Was it a car or a cat I saw?"))  # True`
  },
  {
    id: 'interview-3',
    title: 'FizzBuzz',
    difficulty: 'Easy',
    description: 'The classic FizzBuzz problem - asked in almost every coding interview to filter out candidates who cannot code.',
    hints: [
      'Check divisibility with modulo %',
      'Check 15 first (divisible by both 3 and 5)',
      'Or check 3 and 5 separately and build string'
    ],
    starterCode: `def fizzbuzz(n):
    """
    Print numbers 1 to n, but:
    - For multiples of 3, print "Fizz"
    - For multiples of 5, print "Buzz"
    - For multiples of both, print "FizzBuzz"
    
    Return list of results.
    """
    # Your code here:
    pass

# Test
result = fizzbuzz(15)
print(result)
# Expected: ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']
`,
    solution: `def fizzbuzz(n):
    """
    Print numbers 1 to n with Fizz/Buzz rules.
    """
    result = []
    
    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    
    return result

# Test
result = fizzbuzz(15)
print(result)
for item in result:
    print(item)`
  },
  {
    id: 'interview-4',
    title: 'Reverse Linked List (Conceptual)',
    difficulty: 'Medium',
    description: 'Implement a singly linked list and reverse it. Fundamental data structure question.',
    hints: [
      'Need a Node class with value and next',
      'Use three pointers: prev, current, next',
      'Iterate and flip the links'
    ],
    starterCode: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    """
    Reverse a singly linked list.
    Return the new head.
    """
    # Your code here:
    pass

def list_to_array(head):
    """Helper to convert list to array for printing"""
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

# Create: 1 -> 2 -> 3 -> 4 -> 5
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
print("Original:", list_to_array(head))

reversed_head = reverse_list(head)
print("Reversed:", list_to_array(reversed_head))
`,
    solution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    """
    Reverse a singly linked list iteratively.
    Time: O(n), Space: O(1)
    """
    prev = None
    current = head
    
    while current:
        next_temp = current.next  # Save next
        current.next = prev       # Reverse link
        prev = current            # Move prev forward
        current = next_temp       # Move current forward
    
    return prev

def list_to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

# Create: 1 -> 2 -> 3 -> 4 -> 5
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
print("Original:", list_to_array(head))

reversed_head = reverse_list(head)
print("Reversed:", list_to_array(reversed_head))`
  },
  {
    id: 'interview-5',
    title: 'Valid Parentheses',
    difficulty: 'Medium',
    description: 'Check if a string of brackets is valid. Classic stack problem asked at top companies.',
    hints: [
      'Use a stack (list in Python)',
      'Push opening brackets',
      'Pop and match for closing brackets',
      'Stack should be empty at end'
    ],
    starterCode: `def is_valid(s):
    """
    Check if brackets are valid.
    Valid: (), [], {}, ([{}])
    Invalid: (], ([)], ((()
    """
    # Your code here:
    pass

# Test cases
print(is_valid("()"))        # True
print(is_valid("()[]{}"))    # True
print(is_valid("(]"))        # False
print(is_valid("([)]"))      # False
print(is_valid("{[]}"))      # True
print(is_valid("(("))        # False
`,
    solution: `def is_valid(s):
    """
    Check if brackets are valid using a stack.
    Time: O(n), Space: O(n)
    """
    stack = []
    mapping = {')': '(', ']': '[', '}': '{'}
    
    for char in s:
        if char in mapping:
            # Closing bracket
            if not stack or stack[-1] != mapping[char]:
                return False
            stack.pop()
        else:
            # Opening bracket
            stack.append(char)
    
    return len(stack) == 0

# Test cases
print(is_valid("()"))        # True
print(is_valid("()[]{}"))    # True
print(is_valid("(]"))        # False
print(is_valid("([)]"))      # False
print(is_valid("{[]}"))      # True
print(is_valid("(("))        # False`
  },
  {
    id: 'interview-6',
    title: 'Find Duplicates',
    difficulty: 'Easy',
    description: 'Find all duplicate elements in an array. Tests understanding of sets and time complexity.',
    hints: [
      'Use a set to track seen elements',
      'Use another set for duplicates',
      'O(n) time, O(n) space'
    ],
    starterCode: `def find_duplicates(nums):
    """
    Find all elements that appear more than once.
    Return as a list.
    
    Example: [1,2,3,1,2,4] -> [1,2]
    """
    # Your code here:
    pass

# Test cases
print(find_duplicates([1, 2, 3, 1, 2, 4]))  # [1, 2]
print(find_duplicates([1, 1, 1, 1]))        # [1]
print(find_duplicates([1, 2, 3, 4]))        # []
`,
    solution: `def find_duplicates(nums):
    """
    Find all elements that appear more than once.
    Time: O(n), Space: O(n)
    """
    seen = set()
    duplicates = set()
    
    for num in nums:
        if num in seen:
            duplicates.add(num)
        seen.add(num)
    
    return list(duplicates)

# Test cases
print(find_duplicates([1, 2, 3, 1, 2, 4]))  # [1, 2]
print(find_duplicates([1, 1, 1, 1]))        # [1]
print(find_duplicates([1, 2, 3, 4]))        # []`
  },
  {
    id: 'interview-7',
    title: 'Anagram Check',
    difficulty: 'Easy',
    description: 'Check if two strings are anagrams. Tests string manipulation and counting.',
    hints: [
      'Anagrams have same characters, different order',
      'Sort both strings and compare',
      'Or count character frequencies'
    ],
    starterCode: `def is_anagram(s1, s2):
    """
    Check if s1 and s2 are anagrams.
    
    Example: "listen" and "silent" -> True
    """
    # Your code here:
    pass

# Test cases
print(is_anagram("listen", "silent"))  # True
print(is_anagram("hello", "world"))    # False
print(is_anagram("anagram", "nagaram"))  # True
print(is_anagram("rat", "car"))        # False
`,
    solution: `def is_anagram(s1, s2):
    """
    Check if s1 and s2 are anagrams.
    Method 1: Sorting - O(n log n)
    Method 2: Counter - O(n)
    """
    # Method 1: Sorting
    # return sorted(s1.lower()) == sorted(s2.lower())
    
    # Method 2: Counter (more efficient)
    if len(s1) != len(s2):
        return False
    
    count = {}
    for c in s1.lower():
        count[c] = count.get(c, 0) + 1
    
    for c in s2.lower():
        if c not in count:
            return False
        count[c] -= 1
        if count[c] < 0:
            return False
    
    return True

# Test cases
print(is_anagram("listen", "silent"))  # True
print(is_anagram("hello", "world"))    # False
print(is_anagram("anagram", "nagaram"))  # True
print(is_anagram("rat", "car"))        # False`
  },
  {
    id: 'interview-8',
    title: 'Maximum Subarray (Kadane\'s)',
    difficulty: 'Hard',
    description: 'Find the contiguous subarray with the largest sum. Classic dynamic programming problem.',
    hints: [
      'Kadane\'s Algorithm',
      'Track current sum and max sum',
      'Reset current sum if it goes negative'
    ],
    starterCode: `def max_subarray(nums):
    """
    Find the contiguous subarray with largest sum.
    Return the maximum sum.
    
    Example: [-2,1,-3,4,-1,2,1,-5,4] -> 6
    (subarray [4,-1,2,1] has sum 6)
    """
    # Your code here:
    pass

# Test cases
print(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))  # 6
print(max_subarray([1]))                       # 1
print(max_subarray([5,4,-1,7,8]))              # 23
print(max_subarray([-1,-2,-3]))                # -1
`,
    solution: `def max_subarray(nums):
    """
    Kadane's Algorithm
    Time: O(n), Space: O(1)
    """
    if not nums:
        return 0
    
    current_sum = nums[0]
    max_sum = nums[0]
    
    for i in range(1, len(nums)):
        # Either extend previous subarray or start new
        current_sum = max(nums[i], current_sum + nums[i])
        max_sum = max(max_sum, current_sum)
    
    return max_sum

# Test cases
print(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))  # 6
print(max_subarray([1]))                       # 1
print(max_subarray([5,4,-1,7,8]))              # 23
print(max_subarray([-1,-2,-3]))                # -1`
  },
  {
    id: 'interview-9',
    title: 'Merge Sorted Arrays',
    difficulty: 'Medium',
    description: 'Merge two sorted arrays into one sorted array. Tests understanding of two-pointer technique.',
    hints: [
      'Use two pointers, one for each array',
      'Compare elements, add smaller one',
      'Handle remaining elements'
    ],
    starterCode: `def merge_sorted(arr1, arr2):
    """
    Merge two sorted arrays into one sorted array.
    
    Example:
    arr1 = [1, 3, 5, 7]
    arr2 = [2, 4, 6, 8]
    Result: [1, 2, 3, 4, 5, 6, 7, 8]
    """
    # Your code here:
    pass

# Test cases
print(merge_sorted([1, 3, 5, 7], [2, 4, 6, 8]))
# [1, 2, 3, 4, 5, 6, 7, 8]

print(merge_sorted([1, 2, 3], [4, 5, 6]))
# [1, 2, 3, 4, 5, 6]

print(merge_sorted([], [1, 2, 3]))
# [1, 2, 3]
`,
    solution: `def merge_sorted(arr1, arr2):
    """
    Merge two sorted arrays using two pointers.
    Time: O(n + m), Space: O(n + m)
    """
    result = []
    i, j = 0, 0
    
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            result.append(arr1[i])
            i += 1
        else:
            result.append(arr2[j])
            j += 1
    
    # Add remaining elements
    result.extend(arr1[i:])
    result.extend(arr2[j:])
    
    return result

# Test cases
print(merge_sorted([1, 3, 5, 7], [2, 4, 6, 8]))
print(merge_sorted([1, 2, 3], [4, 5, 6]))
print(merge_sorted([], [1, 2, 3]))`
  },
  {
    id: 'interview-10',
    title: 'Binary Search',
    difficulty: 'Medium',
    description: 'Implement binary search. Fundamental algorithm every developer must know.',
    hints: [
      'Use left and right pointers',
      'Find mid point',
      'Eliminate half each iteration',
      'O(log n) time complexity'
    ],
    starterCode: `def binary_search(nums, target):
    """
    Find target in sorted array.
    Return index if found, -1 if not.
    
    Must be O(log n) time complexity!
    """
    # Your code here:
    pass

# Test cases
print(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))  # 4
print(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 1))  # 0
print(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 9))  # 8
print(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)) # -1
`,
    solution: `def binary_search(nums, target):
    """
    Binary Search - O(log n)
    """
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# Test cases
print(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))  # 4
print(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 1))  # 0
print(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 9))  # 8
print(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)) # -1`
  }
];

export default interviewProblemsAssignments;
