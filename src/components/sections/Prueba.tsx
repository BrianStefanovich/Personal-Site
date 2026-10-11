import { CtaButton } from '@/components/CtaButton';
import { es } from '@/i18n/es';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

const { prueba, casos } = es.home;

/** Fits the header cell plus however many cases are published. */
const columns = {
	1: 'md:grid-cols-[16rem_minmax(0,1fr)]',
	2: 'md:grid-cols-[16rem_repeat(2,minmax(0,1fr))]',
	3: 'md:grid-cols-[16rem_repeat(3,minmax(0,1fr))]',
} as const;

/** Proof right under the hero: the published cases, each with my role and a result I can stand behind. Each cell inverts to Carbon on hover. */
export default function Prueba() {
	const count = Math.min(casos.items.length, 3) as keyof typeof columns;

	return (
		<section aria-labelledby="prueba-titulo" className={`grid border-b-2 border-line bg-page text-ink ${columns[count]}`}>
			<div className="frame-pad flex flex-col justify-between gap-6 border-b border-line py-8 md:border-b-0 md:border-r md:py-10">
				<h2 id="prueba-titulo" className="font-display text-2xl font-bold leading-tight tracking-[-0.02em]">
					{prueba.headline}
				</h2>
				<CtaButton variant="link" href="/cases" className="justify-start">
					{prueba.cta}
				</CtaButton>
			</div>

			{casos.items.map((item) => (
				<a
					key={item.slug}
					href={`/cases/${item.slug}`}
					data-track="case_open"
					data-track-case={item.slug}
					data-track-location="home"
					className="group flex min-h-48 flex-col justify-between gap-8 border-b border-line px-5 py-8 transition-colors last:border-b-0 hover:bg-ink hover:text-page md:border-b-0 md:border-r md:p-10 md:last:border-r-0"
				>
					<span className="flex flex-col gap-5">
						<span className="flex flex-col gap-2">
							<span className="text-headline font-display font-bold">{item.name}</span>
							<span className="text-base text-muted transition-colors group-hover:text-page">{item.headline}</span>
						</span>
						<span className="flex flex-col gap-1 border-t border-line pt-4 text-sm leading-[1.5] transition-colors group-hover:border-page/30">
							<span>
								<span className="label-mono mr-2 text-[0.8125rem] text-muted transition-colors group-hover:text-page">{prueba.roleLabel}</span>
								{item.role}
							</span>
							<span>
								<span className="label-mono mr-2 text-[0.8125rem] text-consequence transition-colors group-hover:text-page">
									{casos.labels.result}
								</span>
								{item.outcome}
							</span>
						</span>
					</span>
					<ArrowUpRightIcon
						weight="bold"
						aria-hidden="true"
						size={28}
						className="self-end text-link transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-page"
					/>
				</a>
			))}
		</section>
	);
}
