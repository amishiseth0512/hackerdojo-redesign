import { useMemo, useState } from 'react'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { HeroCtaButton } from '../components/ui/HeroCtaButton'
import { SectionIntro } from '../components/ui/SectionIntro'
import { type ProjectStage, projectStages, projectsPage } from '../data/projectsContent'

type StageFilter = 'All' | ProjectStage

const FILTERS: StageFilter[] = ['All', ...projectStages]

export function ProjectsPage() {
  const [filter, setFilter] = useState<StageFilter>('All')

  const visible = useMemo(() => {
    if (filter === 'All') return projectsPage.projects
    return projectsPage.projects.filter((p) => p.stage === filter)
  }, [filter])

  return (
    <main>
      <section
        className="bg-[#f3f3f3] pb-16 pt-10 md:pb-20 md:pt-14 lg:pt-16"
        aria-labelledby="projects-page-heading"
      >
        <Container>
          <SectionIntro id="projects-page-label" label={projectsPage.label}>
            <div className="flex flex-col items-center text-center">
              <h1
                id="projects-page-heading"
                className="mx-auto max-w-[40rem] text-[clamp(1.9rem,4.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-neutral-950"
              >
                {projectsPage.heading}
              </h1>
              <p className="hd-body-lead mt-8 md:mt-10">{projectsPage.supporting}</p>
            </div>
          </SectionIntro>

          <div className="mx-auto mt-10 max-w-2xl md:mt-12">
            <p className="rounded-[1.25rem] border border-black/[0.05] bg-white px-6 py-4 text-center text-[14px] leading-relaxed text-neutral-600 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.06)] md:px-8 md:py-5 md:text-[15px] md:leading-[1.65]">
              {projectsPage.membershipNote}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl md:mt-12">
            <p
              className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 md:mb-4 md:text-[11px]"
              id="projects-filter-label"
            >
              Filter by stage
            </p>
            <div
              className="flex flex-wrap items-center justify-center gap-2 rounded-[1.25rem] border border-black/[0.05] bg-white p-3 shadow-[0_4px_28px_-12px_rgba(0,0,0,0.08)] sm:gap-2.5 sm:p-3.5 md:gap-3"
              role="group"
              aria-labelledby="projects-filter-label"
            >
              {FILTERS.map((f) => {
                const active = filter === f
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    aria-pressed={active}
                    className={`min-h-[44px] rounded-xl px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] transition sm:min-h-0 sm:px-5 sm:py-3 md:text-[12px] ${
                      active
                        ? 'border border-[#ef463a] bg-[#ef463a] text-white shadow-[0_4px_18px_-6px_rgba(239,72,58,0.5)]'
                        : 'border border-black/[0.06] bg-[#f3f3f3] text-neutral-800 hover:border-black/[0.1] hover:bg-white hover:shadow-[0_2px_14px_-8px_rgba(0,0,0,0.08)]'
                    }`}
                  >
                    {f}
                  </button>
                )
              })}
            </div>
          </div>

          <div
            className="mt-14 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-7"
            aria-live="polite"
            aria-label={
              filter === 'All'
                ? 'All community projects'
                : `Projects in ${filter} stage`
            }
          >
            {visible.length === 0 ? (
              <p className="col-span-full rounded-[1.5rem] border border-black/[0.05] bg-white py-14 text-center text-[15px] text-neutral-600 shadow-[0_4px_28px_-14px_rgba(0,0,0,0.06)] md:py-16">
                No projects in this stage yet. Try another filter or check back soon.
              </p>
            ) : (
              visible.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  joinHref={projectsPage.joinCta.href}
                  joinLabel={projectsPage.joinCta.label}
                />
              ))
            )}
          </div>
        </Container>
      </section>

      <section
        className="border-t border-black/[0.04] bg-[#f3f3f3] pb-24 pt-12 md:pb-32 md:pt-16"
        aria-labelledby="projects-cta-heading"
      >
        <Container>
          <div className="hd-soft-card-lg mx-auto max-w-3xl px-8 py-12 text-center md:px-14 md:py-16">
            <h2
              id="projects-cta-heading"
              className="mx-auto max-w-[28ch] text-[clamp(1.4rem,3.2vw,1.85rem)] font-bold leading-snug tracking-tight text-neutral-950"
            >
              {projectsPage.bottomCta.heading}
            </h2>
            <div className="mx-auto mt-10 flex max-w-lg flex-col items-stretch justify-center gap-3.5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:mt-14">
              <HeroCtaButton href={projectsPage.bottomCta.primary.href} variant="primary">
                {projectsPage.bottomCta.primary.label}
              </HeroCtaButton>
              <HeroCtaButton href={projectsPage.bottomCta.secondary.href} variant="outline">
                {projectsPage.bottomCta.secondary.label}
              </HeroCtaButton>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
