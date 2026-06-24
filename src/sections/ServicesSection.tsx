import { SectionHeader } from '../components/SectionHeader/SectionHeader'
import { services } from '../content/siteContent'
import styles from './ServicesSection.module.css'

export function ServicesSection() {
  return (
    <section id="servicios" className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Servicios"
          title="De la confusión técnica a un plan claro."
          subtitle="Trabajo junto a empresas y equipos que necesitan entender, decidir o construir software con mayor claridad."
        />

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article key={service.id} className={styles.card}>
              <header className={styles.cardHeader}>
                <span className={styles.cardIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardSubtitle}>{service.subtitle}</p>
                </div>
              </header>
              <p className={styles.cardDesc}>{service.description}</p>
              <ul className={styles.cardItems} role="list">
                {service.items.map((item) => (
                  <li key={item} className={styles.cardItem}>
                    <span className={styles.itemConnector} aria-hidden="true">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
