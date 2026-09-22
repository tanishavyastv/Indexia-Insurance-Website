import type { Product } from './productData'

function ArrowGlyph({ dark }: { dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${dark ? 'text-navy' : 'text-white'}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href="#products"
      data-reveal
      className="group relative row-span-4 block min-h-56 snap-start rounded-[26px] perspective-distant transition-all duration-300"
    >
      <div
        className={`absolute inset-0 rounded-[26px] border bg-linear-to-b ${product.tint} ${product.border} px-3 py-3 transform-3d transition-transform duration-500 ease-in-out group-hover:transform-[rotateY(180deg)] group-focus-within:transform-[rotateY(180deg)]`}
      >
        {/* Face A — icon + name */}
        <span className="absolute inset-0 flex flex-col items-center justify-center text-center backface-hidden">
          <img src={product.icon} alt={product.alt} loading="lazy" className="h-20 w-auto" />
          <h3 className="mt-2 text-[18px] font-semibold text-[#0b2e55]">{product.title}</h3>
        </span>
        {/* Face B — description + arrow (pre-rotated so it reads correctly after the flip) */}
        <span className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center backface-hidden transform-[rotateY(180deg)]">
          <p className="text-[15px] leading-snug text-[#4d6076]">{product.body}</p>
          <span
            className={`mt-5 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-semibold shadow-md transition-transform duration-300 group-hover:translate-x-0.5 ${product.circle} ${product.glyphDark ? 'text-navy' : 'text-white'}`}
          >
            Apply
            <ArrowGlyph dark={product.glyphDark} />
          </span>
        </span>
      </div>
    </a>
  )
}
