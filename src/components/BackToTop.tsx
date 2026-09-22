import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let threshold = window.innerHeight
    const measure = () => {
      const hero = document.getElementById('home')
      threshold = hero ? hero.offsetTop + hero.offsetHeight - 80 : window.innerHeight
    }
    measure()
    window.addEventListener('resize', measure)

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setVisible(window.scrollY > threshold)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed right-6 bottom-6 z-40 grid size-13 place-items-center rounded-full bg-linear-to-br from-teal to-cta-from text-white shadow-[0_10px_28px_-8px_rgba(6,121,140,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_14px_34px_-8px_rgba(6,121,140,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
        <path
          d="M12 19V5m-7 7 7-7 7 7"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
