'use client';

import { cn } from '@/lib/utils';
import ProjectCard from '@/ui/wrappers/ProjectCard';
import ProjectSmallCard from '@/ui/wrappers/ProjectSmallCard';
import { easeOut, motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import Image from 'next/image';
import { useRef } from "react";
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import type { ViewProject } from '@/lib/projects';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      // Capped: with 15+ cards a plain i * 0.3 made the last one appear 4.5s late.
      delay: Math.min(i, 8) * 0.12,
      duration: 0.5,
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

// Tailwind col-span classes (desktop)
const COL: Record<number, string> = {
  2: 'col-span-7 sm:col-span-3 lg:col-span-2',
  3: 'col-span-7 sm:col-span-4 lg:col-span-3',
  4: 'col-span-7 lg:col-span-4',
  5: 'col-span-7 lg:col-span-5',
  7: 'col-span-7',
};

// ─── Cell styles ─────────────────────────────────────────────────────────────
// Plain cell: a hairline rule above the text, no box.
const CELL = 'relative pt-4 border-t border-line';
// Media cell: a photo fills the whole cell, so the text needs real padding.
const MEDIA_CELL = 'relative rounded-sm overflow-hidden p-[18px] lg:p-[24px]';

/** Screenshot behind a card + a scrim, so light shots stay readable under text. */
function MediaBackdrop({ src, sizes, objectPosition = 'object-center' }: {
  src: string; sizes: string; objectPosition?: string;
}) {
  return (
    <>
      <Image src={src} alt="" fill sizes={sizes}
        className={cn('absolute inset-0 z-[1] w-full h-full object-cover brightness-[.3] rounded-sm', objectPosition)} />
      {/* Darkest on the left, where the title and description sit. */}
      <span aria-hidden
        className="absolute inset-0 z-[1] rounded-sm bg-gradient-to-r from-deep/95 via-deep/75 to-deep/55" />
    </>
  );
}

// ─── Additional projects list ─────────────────────────────────────────────
// Add new project slugs here. The block system will fit them in automatically
// below the hand-placed rows.
const REMAINING: string[] = [];

// ─── Component ───────────────────────────────────────────────────────────────
type Props = { locale: Locale; dict: Dictionary; projects: Record<string, ViewProject> };

export default function CommercialProjects({ locale, dict, projects }: Props) {
  const roleLabel = dict.caseStudy.role;
  const group = dict.projectsPage.groups.client;
  const remainingProjects = REMAINING.map((slug) => projects[slug]).filter(Boolean);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: '-50% 0px -100% 0px', once: true });
  const h2Ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: h2Ref, offset: ['start 10%', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.16, 0]);

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
    <section
      id="client-work"
      className="text-white px-[16px] z-[4] relative flex flex-col justify-center items-center scroll-mt-[80px]"
      ref={containerRef}
    >
      <p className="text-[16px] lg:text-[20px] text-muted text-center max-w-[640px] mx-auto">{group.description}</p>
      <motion.h2
        ref={h2Ref}
        style={{ opacity }}
        className="mb-[8px] text-[7.5vw] font-bold mx-auto text-center uppercase tracking-[-0.03em] leading-[0.9] sticky top-0 z-[-1]"
      >
        {group.title}
      </motion.h2>

      <div className="grid grid-cols-7 gap-[20px] auto-rows-[minmax(200px,_auto)] max-w-[1232px] mx-auto mt-[120px]">

        {/* ── Row 1 ──────────────────────────────────────────────────────── */}
        <motion.div custom={0} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="col-span-7 lg:col-span-4 row-start-1 pt-4 border-t border-line">
          <ProjectCard project={projects.oikia} locale={locale} roleLabel={roleLabel} />
        </motion.div>

        <div className="col-span-7 md:col-span-2 lg:col-span-1 lg:row-start-1 flex md:flex-col gap-[20px]">
          <motion.div custom={1} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="pt-4 border-t border-line">
            <ProjectCard project={projects.c13} locale={locale} roleLabel={roleLabel} />
          </motion.div>
          <motion.div custom={2} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="pt-4 border-t border-line">
            <ProjectSmallCard project={projects.mysiteboost} locale={locale} />
          </motion.div>
        </div>

        <motion.div custom={3} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="col-span-7 md:col-span-5 lg:col-span-2 lg:row-start-1 pt-4 border-t border-line">
          <ProjectCard project={projects.proptick} locale={locale} roleLabel={roleLabel} />
        </motion.div>

        {/* ── Row 2 ──────────────────────────────────────────────────────── */}
        <motion.div custom={4} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className={cn(MEDIA_CELL, 'col-span-7 md:col-span-4 lg:col-span-4 lg:row-start-2')}>
          <MediaBackdrop src="/projects/blackbookbykristina.png" sizes="(min-width: 1024px) 700px, 100vw" />
          <ProjectCard project={projects.blackbookbykristina} locale={locale} roleLabel={roleLabel} />
        </motion.div>

        <motion.div custom={5} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="col-span-7 md:col-span-3 lg:col-start-5 lg:col-span-3 lg:row-start-2 lg:row-end-4 pt-4 border-t border-line">
          <ProjectCard project={projects.flare} locale={locale} roleLabel={roleLabel} />
        </motion.div>

        {/* ── Row 3 — 4 small cards + supertrade continues ──────────────── */}
        <div className="col-span-7 lg:col-span-4 lg:row-start-3 grid grid-cols-2 md:grid-cols-4 gap-[20px]">
          {[projects.pinta, projects.feecutex, projects.opps, projects.iqresidence].map((project, i) => (
            <motion.div key={project.slug} custom={6 + i} variants={itemVariants} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={cn('pt-4 border-t border-line')}>
              <ProjectSmallCard project={project} locale={locale} />
            </motion.div>
          ))}
        </div>

        {/* ── Row 4 — Indigo + AddUp ─────────────────────────────────────── */}
        <motion.div custom={10} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className={cn(MEDIA_CELL, 'col-span-7 lg:col-span-4 min-h-[260px] lg:h-[320px]')}>
          <MediaBackdrop src={projects.indigo.imgUrl} sizes="(min-width: 1024px) 700px, 100vw" objectPosition="object-top" />
          <ProjectCard project={projects.indigo} locale={locale} roleLabel={roleLabel} />
        </motion.div>

        {/* Right column: AddUp over Slava, together exactly as tall as the
            left column (Indigo 320 + 20 gap + IQPoint 260 = 600). */}
        <div className="col-span-7 lg:col-span-3 lg:row-span-2 flex flex-col gap-[20px] lg:h-[600px]">
          <motion.div custom={11} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className={cn(MEDIA_CELL, 'min-h-[220px] lg:h-[220px] lg:shrink-0')}>
            <MediaBackdrop src={projects.addup.imgUrl} sizes="(min-width: 1024px) 530px, 100vw" />
            <ProjectCard project={projects.addup} locale={locale} roleLabel={roleLabel} />
          </motion.div>

          <motion.div custom={12} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className={cn(MEDIA_CELL, 'min-h-[260px] lg:flex-1 lg:min-h-0')}>
            <MediaBackdrop src={projects.slava.imgUrl} sizes="(min-width: 1024px) 530px, 100vw" objectPosition="object-top" />
            {/* The video block lives in the case page; in the grid it is a backdrop. */}
            <ProjectCard project={{ ...projects.slava, imgBlock: undefined }} locale={locale} roleLabel={roleLabel} />
          </motion.div>
        </div>

        {/* ── Row 5 — IQPoint + Pershiledy under Indigo ──────────────────── */}
        <div className="col-span-7 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-[20px] items-start content-start">
          <motion.div custom={13} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className={cn(MEDIA_CELL, 'h-[260px]')}>
            <MediaBackdrop src={projects.iqpoint.imgUrl} sizes="(min-width: 1024px) 350px, 100vw" />
            <ProjectCard project={projects.iqpoint} locale={locale} roleLabel={roleLabel} />
          </motion.div>

          <motion.div custom={14} variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className={cn(CELL, 'h-[260px]')}>
            <ProjectSmallCard project={projects.pershiledy} locale={locale} />
          </motion.div>
        </div>

        {/* ── Additional projects — block-based tiling ───────────────────── */}
        {(() => {
          const elements: React.ReactNode[] = [];
          let cursor2 = 0;
          let bIdx = 0;
          let animI = 15;

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
                        className={cn('relative pt-4 border-t border-line')}>
                        <ProjectSmallCard project={project} locale={locale} />
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
                    className={cn(
                      'col-span-7 lg:col-span-3 lg:row-span-2',
                      bigRight?.imgUrl && !bigRight?.imgBlock && !bigRight?.imgSmall ? MEDIA_CELL : CELL,
                    )}>
                    {bigRight?.imgUrl && !bigRight?.imgBlock && !bigRight?.imgSmall && (
                      <Image src={bigRight.imgUrl} alt="" fill sizes="(min-width: 1024px) 530px, 100vw"
                        className="absolute inset-0 z-[1] w-full h-full object-cover brightness-[.45] rounded-sm" />
                    )}
                    <ProjectCard project={bigRight} locale={locale} roleLabel={roleLabel} />
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
              const hasBackdrop = Boolean(project?.imgUrl && !project?.imgBlock && !project?.imgSmall);

              elements.push(
                <motion.div key={project.slug} custom={animI} variants={itemVariants}
                  initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                  className={cn(hasBackdrop ? MEDIA_CELL : CELL, colClass, rowSpanClass)}>
                  {hasBackdrop && (
                    <Image src={project.imgUrl} alt="" fill sizes="(min-width: 1024px) 530px, 100vw"
                      className="absolute inset-0 z-[1] w-full h-full object-cover brightness-[.45] rounded-sm" />
                  )}
                  {cell.type === 'large'
                    ? <ProjectCard project={project} locale={locale} roleLabel={roleLabel} />
                    : <ProjectSmallCard project={project} locale={locale} />}
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
    </section>
  );
}
