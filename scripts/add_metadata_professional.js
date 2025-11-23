// Add metadata to professional.js topics
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', 'src', 'data', 'courses', 'professional.js');
let content = fs.readFileSync(filePath, 'utf8');

const metadata = {
  'design-patterns': { difficulty: 'Professional', estimatedTime: 90, prerequisites: ['advanced-oop'] },
  'concurrency-parallelism': { difficulty: 'Professional', estimatedTime: 85, prerequisites: ['multithreading', 'async-await'] },
  'testing-tdd': { difficulty: 'Professional', estimatedTime: 80, prerequisites: ['functions', 'oop-basics'] },
  'web-scraping': { difficulty: 'Professional', estimatedTime: 70, prerequisites: ['networking', 'regex'] },
  'project-blog-api': { difficulty: 'Professional', estimatedTime: 180, prerequisites: ['testing-tdd'] },
  'project-ecommerce-api': { difficulty: 'Professional', estimatedTime: 240, prerequisites: ['testing-tdd'] },
  'project-data-dashboard': { difficulty: 'Professional', estimatedTime: 200, prerequisites: [] },
  'project-web-scraper': { difficulty: 'Professional', estimatedTime: 150, prerequisites: ['web-scraping'] },
  'project-weather-app': { difficulty: 'Professional', estimatedTime: 160, prerequisites: [] },
  'project-chat-app': { difficulty: 'Professional', estimatedTime: 220, prerequisites: ['async-await'] },
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
console.log('Professional metadata added successfully!');
