import { SectionHeader } from '../components/SectionHeader/SectionHeader'
import { problem } from '../content/siteContent'
import styles from './ProblemSection.module.css'

export function ProblemSection() {
  return (
    <section id="problema" className={styles.section} aria-labelledby="problem-heading">
      <div className="container">
        <SectionHeader
          eyebrow="El problema"
          title={problem.title}
          subtitle={problem.body}
        />

        {/* Pain cards grid */}
        <ul className={styles.grid} role="list">
          {problem.pains.map((pain) => (
            <li key={pain} className={styles.card}>
              <span className={styles.cardMark} aria-hidden="true">&#x25AA;</span>
              <p className={styles.cardText}>{pain}</p>
            </li>
          ))}
        </ul>

        {/* Closing */}
        <div className={styles.closing}>
          <span className={styles.closingLine} aria-hidden="true" />
          <p className={styles.closingText}>{problem.closing}</p>
        </div>
      </div>
    </section>
  )
}
