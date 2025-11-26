// Interview Preparation - Coding Challenges (LeetCode-style)

export const codingChallenges = {
  // ==================== EASY ====================
  easy: [
    {
      id: 'two-sum',
      title: 'Two Sum',
      difficulty: 'Easy',
      companies: ['Google', 'Amazon', 'Meta', 'Microsoft'],
      category: 'Arrays & Hashing',
      description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers that add up to target.

You may assume that each input has exactly one solution, and you may not use the same element twice.`,
      examples: [
        {
          input: 'nums = [2,7,11,15], target = 9',
          output: '[0,1]',
          explanation: 'nums[0] + nums[1] = 2 + 7 = 9'
        },
        {
          input: 'nums = [3,2,4], target = 6',
          output: '[1,2]',
          explanation: 'nums[1] + nums[2] = 2 + 4 = 6'
        }
      ],
      starterCode: `def two_sum(nums, target):
    # Your code here
    pass

# Test
print(two_sum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(two_sum([3, 2, 4], 6))       # Expected: [1, 2]`,
      solution: `def two_sum(nums, target):
    """
    Time: O(n), Space: O(n)
    Use hash map to store complement
    """
    seen = {}  # value -> index
    
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    
    return []

# Test
print(two_sum([2, 7, 11, 15], 9))  # [0, 1]
print(two_sum([3, 2, 4], 6))       # [1, 2]
print(two_sum([3, 3], 6))          # [0, 1]`,
      hints: [
        'Think about what value you need to find for each number',
        'Can you check if the complement exists in O(1)?',
        'Use a hash map to store seen values'
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pattern: 'Hash Map'
    },
    {
      id: 'valid-parentheses',
      title: 'Valid Parentheses',
      difficulty: 'Easy',
      companies: ['Amazon', 'Bloomberg', 'Meta'],
      category: 'Stack',
      description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
      examples: [
        { input: 's = "()"', output: 'true', explanation: 'Simple valid pair' },
        { input: 's = "()[]{}"', output: 'true', explanation: 'Multiple valid pairs' },
        { input: 's = "(]"', output: 'false', explanation: 'Mismatched brackets' }
      ],
      starterCode: `def is_valid(s):
    # Your code here
    pass

# Test
print(is_valid("()"))      # True
print(is_valid("()[]{}"))  # True
print(is_valid("(]"))      # False
print(is_valid("([)]"))    # False`,
      solution: `def is_valid(s):
    """
    Time: O(n), Space: O(n)
    Use stack to match brackets
    """
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
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

# Test
print(is_valid("()"))      # True
print(is_valid("()[]{}"))  # True
print(is_valid("(]"))      # False
print(is_valid("([)]"))    # False
print(is_valid("{[]}"))    # True`,
      hints: [
        'What data structure is good for matching pairs?',
        'Process characters one by one',
        'For closing brackets, check if it matches the most recent opening'
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pattern: 'Stack'
    },
    {
      id: 'merge-sorted-arrays',
      title: 'Merge Two Sorted Arrays',
      difficulty: 'Easy',
      companies: ['Microsoft', 'Amazon', 'Apple'],
      category: 'Two Pointers',
      description: `Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively.
nums1 has a size equal to m + n to hold additional elements from nums2.`,
      examples: [
        {
          input: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3',
          output: '[1,2,2,3,5,6]',
          explanation: 'Merged and sorted'
        }
      ],
      starterCode: `def merge(nums1, m, nums2, n):
    # Your code here - modify nums1 in-place
    pass

# Test
nums1 = [1, 2, 3, 0, 0, 0]
merge(nums1, 3, [2, 5, 6], 3)
print(nums1)  # Expected: [1, 2, 2, 3, 5, 6]`,
      solution: `def merge(nums1, m, nums2, n):
    """
    Time: O(m+n), Space: O(1)
    Start from the end to avoid overwriting
    """
    p1 = m - 1      # Pointer for nums1 elements
    p2 = n - 1      # Pointer for nums2
    p = m + n - 1   # Pointer for placement
    
    while p1 >= 0 and p2 >= 0:
        if nums1[p1] > nums2[p2]:
            nums1[p] = nums1[p1]
            p1 -= 1
        else:
            nums1[p] = nums2[p2]
            p2 -= 1
        p -= 1
    
    # Copy remaining nums2 elements
    while p2 >= 0:
        nums1[p] = nums2[p2]
        p2 -= 1
        p -= 1

# Test
nums1 = [1, 2, 3, 0, 0, 0]
merge(nums1, 3, [2, 5, 6], 3)
print(nums1)  # [1, 2, 2, 3, 5, 6]`,
      hints: [
        'Start from the end to avoid overwriting elements',
        'Use three pointers',
        'Handle remaining elements after main loop'
      ],
      timeComplexity: 'O(m+n)',
      spaceComplexity: 'O(1)',
      pattern: 'Two Pointers'
    },
    {
      id: 'max-subarray',
      title: 'Maximum Subarray',
      difficulty: 'Easy',
      companies: ['Amazon', 'Microsoft', 'Apple', 'LinkedIn'],
      category: 'Dynamic Programming',
      description: `Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.`,
      examples: [
        {
          input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
          output: '6',
          explanation: '[4,-1,2,1] has the largest sum = 6'
        },
        {
          input: 'nums = [5,4,-1,7,8]',
          output: '23',
          explanation: 'Entire array has largest sum'
        }
      ],
      starterCode: `def max_subarray(nums):
    # Your code here
    pass

# Test
print(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(max_subarray([5,4,-1,7,8]))              # Expected: 23
print(max_subarray([-1]))                       # Expected: -1`,
      solution: `def max_subarray(nums):
    """
    Time: O(n), Space: O(1)
    Kadane's Algorithm
    """
    max_sum = nums[0]
    current_sum = nums[0]
    
    for i in range(1, len(nums)):
        # Either extend current subarray or start new
        current_sum = max(nums[i], current_sum + nums[i])
        max_sum = max(max_sum, current_sum)
    
    return max_sum

# Test
print(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))  # 6
print(max_subarray([5,4,-1,7,8]))              # 23
print(max_subarray([-1]))                       # -1

# With indices (bonus)
def max_subarray_with_indices(nums):
    max_sum = current_sum = nums[0]
    start = end = temp_start = 0
    
    for i in range(1, len(nums)):
        if nums[i] > current_sum + nums[i]:
            current_sum = nums[i]
            temp_start = i
        else:
            current_sum += nums[i]
        
        if current_sum > max_sum:
            max_sum = current_sum
            start = temp_start
            end = i
    
    return max_sum, nums[start:end+1]

print(max_subarray_with_indices([-2,1,-3,4,-1,2,1,-5,4]))`,
      hints: [
        'At each position, decide: extend current subarray or start new?',
        'Keep track of both current and overall maximum',
        'This is Kadane\'s Algorithm'
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      pattern: 'Kadane\'s Algorithm'
    }
  ],

  // ==================== MEDIUM ====================
  medium: [
    {
      id: 'longest-substring',
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium',
      companies: ['Amazon', 'Google', 'Meta', 'Microsoft', 'Bloomberg'],
      category: 'Sliding Window',
      description: `Given a string s, find the length of the longest substring without repeating characters.`,
      examples: [
        {
          input: 's = "abcabcbb"',
          output: '3',
          explanation: 'The answer is "abc", with length 3'
        },
        {
          input: 's = "bbbbb"',
          output: '1',
          explanation: 'The answer is "b", with length 1'
        },
        {
          input: 's = "pwwkew"',
          output: '3',
          explanation: 'The answer is "wke", with length 3'
        }
      ],
      starterCode: `def length_of_longest_substring(s):
    # Your code here
    pass

# Test
print(length_of_longest_substring("abcabcbb"))  # Expected: 3
print(length_of_longest_substring("bbbbb"))     # Expected: 1
print(length_of_longest_substring("pwwkew"))    # Expected: 3`,
      solution: `def length_of_longest_substring(s):
    """
    Time: O(n), Space: O(min(m,n)) where m is charset size
    Sliding Window with Hash Map
    """
    char_index = {}  # char -> last index
    max_length = 0
    left = 0
    
    for right, char in enumerate(s):
        # If char seen and within current window
        if char in char_index and char_index[char] >= left:
            left = char_index[char] + 1
        
        char_index[char] = right
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Test
print(length_of_longest_substring("abcabcbb"))  # 3
print(length_of_longest_substring("bbbbb"))     # 1
print(length_of_longest_substring("pwwkew"))    # 3
print(length_of_longest_substring(""))          # 0
print(length_of_longest_substring("abba"))      # 2`,
      hints: [
        'Use sliding window technique',
        'Track the last position of each character',
        'Move left pointer when you find a duplicate'
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(min(m,n))',
      pattern: 'Sliding Window'
    },
    {
      id: 'three-sum',
      title: '3Sum',
      difficulty: 'Medium',
      companies: ['Amazon', 'Meta', 'Microsoft', 'Apple', 'Google'],
      category: 'Two Pointers',
      description: `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.`,
      examples: [
        {
          input: 'nums = [-1,0,1,2,-1,-4]',
          output: '[[-1,-1,2],[-1,0,1]]',
          explanation: 'Two triplets sum to 0'
        },
        {
          input: 'nums = [0,1,1]',
          output: '[]',
          explanation: 'No triplets sum to 0'
        }
      ],
      starterCode: `def three_sum(nums):
    # Your code here
    pass

# Test
print(three_sum([-1,0,1,2,-1,-4]))  # [[-1,-1,2],[-1,0,1]]
print(three_sum([0,1,1]))           # []
print(three_sum([0,0,0]))           # [[0,0,0]]`,
      solution: `def three_sum(nums):
    """
    Time: O(n²), Space: O(1) excluding output
    Sort + Two Pointers
    """
    nums.sort()
    result = []
    n = len(nums)
    
    for i in range(n - 2):
        # Skip duplicates for i
        if i > 0 and nums[i] == nums[i-1]:
            continue
        
        # Two pointers for remaining sum
        left, right = i + 1, n - 1
        target = -nums[i]
        
        while left < right:
            current_sum = nums[left] + nums[right]
            
            if current_sum == target:
                result.append([nums[i], nums[left], nums[right]])
                
                # Skip duplicates
                while left < right and nums[left] == nums[left+1]:
                    left += 1
                while left < right and nums[right] == nums[right-1]:
                    right -= 1
                
                left += 1
                right -= 1
            elif current_sum < target:
                left += 1
            else:
                right -= 1
    
    return result

# Test
print(three_sum([-1,0,1,2,-1,-4]))  # [[-1,-1,2],[-1,0,1]]
print(three_sum([0,1,1]))           # []
print(three_sum([0,0,0]))           # [[0,0,0]]`,
      hints: [
        'Sort the array first',
        'Fix one number, use two pointers for the other two',
        'Skip duplicates to avoid duplicate triplets'
      ],
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      pattern: 'Two Pointers'
    },
    {
      id: 'binary-tree-level-order',
      title: 'Binary Tree Level Order Traversal',
      difficulty: 'Medium',
      companies: ['Meta', 'Amazon', 'Microsoft', 'Bloomberg'],
      category: 'Trees & BFS',
      description: `Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).`,
      examples: [
        {
          input: 'root = [3,9,20,null,null,15,7]',
          output: '[[3],[9,20],[15,7]]',
          explanation: 'Level by level from top to bottom'
        }
      ],
      starterCode: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def level_order(root):
    # Your code here
    pass

# Test
root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

print(level_order(root))  # Expected: [[3], [9, 20], [15, 7]]`,
      solution: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def level_order(root):
    """
    Time: O(n), Space: O(n)
    BFS with queue
    """
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result

# Test
root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

print(level_order(root))  # [[3], [9, 20], [15, 7]]
print(level_order(None))  # []`,
      hints: [
        'Use BFS (Breadth-First Search)',
        'Process one level at a time',
        'Track level size before processing'
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pattern: 'BFS'
    },
    {
      id: 'lru-cache',
      title: 'LRU Cache',
      difficulty: 'Medium',
      companies: ['Amazon', 'Meta', 'Microsoft', 'Google', 'Bloomberg'],
      category: 'Design',
      description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
- int get(int key) Return the value of the key if exists, otherwise return -1.
- void put(int key, int value) Update or insert the value. When capacity is reached, evict the least recently used key.

get and put must each run in O(1) average time complexity.`,
      examples: [
        {
          input: '["LRUCache","put","put","get","put","get","put","get","get","get"][[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]',
          output: '[null,null,null,1,null,-1,null,-1,3,4]',
          explanation: 'Operations on LRU cache with capacity 2'
        }
      ],
      starterCode: `class LRUCache:
    def __init__(self, capacity: int):
        # Your code here
        pass
    
    def get(self, key: int) -> int:
        # Your code here
        pass
    
    def put(self, key: int, value: int) -> None:
        # Your code here
        pass

# Test
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))    # Expected: 1
cache.put(3, 3)        # Evicts key 2
print(cache.get(2))    # Expected: -1
cache.put(4, 4)        # Evicts key 1
print(cache.get(1))    # Expected: -1
print(cache.get(3))    # Expected: 3
print(cache.get(4))    # Expected: 4`,
      solution: `class Node:
    def __init__(self, key=0, val=0):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None

class LRUCache:
    """
    Time: O(1) for both get and put
    Space: O(capacity)
    Hash Map + Doubly Linked List
    """
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}  # key -> node
        
        # Dummy head and tail
        self.head = Node()
        self.tail = Node()
        self.head.next = self.tail
        self.tail.prev = self.head
    
    def _add_to_front(self, node):
        """Add node right after head (most recent)."""
        node.prev = self.head
        node.next = self.head.next
        self.head.next.prev = node
        self.head.next = node
    
    def _remove(self, node):
        """Remove node from list."""
        node.prev.next = node.next
        node.next.prev = node.prev
    
    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        
        node = self.cache[key]
        # Move to front (most recently used)
        self._remove(node)
        self._add_to_front(node)
        return node.val
    
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            # Update existing
            node = self.cache[key]
            node.val = value
            self._remove(node)
            self._add_to_front(node)
        else:
            # Add new
            if len(self.cache) >= self.capacity:
                # Evict LRU (node before tail)
                lru = self.tail.prev
                self._remove(lru)
                del self.cache[lru.key]
            
            node = Node(key, value)
            self.cache[key] = node
            self._add_to_front(node)

# Test
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))    # 1
cache.put(3, 3)        # Evicts key 2
print(cache.get(2))    # -1
cache.put(4, 4)        # Evicts key 1
print(cache.get(1))    # -1
print(cache.get(3))    # 3
print(cache.get(4))    # 4`,
      hints: [
        'Need O(1) lookup: use hash map',
        'Need O(1) ordering: use doubly linked list',
        'Most recent at front, least recent at back'
      ],
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(capacity)',
      pattern: 'Hash Map + Linked List'
    }
  ],

  // ==================== HARD ====================
  hard: [
    {
      id: 'median-two-sorted-arrays',
      title: 'Median of Two Sorted Arrays',
      difficulty: 'Hard',
      companies: ['Amazon', 'Google', 'Microsoft', 'Apple', 'Goldman Sachs'],
      category: 'Binary Search',
      description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log(m+n)).`,
      examples: [
        {
          input: 'nums1 = [1,3], nums2 = [2]',
          output: '2.0',
          explanation: 'Merged array = [1,2,3], median is 2'
        },
        {
          input: 'nums1 = [1,2], nums2 = [3,4]',
          output: '2.5',
          explanation: 'Merged array = [1,2,3,4], median is (2+3)/2 = 2.5'
        }
      ],
      starterCode: `def find_median_sorted_arrays(nums1, nums2):
    # Your code here
    pass

# Test
print(find_median_sorted_arrays([1, 3], [2]))       # Expected: 2.0
print(find_median_sorted_arrays([1, 2], [3, 4]))    # Expected: 2.5
print(find_median_sorted_arrays([0, 0], [0, 0]))    # Expected: 0.0`,
      solution: `def find_median_sorted_arrays(nums1, nums2):
    """
    Time: O(log(min(m,n))), Space: O(1)
    Binary search on smaller array
    """
    # Ensure nums1 is smaller
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    
    m, n = len(nums1), len(nums2)
    total = m + n
    half = total // 2
    
    left, right = 0, m
    
    while left <= right:
        i = (left + right) // 2  # Partition point in nums1
        j = half - i              # Partition point in nums2
        
        # Get values at partition boundaries
        nums1_left = nums1[i-1] if i > 0 else float('-inf')
        nums1_right = nums1[i] if i < m else float('inf')
        nums2_left = nums2[j-1] if j > 0 else float('-inf')
        nums2_right = nums2[j] if j < n else float('inf')
        
        # Check if valid partition
        if nums1_left <= nums2_right and nums2_left <= nums1_right:
            # Found correct partition
            if total % 2 == 1:
                return min(nums1_right, nums2_right)
            else:
                return (max(nums1_left, nums2_left) + 
                        min(nums1_right, nums2_right)) / 2
        elif nums1_left > nums2_right:
            right = i - 1
        else:
            left = i + 1
    
    return 0.0

# Test
print(find_median_sorted_arrays([1, 3], [2]))       # 2.0
print(find_median_sorted_arrays([1, 2], [3, 4]))    # 2.5
print(find_median_sorted_arrays([0, 0], [0, 0]))    # 0.0
print(find_median_sorted_arrays([], [1]))           # 1.0`,
      hints: [
        'Binary search on the smaller array',
        'Find partition where left elements ≤ right elements',
        'Handle edge cases with infinity'
      ],
      timeComplexity: 'O(log(min(m,n)))',
      spaceComplexity: 'O(1)',
      pattern: 'Binary Search'
    },
    {
      id: 'word-ladder',
      title: 'Word Ladder',
      difficulty: 'Hard',
      companies: ['Amazon', 'Meta', 'Microsoft', 'Lyft'],
      category: 'BFS',
      description: `Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord.

Rules:
- Only one letter can be changed at a time.
- Each transformed word must exist in wordList.
Return 0 if there is no such transformation sequence.`,
      examples: [
        {
          input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
          output: '5',
          explanation: 'hit -> hot -> dot -> dog -> cog'
        }
      ],
      starterCode: `from collections import deque

def ladder_length(begin_word, end_word, word_list):
    # Your code here
    pass

# Test
print(ladder_length("hit", "cog", ["hot","dot","dog","lot","log","cog"]))  # 5
print(ladder_length("hit", "cog", ["hot","dot","dog","lot","log"]))        # 0`,
      solution: `from collections import deque, defaultdict

def ladder_length(begin_word, end_word, word_list):
    """
    Time: O(M² × N) where M is word length, N is word list size
    Space: O(M² × N)
    BFS with pattern matching
    """
    if end_word not in word_list:
        return 0
    
    word_list = set(word_list)
    word_len = len(begin_word)
    
    # Create pattern -> words mapping
    # "hot" -> "*ot", "h*t", "ho*"
    patterns = defaultdict(list)
    for word in word_list:
        for i in range(word_len):
            pattern = word[:i] + '*' + word[i+1:]
            patterns[pattern].append(word)
    
    # BFS
    queue = deque([(begin_word, 1)])
    visited = {begin_word}
    
    while queue:
        word, steps = queue.popleft()
        
        for i in range(word_len):
            pattern = word[:i] + '*' + word[i+1:]
            
            for neighbor in patterns[pattern]:
                if neighbor == end_word:
                    return steps + 1
                
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append((neighbor, steps + 1))
    
    return 0

# Test
print(ladder_length("hit", "cog", ["hot","dot","dog","lot","log","cog"]))  # 5
print(ladder_length("hit", "cog", ["hot","dot","dog","lot","log"]))        # 0`,
      hints: [
        'Model as graph problem - words are nodes',
        'Use BFS for shortest path',
        'Use pattern matching to find neighbors efficiently'
      ],
      timeComplexity: 'O(M² × N)',
      spaceComplexity: 'O(M² × N)',
      pattern: 'BFS + Pattern Matching'
    }
  ],

  // ==================== ML-SPECIFIC ====================
  mlSpecific: [
    {
      id: 'implement-kmeans',
      title: 'Implement K-Means Clustering',
      difficulty: 'Medium',
      companies: ['Google', 'Meta', 'Netflix', 'Spotify'],
      category: 'ML Implementation',
      description: `Implement the K-Means clustering algorithm from scratch.

The algorithm should:
1. Initialize k centroids randomly
2. Assign each point to nearest centroid
3. Update centroids as mean of assigned points
4. Repeat until convergence`,
      examples: [
        {
          input: 'X = [[1,2], [1.5,1.8], [5,8], [8,8], [1,0.6], [9,11]], k = 2',
          output: 'Two clusters',
          explanation: 'Points grouped into 2 clusters'
        }
      ],
      starterCode: `import numpy as np

class KMeans:
    def __init__(self, k, max_iters=100):
        self.k = k
        self.max_iters = max_iters
    
    def fit(self, X):
        # Your code here
        pass
    
    def predict(self, X):
        # Your code here
        pass

# Test
np.random.seed(42)
X = np.array([[1,2], [1.5,1.8], [5,8], [8,8], [1,0.6], [9,11]])

kmeans = KMeans(k=2)
kmeans.fit(X)
print("Centroids:", kmeans.centroids)
print("Labels:", kmeans.predict(X))`,
      solution: `import numpy as np

class KMeans:
    def __init__(self, k, max_iters=100, tol=1e-4):
        self.k = k
        self.max_iters = max_iters
        self.tol = tol
        self.centroids = None
    
    def fit(self, X):
        n_samples, n_features = X.shape
        
        # Random initialization
        random_idx = np.random.choice(n_samples, self.k, replace=False)
        self.centroids = X[random_idx].copy()
        
        for _ in range(self.max_iters):
            # Assign clusters
            labels = self._assign_clusters(X)
            
            # Update centroids
            new_centroids = np.zeros((self.k, n_features))
            for i in range(self.k):
                cluster_points = X[labels == i]
                if len(cluster_points) > 0:
                    new_centroids[i] = cluster_points.mean(axis=0)
                else:
                    new_centroids[i] = self.centroids[i]
            
            # Check convergence
            if np.allclose(self.centroids, new_centroids, atol=self.tol):
                break
            
            self.centroids = new_centroids
        
        return self
    
    def _assign_clusters(self, X):
        distances = np.zeros((len(X), self.k))
        for i, centroid in enumerate(self.centroids):
            distances[:, i] = np.linalg.norm(X - centroid, axis=1)
        return np.argmin(distances, axis=1)
    
    def predict(self, X):
        return self._assign_clusters(X)
    
    def inertia(self, X):
        labels = self.predict(X)
        total = 0
        for i in range(self.k):
            cluster_points = X[labels == i]
            total += np.sum((cluster_points - self.centroids[i])**2)
        return total

# Test
np.random.seed(42)
X = np.array([[1,2], [1.5,1.8], [5,8], [8,8], [1,0.6], [9,11]], dtype=float)

kmeans = KMeans(k=2)
kmeans.fit(X)
print("Centroids:", kmeans.centroids.round(2))
print("Labels:", kmeans.predict(X))
print("Inertia:", kmeans.inertia(X).round(2))`,
      hints: [
        'Initialize centroids by selecting random points',
        'Use Euclidean distance to assign clusters',
        'Update centroids as cluster means'
      ],
      timeComplexity: 'O(n × k × iterations)',
      spaceComplexity: 'O(n × k)',
      pattern: 'Iterative Optimization'
    },
    {
      id: 'implement-gradient-descent',
      title: 'Implement Linear Regression with Gradient Descent',
      difficulty: 'Medium',
      companies: ['Google', 'Meta', 'Amazon', 'Microsoft'],
      category: 'ML Implementation',
      description: `Implement linear regression using gradient descent from scratch.

Given features X and target y, find weights w and bias b that minimize mean squared error.`,
      examples: [
        {
          input: 'X = [[1], [2], [3]], y = [2, 4, 6]',
          output: 'w ≈ 2, b ≈ 0',
          explanation: 'y = 2x relationship'
        }
      ],
      starterCode: `import numpy as np

class LinearRegressionGD:
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.lr = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = None
    
    def fit(self, X, y):
        # Your code here
        pass
    
    def predict(self, X):
        # Your code here
        pass

# Test
np.random.seed(42)
X = np.array([[1], [2], [3], [4], [5]], dtype=float)
y = np.array([2, 4, 6, 8, 10], dtype=float)

model = LinearRegressionGD(learning_rate=0.1, n_iterations=100)
model.fit(X, y)
print(f"Weight: {model.weights}, Bias: {model.bias}")
print(f"Predictions: {model.predict(X)}")`,
      solution: `import numpy as np

class LinearRegressionGD:
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.lr = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = None
        self.losses = []
    
    def fit(self, X, y):
        n_samples, n_features = X.shape
        
        # Initialize parameters
        self.weights = np.zeros(n_features)
        self.bias = 0
        
        for i in range(self.n_iterations):
            # Forward pass
            y_pred = X @ self.weights + self.bias
            
            # Compute loss (MSE)
            loss = np.mean((y_pred - y) ** 2)
            self.losses.append(loss)
            
            # Compute gradients
            dw = (2 / n_samples) * (X.T @ (y_pred - y))
            db = (2 / n_samples) * np.sum(y_pred - y)
            
            # Update parameters
            self.weights -= self.lr * dw
            self.bias -= self.lr * db
        
        return self
    
    def predict(self, X):
        return X @ self.weights + self.bias
    
    def score(self, X, y):
        y_pred = self.predict(X)
        ss_res = np.sum((y - y_pred) ** 2)
        ss_tot = np.sum((y - np.mean(y)) ** 2)
        return 1 - (ss_res / ss_tot)  # R² score

# Test
np.random.seed(42)
X = np.array([[1], [2], [3], [4], [5]], dtype=float)
y = np.array([2, 4, 6, 8, 10], dtype=float)

model = LinearRegressionGD(learning_rate=0.1, n_iterations=100)
model.fit(X, y)

print(f"Weight: {model.weights.round(4)}")
print(f"Bias: {round(model.bias, 4)}")
print(f"Predictions: {model.predict(X).round(2)}")
print(f"R² Score: {model.score(X, y):.4f}")
print(f"Final Loss: {model.losses[-1]:.6f}")`,
      hints: [
        'MSE gradient: dL/dw = (2/n) * X.T @ (y_pred - y)',
        'Update: w = w - lr * gradient',
        'Track loss to verify convergence'
      ],
      timeComplexity: 'O(n × features × iterations)',
      spaceComplexity: 'O(features)',
      pattern: 'Gradient Descent'
    }
  ]
};
