export default function SectionSeam() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-10 -translate-y-1/2"
    >
      <div className="h-16 bg-linear-to-b from-transparent via-white/60 to-transparent" />
    </div>
  )
}
