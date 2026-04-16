import { Container } from './Container'
import { FeatureCard } from './ui/FeatureCard'
import { SectionIntro } from './ui/SectionIntro'
import { welcome } from '../data/homeContent'
import { welcomeIcons } from '../lib/icons'

export function WelcomeSection() {
  return (
    <section
      className="bg-[#f3f3f3] pb-24 pt-10 md:pb-32 md:pt-14 lg:pt-16"
      aria-labelledby="welcome-heading"
    >
      <Container>
        <SectionIntro id="welcome-heading" label={welcome.label}>
          <p className="hd-body-lead">
            <span className="block">{welcome.bodyLine1}</span>
            <span className="block">{welcome.bodyLine2}</span>
            <span className="block">{welcome.bodyLine3}</span>
          </p>
        </SectionIntro>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-7 lg:mt-24">
          {welcome.cards.map((card) => {
            const Icon = welcomeIcons[card.icon]
            return (
              <FeatureCard
                key={card.title}
                title={card.title}
                body={card.body}
                icon={<Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.6} aria-hidden />}
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}
