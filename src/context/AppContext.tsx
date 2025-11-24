import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { UserProgress, UserSettings } from '../types'

interface AppContextType {
  progress: UserProgress
  settings: UserSettings
  markTopicComplete: (topicId: string) => void
  markQuizComplete: (quizId: string, score: number) => void
  updateSettings: (settings: Partial<UserSettings>) => void
  getProgressPercentage: () => number
  toggleBookmark: (id: string, type: 'topic' | 'quiz') => void
  addNote: (topicId: string, note: string) => void
  unlockAchievement: (achievementId: string) => void
}

const defaultProgress: UserProgress = {
  completedTopics: [],
  completedQuizzes: [],
  quizScores: {},
  currentDay: 1,
  startDate: new Date().toISOString(),
  lastAccessDate: new Date().toISOString(),
  bookmarkedTopics: [],
  bookmarkedQuizzes: [],
  achievements: [],
  notes: {}
}

const defaultSettings: UserSettings = {
  theme: 'light',
  fontSize: 'medium',
  soundEnabled: true,
  language: 'en'
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('cloudLearningProgress')
    return saved ? JSON.parse(saved) : defaultProgress
  })

  const [settings, setSettings] = useState<UserSettings>(() => {
    const saved = localStorage.getItem('cloudLearningSettings')
    return saved ? JSON.parse(saved) : defaultSettings
  })

  useEffect(() => {
    localStorage.setItem('cloudLearningProgress', JSON.stringify(progress))
  }, [progress])

  useEffect(() => {
    localStorage.setItem('cloudLearningSettings', JSON.stringify(settings))
  }, [settings])

  const markTopicComplete = (topicId: string) => {
    setProgress(prev => ({
      ...prev,
      completedTopics: [...new Set([...prev.completedTopics, topicId])],
      lastAccessDate: new Date().toISOString()
    }))
  }

  const markQuizComplete = (quizId: string, score: number) => {
    setProgress(prev => ({
      ...prev,
      completedQuizzes: [...new Set([...prev.completedQuizzes, quizId])],
      quizScores: { ...prev.quizScores, [quizId]: score },
      lastAccessDate: new Date().toISOString()
    }))
  }

  const updateSettings = (newSettings: Partial<UserSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }))
  }

  const getProgressPercentage = () => {
    const totalTopics = 400 // 20 modules × 20 topics
    return Math.round((progress.completedTopics.length / totalTopics) * 100)
  }

  const toggleBookmark = (id: string, type: 'topic' | 'quiz') => {
    setProgress(prev => {
      const field = type === 'topic' ? 'bookmarkedTopics' : 'bookmarkedQuizzes'
      const currentBookmarks = prev[field] || []
      const isBookmarked = currentBookmarks.includes(id)
      
      return {
        ...prev,
        [field]: isBookmarked
          ? currentBookmarks.filter(itemId => itemId !== id)
          : [...currentBookmarks, id],
        lastAccessDate: new Date().toISOString()
      }
    })
  }

  const addNote = (topicId: string, note: string) => {
    setProgress(prev => ({
      ...prev,
      notes: { ...prev.notes, [topicId]: note },
      lastAccessDate: new Date().toISOString()
    }))
  }

  const unlockAchievement = (achievementId: string) => {
    setProgress(prev => ({
      ...prev,
      achievements: [...new Set([...(prev.achievements || []), achievementId])],
      lastAccessDate: new Date().toISOString()
    }))
  }

  return (
    <AppContext.Provider value={{
      progress,
      settings,
      markTopicComplete,
      markQuizComplete,
      updateSettings,
      getProgressPercentage,
      toggleBookmark,
      addNote,
      unlockAchievement
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}

