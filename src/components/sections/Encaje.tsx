import { Reveal } from '@/components/ui/Reveal';
import { es } from '@/i18n/es';

const { fit } = es.home;

export default function Encaje() {
	return (
		<section id="fit" className="border-b border-fog bg-porcelain py-20 md:py-28">
			<div className="container">
				<Reveal className="max-w-2xl">
					<p className="eyebrow">{fit.eyebrow}</p>
					<h2 className="mt-4 font-display text-3xl font-bold text-carbon md:text-4xl">{fit.headline}</h2>
				</Reveal>

				<div className="mt-10 grid gap-6 md:grid-cols-2">
					<Reveal className="tech-frame rounded-md p-7">
						<p className="font-display text-lg font-bold text-carbon">{fit.yesLabel}</p>
						<ul className="mt-4 space-y-3">
							{fit.yes.map((item) => (
								<li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-graphite">
									<img src="/images/icon-check.svg" alt="" className="mt-1.5 shrink-0" />
									{item}
								</li>
							))}
						</ul>
					</Reveal>

					<Reveal delayMs={100} className="tech-frame rounded-md p-7">
						<p className="font-display text-lg font-bold text-carbon">{fit.noLabel}</p>
						<ul className="mt-4 space-y-3">
							{fit.no.map((item) => (
								<li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-graphite">
									<img src="/images/icon-plus.svg" alt="" className="mt-1.5 shrink-0 rotate-45 opacity-50 grayscale" />
									{item}
								</li>
							))}
						</ul>
					</Reveal>
				</div>

				<Reveal>
					<p className="mt-8 max-w-2xl font-display text-lg font-bold text-carbon">{fit.closing}</p>
				</Reveal>
			</div>
		</section>
	);
}
