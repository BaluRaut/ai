import { topics as beginnerTopics } from './topics/beginnerTopics';
import { intermediateTopics } from './topics/intermediateTopics';
import { advancedTopics } from './topics/advancedTopics';
import { professionalTopics } from './topics/professionalTopics';
import { graphDatabaseTopics } from './graphDatabaseTopics';
import { timeSeriesTopics } from './timeSeriesTopics';

// Convert array topics to object format
const graphTopicsObj = graphDatabaseTopics.reduce((acc, topic) => {
  acc[topic.id] = topic;
  return acc;
}, {});

const timeSeriesTopicsObj = timeSeriesTopics.reduce((acc, topic) => {
  acc[topic.id] = topic;
  return acc;
}, {});

export const allTopics = {
  ...beginnerTopics,
  ...intermediateTopics,
  ...advancedTopics,
  ...professionalTopics,
  ...graphTopicsObj,
  ...timeSeriesTopicsObj,
};

export { learningPaths } from './learningPaths';
export { graphDatabaseTopics } from './graphDatabaseTopics';
export { timeSeriesTopics } from './timeSeriesTopics';
