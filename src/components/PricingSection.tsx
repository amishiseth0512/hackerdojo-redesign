import { Container } from './Container'
import { PricePill } from './ui/PricePill'
import { SectionIntro } from './ui/SectionIntro'
import { pricing } from '../data/homeContent'

export function PricingSection() {
  return (
    <section
      id="member-pricing"
      className="scroll-mt-28 bg-[#f3f3f3] pb-28 md:pb-36"
      aria-labelledby="pricing-heading"
    >
      <Container>
        <SectionIntro id="pricing-heading" label={pricing.label}>
          <p className="hd-body-lead max-w-xl whitespace-pre-line">{pricing.supporting}</p>
        </SectionIntro>

        <div className="mt-14 text-center md:mt-16">
          <p className="font-bold tracking-tight text-neutral-950">
            <span className="text-[clamp(3.5rem,10vw,5.5rem)] leading-none">{pricing.price}</span>
          </p>
          <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.22em] text-neutral-500 md:text-[13px]">
            {pricing.period}
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-lg flex-col items-center gap-3 md:mt-14 md:max-w-xl md:gap-3.5">
          {pricing.tags.map((tag) => (
            <PricePill key={tag.text} text={tag.text} tone={tag.tone} />
          ))}
        </div>

        <div className="mt-14 flex justify-center md:mt-16">
          <a
            href={pricing.cta.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[54px] min-w-[260px] items-center justify-center rounded-2xl bg-[#ef463a] px-10 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_6px_24px_-8px_rgba(239,72,58,0.55)] no-underline transition hover:bg-[#e63e32] md:min-w-[280px] md:text-[13px]"
          >
            {pricing.cta.label}
          </a>
        </div>
      </Container>
    </section>
  )
}
