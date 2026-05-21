"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "500+", label: "Completed Installations" },
  { value: "5-Year", label: "Workmanship Warranty" },
  { value: "2020", label: "Year Founded" },
]

export function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="border-y border-slate-100 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        {/* Mobile: 2×2 grid */}
        <div className="grid grid-cols-2 gap-y-14 md:hidden">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`px-4 py-2 text-center ${index % 2 === 0 ? "border-r border-slate-100" : ""}`}
            >
              <StatContent stat={stat} />
            </motion.div>
          ))}
        </div>

        {/* Desktop: single row with dividers */}
        <div className="hidden divide-x divide-slate-100 md:flex">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-1 px-12 py-4 text-center lg:px-16"
            >
              <StatContent stat={stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatContent({ stat }: { stat: { value: string; label: string } }) {
  return (
    <>
      <p className="font-[var(--font-barlow)] text-5xl font-bold leading-none text-midnight lg:text-6xl">
        {stat.value}
      </p>
      {/* Short cyan rule — brand accent */}
      <div className="mx-auto mt-4 mb-4 h-0.5 w-10 bg-cyan-crystal" />
      <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-grey">
        {stat.label}
      </p>
    </>
  )
}
