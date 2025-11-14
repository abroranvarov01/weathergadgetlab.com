"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from 'lucide-react'

export function GuitarPicksSection() {
  const reviews = [
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
  ]

  return (
    <section className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-8">
          <h2 className="font-mono text-4xl font-bold md:text-5xl text-neon-pink text-balance">
            Retro Guitar Picks & Gear
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Musical artifacts from when sound became light
          </p>
        </div>

        <div className="flex justify-center mb-16"></div>

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
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/20 to-transparent animate-scan" />
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="font-mono text-xs px-3 py-1 rounded-full backdrop-blur-md glow-pink text-neon-pink border border-neon-pink">
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

                  <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-neon-pink transition-colors text-balance">
                    {review.title}
                  </h2>

                  <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{review.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <span className="font-mono text-neon-pink">{review.author}</span>
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
