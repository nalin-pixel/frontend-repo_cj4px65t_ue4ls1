import { Bot, PhoneCall, Share2, Workflow, ShieldCheck, Zap } from 'lucide-react'
import TiltCard from './TiltCard'

const features = [
  {
    icon: Bot,
    title: 'AI Lead Capture Agents',
    desc: 'Website and funnel agents that qualify, schedule, and sync leads to your CRM in real time.'
  },
  {
    icon: PhoneCall,
    title: 'AI Voice Callers',
    desc: 'Outbound voice agents that follow-up, reschedule, and re-activate your pipeline 24/7.'
  },
  {
    icon: Share2,
    title: 'AI Social Media Systems',
    desc: 'Content generation, scheduling, and DM inbox agents to drive conversations at scale.'
  },
  {
    icon: Workflow,
    title: 'Custom Automations',
    desc: 'SOP-to-automation builds across tools like Slack, Notion, HubSpot, Airtable, and more.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance + Guardrails',
    desc: 'Safety, consent, and brand tone controls baked in to every workflow.'
  },
  {
    icon: Zap,
    title: 'Fast Implementation',
    desc: 'Most deployments live in under 14 days with ongoing optimization.'
  },
]

export default function Features() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.18),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Core Offerings</h2>
          <p className="mt-3 text-blue-100/80">Everything you need to capture, qualify, and convert demand.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <TiltCard key={title} className="group relative overflow-hidden rounded-2xl border border-blue-400/20 bg-blue-900/20 p-6 hover:bg-blue-900/30 transition-colors">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-400/10 transition-colors" />
              <div className="relative">
                <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-3 ring-1 ring-white/10 shadow-lg shadow-blue-900/40">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-blue-100/80 text-sm">{desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
