'use client';

import ProjectCard from '@/ui/wrappers/ProjectCard';
import { easeOut, motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import type { ViewProject } from '@/lib/projects';
import type { ProjectGroup } from '@/ui/data/projects';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: easeOut },
  }),
};

type Cell = { slug: string; className: string };

/** Layouts for the smaller project sections (same card system as client work) */
const LAYOUTS: Record<Exclude<ProjectGroup, 'client'>, Cell[]> = {
  // [ Movingo (4 cols, 2 rows) | VP Digital (3) ]
  // [                          | RAG (3)        ]
  product: [
    { slug: 'movingo', className: 'col-span-7 lg:col-span-4 lg:row-span-2 bg-[#001f41]' },
    { slug: 'vpdigital', className: 'col-span-7 md:col-span-4 lg:col-span-3 bg-[#262D3C]' },
    { slug: 'rag', className: 'col-span-7 md:col-span-3 lg:col-span-3 bg-[#182C40]' },
  ],
  // [ Layers of the Earth (4) | post-bridge (3) ]
  own: [
    { slug: 'earthlayers', className: 'col-span-7 lg:col-span-4 bg-[#001f41]' },
    { slug: 'postbridge', className: 'col-span-7 lg:col-span-3 bg-[#262D3C]' },
  ],
};

const ANCHOR = { product: 'from-idea', own: 'my-projects' } as const;

type Props = {
  group: Exclude<ProjectGroup, 'client'>;
  locale: Locale;
  dict: Dictionary;
  projects: Record<string, ViewProject>;
};

export default function ProjectSection({ group, locale, dict, projects }: Props) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: '-50% 0px -100% 0px', once: true });
  const h2Ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: h2Ref, offset: ['start 10%', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const text = dict.projectsPage.groups[group];

  return (
    <section
      id={ANCHOR[group]}
      className="text-white px-[16px] z-[4] relative flex flex-col justify-center items-center scroll-mt-[80px]"
      ref={containerRef}
    >
      <motion.h2
        ref={h2Ref}
        style={{ opacity }}
        className="mb-[40px] text-[12vw] font-bold mx-auto text-center uppercase sticky top-0 z-[-1]"
      >
        {text.title}
      </motion.h2>
      <p className="text-[16px] lg:text-[20px] opacity-80 text-center max-w-[720px]">{text.description}</p>

      <div className="grid grid-cols-7 gap-[20px] auto-rows-[minmax(200px,_auto)] w-full max-w-[1232px] mx-auto mt-[120px]">
        {LAYOUTS[group].map((cell, i) => {
          const project = projects[cell.slug];
          if (!project) return null;
          return (
            <motion.div
              key={cell.slug}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={`${cell.className} rounded-xl p-4`}
            >
              <ProjectCard project={project} locale={locale} roleLabel={dict.caseStudy.role} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
