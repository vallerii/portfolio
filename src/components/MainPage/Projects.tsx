'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from '../Projects/Projects';
import Image from "next/image";

export default function Projects() {
  const containerRef = useRef(null)
  const projectArray=Object.values(projects)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start -40%', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['100%', `-${100 * (projectArray.length - 1)}vw`])

  
  return (
    <div
      className="backdrop-blur-[50px] text-white px-[16px] py-[80px] lg:py-[120px] z-[4] relative flex flex-col  items-center"
      style={{ height: `calc(60vh * ${projectArray.length })` }}
      ref={containerRef}
    >
      <h2
        className="text-[12vw] md:text-[13vw] font-bold mx-auto text-center uppercase"
      >
        My projects
      </h2>      
      
      <div className="sticky top-[10vh] md:top-[16vh] z-[-1] w-screen h-[60vh] flex items-center justify-start">
        <motion.div style={{ x }} className="flex gap-[4vw] px-[8vw]">
          {projectArray.map((project, i) => (
            <div
              key={i}
              className="min-w-[70vw] lg:min-w-[50vw] h-[60vh] bg-neutral-800 rounded-xl flex items-center justify-center text-white text-2xl relative"
            >
             <Image src={project.imgUrl} alt={project.title} width={1000} height={900} className="w-full h-full mx-auto object-fill rounded-xl" />
             <p className="absolute bottom-[-100px] right-[-20px] text-[20px] lg:text-[60px] font-[family-name:var(--font-jetBrains)] uppercase">
              {'<'}{project.title}{'/>'}
             </p>
            </div>
          ))}
        </motion.div>
      </div>  
      
    </div>
  );
}



