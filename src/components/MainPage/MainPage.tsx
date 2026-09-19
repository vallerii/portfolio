import BackgroundCanvas from '@/ui/wrappers/ThreeCodeBackground';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import type { ViewProject } from '@/lib/projects';
import ContactMe from './ContactMe';
import HowIWork from './HowIWork';
import Intro from './Intro';
import ProjectsPreview from './ProjectsPreview';
import WhatIDo from './WhatIDo';

type Props = { locale: Locale; dict: Dictionary; featured: ViewProject[] };

export default function MainPage({ locale, dict, featured }: Props) {
  return (
    <main className='flex flex-col items-center pb-[120px]'>
      <BackgroundCanvas />
      <Intro hero={dict.hero} />
      <HowIWork data={dict.howIWork} />
      <WhatIDo data={dict.whatIDo} skills={dict.skills} />
      <ProjectsPreview locale={locale} data={dict.preview} projects={featured} />
      <ContactMe data={dict.contact} />
    </main>
  );
}
