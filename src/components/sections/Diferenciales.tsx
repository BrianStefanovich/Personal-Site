import { SectionEyebrow } from '@/components/sections/SectionEyebrow';
import type { Translations } from '@/i18n';

interface DiferencialesProps {
	content: Translations['home']['diferenciales'];
}

export default function Diferenciales({ content: diferenciales }: DiferencialesProps) {
	return (
		<section className="container flex flex-col gap-8 py-12 md:gap-12 md:py-32">
			<div className="flex flex-col gap-2">
				<SectionEyebrow number={diferenciales.number} short={diferenciales.short} long={diferenciales.long} />
				<h2 className="pt-2 font-display text-[36px] leading-[43px] font-semibold text-foreground text-balance md:max-w-[768px] md:pt-4 md:text-[44px] md:leading-[54px]">
					{diferenciales.heading}
				</h2>
			</div>

			<ul className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				{diferenciales.items.map((item) => (
					<li key={item.title} className="flex items-start gap-3">
						<img
							src="/images/icon-check-circle.svg"
							alt=""
							width={20}
							height={20}
							className="mt-1 shrink-0"
							style={{ width: 20, height: 20 }}
						/>
						<div className="flex flex-col gap-1">
							<h3 className="font-display text-base leading-6 font-semibold text-foreground">{item.title}</h3>
							<p className="text-[15px] leading-6 text-body md:text-sm">{item.description}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
