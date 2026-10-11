import { openContact, CAL_URL, type ContactIntent } from '@/lib/contact';
import { cn } from '@/lib/utils';
import type { AnchorHTMLAttributes } from 'react';

interface CtaButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
	/** primary: hero and closing CTA. compact: header and service cards. outline: secondary action. link: mono text action. */
	variant?: 'primary' | 'compact' | 'outline' | 'link';
	intent?: ContactIntent;
	href?: string;
	/** Where the button sits on the page; reported with the click so conversions can be traced to a section. */
	location?: string;
}

const base = 'inline-flex items-center justify-center whitespace-nowrap transition';

const variants = {
	primary:
		'font-display font-bold min-h-12 whitespace-normal rounded-card bg-blueprint px-6 py-3 text-center text-lg text-porcelain hover:brightness-110 active:brightness-95',
	compact:
		'font-display font-bold min-h-11 rounded-card bg-blueprint px-[1.125rem] py-2 text-base text-porcelain hover:brightness-110 active:brightness-95',
	outline:
		'font-display font-bold min-h-12 rounded-card px-6 py-3 text-lg text-ink shadow-[inset_0_0_0_1.5px_var(--border-hairline)] hover:text-link hover:shadow-[inset_0_0_0_1.5px_var(--text-link)]',
	link: 'label-mono min-h-11 text-sm tracking-[0.05em] text-link hover:text-ink',
} as const;

/**
 * The page's single booking CTA: it opens the contact drawer with an intent, or follows an in-page or
 * internal link when `href` is given. Without JavaScript it goes straight to the public booking page.
 */
export function CtaButton({ variant = 'primary', intent, href, location, className, children, onClick, ...rest }: CtaButtonProps) {
	const opensContact = !href;
	return (
		<a
			href={href ?? CAL_URL}
			onClick={(event) => {
				if (opensContact) {
					event.preventDefault();
					openContact(intent ?? 'other');
				}
				onClick?.(event);
			}}
			{...(opensContact && {
				'aria-haspopup': 'dialog' as const,
				'data-track': 'cta_click',
				'data-track-location': location ?? 'page',
				'data-track-intent': intent ?? 'other',
			})}
			className={cn(base, variants[variant], className)}
			{...rest}
		>
			{children}
			{variant === 'link' && <span aria-hidden="true">&nbsp;→</span>}
		</a>
	);
}
