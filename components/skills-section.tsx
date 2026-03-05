"use client"

import { useEffect, useRef } from "react"

const skills = [
  { name: "React", icon: "⚛" },
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "Next.js", icon: "N" },
  { name: "Node.js", icon: "⬢" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Git", icon: "⑂" },
  { name: "GraphQL", icon: "◈" },
  { name: "Docker", icon: "🐳" },
  { name: "PostgreSQL", icon: "🐘" },
]

function SkillIcon({ text }: { text: string }) {
  return (
    <span className="flex h-full w-full items-center justify-center font-mono text-lg font-bold text-foreground">
      {text}
    </span>
  )
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const cards = entry.target.querySelectorAll("[data-skill]")
              cards.forEach((card, i) => {
                const el = card as HTMLElement
                setTimeout(() => {
                  el.style.transition = "opacity 0.5s ease, transform 0.5s ease"
                  el.style.opacity = "1"
                  el.style.transform = "translateY(0) scale(1)"
                }, i * 60)
              })
              observer.unobserve(entry.target)
            }
          })
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-md border border-border bg-surface px-3 py-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
            Tech Stack
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              data-skill
              className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:bg-surface card-hover"
              style={{ opacity: 0, transform: "translateY(16px) scale(0.98)" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-surface transition-colors duration-300 group-hover:bg-primary/10">
                <SkillIcon text={skill.icon} />
              </div>
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
