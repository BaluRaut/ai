// Add metadata to all Data Science modules
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dsPath = path.join(__dirname, '..', 'src', 'data', 'courses', 'datascience');

// Metadata for each Data Science module
const modules = {
  'numpy.js': {
    difficulty: 'Intermediate',
    estimatedTime: 90,
    prerequisites: ['data-structures', 'functions']
  },
  'pandas.js': {
    difficulty: 'Intermediate',
    estimatedTime: 120,
    prerequisites: ['data-structures', 'functions']
  },
  'visualization.js': {
    difficulty: 'Intermediate',
    estimatedTime: 100,
    prerequisites: ['data-structures']
  },
  'scikit-learn-basic.js': {
    difficulty: 'Intermediate',
    estimatedTime: 90,
    prerequisites: ['data-structures', 'functions']
  },
  'scikit-learn-intermediate.js': {
    difficulty: 'Advanced',
    estimatedTime: 110,
    prerequisites: []
  },
  'scikit-learn-advanced.js': {
    difficulty: 'Advanced',
    estimatedTime: 130,
    prerequisites: []
  }
};

Object.keys(modules).forEach(filename => {
  const filePath = path.join(dsPath, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filename} - file not found`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const { difficulty, estimatedTime, prerequisites } = modules[filename];
  const prereqStr = JSON.stringify(prerequisites);
  
  // Pattern for Data Science modules (they have id, title, description)
  // Match any id since they vary by module
  const pattern = /(id: '[^']+',\s+title: '[^']+',\s+description: '[^']+',)\s+(content: \{)/g;
  
  const replacement = `$1\n    difficulty: '${difficulty}',\n    estimatedTime: ${estimatedTime},\n    prerequisites: ${prereqStr},\n    $2`;
  
  content = content.replace(pattern, replacement);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`${filename} metadata added!`);
});

console.log('All Data Science metadata added successfully!');
