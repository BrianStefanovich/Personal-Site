import { SectionHeader } from '../components/SectionHeader/SectionHeader'
import { Button } from '../components/Button/Button'
import { contact, SCHEDULE_URL } from '../content/siteContent'
import styles from './ContactSection.module.css'

export function ContactSection() {
  return (
    <section id="contacto" className={styles.section} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Contacto"
            title={contact.title}
            subtitle={contact.body}
            align="center"
          />

          <div className={styles.cta}>
            <Button href={SCHEDULE_URL} variant="primary">{contact.ctaPrimary}</Button>
          </div>

          <p className={styles.support}>{contact.support}</p>

          {/* ASCII-style connector decoration */}
          <div className={styles.connector} aria-hidden="true">
            <span className={styles.connectorLine}>+— — — — — — — — — — — — — — — — — — +</span>
            <span className={styles.connectorMid}>|&nbsp;&nbsp;&nbsp;&nbsp;brianstefanovich.com&nbsp;&nbsp;&nbsp;&nbsp;|</span>
            <span className={styles.connectorLine}>+— — — — — — — — — — — — — — — — — — +</span>
          </div>
        </div>
      </div>
    </section>
  )
}
