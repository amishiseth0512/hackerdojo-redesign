import { Container } from './Container'
import { HeroCtaButton } from './ui/HeroCtaButton'
import { ToriiWatermark } from './ui/ToriiWatermark'
import { hero } from '../data/homeContent'

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#f3f3f3] pb-6 pt-12 md:pb-10 md:pt-16 lg:pt-20"
      aria-labelledby="hero-heading"
    >
      <ToriiWatermark />
      <Container className="relative z-[1]">
        <p className="mx-auto mb-9 inline-flex rounded-full border border-black/[0.04] bg-white px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500 shadow-[0_1px_8px_-2px_rgba(0,0,0,0.06)] md:mb-11 md:px-6 md:text-[11px] md:tracking-[0.24em]">
          {hero.eyebrow.toUpperCase()}
        </p>

        <h1
          id="hero-heading"
          className="mx-auto max-w-[19ch] text-center text-[clamp(2.65rem,6.5vw,4.75rem)] font-extrabold leading-[1.06] tracking-[-0.02em] text-neutral-950 md:max-w-[22ch]"
        >
          <span className="block">{hero.titleLine1}</span>
          <span className="block">{hero.titleLine2}</span>
        </h1>

        <p className="hd-body-lead mt-9 max-w-[36rem] md:mt-11">
          <span className="block">{hero.subtextLine1}</span>
          <span className="block">{hero.subtextLine2}</span>
        </p>

        <div className="mx-auto mt-11 flex max-w-[40rem] flex-col items-stretch justify-center gap-3.5 sm:mt-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 md:mt-14">
          {hero.ctas.map((cta) => (
            <HeroCtaButton key={cta.label} href={cta.href} variant={cta.variant}>
              {cta.label}
            </HeroCtaButton>
          ))}
        </div>

        <div className="relative z-[2] mx-auto mt-16 max-w-[56rem] md:mt-20 lg:mt-24">
          <div className="hd-soft-card-lg overflow-hidden">
            <img
              src={hero.transitionImageSrc}
              alt={hero.transitionImageAlt}
              className="h-52 w-full object-cover sm:h-64 md:h-[22rem] lg:h-[24rem]"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
