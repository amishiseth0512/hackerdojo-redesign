import type { CommunityProject } from '../data/projectsContent'

type ProjectCardProps = {
  project: CommunityProject
  joinHref: string
  joinLabel: string
}

export function ProjectCard({ project, joinHref, joinLabel }: ProjectCardProps) {
  return (
    <article className="hd-soft-card flex h-full min-h-0 flex-col p-8 transition duration-200 hover:-translate-y-0.5 hover:border-black/[0.08] hover:shadow-[0_12px_48px_-14px_rgba(0,0,0,0.14)] md:p-9">
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
        <h3 className="min-w-0 max-w-[85%] text-lg font-bold tracking-tight text-neutral-950 md:text-[1.35rem]">
          {project.name}
        </h3>
        <span className="shrink-0 rounded-full border border-black/[0.06] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-600 md:text-[11px]">
          {project.stage}
        </span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col">
        <p className="mt-5 text-[15px] leading-[1.7] text-neutral-600 md:text-[15.5px]">{project.description}</p>
        <p className="mt-5 text-[13px] text-neutral-700 md:text-[14px]">
          <span className="font-semibold text-neutral-900">{project.participants}</span> participants
        </p>
        <p className="mt-2 text-[13px] leading-snug text-neutral-600 md:text-[14px]">
          <span className="font-semibold text-neutral-800">Roles needed:</span> {project.rolesNeeded}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-medium text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 md:mt-10">
        <a
          href={joinHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[52px] w-full items-center justify-center rounded-2xl bg-[#ef463a] px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_20px_-6px_rgba(239,72,58,0.55)] no-underline transition hover:bg-[#e63e32] md:min-h-[54px] md:text-[12px]"
        >
          {joinLabel}
        </a>
      </div>
    </article>
  )
}
