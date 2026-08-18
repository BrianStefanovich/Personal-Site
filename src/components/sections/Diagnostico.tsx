import { CtaButton } from '@/components/CtaButton';
import { Reveal } from '@/components/ui/Reveal';
import { es } from '@/i18n/es';

const { services } = es.home;

export default function Diagnostico() {
	return (
		<div>
			{/* 01 — Sistemas existentes: diagnóstico primero, luego el flujo de cuatro pasos. */}
			<section id={services.existentes.id} className="border-b border-fog bg-porcelain py-20 md:py-28">
				<div className="container grid gap-12 md:grid-cols-12 md:gap-10">
					<Reveal className="md:col-span-5">
						<p className="eyebrow">{services.existentes.eyebrow}</p>
						<h3 className="mt-4 font-display text-2xl font-bold leading-tight text-carbon md:text-3xl">
							{services.existentes.headline}
						</h3>
						<p className="mt-5 text-sm leading-relaxed text-graphite md:text-base">{services.existentes.intro}</p>
						<ul className="mt-5 space-y-2.5">
							{services.existentes.signals.map((signal) => (
								<li key={signal} className="flex items-start gap-2.5 text-sm leading-relaxed text-graphite">
									<img src="/images/icon-dash.svg" alt="" className="mt-2.5 shrink-0" />
									{signal}
								</li>
							))}
						</ul>
					</Reveal>

					<Reveal delayMs={100} className="md:col-span-7">
						<p className="text-sm leading-relaxed text-graphite">{services.existentes.pivot}</p>
						<p className="mt-2 font-display text-lg font-bold text-carbon">{services.existentes.pivotEmphasis}</p>

						<ol className="tech-frame mt-8 grid gap-0 divide-y divide-fog rounded-md sm:grid-cols-2 sm:divide-x sm:divide-y-0">
							{services.existentes.steps.map((step) => (
								<li key={step.label} className="p-6">
									<p className="eyebrow">{step.label}</p>
									<p className="mt-2 text-sm leading-relaxed text-graphite">{step.body}</p>
								</li>
							))}
						</ol>

						<div className="tech-frame mt-8 rounded-md p-6">
							<p className="eyebrow">{services.existentes.resultLabel}</p>
							<p className="mt-2 text-sm text-steel line-through decoration-1">{services.existentes.resultNot}</p>
							<p className="mt-1 font-display text-lg font-bold text-carbon">{services.existentes.result}</p>
						</div>

						<div className="mt-7">
							<CtaButton variant="contextual" intent={services.existentes.intent}>
								{services.existentes.cta}
							</CtaButton>
						</div>
					</Reveal>
				</div>
			</section>

			{/* 02 — Nuevos negocios: cinco preguntas antes de hablar de tecnología. */}
			<section id={services.nuevos.id} className="border-b border-fog bg-porcelain py-20 md:py-28">
				<div className="container">
					<Reveal className="max-w-2xl">
						<p className="eyebrow">{services.nuevos.eyebrow}</p>
						<h3 className="mt-4 font-display text-2xl font-bold leading-tight text-carbon md:text-3xl">
							{services.nuevos.headline}
						</h3>
						<p className="mt-5 text-sm leading-relaxed text-graphite md:text-base">{services.nuevos.intro}</p>
						<p className="mt-4 font-display text-lg font-bold text-carbon">{services.nuevos.pivot}</p>
					</Reveal>

					<div className="mt-10 grid gap-px overflow-hidden rounded-md border border-fog bg-fog sm:grid-cols-2">
						{services.nuevos.questions.map((item, i) => (
							<Reveal key={item.q} delayMs={i * 70} className="bg-porcelain p-6">
								<p className="font-display text-base font-bold text-carbon">{item.q}</p>
								<p className="mt-2 text-sm leading-relaxed text-graphite">{item.a}</p>
							</Reveal>
						))}
						<Reveal delayMs={services.nuevos.questions.length * 70} className="bg-carbon p-6 text-porcelain">
							<p className="eyebrow eyebrow-invert">{services.nuevos.scopeLede}</p>
							<p className="mt-2 text-sm leading-relaxed text-fog">{services.nuevos.scope}</p>
						</Reveal>
					</div>

					<Reveal className="tech-frame mt-8 max-w-2xl rounded-md p-6">
						<p className="eyebrow">{services.nuevos.resultLabel}</p>
						<p className="mt-2 font-display text-lg font-bold text-carbon">{services.nuevos.result}</p>
						<div className="mt-6">
							<CtaButton variant="contextual" intent={services.nuevos.intent}>
								{services.nuevos.cta}
							</CtaButton>
						</div>
					</Reveal>
				</div>
			</section>

			{/* 03 — Arquitecto fraccional: capacidad transversal, no un reemplazo del equipo. */}
			<section id={services.fraccional.id} className="bg-porcelain py-20 md:py-28">
				<div className="container grid gap-12 md:grid-cols-12 md:gap-10">
					<Reveal className="md:col-span-5">
						<p className="eyebrow">{services.fraccional.eyebrow}</p>
						<h3 className="mt-4 font-display text-2xl font-bold leading-tight text-carbon md:text-3xl">
							{services.fraccional.headline}
						</h3>
						<p className="mt-5 text-sm leading-relaxed text-graphite md:text-base">{services.fraccional.intro}</p>
						<p className="mt-3 text-sm leading-relaxed text-graphite md:text-base">{services.fraccional.pivot}</p>

						<div className="tech-frame mt-6 rounded-md p-5">
							<p className="text-sm text-steel line-through decoration-1">{services.fraccional.notReplace}</p>
							<p className="mt-1 font-display text-base font-bold text-carbon">{services.fraccional.notReplaceEmphasis}</p>
						</div>
					</Reveal>

					<Reveal delayMs={100} className="md:col-span-7">
						<p className="eyebrow">{services.fraccional.workWith}</p>
						<ul className="mt-4 grid gap-x-6 gap-y-2.5 text-sm leading-relaxed text-graphite sm:grid-cols-2">
							{services.fraccional.topics.map((topic) => (
								<li key={topic} className="flex items-start gap-2.5">
									<img src="/images/icon-dash.svg" alt="" className="mt-2.5 shrink-0" />
									{topic}
								</li>
							))}
						</ul>

						<div className="tech-frame mt-8 rounded-md p-6">
							<p className="eyebrow">{services.fraccional.fitLabel}</p>
							<ul className="mt-3 space-y-2.5">
								{services.fraccional.fits.map((fit) => (
									<li key={fit} className="flex items-start gap-2.5 text-sm leading-relaxed text-carbon">
										<img src="/images/icon-check.svg" alt="" className="mt-1.5 shrink-0" />
										{fit}
									</li>
								))}
							</ul>
						</div>

						<div className="mt-7">
							<CtaButton variant="contextual" intent={services.fraccional.intent}>
								{services.fraccional.cta}
							</CtaButton>
						</div>
					</Reveal>
				</div>
			</section>
		</div>
	);
}
