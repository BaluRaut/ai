// Interview Preparation - System Design for ML

export const mlSystemDesign = {
  overview: `
# ML System Design Interview Guide

ML system design interviews test your ability to architect end-to-end machine learning systems.

## Framework for Answering

1. **Clarify Requirements** (5 min)
   - Functional requirements
   - Non-functional requirements (scale, latency)
   - Constraints and assumptions

2. **High-Level Design** (10 min)
   - System components
   - Data flow
   - ML pipeline overview

3. **Deep Dive** (20 min)
   - Data engineering
   - Feature engineering
   - Model selection & training
   - Serving infrastructure
   - Monitoring & retraining

4. **Trade-offs & Extensions** (5 min)
   - Alternative approaches
   - Scaling considerations
   - Edge cases
  `,

  problems: [
    // ==================== RECOMMENDATION SYSTEM ====================
    {
      id: 'recommendation-system',
      title: 'Design a Recommendation System',
      company: 'Netflix, Spotify, Amazon',
      difficulty: 'Hard',
      duration: '45 minutes',
      description: 'Design a recommendation system for a streaming platform like Netflix.',
      
      clarifyingQuestions: [
        'What are we recommending? (movies, shows, both?)',
        'How many users and items?',
        'What user interaction data do we have?',
        'What is the latency requirement?',
        'Cold start: how do we handle new users/items?',
        'Do we need real-time updates or batch is sufficient?'
      ],

      requirements: {
        functional: [
          'Personalized recommendations for each user',
          'Handle new users (cold start)',
          'Real-time updates based on user behavior',
          'Support different surfaces (homepage, search, similar items)'
        ],
        nonFunctional: [
          'Latency < 200ms for recommendations',
          'Scale: 100M users, 50K items',
          'High availability (99.9%)',
          'Recommendations should be fresh (updated daily)'
        ]
      },

      solution: `
## High-Level Architecture

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                     Recommendation System                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────┐    ┌───────────────┐    ┌──────────────────┐   │
│  │   User    │───►│  API Gateway  │───►│  Recommendation  │   │
│  │  Request  │    │  (Rate Limit) │    │     Service      │   │
│  └───────────┘    └───────────────┘    └────────┬─────────┘   │
│                                                  │              │
│                                                  ▼              │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   Candidate Generation                   │   │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │   │
│  │  │Collabor.│  │Content  │  │Trending │  │Personal │    │   │
│  │  │Filtering│  │ Based   │  │  Items  │  │ History │    │   │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                  │
│                              ▼                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                      Ranking Model                       │   │
│  │     (Neural Network combining all signals + context)     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                  │
│                              ▼                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              Post-Processing & Filtering                 │   │
│  │  (Diversity, Freshness, Business Rules, A/B Tests)      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Data Pipeline:
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Events  │───►│  Kafka   │───►│  Spark   │───►│ Feature  │
│  Stream  │    │          │    │Processing│    │  Store   │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
\`\`\`

## Component Deep Dive

### 1. Candidate Generation (Retrieval)

**Purpose:** Reduce 50K items to ~1000 candidates efficiently

**Approaches:**

a) **Collaborative Filtering**
\`\`\`python
# Matrix Factorization approach
# User embedding × Item embedding = predicted rating

class MatrixFactorization:
    def get_candidates(self, user_id, k=100):
        user_embedding = self.user_embeddings[user_id]
        # Approximate nearest neighbors for efficiency
        candidates = self.item_index.search(user_embedding, k)
        return candidates
\`\`\`

b) **Two-Tower Model (Deep Learning)**
\`\`\`python
# Separate user and item encoders
user_features → User Tower → user_embedding (128d)
item_features → Item Tower → item_embedding (128d)

# At serving: precompute item embeddings, ANN search
similarity = dot_product(user_embedding, item_embedding)
\`\`\`

c) **Content-Based**
- For new items (cold start)
- Use item metadata (genre, actors, etc.)

### 2. Ranking Model

**Purpose:** Score ~1000 candidates precisely

\`\`\`python
# Features for ranking
features = {
    'user': ['age', 'location', 'watch_history_embedding', 'preferences'],
    'item': ['genre', 'popularity', 'freshness', 'item_embedding'],
    'context': ['time_of_day', 'device', 'day_of_week'],
    'cross': ['user_genre_affinity', 'user_actor_affinity']
}

# Model: Deep & Cross Network or Wide & Deep
class RankingModel(nn.Module):
    def forward(self, user_features, item_features, context):
        # Deep tower for feature interactions
        # Cross tower for explicit feature crosses
        # Output: P(click), P(watch > 50%), P(finish)
        return prediction
\`\`\`

### 3. Feature Store

\`\`\`python
feature_store = {
    'user_features': {
        'storage': 'Redis',  # Low latency
        'update': 'Real-time',
        'examples': ['last_watched', 'session_history']
    },
    'item_features': {
        'storage': 'Redis + S3',
        'update': 'Daily batch',
        'examples': ['embeddings', 'popularity_score']
    },
    'precomputed': {
        'storage': 'Redis',
        'update': 'Hourly',
        'examples': ['user_item_scores', 'similar_items']
    }
}
\`\`\`

### 4. Serving Architecture

\`\`\`python
# Real-time serving
async def get_recommendations(user_id, context):
    # 1. Fetch user features (2ms)
    user_features = await feature_store.get_user(user_id)
    
    # 2. Get candidates (10ms)
    candidates = await candidate_generator.get_candidates(
        user_id, 
        user_features
    )
    
    # 3. Fetch item features (5ms, batched)
    item_features = await feature_store.get_items(candidates)
    
    # 4. Run ranking model (20ms)
    scores = ranking_model.predict(user_features, item_features, context)
    
    # 5. Post-process (5ms)
    results = post_process(candidates, scores)
    
    return results  # Total: ~50ms
\`\`\`

## Handling Key Challenges

### Cold Start Problem

| Type | Solution |
|------|----------|
| New User | Content-based, popularity, demographics |
| New Item | Content features, boost in exploration |
| Both | Interactive onboarding, A/B test baselines |

### Offline vs Online

\`\`\`
Offline (Daily):
- Retrain ranking models
- Update embeddings
- Compute batch features

Online (Real-time):
- A/B testing
- Real-time feature updates
- Session-based adjustments
\`\`\`

### Metrics

| Metric | Type | Purpose |
|--------|------|---------|
| CTR | Online | Engagement |
| Watch time | Online | Quality |
| NDCG | Offline | Ranking quality |
| Coverage | Offline | Diversity |
| A/B test metrics | Online | Business impact |
      `,

      keyTakeaways: [
        'Two-stage: Retrieval (fast, coarse) → Ranking (slow, precise)',
        'Feature store for low-latency serving',
        'Handle cold start explicitly',
        'Monitor for bias and freshness'
      ]
    },

    // ==================== FRAUD DETECTION ====================
    {
      id: 'fraud-detection',
      title: 'Design a Fraud Detection System',
      company: 'PayPal, Stripe, Square',
      difficulty: 'Hard',
      duration: '45 minutes',
      description: 'Design a real-time fraud detection system for a payment platform.',
      
      clarifyingQuestions: [
        'What types of transactions? (card, bank transfer, P2P)',
        'What is the transaction volume?',
        'Latency requirements? (must be real-time for payments)',
        'What is the current fraud rate?',
        'What actions can we take? (block, flag for review, allow)',
        'Cost of false positives vs false negatives?'
      ],

      requirements: {
        functional: [
          'Score every transaction in real-time',
          'Block high-risk transactions',
          'Flag medium-risk for manual review',
          'Learn from analyst decisions',
          'Explainability for compliance'
        ],
        nonFunctional: [
          'Latency < 100ms (p99)',
          'Scale: 10K transactions/second',
          'High availability: 99.99%',
          'Precision > 90% (minimize false positives)',
          'Recall > 95% (catch most fraud)'
        ]
      },

      solution: `
## High-Level Architecture

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                    Fraud Detection System                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Transaction ──► Feature      ──► Rules    ──► ML Model ──►   │
│    Request       Extraction       Engine       Scoring     │   │
│                      │               │            │         │   │
│                      ▼               ▼            ▼         │   │
│                 ┌─────────────────────────────────────┐     │   │
│                 │         Decision Engine             │     │   │
│                 │  (Combine signals, make decision)   │     │   │
│                 └─────────────────────────────────────┘     │   │
│                               │                              │   │
│              ┌────────────────┼────────────────┐            │   │
│              ▼                ▼                ▼            │   │
│          [BLOCK]          [REVIEW]         [ALLOW]          │   │
│                              │                              │   │
│                              ▼                              │   │
│                    Human Review Queue                       │   │
│                              │                              │   │
│                              ▼                              │   │
│                    Feedback Loop → Model Retraining         │   │
│                                                             │   │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

## Component Deep Dive

### 1. Feature Engineering

\`\`\`python
class FraudFeatureExtractor:
    def extract_features(self, transaction):
        features = {}
        
        # Transaction features
        features['amount'] = transaction.amount
        features['amount_log'] = np.log1p(transaction.amount)
        features['currency'] = transaction.currency
        features['merchant_category'] = transaction.mcc
        
        # User historical features (from Feature Store)
        user_history = self.feature_store.get_user(transaction.user_id)
        features['user_avg_txn'] = user_history['avg_amount_30d']
        features['user_txn_count_24h'] = user_history['count_24h']
        features['amount_vs_avg'] = transaction.amount / user_history['avg_amount_30d']
        features['is_new_merchant'] = transaction.merchant not in user_history['merchants']
        
        # Velocity features
        features['txn_count_1h'] = self.get_velocity(transaction.user_id, hours=1)
        features['txn_count_24h'] = self.get_velocity(transaction.user_id, hours=24)
        features['unique_merchants_1h'] = self.get_unique_merchants(transaction.user_id, hours=1)
        
        # Device/Location features
        features['is_new_device'] = self.is_new_device(transaction)
        features['distance_from_last_txn'] = self.calc_distance(transaction)
        features['impossible_travel'] = self.check_impossible_travel(transaction)
        
        # Network features
        features['merchant_fraud_rate'] = self.get_merchant_risk(transaction.merchant)
        features['shared_device_users'] = self.get_device_users(transaction.device_id)
        
        return features
\`\`\`

### 2. Rules Engine

\`\`\`python
class RulesEngine:
    def __init__(self):
        self.rules = [
            # Velocity rules
            Rule("txn_count_1h > 10", action="BLOCK", reason="Too many transactions"),
            Rule("amount > 10000 AND is_new_merchant", action="REVIEW"),
            
            # Known bad patterns
            Rule("country IN blacklist", action="BLOCK"),
            Rule("impossible_travel == True", action="BLOCK"),
            
            # Business rules
            Rule("merchant_category == 'gambling' AND amount > 1000", action="REVIEW"),
        ]
    
    def evaluate(self, features):
        triggered_rules = []
        for rule in self.rules:
            if rule.matches(features):
                triggered_rules.append(rule)
        
        return triggered_rules
\`\`\`

### 3. ML Model

\`\`\`python
# Model architecture considerations

models = {
    'gradient_boosting': {
        'pros': ['Interpretable', 'Handles mixed features', 'Fast inference'],
        'cons': ['May miss complex patterns'],
        'use_for': 'Primary scoring model'
    },
    'neural_network': {
        'pros': ['Learns complex patterns', 'Entity embeddings'],
        'cons': ['Less interpretable', 'More compute'],
        'use_for': 'Secondary model, ensemble'
    },
    'sequence_model': {
        'pros': ['Captures temporal patterns'],
        'cons': ['Complex, needs history at inference'],
        'use_for': 'User behavior modeling'
    }
}

# Training considerations
training_strategy = {
    'data': 'Highly imbalanced (fraud < 0.1%)',
    'sampling': 'SMOTE or class weights',
    'validation': 'Time-based split (future data for test)',
    'metrics': ['Precision@recall_threshold', 'AUC-PR', 'Cost-based'],
    'retraining': 'Weekly with recent labeled data'
}
\`\`\`

### 4. Decision Engine

\`\`\`python
class DecisionEngine:
    def make_decision(self, features, rules_result, ml_score):
        # Hard blocks from rules
        if any(r.action == "BLOCK" for r in rules_result):
            return Decision(
                action="BLOCK",
                reason=rules_result[0].reason,
                confidence=1.0
            )
        
        # ML model scoring
        if ml_score > 0.9:  # High confidence fraud
            return Decision("BLOCK", f"ML score: {ml_score}", ml_score)
        
        if ml_score > 0.5:  # Medium risk
            return Decision("REVIEW", f"ML score: {ml_score}", ml_score)
        
        # Rules that require review
        if any(r.action == "REVIEW" for r in rules_result):
            return Decision("REVIEW", rules_result[0].reason, ml_score)
        
        return Decision("ALLOW", "Low risk", 1 - ml_score)
\`\`\`

### 5. Real-Time Architecture

\`\`\`python
# Low-latency serving
async def score_transaction(transaction):
    # Parallel feature fetching
    user_features, device_features, merchant_features = await asyncio.gather(
        feature_store.get_user(transaction.user_id),
        feature_store.get_device(transaction.device_id),
        feature_store.get_merchant(transaction.merchant_id)
    )
    
    # Feature extraction (<5ms)
    features = extract_features(transaction, user_features, 
                               device_features, merchant_features)
    
    # Rules engine (<2ms)
    rules_result = rules_engine.evaluate(features)
    
    # ML scoring (<10ms)
    ml_score = model.predict(features)
    
    # Decision (<1ms)
    decision = decision_engine.make_decision(features, rules_result, ml_score)
    
    # Async: Update streaming aggregates
    asyncio.create_task(update_velocity_features(transaction))
    
    return decision  # Total: <50ms
\`\`\`

## Handling Key Challenges

### Class Imbalance
- Use AUC-PR instead of AUC-ROC
- Cost-sensitive learning
- Adjust threshold based on business cost

### Concept Drift
- Monitor model performance daily
- Automated retraining pipeline
- Shadow mode for new models

### Adversarial Attacks
- Don't expose model scores
- Randomize thresholds slightly
- Ensemble multiple models
      `,

      keyTakeaways: [
        'Combine rules (interpretable) + ML (pattern detection)',
        'Feature engineering is critical (velocity, network)',
        'Real-time requires precomputed features',
        'Handle extreme class imbalance carefully',
        'Continuous learning from analyst feedback'
      ]
    },

    // ==================== SEARCH RANKING ====================
    {
      id: 'search-ranking',
      title: 'Design a Search Ranking System',
      company: 'Google, Bing, LinkedIn',
      difficulty: 'Hard',
      duration: '45 minutes',
      description: 'Design a search ranking system for a professional network like LinkedIn.',

      clarifyingQuestions: [
        'What are we searching? (people, jobs, posts, all)',
        'What signals indicate relevance?',
        'Personalization requirements?',
        'Latency requirements?',
        'Scale: queries per second, index size'
      ],

      solution: `
## High-Level Architecture

\`\`\`
Query → Query Understanding → Retrieval → Ranking → Re-ranking → Results

┌─────────────────────────────────────────────────────────────┐
│                      Search System                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Query ──► Query     ──► Retrieval  ──► L1       ──► L2    │
│            Processing    (1000s)       Ranking      Ranking │
│            (NLP)         (fast)        (100s)      (10s)   │
│                                                             │
│  Components:                                                │
│  • Spell correction    • Inverted index   • Fast model  • NN│
│  • Query expansion     • Embedding ANN    • GBM         •Transform│
│  • Intent detection    • Filters          • 50 features •1000 feat│
│                                                             │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## Component Deep Dive

### 1. Query Understanding

\`\`\`python
class QueryProcessor:
    def process(self, raw_query, user_context):
        # Spell correction
        corrected = self.spell_correct(raw_query)
        
        # Tokenization and normalization
        tokens = self.tokenize(corrected)
        
        # Query expansion (synonyms)
        expanded = self.expand_query(tokens)
        
        # Intent classification
        intent = self.classify_intent(tokens)  # people, jobs, posts
        
        # Entity recognition
        entities = self.extract_entities(tokens)  # company names, skills
        
        return ProcessedQuery(
            original=raw_query,
            tokens=tokens,
            expanded=expanded,
            intent=intent,
            entities=entities,
            user_context=user_context
        )
\`\`\`

### 2. Retrieval Layer

\`\`\`python
class RetrievalSystem:
    def retrieve(self, query, k=1000):
        candidates = set()
        
        # Lexical retrieval (BM25 on inverted index)
        lexical_results = self.inverted_index.search(
            query.tokens, 
            limit=500
        )
        candidates.update(lexical_results)
        
        # Semantic retrieval (embedding similarity)
        query_embedding = self.query_encoder(query.original)
        semantic_results = self.vector_index.search(
            query_embedding, 
            limit=500
        )
        candidates.update(semantic_results)
        
        # Filter by intent/facets
        candidates = self.apply_filters(candidates, query.intent)
        
        return list(candidates)[:k]
\`\`\`

### 3. Ranking Model

\`\`\`python
# Learning to Rank approach

features = {
    # Query-document match
    'bm25_score': 'Lexical relevance',
    'semantic_similarity': 'Embedding dot product',
    'exact_match': 'Query terms in title',
    
    # Document quality
    'doc_pagerank': 'Importance score',
    'doc_freshness': 'Recency',
    'doc_engagement': 'Historical CTR',
    
    # User-document affinity
    'connection_degree': 'Network proximity',
    'company_affinity': 'User visited similar',
    'skill_overlap': 'Shared skills',
    
    # Context
    'position_bias': 'Debias position effect',
    'device_type': 'Mobile vs desktop',
}

# Training: pairwise or listwise loss
# Model: LambdaMART, neural ranker
\`\`\`

### 4. Personalization

\`\`\`python
class PersonalizedRanker:
    def personalize(self, results, user):
        for result in results:
            # Network proximity
            result.features['network_score'] = self.get_network_score(
                user, result.entity
            )
            
            # Interest matching
            result.features['interest_score'] = self.get_interest_score(
                user.interests, result.entity
            )
            
            # Historical interaction
            result.features['interaction_score'] = self.get_interaction_score(
                user, result.entity
            )
        
        return self.rerank(results)
\`\`\`
      `,

      keyTakeaways: [
        'Multi-stage: Retrieval → L1 Ranking → L2 Ranking',
        'Combine lexical (BM25) + semantic (embeddings)',
        'Personalization is key differentiator',
        'Monitor for position bias'
      ]
    }
  ],

  // Templates for answering
  answerTemplate: `
## How to Structure Your Answer

### 1. Clarify (2-3 min)
"Before I dive in, let me make sure I understand the requirements..."
- Scale: users, QPS, data size
- Latency requirements
- What success looks like

### 2. High-Level Design (5 min)
"Let me draw the high-level architecture..."
- Main components
- Data flow
- ML pipeline stages

### 3. Deep Dive (20 min)
"Now let me go deeper into..."
- Data collection & labeling
- Feature engineering
- Model selection
- Training pipeline
- Serving infrastructure
- Monitoring

### 4. Trade-offs (5 min)
"There are a few trade-offs to consider..."
- Alternative approaches
- Scaling challenges
- Future improvements
  `
};
