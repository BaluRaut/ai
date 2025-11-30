export const loopsAssignments = [
  {
    id: 'loop-1',
    title: 'Sum of Numbers',
    difficulty: 'Easy',
    description: 'Calculate the sum of all numbers from 1 to n using a loop.',
    hints: [
      'Use a for loop with range(1, n+1)',
      'Initialize a sum variable to 0',
      'Add each number to the sum'
    ],
    starterCode: `def sum_to_n(n):
    """Calculate sum of 1 to n"""
    # Your code here:
    pass

print(sum_to_n(5))   # 15 (1+2+3+4+5)
print(sum_to_n(10))  # 55
print(sum_to_n(100)) # 5050
`,
    solution: `def sum_to_n(n):
    """Calculate sum of 1 to n"""
    total = 0
    for i in range(1, n + 1):
        total += i
    return total

# Alternative: return sum(range(1, n + 1))

print(sum_to_n(5))   # 15
print(sum_to_n(10))  # 55
print(sum_to_n(100)) # 5050`
  },
  {
    id: 'loop-2',
    title: 'Multiplication Table',
    difficulty: 'Easy',
    description: 'Print the multiplication table for a given number (1-10).',
    hints: [
      'Use a for loop from 1 to 10',
      'Multiply the number by the loop counter',
      'Format the output nicely'
    ],
    starterCode: `def multiplication_table(n):
    """Print multiplication table for n"""
    # Print: n x 1 = n, n x 2 = 2n, etc.
    # Your code here:
    pass

multiplication_table(7)
`,
    solution: `def multiplication_table(n):
    """Print multiplication table for n"""
    print("Multiplication table for", n)
    print("-" * 20)
    for i in range(1, 11):
        print(n, "x", i, "=", n * i)

multiplication_table(7)`
  },
  {
    id: 'loop-3',
    title: 'Pattern Printing',
    difficulty: 'Medium',
    description: 'Print a right-angled triangle pattern of stars.',
    hints: [
      'Use nested loops',
      'Outer loop for rows, inner loop for columns',
      'Each row has increasing number of stars'
    ],
    starterCode: `def print_triangle(rows):
    """Print a right triangle of stars
    Example for rows=5:
    *
    **
    ***
    ****
    *****
    """
    # Your code here:
    pass

print_triangle(5)
`,
    solution: `def print_triangle(rows):
    """Print a right triangle of stars"""
    for i in range(1, rows + 1):
        print("*" * i)

# Alternative with nested loop:
# for i in range(1, rows + 1):
#     for j in range(i):
#         print("*", end="")
#     print()

print_triangle(5)`
  },
  {
    id: 'loop-4',
    title: 'Find Prime Numbers',
    difficulty: 'Hard',
    description: 'Write a function to find all prime numbers up to n.',
    hints: [
      'A prime number is divisible only by 1 and itself',
      'Check divisibility from 2 to sqrt(n)',
      'Use a helper function is_prime()'
    ],
    starterCode: `def find_primes(n):
    """Find all prime numbers up to n"""
    # Your code here:
    pass

print(find_primes(20))  # [2, 3, 5, 7, 11, 13, 17, 19]
print(find_primes(50))
`,
    solution: `def find_primes(n):
    """Find all prime numbers up to n"""
    def is_prime(num):
        if num < 2:
            return False
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                return False
        return True
    
    return [i for i in range(2, n + 1) if is_prime(i)]

print(find_primes(20))
print(find_primes(50))`
  },
  {
    id: 'loop-5',
    title: 'Fibonacci Sequence',
    difficulty: 'Medium',
    description: 'Generate the first n Fibonacci numbers. Classic interview question!',
    hints: [
      'Start with 0, 1',
      'Each number is sum of previous two',
      'Track two previous values'
    ],
    starterCode: `def fibonacci(n):
    """
    Generate first n Fibonacci numbers.
    
    Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21...
    """
    # Your code here:
    pass

print(fibonacci(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
print(fibonacci(1))   # [0]
print(fibonacci(2))   # [0, 1]
`,
    solution: `def fibonacci(n):
    """Generate first n Fibonacci numbers."""
    if n <= 0:
        return []
    if n == 1:
        return [0]
    
    fib = [0, 1]
    while len(fib) < n:
        fib.append(fib[-1] + fib[-2])
    
    return fib

print(fibonacci(10))
print(fibonacci(1))
print(fibonacci(2))`
  },
  {
    id: 'loop-6',
    title: 'Number Pyramid',
    difficulty: 'Medium',
    description: 'Print a number pyramid pattern. Tests nested loop understanding.',
    hints: [
      'Outer loop for rows',
      'Inner loop for numbers in each row',
      'Print spaces for centering'
    ],
    starterCode: `def number_pyramid(rows):
    """
    Print a centered number pyramid.
    
    For rows=4:
       1
      121
     12321
    1234321
    """
    # Your code here:
    pass

number_pyramid(5)
`,
    solution: `def number_pyramid(rows):
    for i in range(1, rows + 1):
        # Leading spaces
        print(" " * (rows - i), end="")
        
        # Ascending numbers
        for j in range(1, i + 1):
            print(j, end="")
        
        # Descending numbers
        for j in range(i - 1, 0, -1):
            print(j, end="")
        
        print()

number_pyramid(5)`
  },
  {
    id: 'loop-7',
    title: 'Collatz Sequence',
    difficulty: 'Medium',
    description: 'Generate the Collatz sequence for a number. Famous unsolved problem in mathematics!',
    hints: [
      'If even: divide by 2',
      'If odd: multiply by 3 and add 1',
      'Continue until reaching 1'
    ],
    starterCode: `def collatz(n):
    """
    Generate Collatz sequence starting from n.
    
    Rules:
    - If n is even: n = n / 2
    - If n is odd: n = 3n + 1
    - Stop when n reaches 1
    
    Example: 6 -> [6, 3, 10, 5, 16, 8, 4, 2, 1]
    """
    # Your code here:
    pass

print(collatz(6))
print(collatz(27))  # Famous for long sequence
`,
    solution: `def collatz(n):
    """Generate Collatz sequence."""
    sequence = [n]
    
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        sequence.append(n)
    
    return sequence

print(collatz(6))
print(collatz(27))
print(f"Length of collatz(27): {len(collatz(27))}")`
  }
];
