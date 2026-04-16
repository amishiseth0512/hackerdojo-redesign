import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LogoMark } from './brand/LogoMark'
import { Container } from './Container'
import { utilityNavItems } from '../config/navUtils'
import { brand, navActions, navLinks } from '../data/homeContent'

function isExternalNavLink(link: (typeof navLinks)[number]): link is (typeof navLinks)[number] & {
  external: true
} {
  return 'external' in link && link.external === true
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-black/[0.05] bg-white">
      <Container>
        <div className="relative flex items-center justify-between gap-3 py-6 md:gap-5 md:py-7">
          <Link to="/" className="group flex shrink-0 items-center gap-3.5 no-underline md:gap-4">
            <LogoMark />
            <span className="text-[15px] font-bold uppercase tracking-[0.14em] text-neutral-950 md:text-[16px]">
              {brand.nameUpper}
            </span>
          </Link>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) =>
              isExternalNavLink(link) ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-900 no-underline transition hover:text-neutral-600"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-900 no-underline transition hover:text-neutral-600"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5 md:gap-3.5">
            <a
              href={navActions.donate.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-2xl bg-[#0b9c7a] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_2px_12px_-4px_rgba(11,156,122,0.45)] no-underline transition hover:bg-[#098f6f] sm:px-5 sm:py-3 sm:text-[12px]"
            >
              {navActions.donate.label}
            </a>

            <div className="hidden items-center gap-0.5 sm:flex md:gap-1">
              {utilityNavItems.map(({ href, external, ariaLabel, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="rounded-xl p-2.5 text-[#df3f33] no-underline transition hover:bg-neutral-100"
                  aria-label={ariaLabel}
                >
                  <Icon className="h-[22px] w-[22px]" strokeWidth={1.65} />
                </a>
              ))}
            </div>

            <button
              type="button"
              className="rounded-xl p-2 text-neutral-900 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            className="flex flex-col gap-0.5 border-t border-black/[0.06] pb-8 pt-2 lg:hidden"
            aria-label="Mobile primary"
          >
            {navLinks.map((link) =>
              isExternalNavLink(link) ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl px-3 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-900 no-underline hover:bg-neutral-100"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="rounded-xl px-3 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-900 no-underline hover:bg-neutral-100"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <div className="mt-3 flex justify-center gap-2 border-t border-black/[0.06] pt-5">
              {utilityNavItems.map(({ href, external, ariaLabel, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="rounded-xl p-2.5 text-[#df3f33]"
                  aria-label={ariaLabel}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  )
}
