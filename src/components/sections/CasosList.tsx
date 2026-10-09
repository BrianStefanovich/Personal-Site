import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { casos } = es.home;

type Item = (typeof casos.items)[number];

function Row({ label, tone, children }: { label: string; tone?: 'consequence'; children: string }) {
	return (
		<div className="grid gap-2 border-t border-line py-5 last:border-b md:grid-cols-[11.25rem_minmax(0,1fr)] md:gap-x-6">
			<dt className={`label-mono text-sm ${tone === 'consequence' ? 'text-consequence' : 'text-muted'}`}>{label}</dt>
			<dd className={`text-body ${tone === 'consequence' ? '' : 'text-muted'}`}>{children}</dd>
		</div>
	);
}

function Featured({ item }: { item: Item }) {
	return (
		<article className="surface-card-lg grid gap-8 p-6 md:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-16 lg:p-14">
			<div className="flex flex-col gap-5">
				<p className="label-mono text-sm text-muted">{item.tags}</p>
				<h2 className="text-display">{item.name}</h2>
				<p className="text-lead">{item.headline}.</p>
				<CtaButton variant="link" href={`/cases/${item.slug}`} className="justify-start">
					{casos.viewCase}
				</CtaButton>
			</div>
			<dl className="flex flex-col">
				<Row label={casos.labels.context}>{item.context}</Row>
				{'responsibility' in item && <Row label={casos.labels.responsibility}>{item.responsibility}</Row>}
				<Row label={casos.labels.result} tone="consequence">
					{item.result}
				</Row>
			</dl>
		</article>
	);
}

function Compact({ item }: { item: Item }) {
	return (
		<article className="surface-card flex flex-col gap-4 p-6 md:p-12">
			<p className="label-mono text-sm text-muted">{item.tags}</p>
			<h2 className="text-headline">{item.name}</h2>
			<p className="text-body">{item.headline}.</p>
			<p className="text-body text-muted">
				{item.context}
				{'responsibility' in item && ` ${item.responsibility}`}
			</p>
			<p className="mt-auto border-t border-line pt-5 text-base text-muted">
				<span className="font-bold text-consequence">{casos.labels.result}:</span> {item.result}
			</p>
			<CtaButton variant="link" href={`/cases/${item.slug}`} className="justify-start">
				{casos.viewCase}
			</CtaButton>
		</article>
	);
}

/** Index of every case: the one featured case, then the rest. Lives on /cases. */
export default function CasosList() {
	const [featured, ...others] = casos.items;

	return (
		<Section>
			<div className="flex flex-col gap-6">
				<SectionHeading as="h1" title={casos.headline} />
				<p className="text-body max-w-[65ch] text-muted">{casos.intro}</p>
			</div>

			<div className="mt-10 flex flex-col gap-6 md:mt-[4.5rem]">
				<Featured item={featured} />
				<div className="grid gap-6 md:grid-cols-2">
					{others.map((item) => (
						<Compact key={item.slug} item={item} />
					))}
				</div>
			</div>
		</Section>
	);
}
