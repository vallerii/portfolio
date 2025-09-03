'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from '../Projects/Projects';
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  const containerRef = useRef(null)
  const projectArray=Object.values(projects)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start -35%', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['20%', `-100%`])

  const length = projectArray.length+1
  return (
    <div
      className="backdrop-blur-[0px] text-white px-[16px] py-[80px] lg:py-[120px] z-[4] relative flex flex-col  items-center"
      style={{ height: `calc(60vh * ${length})` }}
      ref={containerRef}
    >
      <h2
        className="text-[12vw] md:text-[13vw] font-bold mx-auto text-center uppercase"
      >
        My projects
      </h2> 
      <motion.div
          className="absolute top-[100px] left-1/2 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl pointer-events-none z-0"
          initial={{ scale: 0.8, opacity: 0.2 }}
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
     
      
      <div className="sticky top-[10vh] md:top-[16vh] z-[-1] w-screen h-[60vh] flex items-center justify-start">
        <motion.div style={{ x }} transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }} className="flex gap-[10vw] px-[16px]">
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
          <Link href={'/projects'} 
            className="min-w-[70vw] lg:min-w-[50vw] h-[60vh] rounded-xl flex items-center justify-center text-[20px] lg:text-[60px] uppercase font-[family-name:var(--font-jetBrains)] "
          >
            see all projects
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>  
      
    </div>
  );
}



