import { HELP_LINK, type NavItem } from './navData'
import { Chevron, LinkIcon } from './primitives'

const linkClass =
  'block rounded-lg px-3 py-1.5 text-[13px] leading-snug font-medium text-body transition-colors hover:bg-primary-soft hover:text-primary-strong'

function MobilePanel({
  item,
  onNavigate,
}: {
  item: NavItem
  onNavigate: () => void
}) {
  if (item.kind === 'mega') {
    return (
      <div className="pb-2 pl-3">
        {item.columns.map((col) => (
          <div key={col.title}>
            <p className="pt-2 pb-1 text-[11px] font-bold tracking-wider text-navy uppercase">
              {col.title}
            </p>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={onNavigate} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  if (item.kind === 'panel') {
    return (
      <div className="pb-2 pl-3">
        {item.groups.map((group) => (
          <div key={group.title}>
            <p className="pt-2 pb-1 text-[11px] font-bold tracking-wider text-navy uppercase">
              {group.title}
            </p>
            {group.description && (
              <p className="pb-1.5 text-[12px] leading-snug text-muted">{group.description}</p>
            )}
            {group.loginLabel && (
              <a
                href={group.loginHref ?? HELP_LINK}
                onClick={onNavigate}
                className="btn-gradient-outline mb-1.5 inline-block rounded-lg px-3 py-1.5 text-[12px] font-bold text-royal"
              >
                {group.loginLabel}
              </a>
            )}
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={onNavigate} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  return (
    <ul className="pb-2 pl-3">
      {item.items.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            onClick={onNavigate}
            className={`${linkClass} flex items-center gap-2.5`}
          >
            <LinkIcon link={link} />
            <span className="min-w-0 flex-1">
              {link.label}
              {link.note && (
                <span className="block text-[12px] font-bold text-primary-strong">{link.note}</span>
              )}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export function MobileMenu({
  items,
  open,
  section,
  onToggleSection,
  onNavigate,
}: {
  items: NavItem[]
  open: boolean
  section: string | null
  onToggleSection: (label: string) => void
  onNavigate: () => void
}) {
  return (
    <div
      className={`grid transition-all duration-300 ease-out lg:hidden ${
        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
      inert={!open}
    >
      <div className="overflow-hidden">
        <div className="mt-2 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl bg-surface p-4 shadow-[0_12px_40px_-12px_rgba(17,42,35,0.18)]">
          <ul className="divide-y divide-border-subtle">
            {items.map((item, index) => (
              <li
                key={item.label}
                className={`transition-all duration-300 ${
                  open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${index * 40}ms` : '0ms' }}
              >
                <button
                  type="button"
                  aria-expanded={section === item.label}
                  onClick={() => onToggleSection(item.label)}
                  className="flex w-full cursor-pointer items-center justify-between py-3 text-base font-medium text-body"
                >
                  {item.label}
                  <Chevron className={section === item.label ? 'rotate-180' : ''} />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    section === item.label ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <MobilePanel item={item} onNavigate={onNavigate} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <a
              href="#login"
              onClick={onNavigate}
              className="btn-gradient-cta block rounded-xl py-2.5 text-center text-sm font-bold text-primary-contrast"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HamburgerButton({
  open,
  onToggle,
}: {
  open: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      className="flex size-11 cursor-pointer items-center justify-center rounded-lg text-body hover:bg-surface-alt lg:hidden"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      onClick={onToggle}
    >
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
        <path
          d="M4 7h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`origin-center transition-all duration-300 ${
            open ? 'translate-y-1.25 rotate-45' : ''
          }`}
        />
        <path
          d="M4 12h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`origin-center transition-all duration-200 ${
            open ? 'scale-x-0 opacity-0' : ''
          }`}
        />
        <path
          d="M4 17h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`origin-center transition-all duration-300 ${
            open ? '-translate-y-1.25 -rotate-45' : ''
          }`}
        />
      </svg>
    </button>
  )
}
