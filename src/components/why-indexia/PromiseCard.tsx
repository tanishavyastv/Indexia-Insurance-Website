import type { PromiseItem } from './promisesData'

export function PromiseCard({ item }: { item: PromiseItem }) {
  return (
    <li
      data-reveal
      className="promise-card group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white/95 px-4 pt-5 pb-4 text-center shadow-[0_10px_26px_-16px_rgba(13,60,100,0.22)]"
    >
      <span className="promise-aurora" aria-hidden="true" />

      <span className="promise-icon-wrap">
        <img src={item.icon} alt={item.alt} loading="lazy" className="h-15 w-15 object-contain" />
      </span>

      <h3 className="promise-title mt-3 text-[15px] font-bold">{item.title}</h3>

      <p className="mt-1.5 text-[12px] leading-snug whitespace-pre-line text-[#79849f] transition-colors duration-300 group-hover:text-[#41506e]">
        {item.body}
      </p>
    </li>
  )
}
