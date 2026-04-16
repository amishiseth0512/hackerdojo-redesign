export type HeroCtaVariant = 'primary' | 'outline'

export type WelcomeIconKey = 'monitor' | 'users' | 'arrow-up-right'

export type BenefitIconKey =
  | 'clock'
  | 'wifi'
  | 'coffee'
  | 'cpu'
  | 'heart'
  | 'calendar'
  | 'monitor'
  | 'building'

export type PressTone = 'lavender' | 'blue' | 'green' | 'yellow' | 'rose' | 'mint' | 'sky'

export type TransitIconKey = 'train' | 'bus'

export type FooterItem =
  | { kind: 'text'; text: string }
  | { kind: 'link'; text: string; href: string; external?: boolean }
