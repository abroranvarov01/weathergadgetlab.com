export function MissionSection() {
  return (
    <section id="mission" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center space-y-6 holo-fade">
          <h2 className="font-mono text-4xl font-bold md:text-5xl text-balance">
            <span className="text-neon-pink">Our Mission</span> — Decode the Elements
          </h2>

          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              We explore the intersection of meteorological precision and sonic artistry. Each device in our archive
              represents a moment where technology transcended its purpose.
            </p>

            {/* Holographic panels with vintage weather diagrams */}
            <div className="grid gap-4 md:grid-cols-3 mt-12">
              {[
                { icon: "🌡️", label: "Temperature", value: "±0.1°C" },
                { icon: "💧", label: "Humidity", value: "±2%" },
                { icon: "🌪️", label: "Pressure", value: "±0.3hPa" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="holographic rounded-lg p-6 backdrop-blur-sm glitch-hover relative overflow-hidden group"
                >
                  {/* Particle effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-pink/10" />
                  </div>

                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <div className="font-mono text-sm text-neon-cyan uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-2xl font-bold text-neon-amber">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
