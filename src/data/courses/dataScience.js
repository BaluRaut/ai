import { numpy } from './datascience/numpy.js';
import { pandas } from './datascience/pandas.js';
import { visualization } from './datascience/visualization.js';
import { scikitLearnBasic } from './datascience/scikit-learn-basic.js';
import { scikitLearnIntermediate } from './datascience/scikit-learn-intermediate.js';
import { scikitLearnAdvanced } from './datascience/scikit-learn-advanced.js';

export const dataScience = {
    title: 'Data Science & AI',
    description: 'Master the tools for data analysis, visualization, and machine learning.',
    topics: [
      numpy,
      pandas,
      visualization,
      scikitLearnBasic,
      scikitLearnIntermediate,
      scikitLearnAdvanced
    ]
  };
