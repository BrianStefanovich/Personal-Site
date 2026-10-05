import { cn } from '@/lib/utils';

interface SectionHeadingProps {
	eyebrow?: string;
	title: string;
	subhead?: string;
	className?: string;
	titleClassName?: string;
}

/** Mono eyebrow, H2 and the 64x4 Blueprint bar. */
export function SectionHeading({ eyebrow, title, subhead, className, titleClassName }: SectionHeadingProps) {
	return (
		<header className={cn('reveal', className)}>
			{eyebrow && <p className="label-mono text-sm text-link">{eyebrow}</p>}
			<h2 className={cn(eyebrow && 'mt-3', titleClassName)}>{title}</h2>
			<span aria-hidden="true" className="mt-4 block h-1 w-16 bg-link" />
			{subhead && <p className="mt-6 text-xl text-muted md:text-2xl">{subhead}</p>}
		</header>
	);
}
