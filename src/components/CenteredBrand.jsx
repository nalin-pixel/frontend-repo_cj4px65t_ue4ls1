import { motion } from 'framer-motion'

export default function CenteredBrand() {
  return (
    <div className="relative h-[70vh] sm:h-[76vh] flex items-center justify-center overflow-hidden pt-24">
      {/* 3D background hint via perspective grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,rgba(59,130,246,0.18),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 [perspective:800px]">
          <div className="absolute inset-x-0 bottom-0 h-full [transform:rotateX(60deg)] bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <motion.h1
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-100 to-blue-300/70 drop-shadow-[0_0_25px_rgba(37,99,235,0.25)]"
        >
          Nova Automations
        </motion.h1>
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-blue-100/90 max-w-2xl mx-auto"
        >
          AI Systems that feel futuristic and deliver measurable revenue.
        </motion.p>
      </motion.div>
    </div>
  )
}
