import { Calendar, Globe, User } from 'lucide-react'
import { navActions } from '../data/homeContent'

/** Right-side navbar icon links — data-driven for reuse (desktop + mobile). */
export const utilityNavItems = [
  {
    href: navActions.calendar,
    external: true as const,
    ariaLabel: 'Events calendar',
    Icon: Calendar,
  },
  {
    href: navActions.memberLogin,
    external: false as const,
    ariaLabel: 'Member portal',
    Icon: User,
  },
  {
    href: navActions.dojoEarth,
    external: true as const,
    ariaLabel: 'Dojo Earth',
    Icon: Globe,
  },
] as const
