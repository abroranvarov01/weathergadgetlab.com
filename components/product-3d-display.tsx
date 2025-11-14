"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  slug: string
  name: string
  category: string
  price: string
  image: string
  rating: number
  features: string[]
}

interface Product3DDisplayProps {
  products: Product[]
}

export function Product3DDisplay({ products }: Product3DDisplayProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const faceAngle = 360 / products.length
    const currentFace = Math.floor((rotation % 360) / faceAngle)
    setCurrentIndex(currentFace)
  }, [rotation, products.length])

  const handleNext = () => {
    const faceAngle = 360 / products.length
    setRotation((prev) => prev + faceAngle)
  }

  const handlePrev = () => {
    const faceAngle = 360 / products.length
    setRotation((prev) => prev - faceAngle)
  }

  return (
    <div className="relative">
      <div className="text-center mb-8">
        <div className="inline-block holographic rounded-lg px-6 py-3 backdrop-blur-sm">
          <p className="font-mono text-sm text-neon-amber uppercase tracking-wider">
            3D Archive Display — Rotate to Explore
          </p>
        </div>
      </div>

      <div className="relative h-[500px] perspective-1000 flex items-center justify-center">
        {/* 3D Cube Container */}
        <div
          className="relative h-80 w-80 preserve-3d transition-transform duration-1000"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {products.map((product, i) => {
            const faceAngle = (360 / products.length) * i
            const translateZ = 200 // Distance from center

            return (
              <div
                key={product.slug}
                className="absolute inset-0 backface-hidden"
                style={{
                  transform: `rotateY(${faceAngle}deg) translateZ(${translateZ}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="holographic rounded-lg overflow-hidden backdrop-blur-sm h-full glow-cyan hover:scale-105 transition-transform cursor-pointer">
                    <div className="relative h-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/30 to-transparent" />

                      <div className="absolute bottom-2 left-0 right-0 px-4 py-2 text-center">
                        <h3 className="font-mono text-sm font-bold text-neon-cyan mb-1">{product.name}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Navigation Controls */}
      </div>

      {/* Current Product Info */}
      <div className="mt-12 text-center"></div>
    </div>
  )
}
