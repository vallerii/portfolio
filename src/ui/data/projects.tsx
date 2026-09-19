import Image from "next/image";
import { JSX } from "react";
export type ProjectGroup = 'client' | 'product' | 'own';

/** Media and technical facts. Localized texts live in ./projectContent.ts */
export type ProjectMedia = {
  title: string;
  slug: string;
  group: ProjectGroup;
  /** Show the external "Visit site" link on the case page */
  showLink: boolean;
  href?: string;
  github?: string;
  year?: string;
  stack: string[];
  imgBlock?: JSX.Element; // Optional custom image block for projects with unique visual requirements
  imgSmall?: string;
  imgUrl: string;
  videoUrl?: string;
  /** Extra screenshots shown on the case page */
  gallery?: string[];
};

export const projects = {
  oikia: {
    title: 'Oikia Properties',
    slug: 'oikia',
    group: 'client',
    showLink: true,
    href: 'https://oikiaproperties.gr/en',
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
    group: 'client',
    showLink: true,
    href: 'https://blackbookbykristina.com/',
    stack: ['Next.js', 'Tailwind', 'GraphQL', 'Framer Motion', 'Google reCAPTCHA', 'REST Api'],
    imgUrl: '/projects/blackbookbykristina.png',
    videoUrl: '/projects/blackbookbykristina.mp4',
  },

  c13: {
    title: 'c13.agency',
    slug: 'c13',
    group: 'client',
    showLink: false,
    href: 'https://c13.agency/',
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
    group: 'client',
    showLink: false,
    href: 'https://prop-tick.com',
    stack: ['HTML', 'CSS', 'GSAP'],
    imgBlock: (
      <div className="mask-container w-full h-full z-[1] ">
        <div className="circle-animation w-full h-full" />
      </div>
    ),
    imgUrl: '/projects/prop.png',
    videoUrl: '/projects/proptick.mp4',
  },

  mysiteboost: {
    title: 'MySiteBoost',
    slug: 'mysiteboost',
    group: 'client',
    showLink: false,
    href: 'https://mysiteboost.com/en',
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
    group: 'client',
    showLink: false,
    href: 'https://pinta.com.ua/en/',
    stack: ['Next.js', 'MDX', 'Tailwind'],
    imgSmall: '/projects/pinta.png',
    imgUrl: '/projects/pintaintro.png',
  },

  opps: {
    title: 'Opps',
    slug: 'opps',
    group: 'client',
    showLink: false,
    href: 'https://app.opps.ai',
    stack: ['React', 'Recharts', 'Tailwind'],
    imgSmall: '/projects/opps.svg',
    imgUrl: '/projects/opps.png',
  },

  indigo: {
    title: 'Indigo',
    slug: 'indigo',
    group: 'client',
    showLink: false,
    href: 'https://indigo-new-landing.webflow.io/',
    stack: ['Webflow', 'CSS Animations', 'Interactions'],
    imgUrl: '/projects/indigo.png',
  },

  addup: {
    title: 'AddUp',
    slug: 'addup',
    group: 'client',
    showLink: false,
    href: 'https://addup.com/en/',
    stack: ['Next.js', 'Tailwind', 'REST API'],
    imgUrl: '/projects/addup.png',
    videoUrl: '/projects/addup.mp4',
  },

  feecutex: {
    title: 'Feecutex',
    slug: 'feecutex',
    group: 'client',
    showLink: false,
    href: 'https://feecutex.io/',
    stack: ['Next.js', 'Strapi', 'Tailwind', 'REST API'],
    imgUrl: '/projects/feecutex.png',
    imgSmall: '/projects/feecutex-logo.png',
  },

  flare: {
    title: 'Flare Ventures',
    slug: 'flare',
    group: 'client',
    showLink: false,
    href: 'https://flare.ventures/en',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    imgUrl: '/projects/flare.png',
    imgBlock: (
      <video
        src="/projects/flare.mp4"
        autoPlay
        loop
        muted
        poster="/projects/flare.png"
        width={800}
        height={600}
        className="rounded-md w-auto h-auto"
      />
    ),
    videoUrl: '/projects/flare.mp4',
  },

  slava: {
    title: 'Slava.gg',
    slug: 'slava',
    group: 'client',
    showLink: false,
    href: 'https://slava.gg/en',
    stack: ['Next.js', 'Tailwind', 'REST API'],
    imgUrl: '/projects/slava.png',
    imgBlock: (
      <video
        src="/projects/slava.mp4"
        autoPlay
        loop
        muted
        poster="/projects/slava.png"
        width={800}
        height={600}
        className="rounded-md w-auto h-auto"
      />
    ),
  },

  iqpoint: {
    title: 'IQPoint',
    slug: 'iqpoint',
    group: 'client',
    showLink: false,
    href: 'https://iqpoint.es/en',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    imgUrl: '/projects/iqpoint.png',
    videoUrl: '/projects/iqpoint.mp4',
  },

  iqresidence: {
    title: 'IQResidence',
    slug: 'iqresidence',
    group: 'client',
    showLink: false,
    href: 'https://iqresidence.com/en',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'REST API'],
    imgUrl: '/projects/iqresidence.png',
    imgSmall: '/projects/iqresidence-logo.png',
  },

  pershiledy: {
    title: 'Pershiledy',
    slug: 'pershiledy',
    group: 'client',
    showLink: false,
    href: 'https://shark-app-9au7o.ondigitalocean.app/',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    imgUrl: '/projects/pershiledy.png',
    imgSmall: '/projects/pershiledy-logo.png',
  },

  // Personal / practice projects
  earthlayers: {
    title: 'Layers of the Earth',
    slug: 'earthlayers',
    group: 'own',
    showLink: true,
    href: 'https://earth-layers.vercel.app/',
    stack: ['Next.js', 'React', 'Canvas API', 'SVG', 'Scroll Animation'],
    imgBlock: (
      <video
        src="/projects/earthlayers.mp4"
        autoPlay
        loop
        muted
        poster="/projects/earthlayers.png"
        width={800}
        height={600}
        className="rounded-md w-auto h-auto"
      />
    ),
    imgUrl: '/projects/earthlayers.png',
  },
  // From idea to product — client projects led end-to-end (no public links, screenshots only)
  movingo: {
    title: 'Movingo',
    slug: 'movingo',
    group: 'product',
    showLink: false,
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'DatoCMS', 'Framer Motion'],
    imgBlock: (
      <Image src="/projects/movingo.webp" alt="Movingo website" width={1440} height={900}
        className="rounded-md w-full h-auto" />
    ),
    imgUrl: '/projects/movingo.webp',
    gallery: ['/projects/movingo-2.webp'],
  },
  vpdigital: {
    title: 'VP Digital',
    slug: 'vpdigital',
    group: 'product',
    showLink: false,
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    imgBlock: (
      <Image src="/projects/vpdigital.webp" alt="VP Digital website" width={1440} height={900}
        className="rounded-md w-full h-auto" />
    ),
    imgUrl: '/projects/vpdigital.webp',
    gallery: ['/projects/vpdigital-2.webp'],
  },
  rag: {
    title: 'RAG',
    slug: 'rag',
    group: 'product',
    showLink: false,
    year: '2026',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind'],
    imgBlock: (
      <Image src="/projects/rag.webp" alt="RAG website" width={1440} height={900}
        className="rounded-md w-full h-auto" />
    ),
    imgUrl: '/projects/rag.webp',
    gallery: ['/projects/rag-2.webp'],
  },

  postbridge: {
    title: 'post-bridge',
    slug: 'postbridge',
    group: 'own',
    showLink: false,
    github: 'https://github.com/vallerii/post-bridge',
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    imgUrl: '/projects/postbridge.webp',
  },
} satisfies Record<string, ProjectMedia>;

export type ProjectSlug = keyof typeof projects;
