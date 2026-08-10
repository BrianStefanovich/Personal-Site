import { SectionEyebrow } from '@/components/sections/SectionEyebrow';
import { buttonVariants } from '@/components/ui/button';
import { getTranslations } from '@/i18n';
import { cn } from '@/lib/utils';

export default function Sprint() {
	const { sprint } = getTranslations();

	return (
		<section className="container flex flex-col gap-8 py-12 md:gap-10 md:py-[64px]">
			<div className="flex flex-col gap-2">
				<SectionEyebrow number={sprint.number} short={sprint.short} long={sprint.long} />
				<h2 className="pt-2 font-display text-[36px] leading-[43px] font-semibold text-foreground text-balance md:max-w-[768px] md:pt-4 md:text-[44px] md:leading-[54px]">
					{sprint.heading}
				</h2>
				<div className="flex flex-col gap-4 pt-4 md:max-w-[640px]">
					{sprint.body.map((paragraph) => (
						<p key={paragraph} className="text-[17px] leading-7 text-body">
							{paragraph}
						</p>
					))}
				</div>
			</div>

			<div className="flex flex-col gap-6 rounded-[2px] border border-line bg-[#f1ede5] p-6 md:grid md:grid-cols-2 md:items-start md:gap-8 md:bg-surface md:p-8">
				<div className="flex flex-col gap-3">
					<h3 className="font-display text-base leading-6 font-semibold text-foreground">
						{sprint.deliverablesLabel}
					</h3>
					<ul className="flex flex-col gap-2">
						{sprint.deliverables.map((item) => (
							<li key={item} className="flex items-start gap-3">
								<span aria-hidden className="mt-[10px] size-1 shrink-0 rounded-full bg-accent-soft" />
								<span className="text-[15px] leading-6 text-body md:text-base">{item}</span>
							</li>
						))}
					</ul>
				</div>

				<div className="flex flex-col gap-4">
					<div className="border-l-4 border-accent-soft bg-[#eae6de] p-5 md:bg-[#f1ede5]">
						<h3 className="font-display text-base leading-6 font-semibold text-foreground">
							{sprint.modelLabel}
						</h3>
						<p className="pt-1 text-sm leading-5 text-body">{sprint.model}</p>
					</div>
					<a
						href="#contacto"
						className={cn(
							buttonVariants({ full: true }),
							'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] md:shadow-none',
						)}
					>
						{sprint.cta}
					</a>
				</div>
			</div>
		</section>
	);
}
