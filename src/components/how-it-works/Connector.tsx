export function Connector({ dash, arrow }: { dash: string; arrow: string }) {
  return (
    <div
      className="absolute top-14 hidden h-0 xl:block"
      style={{ left: 'calc(50% + 4.5rem)', right: 'calc(-50% + 4.5rem)' }}
      aria-hidden="true"
    >
      <span className={`block h-0 border-t-2 border-dotted ${dash}`} />
      <span
        className={`absolute -right-3.5 top-0 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border-2 bg-white/80 ${arrow}`}
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
          <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  )
}
