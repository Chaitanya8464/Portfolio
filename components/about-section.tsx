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
              <span className="mb-1 inline-block rounded-md border border-border bg-surface px-3 py-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
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
                I am Chaitanya Verma, a passionate Full-Stack Web Developer with experience in building scalable and responsive web applications. My technical expertise includes HTML, CSS, JavaScript, and React.js, along with knowledge of backend development.
              </p>
              <p className="text-base leading-relaxed">
                During my industrial training at Academic Advancement of Information Technology, Mohali, I developed a complete e-commerce platform called Travela, gaining practical experience in modern web technologies and project development.
              </p>
              <p className="text-base leading-relaxed">
                I have also worked on various projects including automation systems and AI-based applications such as Face Recognition Attendance Systems.
              </p>
              <p className="text-base leading-relaxed">
                I am highly motivated to learn new technologies, build impactful solutions, and grow as a professional developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
