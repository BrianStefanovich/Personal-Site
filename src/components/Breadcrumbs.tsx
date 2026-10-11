import { es } from '@/i18n/es';
import { cn } from '@/lib/utils';
import { CaretRightIcon } from '@phosphor-icons/react';

export interface Crumb {
	label: string;
	href?: string;
}

const { nav } = es;

/** Trail from Inicio to the current page. The last crumb is the page itself and is not a link. */
export function Breadcrumbs({ trail, className }: { trail: readonly Crumb[]; className?: string }) {
	const crumbs: readonly Crumb[] = [{ label: nav.homeCrumb, href: '/' }, ...trail];

	return (
		<nav aria-label={nav.breadcrumbLabel} className={cn('mb-8 md:mb-10', className)}>
			<ol className="label-mono flex flex-wrap items-center gap-x-2 text-sm tracking-[0.05em]">
				{crumbs.map((crumb, index) => {
					const last = index === crumbs.length - 1;
					return (
						<li key={crumb.label} className="flex items-center gap-x-2">
							{last || !crumb.href ? (
								<span aria-current={last ? 'page' : undefined} className="py-2 text-ink">
									{crumb.label}
								</span>
							) : (
								<a
									href={crumb.href}
									className="inline-flex min-h-11 items-center text-link underline-offset-4 hover:text-ink hover:underline"
								>
									{crumb.label}
								</a>
							)}
							{!last && <CaretRightIcon aria-hidden="true" size={12} weight="bold" className="shrink-0 text-muted" />}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
