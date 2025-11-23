// Add metadata to advanced.js topics
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', 'src', 'data', 'courses', 'advanced.js');
let content = fs.readFileSync(filePath, 'utf8');

const metadata = {
  'exception-handling': { difficulty: 'Advanced', estimatedTime: 65, prerequisites: ['oop-basics'] },
  'advanced-oop': { difficulty: 'Advanced', estimatedTime: 80, prerequisites: ['oop-basics'] },
  'decorators-advanced': { difficulty: 'Advanced', estimatedTime: 70, prerequisites: ['decorators'] },
  'multithreading': { difficulty: 'Advanced', estimatedTime: 75, prerequisites: ['functions'] },
  'networking': { difficulty: 'Advanced', estimatedTime: 70, prerequisites: ['file-handling'] },
  'async-await': { difficulty: 'Advanced', estimatedTime: 80, prerequisites: ['multithreading'] },
  'context-managers': { difficulty: 'Advanced', estimatedTime: 60, prerequisites: ['exception-handling'] },
  'iterators-iterables': { difficulty: 'Advanced', estimatedTime: 65, prerequisites: ['generators-iterators'] },
  'metaclasses': { difficulty: 'Advanced', estimatedTime: 75, prerequisites: ['advanced-oop'] },
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
console.log('Advanced metadata added successfully!');
