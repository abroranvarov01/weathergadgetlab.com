"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from 'lucide-react'
import { Product3DDisplay } from "@/components/product-3d-display"

export function WeatherStationsSection() {
  const products = [
    {
      slug: "tempstation-x1",
      name: "TempStation X1",
      category: "Weather",
      price: "$299.99",
      image: "/futuristic-weather-station-with-neon-display-and-s.jpg",
      rating: 4.9,
      features: ["Multi-sensor array", "Holographic display", "AI predictions"],
    },
    {
      slug: "climatecore-pro",
      name: "ClimateCore Pro",
      category: "Weather",
      price: "$349.99",
      image: "/advanced-climate-monitoring-device-with-glowing-in.jpg",
      rating: 4.8,
      features: ["Real-time monitoring", "Cloud sync", "Storm alerts"],
    },
    {
      slug: "skywatch-ultra",
      name: "SkyWatch Ultra",
      category: "Weather",
      price: "$279.99",
      image: "/premium-weather-tracking-device-with-digital-scree.jpg",
      rating: 4.7,
      features: ["Atmospheric analysis", "UV tracking", "Wind patterns"],
    },
  ]

  const reviews = [
    {
      id: 1,
      slug: "lacrosse-v42-pro",
      category: "Weather Stations",
      title: "La Crosse V42-PRO Review – Best Mid-Range Wi-Fi Station 2025",
      excerpt:
        "Full hands-on test of the professional remote-monitoring weather station with wind, rain, and AccuWeather integration.",
      image: "https://m.media-amazon.com/images/I/81OX4afhGEL._AC_SX679_.jpg",
      rating: 4.6,
      author: "WeatherTech Reviewer",
      date: "2025-11-10",
    },
    {
      id: 2,
      slug: "govee-h5103",
      category: "Weather Stations",
      title: "Govee H5103 – The Smart Hygrometer Everyone Actually Buys",
      excerpt:
        "Accurate, affordable, and app-connected temperature & humidity monitoring that outperforms more expensive units.",
      image: "https://m.media-amazon.com/images/I/61s3HPzcZsL._SX522_.jpg",
      rating: 4.7,
      author: "Smart Home Lab",
      date: "2025-10-28",
    },
    {
      id: 3,
      slug: "ambient-ws-5000",
      category: "Weather Stations",
      title: "Ambient Weather WS-5000 Ultrasonic Pro – Worth the Upgrade?",
      excerpt:
        "No moving parts, solar powered, and pro-grade accuracy. The ultimate enthusiast weather station tested over 6 months.",
      image: "https://m.media-amazon.com/images/I/516oV9-11DL._AC_SX679_.jpg",
      rating: 4.8,
      author: "Storm Tracker Pro",
      date: "2025-10-15",
    },
  ]

  return (
    <section className="relative px-4 py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-mono text-4xl font-bold md:text-5xl text-neon-cyan text-balance">
            Top Home Weather Stations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Precision instruments from the golden age of meteorological innovation
          </p>
        </div>

        <div className="mb-16">
          <Product3DDisplay products={products} />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Link
              key={review.id}
              href={`/products/${review.slug}`}
              className="group holo-fade"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <article className="holographic rounded-lg overflow-hidden backdrop-blur-sm glitch-hover transition-all duration-300 hover:scale-105 h-full flex flex-col">
                {/* Image with scan effect */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={review.image || "/placeholder.svg"}
                    alt={review.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Scan effect overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent animate-scan" />
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="font-mono text-xs px-3 py-1 rounded-full backdrop-blur-md glow-cyan text-neon-cyan border border-neon-cyan">
                      {review.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(review.rating) ? "fill-neon-amber text-neon-amber" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-neon-amber font-mono">{review.rating}</span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-neon-cyan transition-colors text-balance">
                    {review.title}
                  </h2>

                  <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{review.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <span className="font-mono text-neon-amber">{review.author}</span>
                    <time className="font-mono">{review.date}</time>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
