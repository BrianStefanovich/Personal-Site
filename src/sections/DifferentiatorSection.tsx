import { SectionHeader } from '../components/SectionHeader/SectionHeader'
import { DifferentiatorVisual } from '../assets/visuals/DifferentiatorVisual'
import { differentiators } from '../content/siteContent'
import styles from './DifferentiatorSection.module.css'

export function DifferentiatorSection() {
  return (
    <section id="diferenciador" className={styles.section} aria-labelledby="diff-heading">
      <div className={`container ${styles.inner}`}>
        {/* Text */}
        <div className={styles.content}>
          <SectionHeader
            eyebrow="Diferencial"
            title="Pensamiento técnico profundo, explicado en lenguaje de negocio."
            subtitle="Mi diferencia está en combinar experiencia real en desarrollo de software, arquitectura, cloud, liderazgo técnico y formación matemática."
          />

          <ul className={styles.list} role="list">
            {differentiators.map((d) => (
              <li key={d} className={styles.item}>
                <span className={styles.connector} aria-hidden="true">+—</span>
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className={styles.visual} aria-hidden="true">
          <DifferentiatorVisual />
        </div>
      </div>
    </section>
  )
}
