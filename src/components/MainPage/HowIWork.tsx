'use client';

import { motion } from 'framer-motion';
import type { Dictionary } from '@/i18n/dictionaries';

type Props = { data: Dictionary['howIWork'] };

export default function HowIWork({ data }: Props) {
  return (
    <section
      id="how-i-work"
      className="text-white px-[16px] py-[80px] lg:py-[120px] max-w-[1232px] mx-auto w-full relative z-[5] mt-[-40vh] scroll-mt-[80px]"
    >
      <h2 className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold uppercase">{data.title}</h2>
      <p className="text-[16px] lg:text-[24px] opacity-80 max-w-[640px] mt-[12px]">{data.subtitle}</p>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[40px] lg:mt-[60px]">
        {data.steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl p-[20px] bg-[#001f41]/80 border border-white/10 flex flex-col gap-[8px]"
          >
            <span className="font-[family-name:var(--font-jetBrains)] text-[#34c7f8] text-[14px]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-[20px] font-bold uppercase">{step.title}</h3>
            <p className="text-white/75">{step.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
