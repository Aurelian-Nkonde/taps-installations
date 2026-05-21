"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Home, Building2, Layers, Square, Wrench, Scissors, ArrowRight } from "lucide-react"

const services = [
  {
    name: "Residential Window Installation",
    description: "Precision-fitted aluminium, UPVC and timber-framed windows for homes.",
    icon: Home,
  },
  {
    name: "Commercial Glazing & Shopfronts",
    description: "Full-height glass facades, frameless shopfronts and office partitions.",
    icon: Building2,
  },
  {
    name: "Double-Glazed Units (DGU)",
    description: "Energy-efficient insulated glass units reducing heat loss and noise.",
    icon: Layers,
  },
  {
    name: "Frameless Glass Doors & Balustrades",
    description: "Elegant safety-glass solutions for balconies, staircases and showers.",
    icon: Square,
  },
  {
    name: "Glass Repairs & Replacements",
    description: "Emergency and planned glass replacement for all window types.",
    icon: Wrench,
  },
  {
    name: "Custom Glass Fabrication",
    description: "Cut-to-size, tempered, laminated and tinted glass made to spec.",
    icon: Scissors,
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative bg-alice-blue py-24 lg:py-32">
      {/* Diagonal Top Edge */}
      <div 
        className="absolute -top-1 left-0 right-0 h-24 bg-deep-navy"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)"
        }}
      />

      <div ref={ref} className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-medium tracking-[0.3em] text-cyan-crystal uppercase"
        >
          Our Services
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 max-w-2xl text-3xl font-[var(--font-barlow)] font-bold leading-tight tracking-tight text-midnight md:text-4xl"
        >
          Comprehensive glazing solutions for every project.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 max-w-3xl text-base leading-relaxed text-midnight/80"
        >
          Wind Glass offers a comprehensive range of glazing and window installation services, underpinned by precision craftsmanship and premium materials. We work closely with homeowners, architects, contractors, and property developers to deliver solutions that are both beautiful and functional.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-16 text-sm text-cyan-crystal font-medium"
        >
          All our installations comply with SANS 10400 and are backed by a 5-year workmanship warranty.
        </motion.p>

        {/* Services Grid */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative flex flex-col overflow-hidden border border-slate-200 border-l-4 border-l-transparent bg-white p-8 transition-all hover:-translate-y-1 hover:border-l-cyan-crystal hover:shadow-md rounded-none"
              >
                {/* Top accent bar */}
                <div className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-cyan-crystal transition-transform duration-300 group-hover:scale-x-100" />

                <div className="mb-5 flex h-11 w-11 items-center justify-center bg-cyan-crystal/10 text-cyan-crystal transition-colors group-hover:bg-cyan-crystal/20">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-midnight">
                  {service.name}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-slate-grey">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center gap-1 text-xs font-medium text-cyan-crystal opacity-0 transition-opacity group-hover:opacity-100">
                  Enquire <ArrowRight className="h-3 w-3" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Pull Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-xl font-[var(--font-barlow)] font-bold text-midnight md:text-2xl max-w-3xl mx-auto"
        >
          &quot;We navigate the competitive market by being responsive, reliable, and relentlessly focused on delivering quality that lasts.&quot;
        </motion.p>
      </div>
    </section>
  )
}
