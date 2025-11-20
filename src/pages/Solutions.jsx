import Features from '../components/Features'
import PageTransition from '../components/PageTransition'

export default function Solutions() {
  return (
    <PageTransition>
      <section className="pt-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold text-white">Solutions</h1>
          <p className="mt-3 text-blue-100/80">AI systems that capture, qualify, and convert.</p>
        </div>
        <Features />
      </section>
    </PageTransition>
  )
}
