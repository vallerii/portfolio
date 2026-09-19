import CommerticalProjects from './CommerticalProjects';
import ProjectSection from './MyProjects';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import type { ViewProject } from '@/lib/projects';

type Props = { locale: Locale; dict: Dictionary; projects: Record<string, ViewProject> };

export default function AllProjectsPage({ locale, dict, projects }: Props) {
  return (
    <main className='flex flex-col gap-120'>
      <header className="px-[16px] pt-[40px] max-w-[1232px] mx-auto w-full text-white">
        <h1 className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold uppercase">{dict.projectsPage.title}</h1>
        <p className="text-[16px] lg:text-[24px] opacity-80 max-w-[760px] mt-[12px]">{dict.projectsPage.intro}</p>
      </header>
      <CommerticalProjects locale={locale} dict={dict} projects={projects} />
      <ProjectSection group="product" locale={locale} dict={dict} projects={projects} />
      <ProjectSection group="own" locale={locale} dict={dict} projects={projects} />
    </main>
  );
}
