import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';

const { casos, hero } = es.home;

type Item = (typeof casos.items)[number];

/** A single case. The summary rows are real; the sections below them are placeholder copy. */
export default function CasoDetalle({ item }: { item: Item }) {
	return (
		<>
			<Section>
				<a href="/cases" className="label-mono inline-flex min-h-11 items-center text-sm tracking-[0.05em] text-link hover:text-ink">
					←&nbsp;{casos.backLabel}
				</a>
				<div className="mt-8 flex max-w-[48rem] flex-col gap-5">
					<p className="label-mono text-sm text-muted">{item.tags}</p>
					<h1 className="text-display">{item.name}</h1>
					<p className="text-lead">{item.headline}.</p>
				</div>

				<dl className="mt-12 flex flex-col md:mt-20">
					<Row label={casos.labels.context}>{item.context}</Row>
					{'responsibility' in item && <Row label={casos.labels.responsibility}>{item.responsibility}</Row>}
					<Row label={casos.labels.result} tone="consequence">
						{item.result}
					</Row>
				</dl>
			</Section>

			<Section tone="inverse">
				<div className="grid gap-10 lg:grid-cols-3 lg:gap-x-12">
					{casos.dummy.sections.map((section) => (
						<div key={section.title} className="flex flex-col gap-3 border-t-2 border-ink pt-6">
							<h2 className="text-headline">{section.title}</h2>
							<p className="text-body text-muted">{section.body}</p>
						</div>
					))}
				</div>
				<div className="mt-12 md:mt-16">
					<CtaButton intent="other">{hero.cta}</CtaButton>
				</div>
			</Section>
		</>
	);
}

function Row({ label, tone, children }: { label: string; tone?: 'consequence'; children: string }) {
	return (
		<div className="grid gap-2 border-t border-line py-5 last:border-b md:grid-cols-[11.25rem_minmax(0,1fr)] md:gap-x-6">
			<dt className={`label-mono text-sm ${tone === 'consequence' ? 'text-consequence' : 'text-muted'}`}>{label}</dt>
			<dd className={`text-body max-w-[65ch] ${tone === 'consequence' ? '' : 'text-muted'}`}>{children}</dd>
		</div>
	);
}
