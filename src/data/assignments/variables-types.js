export const variablesAssignments = [
  {
    id: 'var-1',
    title: 'Variable Swap',
    difficulty: 'Easy',
    description: 'Given two variables a and b, swap their values without using a third variable.',
    hints: [
      'Python allows multiple assignment in one line',
      'You can use tuple unpacking: a, b = b, a',
      'This is a Pythonic way to swap values'
    ],
    starterCode: `# Swap the values of a and b
a = 10
b = 20

# Your code here (swap without using a third variable):


# After swapping, a should be 20 and b should be 10
print("a =", a, ", b =", b)`,
    solution: `a = 10
b = 20

# Python's elegant swap
a, b = b, a

print("a =", a, ", b =", b)  # Output: a = 20 , b = 10`
  },
  {
    id: 'var-2',
    title: 'Type Conversion',
    difficulty: 'Easy',
    description: 'Convert the given string "42.5" to a float, then to an integer, and print both results.',
    hints: [
      'Use float() to convert string to float',
      'Use int() to convert float to integer',
      'int() truncates (removes) the decimal part'
    ],
    starterCode: `# Convert the string to float and then to integer
number_string = "42.5"

# Step 1: Convert to float

# Step 2: Convert to integer

# Print both results
`,
    solution: `number_string = "42.5"

# Step 1: Convert to float
float_num = float(number_string)
print("As float:", float_num)  # Output: 42.5

# Step 2: Convert to integer
int_num = int(float_num)
print("As integer:", int_num)  # Output: 42`
  },
  {
    id: 'var-3',
    title: 'String Formatting',
    difficulty: 'Medium',
    description: 'Create a formatted string that displays a product name, price, and quantity using f-strings.',
    hints: [
      'Use f-strings: f"text {variable}"',
      'You can format numbers: {price:.2f} for 2 decimal places',
      'Calculate and display the total'
    ],
    starterCode: `# Create a formatted product display
product = "Laptop"
price = 999.99
quantity = 3

# Create a formatted output like:
# Product: Laptop
# Price: $999.99
# Quantity: 3
# Total: $2999.97

# Your code here:
`,
    solution: 'product = "Laptop"\n' +
      'price = 999.99\n' +
      'quantity = 3\n' +
      'total = price * quantity\n\n' +
      'print(f"Product: {product}")\n' +
      'print(f"Price: ${price:.2f}")\n' +
      'print(f"Quantity: {quantity}")\n' +
      'print(f"Total: ${total:.2f}")'
  }
];
