// Translation script for course content
// Uses Google Translate API (free tier) via @vitalets/google-translate-api
// Install with: npm install @vitalets/google-translate-api

import translate from '@vitalets/google-translate-api';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rate limiting - 1 request per 100ms to avoid hitting API limits
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function translateText(text, targetLang = 'mr') {
  if (!text || typeof text !== 'string') return text;
  
  try {
    await delay(100); // Rate limiting
    const result = await translate(text, { to: targetLang });
    return result.text;
  } catch (error) {
    console.error('Translation error:', error.message);
    return text; // Return original if translation fails
  }
}

async function translateArray(arr, targetLang = 'mr') {
  const translated = [];
  for (const item of arr) {
    if (typeof item === 'string') {
      translated.push(await translateText(item, targetLang));
    } else if (typeof item === 'object') {
      translated.push(await translateObject(item, targetLang));
    } else {
      translated.push(item);
    }
  }
  return translated;
}

async function translateObject(obj, targetLang = 'mr') {
  if (!obj || typeof obj !== 'object') return obj;
  
  const translated = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      translated[key] = await translateText(value, targetLang);
    } else if (Array.isArray(value)) {
      translated[key] = await translateArray(value, targetLang);
    } else if (typeof value === 'object') {
      translated[key] = await translateObject(value, targetLang);
    } else {
      translated[key] = value;
    }
  }
  return translated;
}

async function extractAndTranslateTopic(topic) {
  console.log(`Translating: ${topic.title}...`);
  
  const translated = {
    ...topic,
    title_mr: await translateText(topic.title),
    description_mr: await translateText(topic.description),
    content_mr: {
      overview: await translateText(topic.content.overview),
      keyPoints: await translateArray(topic.content.keyPoints),
      useCases: await translateArray(topic.content.useCases),
      dos: await translateArray(topic.content.dos),
      donts: await translateArray(topic.content.donts),
      bestPractices: await translateArray(topic.content.bestPractices),
      // Keep code examples in English but translate explanations
      codeExamples: await Promise.all(
        (topic.content.codeExamples || []).map(async (example) => ({
          ...example,
          title_mr: await translateText(example.title),
          explanation_mr: await translateText(example.explanation),
        }))
      ),
    }
  };
  
  console.log(`✓ Completed: ${topic.title}`);
  return translated;
}

async function processFile(filePath, outputPath) {
  console.log(`\n📄 Processing: ${path.basename(filePath)}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract the topics array
  const topicsMatch = content.match(/topics:\s*\[([\s\S]*)\]\s*\}/);
  if (!topicsMatch) {
    console.log('⚠️  No topics found in file');
    return;
  }
  
  // This is a simplified approach - for production, we'd use a proper parser
  // For now, we'll create a translation mapping file instead
  console.log('Creating translation mapping...');
  
  // Import the module dynamically
  const module = await import(filePath);
  const courseData = module.beginner || module.intermediate || module.advanced || 
                     module.professional || module.dataScience || module.default;
  
  if (!courseData || !courseData.topics) {
    console.log('⚠️  Could not load course data');
    return;
  }
  
  const translations = {};
  
  for (const topic of courseData.topics) {
    const topicId = topic.id;
    console.log(`\n📝 Translating topic: ${topicId}`);
    
    translations[topicId] = {
      title: await translateText(topic.title),
      description: await translateText(topic.description),
      overview: await translateText(topic.content.overview),
      keyPoints: await translateArray(topic.content.keyPoints),
      useCases: topic.content.useCases ? await translateArray(topic.content.useCases) : [],
      dos: topic.content.dos ? await translateArray(topic.content.dos) : [],
      donts: topic.content.donts ? await translateArray(topic.content.donts) : [],
      bestPractices: topic.content.bestPractices ? await translateArray(topic.content.bestPractices) : [],
      codeExamples: topic.content.codeExamples ? await Promise.all(
        topic.content.codeExamples.map(async (ex) => ({
          title: await translateText(ex.title),
          explanation: await translateText(ex.explanation)
        }))
      ) : []
    };
  }
  
  // Save translations
  fs.writeFileSync(
    outputPath,
    JSON.stringify(translations, null, 2),
    'utf8'
  );
  
  console.log(`\n✅ Saved translations to: ${path.basename(outputPath)}`);
}

// Main execution
async function main() {
  const coursesDir = path.join(__dirname, '..', 'src', 'data', 'courses');
  const translationsDir = path.join(__dirname, '..', 'src', 'i18n', 'courseTranslations');
  
  // Create translations directory
  if (!fs.existsSync(translationsDir)) {
    fs.mkdirSync(translationsDir, { recursive: true });
  }
  
  const files = [
    { input: path.join(coursesDir, 'beginner.js'), output: path.join(translationsDir, 'beginner-mr.json') },
    { input: path.join(coursesDir, 'intermediate.js'), output: path.join(translationsDir, 'intermediate-mr.json') },
    { input: path.join(coursesDir, 'advanced.js'), output: path.join(translationsDir, 'advanced-mr.json') },
    { input: path.join(coursesDir, 'professional.js'), output: path.join(translationsDir, 'professional-mr.json') },
  ];
  
  console.log('🚀 Starting translation process...\n');
  console.log('⚠️  Note: This will take several minutes due to API rate limits\n');
  
  for (const { input, output } of files) {
    if (fs.existsSync(input)) {
      await processFile(input, output);
    }
  }
  
  console.log('\n✨ Translation complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Review translations in src/i18n/courseTranslations/');
  console.log('2. Update components to use translated content');
  console.log('3. Test in Marathi language mode');
}

main().catch(console.error);
