import re

# Read the original file
with open('src/data/courseContent.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find where dataScience starts
match = re.search(r'dataScience:\s*{', content)
if match:
    ds_start = match.start()
    # Find the end - look for closing brace before the final export/closing
    # Count braces to find matching close
    depth = 0
    i = match.end() - 1
    start_found = False
    while i < len(content):
        if content[i] == '{':
            depth += 1
            start_found = True
        elif content[i] == '}':
            depth -= 1
            if start_found and depth == 0:
                ds_end = i + 1
                break
        i += 1
    
    ds_content = content[ds_start:ds_end]
    
    # Extract just the object content (remove "dataScience: ")
    ds_object = re.sub(r'^\s*dataScience:\s*', '', ds_content).strip()
    
    # Write data science module
    with open('src/data/courses/dataScience.js', 'w', encoding='utf-8') as f:
        f.write('export const dataScience = ' + ds_object + ';\n')
    
    print(f"Extracted dataScience: {len(ds_object)} chars")
    print(f"File created: src/data/courses/dataScience.js")
