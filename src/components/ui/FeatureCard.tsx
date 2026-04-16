import type { ReactElement } from 'react'

type FeatureCardProps = {
  title: string
  body: string
  icon: ReactElement
}

export function FeatureCard({ title, body, icon }: FeatureCardProps) {
  return (
    <article className="hd-soft-card relative p-8 md:p-9 lg:p-10">
      <div className="absolute right-6 top-6 text-[#df3f33] md:right-7 md:top-7">
        {icon}
      </div>
      <h3 className="pr-12 text-xl font-bold tracking-tight text-neutral-950 md:text-[1.35rem]">{title}</h3>
      <p className="mt-5 whitespace-pre-line text-[15px] leading-[1.7] text-neutral-600 md:text-[15.5px]">
        {body}
      </p>
    </article>
  )
}
