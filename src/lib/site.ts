import type { Metadata } from 'next';
import { defaultLocale, localeTags, locales, type Locale } from '@/i18n/config';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://valleri-portfolio.vercel.app').replace(/\/$/, '');

export const PERSON = {
  name: 'Valeriia Petropavlovska',
  email: 'valeriapetropavlovska@gmail.com',
  telegram: 'https://t.me/valllleri',
  telegramHandle: '@valllleri',
  linkedin: 'https://www.linkedin.com/in/valleri',
  github: 'https://github.com/vallerii',
  cv: '/cv.pdf',
};

/** Path without locale, e.g. '' | '/projects' | '/projects/oikia' */
export const localePath = (locale: Locale, path = '') => `/${locale}${path}`;
export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

/** canonical + hreflang alternates for a locale-independent path */
export function alternates(locale: Locale, path = ''): Metadata['alternates'] {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeTags[l].hreflang] = localePath(l, path);
  languages['x-default'] = localePath(defaultLocale, path);
  return { canonical: localePath(locale, path), languages };
}

export type Crumb = { name: string; href: string };

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

/** Safe JSON-LD serialisation for <script type="application/ld+json"> */
export const jsonLd = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, '\\u003c') });
