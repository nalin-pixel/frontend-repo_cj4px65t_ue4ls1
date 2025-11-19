export default function About() {
  return (
    <section className="pt-28 pb-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-bold text-white">About Nova Automations</h1>
        <p className="mt-4 text-blue-100/80">
          We design and deploy AI agents that create real business outcomes — more qualified conversations, more booked meetings, and a tighter revenue engine. Our team blends product, growth, and data to build systems that feel on-brand and operate reliably.
        </p>
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-blue-400/20 bg-blue-900/20 p-5">
            <div className="text-3xl font-extrabold text-white">14d</div>
            <div className="text-blue-200/80 text-sm mt-1">Typical go-live</div>
          </div>
          <div className="rounded-2xl border border-blue-400/20 bg-blue-900/20 p-5">
            <div className="text-3xl font-extrabold text-white">24/7</div>
            <div className="text-blue-200/80 text-sm mt-1">Agent coverage</div>
          </div>
          <div className="rounded-2xl border border-blue-400/20 bg-blue-900/20 p-5">
            <div className="text-3xl font-extrabold text-white">NDA</div>
            <div className="text-blue-200/80 text-sm mt-1">Privacy-first</div>
          </div>
        </div>
      </div>
    </section>
  )
}
