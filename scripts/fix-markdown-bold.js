/**
 * Fix double asterisk markdown bold syntax in course content files
 * Converts **text** to plain text (removes markdown formatting)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesToFix = [
  '../src/data/courses/beginner.js',
  '../src/data/courses/intermediate.js',
  '../src/data/courses/advanced.js',
  '../src/data/courses/professional.js',
  '../src/data/courses/datascience/numpy.js',
  '../src/data/courses/datascience/pandas.js',
  '../src/data/courses/datascience/visualization.js',
  '../src/data/courses/datascience/scikit-learn-basic.js',
  '../src/data/courses/datascience/scikit-learn-intermediate.js',
  '../src/data/courses/datascience/scikit-learn-advanced.js',
];

function fixMarkdownBold(content) {
  // Pattern to match **text** but NOT Python's ** operator in code
  // Only fix if it's at start of line or after space/colon, and contains letters
  return content.replace(/(\n\s*|\s|^)(\*\*)([A-Za-z][^*\n]*?)(\*\*)(\s|:|$)/g, (match, prefix, open, text, close, suffix) => {
    // Don't replace if it's in code context (has backticks nearby or is Python operator)
    if (text.includes('`') || text.match(/^\d+$/)) {
      return match; // Keep as-is
    }
    // Remove the ** markers, keep the text
    return `${prefix}${text}${suffix}`;
  });
}

let totalFiles = 0;
let totalReplacements = 0;

filesToFix.forEach(relPath => {
  const filePath = path.join(__dirname, relPath);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Skipped (not found): ${relPath}`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = fixMarkdownBold(content);
  
  if (content !== newContent) {
    const changes = content.split('\n').filter((line, idx) => {
      const newLine = newContent.split('\n')[idx];
      return line !== newLine && line.includes('**');
    }).length;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    totalFiles++;
    totalReplacements += changes;
    console.log(`✅ Fixed ${path.basename(filePath)}: ${changes} lines changed`);
  } else {
    console.log(`⏭️  No changes needed: ${path.basename(filePath)}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Files modified: ${totalFiles}`);
console.log(`   Approximate replacements: ${totalReplacements}`);
console.log(`\n✨ Done! Double asterisks removed from markdown headings.`);
