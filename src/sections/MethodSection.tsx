import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from '@/components/SectionHeader'
import { MethodDiagram } from '@/assets/visuals/MethodDiagram'
import { cn } from '@/lib/utils'

type MethodStep = { number: string; title: string; description: string }

export function MethodSection() {
  const { t } = useTranslation()
  const steps = t('method.steps', { returnObjects: true }) as MethodStep[]
  const [active, setActive] = useState(0)

  return (
    <section id="metodo" className="border-b border-border py-24" aria-labelledby="method-heading">
      <div className="container space-y-12">
        <SectionHeader headingId="method-heading" title={t('method.title')} />

        {/* Diagram */}
        <div className="hidden md:block">
          <MethodDiagram activeStep={active} />
        </div>

        {/* Steps */}
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.number}
              className={cn(
                'flex flex-col gap-3 rounded-lg border border-border p-6 transition-colors',
                i === active && 'border-primary bg-secondary/40',
              )}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
            >
              <span className="font-mono text-sm font-medium text-primary">{step.number}</span>
              <h3 className="font-sans text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
