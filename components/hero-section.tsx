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
      htmlChild.style.transform = "translateY(30px)"
      setTimeout(() => {
        htmlChild.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        htmlChild.style.opacity = "1"
        htmlChild.style.transform = "translateY(0)"
      }, 200 + i * 150)
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Floating glow shapes */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-secondary/10 blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 px-6 pt-28 pb-20 md:flex-row md:gap-16 lg:pt-0 lg:pb-0">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <div data-animate className="mb-4">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
              Software Developer
            </span>
          </div>

          <h1 data-animate className="mb-6 font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {"Hello I'm "}
            <span className="text-primary text-glow-cyan">Chaitanya Verma.</span>
            <br />
            <span className="text-foreground">Frontend </span>
            <span className="text-secondary">Developer</span>
            <br />
            {"Based In "}
            <span className="text-foreground underline decoration-primary/50 underline-offset-4">India.</span>
          </h1>

          <p data-animate className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            {"I'm a passionate, self-proclaimed designer who specializes in full-stack development. I am very enthusiastic about bringing the technical and visual aspects of digital products to life."}
          </p>

          {/* CTA Buttons */}
          <div data-animate className="mb-10 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-transparent px-8 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
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
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:glow-cyan"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right illustration */}
        <div data-animate className="relative flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-[60px] animate-pulse-glow" />
            <Image
              src="/images/hero-illustration.jpg"
              alt="Chaitanya Verma - Software Developer illustration"
              width={500}
              height={500}
              className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="h-10 w-5 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="h-2 w-1 rounded-full bg-primary animate-scroll" />
        </div>
      </div>
    </section>
  )
}
