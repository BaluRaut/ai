// Metadata to add to beginner.js topics
// Run this script to add difficulty, estimatedTime, and prerequisites to all topics

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', 'src', 'data', 'courses', 'beginner.js');
let content = fs.readFileSync(filePath, 'utf8');

const metadata = {
  'operators': { difficulty: 'Beginner', estimatedTime: 40, prerequisites: ['variables-datatypes'] },
  'installing-python': { difficulty: 'Beginner', estimatedTime: 20, prerequisites: [] },
  'execution-modes': { difficulty: 'Beginner', estimatedTime: 25, prerequisites: ['installing-python'] },
  'python-tokens': { difficulty: 'Beginner', estimatedTime: 35, prerequisites: ['intro-python'] },
  'control-flow-basics': { difficulty: 'Beginner', estimatedTime: 50, prerequisites: ['operators'] },
  'loops-for-while': { difficulty: 'Beginner', estimatedTime: 55, prerequisites: ['control-flow-basics'] },
  'tokens-keywords': { difficulty: 'Beginner', estimatedTime: 30, prerequisites: ['python-tokens'] },
  'identifiers-naming': { difficulty: 'Beginner', estimatedTime: 35, prerequisites: ['python-tokens'] },
  'literals-types': { difficulty: 'Beginner', estimatedTime: 40, prerequisites: ['variables-datatypes'] },
  'python-comments': { difficulty: 'Beginner', estimatedTime: 20, prerequisites: ['intro-python'] },
  'user-input': { difficulty: 'Beginner', estimatedTime: 35, prerequisites: ['variables-datatypes', 'operators'] },
  'display-output': { difficulty: 'Beginner', estimatedTime: 40, prerequisites: ['variables-datatypes'] },
};

Object.keys(metadata).forEach(topicId => {
  const { difficulty, estimatedTime, prerequisites } = metadata[topicId];
  const prereqStr = JSON.stringify(prerequisites);
  
  // Find pattern: id: 'topic-id',\n        title: 'Topic Title',\n        description: '...',\n        content: {
  // Replace with: id: 'topic-id',\n        title: 'Topic Title',\n        description: '...',\n        difficulty: '...',\n        estimatedTime: ...,\n        prerequisites: [...],\n        content: {
  
  const pattern = new RegExp(
    `(id: '${topicId}',\\s+title: '[^']+',\\s+description: '[^']+',)\\s+(content: \\{)`,
    'g'
  );
  
  const replacement = `$1\n        difficulty: '${difficulty}',\n        estimatedTime: ${estimatedTime},\n        prerequisites: ${prereqStr},\n        $2`;
  
  content = content.replace(pattern, replacement);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Metadata added successfully!');
