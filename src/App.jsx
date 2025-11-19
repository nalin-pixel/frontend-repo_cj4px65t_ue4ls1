import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1140] via-[#0B1B4F] to-[#0A1140]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_-10%,rgba(37,99,235,0.15),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(99,102,241,0.12),transparent_40%)]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <CTA />
      </main>

      <footer className="relative z-10 border-t border-blue-400/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-blue-300/60 text-sm">
          © {new Date().getFullYear()} Nova Automations — AI systems for acquisition and retention.
        </div>
      </footer>
    </div>
  )
}

export default App
