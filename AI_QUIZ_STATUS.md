# AI Quiz Bank Status

## Overview
The AI Quiz Bank (`src/data/aiQuizBank.js`) has been expanded to a total of **600 questions**. This comprehensive bank covers a wide range of Artificial Intelligence topics, from foundational concepts to advanced industry applications and MLOps.

## Structure
The quiz bank is aggregated in `src/data/aiQuizBank.js` and imports content from:
- `src/data/aiQuizBankOriginal.js` (Base questions)
- `src/data/aiQuizBankExpansion*.js` (Expansion modules)

## Topic Breakdown (Total: 600 Questions)

### 1. Foundations & Core Concepts
- **Original Bank**: ~350 questions covering:
  - Introduction to AI
  - Machine Learning Basics
  - Neural Networks
  - Deep Learning
  - NLP Basics
  - Computer Vision Basics

### 2. Advanced Expansions
- **Deep Learning Advanced** (50 Qs) - `aiQuizBankExpansion6.js`
- **Cloud & History** (50 Qs) - `aiQuizBankExpansion7.js`
- **NLU, CV & Logic** (60 Qs) - `aiQuizBankExpansion8.js`
- **Ethics & Robotics** (30 Qs) - `aiQuizBankExpansion9a.js`
- **Edge AI & Future Trends** (30 Qs) - `aiQuizBankExpansion9b.js`

### 3. New Expansions (November 2025)
- **Reinforcement Learning & GenAI** (50 Qs) - `aiQuizBankExpansion10.js`
  - RL Agents, Rewards, Policies
  - GANs, VAEs, Transformers, LLMs
- **AI in Industry** (50 Qs) - `aiQuizBankExpansion11.js`
  - Healthcare, Finance, Retail, Manufacturing
  - Real-world use cases and challenges
- **Mathematics for AI** (50 Qs) - `aiQuizBankExpansion12.js`
  - Linear Algebra (Vectors, Matrices, Eigenvalues)
  - Calculus (Derivatives, Gradients)
  - Probability & Statistics
- **Python for AI** (50 Qs) - `aiQuizBankExpansion13.js`
  - NumPy, Pandas, Scikit-learn
  - PyTorch, TensorFlow
  - Syntax & Optimization
- **MLOps & Deployment** (50 Qs) - `aiQuizBankExpansion14a.js` & `14b.js`
  - Docker, Kubernetes, CI/CD
  - Model Monitoring (Drift), Serving (TF Serving, ONNX)

## Verification
A verification script `scripts/verify_quiz_count.js` is available to audit the total question count.
Current Count: **600**
