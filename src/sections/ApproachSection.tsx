import { useTranslation } from 'react-i18next'
import { Search, Compass, ClipboardCheck, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'

const STEPS = [
  { icon: Search, key: 'context' },
  { icon: Compass, key: 'diagnosis' },
  { icon: ClipboardCheck, key: 'plan' },
]

export function ApproachSection() {
  const { t } = useTranslation()

  return (
    <section id="enfoque" className="border-b border-border py-24" aria-labelledby="approach-heading">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <SectionHeader headingId="approach-heading" title={t('approach.title')} subtitle={t('approach.body')} />

        <div className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card p-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.key} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-2">
                  <span className="flex size-14 items-center justify-center rounded-full border border-border bg-background text-primary">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="size-4 text-muted-foreground" aria-hidden="true" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
