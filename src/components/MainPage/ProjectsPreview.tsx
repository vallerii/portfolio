'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { ViewProject } from "@/lib/projects";

type Props = { locale: Locale; data: Dictionary['preview']; projects: ViewProject[] };

export default function ProjectsPreview({ locale, data, projects }: Props) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start -15%', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['10%', `-100%`])

  const length = projects.length + 1
  return (
    <section
      className="w-full max-w-[100vw] text-white px-[16px] py-[80px] lg:py-[120px] z-[4] relative flex flex-col items-center"
      style={{ height: `calc(60vh * ${length})` }}
      ref={containerRef}
      aria-labelledby="selected-work"
    >
      <h2 id="selected-work" className="text-[12vw] font-bold mx-auto text-center uppercase">
        {data.title}
      </h2>
      <p className="text-[16px] lg:text-[24px] opacity-80 text-center max-w-[720px]">{data.subtitle}</p>

      <div className="sticky top-[10vh] md:top-[16vh] z-[-1] w-full overflow-hidden h-[80vh] flex justify-start">
        <motion.ul style={{ x }} transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }} className="flex gap-[10vw] px-[16px]">
          {projects.map((project) => (
            <li key={project.slug} className="min-w-[70vw] lg:min-w-[50vw] h-[60vh]">
              <Link href={`/${locale}/projects/${project.slug}`}
                className="w-full h-full bg-neutral-800 rounded-xl flex items-center justify-center text-white text-2xl relative"
              >
                <Image src={project.imgUrl} alt={project.title} width={1000} height={900}
                  sizes="(min-width: 1024px) 50vw, 70vw"
                  className="w-full h-full mx-auto object-cover rounded-xl" />
                <span className="absolute bottom-[-10vh] right-[-20px] text-[20px] md:text-[35px] lg:text-[50px] font-[family-name:var(--font-jetBrains)] uppercase">
                  {'<'}{project.title}{'/>'}
                </span>
              </Link>
            </li>
          ))}
          <li className="min-w-[70vw] lg:min-w-[50vw] h-[60vh]">
            <Link href={`/${locale}/projects`}
              className="w-full h-full rounded-xl flex items-center justify-center gap-[12px] text-[20px] lg:text-[60px] uppercase font-[family-name:var(--font-jetBrains)]"
            >
              {data.all}
              <FaArrowRight aria-hidden="true" />
            </Link>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
