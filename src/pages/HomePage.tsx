import { BeginnerPathSection } from '../components/BeginnerPathSection'
import { BoardSection } from '../components/BoardSection'
import { DocumentarySection } from '../components/DocumentarySection'
import { HeroSection } from '../components/HeroSection'
import { LocationSection } from '../components/LocationSection'
import { AmbassadorProgramFeatureSection } from '../components/AmbassadorProgramFeatureSection'
import { MemberBenefitsSection } from '../components/MemberBenefitsSection'
import { PricingSection } from '../components/PricingSection'
import { PressSection } from '../components/PressSection'
import { SocialSection } from '../components/SocialSection'
import { TestimonialSection } from '../components/TestimonialSection'
import { WelcomeSection } from '../components/WelcomeSection'
import { WorkspaceGallerySection } from '../components/WorkspaceGallerySection'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <BeginnerPathSection />
      <AmbassadorProgramFeatureSection />
      <WorkspaceGallerySection />
      <TestimonialSection />
      <MemberBenefitsSection />
      <PricingSection />
      <DocumentarySection />
      <PressSection />
      <BoardSection />
      <LocationSection />
      <SocialSection />
    </main>
  )
}
