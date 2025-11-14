"use client"

import { useEffect, useState } from "react"

export function TemperatureIndicator() {
  const [temp, setTemp] = useState<number | null>(null)
  const [location, setLocation] = useState<string>("Loading...")

  useEffect(() => {
    // Simulated temperature - in production, fetch from weather API
    const updateTemp = () => {
      // Random temperature between 15-30°C for demo
      setTemp(Math.floor(Math.random() * 15) + 15)
      setLocation("System")
    }

    updateTemp()
    const interval = setInterval(updateTemp, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  if (temp === null) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 font-mono">
      <div className="holographic rounded-lg p-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="text-neon-cyan text-4xl font-bold">{temp}°C</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider">
            <div>{location}</div>
            <div className="text-neon-amber">Live</div>
          </div>
        </div>
      </div>
    </div>
  )
}
