import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionProps {
	id?: string;
	/** inverse flips the band: Carbon on a Porcelain page, Porcelain on a Carbon page. */
	tone?: 'page' | 'inverse';
	className?: string;
	contentClassName?: string;
	children: ReactNode;
}

/** A framed band: 2px hairline underneath, one content column inside the page frame. */
export function Section({ id, tone = 'page', className, contentClassName, children }: SectionProps) {
	return (
		<section
			id={id}
			className={cn('section-y frame-pad border-b-2 border-line', tone === 'inverse' ? 'surface-inverse' : 'bg-page text-ink', className)}
		>
			<div className={contentClassName}>{children}</div>
		</section>
	);
}
