export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-neon-cyan/20 bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full border border-neon-cyan glow-cyan flex items-center justify-center">
                <span>☄️</span>
              </div>
              <span className="font-mono font-bold text-neon-cyan">Weather Gadget Lab</span>
            </div>
            <p className="text-sm text-muted-foreground">Archive from 2080. Where weather meets sound.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold text-neon-amber uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/mission" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  Mission
                </a>
              </li>
              <li>
                <a href="/reviews" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold text-neon-amber uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Amazon Disclosure */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold text-neon-amber uppercase tracking-wider">Disclosure</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              As an Amazon Associate, we earn from qualifying purchases. Amazon Associates Program Participant.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neon-cyan/20 text-center text-sm text-muted-foreground">
          <p>© {currentYear} WeatherGadgetLab.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
