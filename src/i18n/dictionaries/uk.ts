import type { Dictionary } from './en';

const uk: Dictionary = {
  meta: {
    homeTitle: 'Валерія Петропавловська — Frontend-розробниця з продуктовим мисленням',
    homeDescription:
      'Frontend-розробниця, яка веде вебпродукти від ідеї до запуску: структура, Next.js і TypeScript, SEO та продуктивність. 3+ роки, 20+ проєктів.',
    projectsTitle: 'Проєкти — Валерія Петропавловська',
    projectsDescription:
      'Сайти для клієнтів, продукти від ідеї до запуску та власні застосунки: нерухомість, подорожі, фінтех і SaaS на Next.js.',
    caseTitle: '{project} — кейс · Валерія Петропавловська',
    caseRole: 'Моя роль: {role}.',
    jobTitle: 'Frontend-розробниця',
  },
  nav: {
    home: 'Головна',
    howIWork: 'Як я працюю',
    skills: 'Навички',
    projects: 'Проєкти',
    contact: 'Контакти',
    menu: 'Відкрити меню',
    closeMenu: 'Закрити меню',
    language: 'Мова',
  },
  hero: {
    name: 'Валерія Петропавловська',
    tagline: 'Frontend-розробниця з продуктовим мисленням — від ідеї до готового продукту.',
    text: 'Веду вебпродукти від сирої ідеї до продакшену: формую концепцію, планую структуру, розробляю на Next.js і TypeScript та запускаю з налаштованими SEO й продуктивністю. 3+ роки, 20+ запущених проєктів для клієнтів у Європі та Україні.',
    downloadCv: 'Завантажити CV',
    contact: 'Написати мені',
    availability: 'Відкрита до full-time remote та окремих фриланс-проєктів.',
  },
  howIWork: {
    title: 'Як я працюю',
    subtitle: 'Від ідеї до продукту — одна людина на всьому шляху.',
    steps: [
      { title: 'Ідея', text: 'Розбираюся в бізнес-цілі та аудиторії й перетворюю розмитий запит на чіткий обсяг робіт.' },
      { title: 'Структура', text: 'Карта сайту, користувацькі сценарії, план контенту та SEO — ще до дизайну.' },
      { title: 'Дизайн', text: 'Працюю з дизайнером або сама прототипую інтерфейс, з AI-інструментами для швидкості.' },
      { title: 'Розробка', text: 'Next.js, TypeScript, Tailwind; компонентна система на дизайн-токенах; інтеграції з CMS та API.' },
      { title: 'Запуск', text: 'Метадані, sitemap, редиректи, аналітика та перевірка продуктивності (Lighthouse до 92).' },
      { title: 'Розвиток', text: 'Нові розділи, мови та функції після релізу.' },
    ],
  },
  whatIDo: {
    title: 'Що я роблю',
    subtitle: 'Частини продукту, за які я відповідаю, — від першого дзвінка до релізу.',
    items: [
      { question: 'Продукти з нуля', answer: 'Сайти, платформи та MVP — від брифу й структури до деплою.' },
      { question: 'Frontend на Next.js', answer: 'App Router, серверний рендеринг, перевикористовувані UI-компоненти, адаптивні та доступні інтерфейси.' },
      { question: 'SEO та продуктивність', answer: 'Метадані, sitemap, hreflang, безпечні міграції з редиректами, Core Web Vitals.' },
      { question: 'Інтеграції', answer: 'Headless CMS (DatoCMS, Strapi), REST і GraphQL API, CRM, оплати, форми.' },
      { question: 'Мультимовні продукти', answer: 'i18n, локалізований контент і URL для кількох ринків.' },
    ],
  },
  skills: [
    { title: 'Продукт', items: ['Discovery та scope', 'Користувацькі сценарії', 'Карта сайту', 'Комунікація з клієнтом', 'Планування задач'] },
    { title: 'Frontend', items: ['Next.js (App Router, SSR/SSG/ISR)', 'React', 'TypeScript'] },
    { title: 'UI', items: ['Tailwind CSS', 'Дизайн-токени', 'Chakra UI', 'Framer Motion', 'GSAP', 'Three.js'] },
    { title: 'Дані', items: ['REST', 'GraphQL', 'WebSockets', 'React Query', 'Redux Toolkit', 'DatoCMS', 'Strapi', 'Firebase', 'Supabase'] },
    { title: 'SEO та продуктивність', items: ['Метадані', 'Sitemap', 'hreflang', 'Редиректи', 'Core Web Vitals', 'Lighthouse'] },
    { title: 'Процес', items: ['Git і PR-рев’ю', 'CI/CD', 'Figma', 'Webflow', 'AI-first розробка з Claude'] },
  ],
  preview: {
    title: 'Вибрані роботи',
    subtitle: 'Продукти, які я зробила повністю — від першого дзвінка до запуску.',
    all: 'Усі проєкти',
  },
  contact: {
    title: 'Маєте ідею продукту або відкриту вакансію?',
    subtitle: 'Напишіть мені — найзручніше на email або в Telegram.',
    email: 'Email',
    telegram: 'Telegram',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    downloadCv: 'Завантажити CV',
  },
  footer: {
    rights: 'Валерія Петропавловська',
    availability: 'Відкрита до remote-ролей і фриланс-проєктів.',
    allProjects: 'Усі проєкти',
  },
  projectsPage: {
    title: 'Проєкти',
    intro: 'Продукти, які я провела від ідеї до запуску — як розробниця, як PM і для себе.',
    groups: {
      client: { title: 'Клієнтські проєкти', description: 'Сайти та платформи, які я розробила для агенцій і прямих клієнтів.' },
      product: {
        title: 'Від ідеї до продукту',
        description: 'Клієнтські проєкти, які я вела повністю: дослідження, структура, дизайн з AI-інструментами, розробка і запуск.',
      },
      own: { title: 'Мої проєкти', description: 'Експерименти та продукти, які я створюю сама.' },
    },
  },
  caseStudy: {
    role: 'Роль',
    stack: 'Стек',
    year: 'Рік',
    status: 'Статус',
    visit: 'Відкрити сайт',
    github: 'GitHub',
    overview: 'Огляд',
    challenge: 'Задача',
    idea: 'Ідея',
    whatIDid: 'Що я зробила',
    building: 'Що я будую',
    decisions: 'Ключові рішення',
    result: 'Результат',
    features: 'Функціонал',
    why: 'Навіщо',
    back: 'Усі проєкти',
    screenshot: 'Скриншот {project}',
  },
  breadcrumbs: { label: 'Навігаційний ланцюжок' },
  notFound: { title: 'Сторінку не знайдено', text: 'Такої сторінки немає або її перенесено.', back: 'На головну' },
};

export default uk;
