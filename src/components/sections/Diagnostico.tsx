import { SectionEyebrow } from '@/components/sections/SectionEyebrow';
import { buttonVariants } from '@/components/ui/button';
import { getTranslations } from '@/i18n';
import { cn } from '@/lib/utils';

export default function Diagnostico() {
	const { diagnostico } = getTranslations();

	return (
		<section id="casos" className="container flex flex-col gap-8 py-12 md:gap-12 md:py-[64px]">
			<div className="flex flex-col gap-2">
				<SectionEyebrow number={diagnostico.number} short={diagnostico.short} long={diagnostico.long} />
				<h2 className="pt-2 font-display text-[36px] leading-[43px] font-semibold text-foreground text-balance md:pt-4 md:text-[44px] md:leading-[54px]">
					{diagnostico.heading}
				</h2>
				<p className="pt-4 text-[17px] leading-7 text-body md:max-w-[840px] md:text-xl md:leading-8">
					{diagnostico.body}
				</p>
			</div>

			<div className="flex flex-col gap-8 md:grid md:grid-cols-[325fr_333fr_333fr] md:items-start md:gap-8">
				<div className="flex flex-col gap-4 rounded-[2px] border border-line bg-[#f1ede5] p-6">
					<h3 className="font-display text-base leading-6 font-semibold text-foreground">
						{diagnostico.detailsLabel}
					</h3>
					<dl className="flex flex-col gap-3">
						{diagnostico.details.map((detail) => (
							<div key={detail.term} className="text-sm leading-5 text-body">
								<dt className="inline font-display font-semibold text-foreground">{detail.term}</dt>
								{detail.value ? <dd className="inline"> {detail.value}</dd> : null}
							</div>
						))}
					</dl>
				</div>

				<div className="flex flex-col gap-3">
					<h3 className="font-display text-base leading-6 font-semibold text-foreground">
						{diagnostico.includesLabel}
					</h3>
					<ul className="flex flex-col gap-2">
						{diagnostico.includes.map((item) => (
							<li key={item} className="flex items-start gap-3">
								<img
									src="/images/icon-check.svg"
									alt=""
									width={9}
									height={9}
									className="mt-2 shrink-0"
									style={{ width: 9.1, height: 9.42 }}
								/>
								<span className="text-sm leading-5 text-body">{item}</span>
							</li>
						))}
					</ul>
				</div>

				<div className="flex flex-col gap-3">
					<h3 className="font-display text-base leading-6 font-semibold text-foreground">
						{diagnostico.excludesLabel}
					</h3>
					<ul className="flex flex-col gap-2">
						{diagnostico.excludes.map((item) => (
							<li key={item} className="flex items-start gap-3">
								<span aria-hidden className="mt-2 h-px w-2 shrink-0 bg-muted" />
								<span className="text-sm leading-5 text-body">{item}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="flex flex-col gap-6">
				<h3 className="text-center font-display text-2xl leading-8 font-semibold text-foreground">
					{diagnostico.processLabel}
				</h3>
				<ol className="flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-8">
					{diagnostico.process.map((step) => (
						<li
							key={step.number}
							className="flex flex-col gap-2 rounded-[2px] border border-line bg-surface p-5 md:min-h-[270px]"
						>
							<span className="font-mono text-xl leading-6 text-accent-soft">{step.number}</span>
							<h4 className="font-display text-base leading-6 font-semibold text-foreground">{step.title}</h4>
							<p className="text-[13px] leading-5 text-body">{step.description}</p>
						</li>
					))}
				</ol>
			</div>

			<div className="flex flex-col items-center gap-3">
				<a
					href="#contacto"
					className={cn(
						buttonVariants({ full: true }),
						'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] md:w-auto md:px-8 md:py-4 md:shadow-none',
					)}
				>
					{diagnostico.cta}
				</a>
				<p className="max-w-[520px] text-center text-[13px] leading-5 text-muted">{diagnostico.note}</p>
			</div>
		</section>
	);
}
