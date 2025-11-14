"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    slug: "lacrosse-v42-pro",
    category: "Weather Stations",
    title: "La Crosse V42-PRO Review – Best Mid-Range Wi-Fi Station 2025",
    excerpt: "Full hands-on test of the professional remote-monitoring weather station with wind, rain, and AccuWeather integration.",
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
    excerpt: "Accurate, affordable, and app-connected temperature & humidity monitoring that outperforms more expensive units.",
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
    excerpt: "No moving parts, solar powered, and pro-grade accuracy. The ultimate enthusiast weather station tested over 6 months.",
    image: "https://m.media-amazon.com/images/I/516oV9-11DL._AC_SX679_.jpg",
    rating: 4.8,
    author: "Storm Tracker Pro",
    date: "2025-10-15",
  },
  {
    id: 4,
    slug: "fender-acoustasonic",
    category: "Guitars",
    title: "Fender Acoustasonic Telecaster – Still the King of Hybrid Guitars in 2025",
    excerpt: "Acoustic and electric tones in one instrument. Real-world gig and studio performance after one year of heavy use.",
    image: "https://m.media-amazon.com/images/I/51SUBiqqvpL._AC_SX679_.jpg",
    rating: 4.9,
    author: "Guitar Gear Weekly",
    date: "2025-11-05",
  },
  {
    id: 5,
    slug: "mylywoo-guitar-keychain",
    category: "Guitar Accessories",
    title: "MYLYWOO Mini Guitar Keychain – The Perfect Gift for Guitarists",
    excerpt: "Tiny, detailed, and surprisingly sturdy metal guitar statues that double as keychains or desk ornaments.",
    image: "https://m.media-amazon.com/images/I/71OqOheNtrL._AC_SX679_.jpg",
    rating: 4.6,
    author: "Musician Gifts Guide",
    date: "2025-09-20",
  },
  {
    id: 6,
    slug: "fusion-ms-wb670",
    category: "Marine Audio",
    title: "Fusion Apollo MS-WB670 + 6-Channel Amp – Best Marine Sound System 2025",
    excerpt: "Hideaway head unit with AirPlay 2, DSP, and 900W of clean marine power. Full season on the water review.",
    image: "https://m.media-amazon.com/images/I/519VHXBTfsL._AC_SX679_.jpg",
    rating: 4.8,
    author: "Boat Audio Experts",
    date: "2025-08-12",
  },
  {
    id: 7,
    slug: "topdon-rlink",
    category: "Diagnostic Tools",
    title: "TOPDON RLink J2534 – The Fastest Pass-Thru Tool Under $300",
    excerpt: "Supports CAN-FD, DoIP, and 17+ OEMs. Faster than many $1000+ tools. Real shop comparison with Forscan, ODIS, and Techstream.",
    image: "https://m.media-amazon.com/images/I/81ij+Wynx9L._AC_SX679_.jpg",
    rating: 4.7,
    author: "Auto Diagnostic Pro",
    date: "2025-11-01",
  },
  {
    id: 8,
    slug: "model-decor-lights",
    category: "Outdoor Lighting",
    title: "Model Décor Cerveza Bistro Lights – Patio Party Essential",
    excerpt: "Beer-bottle shaped string lights that survived rain, wind, and endless backyard parties. Still glowing strong.",
    image: "https://m.media-amazon.com/images/I/81hS1umKNAL._AC_SX679_.jpg",
    rating: 4.5,
    author: "Backyard Living",
    date: "2025-07-18",
  },
  {
    id: 9,
    slug: "smartwings-zebra-shades",
    category: "Smart Home",
    title: "SmartWings Motorized Zebra Shades – HomeKit + Alexa Done Right",
    excerpt: "True 85% blackout, quiet motors, and native HomeKit support. Custom-sized blinds tested over 8 months.",
    image: "https://m.media-amazon.com/images/I/71mtU+FT-3L._AC_SX679_.jpg",
    rating: 4.8,
    author: "Smart Home Tester",
    date: "2025-10-05",
  },
]

export default function ReviewsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All")

  const filters = ["All", "Weather", "Music", "Retro Tech"]

  const filteredReviews =
    selectedFilter === "All" ? reviews : reviews.filter((review) => review.category === selectedFilter)

  return (
    <main className="relative min-h-screen">
      {/* Header */}
      <section className="relative px-4 py-24 md:py-32 pt-32 border-b border-neon-cyan/20">
        <div className="mx-auto max-w-7xl text-center space-y-6">
          <div className="inline-block holographic rounded-lg px-6 py-3 backdrop-blur-sm mb-4">
            <p className="font-mono text-sm text-neon-amber uppercase tracking-wider">Archive Files</p>
          </div>

          <h1 className="font-mono text-5xl font-bold md:text-6xl lg:text-7xl text-balance">
            <span className="text-neon-cyan">Review</span> <span className="text-neon-pink">Archives</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Deep analyses and field tests from across the decades
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-30 backdrop-blur-md border-b border-neon-cyan/20 bg-background/80">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Filter className="h-5 w-5 text-neon-cyan" />
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                variant="outline"
                className={`font-mono text-sm transition-all ${
                  selectedFilter === filter
                    ? "bg-neon-cyan/10 border-neon-cyan text-neon-cyan glow-cyan"
                    : "border-neon-cyan/30 text-foreground hover:border-neon-cyan hover:text-neon-cyan"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredReviews.map((review, i) => (
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

      {/* Back to home */}
      <section className="relative px-4 py-16 border-t border-neon-cyan/20">
        <div className="mx-auto max-w-7xl text-center">
          <Link href="/">
            <Button
              size="lg"
              className="neon-pulse bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
            >
              Return to Main Archive
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
