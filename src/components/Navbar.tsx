import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'

type NavLink = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'Insurance Plans',
    href: '#plans',
    children: [
      { label: 'Life Insurance', href: '#plans' },
      { label: 'Health Insurance', href: '#plans' },
      { label: 'Travel Insurance', href: '#plans' },
    ],
  },
  { label: 'Renew', href: '#renew' },
  { label: 'Claims', href: '#claims' },
  {
    label: 'Resources',
    href: '#resources',
    children: [
      { label: 'Blog', href: '#resources' },
      { label: 'FAQs', href: '#resources' },
      { label: 'Glossary', href: '#resources' },
    ],
  },
  { label: 'About Us', href: '#about' },
]

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`size-3 transition-transform duration-200 ${className ?? ''}`}
      aria-hidden="true"
    >
      <path
        d="M2 4.5 6 8.5 10 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [activeLink, setActiveLink] = useState('Home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchWrapRef = useRef<HTMLDivElement>(null)

  // Transparent over the hero; frosted card once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Focus the field when it opens
  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  // Close on Escape or click outside the search area
  useEffect(() => {
    if (!searchOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false)
    }
    const onPointerDown = (e: PointerEvent) => {
      if (!searchWrapRef.current?.contains(e.target as Node)) setSearchOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [searchOpen])

  return (
    <div className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto w-full">
        <div
          className={`flex h-20 items-center justify-between gap-6 rounded-2xl px-6 transition-all duration-300 ease-out lg:px-10 ${
            scrolled ? 'navbar-frosted' : 'bg-transparent shadow-none'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="shrink-0" aria-label="Indexia Insurance — Home">
            <img src={logo} alt="Indexia Insurance" className="h-15 w-auto lg:h-20" />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
            {NAV_LINKS.map((link) =>
              link.children ? (
                // Dropdown trigger — only opens the menu; never navigates or becomes active
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === link.label}
                    onClick={() => setOpenMenu((cur) => (cur === link.label ? null : link.label))}
                    className="flex cursor-pointer items-center gap-1.5 py-2 text-[15px] font-medium text-body transition-colors hover:text-primary"
                  >
                    {link.label}
                    <Chevron className={openMenu === link.label ? 'rotate-180' : ''} />
                  </button>
                  {/* Dropdown pages */}
                  {openMenu === link.label && (
                    <ul className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4">
                      <ul className="overflow-hidden rounded-xl bg-surface py-2 shadow-xl ring-1 ring-border-subtle">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              onClick={() => setOpenMenu(null)}
                              className="block px-4 py-2.5 text-sm font-medium text-body transition-colors hover:bg-primary-soft hover:text-primary-strong"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label} className="relative">
                  <a
                    href={link.href}
                    aria-current={link.label === activeLink ? 'page' : undefined}
                    onClick={() => setActiveLink(link.label)}
                    className={`flex items-center gap-1.5 py-2 text-[15px] font-medium transition-colors ${
                      link.label === activeLink ? 'text-primary-strong' : 'text-body hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </a>
                  {/* Active indicator bar — sits right below the active link */}
                  {link.label === activeLink && (
                    <span className="absolute inset-x-0 -bottom-1 mx-auto h-1 w-10 rounded-full bg-primary" />
                  )}
                </li>
              ),
            )}
          </ul>

          {/* Right cluster: search + phone + divider + auth buttons */}
          <div className="hidden items-center gap-4 xl:flex">
            {/* Search — field expands inline within the navbar, growing leftward from the icon */}
            <div ref={searchWrapRef} className="relative flex items-center">
              <div
                inert={!searchOpen}
                className={`absolute top-1/2 right-11 z-10 -translate-y-1/2 overflow-hidden transition-all duration-300 ease-out ${
                  searchOpen ? 'w-80 opacity-100' : 'w-0 opacity-0'
                }`}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSearchOpen(false)
                  }}
                >
                  <div className="relative">
                    <svg
                      viewBox="0 0 24 24"
                      className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <input
                      ref={searchInputRef}
                      type="search"
                      aria-label="Search"
                      placeholder="Search plans, claims…"
                      className="h-11 w-80 rounded-full border-2 border-border-subtle bg-surface pr-4 pl-10 text-sm text-body shadow-lg shadow-indexia-gray-950/5 outline-none transition-colors placeholder:text-muted focus:border-primary"
                    />
                  </div>
                </form>
              </div>
              <button
                type="button"
                className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-body transition-colors hover:bg-surface-alt hover:text-primary"
                aria-label={searchOpen ? 'Close search' : 'Open search'}
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen((v) => !v)}
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="m20 20-3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <span className="h-10 w-px bg-border-subtle" aria-hidden="true" />

            {/* Auth buttons */}
            <a
              href="#login"
              className="btn-gradient-outline rounded-xl px-7 py-2.5 text-sm font-bold text-royal"
            >
              Login
            </a>
            <a
              href="#quote"
              className="btn-gradient-cta rounded-xl px-7 py-2.5 text-sm font-bold text-primary-contrast shadow-md shadow-primary/25"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger — bars morph into an X */}
          <button
            type="button"
            className="flex size-11 cursor-pointer items-center justify-center rounded-lg text-body hover:bg-surface-alt xl:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
              <path
                d="M4 7h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={`origin-center transition-all duration-300 ${
                  mobileOpen ? 'translate-y-1.25 rotate-45' : ''
                }`}
              />
              <path
                d="M4 12h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={`origin-center transition-all duration-200 ${
                  mobileOpen ? 'scale-x-0 opacity-0' : ''
                }`
                }
              />
              <path
                d="M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={`origin-center transition-all duration-300 ${
                  mobileOpen ? '-translate-y-1.25 -rotate-45' : ''
                }`}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu — expands/collapses smoothly (grid-rows animation) with staggered items */}
        <div
          className={`grid transition-all duration-300 ease-out xl:hidden ${
            mobileOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
          inert={!mobileOpen}
        >
          <div className="overflow-hidden">
            <div className="mt-2 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl bg-surface p-4 shadow-[0_12px_40px_-12px_rgba(17,42,35,0.18)]">
              <ul className="divide-y divide-border-subtle">
                {NAV_LINKS.map((link, index) =>
                  link.children ? (
                    <li
                      key={link.label}
                      className={`transition-all duration-300 ${
                        mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                      }`}
                      style={{ transitionDelay: mobileOpen ? `${index * 40}ms` : '0ms' }}
                    >
                      {/* Accordion — expands smoothly to show the dropdown pages */}
                      <button
                        type="button"
                        aria-expanded={mobileSection === link.label}
                        onClick={() =>
                          setMobileSection((cur) => (cur === link.label ? null : link.label))
                        }
                        className="flex w-full cursor-pointer items-center justify-between py-3 text-base font-medium text-body"
                      >
                        {link.label}
                        <Chevron className={mobileSection === link.label ? 'rotate-180' : ''} />
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          mobileSection === link.label ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <ul className="pb-2 pl-3">
                            {link.children.map((child) => (
                              <li key={child.label}>
                                <a
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-lg px-3 py-2 text-sm font-medium text-body transition-colors hover:bg-primary-soft hover:text-primary-strong"
                                >
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li
                      key={link.label}
                      className={`transition-all duration-300 ${
                        mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                      }`}
                      style={{ transitionDelay: mobileOpen ? `${index * 40}ms` : '0ms' }}
                    >
                      <a
                        href={link.href}
                        onClick={() => {
                          setActiveLink(link.label)
                          setMobileOpen(false)
                        }}
                        className={`block py-3 text-base font-medium ${
                          link.label === activeLink ? 'text-primary-strong' : 'text-body'
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-4 flex gap-3">
                <a
                  href="#login"
                  className="btn-gradient-outline flex-1 rounded-xl py-2.5 text-center text-sm font-bold text-royal"
                >
                  Login
                </a>
                <a
                  href="#quote"
                  className="btn-gradient-cta flex-1 rounded-xl py-2.5 text-center text-sm font-bold text-primary-contrast"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
