import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';
import type { CSSProperties } from 'react';

const { hero } = es.home;

export default function Hero() {
	return (
		<Section
			id="inicio"
			className="pt-6 md:pt-8"
			sheetClassName="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_17rem] md:gap-x-10 lg:grid-cols-[minmax(0,1fr)_21rem] xl:grid-cols-[minmax(0,1fr)_26rem]"
		>
			<div>
				<p className="enter label-mono text-sm text-link" style={{ '--i': 0 } as CSSProperties}>
					{hero.eyebrow}
				</p>
				<h1 className="enter mt-3" style={{ '--i': 1 } as CSSProperties}>
					{hero.headlineLines[0]} <br className="hidden sm:block" />
					{hero.headlineLines[1]}
				</h1>
				<p className="enter measure mt-5 text-lg text-muted sm:text-xl" style={{ '--i': 2 } as CSSProperties}>
					{hero.subhead}
				</p>
				<div className="enter mt-8 flex flex-wrap items-center gap-x-8 gap-y-2" style={{ '--i': 3 } as CSSProperties}>
					<CtaButton intent="other">{hero.cta}</CtaButton>
					<CtaButton variant="link" href="#como-trabajo">
						{es.nav.links[1].label}
					</CtaButton>
				</div>
				<p className="enter label-mono mt-5 text-xs text-muted" style={{ '--i': 4 } as CSSProperties}>
					{hero.note}
				</p>
			</div>

			<div
				className="enter surface-hero flex w-full max-w-[26rem] items-end justify-center overflow-hidden md:max-w-none"
				style={{ '--i': 2 } as CSSProperties}
			>
				<img
					src="/images/hero-brian.webp"
					alt={hero.imageAlt}
					width={464}
					height={397}
					fetchPriority="high"
					className="h-auto w-full max-w-[26rem]"
				/>
			</div>
		</Section>
	);
}
