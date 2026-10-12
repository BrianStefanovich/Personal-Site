import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';
import { ArrowUpRightIcon, CompassIcon, FlaskIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';

const { problema, servicios } = es.home;

const icons = [MagnifyingGlassIcon, FlaskIcon, CompassIcon];

/**
 * Three situations a visitor can recognise themselves in, styled like the cards on /servicios: the whole card is the link. Each card answers, in order: what is happening to me,
 * how Brian helps, what I get. On desktop the cards share six subgrid rows so every layer lines up across the three.
 */
export default function Problemas() {
	return (
		<Section id="servicios">
			<div className="flex flex-col gap-6">
				<SectionHeading title={problema.headline} />
				<p className="text-body max-w-[65ch] text-muted">{problema.subhead}</p>
			</div>

			<div className="mt-10 grid gap-6 md:mt-[4.5rem] lg:grid-cols-3 lg:gap-y-0">
				{problema.situations.map((situation, i) => {
					const service = servicios.items[i];
					const Icon = icons[i];
					return (
						<a
							key={situation.id}
							id={situation.id}
							href={service.path}
							data-track="service_route_open"
							data-track-service={service.id}
							data-track-location="home"
							className="group surface-card flex flex-col p-6 transition-colors target:outline-2 target:outline-offset-4 target:outline-blueprint hover:bg-ink hover:text-page md:p-8 lg:row-span-6 lg:grid lg:grid-rows-subgrid lg:gap-y-0 lg:p-7 xl:p-8"
						>
							<span className="flex flex-col gap-6 pb-6">
								<Icon weight="regular" size={36} aria-hidden="true" />
								<h3 className="font-display text-[1.5rem] font-bold leading-[1.15] tracking-[-0.02em] text-balance lg:text-[clamp(1.25rem,0.54rem+1.2vw,1.5rem)]">
									{situation.problem.map((sentence) => (
										<span key={sentence} className="block">
											{sentence}
										</span>
									))}
								</h3>
							</span>

							<span className="pb-6 text-base leading-[1.6] text-muted transition-colors group-hover:text-page">{situation.situation}</span>

							<span className="border-t border-line pb-3 pt-6 font-display text-xl font-bold leading-[1.25] tracking-[-0.015em] text-balance transition-colors group-hover:border-page/30">
								{situation.offer}
							</span>

							<span className="pb-6 text-[0.9375rem] leading-[1.6] text-muted transition-colors group-hover:text-page">{situation.intervention}</span>

							<span className="flex flex-col gap-2 border-t border-line pb-6 pt-5 transition-colors group-hover:border-page/30">
								<span className="label-mono text-sm text-consequence transition-colors group-hover:text-page">{problema.outcomeLabel}</span>
								<span className="text-[0.9375rem] font-semibold leading-[1.55]">{situation.outcome}</span>
							</span>

							<span className="label-mono flex items-center justify-between gap-4 text-sm leading-snug tracking-[0.05em] text-link transition-colors group-hover:text-page">
								{situation.cta}
								<ArrowUpRightIcon
									weight="bold"
									aria-hidden="true"
									size={24}
									className="shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
								/>
							</span>
						</a>
					);
				})}
			</div>
		</Section>
	);
}
