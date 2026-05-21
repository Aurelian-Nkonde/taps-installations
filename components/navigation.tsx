"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#contact", label: "Contact" },
]

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span className="text-cyan-crystal font-[var(--font-barlow)] font-bold text-lg tracking-wider">//</span>
      <div className="flex flex-col -mt-1">
        <span className="font-[var(--font-barlow)] font-bold text-xl text-white tracking-wide">WIND</span>
        <span className="font-[var(--font-barlow)] font-bold text-xl text-cyan-crystal tracking-wide -mt-1">GLASS</span>
      </div>
    </div>
  )
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-midnight" : "bg-transparent"
        }`}
      >
        <div className="h-[1px] bg-cyan-crystal/60" />
        
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" aria-label="Wind Glass Home">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-steel-mist transition-colors hover:text-cyan-crystal relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-crystal transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-deep-navy md:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-6 py-4">
                <Link href="/" onClick={() => setIsMenuOpen(false)} aria-label="Wind Glass Home">
                  <Logo />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white"
                  aria-label="Close navigation menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-[var(--font-barlow)] font-bold tracking-wide text-white transition-colors hover:text-cyan-crystal"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
