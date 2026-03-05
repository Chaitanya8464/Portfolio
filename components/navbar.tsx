"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download, Sun, Moon } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary transition-all duration-300 group-hover:border-primary">
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
              <path d="M10 8c-2 0-3 1-3 4s1 4 3 4" />
              <path d="M14 8l2.5 8 2.5-8" />
              <path d="M12 6l-2 12" className="opacity-40" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-mono text-lg font-bold tracking-tighter text-foreground transition-colors">
              CHAITANYA<span className="text-primary">.</span>VERMA
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground link-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 button-press md:flex"
        >
          Resume
          <Download className="h-4 w-4" />
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="hidden items-center justify-center h-10 w-10 rounded-md border border-border bg-transparent text-foreground transition-all duration-300 hover:border-primary hover:text-primary md:flex button-press"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {mounted && theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>

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
        <div className="bg-background border-b border-border md:hidden">
          <div className="mx-4 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground button-press"
                  onClick={() => setMobileOpen(false)}
                >
                  Resume
                  <Download className="h-4 w-4" />
                </a>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary button-press"
                >
                  {mounted && theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" /> Dark Mode
                    </>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
