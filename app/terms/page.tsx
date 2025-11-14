import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function TermsPage() {
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

      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block holographic rounded-lg px-6 py-3 backdrop-blur-sm">
            <p className="font-mono text-sm text-neon-amber uppercase tracking-wider">Legal Documentation</p>
          </div>

          <h1 className="font-mono text-5xl font-bold md:text-6xl text-neon-cyan">Terms of Service</h1>
        </div>

        <div className="holographic rounded-lg p-8 backdrop-blur-sm space-y-8">
          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">1. Acceptance of Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              By accessing and using WeatherGadgetLab.com, you accept and agree to be bound by the terms and provision
              of this agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">2. Amazon Associates Program</h2>
            <p className="text-foreground/80 leading-relaxed">
              Weather Gadget Lab is a participant in the Amazon Services LLC Associates Program, an affiliate
              advertising program designed to provide a means for sites to earn advertising fees by advertising and
              linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">3. Product Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              While we strive to provide accurate product information, specifications, and availability, we cannot
              guarantee the accuracy of information displayed on this site. Product prices and availability are subject
              to change at Amazon's discretion.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">4. User Conduct</h2>
            <p className="text-foreground/80 leading-relaxed">
              You agree to use this site only for lawful purposes and in a way that does not infringe upon the rights of
              others or restrict their use and enjoyment of the site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">5. Intellectual Property</h2>
            <p className="text-foreground/80 leading-relaxed">
              All content on this site, including but not limited to text, graphics, logos, images, and software, is the
              property of Weather Gadget Lab or its content suppliers and is protected by international copyright laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">6. Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed">
              Weather Gadget Lab shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your access to or use of this site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">7. Changes to Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              We reserve the right to modify these terms at any time. Your continued use of the site following any
              changes indicates your acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">8. Contact Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              For questions about these Terms of Service, please contact us at: archive@weathergadgetlab.com
            </p>
          </section>

          <div className="pt-8 border-t border-border text-sm text-muted-foreground font-mono">
            <p>Last Updated: {new Date().toLocaleDateString()}</p>
            <p className="mt-2">© {new Date().getFullYear()} WeatherGadgetLab.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
