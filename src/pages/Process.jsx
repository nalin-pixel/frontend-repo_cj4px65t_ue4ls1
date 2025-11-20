import ProcessGrid from '../components/Process'
import PageTransition from '../components/PageTransition'

export default function ProcessPage() {
  return (
    <PageTransition>
      <section className="pt-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold text-white">Our Process</h1>
          <p className="mt-3 text-blue-100/80">From blueprint to outcomes in weeks, not months.</p>
        </div>
        <ProcessGrid />
      </section>
    </PageTransition>
  )
}
