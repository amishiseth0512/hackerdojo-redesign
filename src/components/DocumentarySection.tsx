import { Play } from 'lucide-react'
import { Container } from './Container'
import { SectionIntro } from './ui/SectionIntro'
import { documentary } from '../data/homeContent'

export function DocumentarySection() {
  return (
    <section className="bg-[#f3f3f3] pb-28 md:pb-36" aria-labelledby="doc-heading">
      <Container>
        <SectionIntro id="doc-heading" label={documentary.label}>
          <p className="hd-body-lead max-w-3xl whitespace-pre-line">{documentary.body}</p>
        </SectionIntro>

        <div className="relative mx-auto mt-14 max-w-[56rem] md:mt-16">
          <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200 shadow-[inset_0_2px_20px_rgba(0,0,0,0.06)]">
            <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white/95 text-neutral-700 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.2)]">
              <Play className="ml-1 h-9 w-9" fill="currentColor" aria-hidden />
            </span>
            <span className="sr-only">Video placeholder</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
