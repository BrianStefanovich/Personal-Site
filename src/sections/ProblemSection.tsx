import { useTranslation } from 'react-i18next'
import { Package, Rocket, Gauge, History, CloudCog, Scale, BadgeCheck, Layers, Building2, Ruler } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionHeader } from '@/components/SectionHeader'

const existingIcons = [Gauge, History, CloudCog, Scale]
const newIcons = [BadgeCheck, Layers, Building2, Ruler]

export function ProblemSection() {
  const { t } = useTranslation()
  const existingBullets = t('problem.existing.bullets', { returnObjects: true }) as string[]
  const newBullets = t('problem.new.bullets', { returnObjects: true }) as string[]

  return (
    <section id="diagnostico" className="border-b border-border py-24" aria-labelledby="problem-heading">
      <div className="container space-y-12">
        <SectionHeader headingId="problem-heading" title={t('problem.title')} subtitle={t('problem.intro')} />

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                <Package className="size-5" />
              </span>
              <div className="flex flex-col gap-1">
                <Badge variant="outline" className="font-mono uppercase">
                  {t('problem.existing.tag')}
                </Badge>
                <CardTitle className="text-xl">{t('problem.existing.title')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {existingBullets.map((bullet, i) => {
                  const Icon = existingIcons[i]
                  return (
                    <li key={bullet} className="flex items-start gap-3">
                      {Icon && <Icon className="mt-0.5 size-4 shrink-0 text-primary" />}
                      <span className="text-muted-foreground">{bullet}</span>
                    </li>
                  )
                })}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                <Rocket className="size-5" />
              </span>
              <div className="flex flex-col gap-1">
                <Badge variant="outline" className="font-mono uppercase">
                  {t('problem.new.tag')}
                </Badge>
                <CardTitle className="text-xl">{t('problem.new.title')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {newBullets.map((bullet, i) => {
                  const Icon = newIcons[i]
                  return (
                    <li key={bullet} className="flex items-start gap-3">
                      {Icon && <Icon className="mt-0.5 size-4 shrink-0 text-primary" />}
                      <span className="text-muted-foreground">{bullet}</span>
                    </li>
                  )
                })}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
