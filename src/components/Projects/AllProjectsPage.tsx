'use client';

import { cn } from '@/lib/utils';
import ProjectCard from '@/ui/wrappers/ProjectCard';
import ProjectSmallCard from '@/ui/wrappers/ProjectSmallCard';
import { easeOut, motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import Image from 'next/image';
import { JSX, useRef } from "react";
export type Project = {
  title: string;
  slug: string;
  href?: string;
  description: string;
  overview?: string;
  functionality?: string;
  structure?: string;
  myRole?: string;
  role: string;
  stack: string[];
  imgBlock?: JSX.Element;
  imgSmall?: string;
  imgUrl: string;
  videoUrl?: string;
}
export const projects: { [key: string]: Project }  = {
  oikia: {
    title: 'Oikia Properties',
    slug: 'oikia',
    href: 'https://oikiaproperties.gr/en',
    description: 'Real estate website in Greece and beyond.',
    role: 'Lead Developer',
    stack: ['Next.js', 'Tailwind', 'DatoCMS', 'GraphQL', 'Framer Motion', 'AMO CRM'],
    imgBlock: (
      <video
        src="/projects/oikia.mp4"
        autoPlay
        loop
        muted
        poster="/projects/oikia.png"
        width={800}
        height={600}
        className="rounded-md w-auto h-auto"
      />
    ),
    imgUrl: '/projects/oikia.png',
  },

  blackbookbykristina: {
    title: 'Blackbook by Kristina',
    slug: 'blackbookbykristina',
    href: 'https://blackbookbykristina.com/',
    description: 'Luxury travel & lifestyle concierge service.',
    role: 'Lead Developer',
    stack: ['Next.js', 'Tailwind', 'GraphQL', 'Framer Motion', 'Google reCAPTCHA', 'REST Api',],
    imgUrl: '/projects/blackbookbykristina.png',
    videoUrl: '/projects/blackbookbykristina.mp4',
    overview: `
      <section id="project-overview">
        <p>
          <strong>Blackbook by Kristina</strong> is a high-end personal brand and service
          website built for a creative professional.
          The project focuses on storytelling, lifestyle aesthetics, and strong brand
          positioning rather than a traditional developer-style portfolio.
        </p>
        <br />
        <p>
          The primary goal of the website is to promote Kristina’s curated service
          offering, build trust through visual narrative, and guide users toward clear
          conversion actions.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Fully responsive layout optimized for all devices</li>
          <li>Smooth UI animations and transitions supporting storytelling</li>
          <li>Application submission form with client-side validation</li>
          <li>Contact Us form with validation and Google reCAPTCHA integration</li>
          <li>Secure and user-friendly form handling</li>
          <li>Clear conversion flow from first impression to inquiry</li>
          <li>Brand-focused typography, spacing, and visual hierarchy</li>
          <li>SEO-friendly page structure for a personal brand website</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>End-to-end frontend development.</strong>
          I was responsible for the full implementation of the project, including:
        </p>
        <ul>
          <li>Defining page structure and layout logic</li>
          <li>Implementing responsive UI and animations</li>
          <li>Developing and validating application and contact forms</li>
          <li>Integrating Google reCAPTCHA for spam protection</li>
          <li>Ensuring accessibility, usability, and smooth user experience</li>
          <li>Final frontend polishing and deployment readiness</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2 class="text-center">Pages &amp; Sections</h2>
        <ul>
          <li>
            <strong>Hero Section</strong> — introduces the brand identity,
            core message, and value proposition through impactful visuals and minimal copy.
          </li>
          <li>
            <strong>Services </strong> — presents the core services in an
            editorial layout, emphasizing experience, value, and personal transformation.
          </li>
          <li>
            <strong>About Page</strong> — story-driven section that builds
            credibility and emotional connection with the audience.
          </li>
          <li>
            <strong>Lifestyle &amp; Visual Sections</strong> — image-focused blocks that
            reinforce brand mood, aesthetics, and aspirational positioning.
          </li>
          <li>
            <strong>Application Form</strong> — a dedicated form for submitting service
            requests and structured inquiries.
          </li>
          <li>
            <strong>Contact Us Section</strong> — direct communication block with a
            contact form and clear call to action.
          </li>
        </ul>
      </section>
    `
  },
  

  c13: {
    title: 'c13.agency',
    slug: 'c13',
    href: 'https://c13.agency/',
    description: 'A website combining strong visual identity with technical excellence.',
    role: 'Frontend Developer',
    stack: ['GSAP', 'React', 'Next.js'],
    imgBlock: (
      <Image
        src="/projects/c13.svg"
        alt="c13 agency"
        width={800}
        height={600}
        objectFit="cover"
        className="w-full h-auto absolute bottom-0 opacity-10"
      />
    ),
    imgUrl: '/projects/c13.png',
  },

  proptick: {
    title: 'Proptick',
    slug: 'proptick',
    href: 'https://prop-tick.com',
    description: 'Modern landing page fully responsive across all devices.',
    role: 'UI Developer',
    stack: ['HTML', 'CSS', 'GSAP'],
    imgBlock: (
      <div className="mask-container w-full h-full z-[-1] ">
        <div className="circle-animation w-full h-full" />
      </div>
    ),
    imgUrl: '/projects/prop.png',
    videoUrl: '/projects/proptick.mp4',
    overview: `
      <section id="project-overview">
        <h2>Project Overview</h2>
        <p>
          <strong>Prop-Tick</strong> is a real estate SaaS platform designed for
          property management, offer handling, and agent–client collaboration.
          The platform provides tools for property listings, advanced search,
          and transaction tracking to streamline real estate operations.
        </p>
        <p>
          The English version (<code>/en/</code>) targets international users with
          multilingual support, focusing on transparent offer comparison,
          seller preferences, and dedicated client portals for seamless
          communication between agents, buyers, and sellers.
        </p>
        <p>
          The product is positioned as a professional tool for real estate agents
          and agencies to manage listings, analyze multiple offers, and facilitate
          secure, data-driven transactions.
        </p>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li>
            <strong>Home / Landing</strong> — hero section, key value proposition,
            platform overview, and primary call-to-actions.
          </li>
          <li>
            <strong>Company</strong> — information about the company, mission,
            vision, and background of the platform.
          </li>
          <li>
            <strong>Know How</strong> — educational and explanatory content describing
            platform logic, workflows, and best practices.
          </li>
          <li>
            <strong>Pricing</strong> — subscription plans, feature comparison,
            and billing information.
          </li>
          <li>
            <strong>Affiliates Program</strong> — partner and referral program details,
            commission structure, and onboarding information.
          </li>
          <li>
            <strong>Academy</strong> — learning section with educational materials,
            guides, and training content for users.
          </li>
          <li>
            <strong>Support</strong> — help and support resources, contact options,
            and user assistance flows.
          </li>
          <li>
            <strong>Legal Pages</strong> — Refund Policy, Disclaimer, Privacy Policy,
            and Terms &amp; Conditions.
          </li>
        </ul>
        <br />
        <p>
          Navigation includes a top menu with structured access to all main sections
          and a footer containing legal documentation and compliance-related links.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Property search and listing management with filtering and maps</li>
          <li>Offer management boards for comparing multiple offers in real time</li>
          <li>Seller preference ranking and decision support tools</li>
          <li>Dedicated client portals for buyers and sellers</li>
          <li>Agent dashboards with analytics and performance insights</li>
          <li>Document generation and secure data transmission</li>
          <li>Authentication and role-based access control</li>
          <li>Multilingual support including English (<code>/en/</code>)</li>
          <li>Fully responsive UI for desktop and mobile usage</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Full-cycle development.</strong>
          I was responsible for the complete development lifecycle of the platform.
        </p>
        <ul>
          <li>Planning system architecture and feature scope</li>
          <li>Frontend and backend development</li>
          <li>Database design and API integrations</li>
          <li>Implementation of secure authentication and real-time features</li>
          <li>Performance optimization for high-traffic property listings</li>
          <li>Scalability planning for multilingual support</li>
          <li>Testing, deployment, and ongoing maintenance</li>
        </ul>
      </section>
    `
  },

  mysiteboost: {
    title: 'MySiteBoost',
    slug: 'mysiteboost',
    description: 'Real-time website monitoring and performance tracking platform.',
    role: 'Frontend Developer',
    stack: [
      'Next.js',
      'Firebase',
      'Redux',
      'REST API',
      'Chakra UI',
    ],
    imgSmall: '/projects/mysiteboost.svg',
    imgUrl: '/projects/mysiteboost.png',
  },

  pinta: {
    title: 'Pinta',
    slug: 'pinta',
    description: 'Markdown blog with dark theme and tag system.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'MDX', 'Tailwind'],
    imgSmall: '/projects/pinta.png',
    imgUrl: '/projects/pintaintro.png',
  },

  bleakers: {
    title: 'Bleakers',
    slug: 'bleakers',
    href: 'https://bleakers.co/',
    description: 'Content-focused blog built with MDX and dark theme.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'MDX', 'Tailwind'],
    imgSmall: '/projects/bleakers.svg',
    imgUrl: '/projects/bleakers.png',
  },

  notifix: {
    title: 'Notifix',
    slug: 'notifix',
    href: '',
    description: 'Minimalist markdown blog with tag support.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'MDX', 'Tailwind'],
    imgSmall: '/projects/notifix.png',
    imgUrl: '/projects/notifixintro.png',
  },

  opps: {
    title: 'Opps',
    slug: 'opps',
    href: 'https://app.opps.ai',
    description: 'Data search and analytics platform for marketing and business development.',
    role: 'Frontend Developer',
    stack: ['React', 'Recharts', 'Tailwind'],
    imgSmall: '/projects/opps.svg',
    imgUrl: '/projects/opps.png',
  },

  supertrade: {
    title: 'Supertrade',
    slug: 'supertrade',
    description: 'Landing page for a financial platform with multilingual support, animations, and CMS integration.',
    role: 'Main Developer',
    stack: ['Next.js', 'SendPulse', 'CSS Animations'],
    imgBlock: (
      <>
        <div className="custom-pulse">
          <Image
            src="/projects/super.png"
            alt="supertrade"
            width={490}
            height={241}
            className="w-auto h-auto mx-auto"
          />
        </div>
        <div className="custom-pulse">
          <Image
            src="/projects/trade.png"
            alt="supertrade platform"
            width={490}
            height={241}
            className="w-auto h-auto mx-auto"
          />
        </div>
      </>
    ),
    imgUrl: '/projects/supertrade.png',
  },
};


const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: easeOut,  
    }
  }),
};

