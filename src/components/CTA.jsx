const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function CTA() {
  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name') || '',
      email: form.get('email') || '',
      message: form.get('message') || '',
      source: 'cta'
    }
    try {
      await fetch(`${BACKEND_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      alert('Thanks! We\'ll send a plan to your email shortly.')
      e.currentTarget.reset()
    } catch (err) {
      alert('Submission failed. Please try again or use the Contact page.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(30,64,175,0.25),transparent_40%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to automate your revenue engine?</h2>
        <p className="mt-3 text-blue-100/80">Share a bit about your goals and current stack. We’ll send a tailored automation plan.</p>
        <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-3 bg-blue-900/30 border border-blue-400/20 rounded-2xl p-3">
          <input name="name" required minLength={2} className="col-span-1 rounded-xl bg-blue-950/50 px-4 py-3 text-blue-50 placeholder:text-blue-200/50 border border-blue-400/10 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Name" />
          <input name="email" type="email" required className="col-span-1 rounded-xl bg-blue-950/50 px-4 py-3 text-blue-50 placeholder:text-blue-200/50 border border-blue-400/10 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Email" />
          <button className="col-span-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-white font-semibold shadow-lg shadow-blue-900/40">Get My Plan</button>
          <textarea name="message" className="sm:col-span-3 rounded-xl bg-blue-950/50 px-4 py-3 text-blue-50 placeholder:text-blue-200/50 border border-blue-400/10 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="What are you looking to automate?" />
        </form>
        <p className="mt-4 text-blue-300/70 text-sm">No spam. No fluff. Just actionable recommendations.</p>
      </div>
    </section>
  )
}
