import type React from "react"
import type { Metadata, Viewport } from "next"
import { Orbitron, Rajdhani } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Weather Gadget Lab ☄️ | Archive from 2080",
  description:
    "Interactive time capsule of retro-futuristic weather stations and guitar picks. Where weather meets sound. Science meets soul.",
  generator: "v0.app",
  keywords: ["weather station", "guitar picks", "retro tech", "smart home", "weather gadgets"],
  authors: [{ name: "Weather Gadget Lab" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.jpg", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.jpg", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#38FFF8",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${orbitron.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
