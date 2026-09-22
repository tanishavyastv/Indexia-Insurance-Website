import { useLayoutEffect } from 'react'

const ITEM_SELECTOR = '[data-reveal]'
const GROUP_SELECTOR = '[data-reveal-group]'
const STEP_MS = 90
const MAX_STAGGER_MS = 720

export function useScrollReveal() {
  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.add('reveal-ready')

    const groups = Array.from(document.querySelectorAll<HTMLElement>(GROUP_SELECTOR))
    for (const group of groups) {
      group.querySelectorAll(ITEM_SELECTOR).forEach((el, i) => {
        ;(el as HTMLElement).style.setProperty('--reveal-delay', `${Math.min(i * STEP_MS, MAX_STAGGER_MS)}ms`)
      })
    }

    const shown = new WeakSet<Element>()
    const pending: Element[] = []
    const reveal = (target: Element) => {
      if (shown.has(target)) return
      shown.add(target)
      if (target.matches(GROUP_SELECTOR)) {
        target.querySelectorAll(ITEM_SELECTOR).forEach((el) => el.setAttribute('data-reveal', 'in'))
      } else {
        target.setAttribute('data-reveal', 'in')
      }
      observer.unobserve(target)
      const i = pending.indexOf(target)
      if (i !== -1) pending.splice(i, 1)
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    let ticking = false
    const sweep = () => {
      ticking = false
      for (const target of [...pending]) {
        if (target.getBoundingClientRect().bottom < 0) reveal(target)
      }
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(sweep)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    for (const group of groups) {
      observer.observe(group)
      pending.push(group)
      group.querySelectorAll(ITEM_SELECTOR).forEach((el) => el.setAttribute('data-reveal', 'out'))
    }
    const standalones = Array.from(document.querySelectorAll<HTMLElement>(ITEM_SELECTOR)).filter(
      (el) => !el.closest(GROUP_SELECTOR),
    )
    for (const el of standalones) {
      el.setAttribute('data-reveal', 'out')
      observer.observe(el)
      pending.push(el)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      root.classList.remove('reveal-ready')
    }
  }, [])
}
