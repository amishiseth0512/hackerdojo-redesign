import type { LucideIcon } from 'lucide-react'

type TransitCardProps = {
  title: string
  detail: string
  Icon: LucideIcon
}

export function TransitCard({ title, detail, Icon }: TransitCardProps) {
  return (
    <div className="hd-soft-card flex gap-3.5 p-4 md:p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800">
        <Icon className="h-5 w-5" strokeWidth={1.65} aria-hidden />
      </span>
      <div>
        <p className="font-semibold text-neutral-950">{title}</p>
        <p className="mt-0.5 text-sm text-neutral-600">{detail}</p>
      </div>
    </div>
  )
}
