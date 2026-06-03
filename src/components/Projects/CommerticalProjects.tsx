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

// ─────────────────────────────────────────────────────────────────────────────
// BLOCK SYSTEM
// Each block is a self-contained 7-column sub-grid section.
// Blocks cycle automatically — just add new ones to BLOCKS or add projects
// to remainingProjects. No manual row positioning needed.
//
// A block defines:
//   rows     — number of explicit grid rows in this sub-grid
//   cells[]  — each cell: { col, row, rowSpan?, type }
//     col     — col-span (1–7, must sum to 7 per visual row)
//     row     — which row inside the sub-grid (1-based)
//     rowSpan — optional, how many rows the cell spans (default 1)
//     type    — 'large' (ProjectCard) | 'small' (ProjectSmallCard)
// ─────────────────────────────────────────────────────────────────────────────
type CellDef = { col: number; row: number; rowSpan?: number; type: 'large' | 'small' };
type BlockDef = { rows: number; cells: CellDef[] };

// How many projects does a block consume?
const BLOCKS: BlockDef[] = [
  // Block A: wide-tall left + two stacked right
  // [ 4 (×2 rows) | 3 ]
  // [             | 3 ]
  {
    rows: 2,
    cells: [
      { col: 4, row: 1, rowSpan: 2, type: 'large' },
      { col: 3, row: 1,             type: 'large' },
      { col: 3, row: 2,             type: 'large' },
    ],
  },

  // Block B: 4 small cards in a 2×2 inside col-span-4, tall card right
  // [ 4 smalls (2×2)  | 3 (×2) ]
  // [                 |        ]
  {
    rows: 2,
    cells: [
      { col: 4, row: 1, rowSpan: 2, type: 'small' }, // wrapper handled separately below
      { col: 3, row: 1, rowSpan: 2, type: 'large' },
    ],
  },

  // Block C: medium | small | medium
  // [ 3 | 2 | 2 ]
  {
    rows: 1,
    cells: [
      { col: 3, row: 1, type: 'large' },
      { col: 2, row: 1, type: 'small' },
      { col: 2, row: 1, type: 'small' },
    ],
  },

  // Block D: two stacked left + wide-tall right
  // [ 3 | 4 (×2) ]
  // [ 3 |        ]
  {
    rows: 2,
    cells: [
      { col: 3, row: 1,             type: 'large' },
      { col: 4, row: 1, rowSpan: 2, type: 'large' },
      { col: 3, row: 2,             type: 'large' },
    ],
  },

  // Block E: small | large | small
  {
    rows: 1,
    cells: [
      { col: 2, row: 1, type: 'small' },
      { col: 3, row: 1, type: 'large' },
      { col: 2, row: 1, type: 'small' },
    ],
  },
];

const BG_COLORS = ['#001f41', '#262D3C', '#182C40', '#0d2137', '#1e293b'];
const getBg = (i: number) => BG_COLORS[i % BG_COLORS.length];

// Tailwind col-span classes (desktop)
const COL: Record<number, string> = {
  2: 'col-span-7 sm:col-span-3 lg:col-span-2',
  3: 'col-span-7 sm:col-span-4 lg:col-span-3',
  4: 'col-span-7 lg:col-span-4',
  5: 'col-span-7 lg:col-span-5',
  7: 'col-span-7',
};

