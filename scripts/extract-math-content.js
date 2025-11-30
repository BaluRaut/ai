// Extract math-foundations content to JSON for translation

import { mathFoundations } from '../src/data/ai-courses/math-foundations.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, '../translation-input/math-foundations-en.json');

// Write to file
fs.writeFileSync(outputPath, JSON.stringify(mathFoundations, null, 2), 'utf-8');

console.log(`✓ Extracted math-foundations content to: ${outputPath}`);
console.log(`✓ ${mathFoundations.topics.length} topics extracted`);
console.log('✓ Ready for Marathi translation with ok.py');
