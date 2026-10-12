import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';
import type { CSSProperties } from 'react';

const { hero, servicios, problema } = es.home;

export default function Hero() {
	return (
		<Section
			id="inicio"
			className="md:pb-16 lg:flex lg:min-h-[calc(100dvh-var(--header-h)-11rem)] lg:items-center"
			contentClassName="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,13fr)_minmax(0,11fr)] lg:gap-x-16"
		>
			<div className="flex flex-col gap-6 md:gap-8">
				<p className="enter label-mono text-sm text-muted" style={{ '--i': 0 } as CSSProperties}>
					{hero.eyebrow}
				</p>
				<h1 className="enter text-hero max-w-[48rem]" style={{ '--i': 1 } as CSSProperties}>
					{hero.headline.map((line, i) => (
						<span key={i} className="block">
							{line.map((part) =>
								typeof part === 'string' ? (
									part
								) : (
									<span key={part.b} className="text-consequence">
										{part.b}
									</span>
								),
							)}
						</span>
					))}
				</h1>
				<p className="enter text-lead max-w-[37.5rem]" style={{ '--i': 2 } as CSSProperties}>
					{hero.subhead}
				</p>
				<div className="enter mt-2 flex flex-col gap-4" style={{ '--i': 3 } as CSSProperties}>
					<div className="flex flex-col items-start gap-3">
						<CtaButton intent="other" location="hero" data-hero-cta="">
							{hero.cta}
						</CtaButton>
						<p className="max-w-[34rem] text-sm leading-[1.5] text-muted">{hero.ctaNote}</p>
					</div>
					<CtaButton variant="link" href="/servicios" data-track="service_index_open" data-track-location="hero" className="self-start">
						{hero.secondaryLink}
					</CtaButton>
				</div>
			</div>

			<nav aria-label={hero.scenariosLabel} className="enter surface-hero p-6 md:p-8 lg:p-10" style={{ '--i': 2 } as CSSProperties}>
				<ul className="flex flex-col">
					{hero.scenarios.map((scenario, i) => (
						<li key={scenario.title} className="border-t border-line py-6 first:border-t-0 first:pt-0 last:pb-0">
							<a
								href={`#${problema.situations[i].id}`}
								data-track="service_route_open"
								data-track-service={servicios.items[i].id}
								data-track-location="hero"
								className="group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-2"
							>
								<span className="text-headline font-display font-bold text-balance transition-colors group-hover:text-link">
									{scenario.title}
								</span>
								<span aria-hidden="true" className="label-mono row-span-2 pt-1 text-link transition-transform duration-300 group-hover:translate-x-1">
									→
								</span>
								<span className="text-body max-w-[34rem] text-muted">{scenario.text}</span>
							</a>
						</li>
					))}
				</ul>
			</nav>
		</Section>
	);
}
