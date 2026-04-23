import { Link } from 'react-router-dom'
import { Container } from './Container'

export function AmbassadorProgramFeatureSection() {
  return (
    <section className="bg-[#f3f3f3] pb-20 md:pb-28" aria-labelledby="ambassador-program-feature">
      <Container>
        <div className="hd-soft-card-lg relative overflow-hidden px-8 py-12 md:px-14 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,72,58,0.18),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(11,156,122,0.14),transparent_50%)]" />

          <div className="relative z-[1] flex flex-col items-start gap-7 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-[#ef463a] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_6px_22px_-10px_rgba(239,72,58,0.6)]">
                NEW
              </span>
              <h2
                id="ambassador-program-feature"
                className="mt-6 text-[clamp(1.55rem,3.6vw,2.2rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-neutral-950"
              >
                Join the Hacker Dojo Ambassador Program
              </h2>
              <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.75] text-neutral-700 md:text-[16px]">
                We’re launching our ambassador initiative starting with SJSU. Help grow the builder community, host
                events, and earn member perks.
              </p>
            </div>

            <Link
              to="/ambassadors"
              className="inline-flex min-h-[52px] min-w-[min(100%,220px)] items-center justify-center rounded-2xl bg-[#ef463a] px-8 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-white no-underline shadow-[0_4px_20px_-6px_rgba(239,72,58,0.55)] transition hover:bg-[#e63e32] sm:min-w-[200px] md:min-h-[54px] md:px-10 md:text-[12px] md:tracking-[0.14em]"
            >
              Explore the Program
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

