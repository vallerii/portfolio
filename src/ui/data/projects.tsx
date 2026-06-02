import Image from "next/image";
import { JSX } from "react";
export type Project = {
  title: string;
  slug: string;
  isMyProject?: boolean;
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
    overview: `
      <section id="project-overview">
        <p>
          <strong>Oikia Properties</strong> is a full-featured real estate website for
          a Greek property agency, covering listings across Greece and international
          markets. The platform is designed to connect buyers, renters, and sellers
          through a polished, content-rich experience.
        </p>
        <br />
        <p>
          The site integrates a headless CMS for flexible content management and
          a CRM for lead tracking, combining editorial control with operational
          efficiency in a single cohesive product.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Property listings with advanced filtering by location, type, and price</li>
          <li>Multilingual support for Greek and English audiences</li>
          <li>Content managed via DatoCMS with GraphQL data fetching</li>
          <li>CRM integration via AMO CRM for lead and inquiry management</li>
          <li>Smooth page transitions and scroll animations with Framer Motion</li>
          <li>Fully responsive layout optimized for all screen sizes</li>
          <li>SEO-optimized structure for property and location pages</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Lead Developer — end-to-end implementation.</strong>
          I handled the full development lifecycle of the project:
        </p>
        <ul>
          <li>Architecture decisions and tech stack setup</li>
          <li>CMS schema design and GraphQL query structure</li>
          <li>Building all UI components and page layouts</li>
          <li>Integrating AMO CRM for lead collection</li>
          <li>Animation system with Framer Motion</li>
          <li>Performance optimization and deployment</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li>
            <strong>Home</strong> — hero banner, featured properties, brand intro,
            and key conversion CTAs.
          </li>
          <li>
            <strong>Property Listings</strong> — filterable catalog of available
            properties with map and grid views.
          </li>
          <li>
            <strong>Property Detail</strong> — full description, photo gallery,
            location map, and inquiry form.
          </li>
          <li>
            <strong>About</strong> — agency story, team presentation, and values.
          </li>
          <li>
            <strong>Contact</strong> — contact form with CRM integration and
            office location details.
          </li>
        </ul>
      </section>
    `,
  },

  blackbookbykristina: {
    title: 'Blackbook by Kristina',
    slug: 'blackbookbykristina',
    href: 'https://blackbookbykristina.com/',
    description: 'Luxury travel & lifestyle concierge service.',
    role: 'Lead Developer',
    stack: ['Next.js', 'Tailwind', 'GraphQL', 'Framer Motion', 'Google reCAPTCHA', 'REST Api'],
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
          The primary goal of the website is to promote Kristina's curated service
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
            <strong>Services</strong> — presents the core services in an
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
    `,
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
    overview: `
      <section id="project-overview">
        <p>
          <strong>c13.agency</strong> is a creative agency website that pairs a
          distinctive visual identity with technically demanding frontend work.
          The site serves as the agency's primary showcase and business card,
          making animation quality and performance central requirements.
        </p>
        <br />
        <p>
          Built with GSAP for precise animation control, the project demanded
          careful attention to timing, easing, and scroll-driven interaction design
          to match the agency's high creative standards.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>GSAP-powered scroll and entrance animations throughout</li>
          <li>Custom cursor and hover interaction effects</li>
          <li>Smooth page transitions between sections</li>
          <li>Fully responsive across all viewports</li>
          <li>Performance-optimized animation rendering</li>
          <li>Portfolio / work showcase with visual storytelling</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — animation and UI implementation.</strong>
        </p>
        <ul>
          <li>Implementing complex GSAP animation sequences</li>
          <li>Building React components for all page sections</li>
          <li>Ensuring smooth performance across browsers and devices</li>
          <li>Collaborating on interaction design decisions</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Home / Hero</strong> — animated brand intro with strong typography.</li>
          <li><strong>Work / Portfolio</strong> — project showcase with visual transitions.</li>
          <li><strong>About</strong> — agency philosophy and team presentation.</li>
          <li><strong>Services</strong> — capabilities and areas of expertise.</li>
          <li><strong>Contact</strong> — inquiry form and connection details.</li>
        </ul>
      </section>
    `,
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
    `,
  },

  mysiteboost: {
    title: 'MySiteBoost',
    slug: 'mysiteboost',
    href: 'https://mysiteboost.com/en',
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
    overview: `
      <section id="project-overview">
        <p>
          <strong>MySiteBoost</strong> is a real-time monitoring platform for websites,
          designed to help businesses prevent service interruptions and maintain high
          performance. Tailored for eCommerce, SaaS, and content-driven platforms,
          the solution enables proactive control over website stability — a critical
          factor for customer retention and revenue protection.
        </p>
        <br />
        <p>
          Built with scalability in mind, MySiteBoost seamlessly integrates into any
          business infrastructure and ensures that technical issues are detected early,
          allowing teams to react before users are affected.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Real-time uptime monitoring with instant downtime alerts</li>
          <li>Load speed and performance tracking with historical trend charts</li>
          <li>SSL certificate validity monitoring and expiry notifications</li>
          <li>SEO analysis dashboard with errors, warnings, and indexing data</li>
          <li>Email notifications via SendPulse and Telegram alerts via Telegraf</li>
          <li>Mobile application for remote monitoring access</li>
          <li>Comprehensive performance reports for long-term optimization</li>
          <li>Authentication and role-based account management</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — team collaboration.</strong>
          Worked as part of a cross-functional team including backend, QA, design,
          and a project manager.
        </p>
        <ul>
          <li>Building UI components with Next.js and Chakra UI</li>
          <li>Integrating Firebase Firestore for real-time data display</li>
          <li>Connecting REST API endpoints to frontend views</li>
          <li>Managing application state with Redux</li>
          <li>Ensuring responsive behavior across desktop and mobile</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Dashboard</strong> — overview of all monitored sites with status indicators.</li>
          <li><strong>Uptime Monitor</strong> — real-time and historical uptime data per site.</li>
          <li><strong>Performance Reports</strong> — load speed trends and optimization insights.</li>
          <li><strong>SEO Analysis</strong> — errors, warnings, and indexing status per page.</li>
          <li><strong>SSL Monitor</strong> — certificate status and expiry tracking.</li>
          <li><strong>Alerts &amp; Notifications</strong> — configuration of email and Telegram alerts.</li>
          <li><strong>Account / Settings</strong> — user management and billing.</li>
        </ul>
      </section>
    `,
  },

  pinta: {
    title: 'Pinta',
    slug: 'pinta',
    href: 'https://pinta.com.ua/en/',
    description: 'Landing page for a software development company.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'MDX', 'Tailwind'],
    imgSmall: '/projects/pinta.png',
    imgUrl: '/projects/pintaintro.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>Pinta</strong> is the corporate website and landing page for a
          Ukrainian software development company offering web, mobile, AI, and
          big data services. The site acts as the company's primary marketing
          and business development channel.
        </p>
        <br />
        <p>
          Developed as part of a team, the project required clean, scalable
          component architecture, fast load performance, and a clear content
          structure to support SEO and lead generation goals.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Multilingual support (English, Ukrainian, Russian)</li>
          <li>Services and industry-focused landing pages</li>
          <li>Case studies section with detailed project breakdowns</li>
          <li>Blog powered by MDX for flexible content authoring</li>
          <li>Contact and book-a-call conversion flows</li>
          <li>Fully responsive layout across all devices</li>
          <li>SEO-optimized page structure throughout</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — team collaboration.</strong>
        </p>
        <ul>
          <li>Building UI components and page layouts in Next.js</li>
          <li>Implementing MDX-based content pages</li>
          <li>Styling with Tailwind CSS</li>
          <li>Ensuring responsive behavior and cross-browser compatibility</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Home</strong> — hero, services overview, industries, and CTAs.</li>
          <li><strong>Services</strong> — individual pages per service (web, mobile, AI, etc.).</li>
          <li><strong>Industries</strong> — vertical-specific landing pages.</li>
          <li><strong>Cases</strong> — portfolio of completed client projects.</li>
          <li><strong>Blog</strong> — MDX-powered articles and insights.</li>
          <li><strong>Contact / Book a Call</strong> — lead capture and scheduling.</li>
        </ul>
      </section>
    `,
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
    overview: `
      <section id="project-overview">
        <p>
          <strong>Bleakers</strong> is a content-focused blog platform with a dark
          aesthetic, built for editorial publishing and long-form reading. The project
          was developed as part of a team with an emphasis on reading experience,
          typographic quality, and content flexibility.
        </p>
        <br />
        <p>
          MDX powers the content layer, enabling rich article authoring with
          embedded components, while Tailwind ensures consistent styling across
          all post types and layouts.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>MDX-powered article publishing with custom component support</li>
          <li>Dark theme with refined typography and reading-optimized layout</li>
          <li>Tag and category system for content organization</li>
          <li>Fully responsive across desktop and mobile</li>
          <li>Fast static page generation via Next.js</li>
          <li>SEO-friendly article pages with meta tags and structured data</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — team collaboration.</strong>
        </p>
        <ul>
          <li>Building blog layout components and article page templates</li>
          <li>Implementing MDX rendering pipeline</li>
          <li>Dark theme styling with Tailwind</li>
          <li>Tag system and content navigation UI</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Home / Feed</strong> — latest articles with preview cards.</li>
          <li><strong>Article Page</strong> — full post with MDX content rendering.</li>
          <li><strong>Tag Pages</strong> — filtered article lists per topic.</li>
          <li><strong>About</strong> — publication identity and mission.</li>
        </ul>
      </section>
    `,
  },

  notifix: {
    title: 'Notifix',
    slug: 'notifix',
    href: 'https://notyfix.com/',
    description: 'CI/CD automation platform: landing page and authenticated web application.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'Chakra UI', 'Firebase', 'HTML', 'CSS'],
    imgSmall: '/projects/notifix.png',
    imgUrl: '/projects/notifixintro.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>Notifix</strong> is a CI/CD automation platform developed to address
          persistent DevOps bottlenecks. Instead of relying on rigid tools or fragmented
          workflows, the system adapts to real engineering processes — across development,
          QA, and infrastructure.
        </p>
        <br />
        <p>
          The project consists of a public marketing landing page and a full
          authenticated web application for managing deployment pipelines, integrations,
          and team workflows. With a focus on deployment fluidity and fast onboarding,
          Notifix minimizes friction between teams and shortens the time from code to
          production.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>CI/CD pipeline configuration and management interface</li>
          <li>Integrations with GitLab, GitHub, BitBucket, Telegram, SSH, and HTTP</li>
          <li>Multi-threaded task execution for concurrent deployments</li>
          <li>Team collaboration tools with user profiles and role management</li>
          <li>Firebase-based authentication and real-time data sync</li>
          <li>Reduces manual DevOps workload by up to 40%</li>
          <li>Pipeline setup in under five minutes</li>
          <li>Up to 58 minutes saved per engineer per day</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — team collaboration.</strong>
          Worked alongside backend developers, QA, design, and a project manager.
        </p>
        <ul>
          <li>Building application UI components with Next.js and Chakra UI</li>
          <li>Implementing Firebase authentication flows</li>
          <li>Connecting frontend to backend APIs and real-time data</li>
          <li>Building the public marketing landing page</li>
          <li>Ensuring responsive layout across all screen sizes</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Landing Page</strong> — marketing site with features, benefits, and sign-up CTA.</li>
          <li><strong>Dashboard</strong> — pipeline overview and status for all active projects.</li>
          <li><strong>Pipeline Editor</strong> — configure triggers, branches, actions, and SSH commands.</li>
          <li><strong>Integrations</strong> — connect GitLab, GitHub, Telegram, BitBucket, and more.</li>
          <li><strong>Team Management</strong> — user profiles, roles, and collaboration settings.</li>
          <li><strong>Settings / Account</strong> — authentication and platform preferences.</li>
        </ul>
      </section>
    `,
  },

  opps: {
    title: 'Opps',
    slug: 'opps',
    href: 'https://app.opps.ai',
    description: 'AI-powered data search and analytics platform for marketing and business development.',
    role: 'Frontend Developer',
    stack: ['React', 'Recharts', 'Tailwind'],
    imgSmall: '/projects/opps.svg',
    imgUrl: '/projects/opps.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>Opps</strong> is an advanced platform that empowers users with effective
          tools for data search and utilization in marketing and business development.
          Powered by AI (OpenAI), the platform enables users to find relevant contact
          details, build personalized advertising audiences, and optimize campaigns on
          LinkedIn and Twitter.
        </p>
        <br />
        <p>
          Opps provides access to three core data types: investor information, data on
          rapidly growing companies, and curated audience analytics. It is tailored for
          businesses aiming to enhance their marketing strategies and improve conversion
          rates through high-quality, targeted data.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>AI-powered contact discovery and audience building (OpenAI integration)</li>
          <li>Investor data and fast-growing company insights</li>
          <li>Campaign targeting for LinkedIn and Twitter</li>
          <li>Real-time analytics dashboard with data visualizations (Recharts)</li>
          <li>Weekly curated email lists for startup outreach</li>
          <li>SmartLead and Adapt API integrations for contact list accuracy</li>
          <li>Stripe-powered subscription and billing</li>
          <li>Role-based user authentication</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — team collaboration.</strong>
          Worked alongside backend developers, QA, and a project manager.
        </p>
        <ul>
          <li>Building the React application UI and component library</li>
          <li>Implementing data visualizations with Recharts</li>
          <li>Connecting frontend to REST API endpoints</li>
          <li>Styling with Tailwind CSS</li>
          <li>Building the marketplace and dashboard views</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Dashboard</strong> — overview of data activity and recent findings.</li>
          <li><strong>Marketplace</strong> — browse and access curated data sets and investment opportunities.</li>
          <li><strong>Audience Builder</strong> — create and export targeted ad audiences.</li>
          <li><strong>Analytics</strong> — campaign performance charts and data insights.</li>
          <li><strong>Account / Billing</strong> — subscription management via Stripe.</li>
        </ul>
      </section>
    `,
  },

  supertrade: {
    title: 'Supertrade',
    slug: 'supertrade',
    href: 'https://supertrade.com/',
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
    overview: `
      <section id="project-overview">
        <p>
          <strong>Supertrade</strong> is a marketing landing page for a financial
          trading platform. The project required multilingual support, smooth CSS
          animations, and CMS integration for content management, all delivered
          as part of a team effort.
        </p>
        <br />
        <p>
          The site positions the product to an international audience with clear
          value propositions, lead capture flows, and visual animations that
          communicate platform credibility and professionalism.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Multilingual support for international audiences</li>
          <li>CSS animations and transition effects throughout</li>
          <li>SendPulse integration for email and notification campaigns</li>
          <li>CMS-driven content for easy updates without code changes</li>
          <li>Lead capture and conversion-optimized layout</li>
          <li>Fully responsive across all devices</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Main Developer — team collaboration.</strong>
        </p>
        <ul>
          <li>Leading frontend development and architecture decisions</li>
          <li>Implementing multilingual routing and content switching</li>
          <li>Building animation sequences in CSS</li>
          <li>Integrating SendPulse for marketing automation</li>
          <li>Connecting CMS content to page templates</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Hero</strong> — brand intro with animated visual and core value proposition.</li>
          <li><strong>Features</strong> — platform capabilities and benefits.</li>
          <li><strong>How It Works</strong> — step-by-step platform walkthrough.</li>
          <li><strong>Pricing / Plans</strong> — subscription tiers and feature comparison.</li>
          <li><strong>CTA / Sign Up</strong> — lead capture with email form and SendPulse connection.</li>
          <li><strong>Footer</strong> — legal links and multilingual navigation.</li>
        </ul>
      </section>
    `,
  },

  indigo: {
    title: 'Indigo',
    slug: 'indigo',
    href: 'https://indigo-new-landing.webflow.io/',
    description: 'Brand landing page built from scratch in Webflow.',
    role: 'Webflow Developer',
    stack: ['Webflow', 'CSS Animations', 'Interactions'],
    imgUrl: '/projects/indigo.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>Indigo</strong> is a brand landing page developed entirely in
          Webflow — from initial setup to final publish. The project focuses on
          clean visual design, smooth interactions, and a strong first impression
          for the brand.
        </p>
        <br />
        <p>
          Built without any external frameworks, the site leverages Webflow's
          native interaction engine for all animations and transitions,
          resulting in a fast and visually polished experience.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Fully built and published in Webflow from scratch</li>
          <li>Custom page interactions and scroll-triggered animations</li>
          <li>Responsive layout across desktop, tablet, and mobile</li>
          <li>Optimized typography and visual hierarchy for brand positioning</li>
          <li>Contact or inquiry section with native Webflow form handling</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Full Webflow development from zero.</strong>
          I was responsible for the entire project:
        </p>
        <ul>
          <li>Setting up the Webflow project structure and style guide</li>
          <li>Designing and building all sections and components</li>
          <li>Implementing interactions and animation sequences</li>
          <li>Ensuring cross-device responsiveness</li>
          <li>Publishing and final delivery</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Hero</strong> — brand statement with animated entrance.</li>
          <li><strong>About / Value Proposition</strong> — brand story and key differentiators.</li>
          <li><strong>Services / Features</strong> — core offering laid out in a visual grid.</li>
          <li><strong>CTA Section</strong> — conversion block with contact or sign-up prompt.</li>
          <li><strong>Footer</strong> — links, socials, and legal information.</li>
        </ul>
      </section>
    `,
  },

  adsee: {
    title: 'Adsee',
    slug: 'adsee',
    description: 'Recruitment automation platform for self-managed advertising campaigns.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'Redux', 'HTML', 'CSS', 'OpenAI API', 'VistaCreate'],
    imgUrl: '/projects/adsee.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>Adsee</strong> is a recruitment marketing platform designed to give
          in-house talent acquisition teams full control over passive candidate sourcing
          through automated advertising. Built to eliminate reliance on external marketers
          or designers, the platform allows recruiters to independently launch targeted
          job campaigns across Google and social media in minutes.
        </p>
        <br />
        <p>
          The system includes a built-in targeting algorithm that analyzes job titles
          and descriptions to automatically optimize ad reach, along with AI-powered
          content suggestions via OpenAI and creative customization through VistaCreate.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Self-service job ad creation without marketing or design skills</li>
          <li>AI-powered targeting algorithm based on job title and description analysis</li>
          <li>OpenAI-generated ad copy for faster content production</li>
          <li>VistaCreate integration for template-based visual ad customization</li>
          <li>Google Ads and social media API integrations for campaign publishing</li>
          <li>Real-time analytics dashboard for campaign performance tracking</li>
          <li>Role-based access for HR teams and campaign managers</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — team collaboration.</strong>
          Part of a team including UI/UX designer, backend developer, QA, PM, and marketer.
        </p>
        <ul>
          <li>Building the application interface with Next.js and Redux</li>
          <li>Implementing the campaign creation and management UI</li>
          <li>Connecting to OpenAI and VistaCreate APIs from the frontend</li>
          <li>Building the analytics dashboard with chart components</li>
          <li>Ensuring responsive and accessible UI throughout</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Dashboard</strong> — overview of active hiring campaigns and performance metrics.</li>
          <li><strong>Create Campaign</strong> — job vacancy input form with AI targeting suggestions.</li>
          <li><strong>Creative Editor</strong> — ad visual customization using VistaCreate templates.</li>
          <li><strong>Analytics</strong> — real-time campaign statistics and performance insights.</li>
          <li><strong>Candidate Search</strong> — browsing and filtering potential candidate profiles.</li>
          <li><strong>Account / Settings</strong> — team management and billing.</li>
        </ul>
      </section>
    `,
  },

  addup: {
    title: 'AddUp',
    slug: 'addup',
    href: 'https://addup.com/en/',
    description: 'Platform website with multilingual support and modern UI.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'Tailwind', 'REST API'],
    imgUrl: '/projects/addup.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>AddUp</strong> is a platform website developed as part of a team,
          featuring multilingual support and a clean, modern interface. The project
          required careful attention to internationalization, responsive layout, and
          smooth integration with backend APIs.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Multilingual content and routing (English and other locales)</li>
          <li>REST API integration for dynamic content</li>
          <li>Fully responsive layout across all devices</li>
          <li>SEO-optimized page structure</li>
          <li>Smooth UI interactions and transitions</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — team collaboration.</strong>
        </p>
        <ul>
          <li>Building UI components and page layouts</li>
          <li>Implementing multilingual routing</li>
          <li>Connecting REST API to frontend views</li>
          <li>Styling with Tailwind CSS</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Home</strong> — hero, feature highlights, and primary CTAs.</li>
          <li><strong>About / Platform</strong> — product explanation and value proposition.</li>
          <li><strong>Features</strong> — detailed platform capabilities.</li>
          <li><strong>Contact</strong> — inquiry form and support details.</li>
        </ul>
      </section>
    `,
  },

  shop2mob: {
    title: 'Shop2Mob',
    slug: 'shop2mob',
    href: 'https://getshop2mob.com/uk',
    description: 'Marketing landing page and authenticated web application for a mobile commerce platform.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'Tailwind', 'REST API'],
    imgUrl: '/projects/shop2mob.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>Shop2Mob</strong> is a mobile commerce platform delivered in two parts:
          a public-facing marketing landing page at <code>getshop2mob.com</code> and a
          full authenticated web application at <code>app.getshop2mob.com</code>.
        </p>
        <br />
        <p>
          The landing page is localized for the Ukrainian market and promotes the
          platform's core value proposition, while the app provides merchants with
          tools to manage their mobile commerce operations.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Public landing page with localization for the Ukrainian market</li>
          <li>Authenticated web application for merchant management</li>
          <li>REST API integration for real-time data across the app</li>
          <li>Mobile-first responsive design throughout</li>
          <li>User authentication and account management</li>
          <li>Conversion-focused landing page with clear CTAs</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — team collaboration.</strong>
        </p>
        <ul>
          <li>Building both the landing page and app UI</li>
          <li>Implementing authentication flows</li>
          <li>Connecting REST API to application views</li>
          <li>Localization and responsive layout work</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Landing (getshop2mob.com/uk)</strong> — hero, features, pricing, and sign-up CTA.</li>
          <li><strong>App Dashboard (app.getshop2mob.com)</strong> — merchant control panel and analytics.</li>
          <li><strong>Product Management</strong> — add, edit, and manage product catalog.</li>
          <li><strong>Orders</strong> — order tracking and management interface.</li>
          <li><strong>Settings / Account</strong> — store configuration and user preferences.</li>
        </ul>
      </section>
    `,
  },

  derma: {
    title: 'Derma',
    slug: 'derma',
    description: 'Custom building inspection reporting platform for architectural and property assessment firms.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'HTML', 'CSS', 'D3.js'],
    imgUrl: '/projects/derma.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>Derma</strong> is a custom inspection reporting platform designed
          to address challenges in architectural and property assessment workflows.
          Built for firms managing structural inspections, it enables quick generation
          of high-quality PDF reports with photo annotations, structured data input,
          and customizable evaluation logic.
        </p>
        <br />
        <p>
          Developed for a U.S.-based company specializing in residential and commercial
          property assessments, the platform replaced slow, manual reporting tools and
          reduced reporting time by 60%.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Automated PDF report generation with multiple format support</li>
          <li>Photo upload, editing, and annotation tools for structural documentation</li>
          <li>Interactive building layout visualizations with D3.js</li>
          <li>Modular data input — floor-by-floor, façade element by element</li>
          <li>Version control for inspection reports</li>
          <li>Data grouping, filtering, and reuse across projects</li>
          <li>Role-based access for inspectors, architects, and reviewers</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — team collaboration.</strong>
        </p>
        <ul>
          <li>Building inspection UI components with Next.js</li>
          <li>Implementing D3-based interactive building visualizations</li>
          <li>Photo annotation tool development</li>
          <li>Connecting frontend to report generation endpoints</li>
          <li>Ensuring usability for non-technical field inspectors</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Project List</strong> — overview of all inspection projects.</li>
          <li><strong>New Report</strong> — input form for building details, dimensions, and use type.</li>
          <li><strong>Floor Editor</strong> — floor-by-floor data entry with layout visualization.</li>
          <li><strong>Façade Editor</strong> — annotate and mark structural issues on building exterior.</li>
          <li><strong>Photo Manager</strong> — upload and annotate site photos.</li>
          <li><strong>Report Export</strong> — generate and download finalized PDF reports.</li>
        </ul>
      </section>
    `,
  },

  feecutex: {
    title: 'Feecutex',
    slug: 'feecutex',
    href: 'https://feecutex.io/',
    description: 'Fintech platform website with Strapi CMS integration.',
    role: 'Lead Developer',
    stack: ['Next.js', 'Strapi', 'Tailwind', 'REST API'],
    imgUrl: '/projects/feecutex.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>Feecutex</strong> is a fintech platform website built end-to-end,
          including full integration with a Strapi CMS for content management.
          The project required a professional, trustworthy presentation suited to
          the financial services sector, with flexible content editing capabilities
          for the client team.
        </p>
        <br />
        <p>
          As the lead developer, I was responsible for the entire implementation —
          from architecture and CMS setup through to final deployment.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Full Strapi CMS integration for content management</li>
          <li>Dynamic pages powered by REST API from Strapi backend</li>
          <li>Fully responsive layout across all devices</li>
          <li>SEO-optimized page structure for fintech audience</li>
          <li>Contact and inquiry forms with validation</li>
          <li>Clean, trustworthy visual design appropriate for financial services</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Lead Developer — full end-to-end delivery.</strong>
        </p>
        <ul>
          <li>Setting up and configuring the Strapi CMS</li>
          <li>Building the Next.js frontend from scratch</li>
          <li>Connecting Strapi REST API to all dynamic page sections</li>
          <li>Styling and responsive layout with Tailwind</li>
          <li>Deployment and final delivery</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Home</strong> — hero, platform overview, and key value propositions.</li>
          <li><strong>About</strong> — company background and team.</li>
          <li><strong>Services / Features</strong> — fintech product capabilities.</li>
          <li><strong>Blog / News</strong> — CMS-driven articles managed via Strapi.</li>
          <li><strong>Contact</strong> — inquiry form and contact details.</li>
        </ul>
      </section>
    `,
  },

  flare: {
    title: 'Flare Ventures',
    slug: 'flare',
    href: 'https://flare.ventures/en',
    description: 'Corporate website for a venture and investment platform.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    imgUrl: '/projects/flare.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>Flare Ventures</strong> is a corporate website for a venture and
          investment-focused company. The project required a polished, high-trust
          design suited to a professional investor audience, with smooth animations
          and a clear structure that communicates credibility and vision.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Multilingual support (English and other locales)</li>
          <li>Smooth UI animations and transitions</li>
          <li>Fully responsive layout across all devices</li>
          <li>SEO-optimized structure for a professional audience</li>
          <li>Contact and partnership inquiry flows</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — team collaboration.</strong>
        </p>
        <ul>
          <li>Building UI components and page layouts</li>
          <li>Implementing animations and scroll interactions</li>
          <li>Multilingual routing and content switching</li>
          <li>Responsive styling with Tailwind</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Home</strong> — brand intro, investment philosophy, and highlights.</li>
          <li><strong>Portfolio</strong> — showcase of ventures and investments.</li>
          <li><strong>About</strong> — team and company background.</li>
          <li><strong>Contact</strong> — partnership and inquiry form.</li>
        </ul>
      </section>
    `,
  },

  slava: {
    title: 'Slava.gg',
    slug: 'slava',
    href: 'https://slava.gg/en',
    description: 'Gaming platform website with multilingual support.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'Tailwind', 'REST API'],
    imgUrl: '/projects/slava.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>Slava.gg</strong> is a gaming platform website with multilingual support,
          built to engage a broad international gaming audience. The project combines
          high-energy visual design with clean, performant frontend architecture.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Multilingual routing and content (English and other locales)</li>
          <li>Dynamic content via REST API integration</li>
          <li>Fully responsive layout for desktop and mobile gaming audiences</li>
          <li>High-performance rendering with Next.js</li>
          <li>Interactive UI elements and hover effects</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — team collaboration.</strong>
        </p>
        <ul>
          <li>Building page components and layouts</li>
          <li>Integrating REST API for dynamic content</li>
          <li>Multilingual routing implementation</li>
          <li>Responsive styling and visual polish</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Home</strong> — platform intro, featured content, and CTAs.</li>
          <li><strong>Games / Catalog</strong> — browsable game listings.</li>
          <li><strong>About</strong> — platform background and mission.</li>
          <li><strong>Contact</strong> — support and inquiry details.</li>
        </ul>
      </section>
    `,
  },

  iqpoint: {
    title: 'IQPoint',
    slug: 'iqpoint',
    href: 'https://iqpoint.es/en',
    description: 'Corporate website for a tech company with multilingual support.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    imgUrl: '/projects/iqpoint.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>IQPoint</strong> is a corporate website for a technology company
          targeting the Spanish and international markets. The site presents the
          company's services and expertise with a clean, professional design and
          smooth animations.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Multilingual support including English (<code>/en</code>)</li>
          <li>Smooth page and scroll animations with Framer Motion</li>
          <li>Fully responsive layout across all devices</li>
          <li>SEO-optimized structure for service and location pages</li>
          <li>Contact form with validation</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — team collaboration.</strong>
        </p>
        <ul>
          <li>Building UI components and page layouts</li>
          <li>Implementing Framer Motion animations</li>
          <li>Multilingual routing and localization</li>
          <li>Responsive styling with Tailwind</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Home</strong> — brand positioning and service highlights.</li>
          <li><strong>Services</strong> — detailed company capabilities.</li>
          <li><strong>About</strong> — team and company background.</li>
          <li><strong>Contact</strong> — inquiry form and office details.</li>
        </ul>
      </section>
    `,
  },

  iqresidence: {
    title: 'IQResidence',
    slug: 'iqresidence',
    href: 'https://iqresidence.com/en',
    description: 'Real estate platform website with multilingual support.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'REST API'],
    imgUrl: '/projects/iqresidence.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>IQResidence</strong> is a real estate platform website with multilingual
          support, designed to connect property buyers and investors across markets.
          The site combines a premium visual presentation with a clear, conversion-focused
          structure.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Multilingual content and routing (English and other locales)</li>
          <li>Property listings with filtering capabilities</li>
          <li>Dynamic content via REST API</li>
          <li>Smooth animations with Framer Motion</li>
          <li>Fully responsive layout for all devices</li>
          <li>Contact and inquiry forms with validation</li>
          <li>SEO-optimized structure for property pages</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — team collaboration.</strong>
        </p>
        <ul>
          <li>Building property listing and detail page components</li>
          <li>Connecting REST API for dynamic listings</li>
          <li>Implementing animations with Framer Motion</li>
          <li>Multilingual routing and layout work</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Home</strong> — hero, featured properties, and market highlights.</li>
          <li><strong>Properties</strong> — filterable catalog of listings.</li>
          <li><strong>Property Detail</strong> — full description, gallery, and inquiry form.</li>
          <li><strong>About</strong> — platform and team presentation.</li>
          <li><strong>Contact</strong> — inquiry and partnership form.</li>
        </ul>
      </section>
    `,
  },

  pershiledy: {
    title: 'Pershiledy',
    slug: 'pershiledy',
    href: 'https://shark-app-9au7o.ondigitalocean.app/',
    description: 'Redesigned website for a Ukrainian brand — new version with updated layout and content.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    imgUrl: '/projects/pershiledy.png',
    overview: `
      <section id="project-overview">
        <p>
          <strong>Pershiledy</strong> is a redesigned version of an existing Ukrainian
          brand website. The project involved a full visual and structural refresh —
          updated layout, improved content hierarchy, and a modernized design language
          while maintaining the brand's established identity.
        </p>
        <br />
        <p>
          The new version is hosted on DigitalOcean and represents a significant
          improvement in both aesthetics and user experience compared to the original.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Fully redesigned layout and visual identity</li>
          <li>Smooth animations and page transitions with Framer Motion</li>
          <li>Fully responsive across all devices</li>
          <li>Improved content structure and navigation hierarchy</li>
          <li>SEO-optimized page structure</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>Frontend Developer — redesign implementation.</strong>
        </p>
        <ul>
          <li>Rebuilding the site with updated design and content structure</li>
          <li>Implementing animations with Framer Motion</li>
          <li>Responsive layout with Tailwind</li>
          <li>Deployment to DigitalOcean</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Pages &amp; Sections</h2>
        <ul>
          <li><strong>Home</strong> — updated hero and brand introduction.</li>
          <li><strong>About</strong> — brand story and values with new visual treatment.</li>
          <li><strong>Products / Services</strong> — redesigned offering presentation.</li>
          <li><strong>Contact</strong> — updated contact section with inquiry form.</li>
        </ul>
      </section>
    `,
  },

  // Personal / practice projects
  earthlayers: {
    title: 'Layers of the Earth',
    slug: 'earthlayers',
    isMyProject: true,
    href: 'https://earth-layers.vercel.app/',
    description: 'Scroll-driven 3D exploded view of Earth\'s geological layers with interactive annotations.',
    role: 'Lead Developer',
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
    overview: `
      <section id="project-overview">
        <p>
          <strong>Layers of the Earth</strong> is an interactive educational experience
          built around a scroll-driven animation. As the user scrolls, a 3D rendered
          video of Earth is played frame by frame — from a whole planet gradually
          exploding into a layered burger-stack cross-section.
        </p>
        <br />
        <p>
          At the key moment of maximum separation, annotated cards appear beside
          each geological layer with connector lines, depth ranges, and scientific
          descriptions — then the animation continues to a smooth fade-out.
        </p>
      </section>
    `,
    functionality: `
      <section id="functionality">
        <h2>Functionality</h2>
        <ul>
          <li>Frame-by-frame video playback driven by scroll position (297 frames)</li>
          <li>Three scroll phases: intro animation → annotated exploded view → fast outro</li>
          <li>SVG overlay with 7 layer cards, connector lines, and anchor dots</li>
          <li>Cards appear and disappear with eased fade transitions per layer</li>
          <li>Fullscreen canvas cover rendering — adapts to any viewport</li>
          <li>Responsive layout: compact card mode on mobile (under 600px)</li>
          <li>Preloader with live percentage counter for all 297 frames</li>
          <li>Navigation dots synced to active geological layer</li>
          <li>Gradient progress bar across all scroll phases</li>
        </ul>
      </section>
    `,
    myRole: `
      <section id="my-role">
        <h2>My Role</h2>
        <p>
          <strong>End-to-end development.</strong>
          I designed and built the entire experience from scratch.
        </p>
        <ul>
          <li>Scroll-progress architecture with three distinct eased phases</li>
          <li>Canvas frame sequencer with cover-mode rendering</li>
          <li>SVG card layout system with dynamic geometry (hug factor per layer)</li>
          <li>Mobile-first responsive adaptation without media queries in CSS</li>
          <li>Geological layer research and content writing</li>
          <li>Performance optimisation for 297-image preload sequence</li>
        </ul>
      </section>
    `,
    structure: `
      <section id="pages-structure">
        <h2>Sections</h2>
        <ul>
          <li>
            <strong>Intro</strong> — title fades in over the first frames,
            disappears as the animation begins.
          </li>
          <li>
            <strong>Animation phase</strong> — frames 1–100 play at a measured pace,
            Earth slowly pulls apart into its layers.
          </li>
          <li>
            <strong>Annotated view</strong> — frames 100–200, all 7 layer cards
            appear in sequence with connector lines hugging the image contour.
          </li>
          <li>
            <strong>Outro</strong> — frames 200–297 play quickly, scene fades to black.
          </li>
        </ul>
      </section>
    `,
  },
};