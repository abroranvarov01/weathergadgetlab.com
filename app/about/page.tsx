import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-20">
      {/* Back button */}
      <div className="sticky top-0 z-30 backdrop-blur-md border-b border-neon-cyan/20 bg-background/80">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-cyan/80 transition-colors font-mono text-sm"
          >
            <ChevronLeft className="h-5 w-5" />
            Back to Archive
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block holographic rounded-lg px-6 py-3 backdrop-blur-sm">
            <p className="font-mono text-sm text-neon-amber uppercase tracking-wider">Archive Documentation</p>
          </div>

          <h1 className="font-mono text-5xl font-bold md:text-6xl lg:text-7xl text-balance">
            <span className="text-neon-amber">The Lab</span>
          </h1>

          <p className="text-2xl font-bold italic text-neon-pink">"Weather meets Sound. Science meets Soul."</p>
        </div>

        {/* Content with terminal-style animation */}
        <div className="space-y-12">
          <section className="holographic rounded-lg p-8 backdrop-blur-sm space-y-6 holo-fade">
            <h2 className="font-mono text-2xl font-bold text-neon-cyan">Our Origins</h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Welcome to <span className="text-neon-cyan font-bold">Weather Gadget Lab</span>, an interactive capsule
                opened from the year 2080. We exist at the intersection of meteorological precision and sonic artistry,
                where technology transcends its utilitarian purpose and becomes art.
              </p>
              <p>
                Founded in the late 21st century, our mission has been to preserve and celebrate the evolution of
                weather monitoring technology alongside the musical instruments that defined generations. Each piece in
                our collection tells a story—not just of technological advancement, but of human creativity and our
                eternal quest to understand both our environment and ourselves.
              </p>
            </div>
          </section>

          <section
            className="holographic rounded-lg p-8 backdrop-blur-sm space-y-6 holo-fade"
            style={{ animationDelay: "200ms" }}
          >
            <h2 className="font-mono text-2xl font-bold text-neon-pink">Our Philosophy</h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                We believe that understanding our atmospheric environment should be as beautiful as the melodies we
                create within it. From the analog pioneers of the 1970s to the holographic systems of 2080, each era
                brought its own aesthetic and innovation.
              </p>
              <p>
                The neon displays of the 1980s. The smart connectivity of Y2K. The AI predictions of the 2020s. The
                holographic interfaces of today. Each technological leap preserved in our archive represents a moment
                when form met function in perfect harmony.
              </p>
            </div>
          </section>

          <section
            className="holographic rounded-lg p-8 backdrop-blur-sm space-y-6 holo-fade"
            style={{ animationDelay: "400ms" }}
          >
            <h2 className="font-mono text-2xl font-bold text-neon-amber">What We Curate</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="font-mono text-xl text-neon-cyan">Weather Technology</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-amber">▸</span>
                    <span>Vintage thermometers and barometers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-amber">▸</span>
                    <span>Modern smart weather stations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-amber">▸</span>
                    <span>AI-powered prediction systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-amber">▸</span>
                    <span>Holographic atmospheric displays</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono text-xl text-neon-pink">Musical Instruments</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-amber">▸</span>
                    <span>Retro guitar picks and accessories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-amber">▸</span>
                    <span>Neon-enhanced electric guitars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-amber">▸</span>
                    <span>Vintage tube amplifiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-amber">▸</span>
                    <span>Digital-analog hybrid systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section
            className="holographic rounded-lg p-8 backdrop-blur-sm space-y-6 holo-fade"
            style={{ animationDelay: "600ms" }}
          >
            <h2 className="font-mono text-2xl font-bold text-neon-cyan">Join the Archive</h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Whether you're a weather enthusiast, a musician, a tech collector, or simply someone who appreciates
                beautiful design, our archive welcomes you. Each review, each product, each piece of content is crafted
                with care to transport you through time.
              </p>
              <p>
                As an Amazon Associate, we earn from qualifying purchases, which helps us maintain this archive and
                continue our mission of preserving retro-futuristic technology for future generations.
              </p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-6">
          <p className="font-mono text-xl text-neon-pink">Ready to explore?</p>
          <Link href="/">
            <Button
              size="lg"
              className="neon-pulse bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
            >
              Enter the Archive
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
