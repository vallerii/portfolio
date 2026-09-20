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
      <h2 className="text-[11vw] lg:text-[7vw] font-bold uppercase tracking-[-0.03em] leading-[0.86]">{data.title}</h2>
      <p className="text-[18px] lg:text-[24px] text-muted max-w-[640px] mt-[20px]">{data.subtitle}</p>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[48px] mt-[56px] lg:mt-[80px]">
        {data.steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="pt-[18px] border-t border-line flex flex-col gap-[10px]"
          >
            <span className="font-[family-name:var(--font-jetBrains)] text-accent text-[13px] tracking-[0.2em]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-[26px] lg:text-[32px] font-bold uppercase tracking-[-0.02em]">{step.title}</h3>
            <p className="text-[16px] text-ink/70 leading-[1.55]">{step.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
