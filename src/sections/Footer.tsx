import { nav } from '../content/siteContent'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.name}>Brian Stefanovich</span>
          <span className={styles.copy}>© {year}. Todos los derechos reservados.</span>
        </div>

        <nav className={styles.nav} aria-label="Navegación de pie de página">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <span className={styles.tag}>Software Architect &amp; Consultant</span>
        </div>
      </div>
    </footer>
  )
}
