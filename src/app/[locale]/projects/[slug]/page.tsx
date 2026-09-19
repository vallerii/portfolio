import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectPage from '@/components/Projects/ProjectPage';
import { hasLocale, localeTags, locales } from '@/i18n/config';
import { fill, getDictionary } from '@/i18n/dictionaries';
import { getProject, groupAnchor, projectSlugs } from '@/lib/projects';
import { PERSON, absoluteUrl, alternates, jsonLd, localePath } from '@/lib/site';
import Breadcrumbs from '@/ui/layout/Breadcrumbs';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => projectSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: PageProps<'/[locale]/projects/[slug]'>): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) return {};
  const project = getProject(slug, locale);
  if (!project) return {};
  const dict = getDictionary(locale);
  const title = fill(dict.meta.caseTitle, { project: project.title });
  const description = `${project.description} ${fill(dict.meta.caseRole, { role: project.role })}`;
  const path = `/projects/${slug}`;
  return {
    title,
    description,
    alternates: alternates(locale, path),
    openGraph: {
      type: 'article',
      title,
      description,
      url: localePath(locale, path),
      locale: localeTags[locale].og,
      images: [{ url: project.imgUrl, alt: project.title }],
    },
  };
}

export default async function CasePage({ params }: PageProps<'/[locale]/projects/[slug]'>) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) notFound();
  const project = getProject(slug, locale);
  if (!project) notFound();
  const dict = getDictionary(locale);
  const group = dict.projectsPage.groups[project.group];
  const path = localePath(locale, `/projects/${slug}`);

  const creativeWork = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: absoluteUrl(path),
    image: absoluteUrl(project.imgUrl),
    inLanguage: locale,
    keywords: project.stack.join(', '),
    ...(project.year ? { dateCreated: project.year } : {}),
    creator: { '@type': 'Person', name: PERSON.name, url: absoluteUrl(localePath(locale)) },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(creativeWork)} />
      <Breadcrumbs
        label={dict.breadcrumbs.label}
        items={[
          { name: dict.nav.home, href: localePath(locale) },
          { name: dict.nav.projects, href: localePath(locale, '/projects') },
          { name: group.title, href: `${localePath(locale, '/projects')}#${groupAnchor[project.group]}` },
          { name: project.title, href: path },
        ]}
      />
      <ProjectPage project={project} locale={locale} labels={dict.caseStudy} />
    </>
  );
}
