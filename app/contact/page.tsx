"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, MessageSquare, User, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-neon-cyan hover:text-neon-pink">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="holographic rounded-lg p-8 backdrop-blur-sm">
          <h1 className="font-mono text-4xl font-bold text-neon-cyan mb-6 glow-cyan">Contact Us</h1>

          <p className="text-foreground/90 mb-8">
            Have questions about our weather gadgets or want to share your experience from the future? We'd love to hear
            from you. Send us a transmission through the temporal network.
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-neon-cyan/10 border border-neon-cyan rounded-lg">
              <p className="text-neon-cyan font-mono text-sm">
                ✓ Message transmitted successfully! We'll respond within 24-48 hours.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="flex items-center gap-2 font-mono text-sm text-neon-amber">
                <User className="h-4 w-4" />
                Name
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card/50 border-neon-cyan/30 focus:border-neon-cyan"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="flex items-center gap-2 font-mono text-sm text-neon-amber">
                <Mail className="h-4 w-4" />
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card/50 border-neon-cyan/30 focus:border-neon-cyan"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="flex items-center gap-2 font-mono text-sm text-neon-amber">
                <MessageSquare className="h-4 w-4" />
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="bg-card/50 border-neon-cyan/30 focus:border-neon-cyan"
                placeholder="What's this about?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center gap-2 font-mono text-sm text-neon-amber">
                <MessageSquare className="h-4 w-4" />
                Message
              </label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card/50 border-neon-cyan/30 focus:border-neon-cyan min-h-[150px]"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-neon-cyan/20 hover:bg-neon-cyan/30 border border-neon-cyan text-neon-cyan font-mono"
            >
              {isSubmitting ? (
                <>Processing transmission...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-neon-cyan/30">
            <h3 className="font-mono text-neon-pink mb-4 font-bold">Other Ways to Connect</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong className="text-neon-amber">Email:</strong>{" "}
                <a href="mailto:contact@weathergadgetlab.com" className="text-neon-cyan hover:underline">
                  contact@weathergadgetlab.com
                </a>
              </p>
              <p>
                <strong className="text-neon-amber">Response Time:</strong> Within 24-48 hours (Earth time)
              </p>
              <p>
                <strong className="text-neon-amber">Archive Location:</strong> Temporal Coordinates 2080.12.31
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
