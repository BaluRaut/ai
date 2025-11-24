import { useTranslation } from '../i18n/useTranslation'
import { Module } from '../types'

export function useModuleContent() {
  const { t } = useTranslation()

  const getModuleTitle = (module: Module): string => {
    const key = `modules.${module.id.replace(/-/g, '')}.title` as any
    return t(key)
  }

  const getModuleDescription = (module: Module): string => {
    const key = `modules.${module.id.replace(/-/g, '')}.description` as any
    return t(key)
  }

  const getModuleDuration = (module: Module): string => {
    const key = `modules.${module.id.replace(/-/g, '')}.duration` as any
    return t(key)
  }

  return {
    getModuleTitle,
    getModuleDescription,
    getModuleDuration
  }
}
