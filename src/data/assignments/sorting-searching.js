// Sorting & Searching Algorithms - Core CS Knowledge
export const sortingSearchingAssignments = [
  {
    id: 'sort-1',
    title: 'Bubble Sort',
    difficulty: 'Easy',
    description: 'Implement Bubble Sort. Understand O(n²) complexity.',
    hints: [
      'Compare adjacent elements',
      'Swap if out of order',
      'Repeat until no swaps needed'
    ],
    starterCode: `def bubble_sort(arr):
    """
    Sort array using Bubble Sort.
    Modify array in-place and return it.
    
    Time: O(n²), Space: O(1)
    """
    # Your code here:
    pass

# Test
arr = [64, 34, 25, 12, 22, 11, 90]
print(f"Original: {arr}")
print(f"Sorted: {bubble_sort(arr.copy())}")

arr2 = [5, 1, 4, 2, 8]
print(f"Sorted: {bubble_sort(arr2)}")
`,
    solution: `def bubble_sort(arr):
    """Bubble Sort - O(n²) time, O(1) space"""
    n = len(arr)
    
    for i in range(n):
        swapped = False
        
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        
        # Optimization: stop if no swaps
        if not swapped:
            break
    
    return arr

arr = [64, 34, 25, 12, 22, 11, 90]
print(f"Original: {arr}")
print(f"Sorted: {bubble_sort(arr.copy())}")

arr2 = [5, 1, 4, 2, 8]
print(f"Sorted: {bubble_sort(arr2)}")`
  },
  {
    id: 'sort-2',
    title: 'Merge Sort',
    difficulty: 'Medium',
    description: 'Implement Merge Sort. Classic divide-and-conquer algorithm.',
    hints: [
      'Divide array in half recursively',
      'Base case: single element',
      'Merge two sorted halves'
    ],
    starterCode: `def merge_sort(arr):
    """
    Sort array using Merge Sort.
    
    Time: O(n log n), Space: O(n)
    """
    # Your code here:
    pass

# Test
arr = [38, 27, 43, 3, 9, 82, 10]
print(f"Original: {arr}")
print(f"Sorted: {merge_sort(arr)}")

arr2 = [5, 2, 8, 1, 9]
print(f"Sorted: {merge_sort(arr2)}")
`,
    solution: `def merge_sort(arr):
    """Merge Sort - O(n log n) time, O(n) space"""
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    """Merge two sorted arrays"""
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

arr = [38, 27, 43, 3, 9, 82, 10]
print(f"Original: {arr}")
print(f"Sorted: {merge_sort(arr)}")

arr2 = [5, 2, 8, 1, 9]
print(f"Sorted: {merge_sort(arr2)}")`
  },
  {
    id: 'sort-3',
    title: 'Quick Sort',
    difficulty: 'Hard',
    description: 'Implement Quick Sort. Most commonly used sorting algorithm in practice.',
    hints: [
      'Choose a pivot element',
      'Partition: elements < pivot on left, > pivot on right',
      'Recursively sort partitions'
    ],
    starterCode: `def quick_sort(arr):
    """
    Sort array using Quick Sort.
    
    Time: O(n log n) average, O(n²) worst
    Space: O(log n) for recursion
    """
    # Your code here:
    pass

# Test
arr = [10, 7, 8, 9, 1, 5]
print(f"Original: {arr}")
print(f"Sorted: {quick_sort(arr.copy())}")

arr2 = [3, 6, 8, 10, 1, 2, 1]
print(f"Sorted: {quick_sort(arr2)}")
`,
    solution: `def quick_sort(arr):
    """Quick Sort - O(n log n) average time"""
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# In-place version for reference:
def quick_sort_inplace(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        pivot_idx = partition(arr, low, high)
        quick_sort_inplace(arr, low, pivot_idx - 1)
        quick_sort_inplace(arr, pivot_idx + 1, high)
    return arr

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

arr = [10, 7, 8, 9, 1, 5]
print(f"Original: {arr}")
print(f"Sorted: {quick_sort(arr.copy())}")

arr2 = [3, 6, 8, 10, 1, 2, 1]
print(f"Sorted: {quick_sort(arr2)}")`
  },
  {
    id: 'sort-4',
    title: 'Selection Sort',
    difficulty: 'Easy',
    description: 'Implement Selection Sort. Simple but inefficient - good for learning.',
    hints: [
      'Find minimum in unsorted portion',
      'Swap with first unsorted element',
      'Repeat until sorted'
    ],
    starterCode: `def selection_sort(arr):
    """
    Sort array using Selection Sort.
    
    Time: O(n²), Space: O(1)
    """
    # Your code here:
    pass

# Test
arr = [64, 25, 12, 22, 11]
print(f"Original: {arr}")
print(f"Sorted: {selection_sort(arr.copy())}")
`,
    solution: `def selection_sort(arr):
    """Selection Sort - O(n²) time, O(1) space"""
    n = len(arr)
    
    for i in range(n):
        min_idx = i
        
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
    return arr

arr = [64, 25, 12, 22, 11]
print(f"Original: {arr}")
print(f"Sorted: {selection_sort(arr.copy())}")`
  },
  {
    id: 'sort-5',
    title: 'Insertion Sort',
    difficulty: 'Easy',
    description: 'Implement Insertion Sort. Efficient for small or nearly sorted arrays.',
    hints: [
      'Build sorted portion one element at a time',
      'Insert each element into correct position',
      'Shift larger elements right'
    ],
    starterCode: `def insertion_sort(arr):
    """
    Sort array using Insertion Sort.
    
    Time: O(n²) worst, O(n) best (nearly sorted)
    Space: O(1)
    """
    # Your code here:
    pass

# Test
arr = [12, 11, 13, 5, 6]
print(f"Original: {arr}")
print(f"Sorted: {insertion_sort(arr.copy())}")
`,
    solution: `def insertion_sort(arr):
    """Insertion Sort - O(n²) time, O(1) space"""
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        
        arr[j + 1] = key
    
    return arr

arr = [12, 11, 13, 5, 6]
print(f"Original: {arr}")
print(f"Sorted: {insertion_sort(arr.copy())}")`
  },
  {
    id: 'sort-6',
    title: 'Binary Search Variations',
    difficulty: 'Medium',
    description: 'Implement binary search variations: find first/last occurrence, search in rotated array.',
    hints: [
      'First occurrence: keep searching left after finding',
      'Last occurrence: keep searching right after finding',
      'Rotated: check which half is sorted'
    ],
    starterCode: `def find_first(arr, target):
    """Find first occurrence of target"""
    # Your code here:
    pass

def find_last(arr, target):
    """Find last occurrence of target"""
    # Your code here:
    pass

def search_rotated(arr, target):
    """
    Search in rotated sorted array.
    [4,5,6,7,0,1,2] was [0,1,2,4,5,6,7] rotated at index 3.
    """
    # Your code here:
    pass

# Test
arr1 = [1, 2, 2, 2, 3, 4, 5]
print(f"First 2: {find_first(arr1, 2)}")  # 1
print(f"Last 2: {find_last(arr1, 2)}")    # 3

arr2 = [4, 5, 6, 7, 0, 1, 2]
print(f"Find 0: {search_rotated(arr2, 0)}")  # 4
print(f"Find 3: {search_rotated(arr2, 3)}")  # -1
`,
    solution: `def find_first(arr, target):
    """Find first occurrence of target"""
    left, right = 0, len(arr) - 1
    result = -1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            result = mid
            right = mid - 1  # Keep searching left
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return result

def find_last(arr, target):
    """Find last occurrence of target"""
    left, right = 0, len(arr) - 1
    result = -1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            result = mid
            left = mid + 1  # Keep searching right
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return result

def search_rotated(arr, target):
    """Search in rotated sorted array"""
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        
        # Check which half is sorted
        if arr[left] <= arr[mid]:  # Left half sorted
            if arr[left] <= target < arr[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:  # Right half sorted
            if arr[mid] < target <= arr[right]:
                left = mid + 1
            else:
                right = mid - 1
    
    return -1

arr1 = [1, 2, 2, 2, 3, 4, 5]
print(f"First 2: {find_first(arr1, 2)}")
print(f"Last 2: {find_last(arr1, 2)}")

arr2 = [4, 5, 6, 7, 0, 1, 2]
print(f"Find 0: {search_rotated(arr2, 0)}")
print(f"Find 3: {search_rotated(arr2, 3)}")`
  },
  {
    id: 'sort-7',
    title: 'Kth Largest Element',
    difficulty: 'Medium',
    description: 'Find the Kth largest element in an unsorted array. Common interview problem.',
    hints: [
      'Sort and index: O(n log n)',
      'Use heap: O(n log k)',
      'QuickSelect: O(n) average'
    ],
    starterCode: `import heapq

def find_kth_largest(nums, k):
    """
    Find kth largest element.
    
    [3,2,1,5,6,4], k=2 -> 5 (2nd largest)
    """
    # Your code here (try multiple approaches):
    pass

# Test
print(find_kth_largest([3, 2, 1, 5, 6, 4], 2))  # 5
print(find_kth_largest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))  # 4
`,
    solution: `import heapq

def find_kth_largest(nums, k):
    """Using min-heap of size k - O(n log k)"""
    # Keep k largest elements in min-heap
    heap = []
    
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    
    return heap[0]

# Alternative: QuickSelect O(n) average
def find_kth_largest_quickselect(nums, k):
    k = len(nums) - k  # Convert to kth smallest
    
    def quickselect(left, right):
        pivot = nums[right]
        p = left
        
        for i in range(left, right):
            if nums[i] <= pivot:
                nums[p], nums[i] = nums[i], nums[p]
                p += 1
        
        nums[p], nums[right] = nums[right], nums[p]
        
        if p == k:
            return nums[p]
        elif p < k:
            return quickselect(p + 1, right)
        else:
            return quickselect(left, p - 1)
    
    return quickselect(0, len(nums) - 1)

print(find_kth_largest([3, 2, 1, 5, 6, 4], 2))
print(find_kth_largest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))`
  }
];

export default sortingSearchingAssignments;
