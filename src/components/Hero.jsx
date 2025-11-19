import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import CenteredBrand from './CenteredBrand'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-24">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* AI glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.35),transparent_45%)]" />

      {/* Centered brand overlay */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <CenteredBrand />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight"
              >
                AI Automation Agency for Revenue-Driven Teams
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-lg sm:text-xl text-blue-100/90"
              >
                Deploy AI Lead Capture Agents, AI Voice Callers, and AI Social Systems built to book meetings and close deals while you sleep.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-900/40 hover:shadow-blue-800/60">
                  Book a Strategy Call
                </a>
                <a href="#solutions" className="pointer-events-auto inline-flex items-center justify-center rounded-2xl border border-blue-400/30 px-6 py-3 text-blue-100 hover:bg-white/5">
                  Explore Solutions
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 flex items-center justify-center lg:justify-start gap-6">
                <div className="text-blue-200/80 text-sm">Avg. 38% lift in booked calls</div>
                <div className="h-4 w-px bg-blue-400/30" />
                <div className="text-blue-200/80 text-sm">Fully managed setup</div>
              </motion.div>
            </div>

            <div className="lg:col-span-5" />
          </div>
        </div>
      </div>
    </section>
  )
}
