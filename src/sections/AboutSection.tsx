import { SectionHeader } from '../components/SectionHeader/SectionHeader'
import { about } from '../content/siteContent'
import styles from './AboutSection.module.css'

export function AboutSection() {
  return (
    <section id="sobre-mi" className={styles.section} aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Left: bio */}
          <div className={styles.bio}>
            <SectionHeader
              eyebrow="Sobre mí"
              title={about.title}
              subtitle={about.subtitle}
            />
            {about.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={styles.paragraph}>{paragraph}</p>
            ))}
            <blockquote className={styles.closing}>
              <span className={styles.closingMark} aria-hidden="true" />
              {about.closing}
            </blockquote>
          </div>

          {/* Right: stack */}
          <aside className={styles.stack} aria-label="Tecnologías y áreas">
            <p className={styles.stackLabel}>Stack &amp; especialidades</p>
            <ul className={styles.stackList} role="list">
              {about.stack.map((s) => (
                <li key={s} className={styles.stackItem}>
                  <span className={styles.stackDot} aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
