"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-about]")
            items.forEach((item, i) => {
              const el = item as HTMLElement
              setTimeout(() => {
                el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
                el.style.opacity = "1"
                el.style.transform = "translateY(0)"
              }, i * 120)
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
      id="about"
      className="relative py-24 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          {/* Image */}
          <div
            data-about
            className="relative flex-shrink-0"
            style={{ opacity: 0, transform: "translateY(24px)" }}
          >
            <div className="relative overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/about-illustration.jpg"
                alt="About Chaitanya Verma"
                width={400}
                height={400}
                className="relative z-10 h-auto w-full max-w-sm object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div
              data-about
              className="mb-4"
              style={{ opacity: 0, transform: "translateY(24px)" }}
            >
              <span className="mb-3 inline-block rounded-md border border-border bg-surface px-3 py-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Who am I
              </span>
            </div>

            <h2
              data-about
              className="mb-6 font-mono text-3xl font-bold text-foreground sm:text-4xl"
              style={{ opacity: 0, transform: "translateY(24px)" }}
            >
              About <span className="gradient-text">Me</span>
            </h2>

            <div
              data-about
              className="space-y-4 text-muted-foreground"
              style={{ opacity: 0, transform: "translateY(24px)" }}
            >
              <p className="text-base leading-relaxed">
                {"I'm a passionate developer who specializes in full-stack development. I bring technical and visual aspects of digital products to life with clean, efficient code. User experience and writing clear, readable code matters to me."}
              </p>
              <p className="text-base leading-relaxed">
                {"I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, I build cutting-edge web applications using modern frameworks such as Next.js, TypeScript, and Tailwind CSS."}
              </p>
              <p className="text-base leading-relaxed">
                {"When I'm not coding, you can find me exploring indie hacker communities, witnessing the journey of early startups, or enjoying some free time. I share tech-related content and build in public on Twitter and GitHub."}
              </p>
            </div>

            {/* Stats */}
            <div
              data-about
              className="mt-8 flex flex-wrap gap-8"
              style={{ opacity: 0, transform: "translateY(24px)" }}
            >
              {[
                { value: "7+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "30+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-mono text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
