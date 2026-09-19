import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AllProjectsPage from '@/components/Projects/AllProjectsPage';
import { hasLocale, localeTags } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { getProjectMap } from '@/lib/projects';
import { alternates, localePath } from '@/lib/site';
import Breadcrumbs from '@/ui/layout/Breadcrumbs';

export async function generateMetadata({ params }: PageProps<'/[locale]/projects'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.projectsTitle,
    description: dict.meta.projectsDescription,
    alternates: alternates(locale, '/projects'),
    openGraph: {
      title: dict.meta.projectsTitle,
      description: dict.meta.projectsDescription,
      url: localePath(locale, '/projects'),
      locale: localeTags[locale].og,
      images: [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectsPage({ params }: PageProps<'/[locale]/projects'>) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Breadcrumbs
        label={dict.breadcrumbs.label}
        items={[
          { name: dict.nav.home, href: localePath(locale) },
          { name: dict.nav.projects, href: localePath(locale, '/projects') },
        ]}
      />
      <AllProjectsPage locale={locale} dict={dict} projects={getProjectMap(locale)} />
    </>
  );
}
