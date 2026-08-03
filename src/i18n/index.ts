import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import es from './locales/es.json'
import en from './locales/en.json'

export const defaultNS = 'translation'

export const resources = {
  es: { translation: es },
  en: { translation: en },
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    defaultNS,
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: 'lang',
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
