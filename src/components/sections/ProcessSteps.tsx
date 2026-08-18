import { CtaButton } from '@/components/CtaButton';
import { Reveal } from '@/components/ui/Reveal';
import { useReveal } from '@/lib/useReveal';
import { es } from '@/i18n/es';

const { proceso } = es.home;

function StepNode({ number, label, body, isLast }: { number: string; label: string; body: string; isLast: boolean }) {
	const { ref, revealed } = useReveal<HTMLDivElement>('0px 0px -30% 0px');

	return (
		<div ref={ref} className="flex gap-6">
			<div className="flex flex-col items-center">
				<span
					className={`eyebrow flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
						revealed ? 'border-blueprint text-blueprint' : 'border-fog text-graphite'
					}`}
				>
					{number}
				</span>
				{!isLast && (
					<span
						className={`mt-1 w-px flex-1 transition-colors duration-700 ${revealed ? 'bg-blueprint' : 'bg-fog'}`}
						style={{ minHeight: '3rem' }}
					/>
				)}
			</div>
			<div className="pb-10">
				<p className="font-display text-lg font-bold text-carbon md:text-xl">{label}</p>
				<p className="mt-2 max-w-md text-sm leading-relaxed text-graphite md:text-base">{body}</p>
			</div>
		</div>
	);
}

export default function ProcessSteps() {
	return (
		<section id="como-trabajo" className="border-b border-fog bg-porcelain py-20 md:py-28">
			<div className="container">
				<Reveal className="max-w-2xl">
					<p className="eyebrow">{proceso.eyebrow}</p>
					<h2 className="mt-4 font-display text-3xl font-bold text-carbon md:text-4xl">{proceso.headline}</h2>
				</Reveal>

				<div className="mt-12 max-w-lg">
					{proceso.steps.map((step, i) => (
						<StepNode
							key={step.number}
							number={step.number}
							label={step.label}
							body={step.body}
							isLast={i === proceso.steps.length - 1}
						/>
					))}
				</div>

				<Reveal>
					<p className="text-sm text-steel line-through decoration-1">{proceso.closingNot}</p>
					<p className="mt-1 max-w-xl font-display text-xl font-bold text-carbon md:text-2xl">{proceso.closing}</p>
					<div className="mt-7">
						<CtaButton intent="other">{proceso.cta}</CtaButton>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
