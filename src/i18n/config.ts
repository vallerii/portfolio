export const locales = ['en', 'uk'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Value for hreflang / og:locale */
export const localeTags: Record<Locale, { hreflang: string; og: string; label: string }> = {
  en: { hreflang: 'en', og: 'en_US', label: 'EN' },
  uk: { hreflang: 'uk', og: 'uk_UA', label: 'UA' },
};
