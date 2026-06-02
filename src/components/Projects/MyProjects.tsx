'use client';

import ProjectCard from '@/ui/wrappers/ProjectCard';
// import ProjectSmallCard from '@/ui/wrappers/ProjectSmallCard';
import { easeOut, motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
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

export default function MyProjects() {
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
        My practice
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
          <ProjectCard {...projects.earthlayers} />
        </motion.div>

        
      </div>
    </div>
  );
}



