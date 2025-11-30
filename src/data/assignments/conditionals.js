export const conditionalsAssignments = [
  {
    id: 'cond-1',
    title: 'Grade Calculator',
    difficulty: 'Easy',
    description: 'Write a function that converts a numeric score (0-100) to a letter grade (A, B, C, D, F).',
    hints: [
      'A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60',
      'Use elif for multiple conditions',
      'Check from highest to lowest'
    ],
    starterCode: `def get_grade(score):
    """Convert numeric score to letter grade"""
    # Your code here:
    pass

# Test your function
print(get_grade(95))  # A
print(get_grade(85))  # B
print(get_grade(75))  # C
print(get_grade(65))  # D
print(get_grade(55))  # F
`,
    solution: `def get_grade(score):
    """Convert numeric score to letter grade"""
    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    elif score >= 70:
        return 'C'
    elif score >= 60:
        return 'D'
    else:
        return 'F'

print(get_grade(95))  # A
print(get_grade(85))  # B
print(get_grade(75))  # C
print(get_grade(65))  # D
print(get_grade(55))  # F`
  },
  {
    id: 'cond-2',
    title: 'Leap Year Checker',
    difficulty: 'Medium',
    description: 'Write a function to check if a year is a leap year.',
    hints: [
      'Divisible by 4 AND (not divisible by 100 OR divisible by 400)',
      'Examples: 2000 (leap), 1900 (not leap), 2024 (leap)',
      'Use logical operators carefully'
    ],
    starterCode: `def is_leap_year(year):
    """Check if a year is a leap year"""
    # Rules:
    # 1. Divisible by 4
    # 2. If divisible by 100, must also be divisible by 400
    # Your code here:
    pass

# Test cases
print(is_leap_year(2024))  # True
print(is_leap_year(2000))  # True
print(is_leap_year(1900))  # False
print(is_leap_year(2023))  # False
`,
    solution: `def is_leap_year(year):
    """Check if a year is a leap year"""
    if year % 400 == 0:
        return True
    elif year % 100 == 0:
        return False
    elif year % 4 == 0:
        return True
    else:
        return False

# Alternative one-liner:
# return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

print(is_leap_year(2024))  # True
print(is_leap_year(2000))  # True
print(is_leap_year(1900))  # False
print(is_leap_year(2023))  # False`
  },
  {
    id: 'cond-3',
    title: 'FizzBuzz Single',
    difficulty: 'Medium',
    description: 'Write a function that returns "Fizz" if divisible by 3, "Buzz" if by 5, "FizzBuzz" if both.',
    hints: [
      'Check divisibility by both 3 AND 5 first',
      'Then check individual conditions',
      'Return the number as string if none match'
    ],
    starterCode: `def fizzbuzz(n):
    """Return Fizz, Buzz, FizzBuzz, or the number"""
    # Your code here:
    pass

# Test
for i in range(1, 16):
    print(fizzbuzz(i))
`,
    solution: `def fizzbuzz(n):
    """Return Fizz, Buzz, FizzBuzz, or the number"""
    if n % 3 == 0 and n % 5 == 0:
        return "FizzBuzz"
    elif n % 3 == 0:
        return "Fizz"
    elif n % 5 == 0:
        return "Buzz"
    else:
        return str(n)

for i in range(1, 16):
    print(fizzbuzz(i))`
  },
  {
    id: 'cond-4',
    title: 'Age Category Classifier',
    difficulty: 'Easy',
    description: 'Classify a person based on their age into categories: infant, child, teenager, adult, senior.',
    hints: [
      'Define age ranges for each category',
      'Handle edge cases (negative age)',
      'Use elif chain'
    ],
    starterCode: `def classify_age(age):
    """
    Classify age into categories:
    - Infant: 0-2
    - Child: 3-12
    - Teenager: 13-19
    - Adult: 20-64
    - Senior: 65+
    Return "Invalid" for negative ages.
    """
    # Your code here:
    pass

# Test
print(classify_age(1))   # Infant
print(classify_age(8))   # Child
print(classify_age(16))  # Teenager
print(classify_age(35))  # Adult
print(classify_age(70))  # Senior
print(classify_age(-5))  # Invalid
`,
    solution: `def classify_age(age):
    if age < 0:
        return "Invalid"
    elif age <= 2:
        return "Infant"
    elif age <= 12:
        return "Child"
    elif age <= 19:
        return "Teenager"
    elif age <= 64:
        return "Adult"
    else:
        return "Senior"

print(classify_age(1))   # Infant
print(classify_age(8))   # Child
print(classify_age(16))  # Teenager
print(classify_age(35))  # Adult
print(classify_age(70))  # Senior
print(classify_age(-5))  # Invalid`
  },
  {
    id: 'cond-5',
    title: 'Triangle Validator',
    difficulty: 'Medium',
    description: 'Check if three sides can form a valid triangle and determine its type (equilateral, isosceles, scalene).',
    hints: [
      'Triangle inequality: sum of any two sides > third side',
      'Equilateral: all sides equal',
      'Isosceles: exactly two sides equal',
      'Scalene: all sides different'
    ],
    starterCode: `def analyze_triangle(a, b, c):
    """
    Analyze triangle with sides a, b, c.
    
    Return:
    - "Invalid" if sides cannot form triangle
    - "Equilateral" if all sides equal
    - "Isosceles" if exactly two sides equal
    - "Scalene" if all sides different
    """
    # Your code here:
    pass

# Test
print(analyze_triangle(3, 3, 3))    # Equilateral
print(analyze_triangle(3, 3, 5))    # Isosceles
print(analyze_triangle(3, 4, 5))    # Scalene
print(analyze_triangle(1, 1, 10))   # Invalid
`,
    solution: `def analyze_triangle(a, b, c):
    # Check for valid triangle
    if a + b <= c or b + c <= a or a + c <= b:
        return "Invalid"
    
    # Check type
    if a == b == c:
        return "Equilateral"
    elif a == b or b == c or a == c:
        return "Isosceles"
    else:
        return "Scalene"

print(analyze_triangle(3, 3, 3))    # Equilateral
print(analyze_triangle(3, 3, 5))    # Isosceles
print(analyze_triangle(3, 4, 5))    # Scalene
print(analyze_triangle(1, 1, 10))   # Invalid`
  },
  {
    id: 'cond-6',
    title: 'Rock Paper Scissors',
    difficulty: 'Medium',
    description: 'Implement the game logic for Rock Paper Scissors.',
    hints: [
      'Rock beats Scissors',
      'Scissors beats Paper',
      'Paper beats Rock',
      'Handle ties and invalid inputs'
    ],
    starterCode: `def rps_winner(player1, player2):
    """
    Determine winner of Rock Paper Scissors.
    
    Inputs: "rock", "paper", or "scissors" (lowercase)
    
    Return:
    - "Player 1 wins" if player1 wins
    - "Player 2 wins" if player2 wins
    - "Tie" if same choice
    - "Invalid" if invalid input
    """
    # Your code here:
    pass

# Test
print(rps_winner("rock", "scissors"))   # Player 1 wins
print(rps_winner("paper", "rock"))      # Player 1 wins
print(rps_winner("scissors", "paper"))  # Player 1 wins
print(rps_winner("rock", "paper"))      # Player 2 wins
print(rps_winner("rock", "rock"))       # Tie
`,
    solution: `def rps_winner(player1, player2):
    valid = {"rock", "paper", "scissors"}
    
    if player1 not in valid or player2 not in valid:
        return "Invalid"
    
    if player1 == player2:
        return "Tie"
    
    # Define winning combinations for player1
    wins = {
        ("rock", "scissors"),
        ("scissors", "paper"),
        ("paper", "rock")
    }
    
    if (player1, player2) in wins:
        return "Player 1 wins"
    else:
        return "Player 2 wins"

print(rps_winner("rock", "scissors"))   # Player 1 wins
print(rps_winner("paper", "rock"))      # Player 1 wins
print(rps_winner("scissors", "paper"))  # Player 1 wins
print(rps_winner("rock", "paper"))      # Player 2 wins
print(rps_winner("rock", "rock"))       # Tie`
  }
];
