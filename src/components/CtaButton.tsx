import { openContact, type ContactIntent } from '@/lib/contact';
import { cn } from '@/lib/utils';
import type { AnchorHTMLAttributes } from 'react';

interface CtaButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
	variant?: 'primary' | 'contextual';
	intent?: ContactIntent;
	href?: string;
}

/**
 * The site's single CTA vocabulary (guia_website.md §10): a solid Blueprint primary
 * for the three recurring "Conversemos 30 minutos" moments, and a discreet underlined
 * contextual link (arrow nudges 4px on hover) for per-service asks. Either opens the
 * contact drawer with an intent, or — when `href` is given — scrolls to an in-page anchor.
 */
export function CtaButton({ variant = 'primary', intent, href, className, children, onClick, ...rest }: CtaButtonProps) {
	const isPrimary = variant === 'primary';

	return (
		<a
			href={href ?? '#contacto'}
			onClick={(event) => {
				if (!href) {
					event.preventDefault();
					openContact(intent ?? 'other');
				}
				onClick?.(event);
			}}
			className={cn(
				'group inline-flex items-center gap-2 font-body transition',
				isPrimary
					? 'rounded-md bg-blueprint px-6 py-3 text-sm font-semibold text-porcelain hover:brightness-110 md:text-base'
					: 'text-sm font-semibold text-blueprint underline decoration-blueprint/40 underline-offset-4 hover:decoration-blueprint',
				className,
			)}
			{...rest}
		>
			<span>{children}</span>
			<span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
				→
			</span>
		</a>
	);
}
