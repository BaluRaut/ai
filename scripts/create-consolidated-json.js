// Create single consolidated en.json with all course content
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { beginner } from '../src/data/courses/beginner.js';
import { intermediate } from '../src/data/courses/intermediate.js';
import { advanced } from '../src/data/courses/advanced.js';
import { professional } from '../src/data/courses/professional.js';
import { dataScience } from '../src/data/courses/dataScience.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function extractTopicContent(topic) {
  return {
    id: topic.id,
    title: topic.title,
    description: topic.description,
    content: {
      overview: topic.content.overview,
      keyPoints: topic.content.keyPoints || [],
      useCases: (topic.content.useCases || []).map(uc => ({
        title: uc.title,
        description: uc.description,
        example: uc.example,
      })),
      dos: topic.content.dos || [],
      donts: topic.content.donts || [],
      bestPractices: Array.isArray(topic.content.bestPractices) ? topic.content.bestPractices : [],
      codeExamples: (topic.content.codeExamples || []).map(ex => ({
        title: ex.title,
        explanation: ex.explanation,
      })),
    }
  };
}

async function main() {
  const outputDir = path.join(__dirname, '..', 'translation-batch');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('📦 Creating consolidated en.json...\n');
  
  const consolidated = {
    metadata: {
      version: '1.0',
      language: 'en',
      totalCourses: 5,
      totalTopics: 0,
      createdAt: new Date().toISOString(),
    },
    courses: {
      beginner: {
        name: 'beginner',
        displayName: 'Python Foundations',
        topics: beginner.topics.map(extractTopicContent),
      },
      intermediate: {
        name: 'intermediate',
        displayName: 'Intermediate Python',
        topics: intermediate.topics.map(extractTopicContent),
      },
      advanced: {
        name: 'advanced',
        displayName: 'Advanced Python',
        topics: advanced.topics.map(extractTopicContent),
      },
      professional: {
        name: 'professional',
        displayName: 'Professional Python',
        topics: professional.topics.map(extractTopicContent),
      },
      dataScience: {
        name: 'dataScience',
        displayName: 'Data Science with Python',
        topics: dataScience.topics.map(extractTopicContent),
      },
    }
  };
  
  // Calculate totals
  consolidated.metadata.totalTopics = 
    consolidated.courses.beginner.topics.length +
    consolidated.courses.intermediate.topics.length +
    consolidated.courses.advanced.topics.length +
    consolidated.courses.professional.topics.length +
    consolidated.courses.dataScience.topics.length;
  
  // Save consolidated JSON
  const outputPath = path.join(outputDir, 'course-content-en.json');
  fs.writeFileSync(outputPath, JSON.stringify(consolidated, null, 2), 'utf8');
  
  console.log('✅ Created: course-content-en.json');
  console.log(`\n📊 Summary:`);
  console.log(`   Courses: ${consolidated.metadata.totalCourses}`);
  console.log(`   Topics: ${consolidated.metadata.totalTopics}`);
  console.log(`   - Beginner: ${consolidated.courses.beginner.topics.length}`);
  console.log(`   - Intermediate: ${consolidated.courses.intermediate.topics.length}`);
  console.log(`   - Advanced: ${consolidated.courses.advanced.topics.length}`);
  console.log(`   - Professional: ${consolidated.courses.professional.topics.length}`);
  console.log(`   - Data Science: ${consolidated.courses.dataScience.topics.length}`);
  
  // Calculate file size
  const stats = fs.statSync(outputPath);
  console.log(`\n📁 File size: ${(stats.size / 1024).toFixed(2)} KB`);
  console.log(`📍 Location: ${outputPath}`);
  
  console.log('\n📋 Next steps:');
  console.log('   1. Use IndicTrans2 to translate course-content-en.json');
  console.log('   2. Save output as course-content-mr.json');
  console.log('   3. Components will auto-load based on language');
}

main().catch(console.error);
