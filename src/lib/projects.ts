import type { Locale } from '@/i18n/config';
import { projects, type ProjectGroup, type ProjectMedia } from '@/ui/data/projects';
import { projectContent, type CaseContent } from '@/ui/data/projectContent';

export type ViewProject = ProjectMedia & CaseContent;

export const projectSlugs = Object.keys(projects);

export function getProject(slug: string, locale: Locale): ViewProject | undefined {
  const media = (projects as Record<string, ProjectMedia>)[slug];
  const content = projectContent[slug]?.[locale];
  if (!media || !content) return undefined;
  return { ...media, ...content };
}

/** All projects for a locale, keyed by slug */
export function getProjectMap(locale: Locale): Record<string, ViewProject> {
  const map: Record<string, ViewProject> = {};
  for (const slug of projectSlugs) {
    const p = getProject(slug, locale);
    if (p) map[slug] = p;
  }
  return map;
}

export const groupAnchor: Record<ProjectGroup, string> = {
  client: 'client-work',
  product: 'from-idea',
  own: 'my-projects',
};
