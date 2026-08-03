import { useTranslation } from 'react-i18next'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroVisual } from '@/assets/visuals/HeroVisual'
import { SCHEDULE_URL } from '@/content/site.config'

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="inicio" className="border-b border-border py-24 sm:py-32" aria-labelledby="hero-heading">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs font-medium tracking-wider text-primary uppercase">
            {t('hero.eyebrow')}
          </span>
          <h1
            id="hero-heading"
            className="font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            {t('hero.name')}
          </h1>
          <p className="font-sans text-2xl font-semibold text-foreground sm:text-3xl">
            {t('hero.headline')}
          </p>
          <p className="max-w-xl text-lg text-muted-foreground">{t('hero.body')}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <a href={SCHEDULE_URL}>{t('hero.ctaPrimary')}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#servicios">{t('hero.ctaSecondary')}</a>
            </Button>
          </div>
        </div>

        {/* Right: SVG visual */}
        <div className="flex justify-center" aria-hidden="true">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#diagnostico"
        className="mt-16 flex flex-col items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Ir a la siguiente sección"
      >
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
