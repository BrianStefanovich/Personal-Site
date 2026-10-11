import { CtaButton } from '@/components/CtaButton';
import { HeroMap } from '@/components/diagrams/Diagrams';
import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';
import type { CSSProperties } from 'react';

const { hero } = es.home;

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
					{hero.headline.map((part) =>
						typeof part === 'string' ? (
							part
						) : (
							<span key={part.b} className="text-consequence">
								{part.b}
							</span>
						),
					)}
				</h1>
				<div className="enter flex max-w-[37.5rem] flex-col gap-4" style={{ '--i': 2 } as CSSProperties}>
					<p className="text-lead">{hero.subhead}</p>
					<p className="text-body text-muted">{hero.method}</p>
				</div>
				<div className="enter mt-2 flex flex-col gap-4" style={{ '--i': 3 } as CSSProperties}>
					<div className="flex flex-wrap items-center gap-4">
						<CtaButton intent="other" location="hero" data-hero-cta="">
							{hero.cta}
						</CtaButton>
					</div>
					<p className="max-w-[34rem] text-sm leading-[1.5] text-muted">{hero.microcopy}</p>
				</div>
			</div>

			<div className="enter surface-hero p-5 md:p-8 lg:p-10" style={{ '--i': 2 } as CSSProperties}>
				<HeroMap />
			</div>
		</Section>
	);
}