// ─── Additional projects list ─────────────────────────────────────────────
// Add new projects here. The block system will fit them in automatically.
const remainingProjects = [
  projects.flare,
  projects.indigo,
  projects.addup,
  projects.shop2mob,
  projects.derma,
  projects.feecutex,
  projects.adsee,
  projects.slava,
  projects.iqpoint,
  projects.iqresidence,
  projects.pershiledy,
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function CommercialProjects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: '-50% 0px -100% 0px', once: true });
  const h2Ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: h2Ref, offset: ['start 10%', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Assign projects to blocks, cycling blocks as needed
  type Assignment = { project: typeof remainingProjects[number]; cell: CellDef; globalBgIndex: number };
  const assignments: Assignment[] = [];
  let cursor = 0;
  let blockIndex = 0;
  let bgCounter = 0;

  while (cursor < remainingProjects.length) {
    const block = BLOCKS[blockIndex % BLOCKS.length];
    for (const cell of block.cells) {
      if (cursor >= remainingProjects.length) break;
      assignments.push({ project: remainingProjects[cursor], cell, globalBgIndex: bgCounter });
      cursor++;
      bgCounter++;
    }
    blockIndex++;
  }

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

        {/* ── Row 1 ──────────────────────────────────────────────────────── */}
        <motion.div custom={0} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="col-span-7 lg:col-span-4 row-start-1 bg-[#001f41] rounded-xl p-4">
          <ProjectCard {...projects.oikia} />
        </motion.div>

        <div className="col-span-7 md:col-span-2 lg:col-span-1 lg:row-start-1 flex md:flex-col gap-[20px]">
          <motion.div custom={1} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="bg-[#262D3C] rounded-xl p-4">
            <ProjectCard {...projects.c13} />
          </motion.div>
          <motion.div custom={2} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="bg-[#182C40] rounded-xl p-4">
            <ProjectSmallCard {...projects.mysiteboost} />
          </motion.div>
        </div>

        <motion.div custom={3} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="col-span-7 md:col-span-5 lg:col-span-2 lg:row-start-1 bg-[#001f41] rounded-xl p-4">
          <ProjectCard {...projects.proptick} />
        </motion.div>

        {/* ── Row 2 ──────────────────────────────────────────────────────── */}
        <motion.div custom={4} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="relative col-span-7 md:col-span-4 lg:col-span-4 lg:row-start-2 bg-[#262D3C] p-4 rounded-xl">
          <Image src="/projects/blackbookbykristina.png" alt="blackbookbykristina" fill
            className="absolute w-full h-full object-cover brightness-50 rounded-xl" />
          <ProjectCard {...projects.blackbookbykristina} />
        </motion.div>

        <motion.div custom={5} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="col-span-7 md:col-span-3 lg:col-start-5 lg:col-span-3 lg:row-start-2 lg:row-end-4 bg-[#262D3C] rounded-xl p-4">
          <ProjectCard {...projects.supertrade} />
        </motion.div>

        {/* ── Row 3 — 4 small cards + supertrade continues ──────────────── */}
        <div className="col-span-7 lg:col-span-4 lg:row-start-3 grid grid-cols-2 md:grid-cols-4 gap-[20px]">
          {[projects.pinta, projects.bleakers, projects.opps, projects.notifix].map((project, i) => (
            <motion.div key={project.slug} custom={6 + i} variants={itemVariants} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={cn('rounded-xl p-4', i % 2 === 0 ? 'bg-[#262D3C]' : 'bg-[#182C40]')}>
              <ProjectSmallCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* ── Additional projects — block-based tiling ───────────────────── */}
        {(() => {
          const elements: React.ReactNode[] = [];
          let cursor2 = 0;
          let bIdx = 0;
          let animI = 10;

          while (cursor2 < remainingProjects.length) {
            const block = BLOCKS[bIdx % BLOCKS.length];

            // Special case: Block B — the 4-small sub-grid
            if (block === BLOCKS[1]) {
              // Left side: 4 small cards in a 2×2 sub-grid, spanning col-4 row-2
              const smalls: typeof remainingProjects[number][] = [];
              let tempCursor = cursor2;

              for (let k = 0; k < 4 && tempCursor < remainingProjects.length; k++, tempCursor++) {
                smalls.push(remainingProjects[tempCursor]);
              }
              const bigRight = remainingProjects[tempCursor];

              if (smalls.length > 0) {
                elements.push(
                  <div key={`block-b-smalls-${cursor2}`}
                    className="col-span-7 lg:col-span-4 lg:row-span-2 grid grid-cols-2 gap-[20px]">
                    {smalls.map((project, si) => (
                      <motion.div key={project.slug} custom={animI + si} variants={itemVariants}
                        initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                        className={cn('rounded-xl p-4 relative', si % 2 === 0 ? 'bg-[#262D3C]' : 'bg-[#182C40]')}>
                        <ProjectSmallCard {...project} />
                      </motion.div>
                    ))}
                  </div>
                );
                animI += smalls.length;
                cursor2 += smalls.length;
              }

              if (bigRight && cursor2 < remainingProjects.length) {
                elements.push(
                  <motion.div key={bigRight.slug} custom={animI} variants={itemVariants}
                    initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                    className="col-span-7 lg:col-span-3 lg:row-span-2 rounded-xl p-4 relative"
                    style={{ backgroundColor: getBg(animI) }}>
                    {bigRight?.imgUrl && !bigRight?.imgBlock && !bigRight?.imgSmall && (
                      <Image src={bigRight.imgUrl} alt={bigRight.title} fill
                        className="absolute z-[1] w-full h-full object-cover brightness-70 rounded-xl" />
                    )}
                    <ProjectCard {...bigRight} />
                  </motion.div>
                );
                animI++;
                cursor2++;
              }

              bIdx++;
              continue;
            }

            // All other blocks: place cells with col-span + row-span
            const blockProjects: typeof remainingProjects[number][] = [];
            for (let k = 0; k < block.cells.length && cursor2 + k < remainingProjects.length; k++) {
              blockProjects.push(remainingProjects[cursor2 + k]);
            }

            blockProjects.forEach((project, k) => {
              const cell = block.cells[k];
              const colClass = COL[cell.col] ?? 'col-span-7';
              const rowSpanClass = cell.rowSpan === 2 ? 'lg:row-span-2' : '';

              elements.push(
                <motion.div key={project.slug} custom={animI} variants={itemVariants}
                  initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                  className={cn('rounded-xl p-4 relative', colClass, rowSpanClass)}
                  style={{ backgroundColor: getBg(animI) }}>
                  {project?.imgUrl && !project?.imgBlock && !project?.imgSmall && (
                    <Image src={project.imgUrl} alt={project.title} fill
                      className="absolute z-[1] w-full h-full object-cover brightness-70 rounded-xl" />
                  )}
                  {cell.type === 'large'
                    ? <ProjectCard {...project} />
                    : <ProjectSmallCard {...project} />}
                </motion.div>
              );
              animI++;
            });

            cursor2 += blockProjects.length;
            bIdx++;
          }

          return elements;
        })()}

      </div>
    </div>
  );
}
