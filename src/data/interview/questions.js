// Interview Questions Database
export const interviewQuestions = [
  // Python Basics
  {
    id: 'py-1',
    category: 'python-basics',
    difficulty: 'easy',
    question: 'What is the difference between a list and a tuple in Python?',
    answer: `**Lists** are mutable (can be changed), while **tuples** are immutable (cannot be changed after creation).

\`\`\`python
# List - mutable
my_list = [1, 2, 3]
my_list[0] = 10  # OK

# Tuple - immutable
my_tuple = (1, 2, 3)
my_tuple[0] = 10  # TypeError!
\`\`\`

**When to use:**
- Use **tuples** for fixed data (coordinates, RGB values)
- Use **lists** when you need to modify data`,
    followUp: ['What about memory usage?', 'Can you have a list inside a tuple?'],
    companies: ['google', 'amazon', 'microsoft'],
  },
  {
    id: 'py-2',
    category: 'python-basics',
    difficulty: 'easy',
    question: 'What are *args and **kwargs in Python?',
    answer: `**\*args** allows passing a variable number of positional arguments.
**\*\*kwargs** allows passing a variable number of keyword arguments.

\`\`\`python
def example(*args, **kwargs):
    print(f"args: {args}")      # tuple
    print(f"kwargs: {kwargs}")  # dict

example(1, 2, 3, name="John", age=25)
# args: (1, 2, 3)
# kwargs: {'name': 'John', 'age': 25}
\`\`\``,
    followUp: ['What is the order of parameters?', 'Can you use different names instead of args/kwargs?'],
    companies: ['google', 'meta', 'amazon'],
  },
  {
    id: 'py-3',
    category: 'python-basics',
    difficulty: 'medium',
    question: 'Explain Python\'s GIL (Global Interpreter Lock)',
    answer: `The **GIL** is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously.

**Key points:**
- Only one thread executes Python code at a time
- Affects CPU-bound multi-threaded programs
- I/O-bound programs are less affected
- Use **multiprocessing** for true parallelism

\`\`\`python
# For CPU-bound tasks, use multiprocessing
from multiprocessing import Pool

def cpu_task(n):
    return sum(i*i for i in range(n))

with Pool(4) as p:
    results = p.map(cpu_task, [1000000]*4)
\`\`\``,
    followUp: ['How does asyncio relate to GIL?', 'Why does Python have GIL?'],
    companies: ['google', 'amazon', 'netflix'],
  },
  {
    id: 'py-4',
    category: 'python-basics',
    difficulty: 'easy',
    question: 'What is the difference between == and is in Python?',
    answer: `**==** compares **values** (equality)
**is** compares **identity** (same object in memory)

\`\`\`python
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)  # True (same values)
print(a is b)  # False (different objects)
print(a is c)  # True (same object)

# id() shows memory address
print(id(a), id(b), id(c))
\`\`\`

**Note:** Small integers (-5 to 256) and short strings are cached (interned).`,
    followUp: ['What is string interning?', 'When should you use is vs ==?'],
    companies: ['microsoft', 'amazon', 'meta'],
  },
  {
    id: 'py-5',
    category: 'python-basics',
    difficulty: 'medium',
    question: 'How does Python memory management work?',
    answer: `Python uses **automatic memory management** with:

1. **Reference Counting**: Each object tracks how many references point to it
2. **Garbage Collection**: Handles circular references

\`\`\`python
import sys

a = [1, 2, 3]
print(sys.getrefcount(a))  # Reference count

# Circular reference example
class Node:
    def __init__(self):
        self.ref = None

a = Node()
b = Node()
a.ref = b
b.ref = a  # Circular!
# Garbage collector handles this
\`\`\`

**Memory pools:** Python pre-allocates memory blocks for small objects.`,
    followUp: ['What is the gc module?', 'How to find memory leaks?'],
    companies: ['google', 'amazon', 'apple'],
  },
  {
    id: 'py-6',
    category: 'python-basics',
    difficulty: 'easy',
    question: 'What are decorators in Python?',
    answer: `**Decorators** are functions that modify the behavior of other functions without changing their code.

\`\`\`python
def timer(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time()-start:.2f}s")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)

slow_function()  # slow_function took 1.00s
\`\`\`

**Common decorators:** @property, @staticmethod, @classmethod, @functools.lru_cache`,
    followUp: ['How to preserve function metadata?', 'What are class decorators?'],
    companies: ['google', 'meta', 'netflix'],
  },
  {
    id: 'py-7',
    category: 'python-basics',
    difficulty: 'medium',
    question: 'Explain generators and when to use them',
    answer: `**Generators** are functions that yield values one at a time, using lazy evaluation.

\`\`\`python
# Generator function
def count_up(n):
    i = 0
    while i < n:
        yield i
        i += 1

# Memory efficient - doesn't store all values
for num in count_up(1000000):
    if num > 5:
        break
    print(num)

# Generator expression
squares = (x**2 for x in range(10))
\`\`\`

**Use when:**
- Processing large datasets
- Infinite sequences
- Pipeline processing
- Memory is a concern`,
    followUp: ['What is yield from?', 'Generator vs iterator?'],
    companies: ['amazon', 'google', 'microsoft'],
  },
  {
    id: 'py-8',
    category: 'python-basics',
    difficulty: 'medium',
    question: 'What is the difference between shallow copy and deep copy?',
    answer: `**Shallow copy**: Creates new object but references nested objects
**Deep copy**: Creates new object and recursively copies all nested objects

\`\`\`python
import copy

original = [[1, 2], [3, 4]]

# Shallow copy
shallow = copy.copy(original)
shallow[0][0] = 'X'
print(original)  # [['X', 2], [3, 4]] - Changed!

# Deep copy
original = [[1, 2], [3, 4]]
deep = copy.deepcopy(original)
deep[0][0] = 'Y'
print(original)  # [[1, 2], [3, 4]] - Unchanged!
\`\`\``,
    followUp: ['What does list.copy() do?', 'How to copy custom objects?'],
    companies: ['amazon', 'microsoft', 'meta'],
  },

  // Data Structures
  {
    id: 'ds-1',
    category: 'data-structures',
    difficulty: 'easy',
    question: 'How would you implement a stack in Python?',
    answer: `A **stack** is LIFO (Last In, First Out). Use a list:

\`\`\`python
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        raise IndexError("Stack is empty")
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

# Usage
stack = Stack()
stack.push(1)
stack.push(2)
print(stack.pop())  # 2
\`\`\`

**Time complexity:** O(1) for all operations`,
    followUp: ['When would you use collections.deque?', 'Real-world stack examples?'],
    companies: ['amazon', 'google', 'microsoft'],
  },
  {
    id: 'ds-2',
    category: 'data-structures',
    difficulty: 'easy',
    question: 'How would you implement a queue in Python?',
    answer: `A **queue** is FIFO (First In, First Out). Use collections.deque:

\`\`\`python
from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if not self.is_empty():
            return self.items.popleft()
        raise IndexError("Queue is empty")
    
    def front(self):
        if not self.is_empty():
            return self.items[0]
        return None
    
    def is_empty(self):
        return len(self.items) == 0

# Usage
q = Queue()
q.enqueue(1)
q.enqueue(2)
print(q.dequeue())  # 1
\`\`\`

**Why deque?** list.pop(0) is O(n), deque.popleft() is O(1)`,
    followUp: ['What is a priority queue?', 'Implement a circular queue'],
    companies: ['amazon', 'meta', 'apple'],
  },
  {
    id: 'ds-3',
    category: 'data-structures',
    difficulty: 'medium',
    question: 'How does a hash table work? How is dict implemented in Python?',
    answer: `A **hash table** maps keys to values using a hash function.

**How Python dict works:**
1. Hash the key: \`hash(key)\`
2. Use hash to find bucket index
3. Handle collisions with open addressing

\`\`\`python
# Hash example
print(hash("hello"))  # Consistent integer

# Dict operations are O(1) average
d = {}
d["key"] = "value"    # O(1) insert
val = d["key"]        # O(1) lookup
del d["key"]          # O(1) delete

# Custom hashable class
class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    
    def __hash__(self):
        return hash((self.x, self.y))
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
\`\`\`

**Collision handling:** Python uses open addressing with probing.`,
    followUp: ['What makes an object hashable?', 'Worst case time complexity?'],
    companies: ['google', 'amazon', 'meta'],
  },
  {
    id: 'ds-4',
    category: 'data-structures',
    difficulty: 'medium',
    question: 'Implement a binary search tree in Python',
    answer: `\`\`\`python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, val):
        if not self.root:
            self.root = TreeNode(val)
        else:
            self._insert(self.root, val)
    
    def _insert(self, node, val):
        if val < node.val:
            if node.left:
                self._insert(node.left, val)
            else:
                node.left = TreeNode(val)
        else:
            if node.right:
                self._insert(node.right, val)
            else:
                node.right = TreeNode(val)
    
    def search(self, val):
        return self._search(self.root, val)
    
    def _search(self, node, val):
        if not node or node.val == val:
            return node
        if val < node.val:
            return self._search(node.left, val)
        return self._search(node.right, val)
    
    def inorder(self, node, result=[]):
        if node:
            self.inorder(node.left, result)
            result.append(node.val)
            self.inorder(node.right, result)
        return result
\`\`\``,
    followUp: ['Time complexity of operations?', 'How to balance a BST?'],
    companies: ['google', 'amazon', 'microsoft'],
  },
  {
    id: 'ds-5',
    category: 'data-structures',
    difficulty: 'hard',
    question: 'Implement a LRU Cache',
    answer: `**LRU (Least Recently Used) Cache** evicts the least recently accessed item when full.

\`\`\`python
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.capacity = capacity
    
    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        # Move to end (most recently used)
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            # Remove oldest (first item)
            self.cache.popitem(last=False)

# Usage
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))  # 1
cache.put(3, 3)      # Evicts key 2
print(cache.get(2))  # -1 (not found)
\`\`\``,
    followUp: ['Implement without OrderedDict', 'What is LFU cache?'],
    companies: ['amazon', 'google', 'meta', 'microsoft'],
  },

  // Algorithms
  {
    id: 'alg-1',
    category: 'algorithms',
    difficulty: 'easy',
    question: 'Explain Big O notation and common time complexities',
    answer: `**Big O** describes how runtime grows with input size.

| Complexity | Name | Example |
|------------|------|---------|
| O(1) | Constant | Array access |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search |
| O(n log n) | Linearithmic | Merge sort |
| O(n²) | Quadratic | Bubble sort |
| O(2ⁿ) | Exponential | Recursive Fibonacci |

\`\`\`python
# O(1) - Constant
def get_first(arr):
    return arr[0]

# O(n) - Linear
def find_max(arr):
    return max(arr)

# O(n²) - Quadratic
def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(len(arr)-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
\`\`\``,
    followUp: ['What is space complexity?', 'Best vs worst vs average case?'],
    companies: ['all'],
  },
  {
    id: 'alg-2',
    category: 'algorithms',
    difficulty: 'easy',
    question: 'Implement binary search',
    answer: `**Binary search** finds target in sorted array in O(log n).

\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Not found

# Recursive version
def binary_search_recursive(arr, target, left, right):
    if left > right:
        return -1
    
    mid = (left + right) // 2
    
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid+1, right)
    else:
        return binary_search_recursive(arr, target, left, mid-1)

# Usage
arr = [1, 3, 5, 7, 9, 11]
print(binary_search(arr, 7))  # 3
\`\`\``,
    followUp: ['Find first/last occurrence', 'Search in rotated sorted array'],
    companies: ['google', 'amazon', 'microsoft', 'meta'],
  },
  {
    id: 'alg-3',
    category: 'algorithms',
    difficulty: 'medium',
    question: 'Explain and implement merge sort',
    answer: `**Merge sort** is a divide-and-conquer algorithm with O(n log n) time.

\`\`\`python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Usage
arr = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(arr))  # [3, 9, 10, 27, 38, 43, 82]
\`\`\`

**Properties:** Stable, O(n) space, guaranteed O(n log n)`,
    followUp: ['Compare with quicksort', 'In-place merge sort?'],
    companies: ['google', 'amazon', 'apple'],
  },
  {
    id: 'alg-4',
    category: 'algorithms',
    difficulty: 'medium',
    question: 'Explain and implement quicksort',
    answer: `**Quicksort** is a divide-and-conquer algorithm, average O(n log n).

\`\`\`python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quicksort(left) + middle + quicksort(right)

# In-place version
def quicksort_inplace(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quicksort_inplace(arr, low, pi - 1)
        quicksort_inplace(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

arr = [10, 7, 8, 9, 1, 5]
print(quicksort(arr))  # [1, 5, 7, 8, 9, 10]
\`\`\`

**Properties:** Not stable, O(log n) space, O(n²) worst case`,
    followUp: ['How to choose pivot?', 'When is worst case?'],
    companies: ['google', 'microsoft', 'meta'],
  },
  {
    id: 'alg-5',
    category: 'algorithms',
    difficulty: 'medium',
    question: 'Explain dynamic programming with an example',
    answer: `**Dynamic Programming** solves problems by breaking into overlapping subproblems.

**Example: Fibonacci**
\`\`\`python
# Naive recursive - O(2^n)
def fib_naive(n):
    if n <= 1:
        return n
    return fib_naive(n-1) + fib_naive(n-2)

# DP with memoization - O(n)
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

# DP tabulation - O(n), O(1) space
def fib_tab(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

print(fib_tab(50))  # 12586269025
\`\`\`

**Key:** Identify overlapping subproblems + optimal substructure`,
    followUp: ['Top-down vs bottom-up?', 'Coin change problem?'],
    companies: ['google', 'amazon', 'meta', 'microsoft'],
  },

  // OOP
  {
    id: 'oop-1',
    category: 'oop',
    difficulty: 'easy',
    question: 'Explain the four pillars of OOP',
    answer: `**1. Encapsulation** - Bundle data and methods, hide internal state
\`\`\`python
class BankAccount:
    def __init__(self):
        self.__balance = 0  # Private
    
    def deposit(self, amount):
        self.__balance += amount
\`\`\`

**2. Abstraction** - Hide complexity, show only essentials
\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
\`\`\`

**3. Inheritance** - Create new class from existing
\`\`\`python
class Animal:
    def speak(self): pass

class Dog(Animal):
    def speak(self):
        return "Woof!"
\`\`\`

**4. Polymorphism** - Same interface, different implementations
\`\`\`python
def make_sound(animal):
    print(animal.speak())  # Works for any animal
\`\`\``,
    followUp: ['Composition vs inheritance?', 'Multiple inheritance in Python?'],
    companies: ['amazon', 'microsoft', 'google'],
  },
  {
    id: 'oop-2',
    category: 'oop',
    difficulty: 'medium',
    question: 'What are magic/dunder methods in Python?',
    answer: `**Magic methods** (double underscore) allow operator overloading and customization.

\`\`\`python
class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y
    
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    def __len__(self):
        return int((self.x**2 + self.y**2)**0.5)
    
    def __getitem__(self, index):
        return (self.x, self.y)[index]

v1 = Vector(3, 4)
v2 = Vector(1, 2)
print(v1 + v2)      # Vector(4, 6)
print(len(v1))      # 5
print(v1[0])        # 3
\`\`\`

**Common:** \`__init__\`, \`__str__\`, \`__repr__\`, \`__eq__\`, \`__hash__\`, \`__iter__\``,
    followUp: ['__str__ vs __repr__?', 'How to make class iterable?'],
    companies: ['google', 'amazon', 'meta'],
  },
  {
    id: 'oop-3',
    category: 'oop',
    difficulty: 'medium',
    question: 'Explain @staticmethod, @classmethod, and instance methods',
    answer: `\`\`\`python
class MyClass:
    class_var = "I'm a class variable"
    
    def __init__(self, value):
        self.instance_var = value
    
    # Instance method - access self
    def instance_method(self):
        return f"Instance: {self.instance_var}"
    
    # Class method - access cls, not instance
    @classmethod
    def class_method(cls):
        return f"Class: {cls.class_var}"
    
    # Static method - no access to cls or self
    @staticmethod
    def static_method(x, y):
        return x + y
    
    # Factory pattern with classmethod
    @classmethod
    def from_string(cls, s):
        return cls(int(s))

obj = MyClass(42)
print(obj.instance_method())     # Instance: 42
print(MyClass.class_method())    # Class: I'm a class variable
print(MyClass.static_method(1,2)) # 3
print(MyClass.from_string("100").instance_var)  # 100
\`\`\``,
    followUp: ['When to use each?', 'Alternative constructors?'],
    companies: ['amazon', 'google', 'microsoft'],
  },

  // Coding Patterns
  {
    id: 'pat-1',
    category: 'coding-patterns',
    difficulty: 'medium',
    question: 'Explain the Two Pointers technique',
    answer: `**Two Pointers** uses two indices to traverse data, often from opposite ends.

\`\`\`python
# Example 1: Two Sum (sorted array)
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    
    while left < right:
        curr_sum = arr[left] + arr[right]
        if curr_sum == target:
            return [left, right]
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
    return []

# Example 2: Remove duplicates in-place
def remove_duplicates(arr):
    if not arr:
        return 0
    
    write = 1
    for read in range(1, len(arr)):
        if arr[read] != arr[read - 1]:
            arr[write] = arr[read]
            write += 1
    return write

# Example 3: Reverse string
def reverse_string(s):
    s = list(s)
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    return ''.join(s)
\`\`\``,
    followUp: ['Palindrome check?', 'Container with most water?'],
    companies: ['google', 'amazon', 'meta', 'microsoft'],
  },
  {
    id: 'pat-2',
    category: 'coding-patterns',
    difficulty: 'medium',
    question: 'Explain the Sliding Window technique',
    answer: `**Sliding Window** maintains a subset of elements as you iterate.

\`\`\`python
# Fixed-size window: Max sum of k elements
def max_sum_subarray(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    
    return max_sum

# Variable-size window: Smallest subarray with sum >= target
def min_subarray_len(arr, target):
    left = 0
    curr_sum = 0
    min_len = float('inf')
    
    for right in range(len(arr)):
        curr_sum += arr[right]
        
        while curr_sum >= target:
            min_len = min(min_len, right - left + 1)
            curr_sum -= arr[left]
            left += 1
    
    return min_len if min_len != float('inf') else 0

# Longest substring without repeating chars
def length_of_longest_substring(s):
    seen = {}
    left = max_len = 0
    
    for right, char in enumerate(s):
        if char in seen and seen[char] >= left:
            left = seen[char] + 1
        seen[char] = right
        max_len = max(max_len, right - left + 1)
    
    return max_len
\`\`\``,
    followUp: ['When to expand vs shrink?', 'Anagram substring search?'],
    companies: ['amazon', 'google', 'meta', 'netflix'],
  },
  {
    id: 'pat-3',
    category: 'coding-patterns',
    difficulty: 'medium',
    question: 'Explain BFS and DFS traversal',
    answer: `**BFS (Breadth-First Search)** - Level by level, uses queue
**DFS (Depth-First Search)** - Go deep first, uses stack/recursion

\`\`\`python
from collections import deque

# BFS - Shortest path, level-order
def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    result = []
    
    while queue:
        node = queue.popleft()
        result.append(node)
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    
    return result

# DFS - Recursive
def dfs_recursive(graph, node, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(node)
    print(node)
    
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)

# DFS - Iterative
def dfs_iterative(graph, start):
    visited = set()
    stack = [start]
    
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            print(node)
            stack.extend(graph[node])
\`\`\`

**Use BFS for:** Shortest path, level order
**Use DFS for:** Path finding, cycle detection, topological sort`,
    followUp: ['Time complexity?', 'Tree vs graph traversal?'],
    companies: ['google', 'amazon', 'meta', 'apple'],
  },

  // System Design
  {
    id: 'sys-1',
    category: 'system-design',
    difficulty: 'hard',
    question: 'How would you design a URL shortener like bit.ly?',
    answer: `**Requirements:**
- Shorten long URLs
- Redirect short URLs
- High availability, low latency

**High-Level Design:**
\`\`\`
[Client] → [Load Balancer] → [App Servers] → [Database]
                                    ↓
                              [Cache (Redis)]
\`\`\`

**URL Encoding:**
\`\`\`python
import hashlib
import string

class URLShortener:
    def __init__(self):
        self.url_map = {}
        self.chars = string.ascii_letters + string.digits
    
    def encode(self, long_url):
        # Hash and take first 7 chars
        hash_val = hashlib.md5(long_url.encode()).hexdigest()[:7]
        short_url = f"https://short.ly/{hash_val}"
        self.url_map[hash_val] = long_url
        return short_url
    
    def decode(self, short_url):
        hash_val = short_url.split('/')[-1]
        return self.url_map.get(hash_val)
\`\`\`

**Considerations:**
- **Collision handling:** Check if hash exists
- **Database:** NoSQL (Cassandra) for scalability
- **Cache:** Redis for hot URLs
- **Analytics:** Track clicks, geo, referrer`,
    followUp: ['Handle hash collisions?', 'How to scale globally?'],
    companies: ['google', 'amazon', 'meta'],
  },
  {
    id: 'sys-2',
    category: 'system-design',
    difficulty: 'hard',
    question: 'Explain REST API design best practices',
    answer: `**REST API Best Practices:**

**1. Use nouns, not verbs:**
\`\`\`
✅ GET /users/123
❌ GET /getUser/123
\`\`\`

**2. HTTP methods correctly:**
\`\`\`
GET    /users      - List users
GET    /users/123  - Get user
POST   /users      - Create user
PUT    /users/123  - Update user (full)
PATCH  /users/123  - Update user (partial)
DELETE /users/123  - Delete user
\`\`\`

**3. Status codes:**
\`\`\`
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error
\`\`\`

**4. Pagination:**
\`\`\`
GET /users?page=2&limit=20
Response: { data: [...], page: 2, total: 100 }
\`\`\`

**5. Versioning:**
\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

**6. Error responses:**
\`\`\`json
{
  "error": {
    "code": "INVALID_EMAIL",
    "message": "Email format is invalid"
  }
}
\`\`\``,
    followUp: ['REST vs GraphQL?', 'Rate limiting strategies?'],
    companies: ['amazon', 'google', 'microsoft', 'meta'],
  },
];

