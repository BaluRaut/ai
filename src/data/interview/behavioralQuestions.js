// Interview Preparation - Behavioral Questions for Data/ML Roles

export const behavioralQuestions = {
  overview: `
# Behavioral Interview Guide for Data Science & ML Roles

Behavioral interviews assess your soft skills, teamwork, and how you handle real-world challenges.

## The STAR Method

**S**ituation - Set the context
**T**ask - Describe your responsibility
**A**ction - Explain what YOU did (use "I" not "we")
**R**esult - Share the outcome with metrics

## Tips for Success
- Prepare 5-6 diverse stories that can answer multiple questions
- Quantify impact whenever possible
- Be honest about failures and what you learned
- Show self-awareness and growth mindset
  `,

  categories: {
    projectExperience: {
      title: 'Project Experience & Technical Leadership',
      questions: [
        {
          id: 'impactful-project',
          question: 'Tell me about the most impactful ML/data science project you\'ve worked on.',
          tips: [
            'Choose a project with measurable business impact',
            'Explain technical decisions and trade-offs',
            'Highlight YOUR specific contributions',
            'Quantify results (revenue, accuracy, time saved)'
          ],
          exampleStructure: `
**Situation:** "At [Company], our customer churn was 15% quarterly, costing $2M in lost revenue."

**Task:** "I was tasked with building a predictive model to identify at-risk customers."

**Action:** 
- "I analyzed 2 years of customer behavior data"
- "I engineered 50+ features including engagement metrics and support tickets"
- "I built an XGBoost model with 0.85 AUC and deployed it to production"
- "I worked with product team to design intervention strategies"

**Result:** "We reduced churn by 25% in the first quarter, saving ~$500K. The model is still in production 2 years later."
          `
        },
        {
          id: 'failed-project',
          question: 'Tell me about a project that didn\'t go as planned. What did you learn?',
          tips: [
            'Choose a real failure, not a "fake" one',
            'Take ownership, don\'t blame others',
            'Focus on what you learned',
            'Explain how you\'ve applied that learning'
          ],
          exampleStructure: `
**Situation:** "I built a recommendation system that performed well offline but poorly in A/B tests."

**Task:** "I needed to figure out why and improve the system."

**Action:**
- "I conducted deep analysis of online vs offline metrics"
- "Discovered we had data leakage in our training set"
- "I rebuilt the pipeline with proper temporal splitting"
- "Implemented more rigorous offline-online correlation testing"

**Result:** "The fix took 2 extra weeks but the next version improved CTR by 12%. I now always validate offline-online correlation before launch."
          `
        },
        {
          id: 'ambiguous-project',
          question: 'Describe a project where you had to work with ambiguous requirements.',
          tips: [
            'Show how you clarified the problem',
            'Demonstrate stakeholder management',
            'Explain your prioritization approach'
          ],
          exampleStructure: `
**Situation:** "Stakeholder asked for 'better customer insights' without clear definition."

**Action:**
- "I scheduled discovery meetings with stakeholders"
- "I identified 3 potential use cases and estimated effort/impact"
- "Proposed an MVP approach to validate the most promising one"
- "Set up regular check-ins to refine direction"

**Result:** "Delivered actionable segmentation in 3 weeks that leadership uses quarterly."
          `
        }
      ]
    },

    collaboration: {
      title: 'Collaboration & Communication',
      questions: [
        {
          id: 'explain-technical',
          question: 'How do you explain complex technical concepts to non-technical stakeholders?',
          tips: [
            'Give a specific example',
            'Show your communication adaptability',
            'Mention visual aids or analogies you used',
            'Explain how you confirmed understanding'
          ],
          exampleStructure: `
**Situation:** "Needed to explain why our fraud model was blocking legitimate customers."

**Action:**
- "I avoided jargon like 'precision-recall tradeoff'"
- "Used analogy: 'It's like a security guard - too strict catches all threats but also hassles regulars'"
- "Showed visual of the cost of false positives vs missed fraud"
- "Let them decide the acceptable tradeoff"

**Result:** "Leadership understood and approved adjusting thresholds, reducing false positives by 30%."
          `
        },
        {
          id: 'disagreement',
          question: 'Tell me about a time you disagreed with a team member or manager.',
          tips: [
            'Show respect for other viewpoints',
            'Explain how you presented your case with data',
            'Show willingness to compromise',
            'Focus on the outcome, not winning'
          ],
          exampleStructure: `
**Situation:** "Manager wanted to use deep learning for a tabular data problem."

**Task:** "I believed gradient boosting would be better but needed to convince them."

**Action:**
- "I ran a fair experiment comparing both approaches"
- "Presented results: GBM was 5% more accurate and 10x faster to train"
- "Listened to their concerns about future scalability"
- "Proposed GBM for MVP with DL exploration later"

**Result:** "We shipped GBM, and it performed well. Manager appreciated the data-driven approach."
          `
        },
        {
          id: 'cross-functional',
          question: 'Describe your experience working with cross-functional teams.',
          tips: [
            'Highlight collaboration with engineering, product, business',
            'Show how you bridged gaps between teams',
            'Mention how you handled different priorities'
          ],
          exampleStructure: `
**Situation:** "Worked on a personalization project involving Data Science, Engineering, and Product."

**Action:**
- "Set up weekly syncs across all teams"
- "Created shared documentation with clear interfaces"
- "Translated between technical and business language"
- "Helped product understand model limitations"

**Result:** "Launched on time with all teams aligned. Improved user engagement by 15%."
          `
        }
      ]
    },

    problemSolving: {
      title: 'Problem Solving & Initiative',
      questions: [
        {
          id: 'own-initiative',
          question: 'Tell me about a time you identified a problem before others did.',
          tips: [
            'Show proactive behavior',
            'Explain how you identified the issue',
            'Describe the action you took without being asked'
          ],
          exampleStructure: `
**Situation:** "I noticed our model's performance was degrading slowly over 3 months."

**Action:**
- "Built a monitoring dashboard tracking key metrics"
- "Identified data drift in a key feature"
- "Proposed and implemented automated retraining"
- "Presented findings to team and got buy-in"

**Result:** "Prevented a potential 10% drop in model accuracy. Dashboard became standard practice."
          `
        },
        {
          id: 'tight-deadline',
          question: 'Describe a time you had to deliver under a tight deadline.',
          tips: [
            'Show prioritization skills',
            'Explain trade-offs you made',
            'Don\'t just say you "worked hard"'
          ],
          exampleStructure: `
**Situation:** "Had 2 weeks to build a demand forecasting model for holiday season."

**Action:**
- "Quickly assessed what was feasible"
- "Chose simpler model (Prophet) over complex one"
- "Focused on most important product categories"
- "Communicated limitations clearly to stakeholders"

**Result:** "Delivered on time with 85% accuracy. Full solution followed in Q1."
          `
        },
        {
          id: 'learn-new-skill',
          question: 'Tell me about a time you had to learn something new quickly.',
          tips: [
            'Show adaptability and learning ability',
            'Explain your learning approach',
            'Demonstrate humility and growth mindset'
          ],
          exampleStructure: `
**Situation:** "Needed to deploy a model to Kubernetes, which I had never used."

**Action:**
- "Found quality resources (documentation, tutorials)"
- "Built a small prototype to learn basics"
- "Asked for code review from platform team"
- "Documented my learnings for future team members"

**Result:** "Deployed successfully in 1 week. Now regularly deploy to K8s."
          `
        }
      ]
    },

    leadership: {
      title: 'Leadership & Mentorship',
      questions: [
        {
          id: 'mentorship',
          question: 'Have you mentored someone? What was your approach?',
          tips: [
            'Show investment in others\' growth',
            'Explain your mentoring philosophy',
            'Share specific examples of guidance'
          ],
          exampleStructure: `
**Situation:** "Mentored a junior data scientist joining our team."

**Action:**
- "Created an onboarding plan with progressively complex tasks"
- "Paired programming sessions on real problems"
- "Regular 1:1s to discuss career goals"
- "Gave opportunities to present to stakeholders"

**Result:** "They went from junior to mid-level in 18 months and now mentor others."
          `
        },
        {
          id: 'influence-without-authority',
          question: 'Tell me about a time you influenced a decision without direct authority.',
          tips: [
            'Show how you built consensus',
            'Explain how you used data/evidence',
            'Demonstrate soft skills'
          ],
          exampleStructure: `
**Situation:** "Believed we should invest in ML infrastructure but it wasn't prioritized."

**Action:**
- "Documented time spent on repetitive tasks across team"
- "Built a prototype showing potential productivity gains"
- "Found allies in engineering who had similar pain"
- "Presented business case to leadership"

**Result:** "Got 1 engineer allocated to ML infra, saving team 10 hours/week."
          `
        }
      ]
    },

    dataEthics: {
      title: 'Data Ethics & Responsibility',
      questions: [
        {
          id: 'bias-fairness',
          question: 'How have you handled bias or fairness issues in your work?',
          tips: [
            'Show awareness of ML fairness issues',
            'Explain how you identified the problem',
            'Describe concrete actions taken'
          ],
          exampleStructure: `
**Situation:** "Discovered our hiring model performed differently across demographic groups."

**Action:**
- "Conducted fairness analysis across protected groups"
- "Presented findings to stakeholders with clear visualizations"
- "Proposed and implemented fairness constraints in training"
- "Set up ongoing monitoring for disparate impact"

**Result:** "Reduced performance disparity by 80% while maintaining overall accuracy."
          `
        },
        {
          id: 'data-privacy',
          question: 'Tell me about a situation involving data privacy or security concerns.',
          tips: [
            'Show understanding of privacy importance',
            'Explain how you balanced utility and privacy',
            'Mention relevant frameworks or regulations'
          ],
          exampleStructure: `
**Situation:** "Wanted to use customer data for modeling but had privacy constraints."

**Action:**
- "Worked with legal to understand GDPR requirements"
- "Implemented data anonymization techniques"
- "Used differential privacy for aggregated statistics"
- "Created documentation for data handling procedures"

**Result:** "Built model while staying fully compliant. Process became template for future projects."
          `
        }
      ]
    }
  },

  // Questions to ask the interviewer
  questionsToAsk: {
    title: 'Questions to Ask Your Interviewer',
    categories: [
      {
        name: 'Team & Culture',
        questions: [
          'How is the data science team structured?',
          'What\'s the collaboration like between DS and engineering?',
          'How do you measure success for data scientists?',
          'What\'s the balance between research and production work?'
        ]
      },
      {
        name: 'Projects & Impact',
        questions: [
          'What are the biggest challenges the team is facing?',
          'Can you tell me about a recent impactful project?',
          'How does the team prioritize what to work on?',
          'What\'s the path from model development to production?'
        ]
      },
      {
        name: 'Growth & Development',
        questions: [
          'What does career growth look like for this role?',
          'How do you support learning and development?',
          'Are there opportunities to publish or attend conferences?',
          'What would success look like in the first 6 months?'
        ]
      },
      {
        name: 'Technical',
        questions: [
          'What\'s your ML tech stack?',
          'How do you handle model deployment and monitoring?',
          'What\'s your approach to experiment tracking?',
          'How do you balance technical debt with feature work?'
        ]
      }
    ]
  },

  // Red flags to watch for
  redFlags: {
    title: 'Red Flags to Watch For',
    flags: [
      {
        signal: 'No clear path to production',
        concern: 'Models may never impact the business'
      },
      {
        signal: 'No mention of data engineering support',
        concern: 'You may spend most time on data wrangling'
      },
      {
        signal: 'Unclear success metrics',
        concern: 'Hard to demonstrate your value'
      },
      {
        signal: 'No collaboration with product/engineering',
        concern: 'May be siloed or research-only'
      },
      {
        signal: 'Unrealistic expectations',
        concern: '"We want AGI in 3 months"'
      }
    ]
  }
};
