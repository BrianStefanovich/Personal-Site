import { CONTACT_EMAIL_HREF, openContact, type ContactIntent } from '@/lib/contact';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import type { AnchorHTMLAttributes } from 'react';

interface CtaButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
	/** primary: hero and closing CTA. compact: header. outline: secondary action. link: contextual CTA inside a service. */
	variant?: 'primary' | 'compact' | 'outline' | 'link';
	intent?: ContactIntent;
	href?: string;
}

const base = 'group inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-bold transition';

const variants = {
	primary: 'rounded-card bg-blueprint px-8 py-3.5 text-base text-porcelain hover:brightness-110 active:brightness-95 sm:text-lg',
	compact: 'min-h-11 rounded-card bg-blueprint px-5 py-2 text-sm text-porcelain hover:brightness-110 active:brightness-95',
	outline: 'rounded-card border-2 border-strong px-8 py-3 text-base text-ink hover:border-link hover:text-link sm:text-lg',
	link: 'min-h-11 text-base text-link underline decoration-current/30 underline-offset-8 hover:decoration-current',
} as const;

/**
 * The page's single CTA: every "Conversemos 30 minutos" opens the contact drawer with an
 * intent, or scrolls to an in-page anchor when `href` is given. The mailto fallback only
 * fires for no-JS visitors, since the click handler below intercepts everything else.
 */
export function CtaButton({ variant = 'primary', intent, href, className, children, onClick, ...rest }: CtaButtonProps) {
	const showArrow = variant !== 'compact';

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
			<span>{children}</span>
			{showArrow && (
				<ArrowRight aria-hidden="true" size={20} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
			)}
		</a>
	);
}
