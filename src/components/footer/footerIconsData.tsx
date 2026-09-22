import type { ReactNode } from 'react'

export const SOCIALS: { label: string; glyph: ReactNode }[] = [
  {
    label: 'LinkedIn',
    glyph: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5v9.06H4V8.5h2.94ZM7.13 5.69a1.7 1.7 0 1 1-3.4 0 1.7 1.7 0 0 1 3.4 0ZM20 12.9v4.66h-2.93v-4.33c0-1.09-.39-1.83-1.36-1.83-.74 0-1.18.5-1.38.98-.07.17-.09.42-.09.66v4.52H11.3s.04-7.34 0-8.1h2.94v1.14c.39-.6 1.08-1.45 2.63-1.45 1.92 0 3.13 1.25 3.13 3.75Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    glyph: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    glyph: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    glyph: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M17.9 3h3.1l-6.8 7.8L22.2 21h-6.3l-4.9-6.4L5.4 21H2.3l7.3-8.3L2 3h6.4l4.4 5.9L17.9 3Zm-1.1 16.1h1.7L7.5 4.7H5.7l11.1 14.4Z" />
      </svg>
    ),
  },
]

export const CONTACTS: {
  icon: ReactNode
  content: ReactNode
  align: 'start' | 'center'
}[] = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path d="M12 21s-7-5.3-7-11a7 7 0 1 1 14 0c0 5.7-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
      ),
      content: (
        <p className="text-[12px] leading-relaxed text-[#b1c6de]">
          213, Second Floor, Imperial Tower, <br />
          Near Gurudwara, C Block Commercial Complex, <br />
          Naraina Vihar, New Delhi - 110028
        </p>
      ),
      align: 'start',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
        </svg>
      ),
      content: (
        <a href="tel:7302647817" className="text-[12px] text-[#b1c6de] transition-colors hover:text-white">
          73026 47817
        </a>
      ),
      align: 'center',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
      content: (
        <a
          href="mailto:contactus@indexiainsurance.com"
          className="text-[12px] break-all text-[#b1c6de] transition-colors hover:text-white"
        >
          contactus@indexiainsurance.com
        </a>
      ),
      align: 'center',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path d="M4 13a8 8 0 0 1 16 0" />
          <rect x="2.5" y="13" width="4.5" height="6.5" rx="2" />
          <rect x="17" y="13" width="4.5" height="6.5" rx="2" />
          <path d="M19.5 19.5a3.5 3.5 0 0 1-3.5 2.5h-2" />
        </svg>
      ),
      content: <span className="text-[12px] text-[#b1c6de]">24x7 Customer Support</span>,
      align: 'center',
    },
  ]
