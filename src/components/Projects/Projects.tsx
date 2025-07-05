'use client';

import ProjectCard from '@/ui/wrappers/ProjectCard';
import ProjectSmallCard from '@/ui/wrappers/ProjectSmallCard';
import { easeOut, motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const projects = {
  oikia: {
    title: 'Oikia Properties',
    href: 'https://oikiaproperties.gr/en',
    description: 'Сайт недвижимости в Греции и за её пределами.',
    role: 'Главный разработчик',
    stack: ['Next.js', 'Tailwind', 'DatoCMS', 'GraphQL', 'Framer Motion', 'AMO CRM'],
    img: <video
          src={'/projects/oikia.mp4'}
          autoPlay
          loop
          muted
          poster={'/projects/oikia.png'}
          width={800}
          height={600}
          className="rounded-md w-auto h-auto"
        />,
  },
  c13: {
    title: 'c13.agency',
    href: 'https://c13.agency/',
    description: 'Создание библиотеки UI-компонентов.',
    role: 'Frontend Dev',
    stack: ['GSAP', 'React', 'Tailwind'],
    img: <Image
          src={'/projects/c13.svg'}
          alt={'oikia'}
          width={800}
          height={600}
          objectFit="cover"
          className="w-full h-auto absolute bottom-1/3 opacity-50"
        />,
  },
  landing: {
    title: 'Proptick',
    href: 'https://prop-tick.com',
    description: 'Современный лендинг с адаптацией под все экраны.',
    role: 'UI Developer',
    stack: ['HTML', 'CSS', 'GSAP'],
    img: <div className="mask-container w-full h-full ">
          <div className="circle-animation w-full h-full" />
        </div>,
  },
  pinta: {
    title: 'Pinta',
    description: 'Markdown-блог с темной темой и тэгами.',
    role: 'Frontend Dev',
    stack: ['Next.js', 'MDX', 'Tailwind'],
    img: '/projects/pinta.png',
  },
  blog: {
    title: 'Bleakers',
    href: 'https://bleakers.co/',
    description: 'Markdown-блог с темной темой и тэгами.',
    role: 'Frontend Dev',
    stack: ['Next.js', 'MDX', 'Tailwind'],
    img: '/projects/bleakers.svg',
  },
  notifix: {
    title: 'Notifix',
    href: '',
    description: 'Markdown-блог с темной темой и тэгами.',
    role: 'Frontend Dev',
    stack: ['Next.js', 'MDX', 'Tailwind'],
    img: '/projects/notifix.png',
  },
  dashboard: {
    title: 'Opps',
    href: 'https://app.opps.ai',
    description: 'UI для сложных графиков и метрик.',
    role: 'Frontend Dev',
    stack: ['React', 'Recharts', 'Tailwind'],
    img: '/projects/opps.svg',
  },
  supertrade: {
    title: 'Supertrade',
    description: 'Платформа для трейдинга с лендингом и рассылкой.',
    role: 'Main Dev',
    stack: ['Next.js', 'SendPulse', 'CSS Animation'],
    img: <>
        <div className='custom-pulse' >
          <Image src={'/projects/super.png'} alt='super' width={'490'} height={'241'}  className='w-auto h-auto mx-auto'/>
        </div>
        <div className='custom-pulse'>
          <Image src={'/projects/trade.png'} alt='trade' width={'490'} height={'241'} className='w-auto h-auto mx-auto'/>
        </div>
    </>,
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: easeOut,  
    }
  }),
};

export default function Projects() {
  // Реф для всей сетки
  const containerRef = useRef(null);
  // Проверяем, в видимости ли контейнер (появился в середине экрана)
  const isInView = useInView(containerRef, { margin: '-50% 0px -100% 0px', once: true });
  const h2Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: h2Ref,
    offset: ['start 60%', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div
      className="backdrop-blur-[50px] text-white px-[16px] py-[80px] lg:py-[120px] z-[4] relative flex flex-col justify-center items-center"
      style={{ background: '' }}
      ref={containerRef}
    >
      <motion.h2
        ref={h2Ref}
        style={{ opacity }}
        className="text-[12vw] md:text-[13vw] font-bold mx-auto text-center uppercase sticky top-0 z-[-1] "
      >
        My projects
      </motion.h2>      
      <div className="grid grid-cols-7 gap-[20px] auto-rows-[minmax(200px,_auto)] max-w-[1232px] mx-auto mt-[40px]">
        {/* Ряд 1 */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="col-span-7 lg:col-span-4 row-start-1 bg-[#001f41] rounded-xl p-4"
        >
          <ProjectCard {...projects.oikia} />
        </motion.div>

        <div className="col-span-7 md:col-span-2 lg:col-span-1 lg:row-start-1 flex md:flex-col gap-[20px]">
          <motion.div
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#262D3C] rounded-xl p-4"
          >
            <ProjectCard {...projects.c13} />
          </motion.div>
          <motion.div
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#182C40] rounded-xl p-4"
          >
            <ProjectCard {...projects.c13} />
          </motion.div>
        </div>

        <motion.div
          custom={3}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="col-span-7 md:col-span-5 lg:col-span-2 lg:row-start-1 bg-[#001f41] rounded-xl p-4"
        >
          <ProjectCard {...projects.landing} />
        </motion.div>

        {/* Ряд 2 */}
        <motion.div
          custom={4}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="col-span-7 md:col-span-4 lg:col-span-4 lg:row-start-2 flex gap-[8px] items-center justify-center font-[family-name:var(--font-jetBrains)] font-bold text-[30px] lg:text-[60px] uppercase p-4"
        >
          <Link href={'/projects'} className="flex items-center gap-2">
            See more <FaArrowRight />
          </Link>
        </motion.div>

        <motion.div
          custom={5}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="col-span-7 md:col-span-3 lg:col-start-5 col-span-3 lg:row-start-2 lg:row-end-4 bg-[#262D3C] rounded-xl p-4"
        >
          <ProjectCard {...projects.supertrade} />
        </motion.div>

        {/* Ряд 3 */}

        <div className="col-span-7 lg:col-span-4 lg:row-start-3 grid grid-cols-2 md:grid-cols-4 gap-[20px]">
          <motion.div
            custom={6}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#262D3C] rounded-xl p-4"
          >
            <ProjectSmallCard {...projects.pinta} />
          </motion.div>
          <motion.div
            custom={7}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#182C40] rounded-xl p-4"
          >
            <ProjectSmallCard {...projects.blog} />
          </motion.div>
          <motion.div
            custom={8}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#262D3C] rounded-xl p-4"
          >
            <ProjectSmallCard {...projects.dashboard} />
          </motion.div>
          <motion.div
            custom={9}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#182C40] rounded-xl p-4"
          >
            <ProjectSmallCard {...projects.notifix} />
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}



