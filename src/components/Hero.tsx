import heroBg from '../assets/hero/hero-bg.png'
import healthBadge from '../assets/hero/health-badge.png'
import familyBadge from '../assets/hero/family-badge.png'
import dreamsBadge from '../assets/hero/dreams-badge.png'
import journeysBadge from '../assets/hero/journeys-badge.png'
import priorityBadge from '../assets/hero/priority-badge.png'

const SIDE_BADGES = [
  { icon: healthBadge },
  { icon: familyBadge },
  { icon: dreamsBadge },
  { icon: journeysBadge },
  { icon: priorityBadge },
]

/* Handwritten "Because People Matter" with the gold underline swoosh */
function ScriptTagline() {
  return (
    <div className="relative hidden md:block" aria-hidden="true">
      <p className="font-script text-6xl leading-[0.95] font-bold tracking-wide text-royal lg:text-7xl">
        Because
        <br />
        <span className="pl-10">People Matter</span>
      </p>
      {/* Gold swoosh */}
      <svg
        viewBox="0 0 220 30"
        className="absolute left-2 w-100 text-gold"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 22 C 60 10, 150 4, 216 8"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M30 27 C 80 18, 150 12, 200 14"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

/* Right-side vertical list of icon badges */
function SideRail() {
  return (
    <ul className="hidden flex-col gap-2 lg:flex" aria-label="What we protect">
      {SIDE_BADGES.map(({ icon}) => (
          <img src={icon} alt="" className="size-25 drop-shadow-2xl" loading="lazy" />
      ))}
    </ul>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative mx-auto">
        {/* Photo backdrop */}
        <img
          src={heroBg}
          alt="Family enjoying a mountain view at sunset"
          className="absolute inset-0 size-full object-cover"
        />
        {/* Soft fade at the top for the icon rail */}
        <div className="absolute inset-x-0 top-0 h-60 hidden bg-linear-to-b from-white/70 to-transparent lg:block" />

        {/* Content */}
        <div className="relative z-10 flex min-h-svh flex-col justify-between px-6 pt-28 pb-10 lg:px-14 lg:pt-32 lg:pb-12">
          <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.05fr_auto_auto] lg:gap-16">
            {/* Copy column */}
            <div className="max-w-xl">
              <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-teal uppercase">
                Protect Today. Prosper Tomorrow.
                <span className="h-px w-10 bg-teal/60" aria-hidden="true" />
              </p>
              <h1 className="mt-5 text-5xl leading-[1.04] font-extrabold tracking-tight text-navy lg:text-[4.4rem]">
                Life’s Uncertain.
                <br />
                Your Protection
                <br />
                <span className="text-teal">Shouldn’t Be.</span>
              </h1>
              {/* Gold accent bar */}
              <div className="mt-6 h-2 w-32 rounded-full bg-gold" aria-hidden="true" />
              <p className="mt-6 max-w-lg text-base leading-relaxed text-steel lg:text-lg">
                Compare, choose and buy insurance plans from India’s top insurers – all in one
                place. Simple. Transparent. Trusted.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
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

            {/* Script tagline */}
            <ScriptTagline />

            {/* Icon rail */}
            <SideRail />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
