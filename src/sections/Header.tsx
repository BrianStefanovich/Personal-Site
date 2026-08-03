import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { SCHEDULE_URL } from '@/content/site.config'

type NavItem = { label: string; href: string }

export function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const navItems = t('nav.items', { returnObjects: true }) as NavItem[]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#inicio" className="flex flex-col leading-tight" aria-label={`${t('common.brandName')} — inicio`}>
          <span className="font-sans text-base font-semibold text-foreground">{t('common.brandName')}</span>
          <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
            {t('common.brandTag')}
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href={SCHEDULE_URL}>{t('common.scheduleCta')}</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Abrir menú">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>{t('common.brandName')}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 px-4" aria-label="Navegación móvil">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a href={item.href} className="text-base font-medium text-foreground">
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild>
                    <a href={SCHEDULE_URL}>{t('common.scheduleCta')}</a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
