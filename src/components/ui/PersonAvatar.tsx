type PersonAvatarProps = {
  name: string
  initials: string
}

export function PersonAvatar({ name, initials }: PersonAvatarProps) {
  return (
    <div className="flex w-[7.5rem] flex-col items-center text-center md:w-32">
      <div
        className="flex h-[5.75rem] w-[5.75rem] items-center justify-center rounded-full bg-gradient-to-br from-neutral-100 to-neutral-300 text-[1.05rem] font-bold text-neutral-600 shadow-[inset_0_2px_8px_rgba(255,255,255,0.6)] ring-1 ring-black/[0.04] md:h-28 md:w-28 md:text-lg"
        aria-hidden
      >
        {initials}
      </div>
      <p className="mt-5 text-[15px] font-semibold leading-snug text-neutral-950">{name}</p>
    </div>
  )
}
