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
    <div className='flex  gap-[20px] md:gap-[40px] flex-col items-center pb-[120px] px-[16px] max-w-[1600px] mx-auto'>
     
      {/* <motion.h1
        ref={h2Ref}
        style={{ opacity }}
        className=" text-[12vw] leading-[1.1] font-bold mx-auto uppercase z-[-1] "
      >
        {project.title}
      </motion.h1>  */}
            {/* <motion.h1 
            ref={h2Ref}
        style={{ opacity }}
            className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold text-center uppercase">{project.title}</motion.h1>
      */}
      <motion.h1 
        ref={h2Ref}
        style={{ opacity }}
        className="font-[family-name:var(--font-jetBrains)] font-bold text-[clamp(20px,5vw,60px)] flex items-center flex-wrap uppercase mt-[40px] mb-[120px]">
          {"<"}{project.title} {"/>"}
      </motion.h1>

      <div className='flex flex-col gap-[20px] md:gap-[40px] lg:gap-[80px] max-w-[1232px] mx-auto relative '>
        
        { project.imgBlock && project.imgBlock}
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[20px] h-[50vh] '>
         
          {project?.overview && <div className="fullDescription text-sm md:text-lg lg:text-xl text-white/90 my-auto" dangerouslySetInnerHTML={{__html: project.overview}}/>}
            
          <Image src={project.imgUrl} alt={project.title} width={1232} height={900} className="w-full h-full mx-auto object-cover rounded-xl" />
        </div>
        
        {project?.structure && <div className="fullDescription text-sm md:text-lg lg:text-xl text-white/90" dangerouslySetInnerHTML={{__html: project.structure}}/>}

        {project.videoUrl && (
          <video
            src={project.videoUrl}
            autoPlay
            loop
            muted
            poster={project.imgUrl}
            width={800}
            height={600}
            className="rounded-md w-auto h-auto"
          />
        )}
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[20px]'>
          <div className="flex flex-wrap gap-1  h-fit">
            {project.stack.map((tech: string, index: number) => (
              <div key={index} className="flex bg-[#34c7f81A] text-[#34c7f8] px-2 py-0.5 rounded-[5px] w-fit h-fit whitespace-nowrap">
                {tech}
              </div>
            ))}
          </div>
          {project?.functionality && <div className="fullDescription text-sm md:text-lg lg:text-xl text-white/90" dangerouslySetInnerHTML={{__html: project.functionality}}/>}
            
        </div>
        
        {project?.myRole && <div className="fullDescription text-sm md:text-lg lg:text-xl text-white/90" dangerouslySetInnerHTML={{__html: project.myRole}}/>}
      </div>
      
    </div>
  );
}


