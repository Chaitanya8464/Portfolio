"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
       <a href="/" className="flex items-center gap-3 group">
  {/* Logo Icon Container */}
  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Abstract 'C' with bracket feel */}
      <path d="M10 8c-2 0-3 1-3 4s1 4 3 4" />
      {/* Abstract 'V' with bracket feel */}
      <path d="M14 8l2.5 8 2.5-8" />
      {/* Subtle Code Slash */}
      <path d="M12 6l-2 12" className="opacity-40" />
    </svg>
  </div>

  {/* Text Branding */}
  <div className="flex flex-col leading-none">
    <span className="font-mono text-lg font-bold tracking-tighter text-slate-100 transition-colors group-hover:text-cyan-400">
      CHAITANYA<span className="text-cyan-500">.</span>VERMA
    </span>
    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
      Full-Stack Developer
    </span>
  </div>
</a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-muted-foreground transition-colors duration-300 hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] md:flex"
        >
          Resume
          <Download className="h-4 w-4" />
        </a>

        {/* Mobile Toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="glass mt-2 mx-4 rounded-xl p-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Resume
                <Download className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
