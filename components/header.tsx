"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Reviews", href: "/reviews" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-accent/20 shadow-[0_0_20px_rgba(56,255,248,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-12 h-12 border-2 border-accent rounded-lg flex items-center justify-center bg-background/50 backdrop-blur-sm shadow-[0_0_15px_rgba(56,255,248,0.3)]">
                <span className="text-2xl font-bold font-mono text-accent">☄️</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xl font-bold text-accent tracking-wider group-hover:text-secondary transition-colors">
                WGL
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Est. 2080</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 rounded transition-colors" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-accent transition-all duration-300 shadow-[0_0_10px_rgba(56,255,248,0.5)]" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block"></div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center border border-accent/50 rounded bg-background/50 backdrop-blur-sm hover:border-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5 text-accent" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-accent/20 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-accent hover:bg-accent/10 rounded transition-colors border border-transparent hover:border-accent/30"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 px-4 py-3 text-sm font-bold text-center text-background bg-accent rounded hover:bg-secondary transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        )}
      </div>

      {/* Holographic scan line effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 animate-pulse" />
    </header>
  )
}
