import healthBadge from '../../assets/hero/health-badge.webp'
import familyBadge from '../../assets/hero/family-badge.webp'
import dreamsBadge from '../../assets/hero/dreams-badge.webp'
import journeysBadge from '../../assets/hero/journeys-badge.webp'
import priorityBadge from '../../assets/hero/priority-badge.webp'

const SIDE_BADGES = [healthBadge, familyBadge, dreamsBadge, journeysBadge, priorityBadge]

export function ScriptTagline() {
  return (
    <div
      className="pointer-events-none absolute right-[30%] bottom-[60%] z-10 hidden w-max rotate-[-16deg] md:block"
      aria-hidden="true"
    >
      <p className="font-script text-6xl whitespace-nowrap text-script-ink lg:text-6xl">
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

export function SideRail() {
  return (
    <ul className="hidden flex-col gap-2 lg:flex" aria-label="What we protect">
      {SIDE_BADGES.map((icon) => (
        <li key={icon}>
          <img src={icon} alt="" data-reveal className="size-21 drop-shadow-2xl" loading="lazy" />
        </li>
      ))}
    </ul>
  )
}
