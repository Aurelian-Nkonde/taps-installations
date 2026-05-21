"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function QuoteCallout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-alice-blue py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden border border-cyan-crystal/20 bg-deep-navy p-10 lg:p-16">
          {/* Glass pane grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#00B4D8 1px, transparent 1px), linear-gradient(90deg, #00B4D8 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-cyan-crystal uppercase">
                Free Consultation
              </p>
              <h2 className="text-3xl font-[var(--font-barlow)] font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Ready to transform
                <br />
                your space?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-steel-mist">
                Get a free site measurement and no-obligation quote. We serve residential and commercial clients across the Western Cape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row lg:justify-end"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-cyan-crystal px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-deep-cyan"
              >
                Request Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:0680816345"
                className="inline-flex items-center justify-center border border-cyan-crystal/40 px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:border-cyan-crystal hover:text-cyan-crystal"
              >
                Call 068 081 6345
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
