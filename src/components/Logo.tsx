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
	descriptor: string;
	className?: string;
}

/** Principal lockup from sm up (descriptor wraps to two lines, as in the manual); below that the simplified lockup applies. */
export function Logo({ name, descriptor, className }: LogoProps) {
	return (
		<span className={cn('inline-flex items-center gap-3 text-ink', className)}>
			<LogoSymbol className="size-10 shrink-0 md:size-11" />
			<span className="flex flex-col">
				<span className="whitespace-nowrap font-display text-lg font-bold leading-tight md:text-xl">{name}</span>
				<span className="label-mono mt-0.5 hidden max-w-[13rem] text-[0.6875rem] leading-[1.3] sm:block">{descriptor}</span>
			</span>
		</span>
	);
}
