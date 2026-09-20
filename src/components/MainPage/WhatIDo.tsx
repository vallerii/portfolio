'use client';

import QuestionItem from './QuestionItem';
import TechSkills from './TechSkills';
import type { Dictionary } from '@/i18n/dictionaries';

type Props = { data: Dictionary['whatIDo']; skills: Dictionary['skills'] };

export default function WhatIDo({ data, skills }: Props) {
  return (
    <section
      className="text-white px-[16px] py-[80px] lg:py-[120px] max-w-[1232px] mx-auto w-full flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-[40px] "
      style={{ background: '', zIndex: 44 }}
      id='skills'
    >
      <div className="flex flex-col gap-[12px] w-full max-w-[400px] ">
        <h2 className="text-[11vw] lg:text-[6vw] font-bold uppercase tracking-[-0.03em] leading-[0.86] max-w-[8ch]">{data.title}</h2>
        <p className="text-[17px] lg:text-[20px] text-muted max-w-[330px] mt-[16px]">
          {data.subtitle}
        </p>
        <div className='lg:my-[600px] display-none lg:block'>
          <TechSkills skills={skills} />
        </div>
              
      </div>

        <div className='flex flex-col gap-[12px] w-full max-w-[580px] lg:mt-[166px] sticky top-50'>
          {data.items.map((el, i: number) => (
            <QuestionItem key={i} item={el} />
          ))}
        </div>
        
    </section>
  );
}