// Company-specific problems
export const companyProblems = {
  google: [
    { id: 'g1', title: 'Two Sum', difficulty: 'easy', topic: 'Arrays' },
    { id: 'g2', title: 'LRU Cache', difficulty: 'medium', topic: 'Design' },
    { id: 'g3', title: 'Merge Intervals', difficulty: 'medium', topic: 'Arrays' },
    { id: 'g4', title: 'Word Break', difficulty: 'medium', topic: 'DP' },
    { id: 'g5', title: 'Median of Two Sorted Arrays', difficulty: 'hard', topic: 'Binary Search' },
  ],
  amazon: [
    { id: 'a1', title: 'Number of Islands', difficulty: 'medium', topic: 'BFS/DFS' },
    { id: 'a2', title: 'Product of Array Except Self', difficulty: 'medium', topic: 'Arrays' },
    { id: 'a3', title: 'Validate BST', difficulty: 'medium', topic: 'Trees' },
    { id: 'a4', title: 'Trapping Rain Water', difficulty: 'hard', topic: 'Two Pointers' },
    { id: 'a5', title: 'LRU Cache', difficulty: 'medium', topic: 'Design' },
  ],
  microsoft: [
    { id: 'm1', title: 'Reverse Linked List', difficulty: 'easy', topic: 'Linked Lists' },
    { id: 'm2', title: 'Add Two Numbers', difficulty: 'medium', topic: 'Linked Lists' },
    { id: 'm3', title: 'Spiral Matrix', difficulty: 'medium', topic: 'Arrays' },
    { id: 'm4', title: 'Serialize Binary Tree', difficulty: 'hard', topic: 'Trees' },
    { id: 'm5', title: 'Word Ladder', difficulty: 'hard', topic: 'BFS' },
  ],
  meta: [
    { id: 'f1', title: 'Valid Palindrome', difficulty: 'easy', topic: 'Strings' },
    { id: 'f2', title: 'Clone Graph', difficulty: 'medium', topic: 'BFS/DFS' },
    { id: 'f3', title: 'Binary Tree Right Side View', difficulty: 'medium', topic: 'Trees' },
    { id: 'f4', title: 'Subarray Sum Equals K', difficulty: 'medium', topic: 'Hash Map' },
    { id: 'f5', title: 'Alien Dictionary', difficulty: 'hard', topic: 'Topological Sort' },
  ],
};

// Mock interview sessions
export const mockInterviews = [
  {
    id: 'mock-1',
    title: 'Python Fundamentals',
    duration: 30,
    questionCount: 5,
    difficulty: 'easy',
    topics: ['python-basics'],
  },
  {
    id: 'mock-2',
    title: 'Data Structures Deep Dive',
    duration: 45,
    questionCount: 6,
    difficulty: 'medium',
    topics: ['data-structures', 'algorithms'],
  },
  {
    id: 'mock-3',
    title: 'Coding Patterns Mastery',
    duration: 60,
    questionCount: 4,
    difficulty: 'medium',
    topics: ['coding-patterns', 'algorithms'],
  },
  {
    id: 'mock-4',
    title: 'Full Stack Interview',
    duration: 90,
    questionCount: 8,
    difficulty: 'hard',
    topics: ['python-basics', 'oop', 'system-design', 'coding-patterns'],
  },
];
