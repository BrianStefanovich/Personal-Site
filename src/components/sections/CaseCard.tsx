import { es } from '@/i18n/es';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

const { cases } = es.home;

type Item = (typeof cases.items)[number];

interface CaseCardProps {
	item: Item;
	/** Position in the list; printed as a two-digit mono folio. */
	index: number;
	/** Where the card sits, reported with the click. */
	location: 'home' | 'index';
	/** The /cases index adds the case context as a short description. */
	detailed?: boolean;
	as?: 'h2' | 'h3';
}

/** One case as a card: folio and stack, name and headline, my role and the result. The whole card is the link and inverts to Carbon on hover. */
export function CaseCard({ item, index, location, detailed = false, as: Heading = 'h3' }: CaseCardProps) {
	return (
		<a
			href={`/cases/${item.slug}`}
			data-track="case_open"
			data-track-case={item.slug}
			data-track-location={location}
			className="group surface-card flex flex-col p-6 transition-colors hover:bg-ink hover:text-page md:row-span-3 md:grid md:grid-rows-subgrid md:gap-y-0 md:p-8"
		>
			<span className="flex flex-col gap-10 pb-10">
				<span className="label-mono flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-sm">
					<span aria-hidden="true" className="text-link transition-colors group-hover:text-page">
						{String(index + 1).padStart(2, '0')}
					</span>
					<span className="text-muted transition-colors group-hover:text-page">{item.tags}</span>
				</span>

				<span className="flex flex-col gap-4">
					<Heading className="text-headline font-display font-bold">{item.name}</Heading>
					<span className="text-lead">{item.headline}</span>
					{detailed && <span className="text-body max-w-[60ch] text-muted transition-colors group-hover:text-page">{item.context}</span>}
				</span>
			</span>

			<span className="flex flex-col gap-2 border-t border-line pb-6 pt-5 text-base leading-[1.5] transition-colors group-hover:border-page/30">
				<span>
					<span className="label-mono mr-2 text-[0.8125rem] text-muted transition-colors group-hover:text-page">{cases.labels.role}</span>{' '}
					{item.role}
				</span>
				<span>
					<span className="label-mono mr-2 text-[0.8125rem] text-consequence transition-colors group-hover:text-page">
						{cases.labels.result}
					</span>{' '}
					{item.outcome}
				</span>
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
		</a>
	);
}
