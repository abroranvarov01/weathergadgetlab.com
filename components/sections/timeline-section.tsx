"use client"

import { useState } from "react"
import Image from "next/image"

export function TimelineSection() {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null)

  const timeline = [
    {
      year: 1970,
      event: "First Digital Thermometer",
      device: "Analog-Digital Hybrid Sensor",
      image: "/vintage-1970s-digital-thermometer.jpg",
    },
    {
      year: 1985,
      event: "Neon Display Era",
      device: "NeoWeather Display Unit",
      image: "/1980s-neon-weather-display.jpg",
    },
    {
      year: 2000,
      event: "Smart Home Integration",
      device: "ConnectStation 2000",
      image: "/y2k-smart-weather-station.jpg",
    },
    {
      year: 2025,
      event: "AI Weather Prediction",
      device: "Neural Forecast System",
      image: "/modern-ai-weather-station.jpg",
    },
    {
      year: 2080,
      event: "Holographic Archives",
      device: "Quantum Weather Capsule",
      image: "/futuristic-holographic-weather-device.jpg",
    },
  ]

  return (
    <section className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-mono text-4xl font-bold md:text-5xl text-balance">
            <span className="text-neon-cyan">Time Records</span> — Technology Timeline
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Journey through the evolution of weather technology
          </p>
        </div>

        {/* Timeline visualization */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-pink to-neon-amber -translate-x-1/2" />

          <div className="space-y-16">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-center ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                onMouseEnter={() => setHoveredYear(item.year)}
                onMouseLeave={() => setHoveredYear(null)}
              >
                {/* Content */}
                <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div
                    className={`holographic rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-300 ${
                      hoveredYear === item.year ? "scale-105 glow-cyan" : ""
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.device} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    </div>

                    <div className="p-6">
                      <div className="font-mono text-3xl font-bold text-neon-amber mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-neon-cyan mb-1">{item.event}</h3>
                      <p className="text-sm text-muted-foreground">{item.device}</p>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="relative z-10 flex items-center justify-center w-2/12">
                  <div
                    className={`h-4 w-4 rounded-full transition-all duration-300 ${
                      hoveredYear === item.year
                        ? "bg-neon-cyan glow-cyan scale-150"
                        : "bg-neon-pink border-2 border-background"
                    }`}
                  />
                </div>

                {/* Spacer */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
