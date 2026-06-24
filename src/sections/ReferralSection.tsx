import { SectionHeader } from '../components/SectionHeader/SectionHeader'
import { referral, SCHEDULE_URL } from '../content/siteContent'
import { Button } from '../components/Button/Button'
import styles from './ReferralSection.module.css'

export function ReferralSection() {
  return (
    <section id="referencias" className={styles.section} aria-labelledby="referral-heading">
      <div className="container">
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Referencias"
            title={referral.title}
            subtitle={referral.body}
          />

          <div className={styles.anchors}>
            {referral.anchors.map((a) => (
              <p key={a} className={styles.anchor}>{a}</p>
            ))}
          </div>

          <div className={styles.footer}>
            <p className={styles.cta}>{referral.cta}</p>
            <Button href={SCHEDULE_URL} variant="ghost">Contactar</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
