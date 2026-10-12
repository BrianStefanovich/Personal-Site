import { CaseStatus } from '@/components/sections/CaseStatus';
import { LogoPlate } from '@/components/sections/LogoPlate';
import type { CaseItem } from '@/i18n/cases';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

/** One cell of the compact grid of further experience: logo, company, what the work was, and the way in. Hairlines, no card. */
export function CaseGridCell({ item }: { item: CaseItem }) {
	return (
		<li className="border-b border-r border-line">
			<a
				href={`/cases/${item.slug}`}
				data-track="case_open"
				data-track-case={item.slug}
				data-track-location="index-more"
				className="group flex h-full flex-col gap-4 p-5 transition-colors hover:bg-card md:p-6"
			>
				<span className="flex items-start justify-between gap-4">
					<LogoPlate name={item.name} logo={item.logo} size="sm" decorative className="w-36" />
					<ArrowUpRightIcon
						weight="bold"
						aria-hidden="true"
						size={22}
						className="shrink-0 text-link transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
					/>
				</span>
				<span className="flex flex-col gap-1">
					<span className="font-display font-bold leading-tight">
						{item.name}
						{item.scope && <span className="font-normal text-muted"> · {item.scope}</span>}
					</span>
					<CaseStatus item={item} />
				</span>
				<span className="font-display text-lg font-bold leading-snug text-balance">{item.title}</span>
			</a>
		</li>
	);
}
