import { CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader/SectionHeader'
import { audience } from '../content/siteContent'
import styles from './AudienceSection.module.css'

export function AudienceSection() {
  return (
    <section id="para-quien" className={styles.section} aria-labelledby="audience-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Para quién es"
          title={audience.title}
          subtitle={audience.intro}
        />

        <ul className={styles.grid} role="list">
          {audience.situations.map((s) => (
            <li key={s} className={styles.item}>
              <CheckCircle2 size={14} className={styles.icon} aria-hidden="true" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
