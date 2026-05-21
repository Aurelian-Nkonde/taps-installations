"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    quote:
      "Wind Glass transformed our office with a stunning frameless glass partition system. Flawless installation, zero snagging — every deadline hit.",
    author: "Ryan Stander",
    role: "Managing Director",
    company: "Apex Property Developments",
  },
  {
    quote:
      "Our Hout Bay villa windows were replaced with zero disruption to daily life. Precision work, clean site every day. Wouldn't use anyone else.",
    author: "Private Client",
    role: "Residential",
    company: "Hout Bay",
  },
  {
    quote:
      "Tight 6-week handover for 12 units — met every milestone. The frameless shopfronts are exceptional and all tenants were delighted.",
    author: "Chris van Zyl",
    role: "Site Manager",
    company: "BuildRight Contractors (Pty) Ltd",
  },
]

const reasons = [
  "Deep expertise in residential and commercial glazing across Cape Town",
  "Precision-cut glass fabricated to exact site measurements — no gaps, no guesswork",
  "Full project management from survey to final clean-up",
  "Extensive product range: float glass, laminated, tempered, double-glazed units",
  "5-year workmanship warranty on all installations",
]

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-cyan-crystal" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative bg-deep-navy grid-texture py-24 lg:py-32">
      {/* Diagonal Top Edge */}
      <div
        className="absolute -top-1 left-0 right-0 h-24 bg-alice-blue"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      />

      <div ref={ref} className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-medium tracking-[0.3em] text-cyan-crystal uppercase"
        >
          Client Testimonials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 max-w-2xl text-3xl font-[var(--font-barlow)] font-bold leading-tight tracking-tight text-white md:text-4xl"
        >
          Trusted by homeowners, architects, and developers.
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.12 }}
              className="flex flex-col gap-5 border border-dark-slate bg-dark-slate/60 p-8"
            >
              <StarRating />
              <p className="flex-1 text-sm leading-relaxed text-steel-mist">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-dark-blue pt-5">
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="mt-0.5 text-xs text-steel-mist/70">
                  {t.role} — {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Wind Glass */}
        <div className="grid gap-12 border-t border-dark-slate pt-16 lg:grid-cols-2 lg:gap-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-2xl font-[var(--font-barlow)] font-bold text-white md:text-3xl"
          >
            Why should Wind Glass be your{" "}
            <span className="text-cyan-crystal">first-choice glazing partner</span>?
          </motion.h3>

          <div className="space-y-0">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.08 }}
                className={`flex items-start gap-4 py-4 ${
                  index !== reasons.length - 1 ? "border-b border-dark-slate" : ""
                }`}
              >
                <span className="mt-0.5 text-cyan-crystal font-bold select-none">—</span>
                <p className="text-sm leading-relaxed text-steel-mist">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
