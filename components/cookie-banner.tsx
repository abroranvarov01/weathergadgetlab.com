"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 holo-fade">
      <div className="holographic mx-auto max-w-4xl rounded-lg p-6 backdrop-blur-md">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-foreground">
            This site uses cookies to enhance experience and analyze usage. By continuing, you consent.
          </p>
          <Button
            onClick={acceptCookies}
            className="shrink-0 neon-pulse bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Accept & Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
