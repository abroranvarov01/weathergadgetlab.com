"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="contact" className="relative px-4 py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-2xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-mono text-4xl font-bold md:text-5xl text-neon-cyan text-balance">Transmit Message</h2>
          <p className="text-lg text-muted-foreground text-pretty">Send a signal through time to reach our archives</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="holographic rounded-lg p-8 backdrop-blur-sm space-y-6">
            {/* Name field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-mono text-neon-amber uppercase tracking-wider">
                Identification
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background/50 border-neon-cyan/30 focus:border-neon-cyan text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-mono text-neon-amber uppercase tracking-wider">
                Communication Channel
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@future.net"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background/50 border-neon-cyan/30 focus:border-neon-cyan text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>

            {/* Message field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-mono text-neon-amber uppercase tracking-wider">
                Transmission Content
              </label>
              <Textarea
                id="message"
                placeholder="Your message to the lab..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background/50 border-neon-cyan/30 focus:border-neon-cyan text-foreground placeholder:text-muted-foreground min-h-32"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full neon-pulse bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
            >
              <Send className="mr-2 h-5 w-5" />
              Send Transmission
            </Button>
          </div>
        </form>

        {/* Contact links */}
        
      </div>
    </section>
  )
}
