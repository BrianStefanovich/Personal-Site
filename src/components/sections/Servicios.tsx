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

			<div className="mt-10 flex flex-col gap-10 md:mt-[4.5rem] md:gap-16">
				{servicios.items.map((item, index) => (
					<article key={item.id} id={item.id} className="surface-card">
						<header className="grid gap-5 border-b-2 border-line p-6 md:p-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-x-12 lg:pb-10">
							<div className="flex flex-col gap-4">
								<p className="label-mono flex items-center gap-3 text-sm text-link">
									<span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
									<span aria-hidden="true" className="h-px w-8 bg-current" />
									<span>{item.model}</span>
								</p>
								<h3 className="text-headline max-w-[28ch]">{item.title}</h3>
							</div>
							<p className="text-lead text-muted lg:self-end">{item.lead}</p>
						</header>

						<div className="grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
							<div className="flex flex-col gap-6 p-6 md:p-12 lg:pr-12">
								<p className="label-mono text-sm text-muted">{servicios.workLabel}</p>
								<ul className="flex flex-col">
									{item.work.map((text) => (
										<li
											key={text}
											className="text-body relative border-b border-line py-4 pl-6 first:pt-0 last:border-b-0 last:pb-0 before:absolute before:left-0 before:top-[calc(1rem+0.65em)] before:size-2 before:bg-blueprint first:before:top-[0.65em]"
										>
											{text}
										</li>
									))}
								</ul>
							</div>

							<div className="flex flex-col gap-8 border-t border-line p-6 md:p-12 lg:border-l lg:border-t-0">
								<div className="flex flex-col gap-3">
									<p className="label-mono text-sm text-muted">{servicios.getLabel}</p>
									<p className="text-body">{item.get}</p>
								</div>
								<p className="text-base text-muted">
									<span className="font-bold text-consequence">{item.note.lead}</span> {item.note.body}
								</p>
								<div className="mt-auto">
									<CtaButton variant="compact" intent={item.intent}>
										{ctaLabel}
									</CtaButton>
								</div>
							</div>
						</div>
					</article>
				))}
			</div>
		</Section>
	);
}
