import { useEffect, useRef } from 'react'

/**
 * One-shot scroll trigger for the How It Works wave.
 * Sets `data-sequence="run"` on the steps list when ~35% of it is visible;
 * the CSS in animations.css chains halo pulse → line draw → arrow pop per step
 * from that moment. Respects prefers-reduced-motion (skips straight to done).
 */
export function useStepSequence<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.setAttribute('data-sequence', 'done')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute('data-sequence', 'run')
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
