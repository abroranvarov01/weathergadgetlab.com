"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Star, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviewsData: Record<string, any> = {
  "1": {
    id: 1,
    category: "Weather",
    title: "Weather Station Pro 9000 Review",
    content: `
      <h2>A Revolution in Home Weather Monitoring</h2>
      <p>The Weather Station Pro 9000 represents a quantum leap in atmospheric monitoring technology. After three months of extensive testing, I can confidently say this device has transformed how I interact with weather data.</p>
      
      <h3>Holographic Display Technology</h3>
      <p>The standout feature is undoubtedly the holographic 3D visualization. Weather patterns emerge from the device in stunning cyan and amber light, creating an almost ethereal display of atmospheric conditions. The interface responds to hand gestures, allowing you to rotate and zoom into specific data points with intuitive movements.</p>
      
      <h3>AI Prediction Accuracy</h3>
      <p>Over our testing period, the AI prediction engine achieved 94% accuracy for 24-hour forecasts and 87% for 7-day predictions. This surpasses traditional weather services and demonstrates the power of localized, real-time sensor arrays combined with machine learning.</p>
      
      <h3>Installation and Setup</h3>
      <p>Setup took approximately 15 minutes. The outdoor sensor module connects via a secure wireless protocol with a range of up to 300 feet. The base station auto-calibrates using GPS and atmospheric pressure readings.</p>
      
      <h3>Verdict</h3>
      <p>The Weather Station Pro 9000 is the future of home weather monitoring. While the price point of $299.99 positions it as a premium device, the combination of accuracy, design, and innovative interface justifies the investment for weather enthusiasts and smart home advocates.</p>
      
      <div class="rating-box">
        <strong>Final Rating: 4.8/5</strong>
        <ul>
          <li>✓ Holographic interface is stunning</li>
          <li>✓ Exceptional prediction accuracy</li>
          <li>✓ Easy installation and setup</li>
          <li>✓ Comprehensive sensor array</li>
          <li>✗ Premium price point</li>
        </ul>
      </div>
    `,
    image: "/futuristic-weather-station-with-holographic-displa.jpg",
    rating: 4.8,
    author: "Tech Archive Team",
    date: "2080-01-15",
    readTime: "8 min read",
  },
}

export default function ReviewDetailPage({ params }: { params: { id: string } }) {
  const review = reviewsData[params.id]

  if (!review) {
    return (
      <main className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <h1 className="font-mono text-4xl font-bold text-neon-pink glitch">Review Not Found</h1>
          <p className="text-muted-foreground">This archive file has been corrupted.</p>
          <Link href="/reviews">
            <Button className="neon-pulse bg-transparent border-2 border-neon-cyan text-neon-cyan">
              Return to Reviews
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen">
      {/* Back button */}
      <div className="sticky top-0 z-30 backdrop-blur-md border-b border-neon-cyan/20 bg-background/80">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-cyan/80 transition-colors font-mono text-sm"
          >
            <ChevronLeft className="h-5 w-5" />
            Back to Reviews
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image src={review.image || "/placeholder.svg"} alt={review.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-8 right-8">
          <span className="font-mono text-sm px-4 py-2 rounded-full backdrop-blur-md glow-cyan text-neon-cyan border border-neon-cyan">
            {review.category}
          </span>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 -mt-32 relative z-10 pb-24">
        {/* Header card */}
        <div className="holographic rounded-lg p-8 md:p-12 backdrop-blur-sm mb-12">
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-neon-cyan mb-6 text-balance">{review.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-neon-amber" />
              <span className="font-mono text-neon-amber">{review.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>{review.date}</time>
            </div>
            <div className="flex items-center gap-2">
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
              <span className="font-mono text-neon-amber">{review.rating}</span>
            </div>
            <div>
              <span>{review.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="holographic rounded-lg p-8 md:p-12 backdrop-blur-sm">
          <div
            className="prose prose-invert max-w-none review-content"
            dangerouslySetInnerHTML={{ __html: review.content }}
          />
        </div>
      </article>

      <style jsx global>{`
        .review-content h2 {
          font-family: var(--font-mono);
          font-size: 2rem;
          font-weight: bold;
          color: #F09AFF;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .review-content h3 {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: bold;
          color: #38FFF8;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        
        .review-content p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        
        .review-content .rating-box {
          margin-top: 2rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(56, 255, 248, 0.1) 0%, rgba(240, 154, 255, 0.1) 100%);
          border: 1px solid rgba(56, 255, 248, 0.3);
          border-radius: 0.5rem;
        }
        
        .review-content .rating-box strong {
          color: #FBC66F;
          font-family: var(--font-mono);
          font-size: 1.25rem;
          display: block;
          margin-bottom: 1rem;
        }
        
        .review-content .rating-box ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .review-content .rating-box li {
          margin: 0.5rem 0;
          color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </main>
  )
}
