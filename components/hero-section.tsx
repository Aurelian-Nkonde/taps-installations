"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #152847 0%, #0F1F3A 50%, #0B132B 100%)",
      }}
    >
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32 lg:px-8">
        <div className="grid w-full gap-16 lg:grid-cols-[1fr_420px] lg:items-center xl:grid-cols-[1fr_480px]">

          {/* ── Left: Text ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-cyan-crystal uppercase"
            >
              <span className="h-px w-8 bg-cyan-crystal/60" />
              Glass & Window Installations · Cape Town
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[var(--font-barlow)] font-bold leading-[0.95] tracking-tight text-white"
              style={{ fontSize: "clamp(56px, 7vw, 96px)" }}
            >
              Bringing
              <br />
              clarity and
              <br />
              <span className="text-cyan-crystal">precision</span>
              <br />
              to every pane.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 max-w-md text-base leading-relaxed text-steel-mist/90"
            >
              Precision-fitted glass solutions for homes and commercial
              properties across the Western Cape.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-cyan-crystal px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-deep-cyan"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-steel-mist transition-colors hover:text-white"
              >
                View Services
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Hero Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/bg1.jpg"
                alt="Glass installation by Wind Glass"
                fill
                className="object-cover"
                priority
              />
              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-cyan-crystal" />
              <div className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-cyan-crystal" />
              <div className="absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-cyan-crystal" />
              <div className="absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-cyan-crystal" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
