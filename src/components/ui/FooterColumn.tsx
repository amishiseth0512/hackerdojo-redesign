import type { FooterItem } from '../../data/types'

type FooterColumnProps = {
  items: FooterItem[]
}

export function FooterColumn({ items }: FooterColumnProps) {
  return (
    <ul className="space-y-4 text-[15px] leading-snug">
      {items.map((item, index) => (
        <li key={`${item.kind}-${index}`}>
          {item.kind === 'link' ? (
            <a
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="text-neutral-400 no-underline transition hover:text-white"
            >
              {item.text}
            </a>
          ) : (
            <span className="text-neutral-400">{item.text}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
