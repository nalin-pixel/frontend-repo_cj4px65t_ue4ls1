import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050A2A] via-[#08123A] to-[#050A2A]">
      {/* Subtle AI vibes: radial glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_-10%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(99,102,241,0.10),transparent_40%),radial-gradient(circle_at_50%_120%,rgba(30,58,138,0.22),transparent_40%)]" />
      {/* Scanline shimmer */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.7)_3px,transparent_3px)]" />

      <Navbar />
      <main>
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-blue-400/10 mt-16">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-blue-300/60 text-sm">
          © {new Date().getFullYear()} Nova Automations — AI systems for acquisition and retention.
        </div>
      </footer>
    </div>
  )
}
