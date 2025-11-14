export function VideoSection() {
  return (
    <section className="relative px-4 py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-5xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-mono text-4xl font-bold md:text-5xl text-neon-amber text-balance">
            How Future Forecasts Work
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A glimpse into the technology that powers tomorrow's predictions
          </p>
        </div>

        {/* CRT-style video frame */}
        <div className="relative holographic rounded-2xl overflow-hidden backdrop-blur-sm glow-amber">
          <div className="aspect-video bg-black/50 flex items-center justify-center">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Weather Station Technology"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>

          {/* CRT frame effect */}
          <div className="absolute inset-0 pointer-events-none border-8 border-black/30 rounded-2xl" />
        </div>
      </div>
    </section>
  )
}
