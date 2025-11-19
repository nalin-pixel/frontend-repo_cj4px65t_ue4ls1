import { CheckCircle2, PlugZap, LineChart, Wrench } from 'lucide-react'

const steps = [
  { title: 'Discovery & Design', desc: 'We map revenue goals, systems, and constraints to draft your automation blueprint.', icon: PlugZap },
  { title: 'Build & Integrate', desc: 'We connect your CRM, calendars, comms, and data sources. Then we build the agents.', icon: Wrench },
  { title: 'Launch & Train', desc: 'Deploy to your site, phone, and socials. Train tones, prompts, and guardrails.', icon: CheckCircle2 },
  { title: 'Optimize & Scale', desc: 'Weekly iteration on prompts, routing, and scripts to maximize meetings and revenue.', icon: LineChart },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(29,78,216,0.18),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How We Work</h2>
          <p className="mt-3 text-blue-100/80">From blueprint to outcomes in weeks, not months.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(({ title, desc, icon: Icon }, i) => (
            <div key={title} className="relative rounded-2xl border border-blue-400/20 bg-blue-900/20 p-6">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-3 ring-1 ring-white/10 shadow-lg shadow-blue-900/40">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="mt-4 text-blue-300/80 text-sm">Step {i + 1}</div>
                <h3 className="text-white font-semibold mt-1">{title}</h3>
                <p className="mt-2 text-blue-100/80 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
