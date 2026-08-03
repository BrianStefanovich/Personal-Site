import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  headingId?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  headingId,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-2xl space-y-4',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="block font-mono text-xs font-medium tracking-wider text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2
        id={headingId}
        className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
