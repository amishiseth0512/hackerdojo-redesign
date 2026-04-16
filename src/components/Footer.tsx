import { LogoMark } from './brand/LogoMark'
import { Container } from './Container'
import { FooterColumn } from './ui/FooterColumn'
import { brand, footer } from '../data/homeContent'

export function Footer() {
  const [col1, col2] = footer.columns

  return (
    <footer className="border-t border-white/10 bg-black text-neutral-300">
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="grid gap-14 md:grid-cols-12 md:gap-12 lg:gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5">
              <LogoMark />
              <span className="text-[17px] font-bold uppercase tracking-[0.16em] text-white">
                {brand.nameUpper}
              </span>
            </div>
            <p className="mt-10 max-w-xs text-[11px] font-medium uppercase leading-relaxed tracking-[0.14em] text-neutral-500">
              {footer.copyright}
            </p>
          </div>

          <div className="md:col-span-3">
            <FooterColumn items={col1} />
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <FooterColumn items={col2} />
          </div>
        </div>
      </Container>
    </footer>
  )
}
