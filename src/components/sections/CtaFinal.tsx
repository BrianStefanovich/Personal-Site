import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CtaFinalContent {
	eyebrow?: string;
	heading: string;
	text?: string;
	ctaLabel: string;
	ctaHref: string;
	microcopy?: string;
}

interface CtaFinalProps {
	content: CtaFinalContent;
}

export default function CtaFinal({ content }: CtaFinalProps) {
	return (
		<section className="bg-background md:bg-[#f1ede5]">
			<div className="container flex flex-col items-center gap-4 py-16 text-center md:gap-6 md:py-24">
				{content.eyebrow ? <p className="eyebrow md:tracking-[0.1em] md:text-accent">{content.eyebrow}</p> : null}
				<h2 className="max-w-[720px] font-display text-[32px] leading-[38px] font-semibold text-foreground text-balance md:text-[44px] md:leading-[54px]">
					{content.heading}
				</h2>
				{content.text ? <p className="max-w-[640px] text-[17px] leading-7 text-body">{content.text}</p> : null}
				<a
					href={content.ctaHref}
					className={cn(
						buttonVariants({ full: true }),
						'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] md:w-auto md:px-8 md:py-4 md:shadow-none',
					)}
				>
					{content.ctaLabel}
				</a>
				{content.microcopy ? <p className="font-mono text-xs leading-5 text-muted">{content.microcopy}</p> : null}
			</div>
		</section>
	);
}
