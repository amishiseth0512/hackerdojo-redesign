import { Container } from './Container'
import { PressArticleLink } from './ui/PressArticleLink'
import { press } from '../data/homeContent'

export function PressSection() {
  return (
    <section className="bg-[#f3f3f3] pb-28 md:pb-36" aria-labelledby="press-heading">
      <Container>
        <p
          id="press-heading"
          className="mx-auto inline-flex rounded-[4px] bg-[#f6d9dc] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#df3f33] md:text-[12px]"
        >
          In the News
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 px-2 text-[13px] font-bold tracking-tight text-neutral-950 md:mt-12 md:gap-x-16 md:text-[15px]">
          {press.logos.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center gap-4 md:mt-20 md:gap-5">
          {press.articles.map((article, index) => (
            <PressArticleLink key={article.title} article={article} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
