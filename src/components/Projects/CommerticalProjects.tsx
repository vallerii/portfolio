'use client';

import { cn } from '@/lib/utils';
import ProjectCard from '@/ui/wrappers/ProjectCard';
import ProjectSmallCard from '@/ui/wrappers/ProjectSmallCard';
import { easeOut, motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import Image from 'next/image';
import { useRef } from "react";
import { projects } from '@/ui/data/projects';


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

export default function CommerticalProjects() {
  // Реф для всей сетки
  const containerRef = useRef(null);
  // Проверяем, в видимости ли контейнер (появился в середине экрана)
  const isInView = useInView(containerRef, { margin: '-50% 0px -100% 0px', once: true });
  const h2Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: h2Ref,
    offset: ['start 10%', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div
      className="text-white px-[16px]  z-[4] relative flex flex-col justify-center items-center"
      style={{ background: '' }}
      ref={containerRef}
    >
      <motion.h1
        ref={h2Ref}
        style={{ opacity }}
        className="mb-[40px] text-[12vw] font-bold mx-auto text-center uppercase sticky top-0 z-[-1] "
      >
        My projects
      </motion.h1>      
      <div className="grid grid-cols-7 gap-[20px] auto-rows-[minmax(200px,_auto)] max-w-[1232px] mx-auto mt-[120px]">
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
           <ProjectSmallCard {...projects.mysiteboost} />
          </motion.div>
        </div>

        <motion.div
          custom={3}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="col-span-7 md:col-span-5 lg:col-span-2 lg:row-start-1 bg-[#001f41] rounded-xl p-4"
        >
          <ProjectCard {...projects.proptick} />
        </motion.div>

        {/* Ряд 2 */}
        <motion.div
          custom={4}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={cn("relative col-span-7 md:col-span-4 lg:col-span-4 lg:row-start-2 bg-[#262D3C] p-4 rounded-xl") }
        >
          <Image src="/projects/blackbookbykristina.png" alt="blackbookbykristina" fill className='absolute w-full h-full object-cover brightness-50 rounded-xl' />
          <ProjectCard {...projects.blackbookbykristina} />
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
            <ProjectSmallCard {...projects.bleakers} />
          </motion.div>
          <motion.div
            custom={8}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#262D3C] rounded-xl p-4"
          >
            <ProjectSmallCard {...projects.opps} />
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



