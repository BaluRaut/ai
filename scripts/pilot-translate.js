// Quick pilot - translate just 2 topics to verify quality
import { translate } from '@vitalets/google-translate-api';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { beginner } from '../src/data/courses/beginner.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function translateText(text) {
  if (!text || typeof text !== 'string') return text;
  await delay(300);
  try {
    const result = await translate(text, { to: 'mr', from: 'en' });
    return result.text;
  } catch (error) {
    return text;
  }
}

async function translateTopic(topic) {
  console.log(`\n📝 Translating: ${topic.title}`);
  
  const translated = {
    id: topic.id,
    title_en: topic.title,
    title_mr: await translateText(topic.title),
    description_en: topic.description,
    description_mr: await translateText(topic.description),
    content: {
      overview_en: topic.content.overview,
      overview_mr: await translateText(topic.content.overview),
      keyPoints_en: topic.content.keyPoints,
      keyPoints_mr: [],
      useCases_en: topic.content.useCases,
      useCases_mr: [],
      dos_en: topic.content.dos,
      dos_mr: [],
      donts_en: topic.content.donts,
      donts_mr: [],
    }
  };
  
  // Translate key points
  for (const point of topic.content.keyPoints || []) {
    translated.content.keyPoints_mr.push(await translateText(point));
  }
  
  // Translate use cases
  for (const uc of topic.content.useCases || []) {
    translated.content.useCases_mr.push({
      title: await translateText(uc.title),
      description: await translateText(uc.description),
      example: await translateText(uc.example),
    });
  }
  
  // Translate dos
  for (const item of topic.content.dos || []) {
    translated.content.dos_mr.push(await translateText(item));
  }
  
  // Translate donts
  for (const item of topic.content.donts || []) {
    translated.content.donts_mr.push(await translateText(item));
  }
  
  return translated;
}

async function main() {
  console.log('🧪 PILOT TRANSLATION - First 2 Topics\n');
  
  const results = [];
  
  // Translate first 2 topics
  for (let i = 0; i < Math.min(2, beginner.topics.length); i++) {
    const topic = beginner.topics[i];
    const translated = await translateTopic(topic);
    results.push(translated);
  }
  
  // Save results
  const outputPath = path.join(__dirname, 'pilot-translation-result.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  
  console.log(`\n✅ Pilot complete!`);
  console.log(`📄 Results saved to: ${outputPath}`);
  console.log('\n📋 Please review the quality:');
  console.log(`   - Open: ${outputPath}`);
  console.log('   - Check if translations are accurate');
  console.log('   - If good, run: node scripts/translate-all-content.js');
}

main().catch(console.error);
