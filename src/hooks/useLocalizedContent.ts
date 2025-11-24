import { Module, Topic } from '../types'
import { useTranslation } from '../i18n/useTranslation'

export function useLocalizedContent() {
  const { t, language: lang } = useTranslation()

  const getModuleTitle = (module: Module) => {
    if (!module.id) return module.title || ''
    const key = `modules.${module.id.replace(/-/g, '')}.title` as any
    return t(key) || module.title || ''
  }

  const getModuleDescription = (module: Module) => {
    if (!module.id) return module.description || ''
    const key = `modules.${module.id.replace(/-/g, '')}.description` as any
    return t(key) || module.description || ''
  }

  const getModuleDuration = (module: Module) => {
    if (!module.id) return module.duration || ''
    const key = `modules.${module.id.replace(/-/g, '')}.duration` as any
    return t(key) || module.duration || ''
  }

  const getTopicTitle = (topic: Topic) => {
    return lang === 'mr' && topic.titleMr ? topic.titleMr : topic.title
  }

  const getTopicContent = (topic: Topic) => {
    return lang === 'mr' && topic.contentMr ? topic.contentMr : topic.content
  }

  const getTopicKeyPoints = (topic: Topic) => {
    return lang === 'mr' && topic.keyPointsMr ? topic.keyPointsMr : topic.keyPoints || []
  }

  const getTopicExamples = (topic: Topic) => {
    return lang === 'mr' && topic.examplesMr ? topic.examplesMr : topic.examples || []
  }

  const getTopicExercise = (topic: Topic) => {
    return lang === 'mr' && topic.practicalExerciseMr ? topic.practicalExerciseMr : topic.practicalExercise
  }

  return {
    getModuleTitle,
    getModuleDescription,
    getModuleDuration,
    getTopicTitle,
    getTopicContent,
    getTopicKeyPoints,
    getTopicExamples,
    getTopicExercise,
    currentLanguage: lang
  }
}