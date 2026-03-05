"use client"

import { useEffect, useRef } from "react"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

const socials = [
  { icon: Github, href: "https://github.com/Chaitanya8464", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/chaitanya-verma-", label: "LinkedIn" },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const children = el.querySelectorAll("[data-animate]")
    children.forEach((child, i) => {
      const htmlChild = child as HTMLElement
      htmlChild.style.opacity = "0"
      htmlChild.style.transform = "translateY(16px)"
      setTimeout(() => {
        htmlChild.style.transition = "opacity 0.6s ease, transform 0.6s ease"
        htmlChild.style.opacity = "1"
        htmlChild.style.transform = "translateY(0)"
      }, 100 + i * 100)
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-24"
    >
      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-20 md:flex-row md:gap-16">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <div data-animate className="mb-4">
            <span className="inline-block rounded-md border border-border bg-surface px-3 py-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Software Developer
            </span>
          </div>

          <h1 data-animate className="mb-6 font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {"Hello, I'm "}
            <span className="gradient-text">Chaitanya Verma</span>
            <br />
            <span className="text-foreground">Software</span>
            <span className="text-muted-foreground"> Developer</span>
            <br />
            {"Based in "}
            <span className="border-b-2 border-primary">India</span>
          </h1>

          <p data-animate className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            {"I'm a passionate developer who specializes in full-stack development. I bring technical and visual aspects of digital products to life with clean, efficient code."}
          </p>

          {/* CTA Buttons */}
          <div data-animate className="mb-10 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 button-press"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border bg-transparent px-6 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary button-press"
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div data-animate className="flex justify-center gap-3 md:justify-start">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:bg-surface button-press"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right illustration */}
        <div data-animate className="relative flex-1 flex items-center justify-center">
          <div className="relative">
            <Image
              src="/images/hero-illustration.jpg"
              alt="Chaitanya Verma - Software Developer illustration"
              width={500}
              height={500}
              className="relative z-10 w-full max-w-md object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="h-10 w-5 rounded-full border-2 border-border flex items-start justify-center p-1">
          <div className="h-2 w-1 rounded-full bg-primary animate-scroll" />
        </div>
      </div>
    </section>
  )
}
