export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'pt', 'fr', 'de', 'it'] as const,
} as const;

export type Locale = (typeof i18n.locales)[number];

export function isValidLocale(locale: string): locale is Locale {
  return (i18n.locales as readonly string[]).includes(locale);
}

export function normalizeLocale(locale: string): Locale {
  const lowerLocale = locale.toLowerCase();
  if (isValidLocale(lowerLocale)) {
    return lowerLocale;
  }

  const baseLocale = lowerLocale.split('-')[0];
  if (isValidLocale(baseLocale)) {
    return baseLocale;
  }

  return i18n.defaultLocale;
}
