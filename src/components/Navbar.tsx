import { useRef, useState } from 'react'
import logo from '../assets/logo.webp'
import { NAV_ITEMS } from './navbar/navData'
import { HamburgerButton, MobileMenu } from './navbar/MobileMenu'
import { LinksPanel, MegaPanel, SupportPanel } from './navbar/panels'
import { Chevron } from './navbar/primitives'
import { useNavbarDropdowns, useScrolled } from './navbar/useNavbarState'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const scrolled = useScrolled()
  const navRef = useRef<HTMLElement>(null)
  const { openMenu, openPanel, schedulePanelClose, closePanels, togglePanel } =
    useNavbarDropdowns(navRef)

  const openItem = NAV_ITEMS.find((i) => i.label === openMenu) ?? null
  const wideOpen = openItem && (openItem.kind === 'mega' || openItem.kind === 'panel')

  return (
    <div className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="relative mx-auto w-full" ref={navRef}>
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
          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => openPanel(item.label)}
                onMouseLeave={() => schedulePanelClose(item.label)}
              >
                <button
                  type="button"
                  aria-expanded={openMenu === item.label}
                  onClick={() => togglePanel(item.label)}
                  className={`flex cursor-pointer items-center gap-1.5 py-2 text-[15px] font-medium transition-colors ${
                    openMenu === item.label ? 'text-primary' : 'text-body hover:text-primary'
                  }`}
                >
                  {item.label}
                  <Chevron className={openMenu === item.label ? 'rotate-180' : ''} />
                </button>
                {openMenu === item.label && item.kind === 'links' && (
                  <LinksPanel item={item} onNavigate={closePanels} />
                )}
              </li>
            ))}
          </ul>

          {/* Sign in */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#login"
              className="btn-gradient-cta rounded-xl px-7 py-2.5 text-sm font-bold text-primary-contrast shadow-md shadow-primary/25"
            >
              Sign in
            </a>
          </div>

          <HamburgerButton open={mobileOpen} onToggle={() => setMobileOpen((v) => !v)} />
        </div>

        {wideOpen && openItem && (
          <div
            className={`absolute top-full z-40 hidden pt-3 lg:block ${
              openItem.kind === 'mega' ? 'left-1/2 -translate-x-1/2' : 'right-0'
            }`}
            onMouseEnter={() => openPanel(openItem.label)}
            onMouseLeave={() => schedulePanelClose(openItem.label)}
          >
            {openItem.kind === 'mega' ? (
              <div className="w-[min(76rem,94vw)]">
                <MegaPanel item={openItem} onNavigate={closePanels} />
              </div>
            ) : (
              <div
                className="w-max max-w-[94vw]"
                style={{ minWidth: `${openItem.groups.length * 13}rem` }}
              >
                <SupportPanel item={openItem} onNavigate={closePanels} />
              </div>
            )}
          </div>
        )}

        <MobileMenu
          items={NAV_ITEMS}
          open={mobileOpen}
          section={mobileSection}
          onToggleSection={(label) =>
            setMobileSection((cur) => (cur === label ? null : label))
          }
          onNavigate={() => setMobileOpen(false)}
        />
      </nav>
    </div>
  )
}

export default Navbar
