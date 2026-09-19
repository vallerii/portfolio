import type { MetadataRoute } from 'next';
import { defaultLocale, localeTags, locales } from '@/i18n/config';
import { projectSlugs } from '@/lib/projects';
import { absoluteUrl, localePath } from '@/lib/site';

const paths = ['', '/projects', ...projectSlugs.map((slug) => `/projects/${slug}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, path)),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : path === '/projects' ? 0.8 : 0.6,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [localeTags[l].hreflang, absoluteUrl(localePath(l, path))])),
          'x-default': absoluteUrl(localePath(defaultLocale, path)),
        },
      },
    })),
  );
}
