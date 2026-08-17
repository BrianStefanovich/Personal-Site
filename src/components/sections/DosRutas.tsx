import { SectionEyebrow } from '@/components/sections/SectionEyebrow';
import type { Translations } from '@/i18n';

interface DosRutasProps {
	content: Translations['home']['dosRutas'];
}

export default function DosRutas({ content: dosRutas }: DosRutasProps) {
	return (
		<section id="servicios" className="container flex flex-col gap-8 py-12 md:gap-12 md:py-[64px]">
			<div className="flex flex-col gap-2">
				<SectionEyebrow number={dosRutas.number} short={dosRutas.short} long={dosRutas.long} />
				<h2 className="pt-2 font-display text-[36px] leading-[43px] font-semibold text-foreground text-balance md:max-w-[768px] md:pt-4 md:text-[44px] md:leading-[54px]">
					{dosRutas.heading}
				</h2>
			</div>

			<div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8">
				{dosRutas.rutas.map((ruta) => (
					<article
						key={ruta.title}
						className="flex flex-col gap-4 rounded-[2px] border border-line bg-[#f1ede5] p-[25px] md:bg-surface md:p-8"
					>
						<p className="eyebrow">{ruta.subtitle}</p>
						<h3 className="font-display text-2xl leading-[31px] font-semibold text-foreground">{ruta.title}</h3>
						<p className="text-base leading-6 text-body">{ruta.description}</p>

						<p className="pt-2 font-display text-base leading-6 font-semibold text-foreground">{dosRutas.helpLabel}</p>
						<ul className="flex flex-col gap-2">
							{ruta.items.map((item) => (
								<li key={item} className="flex items-start gap-3">
									<img
										src="/images/icon-check.svg"
										alt=""
										width={14}
										height={10}
										className="mt-[7px] shrink-0"
										style={{ width: 13.58, height: 10.02 }}
									/>
									<span className="text-[15px] leading-6 text-body md:text-base">{item}</span>
								</li>
							))}
						</ul>

						<a
							href={ruta.href}
							className="mt-auto pt-4 font-display text-base leading-6 font-semibold text-accent underline"
						>
							{ruta.linkLabel}
						</a>
					</article>
				))}
			</div>
		</section>
	);
}
