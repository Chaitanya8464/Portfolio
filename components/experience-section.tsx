"use client"

import { useEffect, useRef } from "react"

const experiences = [
  {
    company: "Google",
    role: "Lead Software Engineer",
    period: "Nov 2019 - Present",
    color: "text-primary",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    company: "Youtube",
    role: "Software Engineer",
    period: "Jan 2017 - Oct 2019",
    color: "text-secondary",
    description:
      "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that facilitated large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
  },
  {
    company: "Apple",
    role: "Junior Software Engineer",
    period: "Jan 2016 - Dec 2017",
    color: "text-foreground",
    description:
      "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
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
                el.style.transition = "opacity 0.7s ease, transform 0.7s ease"
                el.style.opacity = "1"
                el.style.transform = "translateX(0)"
              }, i * 200)
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
      className="relative py-24 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-secondary uppercase">
            Career Path
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
            My <span className="text-secondary">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-8 md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                data-exp
                className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:glow-cyan md:ml-16"
                style={{
                  opacity: 0,
                  transform: "translateX(-30px)",
                }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.55rem] top-8 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block">
                  <div className="absolute inset-0 rounded-full bg-primary/50 animate-pulse-glow" />
                </div>

                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg bg-muted font-mono text-xs font-bold ${
                        i === 0 ? "text-primary" : i === 1 ? "text-secondary" : "text-foreground"
                      }`}
                    >
                      {exp.company[0]}
                    </div>
                    <div>
                      <h3 className="font-mono text-base font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        at {exp.company}
                      </span>
                    </div>
                  </div>
                  <span className="inline-block rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
