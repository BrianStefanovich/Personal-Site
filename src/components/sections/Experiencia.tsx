import { Reveal } from '@/components/ui/Reveal';
import { es } from '@/i18n/es';

const { casos } = es.home;

export default function Experiencia() {
	return (
		<section id="casos" className="border-b border-fog bg-porcelain py-20 md:py-28">
			<div className="container">
				<Reveal className="max-w-2xl">
					<p className="eyebrow">{casos.eyebrow}</p>
					<h2 className="mt-4 font-display text-3xl font-bold text-carbon md:text-4xl">{casos.headline}</h2>
					<p className="mt-4 text-sm leading-relaxed text-graphite md:text-base">{casos.lede}</p>
				</Reveal>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{casos.items.map((item, i) => (
						<Reveal key={item.slug} delayMs={i * 80}>
							<a
								href={`/casos/${item.slug}`}
								className="tech-frame group flex h-full flex-col rounded-md p-7 transition-colors hover:border-blueprint"
							>
								<p className="font-display text-sm font-bold uppercase tracking-wide text-carbon">{item.name}</p>
								<p className="mt-3 font-display text-lg font-bold leading-snug text-carbon md:text-xl">
									{item.card.headline}
								</p>
								<p className="mt-3 flex-1 text-sm leading-relaxed text-graphite">{item.card.body}</p>

								<span className="eyebrow mt-6 inline-block w-fit border border-fog px-2.5 py-1">{item.card.tag}</span>

								<span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blueprint">
									Ver caso
									<span
										aria-hidden="true"
										className="inline-block transition-transform duration-200 group-hover:translate-x-1"
									>
										→
									</span>
								</span>
							</a>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
