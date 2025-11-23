// Translate BEGINNER path only (14 topics)
import { translate } from '@vitalets/google-translate-api';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { beginner } from '../src/data/courses/beginner.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
let translationCount = 0;

async function translateText(text) {
  if (!text || typeof text !== 'string') return text;
  await delay(250); // Rate limiting
  
  try {
    translationCount++;
    const result = await translate(text, { to: 'mr', from: 'en' });
    return result.text;
  } catch (error) {
    console.error(`  ⚠️  Error: ${error.message.substring(0, 50)}`);
    await delay(1000);
    return text;
  }
}

async function translateTopic(topic, index, total) {
  console.log(`\n[${ index + 1}/${total}] 📝 ${topic.title}`);
  
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
  
  // Key Points
  process.stdout.write('  → Key Points');
  for (const point of (topic.content.keyPoints || [])) {
    translated.content.keyPoints.push(await translateText(point));
    process.stdout.write('.');
  }
  console.log(' ✓');
  
  // Use Cases
  process.stdout.write('  → Use Cases');
  for (const uc of (topic.content.useCases || [])) {
    translated.content.useCases.push({
      title: await translateText(uc.title),
      description: await translateText(uc.description),
      example: await translateText(uc.example),
    });
    process.stdout.write('.');
  }
  console.log(' ✓');
  
  // Do's
  process.stdout.write('  → Do\'s');
  for (const item of (topic.content.dos || [])) {
    translated.content.dos.push(await translateText(item));
    process.stdout.write('.');
  }
  console.log(' ✓');
  
  // Don'ts
  process.stdout.write('  → Don\'ts');
  for (const item of (topic.content.donts || [])) {
    translated.content.donts.push(await translateText(item));
    process.stdout.write('.');
  }
  console.log(' ✓');
  
  // Best Practices
  process.stdout.write('  → Best Practices');
  for (const item of (topic.content.bestPractices || [])) {
    translated.content.bestPractices.push(await translateText(item));
    process.stdout.write('.');
  }
  console.log(' ✓');
  
  // Code Examples
  process.stdout.write('  → Code Examples');
  for (const ex of (topic.content.codeExamples || [])) {
    translated.content.codeExamples.push({
      title: await translateText(ex.title),
      explanation: await translateText(ex.explanation),
    });
    process.stdout.write('.');
  }
  console.log(' ✓');
  
  console.log(`  ✅ Done (${translationCount} translations total)`);
  return translated;
}

async function main() {
  console.log('\n' + '='.repeat(70));
  console.log('🌍 BEGINNER PATH - MARATHI TRANSLATION');
  console.log('='.repeat(70));
  console.log(`📚 Topics: ${beginner.topics.length}`);
  console.log(`⏱️  Estimated time: 15-20 minutes`);
  console.log(`🔄 Progress will be saved after each topic\n`);
  
  const startTime = Date.now();
  const translations = {};
  const translationsDir = path.join(__dirname, '..', 'src', 'i18n', 'courseTranslations');
  
  if (!fs.existsSync(translationsDir)) {
    fs.mkdirSync(translationsDir, { recursive: true });
  }
  
  const tempFile = path.join(__dirname, 'temp-beginner-progress.json');
  
  for (let i = 0; i < beginner.topics.length; i++) {
    const topic = beginner.topics[i];
    
    try {
      const translated = await translateTopic(topic, i, beginner.topics.length);
      translations[topic.id] = translated;
      
      // Save progress after each topic
      fs.writeFileSync(tempFile, JSON.stringify(translations, null, 2));
      
      // Show progress
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      const perTopic = Math.round(elapsed / (i + 1));
      const remaining = perTopic * (beginner.topics.length - i - 1);
      console.log(`  ⏱️  Elapsed: ${elapsed}s | Est. remaining: ${remaining}s\n`);
      
    } catch (error) {
      console.error(`\n❌ Error on topic ${topic.id}:`, error.message);
      console.log('Progress saved. You can resume later.\n');
      process.exit(1);
    }
  }
  
  // Save final file
  const outputPath = path.join(translationsDir, 'beginner-mr.json');
  fs.writeFileSync(outputPath, JSON.stringify(translations, null, 2));
  
  // Clean up temp file
  if (fs.existsSync(tempFile)) {
    fs.unlinkSync(tempFile);
  }
  
  const totalTime = Math.round((Date.now() - startTime) / 1000);
  
  console.log('\n' + '='.repeat(70));
  console.log('✨ BEGINNER PATH TRANSLATION COMPLETE!');
  console.log('='.repeat(70));
  console.log(`✅ Topics translated: ${beginner.topics.length}`);
  console.log(`📊 Total translations: ${translationCount}`);
  console.log(`⏱️  Total time: ${Math.floor(totalTime / 60)}m ${totalTime % 60}s`);
  console.log(`📁 Saved to: ${outputPath}`);
  console.log('\n📋 Next steps:');
  console.log('1. Review the translations');
  console.log('2. Run other paths: intermediate, advanced, professional');
  console.log('3. Integrate into components\n');
}

main().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});
