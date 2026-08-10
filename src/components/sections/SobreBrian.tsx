import { SectionEyebrow } from '@/components/sections/SectionEyebrow';
import { getTranslations } from '@/i18n';

export default function SobreBrian() {
	const { sobreBrian } = getTranslations();

	return (
		<section id="sobre-mi" className="container flex flex-col gap-8 py-12 md:grid md:grid-cols-[325px_1fr] md:items-center md:gap-16 md:py-[64px]">
			<img
				src="/images/bio.webp"
				alt={sobreBrian.imageAlt}
				width={325}
				height={337}
				loading="lazy"
				decoding="async"
				className="h-[337px] w-full max-w-[325px] object-cover object-top md:w-[325px]"
			/>

			<div className="flex flex-col gap-4">
				<SectionEyebrow number={sobreBrian.number} short={sobreBrian.short} long={sobreBrian.long} />
				<h2 className="font-display text-[36px] leading-[43px] font-semibold text-foreground text-balance md:text-[40px] md:leading-[48px]">
					{sobreBrian.heading}
				</h2>

				<div className="flex flex-col gap-4">
					{sobreBrian.paragraphs.map((paragraph) => (
						<p key={paragraph} className="text-[15px] leading-6 text-body md:text-base">
							{paragraph}
						</p>
					))}
				</div>

				<ul className="flex flex-col gap-3 pt-2 md:flex-row md:gap-6">
					{sobreBrian.links.map((link) => (
						<li key={link.href}>
							<a href={link.href} className="inline-flex items-center gap-2 text-accent underline">
								<img
									src={link.icon}
									alt=""
									width={12}
									height={12}
									className="shrink-0"
									style={{ width: 12, height: 12 }}
								/>
								<span className="text-[15px] leading-6 md:text-base">{link.label}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
