import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PrivacyPage() {
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

          <h1 className="font-mono text-5xl font-bold md:text-6xl text-neon-cyan">Privacy Policy</h1>
        </div>

        <div className="holographic rounded-lg p-8 backdrop-blur-sm space-y-8">
          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">1. Information We Collect</h2>
            <p className="text-foreground/80 leading-relaxed">
              Weather Gadget Lab collects information that you provide directly to us, such as when you subscribe to our
              newsletter, contact us, or interact with our site. This may include your name, email address, and any
              other information you choose to provide.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">2. Cookies and Tracking</h2>
            <p className="text-foreground/80 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our site, analyze site
              usage, and assist in our marketing efforts. You can control cookies through your browser settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">3. Amazon Affiliate Program</h2>
            <p className="text-foreground/80 leading-relaxed">
              As part of the Amazon Associates Program, we may track clicks and purchases made through our affiliate
              links. This information is used solely for the purpose of tracking affiliate commissions and is subject to
              Amazon's privacy policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">4. How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              We use the information we collect to operate and improve our site, respond to your inquiries, send you
              updates (if you've opted in), and analyze site usage patterns.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">5. Information Sharing</h2>
            <p className="text-foreground/80 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to third parties.
              This does not include trusted third parties who assist us in operating our website, conducting our
              business, or servicing you, as long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">6. Analytics</h2>
            <p className="text-foreground/80 leading-relaxed">
              We use analytics services to help us understand how visitors use our site. These services may collect
              information about your use of our site and other websites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">7. Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed">
              You have the right to access, update, or delete your personal information. You may also opt-out of
              receiving communications from us at any time by contacting us directly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">8. Changes to Privacy Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We reserve the right to update this privacy policy at any time. We will notify you of any changes by
              posting the new policy on this page with an updated revision date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-neon-pink">9. Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at: archive@weathergadgetlab.com
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
