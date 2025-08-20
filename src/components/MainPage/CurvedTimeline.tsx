"use client"
import { motion } from "framer-motion"

const skills = [
  { title: "💻 Languages & Core", items: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { title: "⚛️ Frameworks", items: ["React", "Next.js", "Redux Toolkit", "Zustand"] },
  { title: "🎨 Styling", items: ["Tailwind CSS", "Sass", "Styled Components"] },
  { title: "🔗 APIs & Data", items: ["REST", "GraphQL", "WebSockets"] },
  { title: "⚡ Performance", items: ["SSR/SSG", "Code Splitting", "PWA", "Lighthouse"] },
]

export default function CurvedTimeline() {
  return (
    <section className="w-full bg-[#0f0f0f] py-20">
      <div className="max-w-6xl mx-auto relative px-6">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">
          Tech Skills
        </h2>

        {/* SVG кривая */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-[500px] absolute top-0 left-0 opacity-40"
        >
          <path
            d="M 50 250 C 250 50, 750 450, 950 250"
            stroke="#22d3ee"
            strokeWidth="3"
            fill="transparent"
          />
        </svg>

        {/* Точки + блоки */}
        <div className="relative">
          {skills.map((skill, i) => {
            // координаты точек вдоль кривой вручную (можно просчитать динамически через path.getPointAtLength)
            const positions = [
              { left: "5%", top: "45%" },
              { left: "25%", top: "15%" },
              { left: "50%", top: "55%" },
              { left: "75%", top: "15%" },
              { left: "90%", top: "45%" },
            ]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="absolute flex flex-col items-center"
                style={positions[i]}
              >
                <div className="w-4 h-4 bg-cyan-400 rounded-full mb-3 shadow-lg" />
                <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-4 max-w-[220px]">
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {skill.title}
                  </h3>
                  <ul className="text-gray-400 text-xs space-y-1">
                    {skill.items.map((item, j) => (
                      <li key={j}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
