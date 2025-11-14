import Image from "next/image"
import Link from "next/link"
import { Star, ChevronLeft, ShoppingCart, Zap, Shield, RefreshCw } from 'lucide-react'
import { Button } from "@/components/ui/button"

const products: Record<string, any> = {
  "lacrosse-v42-pro": {
    slug: "lacrosse-v42-pro",
    name: "La Crosse V42 Pro Weather Station",
    category: "Weather Stations",
    price: "$199.95",
    images: ["https://m.media-amazon.com/images/I/81OX4afhGEL._AC_SX679_.jpg"],
    rating: 4.2,
    reviews: 1330,
    description:
      "The La Crosse V42 Pro represents advanced home weather monitoring with Wi-Fi connectivity and remote sensors. Featuring dynamic forecasting, wind and rain gauges, and smart app integration, it provides comprehensive meteorological data for your home or office.",
    features: [
      "Dynamic color forecast icons",
      "Wi-Fi extended forecasting",
      "Wind speed and direction monitoring",
      "Rainfall measurements with history",
      "Indoor/outdoor temperature and humidity",
      "Customizable alerts and notifications",
      "AccuWeather data streaming",
      "UV index and air quality tracking",
      "Mobile app integration",
      "Seasonal foliage display changes",
    ],
    specs: {
      Dimensions: '8.98" × 5.43" × 1.02"',
      Weight: "2.2 lbs",
      Power: "5V adapter + CR2032 backup",
      Connectivity: "Wi-Fi, Bluetooth",
      Display: "Color LCD with dynamic icons",
      Sensors: "Temperature, Humidity, Wind, Rain",
      Range: "Up to 400 ft",
      "Battery Life": "Sensors: AA batteries (not included)",
    },
    amazonLink: "https://www.amazon.com/Crosse-Technology-V42-PRO-INT-Professional-Monitoring/dp/B0BL53M5HR",
  },
  "govee-h5103": {
    slug: "govee-h5103",
    name: "Govee H5103 Thermometer",
    category: "Weather Stations",
    price: "$29.99",
    images: ["https://m.media-amazon.com/images/I/61s3HPzcZsL._SX522_.jpg"],
    rating: 4.6,
    reviews: 1250,
    description:
      "The Govee H5103 offers smart temperature and humidity monitoring with instant notifications. Perfect for home climate control, it features Bluetooth connectivity and app-based tracking for maintaining optimal indoor conditions.",
    features: [
      "Real-time temperature monitoring",
      "Humidity level tracking",
      "Instant notifications via app",
      "Data history and graphs",
      "Bluetooth connectivity",
      "Compact and portable design",
      "High accuracy sensors",
      "Battery-powered operation",
      "Custom alert thresholds",
      "Multi-device support",
    ],
    specs: {
      Dimensions: '3.1" × 3.1" × 1.0"',
      Weight: "0.3 lbs",
      Power: "AAA batteries",
      Connectivity: "Bluetooth",
      Display: "LED indicators",
      Sensors: "Temperature, Humidity",
      Range: "Up to 230 ft",
      "Battery Life": "1 year",
    },
    amazonLink: "https://www.amazon.com/Govee-Thermometer-H5103-Temperature-Notification/dp/B0B5KF2J34",
  },
  "ambient-ws-5000": {
    slug: "ambient-ws-5000",
    name: "Ambient WS-5000 Weather Station",
    category: "Weather Stations",
    price: "$399.99",
    images: ["https://m.media-amazon.com/images/I/516oV9-11DL._AC_SX679_.jpg"],
    rating: 4.7,
    reviews: 890,
    description:
      "The Ambient WS-5000 provides professional-grade weather monitoring with ultrasonic sensors and smart home integration. Ideal for enthusiasts, it offers detailed data on wind, rain, and atmospheric conditions with cloud connectivity.",
    features: [
      "Ultrasonic wind speed sensor",
      "Rain gauge with accumulation",
      "Indoor/outdoor temperature",
      "Humidity and pressure tracking",
      "Wi-Fi cloud upload",
      "Smart home compatibility",
      "Customizable dashboard",
      "Historical data storage",
      "Alert notifications",
      "Solar-powered sensors",
    ],
    specs: {
      Dimensions: '12" × 8" × 6"',
      Weight: "3.5 lbs",
      Power: "AC adapter + solar",
      Connectivity: "Wi-Fi",
      Display: "Color console",
      Sensors: "Ultrasonic suite",
      Range: "Up to 330 ft",
      "Battery Life": "Unlimited (solar)",
    },
    amazonLink: "https://www.amazon.com/Ambient-Weather-WS-5000-IP-Ultrasonic-Professional/dp/B09V3FVJGG",
  },
  "fender-acoustasonic": {
    slug: "fender-acoustasonic",
    name: "Fender Acoustasonic Telecaster",
    category: "Guitars",
    price: "$1999.99",
    images: ["https://m.media-amazon.com/images/I/51SUBiqqvpL._AC_SX679_.jpg"],
    rating: 4.8,
    reviews: 450,
    description:
      "The Fender Acoustasonic Telecaster blends acoustic and electric tones in one versatile instrument. With advanced modeling technology, it's perfect for musicians seeking hybrid sound capabilities in a classic Telecaster design.",
    features: [
      "Acoustic-electric hybrid design",
      "Voice modeling technology",
      "Magnetic and body sensors",
      "Built-in effects processor",
      "USB rechargeable battery",
      "Mahogany neck construction",
      "Rosewood fretboard",
      "Multiple voice presets",
      "Stage-ready performance",
      "Lightweight body",
    ],
    specs: {
      Dimensions: '42" × 15" × 5"',
      Weight: "6.5 lbs",
      Power: "Rechargeable battery",
      Connectivity: "1/4 inch output, USB",
      Body: "Solid spruce top",
      Neck: "Modern Deep C",
      Frets: "22 narrow-tall",
      Scale: '25.5"',
    },
    amazonLink: "https://www.amazon.com/Fender-Acoustasonic-Standard-Telecaster-Acoustic-electric/dp/B0DQ25HP3H",
  },
  "mylywoo-guitar-keychain": {
    slug: "mylywoo-guitar-keychain",
    name: "MYLYWOO Guitar Keychain",
    category: "Guitar Accessories",
    price: "$19.99",
    images: ["https://m.media-amazon.com/images/I/71OqOheNtrL._AC_SX679_.jpg"],
    rating: 4.5,
    reviews: 320,
    description:
      "The MYLYWOO Guitar Keychain features miniature guitar statues for hanging or display. Perfect for music lovers, it combines functionality with artistic design in a compact accessory.",
    features: [
      "Miniature guitar design",
      "Durable metal construction",
      "Hanging statue feature",
      "Keychain attachment",
      "Detailed craftsmanship",
      "Multiple color options",
      "Gift-ready packaging",
      "Lightweight and portable",
      "Music-themed accessory",
      "Collectible item",
    ],
    specs: {
      Dimensions: '4" × 1.5" × 0.5"',
      Weight: "0.1 lbs",
      Material: "Zinc alloy",
      Finish: "Polished chrome",
      Attachment: "Key ring",
      Colors: "Silver/Gold",
      Durability: "Scratch-resistant",
      Packaging: "Gift box",
    },
    amazonLink: "https://www.amazon.com/MYLYWOO-Guitar-Keychain-Statues-hanging/dp/B0CZ8KT6QL",
  },
  "fusion-ms-wb670": {
    slug: "fusion-ms-wb670",
    name: "Fusion MS-WB670 Marine System",
    category: "Marine Audio",
    price: "$1249.98",
    images: ["https://m.media-amazon.com/images/I/519VHXBTfsL._AC_SX679_.jpg"],
    rating: 4.6,
    reviews: 210,
    description:
      "The Fusion MS-WB670 Apollo Marine Entertainment System with 6-channel amplifier delivers powerful audio for boats. Featuring DSP technology and Wi-Fi streaming, it's designed for marine environments with robust performance.",
    features: [
      "DSP audio processing",
      "Wi-Fi streaming with AirPlay",
      "6-channel amplification",
      "PartyBus network capabilities",
      "Optical audio input",
      "Over-the-air updates",
      "Marine-grade durability",
      "Easy tune feature",
      "Multi-zone control",
      "High power output",
    ],
    specs: {
      Dimensions: '7" × 5" × 2"',
      Weight: "4.5 lbs",
      Power: "12V DC marine",
      Connectivity: "Ethernet, USB, AUX",
      Output: "150W RMS per channel",
      Channels: "6",
      Waterproof: "IPX7 rating",
      Voltage: "10.8-16V DC",
    },
    amazonLink: "https://www.amazon.com/Fusion-MS-WB670-Entertainment-MS-AP61800-Amplifier/dp/B09DDH9W4F",
  },
  "topdon-rlink": {
    slug: "topdon-rlink",
    name: "TOPDON RLink J2534 Tool",
    category: "Diagnostic Tools",
    price: "$299.00",
    images: ["https://m.media-amazon.com/images/I/81ij+Wynx9L._AC_SX679_.jpg"],
    rating: 4.5,
    reviews: 172,
    description:
      "The TOPDON RLink J2534 Pass-Thru Tool supports multiple protocols for vehicle diagnostics and reprogramming. Compatible with 17+ brands, it offers OEM-level functions without included OE software.",
    features: [
      "J2534/D-PDU/CAN-FD/DoIP support",
      "Multi-brand compatibility",
      "Full-system diagnostics",
      "Repair guides and info",
      "Three CAN channels",
      "Lifetime free updates",
      "One-click driver install",
      "USB OBD connection",
      "Windows compatible",
      "No OE software included",
    ],
    specs: {
      Dimensions: '6" × 4" × 1.5"',
      Weight: "1.2 lbs",
      Power: "Vehicle-powered",
      Connectivity: "USB Type-C",
      Protocols: "J2534, D-PDU, etc.",
      Compatibility: "17+ brands",
      OS: "Windows 7+ (64-bit)",
      Channels: "3 CAN",
    },
    amazonLink: "https://www.amazon.com/TOPDON-RLink-Programmer-Reprogramming-Diagnostic/dp/B0DFM25BZB",
  },
  "model-decor-lights": {
    slug: "model-decor-lights",
    name: "Model Décor Cerveza Lights",
    category: "Outdoor Lighting",
    price: "$49.99",
    images: ["https://m.media-amazon.com/images/I/81hS1umKNAL._AC_SX679_.jpg"],
    rating: 4.4,
    reviews: 150,
    description:
      "The Model Décor Cerveza Bistro Lights add festive ambiance to outdoor spaces. With beer-themed designs, these string lights are perfect for patios and parties, offering weather-resistant illumination.",
    features: [
      "Beer bottle shaped bulbs",
      "Weather-resistant design",
      "Bistro-style string lights",
      "Warm white LED glow",
      "Easy installation",
      "Connectable strands",
      "Energy-efficient LEDs",
      "Outdoor/indoor use",
      "Durable construction",
      "Festive theme",
    ],
    specs: {
      Dimensions: "20 ft length",
      Weight: "2.0 lbs",
      Power: "Plug-in AC",
      Bulbs: "10 LED bulbs",
      Spacing: "2 ft per bulb",
      Waterproof: "IP65 rating",
      Voltage: "120V",
      Lifespan: "25,000 hours",
    },
    amazonLink: "https://www.amazon.com/Model-D%C3%A9cor-Cerveza-Bistro-Lights/dp/B0DGF7W6PN",
  },
  "smartwings-zebra-shades": {
    slug: "smartwings-zebra-shades",
    name: "SmartWings Motorized Zebra Shades",
    category: "Smart Home",
    price: "$199.99",
    images: ["https://m.media-amazon.com/images/I/71mtU+FT-3L._AC_SX679_.jpg"],
    rating: 4.7,
    reviews: 280,
    description:
      "SmartWings Motorized Zebra Shades offer 85% blackout with light filtering. Compatible with HomeKit, Alexa, and Google Home, these custom blinds provide privacy and light control for home or office.",
    features: [
      "Motorized operation",
      "85% blackout fabric",
      "Day/night light control",
      "Smart home integration",
      "Custom sizing available",
      "Privacy enhancement",
      "Quiet motor",
      "App and voice control",
      "Linen white material",
      "Easy installation",
    ],
    specs: {
      Dimensions: "Custom (up to 96\" wide)",
      Weight: "Varies by size",
      Power: "Rechargeable battery",
      Connectivity: "Wi-Fi, Bluetooth",
      Material: "Polyester fabric",
      Control: "App, Voice, Remote",
      Blackout: "85%",
      Mounting: "Inside/Outside",
    },
    amazonLink: "https://www.amazon.com/SmartWings-Motorized-Blackout-Filtering-Customized/dp/B0CGZHH14H",
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug]

  if (!product) {
    return (
      <main className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center space-y-6">
          <h1 className="font-mono text-4xl font-bold text-neon-pink glitch">Product Not Found</h1>
          <p className="text-muted-foreground">This item has been lost in the time stream.</p>
          <Link href="/">
            <Button className="neon-pulse bg-transparent border-2 border-neon-cyan text-neon-cyan">
              Return to Archive
            </Button>
          </Link>
        </div>
      </main>
    )
  }

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

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Images */}
          <div className="space-y-6">
            <div className="relative aspect-square holographic rounded-lg overflow-hidden glow-cyan">
              <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((img: string, i: number) => (
                  <div
                    key={i}
                    className="relative aspect-square holographic rounded-lg overflow-hidden cursor-pointer hover:glow-cyan transition-all"
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} ${i + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-block holographic rounded-lg px-4 py-2 backdrop-blur-sm">
                <p className="font-mono text-sm text-neon-amber uppercase tracking-wider">{product.category}</p>
              </div>

              <h1 className="font-mono text-4xl font-bold text-neon-cyan md:text-5xl glitch-hover text-balance">
                {product.name}
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "fill-neon-amber text-neon-amber" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-mono text-neon-amber">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <div className="holographic rounded-lg p-6 backdrop-blur-sm space-y-4">
              <h2 className="font-mono text-xl font-bold text-neon-amber">Description</h2>
              <p className="text-foreground/80 leading-relaxed">{product.description}</p>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  size="lg"
                  className="w-full neon-pulse bg-neon-cyan text-background hover:bg-neon-cyan/90 font-mono text-lg py-6"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy on Amazon
                </Button>
              </a>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="holographic rounded-lg p-4 backdrop-blur-sm">
                  <Zap className="h-6 w-6 text-neon-cyan mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Fast Shipping</p>
                </div>
                <div className="holographic rounded-lg p-4 backdrop-blur-sm">
                  <Shield className="h-6 w-6 text-neon-pink mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">2 Year Warranty</p>
                </div>
                <div className="holographic rounded-lg p-4 backdrop-blur-sm">
                  <RefreshCw className="h-6 w-6 text-neon-amber mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">30 Day Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Specs */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Features */}
          <div className="holographic rounded-lg p-8 backdrop-blur-sm space-y-6">
            <h2 className="font-mono text-2xl font-bold text-neon-cyan">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-neon-amber shrink-0 mt-1">▸</span>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="holographic rounded-lg p-8 backdrop-blur-sm space-y-6">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">Technical Specs</h2>
            <dl className="space-y-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between pb-3 border-b border-border">
                  <dt className="font-mono text-sm text-neon-amber uppercase tracking-wider">{key}</dt>
                  <dd className="text-foreground/80 text-right">{value as string}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Amazon Disclosure */}
        <div className="mt-16 holographic rounded-lg p-6 backdrop-blur-sm text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">
            As an Amazon Associate, we earn from qualifying purchases. This helps support our archive and allows us to
            continue curating the finest retro-futuristic technology.
          </p>
        </div>
      </div>
    </main>
  )
}
