import type { LucideIcon } from 'lucide-react'

type BenefitCardProps = {
  label: string
  Icon: LucideIcon
}

export function BenefitCard({ label, Icon }: BenefitCardProps) {
  return (
    <article className="hd-soft-card flex flex-col items-center px-6 py-10 text-center md:px-7 md:py-11">
      <Icon className="mb-6 h-9 w-9 text-neutral-900" strokeWidth={1.45} aria-hidden />
      <p className="text-[11px] font-bold uppercase leading-snug tracking-[0.14em] text-neutral-800 md:text-[12px] md:tracking-[0.12em]">
        {label}
      </p>
    </article>
  )
}
