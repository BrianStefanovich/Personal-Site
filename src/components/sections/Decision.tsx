import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';

const { decision } = es.home;

export default function Decision() {
	return (
		<Section tone="inverse">
			<div className="flex flex-col gap-6">
				<h2 className="text-display reveal">{decision.headline}</h2>
				<p className="text-body max-w-[65ch] text-muted">{decision.body[0]}</p>
			</div>

			<ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 xl:grid-cols-5">
				{decision.questions.map((item) => {
					const isConsequence = 'consequence' in item;
					return (
						<li
							key={item.label}
							className={`relative flex flex-col gap-4 border-t-2 pt-6 before:absolute before:-top-[5px] before:left-0 before:size-2 ${
								isConsequence ? 'border-consequence before:bg-consequence' : 'border-ink before:bg-blueprint'
							}`}
						>
							<p className={`label-mono text-sm ${isConsequence ? 'text-consequence' : 'text-muted'}`}>{item.label}</p>
							<p className={`text-body ${isConsequence ? 'font-bold' : ''}`}>{item.question}</p>
						</li>
					);
				})}
			</ol>
		</Section>
	);
}
