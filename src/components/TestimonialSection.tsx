import { useMemo, useState } from 'react'
import { Container } from './Container'
import { SectionIntro } from './ui/SectionIntro'
import { testimonial } from '../data/homeContent'

export function TestimonialSection() {
  const [activeId, setActiveId] = useState(testimonial.defaultActiveId)
  const activeEntry = useMemo(
    () => testimonial.entries.find((entry) => entry.id === activeId) ?? testimonial.entries[0],
    [activeId],
  )

  return (
    <section
      className="bg-[#f3f3f3] pb-24 pt-6 md:pb-32 md:pt-8"
      aria-labelledby="testimonial-label"
    >
      <Container>
        <SectionIntro id="testimonial-label" label={testimonial.label} />

        <figure
          className={`relative mx-auto mt-12 max-w-[42rem] rounded-[1.75rem] border border-black/[0.05] px-8 py-14 shadow-[0_6px_40px_-16px_rgba(0,0,0,0.1)] transition-colors duration-300 md:mt-14 md:px-14 md:py-16 lg:max-w-[44rem] ${activeEntry.cardClass}`}
        >
          <span
            className="absolute left-7 top-8 font-serif text-[3.25rem] leading-none text-black/[0.12] md:left-12 md:top-10 md:text-6xl"
            aria-hidden
          >
            &ldquo;
          </span>
          <span
            className="absolute bottom-12 right-10 font-serif text-[3.25rem] leading-none text-black/[0.12] md:bottom-14 md:right-14 md:text-6xl"
            aria-hidden
          >
            &rdquo;
          </span>
          <blockquote className="relative z-[1] text-center text-[1.0625rem] leading-[1.75] text-neutral-800 md:text-lg md:leading-[1.8]">
            <p className="whitespace-pre-line">{activeEntry.quote}</p>
          </blockquote>
          <figcaption className="relative z-[1] mt-12 text-center md:mt-14">
            <cite className="not-italic">
              <span className="block text-[1.35rem] font-semibold tracking-tight text-neutral-950 md:text-xl">
                {activeEntry.name}
              </span>
              <span className="mt-3 block text-[10px] font-bold tracking-[0.22em] text-neutral-600 md:text-[11px]">
                {activeEntry.title.toUpperCase()}
              </span>
            </cite>
          </figcaption>
        </figure>

        <div className="mx-auto mt-14 flex max-w-2xl flex-wrap justify-center gap-5 md:mt-16 md:gap-7">
          {testimonial.entries.map((entry) => (
            <button
              key={entry.id}
              type="button"
              onClick={() => setActiveId(entry.id)}
              aria-pressed={entry.id === activeId}
              aria-label={`Show testimonial from ${entry.name}`}
              className="rounded-full"
            >
              <img
                src={entry.src}
                alt={entry.alt}
                className={`h-[3.75rem] w-[3.75rem] rounded-full border-[3px] object-cover shadow-[0_4px_16px_-4px_rgba(0,0,0,0.15)] transition-all duration-200 md:h-16 md:w-16 ${
                  entry.id === activeId
                    ? 'border-[#ff7d73] shadow-[0_6px_18px_-6px_rgba(255,125,115,0.45)]'
                    : 'border-white hover:border-[#ffd2cd]'
                }`}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </Container>
    </section>
  )
}
