"use client"
import { motion } from "framer-motion"
import type { Dictionary } from "@/i18n/dictionaries"

type Props = { skills: Dictionary['skills'] }

export default function TechSkills({ skills }: Props) {
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
            <div aria-hidden="true" className="absolute w-3 h-3 bg-[#34c7f8] rounded-full -left-[7px] mt-2" />
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
