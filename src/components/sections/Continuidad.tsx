import { Reveal } from '@/components/ui/Reveal';
import { useReveal } from '@/lib/useReveal';
import { es } from '@/i18n/es';

const { principios } = es.home;

function PrincipioNode({ label, question, isLast }: { label: string; question: string; isLast: boolean }) {
	const { ref, revealed } = useReveal<HTMLDivElement>('0px 0px -30% 0px');

	return (
		<div ref={ref} className="flex gap-5">
			<div className="flex flex-col items-center">
				<span
					className={`h-3.5 w-3.5 shrink-0 rounded-full border-2 transition-colors duration-500 ${
						revealed ? 'border-blueprint bg-blueprint' : 'border-fog bg-porcelain'
					}`}
				/>
				{!isLast && (
					<span
						className={`mt-1 w-px flex-1 transition-colors duration-700 ${revealed ? 'bg-blueprint' : 'bg-fog'}`}
						style={{ minHeight: '3.5rem' }}
					/>
				)}
			</div>
			<div className="pb-12">
				<p className="eyebrow">{label}</p>
				<p className="mt-1.5 max-w-md font-display text-lg font-bold text-carbon md:text-xl">{question}</p>
			</div>
		</div>
	);
}

export default function Continuidad() {
	return (
		<section id="como-pienso" className="border-b border-fog bg-porcelain py-20 md:py-28">
			<div className="container">
				<Reveal className="max-w-2xl">
					<p className="eyebrow">{principios.eyebrow}</p>
					<h2 className="mt-4 font-display text-3xl font-bold text-carbon md:text-4xl">{principios.headline}</h2>
					<p className="mt-4 text-sm leading-relaxed text-graphite md:text-base">{principios.lede}</p>
				</Reveal>

				<div className="mt-12 max-w-lg">
					{principios.nodes.map((node, i) => (
						<PrincipioNode
							key={node.label}
							label={node.label}
							question={node.question}
							isLast={i === principios.nodes.length - 1}
						/>
					))}
				</div>

				<Reveal>
					<p className="text-sm text-steel line-through decoration-1">{principios.closingNot}</p>
					<p className="mt-1 max-w-2xl font-display text-xl font-bold text-carbon md:text-2xl">{principios.closing}</p>
				</Reveal>
			</div>
		</section>
	);
}
