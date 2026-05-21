"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const projects = [
  {
    image: "/images/x1.jpeg",
    category: "commercial glazing",
    title: "Century City Office Park",
    description:
      "Wind Glass was contracted to supply and install full-height double-glazed curtain walling across four floors of a new-build commercial office park in Century City, Cape Town. The brief required thermally broken aluminium framing, solar-control glass, and concealed drainage channels to meet the developer's Green Star rating targets. The project was completed ahead of schedule, delivering a seamless glass facade that dramatically improves the building's energy performance and visual appeal.",
    client: "Apex Property Developments",
    duration: "8 Months",
    value: "ZAR 3 200 000.00",
  },
  {
    image: "/images/x2.jpeg",
    category: "residential installation",
    title: "Hout Bay Villa Retreat",
    description:
      "A luxury residential project in Hout Bay requiring full window replacement across a 650m² hillside villa. Wind Glass supplied and installed large-format UPVC double-glazed units with low-E coating to maximise the ocean views while minimising heat gain. The installation included custom-fabricated corner glass panels and frameless sliding door systems, all completed with zero reported defects on final inspection.",
    client: "Private Client — Architectural firm: Klein & Steyn",
    duration: "10 Weeks",
    value: "ZAR 780 000.00",
  },
  {
    image: "/images/x3.jpeg",
    category: "shopfront & retail",
    title: "Bellville Retail Strip Development",
    description:
      "Wind Glass was appointed as the glazing sub-contractor for a 12-unit retail strip development in Bellville. Scope included frameless glass shopfronts with automatic sliding door systems, back-painted glass feature walls, and safety-glass balustrades on the mezzanine level. The project demanded tight coordination with the principal contractor and was delivered within a strict 6-week handover window, enabling all tenants to open on schedule.",
    client: "BuildRight Contractors (Pty) Ltd",
    duration: "6 Weeks",
    value: "ZAR 1 450 000.00",
  },
]

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0]
  index: number
  isInView: boolean
}) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
      className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${isEven ? "" : "lg:[direction:rtl]"}`}
    >
      {/* Project Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-dark-slate lg:[direction:ltr]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center lg:[direction:ltr]">
        <p className="mb-3 text-xs font-medium tracking-[0.3em] text-cyan-crystal uppercase">
          {project.category}
        </p>
        <h3 className="mb-4 text-2xl font-[var(--font-barlow)] font-bold text-white md:text-3xl">
          {project.title}
        </h3>
        <p className="mb-8 text-base leading-relaxed text-steel-mist">
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="mb-1 text-[10px] font-medium tracking-[0.2em] text-cyan-crystal uppercase">
              Client
            </p>
            <div className="h-px w-full bg-cyan-crystal/30 mb-2" />
            <p className="text-sm text-white">{project.client}</p>
          </div>
          <div>
            <p className="mb-1 text-[10px] font-medium tracking-[0.2em] text-cyan-crystal uppercase">
              Duration
            </p>
            <div className="h-px w-full bg-cyan-crystal/30 mb-2" />
            <p className="text-sm text-white">{project.duration}</p>
          </div>
          <div>
            <p className="mb-1 text-[10px] font-medium tracking-[0.2em] text-cyan-crystal uppercase">
              Value
            </p>
            <div className="h-px w-full bg-cyan-crystal/30 mb-2" />
            <p className="text-sm text-white">{project.value}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function WorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="work" className="relative bg-deep-navy grid-texture py-24 lg:py-32">
      {/* Diagonal Top Edge */}
      <div 
        className="absolute -top-1 left-0 right-0 h-24 bg-alice-blue"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%)"
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
          Our Work
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20 max-w-2xl text-3xl font-[var(--font-barlow)] font-bold leading-tight tracking-tight text-white md:text-4xl"
        >
          Projects we&apos;re proud of.
        </motion.h2>

        {/* Projects */}
        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
