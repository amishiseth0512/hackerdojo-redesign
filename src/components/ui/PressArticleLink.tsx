import { toneClasses } from '../../data/homeContent'
import type { PressTone } from '../../data/types'

export type PressArticle = {
  title: string
  source: string
  tone: PressTone
  href: string
}

type PressArticleLinkProps = {
  article: PressArticle
  index: number
}

const sourceToneClasses: Record<PressTone, string> = {
  lavender: 'bg-[#f3e6c7]',
  blue: 'bg-[#d7e5ff]',
  green: 'bg-[#ccf7ca]',
  yellow: 'bg-[#c8eff2]',
  rose: 'bg-[#c7f1f1]',
  mint: 'bg-[#dfc7f8]',
  sky: 'bg-[#f4d0cb]',
}

export function PressArticleLink({ article, index }: PressArticleLinkProps) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex max-w-full flex-col items-center text-center no-underline transition hover:opacity-90 sm:flex-row ${index % 2 === 0 ? 'md:translate-x-8' : 'md:-translate-x-8'}`}
    >
      <span
        className={`rounded-[10px] rounded-b-none border border-black/[0.04] px-5 py-3 text-[15px] font-semibold text-[#2f62c9] underline-offset-[3px] sm:rounded-r-none sm:rounded-bl-[10px] sm:rounded-tr-[10px] md:px-8 md:text-[15.5px] ${toneClasses[article.tone]}`}
      >
        {article.title}
      </span>
      <span
        className={`rounded-[10px] rounded-t-none border border-black/[0.04] border-t-0 px-5 py-3 text-[12.5px] font-medium text-neutral-700 sm:rounded-l-none sm:rounded-br-[10px] sm:rounded-tl-[10px] sm:border-l-0 sm:border-t sm:px-6 md:text-[15px] ${sourceToneClasses[article.tone]}`}
      >
        {article.source}
      </span>
    </a>
  )
}
