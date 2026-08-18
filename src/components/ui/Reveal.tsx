import { useReveal } from '@/lib/useReveal';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface RevealProps {
	children: ReactNode;
	className?: string;
	delayMs?: number;
}

/** Scroll-triggered fade + translate for prose blocks (guia_website.md §21). */
export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
	const { ref, revealed } = useReveal<HTMLDivElement>();

	return (
		<div
			ref={ref}
			data-revealed={revealed}
			className={cn('reveal', className)}
			style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
		>
			{children}
		</div>
	);
}
