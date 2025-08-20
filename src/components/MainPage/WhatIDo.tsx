'use client';

import QuestionItem from './QuestionItem';
import TechSkills from './TechSkills';



export default function WhatIDo() {
  const data = [
    {
      question: 'Full-cycle website development',
      answer: 'Landing pages, corporate websites, platforms, and web applications — from design to deployment.'
    },
    {
      question: 'Front-end development',
      answer: 'Responsive, cross-browser interfaces built with modern technologies: React, Next.js, Tailwind, and TypeScript.'
    },
    {
      question: 'CMS, CRM & API integrations',
      answer: 'Connecting any CMS (like Sanity, Strapi), and external services like payment systems, email marketing, CRMs, maps, and forms, etc.'
    },
    {
      question: 'Performance optimization',
      answer: 'Improving loading speed, running Lighthouse audits, SEO optimization.'
    },
    {
      question: 'Multilingual & localization support',
      answer: 'Creating multilingual interfaces'
    },
    {
      question: 'Animations & UX enhancements',
      answer: 'Framer Motion, smooth transitions, skeleton loaders, and responsive UI for a seamless experience.'
    },
    {
      question: 'Project maintenance & support',
      answer: 'Refactoring, feature extensions, and ongoing improvements.'
    },

  ]
  return (
    <div
      className="text-white px-[16px] py-[80px] lg:py-[120px] max-w-[1232px] mx-auto w-full flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-[40px]"
      style={{ background: '', zIndex: 44 }}
    >
      <div className="flex flex-col gap-[12px] w-full max-w-[400px] ">
        <h2 className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold uppercase max-w-[330px]">What I do?</h2>
        <p className="text-[16px] lg:text-[24px] opacity-80 max-w-[330px]">
          I build interfaces that look good and work even better.
        </p>
        <div className='my-[600px] display-none lg:block'>
          <TechSkills />
        </div>
              
      </div>

        <div className='flex flex-col gap-[12px] w-full max-w-[580px] lg:mt-[166px] sticky top-50'>
          {data.map((el, i: number) => (
            <QuestionItem key={i} item={el} />
          ))}
        </div>
        
    </div>
  );
}



