"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ExternalLink, Github, Subtitles } from "lucide-react"

const projects = [
   {
    number: "01",
    title: "CampusCare - A complete solution for campus grievance redressal",
    description:
      "A comprehensive campus management system designed to streamline administrative tasks, student services, and faculty coordination. Built with modern web technologies for efficient campus operations.",
    image: "/images/blinkxai.png",
    tags: ["React 19 ", " Firebase (Firestore + Auth)", " Tailwind CSS", " Framer Motion"],
    liveUrl: "https://campus-care-mu.vercel.app/",
    githubUrl: "https://github.com/Chaitanya8464/CampusCare",
  },


  {
    number: "02",
    title: "BlinxAI - AI-Powered Real-Time Chat Platform",
    
    description:
      "An AI-native full-stack real-time chat platform powered by Model Context Protocol (MCP) and Spring AI. Features context-aware LLM conversations, bi-directional WebSocket pipelines, and cloud-native scalability with auto-scaling from 2 to 10 pods",
    image: "/images/campuscare.png",
    tags: ["React 19", " MongoDB", "Java 17", "Docker", "MCP"],
    liveUrl: "https://blinxai.me/",
    githubUrl: "https://github.com/Chaitanya8464/ConnectOthers",
  },

  
  {
    number: "03",
    title: "Attend By Face - Attendance Face Recognition System",
    description:
      "An attendance management system that utilizes facial recognition technology to automate the process of recording attendance. It provides a secure and efficient way to track attendance in educational institutions and workplaces.",
    image: "/images/face-attendance.png",
    tags: ["Python", "OpenCV", "face_recognition", "SQLite", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/Chaitanya8464/Face-Attendance",
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
                el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
                el.style.opacity = "1"
                el.style.transform = "translateY(0)"
              }, i * 150)
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
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-md border border-border bg-surface px-3 py-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
            Portfolio
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Some projects are still under development — check out the completed ones below.
          </p>
        </div>

        <div className="flex flex-col gap-30">
          {projects.map((project, i) => (
            <div
              key={project.title}
              data-project
              className={`flex flex-col items-center gap-8 md:gap-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ opacity: 0, transform: "translateY(40px)" }}
            >
              {/* Project image */}
              <div className="group relative flex-1 w-full max-w-md">
                <div className="relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:border-primary hover:shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={320}
                    className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Project info */}
              <div className="flex-1">
                <span className="mb-2 block font-mono text-5xl font-bold text-muted-foreground/30">
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
                      className="rounded-md border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
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
                    className="flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 button-press"
                  >
                    Live Demo
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md border border-border px-5 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary button-press"
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
