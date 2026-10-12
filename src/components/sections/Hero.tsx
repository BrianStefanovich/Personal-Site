import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';
import type { CSSProperties } from 'react';

const { hero, services, problems } = es.home;

/** The portrait stands on the bottom rule of the band: the pedestal in the photo is the floor of the hero. The three scenarios sit in the band right below it. */
export default function Hero() {
	return (
		<>
			<Section
				id="home"
				className="pb-12 md:pb-0! lg:flex lg:min-h-[calc(100dvh-var(--header-h)-8rem)] lg:pt-0!"
				contentClassName="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch lg:gap-x-10 xl:grid-cols-[minmax(0,12fr)_minmax(0,11fr)] xl:gap-x-16"
			>
				<div className="flex flex-col gap-6 md:gap-8 lg:justify-center lg:py-12 xl:py-16">
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
						<CtaButton variant="link" href="/services" data-track="service_index_open" data-track-location="hero" className="self-start">
							{hero.secondaryLink}
						</CtaButton>
					</div>
				</div>

				{/* Not shown on phones. From md it sits under the text (capped); from lg it fills its column and stands on the floor of the band. */}
				<div className="enter hidden items-end justify-center md:mx-auto md:flex md:max-w-[30rem] lg:mx-0 lg:max-w-none" style={{ '--i': 2 } as CSSProperties}>
					<picture className="block w-full">
						<source
							media="(min-width: 48rem)"
							srcSet="/images/hero-brian-640.webp 640w, /images/hero-brian-1024.webp 1024w"
							sizes="(min-width: 1024px) 40vw, 30rem"
						/>
						{/* Blank placeholder so phones never download the photo. */}
						<img
							src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
							alt={hero.imageAlt}
							width={1024}
							height={1536}
							fetchPriority="high"
							decoding="async"
							className="block h-auto w-full"
						/>
					</picture>
				</div>
			</Section>

			<Section tone="inverse" className="pt-0! pb-0!">
				<nav aria-label={hero.scenariosLabel}>
					<ul className="grid md:grid-cols-3 md:divide-x md:divide-line">
						{hero.scenarios.map((scenario, i) => (
							<li key={scenario.title} className="border-t border-line first:border-t-0 md:border-t-0 md:px-8 md:first:pl-0 md:last:pr-0">
								<a
									href={`#${problems.situations[i].id}`}
									data-track="service_route_open"
									data-track-service={services.items[i].id}
									data-track-location="hero"
									className="group grid h-full grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-1.5 py-5 md:py-9"
								>
									<span className="font-display text-xl font-bold leading-[1.2] md:text-[1.375rem] tracking-[-0.02em] text-balance transition-colors group-hover:text-link">
										{scenario.title}
									</span>
									<span aria-hidden="true" className="label-mono row-span-2 pt-1 text-link transition-transform duration-300 group-hover:translate-x-1">
										→
									</span>
									<span className="text-[0.9375rem] leading-[1.5] text-muted md:text-base md:leading-[1.55]">{scenario.text}</span>
								</a>
							</li>
						))}
					</ul>
				</nav>
			</Section>
		</>
	);
}
