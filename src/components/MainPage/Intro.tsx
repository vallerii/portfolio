'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import type { Dictionary } from '@/i18n/dictionaries';
import { PERSON } from '@/lib/site';

type Props = { hero: Dictionary['hero'] };

export default function Intro({ hero }: Props) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const letters = hero.name.replace(/\s+/g, '_').split('');

  return (
    <section ref={sectionRef} className="relative w-full">
      <motion.div
        style={{ scale, opacity, y }}
        className="sticky top-0 h-[100svh] pt-[13vh] pb-[6vh] flex flex-col items-start justify-center px-[16px] max-w-[1400px] mx-auto gap-[clamp(10px,1.6vh,20px)] w-full"
      >
        {/* Screen readers and search engines get the plain name; the animated letters are decorative */}
        <p className="font-[family-name:var(--font-jetBrains)] text-[13px] lg:text-[15px] uppercase tracking-[0.3em] text-accent">
          <span className="sr-only">{hero.name}. </span>
          <span aria-hidden="true">
            {letters.map((letter, index) => (
              <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 + index * 0.02 }}>
                {letter}
              </motion.span>
            ))}
          </span>
        </p>

        <h1 className="font-bold uppercase text-[clamp(30px,4.6vw,76px)] leading-[0.95] tracking-[-0.03em] max-w-[16ch]">
          {hero.headline}
        </h1>

        <p className="text-[17px] lg:text-[22px] font-medium text-ink/85 max-w-[30ch]">{hero.role}</p>

        <motion.div
          className="flex flex-col gap-[clamp(12px,1.8vh,22px)] max-w-[760px] mt-[clamp(8px,1.6vh,24px)]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[16px] lg:text-[19px] leading-[1.5] text-ink/75 max-w-[56ch]">{hero.text}</p>

          <div className="flex flex-wrap gap-[14px] mt-[6px]">
            <a
              href={PERSON.cv}
              download
              className="flex items-center gap-[10px] font-bold uppercase tracking-[0.08em] text-[15px] bg-accent text-deep px-[24px] py-[13px] rounded-full hover:opacity-90"
            >
              <FaDownload aria-hidden="true" /> {hero.downloadCv}
            </a>
            <Link
              href="#contact"
              className="flex items-center gap-[10px] font-bold uppercase tracking-[0.08em] text-[15px] border border-line px-[24px] py-[13px] rounded-full hover:border-accent"
            >
              <FaArrowRight aria-hidden="true" /> {hero.contact}
            </Link>
          </div>
          <p className="text-[14px] lg:text-[15px] text-muted">{hero.availability}</p>
        </motion.div>
      </motion.div>
      <div className="h-[90vh]" />
    </section>
  );
}
