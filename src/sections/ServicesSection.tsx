import { useTranslation } from 'react-i18next'
import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionHeader } from '@/components/SectionHeader'

type ServiceItem = {
  tag: string
  title: string
  description: string
  bullets: string[]
}

export function ServicesSection() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as ServiceItem[]

  return (
    <section id="servicios" className="border-b border-border py-24" aria-labelledby="services-heading">
      <div className="container space-y-12">
        <SectionHeader headingId="services-heading" title={t('services.title')} subtitle={t('services.intro')} />

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <Badge variant="outline" className="w-fit font-mono uppercase">
                  {service.tag}
                </Badge>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
