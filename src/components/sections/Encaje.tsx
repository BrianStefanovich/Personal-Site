import { SectionEyebrow } from '@/components/sections/SectionEyebrow';
import type { Translations } from '@/i18n';

interface EncajeProps {
	content: Translations['home']['encaje'];
}

export default function Encaje({ content: encaje }: EncajeProps) {
	return (
		<section className="container flex flex-col gap-8 py-12 md:py-[64px]">
			<div className="flex flex-col gap-2">
				<SectionEyebrow number={encaje.number} short={encaje.short} long={encaje.long} />
				<h2 className="pt-2 font-display text-[36px] leading-[43px] font-semibold text-foreground text-balance md:max-w-[768px] md:pt-4 md:text-[44px] md:leading-[54px]">
					{encaje.heading}
				</h2>
			</div>

			<div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8">
				<div className="rounded-[2px] border border-line bg-[#f1ede5] p-6 md:p-8">
					<h3 className="font-display text-2xl leading-8 font-semibold text-foreground">{encaje.fit.title}</h3>
					<ul className="flex flex-col gap-4 pt-5">
						{encaje.fit.items.map((item) => (
							<li key={item} className="flex items-start gap-3">
								<img
									src="/images/icon-plus.svg"
									alt=""
									width={14}
									height={14}
									className="mt-1.5 shrink-0"
									style={{ width: 14, height: 14 }}
								/>
								<span className="text-[15px] leading-6 text-body">{item}</span>
							</li>
						))}
					</ul>
				</div>

				<div className="rounded-[2px] border border-line bg-surface p-6 md:p-8">
					<h3 className="font-display text-2xl leading-8 font-semibold text-foreground">{encaje.noFit.title}</h3>
					<ul className="flex flex-col gap-4 pt-5">
						{encaje.noFit.items.map((item) => (
							<li key={item} className="flex items-start gap-3">
								<img
									src="/images/icon-dash.svg"
									alt=""
									width={14}
									height={2}
									className="mt-3 shrink-0"
									style={{ width: 14, height: 2 }}
								/>
								<span className="text-[15px] leading-6 text-muted">{item}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			{encaje.closing ? (
				<p className="text-center text-sm leading-6 text-body">{encaje.closing}</p>
			) : null}
		</section>
	);
}
