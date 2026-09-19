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
        className="sticky top-0 h-screen pt-[22vh] flex flex-col items-start px-[16px] py-[20px] max-w-[1232px] mx-auto gap-[24px] lg:gap-[40px]"
      >
        {/* Screen readers and search engines get the plain name; the animated letters are decorative */}
        <h1 className="font-[family-name:var(--font-jetBrains)] font-bold text-[clamp(20px,5vw,60px)] flex items-center flex-wrap uppercase">
          <span className="sr-only">{hero.name}</span>
          <span aria-hidden="true" className="flex flex-wrap">
            <span>&lt;</span>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.03 }}
              >
                {letter}
              </motion.span>
            ))}
            <span>/&gt;</span>
          </span>
        </h1>

        <motion.div
          className="flex flex-col gap-[16px] max-w-[930px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[20px] lg:text-[32px] font-bold leading-tight">{hero.tagline}</p>
          <p className="text-[16px] lg:text-[20px] opacity-80">{hero.text}</p>

          <div className="flex flex-wrap gap-[16px] mt-[16px] lg:mt-[32px]">
            <a
              href={PERSON.cv}
              download
              className="flex items-center gap-[8px] font-bold uppercase rounded-full bg-white text-[#001135] px-[20px] py-[10px] hover:bg-[#34c7f8]"
            >
              <FaDownload aria-hidden="true" /> {hero.downloadCv}
            </a>
            <Link
              href="#contact"
              className="flex items-center gap-[8px] font-bold uppercase rounded-full border border-white/60 px-[20px] py-[10px]"
            >
              <FaArrowRight aria-hidden="true" /> {hero.contact}
            </Link>
          </div>
          <p className="text-[14px] lg:text-[16px] opacity-70">{hero.availability}</p>
        </motion.div>
      </motion.div>
      <div className="h-[90vh]" />
    </section>
  );
}
