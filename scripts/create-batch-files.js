// Create flat text files for IndicTrans2 batch translation
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function extractAllTexts(courseData) {
  const texts = [];
  const mapping = [];
  
  courseData.topics.forEach((topic, topicIdx) => {
    // Title
    mapping.push({ topicId: topic.id, topicIdx, field: 'title', index: texts.length });
    texts.push(topic.title);
    
    // Description
    mapping.push({ topicId: topic.id, topicIdx, field: 'description', index: texts.length });
    texts.push(topic.description);
    
    // Overview
    mapping.push({ topicId: topic.id, topicIdx, field: 'overview', index: texts.length });
    texts.push(topic.overview);
    
    // Key Points
    (topic.keyPoints || []).forEach((kp, kpIdx) => {
      mapping.push({ topicId: topic.id, topicIdx, field: 'keyPoints', subIndex: kpIdx, index: texts.length });
      texts.push(kp);
    });
    
    // Use Cases
    (topic.useCases || []).forEach((uc, ucIdx) => {
      mapping.push({ topicId: topic.id, topicIdx, field: 'useCases', subIndex: ucIdx, subField: 'title', index: texts.length });
      texts.push(uc.title);
      mapping.push({ topicId: topic.id, topicIdx, field: 'useCases', subIndex: ucIdx, subField: 'description', index: texts.length });
      texts.push(uc.description);
      mapping.push({ topicId: topic.id, topicIdx, field: 'useCases', subIndex: ucIdx, subField: 'example', index: texts.length });
      texts.push(uc.example);
    });
    
    // Dos
    (topic.dos || []).forEach((item, idx) => {
      mapping.push({ topicId: topic.id, topicIdx, field: 'dos', subIndex: idx, index: texts.length });
      texts.push(item);
    });
    
    // Don'ts
    (topic.donts || []).forEach((item, idx) => {
      mapping.push({ topicId: topic.id, topicIdx, field: 'donts', subIndex: idx, index: texts.length });
      texts.push(item);
    });
    
    // Best Practices
    if (Array.isArray(topic.bestPractices)) {
      topic.bestPractices.forEach((item, idx) => {
        mapping.push({ topicId: topic.id, topicIdx, field: 'bestPractices', subIndex: idx, index: texts.length });
        texts.push(item);
      });
    }
    
    // Code Examples
    (topic.codeExamples || []).forEach((ex, exIdx) => {
      mapping.push({ topicId: topic.id, topicIdx, field: 'codeExamples', subIndex: exIdx, subField: 'title', index: texts.length });
      texts.push(ex.title);
      mapping.push({ topicId: topic.id, topicIdx, field: 'codeExamples', subIndex: exIdx, subField: 'explanation', index: texts.length });
      texts.push(ex.explanation);
    });
  });
  
  return { texts, mapping };
}

async function main() {
  const inputDir = path.join(__dirname, '..', 'translation-input');
  const outputDir = path.join(__dirname, '..', 'translation-batch');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('📝 Creating batch translation files...\n');
  
  const courses = ['beginner', 'intermediate', 'advanced', 'professional'];
  
  for (const courseName of courses) {
    const inputPath = path.join(inputDir, `${courseName}-en.json`);
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${courseName} - file not found`);
      continue;
    }
    
    const courseData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
    const { texts, mapping } = extractAllTexts(courseData);
    
    // Save texts as line-separated file for IndicTrans2
    const textsPath = path.join(outputDir, `${courseName}-en.txt`);
    fs.writeFileSync(textsPath, texts.join('\n'), 'utf8');
    
    // Save mapping for reconstruction
    const mappingPath = path.join(outputDir, `${courseName}-mapping.json`);
    fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2), 'utf8');
    
    console.log(`✅ ${courseName}: ${texts.length} lines`);
    console.log(`   Text file: ${textsPath}`);
    console.log(`   Mapping: ${mappingPath}\n`);
  }
  
  console.log('='.repeat(60));
  console.log('✨ Batch files created!');
  console.log('='.repeat(60));
  console.log('\n📋 IndicTrans2 Usage:');
  console.log('   1. Translate each *-en.txt file to Marathi');
  console.log('   2. Save output as *-mr.txt (same line order)');
  console.log('   3. Run reconstruction script to merge back');
  console.log(`\n📁 Files in: ${outputDir}/`);
}

main().catch(console.error);
