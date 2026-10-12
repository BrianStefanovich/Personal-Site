import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CaseStatus } from '@/components/sections/CaseStatus';
import { LogoPlate } from '@/components/sections/LogoPlate';
import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import type { CaseItem } from '@/i18n/cases';
import { es } from '@/i18n/es';
import type { ReactNode } from 'react';

const { cases, services } = es.home;

function Fact({ label, children }: { label: string; children: ReactNode }) {
	return (
		<div className="flex flex-col gap-1.5 border-t border-line py-4 last:border-b">
			<dt className="label-mono text-sm text-muted">{label}</dt>
			<dd className="text-base leading-[1.5]">{children}</dd>
		</div>
	);
}

/** A published case: the company, the relationship and my part in it, the story, the idea to keep and the service it belongs to. */
export default function CaseDetail({ item }: { item: CaseItem }) {
	const service = services.items.find((entry) => entry.id === item.service);
	const [lead, ...rest] = item.story;

	return (
		<>
			<Section contentClassName="flex flex-col gap-10 lg:gap-14">
				<Breadcrumbs trail={[{ label: es.nav.links[1].label, href: '/cases' }, { label: item.name }]} className="mb-0 md:mb-0" />
				<div className="grid items-end gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-x-16">
					<div className="flex flex-col gap-6">
						<CaseStatus item={item} />
						<h1 className="text-display text-balance max-w-[22ch]">{item.title}</h1>
						<p className="text-lead max-w-[48ch] text-muted">{item.card}</p>
					</div>
					<LogoPlate name={item.name} logo={item.logo} size="lg" />
				</div>
			</Section>

			<Section contentClassName="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-16">
				<dl className="flex flex-col self-start">
					<Fact label={cases.labels.company}>
						<span className="font-bold">{item.name}</span>
						{item.scope && <span className="text-muted"> · {item.scope}</span>}
					</Fact>
					{(item.state || item.detail) && (
						<Fact label={cases.labels.relation}>
							<span className="flex flex-wrap items-center gap-x-4 gap-y-2">
								<span>
									{item.state}
									{item.state && item.detail && <span className="text-muted"> · </span>}
									{item.detail && <span className="text-muted">{item.detail}</span>}
								</span>
								{item.via && <LogoPlate name={item.via.name} logo={item.via.logo} size="xs" />}
							</span>
						</Fact>
					)}
					<Fact label={cases.labels.role}>{item.role}</Fact>
					<Fact label={cases.labels.service}>{item.serviceLabel}</Fact>
				</dl>

				<div className="flex flex-col gap-6">
					<p className="text-lead max-w-[42rem]">{lead}</p>
					{rest.map((paragraph) => (
						<p key={paragraph} className="text-body max-w-[42rem] text-muted">
							{paragraph}
						</p>
					))}
					<p className="mt-2 max-w-[42rem] text-base text-muted">{cases.scopeNote}</p>
				</div>
			</Section>

			<Section tone="inverse">
				<p className="text-hero max-w-[26ch] text-balance font-display font-bold">{item.takeaway}</p>
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
							{item.cta}
						</CtaButton>
					</div>
				</Section>
			)}
		</>
	);
}
