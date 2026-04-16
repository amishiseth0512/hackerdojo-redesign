import {
  ArrowUpRight,
  Building2,
  Bus,
  CalendarDays,
  Clock,
  Coffee,
  Cpu,
  Heart,
  Monitor,
  TrainFront,
  Users,
  Wifi,
} from 'lucide-react'
import type { BenefitIconKey, TransitIconKey, WelcomeIconKey } from '../data/types'

export const welcomeIcons: Record<WelcomeIconKey, typeof Monitor> = {
  monitor: Monitor,
  users: Users,
  'arrow-up-right': ArrowUpRight,
}

export const benefitIcons: Record<BenefitIconKey, typeof Monitor> = {
  clock: Clock,
  wifi: Wifi,
  coffee: Coffee,
  cpu: Cpu,
  heart: Heart,
  calendar: CalendarDays,
  monitor: Monitor,
  building: Building2,
}

export const transitIcons: Record<TransitIconKey, typeof Bus> = {
  train: TrainFront,
  bus: Bus,
}
