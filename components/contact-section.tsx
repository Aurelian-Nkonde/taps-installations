"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

function DiamondOutline({ className = "" }: { className?: string }) {
  return (
    <svg 
      width={120} 
      height={120} 
      viewBox="0 0 100 100" 
      fill="none" 
      className={className}
      aria-hidden="true"
    >
      <rect 
        x="50" 
        y="5" 
        width="63" 
        height="63" 
        transform="rotate(45 50 5)"
        stroke="#00B4D8"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
  }

  return (
    <section id="contact" className="relative bg-midnight py-24 lg:py-32">
      {/* Diagonal Top Edge */}
      <div 
        className="absolute -top-1 left-0 right-0 h-24 bg-deep-navy"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)"
        }}
      />

      {/* Decorative Diamond - upper right */}
      <div className="absolute right-8 top-32 hidden lg:block" aria-hidden="true">
        <DiamondOutline />
      </div>

      <div ref={ref} className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl font-[var(--font-barlow)] font-bold text-white md:text-4xl lg:text-5xl"
            >
              Let&apos;s work together.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12 text-base text-steel-mist"
            >
              Get in touch for a free consultation and site measurement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 text-cyan-crystal text-sm">&#9632;</span>
                <div>
                  <p className="text-base text-white">
                    04 Khupiso Street, Bloekombos, Kraaifontein, Cape Town
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-1 text-cyan-crystal text-sm">&#9632;</span>
                <div>
                  <a href="tel:0680816345" className="text-base text-white transition-colors hover:text-cyan-crystal">
                    068 081 6345
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-1 text-cyan-crystal text-sm">&#9632;</span>
                <div>
                  <a href="mailto:one@gmail.com" className="text-base text-white transition-colors hover:text-cyan-crystal">
                    one@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-medium tracking-[0.2em] text-steel-mist uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full border-0 border-b border-dark-slate bg-transparent px-0 py-3 text-white placeholder:text-slate-grey focus:border-cyan-crystal focus:outline-none focus:ring-0 rounded-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium tracking-[0.2em] text-steel-mist uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full border-0 border-b border-dark-slate bg-transparent px-0 py-3 text-white placeholder:text-slate-grey focus:border-cyan-crystal focus:outline-none focus:ring-0 rounded-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-medium tracking-[0.2em] text-steel-mist uppercase mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                className="w-full border-0 border-b border-dark-slate bg-transparent px-0 py-3 text-white placeholder:text-slate-grey focus:border-cyan-crystal focus:outline-none focus:ring-0 rounded-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium tracking-[0.2em] text-steel-mist uppercase mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full resize-none border-0 border-b border-dark-slate bg-transparent px-0 py-3 text-white placeholder:text-slate-grey focus:border-cyan-crystal focus:outline-none focus:ring-0 rounded-none"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full inline-flex items-center justify-center bg-cyan-crystal px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-deep-cyan rounded-none"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
