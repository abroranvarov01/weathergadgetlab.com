"use client"

import Image from "next/image"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ava Reynolds",
      role: "Weather Enthusiast",
      avatar: "/smiling-woman-glasses.png",
      comment: "The accuracy is mind-blowing. Like having a meteorologist in my living room.",
      rating: 5,
    },
    {
      name: "Liam Frost",
      role: "Musician",
      avatar: "/man-playing-guitar.png",
      comment: "These retro picks bring that vintage sound I have been searching for years.",
      rating: 5,
    },
    {
      name: "Jade Nakamura",
      role: "Smart Home Designer",
      avatar: "/asian-woman-professional.png",
      comment: "Perfect blend of aesthetics and functionality. Every device is a conversation starter.",
      rating: 5,
    },
    {
      name: "Carlos Vega",
      role: "Tech Collector",
      avatar: "/bearded-man-portrait.png",
      comment: "The holographic interface is straight out of my childhood sci-fi dreams.",
      rating: 5,
    },
    {
      name: "Elina Hart",
      role: "Environmental Scientist",
      avatar: "/woman-scientist.png",
      comment: "Data precision meets beautiful design. This is the future of home weather monitoring.",
      rating: 5,
    },
  ]

  return (
    <section className="relative px-4 py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-mono text-4xl font-bold md:text-5xl text-neon-pink text-balance">
            Field Notes — User Archives
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">Testimonials from explorers across time</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="holographic rounded-lg p-6 backdrop-blur-sm glitch-hover space-y-4 holo-fade"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Polaroid-style header */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-neon-cyan glow-cyan shrink-0">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-neon-amber font-mono">{testimonial.role}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-neon-amber text-neon-amber" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm text-foreground/80 leading-relaxed italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
