/** Community projects — used by the /projects page (single source of truth). */

export type ProjectStage = 'Idea' | 'Building' | 'Prototype' | 'Launched'

export type CommunityProject = {
  name: string
  description: string
  participants: number
  rolesNeeded: string
  tags: readonly string[]
  stage: ProjectStage
}

export const projectStages = ['Idea', 'Building', 'Prototype', 'Launched'] as const satisfies readonly ProjectStage[]

export const projectsPage = {
  label: 'Community projects',
  heading: 'Explore Projects at Hacker Dojo',
  supporting:
    'Browse active projects members are building in the community—and find ways to contribute your skills, learn alongside others, and ship real work together.',
  membershipNote:
    'Browsing projects is free. Connecting with project creators requires membership.',
  joinCta: { label: 'Join project', href: 'https://hackerdojo.spaces.nexudus.com/?public&' },
  bottomCta: {
    heading: 'Want to build with the community?',
    primary: { label: 'Become a Member', href: 'https://hackerdojo.spaces.nexudus.com/?public&' },
    secondary: { label: 'Contact Us', href: 'tel:+16504298605' },
  },
  projects: [
    {
      name: 'AI Study Buddy',
      description:
        'Building an AI-powered study companion that helps students generate summaries, quizzes, and learning plans.',
      participants: 4,
      rolesNeeded: 'Frontend Developer, ML Engineer, UI Designer',
      tags: ['React', 'Python', 'LLMs'],
      stage: 'Building',
    },
    {
      name: 'Smart Garden Monitor',
      description:
        'A hardware project for monitoring soil moisture, light, and temperature for home gardens.',
      participants: 3,
      rolesNeeded: 'Hardware Engineer, Embedded Developer',
      tags: ['IoT', 'Sensors', 'Arduino'],
      stage: 'Prototype',
    },
    {
      name: 'Local Event Finder',
      description:
        'A community-powered platform for discovering local tech events, meetups, and hack nights.',
      participants: 5,
      rolesNeeded: 'React Developer, Product Designer',
      tags: ['React', 'UX', 'APIs'],
      stage: 'Idea',
    },
    {
      name: 'Campus Skill Exchange',
      description:
        'A platform where students can exchange technical skills, host workshops, and collaborate on mini-projects.',
      participants: 6,
      rolesNeeded: 'Backend Developer, Mobile Developer',
      tags: ['Node.js', 'Mobile', 'Community'],
      stage: 'Building',
    },
    {
      name: 'Makerspace Inventory Tool',
      description:
        'A tool for tracking shared equipment, tools, and availability inside a makerspace environment.',
      participants: 2,
      rolesNeeded: 'Contributor, QA Tester',
      tags: ['Dashboard', 'Inventory', 'Ops'],
      stage: 'Launched',
    },
    {
      name: 'Mentor Match App',
      description:
        'A mentorship matching platform that connects beginners with experienced builders and developers.',
      participants: 4,
      rolesNeeded: 'UX Designer, Full Stack Developer',
      tags: ['Mentorship', 'UX', 'Full Stack'],
      stage: 'Prototype',
    },
  ] as const satisfies readonly CommunityProject[],
}
