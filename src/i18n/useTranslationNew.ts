import { useTranslation as useI18nextTranslation } from 'react-i18next'

export function useTranslation() {
  const { t, i18n } = useI18nextTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return {
    t,
    language: i18n.language,
    changeLanguage,
  }
}

// Helper hook for getting nested translations
export function useNestedTranslation(namespace: string) {
  const { t } = useI18nextTranslation()
  
  return (key: string) => t(`${namespace}.${key}`)
}
