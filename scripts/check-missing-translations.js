// Compare English and Marathi translations to find missing keys
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const enPath = path.join(__dirname, '..', 'translation-batch', 'course-content-en.json');
const mrPath = path.join(__dirname, '..', 'translation-batch', 'course-content-mr.json');

console.log('🔍 Analyzing translations...\n');

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const mrData = JSON.parse(fs.readFileSync(mrPath, 'utf8'));

const missing = {
  metadata: {},
  courses: {}
};

function compareObjects(enObj, mrObj, path = '') {
  const issues = [];
  
  for (const key in enObj) {
    const currentPath = path ? `${path}.${key}` : key;
    
    // Check if key exists in Marathi
    if (!(key in mrObj)) {
      issues.push({
        path: currentPath,
        issue: 'Key missing entirely',
        english: enObj[key]
      });
      continue;
    }
    
    const enValue = enObj[key];
    const mrValue = mrObj[key];
    
    // If both are objects, recurse
    if (typeof enValue === 'object' && enValue !== null && !Array.isArray(enValue)) {
      issues.push(...compareObjects(enValue, mrValue, currentPath));
    }
    // If both are arrays
    else if (Array.isArray(enValue) && Array.isArray(mrValue)) {
      if (enValue.length !== mrValue.length) {
        issues.push({
          path: currentPath,
          issue: `Array length mismatch (EN: ${enValue.length}, MR: ${mrValue.length})`,
          english: enValue.length > mrValue.length ? enValue.slice(mrValue.length) : 'Extra items in MR'
        });
      }
      
      // Compare array items
      for (let i = 0; i < Math.min(enValue.length, mrValue.length); i++) {
        if (typeof enValue[i] === 'object' && enValue[i] !== null) {
          issues.push(...compareObjects(enValue[i], mrValue[i], `${currentPath}[${i}]`));
        } else if (typeof enValue[i] === 'string' && enValue[i] === mrValue[i]) {
          // String not translated (same as English)
          issues.push({
            path: `${currentPath}[${i}]`,
            issue: 'Not translated (same as English)',
            english: enValue[i]
          });
        }
      }
    }
    // If values are strings and identical (not translated)
    else if (typeof enValue === 'string' && enValue === mrValue && enValue.length > 0) {
      // Skip technical terms and IDs
      if (!key.includes('id') && !currentPath.includes('code') && enValue.length > 10) {
        issues.push({
          path: currentPath,
          issue: 'Not translated (same as English)',
          english: enValue
        });
      }
    }
  }
  
  return issues;
}

// Compare courses
const allIssues = {};

for (const courseName in enData.courses) {
  console.log(`\n📚 Checking course: ${courseName}`);
  
  if (!mrData.courses[courseName]) {
    console.log(`  ❌ Course missing entirely in Marathi!`);
    allIssues[courseName] = [{
      path: courseName,
      issue: 'Entire course missing',
      english: 'Course not translated'
    }];
    continue;
  }
  
  const enCourse = enData.courses[courseName];
  const mrCourse = mrData.courses[courseName];
  
  const courseIssues = compareObjects(enCourse, mrCourse, courseName);
  
  if (courseIssues.length > 0) {
    allIssues[courseName] = courseIssues;
    console.log(`  ⚠️  Found ${courseIssues.length} issues`);
  } else {
    console.log(`  ✅ Fully translated`);
  }
}

// Generate report
console.log('\n' + '='.repeat(70));
console.log('📊 TRANSLATION REPORT');
console.log('='.repeat(70));

let totalIssues = 0;
const missingTexts = [];

for (const courseName in allIssues) {
  const issues = allIssues[courseName];
  totalIssues += issues.length;
  
  console.log(`\n${courseName.toUpperCase()}: ${issues.length} issues`);
  
  // Group by issue type
  const byType = {};
  issues.forEach(issue => {
    if (!byType[issue.issue]) byType[issue.issue] = [];
    byType[issue.issue].push(issue);
  });
  
  for (const type in byType) {
    console.log(`  - ${type}: ${byType[type].length}`);
    
    // Collect texts for extraction
    if (type.includes('Not translated') || type.includes('missing')) {
      byType[type].forEach(item => {
        if (typeof item.english === 'string' && item.english.length > 0) {
          missingTexts.push({
            course: courseName,
            path: item.path,
            text: item.english
          });
        }
      });
    }
  }
}

console.log('\n' + '='.repeat(70));
console.log(`Total issues found: ${totalIssues}`);
console.log(`Texts needing translation: ${missingTexts.length}`);
console.log('='.repeat(70));

// Save missing texts to file for translation
if (missingTexts.length > 0) {
  const outputPath = path.join(__dirname, '..', 'translation-batch', 'missing-translations.json');
  fs.writeFileSync(outputPath, JSON.stringify(missingTexts, null, 2), 'utf8');
  
  // Also create a simple text file
  const textPath = path.join(__dirname, '..', 'translation-batch', 'missing-translations.txt');
  const textContent = missingTexts.map(item => item.text).join('\n');
  fs.writeFileSync(textPath, textContent, 'utf8');
  
  console.log(`\n✅ Saved missing texts to:`);
  console.log(`   - ${outputPath}`);
  console.log(`   - ${textPath}`);
  console.log(`\n📝 Next steps:`);
  console.log(`   1. Translate the texts in missing-translations.txt`);
  console.log(`   2. We'll merge them back into course-content-mr.json`);
}

// Detailed report
const detailsPath = path.join(__dirname, '..', 'translation-batch', 'translation-issues-detailed.json');
fs.writeFileSync(detailsPath, JSON.stringify(allIssues, null, 2), 'utf8');
console.log(`\n📄 Detailed report: ${detailsPath}`);
