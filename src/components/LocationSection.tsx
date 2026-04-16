import { Container } from './Container'
import { SectionIntro } from './ui/SectionIntro'
import { TransitCard } from './ui/TransitCard'
import { location } from '../data/homeContent'
import { transitIcons } from '../lib/icons'

export function LocationSection() {
  return (
    <section className="bg-[#f3f3f3] pb-28 md:pb-36" aria-labelledby="location-heading">
      <Container>
        <SectionIntro id="location-heading" label={location.label} />

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:items-start md:gap-14 lg:gap-16">
          <div className="max-w-lg">
            <h3 className="text-[1.35rem] font-bold tracking-tight text-neutral-950">{location.hqTitle}</h3>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-neutral-800 md:text-lg">{location.address}</p>
            <p className="mt-2 text-[1.0625rem] text-neutral-600">{location.hours}</p>

            <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500 md:text-[11px]">
              {location.transitLabel}
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {location.transit.map((t) => {
                const Icon = transitIcons[t.icon]
                return <TransitCard key={t.title} title={t.title} detail={t.detail} Icon={Icon} />
              })}
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-neutral-200/90 shadow-inner md:min-h-[340px]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_42px,rgba(0,0,0,0.028)_42px,rgba(0,0,0,0.028)_43px)],repeating-linear-gradient(0deg,transparent,transparent_42px,rgba(0,0,0,0.028)_42px,rgba(0,0,0,0.028)_43px)]" />
            <span className="absolute left-1/2 top-1/2 max-w-[12rem] -translate-x-1/2 -translate-y-1/2 text-center text-sm font-medium leading-snug text-neutral-500">
              {location.mapPlaceholder}
            </span>
            <span className="absolute bottom-4 right-4 rounded-xl border border-black/[0.06] bg-white px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-800 shadow-md">
              Open in Maps
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
