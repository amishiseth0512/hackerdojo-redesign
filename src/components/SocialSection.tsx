import { Container } from './Container'
import { SectionIntro } from './ui/SectionIntro'
import { social } from '../data/homeContent'

export function SocialSection() {
  return (
    <section className="bg-[#f3f3f3] pb-20 md:pb-24" aria-labelledby="social-heading">
      <Container>
        <SectionIntro id="social-heading" label={social.label} />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 md:mt-12 md:gap-x-20 md:gap-y-6 lg:gap-x-24">
          {social.platforms.map((p) => (
            <a
              key={p.name}
              href="#"
              className={`text-[1.05rem] font-semibold no-underline transition hover:opacity-80 md:text-xl ${p.color}`}
              onClick={(e) => e.preventDefault()}
            >
              {p.name}
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
