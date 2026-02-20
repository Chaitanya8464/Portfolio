"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-contact]")
            items.forEach((item, i) => {
              const el = item as HTMLElement
              setTimeout(() => {
                el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
                el.style.opacity = "1"
                el.style.transform = "translateY(0)"
              }, i * 150)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 bg-surface"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-secondary uppercase">
            Get In Touch
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
            Contact <span className="text-secondary">Me</span>
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-8">
            <div
              data-contact
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <h3 className="mb-4 font-mono text-xl font-bold text-foreground">
                {"Let's work together"}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!"}
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "hello@evrenshah.dev", href: "mailto:hello@evrenshah.dev" },
                { icon: Phone, label: "+91 123 456 7890", href: "tel:+911234567890" },
                { icon: MapPin, label: "Mumbai, India", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  data-contact
                  href={item.href}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary"
                  style={{ opacity: 0, transform: "translateY(30px)" }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div
              data-contact
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary/30"
              />
            </div>

            <div
              data-contact
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary/30"
              />
            </div>

            <div
              data-contact
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary/30"
              />
            </div>

            <div
              data-contact
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] disabled:opacity-50"
                disabled={submitted}
              >
                {submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
