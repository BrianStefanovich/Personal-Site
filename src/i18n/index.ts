import { defaultLocale, type Locale } from './config';
import { es } from './es';

const dictionaries = { es } as const;

export type Translations = typeof es;

export function getTranslations(locale: Locale = defaultLocale): Translations {
	return dictionaries[locale];
}

export { defaultLocale, isLocale, locales, type Locale } from './config';
