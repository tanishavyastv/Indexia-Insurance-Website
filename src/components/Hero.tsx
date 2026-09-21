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

function ScriptTagline() {
  return (
    <div
      className="pointer-events-none absolute right-[30%] bottom-[60%] z-10 hidden w-max rotate-[-16deg] md:block"
      aria-hidden="true"
    >
      <p className="font-script text-6xl whitespace-nowrap text-script-ink lg:text-7xl">
        Insure
        <br />
        <span className="pl-[0.5em]">Your Journey</span>
      </p>

      <svg
        viewBox="0 0 347.6 31.7"
        className="absolute left-[-1%] top-[94%] w-[105%] text-marker"
        aria-hidden="true"
      >
        <path
          d="M346.3,11.6C260.5,0 173.4,0.8 87.5,11.8C66.1,14.5 44.5,18.1 23.7,23.3C18.8,24.6 3.1,28.4 0,31.1C0.5,31.3 0.2,31.7 1.1,31.7C5.9,31.6 20.8,26.6 27.4,25.8C26.5,27.3 25,28 25.2,30.1C25.8,30.5 26,30.9 26.8,30.9C30.2,31.1 43.6,26.9 47.7,25.9C63.1,21.9 78.7,19.3 94.3,16.8C98.5,16 102.9,14.4 107.1,15C104,18.2 94.3,16.1 94.9,23C97.3,24.9 100.6,23.4 103.4,22.8C108,21.9 126.5,20.4 128.8,19C125.7,18 121.5,19 118.8,17.2C122.7,14.1 153.8,11.5 160.6,11C199.8,8 237.5,6.4 276.9,7.6C292.7,8.1 308.5,9 324.3,10.5C330.3,11.1 336.2,11.9 342.2,12.4C343,12.4 347.5,12.9 347.6,12.3C347.6,11.8 346.5,11.8 346.3,11.6Z"
          fill="currentColor"
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
          <img src={icon} alt="" className="size-21 drop-shadow-2xl" loading="lazy" />
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

        {/* Script tagline — pinned to the hero at the mock's position (see ScriptTagline) */}
        <ScriptTagline />

        {/* Content */}
        <div className="relative z-10 flex min-h-svh flex-col justify-between px-6 pt-28 pb-10 lg:px-14 lg:pt-32 lg:pb-12">
          <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.05fr_auto] lg:gap-16">
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

            {/* Icon rail */}
            <SideRail />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
