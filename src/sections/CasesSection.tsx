import { ExternalLink } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader/SectionHeader'
import { cases } from '../content/siteContent'
import styles from './CasesSection.module.css'

const tagColors: Record<string, string> = {
  Plataforma:     'tertiary',
  Ciberseguridad: 'secondary',
  'E-learning':   'tertiary',
  Fintech:        'primary',
}

export function CasesSection() {
  return (
    <section id="casos" className={styles.section} aria-labelledby="cases-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Casos"
          title="Problemas reales, soluciones con criterio."
          subtitle="Tipos de proyectos donde he aplicado esta forma de trabajo: entender el contexto, ordenar la complejidad y construir soluciones sostenibles."
        />

        <div className={styles.grid}>
          {cases.map((c) => (
            <article key={c.id} className={styles.card}>
              <header className={styles.cardTop}>
                <span className={`${styles.tag} ${styles[`tag--${tagColors[c.tag] ?? 'primary'}`]}`}>
                  {c.tag}
                </span>
                <span className={styles.label}>{c.label}</span>
              </header>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.description}</p>
              </div>

              <ul className={styles.focus} role="list">
                {c.focus.map((f) => (
                  <li key={f} className={styles.focusItem}>
                    <span className={styles.focusDot} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <footer className={styles.cardFooter}>
                <ExternalLink size={12} aria-hidden="true" />
                <p className={styles.result}>{c.result}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
