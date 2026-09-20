import CommerticalProjects from './CommerticalProjects';
import ProjectSection from './MyProjects';
import ProcessStrip from './ProcessStrip';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import type { ViewProject } from '@/lib/projects';

type Props = { locale: Locale; dict: Dictionary; projects: Record<string, ViewProject> };

export default function AllProjectsPage({ locale, dict, projects }: Props) {
  return (
    <main className="flex flex-col gap-[64px] lg:gap-[96px] pb-[120px]">
      <header className="px-[16px] pt-[24px] max-w-[1232px] mx-auto w-full text-white">
        <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] font-bold uppercase tracking-[-0.02em] leading-[0.95]">
          {dict.projectsPage.title}
        </h1>
        <p className="text-[16px] lg:text-[20px] text-muted max-w-[62ch] mt-[10px]">{dict.projectsPage.intro}</p>
      </header>

      <ProcessStrip data={dict.howIWork} />

      <CommerticalProjects locale={locale} dict={dict} projects={projects} />
      <ProjectSection group="product" locale={locale} dict={dict} projects={projects} />
      <ProjectSection group="own" locale={locale} dict={dict} projects={projects} />
    </main>
  );
}
