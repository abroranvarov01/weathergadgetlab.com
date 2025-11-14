import { Music } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const guitarPicks = [
  {
    slug: "strato-pick-elite",
    name: "Strato Pick Elite",
    image: "/futuristic-guitar-pick-with-neon-edges-and-metalli.jpg",
    rating: 5.0,
    features: ["Ergonomic grip", "Weather-resistant", "Precision edges"],
  },
  {
    slug: "thunder-plectrum",
    name: "Thunder Plectrum",
    image: "/electric-blue-guitar-pick-with-lightning-design.jpg",
    rating: 4.9,
    features: ["Enhanced durability", "Non-slip surface", "Perfect tone"],
  },
  {
    slug: "cosmic-shred-master",
    name: "Cosmic Shred Master",
    image: "/galaxy-themed-guitar-pick-with-holographic-coating.jpg",
    rating: 4.8,
    features: ["Ultra-smooth glide", "Temperature stable", "Premium material"],
  },
  {
    slug: "neon-strike-x7",
    name: "Neon Strike X-7",
    image: "/neon-strike-guitar-pick-with-glowing-edges.jpg",
    rating: 4.9,
    features: ["Glow-in-dark edges", "Anti-slip texture", "Balanced weight"],
  },
  {
    slug: "aurora-blade-pro",
    name: "Aurora Blade Pro",
    image: "/aurora-blade-guitar-pick-holographic-rainbow.jpg",
    rating: 4.7,
    features: ["Rainbow holographic", "Flexible core", "High precision"],
  },
]

export default function GuitarPicksPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-3 border border-secondary/30 rounded-full bg-secondary/5 backdrop-blur-sm">
              <Music className="w-5 h-5 text-secondary animate-pulse" />
              <span className="font-mono text-sm text-secondary uppercase tracking-wider">Guitar Picks</span>
            </div>
          </div>
          <h1 className="font-mono text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-secondary">Premium</span> <span className="text-accent">Guitar</span>{" "}
            <span className="text-foreground">Picks</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Weather-inspired guitar picks crafted with precision materials. Each pick is engineered for optimal
            performance in any climate condition.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {guitarPicks.map((pick) => (
            <div
              key={pick.slug}
              className="group relative holographic rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="block">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={pick.image || "/placeholder.svg"}
                    alt={pick.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-mono text-xl font-bold text-secondary mb-2">{pick.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(pick.rating) ? "text-accent" : "text-muted"}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{pick.rating}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pick.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2 relative z-10">
                    <Link href={`/products/${pick.slug}`} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-secondary/50 hover:bg-secondary/10 hover:border-secondary transition-all bg-transparent"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center holographic rounded-2xl p-12">
          <h2 className="font-mono text-3xl font-bold mb-4 text-secondary">Join Our Community</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Share your music and discover how our picks enhance your sound in any weather condition.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-secondary hover:bg-accent text-background font-mono font-bold shadow-[0_0_30px_rgba(240,154,255,0.3)]"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
