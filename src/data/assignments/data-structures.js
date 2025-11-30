// Data Structures Implementation - Must Know for Jobs
export const dataStructuresAssignments = [
  {
    id: 'ds-1',
    title: 'Stack Implementation',
    difficulty: 'Easy',
    description: 'Implement a Stack data structure with push, pop, peek, and isEmpty operations.',
    hints: [
      'Use a list internally',
      'push adds to end',
      'pop removes from end',
      'peek returns last without removing'
    ],
    starterCode: `class Stack:
    """
    Stack: Last In, First Out (LIFO)
    
    Operations:
    - push(item): Add to top
    - pop(): Remove and return top
    - peek(): Return top without removing
    - is_empty(): Check if empty
    - size(): Return number of items
    """
    
    def __init__(self):
        # Your code here:
        pass
    
    def push(self, item):
        pass
    
    def pop(self):
        pass
    
    def peek(self):
        pass
    
    def is_empty(self):
        pass
    
    def size(self):
        pass

# Test
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(f"Peek: {stack.peek()}")    # 3
print(f"Pop: {stack.pop()}")      # 3
print(f"Pop: {stack.pop()}")      # 2
print(f"Size: {stack.size()}")    # 1
print(f"Empty: {stack.is_empty()}")  # False
`,
    solution: `class Stack:
    def __init__(self):
        self._items = []
    
    def push(self, item):
        self._items.append(item)
    
    def pop(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self._items.pop()
    
    def peek(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self._items[-1]
    
    def is_empty(self):
        return len(self._items) == 0
    
    def size(self):
        return len(self._items)

# Test
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(f"Peek: {stack.peek()}")
print(f"Pop: {stack.pop()}")
print(f"Pop: {stack.pop()}")
print(f"Size: {stack.size()}")
print(f"Empty: {stack.is_empty()}")`
  },
  {
    id: 'ds-2',
    title: 'Queue Implementation',
    difficulty: 'Easy',
    description: 'Implement a Queue data structure with enqueue, dequeue, front, and isEmpty operations.',
    hints: [
      'Use collections.deque for O(1) operations',
      'enqueue adds to back',
      'dequeue removes from front',
      'front returns first without removing'
    ],
    starterCode: `from collections import deque

class Queue:
    """
    Queue: First In, First Out (FIFO)
    
    Operations:
    - enqueue(item): Add to back
    - dequeue(): Remove and return front
    - front(): Return front without removing
    - is_empty(): Check if empty
    - size(): Return number of items
    """
    
    def __init__(self):
        # Your code here:
        pass
    
    def enqueue(self, item):
        pass
    
    def dequeue(self):
        pass
    
    def front(self):
        pass
    
    def is_empty(self):
        pass
    
    def size(self):
        pass

# Test
queue = Queue()
queue.enqueue("A")
queue.enqueue("B")
queue.enqueue("C")
print(f"Front: {queue.front()}")    # A
print(f"Dequeue: {queue.dequeue()}")  # A
print(f"Dequeue: {queue.dequeue()}")  # B
print(f"Size: {queue.size()}")      # 1
`,
    solution: `from collections import deque

class Queue:
    def __init__(self):
        self._items = deque()
    
    def enqueue(self, item):
        self._items.append(item)  # Add to right/back
    
    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self._items.popleft()  # Remove from left/front
    
    def front(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self._items[0]
    
    def is_empty(self):
        return len(self._items) == 0
    
    def size(self):
        return len(self._items)

# Test
queue = Queue()
queue.enqueue("A")
queue.enqueue("B")
queue.enqueue("C")
print(f"Front: {queue.front()}")
print(f"Dequeue: {queue.dequeue()}")
print(f"Dequeue: {queue.dequeue()}")
print(f"Size: {queue.size()}")`
  },
  {
    id: 'ds-3',
    title: 'Min Stack',
    difficulty: 'Medium',
    description: 'Design a stack that supports push, pop, top, and retrieving minimum element in O(1) time.',
    hints: [
      'Use auxiliary stack to track minimums',
      'Push to min stack when new minimum found',
      'Pop from min stack when current min is popped'
    ],
    starterCode: `class MinStack:
    """
    Stack that tracks minimum element in O(1).
    
    Operations:
    - push(val): Push element
    - pop(): Remove top element
    - top(): Get top element
    - get_min(): Get minimum element
    
    ALL operations must be O(1)!
    """
    
    def __init__(self):
        # Your code here:
        pass
    
    def push(self, val):
        pass
    
    def pop(self):
        pass
    
    def top(self):
        pass
    
    def get_min(self):
        pass

# Test
stack = MinStack()
stack.push(-2)
stack.push(0)
stack.push(-3)
print(f"Min: {stack.get_min()}")  # -3
stack.pop()
print(f"Top: {stack.top()}")      # 0
print(f"Min: {stack.get_min()}")  # -2
`,
    solution: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []  # Tracks minimums
    
    def push(self, val):
        self.stack.append(val)
        # Push to min_stack if empty or new minimum
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    
    def pop(self):
        if not self.stack:
            return None
        val = self.stack.pop()
        # Pop from min_stack if it was the minimum
        if val == self.min_stack[-1]:
            self.min_stack.pop()
        return val
    
    def top(self):
        return self.stack[-1] if self.stack else None
    
    def get_min(self):
        return self.min_stack[-1] if self.min_stack else None

# Test
stack = MinStack()
stack.push(-2)
stack.push(0)
stack.push(-3)
print(f"Min: {stack.get_min()}")
stack.pop()
print(f"Top: {stack.top()}")
print(f"Min: {stack.get_min()}")`
  },
  {
    id: 'ds-4',
    title: 'Hash Map Implementation',
    difficulty: 'Hard',
    description: 'Implement a hash map from scratch with get, put, remove operations.',
    hints: [
      'Use array of buckets',
      'Hash function maps key to bucket index',
      'Handle collisions with chaining (linked list)'
    ],
    starterCode: `class HashMap:
    """
    Hash Map implementation with chaining for collisions.
    
    Operations:
    - put(key, value): Add or update key-value pair
    - get(key): Get value by key, None if not found
    - remove(key): Remove key-value pair
    - contains(key): Check if key exists
    """
    
    def __init__(self, capacity=16):
        # Your code here:
        pass
    
    def _hash(self, key):
        """Get bucket index for key"""
        pass
    
    def put(self, key, value):
        pass
    
    def get(self, key):
        pass
    
    def remove(self, key):
        pass
    
    def contains(self, key):
        pass

# Test
map = HashMap()
map.put("name", "Alice")
map.put("age", 30)
map.put("city", "NYC")

print(f"Name: {map.get('name')}")    # Alice
print(f"Age: {map.get('age')}")      # 30
print(f"Has city: {map.contains('city')}")  # True

map.remove("age")
print(f"Age after remove: {map.get('age')}")  # None
`,
    solution: `class HashMap:
    def __init__(self, capacity=16):
        self.capacity = capacity
        self.buckets = [[] for _ in range(capacity)]
        self.size = 0
    
    def _hash(self, key):
        return hash(key) % self.capacity
    
    def put(self, key, value):
        index = self._hash(key)
        bucket = self.buckets[index]
        
        # Check if key exists, update if so
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return
        
        # New key
        bucket.append((key, value))
        self.size += 1
    
    def get(self, key):
        index = self._hash(key)
        bucket = self.buckets[index]
        
        for k, v in bucket:
            if k == key:
                return v
        return None
    
    def remove(self, key):
        index = self._hash(key)
        bucket = self.buckets[index]
        
        for i, (k, v) in enumerate(bucket):
            if k == key:
                del bucket[i]
                self.size -= 1
                return True
        return False
    
    def contains(self, key):
        return self.get(key) is not None

# Test
map = HashMap()
map.put("name", "Alice")
map.put("age", 30)
map.put("city", "NYC")

print(f"Name: {map.get('name')}")
print(f"Age: {map.get('age')}")
print(f"Has city: {map.contains('city')}")

map.remove("age")
print(f"Age after remove: {map.get('age')}")`
  },
  {
    id: 'ds-5',
    title: 'Binary Search Tree',
    difficulty: 'Hard',
    description: 'Implement a Binary Search Tree with insert, search, and traversal operations.',
    hints: [
      'Left children < parent < right children',
      'Insert recursively comparing values',
      'Inorder traversal gives sorted order'
    ],
    starterCode: `class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BST:
    """
    Binary Search Tree implementation.
    
    Operations:
    - insert(val): Add value to tree
    - search(val): Check if value exists
    - inorder(): Return values in sorted order
    - min_value(): Return minimum value
    - max_value(): Return maximum value
    """
    
    def __init__(self):
        self.root = None
    
    def insert(self, val):
        pass
    
    def search(self, val):
        pass
    
    def inorder(self):
        """Return list of values in sorted order"""
        pass
    
    def min_value(self):
        pass
    
    def max_value(self):
        pass

# Test
bst = BST()
for val in [5, 3, 7, 1, 4, 6, 8]:
    bst.insert(val)

print(f"Inorder: {bst.inorder()}")  # [1, 3, 4, 5, 6, 7, 8]
print(f"Search 4: {bst.search(4)}")  # True
print(f"Search 9: {bst.search(9)}")  # False
print(f"Min: {bst.min_value()}")     # 1
print(f"Max: {bst.max_value()}")     # 8
`,
    solution: `class TreeNode:
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
            self._insert_recursive(self.root, val)
    
    def _insert_recursive(self, node, val):
        if val < node.val:
            if node.left:
                self._insert_recursive(node.left, val)
            else:
                node.left = TreeNode(val)
        else:
            if node.right:
                self._insert_recursive(node.right, val)
            else:
                node.right = TreeNode(val)
    
    def search(self, val):
        return self._search_recursive(self.root, val)
    
    def _search_recursive(self, node, val):
        if not node:
            return False
        if val == node.val:
            return True
        elif val < node.val:
            return self._search_recursive(node.left, val)
        else:
            return self._search_recursive(node.right, val)
    
    def inorder(self):
        result = []
        self._inorder_recursive(self.root, result)
        return result
    
    def _inorder_recursive(self, node, result):
        if node:
            self._inorder_recursive(node.left, result)
            result.append(node.val)
            self._inorder_recursive(node.right, result)
    
    def min_value(self):
        if not self.root:
            return None
        node = self.root
        while node.left:
            node = node.left
        return node.val
    
    def max_value(self):
        if not self.root:
            return None
        node = self.root
        while node.right:
            node = node.right
        return node.val

# Test
bst = BST()
for val in [5, 3, 7, 1, 4, 6, 8]:
    bst.insert(val)

print(f"Inorder: {bst.inorder()}")
print(f"Search 4: {bst.search(4)}")
print(f"Search 9: {bst.search(9)}")
print(f"Min: {bst.min_value()}")
print(f"Max: {bst.max_value()}")`
  },
  {
    id: 'ds-6',
    title: 'Graph Representation & BFS',
    difficulty: 'Hard',
    description: 'Implement a Graph with adjacency list and Breadth-First Search traversal.',
    hints: [
      'Use dict for adjacency list',
      'BFS uses a queue',
      'Track visited nodes to avoid cycles'
    ],
    starterCode: `from collections import deque

class Graph:
    """
    Undirected Graph with BFS traversal.
    
    Operations:
    - add_vertex(v): Add vertex
    - add_edge(v1, v2): Add edge between vertices
    - bfs(start): Return BFS traversal order
    - has_path(start, end): Check if path exists
    """
    
    def __init__(self):
        # Your code here (use adjacency list):
        pass
    
    def add_vertex(self, v):
        pass
    
    def add_edge(self, v1, v2):
        pass
    
    def bfs(self, start):
        """Return list of vertices in BFS order"""
        pass
    
    def has_path(self, start, end):
        """Check if path exists between start and end"""
        pass

# Test
graph = Graph()
for v in ['A', 'B', 'C', 'D', 'E', 'F']:
    graph.add_vertex(v)

graph.add_edge('A', 'B')
graph.add_edge('A', 'C')
graph.add_edge('B', 'D')
graph.add_edge('C', 'E')
graph.add_edge('D', 'F')

print(f"BFS from A: {graph.bfs('A')}")  # [A, B, C, D, E, F]
print(f"Path A->F: {graph.has_path('A', 'F')}")  # True
print(f"Path E->D: {graph.has_path('E', 'D')}")  # True
`,
    solution: `from collections import deque

class Graph:
    def __init__(self):
        self.adj_list = {}
    
    def add_vertex(self, v):
        if v not in self.adj_list:
            self.adj_list[v] = []
    
    def add_edge(self, v1, v2):
        self.add_vertex(v1)
        self.add_vertex(v2)
        self.adj_list[v1].append(v2)
        self.adj_list[v2].append(v1)  # Undirected
    
    def bfs(self, start):
        if start not in self.adj_list:
            return []
        
        visited = set()
        result = []
        queue = deque([start])
        visited.add(start)
        
        while queue:
            vertex = queue.popleft()
            result.append(vertex)
            
            for neighbor in self.adj_list[vertex]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        
        return result
    
    def has_path(self, start, end):
        if start not in self.adj_list or end not in self.adj_list:
            return False
        
        visited = set()
        queue = deque([start])
        visited.add(start)
        
        while queue:
            vertex = queue.popleft()
            if vertex == end:
                return True
            
            for neighbor in self.adj_list[vertex]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        
        return False

# Test
graph = Graph()
for v in ['A', 'B', 'C', 'D', 'E', 'F']:
    graph.add_vertex(v)

graph.add_edge('A', 'B')
graph.add_edge('A', 'C')
graph.add_edge('B', 'D')
graph.add_edge('C', 'E')
graph.add_edge('D', 'F')

print(f"BFS from A: {graph.bfs('A')}")
print(f"Path A->F: {graph.has_path('A', 'F')}")
print(f"Path E->D: {graph.has_path('E', 'D')}")`
  }
];

export default dataStructuresAssignments;
