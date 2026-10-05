import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight } from 'lucide-react';
import { es } from '@/i18n/es';

const { problema, servicios } = es.home;

export default function Problemas() {
	return (
		<Section>
			<div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-x-16">
				<div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
					<SectionHeading eyebrow={problema.eyebrow} title={problema.headline} subhead={problema.subhead} />
					<div className="measure mt-6 space-y-4 text-base md:text-lg">
						{problema.paragraphs.map((text) => (
							<p key={text} className="reveal">
								{text}
							</p>
						))}
					</div>

					<ol aria-label={problema.chain.label} className="reveal relative mt-10 space-y-5">
						<span aria-hidden="true" className="absolute bottom-2 left-[3.5px] top-2 w-px bg-line" />
						{problema.chain.steps.map((step, i, all) => (
							<li key={step} className="relative pl-8">
								<span
									aria-hidden="true"
									className={`absolute left-0 top-[0.4rem] size-2 ${i === all.length - 1 ? 'bg-consequence' : 'bg-ink'}`}
								/>
								<span className={`label-mono text-sm ${i === all.length - 1 ? 'text-consequence' : ''}`}>{step}</span>
							</li>
						))}
					</ol>
					<p className="reveal measure mt-6 text-base text-muted md:text-lg">{problema.chain.closing}</p>
				</div>

				<div>
					<h3 className="reveal">{problema.question}</h3>
					<ul className="mt-6">
						{problema.situations.map((situation, i) => {
							const service = servicios.items[i];
							return (
								<li
									key={situation.title}
									className="reveal group border-t border-line py-8 transition-colors hover:border-link last:border-b"
								>
									<p className="label-mono text-sm text-link">{service.phase}</p>
									<h4 className="mt-2 font-display text-xl font-bold leading-[1.3] md:text-2xl">{situation.title}</h4>
									<p className="measure mt-3 text-base text-muted md:text-lg">{situation.body}</p>
									<a
										href={`#${service.id}`}
										className="mt-4 inline-flex min-h-11 items-center gap-2 font-display font-bold text-link underline decoration-current/30 underline-offset-8 hover:decoration-current"
									>
										{problema.doorLabel}
										<ArrowRight
											aria-hidden="true"
											size={18}
											strokeWidth={2}
											className="transition-transform duration-200 group-hover:translate-x-1"
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</Section>
	);
}
