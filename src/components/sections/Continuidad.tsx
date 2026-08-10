import { SectionEyebrow } from '@/components/sections/SectionEyebrow';
import { getTranslations } from '@/i18n';

export default function Continuidad() {
	const { continuidad } = getTranslations();

	return (
		<section id="como-trabajo" className="container flex flex-col gap-8 py-12 md:gap-10 md:py-[64px]">
			<div className="flex flex-col gap-2">
				<SectionEyebrow number={continuidad.number} short={continuidad.short} long={continuidad.long} />
				<h2 className="pt-2 font-display text-[36px] leading-[43px] font-semibold text-foreground text-balance md:max-w-[768px] md:pt-4 md:text-[44px] md:leading-[54px]">
					{continuidad.heading}
				</h2>
				<p className="pt-4 text-[17px] leading-7 text-body md:max-w-[720px]">{continuidad.body}</p>
			</div>

			<div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
				{continuidad.options.map((option) => (
					<article
						key={option.title}
						className="flex flex-col gap-2 rounded-[2px] border border-line bg-[#f1ede5] p-6 md:bg-surface"
					>
						<h3 className="font-display text-xl leading-7 font-semibold text-foreground">{option.title}</h3>
						<p className="text-[15px] leading-6 text-body md:text-sm md:leading-6">{option.description}</p>
					</article>
				))}
			</div>

			<p className="border-t border-line pt-6 text-center text-sm leading-6 text-body">{continuidad.note}</p>
		</section>
	);
}
