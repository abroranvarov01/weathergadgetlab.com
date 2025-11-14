"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [bootText, setBootText] = useState("")
  const [showContent, setShowContent] = useState(false)
  const fullText = "BOOTING... ACCESS GRANTED"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setBootText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
        setTimeout(() => setShowContent(true), 500)
      }
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Holographic thermometer */}
        <div className="absolute left-1/4 top-1/2 h-64 w-16 -translate-y-1/2 opacity-20">
          <div className="h-full w-full rounded-full border-2 border-neon-cyan glow-cyan animate-pulse" />
        </div>

        {/* Rotating guitar silhouette */}
        <div className="absolute right-1/4 top-1/2 h-48 w-48 -translate-y-1/2 opacity-10 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <path
              d="M30 20 L30 80 L40 75 L40 25 Z M40 50 L70 50 M70 40 L70 60"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-neon-pink"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Terminal boot animation */}
        <div className="mb-8 font-mono text-sm text-neon-cyan">
          {bootText}
          <span className="terminal-cursor inline-block h-4 w-2 bg-neon-cyan ml-1" />
        </div>

        {/* Main content with holographic fade-in */}
        {showContent && (
          <div className="holo-fade space-y-8">
            {/* Logo emblem */}
            <div className="mx-auto mb-6 flex items-center justify-center gap-4">
              <div className="h-16 w-16 rounded-full border-2 border-neon-cyan glow-cyan flex items-center justify-center animate-pulse">
                <span className="text-2xl">☄️</span>
              </div>
            </div>

            <h1 className="font-mono text-5xl font-bold leading-tight text-balance md:text-7xl lg:text-8xl">
              <span className="text-neon-cyan">Weather</span> <span className="text-neon-pink">Gadget</span>{" "}
              <span className="text-neon-amber">Lab</span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl lg:text-2xl text-pretty">
              Welcome to the <span className="text-neon-cyan">Capsule</span>. An interactive archive from{" "}
              <span className="text-neon-pink font-mono">2080</span>, where past meets future.
            </p>

            <p className="text-xl text-foreground/80 italic">Where weather meets sound. Science meets soul.</p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="neon-pulse bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 text-lg px-8 py-6"
                onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}
              >
                Enter the Archive
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="mt-12 animate-bounce">
              <ChevronDown className="mx-auto h-8 w-8 text-neon-cyan" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
