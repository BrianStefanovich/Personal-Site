import { openContact, CONTACT_EMAIL_HREF, type ContactIntent } from '@/lib/contact';
import { cn } from '@/lib/utils';
import type { AnchorHTMLAttributes } from 'react';

interface CtaButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
	/** primary: hero and closing CTA. compact: header and service cards. outline: secondary action. link: mono text action. */
	variant?: 'primary' | 'compact' | 'outline' | 'link';
	intent?: ContactIntent;
	href?: string;
}

const base = 'inline-flex items-center justify-center whitespace-nowrap transition';

const variants = {
	primary:
		'font-display font-bold min-h-12 rounded-card bg-blueprint px-6 py-3 text-lg text-porcelain hover:brightness-110 active:brightness-95',
	compact:
		'font-display font-bold min-h-11 rounded-card bg-blueprint px-[1.125rem] py-2 text-base text-porcelain hover:brightness-110 active:brightness-95',
	outline:
		'font-display font-bold min-h-12 rounded-card px-6 py-3 text-lg text-ink shadow-[inset_0_0_0_1.5px_var(--border-hairline)] hover:text-link hover:shadow-[inset_0_0_0_1.5px_var(--text-link)]',
	link: 'label-mono min-h-11 text-sm tracking-[0.05em] text-link hover:text-ink',
} as const;

/**
 * The page's single CTA: every "Conversemos 30 minutos" opens the contact drawer with an
 * intent, or scrolls to an in-page anchor when `href` is given. The mailto fallback only
 * fires for no-JS visitors, since the click handler below intercepts everything else.
 */
export function CtaButton({ variant = 'primary', intent, href, className, children, onClick, ...rest }: CtaButtonProps) {
	return (
		<a
			href={href ?? CONTACT_EMAIL_HREF}
			onClick={(event) => {
				if (!href) {
					event.preventDefault();
					openContact(intent ?? 'other');
				}
				onClick?.(event);
			}}
			className={cn(base, variants[variant], className)}
			{...rest}
		>
			{children}
			{variant === 'link' && <span aria-hidden="true">&nbsp;→</span>}
		</a>
	);
}
