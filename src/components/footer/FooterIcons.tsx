export function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl border border-[#1e4a63] bg-white/4 text-white transition-colors duration-300 hover:border-[#2d6f8f] hover:bg-white/10"
    >
      {children}
    </a>
  )
}
export function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#2d6f8f] text-[#9ec8de]"
      aria-hidden="true"
    >
      {children}
    </span>
  )
}