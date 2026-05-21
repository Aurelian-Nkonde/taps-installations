"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative bg-alice-blue py-24 lg:py-32">
      {/* Angled top edge handled by hero section's bottom clip */}
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Text Content - 60% width */}
          <div ref={ref} className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4 text-xs font-medium tracking-[0.3em] text-cyan-crystal uppercase"
            >
              About Wind Glass
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-3xl font-[var(--font-barlow)] font-bold leading-tight tracking-tight text-midnight md:text-4xl lg:text-5xl"
            >
              Clarity and craftsmanship in every installation.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-base leading-relaxed text-midnight/80"
            >
              <p>
                Wind Glass is a Cape Town-based specialist in professional glass and window installations, delivering precision-fitted solutions to both residential and commercial clients across the Western Cape. Founded on a passion for precision and craftsmanship, we bring clarity and beauty to every space we work in.
              </p>
              <p>
                Our team of skilled glaziers and installation experts delivers solutions that combine cutting-edge materials with time-tested techniques. From double-glazed energy-efficient windows to elegant shopfront facades, we handle every project with meticulous attention to detail.
              </p>
              <p>
                At Wind Glass, we understand that windows and glass features are not merely functional — they define the character of a building, influence energy efficiency, and enhance the quality of life for occupants. We pride ourselves on delivering precision-fitted solutions that stand the test of time.
              </p>
              <p>
                Our strategic approach combines experienced site management, quality-assured materials, and strict adherence to South African building standards (SANS 10400), ensuring every installation exceeds client expectations.
              </p>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 border-l-2 border-cyan-crystal pl-6 text-xl italic text-cyan-crystal font-medium"
            >
              &quot;Bringing clarity and precision to every pane.&quot;
            </motion.blockquote>

          </div>

          {/* Credentials Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-2 flex-col justify-center gap-0 border border-dark-blue bg-dark-slate"
          >
            {[
              { number: "12+", label: "Years of Experience" },
              { number: "500+", label: "Completed Installations" },
              { number: "3", label: "Major Project Categories" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`px-10 py-10 ${i !== 2 ? "border-b border-dark-blue" : ""}`}
              >
                <p className="text-5xl font-[var(--font-barlow)] font-bold text-cyan-crystal xl:text-6xl">
                  {stat.number}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-steel-mist">
                  {stat.label}
                </p>
              </div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  )
}
