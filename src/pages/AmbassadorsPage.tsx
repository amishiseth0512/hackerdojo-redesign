import {
  BadgeCheck,
  BookOpen,
  GraduationCap,
  Megaphone,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { SectionIntro } from '../components/ui/SectionIntro'

const APPLY_URL = '#'
const CONTACT_URL = '#'

type Feature = {
  title: string
  body: string
  Icon: typeof Users
}

const FEATURES: Feature[] = [
  {
    title: 'Student-Led Events Pipeline',
    body: 'Ambassadors host consistent events such as hack nights, workshops, and demos, driving engagement and bringing new users into the ecosystem.',
    Icon: Users,
  },
  {
    title: 'Incentive-Based System',
    body: 'Clear rewards like free membership and perks tied to contributions such as events, referrals, and content, ensuring sustained participation.',
    Icon: BadgeCheck,
  },
  {
    title: 'Content and Social Growth Engine',
    body: 'Ambassadors generate authentic content including event clips, testimonials, and posts, strengthening Hacker Dojo’s online presence.',
    Icon: Megaphone,
  },
  {
    title: 'Community Building Layer',
    body: 'Ambassadors act as connectors by onboarding students, building campus communities, and linking them to Hacker Dojo.',
    Icon: GraduationCap,
  },
  {
    title: 'Leadership Structure',
    body: 'Defined roles such as Campus Lead, Events, and Marketing create accountability and real leadership experience.',
    Icon: ShieldCheck,
  },
  {
    title: 'Simple Onboarding and Playbooks',
    body: 'Standardized guides and resources make it easy to get started and run events effectively.',
    Icon: BookOpen,
  },
] as const

const HOW_IT_WORKS = [
  'Apply',
  'Meet the team',
  'Get onboarded',
  'Start hosting and spreading the word',
  'Earn perks through participation',
] as const

function PrimaryButtonLink({ href, children }: { href: string; children: string }) {
  const isExternal = href.startsWith('http')
  const className =
    'inline-flex min-h-[52px] min-w-[min(100%,220px)] flex-1 items-center justify-center rounded-2xl bg-[#ef463a] px-8 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-white no-underline shadow-[0_4px_20px_-6px_rgba(239,72,58,0.55)] transition hover:bg-[#e63e32] sm:min-w-[200px] sm:flex-none md:min-h-[54px] md:px-10 md:text-[12px] md:tracking-[0.14em]'

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}

function OutlineButtonLink({ href, children }: { href: string; children: string }) {
  const isExternal = href.startsWith('http')
  const className =
    'inline-flex min-h-[52px] min-w-[min(100%,220px)] flex-1 items-center justify-center rounded-2xl border border-black/[0.06] bg-white px-8 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-900 no-underline shadow-[0_2px_16px_-6px_rgba(0,0,0,0.08)] transition hover:bg-neutral-50 sm:min-w-[200px] sm:flex-none md:min-h-[54px] md:px-10 md:text-[12px] md:tracking-[0.14em]'

  if (href.startsWith('#')) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}

export function AmbassadorsPage() {
  return (
    <main>
      <section className="bg-[#f3f3f3] pb-14 pt-10 md:pb-20 md:pt-14 lg:pt-16" aria-labelledby="ambassadors-heading">
        <Container>
          <SectionIntro label="Ambassadors">
            <div className="flex flex-col items-center text-center">
              <h1
                id="ambassadors-heading"
                className="mx-auto max-w-[40rem] text-[clamp(2.05rem,4.6vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-neutral-950"
              >
                Hacker Dojo Ambassador Program
              </h1>
              <p className="hd-body-lead mt-8 md:mt-10">
                Help grow the builder community on your campus and get rewarded for it.
              </p>

              <div className="mx-auto mt-11 flex max-w-[40rem] flex-col items-stretch justify-center gap-3.5 sm:mt-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 md:mt-14">
                <PrimaryButtonLink href={APPLY_URL}>Apply Now</PrimaryButtonLink>
                <OutlineButtonLink href="#features">Learn the Benefits</OutlineButtonLink>
              </div>
            </div>
          </SectionIntro>
        </Container>
      </section>

      <section className="border-t border-black/[0.04] bg-[#f3f3f3] pb-24 pt-12 md:pb-32 md:pt-16" aria-labelledby="ambassadors-intro">
        <Container>
          <SectionIntro id="ambassadors-intro" label="Overview">
            <p className="hd-body-lead max-w-4xl">
              The Hacker Dojo Ambassador Program is designed for students and community builders who want to represent
              Hacker Dojo, grow local communities, host events, and expand awareness. We’re launching the program in
              partnership with <strong className="font-semibold text-neutral-900">San Jose State University</strong> as
              the first campus where ambassadors will represent Hacker Dojo, host events, and build community.
            </p>
          </SectionIntro>
        </Container>
      </section>

      <section className="bg-[#f3f3f3] pb-24 md:pb-32" aria-labelledby="features">
        <Container>
          <SectionIntro id="features" label="Core features">
            <div className="flex flex-col items-center text-center">
              <h2 className="mx-auto max-w-[32ch] text-[clamp(1.55rem,3.6vw,2.2rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-neutral-950">
                What Ambassadors Do
              </h2>
              <p className="hd-body-lead mt-8 md:mt-10">
                A program designed to help students build community, host events, and take on leadership roles within
                Hacker Dojo.
              </p>
            </div>
          </SectionIntro>

          <div className="mt-16 grid gap-6 md:mt-20 sm:grid-cols-2 lg:grid-cols-2 lg:gap-7">
            {FEATURES.map(({ title, body, Icon }) => (
              <article key={title} className="hd-soft-card relative p-8 md:p-9 lg:p-10">
                <div className="absolute right-6 top-6 text-[#df3f33] md:right-7 md:top-7">
                  <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.6} aria-hidden />
                </div>
                <h3 className="pr-12 text-xl font-bold tracking-tight text-neutral-950 md:text-[1.35rem]">{title}</h3>
                <p className="mt-5 text-[15px] leading-[1.7] text-neutral-600 md:text-[15.5px]">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f3f3f3] pb-24 md:pb-32" aria-labelledby="how-it-works">
        <Container>
          <SectionIntro id="how-it-works" label="How it works" />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-5 md:gap-5">
            {HOW_IT_WORKS.map((step, idx) => (
              <div key={step} className="hd-soft-card px-6 py-6 text-center md:px-5 md:py-7">
                <p className="mx-auto mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ef463a] text-[12px] font-bold text-white">
                  {idx + 1}
                </p>
                <p className="text-[13px] font-semibold leading-snug text-neutral-900">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-black/[0.04] bg-[#f3f3f3] pb-28 pt-12 md:pb-36 md:pt-16" aria-labelledby="ambassadors-cta">
        <Container>
          <div className="hd-soft-card-lg mx-auto max-w-4xl px-8 py-12 text-center md:px-14 md:py-16">
            <h2
              id="ambassadors-cta"
              className="mx-auto max-w-[28ch] text-[clamp(1.5rem,3.4vw,2rem)] font-bold leading-snug tracking-tight text-neutral-950"
            >
              Become a Hacker Dojo Ambassador
            </h2>
            <p className="hd-body-lead mt-8 md:mt-10">
              Students: help build the next generation of the community—bring builders together, ship projects, and grow
              something real on campus.
            </p>

            <div className="mx-auto mt-10 flex max-w-lg flex-col items-stretch justify-center gap-3.5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:mt-14">
              <PrimaryButtonLink href={APPLY_URL}>Apply Now</PrimaryButtonLink>
              <OutlineButtonLink href={CONTACT_URL}>Contact Us</OutlineButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

