"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const items = [
  { src: "/images/x1.jpeg", alt: "Frameless glass installation",      label: "Residential" },
  { src: "/images/x2.jpeg", alt: "Commercial shopfront glazing",      label: "Commercial"  },
  { src: "/images/x3.jpeg", alt: "Double-glazed window installation", label: "Windows"     },
  { src: "/images/x4.jpeg", alt: "Glass balustrade installation",     label: "Balustrades" },
  { src: "/images/x5.jpeg", alt: "Office glass partition system",     label: "Partitions"  },
  { src: "/images/x6.jpeg", alt: "Skylights and roof glazing",        label: "Skylights"   },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-alice-blue py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-medium tracking-[0.3em] text-cyan-crystal uppercase"
        >
          Project Gallery
        </motion.p>

        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-lg text-3xl font-[var(--font-barlow)] font-bold leading-tight tracking-tight text-midnight md:text-4xl"
          >
            Installations we&apos;re proud of.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-slate-grey"
          >
            Residential &amp; commercial · Western Cape
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              className="group relative aspect-4/3 overflow-hidden bg-dark-slate"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-midnight/0 transition-colors duration-300 group-hover:bg-midnight/50" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                <span className="inline-block border border-cyan-crystal/60 px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-cyan-crystal uppercase">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
