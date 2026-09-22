export function CalendarGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="3" stroke="#0b9b9f" strokeWidth="2" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="#0b9b9f" strokeWidth="2" strokeLinecap="round" />
      <circle cx="8" cy="14.5" r="1.15" fill="#0b9b9f" />
      <circle cx="12" cy="14.5" r="1.15" fill="#0b9b9f" />
      <circle cx="16" cy="14.5" r="1.15" fill="#0b9b9f" />
      <circle cx="8" cy="17.8" r="1.15" fill="#0b9b9f" />
      <circle cx="12" cy="17.8" r="1.15" fill="#0b9b9f" />
    </svg>
  )
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
