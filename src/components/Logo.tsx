import { LOGO_SYMBOL_PATH } from '@/components/logo-symbol-path';
import { cn } from '@/lib/utils';

export function LogoSymbol({ className }: { className?: string }) {
	return (
		<svg aria-hidden="true" viewBox="0 0 41 41" fill="currentColor" className={className}>
			<path d={LOGO_SYMBOL_PATH} />
		</svg>
	);
}

interface LogoProps {
	name: string;
	size?: 'md' | 'lg';
	className?: string;
}

/** Simplified lockup (symbol + name). The descriptor is set separately where there is room for it. */
export function Logo({ name, size = 'md', className }: LogoProps) {
	return (
		<span className={cn('inline-flex items-center gap-3 text-ink md:gap-4', className)}>
			<LogoSymbol className={size === 'lg' ? 'size-10 shrink-0' : 'size-8 shrink-0'} />
			<span
				className={cn(
					'whitespace-nowrap font-display font-bold leading-tight tracking-[-0.01em]',
					size === 'lg' ? 'text-[1.6875rem]' : 'text-lg md:text-xl',
				)}
			>
				{name}
			</span>
		</span>
	);
}
