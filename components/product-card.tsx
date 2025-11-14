"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  slug: string
  name: string
  category: string
  price: string
  image: string
  rating: number
  features: string[]
}

interface ProductCardProps {
  product: Product
  variant?: "weather" | "music"
}

export function ProductCard({ product, variant = "weather" }: ProductCardProps) {
  const glowClass = variant === "music" ? "glow-pink" : "glow-cyan"
  const textClass = variant === "music" ? "text-neon-pink" : "text-neon-cyan"

  return (
    <div className="group relative holographic rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105">
      {/* Scan effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Category badge */}
          <div className="absolute top-4 right-4 z-10">
            <span
              className={`font-mono text-xs px-3 py-1 rounded-full backdrop-blur-md ${glowClass} ${textClass} border border-current`}
            >
              {product.category}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-mono text-xl font-bold mb-2 text-foreground group-hover:${textClass} transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-neon-amber text-neon-amber" : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.rating}</span>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-1">
            {product.features.map((feature, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="text-neon-amber">▸</span> {feature}
              </li>
            ))}
          </ul>

          {/* Centered button */}
          <div className="flex gap-2 pt-4 border-t border-border relative z-10">
            <Link href={`/products/${product.slug}`} className="flex-1">
              <Button
                size="sm"
                className={`w-full neon-pulse bg-transparent border ${
                  variant === "music"
                    ? "border-neon-pink text-neon-pink hover:bg-neon-pink/10"
                    : "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
                }`}
              >
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
