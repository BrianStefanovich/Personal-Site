import { CtaButton } from '@/components/CtaButton';
import { Reveal } from '@/components/ui/Reveal';
import { es } from '@/i18n/es';
import { BavastroDiagram } from '@/components/casos/diagrams/BavastroDiagram';
import { KeplerDiagram } from '@/components/casos/diagrams/KeplerDiagram';
import { RollkallDiagram } from '@/components/casos/diagrams/RollkallDiagram';

const { casos } = es.home;

const DIAGRAMS = {
	'kepler-coach': KeplerDiagram,
	rollkall: RollkallDiagram,
	bavastro: BavastroDiagram,
} as const;

interface Section {
	heading: string;
	paragraphs: readonly string[];
	list?: readonly string[];
	closing: string;
}

function CaseSection({ section }: { section: Section }) {
	return (
		<Reveal className="border-t border-fog py-10">
			<p className="eyebrow">{section.heading}</p>
			<div className="mt-4 max-w-2xl space-y-4 text-sm leading-relaxed text-graphite md:text-base">
				{section.paragraphs.map((p) => (
					<p key={p}>{p}</p>
				))}
			</div>
			{section.list && (
				<ul className="mt-4 max-w-2xl space-y-2">
					{section.list.map((entry) => (
						<li key={entry} className="flex gap-3 text-sm leading-relaxed text-graphite md:text-base">
							<span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blueprint" />
							{entry}
						</li>
					))}
				</ul>
			)}
			<p className="mt-5 max-w-2xl font-display text-lg font-bold text-carbon md:text-xl">{section.closing}</p>
		</Reveal>
	);
}

export function CaseDetail({ slug }: { slug: keyof typeof DIAGRAMS }) {
	const item = casos.items.find((entry) => entry.slug === slug);
	if (!item) return null;

	const Diagram = DIAGRAMS[slug];
	const { detail } = item;

	return (
		<article className="border-b border-fog bg-porcelain py-16 md:py-24">
			<div className="container">
				<a href="/#casos" className="eyebrow inline-flex items-center gap-2 text-graphite transition-colors hover:text-blueprint">
					← {casos.backLabel}
				</a>

				<Reveal delayMs={80} className="mt-8 max-w-2xl">
					<p className="eyebrow">{detail.tagline}</p>
					<h1 className="mt-4 font-display text-3xl font-bold text-carbon md:text-5xl">{item.name}</h1>
					<p className="mt-4 font-display text-xl font-bold leading-snug text-carbon md:text-2xl">{item.card.headline}</p>
					<span className="eyebrow mt-6 inline-block w-fit border border-fog px-2.5 py-1">{item.card.tag}</span>
				</Reveal>

				<Reveal delayMs={140} className="tech-frame mt-12 flex items-center justify-center rounded-md bg-porcelain p-6 md:p-10">
					<div className="aspect-[2/1] w-full max-w-2xl">
						<Diagram />
					</div>
				</Reveal>

				<Reveal delayMs={80} className="mt-10 max-w-2xl space-y-4 text-sm leading-relaxed text-graphite md:text-base">
					{detail.intro.map((p) => (
						<p key={p}>{p}</p>
					))}
				</Reveal>

				<CaseSection section={detail.problema} />
				<CaseSection section={detail.decision} />

				<Reveal className="border-t border-fog py-10">
					<p className="eyebrow">{detail.rol.heading}</p>
					<p className="mt-4 font-display text-base font-bold text-carbon md:text-lg">{detail.rol.label}</p>
					<ul className="mt-4 grid max-w-2xl gap-x-8 gap-y-2 sm:grid-cols-2">
						{detail.rol.items.map((role) => (
							<li key={role} className="flex gap-3 text-sm leading-relaxed text-graphite md:text-base">
								<span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
								{role}
							</li>
						))}
					</ul>
				</Reveal>

				<CaseSection section={detail.resultado} />

				<Reveal className="mt-4 flex flex-wrap items-center gap-6 border-t border-fog pt-10">
					<CtaButton intent="other">{casos.cta}</CtaButton>
					<a href="/#casos" className="text-sm font-semibold text-blueprint underline underline-offset-4">
						Volver a casos
					</a>
				</Reveal>
			</div>
		</article>
	);
}