export default function AllProjectsPage() {
  // Реф для всей сетки
  const containerRef = useRef(null);
  // Проверяем, в видимости ли контейнер (появился в середине экрана)
  const isInView = useInView(containerRef, { margin: '-50% 0px -100% 0px', once: true });
  const h2Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: h2Ref,
    offset: ['start 10%', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div
      className="text-white px-[16px]  z-[4] relative flex flex-col justify-center items-center"
      style={{ background: '' }}
      ref={containerRef}
    >
      <motion.h1
        ref={h2Ref}
        style={{ opacity }}
        className="mb-[40px] text-[12vw] font-bold mx-auto text-center uppercase sticky top-0 z-[-1] "
      >
        My projects
      </motion.h1>      
      <div className="grid grid-cols-7 gap-[20px] auto-rows-[minmax(200px,_auto)] max-w-[1232px] mx-auto mt-[120px]">
        {/* Ряд 1 */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="col-span-7 lg:col-span-4 row-start-1 bg-[#001f41] rounded-xl p-4"
        >
          <ProjectCard {...projects.oikia} />
        </motion.div>

        <div className="col-span-7 md:col-span-2 lg:col-span-1 lg:row-start-1 flex md:flex-col gap-[20px]">
          <motion.div
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#262D3C] rounded-xl p-4"
          >
            <ProjectCard {...projects.c13} />
          </motion.div>
          <motion.div
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#182C40] rounded-xl p-4"
          >
           <ProjectSmallCard {...projects.mysiteboost} />
          </motion.div>
        </div>

        <motion.div
          custom={3}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="col-span-7 md:col-span-5 lg:col-span-2 lg:row-start-1 bg-[#001f41] rounded-xl p-4"
        >
          <ProjectCard {...projects.proptick} />
        </motion.div>

        {/* Ряд 2 */}
        <motion.div
          custom={4}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={cn("relative col-span-7 md:col-span-4 lg:col-span-4 lg:row-start-2 bg-[#262D3C] p-4 rounded-xl") }
        >
          <Image src="/projects/blackbookbykristina.png" alt="blackbookbykristina" fill className='absolute w-full h-full object-cover brightness-50 rounded-xl' />
          <ProjectCard {...projects.blackbookbykristina} />
        </motion.div>

        <motion.div
          custom={5}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="col-span-7 md:col-span-3 lg:col-start-5 col-span-3 lg:row-start-2 lg:row-end-4 bg-[#262D3C] rounded-xl p-4"
        >
          <ProjectCard {...projects.supertrade} />
        </motion.div>

        {/* Ряд 3 */}

        <div className="col-span-7 lg:col-span-4 lg:row-start-3 grid grid-cols-2 md:grid-cols-4 gap-[20px]">
          <motion.div
            custom={6}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#262D3C] rounded-xl p-4"
          >
            <ProjectSmallCard {...projects.pinta} />
          </motion.div>
          <motion.div
            custom={7}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#182C40] rounded-xl p-4"
          >
            <ProjectSmallCard {...projects.bleakers} />
          </motion.div>
          <motion.div
            custom={8}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#262D3C] rounded-xl p-4"
          >
            <ProjectSmallCard {...projects.opps} />
          </motion.div>
          <motion.div
            custom={9}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#182C40] rounded-xl p-4"
          >
            <ProjectSmallCard {...projects.notifix} />
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}



