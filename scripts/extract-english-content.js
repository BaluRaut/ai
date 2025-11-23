// Extract all English text from course content for translation
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { beginner } from '../src/data/courses/beginner.js';
import { intermediate } from '../src/data/courses/intermediate.js';
import { advanced } from '../src/data/courses/advanced.js';
import { professional } from '../src/data/courses/professional.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function extractTopicTexts(topic) {
  const texts = {
    id: topic.id,
    title: topic.title,
    description: topic.description,
    overview: topic.content.overview,
    keyPoints: topic.content.keyPoints || [],
    useCases: (topic.content.useCases || []).map(uc => ({
      title: uc.title,
      description: uc.description,
      example: uc.example,
    })),
    dos: topic.content.dos || [],
    donts: topic.content.donts || [],
    bestPractices: topic.content.bestPractices || [],
    codeExamples: (topic.content.codeExamples || []).map(ex => ({
      title: ex.title,
      explanation: ex.explanation,
    })),
  };
  
  return texts;
}

function extractCourseTexts(courseName, courseData) {
  console.log(`Extracting ${courseName}...`);
  
  const extracted = {
    courseName,
    totalTopics: courseData.topics.length,
    topics: courseData.topics.map(extractTopicTexts),
  };
  
  // Count total text items
  let totalTexts = 0;
  extracted.topics.forEach(topic => {
    totalTexts += 3; // title, description, overview
    totalTexts += topic.keyPoints.length;
    totalTexts += topic.useCases.length * 3; // title, desc, example each
    totalTexts += topic.dos.length;
    totalTexts += topic.donts.length;
    totalTexts += topic.bestPractices.length;
    totalTexts += topic.codeExamples.length * 2; // title, explanation each
  });
  
  extracted.totalTexts = totalTexts;
  console.log(`  → ${courseData.topics.length} topics, ${totalTexts} text items`);
  
  return extracted;
}

async function main() {
  const outputDir = path.join(__dirname, '..', 'translation-input');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🔍 Extracting English text from all course content...\n');
  
  const courses = [
    { name: 'beginner', data: beginner },
    { name: 'intermediate', data: intermediate },
    { name: 'advanced', data: advanced },
    { name: 'professional', data: professional },
  ];
  
  const allExtracted = {};
  let grandTotal = 0;
  
  for (const { name, data } of courses) {
    const extracted = extractCourseTexts(name, data);
    allExtracted[name] = extracted;
    grandTotal += extracted.totalTexts;
    
    // Save individual course file
    const filePath = path.join(outputDir, `${name}-en.json`);
    fs.writeFileSync(filePath, JSON.stringify(extracted, null, 2));
    console.log(`  ✅ Saved: ${filePath}\n`);
  }
  
  // Save combined file
  const combinedPath = path.join(outputDir, 'all-courses-en.json');
  fs.writeFileSync(combinedPath, JSON.stringify(allExtracted, null, 2));
  
  console.log('='.repeat(60));
  console.log('✨ Extraction Complete!');
  console.log('='.repeat(60));
  console.log(`📊 Summary:`);
  console.log(`   - Total topics: ${courses.reduce((sum, c) => sum + c.data.topics.length, 0)}`);
  console.log(`   - Total text items: ${grandTotal}`);
  console.log(`   - Output directory: ${outputDir}`);
  console.log('\n📁 Files created:');
  console.log(`   - beginner-en.json (${allExtracted.beginner.totalTexts} texts)`);
  console.log(`   - intermediate-en.json (${allExtracted.intermediate.totalTexts} texts)`);
  console.log(`   - advanced-en.json (${allExtracted.advanced.totalTexts} texts)`);
  console.log(`   - professional-en.json (${allExtracted.professional.totalTexts} texts)`);
  console.log(`   - all-courses-en.json (combined)`);
  console.log('\n📋 Next steps:');
  console.log('   1. Use IndicTrans2 to translate these JSON files');
  console.log('   2. Save translations as *-mr.json files');
  console.log('   3. Run merge script to integrate translations');
}

main().catch(console.error);
