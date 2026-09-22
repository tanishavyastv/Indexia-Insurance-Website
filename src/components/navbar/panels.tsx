import type { CSSProperties } from 'react'
import { HELP_LINK, PANEL_ALIGN, PRODUCT_LINK, type NavItem } from './navData'
import { ArrowSlideIn, IconChip, LinkIcon } from './primitives'

const colStyle = (i: number, acc: string, soft: string) =>
  ({ '--col-delay': `${i * 40}ms`, '--acc': acc, '--soft': soft }) as CSSProperties

const megaLink =
  'mega-link block rounded-md px-2 py-1.5 text-[12.5px] leading-snug text-body'

  export function MegaPanel({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  if (item.kind !== 'mega') return null
  return (
    <div className="dropdown-card overflow-hidden rounded-2xl bg-surface shadow-[0_24px_60px_-16px_rgba(2,48,69,0.28)] ring-1 ring-border-subtle">
      <div className="dropdown-topline h-1" aria-hidden="true" />
      <div className="grid grid-cols-5 gap-1 p-4">
        {item.columns.map((col, i) => (
          <div key={col.title} className="dropdown-col min-w-0" style={colStyle(i, col.accent, col.soft)}>
            <a
              href={PRODUCT_LINK}
              onClick={onNavigate}
              className="group flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-(--soft)"
            >
              <IconChip path={col.icon} accent={col.accent} soft={col.soft} />
              <span className="text-[13px] leading-tight font-bold text-(--navy,#0b224e) transition-colors group-hover:text-(--acc)">
                {col.title}
              </span>
            </a>
            <ul className="mt-0.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={onNavigate} className={megaLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SupportPanel({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  if (item.kind !== 'panel') return null
  return (
    <div className="dropdown-card overflow-hidden rounded-2xl bg-surface shadow-[0_24px_60px_-16px_rgba(2,48,69,0.28)] ring-1 ring-border-subtle">
      <div className="dropdown-topline h-1" aria-hidden="true" />
      <div
        className="grid gap-0.5 px-3.5 pt-3"
        style={{ gridTemplateColumns: `repeat(${item.groups.length}, minmax(0, 1fr))` }}
      >
        {item.groups.map((group, i) => (
          <div key={group.title} className="dropdown-col min-w-0" style={colStyle(i, group.accent, group.soft)}>
            <div className="flex items-center gap-2 p-1.5">
              <IconChip path={group.icon} accent={group.accent} soft={group.soft} />
              <span className="text-[11.5px] leading-tight font-bold tracking-wide text-(--navy,#0b224e) uppercase">
                {group.title}
              </span>
            </div>
            {group.description && (
              <p className="px-2 pb-1.5 text-[12px] leading-snug text-muted">{group.description}</p>
            )}
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={onNavigate}
                    className="mega-link block rounded-md px-2 py-1 text-[12px] leading-snug text-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {item.groups.some((g) => g.loginLabel) && (
        <div className="mx-3.5 mb-3 mt-1.5 flex items-center justify-between gap-3 rounded-lg bg-[#eef7fc] px-3.5 py-2 ring-1 ring-[#d4ecf7]">
          <div>
            <p className="text-[12.5px] font-bold text-(--navy,#0b224e)">
              {item.groups.find((g) => g.loginLabel)?.loginLabel}
            </p>
            <p className="text-[11.5px] text-muted">
              {item.groups.find((g) => g.loginLabel)?.description}
            </p>
          </div>
          <a
            href={item.groups.find((g) => g.loginLabel)?.loginHref ?? HELP_LINK}
            onClick={onNavigate}
            className="btn-gradient-cta shrink-0 rounded-lg px-5 py-2 text-[12px] font-bold text-primary-contrast"
          >
            Login
          </a>
        </div>
      )}
    </div>
  )
}

export function LinksPanel({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  if (item.kind !== 'links') return null
  return (
    <div className={`absolute top-full z-50 pt-3 ${PANEL_ALIGN[item.align]}`}>
      <div className="dropdown-card w-72 overflow-hidden rounded-xl bg-surface shadow-[0_18px_44px_-14px_rgba(2,48,69,0.28)] ring-1 ring-border-subtle">
        <div className="dropdown-topline h-1" aria-hidden="true" />
        <ul className="py-2">
          {item.items.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={onNavigate}
                className="mega-link group/link flex items-center gap-2.5 rounded-md px-3 py-2"
              >
                <LinkIcon link={link} />
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] leading-snug font-medium text-body">
                    {link.label}
                  </span>
                  {link.note && (
                    <span className="block text-[12px] font-bold text-primary-strong">{link.note}</span>
                  )}
                </span>
                <ArrowSlideIn />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
