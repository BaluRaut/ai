export const chapters = [
  {
    title: "Variables and Data Types",
    level: "Beginner (10th Grade)",
    description: "Learn how to store and work with different types of information in Python",
    what: "Variables are like labeled boxes where you can store information. Just like you label a box with 'Books' or 'Toys', in Python, you give names to your data. Data types tell Python what kind of information you're storing - is it a number, text, or something else?",
    why: "Think of variables as your helpers. Instead of remembering '25' every time you need someone's age, you can save it in a variable called 'age'. This makes your code easier to read and change. If the age changes, you only update it in one place! Data types are important because Python treats numbers and text differently - you can add numbers (5 + 3 = 8), but adding text works differently ('Hello' + 'World' = 'HelloWorld').",
    how: "Creating variables in Python is super easy! You just write a name, an equals sign, and the value you want to store. Python is smart - it figures out the data type automatically!",
    codeExamples: [
      {
        title: "Creating Variables",
        code: `# Storing different types of information
name = "Priya"           # Text (called 'string')
age = 16                 # Whole number (called 'integer')
height = 5.4             # Decimal number (called 'float')
is_student = True        # True or False (called 'boolean')

# Using variables
print("Hello, my name is", name)
print("I am", age, "years old")
print("My height is", height, "feet")`,
        explanation: "See how easy it is? You just give a name and a value. Python remembers it for you!"
      },
      {
        title: "Changing Variables",
        code: `# Variables can change!
score = 0
print("Starting score:", score)

score = 10
print("After first game:", score)

score = score + 5      # Add 5 to current score
print("After bonus:", score)`,
        explanation: "Variables are called 'variable' because they can vary (change)! You can update them anytime."
      },
      {
        title: "Working with Text",
        code: `# Fun with text variables
first_name = "Ananya"
last_name = "Sharma"

# Combining text (called 'concatenation')
full_name = first_name + " " + last_name
print(full_name)

# Making text uppercase
print(full_name.upper())    # ANANYA SHARMA

# Counting letters
print("Your name has", len(full_name), "letters")`,
        explanation: "You can do cool things with text! Combine them, change them, count them - Python makes it easy."
      }
    ]
  },
  {
    title: "Lists - Your Data Collection",
    level: "Beginner (12th Grade)",
    description: "Learn how to store and manage multiple items together in Python",
    what: "A list is like a shopping bag that can hold many items together. Instead of creating separate variables for each item, you can put them all in one list. For example, instead of having 'friend1', 'friend2', 'friend3', you can have one list called 'friends' that holds all names. Lists keep items in order and let you add, remove, or change items whenever you want.",
    why: "Lists are super powerful! Imagine you want to store the names of all your classmates - creating 50 separate variables would be crazy, right? With a list, you use just one variable to hold all names. You can easily add new friends, remove names, find someone in the list, or sort everyone alphabetically. Lists make managing multiple items simple and organized. They're used everywhere - from storing user data in apps to managing inventories in shops!",
    how: "Creating a list is easy - you use square brackets [] and put your items inside, separated by commas. Python gives you many helpful tools to work with lists, and we'll explore the most useful ones below.",
    codeExamples: [
      {
        title: "Creating and Accessing Lists",
        code: `# Creating a list of favorite subjects
subjects = ["Math", "Science", "English", "History", "Art"]

# Accessing items (counting starts from 0!)
print("First subject:", subjects[0])      # Math
print("Third subject:", subjects[2])       # English
print("Last subject:", subjects[-1])       # Art (negative counts from end)

# How many subjects?
print("Total subjects:", len(subjects))`,
        explanation: "Lists use numbers (called 'index') to access items. Remember: counting starts from 0, not 1! Use -1 to get the last item."
      },
      {
        title: "Adding and Removing Items",
        code: `# Starting with favorite fruits
fruits = ["Apple", "Banana", "Mango"]
print("My fruits:", fruits)

# Adding one fruit
fruits.append("Orange")
print("After adding:", fruits)

# Adding multiple fruits
fruits.extend(["Grapes", "Strawberry"])
print("After extending:", fruits)

# Removing a fruit
fruits.remove("Banana")    # Remove by name
print("After removing:", fruits)

# Removing last item
last_fruit = fruits.pop()
print("Removed:", last_fruit)
print("Remaining:", fruits)`,
        explanation: "Use append() to add one item, extend() for multiple items. Remove items by name with remove() or by position with pop()."
      },
      {
        title: "Fun Things with Lists",
        code: `# List of test scores
scores = [85, 92, 78, 95, 88, 76]

# Find highest and lowest
print("Highest score:", max(scores))
print("Lowest score:", min(scores))
print("Average score:", sum(scores) / len(scores))

# Sort the scores
scores.sort()
print("Sorted scores:", scores)

# Reverse the order
scores.reverse()
print("Reversed:", scores)

# Check if a score exists
if 92 in scores:
    print("Yes! Someone scored 92")`,
        explanation: "Python has built-in functions for common tasks: max(), min(), sum(), sort(), and more. Use 'in' to check if an item exists."
      },
      {
        title: "Looping Through Lists",
        code: `# List of daily tasks
tasks = ["Wake up", "Exercise", "Study", "Practice coding", "Sleep"]

# Print each task
print("My daily routine:")
for task in tasks:
    print("✓", task)

# With numbers
print("\nNumbered list:")
for i, task in enumerate(tasks, 1):
    print(f"{i}. {task}")`,
        explanation: "Use 'for' loops to go through each item in a list. The enumerate() function gives you both the number and the item!"
      }
    ]
  }
]
