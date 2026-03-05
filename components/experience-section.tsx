"use client"

import { useEffect, useRef } from "react"
import { Laptop, Server, Database, Globe } from "lucide-react"

const expertises = [
  {
    title: "Frontend Development",
    icon: Laptop,
    description:
      "Skilled in building fast, responsive websites that work seamlessly across all devices, and creating engaging user experiences.",
  },
  {
    title: "Backend Development",
    icon: Server,
    description:
      "Developing reliable server systems and APIs that power applications efficiently, handling business logic and ensuring smooth performance at scale.",
  },
  {
    title: "Database Design",
    icon: Database,
    description:
      "Designing optimized databases that keep data organized and accessible, ensuring fast queries and reliable performance as businesses grow.",
  },
  {
    title: "Deployment & Cloud",
    icon: Globe,
    description:
      "Deploying applications on cloud platforms like AWS and Netlify using Docker, ensuring smooth releases and reliable performance.",
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-exp]")
            items.forEach((item, i) => {
              const el = item as HTMLElement
              setTimeout(() => {
                el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
                el.style.opacity = "1"
                el.style.transform = "translateY(0)"
              }, i * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 bg-surface"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-md border border-border bg-surface px-3 py-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
            Expertise
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
            Field <span className="gradient-text">Expertises</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {expertises.map((item, i) => (
            <div
              key={item.title}
              data-exp
              className="group relative rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:bg-surface card-hover"
              style={{
                opacity: 0,
                transform: "translateY(24px)",
              }}
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-surface text-primary transition-colors duration-300 group-hover:bg-primary/10">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-mono text-lg font-bold text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
