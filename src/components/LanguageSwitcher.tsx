import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LANGUAGES } from '@/content/site.config'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = LANGUAGES.find((lang) => lang.code === i18n.resolvedLanguage) ?? LANGUAGES[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="font-mono text-xs uppercase tracking-wider"
          aria-label="Cambiar idioma / Change language"
        >
          <Globe className="size-3.5" />
          {current.label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={cn(
              'font-mono text-xs uppercase tracking-wider',
              lang.code === current.code && 'text-primary font-semibold'
            )}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
