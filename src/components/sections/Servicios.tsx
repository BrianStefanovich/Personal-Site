import { CtaButton } from '@/components/CtaButton';
import { ExistingSystemDiagram, FractionalDiagram, NewProductDiagram } from '@/components/diagrams/ServiceDiagrams';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';
import { cn } from '@/lib/utils';

const { servicios } = es.home;

type Item = (typeof servicios.items)[number];

const diagrams = [ExistingSystemDiagram, NewProductDiagram, FractionalDiagram] as const;

function WorkList({ item }: { item: Item }) {
	return (
		<>
			<h4 className="font-display font-bold">{servicios.workLabel}</h4>
			<ul className="mt-3 space-y-2">
				{item.work.map((text) => (
					<li key={text} className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:size-2 before:bg-link">
						{text}
					</li>
				))}
			</ul>
		</>
	);
}

function GetBlock({ item }: { item: Item }) {
	return (
		<>
			<h4 className="font-display font-bold">{servicios.getLabel}</h4>
			{item.get.map((text, i) => (
				<p key={text} className={i > 0 ? 'mt-4' : 'mt-3'}>
					{text}
				</p>
			))}
		</>
	);
}

export default function Servicios() {
	return (
		<Section id="servicios">
			<SectionHeading eyebrow={servicios.eyebrow} title={servicios.headline} subhead={servicios.subhead} />
			<p className="reveal measure mt-6 text-base md:text-lg">{servicios.intro}</p>

			<div className="mt-12 md:mt-16">
				{servicios.items.map((item, index) => {
					const Diagram = diagrams[index];
					const mirrored = index % 2 === 1;

					return (
						<article
							key={item.id}
							id={item.id}
							className="grid gap-8 border-t border-line py-12 first:border-t-2 first:pt-10 md:py-16 lg:grid-cols-2 lg:items-start lg:gap-x-16"
						>
							<div className={cn('lg:sticky lg:top-[calc(var(--header-h)+2rem)]', mirrored && 'lg:order-2')}>
								<p className="reveal label-mono text-sm text-link">{servicios.itemLabel} {item.phase}</p>
								<h3 className="reveal mt-3">{item.title}</h3>
								<p className="reveal mt-4 text-lg md:text-xl">{item.lead}</p>
								{item.intro.map((text) => (
									<p key={text} className="reveal measure mt-4 text-base text-muted md:text-lg">
										{text}
									</p>
								))}
								<div className="reveal surface-card mt-8 p-6 md:p-8">
									<Diagram />
								</div>
							</div>

							<div className="reveal text-base md:text-lg">
								<WorkList item={item} />
								<div className="mt-8">
									<GetBlock item={item} />
								</div>
								<div className="mt-6">
									<CtaButton variant="link" intent={item.intent}>
										{item.cta}
									</CtaButton>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</Section>
	);
}
