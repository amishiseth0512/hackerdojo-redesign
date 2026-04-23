import { Play } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Container } from './Container'
import { SectionIntro } from './ui/SectionIntro'
import { documentary } from '../data/homeContent'

function getYoutubeEmbedUrl(url: string) {
  try {
    const u = new URL(url)
    const id = u.searchParams.get('v')
    if (!id) return null

    const t = u.searchParams.get('t') ?? ''
    const secondsMatch = t.match(/(\d+)s?$/)
    const start = secondsMatch ? Number(secondsMatch[1]) : undefined

    const embed = new URL(`https://www.youtube-nocookie.com/embed/${id}`)
    embed.searchParams.set('autoplay', '1')
    embed.searchParams.set('rel', '0')
    embed.searchParams.set('modestbranding', '1')
    if (start && Number.isFinite(start) && start > 0) embed.searchParams.set('start', String(start))
    return { id, embedUrl: embed.toString() }
  } catch {
    return null
  }
}

export function DocumentarySection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const youtube = useMemo(() => getYoutubeEmbedUrl(documentary.videoUrl), [])
  const previewSrc = youtube ? `https://img.youtube.com/vi/${youtube.id}/maxresdefault.jpg` : null

  return (
    <section className="bg-[#f3f3f3] pb-28 md:pb-36" aria-labelledby="doc-heading">
      <Container>
        <SectionIntro id="doc-heading" label={documentary.label}>
          <p className="hd-body-lead max-w-3xl whitespace-pre-line">{documentary.body}</p>
        </SectionIntro>

        <div className="relative mx-auto mt-14 max-w-[56rem] md:mt-16">
          <div className="aspect-video w-full overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200 shadow-[inset_0_2px_20px_rgba(0,0,0,0.06)]">
            {isPlaying && youtube ? (
              <iframe
                className="h-full w-full"
                src={youtube.embedUrl}
                title="Hacker Dojo Documentary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="group relative h-full w-full"
                aria-label="Play the Hacker Dojo Documentary"
              >
                {previewSrc ? (
                  <img src={previewSrc} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full" />
                )}
                <span className="absolute inset-0 bg-black/20 transition-colors duration-200 group-hover:bg-black/30" />
                <span className="absolute left-1/2 top-1/2 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-neutral-700 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.2)] transition-transform duration-200 group-hover:scale-[1.04]">
                  <Play className="ml-1 h-9 w-9" fill="currentColor" aria-hidden />
                </span>
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
