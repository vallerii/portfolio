'use client';

import { motion } from 'framer-motion';
import type { Dictionary } from '@/i18n/dictionaries';

type Props = { data: Dictionary['howIWork'] };

/**
 * Compact version of the home page "How I work" block for the projects page:
 * the same steps, but as a quiet strip instead of a full-screen section —
 * no giant heading, just a small label and the numbered steps.
 */
export default function ProcessStrip({ data }: Props) {
  return (
    <section
      aria-labelledby="process-strip-title"
      className="px-[16px] max-w-[1232px] mx-auto w-full relative z-[5]"
    >
      <h2
        id="process-strip-title"
        className="font-[family-name:var(--font-jetBrains)] text-[12px] lg:text-[13px] uppercase tracking-[0.22em] text-accent"
      >
        {data.title}
      </h2>

      <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-[24px] gap-y-[28px] mt-[24px]">
        {data.steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="pt-[12px] border-t border-line flex flex-col gap-[6px]"
          >
            <span className="font-[family-name:var(--font-jetBrains)] text-accent text-[11px] tracking-[0.2em]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-[16px] lg:text-[18px] font-bold uppercase tracking-[-0.01em]">{step.title}</h3>
            <p className="text-[13px] lg:text-[14px] text-ink/60 leading-[1.5]">{step.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
