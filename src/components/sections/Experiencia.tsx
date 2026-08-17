import { SectionEyebrow } from '@/components/sections/SectionEyebrow';

interface Caso {
	title: string;
	text: string;
	demuestra: string;
}

interface ExperienciaContent {
	number?: string;
	short?: string;
	long?: string;
	heading: string;
	intro?: string;
	casos: readonly Caso[];
	linkLabel?: string;
	linkHref?: string;
}

interface ExperienciaProps {
	id?: string;
	content: ExperienciaContent;
}

export default function Experiencia({ id, content: experiencia }: ExperienciaProps) {
	return (
		<section id={id} className="container flex flex-col gap-8 py-12 md:gap-10 md:py-[64px]">
			<div className="flex flex-col gap-2">
				{experiencia.number && experiencia.short && experiencia.long ? (
					<SectionEyebrow number={experiencia.number} short={experiencia.short} long={experiencia.long} />
				) : null}
				<h2 className="pt-2 font-display text-[36px] leading-[43px] font-semibold text-foreground text-balance md:max-w-[768px] md:pt-4 md:text-[44px] md:leading-[54px]">
					{experiencia.heading}
				</h2>
				{experiencia.intro ? (
					<p className="pt-4 text-[17px] leading-7 text-body md:max-w-[720px]">{experiencia.intro}</p>
				) : null}
			</div>

			<div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8">
				{experiencia.casos.map((caso) => (
					<article
						key={caso.title}
						className="flex flex-col gap-3 rounded-[2px] border border-line bg-surface p-6"
					>
						<h3 className="font-display text-xl leading-7 font-semibold text-foreground">{caso.title}</h3>
						<p className="text-[15px] leading-6 text-body">{caso.text}</p>
						<p className="font-mono text-xs leading-4 tracking-[0.06em] text-accent-soft uppercase">
							Demuestra: {caso.demuestra}
						</p>
					</article>
				))}
			</div>

			{experiencia.linkLabel && experiencia.linkHref ? (
				<a href={experiencia.linkHref} className="font-display text-base leading-6 font-semibold text-accent underline">
					{experiencia.linkLabel}
				</a>
			) : null}
		</section>
	);
}
