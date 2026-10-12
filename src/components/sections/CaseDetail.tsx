import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CaseRow } from '@/components/sections/CaseRow';
import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';

const { cases, services } = es.home;

type Item = (typeof cases.items)[number];

/** A published case: only what can be stated and defended, then the service it belongs to. */
export default function CaseDetail({ item }: { item: Item }) {
	const service = services.items.find((entry) => entry.id === item.service);

	return (
		<>
			<Section>
				<Breadcrumbs trail={[{ label: es.nav.links[1].label, href: '/cases' }, { label: item.name }]} className="mb-0 md:mb-0" />
				<div className="mt-8 flex max-w-[48rem] flex-col gap-5">
					<p className="label-mono text-sm text-muted">{item.tags}</p>
					<h1 className="text-display">{item.name}</h1>
					<p className="text-lead">{item.headline}.</p>
				</div>

				<dl className="mt-12 flex flex-col md:mt-20">
					<CaseRow label={cases.labels.role}>{item.role}</CaseRow>
					<CaseRow label={cases.labels.context}>{item.context}</CaseRow>
					<CaseRow label={cases.labels.responsibility}>{item.responsibility}</CaseRow>
					<CaseRow label={cases.labels.result} tone="consequence">
						{item.result}
					</CaseRow>
				</dl>
				<p className="text-body mt-8 max-w-[65ch] text-muted">{cases.scopeNote}</p>
			</Section>

			{service && (
				<Section contentClassName="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-x-16">
					<div className="flex flex-col gap-4">
						<p className="label-mono text-sm text-muted">{cases.relatedLabel}</p>
						<h2 className="text-headline">{service.title}</h2>
						<p className="text-body max-w-[65ch] text-muted">{service.lead}</p>
						<a
							href={service.path}
							data-track="service_route_open"
							data-track-service={service.id}
							data-track-location="case"
							className="label-mono inline-flex min-h-11 items-center text-sm tracking-[0.05em] text-link hover:text-ink"
						>
							{service.navLabel}&nbsp;→
						</a>
					</div>
					<div>
						<CtaButton intent={service.intent} location={`case-${item.slug}`}>
							{service.cta}
						</CtaButton>
					</div>
				</Section>
			)}
		</>
	);
}
