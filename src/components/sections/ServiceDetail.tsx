import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

const { services, hero, cases } = es.home;

type Service = (typeof services.items)[number];

/** Decoration for the hero's unused right side, drawn entirely inside the content column: concentric arcs and a stacked pair of layers in the top-right corner, in Blueprint hairlines. */
function HeroDecor() {
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			viewBox="0 0 520 520"
			preserveAspectRatio="xMaxYMid meet"
			fill="none"
			className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[44%] text-link lg:block"
		>
			<g stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
				<circle cx="260" cy="260" r="250" opacity="0.08" />
				<circle cx="260" cy="260" r="190" opacity="0.12" />
				<circle cx="260" cy="260" r="130" opacity="0.18" />
				<circle cx="260" cy="260" r="70" opacity="0.26" />
				<rect x="400" y="20" width="100" height="100" rx="8" opacity="0.22" />
			</g>
			<path d="M260 190 A70 70 0 0 1 330 260 L260 260 Z" fill="currentColor" opacity="0.14" />
			<rect x="370" y="50" width="100" height="100" rx="8" fill="currentColor" opacity="0.08" />
			<rect x="370" y="50" width="100" height="100" rx="8" stroke="currentColor" opacity="0.4" vectorEffect="non-scaling-stroke" />
		</svg>
	);
}

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
export default function ServiceDetail({ service }: { service: Service }) {
	const relatedCase = cases.items.find((item) => item.slug === service.caseSlug);

	return (
		<>
			<div hidden data-track-view="service_page_view" data-track-service={service.id} />

			<Section className="surface-service-hero" contentClassName="relative flex flex-col gap-12 lg:gap-16">
				<HeroDecor />
				<Breadcrumbs className="relative mb-0 md:mb-0" trail={[{ label: es.nav.links[0].label, href: '/services' }, { label: service.navLabel }]} />

				<div className="relative">
					<div className="flex max-w-[44rem] flex-col gap-6">
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
				</div>
			</Section>

			<Section contentClassName="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-x-16">
				<div className="flex flex-col gap-6">
					<h2 className="label-mono text-sm font-medium text-muted">{services.workLabel}</h2>
					<Bullets items={service.work} />
				</div>

				<div className="flex flex-col gap-10 lg:border-l lg:border-line lg:pl-12">
					<div className="flex flex-col gap-3">
						<h2 className="label-mono text-sm font-medium text-muted">{services.getLabel}</h2>
						<p className="text-body">{service.get}</p>
						<p className="text-base text-muted">
							<span className="font-bold text-consequence">{service.note.lead}</span> {service.note.body}
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h2 className="label-mono text-sm font-medium text-muted">{services.notIncludedLabel}</h2>
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
				<Section tone="inverse" className="py-6! md:py-8!">
					<a
						href={`/cases/${relatedCase.slug}`}
						data-track="case_open"
						data-track-case={relatedCase.slug}
						data-track-location={`service-${service.id}`}
						className="group grid items-center gap-x-10 gap-y-3 lg:grid-cols-[minmax(0,1fr)_auto]"
					>
						<span className="flex flex-col gap-1.5">
							<span className="label-mono text-sm text-muted">{services.caseLabel}</span>
							<span className="font-display text-xl font-bold leading-snug text-balance">{relatedCase.title}</span>
							<span className="text-base text-muted">{service.caseNote}</span>
						</span>
						<span className="label-mono inline-flex min-h-11 items-center gap-2 text-sm tracking-[0.05em] text-link group-hover:text-ink">
							{cases.viewCase}
							<ArrowUpRightIcon
								weight="bold"
								aria-hidden="true"
								size={20}
								className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</span>
					</a>
				</Section>
			)}
		</>
	);
}

/** Closing band for a service page: the same contextual CTA, plus the other two routes. */
export function ServiceClosing({ service }: { service: Service }) {
	const others = services.items.filter((item) => item.id !== service.id);

	return (
		<Section tone="inverse" contentClassName="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-x-16">
			<div className="flex flex-col gap-6">
				<h2 className="text-display">{es.home.contactSection.headline}</h2>
				<div>
					<CtaButton intent={service.intent} location={`service-${service.id}-end`}>
						{service.cta}
					</CtaButton>
				</div>
			</div>
			<nav aria-label={services.relatedLabel} className="flex flex-col gap-2">
				<p className="label-mono text-sm text-muted">{services.relatedLabel}</p>
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
