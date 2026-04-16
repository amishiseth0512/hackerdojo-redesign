import { Container } from './Container'
import { BenefitCard } from './ui/BenefitCard'
import { SectionIntro } from './ui/SectionIntro'
import { memberBenefits } from '../data/homeContent'
import { benefitIcons } from '../lib/icons'

export function MemberBenefitsSection() {
  return (
    <section className="bg-[#f3f3f3] pb-24 md:pb-32" aria-labelledby="benefits-heading">
      <Container>
        <SectionIntro id="benefits-heading" label={memberBenefits.label}>
          <p className="hd-body-lead">{memberBenefits.supporting}</p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {memberBenefits.items.map((item) => {
            const Icon = benefitIcons[item.icon]
            return <BenefitCard key={item.label} label={item.label} Icon={Icon} />
          })}
        </div>
      </Container>
    </section>
  )
}
