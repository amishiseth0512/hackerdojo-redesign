import { Container } from './Container'
import { PressArticleLink } from './ui/PressArticleLink'
import { press } from '../data/homeContent'

export function PressSection() {
  return (
    <section className="bg-[#f3f3f3] pb-28 md:pb-36" aria-labelledby="press-heading">
      <Container>
        <p id="press-heading" className="sr-only">
          Press and media
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 px-2 text-[13px] font-bold tracking-tight text-neutral-950 md:gap-x-14 md:text-[15px]">
          {press.logos.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center gap-3.5 md:mt-20 md:gap-4">
          {press.articles.map((article, index) => (
            <PressArticleLink key={article.title} article={article} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
