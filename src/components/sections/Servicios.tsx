import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { servicios, hero } = es.home;
const ctaLabel = hero.cta;

export default function Servicios() {
	return (
		<Section id="servicios">
			<div className="flex flex-col gap-6">
				<SectionHeading title={servicios.subhead} />
				<p className="text-body max-w-[65ch] text-muted">{servicios.intro}</p>
			</div>

			<div className="mt-10 flex flex-col gap-6 md:mt-[4.5rem]">
				{servicios.items.map((item) => (
					<article key={item.id} id={item.id} className="surface-card grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
						<div className="flex flex-col gap-5 border-b border-line p-6 md:p-12 lg:border-b-0 lg:border-r">
							<p className="label-mono text-sm text-link">{item.model}</p>
							<h3 className="text-headline">{item.title}</h3>
							<p className="text-body">{item.lead}</p>
							<div className="mt-auto flex flex-col gap-2 pt-6">
								<p className="label-mono text-sm text-muted">{servicios.getLabel}</p>
								<p className="text-body text-muted">{item.get}</p>
							</div>
							<div className="mt-2">
								<CtaButton variant="compact" intent={item.intent}>
									{ctaLabel}
								</CtaButton>
							</div>
						</div>

						<div className="flex flex-col gap-5 p-6 md:p-12">
							<p className="label-mono text-sm text-muted">{servicios.workLabel}</p>
							<ul className="flex flex-col gap-4">
								{item.work.map((text) => (
									<li
										key={text}
										className="text-body relative border-b border-line pb-4 pl-6 before:absolute before:left-0 before:top-[0.65em] before:size-2 before:bg-blueprint"
									>
										{text}
									</li>
								))}
							</ul>
							<p className="mt-2 text-base text-muted">
								<span className="font-bold text-consequence">{item.note.lead}</span> {item.note.body}
							</p>
						</div>
					</article>
				))}
			</div>
		</Section>
	);
}
