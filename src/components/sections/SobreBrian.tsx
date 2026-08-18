import { Reveal } from '@/components/ui/Reveal';
import { es } from '@/i18n/es';

const { sobreMi } = es.home;

export default function SobreBrian() {
	return (
		<section id="sobre-mi" className="border-b border-fog bg-porcelain py-20 md:py-28">
			<div className="container grid gap-10 md:grid-cols-12 md:items-start md:gap-10">
				<Reveal className="md:col-span-5">
					<div className="tech-frame relative overflow-hidden rounded-lg">
						<img src="/images/bio.webp" alt="Retrato de Brian Stefanovich" className="aspect-[4/5] w-full object-cover" />
						<span className="absolute bottom-0 left-0 h-1 w-16 bg-copper" aria-hidden="true" />
					</div>
				</Reveal>

				<Reveal delayMs={100} className="md:col-span-7">
					<p className="eyebrow">{sobreMi.eyebrow}</p>
					<h2 className="mt-4 font-display text-3xl font-bold text-carbon md:text-4xl">{sobreMi.headline}</h2>

					<div className="mt-5 max-w-xl space-y-4 text-sm leading-relaxed text-graphite md:text-base">
						{sobreMi.paragraphs.map((p) => (
							<p key={p}>{p}</p>
						))}
					</div>

					<p className="eyebrow mt-6">{sobreMi.intersectionLabel}</p>
					<div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-base font-bold text-carbon md:text-lg">
						{sobreMi.intersection.map((word, i) => (
							<span key={word} className="flex items-center gap-3">
								{i > 0 && (
									<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-copper" />
								)}
								{word}
							</span>
						))}
					</div>

					<p className="mt-6 text-sm text-steel line-through decoration-1">{sobreMi.closingNot}</p>
					<p className="mt-1 max-w-xl font-display text-lg font-bold text-carbon">{sobreMi.closing}</p>

					<a href="/#casos" className="mt-6 inline-block text-sm font-semibold text-blueprint underline underline-offset-4">
						{sobreMi.cta}
					</a>
				</Reveal>
			</div>
		</section>
	);
}
