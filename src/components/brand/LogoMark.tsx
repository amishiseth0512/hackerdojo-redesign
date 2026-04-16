type LogoMarkProps = {
  className?: string
}

/** Red square mark + optional surrounding flex handled by parent */
export function LogoMark({ className = '' }: LogoMarkProps) {
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ef463a] text-sm font-bold text-white shadow-[0_2px_8px_-2px_rgba(239,72,58,0.45)] ${className}`}
      aria-hidden
    >
      HD
    </span>
  )
}
