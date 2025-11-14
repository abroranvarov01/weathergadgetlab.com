"use client"

import { useState } from "react"

export function GuitarStringEffect() {
  const [isVibrating, setIsVibrating] = useState(false)

  const playNote = () => {
    setIsVibrating(true)

    // Web Audio API for string sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    // Guitar-like sound (E string)
    oscillator.frequency.value = 329.63
    oscillator.type = "triangle"

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 1.5)

    setTimeout(() => {
      setIsVibrating(false)
      audioContext.close()
    }, 1500)
  }

  return (
    <div className="inline-block cursor-pointer" onClick={playNote}>
      <svg width="100" height="40" viewBox="0 0 100 40" className={isVibrating ? "string-vibrate" : ""}>
        <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="2" className="text-neon-pink" />
      </svg>
      <style jsx>{`
        @keyframes string-vibrate {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-3px); }
          75% { transform: translateY(3px); }
        }
        .string-vibrate {
          animation: string-vibrate 0.1s ease-in-out 15;
        }
      `}</style>
    </div>
  )
}
