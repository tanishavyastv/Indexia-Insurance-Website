import leftBg from '../assets/feature/left-bg.webp'
import SectionSeam from './SectionSeam'
import rightBg from '../assets/feature/right-bg.webp'
import { Arrow, CalendarGlyph } from './feature-banners/Glyphs'

export default function FeatureBanners() {
  return (
    <section
      id="feature-banners"
      aria-label="Featured insurance highlights"
      className="relative bg-[#f5fafd] px-4 py-8 sm:px-6"
    >
      <SectionSeam />
      <div data-reveal-group className="mx-auto grid max-w-360 grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Health banner — heading & script lettering are part of the artwork */}
        <div
          data-reveal
          className="relative overflow-hidden rounded-[28px] bg-cover bg-center shadow-[0_24px_50px_-24px_rgba(13,60,100,0.35)] aspect-video lg:aspect-1782/883"
        >
          <div
            role="img"
            aria-label="Safer, healthier, happier together — family health insurance"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${leftBg})` }}
          />
          {/* Plan-picker chip */}
          <a
            href="#plans"
            className="absolute bottom-[8%] left-4 right-4 flex items-center gap-3 rounded-2xl bg-white py-3 pr-5 pl-3 shadow-[0_18px_38px_-16px_rgba(13,60,100,0.35)] transition-transform duration-300 hover:-translate-y-1 sm:bottom-[9%] sm:left-auto sm:right-[6%] sm:w-[46%] sm:max-w-107.5"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#cbf2f1]">
              <CalendarGlyph />
            </span>
            <span className="text-[12px] leading-snug font-bold text-[#082f68] sm:text-[15px]">
              Find the right
              <br />
              plan in 2 minutes
            </span>
            <Arrow className="ml-auto h-5 w-5 shrink-0 text-[#0b9b9f] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Travel banner */}
        <div
          data-reveal
          className="relative overflow-hidden rounded-[28px] bg-cover bg-center shadow-[0_24px_50px_-24px_rgba(13,60,100,0.35)] aspect-video lg:aspect-1782/883"
        >
          <div
            role="img"
            aria-label="Airplane wing over clouds at sunset"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${rightBg})` }}
          />
          <div className="relative flex h-full flex-col justify-center px-6 py-6 sm:px-10 lg:px-12">
            <p className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.18em] text-[#90dcf7] uppercase">
              Travel Insurance
              <span className="h-1.5 w-1.5 rounded-full bg-[#90dcf7]" aria-hidden="true" />
              <span className="h-px w-14 bg-[#90dcf7]/60 sm:w-20" aria-hidden="true" />
            </p>
            <h2 className="mt-2 text-2xl leading-[1.12] font-bold tracking-tight sm:text-4xl">
              <span className="text-[#fafafc]">Go Further</span>
              <br />
              <span className="text-[#99ddfb]">Worry Less</span>
            </h2>
            <p className="mt-2 max-w-md text-[12px] leading-relaxed text-[#f8fbfd]/95 sm:text-[15px]">
              Get comprehensive travel insurance for international and domestic trips at the best
              prices.
            </p>
            <a
              href="#travel-insurance"
              className="mt-4 inline-flex w-fit items-center gap-2.5 rounded-full bg-[#fee543] px-5 py-2 text-[13px] font-bold text-[#005397] shadow-[0_10px_24px_-12px_rgba(0,0,0,0.35)] transition-all duration-300 hover:brightness-105 hover:shadow-[0_14px_28px_-12px_rgba(0,0,0,0.4)]"
            >
              Explore Travel Plans
              <Arrow className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
