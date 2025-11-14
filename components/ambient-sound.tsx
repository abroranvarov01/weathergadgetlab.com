"use client"

import { useEffect, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio context for ambient sound
    // Note: In production, you would load actual audio files
    // For demo, we're showing the UI toggle
    const audioElement = new Audio()
    setAudio(audioElement)

    return () => {
      if (audioElement) {
        audioElement.pause()
        audioElement.src = ""
      }
    }
  }, [])

  const toggleSound = () => {
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      // In production: audio.src = '/sounds/ambient-electronics.mp3'
      // audio.loop = true
      // audio.volume = 0.3
      // audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 left-6 z-40 holographic rounded-full p-4 backdrop-blur-sm hover:glow-cyan transition-all"
      aria-label={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
    >
      {isPlaying ? (
        <Volume2 className="h-5 w-5 text-neon-cyan" />
      ) : (
        <VolumeX className="h-5 w-5 text-muted-foreground" />
      )}
    </button>
  )
}
