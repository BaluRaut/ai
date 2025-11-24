import { useAppContext } from '../context/AppContext'
import { translations, TranslationKey } from './translations'

export function useTranslation() {
  const { settings } = useAppContext()
  const currentLanguage = settings.language

  const t = (key: TranslationKey): string => {
    const languagePack = translations[currentLanguage]
    const fallbackPack = translations.en
    return languagePack?.[key] ?? fallbackPack?.[key] ?? key
  }

  return { t, language: currentLanguage }
}

