// Full content translation script - creates Marathi translation files
import { translate } from '@vitalets/google-translate-api';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { beginner } from '../src/data/courses/beginner.js';
import { intermediate } from '../src/data/courses/intermediate.js';
import { advanced } from '../src/data/courses/advanced.js';
import { professional } from '../src/data/courses/professional.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let translationCount = 0;
const BATCH_SIZE = 10;
const RATE_LIMIT_DELAY = 300; // ms between requests

async function translateText(text, targetLang = 'mr') {
  if (!text || typeof text !== 'string' || text.trim() === '') return text;
  
  // Don't translate code, URLs, or technical terms
  if (text.includes('```') || text.includes('http') || text.startsWith('import ')) {
    return text;
  }
  
  try {
    translationCount++;
    if (translationCount % BATCH_SIZE === 0) {
      console.log(`  [Progress: ${translationCount} translations completed]`);
      await delay(1000); // Longer pause every 10 translations
    }
    
    await delay(RATE_LIMIT_DELAY);
    const result = await translate(text, { to: targetLang, from: 'en' });
    return result.text;
  } catch (error) {
    console.error(`  ✗ Translation error: ${error.message}`);
    await delay(2000); // Wait longer on error
    return text; // Return original on error
  }
}

async function translateUseCases(useCases) {
  if (!Array.isArray(useCases)) return [];
  
  const translated = [];
  for (const useCase of useCases) {
    translated.push({
      title: await translateText(useCase.title),
      description: await translateText(useCase.description),
      example: await translateText(useCase.example),
    });
  }
  return translated;
}

async function translateCodeExamples(examples) {
  if (!Array.isArray(examples)) return [];
  
  const translated = [];
  for (const example of examples) {
    translated.push({
      title: await translateText(example.title),
      explanation: await translateText(example.explanation),
      // code stays in English
    });
  }
  return translated;
}

async function translateTopic(topic) {
  console.log(`\n📝 Translating: ${topic.title}`);
  
  const translated = {
    id: topic.id,
    title: await translateText(topic.title),
    description: await translateText(topic.description),
    content: {
      overview: await translateText(topic.content.overview),
      keyPoints: [],
      useCases: [],
      dos: [],
      donts: [],
      bestPractices: [],
      codeExamples: [],
    }
  };
  
  // Translate arrays
  console.log('  → Key Points...');
  for (const point of (topic.content.keyPoints || [])) {
    translated.content.keyPoints.push(await translateText(point));
  }
  
  console.log('  → Use Cases...');
  translated.content.useCases = await translateUseCases(topic.content.useCases || []);
  
  console.log('  → Do\'s...');
  for (const item of (topic.content.dos || [])) {
    translated.content.dos.push(await translateText(item));
  }
  
  console.log('  → Don\'ts...');
  for (const item of (topic.content.donts || [])) {
    translated.content.donts.push(await translateText(item));
  }
  
  console.log('  → Best Practices...');
  for (const item of (topic.content.bestPractices || [])) {
    translated.content.bestPractices.push(await translateText(item));
  }
  
  console.log('  → Code Examples...');
  translated.content.codeExamples = await translateCodeExamples(topic.content.codeExamples || []);
  
  console.log(`  ✅ Completed: ${topic.title}`);
  return translated;
}

async function translateCourse(courseName, courseData) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`🌍 Translating ${courseName.toUpperCase()} Course`);
  console.log(`${'='.repeat(60)}`);
  console.log(`Topics to translate: ${courseData.topics.length}\n`);
  
  const translations = {};
  
  for (let i = 0; i < courseData.topics.length; i++) {
    const topic = courseData.topics[i];
    console.log(`[${i + 1}/${courseData.topics.length}]`);
    
    const translated = await translateTopic(topic);
    translations[topic.id] = translated;
    
    // Save progress after each topic
    const tempPath = path.join(__dirname, `temp-${courseName}-mr.json`);
    fs.writeFileSync(tempPath, JSON.stringify(translations, null, 2));
  }
  
  return translations;
}

async function main() {
  const translationsDir = path.join(__dirname, '..', 'src', 'i18n', 'courseTranslations');
  
  if (!fs.existsSync(translationsDir)) {
    fs.mkdirSync(translationsDir, { recursive: true });
  }
  
  console.log('\n🚀 Starting Marathi Translation Process');
  console.log('⏱️  Estimated time: 60-90 minutes for all courses');
  console.log('⚠️  Please keep this process running...\n');
  
  const courses = [
    { name: 'beginner', data: beginner },
    { name: 'intermediate', data: intermediate },
    { name: 'advanced', data: advanced },
    { name: 'professional', data: professional },
  ];
  
  for (const { name, data } of courses) {
    try {
      const translations = await translateCourse(name, data);
      
      const outputPath = path.join(translationsDir, `${name}-mr.json`);
      fs.writeFileSync(outputPath, JSON.stringify(translations, null, 2));
      
      console.log(`\n✅ Saved: ${outputPath}`);
      console.log(`   Total translations so far: ${translationCount}\n`);
      
      // Cleanup temp file
      const tempPath = path.join(__dirname, `temp-${name}-mr.json`);
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
      
    } catch (error) {
      console.error(`\n❌ Error translating ${name}:`, error.message);
      console.log('Progress saved in temp file. You can resume later.');
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('✨ TRANSLATION COMPLETE!');
  console.log('='.repeat(60));
  console.log(`📊 Total translations: ${translationCount}`);
  console.log(`📁 Files created in: ${translationsDir}`);
  console.log('\n📋 Next steps:');
  console.log('1. Review translations in courseTranslations/ directory');
  console.log('2. Run: npm run update-components (to integrate translations)');
  console.log('3. Test in Marathi language mode');
}

main().catch(error => {
  console.error('\n❌ Fatal error:', error);
  console.log(`\n📊 Completed ${translationCount} translations before error`);
  process.exit(1);
});
