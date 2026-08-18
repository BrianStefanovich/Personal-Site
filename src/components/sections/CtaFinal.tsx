import { CtaButton } from '@/components/CtaButton';
import { Reveal } from '@/components/ui/Reveal';
import { es } from '@/i18n/es';

const { ctaFinal } = es.home;

export default function CtaFinal() {
	return (
		<section id="contacto" className="flex min-h-[70vh] items-center bg-carbon py-24 text-porcelain md:py-32">
			<div className="container max-w-2xl">
				<Reveal>
					<p className="eyebrow eyebrow-invert">{ctaFinal.eyebrow}</p>
					<h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">{ctaFinal.headline}</h2>
					<p className="mt-6 text-base leading-relaxed text-fog md:text-lg">{ctaFinal.body}</p>

					<div className="mt-9">
						<CtaButton intent="other" className="px-7 py-4 text-base">
							{ctaFinal.cta}
						</CtaButton>
					</div>

					<p className="mt-5 eyebrow eyebrow-invert">{ctaFinal.microcopy}</p>
				</Reveal>
			</div>
		</section>
	);
}
