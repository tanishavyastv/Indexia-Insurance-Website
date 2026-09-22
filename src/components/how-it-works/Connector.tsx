import type { CSSProperties } from 'react'

/** Dotted line + circled arrow spanning from this step's halo to the next one.
 *  Participates in the scroll-triggered wave: the dotted line draws itself,
 *  a glow dot glides across, then the arrowhead pops — chained via --seq-delay. */
export function Connector({ dash, arrow, delayMs = 0 }: { dash: string; arrow: string; delayMs?: number }) {
  return (
    <div
      className="absolute top-14 hidden h-0 xl:block"
      style={{
        left: 'calc(50% + 4.5rem)',
        right: 'calc(-50% + 4.5rem)',
        ...({ '--seq-delay': `${delayMs}ms` } as CSSProperties),
      }}
      aria-hidden="true"
    >
      <span className={`hiw-draw block h-0 border-t-2 border-dotted ${dash}`} />
      <span className="hiw-glide" />
      <span
        className={`hiw-pop absolute -right-3.5 top-0 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border-2 bg-white/80 ${arrow}`}
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
          <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  )
}
