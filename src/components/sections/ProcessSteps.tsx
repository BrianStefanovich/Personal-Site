import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { proceso } = es.home;

export default function ProcessSteps() {
	return (
		<Section id="como-trabajo">
			<div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-x-16">
				<div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
					<SectionHeading eyebrow={proceso.eyebrow} title={proceso.headline} subhead={proceso.subhead} />
					<p className="reveal measure mt-4 text-base md:text-lg">{proceso.intro}</p>
				</div>

				<ol className="relative space-y-12">
					<span aria-hidden="true" className="absolute bottom-3 left-[3.5px] top-3 w-px bg-line" />
					{proceso.steps.map((step) => (
						<li key={step.title} className="reveal relative pl-10">
							<span aria-hidden="true" className="absolute left-0 top-[0.4rem] size-2 bg-link" />
							<p className="label-mono text-sm text-link">{proceso.phaseLabel} {step.phase}</p>
							<h3 className="mt-3">{step.title}</h3>
							<p className="measure mt-3 text-base md:text-lg">{step.body}</p>
						</li>
					))}
				</ol>
			</div>

			<div className="reveal mt-16 grid gap-4 border-t border-line pt-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-x-16">
				<h3 className="text-2xl md:text-3xl">{proceso.closingTitle}</h3>
				<p className="measure text-lg text-muted md:text-xl">{proceso.closing}</p>
			</div>
		</Section>
	);
}
