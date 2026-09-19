import type { Locale } from '@/i18n/config';

export type CaseStep = { title?: string; text: string };

export type CaseContent = {
  /** One line for cards and meta description */
  description: string;
  role: string;
  status?: string;
  /** Short intro for projects without a full "challenge" story */
  overview?: string;
  challenge?: string;
  /** Used instead of `challenge` for own products */
  idea?: string;
  whatIDid: CaseStep[];
  /** Label for whatIDid when the product is still in progress */
  inProgress?: boolean;
  decisions?: string;
  result?: string;
  why?: string;
  features?: string[];
};

type Localized = Record<Locale, CaseContent>;

export const projectContent: Record<string, Localized> = {
  // ───────────────────────── Client work ─────────────────────────
  oikia: {
    en: {
      description: 'Real estate platform with a filterable property catalog, CMS and CRM, in Greek and English.',
      role: 'Freelance · end-to-end',
      challenge:
        'A Greek property agency needed a website where buyers and renters from Greece and abroad can find a property, and every inquiry lands straight in the agency’s CRM.',
      whatIDid: [
        { title: 'Structure', text: 'Home, filterable listings with map and grid views, property pages with gallery and inquiry form, about and contact.' },
        { title: 'Architecture', text: 'Chose the stack, designed the CMS schema in DatoCMS and the GraphQL queries, so the agency edits every property and page on its own.' },
        { title: 'Build', text: 'All UI components and layouts, filtering by location, type and price, Greek and English versions, animations with Framer Motion.' },
        { title: 'Launch', text: 'AMO CRM integration for leads, SEO structure for property and location pages, performance optimization, deployment.' },
      ],
      decisions: 'A headless CMS so content never needs a developer; every form connected to the CRM so no lead is lost.',
      result: 'Live platform the agency runs on its own: listings, content and leads in one flow.',
    },
    uk: {
      description: 'Платформа нерухомості з каталогом і фільтрами, CMS та CRM, грецькою та англійською.',
      role: 'Фриланс · повний цикл',
      challenge:
        'Грецькій агенції нерухомості був потрібен сайт, де покупці й орендарі з Греції та інших країн знаходять об’єкт, а кожна заявка одразу потрапляє в CRM агенції.',
      whatIDid: [
        { title: 'Структура', text: 'Головна, каталог з фільтрами у вигляді карти й сітки, сторінки об’єктів з галереєю та формою заявки, «Про нас» і контакти.' },
        { title: 'Архітектура', text: 'Обрала стек, спроєктувала схему CMS у DatoCMS і GraphQL-запити, щоб агенція сама редагувала кожен об’єкт і сторінку.' },
        { title: 'Розробка', text: 'Усі UI-компоненти й макети, фільтри за локацією, типом і ціною, грецька та англійська версії, анімації на Framer Motion.' },
        { title: 'Запуск', text: 'Інтеграція з AMO CRM для заявок, SEO-структура сторінок об’єктів і локацій, оптимізація продуктивності, деплой.' },
      ],
      decisions: 'Headless CMS, щоб контент ніколи не потребував розробника; кожна форма підключена до CRM, щоб не втрачати заявки.',
      result: 'Працююча платформа, якою агенція керує сама: об’єкти, контент і заявки в одному процесі.',
    },
  },
  blackbookbykristina: {
    en: {
      description: 'Luxury travel concierge website with content-rich pages and inquiry forms.',
      role: 'Freelance · end-to-end',
      challenge:
        'A luxury travel and lifestyle concierge needed a personal brand website that builds trust through visual storytelling and leads visitors to apply for the service.',
      whatIDid: [
        { title: 'Structure', text: 'Defined the page structure and the conversion path: hero, services, story, lifestyle visuals, application form, contact.' },
        { title: 'Build', text: 'Responsive layouts, editorial typography and storytelling animations.' },
        { title: 'Forms', text: 'A structured application form and a contact form with validation and Google reCAPTCHA against spam.' },
        { title: 'Launch', text: 'Accessibility and usability checks, SEO-friendly structure, deployment.' },
      ],
      decisions: 'A dedicated application form instead of a generic contact form, so the client receives structured requests she can act on.',
      result: 'Live brand website with a clear path from first impression to inquiry.',
    },
    uk: {
      description: 'Сайт luxury travel-консьєржа з контентними сторінками та формами заявок.',
      role: 'Фриланс · повний цикл',
      challenge:
        'Luxury travel- і lifestyle-консьєржу був потрібен сайт особистого бренду, який викликає довіру через візуальний сторітелінг і веде відвідувача до заявки на послугу.',
      whatIDid: [
        { title: 'Структура', text: 'Визначила структуру сторінок і шлях до конверсії: перший екран, послуги, історія, lifestyle-візуали, анкета, контакти.' },
        { title: 'Розробка', text: 'Адаптивні макети, редакційна типографіка та анімації для сторітелінгу.' },
        { title: 'Форми', text: 'Структурована анкета та контактна форма з валідацією і Google reCAPTCHA від спаму.' },
        { title: 'Запуск', text: 'Перевірка доступності й зручності, SEO-дружня структура, деплой.' },
      ],
      decisions: 'Окрема анкета замість звичайної контактної форми, щоб клієнтка отримувала структуровані запити, з якими можна одразу працювати.',
      result: 'Працюючий сайт бренду зі зрозумілим шляхом від першого враження до заявки.',
    },
  },
  c13: {
    en: {
      description: 'Agency website with a strong visual identity and scroll animations.',
      role: 'Frontend Developer',
      overview: 'c13.agency is a creative agency website where animation quality and performance were central requirements — the site is the agency’s main showcase.',
      whatIDid: [
        { text: 'Implemented complex GSAP animation sequences and scroll-driven interactions.' },
        { text: 'Built React components for all page sections.' },
        { text: 'Kept animations smooth across browsers and devices.' },
        { text: 'Took part in interaction design decisions.' },
      ],
      features: ['GSAP scroll and entrance animations', 'Custom cursor and hover effects', 'Smooth transitions between sections', 'Work showcase with visual storytelling'],
    },
    uk: {
      description: 'Сайт агенції з виразним візуальним стилем і scroll-анімаціями.',
      role: 'Frontend-розробниця',
      overview: 'c13.agency — сайт креативної агенції, де якість анімацій і продуктивність були ключовими вимогами: сайт — головна вітрина агенції.',
      whatIDid: [
        { text: 'Реалізувала складні послідовності анімацій на GSAP і scroll-взаємодії.' },
        { text: 'Розробила React-компоненти для всіх секцій сторінки.' },
        { text: 'Забезпечила плавність анімацій у різних браузерах і на різних пристроях.' },
        { text: 'Брала участь у рішеннях щодо дизайну взаємодій.' },
      ],
      features: ['Scroll- та entrance-анімації на GSAP', 'Кастомний курсор і hover-ефекти', 'Плавні переходи між секціями', 'Вітрина робіт зі сторітелінгом'],
    },
  },
  proptick: {
    en: {
      description: 'Responsive product landing page with rich animations.',
      role: 'UI Developer',
      overview: 'Landing page for Prop-Tick, a real estate SaaS for property management, offer handling and agent–client collaboration.',
      whatIDid: [
        { text: 'Built the responsive layout of the landing page in HTML and CSS.' },
        { text: 'Implemented GSAP animations for product sections.' },
        { text: 'Adapted the page for desktop, tablet and mobile.' },
      ],
    },
    uk: {
      description: 'Адаптивний лендінг продукту з виразними анімаціями.',
      role: 'UI-розробниця',
      overview: 'Лендінг для Prop-Tick — SaaS для нерухомості: керування об’єктами, пропозиціями та співпраця агентів із клієнтами.',
      whatIDid: [
        { text: 'Зверстала адаптивний лендінг на HTML і CSS.' },
        { text: 'Реалізувала анімації секцій продукту на GSAP.' },
        { text: 'Адаптувала сторінку для десктопа, планшета й мобільних.' },
      ],
    },
  },
  mysiteboost: {
    en: {
      description: 'Real-time website monitoring and performance tracking platform.',
      role: 'Frontend Developer',
      overview: 'MySiteBoost monitors websites in real time — uptime, speed, SSL and SEO — so teams react before users notice a problem. I worked in a team with backend, QA, design and a PM.',
      whatIDid: [
        { text: 'Built UI components with Next.js and Chakra UI.' },
        { text: 'Displayed real-time data from Firebase Firestore.' },
        { text: 'Connected REST API endpoints to the dashboard views.' },
        { text: 'Managed application state with Redux.' },
      ],
      features: ['Uptime monitoring with downtime alerts', 'Speed tracking with historical charts', 'SSL expiry notifications', 'SEO analysis dashboard', 'Email and Telegram alerts'],
    },
    uk: {
      description: 'Платформа моніторингу сайтів і продуктивності в реальному часі.',
      role: 'Frontend-розробниця',
      overview: 'MySiteBoost у реальному часі стежить за сайтами — доступність, швидкість, SSL і SEO, — щоб команда реагувала раніше, ніж користувачі помітять проблему. Працювала в команді з бекендом, QA, дизайнером і PM.',
      whatIDid: [
        { text: 'Розробила UI-компоненти на Next.js і Chakra UI.' },
        { text: 'Виводила дані з Firebase Firestore в реальному часі.' },
        { text: 'Підключила REST API до екранів дашборду.' },
        { text: 'Керувала станом застосунку через Redux.' },
      ],
      features: ['Моніторинг доступності з алертами', 'Відстеження швидкості з графіками', 'Сповіщення про закінчення SSL', 'Дашборд SEO-аналізу', 'Алерти на email і в Telegram'],
    },
  },
  pinta: {
    en: {
      description: 'Website for a software development company.',
      role: 'Frontend Developer',
      overview: 'Corporate website for Pinta, a Ukrainian software company offering web, mobile, AI and big data services. Built in a team, with a focus on scalable components, speed and SEO.',
      whatIDid: [
        { text: 'Built UI components and page layouts in Next.js.' },
        { text: 'Implemented MDX-based content pages and the blog.' },
        { text: 'Styled with Tailwind CSS, ensured responsive behavior.' },
      ],
      features: ['English, Ukrainian and Russian versions', 'Service and industry landing pages', 'Case studies', 'MDX blog', 'Book-a-call flows'],
    },
    uk: {
      description: 'Сайт компанії з розробки програмного забезпечення.',
      role: 'Frontend-розробниця',
      overview: 'Корпоративний сайт Pinta — української IT-компанії, що робить веб, мобільні застосунки, AI та big data. Робила в команді з фокусом на масштабовані компоненти, швидкість і SEO.',
      whatIDid: [
        { text: 'Розробила UI-компоненти й макети сторінок на Next.js.' },
        { text: 'Реалізувала контентні сторінки та блог на MDX.' },
        { text: 'Стилізувала на Tailwind CSS, забезпечила адаптивність.' },
      ],
      features: ['Англійська, українська та російська версії', 'Лендінги послуг і галузей', 'Кейси', 'Блог на MDX', 'Запис на дзвінок'],
    },
  },
  opps: {
    en: {
      description: 'AI-powered data search and analytics platform for business development.',
      role: 'Frontend Developer',
      overview: 'Opps helps teams find contacts, investors and fast-growing companies and build ad audiences with AI. I worked with backend developers, QA and a PM.',
      whatIDid: [
        { text: 'Built the React application UI and component library.' },
        { text: 'Implemented data visualizations with Recharts.' },
        { text: 'Connected the frontend to REST API endpoints.' },
        { text: 'Built the marketplace and dashboard views.' },
      ],
      features: ['AI contact discovery (OpenAI)', 'Investor and company data', 'Analytics dashboard', 'Stripe subscriptions', 'Role-based access'],
    },
    uk: {
      description: 'AI-платформа пошуку даних і аналітики для розвитку бізнесу.',
      role: 'Frontend-розробниця',
      overview: 'Opps допомагає командам знаходити контакти, інвесторів і компанії, що швидко ростуть, та збирати рекламні аудиторії за допомогою AI. Працювала з бекенд-розробниками, QA і PM.',
      whatIDid: [
        { text: 'Розробила UI застосунку на React і бібліотеку компонентів.' },
        { text: 'Реалізувала візуалізації даних на Recharts.' },
        { text: 'Підключила фронтенд до REST API.' },
        { text: 'Розробила екрани маркетплейсу й дашборду.' },
      ],
      features: ['Пошук контактів з AI (OpenAI)', 'Дані про інвесторів і компанії', 'Аналітичний дашборд', 'Підписки через Stripe', 'Доступ за ролями'],
    },
  },
  indigo: {
    en: {
      description: 'Brand landing page built from scratch in Webflow — a no-code build when the client needs to edit everything themselves.',
      role: 'Webflow Developer',
      overview: 'Indigo is a brand landing page built entirely in Webflow, from setup to publish. All animations use Webflow’s native interactions — no external frameworks.',
      whatIDid: [
        { text: 'Set up the Webflow project structure and style guide.' },
        { text: 'Designed and built all sections and components.' },
        { text: 'Implemented interactions and animation sequences.' },
        { text: 'Made it responsive and published the site.' },
      ],
    },
    uk: {
      description: 'Лендінг бренду з нуля у Webflow — no-code рішення, коли клієнт хоче редагувати все сам.',
      role: 'Webflow-розробниця',
      overview: 'Indigo — лендінг бренду, повністю зроблений у Webflow, від налаштування до публікації. Усі анімації — на нативних interactions Webflow, без сторонніх фреймворків.',
      whatIDid: [
        { text: 'Налаштувала структуру проєкту й style guide у Webflow.' },
        { text: 'Спроєктувала та зібрала всі секції й компоненти.' },
        { text: 'Реалізувала interactions і послідовності анімацій.' },
        { text: 'Адаптувала під усі пристрої та опублікувала сайт.' },
      ],
    },
  },
  addup: {
    en: {
      description: 'Multilingual platform website.',
      role: 'Frontend Developer',
      overview: 'AddUp is a platform website built in a team, with multilingual routing and backend API integration.',
      whatIDid: [
        { text: 'Built UI components and page layouts.' },
        { text: 'Implemented multilingual routing.' },
        { text: 'Connected the REST API to frontend views.' },
      ],
    },
    uk: {
      description: 'Мультимовний сайт платформи.',
      role: 'Frontend-розробниця',
      overview: 'AddUp — сайт платформи, зроблений у команді, з мультимовною маршрутизацією та інтеграцією з API.',
      whatIDid: [
        { text: 'Розробила UI-компоненти й макети сторінок.' },
        { text: 'Реалізувала мультимовну маршрутизацію.' },
        { text: 'Підключила REST API до сторінок.' },
      ],
    },
  },
  feecutex: {
    en: {
      description: 'Fintech platform website powered by Strapi CMS.',
      role: 'Lead Developer',
      overview: 'Feecutex is a fintech platform website I delivered end-to-end — from architecture and CMS setup to deployment — with a trustworthy look for a financial audience.',
      whatIDid: [
        { text: 'Set up and configured Strapi CMS.' },
        { text: 'Built the Next.js frontend from scratch.' },
        { text: 'Connected the Strapi REST API to all dynamic sections.' },
        { text: 'Deployed and delivered the project.' },
      ],
    },
    uk: {
      description: 'Сайт фінтех-платформи на Strapi CMS.',
      role: 'Lead-розробниця',
      overview: 'Feecutex — сайт фінтех-платформи, який я зробила повністю — від архітектури й налаштування CMS до деплою, — з дизайном, що викликає довіру у фінансової аудиторії.',
      whatIDid: [
        { text: 'Встановила й налаштувала Strapi CMS.' },
        { text: 'Розробила фронтенд на Next.js з нуля.' },
        { text: 'Підключила REST API Strapi до всіх динамічних секцій.' },
        { text: 'Задеплоїла та здала проєкт.' },
      ],
    },
  },
  flare: {
    en: {
      description: 'Corporate website for a venture and investment platform.',
      role: 'Frontend Developer',
      overview: 'Flare Ventures needed a high-trust website for an investor audience, with smooth animations and a clear structure. Built in a team.',
      whatIDid: [
        { text: 'Built UI components and page layouts.' },
        { text: 'Implemented animations and scroll interactions.' },
        { text: 'Set up multilingual routing and content switching.' },
      ],
    },
    uk: {
      description: 'Корпоративний сайт венчурної та інвестиційної платформи.',
      role: 'Frontend-розробниця',
      overview: 'Flare Ventures потребував сайту, що викликає довіру в інвесторів, з плавними анімаціями та чіткою структурою. Робила в команді.',
      whatIDid: [
        { text: 'Розробила UI-компоненти й макети сторінок.' },
        { text: 'Реалізувала анімації та scroll-взаємодії.' },
        { text: 'Налаштувала мультимовну маршрутизацію.' },
      ],
    },
  },
  slava: {
    en: {
      description: 'Multilingual gaming platform website.',
      role: 'Frontend Developer',
      overview: 'Slava.gg is a gaming platform website for an international audience, built in a team.',
      whatIDid: [
        { text: 'Built page components and layouts.' },
        { text: 'Integrated the REST API for dynamic content.' },
        { text: 'Implemented multilingual routing.' },
      ],
    },
    uk: {
      description: 'Мультимовний сайт ігрової платформи.',
      role: 'Frontend-розробниця',
      overview: 'Slava.gg — сайт ігрової платформи для міжнародної аудиторії, зроблений у команді.',
      whatIDid: [
        { text: 'Розробила компоненти й макети сторінок.' },
        { text: 'Інтегрувала REST API для динамічного контенту.' },
        { text: 'Реалізувала мультимовну маршрутизацію.' },
      ],
    },
  },
  iqpoint: {
    en: {
      description: 'Multilingual corporate website for a tech company.',
      role: 'Frontend Developer',
      overview: 'IQPoint is a corporate website for a technology company in Spain and international markets. Built in a team.',
      whatIDid: [
        { text: 'Built UI components and page layouts.' },
        { text: 'Implemented Framer Motion animations.' },
        { text: 'Set up multilingual routing and localization.' },
      ],
    },
    uk: {
      description: 'Мультимовний корпоративний сайт технологічної компанії.',
      role: 'Frontend-розробниця',
      overview: 'IQPoint — корпоративний сайт технологічної компанії для Іспанії та міжнародних ринків. Робила в команді.',
      whatIDid: [
        { text: 'Розробила UI-компоненти й макети сторінок.' },
        { text: 'Реалізувала анімації на Framer Motion.' },
        { text: 'Налаштувала мультимовність і локалізацію.' },
      ],
    },
  },
  iqresidence: {
    en: {
      description: 'Multilingual real estate platform website.',
      role: 'Frontend Developer',
      overview: 'IQResidence connects property buyers and investors across markets, with listings, filters and a conversion-focused structure. Built in a team.',
      whatIDid: [
        { text: 'Built property listing and detail page components.' },
        { text: 'Connected the REST API for dynamic listings.' },
        { text: 'Implemented animations and multilingual layouts.' },
      ],
    },
    uk: {
      description: 'Мультимовний сайт платформи нерухомості.',
      role: 'Frontend-розробниця',
      overview: 'IQResidence поєднує покупців та інвесторів нерухомості з різних ринків: каталог, фільтри й структура, орієнтована на заявки. Робила в команді.',
      whatIDid: [
        { text: 'Розробила компоненти каталогу та сторінки об’єкта.' },
        { text: 'Підключила REST API для динамічного каталогу.' },
        { text: 'Реалізувала анімації та мультимовні макети.' },
      ],
    },
  },
  pershiledy: {
    en: {
      description: 'Redesign of a Ukrainian brand website.',
      role: 'Frontend Developer',
      overview: 'A full visual and structural refresh of an existing Ukrainian brand website, keeping the brand identity.',
      whatIDid: [
        { text: 'Rebuilt the site with the new design and content structure.' },
        { text: 'Implemented animations with Framer Motion.' },
        { text: 'Deployed the new version to DigitalOcean.' },
      ],
    },
    uk: {
      description: 'Редизайн сайту українського бренду.',
      role: 'Frontend-розробниця',
      overview: 'Повне візуальне та структурне оновлення сайту українського бренду зі збереженням його айдентики.',
      whatIDid: [
        { text: 'Перезібрала сайт з новим дизайном і структурою контенту.' },
        { text: 'Реалізувала анімації на Framer Motion.' },
        { text: 'Задеплоїла нову версію на DigitalOcean.' },
      ],
    },
  },

  // ───────────────────────── From idea to product ─────────────────────────
  movingo: {
    en: {
      description: 'Move-out service for rental tenants in Barcelona: deposit, admin, furniture, repairs.',
      role: 'Product & development, end-to-end',
      challenge:
        'Tenants in Barcelona moving out of a rental face a pile of tasks at once: getting the deposit back, cancelling utilities, getting rid of furniture, small repairs, sometimes an urgent move. The client wanted to test demand with ads and turn visitors into free 15-minute consultations.',
      whatIDid: [
        { title: 'Idea & scope', text: 'Broke the move-out problem into separate pains and built the product around them: each landing opens on one pain but leads to the same flow.' },
        { title: 'MVP', text: 'Landing pages for Meta ads in English, Spanish and Russian, with a four-step qualifier quiz: city, move-out date, main pain, contact.' },
        { title: 'Lead logic', text: 'Qualified visitors (Barcelona, moving within 3 months) get a booking link; everyone else gets a free PDF checklist. Every answer is sent to a webhook, so no lead is lost.' },
        { title: 'Growth', text: 'Grew the MVP into a full service website: a page per situation, a three-step process, FAQ and guides managed in DatoCMS.' },
      ],
      decisions: 'Organizing the site by the tenant’s situation instead of by service; a qualifier quiz so the team only spends calls on people it can help; a useful checklist for everyone else.',
      result: 'Live service website, built and launched by me with AI tools, from the first idea to the CMS.',
    },
    uk: {
      description: 'Сервіс для орендарів у Барселоні, які з’їжджають: депозит, документи, меблі, ремонт.',
      role: 'Продукт і розробка, повний цикл',
      challenge:
        'Орендарі в Барселоні, які з’їжджають з квартири, стикаються з купою задач одночасно: повернути депозит, відключити комунальні послуги, позбутися меблів, зробити дрібний ремонт, інколи — терміново переїхати. Клієнт хотів перевірити попит через рекламу й перетворювати відвідувачів на безкоштовні 15-хвилинні консультації.',
      whatIDid: [
        { title: 'Ідея та scope', text: 'Розбила проблему виїзду на окремі «болі» й побудувала продукт навколо них: кожен лендінг відкривається однією болем, але веде в той самий сценарій.' },
        { title: 'MVP', text: 'Лендінги для реклами в Meta англійською, іспанською та російською з квізом-кваліфікатором на чотири кроки: місто, дата виїзду, головна проблема, контакт.' },
        { title: 'Логіка заявок', text: 'Цільові відвідувачі (Барселона, виїзд протягом 3 місяців) отримують посилання на запис; решта — безкоштовний PDF-чекліст. Кожна відповідь іде у вебхук, тож жодна заявка не губиться.' },
        { title: 'Розвиток', text: 'Виростила MVP у повноцінний сайт сервісу: сторінка під кожну ситуацію, процес із трьох кроків, FAQ і гайди в DatoCMS.' },
      ],
      decisions: 'Сайт організовано за ситуацією орендаря, а не за послугами; квіз-кваліфікатор, щоб команда витрачала дзвінки лише на тих, кому може допомогти; корисний чекліст для всіх інших.',
      result: 'Працюючий сайт сервісу, який я придумала, зробила й запустила з AI-інструментами — від першої ідеї до CMS.',
    },
  },
  vpdigital: {
    en: {
      description: 'Website for a German agency that digitalizes companies in industry, construction and logistics.',
      role: 'Product & development, end-to-end',
      challenge:
        'A German digital agency needed a website that speaks to non-technical business owners and turns visits into qualified project requests.',
      whatIDid: [
        { title: 'Idea & scope', text: 'Defined the audience and the offer — websites, e-commerce and custom software — and the core message: from chaos to a working system.' },
        { title: 'Structure', text: 'Hero, services, a five-step process (Understand, Define, Design, Build, Improve), FAQ and a final call to action.' },
        { title: 'Design & build', text: 'Designed and developed the site in German with AI tools: a scroll story where abstract modules assemble from chaos into a system.' },
        { title: 'Lead capture', text: 'A multi-step project request form instead of a plain contact form.' },
      ],
      decisions: 'Showing the process visually to build trust with non-technical buyers; a form that qualifies leads before the first call.',
      result: 'Live agency website, designed and built by me from the first idea to launch.',
    },
    uk: {
      description: 'Сайт німецької агенції, яка діджиталізує компанії у промисловості, будівництві та логістиці.',
      role: 'Продукт і розробка, повний цикл',
      challenge:
        'Німецькій діджитал-агенції був потрібен сайт, зрозумілий нетехнічним власникам бізнесу, який перетворює візити на кваліфіковані заявки на проєкт.',
      whatIDid: [
        { title: 'Ідея та scope', text: 'Визначила аудиторію й пропозицію — сайти, e-commerce та кастомне ПЗ — і головний меседж: від хаосу до працюючої системи.' },
        { title: 'Структура', text: 'Перший екран, послуги, процес із п’яти кроків (Understand, Define, Design, Build, Improve), FAQ і фінальний заклик до дії.' },
        { title: 'Дизайн і розробка', text: 'Спроєктувала й розробила сайт німецькою з AI-інструментами: scroll-історія, у якій абстрактні модулі збираються з хаосу в систему.' },
        { title: 'Збір заявок', text: 'Багатокрокова форма заявки на проєкт замість звичайної контактної форми.' },
      ],
      decisions: 'Візуально показаний процес, щоб викликати довіру в нетехнічних клієнтів; форма, яка кваліфікує заявку ще до першого дзвінка.',
      result: 'Працюючий сайт агенції, який я спроєктувала й зробила від першої ідеї до запуску.',
    },
  },
  rag: {
    en: {
      description: 'Visibility service for local businesses in DACH: Google Maps, reviews, social and AI search.',
      role: 'Product & development, end-to-end',
      challenge:
        'Local businesses in Germany, Austria and Switzerland are found not only on Google, but on Google Maps, in reviews, social networks and AI assistants like ChatGPT and Perplexity. The client needed a product website that explains this shift and brings in leads.',
      whatIDid: [
        { title: 'Idea & scope', text: 'Shaped the offer around one entry point: a free two-minute visibility check, plus a fixed-price Google profile setup.' },
        { title: 'Structure & content', text: 'Page structure from “how customers search today” to services and guides; copy in German with AI tools, with a Russian version.' },
        { title: 'Design & build', text: 'Dark visual style with an interactive “your position in local search” demo; built with React, Vite and Tailwind and deployed to Vercel.' },
      ],
      decisions: 'A free check as the main conversion instead of a generic contact form; explaining AI search in plain language for local business owners.',
      result: 'Live product website, taken from idea to launch by me with AI tools.',
    },
    uk: {
      description: 'Сервіс видимості для локального бізнесу в DACH: Google Maps, відгуки, соцмережі та AI-пошук.',
      role: 'Продукт і розробка, повний цикл',
      challenge:
        'Локальний бізнес у Німеччині, Австрії та Швейцарії шукають не лише в Google, а й у Google Maps, відгуках, соцмережах і AI-асистентах на кшталт ChatGPT і Perplexity. Клієнту був потрібен сайт продукту, який пояснює цей зсув і приводить заявки.',
      whatIDid: [
        { title: 'Ідея та scope', text: 'Побудувала пропозицію навколо однієї точки входу — безкоштовної перевірки видимості за дві хвилини, плюс налаштування Google-профілю за фіксовану ціну.' },
        { title: 'Структура й контент', text: 'Структура від «як клієнти шукають сьогодні» до послуг і гайдів; тексти німецькою з AI-інструментами та російська версія.' },
        { title: 'Дизайн і розробка', text: 'Темний візуальний стиль з інтерактивним демо «ваша позиція в локальному пошуку»; зібрано на React, Vite і Tailwind, деплой на Vercel.' },
      ],
      decisions: 'Безкоштовна перевірка як головна конверсія замість звичайної форми; пояснення AI-пошуку простою мовою для власників локального бізнесу.',
      result: 'Працюючий сайт продукту, який я провела від ідеї до запуску з AI-інструментами.',
    },
  },

  // ───────────────────────── My projects ─────────────────────────
  earthlayers: {
    en: {
      description: 'Scroll-driven 3D exploded view of the Earth’s layers with interactive annotations.',
      role: 'Own project · end-to-end',
      status: 'Live',
      overview:
        'An interactive educational experience: as you scroll, a 3D Earth plays frame by frame and separates into layers like a stack; at maximum separation, annotated cards appear next to each geological layer.',
      whatIDid: [
        { text: 'Scroll-progress architecture with three eased phases: intro, annotated exploded view, outro.' },
        { text: 'Canvas frame sequencer with cover-mode rendering for 297 frames.' },
        { text: 'SVG card layout with connector lines and dynamic geometry per layer.' },
        { text: 'Mobile-first adaptation, preloader with live progress, layer research and copywriting.' },
      ],
    },
    uk: {
      description: 'Scroll-анімація: 3D-Земля розкладається на шари з інтерактивними підписами.',
      role: 'Власний проєкт · повний цикл',
      status: 'Працює',
      overview:
        'Інтерактивний освітній проєкт: під час скролу 3D-Земля програється кадр за кадром і розходиться на шари; у момент максимального розкладу біля кожного геологічного шару з’являються картки з поясненнями.',
      whatIDid: [
        { text: 'Архітектура прогресу скролу з трьома фазами: інтро, розкладений вигляд з підписами, фінал.' },
        { text: 'Покадровий плеєр на Canvas з cover-рендерингом для 297 кадрів.' },
        { text: 'SVG-розкладка карток з лініями-вказівниками та динамічною геометрією для кожного шару.' },
        { text: 'Mobile-first адаптація, прелоадер із прогресом, дослідження шарів і тексти.' },
      ],
    },
  },
  postbridge: {
    en: {
      description: 'Posting automation app: write once, publish to all connected platforms.',
      role: 'Own product · end-to-end',
      status: 'In development',
      inProgress: true,
      idea: 'Posting the same content to several platforms means copying, reformatting and uploading it again and again. post-bridge lets you write a post once and publish it to every connected platform.',
      whatIDid: [
        { text: 'User accounts with authentication and a database on Supabase.' },
        { text: 'Connecting platforms: Instagram, Telegram and WooCommerce publish automatically through their APIs.' },
        { text: 'For marketplaces without a public API — Prom.ua and Horoshop — the app generates a ready-to-import YML or CSV file.' },
        { text: 'One post editor with validation for every selected platform.' },
      ],
      why: 'To take a product of my own through every stage — idea, data model, auth, integrations and launch.',
    },
    uk: {
      description: 'Застосунок для автоматизації публікацій: пишеш один раз — публікуєш на всіх підключених платформах.',
      role: 'Власний продукт · повний цикл',
      status: 'У розробці',
      inProgress: true,
      idea: 'Публікація одного й того самого контенту на кількох платформах — це постійне копіювання, переформатування й завантаження. post-bridge дозволяє написати пост один раз і опублікувати його на всіх підключених платформах.',
      whatIDid: [
        { text: 'Акаунти користувачів з авторизацією та базою даних на Supabase.' },
        { text: 'Підключення платформ: Instagram, Telegram і WooCommerce публікуються автоматично через API.' },
        { text: 'Для маркетплейсів без публічного API — Prom.ua та Horoshop — застосунок генерує готовий до імпорту YML- або CSV-файл.' },
        { text: 'Один редактор посту з валідацією під кожну обрану платформу.' },
      ],
      why: 'Щоб провести власний продукт через усі етапи — ідея, модель даних, авторизація, інтеграції та запуск.',
    },
  },
};
