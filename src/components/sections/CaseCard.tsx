import { LogoPlate } from '@/components/sections/LogoPlate';
import { CaseStatus } from '@/components/sections/CaseStatus';
import type { CaseItem } from '@/i18n/cases';
import { es } from '@/i18n/es';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

const { cases } = es.home;

interface CaseCardProps {
	item: CaseItem;
	/** Where the card sits, reported with the click. */
	location: 'home' | 'index';
	as?: 'h2' | 'h3';
}

/** A featured case: the company's logo, what changed, my part in it. The whole card is the link and inverts to Carbon on hover. */
export function CaseCard({ item, location, as: Heading = 'h3' }: CaseCardProps) {
	return (
		<a
			href={`/cases/${item.slug}`}
			data-track="case_open"
			data-track-case={item.slug}
			data-track-location={location}
			className="group surface-card flex w-full flex-col gap-7 p-3 transition-colors hover:bg-ink hover:text-page md:p-4"
		>
			<LogoPlate name={item.name} logo={item.logo} size="md" decorative />

			<span className="flex flex-1 flex-col gap-6 px-3 pb-3 md:px-4 md:pb-4">
				<span className="flex flex-col gap-2">
					<span className="font-display text-[1.0625rem] font-bold leading-tight">
						{item.name}
						{item.scope && <span className="font-normal text-muted transition-colors group-hover:text-page"> · {item.scope}</span>}
					</span>
					<CaseStatus item={item} />
				</span>

				<span className="flex flex-col gap-3">
					<Heading className="text-headline text-balance font-display font-bold">{item.title}</Heading>
					<span className="text-body text-muted transition-colors group-hover:text-page">{item.card}</span>
				</span>

				<span className="mt-auto flex flex-col gap-4">
					<span className="flex flex-col gap-1 border-t border-line pt-4 text-base leading-[1.5] transition-colors group-hover:border-page/30">
						<span className="label-mono text-[0.8125rem] text-muted transition-colors group-hover:text-page">{cases.labels.role}</span>
						<span>{item.role}</span>
					</span>
					<span className="label-mono flex items-center justify-between text-sm tracking-[0.05em] text-link transition-colors group-hover:text-page">
						{cases.viewCase}
						<ArrowUpRightIcon
							weight="bold"
							aria-hidden="true"
							size={24}
							className="transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
						/>
					</span>
				</span>
			</span>
		</a>
	);
}
