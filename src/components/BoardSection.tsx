import { Container } from './Container'
import { PersonAvatar } from './ui/PersonAvatar'
import { SectionIntro } from './ui/SectionIntro'
import { board } from '../data/homeContent'

export function BoardSection() {
  return (
    <section className="bg-[#f3f3f3] pb-28 md:pb-36" aria-labelledby="board-heading">
      <Container>
        <SectionIntro id="board-heading" label={board.membersLabel}>
          <p className="hd-body-lead">{board.membersSupporting}</p>
        </SectionIntro>

        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-12 md:mt-20 md:gap-x-14 lg:gap-x-16">
          {board.members.map((m) => (
            <PersonAvatar key={m.name} name={m.name} initials={m.initials} />
          ))}
        </div>

        <SectionIntro label={board.advisorsLabel} headingClassName="mt-20 md:mt-28" />

        <div className="mt-10 flex flex-wrap justify-center gap-14 md:mt-12 md:gap-20">
          {board.advisors.map((m) => (
            <PersonAvatar key={m.name} name={m.name} initials={m.initials} />
          ))}
        </div>
      </Container>
    </section>
  )
}
