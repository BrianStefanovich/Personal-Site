import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { ctaFinal, hero } = es.home;

export default function CtaFinal() {
	return (
		<Section tone="inverse" sheetClassName="overflow-hidden px-0 py-0 md:p-0 lg:p-0">
			<div className="grid items-end gap-8 px-5 pt-8 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-x-12 md:px-12 md:pt-14 lg:grid-cols-[minmax(0,23rem)_1fr] lg:px-14">
				<img
					src="/images/brian-conversemos.webp"
					alt={ctaFinal.imageAlt}
					width={383}
					height={400}
					loading="lazy"
					className="order-2 mx-auto h-auto w-full max-w-[23rem] md:order-1 md:mx-0"
				/>

				<div className="order-1 md:order-2 md:pb-14">
					<SectionHeading eyebrow={ctaFinal.eyebrow} title={ctaFinal.headline} />
					<h3 className="reveal mt-6">{ctaFinal.subhead}</h3>
					<div className="measure mt-5 space-y-4 text-lg md:text-xl">
						{ctaFinal.paragraphs.map((text) => (
							<p key={text} className="reveal">
								{text}
							</p>
						))}
					</div>
					<div className="mt-8">
						<CtaButton intent="other">{ctaFinal.cta}</CtaButton>
					</div>
					<p className="label-mono mt-5 text-xs text-muted">{hero.note}</p>
				</div>
			</div>
		</Section>
	);
}
