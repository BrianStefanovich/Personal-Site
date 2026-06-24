import { ArrowDown } from 'lucide-react'
import { Button } from '../components/Button/Button'
import { HeroVisual } from '../assets/visuals/HeroVisual'
import { hero, SCHEDULE_URL } from '../content/siteContent'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section id="inicio" className={styles.section} aria-labelledby="hero-heading">
      <div className={`container ${styles.inner}`}>
        {/* Left: text */}
        <div className={styles.text}>
          <span className={styles.eyebrow}>{hero.eyebrow}</span>
          <h1 id="hero-heading" className={styles.headline}>{hero.headline}</h1>
          <p className={styles.sub}>{hero.subheadline}</p>
          <p className={styles.support}>{hero.support}</p>
          <div className={styles.ctas}>
            <Button href={SCHEDULE_URL} variant="primary">{hero.ctaPrimary}</Button>
            <Button href="#servicios" variant="ghost">{hero.ctaSecondary}</Button>
          </div>
        </div>

        {/* Right: SVG visual */}
        <div className={styles.visual} aria-hidden="true">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#problema" className={styles.scroll} aria-label="Ir a la siguiente sección">
        <ArrowDown size={16} />
        <span>Continuar</span>
      </a>
    </section>
  )
}
