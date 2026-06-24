import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '../components/Button/Button'
import { nav, SCHEDULE_URL } from '../content/siteContent'
import styles from './Header.module.css'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Logo / wordmark */}
        <a href="#inicio" className={styles.logo} aria-label="Brian Stefanovich — inicio">
          <span className={styles.logoName}>Brian Stefanovich</span>
          <span className={styles.logoTag}>Software Architect</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href={SCHEDULE_URL} variant="primary">Agendar</Button>
          <button
            className={styles.menuBtn}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className={styles.mobileNav} aria-label="Navegación móvil">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <Button href={SCHEDULE_URL} variant="primary" className={styles.mobileCta}>
            Agendar una conversación
          </Button>
        </nav>
      )}
    </header>
  )
}
