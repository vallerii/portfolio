"use client";
import { useParams } from 'next/navigation';
import { projects } from './AllProjectsPage';
import { useRef } from 'react';
import {motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';


export default function ProjectPage() {
  const slug = useParams().title;
  const project = projects[slug as keyof typeof projects];
  const h2Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: h2Ref,
    offset: ['start 10%', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div className='flex flex-col items-center pb-[120px]'>
     
      <motion.h1
        ref={h2Ref}
        style={{ opacity }}
        className="mb-[40px] text-[8vw] md:text-[10vw] font-bold mx-auto uppercase sticky top-0 z-[-1] "
      >
        {project.title}
      </motion.h1> 

      <div className='flex flex-col gap-[20px] max-w-[1232px] mx-auto relative'>
        <div className="flex flex-wrap gap-1 text-sm text-white ">
          {project.stack.map((tech: string, index: number) => (
            <span key={index} className="bg-[#34c7f81A] text-[#34c7f8] px-2 py-0.5 rounded-[5px]">
              {tech}
            </span>
          ))}
        </div>
        { project.imgBlock && project.imgBlock}
        <div className="text-lg text-zinc-400">{project.description}</div>
        <Image src={project.imgUrl} alt={project.title} width={1232} height={900} className="w-full h-full mx-auto object-cover rounded-xl" />
        {project.fullDescription && <div className="text-lg text-zinc-400">{project.fullDescription}</div>}
      </div>
      
    </div>
  );
}


