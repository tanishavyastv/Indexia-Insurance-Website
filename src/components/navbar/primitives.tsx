export function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`size-3 transition-transform duration-200 ${className ?? ''}`}
      aria-hidden="true"
    >
      <path
        d="M2 4.5 6 8.5 10 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconChip({
  path,
  accent,
  soft,
  size = 'size-8',
}: {
  path: string
  accent: string
  soft: string
  size?: string
}) {
  return (
    <span
      className={`flex ${size} shrink-0 items-center justify-center rounded-lg`}
      style={{ backgroundColor: soft, color: accent }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-4.5" fill="currentColor">
        <path d={path} />
      </svg>
    </span>
  )
}

export function LinkIcon({
  link,
}: {
  link: { icon?: string; accent?: string; soft?: string }
}) {
  if (!link.icon) return null
  return (
    <span
      className="flex size-7 shrink-0 items-center justify-center rounded-lg"
      style={{ backgroundColor: link.soft, color: link.accent }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
        <path d={link.icon} />
      </svg>
    </span>
  )
}

export function ArrowSlideIn() {
  return (
    <svg
      viewBox="0 0 12 12"
      className="size-3 -translate-x-1 text-primary opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 2.5 7.5 6 4 9.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
