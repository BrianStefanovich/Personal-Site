import { cn } from '@/lib/utils';

interface SectionHeadingProps {
	eyebrow?: string;
	title: string;
	/** The page's own title is an h1; section titles stay h2. */
	as?: 'h1' | 'h2';
	className?: string;
	titleClassName?: string;
}

/** Mono eyebrow, H2 and the 64x4 Blueprint bar. */
export function SectionHeading({ eyebrow, title, as: Heading = 'h2', className, titleClassName }: SectionHeadingProps) {
	return (
		<header className={cn('reveal flex flex-col gap-2', className)}>
			{eyebrow && <p className="label-mono text-sm text-muted">{eyebrow}</p>}
			<Heading className={titleClassName}>{title}</Heading>
			<span aria-hidden="true" className="mt-2 block h-1 w-16 bg-blueprint" />
		</header>
	);
}
