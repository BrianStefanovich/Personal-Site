import { CtaButton } from '@/components/CtaButton';
import { ExistingSystemMap, ResponsibilityMap, ValidationMap } from '@/components/diagrams/Diagrams';
import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';
import type { ReactNode } from 'react';

const { servicios, hero, casos } = es.home;

type Service = (typeof servicios.items)[number];

const diagramOf: Record<Service['id'], ReactNode> = {
	'sistemas-existentes': <ExistingSystemMap />,
	'nuevos-negocios': <ValidationMap />,
	'arquitecto-fraccional': <ResponsibilityMap />,
};

function Bullets({ items }: { items: readonly string[] }) {
	return (
		<ul className="flex flex-col">
			{items.map((text) => (
				<li
					key={text}
					className="text-body relative border-b border-line py-4 pl-6 first:pt-0 last:border-b-0 last:pb-0 before:absolute before:left-0 before:top-[calc(1rem+0.65em)] before:size-2 before:bg-blueprint first:before:top-[0.65em]"
				>
					{text}
				</li>
			))}
		</ul>
	);
}

/** A service page: who it is for, the one diagram that explains it, what is delivered, what is not, and one contextual next step. */
export default function ServicioDetalle({ service }: { service: Service }) {
	const relatedCase = casos.items.find((item) => item.slug === service.caseSlug);

	return (
		<>
			<div hidden data-track-view="service_page_view" data-track-service={service.id} />

			<Section contentClassName="flex flex-col gap-12 lg:gap-16">
				<a href="/#servicios" className="label-mono inline-flex min-h-11 items-center self-start text-sm tracking-[0.05em] text-link hover:text-ink">
					←&nbsp;{es.nav.links[0].label}
				</a>

				<div className="grid items-start gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-x-16">
					<div className="flex flex-col gap-6">
						<p className="label-mono text-sm text-link">{service.model}</p>
						<h1 className="text-display max-w-[22ch]">{service.title}</h1>
						<p className="text-lead">{service.lead}</p>
						<p className="text-body max-w-[60ch] text-muted">{service.intro[0]}</p>
						<div className="mt-2 flex flex-col gap-4">
							<div>
								<CtaButton intent={service.intent} location={`service-${service.id}`}>
									{service.cta}
								</CtaButton>
							</div>
							<p className="max-w-[34rem] text-sm leading-[1.5] text-muted">{hero.microcopy}</p>
						</div>
					</div>

					<div className="surface-card-lg p-6 md:p-10">{diagramOf[service.id]}</div>
				</div>
			</Section>

			<Section contentClassName="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-x-16">
				<div className="flex flex-col gap-6">
					<h2 className="label-mono text-sm font-medium text-muted">{servicios.workLabel}</h2>
					<Bullets items={service.work} />
				</div>

				<div className="flex flex-col gap-10 lg:border-l lg:border-line lg:pl-12">
					<div className="flex flex-col gap-3">
						<h2 className="label-mono text-sm font-medium text-muted">{servicios.getLabel}</h2>
						<p className="text-body">{service.get}</p>
						<p className="text-base text-muted">
							<span className="font-bold text-consequence">{service.note.lead}</span> {service.note.body}
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h2 className="label-mono text-sm font-medium text-muted">{servicios.notIncludedLabel}</h2>
						<ul className="flex flex-col gap-3">
							{service.notIncluded.map((text) => (
								<li key={text} className="text-base text-muted">
									{text}
								</li>
							))}
						</ul>
					</div>
				</div>
			</Section>

			{relatedCase && (
				<Section contentClassName="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end lg:gap-x-16">
					<div className="flex flex-col gap-3">
						<p className="label-mono text-sm text-muted">{servicios.caseLabel}</p>
						<h2 className="text-headline">{relatedCase.name}</h2>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-body max-w-[60ch]">{relatedCase.headline}.</p>
						<p className="text-base text-muted">{service.caseNote}</p>
						<a
							href={`/cases/${relatedCase.slug}`}
							data-track="case_open"
							data-track-case={relatedCase.slug}
							data-track-location={`service-${service.id}`}
							className="label-mono inline-flex min-h-11 items-center self-start text-sm tracking-[0.05em] text-link hover:text-ink"
						>
							{casos.viewCase}&nbsp;→
						</a>
					</div>
				</Section>
			)}
		</>
	);
}

/** Closing band for a service page: the same contextual CTA, plus the other two routes. */
export function ServicioCierre({ service }: { service: Service }) {
	const others = servicios.items.filter((item) => item.id !== service.id);

	return (
		<Section tone="inverse" contentClassName="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-x-24">
			<div className="flex flex-col gap-6">
				<h2 className="text-display">{es.home.contacto.headline}</h2>
				<div>
					<CtaButton intent={service.intent} location={`service-${service.id}-end`}>
						{service.cta}
					</CtaButton>
				</div>
			</div>
			<nav aria-label={servicios.relatedLabel} className="flex flex-col gap-2">
				<p className="label-mono text-sm text-muted">{servicios.relatedLabel}</p>
				{others.map((item) => (
					<a
						key={item.id}
						href={item.path}
						data-track="service_route_open"
						data-track-service={item.id}
						data-track-location={`service-${service.id}`}
						className="inline-flex min-h-11 items-center font-display text-lg font-bold text-link hover:text-ink"
					>
						{item.navLabel}&nbsp;→
					</a>
				))}
			</nav>
		</Section>
	);
}
