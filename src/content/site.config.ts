export const SCHEDULE_URL = import.meta.env.VITE_SCHEDULE_URL ?? 'mailto:hello@brianstefanovich.com'

export const CONTACT_EMAIL = 'hello@brianstefanovich.com'

export const LANGUAGES = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
] as const

export type LanguageCode = (typeof LANGUAGES)[number]['code']
