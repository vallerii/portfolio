'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Projects from './Projects';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const letters = 'Petropavlovska_Valeriia'.split('');

export default function Intro() {
  const [showBrackets, setShowBrackets] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showText, setShowText] = useState(false);

  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  useEffect(() => {
    const t1 = setTimeout(() => setShowBrackets(true), 300);
    const t2 = setTimeout(() => setShowName(true), 1000);
    const t3 = setTimeout(() => setShowText(true), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full " 
    >  
      <motion.div
        ref={contentRef}
        style={{ scale, opacity, y , }}
        className="sticky top-0 h-screen pt-[30vh] flex flex-col items-start px-[16px] py-[20px] max-w-[1232px] mx-auto gap-[30px] lg:gap-[60px]"
      >
       
        <h1 className="font-[family-name:var(--font-jetBrains)] font-bold text-[30px] lg:text-[60px] flex items-center flex-wrap uppercase">
          {showBrackets && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>&lt;</motion.span>}

          {showName &&
            letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {letter}
              </motion.span>
            ))}

          {showBrackets && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>/&gt;</motion.span>}
        </h1>

        {showText && (
          <motion.div
            className="text-[16px] lg:text-[24px] max-w-[930px] opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Frontend developer with <strong>2+ years</strong> of experience building 
            responsive, 
            performant & 
            accessible websites.
            <br />
            {/* <span className="font-bold flex items-center gap-[8px]"><FaArrowRight />React,</span>
            <span className="font-bold flex items-center gap-[8px]"><FaArrowRight />Next.js,</span>
            <span className="font-bold flex items-center gap-[8px]"><FaArrowRight />Tailwind,</span>
            <span className="font-bold flex items-center gap-[8px]"><FaArrowRight />...</span> */}
            {/* Focused on clean, accessible, and animated UI. Passionate about user
            experience and performance. */}
            <br />
            Open to remote and freelance opportunities.

            <Link href={'#contact'} className="flex items-center gap-[8px] font-bold uppercase mt-[30px] lg:mt-[60px] ml-auto w-fit" >
              <FaArrowRight />Contact me
            </Link>
          </motion.div>
        )}
      </motion.div>
      
      <Projects />
    </section>
  );
}