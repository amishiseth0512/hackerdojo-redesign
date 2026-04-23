/** Editable homepage copy and config — add new sections by extending App layout. */

import emilyJohnsonPhoto from '../assets/emily-johnson.png'
import davidWeeklyPhoto from '../assets/david-weekly.png'
import evaCarrenderPhoto from '../assets/eva-carrender.png'
import markStoferPhoto from '../assets/mark-stofer.png'
import marcoPalaciosPhoto from '../assets/marco-palacios.png'
import peterTheobaldPhoto from '../assets/peter-theobald.png'
import testimonialPhoto1 from '../assets/testimonial-1.png'
import testimonialPhoto2 from '../assets/testimonial-2.png'
import testimonialPhoto3 from '../assets/testimonial-3.png'
import testimonialPhoto4 from '../assets/testimonial-4.png'
import type { FooterItem } from './types'

export const brand = {
  name: 'Hacker Dojo',
  nameUpper: 'HACKER DOJO',
}

export const navLinks = [
  { label: 'Wiki', href: 'https://wiki.hackerdojo.com/index.php?title=Main_Page', external: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Ambassadors', href: '/ambassadors' },
  { label: 'Events', href: 'https://www.meetup.com/hackerdojo/events/', external: true },
  { label: 'Startups', href: '/startups/' },
  { label: 'Pricing', href: '/#member-pricing' },
] as const

export const navActions = {
  donate: {
    label: 'Donate',
    href: 'https://www.every.org/hacker-dojo?donateTo=hacker-dojo#/donate/card',
  },
  calendar: 'https://www.meetup.com/hackerdojo/events/calendar/',
  memberLogin: 'https://hackerdojo.spaces.nexudus.com/login',
  dojoEarth: 'https://dojo-earth.vercel.app',
}

export const hero = {
  eyebrow: 'Reach your higher potential',
  titleLine1: 'The best place to connect',
  titleLine2: 'with Silicon Valley.',
  subtextLine1: 'Hacker Dojo is a collaborative hackerspace where tech',
  subtextLine2: 'enthusiasts gather to build, experiment and improve',
  ctas: [
    { label: 'Take a tour', href: 'https://calendly.com/hdfrontdesk/30min', variant: 'outline' as const },
    { label: 'Become a member', href: 'https://hackerdojo.spaces.nexudus.com/?public&', variant: 'primary' as const },
    {
      label: 'Request an event',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSeLsDfSnzmwsG4Qok369v-Rnw8O_SO1u17OPUg3_upcp7n42w/viewform',
      variant: 'outline' as const,
    },
  ],
  /** Placeholder hero transition image — replace with production asset */
  transitionImageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
  transitionImageAlt: 'Members collaborating at Hacker Dojo',
}

export const beginnerPath = {
  label: 'New to tech? Start here',
  tracks: [
    {
      title: 'AI & Machine Learning',
      description:
        'Learn how models learn, experiment with notebooks, and pair with members who deploy real-world ML.',
      badge: 'Beginner-friendly',
      cta: { label: 'Explore this track', href: 'https://www.meetup.com/hackerdojo/events/' },
    },
    {
      title: 'Coding & Web Development',
      description:
        'Start with HTML, JavaScript, or Python in a supportive room—bring a laptop and build your first projects.',
      badge: 'Beginner-friendly',
      cta: { label: 'Explore this track', href: 'https://www.meetup.com/hackerdojo/events/' },
    },
    {
      title: 'Hardware & Prototyping',
      description:
        'Soldering, 3D prints, and simple circuits with mentors on hand—no bench experience required.',
      badge: 'Beginner-friendly',
      cta: { label: 'Explore this track', href: 'https://calendly.com/hdfrontdesk/30min' },
    },
  ],
  journey: [
    'Pick a track',
    'Build a beginner project',
    'Get mentorship',
    'Join a real team',
  ],
} as const

export const workspaceGallery = {
  label: 'Explore the space',
  spaces: [
    {
      title: 'Coworking Space',
      caption: 'Open desks, fast Wi‑Fi, and quiet corners for deep work any time of day.',
      imageSrc: '/images/explore-space/coworking-space.png',
      imageAlt:
        'Open coworking area with rows of desks, ergonomic chairs, and colorful wall art at Hacker Dojo.',
    },
    {
      title: 'Maker Lab',
      caption: '3D printers, electronics benches, and tools for hands-on builds and repairs.',
      imageSrc: '/images/explore-space/maker-lab.png',
      imageAlt:
        'Electronics workbench with tools, component storage, and a project in progress in the maker lab.',
    },
    {
      title: 'Event Area',
      caption: 'Meetups, lightning talks, and community gatherings in a flexible layout.',
      imageSrc: '/images/explore-space/event-area.png',
      imageAlt:
        'Event and presentation space with theater-style seating, stage, and ambient lighting.',
    },
    {
      title: 'Meeting Rooms',
      caption: 'Bookable rooms for teams, interviews, and small workshops.',
      imageSrc: '/images/explore-space/meeting-rooms.png',
      imageAlt:
        'Bright collaborative workspace with communal desk, chairs, and vibrant mural wall.',
    },
  ],
} as const

export const welcome = {
  label: 'Welcome to Hacker Dojo',
  bodyLine1:
    'At Hacker Dojo, we believe in the power of community, collaboration, and',
  bodyLine2:
    'the relentless pursuit of knowledge. It is a haven for the dreamers, the',
  bodyLine3: 'tinkerers, and the visionaries who dare to challenge the status quo.',
  cards: [
    {
      title: 'Access',
      body: `Get 24/7 access to our training
ground with your digital key.
Work in our shared or quiet
spaces, book meeting rooms, or
tinker in our maker labs.`,
      icon: 'monitor' as const,
    },
    {
      title: 'Community',
      body: `Discover and refine your
expertise by connecting with
your peers through spontaneous
talks, hackathons, and various
technical classes & workshops.`,
      icon: 'users' as const,
    },
    {
      title: 'Potential',
      body: `Take it to the next level, develop
soft skills and amplify your
impact by challenging yourself to
lead and empower other talented
members of our community.`,
      icon: 'arrow-up-right' as const,
    },
  ],
}

export const testimonial = {
  label: 'What people say about the dojo',
  defaultActiveId: '2',
  entries: [
    {
      id: '1',
      src: testimonialPhoto1,
      alt: 'Eric Migicovsky portrait',
      quote: `If you need a place to hack, if you need a place to meet
people, if you need a place to drink beers on fridays. For me,
the Hacker Dojo was my first home in the valley.`,
      name: 'Eric Migicovsky',
      title: 'Founder of Pebble',
      cardClass: 'bg-[#e8e9fb]',
    },
    {
      id: '2',
      src: testimonialPhoto2,
      alt: 'Steve Wozniak portrait',
      quote: `I want to share a good cause - a non-profit hacker space
community that supports what I hold near and dear:
mentorship of tech and the love of sharing tech.`,
      name: 'Steve Wozniak',
      title: 'Co-Founder of Apple',
      cardClass: 'bg-[#f7dfc7]',
    },
    {
      id: '3',
      src: testimonialPhoto3,
      alt: 'Chris Messina portrait',
      quote: `The people there wanted to be there because they loved
tech, they loved the future, and they loved getting together
with other people with similar sets of values.`,
      name: 'Chris Messina',
      title: 'Inventor of Hashtag',
      cardClass: 'bg-[#efd9ee]',
    },
    {
      id: '4',
      src: testimonialPhoto4,
      alt: 'Austin Allred portrait',
      quote: `I had ambitions of running a startup one day but I didn't
have the tools or the know how to get there, and the Hacker
Dojo became my training ground.`,
      name: 'Austin Allred',
      title: 'Founder of Lambda School',
      cardClass: 'bg-[#f5d5ce]',
    },
  ],
}

export const memberBenefits = {
  label: 'Member benefits',
  supporting:
    'A playground of possibilities with state-of-the-art resources, and a collaborative environment that fosters experimentation and growth.',
  items: [
    { label: '24/7 Access', icon: 'clock' as const },
    { label: 'Fiber Internet', icon: 'wifi' as const },
    { label: 'Unlimited Coffee & Tea', icon: 'coffee' as const },
    { label: 'Hardware Labs', icon: 'cpu' as const },
    { label: 'Supportive Community', icon: 'heart' as const },
    { label: 'Free Events', icon: 'calendar' as const },
    { label: 'Monitors & Keyboards', icon: 'monitor' as const },
    { label: 'Meeting Rooms', icon: 'building' as const },
  ],
}

export const pricing = {
  label: 'Member pricing',
  supporting: 'Become a member and get access\nto Hacker Dojo within minutes.',
  price: '$150',
  period: 'Per month',
  tags: [
    { text: 'Save $450 if you pay for a whole year', tone: 'lavender' as const },
    { text: 'Student plan available at $75 / month', tone: 'blue' as const },
    { text: 'Veteran plan available at $135 / month', tone: 'green' as const },
    { text: 'Add a dedicated desk for $225 / month', tone: 'yellow' as const },
  ],
  cta: { label: 'Start your membership', href: 'https://hackerdojo.spaces.nexudus.com/?public&' },
}

export const documentary = {
  label: 'The Hacker Dojo Documentary',
  body: `Since 2009, Hacker Dojo has been a vibrant ecosystem of
entrepreneurs, artists, developers and engineers, all driven by a shared
passion for pushing boundaries and solving complex problems.`,
  videoUrl: 'https://www.youtube.com/watch?v=YprmMvHaWUM&t=1s',
}

export const press = {
  logos: ['VentureBeat', 'The Mercury News', 'WIRED', 'Financial Times', 'SLATE', 'The New York Times'],
  articles: [
    {
      title: 'The soul of Silicon Valley',
      source: 'Financial Times',
      href: 'https://www.ft.com/content/d2f3e8c4-49af-11e6-8d68-72e9211e86ab',
      tone: 'lavender' as const,
    },
    {
      title: 'How a nerd collective pranked the tech press',
      source: 'Slate',
      href: 'https://slate.com/technology/2013/02/hacker-photos-how-hacker-dojo-pranked-wired-with-hilariously-stereotypical-stock-images.html',
      tone: 'blue' as const,
    },
    {
      title: 'First Bitcoin ATM in Silicon Valley',
      source: 'Palo Alto Online',
      href: 'https://www.paloaltoonline.com/news/2014/03/28/valleys-first-bitcoin-atm-opens-at-mvs-hacker-dojo',
      tone: 'green' as const,
    },
    {
      title: 'Tech for laughs at Hack Comedy Night',
      source: 'The Almanac',
      href: 'https://www.almanacnews.com/arts/2023/04/20/ai-art-standup-and-sketches-play-tech-for-laughs-at-hack-comedy-night',
      tone: 'yellow' as const,
    },
    {
      title: 'Techies fight to save the Hacker Dojo',
      source: 'The New York Times',
      href: 'https://www.nytimes.com/2012/08/23/technology/techies-fight-to-save-hacker-dojo-a-popular-silicon-valley-work-space.html',
      tone: 'rose' as const,
    },
    {
      title: 'Celebrating 10 Years of Hacker Dojo',
      source: 'Silicon Valley Voice',
      href: 'https://www.svvoice.com/santa-claras-hacker-dojo-celebrates-10-years/',
      tone: 'mint' as const,
    },
    {
      title: 'Hacker Dojo Interview',
      source: 'VentureBeat',
      href: 'https://venturebeat.com/business/hacker-dojo-interview/',
      tone: 'sky' as const,
    },
  ],
}

type BoardPerson = {
  name: string
  initials: string
  href?: string
  photo?: {
    src: string
    alt?: string
    position?: string
  }
}

type BoardContent = {
  membersLabel: string
  membersSupporting: string
  members: BoardPerson[]
  advisorsLabel: string
  advisors: BoardPerson[]
}

export const board: BoardContent = {
  membersLabel: 'Board members',
  membersSupporting:
    'Our board of experienced professionals from various backgrounds - all passionate about creating a better future through education and innovation.',
  members: [
    {
      name: 'Emily Johnson',
      initials: 'EJ',
      href: 'https://www.linkedin.com/in/emilymjohnson/',
      photo: {
        src: emilyJohnsonPhoto,
        alt: 'Emily Johnson',
        position: '50% 28%',
      },
    },
    {
      name: 'Marco Palacios',
      initials: 'MP',
      href: 'https://www.linkedin.com/in/marcopalacios/',
      photo: {
        src: marcoPalaciosPhoto,
        alt: 'Marco Palacios',
        position: '50% 24%',
      },
    },
    {
      name: 'Eva Carrender',
      initials: 'EC',
      href: 'https://www.linkedin.com/in/evacarrender/',
      photo: {
        src: evaCarrenderPhoto,
        alt: 'Eva Carrender',
        position: '50% 20%',
      },
    },
    {
      name: 'Peter Theobald',
      initials: 'PT',
      href: 'https://www.linkedin.com/in/peterjtheobald/',
      photo: {
        src: peterTheobaldPhoto,
        alt: 'Peter Theobald',
        position: '50% 22%',
      },
    },
  ],
  advisorsLabel: 'Board advisors',
  advisors: [
    {
      name: 'David Weekly',
      initials: 'DW',
      href: 'https://www.linkedin.com/in/dweekly/',
      photo: {
        src: davidWeeklyPhoto,
        alt: 'David Weekly',
        position: '50% 20%',
      },
    },
    {
      name: 'Mark Stofer',
      initials: 'MS',
      href: 'https://www.linkedin.com/in/mark-stofer-899b63277/',
      photo: {
        src: markStoferPhoto,
        alt: 'Mark Stofer',
        position: '50% 18%',
      },
    },
  ],
}

export const location = {
  label: 'Where you can find us',
  hqTitle: 'Hacker Dojo HQ',
  address: '855 Maude Ave, Mountain View, CA 94043',
  hours: 'Public Hours 10 AM - 9 PM',
  mapsUrl:
    'https://www.google.com/maps/place/Hacker+Dojo/@37.396254,-122.049074,14z/data=!4m6!3m5!1s0x808fb71274e6acd3:0x9f6f7e2c42ca6e51!8m2!3d37.3962541!4d-122.0490745!16s%2Fg%2F1hhj6y_33?hl=en&entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D',
  transitLabel: 'Nearby transit',
  transit: [
    { title: 'Middlefield VTA', detail: '5 minute walk', icon: 'train' as const },
    { title: 'Bus 21', detail: '1 minute walk', icon: 'bus' as const },
  ],
}

export const social = {
  label: 'Connect with us on social media',
  platforms: [
    { name: 'Meetup', color: 'text-[#e0393e]' },
    { name: 'luma', color: 'text-neutral-700' },
    { name: 'Discord', color: 'text-[#5865F2]' },
    { name: 'X', color: 'text-neutral-900' },
    { name: 'facebook', color: 'text-[#1877F2]' },
  ],
}

export const footer = {
  copyright: '© 2025 Hacker Dojo. All rights reserved.',
  /** Two link/info columns — order preserved for layout */
  columns: [
    [
      { kind: 'text', text: '501(c)3 Non-Profit' },
      { kind: 'link', text: 'Take a tour', href: 'https://calendly.com/hdfrontdesk/30min' },
      { kind: 'link', text: 'Membership', href: 'https://hackerdojo.spaces.nexudus.com/?public&' },
      {
        kind: 'link',
        text: 'Events',
        href: 'https://www.meetup.com/hackerdojo/events/',
        external: true,
      },
    ],
    [
      { kind: 'text', text: 'EIN # 26-4812213' },
      { kind: 'text', text: '501c3 Docs' },
      { kind: 'text', text: 'Policies' },
      { kind: 'text', text: 'Phone: (650) 429-8605' },
    ],
  ] satisfies FooterItem[][],
}

export const toneClasses = {
  lavender: 'bg-violet-100/90',
  blue: 'bg-sky-100/90',
  green: 'bg-emerald-100/90',
  yellow: 'bg-amber-100/90',
  rose: 'bg-rose-100/90',
  mint: 'bg-teal-100/90',
  sky: 'bg-sky-100/90',
}
