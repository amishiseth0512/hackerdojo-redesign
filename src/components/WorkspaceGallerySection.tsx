import { Container } from './Container'
import { SectionIntro } from './ui/SectionIntro'
import { workspaceGallery } from '../data/homeContent'

export function WorkspaceGallerySection() {
  return (
    <section
      className="bg-[#f3f3f3] pb-20 pt-6 md:pb-24 md:pt-8"
      aria-labelledby="workspace-gallery-heading"
    >
      <Container>
        <SectionIntro id="workspace-gallery-heading" label={workspaceGallery.label} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-7">
          {workspaceGallery.spaces.map((space) => (
            <article key={space.title} className="hd-soft-card overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
                <img
                  src={space.imageSrc}
                  alt={space.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-lg font-bold tracking-tight text-neutral-950 md:text-xl">
                  {space.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-neutral-600 md:text-[15px]">
                  {space.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
