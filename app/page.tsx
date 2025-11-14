import { HeroSection } from "@/components/sections/hero-section"
import { MissionSection } from "@/components/sections/mission-section"
import { WeatherStationsSection } from "@/components/sections/weather-stations-section"
import { GuitarPicksSection } from "@/components/sections/guitar-picks-section"
import { VideoSection } from "@/components/sections/video-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { CRTOverlay } from "@/components/crt-overlay"
import { TemperatureIndicator } from "@/components/temperature-indicator"
import { CookieBanner } from "@/components/cookie-banner"
import { CursorGlow } from "@/components/cursor-glow"
import { AmbientSound } from "@/components/ambient-sound"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <CRTOverlay />
      <CursorGlow />
      <TemperatureIndicator />
      <AmbientSound />

      <HeroSection />
      <MissionSection />
      <WeatherStationsSection />
      <GuitarPicksSection />
      <VideoSection />
      <TimelineSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />

      <CookieBanner />
    </main>
  )
}
