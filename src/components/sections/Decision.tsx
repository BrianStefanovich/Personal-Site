import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { decision } = es.home;

export default function Decision() {
	return (
		<Section tone="inverse">
			<div className="grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
				<SectionHeading eyebrow={decision.eyebrow} title={decision.headline} />
				<div className="measure space-y-4 text-lg md:text-xl lg:pt-9">
					{decision.body.map((text) => (
						<p key={text} className="reveal">
							{text}
						</p>
					))}
				</div>
			</div>

			<ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-5">
				{decision.questions.map((item, i) => {
					const isConsequence = 'consequence' in item;
					return (
						<li
							key={item.label}
							className="reveal relative border-t border-line pt-6 before:absolute before:-top-1 before:left-0 before:size-2 before:bg-link data-[consequence]:before:bg-consequence"
							data-consequence={isConsequence ? '' : undefined}
						>
							<p className="label-mono text-sm text-link">
								{String(i + 1).padStart(2, '0')} · {item.label}
							</p>
							<p className={`mt-3 text-base md:text-lg ${isConsequence ? 'text-consequence' : ''}`}>{item.question}</p>
						</li>
					);
				})}
			</ol>
		</Section>
	);
}
