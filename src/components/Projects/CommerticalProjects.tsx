'use client';

import { cn } from '@/lib/utils';
import ProjectCard from '@/ui/wrappers/ProjectCard';
import ProjectSmallCard from '@/ui/wrappers/ProjectSmallCard';
import { easeOut, motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import Image from 'next/image';
import { useRef } from "react";
import { projects } from '@/ui/data/projects';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

// ─── Remaining projects list ───────────────────────────────────────────────
// Add new projects here — the grid handles layout automatically.
const remainingProjects = [
  projects.indigo,
  projects.adsee,
  projects.addup,
  projects.shop2mob,
  projects.derma,
  projects.feecutex,
  projects.flare,
  projects.slava,
  projects.iqpoint,
  projects.iqresidence,
  projects.pershiledy,
];

// Background colors that cycle through cards
const BG_COLORS = ['#001f41', '#262D3C', '#182C40', '#0d2137', '#1e293b'];
const getBg = (i: number) => BG_COLORS[i % BG_COLORS.length];

// ─── Row layout patterns ───────────────────────────────────────────────────
// Each pattern is an array of Tailwind col-span values (out of 7 columns).
// Patterns cycle: when we run out, we start from pattern 0 again.
// To add a new pattern just push a new array — must sum to 7.
const ROW_PATTERNS: number[][] = [
  [4, 3],       // wide + medium
  [2, 3, 2],    // small + medium + small
  [3, 2, 2],    // medium + small + small
  [2, 2, 3],    // small + small + medium
  [3, 4],       // medium + wide
  [2, 3, 2],    // repeat of pattern 1 for variety
];

// Which cards in a row use ProjectCard vs ProjectSmallCard
// "large" = col-span >= 3, "small" = col-span <= 2
function getCardType(span: number): 'large' | 'small' {
  return span >= 3 ? 'large' : 'small';
}

// ─── Distribute projects into rows based on cycling patterns ───────────────
type RowItem = { project: (typeof remainingProjects)[number]; span: number; type: 'large' | 'small' };
type Row = RowItem[];

function buildRows(items: typeof remainingProjects): Row[] {
  const rows: Row[] = [];
  let cursor = 0;
  let patternIndex = 0;

  while (cursor < items.length) {
    const pattern = ROW_PATTERNS[patternIndex % ROW_PATTERNS.length];
    const rowItems: RowItem[] = [];

    for (const span of pattern) {
      if (cursor >= items.length) break;
      rowItems.push({
        project: items[cursor],
        span,
        type: getCardType(span),
      });
      cursor++;
    }

    rows.push(rowItems);
    patternIndex++;
  }

  return rows;
}

// ─── Grid span helper ─────────────────────────────────────────────────────
const COL_SPAN_CLASSES: Record<number, string> = {
  1: 'col-span-7 sm:col-span-1',
  2: 'col-span-7 sm:col-span-3 lg:col-span-2',
  3: 'col-span-7 sm:col-span-4 lg:col-span-3',
  4: 'col-span-7 sm:col-span-7 lg:col-span-4',
  5: 'col-span-7 lg:col-span-5',
  6: 'col-span-7 lg:col-span-6',
  7: 'col-span-7',
};

// ─── Component ─────────────────────────────────────────────────────────────
export default function CommercialProjects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: '-50% 0px -100% 0px', once: true });
  const h2Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: h2Ref,
    offset: ['start 10%', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const additionalRows = buildRows(remainingProjects);

  return (
    <div
      className="text-white px-[16px] z-[4] relative flex flex-col justify-center items-center"
      ref={containerRef}
    >
      <motion.h1
        ref={h2Ref}
        style={{ opacity }}
        className="mb-[40px] text-[12vw] font-bold mx-auto text-center uppercase sticky top-0 z-[-1]"
      >
        My projects
      </motion.h1>

      <div className="grid grid-cols-7 gap-[20px] auto-rows-[minmax(200px,_auto)] max-w-[1232px] mx-auto mt-[120px]">
        {/* ── Row 1 (hardcoded, existing) ─────────────────────────────── */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="col-span-7 lg:col-span-4 row-start-1 bg-[#001f41] rounded-xl p-4"
        >
          <ProjectCard {...projects.oikia} />
        </motion.div>

        <div className="col-span-7 md:col-span-2 lg:col-span-1 lg:row-start-1 flex md:flex-col gap-[20px]">
          <motion.div
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="bg-[#262D3C] rounded-xl p-4"
          >
            <ProjectCard {...projects.c13} />
          </motion.div>
          <motion.div
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="bg-[#182C40] rounded-xl p-4"
          >
            <ProjectSmallCard {...projects.mysiteboost} />
          </motion.div>
        </div>

        <motion.div
          custom={3}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="col-span-7 md:col-span-5 lg:col-span-2 lg:row-start-1 bg-[#001f41] rounded-xl p-4"
        >
          <ProjectCard {...projects.proptick} />
        </motion.div>

        {/* ── Row 2 (hardcoded, existing) ─────────────────────────────── */}
        <motion.div
          custom={4}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={cn('relative col-span-7 md:col-span-4 lg:col-span-4 lg:row-start-2 bg-[#262D3C] p-4 rounded-xl')}
        >
          <Image
            src="/projects/blackbookbykristina.png"
            alt="blackbookbykristina"
            fill
            className="absolute w-full h-full object-cover brightness-50 rounded-xl"
          />
          <ProjectCard {...projects.blackbookbykristina} />
        </motion.div>

        <motion.div
          custom={5}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="col-span-7 md:col-span-3 lg:col-start-5 col-span-3 lg:row-start-2 lg:row-end-4 bg-[#262D3C] rounded-xl p-4"
        >
          <ProjectCard {...projects.supertrade} />
        </motion.div>

        {/* ── Row 3 (hardcoded, existing) ─────────────────────────────── */}
        <div className="col-span-7 lg:col-span-4 lg:row-start-3 grid grid-cols-2 md:grid-cols-4 gap-[20px]">
          {[projects.pinta, projects.bleakers, projects.opps, projects.notifix].map((project, i) => (
            <motion.div
              key={project.slug}
              custom={6 + i}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={cn('rounded-xl p-4', i % 2 === 0 ? 'bg-[#262D3C]' : 'bg-[#182C40]')}
            >
              <ProjectSmallCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* ── Additional projects — pattern-based, auto-layout ─────────── */}
        {additionalRows.map((row, rowIndex) =>
          row.map((item, colIndex) => {
            // Global animation index offset — keeps stagger consistent
            const animIndex = 10 + rowIndex * 4 + colIndex;

            return (
              <AdditionalCard
                key={item.project.slug}
                item={item}
                animIndex={animIndex}
                bgColor={getBg(rowIndex * 3 + colIndex)}
                isInView={isInView}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

// ─── AdditionalCard ────────────────────────────────────────────────────────
// Separated so the ref-based InView can work per card if needed later.
function AdditionalCard({
  item,
  animIndex,
  bgColor,
  isInView,
}: {
  item: RowItem;
  animIndex: number;
  bgColor: string;
  isInView: boolean;
}) {
  const colClass = COL_SPAN_CLASSES[item.span] ?? 'col-span-7';

  return (
    <motion.div
      custom={animIndex}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn('rounded-xl p-4', colClass)}
      style={{ backgroundColor: bgColor }}
    >
      {item.type === 'large' ? (
        <ProjectCard {...item.project} />
      ) : (
        <ProjectSmallCard {...item.project} />
      )}
    </motion.div>
  );
}

