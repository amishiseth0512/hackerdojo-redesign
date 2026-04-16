import { toneClasses } from '../../data/homeContent'
import type { PressTone } from '../../data/types'

type PricePillProps = {
  text: string
  tone: PressTone
}

export function PricePill({ text, tone }: PricePillProps) {
  return (
    <span
      className={`inline-flex w-full max-w-md justify-center rounded-full px-6 py-3 text-center text-[11px] font-medium leading-snug text-neutral-800 md:text-[12px] ${toneClasses[tone]}`}
    >
      {text}
    </span>
  )
}
