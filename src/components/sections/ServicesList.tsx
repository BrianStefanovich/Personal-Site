import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

const { services, problems } = es.home;

/** The three services as cards: folio and billing model, the situation it answers, the decision it resolves. Lives on /services. */
export default function ServicesList() {
	return (
		<Section>
			<Breadcrumbs trail={[{ label: es.nav.links[0].label }]} />
			<div className="flex flex-col gap-6">
				<SectionHeading as="h1" title={services.index.headline} />
				<p className="text-body max-w-[65ch] text-muted">{services.index.intro}</p>
			</div>

			<div className="mt-10 grid gap-6 md:mt-[4.5rem] lg:grid-cols-3">
				{services.items.map((service, index) => {
					const situation = problems.situations[index];
					return (
						<a
							key={service.id}
							href={service.path}
							data-track="service_route_open"
							data-track-service={service.id}
							data-track-location="services-index"
							className="group surface-card flex flex-col p-6 transition-colors hover:bg-ink hover:text-page md:p-8 lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:gap-y-0"
						>
							<span className="flex flex-col gap-10 pb-10">
								<span className="label-mono flex items-baseline justify-between gap-x-6 text-sm">
									<span aria-hidden="true" className="text-link transition-colors group-hover:text-page">
										{String(index + 1).padStart(2, '0')}
									</span>
									<span className="text-muted transition-colors group-hover:text-page">{service.model}</span>
								</span>

								<span className="flex flex-col gap-4">
									<span className="label-mono text-sm text-muted transition-colors group-hover:text-page">{situation.tag}</span>
									<h2 className="font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-balance">{service.title}</h2>
									<span className="text-body text-muted transition-colors group-hover:text-page">{service.lead}</span>
								</span>
							</span>

							<span className="flex flex-col gap-2 border-t border-line pb-6 pt-5 transition-colors group-hover:border-page/30">
								<span className="label-mono text-[0.8125rem] text-consequence transition-colors group-hover:text-page">
									{problems.decisionLabel}
								</span>
								<span className="text-base leading-[1.5]">{situation.decision}</span>
							</span>
							<span className="label-mono flex items-center justify-between text-sm tracking-[0.05em] text-link transition-colors group-hover:text-page">
								{services.index.open}
								<ArrowUpRightIcon
									weight="bold"
									aria-hidden="true"
									size={24}
									className="transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
								/>
							</span>
						</a>
					);
				})}
			</div>
		</Section>
	);
}
