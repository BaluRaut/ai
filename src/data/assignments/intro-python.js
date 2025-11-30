export const introPythonAssignments = [
  {
    id: 'intro-1',
    title: 'Hello World Variations',
    difficulty: 'Easy',
    description: 'Create a program that prints your name and a greeting message on separate lines.',
    hints: [
      'Use the print() function',
      'Each print() statement creates a new line',
      'You can use string concatenation with +'
    ],
    starterCode: `# Print your name and a greeting
# Example output:
# Hello, my name is John
# Welcome to Python programming!

# Your code here:
`,
    solution: `# Print your name and a greeting
name = "John"
print("Hello, my name is " + name)
print("Welcome to Python programming!")`
  },
  {
    id: 'intro-2',
    title: 'Multi-line Message',
    difficulty: 'Easy',
    description: 'Create a multi-line string that displays a simple ASCII art or a formatted message.',
    hints: [
      'Use triple quotes (""" or \'\'\')',
      'Everything between triple quotes preserves formatting',
      'Try creating a simple box or pattern'
    ],
    starterCode: `# Create a multi-line message or ASCII art
# Example:
# ********
# * HELLO *
# ********

# Your code here:
`,
    solution: `# ASCII art box
message = """
**************
*   HELLO    *
*   PYTHON   *
**************
"""
print(message)`
  },
  {
    id: 'intro-3',
    title: 'User Greeting',
    difficulty: 'Easy',
    description: 'Create a program that asks for the user\'s name and age, then prints a personalized greeting.',
    hints: [
      'Use input() to get user input',
      'input() always returns a string',
      'Use f-strings or concatenation to format output'
    ],
    starterCode: `# Ask for name and age, then greet the user
# Example output:
# What is your name? Alice
# How old are you? 25
# Hello Alice! You are 25 years old.

# Your code here:
`,
    solution: `# Get user information
name = input("What is your name? ")
age = input("How old are you? ")

# Print greeting
print(f"Hello {name}! You are {age} years old.")`
  },
  {
    id: 'intro-4',
    title: 'Simple Calculator',
    difficulty: 'Medium',
    description: 'Create a simple calculator that takes two numbers from the user and prints their sum, difference, product, and quotient.',
    hints: [
      'Use input() to get numbers',
      'Convert input to int() or float()',
      'Use +, -, *, / operators'
    ],
    starterCode: `# Simple calculator
# Get two numbers and show all operations

# Your code here:
`,
    solution: `# Get two numbers from user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Perform calculations
print("Sum:", num1 + num2)
print("Difference:", num1 - num2)
print("Product:", num1 * num2)
print("Quotient:", num1 / num2)`
  }
];
