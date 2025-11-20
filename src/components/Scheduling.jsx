export default function Scheduling() {
  // Replace the src below with your Calendly or SavvyCal URL embed.
  const src = "https://calendly.com/your-org/intro-call?hide_event_type_details=1&primary_color=2563eb"
  return (
    <div className="w-full">
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-blue-400/20 bg-blue-950/40">
        <iframe
          title="Schedule a call"
          src={src}
          className="h-full w-full"
          frameBorder="0"
        />
      </div>
      <p className="mt-3 text-blue-300/80 text-sm">Prefer email? hello@nova.automation</p>
    </div>
  )
}
