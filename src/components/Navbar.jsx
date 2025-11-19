import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Process', href: '#process' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-blue-900/30 border border-blue-400/20 rounded-2xl shadow-[0_0_40px_rgba(30,64,175,0.35)]">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="group inline-flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-blue-500/40 blur-md group-hover:bg-blue-400/50 transition-colors"></div>
                <div className="relative rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 p-2 ring-1 ring-white/10">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Nova Automations</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-blue-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow-lg shadow-blue-900/40 hover:shadow-blue-800/60 transition-all">
                Get a Proposal
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-6">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-blue-100/90 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-white shadow-lg shadow-blue-900/40">
                  Get a Proposal
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
