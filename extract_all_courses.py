import re

with open('src/data/courseContent.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract each course section
courses = ['beginner', 'intermediate', 'advanced', 'professional']

for course in courses:
    # Find the course object
    pattern = rf'{course}:\s*\{{'
    match = re.search(pattern, content)
    
    if match:
        start = match.start()
        # Find matching closing brace
        depth = 0
        i = match.end() - 1
        while i < len(content):
            if content[i] == '{':
                depth += 1
            elif content[i] == '}':
                depth -= 1
                if depth == 0:
                    end = i + 1
                    break
            i += 1
        
        # Extract the content
        section = content[start:end]
        # Remove the "courseName: " part to get just the object
        obj_content = section[len(course)+1:].strip()
        
        # Write to file
        file_content = f"export const {course} = {obj_content};\n"
        
        with open(f'src/data/courses/{course}.js', 'w', encoding='utf-8') as out:
            out.write(file_content)
        
        print(f"Extracted {course}: {len(obj_content)} chars")
    else:
        print(f"WARNING: {course} not found")

print("Extraction complete!")
