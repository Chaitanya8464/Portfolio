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
                el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
                el.style.opacity = "1"
                el.style.transform = "translateY(0)"
              }, i * 200)
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
      className="relative py-24 bg-surface"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          {/* Image */}
          <div
            data-about
            className="relative flex-shrink-0"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <Image
                src="/images/about-illustration.jpg"
                alt="About Evren Shah"
                width={400}
                height={400}
                className="relative z-10 h-auto w-full max-w-sm object-cover"
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-[40px]" />
            <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-secondary/20 blur-[40px]" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div
              data-about
              className="mb-4"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
                Who am I
              </span>
            </div>

            <h2
              data-about
              className="mb-6 font-mono text-3xl font-bold text-foreground sm:text-4xl"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              About <span className="text-primary text-glow-cyan">Me</span>
            </h2>

            <div
              data-about
              className="space-y-4 text-muted-foreground"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <p className="text-base leading-relaxed">
                {"I'm a passionate, self-proclaimed designer who specializes in full-stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel-perfect design, and writing clear, readable, highly performant code matters to me."}
              </p>
              <p className="text-base leading-relaxed">
                {"I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern frameworks such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more."}
              </p>
              <p className="text-base leading-relaxed">
                {"When I'm not in full-on developer mode, you can find me hovering around on Twitter or on indie hacker communities, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub."}
              </p>
            </div>

            {/* Stats */}
            <div
              data-about
              className="mt-8 flex flex-wrap gap-8"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              {[
                { value: "7+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "30+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-mono text-2xl font-bold text-primary text-glow-cyan">
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
