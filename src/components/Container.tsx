import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

/** Centered page shell (~1200–1240px) with generous horizontal padding. */
export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:max-w-[1240px] lg:px-12 ${className}`}>
      {children}
    </div>
  )
}
