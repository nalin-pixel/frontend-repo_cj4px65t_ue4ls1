import { useState } from 'react'
import Scheduling from '../components/Scheduling'
import PageTransition from '../components/PageTransition'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', error: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'submitting', error: '' })
    try {
      const res = await fetch(`${BACKEND_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact-page' })
      })
      if (!res.ok) throw new Error('Failed to submit. Please try again.')
      setStatus({ state: 'success', error: '' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ state: 'error', error: err.message || 'Something went wrong' })
    }
  }

  return (
    <PageTransition>
      <section className="pt-28 pb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white">Get a Proposal</h1>
            <p className="mt-3 text-blue-100/80">Tell us about your goals. We’ll send a tailored automation plan and booking link.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-900/20 p-6">
              <form onSubmit={submit} className="grid gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  minLength={2}
                  className="rounded-xl bg-blue-950/50 px-4 py-3 text-blue-50 placeholder:text-blue-200/50 border border-blue-400/10 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="Full name"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="rounded-xl bg-blue-950/50 px-4 py-3 text-blue-50 placeholder:text-blue-200/50 border border-blue-400/10 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="Work email"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  className="rounded-xl bg-blue-950/50 px-4 py-3 text-blue-50 placeholder:text-blue-200/50 border border-blue-400/10 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="What are you looking to automate? Your stack? Any success metrics?"
                />
                <button
                  disabled={status.state === 'submitting'}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-white font-semibold shadow-lg shadow-blue-900/40 disabled:opacity-70"
                >
                  {status.state === 'submitting' ? 'Submitting...' : 'Request My Plan'}
                </button>
                {status.state === 'success' && (
                  <div className="text-green-400 text-sm">Thank you! We’ll be in touch shortly.</div>
                )}
                {status.state === 'error' && (
                  <div className="text-red-400 text-sm">{status.error}</div>
                )}
              </form>
            </div>

            <div className="rounded-2xl border border-blue-400/20 bg-blue-900/20 p-6">
              <h3 className="text-white font-semibold mb-4">Or book a strategy call</h3>
              <Scheduling />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
