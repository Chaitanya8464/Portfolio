"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    number: "01",
    title: "Crypto Screener Application",
    description:
      "A comprehensive cryptocurrency screener that provides real-time data, advanced filtering, and portfolio tracking. Built with React, TypeScript, and integrated with multiple crypto APIs for live market data visualization.",
    image: "/images/project-1.jpg",
    tags: ["React", "TypeScript", "API", "Charts"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    number: "02",
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    description:
      "A modern e-commerce template designed for fashion and apparel brands. Features a clean product catalog, cart management, and responsive design. Built with Next.js and styled with Tailwind CSS for maximum performance.",
    image: "/images/project-2.jpg",
    tags: ["Next.js", "Tailwind", "E-commerce", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    number: "03",
    title: "Blog Website Template",
    description:
      "A minimal yet powerful blog template with markdown support, SEO optimization, and dark mode. Designed for developers and writers who want a fast, beautiful blogging platform with zero-config deployment.",
    image: "/images/project-3.jpg",
    tags: ["Next.js", "MDX", "SEO", "Dark Mode"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-project]")
            items.forEach((item, i) => {
              const el = item as HTMLElement
              setTimeout(() => {
                el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
                el.style.opacity = "1"
                el.style.transform = "translateY(0)"
              }, i * 250)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 bg-background"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
            Portfolio
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
            My <span className="text-primary text-glow-cyan">Projects</span>
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {projects.map((project, i) => (
            <div
              key={project.title}
              data-project
              className={`flex flex-col items-center gap-10 md:gap-14 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ opacity: 0, transform: "translateY(40px)" }}
            >
              {/* Project image */}
              <div className="group relative flex-1 w-full">
                <div className="relative overflow-hidden rounded-2xl border border-border transition-all duration-500 group-hover:border-primary/30 group-hover:glow-cyan">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>

              {/* Project info */}
              <div className="flex-1">
                <span className="mb-2 block font-mono text-5xl font-bold text-primary/20">
                  {project.number}
                </span>
                <h3 className="mb-4 font-mono text-xl font-bold text-foreground sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]"
                  >
                    Live Demo
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                  >
                    GitHub
                    <Github className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
