import { toneClasses } from '../../data/homeContent'
import type { PressTone } from '../../data/types'

export type PressArticle = {
  title: string
  source: string
  tone: PressTone
}

type PressArticleLinkProps = {
  article: PressArticle
  index: number
}

export function PressArticleLink({ article, index }: PressArticleLinkProps) {
  return (
    <a
      href="#"
      className={`hd-soft-card flex w-full max-w-2xl flex-col items-center px-6 py-4 text-center no-underline transition hover:brightness-[0.99] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2 sm:gap-y-1 sm:py-5 md:text-left ${toneClasses[article.tone]} ${index % 2 === 0 ? 'md:translate-x-4' : 'md:-translate-x-4'}`}
      onClick={(e) => e.preventDefault()}
    >
      <span className="text-[15px] font-semibold text-blue-800 underline-offset-[3px] hover:underline md:text-[15.5px]">
        {article.title}
      </span>
      <span className="hidden text-neutral-400 sm:inline">|</span>
      <span className="text-[12.5px] font-medium text-neutral-600">{article.source}</span>
    </a>
  )
}
