export const operatorsAssignments = [
  {
    id: 'op-1',
    title: 'Calculator',
    difficulty: 'Easy',
    description: 'Create a simple calculator that performs all basic operations (+, -, *, /, //, %, **) on two numbers.',
    hints: [
      '// is floor division (integer division)',
      '% is modulo (remainder)',
      '** is exponentiation (power)'
    ],
    starterCode: `# Simple calculator
a = 17
b = 5

# Perform all operations and print results:
# Addition, Subtraction, Multiplication, Division
# Floor Division, Modulo, Exponentiation

# Your code here:
`,
    solution: `a = 17
b = 5

print("Addition:", a, "+", b, "=", a + b)
print("Subtraction:", a, "-", b, "=", a - b)
print("Multiplication:", a, "*", b, "=", a * b)
print("Division:", a, "/", b, "=", a / b)
print("Floor Division:", a, "//", b, "=", a // b)
print("Modulo:", a, "%", b, "=", a % b)
print("Exponentiation:", a, "**", b, "=", a ** b)`
  },
  {
    id: 'op-2',
    title: 'Even or Odd Checker',
    difficulty: 'Easy',
    description: 'Check if a number is even or odd using the modulo operator.',
    hints: [
      'A number is even if number % 2 == 0',
      'A number is odd if number % 2 != 0',
      'Use conditional expression or if-else'
    ],
    starterCode: `# Check if numbers are even or odd
numbers = [15, 22, 7, 100, 33]

# For each number, print whether it's even or odd
# Your code here:
`,
    solution: `numbers = [15, 22, 7, 100, 33]

for num in numbers:
    if num % 2 == 0:
        print(num, "is even")
    else:
        print(num, "is odd")`
  },
  {
    id: 'op-3',
    title: 'Logical Expressions',
    difficulty: 'Medium',
    description: 'Create a function that checks if a number is positive, even, and less than 100.',
    hints: [
      'Use and to combine conditions',
      'Check: number > 0 and number % 2 == 0 and number < 100',
      'All conditions must be True for and to return True'
    ],
    starterCode: `def check_number(num):
    # Return True if num is positive, even, AND less than 100
    # Your code here:
    pass

# Test cases
print(check_number(50))   # True
print(check_number(-4))   # False (not positive)
print(check_number(150))  # False (not less than 100)
print(check_number(51))   # False (not even)
`,
    solution: `def check_number(num):
    return num > 0 and num % 2 == 0 and num < 100

# Test cases
print(check_number(50))   # True
print(check_number(-4))   # False
print(check_number(150))  # False
print(check_number(51))   # False`
  }
];
