import { Container } from './Container'
import { SectionIntro } from './ui/SectionIntro'
import { beginnerPath } from '../data/homeContent'

export function BeginnerPathSection() {
  return (
    <section
      className="bg-[#f3f3f3] pb-24 pt-6 md:pb-32 md:pt-8"
      aria-labelledby="beginner-path-heading"
    >
      <Container>
        <SectionIntro id="beginner-path-heading" label={beginnerPath.label} />

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-7">
          {beginnerPath.tracks.map((track) => {
            const external = track.cta.href.startsWith('http')
            return (
              <article key={track.title} className="hd-soft-card flex flex-col p-8 md:p-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#df3f33] md:text-[11px]">
                  {track.badge}
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-neutral-950 md:text-[1.35rem]">
                  {track.title}
                </h3>
                <p className="mt-5 flex-1 text-[15px] leading-[1.7] text-neutral-600 md:text-[15.5px]">
                  {track.description}
                </p>
                <a
                  href={track.cta.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl border border-black/[0.06] bg-white px-6 py-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-900 shadow-[0_2px_16px_-6px_rgba(0,0,0,0.08)] no-underline transition hover:bg-neutral-50 md:mt-10 md:text-[12px]"
                >
                  {track.cta.label}
                </a>
              </article>
            )
          })}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-[1.5rem] border border-black/[0.05] bg-white px-6 py-10 shadow-[0_4px_44px_-14px_rgba(0,0,0,0.07)] md:mt-20 md:px-10 md:py-12">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 md:text-[11px]">
            Your first steps
          </p>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6">
            {beginnerPath.journey.map((step, i) => (
              <li key={step} className="flex gap-4 lg:flex-col lg:items-center lg:text-center">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ef463a] text-sm font-bold text-white shadow-[0_4px_16px_-4px_rgba(239,72,58,0.5)]"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className="pt-1 text-[15px] font-semibold leading-snug text-neutral-900 md:pt-0 md:text-base">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
