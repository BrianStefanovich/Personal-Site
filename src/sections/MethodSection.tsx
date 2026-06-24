import { useState } from 'react'
import { SectionHeader } from '../components/SectionHeader/SectionHeader'
import { MethodDiagram } from '../assets/visuals/MethodDiagram'
import { method } from '../content/siteContent'
import styles from './MethodSection.module.css'

export function MethodSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="metodo" className={styles.section} aria-labelledby="method-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Método"
          title="Primero entender. Luego decidir. Después construir."
          subtitle="No parto desde la tecnología de moda. Parto desde el problema, el contexto y las restricciones reales de la empresa."
        />

        {/* Diagram */}
        <div className={styles.diagramWrap}>
          <MethodDiagram activeStep={active} />
        </div>

        {/* Steps */}
        <ol className={styles.steps} role="list">
          {method.map((step, i) => (
            <li
              key={step.number}
              className={`${styles.step} ${i === active ? styles.stepActive : ''}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
            >
              <span className={styles.stepNumber}>{step.number}</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
