type PersonAvatarProps = {
  name: string
  initials: string
  href?: string
  photo?: {
    src: string
    alt?: string
    /** CSS object-position value like "25% 15%" */
    position?: string
  }
}

export function PersonAvatar({ name, initials, href, photo }: PersonAvatarProps) {
  const avatar = (
    <div
      className="relative flex h-[5.75rem] w-[5.75rem] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-neutral-100 to-neutral-300 text-[1.05rem] font-bold text-neutral-600 shadow-[inset_0_2px_8px_rgba(255,255,255,0.6)] ring-1 ring-black/[0.04] md:h-28 md:w-28 md:text-lg"
      aria-hidden
    >
      {photo ? (
        <img
          src={photo.src}
          alt={photo.alt ?? ''}
          className="absolute inset-0 h-full w-full object-cover"
          style={photo.position ? { objectPosition: photo.position } : undefined}
        />
      ) : (
        initials
      )}
    </div>
  )

  const nameLabel = href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-5 text-[15px] font-semibold leading-snug text-neutral-950 no-underline transition hover:text-[#df3f33]"
    >
      {name}
    </a>
  ) : (
    <p className="mt-5 text-[15px] font-semibold leading-snug text-neutral-950">{name}</p>
  )

  return (
    <div className="flex w-[7.5rem] flex-col items-center text-center md:w-32">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full transition hover:scale-[1.02]"
          aria-label={`${name} on LinkedIn`}
        >
          {avatar}
        </a>
      ) : (
        avatar
      )}
      {nameLabel}
    </div>
  )
}
