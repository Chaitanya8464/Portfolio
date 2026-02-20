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
    <span className="flex h-full w-full items-center justify-center font-mono text-lg font-bold text-primary">
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
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll("[data-skill]")
            cards.forEach((card, i) => {
              const el = card as HTMLElement
              setTimeout(() => {
                el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
                el.style.opacity = "1"
                el.style.transform = "translateY(0) scale(1)"
              }, i * 80)
            })
            observer.unobserve(entry.target)
          }
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
      className="relative py-24 bg-surface"
    >
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
            Tech Stack
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
            My <span className="text-primary text-glow-cyan">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              data-skill
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:glow-cyan"
              style={{ opacity: 0, transform: "translateY(20px) scale(0.95)" }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted transition-colors duration-300 group-hover:bg-primary/10">
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
