import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MissionPage() {
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
          <h1 className="font-mono text-4xl font-bold text-neon-cyan mb-6 glow-cyan">Our Mission</h1>

          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              Welcome to the Weather Gadget Lab – your portal to the meteorological archives of 2080.
            </p>

            <div className="border-l-2 border-neon-pink pl-6 py-4">
              <p className="text-neon-pink font-mono mb-2">Archive Protocol: Active</p>
              <p>
                In the year 2080, weather monitoring evolved beyond simple data collection. It became an art form, a
                symphony of sensors and sound that painted the atmosphere in ways our ancestors could only imagine.
              </p>
            </div>

            <p>
              Our mission is to bridge the temporal gap – bringing you devices that don't just measure weather, but
              transform it into tangible experiences. From holographic displays that project storm systems in your
              living room to guitar picks that resonate with atmospheric pressure, we're redefining the relationship
              between humans and climate.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="holographic p-6 rounded-lg">
                <h3 className="font-mono text-neon-amber mb-3 font-bold">Weather Innovation</h3>
                <p className="text-sm">
                  Advanced atmospheric monitoring systems that combine cutting-edge sensor technology with artistic
                  expression, creating a new paradigm in meteorological observation.
                </p>
              </div>

              <div className="holographic p-6 rounded-lg">
                <h3 className="font-mono text-neon-amber mb-3 font-bold">Sound Integration</h3>
                <p className="text-sm">
                  Unique audio devices that translate weather patterns into musical experiences, allowing you to
                  literally hear the atmosphere in ways never before possible.
                </p>
              </div>
            </div>

            <p>
              Every product in our archive represents a breakthrough moment in weather-tech history. These aren't just
              gadgets – they're time capsules, each one telling a story about how humanity learned to dance with the
              elements rather than simply observe them from afar.
            </p>

            <div className="mt-8 p-6 bg-card/50 rounded-lg border border-neon-cyan/30">
              <h3 className="font-mono text-neon-cyan mb-4 font-bold text-xl">Core Values from 2080</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-neon-pink">▸</span>
                  <span>Innovation without boundaries – where science meets creativity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-pink">▸</span>
                  <span>Accessibility for all – making advanced weather tech available to everyone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-pink">▸</span>
                  <span>Sustainability first – devices designed to last through climate changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-pink">▸</span>
                  <span>Community driven – your feedback shapes the future of weather monitoring</span>
                </li>
              </ul>
            </div>

            <p className="text-center text-neon-amber font-mono mt-8">
              Join us in experiencing the weather of tomorrow, today.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
