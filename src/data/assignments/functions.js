export const functionsAssignments = [
  {
    id: 'func-1',
    title: 'Temperature Converter',
    difficulty: 'Easy',
    description: 'Create functions to convert between Celsius and Fahrenheit.',
    hints: [
      'F = C * 9/5 + 32',
      'C = (F - 32) * 5/9',
      'Round to 2 decimal places'
    ],
    starterCode: `def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit"""
    pass

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius"""
    pass

# Test
print(celsius_to_fahrenheit(0))    # 32.0
print(celsius_to_fahrenheit(100))  # 212.0
print(fahrenheit_to_celsius(32))   # 0.0
print(fahrenheit_to_celsius(98.6)) # 37.0
`,
    solution: `def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit"""
    return round(celsius * 9/5 + 32, 2)

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius"""
    return round((fahrenheit - 32) * 5/9, 2)

print(celsius_to_fahrenheit(0))    # 32.0
print(celsius_to_fahrenheit(100))  # 212.0
print(fahrenheit_to_celsius(32))   # 0.0
print(fahrenheit_to_celsius(98.6)) # 37.0`
  },
  {
    id: 'func-2',
    title: 'Default Arguments',
    difficulty: 'Medium',
    description: 'Create a greeting function with default arguments for name and greeting type.',
    hints: [
      'Use default parameter values: def func(param="default")',
      'Default values are used when argument is not provided',
      'Multiple parameters can have defaults'
    ],
    starterCode: `def greet(name="Guest", greeting="Hello", punctuation="!"):
    """Create a customizable greeting message"""
    # Return formatted greeting
    # Your code here:
    pass

print(greet())                          # Hello, Guest!
print(greet("Alice"))                   # Hello, Alice!
print(greet("Bob", "Good morning"))     # Good morning, Bob!
print(greet("Charlie", "Hi", "?"))      # Hi, Charlie?
`,
    solution: `def greet(name="Guest", greeting="Hello", punctuation="!"):
    """Create a customizable greeting message"""
    return greeting + ", " + name + punctuation

print(greet())                          # Hello, Guest!
print(greet("Alice"))                   # Hello, Alice!
print(greet("Bob", "Good morning"))     # Good morning, Bob!
print(greet("Charlie", "Hi", "?"))      # Hi, Charlie?`
  },
  {
    id: 'func-3',
    title: 'Recursive Factorial',
    difficulty: 'Hard',
    description: 'Write a recursive function to calculate factorial.',
    hints: [
      'Base case: factorial(0) = 1 and factorial(1) = 1',
      'Recursive case: n! = n * (n-1)!',
      'Function calls itself with a smaller value'
    ],
    starterCode: `def factorial(n):
    """Calculate factorial using recursion"""
    # Your code here:
    pass

print(factorial(0))  # 1
print(factorial(1))  # 1
print(factorial(5))  # 120
print(factorial(10)) # 3628800
`,
    solution: `def factorial(n):
    """Calculate factorial using recursion"""
    # Base case
    if n <= 1:
        return 1
    # Recursive case
    return n * factorial(n - 1)

print(factorial(0))  # 1
print(factorial(1))  # 1
print(factorial(5))  # 120
print(factorial(10)) # 3628800`
  },
  {
    id: 'func-5',
    title: 'Decorator: Timer',
    difficulty: 'Hard',
    description: 'Create a decorator that measures function execution time. Essential Python skill for optimization.',
    hints: [
      'Import time module',
      'Record start time before function call',
      'Record end time after function call',
      'Print the difference'
    ],
    starterCode: `import time

def timer(func):
    """
    Decorator that prints how long a function takes to run.
    
    Usage:
    @timer
    def slow_function():
        time.sleep(1)
    """
    # Your code here:
    pass

# Test your decorator
@timer
def slow_sum(n):
    """Sum numbers slowly"""
    total = 0
    for i in range(n):
        total += i
    return total

result = slow_sum(1000000)
print(f"Result: {result}")
`,
    solution: `import time

def timer(func):
    """Decorator that prints execution time."""
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_sum(n):
    total = 0
    for i in range(n):
        total += i
    return total

result = slow_sum(1000000)
print(f"Result: {result}")`
  },
  {
    id: 'func-6',
    title: 'Memoization',
    difficulty: 'Hard',
    description: 'Implement memoization to optimize recursive functions. Critical for dynamic programming.',
    hints: [
      'Store computed results in a dictionary',
      'Check if result already computed',
      'Return cached result if available'
    ],
    starterCode: `def memoize(func):
    """
    Decorator that caches function results.
    Same input = same output, so cache it!
    """
    # Your code here:
    pass

# Test with Fibonacci (slow without memoization)
@memoize
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

# Without memoization, fib(35) would take forever
print(fib(10))   # 55
print(fib(35))   # 9227465 (instant with memoization!)
print(fib(50))   # 12586269025
`,
    solution: `def memoize(func):
    """Decorator that caches function results."""
    cache = {}
    
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    
    return wrapper

@memoize
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(10))
print(fib(35))
print(fib(50))`
  },
  {
    id: 'func-7',
    title: 'Higher Order Functions',
    difficulty: 'Medium',
    description: 'Implement map, filter, and reduce from scratch. Understand functional programming.',
    hints: [
      'map applies function to each element',
      'filter keeps elements that pass test',
      'reduce combines elements into single value'
    ],
    starterCode: `def my_map(func, iterable):
    """Apply func to each element"""
    # Your code here:
    pass

def my_filter(func, iterable):
    """Keep elements where func returns True"""
    # Your code here:
    pass

def my_reduce(func, iterable, initial=None):
    """Combine elements using func"""
    # Your code here:
    pass

# Test
numbers = [1, 2, 3, 4, 5]

# Map: square each number
print(list(my_map(lambda x: x**2, numbers)))  # [1, 4, 9, 16, 25]

# Filter: keep even numbers
print(list(my_filter(lambda x: x % 2 == 0, numbers)))  # [2, 4]

# Reduce: sum all numbers
print(my_reduce(lambda a, b: a + b, numbers))  # 15
`,
    solution: `def my_map(func, iterable):
    """Apply func to each element"""
    for item in iterable:
        yield func(item)

def my_filter(func, iterable):
    """Keep elements where func returns True"""
    for item in iterable:
        if func(item):
            yield item

def my_reduce(func, iterable, initial=None):
    """Combine elements using func"""
    it = iter(iterable)
    
    if initial is None:
        accumulator = next(it)
    else:
        accumulator = initial
    
    for item in it:
        accumulator = func(accumulator, item)
    
    return accumulator

numbers = [1, 2, 3, 4, 5]
print(list(my_map(lambda x: x**2, numbers)))
print(list(my_filter(lambda x: x % 2 == 0, numbers)))
print(my_reduce(lambda a, b: a + b, numbers))`
  },
  {
    id: 'func-8',
    title: 'Closure Counter',
    difficulty: 'Medium',
    description: 'Create a counter using closures. Understanding closures is key for interviews.',
    hints: [
      'Inner function remembers outer variables',
      'Use nonlocal to modify outer variable',
      'Return the inner function'
    ],
    starterCode: `def make_counter(start=0):
    """
    Create a counter that remembers its state.
    
    Returns a function that:
    - Returns current count when called with no args
    - Increments by n when called with n
    - Can be reset
    """
    # Your code here:
    pass

# Test
counter = make_counter(10)
print(counter())      # 10 (current value)
print(counter(5))     # 15 (add 5)
print(counter(3))     # 18 (add 3)
print(counter(-10))   # 8 (subtract 10)

# Create another independent counter
counter2 = make_counter()
print(counter2())     # 0
print(counter2(1))    # 1
`,
    solution: `def make_counter(start=0):
    """Create a counter using closure."""
    count = start
    
    def counter(n=0):
        nonlocal count
        count += n
        return count
    
    return counter

counter = make_counter(10)
print(counter())
print(counter(5))
print(counter(3))
print(counter(-10))

counter2 = make_counter()
print(counter2())
print(counter2(1))`
  }
];
