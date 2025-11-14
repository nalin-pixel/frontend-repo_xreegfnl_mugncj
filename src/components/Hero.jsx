import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-sky-900 to-black">
      <div className="absolute inset-0">
        {mounted && (
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 text-white">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            We build modern, playful experiences
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Your Team Portfolio
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Showcasing team achievements and individual impact with an interactive 3D hero.
          </p>
        </div>
      </div>
    </section>
  )
}
