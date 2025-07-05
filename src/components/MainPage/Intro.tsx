'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Projects from '../Projects/Projects';

const letters = 'Petropavlovska_Valeriia'.split('');

const codeSnippets = [
  'const [state, setState] = useState(null);',
  '<motion.div animate={{ y: 0 }} />',
  'display: flex;',
  '[].map((item) => <Card {...item} />)',
  'useEffect(() => {}, [])',
  'const fetchData = async () => {}',
  'transition: all 0.3s ease-in-out;',
  'color: var(--primary);',
  'export default function Component() {}',
  'background: linear-gradient(...)',
  'if (isMobile) setMenuOpen(true);',
  '<NextImage src="/img.png" />',
  'onClick={() => handleClick()}',
  '.container { max-width: 1200px; }',
  'transform: scale(1.05);',
  'hover:underline;',
  '<HeroSection title="Welcome" />',
  'map((item) => <Card {...item} />)',
  'const router = useRouter();',
  'justify-content: space-between;',
  'text-shadow: 0 0 10px #f5b100;',
  '<FramerMotion key={index} />',
];

let uniqueId = 0;

export default function Intro() {
  const [showBrackets, setShowBrackets] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showText, setShowText] = useState(false);
  const [enableCodeRain, setEnableCodeRain] = useState(false);
  const [codeRain, setCodeRain] = useState<
    { id: number; text: string; left: number; duration: number }[]
  >([]);

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
    const t4 = setTimeout(() => setEnableCodeRain(true), 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  useEffect(() => {
    if (!enableCodeRain) return;

    const interval = setInterval(() => {
      const newSnippet = {
        id: uniqueId++,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        left: Math.random() * 100,
        duration: 4 + Math.random() * 2,
      };

      setCodeRain((prev) => [...prev, newSnippet]);

      // удаляем старый код через duration + запас
      setTimeout(() => {
        setCodeRain((prev) => prev.filter((item) => item.id !== newSnippet.id));
      }, newSnippet.duration * 1000 + 200);
    }, 200); // каждые 200 мс — новая строка

    return () => clearInterval(interval);
  }, [enableCodeRain]);

  return (
    <section ref={sectionRef} className="relative w-full">
      
      <motion.div
        ref={contentRef}
        style={{ scale, opacity, y }}
        className="sticky top-0 h-screen pt-[30vh] flex flex-col items-start px-[16px] py-[20px]"
      >
        <div className='flex flex-col items-start max-w-[1232px] mx-auto gap-[30px] lg:gap-[60px] w-full'>
          <h1 className="font-[family-name:var(--font-jetBrains)] text-[30px] lg:text-[40px] flex items-center flex-wrap">
            {showBrackets && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>&lt;&nbsp;</motion.span>}

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

            {showBrackets && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>&nbsp;/&gt;</motion.span>}
          </h1>

          {showText && (
            <motion.p
              className="text-[16px] lg:text-[24px]  opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Frontend developer with 2+ years of experience building responsive, performant, and accessible websites
              using React, Next.js, and Tailwind. Focused on clean, accessible, and animated UI. Passionate about user
              experience and performance.
              <br />
              <br />
              Open to remote and freelance opportunities.
            </motion.p>
          )}
        </div>

        {/* 💻 Дождь кода */}
        {enableCodeRain && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {codeRain.map((item) => (
              <motion.div
                key={item.id}
                className="absolute top-[-50px] text-[12px] lg:text-[16px] font-[family-name:var(--font-jetBrains)] "
                style={{
                  left: `${item.left}%`,
                  background:
                    'radial-gradient(50% 38.42% at 50% 50%, #F9D44DCC 0%, #f5b100 35.58%, rgba(245, 176, 0, 0.41) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  whiteSpace: 'nowrap',
                }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: '100vh', opacity: 1 }}
                transition={{
                  duration: item.duration,
                }}
              >
                {item.text}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
      <Projects />
    </section>
  );
}
