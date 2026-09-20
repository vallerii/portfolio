'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import type { ViewProject } from '@/lib/projects';

type Props = { project: ViewProject; locale: Locale; labels: Dictionary['caseStudy'] };

const sectionTitle = 'text-[14px] lg:text-[16px] mb-[20px] text-accent uppercase tracking-[0.18em] font-bold font-[family-name:var(--font-jetBrains)]';
const bodyText = 'text-[16px] md:text-[18px] lg:text-[20px] text-white/90';

export default function ProjectPage({ project, locale, labels }: Props) {
  const h1Ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: h1Ref, offset: ['start 10%', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const intro = project.challenge ?? project.idea ?? project.overview;
  const introTitle = project.challenge ? labels.challenge : project.idea ? labels.idea : labels.overview;
  const alt = labels.screenshot.replace('{project}', project.title);

  const media = project.imgBlock ?? (
    project.videoUrl ? (
      <video src={project.videoUrl} autoPlay loop muted playsInline poster={project.imgUrl} width={1232} height={800}
        className="rounded-md w-full h-auto" aria-label={alt} />
    ) : (
      <Image src={project.imgUrl} alt={alt} width={1440} height={900} priority sizes="(min-width: 1264px) 1232px, 100vw"
        className="rounded-md w-full h-auto" />
    )
  );

  return (
    <main className="flex gap-[20px] md:gap-[40px] flex-col items-center pb-[120px] px-[16px] max-w-[1600px] mx-auto">
      <motion.h1
        ref={h1Ref}
        style={{ opacity }}
        className="font-bold text-[clamp(36px,6vw,104px)] uppercase tracking-[-0.03em] leading-[0.86] mt-[40px] mb-[20px] lg:mb-[60px] self-start max-w-[1232px] w-full"
      >
        {project.title}
      </motion.h1>

      <div className="flex flex-col gap-[32px] md:gap-[48px] lg:gap-[64px] w-full max-w-[1232px] mx-auto relative">
        {/* Facts */}
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] text-white/90">
          <div>
            <dt className="text-sm text-white/60">{labels.role}</dt>
            <dd className="font-bold">{project.role}</dd>
          </div>
          {project.year && (
            <div>
              <dt className="text-sm text-white/60">{labels.year}</dt>
              <dd className="font-bold">{project.year}</dd>
            </div>
          )}
          {project.status && (
            <div>
              <dt className="text-sm text-white/60">{labels.status}</dt>
              <dd className="font-bold">{project.status}</dd>
            </div>
          )}
          <div className="sm:col-span-2 lg:col-span-4">
            <dt className="text-sm text-white/60 mb-[6px]">{labels.stack}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <li key={tech} className="text-accent whitespace-nowrap after:content-['·'] after:mx-2 after:text-muted last:after:content-['']">{tech}</li>
                ))}
              </ul>
            </dd>
          </div>
          {(project.showLink && project.href) || project.github ? (
            <div className="flex flex-wrap gap-[16px] sm:col-span-2 lg:col-span-4">
              {project.showLink && project.href && (
                <a href={project.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-[8px] rounded-full border border-white/60 px-[16px] py-[8px] hover:border-accent">
                  <FaExternalLinkAlt aria-hidden="true" /> {labels.visit}
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-[8px] rounded-full border border-white/60 px-[16px] py-[8px] hover:border-accent">
                  <FaGithub aria-hidden="true" /> {labels.github}
                </a>
              )}
            </div>
          ) : null}
        </dl>

        <div className="w-full">{media}</div>

        {intro && (
          <section>
            <h2 className={sectionTitle}>{introTitle}</h2>
            <p className={`${bodyText} max-w-[900px]`}>{intro}</p>
          </section>
        )}

        <section>
          <h2 className={sectionTitle}>{project.inProgress ? labels.building : labels.whatIDid}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            {project.whatIDid.map((step, i) => (
              <li key={i} className="pt-4 border-t border-line">
                {step.title && <h3 className="font-bold uppercase mb-[6px]">{step.title}</h3>}
                <p className="text-white/85">{step.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {project.gallery?.map((src) => (
          <Image key={src} src={src} alt={alt} width={1440} height={900} sizes="(min-width: 1264px) 1232px, 100vw"
            className="rounded-md w-full h-auto" />
        ))}

        {project.decisions && (
          <section>
            <h2 className={sectionTitle}>{labels.decisions}</h2>
            <p className={`${bodyText} max-w-[900px]`}>{project.decisions}</p>
          </section>
        )}

        {project.features && (
          <section>
            <h2 className={sectionTitle}>{labels.features}</h2>
            <ul className={`${bodyText} list-disc list-inside space-y-1`}>
              {project.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </section>
        )}

        {project.result && (
          <section>
            <h2 className={sectionTitle}>{labels.result}</h2>
            <p className={`${bodyText} max-w-[900px]`}>{project.result}</p>
          </section>
        )}

        {project.why && (
          <section>
            <h2 className={sectionTitle}>{labels.why}</h2>
            <p className={`${bodyText} max-w-[900px]`}>{project.why}</p>
          </section>
        )}

        <Link href={`/${locale}/projects`} className="flex items-center gap-[8px] font-bold uppercase w-fit">
          <FaArrowLeft aria-hidden="true" /> {labels.back}
        </Link>
      </div>
    </main>
  );
}
