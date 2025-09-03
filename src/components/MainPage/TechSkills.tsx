"use client"
import { motion } from "framer-motion"

const skills = [
  {
    title: "💻 Languages & Core",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "⚛️ Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "React Query",
      "React Motion",
      "Framer Motion",
    ],
  },
  {
    title: "🎨 UI & Styling",
    items: ["Tailwind CSS", "Sass/SCSS", "Styled Components", "CSS-in-JS"],
  },
  {
    title: "🔗 APIs & Data",
    items: ["REST", "GraphQL", "WebSockets"],
  },
  {
    title: "⚡ Performance & Architecture",
    items: [
      "SSR/SSG",
      "Code Splitting",
      "Lazy Loading",
      "Progressive Web Apps (PWA)",
      "Lighthouse Optimization",
    ],
  },
  {
    title: "🛠 Tools & Workflow",
    items: [
      "Git",
      "GitHub/GitLab",
      "CI/CD (GitHub Actions)",
      "Webpack",
    ],
  },
  {
    title: "🖥 Testing & Quality",
    items: ["Jest", "ESLint", ],
  },
  {
    title: "🎨 Design & Collaboration",
    items: ["Figma", "Adobe XD", ],
  },
  {
    title: "🌌 Extras",
    items: ["Three.js / React Three Fiber", "i18n", "SEO optimization"],
  },
]

export default function TechSkills() {
  return (
    <div
      className="text-white px-[16px] py-[80px] lg:py-[120px] flex gap-[40px]"
      style={{ background: '' }}
    >

      <div className="relative border-l-2 border-[#747474CC]">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="mb-12 ml-6"
          >
            <div className="absolute w-3 h-3 bg-[#34c7f8] rounded-full -left-[7px] mt-2" />
            <h3 className="text-xl font-semibold text-white mb-3">
              {skill.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
              {skill.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
