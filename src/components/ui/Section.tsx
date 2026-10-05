import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionProps {
	id?: string;
	/** inverse flips the band: Carbon on a light page, Porcelain on a dark one. */
	tone?: 'page' | 'inverse';
	className?: string;
	sheetClassName?: string;
	children: ReactNode;
}

/** A full-bleed band holding one schematic-framed sheet of content. */
export function Section({ id, tone = 'page', className, sheetClassName, children }: SectionProps) {
	return (
		<section id={id} className={cn('section-y', tone === 'inverse' ? 'surface-inverse' : 'bg-page text-ink', className)}>
			<div className="container">
				<div className={cn('sheet px-5 py-8 md:p-10 lg:p-14', sheetClassName)}>{children}</div>
			</div>
		</section>
	);
}
