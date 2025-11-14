import { Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const weatherStations = [
  {
    slug: "tempstation-x1",
    name: "TempStation X1",
    image: "/futuristic-weather-station-with-neon-display-and-s.jpg",
    rating: 4.9,
    features: ["Multi-sensor array", "Holographic display", "AI predictions"],
  },
  {
    slug: "climatecore-pro",
    name: "ClimateCore Pro",
    image: "/advanced-climate-monitoring-device-with-glowing-in.jpg",
    rating: 4.8,
    features: ["Real-time monitoring", "Cloud sync", "Storm alerts"],
  },
  {
    slug: "skywatch-ultra",
    name: "SkyWatch Ultra",
    image: "/premium-weather-tracking-device-with-digital-scree.jpg",
    rating: 4.7,
    features: ["Atmospheric analysis", "UV tracking", "Wind patterns"],
  },
  {
    slug: "atmosphere-elite",
    name: "AtmoSphere Elite",
    image: "/futuristic-weather-station-elite-with-holographic.jpg",
    rating: 4.9,
    features: ["Quantum sensors", "Neural network AI", "Space weather tracking"],
  },
  {
    slug: "stormtracker-z9",
    name: "StormTracker Z9",
    image: "/advanced-storm-tracking-weather-station-neon.jpg",
    rating: 4.8,
    features: ["Tornado detection", "Hurricane tracking", "Lightning analysis"],
  },
]

export default function WeatherStationsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-3 border border-accent/30 rounded-full bg-accent/5 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-accent animate-pulse" />
              <span className="font-mono text-sm text-accent uppercase tracking-wider">Weather Stations</span>
            </div>
          </div>
          <h1 className="font-mono text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-accent">Advanced</span> <span className="text-secondary">Weather</span>{" "}
            <span className="text-foreground">Monitoring</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Cutting-edge atmospheric analysis tools designed in 2080. Each station features AI-powered predictions and
            real-time environmental monitoring.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {weatherStations.map((station) => (
            <div
              key={station.slug}
              className="group relative holographic rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="block">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={station.image || "/placeholder.svg"}
                    alt={station.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-mono text-xl font-bold text-accent mb-2">{station.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(station.rating) ? "text-secondary" : "text-muted"}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{station.rating}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {station.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2 relative z-10">
                    <Link href={`/products/${station.slug}`} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-accent/50 hover:bg-accent/10 hover:border-accent transition-all bg-transparent"
                      >
                        View Details
                      </Button>
                    </Link>
                    <Button className="flex-1 bg-accent/20 hover:bg-accent/30 border border-accent/50 transition-all">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center holographic rounded-2xl p-12">
          <h2 className="font-mono text-3xl font-bold mb-4 text-accent">Need Help Choosing?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team of weather experts can help you select the perfect monitoring solution for your needs.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-secondary text-background font-mono font-bold shadow-[0_0_30px_rgba(56,255,248,0.3)]"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
