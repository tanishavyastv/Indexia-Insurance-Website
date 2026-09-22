import footerLogo from '../assets/logo.webp'
import { columns } from './footer/footerData'
import { CONTACTS, SOCIALS } from './footer/footerIconsData'
import { ContactIcon, SocialIcon } from './footer/FooterIcons'

export default function Footer() {
  return (
    <footer className="relative z-10 -mt-9">
      <div
        className="relative w-full overflow-hidden rounded-t-[28px] border border-b-0 border-[#1e4a63]/70 border-solid bg-[#002943]/40 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.6)]"
        style={{
          backgroundImage: [
            'radial-gradient(60rem 40rem at 8% 0%, rgba(2,94,115,0.55), transparent 60%)',
            'radial-gradient(50rem 34rem at 0% 100%, rgba(1,58,92,0.5), transparent 65%)',
            'linear-gradient(160deg, rgba(0,41,67,0.55), rgba(0,23,45,0.75))',
            'linear-gradient(0deg, #01203a, #01203a)',
          ].join(', '),
        }}
      >
        <div
          data-reveal-group
          className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.15fr_auto_1fr_1fr_1.35fr] lg:gap-x-10 lg:px-12 lg:py-10"
        >
          {/* Brand column */}
          <div data-reveal className="lg:border-r lg:border-[#1e4a63]/60 lg:pr-10">
            <img src={footerLogo} alt="Indexia Insurance" className="h-12 w-auto" />
            <p className="mt-3 max-w-xs text-[12px] leading-relaxed text-[#9db7cd]">
              A trusted insurance platform committed to protecting what matters most to you and
              your loved ones.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, glyph }) => (
                <SocialIcon key={label} label={label}>
                  {glyph}
                </SocialIcon>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading} data-reveal>
              <h3 className="text-[15px] font-bold text-[#fafbfb]">{col.heading}</h3>
              <span className="mt-2 block h-0.75 w-8 rounded-full bg-[#01a1a9]" aria-hidden="true" />
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[12px] text-[#b4c9e2] transition-colors duration-200 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact column */}
          <div data-reveal>
            <h3 className="text-[15px] font-bold text-[#fafbfb]">Contact Us</h3>
            <span className="mt-2 block h-0.75 w-8 rounded-full bg-[#01a1a9]" aria-hidden="true" />
            <ul className="mt-4 space-y-3.5">
              {CONTACTS.map(({ icon, content, align }, i) => (
                <li key={i} className={`flex items-${align} gap-4`}>
                  <ContactIcon>{icon}</ContactIcon>
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto max-w-[1600px] px-8 sm:px-12 lg:px-16">
          <div className="border-t border-[#1e4a63]/70 pb-5">
            <div className="flex flex-col items-center justify-between gap-3 pt-4 text-[12px] text-[#b0c7df] sm:flex-row">
              <p>&copy; 2025 Indexia Insurance. All rights reserved.</p>
              <p className="flex items-center gap-6">
                <span className="hidden h-6 w-px bg-[#1e4a63]/70 sm:block" aria-hidden="true" />
                Insurance is a promise. We help you keep it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
