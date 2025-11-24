import en from './en.json'
import mr from './mr.json'

export type TranslationKey = keyof typeof en

type Language = 'en' | 'mr'

const fallbackEn = en as Record<TranslationKey, string>
const mrOverrides = mr as Partial<Record<TranslationKey, string>>

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: fallbackEn,
  mr: { ...fallbackEn, ...mrOverrides }
}

