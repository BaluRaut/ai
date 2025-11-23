// Reconstruct translated JSON from IndicTrans2 output
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function reconstructTranslations(originalData, translatedLines, mapping) {
  const result = {
    courseName: originalData.courseName,
    totalTopics: originalData.totalTopics,
    topics: [],
  };
  
  originalData.topics.forEach((topic, topicIdx) => {
    const translatedTopic = {
      id: topic.id,
      title: '',
      description: '',
      overview: '',
      keyPoints: [],
      useCases: [],
      dos: [],
      donts: [],
      bestPractices: [],
      codeExamples: [],
    };
    
    // Fill in translations based on mapping
    mapping.forEach(map => {
      if (map.topicIdx !== topicIdx) return;
      
      const translatedText = translatedLines[map.index];
      
      switch (map.field) {
        case 'title':
          translatedTopic.title = translatedText;
          break;
        case 'description':
          translatedTopic.description = translatedText;
          break;
        case 'overview':
          translatedTopic.overview = translatedText;
          break;
        case 'keyPoints':
          translatedTopic.keyPoints[map.subIndex] = translatedText;
          break;
        case 'useCases':
          if (!translatedTopic.useCases[map.subIndex]) {
            translatedTopic.useCases[map.subIndex] = {};
          }
          translatedTopic.useCases[map.subIndex][map.subField] = translatedText;
          break;
        case 'dos':
          translatedTopic.dos[map.subIndex] = translatedText;
          break;
        case 'donts':
          translatedTopic.donts[map.subIndex] = translatedText;
          break;
        case 'bestPractices':
          translatedTopic.bestPractices[map.subIndex] = translatedText;
          break;
        case 'codeExamples':
          if (!translatedTopic.codeExamples[map.subIndex]) {
            translatedTopic.codeExamples[map.subIndex] = {};
          }
          translatedTopic.codeExamples[map.subIndex][map.subField] = translatedText;
          break;
      }
    });
    
    result.topics.push(translatedTopic);
  });
  
  return result;
}

async function main() {
  const batchDir = path.join(__dirname, '..', 'translation-batch');
  const inputDir = path.join(__dirname, '..', 'translation-input');
  const outputDir = path.join(__dirname, '..', 'src', 'i18n', 'courseTranslations');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🔄 Reconstructing Marathi translations...\n');
  
  const courses = ['beginner', 'intermediate', 'advanced', 'professional'];
  
  for (const courseName of courses) {
    const mrTextPath = path.join(batchDir, `${courseName}-mr.txt`);
    
    if (!fs.existsSync(mrTextPath)) {
      console.log(`⚠️  Skipping ${courseName} - ${courseName}-mr.txt not found`);
      console.log(`   Please translate ${courseName}-en.txt with IndicTrans2 first\n`);
      continue;
    }
    
    // Load translated lines
    const translatedLines = fs.readFileSync(mrTextPath, 'utf8').split('\n');
    
    // Load mapping
    const mappingPath = path.join(batchDir, `${courseName}-mapping.json`);
    const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
    
    // Load original data
    const originalPath = path.join(inputDir, `${courseName}-en.json`);
    const originalData = JSON.parse(fs.readFileSync(originalPath, 'utf8'));
    
    // Reconstruct
    const reconstructed = reconstructTranslations(originalData, translatedLines, mapping);
    
    // Save
    const outputPath = path.join(outputDir, `${courseName}-mr.json`);
    fs.writeFileSync(outputPath, JSON.stringify(reconstructed, null, 2), 'utf8');
    
    console.log(`✅ ${courseName}: ${translatedLines.length} translations`);
    console.log(`   Saved to: ${outputPath}\n`);
  }
  
  console.log('='.repeat(60));
  console.log('✨ Reconstruction complete!');
  console.log('='.repeat(60));
  console.log('\n📋 Next steps:');
  console.log('   1. Review translations in src/i18n/courseTranslations/');
  console.log('   2. Update components to load translations');
  console.log('   3. Test in Marathi language mode');
}

main().catch(console.error);
