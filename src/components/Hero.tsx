import heroBg from '../assets/hero/hero-bg.webp'
import { ScriptTagline, SideRail } from './hero/HeroParts'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative mx-auto">
        <img
          src={heroBg}
          alt="Family enjoying a mountain view at sunset"
          className="absolute inset-0 size-full object-cover"
        />
        {/* Soft fade at the top for the icon rail */}
        <div className="absolute inset-x-0 top-0 h-60 hidden bg-linear-to-b from-white/70 to-transparent lg:block" />
        {/* Mobile legibility scrim — the copy sits directly on the photo below lg */}
        <div
          className="absolute inset-0 bg-linear-to-b from-white/20 via-white/55 to-white/70 lg:hidden"
          aria-hidden="true"
        />

        <ScriptTagline />

        {/* Content */}
        <div className="relative z-10 flex min-h-svh flex-col justify-between px-6 pt-28 pb-10 lg:px-14 lg:pt-32 lg:pb-12">
          <div
            data-reveal-group
            className="grid flex-1 items-center gap-10 lg:grid-cols-[1.05fr_auto] lg:gap-16"
          >
            <div className="max-w-xl">
              <p data-reveal className="flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-teal uppercase">
                Protection today for a brighter tomorrow.
                <span className="h-px w-10 bg-teal/60" aria-hidden="true" />
              </p>
              <h1
                data-reveal
                className="mt-5 text-5xl leading-[1.05] font-extrabold tracking-tight bg-linear-to-b from-royal to-indigo bg-clip-text text-transparent lg:text-[4rem]"
              >
                Life’s Uncertain.
                <br />
                Your Protection
                <br />
                <span className="bg-linear-to-t from-nav-accent to-[#12b5a4] bg-clip-text text-transparent">
                  Shouldn’t Be.
                </span>
              </h1>
              {/* Gold accent bar */}
              <div data-reveal className="mt-6 h-2 w-32 rounded-full bg-gold" aria-hidden="true" />
              <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-steel">
                Compare, choose and buy insurance plans from India’s top insurers – all in one
                place. Simple. Transparent. Trusted.
              </p>

              {/* CTAs */}
              <div data-reveal className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#plans"
                  className="group flex items-center gap-3 rounded-full bg-linear-to-r from-[#39b796] to-teal px-8 py-4 text-sm font-bold text-white shadow-lg shadow-teal/25 transition-transform hover:scale-[1.03]"
                >
                  Explore Plans
                  <svg
                    viewBox="0 0 20 20"
                    className="size-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 10h13m-5-5 5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#calculator"
                  className="flex items-center gap-3 rounded-full border-2 border-royal/30 bg-white/80 px-7 py-3.5 text-sm font-bold text-royal backdrop-blur-sm transition-colors hover:border-royal/60 hover:bg-white"
                >
                  <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
                    <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm1 3v3h10V5H7Zm0 6v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Zm-8 4v2h2v-2H7Zm4 0v4h6v-4h-6Z" />
                  </svg>
                  Calculate Premium
                </a>
              </div>
            </div>

            {/* Icon rail */}
            <SideRail />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
