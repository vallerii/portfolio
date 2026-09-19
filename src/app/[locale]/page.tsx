import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MainPage from '@/components/MainPage/MainPage';
import { hasLocale, localeTags } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { getProjectMap } from '@/lib/projects';
import { PERSON, absoluteUrl, alternates, jsonLd, localePath } from '@/lib/site';

/** Projects shown in the "Selected work" scroller, in order */
const FEATURED = ['oikia', 'blackbookbykristina', 'movingo', 'vpdigital', 'flare'];

export async function generateMetadata({ params }: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    alternates: alternates(locale),
    openGraph: {
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      url: localePath(locale),
      locale: localeTags[locale].og,
    },
  };
}

export default async function Home({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const map = getProjectMap(locale);
  const featured = FEATURED.map((slug) => map[slug]).filter(Boolean);

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSON.name,
    jobTitle: dict.meta.jobTitle,
    description: dict.hero.tagline,
    url: absoluteUrl(localePath(locale)),
    email: `mailto:${PERSON.email}`,
    image: absoluteUrl(`/${locale}/opengraph-image`),
    sameAs: [PERSON.linkedin, PERSON.github, PERSON.telegram],
    knowsAbout: ['Next.js', 'React', 'TypeScript', 'SEO', 'Web performance', 'Product development'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(person)} />
      <MainPage locale={locale} dict={dict} featured={featured} />
    </>
  );
}
