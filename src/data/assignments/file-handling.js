export const fileHandlingAssignments = [
  {
    id: 'file-1',
    title: 'Write to File',
    difficulty: 'Easy',
    description: 'Create a program that writes a list of names to a text file, one per line.',
    hints: [
      'Use open(filename, "w") for writing',
      'Use with statement for safe file handling',
      'Use write() or writelines() method'
    ],
    starterCode: `# Write names to a file
names = ["Alice", "Bob", "Charlie", "David"]

# Write each name to "names.txt", one per line
# Your code here:

print("File written successfully!")
`,
    solution: `# Write names to a file
names = ["Alice", "Bob", "Charlie", "David"]

# Write each name to file
with open("names.txt", "w") as file:
    for name in names:
        file.write(name + "\\n")

print("File written successfully!")

# Verify by reading back
with open("names.txt", "r") as file:
    print("File contents:")
    print(file.read())`
  },
  {
    id: 'file-2',
    title: 'Read and Count',
    difficulty: 'Easy',
    description: 'Read a text file and count the number of lines, words, and characters.',
    hints: [
      'Use open(filename, "r") for reading',
      'readlines() returns list of lines',
      'split() breaks text into words'
    ],
    starterCode: `# First, let's create a sample file to read
sample_text = """Python is awesome.
It is easy to learn.
Practice makes perfect.
Keep coding every day."""

with open("sample.txt", "w") as f:
    f.write(sample_text)

# Now read the file and count:
# - Number of lines
# - Number of words
# - Number of characters

# Your code here:
`,
    solution: `# First, let's create a sample file to read
sample_text = """Python is awesome.
It is easy to learn.
Practice makes perfect.
Keep coding every day."""

with open("sample.txt", "w") as f:
    f.write(sample_text)

# Read and count
with open("sample.txt", "r") as file:
    content = file.read()
    lines = content.split("\\n")
    words = content.split()
    chars = len(content)
    
print(f"Lines: {len(lines)}")
print(f"Words: {len(words)}")
print(f"Characters: {chars}")`
  },
  {
    id: 'file-3',
    title: 'Append to File',
    difficulty: 'Medium',
    description: 'Create a simple log system that appends timestamped messages to a log file.',
    hints: [
      'Use "a" mode to append',
      'from datetime import datetime',
      'datetime.now() gets current time'
    ],
    starterCode: `from datetime import datetime

def log_message(message):
    """Append a timestamped message to log.txt"""
    # Your code here:
    pass

# Test the logging function
log_message("Application started")
log_message("User logged in")
log_message("Processing data")

print("Check log.txt for the messages!")
`,
    solution: `from datetime import datetime

def log_message(message):
    """Append a timestamped message to log.txt"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open("log.txt", "a") as file:
        file.write(f"[{timestamp}] {message}\\n")

# Test the logging function
log_message("Application started")
log_message("User logged in")
log_message("Processing data")

# Read and display the log
with open("log.txt", "r") as file:
    print("Log contents:")
    print(file.read())`
  },
  {
    id: 'file-4',
    title: 'CSV Reader',
    difficulty: 'Medium',
    description: 'Read a CSV file and calculate the average of a numeric column.',
    hints: [
      'Split each line by comma',
      'Skip the header row',
      'Convert strings to numbers'
    ],
    starterCode: `# Create a sample CSV file
csv_data = """name,age,score
Alice,25,85
Bob,30,90
Charlie,22,78
David,28,92
Eve,26,88"""

with open("students.csv", "w") as f:
    f.write(csv_data)

# Read the CSV and calculate average score
# Your code here:
`,
    solution: `# Create a sample CSV file
csv_data = """name,age,score
Alice,25,85
Bob,30,90
Charlie,22,78
David,28,92
Eve,26,88"""

with open("students.csv", "w") as f:
    f.write(csv_data)

# Read the CSV and calculate average score
with open("students.csv", "r") as file:
    lines = file.readlines()
    
# Skip header, extract scores
scores = []
for line in lines[1:]:  # Skip header
    parts = line.strip().split(",")
    name, age, score = parts
    scores.append(int(score))
    print(f"{name}: {score}")

average = sum(scores) / len(scores)
print(f"\\nAverage score: {average:.2f}")`
  }
];

export default fileHandlingAssignments;
