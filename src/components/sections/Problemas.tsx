import { Reveal } from '@/components/ui/Reveal';
import { es } from '@/i18n/es';

const { problem } = es.home;

export default function Problemas() {
	return (
		<section id="problemas" className="border-b border-fog bg-carbon py-24 text-porcelain md:py-36">
			<div className="container">
				<Reveal>
					<p className="eyebrow eyebrow-invert">{problem.eyebrow}</p>
					<h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">{problem.headline}</h2>
				</Reveal>

				<div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-8">
					<Reveal delayMs={80} className="md:col-span-7">
						<div className="space-y-4 text-base leading-relaxed text-fog md:text-lg">
							{problem.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
						</div>
						<p className="mt-6 max-w-xl text-base leading-relaxed text-fog md:text-lg">{problem.lede}</p>
						<p className="mt-6 font-display text-xl font-bold md:text-2xl">{problem.emphasis}</p>
					</Reveal>

					<Reveal delayMs={160} className="md:col-span-5">
						<ol className="tech-frame-dark rounded-md border p-6">
							{problem.chain.map((step, i) => (
								<li key={step} className="flex flex-col items-start">
									<span className="eyebrow eyebrow-invert">{step}</span>
									{i < problem.chain.length - 1 && (
										<span aria-hidden="true" className="my-2 text-steel">
											↓
										</span>
									)}
								</li>
							))}
						</ol>
					</Reveal>
				</div>

				<Reveal delayMs={120}>
					<p className="mt-16 max-w-2xl font-display text-2xl font-bold md:text-3xl">{problem.closing}</p>
				</Reveal>
			</div>
		</section>
	);
}
