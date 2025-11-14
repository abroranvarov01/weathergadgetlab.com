export function AboutSection() {
  return (
    <section className="relative px-4 py-24 md:py-32 overflow-hidden">
      {/* Rotating observatory dome background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-neon-cyan animate-spin-slow" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neon-pink animate-spin-slower" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center space-y-8">
        <h2 className="font-mono text-4xl font-bold md:text-5xl text-balance">
          <span className="text-neon-amber">The Lab</span> — Our Story
        </h2>

        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p className="text-pretty">
            Welcome to <span className="text-neon-cyan font-bold">Weather Gadget Lab</span>, where meteorological
            precision intersects with sonic artistry.
          </p>

          <p className="text-pretty">
            Founded in the late 21st century, we curate the finest weather monitoring instruments and musical equipment
            from across the decades. Each piece in our collection represents a moment when technology transcended its
            utilitarian purpose and became art.
          </p>

          <p className="text-2xl font-bold italic text-neon-pink">"Weather meets Sound. Science meets Soul."</p>

          <p className="text-pretty">
            Our archive spans from the analog pioneers of the 1970s to the holographic systems of 2080. We believe that
            understanding our atmospheric environment should be as beautiful as the melodies we create within it.
          </p>
        </div>
      </div>
    </section>
  )
}
