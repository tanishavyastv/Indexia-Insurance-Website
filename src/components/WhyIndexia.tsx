import whyBg from '../assets/why/why-bg.webp'
import SectionSeam from './SectionSeam'
import { PromiseCard } from './why-indexia/PromiseCard'
import { promises } from './why-indexia/promisesData'

export default function WhyIndexia() {
  return (
    <section
      id="why-indexia"
      aria-labelledby="why-indexia-heading"
      className="relative bg-[#eef7fd] bg-cover bg-center"
      style={{ backgroundImage: `url(${whyBg})` }}
    >
      <SectionSeam />
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[22rem_1fr] lg:items-center lg:gap-10">
        {/* Left copy */}
        <div data-reveal-group>
          <p data-reveal className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-[#1d9aa8] uppercase">
            Why choose Indexia?
            <span className="h-1.5 w-1.5 rounded-full bg-[#1d9aa8]" aria-hidden="true" />
            <span className="h-px w-12 bg-[#1d9aa8]/50" aria-hidden="true" />
          </p>
          <h2
            id="why-indexia-heading"
            data-reveal
            className="mt-2 text-5xl leading-[1.1] font-bold tracking-tight"
          >
            <span className="text-[#091f4a]">Your Trust.</span>
            <br />
            <span className="text-[#08a391]">Our Promise.</span>
          </h2>
          <p data-reveal className="mt-2 max-w-md text-[15px] leading-relaxed text-[#737f9a]">
            Simple, transparent <span className="font-semibold text-[#51618a]">insurance</span>{' '}
            built around your needs.
          </p>
          <a
            href="#why-indexia"
            data-reveal
            className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-[#00b196] to-[#0187a3] px-5 py-2 text-[12px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(1,146,165,0.55)] transition-all duration-300 hover:shadow-[0_14px_28px_-12px_rgba(1,146,165,0.65)] hover:brightness-110"
          >
            Learn More
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Promise cards */}
        <ul data-reveal-group className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {promises.map((item) => (
            <PromiseCard key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}
