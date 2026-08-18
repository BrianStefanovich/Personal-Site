import { CtaButton } from '@/components/CtaButton';
import { es } from '@/i18n/es';
import type { CSSProperties } from 'react';

const { hero } = es.home;

export default function Hero() {
	return (
		<section id="inicio" className="border-b border-fog bg-porcelain pb-0 pt-10 md:pb-0 md:pt-10">
			<div className="container grid gap-12 md:grid-cols-12 md:items-center md:gap-8">
				<div className="md:col-span-7">
					<p
						className="eyebrow hero-eyebrow-type"
						style={
							{
								'--hero-eyebrow-steps': hero.eyebrow.length,
								'--hero-eyebrow-chars': `${hero.eyebrow.length}ch`,
							} as CSSProperties
						}
					>
						{hero.eyebrow}
					</p>

					<h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-carbon md:text-6xl">
						{hero.headlineLines.map((line, i) => (
							<span key={line} className="hero-line block" style={{ '--i': i } as CSSProperties}>
								{line}
							</span>
						))}
					</h1>

					<p className="hero-subhead mt-6 max-w-xl text-lg leading-relaxed text-graphite md:text-xl">{hero.subhead}</p>

					<div className="hero-cta-group mt-9">
						<CtaButton intent="other" className="px-6 py-3.5 text-base">
							{hero.cta}
						</CtaButton>
					</div>

					<p className="hero-supports mt-4 text-sm text-steel">{hero.microcopy}</p>
				</div>

				<div className="hero-photo order-first md:order-none md:col-span-5 md:self-end">
					<picture>
						<source media="(min-width: 768px)" srcSet="/images/hero-desktop.webp" width="1206" height="1809" />
						<img
							src="/images/hero-mobile.webp"
							width={700}
							height={1050}
							alt="Brian Stefanovich, arquitecto de software, junto a su laptop"
							className="mx-auto h-auto w-full max-w-[280px] md:max-w-none"
							fetchPriority="high"
							decoding="async"
						/>
					</picture>
				</div>
			</div>
		</section>
	);
}
