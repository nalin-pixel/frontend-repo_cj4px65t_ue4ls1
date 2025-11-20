import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const cases = [
  {
    title: 'B2B SaaS: +42% Meetings in 30 Days',
    summary: 'Lead capture agents + voice sequencer reactivated 2,100 stale leads and booked 118 net new calls.',
    metrics: ['+42% meetings', '12.7% CVR', 'NPS 64'],
  },
  {
    title: 'Ecom: 3.1x ROAS From AI Social DMs',
    summary: 'Content pipeline + DM router recovered 18% of abandoned checkouts with compliant messaging.',
    metrics: ['3.1x ROAS', '18% recovery', 'AOV +9%'],
  },
  {
    title: 'Agency: 24/7 Inbound Qualification',
    summary: 'Website concierge pre-qualified inbound, routed to the right rep, and scheduled 83 demos after-hours.',
    metrics: ['+83 demos', '32% after-hours', 'First-response <15s'],
  },
]

export default function CaseStudies() {
  return (
    <PageTransition>
      <section className="pt-28 pb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white">Case Studies</h1>
            <p className="mt-3 text-blue-100/80">Select outcomes from recent deployments.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-blue-900/20 p-6"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
                <div className="relative">
                  <h3 className="text-white font-semibold text-xl">{c.title}</h3>
                  <p className="mt-2 text-blue-100/80 text-sm">{c.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.metrics.map(m => (
                      <span key={m} className="text-xs text-blue-100/80 bg-white/5 border border-blue-400/20 rounded-full px-3 py-1">{m}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
