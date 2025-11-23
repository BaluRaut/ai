// Add metadata to intermediate.js topics
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', 'src', 'data', 'courses', 'intermediate.js');
let content = fs.readFileSync(filePath, 'utf8');

const metadata = {
  'functions': { difficulty: 'Intermediate', estimatedTime: 60, prerequisites: ['control-flow-basics'] },
  'data-structures': { difficulty: 'Intermediate', estimatedTime: 70, prerequisites: ['variables-datatypes'] },
  'file-handling': { difficulty: 'Intermediate', estimatedTime: 55, prerequisites: ['exceptions'] },
  'modules-packages': { difficulty: 'Intermediate', estimatedTime: 50, prerequisites: ['functions'] },
  'oop-basics': { difficulty: 'Intermediate', estimatedTime: 75, prerequisites: ['functions'] },
  'list-comprehensions': { difficulty: 'Intermediate', estimatedTime: 45, prerequisites: ['data-structures', 'loops-for-while'] },
  'decorators': { difficulty: 'Intermediate', estimatedTime: 55, prerequisites: ['functions'] },
  'generators-iterators': { difficulty: 'Intermediate', estimatedTime: 50, prerequisites: ['functions'] },
  'regex': { difficulty: 'Intermediate', estimatedTime: 60, prerequisites: ['functions'] },
  'json-apis': { difficulty: 'Intermediate', estimatedTime: 55, prerequisites: ['file-handling'] },
  'lambda-functions': { difficulty: 'Intermediate', estimatedTime: 40, prerequisites: ['functions'] },
};

Object.keys(metadata).forEach(topicId => {
  const { difficulty, estimatedTime, prerequisites } = metadata[topicId];
  const prereqStr = JSON.stringify(prerequisites);
  
  const pattern = new RegExp(
    `(id: '${topicId}',\\s+title: '[^']+',\\s+description: '[^']+',)\\s+(content: \\{)`,
    'g'
  );
  
  const replacement = `$1\n        difficulty: '${difficulty}',\n        estimatedTime: ${estimatedTime},\n        prerequisites: ${prereqStr},\n        $2`;
  
  content = content.replace(pattern, replacement);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Intermediate metadata added successfully!');
