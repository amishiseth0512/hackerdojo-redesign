import type { ReactNode } from 'react'

type SectionIntroProps = {
  id?: string
  label: string
  /** Extra classes on the micro-heading (e.g. spacing before a second heading) */
  headingClassName?: string
  children?: ReactNode
}

/** Red uppercase section label; optional lead block with standard top spacing. */
export function SectionIntro({ id, label, headingClassName, children }: SectionIntroProps) {
  return (
    <>
      <p id={id} className={`hd-microheading ${headingClassName ?? ''}`.trim()}>
        {label.toUpperCase()}
      </p>
      {children ? <div className="mt-8 md:mt-10">{children}</div> : null}
    </>
  )
}
