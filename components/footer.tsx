import Link from "next/link"

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#contact", label: "Contact" },
]

function Logo() {
  return (
    <div className="flex flex-col leading-none">
      <span className="text-cyan-crystal font-[var(--font-barlow)] font-bold text-lg tracking-wider">//</span>
      <div className="flex flex-col -mt-1">
        <span className="font-[var(--font-barlow)] font-bold text-xl text-white tracking-wide">WIND</span>
        <span className="font-[var(--font-barlow)] font-bold text-xl text-cyan-crystal tracking-wide -mt-1">GLASS</span>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-footer-dark">
      <div className="h-[1px] bg-cyan-crystal/60" />
      
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo & Tagline */}
          <div>
            <Logo />
            <p className="mt-4 text-sm text-steel-mist">
              Professional Glass & Window Installations
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-medium tracking-[0.2em] text-steel-mist uppercase">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-steel-mist transition-colors hover:text-cyan-crystal"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="mb-4 text-xs font-medium tracking-[0.2em] text-steel-mist uppercase">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-steel-mist">
              <p>04 Khupiso Street, Bloekombos,<br />Kraaifontein, Cape Town</p>
              <p>
                <a href="tel:0680816345" className="transition-colors hover:text-cyan-crystal">
                  068 081 6345
                </a>
              </p>
              <p>
                <a href="mailto:one@gmail.com" className="transition-colors hover:text-cyan-crystal">
                  one@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-slate py-6">
        <div className="text-center text-xs text-slate-grey space-y-1">
          <p>Wind Glass (Pty) Ltd  |  Professional Glass & Window Installations  |  Cape Town, South Africa</p>
          <p>© 2025 Wind Glass. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
