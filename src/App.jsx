import React from 'react'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

function App() {
  const accent = {
    navy: '#001E40',
    lavender: '#7879DA',
    red: '#EF1F1F',
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background wash */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-32 h-96 w-96 rounded-full blur-3xl opacity-20"
             style={{ background: `radial-gradient(closest-side, ${accent.lavender}, transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30"
             style={{ background: 'linear-gradient(to top, #E6F0FF, transparent)' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md flex items-center justify-center" style={{ background: accent.navy }}>
            <span className="text-white font-bold">H</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold" style={{ color: accent.navy }}>HealthSigns</span>
            <span className="text-xs text-slate-500">Clinical platform</span>
          </div>
        </div>
        {/* Optional step indicator */}
        <div className="text-sm text-slate-500">Step <span className="font-semibold" style={{ color: accent.navy }}>1</span>/3</div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Copy block */}
          <section className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ color: accent.navy }}>
              Welcome to HealthSigns
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-prose">
              A smarter way to monitor patients, track vitals, and simplify care.
            </p>

            <div className="flex items-center gap-3 mb-10">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                Secure by design
              </span>
              <span className="hidden sm:inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                    style={{ background: '#EEF0FF', color: accent.lavender, border: '1px solid #E0E3FF' }}>
                Built for clinicians
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link to="/test" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition"
                    style={{ backgroundColor: accent.red }}>
                Get Started
              </Link>
              <p className="text-sm text-slate-500">Takes less than 2 minutes</p>
            </div>
          </section>

          {/* Hero / Spline cover */}
          <section className="order-1 lg:order-2 relative h-[320px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-slate-950">
            {/* Spline as full-bleed background */}
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            {/* Subtle gradient overlay for readability */}
            <div className="pointer-events-none absolute inset-0"
                 style={{
                   background:
                     'linear-gradient(90deg, rgba(0,30,64,0.78) 0%, rgba(0,30,64,0.35) 35%, rgba(0,30,64,0.15) 60%, rgba(0,30,64,0.0) 100%)'
                 }}
            />

            {/* Minimal HUD suggesting data-driven care */}
            <div className="absolute left-5 bottom-5 flex gap-3">
              <div className="backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-lg px-3 py-2">
                <p className="text-xs tracking-wide uppercase opacity-90">Live Vitals</p>
                <p className="text-sm font-semibold">HR 72 • SpO₂ 98% • BP 120/78</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
