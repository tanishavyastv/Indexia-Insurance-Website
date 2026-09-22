import { useEffect, useRef, useState } from 'react'

const CLOSE_DELAY_MS = 150

export function useNavbarDropdowns(navRef: React.RefObject<HTMLElement | null>) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const hoverCloseTimer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(hoverCloseTimer.current), [])

  useEffect(() => {
    if (!openMenu) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    const onPointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [openMenu, navRef])

  const openPanel = (label: string) => {
    window.clearTimeout(hoverCloseTimer.current)
    setOpenMenu(label)
  }

  const schedulePanelClose = (current: string | null) => {
    window.clearTimeout(hoverCloseTimer.current)
    hoverCloseTimer.current = window.setTimeout(() => {
      setOpenMenu((cur) => (cur === current ? null : cur))
    }, CLOSE_DELAY_MS)
  }

  const closePanels = () => {
    window.clearTimeout(hoverCloseTimer.current)
    setOpenMenu(null)
  }

  const togglePanel = (label: string) => {
    setOpenMenu((cur) => (cur === label ? null : label))
  }

  return { openMenu, openPanel, schedulePanelClose, closePanels, togglePanel }
}

export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
