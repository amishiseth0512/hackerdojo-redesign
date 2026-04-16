import type { ReactNode } from 'react'
import type { HeroCtaVariant } from '../../data/types'

type HeroCtaButtonProps = {
  href: string
  variant: HeroCtaVariant
  children: ReactNode
}

const variantClass: Record<HeroCtaVariant, string> = {
  primary:
    'bg-[#ef463a] text-white shadow-[0_4px_20px_-6px_rgba(239,72,58,0.55)] hover:bg-[#e63e32]',
  outline:
    'border border-black/[0.06] bg-white text-neutral-900 shadow-[0_2px_16px_-6px_rgba(0,0,0,0.08)] hover:bg-neutral-50',
}

export function HeroCtaButton({ href, variant, children }: HeroCtaButtonProps) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`inline-flex min-h-[52px] min-w-[min(100%,220px)] flex-1 items-center justify-center rounded-2xl px-8 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.16em] no-underline transition sm:min-w-[200px] sm:flex-none md:min-h-[54px] md:px-10 md:text-[12px] md:tracking-[0.14em] ${variantClass[variant]}`}
    >
      {children}
    </a>
  )
}
