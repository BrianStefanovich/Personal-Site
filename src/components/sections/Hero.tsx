import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroContent {
	eyebrow: string;
	headingLines: readonly string[];
	body: string;
	imageAlt: string;
	cta?: string;
	ctaHref?: string;
	note?: string;
	supports?: readonly string[];
}

interface HeroProps {
	content: HeroContent;
}

export default function Hero({ content: hero }: HeroProps) {
	const { supports } = hero;

	return (
		<section id="top" className="container pt-6 pb-16 md:pt-8 md:pb-24">
			<div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-6">
				<div className="flex min-w-0 flex-1 flex-col items-start gap-4 md:gap-[74px]">
					<p className="eyebrow md:tracking-[0.1em] md:text-accent">{hero.eyebrow}</p>

					<h1 className="font-display text-[44px] leading-[48px] font-bold tracking-[-0.01em] text-foreground text-balance md:text-[64px] md:leading-[68px] md:tracking-[-0.02em]">
						{hero.headingLines.map((line) => (
							<span key={line} className="block">
								{line}
							</span>
						))}
					</h1>

					<p className="max-w-[672px] pt-4 text-xl leading-[31px] text-body md:max-w-[576px] md:pt-0">
						{hero.body}
					</p>

					{hero.cta && hero.ctaHref ? (
						<div className="flex w-full flex-col items-center gap-2 pt-6 md:items-start md:pt-4">
							<a
								href={hero.ctaHref}
								className={cn(
									buttonVariants({ full: true }),
									'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] md:w-auto md:px-8 md:py-4 md:shadow-none',
								)}
							>
								{hero.cta}
							</a>
							{hero.note ? (
								<p className="max-w-[448px] pt-2 font-mono text-xs leading-[21px] text-body md:max-w-[576px] md:text-left">
									{hero.note}
								</p>
							) : null}
						</div>
					) : null}

					{supports ? (
						<ul className="flex flex-col gap-2 pt-4 md:flex-row md:flex-wrap md:gap-6">
							{supports.map((item) => (
								<li key={item} className="font-mono text-xs leading-4 tracking-[0.06em] text-muted uppercase">
									{item}
								</li>
							))}
						</ul>
					) : null}
				</div>

				<div className="w-full min-w-0 flex-1">
					<picture>
						<source media="(min-width: 768px)" srcSet="/images/hero-desktop.webp" />
						<img
							src="/images/hero-mobile.webp"
							alt={hero.imageAlt}
							fetchPriority="high"
							className="w-full"
						/>
					</picture>
				</div>
			</div>
		</section>
	);
}
