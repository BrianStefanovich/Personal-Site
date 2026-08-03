import { useTranslation } from 'react-i18next'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  const servicesLinks = t('footer.servicesLinks', { returnObjects: true }) as string[]
  const companyLinks = t('footer.companyLinks', { returnObjects: true }) as string[]

  return (
    <footer className="border-t border-border py-12" role="contentinfo">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-base font-semibold text-foreground">{t('common.brandName')}</span>
            <span className="text-sm text-muted-foreground">
              © {year} {t('footer.copyright')}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs font-medium tracking-wider text-muted-foreground uppercase">
              {t('footer.servicesTitle')}
            </span>
            {servicesLinks.map((link) => (
              <span key={link} className="text-sm text-muted-foreground">
                {link}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs font-medium tracking-wider text-muted-foreground uppercase">
              {t('footer.companyTitle')}
            </span>
            {companyLinks.map((link) => (
              <span key={link} className="text-sm text-muted-foreground">
                {link}
              </span>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <p className="font-mono text-xs text-muted-foreground">{t('common.brandTag')}</p>
      </div>
    </footer>
  )
}
