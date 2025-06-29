'use client';

import ProjectCard from '@/ui/wrappers/ProjectCard';
import ProjectSmallCard from '@/ui/wrappers/ProjectSmallCard';

const projects = {
  oikia: {
    title: 'Oikia Properties',
    description: 'Сайт недвижимости в Греции и за её пределами.',
    role: 'Главный разработчик',
    stack: ['Next.js', 'Tailwind', 'DatoCMS', 'GraphQL', 'Framer Motion', 'AMO CRM'],
    img: '/projects/oikia.png',
  },
  ui: {
    title: 'UI-компоненты',
    description: 'Создание библиотеки UI-компонентов.',
    role: 'Frontend Dev',
    stack: ['Storybook', 'React', 'Tailwind'],
    img: '/projects/pinta.png',
  },
  landing: {
    title: 'Адаптивный лендинг',
    description: 'Современный лендинг с адаптацией под все экраны.',
    role: 'UI Developer',
    stack: ['HTML', 'CSS', 'GSAP'],
    img: '/projects/pinta.png',
  },
  blog: {
    title: 'Личный блог',
    description: 'Markdown-блог с темной темой и тэгами.',
    role: 'Fullstack Dev',
    stack: ['Next.js', 'MDX', 'Tailwind'],
    img: '/projects/pinta.png',
  },
  dashboard: {
    title: 'Дашборд аналитики',
    description: 'UI для сложных графиков и метрик.',
    role: 'Frontend Dev',
    stack: ['React', 'Recharts', 'Tailwind'],
    img: '/projects/pinta.png',
  },
  supertrade: {
    title: 'Supertrade',
    description: 'Платформа для трейдинга с лендингом и рассылкой.',
    role: 'Main Dev',
    stack: ['Next.js', 'SendPulse', 'CSS Animation'],
    img: '/projects/supertrade.png',
  },
};

export default function Projects() {
  return (
    <div className=" text-white px-[16px] py-[80px] lg:py-[120px] z-[4] relative"
      style={{
        background: 'rgba(52, 199, 248, 100%)'
      }}
    >
      <h2 className="text-4xl font-bold mb-10 max-w-[1232px] mx-auto">Мои проекты</h2>
      <div className="grid grid-cols-7 gap-4 auto-rows-[minmax(200px,_auto)] max-w-[1232px] mx-auto">
        {/* Ряд 1 */}
        <div className="col-span-4 row-start-1 bg-[#0B1A26] rounded-xl p-4">
          <ProjectCard {...projects.oikia} />
        </div>
        <div className="col-span-2 row-start-1 bg-[#0B1A26] rounded-xl p-4">
          <ProjectCard {...projects.ui} />
        </div>
        <div className="col-span-1 row-start-1 bg-[#0B1A26] rounded-xl p-4">
          <ProjectCard {...projects.landing} />
        </div>

        {/* Ряд 2 */}
        <div className="col-span-1 col-span-4 row-start-2 flex items-center justify-center font-[family-name:var(--font-jetBrains)] font-bold text-[30px] lg:text-[60px] uppercase p-4">
          +30 projects
        </div>
   
        <div className="col-start-5 col-span-3 row-start-2 row-end-4 bg-[#0B1A26] rounded-xl p-4">
          <ProjectCard {...projects.supertrade} />
        </div>
        {/* Ряд 3 */}
        <div className="col-span-1 row-start-3 bg-[#0B1A26] rounded-xl p-4">
          <ProjectSmallCard {...projects.blog} />
        </div>
        <div className="col-span-1 row-start-3 bg-[#0B1A26] rounded-xl p-4">
          <ProjectSmallCard {...projects.blog} />
        </div>
        <div className="col-span-1 row-start-3 bg-[#0B1A26] rounded-xl p-4">
          <ProjectSmallCard {...projects.dashboard} />
        </div>
        <div className="col-span-1 row-start-3 bg-[#0B1A26] rounded-xl p-4">
          <ProjectSmallCard {...projects.dashboard} />
        </div>
      </div>
    </div>
  );
}



