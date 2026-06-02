"use client";
import { useParams } from 'next/navigation';
import { projects } from './AllProjectsPage';
import { useRef } from 'react';
import {motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


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
          {project.isMyProject && project.href && <span className="text-sm text-[#FFF] ml-2">
            <Link href={project.href} target="_blank" rel="noopener noreferrer" className="text-[white]">
              <svg
                fill="currentColor"
                width="60"
                height="60"
                viewBox="0 0 64 64"
                className="text-white hover:text-blue-500 transition-colors"
              >
                <path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z"/>
                <path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z"/>
              </svg>            </Link>
            </span>
          }
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
            {project.isMyProject && project.href && <span className="text-sm text-[#FFF] ml-2">
            <Link href={project.href} target="_blank" rel="noopener noreferrer" className="text-[white]">
              <svg
                fill="currentColor"
                width="30"
                height="30"
                viewBox="0 0 64 64"
                className="text-white hover:text-blue-500 transition-colors"
              >
                <path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z"/>
                <path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z"/>
              </svg>            </Link>
            </span>
          }
          </div>
          {project?.functionality && <div className="fullDescription text-sm md:text-lg lg:text-xl text-white/90" dangerouslySetInnerHTML={{__html: project.functionality}}/>}
            
        </div>
        
        {project?.myRole && <div className="fullDescription text-sm md:text-lg lg:text-xl text-white/90" dangerouslySetInnerHTML={{__html: project.myRole}}/>}
      </div>
      
    </div>
  );
}


