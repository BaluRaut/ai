export interface Module {
  id: string
  title: string
  titleMr: string
  description: string
  descriptionMr: string
  duration: string
  icon: string
  phase: number
  topicCount: number
}

export interface Topic {
  id: string
  moduleId: string
  title: string
  titleMr?: string
  content: string
  contentMr?: string
  examples?: string[]
  examplesMr?: string[]
  keyPoints?: string[]
  keyPointsMr?: string[]
  day: number
  practicalExercise?: string
  practicalExerciseMr?: string
  diagram?: DiagramData
  // Enhanced content fields
  imageUrl?: string  // Featured image for the topic
  diagramUrl?: string  // URL to diagram/infographic
  videoUrl?: string  // YouTube or other video tutorial
  additionalResources?: string[]  // Links to external resources
  
  // Layered Learning Fields
  funFact?: string      // For 10th grade (Engagement)
  careerInsight?: string // For Freshers (Job context)
  proTip?: string       // For Pros (Real-world advice)
}

export interface DiagramData {
  type: 'mermaid' | 'flowchart' | 'sequence' | 'architecture'
  code: string
  title: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Quiz {
  id: string
  moduleId: string
  topicId?: string
  title: string
  questions: QuizQuestion[]
  passingScore: number
}

export interface LearningDay {
  day: number
  phase: string
  module: string
  topics: string[]
  practicalExercise: string
  estimatedHours: number
}

export interface UserProgress {
  completedTopics: string[]
  completedQuizzes: string[]
  quizScores: Record<string, number>
  currentDay: number
  startDate: string
  lastAccessDate: string
  bookmarkedTopics?: string[]
  bookmarkedQuizzes?: string[]
  achievements?: string[]
  notes?: Record<string, string>
}

export interface UserSettings {
  theme: 'light' | 'dark'
  fontSize: 'small' | 'medium' | 'large'
  soundEnabled: boolean
  language: 'en' | 'mr'
}

export type Language = 'en' | 'mr'

export interface Translation {
  [key: string]: {
    en: string
    mr: string
  }
}

