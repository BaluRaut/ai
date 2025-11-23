// Pilot translation test - translate one topic to verify quality
import { translate } from '@vitalets/google-translate-api';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function translateText(text, targetLang = 'mr') {
  if (!text || typeof text !== 'string') return text;
  
  try {
    await delay(200); // Rate limiting
    const result = await translate(text, { to: targetLang, from: 'en' });
    console.log(`  ✓ Translated: "${text.substring(0, 50)}..."`);
    return result.text;
  } catch (error) {
    console.error(`  ✗ Error translating: ${error.message}`);
    return text;
  }
}

async function main() {
  console.log('🧪 Testing translation quality with sample content\n');
  
  const samples = {
    title: 'Introduction to Python',
    description: 'Understanding what Python is and why it\'s popular',
    keyPoint1: 'Python is interpreted - no compilation needed',
    keyPoint2: 'Dynamically typed - no need to declare variable types',
    useCase: 'Build websites and web applications using Django, Flask, FastAPI',
    do: 'Follow PEP 8 style guide for readable code',
    dont: 'Don\'t use single letter variable names (except in loops)',
    bestPractice: 'Use 4 spaces for indentation (not tabs)',
    codeExplanation: 'The print() function displays output. Use # for single-line comments.',
  };
  
  const translations = {};
  
  for (const [key, text] of Object.entries(samples)) {
    console.log(`\nTranslating ${key}:`);
    console.log(`EN: ${text}`);
    translations[key] = await translateText(text);
    console.log(`MR: ${translations[key]}\n`);
  }
  
  // Save sample
  const outputPath = path.join(__dirname, 'translation-sample.json');
  fs.writeFileSync(outputPath, JSON.stringify({ 
    english: samples, 
    marathi: translations 
  }, null, 2));
  
  console.log(`\n✅ Sample translations saved to: ${outputPath}`);
  console.log('\n📋 Please review the quality before proceeding with full translation.');
}

main().catch(console.error);
