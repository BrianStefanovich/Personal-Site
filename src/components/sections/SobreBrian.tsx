import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { sobreBrian } = es.home;

export default function SobreBrian() {
	return (
		<Section id="sobre-brian">
			<div className="grid items-start gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-x-16">
				<div className="reveal surface-hero flex w-full max-w-[26rem] items-end justify-center overflow-hidden lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
					<img
						src="/images/sobre-brian.webp"
						alt={sobreBrian.imageAlt}
						width={544}
						height={563}
						loading="lazy"
						className="h-auto w-full max-w-[26rem]"
					/>
				</div>

				<div>
					<SectionHeading eyebrow={sobreBrian.eyebrow} title={sobreBrian.headline} subhead={sobreBrian.subhead} />
					<div className="measure mt-6 space-y-4 text-base md:text-lg">
						{sobreBrian.paragraphs.map((text) => (
							<p key={text} className="reveal">
								{text}
							</p>
						))}
					</div>

					<p className="reveal measure mt-8 text-lg md:text-xl">{sobreBrian.lead}</p>

					<dl className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
						{sobreBrian.areas.map((area) => (
							<div key={area.title} className="reveal relative border-t border-line pt-5 before:absolute before:-top-1 before:left-0 before:size-2 before:bg-link">
								<dt className="font-display text-xl font-bold md:text-2xl">{area.title}</dt>
								<dd className="mt-2 text-base text-muted md:text-lg">{area.body}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</Section>
	);
}
